"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Life At Bennet", href: "/life-at-bennet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const logoAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const navItemDesktopAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.2 },
    }),
  };

  const navItemMobileAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.2 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 font-outfit transition-all duration-300 ${
        hasScrolled ? "bg-white/80 backdrop-blur-md " : "bg-white"
      }`}
    >
      <nav className="container px-4 py-4">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between"
        >
          {/* Logo Section */}
          <motion.div
            variants={logoAnimation}
            className="flex-shrink-0"
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/bennet.png"
                alt="Bennet Pharmaceuticals Ltd."
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemDesktopAnimation}
              >
                <Link
                  href={item.href}
                  className={`lg:text-[1rem] md:text-[0.6rem] font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#AECA1D]"
                      : "text-slate-700 hover:text-[#AECA1D]/80"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 hidden" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          className={`fixed top-0 right-0 z-50 h-full w-2/3 bg-[#2b3f56]/90 backdrop-blur-md text-white border-b transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          initial={{ opacity: 0 }}
          animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="mt-4 space-y-4 px-6"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={navItemMobileAnimation}
                >
                  <Link
                    href={item.href}
                    className={`block py-2 text-base font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-[#AECA1D]"
                        : "hover:text-gray-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </nav>
    </header>
  );
}
