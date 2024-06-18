import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  {
    imgSrc: './Sources/Clients/cecilia.webp',
    quote: 'Invertir en los terrenos de Puerto Madero ha sido una de las mejores inversiones de toda mi vida, será increible una vez el proyecto sea entregado y mis tierras valgan 10 veces más!!!',
    cite: 'Cecilia Vargas, Administradora de Domo'
  },
  {
    imgSrc: './Sources/Clients/jenny.webp',
    quote: 'Para mí Puerto Madero Urubó es una de las mejores urbanizaciones ubicadas en la zona del Urubó, con excelentes precios y alta plusvalía! No la pensaría dos veces en invertir de nuevo.',
    cite: 'Jenny Abrego, Fundadora de Landivar & Asociados'
  },
  {
    imgSrc: './Sources/Clients/aylin.webp',
    quote: 'Me interesó el proyecto de Puerto Madero Urubó como oportunidad de inversión por el precio, la documentación que para mi es importantísimo a la hora de invertir, y al conocer realmente la zona muy linda.',
    cite: 'Aylin Ruiz'
  },
  {
    imgSrc: './Sources/Clients/cecilia.webp',
    quote: 'Invertir en los terrenos de Puerto Madero ha sido una de las mejores inversiones de toda mi vida, será increible una vez el proyecto sea entregado y mis tierras valgan 10 veces más!!!',
    cite: 'Cecilia Vargas, Administradora de Domo'
  },
  {
    imgSrc: './Sources/Clients/jenny.webp',
    quote: 'Para mí Puerto Madero Urubó es una de las mejores urbanizaciones ubicadas en la zona del Urubó, con excelentes precios y alta plusvalía! No la pensaría dos veces en invertir de nuevo.',
    cite: 'Jenny Abrego, Fundadora de Landivar & Asociados'
  },
  {
    imgSrc: './Sources/Clients/aylin.webp',
    quote: 'Me interesó el proyecto de Puerto Madero Urubó como oportunidad de inversión por el precio, la documentación que para mi es importantísimo a la hora de invertir, y al conocer realmente la zona muy linda.',
    cite: 'Aylin Ruiz'
  }
];

const ClientsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="Clientes" className="offset">
      <div className="bg-gray-100 p-8">
        <div className="text-center pb-5">
          <h3 className="text-3xl font-bold">Clientes</h3>
          <div className="w-24 h-1 bg-blue-900 mx-auto my-4"></div>
        </div>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <InViewClient key={index} client={client} delay={index * 0.1} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const InViewClient = ({ client, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [delayedInView, setDelayedInView] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setDelayedInView(true);
      }, 1000); // Delay before animation starts
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (delayedInView) {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(client.quote.slice(0, charIndex + 1));
        charIndex += 1;
        if (charIndex === client.quote.length) {
          clearInterval(typingInterval);
        }
      }, 20); // Typing speed in ms
      return () => clearInterval(typingInterval);
    }
  }, [delayedInView, client.quote]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={delayedInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="px-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <div className="w-36">
          <img src={client.imgSrc} alt="" className="w-full rounded-full shadow-lg" />
        </div>
        <div className="mt-4">
          <blockquote className="relative text-center">
            <i className="fas fa-quote-left text-blue-900 absolute top-0 left-0 transform -translate-x-6 -translate-y-2"></i>
            <p className="ml-8">{displayedText}</p>
            <hr className="border-t border-blue-900 my-4" />
            <cite className="block text-sm">&#8212; {client.cite}</cite>
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsSection;
