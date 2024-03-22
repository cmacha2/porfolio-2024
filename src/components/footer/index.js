import React from "react";

export default function Footer() {
  return (
    <div className=" text-[#FFFFFF]">
      <div className="md:flex justify-between xl:px-[123px] px-[20px]  m-auto">
        <div className="max-w-[283px] w-[100%] md:m-0 m-auto">
          <p className="sm:text-[50px] text-[24px] font-bold md:text-start text-center">
          <img src="/logo.svg" alt="" />
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-base text-[14px] md:text-start text-center ">
            Creating and producing work we are proud of for people we care about
            is what we do together.
          </p>
          <div className="flex items-center w-[156px] justify-between  pt-[30px] sm:m-0  m-auto">
            <div className="w-[30px] h-[30px] rounded-full bg-[#8851F8] flex justify-center items-center">
              <img src="/Mask group.svg" alt="" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#4754674D] flex justify-center items-center">
              <img src="/linkedin.svg" alt="" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#4754674D] flex justify-center items-center">
              <img src="/facebook.svg" alt="" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#4754674D] flex justify-center items-center">
              <img src="/twitter.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="sm:pt-[20px] pt-[40px] md:m-0 m-auto max-w-[108px] w-[100%]">
          <p className="text-[20px] font-semibold sm:text-start text-center">
            Navigation
          </p>
          <p className="mt-[40px] text-[#E7E8EC] sm:text-start text-center">
            <a href="#about">
            About Me
            </a>
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            <a href="#services">
            Service
            </a>
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            <a href="#portfolio">

            Portfolio
            </a>
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            <a href="#contect">
            Contact
            </a>
          </p>
        </div>
        <div className="pt-[20px] md:m-0 m-auto max-w-[149px] w-[100%]">
          <p className="text-[20px] font-semibold sm:text-start text-center">
            What We Do
          </p>
          <p className="mt-[40px] text-[#E7E8EC] sm:text-start text-center">
            Web Development
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            App Development
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            Automations
          </p>
        </div>
        <div className="pt-[20px] md:m-0 m-auto max-w-[225px] w-[100%]">
          <p className="text-[20px] font-semibold sm:text-start text-center">
            Contact
          </p>
          <p className="mt-[40px] text-[#E7E8EC] sm:text-start text-center">
            +1 786 681 9847
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            cmacha2.08@gmail.com
          </p>
          <p className="mt-[20px] text-[#E7E8EC] sm:text-start text-center">
            Hialeah, FL, 33010
          </p>
        </div>
      </div>
      <div className="h-[1px] border border-[#344054] mt-[80px] max-w-[1600px]"></div>
      <div className="xl:px-[123px] px-[20px] py-[40px] sm:flex justify-between items-center max-w-[1600px] m-auto">
        <div>
          <p className="text-[#FCFCFD] sm:text-start text-center">
            © 2024 copyright all right reserved
          </p>
        </div>
        <div>
          <p className="text-[#FCFCFD] sm:text-start text-center sm:mt-0 mt-6">
            Terms of Use | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
