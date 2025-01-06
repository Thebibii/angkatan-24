import React from "react";
import ShimmerButton from "../../ui/shimmer-button";
import ImgHero from "../../ui/home/img-hero";
import TypingAnimation from "@/components/ui/typing-animation";

const HomeSection = () => {
  return (
    <div className="w-full py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[350px]">
          <div className="flex flex-col lg:space-y-4 xl:space-y-8">
            <h1
              className="text-6xl sm:text-7xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold ml-[-5px] flex flex-shrink-0 flex-grow-0 gap-4 tracking-tight"
              id="hero-name"
            >
              <span>Kita</span>
              <span className="font-bold text-red-500 flex flex-col relative">
                <span className="text-xs xl:text-lg tracking-tighter opacity-80 absolute lg:-bottom-3 xl:-bottom-6 left-0">
                  <span className="opacity-75">a.k.a</span> Sickstem
                  Informasi'24
                </span>
                Rame
              </span>
              <span>.</span>
              <br />
            </h1>
            <p className="lg:max-w-sm xl:max-w-lg lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia porro ut architecto vel tempora eos delectus
              odio, debitis rem quo. Eum distinctio qui maiores nostrum
              consequuntur doloribus quasi fugit nobis non recusandae doloremque
              suscipit, quaerat alias quis, et deserunt quae rerum inventore
              architecto corporis ut minus, exercitationem vero? Dolorem?
            </p>

            <ShimmerButton
              className="shadow-2xl w-fit ring-1 py-1.5 px-6 ring-black"
              background="#ffff"
              shimmerColor="#182955"
              shimmerSize="0.1em"
              href="https://www.instagram.com/sisteminformasi.pnp/"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-primary dark:from-white dark:to-slate-900/10 lg:text-xs xl:text-base">
                Ikuti Kami!
              </span>
            </ShimmerButton>
          </div>
          <ImgHero />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
