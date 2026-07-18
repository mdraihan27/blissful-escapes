@AGENTS.md
# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Philosophy

This is a **component-first** frontend project. Every single piece of UI — no matter how small — must be built as its own reusable component. There is no such thing as "too small to componentize." If a `<button>`, a `<label>`, an icon wrapper, a card, a badge, a divider, or even a styled `<span>` is used more than once (or even *could* be reused), it becomes its own component.

## Core Rules

### 1. Component-Based Architecture (STRICT)
- **Everything is a component.** Buttons, inputs, cards, headers, footers, nav items, section titles, badges, tags, avatars, dividers, icons, tooltips, modals, dropdowns — all separate, isolated components.
- Follow **atomic design** principles:
  - `components/ui/` → atoms (Button, Input, Badge, Icon, Divider, Heading, Text)
  - `components/common/` → molecules (Card, FormField, NavItem, SearchBar)
  - `components/sections/` → organisms (Header, Footer, HeroSection, PricingSection)
  - `components/layout/` → layout wrappers (Container, PageWrapper, Grid)
- Pages (`app/**/page.tsx`) should be **thin** — they only compose components together. No raw markup, no inline styling logic, no business logic directly inside a page file.
- No copy-pasted JSX blocks anywhere. If you find yourself duplicating structure, extract it into a component immediately.
- Every component gets its own file. Named exports, one component per file, colocate component-specific types in the same file.
- Props must be typed with TypeScript interfaces (`ComponentNameProps`), never `any`.

### 2. Styling — Tailwind CSS Only
- Use **Tailwind CSS** exclusively. No plain CSS files, no CSS modules, no styled-components, no inline `style={}` unless truly unavoidable (e.g. dynamic values Tailwind can't express).
- Global background color is **white**.
- Register the brand colors as custom Tailwind classes in `globals.css` using `@theme` (Tailwind v4) or the `theme.extend.colors` config (Tailwind v3) — do NOT hardcode hex values inline anywhere in components.

### 3. Brand Colors (register these exact names)
| Name | Hex | Usage |
|---|---|---|
| `primary-brown` | `#372222` | Primary text, headings, dark accents |
| `primary-pink` | `#E6B59D` | Primary accent, backgrounds, highlights, hover states |
| `primary-beige` | `#EBC75B` | Secondary accent, CTAs, highlights, icons |
| `white` | `#FFFFFF` | Base background (Tailwind default `white`) |

**In `globals.css` (Tailwind v4 syntax):**
```css
@import "tailwindcss";

@theme {
  --color-primary-brown: #372222;
  --color-primary-pink: #E6B59D;
  --color-primary-beige: #EBC75B;
}

body {
  @apply bg-white text-primary-brown;
}
```

If the project uses Tailwind v3 instead, register the same colors inside `tailwind.config.ts` under `theme.extend.colors` with the same names (`primary-brown`, `primary-pink`, `primary-beige`), and keep `body { @apply bg-white text-primary-brown; }` in `globals.css`.

- Always use the class names `bg-primary-pink`, `text-primary-brown`, `bg-primary-beige`, `border-primary-pink`, etc. Never write `bg-[#E6B59D]` or raw hex anywhere in JSX.
- Use `primary-brown` as the dominant text color, `primary-pink` and `primary-beige` for accents, buttons, highlights, gradients, and decorative elements.

### 4. Responsiveness (STRICT — every breakpoint, every page)
Every page and every component must be fully responsive across **all** Tailwind breakpoints, with no exceptions:
- `xs` (custom, ~360–479px, add manually if needed since Tailwind has no default `xs`)
- `sm` (640px)
- `md` (768px)
- `lg` (1024px)
- `xl` (1280px)
- `2xl` (1536px)

Rules:
- Never ship a layout that only works at one or two breakpoints. Test/design mentally for mobile-first, then scale up.
- Use responsive utility stacks on every layout-affecting property: spacing, font size, grid/flex direction, columns, gaps — e.g. `text-base sm:text-lg md:text-xl lg:text-2xl`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.
- Navigation must collapse into a mobile menu below `md` and expand into a full nav bar above it.
- Images, videos, and embeds must always use fluid/responsive sizing (`w-full h-auto`, `aspect-*` utilities) — never fixed pixel widths.
- Typography must scale fluidly across breakpoints — no single fixed font-size for headings.

### 5. Design Quality
- Every design should feel premium and intentional, not templated or generic. Avoid default-looking Tailwind layouts (plain gray cards, default shadows, boring spacing).
- Use generous whitespace, clear visual hierarchy, and a considered type scale.
- Use gradients, soft shadows, rounded corners, and layered depth thoughtfully with the brand palette (e.g. `bg-gradient-to-br from-primary-pink to-primary-beige`).
- Every interactive element (buttons, links, cards, inputs) needs a deliberate hover/focus/active state — never leave default browser states.

### 6. Animations
- Use **Framer Motion** (or Tailwind's built-in transition utilities where Framer Motion is overkill) for meaningful, smooth animations throughout:
  - Page/section entrance animations (fade + slide up on scroll into view, using `whileInView`).
  - Staggered animations for lists/grids of cards.
  - Micro-interactions on buttons and interactive elements (scale on hover/tap, smooth color transitions).
  - Smooth transitions between states (menu open/close, modal open/close, tab switches).
- Animations should feel premium and subtle — never janky, never distracting, always eased (`ease-in-out` or custom cubic-bezier curves), with sensible durations (150–500ms for micro-interactions, 500–800ms for section reveals).
- Respect `prefers-reduced-motion` — provide reduced/no-motion fallbacks for accessibility.

### 7. Typography — No Hyphens
- No hyphens in any user-facing text content, anywhere in the app — headings, body copy, labels, buttons, captions, alt text, etc.
- Hyphens are only permitted when grammatically necessary (e.g. a required compound modifier that would be genuinely incorrect without one). Prefer rephrasing to avoid the hyphen first; use an en dash/em dash or restructure the sentence instead of a hyphen for breaks or asides.
- This rule applies to copy only, not code syntax, class names, or file names.

### 8. No Borders
- No borders on any element, anywhere — no `border`, `border-*`, `divide-*`, or ring utilities used as visual borders. Use spacing, background color contrast, or shadows to separate elements instead.

### 9. No Border Radius
- No border radius on any element, anywhere — no `rounded`, `rounded-*` utilities. All corners are sharp/square.

### 10. No Pulsing Dot Tags
- No pulsing/animated dot indicators (e.g. the common "live" or "notification" pulsing dot badge) on any section of the site.

### 11. Buttons Must Show a Pointer Cursor
- Every button (and any clickable element styled as a button) must include `cursor-pointer`. Never leave a button on the default cursor.

### 12. Code Quality Expectations
- Strict TypeScript everywhere — no `any`, no implicit types.
- Consistent naming: PascalCase for components, camelCase for functions/variables, kebab-case for file names is NOT used — component files match their PascalCase component name (e.g. `Button.tsx`).
- Keep components small and single-responsibility. If a component file exceeds ~150 lines, consider splitting it further.
- Co-locate component-specific hooks/utilities next to the component when they're only used there; move to `lib/` or `hooks/` only when shared across multiple components.