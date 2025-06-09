# Tech Stack

React 19, TypeScript, CSS Modules, **React Router v7 only** (do not use any other versions), OpenProps, React Hook Form, Radix-UI, lucide-react, Recharts.

## CSS Modules

- Any time you add or modify a CSS-Module or global style file, you **must** import it in the associated component (or in your root entry) so it actually takes effect.

## Lucide React Icons

- Before importing an icon, verify it's a named export of `lucide-react`. If it isn't, fallback to the 'square' icon.

## Forbidden files/dirs

- `.gitignore`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `react-router.config.ts`
