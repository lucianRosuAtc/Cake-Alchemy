import Link from 'next/link';
import SideNavLinks from '@/components/SideNavLinks'
import SideLogo from '@/components/SideLogo';
import Image from 'next/image';


export default function SideNav() {
  return (
    <div className="flex  flex-col px-3 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary/80 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          <SideLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <SideNavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block">
            <Image
            src="/img/SideBarBgNoBg.png"
            alt="side bar background"
            width={300}
            height={300}
            />
        </div>

      </div>
    </div>
  );
}
