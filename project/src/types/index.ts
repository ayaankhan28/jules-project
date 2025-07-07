export interface City {
  name: string;
  country: string;
  weather: WeatherData;
  dishes: LocalDish[];
  restaurants: Restaurant[];
  heroImage: string;
  conclusion: string;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  isOutdoorFriendly: boolean;
  humidity?: number;
  detailedDescription: string;
}

export interface LocalDish {
  name: string;
  description: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  isIndoor: boolean;
  image: string;
}

export interface Restaurant {
  name: string;
  speciality: string;
  rating: number;
  ambiance: string;
  isIndoor: boolean;
  description: string;
  website: string;
  location: string;
  image: string;
}

export interface TourItinerary {
  city: string;
  weather: WeatherData;
  breakfast: MealRecommendation;
  lunch: MealRecommendation;
  dinner: MealRecommendation;
  snack?: MealRecommendation;
  heroImage: string;
  conclusion: string;
}

export interface MealRecommendation {
  dish: LocalDish;
  restaurant: Restaurant;
  narrative: string;
  timeOfDay: string;
  mealTitle: string;
}