// src/data.ts

import type {WhyUsItem, FaqItem, CardItem, FeatureItem } from "../../types/Home/types";

export const featureItems: FeatureItem[] = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/morecaffeine.svg?height=32&v=1699585924",
    text: "2X MORE CAFFEINE",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/lessugars.svg?height=32&v=1699585925",
    text: "60% LESS SUGARS",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/Group_70.svg?height=32&v=1699451359",
    text: "MORE ANTIOXIDANTS",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/Isolation_Mode.svg?height=32&v=1699451359",
    text: "MORE resistant",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/Layer_1_1.svg?height=32&v=1699451359",
    text: "Bold & Smooth",
  },
];



export const cards: CardItem[] = [
  {
    title: "SHOP ALL PRODUCTS",
    desc: "Explore the world of energising and delicious Vietnamese coffee, bundles, brewing tools and gifts",
    image: "//maycoffeecrew.co.nz/cdn/shop/files/3P_93294a49-4eca-429e-aeb5-b42e582db140.png?v=1702027933&width=250",
    bg: "#eec5a9",
    link: "/collections",
    isExternal: false,
  },
  {
    title: "DISCOVER OUR BUNDLES",
    desc: "Explore our curated coffee sets—perfect for gifting or savoring diverse flavours from our premium Vietnamese coffee collection",
    image: "//maycoffeecrew.co.nz/cdn/shop/files/Bundle.png?v=1706603610&width=250",
    bg: "#f2f195",
    link: "https://maycoffeecrew.co.nz/collections/bundles",
    isExternal: true,
  },
  {
    title: "TRY OUR PHIN FILTER",
    desc: "Experience rich Vietnamese coffee with our traditional Phin Filter - embrace a unique brewing adventure today",
    image: "//maycoffeecrew.co.nz/cdn/shop/files/Phin_Single_Double.png?v=1706603950&width=250",
    bg: "#fddede",
    link: "https://maycoffeecrew.co.nz/collections/brew-tools",
    isExternal: true,
  },
];


// data components  MapSections
export const faqData: FaqItem[] = [
  {
      question: "What is Vietnamese coffee?",
      answer:
          "Vietnamese coffee is defined by its origin and brewing method, using a Phin Filter, and typically the use of Robusta beans. This combo yields a strong, rich and smooth brew. It is often paired with condensed milk, creating a distinctive and flavourful cup.",
  },
  {
      question: "What brewing methods do you recommend for your coffee?",
      answer:
          "Treat our coffee like any other beans you may purchase from other roasters or find at the cafe (we import green beans through direct trade and small batch roast in NZ). Continue your daily coffee routine with your go-to brewing method or experience the essence of authentic Vietnamese coffee with our versatile Phin filter.",
  },
  {
      question:
          "Are your products ethically sourced and environmentally friendly?",
      answer:
          "Yes, our products are ethically sourced, emphasising direct trade with small farms. We champion sustainability by promoting Robusta beans, resilient yet flavourful. Our focus on people and the planet drives our vision, detailed in our sustainability commitment.",
  },
  {
      question: "Can you be better with packaging?",
      answer:
          "Glad you asked! We're committed to sustainability, and we've prioritised eco-friendly packaging from the start. Our bags are soft plastic recyclable, ensuring both quality preservation for our beans and environmental responsibility. We continue to explore alternatives to enhance our sustainability efforts, it's progress not perfection!",
  },
  {
      question: "What varieties or blends of coffee do you offer?",
      answer:
          "We offer diverse blends sourced from Vietnam's Central Highlands and Northern regions, featuring robust Robusta and aromatic Arabica beans. Our range celebrates the rich flavours originating from these distinct Vietnamese coffee-growing areas.",
  },
  {
      question: "Can I purchase your coffee as whole beans or pre-ground?",
      answer:
          "Yes, you can choose between whole beans or pre-ground coffee on our Product Page. Whole beans preserve the flavour best (like fresh ground pepper) as once coffee is ground the oxidation process begins and it will lose its flavour and aroma from that point onwards. We offer free grinding for your convenience, ensuring a delightful brew to suit your preferences.",
  },
  {
      question: "Can you reduce the shipping threshold?",
      answer:
          "Our small business operates solely online, relying on e-commerce so shipping is a significant cost in our business. Unlike larger brands with multiple revenue streams, we absorb shipping costs. Our flat-rate charge ensures customer convenience, and is intended to pass through shipping at cost (or sometimes below!).",
  },
];

// whyUsData.ts

export const whyUsData: WhyUsItem[] = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/familyowned.png?v=1699518639&width=300",
    text: "Kiwi-Vietnamese family owned",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/hand.png?v=1699518639&width=300",
    text: " Only the best beans hand-picked at peak ripeness",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/nz.png?v=1699518639&width=300",
    text: " 100% pure coffee beans roasted in NZ",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/directtrade.png?v=1699518639&width=300",
    text: "Ethically sourced farm-to-cup trade",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/diversity_1.svg?v=1699889122&width=300",
    text: "Proudly promoting all coffees, including Robusta",
  },
];


