// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const list = document.querySelector(".nav-list");
if (toggle && list) {
  toggle.addEventListener("click", () => list.classList.toggle("open"));
  list
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => list.classList.remove("open"))
    );
}

// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${targetId}`);
    }
  });
});
