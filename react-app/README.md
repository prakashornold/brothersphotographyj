# Brothers Photography - React Application

A modern React-based photography portfolio website for Brothers Photography, converted from a vanilla JavaScript/HTML project.

## Features

- **Landing Page**: Full-screen slideshow with smooth transitions
- **Home Page**: Interactive image carousel with thumbnail navigation
- **Blog System**: Browse and view photography blog posts
- **Search Functionality**: Search through blog posts by title
- **Contact Form**: Multi-step contact form for booking inquiries
- **Responsive Design**: Fully responsive across all devices
- **Social Media Integration**: Links to Instagram, Facebook, and YouTube

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **React Router** for client-side routing
- **Font Awesome** for icons
- **CSS Modules** for styling

## Project Structure

```
react-app/
├── public/
│   └── images/          # Static image assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Page components
│   │   ├── Landing.tsx
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── Contact.tsx
│   │   └── Search.tsx
│   ├── data/            # Static data files
│   │   ├── blogData.ts
│   │   ├── featuredData.ts
│   │   └── homeImages.ts
│   ├── types/           # TypeScript type definitions
│   ├── styles/          # CSS files
│   └── App.tsx          # Main app component with routing
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` directory.

## Key Features Maintained

All features from the original vanilla JavaScript application have been preserved:

1. **Landing Page Slideshow**: Auto-rotating slideshow with custom positioning
2. **Image Carousel**: Interactive carousel with prev/next buttons and thumbnail selection
3. **Blog Posts**: Complete blog system with individual post views and related posts
4. **Search**: Full-text search through blog post titles
5. **Contact Form**: Multi-field form with validation and localStorage persistence
6. **Responsive Navigation**: Mobile-friendly menu system with multiple navigation states
7. **Social Media Links**: Integration with Instagram, Facebook, and YouTube

## Routes

- `/` - Landing page with slideshow
- `/home` - Home page with carousel and featured content
- `/blog` - Blog listing page
- `/blog/:title` - Individual blog post view
- `/contact` - Contact/booking form
- `/search?q=query` - Search results page

## Development Notes

- All images are served from the `public/images` directory
- Blog data is stored in TypeScript files (can be easily migrated to a database)
- Form submissions are currently stored in localStorage (can be integrated with backend API)
- Responsive breakpoints match the original design specifications

## License

Copyright 2024 Brothers Photography. All Rights Reserved.
