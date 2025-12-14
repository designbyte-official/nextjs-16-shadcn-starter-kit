"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconWrapper } from "@/components/common/icon-wrapper";
import { FileIcon, PlayIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  code: string;
  language?: string;
  preview?: React.ReactNode;
  className?: string;
}

// CodePreview - Component to show code with preview/run option
// Example: <CodePreview code={codeString} preview={<ComponentExample />} />
export function CodePreview({ code, language = "tsx", preview, className }: CodePreviewProps) {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">(preview ? "preview" : "code");

  return (
    <div className={cn("border border-border rounded-lg overflow-hidden my-4", className)}>
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "preview" | "code")}>
        <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-muted/50">
          <TabsList className="h-8">
            {preview && (
              <TabsTrigger value="preview" className="text-xs">
                <IconWrapper icon={PlayIcon} size={14} className="mr-1.5" />
                Preview
              </TabsTrigger>
            )}
            <TabsTrigger value="code" className="text-xs">
              <IconWrapper icon={FileIcon} size={14} className="mr-1.5" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        {preview && (
          <TabsContent value="preview" className="m-0 p-6 bg-background">
            <div className="flex items-center justify-center min-h-[200px] w-full">
              {preview}
            </div>
          </TabsContent>
        )}

        <TabsContent value="code" className="m-0">
          <pre className="bg-muted p-4 overflow-x-auto text-sm font-mono m-0">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}

