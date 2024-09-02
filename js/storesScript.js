function cityMenu() {
    var menu = document.getElementById('cityMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function changeCityOdesa() {
    var storeInfo = document.getElementById('storeInfo');

    document.getElementById("storeInfo").innerHTML = `
            <div class = "address">
                <h1>м. Одеса</h1>
                <h2>вул. Кросівка 10</h2>
            </div>
    
            <div class = "schedule">
                <h1>Графік роботи:</h1>
                <h2>Робочі:  09:00 - 23:00</h2>
                <h2>Вихідні:  10:00 - 22:00</h2>
            </div>
                
            <div class = "phoneNumber">
                <h1>Телефон:</h1>
                <h2>(123)-456-87-09</h2>
            </div>
    `;

}
