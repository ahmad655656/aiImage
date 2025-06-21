import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="pt-16 pb-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0 ">
        {/* 1st part */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold ">
            we develop & create digital future
          </p>
        </div>
        {/* 2st part */}
        <div>
          <h1 className="text-xl font-bold text-white">Address</h1>
          <p className="text-white opacity-60 mt-4">Syria</p>
          <p className="text-white opacity-60">Tartous El-Sheikhbadr</p>
        </div>
        {/* 3st part */}
        <div>
          <h1 className="text-xl font-bold text-white">Contact</h1>
          <p className="text-white opacity-60 mt-4">Email</p>
          <p className="text-white sm:text-xl text-lg font-bold opacity-60">info@gmail.com</p>
            <p className="text-white opacity-60 mt-4">Phone</p>
          <p className="text-white sm:text-xl text-lg font-bold opacity-60">+983796029</p>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-gray-300 mt-6 ">
       Webdev warrios © 2025. All Rights Reserved.

      </div>
    </div>
  );
};

export default Footer;
