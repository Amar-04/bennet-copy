"use client";
import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import { motion } from "framer-motion";
export default function CareersPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection
          imageLink="/career-img-1.png"
          title='<span>Empowering</span>
                  <br />
                  <span>People, Shaping</span>
                  <br />
                  <span className="text-[#9DC41A]">Healthcare&apos;s</span>
                  <br />
                  <span>Future</span>'
          description="Empowering Growth, Celebrating Success"
          showKnowMoreButton={false}
        />

        {/* Career Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="container w-[100%] mx-auto px-4 py-6 flex justify-center align-middle bg-black text-white lg:rounded-2xl">
            <div className="w-[100%] flex flex-col lg:flex-row justify-center items-centerlg:gap-5 ">
              <h2 className="text-4xl text-center align-middle text-[#9DC41A] lg:text-6xl font-bold mb-4 lg:w-1/3">
                Careers
              </h2>
              <p className="text-white text-lg lg:text-2xl lg:w-2/3 ">
                At Bennet, we recognize that our greatest asset is our people.
                Their dedication, passion, and expertise drive our success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <section className="py-12 bg-white">
          <div className="container w-[100%] mx-auto px-4">
            <div className="my-12">
              <motion.h2
                className="text-2xl lg:text-5xl font-bold mb-6 flex flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  "Together,",
                  "we",
                  "are",
                  "shaping",
                  "a",
                  "stronger",
                  "and",
                  "brighter",
                  "future",
                  "in",
                  "healthcare.",
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    className="mr-2"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="container flex flex-col justify-center items-center mx-auto px-4">
            <motion.div
              className="relative h-[400px] lg:h-[500px] w-full"
              variants={fadeInUp}
            >
              <Image
                src="/career-img-2.png"
                alt="Team Meeting"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              className="relative bottom-[5vh] p-5 w-[85vw] md:w-[85vw] lg:w-[75vw] xl:w-[80vw] 2xl:w-[55vw] bg-[#D7E48E] mx-auto text-center rounded-3xl space-y-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl lg:text-2xl font-bold">
                To apply, send your resume to
              </h3>
              <motion.div className="space-y-2" variants={fadeInUp}>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:jobs.bennet@gmail.com"
                    className="hover:text-[#9DC41A]"
                  >
                    jobs.bennet@gmail.com
                  </a>
                </p>
                <p>Or connect with us via WhatsApp</p>
                <p className="font-medium">+919825519537</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
