# Yoanna Zabcheva — Portfolio · Version 2

Minimal static portfolio for GitHub / Cloudflare Pages. No build step required.

## Version 2 changes
- Gmail contact updated to **joanazaza46@gmail.com** (clickable mailto link).
- Main intro caption is now simply **Portfolio**.
- Contact navigation reads **CONTACT ME**; removed the large “Have a project in mind?” callout.
- Video projects have filters: Music videos, Fashion films, Short films, Commercials, Documentaries and Other projects.
- Film photography has filters for 35mm, 120 film and Digital.
- “Drawings” renamed **Art projects**, with Printmaking, Sketchbook and Paintings filters.
- Biography and exactly three BTS photo slots are grouped in a dedicated About section.
- Light/dark theme preference remains shared across pages.

## Add your content

### Video projects
Put MP4s in `assets/videos/` named `project-01.mp4` through `project-11.mp4`. Edit titles, credits and categories in `script.js`.

### Film photography
Put images in the matching folders: `assets/film-photography/35mm/`, `120/`, or `digital/`. Then add entries to `filmPhotos` in `script.js`, using paths relative to `film-photography/index.html`, for example:

```js
{title:"Untitled 01",file:"../assets/film-photography/35mm/01.jpg",category:"35mm",note:"35mm · 2026"}
```

### Art projects
Put images in `assets/art-projects/printmaking/`, `sketchbook/`, or `paintings/`. Add entries to `artProjects` in `script.js`, for example:

```js
{title:"Study 01",file:"../assets/art-projects/sketchbook/01.jpg",category:"Sketchbook",note:"Sketchbook"}
```

### Three BTS photographs
Add exactly three images to `assets/bts/` with these names:
- `bts-01.jpg`
- `bts-02.jpg`
- `bts-03.jpg`

The About section displays these three slots. Replace the files with your own images; no script edits are needed if you keep the filenames.

## Publish
Upload the **contents** of `yoanna-video-portfolio` to the root of the existing GitHub repository, replacing the previous version. Commit to `main`; Cloudflare Pages should deploy automatically. Do not change DNS or the custom domain.
