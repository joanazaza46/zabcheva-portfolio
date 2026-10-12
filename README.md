# Joanna Zabcheva — Portfolio website

Responsive static portfolio for GitHub Pages + Cloudflare Pages. Plain HTML, CSS and a tiny progressive-enhancement script; no build step or framework required.

## Preview locally
Open `index.html` in a browser. Internet access is only needed for the optional Google Fonts import.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository and upload `index.html`, `styles.css`, `script.js`, and this README.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Use **no build command** and set the build output directory to `/` (or leave the root directory default).
4. Deploy. Cloudflare provides a preview URL; add a custom domain later if needed.

## Add project media
- Replace each `.art` placeholder in `index.html` with an image, or with a linked Vimeo/YouTube thumbnail.
- For embedded video, add a responsive `<iframe>` with the video's embed URL inside a project card or on a project detail page.
- For self-hosted video, use MP4 (H.264) with a poster image and `preload="metadata"`. Video files can become large, so Vimeo/YouTube is usually the better option unless Cloudflare Stream or another video CDN is used.
- Add Joanna's email and approved bio/credits before publishing.

## Current placeholders
Project titles, credits, imagery and biography copy are temporary. The only supplied social link currently used is `https://www.instagram.com/sminduh_/`.
