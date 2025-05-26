document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const enterButton = document.getElementById('enter-button');
    const passwordScreen = document.getElementById('password-screen');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');

    const correctPassword = "skyandpoetry"; // ඔබේ මුරපදය

    enterButton.addEventListener('click', () => {
        if (passwordInput.value.toLowerCase() === correctPassword) {
            passwordScreen.style.opacity = 0; // Fade out the password screen
            setTimeout(() => {
                passwordScreen.classList.add('hidden'); // Hide after fade
                mainContent.classList.remove('hidden'); // Show main content
                // Smooth scroll to top of main content if needed
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500); // Duration of the fade out
        } else {
            errorMessage.textContent = "වැරදි මුරපදයකි. නැවත උත්සාහ කරන්න.";
            passwordInput.classList.add('shake'); // Add shake animation
            setTimeout(() => {
                passwordInput.classList.remove('shake');
            }, 500); // Remove shake after animation
        }
    });

    // Allow pressing Enter key for password submission
    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            enterButton.click();
        }
    });

    // Optional: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});