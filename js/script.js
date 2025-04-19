document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            console.log('Hamburger clicked');
            navLinks.classList.toggle('show');
        });
    } else {
        console.warn("Hamburger menu or nav-links not found in DOM.");
    }

    // EmailJS contact form handling
    const contactForm = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status_message");

    if (contactForm && statusMessage) {
        emailjs.init("kBoaEvGCIeVQAbKBj");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_gmf6io9", "template_y8ccjlr", contactForm)
                .then(function () {
                    statusMessage.style.color = "green";
                    statusMessage.innerText = "Your message has been sent successfully!";
                }, function (error) {
                    console.error("Failed to send message:", error);
                    statusMessage.style.color = "red";
                    statusMessage.innerText = "Failed to send message. Please try again later.";
                });
        });
    }

    // Category filtering logic
    const filterButtons = document.querySelectorAll(".filter");
    const categories = document.querySelectorAll(".category");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Toggle button styles
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Toggle category visibility
            categories.forEach(cat => {
                if (cat.classList.contains(category)) {
                    cat.classList.add("active");
                } else {
                    cat.classList.remove("active");
                }
            });
        });
    });
});
