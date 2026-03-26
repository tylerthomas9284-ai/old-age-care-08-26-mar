# GoldenHaven Senior Care Website
## Vanilla HTML, CSS, and JavaScript Version

This is a complete conversion of the React-based GoldenHaven Senior Care website into vanilla HTML, CSS, and JavaScript.

## 📁 File Structure

```
/public/
├── index.html       # Homepage with all major sections
├── about.html       # About Us page
├── services.html    # Services page with detailed service information
├── contact.html     # Contact form and information
├── blog.html        # Blog/Resources page
├── terms.html       # Terms & Conditions (legal page)
├── privacy.html     # Privacy Policy (legal page)
├── accessibility.html # Accessibility Statement (legal page)
├── styles.css       # All CSS styles (responsive, animations, theme)
├── script.js        # All JavaScript functionality
└── README.md        # This file
```

## 🎨 Design System

### Color Palette (Warm Serenity)
- **Sage Green (Primary):** #7D9070
- **Soft Cream (Background):** #F9F7F2
- **Terracotta (Accent):** #C17A62
- **Muted:** #E8E5DE
- **Text:** #2C2C2C
- **Text Light:** #6B6B6B

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Source Sans Pro (sans-serif)
- Fonts loaded from Google Fonts CDN

### Border Radius
- Small: 1rem (16px)
- Medium: 1.5rem (24px)
- Large: 2rem (32px)
- Extra Large: 3rem (48px)

## 🚀 Features Implemented

### All Pages Include:
✅ Emergency support bar
✅ Responsive sticky header with dropdown navigation
✅ Mobile hamburger menu
✅ Comprehensive footer with newsletter signup
✅ Mobile "Talk to a Care Advisor" button (visible on mobile only)
✅ Smooth scroll animations
✅ WCAG 2.1 accessibility features

### Homepage (index.html)
- Split-screen hero section with CTA buttons
- 7-card glassmorphism services grid with hover effects
- Trust pillars section (Why Choose Us)
- Care approach timeline
- Activities gallery with 6 images
- Testimonials slider (using Slick Carousel)
- Blog preview section

### About Page (about.html)
- Company mission and values
- Core values section
- Company timeline/history
- CTA section

### Services Page (services.html)
- Detailed service descriptions
- Alternating image/text layout
- Service-specific information
- Feature lists with checkmarks

### Contact Page (contact.html)
- Contact form with validation
- Contact information cards
- Office hours
- Form submission handling

### Blog Page (blog.html)
- Blog grid with 9 articles
- Category tags
- Featured images
- CTA section

## 🎭 Animations & Interactions

### Implemented:
- **Scroll animations:** Elements fade in as they enter viewport
- **Hero animations:** Left and right slide-in effects
- **Service cards:** Hover lift effect with glassmorphism
- **Testimonials:** Auto-rotating slider with navigation
- **Mobile menu:** Smooth slide-down animation
- **Dropdown menus:** Fade and slide effects
- **Sticky header:** Shadow enhancement on scroll
- **Mobile button:** Slide up from bottom with delay

### CSS Animations:
```css
- fadeInUp
- fadeInLeft
- fadeInRight
- slideUp
```

## 📱 Responsive Design

### Breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** ≥ 1280px

### Mobile Features:
- Hamburger menu
- Sticky call-to-action button
- Stacked layouts
- Touch-optimized interactions

## ♿ Accessibility (WCAG 2.1 Compliant)

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Skip-to-content link
- Keyboard navigation support
- Focus visible indicators
- Alt text on all images
- Sufficient color contrast
- Screen reader announcements

## 🔧 JavaScript Features

### Functionality:
1. **Mobile Menu Toggle** - Open/close mobile navigation
2. **Testimonials Slider** - Auto-rotating with manual controls
3. **Scroll Animations** - Intersection Observer for fade-in effects
4. **Sticky Header** - Enhanced shadow on scroll
5. **Newsletter Form** - Form submission with validation
6. **Contact Form** - Form submission with validation
7. **Active Navigation** - Highlights current page
8. **Smooth Scrolling** - For anchor links
9. **Debounced Scroll** - Performance optimization
10. **Keyboard Navigation** - Accessibility enhancements

## 📦 Dependencies

### External Libraries:
- **jQuery 3.6.0** (for Slick Carousel compatibility)
- **Slick Carousel 1.8.1** (testimonials slider)
- **Google Fonts** (Playfair Display, Source Sans Pro)

### CDN Links Already Included:
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Slick Carousel CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">

<!-- Slick Carousel JS -->
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 How to Use

### Option 1: Direct File Opening
1. Download all files to a folder
2. Open `index.html` in your web browser
3. Navigate between pages using the menu

### Option 2: Local Server (Recommended)
For better testing, use a local server:

**Using Python 3:**
```bash
cd public
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js (with live-server):**
```bash
npm install -g live-server
cd public
live-server
```

**Using PHP:**
```bash
cd public
php -S localhost:8000
```

## 🎯 Customization Guide

### Change Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-primary: #7D9070;
    --color-accent: #C17A62;
    --color-cream: #F9F7F2;
    /* ... etc */
}
```

### Change Fonts:
1. Update Google Fonts link in each HTML file
2. Update CSS variables:
```css
:root {
    --font-serif: 'YourSerifFont', serif;
    --font-sans: 'YourSansFont', sans-serif;
}
```

### Add New Pages:
1. Copy an existing HTML file
2. Update the content
3. Add navigation link to all pages
4. Update active state in `script.js`

### Modify Images:
Simply replace the Unsplash URLs with your own image URLs in the HTML files.

## 📝 Form Handling

Currently, forms show JavaScript alerts on submission. To connect to a backend:

1. **Contact Form** (contact.html):
```javascript
// In contact.html, replace the alert with:
fetch('your-backend-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {'Content-Type': 'application/json'}
})
```

2. **Newsletter Form** (all pages):
```javascript
// In script.js, replace newsletter alert with API call
```

## 🐛 Troubleshooting

### Testimonials Slider Not Working:
- Ensure jQuery loads before Slick Carousel
- Check browser console for errors
- Verify CDN links are accessible

### Animations Not Showing:
- Check if JavaScript is enabled
- Verify Intersection Observer support
- Test scroll position

### Mobile Menu Not Opening:
- Check JavaScript console for errors
- Verify button IDs match script selectors
- Test on different mobile devices

## 📄 License

This is a demonstration project. Replace with your actual license information.

## 🤝 Credits

- **Design System:** Warm Serenity color palette
- **Images:** Unsplash (replace with your own)
- **Icons:** Inline SVG (Lucide React icons converted)
- **Fonts:** Google Fonts
- **Carousel:** Slick Carousel by Ken Wheeler

## 📞 Support

For questions or issues:
- Email: info@goldenhaven.care
- Phone: 1-800-XXX-XXXX

---

**Note:** This is a static website. For production use, consider:
- Adding form backend integration
- Implementing analytics
- Setting up proper hosting
- Configuring SSL/HTTPS
- Optimizing images
- Adding meta tags for SEO
- Setting up caching
- Creating a sitemap.xml