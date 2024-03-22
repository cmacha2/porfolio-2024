import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials({ sliderRef }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const discoverArray = [
    {
      image:'/wilma-pic.jpeg',
      name: "Wilma Alvarez",
      review: "Working with Cristian was a game-changer. His tailored web solutions and sharp marketing strategies significantly amplified my client engagement.",
      clientType: "Client",
    },
    {
      image: "/tato.png",
      name: "Gustavo Garcia",
      review: "Cristian elevated our e-commerce platform with bespoke customization, skillfully enhancing management, service, and showing great adaptability.",
      clientType: "Client",
    },
    {
      image: "/hablarconsentido.jpeg",
      name: "Ricardo Gutierrez",
      review: "Post-Cristian, My Florida Lab's e-commerce transformed—visually stunning, highly versatile, and adaptable. A real, impactful game-changer for us",
      clientType: "Client",
    },
    {
      image: "/hori.jpeg",
      name: "Horacio Rodriguez",
      review:"Cristian is incredibly versatile. Working alongside him brings a lot of confidence and solidity to the projects he is involved in.",
      clientType: "Colleague",
    },
    {
      image: "/enzo.jpeg",
      name: "Enzo Dos Santos",
      review: "Cristian always stood out for his great desire to move forward, he is a very admirable person and a good colleague, he was an essential piece in our team.",
      clientType: "Colleague",
    },
    {
      image: "/ivan.jpeg",
      name: "Ivan Reyes",
      review: "If there's one thing I applaud Cristian for, it's his perseverance in solving project problems. He has high empathy and teamwork skills. I'm sure his Front-End development ability will take him far.",
      clientType: "Colleague",
    },
    {
      image: "/facundo.jpeg",
      name: "Facundo Ortiz",
      review: "Cristian always aims beyond. His relentless desire to learn and surpass himself exemplifies perseverance. An excellent team player, I learned much from him.",
      clientType: "Colleague",
    },
    {
      image: "/jalu.jpeg",
      name: "Gabriel Jalil",
      review: "Cristian's dedication and learning capacity exceed all expectations. His hunger for knowledge and coding logic accelerate projects. Reliable and kind, he's highly recommended for teamwork."
      ,
      clientType: "Colleague",
    }
  ];
  return (
    <div className="w-[100%]">
      <Slider {...settings} ref={sliderRef} className="my-slider">
        {discoverArray.map((item, index) => (
          <div
            key={index}
            className="sm:max-w-[90%] max-w-[100%]  !m-auto border border-[#5E6066] px-[24px] py-[30px] rounded-[20px] bg-[#0F162B]"
            style={{
              backdropFilter: "blur(5px)",
              margin: "5px", // Adjust margin to add little space around the card
            }}
          >
            <div class="flex items-center w-[100px] m-auto">
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>

              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className=" mt-3 text-[#CFD1D9] text-center">
              {item.review}
            </p>
            <img  src={item.image} alt=""  className="w-12 h-12 rounded-full object-cover m-auto mt-6"/>
            <p className="text-center text-white text-[18px] font-semibold mt-3">
              {item.name}
            </p>
            <p className="text-center text-[#CFD1D9] text-[14px]  mt-2">
              {item.clientType}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
