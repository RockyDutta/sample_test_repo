// 1. Select the form and the feedback paragraph
const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedbackMessage');

// Check if elements exist to prevent errors
if (!form || !feedback) {
    console.error('Required elements (contactForm or feedbackMessage) not found in the DOM.');
} else {

 // 2. Add an event listener to detect when the form is submitted
    form.addEventListener('submit', function(event) {
        
        // PREVENT the page from reloading (Crucial for Single Page feel)
        event.preventDefault();

 // 3. Simple Validation (Optional, since we used 'required' in HTML)
        // You can get values like this:
        const name = document.getElementById('name').value.trim(); // Trim whitespace
        
// 4. Simulate sending data (Display success message)
        // Use a generic message if name is empty
        const displayName = name ? name : 'there';
        feedback.textContent = `Thanks, ${displayName}! Your message has been sent.`;
        
        // Change text color to green
        feedback.style.color = "#28a745";

 // 5. Clear the form fields
        form.reset();

        // Optional: Remove the message after 3 seconds and reset color
        setTimeout(() => {
            feedback.textContent = "";
            feedback.style.color = ""; // Reset color to default
        }, 3000);
    });
}