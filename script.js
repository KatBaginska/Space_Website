function myFunction() {
    window.location.href = "CheckMore.html";
}

function homePage() {
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

// Check if dark mode is enabled
    const isDarkMode = () => body.classList.contains('dark');

// Set dark mode based on user preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
    }

// Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
