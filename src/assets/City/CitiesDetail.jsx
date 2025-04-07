import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { 
  FiStar, FiMapPin, FiCalendar, FiClock, FiX, FiDollarSign, 
  FiChevronRight, FiUsers, FiSun, FiCloudRain, FiWind, FiInfo,
  FiShare2, FiChevronLeft, FiChevronRight as FiNext, FiHome, FiShoppingBag
} from 'react-icons/fi';
import { FaRegHeart, FaHeart, FaPaw, FaUtensils, FaSwimmingPool, FaWifi, FaParking, FaSnowflake } from 'react-icons/fa';
import { GiSandsOfTime, GiIndiaGate, GiTempleGate } from 'react-icons/gi';
import { IoFastFoodOutline, IoTimeOutline, IoBedOutline } from 'react-icons/io5';
import { MdOutlineMuseum, MdOutlineNature, MdOutlineLocalOffer, MdOutlineRestaurant, MdOutlineSpa } from 'react-icons/md';
import { RiTrainLine, RiFlightTakeoffLine, RiRoadsterLine } from 'react-icons/ri';
import Cities from "../City/Cities";

const CitiesDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [bookingDates, setBookingDates] = useState({
    start: '',
    end: '',
    guests: 2
  });
  const [autoPlay, setAutoPlay] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Find city by ID from Cities array
  const cityData = Cities.find(city => city.id === parseInt(id || '0'));

  // Auto-play carousel effect
  useEffect(() => {
    if (!cityData) return;

    const images = cityData.images || [cityData.imageUrl];
    
    if (autoPlay && images.length > 1) {
      const id = setInterval(() => {
        setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
      setIntervalId(id);
      
      return () => {
        if (id) clearInterval(id);
      };
    }
  }, [autoPlay, cityData]);

  const handlePrevImage = useCallback(() => {
    const images = cityData.images || [cityData.imageUrl];
    setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoPlayTimer();
  }, [cityData]);

  const handleNextImage = useCallback(() => {
    const images = cityData.images || [cityData.imageUrl];
    setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    resetAutoPlayTimer();
  }, [cityData]);

  const resetAutoPlayTimer = useCallback(() => {
    setAutoPlay(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
    const id = setTimeout(() => {
      setAutoPlay(true);
    }, 10000);
    setIntervalId(id);
  }, [intervalId]);

  useEffect(() => {
    if (cityData) {
      setIsLoadingWeather(true);
      setTimeout(() => {
        setWeatherData({
          temp: Math.floor(Math.random() * 15) + 20,
          condition: ['Sunny', 'Partly Cloudy', 'Rainy', 'Clear'][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 50) + 30,
          wind: Math.floor(Math.random() * 20) + 5
        });
        setIsLoadingWeather(false);
      }, 1000);
    }
  }, [cityData]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  }, []);

  if (!cityData) {
    navigate('/');
    return null;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price || 0);
  };

  const getWeatherIcon = (condition) => {
    switch(condition.toLowerCase()) {
      case 'sunny': return <FiSun className="text-yellow-500 text-xl" />;
      case 'rainy': return <FiCloudRain className="text-blue-500 text-xl" />;
      case 'partly cloudy': return <FiWind className="text-gray-500 text-xl" />;
      default: return <FiSun className="text-yellow-300 text-xl" />;
    }
  };

  const renderPlaceTypeIcon = (type) => {
    switch((type || '').toLowerCase()) {
      case 'historical': return <GiIndiaGate className="text-amber-500 text-lg" />;
      case 'religious': return <GiTempleGate className="text-purple-500 text-lg" />;
      case 'wildlife': return <FaPaw className="text-red-500 text-lg" />;
      case 'market': return <FiShoppingBag className="text-blue-500 text-lg" />;
      case 'nature': return <MdOutlineNature className="text-green-500 text-lg" />;
      default: return <FiMapPin className="text-blue-500 text-lg" />;
    }
  };

  const renderHotelAmenityIcon = (amenity) => {
    switch(amenity.toLowerCase()) {
      case 'wifi': return <FaWifi className="text-blue-500" />;
      case 'pool': return <FaSwimmingPool className="text-teal-500" />;
      case 'parking': return <FaParking className="text-gray-600" />;
      case 'restaurant': return <MdOutlineRestaurant className="text-red-500" />;
      case 'spa': return <MdOutlineSpa className="text-purple-500" />;
      case 'ac': return <FaSnowflake className="text-blue-400" />;
      default: return <FiHome className="text-gray-500" />;
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${cityData.name} from ${bookingDates.start} to ${bookingDates.end} for ${bookingDates.guests} guests`);
    setShowBookingModal(false);
  };

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction) => {
    const images = cityData.images || [cityData.imageUrl];
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiMapPin size={16} /> },
    { id: 'places', label: 'Places', icon: <MdOutlineMuseum size={16} /> },
    { id: 'shops', label: 'Shops', icon: <FiShoppingBag size={16} /> },
    { id: 'hotels', label: 'Hotels', icon: <IoBedOutline size={16} /> },
    { id: 'food', label: 'Food', icon: <IoFastFoodOutline size={16} /> },
    { id: 'transport', label: 'Transport', icon: <RiTrainLine size={16} /> },
    { id: 'tips', label: 'Tips', icon: <MdOutlineLocalOffer size={16} /> }
  ];

  const images = cityData.images || [cityData.imageUrl];

  return (
    <div className="bg-white">
      {/* Hero Image Carousel */}
      <div className="relative w-full" style={{ height: '70vh', minHeight: '500px', maxHeight: '800px' }}>
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <img
                src={image}
                alt={`${cityData.name} view ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                style={{ objectPosition: 'center' }}
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/1920x1080?text=City+Image';
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md z-10 transition-all"
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md z-10 transition-all"
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </button>
          </>
        )}
        
        {/* Carousel Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  resetAutoPlayTimer();
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Auto-play Progress Bar */}
        {autoPlay && images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-10">
            <div 
              className="h-full bg-white transition-all duration-5000 ease-linear"
              style={{
                width: `${((currentImageIndex + 1) / images.length) * 100}%`
              }}
            />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* City Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{cityData.name}</h1>
                <div className="flex items-center mb-4">
                  <FiMapPin className="mr-2 text-lg" />
                  <span className="text-lg">{cityData.location}</span>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < Math.floor(cityData.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                  />
                ))}
                <span className="ml-1 font-medium">{cityData.rating?.toFixed(1)}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <FiCalendar className="mr-2" />
                <span>Best time: {cityData.bestTime}</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <FiClock className="mr-2" />
                <span>Ideal stay: {cityData.idealDuration}</span>
              </div>
              {weatherData && (
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  {getWeatherIcon(weatherData.condition)}
                  <span className="ml-2">{weatherData.temp}°C</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all transform hover:scale-110"
          aria-label="Go back"
        >
          <FiX size={24} />
        </button>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all transform hover:scale-110"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-xl" />}
          </button>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all transform hover:scale-110"
            aria-label="Share"
          >
            <FiShare2 className="text-xl" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6 relative z-0">
        {/* Price Card */}
        <div className={`${cityData.color || 'bg-gradient-to-r from-blue-600 to-blue-500'} text-white p-6 rounded-2xl shadow-xl mb-8 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-noise opacity-10"></div>
          <div className="relative flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90 mb-1">Average trip cost for {cityData.idealDuration}</p>
              <p className="text-3xl font-bold">{formatPrice(cityData.price)}</p>
              {cityData.priceRange && (
                <p className="text-xs opacity-80 mt-1">
                  Budget: {cityData.priceRange.budget} • Luxury: {cityData.priceRange.luxury}
                </p>
              )}
            </div>
            <button 
              onClick={() => setShowBookingModal(true)}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Plan Trip <FiChevronRight className="ml-1" />
            </button>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
            <div className="bg-blue-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
              <FiUsers className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Category</p>
              <p className="font-semibold">{cityData.category}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
            <div className="bg-green-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
              <MdOutlineLocalOffer className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Highlight</p>
              <p className="font-semibold">{cityData.highlight}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
            <div className="bg-amber-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
              <IoBedOutline className="text-amber-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Stay Options</p>
              <p className="font-semibold">Hotels, Guesthouses</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100">
            <div className="bg-purple-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
              <GiSandsOfTime className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Time Zone</p>
              <p className="font-semibold">IST (UTC+5:30)</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 mr-2 rounded-lg whitespace-nowrap transition-all flex items-center ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              } hover:shadow-md`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 border border-gray-100">
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">About {cityData.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {cityData.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3 flex items-center text-blue-800 text-lg">
                    <IoFastFoodOutline className="mr-3 text-blue-600" size={20} />
                    Must-Try Experiences
                  </h3>
                  <ul className="space-y-3">
                    {cityData.mustTry?.slice(0, 4).map((food, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-3 flex-shrink-0">#{index+1}</span>
                        <span className="text-gray-700">{food.name || food}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3 flex items-center text-amber-800 text-lg">
                    <GiSandsOfTime className="mr-3 text-amber-600" size={20} />
                    Best Time to Visit
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="font-medium mr-2">Season:</span>
                      <span>{cityData.bestTime}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span>
                      <span>{cityData.idealDuration} recommended</span>
                    </p>
                    {weatherData && (
                      <div className="flex items-center mt-3">
                        <span className="font-medium mr-2">Current Weather:</span>
                        {getWeatherIcon(weatherData.condition)}
                        <span className="ml-2">{weatherData.condition}, {weatherData.temp}°C</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Nearby Section */}
              {cityData.nearby && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-5 text-gray-800">Nearby Getaways</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cityData.nearby.map((place, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all group">
                        <div className="flex items-start">
                          <div className="bg-white p-2 rounded-lg mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                            <FiMapPin className="text-blue-500" size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{place.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{place.distance} away</p>
                            {place.description && (
                              <p className="text-sm mt-2 text-gray-700">{place.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'places' && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Must-Visit Places</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData.attractions?.map((place, index) => (
                  <div key={index} className="border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48 w-full">
                      <img 
                        src={place.image || `https://source.unsplash.com/random/600x400/?${place.name.replace(/\s+/g, ',')}`} 
                        alt={place.name}
                        className="w-full h-full object-cover"
                        onClick={() => openImageModal(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center text-xs shadow-sm">
                        {renderPlaceTypeIcon(place.type)}
                        <span className="ml-1">{place.type || 'Attraction'}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{place.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{place.description}</p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-gray-700">
                          <FiDollarSign className="mr-1" />
                          <span>{place.entryFee || 'Free'}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <IoTimeOutline className="mr-1" />
                          <span>{place.timing || '9AM-6PM'}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <FiMapPin className="mr-1" />
                          <span>{place.distance || 'City'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'shops' && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Famous Shops & Markets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData.shops?.map((shop, index) => (
                  <div key={index} className="border rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                    <div className="relative h-48 w-full">
                      <img 
                        src={shop.image || `https://source.unsplash.com/random/600x400/?${shop.name.replace(/\s+/g, ',')},market,shop`} 
                        alt={shop.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center text-xs shadow-sm">
                        <FiShoppingBag className="text-blue-500" />
                        <span className="ml-1">{shop.type || 'Market'}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{shop.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{shop.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {shop.specialties?.slice(0, 3).map((item, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-gray-700">
                          <FiMapPin className="mr-1" />
                          <span>{shop.location || 'City Center'}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <IoTimeOutline className="mr-1" />
                          <span>{shop.timing || '10AM-9PM'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )) || (
                  <div className="col-span-full text-center py-10">
                    <FiShoppingBag className="mx-auto text-4xl text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-gray-600">No shop information available</h3>
                    <p className="text-gray-500 mt-2">We'll add famous shops and markets for this city soon!</p>
                  </div>
                )}
              </div>
              
              {/* Shopping Tips Section */}
              {cityData.shoppingTips && (
                <div className="mt-10 bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <h3 className="font-semibold text-xl mb-4 flex items-center text-amber-800">
                    <FiInfo className="mr-3 text-amber-600" />
                    Shopping Tips for {cityData.name}
                  </h3>
                  <ul className="space-y-3">
                    {cityData.shoppingTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mr-3 flex-shrink-0">#{index+1}</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'hotels' && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended Hotels</h2>
              <div className="space-y-6">
                {cityData.hotels?.map((hotel) => (
                  <div key={hotel.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/600x400?text=Hotel+Image';
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                            <FiStar className="text-yellow-400 fill-yellow-400 mr-1" />
                            <span>{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <FiMapPin className="mr-2 text-sm" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4 text-sm">{hotel.description}</p>
                        
                        {hotel.amenities && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-800 mb-2">Amenities:</h4>
                            <div className="flex flex-wrap gap-2">
                              {hotel.amenities.map((amenity, index) => (
                                <span key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs">
                                  {renderHotelAmenityIcon(amenity)}
                                  <span className="ml-1 capitalize">{amenity}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-500">Starting from</p>
                            <p className="text-xl font-bold text-blue-600">{formatPrice(hotel.price)}</p>
                            <p className="text-xs text-gray-500">per night</p>
                          </div>
                          <button 
                            onClick={() => setShowBookingModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'food' && (
            <div className="space-y-6 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Food & Dining</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {cityData.mustTry?.map((food, index) => (
                  <div key={index} className="border rounded-lg p-5 hover:shadow-md transition-all group">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                        <FaUtensils size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-lg text-gray-800">{food.name}</h3>
                          {food.price && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {food.price}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{food.description}</p>
                        {food.bestPlaces && (
                          <div className="mt-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">Best places to try:</p>
                            <div className="flex flex-wrap gap-2">
                              {food.bestPlaces.map((place, i) => (
                                <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                  {place}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'transport' && (
            <div className="space-y-6 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Transportation Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* By Air Card */}
                {cityData.transport?.byAir && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                    <div className="bg-blue-600 p-4 text-white flex items-center">
                      <RiFlightTakeoffLine className="text-2xl mr-3" />
                      <h3 className="text-xl font-semibold">By Air</h3>
                    </div>
                    <div className="p-5">
                      {typeof cityData.transport.byAir === 'string' ? (
                        <p className="text-gray-700">{cityData.transport.byAir}</p>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-900">Airport:</p>
                            <p className="text-gray-700">{cityData.transport.byAir.airport || 'Not specified'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Airlines:</p>
                            <p className="text-gray-700">{cityData.transport.byAir.airlines || 'Various airlines available'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Distance from city:</p>
                            <p className="text-gray-700">{cityData.transport.byAir.distance || 'Not specified'}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* By Train Card */}
                {cityData.transport?.byTrain && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                    <div className="bg-green-600 p-4 text-white flex items-center">
                      <RiTrainLine className="text-2xl mr-3" />
                      <h3 className="text-xl font-semibold">By Train</h3>
                    </div>
                    <div className="p-5">
                      {typeof cityData.transport.byTrain === 'string' ? (
                        <p className="text-gray-700">{cityData.transport.byTrain}</p>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-900">Main Station:</p>
                            <p className="text-gray-700">{cityData.transport.byTrain.station || 'Central Station'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Connections:</p>
                            <p className="text-gray-700">{cityData.transport.byTrain.connections || 'Connects to major cities'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Frequency:</p>
                            <p className="text-gray-700">{cityData.transport.byTrain.frequency || 'Multiple daily trains'}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* By Road Card */}
                {cityData.transport?.byRoad && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                    <div className="bg-amber-600 p-4 text-white flex items-center">
                      <RiRoadsterLine className="text-2xl mr-3" />
                      <h3 className="text-xl font-semibold">By Road</h3>
                    </div>
                    <div className="p-5">
                      {typeof cityData.transport.byRoad === 'string' ? (
                        <p className="text-gray-700">{cityData.transport.byRoad}</p>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-gray-900">Highways:</p>
                            <p className="text-gray-700">
                              {Array.isArray(cityData.transport.byRoad.highways) 
                                ? cityData.transport.byRoad.highways.join(', ')
                                : cityData.transport.byRoad.highways || 'Multiple highway connections'}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Bus Services:</p>
                            <p className="text-gray-700">{cityData.transport.byRoad.busServices || 'State and private operators'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Travel Time:</p>
                            <p className="text-gray-700">
                              {cityData.transport.byRoad.travelTime 
                                ? `Approx ${cityData.transport.byRoad.travelTime}`
                                : 'Varies by destination'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Transport Tips */}
              {cityData.transport?.tips && (
                <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-lg mb-3 flex items-center text-blue-800">
                    <FiInfo className="mr-2" />
                    Transportation Tips
                  </h3>
                  <ul className="space-y-2">
                    {Array.isArray(cityData.transport.tips) ? (
                      cityData.transport.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-700">{cityData.transport.tips}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-6 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Travel Tips</h2>
              
              {cityData.tips && (
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-4 flex items-center text-blue-800 text-lg">
                    <MdOutlineLocalOffer className="mr-3 text-blue-600" size={20} />
                    Local Tips & Advice
                  </h3>
                  <ul className="space-y-4">
                    {cityData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                          <FiInfo className="text-blue-600" size={16} />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Safety Tips */}
              {cityData.safetyTips && (
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover:shadow-md transition-shadow mt-6">
                  <h3 className="font-semibold mb-4 flex items-center text-red-800 text-lg">
                    <FiInfo className="mr-3 text-red-600" size={20} />
                    Safety Tips
                  </h3>
                  <ul className="space-y-4">
                    {cityData.safetyTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-white p-2 rounded-full mr-4 shadow-sm">
                          <FiInfo className="text-red-600" size={16} />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-2xl z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-xl font-bold text-gray-800">{formatPrice(cityData.price)}</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`px-6 py-3 rounded-lg font-medium border flex items-center transition-all ${
                isFavorite 
                  ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-inner' 
                  : 'border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md'
              } transform hover:-translate-y-0.5`}
            >
              {isFavorite ? (
                <>
                  <FaHeart className="mr-2 text-red-500" />
                  Saved
                </>
              ) : (
                <>
                  <FaRegHeart className="mr-2" />
                  Save Trip
                </>
              )}
            </button>
            <button 
              onClick={() => setShowBookingModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center transform hover:-translate-y-0.5"
            >
              Book Now <FiChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20"
          >
            <FiX size={28} />
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20 z-10"
          >
            <FiChevronLeft size={32} />
          </button>
          
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt={`${cityData.name} view ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              style={{ maxHeight: '90vh' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/1920x1080?text=City+Image';
              }}
            />
          </div>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20 z-10"
          >
            <FiNext size={32} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-gray-800">Plan Your Trip to {cityData.name}</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <form onSubmit={handleBookingSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="date"
                        value={bookingDates.start}
                        onChange={(e) => setBookingDates({...bookingDates, start: e.target.value})}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <p className="text-xs text-gray-500 mt-1">Start Date</p>
                    </div>
                    <div>
                      <input
                        type="date"
                        value={bookingDates.end}
                        onChange={(e) => setBookingDates({...bookingDates, end: e.target.value})}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        min={bookingDates.start || new Date().toISOString().split('T')[0]}
                      />
                      <p className="text-xs text-gray-500 mt-1">End Date</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    value={bookingDates.guests}
                    onChange={(e) => setBookingDates({...bookingDates, guests: parseInt(e.target.value)})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    Continue to Booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesDetail;