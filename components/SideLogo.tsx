

import { lusitana } from '@/app/layout';
import { Cake} from 'lucide-react';


export default function SideLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white w-56`}
    >
      <Cake className=" h-12 w-12" />
      <p className="ml-2 text-2xl">Cake Alchemy</p>
    </div>
  );
}
