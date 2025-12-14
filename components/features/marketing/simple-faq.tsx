"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why should I use this starter kit?",
    a: "This starter kit saves you weeks of development time. It's production-ready, fully customizable, type-safe, and follows best practices. Perfect for startups, agencies, or anyone who needs a professional landing page quickly.",
  },
  {
    q: "How do I customize it for my project?",
    a: "Simply edit the content directly in the page components. All sections are modular and easy to customize. Update text, colors, and components to match your brand.",
  },
  {
    q: "What technologies does it use?",
    a: "Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. It uses your existing design system and is fully integrated with your project structure.",
  },
  {
    q: "Is it mobile responsive?",
    a: "Yes! The template is fully responsive and mobile-first. All sections adapt beautifully to different screen sizes, from mobile phones to large desktop displays.",
  },
  {
    q: "Can I add or remove sections?",
    a: "Absolutely! All sections are modular. Simply add or remove components as needed. The structure is flexible and easy to extend.",
  },
  {
    q: "Does it include SEO optimization?",
    a: "Yes! The template includes proper metadata, structured data (JSON-LD), and semantic HTML. Just update the metadata in your page component.",
  },
];

export function SimpleFAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our starter kit.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
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
  );
}

