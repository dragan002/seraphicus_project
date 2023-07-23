const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        burger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
       

        showMenu = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        
        showMenu = false;
    }
}





document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const hiddenPost1 = document.getElementById('hiddenPost1');
    const hiddenPost2 = document.getElementById('hiddenPost2');
    const seeMoreButton = document.getElementById('seeMoreBtn');

    
    if (hiddenPost1.style.display === 'none') {
        hiddenPost1.style.display = 'block';
        hiddenPost2.style.display = 'block';
        seeMoreButton.textContent = '- See Less';
    } else {
        hiddenPost1.style.display = 'none';
        hiddenPost2.style.display = 'none';
        seeMoreButton.textContent = '+ See More';
    }
});


