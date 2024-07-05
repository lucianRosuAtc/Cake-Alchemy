'use client'

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation'
import { SideLinks } from '@/components/components-data/links-data'



export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {SideLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm dark:text-black font-medium hover:text-orange-500  dark:hover:text-orange-500 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-green-300 text-orange-500 dark:text-orange-500': pathname === link.href,
              },
            )}
          >

            <LinkIcon className="w-10 h-10 hover:text-orange-500 p-1 border border-gray-300 shadow-inner rounded-md  bg-white" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
