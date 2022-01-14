const menuBtn = document.querySelector(".header__nav-hamburger")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".header__nav-menu")

menuBtn.addEventListener("click", openMenu)

function openMenu(e) {

  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "active")
    menuBtn.src = "../images/icon-close.svg"
    overlay.classList.replace("close", "open")
    document.body.style.overflow = "hidden"
  } else {
    menu.classList.replace("active", "hidden")
    overlay.classList.replace("open", "close")
    menuBtn.src = "../images/icon-hamburger.svg"
    document.body.style.overflow = "visible"
  }

}