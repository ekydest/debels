// Add event listener to portfolio items
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Add active class to clicked item
            item.classList.toggle("active");
        });
    });
});

// Add event listener to contact form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact form");

    contactForm.addEventListener("submit", (e) => {
        // Prevent default form submission
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Send form data to server (replace with your server-side code)
        fetch("/submit-form", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    });
});