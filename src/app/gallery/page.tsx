"use client";
import Fancybox from "@/components/ui/fancybox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MasonryGallery() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60",
      title: "Tower",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    /* {
      img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
      title: "Tree",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
      title: "Camping Car",
    },
    {
      img: "https://images.unsplash.com/photo-1430417934865-589b63ad5c00",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://anuchange.com/wp-content/uploads/2020/10/https-images.unsplash.com-photo-1430417934865-589b63ad5c00-ixlibrb-0.3.5q80fmjpgcropentropycstinysrgbsf70d8b1dac8676fb3e099684931eddf1.png",
      title: "Mountain",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    }, */
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <div className="container">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            {itemData.map((item, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className="bg-white shadow-lg rounded overflow-hidden">
                  <a data-fancybox="gallery" href={item.img}>
                    <Image
                      src={item.img}
                      width={500}
                      height={500}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Fancybox>
        </div>
      </div>
    </div>
  );
}
