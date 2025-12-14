// Landing Page Template Configuration
// This is a starter kit template that can be customized for any project
// Copy this file and modify the values to match your project

import {
  BanknoteIcon,
  BriefcaseIcon,
  CodeIcon,
  FileTextIcon,
  Home01Icon,
  PenIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  UsersIcon,
} from "@/lib/icons";
import type { LandingTemplateConfig } from "@/components/features/marketing/landing-template";

export const landingTemplateConfig: LandingTemplateConfig = {
  // Branding
  brandName: "Your Brand",
  brandTagline: "Your tagline here",
  // logo: <YourLogoComponent />, // Optional: Add your logo component

  // Hero Section
  heroBadge: "Professional Platform",
  heroTitle: "Build Amazing Products\nWith Modern Tools",
  heroTitleHighlight: "Modern Tools",
  heroDescription:
    "A production-ready template built with Next.js, TypeScript, and Tailwind CSS. Customize it to match your brand and start building.",
  primaryCTA: {
    label: "Get Started",
    href: "/register",
  },
  secondaryCTA: {
    label: "Learn More",
    href: "/features",
  },
  trustBadges: ["Trusted by Developers", "Startups", "Enterprises"],

  // Features (at least 3 recommended)
  features: [
    {
      icon: SparklesIcon,
      title: "Main Feature",
      description:
        "Describe your main feature here. This is the primary value proposition of your platform.",
    },
    {
      icon: CodeIcon,
      title: "Feature Two",
      description:
        "Highlight another key feature that sets your platform apart from competitors.",
    },
    {
      icon: SettingsIcon,
      title: "Feature Three",
      description:
        "Add a third feature that complements your main offerings and provides additional value.",
    },
  ],

  // How It Works (optional)
  howItWorks: {
    title: "How It Works",
    description: "Get started in three simple steps.",
    steps: [
      {
        icon: BriefcaseIcon,
        step: "01",
        title: "Step One",
        description: "Describe the first step users need to take.",
      },
      {
        icon: SparklesIcon,
        step: "02",
        title: "Step Two",
        description: "Explain what happens in the second step.",
      },
      {
        icon: PenIcon,
        step: "03",
        title: "Step Three",
        description: "Describe the final step and what users achieve.",
      },
    ],
  },

  // Categories/Topics (optional)
  categories: [
    { icon: BriefcaseIcon, label: "Category 1" },
    { icon: ShieldIcon, label: "Category 2" },
    { icon: CodeIcon, label: "Category 3" },
    { icon: Home01Icon, label: "Category 4" },
    { icon: UsersIcon, label: "Category 5" },
    { icon: BanknoteIcon, label: "Category 6" },
    { icon: FileTextIcon, label: "Category 7" },
    { icon: SettingsIcon, label: "Category 8" },
  ],

  // Testimonials (optional)
  testimonials: [
    {
      quote:
        "This platform has transformed how we work. Highly recommend it to anyone looking for a modern solution.",
      author: "John Doe",
      role: "CEO, Company Name",
    },
    {
      quote:
        "The best investment we've made this year. The features are exactly what we needed.",
      author: "Jane Smith",
      role: "CTO, Another Company",
    },
    {
      quote:
        "Outstanding platform with excellent support. Couldn't be happier with our choice.",
      author: "Bob Johnson",
      role: "Founder, Startup Inc",
    },
  ],

  // FAQ (optional)
  faqs: [
    {
      q: "Is the platform free to use?",
      a: "Yes, we offer a free tier with basic features. Premium plans are available for advanced functionality.",
    },
    {
      q: "How do I get started?",
      a: "Simply sign up for an account and follow our onboarding guide. You'll be up and running in minutes.",
    },
    {
      q: "Can I customize the platform?",
      a: "Absolutely! Our platform is highly customizable to match your brand and workflow needs.",
    },
    {
      q: "What kind of support do you offer?",
      a: "We provide email support for all users, with priority support available for premium plans.",
    },
  ],

  // Footer
  footerDescription:
    "Professional platform built with modern technologies. Secure, fast, and scalable.",
  footerLinks: {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    resources: [
      { label: "Help Center", href: "/help" },
      { label: "API Docs", href: "/api-docs" },
      { label: "Community", href: "/community" },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
    github: "https://github.com/yourbrand",
  },
};

