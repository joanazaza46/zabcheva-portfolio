# Yoanna Zabcheva — video portfolio

A lightweight, responsive portfolio site with 11 video projects.

## Add your videos
1. Compress/export each clip as an MP4 (H.264 is a good web-friendly choice).
2. Copy the 11 MP4 files into `assets/videos/`.
3. Rename them to `project-01.mp4` through `project-11.mp4`, **or** edit the `video` values in `script.js` to match your filenames.
4. Edit each project's `title` and `credit` in the same `projects` list.
5. In `index.html`, replace `hello@example.com` with your contact email. Edit the name, intro and location text if desired.

## Optional poster thumbnails
For the quickest setup, the video itself is used as the thumbnail and plays muted on hover. For a still poster:
- Add an image (JPG or WebP) to `assets/posters/`, e.g. `project-01.webp`.
- Set that project's `poster` value in `script.js` to `assets/posters/project-01.webp`.
- A poster image is shown before hover; the video preview plays on hover.

## Publish with GitHub Pages
1. Create a GitHub repository (e.g. `yoanna-portfolio`).
2. Upload the contents of this folder to the repository root (not the ZIP file itself).
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for the published URL to appear in the Pages section.

## Notes
- The site uses relative file paths, so it works on GitHub Pages.
- Video playback depends on browser support and bandwidth. Keep MP4 files reasonably compressed.
- Hover preview is for mouse/trackpad; clicking or tapping a project opens the larger player.
- The viewer includes previous/next controls and closes with Escape.
- The page is intentionally built without a framework or build step.
