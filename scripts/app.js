document.addEventListener("DOMContentLoaded", () => {
  // El botón flotante solo aparece en páginas internas.
  if (!document.body.classList.contains("pe-course-page")) return;
  if (document.querySelector(".back-home")) return;

  const boton = document.createElement("a");
  boton.className = "back-home";
  boton.href = "../index.html";
  boton.title = "Regresar al menú principal";
  boton.setAttribute("aria-label", "Regresar al menú principal");

  const imagen = document.createElement("img");
  imagen.src = "../images/cimarron.png";
  imagen.alt = "Cimarrón UABC FIAD";

  const texto = document.createElement("span");
  texto.textContent = "← Regresar al menú";

  boton.appendChild(imagen);
  boton.appendChild(texto);
  document.body.appendChild(boton);

  // Conserva soporte para botones que usen data-back.
  document.addEventListener("click", (event) => {
    const back = event.target.closest("[data-back]");
    if (!back) return;
    event.preventDefault();
    if (history.length > 1) history.back();
    else location.href = back.dataset.fallback || "../index.html";
  });
});
