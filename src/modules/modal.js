import { animate } from './helpers.js'

const modal = () => {

    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');

    const animation = () => {
        modal.style.visibility = 'hidden';
        let beginTop = -parseInt(modalContent.clientHeight);
        let top = parseInt(modalContent.offsetTop);
        modal.style.visibility = '';

        function bounce(timeFraction) {
            for (let a = 0, b = 1; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        }
        function makeEaseOut(timing) {
            return function (timeFraction) {
                return 1 - timing(1 - timeFraction);
            }
        }

        animate({
            duration: 1000,
            timing: makeEaseOut(bounce),
            draw(progress) {
                const valueFraction = beginTop + (top - beginTop) * progress;
                modalContent.style.top = `${valueFraction}px`;
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            if (parseInt(screen.width) > 768)
                animation();
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
}

export default modal;