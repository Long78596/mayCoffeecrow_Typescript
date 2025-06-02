import type { IconType } from "react-icons";

export interface ShopItem {
    href: string;
    img: string;
    alt: string;
    title: string;
    description: string;
  }

  
  // Icon header 

export interface SocialLink {
  icon: IconType;
  url: string;
}