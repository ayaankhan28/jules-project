export interface City {
  name: string;
  image: string;
  selected: boolean;
}

export interface Restaurant {
  name: string;
  location: string;
  rating: number;
  website: string;
  ambiance: string;
  image: string;
}

export interface Dish {
  name: string;
  description: string;
  image: string;
}

export interface Weather {
  temperature: number;
  condition: string;
  isOutdoorFriendly: boolean;
  humidity?: number;
  detailedDescription: string;
}

export interface MealData {
  timeOfDay: string;
  mealTitle: string;
  dish: Dish;
  restaurant: Restaurant;
  narrative: string;
}

export interface TourItinerary {
  city: string;
  heroImage: string;
  weather: Weather;
  breakfast: MealData;
  lunch: MealData;
  snack?: MealData;
  dinner: MealData;
  conclusion: string;
}

export interface TourResponse {
  tours: TourItinerary[];
}

export interface TourSection {
  city: string;
  content: string[];
  dayNumber: number;
} 