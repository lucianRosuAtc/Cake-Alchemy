

import { lusitana } from '@/app/layout';


export default function SideLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center leading-none text-white w-56`}
    >
      <p className="flex justify-center text-2xl lg:text-3xl">Cake Alchemy</p>
    </div>
  );
}
