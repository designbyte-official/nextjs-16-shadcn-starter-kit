"use client";

import { IconWrapper } from "@/components/common/icon-wrapper";
import { BriefcaseIcon, PenIcon, SparklesIcon } from "@/lib/icons";

const steps = [
  {
    icon: BriefcaseIcon,
    step: "01",
    title: "Get Started",
    desc: "Clone the repository and install dependencies. Everything is set up and ready to go.",
  },
  {
    icon: SparklesIcon,
    step: "02",
    title: "Customize",
    desc: "Update content, colors, and components to match your brand and requirements.",
  },
  {
    icon: PenIcon,
    step: "03",
    title: "Deploy",
    desc: "Deploy to your favorite platform and launch your project in minutes.",
  },
];

export function SimpleHowItWorks() {
  return (
    <section className="bg-background border-border border-b px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="bg-muted text-muted-foreground mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            The Process
          </div>
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            From setup to deployment. Build your project quickly with our starter kit.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="border-border via-primary/50 absolute top-12 left-[16%] right-[16%] z-0 hidden h-0.5 bg-gradient-to-r from-border md:block" />

          {steps.map((item, i) => (
            <div
              key={i}
              className="group relative z-10 flex flex-col items-center text-center"
            >
              <div className="bg-card border-border mb-6 flex h-24 w-24 items-center justify-center rounded-full border shadow-sm transition-all group-hover:border-primary group-hover:shadow-lg">
                <div className="bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300">
                  <IconWrapper icon={item.icon} size={24} />
                </div>
              </div>
              <div className="text-primary mb-2 text-xs font-bold">
                STEP {item.step}
              </div>
              <h3 className="text-foreground mb-3 text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

