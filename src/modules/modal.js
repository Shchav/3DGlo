const modal = () => {

    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const closeBtn = modal.querySelector('.popup-close');
    const buttons = document.querySelectorAll('.popup-btn');

    const animation = () => {
        modal.style.visibility = 'hidden';

        let beginTop = -parseInt(modalContent.clientHeight);
        let top = parseInt(modalContent.offsetTop);
        modal.style.visibility = '';

        let id = setInterval(() => {
            modalContent.style.top = `${beginTop++}px`;
            if (beginTop >= top)
                clearInterval(id);
        }, 1);
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            if (parseInt(screen.width) > 768)
                animation();
        })
    });

    closeBtn.addEventListener('click',
        () => { modal.style.display = 'none'; });
}

module.exports = modal;