document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animazione al caricamento
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    }); 
});