function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    });
    updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleTheme() {
    const themeSelect = document.getElementById('theme-select');
    const selectedTheme = themeSelect.value;
    document.body.className = `${selectedTheme}-theme`;
    localStorage.setItem('theme', selectedTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = `${savedTheme}-theme`;
    document.getElementById('theme-select').value = savedTheme;
}

document.addEventListener('DOMContentLoaded', loadTheme);





// Notification

// Функция для показа уведомления
function showNotification(title, text, type) {
    const notification = document.querySelector('.notification');
    const titleElement = notification.querySelector('.notification__title');
    const textElement = notification.querySelector('.notification__text');

    titleElement.textContent = title;
    textElement.textContent = text;
    notification.className = `notification notification--${type}`;

    notification.style.display = 'block'; // Показываем уведомление

    // Закрываем уведомление через некоторое время
    setTimeout(() => {
        notification.style.display = 'none'; // Прячем уведомление через некоторое время
    }, 5000); // 5000 миллисекунд = 5 секунд
}

// Логика для генерации уведомлений
const messageTitle = ['notification'];
const messageText = [
    'Продажа — это история о выгоде, которую получает клиент. Сравнение может выделить особенности, которые вы хотите подчеркнуть, но продаете вы все же выгоду.',
    'Иногда клиенты бросают вызов логике, но они всегда правы.',
    'Вы можете продать выгоду, прежде чем появится сам продукт. Когда продукт будет готов, клиенты уже будут его ждать.',
    'Предоставьте клиентам место, где они смогут говорить о продукте',
    'Поощряйте лояльность и интерес',
    'Когда контент-маркетинг сделан правильно, ваш бизнес появится на "радаре" ваших клиентов, когда они осознают свою потребность и станут искать информацию о том, как ее удовлетворить.',
    'От SEO никуда не деться.',
];

function generateMessage() {
    const title = messageTitle[0]; // В данном случае у нас всего один заголовок
    const text = messageText[Math.floor(Math.random() * messageText.length)]; // Выбираем случайный текст

    showNotification(title, text, 'danger'); // Показываем уведомление с красным фоном (danger)
}

// Вызываем функцию генерации уведомления сразу для первого показа
generateMessage();

// Устанавливаем интервал для вызова функции генерации уведомления каждые 15 минут (в миллисекундах)
setInterval(generateMessage, 15 * 60 * 1000); // 15 минут * 60 секунд * 1000 миллисекунд





// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const themeSelect = document.getElementById('theme-select');
    const theme = themeSelect.value;

    if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}
