import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { useScrollToTop } from "../../hooks/layouts/useScrollToTop";


export const MainLayout = () => {
    const [isScrolled, scrollToTop] = useScrollToTop();

    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />

            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="cursor-pointer fixed bottom-6 right-6 z-50 bg-[#5b9ea6] text-white p-3 rounded-full shadow-md hover:opacity-80 transition"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};
