<script>
// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// Form Validation for Appointment Booking
document.querySelector('.appointment form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const date = this.querySelector('input[type="date"]').value;

    // Check for empty fields
    if (!name || !email || !phone || !date) {
        alert('Please fill in all required fields.'); // Alert user
        e.preventDefault(); // Prevent form submission
    } else {
        alert('Appointment booked successfully!'); // Success message
    }
});
</script>

