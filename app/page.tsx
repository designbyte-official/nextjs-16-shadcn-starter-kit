import type { Metadata } from "next"
import Link from "next/link"
import { ROUTES } from "@/constants/routes"

import { APP_CONFIG } from "@/config/app"
import { generateBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { generateMetadata as genMetadata } from "@/lib/seo/metadata"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/features/marketing/cta-section"
import { SimpleFAQ } from "@/components/features/marketing/simple-faq"
import { SimpleFeatures } from "@/components/features/marketing/simple-features"
import { SimpleFooter } from "@/components/features/marketing/simple-footer"
import { SimpleHowItWorks } from "@/components/features/marketing/simple-how-it-works"
import { SimpleTestimonials } from "@/components/features/marketing/simple-testimonials"
import { JsonLd } from "@/components/seo/json-ld"

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
        alt: APP_CONFIG.name,
      },
    ],
  },
})

export default function HomePage() {
  // Generate breadcrumb structured data
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: APP_CONFIG.url },
  ])

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="flex min-h-screen flex-col">
        {/* Navigation */}
        <nav className="bg-background/90 border-border fixed top-0 z-50 w-full border-b backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
            <Link
              href={ROUTES.HOME}
              className="text-foreground hover:text-primary text-xl font-bold tracking-tight transition-colors"
            >
              {APP_CONFIG.name}
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href={ROUTES.LOGIN}
                className="text-muted-foreground hover:text-foreground hidden text-sm font-semibold transition-colors md:block"
              >
                Login
              </Link>
              <Button asChild size="sm" className="rounded-full">
                <Link href={ROUTES.REGISTER}>Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-background border-border relative overflow-hidden border-b px-4 pt-32 pb-24 sm:px-6">
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-foreground mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl">
              Build Your Next
              <br />
              <span className="from-primary to-foreground bg-gradient-to-r bg-clip-text text-transparent">
                Project Faster
              </span>
            </h1>

            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
              A production-ready Next.js starter kit with TypeScript, Tailwind
              CSS, and everything you need to launch quickly.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-10 text-lg"
              >
                <Link href={ROUTES.REGISTER}>Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-14 rounded-full px-10 text-lg"
              >
                <Link href={ROUTES.DESIGN_SYSTEM}>View Design System</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <SimpleFeatures />

        {/* How It Works Section */}
        <SimpleHowItWorks />

        {/* Testimonials Section */}
        <SimpleTestimonials />

        {/* FAQ Section */}
        <SimpleFAQ />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <SimpleFooter />
      </div>
    </>
  )
}
