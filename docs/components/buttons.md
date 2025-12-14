# Buttons

Button component variants and sizes from shadcn/ui.

## Usage

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click me</Button>
```

## Variants

- `default`: Primary button style
- `secondary`: Secondary button style
- `outline`: Outlined button style
- `ghost`: Minimal button style
- `link`: Link-style button

## Sizes

- `sm`: Small button
- `default`: Default size
- `lg`: Large button

## With Links

Use the `asChild` prop when wrapping with Next.js `Link`:

```tsx
import Link from "next/link";

<Button variant="outline" asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

## Examples

See the design system overview page for live examples of all button variants and sizes.

