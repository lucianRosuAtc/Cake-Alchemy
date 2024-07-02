
import { Metadata } from 'next';
import { lusitana } from '@/app/layout';

export const metadata: Metadata = {
  title: 'Small Cakes',
};

export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Small Cakes</h1>

      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">

      </div>

      <div className="mt-5 flex w-full justify-center">

      </div>
    </div>
  );
}