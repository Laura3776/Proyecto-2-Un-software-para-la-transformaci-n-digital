const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.getAttribute("data-copy");
    if (!text || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      const prev = button.textContent;
      button.textContent = "Copiado";
      setTimeout(() => {
        button.textContent = prev;
      }, 1200);
    } catch (err) {
      console.error("No se pudo copiar el comando", err);
    }
  });
});
