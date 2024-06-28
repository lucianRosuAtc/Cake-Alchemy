
import {
  BadgeCheck,
  Cake,
  CakeSlice,
  Handshake,
  PartyPopper,
  Trophy,

} from "lucide-react";
import { Button } from "./ui/button";
import { IntroData } from "./components-data/intro-data";


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
      <section className="">
        <h3 className="my-8 text-center">Company Values</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-10 max-w-5xl mx-auto px-4 md:px-8">
          {IntroData.map((intro, id) => (
            <div key={id} className="flex flex-col items-start lg:items-center  justify-start">
              <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white mb-4">
                {intro.icon}
              </div>

              <div className="flex flex-col lg:text-center">
                <p className="subtitle2 mb-4">
                  {intro.title}
                </p>
                <p className="subtitle3">
                  {intro.desc}
                </p>
              </div>
            </div>
          ))
          }
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <Link href="/services">
            <Button className="gap-2 px-7">Our Products <CakeSlice  className="animate-bounce transition-all text-white" /></Button>
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


      <div className="flex flex-col gap-y-10">
        <div className="flex items-center">
          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
            <Cake className="h-10 w-10 m-3" />
          </div>
          <div className="">
            <p className="subtitle2">
              Discover the perfect cake for every occasion.
            </p>
            <p className="subtitle3">From luxurious wedding cakes to delightful birthday surprises, our handcrafted creations are designed to make your celebrations unforgettable.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
            <PartyPopper className="h-10 w-10 m-3" />
          </div>
          <div className="">
            <p className="subtitle2">
              Elevate your event with unforgettable moments.
            </p>
            <p className="subtitle3">Explore our wide range of flavors, from classic vanilla and rich chocolate to exotic passion fruit and salted caramel. Each cake is a masterpiece, baked with the finest ingredients and decorated with precision and care.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
            <PartyPopper className="h-10 w-10 m-3" />
          </div>
          <div className="">
            <p className="subtitle2">
              Custom Cake Designs
            </p>
            <p className="subtitle3"> Can&apos;t find exactly what you&apos;re looking for? Let us create a custom cake that perfectly matches your vision. From the initial sketch to the final decoration, we work closely with you to bring your dream cake to life.</p>
          </div>
        </div>
      </div>




      {/* 3 */}
      <section className="bg-[url('/img/BGCake/BGChocolateCakeDark.webp')] bg-no-repeat bg-cover object-center bg-fixed">
        {" "}
        {/* exterior paralax */}
        <div className="py-[20%] px-0">
          {/* inner paralax */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-center text-white/60">Customer Satisfaction:</h1>
        </div>
      </section>


      Customer Satisfaction:
      <h4>Custom Cake Designs</h4>
      <p className="text-base text-gray-500 text-justify leading-8 mx-12 my-10">
        Can&apos;t find exactly what you&apos;re looking for? Let us create a custom cake that perfectly matches your vision. From the initial sketch to the final decoration, we work closely with you to bring your dream cake to life.
      </p>



    </div>
  );
}




{/* <section className="mx-8">
        <div className="max-w-7xl my-14 md:my-20 mx-auto">
          <h2 className="text-center mb-8 md:mb-12 text-gray-800 dark:text-primary max-w-[550px] mx-auto">
            My Services:
          </h2>
          <h4 className="md:mb-4 text-center my-4 md:my-12 light:text-gray-800 border-b border-primary max-w-[250px] mx-auto md:mx-0">
            Our Specialties
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto text-center md:text-left">
            {plumbingData.map((plumbingService, id) => (
              <li
                key={id}
                className="list-disc list-inside text-wrap text-sm md:text-base m-0 p-0"
              >
                {plumbingService.plumbing}
              </li>
            ))}
          </ul>
        </div>
      </section> */}

{/* <div className="flex flex-col items-center justify-center">
        <ArrowBigDown className="animate-bounce transition-all text-primary" />
        <Link href="/contact">
          <Button className="gap-2 px-9">Contact Me</Button>
        </Link>
      </div> */}

{/* */ }