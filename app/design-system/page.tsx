"use client";

/**
 * Design System Page
 * 
 * Centralized showcase of all UI components, icons, and design patterns.
 * This replaces scattered example files.
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconWrapper } from "@/components/common/icon-wrapper";
import {
  Home01Icon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  HeroHomeIcon,
  HeroSearchIcon,
  HeroUserIcon,
} from "@/lib/icons";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Design System</h1>
          <p className="text-muted-foreground">
            Complete showcase of UI components, icons, and design patterns for the DSA Learning Platform.
          </p>
        </div>

        {/* Icons Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Icons</h2>
            <p className="text-muted-foreground mb-4">
              Icon library using Huge Icons (primary) and Hero Icons (secondary).
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Huge Icons - Direct Usage</CardTitle>
              <CardDescription>
                Icons imported directly from the icon registry with custom sizes and colors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center flex-wrap">
                <Home01Icon size={24} className="text-blue-500" />
                <SearchIcon size={24} className="text-green-500" />
                <UserIcon size={24} className="text-purple-500" />
                <SettingsIcon size={32} className="text-orange-500" />
                <SunIcon size={24} className="text-yellow-500" />
                <MoonIcon size={24} className="text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Huge Icons - With IconWrapper (Preset Sizes)</CardTitle>
              <CardDescription>
                Using IconWrapper for consistent sizing with preset size options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center flex-wrap">
                <IconWrapper icon={Home01Icon} size="xs" className="text-blue-500" />
                <IconWrapper icon={SearchIcon} size="sm" className="text-green-500" />
                <IconWrapper icon={UserIcon} size="md" className="text-purple-500" />
                <IconWrapper icon={SettingsIcon} size="lg" className="text-orange-500" />
                <IconWrapper icon={SunIcon} size="xl" className="text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hero Icons</CardTitle>
              <CardDescription>
                Alternative icon library with "Hero" prefix.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center flex-wrap">
                <HeroHomeIcon className="w-6 h-6 text-blue-500" />
                <HeroSearchIcon className="w-6 h-6 text-green-500" />
                <HeroUserIcon className="w-6 h-6 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Icon Sizes</CardTitle>
              <CardDescription>
                Available preset sizes: xs (16px), sm (20px), md (24px), lg (32px), xl (40px)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-end">
                <div className="flex flex-col items-center gap-2">
                  <Home01Icon size={16} />
                  <span className="text-xs text-muted-foreground">xs (16px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home01Icon size={20} />
                  <span className="text-xs text-muted-foreground">sm (20px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home01Icon size={24} />
                  <span className="text-xs text-muted-foreground">md (24px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home01Icon size={32} />
                  <span className="text-xs text-muted-foreground">lg (32px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home01Icon size={40} />
                  <span className="text-xs text-muted-foreground">xl (40px)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Buttons Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
            <p className="text-muted-foreground mb-4">
              Button component variants and sizes.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Form Elements Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Form Elements</h2>
            <p className="text-muted-foreground mb-4">
              Input fields, labels, and form controls.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="example-input">Example Input</Label>
                <Input id="example-input" placeholder="Enter text..." />
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Badges Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Badges</h2>
            <p className="text-muted-foreground mb-4">
              Badge component variants.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

