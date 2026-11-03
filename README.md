# Yoanna Zabcheva — Portfolio · Version 4

Minimal static portfolio for GitHub / Cloudflare Pages. No build step required.

## Version 4 changes
- BTS photo paths now match the requested filenames `bts-01.jpg`, `bts-02.jpg`, `bts-03.jpg`.
- The homepage **Portfolio** title is now a prominent, separated page heading.
- Added **WILDHEART** as a Music videos project.
- The WILDHEART video entry supports an externally hosted MP4 URL. This is necessary for a 370 MB file: Cloudflare Pages allows a maximum 25 MiB per static asset, and GitHub rejects regular Git files over 100 MB. Git LFS is not a solution for Cloudflare Pages static assets.
- The email button copies `joanazaza46@gmail.com` to the clipboard and briefly displays a confirmation.

## Add your content

### BTS photographs
Put exactly these three files in `assets/bts/`:
- `bts-01.jpg`
- `bts-02.jpg`
- `bts-03.jpg`

Use lowercase names and `.jpg` extension exactly. The paths are case-sensitive after deployment.

### WILDHEART music video (370 MB)
Do **not** put the 370 MB MP4 in the GitHub repository or the Cloudflare Pages project. Cloudflare Pages has a 25 MiB per-file asset limit, so it will not deploy as a Pages asset. GitHub's normal Git limit is 100 MB per file; Git LFS can store larger files, but LFS files are not served as Cloudflare Pages static assets.

Recommended option: upload `WILDHEART.mp4` to a Cloudflare R2 bucket, enable public access or connect a custom domain to the bucket, and copy the public MP4 URL. Then open `script.js` and replace the placeholder URL in the WILDHEART project entry:

```js
{title:"WILDHEART",credit:"MUSIC VIDEO · DOP",category:"Music videos",video:"https://YOUR-R2-PUBLIC-URL/WILDHEART.mp4"},
```

Replace only the URL between the quotation marks with the actual public URL. The site is already set up to play external MP4 URLs in the hover previews and fullscreen player. You can keep the large video file outside GitHub; only the URL is stored in this repository.

### Other video projects
Smaller MP4 files can go in `assets/videos/` and be named `project-01.mp4` through `project-11.mp4`. Edit titles, credits and categories in `script.js`.

### Film photography
Put images in `assets/film-photography/35mm/`, `120/`, or `digital/`, then add entries to `filmPhotos` in `script.js`. Paths are relative to `film-photography/index.html`, e.g.:

```js
{title:"Untitled 01",file:"../assets/film-photography/35mm/01.jpg",category:"35mm",note:"35mm · 2026"}
```

### Art projects
Put images in `assets/art-projects/printmaking/`, `sketchbook/`, or `paintings/`. Add entries to `artProjects` in `script.js`, e.g.:

```js
{title:"Study 01",file:"../assets/art-projects/sketchbook/01.jpg",category:"Sketchbook",note:"Sketchbook"}
```

## Publish
Upload the **contents** of `yoanna-video-portfolio` to the root of the existing GitHub repository, replacing the previous version. Commit to `main`; Cloudflare Pages should deploy automatically. Do not change DNS or the custom domain.
