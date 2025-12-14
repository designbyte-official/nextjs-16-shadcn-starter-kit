"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/common/class-names";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  keywords?: string[];
}

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", href: "/design-system", keywords: ["overview", "introduction", "getting started"] },
  { id: "icons", label: "Icons", href: "/design-system/icons", keywords: ["icons", "symbols", "images"] },
  { id: "buttons", label: "Buttons", href: "/design-system/buttons", keywords: ["buttons", "actions", "click"] },
  { id: "common-components", label: "Common Components", href: "/design-system/common-components", keywords: ["common", "shared", "reusable", "components"] },
  { id: "forms", label: "Forms", href: "/design-system/forms", keywords: ["forms", "inputs", "fields", "validation"] },
  { id: "badges", label: "Badges", href: "/design-system/badges", keywords: ["badges", "labels", "tags"] },
];

interface DesignSystemSidebarProps {
  searchQuery?: string;
}

export function DesignSystemSidebar({ searchQuery = "" }: DesignSystemSidebarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Filter items based on search query
  const filteredItems = sidebarItems.filter((item) => {
    if (!searchQuery) {return true;}
    const query = searchQuery.toLowerCase();
    return (
      item.label.toLowerCase().includes(query) ||
      item.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    // Set active section based on current pathname
    const currentSection = sidebarItems.find((item) => item.href === pathname)?.id || "overview";
    // Use setTimeout to defer state update and avoid synchronous setState in effect
    setTimeout(() => {
      setActiveSection(currentSection);
    }, 0);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Let Next.js handle navigation, just update active state
    const item = sidebarItems.find((item) => item.href === href);
    if (item) {
      setActiveSection(item.id);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <nav className="flex-1 space-y-0.5">
        {/* Navigation items */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "block px-3 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })
        ) : (
          <div className="px-3 py-2 text-sm text-muted-foreground">
            No components found
          </div>
        )}
      </nav>
      
      {/* Bottom section with border and home link - full width border */}
      <div className="mt-auto -mx-4 px-4 pt-4 border-t border-border">
        <Link
          href="/"
          className={cn(
            "block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
          )}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
