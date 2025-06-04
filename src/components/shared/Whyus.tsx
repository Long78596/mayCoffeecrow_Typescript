// WhyUs.tsx
import { Link } from "react-router-dom";
import { whyUsData } from "../../data/Home/data";
import type { WhyUsItem } from "../../types/Home/types";


export const WhyUs = () => {
    return (
        <section className="container mt-10 mx-auto max-w-[1300px] rounded-xl md:py-4 lg:py-6 px-4 md:px-6 lg:px-0">
            <div className="bg-[#fff0f0] mt-10 m-2 ">
                <p className="  text-center text-3xl md:text-4xl font-bold lg:py-10 md:py-5 text-[#28707b] uppercase mt-10">
                    <strong>WHY US</strong>
                </p>
                <div className="px-6 py-6 lg:mt-6 flex flex-wrap justify-evenly lg:justify-between">
                    {whyUsData.map((item: WhyUsItem, index: number) => (
                        <div
                            key={index}
                            className="flex lg:flex-col items-center justify-center gap-4 w-full lg:w-[200px] mt-3"
                        >
                            <img
                                loading="eager"
                                className="h-auto w-16 lg:w-auto lg:h-20 mx-auto"
                                src={item.img}
                                alt=""
                            />
                            <div className="flex-1 w-full">
                                <p className="text-[#28707b] font-medium lg:text-center w-full">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 mb-6">
                    <Link to="#">
                        <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase mb-6">
                            Our story
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
