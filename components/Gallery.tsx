

'use client'
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({ myData }: { myData: { img: string }[] }) {
  const [bigImage, setBigImage] = useState(myData && myData.length > 0 ? myData[0].img : null);// Set initial state to the first image

  const handleSmallImageClick = (img: { img: string }) => {
    setBigImage(img.img); // Set bigImage to img.img because img is the object from my array
  };

  return (
    <div className="flex flex-col">
      <h2 className="mx-auto text-center my-12 md:my-16 border-b border-primary dark:border-orange-300 w-[270px] xl:w-[350px]">Gallery</h2>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-3 mb-4 mx-auto">
        {bigImage && <Image
          src={bigImage}
          width={500}
          height={500}
          alt="product"
          className="h-80 sm:h-[450px] md:h-[600px] sm:w-[650px] md:w-[800px] object-cover object-top cursor-pointer"
          priority={true}
        />}
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Simply Delicious</span>
      </div>

      <div className="grid">
        <div className="order-last grid grid-cols-4 md:grid-cols-6 gap-4 mx-auto z-0">
        {myData && Array.isArray(myData) && myData.map((item) => (
            <div className="overflow-hidden rounded-lg bg-gray-100 justify-center" key={item.img}>
              <Image
                src={item.img}
                alt="product"
                width={200}
                height={200}
                className="h-12 sm:h-24 w-full object-cover object-center cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleSmallImageClick(item)}
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}