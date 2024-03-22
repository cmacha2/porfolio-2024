import React, { useState } from "react";
import Drawer from "../drawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="xl:px-[123px] px-[20px] md:py-[12px] flex justify-between items-center ">
        <img
          onClick={toggleDrawer}
          src="/menu (1).svg"
          alt=""
          className="md:hidden"
        />
        <div className="">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="w-[444px] md:flex hidden justify-between items-center text-[#CFD1D9]">
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#services">
            <p>Services</p>
          </a>
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>
          <a href="#contect">
            <p>Contact</p>
          </a>
        </div>
        <img src="/search-md.svg" alt="" className="md:hidden" />
        <div className="px-[30px] py-[12px] bg-[#8851F8] rounded-[6px] cursor-pointer text-[#FCFCFD] md:block hidden">
          Hire Me
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}
