export function getStoredTheme() {
  return localStorage.getItem("theme") || "system";
}

export function applyTheme(theme) {
  const root = document.documentElement;
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    root.classList.add("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#0b0b0b");
  } else {
    root.classList.remove("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#fbf6ea");
  }
  localStorage.setItem("theme", theme);
}

export function setTheme(theme) {
  applyTheme(theme);
  window.dispatchEvent(new Event("ecc-theme-change"));
}
