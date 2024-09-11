// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add click event listener
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the active class to the clicked link
        this.classList.add('active');
    });
});
