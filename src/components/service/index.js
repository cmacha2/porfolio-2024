import React from "react";

export default function Services() {
  const servicesArray = [
    {
      img: "/Frame.svg",
      title: "Web Development",
      des: "Your website is more than just a digital space—it's a reflection of your brand's identity and vision. Our web development ensures your site is compelling, functional, and designed for the modern user.",
    },
    {
      img: "/Frame123.svg",
      title: "App Development",
      des: "Bring your app concept to life with our expertise. We craft engaging, smooth-running applications poised for success in today’s competitive digital market.",
    },
    {
      img: "/Frame1234.svg",
      title: "Automations",
      des: "Effortlessly automate and streamline your web processes with our tailored Puppeteer solutions. Boost efficiency and accuracy for a smarter workflow.",
    },
  ];
  return (
    <div>
      <div id="services" className=" 2xl:max-w-[100%] xl:max-w-[405px] m-auto">
        <p className="sm:text-center text-[#8851F8] sm:text-[20px] text-[14px] sm:font-semibold font-medium">
          My Services
        </p>
        <p className="sm:text-center text-white sm:text-[40px] text-[24px] font-bold sm:mt-[12px] mt-[4px]">
          The services I provide
        </p>
        <p className="sm:text-center text-[#F3F3F5] sm:text-base text-[14px] sm:mt-[18px] mt-[12px]">
          Your Ideas Need Top-Tier Development with Quality Code and
          Cutting-Edge Innovation.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-[50px]">
        {servicesArray?.map((item) => (
          <div className="group sm:px-[24px] px-[20px] sm:py-[30px] py-[24px] border border-[#5E6066] hover:border-[#8851F8] rounded-[10px] bg-[#0F162B] cursor-pointer">
            <div className="w-[80px] h-[80px] bg-[#263054] group-hover:bg-[#8851F8] rounded-full flex justify-center items-center">
              <img src={item?.img} alt="" />
            </div>
            <p className="font-bold sm:text-[32px] text-[24px] sm:mt-6 mt-3 text-white">
              {item?.title}
            </p>
            <p className="text-[white] sm:text-base text-[14px]">{item?.des}</p>
            <div className="flex items-center sm:mt-[18px] mt-[15px]">
              <p className="font-medium sm:text-base text-[14px] text-white group-hover:text-[#A074F9]">
                Learn More - Contat Me
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white ml-2 group-hover:text-[#A074F9]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
