# Mandala Page Development Guide

## Build & Development Commands
- **Development**: `npm run dev` - Starts Next.js development server
- **Build**: `npm run build` - Creates production build
- **Start**: `npm start` - Runs production build locally
- **Lint**: `npm run lint` - Runs ESLint checks

## Code Style Guidelines
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import Button from '@/components/ui/button'`)
- **Formatting**: TypeScript with strict mode enabled
- **Types**: Explicit types for function parameters and returns
- **React Components**: Function components with explicit type definitions using `React.FC<Props>`
- **File Structure**: Place components in appropriate directories (`components/`, `components/ui/`, `components/sections/`)
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for file names
- **Error Handling**: Use try/catch for async operations, provide helpful error messages
- **CSS**: Use Tailwind utility classes, follow responsive design principles
- **State Management**: Use React Context API for global state, prefer local state when possible

## Project Structure
- Components live in `src/components/`
- Pages and routes in `src/app/`
- Utilities in `src/lib/`
- Follow directory structure patterns in existing code