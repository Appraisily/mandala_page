# Deployment Instructions for Mandala Ourense Website

This document contains instructions for deploying the Mandala Ourense website using Netlify.

## Repository Structure

- The main Next.js application is located in the `mandala-site/mandala-new/mandala-site` directory
- The root directory contains configuration files for deployment

## Recent Fixes

- **2025-03-18**: Fixed Tailwind CSS configuration by downgrading from version 4 to version 3.3.3 
- **2025-03-18**: Updated Node.js version to 18.19.0 using `.node-version` file for compatibility
- **2025-03-18**: Resolved build errors related to PostCSS configuration

## Deploying to Netlify

### Option 1: Netlify UI (Recommended)

1. Log in to your Netlify account
2. Click "New site from Git"
3. Connect to your GitHub repository
4. The build settings will be automatically configured from the netlify.toml file
5. Click "Deploy site"

### Option 2: Netlify CLI

1. Install the Netlify CLI: `npm install netlify-cli -g`
2. Log in to your Netlify account: `netlify login`
3. Initialize your site: `netlify init`
4. Deploy your site: `netlify deploy --prod`

## Environment Variables

If your site requires environment variables, you can set them in the Netlify UI:

1. Go to Site settings > Build & deploy > Environment
2. Add the required environment variables

## Custom Domain

To set up a custom domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain: `mandalaourense.com`
4. Follow the instructions to configure your DNS settings

## Final Checklist Before Production

Before finalizing the production deployment, ensure:

1. All placeholder images have been replaced with actual photos of the center
2. All contact information, schedules, and pricing details are verified and accurate
3. All pages render correctly on different devices (mobile, tablet, desktop)
4. Site performance and loading speeds are optimized

## Troubleshooting

If you encounter build issues:

1. Check the build logs in the Netlify UI
2. Ensure that the base directory is correctly set to `mandala-site/mandala-new/mandala-site`
3. Verify that all dependencies are correctly installed
4. Check that the Node.js version is compatible (this project uses Node.js 18.19.0)
5. If there are Tailwind CSS issues, ensure you're using version 3.3.3, not version 4

For more help, refer to the [Netlify documentation](https://docs.netlify.com/).