import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { title: "Eco Resort", video: "/Sources/Features/EcoResort.mp4", poster: "/Sources/Features/EcoResort.jpg" },
  { title: "Club de Polo", video: "/Sources/Features/polo.mp4", poster: "/Sources/Features/polo.jpg" },
  { title: "Proyectos Inmobiliarios", video: "/Sources/Features/inmobiliarios.mp4", poster: "/Sources/Features/inmobiliarios.jpg" },
  { title: "Ciclovías", video: "/Sources/Features/ciclovias.mp4", poster: "/Sources/Features/ciclovias.jpg" },
  { title: "Áreas Verdes", video: "/Sources/Features/areasverdes.mp4", poster: "/Sources/Features/areasverdes.jpg" },
  { title: "Asfaltado", video: "/Sources/Features/asfaltado.mp4", poster: "/Sources/Features/asfaltado.jpg" },
  { title: "Supermercado", video: "/Sources/Features/supermarket.mp4", poster: "/Sources/Features/supermarket.jpg" },
  { title: "Hospital", video: "/Sources/Features/hospital.mp4", poster: "/Sources/Features/hospital.jpg" },
  { title: "Escuela", video: "/Sources/Features/colegio.mp4", poster: "/Sources/Features/colegio.jpg" },
];

const ContaraCon = () => {
  return (
    <div id="ContaraCon" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h3
            className="text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contará con
          </motion.h3>
          <motion.div
            className="h-1 w-24 bg-blue-600 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <div key={index} ref={ref} className="feature">
                <motion.video
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  autoPlay
                  muted
                  playsInline
                  loop
                  poster={feature.poster}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                >
                  <source src={feature.video} type="video/mp4" />
                </motion.video>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContaraCon;

