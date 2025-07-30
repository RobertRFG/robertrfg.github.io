document.getElementById("copyright").innerText = "2025";

const button = document.querySelector('.dropdown_button');
const menu = document.querySelector('.navbar_menu');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
    menu.style.display = 'none';
});