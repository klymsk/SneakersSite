function checkUser(el) {
    event.preventDefault();

    var login = document.getElementById("loginUser").value;
    var password = document.getElementById("passwordUser").value;

    var saveLogin = "user1234";
    var savePassword = "12345";

    if (login === saveLogin && password === savePassword) {
        localStorage.setItem('userLoggedIn', 'true');
        console.log("Ви увійшли в акаунт");
        alert("Ви успішно увійшли в акаунт!");
        window.location.href = "main.html";
    } else {
        console.log("Неправильні дані користувача");
        alert("Логін або пароль неправильні. Спробуйте ще раз.");
    }
}