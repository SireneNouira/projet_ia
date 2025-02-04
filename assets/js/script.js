document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.createElement('select');
    themeSelect.innerHTML = `
        <option value="light">Thème Clair</option>
        <option value="dark">Thème Sombre</option>
        <option value="warm">Thème Chaud</option>
    `;
    document.body.appendChild(themeSelect);

    themeSelect.addEventListener('change', function() {
        document.body.className = `theme-${this.value}`;
    });
});