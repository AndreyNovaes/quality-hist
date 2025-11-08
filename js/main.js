/**
 * A Jornada da Qualidade - JavaScript Principal
 * Adiciona interatividade e melhorias de UX ao site
 */

// ========================================
// Smooth Scroll para Âncoras
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignora se for apenas '#'
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Animação de Fade In ao Rolar
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa cards, seções de conteúdo e itens de timeline
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.card, .content-section, .timeline-event, .pioneer-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ========================================
// Menu Mobile Responsivo
// ========================================
function createMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const navContainer = document.querySelector('.nav-container');

    if (!nav || !navContainer) return;

    // Cria botão de menu hamburger
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.setAttribute('aria-label', 'Menu');
    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Adiciona estilos CSS inline para o botão (fallback se CSS não carregar)
    menuButton.style.display = 'none';
    menuButton.style.flexDirection = 'column';
    menuButton.style.gap = '4px';
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.cursor = 'pointer';
    menuButton.style.padding = '8px';

    menuButton.querySelectorAll('span').forEach(span => {
        span.style.width = '25px';
        span.style.height = '3px';
        span.style.backgroundColor = 'white';
        span.style.transition = 'all 0.3s ease';
        span.style.borderRadius = '2px';
    });

    // Toggle menu
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
        menuButton.classList.toggle('active');
    });

    // Fecha menu ao clicar em link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mobile-open');
            menuButton.classList.remove('active');
        });
    });

    navContainer.insertBefore(menuButton, nav);

    // Media query para mostrar botão em mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleMobileMenu(e) {
        if (e.matches) {
            menuButton.style.display = 'flex';
            nav.style.position = 'fixed';
            nav.style.top = '60px';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.backgroundColor = 'var(--dark-gray)';
            nav.style.padding = '1rem';
            nav.style.transform = 'translateX(-100%)';
            nav.style.transition = 'transform 0.3s ease';
            nav.style.zIndex = '999';
        } else {
            menuButton.style.display = 'none';
            nav.style.position = 'static';
            nav.style.transform = 'none';
            nav.classList.remove('mobile-open');
        }
    }

    mediaQuery.addListener(handleMobileMenu);
    handleMobileMenu(mediaQuery);
}

// ========================================
// Carousel de Pioneiros
// ========================================
function initPioneersCarousel() {
    const carousel = document.querySelector('.pioneers-carousel');
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch support para mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (touchStartX - x) * 1.5;
        carousel.scrollLeft = touchScrollLeft + walk;
    });
}

// ========================================
// Destaque de Navegação Ativa
// ========================================
function highlightActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentPath === linkPath ||
            (currentPath.includes('/pages/') && linkPath.includes(currentPath.split('/').pop()))) {
            link.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
            link.style.color = 'var(--gold)';
        }
    });
}

// ========================================
// Back to Top Button
// ========================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Voltar ao topo');

    // Estilos
    button.style.position = 'fixed';
    button.style.bottom = '2rem';
    button.style.right = '2rem';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'var(--gold)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.fontSize = '1.5rem';
    button.style.cursor = 'pointer';
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
    button.style.transition = 'all 0.3s ease';
    button.style.zIndex = '1000';
    button.style.boxShadow = 'var(--shadow-lg)';

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mostra/esconde baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.backgroundColor = 'var(--accent-bronze)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = 'var(--gold)';
    });

    document.body.appendChild(button);
}

// ========================================
// Lazy Loading de Imagens
// ========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Animação de Números (Contador)
// ========================================
function animateNumbers() {
    const numbers = document.querySelectorAll('[data-count]');

    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.dataset.count);
                const duration = 2000; // 2 segundos
                const steps = 60;
                const increment = finalNumber / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        target.textContent = finalNumber;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current);
                    }
                }, duration / steps);

                numberObserver.unobserve(target);
            }
        });
    });

    numbers.forEach(num => numberObserver.observe(num));
}

// ========================================
// Tooltip Simples
// ========================================
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltipText = element.dataset.tooltip;
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'var(--dark-gray)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '0.5rem 1rem';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '0.9rem';
            tooltip.style.zIndex = '10000';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.boxShadow = 'var(--shadow-md)';

            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)) + 'px';

            element._tooltip = tooltip;
        });

        element.addEventListener('mouseleave', () => {
            if (element._tooltip) {
                element._tooltip.remove();
                element._tooltip = null;
            }
        });
    });
}

// ========================================
// Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todas as funcionalidades
    createMobileMenu();
    initPioneersCarousel();
    highlightActiveNavigation();
    createBackToTopButton();
    initLazyLoading();
    animateNumbers();
    initTooltips();

    // Log de boas-vindas para desenvolvedores curiosos
    console.log('%c🏛️ A Jornada da Qualidade', 'font-size: 24px; color: #d4af37; font-weight: bold;');
    console.log('%cDe Hamurabi aos algoritmos de IA — 4.000 anos de história da qualidade.', 'font-size: 14px; color: #3b82f6;');
    console.log('%cCriado com ❤️ para educação e preservação histórica.', 'font-size: 12px; color: #6b7280;');
});

// ========================================
// Performance: Registra tempo de carregamento
// ========================================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);

    // Opcional: enviar analytics (desabilitado por padrão)
    // sendAnalytics('page_load_time', loadTime);
});

// ========================================
// Acessibilidade: Atalhos de Teclado
// ========================================
document.addEventListener('keydown', (e) => {
    // Alt + H = Home
    if (e.altKey && e.key === 'h') {
        window.location.href = '/index.html';
    }

    // Alt + T = Timeline
    if (e.altKey && e.key === 't') {
        window.location.href = '/pages/timeline.html';
    }

    // Esc = Fecha menu mobile se estiver aberto
    if (e.key === 'Escape') {
        const nav = document.querySelector('.main-nav');
        if (nav && nav.classList.contains('mobile-open')) {
            nav.classList.remove('mobile-open');
            document.querySelector('.mobile-menu-button')?.classList.remove('active');
        }
    }
});

// CSS adicional via JavaScript para mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-open {
        transform: translateX(0) !important;
    }

    .mobile-menu-button.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-button.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-button.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .pioneers-carousel {
        cursor: grab;
        user-select: none;
    }

    .pioneers-carousel:active {
        cursor: grabbing;
    }
`;
document.head.appendChild(style);
