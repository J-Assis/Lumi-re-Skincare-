/**
 * Lumière Skincare - Interações do Website (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STICKY NAVBAR
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 2. MENU MOBILE (Preparado para interações futuras)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Logica de toggle para classes mob_open futuramente
            alert('Menu mobile clicado! Pronto para expansão do menu.');
        });
    }

    // 3. ANIMAÇÕES SIMPLES HOVER E CLIQUE NOS BOTÕES
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // 4. CONTROLE DO SLIDER ANTES/DEPOIS (Placeholder de Interação)
    const sliderArrow = document.querySelector('.slider-arrow');
    if (sliderArrow) {
        sliderArrow.addEventListener('click', () => {
            console.log('Navegar para a próxima galeria de antes/depois.');
        });
    }

    // 5. ENVIO DO FORMULÁRIO DE NEWSLETTER
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Obrigado por se inscrever! Enviamos um cupom de 10% para o e-mail: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
});
