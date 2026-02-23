
const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = menu.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li>a');

    const toggleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('menu') &&
            menu.classList.contains('active-menu')) {
            toggleMenu();
        }
    })

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    menu.addEventListener('click', (e) => {
        if (e.target == menu) {
            return;
        }
        toggleMenu();
    });
}

module.exports = menu;