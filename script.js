// Edit this list to change project names, credits and video filenames.
// Put your compressed MP4 files in assets/videos/ and use the exact filename below.
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

const grid = document.querySelector("#work");
const viewer = document.querySelector("#viewer");
const viewerVideo = document.querySelector("#viewerVideo");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerCredit = document.querySelector("#viewerCredit");
let activeIndex = 0;

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Play ${project.title}`);

  const media = document.createElement("div");
  media.className = "media";

  const preview = document.createElement("video");
  preview.src = `assets/videos/${project.video}`;
  preview.muted = true;
  preview.loop = true;
  preview.playsInline = true;
  preview.preload = "metadata";
  preview.setAttribute("aria-hidden", "true");
  if (project.poster) preview.poster = project.poster;

  media.appendChild(preview);

  if (project.poster) {
    const poster = document.createElement("img");
    poster.src = project.poster;
    poster.alt = "";
    poster.loading = "lazy";
    media.appendChild(poster);
  }

  const info = document.createElement("div");
  info.className = "project-info";
  info.innerHTML = `<span class="project-title"></span><span class="project-meta"></span>`;
  info.querySelector(".project-title").textContent = project.title;
  info.querySelector(".project-meta").textContent = project.credit;
  card.append(media, info);

  card.addEventListener("mouseenter", () => preview.play().catch(() => {}));
  card.addEventListener("mouseleave", () => { preview.pause(); preview.currentTime = 0; });
  card.addEventListener("click", () => openViewer(index));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openViewer(index); }
  });
  grid.appendChild(card);
});

function openViewer(index) {
  activeIndex = index;
  const project = projects[index];
  viewerVideo.pause();
  viewerVideo.src = `assets/videos/${project.video}`;
  viewerTitle.textContent = project.title;
  viewerCredit.textContent = project.credit;
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  viewerVideo.play().catch(() => {});
}
function closeViewer() {
  viewerVideo.pause();
  viewerVideo.removeAttribute("src");
  viewerVideo.load();
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function stepViewer(direction) {
  openViewer((activeIndex + direction + projects.length) % projects.length);
}
document.querySelector("#viewerClose").addEventListener("click", closeViewer);
document.querySelector("#viewerPrev").addEventListener("click", () => stepViewer(-1));
document.querySelector("#viewerNext").addEventListener("click", () => stepViewer(1));
viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });
document.addEventListener("keydown", event => {
  if (!viewer.classList.contains("open")) return;
  if (event.key === "Escape") closeViewer();
  if (event.key === "ArrowLeft") stepViewer(-1);
  if (event.key === "ArrowRight") stepViewer(1);
});
document.querySelector("#year").textContent = new Date().getFullYear();
