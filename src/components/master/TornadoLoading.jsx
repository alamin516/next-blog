import React from 'react';
import { motion } from 'framer-motion';
import '@/assets/style/Tornado.css'

const TornadoLoading = () => {
  return (
    <div className="tornado-container">
      <motion.div
        className="tornado"
        animate={{
          x: ['0%', '100%'],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5, 
          ease: 'linear', 
          repeat: Infinity, 
        }}
      />
    </div>
  );
};

export default TornadoLoading;
