"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Book {
  id: number;
  title: string;
  short_description: string;
  description?: string;
  price: number;
  sale_price: number;
  cover_page_url: string;
}

interface BookFeatureProps {
  book: Book;
  index: number;
}

export function BookFeature({ book, index }: BookFeatureProps) {
  const isEven = index % 2 === 0;

  return (
    <section className={`${!isEven ? "bg-[#eaf4f0]" : "bg-white"}`}>
      <div
        className={`max-w-[1120px] mx-auto px-6 md:px-8 py-12 md:py-14 ${
          isEven
            ? "grid grid-cols-1 md:grid-cols-[278px_minmax(0,1fr)] gap-8 md:gap-[30px]"
            : "grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_278px] gap-8 md:gap-[30px]"
        }`}
      >
        {/* Book Cover - Left side for even index */}
        {isEven && (
          <div className="shrink-0 flex justify-center md:justify-start">
            <img
              src={book.cover_page_url || "/book-placeholder.png"}
              alt={book.title}
              className="w-[190px] md:w-[220px] object-contain [filter:drop-shadow(0_22px_30px_rgba(22,55,45,0.22))] mx-auto md:mx-0"
            />
          </div>
        )}

        {/* Content with Rich Text Support */}
        <div className="max-w-[815px] mx-auto md:mx-0">
          <h3 className="text-3xl md:text-[40px] font-bold leading-tight mb-6 md:mb-7 text-[#1A1A1A]">
            <span className="relative z-0 [background:linear-gradient(to_top,_rgba(81,159,132,0.36)_0_0.45em,_transparent_0.45em)] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              {book.title}
            </span>
          </h3>

          {/* Rich Text Description */}
          <div
            className="text-[#1f2724] text-base md:text-[17px] leading-relaxed [&_p]:mb-4 [&_ul]:my-1 [&_ul]:md:my-[5px] [&_ul]:ml-4 [&_ul]:md:ml-[11px] [&_ul]:list-none [&_li]:flex [&_li]:gap-2 [&_li]:mb-1 [&_li]:leading-snug [&_li]:md:leading-[1.45] [&_li]:before:content-['·'] [&_li]:before:inline-block"
            dangerouslySetInnerHTML={{
              __html:
                book.short_description ||
                book.description ||
                "<p>A comprehensive guide to entrepreneurship and business success.</p>",
            }}
          />

          {/* Learn More Link */}
          <Link
            href={`/books/${book.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5E4E] hover:text-[#124034] transition-all duration-200 hover:gap-2 mt-6 md:mt-7 mb-6 md:mb-7"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Purchase Options */}
          <div className="flex flex-wrap items-center gap-4 md:gap-[26px]">
            <span className="text-base md:text-[18px] font-bold text-[#1A1A1A] tracking-wide">
              Purchase On:
            </span>
            <a
              href="#"
              className="inline-flex items-center justify-center w-[134px] h-[41px] px-[18px] rounded-sm bg-[#F4C77B] transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            >
              <img
                src="/amazon-logo.png"
                alt="Amazon"
                className="h-7 w-auto brightness-0"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-[134px] h-[41px] px-[18px] rounded-sm bg-[#6fd49a] transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            >
              <img
                src="/nuria-logo.png"
                alt="Nuria"
                className="h-7 w-auto brightness-0"
              />
            </a>
          </div>
        </div>

        {/* Book Cover - Right side for odd index */}
        {!isEven && (
          <div className="shrink-0 flex justify-center md:justify-end order-first md:order-last">
            <img
              src={book.cover_page_url || "/book-placeholder.png"}
              alt={book.title}
              className="w-[190px] md:w-[220px] object-contain [filter:drop-shadow(0_22px_30px_rgba(22,55,45,0.22))] mx-auto md:mx-0"
            />
          </div>
        )}
      </div>
    </section>
  );
}
