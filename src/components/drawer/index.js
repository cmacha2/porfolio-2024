// Drawer.js

import React from "react";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#0B1121] bg-opacity-50  z-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={onClose}
    >
      <div className="fixed bg-[#0B1121] h-full w-full top-0 left-0 ">
        <div className="p-4">
          <div className="flex justify-between">
            <img src="/logo.svg" alt="" />
            <img src="/Cross.svg" alt="" />
          </div>
          <div className="flex justify-center mt-[63px]">
            <ul>
              <li className="text-center">
                <a href="#home"> Home</a>
              </li>
              <li className="mt-[34px] text-center">
                <a href="#about">About</a>
              </li>
              <li className="mt-[34px] text-center">
                <a href="#services"> Services</a>
              </li>
              <li className="mt-[34px] text-center">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="mt-[34px] text-center">
                <a href="#contect"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
