const toggle = document.querySelector(".toggle");
const colapse = document.querySelector(".sidebar-colapse");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

toggle.addEventListener("click", () => {
  colapse.classList.toggle("active");
});

toggle.addEventListener("mouseover", () => {
  line1.classList.toggle("changeLine");
  line2.classList.toggle("changeLine");
  console.log("change line");
});
