# Linting & Formatting Guide

This project uses **ESLint** for linting and **Prettier** for code formatting to maintain consistent code quality and style.

## Setup

### ESLint

- Configured via `eslint.config.mjs`
- Uses Next.js ESLint configs
- Integrates with Prettier
- Includes unused imports plugin

### Prettier

- Configured via `.prettierrc`
- Formats code automatically
- Integrated with ESLint to avoid conflicts

## Scripts

```bash
# Run ESLint
pnpm lint

# Run ESLint and auto-fix issues
pnpm lint:fix

# Format all files with Prettier
pnpm format

# Check if files are formatted correctly
pnpm format:check

# Type check TypeScript
pnpm type-check
```

## ESLint Rules

### Unused Imports

- Automatically removes unused imports
- Warns about unused variables (prefix with `_` to ignore)

### Import Ordering

- Sorts imports automatically
- Groups: external → internal (@/) → relative
- React and Next.js imports come first
- Alphabetical within groups

### TypeScript

- Warns on `any` types
- Strict type checking enabled

### Code Quality

- Requires `const` for variables that aren't reassigned
- Prevents `var` usage
- Warns on console.log (allows console.warn/error)
- Requires strict equality (`===`)

## Prettier Configuration

- **Semicolons**: Enabled
- **Trailing commas**: ES5 compatible
- **Single quotes**: Disabled (uses double quotes)
- **Print width**: 80 characters
- **Tab width**: 2 spaces
- **Arrow parens**: Always

## IDE Setup

### VS Code

Recommended extensions (see `.vscode/extensions.json`):

- ESLint
- Prettier
- Tailwind CSS IntelliSense

Settings (see `.vscode/settings.json`):

- Format on save enabled
- ESLint auto-fix on save
- Prettier as default formatter

## Best Practices

1. **Run lint before committing**

   ```bash
   pnpm lint:fix && pnpm format
   ```

2. **Fix import ordering**
   - Run `pnpm lint:fix` to auto-sort imports

3. **Remove unused imports**
   - ESLint will error on unused imports
   - Run `pnpm lint:fix` to auto-remove

4. **Ignore variables with `_` prefix**
   - Use `_error` or `_unused` for intentionally unused variables

5. **Type safety**
   - Avoid `any` types
   - Use proper TypeScript types

## Pre-commit (Recommended)

Consider adding a pre-commit hook:

```bash
# Install husky (optional)
pnpm add -D husky lint-staged

# Add to package.json
"lint-staged": {
  "*.{ts,tsx,js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

---

**Last Updated**: Linting and formatting setup
**Maintained By**: Development Team
