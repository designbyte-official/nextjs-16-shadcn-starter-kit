"use client";

import Link from "next/link";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { CodeIcon, MessageIcon, ShareIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";
import { APP_CONFIG } from "@/config/app";

const footerLinks = {
  product: [
    { label: "Features", href: ROUTES.FEATURES },
    { label: "Pricing", href: ROUTES.PRICING },
    { label: "Design System", href: ROUTES.DESIGN_SYSTEM },
  ],
  company: [
    { label: "About", href: ROUTES.ABOUT },
    { label: "Blog", href: ROUTES.BLOG },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: ROUTES.DOCS },
    { label: "Design System", href: ROUTES.DESIGN_SYSTEM },
    { label: "Support", href: "#" },
  ],
};

const TwitterIcon = ShareIcon;
const LinkedInIcon = MessageIcon;
const GithubIcon = CodeIcon;

export function SimpleFooter() {
  return (
    <footer className="bg-foreground text-muted-foreground border-border border-t px-4 pb-10 pt-20 sm:px-6">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
        {/* Brand Column */}
        <div className="space-y-6 md:col-span-4">
          <div className="text-background flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight">
              {APP_CONFIG.name}
            </span>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            A production-ready Next.js starter kit. Built with modern technologies and best practices.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <IconWrapper icon={TwitterIcon} size={16} />
            </a>
            <a
              href="#"
              className="bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <IconWrapper icon={LinkedInIcon} size={16} />
            </a>
            <a
              href="#"
              className="bg-muted/20 hover:bg-primary hover:text-primary-foreground rounded-full p-2 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <IconWrapper icon={GithubIcon} size={16} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="space-y-4 md:col-span-2">
          <h4 className="text-background text-sm font-bold uppercase tracking-widest">
            Product
          </h4>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {footerLinks.product.map((link, i) => (
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

        <div className="space-y-4 md:col-span-2">
          <h4 className="text-background text-sm font-bold uppercase tracking-widest">
            Company
          </h4>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {footerLinks.company.map((link, i) => (
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

        <div className="space-y-4 md:col-span-2">
          <h4 className="text-background text-sm font-bold uppercase tracking-widest">
            Legal
          </h4>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {footerLinks.legal.map((link, i) => (
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

        <div className="space-y-4 md:col-span-2">
          <h4 className="text-background text-sm font-bold uppercase tracking-widest">
            Resources
          </h4>
          <ul className="text-muted-foreground space-y-3 text-sm">
            {footerLinks.resources.map((link, i) => (
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
      </div>

      <div className="border-border mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-xs font-medium text-muted-foreground md:flex-row">
        <div>
          &copy; {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span>Made with Next.js & TypeScript</span>
        </div>
      </div>
    </footer>
  );
}

