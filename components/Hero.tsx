import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row mx-auto">
      <Image
        src="/img/NoBg/BgFigOrangeCakeTop-removebg-preview.png"
        width="600"
        height="500"
        alt="Big Cake"
        className="mx-auto w-72 sm:w-96 lg:w-[500px] xl:w-[800px] h-72 sm:h-96 lg:h-[500px] xl:h-[800px] object-cover object-center border order-2 md:order-1"
        priority={true}
      />



      <div className="flex flex-col justify-end py-4 sm:py-8 md:py-20 text-gray-800 dark:text-gray-200 mx-4 md:mx-8 uppercase h-full order-1 md:order-2">
        <h4 className="text-2xl md:text-5xl lg:text-7xl leading-loose">
         Make your Party Amazing
        </h4>
        <p className="text-lg md:text-2xl leading-loose md:pt-10">
          We offer professional services. Our search firm is built on integrity,
          experience, and a will to deliver exceptional talent.
        </p>
      </div>
  

    </div>
  );
}
