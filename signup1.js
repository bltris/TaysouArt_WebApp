document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".signup-form");
    const signupBtn = document.querySelector(".signup-btn");
    const googleBtn = document.querySelector(".google-btn");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const username = form.querySelector('input[placeholder="Username"]').value.trim();
        const email = form.querySelector('input[placeholder="Email"]').value.trim();
        const password = form.querySelector('input[placeholder="Password"]').value.trim();
        const confirmPassword = form.querySelector('input[placeholder="Confirm password"]').value.trim();
        const phoneNumber = form.querySelector('input[placeholder="Phone number"]').value.trim();

        // Validate inputs
        if (!username || !email || !password || !confirmPassword || !phoneNumber) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert("Please enter a valid phone number (digits only).");
            return;
        }

        // Mock successful signup
        alert("Signup successful! Welcome, " + username);
        // Redirect or other actions could go here
    });


    // Helper function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^[0-9]{10,15}$/; // Adjust range for phone number length
        return phoneRegex.test(phoneNumber);
    }
});
