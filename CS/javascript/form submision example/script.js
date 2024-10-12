document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');

        // Simple validation
        if (!name || !email) {
            messageDiv.textContent = 'Please fill in all fields.';
            messageDiv.style.color = 'red';
            return;
        }

        // Process the form data (you can replace this with an API call)
        console.log('Form submitted:', { name, email });

        // Display a success message
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = 'green';

        // Optionally reset the form
        form.reset();
    });
});
// Add additional fields 