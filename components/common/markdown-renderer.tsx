"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { CodePreview } from "./code-preview";
import { getPreviewComponent } from "./preview-registry";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// MarkdownRenderer - Component to render markdown content with syntax highlighting
// Uses remark-gfm for GitHub flavored markdown
// Uses rehype-highlight for syntax highlighting (client-compatible)
// Uses rehype-slug and rehype-autolink-headings for heading links
// Example: <MarkdownRenderer content={markdownContent} />
export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-slate dark:prose-invert max-w-none w-full ${className || ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor"],
              },
            },
          ],
          rehypeHighlight,
        ]}
        components={{
          h1: ({ ...props }: any) => (
            <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-6 mt-0 pb-4 border-b border-border scroll-mt-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" {...props} />
          ),
          h2: ({ ...props }: any) => (
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4 mt-8 pt-6 border-t border-border first:border-t-0 first:pt-0 scroll-mt-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" {...props} />
          ),
          h3: ({ ...props }: any) => (
            <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3 mt-6 scroll-mt-20" {...props} />
          ),
          h4: ({ ...props }: any) => (
            <h4 className="text-xl font-semibold tracking-tight text-foreground mb-2 mt-5 scroll-mt-20" {...props} />
          ),
          p: ({ ...props }: any) => (
            <p className="mb-4 text-foreground/90 leading-relaxed" {...props} />
          ),
          ul: ({ ...props }: any) => (
            <ul className="list-disc list-outside space-y-2 mb-4 text-foreground ml-6" {...props} />
          ),
          ol: ({ ...props }: any) => (
            <ol className="list-decimal list-outside space-y-2 mb-4 text-foreground ml-6" {...props} />
          ),
          li: ({ ...props }: any) => (
            <li className="mb-1.5 text-foreground/90 leading-relaxed" {...props} />
          ),
          a: ({ ...props }: any) => (
            <a className="text-primary hover:underline font-medium" {...props} />
          ),
          blockquote: ({ ...props }: any) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />
          ),
          hr: ({ ...props }: any) => (
            <hr className="border-border my-8" {...props} />
          ),
          table: ({ ...props }: any) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-border rounded-lg" {...props} />
            </div>
          ),
          th: ({ ...props }: any) => (
            <th className="border border-border p-3 text-left bg-muted font-semibold text-foreground" {...props} />
          ),
          td: ({ ...props }: any) => (
            <td className="border border-border p-3 text-foreground/90" {...props} />
          ),
          strong: ({ ...props }: any) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          em: ({ ...props }: any) => (
            <em className="italic text-foreground/90" {...props} />
          ),
          pre: ({ children, ...props }: any) => {
            // Check if this is a code block with preview
            const codeElement = React.Children.toArray(children).find(
              (child: any) => child?.type === "code"
            ) as any;
            
            if (codeElement?.props?.className) {
              const className = codeElement.props.className;
              const languageMatch = className.match(/language-([^:]+)(:preview)?/);
              
              if (languageMatch && languageMatch[2] === ":preview") {
                // This is a preview code block
                const language = languageMatch[1];
                const code = String(codeElement.props.children || "").trim();
                
                // Try to render a preview from the code
                let preview: React.ReactNode = null;
                
                // Simple JSX parser for common patterns
                if (language === "tsx" || language === "jsx") {
                  // Try to extract component usage and render it
                  const jsxMatch = code.match(/<(\w+)([^>]*)>([\s\S]*?)<\/\1>/);
                  if (jsxMatch) {
                    const componentName = jsxMatch[1];
                    const Component = getPreviewComponent(componentName);
                    
                    if (Component) {
                      // Parse props (simple implementation)
                      const propsString = jsxMatch[2];
                      const props: Record<string, any> = {};
                      
                      // Extract props like variant="default" or size="lg"
                      const propMatches = propsString.matchAll(/(\w+)=["']([^"']+)["']/g);
                      for (const match of propMatches) {
                        props[match[1]] = match[2];
                      }
                      
                      // Extract children
                      const childrenText = jsxMatch[3]?.trim();
                      if (childrenText) {
                        props.children = childrenText;
                      }
                      
                      preview = <Component {...props} />;
                    }
                  }
                }
                
                return (
                  <CodePreview 
                    code={code} 
                    language={language}
                    preview={preview || undefined}
                    className="my-4"
                  />
                );
              }
            }
            
            // Regular code block
            return (
              <pre className="bg-muted border border-border rounded-lg overflow-x-auto my-4 p-4 font-mono text-sm" {...props}>
                {children}
              </pre>
            );
          },
          code: ({ className, children, ...props }: any) => {
            const isInline = !className || !className.includes("language-");
            if (isInline) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
                  {children}
                </code>
              );
            }
            return <code className={className} {...props}>{children}</code>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
