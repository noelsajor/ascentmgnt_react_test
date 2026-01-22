# Ascent Mgnt - Premium Shopify Design Studio

A modern, premium Next.js website for a Shopify design studio featuring an interactive bubble background component.

## 🎨 Features

- **Interactive Bubble Background**: Canvas-based animated bubbles with mouse interaction
- **Smooth FAQ Animations**: Height-based transitions with rotating icons
- **Premium Design**: Dark theme with gold accents
- **Fully Responsive**: Mobile-first design approach
- **Accessibility**: Respects `prefers-reduced-motion` settings
- **Next.js 14**: App Router with Server Components
- **Tailwind CSS**: Utility-first styling

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
react-project/
├── src/
│   ├── app/
│   │   ├── layout.jsx         # Root layout with header/footer
│   │   ├── page.jsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── ui/
│       │   └── bubble-background.jsx  # Reusable bubble component
│       ├── Hero.jsx           # Hero section using BubbleBackground
│       ├── Header.jsx         # Site header
│       ├── Footer.jsx         # Site footer
│       └── [other components]
├── public/                    # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎭 BubbleBackground Component

The `BubbleBackground` component is a reusable, interactive canvas-based background.

### Usage

```jsx
import { BubbleBackground } from "@/components/ui/bubble-background";

export default function MyComponent() {
  return (
    <BubbleBackground interactive={true}>
      <div className="relative z-10">
        <h1>Your content here</h1>
      </div>
    </BubbleBackground>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `interactive` | `boolean` | `true` | Enable mouse interaction with bubbles |
| `bubbleColor` | `string` | `'rgba(233, 208, 144, 0.15)'` | Color of the bubbles |
| `bubbleCount` | `number` | auto-calculated | Number of bubbles (based on area if not provided) |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Content to render on top of bubbles |

### Features

- **Smooth Animation**: 60fps canvas rendering
- **Mouse Interaction**: Bubbles gently repel from cursor
- **Organic Movement**: Natural upward drift with wobble
- **Responsive**: Auto-adjusts to container size
- **Accessible**: Respects `prefers-reduced-motion`
- **Performance**: Delta-time based animation

## 🎨 Color Palette

```css
--bg-0: #0C0D0F        /* Primary background */
--bg-1: #121417        /* Secondary background */
--surface: #171A1F     /* Card/surface */
--surface-2: #1E2229   /* Elevated surface */
--text: #F2F2F2        /* Primary text */
--muted: rgba(242, 242, 242, 0.72)  /* Muted text */
--line: rgba(255, 255, 255, 0.08)   /* Borders */
--accent: #E9D090      /* Gold accent */
--accent-2: #F3E1B5    /* Light gold */
```

## 📝 To-Do: Complete Components

The following components need to be created:

- [ ] `SocialProof.jsx`
- [ ] `Portfolio.jsx`
- [ ] `Services.jsx`
- [ ] `CaseStudy.jsx`
- [ ] `Process.jsx`
- [ ] `Offers.jsx`
- [ ] `Testimonials.jsx`
- [ ] `FAQ.jsx`
- [ ] `FinalCTA.jsx`
- [ ] `Header.jsx`
- [ ] `Footer.jsx`

You can reference the original HTML file for the structure and content of these components.

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

## 📄 License

Private project - All rights reserved.

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.
