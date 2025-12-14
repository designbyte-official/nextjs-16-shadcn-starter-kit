"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/common/class-names";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "colors", label: "Colors", href: "#colors" },
  { id: "typography", label: "Typography", href: "#typography" },
  { id: "icons", label: "Icons", href: "#icons" },
  { id: "buttons", label: "Buttons", href: "#buttons" },
  { id: "forms", label: "Forms", href: "#forms" },
  { id: "badges", label: "Badges", href: "#badges" },
  { id: "cards", label: "Cards", href: "#cards" },
  { id: "common", label: "Common Components", href: "#common" },
];

export function DesignSystemSidebar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4">
      <div className="space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
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
        })}
      </div>
    </nav>
  );
}

