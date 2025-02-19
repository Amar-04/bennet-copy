"use client";

import { motion } from "framer-motion";

const Map = () => {
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="relative w-full h-[600px] rounded-2xl overflow-hidden"
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/map.png"
          alt="Location Map"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Map;
