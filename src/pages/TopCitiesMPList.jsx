import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiMapPin, FiCalendar, FiClock, FiCompass, FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { FaMountain, FaPaw, FaRegHeart, FaHeart, FaShare, FaRupeeSign } from 'react-icons/fa';
import { GiIndiaGate, GiTempleGate, GiForestCamp } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import indore from "../cityphoto/indore.png"
import bhopal from "../cityphoto/bhopal.jpg"
import khajuraho from "../cityphoto/khajuraho.jpg"
import gwalior from "../cityphoto/gwali.jpg"
import Pachmarhi from "../cityphoto/pach.jpg"
import ujjain from "../cityphoto/ujjain.jpg"
import om from "../cityphoto/om.jpg"
import sanchi from "../cityphoto/sanchi.jpg"
import chanderi from "../cityphoto/chanderi.jpg"
import amarkantak from "../cityphoto/amarkantak.jpg"
import penchpark from "../cityphoto/penchpark.jpg"
import mandu from "../cityphoto/mandu.jpg"
import orchha from "../cityphoto/orchha.jpg"
import kanhanational from "../cityphoto/kanhanational.jpg"
import bandhavgarh from "../cityphoto/bandhavgarh.jpg"





const TopCitiesMPList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  
  const [cities] = useState([
    {
     id: 1,
      name: "Indore",
      imageUrl: indore,
      rating: 4.7,
      location: "Indore District",
      bestTime: "October to March",
      idealDuration: "2-3 Days",
      category: "Urban",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      highlight: "Commercial capital with rich culinary heritage",
      description: "Indore is the largest city in Madhya Pradesh known for its food, palaces, and vibrant culture. Key attractions include Rajwada Palace, Lal Bagh Palace, and Sarafa Bazaar.",
      price: 4000,
      mustTry: ["Poha Jalebi", "Sarafa Bazaar Night Food"],
      attractions: ["Rajwada Palace", "Lal Bagh Palace", "Sarafa Bazaar"] 
    },  
    {
      id: 2,
      name: "Bhopal",
      imageUrl: bhopal,
      rating: 4.5,
      location: "Bhopal District",
      bestTime: "September to March",
      idealDuration: "2-3 Days",
      category: "Urban",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      highlight: "City of Lakes with historic attractions",
      description: "Bhopal, the capital of Madhya Pradesh, is known for its natural and artificial lakes, museums, and historic mosques like Taj-ul-Masajid.",
      price: 4500,
      mustTry: ["Bhopali Gosht Korma", "Bhopal Paan"],
      attractions: ["Upper Lake", "Taj-ul-Masajid", "Van Vihar National Park"]
    },
    {
      id: 3,
      name: "Khajuraho",
      imageUrl: khajuraho,
      rating: 4.8,
      location: "Chhatarpur District",
      bestTime: "October to March",
      idealDuration: "2 Days",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "Famous for its erotic temple sculptures",
      description: "The Khajuraho Group of Monuments are UNESCO World Heritage Sites famous for their nagara-style architectural symbolism.",
      price: 5000,
      mustTry: ["Light & Sound Show", "Local Tribal Dance"],
      attractions: ["Kandariya Mahadeva Temple", "Lakshmana Temple", "Duladeo Temple"]
    },
    {
      id: 4,
      name: "Gwalior",
      imageUrl: gwalior,
      rating: 4.6,
      location: "Gwalior District",
      bestTime: "October to March",
      idealDuration: "2 Days",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "City of palaces and the majestic Gwalior Fort",
      description: "Gwalior is known for its medieval fort, palaces, and temples. The Gwalior Fort dominates the city's skyline.",
      price: 4000,
      mustTry: ["Gwalior Fort Tour", "Tansen Music Festival"],
      attractions: ["Gwalior Fort", "Jai Vilas Palace", "Teli Ka Mandir"]
    },
    {
      id: 5,
      name: "Ujjain",
      imageUrl: ujjain,
      rating: 4.5,
      location: "Ujjain District",
      bestTime: "October to March",
      idealDuration: "1-2 Days",
      category: "Spiritual",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      highlight: "Sacred city with Mahakaleshwar Temple",
      description: "One of the seven sacred cities of Hinduism, famous for the Mahakaleshwar Jyotirlinga and Kumbh Mela.",
      price: 3000,
      mustTry: ["Mahakal Aarti", "Shipra River Holy Dip"],
      attractions: ["Mahakaleshwar Temple", "Ram Ghat", "Kal Bhairav Temple"]
    },
    {
      id: 6,
      name: "Pachmarhi",
      imageUrl: Pachmarhi,
      rating: 4.7,
      location: "Hoshangabad District",
      bestTime: "October to June",
      idealDuration: "3-4 Days",
      category: "Hill Station",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      highlight: "Queen of Satpura - the only hill station in MP",
      description: "Pachmarhi is a beautiful hill station with waterfalls, caves, and lush green forests. It's part of the Satpura Biosphere Reserve.",
      price: 6000,
      mustTry: ["Bee Falls Trek", "Pandava Caves Exploration"],
      attractions: ["Bee Falls", "Pandava Caves", "Dhoopgarh Sunset Point"]
    },
    {
      id: 7,
      name: "Orchha",
      imageUrl: orchha,
      rating: 4.6,
      location: "Tikamgarh District",
      bestTime: "October to March",
      idealDuration: "1-2 Days",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "Medieval town with magnificent palaces",
      description: "Orchha is a hidden gem with well-preserved palaces and temples from the Bundela dynasty. The Ram Raja Temple and Jahangir Mahal are major attractions.",
      price: 3500,
      mustTry: ["River Betwa Boating", "Light & Sound Show"],
      attractions: ["Jahangir Mahal", "Ram Raja Temple", "Chhatris"]
    },
    {
      id: 8,
      name: "Kanha National Park",
      imageUrl: kanhanational,
      rating: 4.9,
      location: "Mandla District",
      bestTime: "October to June",
      idealDuration: "3-4 Days",
      category: "Wildlife",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      highlight: "One of India's best tiger reserves",
      description: "Kanha National Park is one of India's largest and most scenic wildlife reserves, known for its tiger population and the hard ground Barasingha.",
      price: 8000,
      mustTry: ["Jeep Safari", "Bird Watching"],
      attractions: ["Bamni Dadar", "Kanha Museum", "Sonf Meadows"]
    },
    {
      id: 9,
      name: "Bandhavgarh National Park",
      imageUrl: bandhavgarh,
      rating: 4.8,
      location: "Umaria District",
      bestTime: "October to June",
      idealDuration: "3-4 Days",
      category: "Wildlife",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      highlight: "High density of Bengal tigers",
      description: "Bandhavgarh has one of the highest densities of Bengal tigers in the world. The park also has the ancient Bandhavgarh Fort atop a hill.",
      price: 8500,
      mustTry: ["Tiger Safari", "Fort Trekking"],
      attractions: ["Bandhavgarh Fort", "Shesh Shaiya", "Chakradhara Meadow"]
    },
    {
      id: 10,
      name: "Omkareshwar",
      imageUrl: om,
      rating: 4.4,
      location: "Khandwa District",
      bestTime: "October to March",
      idealDuration: "1 Day",
      category: "Spiritual",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      highlight: "Sacred island shaped like Om",
      description: "Omkareshwar is a Hindu temple dedicated to Lord Shiva, located on an island in the Narmada River shaped like the sacred 'Om' symbol.",
      price: 2500,
      mustTry: ["Narmada Parikrama", "Evening Aarti"],
      attractions: ["Omkareshwar Temple", "Gauri Somnath Temple", "24 Avatars"]
    },
    {
      id: 11,
      name: "Sanchi",
      imageUrl: sanchi,
      rating: 4.3,
      location: "Raisen District",
      bestTime: "October to March",
      idealDuration: "1 Day",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "Ancient Buddhist site with Great Stupa",
      description: "Sanchi is famous for its Buddhist stupas, monasteries, and pillars dating back to the 3rd century BCE. The Great Stupa is a UNESCO World Heritage Site.",
      price: 2000,
      mustTry: ["Stupa Exploration", "Museum Visit"],
      attractions: ["Great Stupa", "Ashoka Pillar", "Sanchi Museum"]
    },
    {
      id: 12,
      name: "Chanderi",
      imageUrl: chanderi,
      rating: 4.2,
      location: "Ashoknagar District",
      bestTime: "October to March",
      idealDuration: "1-2 Days",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "Historic town known for Chanderi sarees",
      description: "Chanderi is a small town with a rich history, known for its fort, medieval architecture, and the famous Chanderi fabric.",
      price: 3000,
      mustTry: ["Handloom Visit", "Fort Exploration"],
      attractions: ["Chanderi Fort", "Koshak Mahal", "Jama Masjid"]
    },
    {
      id: 13,
      name: "Pench National Park",
      imageUrl: penchpark,
      rating: 4.6,
      location: "Seoni District",
      bestTime: "October to June",
      idealDuration: "3-4 Days",
      category: "Wildlife",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      highlight: "Inspiring setting for Jungle Book",
      description: "Pench National Park straddles Madhya Pradesh and Maharashtra, known for its diverse wildlife and being the setting for Rudyard Kipling's Jungle Book.",
      price: 7000,
      mustTry: ["Night Safari", "Nature Walks"],
      attractions: ["Pench River", "Alikatta", "Totladoh Dam"]
    },
    {
      id: 14,
      name: "Mandu",
      imageUrl: mandu,
      rating: 4.5,
      location: "Dhar District",
      bestTime: "October to March",
      idealDuration: "2 Days",
      category: "Heritage",
      color: "bg-gradient-to-r from-amber-500 to-amber-600",
      highlight: "City of Joy with Afghan architecture",
      description: "Mandu is famous for its Afghan architecture including the Jahaz Mahal (Ship Palace), Hindola Mahal, and the romantic legend of Baz Bahadur and Rani Roopmati.",
      price: 4000,
      mustTry: ["Jahaz Mahal Visit", "Sunset at Baz Bahadur Palace"],
      attractions: ["Jahaz Mahal", "Hindola Mahal", "Roopmati Pavilion"]
    },
    {
      id: 15,
      name: "Amarkantak",
      imageUrl: amarkantak,
      rating: 4.4,
      location: "Anuppur District",
      bestTime: "October to March",
      idealDuration: "1-2 Days",
      category: "Spiritual",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      highlight: "Source of the Narmada River",
      description: "Amarkantak is a pilgrim town where the Narmada River originates. It's surrounded by forests and has several ancient temples and natural beauty.",
      price: 3500,
      mustTry: ["Narmada Kund Visit", "Kapildhara Falls"],
      attractions: ["Narmada Kund", "Kapildhara Falls", "Sonmuda"]
    }
  ]);

  // Helper functions
  const getBestForCategory = (category) => {
    const categories = {
      'Urban': 'Business travelers, Food lovers',
      'Heritage': 'History enthusiasts, Photographers',
      'Spiritual': 'Pilgrims, Culture seekers',
      'Hill Station': 'Nature lovers, Honeymooners',
      'Wildlife': 'Adventure seekers, Wildlife photographers'
    };
    return categories[category] || 'All travelers';
  };

  const getStayOptions = (category) => {
    const options = {
      'Urban': 'Hotels, Guesthouses, Serviced Apartments',
      'Heritage': 'Heritage Hotels, Boutique Stays',
      'Spiritual': 'Dharamshalas, Budget Hotels',
      'Hill Station': 'Resorts, Cottages, Forest Lodges',
      'Wildlife': 'Jungle Lodges, Eco-Resorts'
    };
    return options[category] || 'Hotels, Guesthouses';
  };

  const getAttractionDescription = (attraction, cityName) => {
    if (attraction.includes("Palace")) return `Magnificent palace in ${cityName} showcasing royal heritage`;
    if (attraction.includes("Temple")) return `Sacred temple in ${cityName} with spiritual significance`;
    if (attraction.includes("National Park") || attraction.includes("Wildlife")) 
      return `Wildlife sanctuary in ${cityName} known for diverse flora and fauna`;
    if (attraction.includes("Bazaar")) return `Vibrant market in ${cityName} with local flavors`;
    if (attraction.includes("Lake") || attraction.includes("Falls")) return `Natural wonder in ${cityName} with scenic beauty`;
    return `Popular attraction in ${cityName} that visitors love`;
  };

  const getAttractionType = (attraction) => {
    if (attraction.includes("Palace") || attraction.includes("Fort")) return "Historical";
    if (attraction.includes("Temple")) return "Religious";
    if (attraction.includes("National Park")) return "Wildlife";
    if (attraction.includes("Bazaar")) return "Market";
    if (attraction.includes("Lake") || attraction.includes("Falls") || attraction.includes("Point")) return "Nature";
    return "Landmark";
  };

  const getEntryFee = (attraction) => {
    if (attraction.includes("Palace") || attraction.includes("Fort") || attraction.includes("Mahal")) return 100;
    if (attraction.includes("National Park")) return 500;
    if (attraction.includes("Museum")) return 50;
    return 0;
  };

  const getAttractionTimings = (attraction) => {
    if (attraction.includes("Bazaar")) return "8:00 PM - 2:00 AM";
    if (attraction.includes("National Park")) return "6:00 AM - 6:00 PM";
    if (attraction.includes("Temple")) return "5:00 AM - 9:00 PM";
    return "9:00 AM - 5:00 PM";
  };

  const handleCityClick = (city) => {
    navigate(`/city/${city.id}`, {
      state: {
        cityData: {
          id: city.id,
          name: city.name,
          description: city.description,
          imageUrl: city.imageUrl,
          images: [
            city.imageUrl,
            `https://source.unsplash.com/random/800x600/?${city.name.replace(/\s+/g, ',')},tourism`,
            `https://source.unsplash.com/random/800x600/?${city.name.replace(/\s+/g, ',')},travel`
          ],
          rating: city.rating,
          bestTime: city.bestTime,
          idealDuration: city.idealDuration,
          location: city.location,
          price: city.price,
          touristTraffic: city.category === 'Urban' ? 'High' : city.category === 'Wildlife' ? 'Moderate' : 'Low to Moderate',
          bestFor: getBestForCategory(city.category),
          stayOptions: getStayOptions(city.category),
          timeZone: "IST",
          detailedInfo: {
            overview: city.description,
            mustTryFood: city.mustTry,
            famousPlaces: city.attractions.map(attraction => ({
              name: attraction,
              description: getAttractionDescription(attraction, city.name),
              type: getAttractionType(attraction),
              distanceFromCity: attraction.includes("National Park") ? 
                `${Math.floor(Math.random() * 30) + 10} km from center` : 
                "City center or nearby",
              entryFee: getEntryFee(attraction),
              timings: getAttractionTimings(attraction),
              rating: (city.rating - 0.2 + Math.random() * 0.4).toFixed(1),
              image: `https://source.unsplash.com/random/600x400/?${attraction.replace(/\s+/g, ',')}`
            })),
            averageCost: city.price / 2000
          }
        }
      }
    });
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) 
      ? prev.filter(favId => favId !== id) 
      : [...prev, id]
    );
  };

  const shareCity = (name, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `Visit ${name}, Madhya Pradesh`,
        text: `Check out ${name} - an amazing destination in Madhya Pradesh!`,
        url: window.location.href
      });
    } else {
      alert(`Share ${name} with your friends!`);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Heritage': <GiIndiaGate className="inline mr-1" />,
      'Urban': <FiCompass className="inline mr-1" />,
      'Spiritual': <GiTempleGate className="inline mr-1" />,
      'Hill Station': <FaMountain className="inline mr-1" />,
      'Wildlife': <FaPaw className="inline mr-1" />,
      'Nature': <GiForestCamp className="inline mr-1" />
    };
    return icons[category] || <FiCompass className="inline mr-1" />;
  };

  const filteredCities = cities
    .filter(city => {
      const matchesCategory = activeFilter === 'All' || city.category === activeFilter;
      const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          city.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          city.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return a.id - b.id;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Discover Madhya Pradesh</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore the heart of India incredible heritage, wildlife, and culture</p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiCompass className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm hover:shadow-md transition-all text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-6 py-3 w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <FiFilter size={18} />
                <span>Filters</span>
                <FiChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed sm:absolute z-50 sm:z-10 mt-3 w-[calc(100vw-2rem)] sm:w-96 left-4 sm:left-auto right-4 sm:right-0 bg-white rounded-xl shadow-2xl p-6 border border-gray-200 max-h-[80vh] overflow-y-auto"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">Filter Options</h3>
                      <button 
                        onClick={() => setShowFilters(false)}
                        className="text-gray-500 hover:text-gray-700 p-1"
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Sort By</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: 'default', label: 'Recommended' },
                            { value: 'rating', label: 'Top Rated' },
                            { value: 'price-low', label: 'Price: Low to High' },
                            { value: 'price-high', label: 'Price: High to Low' },
                            { value: 'name', label: 'Alphabetical' }
                          ].map((option) => (
                            <motion.button
                              key={option.value}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                sortBy === option.value
                                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                              }`}
                              onClick={() => setSortBy(option.value)}
                            >
                              {option.label}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Categories</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {['All', 'Urban', 'Heritage', 'Spiritual', 'Hill Station', 'Wildlife'].map((category) => (
                            <motion.button
                              key={category}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 ${
                                activeFilter === category
                                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                              }`}
                              onClick={() => {
                                setActiveFilter(category);
                                setShowFilters(false);
                              }}
                            >
                              {category !== 'All' && getCategoryIcon(category)}
                              <span>{category}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'Urban', 'Heritage', 'Spiritual', 'Hill Station', 'Wildlife'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-200 shadow-sm hover:shadow-md'
                } flex items-center gap-2 text-sm sm:text-base cursor-pointer transition-all duration-200`}
                onClick={() => setActiveFilter(category)}
              >
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Cities Listing */}
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredCities.map((city) => (
                <motion.div
                  key={city.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:shadow-xl transition-all"
                  onClick={() => handleCityClick(city)}
                >
                  <div className="relative h-52 sm:h-60">
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4 flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleFavorite(city.id, e)}
                        className="bg-white/90 p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                        title={favorites.includes(city.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        {favorites.includes(city.id) ? 
                          <FaHeart className="text-red-500 text-lg" /> : 
                          <FaRegHeart className="text-gray-700 text-lg" />
                        }
                      </motion.button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex justify-between items-end">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-white">{city.name}</h2>
                          <div className="flex items-center text-white/90 mt-1">
                            <FiMapPin className="mr-2" size={16} />
                            <span className="text-sm sm:text-base">{city.location}</span>
                          </div>
                        </div>
                        <span className={`${city.color} text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 shadow-lg`}>
                          {getCategoryIcon(city.category)}
                          <span>{city.category}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={`${i < Math.floor(city.rating) ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
                            size={18}
                          />
                        ))}
                        <span className="text-gray-600 ml-1 text-sm">{city.rating}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 flex items-center">
                        <FaRupeeSign className="mr-1" size={12} />
                        {formatPrice(city.price).replace('₹', '')} onwards
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-5 line-clamp-2">{city.highlight}</p>
                   
                    <div className="flex flex-wrap gap-3 mb-5">
                      <div className="flex items-center bg-gray-100 px-4 py-1.5 rounded-full text-sm text-gray-700">
                        <FiCalendar className="mr-2" size={14} />
                        <span>{city.bestTime}</span>
                      </div>
                      <div className="flex items-center bg-gray-100 px-4 py-1.5 rounded-full text-sm text-gray-700">
                        <FiClock className="mr-2" size={14} />
                        <span>{city.idealDuration}</span>
                      </div>
                    </div>
                    
                    {city.mustTry && (
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Must Try Experiences</p>
                        <div className="flex flex-wrap gap-2">
                          {city.mustTry.map((item, i) => (
                            <motion.span 
                              key={i}
                              whileHover={{ y: -2 }}
                              className="text-xs bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`${city.color} px-5 py-2.5 rounded-lg text-sm font-medium text-white shadow-md hover:opacity-90 transition-all`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCityClick(city);
                        }}
                      >
                        Explore More
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => shareCity(city.name, e)}
                        className="text-gray-500 hover:text-purple-600 transition-colors p-2"
                        title="Share"
                      >
                        <FaShare size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 sm:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-block bg-gray-100 p-6 rounded-full mb-4">
              <FiCompass className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TopCitiesMPList;