export type FeatureItem = {
    img: string;
    text: string;
  };


  export interface CardItem {
    title: string;
    desc: string;
    image: string;
    bg: string;
    link: string;
    isExternal: boolean;
  }
  // compoent Mapsection

  export interface FaqItem {
    question: string;
    answer: string;
}
//component MapSection
export interface WhyUsItem {
  img: string;
  text: string;
}

//component BetSellerSection
export interface ProductItem{
  id: number;
  tag: string;
  image: string;
  name: string;
  description: string;
  details: string;
  link: string;
}

//component RobustaBenefits
export interface benefit {
    title: string;
    description: string;
    image: string;
}
export interface NewsSlide {
  img: string;
  text: string;
  date: string;
} 
  