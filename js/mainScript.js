document.addEventListener('DOMContentLoaded', function() {
    const sizeCheckboxes = document.querySelectorAll('.filterDiv input[type="checkbox"]');
    const items = document.querySelectorAll('.itemDiv');

sizeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedSizes = Array.from(sizeCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        items.forEach(item => {
            const itemSizes = item.getAttribute('data-sizes') ? item.getAttribute('data-sizes').split(',').map(size => size.trim()) : [];

            if (selectedSizes.length === 0 || selectedSizes.some(size => itemSizes.includes(size))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
    function filterItems() {
        const selectedBrands = Array.from(document.querySelectorAll('.listFilter input[type="checkbox"]:checked'))
                                   .map(cb => cb.value);
        
        const items = document.querySelectorAll('.catalogDiv .itemDiv');
        
        items.forEach(item => {
            const itemBrand = item.getAttribute('data-brand');
            
            if (selectedBrands.length > 0) {
                if (selectedBrands.includes(itemBrand)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            } else {
                item.style.display = 'block'; 
            }
        });
    }


    document.querySelectorAll('.listFilter input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterItems);
    });
    
    filterItems();
});

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

const menuIcon = document.getElementById("menuIcon");
const filterMenu = document.getElementById("filterMenu");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");

menuIcon.addEventListener("click", function () {
    filterMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("active");
});

menuIcon.addEventListener("touchstart", function () {
    preventDefault();
    filterMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("active");
});

overlay.addEventListener("click", function () {
    filterMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active")
});

overlay.addEventListener("touchstart", function () {
    preventDefault();
    filterMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active")
});


