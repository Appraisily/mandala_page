# Mandala Ourense Website Redesign

This project implements a modern redesign for the Mandala Ourense yoga and wellness center website, a spiritual space located in Ourense, Galicia, Spain.

## Project Overview

The project has transformed the original website ([www.mandalaourense.com](https://www.mandalaourense.com/)) into a modern, responsive, and user-friendly site while preserving the spiritual essence of the Mandala brand.

## Project Status

**Current Status: Implementation Complete**

The project has moved from analysis and planning to full implementation with a new Next.js-based website ready for deployment.

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

- **Scripts**:
  - **fetch_site.py** - Python script used for original site scraping
  - **analyze_content.py** - Python script for content analysis

## Technology Stack

- **Frontend**: Next.js 15, Tailwind CSS, shadcn/ui components
- **Deployment**: Configured for Netlify hosting
- **Design**: Modern, minimalist approach with responsive layouts

## Key Features

- Modern and minimalist design following current web design trends
- Fully responsive interface for all devices
- Enhanced contact form for better customer communication
- Visual schedule system for easy class time visualization
- Clear presentation of services with detailed descriptions
- Optimized SEO metadata for better search engine ranking
- Map integration for easy center location

## Next Steps

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

## License

[License information to be added]

## Contact

[Contact information to be added]