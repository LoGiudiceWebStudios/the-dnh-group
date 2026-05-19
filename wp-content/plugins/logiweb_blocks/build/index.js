/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-1/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-1/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-1/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('logiweb/custom-block-1', {
  title: 'Custom Block 1',
  icon: 'admin-site',
  category: 'widgets',
  attributes: {
    subtitle: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    titlleSmall1: {
      type: 'string'
    },
    descriptionSmall1: {
      type: 'string'
    },
    titlleSmall2: {
      type: 'string'
    },
    descriptionSmall2: {
      type: 'string'
    },
    titlleSmall3: {
      type: 'string'
    },
    descriptionSmall3: {
      type: 'string'
    },
    primary_btn_text: {
      type: 'string',
      default: 'Learn More'
    },
    primary_btn_link: {
      type: 'string'
    },
    tertiary_btn_text: {
      type: 'string',
      default: 'Get Started'
    },
    tertiary_btn_link: {
      type: 'string'
    },
    // Add new attributes to store links
    titlleSmall1_link: {
      type: 'string'
    },
    titlleSmall2_link: {
      type: 'string'
    },
    titlleSmall3_link: {
      type: 'string'
    },
    icon1: {
      type: 'string',
      default: 'fa-solid fa-cube'
    },
    icon2: {
      type: 'string',
      default: 'fa-solid fa-cube'
    },
    icon3: {
      type: 'string',
      default: 'fa-solid fa-cube'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      titlleSmall1,
      descriptionSmall1,
      titlleSmall2,
      descriptionSmall2,
      titlleSmall3,
      descriptionSmall3,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      icon1,
      icon2,
      icon3
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "subtitle",
        value: subtitle,
        onChange: value => setAttributes({
          subtitle: value
        }),
        placeholder: "Add subtitle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Add title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "description",
        value: description,
        onChange: value => setAttributes({
          description: value
        }),
        placeholder: "Add description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon1}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title-small",
            value: titlleSmall1,
            onChange: value => setAttributes({
              titlleSmall1: value
            }),
            placeholder: "Title 1",
            allowedFormats: ['core/link']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description-small",
            value: descriptionSmall1,
            onChange: value => setAttributes({
              descriptionSmall1: value
            }),
            placeholder: "Description 1",
            allowedFormats: ['core/link']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon2}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title-small",
            value: titlleSmall2,
            onChange: value => setAttributes({
              titlleSmall2: value
            }),
            placeholder: "Title 2",
            allowedFormats: ['core/link']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description-small",
            value: descriptionSmall2,
            onChange: value => setAttributes({
              descriptionSmall2: value
            }),
            placeholder: "Description 2",
            allowedFormats: ['core/link']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon3}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title-small",
            value: titlleSmall3,
            onChange: value => setAttributes({
              titlleSmall3: value
            }),
            placeholder: "Title 3",
            allowedFormats: ['core/link']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description-small",
            value: descriptionSmall3,
            onChange: value => setAttributes({
              descriptionSmall3: value
            }),
            placeholder: "Description 3",
            allowedFormats: ['core/link']
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: primary_btn_link,
            onChange: value => setAttributes({
              primary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Tertiary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: tertiary_btn_text,
            onChange: value => setAttributes({
              tertiary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: tertiary_btn_link,
            onChange: value => setAttributes({
              tertiary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Icons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Icon 1 (Font Awesome class)",
            value: icon1,
            onChange: value => setAttributes({
              icon1: value
            }),
            help: "e.g. \"fa-solid fa-cube\""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Icon 2 (Font Awesome class)",
            value: icon2,
            onChange: value => setAttributes({
              icon2: value
            }),
            help: "e.g. \"fa-solid fa-cube\""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Icon 3 (Font Awesome class)",
            value: icon3,
            onChange: value => setAttributes({
              icon3: value
            }),
            help: "e.g. \"fa-solid fa-cube\""
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-primary",
          value: primary_btn_text,
          onChange: value => setAttributes({
            primary_btn_text: value
          }),
          placeholder: "Button Text",
          href: primary_btn_link
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-tertiary",
          value: tertiary_btn_text,
          onChange: value => setAttributes({
            tertiary_btn_text: value
          }),
          placeholder: "Button Text",
          href: tertiary_btn_link
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      titlleSmall1,
      descriptionSmall1,
      titlleSmall2,
      descriptionSmall2,
      titlleSmall3,
      descriptionSmall3,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      icon1,
      icon2,
      icon3
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "description",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon1}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titlleSmall1,
              tagName: "span"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: descriptionSmall1,
              tagName: "span"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon2}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titlleSmall2,
              tagName: "span"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: descriptionSmall2,
              tagName: "span"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mini-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: `icon ${icon3}`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titlleSmall3,
              tagName: "span"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: descriptionSmall3,
              tagName: "span"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [primary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "btn-primary",
          href: primary_btn_link,
          children: primary_btn_text
        }), tertiary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "btn-tertiary",
          href: tertiary_btn_link,
          children: [tertiary_btn_text, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "material-symbols-outlined notranslate",
            children: "chevron_right"
          })]
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-10/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-10/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-10/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-10", {
  title: "Certifications Carousel",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    title: {
      type: "string",
      default: "Trusted by Industry Leaders"
    },
    images: {
      type: "array",
      default: []
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title = "",
      images = []
    } = attributes;
    const [startIndex, setStartIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const intervalRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const onSelectImages = media => {
      setAttributes({
        images: media.map(img => ({
          id: img.id,
          url: img.url,
          alt: img.alt || "",
          caption: img.caption?.raw || img.caption || img.title || ""
        }))
      });
      setStartIndex(0);
    };

    // Show 5 items for desktop preview
    const visibleImages = images.slice(startIndex, startIndex + 5);

    // Auto-scroll simulation in editor
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
      if (images.length <= 5) return;
      intervalRef.current = setInterval(() => {
        setStartIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(intervalRef.current);
    }, [images.length]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "block-editor-container",
      style: {
        width: "100%",
        padding: "2rem 0"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Carousel Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Section Title",
            value: title,
            onChange: val => setAttributes({
              title: val
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: onSelectImages,
              allowedTypes: ["image"],
              multiple: true,
              gallery: true,
              value: images.map(img => img.id),
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                isPrimary: true,
                children: images.length ? "Edit Images" : "Add Images"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        style: {
          textAlign: "center",
          marginBottom: "2rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          style: {
            fontSize: "0.85rem",
            color: "#999",
            margin: 0,
            marginBottom: "0.5rem"
          },
          children: "TRUSTED BY INDUSTRY LEADERS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          style: {
            fontSize: "1.8rem",
            fontWeight: 600,
            margin: 0
          },
          children: title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          overflow: "hidden",
          padding: "1rem"
        },
        children: visibleImages.length > 0 ? visibleImages.map((img, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            flex: "0 0 auto",
            width: "120px",
            height: "120px",
            background: "#f5f5f5",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            padding: "0.75rem 0.5rem"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: img.url,
            alt: img.alt,
            style: {
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain"
            }
          }), img.caption ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            style: {
              fontSize: "0.72rem",
              fontWeight: 600,
              lineHeight: 1.2,
              textAlign: "center",
              color: "#2d3748"
            },
            children: img.caption
          }) : null]
        }, img.id || idx)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          style: {
            color: "#999"
          },
          children: "Add images to start"
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title = "Trusted by Industry Leaders",
      images = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "certifications-carousel fade-in-on-scroll",
      "data-block": "certifications",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "certifications-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "certifications-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "certifications-subtitle",
            children: "Trusted by Industry Leaders"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "certifications-title",
            children: title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "certifications-track",
          "data-carousel-track": true,
          children: images.map((img, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "certification-item",
            "data-carousel-item": true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: img.url,
              alt: img.alt || "Certification",
              className: "certification-logo"
            }), img.caption ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "certification-caption",
              children: img.caption
            }) : null]
          }, img.id || idx))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-11/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-11/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-11", {
  title: "Three Boxes With Title",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    mainTitle: {
      type: "string",
      default: "The Purelight Power Promise"
    },
    promises: {
      type: "array",
      default: [{
        iconUrl: "",
        iconId: null,
        title: "Transparency",
        description: "We never push hidden fees or contract tricks – you’ll be in the loop every step of the process. Purelight Power is dedicated to building a long term, long lasting relationship with you, our customer and neighbor."
      }, {
        iconUrl: "",
        iconId: null,
        title: "Simplicity",
        description: "We strive to make the switch to solar simple and easy. To make the switch simple for homeowners, we manage every aspect of your installation. Solar can be stress-free from start to finish."
      }, {
        iconUrl: "",
        iconId: null,
        title: "Quality",
        description: "We only use industry leading solar panels and technology. Our high-quality solar panels and web-enabled monitoring systems marry simplicity with longevity."
      }]
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      mainTitle,
      promises
    } = attributes;
    const updatePromise = (index, field, value) => {
      const newPromises = [...promises];
      newPromises[index][field] = value;
      setAttributes({
        promises: newPromises
      });
    };
    const onSelectIcon = (index, media) => {
      updatePromise(index, "iconUrl", media.url);
      updatePromise(index, "iconId", media.id);
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "promise-grid-block",
      style: {
        background: "none",
        padding: "0"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Titolo principale",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Titolo principale",
            value: mainTitle,
            onChange: val => setAttributes({
              mainTitle: val
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Box Promesse",
          children: promises.map((promise, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "2rem",
              borderBottom: "1px solid #eee",
              paddingBottom: "1rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => onSelectIcon(i, media),
                allowedTypes: ["image"],
                value: promise.iconId,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: open,
                  isSecondary: true,
                  children: promise.iconUrl ? "Cambia icona" : "Carica icona"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Titolo",
              value: promise.title,
              onChange: val => updatePromise(i, "title", val)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Descrizione",
              value: promise.description,
              onChange: val => updatePromise(i, "description", val)
            })]
          }, i))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "promise-grid-content",
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "promise-main-title-col",
          style: {
            flex: "1 1 320px",
            minWidth: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "promise-main-title",
            value: mainTitle,
            onChange: val => setAttributes({
              mainTitle: val
            }),
            style: {
              fontWeight: "bold",
              fontSize: "3rem",
              lineHeight: "1.1",
              margin: 0,
              textAlign: "left"
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "promise-boxes",
          style: {
            flex: "2 1 600px",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "flex-start"
          },
          children: promises.map((promise, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "promise-box",
            style: {
              background: "#f4f6f8",
              borderRadius: "24px",
              padding: "2rem",
              minWidth: "320px",
              maxWidth: "420px",
              flex: "1 1 320px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxShadow: "none"
            },
            children: [promise.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: promise.iconUrl,
              alt: "",
              style: {
                width: 48,
                height: 48,
                marginBottom: "1rem"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              className: "promise-title",
              value: promise.title,
              onChange: val => updatePromise(i, "title", val),
              style: {
                color: "#6eb1be",
                fontWeight: "bold",
                fontSize: "2rem",
                margin: 0,
                marginBottom: "0.5rem"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "promise-description",
              value: promise.description,
              onChange: val => updatePromise(i, "description", val),
              style: {
                color: "#222",
                fontWeight: "400",
                fontSize: "1rem",
                margin: 0
              }
            })]
          }, i))
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      mainTitle,
      promises
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "promise-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "promise-row promise-row--top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "promise-title-col",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "promise-title",
            children: mainTitle
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "promise-box promise-box--top",
          children: [promises[0]?.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: promises[0].iconUrl,
            alt: "",
            className: "promise-icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "promise-box-title",
            children: promises[0]?.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "promise-box-desc",
            children: promises[0]?.description
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "promise-row promise-row--bottom",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "promise-box",
          children: [promises[1]?.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: promises[1].iconUrl,
            alt: "",
            className: "promise-icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "promise-box-title",
            children: promises[1]?.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "promise-box-desc",
            children: promises[1]?.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "promise-box",
          children: [promises[2]?.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: promises[2].iconUrl,
            alt: "",
            className: "promise-icon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "promise-box-title",
            children: promises[2]?.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "promise-box-desc",
            children: promises[2]?.description
          })]
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-12/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-12/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-12", {
  title: "Three Boxes With Popups",
  icon: "feedback",
  category: "widgets",
  attributes: {
    boxes: {
      type: "array",
      default: [{
        title: "Box 1 Title",
        iconUrl: "",
        iconId: null,
        text: "Box 1 short text",
        popupTitle: "Box 1 Popup Title",
        popupText: "Box 1 popup detailed text."
      }, {
        title: "Box 2 Title",
        iconUrl: "",
        iconId: null,
        text: "Box 2 short text",
        popupTitle: "Box 2 Popup Title",
        popupText: "Box 2 popup detailed text."
      }, {
        title: "Box 3 Title",
        iconUrl: "",
        iconId: null,
        text: "Box 3 short text",
        popupTitle: "Box 3 Popup Title",
        popupText: "Box 3 popup detailed text."
      }]
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      boxes
    } = attributes;
    const [openIndex, setOpenIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const updateBox = (index, field, value) => {
      const newBoxes = [...boxes];
      newBoxes[index][field] = value;
      setAttributes({
        boxes: newBoxes
      });
    };
    const onSelectIcon = (index, media) => {
      updateBox(index, "iconUrl", media.url);
      updateBox(index, "iconId", media.id);
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "popup-boxes-row",
      style: {
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "stretch"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Box Settings",
          children: boxes.map((box, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "2rem",
              borderBottom: "1px solid #eee",
              paddingBottom: "1rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Box ${i + 1} Title`,
              value: box.title,
              onChange: val => updateBox(i, "title", val)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Box ${i + 1} Short Text`,
              value: box.text,
              onChange: val => updateBox(i, "text", val)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => onSelectIcon(i, media),
                allowedTypes: ["image"],
                value: box.iconId,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: open,
                  isSecondary: true,
                  children: box.iconUrl ? "Change Icon" : "Upload Icon"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Box ${i + 1} Popup Title`,
              value: box.popupTitle,
              onChange: val => updateBox(i, "popupTitle", val)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Box ${i + 1} Popup Text`,
              value: box.popupText,
              onChange: val => updateBox(i, "popupText", val)
            })]
          }, i))
        })
      }), boxes.map((box, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "popup-box",
        onClick: () => setOpenIndex(i),
        "data-popup-title": box.popupTitle,
        "data-popup-text": box.popupText,
        "data-popup-index": i,
        children: [box.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: box.iconUrl,
          alt: "",
          style: {
            width: 80,
            height: 80,
            margin: "0 auto 1rem auto"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "h3",
          value: box.title,
          onChange: val => updateBox(i, "title", val),
          style: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0 0 1rem 0"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          value: box.text,
          onChange: val => updateBox(i, "text", val),
          style: {
            fontSize: "1.1rem",
            color: "#222"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            position: "absolute",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#1565a5",
            borderRadius: "0",
            width: "auto",
            height: "auto",
            background: "none",
            fontSize: "2.5rem",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: "\u203A"
        }), openIndex === i && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "popup-modal",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          onClick: () => setOpenIndex(null),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              background: "#fff",
              borderRadius: "24px",
              padding: "2rem",
              minWidth: "320px",
              maxWidth: "90vw",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              position: "relative"
            },
            onClick: e => e.stopPropagation(),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              style: {
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                color: "#1565a5"
              },
              onClick: () => setOpenIndex(null),
              "aria-label": "Close",
              children: "\xD7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
              style: {
                fontSize: "2rem",
                color: "#1565a5",
                marginBottom: "1rem"
              },
              children: box.popupTitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                fontSize: "1.2rem",
                color: "#222"
              },
              children: box.popupText
            })]
          })
        })]
      }, i))]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      boxes
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "popup-boxes-row",
      children: boxes.map((box, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "popup-box",
        "data-popup-title": box.popupTitle,
        "data-popup-text": box.popupText,
        "data-popup-index": i,
        children: [box.iconUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: box.iconUrl,
          alt: "",
          style: {
            width: 80,
            height: 80,
            margin: "0 auto 1rem auto"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          style: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0 0 1rem 0"
          },
          children: box.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            fontSize: "1.1rem",
            color: "#222"
          },
          children: box.text
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            color: "#1565a5",
            borderRadius: "0 24px 24px 0",
            width: "32px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem"
          },
          children: "\u203A"
        })]
      }, i))
    });
  }
});

/***/ },

/***/ "./src/blocks/block-13/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-13/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-13/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// Helper to chunk array into rows of 3

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('logiweb/custom-block-13', {
  title: 'Multiple Containers with Buttons',
  icon: 'admin-site',
  category: 'widgets',
  description: 'A block with 3 or more columns that can be customized with icons, titles, and descriptions. Perfect for showcasing features or services.',
  attributes: {
    subtitle: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    miniContainers: {
      type: 'array',
      default: [{
        title: '',
        description: '',
        icon: 'fa-solid fa-cube'
      }, {
        title: '',
        description: '',
        icon: 'fa-solid fa-cube'
      }, {
        title: '',
        description: '',
        icon: 'fa-solid fa-cube'
      }]
    },
    primary_btn_text: {
      type: 'string',
      default: 'Learn More'
    },
    primary_btn_link: {
      type: 'string'
    },
    tertiary_btn_text: {
      type: 'string',
      default: 'Get Started'
    },
    tertiary_btn_link: {
      type: 'string'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      miniContainers,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link
    } = attributes;
    const updateMiniContainer = (index, field, value) => {
      const newContainers = [...miniContainers];
      newContainers[index][field] = value;
      setAttributes({
        miniContainers: newContainers
      });
    };
    const addMiniContainer = () => {
      setAttributes({
        miniContainers: [...miniContainers, {
          title: '',
          description: '',
          icon: 'fa-solid fa-cube'
        }]
      });
    };
    const removeMiniContainer = index => {
      const newContainers = miniContainers.filter((_, i) => i !== index);
      setAttributes({
        miniContainers: newContainers
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-1 section-type-block-13",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "subtitle",
        value: subtitle,
        onChange: value => setAttributes({
          subtitle: value
        }),
        placeholder: "Add subtitle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Add title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "description",
        value: description,
        onChange: value => setAttributes({
          description: value
        }),
        placeholder: "Add description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content",
        children: [chunkArray(miniContainers, 3).map((row, rowIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mini-row",
          style: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem'
          },
          children: row.map((container, idx) => {
            const globalIdx = rowIdx * 3 + idx;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "mini-container",
              style: {
                flex: 1
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: `icon ${container.icon || 'fa-solid fa-cube'}`,
                style: {
                  fontSize: 32,
                  marginBottom: 10
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Classe FontAwesome",
                value: container.icon || '',
                onChange: value => updateMiniContainer(globalIdx, 'icon', value),
                placeholder: "fa-solid fa-scale-unbalanced-flip",
                help: "Inserisci la classe FontAwesome (es: fa-solid fa-star)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "title-small",
                value: container.title,
                onChange: value => updateMiniContainer(globalIdx, 'title', value),
                placeholder: `Title ${globalIdx + 1}`
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "description-small",
                value: container.description,
                onChange: value => updateMiniContainer(globalIdx, 'description', value),
                placeholder: `Description ${globalIdx + 1}`
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                icon: "no-alt",
                label: "Remove",
                onClick: () => removeMiniContainer(globalIdx),
                style: {
                  marginTop: '0.5rem',
                  color: 'red'
                },
                disabled: miniContainers.length <= 1
              })]
            }, globalIdx);
          })
        }, rowIdx)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          isSecondary: true,
          onClick: addMiniContainer,
          style: {
            marginTop: '1rem'
          },
          children: "+ Add Mini Container"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Link",
            value: primary_btn_link,
            onChange: value => setAttributes({
              primary_btn_link: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Tertiary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: tertiary_btn_text,
            onChange: value => setAttributes({
              tertiary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Link",
            value: tertiary_btn_link,
            onChange: value => setAttributes({
              tertiary_btn_link: value
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-primary",
          value: primary_btn_text,
          onChange: value => setAttributes({
            primary_btn_text: value
          }),
          placeholder: "Button Text",
          href: primary_btn_link
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-tertiary",
          value: tertiary_btn_text,
          onChange: value => setAttributes({
            tertiary_btn_text: value
          }),
          placeholder: "Button Text",
          href: tertiary_btn_link
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      miniContainers,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-1 section-type-block-13",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "description",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "content",
        children: chunkArray(miniContainers, 3).map((row, rowIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mini-row",
          style: {
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem'
          },
          children: row.map((container, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "mini-container",
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: `icon ${container.icon || 'fa-solid fa-cube'}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "title-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: container.title,
                tagName: "span"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "description-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: container.description,
                tagName: "span"
              })
            })]
          }, idx))
        }, rowIdx))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [primary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "btn-primary",
          href: primary_btn_link,
          children: primary_btn_text
        }), tertiary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "btn-tertiary",
          href: tertiary_btn_link,
          children: [tertiary_btn_text, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "material-symbols-outlined notranslate",
            children: "chevron_right"
          })]
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-14/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-14/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./src/blocks/block-15/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-15/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('logiweb/custom-block-15', {
  title: 'Social Media Links',
  icon: 'admin-site',
  category: 'widgets',
  attributes: {
    title: {
      type: 'string',
      default: 'Follow Us On'
    },
    instagram_link: {
      type: 'string',
      default: ''
    },
    facebook_link: {
      type: 'string',
      default: ''
    },
    linkedin_link: {
      type: 'string',
      default: ''
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      instagram_link,
      facebook_link,
      linkedin_link
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "social-follow-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "h2",
        className: "social-follow-title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Follow Us On",
        style: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2.2rem',
          marginBottom: '2.5rem'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "social-follow-buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn instagram",
          href: instagram_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-instagram"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Instagram"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn facebook",
          href: facebook_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-facebook"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Facebook"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn linkedin",
          href: linkedin_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-linkedin"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Linkedin"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Social Links",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Instagram Link",
            value: instagram_link,
            onChange: value => setAttributes({
              instagram_link: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Facebook Link",
            value: facebook_link,
            onChange: value => setAttributes({
              facebook_link: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Linkedin Link",
            value: linkedin_link,
            onChange: value => setAttributes({
              linkedin_link: value
            })
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      instagram_link,
      facebook_link,
      linkedin_link
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "social-follow-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: "social-follow-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "social-follow-buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn instagram",
          href: instagram_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-instagram"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Instagram"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn facebook",
          href: facebook_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-facebook"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Facebook"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
          className: "social-btn linkedin",
          href: linkedin_link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
            className: "fa-brands fa-linkedin"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: "Linkedin"
          })]
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-16/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-16/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Helper function to chunk array into rows of 3

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('logiweb/custom-block-16', {
  title: 'Testimonials',
  icon: 'admin-site',
  category: 'widgets',
  attributes: {
    title: {
      type: 'string',
      default: 'TESTIMONIALS'
    },
    description: {
      type: 'string',
      default: 'Hear from our satisfied customers who have experienced the logiweb Solutions difference.'
    },
    testimonials: {
      type: 'array',
      default: [{
        image: '',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
        name: 'Eveline Smith'
      }, {
        image: '',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
        name: 'Eveline Smith'
      }, {
        image: '',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"',
        name: 'Eveline Smith'
      }]
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      description,
      testimonials
    } = attributes;
    const updateTestimonial = (idx, field, value) => {
      const newTestimonials = [...testimonials];
      newTestimonials[idx][field] = value;
      setAttributes({
        testimonials: newTestimonials
      });
    };
    const addTestimonial = () => {
      setAttributes({
        testimonials: [...testimonials, {
          image: '',
          description: '',
          name: ''
        }]
      });
    };
    const removeTestimonial = idx => {
      const newTestimonials = testimonials.filter((_, i) => i !== idx);
      setAttributes({
        testimonials: newTestimonials
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "section-container testimonials",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "description",
        value: description,
        onChange: value => setAttributes({
          description: value
        }),
        placeholder: "Description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "content",
        children: [chunkArray(testimonials, 3).map((row, rowIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "testimonial-row",
          style: {
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          },
          children: row.map((testimonial, idx) => {
            const globalIdx = rowIdx * 3 + idx;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "list-item",
              style: {
                flex: '1 1 0',
                minWidth: 0,
                maxWidth: '33.33%'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateTestimonial(globalIdx, 'image', media.url),
                allowedTypes: ['image'],
                value: testimonial.image,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: testimonial.image || `${window.logiwebThemeUrl || ''}/assets/images/test-image.jpg`,
                    alt: "Profile",
                    className: "profile-circle",
                    style: {
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      marginBottom: '1rem'
                    },
                    onClick: open
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    onClick: open,
                    isSecondary: true,
                    style: {
                      marginBottom: '1rem'
                    },
                    children: testimonial.image ? 'Change Image' : 'Select Image'
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "description",
                value: testimonial.description,
                onChange: value => updateTestimonial(globalIdx, 'description', value),
                placeholder: "Testimonial text"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "title-small",
                value: testimonial.name,
                onChange: value => updateTestimonial(globalIdx, 'name', value),
                placeholder: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                icon: "no-alt",
                label: "Remove",
                onClick: () => removeTestimonial(globalIdx),
                style: {
                  marginTop: '0.5rem',
                  color: 'red'
                },
                disabled: testimonials.length <= 1
              })]
            }, globalIdx);
          })
        }, rowIdx)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          isSecondary: true,
          onClick: addTestimonial,
          style: {
            marginTop: '1rem'
          },
          children: "+ Add Testimonial"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Block Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title",
            value: title,
            onChange: value => setAttributes({
              title: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      description,
      testimonials
    } = attributes;
    // Chunk testimonials into rows of 3 for frontend as well
    const chunkArray = (arr, size) => {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "section-container testimonials",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "description",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "content",
        children: chunkArray(testimonials, 3).map((row, rowIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "testimonial-row",
          style: {
            display: 'flex',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          },
          children: row.map((testimonial, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "list-item",
            style: {
              flex: '1 1 0',
              minWidth: 0,
              maxWidth: '33.33%'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: testimonial.image || `${window.logiwebThemeUrl || ''}/assets/images/test-image.jpg`,
              alt: "Profile",
              className: "profile-circle",
              style: {
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '1rem'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "description",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: testimonial.description,
                tagName: "span"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "title-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: testimonial.name,
                tagName: "span"
              })
            })]
          }, idx))
        }, rowIdx))
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-17/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-17/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-17/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-17", {
  title: "Video Popover",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    videoUrl: {
      type: "string",
      default: ""
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      videoUrl
    } = attributes;
    const onSelectVideo = media => {
      setAttributes({
        videoUrl: media.url
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Video Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectVideo,
            allowedTypes: ["video"],
            value: videoUrl,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: videoUrl ? "Change Video" : "Select Video"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "section-container section-type-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "container-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            }),
            placeholder: "Add subtitle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Add title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container-right",
          children: videoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("video", {
            src: videoUrl,
            controls: true,
            style: {
              width: "100%",
              maxWidth: "700px",
              borderRadius: "10px",
              background: "#000"
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              background: "#eee",
              width: "100%",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              color: "#999"
            },
            children: "No video selected"
          })
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      videoUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "description",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: description,
            tagName: "div"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container-right",
        children: videoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("video", {
          src: videoUrl,
          controls: true,
          style: {
            width: "100%",
            maxWidth: "700px",
            borderRadius: "10px",
            background: "#000"
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          style: {
            background: "#eee",
            width: "100%",
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            color: "#999"
          },
          children: "No video selected"
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-19/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-19/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-19/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-19", {
  title: "Why Choose Us - Stats & Benefits",
  icon: "chart-pie",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "WHY CHOOSE US"
    },
    title: {
      type: "string",
      default: "The DNH Difference"
    },
    description: {
      type: "string",
      default: "We're not just another contractor. We're your partners in creating the home you've always wanted."
    },
    stats: {
      type: "array",
      default: [{
        number: "8+",
        label: "Years Experience"
      }, {
        number: "1,333+",
        label: "Projects Completed"
      }, {
        number: "52%",
        label: "Client Satisfaction"
      }, {
        number: "26+",
        label: "Industry Awards"
      }]
    },
    benefits: {
      type: "array",
      default: [{
        icon: "fa-solid fa-shield-halved",
        title: "Licensed & Insured",
        tag: "Full Liability Coverage",
        description: "Full coverage protection for your peace of mind. Every project is backed by comprehensive insurance."
      }, {
        icon: "fa-solid fa-clock",
        title: "On-Time Guarantee",
        tag: "98% On-Time Rate",
        description: "We respect your time. Projects completed on schedule or we discount 10% per day late."
      }, {
        icon: "fa-solid fa-tag",
        title: "No Hidden Fees",
        tag: "Fixed Price Promise",
        description: "Transparent pricing from day one. What we quote is what you pay. No surprises, ever."
      }, {
        icon: "fa-solid fa-star",
        title: "5-Year Warranty",
        tag: "Best in Industry",
        description: "Our work is built to last. Every project comes with an industry-leading warranty."
      }]
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      stats,
      benefits
    } = attributes;
    const updateStat = (index, field, value) => {
      const nextStats = [...stats];
      nextStats[index] = {
        ...nextStats[index],
        [field]: value
      };
      setAttributes({
        stats: nextStats
      });
    };
    const addStat = () => {
      setAttributes({
        stats: [...stats, {
          number: "0+",
          label: "New Stat"
        }]
      });
    };
    const removeStat = index => {
      if (stats.length <= 1) return;
      setAttributes({
        stats: stats.filter((_, i) => i !== index)
      });
    };
    const updateBenefit = (index, field, value) => {
      const nextBenefits = [...benefits];
      nextBenefits[index] = {
        ...nextBenefits[index],
        [field]: value
      };
      setAttributes({
        benefits: nextBenefits
      });
    };
    const addBenefit = () => {
      setAttributes({
        benefits: [...benefits, {
          icon: "✨",
          title: "New",
          tag: "New Tag",
          description: "Description"
        }]
      });
    };
    const removeBenefit = index => {
      if (benefits.length <= 1) return;
      setAttributes({
        benefits: benefits.filter((_, i) => i !== index)
      });
    };
    const statCountLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => `${stats.length} stat${stats.length === 1 ? "" : "s"}`, [stats.length]);
    const benefitCountLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => `${benefits.length} benefit${benefits.length === 1 ? "" : "s"}`, [benefits.length]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "why-choose-us-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Section Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title",
            value: title,
            onChange: value => setAttributes({
              title: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Stats (${statCountLabel})`,
          initialOpen: true,
          children: [stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${index + 1} - Number`,
              value: stat.number,
              onChange: value => updateStat(index, "number", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${index + 1} - Label`,
              value: stat.label,
              onChange: value => updateStat(index, "label", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeStat(index),
              disabled: stats.length <= 1,
              children: "Remove Stat"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addStat,
            children: "+ Add Stat"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Benefits (${benefitCountLabel})`,
          initialOpen: true,
          children: [benefits.map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Benefit ${index + 1} - Icon (FA class, e.g. fa-solid fa-shield-halved)`,
              value: benefit.icon,
              onChange: value => updateBenefit(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Benefit ${index + 1} - Title`,
              value: benefit.title,
              onChange: value => updateBenefit(index, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Benefit ${index + 1} - Tag`,
              value: benefit.tag,
              onChange: value => updateBenefit(index, "tag", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Benefit ${index + 1} - Description`,
              value: benefit.description,
              onChange: value => updateBenefit(index, "description", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeBenefit(index),
              disabled: benefits.length <= 1,
              children: "Remove Benefit"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addBenefit,
            children: "+ Add Benefit"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "why-choose-us-preview",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "why-choose-us-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "why-choose-us-subtitle",
            children: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "why-choose-us-title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Add title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "why-choose-us-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "why-choose-us-stats",
          children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "why-choose-us-stat-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "why-choose-us-stat-number",
              children: stat.number
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "why-choose-us-stat-label",
              children: stat.label
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "why-choose-us-benefits",
          children: benefits.map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "why-choose-us-benefit-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "why-choose-us-benefit-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                className: benefit.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "why-choose-us-benefit-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "why-choose-us-benefit-title",
                children: benefit.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "why-choose-us-benefit-tag",
                children: benefit.tag
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "why-choose-us-benefit-description",
                children: benefit.description
              })]
            })]
          }, index))
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      stats,
      benefits
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "why-choose-us fade-in-on-scroll",
      "data-block": "why-choose-us",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "why-choose-us-heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "why-choose-us-subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "why-choose-us-title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "why-choose-us-description",
          children: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "why-choose-us-stats",
        children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "why-choose-us-stat-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "why-choose-us-stat-number",
            "data-count": stat.number,
            children: "0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "why-choose-us-stat-label",
            children: stat.label
          })]
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "why-choose-us-benefits",
        children: benefits.map((benefit, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "why-choose-us-benefit-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "why-choose-us-benefit-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
              className: benefit.icon
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "why-choose-us-benefit-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "why-choose-us-benefit-title",
              children: benefit.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "why-choose-us-benefit-tag",
              children: benefit.tag
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "why-choose-us-benefit-description",
              children: benefit.description
            })]
          })]
        }, index))
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-2/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-2/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-2/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-2", {
  title: "Custom Block 2",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    backgroundImage: {
      type: "string",
      default: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png"
    },
    imagePosition: {
      type: "string",
      default: "right" // "right" or "left"
    },
    primary_btn_text: {
      type: "string",
      default: "Learn More"
    },
    primary_btn_link: {
      type: "string"
    },
    tertiary_btn_text: {
      type: "string",
      default: "Get Started"
    },
    tertiary_btn_link: {
      type: "string"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        backgroundImage: media.url
      });
    };

    // Costruisci dinamicamente la struttura in base alla posizione selezionata
    const ContainerLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "subtitle",
        value: subtitle,
        onChange: value => setAttributes({
          subtitle: value
        }),
        placeholder: "Add subtitle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Add title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "description",
        value: description,
        onChange: value => setAttributes({
          description: value
        }),
        placeholder: "Add description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: primary_btn_link,
            onChange: value => setAttributes({
              primary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Tertiary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: tertiary_btn_text,
            onChange: value => setAttributes({
              tertiary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: tertiary_btn_link,
            onChange: value => setAttributes({
              tertiary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-primary",
          value: primary_btn_text,
          onChange: value => setAttributes({
            primary_btn_text: value
          }),
          placeholder: "Button Text",
          href: primary_btn_link
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-tertiary",
          value: tertiary_btn_text,
          onChange: value => setAttributes({
            tertiary_btn_text: value
          }),
          placeholder: "Button Text",
          href: tertiary_btn_link
        })]
      })]
    });
    const ContainerRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-right",
      style: {
        backgroundImage: `url(${backgroundImage})`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: backgroundImage,
        alt: "Block Image"
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: backgroundImage,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: "Select Image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: "Image Position (desktop)",
            value: imagePosition,
            options: [{
              label: "Right",
              value: "right"
            }, {
              label: "Left",
              value: "left"
            }],
            onChange: value => setAttributes({
              imagePosition: value
            }),
            help: "Scegli la posizione dell'immagine in versione desktop."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "section-container section-type-2",
        children: imagePosition === "left" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [ContainerRight, ContainerLeft]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [ContainerLeft, ContainerRight]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link
    } = attributes;

    // Costruisci dinamicamente la struttura in base alla posizione selezionata
    const ContainerLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "description",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          value: description,
          tagName: "div"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [primary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "btn-primary",
          href: primary_btn_link,
          children: primary_btn_text
        }), tertiary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "btn-tertiary",
          href: tertiary_btn_link,
          children: [tertiary_btn_text, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "material-symbols-outlined notranslate",
            children: "chevron_right"
          })]
        })]
      })]
    });
    const ContainerRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-right",
      style: {
        backgroundImage: `url(${backgroundImage})`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: backgroundImage,
        alt: "Block Image"
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: `section-container section-type-2 image-position-${imagePosition}`,
      children: imagePosition === "left" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [ContainerRight, ContainerLeft]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [ContainerLeft, ContainerRight]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-20/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-20/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-20/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_STEPS = [{
  title: "Free Consultation",
  description: "We assess your needs and provide expert recommendations"
}, {
  title: "Detailed Quote",
  description: "Transparent pricing with no hidden costs or surprises"
}, {
  title: "Expert Execution",
  description: "Skilled professionals deliver quality craftsmanship"
}, {
  title: "Final Inspection",
  description: "We ensure everything meets our high standards"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-20", {
  title: "Transparent Process Timeline",
  icon: "list-view",
  category: "widgets",
  attributes: {
    title: {
      type: "string",
      default: "Our Transparent Process"
    },
    subtitle: {
      type: "string",
      default: "See exactly how we work, from first call to final inspection"
    },
    steps: {
      type: "array",
      default: DEFAULT_STEPS
    },
    ctaText: {
      type: "string",
      default: "Start Your Project Today"
    },
    ctaUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      subtitle,
      steps,
      ctaText,
      ctaUrl
    } = attributes;
    const updateStep = (index, field, value) => {
      const next = [...steps];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        steps: next
      });
    };
    const addStep = () => setAttributes({
      steps: [...steps, {
        title: "New Step",
        description: "Description"
      }]
    });
    const removeStep = index => {
      if (steps.length <= 1) return;
      setAttributes({
        steps: steps.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "process-timeline-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Section Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title",
            value: title,
            onChange: v => setAttributes({
              title: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: v => setAttributes({
              subtitle: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Steps (${steps.length})`,
          initialOpen: true,
          children: [steps.map((step, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Step ${i + 1} - Title`,
              value: step.title,
              onChange: v => updateStep(i, "title", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Step ${i + 1} - Description`,
              value: step.description,
              onChange: v => updateStep(i, "description", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeStep(i),
              disabled: steps.length <= 1,
              children: "Remove Step"
            })]
          }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addStep,
            children: "+ Add Step"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "CTA Button",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: ctaText,
            onChange: v => setAttributes({
              ctaText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: ctaUrl,
            onChange: v => setAttributes({
              ctaUrl: v
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "process-timeline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "process-timeline-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "process-timeline-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              className: "process-timeline-title",
              value: title,
              onChange: v => setAttributes({
                title: v
              }),
              placeholder: "Add title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "process-timeline-subtitle",
              value: subtitle,
              onChange: v => setAttributes({
                subtitle: v
              }),
              placeholder: "Add subtitle"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "process-timeline-steps",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "process-timeline-line"
            }), steps.map((step, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: `process-step${i === 0 ? " is-active" : ""}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "process-step-circle",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: i + 1
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "process-step-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "process-step-title",
                  children: step.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "process-step-description",
                  children: step.description
                })]
              })]
            }, i))]
          }), ctaText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "process-timeline-cta",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: ctaUrl,
              className: "process-timeline-btn",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-phone"
              }), ctaText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-trend-up"
              })]
            })
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      subtitle,
      steps,
      ctaText,
      ctaUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "process-timeline fade-in-on-scroll",
      "data-block": "process-timeline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "process-timeline-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "process-timeline-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
            className: "process-timeline-title",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "process-timeline-subtitle",
            children: subtitle
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "process-timeline-steps",
          "data-process-steps": true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "process-timeline-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "process-timeline-line-fill"
            })
          }), steps.map((step, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `process-step${i === 0 ? " is-active" : ""}`,
            "data-step-index": i,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "process-step-circle",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: i + 1
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "process-step-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "process-step-title",
                children: step.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "process-step-description",
                children: step.description
              })]
            })]
          }, i))]
        }), ctaText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "process-timeline-cta",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: ctaUrl,
            className: "process-timeline-btn",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-phone"
            }), ctaText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-trend-up"
            })]
          })
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-21/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-21/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-21/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_PROJECTS = [{
  imageUrl: "",
  imageAlt: "Interior & Exterior Painting",
  tag: "Painting Services",
  tagIcon: "fa-solid fa-paint-roller",
  tagColor: "#6c63ff",
  stat: "500+ Projects",
  title: "Interior & Exterior Painting",
  description: "Complete home transformation with premium paints and expert craftsmanship.",
  btnText: "View Projects",
  btnUrl: "#",
  externalUrl: "#"
}, {
  imageUrl: "",
  imageAlt: "Exterior Cleaning & Prep",
  tag: "Cleaning Services",
  tagIcon: "fa-solid fa-droplet",
  tagColor: "#22c55e",
  stat: "300+ Homes",
  title: "Exterior Cleaning & Prep",
  description: "Pressure washing and surface preparation for lasting results.",
  btnText: "View Estimate",
  btnUrl: "#",
  externalUrl: "#"
}, {
  imageUrl: "",
  imageAlt: "Home Remodeling",
  tag: "Remodeling Services",
  tagIcon: "fa-solid fa-hammer",
  tagColor: "#a855f7",
  stat: "200+ Renovations",
  title: "Home Remodeling",
  description: "Kitchen, bathroom, and full home renovations that exceed expectations.",
  btnText: "View Projects",
  btnUrl: "#",
  externalUrl: "#"
}, {
  imageUrl: "",
  imageAlt: "Roofing & Electrical",
  tag: "Roofing Services",
  tagIcon: "fa-solid fa-house",
  tagColor: "#f59e0b",
  stat: "100+ Projects",
  title: "Roofing & Electrical",
  description: "Professional roofing repairs and electrical solutions for your home.",
  btnText: "View Projects",
  btnUrl: "#",
  externalUrl: "#"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-21", {
  title: "Featured Projects Grid",
  icon: "grid-view",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "FEATURED PROJECTS"
    },
    titleStart: {
      type: "string",
      default: "Our Work"
    },
    titleHighlight: {
      type: "string",
      default: "Speaks"
    },
    titleEnd: {
      type: "string",
      default: "For Itself"
    },
    description: {
      type: "string",
      default: "Browse our portfolio of completed projects across all our service categories."
    },
    ctaText: {
      type: "string",
      default: "View All Projects"
    },
    ctaUrl: {
      type: "string",
      default: "#"
    },
    projects: {
      type: "array",
      default: DEFAULT_PROJECTS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      projects
    } = attributes;
    const updateProject = (index, field, value) => {
      const next = [...projects];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        projects: next
      });
    };
    const addProject = () => setAttributes({
      projects: [...projects, {
        imageUrl: "",
        imageAlt: "New Project",
        tag: "Service",
        tagIcon: "fa-solid fa-star",
        tagColor: "#3b82f6",
        stat: "0+ Projects",
        title: "New Project",
        description: "Project description.",
        btnText: "View Projects",
        btnUrl: "#",
        externalUrl: "#"
      }]
    });
    const removeProject = index => {
      if (projects.length <= 1) return;
      setAttributes({
        projects: projects.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "fp-block-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Section Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: v => setAttributes({
              subtitle: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title \u2014 Start",
            value: titleStart,
            onChange: v => setAttributes({
              titleStart: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title \u2014 Highlighted word",
            value: titleHighlight,
            onChange: v => setAttributes({
              titleHighlight: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title \u2014 End",
            value: titleEnd,
            onChange: v => setAttributes({
              titleEnd: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description (right column)",
            value: description,
            onChange: v => setAttributes({
              description: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "CTA Button",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: ctaText,
            onChange: v => setAttributes({
              ctaText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: ctaUrl,
            onChange: v => setAttributes({
              ctaUrl: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Projects (${projects.length})`,
          initialOpen: true,
          children: [projects.map((proj, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1.25rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              style: {
                fontWeight: 600,
                margin: "0 0 0.5rem"
              },
              children: ["Project ", i + 1]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateProject(i, "imageUrl", media.url),
                allowedTypes: ["image"],
                value: proj.imageUrl,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  style: {
                    marginBottom: "0.75rem"
                  },
                  children: [proj.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: proj.imageUrl,
                    alt: "",
                    style: {
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginBottom: "0.4rem"
                    }
                  }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    isSecondary: true,
                    isSmall: true,
                    onClick: open,
                    children: proj.imageUrl ? "Change Image" : "Set Image"
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Image Alt",
              value: proj.imageAlt,
              onChange: v => updateProject(i, "imageAlt", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Tag Label",
              value: proj.tag,
              onChange: v => updateProject(i, "tag", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Tag Icon (FA class)",
              value: proj.tagIcon,
              onChange: v => updateProject(i, "tagIcon", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Tag Color (hex)",
              value: proj.tagColor,
              onChange: v => updateProject(i, "tagColor", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Stat (e.g. 500+ Projects)",
              value: proj.stat,
              onChange: v => updateProject(i, "stat", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Title",
              value: proj.title,
              onChange: v => updateProject(i, "title", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Description",
              value: proj.description,
              onChange: v => updateProject(i, "description", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Button Text",
              value: proj.btnText,
              onChange: v => updateProject(i, "btnText", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Button URL",
              value: proj.btnUrl,
              onChange: v => updateProject(i, "btnUrl", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "External Link URL",
              value: proj.externalUrl,
              onChange: v => updateProject(i, "externalUrl", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeProject(i),
              disabled: projects.length <= 1,
              children: "Remove"
            })]
          }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addProject,
            children: "+ Add Project"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "fp-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "fp-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "fp-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "fp-header-left",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "fp-subtitle",
                children: subtitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
                className: "fp-title",
                children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "fp-title-highlight",
                  children: titleHighlight
                }), " ", titleEnd]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "fp-header-right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "fp-description",
                children: description
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "fp-grid",
            children: projects.map((proj, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "fp-card",
              style: {
                backgroundImage: proj.imageUrl ? `url(${proj.imageUrl})` : undefined,
                backgroundColor: proj.imageUrl ? undefined : "#1a1a2e"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "fp-card-overlay"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "fp-card-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "fp-card-tags",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    className: "fp-tag fp-tag-service",
                    style: {
                      background: proj.tagColor + "33",
                      color: proj.tagColor
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: proj.tagIcon
                    }), " ", proj.tag]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "fp-tag fp-tag-stat",
                    children: proj.stat
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "fp-card-title",
                  children: proj.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "fp-card-description",
                  children: proj.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "fp-card-actions",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                    href: proj.btnUrl,
                    className: "fp-card-btn",
                    children: [proj.btnText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "fa-solid fa-arrow-right"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    href: proj.externalUrl,
                    className: "fp-card-external",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "fa-solid fa-arrow-up-right-from-square"
                    })
                  })]
                })]
              })]
            }, i))
          }), ctaText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "fp-cta",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: ctaUrl,
              className: "fp-cta-btn",
              children: [ctaText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            })
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      ctaText,
      ctaUrl,
      projects
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "fp-section fade-in-on-scroll",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "fp-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "fp-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "fp-header-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "fp-subtitle",
              children: subtitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "fp-title",
              children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "fp-title-highlight",
                children: titleHighlight
              }), " ", titleEnd]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "fp-header-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "fp-description",
              children: description
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "fp-grid",
          children: projects.map((proj, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "fp-card",
            style: {
              backgroundImage: proj.imageUrl ? `url(${proj.imageUrl})` : undefined
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "fp-card-overlay"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "fp-card-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "fp-card-tags",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "fp-tag fp-tag-service",
                  style: {
                    background: proj.tagColor + "33",
                    color: proj.tagColor
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: proj.tagIcon
                  }), " ", proj.tag]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "fp-tag fp-tag-stat",
                  children: proj.stat
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "fp-card-title",
                children: proj.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "fp-card-description",
                children: proj.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "fp-card-actions",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                  href: proj.btnUrl,
                  className: "fp-card-btn",
                  children: [proj.btnText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa-solid fa-arrow-right"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: proj.externalUrl,
                  className: "fp-card-external",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa-solid fa-arrow-up-right-from-square"
                  })
                })]
              })]
            })]
          }, i))
        }), ctaText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "fp-cta",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: ctaUrl,
            className: "fp-cta-btn",
            children: [ctaText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          })
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-22/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-22/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-22/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_STATS = [{
  value: "24h",
  label: "Response Time"
}, {
  value: "Free",
  label: "Consultation"
}, {
  value: "100%",
  label: "Satisfaction"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-22", {
  title: "CTA Hero - Let's Work Together",
  icon: "megaphone",
  category: "widgets",
  attributes: {
    badgeText: {
      type: "string",
      default: "Start Your Project Today"
    },
    titleStart: {
      type: "string",
      default: "Let's Work"
    },
    titleHighlight: {
      type: "string",
      default: "Together"
    },
    description: {
      type: "string",
      default: "Ready to transform your digital presence? Get in touch with us and let's discuss how we can help bring your vision to life."
    },
    primaryBtnText: {
      type: "string",
      default: "Start a Project"
    },
    primaryBtnUrl: {
      type: "string",
      default: "#"
    },
    secondaryBtnText: {
      type: "string",
      default: "View Our Work"
    },
    secondaryBtnUrl: {
      type: "string",
      default: "#"
    },
    stats: {
      type: "array",
      default: DEFAULT_STATS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
      stats
    } = attributes;
    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        stats: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "cta-hero-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Badge",
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Text",
            value: badgeText,
            onChange: v => setAttributes({
              badgeText: v
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Title",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title \u2014 Start",
            value: titleStart,
            onChange: v => setAttributes({
              titleStart: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title \u2014 Highlight (blue)",
            value: titleHighlight,
            onChange: v => setAttributes({
              titleHighlight: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Buttons",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button Text",
            value: primaryBtnText,
            onChange: v => setAttributes({
              primaryBtnText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button URL",
            value: primaryBtnUrl,
            onChange: v => setAttributes({
              primaryBtnUrl: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button Text",
            value: secondaryBtnText,
            onChange: v => setAttributes({
              secondaryBtnText: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button URL",
            value: secondaryBtnUrl,
            onChange: v => setAttributes({
              secondaryBtnUrl: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Stats",
          initialOpen: false,
          children: stats.map((stat, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${i + 1} — Value`,
              value: stat.value,
              onChange: v => updateStat(i, "value", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${i + 1} — Label`,
              value: stat.label,
              onChange: v => updateStat(i, "label", v)
            })]
          }, i))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "cta-hero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cta-hero-bg-glow"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cta-hero-dots",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cta-hero-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cta-hero-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-circle-dot"
            }), badgeText]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "cta-hero-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: v => setAttributes({
                titleStart: v
              }),
              placeholder: "Title start"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "cta-hero-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: v => setAttributes({
                  titleHighlight: v
                }),
                placeholder: "Highlight"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "cta-hero-description",
            value: description,
            onChange: v => setAttributes({
              description: v
            }),
            placeholder: "Add description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cta-hero-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: primaryBtnUrl,
              className: "cta-hero-btn-primary",
              children: [primaryBtnText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: secondaryBtnUrl,
              className: "cta-hero-btn-secondary",
              children: secondaryBtnText
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cta-hero-divider"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cta-hero-stats",
            children: stats.map((stat, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "cta-hero-stat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "cta-hero-stat-value",
                children: stat.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "cta-hero-stat-label",
                children: stat.label
              })]
            }, i))
          })]
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badgeText,
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl,
      stats
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "cta-hero fade-in-on-scroll",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cta-hero-bg-glow"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "cta-hero-dots",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "cta-hero-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cta-hero-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: "fa-solid fa-circle-dot"
          }), badgeText]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "cta-hero-title",
          children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "cta-hero-highlight",
            children: titleHighlight
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "cta-hero-description",
          children: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cta-hero-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: primaryBtnUrl,
            className: "cta-hero-btn-primary",
            children: [primaryBtnText, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: secondaryBtnUrl,
            className: "cta-hero-btn-secondary",
            children: secondaryBtnText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cta-hero-divider"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cta-hero-stats",
          children: stats.map((stat, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cta-hero-stat",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "cta-hero-stat-value",
              children: stat.value
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "cta-hero-stat-label",
              children: stat.label
            })]
          }, i))
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-23/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-23/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-23/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-23", {
  title: "Story Hero Banner",
  icon: "align-center",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "ABOUT US"
    },
    titleStart: {
      type: "string",
      default: "Our"
    },
    titleHighlight: {
      type: "string",
      default: "Story"
    },
    description: {
      type: "string",
      default: "From a single dream in 1980 to a trusted name across the Tri-State area. Discover the DNH Group journey through the decades."
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      description
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "story-hero-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "story-hero",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "story-hero-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "story-hero-subtitle",
            children: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "story-hero-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Title start"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "story-hero-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Title highlight"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "story-hero-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      description
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "story-hero fade-in-on-scroll",
      "data-block": "story-hero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "story-hero-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "story-hero-subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "story-hero-title",
          children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "story-hero-highlight",
            children: titleHighlight
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "story-hero-description",
          children: description
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-24/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-24/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-24/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_BADGES = [{
  icon: "fa-solid fa-circle-check",
  label: "Licensed & Insured",
  color: "#22a35a"
}, {
  icon: "fa-solid fa-shield-heart",
  label: "5-Year Warranty",
  color: "#3b5bdb"
}, {
  icon: "fa-solid fa-circle-check",
  label: "No Hidden Fees",
  color: "#d78d2f"
}];
const DEFAULT_CARDS = [{
  icon: "fa-regular fa-eye",
  title: "Our Vision",
  description: "To be the most trusted name in home improvement - where quality meets compassion."
}, {
  icon: "fa-regular fa-heart",
  title: "Our Promise",
  description: "To treat every home like our own and every customer like family."
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-24", {
  title: "Why Families Choose Us",
  icon: "groups",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "WHY FAMILIES CHOOSE US"
    },
    titleStart: {
      type: "string",
      default: "We're Not Just Contractors —"
    },
    titleHighlight: {
      type: "string",
      default: "We're Family"
    },
    descriptionOne: {
      type: "string",
      default: "When you invite DNH Group into your home, you're not just hiring a contractor - you're welcoming a team that genuinely cares. We understand that your home is more than walls and a roof; it's where memories are made, where children grow, and where life happens."
    },
    descriptionTwo: {
      type: "string",
      default: "For over 46 years, we've treated every project as if it were our own family's home. That means honest advice, fair pricing, meticulous attention to detail, and a promise to never cut corners. Because at the end of the day, your trust is our greatest reward."
    },
    imageUrl: {
      type: "string",
      default: ""
    },
    imageAlt: {
      type: "string",
      default: "Family at home"
    },
    testimonialQuote: {
      type: "string",
      default: '"DNH transformed our house into the home of our dreams."'
    },
    testimonialAuthor: {
      type: "string",
      default: "- The Richardson Family"
    },
    trustBadges: {
      type: "array",
      default: DEFAULT_BADGES
    },
    infoCards: {
      type: "array",
      default: DEFAULT_CARDS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      descriptionOne,
      descriptionTwo,
      imageUrl,
      imageAlt,
      testimonialQuote,
      testimonialAuthor,
      trustBadges,
      infoCards
    } = attributes;
    const updateBadge = (index, field, value) => {
      const next = [...trustBadges];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        trustBadges: next
      });
    };
    const addBadge = () => {
      setAttributes({
        trustBadges: [...trustBadges, {
          icon: "fa-solid fa-circle-check",
          label: "New Badge",
          color: "#3b5bdb"
        }]
      });
    };
    const removeBadge = index => {
      if (trustBadges.length <= 1) return;
      setAttributes({
        trustBadges: trustBadges.filter((_, i) => i !== index)
      });
    };
    const updateCard = (index, field, value) => {
      const next = [...infoCards];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        infoCards: next
      });
    };
    const addCard = () => {
      setAttributes({
        infoCards: [...infoCards, {
          icon: "fa-regular fa-star",
          title: "New Card",
          description: "Card description"
        }]
      });
    };
    const removeCard = index => {
      if (infoCards.length <= 1) return;
      setAttributes({
        infoCards: infoCards.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "family-trust-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Main Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description Paragraph 1",
            value: descriptionOne,
            onChange: value => setAttributes({
              descriptionOne: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description Paragraph 2",
            value: descriptionTwo,
            onChange: value => setAttributes({
              descriptionTwo: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image & Testimonial",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => setAttributes({
                imageUrl: media.url,
                imageAlt: media.alt || imageAlt
              }),
              allowedTypes: ["image"],
              value: imageUrl,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                isPrimary: true,
                onClick: open,
                children: imageUrl ? "Change Image" : "Set Image"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Image Alt",
            value: imageAlt,
            onChange: value => setAttributes({
              imageAlt: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Testimonial Quote",
            value: testimonialQuote,
            onChange: value => setAttributes({
              testimonialQuote: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Testimonial Author",
            value: testimonialAuthor,
            onChange: value => setAttributes({
              testimonialAuthor: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Trust Badges (${trustBadges.length})`,
          initialOpen: false,
          children: [trustBadges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Badge ${index + 1} Icon (FA class)`,
              value: badge.icon,
              onChange: value => updateBadge(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Badge ${index + 1} Label`,
              value: badge.label,
              onChange: value => updateBadge(index, "label", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Badge ${index + 1} Color (hex)`,
              value: badge.color,
              onChange: value => updateBadge(index, "color", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeBadge(index),
              disabled: trustBadges.length <= 1,
              children: "Remove Badge"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addBadge,
            children: "+ Add Badge"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Info Cards (${infoCards.length})`,
          initialOpen: false,
          children: [infoCards.map((card, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Card ${index + 1} Icon (FA class)`,
              value: card.icon,
              onChange: value => updateCard(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Card ${index + 1} Title`,
              value: card.title,
              onChange: value => updateCard(index, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Card ${index + 1} Description`,
              value: card.description,
              onChange: value => updateCard(index, "description", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeCard(index),
              disabled: infoCards.length <= 1,
              children: "Remove Card"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addCard,
            children: "+ Add Card"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "family-trust",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "family-trust-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "family-trust-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "family-trust-image-wrap",
              children: [imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: imageUrl,
                alt: imageAlt,
                className: "family-trust-image"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "family-trust-image-placeholder",
                children: "Set image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "family-trust-testimonial",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "family-trust-testimonial-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa-solid fa-check"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "family-trust-testimonial-quote",
                    children: testimonialQuote
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "family-trust-testimonial-author",
                    children: testimonialAuthor
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "family-trust-right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "family-trust-subtitle",
              children: subtitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "family-trust-title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleStart,
                onChange: value => setAttributes({
                  titleStart: value
                }),
                placeholder: "Title start"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "family-trust-title-highlight",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "span",
                  value: titleHighlight,
                  onChange: value => setAttributes({
                    titleHighlight: value
                  }),
                  placeholder: "Title highlight"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "family-trust-description",
              value: descriptionOne,
              onChange: value => setAttributes({
                descriptionOne: value
              }),
              placeholder: "Description paragraph 1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "family-trust-description family-trust-description-second",
              value: descriptionTwo,
              onChange: value => setAttributes({
                descriptionTwo: value
              }),
              placeholder: "Description paragraph 2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "family-trust-badges",
              children: trustBadges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "family-trust-badge",
                style: {
                  color: badge.color
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: badge.icon
                }), badge.label]
              }, index))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "family-trust-cards",
              children: infoCards.map((card, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "family-trust-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "family-trust-card-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: card.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "family-trust-card-title",
                  children: card.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "family-trust-card-description",
                  children: card.description
                })]
              }, index))
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      descriptionOne,
      descriptionTwo,
      imageUrl,
      imageAlt,
      testimonialQuote,
      testimonialAuthor,
      trustBadges,
      infoCards
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "family-trust fade-in-on-scroll",
      "data-block": "family-trust",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "family-trust-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "family-trust-left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "family-trust-image-wrap",
            children: [imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: imageUrl,
              alt: imageAlt,
              className: "family-trust-image"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "family-trust-testimonial",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "family-trust-testimonial-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fa-solid fa-check"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "family-trust-testimonial-quote",
                  children: testimonialQuote
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "family-trust-testimonial-author",
                  children: testimonialAuthor
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "family-trust-right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "family-trust-subtitle",
            children: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "family-trust-title",
            children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "family-trust-title-highlight",
              children: titleHighlight
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "family-trust-description",
            children: descriptionOne
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "family-trust-description family-trust-description-second",
            children: descriptionTwo
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "family-trust-badges",
            children: trustBadges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "family-trust-badge",
              style: {
                color: badge.color
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: badge.icon
              }), badge.label]
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "family-trust-cards",
            children: infoCards.map((card, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "family-trust-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "family-trust-card-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: card.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "family-trust-card-title",
                children: card.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "family-trust-card-description",
                children: card.description
              })]
            }, index))
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-25/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-25/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-25/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_ITEMS = [{
  year: "1980",
  tag: "Foundation Laid",
  title: "The Dream Begins",
  description: "Our founder started with one goal: help every family create a home they truly love.",
  imageUrl: "",
  imageAlt: "Foundation period"
}, {
  year: "1990",
  tag: "Expertise Gained",
  title: "A Decade of Learning",
  description: "Ten years of hands-on projects shaped our process and raised our quality standards.",
  imageUrl: "",
  imageAlt: "Expertise period"
}, {
  year: "2000",
  tag: "Regional Growth",
  title: "Serving More Families",
  description: "We expanded across neighborhoods while keeping the same family-first mindset.",
  imageUrl: "",
  imageAlt: "Growth period"
}, {
  year: "2020",
  tag: "Legacy of Trust",
  title: "Four Decades Strong",
  description: "Today, we continue building lasting relationships through honest work and care.",
  imageUrl: "",
  imageAlt: "Legacy period"
}];
const getItemImageUrl = item => item?.imageUrl || "";
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-25", {
  title: "Journey Timeline",
  icon: "schedule",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "OUR JOURNEY"
    },
    titleStart: {
      type: "string",
      default: "Four Decades of"
    },
    titleHighlight: {
      type: "string",
      default: "Excellence"
    },
    description: {
      type: "string",
      default: "Scroll to explore our journey from a single dream to a legacy of trust."
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      description,
      items
    } = attributes;
    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        items: next
      });
    };
    const updateItemPhoto = (index, media) => {
      updateItem(index, "imageUrl", media.url);
    };
    const addItem = () => {
      setAttributes({
        items: [...items, {
          year: "2030",
          tag: "New Milestone",
          title: "New Chapter",
          description: "Describe this milestone.",
          imageUrl: "",
          imageAlt: "Milestone image"
        }]
      });
    };
    const removeItem = index => {
      if (items.length <= 1) return;
      setAttributes({
        items: items.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "journey-timeline-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Timeline Items (${items.length})`,
          initialOpen: false,
          children: [items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1.2rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Year`,
              value: item.year,
              onChange: value => updateItem(index, "year", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Tag`,
              value: item.tag,
              onChange: value => updateItem(index, "tag", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Title`,
              value: item.title,
              onChange: value => updateItem(index, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Description`,
              value: item.description,
              onChange: value => updateItem(index, "description", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateItemPhoto(index, media),
                allowedTypes: ["image"],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  isSecondary: true,
                  isSmall: true,
                  onClick: open,
                  children: getItemImageUrl(item) ? "Change Image" : "Set Image"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Image Alt`,
              value: item.imageAlt,
              onChange: value => updateItem(index, "imageAlt", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeItem(index),
              disabled: items.length <= 1,
              children: "Remove Item"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addItem,
            children: "+ Add Item"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "journey-timeline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "journey-timeline-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "journey-timeline-subtitle",
            children: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "journey-timeline-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Title start"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "journey-timeline-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Title highlight"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "journey-timeline-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "journey-timeline-track",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "journey-line",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "journey-line-fill"
            })
          }), items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `journey-item ${index % 2 ? "is-right" : "is-left"} is-visible`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "journey-item-card",
              children: [item.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: item.imageUrl,
                alt: item.imageAlt,
                className: "journey-item-image"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "journey-item-image journey-item-image-placeholder",
                children: "Set image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "journey-item-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "journey-item-tag",
                  children: item.tag
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "journey-item-title",
                  children: item.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "journey-item-description",
                  children: item.description
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "journey-item-node",
              children: item.year
            })]
          }, index))]
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      description,
      items
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "journey-timeline fade-in-on-scroll",
      "data-journey-timeline": true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "journey-timeline-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "journey-timeline-subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "journey-timeline-title",
          children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "journey-timeline-highlight",
            children: titleHighlight
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "journey-timeline-description",
          children: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "journey-timeline-track",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "journey-line",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "journey-line-fill",
            "data-journey-fill": true
          })
        }), items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `journey-item ${index % 2 ? "is-right" : "is-left"}`,
          "data-journey-item": true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "journey-item-card",
            children: [item.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: item.imageUrl,
              alt: item.imageAlt,
              className: "journey-item-image"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "journey-item-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "journey-item-tag",
                children: item.tag
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "journey-item-title",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "journey-item-description",
                children: item.description
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "journey-item-node",
            children: item.year
          })]
        }, index))]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-26/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-26/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-26/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-26", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    titleStart: {
      type: "string",
      default: "Ready to Start Your"
    },
    titleHighlight: {
      type: "string",
      default: "Project?"
    },
    description: {
      type: "string",
      default: "Join thousands of satisfied homeowners who trust DNH Group for their home improvement needs."
    },
    primaryBtnText: {
      type: "string",
      default: "Get Your Free Quote"
    },
    primaryBtnUrl: {
      type: "string",
      default: "#"
    },
    secondaryBtnText: {
      type: "string",
      default: "Book a Consultation"
    },
    secondaryBtnUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "project-cta-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Text",
            value: primaryBtnText,
            onChange: value => setAttributes({
              primaryBtnText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "URL",
            value: primaryBtnUrl,
            onChange: value => setAttributes({
              primaryBtnUrl: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Secondary Button",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Text",
            value: secondaryBtnText,
            onChange: value => setAttributes({
              secondaryBtnText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "URL",
            value: secondaryBtnUrl,
            onChange: value => setAttributes({
              secondaryBtnUrl: value
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "project-cta",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "project-cta-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "project-cta-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Title start"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "project-cta-title-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Highlighted word"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "project-cta-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "project-cta-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "project-cta-btn project-cta-btn-primary",
              href: primaryBtnUrl,
              children: [primaryBtnText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              className: "project-cta-btn project-cta-btn-secondary",
              href: secondaryBtnUrl,
              children: secondaryBtnText
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      titleStart,
      titleHighlight,
      description,
      primaryBtnText,
      primaryBtnUrl,
      secondaryBtnText,
      secondaryBtnUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "project-cta fade-in-on-scroll",
      "data-block": "project-cta",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "project-cta-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "project-cta-title",
          children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "project-cta-title-highlight",
            children: titleHighlight
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "project-cta-description",
          children: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "project-cta-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "project-cta-btn project-cta-btn-primary",
            href: primaryBtnUrl,
            children: [primaryBtnText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "project-cta-btn project-cta-btn-secondary",
            href: secondaryBtnUrl,
            children: secondaryBtnText
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-27/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-27/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-27/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const DEFAULT_MEMBERS = [{
  name: "David Harrison",
  role: "Founder & CEO",
  department: "Leadership",
  experience: "40+ Years Experience",
  about: "David founded DNH Group in 1980 with a vision to provide honest, quality home improvement services.",
  specialties: "Strategic Leadership, Business Development, Customer Relations",
  certifications: "Licensed General Contractor, EPA Lead-Safe Certified",
  email: "david@dnhgroup.com",
  phone: "(555) 123-4501",
  photoUrl: "",
  imageUrl: "",
  imageAlt: "David Harrison"
}, {
  name: "Michael Harrison",
  role: "President & COO",
  department: "Leadership",
  experience: "24+ Years Experience",
  about: "Michael oversees company operations and ensures every project meets DNH Group quality standards.",
  specialties: "Operational Excellence, Team Leadership",
  certifications: "Licensed General Contractor",
  email: "michael@dnhgroup.com",
  phone: "(555) 123-4502",
  photoUrl: "",
  imageUrl: "",
  imageAlt: "Michael Harrison"
}, {
  name: "Sarah Harrison-Cohen",
  role: "Vice President of Sales",
  department: "Sales",
  experience: "18+ Years Experience",
  about: "Sarah leads the sales strategy and guides homeowners through the renovation planning process.",
  specialties: "Sales Strategy, Client Advisory",
  certifications: "Certified Home Improvement Consultant",
  email: "sarah@dnhgroup.com",
  phone: "(555) 123-4503",
  photoUrl: "",
  imageUrl: "",
  imageAlt: "Sarah Harrison-Cohen"
}, {
  name: "James Rodriguez",
  role: "Director of Operations",
  department: "Operations",
  experience: "15+ Years Experience",
  about: "James manages field execution, timelines and quality control across projects.",
  specialties: "Project Coordination, Quality Assurance",
  certifications: "OSHA 30, EPA Lead-Safe Certified",
  email: "james@dnhgroup.com",
  phone: "(555) 123-4504",
  photoUrl: "",
  imageUrl: "",
  imageAlt: "James Rodriguez"
}];
const DEFAULT_FILTERS = ["All", "Leadership", "Operations", "Sales", "Project Management", "Painting", "Remodeling", "Roofing"];
const getMemberImageUrl = member => member?.photoUrl || member?.imageUrl || "";
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-27", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  attributes: {
    filters: {
      type: "array",
      default: DEFAULT_FILTERS
    },
    members: {
      type: "array",
      default: DEFAULT_MEMBERS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      filters,
      members
    } = attributes;
    const [activeFilter, setActiveFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(filters[0] || "All");
    const updateFilter = (index, value) => {
      const next = [...filters];
      next[index] = value;
      setAttributes({
        filters: next
      });
      if (index === 0 && activeFilter === "All" && value) {
        setActiveFilter(value);
      }
    };
    const addFilter = () => {
      setAttributes({
        filters: [...filters, "New Department"]
      });
    };
    const removeFilter = index => {
      if (filters.length <= 1) {
        return;
      }
      const toRemove = filters[index];
      const next = filters.filter((_, i) => i !== index);
      setAttributes({
        filters: next
      });
      if (activeFilter === toRemove) {
        setActiveFilter(next[0] || "All");
      }
    };
    const updateMember = (index, field, value) => {
      const next = [...members];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        members: next
      });
    };
    const updateMemberPhoto = (index, media) => {
      if (!media?.url) {
        return;
      }
      const next = [...members];
      next[index] = {
        ...next[index],
        photoUrl: media.url,
        imageUrl: media.url,
        imageAlt: media.alt || media.title || "Team member"
      };
      setAttributes({
        members: next
      });
    };
    const addMember = () => {
      setAttributes({
        members: [...members, {
          name: "New Member",
          role: "Team Role",
          department: "Operations",
          experience: "10+ Years Experience",
          about: "Write a short professional bio.",
          specialties: "Specialty 1, Specialty 2",
          certifications: "Certification 1",
          email: "member@company.com",
          phone: "(555) 123-4567",
          photoUrl: "",
          imageUrl: "",
          imageAlt: "New Member"
        }]
      });
    };
    const removeMember = index => {
      if (members.length <= 1) {
        return;
      }
      setAttributes({
        members: members.filter((_, i) => i !== index)
      });
    };
    const visibleMembers = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
      const normalized = (activeFilter || "").trim().toLowerCase();
      if (!normalized || normalized === "all") {
        return members;
      }
      return members.filter(member => {
        const dep = (member.department || "").trim().toLowerCase();
        return dep === normalized;
      });
    }, [activeFilter, members]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "team-members-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Filters (${filters.length})`,
          initialOpen: true,
          children: [filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "0.8rem",
              paddingBottom: "0.8rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Filter ${index + 1}`,
              value: filter,
              onChange: value => updateFilter(index, value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              isSmall: true,
              disabled: filters.length <= 1,
              onClick: () => removeFilter(index),
              children: "Remove filter"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addFilter,
            children: "Add filter"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Members (${members.length})`,
          initialOpen: false,
          children: [members.map((member, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "1.2rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateMemberPhoto(index, media),
                allowedTypes: ["image"],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: open,
                  isSecondary: true,
                  children: getMemberImageUrl(member) ? "Change image" : "Add image"
                })
              })
            }), getMemberImageUrl(member) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "team-member-controls-preview",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: getMemberImageUrl(member),
                alt: member.imageAlt || member.name,
                className: "team-member-controls-preview-image"
              })
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Name",
              value: member.name,
              onChange: value => updateMember(index, "name", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Role",
              value: member.role,
              onChange: value => updateMember(index, "role", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Department (must match a filter label)",
              value: member.department,
              onChange: value => updateMember(index, "department", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Experience",
              value: member.experience,
              onChange: value => updateMember(index, "experience", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "About",
              value: member.about || "",
              onChange: value => updateMember(index, "about", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Specialties (comma separated)",
              value: member.specialties || "",
              onChange: value => updateMember(index, "specialties", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Certifications (comma separated)",
              value: member.certifications || "",
              onChange: value => updateMember(index, "certifications", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Email",
              value: member.email || "",
              onChange: value => updateMember(index, "email", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Phone",
              value: member.phone || "",
              onChange: value => updateMember(index, "phone", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Image alt",
              value: member.imageAlt,
              onChange: value => updateMember(index, "imageAlt", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              isSmall: true,
              disabled: members.length <= 1,
              onClick: () => removeMember(index),
              children: "Remove member"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addMember,
            children: "Add member"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "team-members-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "team-members-filters",
          role: "tablist",
          "aria-label": "Team filters",
          children: filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            type: "button",
            className: `team-filter-pill ${(activeFilter || "").toLowerCase() === (filter || "").toLowerCase() ? "is-active" : ""}`,
            onClick: () => setActiveFilter(filter),
            children: filter
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "team-members-grid",
          children: visibleMembers.map((member, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
            className: "team-member-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "team-member-media",
              children: [getMemberImageUrl(member) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: getMemberImageUrl(member),
                alt: member.imageAlt || member.name,
                className: "team-member-image"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "team-member-image team-member-image-placeholder",
                children: "Add image"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "team-member-department",
                children: member.department
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "team-member-hover-action",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  type: "button",
                  className: "team-member-view-profile-btn",
                  children: "View Profile"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "team-member-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h3",
                className: "team-member-name",
                value: member.name,
                onChange: value => updateMember(index, "name", value),
                placeholder: "Member name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "team-member-role",
                value: member.role,
                onChange: value => updateMember(index, "role", value),
                placeholder: "Member role"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "team-member-experience",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "fa-regular fa-user"
                }), member.experience]
              })]
            })]
          }, index))
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      filters,
      members
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "team-members-block fade-in-on-scroll",
      "data-team-members": true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "team-members-filters",
        role: "tablist",
        "aria-label": "Team filters",
        children: filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: `team-filter-pill ${index === 0 ? "is-active" : ""}`,
          "data-team-filter": filter,
          children: filter
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "team-members-grid",
        "data-team-grid": true,
        children: members.map((member, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
          className: "team-member-card",
          "data-team-member": true,
          "data-team-department": member.department || "",
          "data-team-name": member.name || "",
          "data-team-role": member.role || "",
          "data-team-experience": member.experience || "",
          "data-team-about": member.about || "",
          "data-team-specialties": member.specialties || "",
          "data-team-certifications": member.certifications || "",
          "data-team-email": member.email || "",
          "data-team-phone": member.phone || "",
          "data-team-image": getMemberImageUrl(member),
          "data-team-image-alt": member.imageAlt || member.name || "Team member",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "team-member-media",
            children: [getMemberImageUrl(member) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: getMemberImageUrl(member),
              alt: member.imageAlt || member.name,
              className: "team-member-image"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "team-member-department",
              children: member.department
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "team-member-hover-action",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: "team-member-view-profile-btn",
                "data-team-view-profile": true,
                children: "View Profile"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "team-member-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "team-member-name",
              children: member.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "team-member-role",
              children: member.role
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "team-member-experience",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                className: "fa-regular fa-user"
              }), member.experience]
            })]
          })]
        }, index))
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-28/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-28/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-28/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_STATS = [{
  value: "150+",
  label: "Team Members"
}, {
  value: "25+",
  label: "Certified Professionals"
}, {
  value: "15",
  label: "Avg. Years Experience"
}, {
  value: "98%",
  label: "Employee Retention"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-28", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    stats: {
      type: "array",
      default: DEFAULT_STATS
    },
    ctaTitle: {
      type: "string",
      default: "Want to Join Our Team?"
    },
    ctaDescription: {
      type: "string",
      default: "We're always looking for talented, dedicated professionals who share our passion for excellence."
    },
    ctaButtonText: {
      type: "string",
      default: "View Career Opportunities"
    },
    ctaButtonUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      stats,
      ctaTitle,
      ctaDescription,
      ctaButtonText,
      ctaButtonUrl
    } = attributes;
    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        stats: next
      });
    };
    const addStat = () => {
      setAttributes({
        stats: [...stats, {
          value: "10+",
          label: "New Stat"
        }]
      });
    };
    const removeStat = index => {
      if (stats.length <= 1) {
        return;
      }
      setAttributes({
        stats: stats.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "team-join-cta-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Stats (${stats.length})`,
          initialOpen: true,
          children: [stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${index + 1} Value`,
              value: stat.value,
              onChange: value => updateStat(index, "value", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Stat ${index + 1} Label`,
              value: stat.label,
              onChange: value => updateStat(index, "label", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              isSmall: true,
              disabled: stats.length <= 1,
              onClick: () => removeStat(index),
              children: "Remove stat"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addStat,
            children: "Add stat"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "CTA Content",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "CTA Title",
            value: ctaTitle,
            onChange: value => setAttributes({
              ctaTitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "CTA Description",
            value: ctaDescription,
            onChange: value => setAttributes({
              ctaDescription: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: ctaButtonText,
            onChange: value => setAttributes({
              ctaButtonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: ctaButtonUrl,
            onChange: value => setAttributes({
              ctaButtonUrl: value
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "team-join-cta-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "team-join-stats-row",
          "data-count-group": true,
          children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "team-join-stat",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "team-join-stat-value",
              value: stat.value,
              onChange: value => updateStat(index, "value", value),
              placeholder: "150+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "team-join-stat-label",
              value: stat.label,
              onChange: value => updateStat(index, "label", value),
              placeholder: "Stat label"
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "team-join-cta-panel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "team-join-cta-title",
            value: ctaTitle,
            onChange: value => setAttributes({
              ctaTitle: value
            }),
            placeholder: "CTA title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "team-join-cta-description",
            value: ctaDescription,
            onChange: value => setAttributes({
              ctaDescription: value
            }),
            placeholder: "CTA description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: ctaButtonUrl || "#",
            className: "team-join-cta-button",
            children: ctaButtonText
          })]
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      stats,
      ctaTitle,
      ctaDescription,
      ctaButtonText,
      ctaButtonUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "team-join-cta-block fade-in-on-scroll",
      "data-block": "team-join-cta",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "team-join-stats-row",
        "data-count-group": true,
        children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "team-join-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "team-join-stat-value",
            "data-count": stat.value,
            children: stat.value
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "team-join-stat-label",
            children: stat.label
          })]
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "team-join-cta-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "team-join-cta-title",
          children: ctaTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "team-join-cta-description",
          children: ctaDescription
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          href: ctaButtonUrl || "#",
          className: "team-join-cta-button",
          children: ctaButtonText
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-29/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-29/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-29/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_STATS = [{
  icon: "fa-solid fa-users",
  value: "150+",
  label: "Team Members"
}, {
  icon: "fa-solid fa-star",
  value: "4.8/5",
  label: "Employee Rating"
}, {
  icon: "fa-solid fa-arrow-trend-up",
  value: "46",
  label: "Years in Business"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-29", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    badge: {
      type: "string",
      default: "JOIN OUR TEAM"
    },
    titleStart: {
      type: "string",
      default: "Build Your"
    },
    titleHighlight: {
      type: "string",
      default: "Career"
    },
    titleEnd: {
      type: "string",
      default: "With Us"
    },
    description: {
      type: "string",
      default: "Join a team that values craftsmanship, integrity, and growth. At DNH Group, we are not just building homes - we are building careers."
    },
    stats: {
      type: "array",
      default: DEFAULT_STATS
    },
    formTitle: {
      type: "string",
      default: "Get Job Alerts"
    },
    formDescription: {
      type: "string",
      default: "Be the first to know about new opportunities. Sign up for job alerts tailored to your interests."
    },
    inputPlaceholder: {
      type: "string",
      default: "Enter your email"
    },
    buttonText: {
      type: "string",
      default: "Subscribe to Alerts"
    },
    privacyText: {
      type: "string",
      default: "We respect your privacy. Unsubscribe anytime."
    },
    contactForm7Shortcode: {
      type: "string",
      default: ""
    },
    buttonUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      stats,
      formTitle,
      formDescription,
      inputPlaceholder,
      buttonText,
      privacyText,
      contactForm7Shortcode,
      buttonUrl
    } = attributes;
    const updateStat = (index, field, value) => {
      const next = [...stats];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        stats: next
      });
    };
    const addStat = () => {
      setAttributes({
        stats: [...stats, {
          icon: "fa-solid fa-chart-line",
          value: "10+",
          label: "New Stat"
        }]
      });
    };
    const removeStat = index => {
      if (stats.length <= 1) {
        return;
      }
      setAttributes({
        stats: stats.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "career-join-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Left Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title End",
            value: titleEnd,
            onChange: value => setAttributes({
              titleEnd: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Stats (${stats.length})`,
          initialOpen: false,
          children: [stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Icon class",
              value: stat.icon,
              onChange: value => updateStat(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Value",
              value: stat.value,
              onChange: value => updateStat(index, "value", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Label",
              value: stat.label,
              onChange: value => updateStat(index, "label", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              isSmall: true,
              disabled: stats.length <= 1,
              onClick: () => removeStat(index),
              children: "Remove stat"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addStat,
            children: "Add stat"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Right Card",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Card Title",
            value: formTitle,
            onChange: value => setAttributes({
              formTitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Card Description",
            value: formDescription,
            onChange: value => setAttributes({
              formDescription: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Input Placeholder",
            value: inputPlaceholder,
            onChange: value => setAttributes({
              inputPlaceholder: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: buttonText,
            onChange: value => setAttributes({
              buttonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: buttonUrl,
            onChange: value => setAttributes({
              buttonUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Privacy Text",
            value: privacyText,
            onChange: value => setAttributes({
              privacyText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Contact Form 7 Shortcode",
            value: contactForm7Shortcode,
            onChange: value => setAttributes({
              contactForm7Shortcode: value
            }),
            help: "Example: [contact-form-7 id=\"123\" title=\"Job Alerts\"]"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "career-join-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-join-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "career-join-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "career-join-badge",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-briefcase"
              }), badge]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "career-join-title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleStart,
                onChange: value => setAttributes({
                  titleStart: value
                }),
                placeholder: "Build Your"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "career-join-title-highlight",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "span",
                  value: titleHighlight,
                  onChange: value => setAttributes({
                    titleHighlight: value
                  }),
                  placeholder: "Career"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleEnd,
                onChange: value => setAttributes({
                  titleEnd: value
                }),
                placeholder: "With Us"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "career-join-description",
              value: description,
              onChange: value => setAttributes({
                description: value
              }),
              placeholder: "Add description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "career-join-stats",
              children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "career-join-stat",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "career-join-stat-icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: stat.icon
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "career-join-stat-value",
                    children: stat.value
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "career-join-stat-label",
                    children: stat.label
                  })]
                })]
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "career-join-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
              className: "career-join-card-title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-regular fa-bell"
              }), formTitle]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "career-join-card-description",
              children: formDescription
            }), contactForm7Shortcode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "career-join-cf7-preview",
              children: ["Contact Form 7 shortcode connected:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
                children: contactForm7Shortcode
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "email",
                className: "career-join-input",
                placeholder: inputPlaceholder,
                disabled: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                href: buttonUrl || "#",
                className: "career-join-button",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fa-regular fa-bell"
                }), buttonText]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "career-join-privacy",
                children: privacyText
              })]
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      titleEnd,
      description,
      stats,
      formTitle,
      formDescription,
      inputPlaceholder,
      buttonText,
      privacyText,
      buttonUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "career-join-block fade-in-on-scroll",
      "data-block": "career-join",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "career-join-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-join-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "career-join-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-briefcase"
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "career-join-title",
            children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "career-join-title-highlight",
              children: titleHighlight
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), titleEnd]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "career-join-description",
            children: description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "career-join-stats",
            children: stats.map((stat, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "career-join-stat",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "career-join-stat-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: stat.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "career-join-stat-value",
                  children: stat.value
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "career-join-stat-label",
                  children: stat.label
                })]
              })]
            }, index))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-join-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
            className: "career-join-card-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-regular fa-bell"
            }), formTitle]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "career-join-card-description",
            children: formDescription
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "email",
            className: "career-join-input",
            placeholder: inputPlaceholder
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: buttonUrl || "#",
            className: "career-join-button",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-regular fa-bell"
            }), buttonText]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "career-join-privacy",
            children: privacyText
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-3/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-3/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-3/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-3", {
  title: "Custom Block 3",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    backgroundImage: {
      type: "string",
      default: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png"
    },
    imagePosition: {
      type: "string",
      default: "right" // "right" or "left"
    },
    primary_btn_text: {
      type: "string",
      default: "Learn More"
    },
    primary_btn_link: {
      type: "string"
    },
    tertiary_btn_text: {
      type: "string",
      default: "Get Started"
    },
    tertiary_btn_link: {
      type: "string"
    },
    feature1_title: {
      type: "string"
    },
    feature1_description: {
      type: "string"
    },
    feature2_title: {
      type: "string"
    },
    feature2_description: {
      type: "string"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        backgroundImage: media.url
      });
    };

    // Blocchi container per la posizione immagine
    const ContainerLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "subtitle",
        value: subtitle,
        onChange: value => setAttributes({
          subtitle: value
        }),
        placeholder: "Add subtitle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "title",
        value: title,
        onChange: value => setAttributes({
          title: value
        }),
        placeholder: "Add title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "div",
        className: "description",
        value: description,
        onChange: value => setAttributes({
          description: value
        }),
        placeholder: "Add description"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "features",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "features-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title-small",
            value: feature1_title,
            onChange: value => setAttributes({
              feature1_title: value
            }),
            placeholder: "Add Feature 1 Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description-small",
            value: feature1_description,
            onChange: value => setAttributes({
              feature1_description: value
            }),
            placeholder: "Add Feature 1 Description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "features-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title-small",
            value: feature2_title,
            onChange: value => setAttributes({
              feature2_title: value
            }),
            placeholder: "Add Feature 2 Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description-small",
            value: feature2_description,
            onChange: value => setAttributes({
              feature2_description: value
            }),
            placeholder: "Add Feature 2 Description"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: primary_btn_link,
            onChange: value => setAttributes({
              primary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Tertiary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: tertiary_btn_text,
            onChange: value => setAttributes({
              tertiary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: tertiary_btn_link,
            onChange: value => setAttributes({
              tertiary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-primary",
          value: primary_btn_text,
          onChange: value => setAttributes({
            primary_btn_text: value
          }),
          placeholder: "Button Text",
          href: primary_btn_link
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "button",
          className: "btn-tertiary",
          value: tertiary_btn_text,
          onChange: value => setAttributes({
            tertiary_btn_text: value
          }),
          placeholder: "Button Text",
          href: tertiary_btn_link
        })]
      })]
    });
    const ContainerRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-right",
      style: {
        backgroundImage: `url(${backgroundImage})`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: backgroundImage,
        alt: "Block Image"
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: backgroundImage,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: "Select Image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: "Image Position (desktop)",
            value: imagePosition,
            options: [{
              label: "Right",
              value: "right"
            }, {
              label: "Left",
              value: "left"
            }],
            onChange: value => setAttributes({
              imagePosition: value
            }),
            help: "Choose the position of the image in desktop view."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "section-container section-type-3 image-position-{imagePosition}",
        children: imagePosition === "left" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [ContainerRight, ContainerLeft]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [ContainerLeft, ContainerRight]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      imagePosition,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description
    } = attributes;
    const ContainerLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "description",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          value: description,
          tagName: "div"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "features",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "features-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-small",
            children: feature1_title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: feature1_description,
              tagName: "div"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "features-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-small",
            children: feature2_title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description-small",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: feature2_description,
              tagName: "div"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "buttons",
        children: [primary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "btn-primary",
          href: primary_btn_link,
          children: primary_btn_text
        }), tertiary_btn_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
          className: "btn-tertiary",
          href: tertiary_btn_link,
          children: [tertiary_btn_text, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "material-symbols-outlined notranslate",
            children: "chevron_right"
          })]
        })]
      })]
    });
    const ContainerRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-right",
      style: {
        backgroundImage: `url(${backgroundImage})`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: backgroundImage,
        alt: "Block Image"
      })
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: `section-container section-type-3 image-position-${imagePosition}`,
      children: imagePosition === "left" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [ContainerRight, ContainerLeft]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [ContainerLeft, ContainerRight]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-30/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-30/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-30/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_ITEMS = [{
  icon: "fa-regular fa-heart",
  title: "Health Insurance",
  description: "Medical, dental, and vision coverage for you and your family",
  iconBg: "#fdf1f4",
  iconColor: "#cb5d7b"
}, {
  icon: "fa-solid fa-dollar-sign",
  title: "Competitive Pay",
  description: "Above-market wages with regular performance reviews",
  iconBg: "#ecfbf4",
  iconColor: "#4bbf7a"
}, {
  icon: "fa-solid fa-arrow-trend-up",
  title: "Career Growth",
  description: "Clear advancement paths and professional development",
  iconBg: "#eef3ff",
  iconColor: "#6f8ee7"
}, {
  icon: "fa-regular fa-clock",
  title: "Work-Life Balance",
  description: "Paid time off, holidays, and flexible scheduling options",
  iconBg: "#f4f0ff",
  iconColor: "#8f7be2"
}, {
  icon: "fa-regular fa-bookmark",
  title: "401k Matching",
  description: "Company-matched retirement savings plan",
  iconBg: "#fff8e7",
  iconColor: "#d2b254"
}, {
  icon: "fa-solid fa-graduation-cap",
  title: "Training & Development",
  description: "Ongoing training and certification programs",
  iconBg: "#eaf9fd",
  iconColor: "#62b6cc"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-30", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    badge: {
      type: "string",
      default: "WHY DNH GROUP"
    },
    titleStart: {
      type: "string",
      default: "More Than Just a"
    },
    titleHighlight: {
      type: "string",
      default: "Job"
    },
    description: {
      type: "string",
      default: "We believe in taking care of our team. Here is what you can expect when you join the DNH Group family."
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS
    },
    ctaText: {
      type: "string",
      default: "Ready to join a company that invests in you?"
    },
    ctaButtonText: {
      type: "string",
      default: "View Open Positions"
    },
    ctaButtonUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      items,
      ctaText,
      ctaButtonText,
      ctaButtonUrl
    } = attributes;
    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        items: next
      });
    };
    const addItem = () => {
      setAttributes({
        items: [...items, {
          icon: "fa-regular fa-star",
          title: "New Benefit",
          description: "Benefit description",
          iconBg: "#eef3ff",
          iconColor: "#6f8ee7"
        }]
      });
    };
    const removeItem = index => {
      if (items.length <= 1) {
        return;
      }
      setAttributes({
        items: items.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "career-benefits-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: value => setAttributes({
              titleStart: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: value => setAttributes({
              titleHighlight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Benefits (${items.length})`,
          initialOpen: false,
          children: [items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Icon class",
              value: item.icon,
              onChange: value => updateItem(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Title",
              value: item.title,
              onChange: value => updateItem(index, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Description",
              value: item.description,
              onChange: value => updateItem(index, "description", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Icon Background",
              value: item.iconBg,
              onChange: value => updateItem(index, "iconBg", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Icon Color",
              value: item.iconColor,
              onChange: value => updateItem(index, "iconColor", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSecondary: true,
              isDestructive: true,
              isSmall: true,
              disabled: items.length <= 1,
              onClick: () => removeItem(index),
              children: "Remove benefit"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addItem,
            children: "Add benefit"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Bottom CTA",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "CTA Text",
            value: ctaText,
            onChange: value => setAttributes({
              ctaText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "CTA Button Text",
            value: ctaButtonText,
            onChange: value => setAttributes({
              ctaButtonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "CTA Button URL",
            value: ctaButtonUrl,
            onChange: value => setAttributes({
              ctaButtonUrl: value
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "career-benefits-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-benefits-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "career-benefits-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "career-benefits-badge",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-wand-magic-sparkles"
              }), badge]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "career-benefits-title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleStart,
                onChange: value => setAttributes({
                  titleStart: value
                }),
                placeholder: "More Than Just a"
              }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "career-benefits-title-highlight",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "span",
                  value: titleHighlight,
                  onChange: value => setAttributes({
                    titleHighlight: value
                  }),
                  placeholder: "Job"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "career-benefits-description",
              value: description,
              onChange: value => setAttributes({
                description: value
              }),
              placeholder: "Add description"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "career-benefits-grid",
            children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "career-benefit-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "career-benefit-icon",
                style: {
                  backgroundColor: item.iconBg,
                  color: item.iconColor
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: item.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "career-benefit-title",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "career-benefit-description",
                children: item.description
              })]
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "career-benefits-cta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "career-benefits-cta-text",
              children: ctaText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: ctaButtonUrl || "#",
              className: "career-benefits-cta-button",
              children: [ctaButtonText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      items,
      ctaText,
      ctaButtonText,
      ctaButtonUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "career-benefits-block fade-in-on-scroll",
      "data-block": "career-benefits",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "career-benefits-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-benefits-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "career-benefits-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-wand-magic-sparkles"
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "career-benefits-title",
            children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "career-benefits-title-highlight",
              children: titleHighlight
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "career-benefits-description",
            children: description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "career-benefits-grid",
          children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "career-benefit-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "career-benefit-icon",
              style: {
                backgroundColor: item.iconBg,
                color: item.iconColor
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "career-benefit-title",
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "career-benefit-description",
              children: item.description
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "career-benefits-cta",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "career-benefits-cta-text",
            children: ctaText
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: ctaButtonUrl || "#",
            className: "career-benefits-cta-button",
            children: [ctaButtonText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-31/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-31/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-31/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const DEFAULT_FILTERS = [{
  label: "All Positions",
  count: "12"
}, {
  label: "Operations",
  count: "4"
}, {
  label: "Sales & Customer Service",
  count: "3"
}, {
  label: "Skilled Trades",
  count: "3"
}, {
  label: "Administrative",
  count: "2"
}];
const DEFAULT_JOBS = [{
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "2 days ago",
  title: "Project Manager - Residential Remodeling",
  location: "Cincinnati, OH",
  jobType: "Full-time",
  salary: "$65,000 - $85,000/year",
  category: "Operations",
  summary: "Lead residential remodeling projects from start to finish, ensuring quality, timeline, and budget goals are met.",
  requirements: "3+ years project management experience, Construction or remodeling background preferred, Strong organizational and communication skills",
  benefits: "Health insurance, 401k match, Paid time off, Company vehicle",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "1 week ago",
  title: "Senior Exterior Painter",
  location: "Louisville, KY",
  jobType: "Full-time",
  salary: "$22 - $28/hour",
  category: "Skilled Trades",
  summary: "Execute high-quality exterior painting projects safely and efficiently.",
  requirements: "2+ years painting experience, Knowledge of prep and finishing techniques, Valid driver's license",
  benefits: "Health insurance, Paid holidays, Career growth",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "3 days ago",
  title: "Sales Consultant - Home Improvement",
  location: "Indianapolis, IN",
  jobType: "Full-time",
  salary: "$50,000 - $90,000/year + Commission",
  category: "Sales & Customer Service",
  summary: "Guide homeowners through project planning and close high-value opportunities.",
  requirements: "2+ years consultative sales, Great communication, CRM familiarity",
  benefits: "Commission plan, Health insurance, Training",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Reviewing Applications",
  statusType: "review",
  postedAgo: "2 weeks ago",
  title: "Roofing Crew Lead",
  location: "Columbus, OH",
  jobType: "Full-time",
  salary: "$28 - $35/hour",
  category: "Skilled Trades",
  summary: "Coordinate roofing teams and maintain strict quality and safety standards.",
  requirements: "Lead experience, Roofing system knowledge, OSHA mindset",
  benefits: "Paid time off, Safety bonus, Advancement path",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "5 days ago",
  title: "Customer Service Representative",
  location: "Cincinnati, OH",
  jobType: "Full-time",
  salary: "$18 - $22/hour",
  category: "Sales & Customer Service",
  summary: "Support customers with scheduling, updates, and service excellence.",
  requirements: "Call center or customer support experience, Empathy and communication, Basic software skills",
  benefits: "Health insurance, PTO, Team culture",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "1 week ago",
  title: "Interior Remodeling Specialist",
  location: "Lexington, KY",
  jobType: "Full-time",
  salary: "$25 - $32/hour",
  category: "Skilled Trades",
  summary: "Deliver interior renovation projects with precision and craftsmanship.",
  requirements: "Remodeling experience, Tool proficiency, Team collaboration",
  benefits: "Paid holidays, Growth opportunities, Benefits package",
  ctaText: "Apply Now",
  ctaUrl: "#"
}, {
  status: "Position Closed",
  statusType: "closed",
  postedAgo: "3 weeks ago",
  title: "Operations Coordinator",
  location: "Cincinnati, OH",
  jobType: "Full-time",
  salary: "$45,000 - $55,000/year",
  category: "Operations",
  summary: "Coordinate scheduling, materials, and logistics to ensure smooth project execution.",
  requirements: "2+ years operations or logistics experience, Strong organizational skills, Proficiency in project management software",
  benefits: "Health insurance, 401k match, Paid time off, Professional development",
  ctaText: "Position Closed",
  ctaUrl: "#"
}, {
  status: "Actively Hiring",
  statusType: "active",
  postedAgo: "4 days ago",
  title: "Marketing Specialist",
  location: "Remote / Cincinnati, OH",
  jobType: "Full-time",
  salary: "$50,000 - $65,000/year",
  category: "Administrative",
  summary: "Manage campaigns, content, and lead generation initiatives.",
  requirements: "2+ years marketing experience, Content and analytics skills, Cross-team collaboration",
  benefits: "Remote flexibility, Health plan, Learning budget",
  ctaText: "Apply Now",
  ctaUrl: "#"
}];
const DEFAULT_REVIEWS = [{
  text: '"DNH Group truly cares about their employees. I have been here 5 years and have grown from a painter to a project manager. The opportunities are real."',
  name: "Michael T.",
  years: "5 years",
  stars: "5"
}, {
  text: '"Best company I have ever worked for. Great pay, amazing benefits, and the team feels like family. Management actually listens to us."',
  name: "Sarah K.",
  years: "3 years",
  stars: "5"
}, {
  text: '"Year-round work, fair pay, and they treat us with respect. After 8 years here, I would not work anywhere else."',
  name: "James R.",
  years: "8 years",
  stars: "5"
}];
const toList = value => String(value || "").split(",").map(item => item.trim()).filter(Boolean);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-31", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  attributes: {
    subtitle: {
      type: "string",
      default: "OPEN POSITIONS"
    },
    titleStart: {
      type: "string",
      default: "Find Your"
    },
    titleHighlight: {
      type: "string",
      default: "Perfect Role"
    },
    hiringCountText: {
      type: "string",
      default: "9 positions actively hiring"
    },
    filters: {
      type: "array",
      default: DEFAULT_FILTERS
    },
    jobs: {
      type: "array",
      default: DEFAULT_JOBS
    },
    reviewsTitle: {
      type: "string",
      default: "Employee Reviews"
    },
    reviews: {
      type: "array",
      default: DEFAULT_REVIEWS
    },
    referralTitle: {
      type: "string",
      default: "Referral Bonus"
    },
    referralText: {
      type: "string",
      default: "Know someone perfect for our team? Refer them and earn up to $500 when they are hired!"
    },
    referralButtonText: {
      type: "string",
      default: "Refer Someone"
    },
    referralButtonUrl: {
      type: "string",
      default: "#"
    },
    questionsTitle: {
      type: "string",
      default: "Questions?"
    },
    questionsText: {
      type: "string",
      default: "Our HR team is here to help with any questions about careers at DNH Group."
    },
    questionsEmail: {
      type: "string",
      default: "careers@dnhgroup.com"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      hiringCountText,
      filters,
      jobs,
      reviewsTitle,
      reviews,
      referralTitle,
      referralText,
      referralButtonText,
      referralButtonUrl,
      questionsTitle,
      questionsText,
      questionsEmail
    } = attributes;
    const [activeFilter, setActiveFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(filters[0]?.label || "All Positions");
    const [openIndex, setOpenIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const updateFilter = (index, field, value) => {
      const next = [...filters];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        filters: next
      });
    };
    const updateJob = (index, field, value) => {
      const next = [...jobs];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        jobs: next
      });
    };
    const visibleJobs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
      const normalized = String(activeFilter || "").trim().toLowerCase();
      if (!normalized || normalized === "all positions") {
        return jobs;
      }
      return jobs.filter(job => String(job.category || "").trim().toLowerCase() === normalized);
    }, [activeFilter, jobs]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "openings-board-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: v => setAttributes({
              subtitle: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Start",
            value: titleStart,
            onChange: v => setAttributes({
              titleStart: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title Highlight",
            value: titleHighlight,
            onChange: v => setAttributes({
              titleHighlight: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Hiring Count Text",
            value: hiringCountText,
            onChange: v => setAttributes({
              hiringCountText: v
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Filters (${filters.length})`,
          initialOpen: false,
          children: filters.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "0.8rem",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "0.8rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Label",
              value: item.label,
              onChange: v => updateFilter(index, "label", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Count",
              value: item.count,
              onChange: v => updateFilter(index, "count", v)
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Jobs (${jobs.length})`,
          initialOpen: false,
          children: jobs.map((job, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Title",
              value: job.title,
              onChange: v => updateJob(index, "title", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Category",
              value: job.category,
              onChange: v => updateJob(index, "category", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Status",
              value: job.status,
              onChange: v => updateJob(index, "status", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Status Type (active/review/closed)",
              value: job.statusType,
              onChange: v => updateJob(index, "statusType", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Posted Ago",
              value: job.postedAgo,
              onChange: v => updateJob(index, "postedAgo", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Location",
              value: job.location,
              onChange: v => updateJob(index, "location", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Job Type",
              value: job.jobType,
              onChange: v => updateJob(index, "jobType", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Salary",
              value: job.salary,
              onChange: v => updateJob(index, "salary", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Summary",
              value: job.summary,
              onChange: v => updateJob(index, "summary", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Requirements (comma separated)",
              value: job.requirements,
              onChange: v => updateJob(index, "requirements", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Benefits (comma separated)",
              value: job.benefits,
              onChange: v => updateJob(index, "benefits", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Button Text",
              value: job.ctaText,
              onChange: v => updateJob(index, "ctaText", v)
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
        className: "openings-board-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "openings-board-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "openings-board-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "openings-board-subtitle",
                children: subtitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
                className: "openings-board-title",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "span",
                  value: titleStart,
                  onChange: v => setAttributes({
                    titleStart: v
                  })
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "openings-board-title-highlight",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "span",
                    value: titleHighlight,
                    onChange: v => setAttributes({
                      titleHighlight: v
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
              className: "openings-board-count",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), hiringCountText]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "openings-board-filters",
            children: filters.map((f, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              type: "button",
              className: `openings-filter-pill ${String(activeFilter).toLowerCase() === String(f.label).toLowerCase() ? "is-active" : ""}`,
              onClick: () => setActiveFilter(f.label),
              children: [f.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                children: f.count
              })]
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "openings-board-grid",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "openings-board-list",
              children: visibleJobs.map((job, index) => {
                const isOpen = index === openIndex;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
                  className: `opening-card ${isOpen ? "is-open" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                    type: "button",
                    className: "opening-card-head",
                    onClick: () => setOpenIndex(isOpen ? -1 : index),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                      className: `opening-card-status is-${job.statusType || "active"}`,
                      children: [job.status, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        children: ["\u2022 ", job.postedAgo]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                      className: "opening-card-title",
                      children: job.title
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                      className: "opening-card-meta",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                        className: "fa-solid fa-location-dot"
                      }), job.location, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                        className: "fa-regular fa-briefcase"
                      }), job.jobType, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                        className: "fa-solid fa-dollar-sign"
                      }), job.salary]
                    })]
                  }), isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "opening-card-details",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                      className: "opening-card-summary",
                      children: job.summary
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "opening-card-columns",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                          children: "Requirements"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                          children: toList(job.requirements).map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                            children: r
                          }, i))
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                          children: "Benefits"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                          children: toList(job.benefits).map((b, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                            children: b
                          }, i))
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "opening-card-actions",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                        href: job.ctaUrl || "#",
                        className: "opening-apply-btn",
                        children: job.ctaText || "Apply Now"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                        type: "button",
                        className: "opening-share-btn",
                        children: "Share"
                      })]
                    })]
                  }) : null]
                }, index);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
              className: "openings-board-sidebar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "openings-reviews-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa-regular fa-star"
                  }), reviewsTitle]
                }), reviews.map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "openings-review-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                    className: "stars",
                    children: "\u2605\u2605\u2605\u2605\u2605"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                    className: "text",
                    children: r.text
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                    className: "meta",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      children: r.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                      children: r.years
                    })]
                  })]
                }, i))]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "openings-referral-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                  children: referralTitle
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  children: referralText
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: referralButtonUrl || "#",
                  children: referralButtonText
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "openings-questions-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                  children: questionsTitle
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  children: questionsText
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                  href: `mailto:${questionsEmail}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa-regular fa-envelope"
                  }), questionsEmail]
                })]
              })]
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      titleStart,
      titleHighlight,
      hiringCountText,
      filters,
      jobs,
      reviewsTitle,
      reviews,
      referralTitle,
      referralText,
      referralButtonText,
      referralButtonUrl,
      questionsTitle,
      questionsText,
      questionsEmail
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "openings-board-block fade-in-on-scroll",
      "data-career-openings": true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "openings-board-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "openings-board-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "openings-board-subtitle",
              children: subtitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
              className: "openings-board-title",
              children: [titleStart, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "openings-board-title-highlight",
                children: titleHighlight
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "openings-board-count",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {}), hiringCountText]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "openings-board-filters",
          children: filters.map((f, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            className: `openings-filter-pill ${i === 0 ? "is-active" : ""}`,
            "data-career-filter": f.label,
            children: [f.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: f.count
            })]
          }, i))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "openings-board-grid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "openings-board-list",
            children: jobs.map((job, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
              className: `opening-card ${index === 0 ? "is-open" : ""}`,
              "data-career-job": true,
              "data-career-category": job.category || "",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                type: "button",
                className: "opening-card-head",
                "data-career-toggle": true,
                "aria-expanded": index === 0 ? "true" : "false",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: `opening-card-status is-${job.statusType || "active"}`,
                  children: [job.status, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    children: ["\u2022 ", job.postedAgo]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                  className: "opening-card-title",
                  children: job.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: "opening-card-meta",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa-solid fa-location-dot"
                  }), job.location, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa-regular fa-briefcase"
                  }), job.jobType, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                    className: "fa-solid fa-dollar-sign"
                  }), job.salary]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "opening-card-details",
                "data-career-detail": true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "opening-card-summary",
                  children: job.summary
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "opening-card-columns",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                      children: "Requirements"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                      children: toList(job.requirements).map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                        children: r
                      }, i))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                      children: "Benefits"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                      children: toList(job.benefits).map((b, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                        children: b
                      }, i))
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "opening-card-actions",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                    href: job.ctaUrl || "#",
                    className: "opening-apply-btn",
                    children: job.ctaText || "Apply Now"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "opening-share-btn",
                    children: "Share"
                  })]
                })]
              })]
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
            className: "openings-board-sidebar",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "openings-reviews-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "fa-regular fa-star"
                }), reviewsTitle]
              }), reviews.map((r, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "openings-review-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "stars",
                  children: "\u2605\u2605\u2605\u2605\u2605"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "text",
                  children: r.text
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: "meta",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    children: r.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                    children: r.years
                  })]
                })]
              }, i))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "openings-referral-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                children: referralTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: referralText
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                href: referralButtonUrl || "#",
                children: referralButtonText
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "openings-questions-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                children: questionsTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                children: questionsText
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: `mailto:${questionsEmail}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "fa-regular fa-envelope"
                }), questionsEmail]
              })]
            })]
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-32/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-32/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-32/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-32", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    iconClass: {
      type: "string",
      default: "fa-regular fa-comment-dots"
    },
    title: {
      type: "string",
      default: "Still Have Questions?"
    },
    description: {
      type: "string",
      default: "Our friendly team is here to help. Reach out and we will get back to you within 24 hours."
    },
    primaryButtonText: {
      type: "string",
      default: "Contact Us"
    },
    primaryButtonUrl: {
      type: "string",
      default: "#"
    },
    phoneLabel: {
      type: "string",
      default: "(555) 123-4567"
    },
    phoneUrl: {
      type: "string",
      default: "tel:+15551234567"
    },
    emailLabel: {
      type: "string",
      default: "info@dnhgroup.com"
    },
    emailUrl: {
      type: "string",
      default: "mailto:info@dnhgroup.com"
    },
    hoursLabel: {
      type: "string",
      default: "Mon-Fri: 8AM-6PM"
    },
    hoursIconClass: {
      type: "string",
      default: "fa-regular fa-clock"
    },
    emailIconClass: {
      type: "string",
      default: "fa-regular fa-envelope"
    },
    phoneIconClass: {
      type: "string",
      default: "fa-solid fa-phone"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      iconClass,
      title,
      description,
      primaryButtonText,
      primaryButtonUrl,
      phoneLabel,
      phoneUrl,
      emailLabel,
      emailUrl,
      hoursLabel,
      hoursIconClass,
      emailIconClass,
      phoneIconClass
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "questions-cta-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Main Icon Class",
            value: iconClass,
            onChange: value => setAttributes({
              iconClass: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button Text",
            value: primaryButtonText,
            onChange: value => setAttributes({
              primaryButtonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button URL",
            value: primaryButtonUrl,
            onChange: value => setAttributes({
              primaryButtonUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Phone Label",
            value: phoneLabel,
            onChange: value => setAttributes({
              phoneLabel: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Phone URL",
            value: phoneUrl,
            onChange: value => setAttributes({
              phoneUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Phone Icon Class",
            value: phoneIconClass,
            onChange: value => setAttributes({
              phoneIconClass: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Email Label",
            value: emailLabel,
            onChange: value => setAttributes({
              emailLabel: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Email URL",
            value: emailUrl,
            onChange: value => setAttributes({
              emailUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Email Icon Class",
            value: emailIconClass,
            onChange: value => setAttributes({
              emailIconClass: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Hours Label",
            value: hoursLabel,
            onChange: value => setAttributes({
              hoursLabel: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Hours Icon Class",
            value: hoursIconClass,
            onChange: value => setAttributes({
              hoursIconClass: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "questions-cta-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "questions-cta-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "questions-cta-icon-wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: iconClass
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "questions-cta-title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Still Have Questions?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "questions-cta-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add support description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "questions-cta-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "questions-cta-button questions-cta-button-primary",
              href: primaryButtonUrl || "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: primaryButtonText
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "questions-cta-button questions-cta-button-secondary",
              href: phoneUrl || "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: phoneIconClass
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: phoneLabel
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "questions-cta-meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "questions-cta-meta-item",
              href: emailUrl || "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: emailIconClass
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: emailLabel
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "questions-cta-meta-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: hoursIconClass
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: hoursLabel
              })]
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      iconClass,
      title,
      description,
      primaryButtonText,
      primaryButtonUrl,
      phoneLabel,
      phoneUrl,
      emailLabel,
      emailUrl,
      hoursLabel,
      hoursIconClass,
      emailIconClass,
      phoneIconClass
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "questions-cta-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "questions-cta-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "questions-cta-icon-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: iconClass
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "questions-cta-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "questions-cta-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "questions-cta-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "questions-cta-button questions-cta-button-primary",
            href: primaryButtonUrl || "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: primaryButtonText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "questions-cta-button questions-cta-button-secondary",
            href: phoneUrl || "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: phoneIconClass
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: phoneLabel
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "questions-cta-meta",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "questions-cta-meta-item",
            href: emailUrl || "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: emailIconClass
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: emailLabel
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "questions-cta-meta-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: hoursIconClass
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: hoursLabel
            })]
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-33/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-33/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-33/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_ITEMS = [{
  iconClass: "fa-solid fa-wrench",
  title: "Our Services",
  description: "Explore the full range of home improvement services we offer.",
  url: "#"
}, {
  iconClass: "fa-regular fa-shield",
  title: "About DNH Group",
  description: "Learn about our history, values, and commitment to excellence.",
  url: "#"
}, {
  iconClass: "fa-regular fa-comment-dots",
  title: "Meet Our Team",
  description: "Get to know the dedicated professionals behind DNH Group.",
  url: "#"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-33", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  attributes: {
    items: {
      type: "array",
      default: DEFAULT_ITEMS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      items = []
    } = attributes;
    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        items: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "info-cards-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Cards (${items.length})`,
          initialOpen: true,
          children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #e0e0e0"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Card ${index + 1} Icon Class`,
              value: item.iconClass,
              onChange: value => updateItem(index, "iconClass", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "URL",
              value: item.url,
              onChange: value => updateItem(index, "url", value)
            })]
          }, index))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "info-cards-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "info-cards-grid",
          children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "info-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "info-card-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: item.iconClass
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              className: "info-card-title",
              value: item.title,
              onChange: value => updateItem(index, "title", value),
              placeholder: "Card title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "info-card-description",
              value: item.description,
              onChange: value => updateItem(index, "description", value),
              placeholder: "Card description"
            })]
          }, index))
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      items = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "info-cards-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "info-cards-grid",
        children: items.map((item, index) => {
          const content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "info-card-icon-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: item.iconClass
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "info-card-title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: item.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "p",
              className: "info-card-description",
              value: item.description
            })]
          });
          return item.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "info-card",
            href: item.url,
            children: content
          }, index) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("article", {
            className: "info-card",
            children: content
          }, index);
        })
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-34/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-34/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-34/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-34", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "FLEXIBLE PAYMENT OPTIONS"
    },
    badgeIcon: {
      type: "string",
      default: "fa-regular fa-circle-check"
    },
    titleStart: {
      type: "string",
      default: "Financing Made"
    },
    titleHighlight: {
      type: "string",
      default: "Simple"
    },
    description: {
      type: "string",
      default: "Transform your home without the stress. Our flexible financing options make it easy to get the improvements you need with payments that fit your budget."
    },
    primaryText: {
      type: "string",
      default: "Apply Now"
    },
    primaryUrl: {
      type: "string",
      default: "#"
    },
    secondaryText: {
      type: "string",
      default: "Check Eligibility"
    },
    secondaryUrl: {
      type: "string",
      default: "#"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "financing-hero-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Banner Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Icon Class",
            value: badgeIcon,
            onChange: value => setAttributes({
              badgeIcon: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button Text",
            value: primaryText,
            onChange: value => setAttributes({
              primaryText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button URL",
            value: primaryUrl,
            onChange: value => setAttributes({
              primaryUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button Text",
            value: secondaryText,
            onChange: value => setAttributes({
              secondaryText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button URL",
            value: secondaryUrl,
            onChange: value => setAttributes({
              secondaryUrl: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "financing-hero-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "financing-hero-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "financing-hero-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: badgeIcon
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "financing-hero-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Financing Made"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-hero-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Simple"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "financing-hero-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add financing description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "financing-hero-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "financing-hero-btn primary",
              href: primaryUrl || "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: primaryText
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              className: "financing-hero-btn secondary",
              href: secondaryUrl || "#",
              children: secondaryText
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "financing-hero-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "financing-hero-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "financing-hero-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: badgeIcon
          }), badge]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "financing-hero-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "financing-hero-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "financing-hero-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "financing-hero-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "financing-hero-btn primary",
            href: primaryUrl || "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: primaryText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "financing-hero-btn secondary",
            href: secondaryUrl || "#",
            children: secondaryText
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-35/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-35/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-35/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_ITEMS = [{
  iconClass: "fa-solid fa-check",
  title: "No Hidden Fees",
  description: "What you see is what you pay. Our quotes include everything with no surprise charges.",
  iconBg: "#60c274",
  cardTint: "#f6fff8"
}, {
  iconClass: "fa-regular fa-clock",
  title: "Quick Approval",
  description: "Get approved in minutes, not days. Our process keeps your project moving.",
  iconBg: "#5797ea",
  cardTint: "#f6faff"
}, {
  iconClass: "fa-regular fa-shield",
  title: "Secure & Confidential",
  description: "Your information is protected with bank-level security and strict privacy standards.",
  iconBg: "#7a4be5",
  cardTint: "#faf7ff"
}, {
  iconClass: "fa-solid fa-arrow-trend-up",
  title: "Build Your Credit",
  description: "On-time payments can help strengthen your score while upgrading your home.",
  iconBg: "#dd8b1f",
  cardTint: "#fffaf1"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-35", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "Why Choose DNH Financing"
    },
    badgeIcon: {
      type: "string",
      default: "fa-regular fa-circle-check"
    },
    titleStart: {
      type: "string",
      default: "Financing That Works"
    },
    titleHighlight: {
      type: "string",
      default: "For You"
    },
    description: {
      type: "string",
      default: "We have designed our financing options with your comfort in mind. No surprises, no stress - just simple, transparent solutions."
    },
    items: {
      type: "array",
      default: DEFAULT_ITEMS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      items = []
    } = attributes;
    const updateItem = (index, field, value) => {
      const next = [...items];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        items: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "financing-benefits-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Icon Class",
            value: badgeIcon,
            onChange: value => setAttributes({
              badgeIcon: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Cards (${items.length})`,
          initialOpen: false,
          children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Card ${index + 1} Icon`,
              value: item.iconClass,
              onChange: value => updateItem(index, "iconClass", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Icon Background",
              value: item.iconBg,
              onChange: value => updateItem(index, "iconBg", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Card Tint",
              value: item.cardTint,
              onChange: value => updateItem(index, "cardTint", value)
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "financing-benefits-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "financing-benefits-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "financing-benefits-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: badgeIcon
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "financing-benefits-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Financing That Works"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-benefits-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "For You"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "financing-benefits-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Section description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "financing-benefits-grid",
            children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "financing-benefit-card",
              style: {
                backgroundColor: item.cardTint || "#ffffff"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "financing-benefit-icon",
                style: {
                  backgroundColor: item.iconBg || "#5f77ea"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: item.iconClass
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h3",
                className: "financing-benefit-title",
                value: item.title,
                onChange: value => updateItem(index, "title", value),
                placeholder: "Card title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "financing-benefit-description",
                value: item.description,
                onChange: value => updateItem(index, "description", value),
                placeholder: "Card description"
              })]
            }, index))
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      items = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "financing-benefits-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "financing-benefits-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "financing-benefits-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: badgeIcon
          }), badge]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "financing-benefits-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "financing-benefits-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "financing-benefits-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "financing-benefits-grid",
          children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "financing-benefit-card",
            style: {
              backgroundColor: item.cardTint || "#ffffff"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-benefit-icon",
              style: {
                backgroundColor: item.iconBg || "#5f77ea"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: item.iconClass
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "financing-benefit-title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: item.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "p",
              className: "financing-benefit-description",
              value: item.description
            })]
          }, index))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-36/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-36/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-36/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_STEPS = [{
  number: "1",
  title: "Apply Online",
  description: "Complete a quick application in minutes.",
  accent: "#3f64ea"
}, {
  number: "2",
  title: "Get Approved",
  description: "Receive instant decision with multiple options.",
  accent: "#67addf"
}, {
  number: "3",
  title: "Choose Plan",
  description: "Pick terms that match your budget and timeline.",
  accent: "#65b9a2"
}, {
  number: "4",
  title: "Start Project",
  description: "Once approved, work begins right away.",
  accent: "#76c76d"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-36", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "Simple 4-Step Process"
    },
    badgeIcon: {
      type: "string",
      default: "fa-regular fa-clock"
    },
    titleStart: {
      type: "string",
      default: "How Financing"
    },
    titleHighlight: {
      type: "string",
      default: "Works"
    },
    description: {
      type: "string",
      default: "Getting started is easy. Our streamlined process lets you focus on your project, not paperwork."
    },
    steps: {
      type: "array",
      default: DEFAULT_STEPS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      steps = []
    } = attributes;
    const updateStep = (index, field, value) => {
      const next = [...steps];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        steps: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "financing-steps-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Icon Class",
            value: badgeIcon,
            onChange: value => setAttributes({
              badgeIcon: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Steps (${steps.length})`,
          initialOpen: false,
          children: steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Step ${index + 1} Number`,
              value: step.number,
              onChange: value => updateStep(index, "number", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Accent Color",
              value: step.accent,
              onChange: value => updateStep(index, "accent", value)
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "financing-steps-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "financing-steps-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "financing-steps-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: badgeIcon
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "financing-steps-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "How Financing"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-steps-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Works"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "financing-steps-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Process intro"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "financing-steps-grid",
            children: steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "financing-step-wrap",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
                className: "financing-step-card",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "financing-step-number",
                  style: {
                    backgroundColor: step.accent || "#5f77ea"
                  },
                  children: step.number
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h3",
                  className: "financing-step-title",
                  value: step.title,
                  onChange: value => updateStep(index, "title", value),
                  placeholder: "Step title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  className: "financing-step-description",
                  value: step.description,
                  onChange: value => updateStep(index, "description", value),
                  placeholder: "Step description"
                })]
              }), index < steps.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "financing-step-arrow",
                style: {
                  backgroundColor: step.accent || "#5f77ea"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fa-solid fa-arrow-right"
                })
              }) : null]
            }, index))
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      steps = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "financing-steps-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "financing-steps-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "financing-steps-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: badgeIcon
          }), badge]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "financing-steps-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "financing-steps-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "financing-steps-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "financing-steps-grid",
          children: steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "financing-step-wrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "financing-step-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "financing-step-number",
                style: {
                  backgroundColor: step.accent || "#5f77ea"
                },
                children: step.number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "financing-step-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: step.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "financing-step-description",
                value: step.description
              })]
            }), index < steps.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-step-arrow",
              style: {
                backgroundColor: step.accent || "#5f77ea"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })
            }) : null]
          }, index))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-37/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-37/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-37/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_OPTIONS = [{
  dotColor: "#8f63ea",
  topTitle: "Building Credit",
  topSubtitle: "Building Credit (<580)",
  mainTitle: "Options Available",
  details: "Specialized programs, In-house financing, Co-signer options",
  tags: "Service Finance,In-House Options",
  topTint: "#f6f1ff"
}, {
  dotColor: "#de8c2b",
  topTitle: "Fair Credit",
  topSubtitle: "Fair (580-669)",
  mainTitle: "As low as 9.99% APR",
  details: "Multiple options available, Higher approval rates, Flexible requirements",
  tags: "EnerBank,Service Finance,Synchrony",
  topTint: "#fff6ea"
}, {
  dotColor: "#5c8be8",
  topTitle: "Good Credit",
  topSubtitle: "Good (670-749)",
  mainTitle: "As low as 6.99% APR",
  details: "Competitive rates, Flexible terms, Quick approval",
  tags: "GreenSky,Synchrony,EnerBank",
  topTint: "#eff4ff"
}, {
  dotColor: "#69bf6a",
  topTitle: "Excellent Credit",
  topSubtitle: "Excellent (750+)",
  mainTitle: "As low as 0% APR",
  details: "0% intro APR for 12-18 months, Low fixed rates, Highest approval limits",
  tags: "GreenSky,Wells Fargo,Synchrony",
  topTint: "#effbf0"
}];
const toTags = value => String(value || "").split(",").map(item => item.trim()).filter(Boolean);
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-37", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "OPTIONS FOR EVERYONE"
    },
    title: {
      type: "string",
      default: "Financing For Every Credit Score"
    },
    description: {
      type: "string",
      default: "We work with multiple lenders to find the best option for you. Click on your credit range to see what is available."
    },
    options: {
      type: "array",
      default: DEFAULT_OPTIONS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      title,
      description,
      options = []
    } = attributes;
    const updateOption = (index, field, value) => {
      const next = [...options];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        options: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "credit-options-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Columns (${options.length})`,
          initialOpen: false,
          children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Column ${index + 1} Dot Color`,
              value: option.dotColor,
              onChange: value => updateOption(index, "dotColor", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Top Tint",
              value: option.topTint,
              onChange: value => updateOption(index, "topTint", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Tags (comma separated)",
              value: option.tags,
              onChange: value => updateOption(index, "tags", value)
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "credit-options-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "credit-options-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "credit-options-badge",
            children: badge
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "credit-options-title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Financing For Every Credit Score"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "credit-options-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Section description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "credit-options-grid",
            children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "credit-option-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "credit-option-top",
                style: {
                  backgroundColor: option.topTint || "#f5f7ff"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "credit-option-dot",
                  style: {
                    backgroundColor: option.dotColor || "#6a80e8"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h3",
                  className: "credit-option-top-title",
                  value: option.topTitle,
                  onChange: value => updateOption(index, "topTitle", value),
                  placeholder: "Top title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  className: "credit-option-top-subtitle",
                  value: option.topSubtitle,
                  onChange: value => updateOption(index, "topSubtitle", value),
                  placeholder: "Score range"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "credit-option-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h4",
                  className: "credit-option-main-title",
                  value: option.mainTitle,
                  onChange: value => updateOption(index, "mainTitle", value),
                  placeholder: "Main offer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  className: "credit-option-details",
                  value: option.details,
                  onChange: value => updateOption(index, "details", value),
                  placeholder: "Details"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "credit-option-tags",
                  children: toTags(option.tags).map((tag, tagIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: tag
                  }, tagIndex))
                })]
              })]
            }, index))
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      title,
      description,
      options = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "credit-options-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "credit-options-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "credit-options-badge",
          children: badge
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "credit-options-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "credit-options-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "credit-options-grid",
          children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "credit-option-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "credit-option-top",
              style: {
                backgroundColor: option.topTint || "#f5f7ff"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "credit-option-dot",
                style: {
                  backgroundColor: option.dotColor || "#6a80e8"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "credit-option-top-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: option.topTitle
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "credit-option-top-subtitle",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: option.topSubtitle
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "credit-option-body",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                className: "credit-option-main-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: option.mainTitle
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "credit-option-details",
                value: option.details
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "credit-option-tags",
                children: toTags(option.tags).map((tag, tagIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: tag
                }, tagIndex))
              })]
            })]
          }, index))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-38/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-38/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-38/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_PARTNERS = [{
  name: "GreenSky",
  minScore: "640+",
  aprRange: "0% - 12.99%",
  terms: "12 - 120 months",
  feature: "Same-day approval",
  accentColor: "#56a160",
  cardTint: "#edf9ef",
  scoreTint: "#e9f8ea",
  darkCard: false
}, {
  name: "Synchrony",
  minScore: "600+",
  aprRange: "0% - 14.99%",
  terms: "6 - 84 months",
  feature: "Promotional financing",
  accentColor: "#5d74df",
  cardTint: "#eff2ff",
  scoreTint: "#edf2ff",
  darkCard: false
}, {
  name: "Wells Fargo",
  minScore: "660+",
  aprRange: "6.99% - 15.99%",
  terms: "24 - 144 months",
  feature: "High loan limits",
  accentColor: "#cc4f5e",
  cardTint: "#fdeff1",
  scoreTint: "#fdeef1",
  darkCard: false
}, {
  name: "EnerBank",
  minScore: "620+",
  aprRange: "8.99% - 17.99%",
  terms: "12 - 180 months",
  feature: "Home improvement focus",
  accentColor: "#d07a3f",
  cardTint: "#fff3e9",
  scoreTint: "#fff2e8",
  darkCard: false
}, {
  name: "Service Finance",
  minScore: "580+",
  aprRange: "9.99% - 21.99%",
  terms: "12 - 96 months",
  feature: "Flexible credit options",
  accentColor: "#8b63de",
  cardTint: "#f4eeff",
  scoreTint: "#f5efff",
  darkCard: false
}, {
  name: "DNH In-House",
  minScore: "No Minimum",
  aprRange: "Varies",
  terms: "Custom",
  feature: "Personalized solutions",
  accentColor: "#d0d957",
  cardTint: "#233f8a",
  scoreTint: "#395198",
  darkCard: true
}];
const DEFAULT_TRUST_ITEMS = [{
  icon: "fa-solid fa-shield-halved",
  title: "Bank-Level Security",
  text: "Your data is protected",
  color: "#58c279",
  bg: "#ebfaf0"
}, {
  icon: "fa-regular fa-clock",
  title: "Fast Approval",
  text: "Decisions in minutes",
  color: "#5f82ec",
  bg: "#eff3ff"
}, {
  icon: "fa-solid fa-chart-line",
  title: "Build Credit",
  text: "Improve your score",
  color: "#9265e3",
  bg: "#f3edff"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-38", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "Trusted Partners"
    },
    titleStart: {
      type: "string",
      default: "Our Financing"
    },
    titleHighlight: {
      type: "string",
      default: "Partners"
    },
    description: {
      type: "string",
      default: "We partner with industry-leading lenders to offer you competitive rates and flexible terms that fit your budget."
    },
    partners: {
      type: "array",
      default: DEFAULT_PARTNERS
    },
    trustItems: {
      type: "array",
      default: DEFAULT_TRUST_ITEMS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      partners = [],
      trustItems = []
    } = attributes;
    const updatePartner = (index, field, value) => {
      const next = [...partners];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        partners: next
      });
    };
    const updateTrustItem = (index, field, value) => {
      const next = [...trustItems];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        trustItems: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "financing-partners-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Partners (${partners.length})`,
          initialOpen: false,
          children: partners.map((partner, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e4e7ef",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Partner ${index + 1} Name`,
              value: partner.name,
              onChange: value => updatePartner(index, "name", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Accent Color",
              value: partner.accentColor,
              onChange: value => updatePartner(index, "accentColor", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Card Tint",
              value: partner.cardTint,
              onChange: value => updatePartner(index, "cardTint", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Score Pill Tint",
              value: partner.scoreTint,
              onChange: value => updatePartner(index, "scoreTint", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: "Featured Dark Card",
              checked: !!partner.darkCard,
              onChange: value => updatePartner(index, "darkCard", value)
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Trust Items (${trustItems.length})`,
          initialOpen: false,
          children: trustItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #e4e7ef",
              paddingBottom: "0.95rem"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Icon Class`,
              value: item.icon,
              onChange: value => updateTrustItem(index, "icon", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Color",
              value: item.color,
              onChange: value => updateTrustItem(index, "color", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Background",
              value: item.bg,
              onChange: value => updateTrustItem(index, "bg", value)
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "financing-partners-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "financing-partners-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "financing-partners-badge",
            children: badge
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "financing-partners-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Our Financing"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "financing-partners-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Partners"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "financing-partners-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Section description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "financing-partners-grid",
            children: partners.map((partner, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: `financing-partner-card ${partner.darkCard ? "is-dark" : ""}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "financing-partner-name",
                style: {
                  backgroundColor: partner.darkCard ? "rgba(255,255,255,0.1)" : partner.cardTint || "#eef3ff",
                  color: partner.darkCard ? "#ffffff" : partner.accentColor || "#4f68d9"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h3",
                  value: partner.name,
                  onChange: value => updatePartner(index, "name", value),
                  placeholder: "Partner name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "financing-partner-stats",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "financing-partner-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Min. Credit Score"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "value-pill",
                    style: {
                      backgroundColor: partner.darkCard ? "rgba(255,255,255,0.2)" : partner.scoreTint || "#eff3ff",
                      color: partner.darkCard ? "#ffffff" : partner.accentColor || "#4f68d9"
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "span",
                      value: partner.minScore,
                      onChange: value => updatePartner(index, "minScore", value),
                      placeholder: "Credit score"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "financing-partner-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "APR Range"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "strong",
                    value: partner.aprRange,
                    onChange: value => updatePartner(index, "aprRange", value),
                    placeholder: "APR"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "financing-partner-row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Terms"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "strong",
                    value: partner.terms,
                    onChange: value => updatePartner(index, "terms", value),
                    placeholder: "Terms"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "financing-partner-note",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "dot",
                  style: {
                    backgroundColor: partner.darkCard ? "#d0d957" : partner.accentColor || "#4f68d9"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  value: partner.feature,
                  onChange: value => updatePartner(index, "feature", value),
                  placeholder: "Feature"
                })]
              })]
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "financing-partners-trust-row",
            children: trustItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "financing-trust-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "trust-icon",
                style: {
                  color: item.color || "#5f82ec",
                  backgroundColor: item.bg || "#eff3ff"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: item.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h4",
                  value: item.title,
                  onChange: value => updateTrustItem(index, "title", value),
                  placeholder: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  value: item.text,
                  onChange: value => updateTrustItem(index, "text", value),
                  placeholder: "Text"
                })]
              })]
            }, index))
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      titleStart,
      titleHighlight,
      description,
      partners = [],
      trustItems = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "financing-partners-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "financing-partners-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "financing-partners-badge",
          children: badge
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "financing-partners-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "financing-partners-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "financing-partners-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "financing-partners-grid",
          children: partners.map((partner, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: `financing-partner-card ${partner.darkCard ? "is-dark" : ""}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "financing-partner-name",
              style: {
                backgroundColor: partner.darkCard ? "rgba(255,255,255,0.1)" : partner.cardTint || "#eef3ff",
                color: partner.darkCard ? "#ffffff" : partner.accentColor || "#4f68d9"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: partner.name
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "financing-partner-stats",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "financing-partner-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Min. Credit Score"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "value-pill",
                  style: {
                    backgroundColor: partner.darkCard ? "rgba(255,255,255,0.2)" : partner.scoreTint || "#eff3ff",
                    color: partner.darkCard ? "#ffffff" : partner.accentColor || "#4f68d9"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    value: partner.minScore
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "financing-partner-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "APR Range"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    value: partner.aprRange
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "financing-partner-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Terms"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    value: partner.terms
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "financing-partner-note",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "dot",
                style: {
                  backgroundColor: partner.darkCard ? "#d0d957" : partner.accentColor || "#4f68d9"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                value: partner.feature
              })]
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "financing-partners-trust-row",
          children: trustItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "financing-trust-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "trust-icon",
              style: {
                color: item.color || "#5f82ec",
                backgroundColor: item.bg || "#eff3ff"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: item.icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: item.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                value: item.text
              })]
            })]
          }, index))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-39/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-39/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-39/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const currency = value => Number(value || 0).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
const calcPayment = (principal, months, apr) => {
  const p = Number(principal) || 0;
  const n = Math.max(1, Number(months) || 1);
  const r = (Number(apr) || 0) / 100 / 12;
  if (r === 0) {
    return p / n;
  }
  return p * (r / (1 - Math.pow(1 + r, -n)));
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-39", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "Payment Estimator"
    },
    badgeIcon: {
      type: "string",
      default: "fa-regular fa-calculator"
    },
    titleStart: {
      type: "string",
      default: "Calculate Your"
    },
    titleHighlight: {
      type: "string",
      default: "Monthly Payment"
    },
    description: {
      type: "string",
      default: "Get an instant estimate of what your monthly payment could look like. Adjust the sliders to explore different scenarios."
    },
    detailsTitle: {
      type: "string",
      default: "Project Details"
    },
    projectCost: {
      type: "number",
      default: 10000
    },
    projectMin: {
      type: "number",
      default: 1000
    },
    projectMax: {
      type: "number",
      default: 100000
    },
    loanTermMonths: {
      type: "number",
      default: 60
    },
    termMinMonths: {
      type: "number",
      default: 12
    },
    termMaxMonths: {
      type: "number",
      default: 144
    },
    aprPercent: {
      type: "number",
      default: 8.99
    },
    aprMin: {
      type: "number",
      default: 0
    },
    aprMax: {
      type: "number",
      default: 25
    },
    panelTitle: {
      type: "string",
      default: "Estimated Monthly Payment"
    },
    estimateDisclaimer: {
      type: "string",
      default: "*This is an estimate. Actual rates and terms may vary based on credit approval."
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      detailsTitle,
      projectCost,
      projectMin,
      projectMax,
      loanTermMonths,
      termMinMonths,
      termMaxMonths,
      aprPercent,
      aprMin,
      aprMax,
      panelTitle,
      estimateDisclaimer
    } = attributes;
    const payment = calcPayment(projectCost, loanTermMonths, aprPercent);
    const totalInterest = payment * loanTermMonths - projectCost;
    const costPct = (projectCost - projectMin) / Math.max(1, projectMax - projectMin) * 100;
    const termPct = (loanTermMonths - termMinMonths) / Math.max(1, termMaxMonths - termMinMonths) * 100;
    const aprPct = (aprPercent - aprMin) / Math.max(1, aprMax - aprMin) * 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "payment-estimator-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge",
            value: badge,
            onChange: value => setAttributes({
              badge: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Icon Class",
            value: badgeIcon,
            onChange: value => setAttributes({
              badgeIcon: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Right Panel Title",
            value: panelTitle,
            onChange: value => setAttributes({
              panelTitle: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Slider Limits",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: "Project Min",
            value: projectMin,
            onChange: value => setAttributes({
              projectMin: value || 0
            }),
            min: 0,
            max: 50000,
            step: 500
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: "Project Max",
            value: projectMax,
            onChange: value => setAttributes({
              projectMax: value || 1000
            }),
            min: 5000,
            max: 200000,
            step: 1000
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: "Term Min Months",
            value: termMinMonths,
            onChange: value => setAttributes({
              termMinMonths: value || 1
            }),
            min: 1,
            max: 120,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: "Term Max Months",
            value: termMaxMonths,
            onChange: value => setAttributes({
              termMaxMonths: value || 12
            }),
            min: 12,
            max: 240,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: "APR Max",
            value: aprMax,
            onChange: value => setAttributes({
              aprMax: value || 1
            }),
            min: 1,
            max: 40,
            step: 0.5
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "payment-estimator-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "payment-estimator-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "payment-estimator-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: badgeIcon
            }), badge]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "payment-estimator-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Calculate Your"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "payment-estimator-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Monthly Payment"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "payment-estimator-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Section description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "payment-estimator-shell",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "payment-estimator-controls",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fa-solid fa-dollar-sign"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "span",
                  value: detailsTitle,
                  onChange: value => setAttributes({
                    detailsTitle: value
                  }),
                  placeholder: "Project Details"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-row",
                style: {
                  "--pct": `${costPct}%`
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-head",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Project Cost"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: currency(projectCost)
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "range",
                  min: projectMin,
                  max: projectMax,
                  value: projectCost,
                  onChange: event => setAttributes({
                    projectCost: Number(event.target.value)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-limits",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: currency(projectMin)
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: currency(projectMax)
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-row",
                style: {
                  "--pct": `${termPct}%`
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-head",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Loan Term"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [loanTermMonths, " months"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "range",
                  min: termMinMonths,
                  max: termMaxMonths,
                  value: loanTermMonths,
                  onChange: event => setAttributes({
                    loanTermMonths: Number(event.target.value)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-limits",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    children: [Math.round(termMinMonths / 12), " year"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    children: [Math.round(termMaxMonths / 12), " years"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-row",
                style: {
                  "--pct": `${aprPct}%`
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-head",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Estimated APR"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [Number(aprPercent).toFixed(2), "%"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  type: "range",
                  min: aprMin,
                  max: aprMax,
                  step: "0.01",
                  value: aprPercent,
                  onChange: event => setAttributes({
                    aprPercent: Number(event.target.value)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "payment-slider-limits",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    children: [aprMin, "%"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    children: [aprMax, "%"]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("aside", {
              className: "payment-estimator-summary",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "summary-eyebrow",
                children: panelTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "summary-amount",
                children: currency(payment)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "summary-period",
                children: "per month"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "summary-breakdown",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Project Cost"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: currency(projectCost)
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Term Length"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [loanTermMonths, " months"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Estimated APR"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [Number(aprPercent).toFixed(2), "%"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    children: "Total Interest"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: currency(totalInterest)
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "summary-note",
                value: estimateDisclaimer,
                onChange: value => setAttributes({
                  estimateDisclaimer: value
                }),
                placeholder: "Disclaimer"
              })]
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      badgeIcon,
      titleStart,
      titleHighlight,
      description,
      detailsTitle,
      projectCost,
      projectMin,
      projectMax,
      loanTermMonths,
      termMinMonths,
      termMaxMonths,
      aprPercent,
      aprMin,
      aprMax,
      panelTitle,
      estimateDisclaimer
    } = attributes;
    const payment = calcPayment(projectCost, loanTermMonths, aprPercent);
    const totalInterest = payment * loanTermMonths - projectCost;
    const costPct = (projectCost - projectMin) / Math.max(1, projectMax - projectMin) * 100;
    const termPct = (loanTermMonths - termMinMonths) / Math.max(1, termMaxMonths - termMinMonths) * 100;
    const aprPct = (aprPercent - aprMin) / Math.max(1, aprMax - aprMin) * 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "payment-estimator-block",
      "data-payment-estimator": "1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "payment-estimator-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "payment-estimator-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: badgeIcon
          }), badge]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "payment-estimator-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "payment-estimator-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "payment-estimator-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "payment-estimator-shell",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "payment-estimator-controls",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-dollar-sign"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: detailsTitle
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "payment-slider-row",
              style: {
                "--pct": `${costPct}%`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-head",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Project Cost"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  className: "js-project-cost-value",
                  children: currency(projectCost)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "range",
                className: "js-project-cost",
                min: projectMin,
                max: projectMax,
                value: projectCost
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-limits",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: currency(projectMin)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: currency(projectMax)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "payment-slider-row",
              style: {
                "--pct": `${termPct}%`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-head",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Loan Term"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                  className: "js-term-value",
                  children: [loanTermMonths, " months"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "range",
                className: "js-loan-term",
                min: termMinMonths,
                max: termMaxMonths,
                value: loanTermMonths
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-limits",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  children: [Math.round(termMinMonths / 12), " year"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  children: [Math.round(termMaxMonths / 12), " years"]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "payment-slider-row",
              style: {
                "--pct": `${aprPct}%`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-head",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Estimated APR"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                  className: "js-apr-value",
                  children: [Number(aprPercent).toFixed(2), "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                type: "range",
                className: "js-apr",
                min: aprMin,
                max: aprMax,
                step: "0.01",
                value: aprPercent
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "payment-slider-limits",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  children: [aprMin, "%"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  children: [aprMax, "%"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("aside", {
            className: "payment-estimator-summary",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "summary-eyebrow",
              children: panelTitle
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "summary-amount js-payment-value",
              children: currency(payment)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "summary-period",
              children: "per month"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "summary-breakdown",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Project Cost"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  className: "js-breakdown-project-cost",
                  children: currency(projectCost)
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Term Length"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                  className: "js-breakdown-term",
                  children: [loanTermMonths, " months"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Estimated APR"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                  className: "js-breakdown-apr",
                  children: [Number(aprPercent).toFixed(2), "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: "Total Interest"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                  className: "js-breakdown-interest",
                  children: currency(totalInterest)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "p",
              className: "summary-note",
              value: estimateDisclaimer
            })]
          })]
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-4/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-4/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-4/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-4", {
  title: "Custom Block 4",
  icon: "smiley",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    backgroundImage: {
      type: "string"
    },
    primary_btn_text: {
      type: "string",
      default: "Learn More"
    },
    primary_btn_link: {
      type: "string"
    },
    tertiary_btn_text: {
      type: "string",
      default: "Get Started"
    },
    tertiary_btn_link: {
      type: "string"
    },
    feature1_description: {
      type: "string"
    },
    feature2_description: {
      type: "string"
    },
    feature3_description: {
      type: "string"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_description,
      feature2_description,
      feature3_description
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        backgroundImage: media.url
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: backgroundImage,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: "Select Image"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "section-container section-type-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "container-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            }),
            placeholder: "Add subtitle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Add title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "div",
            className: "description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "benefits-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "benefits-list-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "description",
                value: feature1_description,
                onChange: value => setAttributes({
                  feature1_description: value
                }),
                placeholder: "Add Text"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "benefits-list-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "description",
                value: feature2_description,
                onChange: value => setAttributes({
                  feature2_description: value
                }),
                placeholder: "Add Text"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "benefits-list-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: "description",
                value: feature3_description,
                onChange: value => setAttributes({
                  feature3_description: value
                }),
                placeholder: "Add Text"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
              title: "Primary Button Settings",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Button Text",
                value: primary_btn_text,
                onChange: value => setAttributes({
                  primary_btn_text: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
                label: "Button Link",
                value: primary_btn_link,
                onChange: value => setAttributes({
                  primary_btn_link: value
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
              title: "Tertiary Button Settings",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Button Text",
                value: tertiary_btn_text,
                onChange: value => setAttributes({
                  tertiary_btn_text: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
                label: "Button Link",
                value: tertiary_btn_link,
                onChange: value => setAttributes({
                  tertiary_btn_link: value
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "buttons",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "button",
              className: "btn-primary",
              value: primary_btn_text,
              onChange: value => setAttributes({
                primary_btn_text: value
              }),
              placeholder: "Button Text",
              href: primary_btn_link
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "button",
              className: "btn-tertiary",
              value: tertiary_btn_text,
              onChange: value => setAttributes({
                tertiary_btn_text: value
              }),
              placeholder: "Button Text",
              href: tertiary_btn_link
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container-right",
          style: {
            backgroundImage: `url(${backgroundImage})`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png",
            alt: "Placeholder Image"
          })
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      backgroundImage,
      primary_btn_link,
      primary_btn_text,
      tertiary_btn_text,
      tertiary_btn_link,
      feature1_description,
      feature2_description,
      feature3_description
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "description",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: description,
            tagName: "div"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "benefits-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "benefits-list-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              class: "fa-solid fa-cube"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "description-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: feature1_description,
                tagName: "div"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "benefits-list-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              class: "fa-solid fa-cube"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "description-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: feature2_description,
                tagName: "div"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "benefits-list-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              class: "fa-solid fa-cube"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "description-small",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                value: feature3_description,
                tagName: "div"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "btn-primary",
            href: primary_btn_link,
            children: primary_btn_text
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "btn-tertiary",
            href: tertiary_btn_link,
            children: [tertiary_btn_text, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "material-symbols-outlined notranslate",
              children: "chevron_right"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container-right",
        style: {
          backgroundImage: `url(${backgroundImage})`
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_4.png",
          alt: "Placeholder Image"
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-40/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-40/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-40/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_POINTS = [{
  iconClass: "fa-regular fa-circle-check",
  label: "No credit impact"
}, {
  iconClass: "fa-regular fa-clock",
  label: "Instant decision"
}, {
  iconClass: "fa-regular fa-shield",
  label: "Secure & confidential"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-40", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    iconClass: {
      type: "string",
      default: "fa-regular fa-circle-check"
    },
    title: {
      type: "string",
      default: "Ready to Get Started?"
    },
    description: {
      type: "string",
      default: "Apply now with no impact to your credit score. Get pre-qualified in minutes and start planning your dream home improvement project."
    },
    primaryText: {
      type: "string",
      default: "Apply Now - It's Free"
    },
    primaryUrl: {
      type: "string",
      default: "#"
    },
    secondaryText: {
      type: "string",
      default: "Check Eligibility"
    },
    secondaryUrl: {
      type: "string",
      default: "#"
    },
    points: {
      type: "array",
      default: DEFAULT_POINTS
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      iconClass,
      title,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
      points = []
    } = attributes;
    const updatePoint = (index, field, value) => {
      const next = [...points];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        points: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "ready-start-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Main Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Top Icon Class",
            value: iconClass,
            onChange: value => setAttributes({
              iconClass: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button Text",
            value: primaryText,
            onChange: value => setAttributes({
              primaryText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Primary Button URL",
            value: primaryUrl,
            onChange: value => setAttributes({
              primaryUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button Text",
            value: secondaryText,
            onChange: value => setAttributes({
              secondaryText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Secondary Button URL",
            value: secondaryUrl,
            onChange: value => setAttributes({
              secondaryUrl: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Trust Points (${points.length})`,
          initialOpen: false,
          children: points.map((point, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #dfe5eb",
              paddingBottom: "0.95rem"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Point ${index + 1} Icon Class`,
              value: point.iconClass,
              onChange: value => updatePoint(index, "iconClass", value)
            })
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
        className: "ready-start-block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "ready-start-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "ready-start-top-icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: iconClass
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "ready-start-title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Ready to Get Started?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "ready-start-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "CTA description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "ready-start-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              className: "ready-start-btn is-primary",
              href: primaryUrl || "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: primaryText
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: "fa-solid fa-arrow-right"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              className: "ready-start-btn is-secondary",
              href: secondaryUrl || "#",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                children: secondaryText
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "ready-start-points",
            children: points.map((point, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "ready-start-point",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: point.iconClass
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: point.label,
                onChange: value => updatePoint(index, "label", value),
                placeholder: "Point label"
              })]
            }, index))
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      iconClass,
      title,
      description,
      primaryText,
      primaryUrl,
      secondaryText,
      secondaryUrl,
      points = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      className: "ready-start-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "ready-start-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "ready-start-top-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: iconClass
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "ready-start-title",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "ready-start-description",
          value: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "ready-start-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            className: "ready-start-btn is-primary",
            href: primaryUrl || "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: primaryText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa-solid fa-arrow-right"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "ready-start-btn is-secondary",
            href: secondaryUrl || "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: secondaryText
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "ready-start-points",
          children: points.map((point, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "ready-start-point",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: point.iconClass
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "span",
              value: point.label
            })]
          }, index))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-41/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-41/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-41/block.json");
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_FEATURES = [{
  iconClass: "fa-regular fa-shield",
  title: "No Credit Impact",
  description: "Soft pull only - won't affect your score"
}, {
  iconClass: "fa-regular fa-clock",
  title: "Instant Decision",
  description: "Get approved in minutes, not days"
}, {
  iconClass: "fa-solid fa-dollar-sign",
  title: "Flexible Terms",
  description: "Options from 12 to 180 months"
}, {
  iconClass: "fa-regular fa-circle-check",
  title: "Multiple Lenders",
  description: "We shop for the best rates"
}];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-41", {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  attributes: {
    badge: {
      type: "string",
      default: "QUICK & EASY APPLICATION"
    },
    badgeIconClass: {
      type: "string",
      default: "fa-regular fa-rectangle-list"
    },
    titleStart: {
      type: "string",
      default: "Apply for"
    },
    titleHighlight: {
      type: "string",
      default: "Financing"
    },
    description: {
      type: "string",
      default: "Get pre-qualified in minutes with no impact to your credit score. Start your home improvement project today."
    },
    features: {
      type: "array",
      default: DEFAULT_FEATURES
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      badge,
      badgeIconClass,
      titleStart,
      titleHighlight,
      description,
      features = []
    } = attributes;
    const updateFeature = (index, field, value) => {
      const next = [...features];
      next[index] = {
        ...next[index],
        [field]: value
      };
      setAttributes({
        features: next
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "apply-financing-banner-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Header",
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Badge Icon Class",
            value: badgeIconClass,
            onChange: value => setAttributes({
              badgeIconClass: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Feature Items (${features.length})`,
          initialOpen: false,
          children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              marginBottom: "0.95rem",
              borderBottom: "1px solid #dde3f0",
              paddingBottom: "0.95rem"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Item ${index + 1} Icon Class`,
              value: feature.iconClass,
              onChange: value => updateFeature(index, "iconClass", value)
            })
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "apply-financing-banner-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "apply-financing-banner-hero",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "apply-financing-banner-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: badgeIconClass
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: badge,
              onChange: value => setAttributes({
                badge: value
              }),
              placeholder: "QUICK & EASY APPLICATION"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
            className: "apply-financing-banner-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              value: titleStart,
              onChange: value => setAttributes({
                titleStart: value
              }),
              placeholder: "Apply for"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "apply-financing-banner-highlight",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                value: titleHighlight,
                onChange: value => setAttributes({
                  titleHighlight: value
                }),
                placeholder: "Financing"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "apply-financing-banner-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Section description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "apply-financing-banner-strip",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "apply-financing-banner-strip-inner",
            children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
              className: "apply-financing-feature",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "apply-financing-feature-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: feature.iconClass
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "apply-financing-feature-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h3",
                  value: feature.title,
                  onChange: value => updateFeature(index, "title", value),
                  placeholder: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  value: feature.description,
                  onChange: value => updateFeature(index, "description", value),
                  placeholder: "Description"
                })]
              })]
            }, index))
          })
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      badge,
      badgeIconClass,
      titleStart,
      titleHighlight,
      description,
      features = []
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "apply-financing-banner-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "apply-financing-banner-hero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "apply-financing-banner-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: badgeIconClass
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "span",
            value: badge
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
          className: "apply-financing-banner-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: titleStart
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "apply-financing-banner-highlight",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              value: titleHighlight
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "p",
          className: "apply-financing-banner-description",
          value: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "apply-financing-banner-strip",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "apply-financing-banner-strip-inner",
          children: features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
            className: "apply-financing-feature",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "apply-financing-feature-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                className: feature.iconClass
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "apply-financing-feature-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  value: feature.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                value: feature.description
              })]
            })]
          }, index))
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-43/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-43/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-43/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      sectionTitle,
      sectionSubtitle,
      faqs
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "faq-block-editor"
    });
    const updateFaq = (index, key, value) => {
      const updated = faqs.map((faq, i) => i === index ? {
        ...faq,
        [key]: value
      } : faq);
      setAttributes({
        faqs: updated
      });
    };
    const addFaq = () => {
      setAttributes({
        faqs: [...faqs, {
          question: "New Question?",
          answer: "Answer here."
        }]
      });
    };
    const removeFaq = index => {
      setAttributes({
        faqs: faqs.filter((_, i) => i !== index)
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "FAQ Items",
          initialOpen: true,
          children: [faqs.map((faq, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              marginBottom: "16px",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "12px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Q${i + 1} — Question`,
              value: faq.question,
              onChange: v => updateFaq(i, "question", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
              label: "Answer",
              value: faq.answer,
              onChange: v => updateFaq(i, "answer", v)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              onClick: () => removeFaq(i),
              children: "Remove"
            })]
          }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addFaq,
            children: "+ Add FAQ"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "faq-block-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "faq-block-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              className: "faq-block-title",
              value: sectionTitle,
              onChange: v => setAttributes({
                sectionTitle: v
              }),
              placeholder: "Section Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "faq-block-subtitle",
              value: sectionSubtitle,
              onChange: v => setAttributes({
                sectionSubtitle: v
              }),
              placeholder: "Subtitle..."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "faq-block-grid",
            children: faqs.map((faq, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "faq-block-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "faq-block-question",
                children: faq.question
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "faq-block-answer",
                children: faq.answer
              })]
            }, i))
          })]
        })
      })]
    });
  },
  save({
    attributes
  }) {
    const {
      sectionTitle,
      sectionSubtitle,
      faqs
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "faq-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "faq-block-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "faq-block-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "faq-block-title",
            dangerouslySetInnerHTML: {
              __html: sectionTitle
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "faq-block-subtitle",
            dangerouslySetInnerHTML: {
              __html: sectionSubtitle
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "faq-block-grid",
          children: faqs.map((faq, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "faq-block-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "faq-block-question",
              children: faq.question
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "faq-block-answer",
              children: faq.answer
            })]
          }, i))
        })]
      })
    });
  }
});

/***/ },

/***/ "./src/blocks/block-44/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-44/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-44/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      formTitle,
      formDescription,
      resultsPageUrl,
      buttonText
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "financing-app-form-editor"
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Settings",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Results Page URL",
            value: resultsPageUrl,
            onChange: v => setAttributes({
              resultsPageUrl: v
            }),
            help: "Where to redirect after form submission"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: buttonText,
            onChange: v => setAttributes({
              buttonText: v
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "financing-app-form-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "financing-app-form-title",
            value: formTitle,
            onChange: v => setAttributes({
              formTitle: v
            }),
            placeholder: "Form Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "financing-app-form-description",
            value: formDescription,
            onChange: v => setAttributes({
              formDescription: v
            }),
            placeholder: "Form Description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            className: "financing-app-form-preview",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "form-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "First Name",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "Last Name",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "form-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "email",
                placeholder: "Email Address",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "tel",
                placeholder: "Phone Number",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              type: "text",
              placeholder: "Street Address",
              disabled: true,
              style: {
                backgroundColor: "#f0f0f0",
                width: "100%"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "form-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "City",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                  children: "Select State"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "ZIP",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
              disabled: true,
              style: {
                backgroundColor: "#f0f0f0",
                width: "100%"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                children: "Select Project Type"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
              placeholder: "Project Details",
              disabled: true,
              style: {
                backgroundColor: "#f0f0f0",
                width: "100%",
                minHeight: "100px"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "form-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "text",
                placeholder: "Total Project Amount ($)",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                type: "date",
                disabled: true,
                style: {
                  backgroundColor: "#f0f0f0"
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              style: {
                width: "100%",
                padding: "12px",
                backgroundColor: "#2f4ee0",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "not-allowed"
              },
              children: buttonText
            })]
          })]
        })
      })]
    });
  },
  save() {
    return null; // Dynamic block - rendered via PHP
  }
});

/***/ },

/***/ "./src/blocks/block-45/index.js"
/*!**************************************!*\
  !*** ./src/blocks/block-45/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-45/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      resultsTitle,
      resultsSubtitle,
      editBtnText,
      bottomCta,
      bottomPhone,
      bottomMsg
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "financing-results-editor"
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Settings",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Bottom CTA Text",
            value: bottomCta,
            onChange: v => setAttributes({
              bottomCta: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Phone Number",
            value: bottomPhone,
            onChange: v => setAttributes({
              bottomPhone: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: bottomMsg,
            onChange: v => setAttributes({
              bottomMsg: v
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "financing-results-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "financing-results-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              className: "financing-results-title",
              value: resultsTitle,
              onChange: v => setAttributes({
                resultsTitle: v
              }),
              placeholder: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "financing-results-subtitle",
              value: resultsSubtitle,
              onChange: v => setAttributes({
                resultsSubtitle: v
              }),
              placeholder: "Subtitle"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "financing-results-grid",
            children: [...Array(6)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "financing-option-card",
              style: {
                opacity: 0.6
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "option-logo",
                children: "GS"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                children: "Partner Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "option-rating",
                children: "\u2B50 4.8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                style: {
                  fontSize: "0.85rem",
                  color: "#666"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "Min. Credit Score"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "APR Range"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                  children: "Terms"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                disabled: true,
                style: {
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "not-allowed"
                },
                children: "Apply Now"
              })]
            }, i))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "financing-results-bottom",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              style: {
                marginBottom: "16px"
              },
              children: bottomCta
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: "#",
                className: "btn-secondary",
                onClick: e => e.preventDefault(),
                children: ["\uD83D\uDCDE ", bottomPhone]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                href: "#",
                className: "btn-secondary",
                onClick: e => e.preventDefault(),
                children: ["\uD83D\uDCAC ", bottomMsg]
              })]
            })]
          })]
        })
      })]
    });
  },
  save() {
    return null; // Dynamic block - rendered via PHP
  }
});

/***/ },

/***/ "./src/blocks/block-5/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-5/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-5/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('logiweb/custom-block-5', {
  title: 'Call To Action',
  icon: 'admin-site',
  category: 'widgets',
  attributes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    primary_btn_text: {
      type: 'string',
      default: 'Learn More'
    },
    primary_btn_link: {
      type: 'string'
    },
    secondary_btn_text: {
      type: 'string',
      default: 'Get Started'
    },
    secondary_btn_link: {
      type: 'string'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      description,
      primary_btn_link,
      primary_btn_text,
      secondary_btn_text,
      secondary_btn_link
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          className: "title-medium",
          value: title,
          onChange: value => setAttributes({
            title: value
          }),
          placeholder: "Add title"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          className: "description",
          value: description,
          onChange: value => setAttributes({
            description: value
          }),
          placeholder: "Add description"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Primary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: primary_btn_link,
            onChange: value => setAttributes({
              primary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Secondary Button Settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: secondary_btn_text,
            onChange: value => setAttributes({
              secondary_btn_text: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
            label: "Button Link",
            value: secondary_btn_link,
            onChange: value => setAttributes({
              secondary_btn_link: value
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "button",
            className: "btn-primary",
            value: primary_btn_text,
            onChange: value => setAttributes({
              primary_btn_text: value
            }),
            placeholder: "Button Text",
            href: primary_btn_link
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "button",
            className: "btn-secondary",
            value: secondary_btn_text,
            onChange: value => setAttributes({
              secondary_btn_text: value
            }),
            placeholder: "Button Text",
            href: secondary_btn_link
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      description,
      primary_btn_link,
      primary_btn_text,
      secondary_btn_text,
      secondary_btn_link
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "title-medium",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "description",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: description,
            tagName: "div"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "btn-primary",
            href: primary_btn_link,
            children: primary_btn_text
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            className: "btn-secondary",
            href: secondary_btn_link,
            children: secondary_btn_text
          })]
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-6/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-6/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-6/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-6", {
  title: "Custom Block 6",
  icon: "smiley",
  category: "widgets",
  attributes: {
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    backgroundImage: {
      type: "string",
      default: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png"
    },
    feature1_title: {
      type: "string"
    },
    feature1_description: {
      type: "string"
    },
    feature2_title: {
      type: "string"
    },
    feature2_description: {
      type: "string"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      title,
      description,
      backgroundImage,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        backgroundImage: media.url
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Image Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: backgroundImage,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: "Select Image"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "section-container section-type-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "container-top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "container-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "title-medium",
              value: title,
              onChange: value => setAttributes({
                title: value
              }),
              placeholder: "Add title"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "container-right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "description",
              value: description,
              onChange: value => setAttributes({
                description: value
              }),
              placeholder: "Add description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "benefits-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "list-item benefits-list-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: "title-small",
                  value: feature1_title,
                  onChange: value => setAttributes({
                    feature1_title: value
                  }),
                  placeholder: "Add Feature 1 Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: "description-small",
                  value: feature1_description,
                  onChange: value => setAttributes({
                    feature1_description: value
                  }),
                  placeholder: "Add Feature 1 Description"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "list-item benefits-list-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: "title-small",
                  value: feature2_title,
                  onChange: value => setAttributes({
                    feature2_title: value
                  }),
                  placeholder: "Add Feature 2 Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: "description-small",
                  value: feature2_description,
                  onChange: value => setAttributes({
                    feature2_description: value
                  }),
                  placeholder: "Add Feature 2 Description"
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container-bottom",
          style: {
            backgroundImage: `url(${backgroundImage})`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png",
            alt: "Placeholder Image"
          })
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      title,
      description,
      backgroundImage,
      feature1_title,
      feature1_description,
      feature2_title,
      feature2_description
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "section-container section-type-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container-top",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container-left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "title-medium",
            children: title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "container-right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "description",
            children: description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "benefits-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "list-item benefits-list-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                class: "icon fa-solid fa-cube"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "title-small",
                children: feature1_title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "description-small",
                children: feature1_description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "icon list-item benefits-list-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                class: "icon fa-solid fa-cube"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "title-small",
                children: feature2_title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "description-small",
                children: [feature2_description, "."]
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container-bottom",
        style: {
          backgroundImage: `url(${backgroundImage})`
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: window.location.origin + "/wp-content/plugins/logiweb_blocks/assets/Placeholder_Image_3.png",
          alt: "Placeholder Image"
        })
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-7/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-7/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-7/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const DEFAULT_SERVICES = [{
  photoUrl: "",
  title: "Service 1",
  subtitle: "Short subtitle",
  description: "Service description goes here.",
  linkText: "Learn more",
  linkUrl: "#"
}, {
  photoUrl: "",
  title: "Service 2",
  subtitle: "Short subtitle",
  description: "Service description goes here.",
  linkText: "Learn more",
  linkUrl: "#"
}, {
  photoUrl: "",
  title: "Service 3",
  subtitle: "Short subtitle",
  description: "Service description goes here.",
  linkText: "Learn more",
  linkUrl: "#"
}, {
  photoUrl: "",
  title: "Service 4",
  subtitle: "Short subtitle",
  description: "Service description goes here.",
  linkText: "Learn more",
  linkUrl: "#"
}];
const getServiceImageUrl = service => service?.photoUrl || "";
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-7", {
  title: "Services Showcase",
  icon: "screenoptions",
  category: "widgets",
  attributes: {
    subtitle: {
      type: "string",
      default: "OUR SERVICES"
    },
    title: {
      type: "string",
      default: "Comprehensive Solutions"
    },
    description: {
      type: "string",
      default: "We provide everything you need."
    },
    services: {
      type: "array",
      default: DEFAULT_SERVICES
    },
    footerText: {
      type: "string",
      default: "Need help? Contact us today."
    },
    footerButtonText: {
      type: "string",
      default: "Get Started"
    },
    footerButtonUrl: {
      type: "string",
      default: "#contact"
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      subtitle,
      title,
      description,
      services,
      footerText,
      footerButtonText,
      footerButtonUrl
    } = attributes;
    const updateService = (index, field, value) => {
      const nextServices = [...services];
      nextServices[index] = {
        ...nextServices[index],
        [field]: value
      };
      setAttributes({
        services: nextServices
      });
    };
    const updateServicePhoto = (index, media) => {
      updateService(index, "photoUrl", media.url);
    };
    const addService = () => {
      setAttributes({
        services: [...services, {
          photoUrl: "",
          title: "New Service",
          subtitle: "Add a short subtitle",
          description: "Add the service description here.",
          linkText: "Learn more",
          linkUrl: "#"
        }]
      });
    };
    const removeService = index => {
      if (services.length <= 1) {
        return;
      }
      setAttributes({
        services: services.filter((_, currentIndex) => currentIndex !== index)
      });
    };
    const serviceCountLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => `${services.length} service${services.length === 1 ? "" : "s"}`, [services.length]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "services-showcase-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Section Content",
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Subtitle",
            value: subtitle,
            onChange: value => setAttributes({
              subtitle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Title",
            value: title,
            onChange: value => setAttributes({
              title: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Description",
            value: description,
            onChange: value => setAttributes({
              description: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: `Services (${serviceCountLabel})`,
          initialOpen: false,
          children: [services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "services-card-controls",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => updateServicePhoto(index, media),
                allowedTypes: ["image"],
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: open,
                  isSecondary: true,
                  children: getServiceImageUrl(service) ? "Change image" : "Add image"
                })
              })
            }), getServiceImageUrl(service) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "services-card-controls-preview",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: getServiceImageUrl(service),
                alt: service.title,
                className: "services-card-controls-preview-image"
              })
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Service title",
              value: service.title,
              onChange: value => updateService(index, "title", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Service subtitle",
              value: service.subtitle,
              onChange: value => updateService(index, "subtitle", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Service description",
              value: service.description,
              onChange: value => updateService(index, "description", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Learn more label",
              value: service.linkText,
              onChange: value => updateService(index, "linkText", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Learn more URL",
              value: service.linkUrl,
              onChange: value => updateService(index, "linkUrl", value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSecondary: true,
              onClick: () => removeService(index),
              disabled: services.length <= 1,
              children: "Remove service"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: addService,
            children: "Add service"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Footer CTA",
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Footer text",
            value: footerText,
            onChange: value => setAttributes({
              footerText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button text",
            value: footerButtonText,
            onChange: value => setAttributes({
              footerButtonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: footerButtonUrl,
            onChange: value => setAttributes({
              footerButtonUrl: value
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "services-showcase-preview",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "services-showcase-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "services-showcase-subtitle",
            children: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "services-showcase-title",
            value: title,
            onChange: value => setAttributes({
              title: value
            }),
            placeholder: "Add title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            className: "services-showcase-description",
            value: description,
            onChange: value => setAttributes({
              description: value
            }),
            placeholder: "Add description"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "services-showcase-cards",
          children: services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
            className: "services-showcase-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "services-showcase-card-imageWrap",
              children: getServiceImageUrl(service) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: getServiceImageUrl(service),
                alt: service.title,
                className: "services-showcase-card-image"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "services-showcase-card-placeholder",
                children: "Add image"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              className: "services-showcase-card-title",
              value: service.title,
              onChange: value => updateService(index, "title", value),
              placeholder: "Service title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              className: "services-showcase-card-subtitle",
              value: service.subtitle,
              onChange: value => updateService(index, "subtitle", value),
              placeholder: "Service subtitle"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "services-showcase-card-description",
              value: service.description,
              onChange: value => updateService(index, "description", value),
              placeholder: "Service description"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              className: "services-showcase-card-link",
              href: service.linkUrl || "#",
              children: service.linkText || "Learn more"
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "services-showcase-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "services-showcase-footerText",
            children: footerText
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            className: "services-showcase-button",
            href: footerButtonUrl || "#",
            children: footerButtonText
          })]
        })]
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      subtitle,
      title,
      description,
      services,
      footerText,
      footerButtonText,
      footerButtonUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
      className: "services-showcase fade-in-on-scroll",
      "data-block": "services-showcase",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "services-showcase-heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "services-showcase-subtitle",
          children: subtitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "services-showcase-title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "services-showcase-description",
          children: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "services-showcase-cards",
        children: services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
          className: "services-showcase-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "services-showcase-card-imageWrap",
            children: getServiceImageUrl(service) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: getServiceImageUrl(service),
              alt: service.title,
              className: "services-showcase-card-image"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "services-showcase-card-placeholder",
              children: "Add image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "services-showcase-card-title",
            children: service.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "services-showcase-card-subtitle",
            children: service.subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "services-showcase-card-description",
            children: service.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            className: "services-showcase-card-link",
            href: service.linkUrl || "#",
            children: service.linkText || "Learn more"
          })]
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "services-showcase-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "services-showcase-footerText",
          children: footerText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          className: "services-showcase-button",
          href: footerButtonUrl || "#",
          children: footerButtonText
        })]
      })]
    });
  }
});

/***/ },

/***/ "./src/blocks/block-8/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-8/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-8/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-8", {
  title: "Full Screen Image",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    imageUrl: {
      type: "string",
      default: ""
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      imageUrl
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        imageUrl: media.url
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "full-screen-image-block",
      style: {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Background Image Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: imageUrl,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: imageUrl ? "Change Image" : "Upload Image"
            })
          })
        })
      }), !imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "image-placeholder",
        children: "Upload an image to display full-screen."
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      imageUrl
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "full-screen-image-block",
      style: {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%"
      }
    });
  }
});

/***/ },

/***/ "./src/blocks/block-9/index.js"
/*!*************************************!*\
  !*** ./src/blocks/block-9/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-styles.scss */ "./src/global-styles.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-9/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("logiweb/custom-block-9", {
  title: "Half Screen Image",
  icon: "admin-site",
  category: "widgets",
  attributes: {
    imageUrl: {
      type: "string",
      default: ""
    },
    imageId: {
      type: "number",
      default: null
    },
    overlayText: {
      type: "string",
      default: ""
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      imageUrl,
      imageId,
      overlayText
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        imageUrl: media.url,
        imageId: media.id
      });
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "half-screen-image-block",
      style: {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        width: "100%",
        position: "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Background Image Settings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            value: imageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              children: imageUrl ? "Change Image" : "Upload Image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Overlay Text",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Text over image",
            value: overlayText,
            onChange: value => setAttributes({
              overlayText: value
            }),
            placeholder: "Enter overlay text"
          })
        })]
      }), imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "image-black-overlay",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1,
            pointerEvents: "none"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          className: "overlay-text",
          value: overlayText,
          onChange: value => setAttributes({
            overlayText: value
          }),
          placeholder: "Add text over the image",
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "6rem",
            letterSpacing: "2px",
            width: "90%",
            zIndex: 2
          }
        })]
      }), !imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "image-placeholder",
        children: "Upload an image to display half-screen."
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      imageUrl,
      overlayText
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "half-screen-image-block",
      style: {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        width: "100%",
        position: "relative"
      },
      children: overlayText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "image-black-overlay",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1,
            pointerEvents: "none"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "overlay-text",
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "6rem",
            letterSpacing: "2px",
            width: "90%",
            zIndex: 2
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            value: overlayText
          })
        })]
      })
    });
  }
});

/***/ },

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

/***/ },

/***/ "./src/blocks/block-1/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-1/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-1","version":"0.1.0","title":"Custom Block 1","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-1","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-10/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-10/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-10","version":"0.1.0","title":"Certifications Carousel","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-10","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss"}');

/***/ },

/***/ "./src/blocks/block-13/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-13/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-1","version":"0.1.0","title":"Custom Block 1","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-1","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-17/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-17/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-2","version":"0.1.0","title":"Custom Block 2","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-2","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-19/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-19/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-19","title":"Why Choose Us - Stats & Benefits","category":"widgets","icon":"chart-pie","description":"Display statistics with counting effect and editable benefits","attributes":{"subtitle":{"type":"string","default":"WHY CHOOSE US"},"title":{"type":"string","default":"The DNH Difference"},"description":{"type":"string","default":"We\'re not just another contractor. We\'re your partners in creating the home you\'ve always wanted."},"stats":{"type":"array","default":[]},"benefits":{"type":"array","default":[]}}}');

/***/ },

/***/ "./src/blocks/block-2/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-2/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-2","version":"0.1.0","title":"Custom Block 2","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-2","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-20/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-20/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-20","title":"Transparent Process Timeline","category":"widgets","icon":"list-view","description":"Animated step-by-step process timeline with CTA","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-21/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-21/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-21","title":"Featured Projects Grid","category":"widgets","icon":"grid-view","description":"2x2 portfolio project cards grid with image, tags, title, description and CTA","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-22/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-22/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-22","title":"CTA Hero - Let\'s Work Together","category":"widgets","icon":"megaphone","description":"Full-width dark CTA section with badge, title, description, two buttons and stats row","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-23/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-23/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-23","title":"Story Hero Banner","category":"widgets","icon":"align-center","description":"Centered hero banner with gradient background and highlighted title word","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-24/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-24/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-24","title":"Why Families Choose Us","category":"widgets","icon":"groups","description":"About section with photo, trust badges, and value cards","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-25/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-25/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-25","title":"Journey Timeline","category":"widgets","icon":"schedule","description":"Scrollable timeline with animated progress line and reveal cards","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-26/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-26/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-26","title":"Project CTA Banner","category":"widgets","icon":"megaphone","description":"Full-width gradient CTA with heading, description and two rounded buttons","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-27/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-27/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-27","title":"Team Members Showcase","category":"widgets","icon":"groups","description":"Filterable team members grid with photos, roles and experience","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-28/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-28/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-28","title":"Team Stats + Join CTA","category":"widgets","icon":"groups","description":"Two-part section with animated team stats and career call-to-action","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-29/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-29/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-29","title":"Join Team Career Panel","category":"widgets","icon":"id-alt","description":"Career recruitment panel with stats and alert signup card","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-3/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-3/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-3","version":"0.1.0","title":"Custom Block 3","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-3","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-30/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-30/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-30","title":"Why Join Benefits Grid","category":"widgets","icon":"screenoptions","description":"Career benefits grid with heading and bottom CTA","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-31/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-31/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-31","title":"Open Positions Board","category":"widgets","icon":"list-view","description":"Filterable careers board with expandable role details and sidebar cards","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-32/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-32/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-32","title":"Questions CTA Banner","category":"widgets","icon":"megaphone","description":"Blue CTA banner with contact actions and support details.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-33/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-33/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-33","title":"Info Cards Trio","category":"widgets","icon":"grid-view","description":"Three-card info section with icons and descriptions.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-34/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-34/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-34","title":"Financing Hero Banner","category":"widgets","icon":"money-alt","description":"Top financing CTA banner with gradient background and two actions.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-35/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-35/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-35","title":"Financing Benefits Grid","category":"widgets","icon":"screenoptions","description":"Why choose financing section with four benefit cards.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-36/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-36/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-36","title":"Financing Steps Process","category":"widgets","icon":"editor-ol","description":"Horizontal four-step financing process section.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-37/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-37/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-37","title":"Credit Score Options Grid","category":"widgets","icon":"table-col-after","description":"Four-column financing options by credit score.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-38/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-38/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-38","title":"Financing Partners Grid","category":"widgets","icon":"networking","description":"Grid of financing partners with rates, terms, and trust badges.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-39/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-39/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-39","title":"Monthly Payment Estimator","category":"widgets","icon":"chart-line","description":"Two-column financing estimator layout with sliders and monthly payment summary.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-4/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-4/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-4","version":"0.1.0","title":"Custom Block 4","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-4","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-40/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-40/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-40","title":"Ready To Start CTA","category":"widgets","icon":"yes-alt","description":"Green call-to-action section with dual buttons and trust points.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-41/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-41/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"logiweb/custom-block-41","title":"Apply Financing Banner","category":"widgets","icon":"money-alt","description":"Blue financing application banner with trust feature strip.","editorScript":"file:../../../build/index.js","editorStyle":"file:../../../build/index.css","style":"file:../../../build/index.css"}');

/***/ },

/***/ "./src/blocks/block-43/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-43/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"logiweb/custom-block-43","title":"FAQ Section","category":"common","icon":"editor-help","description":"Frequently Asked Questions grid section.","supports":{"html":false},"attributes":{"sectionTitle":{"type":"string","default":"Frequently Asked Questions"},"sectionSubtitle":{"type":"string","default":"Have questions about our financing process?"},"faqs":{"type":"array","default":[{"question":"Will this affect my credit score?","answer":"No. Our pre-qualification process uses a soft credit pull that will not impact your credit score."},{"question":"How long does approval take?","answer":"Most applicants receive a decision within minutes. Some cases may take up to 24 hours."},{"question":"What if I have bad credit?","answer":"We work with multiple lenders and offer options for various credit profiles, including in-house financing."},{"question":"Can I pay off early?","answer":"Yes! Most of our financing partners allow early payoff without prepayment penalties."}]}},"editorScript":"file:../../index.js","style":"file:../../global-styles.css"}');

/***/ },

/***/ "./src/blocks/block-44/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-44/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"logiweb/custom-block-44","title":"Financing Application Form","category":"common","icon":"form","description":"Form for collecting financing application data.","supports":{"html":false},"attributes":{"formTitle":{"type":"string","default":"Tell Us About Your Project"},"formDescription":{"type":"string","default":"Fill out your information below and we\'ll match you with the best financing options."},"resultsPageUrl":{"type":"string","default":"/select-financing/"},"buttonText":{"type":"string","default":"View Financing Options →"}},"editorScript":"file:../../index.js","style":"file:../../global-styles.css"}');

/***/ },

/***/ "./src/blocks/block-45/block.json"
/*!****************************************!*\
  !*** ./src/blocks/block-45/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"logiweb/custom-block-45","title":"Financing Results Selector","category":"common","icon":"chart-bar","description":"Display financing options based on submitted application.","supports":{"html":false},"attributes":{"resultsTitle":{"type":"string","default":"Choose Your Financing Partner"},"resultsSubtitle":{"type":"string","default":"We\'ve matched you with financing options based on your project details."},"editBtnText":{"type":"string","default":"Edit Info"},"bottomCta":{"type":"string","default":"Not sure which option is right for you?"},"bottomPhone":{"type":"string","default":"(555) 555-0123"},"bottomMsg":{"type":"string","default":"Speak with a Specialist"}},"editorScript":"file:../../index.js","style":"file:../../global-styles.css"}');

/***/ },

/***/ "./src/blocks/block-5/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-5/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-5","version":"0.1.0","title":"Custom Block 5","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-5","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-6/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-6/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-6","version":"0.1.0","title":"Custom Block 6","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-6","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-7/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-7/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-7","version":"0.1.0","title":"Custom Block 7","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-7","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-8/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-8/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-8","version":"0.1.0","title":"Custom Block 8","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-8","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/blocks/block-9/block.json"
/*!***************************************!*\
  !*** ./src/blocks/block-9/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-block-9","version":"0.1.0","title":"Custom Block 9","category":"widgets","icon":"smiley","description":"A custom block for displaying a section with a title and content.","example":{},"supports":{"html":false},"textdomain":"custom-block-9","editorScript":"file:./index.js","editorStyle":"file:../../global-styles.scss","style":"file:../../global-styles.scss","viewScript":"file:./view.js"}');

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_block_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/block-1 */ "./src/blocks/block-1/index.js");
/* harmony import */ var _blocks_block_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/block-2 */ "./src/blocks/block-2/index.js");
/* harmony import */ var _blocks_block_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/block-3 */ "./src/blocks/block-3/index.js");
/* harmony import */ var _blocks_block_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/block-4 */ "./src/blocks/block-4/index.js");
/* harmony import */ var _blocks_block_5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/block-5 */ "./src/blocks/block-5/index.js");
/* harmony import */ var _blocks_block_6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block-6 */ "./src/blocks/block-6/index.js");
/* harmony import */ var _blocks_block_7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/block-7 */ "./src/blocks/block-7/index.js");
/* harmony import */ var _blocks_block_8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/block-8 */ "./src/blocks/block-8/index.js");
/* harmony import */ var _blocks_block_9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/block-9 */ "./src/blocks/block-9/index.js");
/* harmony import */ var _blocks_block_10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/block-10 */ "./src/blocks/block-10/index.js");
/* harmony import */ var _blocks_block_11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/block-11 */ "./src/blocks/block-11/index.js");
/* harmony import */ var _blocks_block_12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/block-12 */ "./src/blocks/block-12/index.js");
/* harmony import */ var _blocks_block_13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/block-13 */ "./src/blocks/block-13/index.js");
/* harmony import */ var _blocks_block_14__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/block-14 */ "./src/blocks/block-14/index.js");
/* harmony import */ var _blocks_block_15__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/block-15 */ "./src/blocks/block-15/index.js");
/* harmony import */ var _blocks_block_16__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/block-16 */ "./src/blocks/block-16/index.js");
/* harmony import */ var _blocks_block_17__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/block-17 */ "./src/blocks/block-17/index.js");
/* harmony import */ var _blocks_block_19__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/block-19 */ "./src/blocks/block-19/index.js");
/* harmony import */ var _blocks_block_20__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/block-20 */ "./src/blocks/block-20/index.js");
/* harmony import */ var _blocks_block_21__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/block-21 */ "./src/blocks/block-21/index.js");
/* harmony import */ var _blocks_block_22__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/block-22 */ "./src/blocks/block-22/index.js");
/* harmony import */ var _blocks_block_23__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/block-23 */ "./src/blocks/block-23/index.js");
/* harmony import */ var _blocks_block_24__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/block-24 */ "./src/blocks/block-24/index.js");
/* harmony import */ var _blocks_block_25__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/block-25 */ "./src/blocks/block-25/index.js");
/* harmony import */ var _blocks_block_26__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/block-26 */ "./src/blocks/block-26/index.js");
/* harmony import */ var _blocks_block_27__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/block-27 */ "./src/blocks/block-27/index.js");
/* harmony import */ var _blocks_block_28__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/block-28 */ "./src/blocks/block-28/index.js");
/* harmony import */ var _blocks_block_29__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/block-29 */ "./src/blocks/block-29/index.js");
/* harmony import */ var _blocks_block_30__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/block-30 */ "./src/blocks/block-30/index.js");
/* harmony import */ var _blocks_block_31__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/block-31 */ "./src/blocks/block-31/index.js");
/* harmony import */ var _blocks_block_32__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/block-32 */ "./src/blocks/block-32/index.js");
/* harmony import */ var _blocks_block_33__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/block-33 */ "./src/blocks/block-33/index.js");
/* harmony import */ var _blocks_block_34__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/block-34 */ "./src/blocks/block-34/index.js");
/* harmony import */ var _blocks_block_35__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/block-35 */ "./src/blocks/block-35/index.js");
/* harmony import */ var _blocks_block_36__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/block-36 */ "./src/blocks/block-36/index.js");
/* harmony import */ var _blocks_block_37__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/block-37 */ "./src/blocks/block-37/index.js");
/* harmony import */ var _blocks_block_38__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/block-38 */ "./src/blocks/block-38/index.js");
/* harmony import */ var _blocks_block_39__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/block-39 */ "./src/blocks/block-39/index.js");
/* harmony import */ var _blocks_block_40__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/block-40 */ "./src/blocks/block-40/index.js");
/* harmony import */ var _blocks_block_41__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/block-41 */ "./src/blocks/block-41/index.js");
/* harmony import */ var _blocks_block_43__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/block-43 */ "./src/blocks/block-43/index.js");
/* harmony import */ var _blocks_block_44__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/block-44 */ "./src/blocks/block-44/index.js");
/* harmony import */ var _blocks_block_45__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/block-45 */ "./src/blocks/block-45/index.js");











































})();

/******/ })()
;
//# sourceMappingURL=index.js.map