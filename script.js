// Données fictives pour les projets
const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "Une interface d'administration complète pour gérer les ventes, les stocks et les utilisateurs avec des graphiques interactifs.",
        image: "https://placehold.co/600x400/2563eb/ffffff?text=Dashboard",
        github: "#",
        demo: "#"
    },
    {
        title: "Application Météo",
        description: "Une application web progressive (PWA) fournissant des prévisions météorologiques en temps réel basées sur la géolocalisation.",
        image: "https://placehold.co/600x400/1e40af/ffffff?text=Weather+App",
        github: "#",
        demo: "#"
    },
    {
        title: "Gestionnaire de Tâches",
        description: "Outil de productivité permettant de créer, organiser et prioriser les tâches quotidiennes avec mode sombre.",
        image: "https://placehold.co/600x400/1f2937/ffffff?text=Task+Manager",
        github: "#",
        demo: "#"
    },
    {
        title: "Site Vitrine Restaurant",
        description: "Site web responsive pour un restaurant gastronomique incluant réservation de table et menu en ligne.",
        image: "https://placehold.co/600x400/4b5563/ffffff?text=Restaurant",
        github: "#",
        demo: "#"
    },
    {
        title: "Chat en Temps Réel",
        description: "Application de messagerie instantanée utilisant les WebSockets pour des communications rapides et sécurisées.",
        image: "https://placehold.co/600x400/374151/ffffff?text=Chat+App",
        github: "#",
        demo: "#"
    },
    {
        title: "Portfolio Photographe",
        description: "Galerie photo immersive avec chargement paresseux (lazy loading) et transitions fluides.",
        image: "https://placehold.co/600x400/6b7280/ffffff?text=Photo+Gallery",
        github: "#",
        demo: "#"
    }
];

// Fonction pour charger les projets dans le DOM
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    // Vider le conteneur par sécurité
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}"><i class="fab fa-github"></i> Code</a>
                    <a href="${project.demo}"><i class="fas fa-external-link-alt"></i> Démo</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Gestion du formulaire de contact
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Formulaire soumis :', { name, email, message });
        
        alert(`Merci ${name} ! Votre message a été envoyé (simulation).`);
        form.reset();
    });
}

// Smooth Scrolling pour les ancres de navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    handleContactForm();
    initSmoothScrolling();
});
