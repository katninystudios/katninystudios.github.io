const year = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
   if (document.getElementById("replaceWithYear")) {
      document.getElementById("replaceWithYear").textContent = year;
   }
});