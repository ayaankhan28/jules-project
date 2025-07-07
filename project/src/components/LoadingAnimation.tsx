import React from 'react';
import { Search, MapPin, Utensils, Cloud } from 'lucide-react';

const LoadingAnimation: React.FC = () => {
  const steps = [
    { icon: Search, text: 'Searching for your city...', delay: 0 },
    { icon: Cloud, text: 'Checking weather conditions...', delay: 1000 },
    { icon: Utensils, text: 'Finding iconic local dishes...', delay: 2000 },
    { icon: MapPin, text: 'Locating top-rated restaurants...', delay: 3000 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white p-8 border border-black/10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f03603] mb-4">
            <Utensils className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Crafting Your Perfect Food Tour</h2>
          <p className="text-black/70">We're analyzing the best culinary experiences for you...</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 p-4 transition-all duration-500 ${
                index === 0 ? 'bg-[#f03603]/10 border border-[#f03603]/20' : 'bg-black/5 border border-black/10'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${step.delay}ms both`,
              }}
            >
              <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center ${
                index === 0 ? 'bg-[#f03603]' : 'bg-black/30'
              }`}>
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  index === 0 ? 'text-[#f03603]' : 'text-black/70'
                }`}>
                  {step.text}
                </p>
              </div>
              {index === 0 && (
                <div className="flex space-x-1">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 bg-[#f03603] animate-bounce"
                      style={{ animationDelay: `${dot * 0.2}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#f03603]/10 p-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-1 bg-[#f03603]/60 animate-pulse"></div>
            <div className="w-4 h-1 bg-[#f03603]/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-6 h-1 bg-[#f03603]/60 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-center text-black/70 mt-4 text-sm">
            This usually takes 5-10 seconds...
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;