document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Efeito Sticky Header ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Toggle para o Menu Mobile fictício
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            alert('Menu mobile ativado com sucesso!');
        });
    }

    // Validação básica do formulário de Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Inscrição realizada com sucesso para o e-mail: ${emailInput.value}`);
                emailInput.value = '';
            }
        });
    }
});
