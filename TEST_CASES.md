# Test Cases - Dhinesha G Portfolio Website

## 📋 Test Coverage Overview

This document contains comprehensive test cases for:

- UI Navigation & Layout
- React Components (Skill Search, Projects, Progress Tracker)
- Form Submission & Validation
- Image Upload Functionality
- Lightbox Modal
- Responsive Design
- Accessibility
- Browser Compatibility

---

## 1️⃣ Navigation & Menu Tests

### TC-NAV-001: Navigation Menu Display

**Purpose**: Verify navigation menu is visible and properly formatted
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open index.html in browser | Navigation bar appears at top with fixed position |
| 2 | Verify menu items present | Home, About, Skills, Achievements, Contact links visible |
| 3 | Check menu styling | Dark background with cyan/magenta colors applied |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-NAV-002: Smooth Scroll Navigation

**Purpose**: Test that clicking navigation links smoothly scrolls to sections
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "About" link in navigation | Page smoothly scrolls to About section |
| 2 | Verify active state | "About" link gets active styling (purple background) |
| 3 | Click "Skills" link | Page scrolls to Skills section smoothly |
| 4 | Check "Skills" is now active | Active state transferred to Skills link |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-NAV-003: Active Link Updates on Scroll

**Purpose**: Verify active navigation link updates when manually scrolling
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Manually scroll down to Achievements section | Active link automatically updates to Achievements |
| 2 | Scroll up to Home section | Home link becomes active |
| 3 | Scroll to Contact section | Contact link highlights |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-NAV-004: ESC Key Closes Lightbox

**Purpose**: Test ESC key functionality for closing modal
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click on any project gallery item | Lightbox modal opens with image |
| 2 | Press ESC key | Lightbox closes immediately |
| 3 | Background click also closes modal | Click outside image closes lightbox |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 2️⃣ Profile & Image Upload Tests

### TC-IMG-001: Profile Image Display

**Purpose**: Verify profile image loads and displays correctly
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load index.html | Profile image (Dhinesha G.png) displays in circular frame |
| 2 | Check image properties | Image size: 150px × 150px, border-radius: 50% |
| 3 | Hover on image | Image scales up slightly with enhanced shadow |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-IMG-002: Upload New Profile Image

**Purpose**: Test profile image upload functionality
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Upload Profile Image" button | File picker dialog opens |
| 2 | Select a PNG/JPG image file | File is accepted |
| 3 | Image preview updates | Profile image instantly shows uploaded file |
| 4 | Reload page | Uploaded image persists (if localStorage enabled) |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-IMG-003: Invalid File Upload

**Purpose**: Test file upload validation
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Try uploading non-image file (.txt/.pdf) | File picker only accepts image/\* types |
| 2 | Try uploading corrupted image | File accepted but displays placeholder if corrupt |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 3️⃣ React Component Tests

### TC-REACT-SKL-001: Skill Search Functionality

**Purpose**: Test skill filtering in real-time
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Skills section | React-powered Skill Search card displays |
| 2 | Type "HTML" in search box | Only "HTML" skill appears in list with "Matched" badge |
| 3 | Type "Py" | "Python" skill matches and displays |
| 4 | Clear search box | All 8 skills (HTML, CSS, Java, Python, SQL, Power BI, UiPath, GitHub) display |
| 5 | Type non-existent skill "XYZ" | No skills displayed, empty list |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-SKL-002: Skill Search Case Insensitivity

**Purpose**: Verify search works regardless of case
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Type "html" (lowercase) | HTML skill matches |
| 2 | Type "PYTHON" (uppercase) | Python skill matches |
| 3 | Type "JaVa" (mixed case) | Java skill matches |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-PRJ-001: Project Filtering by Category

**Purpose**: Test project filter functionality
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Projects section | "Screen Recorder Application" featured project displays |
| 2 | Click "WEB" filter chip | 3 web projects display (Screen Recorder, DDoS, E-commerce) |
| 3 | Click "AI" filter chip | AgrogaurdAi project displays |
| 4 | Click "DATA" filter chip | Power BI Dashboard displays |
| 5 | Click "AUTOMATION" filter chip | Background Remover (UiPath) displays |
| 6 | Click "ALL" filter chip | All 6 projects display |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-PRJ-002: Featured Project Display

**Purpose**: Verify featured project section
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load Projects section | Featured project shows "Screen Recorder Application" |
| 2 | Check featured card styling | Cyan border, gradient background, highlighted appearance |
| 3 | Check project details | Summary and tech stack (HTML, CSS, JavaScript) visible |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-TRK-001: Progress Tracker - Add Task

**Purpose**: Test adding new learning tasks
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Skills section → Progress Tracker card | Input field and "Add Task" button visible |
| 2 | Type "Learn React Hooks" in input | Text appears in input field |
| 3 | Click "Add Task" button | Task added to list below, input clears |
| 4 | Verify task count | Progress shows "2 / 3 tasks completed" (1 new + 2 existing) |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-TRK-002: Progress Tracker - Mark Complete

**Purpose**: Test task completion toggle
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click checkbox next to incomplete task | Checkbox becomes checked (✓) |
| 2 | Task still visible with checked state | Task remains in list |
| 3 | Progress updates | "2 / 3 tasks completed" changes to "3 / 3 tasks completed" |
| 4 | Uncheck task | Checkbox unchecks, progress reverts to "2 / 3" |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-REACT-TRK-003: Progress Tracker - Empty Input Validation

**Purpose**: Test validation when adding tasks
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave input field empty | Input shows placeholder text |
| 2 | Click "Add Task" with empty input | No task added, no error shown (silent validation) |
| 3 | Type only spaces " " | Clicking Add Task does nothing (trimmed validation) |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 4️⃣ Form Submission Tests

### TC-FORM-001: Contact Form - Valid Submission

**Purpose**: Test successful form submission
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Contact section | Form with Full Name, Email, Subject, Message fields visible |
| 2 | Fill: Name = "Dhinesha" | Text enters field |
| 3 | Fill: Email = "test@example.com" | Email enters field |
| 4 | Fill: Subject = "Project Inquiry" | Subject enters field |
| 5 | Fill: Message = "Great portfolio!" | Message enters textarea |
| 6 | Click "Send Message" button | Success alert: "Message sent successfully!" with thank you message |
| 7 | Verify form clears | All fields reset to empty |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-FORM-002: Contact Form - Required Field Validation

**Purpose**: Test HTML5 form validation
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Send Message" without filling fields | Browser shows validation error on first empty field |
| 2 | Fill only Name, leave Email empty | Click Submit → Email field highlighted as required |
| 3 | Fill Name & Email, leave Subject empty | Click Submit → Subject field highlighted as required |
| 4 | Fill all but Message | Click Submit → Message field highlighted as required |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-FORM-003: Email Validation

**Purpose**: Test email format validation
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter invalid email "notanemail" | Field accepts but browser validation catches on submit |
| 2 | Enter valid email "user@domain.com" | Email accepted without validation errors |
| 3 | Enter another valid format "name+tag@example.co.uk" | Email accepted |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-FORM-004: Form Success Message Content

**Purpose**: Verify success message displays correct information
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit form with Name = "Dhinesha" | Alert includes: "Thank you Dhinesha" |
| 2 | Submit form with Name = "John" | Alert includes: "Thank you John" |
| 3 | Message includes checkmark symbol | Alert shows "Message sent successfully! ✓" |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 5️⃣ Lightbox Modal Tests

### TC-LBX-001: Lightbox Modal Open

**Purpose**: Test lightbox opening on project click
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Project Gallery section | 6 project items displayed in grid |
| 2 | Click on first project card | Lightbox modal opens with dark overlay |
| 3 | Modal shows close button (×) | Close button visible in top-right corner |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LBX-002: Lightbox Close - Button Click

**Purpose**: Test closing lightbox via close button
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open lightbox by clicking project | Modal open with full screen overlay |
| 2 | Click × button | Modal closes smoothly, overlay disappears |
| 3 | Page scrollable again | User can scroll content behind modal |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LBX-003: Lightbox Close - Background Click

**Purpose**: Test closing lightbox by clicking outside content
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open lightbox modal | Dark overlay and image visible |
| 2 | Click on dark background (not image) | Modal closes |
| 3 | Click directly on image | Modal stays open (image click not close trigger) |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LBX-004: Lightbox Close - ESC Key

**Purpose**: Test closing lightbox via keyboard
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open lightbox modal | Modal visible, focus on modal |
| 2 | Press ESC key | Modal closes immediately |
| 3 | Try ESC when modal closed | No effect, normal behavior |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 6️⃣ Layout & Design Tests

### TC-LAYOUT-001: Responsive Mobile View (375px)

**Purpose**: Test layout on small mobile devices
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open DevTools (F12), set viewport to 375×667 | Page adapts to mobile width |
| 2 | Check navigation | Menu items stack or become hamburger menu |
| 3 | Check projects grid | Projects display in 1 column |
| 4 | Check form fields | Form inputs full width, stacked vertically |
| 5 | Check profile image | Profile still circular, properly scaled |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LAYOUT-002: Responsive Tablet View (768px)

**Purpose**: Test layout on tablet devices
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Set viewport to 768×1024 | Page adapts to tablet width |
| 2 | Check projects grid | Projects display in 2 columns |
| 3 | Check content width | Container width appropriate (not too wide) |
| 4 | Check achievement badges | Badges properly sized for tablet |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LAYOUT-003: Responsive Desktop View (1920px+)

**Purpose**: Test layout on large desktop screens
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Set viewport to 1920×1080 or larger | Page maintains 80% container width |
| 2 | Check projects grid | Projects display in 3+ columns |
| 3 | Verify centering | Content properly centered, not stretched |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-LAYOUT-004: Animation Presence

**Purpose**: Verify animations display on page load
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load page | Profile section slides up smoothly (slideUp animation) |
| 2 | Observe H1 heading | Title has glowing text animation (glow animation) |
| 3 | Observe background | Neural network nodes and particles animate |
| 4 | Hover over project cards | Cards have hover scale/shadow animation |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 7️⃣ Content & Data Tests

### TC-CNT-001: Profile Information Display

**Purpose**: Verify personal information is correctly displayed
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Check Home section | Name "Dhinesha G" displays prominently |
| 2 | Verify contact info | Email "gnanaveldhinesha@gmail.com" visible |
| 3 | Verify phone | Phone "9942687393" displayed |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-CNT-002: Education Table

**Purpose**: Verify education information displays correctly
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to About section | Education table visible with 2 rows |
| 2 | Check HSC row | 2022-2023, 67% result displays |
| 3 | Check B.E. row | 2023-Present, CGPA 8.50 displays |
| 4 | Verify table header | Columns: Course, Institution, Year, Result |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-CNT-003: Projects List Content

**Purpose**: Verify all projects display correctly
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Check Projects section | 6 projects listed with descriptions |
| 2 | Verify project names | Screen Recorder, DDoS Prevention, AgrogaurdAi, etc. |
| 3 | Check React project display | Projects rendered by React component |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-CNT-004: Skills Display

**Purpose**: Verify technical skills section
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Skills section | Programming Languages, Tools, Languages listed |
| 2 | Check skill categories | HTML, CSS, Python, SQL, etc. listed |
| 3 | Check tools listed | GitHub, VS Code, ChatGPT, etc. displayed |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-CNT-005: Achievements Display

**Purpose**: Verify achievement cards
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Achievements section | 3 achievement cards visible |
| 2 | Check A1 badge | Shows "NPTEL Silver Certification" |
| 3 | Check A2 badge | Shows "Google AI/ML Internship, Grade A" |
| 4 | Check A3 badge | Shows "Project and Tool Certifications" |
| 5 | Hover achievements | Cards lift/scale with enhanced shadow |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-CNT-006: Social Links

**Purpose**: Verify social media links are functional
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Scroll to Contact section | LinkedIn, GitHub, Salesforce buttons visible |
| 2 | Right-click LinkedIn link | URL shows: linkedin.com/in/dhinesha-g-673601292 |
| 3 | Right-click GitHub link | URL shows: github.com/Dhinesha |
| 4 | Right-click Salesforce link | URL shows: salesforce.com/trailblazer/... |
| 5 | Links have rel="noopener" | Links open in new tab safely |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 8️⃣ Performance Tests

### TC-PERF-001: Page Load Time

**Purpose**: Verify page loads within acceptable time
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open DevTools (F12) → Network tab | Clear cache (Ctrl+Shift+Delete) |
| 2 | Reload page (F5) | Page fully loads in < 3 seconds |
| 3 | Check resource sizes | No resource > 1 MB individually |
| 4 | Total page size | < 100 KB (all files combined) |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-PERF-002: React Component Render Performance

**Purpose**: Test React components render efficiently
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open DevTools → React DevTools | Go to Skills section |
| 2 | Search for skills (50+ keystrokes) | No lag or stuttering |
| 3 | Filter projects multiple times | Instant filter updates |
| 4 | Add/remove tasks rapidly | Smooth UI responsiveness |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-PERF-003: Animation Smoothness

**Purpose**: Verify animations run at 60fps
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to page | Sliding/fading animations appear smooth |
| 2 | Scroll down | Background particles animate smoothly |
| 3 | Hover over elements | Hover animations not jittery |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 9️⃣ Accessibility Tests

### TC-A11Y-001: Alt Text for Images

**Purpose**: Verify all images have alt text
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Right-click profile image → Inspect | `alt="Profile Image"` present |
| 2 | Check lightbox image | `alt="Project preview"` present |
| 3 | Disable images in browser | Alt text displays where images should be |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-A11Y-002: Keyboard Navigation

**Purpose**: Test full keyboard navigation without mouse
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Press Tab key repeatedly | Focus moves through all interactive elements |
| 2 | Navigate through form fields | Tab moves to each input field in order |
| 3 | Press Enter on links | Navigation works (Shift+Tab goes backward) |
| 4 | Focus visible on links | Visual focus indicator shows current element |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-A11Y-003: Form Label Association

**Purpose**: Verify form labels properly associated with inputs
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Inspect form in DevTools | Each input has associated `<label>` |
| 2 | Labels have for="id" | Matches input id attribute |
| 3 | Click label text | Focus moves to associated input field |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-A11Y-004: Color Contrast

**Purpose**: Verify text has sufficient contrast
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Use WebAIM Contrast Checker | White text on dark background: WCAG AA pass |
| 2 | Check heading colors | Text on background meets 4.5:1 ratio minimum |
| 3 | Check button text | Button text readable with sufficient contrast |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-A11Y-005: Form Input Labels

**Purpose**: Test form accessibility for screen readers
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Use screen reader (NVDA/JAWS) | All form fields have proper labels |
| 2 | Tab through form | Screen reader announces field type and label |
| 3 | Submit button | Screen reader announces it as "Send Message button" |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 🔟 Browser Compatibility Tests

### TC-BROWSER-001: Chrome Latest

**Purpose**: Test on Chrome browser
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open in Chrome (latest version) | All features work, animations smooth |
| 2 | Check console (F12) | No JavaScript errors |
| 3 | Test React components | Skill search and projects filter work |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-BROWSER-002: Firefox Latest

**Purpose**: Test on Firefox browser
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open in Firefox (latest version) | Layout renders correctly without issues |
| 2 | Test animations | CSS animations play smoothly |
| 3 | Test form submission | Form works without errors |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-BROWSER-003: Safari Latest

**Purpose**: Test on Safari browser (includes iOS)
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open in Safari 14+ | Page displays without webkit errors |
| 2 | Check backdrop filter | Blur effects work with -webkit-backdrop-filter |
| 3 | Test touch interactions | Mobile-like taps register on touch devices |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-BROWSER-004: Edge Latest

**Purpose**: Test on Microsoft Edge browser
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open in Edge (latest) | All features functional |
| 2 | Test animations | Smooth performance |
| 3 | Check console | No compatibility errors |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 1️⃣1️⃣ Edge Cases & Error Handling

### TC-EDGE-001: Rapid Navigation Clicks

**Purpose**: Test navigation with rapid clicks
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Rapidly click different nav items (10+ times) | No layout breaks, smooth transitions |
| 2 | No console errors | JavaScript handles rapid events gracefully |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-EDGE-002: Form Submission Spam

**Purpose**: Test form with rapid submissions
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill form completely | Click Submit 5+ times rapidly |
| 2 | Only first submission processes | No duplicate submissions |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-EDGE-003: Large File Image Upload

**Purpose**: Test upload with oversized image
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Try uploading 10MB+ image | File picker accepts (.jpg/.png) |
| 2 | FileReader processes image | Large image still renders (may be slower) |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-EDGE-004: Special Characters in Form

**Purpose**: Test form with special characters
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter name with special chars: "José María" | Accepted and processed correctly |
| 2 | Enter email with plus: "user+tag@example.com" | Email validation passes |
| 3 | Enter message with emoji: "Great! 👍🚀" | Emoji handled properly |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-EDGE-005: Network Offline - Static Content

**Purpose**: Test site with no internet connection
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load page with internet | Page loads normally |
| 2 | Disable network (DevTools) | Static content displays from cache |
| 3 | Navigation still works | Internal navigation functional offline |
| 4 | React components load | Components may show if cached |
| **Status** | ✅ PASS/❌ FAIL | |

---

## 1️⃣2️⃣ Integration Tests

### TC-INT-001: Full User Journey - Browse Portfolio

**Purpose**: Complete user flow: visit, explore, contact
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User opens index.html | Home page loads with profile |
| 2 | Click "About" in nav | About section loads with education |
| 3 | Scroll to Projects | Projects React component displays |
| 4 | Filter projects by "WEB" | Only web projects show |
| 5 | Navigate to Achievements | Achievement cards visible with hover effects |
| 6 | Scroll to Contact form | Form visible and ready to fill |
| 7 | Submit contact form | Success message shows, form clears |
| 8 | User satisfied ✓ | Journey complete without errors |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-INT-002: Full User Journey - Interact with React

**Purpose**: Test React components in real user workflow
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User navigates to Skills | Skill Search + Progress Tracker visible |
| 2 | Search for "Python" | Python filtered instantly |
| 3 | Add new task "Master PyTorch" | Task added successfully |
| 4 | Navigate to Projects | React project component loads |
| 5 | Filter projects by "AI" | Shows AgrogaurdAi project |
| 6 | Return to Skills | Task still in list (state persisted) |
| 7 | Toggle task complete | Checkbox works, counter updates |
| **Status** | ✅ PASS/❌ FAIL | |

### TC-INT-003: File Separation Integration

**Purpose**: Test all separated files work together
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Verify index.html links styles.css | Styling applied correctly |
| 2 | Verify index.html loads app.js | Form, navigation, lightbox work |
| 3 | Verify index.html loads react-app.js | React components render |
| 4 | All CDN scripts load | React, ReactDOM, Babel loaded from CDN |
| 5 | No 404 errors in console | All resources found and loaded |
| **Status** | ✅ PASS/❌ FAIL | |

---

## Test Execution Summary

### Test Metrics Template

| Category              | Total Tests | Passed | Failed | Pass % |
| --------------------- | ----------- | ------ | ------ | ------ |
| Navigation            | 4           |        |        |        |
| Profile & Images      | 3           |        |        |        |
| React Components      | 11          |        |        |        |
| Form Submission       | 4           |        |        |        |
| Lightbox Modal        | 4           |        |        |        |
| Layout & Design       | 4           |        |        |        |
| Content & Data        | 6           |        |        |        |
| Performance           | 3           |        |        |        |
| Accessibility         | 5           |        |        |        |
| Browser Compatibility | 4           |        |        |        |
| Edge Cases            | 5           |        |        |        |
| Integration Tests     | 3           |        |        |        |
| **TOTAL**             | **56**      |        |        |        |

---

## Test Execution Notes

### Recommended Testing Environment

- **Browser**: Chrome Dev Tools + Firefox DevTools for cross-browser
- **Screen Reader**: NVDA (Windows) or VoiceOver (Mac)
- **Viewport Tester**: Chrome DevTools or Responsive Design Mode
- **Performance Tools**: Chrome Lighthouse, WebPageTest
- **Connectivity**: Network throttling in DevTools (3G, 4G, Offline)

### Prerequisites for Testing

- ✅ All files (index.html, styles.css, app.js, react-app.js) present in directory
- ✅ Profile image (Dhinesha G.png) in same directory
- ✅ Modern browser supporting ES6+
- ✅ JavaScript enabled
- ✅ Internet connection (for CDN React libraries)

### Known Limitations

- React components require internet (CDN-based)
- Image upload persists in browser session (not server-side)
- Contact form doesn't send actual emails (alert-based)
- Lightbox doesn't display images (gallery-item divs are text-only)

### Regression Testing

Run this complete test suite after any changes to:

- HTML structure
- CSS styling
- JavaScript logic
- React component code

---

## Sign-Off

| Role      | Name | Date | Status |
| --------- | ---- | ---- | ------ |
| Tester    |      |      |        |
| QA Lead   |      |      |        |
| Developer |      |      |        |

---

**Document Version**: 1.0  
**Last Updated**: March 27, 2026  
**Status**: Ready for Testing ✅
