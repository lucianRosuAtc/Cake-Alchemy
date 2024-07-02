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
                'bg-green-200 text-orange-500 dark:text-orange-500': pathname === link.href,
              },
            )}
          >
            
            <LinkIcon className="w-6 hover:text-orange-500" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
