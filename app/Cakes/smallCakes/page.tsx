import Image from 'next/image';
import { lusitana } from '@/app/layout';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';


export const metadata: Metadata = {
  title: 'Small Cakes',
};



export default function SmallCake() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/smallCakes/BGMuffinNewCut.webp"
        alt="Small Cake image"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-top'
      />
      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Small Cakes
      </h1>

      <div className="mx-6">
        <p className="my-8">
          Discover the charm of our small cakes, each a masterpiece of flavor and design. Crafted with care, our small cakes are perfect for those moments when you crave something sweet but exquisite. From the rich, velvety chocolate to the light and zesty lemon, our selection offers a variety of flavors to satisfy every palate.
        </p>

        <Gallery />

        <p className="my-8">
          Ideal for intimate gatherings, gifts, or a personal treat, our small cakes are designed to delight. Experience the joy of indulging in a cake that&apos;s just the right size, but big on taste. Let our small cakes be a part of your celebrations, creating memorable moments with every bite.
        </p>
      </div>
    </main>
  );
}