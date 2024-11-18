document.querySelector('.discover-button').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    document.querySelector('.main-sections').scrollIntoView({ behavior: 'smooth' });
});