document.addEventListener("DOMContentLoaded", (e) => {
  // ACCORDION HANDLE
  document.querySelectorAll(".accordion-content").forEach((item) => {
    item.style.maxHeight = 0;
  });

  const accordionBtns = document.querySelectorAll(".accordion-button");

  accordionBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      if (button.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + `px`;
        content.style.paddingBottom = 16;
      } else {
        content.style.maxHeight = 0;
        content.style.paddingBottom = 0;
      }
    });
  });
});
