
import {
  BadgeCheck,
  Cake,
  Handshake,
  PartyPopper,
  Trophy,

} from "lucide-react";
import { Button } from "./ui/button";
import { IntroData } from "./components-data/intro-data";


import React from "react";
import ProgressBar from "./ProgressBar";

export default function Paralax() {
  return (
    <section className="">



      <div className="relative">
        <div className="absolute right-8 -top-[65px] bg-white dark:bg-black rounded-lg p-2 shadow-inner">
          <ProgressBar value={100} max={100} />
        </div>
      </div>

      {/* 1 */}
      <section className="bg-[url('/img/BGCake/BGDarkBgCherryMuffins.webp')] bg-no-repeat bg-cover object-center bg-fixed">
        {/* exterior paralax */}
        <div className="py-[20%] px-0">
          {/* inner paralax */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl text-center text-white/60">Welcome to Cake Alchemy</h1>
        </div>
      </section>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-10 max-w-5xl mx-auto px-4 md:px-8">

        <div className="flex flex-col items-start lg:items-center  justify-center">

          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white mb-4">
            <Handshake className="h-10 w-10 m-3" />
          </div>

          <div className="flex flex-col ">
            <p className="subtitle2 mb-4">
              Professional and Friendly Service
            </p>
            <p className="subtitle3"> 
               I believe in maintaining a friendly yet
              professional relationship with my clients. I am committed to
              providing excellent customer service and ensuring that you are
              completely satisfied with my work.
              </p>
          </div>
        </div>







        <div className="flex flex-col items-start lg:items-center justify-center">

          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
            <Trophy className="h-10 w-10 m-3" />
          </div>
          <div className="flex flex-col ">
            <p className="subtitle2">
              Custom Creations:
            </p>
            <p className="subtitle3">
              At our bakery, we believe in crafting cakes that
              are as unique as your special occasions. Our passion is to deliver
              not just a cake, but an experience, tailored to your taste and
              vision. We are committed to using the finest ingredients to ensure
              every slice is a piece of joy.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-center justify-center">

          <div className="flex justify-center items-center h-16 w-16 border shadow-inner mr-4 rounded-2xl text-primary/80 dark:text-black dark:bg-white">
            < BadgeCheck className="h-10 w-10 m-3" />
          </div>
          <div className="flex flex-col ">
            <p className="subtitle2">
              Artistry in Every Bite:
            </p>
            <p className="subtitle3">   We take pride in our artistic approach to
              baking. Each cake is a masterpiece, designed to capture the essence
              of your celebration. From elegant wedding cakes to fun and vibrant
              birthday cakes, our goal is to create a memorable centerpiece that
              tastes as good as it looks.</p>
          </div>
        </div>

      </div>






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



    </section>
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

{/* <div className="flex flex-col items-center justify-center">
        <ArrowBigDown className="animate-bounce transition-all text-primary" />
        <Link href="/services">
          <Button className="gap-2 px-9">Our Services</Button>
        </Link>
      </div> */}