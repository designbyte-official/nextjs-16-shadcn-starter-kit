import { DesignSystemLayout } from "@/components/features/design-system/design-system-layout";
import { MarkdownRenderer } from "@/components/common/markdown-renderer";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { join } from "path";

interface DesignSystemPageProps {
  params: Promise<{ slug?: string[] }>;
}

// Map slug to markdown file
const slugToMarkdown: Record<string, string> = {
  icons: "icons", // We'll create this markdown
  buttons: "buttons", // We'll create this markdown
  "common-components": "common-components",
  forms: "forms",
  badges: "badges", // We'll create this markdown
};

async function getDesignSystemContent(slug: string): Promise<string | null> {
  // For overview, return null to show default content
  if (slug === "overview" || !slug) {
    return null;
  }

  const markdownFile = slugToMarkdown[slug];
  if (!markdownFile) {
    return null;
  }

  try {
    const filePath = join(process.cwd(), "docs", "components", `${markdownFile}.md`);
    const content = await readFile(filePath, "utf-8");
    return content;
  } catch {
    return null;
  }
}

export default async function DesignSystemPage({ params }: DesignSystemPageProps) {
  const { slug } = await params;
  const sectionSlug = slug?.[0] || "overview";

  const content = await getDesignSystemContent(sectionSlug);

  // If content is null and it's not overview, show 404
  if (content === null && sectionSlug !== "overview") {
    notFound();
  }

  const title = sectionSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // If it's overview or no content, show the default overview page
  if (sectionSlug === "overview" || !content) {
    const { default: OverviewContent } = await import("../overview-content");
    return (
      <DesignSystemLayout>
        <OverviewContent />
      </DesignSystemLayout>
    );
  }

  // Otherwise render markdown content
  return (
    <DesignSystemLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-4">{title}</h1>
        </div>
        <MarkdownRenderer content={content} />
      </div>
    </DesignSystemLayout>
  );
}

