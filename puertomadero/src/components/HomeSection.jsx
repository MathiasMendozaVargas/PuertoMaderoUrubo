// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <div className="banner relative w-full h-full flex justify-center items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          poster="./static/Sources/inicioHome.jpg"
        >
          <source src="/Sources/animation1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="caption absolute top-1/2 transform -translate-y-1/2 text-center text-white z-20 w-full px-4">
        <h1 className="text-5xl md:text-6xl font-bold uppercase text-shadow-lg opacity-0 animate-fadeIn">
          Puerto Madero Urubó
        </h1>
        <h3 className="text-2xl md:text-3xl text-shadow-lg opacity-0 animate-fadeIn delay-500">
          Urbanización Ecológica
        </h3>
        <div className="separator flex justify-center items-center my-4">
          <div className="line w-32 h-1 bg-white opacity-0 animate-grow"></div>
          <div className="anchor text-2xl mx-4 text-secondary opacity-0 animate-spin delay-700">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="line w-32 h-1 bg-white opacity-0 animate-grow"></div>
        </div>
        <a
          id="homeBtn"
          className="btn btn-lg px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white uppercase rounded-full shadow-lg transition-transform transform hover:scale-105 opacity-0 animate-fadeIn delay-1000"
          href="#Promoción"
        >
          ¡Obtener Promoción!
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
