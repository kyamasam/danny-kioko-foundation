import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "dbox-widget": HTMLAttributes<HTMLElement> & {
        campaign: string;
        type: string;
        "enable-auto-scroll"?: string;
      };
    }
  }
}
