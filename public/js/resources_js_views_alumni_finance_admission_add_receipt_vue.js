"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_alumni_finance_admission_add_receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: {},
      form: {
        receipt_number: ''
      },
      applicant: {}
    };
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    this.axios.get('/api/user/getAdmissionApplicant/' + id).then(function (_ref) {
      var data = _ref.data;
      _this.form = data;
    })["catch"]();
  },
  methods: {
    addReciptNumber: function addReciptNumber() {
      var _this2 = this;

      var id = this.$route.params.id;
      this.axios.post('/api/user/admisson_reciept_add/' + id, this.form).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$router.push('/home/finance_view_admission');

        Toast.fire({
          icon: 'success',
          title: 'Receipt Number Inserted successfully!'
        });
      })["catch"](function (error) {
        switch (error.response.status) {
          case 422:
            _this2.errors = error.response.data.errors;
            break;

          case 401:
            _this2.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });

            break;

          case 403:
            _this2.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });

            break;

          case 500:
            _this2.flashMessage.error({
              message: 'Something went wrong please contact system admin!',
              time: 5000
            });

            break;

          default:
            _this2.flashMessage.error({
              message: 'Some error occurred, Please try again!',
              time: 5000
            });

            break;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#emp_photo[data-v-45ad1b66] {\n    width: 400px;\n    height: 400px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_style_index_0_id_45ad1b66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_style_index_0_id_45ad1b66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_style_index_0_id_45ad1b66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/alumni/finance/admission/add_receipt.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/alumni/finance/admission/add_receipt.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true& */ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true&");
/* harmony import */ var _add_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_receipt.vue?vue&type=script&lang=js& */ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js&");
/* harmony import */ var _add_receipt_vue_vue_type_style_index_0_id_45ad1b66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& */ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "45ad1b66",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/alumni/finance/admission/add_receipt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_style_index_0_id_45ad1b66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=style&index=0&id=45ad1b66&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_receipt_vue_vue_type_template_id_45ad1b66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/finance/admission/add_receipt.vue?vue&type=template&id=45ad1b66&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "pagetitle" }, [
      _c("h1", [_vm._v("Add Reciept Number")]),
      _vm._v(" "),
      _c("nav", [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _vm._v("Recipt Number"),
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Data")]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "h5",
                { staticClass: "card-title" },
                [
                  _vm._v("Add Reciept Number\n                            "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { float: "right" },
                      attrs: { to: "/home/finance_view_admission" },
                    },
                    [_vm._v(" Back")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "row g-3",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.addReciptNumber.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col-md-6" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.receipt_number,
                          expression: "form.receipt_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter Reciept Number",
                      },
                      domProps: { value: _vm.form.receipt_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "receipt_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.receipt_number
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.receipt_number[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                ]
              ),
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
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Receipt Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-secondary", attrs: { type: "reset" } },
        [_vm._v("Reset")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);