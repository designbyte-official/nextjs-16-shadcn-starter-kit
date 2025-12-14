"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the platform free to use?",
    a: "Yes, you can access all learning materials, visualizations, and practice problems for free. We may introduce premium features in the future.",
  },
  {
    q: "Do I need prior programming experience?",
    a: "Basic programming knowledge is helpful, but we provide explanations suitable for beginners. Start with our fundamentals section.",
  },
  {
    q: "Can I track my progress?",
    a: "Absolutely! Create an account to track your learning progress, save your solutions, and monitor your improvement over time.",
  },
  {
    q: "Are the problems similar to interview questions?",
    a: "Yes, our problem set includes many questions commonly asked in technical interviews at top tech companies.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our DSA learning platform.
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

