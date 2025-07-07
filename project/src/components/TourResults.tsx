import React from 'react';
import { TourItinerary } from '../types';
import { Cloud, MapPin, Star, Clock, Utensils, ExternalLink, Globe } from 'lucide-react';

interface TourResultsProps {
  itinerary: TourItinerary;
  onNewSearch: () => void;
}

const TourResults: React.FC<TourResultsProps> = ({ itinerary, onNewSearch }) => {
  const meals = [
    { key: 'breakfast', data: itinerary.breakfast, icon: '🌅' },
    { key: 'lunch', data: itinerary.lunch, icon: '☀️' },
    ...(itinerary.snack ? [{ key: 'snack', data: itinerary.snack, icon: '🍰' }] : []),
    { key: 'dinner', data: itinerary.dinner, icon: '🌙' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Hero Section */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={itinerary.heroImage} 
            alt={`${itinerary.city} cityscape`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  🍽️ {itinerary.city} Food Tour Itinerary
                </h1>
                <p className="text-xl text-white/90">A curated culinary journey through the city's finest flavors</p>
              </div>
              <button
                onClick={onNewSearch}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium"
              >
                New Search
              </button>
            </div>
          </div>
        </div>

        {/* Weather Overview */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Weather Overview</h2>
              <p className="text-gray-600 text-lg">Current conditions and dining recommendations</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                <div className="text-4xl font-bold text-blue-600">
                  {itinerary.weather.temperature}°C
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-800">{itinerary.weather.condition}</div>
                  <div className="text-gray-600">
                    {itinerary.weather.isOutdoorFriendly ? 'Great for outdoor dining' : 'Perfect for cozy indoor meals'}
                  </div>
                  {itinerary.weather.humidity && (
                    <div className="text-sm text-gray-500">Humidity: {itinerary.weather.humidity}%</div>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{itinerary.weather.detailedDescription}</p>
          </div>
        </div>

        {/* Meals */}
        <div className="p-8">
          <div className="space-y-12">
            {meals.map((meal, index) => (
              <div key={meal.key} className="relative">
                {index > 0 && (
                  <div className="absolute -top-6 left-8 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
                
                <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                        {meal.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 capitalize">{meal.key}</h3>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-5 h-5" />
                          <span className="font-medium text-lg">{meal.data.timeOfDay}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">
                        {meal.data.mealTitle}
                      </h4>
                      <h5 className="text-xl font-semibold text-blue-600 mb-4">
                        {meal.data.dish.name}
                      </h5>
                      <p className="text-gray-700 mb-6 leading-relaxed">{meal.data.dish.description}</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <div>
                              <span className="font-bold text-gray-800 text-lg">{meal.data.restaurant.name}</span>
                              <p className="text-sm text-gray-600">{meal.data.restaurant.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="w-5 h-5 text-yellow-500" />
                              <span className="font-bold text-gray-800">{meal.data.restaurant.rating}</span>
                            </div>
                            <a
                              href={meal.data.restaurant.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                              <Globe className="w-4 h-4" />
                              <span>Visit</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Utensils className="w-5 h-5 text-purple-600" />
                            <span className="font-semibold text-purple-800">Ambiance</span>
                          </div>
                          <p className="text-purple-700">{meal.data.restaurant.ambiance}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                        <span className="font-semibold text-green-800 text-lg">Your Experience</span>
                      </div>
                      <p className="text-green-700 leading-relaxed">{meal.data.narrative}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Culinary Journey Conclusion</h2>
            <p className="text-lg leading-relaxed text-blue-100 mb-8">
              {itinerary.conclusion}
            </p>
            <div className="text-center">
              <button
                onClick={onNewSearch}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Plan Another Food Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourResults;