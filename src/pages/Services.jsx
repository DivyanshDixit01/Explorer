
import { FaHotel, FaUtensils, FaCar, FaCamera, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHotel className="text-4xl mb-4 text-indigo-600" />,
      title: "Hotel Booking",
      description: "Find the perfect accommodation from budget stays to luxury resorts with our curated hotel partners.",
      features: [
        "Best price guarantee",
        "Instant confirmation",
        "24/7 customer support"
      ]
    },
    {
      id: 2,
      icon: <FaUtensils className="text-4xl mb-4 text-green-600" />,
      title: "Food Tours",
      description: "Experience authentic local cuisine with our guided food tours and cooking classes.",
      features: [
        "Local expert guides",
        "Hidden gem eateries",
        "Vegetarian/Vegan options"
      ]
    },
    {
      id: 3,
      icon: <FaCar className="text-4xl mb-4 text-blue-600" />,
      title: "Transportation",
      description: "Hassle-free transfers and local transportation options tailored to your needs.",
      features: [
        "Airport transfers",
        "Self-drive rentals",
        "Chauffeur services"
      ]
    },
    {
      id: 4,
      icon: <FaCamera className="text-4xl mb-4 text-amber-600" />,
      title: "Tour Packages",
      description: "Customized itineraries covering all major attractions with local insights.",
      features: [
        "Private & group tours",
        "Flexible durations",
        "Multilingual guides"
      ]
    },
    {
      id: 5,
      icon: <FaMapMarkedAlt className="text-4xl mb-4 text-red-600" />,
      title: "Travel Planning",
      description: "Personalized trip planning service to create your perfect itinerary.",
      features: [
        "Destination experts",
        "Activity recommendations",
        "Real-time updates"
      ]
    },
    {
      id: 6,
      icon: <FaHeadset className="text-4xl mb-4 text-purple-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for any travel emergencies or queries.",
      features: [
        "Dedicated helpline",
        "Multilingual support",
        "On-ground assistance"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a perfect trip in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r bg-gray-600  rounded-xl p-8 text-black">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="text-3xl font-bold mb-4">Need Custom Travel Solutions?</h3>
              <p className="text-blue-100">
                Contact our travel experts to create a personalized itinerary tailored to your preferences and budget.
              </p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Services;