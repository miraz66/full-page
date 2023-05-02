import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 bg-black">
      <div className="w-9/12 mx-auto grid max-sm:gap-10 md:grid-cols-2 items-center">
        <div className="text-white">
          <h1 className="text-2xl max-md:text-lg font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-sm">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="mx-auto">
          <input
            className="px-5 py-3 mr-6 w-[450px] rounded-md"
            type="email"
            placeholder="Enter your email."
            value=""
          />
          <button className="bg-[#00df9a] font-bold px-10 py-3 rounded-lg mt-10 active:bg-[#03bb81]">
            Notify me.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
