# Deployment Fix Plan for Mandala Site

## Current Issues

1. **Build Error**: 
   - `src/app/yoga/page.tsx` is not a proper module.
   - Missing proper exports and component structure.

2. **Missing Images**:
   - Hero section background image not displaying.
   - Yoga type images not displaying.
   - Icon images not displaying properly.

## Fixes Implemented

### 1. Fixed the module export in `src/app/yoga/page.tsx`

- Added proper React import
- Added export default function
- Added YogaStylesSection component import
- Made the array of yoga styles exportable

### 2. Created Comprehensive Audit Tools

- Created `site-audit.js` to run runtime checks on all routes
- Created `image-paths-fix.js` to audit all image references
- Created `routes-list.json` to document all site routes

## Remaining Tasks

### 1. Verify All Public Assets

Local files appear to be present but may not be deploying correctly to Netlify. Ensure public directory is properly configured in `netlify.toml`:

```toml
[build]
  publish = ".next"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 2. Image Path Verification

1. Ensure all image paths are correctly referenced:
   - Check for case sensitivity issues
   - Verify file extensions match exactly
   - Check for typos in paths

2. Update the `next.config.js` to ensure images are properly processed:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### 3. Post-Build Verification Steps

1. Run `next build` locally to verify build succeeds
2. Check output directory for all expected images
3. Run `npm run start` to test locally before deploying
4. Run created audit scripts to verify all assets are available

### 4. Deployment Strategy

1. Commit and push fixes
2. Monitor Netlify build logs
3. Verify deployed site assets using browser developer tools
4. Run post-deployment tests to verify all routes and assets

## Quality Control Checklist

- [ ] Build succeeds locally
- [ ] All routes are accessible
- [ ] Hero section displays correctly with background image
- [ ] Yoga style cards display with correct images
- [ ] Icons display correctly
- [ ] Responsive design works on all device sizes
- [ ] Contact form works
- [ ] Navigation works correctly
- [ ] SEO routes are properly configured

## Recommended Long-term Improvements

1. Implement image optimization with Next.js
2. Add automated tests for critical routes
3. Create a content management system for easier updates
4. Implement better error logging and monitoring