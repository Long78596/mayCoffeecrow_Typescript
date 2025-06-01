
import { ShopItem } from "../types/shopItem";


const shopItems:ShopItem[]=>[

];
export const Header=()=>{
    return <>

    <header className="w-full">
           {/* === giao diện desktop === */}
           <div className="  hidden md:block"></div>
   
           {/* === giao diện desktop cố định === */}
           <div className="hidden md:block mt-0 md:mt-20 lg:mt-20">
             <div className="bg-orange-200  lg:items-center text-center py-2 text-sm font-semibold text-teal-700 fixed top-0 left-0 w-full z-[999]">
               <p>
                 <strong>
                   FREE SHIPPING ON ALL CANS - No Minimum Spend Needed!
                 </strong>
               </p>
             </div>
   
             <div
               className="fixed top-[32px] left-0 w-full z-[999] text-white py-2 "
               style={{ backgroundColor: "rgb(18, 111, 134)" }}
             >
               <div className="container mx-auto px-4 flex justify-between items-center">
                 {/*  Icons */}
                 <div className="flex gap-2 text-lg">
                   {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map(
                     (Icon, i) => (
                       <a
                         key={i}
                         href="#"
                         className="flex items-center justify-center px-1 py-1 bg-white rounded-full"
                       >
                         <Icon className="cursor-pointer h-6 w-6 text-teal-800" />
                       </a>
                     )
                   )}
                 </div>
   
                 {/* Navigation */}
                 <nav className="flex items-center gap-6 text-lg font-bold relative">
                   <ul className="flex items-center gap-6">
                     <li
                       className="relative group"
                       onMouseEnter={() => setShowDropdown(true)}
                       onMouseLeave={() => setShowDropdown(false)}
                     >
                       <div className="cursor-pointer flex items-center gap-1">
                         SHOP{" "}
                         <span>
                           <ChevronDown className="text-white" />
                         </span>
                       </div>
   
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
                       <Link to="/pages/wholesale">WHOLESALE</Link>
                     </li>
                     <li>
                       <Link to="/">
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
   
                 {/* User Actions */}
                 <div className="flex gap-3 items-center">
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
   
          
         </header>
    </>
}