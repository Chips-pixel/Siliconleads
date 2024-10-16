// script.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate the form data
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission (you can replace this with an actual API call)
        console.log('Form submitted:', { name, email, message });

        // Clear the form fields after submission
        form.reset();
        alert('Thank you for your message! We will get back to you soon.');
    });
});
