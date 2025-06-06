import { Link } from "react-router-dom";
import { faqData } from "../../data/Home/data";

export const MapSection = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 text-[#28707b] md:py-4 lg:py-6 px-4 md:px-6 lg:px-0">
                <img
                    src="//maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=1000"
                    alt="Earth"
                    srcSet="//maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=352 352w, //maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=832 832w"
                    loading="lazy"
                />

                <div  className="lg:pl-8 text-xl">
                    {faqData.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex items-center pb-3">
                                <span className="text-3xl  m-2  font-bold mr-4">
                                    {index + 1}
                                </span>
                                <span className="font-bold cursor-pointer hover:brightness-125">
                                    {item.question}
                                </span>
                            </div>
                            <div className="hidden border-l font-semibold border-[#28707b] ml-2 pl-2 text-sm pb-4">
                                {item.answer}
                            </div>
                        </div>
                    ))}

                    {/* Button */}
                    <div className="flex justify-center mt-6">
                        <Link to="#">
                            <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase mb-6">
                                learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
