import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/service";
import About from "./components/about";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import FAQ from "./components/faq";
import Testimonials from "./components/testimonial";
import { useRef } from "react";

function App() {
  const contactUs = [
    {
      img: "/phone.svg",
      title: "Call",
      des: "+1 234 567 8900",
    },
    {
      img: "/message.svg",
      title: "Email",
      des: "info@yourmail.com",
    },
    {
      img: "/location.svg",
      title: "Location",
      des: "Hialeah, FL 33010 USA",
    },
  ];
  const sliderRef = useRef(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div>
      <div className="max-w-[1600px] w-[100%] bg-no-repeat m-auto main-bg bg-cover">
        <div id="home" className="  ">
          <Header />

          <Hero />

          <div className="xl:px-[123px] px-[20px] 2xl:mt-[200px] xl:mt-[140px] md:mt-[100px] mt-[20px] ">
            <Services />
          </div>

          <div className="xl:px-[123px] px-[20px] 2xl:pt-[300px] xl:pt-[200px] sm:pt-[120px] pt-[80px]">
            <About />
          </div>
        </div>
        <div
          className="bg-no-repeat bg-cover sm:py-[56px] py-[12px] xl:px-[123px] px-[20px] 2xl:mt-[180px] xl:mt-[130px] sm:mt-[80px] mt-[18px] max-w-[1600px]"
          style={{ backgroundImage: "url(/BAckground.png)" }}
        >
          <div className="flex justify-between items-center max-w-[1340px] m-auto">
            <div>
              <p className="sm:text-[48px] text-[20px] font-bold text-white text-center">
                10+
              </p>
              <p className="text-white sm:text-[18px] text-[8px] font-medium">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="sm:text-[48px] text-[20px]  font-bold text-white text-center">
                03
              </p>
              <p className="text-white sm:text-[18px] text-[8px] font-medium">
                Total Degrees
              </p>
            </div>
            <div>
              <p className="sm:text-[48px] text-[20px]  font-bold text-white text-center">
                4+
              </p>
              <p className="text-white sm:text-[18px] text-[8px] font-medium">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="sm:text-[48px] text-[20px]  font-bold text-white text-center">
                20+
              </p>
              <p className="text-white sm:text-[18px] text-[8px] font-medium">
                Projects Done!
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px]">
          <div
            id="portfolio"
            className=" xl:px-[123px] px-[20px] 2xl:mt-[165px] xl:mt-[100px] mt-[60px]"
          >
            <Projects />
          </div>

          <div className="sm:mt-[70px] mt-[60px]">
            <div
              className="bg-no-repeat 2xl:py-[200px]  sm:py-[160px] py-[60px] bg-cover max-w-[1600px]"
              style={{ backgroundImage: "url(/bg123.png)" }}
            >
              <p className="text-[20px] font-semibold text-[#8851F8] text-center">
                Client Reviews
              </p>
              <p className="sm:text-[40px] text-[24px] font-bold text-center sm:leading-[52px] leading-[31px]">
                Customer Testimonials
              </p>
              <div className="xl:px-[123px] px-[20px] xl:pl-[123px] sm:pl-[80px] pl-[20px] mt-[50px] relative">
                <Testimonials sliderRef={sliderRef} />
                <div
                  onClick={handlePrev}
                  className="bg-[#8851F8] py-[10px] rounded w-fit absolute top-[50%] xl:left-[80px] left-2 cursor-pointer"
                >
                  <img src="/angle-left.svg" alt="" />
                </div>
                <div
                  onClick={handleNext}
                  className="bg-[#8851F8] py-[10px] rounded w-fit absolute top-[50%] xl:right-[120px] right-2 cursor-pointer"
                >
                  <img src="/angle-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="xl:px-[123px] px-[20px]">
            <p className="sm:text-[48px] text-[24px] font-bold text-white text-center 2xl:mt-[200px] sm:mt-[120px] mt-[80px]">
              Have any projects in Mind?
            </p>
            <div className="sm:flex justify-between mt-[50px]">
              {contactUs.map((item) => (
                <div className="sm:mt-0 mt-[40px]">
                  <img src={item?.img} alt="" className="m-auto" />
                  <p className="sm:text-[40px] text-[24px] font-bold text-white sm:leading-[52px] leading-[31px] text-center">
                    {item?.title}
                  </p>
                  <p className="text-[20px]  text-[#9FA3B3] sm:text-start text-center">
                    {item?.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            id="contect"
            className="xl:px-[123px] px-[20px] sm:mt-[80px] mt-[0px]"
          >
            <ContactForm />
          </div>

          <div className="sm:mt-[100px] mt-[80px] xl:px-[123px] px-[20px]">
            <FAQ />
          </div>

          <div className="xl:px-[123px] px-[20px] 2xl:mt-[120px] sm:mt-[120px] mt-[80px] relative ">
            <div>
              <img
                src="/Booknow.png"
                alt=""
                className="sm:h-[210px] h-[210px] w-full sm:block hidden"
              />
              <img
                src="/Booknow1.png"
                alt=""
                className="sm:h-[210px] h-[210px] sm:hidden w-full"
              />
            </div>
            <div className="absolute left-0 right-0 sm:top-2 top-[-20px]  sm:h-[210px] h-[210px] lg:px-[180px] px-[40px] w-[100%] sm:py-0 py-[60px] bg-cover">
              <div className="sm:flex  items-center justify-between w-[100%] h-[100%]">
                <div>
                  <p className="sm:text-[40px] text-[32px] font-bold sm:text-start text-center text-white sm:leading-[52px] leading-[30px]">
                    Interested in working with us?
                  </p>
                  <p className="text-[24px] font-medium text-white mt-[14px] sm:block hidden">
                    Book a free call
                  </p>
                </div>
                <div className="cursor-pointer bg-[#8851F8] w-fit sm:m-0 m-auto sm:px-[31px] px-[20px] sm:py-[22px] py-[18px] sm:mt-0 mt-6 font-medium rounded-lg flex justify-center items-center  text-white ">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-[0px] mt-[80px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
