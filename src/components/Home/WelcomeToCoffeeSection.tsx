import { cards } from "../../data/Home/data";
import {Link} from "react-router-dom"
export const WelcomeToCoffeeSection=()=>{
 return (
    <section>
     <div className="container mx-auto max-w-[1300px] px-4 md:px-6 lg:px-0  mt-10">
       <h1 className="text-2xl md:text-5xl text-center  text-[#0a7485] some-class ">
          PREMIUM
          <br className="md:hidden" /> VIETNAMESE COFFEE
        </h1>

        <div className="rounded bg-[#90e9f6] mt-6 flex flex-col xl:flex-row lg:gap-4   ">
          {/* Left Section */}
          <div className="flex flex-col  items-center text-right    justify-end xl:space-y-4 xl:max-w-[25rem] pt-6 xl:pt-0 ">
           <div className="uppercase text-2xl md:text-5xl lg:text-6xl some-class text-right flex items-center justify-center xl:items-end xl:flex-col gap-y-2">
            
           

             <span className="scale-105 some-class  text-[#0a7485]">Welcome to <span className="xl:hidden">&nbsp;</span></span>
             <span className="racking-wider some-class  text-[#90e9f6] stroke-text  uppercase ">the crew</span>
            
             
            
            </div>
           <p className="font-bold lg:items-center lg:justify-center text-[#0a7485] mt-2 lg:text-2xl   ">
             SO GOOD, WE HAD TO SHARE
           </p>
           <img
             loading="eager"
             src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
             alt=""
             className="hidden xl:block w-full "
           />
          
            
          </div>


         {/* Slider Section */}
         <div className="flex-1 w-auto xl:py-6 flex  mt-4 xl:mt-0 px-2 xl:pl-0 overflow-x-auto  snap-x  gap-7 ">
           {cards.map((card, index) => (
             <div
               key={index}
               style={{ backgroundColor: card.bg }}
               className=" min-w-[265px] rounded-xl p-4 flex flex-col sm:h-auto h-auto lg:w-[200px]  snap-center"
             >
               <img
                 loading="eager"
                 className="lg:h-[180px] h-[120px]  w-auto mx-auto my-4"
                 src={card.image}
                 alt={card.title}
               />
               <div className="flex flex-col justify-between h-full gap-4">
                 <div>
                   <p className="some-class text-[#0a7485] test-sm lg:text-xl pb-2">
                     {card.title}
                   </p>
                   <p className="my-2 text-[#065e6c] test-sm lg:text-xl pb-2">
                     {card.desc}
                   </p>
                 </div>
                 <Link to={card.link} className="lg:px-6">
                   <button className="bg-[#0a7485] text-white rounded-full   px-4 lg:px-12 py-2  font-medium uppercase ">
                     Shop now
                   </button>
                   
                 </Link>
               </div>
             </div>
           ))}
         </div>


          {/* Crew image for mobile */}
          <img
            loading="eager"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
            alt=""
            className="xl:hidden mt-6 w-full"
          />
        </div>
      </div>
    </section>
  );
}