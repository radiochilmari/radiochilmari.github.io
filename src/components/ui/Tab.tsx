"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa"; // Icon for tabs
import { MdSchedule } from "react-icons/md"; // Icon for schedule items

interface TabContentProps {
  open: string;
  tabCategory: string;
  details: string;
  schedule?: string[];
}

const TabContent: React.FC<TabContentProps> = ({ open, tabCategory, details, schedule }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: open === tabCategory ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`p-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 ${
        open === tabCategory ? "block" : "hidden"
      }`}
    >
      <p className="mb-4">{details}</p>
      {schedule && (
        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {schedule.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <MdSchedule className="text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const Tab: React.FC = () => {
  const [open, setOpen] = useState<string>("monday");

  const handleTabOpen = (tabCategory: string) => {
    setOpen(tabCategory);
  };

  const daysData = [
    {
      label: "সোমবার",
      category: "monday",
      details: "সোমবার: এটি সপ্তাহের প্রথম দিন।",
      schedule: ["ভাওয়াইয়া সংগীত: ৩:১০ PM", "লাইভ ম্যাগাজিন: ৩:৩০ PM", "লালন সংগীত: ৪:০০ PM"],
    },
    {
      label: "মঙ্গলবার",
      category: "tuesday",
      details: "মঙ্গলবার: এটি সপ্তাহের দ্বিতীয় দিন।",
      schedule: ["নাটক: ৫:০০ PM", "উন্নয়ন সংবাদ: ৬:৩০ PM"],
    },
    {
      label: "বুধবার",
      category: "wednesday",
      details: "বুধবার: এটি সপ্তাহের মাঝের দিন।",
      schedule: ["আরশি নগর: ৪:০০ PM", "আনন্দ আড্ডা: ৬:১০ PM"],
    },
    {
      label: "বৃহস্পতিবার",
      category: "thursday",
      details: "বৃহস্পতিবার: এটি একটি উৎপাদনশীল দিন।",
      schedule: ["ভাওয়াইয়া সংগীত: ৩:১০ PM", "পাঁচ ফোঁড়ন: ৩:৩০ PM", "লালন সংগীত: ৪:০০ PM"],
    },
    {
      label: "শুক্রবার",
      category: "friday",
      details: "শুক্রবার: এটি সপ্তাহের শেষ কর্মদিবস।",
      schedule: ["সাংস্কৃতিক অনুষ্ঠান: ৫:০০ PM", "আলোচনা অনুষ্ঠান: ৬:০০ PM"],
    },
    {
      label: "শনিবার",
      category: "saturday",
      details: "শনিবার: এটি সপ্তাহান্তের প্রথম দিন।",
      schedule: ["শিশুদের অনুষ্ঠান: ৩:০০ PM", "লালন সংগীত: ৪:৩০ PM"],
    },
    {
      label: "রবিবার",
      category: "sunday",
      details: "রবিবার: এটি বিশ্রাম এবং প্রস্তুতির দিন।",
      schedule: ["উপন্যাস পাঠ: ৫:৩০ PM", "সাপ্তাহিক পর্যালোচনা: ৬:১৫ PM"],
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            সাপ্তাহিক সময়সূচী
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            আপনার প্রিয় অনুষ্ঠান দেখুন এবং সময়সূচী অনুযায়ী উপভোগ করুন।
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center justify-center rounded-lg bg-white dark:bg-gray-900 p-4 shadow-md">
              {daysData.map((day) => (
                <motion.button
                  key={day.category}
                  onClick={() => handleTabOpen(day.category)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 md:text-base lg:px-6 ${
                    open === day.category
                      ? "bg-primary text-white shadow-lg"
                      : "text-gray-700 hover:bg-primary hover:text-white dark:text-gray-300"
                  } rounded-md`}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaRegCalendarAlt />
                  {day.label}
                </motion.button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="mt-8">
              {daysData.map((day) => (
                <TabContent
                  key={day.category}
                  details={day.details}
                  tabCategory={day.category}
                  open={open}
                  schedule={day.schedule}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
