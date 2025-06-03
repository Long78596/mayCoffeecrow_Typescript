import { mobileSections } from "../../data/Shared/directTrade.data"
import type { mobilesection } from "../../types/shared/directTrade.types"

export const DirectTrade =()=>{
    return <section className="container mx-auto text-[#0a7485] px-4 md:px-6 lg:px-0">
     <div className="max-w-[1080px] mx-auto text-center m-2">
      <p className="font-bold text-2xl uppercase lg:px-8">
                WHAT DOES "DIRECT TRADE" COFFEE MEAN WITH MAY COFFEE CREW
      </p>
      <p className="mt-3 lg:mt-6 text-xl m-4">
                What is the process of direct trade, and how is it permitting us to
                receive and sell premium coffee beans? Most importantly, how are the
                farms positively benefiting from the direct trade process?
      </p>
     </div>
     <div className="mt-6 lg:mt-10 text-xl">
            <img
                loading="eager"
                className="hidden lg:block w-full"
                src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade.webp?v=1699150985"
                alt="Direct Trade Overview"
            />
            <div className="lg:hidden flex flex-col text-center m-4">
                {mobileSections.map((item:mobilesection, index :number) => (
                    <div key={index}>
                        <img
                            loading="eager"
                            className={item.className}
                            src={item.img}
                            alt=""
                        />
                        <p className="mt-4">{item.text}</p>
                    </div>
                ))}
            </div>
     </div>
    </section>
}