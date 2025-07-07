import { City } from '../types';

export const cityDatabase: Record<string, City> = {
  paris: {
    name: 'Paris',
    country: 'France',
    heroImage: 'https://images.pexels.com/photos/161853/paris-sunset-france-monument-161853.jpeg?auto=compress&cs=tinysrgb&w=1200',
    weather: {
      temperature: 16.9,
      condition: 'Broken Clouds',
      description: 'Perfect for a mix of indoor and outdoor dining',
      detailedDescription: 'With a comfortable temperature of around 16.9°C and broken clouds, today is perfect for a mix of indoor and outdoor dining. Enjoy the vibrant streets of Paris while also relaxing in the warmth of cozy bistros and cafés.',
      isOutdoorFriendly: true
    },
    dishes: [
      {
        name: 'Flaky Croissant & Café au Lait',
        description: 'Quintessential Parisian breakfast with buttery pastry and rich coffee',
        type: 'breakfast',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Bœuf Bourguignon',
        description: 'Classic French beef stew slow-cooked to perfection with red wine and herbs',
        type: 'lunch',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Steak Frites',
        description: 'Epitome of Parisian bistro dining with perfectly grilled steak and golden fries',
        type: 'dinner',
        isIndoor: false,
        image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    restaurants: [
      {
        name: 'Ladurée',
        speciality: 'Flaky Croissant & Café au Lait',
        rating: 4.8,
        ambiance: 'Indoor – Enjoy the lush decor and classic French elegance',
        isIndoor: true,
        description: 'Historic patisserie renowned for its elegant atmosphere and world-class pastries',
        website: 'https://www.laduree.fr',
        location: 'Multiple locations in Paris',
        image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Le Procope',
        speciality: 'Bœuf Bourguignon',
        rating: 4.6,
        ambiance: 'Indoor – Immerse yourself in rich history with walls lined with old portraits',
        isIndoor: true,
        description: 'The oldest café in Paris that embodies French history and culture',
        website: 'https://www.procope.com',
        location: '13 Rue de l\'Ancienne Comédie, 6th Arrondissement',
        image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Le Relais de l\'Entrecôte',
        speciality: 'Steak Frites',
        rating: 4.7,
        ambiance: 'Outdoor – Enjoy the charming Parisian vibe with street views',
        isIndoor: false,
        description: 'Specializes in steak frites with their famous secret sauce',
        website: 'https://www.relaisdulentrecote.fr',
        location: 'Multiple locations in Paris',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    conclusion: 'From the early morning sweetness of a croissant to the robust flavors of traditional beef stew, and finishing with the iconic steak, your day in Paris has been a delightful blend of flavors and experiences. The city\'s culinary scene, augmented by the perfect weather, has offered not just meals but memories to savor long after your visit. Enjoy your escape and let each bite take you deeper into the heart of French gastronomy!'
  },
  london: {
    name: 'London',
    country: 'United Kingdom',
    heroImage: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    weather: {
      temperature: 18.3,
      condition: 'Broken Clouds',
      description: 'Pleasant for both outdoor and indoor dining',
      detailedDescription: 'With a current temperature of 18.3°C, broken clouds, and humidity at 62%, the weather is pleasant for outdoor dining, but also comfortable enough for indoor dining. For today\'s food tour, we\'ll alternate between enjoying the fresh air and the cozy interiors of some of London\'s finest restaurants.',
      isOutdoorFriendly: true,
      humidity: 62
    },
    dishes: [
      {
        name: 'Full English Breakfast',
        description: 'Classic hearty breakfast with eggs, sausages, bacon, beans, and black pudding',
        type: 'breakfast',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/7937/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Fish and Chips',
        description: 'Golden, crispy fish paired with thick-cut chips - a British institution',
        type: 'lunch',
        isIndoor: false,
        image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Sticky Toffee Pudding',
        description: 'Soft sponge cake smothered in luscious toffee sauce with vanilla ice cream',
        type: 'snack',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Roast Beef with Yorkshire Pudding',
        description: 'Traditional Sunday roast with seasonal vegetables and rich gravy',
        type: 'dinner',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    restaurants: [
      {
        name: 'The Breakfast Club',
        speciality: 'Full English Breakfast',
        rating: 4.5,
        ambiance: 'Indoor – Retro atmosphere with energetic vibe',
        isIndoor: true,
        description: 'Beloved chain famous for hearty Full English Breakfast',
        website: 'https://www.thebreakfastclubcafes.com',
        location: 'Various locations in London',
        image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Poppies Fish & Chips',
        speciality: 'Fish and Chips',
        rating: 4.7,
        ambiance: 'Outdoor – Vibrant atmosphere of Spitalfields with nostalgic charm',
        isIndoor: false,
        description: 'Iconic spot serving deliciously golden, crispy fish with thick-cut chips',
        website: 'https://www.poppiesfishandchips.co.uk',
        location: 'Spitalfields, London',
        image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Gail\'s Bakery',
        speciality: 'Sticky Toffee Pudding',
        rating: 4.4,
        ambiance: 'Indoor – Cozy café atmosphere perfect for afternoon treats',
        isIndoor: true,
        description: 'Artisan bakery serving exceptional British desserts',
        website: 'https://gailsbakery.com',
        location: 'Various locations in London',
        image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'The Ivy',
        speciality: 'Roast Beef with Yorkshire Pudding',
        rating: 4.8,
        ambiance: 'Indoor – Elegant upscale dining with sophisticated atmosphere',
        isIndoor: true,
        description: 'Iconic restaurant offering lavish dining experience with traditional British fare',
        website: 'https://theivylondon.com',
        location: 'Covent Garden, London',
        image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    conclusion: 'Your culinary adventure began early at The Breakfast Club with the quintessential Full English Breakfast, providing the energy needed for a busy day in London. The journey continued with authentic fish and chips at Poppies, enjoyed al fresco in the vibrant Spitalfields atmosphere. A sweet interlude of sticky toffee pudding offered comfort and British tradition, while the grand finale at The Ivy wrapped up your day with the rich flavors of roast beef and Yorkshire pudding. Between iconic dishes and local gems, your tastes and experiences unfolded beautifully, painting a portrait of London\'s vibrant food culture.'
  },
  tokyo: {
    name: 'Tokyo',
    country: 'Japan',
    heroImage: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    weather: {
      temperature: 22.5,
      condition: 'Sunny',
      description: 'Beautiful day for exploring outdoor markets and street food',
      detailedDescription: 'With a pleasant temperature of 22.5°C and sunny skies, today is perfect for exploring Tokyo\'s vibrant outdoor markets and street food scene, while also enjoying the intimate atmosphere of traditional indoor establishments.',
      isOutdoorFriendly: true
    },
    dishes: [
      {
        name: 'Traditional Japanese Breakfast',
        description: 'Grilled fish, miso soup, steamed rice, and assorted pickled vegetables',
        type: 'breakfast',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Tonkotsu Ramen',
        description: 'Rich pork bone broth with perfectly cooked noodles and tender chashu',
        type: 'lunch',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Omakase Sushi',
        description: 'Chef\'s selection of the finest seasonal sushi with premium ingredients',
        type: 'dinner',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    restaurants: [
      {
        name: 'Tsukiji Outer Market',
        speciality: 'Traditional Japanese Breakfast',
        rating: 4.9,
        ambiance: 'Mixed – Bustling market with both indoor and outdoor stalls',
        isIndoor: false,
        description: 'Historic market offering the freshest breakfast experience with authentic atmosphere',
        website: 'https://www.tsukiji.or.jp',
        location: 'Tsukiji, Tokyo',
        image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Ippudo Ramen',
        speciality: 'Tonkotsu Ramen',
        rating: 4.7,
        ambiance: 'Indoor – Modern ramen bar with authentic counter seating experience',
        isIndoor: true,
        description: 'Renowned ramen chain serving exceptional tonkotsu broth with perfect noodles',
        website: 'https://www.ippudo.com',
        location: 'Multiple locations in Tokyo',
        image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Sukiyabashi Jiro',
        speciality: 'Omakase Sushi',
        rating: 4.9,
        ambiance: 'Indoor – Intimate sushi counter with legendary master chef',
        isIndoor: true,
        description: 'World-famous sushi restaurant with Michelin stars and unparalleled craftsmanship',
        website: 'https://www.sushi-jiro.jp',
        location: 'Ginza, Tokyo',
        image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    conclusion: 'Your Tokyo culinary journey began with the authentic flavors of a traditional Japanese breakfast at the historic Tsukiji market, surrounded by the energy of local vendors and fresh ingredients. The midday adventure continued with soul-warming tonkotsu ramen at Ippudo, where each slurp revealed layers of rich, complex flavors. The evening culminated in the ultimate sushi experience at Sukiyabashi Jiro, where master craftsmanship transformed the finest ingredients into edible art. This day has taken you through the heart of Japanese culinary tradition, from bustling markets to intimate counters, creating memories that capture the essence of Tokyo\'s incredible food culture.'
  },
  'new york': {
    name: 'New York',
    country: 'USA',
    heroImage: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1200',
    weather: {
      temperature: 18.3,
      condition: 'Partly Cloudy',
      description: 'Great weather for exploring the city\'s diverse food scene',
      detailedDescription: 'With a comfortable temperature of 18.3°C and partly cloudy skies, today offers perfect conditions for exploring New York\'s incredible diversity of dining options, from classic delis to trendy outdoor spots.',
      isOutdoorFriendly: true
    },
    dishes: [
      {
        name: 'Everything Bagel with Lox',
        description: 'Classic NYC bagel with smoked salmon, cream cheese, capers, and red onion',
        type: 'breakfast',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Pastrami on Rye',
        description: 'Towering deli sandwich with tender, spiced pastrami and mustard',
        type: 'lunch',
        isIndoor: true,
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'New York Pizza',
        description: 'Thin-crust pizza with the perfect fold - a NYC institution',
        type: 'dinner',
        isIndoor: false,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    restaurants: [
      {
        name: 'Russ & Daughters',
        speciality: 'Everything Bagel with Lox',
        rating: 4.8,
        ambiance: 'Indoor – Historic appetizing shop with old-world charm and family tradition',
        isIndoor: true,
        description: 'Four-generation family business serving the finest smoked fish and bagels',
        website: 'https://www.russanddaughters.com',
        location: 'Lower East Side, Manhattan',
        image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Katz\'s Delicatessen',
        speciality: 'Pastrami on Rye',
        rating: 4.6,
        ambiance: 'Indoor – Iconic deli with vintage NYC atmosphere and bustling energy',
        isIndoor: true,
        description: 'Famous Lower East Side deli established in 1888, home of the legendary pastrami sandwich',
        website: 'https://katzsdelicatessen.com',
        location: 'Lower East Side, Manhattan',
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        name: 'Joe\'s Pizza',
        speciality: 'New York Pizza',
        rating: 4.5,
        ambiance: 'Mixed – Classic pizzeria with authentic counter service and street-side dining',
        isIndoor: false,
        description: 'Authentic NYC pizza joint beloved by locals for its perfect thin-crust slices',
        website: 'https://www.joespizzanyc.com',
        location: 'Multiple locations in NYC',
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    conclusion: 'Your New York culinary adventure began with the quintessential NYC breakfast at Russ & Daughters, where four generations of tradition came together in the perfect everything bagel with lox. The journey continued at the legendary Katz\'s Delicatessen, where towering pastrami sandwiches and vintage atmosphere transported you to old New York. The day concluded with authentic New York pizza at Joe\'s, where the perfect thin-crust slice and bustling street energy captured the true spirit of the city. From family traditions to iconic institutions, your day showcased the incredible diversity and authentic flavors that make New York one of the world\'s greatest food cities.'
  }
};

export const getCityData = (cityName: string): City | null => {
  const key = cityName.toLowerCase();
  return cityDatabase[key] || null;
};