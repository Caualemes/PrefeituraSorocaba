let slideIndex = 1;
showSlides(slideIndex);

// Controles Próximo/Anterior
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Controle pelos dots (bolinhas)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    // Remove status 'active' dos dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].className += " active";
}

// Automático (opcional)
setInterval(() => {
    moveSlide(1);
}, 7000); // Muda a cada 7 segundos