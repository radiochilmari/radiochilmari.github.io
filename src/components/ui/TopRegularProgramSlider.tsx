"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { imageK } from "@/contexts/TopRegularProgramSliderData";

interface ImageItem {
  id: number;
  image: StaticImageData;
}

const TopRegularProgramSlider: React.FC = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [currentSlide, setCurrentSlide] = useState(1);
  const progressCircle = useRef<SVGCircleElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setBgColor(currentSlide === 1 ? "bg-white" : "bg-gray-100");
  }, [currentSlide]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress) as never
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className={`relative ${bgColor} py-8 px-4 mt-10`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-5xl font-bold text-purple-500">
          নিয়মিত প্রোগ্রাম সমূহ
        </h1>
        <hr className="my-4 border-t-2 border-gray-300" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {imageK.map((imageItem: ImageItem) => (
          <SwiperSlide key={imageItem.id}>
            <div className="flex justify-center">
              <Image
                src={imageItem.image}
                alt={`Image ${imageItem.id}`}
                className="w-full max-w-screen-lg object-cover rounded-md shadow-lg"
                placeholder="blur" // Optional for Next.js images
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Autoplay Progress */}
        <div className="autoplay-progress absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center z-10">
          <svg className="w-full h-full" viewBox="0 0 48 48">
            <circle
              ref={progressCircle}
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-gray-300"
              style={{
                strokeDasharray: "125.6",
                strokeDashoffset: `calc(125.6px * (1 - var(--progress, 0)))`,
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>
          <span ref={progressContent} className="text-sm font-semibold"></span>
        </div>
      </Swiper>

     
    </div>
  );
};

export default TopRegularProgramSlider;
