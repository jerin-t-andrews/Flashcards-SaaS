"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/generate/page",{

/***/ "(app-pages-browser)/./app/generate/page.js":
/*!******************************!*\
  !*** ./app/generate/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Generate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/../node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/../node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/../node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/../node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/../node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/../node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Generate() {\n    _s();\n    const { isLoaded, isSignedIn, user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [flashcards, setFlashcards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [flipped, setFlipped] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async ()=>{\n        fetch(\"api/generate\", {\n            method: \"POST\",\n            body: text\n        }).then((res)=>res.json()).then(data > setFlashcards(data));\n    };\n    const handleCardClick = (id)=>{\n        setFlipped((prev)=>({\n                ...prev,\n                [id]: !prev[id]\n            }));\n    };\n    const handleOpen = ()=>{\n        setOpen(true);\n    };\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    const saveFlashcards = async ()=>{\n        if (!name) {\n            alert(\"Please enter a name\");\n            return;\n        }\n        const batch = writeBatch(db);\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"users\"), user.id);\n        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userDocRef);\n        if (docSnap.exists()) {\n            const collection = docSnap.data().flashcards || [];\n            if (collections.find((f)=>f.name === name)) {\n                alert(\"Flashcard collections already with the same name already exists!\");\n                return;\n            } else {\n                collections.push({\n                    name\n                });\n                batch.set(userDocRef, {\n                    flashcards: collections\n                }, {\n                    merge: true\n                });\n            }\n        } else {\n            batch.set(userDocRef, {\n                flashcards: [\n                    {\n                        name\n                    }\n                ]\n            });\n        }\n        const colRef = firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection[userDocRef, name];\n        flashcards.forEach((flashcard)=>{\n            const cardDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(colRef);\n            batch.set(cardDocRef, flashcard);\n        });\n        await batch.commit();\n        handleClose();\n        router.push(\"/flashcards\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        maxWidth: \"md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n                mt: 4,\n                mb: 6,\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    variant: \"h4\",\n                    children: \"Generate Flashcards\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jerin\\\\OneDrive\\\\Documents\\\\GitHub\\\\Flashcards-SaaS\\\\flashcards-saas\\\\app\\\\generate\\\\page.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        p: 4,\n                        width: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        value: text,\n                        onChange: (e)=>setText(e.target.value),\n                        label: \"Enter Text\",\n                        fullWidth: true,\n                        multiline: true,\n                        rows: 4\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jerin\\\\OneDrive\\\\Documents\\\\GitHub\\\\Flashcards-SaaS\\\\flashcards-saas\\\\app\\\\generate\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jerin\\\\OneDrive\\\\Documents\\\\GitHub\\\\Flashcards-SaaS\\\\flashcards-saas\\\\app\\\\generate\\\\page.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jerin\\\\OneDrive\\\\Documents\\\\GitHub\\\\Flashcards-SaaS\\\\flashcards-saas\\\\app\\\\generate\\\\page.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jerin\\\\OneDrive\\\\Documents\\\\GitHub\\\\Flashcards-SaaS\\\\flashcards-saas\\\\app\\\\generate\\\\page.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_s(Generate, \"X04A3a0TnpbVKqfi4TburINfO7Q=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Generate;\nvar _c;\n$RefreshReg$(_c, \"Generate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZW5lcmF0ZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ3FDO0FBQ2hCO0FBQ2pCO0FBQ1g7QUFHakIsU0FBU1c7O0lBQ3BCLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBQyxHQUFHZCxzREFBT0E7SUFDNUMsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFDakMsTUFBTWUsU0FBU2hCLDBEQUFTQTtJQUV4QixNQUFNaUIsZUFBZTtRQUNqQkMsTUFBTSxnQkFBZ0I7WUFDbEJDLFFBQVE7WUFDUkMsTUFBTVY7UUFFVixHQUFHVyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUVHLE9BQU9qQixjQUFjaUI7SUFDNUQ7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDckJqQixXQUFXLENBQUNrQixPQUFVO2dCQUNsQixHQUFHQSxJQUFJO2dCQUNQLENBQUNELEdBQUcsRUFBRSxDQUFDQyxJQUFJLENBQUNELEdBQUc7WUFDbkI7SUFDSjtJQUVBLE1BQU1FLGFBQWE7UUFDZmIsUUFBUTtJQUNaO0lBRUEsTUFBTWMsY0FBYztRQUNoQmQsUUFBUTtJQUNaO0lBRUEsTUFBTWUsaUJBQWlCO1FBQ25CLElBQUksQ0FBQ2xCLE1BQU07WUFDUG1CLE1BQU07WUFDTjtRQUNKO1FBRUEsTUFBTUMsUUFBUUMsV0FBV0M7UUFDekIsTUFBTUMsYUFBYXJDLHVEQUFHQSxDQUFDRCw4REFBVUEsQ0FBQ3FDLElBQUksVUFBVTdCLEtBQUtxQixFQUFFO1FBQ3ZELE1BQU1VLFVBQVUsTUFBTXJDLDBEQUFNQSxDQUFDb0M7UUFFN0IsSUFBSUMsUUFBUUMsTUFBTSxJQUFJO1lBQ2xCLE1BQU14QyxhQUFhdUMsUUFBUVosSUFBSSxHQUFHbEIsVUFBVSxJQUFJLEVBQUU7WUFDbEQsSUFBSWdDLFlBQVlDLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFNUIsSUFBSSxLQUFLQSxPQUFPO2dCQUMxQ21CLE1BQU07Z0JBQ047WUFDSixPQUFPO2dCQUNITyxZQUFZRyxJQUFJLENBQUM7b0JBQUM3QjtnQkFBSTtnQkFDdEJvQixNQUFNVSxHQUFHLENBQUNQLFlBQVk7b0JBQUM3QixZQUFZZ0M7Z0JBQVcsR0FBRztvQkFBQ0ssT0FBTztnQkFBSTtZQUNqRTtRQUNKLE9BQU87WUFDSFgsTUFBTVUsR0FBRyxDQUFDUCxZQUFZO2dCQUFDN0IsWUFBWTtvQkFBQzt3QkFBQ007b0JBQUk7aUJBQUU7WUFBQTtRQUMvQztRQUNBLE1BQU1nQyxTQUFTL0MsMERBQVUsQ0FBQ3NDLFlBQVl2QixLQUFLO1FBQzNDTixXQUFXdUMsT0FBTyxDQUFDLENBQUNDO1lBQ2hCLE1BQU1DLGFBQWFqRCx1REFBR0EsQ0FBQzhDO1lBQ3ZCWixNQUFNVSxHQUFHLENBQUNLLFlBQVlEO1FBQzFCO1FBRUEsTUFBTWQsTUFBTWdCLE1BQU07UUFDbEJuQjtRQUNBYixPQUFPeUIsSUFBSSxDQUFFO0lBQ2pCO0lBRUEscUJBQ0ksOERBQUNoRCxvSEFBU0E7UUFBQ3dELFVBQVM7a0JBQ2hCLDRFQUFDekQsb0hBQUdBO1lBQUMwRCxJQUFJO2dCQUFDQyxJQUFJO2dCQUFHQyxJQUFJO2dCQUFHQyxTQUFTO2dCQUFRQyxlQUFlO2dCQUFVQyxZQUFZO1lBQVE7OzhCQUNsRiw4REFBQzNELG9IQUFVQTtvQkFBQzRELFNBQVE7OEJBQUs7Ozs7Ozs4QkFDekIsOERBQUM5RCxvSEFBS0E7b0JBQUN3RCxJQUFJO3dCQUFDTyxHQUFHO3dCQUFHQyxPQUFNO29CQUFNOzhCQUMxQiw0RUFBQy9ELG9IQUFTQTt3QkFBQ2dFLE9BQVNqRDt3QkFBTWtELFVBQVUsQ0FBQ0MsSUFBTWxELFFBQVFrRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQUdJLE9BQU07d0JBQWFDLFNBQVM7d0JBQUNDLFNBQVM7d0JBQUNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckk7R0EzRXdCaEU7O1FBQ2lCWCxrREFBT0E7UUFNN0JTLHNEQUFTQTs7O0tBUEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nZW5lcmF0ZS9wYWdlLmpzPzExOGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIlxyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgUGFwZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZSgpIHtcclxuICAgIGNvbnN0IHtpc0xvYWRlZCwgaXNTaWduZWRJbiwgdXNlcn0gPSB1c2VVc2VyKClcclxuICAgIGNvbnN0IFtmbGFzaGNhcmRzLCBzZXRGbGFzaGNhcmRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2ZsaXBwZWQsIHNldEZsaXBwZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnYXBpL2dlbmVyYXRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdGV4dCxcclxuXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKS50aGVuKChkYXRhID4gc2V0Rmxhc2hjYXJkcyhkYXRhKSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChpZCkgPT4ge1xyXG4gICAgICAgIHNldEZsaXBwZWQoKHByZXYpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgICAgIFtpZF06ICFwcmV2W2lkXSxcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdmVGbGFzaGNhcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgbmFtZScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmF0Y2ggPSB3cml0ZUJhdGNoKGRiKVxyXG4gICAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoY29sbGVjdGlvbihkYiwgJ3VzZXJzJyksIHVzZXIuaWQpXHJcbiAgICAgICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyh1c2VyRG9jUmVmKVxyXG5cclxuICAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZG9jU25hcC5kYXRhKCkuZmxhc2hjYXJkcyB8fCBbXVxyXG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbnMuZmluZCgoZikgPT4gZi5uYW1lID09PSBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGbGFzaGNhcmQgY29sbGVjdGlvbnMgYWxyZWFkeSB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHMhXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goe25hbWV9KVxyXG4gICAgICAgICAgICAgICAgYmF0Y2guc2V0KHVzZXJEb2NSZWYsIHtmbGFzaGNhcmRzOiBjb2xsZWN0aW9uc30sIHttZXJnZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYXRjaC5zZXQodXNlckRvY1JlZiwge2ZsYXNoY2FyZHM6IFt7bmFtZX1dfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sUmVmID0gY29sbGVjdGlvblt1c2VyRG9jUmVmLCBuYW1lXVxyXG4gICAgICAgIGZsYXNoY2FyZHMuZm9yRWFjaCgoZmxhc2hjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREb2NSZWYgPSBkb2MoY29sUmVmKVxyXG4gICAgICAgICAgICBiYXRjaC5zZXQoY2FyZERvY1JlZiwgZmxhc2hjYXJkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCgnL2ZsYXNoY2FyZHMnKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3ttdDogNCwgbWI6IDYsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5HZW5lcmF0ZSBGbGFzaGNhcmRzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7cDogNCwgd2lkdGg6JzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZSA9IHt0ZXh0fSBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSBsYWJlbD1cIkVudGVyIFRleHRcIiBmdWxsV2lkdGggbXVsdGlsaW5lIHJvd3M9ezR9Lz5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59ICAgIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJCb3giLCJDb250YWluZXIiLCJQYXBlciIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0RG9jIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJHZW5lcmF0ZSIsImlzTG9hZGVkIiwiaXNTaWduZWRJbiIsInVzZXIiLCJmbGFzaGNhcmRzIiwic2V0Rmxhc2hjYXJkcyIsImZsaXBwZWQiLCJzZXRGbGlwcGVkIiwidGV4dCIsInNldFRleHQiLCJuYW1lIiwic2V0TmFtZSIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaGFuZGxlQ2FyZENsaWNrIiwiaWQiLCJwcmV2IiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwic2F2ZUZsYXNoY2FyZHMiLCJhbGVydCIsImJhdGNoIiwid3JpdGVCYXRjaCIsImRiIiwidXNlckRvY1JlZiIsImRvY1NuYXAiLCJleGlzdHMiLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJmIiwicHVzaCIsInNldCIsIm1lcmdlIiwiY29sUmVmIiwiZm9yRWFjaCIsImZsYXNoY2FyZCIsImNhcmREb2NSZWYiLCJjb21taXQiLCJtYXhXaWR0aCIsInN4IiwibXQiLCJtYiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInZhcmlhbnQiLCJwIiwid2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImxhYmVsIiwiZnVsbFdpZHRoIiwibXVsdGlsaW5lIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/generate/page.js\n"));

/***/ })

});