import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineAnchor } from "react-icons/md";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: .5 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const grow = {
  hidden: { width: 0 },
  visible: { width: '8rem', transition: { duration: 1, ease: 'easeInOut' } }
};

const spin = {
  hidden: { rotate: 0, opacity: 0 },
  visible: { rotate: 360, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }
};

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
          poster="/Sources/inicioHome.jpg"
        >
          <source src="/Sources/animation1.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div 
        className="caption absolute top-1/2 transform -translate-y-1/2 text-center text-white z-20 w-full px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl md:text-6xl font-bold uppercase text-shadow-lg"
          variants={fadeIn}
        >
          Puerto Madero Urubó
        </motion.h1>
        <motion.h3 className="text-2xl md:text-3xl text-shadow-lg"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          Urbanización Ecológica
        </motion.h3>
        <motion.div className="separator flex justify-center items-center my-4"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="line w-32 h-1 bg-white" variants={grow}></motion.div>
          <motion.div className="anchor text-2xl mx-4 text-secondary" variants={spin} transition={{ delay: 0.7 }}>
            <MdOutlineAnchor color='white' />
          </motion.div>
          <motion.div className="line w-32 h-1 bg-white" variants={grow}></motion.div>
        </motion.div>
        <motion.a
          id="homeBtn"
          className="btn btn-lg px-8 py-3 bg-[#001540] hover:bg-[#192b94] text-white uppercase rounded-md shadow-lg transition-transform transform hover:scale-105"
          href="#Promoción"
          variants={fadeIn}
          transition={{ delay: 1 }}
        >
          ¡Obtener Promoción!
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
