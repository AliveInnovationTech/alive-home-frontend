import ExploreLocations from "@/components/landing-page/ExploreLocations";
import Subscribe from "@/components/landing-page/Subscribe";
import Process from "@/components/landing-page/Process";
import Hero from "@/components/landing-page/Hero";
import Faq from "@/components/landing-page/Faq";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Navbar />
      <ExploreLocations />
      <Process />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}
