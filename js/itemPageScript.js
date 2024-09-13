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
    const userComment = inputComment.value.trim();

    if (userComment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "commentDiv";
        commentDiv.innerHTML = `
            <div class="userAvaNName">
                <a href="#" class="userAva">
                    <img src="img/circle.png" class="userAvaImg">
                </a>
                <h1 class="userNickName">Name Name</h1>
            </div>
            <p>${userComment}</p>
        `;

        const commentsSection = document.querySelector(".userComment");
        commentsSection.appendChild(commentDiv);

        inputComment.value = '';
    }
}

const mobileNav = document.getElementById("nav");
const buttons = document.getElementById("buttons");

if (window.innerWidth <= 768) {
    mobileNav.innerHTML = `
            <a href = "itemPage.html#descriptionTag" class = "buttonNav">Опис</a>
            <a href = "itemPage.html#characTag" class = "buttonNav">Характеристики</a>
            <a href = "itemPage.html#sizesTag" class = "buttonNav">Розміри</a>
            <a href = "itemPage.html#commentsTag" class = "buttonNav">Відгуки</a>
            <a href = "profile.html" class = "avaUserDiv">
                <img src = "img/ava.png" class = "avaUserImg">
            </a>
        `;

    buttons.innerHTML = `
            <button class = "aditionalButton">
                <img src = "img/shopping_basket.ico" class = "addButImg">
            </button>
            <a href = "orderItem.html">
                <button class = "buyButton">ЗАМОВИТИ</button>
            </a>
            <button class = "aditionalButton">
                <img src = "img/fav_list.ico" class = "addButImg"
            </button>
        `;
}

