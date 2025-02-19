"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Ethical",
      desc: "We offer tailored solutions through our three core divisions: Ethical, Critical Care, and the Emiror Division, bringing specialized and innovative care to those who need it most.",
    },
    {
      id: 2,
      title: "Critical Care",
      desc: "We collaborate with over 500 passionate sales personnel and a network of 1,000+ distributors, ensuring consistent access to care across the country with a presence in 15+ states.",
    },
    {
      id: 3,
      title: "Emiror Division",
      desc: "With over 100,000 retail outlets nationwide, we bring superior healthcare solutions within easy reach for everyone. We believe in the transformative power of healthcare.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="flex flex-col space-y-12 md:text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Our Commitment to the Nation
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl max-w-4xl mx-auto"
          variants={itemVariants}
        >
          We provide high-quality healthcare solutions, at prices that are
          accessible to all. <br />
          Our team upholds the highest standards of ethical practices, with
          certifications and strict adherence to regulatory standards, ensuring
          your well-being in every interaction.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-black text-white rounded-2xl px-6 md:px-12 py-8 md:py-10 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {card.title}
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center gap-4 pt-8"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="#"
              className="bg-[#83961D] text-white text-xl font-medium px-8 py-2 rounded-full transition-all duration-300 hover:bg-[#96ac22] hover:shadow-lg"
            >
              Know More
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              x: 10,
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white text-2xl transition-all duration-300 hover:bg-gray-900 hover:shadow-lg"
            >
              <motion.span
                className="text-xs"
                whileHover={{
                  x: 3,
                  transition: {
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cards;
