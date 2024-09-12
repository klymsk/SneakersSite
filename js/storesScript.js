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
    var map = document.getElementById('map');

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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3173.8673647144115!2d30.735570647517786!3d46.486364051553316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726162796507!5m2!1suk!2sua" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7070.203598883787!2d24.021861317650004!3d49.843564691608506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726157478997!5m2!1suk!2sua" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5080.206835452208!2d30.51435906115675!3d50.45779886435618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726162424280!5m2!1suk!2sua" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
    }

}

if (window.innerWidth <= 768) {
    var storeInfo = document.getElementById('storeInfo');
    var map = document.getElementById('map');

    map.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5080.206835452208!2d30.51435906115675!3d50.45779886435618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726162424280!5m2!1suk!2sua" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
`

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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3173.8673647144115!2d30.735570647517786!3d46.486364051553316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726162796507!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7070.203598883787!2d24.021861317650004!3d49.843564691608506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726157478997!5m2!1suk!2sua" width="200" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
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

        map.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5080.206835452208!2d30.51435906115675!3d50.45779886435618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1726162424280!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `
    }
}
