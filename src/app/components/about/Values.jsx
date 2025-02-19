"use client";

import { motion } from "framer-motion";

const Values = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every aspect of our work, ensuring transparency and honesty.",
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking, driving continuous improvement in our pharmaceutical solutions to meet evolving healthcare challenges.",
    },
    {
      title: "Collaboration",
      description:
        "Teamwork and partnership are at the heart of our operations, as we work together with healthcare professionals and communities to achieve shared goals.",
    },
    {
      title: "Excellence",
      description:
        "Our commitment to excellence drives us to deliver high-quality products and services that consistently exceed expectations, setting new standards in the industry.",
    },
    {
      title: "Empowerment",
      description:
        "We believe in empowering individuals—both our employees and our customers—by providing the tools and resources necessary for better health and well-being.",
    },
  ];

  return (
    
    <section className="container px-4 md:px-8 mt-20 bg-[#DFEAA580]">
      <div className="flex flex-col space-y-8">
        <motion.div
          className="md:w-9/12 mx-auto bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-xl md:rounded-3xl -mt-10 md:-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">
            We're more than just a
            <span className="text-[#AECA1DE5]"> healthcare</span> company
          </h2>
          <p className="md:text-lg md:w-1/2">
            We’re a community of dedicated professionals committed to creating a
            healthier future for everyone.
          </p>
        </motion.div>

        <div className="flex items-center justify-between">
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Core <br /> Values
          </motion.h1>
          <hr className="w-1/2 h-1 -mr-4 md:-mr-8 bg-black border-0" />
        </div>

        <motion.p
          className="md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Bennet, our core values guide our mission and shape our culture,
          ensuring we deliver exceptional healthcare solutions.
        </motion.p>
      </div>

      <div className="relative py-16">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="md:h-[600px] md:w-[600px] mr-80  rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[600px] md:w-[600px] ml-80 rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[600px] md:w-[600px] rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[500px] md:w-[500px] rounded-full border border-gray-300 absolute"></div>
        </div>

        <div className="relative flex flex-col items-center">
          <motion.div
            className="grid md:grid-cols-2 gap-4 md:gap-36 w-full md:max-w-4xl z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {coreValues.slice(0, 4).map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl md:text-3xl font-semibold text-[#AECA1D] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="md:absolute w-[300px] md:w-[500px] md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white shadow-lg rounded-lg p-6 mt-4 md:mt-0 md:p-8 z-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-[#AECA1D] mb-4">
              Empowerment
            </h3>
            <p className="text-gray-600">
              We believe in empowering individuals—both our employees and our
              customers—by providing the tools and resources necessary for
              better health and well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
