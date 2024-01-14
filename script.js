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
}


myBtn.addEventListener('click', navToggle);