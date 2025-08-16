document.getElementById("copyright").innerText = "2025"; // Copyright year. Used to easily change the copyright year across all pages at once.

const button = document.querySelector('.dropdown_button'); // Declares a variable for all elements with the "dropdown_button" class.
const menu = document.querySelector('.navbar_menu'); // Declares a variable for all elements with the "navbar_menu" class.

button.addEventListener('click', (e) => { // Waits for the user to press the menu button.
    e.stopPropagation(); // Ensures the following code is only applied where it should be applied and not propagated any further.
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // Changes the "display" value of the navigation menu from "block" (visible) to "none" (hidden) and vice versa per button press.
});

document.addEventListener('click', () => { // Waits for the user to press anything other than the menu button.
    menu.style.display = 'none'; // Changes the "display" value of the navigation menu to "none" (hidden) once the event listener is triggered.
});

function copyText(text) { // Creates a function called "copyText" and links it to whatever value is within the brackets ("text").
    navigator.clipboard.writeText(text); // Copies whatever is "text" to the user's clipboard.
} // Outdated, I know, but if it ain't broken, don't fix it.