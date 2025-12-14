"use client";

import { IconWrapper } from "@/components/common/icon-wrapper";
import { CodeIcon, SettingsIcon, ShieldIcon } from "@/lib/icons";

export function SimpleFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern tools and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <IconWrapper icon={CodeIcon} size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Production Ready
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with Next.js 16, TypeScript, and best practices. Includes SEO, accessibility, and performance optimizations.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <IconWrapper icon={SettingsIcon} size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Fully Customizable
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Uses shadcn/ui components and your existing design system. Consistent colors, typography, and components throughout.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <IconWrapper icon={ShieldIcon} size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Type Safe
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full TypeScript support with proper types throughout. Catch errors at compile time, not runtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

