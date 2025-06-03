import { ListProduct } from "../../components/Collections/collections"
import { YourselfSection } from "../../components/Home/YourselfSection"
import { Banner } from "../../components/shared/Banner"
import { WhyUs } from "../../components/shared/Whyus"

export const Collections = () => {
    return (
        <>
        <main>
            <Banner/>
            <ListProduct />
            <WhyUs />
            <YourselfSection />
        </main>
        </>
    )
}