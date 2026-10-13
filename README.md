# Joanna Zabcheva portfolio — V2

Version 2 changes the site from one long scrolling page to a multi-page portfolio inspired by the restrained, image-first project index at balanovskaya.com. The pages are separate and the navigation stays consistent:

- `index.html` — selected work
- `music-videos.html` — music videos
- `films.html` — short films
- `stills.html` — photography
- `about.html` — bio and contact
- `styles.css` — shared responsive styling
- `script.js` — small navigation enhancement

## Preview
Open `index.html` locally in a browser. Navigation works between all local pages. Visuals and project names are placeholders until Joanna's media and credits are supplied. Google Fonts is optional; the site falls back to system fonts.

## Deploy to Cloudflare Pages through GitHub
1. Upload the contents of this folder to the root of a GitHub repository (keep `index.html` at the repository root).
2. In Cloudflare, go to Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository. No build command is needed; set the output directory to `/` if prompted.
4. Deploy. Connect the custom domain separately once the domain/zone configuration is ready.

## Adding video
For each project, replace the placeholder `.thumb` with an image thumbnail and link it to a project page or Vimeo/YouTube URL. For a polished portfolio, Vimeo or YouTube embeds are generally easier to maintain than hosting large MP4 files directly with static site files.

Keep versioned archives (V2, V3, V4…) so previous design iterations remain available. When deploying, the files inside the chosen version folder should be copied to the repository root so `index.html` is the default entry point.
