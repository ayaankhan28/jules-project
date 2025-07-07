import { City } from '../types/tour';

interface CityCardProps {
  city: City;
  onSelect: (cityName: string) => void;
}

export default function CityCard({ city, onSelect }: CityCardProps) {
  return (
    <div
      onClick={() => onSelect(city.name)}
      className={`
        p-4 rounded-lg cursor-pointer transition-all duration-200
        ${city.selected 
          ? 'bg-blue-500 text-white' 
          : 'bg-white hover:bg-gray-50 text-gray-900'}
      `}
    >
      <h3 className="text-lg font-semibold">{city.name}</h3>
      {city.selected && (
        <div className="mt-2">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
} 