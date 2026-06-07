const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.checkValidity()) {
    formMessage.textContent = "Please complete all reservation fields correctly.";
    formMessage.style.color = "#fca5a5";
    return;
  }

  formMessage.textContent = "Thanks! Your reservation request has been received.";
  formMessage.style.color = "#86efac";
  reservationForm.reset();
});
