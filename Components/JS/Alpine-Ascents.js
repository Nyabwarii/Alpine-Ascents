const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// MODALS
const aboutModal = document.getElementById("aboutModal");
const testimonyModal = document.getElementById("testimonyModal");

const aboutBtn = document.getElementById("aboutBtn");
const testimonyBtn = document.getElementById("testimonyBtn");

// IMPORTANT: select ALL close buttons
const closeBtns = document.querySelectorAll(".close-btn");


// OPEN ABOUT
aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutModal.style.display = "flex";
});


// OPEN TESTIMONY
testimonyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  testimonyModal.style.display = "flex";
});


// CLOSE ALL MODALS WITH CLOSE BUTTONS
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    aboutModal.style.display = "none";
    testimonyModal.style.display = "none";
  });
});


// CLICK OUTSIDE TO CLOSE
window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
  if (e.target === testimonyModal) {
    testimonyModal.style.display = "none";
  }
});