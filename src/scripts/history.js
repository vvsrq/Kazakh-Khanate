// main.js

// Функция для загрузки данных из текстового файла
async function loadDescription(fileName) {
    try {
        const response = await fetch(`/Kazakh-Khanate/src/texts/${fileName}.txt`);
        if (!response.ok) {
            throw new Error('Не удалось загрузить файл');
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Ошибка при загрузке описания:", error);
        return "Описание не доступно.";
    }
}

// Функция для загрузки и отображения историй на главной странице
async function loadHistoryCards() {
    const section = document.querySelector('.history-section');
    for (const data of historyData) {
        // Загрузка описания из файла
        const description = await loadDescription(data.fileName);

        const card = document.createElement('div');
        card.classList.add('history-card');
        card.onclick = () => showHistoryInfo(data.title, description, data.image);

        card.innerHTML = `
            <h2>${data.title} (${data.period})</h2>
            <p>${description.substring(0, 50)}...</p>
        `;
        section.appendChild(card);
    }
}

// Функция для отображения подробной информации в модальном окне
function showHistoryInfo(title, description, mapImage) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = description;
    document.getElementById('modalMap').style.backgroundImage = `url(${mapImage})`;
    document.getElementById('historyModal').style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('historyModal').style.display = "none";
}

// Закрытие модального окна при клике на фон
window.onclick = function(event) {
    if (event.target == document.getElementById('historyModal')) {
        closeModal();
    }
}

// Запуск загрузки карточек после загрузки страницы
document.addEventListener('DOMContentLoaded', loadHistoryCards);
