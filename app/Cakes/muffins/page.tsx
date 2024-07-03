import Image from 'next/image';
import { lusitana } from '@/app/layout';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { MuffinGalery } from '@/components/components-data/gallery-data';



export const metadata: Metadata = {
  title: 'Muffins',
};



export default function Muffins() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/Muffins/BgMuffinNewCutA.webp"
        alt="Small Cake image"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-top'
      />
      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Muffins
      </h1>

      <div className="mx-6">
        <p className="my-8 max-w-5xl mx-auto">
          Dive into our delightful world of muffins, where every bite is a journey of flavors. Our muffins are baked fresh daily, using only the finest ingredients to ensure the perfect balance of moistness and taste. From the classic blueberry to the decadent chocolate chip, our variety caters to all taste buds.
        </p>

        <p className="my-8 max-w-5xl mx-auto">
          Perfect for breakfast, a mid-day snack, or a sweet treat, our muffins are designed to bring a smile to your face. Explore our selection to find your favorite, or surprise yourself with something new and exciting. Our muffins are not just treats; they&apos;re a warm hug for your soul, baked to perfection and waiting for you.
        </p>
        <Gallery myData={MuffinGalery} />

        <p className="my-8 max-w-5xl mx-auto">
          Looking for something special? Our muffins also come in seasonal and limited-edition flavors that are sure to delight. Whether you&apos;re craving the cozy warmth of pumpkin spice in the fall or the zesty freshness of lemon in the spring, our seasonal selections offer something unique for every palate.
        </p>

        <p className="my-8 max-w-5xl mx-auto">
          Not sure which muffin to try first? Visit us in-store for a personalized recommendation from our friendly staff, or explore our online gallery to discover your next favorite treat. With our commitment to quality and flavor, every muffin is a masterpiece waiting to be savored.
        </p>
      </div>
    </main>
  );
}