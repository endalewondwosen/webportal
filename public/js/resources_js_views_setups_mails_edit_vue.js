"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_setups_mails_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: {},
      form: {
        name: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    this.axios.get('/api/user/mails/' + id).then(function (_ref) {
      var data = _ref.data;
      _this.form = data;
    })["catch"](function (error) {
      Toast.fire({
        icon: 'success',
        title: error.response.data.message
      });
    });
  },
  methods: {
    Update: function Update() {
      var _this2 = this;

      var id = this.$route.params.id;
      this.axios.patch('/api/user/mails/' + id, this.form).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$router.push('/home/all-mails');

        Toast.fire({
          icon: 'info',
          title: 'mail Updated successfully!'
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

/***/ "./resources/js/views/setups/mails/edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/setups/mails/edit.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=40da8272& */ "./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/setups/mails/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_40da8272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=40da8272& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/setups/mails/edit.vue?vue&type=template&id=40da8272& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Mail add ")]),
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
          _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Mail")]),
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
                  _vm._v("Edit Mail \r\n                            "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { float: "right" },
                      attrs: { to: "/home/all-mails" },
                    },
                    [_vm._v(" All mails ")]
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
                      return _vm.Update.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col-md-12" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter mail name" },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.name[0])),
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
      [_c("b", [_vm._v("Mail name  ")])]
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