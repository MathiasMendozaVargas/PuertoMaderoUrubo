import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css'; // Importing custom CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when switching to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-[#001540] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Navbar branding */}
          <div className="flex-shrink-0">
            <a
              href="https://www.facebook.com/urubopuertomadero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                className="block h-8 sm:h-10 w-auto"
                src="/Sources/logo.jpg"
                alt="Logo"
              />
              <span className="ml-2 text-white text-lg font-semibold">
                Puerto Madero Urubó
              </span>
            </a>
          </div>

          {/* Navbar links */}
          <div className="hidden lg:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#Promoción"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Promoción
              </a>
              <a
                href="#avancesPavimentacion"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pavimentación
              </a>
              <a
                href="#avancesCaballeriza"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Caballeriza
              </a>
              <a
                href="#ContaráCon"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contará Con
              </a>
              <a
                href="#Serviciosdelujo"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios de Lujo
              </a>
              <a
                href="#ubicacion"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Ubicación
              </a>
              <a
                href="#Serviciosbasicos"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios Básicos
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="mobile-menu-btn block text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 13H5v-2h14v2z"
                  />
                ) : (
                  <>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu z-40"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#Promoción"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Promoción
              </a>
              <a
                href="#avancesPavimentacion"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Pavimentación
              </a>
              <a
                href="#avancesCaballeriza"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Caballeriza
              </a>
              <a
                href="#ContaráCon"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contará Con
              </a>
              <a
                href="#Serviciosdelujo"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Servicios de Lujo
              </a>
              <a
                href="#ubicacion"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Ubicación
              </a>
              <a
                href="#Serviciosbasicos"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Servicios Básicos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
