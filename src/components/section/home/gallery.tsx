import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Fancybox from "@/components/ui/fancybox";
import { galleryList } from "@/constant";

const GallerySection = () => {
  return (
    <div className="container">
      <div className="w-full inline-flex items-center justify-center py-24">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Carousel className="w-full max-w-full " opts={{ loop: true }}>
            <CarouselContent>
              {galleryList.map((artwork, idx) => (
                <CarouselItem
                  key={idx + 1}
                  className="sm:flex-[0_0_80%] md:flex-[0_0_80%] xl:flex-[0_0_50%]"
                >
                  <a data-fancybox="gallery" href={artwork.art}>
                    <Image
                      src={artwork.art}
                      alt={`Photo by ${artwork.artist}`}
                      className="w-full  object-cover rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1/2 -ml-6 mt-5 -translate-x-1/2" />
            <CarouselNext className="left-1/2 ml-6 mt-5" />
          </Carousel>
        </Fancybox>
      </div>
    </div>
  );
};

export default GallerySection;
