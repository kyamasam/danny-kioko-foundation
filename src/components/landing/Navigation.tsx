"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/safe-space", label: "Safe Space" },
  { href: "/safe-space-gala", label: "Gala 2027" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="relative z-10 flex items-center justify-between gap-3.5 bg-[#f5f2ec] py-0 px-3 h-[63px] sm:px-[18px] sm:h-[68px] md:h-[64px] md:gap-6 md:pl-[36px] md:pr-[16px] text-ink shadow-[0_1px_0_rgba(15,15,15,.08)]"
      aria-label="Primary"
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl whitespace-nowrap font-script leading-none text-[#111]"
        onClick={closeMenu}
      >
        DK Foundation
      </Link>

      {/* Navigation Links - Desktop */}
      <nav
        className={`
          nav-links absolute left-0 right-0 top-[63px] flex-col items-stretch gap-0 border-t border-[#ececec] bg-[#f5f2ec] px-[18px] pb-[18px] pt-2.5 text-[15px] shadow-[0_18px_32px_rgba(0,0,0,.14)]
          sm:top-[68px]
          md:relative md:top-0 md:left-auto md:right-auto md:flex md:flex-row md:items-center md:justify-center md:gap-[clamp(16px,2.5vw,32px)] md:border-0 md:bg-transparent md:p-0 md:text-[clamp(13px,1.1vw,15px)] md:shadow-none md:ml-auto
          ${isMenuOpen ? "flex" : "hidden"}
        `}
        id="siteNav"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative py-3 after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-center after:bg-release after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 md:py-2
                ${isActive ? "text-release after:scale-x-100" : "after:scale-x-0"}
              `}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <Link
        href="/donate"
        className="hidden min-w-[110px] items-center justify-center justify-self-end rounded-full bg-[#111] px-4 text-[14px] font-semibold tracking-wide text-white shadow-navButton transition-opacity hover:opacity-80 sm:inline-flex md:h-[42px] md:min-w-[126px] md:px-[22px]"
      >
        Donate Now
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="menu-button inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[7px] border-0 bg-[#f0f1f5] text-[#121212] md:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="siteNav"
        onClick={toggleMenu}
      >
        <span
          className={`
            block h-0.5 w-5 rounded-sm bg-current transition-transform duration-300
            ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}
          `}
        />
        <span
          className={`
            block h-0.5 w-5 rounded-sm bg-current transition-opacity duration-300
            ${isMenuOpen ? "opacity-0" : ""}
          `}
        />
        <span
          className={`
            block h-0.5 w-5 rounded-sm bg-current transition-transform duration-300
            ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}
          `}
        />
      </button>
    </header>
  );
}
