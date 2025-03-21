# Mandala Site Image Catalog

This document provides a comprehensive inventory of all images used throughout the Mandala Ourense website, their current status, and their purpose.

## Images by Section

### Hero Section

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| yoga-meditation.jpg | ❌ Missing | Background image | A full-width background image for the hero section showing a serene yoga studio or meditation space with soft lighting. Sets the tranquil tone for the entire site. |

### Testimonials Section

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| testimonial1.jpg | ❌ Missing | Avatar for Laura García | A small circular avatar image of a woman displayed alongside her testimonial quote. Adds credibility and a personal touch to the testimonial section. |
| testimonial2.jpg | ❌ Missing | Avatar for Carlos Rodríguez | A small circular avatar image of a man displayed alongside his testimonial quote. Adds credibility and a personal touch to the testimonial section. |
| testimonial3.jpg | ❌ Missing | Avatar for Marta Fernández | A small circular avatar image of a woman displayed alongside her testimonial quote. Adds credibility and a personal touch to the testimonial section. |

### Therapies Section

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| therapy.jpg | ❌ Missing | Main section image | A medium-sized image illustrating holistic therapies, possibly showing a massage, reiki session, or other therapy treatment. Used as a visual representation of the therapy services offered. |

### Classes Section

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| yoga-pose.jpg | ⚠️ Partial | Class illustration | An image of a person performing a yoga pose or a yoga class in session. Used to illustrate different yoga classes offered by the studio. Some instances of this image are loading correctly while others are not. |

### About Page

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| yoga-studio.jpg | ✅ Loaded | Studio space image | A photo of the Mandala Ourense yoga studio interior, showing the practice space. This image successfully loads on the About page and provides visitors with a visual of the actual studio space. |
| woman1.jpg | ⚠️ Partial | Teacher profile (Ana García) | Portrait photo of a female yoga teacher who teaches Hatha Yoga. Used on the About page to introduce the studio's teaching staff. |
| man1.jpg | ⚠️ Partial | Teacher profile (Carlos Martínez) | Portrait photo of a male yoga teacher who teaches Daoyin Yoga. Used on the About page to introduce the studio's teaching staff. |
| woman2.jpg | ⚠️ Partial | Teacher profile (Lucía Fernández) | Portrait photo of a female meditation instructor. Used on the About page to introduce the studio's teaching staff. |

### CTA Section

| Filename | Status | Purpose | Description |
|----------|--------|---------|-------------|
| cta-background.jpg | ❌ Missing | Section background | A gradient or textured background image for the call-to-action section. Enhances the visual appeal of the section prompting visitors to take action (book a class/contact the studio). |

## Image Paths

All images should be stored in the following directory structure:

```
public/
  images/
    testimonials/
      testimonial1.jpg
      testimonial2.jpg
      testimonial3.jpg
    yoga-meditation.jpg
    therapy.jpg
    yoga-pose.jpg
    yoga-studio.jpg
    cta-background.jpg
    woman1.jpg
    man1.jpg
    woman2.jpg
```

## Implementation Notes

1. **Priority**: Fix the hero section image first as it has the highest visual impact
2. **Testimonials**: All three testimonial images must be created and placed in the correct directory
3. **Consistency**: Ensure all image dimensions are appropriate for their usage context
4. **Optimization**: All images should be optimized for web to ensure fast loading times
5. **Alternative Text**: All images should have descriptive alt text for accessibility

## Recommendations

1. Run the `copy-testimonial-images.bat` script to set up testimonial images automatically
2. Verify the Netlify deployment includes all image files from the public directory
3. Check that the `next.config.js` file has `unoptimized: true` for Netlify compatibility
4. Consider adding image preloading for critical images like the hero background 