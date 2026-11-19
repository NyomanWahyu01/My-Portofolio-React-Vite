export function getStoredTheme() {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";

  if (isDark) {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#0b0b0b");
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#fbf6ea");
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function setTheme(theme) {
  applyTheme(theme);
  window.dispatchEvent(new Event("ecc-theme-change"));
}
