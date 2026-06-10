(function(){
  const seriesKey = document.body.dataset.series;
  const params = new URLSearchParams(location.search);
  const boardKey = params.get("board") || "cbse";
  const series = window.STCatalog.series[seriesKey];
  const board = window.STCatalog.boards[boardKey];
  if(!series || !board) return;

  document.title = `${series.name} | ${board.name} | SuperTeacher`;
  document.getElementById("page-title").textContent = `${series.name} — Choose a Grade`;
  document.getElementById("page-description").textContent = series.description;
  document.getElementById("breadcrumb-board").textContent = board.name;
  document.getElementById("grade-core-title").textContent = series.name;
  document.getElementById("grade-core-context").textContent = board.name;
  document.getElementById("grade-core-icon").innerHTML = window.STIcons.computer;

  const stage = document.getElementById("grade-stage");
  const core = document.getElementById("grade-core");
  const ring = document.getElementById("grade-ring");

  core.style.setProperty("--one",series.colors[0]);
  core.style.setProperty("--two",series.colors[1]);
  stage.classList.toggle("ten-grades",series.grades.length > 8);

  series.grades.forEach((grade,index) => {
    const angle = -90 + (360 / series.grades.length) * index;
    const link = document.createElement("a");
    link.className = "grade-button";
    link.style.setProperty("--angle",angle + "deg");
    link.style.setProperty("--index",index);
    link.href = `../books/book-viewer.html?series=${encodeURIComponent(seriesKey)}&board=${encodeURIComponent(boardKey)}&grade=${grade}`;
    link.innerHTML = `<span>GRADE</span>${grade}`;
    ring.appendChild(link);
  });
})();