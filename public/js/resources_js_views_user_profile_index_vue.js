"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_profile_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Auth */ "./resources/js/Auth.js");
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
      loggedUser: this.auth.user,
      form: {
        name: this.auth.user.name,
        father_name: this.auth.user.father_name,
        gfather_name: this.auth.user.gfather_name,
        company: this.auth.user.company,
        country: this.auth.user.country,
        address: this.auth.user.address,
        phone: this.auth.user.phone,
        email: this.auth.user.email
      },
      pass: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      },
      errors: '',
      passerrors: '',
      currError: ''
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      var _this = this;

      var id = this.auth.user.id;
      this.axios.patch('/api/user/updateProfile/' + id, this.form).then(function () {
        // this.$router.push("/home/user-profile");
        _this.axios.post('/api/logout');

        _Auth__WEBPACK_IMPORTED_MODULE_0__["default"].logout(); //reset local storage

        _this.$router.push('/login');

        Toast.fire({
          icon: "success",
          title: "Your Profile Updated Successfully "
        });
      })["catch"](function (error) {
        switch (error.response.status) {
          case 422:
            _this.errors = error.response.data.errors;
            break;

          case 401:
            Toast.fire({
              icon: "error",
              title: error.response.data.message
            });
            break;

          case 403:
            Toast.fire({
              icon: "error",
              title: error.response.data.message
            });
            break;

          case 500:
            Toast.fire({
              icon: "error",
              title: "Something went wrong please,Please try again!"
            });
            break;

          default:
            Toast.fire({
              icon: "error",
              title: "Some error occurred, Please try again!"
            });
            break;
        }
      });
    },
    passwordUpdate: function passwordUpdate() {
      var _this2 = this;

      var id = this.auth.user.id;
      this.axios.patch('/api/user/updatePassword/' + id, this.pass).then(function () {
        // this.$router.push("/home/user-profile");
        _this2.axios.post('/api/logout');

        _Auth__WEBPACK_IMPORTED_MODULE_0__["default"].logout(); //reset local storage

        _this2.$router.push('/login');

        Toast.fire({
          icon: "success",
          title: "Your Password Updated Successfully "
        });
      })["catch"](function (error) {
        switch (error.response.status) {
          case 422:
            _this2.passerrors = error.response.data.errors;
            break;

          case 401:
            _this2.currError = error.response.data.message;
            _this2.passerrors = '';
            break;

          case 403:
            Toast.fire({
              icon: "error",
              title: error.response.data.message
            });
            break;

          case 500:
            Toast.fire({
              icon: "error",
              title: "Something went wrong please,Please try again!"
            });
            break;

          default:
            Toast.fire({
              icon: "error",
              title: "Some error occurred, Please try again!"
            });
            break;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/user_profile/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/user_profile/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=187472b7& */ "./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/user_profile/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user_profile/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user_profile/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user_profile/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_187472b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=187472b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user_profile/index.vue?vue&type=template&id=187472b7& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Profile")]),
      _vm._v(" "),
      _c("nav", [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            { staticClass: "breadcrumb-item" },
            [_c("router-link", { attrs: { to: "/home" } }, [_vm._v("Home")])],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("User")]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v("Profile"),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section profile" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-4" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-body profile-card pt-4 d-flex flex-column align-items-center",
              },
              [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "backend/assets/img/profile-img.jpg",
                    alt: "Profile",
                  },
                }),
                _vm._v(" "),
                _c("h2", [_vm._v(_vm._s(_vm.loggedUser.name))]),
                _vm._v(" "),
                _c("h3", [_vm._v(_vm._s(_vm.loggedUser.role))]),
                _vm._v(" "),
                _vm._m(0),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body pt-3" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content pt-2" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade show active profile-overview",
                    attrs: { id: "profile-overview" },
                  },
                  [
                    _c("h5", { staticClass: "card-title" }, [
                      _vm._v("Profile Details"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Full Name\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.name) +
                            " " +
                            _vm._s(_vm.loggedUser.father_name) +
                            " " +
                            _vm._s(_vm.loggedUser.gfather_name) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Company\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.company) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Job\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.role) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Country\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(_vm._s(_vm.loggedUser.country)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Address\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.address) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Phone\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.phone) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
                        _vm._v(
                          "\r\n                                        Email\r\n                                    "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                        _vm._v(
                          "\r\n                                        " +
                            _vm._s(_vm.loggedUser.email) +
                            "\r\n                                    "
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade profile-edit pt-3",
                    attrs: { id: "profile-edit" },
                  },
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.updateProfile.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "profileImage" },
                            },
                            [_vm._v("Profile Image")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("img", {
                              attrs: {
                                src: _vm.loggedUser.profile_image,
                                alt: "Profile Image",
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(2),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "fullName" },
                            },
                            [_vm._v("First Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
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
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.name
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.name[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "fullName" },
                            },
                            [_vm._v("Father Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.father_name,
                                  expression: "form.father_name",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Father Name",
                              },
                              domProps: { value: _vm.form.father_name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "father_name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.father_name
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.father_name[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "fullName" },
                            },
                            [_vm._v("Grand Father Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.gfather_name,
                                  expression: "form.gfather_name",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Grand Father Name",
                              },
                              domProps: { value: _vm.form.gfather_name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "gfather_name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.gfather_name
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.gfather_name[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "company" },
                            },
                            [_vm._v("Company")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.company,
                                  expression: "form.company",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Company Name",
                              },
                              domProps: { value: _vm.form.company },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "company",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.company
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.company[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "Country" },
                            },
                            [_vm._v("Country")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.country,
                                  expression: "form.country",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Country Name",
                              },
                              domProps: { value: _vm.form.country },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "country",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.country
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.country[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "Address" },
                            },
                            [_vm._v("Address")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.address,
                                  expression: "form.address",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Address" },
                              domProps: { value: _vm.form.address },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "address",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.address
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.address[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "Phone" },
                            },
                            [_vm._v("Phone Number")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.phone,
                                  expression: "form.phone",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Phone Number",
                              },
                              domProps: { value: _vm.form.phone },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.phone
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.phone[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "Phone" },
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
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
                              attrs: { type: "text", placeholder: "Email" },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.email
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.errors.email[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(3),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade pt-3",
                    attrs: { id: "profile-change-password" },
                  },
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.passwordUpdate.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "currentPassword" },
                            },
                            [_vm._v("Current Password")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass.current_password,
                                  expression: "pass.current_password",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                placeholder: "Current Password",
                              },
                              domProps: { value: _vm.pass.current_password },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.pass,
                                    "current_password",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.passerrors.current_password
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(
                                        _vm.passerrors.current_password[0]
                                      ) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.currError
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.currError) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "newPassword" },
                            },
                            [_vm._v("New Password")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass.new_password,
                                  expression: "pass.new_password",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                placeholder: "New Password",
                              },
                              domProps: { value: _vm.pass.new_password },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.pass,
                                    "new_password",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.passerrors.new_password
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    "\r\n                                                *" +
                                      _vm._s(_vm.passerrors.new_password[0]) +
                                      "\r\n                                            "
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 col-lg-3 col-form-label",
                              attrs: { for: "renewPassword" },
                            },
                            [_vm._v("Re-enter New Password")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.pass.new_password_confirmation,
                                  expression: "pass.new_password_confirmation",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                placeholder: "Re-enter New Password",
                              },
                              domProps: {
                                value: _vm.pass.new_password_confirmation,
                              },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.pass,
                                    "new_password_confirmation",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.passerrors.new_password_confirmation
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    " *" +
                                      _vm._s(
                                        _vm.passerrors
                                          .new_password_confirmation[0]
                                      )
                                  ),
                                ])
                              : _vm._e(),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                      ]
                    ),
                  ]
                ),
              ]),
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
    return _c("div", { staticClass: "social-links mt-2" }, [
      _c("a", { staticClass: "twitter", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-twitter" }),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "facebook", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-facebook" }),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "instagram", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-instagram" }),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "linkedin", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-linkedin" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav nav-tabs nav-tabs-bordered" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link active",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-overview",
            },
          },
          [
            _vm._v(
              "\r\n                                    Overview\r\n                                "
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-edit",
            },
          },
          [
            _vm._v(
              "\r\n                                    Edit Profile\r\n                                "
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-change-password",
            },
          },
          [
            _vm._v(
              "\r\n                                    Change Password\r\n                                "
            ),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pt-2" }, [
      _c("input", { staticClass: "form-control", attrs: { type: "file" } }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-danger btn-sm",
          attrs: { href: "#", title: "Remove my profile image" },
        },
        [_c("i", { staticClass: "bi bi-trash" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [
          _vm._v(
            "\r\n                                            Save Changes\r\n                                        "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [
          _vm._v(
            "\r\n                                            Change Password\r\n                                        "
          ),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);