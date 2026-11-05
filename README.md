# Mohd Shabaz — React Portfolio

A responsive developer portfolio built with **React 18** and **Vite**. It showcases my profile, technical skills, projects, education, certifications, resume and contact information.

## Live Website and Profiles

- **Live Portfolio:** https://mohd-shahbaz-react-portfolio.vercel.app/
- **GitHub Profile:** https://github.com/moshahbaz18
- **LinkedIn Profile:** https://linkedin.com/in/mohd-shahab-879a482b1
- **MemoryFlip Project:** https://github.com/moshahbaz18/MemoryFlip
- **GitHub Repository:** https://github.com/moshahbaz18/mohd-shahbaz-react-portfolio

## Technology Stack

- React 18 — Reusable UI components
- Vite — Development server and production bundler
- JavaScript — Application functionality
- CSS3 — Responsive styling and layouts
- Lucide React — Interface icons

## Features

- Responsive portfolio design
- About Me section
- Technical Skills section
- Projects showcase
- Resume and Education section
- Certifications section
- Contact information and social links
- Resume viewing and downloading
- Mobile-friendly navigation

## Project Structure

```text
mohd-shahbaz-react-portfolio/
├── public/
│   ├── profile.jpeg
│   ├── resume.pdf
│   └── memoryflip-preview.svg
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
├── package-lock.json
├── vite.config.js
└── README.md
```

## Run Locally

Make sure Node.js (LTS) is installed.

Open the project folder in your terminal and run:

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Vite generates the production files inside the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

Open the preview URL displayed in the terminal.

## Production Optimization

The project uses Vite production build optimization, including:

- JavaScript minification with esbuild
- CSS minification
- Optimized production assets
- Hashed asset filenames
- Separate JavaScript chunks for imported modules

## Resume

The resume PDF is available in the `public` folder:

```text
public/resume.pdf
```

The portfolio provides options to view and download the resume.

## Deploy to Vercel

This portfolio is deployed using Vercel.

To deploy your own copy:

1. Create a GitHub repository.
2. Upload the project source files.
3. Sign in to [Vercel](https://vercel.com/).
4. Select **Add New → Project**.
5. Import your GitHub repository.
6. Confirm the following settings:

   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

7. Click **Deploy**.
8. Open the generated website URL and test the application.

## Testing Checklist

- [ ] Production build completes without errors.
- [ ] Portfolio opens correctly.
- [ ] Navigation links work correctly.
- [ ] Mobile navigation works correctly.
- [ ] Project links open correctly.
- [ ] GitHub and LinkedIn links work.
- [ ] Email and phone links work.
- [ ] Resume opens and downloads correctly.
- [ ] Layout works on mobile, tablet and desktop.
- [ ] Deployed website opens over HTTPS.

## Challenges and Solutions

| Challenge | Solution |
|---|---|
| Responsive design | Implemented responsive CSS layouts and mobile navigation. |
| Reusable components | Organized the portfolio into separate React components. |
| Production performance | Used Vite production build optimization and asset bundling. |
| Resume accessibility | Added resume viewing and downloading functionality. |

## Authorha 

**Mohd Shabaz**

- GitHub: https://github.com/moshahbaz18
- LinkedIn: https://linkedin.com/in/mohd-shahab-879a482b1
- Email: mshahabaz376@gmail.com

---

Thank you for visiting my portfolio!
