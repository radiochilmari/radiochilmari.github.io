import React from "react";
import Image from "next/image";
import OurFacebookNewsData from "@/contexts/OurFacebookNewsData";
import readio_icon from "@/assets/icons/readio_icon.png";

const RadioChilmariFacebookPage = ({ pageHref }: { pageHref: string }) => {
  return (
    <div className="my-8 text-center h-screen">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-gray-100">
        আমাদের অফিসিয়াল ফেসবুক পেজ
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
        {/* Left: Description */}
        <div className="text-center lg:text-left">
          <Image
            src={readio_icon}
            alt="Radio Chilmari"
            width={80}
            height={80}
            className="mx-auto lg:mx-0 mb-4"
          />
          <h3 className="text-xl font-bold text-purple-700 dark:text-gray-100">
            {OurFacebookNewsData.title_1}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {OurFacebookNewsData.description}
          </p>
        </div>

        {/* Right: Facebook Embed */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
              pageHref
            )}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
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
