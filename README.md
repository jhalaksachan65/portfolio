# Jhalak Sachan – Portfolio Website

A simple, responsive personal portfolio built with **HTML5, CSS3 and Vanilla JavaScript** only. No build step, no backend. Works directly on GitHub Pages.

## Features
- Home, About, Education, Skills, Certifications and Contact sections
- Projects and Internship/Training sections (hidden until details are added)
- Light / dark theme toggle (remembered in the browser)
- Mobile-friendly menu, smooth scrolling, subtle scroll animations
- Hover effects on cards, Download Resume button, working contact links

## Folder Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/          (add profile.webp here)
│   └── documents/       (add resume.pdf here)
└── README.md
```

## Before You Publish
1. Your photo is already included as `assets/images/profile.webp`. To change it, replace that file (keep the same name).
2. Add your resume as `assets/documents/resume.pdf` (the Download Resume button needs it).

## Adding Projects or Training Later
Open `index.html`, find the `projects` or `training` section and **delete the word `hidden`** from its `<section>` tag. Then edit the card text. The menu link appears automatically. Add project images to `assets/images/` (e.g. `project1.jpg`).

## Customising
- Colors: edit the variables at the top of `css/style.css`.
- Text and links: edit `index.html`.

## Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload all files so that `index.html` is in the repository root.
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://jhalaksachan65.github.io/portfolio/`.

## Contact
- Email: jhalaksachan634@gmail.com
- LinkedIn: https://www.linkedin.com/in/jhalaksachan634
- GitHub: https://github.com/jhalaksachan65
