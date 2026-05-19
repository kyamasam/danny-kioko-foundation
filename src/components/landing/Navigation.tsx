"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-stone-100"
          : "bg-white border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
            alt="JKB"
            className="h-11 w-auto object-contain"
          />
          <span className="font-light text-base tracking-wide text-stone-600 group-hover:text-primary transition-colors">
            Jonathan K Bett
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#books">Books</NavLink>
          <NavLink href="#thoughts">Thoughts</NavLink>
          <NavLink href="#connect">Connect With Me</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="nav-link text-sm font-medium text-stone-600 hover:text-ink transition-colors"
    >
      {children}
    </Link>
  );
}
