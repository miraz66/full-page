import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="w-9/12 h-screen mt-[-120px] text-white flex flex-col m-auto justify-center items-center">
      <p className="text-[#00df9a] uppercase text-lg font-bold py-4">
        growing with data analytics
      </p>
      <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
        Grow with data
      </h1>
      <div className="flex gap-3 justify-center">
        <p className="md:text-3xl sm:text-2xl text-xl font-bold ">
          Fast, flesible financing for
        </p>
        <Typed
          className="md:text-3xl sm:text-3xl text-xl font-bold"
          strings={["BTB", "BTC", "SASS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="text-center md:text-xl sm:text-base text-gray-500 mt-2">
        Monitor your data analyticsto increase revenue for BTB,BTC, <br /> &
        SASS platforms.
      </p>
      <button className="bg-[#00df9a] px-12 py-3 rounded-lg mt-10 active:bg-[#03bb81]">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
