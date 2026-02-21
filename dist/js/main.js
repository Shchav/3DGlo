/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{\nconst timer = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\nconst menu = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\nconst modal = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\nconst validators = __webpack_require__(/*! ./modules/validators.js */ \"./src/modules/validators.js\");\n\ntimer('23 february 2026 12:40:00');\nmenu();\nmodal();\nvalidators();\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(module) {

eval("{\nconst menu = () => {\n\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    }\n\n    menuBtn.addEventListener('click', handleMenu);\n\n    closeBtn.addEventListener('click', handleMenu);\n\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\n}\n\nmodule.exports = menu;\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(module) {

eval("{const modal = () => {\r\n\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = document.querySelector('.popup-content');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    const animation = () => {\r\n        modal.style.visibility = 'hidden';\r\n\r\n        let beginTop = -parseInt(modalContent.clientHeight);\r\n        let top = parseInt(modalContent.offsetTop);\r\n        modal.style.visibility = '';\r\n\r\n        let id = setInterval(() => {\r\n            modalContent.style.top = `${beginTop++}px`;\r\n            if (beginTop >= top)\r\n                clearInterval(id);\r\n        }, 1);\r\n    }\r\n\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n            if (parseInt(screen.width) > 768)\r\n                animation();\r\n        })\r\n    });\r\n\r\n    closeBtn.addEventListener('click',\r\n        () => { modal.style.display = 'none'; });\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(module) {

eval("{\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\n    let idInterval;\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor((timeRemaining / 60 / 60));\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        if (timeRemaining <= 1) {\n            clearInterval(idInterval);\n            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 }\n        }\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const addZero = (num) => {\n        let strNum = String(num);\n        if (strNum.length < 2) {\n            strNum = `0${strNum}`;\n        }\n        return strNum;\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n\n        timerHours.textContent = addZero(getTime.hours);\n        timerMinutes.textContent = addZero(getTime.minutes);\n        timerSeconds.textContent = addZero(getTime.seconds);\n    }\n\n    idInterval = setInterval(updateClock, 1000);\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?\n}");

/***/ },

/***/ "./src/modules/validators.js"
/*!***********************************!*\
  !*** ./src/modules/validators.js ***!
  \***********************************/
(module) {

eval("{const validators = () => {\r\n\r\n    const allCalcInput = document.querySelectorAll(\r\n        '.calc-count, .calc-day, .calc-square')\r\n    allCalcInput.forEach((calcInput) => {\r\n        calcInput.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '');\r\n        })\r\n    });\r\n\r\n    const allInputText = document.querySelectorAll(\r\n        'input[type=text]:not(.calc-count):not(.calc-day):not(.calc-square), \\\r\n        [placeholder=\"Ваше сообщение\"]'\r\n    )\r\n    allInputText.forEach((inputText) => {\r\n        inputText.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^-a-zA-Z ]/, '');\r\n        })\r\n    });\r\n\r\n    const allEmail = document.querySelectorAll(\r\n        'input[type=email]'\r\n    )\r\n    allEmail.forEach((email) => {\r\n        email.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@-_.!~*\\']/, '');\r\n        })\r\n    });\r\n\r\n    const allTel = document.querySelectorAll(\r\n        'input[type=tel]'\r\n    )\r\n    allTel.forEach((tel) => {\r\n        tel.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()-]/, '');\r\n        })\r\n    });\r\n}\r\n\r\nmodule.exports = validators;\n\n//# sourceURL=webpack://3dglo/./src/modules/validators.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;