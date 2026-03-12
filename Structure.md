# Project Structure

```
portfolio/
├── index.html                  # HTML shell, page title
├── tailwind.config.js          # Tailwind theme: colors, fonts
├── postcss.config.js           # PostCSS pipeline (Tailwind + Autoprefixer)
├── vite.config.js              # Vite config (default)
├── package.json
│
└── src/
    ├── main.jsx                # React root mount 
    ├── App.jsx                 # Root layout — renders Navbar + all sections
    ├── index.css               # Tailwind directives + CSS variables (:root)
    │
    ├── assets/                 # Static files (profile photo..)
    │
    ├── components/             # Reusable UI pieces
    │   ├── Navbar.jsx          # Fixed top nav with anchor links
    │   ├── SectionHeading.jsx  # "01. Title" heading used in every section
    │   └── Tag.jsx             # Skill/tech tag pill used in Projects + Skills
    │
    ├── sections/               # Full-page sections rendered in App.jsx
    │   ├── Hero.jsx            # Landing screen with name, tagline, CTAs
    │   ├── About.jsx           # Bio paragraphs
    │   ├── Projects.jsx        # Project cards, reads from data/projects.js
    │   ├── Skills.jsx          # Skill groups, reads from data/skills.js
    │   └── Contact.jsx         # Email CTA + social icon links
    │
    └── data/                   # Content (editable part to update the site)
        ├── projects.js         # Array of project objects { title, description, tags, github, live }
        └── skills.js           # Object of skill groups { CategoryName: ['skill1', 'skill2'] }
```

