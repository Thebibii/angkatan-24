import React from "react";
import ShimmerButton from "../../ui/shimmer-button";
import { ChevronRightIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex flex-col items-center md:space-y-6 lg:space-y-10">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-primary md:text-4xl lg:text-5xl xl:text-6xl lg:max-w-5xl text-center font-bold">
              Punya pertanyaan tentang kelas kami ?
            </h1>
            <p className="text-primary md:text-sm lg:text-base md:max-w-2xl  font-medium xl:text-lg lg:max-w-3xl xl:max-w-4xl text-center">
              Mau nanya-nanya soal kelas, butuh bantuan, atau sekadar pengen
              ngobrol santai, kami siap ngebantu dan ngasih tau info yang kamu
              butuhin.
            </p>
          </div>
          <ShimmerButton
            className="shadow-2xl w-fit  ring-1 py-1.5 px-6 ring-black"
            background="#ffff"
            shimmerColor="#182955"
            shimmerSize="0.1em"
            href="https://www.instagram.com/sisteminformasi.pnp/"
          >
            <span className="inline-flex items-center whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-primary dark:from-white dark:to-slate-900/10  xl:text-base">
              Yuk ngobrol bareng!
              <ChevronRightIcon className="size-5 ml-2" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
