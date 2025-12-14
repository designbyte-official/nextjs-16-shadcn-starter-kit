"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { ArrowLeftIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";
import { DesignSystemSidebar } from "./design-system-sidebar";

interface DesignSystemLayoutProps {
  children: React.ReactNode;
}

export function DesignSystemLayout({ children }: DesignSystemLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.HOME}>
              <IconWrapper icon={ArrowLeftIcon} size={16} className="mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Design System
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Complete showcase of UI components, icons, and design patterns.
              Use this as a reference for building consistent interfaces.
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <DesignSystemSidebar />
          </aside>

          <main className="flex-1 min-w-0">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}

