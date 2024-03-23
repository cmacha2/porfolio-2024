import React from "react";

export default function Projects() {
  const projects = [
    {
      img: "/Rectangle 10097.png",
      title: "My Florida Lab",
      type: "Web Development",
      link: "https://myfloridalab.com/",
      github: ''
    },
    {
      img: "/Rectangle 10098.png",
      title: "Milazzo Jewelry",
      type: "Web Development",
      link: "https://milazzojewelry.com/",
      github: ''
    },
    {
      img: "/Rectangle 10100.png",
      title: "Migrant Us",
      type: "App Development",
      link: "https://play.google.com/store/apps/details?id=com.cmacha2.migrantUS&hl=en_US",
      github: 'https://github.com/cmacha2/Migrant-US'
    },
    {
      img: "/Rectangle 10102.png",
      title: "Script Music",
      type: "Web and App Development",
      link: "https://www.youtube.com/watch?v=Og1z6ShsgMQ",
      github: 'https://github.com/JaluGJ/ScriptMusic'
    },
    {
      img: "/Rectangle 10099.png",
      title: "Travel World",
      type: "React-Web Application",
      link: "https://travel-world-app.vercel.app/",
      github: 'https://github.com/cmacha2/client-countries-deploy'
    },
    {
      img: "/Rectangle 10101.png",
      title: "Movie Web",
      type: "Web Development",
      link: "https://movie-api-pearl.vercel.app/",
      github: 'https://github.com/cmacha2/movie-api'
    },
  ];
  return (
    <div>
      <p className="sm:text-[20px] text-[14px] sm:font-semibold font-medium text-[#8851F8]">
        My Projects
      </p>
      <div className="flex justify-between items-center">
        {/* ... */}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mt-[50px] mt-[40px] sm:gap-7 gap-4">
        {projects.map((item) => (
          <div className="group relative">
            <img src={item?.img} alt={item?.title} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out"></div>
            <div className="hidden absolute inset-0 flex justify-around items-center group-hover:flex">
              <a href={item.github} className="flex justify-center items-center w-[82px] h-[82px] rounded-full bg-[#8851F8]">
                <img src="/images 1.svg" alt="GitHub" />
              </a>
              <a href={item.link} className="flex justify-center items-center w-[82px] h-[82px] rounded-full bg-[#8851F8] text-white font-medium text-[20px]">
                View
              </a>
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