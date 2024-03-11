const openBurgerMenuEl = document.getElementById("open-burger-menu");
const navElMob = document.getElementsByClassName("nav-mob")[0];
const closeBurgerMenuEl = document.getElementById("close-burger-menu");

openBurgerMenuEl.addEventListener("click", function () {
  this.classList.toggle("close");
  navElMob.classList.toggle("nav-bar");
});

closeBurgerMenuEl.addEventListener("click", function () {
  this.classList.toggle("close");
  openBurgerMenuEl.classList.remove("close");
  navElMob.classList.remove("nav-bar");
});
