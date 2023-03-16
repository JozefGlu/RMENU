const navToggle = document.querySelector('#hamburger-menu');
const themeSwitch = document.querySelector('#theme-switch');


const handleClickNavToggle = ({ currentTarget: target }) => {
    const list = document.querySelector(`#${target.getAttribute('aria-controls')}`);
    
    console.log(target);
    if (target.getAttribute('aria-expanded') === 'true') {
        list.classList.remove('nav__menu-list--open');
        target.setAttribute('aria-expanded', 'false');
        target.parentNode.classList.remove('nav--open');

    } else {
        list.classList.add('nav__menu-list--open');
        target.setAttribute('aria-expanded', 'true');
        target.parentNode.classList.add('nav--open');
    }

};

const handleClickThemeSwitch = () => {
    document.documentElement.classList.toggle('darkmode');
}

navToggle.addEventListener('click', handleClickNavToggle);
themeSwitch.addEventListener('click', handleClickThemeSwitch);

