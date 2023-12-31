/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  text-decoration: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(230, 196, 196);
  padding: 1% 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 70px;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Adjust the maximum width as needed */
}

.logo-container img {
  max-height: 50px; /* Adjust the logo height as needed */
  margin-right: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.menu li {
  margin: 0 15px; /* Adjust the spacing between menu items */
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-size: 18px; /* Adjust the font size as needed */
  font-weight: bold;
}

.menu span {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #333;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.3s ease-in-out;
}

.menu li:hover span {
  transform: scaleX(1);
  transform-origin: left center;
}

#list {
  margin-top: 10%; /* Increase the margin-top for more spacing */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.meal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px; /* Increase the gap for better separation */
  width: calc(33.33% - 20px); /* Adjust the width for better alignment */
  padding: 15px; /* Increase padding for a softer look */
  margin-bottom: 20px; /* Increase margin-bottom for better spacing */
  border: 1px solid #e0e0e0; /* Use a lighter border color */
  border-radius: 8px; /* Increase border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  transition: transform 0.3s;
}

.meal img {
  width: 100%;
  border-radius: 8px; /* Match border radius for consistency */
}

.meal img:hover {
  transform: scale(1.05); /* Slightly reduce the scale factor for a smoother hover effect */
}

/* Updated Modal Styles with New Class Names */
.modal-beautiful {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.774);
  backdrop-filter: blur(5px);
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 0.4s;
  animation-name: fadein;
  animation-duration: 0.4s;
}

/* Updated Modal Content Styles for a Smaller Modal */
.modal-content-beautiful {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 500px; /* Adjust the maximum width as needed */
  width: 90%; /* Adjust the width as needed */
}

/* Updated Close Button Styles */
.close-beautiful {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-beautiful:hover,
.close-beautiful:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* Updated Item Section Styles */
.itemSection-beautiful {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  padding: 1rem;
}

/* Updated Comment Section Styles */
.commentSection-beautiful {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  padding: 1rem;
}

/* Updated Comment Box Styles */
.commentBox-beautiful {
  display: flex;
  flex-direction: column;
  background-color: #efeaea;
  width: 100%;
  padding: 1.5rem 1rem;
}

/* Updated Comment Text Styles */
.commentText-beautiful,
.comment-name {
  font-size: medium;
  color: #5a5858;
}

/* Updated Date Styles */
.date-beautiful {
  color: #aaa;
  font-style: italic;
}

/* Updated Image Styles to Fit Within Modal */
.img-beautiful {
  max-width: 100%; /* Ensure the image fits within the modal */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove any residual padding/margin */
  margin: 0 auto; /* Center the image horizontally */
}

/* Updated Styles for the "Add Comment" Button */
.comments-button-beautiful {
  background-color: #4caf50; /* Change the background color */
  color: white; /* Text color */
  padding: 12px 20px; /* Padding for the button */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.comments-button-beautiful:hover {
  background-color: #45a049; /* Darker background color on hover */
}

/* Updated Comment Title Styles */
.commentTitle-beautiful {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

/* Updated Username Input Styles */
.usernameInput-beautiful {
  margin-bottom: 1rem;
  padding: 12px;
  width: 100%;
}

/* Updated Textarea Styles */
.textarea-beautiful {
  margin-bottom: 1rem;
  padding: 12px;
  width: 100%;
}

/* Updated Likes Container Styles */
.likes-container-beautiful {
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1em;
}

/* Updated Likes Icon Styles */
.likes-icon-beautiful {
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.4s;
}

.likes-icon-beautiful:hover {
  cursor: pointer;
  transform: scale(1.1);
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(230, 196, 196); /* Set your preferred background color */
  text-align: center;
  padding: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: rgb(230, 196, 196);\r\n  padding: 1% 0;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  height: 70px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  max-width: 1200px; /* Adjust the maximum width as needed */\r\n}\r\n\r\n.logo-container img {\r\n  max-height: 50px; /* Adjust the logo height as needed */\r\n  margin-right: 20px;\r\n}\r\n\r\n.menu {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n}\r\n\r\n.menu li {\r\n  margin: 0 15px; /* Adjust the spacing between menu items */\r\n  position: relative;\r\n}\r\n\r\n.menu a {\r\n  text-decoration: none;\r\n  color: #333;\r\n  font-size: 18px; /* Adjust the font size as needed */\r\n  font-weight: bold;\r\n}\r\n\r\n.menu span {\r\n  position: absolute;\r\n  bottom: -4px;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: #333;\r\n  transform: scaleX(0);\r\n  transform-origin: right center;\r\n  transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.menu li:hover span {\r\n  transform: scaleX(1);\r\n  transform-origin: left center;\r\n}\r\n\r\n#list {\r\n  margin-top: 10%; /* Increase the margin-top for more spacing */\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.meal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 10px; /* Increase the gap for better separation */\r\n  width: calc(33.33% - 20px); /* Adjust the width for better alignment */\r\n  padding: 15px; /* Increase padding for a softer look */\r\n  margin-bottom: 20px; /* Increase margin-bottom for better spacing */\r\n  border: 1px solid #e0e0e0; /* Use a lighter border color */\r\n  border-radius: 8px; /* Increase border radius for rounded corners */\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.meal img {\r\n  width: 100%;\r\n  border-radius: 8px; /* Match border radius for consistency */\r\n}\r\n\r\n.meal img:hover {\r\n  transform: scale(1.05); /* Slightly reduce the scale factor for a smoother hover effect */\r\n}\r\n\r\n/* Updated Modal Styles with New Class Names */\r\n.modal-beautiful {\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.774);\r\n  backdrop-filter: blur(5px);\r\n  -webkit-animation-name: fadein;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: fadein;\r\n  animation-duration: 0.4s;\r\n}\r\n\r\n/* Updated Modal Content Styles for a Smaller Modal */\r\n.modal-content-beautiful {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  max-width: 500px; /* Adjust the maximum width as needed */\r\n  width: 90%; /* Adjust the width as needed */\r\n}\r\n\r\n/* Updated Close Button Styles */\r\n.close-beautiful {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close-beautiful:hover,\r\n.close-beautiful:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Updated Item Section Styles */\r\n.itemSection-beautiful {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  width: 100%;\r\n  align-items: flex-start;\r\n  padding: 1rem;\r\n}\r\n\r\n/* Updated Comment Section Styles */\r\n.commentSection-beautiful {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  width: 100%;\r\n  align-items: flex-start;\r\n  padding: 1rem;\r\n}\r\n\r\n/* Updated Comment Box Styles */\r\n.commentBox-beautiful {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #efeaea;\r\n  width: 100%;\r\n  padding: 1.5rem 1rem;\r\n}\r\n\r\n/* Updated Comment Text Styles */\r\n.commentText-beautiful,\r\n.comment-name {\r\n  font-size: medium;\r\n  color: #5a5858;\r\n}\r\n\r\n/* Updated Date Styles */\r\n.date-beautiful {\r\n  color: #aaa;\r\n  font-style: italic;\r\n}\r\n\r\n/* Updated Image Styles to Fit Within Modal */\r\n.img-beautiful {\r\n  max-width: 100%; /* Ensure the image fits within the modal */\r\n  height: auto; /* Maintain aspect ratio */\r\n  display: block; /* Remove any residual padding/margin */\r\n  margin: 0 auto; /* Center the image horizontally */\r\n}\r\n\r\n/* Updated Styles for the \"Add Comment\" Button */\r\n.comments-button-beautiful {\r\n  background-color: #4caf50; /* Change the background color */\r\n  color: white; /* Text color */\r\n  padding: 12px 20px; /* Padding for the button */\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  transition: background-color 0.3s ease; /* Smooth background color transition */\r\n}\r\n\r\n.comments-button-beautiful:hover {\r\n  background-color: #45a049; /* Darker background color on hover */\r\n}\r\n\r\n/* Updated Comment Title Styles */\r\n.commentTitle-beautiful {\r\n  padding: 2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Updated Username Input Styles */\r\n.usernameInput-beautiful {\r\n  margin-bottom: 1rem;\r\n  padding: 12px;\r\n  width: 100%;\r\n}\r\n\r\n/* Updated Textarea Styles */\r\n.textarea-beautiful {\r\n  margin-bottom: 1rem;\r\n  padding: 12px;\r\n  width: 100%;\r\n}\r\n\r\n/* Updated Likes Container Styles */\r\n.likes-container-beautiful {\r\n  display: flex;\r\n  justify-content: right;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\n/* Updated Likes Icon Styles */\r\n.likes-icon-beautiful {\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n  transition: transform 0.4s;\r\n}\r\n\r\n.likes-icon-beautiful:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: rgb(230, 196, 196); /* Set your preferred background color */\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (comments) => {
  if (comments === null || comments === undefined) return 0;
  return comments.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);


/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchComments = async (endpoint) => {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${endpoint}`;
  const res = await fetch(apiUrl);
  const commentsData = await res.json();
  return commentsData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);


/***/ }),

/***/ "./src/modules/getDetail.js":
/*!**********************************!*\
  !*** ./src/modules/getDetail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getDetail = async (endpoint) => {
  const apiurl = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const res = await fetch(apiurl);
  return res.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDetail);


/***/ }),

/***/ "./src/modules/mealCounter.js":
/*!************************************!*\
  !*** ./src/modules/mealCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countCategoryMeals: () => (/* binding */ countCategoryMeals),
/* harmony export */   updateCategoryCounts: () => (/* binding */ updateCategoryCounts)
/* harmony export */ });
const API_KEY = '1';
const API_URL = 'https://www.themealdb.com/api/json/v1';

const countCategoryMeals = async (category) => {
  if (!category || typeof category !== 'string') {
    return 0;
  }
  const resp = await fetch(`${API_URL}/${API_KEY}/filter.php?c=${category}`);
  const resultData = await resp.json();
  return resultData.meals ? resultData.meals.length : 0;
};

const updateCategoryCounts = async () => {
  const menuLinks = document.querySelectorAll('header a');

  menuLinks.forEach(async (link) => {
    const { dataset: { category } } = link;
    const countMeal = await countCategoryMeals(category);
    const divCount = link.nextElementSibling;
    divCount.textContent = ` (${countMeal})`;
  });
};




/***/ }),

/***/ "./src/modules/popupModal.js":
/*!***********************************!*\
  !*** ./src/modules/popupModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getDetail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDetail.js */ "./src/modules/getDetail.js");
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");
/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitComment.js */ "./src/modules/submitComment.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");





const modal = document.getElementById('new-modal');
const closeBtn = document.getElementById('new-close');
const itemSection = document.getElementById('new-itemSection');
const commentSection = document.getElementById('new-commentSection');
const commentsHeading = document.getElementById('new-commentsHeading');
const btnAddComment = document.getElementById('new-btnAddComment');
const usernameInput = document.getElementById('new-username');
const commentInput = document.getElementById('new-comment');

const clearElement = (element) => {
  element.innerHTML = '';
};

const closeModal = () => {
  modal.style.display = 'none';
  clearElement(itemSection);
  clearElement(commentsHeading);
  clearElement(commentSection);
};

const displayComments = (comments) => {
  if (comments.length > 0) {
    const count = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(comments);
    commentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
    commentSection.innerHTML = comments
      .map(
        (comment) => `
          <div class="commentBox-beautiful">
            <p class="comment-name">${comment.username}:</p>
            <p class="commentText-beautiful">${comment.comment}</p>
            <p class="date-beautiful">${comment.creation_date}</p>
          </div>
        `,
      )
      .join('');
  }
};

const fetchAndDisplayComments = async (id) => {
  try {
    const comments = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`);
    displayComments(comments);
  } catch (error) {
    // Handle errors gracefully
   // console.error('Error fetching comments:', error);
  }
};

let commentsPollingInterval;

const openModal = async (id) => {
  try {
    const resultData = await (0,_getDetail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`lookup.php?i=${id}`);
    const result = resultData.meals;
    itemSection.innerHTML = `
      <img class='img-beautiful' src='${result[0].strMealThumb}'>
      <h2>${result[0].strMeal}</h2>
      <p class='p'>${result[0].strInstructions}</p>
    `;

    modal.style.display = 'flex';

    fetchAndDisplayComments(id);

    // Start polling for comments at a specific interval
    commentsPollingInterval = setInterval(() => {
      fetchAndDisplayComments(id);
    }, 5000); // Adjust the interval (in milliseconds) as needed

    btnAddComment.addEventListener('click', async () => {
      const username = usernameInput.value;
      const comment = commentInput.value;

      if (username !== '' && comment !== '') {
        await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id, username, comment);
        usernameInput.value = '';
        commentInput.value = '';
      }
    });

    closeBtn.addEventListener('click', () => {
      clearInterval(commentsPollingInterval); // Stop polling when closing the modal
      closeModal();
    });
  } catch (error) {
    // Handle errors gracefully
   // console.error('Error opening modal:', error);
  }
};

window.onclick = (event) => {
  if (event.target === modal) {
    clearInterval(commentsPollingInterval); // Stop polling when clicking outside the modal
    closeModal();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);


/***/ }),

/***/ "./src/modules/renderList.js":
/*!***********************************!*\
  !*** ./src/modules/renderList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMeals: () => (/* binding */ displayMeals),
/* harmony export */   fetchCategoryMeals: () => (/* binding */ fetchCategoryMeals),
/* harmony export */   likesCountUpdate: () => (/* binding */ likesCountUpdate),
/* harmony export */   transferLikes: () => (/* binding */ transferLikes)
/* harmony export */ });
/* harmony import */ var _popupModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupModal.js */ "./src/modules/popupModal.js");


const newApiKey = '1';
const newApiBaseUrl = 'https://www.themealdb.com/api/json/v1';
const newAppId = 'RjyF2atccOw1gRFQE3W0';
const newInvolvementApiBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const mealListContainer = document.getElementById('list');

const fetchCategoryMeals = async (category) => {
  const res = await fetch(`${newApiBaseUrl}/${newApiKey}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

const fetchMealLikes = async (mealName) => {
  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`);
  const data = await res.json();
  const mealLikes = data.find((item) => item.item_id === mealName);
  return mealLikes ? mealLikes.likes : 0;
};

const likesCountUpdate = (element, count) => {
  element.textContent = `${count} Likes`;
};

const transferLikes = async (mealName) => {
  const requestBody = {
    item_id: mealName,
  };

  const res = await fetch(`${newInvolvementApiBaseUrl}/apps/${newAppId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  return res.status === 201;
};

const displayMeals = async (meals) => {
  mealListContainer.innerHTML = '';

  meals.forEach(async (meal) => {
    const divMeal = document.createElement('div');
    divMeal.classList.add('meal');

    const imgMeal = document.createElement('img');
    imgMeal.src = `${meal.strMealThumb}/preview`;
    imgMeal.alt = meal.strMeal;

    const mealTitle = document.createElement('h3');
    mealTitle.textContent = meal.strMeal;

    const counterLikes = document.createElement('div');
    counterLikes.classList.add('likes-container-beautiful');

    const likesIcon = document.createElement('span');
    likesIcon.classList.add('likes-icon');
    likesIcon.textContent = '❤️';

    const countLike = document.createElement('span');
    countLike.classList.add('likes-count');

    const btnComment = document.createElement('button');
    btnComment.textContent = 'Comments';
    btnComment.classList.add('comments-button-beautiful');

    btnComment.addEventListener('click', () => (0,_popupModal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meal.idMeal));

    counterLikes.appendChild(likesIcon);
    counterLikes.appendChild(countLike);

    divMeal.appendChild(imgMeal);
    divMeal.appendChild(mealTitle);
    divMeal.appendChild(counterLikes);
    divMeal.appendChild(btnComment);

    mealListContainer.appendChild(divMeal);

    const likes = await fetchMealLikes(meal.strMeal);
    likesCountUpdate(countLike, likes);
  });
};




/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const submitComment = async (id, userName, com) => {
  const apiurl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`;
  const response = await fetch(apiurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id.toString(),
      username: userName,
      comment: com,
    }),
  });
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitComment);


/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _modules_renderList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderList.js */ "./src/modules/renderList.js");
/* harmony import */ var _modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mealCounter.js */ "./src/modules/mealCounter.js");





const menuLinks = document.querySelectorAll('header a');
const containerMeals = document.getElementById('list');

const renderMealCategory = async (category) => {
  const categoryMeals = await (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_2__.fetchCategoryMeals)(category);
  (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_2__.displayMeals)(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  menuLinks.forEach((link) => {
    const { dataset: { category } } = link;
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      await renderMealCategory(category);
    });
  });
};

const appStart = async () => {
  await (0,_modules_mealCounter_js__WEBPACK_IMPORTED_MODULE_3__.updateCategoryCounts)();
  setupHeaderLinkListeners();
  renderMealCategory('Seafood');
};

containerMeals.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const divMeal = e.target.closest('.meal').querySelector('h3');
    const titleMeal = divMeal.textContent;
    const divLikeCount = e.target.nextElementSibling;
    const likesCurrent = parseInt(divLikeCount.textContent, 10);
    const likesUpdated = likesCurrent + 1;
    const resultSuccess = await (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_2__.transferLikes)(titleMeal);
    if (resultSuccess) {
      (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_2__.likesCountUpdate)(divLikeCount, likesUpdated);
    }
  }
});

appStart();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map