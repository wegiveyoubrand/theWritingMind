const menuTogglers = document.querySelectorAll(".toggle-menu");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("active");
}

menuTogglers.forEach((menuToggler) => {
  menuToggler.addEventListener("click", () => {
    toggleMenu();
    menuToggler.classList.toggle("active");
  });
});
