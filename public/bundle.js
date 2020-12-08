/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ \"./src/dashboard.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.inputEmail = document.getElementById(\"email\");\n    this.inputPassword = document.getElementById(\"password\");\n    this.buttonLogin = document.getElementById(\"buttonLogin\");\n    this.buttonLogout = document.getElementById(\"logout\");\n    this.page1 = document.getElementById(\"page1\");\n    this.page2 = document.getElementById(\"page2\");\n    this.acessar();\n    this.logout();\n  }\n\n  _createClass(App, [{\n    key: \"acessar\",\n    value: function acessar() {\n      var _this = this;\n\n      this.buttonLogin.onclick = function () {\n        _this.validarDados();\n      };\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      var _this2 = this;\n\n      this.buttonLogout.onclick = function () {\n        _this2.page2.style.display = \"none\";\n        _this2.page1.style.display = \"block\";\n      };\n    }\n  }, {\n    key: \"validarDados\",\n    value: function validarDados() {\n      if (this.buscarUsuario(this.inputEmail.value, this.inputPassword.value)) {\n        this.salvar();\n        this.page1.style.display = \"none\";\n        this.page2.style.display = \"block\";\n        return;\n      } else {\n        alert(\"Usuario ou Senha invalidos\");\n        return;\n      }\n    }\n  }, {\n    key: \"salvar\",\n    value: function salvar() {\n      localStorage.setItem(\"Usuario\", JSON.stringify(this.inputEmail.value));\n    }\n  }, {\n    key: \"buscarUsuario\",\n    value: function buscarUsuario(email, senha) {\n      var login = new _login__WEBPACK_IMPORTED_MODULE_0__.Login();\n      var user = login.user.find(function (f) {\n        return f.email === email && f.senha === senha;\n      });\n\n      if (user === undefined) {\n        return false;\n      }\n\n      return true;\n    }\n  }]);\n\n  return App;\n}();\n\nnew App();\nnew _dashboard__WEBPACK_IMPORTED_MODULE_1__.Plataforma();\n\n//# sourceURL=webpack://projeto/./src/app.js?");

/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/*! namespace exports */
/*! export Plataforma [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Plataforma\": () => /* binding */ Plataforma\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Plataforma = /*#__PURE__*/function () {\n  function Plataforma() {\n    _classCallCheck(this, Plataforma);\n\n    this.contador = 0;\n    this.listaId = [];\n    this.novaTarefa = document.getElementById(\"newtask\");\n    this.dia = new Date();\n    this.data = this.dia.getDate();\n    this.dataInicio = document.getElementById(\"dataInicio\");\n    this.dataFim = document.getElementById(\"dataFim\");\n    this.botaoAdd = document.getElementById(\"botaoAdd\");\n    this.addCard = document.getElementById(\"teladashboard\");\n    this.gerenciarTarefas = document.getElementById(\"gerenciarTarefas\");\n    this.titulo = document.getElementById(\"titulo\");\n    this.descricao = document.getElementById(\"description\");\n    this.adicionarTarefa();\n    this.dev();\n  }\n\n  _createClass(Plataforma, [{\n    key: \"adicionarTarefa\",\n    value: function adicionarTarefa() {\n      var _this = this;\n\n      this.botaoAdd.onclick = function () {\n        var novoHTML = \"\\n           <div class=\\\"card cardDash border-primary col-md-6 col-xl-4\\\" style=\\\"max-width: 18rem;\\\" id=\\\"card-\".concat(++_this.contador, \"\\\">\\n           <img src=\\\"../img/checklists.svg\\\" width=\\\"50\\\" height=\\\"50\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n           <div class=\\\"card-header bg-transparent border-primary\\\">\").concat(_this.titulo.value, \"</div>\\n           <div class=\\\"card-body text-primary\\\">\\n               <h5 class=\\\"card-title\\\">Descri\\xE7\\xE3o</h5>\\n               <p class=\\\"card-text\\\">\").concat(_this.descricao.value, \"</p>\\n           </div>\\n           <div class=\\\"card-footer bg-transparent border-success\\\">Data Inicio: \").concat(_this.dataInicio.value, \"</div>\\n           <div class=\\\"card-footer bg-transparent border-success\\\">Data Fim: \").concat(_this.dataFim.value, \"</div>\\n           <div class=\\\"col-md\\\">\\n               <div class=\\\"card-shadow-info mb-3 widget-chart widget-chart2 text-left card\\\">\\n                   <div class=\\\"widget-content\\\">\\n                       <div class=\\\"widget-content-outer\\\">\\n                           <div class=\\\"widget-content-wrapper\\\">\\n                               <div class=\\\"widget-content-left pr-2 fsize-1\\\">\\n                                   <div class=\\\"widget-numbers mt-0 fsize-3 text-info\\\" id=\\\"progress\\\">\\n                                       0%</div>\\n                               </div>\\n                               <div class=\\\"widget-content-right w-100\\\">\\n                                   <div class=\\\"progress-bar-xs progress\\\">\\n                                       <div class=\\\"progress-bar bg-info\\\" role=\\\"progressbar\\\"\\n                                           aria-valuenow=\\\"89\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"\\n                                           id=\\\"progress\\\" style=\\\"width: 0%;\\\"></div>\\n                                   </div>\\n                               </div>\\n                           </div>\\n                           <div class=\\\"widget-content-left fsize-1\\\">\\n                               <div class=\\\"text-muted opacity-6\\\">Progresso</div>\\n                           </div>\\n                       </div>\\n                   </div>\\n               </div>\\n           </div>\\n           <button type=\\\"button\\\" class=\\\"btn btn-dark\\\" style=\\\"margin-bottom: 5px\\\" onclick='confirm(\\\"Concluir tarefa?\\\") ? document.getElementById(\\\"card-\").concat(_this.contador, \"\\\").remove() : \\\"\\\"' id=\\\"button-\").concat(_this.contador, \"\\\">Concluir</button>\\n          \\n           </div>\");\n\n        _this.listaId.push(_this.contador);\n\n        _this.addCard.innerHTML += novoHTML;\n      };\n    }\n  }, {\n    key: \"dev\",\n    value: function dev() {\n      this.gerenciarTarefas.onclick = function () {\n        alert(\"App desenvolvido por @Alidejes && @Luiswh1 para a Growdev no dia 08/12/2020.\");\n      };\n    }\n  }]);\n\n  return Plataforma;\n}();\nnew Plataforma();\n\n//# sourceURL=webpack://projeto/./src/dashboard.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! namespace exports */
/*! export Login [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": () => /* binding */ Login\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Login = function Login() {\n  _classCallCheck(this, Login);\n\n  this.user = [{\n    email: \"admin@admin.com\",\n    senha: \"admin\"\n  }, {\n    email: \"luiswh@admin.com\",\n    senha: \"1234\"\n  }];\n};\n\n//# sourceURL=webpack://projeto/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;