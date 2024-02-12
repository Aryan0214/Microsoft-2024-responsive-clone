const msMenuBtn= document.querySelector('.Ms-menu-toggle');
const msMenuBtnDiv= document.querySelector('.ms-all-links');
const msMenu= document.querySelector('.ms-menu');
function menuToggle(){
    msMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
}

msMenuBtn.addEventListener('click', menuToggle);

// Hamburger Menu

const myBtn= document.querySelector('#menu-btn');
const nav= document.querySelector('#menu')
function navToggle(){
    myBtn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}


myBtn.addEventListener('click', navToggle);

// // Features toggle

// const featuresBtn= document.getElementById('features-btn');
// const chevron= document.getElementById('toggling');

// function featuresToggle(){
//     chevron.classList.toggle('collapsed');
// }

// featuresBtn.addEventListener('click', featuresToggle);