import About from "@/components/section/home/about";
import ContactSection from "@/components/section/home/contact";
import FaqSection from "@/components/section/home/faq";
import GallerySection from "@/components/section/home/gallery";
import HomeSection from "@/components/section/home/home";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <GallerySection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
