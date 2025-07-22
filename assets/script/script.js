function adjustForFooter() {
    if (window.innerWidth <= 768) {
        const footer = document.querySelector('footer');
        const navbar = document.querySelector('.navbar');
        
        if (footer && navbar) {
            const footerHeight = footer.offsetHeight;
            const navbarHeight = navbar.offsetHeight;
            
            const requiredSpace = navbarHeight + 20; // 20px di margine
            
            document.body.style.paddingBottom = requiredSpace + 'px';
            
            window.addEventListener('resize', adjustForFooter);
        }
    }
}

document.addEventListener('DOMContentLoaded', adjustForFooter);
window.addEventListener('load', adjustForFooter);

document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    }); 
});