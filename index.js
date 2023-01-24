let slideIndex = 0;
let slides = document.querySelectorAll(".slider__items img");
let btnPrev = document.querySelector(".slider__btn_prev");
let btnNext = document.querySelector(".slider__btn_next");

btnNext.addEventListener("click", function () {
    ++slideIndex;

    if (slideIndex >= slides.length) {
        slides[slideIndex - 1].classList.remove("slider__item", "slider__item_active");
        slideIndex = 0;
        slides[slideIndex].classList.add("slider__item", "slider__item_active");

    } else {
        slides[slideIndex - 1].classList.remove("slider__item", "slider__item_active");
        slides[slideIndex].classList.add("slider__item", "slider__item_active");
    }
})

btnPrev.addEventListener("click", function () {
    --slideIndex;

    if (slideIndex >= slides.length) {
        slides[slideIndex + 1].classList.remove("slider__item", "slider__item_active");
        slideIndex = 0;
        slides[slideIndex].classList.add("slider__item", "slider__item_active");

    } if (slideIndex === -1) {
        slides[slideIndex + 1].classList.remove("slider__item", "slider__item_active");
        slideIndex = 2;
        slides[slideIndex].classList.add("slider__item", "slider__item_active");

    } else {
        slides[slideIndex + 1].classList.remove("slider__item", "slider__item_active");
        slides[slideIndex].classList.add("slider__item", "slider__item_active");
    }
})
