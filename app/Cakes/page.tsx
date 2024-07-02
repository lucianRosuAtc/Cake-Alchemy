import Image from 'next/image';
import { lusitana } from '../layout';
import { Metadata } from 'next';
import Gallery from '../../components/Gallery';


export const metadata: Metadata = {
  title: 'Cakes',
};



export default function Cake() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/BGCake/BigCakeHero.webp"
        alt="Cake image as background"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-top'
      />
      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Big Cakes
      </h1>

      <div className="mx-6">
      <p className="my-8">
          Welcome to our cake gallery, where every slice tells a story of craftsmanship and passion. Our cakes are more than just desserts; they are a celebration of flavor, artistry, and the sweet moments in life. From classic vanilla to exotic passion fruit, each cake is crafted with the finest ingredients to ensure a taste that lingers in your memory.
        </p>

        <Gallery />

        <p className="my-8">
          Whether you&apos;re celebrating a birthday, wedding, or just indulging in a sweet treat, our cakes are designed to make every occasion special. Explore our collection to find the perfect cake that speaks to your heart, or contact us for a custom creation that brings your dream cake to life. Let us be a part of your joyous moments, one delicious slice at a time.
        </p>
      </div>
    </main>
  );
}