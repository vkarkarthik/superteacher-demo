(function () {
  const key = document.body.dataset.subject;
  const subject = window.STCatalog.subjects[key];
  if (!subject) return;

  document.title = `${subject.title} | SuperTeacher`;
  document.getElementById("page-title").textContent =
    `${subject.title} — Choose a Grade`;
  document.getElementById("page-description").textContent = subject.description;
  document.getElementById("grade-core-title").textContent = subject.title;
  document.getElementById("grade-core-context").textContent = subject.context;
  document.getElementById("grade-core-icon").innerHTML =
    window.STIcons[subject.icon];

  const stage = document.getElementById("grade-stage");
  const core = document.getElementById("grade-core");
  const ring = document.getElementById("grade-ring");
  const root = document.body.dataset.root || "";

  core.style.setProperty("--one", subject.colors[0]);
  core.style.setProperty("--two", subject.colors[1]);
  stage.classList.toggle("ten-grades", subject.grades.length > 8);

  subject.grades.forEach((grade, index) => {
    const angle = -90 + (360 / subject.grades.length) * index;

    const gradeColor = subject.gradeColors?.[grade] || subject.colors[0];

    const link = document.createElement("a");

    link.className = "grade-button";

    link.style.setProperty("--angle", angle + "deg");

    link.style.setProperty("--index", index);

    link.style.setProperty("--grade-color", gradeColor);

    link.href = `${root}books/book-viewer.html?subject=${encodeURIComponent(key)}&grade=${grade}`;

    link.innerHTML = `
      <span>GRADE</span>
      ${grade}
    `;

    ring.appendChild(link);
  });
})();
