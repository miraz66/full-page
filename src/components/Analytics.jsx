import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="w-9/12 mx-auto grid max-sm:gap-10 md:grid-cols-2  items-center">
        <img src={Laptop} alt="/" srcset="" />
        <div className="text-center max-lg:text-left">
          <h1 className="uppercase text-[#00df9a] font-bold md:text-lg sm:text-md md:pb-7 sm:pb-6">
            data analytics dashboard
          </h1>
          <h2 className="text-black md:text-3xl sm:text-xl font-bold mb-4">
            Manage Data Analytics Centrally
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            optio ipsam magni similique officia facere molestiae labore
            temporibus, doloremque facilis dolores et culpa explicabo voluptates
            necessitatibus itaque recusandae error laudantium.
          </p>
          <button className="bg-[#000] text-[#00df9a] px-12 py-3 rounded-lg mt-10 active:bg-[#5a5e5d]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
