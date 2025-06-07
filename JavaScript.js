const hamMenu = document.querySelector('.ham-menu');
hamMenu.addEventListener('click', () => {
    // On sélectionne tous les éléments que tu veux affecter avec la classe active
    document.querySelectorAll("nav, .menu, .ham-menu").forEach(element => {
        element.classList.toggle("active");
    });
});

document.querySelectorAll("a.menu").forEach(element => {
    element.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelectorAll("nav, .menu, .ham-menu").forEach(el => {
            el.classList.remove("active");
        });
         // Attend un peu (fermeture animée si besoin), puis redirige vers la page
         const link = this.getAttribute("href");
         setTimeout(() => {
             window.location.href = link;
         }, 200)
    })
})

// Ouvrir un modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêche le scroll du body
    }
}

// Fermer un modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactive le scroll du body
    }
}

// Fermer le modal en cliquant en dehors
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Fermer le modal avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            openModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Animation fluide pour le scroll dans les modals
document.addEventListener('DOMContentLoaded', function() {
    const modalContents = document.querySelectorAll('.modal-content');
    
    modalContents.forEach(content => {
        content.style.scrollBehavior = 'smooth';
    });
});

// Animation des éléments au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer les cartes de compétences
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                observer.observe(card);
            });
        });