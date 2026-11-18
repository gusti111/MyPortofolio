<div align="center">

# GUSTY FAQIKH — PERSONAL PORTFOLIO

**A responsive developer portfolio built with React, TypeScript, and Vite.**

Project case studies · Profile · Certificates · Print-ready CV

</div>

---

## Overview

This repository contains a personal portfolio website designed to present software projects, professional background, and contact information through a structured, responsive interface.

The application uses client-side routes and a data-driven project catalog. It is prepared for deployment to Firebase Hosting, with the production build served from the Vite dist directory.

## Experience

- Responsive navigation and page routing.
- Indonesian and English interface toggle.
- Light, dark, and system theme preferences.
- Project search, category filtering, and project detail routes.
- Keyboard command palette using Ctrl/Cmd + K.
- Certificate media gallery with a LinkedIn credentials destination.
- Print-ready CV page with browser Print / Save as PDF support.
- Contact links and copy-email interaction.
- Visible keyboard-focus states and reduced-motion support.

The certificate gallery currently links to the owner's LinkedIn profile rather than inventing individual certificate records. The CV is rendered as a web page and can be printed to PDF after its contents have been reviewed.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tool | Vite 6 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Hosting target | Firebase Hosting |

## Requirements

- Node.js 20.19+ or 22.12+.
- npm.
- Firebase CLI only for deployment.

## Getting started

    git clone https://github.com/gusti111/MyPortofolio.git
    cd MyPortofolio
    npm install
    npm run dev

## Quality checks

Run the TypeScript project check:

    npm run typecheck

Create a production build:

    npm run build

Preview the generated build:

    npm run preview

## Firebase Hosting deployment

1. Create a Firebase project in the Firebase Console.
2. Install and authenticate the Firebase CLI.
3. Copy .firebaserc.example to .firebaserc and replace the project ID.
4. Select the intended Firebase project.
5. Build the application.
6. Deploy the Hosting target.

    npm install -g firebase-tools
    firebase login
    npm run build
    firebase deploy --only hosting

Firebase Hosting serves the production output from dist/. Review firebase.json and project aliases before deploying.

## Project structure

    MyPortofolio/
    ├── public/
    │   └── assets/       # Favicon, social card, project artwork
    ├── src/
    │   ├── App.tsx
    │   ├── data/
    │   │   └── portfolio.ts
    │   ├── styles.css
    │   └── main.tsx
    ├── design/
    ├── DESIGN-SYSTEM.md
    ├── QA-REPORT.md
    ├── firebase.json
    └── package.json

Portfolio content and project metadata are maintained in src/data/portfolio.ts.

## Content accuracy checklist

Before publishing the portfolio, verify all owner-controlled content:

- Education details, study dates, GPA, and expected graduation information.
- Internship dates and role descriptions.
- Project summaries, technology stacks, role attribution, and repository links.
- Certificate names, issuing organizations, and credential destinations.
- Contact information and external profile URLs.

Do not publish unverified achievements or imply that a prototype is a production deployment.

## Design assets

The public/assets directory contains original SVG brand and project assets. They can be edited using a vector editor or directly as SVG source.

## Project status

A personal portfolio front end prepared for Firebase Hosting. No authentication, payment processing, analytics service, or application database is required by the current implementation.

## Author

**Gusty Faqikh** · [GitHub](https://github.com/gusti111) · [LinkedIn](https://www.linkedin.com/in/gusty-faqikh/)