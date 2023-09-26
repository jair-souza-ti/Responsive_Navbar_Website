// Uma classe para gerenciar o menu de navegação móvel
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        // Seleciona os elementos do DOM com base nas classes passadas como argumento
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        
        // Classe CSS para indicar que o menu está ativo
        this.activeClass = "active";

        // Vincula a função `handleClick` ao contexto atual da classe
        this.handleClick = this.handleClick.bind(this);
    }

    // Anima os links de navegação quando o menu é ativado
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    // Manipula o clique no menu de navegação móvel
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    // Adiciona um evento de clique para o menu móvel
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // Inicializa a funcionalidade do menu de navegação móvel
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Cria uma instância da classe `MobileNavbar` com seletores de elementos do DOM
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

// Inicializa o menu de navegação móvel
mobileNavbar.init();