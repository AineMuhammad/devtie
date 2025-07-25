<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/f02cc599-80cb-4026-b403-32bd99143e97" />
<img width="1919" height="894" alt="image" src="https://github.com/user-attachments/assets/c134f1a7-6daf-49e6-b1cc-46f317fdc853" />
<img width="1919" height="901" alt="image" src="https://github.com/user-attachments/assets/497aec32-a3f4-4c3e-8761-243fdf85570c" />


# DevTie Landing Page

A modern, responsive landing page for DevTie - a software development and staff augmentation company. Built with React, Vite, and Material-UI, featuring smooth animations, interactive components, and a professional design.

## Features

- **Modern Design**: Clean, professional UI with Material-UI components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: GSAP and Framer Motion powered animations
- **Interactive Components**: Hover effects, scroll-triggered animations, and micro-interactions
- **Contact Integration**: EmailJS integration for contact form functionality
- **Dark/Light Theme**: Theme context with customizable color schemes
- **Performance Optimized**: Fast loading with Vite build system
- **SEO Friendly**: Proper meta tags and semantic HTML structure

##  Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v6
- **Styling**: Tailwind CSS v4
- **Animations**:
  - GSAP (GreenSock Animation Platform)
  - Framer Motion
- **Icons**: Material Icons, Radix UI Icons
- **Fonts**: Inter, Roboto (via Fontsource)
- **Contact Forms**: EmailJS, Formspree
- **Development**: ESLint, TypeScript support

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd devtie-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

##  Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── HeroSection.jsx  # Main hero section
│   ├── WhyChooseUs.jsx  # Features section
│   ├── OurServices.jsx  # Services showcase
│   ├── StaffAugmentation.jsx # Staff augmentation section
│   ├── TechnologiesTools.jsx # Tech stack display
│   ├── ContactSection.jsx    # Contact form
│   └── Footer.jsx       # Footer component
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management
├── assets/              # Static assets
├── theme.js             # Material-UI theme configuration
├── LandingPage.jsx      # Main landing page component
└── main.jsx            # Application entry point
```

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Key Sections

### Hero Section

- Animated logo and text reveal
- Call-to-action buttons
- Particle effects and decorative elements
- Responsive design for all screen sizes

### Why Choose Us

- Feature cards with hover animations
- Icon-based feature highlights
- Scroll-triggered animations

### Our Services

- Service cards with interactive hover effects
- Detailed service descriptions
- Animated background elements

### Staff Augmentation

- Dedicated section for staff augmentation services
- Professional presentation of team extension capabilities

### Technologies & Tools

- Technology stack showcase
- Interactive tech icons
- Modern grid layout

### Contact Section

- Integrated contact form
- EmailJS functionality
- Professional contact information

##  Customization

### Theme Configuration

The theme can be customized in `src/theme.js`:

- Primary and secondary colors
- Typography settings
- Component styling overrides

### Content Updates

- Update text content in respective component files
- Replace images in the `public/` directory
- Modify contact information in `ContactSection.jsx`

### Animation Settings

- GSAP animations can be adjusted in component files
- Framer Motion settings can be modified for different effects
- Scroll trigger configurations can be customized

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

