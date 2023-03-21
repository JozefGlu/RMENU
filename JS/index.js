const navToggle = document.querySelector('#hamburger-menu');
const themeSwitch = document.querySelector('#theme-switch');
const navMenu = document.querySelectorAll('.nav__menu-link');
const navMenuItems = document.querySelectorAll('.nav__menu-item');

console.log('navMenu', navMenu);

const arrayFromNodeList = (list) => Array.from(list);
console.log('arrayFromNodeList', arrayFromNodeList(navMenu));

const handleClickNavToggle = ({ currentTarget: target }) => {
    const list = document.querySelector(`#${target.getAttribute('aria-controls')}`);
    
    console.log(target);
    if (target.getAttribute('aria-expanded') === 'true') {
        list.classList.remove('nav__menu-list--open');
        target.setAttribute('aria-expanded', 'false');
        target.parentNode.classList.remove('nav--open');

        arrayFromNodeList(navMenu).forEach((current) => current.classList.remove('nav__menu--ramification'));
        arrayFromNodeList(navMenuItems).forEach((current) => current.classList.remove('nav__menu-item--reduction'));


    } else {
        list.classList.add('nav__menu-list--open');
        target.setAttribute('aria-expanded', 'true');
        target.parentNode.classList.add('nav--open');
    }

};

const handleClickThemeSwitch = () => {
    document.documentElement.classList.toggle('darkmode');
}
const handleClickClasslist = () => {
    arrayFromNodeList(navMenu).forEach((current) => current.classList.toggle('nav__menu--ramification'));
    arrayFromNodeList(navMenuItems).forEach((current) => current.classList.toggle('nav__menu-item--reduction'));
}


arrayFromNodeList(navMenu).forEach((item) => item.addEventListener('click', handleClickClasslist));
navToggle.addEventListener('click', handleClickNavToggle);
themeSwitch.addEventListener('click', handleClickThemeSwitch);

