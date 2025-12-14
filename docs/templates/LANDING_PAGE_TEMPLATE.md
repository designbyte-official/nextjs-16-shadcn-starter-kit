# Landing Page Template - Starter Kit

This is a production-ready, customizable landing page template that can be used as a starter kit for any project.

## Overview

The landing page template is a fully configurable component that includes:

- **Navigation Bar** - Fixed header with branding and auth buttons
- **Hero Section** - Eye-catching hero with grid background, badge, and CTAs
- **Features Section** - Bento grid layout showcasing main features
- **How It Works** - Step-by-step process visualization
- **Categories Grid** - Display categories/topics with icons
- **Testimonials** - Social proof section
- **FAQ Section** - Accordion-based FAQ
- **Footer** - Comprehensive footer with links and social media

## Usage

### Basic Usage

1. **Import the template and config:**

```tsx
import { LandingTemplate } from "@/components/features/marketing/landing-template";
import { landingTemplateConfig } from "@/config/landing-template.config";
```

2. **Use in your page:**

```tsx
export default function HomePage() {
  return <LandingTemplate config={landingTemplateConfig} />;
}
```

### Customization

Edit `config/landing-template.config.ts` to customize:

- **Branding**: Brand name, tagline, logo
- **Hero Section**: Title, description, CTAs, trust badges
- **Features**: Add/edit feature cards with icons
- **How It Works**: Customize steps and descriptions
- **Categories**: Add/remove category items
- **Testimonials**: Update testimonials
- **FAQ**: Modify questions and answers
- **Footer**: Update links and social media

### Example Customization

```tsx
// config/landing-template.config.ts
export const landingTemplateConfig: LandingTemplateConfig = {
  brandName: "My Awesome Product",
  heroTitle: "Transform Your Workflow\nWith AI-Powered Tools",
  heroTitleHighlight: "AI-Powered Tools",
  heroDescription: "The best platform for managing your projects...",
  // ... customize other sections
};
```

## Configuration Options

### Required Fields

- `brandName`: Your brand/product name
- `heroTitle`: Main headline (can include `\n` for line breaks)
- `heroDescription`: Hero section description
- `primaryCTA`: Primary call-to-action button
- `features`: Array of at least 3 features

### Optional Fields

All other fields are optional and can be omitted if not needed:

- `heroBadge`: Badge text above hero title
- `heroTitleHighlight`: Highlighted portion of title
- `secondaryCTA`: Secondary button
- `trustBadges`: Trust indicators
- `howItWorks`: Step-by-step process
- `categories`: Category grid items
- `testimonials`: Testimonial cards
- `faqs`: FAQ items
- `footerLinks`: Footer navigation links
- `socialLinks`: Social media links

## Icons

The template uses icons from our icon registry. Available icons include:

- `SparklesIcon`, `BriefcaseIcon`, `CodeIcon`, `PenIcon`
- `SettingsIcon`, `FileTextIcon`, `UsersIcon`, `BanknoteIcon`
- `Home01Icon`, `ShieldIcon`, and many more

See `lib/icons/icon-registry.ts` for the full list.

## Styling

The template uses our design system:

- **Colors**: Uses CSS variables from `globals.css`
- **Components**: Built with shadcn/ui components
- **Responsive**: Mobile-first responsive design
- **Animations**: Tailwind `animate-in` classes

## File Structure

```
components/features/marketing/
  └── landing-template.tsx      # Main template component

config/
  └── landing-template.config.ts # Configuration file

app/
  └── template/
      └── page.tsx               # Example usage page
```

## Best Practices

1. **Keep it focused**: Don't overwhelm users with too many features
2. **Clear CTAs**: Make your primary action obvious
3. **Social proof**: Include testimonials if available
4. **Mobile-first**: Test on mobile devices
5. **Performance**: Optimize images and assets
6. **SEO**: Update metadata in page.tsx

## Next Steps

1. Customize the config file with your content
2. Add your logo component (optional)
3. Update routes in `constants/routes.ts`
4. Customize colors in `globals.css` if needed
5. Add your own images/illustrations
6. Test on different devices
7. Deploy!

## Support

For questions or issues, refer to:
- Design System: `/design-system`
- Component Documentation: `/docs/components`
- Project Structure: `PROJECT_STRUCTURE.md`

