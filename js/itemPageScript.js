const items = document.querySelectorAll('.itemDiv');

        items.forEach(item => {
        item.addEventListener('click', (event) => {
        event.preventDefault();
        const itemName = item.getAttribute('data-name');
        document.title = itemName;
    });
});

        function updateTabTitle() {
            var modelName = document.getElementById('itemModel').innerText;
            document.title = modelName;
        }

        window.onload = updateTabTitle;

        document.getElementById('toggle-chart').addEventListener('click', function() {
    const chart = document.getElementById('size-chart');
    if (chart.style.display === 'none' || chart.style.display === '') {
        chart.style.display = 'table';
        this.textContent = 'Сховати';
    } else {
        chart.style.display = 'none';
        this.textContent = 'Показати';
    }
});


function sendComment() {
    const inputComment = document.getElementById("inputComment");
    const userComment = inputComment.ariaValueMax.trim();

    if (userComment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = "<p>${userComment}</p>";

        commentsSection.appendChild(commentDiv);

        commentInput.value = '';
    }
}

/*// script.js
function sendComment() {
    const commentInput = document.getElementById('inputComment');
    const commentsSection = document.getElementById('commentsSection');
    const userComment = commentInput.value.trim(); // Отримати текст з поля вводу

    if (userComment) {
        // Створити новий HTML-елемент для коментаря
        const commentDiv = document.createElement('div');
        commentDiv.className = 'commentDiv'; // Додати клас для стилізації
        commentDiv.innerHTML = `
            <div class="userAvaNName">
                <a href="#" class="userAva">
                    <img src="img/circle.png" class="userAvaImg">
                </a>
                <h1 class="userNickName">Name Name</h1>
            </div>
            <p>${userComment}</p>
        `; // Вставити коментар

        // Додати новий коментар до секції коментарів
        commentsSection.appendChild(commentDiv);

        // Очистити поле вводу після надсилання
        commentInput.value = '';
    } else {
        alert('Будь ласка, введіть коментар.');
    }
}
*/