import { Link } from "react-router-dom";

export const CoffeeStorySection=()=>{
    return (
      <section>
        <div className="container mx-auto max-w-[1300px] text-[#0a7485] md:py-4 lg:py-6 px-4 md:px-6 lg:px-0 mt-10">
          <div className="border border-[#0a7485] rounded-xl  m-2 overflow-hidden">
            <div className="container-content pb-0 px-4 md:px-12 mt-4 lg:mt-10">
              <p className="text-3xl font-bold text-[#0a7485] uppercase mt-4">
                <strong>Did you Know?</strong>
              </p>
              <p className="py-3   lg:text-xl ">
                Vietnam is the world's second-largest coffee producer, producing
                over half of the global robusta coffee supply. Sadly, Vietnamese
                coffee is often wrongly labeled as low-quality or inferior. Many
                overlook its many varieties and depth of flavours, merely
                associating it with sweet condensed milk iced coffee.
              
                
              </p>
              <p className="mb-5  lg:text-xl ">
                Those who've tasted the bold, smooth flavours in Vietnam would
                dispute this stereotype. We're on a mission to unveil the true
                essence of Vietnamese coffee beans and rightly position them on
                our Aotearoa coffee map. Join us in celebrating this diverse
                journey, reshaping stories, and embracing a new coffee
                adventure.
              </p>

              <Link to="#">
                <button
                  type="button"
                  className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase lg:text-xl whitespace-nowrap "
                >
                  OUR COFFEE JOURNEY
                </button>
              </Link>
            </div>

            {/* Background Images */}
            <img
              loading="eager"
              className="hidden lg:block"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/doyouknown_bg.webp?v=1699105429"
              alt="Coffee background desktop"
            />
            <img
              loading="eager"
              className="lg:hidden"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/diyouknown_bgb.webp?v=1699619479"
              alt="Coffee background mobile"
            />
          </div>
        </div>
      </section>
    );
}