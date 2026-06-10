(function(){
  const params = new URLSearchParams(location.search);
  const subjectKey = params.get("subject");
  const seriesKey = params.get("series");
  const boardKey = params.get("board");
  const grade = params.get("grade") || "1";

  let title, context, description, colors, actualCover = "";

  if(seriesKey){
    const series = window.STCatalog.series[seriesKey];
    const board = window.STCatalog.boards[boardKey || "cbse"];
    if(!series || !board) return;

    title = series.name;
    context = board.name;
    description = `${board.name} edition of ${series.name} for Grade ${grade}.`;
    colors = series.colors;
  }else{
    const subject = window.STCatalog.subjects[subjectKey];
    if(!subject) return;

    title = subject.title;
    context = subject.context;
    description = `${subject.title} for Grade ${grade}.`;
    colors = subject.colors;

    if(subject.coverFolder){
      actualCover = `../assets/book-covers/${subject.coverFolder}/grade-${grade}.jpg`;
    }
  }

  document.title = `${title} Grade ${grade} | SuperTeacher`;
  document.getElementById("cover-title").textContent = title;
  document.getElementById("cover-grade").textContent = `Grade ${grade}`;
  document.getElementById("cover-board").textContent = context;
  document.getElementById("book-title").textContent = `${title} — Grade ${grade}`;

  const isThinkingBook = subjectKey === "thinking";
  const levelNote = isThinkingBook
    ? (Number(grade) <= 5
        ? "This edition focuses on Computational Thinking."
        : "This edition combines Computational Thinking and Artificial Intelligence.")
    : "";

  document.getElementById("book-description").textContent =
    `${description} ${levelNote} The actual cover is displayed here; PDF and sample-page links can be connected next.`;

  const generatedCover = document.getElementById("book-cover");
  generatedCover.style.setProperty("--one",colors[0]);
  generatedCover.style.setProperty("--two",colors[1]);

  const actualCoverImage = document.getElementById("actual-cover-image");

  if(actualCover){
    actualCoverImage.src = actualCover;
    actualCoverImage.alt = `${title} Grade ${grade} book cover`;
    actualCoverImage.classList.add("visible");
    generatedCover.classList.add("hidden");

    actualCoverImage.addEventListener("error", () => {
      actualCoverImage.classList.remove("visible");
      generatedCover.classList.remove("hidden");
    }, { once:true });
  }
})();