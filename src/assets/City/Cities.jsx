import c21 from "../../indorephoto/c21.jpg";
import chhapan from "../../indorephoto/chhapan.jpg"
import kanch from "../../indorephoto/kanch.jpg"
import lal from "../../indorephoto/lal.jpg"
import patalpani from "../../indorephoto/patalpani.jpg"
import ralam from "../../indorephoto/ralam.jpg"
import sarafa from "../../indorephoto/sarafa.jpg"
import khajarana from "../../indorephoto/khajarana.jpg"
import lemon from "../../indorephoto/lemon.jpg"
import radisson from "../../indorephoto/radissan.jpg"
import sayaji from "../../indorephoto/sayaji.jpg"
import shreemaya from "../../indorephoto/shreemaya.jpg"
import surya from "../../indorephoto/surya.jpg"
import mall from "../../indorephoto/WhatsApp Image 2025-04-07 at 17.42.25_388536de.jpg"
import annapurna from  "../../indorephoto/aanpurana.jpg"
import bada from "../../indorephoto/bada.jpg"
import indore from "../../cityphoto/indore.png"
import shree from "../../indorephoto/shreemayaho.jpg"
import shitla from "../../indorephoto/shitla.jpg"



const Cities = [
  {
    id: 1,
    name: "Indore",
    location: "Madhya Pradesh, India",
    images: [
      indore,
      lal,
    annapurna,
    radisson,
    kanch,
    chhapan
    ],
    rating: 4.7,
    bestTime: "October to March",
    idealDuration: "3-4 days",
    price: 18000,
    priceRange: {
      budget: "₹8,000",
      luxury: "₹30,000"
    },
    color: "bg-gradient-to-r from-orange-500 to-amber-500",
    category: "Cultural & Food",
    highlight: "Cleanest City in India & Food Capital",
    description: "Indore, the largest city in Madhya Pradesh, is known as the commercial capital of the state. It's famous for its mouth-watering street food, beautiful palaces, and vibrant markets. The city has been awarded as India's cleanest city multiple times under the Swachh Survekshan.",

    mustTry: [
      {
        name: "Poha Jalebi",
        description: "Indore's signature breakfast - flattened rice with spices, served with crispy jalebis",
        price: "₹50-100",
        bestPlaces: ["Sarafa Bazaar", "Chappan Dukan", "Shreemaya Celebration"]
      },
      {
        name: "Bhutte ka Kees",
        description: "Grated corn cooked with milk and spices, a monsoon specialty",
        price: "₹60-120",
        bestPlaces: ["Vijay Chaat House", "Shree Nagar Sweets"]
      },
      {
        name: "Dal Bafla",
        description: "MP's version of dal bati - wheat balls dunked in ghee with dal",
        price: "₹150-250",
        bestPlaces: ["Bapu Ki Kutia", "56 Dukan"]
      },
      {
        name: "Sabudana Khichdi",
        description: "Light and fluffy tapioca pearls cooked with peanuts and spices",
        price: "₹70-120",
        bestPlaces: ["Johnny Hot Dog", "Shree Rathnam"]
      },
      {
        name: "Garadu",
        description: "Fried yam cubes with spicy seasoning, a winter specialty",
        price: "₹80-150",
        bestPlaces: ["Sarafa Bazaar", "56 Dukan"]
      },
      {
        name: "Khopra Patties",
        description: "Coconut-filled pastry with sweet and savory flavors",
        price: "₹40-80",
        bestPlaces: ["Shree Rathnam", "Vijay Chaat House"]
      },
      {
        name: "Mawa Baati",
        description: "Dessert version of baati filled with sweet mawa",
        price: "₹100-200",
        bestPlaces: ["Shree Nagar Sweets", "Joshi Dahi Bada House"]
      }
    ],

    attractions: [
      {
        name: "Rajwada Palace",
        type: "Historical",
        image: indore,
        description: "The 7-story Holkar palace blending Maratha, Mughal and French architecture",
        entryFee: "₹25",
        timing: "10:00 AM - 5:00 PM",
        distance: "City Center"
      },
      {
        name: "Lal Bagh Palace",
        type: "Historical",
        image: lal,
        description: "Grand palace of the Holkars with European-style architecture and vintage car collection",
        entryFee: "₹100",
        timing: "10:00 AM - 5:00 PM",
        distance: "4 km from city center"
      },
      {
        name: "Sarafa Bazaar",
        type: "Market",
        image: sarafa,
        description: "Famous jewelry market by day, transforms into food street at night",
        entryFee: "Free",
        timing: "8:00 PM - 2:00 AM (food street)",
        distance: "City Center"
      },
      {
        name: "Chappan Dukan",
        type: "Food",
        image: chhapan,
        description: "56-shop food street offering Indore's famous snacks and sweets",
        entryFee: "Free",
        timing: "7:00 AM - 11:00 PM",
        distance: "3 km from city center"
      },
      {
        name: "Kanch Mandir",
        type: "Religious",
        image: kanch,
        description: "Jain temple entirely made of glass and mirrors with intricate carvings",
        entryFee: "Free",
        timing: "6:00 AM - 8:00 PM",
        distance: "2 km from city center"
      },
      {
        name: "Patalpani Waterfall",
        type: "Nature",
        image: patalpani,
        description: "Scenic waterfall surrounded by lush greenery, best visited post-monsoon",
        entryFee: "₹50",
        timing: "6:00 AM - 6:00 PM",
        distance: "35 km from city center"
      },
      {
        name: "Ralamandal Wildlife Sanctuary",
        type: "Wildlife",
        image: ralam,
        description: "Compact wildlife reserve with deer, leopards and various bird species",
        entryFee: "₹40",
        timing: "7:00 AM - 6:00 PM",
        distance: "15 km from city center"
      },
      
      {
        name: "C21 Mall",
        type: "Shopping",
        image: c21,
        description: "One of Indore's largest shopping malls with international brands, food court and multiplex",
        entryFee: "Free",
        timing: "10:00 AM - 10:00 PM",
        distance: "5 km from city center"
      },
      {
        name: "Treasure Island Mall",
        type: "Shopping",
        image: mall,
        description: "Popular mall with fashion outlets, entertainment zone and dining options",
        entryFee: "Free",
        timing: "11:00 AM - 9:30 PM",
        distance: "3 km from city center"
      },
      {
        name: "Bada Ganpati Temple",
        type: "Religious",
        image: bada,
        description: "Famous temple housing one of the largest Ganesha idols in the world (25 feet tall)",
        entryFee: "Free",
        timing: "5:00 AM - 8:00 PM",
        distance: "1 km from city center"
      },
      {
        name: "Khajrana Ganesh Temple",
        type: "Religious",
        image: khajarana,
        description: "Highly revered temple where devotees hammer nails into the walls for wishes",
        entryFee: "Free",
        timing: "5:00 AM - 9:00 PM",
        distance: "6 km from city center"
      },
      {
        name: "Annapurna Temple",
        type: "Religious",
        image: annapurna,
        description: "Beautiful temple dedicated to Goddess Annapurna with stunning architecture",
        entryFee: "Free",
        timing: "6:00 AM - 8:00 PM",
        distance: "2 km from city center"
      }
    ],

    
    shops: [
      {
        name: "Shreemaya Celebration Mall",
        type: "Shopping Complex",
        image:shree,
        description: "Luxury mall with premium brands, fine dining and entertainment options",
        specialty: "High-end fashion and electronics",
        timing: "10:00 AM - 10:00 PM",
        location: "Vijay Nagar"
      },
      {
        name: "Sitlamata Bazaar",
        type: "Traditional Market",
        image:shitla,
        description: "Famous for textiles, especially Maheshwari and Chanderi sarees",
        specialty: "Handloom fabrics and traditional wear",
        timing: "10:00 AM - 8:00 PM",
        location: "Near Rajwada"
      },
      {
        name: "Chhappan Dukan",
        type: "Food Market",
        image:chhapan,
        description: "Collection of 56 famous food shops serving Indore specialties",
        specialty: "Street food and sweets",
        timing: "7:00 AM - 11:00 PM",
        location: "New Palasia"
      },
      {
        name: "Apna Sweets",
        type: "Sweet Shop",
        description: "Legendary sweet shop famous for its Kaju Katli and Malpua",
        specialty: "Traditional Indian sweets",
        timing: "7:00 AM - 10:30 PM",
        location: "MG Road"
      },
      {
        name: "Joshi Dahi Vada House",
        type: "Food Stall",
        description: "Iconic shop serving Indore's famous dahi vadas for over 60 years",
        specialty: "Dahi Vada and Kachori",
        timing: "7:00 AM - 10:00 PM",
        location: "Sarafa Bazaar"
      },
      {
        name: "Vijay Chaat House",
        type: "Food Stall",
        description: "Must-visit for authentic Indori chaat and snacks",
        specialty: "Bhutte ka Kees and Sabudana Khichdi",
        timing: "8:00 AM - 11:00 PM",
        location: "Sarafa Bazaar"
      }
    ],

    hotels: [
      {
        id: 1,
        name: "Sayaji Hotel Indore",
        rating: 4.6,
        price: 6500,
        image: sayaji,
        location: "Vijay Nagar",
        amenities: ["wifi", "pool", "parking", "restaurant", "spa", "ac", "gym"],
        description: "5-star luxury hotel with modern amenities and excellent service"
      },
      {
        id: 2,
        name: "Radisson Blu Hotel Indore",
        rating: 4.5,
        price: 5500,
        image: radisson,
        location: "Race Course Road",
        amenities: ["wifi", "pool", "parking", "restaurant", "ac", "gym"],
        description: "Contemporary hotel with stylish rooms and great dining options"
      },
      {
        id: 3,
        name: "Lemon Tree Hotel",
        rating: 4.3,
        price: 4000,
        image: lemon,
        location: "Scheme No. 54",
        amenities: ["wifi", "parking", "restaurant", "ac", "gym"],
        description: "Vibrant hotel with cheerful decor and comfortable rooms"
      },
      {
        id: 4,
        name: "Hotel Surya",
        rating: 4.1,
        price: 2500,
        image: surya,
        location: "Rajwada",
        amenities: ["wifi", "parking", "restaurant", "ac"],
        description: "Budget-friendly hotel near major attractions with decent facilities"
      },
      {
        id: 5,
        name: "Moksh Himalaya Spa Resort",
        rating: 4.4,
        price: 7500,
        image: "",
        location: "Ralamandal",
        amenities: ["wifi", "pool", "parking", "spa", "ac", "gym", "restaurant"],
        description: "Luxury wellness resort with Ayurvedic spa treatments and mountain views"
      },
      {
        id: 6,
        name: "Hotel Shreemaya Residency",
        rating: 4.0,
        price: 3500,
        image: shreemaya,
        location: "MG Road",
        amenities: ["wifi", "parking", "restaurant", "ac"],
        description: "Comfortable business hotel with good connectivity to commercial areas"
      }
    ],

    transport: {
      byAir: {
        airport: "Devi Ahilyabai Holkar International Airport",
        airlines: "Air India, IndiGo, SpiceJet, Vistara",
        distance: "8 km from city center",
        taxiFare: "₹300-500"
      },
      byTrain: {
        station: "Indore Junction (INDB)",
        connections: "Connects to Mumbai, Delhi, Hyderabad, Bengaluru",
        frequency: "Multiple daily trains"
      },
      byRoad: {
        highways: ["NH52", "NH47"],
        busServices: "State transport and private operators",
        travelTime: "3 hours from Bhopal, 8 hours from Mumbai"
      },
      tips: [
        "Auto-rickshaws are best for short distances - always negotiate fare first",
        "Metro construction ongoing - check for route diversions",
        "Pre-paid taxis available at airport and railway station",
        "Ola/Uber services are widely available and reliable"
      ]
    },

    nearby: [
      {
        name: "Mandu",
        distance: "90 km",
        description: "Ancient fortress city with Afghan architecture and romantic legends"
      },
      {
        name: "Ujjain",
        distance: "55 km",
        description: "One of India's holiest cities with the Mahakaleshwar Jyotirlinga temple"
      },
      {
        name: "Omkareshwar",
        distance: "130 km",
        description: "Sacred island town with one of the 12 Jyotirlingas"
      },
      {
        name: "Maheshwar",
        distance: "95 km",
        description: "Historic town on Narmada river known for handwoven Maheshwari sarees"
      }
    ],

    tips: [
      "Try the street food but start with small portions if you're not used to spicy food",
      "Visit Sarafa Bazaar after 8 PM for the best food experience",
      "Winters (Nov-Feb) are pleasant but nights can get chilly",
      "Carry cash as many street food vendors don't accept digital payments",
      "Bargain while shopping in local markets",
      "Visit Rajwada Palace early morning to avoid crowds",
      "Don't miss the evening aarti at Khajrana Ganesh Temple",
      "C21 Mall has the best multiplex for movie lovers"
    ],

    safetyTips: [
      "Avoid isolated areas at night",
      "Keep valuables secure in crowded markets",
      "Drink bottled water only",
      "Be cautious while crossing roads as traffic can be chaotic",
      "Use registered taxis or app-based cabs for night travel",
      "Park only in designated areas at malls and temples"
    ]
  }
];

export default Cities; 