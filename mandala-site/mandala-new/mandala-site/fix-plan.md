# Mandala Site Fix Plan

## Build Issues

1. ✅ **Fixed**: Module export issue in `src/app/yoga/page.tsx`
   - Added proper React import
   - Fixed component export
   - Fixed YogaStylesSection component to accept custom styles
   - Made yoga styles data non-exported since Next.js doesn't allow exporting data variables from page components

## Image Issues

The audit identified significant problems with image assets:

- **Total image references**: 178
- **Missing images**: 161 (90.4%)
- **Existing images**: 17 (9.6%)

### Missing Image Categories

1. **Yoga Style Images**:
   - Basic styles exist: `/images/yoga/hatha-yoga.png`, `/images/yoga/daoyin-yoga.png`, `/images/yoga/yoga-nidra.png`
   - But many pages reference non-existent jpg versions

2. **Teacher Images**:
   - Referenced in various pages but missing: `/images/teacher-*.jpg`

3. **Activity & Section Images**:
   - Most content section images are missing

### Fix Recommendations

1. **Create Placeholder Images**:
   - Generate or acquire images for the most critical missing references
   - Focus on main page images first (yoga styles, testimonials, hero)

2. **Consolidate Image References**:
   - Update all pages to use the existing images when possible
   - For example, use `/images/yoga/hatha-yoga.png` instead of non-existent `/images/hatha-yoga.jpg`

3. **Image Directory Structure**:
   - Keep the current organized structure: `/images/yoga/`, `/images/icons/`, `/images/testimonials/`
   - Add additional directories as needed: `/images/teachers/`, `/images/therapies/`

4. **Next.js Configuration Update**:
   - Update `next.config.js` to ensure proper image handling:
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

## Deployment Plan

1. **Priority 1: Fix Critical Build Issues**
   - ✅ Fix module export issue in yoga/page.tsx
   - ✅ Ensure proper TypeScript types

2. **Priority 2: Add Essential Images**
   - Focus on images needed for main pages:
     - Home page hero image
     - Yoga style images
     - Teacher photos
     - Therapy images

3. **Priority 3: Update Components to Handle Missing Images**
   - Add fallback images or placeholders
   - Add conditional rendering for optional images

4. **Priority 4: Optimize Netlify Deployment**
   - Ensure proper configuration in netlify.toml
   - Verify all static assets are included in build

## Specific Tasks

1. **Create or Acquire Missing Images**:
   - Generate placeholder images for missing references
   - Focus on creating the most commonly referenced images first

2. **Update Components to Handle Missing Images**:
   - Add null checks and fallbacks in image components
   - Implement placeholder images where needed

3. **Test Build Locally**:
   - Verify build succeeds with updated components
   - Check for any remaining type errors

4. **Test on Netlify**:
   - Deploy to Netlify and verify all routes
   - Check image loading in deployed version

## Long-term Recommendations

1. **Image Management System**:
   - Implement a CMS for easier image management
   - Consider image optimization services

2. **Automated Testing**:
   - Add visual regression tests for critical pages
   - Implement automated checks for missing assets

3. **Documentation**:
   - Create documentation for adding new images
   - Document image size and format standards