# Hardik Thapar — Portfolio

Static portfolio site built with plain HTML, CSS, and JavaScript.  
No build step, no framework.

## Structure

```
site/
├── data.js           ← all portfolio data (edit this to update content)
├── styles.css
├── main.js
├── index.html
├── about.html
├── projects.html
├── experience.html
├── achievements.html
├── publications.html
├── icon.png
└── title.png
```

## Updating content

Edit `site/data.js`, commit, and push to `main`.  
GitHub Actions will automatically redeploy to GitHub Pages.

## Local preview

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```
