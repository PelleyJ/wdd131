function init() {
  console.log("Temple Album script loaded and running!");

  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last modified date
  document.getElementById("lastModified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", init);
