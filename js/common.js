(function () {
  const DEMO_FORM_URL = "https://forms.gle/Gzdf9bzix2Tidvsg8";
  const body = document.body;
  const root = body.dataset.root || "";
  const active = body.dataset.active || "home";

  const header = document.getElementById("site-header");
  if (header) {
    const nav = [
      ["home", "Overview", root + "index.html"],
      ["curriculum", "Curriculum", root + "curriculum.html"],
      ["kits", "Experiential Kits", root + "experiential-kits.html"],
      ["makerspace", "Makerspace", root + "makerspace.html"],
      ["stepup", "STEP-UP", root + "step-up.html"],
    ];

    header.className = "site-header";
    header.innerHTML = `
      <a class="brand-link" href="${root}index.html">
        <img class="logo" src="${root}assets/logo/superteacher-logo.png" alt="SuperTeacher">
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        ${nav.map(([key, label, url]) => `<a class="nav-link ${active === key ? "active" : ""}" href="${url}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">

  <a
    class="header-button demo-form-button"
    href="${DEMO_FORM_URL}"
    target="_blank"
    rel="noopener"
  >
    Book a Demo
  </a>

  <button
    class="header-button"
    type="button"
    onclick="history.back()"
  >
    Back
  </button>

  <button
    class="header-button primary"
    type="button"
    id="fullscreenButton"
  >
    Full Screen
  </button>

</div>
    `;
  }

  const fs = document.getElementById("fullscreenButton");
  if (fs) {
    fs.addEventListener("click", async () => {
      try {
        if (!document.fullscreenElement)
          await document.documentElement.requestFullscreen();
        else await document.exitFullscreen();
      } catch (error) {
        console.warn("Fullscreen is not available:", error);
      }
    });
  }

  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(
        "a,button,.card,.subject-card,.catalog-card,.grade-button",
      )
    )
      return;
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = event.clientX + "px";
    ripple.style.top = event.clientY + "px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 620);
  });

  window.showToast = function (message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2300);
  };

  /* =====================================================
   EXPANDABLE GRADE SELECTOR
===================================================== */

  const gradeStage = document.getElementById("grade-stage");

  const gradeCore = document.getElementById("grade-core");

  const gradeCoreAction = document.getElementById("grade-core-action");

  if (gradeStage && gradeCore) {
    gradeCore.addEventListener("click", () => {
      const isOpen = gradeStage.classList.toggle("is-open");

      gradeCore.setAttribute("aria-expanded", String(isOpen));

      if (gradeCoreAction) {
        gradeCoreAction.textContent = isOpen
          ? "Choose a grade"
          : "Click to view grades";
      }
    });
  }
  const floatingDemoButton = document.createElement("a");

  floatingDemoButton.className = "floating-demo-button";

  floatingDemoButton.href = DEMO_FORM_URL;

  floatingDemoButton.target = "_blank";

  floatingDemoButton.rel = "noopener";

  floatingDemoButton.textContent = "Book a Demo";

  document.body.appendChild(floatingDemoButton);
})();
