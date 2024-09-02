function toggleEdit() {
    const editButton = document.getElementById('editButton');

 
    const elements = ['name', 'surname', 'dob', 'city', 'phone', 'email'];
    elements.forEach(el => {
        const p = document.getElementById(el);
        const input = document.getElementById(el + 'Input');
        
        if (input.style.display === 'none') {

            p.style.display = 'none';
            input.style.display = 'block';
            editButton.textContent = 'Зберегти';
        } else {

            p.textContent = input.value;
            p.style.display = 'block';
            input.style.display = 'none';
            editButton.textContent = 'Редагувати';
        }
    });
}

document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('userLoggedIn'); 
        window.location.href = "main.html"; 
    });