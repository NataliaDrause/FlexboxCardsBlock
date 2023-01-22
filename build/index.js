/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




wp.blocks.registerBlockType("nd-plugins/nd-flexbox-cards-block", {
  title: "Flexbox Cards Block",
  icon: "images-alt",
  category: "design",
  attributes: {
    cardTitle: {
      type: "array",
      default: [""]
    },
    cardDescription: {
      type: "array",
      default: [""]
    },
    imageId: {
      type: "array",
      default: [null]
    },
    imageAlt: {
      type: "array",
      default: [""]
    },
    imageUrl: {
      type: "array",
      default: [""]
    },
    buttonText: {
      type: "array",
      default: [""]
    },
    buttonUrl: {
      type: "array",
      default: [""]
    },
    bgColor: {
      type: "string",
      default: "#FFFFFF"
    }
  },
  edit: EditComponent,
  save: function () {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Todaty the sky.");
  }
});
function EditComponent(props) {
  const ALLOWED_MEDIA_TYPES = ['image'];
  function onSelectImage(media, index) {
    const newMediaId = props.attributes.imageId.concat([]);
    newMediaId[index] = media.id;
    const newMediaAlt = props.attributes.imageAlt.concat([]);
    newMediaAlt[index] = media.alt;
    const newMediaUrl = props.attributes.imageUrl.concat([]);
    newMediaUrl[index] = media.url;
    props.setAttributes({
      imageId: newMediaId,
      imageAlt: newMediaAlt,
      imageUrl: newMediaUrl
    });
  }
  function deleteImage(index) {
    const newMediaId = props.attributes.imageId.concat([]);
    newMediaId[index] = null;
    const newMediaAlt = props.attributes.imageAlt.concat([]);
    newMediaAlt[index] = "";
    const newMediaUrl = props.attributes.imageUrl.concat([]);
    newMediaUrl[index] = "";
    props.setAttributes({
      imageId: newMediaId,
      imageAlt: newMediaAlt,
      imageUrl: newMediaUrl
    });
  }
  function displayButton(index) {
    if (props.attributes.imageId[index] == null) {
      return {
        display: "none"
      };
    }
  }
  function deleteCard(indexToDelete) {
    const newTitle = props.attributes.cardTitle.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newDescription = props.attributes.cardDescription.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newImageId = props.attributes.imageId.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newImageAlt = props.attributes.imageAlt.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newImageUrl = props.attributes.imageUrl.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newButtonText = props.attributes.buttonText.filter(function (x, index) {
      return index != indexToDelete;
    });
    const newButtonUrl = props.attributes.buttonUrl.filter(function (x, index) {
      return index != indexToDelete;
    });
    props.setAttributes({
      cardTitle: newTitle,
      cardDescription: newDescription,
      imageId: newImageId,
      imageAlt: newImageAlt,
      imageUrl: newImageUrl,
      buttonText: newButtonText,
      buttonUrl: newButtonUrl
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    className: "flexbox-card-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Card Background Color",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: props.attributes.bgColor,
    onChangeComplete: x => props.setAttributes({
      bgColor: x.hex
    })
  })))), props.attributes.cardTitle.map(function (title, index) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
      className: "flexbox-card-block--items"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        backgroundColor: props.attributes.bgColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
      style: {
        display: "block"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
      className: "flexbox-card-block--image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.imageUrl[index],
      alt: props.attributes.imageAlt[index]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: media => onSelectImage(media, index),
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imageId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: open,
          variant: "secondary",
          className: "flexbox-card-block--image-btn"
        }, "Open Media Library");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "flexbox-card-block--image-btn",
      style: displayButton(index),
      onClick: () => deleteImage(index),
      variant: "tertiery"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: "trash"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHeading, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: title,
      onChange: newValue => {
        const newTitle = props.attributes.cardTitle.concat([]);
        newTitle[index] = newValue;
        props.setAttributes({
          cardTitle: newTitle
        });
      },
      autoFocus: title == undefined,
      label: "Title:",
      style: {
        fontSize: "20px"
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      value: props.attributes.cardDescription[index],
      onChange: newValue => {
        const newDescription = props.attributes.cardDescription.concat([]);
        newDescription[index] = newValue;
        props.setAttributes({
          cardDescription: newDescription
        });
      },
      label: "Description:"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {
      style: {
        display: "block"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: props.attributes.buttonText[index],
      onChange: newValue => {
        const newText = props.attributes.buttonText.concat([]);
        newText[index] = newValue;
        props.setAttributes({
          buttonText: newText
        });
      },
      label: "View more button text:"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: props.attributes.buttonUrl[index],
      onChange: newValue => {
        const newUrl = props.attributes.buttonUrl.concat([]);
        newUrl[index] = newValue;
        props.setAttributes({
          buttonUrl: newUrl
        });
      },
      label: "View more button URL:"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => deleteCard(index),
      variant: "primary",
      className: "flexbox-card-block--button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: "trash"
    }), "Remove card"));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "plus",
    onClick: () => {
      props.setAttributes({
        cardTitle: props.attributes.cardTitle.concat([undefined])
      });
    }
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map