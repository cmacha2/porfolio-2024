import React from "react";

export default function About() {
  const skills = [
    {
      img: "/html_5.svg",
      title: "HTML",
    },
    {
      img: "/react.svg",
      title: "React",
    },
    {
      img: "/nodejs.svg",
      title: "NodeJS",
    },
    {
      img: "/postgresql.svg",
      title: "PSQL",
    },
    {
      img: "/aws.svg",
      title: "AWS",
    },
  ];
  return (
    <div id="about">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative lg:block hidden">
          <img src="/Rectangle 10089.png" alt="" className="" />
          <div className="sm:px-[17px] px-[10px] sm:py-[18px] py-[10px] bg-white w-fit rounded-[8px] absolute sm:bottom-[20%] bottom-[100px] 2xl:right-[100px]  right-12">
            <p className="text-[30px] text-[#8851F8] font-bold text-center">
              10+
            </p>
            <p className="text-[12px] text-[#263054]">Notable Projects</p>
          </div>
        </div>

        <div>
          <div className="2xl:max-w-[100%] lg:max-w-[466px] w-[100%]">
            <p className="sm:text-[20px] text-[14px] sm:font-semibold font-medium text-[#8851F8] lg:text-start text-center">
              About Me
            </p>
            <p className="sm:text-[40px] text-[24px] font-bold text-white sm:leading-[52px] leading-[31px] mt-3 sm:text-start text-center">
            Turning Visions into Virtuality
            </p>
            <p className="text-[#F3F3F5] mt-[18px] sm:text-base text-[14px] sm:text-start text-center">
            With a blend of innovation and precision, I craft web solutions that bring your ideas to life. In every project, I infuse my dedication to creating digital experiences that resonate and engage.{" "}
            </p>
          </div>

          <p className="text-[white] font-medium mt-6">My Skill</p>
          <div className="w-[100%] border-b border-[#6E758D] mt-[20px]">
            <div className="w-[117px] border-[#8851F8] border-b border-[1px]"></div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4 mt-[18px] text-white">
            {skills.map((item) => (
              <div className="sm:py-[24px] py-[16px] px-[12px] bg-[#0F162B] border rounded-[20px] border-[#5E6066]">
                <div className="flex items-center ">
                  <div>
                    <div className="w-[54px] h-[54px] rounded-full flex justify-center items-center bg-[#8851F826]">
                      <img src={item?.img} alt="" />
                    </div>
                  </div>
                  <p className="sm:font-bold font-semibold sm:text-[24px] text-[20px] ml-2">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:hidden m-auto">
          <img src="/Rectangle 10089.png" alt="" className="" />
          <div className="sm:px-[17px] px-[10px] sm:py-[18px] py-[10px] bg-white w-fit rounded-[8px] absolute  bottom-[60px] left-5 ">
            <p className="text-[30px] text-[#8851F8] font-bold text-center">
              10+
            </p>
            <p className="text-[12px] text-[#263054]">Notable Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
