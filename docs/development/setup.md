# Development Setup

## Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn
- Git

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next-web-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=development
   ```

4. **Run development server**

   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

See `PROJECT_STRUCTURE.md` in the root directory for complete folder structure.

## Development Guidelines

### Code Style

- Follow TypeScript strict mode
- Use kebab-case for files and folders
- Use PascalCase for components
- Use camelCase for functions and variables

### Git Workflow

- Create feature branches from `main`
- Write descriptive commit messages
- Submit pull requests for review

### Testing

- Write tests for utilities and hooks
- Test components with React Testing Library
- Maintain test coverage

## Common Issues

### Port Already in Use

If port 3000 is already in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

**Last Updated**: Platform initialization
**Maintained By**: Development Team
