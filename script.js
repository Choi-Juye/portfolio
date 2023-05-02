const aboutBtn = document.querySelector("about-btn");
const archiveBtn = document.querySelector("archive-btn");
const about = document.querySelector("about");
const archive = document.querySelector("archive");

aboutBtn.addEventListener("click", () => {
  window.scrollBy({
    top: about.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

archiveBtn.addEventListener("click", () => {
  window.scrollBy({
    top: archive.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
