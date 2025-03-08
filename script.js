// script.js
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Desativar Modo Escuro';
    } else {
        darkModeButton.textContent = 'Ativar Modo Escuro';
    }
});