document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const canvas = document.querySelector('.Canvas');

    // Дефолтный контент, который будет показываться при первой загрузке
    const defaultContent = 'home'; // Укажи значение, которое ты хочешь сделать дефолтным

    // Функция для отображения контента
    function showContent(contentName) {
        const items = document.querySelectorAll('.item');
        const targetItem = document.querySelector(`.item[data-content="${contentName}"]`);

        // Скрываем все элементы
        items.forEach(item => item.style.display = 'none');

        // Показываем выбранный элемент
        if (targetItem) {
            targetItem.style.display = 'block';
        }
    }

    // При загрузке страницы показываем дефолтный контент
    showContent(defaultContent);

    // Обработка кликов на ссылки
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetContent = link.getAttribute('data-content');
            showContent(targetContent); // Показываем выбранный контент
        });
    });
});
