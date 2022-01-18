const toggle = document.querySelector(".toggle");
const colapse = document.querySelector(".sidebar-colapse");

toggle.addEventListener("click", () => {
  colapse.classList.toggle("active");
});
