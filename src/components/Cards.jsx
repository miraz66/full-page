import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-5 px-4 bg-white">
      <div className="w-9/12 m-28 mx-auto grid max-md:gap-28 md:grid-cols-3 md: items-center gap-10">
        <div className="flex flex-col items-center shadow-xl hover:shadow-black hover:shadow-xl ease-in-out duration-300 rounded-lg">
          <img className="w-20 mt-[-2.5rem] bg-white" src={single} alt="" />
          <div className="text-center">
            <h1 className="m-6 font-bold">Single User</h1>
            <p className=" text-2xl font-bold">$149</p>
          </div>
          <ul className="w-full px-8 py-4 text-center">
            <li className="p-2 border-t-2 font-medium">500 GB Storage</li>
            <li className="p-2 border-t-2 font-medium">1 User Allowed</li>
            <li className="p-2 border-t-2 border-b-2 font-medium">
              Send up to 2GB
            </li>
          </ul>
          <button className="bg-[#00df9a] font-bold px-11 py-2 rounded-lg mb-10 mt-5 active:bg-[#03bb81]">
            Start Trial.
          </button>
        </div>

        <div className="flex flex-col items-center shadow-xl rounded-lg hover:shadow-black hover:shadow-xl ease-in-out duration-300">
          <img
            className="w-20 mt-[-2.5rem] bg-opacity-10 "
            src={double}
            alt=""
          />

          <div className="text-center">
            <h1 className="m-6 font-bold">Single User</h1>
            <p className=" text-2xl font-bold">$149</p>
          </div>
          <ul className="w-full px-8 py-4 text-center">
            <li className="p-2 border-t-2 font-medium">500 GB Storage</li>
            <li className="p-2 border-t-2 font-medium">1 User Allowed</li>
            <li className="p-2 border-t-2 border-b-2 font-medium">
              Send up to 2GB
            </li>
          </ul>
          <button className="bg-black text-[#00df9a] font-bold px-11 py-2 rounded-lg mb-10 mt-5 active:bg-[#03bb81]">
            Start Trial.
          </button>
        </div>

        <div className="flex flex-col items-center shadow-xl rounded-lg hover:shadow-black hover:shadow-xl ease-in-out duration-300">
          <img className="w-20 mt-[-3rem] bg-white " src={triple} alt="" />

          <div className="text-center">
            <h1 className="m-6 font-bold">Single User</h1>
            <p className=" text-2xl font-bold">$149</p>
          </div>
          <ul className="w-full px-8 py-4 text-center">
            <li className="p-2 border-t-2 font-medium">500 GB Storage</li>
            <li className="p-2 border-t-2 font-medium">1 User Allowed</li>
            <li className="p-2 border-t-2 border-b-2 font-medium">
              Send up to 2GB
            </li>
          </ul>
          <button className="bg-[#00df9a] font-bold px-11 py-2 rounded-lg mb-10 mt-3 active:bg-[#03bb81]">
            Start Trial.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
