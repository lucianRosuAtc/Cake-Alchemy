

import ContactForm from "@/components/ContactForm";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid pt-12 mb-6 xl:mb-16">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mx-auto gap-x-4 text-primary text-lg lg:text-2xl mb-4">
            Cake Alchemy
          </div>

          <div className="text-center">
            <h1 className="my-4 mx-auto mb-20">Get in Touch</h1>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="grid">
          
              <p className="max-w-[600px] md:mr-6">
              At Cake Alchemy, we create exquisite cakes, muffins, and donuts that delight both the eyes and taste buds. Using the finest ingredients and innovative techniques, we ensure every bite is unforgettable. Whether for a special occasion or a treat for yourself, our creations bring joy and satisfaction to every customer.
</p>

              <div className="flex flex-col my-8 md:my-0 gap-y-6 xl:gap-y-8 xl:text-lg">
                <div className="flex items-center gap-x-8 ">
                  <MailIcon size={18} className="text-primary" />
                  <a
                    href="mailto:vigilent.developer@gmail.com"
                    className="hover:text-primary"
                  >
                    cake.alchemy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-x-8">
                  <HomeIcon size={18} className="text-primary" />
                  <div className="">Exeter, UK</div>
                </div>
                <div className="flex items-center gap-x-8">
                  <PhoneCall size={18} className="text-primary" />
                  <a href="tel:07505xxxxxx" className="hover:text-primary">
                    07505700000
                  </a>
                </div>
              </div>
            </div>

            {/* the Contact form under this comment */}
            <div className="mt-10 md:mt-0 md:w-1/2 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
