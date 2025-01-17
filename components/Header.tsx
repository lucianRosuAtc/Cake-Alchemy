"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();


  return (
    <header className={`py-4 bg-white shadow-lg dark:bg-[#212124] sticky top-0 z-30 transition-all ${pathname === "/"}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <NavBar />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
