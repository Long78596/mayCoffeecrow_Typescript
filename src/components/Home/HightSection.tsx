import { featureItems } from "../../data/Home/data"
import { Link } from "react-router-dom";
export const HightSection = () => {
  return (

    <section className="mt-5">
      <div className="container mx-auto max-w-[1300px] md:py-4 lg:py-6 px-4 md:px-6 lg:px-0 relative">
        <div className="bg-[#f2f195] rounded-xl flex flex-col lg:flex-row lg:pr-0">
          <div className="w-full lg:px-10 lg:py-10 px-6 py-6 lg:w-1/2 text-[#0a7485] flex-col space-y-3 md:space-y-6 lg:pr-0 text-center lg:text-left pb-5 lg:pb-10">
            <p className="font-bold text-[14px] sm:text-[16px] lg:text-[22px] text-[#04687a] leading-snug ">
              NEW ZEALAND'S FIRST SPECIALTY <br className="hidden lg:block" />
              VIETNAMESE COFFEE BRAND
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-5xl some-class" style={{ color: 'rgb(18, 111, 134)' }}>
              SO GOOD WE HAD TO SHARE
            </h2>

            <p className=" lg:text-xl  leading-relaxed text-[#04505e]">
              Uncensored Vietnamese flavours, a traditional taste with a modern touch. Premium beans sourced directly from Vietnamese farms and small batch roasted in Aotearoa.
            </p>
           
            <div className="flex flex-wrap justify-center md:justify-between lg:grid lg:grid-cols-5 gap-x-4 gap-y-6 md:gap-y-8 lg:gap-8">
              {featureItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col justify-between gap-2  w-[85px] md:w-[100px]"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    width="32"
                    height="32"
                    loading="lazy"
                  />
                  <p className="text-center font-bold uppercase text-sm ">
                    <strong>{item.text}</strong>
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-5  md:pt-6 lg:pt-6">
              <Link to="/collections">
                <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase mb-6">
                  shop all
                </button>
              </Link>
            </div>

          </div>

          <img
            loading="eager"
            className="lg:hidden pt-6 md:pt-10  "
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/goodwitheverything.png?v=1699616208"
            alt=""
          />


          {/* Ảnh nền desktop */}
          <div
            className="hidden lg:block w-full lg:w-1/2 bg-cover bg-left-bottom bg-no-repeat min-h-[400px]"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0611/1956/1867/files/beans.webp?v=1699100135')",
            }}
          ></div>
        </div>
      </div>

    </section>
  )
}