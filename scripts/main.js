// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // Theme Switcher
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    root.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", function () {
    root.classList.toggle("dark-mode");
    const isDark = root.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
