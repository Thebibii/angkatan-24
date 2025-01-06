import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full py-24">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="order-2 lg:order-1">
            <Image
              src="/img/hero1.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              loading="lazy"
              className="rounded-md w-full"
            />
          </div>
          <div className="flex flex-col space-y-4 order-1 lg:order-2">
            <h1 className="font-bold text-primary lg:text-4xl xl:text-5xl">
              Gimana sih {""}
              <span>
                kelas <br /> Sistem Informasi?
              </span>
            </h1>
            <p className="text-secondary-foreground xl:text-base lg:text-sm">
              Kelas ini adalah kelas yang gak biasa. Bukan cuma belajar, tapi
              bisa main game dan bikin proyek bareng bareng yang keren yang
              langsung berguna. Seru, kan? Di sini, kita suka saling bantu,
              sharing ide, dan bikin suasana belajar yang menyenangkan ! 💻🚀
            </p>

            <ShimmerButton
              className="shadow-2xl w-fit  ring-1 py-1.5 px-6 ring-black"
              background="#ffff"
              shimmerColor="#182955"
              shimmerSize="0.1em"
              href="https://www.instagram.com/sisteminformasi.pnp/"
            >
              <span className="inline-flex items-center whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-primary dark:from-white dark:to-slate-900/10 lg:text-xs xl:text-base">
                Anggota Kelas
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
