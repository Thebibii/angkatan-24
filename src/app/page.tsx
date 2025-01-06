import About from "@/components/section/home/about";
import ContactSection from "@/components/section/home/contact";
import FaqSection from "@/components/section/home/faq";
import FooterSection from "@/components/section/home/footer";
import GallerySection from "@/components/section/home/gallery";
import HomeSection from "@/components/section/home/home";
import DotPattern from "@/components/ui/dot-pattern";

export default function Home() {
  return (
    <>
      <HomeSection />
      {/* <DotPattern className="[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] -z-50" /> */}
      <About />
      <GallerySection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
