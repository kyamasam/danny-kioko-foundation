"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-stone-100"
            : "bg-white border-b border-stone-100",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
              alt="JKB"
              className="h-9 sm:h-11 w-auto object-contain"
            />
            <span className="font-light text-sm sm:text-base tracking-wide text-stone-600 group-hover:text-primary transition-colors">
              Jonathan K Bett
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <NavLink href="#about" onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink href="#books" onClick={handleLinkClick}>
              Books
            </NavLink>
            <NavLink href="#thoughts" onClick={handleLinkClick}>
              Thoughts
            </NavLink>
            <NavLink href="#connect" onClick={handleLinkClick}>
              Connect With Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-stone-600 hover:bg-stone-100 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-8">
          <MobileNavLink href="#about" onClick={handleLinkClick}>
            About
          </MobileNavLink>
          <MobileNavLink href="#books" onClick={handleLinkClick}>
            Books
          </MobileNavLink>
          <MobileNavLink href="#thoughts" onClick={handleLinkClick}>
            Thoughts
          </MobileNavLink>
          <MobileNavLink href="#connect" onClick={handleLinkClick}>
            Connect With Me
          </MobileNavLink>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="nav-link text-sm font-medium text-stone-600 hover:text-ink transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl font-light text-stone-600 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}
