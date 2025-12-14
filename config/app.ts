import { env } from "./common/env";

// Application configuration - centralized app settings
export const APP_CONFIG = {
  name: "Next.js Starter Kit",
  shortName: "Starter Kit",
  description:
    "A production-ready Next.js starter kit with TypeScript, Tailwind CSS, and shadcn/ui. Fully customizable landing page template and comprehensive design system.",
  url: env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  author: "Starter Kit Team",
  keywords: [
    "next.js",
    "starter kit",
    "template",
    "typescript",
    "tailwind css",
    "shadcn ui",
    "landing page",
    "production ready",
    "react",
    "web development",
  ],
  twitter: "@starterkit",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
} as const;

