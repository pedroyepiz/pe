(() => {
  "use strict";

  /*
   * CONFIGURACIÓN DEL REPOSITORIO PÚBLICO
   * Si cambia la rama o carpeta, solo modifica este objeto.
   */
  const GITHUB = {
    owner: "pedroyepiz",
    repo: "BIBLIOGRAFIAS",
    branch: "main",
    folder: "prog_estruct"
  };

  function encodePath(path) {
    return path
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");
  }

  function blobUrl(fileName) {
    const filePath = encodePath(`${GITHUB.folder}/${fileName}`);
    return `https://github.com/${GITHUB.owner}/${GITHUB.repo}/blob/${GITHUB.branch}/${filePath}`;
  }

  function rawUrl(fileName) {
    const filePath = encodePath(`${GITHUB.folder}/${fileName}`);
    return `https://raw.githubusercontent.com/${GITHUB.owner}/${GITHUB.repo}/${GITHUB.branch}/${filePath}`;
  }

  function configurarEnlaces() {
    document.querySelectorAll("[data-book]").forEach((card) => {
      const fileName = card.dataset.file;
      if (!fileName) return;

      const view = card.querySelector('[data-action="view"]');
      const download = card.querySelector('[data-action="download"]');

      if (view) view.href = blobUrl(fileName);
      if (download) download.href = rawUrl(fileName);
    });
  }

  function configurarBusqueda() {
    const input = document.getElementById("bibliografiaSearch");
    const count = document.getElementById("bibliografiaCount");
    const empty = document.getElementById("bibliografiaEmpty");
    const cards = [...document.querySelectorAll("[data-book]")];

    if (!input || !count) return;

    const filtrar = () => {
      const query = input.value.trim().toLocaleLowerCase("es");
      let visibles = 0;

      cards.forEach((card) => {
        const texto = (card.dataset.title || card.textContent)
          .toLocaleLowerCase("es");

        const mostrar = !query || texto.includes(query);
        card.hidden = !mostrar;

        if (mostrar) visibles++;
      });

      count.textContent = visibles;
      if (empty) empty.hidden = visibles !== 0;
    };

    input.addEventListener("input", filtrar);
    filtrar();
  }

  document.addEventListener("DOMContentLoaded", () => {
    configurarEnlaces();
    configurarBusqueda();
  });
})();
