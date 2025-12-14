import Link from "next/link";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { HeroArrowRightIcon } from "@/lib/icons";
import {
  CheckmarkCircleIcon,
  Home01Icon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
} from "@/lib/icons";
import { ROUTES } from "@/constants/routes";

interface Feature {
  icon: typeof Home01Icon;
  title: string;
  description: string;
  link?: {
    href: string;
    text: string;
  };
}

const features: Feature[] = [
  {
    icon: Home01Icon,
    title: "Modern Stack",
    description:
      "Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui for a robust foundation.",
  },
  {
    icon: SearchIcon,
    title: "Type-Safe",
    description:
      "Full TypeScript support with strict mode enabled for better code quality and developer experience.",
  },
  {
    icon: SettingsIcon,
    title: "Customizable",
    description:
      "Well-organized codebase with reusable components and clear architecture for easy customization.",
  },
  {
    icon: StarIcon,
    title: "Best Practices",
    description:
      "Includes ESLint, Prettier, and comprehensive documentation following industry standards.",
  },
  {
    icon: ShieldIcon,
    title: "Production Ready",
    description:
      "Optimized for performance, SEO, accessibility, and scalability right out of the box.",
  },
  {
    icon: CheckmarkCircleIcon,
    title: "Design System",
    description:
      "Complete design system with reusable components, icons, and patterns.",
    link: {
      href: ROUTES.DESIGN_SYSTEM,
      text: "Explore",
    },
  },
];

export function FeaturesGrid() {
  return (
    <Section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern tools and best practices for production-ready
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 border rounded-xl hover:shadow-lg transition-all duration-300 bg-card group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <IconWrapper icon={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
                {feature.link && (
                  <>
                    {" "}
                    <Link
                      href={feature.link.href}
                      className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                    >
                      {feature.link.text}{" "}
                      <HeroArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

