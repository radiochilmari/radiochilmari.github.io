"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import readioIcon from "@/assets/icons/readio_icon.png";
import CurrentTimeInBangla from "./CurrentTimeInBangla";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scrolling and apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 w-full flex items-center justify-between h-16 px-4 bg-gray-200 text-white shadow-md z-50 ${
        scrolling ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={readioIcon}
            alt="Radio Icon"
            width={50}
            height={50}
            className="cursor-pointer rounded-full"
          />
        </Link>
      </div>

      <CurrentTimeInBangla />

      {/* Center: Navigation Links (Desktop View) */}
      <div className="hidden md:flex space-x-6 text-blue-500 font-bold font-bengali text-sm md:text-lg lg:text-xl">
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/about-us">আমাদের সম্পর্কে</Link>
        </motion.div>
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link href="/our-show">আমাদের অনুষ্ঠান সমূহ</Link>
        </motion.div>
        <motion.div
          className="hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Link href="/our-address">আমাদের ঠিকানা</Link>
        </motion.div>
      </div>

      {/* Right: Hamburger Menu (Mobile View) */}
      <div className="md:hidden flex items-center">
        <button
         className="text-blue-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
         
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-900 text-black dark:text-white shadow-md z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4 py-4  font-bold font-bengali text-lg text-blue-500">
            <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>
              আমাদের সম্পর্কে
            </Link>
            <Link href="/our-show" onClick={() => setIsMenuOpen(false)}>
              আমাদের অনুষ্ঠান সমূহ
            </Link>
            <Link href="/our-address" onClick={() => setIsMenuOpen(false)}>
            আমাদের ঠিকানা
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
