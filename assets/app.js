const openBurgerMenuEl = document.getElementById("open-burger-menu");

const closeBurgerMenuEl = document.getElementById("close-burger-menu");
const navElMob = document.getElementsByClassName("nav-mob")[0];
const navLinksItemEls = document.getElementsByClassName("nav-links-item");

openBurgerMenuEl.addEventListener("click", function () {
  this.classList.toggle("close");
  navElMob.classList.toggle("nav-bar");
});

closeBurgerMenuEl.addEventListener("click", function () {
  this.classList.toggle("close");
  openBurgerMenuEl.classList.remove("close");
  navElMob.classList.remove("nav-bar");
});

for (let navLinksItemEl of navLinksItemEls) {
  navLinksItemEl.addEventListener("click", function () {
    navElMob.classList.remove("nav-bar");
  });
}
