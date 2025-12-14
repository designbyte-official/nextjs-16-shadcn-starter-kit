import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { HeroArrowRightIcon } from "@/lib/icons";
import { StarIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";

export function HeroSection() {
  return (
    <Section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-muted/20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in duration-500">
            <IconWrapper icon={StarIcon} size={16} />
            <span>Production Ready Template</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
            Build Amazing Products
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            A modern, scalable template built with Next.js 16, TypeScript,
            Tailwind CSS, and best practices. Ready to customize for your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" asChild className="w-full sm:w-auto group">
              <Link href={ROUTES.REGISTER}>
                Get Started
                <HeroArrowRightIcon
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href={ROUTES.DESIGN_SYSTEM}>
                View Design System
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto">
              <Link href={ROUTES.FEATURES}>
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

