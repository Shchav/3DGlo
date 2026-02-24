
const slider = (settings) => {

    // Валидация переданных настроек
    const sliderBlock = document.querySelector(settings.content);
    if (!sliderBlock) return;
    const slides = sliderBlock.querySelectorAll(settings.contentItem.item);
    if (!slides.length) return;
    if (!sliderBlock.querySelector(settings.pagination.dots)) return;
    if (!('dotActive' in settings.pagination))
        settings.pagination.dotActive = '.dot-active'; // Значение по умолчанию
    if (!('itemActive' in settings.contentItem))
        settings.contentItem.itemActive = '.portfolio-item-active'; // Значение по умолчанию

    // Добавление точек пагинатора
    const addDots = () => {
        const dotsUl = document.querySelector(settings.pagination.dots);
        slides.forEach((slider, index) => {
            const li = document.createElement('li');
            li.classList.add('dot');
            if (index == 0)
                li.classList.add(settings.pagination.dotActive.slice(1));
            dotsUl.append(li);
        })
    }
    addDots();

    const dots = document.querySelectorAll('.dot');

    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass.slice(1));
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass.slice(1));
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, settings.contentItem.itemActive);
        prevSlide(dots, currentSlide, settings.pagination.dotActive);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, settings.contentItem.itemActive);
        nextSlide(dots, currentSlide, settings.pagination.dotActive);
    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }
    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, settings.contentItem.itemActive);
        prevSlide(dots, currentSlide, settings.pagination.dotActive);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, settings.contentItem.itemActive);
        nextSlide(dots, currentSlide, settings.pagination.dotActive);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
}

export default slider;