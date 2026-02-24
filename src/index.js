import timer from './modules/timer.js';
import menu from './modules/menu.js';
import modal from './modules/modal.js';
import validators from './modules/validators.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';
import calc from './modules/calc.js';

timer('27 february 2026 12:40:00');
menu();
modal();
validators();
tabs();
slider({
    content: '.portfolio-content',
    contentItem: {
        item: '.portfolio-item',
        itemActive: '.portfolio-item-active'
    },
    pagination: {
        dots: '.portfolio-dots',
        dotActive: '.dot-active'
    }
});
calc();