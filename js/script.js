/* ===== Jhalak Sachan Portfolio – script.js ===== */
(function () {
  "use strict";

  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  /* ---------- 1. Theme (light/dark), remembered in the browser ---------- */
  function getSavedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function saveTheme(t) {
    try { localStorage.setItem("theme", t); } catch (e) { /* ignore */ }
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", getSavedTheme() || (prefersDark ? "dark" : "light"));

  themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    saveTheme(next);
  });

  /* ---------- 2. Mobile menu ---------- */
  menuBtn.addEventListener("click", function () {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 3. Hide menu links of hidden (empty) sections ---------- */
  navLinks.querySelectorAll("a").forEach(function (link) {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target || target.hidden) link.parentElement.hidden = true;
  });

  /* ---------- 4. Highlight current section in the menu ---------- */
  const sections = document.querySelectorAll("main section:not([hidden])");
  window.addEventListener("scroll", function () {
    let current = "home";
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  });

  /* ---------- 5. Fade-in animation on scroll ---------- */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 6. Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
