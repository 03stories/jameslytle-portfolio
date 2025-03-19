# Content Migration Guide

This guide explains how to migrate content from the original Kirby CMS website (`jl-website`) to the new React/Vite-based portfolio site.

## Project Structure

The new site organizes content in the `content` directory with the following structure:

```
content/
├── about/             # About page content
│   └── about.md       # Main about page markdown file
├── home/              # Homepage content
│   └── home.md        # Main homepage content markdown file
└── projects/          # Project content
    ├── project-name/  # Each project in its own directory
    │   ├── project.md # Project markdown file with frontmatter
    │   └── images/    # Project images
    └── ...
```

## Migration Steps

### 1. Project Content

For each project in `jl-website/content/1_projects` (excluding `_drafts`):

1. Create a corresponding folder in `content/projects/`
2. Create a `project.md` file with frontmatter:

```markdown
---
title: Project Title
date: YYYY-MM-DD  # Extract from folder name or note.txt
description: Brief project description  # Extract from note.txt
featuredImage: /content/projects/project-name/main-image.jpg
---

# Project content

[Content from note.txt, formatted as Markdown]
```

3. Copy all image files to the project folder

### 2. About Page Content

1. Copy and convert the about content from `jl-website/content/2_about/about.txt` to `content/about/about.md`:

```markdown
---
title: About James Lytle
image: /content/about/jl-headshot-sm.jpg
resume: /content/about/james-lytle-resume-2020.pdf
---

[Content from about.txt, formatted as Markdown]
```

2. Copy the headshot and resume files to the `content/about/` directory

### 3. Home Page Content

1. Convert the home page content from `jl-website/content/home/home.txt` to `content/home/home.md`:

```markdown
---
title: James Lytle
subtitle: Product Designer & UX Strategist
featuredProjects:
  - project-slug-1
  - project-slug-2
---

[Content from home.txt, formatted as Markdown]
```

### 4. Media Files

1. Create a `public/content` directory structure that mirrors the `content` directory
2. Copy all necessary media files from `jl-website/media` to appropriate locations in `public/content`

## Implementation Notes

### Content Loading

The site uses the `gray-matter` library to parse Markdown frontmatter. The mock implementation in `src/utils/contentLoader.ts` should be replaced with the real implementation from `src/utils/contentLoaderImpl.ts` once all content is migrated.

To activate the real implementation:
1. Install the necessary file system libraries for Vite
2. Update the import paths in components to use the real implementation
3. Modify build scripts to ensure content is properly processed during build

### Image Paths

Make sure all image paths in markdown content use the correct public path format:

```markdown
![Image description](/content/projects/project-name/image.jpg)
```

## Testing

After migrating content:

1. Run the site locally with `npm run dev`
2. Verify all projects appear on the projects page
3. Check that project details, images, and links work correctly
4. Confirm the about page shows the correct information and image
5. Verify that the home page displays featured projects as expected