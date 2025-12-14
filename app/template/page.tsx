import { LandingTemplate } from "@/components/features/marketing/landing-template";
import { landingTemplateConfig } from "@/config/landing-template.config";
import { generateMetadata as genMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";
import { APP_CONFIG } from "@/config/app";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/seo/json-ld";

// Generate metadata for this page
export const metadata: Metadata = genMetadata({
  title: "Landing Page Template",
  description:
    "A production-ready landing page template built with Next.js, TypeScript, and Tailwind CSS. Customize it for your project.",
  keywords: ["landing page", "template", "starter kit", "next.js"],
});

export default function TemplatePage() {
  // Generate breadcrumb structured data
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: APP_CONFIG.url },
    { name: "Template", url: `${APP_CONFIG.url}/template` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <LandingTemplate config={landingTemplateConfig} />
    </>
  );
}

