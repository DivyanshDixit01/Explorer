



export const Footer = () => {
  return (

    <footer className="bg-gradient-to-r bg-black/90 text-white py-16 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">About Us</h3>
            <p className="text-indigo-200">
              We are a company dedicated to providing the best service and
              solutions for our customers. Our mission is to make your life
              easier and more productive.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-indigo-200 hover:text-white transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-indigo-200 hover:text-white transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-indigo-200 hover:text-white transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-indigo-200 hover:text-white transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-indigo-800/50 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-indigo-700"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-all"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-all"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-all"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0 2.163c-3.259 0-3.667.01-4.947.058-2.905.133-4.165 1.45-4.308 4.308-.047 1.28-.058 1.688-.058 4.947 0 3.259.01 3.668.058 4.948.143 2.907 1.403 4.175 4.308 4.308 1.28.047 1.688.058 4.948.058 3.259 0 3.668-.01 4.948-.058 2.907-.143 4.175-1.403 4.308-4.308.047-1.28.058-1.688.058-4.948 0-3.259-.01-3.667-.058-4.947-.133-2.906-1.45-4.165-4.308-4.308-1.28-.047-1.688-.058-4.947-.058zm0 5.838a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 2.5a1 1 0 110 2 1 1 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-indigo-700/50 mt-8 pt-8 text-center">
          <p className="text-indigo-200">
            &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};