import { generateMetadata as genMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { APP_CONFIG } from "@/config/app";
import { JsonLd } from "@/components/seo/json-ld";
import { generateBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { CTASection, FeaturesGrid, HeroSection, TechStack } from "@/components/features/marketing";

// Generate metadata for this page
export const metadata: Metadata = genMetadata({
  title: "Home",
  description: APP_CONFIG.description,
  keywords: [...APP_CONFIG.keywords],
  openGraph: {
    type: "website",
    images: [
      {
        url: `${APP_CONFIG.url}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "DSA Learning Platform",
      },
    ],
  },
});

export default function HomePage() {
  // Generate breadcrumb structured data
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: APP_CONFIG.url },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="min-h-screen flex flex-col">
        <HeroSection />

        <Section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built with Modern Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powered by industry-leading tools and frameworks
              </p>
            </div>
            <TechStack />
          </Container>
        </Section>

        <FeaturesGrid />
        <CTASection />
      </div>
    </>
  );
}
