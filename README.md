# KakkuOS Website

Static website for KakkuOS, a layered Linux operating system that keeps CachyOS as the optimized base and adds a complete KakkuOS desktop.

## Files

- `index.html` - page structure, SEO metadata, Open Graph tags, and current KakkuOS content.
- `styles.css` - responsive layout, desktop preview, and visual styling.
- `app.js` - copy button behavior and sticky header state.
- `install` - hosted installer wrapper used by the website one-liner.
- `assets/` - logo, wordmark, and Open Graph image assets.

## Install Command

The website presents this command:

```sh
curl -fsSL https://kakkuos.jeme.app/install | sh
```

`install` is POSIX `sh` compatible. It clones or updates `https://github.com/TheJeme/kakkuos.git` in `~/kakkuos`, then runs the KakkuOS installer from that checkout.

KakkuOS is designed to be run on top of a fresh CachyOS install.

## Development

This is plain HTML, CSS, and JavaScript. No build step is required.

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Deployment

Deploy the repository as static files so these paths are public:

- `/`
- `/install`
- `/assets/logo.svg`
- `/assets/wordmark.svg`
- `/assets/og-image.png`

The configured production domain is:

```text
https://kakkuos.jeme.app
```
