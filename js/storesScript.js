function cityMenu() {
    var menu = document.getElementById('cityMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    if (userLoggedIn) {
        document.getElementById("userNav").innerHTML = `
            <a href="profile.html" class="avaUserDiv">
                <img src="img/ava.png" class="avaUserImg">
            </a>
        `;
        console.log(localStorage.getItem('userLoggedIn'));
    }
    else {
        document.getElementById("userNav").innerHTML = `
            <a href="login.html" class="buttonNav">Увійти</a>
        `;
    }
});

function changeCity(cityName) {
    var storeInfo = document.getElementById('storeInfo');

    if (cityName === 'Odesa') {
        storeInfo.innerHTML = `
            <div class="address">
                <h1>м. Одеса</h1>
                <h2>вул. Кросівка 10</h2>
            </div>
            <div class="schedule">
                <h1>Графік роботи:</h1>
                <h2>Робочі: 09:00 - 23:00</h2>
                <h2>Вихідні: 10:00 - 22:00</h2>
            </div>
            <div class="phoneNumber">
                <h1>Телефон:</h1>
                <h2>(123)-456-87-09</h2>
            </div>
        `;
    } else if (cityName === 'Lviv') {
        storeInfo.innerHTML = `
            <div class="address">
                <h1>м. Львів</h1>
                <h2>вул. Головна 7</h2>
            </div>
            <div class="schedule">
                <h1>Графік роботи:</h1>
                <h2>Робочі: 10:00 - 21:00</h2>
                <h2>Вихідні: 11:00 - 19:00</h2>
            </div>
            <div class="phoneNumber">
                <h1>Телефон:</h1>
                <h2>(456)-789-01-23</h2>
            </div>
        `;
    } else if (cityName === 'Kyiv') {
        storeInfo.innerHTML = `
            <div class = "address">
                <h1>м. Київ</h1>
                <h2>вул. Найковська 7</h2>
            </div>
    
            <div class = "schedule">
                <h1>Графік роботи:</h1>
                <h2>Робочі:  09:00 - 22:00</h2>
                <h2>Вихідні:  10:00 - 21:00</h2>
            </div>
                
            <div class = "phoneNumber">
                <h1>Телефон:</h1>
                <h2>(123)-456-78-90</h2>
            </div>
        `;
    }

}
