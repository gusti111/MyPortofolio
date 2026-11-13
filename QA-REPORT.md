# QA / Release Notes

## Scope reviewed
- Source-level review of React routes and interactions.
- Firebase Hosting configuration.
- Responsive CSS and reduced-motion handling.
- Project data and outbound links.

## Implemented
- 10 route patterns including project detail and 404.
- Theme and language preferences persisted in localStorage.
- Project search and category filtering.
- Command palette navigation.
- Certificate page links to LinkedIn credential source; does not invent certificate names.
- CV print-to-PDF action.
- Contact links and clipboard copy with mailto fallback.
- Firebase Hosting SPA rewrite.

## Not run in this environment
- `npm install`, TypeScript compiler, Vite production build.
- Real browser interaction tests.
- Lighthouse / Core Web Vitals.
- Screen-reader and keyboard testing in browser.
- Firebase deployment.

## Release blockers / owner verification
1. Confirm GPA and study dates.
2. Confirm organization roles and dates.
3. Verify each project's current implementation, contribution, and tech stack.
4. Provide original certificate files if individual previews are required.
5. Review CV draft content before sending to recruiters.
6. Supply the Firebase project ID and perform deployment from the owner's Firebase account.

## Verdict
Implementation package prepared; not certified production-ready until the checks above are completed. No deployment is claimed.
