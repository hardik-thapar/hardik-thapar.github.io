# hardik-thapar.github.io

Personal site. One page: `index.html`. Plain HTML, CSS and JavaScript, no build step, no dependencies.

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
| `index.html` | The page, with its CSS inline. Follows the Driftbar meadow-footer spec. |
| `app.js` | Reads `data.json` and fills the page. |
| `assets/` | CV and favicon. |

## Editing content

`home`
- `title`: the bold sentence in the first column.
- `text`: the lines under it. A string, or an array of strings for several short paragraphs.
- `recognition`: short plain lines. `{ "label": "...", "url": "" }`; a URL makes it a link.
- `cv`: the plain CV link at the end of the Socials row.
- `wordmark`: the giant glass text at the bottom.

`projects`: `{ "name", "url" }`. Each name links straight to its URL (usually the repository). Order in the file is the order on the page.

`writeups`: `{ "title", "url" }`. Each title links straight to the post wherever it lives (Medium, dev.to, a GitHub README). An empty list shows "Coming soon".

`links`: the Socials row. Icons are matched by label: GitHub, LinkedIn, LeetCode, X, Email.

`meta.resume` is the CV path. Replace `assets/Hardik_Thapar_CV.pdf` to update it.
