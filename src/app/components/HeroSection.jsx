"use client";

import Image from "next/image";
import { MoveDown } from "lucide-react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

export default function HeroSection({
  imageLink,
  title,
  description,
  showKnowMoreButton,
}) {
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

  const pathname = usePathname();
  const routeKey = pathname || "";

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={routeKey}
        className="relative flex items-center overflow-x-hidden mt-[96px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        viewport={{ once: true }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left-side content */}
            <motion.div
              className="w-full md:w-1/2 space-y-6"
              variants={leftContentVariants}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1]"
                variants={leftItemVariants}
              >
                {parse(title)}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-700"
                variants={leftItemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {description}
              </motion.p>

              {showKnowMoreButton && (
                <motion.button
                  className="inline-flex items-center bg-black text-white rounded-full group"
                  variants={leftItemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="px-6 py-3 font-bold">Know More</span>
                  <div className="bg-[#AECA1D] rounded-full p-3 ml-1 group-hover:rotate-90 transition-transform duration-300">
                    <MoveDown className="w-6 h-6" />
                  </div>
                </motion.button>
              )}
            </motion.div>

            {/* Right-side image */}
            <motion.div
              className="w-full md:w-1/2 h-[400px] md:h-[500px]"
              variants={rightImageVariants}
            >
              <div className="relative h-full rounded-[2rem] overflow-hidden">
                <Image
                  src={imageLink}
                  alt="Hero image"
                  fill
                  priority
                  className="object-cover rounded-[2rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
