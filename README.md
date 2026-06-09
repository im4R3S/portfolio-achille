
# Achille Balme — Portfolio

Personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS** and deployed on **Vercel**.

The goal of this project is to present my profile, technical background, professional experience and selected projects in a clean, modern and maintainable way.

## Overview

This portfolio highlights:

- my background as a software developer from Switzerland;
- my CFC in application development;
- my professional experience at Jaeger-LeCoultre;
- selected technical and entrepreneurial projects;
- the modern web technologies I am currently using and improving.

## Tech Stack

- **Next.js** — React framework used for the application structure and routing
- **React** — component-based UI development
- **TypeScript** — typed JavaScript for safer and more maintainable code
- **Tailwind CSS** — utility-first styling and responsive design
- **Framer Motion** — subtle section reveal animations
- **Vercel** — hosting and automatic deployment
- **Git / GitHub** — version control and repository hosting

## Features

- Responsive one-page portfolio
- Smooth scrolling navigation
- Back-to-top button
- Animated section reveals
- Custom favicon
- SEO metadata
- Structured sections: Hero, About, Skills, Projects, Contact and Footer

## Project Structure

```txt
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── About.tsx
├── Contact.tsx
├── Footer.tsx
├── Hero.tsx
├── MotionSection.tsx
├── Navbar.tsx
├── Projects.tsx
└── Skills.tsx

public/
└── logo.svg
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local development URL:

```txt
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

## Deployment

The project is deployed with **Vercel**.

The workflow is:

```txt
dev branch  → preview deployment
main branch → production deployment
```

Development is done on the `dev` branch. Once the version is stable, it is merged into `main` to trigger the production deployment.

## Purpose

This project is not only a personal portfolio, but also a way to practice and demonstrate a modern frontend workflow using Next.js, TypeScript, Tailwind CSS, GitHub and Vercel.

## Author

**Achille Balme**
Software Developer — Switzerland

- GitHub: https://github.com/im4R3S
- Email: achille.balme@gmail.com
