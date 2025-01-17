"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationlinks } from "./components-data/links-data";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="hidden xl:flex gap-x-8 items-center justify-center h-20">
      {navigationlinks.map((navlink) => (
        <Link
          className={`link hover:text-primary pb-1 ${
            pathname === navlink.url ? "active" : ""
          }`}
          key={navlink.url}
          href={navlink.url}
        >
          {navlink.name}
        </Link>
      ))}
    </div>
  );
}
