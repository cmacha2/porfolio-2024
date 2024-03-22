import React from "react";

export default function ContactForm() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover sm:px-[30px] 2xl:py-[140px] sm:py-[80px] contactForm">
        <div className="grid grid-cols-12 gap-6">
          <div className="md:col-span-4 sm:col-span-6 col-span-12 mt-[60px]">
            <p className="text-[#8851F8] text-[18px] font-medium">
              Get In Touch
            </p>
            <p className="sm:text-[40px] text-[24px] font-bold sm:leading-[52px] leading-[31px] text-white">
              Let’s Talk About <br className="sm:hidden " /> Projects
            </p>
            <p className="sm:text-[18px] text-[14px] text-[#E7E8EC] mt-[18px]">
              Have any project in mind? Partnering or working together? Contact
              me using the form and I'll respond within 48 hours.
            </p>
          </div>
          <div className="md:col-span-8 sm:col-span-6 col-span-12">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="">
                <input
                  className="border border-[#CFD1D9] text-white bg-transparent rounded-lg w-full h-[56px] indent-4"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="">
                <input
                  className="border border-[#CFD1D9] bg-transparent rounded-lg w-full h-[56px] indent-4"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="">
                <input
                  className="border border-[#CFD1D9] bg-transparent rounded-lg w-full h-[56px] indent-4"
                  type="text"
                  placeholder="youmail@domain.com"
                />
              </div>
              <div className="">
                <input
                  className="border border-[#CFD1D9] bg-transparent rounded-lg w-full h-[56px] indent-4"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="">
                <textarea
                  className="border border-[#CFD1D9] text-white bg-transparent rounded-lg w-full  indent-4 py-3 h-[160px]"
                  type="text"
                  placeholder="Your message here..."
                />
              </div>
            </div>
            <div className="cursor-pointer bg-[#8851F8] h-[56px] rounded-lg flex justify-center items-center font-semibold text-white mt-6">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
