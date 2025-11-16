document.addEventListener('DOMContentLoaded', () => {
    const themeStyle = document.getElementById('theme-style');
    const themeToggle = document.getElementById('theme-toggle');

    // Nomes dos temas
    const LIGHT_THEME = 'style.css'; 
    const DARK_THEME = 'dark.css';
    const STORAGE_KEY = 'siteTheme';

    // 1. Função para aplicar e salvar o tema
    function applyTheme(themeName) {
        if (themeStyle) {
            themeStyle.setAttribute('href', themeName);
            localStorage.setItem(STORAGE_KEY, themeName);
        }
    }

    // Pega o tema salvo ou usa o padrão claro
    const savedTheme = localStorage.getItem(STORAGE_KEY) || LIGHT_THEME;
    applyTheme(savedTheme);

    // 2. Adiciona o evento de alternância ao botão
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = themeStyle.getAttribute('href');

            if (currentTheme === LIGHT_THEME) {
                applyTheme(DARK_THEME);
            } else {
                applyTheme(LIGHT_THEME);
            }
        });
    }
});