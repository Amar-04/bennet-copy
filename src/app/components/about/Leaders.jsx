"use client";

import { motion } from "framer-motion";

const Leaders = () => {
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

  const cardData = [
    {
      id: 1,
      name: "Mr. J. K. Jain",
      position: "Founder & Promoter Director",
      desc: "A visionary leader who established Bennet's foundation in the pharmaceutical industry. His innovative approach continues to guide the company's growth and success.",
      img: "/leader1.png",
    },
    {
      id: 2,
      name: "Mr. Siddharth Jain",
      position: "Technical Director",
      desc: "A versatile expert overseeing supply chain, regulatory affairs, and quality control. His comprehensive management ensures smooth operations across all technical aspects of the business.",
      img: "/leader2.png",
    },
    {
      id: 3,
      name: "Mrs. Vrushti Jain",
      position: "Creative Director",
      desc: "An innovative thinker spearheading new product development and marketing initiatives. Her creative vision drives Bennet's expansion into cutting-edge pharmaceutical solutions.",
      img: "/leader3.png",
    },
    {
      id: 4,
      name: "Mrs. Vaishali Jain",
      position: "Director",
      desc: "A financial strategist managing Bennet's financial and legal affairs. Her expertise is crucial in steering the company's growth within the domestic pharmaceutical market.",
      img: "/leader4.png",
    },
  ];

  return (
    <section className="relative container mx-auto mt-20 px-4">
      {/* Background Elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 w-[600px] h-[600px] opacity-10">
          <img
            src="/hero.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] opacity-10">
          <img
            src="/hero.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Header with line */}
      <div className="flex items-center gap-8 mb-12">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-outline uppercase whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          LEADERSHIP
        </motion.h2>
        <motion.div
          className="h-[2px] bg-[#AECA1D] flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={lineVariant}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      {/* Subheading */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Innovation Meets Compassion
          <br />
          Exceeding Expectations with Our{" "}
          <span className="text-[#AECA1D]">"Exceptional Teams"</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative h-[350px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 m-4 p-6 bg-white/90 backdrop-blur-sm rounded-xl transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-xl font-bold mb-2">{card.name}</h3>
              <p className="font-bold text-[#AECA1D] mb-3">{card.position}</p>
              <p className="text-gray-700">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Leaders;
