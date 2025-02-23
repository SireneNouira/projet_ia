// Animation pour les cartes de notes
document.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Confirmation avant suppression
document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', (e) => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
            e.preventDefault();
        }
    });
});