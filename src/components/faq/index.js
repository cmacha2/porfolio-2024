import React, { useState } from "react";
import { FaqsData } from "../../data";

export default function FAQ() {
  const [active, setActive] = useState({
    open: false,
    indexOpen: "",
  });
  const toggleActive = (index) => {
    if (index === active.indexOpen) {
      setActive({ open: false, indexOpen: "" });
    } else {
      setActive({ open: true, indexOpen: index });
    }
  };
  return (
    <div>
      <div className="max-w-[316px] w-[100%] m-auto">
        <p className="text-[20px] font-semibold text-[#8851F8] text-center">
          FAQs
        </p>
        <p className="sm:text-[40px] text-[24px] font-bold text-center sm:leading-[52px] leading-[31px]">
          Do You Have Any Questions?
        </p>
      </div>
      <div>
        <div className="max-w-[780px] w-[100%] m-auto border-t border-[#6E758D] mt-[50px]">
          {FaqsData.map((item, index) => (
            <div
              key={index}
              className=" cursor-pointer  sm:py-[20px] py-[10px] border-b border-[#6E758D]    "
            >
              <div
                onClick={() => toggleActive(index)}
                className="flex  justify-between items-center"
              >
                <p
                  className={`  ${
                    active.open && active.indexOpen === index
                      ? "text-[#A074F9]"
                      : "text-white"
                  }  sm:text-[20px] text-[16px] font-[600]`}
                >
                  {item.question}
                </p>
                {active.open && active.indexOpen === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`  ${
                      active.open && active.indexOpen === index
                        ? "text-[#A074F9]"
                        : "text-white"
                    }  w-5 h-5`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
              {active.open && active.indexOpen === index ? (
                <div className="flex mt-2">
                  <p className="  sm:text-[16px] text-[14px]   text-[#E7E8EC] font-[400]">
                    {item.ans}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
