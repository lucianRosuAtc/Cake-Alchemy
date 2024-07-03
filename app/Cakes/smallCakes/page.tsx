import Image from 'next/image';
import { lusitana } from '@/app/layout';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { SmallCakeGalery } from '@/components/components-data/gallery-data';


export const metadata: Metadata = {
  title: 'Small Cakes',
};



export default function SmallCake() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/smallCakes/SmallCakeNewBg.webp"
        alt="Small Cake image"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-center'
      />
      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Small Cakes
      </h1>

      <div className="mx-6">
        <p className="my-8 max-w-5xl mx-auto">
          Discover the charm of our small cakes, each a masterpiece of flavor and design. Crafted with care, our small cakes are perfect for those moments when you crave something sweet but exquisite. From the rich, velvety chocolate to the light and zesty lemon, our selection offers a variety of flavors to satisfy every palate.
        </p>
        <p className="my-8 max-w-5xl mx-auto">
          Explore our gallery to find your perfect match. Whether you&apos;re looking for a classic favorite or something new and exciting, our small cakes are sure to impress. Each cake is a testament to our passion for baking and our commitment to using only the finest ingredients.
        </p>
        <Gallery myData={SmallCakeGalery} />


        <p className="my-8 max-w-5xl mx-auto">
          Ideal for intimate gatherings, gifts, or a personal treat, our small cakes are designed to delight. Experience the joy of indulging in a cake that&apos;s just the right size, but big on taste. Let our small cakes be a part of your celebrations, creating memorable moments with every bite.
        </p>
        <p className="my-8 max-w-5xl mx-auto">
          Ready to make your next occasion even more special? Choose from our exquisite collection of small cakes and let us add a touch of sweetness to your celebration. With our dedication to quality and beauty, each cake is not just a dessert, it&apos;s an experience.
        </p>
      </div>
    </main>
  );
}