"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const ProductCards = () => {
  const productCards = [
    { name: "ACIO INSTA", dosage: "20 mg" },
    { name: "ACIO", dosage: "20 mg" },
    { name: "ACIO P DSR", dosage: "20 mg" },
    { name: "ACYNET", dosage: "20 mg" },
    { name: "AMOLIN CV", dosage: "20 mg" },
    { name: "AZIDEP", dosage: "20 mg" },
    { name: "ACIO INSTA", dosage: "20 mg" },
    { name: "ACIO", dosage: "20 mg" },
    { name: "ACIO P DSR", dosage: "20 mg" },
    { name: "ACYNET", dosage: "20 mg" },
    { name: "AMOLIN CV", dosage: "20 mg" },
    { name: "AZIDEP", dosage: "20 mg" },
  ];

  const containerRefs = useRef([]);

  const scrollRight = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollbarHideStyle = {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const sections = [
    "General Practitioner/Physician",
    "Gynecologist",
    "Paediatrician",
  ];

  return (
    <section className="container mt-16 px-4 md:px-8">
      <div className="flex items-center">
        <motion.h2
          className="text-3xl md:text-6xl font-bold text-transparent bg-white text-stroke-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          OUR PRODUCTS
        </motion.h2>
        <hr className="w-9/12 h-1 -mr-4 md:-mr-16 bg-[#AECA1D] border-0" />
      </div>
      <div className="flex flex-col space-y-4 my-10">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-[#ECECECB2] rounded-xl flex flex-col space-y-4 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-bold">{section}</p>
              <button
                onClick={() => scrollRight(sectionIndex)}
                className="bg-[#AECA1DE5] rounded-full px-3 py-2"
              >
                →
              </button>
            </div>
            <div
              ref={(el) => (containerRefs.current[sectionIndex] = el)}
              style={{ ...scrollbarHideStyle }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex gap-4 w-full">
                {productCards.slice(0, 6).map((card, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[250px] bg-[#AECA1DE5] px-8 py-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.15 }}
                  >
                    <p className="font-bold">
                      {card.name}{" "}
                      <span className="text-[#929FAE]">{card.dosage}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4 w-full">
                {productCards.slice(6).map((card, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[250px] bg-[#AECA1DE5] px-8 py-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.15 }}
                  >
                    <p className="font-bold">
                      {card.name}{" "}
                      <span className="text-[#929FAE]">{card.dosage}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-4">
        <Link
          href={"#"}
          className="bg-black pl-4 py-3 text-white text-sm md:text-base rounded-full font-bold"
        >
          Know More{" "}
          <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
        </Link>
      </div>
    </section>
  );
};

export default ProductCards;
