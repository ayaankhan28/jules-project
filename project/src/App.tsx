import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CityInput from './components/CityInput';
import TourDisplay from './components/TourDisplay';
import { generateTours } from './services/tourService';
import LoadingAnimation from './components/LoadingAnimation';
import { TourItinerary } from './types/tour';

function App() {
  const [loading, setLoading] = useState(false);
  const [tourData, setTourData] = useState<TourItinerary[]>([]);
  const [error, setError] = useState<string>('');

  const handleGenerateTours = async (selectedCities: string[]) => {
    if (selectedCities.length === 0) {
      setError('Please select at least one city');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await generateTours(selectedCities);
      setTourData(response.tours);
    } catch (err) {
      setError('Failed to generate tours. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#f03603] flex items-center justify-center text-white font-bold">J</div>
            <span className="text-xl font-medium text-black">Julep</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-black hover:text-[#f03603] font-medium">Docs</button>
            <button className="px-4 py-2 bg-[#f03603] text-white hover:bg-black transition font-medium">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold tracking-tight mb-6 text-black"
          >
            Your AI Food Tour Guide
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-black mb-12 font-medium"
          >
            Create personalized culinary experiences with weather-aware recommendations and local specialties.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <div className="bg-black/5 p-8 border border-black">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">
                Plan Your Culinary Adventure
              </h2>
              <p className="text-lg text-black font-medium">
                Add multiple cities to create a comprehensive food tour itinerary
              </p>
            </div>

            <CityInput onCitiesSubmit={handleGenerateTours} isLoading={loading} />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-[#f03603] text-white text-center font-medium"
              >
                {error}
              </motion.div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <LoadingAnimation />
              <p className="mt-4 text-black font-medium">Creating your personalized food tour...</p>
            </motion.div>
          )}

          {tourData && !loading && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12"
            >
              <TourDisplay tourData={tourData} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;