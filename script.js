// PORTFOLIO CONTENT — edit titles, categories and filenames here.
const projects = [
  {title:"WILDHEART",credit:"MUSIC VIDEO · DOP",category:"Music videos",video:"https://YOUR-R2-PUBLIC-URL/WILDHEART.mp4"},
  {title:"PROJECT TITLE 01",credit:"MUSIC VIDEO · DOP",category:"Music videos",video:"project-01.mp4"},
  {title:"PROJECT TITLE 02",credit:"FASHION FILM · DOP",category:"Fashion films",video:"project-02.mp4"},
  {title:"PROJECT TITLE 03",credit:"SHORT FILM · DOP",category:"Short films",video:"project-03.mp4"},
  {title:"PROJECT TITLE 04",credit:"COMMERCIAL · DIR / DOP",category:"Commercials",video:"project-04.mp4"},
  {title:"PROJECT TITLE 05",credit:"DOCUMENTARY · DIR / DOP",category:"Documentaries",video:"project-05.mp4"},
  {title:"PROJECT TITLE 06",credit:"MUSIC VIDEO · DOP",category:"Music videos",video:"project-06.mp4"},
  {title:"PROJECT TITLE 07",credit:"FASHION FILM · DOP",category:"Fashion films",video:"project-07.mp4"},
  {title:"PROJECT TITLE 08",credit:"SHORT FILM · DIR / DOP",category:"Short films",video:"project-08.mp4"},
  {title:"PROJECT TITLE 09",credit:"COMMERCIAL · DOP",category:"Commercials",video:"project-09.mp4"},
  {title:"PROJECT TITLE 10",credit:"MUSIC VIDEO · DIR / DOP",category:"Music videos",video:"project-10.mp4"},
  {title:"PROJECT TITLE 11",credit:"SELECTED WORK · DOP",category:"Other projects",video:"project-11.mp4"}
];
// Add image records when you upload your files. Paths are relative to the relevant gallery page.
const filmPhotos = [
  // {title:"Untitled 01",file:"../assets/film-photography/35mm/01.jpg",category:"35mm",note:"35mm · 2026"},
  // {title:"Untitled 02",file:"../assets/film-photography/120/01.jpg",category:"120 film",note:"120 film · 2026"},
  // {title:"Untitled 03",file:"../assets/film-photography/digital/01.jpg",category:"Digital",note:"Digital · 2026"}
];
const artProjects = [
  // {title:"Work 01",file:"../assets/art-projects/printmaking/01.jpg",category:"Printmaking",note:"Printmaking"},
  // {title:"Study 01",file:"../assets/art-projects/sketchbook/01.jpg",category:"Sketchbook",note:"Sketchbook"},
  // {title:"Painting 01",file:"../assets/art-projects/paintings/01.jpg",category:"Paintings",note:"Painting"}
];
// Exactly three BTS image slots. Add your own files to assets/bts/ and update filenames below.
const btsPhotos = [
  {file:"assets/bts/bts-01.jpg",alt:"Yoanna on set — behind the scenes"},
  {file:"assets/bts/bts-02.jpg",alt:"Yoanna on set — behind the scenes"},
  {file:"assets/bts/bts-03.jpg",alt:"Yoanna on set — behind the scenes"}
];

// Theme toggle, shared across all pages.
document.querySelectorAll(".theme-toggle").forEach(button => {
  const update=()=>{const dark=document.documentElement.dataset.theme==="dark";button.querySelector(".theme-label").textContent=dark?"LIGHT":"DARK";button.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");};
  update();button.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;try{localStorage.setItem("yz-theme",next)}catch(e){}update();});
});
const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
// Copy the contact email instead of opening a mail application.
document.querySelectorAll("[data-email-copy]").forEach(button=>{
 const label=button.querySelector("span");
 const original=label?label.textContent:"COPY ↗";
 button.addEventListener("click",async()=>{
  const email=button.dataset.emailCopy;
  try{
   if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(email);}
   else{
    const field=document.createElement("textarea");field.value=email;field.setAttribute("readonly","");field.style.position="fixed";field.style.opacity="0";document.body.append(field);field.select();
    const copied=document.execCommand("copy");field.remove();if(!copied)throw new Error("Clipboard copy failed");
   }
   if(label){label.textContent="COPIED ✓";button.setAttribute("aria-label","Email address copied");}
   window.setTimeout(()=>{if(label)label.textContent=original;button.setAttribute("aria-label","Copy email address");},1800);
  }catch(error){button.setAttribute("aria-label","Could not copy email address");if(label)label.textContent="SELECT EMAIL";}
 });
});
function empty(container,message){if(!container)return;const el=document.createElement("div");el.className="empty-gallery";el.textContent=message;container.appendChild(el);}
function filters(bar,items,allLabel="All"){
 if(!bar)return;const cats=[...new Set(items.map(x=>x.category).filter(Boolean))];
 [allLabel,...cats].forEach((label,i)=>{const b=document.createElement("button");b.type="button";b.className="filter-button"+(i===0?" active":"");b.textContent=label;b.dataset.filter=i===0?"all":label;b.addEventListener("click",()=>{bar.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));document.querySelectorAll("[data-category-card]").forEach(card=>card.hidden=b.dataset.filter!=="all"&&card.dataset.categoryCard!==b.dataset.filter);});bar.appendChild(b);});
}
function renderImages(container,items,message,bar){if(!container)return;if(!items.length){empty(container,message);return;}filters(bar,items);items.forEach((item,i)=>{const fig=document.createElement("figure");fig.className="image-card";fig.dataset.categoryCard=item.category||"Other";const img=document.createElement("img");img.src=item.file;img.alt=item.title||"Portfolio image";img.loading="lazy";const cap=document.createElement("figcaption");cap.className="image-caption";const t=document.createElement("span");t.textContent=item.title||`UNTITLED ${String(i+1).padStart(2,"0")}`;const n=document.createElement("span");n.textContent=item.note||item.category||"";cap.append(t,n);fig.append(img,cap);container.append(fig);});}
// Three-image biography / on-set strip on the homepage.
const btsGrid=document.querySelector("#bts-grid");if(btsGrid){btsPhotos.forEach((photo,i)=>{const wrap=document.createElement("div");wrap.className="bts-image";const img=document.createElement("img");img.src=photo.file;img.alt=photo.alt;img.loading="lazy";img.onerror=()=>{wrap.classList.add("bts-placeholder");img.remove();const label=document.createElement("span");label.textContent=`BTS 0${i+1} · ADD PHOTO`;wrap.append(label);};wrap.append(img);btsGrid.append(wrap);});}
const imageGrid=document.querySelector("#image-grid"),bar=document.querySelector("#filter-bar");
if(document.body.dataset.page==="photos")renderImages(imageGrid,filmPhotos,"Add your 35mm, 120 film and digital photographs to the matching folders and register them in script.js.",bar);
if(document.body.dataset.page==="art")renderImages(imageGrid,artProjects,"Add your printmaking, sketchbook and painting images to the matching folders and register them in script.js.",bar);

// Video project grid and fullscreen player.
function videoSource(item){return /^https?:\/\//i.test(item.video)?item.video:`../assets/videos/${item.video}`;}
const grid=document.querySelector("#work"),viewer=document.querySelector("#viewer"),viewerVideo=document.querySelector("#viewerVideo");let activeIndex=0;
function showVideo(index){if(!viewer||!viewerVideo)return;activeIndex=(index+projects.length)%projects.length;const item=projects[activeIndex];viewerVideo.src=videoSource(item);viewer.classList.add("open");viewer.setAttribute("aria-hidden","false");document.querySelector("#viewerTitle").textContent=item.title;document.querySelector("#viewerCredit").textContent=item.credit;viewerVideo.play().catch(()=>{});}
function closeVideo(){if(!viewer)return;viewer.classList.remove("open");viewer.setAttribute("aria-hidden","true");if(viewerVideo){viewerVideo.pause();viewerVideo.removeAttribute("src");viewerVideo.load();}}
if(grid){filters(bar,projects);projects.forEach((project,index)=>{const card=document.createElement("article");card.className="project";card.dataset.categoryCard=project.category;card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-label",`Play ${project.title}`);const media=document.createElement("div");media.className="media";const video=document.createElement("video");video.src=videoSource(project);video.muted=true;video.loop=true;video.playsInline=true;video.preload="metadata";video.addEventListener("mouseenter",()=>video.play().catch(()=>{}));video.addEventListener("mouseleave",()=>{video.pause();video.currentTime=0;});media.append(video);const info=document.createElement("div");info.className="project-info";const title=document.createElement("span");title.className="project-title";title.textContent=project.title;const meta=document.createElement("span");meta.className="project-meta";meta.textContent=project.credit;info.append(title,meta);card.append(media,info);card.addEventListener("click",()=>showVideo(index));card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showVideo(index);}});grid.append(card);});}
const close=document.querySelector("#viewerClose"),prev=document.querySelector("#viewerPrev"),next=document.querySelector("#viewerNext");if(close)close.addEventListener("click",closeVideo);if(prev)prev.addEventListener("click",()=>showVideo(activeIndex-1));if(next)next.addEventListener("click",()=>showVideo(activeIndex+1));if(viewer)viewer.addEventListener("click",e=>{if(e.target===viewer)closeVideo();});document.addEventListener("keydown",e=>{if(!viewer?.classList.contains("open"))return;if(e.key==="Escape")closeVideo();if(e.key==="ArrowLeft")showVideo(activeIndex-1);if(e.key==="ArrowRight")showVideo(activeIndex+1);});
