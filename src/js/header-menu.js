export const makeHeaderMenu = () => {
    const header = document.querySelector('.js-header');
    if (!header) return null;
    const headerActiveClass = 'header--triggered';
    const burger = header.querySelector('.js-burger');

    burger.addEventListener('click', () => {
        header.classList.toggle(headerActiveClass);
    })
}