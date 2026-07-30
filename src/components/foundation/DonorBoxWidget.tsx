"use client";

import Script from "next/script";

export function DonorBoxWidget() {
  return (
    <>
      <Script
        src="https://donorbox.org/widgets.js"
        strategy="lazyOnload"
        type="module"
      />
      <dbox-widget
        className="block w-full"
        campaign="bless-a-child-1"
        type="donation_form"
        enable-auto-scroll="true"
      />
    </>
  );
}
