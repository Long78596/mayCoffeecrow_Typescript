
import { ReviewCard } from "./ReviewCard";
import { reviews } from "../../data/Shared/customerreview.data";

export const CustomerReviews= () => {
    return (
        <section
            className="container mx-auto px-4 md:px-6 lg:px-0 lg:py-50 py-15 bg-cover bg-top md:bg-contain bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://cdn.shopify.com/s/files/1/0611/1956/1867/files/peoplesay_bg.svg?v=1699151935')",
            }}
        >
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold uppercase text-[#28707b]">
                    <strong>Reviews</strong>
                </h2>
            </div>
            <div className="flex overflow-x-auto gap-6 justify-start lg:justify-center">
                {reviews.map((review, idx) => (
                    <ReviewCard key={idx} {...review} />
                ))}
            </div>
        </section>
    );
};
