# CLAUDE.md - Project Documentation

## Project Overview
This is a Next.js application with Tailwind CSS and Sass for styling. The project appears to be an immigration services website with pages for different countries, services, and visa types.

## Key Technologies
- **Framework**: Next.js 13
- **Styling**: Tailwind CSS with Sass
- **Animation**: Lottie, Framer Motion, Animate.css
- **UI Components**: MUI, React Slick, Swiper
- **Form Handling**: React Hook Form
- **Email**: Nodemailer

## Project Structure
```
gam_website/
├── components/         # Reusable components
│   ├── BlogDetails/
│   ├── ContactForm/
│   ├── Header/
│   ├── Hero/
│   └── ui/             # Special UI components (3d effects, etc)
├── lib/                # Utility functions
├── pages/              # Next.js routes
│   ├── about/
│   ├── blog/
│   ├── country/
│   ├── services/
│   └── api/            # API routes
├── public/             # Static assets
│   └── images/         # Organized by section
├── styles/             # Global styles
│   ├── sass/           # Sass architecture
│   └── Home.module.css # CSS modules
├── tailwind.config.js  # Tailwind configuration
└── next.config.js      # Next.js configuration
```

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Create production build
npm run start  # Start production server (port 3001)
```

## Key Dependencies
- `next`: 13.0.7
- `tailwindcss`: 4.1.11
- `sass`: 1.54.4
- `lottie-react`: 2.4.1
- `react-responsive-masonry`: 2.1.5
- `react-scroll`: 1.7.16
- `nodemailer`: 7.0.3

## Special Features
- Multi-page structure for different visa types
- Responsive design with Tailwind
- Animated elements using Lottie
- Email functionality via API routes
- 3D UI components (cards, marquees)

## Maintenance Notes
- All images are stored in `/public/images/` organized by section
- Sass files follow a structured architecture in `/styles/sass/`
- API routes are in `/pages/api/`
- Global styles are in `/styles/global.css`

## Security Considerations
- No sensitive keys found in package.json
- API routes appear properly structured
- No obvious security vulnerabilities detected
```