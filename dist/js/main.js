/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validators.js */ \"./src/modules/validators.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 february 2026 12:40:00');\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validators_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    content: '.portfolio-content',\n    contentItem: {\n        item: '.portfolio-item',\n        itemActive: '.portfolio-item-active'\n    },\n    pagination: {\n        dots: '.portfolio-dots',\n        dotActive: '.dot-active'\n    }\n});\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    formId: 'form1',\n    someElem: [\n        {\n            type: 'block',\n            id: 'total'\n        }\n    ]\n});\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    formId: 'form3'\n});\n(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    formId: 'form2'\n});\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calc.js"
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        setAnimationTotal(totalValue);\r\n    }\r\n\r\n    const setAnimationTotal = (nextTotal) => {\r\n        let currentTotal = +total.textContent;\r\n\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 2000,\r\n            timing(timeFraction) {\r\n                // easeOut (без обертки)\r\n                return 1 - Math.pow(1 - timeFraction, 10);\r\n            },\r\n            draw(progress) {\r\n                total.textContent = Math.floor(currentTotal + (nextTotal - currentTotal) * progress);\r\n            }\r\n        });\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?\n}");

/***/ },

/***/ "./src/modules/helpers.js"
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/helpers.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst menu = () => {\n\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    // const closeBtn = menu.querySelector('.close-btn');\n    // const menuItems = menu.querySelectorAll('ul>li>a');\n\n    const toggleMenu = () => {\n        menu.classList.toggle('active-menu');\n    }\n\n    document.body.addEventListener('click', (e) => {\n        if (!e.target.closest('menu') &&\n            menu.classList.contains('active-menu')) {\n            toggleMenu();\n        }\n    })\n\n    menuBtn.addEventListener('click', (e) => {\n        e.stopPropagation();\n        toggleMenu();\n    });\n\n    menu.addEventListener('click', (e) => {\n        if (e.target == menu) {\n            return;\n        }\n        toggleMenu();\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = document.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    const animation = () => {\r\n        modal.style.visibility = 'hidden';\r\n        let beginTop = -parseInt(modalContent.clientHeight);\r\n        let top = parseInt(modalContent.offsetTop);\r\n        modal.style.visibility = '';\r\n\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 1000,\r\n            timing: (timeFraction) => {\r\n                // bounce easeOut\r\n                return 1 - ((timeFraction) => {\r\n                    // bounce\r\n                    for (let a = 0, b = 1; 1; a += b, b /= 2) {\r\n                        if (timeFraction >= (7 - 4 * a) / 11) {\r\n                            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)\r\n                        }\r\n                    }\r\n                })(1 - timeFraction);\r\n            },\r\n            draw(progress) {\r\n                const valueFraction = beginTop + (top - beginTop) * progress;\r\n                modalContent.style.top = `${valueFraction}px`;\r\n            }\r\n        });\r\n    }\r\n\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n            if (parseInt(screen.width) > 768)\r\n                animation();\r\n        })\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') ||\r\n            e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/sendForm.js"
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка...';\r\n    const errorText = 'Ошибка...';\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется';\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            let reg;\r\n            switch (input.name) {\r\n                case 'user_phone': reg = /^[0-9()+-]*$/; break;\r\n                case 'user_name': reg = /^[а-яА-Я ]*$/; break;\r\n                case 'user_message': reg = /^[а-яА-Я\\s\\d]*$/; break;\r\n            }\r\n            if (reg && !reg.test(input.value))\r\n                success = false;\r\n        })\r\n        return success;\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        // С этого элемента берем дополнительные данные для \r\n        // отправки вместе с данными со всех input-ов формы\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n            // console.log(elem);\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        })\r\n\r\n        if (validate(formElements)) { // Валидация input-ов формы\r\n            // sendData(formBody)\r\n            //     .then(data => {\r\n            //         statusBlock.textContent = successText;\r\n            //         formElements.forEach(input => {\r\n            //             input.value = ''; // Очистка input-ов формы после отправки\r\n            //         })\r\n            //     })\r\n            //     .catch(error => {\r\n            //         statusBlock.textContent = errorText;\r\n            //     })\r\n        } else {\r\n            alert('Данные не валидны!!!');\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место)')\r\n        }\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n\r\n            submitForm();\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst slider = (settings) => {\r\n\r\n    // Валидация переданных настроек\r\n    const sliderBlock = document.querySelector(settings.content);\r\n    if (!sliderBlock) return;\r\n    const slides = sliderBlock.querySelectorAll(settings.contentItem.item);\r\n    if (!slides.length) return;\r\n    if (!sliderBlock.querySelector(settings.pagination.dots)) return;\r\n    if (!('dotActive' in settings.pagination))\r\n        settings.pagination.dotActive = '.dot-active'; // Значение по умолчанию\r\n    if (!('itemActive' in settings.contentItem))\r\n        settings.contentItem.itemActive = '.portfolio-item-active'; // Значение по умолчанию\r\n\r\n    // Добавление точек пагинатора\r\n    const addDots = () => {\r\n        const dotsUl = document.querySelector(settings.pagination.dots);\r\n        slides.forEach((slider, index) => {\r\n            const li = document.createElement('li');\r\n            li.classList.add('dot');\r\n            if (index == 0)\r\n                li.classList.add(settings.pagination.dotActive.slice(1));\r\n            dotsUl.append(li);\r\n        })\r\n    }\r\n    addDots();\r\n\r\n    const dots = document.querySelectorAll('.dot');\r\n\r\n    const timeInterval = 2000;\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass.slice(1));\r\n    }\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass.slice(1));\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, settings.contentItem.itemActive);\r\n        prevSlide(dots, currentSlide, settings.pagination.dotActive);\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, settings.contentItem.itemActive);\r\n        nextSlide(dots, currentSlide, settings.pagination.dotActive);\r\n    }\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    }\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, settings.contentItem.itemActive);\r\n        prevSlide(dots, currentSlide, settings.pagination.dotActive);\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, settings.contentItem.itemActive);\r\n        nextSlide(dots, currentSlide, settings.pagination.dotActive);\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true);\r\n\r\n    startSlide(timeInterval);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst tabs = (deadline) => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n\r\n                }\r\n            })\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\n    let idInterval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor((timeRemaining / 60 / 60));\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        if (timeRemaining <= 1) {\n            clearInterval(idInterval);\n            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 }\n        }\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const addZero = (num) => {\n        let strNum = String(num);\n        if (strNum.length < 2) {\n            strNum = `0${strNum}`;\n        }\n        return strNum;\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n\n        timerHours.textContent = addZero(getTime.hours);\n        timerMinutes.textContent = addZero(getTime.minutes);\n        timerSeconds.textContent = addZero(getTime.seconds);\n    }\n\n    idInterval = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?\n}");

/***/ },

/***/ "./src/modules/validators.js"
/*!***********************************!*\
  !*** ./src/modules/validators.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validators = () => {\r\n\r\n    const allCalcInput = document.querySelectorAll(\r\n        '.calc-count, .calc-day, .calc-square')\r\n    allCalcInput.forEach((calcInput) => {\r\n        calcInput.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '');\r\n        })\r\n    });\r\n\r\n    // const allInputText = document.querySelectorAll(\r\n    //     'input[type=text]:not(.calc-count):not(.calc-day):not(.calc-square):not(.mess)'\r\n    // )\r\n    // allInputText.forEach((inputText) => {\r\n    //     inputText.addEventListener('input', (e) => {\r\n    //         e.target.value = e.target.value.replace(/[^-a-zA-Z ]/, '');\r\n    //     })\r\n    // });\r\n\r\n    const allEmail = document.querySelectorAll(\r\n        'input[type=email]'\r\n    )\r\n    allEmail.forEach((email) => {\r\n        email.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@-_\\.!~*\\']/, '');\r\n        })\r\n    });\r\n\r\n    const allTel = document.querySelectorAll(\r\n        'input[type=tel]'\r\n    )\r\n    allTel.forEach((tel) => {\r\n        tel.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()+-]/, '');\r\n        })\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);\n\n//# sourceURL=webpack://3dglo/./src/modules/validators.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;