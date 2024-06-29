
import { Cake, CakeSlice, Gift, PartyPopper } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HeroData } from "./components-data/hero-data";

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row mx-auto">
      <Image
        src="/img/NoBg/BgFigOrangeCakeTop-removebg-preview.png"
        width="600"
        height="500"
        alt="Big Cake"
        className="mx-auto w-72 sm:w-[500px] lg:w-[700px] 2xl:w-[800px] h-72 sm:h-[500px] lg:h-[700px] 2xl:h-[800px] object-cover object-center order-2 xl:order-1"
        priority={true}
      />
      <div className="flex flex-col justify-end py-4 sm:py-8 md:py-16 xl:py-24 text-gray-800 dark:text-gray-200 mx-4 md:mx-8 h-full order-1 xl:order-2">
        <h2 className="mb-8">
          Make your Party Amazing
        </h2>
        <h3 className="mb-8">
          Cake Alchemy goes beyond planning and elevates all of your parties.
        </h3>

        <div className="flex flex-col gap-y-10">
          {HeroData.map((item) => (
            <div key={item.id} className="flex items-start">
              <div className="flex justify-center items-center min-h-16 min-w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
                {item.icon}
              </div>
              <div className="">
                <p className="subtitle2">
                  {item.title}
                </p>
                <p className="subtitle3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}