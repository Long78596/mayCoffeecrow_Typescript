// src/data/socialLinks.ts
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaYoutube,
  } from "react-icons/fa";
import type { ShopItem, SocialLink } from "../../types/Layout/Header";
 
  
  export const socialLinks: SocialLink[] = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/",
    },
  ];
 export  const shopItems: ShopItem[] = [
    {
        href: "/collections",
        img: "./header/shop/cafe.avif",
        alt: "Vietnamese Coffee",
        title: "COFFEE",
        description: "Premium Vietnamese Coffee",
    },
    {
        href: "/collections",
        img: "./header/shop/Bundle.avif",
        alt: "Bundles",
        title: "BUNDLES",
        description: "Bundle up & Save",
    },
    {
        href: "/collections",
        img: "./header/shop/Brew_Tools.avif",
        alt: "Phin Filter",
        title: "BREW TOOLS",
        description: "Original Vietnamese Phin Filters",
    },
  ];
  