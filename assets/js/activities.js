// Filtrage par thème
document.querySelectorAll('.theme-btn').forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.activity-card').forEach(card => {
            if (theme === 'all' || card.getAttribute('data-theme') === theme) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Rafraîchir la suggestion du jour
document.getElementById('refresh-suggestion').addEventListener('click', () => {
    const suggestionText = document.getElementById('suggestion-text');
    suggestionText.textContent = 'Chargement...';
    // Ici, vous pouvez appeler votre API IA pour une nouvelle suggestion
    setTimeout(() => {
        suggestionText.textContent = '🎉 Nouvelle suggestion : Faire une promenade en forêt !';
    }, 1000); // Simule une requête API
});