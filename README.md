# Joanna Zabcheva — Portfolio V4

A minimal, responsive, image-first cinematography portfolio inspired by the restrained editorial feel of the reference site. It is an original implementation and does not reuse that site's code or imagery.

## Features
- 11-project grid with understated typography and a warm off-white background
- Muted looping video previews on hover (desktop)
- Click to open a fullscreen-style overlay on the same page
- Self-hosted MP4 playback with native controls
- First project, “Просто фаза” — DOP; falls back to its YouTube embed until the local MP4 is uploaded
- Mobile-friendly layout; no hover autoplay on touch devices
- No build step; works as a static Cloudflare Pages site

## Add your 11 clips

Put MP4 files in `assets/videos/` with these exact names, or update the matching `data-local` and `<source>` values in `index.html`:

1. `01-prosto-faza.mp4`
2. `02-project.mp4`
3. `03-project.mp4`
4. `04-project.mp4`
5. `05-project.mp4`
6. `06-project.mp4`
7. `07-project.mp4`
8. `08-project.mp4`
9. `09-project.mp4`
10. `10-project.mp4`
11. `11-project.mp4`

For the first project, the YouTube video ID `lcQk0x9zoAI` is configured as a fallback. Hover previews require the actual local MP4; YouTube embeds cannot be used as a normal muted inline preview in this simple grid.

## Add clean thumbnails

Export one frame from each clip as a JPG and put it in `assets/posters/` using the corresponding names:

- `01-prosto-faza.jpg` through `11-project.jpg`

Use a 16:10-ish crop (e.g. 1200×800). These are plain still images; no play icon or YouTube branding is added. Until posters are added, numbered neutral placeholders appear.

## Edit project titles and credits

In `index.html`, each project card has `data-title` and `data-credit` attributes and matching visible text. Replace “Project 02” etc. with the real titles and credits. Update the category credit as needed (e.g. `MUSIC VIDEO · DOP`, `SHORT FILM · DOP`).

## Important GitHub note

GitHub has per-file size limits (web uploads are especially limited), and GitHub Pages/Cloudflare Pages are not ideal for hosting large original video files. Compress preview MP4s for the hover grid and keep each file small. For full-length or high-bitrate videos, consider a video host/object storage/CDN and keep only lightweight preview clips in the repository. Use H.264 MP4, muted preview playback, and compressed poster JPGs for best performance.

## Deploy

Upload the **contents** of this folder to the root of your GitHub repository. `index.html` must be at the repository root. Connect the repo to Cloudflare Pages with no build command and the root directory as the project root.
