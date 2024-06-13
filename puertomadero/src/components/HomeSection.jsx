import React from 'react';

const HomeSection = () => {
  return (
    <div className="relative">
      {/* Video banner */}
      <div className="relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster="/Sources/inicioHome.jpg"
        >
          <source src="/Sources/animation1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Caption */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-2">Puerto Madero Urubó</h1>
        <h3 className="text-lg mb-4">Urbanización Ecológica</h3>
        
        {/* Separator */}
        <div className="flex items-center mb-4">
          <div className="h-px bg-white w-16"></div>
          <div className="mx-2"><i className="fas fa-anchor text-white"></i></div>
          <div className="h-px bg-white w-16"></div>
        </div>
        
        {/* Button */}
        <a
          href="#Promoción"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ¡Obtener Promoción!
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
