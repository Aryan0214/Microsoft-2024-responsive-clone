// Hamburger Menu

const myBtn= document.querySelector('#menu-btn');
const nav= document.querySelector('#menu')
const text= document.querySelector('.collapsed-text');
function navToggle(){
    myBtn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}


myBtn.addEventListener('click', navToggle);
