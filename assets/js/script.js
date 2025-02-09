document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
        themeSelect.value = savedTheme; 
    }

    themeSelect.addEventListener('change', function() {
        document.body.className = `theme-${this.value}`;

        localStorage.setItem('theme', this.value);
    });
});
