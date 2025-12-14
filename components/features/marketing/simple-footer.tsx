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
    <footer className="bg-foreground text-muted-foreground pt-20 pb-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3 text-background">
            <span className="font-bold tracking-tight text-lg">
              {APP_CONFIG.name}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            A production-ready Next.js starter kit. Built with modern technologies and best practices.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <IconWrapper icon={TwitterIcon} size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <IconWrapper icon={LinkedInIcon} size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-muted/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <IconWrapper icon={GithubIcon} size={16} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-background font-bold text-sm tracking-widest uppercase">
            Product
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
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

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-background font-bold text-sm tracking-widest uppercase">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
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

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-background font-bold text-sm tracking-widest uppercase">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
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

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-background font-bold text-sm tracking-widest uppercase">
            Resources
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
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

      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
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

