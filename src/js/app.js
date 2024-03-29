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

  // PRELOADING IMAGES
  const blurredImageDiv = document.querySelectorAll(".blurred-img");
  blurredImageDiv.forEach((div) => {
    const img = div.querySelector("img");
    function loaded() {
      div.classList.add("loaded");
      div.style.backgroundImage = "";
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });

  // USER LOCATION
  const cityId = document.querySelectorAll(".address");
  fetch("https://ipinfo.io/json")
    .then((response) => {
      if (!response.ok) {
        document.querySelector(".userLocationDiv").style.display = none;
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector(".userLocationDiv").style.display = "flex";
      cityId.forEach((citie) => {
        citie.innerHTML = data.city;
      });
    })
    .catch((error) => {
      console.error("Error during fetch:", error);
      document.querySelector(".userLocationDiv").style.display = "none";
    });
});
