"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/common/class-names";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  keywords?: string[];
}

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", href: "#overview", keywords: ["overview", "introduction", "getting started"] },
  { id: "colors", label: "Colors", href: "#colors", keywords: ["colors", "palette", "theme"] },
  { id: "typography", label: "Typography", href: "#typography", keywords: ["typography", "fonts", "text"] },
  { id: "icons", label: "Icons", href: "#icons", keywords: ["icons", "symbols", "images"] },
  { id: "buttons", label: "Buttons", href: "#buttons", keywords: ["buttons", "actions", "click"] },
  { id: "forms", label: "Forms", href: "#forms", keywords: ["forms", "inputs", "fields", "validation"] },
  { id: "badges", label: "Badges", href: "#badges", keywords: ["badges", "labels", "tags"] },
  { id: "cards", label: "Cards", href: "#cards", keywords: ["cards", "containers", "boxes"] },
  { id: "common", label: "Common Components", href: "#common", keywords: ["common", "shared", "reusable", "components"] },
];

interface DesignSystemSidebarProps {
  searchQuery?: string;
}

export function DesignSystemSidebar({ searchQuery = "" }: DesignSystemSidebarProps) {
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
    const handleScroll = () => {
      const sections = sidebarItems.map((item) => item.id);
      // Get the main content scroll position (not window scroll)
      const mainContent = document.querySelector("main");
      if (!mainContent) {
        // Fallback to window scroll if main not found
        const scrollPosition = window.scrollY + 100;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
        return;
      }
      
      const scrollPosition = mainContent.scrollTop + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (sectionTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Try main content first, fallback to window
    const mainContent = document.querySelector("main");
    const scrollContainer = mainContent || window;
    
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (!element) {return;}
    
    const mainContent = document.querySelector("main");
    const headerOffset = 80;
    
    if (mainContent) {
      // Scroll within main content
      const elementPosition = element.getBoundingClientRect().top;
      const mainContentScrollTop = mainContent.scrollTop;
      const offsetPosition = elementPosition + mainContentScrollTop - headerOffset;

      mainContent.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    } else {
      // Fallback to window scroll
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="space-y-1">
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
  );
}
