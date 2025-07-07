import React, { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';

interface CityInputProps {
  onCitiesSubmit: (cities: string[]) => void;
  isLoading: boolean;
}

const CityInput: React.FC<CityInputProps> = ({ onCitiesSubmit, isLoading }) => {
  const [currentCity, setCurrentCity] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [suggestions] = useState(['Paris', 'London', 'Tokyo', 'New York']);

  const handleAddCity = (city: string) => {
    if (city.trim() && !selectedCities.includes(city.trim())) {
      const newCities = [...selectedCities, city.trim()];
      setSelectedCities(newCities);
      setCurrentCity('');
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    setSelectedCities(selectedCities.filter(city => city !== cityToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCity.trim()) {
      handleAddCity(currentCity.trim());
    }
    if (selectedCities.length > 0 && !isLoading) {
      onCitiesSubmit(selectedCities);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentCity.trim()) {
        handleAddCity(currentCity.trim());
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (!selectedCities.includes(suggestion) && !isLoading) {
      handleAddCity(suggestion);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
          <input
            type="text"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city names and press Enter to add them"
            className="w-full pl-12 pr-4 py-4 text-lg border border-black focus:border-[#f03603] focus:outline-none transition-colors duration-200 bg-white font-medium"
            disabled={isLoading}
          />
        </div>
        
        {/* Selected Cities Tags */}
        {selectedCities.length > 0 && (
          <div className="mt-4 w-full p-4 border border-black bg-white">
            <div className="flex flex-wrap gap-2">
              {selectedCities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[#f03603] text-white border border-[#f03603]"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{city}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCity(city)}
                    className="ml-1 p-1 hover:bg-black transition-colors"
                    disabled={isLoading}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <button
          type="submit"
          disabled={selectedCities.length === 0 || isLoading}
          className="mt-6 w-full px-6 py-3 bg-[#f03603] text-white hover:bg-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isLoading ? 'Creating Food Tours...' : `Generate Food Tours for ${selectedCities.length} ${selectedCities.length === 1 ? 'City' : 'Cities'}`}
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            disabled={isLoading || selectedCities.includes(suggestion)}
            className="flex items-center justify-center space-x-2 p-3 bg-white border border-black hover:bg-[#f03603] hover:text-white hover:border-[#f03603] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group font-medium"
          >
            <MapPin className="w-4 h-4 group-hover:text-white" />
            <span>{suggestion}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityInput;