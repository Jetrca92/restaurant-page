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

eval("// Generate main\r\nconst content = document.querySelector('#content');\r\nconst main = document.createElement('main');\r\nmain.setAttribute('class', 'main');\r\ncontent.appendChild(main);\r\n\r\nconst homeContent = [\"Podjetje Berosi d.o.o. je bilo ustanovljeno leta 2003 s strani treh gostincev, Roberta Štojsa, Bena in Simona Božiča, ki so se odločili popestriti gostinsko ponudbo v Savinjski dolini.\", \r\n\"Njihova picerija in restavracija na Petrovem trgu,imenovana Nekropolis, je že dolgo priljubljena med gosti zaradi prijaznosti, široke ponudbe hrane in pijače, okusnosti ter posebej prijetnega vzdušja. Naša ponudba vključuje več kot 20 vrst različnih vsakodnevnih malic in dve dnevni malici, slovenske pivovarje, vinarje ter jedi iz lokalnih sestavin. V naši ponudbi lahko izbirate med široko ponudbo pic, domačih testenin, mehiške ponudbe, lignjev, solat in sladic ter burgerjev.\",\r\n\"Za tiste, ki si želijo uživati v naših dobrotah doma ali drugje, pa pripravimo tudi catering. Pridite in se prepričajte sami o naši ponudbi, krožnikih in okusih, ki jih pripravlja uigran #NekropolsTeam.\"]\r\n\r\nconst btnNav = document.querySelectorAll('.button-nav');\r\nconst btnMenu = document.querySelector('#menu');\r\nconst btnHome = document.querySelector('#home');\r\nconst btnContact = document.querySelector('#contact');\r\n\r\n// Add active class if button clicked and remove it from the rest\r\nbtnNav.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n        if (button.classList.value === \"button-nav active\") return;\r\n        const oldButton = document.querySelector('.active');\r\n        oldButton.classList.remove('active');\r\n        button.classList.add('active');\r\n    });\r\n});\r\n\r\n// Manage display for menu\r\nbtnMenu.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'none';\r\n    document.querySelector('.contact').style.display = 'none';\r\n    document.querySelector('.menu').style.display = 'grid';\r\n    document.querySelector('body').style.backgroundImage = \"url('../src/images/background2.jpg')\";\r\n  });\r\n\r\n// Manage display for home\r\nbtnHome.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'flex';\r\n    document.querySelector('.contact').style.display = 'none';\r\n    document.querySelector('.menu').style.display = 'none';\r\n    document.querySelector('body').style.backgroundImage = \"url('../src/images/background.jpg')\";\r\n})\r\n\r\n// Manage display for contact\r\nbtnContact.addEventListener('click', () => {\r\n    document.querySelector('.home').style.display = 'none';\r\n    document.querySelector('.contact').style.display = 'flex';\r\n    document.querySelector('.menu').style.display = 'none';\r\n    document.querySelector('body').style.backgroundImage = \"url('../src/images/home_slika.jpg')\";\r\n})\r\n\r\n// Append footer\r\nconst footerContent = [\"Delovni čas\", \"PON - ČET: 8:00 - 22:00\", \"PET - SOB: 8:00 - 22:00\", \"NED: 8:00 - 22:00\"];\r\nfunction appendFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.setAttribute('class', 'footer');\r\n    const footerText = document.createElement('div');\r\n    footerText.setAttribute('class', 'footer-text');\r\n    for (let i = 0; i < 4; i++) {\r\n        const div = document.createElement('div');\r\n        div.innerHTML = footerContent[i];\r\n        footerText.appendChild(div);\r\n    }\r\n    footer.appendChild(footerText);\r\n    content.appendChild(footer);\r\n}\r\n\r\n// Generate content for home\r\nconst home = document.createElement('div');\r\nhome.setAttribute('class', 'home');\r\nfor (let i = 0; i < 3; i++) {\r\n    const p = document.createElement('p');\r\n    p.setAttribute('class', 'paragraph');\r\n    p.innerHTML = homeContent[i];\r\n    home.appendChild(p);\r\n}\r\nmain.appendChild(home);\r\nappendFooter();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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