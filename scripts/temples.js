function init() {
  console.log("Temple Album script loaded and running!");

  // Footer updates
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Hamburger menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });
}

document.addEventListener("DOMContentLoaded", init);
