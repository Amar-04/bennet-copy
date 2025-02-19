"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const Innovation = () => {
  return (
    <section className="container px-4 md:px-8 pb-10">
      <div className="flex flex-col space-y-8 md:space-y-14">
        <motion.div
          className="p-2 md:p-8 flex flex-col md:flex-row items-center justify-between bg-[#AECA1D] rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bold text-lg md:text-xl md:w-1/2">
            At Bennet Pharmaceuticals, we are dedicated to delivering
            high-quality, innovative pharmaceutical solutions across various
            therapeutic areas.
          </h2>
          <p className="text-lg md:w-1/2">
            Our broad product portfolio meets the diverse needs of healthcare
            professionals and patients alike, ensuring accessibility and
            reliability in every product we offer.
          </p>
        </motion.div>
        
        <div className="flex items-center justify-between">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Innovation
          </motion.h2>
          <hr className="w-9/12 h-1 -mr-4 md:-mr-16 bg-black border-0" />
        </div>

        <div className="relative py-10">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/hero.png"
              alt="Worm background"
              width={500}
              height={500}
            />
          </div>

          <div className="relative space-y-6 text-lg md:text-2xl">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              We are proud to announce that Actoferrin (Lactoferrin 100mg
              tablets) has been granted a patent, powered by SALT technology for
              enhanced bioavailability, setting a new standard in healthcare
              solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              As a major breakthrough in wound healing, we have been awarded a
              patent for Silver nanoparticles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Further pushing the boundaries of science, we have a research
              collaboration with NIPER A, marking another milestone in our
              journey of innovation.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
