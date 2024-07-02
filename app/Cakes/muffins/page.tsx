import Image from 'next/image';
import { lusitana } from '@/app/layout';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';


export const metadata: Metadata = {
  title: 'Muffins',
};



export default function Muffins() {
  return (
    <main className='my-8 md:my-0'>
      <Image
        src="/img/BGCake/BigCakeHero.png"
        alt="Cake image as background"
        width="1920"
        height="1080"
        className='h-80 md:h-[500px] w-[1920px] object-cover object-top'
      />
      <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
        Muffins
      </h1>

      <div className="mx-6 md:mx-0">
        <p className="my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus incidunt ipsam quaerat commodi? Voluptas maxime fugiat repellendus, labore ab explicabo ratione excepturi quis, quisquam repudiandae vero doloribus, eaque eos ea sit? Consequuntur culpa explicabo, magnam earum eaque molestias aliquam numquam vel, sint accusantium consectetur omnis voluptate? Soluta fugiat possimus fuga et, illum obcaecati! Quasi sequi maiores qui, eligendi aperiam repudiandae.
        </p>

        <Gallery />

        <p className="my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus incidunt ipsam quaerat commodi? Voluptas maxime fugiat repellendus, labore ab explicabo ratione excepturi quis, quisquam repudiandae vero doloribus, eaque eos ea sit? Consequuntur culpa explicabo, magnam earum eaque molestias aliquam numquam vel, sint accusantium consectetur omnis voluptate? Soluta fugiat possimus fuga et, illum obcaecati! Quasi sequi maiores qui, eligendi aperiam repudiandae.
        </p>
      </div>
    </main>
  );
}