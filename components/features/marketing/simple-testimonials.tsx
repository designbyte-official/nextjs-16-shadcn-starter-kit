"use client";

import { IconWrapper } from "@/components/common/icon-wrapper";
import { QuoteIcon } from "@/lib/icons";

const testimonials = [
  {
    quote:
      "This starter kit saved me weeks of development time. I had a professional landing page up and running in just a few hours.",
    author: "Alex Chen",
    role: "Full Stack Developer",
  },
  {
    quote:
      "The configuration-based approach is brilliant. No need to understand complex component structures - just edit and deploy.",
    author: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    quote:
      "Best starter kit I've used. Production-ready code, great documentation, and fully customizable. Highly recommend!",
    author: "Mike Rodriguez",
    role: "Startup Founder",
  },
];

export function SimpleTestimonials() {
  return (
    <section className="bg-background border-border border-b px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Trusted by Developers
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            See what developers are saying about our starter kit
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-muted/50 border-border group relative rounded-2xl border p-8 transition-all hover:border-primary hover:shadow-lg"
            >
              <IconWrapper
                icon={QuoteIcon}
                size={40}
                className="text-primary/20 absolute left-6 top-6"
              />
              <p className="text-foreground/80 relative z-10 mb-6 mt-8 italic leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground text-sm font-bold">
                    {t.author}
                  </div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

