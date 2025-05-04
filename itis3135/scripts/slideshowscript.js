let slideIndex = 1;


const showSlide = (n) => {
    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".demo");
    const captions = document.getElementById("caption");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display ="block";
    dots[slideIndex - 1].classList.add("active");
}


document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
});

const changeSlide = (n) => {
    showSlide(slideIndex += n);
}

const goToSlide = (n) => {
    showSlide(slideIndex = n);
}
