// script.js
function goToPage2() {
  document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
}

// Auto scroll setelah 5 detik
window.addEventListener("load", () => {
  setTimeout(goToPage2, 5000);
});
