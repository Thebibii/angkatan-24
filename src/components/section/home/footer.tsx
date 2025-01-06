import { Instagram, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="py-4">
      <div className="container ">
        <div className="flex items-center justify-between">
          <h2 className="text-primary font-bold text-5xl  lg:text-2xl after:content-['>'] after:text-primary before:content-['</'] before:text-sky-800">
            Hi Sick
          </h2>
          <div className="flex items-center space-x-4">
            <Link href="#" className="flex space-x-2 items-center">
              <Phone />
              <span className="font-medium text-base">WhatsApp</span>
            </Link>
            <Link href="#" className="flex space-x-2 items-center">
              <Instagram />
              <span className="font-medium text-base">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
