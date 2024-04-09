"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_users_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: {},
      form: {
        name: '',
        email: '',
        role: ''
      },
      departements: {}
    };
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    this.axios.get('/api/user/users/' + id).then(function (_ref) {
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
      this.axios.patch('/api/user/users/' + id, this.form).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$router.push('/home/all-users');

        Toast.fire({
          icon: 'info',
          title: 'User Updated successfully!'
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
  },
  mounted: function mounted() {
    var _this3 = this;

    this.axios.get('/api/user/departements').then(function (_ref3) {
      var data = _ref3.data;
      _this3.departements = data;
    })["catch"]();
  }
});

/***/ }),

/***/ "./resources/js/views/users/edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/users/edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=6cf56770& */ "./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/users/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/users/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6cf56770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=6cf56770& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/edit.vue?vue&type=template&id=6cf56770& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "pagetitle" }, [
        _c("h1", [_vm._v("User List")]),
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
            _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Users")]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Data"),
            ]),
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
                    _vm._v("Add User\r\n                            "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        staticStyle: { float: "right" },
                        attrs: { to: "/home/all-users" },
                      },
                      [_vm._v(" All Users")]
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
                    _c("div", { staticClass: "col-md-6" }, [
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
                        attrs: {
                          type: "text",
                          placeholder: "Enter Email Address",
                        },
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
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.role,
                              expression: "form.role",
                            },
                          ],
                          staticClass: "form-select",
                          attrs: {
                            id: "floatingSelect",
                            "aria-label": "State",
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "role",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { value: "", disabled: "", selected: "" },
                            },
                            [_vm._v("select role")]
                          ),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Admin" } }, [
                            _vm._v("Admin"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Finance" } }, [
                            _vm._v("Finance"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Department" } }, [
                            _vm._v("Department"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Registrar" } }, [
                            _vm._v("Registrar"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors.role
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.role[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm.form.role == "Department"
                      ? _c("div", { staticClass: "col-md-6" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.departement,
                                  expression: "form.departement",
                                },
                              ],
                              staticClass: "form-select",
                              attrs: {
                                id: "floatingSelect",
                                "aria-label": "State",
                              },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "departement",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "",
                                    disabled: "",
                                    selected: "",
                                  },
                                },
                                [_vm._v("select Department")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.departements, function (departement) {
                                return _c(
                                  "option",
                                  {
                                    key: departement.id,
                                    domProps: { value: departement.id },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                        " +
                                        _vm._s(departement.name) +
                                        "\r\n                                    "
                                    ),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.departement
                            ? _c("div", { staticClass: "text-danger" }, [
                                _vm._v("*" + _vm._s(_vm.errors.departement[0])),
                              ])
                            : _vm._e(),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          placeholder: "Enter Email Address",
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.email[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm._m(4),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("FlashMessage", { attrs: { position: "right bottom" } }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("User Full Name")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputPassword4" } },
      [_c("strong", [_vm._v("Role")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputPassword4" } },
      [_c("strong", [_vm._v("Department")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputEmail4" } },
      [_c("strong", [_vm._v("Email")])]
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