# KakkuOS Website

Static landing page for KakkuOS, a CachyOS-based Hyprland operating system.

## Files

- `index.html` - page structure, SEO metadata, Open Graph tags, and content.
- `styles.css` - responsive layout and visual styling.
- `app.js` - copy buttons, sticky header state, and theme preview controls.
- `install.sh` - hosted installer wrapper used by the website one-liner.
- `assets/` - logo, wordmark, and Open Graph image assets.

## Install Command

The website presents this command:

```bash
curl -fsSL https://kakkuos.jeme.app/install.sh | bash
```

`install.sh` clones or updates `https://github.com/TheJeme/kakku.git` in `~/kakku`, then runs the KakkuOS installer from that checkout.

## Development

This is plain HTML, CSS, and JavaScript. No build step is required.

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Deployment

Deploy the repository as static files so these paths are public:

- `/`
- `/install.sh`
- `/assets/logo.svg`
- `/assets/wordmark.svg`
- `/assets/og-image.png`

The configured production domain is:

```text
https://kakkuos.jeme.app
```
