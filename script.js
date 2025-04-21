document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      updateThemeIcon(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", defaultTheme);
      updateThemeIcon(defaultTheme);
    }
  });
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  }
  
  function updateThemeIcon(theme) {
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.textContent = theme === "dark" ? "🌞" : "🌙";
  }