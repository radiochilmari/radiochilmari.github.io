"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/bn"; // Import Bangla locale
import { motion } from "framer-motion"; // Import framer-motion
import { FaMusic, FaClock, FaCalendarDay } from "react-icons/fa"; // Import icons
import { createPopper } from "@popperjs/core";

moment.locale("bn"); // Set moment to Bangla locale

// Function to convert English numbers to Bangla
const toBanglaNumber = (number: string): string => {
  const englishToBanglaMap: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return number.replace(/[0-9]/g, (digit) => englishToBanglaMap[digit]);
};

const HoursCard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      // Format current time in 12-hour format with AM/PM and adjust to Bangladesh timezone
      setCurrentTime(
        toBanglaNumber(
          moment().utcOffset("+06:00").format("dddd, LL, h:mm:ss A")
        )
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  const hours = [
    {
      day: "সোমবার",
      time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM"),
      schedule: [
        "ভাওয়াইয়া সংগীত: ৩:১০ PM",
        "লাইভ ম্যাগাজিন: ৩:৩০ PM",
        "লালন সংগীত: ৪:০০ PM",
      ],
    },
    {
      day: "মঙ্গলবার",
      time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM"),
      schedule: [
        "নাটক: ৫:০০ PM",
        "উন্নয়ন সংবাদ: ৬:৩০ PM",
      ],
    },
    {
      day: "বুধবার",
      time: toBanglaNumber("২:৪৫ PM - ৮:০৫ PM"),
      schedule: ["আরশি নগর: ৪:০০ PM", "আনন্দ আড্ডা: ৬:১০ PM"],
    },
    // Add similar data for other days
  ];

  const dayColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
  ];

  return (
    <div className="container m-auto">
      <div className="bg-gray-100">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          অনুষ্ঠানের সময়সূচি
        </h2>
        <div className="text-center text-gray-500 mb-4">
          <p>বর্তমান সময়:</p>
          <p className="text-lg font-medium text-gray-800">{currentTime}</p>
        </div>
        <ul className="divide-y divide-gray-200">
          {hours.map((hour, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredDay(index)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              <div
                className={`flex justify-between items-center p-4 text-gray-700 ${dayColors[index]} hover:bg-gray-200 rounded-lg w-full`}
              >
                <span className="font-medium flex items-center gap-2">
                  <FaCalendarDay className="text-blue-500" /> {hour.day}
                </span>
                <span className="font-medium flex items-center gap-2">
                  <FaClock className="text-green-500" /> {hour.time}
                </span>
              </div>

              {hoveredDay === index && (
                <div
                  role="tooltip"
                  className="absolute z-10 w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 top-full mt-2"
                >
                  <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {hour.day} - বিস্তারিত সূচি
                    </h3>
                  </div>
                  <div className="px-3 py-2">
                    <ul className="list-disc list-inside text-gray-600">
                      {hour.schedule.map((event, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaMusic className="text-purple-500" /> {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div data-popper-arrow></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoursCard;