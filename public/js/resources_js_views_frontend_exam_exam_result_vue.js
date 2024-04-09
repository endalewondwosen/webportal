"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_exam_exam_result_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        exam_number: ""
      },
      student_data: {},
      errors: {}
    };
  },
  computed: {
    getValue: function getValue() {
      var objectSize = 0;

      for (var k in this.student_data) {
        objectSize++;
      } // objectSize here holds the size of your object


      return objectSize;
    }
  },
  methods: {
    getStudentData: function getStudentData() {
      var _this = this;

      this.axios.post("/api/user/getExamResult", this.form).then(function (_ref) {
        var data = _ref.data;
        _this.student_data = data;

        if (_this.getValue <= 0) {
          Toast.fire({
            icon: "error",
            title: "Incorrect Exam Number ,try again!"
          });
        }

        _this.errors = "";
      })["catch"](function (error) {
        switch (error.response.status) {
          case 422:
            _this.errors = error.response.data.errors;
            break;

          case 401:
            _this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });

            break;

          case 500:
            _this.flashMessage.error({
              message: "Something went wrong please contact system admin!",
              time: 5000
            });

            break;

          default:
            _this.flashMessage.error({
              message: "Some error occurred, Please try again!",
              time: 5000
            });

            break;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#main[data-v-5eb9c08a],\r\n#footer[data-v-5eb9c08a] {\r\n  margin-left: 0px;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_style_index_0_id_5eb9c08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_style_index_0_id_5eb9c08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_style_index_0_id_5eb9c08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/exam/exam_result.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/frontend/exam/exam_result.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true& */ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true&");
/* harmony import */ var _exam_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam_result.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js&");
/* harmony import */ var _exam_result_vue_vue_type_style_index_0_id_5eb9c08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& */ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exam_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5eb9c08a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/exam/exam_result.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exam_result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_style_index_0_id_5eb9c08a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=style&index=0&id=5eb9c08a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exam_result_vue_vue_type_template_id_5eb9c08a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/exam/exam_result.vue?vue&type=template&id=5eb9c08a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("main", { staticClass: "main", attrs: { id: "main" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h5", { staticClass: "card-title" }, [_vm._v("Exam Result")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "row g-3",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.getStudentData.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.exam_number,
                          expression: "form.exam_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Application Number",
                      },
                      domProps: { value: _vm.form.exam_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "exam_number", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.exam_number
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(
                            "\r\n                    *" +
                              _vm._s(_vm.errors.exam_number[0]) +
                              "\r\n                  "
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                ]
              ),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _vm.getValue > 0
                ? _c("div", [
                    _vm.student_data[0].status == "0"
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-warning bg-warning border-0 alert-dismissible fade show",
                            attrs: { role: "alert" },
                          },
                          [
                            _vm._v(
                              "\r\n                  Your Exam Result Doesn't reached yet.,please Wait us! Thank\r\n                  You!\r\n                  "
                            ),
                            _c("button", {
                              staticClass: "btn-close",
                              attrs: {
                                type: "button",
                                "data-bs-dismiss": "alert",
                                "aria-label": "Close",
                              },
                            }),
                          ]
                        )
                      : _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-success bg-success text-light border-0 alert-dismissible fade show",
                            attrs: { role: "alert" },
                          },
                          [
                            _vm._v(
                              "\r\n                  exam Result\r\n                  "
                            ),
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("h5", { staticClass: "card-title" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.student_data[0].student.first_name
                                    ) +
                                      " " +
                                      _vm._s(
                                        _vm.student_data[0].student.father_name
                                      )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "card-subtitle mb-2 text-muted",
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                        Exam Result:"
                                    ),
                                    _c("b", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.student_data[0].exam_result)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(
                                      "\r\n                        Status:"
                                    ),
                                    _vm.student_data[0].status == "1"
                                      ? _c(
                                          "b",
                                          { staticClass: "text-danger" },
                                          [_vm._v("Promoted")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.student_data[0].status == "2"
                                      ? _c(
                                          "b",
                                          { staticClass: "text-danger" },
                                          [_vm._v("Failed")]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "card-text text-dark" },
                                  [
                                    _vm.student_data[0].status == "1"
                                      ? _c("em", [
                                          _vm._v(
                                            " Congratulations! you promoted for the main admission "
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.student_data[0].status == "2"
                                      ? _c("em", [
                                          _vm._v(
                                            " Sorry! You didn't pass our examination,Thank you for your paticipation "
                                          ),
                                        ])
                                      : _vm._e(),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "card-link",
                                    attrs: { href: "#" },
                                  },
                                  [_vm._v("print")]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("button", {
                              staticClass: "btn-close btn-close-white",
                              attrs: {
                                type: "button",
                                "data-bs-dismiss": "alert",
                                "aria-label": "Close",
                              },
                            }),
                          ]
                        ),
                  ])
                : _vm._e(),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pagetitle text-center" }, [
      _c("h1", { staticClass: "bg-success text-white" }, [
        _vm._v("WOLLO UNIVERSITY"),
      ]),
      _vm._v(" "),
      _c("h1", { staticClass: "bg-success text-white" }, [
        _vm._v("REGISTRAR AND ALUMNI DIRECTORATE"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Exam Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-2", staticStyle: { "padding-top": "30px" } },
      [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Search")]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);