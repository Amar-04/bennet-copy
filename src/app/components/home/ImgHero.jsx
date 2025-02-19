"use client";

import { motion } from "framer-motion";

const ImgHero = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textHoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const accentTextHoverVariants = {
    hover: {
      scale: 1.02,
      color: "#c5e320",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative flex items-center overflow-x-hidden mt-[96px]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1]"
              variants={leftItemVariants}
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  A Legacy of
                </motion.span>
                <motion.span
                  whileHover="hover"
                  variants={accentTextHoverVariants}
                  className="text-[#AECA1D] inline-block cursor-default"
                >
                  Wellness.
                </motion.span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-3 mt-2">
                <motion.span
                  whileHover="hover"
                  variants={textHoverVariants}
                  className="inline-block cursor-default"
                >
                  Together,
                </motion.span>
                <div className="inline-flex items-baseline gap-x-2">
                  <motion.span
                    whileHover="hover"
                    variants={textHoverVariants}
                    className="inline-block cursor-default"
                  >
                    We
                  </motion.span>
                  <motion.span
                    whileHover="hover"
                    variants={accentTextHoverVariants}
                    className="text-[#AECA1D] inline-block cursor-default"
                  >
                    Heal
                  </motion.span>
                  <span className="text-[#AECA1D]">.</span>
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 cursor-default"
              variants={leftItemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Dedicated to wellness since 1996
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[500px]"
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              <img
                src="/heroImg.png"
                alt="Medical consultation"
                className="w-full h-full object-cover rounded-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImgHero;
