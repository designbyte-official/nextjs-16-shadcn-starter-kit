# DSA Learning Platform

An interactive Data Structures and Algorithms learning platform built with Next.js 16, featuring algorithm visualizers, comprehensive curriculum, and AI-powered tutoring.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📁 Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed folder structure documentation.

See [AI_REFERENCE.md](./AI_REFERENCE.md) for AI assistant guidelines and conventions.

See [docs/](./docs/) for platform documentation.

## 📚 Documentation

All platform documentation is organized in the `docs/` folder:

- `docs/platform/` - Platform overview, features, and architecture
- `docs/development/` - Development setup and guidelines
- `docs/api/` - API documentation
- `docs/user-guide/` - User-facing documentation

## 🎨 Design System

Visit `/design-system` to see all UI components, icons, and design patterns in action.

## 🏗️ Key Features

- **Next.js 16** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Zustand** for state management
- **Zod** for validation
- **Production-ready** folder structure with common subfolders

## 📦 Tech Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Validation**: Zod
- **Testing**: Jest, React Testing Library

## 📝 Naming Conventions

- **Files & Folders**: kebab-case (`login-form.tsx`, `use-auth.ts`)
- **Components**: PascalCase (`LoginForm`)
- **Functions/Variables**: camelCase (`handleSubmit`, `userData`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types**: PascalCase (`User`, `ApiResponse`)

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 📚 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Complete project structure guide
- [AI_REFERENCE.md](./AI_REFERENCE.md) - AI assistant reference guide

## 🧪 Testing

Test files follow the same structure as source files and use `.test.ts` or `.test.tsx` suffix.

```bash
# Run tests (when configured)
pnpm test
```

## 🎯 Common Folders Pattern

Many directories use a `common/` subfolder for shared utilities:
- `lib/common/` - Common library utilities
- `services/common/` - Common service patterns
- `types/common/` - Common type definitions
- `utils/common/` - Common utility functions
- `hooks/common/` - Common hooks
- `components/common/` - Common components
- `constants/common/` - Common constants
- `config/common/` - Common configuration

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
- [Zod Documentation](https://zod.dev)
