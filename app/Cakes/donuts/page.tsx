import Image from 'next/image';
import { lusitana } from '@/app/layout';
import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { DonutsGallery } from '@/components/components-data/gallery-data';



export const metadata: Metadata = {
    title: 'Donuts',
};



export default function Donuts() {
    return (
        <main className='my-8 md:my-0'>
            <Image
                src="/img/Muffins/BgMuffinNewCutA.webp"
                alt="Donut image"
                width="1920"
                height="1080"
                className='h-80 md:h-[500px] w-[1920px] object-cover object-top'
            />
            <h1 className={`${lusitana.className} flex items-center justify-center my-8`}>
                Donuts
            </h1>

            <div className="mx-6">
                <p className="my-8 max-w-5xl mx-auto">
                    Step into our enchanting world of donuts, where each donut is a masterpiece of flavor and creativity. Crafted with passion, our donuts are made fresh every day, ensuring a delightful experience with every bite. From the rich and indulgent chocolate glazed to the light and airy sugar dusted, our selection is a celebration of classic and innovative flavors.
                </p>

                <p className="my-8 max-w-5xl mx-auto">
                    Ideal for any time of the day, our donuts are the perfect companion to your morning coffee, a sweet mid-day break, or a decadent after-dinner treat. Discover your favorite from our wide range of flavors, or let yourself be surprised by our seasonal and limited-edition creations that capture the essence of the seasons.
                </p>

                <Gallery myData={DonutsGallery} />

                <p className="my-8 max-w-5xl mx-auto">
                    Craving something truly unique? Our donuts also feature exclusive seasonal and limited-edition flavors that are sure to intrigue and delight your taste buds. Whether it&apos;s the comforting taste of autumnal spices or the refreshing zest of summer fruits, our special selections provide a unique taste adventure for every season.
                </p>

                <p className="my-8 max-w-5xl mx-auto">
                    Unsure of where to start? Visit us in-store for a personalized recommendation from our welcoming staff, or browse our online gallery to find your new favorite donut. With our dedication to excellence in taste and quality, each donut is a culinary work of art, ready to make your day a little sweeter.
                </p>
            </div>
        </main>
    );
}