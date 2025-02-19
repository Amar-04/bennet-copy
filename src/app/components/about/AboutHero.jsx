"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutHero = () => {
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

  return (
    <motion.section
      className="container relative flex items-center overflow-x-hidden mt-[96px]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full container px-4">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16">
          <motion.div
            className="w-full md:w-1/2 space-y-8"
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]"
              variants={leftItemVariants}
            >
              <div className="leading-tight">
                Your <span className="text-[#AECA1D]">Health</span>,
              </div>
              <div className="leading-tight">Our Priority!</div>
              <div className="leading-tight">Building Healthier</div>
              <div className="text-[#AECA1D] leading-tight">Communities</div>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700"
              variants={leftItemVariants}
            >
              Transforming Lives Since 1996.
            </motion.p>

            {/* <motion.div
              variants={leftItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="#"
                className="inline-flex items-center bg-black text-white rounded-full group"
              >
                <span className="px-6 py-3 font-bold">Know More</span>
                <div className="bg-[#AECA1D] rounded-full p-3 ml-1 group-hover:rotate-90 transition-transform duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              </Link>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[500px]"
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              <img
                src="/aboutHero.png"
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

export default AboutHero;
