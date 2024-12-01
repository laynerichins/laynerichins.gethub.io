document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Display a success notification
        alert('Your message has been sent successfully!');
        // Optionally, you can reset the form
        document.getElementById('contactForm').reset();
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        // Display an error notification
        alert('Please enter a valid email address.');
    }
});