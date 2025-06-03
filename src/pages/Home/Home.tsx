import { BetsSellersSection } from "../../components/Home/BestSellersSection"
import { CoffeeStorySection } from "../../components/Home/CoffeeStorySection"
import { HeroSection } from "../../components/Home/HeroSection"
import { HightSection } from "../../components/Home/HightSection"
import { MapSection } from "../../components/Home/MapSection"
import { News } from "../../components/Home/News"
import { RobustaBenefits } from "../../components/Home/RobustaBenefits"
import { StorySection } from "../../components/Home/StorySection"
import { WelcomeToCoffeeSection } from "../../components/Home/WelcomeToCoffeeSection"
import { YourselfSection } from "../../components/Home/YourselfSection"
import { CustomerReviews } from "../../components/shared/CustomerReviews"
import { DirectTrade } from "../../components/shared/DirectTrade"
import { VietnamesePhinSection } from "../../components/shared/VietnamesePhinSection"
import { WhyUs } from "../../components/shared/Whyus"
// import { useEffect } from "react";
// import { testFunction } from "../../test/test";
export const Home = () => {
    // useEffect(() => {
    //     testFunction(); // Gọi hàm khi component mount
    // }, []);
    return (
        <main>
            <HeroSection />
            <HightSection />
            <StorySection />
            <WelcomeToCoffeeSection />
            <CoffeeStorySection />
            <MapSection />
            <WhyUs />
            <YourselfSection />
            <BetsSellersSection />
            <DirectTrade />
            <CustomerReviews />
            <RobustaBenefits />
            <VietnamesePhinSection />
            <News/>
        </main>
    )
}