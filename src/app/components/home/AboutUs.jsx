"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lineVariant = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="container mx-auto mt-12 md:mt-20 px-4">
      {/* Header Section */}
      <motion.div
        className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.9 }}
      >
        <motion.h2
          className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          ABOUT US
        </motion.h2>
        <motion.div
          className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <hr className="border-t-2 border-[#AECA1D]" />
        </motion.div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
        {/* Left Column */}
        <div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Transforming{" "}
            <span className="text-[#2C3D5A] block mt-1 md:mt-2">
              Healthcare
            </span>{" "}
            <span className="block mt-1 md:mt-2">for a Brighter</span>{" "}
            <span className="block mt-1 md:mt-2">tomorrow</span>
          </motion.h1>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4 md:space-y-8 text-base md:text-lg lg:text-xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            We're passionate about empowering caregivers, ensuring that vital
            care reaches every corner of India, and making a lasting impact on
            the well-being of our people.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            From our manufacturing facilities to our extensive distribution
            network, we're committed to delivering excellence in
            pharmaceuticals.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            We believe in the transformative power of healthcare and are
            determined to create a brighter, healthier future for all.
          </motion.p>

          <motion.p
            className="font-semibold text-gray-900"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 1.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Join us on this journey as we strive to build a stronger, healthier
            India together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
