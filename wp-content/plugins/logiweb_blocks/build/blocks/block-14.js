/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global-styles.scss"
/*!********************************!*\
  !*** ./src/global-styles.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/blocks/block-14/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const normalizeCategory = value => String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const DEFAULT_CATEGORIES = [{
  title: "General Questions",
  iconClass: "fa-regular fa-circle-question",
  faqs: [{
    question: "What services does DNH Group offer?",
    answer: "We provide roofing, remodeling, painting, windows, siding, and additional home improvement services."
  }, {
    question: "How long has DNH Group been in business?",
    answer: "We have served homeowners for more than four decades."
  }, {
    question: "What areas do you serve?",
    answer: "We serve multiple cities in the region. Contact us and we will confirm your exact service area."
  }, {
    question: "Are you licensed and insured?",
    answer: "Yes, our teams are fully licensed and insured for the services we provide."
  }, {
    question: "Do you offer free estimates?",
    answer: "Yes, we offer free estimates for qualifying projects."
  }]
}, {
  title: "Services & Process",
  iconClass: "fa-solid fa-wrench",
  faqs: [{
    question: "How does the project process work?",
    answer: "We start with a consultation, define scope and budget, then schedule execution with regular updates."
  }, {
    question: "How long will my project take?",
    answer: "Project duration depends on scope, but you get a clear timeline before work begins."
  }, {
    question: "Do I need to be home during the project?",
    answer: "Not always. We coordinate access, communication, and checkpoints based on your preference."
  }]
}, {
  title: "Pricing & Payment",
  iconClass: "fa-solid fa-dollar-sign",
  faqs: [{
    question: "Do you offer financing options?",
    answer: "Yes, we offer financing options on many qualifying projects. Ask our team for current programs."
  }, {
    question: "When are payments due?",
    answer: "Payment schedules depend on the project scope and are clearly outlined before work starts."
  }]
}, {
  title: "Warranty & Guarantees",
  iconClass: "fa-regular fa-shield-check",
  faqs: [{
    question: "Do your projects include a warranty?",
    answer: "Yes, workmanship and product warranties vary by service, and we explain them before installation."
  }, {
    question: "What happens if something needs adjustment after completion?",
    answer: "Our team will review the issue and schedule any covered follow-up work promptly."
  }]
}, {
  title: "Scheduling & Availability",
  iconClass: "fa-regular fa-clock",
  faqs: [{
    question: "How far in advance should I schedule?",
    answer: "Availability changes seasonally, so we recommend reaching out early for the widest scheduling options."
  }, {
    question: "Can you work around my availability?",
    answer: "Yes, we do our best to coordinate inspections, communication, and access around your schedule."
  }]
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-14", {
  title: "FAQ Block",
  icon: "editor-help",
  category: "widgets",
  attributes: {
    categories: {
      type: "array",
      default: DEFAULT_CATEGORIES
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      categories = []
    } = attributes;
    const [openKey, setOpenKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("0-0");
    const [activeFilter, setActiveFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("all-questions");
    const visibleCategories = activeFilter === "all-questions" ? categories : categories.filter(category => normalizeCategory(category.title) === activeFilter);
    const updateCategory = (categoryIndex, field, value) => {
      const next = [...categories];
      next[categoryIndex] = {
        ...next[categoryIndex],
        [field]: value
      };
      setAttributes({
        categories: next
      });
    };
    const addCategory = () => {
      setAttributes({
        categories: [...categories, {
          title: "New Category",
          iconClass: "fa-regular fa-circle-question",
          faqs: [{
            question: "New question",
            answer: "New answer"
          }]
        }]
      });
    };
    const removeCategory = categoryIndex => {
      if (categories.length <= 1) {
        return;
      }
      setAttributes({
        categories: categories.filter((_, index) => index !== categoryIndex)
      });
    };
    const updateFaq = (categoryIndex, faqIndex, field, value) => {
      const next = [...categories];
      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: next[categoryIndex].faqs.map((faq, index) => index === faqIndex ? {
          ...faq,
          [field]: value
        } : faq)
      };
      setAttributes({
        categories: next
      });
    };
    const addFaq = categoryIndex => {
      const next = [...categories];
      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: [...(next[categoryIndex].faqs || []), {
          question: "",
          answer: ""
        }]
      };
      setAttributes({
        categories: next
      });
    };
    const removeFaq = (categoryIndex, faqIndex) => {
      const next = [...categories];
      if ((next[categoryIndex].faqs || []).length <= 1) {
        return;
      }
      next[categoryIndex] = {
        ...next[categoryIndex],
        faqs: next[categoryIndex].faqs.filter((_, index) => index !== faqIndex)
      };
      setAttributes({
        categories: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "faqv2-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "FAQ Categories",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            children: [categories.length, " categories"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: addCategory,
            children: "Add Category"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "faqv2-filter-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: `faqv2-filter-pill ${activeFilter === "all-questions" ? "is-active" : ""}`,
          onClick: () => setActiveFilter("all-questions"),
          children: "All Questions"
        }), categories.map((category, categoryIndex) => {
          const filterKey = normalizeCategory(category.title);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            className: `faqv2-filter-pill ${activeFilter === filterKey ? "is-active" : ""}`,
            onClick: () => setActiveFilter(filterKey),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: category.iconClass || "fa-regular fa-circle-question"
            }), category.title]
          }, categoryIndex);
        })]
      }), visibleCategories.map(category => {
        const categoryIndex = categories.findIndex(item => item === category);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
          className: "faqv2-category",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "faqv2-category-editor-head",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Category ${categoryIndex + 1} Title`,
              value: category.title,
              onChange: value => updateCategory(categoryIndex, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Category Icon Class",
              value: category.iconClass || "",
              onChange: value => updateCategory(categoryIndex, "iconClass", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              onClick: () => removeCategory(categoryIndex),
              disabled: categories.length <= 1,
              children: "Remove Category"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
            className: "faqv2-category-title-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "faqv2-category-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: category.iconClass || "fa-regular fa-circle-question"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "faqv2-category-title",
              children: category.title
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "faqv2-items",
            children: (category.faqs || []).map((faq, faqIndex) => {
              const key = `${categoryIndex}-${faqIndex}`;
              const isOpen = openKey === key;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
                className: `faqv2-item ${isOpen ? "is-open" : ""}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                  type: "button",
                  className: "faqv2-question-row",
                  onClick: () => setOpenKey(isOpen ? "" : key),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "span",
                    className: "faqv2-question",
                    value: faq.question,
                    onChange: value => updateFaq(categoryIndex, faqIndex, "question", value),
                    placeholder: `Question ${faqIndex + 1}`
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "faqv2-arrow",
                    children: "\u25BC"
                  })]
                }), isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "faqv2-answer-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "div",
                    className: "faqv2-answer",
                    value: faq.answer,
                    onChange: value => updateFaq(categoryIndex, faqIndex, "answer", value),
                    placeholder: "FAQ answer"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    isSecondary: true,
                    isDestructive: true,
                    onClick: () => removeFaq(categoryIndex, faqIndex),
                    disabled: (category.faqs || []).length <= 1,
                    children: "Remove Question"
                  })]
                }) : null]
              }, key);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isSecondary: true,
            onClick: () => addFaq(categoryIndex),
            children: "+ Add Question"
          })]
        }, categoryIndex);
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      categories = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "faqv2-block",
      "data-faqv2": true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "faqv2-filter-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: "faqv2-filter-pill is-active",
          "data-faqv2-filter": "all-questions",
          children: "All Questions"
        }), categories.map((category, categoryIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          type: "button",
          className: "faqv2-filter-pill",
          "data-faqv2-filter": normalizeCategory(category.title),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: category.iconClass || "fa-regular fa-circle-question"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: category.title
          })]
        }, categoryIndex))]
      }), categories.map((category, categoryIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "faqv2-category",
        "data-faqv2-category": normalizeCategory(category.title),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
          className: "faqv2-category-title-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "faqv2-category-icon-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: category.iconClass || "fa-regular fa-circle-question"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "faqv2-category-title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: category.title
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "faqv2-items",
          children: (category.faqs || []).map((faq, faqIndex) => {
            const isOpen = categoryIndex === 0 && faqIndex === 0;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: `faqv2-item ${isOpen ? "is-open" : ""}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                type: "button",
                className: "faqv2-question-row",
                "data-faqv2-toggle": true,
                "aria-expanded": isOpen ? "true" : "false",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "faqv2-question",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    value: faq.question
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "faqv2-arrow",
                  children: "\u25BC"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "faqv2-answer-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  tagName: "div",
                  className: "faqv2-answer",
                  value: faq.answer
                })
              })]
            }, `${categoryIndex}-${faqIndex}`);
          })
        })]
      }, categoryIndex))]
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=block-14.js.map