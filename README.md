# Yoanna Zabcheva — Portfolio

A minimal, responsive, static portfolio for Cloudflare Pages / GitHub. No build step or framework required.

## What's included

- Home page with the existing introduction text preserved.
- Top-right descriptor updated to **CINEMATOGRAPHER, VISUAL ARTIST**.
- Three separate portfolio collections: Video Projects, Film Photography and Drawings.
- Dedicated pages for each collection.
- Behind-the-scenes section at the bottom of the home page.
- Light / dark theme toggle. The visitor's choice is remembered in their browser.
- Instagram link currently points to `https://www.instagram.com/sminduh_/`.
- Responsive layout, keyboard-accessible video viewer and hover previews.

## IMPORTANT: add your email before publishing

In `index.html`, replace both instances of `YOUR_GMAIL_ADDRESS@gmail.com` with your real Gmail address. The contact link will then open an email draft to you.

## Add the 11 video projects

Put compressed MP4 files in `assets/videos/` using these names, or change the filenames in the `projects` list in `script.js`:

- `project-01.mp4` through `project-11.mp4`

Edit each project's `title` and `credit` in `script.js`. For best results, use H.264 MP4 previews that are reasonably small. Optional poster images can go in `assets/posters/`; set the matching `poster` value in `script.js` to `assets/posters/your-image.jpg`.

The videos are shown on `video-projects/index.html`, reached from the Video Projects collection on the home page.

## Add film photography

1. Put JPG or WebP images in `assets/film-photography/`.
2. Open `script.js` and add an item to the `filmPhotos` list, for example:

```js
{ title: "Untitled 01", file: "../assets/film-photography/01.jpg", note: "35mm · 2026" }
```

The path is relative to the film photography page, so use `../assets/...`.

## Add drawings

1. Put JPG or WebP images in `assets/drawings/`.
2. Add each image to the `drawings` list in `script.js`, for example:

```js
{ title: "Study 01", file: "../assets/drawings/01.jpg", note: "Graphite on paper" }
```

## Add behind-the-scenes photographs

1. Put your on-set photographs in `assets/bts/`.
2. Add them to the `btsPhotos` list in `script.js`, for example:

```js
{ file: "assets/bts/set-01.jpg", alt: "Behind the scenes on set" }
```

The BTS section appears at the bottom of the home page. Use landscape images for a consistent strip; the layout crops to a 4:3 frame.

## Folder structure

```text
index.html
style.css
script.js
video-projects/index.html
film-photography/index.html
drawings/index.html
assets/
  videos/
  posters/
  film-photography/
  drawings/
  bts/
```

## Deploy to the existing website

Your domain is already connected through Cloudflare Pages. Keep using the same GitHub repository connected to that Cloudflare Pages project:

1. Download and unzip this package.
2. Upload the **contents** of `yoanna-video-portfolio` to the root of your connected GitHub repository. Do not upload the ZIP file itself and do not put the folder inside another folder.
3. Replace the email placeholder and add your media files before publishing.
4. Commit the changes to the production branch (previously configured as `main`). Cloudflare Pages should automatically build and deploy; no build command is needed and the output directory is `/`.

Do not change the existing custom domain or DNS settings for this update.

## Notes

- This is a static site: there is no build command.
- Keep video previews compressed. Large full-resolution source videos are better hosted outside the Git repository.
- The image collections are intentionally left ready for your own photographs and drawings; no stock imagery is inserted into your portfolio.
- The typography and geometric layout are an original implementation inspired by the restrained editorial feel of your reference, not a copy of its code or assets.
