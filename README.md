# James Lytle Portfolio Website

A modern, React-based portfolio website for James Lytle, showcasing UX and product design work.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- FontAwesome (icons)
- React Router (navigation)
- React Markdown (content rendering)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/03stories/jameslytle-portfolio.git
   cd jameslytle-portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
jameslytle.com/
├── .github/                  # GitHub Actions workflows
├── content/                  # Content files for the site
│   ├── about/                # About page content
│   ├── home/                 # Homepage content
│   └── projects/             # Project content files
├── public/                   # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable UI components
│   │   ├── layout/           # Layout components (Header, Footer, etc.)
│   │   └── ui/               # UI components (ProjectCard, etc.)
│   ├── pages/                # Page components
│   └── utils/                # Utility functions
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.ts            # Vite configuration
```

## Content Structure

### Projects

Each project is stored in the `content/projects/` directory. To add a new project:

1. Create a new directory for the project: `content/projects/project-name/`
2. Add a `project.md` file with the following frontmatter:

```markdown
---
title: Project Title
date: YYYY-MM-DD
description: Brief project description
featuredImage: /path/to/image.jpg
---

# Project content in Markdown format
```

3. Add any images for the project to the same directory

### About Page

The about page content is stored in `content/about/about.md`:

```markdown
---
title: About Title
image: /path/to/profile-image.jpg
resume: /path/to/resume.pdf
---

# About content in Markdown format
```

## Deployment

The site is set up to deploy to GitHub Pages using GitHub Actions. When you push to the `main` branch, the site will automatically build and deploy.

## Next Steps for Content Migration

1. Copy image assets from `jl-website/media` to `public/content/` preserving the directory structure
2. Convert project content from `jl-website/content/1_projects` into markdown files in the new structure
3. Migrate about page content from `jl-website/content/2_about`
4. Set up real content loading using the gray-matter library instead of mock data

## License

This project is private and not licensed for public use.