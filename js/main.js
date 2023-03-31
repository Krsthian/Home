// menu.js

const menu = document.querySelector(".menu");
const menuNavegacion = document.querySelector(".menu-navegacion");

menu.addEventListener("click", () => {
  menuNavegacion.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menuNavegacion.classList.contains("spread") &&
    e.target != menuNavegacion &&
    e.target != menu
  ) {
    menuNavegacion.classList.toggle("spread");
  }
});
