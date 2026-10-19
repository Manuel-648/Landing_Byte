const themeToggle = document.querySelector("#tema-oscuro");

if (themeToggle) {
  themeToggle.checked = localStorage.getItem("bite-theme") === "dark";
  themeToggle.addEventListener("change", () => {
    localStorage.setItem("bite-theme", themeToggle.checked ? "dark" : "light");
  });
}
