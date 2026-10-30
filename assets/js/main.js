/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/* Close menu on outside click or Escape key */
document.addEventListener("click", (e) => {
  if (
    navMenu &&
    navMenu.classList.contains("show-menu") &&
    !navMenu.contains(e.target) &&
    navToggle &&
    !navToggle.contains(e.target)
  ) {
    navMenu.classList.remove("show-menu")
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu && navMenu.classList.contains("show-menu")) {
    navMenu.classList.remove("show-menu")
  }
})

/* NAVBAR SELECT */
const navbarSelect = document.getElementById("navbar-select")
if (navbarSelect && typeof NiceSelect !== "undefined") {
  NiceSelect.bind(navbarSelect, {
    searchable: false,
  })
}

/* SHOW SCROLL UP */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scrollup")
  if (scrollUpBtn) {
    window.scrollY >= 350
      ? scrollUpBtn.classList.add("show-scroll")
      : scrollUpBtn.classList.remove("show-scroll")
  }
}

scrollUp()
window.addEventListener("scroll", scrollUp)

/*=== Input-Behavior ===*/
const input = document.getElementById("myInput")
const btn = document.getElementById("myBtn")

if (btn && input) {
  btn.onclick = function () {
    const value = input.value.trim()

    if (value === "") {
      alert("Input is empty")
    } else if (!value.includes("@")) {
      alert("It must include '@' !")
    } else {
      alert("Ok!")
    }
  }
}

const scrolldown = document.getElementById("scrolldown")
if (scrolldown) {
  scrolldown.onclick = function () {
    window.scrollTo({
      top: 6000,
      behavior: "smooth",
    })
  }
}

/* QUANTITY STEPPER (CART & DETAILS) */
document.querySelectorAll(".add-to-cart").forEach((box) => {
  const subBtn = box.querySelector(".sub")
  const addBtn = box.querySelector(".add")
  const countInput = box.querySelector(".count")

  if (subBtn && addBtn && countInput) {
    subBtn.addEventListener("click", (e) => {
      e.preventDefault()
      let val = parseInt(countInput.value) || 1
      if (val > 1) {
        countInput.value = val - 1
      }
    })

    addBtn.addEventListener("click", (e) => {
      e.preventDefault()
      let val = parseInt(countInput.value) || 1
      countInput.value = val + 1
    })
  }
})
