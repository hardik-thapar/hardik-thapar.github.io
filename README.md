# hardik-thapar.github.io

Personal site. Three pages on one shell: `index.html`, `projects.html`, `writeups.html`. Plain HTML, CSS and JavaScript, no build step, no dependencies.

Every word on the page comes from `data.json`. To add a project, a writeup or a link, edit that file.

## Run locally

The page loads `data.json` with `fetch`, so it needs an HTTP server (opening `index.html` from the file system will not work).

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Push to a GitHub repository named `<username>.github.io` (or enable Pages on any repository). Nothing to build.

## Files

| Path | Purpose |
| --- | --- |
| `data.json` | All content. Edit this. |
| `index.html` | Home. Shows the four newest projects and writeups with a View all link. |
| `projects.html`, `writeups.html` | Full lists on the same shell (video, fog, wordmark, Socials). |
| `styles.css` | All styles. Follows the Driftbar meadow-footer spec. |
| `app.js` | Reads `data.json` and fills whichever page is open. |
| `assets/` | CV and favicon. |

## Editing content

`home`
- `title`: the bold sentence in the first column.
- `text`: the lines under it. A string, or an array of strings for several short paragraphs.
- `recognition`: short plain lines. `{ "label": "...", "url": "" }`; a URL makes it a link.
- `cv`: the plain CV link at the end of the Socials row.
- `wordmark`: the giant glass text at the bottom.

`projects`: `{ "name", "url", "tagline" }`. Each name links straight to its URL (usually the repository). Newest first: the home page shows the first four, the projects page shows all with the tagline under each.

`writeups`: `{ "title", "url", "note" }`. Each title links straight to the post wherever it lives (Medium, dev.to, a GitHub README). Newest first; home shows the first four. `note` (optional) appears under the title on the writeups page, for example the venue or date. An empty list shows "Coming soon".

`links`: the Socials row. Icons are matched by label: GitHub, LinkedIn, LeetCode, X, Email.

`meta.resume` is the CV path. Replace `assets/Hardik_Thapar_CV.pdf` to update it.
