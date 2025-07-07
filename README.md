# My-Julep: AI-Powered Food Tour Generator

A modern web application that generates personalized food tour itineraries using Julep AI, combining weather data and local culinary expertise to create the perfect food exploration experience.

## 🌟 Features

- **Multi-City Support**: Plan food tours across multiple cities simultaneously
- **Weather-Aware Recommendations**: Integrates real-time weather data to optimize your culinary experience
- **Comprehensive Itineraries**: Get recommendations for:
  - Breakfast & Brunch spots
  - Lunch locations with local specialties
  - Fine dining dinner experiences
  - Iconic local dishes and where to find them
- **Interactive UI**: Modern, responsive interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations

### Backend
- FastAPI (Python)
- Julep AI for intelligent tour generation
- Weather API integration

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayaankhan28/jules-project.git
   cd jules-project
   ```

2. **Set up the frontend**
   ```bash
   cd project
   npm install
   ```

3. **Set up the backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Start the development servers**

   Frontend:
   ```bash
   cd project
   npm run dev
   ```

   Backend:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

## 🔄 Workflow

1. **City Selection**
   - Users can select multiple cities for their food tour
   - Quick-select buttons for popular destinations
   - Dynamic city suggestions

2. **Tour Generation**
   - Backend processes the selected cities
   - Fetches real-time weather data
   - Julep AI analyzes and generates personalized recommendations
   - Creates comprehensive itineraries with restaurant details

3. **Results Display**
   - Weather overview for tour planning
   - Detailed meal recommendations with:
     - Restaurant names and locations
     - Ratings and ambiance descriptions
     - Direct links to maps
     - Optimal dining times

## 🤖 Julep Integration

Julep is the AI engine powering the intelligent tour generation. It:
- Processes multi-city requests in parallel
- Integrates weather data for context-aware recommendations
- Searches and analyzes restaurant data
- Generates natural language descriptions
- Creates cohesive tour narratives
- Ensures recommendations match the city's culinary identity

## 📝 Project Structure

```
My-Julep/
├── backend/              # Python FastAPI server
│   ├── food.py          # Julep integration & tour generation
│   ├── main.py          # API endpoints
│   └── requirements.txt # Python dependencies
└── project/             # Frontend React application
    ├── src/
    │   ├── components/  # React components
    │   ├── services/    # API integration
    │   ├── types/       # TypeScript definitions
    │   └── App.tsx      # Main application
    └── package.json     # Node.js dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 