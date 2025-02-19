"use client";

import { motion } from "framer-motion";

const Priorities = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="w-full">
        {/* Header Section */}
        <div className="space-y-4 mb-12">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Your Health, Our <span className="text-[#2C3D5A]">Priority!</span>
            <br />
            Building <span className="text-[#2C3D5A]">Healthier</span>{" "}
            Communities.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Transforming Lives Since 1996.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="relative rounded-[2rem] overflow-hidden h-[400px]"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="/priorityImg.png"
              alt="Healthcare Priority"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="flex items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-800 leading-relaxed"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              At Bennet, we're more than just a healthcare company—we're a
              community of dedicated professionals committed to creating a
              healthier future for everyone.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;
