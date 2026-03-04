const tabButtons = Array.from(document.querySelectorAll(".top-tab"));
const panelSections = Array.from(document.querySelectorAll("[data-tab-panel]"));
const tocContainer = document.getElementById("docToc");
let activeTab = "funcional";

function buildToc(tab) {
  if (!tocContainer) return [];
  const visibleSections = panelSections.filter((section) => section.dataset.tabPanel === tab);
  tocContainer.innerHTML = visibleSections
    .map((section) => {
      const title = section.querySelector("h2")?.textContent?.trim() || section.id;
      return `<a href="#${section.id}">${title}</a>`;
    })
    .join("");
  return Array.from(tocContainer.querySelectorAll("a"));
}

function applyTab(tab) {
  activeTab = tab;
  tabButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.docTab === tab));
  panelSections.forEach((section) => section.classList.toggle("is-hidden", section.dataset.tabPanel !== tab));
  buildToc(tab);
  window.scrollTo({ top: 0, behavior: "smooth" });
  setActiveLink();
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyTab(btn.dataset.docTab));
});

const setActiveLink = () => {
  const tocLinks = tocContainer ? Array.from(tocContainer.querySelectorAll("a")) : [];
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section && !section.classList.contains("is-hidden"));
  let currentId = sections[0]?.id || "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140) currentId = section.id;
  });

  document.querySelectorAll("#docToc a").forEach((link) => link.classList.remove("active"));
  tocLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", () => applyTab("criterios"));

const printBtn = document.getElementById("printBtn");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}
