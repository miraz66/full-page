import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-5 px-4 bg-black">
      <div className="w-9/12 m-28 mx-auto grid max-md:gap-28 lg:grid-cols-3 md:items-center gap-10">
        <div className="text-white">
          <div className="">
            <h1 className=" w-full text-3xl font-bold text-[#00df9a]">
              REACT.
            </h1>
            <p className="py-4 pb-8 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quibusdam repellendus voluptatem quis facilis harum numquam libero
              beatae debitis nemo temporibus perferendis recusandae, possimus
              dolores obcaecati optio natus laboriosam maxime!
            </p>
            <div className="flex gap-3 ">
              <FaFacebookSquare
                size={30}
                className={
                  "hover:text-gray-400 cursor-pointer ease-in-out duration-200"
                }
              />
              <FaInstagram
                size={30}
                className={
                  "hover:text-gray-400 cursor-pointer ease-in-out duration-200"
                }
              />
              <FaTwitterSquare
                size={30}
                className={
                  "hover:text-gray-400 cursor-pointer ease-in-out duration-200"
                }
              />
              <FaGithubSquare
                size={30}
                className={
                  "hover:text-gray-400 cursor-pointer ease-in-out duration-200"
                }
              />
              <FaDribbbleSquare
                size={30}
                className={
                  "hover:text-gray-400 cursor-pointer ease-in-out duration-200"
                }
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between">
          <div className="text-white">
            <h6 className="font-medium text-gray-400">Solution</h6>
            <ul>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Analytics
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Marketing
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Commerce
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Insights
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Pricing
              </li>
              <li className="pmy2 text-sm cursor-pointer hover:border-b">
                Documentation
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Guides
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                API Status
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                About
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Blog
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Jobs
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Press
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Careers
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Claim
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Policy
              </li>
              <li className="my-2 text-sm cursor-pointer hover:border-b">
                Terms
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
