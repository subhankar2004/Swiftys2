import Hero from "@/components/sections/Hero";
import ConceirgeSection from "@/components/sections/ConceirgeSection";
import ServiceSection from "@/components/sections/ServiceSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
    <Hero/>
    <ConceirgeSection/>
    <ServiceSection/>
    <GallerySection/>
    <AboutSection/>
    <Footer/>
    </>
  );
}