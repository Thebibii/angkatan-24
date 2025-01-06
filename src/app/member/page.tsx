import BlurFade from "@/components/ui/blur-fade";
import { memberList } from "@/constant";
import Image from "next/image";
import React from "react";

const Member = () => {
  return (
    <section className="py-12">
      <div className="container">
        <BlurFade delay={0.04 * 12 + 0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            {memberList.map((item, idx) => (
              <div
                className="relative overflow-hidden w-fit rounded-2xl shadow-lg group"
                key={idx}
              >
                <Image
                  loading="lazy"
                  width="500 "
                  height="500"
                  src={`${item.src}.jpg`}
                  alt={item.nama}
                  className="h-96 w-full object-cover" // fixed height (48) and object-cover for consistent sizing
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center">
                  <div className="px-8">
                    <h4 className="text-xl font-bold text-white">
                      {item.nama}
                    </h4>
                    <p className="text-white/60">{item.panggilan}</p>
                    <h4 className="text-base font-bold text-white">
                      {item.quotes}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Member;
