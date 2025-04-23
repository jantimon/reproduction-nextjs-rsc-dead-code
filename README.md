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

You'll find that server-only code (like the string "Hello" from the RSC component) is included in the client JavaScript bundle, even though it should be eliminated.

## Analysis

In a typical Next.js RSC setup, dead code elimination should automatically remove server-only code from client bundles. However, when using SWC plugins that transform JSX (in this case, `next-yak`), this optimization fails

## Technical Details

This is a minimal reproduction with just 20 lines of code demonstrating the issue:
- A server component (`page.tsx`)
- A client component (`client.tsx`)
- An SWC transform via next-yak

![Output preview](https://github.com/user-attachments/assets/30a1a22e-7ffe-4243-837b-aec4f517fa62)
