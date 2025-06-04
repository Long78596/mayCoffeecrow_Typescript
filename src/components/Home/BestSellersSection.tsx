import { Link } from "react-router-dom";
import { products } from "../../data/Home/data";
import type { ProductItem } from "../../types/Home/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

export const BetsSellersSection = () => {
    return (
        <section className="container mx-auto max-w-[1300px] py-10 lg:py-20 text-[#0a7485] md:py-4  px-4 md:px-6 lg:px-0">
            <div className="flex justify-between  flex-col md:flex-row gap-5 ">
                <span className="lg:text-4xl md:text-3xl text-2xl uppercase  some-class">
                    MEET OUR BESTSELLERS
                </span>
                <div className="flex items-center  space-x-1">
                    <Link to="/collections" className="text-xl font-medium whitespace-nowrap ">
                        Shop ALL
                    </Link>
                    <i className="fa-solid fa-arrow-right w-4"></i>
                </div>
            </div>

            {/* 1. Desktop */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {products.map((item: ProductItem, idx: number) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-rows justify-between relative p-4 rounded bg-white"
                    >
                        <div
                            className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-white  py-1 px-2 uppercase rounded ${item.tag ? "bg-orange-500" : ""
                                }`}
                        >
                            {item.tag || "bg-transparent"}
                        </div>


                        <Link to={item.link}>
                            <div className="bg-neutral-50 flex justify-center py-2 rounded  ">
                                <div
                                    className="h-40 w-full bg-center bg-contain bg-no-repeat"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                ></div>
                            </div>
                        </Link>

                        <div className="flex flex-col items-center text-center h-full mt-3">
                            <Link to={item.link}>
                                <span className="font-bold md:text-xl lg:text-xl text-xs">{item.name}</span>
                            </Link>
                            <p className="text-neutral-500  md:text-xl lg:text-xl text-xs uppercase mt-3 flex-grow">{item.description}</p>
                            <p className="mt-2  md:text-xl lg:text-xl text-xs flex-grow">{item.details}</p>
                            <Link to={item.link} className="mt-4">
                                <button className="bg-[#0a7485] text-white rounded-full px-6 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                                    Shop now
                                </button>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>

            {/* {. Mobile:} */}
            <div className="block md:hidden mt-8">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    navigation
                    loop
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        500: { slidesPerView: 1.5 },
                        770: { slidesPerView: 2 },
                    }}
                >
                    {products.map((item: ProductItem, idx: number) => (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col md:flex-rows justify-between relative p-4 rounded bg-white">
                                <div
                                    className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-white  text-sm py-1 px-2 uppercase rounded ${item.tag ? "bg-orange-500" : ""
                                        }`}
                                >
                                    {item.tag || "bg-transparent"}
                                </div>

                                <Link to={item.link}>
                                    <div className="bg-neutral-50 flex justify-center py-2 rounded ">
                                        <div
                                            className="h-40 w-full bg-center bg-contain bg-no-repeat"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        ></div>
                                    </div>
                                </Link>

                                <div className="flex flex-col items-center text-center py-4 mt-6">
                                    <Link to={item.link} className="mt-6">
                                        <span className="font-bold ">{item.name}</span>
                                    </Link>
                                    <p className="text-neutral-500 lg:text-xl text-xs uppercase">{item.description}</p>
                                    <p className="mt-2">{item.details}</p>
                                    <Link to={item.link} className="mt-4">
                                        <button className="bg-[#0a7485] text-white rounded-full px-6 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                                            Shop now
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
