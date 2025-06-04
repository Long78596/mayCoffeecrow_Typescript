import { FaChevronDown } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { footerData } from "../../data/layouts/footerData";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <footer className="bg-white container mx-auto max-w-[1300px]  text-slate-800 px-4 md:px-6 py-12">
      <section className="">
        <div className="container mx-auto max-w-[1300px]  grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className=" lg:row-start-auto flex items-end justify-center lg:justify-end">
            <img
              loading="eager"
              className="w-[80%]"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/3mascot.webp?v=1699621517"
              alt=""
            />
          </div>
          <div className="rounded-xl bg-[#90e9f6] p-4 lg:p-8 flex flex-col justify-center space-y-2">
            <p className="text-4xl font-medium text-[#0a7485] some-class">
             
                JOIN THE CREW
            </p>
            <p className="lg:text-xl md:text-xl mt-2 text-[#0a7485]">
              Get exclusive offers straight to your inbox - be the first to
              know.
            </p>
            <input className="border border-[#0a7485] bg-white rounded-full lg:h-[40px] h-auto w-full px-4 py-1 placeholder:lg:text-xl"
              type="text"
              placeholder="Your name" />
            <div className="flex rounded-full border border-[#0a7485] bg-white pl-4">
              <input
                type="email"
                className="border-none border-[#0a7485]   outline-none w-full lg:h-[58px] h-auto bg-transparent placeholder:lg:text-xl"
                placeholder="Enter your Email"
                required
              />
              <button
                className="rounded-full px-6 py-2 bg-[#0a7485] text-white flex items-center justify-center"
                type="submit"
              >
                <FaArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          
        </div>

      </section>
      <section className="mt-10 ">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row">
          <div className="w-[300px]  mx-auto space-x-1.5 lg:mx-0 flex flex-col items-center">
            <img
              src="https://maycoffeecrew.co.nz/cdn/shop/files/logo.svg?v=1699640189&width=500"
              alt=" May coffer crew"
              className="w-[70%] mx-auto lg:w-full"
            />

            <div className="flex space-y-2 mt-5 items-center gap-5 justify-center">
              <Link
                to="#"
                className="flex justify-center items-center w-6 h-6 bg-[#065e6c] rounded-full"
              >
                <FaFacebookF className="text-white text-xl m-1 text-center" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-6 h-6 bg-[#065e6c] rounded-full"
              >
                <FaInstagram className="text-white text-xl m-1 text-center" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-6 h-6 bg-[#065e6c] rounded-full"
              >
                <FaTiktok className="text-white text-xl m-1 text-center" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-6 h-6 bg-[#065e6c] rounded-full"
              >
                <FaYoutube className="text-white text-xl m-1 text-center " />
              </Link>
            </div>
            <p className=" mt-2 text-center pt-1 text-xl text-[#065e6c]">
              © 2025 May Coffee Crew
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:gap-4 lg:gap-10 [text-[#065e6c] w-full px-10">
            {footerData.map((data, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b-[2px] md:border-b-0 border-[#044a54] py-2 md:py-0 w-full"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between md:cursor-default"
                  >
                    <span className="text-[#065e6c] text-xl font-bold text-left">
                      {data.title}
                    </span>

                    <span
                      className={`md:hidden  ${isOpen ? "rotate-180" : ""}`}
                    >
                      <FaChevronDown className="text-[#065e6c] text-xs" />
                    </span>
                  </button>

                  <ul
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                      } md:max-h-none md:mt-4 list-disc pl-5`}
                  >
                    {data.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.to}
                          className="text-[#065e6c] text-xl block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </footer>
  )
}