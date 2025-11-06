# Mobile Legends Counter Guide - Project Documentation

## Project Overview
A Next.js web application that provides counter-pick guidance for Mobile Legends: Bang Bang heroes. The application helps players find effective counter strategies for their matches.

## Technology Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Features**: Dark mode theme, responsive design

## Project Structure
```
ml-counter-guide/
├── src/
│   └── app/
│       ├── layout.js           # Root layout with dark mode enabled
│       ├── globals.css         # Global styles and Tailwind imports
│       └── components/         # Reusable UI components
│           ├── Navbar.js
│           ├── Footer.js
│           └── BackToTopButton.js
└── CLAUDE.MD                   # This file
```

## Key Features
1. **Hero Counter Information**: Provides detailed counter-pick suggestions
2. **Dark Mode Theme**: Fixed dark mode theme for optimal viewing experience
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Navigation**: User-friendly navigation with back-to-top functionality

## Recent Changes
- Removed theme toggle functionality - dark mode is now the permanent default theme
- Removed ThemeContext and all related theme switching components
- Simplified Navbar by removing the theme toggle button
- Updated all components to use dark mode styling exclusively

## Development
To run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build
To create a production build:
```bash
npm run build
# or
yarn build
```

## Notes
- The app uses Next.js App Router structure
- Dark mode is enabled by default via the `dark` class on the `<html>` element
- All styling uses Tailwind CSS utility classes
