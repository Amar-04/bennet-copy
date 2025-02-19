"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CountUpAnimation = ({ end, duration = 2, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span className={className}>{count}+</span>;
};

const Stats = () => {
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 4, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 my-20">
      <motion.div
        className="relative rounded-[2rem] bg-[#AECA1D]/40 border border-black flex flex-col md:flex-row items-center justify-between py-20 md:py-24 px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Circle */}
        <motion.div
          className="absolute -top-16 md:right-32 z-10 rounded-full bg-black text-white w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <CountUpAnimation end={100} className="font-bold" />
          </h2>
          <p className="text-sm md:text-base">
            Sku and
            <br />
            products
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-4">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={500} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Passionate
              <br />
              Representative
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={10000} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Distributors
              <br />
              Network
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <CountUpAnimation end={15500} className="font-bold" />
            </h2>
            <p className="text-xl md:text-2xl">
              Retail
              <br />
              Outlets
            </p>
          </motion.div>
        </div>

        {/* Bottom Circle */}
        <motion.div
          className="absolute -bottom-16 md:left-32 z-10 rounded-full bg-black text-white w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <CountUpAnimation end={15} className="font-bold" />
          </h2>
          <p className="text-sm md:text-base">
            States
            <br />
            distributed
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
