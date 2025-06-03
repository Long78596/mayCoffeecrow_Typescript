
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";



import { Link } from "react-router-dom";
import { phinSlides } from "../../data/Shared/Slider.data";

export const VietnamesePhinSection= () => {
    return (
        <section>
            <div className="container mx-auto mt-10 lg:mt-20 px-4 md:px-6 lg:px-0">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 max-w-[913px] mx-auto">
                    <img
                        className="w-[90px] lg:w-[128px]"
                        src="//maycoffeecrew.co.nz/cdn/shop/files/Group_552.svg?v=1699454706&width=150"
                        alt="Phin Filter Icon"
                    />
                    <div className="flex flex-col justify-between text-center lg:text-left">
                        <p className="text-2xl lg:text-xl font-bold uppercase text-[#0a7485]">
                            LEARN A NEW BREWING METHOD, EXPERIMENT WITH THE VIETNAMESE PHIN FILTER
                        </p>
                        <p className="text-[#0a7485] text-xl mt-4 lg:mt-0">
                            Nourish your soul amidst the hustle with a mindful, slow-drip coffee.
                            Embrace this refreshing coffee experience in a bustling world!
                        </p>
                    </div>
                </div>
                {/* Swiper */}
                <div className="mt-6 lg:mt-10">
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
                        {phinSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-w-[335px]">
                                    <img src={slide.img} alt={`Slide ${index + 1}`} />
                                    <p className="text-[#0a7485] text-center mt-4 lg:mt-10">
                                        {slide.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex justify-center mt-6">
                    <Link to="#">
                        <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm hover:brightness-125">
                            Get your phin filter
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
