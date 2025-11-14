/* MENU SHOW Y HIDDEN */

/* MENU SHOW */
/* Validate if constant exists */

/* MENU HIDDEN */
/* Validate if constant exists */

/* NAVBAR SELECT */
NiceSelect.bind(document.getElementById("navbar-select"), {
  searchable: false,
})

/* SHOW SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup")

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll")
}

scrollUp()
window.addEventListener("scroll", scrollUp)

/*=== Input-Behaviar===*/
const input = document.getElementById("myInput")
const btn = document.getElementById("myBtn")

btn.onclick = function () {
  const value = input.value

  if (value === "") {
    alert("Input is empty")
  } else if (value.includes("@") === false) {
    alert("It must include '@' !")
  } else {
    alert("Ok!")
  }
}
