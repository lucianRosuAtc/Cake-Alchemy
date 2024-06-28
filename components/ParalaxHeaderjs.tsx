
"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function ParalaxHeaderJs() {
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = function () {
      const target = document.querySelectorAll(".scroll");
  
      let index = 0,
        length = target.length;
      for (index; index < length; index++) {
        let pos =
          window.pageYOffset *
          Number((target[index] as HTMLElement).dataset.rate || 0);
  
        if ((target[index] as HTMLElement).dataset.direction === "vertical") {
          (target[index] as HTMLElement).style.transform =
            "translate3d(0px," + pos + "px, 0px)";
        } else {
          let posX =
            window.pageYOffset *
            Number((target[index] as HTMLElement).dataset.ratex || 0);
          let posY =
            window.pageYOffset *
            Number((target[index] as HTMLElement).dataset.ratey || 0);
          (target[index] as HTMLElement).style.transform =
            "translate3d(" + posX + "px, " + posY + "px, 0px)";
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={divRef}>
      <section className="h-screen flex items-center justify-center bg-gray-200 overflow-hidden scroll-smooth">
        <Image
          src="/img/BGCake/BgFruitMartipanMuffin.webp"
          alt="Cake image as background"
          width="1920"
          height="1080"
          className="object-cover w-full h-full bg-no-repeat object-center opacity-80"
          priority={true}
        />
        <ul className="absolute overflow-hidden flex items-center list-none h-screen text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white">
          <li
            className="scroll border-b-4 lg:border-b-8 dark:border-white border-primary/90 text-white dark:text-primary/90 pr-3 md:pr-5 lg:pr-8 2xl:pr-10"
            data-rate="-2"
            data-direction="vertical"
          >
            Cake
          </li>
          <li className="border-b-4 lg:border-b-8 border-white dark:border-primary/90 dark:text-white text-primary/90">Alch</li>
          <li
            className="scroll border-b-4 lg:border-b-8 dark:border-white border-primary/90 text-white dark:text-primary/90"
            data-rate="2"
            data-direction="vertical"
          >
            emy
          </li>
        </ul>
        <span
          className="scroll absolute w-40 lg:w-80 h-40 lg:h-80 bottom-4 left-0 overflow-hidden"
          data-ratey="-1.5"
          data-ratex="2"
          data-direction="horizontal"
        >
          <Image
            src="/img/NoBg/FlyingCupNoBg.png"
            alt="logo"
            width="500"
            height="500"
            className="object-cover w-full h-full bg-no-repeat object-center rounded-full"
            priority={true}
          />
        </span>
        <h2 className="absolute bottom-6 sm:bottom-9 lg:bottom-[70px] left-28 lg:left-[270px] border-b-4 lg:border-b-8 border-white dark:border-primary/90 dark:text-white text-primary/90 text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">Lorem ipsum dolor sit amet.</h2>
      </section>
      </div>
  );
}
