# Mohd Shabaz — React Portfolio

A responsive developer portfolio built with **React 18** and **Vite**. It presents About Me, Skills, Projects, Resume/Education, Certifications and Contact sections.

## Live website and repository

- Live portfolio: https://mohd-shahbaz-portfolio.vercel.app/
- GitHub profile: https://github.com/moshahbaz18
- MemoryFlip project: https://github.com/moshahbaz18/MemoryFlip

> Update the live URL or repository URL if you deploy this project under a different address or repository.

## Technology stack

- React 18 — reusable UI components
- Vite — development server and production bundler
- Lucide React — interface icons
- CSS3 — responsive layout, effects and mobile navigation

## Project structure

```text
mohd-shahbaz-portfolio/
├── public/
│   └── (put resume.pdf here)
├── src/
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

Install Node.js (LTS), then open a terminal in the project folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production optimization

The app uses React `lazy()` and `Suspense` to load the About, Skills, Projects, Resume and Contact section modules on demand. The MemoryFlip project preview is a lightweight local SVG and uses `loading="lazy"` with descriptive `alt` text. Use the same pattern for any additional below-the-fold images.

Vite production build settings enable:
- JavaScript minification with esbuild
- CSS minification
- Production asset bundling and hashed filenames
- No source maps in the production build

Create the production build:

```bash
npm run build
```

Vite writes optimized files to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

Open the preview URL printed by Vite (normally `http://localhost:4173`) and test all navigation links, project links, email/phone links and resume actions.

## Add your resume PDF

Copy your latest resume PDF into the `public` folder and name it exactly:

```text
public/resume.pdf
```

The View Resume and Download PDF links point to `/resume.pdf`. Until you add this file, those links will return a not-found page.

## Deploy to Vercel

1. Create a GitHub repository, for example `mohd-shahbaz-portfolio`.
2. Upload/commit all project files to the repository (do not upload `node_modules` or `dist`).
3. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically. Confirm:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
6. Select **Deploy**.
7. Open the generated Vercel URL and test the deployed site.
8. Optional custom domain: open the project **Settings → Domains**, add a domain you own and follow the DNS instructions shown by Vercel. Vercel provisions SSL after DNS verification; do not add a domain you do not own.

## Testing checklist

Record the actual test results before submitting the assignment:

- [ ] `npm run build` completes without errors.
- [ ] `npm run preview` opens the production build locally.
- [ ] Header links scroll to the correct sections.
- [ ] Mobile navigation opens, closes and navigates correctly.
- [ ] GitHub, email and phone links work.
- [ ] Resume opens/downloads after `public/resume.pdf` is added.
- [ ] Layout checked at mobile, tablet and desktop widths.
- [ ] Tested in Chrome, Firefox, Edge and Safari where available.
- [ ] Deployed Vercel URL opens over HTTPS.

## Challenges and solutions

| Challenge | Solution |
|---|---|
| Keeping the portfolio usable on small screens | Added responsive CSS breakpoints and a collapsible mobile navigation. |
| Avoiding a large initial JavaScript download | Split page sections into lazy-loaded React modules using `React.lazy()` and `Suspense`. |
| Improving production asset delivery | Configured Vite to minify JavaScript and CSS and generate optimized assets. |
| Resume file may not exist in a fresh checkout | Documented the exact `public/resume.pdf` location and filename required. |

## Personalization notes

The portfolio content is based on the details supplied for this assignment. Please review your name spelling, contact information, education dates, certification titles and external profile URLs before publishing. The LinkedIn link is a generic LinkedIn landing page until you replace it with your personal profile URL.
