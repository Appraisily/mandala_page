# Mandala Ourense Website Redesign

This project implements a modern redesign for the Mandala Ourense yoga and wellness center website, a spiritual space located in Ourense, Galicia, Spain.

## Project Overview

The project has transformed the original website ([www.mandalaourense.com](https://www.mandalaourense.com/)) into a modern, responsive, and user-friendly site while preserving the spiritual essence of the Mandala brand.

## Project Status

**Current Status: Ready for Deployment**

The project is fully implemented with a Next.js-based website ready for deployment. All build issues have been resolved, and the site has been configured for Netlify deployment.

## Latest Updates (March 18, 2025)

- Fixed Tailwind CSS configuration by downgrading from version 4 to version 3.3.3
- Resolved build errors related to PostCSS configuration
- Updated Node.js version specification for Netlify deployment
- Completed all implementation steps in the project plan
- Updated deployment documentation with troubleshooting information

## Repository Structure

- **data/** - Contains scraped content from the original website
  - HTML and text versions of each page
  - JSON site structure mapping
  - Content analysis files

- **analysis files**:
  - **site_summary.md** - Comprehensive analysis of original website content
  - **site_structure.md** - Proposed structure for the redesigned website
  - **design_recommendations.md** - Detailed design guidance for the new site

- **mandala-site/** - Contains the implemented website
  - Built with Next.js 15, Tailwind CSS, and shadcn/ui components
  - Features responsive design, improved contact forms, and visual scheduling
  - Ready for deployment on Netlify

- **Deployment files**:
  - **netlify.toml** - Configuration for Netlify deployment
  - **.node-version** - Specifies Node.js version for deployment
  - **DEPLOYMENT.md** - Detailed deployment instructions

- **Scripts**:
  - **fetch_site.py** - Python script used for original site scraping
  - **analyze_content.py** - Python script for content analysis

## Technology Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS 3.3.3, shadcn/ui components
- **Animation**: Framer Motion for transitions and effects
- **Deployment**: Configured for Netlify hosting
- **Design**: Modern, minimalist approach with responsive layouts

## Key Features

- Modern and minimalist design following current web design trends
- Fully responsive interface for all devices (mobile-first approach)
- Enhanced contact form with validation for better customer communication
- Visual schedule system with calendar-style layout for easy class time visualization
- Clear presentation of yoga styles and therapies with detailed descriptions
- Optimized SEO metadata for better search engine ranking
- Map integration for easy center location
- Smooth animations and transitions for improved user experience

## Final Steps Before Production

1. Replace stock images with actual photos of the center
2. Verify all contact information, schedules, and pricing details
3. Deploy to Netlify following instructions in DEPLOYMENT.md
4. Configure the domain (mandalaourense.com) to point to the new site

## Getting Started

To explore or contribute to this project:

1. Clone this repository
2. Review the analysis documents in the main directory
3. For the implemented site, navigate to `mandala-site/mandala-new/mandala-site`
4. Follow standard Next.js development procedures to run locally

```bash
cd mandala-site/mandala-new/mandala-site
npm install
npm run dev
```

## Deployment

For detailed deployment instructions, refer to the [DEPLOYMENT.md](./DEPLOYMENT.md) file. The site is configured to be deployed on Netlify.

## License

MIT License

## Contact

For questions about this project implementation, please contact the project maintainer.

For the Mandala Ourense yoga center, please visit [www.mandalaourense.com](https://www.mandalaourense.com/) or contact them directly through their website.