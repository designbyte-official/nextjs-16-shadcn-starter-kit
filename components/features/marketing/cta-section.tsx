import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { HeroArrowRightIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";

export function CTASection() {
  return (
    <Section className="bg-gradient-to-b from-muted/50 to-background py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-10 text-xl">
            Start building your next project with this production-ready template.
            Customize it to fit your needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="group w-full shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all sm:w-auto"
            >
              <Link href={ROUTES.REGISTER}>
                Get Started
                <HeroArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full hover:bg-muted transition-all sm:w-auto"
            >
              <Link href={ROUTES.DESIGN_SYSTEM}>View Design System</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

