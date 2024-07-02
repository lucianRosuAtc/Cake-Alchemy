import { CakeSlice, MessageCircleMore } from "lucide-react";

import { Button } from "./ui/button";
import { IntroDataFirst, IntroDataSecond } from "./components-data/intro-data";

import React from "react";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

export default function Paralax() {
  return (
    <div className="">
      <section className="relative">
        <div className="absolute right-8 -top-[65px] bg-white dark:bg-black rounded-lg p-2 shadow-inner">
          <ProgressBar value={100} max={100} />
        </div>
      </section>

      {/* 1 */}
      <section className="bg-[url('/img/BGCake/BGDarkBgCherryMuffins.webp')] bg-no-repeat bg-cover object-center bg-fixed">
        {/* exterior paralax */}
        <div className="py-[20%] px-0">
          {/* inner paralax */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-center text-white/60">Welcome to Cake Alchemy</h1>
        </div>
      </section>


      {/* 1 text  */}
      <section className="px-4 md:px-8">
        <h3 className="my-8 lg:text-center">Company Values</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-10 max-w-5xl mx-auto">
          {IntroDataFirst.map((introFirst) => (
            <div key={introFirst.id} className="flex flex-row lg:flex-col items-start lg:items-center justify-start">
              <div className="flex justify-center items-center min-h-16 min-w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white mb-4 ">
                {introFirst.icon}
              </div>

              <div className="flex flex-col lg:text-center">
                <p className="subtitle2 mb-4">
                  {introFirst.title}
                </p>
                <p className="subtitle3">
                  {introFirst.desc}
                </p>
              </div>
            </div>
          ))
          }
        </div>

        <div className="flex flex-col items-center justify-center mb-8 md:mb-16">
          <Link href="/Cakes">
            <Button className="gap-2 px-7 font-bold">Our Products <CakeSlice className="animate-bounce transition-all dark:text-orange-500" /></Button>
          </Link>
        </div>
      </section>


      {/* 2  */}
      <section className="bg-[url('/img/BGCake/BGamericanCake.webp')] bg-no-repeat bg-cover object-center bg-fixed">
        {/* exterior paralax */}
        <div className="py-[20%] px-0">
          {/* inner paralax */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-center text-white/60">Our Specialties</h1>
        </div>
      </section>

      {/* 2 text  */}
      <div className="flex flex-col gap-y-10 max-w-5xl mx-auto py-12 md:py-20 px-4">
        {IntroDataSecond.map((introSecond, id) => (
          <div key={id} className="flex items-start lg:items-center justify-start">
            <div className="flex justify-center items-center min-h-16 min-w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white mb-4 ">
              {introSecond.icon}
            </div>
            <div className="">
              <p className="subtitle2">
                {introSecond.title}
              </p>
              <p className="subtitle3">{introSecond.desc}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center">
          <Link href="/contact">
            <Button className="gap-2 px-7 font-bold">Contact Me<MessageCircleMore className="animate-bounce transition-all dark:text-orange-500" /></Button>
          </Link>
        </div>
      </div>

      {/* 3 */}
      <section className="bg-[url('/img/BGCake/BGChocolateCakeDark.webp')] bg-no-repeat bg-cover object-center bg-fixed">
        {/* exterior paralax */}
        <div className="py-[20%] px-0">
          {/* inner paralax */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-center text-white/60">Customer Satisfaction</h1>
        </div>
      </section>

      <section className="flex flex-col max-w-5xl mx-auto px-4 md:px-8 lg:text-center mb-8 md:mb-12">
        <h3 className="my-8">Custom Cake Designs</h3>
        <p className="subtitle3 mb-8">
          Can&apos;t find exactly what you&apos;re looking for? Let us create a custom cake that perfectly matches your vision. From the initial sketch to the final decoration, we work closely with you to bring your dream cake to life.
        </p>
      </section>

    </div>
  );
}





