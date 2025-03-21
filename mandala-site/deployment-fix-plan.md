# Mandala Netlify Site Deployment Fix Plan

This document outlines the step-by-step plan to fix the image loading issues identified in the deployed Mandala site.

## Summary of Issues

Based on our analysis of the deployed site (https://mandala-new.netlify.app/), we identified several issues:

1. Missing or broken images across multiple sections
2. Testimonial avatars not displaying
3. Key section background images not loading
4. Some images loading correctly but others failing

## Root Causes

The likely causes of these issues are:

1. **Missing Files**: Image files referenced in the code are not present in the deployment
2. **Path References**: Incorrect paths in the image references
3. **Netlify Configuration**: Potential issues with Next.js image optimization on Netlify
4. **Deployment Process**: Files not being included in the build/deployment process

## Fix Implementation Plan

### Step 1: Verify Local Environment
```bash
# Clone the repository (if not already done)
git clone https://github.com/your-username/mandala-site.git
cd mandala-site

# Install dependencies
npm install

# Run the site locally to verify it works
npm run dev
```

### Step 2: Fix Image Directory Structure
```bash
# Create necessary directories
mkdir -p public/images/testimonials

# Copy existing images to testimonial directory
# Run the provided script
./copy-testimonial-images.bat
```

### Step 3: Verify next.config.js Configuration
Ensure the next.config.js file contains the proper configuration for Netlify:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Step 4: Rebuild and Test Locally
```bash
# Build the site
npm run build

# Test locally
npm run start
```

### Step 5: Deploy to Netlify
```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod
```

## Verification Checklist

After deployment, verify the following:

- [ ] Hero section background image is visible
- [ ] All three testimonial avatars appear correctly
- [ ] Therapy section image loads
- [ ] Yoga class images display properly
- [ ] Teacher profile images on the About page are visible
- [ ] CTA section background appears as expected

## Monitoring Plan

After fixing the issues:

1. Set up regular monitoring of the site
2. Create automated tests to verify images are loading
3. Implement a process for adding new images to the site

## Contingency Plan

If images still fail to load after the fix:

1. Check Netlify logs for any errors during deployment
2. Verify the images were properly uploaded to Netlify's CDN
3. Consider using Netlify Large Media for image handling
4. Try an alternative approach like using a CDN service for images

## Long-term Recommendations

1. **Image Optimization Pipeline**: Set up a proper image optimization pipeline to ensure all images are web-optimized
2. **Automated Testing**: Implement automated visual regression testing
3. **Documentation**: Update the README with clear instructions for handling images
4. **Pre-commit Hooks**: Add pre-commit hooks to verify images before they're committed 