// Filtrage par catégorie
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.goal-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Rafraîchir le message de motivation
document.getElementById('refresh-motivation').addEventListener('click', () => {
    const motivationText = document.getElementById('motivation-text');
    motivationText.textContent = 'Chargement...';
    // Ici, vous pouvez appeler une API pour un nouveau message de motivation
    setTimeout(() => {
        motivationText.textContent = '🚀 Vous êtes capable de grandes choses ! Continuez à avancer !';
    }, 1000); // Simule une requête API
});