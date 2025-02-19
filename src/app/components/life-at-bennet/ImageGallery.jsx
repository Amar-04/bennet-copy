"use client";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";

export default function ImageGallery() {
  const galleryItems = [
    {
      image: "/learning.png?height=400&width=600",
      title: "Continuous Learning",
      description:
        "We invest in your professional development through mentorship and training programs.",
    },
    {
      image: "/rewards.png?height=400&width=600",
      title: "Recognition and Rewards",
      description:
        "Your achievements are celebrated, and your contributions are valued.",
    },
    {
      image: "/work-life-balance.png?height=400&width=600",
      title: "Work-Life Balance",
      description:
        "We believe in a healthy work-life harmony that empowers you to excel.",
    },
    {
      image: "/growth.png?height=400&width=600",
      title: "Growth",
      description:
        "Your achievements are celebrated, and your contributions are valued.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GalleryCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
