import { CoffeeStorySection } from "../../components/Home/CoffeeStorySection"
import { HeroSection } from "../../components/Home/HeroSection"
import { HightSection } from "../../components/Home/HightSection"
import { MapSection } from "../../components/Home/MapSection"
import { StorySection } from "../../components/Home/StorySection"
import { WelcomeToCoffeeSection } from "../../components/Home/WelcomeToCoffeeSection"
import { WhyUs } from "../../components/shared/Whyus"

export const Home = () => {
    return (
       <main>
        <HeroSection />
        <HightSection />
        <StorySection />
        <WelcomeToCoffeeSection />
        <CoffeeStorySection/>
        <MapSection />
        <WhyUs />
       </main>
    )
}