
const timer = require('./modules/timer');
const menu = require('./modules/menu.js');
const modal = require('./modules/modal.js');
const validators = require('./modules/validators.js');
const tabs = require('./modules/tabs.js');
const slider = require('./modules/slider.js');

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