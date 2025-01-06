import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqList } from "@/constant";
import React from "react";

const FaqSection = () => {
  return (
    <div className="w-full py-28">
      <div className="container lg:px-48">
        <div className="flex w-full flex-col items-center space-y-10">
          <div className="flex flex-col space-y-8 items-center">
            <h1 className="text-primary md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl text-center inline-flex flex-col font-bold after:content-['']  after:mt-8 after:bg-primary after:h-2">
              Faq
            </h1>
            <p className="text-primary text-center md:text-sm xl:text-base">
              Temukan jawaban atas berbagai pertanyaan umum tentang Program
              Studi Sistem Informasi di sini!
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger className="text-primary  md:text-sm xl:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary  md:text-sm xl:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
