# Gusty Faqikh — Personal Portfolio

React + TypeScript + Vite + Tailwind CSS portfolio, prepared for Firebase Hosting.

## Requirements
- Node.js 20.19+ or 22.12+
- npm
- Firebase CLI only for deployment

## Run locally
```bash
npm install
npm run dev
```

## Validate
```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy to Firebase Hosting
1. Create a Firebase project in the Firebase Console.
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Authenticate: `firebase login`
4. Copy `.firebaserc.example` to `.firebaserc` and replace the project ID.
5. Run `firebase use YOUR_FIREBASE_PROJECT_ID`
6. Run `npm run build`
7. Run `firebase deploy --only hosting`

Firebase Hosting serves the production build from `dist/`. The rewrite supports client-side routes.

## Included functionality
- Responsive navigation and route handling
- Indonesian / English interface toggle
- Light / dark / system theme preference
- Project search and category filtering
- Project detail routes
- Keyboard command palette (`Ctrl/Cmd + K`)
- Certificate media gallery with LinkedIn credentials destination
- CV page with browser print / Save as PDF action
- Contact links and copy-email action
- Accessible focus styles and reduced-motion support

## Owner content to verify before public launch
This package uses only details previously provided by the owner. Please verify:
- GPA is currently 3.84/4.00.
- Study period and expected graduation date.
- Smart Computer internship dates and description.
- Organization role and period.
- Project descriptions, technology stacks, and current implementation status.
- Exact project repository URLs.
- Certificate titles, issuer names, and credential URLs.

The certifications page currently links to the owner's LinkedIn profile rather than fabricating individual credential records. Add verified certificate files to `public/certificates/` and update `src/data/portfolio.ts` to show individual items when supplied.

The CV page is a print-ready web CV, not a fabricated uploaded PDF. Use its Print / Save PDF action to export a PDF, then replace the content after reviewing all details.

## Design assets
`public/assets/` contains original SVG brand and social preview assets. SVG files are editable in Figma, Illustrator, Inkscape, or a text editor.

## Notes
- No authentication, payments, analytics, or backend are required.
- Do not upload confidential data or screenshots containing personal/student information.
- No third-party tracking scripts are included.
