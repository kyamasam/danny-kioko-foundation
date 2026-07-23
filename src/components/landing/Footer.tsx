"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1A5E4E] py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap items-start justify-between gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white/70 text-sm font-light">
              Danny Kioko Foundation
            </span>
          </div>
          <p className="text-white/75 text-xs font-light leading-relaxed">
            Restoring hope, supporting vulnerable children and families, and
            building stronger communities through mentorship, outreach, and
            sustainable programs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-1">
            Navigation
          </p>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/safe-space">Safe Space</FooterLink>
          <FooterLink href="/safe-space-gala">Gala 2027</FooterLink>
          <FooterLink href="/events">Events</FooterLink>
          <FooterLink href="/donate">Donate</FooterLink>
        </div>

        <div className="max-w-xs">
          <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-3">
            Support
          </p>
          <p className="text-white/50 text-xs font-light mb-5 leading-relaxed">
            Partner with Danny Kioko Foundation to help create lasting impact in
            communities across the United States and East Africa.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-[#3d9b82] hover:bg-[#5ab39c] text-white text-xs font-semibold tracking-wide px-6 py-2.5 rounded-full transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
      <div className="w-full text-center mt-8 pt-4 border-t border-white/10">
        <p className="text-white/60 text-xs font-light">
          © 2026 Danny Kioko Foundation
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/45 text-xs font-light hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
