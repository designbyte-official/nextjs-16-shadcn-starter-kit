"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { ArrowLeftIcon, SearchIcon } from "@/lib/icons";
import { ROUTES } from "@/constants/routes";
import { DesignSystemSidebar } from "./design-system-sidebar";
import { useState } from "react";

interface DesignSystemLayoutProps {
  children: React.ReactNode;
}

export function DesignSystemLayout({ children }: DesignSystemLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header - Full Width */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="w-full flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left side - Logo/Title */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={ROUTES.HOME}>
                <IconWrapper icon={ArrowLeftIcon} size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="text-xl font-semibold">Design System</h1>
              <p className="text-xs text-muted-foreground">
                Component library and design patterns
              </p>
            </div>
          </div>

          {/* Right side - Search and Auth */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <IconWrapper
                icon={SearchIcon}
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9"
              />
            </div>

            {/* Auth buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href={ROUTES.LOGIN}>Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={ROUTES.REGISTER}>Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Fixed Sidebar */}
        <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-16 lg:w-64 lg:h-[calc(100vh-4rem)] lg:border-r lg:bg-muted/40 lg:shrink-0 lg:flex-col lg:z-40">
          {/* Search for mobile/sidebar */}
          <div className="p-4 border-b lg:hidden">
            <div className="relative">
              <IconWrapper
                icon={SearchIcon}
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Sidebar Navigation - Scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4">
            <DesignSystemSidebar searchQuery={searchQuery} />
          </div>
        </aside>

        {/* Scrollable Main Content with sidebar offset */}
        <main className="flex-1 lg:ml-64 overflow-y-auto bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
