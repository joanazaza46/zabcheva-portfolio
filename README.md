# Joanna Zabcheva Portfolio — V3

A responsive, static portfolio for Cloudflare Pages. No build step is required.

## Pages
- `index.html` — Selected Work
- `music-videos.html` — Music videos; currently starts with **Просто фаза** (DOP credit)
- `films.html` — Films
- `stills.html` — Stills / photography
- `about.html` — Info and contact

## Music video interaction
The first music-video card uses the video's clean YouTube thumbnail as an image, without overlaying a YouTube logo or play button. Clicking it opens a dark, full-viewport player overlay on the same page. Close with the × button, click outside the player, or press Escape.

The thumbnail is loaded from YouTube's image CDN, and playback is embedded from YouTube. An internet connection is required for the image and playback. If the maximum-resolution thumbnail is unavailable, replace the image URL in `music-videos.html` with the video's `hqdefault.jpg` thumbnail variant.

## Deploy
Upload the contents of this folder to the root of the GitHub repository connected to Cloudflare Pages. Keep V2 archived separately if you want to roll back.

## Before publishing
Replace remaining placeholder project names/visuals and add final contact details. The current music-video credit is set to `DOP` as requested.
