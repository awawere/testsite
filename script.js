document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple alert when the page loads
    alert('Click 'Ok' si tu es la plus jolie!');

    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
