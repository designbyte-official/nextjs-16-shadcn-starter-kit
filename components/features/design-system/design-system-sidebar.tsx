"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/common/class-names";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  keywords?: string[];
  indent?: boolean; // For sub-items
  separator?: boolean; // For visual separators
}

const sidebarItems: SidebarItem[] = [
  // Overview
  { id: "overview", label: "Overview", href: "/design-system", keywords: ["overview", "introduction", "getting started"] },
  
  // Foundations
  { id: "icons", label: "Icons", href: "/design-system/icons", keywords: ["icons", "symbols", "images"] },
  { id: "buttons", label: "Buttons", href: "/design-system/buttons", keywords: ["buttons", "actions", "click"] },
  { id: "badges", label: "Badges", href: "/design-system/badges", keywords: ["badges", "labels", "tags"] },
  
  // Common Components - Overview
  { id: "common-components", label: "Common Components", href: "/design-system/common-components", keywords: ["common", "shared", "reusable", "components"], separator: true },
  
  // Common Components - Individual
  { id: "container", label: "Container", href: "/design-system/container", keywords: ["container", "wrapper", "layout"], indent: true },
  { id: "section", label: "Section", href: "/design-system/section", keywords: ["section", "spacing", "layout"], indent: true },
  { id: "page-header", label: "PageHeader", href: "/design-system/page-header", keywords: ["header", "title", "page"], indent: true },
  { id: "empty-state", label: "EmptyState", href: "/design-system/empty-state", keywords: ["empty", "state", "no data"], indent: true },
  { id: "icon-wrapper", label: "IconWrapper", href: "/design-system/icon-wrapper", keywords: ["icon", "wrapper", "sizing"], indent: true },
  { id: "card-wrapper", label: "CardWrapper", href: "/design-system/card-wrapper", keywords: ["card", "wrapper", "layout"], indent: true },
  { id: "adaptive-wrapper", label: "AdaptiveWrapper", href: "/design-system/adaptive-wrapper", keywords: ["adaptive", "responsive", "mobile"], indent: true },
  { id: "loading-spinner", label: "LoadingSpinner", href: "/design-system/loading-spinner", keywords: ["loading", "spinner", "loader"], indent: true },
  { id: "error-message", label: "ErrorMessage", href: "/design-system/error-message", keywords: ["error", "message", "alert"], indent: true },
  { id: "success-message", label: "SuccessMessage", href: "/design-system/success-message", keywords: ["success", "message", "alert"], indent: true },
  
  // Forms - Overview
  { id: "forms", label: "Forms", href: "/design-system/forms", keywords: ["forms", "inputs", "fields", "validation"], separator: true },
  
  // Forms - Individual
  { id: "form", label: "Form", href: "/design-system/form", keywords: ["form", "wrapper", "react-hook-form"], indent: true },
  { id: "form-field", label: "FormField", href: "/design-system/form-field", keywords: ["form", "field", "base"], indent: true },
  { id: "input-field", label: "InputField", href: "/design-system/input-field", keywords: ["input", "text", "field"], indent: true },
  { id: "textarea-field", label: "TextareaField", href: "/design-system/textarea-field", keywords: ["textarea", "multiline", "field"], indent: true },
  { id: "select-field", label: "SelectField", href: "/design-system/select-field", keywords: ["select", "dropdown", "field"], indent: true },
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
      {/* Scrollable navigation content */}
      <nav className="flex-1 overflow-y-auto space-y-0.5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const showSeparator = item.separator && index > 0;
            
            return (
              <React.Fragment key={item.id}>
                {showSeparator && (
                  <div className="my-2 border-t border-border" />
                )}
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md transition-colors",
                    item.indent && "pl-6",
                    isActive
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            );
          })
        ) : (
          <div className="px-3 py-2 text-sm text-muted-foreground">
            No components found
          </div>
        )}
      </nav>
      
      {/* Fixed bottom section with border and home link */}
      <div className="flex-shrink-0 border-t border-border pt-3 pb-3">
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
