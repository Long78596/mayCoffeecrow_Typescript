// components/News.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { newsSlides } from "../../data/Home/data";

export const News = () => {
    return (
        <section className="container mx-auto mt-10 lg:mt-20 px-4 md:px-6 lg:px-0">
            <p className="text-[#28707b] text-4xl font-bold uppercase text-center hover:underline">
                READ OUR LATEST NEWS
            </p>

            <div className="mt-6 lg:mt-10 m-2">
                <Swiper
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
                    {newsSlides.map((slide, index:number) => (
                        <SwiperSlide key={index}>
                            <div className="min-w-[335px] flex flex-col items-center">
                                <img src={slide.img} alt={`News ${index + 1}`} />
                                <p className="text-xl text-[#28707b] text-center mt-4">
                                    {slide.date}
                                </p>
                                <p className="text-2xl font-bold text-[#28707b] text-center">
                                    {slide.text}
                                </p>

                                <div className="mt-6">
                                    <Link to="#">
                                        <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-2xl hover:brightness-125">
                                            READ MORE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
