/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== NAVBAR SELECT ====================*/
NiceSelect.bind(document.getElementById("navbar-select"), {
  searchable: false,
})

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup")

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll")
}

scrollUp()
window.addEventListener("scroll", scrollUp)
