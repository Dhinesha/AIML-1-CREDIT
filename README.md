# Dhinesha G - Personal Portfolio

A modern, interactive personal portfolio website built with HTML, CSS, JavaScript, and React. Features an AI-themed design, dynamic project showcase, and interactive skill filtering.

## 🌟 Features

- **Responsive Design**: Mobile-friendly layout with smooth animations and transitions
- **AI-Themed Background**: Animated neural network and floating particles for visual appeal
- **React-Powered Sections**: Interactive components for project filtering and skill tracking
- **Profile Image Upload**: Client-side image upload with instant preview
- **Dynamic Project Showcase**: Filterable project gallery with real-time category filtering
- **Skill Search**: Live search to filter technical skills
- **Progress Tracker**: Task management system for learning goals
- **Contact Form**: Functional form with success notifications
- **Smooth Navigation**: Fixed navigation menu with active state tracking and smooth scrolling
- **Accessibility**: Alt text for images, semantic HTML, and ARIA labels

---

## 📁 Project Structure

```
one credit/
├── index.html          # Main entry point (split HTML markup)
├── styles.css          # All CSS styles and animations
├── app.js              # Vanilla JavaScript (form, nav, lightbox, image upload)
├── react-app.js        # React components (skill search, projects, progress tracker)
├── Dhinesha G.png      # Profile image
├── README.md           # This documentation
└── protfolio.html      # Legacy file (original monolithic version)
```

### File Descriptions

#### **index.html**

- Main entry point - contains all HTML markup and structure
- Sections: Home, About, Education, Projects, Skills, Achievements, Contact
- Links to external styles and scripts
- React root mount points for dynamic components

#### **styles.css**

- All CSS styling (~1000+ lines)
- Contains:
  - Global styles and animations
  - Component styles (navigation, forms, cards, gallery)
  - Responsive grid layouts
  - Keyframe animations (pulse, glow, slide, fade)
  - Theme colors (cyan, purple, gradient accents)

#### **app.js**

- Vanilla JavaScript for core functionality
- Features:
  - Form submission handler with validation
  - Smooth scroll navigation
  - Active link highlighting on scroll
  - Profile image upload with FileReader API
  - Lightbox modal for project images
  - ESC key handler to close modals

#### **react-app.js**

- React 18 components (powered by Babel)
- Components:
  1. **ReactFeaturesApp**: Skill search and progress tracker
  2. **ReactProjectsApp**: Featured project showcase with category filtering

---

## 🚀 Getting Started

### Prerequisites

- Node.js (optional - not required for static site)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dhinesha/AIML-1-CREDIT.git
   cd "one credit"
   ```

2. **Open in browser**

   ```bash
   # Option 1: Double-click index.html
   # Option 2: Drag index.html to browser
   # Option 3: Use a local server
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **For production with a server**
   - Copy all files to your web hosting
   - Ensure all file paths are correct
   - No build step required (uses CDN for React)

---

## ⚛️ React Components

### 1. ReactFeaturesApp

**Location**: `react-app.js`

**Functionality**:

- **Skill Search**: Filter through 8 technical skills in real-time
- **Progress Tracker**: Add, complete, and manage learning tasks

**Technologies**:

- `useState` hook for state management
- `useMemo` hook for performance-optimized filtering

**Usage**:

- Type skill name to filter matches
- Click "Add Task" to create new learning goals
- Check boxes to mark tasks complete

### 2. ReactProjectsApp

**Location**: `react-app.js`

**Functionality**:

- **Featured Project Display**: Highlighted Screen Recorder project details
- **Project Filtering**: Filter projects by category (ALL, WEB, AI, DATA, AUTOMATION)
- **Project Cards**: Grid view with project title, summary, and tech stack

**Projects Included**:

1. Screen Recorder Application (Featured)
2. DDoS Attack Prevention Website (OpenWeaver)
3. AgrogaurdAi (Farmer Disease Predict Agent)
4. Energy Consumption Dashboard (Power BI)
5. Background Remover Automation (UiPath)
6. E-commerce Website Design (Figma)

**Technologies**:

- `useState` hook for filter state
- Dynamic grid layout based on visible projects

---

## 🎨 Design & Styling

### Color Scheme

- **Primary Gradient**: Cyan (`#00ffff`) to Magenta (`#ff00ff`)
- **Dark Background**: `#0a0a0a`
- **Accent Purple**: `#667eea` to `#764ba2`
- **Light Content**: `rgba(255, 255, 255, 0.95)`

### Animations

- `pulse`: 2s scale and opacity pulse
- `glow`: Text shadow glow effect on heading
- `slideUp`: Entrance animation from bottom
- `fadeIn`: Opacity transition
- `slideInLeft`: Left-to-right slide
- `float`: Particle floating animation

### Responsive Breakpoints

- Fully responsive grid layouts
- Adapts from mobile (1 column) to desktop (3+ columns)
- Fixed navigation stays at top on scroll

---

## 📋 Sections & Content

### Home

- Profile image with upload capability
- Name: Dhinesha G
- Contact details: Phone & Email

### About

- Personal summary
- Education table (HSC & B.E. AI/ML)
- Relevant coursework
- Projects list
- Internship details
- Certifications (NPTEL, MathWorks, etc.)
- Activities & hobbies

### Skills

- Programming languages
- Tools & IDEs
- Language proficiency
- React-powered skill search

### Achievements

- Achievement badges (NPTEL Silver, Google Internship, Certifications)
- Animated card grid with hover effects

### Contact

- Functional contact form with validation
- Social links (LinkedIn, GitHub, Salesforce)
- Success notification on form submission

---

## 🔧 Customization Guide

### Update Profile Information

**Edit in `index.html`**:

```html
<h1>Dhinesha G</h1>
<p>
  <strong>Contact:</strong> 9942687393 |
  <strong>Email:</strong> gnanaveldhinesha@gmail.com
</p>
```

### Change Profile Image

1. Replace `Dhinesha G.png` with your image
2. Update reference in `index.html`:
   ```html
   <img
     src="your-image.png"
     alt="Profile Image"
     id="profile-photo"
     class="profile-photo"
   />
   ```

### Modify Projects

**In `react-app.js`**, update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "web", // web, ai, data, automation
    summary: "Project description",
    stack: "Technologies used",
  },
  // ... more projects
];
```

### Add Skills

**In `react-app.js`**, modify the `baseSkills` array:

```javascript
const baseSkills = [
  "HTML",
  "CSS",
  "Your Skill Here",
  // ... more skills
];
```

### Adjust Colors

**In `styles.css`**:

```css
/* Example: Change primary accent color */
.react-card {
  border: 1px solid rgba(YOUR_COLOR_HERE, 0.35);
}
```

---

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Site will be live at: `https://username.github.io/AIML-1-CREDIT`

### Netlify

1. Drag and drop the project folder into Netlify
2. Custom domain works out of box

### Traditional Web Server

1. Upload all files via FTP/SSH
2. Ensure `index.html` is the default page
3. File permissions set correctly (644 for files, 755 for directories)

---

## 📦 Dependencies

### External CDNs

- **React 18**: `https://unpkg.com/react@18/umd/react.development.js`
- **ReactDOM 18**: `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- **Babel Standalone**: `https://unpkg.com/@babel/standalone/babel.min.js`

### No Build Step Required

- Uses CDN links directly
- No npm or build tool needed
- Works in any modern browser

---

## 🐛 Troubleshooting

### Images Not Loading

- Ensure image file is in the same directory as `index.html`
- Check file name spelling (case-sensitive on Linux)
- Verify `<img>` src attribute matches filename

### React Components Not Rendering

- Check browser console for errors (F12 → Console)
- Ensure React CDN links are accessible
- Verify `id="react-projects-root"` and `id="react-features-root"` exist in HTML

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Ensure `styles.css` is in the same directory
- Check CSS file path in `<link>` tag

### Form Not Working

- Check `app.js` is loaded before form interaction
- Verify all form input IDs match JavaScript references
- Check browser console for JavaScript errors

---

## ✨ Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 11 (not supported - uses modern ES6+)

---

## 📄 File Size Overview

| File         | Size       | Purpose          |
| ------------ | ---------- | ---------------- |
| index.html   | ~15 KB     | HTML markup      |
| styles.css   | ~35 KB     | All styling      |
| app.js       | ~8 KB      | Vanilla JS logic |
| react-app.js | ~12 KB     | React components |
| **Total**    | **~70 KB** | Full site        |

---

## 🔐 Performance Considerations

- **No build process**: Faster development iteration
- **CDN React**: Leverages browser caching of popular libraries
- **Optimized animations**: Uses CSS animations (GPU-accelerated)
- **Lazy loading**: Add for images if performance is critical

---

## 📝 License

This project is personal and available for educational use. Modify as needed for your own portfolio.

---

## 🤝 Contributing

This is a personal portfolio. For improvements or suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push and create a Pull Request

---

## 📬 Contact

- **Email**: gnanaveldhinesha@gmail.com
- **Phone**: 9942687393
- **LinkedIn**: [Dhinesha G](https://www.linkedin.com/in/dhinesha-g-673601292)
- **GitHub**: [Dhinesha](https://github.com/Dhinesha)
- **Salesforce**: [Trailblazer Profile](https://www.salesforce.com/trailblazer/qe74964dp11h9n3df)

---

## 📅 Last Updated

March 27, 2026

---

**Happy Coding! 🚀**
