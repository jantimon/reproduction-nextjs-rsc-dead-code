# Next.js RSC Dead Code Elimination Issue

This repository demonstrates an issue with React Server Components (RSC) dead code elimination in Next.js when using SWC plugins like next-yak

## The Issue

When using SWC plugins that transform JSX (like next-yak for CSS-in-JS), server-only code is incorrectly included in client bundles.
This increases bundle size unnecessarily

### Reproduction Steps

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Examine the generated client bundle in `.next/static/chunks/app/page-[hash].js`

# Reproduction

This reproduction is only 20 lines of code:
- A server component (`page.tsx`)
- A client component (`client.tsx`)
- An SWC transform via next-yak

![Output preview](https://github.com/user-attachments/assets/30a1a22e-7ffe-4243-837b-aec4f517fa62)
