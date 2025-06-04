


import { Link } from "react-router-dom";
import { useState } from "react";
import { socialLinks, shopItems } from "../../data/layouts/header";
import {

  FaUser,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return <>

    <header className="w-full">
      <div className="hidden md:block"></div>
      <div className="hidden md:block mt-0 md:mt-20 lg:mt-20">
        <div className="bg-orange-200 lg:items-center lg:justify-center text-center font-semibold text-teal-700 fixed top-0 left-0 w-full z-[999] py-1">
          <p>
            <strong>
              FREE SHIPPING ON ALL CANS - No Minimum Spend Needed!
            </strong>
          </p>
        </div>
        <div className="fixed top-[32px] left-0 w-full z-[999] text-white py-2" style={{ backgroundColor: "rgb(18, 111, 134)" }}>
          <div className="container mx-auto max-w-[1300px] px-4 flex justify-between items-center">

            {/* Icon */}
            <div className="flex gap-2 text-lg">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-1 py-1 bg-white rounded-full"
                  >
                    <Icon className="cursor-pointer h-6 w-6 text-[#065e6c]" />
                  </a>
                );
              })}
            </div>
            <nav className=" flex items-center gap-6 text-lg font-bold relative">
              <ul className="flex items-center gap-6 justify-center text-center">
                <li
                  className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link to="/collections">
                    <div className="cursor-pointer flex items-center gap-1">
                      SHOP{" "}
                      <span>
                        <  FaChevronDown className="text-white" />
                      </span>
                    </div>
                  </Link>

                  {/* Mega Dropdown */}
                  {showDropdown && (
                    <div className="fixed left-0 right-0 w-full mt-2 transition-opacity duration-700 h-screen bg-black/70 opacity-100 z-50">
                      <div className="py-12 bg-white">
                        <div className="container mx-auto text-teal-700">
                          <div className="flex gap-20">
                            <div>
                              <Link
                                className="flex space-x-2 items-center"
                                to="/collections"
                              >
                                <span className="font-anton text-xl text-teal-800">
                                  SHOP ALL PRODUCTS
                                </span>
                                <div className="w-6">
                                  <i className="fa-solid fa-arrow-right"></i>
                                </div>
                              </Link>

                              <div className="grid grid-cols-4 gap-8 mt-5">
                                {shopItems.map((item, index) => (
                                  <Link key={index} to={item.href}>
                                    <div className="flex flex-col justify-end space-y-4 h-full">
                                      <img
                                        loading="eager"
                                        src={item.img}
                                        alt={item.alt}
                                      />
                                      <p className="font-semibold uppercase text-xl">
                                        {item.title}
                                      </p>
                                      <p className="text-xs">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link className="" to="/pages/wholesale">
                    WHOLESALE
                  </Link>
                </li>
                <li>
                  <Link className="" to="/">
                    <img
                      src="/logo.svg"
                      alt="May Coffee Crew"
                      className="h-8"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">ABOUT</Link>
                </li>
                <li>
                  <Link to="/blogs/brew-guide">BLOG</Link>
                </li>
                <li>
                  <Link to="#">STOCKISTS</Link>
                </li>

              </ul>

            </nav>
            <div className="flex gap-3 items-center  justify-center">
              <Link to="/login">
                <FaUser className="h-6 w-6" />
              </Link>
              <Link to="#">
                <FaSearch className="h-6 w-6" />
              </Link>
              <Link to="/cart">
                <FaShoppingCart className="h-6 w-6" />
              </Link>
            </div>



          </div>
        </div>
      </div>

      {/* gioa diện dành cho mobile */}


      <div className="block md:hidden py-11">
        <div className="fixed top-0 left-0 w-full z-[999]">
          <div className="bg-orange-200 text-center py-2 text-sm font-semibold text-teal-700 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              <strong>
                FREE SHIPPING ON ALL CANS - No Minimum Spend Needed!
              </strong>
            </div>
          </div>
          <div
            className="text-white py-2 px-4 flex justify-between items-center"
            style={{ backgroundColor: "rgb(18, 111, 134)" }}
          >
            <button onClick={toggleMenu} className="cursor-pointer">
              <FaBars className="h-6 w-6" />
            </button>
            <Link to="/">
              <img src="/logo.svg" className="h-8" alt="Logo" />
            </Link>
            <div className="flex gap-3 items-center">
              <Link to="#" className="cursor-pointer">
                <FaSearch className="h-5 w-5" />
              </Link>
              <Link to="/login" className="cursor-pointer">
                <FaUser className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="cursor-pointer">
                <FaShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full z-[999]" />

        {/* Slide menu */}
        {isMenuOpen && (
          <div className=" w-full h-full fixed left-0 top-[85px] z-[9999] flex">
            {/* Side menu */}
            <div
              className="flex-1 h-full w-[80vw] px-4 text-white"
              style={{ backgroundColor: "#006b7f" }}
            >
              <div className="text-xl flex flex-col py-4">
                {/* SHOP */}
                <div
                  className="border-b border-white py-2 flex justify-between items-center cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <span className="uppercase font-semibold text-white">
                    Shop
                  </span>
                  <FaChevronRight
                    className={`text-sm text-white transition-transform duration-300 ${open ? "rotate-90" : ""
                      }`}
                  />
                </div>

                {open && (
                  <ul className="pl-4 text-lg text-white transition-all duration-300 my-2">
                    <li className="py-2 border-b border-white uppercase">
                      <Link to="/collections">Shop all</Link>
                    </li>
                    <li className="py-2 border-b border-white uppercase">
                      <Link to="/collections">Coffee</Link>
                    </li>
                    <li className="py-2 border-b border-white uppercase">
                      <Link to="/collections">Brew tools</Link>
                    </li>
                    <li className="py-2 border-b border-white uppercase">
                      <Link to="/collections">Bundles</Link>
                    </li>
                  </ul>
                )}

                {/* WHOLESALE */}
                <Link
                  to="/pages/wholesale"
                  className="uppercase border-b border-white py-2 font-semibold"
                >
                  Wholesale
                </Link>

                {/* ABOUT */}
                <div className="border-b border-white py-2 font-semibold uppercase">
                  About
                </div>
                <div className="border-b border-white py-2 font-semibold uppercase">
                  <Link to="/blogs/brew-guide">Blog</Link>
                </div>

                {/* STOCKISTS */}
                <div className="border-b border-white py-2 font-semibold uppercase">
                  Stockists
                </div>

                {/* Bottom links */}
                <div className="grid grid-cols-1 mt-10 gap-2 text-base">
                  <Link to="/collections" onClick={closeMenu}>
                    Shop
                  </Link>
                  <Link to="/blogs/brew-guide" onClick={closeMenu}>
                    Sustainability
                  </Link>
                  <Link to="#" onClick={closeMenu}>
                    About Us
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Our coffee
                  </Link>
                </div>
              </div>
            </div>

            {/* Overlay click to close */}
            <div className="flex-1 bg-black/80" onClick={closeMenu}></div>
          </div>
        )}
      </div>




    </header>
  </>
}