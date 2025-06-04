import {Link} from "react-router-dom";

export const HeroSection = () => {
    return <>

      <div className="container mx-auto max-w-[1300px] px-4 md:px-6 lg:px-0">
       <div className="bg-[#fee7d8] rounded-lg flex flex-col-reverse lg:flex-row lg:px-10  px-6 py-6 gap-4 lg:gap-10">
          <div className="flex flex-col justify-center gap-2 lg:w-[495px] ">
            <p className="font-bold  lg:text-2xl text-xl pb-2 text-[#0a7485]">
              🔥 STRONG. BOLD. SMOOTH. 🔥
            </p>
            <p className="lg:text-6xl text-5xl some-class text-[#0a7485] pb-4 ">
              Supercharged with Natural Caffeine Iced Coffee
            </p>


            <p className=" lg:text-xl text-[#0a7485] pb-4">
              Powered by premium Vietnamese Robusta beans, this is a triple shot that's smooth, rich, and crafted to fuel your hustle.


            </p>
            <p className=" lg:text-xl text-[#0a7485] pb-4">

              Why settle for three when one does it all? Save money, boost your energy, and crush your day with natural, clean caffeine.
            </p>


            <div className="pb-2 ">
              <Link to="#">
                <button className="rounded-full text-[15px]  text-white bg-[#0a7485] px-6 md:px-10 lg:px-12 py-2 font-medium uppercase hover:brightness-125 cursor-pointer">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>


           <div className="w-full flex flex-1  justify-center items-center">
            <img loading="eager" className="w-full lg:h-[90%] lg:w-[80%]" src="https://maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1746788103&width=1000" alt="Iced Coffee" />
           </div>
       </div>
    </div>


    </>
}