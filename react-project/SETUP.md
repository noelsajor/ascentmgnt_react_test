# Setup Guide

## 📋 What You Have

A complete Next.js 14 project with:
- ✅ Interactive `BubbleBackground` component (fully functional)
- ✅ Hero section using the component
- ✅ Header and Footer components
- ✅ Tailwind CSS configured
- ✅ Dark theme with gold accents
- ⚠️ Placeholder sections (need content from HTML)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd react-project
npm install
```

This will install:
- `react` & `react-dom`
- `next` (v14.2.0)
- `tailwindcss`, `autoprefixer`, `postcss`

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. What You'll See

- **Hero Section**: Fully functional with interactive bubbles
- **Header**: Sticky navigation with scroll effects
- **Footer**: Complete with contact form
- **Placeholder Sections**: Basic structure (needs content)

## 🎨 Using the BubbleBackground Component

The component is ready to use anywhere in your app:

```jsx
import { BubbleBackground } from "@/components/ui/bubble-background";

export default function MySection() {
  return (
    <BubbleBackground 
      interactive={true}
      bubbleColor="rgba(233, 208, 144, 0.15)"
      className="min-h-screen"
    >
      <div className="relative z-10 container mx-auto px-8 py-32">
        <h1>Your Content</h1>
      </div>
    </BubbleBackground>
  );
}
```

### Component Props

```typescript
interface BubbleBackgroundProps {
  children: React.ReactNode;
  interactive?: boolean;           // Enable mouse interaction (default: true)
  bubbleColor?: string;            // CSS color string (default: gold)
  bubbleCount?: number;            // Number of bubbles (auto-calculated if not set)
  className?: string;              // Additional CSS classes
}
```

## 📝 Next Steps

### Complete the Placeholder Sections

The following components in `src/components/PlaceholderSections.jsx` have basic structure but need content:

1. **SocialProof** - Client logos and capabilities
2. **Portfolio** - Project cards grid
3. **Services** - Service cards
4. **CaseStudy** - Full case study content
5. **Process** - Process steps
6. **Offers** - Pricing/package cards
7. **Testimonials** - Client testimonials
8. **FAQ** - FAQ with smooth animations
9. **FinalCTA** - Final call-to-action

**How to add content:**
1. Open `src/components/PlaceholderSections.jsx`
2. Reference the original HTML file for structure and content
3. Convert HTML to JSX (className instead of class, etc.)
4. Use Tailwind classes for styling

### Example: Converting FAQ Section

Original HTML:
```html
<details>
  <summary>Question here?</summary>
  <div class="faq-content">
    <p>Answer here</p>
  </div>
</details>
```

Convert to React with smooth animations:
```jsx
"use client";
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Question here?",
      answer: "Answer here"
    },
    // ... more FAQs
  ];

  return (
    <section className="py-32">
      {/* Add content */}
    </section>
  );
}
```

## 🎯 Key Files to Know

```
react-project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── bubble-background.jsx    ⭐ Main component
│   │   ├── Hero.jsx                     ✅ Complete
│   │   ├── Header.jsx                   ✅ Complete
│   │   ├── Footer.jsx                   ✅ Complete
│   │   └── PlaceholderSections.jsx      ⚠️ Needs content
│   └── app/
│       ├── page.jsx                     ✅ Main page
│       ├── layout.jsx                   ✅ Root layout
│       └── globals.css                  ✅ Styles
├── tailwind.config.js                   ✅ Tailwind config
└── package.json                         ✅ Dependencies
```

## 🐛 Troubleshooting

### Bubbles not showing?
- Check if parent has height (`min-h-screen` or fixed height)
- Verify `relative` and `z-10` on content

### Mouse interaction not working?
- Ensure `interactive={true}` prop is set
- Check browser console for errors

### Build errors?
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Change Bubble Color
```jsx
<BubbleBackground bubbleColor="rgba(100, 200, 255, 0.2)">
```

### Adjust Bubble Count
```jsx
<BubbleBackground bubbleCount={50}>
```

### Disable Interaction
```jsx
<BubbleBackground interactive={false}>
```

## ✅ Checklist

- [x] Install dependencies
- [x] Run dev server
- [x] See Hero with bubbles
- [ ] Complete placeholder sections
- [ ] Add FAQ animations
- [ ] Test responsive design
- [ ] Build for production

## 💡 Tips

1. **Content First**: Fill in placeholder sections before styling
2. **Mobile First**: Test on mobile viewport in dev tools
3. **Accessibility**: Keep focus states and keyboard navigation
4. **Performance**: BubbleBackground respects `prefers-reduced-motion`

## 🆘 Need Help?

Reference files:
- Original HTML: `ascent-mgnt-bubbles.html`
- This README
- Component comments

Happy coding! 🚀
