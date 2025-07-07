import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { MapPin } from 'lucide-react';
import { TourItinerary } from '../types/tour';

interface TourDisplayProps {
  tourData: TourItinerary[] | string;
}

const TourDisplay: React.FC<TourDisplayProps> = ({ tourData }) => {
  // Handle both string and array formats
  const sections = typeof tourData === 'string' 
    ? tourData.split('===================')
    : tourData.map(tour => {
        return `# ${tour.city} Food Tour
## Weather Overview
Temperature: ${tour.weather.temperature}°C
${tour.weather.detailedDescription}

## Breakfast - ${tour.breakfast.timeOfDay}
### ${tour.breakfast.mealTitle}
${tour.breakfast.narrative}

**Restaurant:** [${tour.breakfast.restaurant.name}](${tour.breakfast.restaurant.website})
**Location:** ${tour.breakfast.restaurant.location}
**Rating:** ${tour.breakfast.restaurant.rating}
**Ambiance:** ${tour.breakfast.restaurant.ambiance}

## Lunch - ${tour.lunch.timeOfDay}
### ${tour.lunch.mealTitle}
${tour.lunch.narrative}

**Restaurant:** [${tour.lunch.restaurant.name}](${tour.lunch.restaurant.website})
**Location:** ${tour.lunch.restaurant.location}
**Rating:** ${tour.lunch.restaurant.rating}
**Ambiance:** ${tour.lunch.restaurant.ambiance}

## Dinner - ${tour.dinner.timeOfDay}
### ${tour.dinner.mealTitle}
${tour.dinner.narrative}

**Restaurant:** [${tour.dinner.restaurant.name}](${tour.dinner.restaurant.website})
**Location:** ${tour.dinner.restaurant.location}
**Rating:** ${tour.dinner.restaurant.rating}
**Ambiance:** ${tour.dinner.restaurant.ambiance}

${tour.conclusion}`;
      });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-white border border-black overflow-hidden"
        >
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-black mb-6" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-black mt-8 mb-4" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-black mt-6 mb-3" {...props} />,
                  p: ({ node, ...props }) => <p className="text-black font-medium mb-4" {...props} />,
                  a: ({ node, ...props }) => (
                    <a
                      className="text-[#f03603] hover:text-black transition-colors font-medium no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
                  li: ({ node, ...props }) => <li className="text-black font-medium mb-2" {...props} />,
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-[#f03603] pl-4 my-4 font-medium" {...props} />
                  ),
                  strong: ({ node, ...props }) => <strong className="font-bold text-black" {...props} />,
                  em: ({ node, ...props }) => <em className="text-black italic" {...props} />,
                }}
              >
                {section}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TourDisplay; 