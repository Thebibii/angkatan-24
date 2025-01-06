// "use client";
import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";

const ImgHero = () => {
  return (
    <div className="relative h-full w-full flex ">
      <div className="flex justify-center items-center h-full w-full">
        <Image
          src="/img/hero2.jpg"
          width={350}
          height={350}
          alt="Picture of the author"
          loading="lazy"
          className="w-full xl:w-4/5 rounded-md"
        />
        {/* <motion.div
          className="absolute xl:left-[10%] top-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <Image
            src="/img/hero1.jpg"
            width={350}
            height={350}
            alt="Picture of the author"
            loading="lazy"
            className="rounded-md rotate-6  ml-auto"
          />
        </motion.div>
        <motion.div
          className="absolute right-0 xl:bottom-0 top-1/2 -translate-y-1/4"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <Image
            src="/img/hero2.jpg"
            width={350}
            height={350}
            alt="Picture of the author"
            loading="lazy"
            className="rounded-md -rotate-3  ml-auto"
          />
        </motion.div> */}
      </div>
    </div>
  );
};
{
  /* <div className="relative h-full w-full flex justify-center items-center">
  <div className="relative h-full w-full flex justify-center items-center">
    <motion.div className="absolute xl:left-[10%] top-1/2 transform -translate-y-1/2">
      <Image
        src="/img/hero1.jpg"
        width={350}
        height={350}
        alt="Picture of the author"
        loading="lazy"
        className="rounded-md rotate-6 xl:w-auto lg:w-[80%] ml-auto"
      />
    </motion.div>
    <motion.div className="absolute xl:right-[10%] top-1/2 transform -translate-y-1/2">
      <Image
        src="/img/hero2.jpg"
        width={350}
        height={350}
        alt="Picture of the author"
        loading="lazy"
        className="rounded-md -rotate-3 xl:w-auto lg:w-[80%] ml-auto"
      />
    </motion.div>
  </div>
</div>; */
}

export default ImgHero;
