(function(){
  const boardKey = document.body.dataset.board;
  const board = window.STCatalog.boards[boardKey];
  if(!board) return;

  document.title = `${board.name} Computer Science | SuperTeacher`;
  document.getElementById("page-title").textContent = `${board.name} Computer Science Offerings`;
  document.getElementById("page-description").textContent = board.description;

  const grid = document.getElementById("series-grid");
  board.series.forEach(seriesKey => {
    const series = window.STCatalog.series[seriesKey];
    const link = document.createElement("a");
    link.className = "catalog-card";
    link.style.setProperty("--one",series.colors[0]);
    link.style.setProperty("--two",series.colors[1]);
    link.href = `../series/${seriesKey}.html?board=${encodeURIComponent(boardKey)}`;
    link.innerHTML = `
      <div class="catalog-icon">${window.STIcons.series}</div>
      <div class="catalog-label">${board.name} Series</div>
      <h2>${series.name}</h2>
      <p>${series.description}</p>
      <div class="catalog-action">View grade-wise books →</div>
      <div class="catalog-count">${series.grades.length} Grades</div>
    `;
    grid.appendChild(link);
  });
})();