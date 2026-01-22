# Vercel Deployment Guide

## 🔧 Issue: 404 NOT_FOUND Error

You're seeing this error because of a Next.js routing or build configuration issue. Here's how to fix it:

## ✅ Solution Steps

### 1. **Check Your File Structure**

Make sure your files are organized like this:

```
react-project/
├── src/
│   ├── app/
│   │   ├── page.jsx          ← This MUST exist!
│   │   ├── layout.jsx        ← This MUST exist!
│   │   └── globals.css
│   └── components/
│       └── ...
├── public/
├── package.json
├── next.config.js
└── tailwind.config.js
```

### 2. **Verify package.json Scripts**

Your `package.json` should have:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 3. **Test Locally First**

Before deploying to Vercel:

```bash
# Install dependencies
npm install

# Test the build
npm run build

# Test the production build locally
npm run start
```

If it works locally on `http://localhost:3000`, it should work on Vercel.

### 4. **Deploy to Vercel**

#### Option A: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
cd react-project
vercel
```

#### Option B: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (or drag & drop the folder)
4. **Framework Preset**: Should auto-detect "Next.js"
5. **Root Directory**: Leave as `.` (if project is in root)
6. **Build Command**: `npm run build` (should be default)
7. **Output Directory**: `.next` (should be default)
8. Click "Deploy"

### 5. **Common Vercel Issues & Fixes**

#### Issue: "Module not found" errors

**Fix**: Make sure all imports use the `@/` alias correctly:

```jsx
// ✅ Correct
import Hero from "@/components/Hero";
import { BubbleBackground } from "@/components/ui/bubble-background";

// ❌ Wrong
import Hero from "../components/Hero";
```

#### Issue: Build succeeds but 404 on homepage

**Fix**: Ensure `src/app/page.jsx` exists and exports a default component:

```jsx
export default function Home() {
  return (
    <main>
      {/* Your content */}
    </main>
  );
}
```

#### Issue: "use client" errors

**Fix**: Components that use hooks need `"use client"` at the top:

```jsx
"use client";

import { useState } from 'react';

export default function MyComponent() {
  // ...
}
```

### 6. **Check Vercel Build Logs**

If deployment fails:

1. Go to your Vercel dashboard
2. Click on the failed deployment
3. Check the "Build Logs" tab
4. Look for the specific error message

Common errors:
- **Module not found**: Check import paths
- **Export error**: Make sure components export default
- **Build timeout**: Optimize or upgrade Vercel plan

### 7. **Environment Variables (if needed)**

If you need environment variables:

1. In Vercel dashboard → Settings → Environment Variables
2. Add any required variables (like API keys)
3. Redeploy

## 🎯 Quick Checklist

Before deploying, verify:

- [ ] `src/app/page.jsx` exists with default export
- [ ] `src/app/layout.jsx` exists with default export
- [ ] All imports use `@/` alias correctly
- [ ] `npm run build` works locally
- [ ] `npm run start` shows the site locally
- [ ] No console errors in browser
- [ ] All components that use hooks have `"use client"`

## 🐛 Still Getting 404?

### Try This:

1. **Delete `.next` folder and rebuild:**
   ```bash
   rm -rf .next
   npm run build
   ```

2. **Check if you're accessing the right URL:**
   - ✅ `https://your-project.vercel.app/` (root)
   - ❌ `https://your-project.vercel.app/home`

3. **Verify Next.js version:**
   ```bash
   npm list next
   ```
   Should be `14.2.0` or similar.

4. **Check Vercel project settings:**
   - Framework Preset: **Next.js**
   - Node.js Version: **18.x** or **20.x**

## 💡 Pro Tips

- **Use Vercel CLI for faster debugging**: `vercel dev` runs locally with Vercel's environment
- **Check preview deployments**: Every git push creates a preview URL
- **Use build logs**: They're your best friend for debugging

## 📞 Need More Help?

- Vercel Docs: https://vercel.com/docs/frameworks/nextjs
- Next.js Docs: https://nextjs.org/docs/app
- Check build logs in Vercel dashboard

---

**Most Common Fix**: The 404 usually means the build succeeded but the routes aren't set up correctly. Make sure:
1. You have `src/app/page.jsx` (not `pages/index.js`)
2. It exports a default component
3. The build completes successfully locally first
