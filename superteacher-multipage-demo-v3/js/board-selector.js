(function () {

  const boardStage =
    document.getElementById("board-stage");

  const boardCore =
    document.getElementById("board-core");

  const boardCoreAction =
    document.getElementById(
      "board-core-action"
    );

  const boardCoreIcon =
    document.getElementById(
      "board-core-icon"
    );

  const boardRing =
    document.getElementById("board-ring");


  if (
    !boardStage ||
    !boardCore ||
    !boardRing ||
    !window.STCatalog
  ) {
    return;
  }


  boardCoreIcon.innerHTML =
    window.STIcons.computer;


  const boardPageLinks = {

    cbse:
      "cbse.html",

    icse:
      "icse.html",

    "state-board":
      "state-board.html"

  };


  const boards =
    Object.entries(
      window.STCatalog.boards
    );


  boardRing.innerHTML = "";


  boards.forEach(
    ([boardKey, board], index) => {

      /*
        With three boards:

        CBSE        → Top
        ICSE        → Bottom-right
        State Board → Bottom-left
      */

      const angle =
        -90 +
        (
          360 /
          boards.length
        ) * index;


      const boardButton =
        document.createElement("a");


      boardButton.className =
        "board-orbit-button";


      boardButton.href =
        boardPageLinks[boardKey] || "#";


      boardButton.style.setProperty(
        "--board-angle",
        angle + "deg"
      );


      boardButton.style.setProperty(
        "--board-index",
        index
      );


      boardButton.style.setProperty(
        "--board-one",
        board.colors[0]
      );


      boardButton.style.setProperty(
        "--board-two",
        board.colors[1]
      );


      const seriesCount =
        board.series.length;


      boardButton.innerHTML = `

        <span class="board-button-label">
          EDUCATION BOARD
        </span>

        <strong class="board-button-name">
          ${board.name}
        </strong>

        <span class="board-button-count">
          ${seriesCount}
          ${seriesCount === 1
            ? "Series"
            : "Series"}
        </span>

      `;


      boardRing.appendChild(
        boardButton
      );

    }
  );


  boardCore.addEventListener(
    "click",
    () => {

      const isOpen =
        boardStage.classList.toggle(
          "is-open"
        );


      boardCore.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      boardCoreAction.textContent =
        isOpen
          ? "Choose a board"
          : "Click to choose a board";

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        boardStage.classList.contains(
          "is-open"
        )
      ) {

        boardStage.classList.remove(
          "is-open"
        );


        boardCore.setAttribute(
          "aria-expanded",
          "false"
        );


        boardCoreAction.textContent =
          "Click to choose a board";

      }

    }
  );

})();