// Update titles and filenames here. Video previews use local MP4 files in assets/videos/.
const projects = [
  { title: "PROJECT TITLE 01", credit: "MUSIC VIDEO · DOP", video: "project-01.mp4", poster: "" },
  { title: "PROJECT TITLE 02", credit: "FASHION FILM · DOP", video: "project-02.mp4", poster: "" },
  { title: "PROJECT TITLE 03", credit: "SHORT FILM · DOP", video: "project-03.mp4", poster: "" },
  { title: "PROJECT TITLE 04", credit: "COMMERCIAL · DIR / DOP", video: "project-04.mp4", poster: "" },
  { title: "PROJECT TITLE 05", credit: "DOCUMENTARY · DIR / DOP", video: "project-05.mp4", poster: "" },
  { title: "PROJECT TITLE 06", credit: "MUSIC VIDEO · DOP", video: "project-06.mp4", poster: "" },
  { title: "PROJECT TITLE 07", credit: "FASHION FILM · DOP", video: "project-07.mp4", poster: "" },
  { title: "PROJECT TITLE 08", credit: "SHORT FILM · DIR / DOP", video: "project-08.mp4", poster: "" },
  { title: "PROJECT TITLE 09", credit: "COMMERCIAL · DOP", video: "project-09.mp4", poster: "" },
  { title: "PROJECT TITLE 10", credit: "MUSIC VIDEO · DIR / DOP", video: "project-10.mp4", poster: "" },
  { title: "PROJECT TITLE 11", credit: "SELECTED WORK · DOP", video: "project-11.mp4", poster: "" }
];
// Add your stills to the matching assets folder and list them below.
const filmPhotos = [
  // { title: "Untitled 01", file: "assets/film-photography/01.jpg", note: "35mm · 2026" }
];
const drawings = [
  // { title: "Study 01", file: "assets/drawings/01.jpg", note: "Graphite on paper" }
];
const btsPhotos = [
  // { file: "assets/bts/set-01.jpg", alt: "Behind the scenes on set" },
  // { file: "assets/bts/set-02.jpg", alt: "Behind the scenes on set" },
  // { file: "assets/bts/set-03.jpg", alt: "Behind the scenes on set" }
];

// Shared light/dark switch; preference is stored in this browser.
document.querySelectorAll(".theme-toggle").forEach(button => {
  const updateLabel = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    button.querySelector(".theme-label").textContent = dark ? "LIGHT" : "DARK";
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  };
  updateLabel();
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("yz-theme", next); } catch (e) {}
    updateLabel();
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

function renderEmpty(container, message) {
  if (!container) return;
  const empty = document.createElement("div");
  empty.className = "empty-gallery";
  empty.textContent = message;
  container.appendChild(empty);
}
function renderImages(container, items, emptyMessage) {
  if (!container) return;
  if (!items.length) { renderEmpty(container, emptyMessage); return; }
  items.forEach((item, index) => {
    const card = document.createElement("figure"); card.className = "image-card";
    const img = document.createElement("img"); img.src = item.file; img.alt = item.alt || item.title || "Portfolio image"; img.loading = "lazy";
    const caption = document.createElement("figcaption"); caption.className = "image-caption";
    const title = document.createElement("span"); title.textContent = item.title || `UNTITLED ${String(index + 1).padStart(2,"0")}`;
    const note = document.createElement("span"); note.textContent = item.note || "";
    caption.append(title, note); card.append(img, caption); container.appendChild(card);
  });
}

// Home page: behind-the-scenes strip.
const btsGrid = document.querySelector("#bts-grid");
if (btsGrid) {
  if (!btsPhotos.length) renderEmpty(btsGrid, "ADD YOUR ON-SET PHOTOGRAPHS TO assets/bts/ AND LIST THEIR FILENAMES IN script.js");
  else btsPhotos.forEach((photo, index) => {
    const wrap = document.createElement("div"); wrap.className = "bts-image";
    const img = document.createElement("img"); img.src = photo.file; img.alt = photo.alt || `Behind the scenes ${index + 1}`; img.loading = "lazy";
    wrap.appendChild(img); btsGrid.appendChild(wrap);
  });
}

// Category pages.
const imageGrid = document.querySelector("#image-grid");
if (document.body.dataset.page === "photos") renderImages(imageGrid, filmPhotos, "YOUR FILM PHOTOGRAPHS WILL APPEAR HERE. ADD JPG / WEBP FILES TO assets/film-photography/ AND ADD THEM TO filmPhotos IN script.js.");
if (document.body.dataset.page === "drawings") renderImages(imageGrid, drawings, "YOUR DRAWINGS WILL APPEAR HERE. ADD JPG / WEBP FILES TO assets/drawings/ AND ADD THEM TO drawings IN script.js.");

// Video collection page and fullscreen player.
const grid = document.querySelector("#work");
const viewer = document.querySelector("#viewer");
const viewerVideo = document.querySelector("#viewerVideo");
let activeIndex = 0;
if (grid) {
  projects.forEach((project, index) => {
    const card = document.createElement("article"); card.className = "project"; card.tabIndex = 0; card.setAttribute("role", "button"); card.setAttribute("aria-label", `Play ${project.title}`);
    const media = document.createElement("div"); media.className = "media";
    const preview = document.createElement("video"); preview.src = `../assets/videos/${project.video}`; preview.muted = true; preview.loop = true; preview.playsInline = true; preview.preload = "metadata"; preview.setAttribute("aria-hidden", "true"); if (project.poster) preview.poster = `../${project.poster}`;
    media.appendChild(preview);
    if (project.poster) { const poster = document.createElement("img"); poster.src = `../${project.poster}`; poster.alt = ""; poster.loading = "lazy"; media.appendChild(poster); }
    const info = document.createElement("div"); info.className = "project-info";
    const title = document.createElement("span"); title.className = "project-title"; title.textContent = project.title;
    const credit = document.createElement("span"); credit.className = "project-meta"; credit.textContent = project.credit;
    info.append(title, credit); card.append(media, info);
    card.addEventListener("mouseenter", () => preview.play().catch(() => {}));
    card.addEventListener("mouseleave", () => { preview.pause(); try { preview.currentTime = 0; } catch(e) {} });
    card.addEventListener("click", () => openViewer(index));
    card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openViewer(index); } });
    grid.appendChild(card);
  });
}
function openViewer(index) {
  if (!viewer || !viewerVideo) return;
  activeIndex = index; const project = projects[index];
  viewerVideo.pause(); viewerVideo.src = `../assets/videos/${project.video}`;
  document.querySelector("#viewerTitle").textContent = project.title;
  document.querySelector("#viewerCredit").textContent = project.credit;
  viewer.classList.add("open"); viewer.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
  viewerVideo.play().catch(() => {});
}
function closeViewer() {
  if (!viewer || !viewerVideo) return;
  viewerVideo.pause(); viewerVideo.removeAttribute("src"); viewerVideo.load(); viewer.classList.remove("open"); viewer.setAttribute("aria-hidden", "true"); document.body.style.overflow = "";
}
function stepViewer(direction) { openViewer((activeIndex + direction + projects.length) % projects.length); }
const closeButton = document.querySelector("#viewerClose");
if (closeButton) closeButton.addEventListener("click", closeViewer);
const prevButton = document.querySelector("#viewerPrev"); if (prevButton) prevButton.addEventListener("click", () => stepViewer(-1));
const nextButton = document.querySelector("#viewerNext"); if (nextButton) nextButton.addEventListener("click", () => stepViewer(1));
if (viewer) {
  viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });
  document.addEventListener("keydown", event => { if (!viewer.classList.contains("open")) return; if (event.key === "Escape") closeViewer(); if (event.key === "ArrowLeft") stepViewer(-1); if (event.key === "ArrowRight") stepViewer(1); });
}
