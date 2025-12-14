import { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}

