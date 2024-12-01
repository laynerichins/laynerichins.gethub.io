document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Display a success notification
        alert('Thank you for signing up!');
        // Optionally, you can reset the form
        document.getElementById('newsletterForm').reset();
    } else {
        // Display an error notification
        alert('Please enter a valid email address.');
    }
});