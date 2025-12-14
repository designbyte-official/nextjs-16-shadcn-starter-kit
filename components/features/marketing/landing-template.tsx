"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { CodeIcon, HeroArrowRightIcon, MessageIcon, ShareIcon, SparklesIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Template configuration interface
export interface LandingTemplateConfig {
  // Branding
  brandName: string;
  brandTagline?: string;
  logo?: React.ReactNode;

  // Hero Section
  heroBadge?: string;
  heroTitle: string;
  heroTitleHighlight?: string;
  heroDescription: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  trustBadges?: string[];

  // Features
  features: Array<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }>;

  // How It Works
  howItWorks?: {
    title: string;
    description?: string;
    steps: Array<{
      icon: React.ComponentType<any>;
      step: string;
      title: string;
      description: string;
    }>;
  };

  // Topics/Categories (optional)
  categories?: Array<{
    icon: React.ComponentType<any>;
    label: string;
  }>;

  // Testimonials
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
  }>;

  // FAQ
  faqs?: Array<{
    q: string;
    a: string;
  }>;

  // Footer
  footerDescription?: string;
  footerLinks?: {
    product?: Array<{ label: string; href: string }>;
    company?: Array<{ label: string; href: string }>;
    legal?: Array<{ label: string; href: string }>;
    resources?: Array<{ label: string; href: string }>;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface LandingTemplateProps {
  config: LandingTemplateConfig;
}

export function LandingTemplate({ config }: LandingTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {config.logo && <div className="w-8 h-8">{config.logo}</div>}
            <Link
              href={ROUTES.HOME}
              className="font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {config.brandName}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={ROUTES.LOGIN}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              Login
            </Link>
            <Button asChild size="sm" className="rounded-full">
              <Link href={config.primaryCTA.href}>Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden bg-background border-b border-border">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {config.heroBadge && (
            <Badge
              variant="secondary"
              className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <IconWrapper icon={SparklesIcon} size={14} className="mr-1.5" />
              {config.heroBadge}
            </Badge>
          )}

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {config.heroTitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < config.heroTitle.split("\n").length - 1 && <br />}
              </span>
            ))}
            {config.heroTitleHighlight && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                  {config.heroTitleHighlight}
                </span>
              </>
            )}
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 font-light">
            {config.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              asChild
              size="lg"
              className="h-14 px-10 rounded-full text-lg w-full sm:w-auto shadow-xl shadow-primary/10"
            >
              <Link href={config.primaryCTA.href}>
                {config.primaryCTA.label}
                <HeroArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {config.secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-14 px-10 rounded-full text-lg w-full sm:w-auto bg-background hover:bg-muted"
              >
                <Link href={config.secondaryCTA.href}>
                  {config.secondaryCTA.label}
                </Link>
              </Button>
            )}
          </div>

          {config.trustBadges && config.trustBadges.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground grayscale opacity-70 animate-in fade-in duration-1000 delay-500">
              {config.trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold uppercase tracking-widest"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features / Bento Grid */}
      {config.features && config.features.length > 0 && (
        <section className="px-4 sm:px-6 py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Feature Card */}
              <div className="md:col-span-2 bg-primary rounded-3xl p-10 text-primary-foreground relative overflow-hidden group min-h-[440px] flex flex-col justify-between shadow-2xl shadow-primary/20 ring-1 ring-primary-foreground/10">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">
                    {config.features[0]?.title || "Main Feature"}
                  </h3>
                  <p className="text-primary-foreground/80 max-w-sm text-sm leading-relaxed">
                    {config.features[0]?.description ||
                      "Describe your main feature here."}
                  </p>
                </div>

                {/* Abstract UI representation */}
                <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-background rounded-tl-2xl p-6 shadow-2xl translate-x-12 translate-y-12 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full absolute -top-8 -left-8 blur-2xl opacity-50" />
                  <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <div className="w-1/3 h-4 bg-muted rounded" />
                    <div className="w-8 h-8 rounded-full bg-muted" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-3 bg-muted rounded" />
                    <div className="w-full h-3 bg-muted rounded" />
                    <div className="w-5/6 h-3 bg-muted rounded" />
                    <div className="w-4/6 h-3 bg-muted rounded" />
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mt-6 flex gap-3 items-start">
                      <div className="w-4 h-4 bg-primary rounded-full mt-1 shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="w-full h-2 bg-primary/30 rounded" />
                        <div className="w-2/3 h-2 bg-primary/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards Stack */}
              <div className="flex flex-col gap-6">
                {config.features.slice(1, 3).map((feature, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-card border border-border rounded-3xl p-8 hover:border-primary transition-colors shadow-sm hover:shadow-md group"
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconWrapper icon={feature.icon} size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {config.howItWorks && config.howItWorks.steps.length > 0 && (
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
                The Process
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {config.howItWorks.title}
              </h2>
              {config.howItWorks.description && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {config.howItWorks.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-border via-primary/50 to-border z-0" />

              {config.howItWorks.steps.map((item, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-card rounded-full border border-border flex items-center justify-center mb-6 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-muted text-foreground rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconWrapper icon={item.icon} size={24} />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories/Topics Grid */}
      {config.categories && config.categories.length > 0 && (
        <section className="py-24 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover all the features and categories we offer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 px-4 sm:px-6">
            {config.categories.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all cursor-default group"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <IconWrapper icon={item.icon} size={24} />
                </div>
                <span className="text-sm font-bold text-foreground group-hover:text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {config.testimonials && config.testimonials.length > 0 && (
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Users
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-muted/50 p-8 rounded-2xl border border-border relative"
                >
                  <p className="text-foreground/80 italic mb-6 mt-8 relative z-10 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about our platform.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {config.faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-foreground text-muted-foreground pt-20 pb-10 px-4 sm:px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-background">
              {config.logo && <div className="w-8 h-8">{config.logo}</div>}
              <span className="font-bold tracking-tight text-lg">
                {config.brandName}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {config.footerDescription ||
                "Professional platform built with modern technologies."}
            </p>
            {config.socialLinks && (
              <div className="flex gap-4 pt-2">
                {config.socialLinks.twitter && (
                  <a
                    href={config.socialLinks.twitter}
                    className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <IconWrapper icon={ShareIcon} size={16} />
                  </a>
                )}
                {config.socialLinks.linkedin && (
                  <a
                    href={config.socialLinks.linkedin}
                    className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <IconWrapper icon={MessageIcon} size={16} />
                  </a>
                )}
                {config.socialLinks.github && (
                  <a
                    href={config.socialLinks.github}
                    className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <IconWrapper icon={CodeIcon} size={16} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Footer Links */}
          {config.footerLinks && (
            <>
              {config.footerLinks.product && (
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-background font-bold text-sm tracking-widest uppercase">
                    Product
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {config.footerLinks.product.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {config.footerLinks.company && (
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-background font-bold text-sm tracking-widest uppercase">
                    Company
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {config.footerLinks.company.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {config.footerLinks.legal && (
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-background font-bold text-sm tracking-widest uppercase">
                    Legal
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {config.footerLinks.legal.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {config.footerLinks.resources && (
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-background font-bold text-sm tracking-widest uppercase">
                    Resources
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {config.footerLinks.resources.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} {config.brandName}. All rights
            reserved.
          </div>
          <div className="flex gap-6">
            <span>Made with Next.js & TypeScript</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

