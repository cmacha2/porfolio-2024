import React from "react";

export default function Projects() {
  const projects = [
    {
      img: "/Rectangle 10097.png",
      title: "My Florida Lab",
      type: "Web Development",
    },
    {
      img: "/Rectangle 10098.png",
      title: "Milazzo Jewelry",
      type: "Web Development",
    },
    {
      img: "/Rectangle 10100.png",
      title: "Migrant Us",
      type: "App Development",
    },
    {
      img: "/Rectangle 10102.png",
      title: "Script Music",
      type: "Web and App Development",
    },
    {
      img: "/Rectangle 10099.png",
      title: "Travel World",
      type: "React-Web Application",
    },
    {
      img: "/Rectangle 10101.png",
      title: "Movie Web",
      type: "Web Development",
    },
  ];
  return (
    <div>
      <p className="sm:text-[20px] text-[14px] sm:font-semibold font-medium text-[#8851F8]">
        My Projects
      </p>
      <div className="flex justify-between items-center">
        <div className="max-w-[424px] w-[100%]">
          <p className="sm:text-[40px] text-[24px] font-bold text-white sm:leading-[52px] leading-[31px] sm:mt-3 mt-2">
            Here are some successful projects
          </p>
        </div>
        <div className="px-[30px] py-[16px] text-[#8851F8] cursor-pointer border border-[#8851F8] rounded-lg h-fit sm:block hidden">
          View More
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mt-[50px] mt-[40px] sm:gap-7 gap-4">
        {projects.map((item) => (
          <div className="">
            <div className="relative group">
              <img src={item?.img} alt="" className="w-[100%]" />
              <div className="hidden w-[82px] h-[82px] cursor-pointer rounded-full group-hover:flex justify-center items-center bg-[#8851F8] absolute top-[40%] left-[20%]">
                <img src="/images 1.svg" alt="" />
              </div>
              <div className=" w-[82px] h-[82px] rounded-full cursor-pointer hidden group-hover:flex justify-center items-center bg-[#8851F8] absolute top-[40%] right-[20%]">
                <p className="font-medium text-[20px]">View</p>
              </div>
            </div>
            <p className="text-[20px] font-bold mt-6 text-white">
              {item.title}
            </p>
            <div className="flex items-center mt-[12px]">
              <div className="h-[2px] w-[23px] bg-[#667085]"></div>
              <p className="text-[#9FA3B3] ml-2">{item?.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:px-[30px] px-[24px] sm:py-[16px] py-[12px] w-fit m-auto text-[#8851F8] cursor-pointer border border-[#8851F8] rounded-lg h-fit sm:hidden mt-10">
        View More
      </div>
    </div>
  );
}
