/* ACCORDION */
const accordionItems = document.querySelectorAll(".accordion-item")

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header"),
    content = item.querySelector(".accordion-content"),
    icon = header.querySelector("i")

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open")

    content.style.height = isOpen ? content.scrollHeight + "px" : "0px"
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line"

    // remove other accordion
    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.classList.remove("accordion-open")

        const otherContent = otherItem.querySelector(".accordion-content")
        const otherIcon = otherItem.querySelector(".accordion-header i")

        otherContent.style.height = "0px"
        otherIcon.className = "ri-add-line"
      }
    })
  })
})
