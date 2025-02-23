document.addEventListener('DOMContentLoaded', function () {
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const saveButton = document.getElementById('saveAgenda');

    let currentDate = new Date();

    // Fonction pour générer le calendrier
    function generateCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        calendarGrid.innerHTML = '';

        // Ajouter des cases vides pour les jours précédents
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyDay);
        }

        // Ajouter les jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.setAttribute('data-date', `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);

            const dayNumber = document.createElement('div');
            dayNumber.classList.add('day-number');
            dayNumber.textContent = day;

            const events = document.createElement('div');
            events.classList.add('events');
            events.contentEditable = true;

            dayElement.appendChild(dayNumber);
            dayElement.appendChild(events);
            calendarGrid.appendChild(dayElement);
        }

        currentMonthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    // Initialiser le calendrier
    generateCalendar(currentDate);

    // Gestion des boutons précédent/suivant
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    // Sauvegarder l'agenda (simulation)
    saveButton.addEventListener('click', () => {
        alert('Agenda sauvegardé ! 🎉');
        // ajouter sauvegarde bdd
    });
});