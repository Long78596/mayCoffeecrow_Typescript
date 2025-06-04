


import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";


type ProductImage = {
    id: number;
    url: string;
};

const images: ProductImage[] = [
    { id: 1, url: "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100" },
    { id: 2, url: "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100" },
    { id: 3, url: "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100" },
    { id: 4, url: "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100" },
    { id: 5, url: "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100" },
];

export const Productdetails = () => {

    return (
        <>
            <section className="mt-10">
                <div className="max-w-screen-xl container  mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#0a7485]">
                        <div className="div">
                            <div className="bg-white rounded shadow p-4">
                                <img
                                    src="https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=700"
                                    alt="Buffalo Robusta"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="mt-4">
                                <Swiper

                                    navigation

                                    breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}

                                    className="w-full">
                                    {images.map((img, idx: number) => (

                                        <SwiperSlide key={idx}>
                                            <div className="rounded overflow-hidden w-full h-64">
                                                <img
                                                    src={img.url}
                                                    alt={`Image ${idx}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 text-xl">
                            <div className="text-yellow-500 text-xs lg:text-xl">
                                <i className="fa-solid fa-star px-2"></i>
                                <i className="fa-solid fa-star px-2"></i>
                                <i className="fa-solid fa-star px-2"></i>
                                <i className="fa-solid fa-star px-2"></i>
                                <i className="fa-solid fa-star px-2"></i>
                            </div>
                            <h1 className="text-2xl font-bold text-[#0a7485]">
                                <strong>BUFFALO (ROBUSTA)</strong>
                            </h1>
                            <span className="inline-block justify-center bg-yellow-200 text-xs font-medium px-2 py-1 rounded mt-2 mb-4 text-[#0a7485]">
                                Traditional Vietnamese Coffee MUST TRY
                            </span>
                            <p className="text-sm mb-4 text-[#0a7485]">
                                100% pure robusta, Buffalo is a bold, powerful yet smooth, clean
                                coffee that effortlessly complements milk. Giving you that double
                                shot of caffeine without breaking the bank.
                            </p>
                            <div className="mt-2 underline text-xl cursor-pointer font-medium">
                                Read more
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 text-sm text-[#0a7485]">
                                <div className="div">
                                    <div className="flex text-xs py-2 ">
                                        <div className="flex items-center space-x-2 min-w-[7rem]">
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <img loading="eager"
                                                    className="h-4"
                                                    width=""
                                                    height=""
                                                    src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Bean_type.svg"
                                                    alt="" />
                                            </div>
                                            <span className="font-medium">
                                                Variety
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 min-w-[7rem]">
                                           <span>:</span>
                                            <span className="font-medium">
                                                Robusta
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex text-xs py-2 ">
                                        <div className="flex items-center space-x-2 min-w-[7rem]">
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <img
                                                    loading="eager"
                                                    className="h-4"
                                                    width=""
                                                    height=""
                                                    src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Region.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <span className="font-medium">Region</span>
                                        </div>
                                        <div className="flex items-center space-x-2 min-w-[7rem]">
                                            <span>: </span>
                                            <span className="truncate">Gia Lai</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="div">
                                    <div className="flex text-xs py-1">
                                        <div className="flex items-center space-x-2 w-[7rem] md:w-24">
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <img
                                                    loading="eager"
                                                    className="h-4"
                                                    width=""
                                                    height=""
                                                    src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Bean_type.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <span className="font-medium">Strength</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span>: </span>
                                            <div className="flex space-x-1">
                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex text-xs py-1">
                                        <div className="flex items-center space-x-2 w-[7rem] md:w-24">
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <img
                                                    loading="eager"
                                                    className="h-4"
                                                    width=""
                                                    height=""
                                                    src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Roast.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <span className="font-medium">Roast</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span>: </span>
                                            <div className="flex space-x-1">
                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                                                <div className="h-3 w-3 rounded-full bg-orange-300"></div>

                                                <div className="h-3 w-3 rounded-full  bg-orange-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}