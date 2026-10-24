console.log("Portfolio chargé avec succès");

/* ============ 1. Effet "dataframe" tapé dans le hero ============ */
const dfRows = [
  { idx: "0", champ: "nom", valeur: "Yasmine Frikha" },
  { idx: "1", champ: "domaine", valeur: "Big Data & Data Analytics" },
  { idx: "2", champ: "stack", valeur: "Python · Java · Hadoop" },
  { idx: "3", champ: "objectif", valeur: "Master / PFE 2027" },
  { idx: "4", champ: "disponibilite", valeur: "True" },
];

function buildDataframe() {
  const body = document.getElementById("dfBody");
  if (!body) return;

  let rowIndex = 0;

  function addRow() {
    if (rowIndex >= dfRows.length) return;
    const row = dfRows[rowIndex];
    const tr = document.createElement("tr");
    tr.style.opacity = "0";
    tr.innerHTML = `<td>${row.idx}</td><td>${row.champ}</td><td>${row.valeur}</td>`;
    body.appendChild(tr);
    requestAnimationFrame(() => {
      tr.style.transition = "opacity .4s ease";
      tr.style.opacity = "1";
    });
    rowIndex++;
    setTimeout(addRow, 220);
  }

  addRow();
}

/* ============ 2. Reveal au scroll ============ */
function setupScrollReveal() {
  const targets = document.querySelectorAll(".section");
  targets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
}

/* ============ 3. Menu mobile ============ */
function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("nav ul");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.style.display === "flex";
    menu.style.display = isOpen ? "none" : "flex";
    menu.style.flexDirection = "column";
    menu.style.position = "absolute";
    menu.style.top = "64px";
    menu.style.right = "24px";
    menu.style.background = "#FFFFFF";
    menu.style.border = "1px solid #D9DED2";
    menu.style.borderRadius = "10px";
    menu.style.padding = "16px 22px";
    menu.style.gap = "14px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildDataframe();
  setupScrollReveal();
  setupMobileMenu();
});