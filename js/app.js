/* ==========================================
   LÓGICA DO CARROSSEL (SLIDER)
   ========================================== */
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

    if (!slides.length) return; // Evita erro se não houver slides

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
    
    if(dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

// Automático: Muda a cada 7 segundos
setInterval(() => {
    moveSlide(1);
}, 7000);


/* ==========================================
   LÓGICA DO MENU MOBILE & DEMAIS OPÇÕES
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos
    const btnMenu = document.getElementById('btnMenu');          // Botão no Header
    const btnMoreOptions = document.getElementById('btnMoreOptions'); // Botão na Grid
    const menuOverlay = document.getElementById('mobileMenu');   // O Menu em si
    const btnCloseArea = document.getElementById('btnCloseArea'); // Área cinza/Botão X
    
    // Tenta pegar o ícone dentro do botão do header (pode ser null se não existir)
    const icon = btnMenu ? btnMenu.querySelector('i') : null;

    // Função única para alternar (abrir/fechar)
    function toggleMenu() {
        if (!menuOverlay) return;

        // Adiciona/Remove a classe 'active'
        const isActive = menuOverlay.classList.toggle('active');
        
        // Atualiza o ícone do botão do topo (Barras <-> X)
        if (icon) {
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Trava o scroll da página
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                // Destrava o scroll
                document.body.style.overflow = 'auto';
            }
        } else {
            // Fallback se não tiver ícone: apenas trava/destrava scroll
            document.body.style.overflow = isActive ? 'hidden' : 'auto';
        }
    }

    // 1. Evento no botão do Topo (Header)
    if(btnMenu) {
        btnMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // 2. Evento no botão "Demais Opções" (Grid)
    if(btnMoreOptions) {
        btnMoreOptions.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // TRAVA DE SEGURANÇA:
            // Se a tela for maior que 768px (Desktop), não faz nada e encerra a função.
            if (window.innerWidth > 768) {
                return; 
            }
            
            // Se for mobile, continua normal...
            toggleMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Evento para fechar no X ou na área cinza
    if(btnCloseArea) {
        btnCloseArea.addEventListener('click', function() {
            toggleMenu();
        });
    }
});