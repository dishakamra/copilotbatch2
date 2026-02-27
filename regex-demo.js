// Create a function that validates email addresses using regex.
// It should support subdomains and common TLDs.
// Return true if valid, false otherwise.
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Generate a regex for a strong password:
// Minimum 8 characters
// At least one uppercase letter
// One lowercase letter
// One number
// One special character
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Validate date format (YYYY-MM-DD)
// Return true if valid format, false otherwise
function validateDateFormat(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
}

const isValid = validateDateFormat(input);


// Create a utility function that converts a string into a URL-friendly slug.
// Remove special characters, lowercase it, and replace spaces with hyphens.
function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

// Create a utility function that masks credit card numbers in logs.
// Show only the last 4 digits.
function maskCreditCard(cardNumber) {
    return cardNumber.replace(/\d(?=\d{4})/g, '*');
}

// Create a utility that removes HTML tags from user input to prevent XSS attacks.
function sanitizeInput(input) {
    return input.replace(/<[^>]*>?/gm, '');
}