import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danny Kioko Foundation | Contact",
  description:
    "Get in touch with the Danny Kioko Foundation. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden  border-x-2 max-sm:border-x-0">
      <section className="bg-[#f4efe6] text-ink">
        <div className="mx-auto max-w-[1180px] px-8 py-16 max-sm:px-5 max-sm:py-10">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.18em] text-release">
            <span className="h-[3px] w-[42px] bg-release" aria-hidden="true"></span>
            Reach Out
          </p>
          <h1 className="text-[clamp(34px,4.8vw,66px)] font-extrabold uppercase leading-[.9] tracking-normal">
            Contact Us
          </h1>
          <p className="mt-5 max-w-[540px] text-[17px] leading-[1.65] text-black/72 max-sm:text-[15px]">
            Have a question, want to partner with us, or just want to say hello?
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto  max-w-[860px] px-8 py-16 max-sm:px-5 max-sm:py-10">
          <iframe
            src="https://us21.list-manage.com/contact-form?u=fd4a0a1948c79b678f20ed19b&form_id=aab084b9e1bf76f6fe4e2b7e1637c80e"
            title="Contact Form"
            width="100%"
            height="900"
            frameBorder="0"
            scrolling="no"
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
