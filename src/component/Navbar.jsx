
import { useState } from "react";
import { FaSearch, FaUser, FaUserPlus } from "react-icons/fa";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm py-2 border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex justify-between items-center h-14">
          
          {/* Left section - Logo and Navigation */}
          <div className="flex items-center space-x-6 md:space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-lg md:text-xl font-bold text-white hover:text-gray-200 transition-colors">
                Explore
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/TopCitiesMPList" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                City
              </a>
              <a href="/services" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/contact" className="text-white/90 hover:text-white px-2 py-1 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right section - Search and Auth */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-1.5 w-40 md:w-48 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 bg-black/40 text-white placeholder-white/50 text-sm hover:bg-black/30 transition-all"
                />
                <FaSearch className="absolute left-3 top-2.5 text-white/50" />
              </form>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="/login" className="flex items-center text-white/90 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors border border-white/20 hover:border-white/30">
                <FaUser className="mr-2" /> Login
              </a>
              <a href="/signup" className="flex items-center bg-white text-black px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all shadow-sm">
                <FaUserPlus className="mr-2" /> Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 p-1 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-200 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 sm:px-6 py-4 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 bg-black/40 text-white placeholder-white/50 text-sm"
            />
            <FaSearch className="absolute left-3.5 top-3 text-white/50" />
          </form>

          <div className="space-y-3">
            <a href="/" className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
              Home
            </a>
            <a href="/TopCitiesMPList" className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
              City
            </a>
            <a href="/services" className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
              Services
            </a>
            <a href="/contact" className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors">
              Contact
            </a>
          </div>

          <div className="pt-4 space-y-3">
            <a href="/login" className="block px-4 py-2.5 text-center text-white/90 hover:text-white hover:bg-white/5 rounded-full text-sm transition-colors border border-white/20">
              Login
            </a>
            <a href="/signup" className="block px-4 py-2.5 text-center text-black bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition-all shadow-sm">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;