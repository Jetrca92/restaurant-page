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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btnNav = document.querySelectorAll('.button-nav');\r\nconst btnMenu = document.querySelector('#menu');\r\nconst btnHome = document.querySelector('#home');\r\nconst btnContact = document.querySelector('#contact');\r\n\r\n// Add active class if button clicked and remove it from the rest\r\nbtnNav.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n        if (button.classList.value === \"button-nav active\") return;\r\n        const oldButton = document.querySelector('.active');\r\n        oldButton.classList.remove('active');\r\n        button.classList.add('active');\r\n    });\r\n});\r\n\r\n// Manage display for menu\r\nbtnMenu.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'none';\r\n    document.querySelector('.contact').style.display = 'none';\r\n    document.querySelector('.menu').style.display = 'flex';\r\n})\r\n\r\n// Manage display for home\r\nbtnHome.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'flex';\r\n    document.querySelector('.contact').style.display = 'none';\r\n    document.querySelector('.menu').style.display = 'none';\r\n})\r\n\r\n// Manage display for contact\r\nbtnContact.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'none';\r\n    document.querySelector('.contact').style.display = 'flex';\r\n    document.querySelector('.menu').style.display = 'none';\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;