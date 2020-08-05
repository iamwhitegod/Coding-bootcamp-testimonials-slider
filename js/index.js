(function testimonialSlide() {
  let domElements = {
    nextBtn: document.querySelector(".slide-next-btn"),
    previousBtn: document.querySelector(".slide-previous-btn"),
    slides: Array.from(document.querySelectorAll(".slide")),
  };

  let index = 0;

  function displayCurrentSlide() {
    domElements.slides.forEach((slide) => {
      slide.style.display = "none";
    });
    domElements.slides[index].style.display = "flex";
  }

  function nextSlide() {
    index++;
    if (index > domElements.slides.length - 1) index = 0;
    displayCurrentSlide();
  }

  function previousSlide() {
    index--;
    if (index < 0) index = domElements.slides.length - 1;
    displayCurrentSlide();
  }

  domElements.nextBtn.addEventListener("click", nextSlide);
  domElements.previousBtn.addEventListener("click", previousSlide);
})();
