import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Branding */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <a
              href="https://www.facebook.com/urubopuertomadero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                className="block h-8 w-auto"
                src="/Sources/logo.jpg"
                alt="Logo"
              />
              <span className="ml-2 text-white text-lg font-semibold">
                Puerto Madero Urubó
              </span>
            </a>
          </div>

          {/* Navbar links */}
          <div className="hidden sm:block sm:ml-6">
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#Promoción"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Promoción
          </a>
          <a
            href="#avancesPavimentacion"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pavimentación
          </a>
          <a
            href="#avancesCaballeriza"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Caballeriza
          </a>
          <a
            href="#ContaráCon"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contará Con
          </a>
          <a
            href="#Serviciosdelujo"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Servicios de Lujo
          </a>
          <a
            href="#ubicacion"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Ubicación
          </a>
          <a
            href="#Serviciosbasicos"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Servicios Básicos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
