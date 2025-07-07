import uuid
import yaml
import os
from julep import Client

# Generate UUIDs for agent and task
AGENT_UUID = uuid.uuid4()
TASK_UUID = uuid.uuid4()
from dotenv import load_dotenv
load_dotenv()

# Get API keys from environment variables
JULEP_API_KEY = os.environ["JULEP_API_KEY"]
OPENWEATHERMAP_API_KEY = os.environ.get("OPENWEATHERMAP_API_KEY", "YOUR_API_KEY")
BRAVE_API_KEY = os.environ.get("BRAVE_API_KEY", "YOUR_API_KEY")

# Create a Julep client
client = Client(api_key=JULEP_API_KEY, environment="production")

# Define the agent
agent = client.agents.create_or_update(
    agent_id=AGENT_UUID,
    name="Weather-Aware Foodie Guide",
    about="A culinary assistant that creates personalized food tours considering weather conditions, local specialties, and restaurant locations.",
    model="gpt-4o-mini",
)

# Define the task
task_def = yaml.safe_load(f"""
# yaml-language-server: $schema=https://raw.githubusercontent.com/julep-ai/julep/refs/heads/dev/schemas/create_task_request.json
name: Weather-Aware Foodie Tour Planner with Maps
description: Creates a weather-aware food tour with local specialties and Google Maps locations for different cities, structured by meal times.

########################################################
####################### INPUT SCHEMA ####################
########################################################
input_schema:
  type: object
  properties:
    cities:
      type: array
      items:
        type: string
      description: The cities to create food tours for.

########################################################
####################### TOOLS ##########################
########################################################
tools:
- name: weather
  type: integration
  integration:
    provider: weather
    setup:
      openweathermap_api_key: {OPENWEATHERMAP_API_KEY}

- name: internet_search
  type: integration
  integration:
    provider: brave
    setup:
      brave_api_key: {BRAVE_API_KEY}

########################################################
####################### MAIN WORKFLOW ##################
########################################################
main:
# Step 0: Get detailed weather data for each city
- over: $ steps[0].input.cities
  map:
    tool: weather
    arguments:
      location: $ _
      details: true

# Step 1: Search for breakfast spots with locations for each city
- over: $ steps[0].input.cities
  map:
    tool: internet_search
    arguments:
      query: $ 'best breakfast and brunch restaurants in ' + _ + ' with address and google maps location'

# Step 2: Search for lunch spots with locations for each city
- over: $ steps[0].input.cities
  map:
    tool: internet_search
    arguments:
      query: $ 'best lunch restaurants and local specialties in ' + _ + ' with address and google maps location'

# Step 3: Search for dinner spots with locations for each city
- over: $ steps[0].input.cities
  map:
    tool: internet_search
    arguments:
      query: $ 'top-rated dinner restaurants and fine dining in ' + _ + ' with address and google maps location'

# Step 4: Search for iconic local dishes and their locations
- over: $ steps[0].input.cities
  map:
    tool: internet_search
    arguments:
      query: $ 'most iconic traditional dishes and where to find them in ' + _ + ' with restaurant locations'

# Step 5: Zip all data together
- evaluate:
    zipped: |-
      $ list(
        zip(
          steps[0].input.cities,
          [output['result'] for output in steps[0].output],  # weather
          steps[1].output,  # breakfast
          steps[2].output,  # lunch
          steps[3].output,  # dinner
          steps[4].output   # local dishes
        )
      )

# Step 6: Create detailed food tour itineraries with maps
- over: $ _['zipped']
  parallelism: 3
  map:
    prompt:
    - role: system
      content: >-
        $ f'''You are {{agent.name}}. Create a detailed food tour itinerary in Markdown format that includes:
        
        1. Current Weather Analysis:
           - Temperature and conditions
           - Indoor/outdoor dining recommendations as a blockquote
        
        2. Three Iconic Local Dishes:
           - Brief history and significance
           - Best seasons/weather to enjoy them
           - Where to find them (with Google Maps links)
           - High-quality image URLs of the dishes
        
        3. Structured Meal Plan:
           - Breakfast (8:00-10:00)
           - Lunch (12:00-14:00)
           - Dinner (18:00-21:00)
           
        For each restaurant recommendation:
           - Name with Google Maps link [name](https://maps.google.com/?q=RESTAURANT_NAME+ADDRESS)
           - Full address
           - Weather-appropriate seating options
           - Signature dishes to try
           - Booking tips or alternatives
           - Neighborhood/area description
           - High-quality restaurant image URL
           - High-quality dish image URLs
        
        Use proper Markdown formatting:
        - Use ## for main sections
        - Use ### for meal times
        - Use > for weather recommendations
        - Use * for bullet points
        - Use [name](url) for restaurant and map links
        - Use **bold** for emphasis
        - Use *italic* for dish names
        - Use `coordinates` for location data
        - Use ![name](image_url) for images
        
        Include a "View on Map" link for each restaurant using the format:
        🗺️ [View on Map](https://maps.google.com/?q=RESTAURANT_NAME+ADDRESS)
        
        For each restaurant and dish, include high-quality images using:
        - Restaurant exterior/interior: ![Restaurant Name](image_url)
        - Signature dishes: ![Dish Name](image_url)
        
        Images should be:
        - High resolution (minimum 800x600)
        - Well-lit and professionally taken
        - Show food/venue clearly
        - From reputable sources (restaurant websites, food blogs, review sites)'''
    - role: user
      content: >-
        $ f'''City: "{{_[0]}}"
        Weather: "{{_[1]}}"
        Breakfast Options: "{{_[2]}}"
        Lunch Options: "{{_[3]}}"
        Dinner Options: "{{_[4]}}"
        Local Specialties: "{{_[5]}}"'''
    unwrap: true

# Step 7: Format final output
- evaluate:
    final_tours: |-
      $ '\\n===================\\n'.join(tour for tour in _)
""")

# Create the task
task = client.tasks.create_or_update(
    task_id=TASK_UUID,
    agent_id=AGENT_UUID,
    **task_def
)

def create_food_tours(cities):
    """
    Create weather-aware food tours with maps for the given cities using Julep.
    """
    # Create an execution
    execution = client.executions.create(
        task_id=task.id,
        input={"cities": cities}
    )
    
    print(f"Started execution. Execution ID: {execution.id}")
    
    # Wait for execution to complete
    import time
    while execution.status != "succeeded":
        time.sleep(5)
        execution = client.executions.get(execution.id)
        print(f"Execution status: {execution.status}")
        print(execution)
        print("-" * 50)
    
    # Get final results
    final_execution = client.executions.get(execution.id)
    return final_execution

def main():
    # Example cities
    cities = ["New York", "London"]
    
    try:
        # Create food tours
        result = create_food_tours(cities)
        print("\nFood Tours Created Successfully!")
        print(result.output.get("final_tours", "No tours generated"))
        
    except Exception as e:
        print(f"Error creating food tours: {str(e)}")

