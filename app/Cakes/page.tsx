import Image from 'next/image';
import { lusitana } from '../layout';
import { Metadata } from 'next';
import Gallery from '../../components/Gallery';
import { CakeGallery } from "../../components/components-data/gallery-data"

export const metadata: Metadata = {
  title: 'Cakes',
};


export default function Cake() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/BGCake/BGChocolateCakeDark.webp"
        alt="Cake image as background"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-center'
      />

      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Big Cakes
      </h1>

      <div className="mx-6">
        <p className="my-8 mx-auto max-w-5xl">
          Welcome to our cake gallery, where every slice tells a story of craftsmanship and passion. Our cakes are more than just desserts; they are a celebration of flavor, artistry, and the sweet moments in life. From classic vanilla to exotic passion fruit, each cake is crafted with the finest ingredients to ensure a taste that lingers in your memory.
        </p>

        <p className="my-8 mx-auto max-w-5xl">
          Dive into our diverse range of big cakes, each one a testament to our dedication to quality and creativity. Whether you&apos;re looking for something rich and decadent or light and refreshing, our gallery has a cake to suit every taste and occasion.
        </p>

        <Gallery myData={CakeGallery} />

        <p className="my-8 mx-auto max-w-5xl">
          After exploring our gallery, if you feel inspired to create a cake that&apos;s uniquely yours, we&apos;re here to make that happen. Our custom cake service allows you to bring your vision to life, combining your favorite flavors and designs into a cake that&apos;s as unique as your celebration.
        </p>
        <p className="my-8 mx-auto max-w-5xl">
          Whether you&apos;re celebrating a birthday, wedding, or just indulging in a sweet treat, our cakes are designed to make every occasion special. Explore our collection to find the perfect cake that speaks to your heart, or contact us for a custom creation that brings your dream cake to life. Let us be a part of your joyous moments, one delicious slice at a time.
        </p>
      </div>
    </main>
  );
}