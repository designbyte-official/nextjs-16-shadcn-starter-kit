"use client";

import { IconWrapper } from "@/components/common/icon-wrapper";
import {
  CheckmarkCircleIcon,
  ComputerIcon,
  FileIcon,
  SettingsIcon,
  ShieldIcon,
  StarIcon,
} from "@/lib/icons";

interface TechItem {
  name: string;
  icon: typeof ComputerIcon;
  description?: string;
}

const techStack: TechItem[] = [
  {
    name: "Next.js 16",
    icon: ComputerIcon,
  },
  {
    name: "TypeScript",
    icon: FileIcon,
  },
  {
    name: "Tailwind CSS",
    icon: SettingsIcon,
  },
  {
    name: "shadcn/ui",
    icon: StarIcon,
  },
  {
    name: "Zustand",
    icon: ShieldIcon,
  },
  {
    name: "Zod",
    icon: CheckmarkCircleIcon,
  },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
        >
          <IconWrapper icon={tech.icon} size={32} className="mb-2 text-primary" />
          <span className="text-sm font-medium text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

