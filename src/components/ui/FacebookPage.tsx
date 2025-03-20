"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import OurFacebookNewsData from "@/contexts/OurFacebookNewsData";
import readio_icon from "@/assets/icons/readio_icon.png";

const RadioChilmariFacebookPage = ({ pageHref }: { pageHref: string }) => {
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="my-8 text-center h-screen">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-gray-100">আমাদের অফিসিয়াল ফেসবুক পেজ</h2>
      <div className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        {/* Left: Description */}
        <div className="text-center lg:text-left">
          <Image src={readio_icon} alt="Radio Chilmari" width={80} height={80} className="mx-auto lg:mx-0 mb-4" />
          <h3 className="text-xl font-bold text-purple-700 dark:text-gray-100">
            {OurFacebookNewsData.title_1}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{OurFacebookNewsData.description}</p>
        </div>

        {/* Right: Facebook Embed */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fradiochilmari&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
          width="500"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RadioChilmariFacebookPage;
