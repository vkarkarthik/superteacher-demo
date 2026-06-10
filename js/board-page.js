(function () {
  const boardKey =
    document.body.dataset.board;

  const root =
    document.body.dataset.root || "../";

  const board =
    window.STCatalog?.boards?.[boardKey];

  if (!board) {
    console.error(
      "Board information not found:",
      boardKey
    );

    return;
  }

  document.title =
    `${board.name} Computer Science | SuperTeacher`;


  const pageTitle =
    document.getElementById("page-title");

  const pageDescription =
    document.getElementById("page-description");

  const grid =
    document.getElementById("series-grid");


  if (pageTitle) {
    pageTitle.textContent =
      `${board.name} Computer Science Offerings`;
  }


  if (pageDescription) {
    pageDescription.textContent =
      board.description;
  }


  if (!grid) {
    console.error(
      'Element with ID "series-grid" was not found.'
    );

    return;
  }


  grid.innerHTML = "";


  board.series.forEach(
    (seriesKey) => {
      const series =
        window.STCatalog.series[seriesKey];

      if (!series) {
        console.warn(
          "Series information not found:",
          seriesKey
        );

        return;
      }


      const link =
        document.createElement("a");


      link.className =
        "catalog-card cs-series-card";


      link.style.setProperty(
        "--one",
        series.colors[0]
      );


      link.style.setProperty(
        "--two",
        series.colors[1]
      );


      link.href =
        `${root}series/${seriesKey}.html?board=${encodeURIComponent(boardKey)}`;


      const logoPath =
        series.logo
          ? `${root}${series.logo}`
          : "";


      const logoMarkup =
        logoPath
          ? `
            <div class="cs-series-logo-area">

              <img
                class="cs-series-logo"
                src="${logoPath}"
                alt="${series.name} logo"
                loading="lazy"
                decoding="async"
              >

            </div>
          `
          : `
            <div class="cs-series-logo-area cs-series-logo-fallback-area">

              <div class="cs-series-fallback-icon">
                ${window.STIcons.series}
              </div>

            </div>
          `;


      link.innerHTML = `

        ${logoMarkup}

        <div class="cs-series-card-content">

          <span class="catalog-badge">
            ${board.name} SERIES
          </span>

          <h2>
            ${series.name}
          </h2>

          <p>
            ${series.description}
          </p>

          <div class="cs-series-card-footer">

            <strong>
              View grade-wise books →
            </strong>

            <span>
              ${series.grades.length} Grades
            </span>

          </div>

        </div>

      `;


      const image =
        link.querySelector(
          ".cs-series-logo"
        );


      if (image) {
        image.addEventListener(
          "error",
          () => {
            const imageArea =
              image.closest(
                ".cs-series-logo-area"
              );

            if (!imageArea) {
              return;
            }

            imageArea.classList.add(
              "cs-series-logo-fallback-area"
            );

            imageArea.innerHTML = `

              <div class="cs-series-fallback-icon">
                ${window.STIcons.series}
              </div>

            `;
          },
          {
            once: true,
          }
        );
      }


      grid.appendChild(link);
    }
  );
})();