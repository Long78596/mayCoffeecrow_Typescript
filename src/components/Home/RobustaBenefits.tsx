import { benefits } from "../../data/Home/data";

export const RobustaBenefits = () => {
    return (
        <section className="container mx-auto">
            <div className="text-[#0a7485] text-center px-4 py-8">
                <h2 className="lg:text-2xl  text-xl uppercase font-bold mb-8">
                    Elevate the familiar flavour with our premium Robusta beans
                </h2>
                <div className="flex flex-wrap gap-4 justify-center xl:justify-between">
                    {benefits.map((item, index: number) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border rounded-xl border-[#0a7485]/60 p-4 w-[160px] md:w-[250px] max-w-[200px]"
                        >
                            <img src={item.image} alt={item.title} className="h-10 w-auto" />
                            <p className="mt-4 uppercase font-bold">{item.title}</p>
                            <p className="mt-1 text-sm text-[#0a7485]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
