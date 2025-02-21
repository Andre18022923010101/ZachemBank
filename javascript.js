document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const canvas = document.querySelector('.Canvas');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const confirmBtn = document.querySelector('.confirm-btn');
    const openBtns = document.querySelectorAll('.my-button'); // Кнопки "Оформить"
    const modalTitle = document.getElementById('modal-title'); // Заголовок модалки
    const modalDescription = document.getElementById('modal-description'); // Описание модалки
    const modalImage = document.getElementById('modal-image'); // Картинка модалки
    const modalConditions = document.getElementById('modal-conditions'); // Условия модалки

    // Данные о картах
    const cardsInfo = {
        1: {
            title: "Зачем-Дебетовая карта",
            description: "Дебетовая карта для тех, кто не знает, зачем ему карта. Кешбэк — только на вопросы без ответов.",
            image: "credit.png", // Путь к картинке
            conditions: "• Обслуживание — бесплатно\n• Кешбэк — 5% на философские книги\n• Снятие наличных — без комиссии в люках и какнализации"
        },
        2: {
            title: "Космическая кредитка",
            description: "Кредитка для межгалактических покупок. Процентная ставка — Не не слышали у нас проценты равны колличеству куриц на земле.",
            image: "cadrKredit.png", // Путь к картинке
            conditions: "• Лимит — до 500 000₽\n• Процентная ставка — 23%\n• Кешбэк — 10% на космическое топливо"
        },
        3: {
            title: "Карта 404",
            description: "Твои деньги в безопасности как и стабильность нашего сайта",
            image: "errorCard.png", // Путь к картинке
            conditions: "• Процентная ставка — не существует\n• Снятие наличных — как повезет"
        }
    };

    // Функция для отображения контента
    function showContent(contentName) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => item.style.display = 'none');

        const targetItem = document.querySelector(`.item[data-content="${contentName}"]`);
        if (targetItem) {
            targetItem.style.display = 'block';
        }
    }

    // Показ дефолтного контента при загрузке
    showContent('home');

    // Обработка кликов по меню
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetContent = link.getAttribute('data-content');
            showContent(targetContent);
        });
    });

    // Открыть модальное окно при клике на "Оформить" и подставить инфо о карте
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardId = e.target.getAttribute('data-id'); // Получаем ID карты
            const info = cardsInfo[cardId]; // Берем данные о карте

            if (info) {
                modalTitle.textContent = info.title; // Устанавливаем заголовок
                modalDescription.textContent = info.description; // Устанавливаем описание
                modalImage.src = info.image; // Устанавливаем картинку
                modalConditions.textContent = info.conditions; // Устанавливаем условия
                modal.style.display = 'block'; // Показываем модалку
            }
        });
    });

    // Закрыть модалку по нажатию на крестик
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрыть модалку по нажатию на "Подтвердить"
    confirmBtn.addEventListener('click', () => {
        alert('Заявка отправлена!');
        modal.style.display = 'none';
    });

    // Закрыть модалку при клике вне неё
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
