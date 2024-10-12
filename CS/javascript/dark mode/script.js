const button = document.getElementById('toggle-button');
let isDarkMode = false;

button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    button.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
