import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl fontbold text-[#00df9a] cursor-pointer ">
          REACT.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum
          ratione quaerat eius ullam iusto, maiores vero? Voluptatibus, illo
          reiciendis!
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} className="cursor-pointer"/>
          <FaInstagram size={30} className="cursor-pointer"/>
          <FaTwitterSquare size={30} className="cursor-pointer"/>
          <FaDribbbleSquare size={30} className="cursor-pointer"/>
          <FaGithubSquare size={30} className="cursor-pointer"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 textsm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 textsm">Pricing</li>
            <li className="py-2 text-sm">Documention</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Comapany</h6>
          <ul>
            <li className="py-2 textsm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 textsm">Claim</li>
            <li className="py-2 text-sm">Policy </li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
