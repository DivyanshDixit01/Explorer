import { useState, useEffect } from 'react';
import one from '../assets/image1.jpg';
import two from '../assets/image2.jpg';
import three from '../assets/image3.jpg';
import { Button, Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TopCitiesMPList from './TopCitiesMPList';
import { Routes, Route } from "react-router-dom"; 



export function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const slides = [
    { 
      img: one, 
      title: "Discover Amazing Places", 
      subtitle: "Explore our curated destinations",
      cta: "Start Exploring",
      overlayColor: "rgba(74, 20, 140, 0.4)", // Purple
      gradient: "linear-gradient(to bottom, transparent 0%, rgba(74, 20, 140, 0.6) 100%)",
      buttonColor: "linear-gradient(45deg, #4a148c 0%, #7b1fa2 100%)"
    },
    { 
      img: two, 
      title: "Unforgettable Experiences", 
      subtitle: "Create lasting memories",
      cta: "Book Now",
      overlayColor: "rgba(0, 128, 128, 0.4)", // Teal
      gradient: "linear-gradient(to bottom, transparent 0%, rgba(0, 128, 128, 0.6) 100%)",
      buttonColor: "linear-gradient(45deg, #008080 0%, #00b4b4 100%)"
    },
    { 
      img: three, 
      title: "Luxury Redefined", 
      subtitle: "Premium services await",
      cta: "View Packages",
      overlayColor: "rgba(255, 215, 0, 0.3)", // Gold
      gradient: "linear-gradient(to bottom, transparent 0%, rgba(255, 215, 0, 0.2) 100%)",
      buttonColor: "linear-gradient(45deg, #ffd700 0%, #ffec80 100%)"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalTime = 3000;

  useEffect(() => {
    if (isHovered || isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isHovered, isAnimating, slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                background: slide.gradient
              }}
            />
            
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <div 
                className="text-white z-10 max-w-2xl"
                style={{
                  transition: 'all 0.8s ease',
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                  opacity: currentSlide === index ? 1 : 0
                }}
              >
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                    fontSize: isMobile ? '1.5rem' : '2rem',
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography 
                  variant={isMobile ? "body1" : "h6"} 
                  component="p"
                  sx={{
                    mb: 3,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    fontSize: isMobile ? '0.9rem' : '1.1rem',
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    borderRadius: '25px',
                    px: 3,
                    py: 1,
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    background: slide.buttonColor,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Box 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-1"
        >
          {slides.map((_, index) => (
            <Button
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                minWidth: 'auto',
                p: 0.5,
                color: 'white',
                '&:hover': {
                  transform: 'scale(1.2)'
                },
              }}
            >
              {currentSlide === index ? (
                <CircleIcon sx={{ fontSize: 10, color: '#ffd700' }} />
              ) : (
                <CircleOutlinedIcon sx={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }} />
              )}
            </Button>
          ))}
        </Box>
      </div>
    <Routes>
      <Route path="/" element={<TopCitiesMPList />} />
    </Routes>
    </div>
  );
}
