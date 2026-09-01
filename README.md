# Deeksha A — Portfolio Website

A single-page portfolio built from your resume: hero, projects, skills,
education/certifications, and contact.

## Files

```
index.html   — page structure and content
style.css    — all styling (colors, fonts, layout)
script.js    — mobile menu + the typing effect in the hero
README.md    — this file
```

There's no build step. It's plain HTML/CSS/JS, so you can open
`index.html` in a browser to preview it, and edit the files directly.

## How to edit

- **Text/content** → edit `index.html`. Each section is commented by
  its `id` (`#work`, `#skills`, `#background`, `#contact`).
- **Colors/fonts** → edit the `:root { ... }` block at the top of
  `style.css`. Every color in the site is a variable there.
- **Projects** → each project is one `<article class="project">` block
  in `index.html`. Copy/paste one to add a new project.

## Publishing it live (not localhost)

Pick whichever is easiest for you — all three are free.

### Option A: GitHub Pages (uses your existing GitHub account)
1. Create a new repository on GitHub, e.g. `deeksha-portfolio`.
2. Upload `index.html`, `style.css`, and `script.js` to it (via the
   GitHub web UI "Add file → Upload files", or `git push` if you use
   Git locally).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a
   branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a live URL in a minute or two, usually:
   `https://<your-username>.github.io/deeksha-portfolio/`

### Option B: Netlify (drag-and-drop, no account needed to try it)
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder (with all three files) onto the
   page.
3. Netlify uploads it and gives you a live URL immediately, e.g.
   `https://random-name-123.netlify.app`. You can rename it or add a
   custom domain later from your Netlify dashboard.

### Option C: Vercel
1. Go to https://vercel.com and sign in (GitHub login works).
2. "Add New… → Project", then either import the GitHub repo from
   Option A or drag-and-drop the folder.
3. Deploy — Vercel gives you a live URL like
   `https://deeksha-portfolio.vercel.app`.

Any of these gives you a real, shareable link — none of them run on
localhost.

## Custom domain (optional, later)

All three options let you attach a custom domain (e.g.
`deeksha.dev`) for free once you own the domain name, under
**Settings → Domains** in Netlify/Vercel, or **Settings → Pages →
Custom domain** on GitHub.

## Notes

- The hero, skills, and background sections use your resume content
  directly — double check phone/email/links in `index.html` before
  you publish.
- The site is responsive (phone, tablet, desktop) and respects
  "reduce motion" accessibility settings.
