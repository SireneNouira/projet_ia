
// theme
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


// script.js

// Fonction pour envoyer un message dans le chat
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    if (chatInput.value.trim() !== "") {
        const message = document.createElement('div');
        message.textContent = chatInput.value;
        chatBox.appendChild(message);
        chatInput.value = '';
        // Ici, vous pouvez ajouter la logique pour envoyer le message à l'IA
    }
}

// Fonction pour sauvegarder les notes
function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('userNotes', notes);
    alert('Notes sauvegardées!');
}

// Fonction pour charger les notes sauvegardées
function loadNotes() {
    const notes = localStorage.getItem('userNotes');
    if (notes) {
        document.getElementById('notes').value = notes;
    }
}

// Fonction pour ajouter une nouvelle activité
function addTask() {
    const newTask = document.getElementById('new-task').value;
    if (newTask.trim() !== "") {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.textContent = newTask;
        taskList.appendChild(taskItem);
        document.getElementById('new-task').value = '';
    }
}

// Fonction pour ajouter un nouvel objectif
function addGoal() {
    const newGoal = document.getElementById('new-goal').value;
    if (newGoal.trim() !== "") {
        const goalsList = document.getElementById('goals-list');
        const goalItem = document.createElement('li');
        goalItem.textContent = newGoal;
        goalsList.appendChild(goalItem);
        document.getElementById('new-goal').value = '';
    }
}

// Charger les notes au chargement de la page
window.onload = loadNotes;


// script.js

// Fonction pour envoyer un message à l'IA psychologue
function sendPsyMessage() {
    const chatInput = document.getElementById('psy-chat-input');
    const chatBox = document.getElementById('psy-chat-box');
    const userMessage = chatInput.value.trim();

    if (userMessage !== "") {
        // Ajouter le message de l'utilisateur
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.innerHTML = `<p>${userMessage}</p>`;
        chatBox.appendChild(userMessageElement);

        // Réponse de l'IA (simulée)
        setTimeout(() => {
            const iaMessageElement = document.createElement('div');
            iaMessageElement.classList.add('message', 'ia-message');
            iaMessageElement.innerHTML = `<p>${getIAResponse(userMessage)}</p>`;
            chatBox.appendChild(iaMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Faire défiler vers le bas
        }, 1000);

        // Effacer l'input
        chatInput.value = '';
    }
}

// Fonction pour générer une réponse de l'IA (simulée)
function getIAResponse(userMessage) {
    const responses = [
        "Je comprends. Pouvez-vous en dire plus ?",
        "Comment cela vous fait-il ressentir ?",
        "C'est intéressant. Pourquoi pensez-vous cela ?",
        "Je suis là pour vous. Continuez, je vous écoute.",
        "Avez-vous déjà envisagé cette situation sous un autre angle ?",
        "Prenez votre temps. Parlez-moi davantage de ce que vous ressentez.",
        "C'est une situation difficile. Comment puis-je vous aider à avancer ?",
    ];

    // Réponse aléatoire pour l'exemple
    return responses[Math.floor(Math.random() * responses.length)];
}