import { Link } from "react-router-dom"
import { brewTools, listBundles, listcoffee } from "../../data/Collections/collections.data";


export const ListProduct=()=>{
    return (
      <>
        <section className="container mx-auto px-4 md:px-6 lg:px-0 mt-10">
          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-4xl  text-[#0a7485] some-class">
                  Coffee
                </p>
                
                <div className="flex items-center space-x-1 text-xl">
                  <Link
                    to="/collections"
                    className="text-xl text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {listcoffee.map((item, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor ? item.tagColor : "transparent" }}

                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold lg:text-xl  text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500   uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="  text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-3">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Bundles
                </p>
                <div className="flex items-center space-x-1">
                  <Link
                    to="/collections"
                    className="text-submenu text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {listBundles.map((item, index :number) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor  ? item.tagColor : " "}}
                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold text-sm text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-3">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Brew Tools
                </p>
                <div className="flex items-center space-x-1">
                  <Link
                    to="/collections"
                    className="text-submenu text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {brewTools.map((item, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor ? item.tagColor : " " }}
                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold text-sm text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}