"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import { motion } from "framer-motion";

export default function Manufacturing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection
        imageLink="/manufacturing.png"
        title='Empowering lives and <span className="text-[#9DC41A]">affordability</span>'
        description="Where excellence meets accessibility"
        showKnowMoreButton={true}
      />
      {/* Excellence Section */}
      <section className="container mx-auto px-4 relative">
        <motion.div
          className="border border-[#2C3D5A] bg-[#D9D9D980] p-6 md:p-8 lg:p-16 rounded-3xl shadow-sm mx-auto relative z-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="text-black">
            {/* Title */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Where excellence meets accessibility
            </motion.h2>

            <motion.div
              className="text-center md:px-36"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.3,
              }}
            >
              <motion.p>
                <motion.span>
                  At Bennet Pharmaceuticals, we believe in delivering
                  high-quality healthcare solutions through advanced
                  manufacturing practices.
                </motion.span>
                <br />
                <br />
                <motion.span>
                  Our facilities are designed to meet the highest standards of
                  excellence, ensuring precision, safety, and innovation in
                  every product.
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Background */}
        <motion.div
          className="absolute inset-0 excellence-bg z-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
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
          ) : (
            //Smaller screen sizes
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
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
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Global Standards Compliance",
                description:
                  "Our Baddi facility adheres to the highest global manufacturing standards.",
              },
              {
                title: "Uncompromising Quality Control",
                description:
                  "We maintain a rigorous quality control process throughout manufacturing.",
              },
              {
                title: "Advanced Technology",
                description:
                  "Utilizing cutting-edge technology for precise manufacturing.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/90 text-white p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <h3 className="text-xl lg:text-3xl font-semibold mb-3 text-[#B5CE32]">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Network */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[60%] lg:w-[55%] 2xl:w-[45%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>
              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[45%] 2xl:w-[55%] mt-2"
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
          ) : (
            // For smaller screens
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[60%] lg:w-[55%] 2xl:w-[45%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>
              <div className="w-full md:w-[40%] lg:w-[45%] 2xl:w-[55%] mt-2">
                <hr className="border-t-2 border-[#AECA1D]" />
              </div>
            </motion.div>
          )}
          <motion.h3
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:leading-[4.5rem] xl:leading-[5.714rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
          >
            {[
              "Experience the",
              " BENNET",
              " difference in",
              " every",
              " product.",
            ].map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 * index,
                }}
                className={text === " BENNET" ? "text-[#b4d335]" : ""}
              >
                {text}
              </motion.span>
            ))}
          </motion.h3>

          {/* Image */}
          <motion.div
            className="relative w-full h-[200px] md:h-[400px] bg-gradient-to-br from-[#AECA1D]/10 to-[#2C3D5A]/10 shadow-sm flex justify-center items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/manufacturing-network.png"
              alt="manufacturing network"
              layout="fill"
              objectFit="contain"
              className="align-middle"
            />
          </motion.div>
        </div>
      </section>

      {/* Contract Manufacturing */}
      <motion.section
        className="py-16 contract-manufacturing-bg"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amout: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Contract <span className="text-[#2C3D5A]">Manufacturing</span>
          </motion.h2>
          <div>
            <motion.p
              className="text-[#525354] text-lg lg:text-2xl mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amout: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At Bennet Quality Assurance and Quality Control are given
              paramount importance, quality assurance system harmonise and
              simply cGMP process to ensure sustainable quality.
            </motion.p>
            <br />
            <br />
            <motion.p
              className="lg:text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              At Bennet Pharmaceuticals, we specialize in contract manufacturing
              of finished formulations, including tablets, capsules, liquid
              orals, soft gels, and bi-layered and sustained-release
              preparations.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <br />
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              All of our products are manufactured at a facility that adheres to
              WHO-GMP compliance, ensuring that we meet the highest
              international standards across all therapeutic segments.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <br />
            <br />

            <motion.p
              className="lg:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              This commitment to quality enables us to consistently deliver
              excellence in healthcare solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        className="mx-auto mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container bg-[#D7E48E] mx-auto px-2 md:px-4 py-6 rounded-2xl">
          <div className="flex flex-col  md:gap-12 md:flex-row items-center md:justify-between">
            <div className="md:w-2/5 xl:w-[42%] w-full text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-2">
                To know more about us Contact at
              </h3>
            </div>
            <div className="md:w-3/5 xl:w-[58%] w-full text-center md:text-left text-lg lg:text-2xl">
              <p>Email: cm@bennetpharmaceuticals.com</p>
              <p>Call: (+91) 8650107111</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Exports Section */}
      <section className="my-12">
        <motion.div
          className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8">
              Exports
            </h1>
            <motion.p
              className="text-[#1E1E1E] text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              Our commitment to global healthcare extends beyond borders. Bennet
              Pharmaceuticals exports top-tier pharmaceutical products to Asia,
              Africa, and Latin America, contributing to global health
              advancements and ensuring accessibility worldwide.
            </motion.p>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="relative h-[300px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/export-map.png"
              alt="World map showing export locations"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        <div className="container mx-auto">
          <motion.div
            className="bg-black text-white text-center py-6 px-4 lg:p-12 lg:px-32 lg:rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <p className="mb-4 text-xl md:text-4xl md:pb-6 font-semibold">
              We are open to{" "}
              <span className="text-[#9FB81D]">collaborative</span> association
              for all kinds of product inquiries.
            </p>
            <div className="text-sm md:text-xl">
              <p>Email: Export@bennetpharmaceuticals.com</p>
              <p>Call: (+91)9625102437</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
