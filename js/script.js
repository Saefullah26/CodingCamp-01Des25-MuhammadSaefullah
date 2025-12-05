document.addEventListener('DOMContentLoaded', () => {
    // 1. Welcoming speech (Instruction 4)
    function setWelcomeMessage() {
        const defaultName = "Saefullah"; // Default name based on the mockup 'Hi Hartanto'
        let userName = localStorage.getItem('userName');
        
        // If the name hasn't been set, ask for it
        if (!userName) {
            // NOTE: Using prompt() is a simple way to get user input for this task.
            // In a real application, you'd use a dedicated input field.
            let inputName = prompt("Please enter your Name for the welcoming message:", defaultName);
            
            // Use the input name or the default name if the input is empty/cancelled
            userName = inputName || defaultName;
            localStorage.setItem('userName', userName);
        }
        
        const welcomeElement = document.getElementById('welcome-message');
        if (welcomeElement) {
            welcomeElement.textContent = `Hi ${userName}, Welcome to Website`;
        }
    }

    setWelcomeMessage();

    // 2. and 3. Validate Form & Show Value on Submit (Instruction 5)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission

            // --- JavaScript Validation (Instruction 5) ---
            const nameInput = document.getElementById('name');
            const birthDateInput = document.getElementById('birth-date');
            const messageInput = document.getElementById('message');
            const genderInput = document.querySelector('input[name="gender"]:checked');
            
            // Basic check for required fields (though HTML 'required' handles this too)
            if (!nameInput.value || !birthDateInput.value || !messageInput.value || !genderInput) {
                alert("Please fill out all required fields (Name, Tanggal Lahir, Gender, Pesan).");
                return; // Stop execution if validation fails
            }

            // --- Show Value when submit form on the HTML (Instruction 5) ---
            
            // Get current time
            const now = new Date();
            const timeOptions = { 
                weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
            };
            const currentTimeStr = now.toLocaleString('en-US', timeOptions);

            // Populate output elements
            document.getElementById('current-time').textContent = currentTimeStr;
            document.getElementById('out-name').textContent = nameInput.value;
            document.getElementById('out-birth-date').textContent = birthDateInput.value;
            document.getElementById('out-gender').textContent = genderInput.value;
            document.getElementById('out-message').textContent = messageInput.value;

            // Clear the form after successful submission/display
            contactForm.reset();
            alert("Your message has been successfully submitted and displayed below!");
        });
    }
});