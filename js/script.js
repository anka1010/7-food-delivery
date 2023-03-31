//HAMBURGER MENU OPEN-CLOSE
const menu_btn = document.querySelector("#menu_btn");
const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const menu_btn_icon = document.querySelector("#menu_btn_icon");

menu_btn.addEventListener("click", () => {
  header.classList.toggle("sticky");
  menu.classList.toggle("visible");

  menu.classList.contains("visible")
    ? menu_btn_icon.setAttribute("href", "img/sprite.svg#icon-menu-close")
    : menu_btn_icon.setAttribute("href", "img/sprite.svg#icon-menu-open");
});
