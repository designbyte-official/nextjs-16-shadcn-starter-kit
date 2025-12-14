"use client";

import { IconWrapper } from "@/components/common/icon-wrapper";
import { CodeIcon, SettingsIcon, ShieldIcon } from "@/lib/icons";

export function SimpleFeatures() {
  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Built with modern tools and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-card border-border group rounded-2xl border p-8 transition-all hover:border-primary hover:shadow-lg">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
              <IconWrapper icon={CodeIcon} size={24} />
            </div>
            <h3 className="text-foreground mb-3 text-lg font-bold">
              Production Ready
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built with Next.js 16, TypeScript, and best practices. Includes SEO, accessibility, and performance optimizations.
            </p>
          </div>

          <div className="bg-card border-border group rounded-2xl border p-8 transition-all hover:border-primary hover:shadow-lg">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
              <IconWrapper icon={SettingsIcon} size={24} />
            </div>
            <h3 className="text-foreground mb-3 text-lg font-bold">
              Fully Customizable
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uses shadcn/ui components and your existing design system. Consistent colors, typography, and components throughout.
            </p>
          </div>

          <div className="bg-card border-border group rounded-2xl border p-8 transition-all hover:border-primary hover:shadow-lg">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
              <IconWrapper icon={ShieldIcon} size={24} />
            </div>
            <h3 className="text-foreground mb-3 text-lg font-bold">
              Type Safe
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full TypeScript support with proper types throughout. Catch errors at compile time, not runtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

