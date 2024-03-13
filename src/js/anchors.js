export const makeAnchors = () => {
    const header = document.querySelector('.js-header');

    document.querySelectorAll('.js-anchor-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            header.classList.remove('header--triggered');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top - header.offsetHeight - (window.innerHeight - targetElement.clientHeight) / 2;

                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

}