import { City, TourItinerary, MealRecommendation } from '../types';
import { TourResponse } from '../types/tour';

const API_URL = 'http://localhost:8000';

export const generateTourItinerary = (city: City): TourItinerary => {
  const breakfast = generateMealRecommendation(city, 'breakfast');
  const lunch = generateMealRecommendation(city, 'lunch');
  const dinner = generateMealRecommendation(city, 'dinner');
  const snack = city.dishes.find(d => d.type === 'snack') 
    ? generateMealRecommendation(city, 'snack') 
    : undefined;

  return {
    city: city.name,
    weather: city.weather,
    breakfast,
    lunch,
    dinner,
    snack,
    heroImage: city.heroImage,
    conclusion: city.conclusion
  };
};

const generateMealRecommendation = (city: City, mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack'): MealRecommendation => {
  const dish = city.dishes.find(d => d.type === mealType)!;
  const restaurant = city.restaurants.find(r => r.speciality === dish.name)!;
  
  const narrative = generateNarrative(dish, restaurant, city.weather, mealType);
  const timeOfDay = getTimeOfDay(mealType);
  const mealTitle = getMealTitle(mealType, dish.name);

  return {
    dish,
    restaurant,
    narrative,
    timeOfDay,
    mealTitle
  };

};

const getTimeOfDay = (mealType: string): string => {
  const times = {
    breakfast: '8:00 AM',
    lunch: '12:30 PM',
    snack: '3:30 PM',
    dinner: '7:00 PM'
  };
  return times[mealType as keyof typeof times] || '';
};

const getMealTitle = (mealType: string, dishName: string): string => {
  const titles = {
    breakfast: 'A Perfect Morning Start',
    lunch: 'Midday Culinary Adventure',
    snack: 'Afternoon Delight',
    dinner: 'Evening Culinary Finale'
  };
  return titles[mealType as keyof typeof titles] || dishName;
};

const generateNarrative = (dish: any, restaurant: any, weather: any, mealType: string): string => {
  const narratives = {
    breakfast: `As the sun rises over the city, the aroma of freshly prepared food beckons you to start your culinary adventure. You settle in at ${restaurant.name}, where the ${dish.name.toLowerCase()} sets the perfect tone for your day. The ${weather.condition.toLowerCase()} weather creates an ideal atmosphere for this morning indulgence, allowing you to savor each bite while planning the delicious day ahead.`,
    
    lunch: `As the day unfolds and your appetite builds, you find yourself at ${restaurant.name}, where the atmosphere perfectly complements your midday meal. The ${dish.name.toLowerCase()} provides a satisfying centerpiece to your afternoon, each bite telling a story of local tradition and culinary expertise. The ${weather.condition.toLowerCase()} weather makes this the perfect time to pause and truly appreciate the flavors and ambiance.`,
    
    snack: `As the afternoon settles in, you discover the perfect moment for a delightful treat at ${restaurant.name}. The ${dish.name.toLowerCase()} offers a sweet respite from your culinary exploration, providing comfort and indulgence. The ${weather.condition.toLowerCase()} weather adds to the cozy atmosphere, making this pause in your day feel like a warm embrace from the city itself.`,
    
    dinner: `As evening approaches and the city lights begin to twinkle, you conclude your culinary journey at ${restaurant.name}. The ${dish.name.toLowerCase()} represents the perfect finale to your day of gastronomic exploration, bringing together all the flavors and experiences you've encountered. The ${weather.condition.toLowerCase()} weather adds a magical quality to your dinner, creating memories that will linger long after the last bite.`
  };

  return narratives[mealType as keyof typeof narratives] || `Enjoy your ${dish.name.toLowerCase()} at ${restaurant.name}.`;
};

export const generateTours = async (cities: string[]): Promise<TourResponse> => {
  try {
    const response = await fetch(`${API_URL}/generate-tours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cities }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate tours');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating tours:', error);
    throw error;
  }
};
