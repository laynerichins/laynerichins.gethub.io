document.getElementById('numGuests').addEventListener('change', function() {
    const guestInfo = document.getElementById('guestInfo');
    guestInfo.innerHTML = '';
    const numGuests = parseInt(this.value);
    for (let i = 1; i <= numGuests; i++) {
        guestInfo.innerHTML += `
            <h3>Guest ${i}</h3>
            <div class="row gtr-50 gtr-uniform">
                <div class="col-6 col-12-mobilep">
                    <input type="text" name="guestFirstName${i}" placeholder="Guest ${i} First Name" />
                </div>
                <div class="col-6 col-12-mobilep">
                    <input type="text" name="guestLastName${i}" placeholder="Guest ${i} Last Name" />
                </div>
                <div class="col-12">
                    <input type="email" name="guestEmail${i}" placeholder="Guest ${i} Email (optional)" />
                </div>
                <div class="col-12">
                    <input type="tel" name="guestPhone${i}" placeholder="Guest ${i} Phone (optional)" />
                </div>
            </div>
        `;
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Registration submitted!');
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Display a success notification
    alert('Thank you for signing up!');
    // Optionally, you can reset the form
    document.getElementById('newsletterForm').reset();
});