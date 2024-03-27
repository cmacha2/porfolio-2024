import React from "react";

export default function Hero() {
  return (
    <div className="xl:px-[123px] px-[20px] ">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="xl:mt-[129px] sm:mt-[40px] mt-[22px] relative z-20">
          <img
            src="/Vector1.svg"
            alt=""
            className="absolute bottom-[140px] right-[50px] z-10 lg:block hidden"
          />
          <p className="font-semibold text-[#8851F8]">Hello There,</p>
          <p className="xl:text-[64px] sm:text-[40px] text-[32px] font-bold xl:leading-[83px] sm:leading-[52px] leading-[41px] text-white mt-3">
            Transforming Your Digital Dreams Into Code Realities.
          </p>
          <p className="text-[#F3F3F5] max-w-[410px]">
            Innovative code development for growth, engagement, & legacy. Every
            code line benefits your business.
          </p>
          <div className="flex mt-[30px]" >
            <div className="sm:w-[194px] w-[116px] sm:h-[56px] h-[36px]  sm:text-base text-[9px] text-[#FCFCFD] rounded-[5px] bg-[#8851F8] flex justify-center items-center " onClick={()=>
                window.open('https://www.dropbox.com/scl/fi/nva5g02av7f6xhvcsz45t/Cristian-Machado-2024-CV-Developer.pdf?rlkey=yyy0l1n78om4lrzqnnrugk78j&dl=0')
              }>
              <img
                src="/Download.svg"
                alt=""
                className="sm:w-[20px] sm:g-[20px] w-[12px] h-[12px]"
              />
              <p className="ml-[10px]" >Download CV</p>
            </div>
            <div onClick={()=>{
              window.open('https://calendly.com/cmacha2/30min')
            }} className="ml-3 w-[77px] sm:h-[56px] h-[36px] md:hidden  border border-[white] sm:text-base text-[9px] rounded flex justify-center items-center">
              Hire Me
            </div>
          </div>
        </div>
        <div className="xl:mt-[70px] relative">
          <img src="/person1.png" alt="" />
          <div className="sm:px-[17px] px-[10px] sm:py-[18px] py-[10px] bg-white w-fit rounded-[8px] absolute sm:bottom-[34%] bottom-[100px] sm:left-0 right-10">
            <p className="text-[30px] text-[#8851F8] font-bold text-center">
              2+
            </p>
            <p className="text-[12px] text-[#263054]">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
