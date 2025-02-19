"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ProductHero = () => {
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
      className="container relative mt-20 mb-10 md:py-20"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="container w-[90vw] mx-auto grid md:grid-cols-2 gap-4">
        <motion.div className="space-y-4" variants={leftContentVariants}>
          <motion.h1
            className="text-2xl md:text-7xl font-semibold"
            variants={leftItemVariants}
          >
            <span className="text-[#AECA1D]">Empowering </span>Health Journeys &
            Nurturing Health Through{" "}
            <span className="text-[#AECA1D]">Innovation</span>
          </motion.h1>
          <motion.p
            className="md:text-2xl my-4 md:my-8"
            variants={leftItemVariants}
          >
            Transforming lives since 1996
          </motion.p>
          <div>
            <Link
              href="#"
              className="bg-black pl-4 py-3 text-white text-sm md:text-base rounded-full font-bold"
            >
              Know More{" "}
              <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:h-[500px] md:w-[500px] md:-mt-20"
          variants={rightImageVariants}
        >
          <img src="/productHero.png" alt="pills" className="w-full h-full" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductHero;
