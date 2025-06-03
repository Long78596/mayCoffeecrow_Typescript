import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import { banner } from "../../data/Shared/Banner.data";

export const Banner =()=>{
  return (
    <section className="w-full bg-[#caf3ff]">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <p className="text-2xl font-bold uppercase text-[#0a7485]">
          SHOP BY CATEGORY
        </p>
        <div className="mt-6 lg:mt-10 m-2 justify-center  items-center lg:py-10 py-6 ">
          <Swiper className="w-full max-w-screen-xl mx-auto"
            modules={[Navigation]}
            spaceBetween={40}
            navigation
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              770: { slidesPerView: 2 },
              1256: { slidesPerView: 3 },
            }}
                  >
                    {banner.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-between items-center ">
                          <Link to="#" className="flex flex-col space-y-4">
                            <div className="bg-white w-full justify-center py-4 rounded-xl overflow-hidden">
                              <img
                                loading="eager"
                                className="h-40 px-4 "
                                src={slide.img}
                                alt=""
                              />
                            </div>
                            <div className=" flex lg:flex-row items-center justify-between lg:mb-4">
                              <div className="div">
                                <p className="text-[#0a7485] font-bold text-center  ">
                                  <strong> {slide.text}</strong>
                                </p>
                              </div>
        
                              <div className="flex items-center space-x-2">
                                <span className=" font-bold text-body uppercase text-[#0a7485]">
                                  SHOP NOW
                                </span>
                                <div className="w-4">
                                  <i className="fa-solid fa-arrow-right text-[#0a7485]"></i>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

      </div>

    </section>
  )
}