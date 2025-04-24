# Next.js RSC Dead Code Elimination Issue

This repository demonstrates an issue with React Server Components (RSC) dead code elimination in Next.js when using CSS modules.

## The Issue

When using CSS modules with server components, the CSS module class name mapping is incorrectly included in client bundles, even when only referenced by server components.

This increases bundle size unnecessarily.

### Reproduction Steps

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Examine the generated client bundle in `.next/static/chunks/app/page-[hash].js`

You'll find that CSS module class name mappings (like `headline: "page_headline__b1Dvh"`) are included in the client JavaScript bundle, even though they should be eliminated since they're only used in server components.

## Analysis

In a typical Next.js RSC setup, dead code elimination should automatically remove server-only code from client bundles. However, when using CSS modules in server components, this optimization fails.

## Technical Details

This is a minimal reproduction with just 20 lines of code demonstrating the issue:
- A server component (`page.tsx`) that imports a CSS module
- A client component (`client.tsx`)
- CSS module styling (`page.module.css`)

You can see the evidence in the client bundle at `.next/static/chunks/app/page-[hash].js`:
```js
5717: e => {
    e.exports = {
        headline: "page_headline__b1Dvh"
    }
}
```

![Output preview](https://github.com/user-attachments/assets/4eab9b0a-46ec-4869-a3c5-b76cbad9c204)

