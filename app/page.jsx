// components
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Services from "@/components/service/Services";
import Work from "@/components/work/Work";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Work />
            <Reviews />
            <Cta />
        </main>
    );
}
