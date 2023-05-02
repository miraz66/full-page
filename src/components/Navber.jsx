import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navber = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" h-24  w-9/12 max-md:w-11/12  mx-auto flex justify-between items-center text-white">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      <ul className="flex max-md:hidden">
        <li className="m-4 after:content-[' '] after:bg-white after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer ">
          Home
        </li>
        <li className="m-4 after:content-[' '] after:bg-white after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer">
          Company
        </li>
        <li className="m-4 after:content-[' '] after:bg-white after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer">
          Resources
        </li>
        <li className="m-4 after:content-[' '] after:bg-white after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer">
          About
        </li>
        <li className="m-4 after:content-[' '] after:bg-white after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer">
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className=" select-none block md:hidden">
        {!nav ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} />}
      </div>

      <div
        className={
          nav
            ? "h-full fixed left-0 top-0 w-5/12 bg-[#000300] border-r border-r-gray-200 ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full p-5 pt-7 text-3xl font-bold text-[#00df9a]">
          REACT.
        </h1>

        <ul className="uppercase">
          <li className="p-5 border-b border-gray-600 hover:bg-gray-800 ">
            Home
          </li>
          <li className="p-5 border-b border-gray-600 hover:bg-gray-800 ">
            Company
          </li>
          <li className="p-5 border-b border-gray-600 hover:bg-gray-800 ">
            Resources
          </li>
          <li className="p-5 border-b border-gray-600 hover:bg-gray-800 ">
            About
          </li>
          <li className="p-5 hover:bg-gray-800 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
