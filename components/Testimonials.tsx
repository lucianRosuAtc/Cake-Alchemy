import Image from 'next/image'
import { TestimonialData } from './components-data/testimonial-data'
import BounceStars from './BounceStars'


export default function Testimonials() {

    return (
        <div className="flex flex-col items-center justify-center px-4">
            <p className="subtitle flex items-center justify-center w-40 border rounded-full bg-secondary">Testimonials</p>
            <h2 className="flex items-center justify-center">More than 3000 customers loves Cake Alchemy</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto justify-center my-12 md:my-20 px-4'>
                {TestimonialData.map((testimonial) => (
                    <div key={testimonial.id} className="border rounded-xl p-4 max-w-72 h-auto mx-auto">
                        <div className="mb-2">
                            <div className="">
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width="40"
                                        height="40"
                                        className='object-center object-cover h-12 w-12 rounded-full border-4 border-white shadow-lg dark:border-primary/80 mr-2'
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-sm md:text-base font-medium">
                                            {testimonial.name}
                                        </p>
                                        <p className="subtitle2">
                                            {testimonial.title}
                                        </p>
                                    </div>

                                </div>
                                <BounceStars />
                                <p className="subtitle">
                                    {testimonial.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
