"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_students_fresh_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        first_name: '',
        lastname_name: '',
        grand_father_name: '',
        sex: '',
        unversity_id: '',
        password: '',
        section: '',
        regstration_number: '',
        campus: '',
        college_id: '',
        block_number: '',
        dorm_number: '',
        year_id: ''
      },
      colleges: {},
      acadamic_years: {},
      excelFile: null
    };
  },
  methods: {
    addFreshStudents: function addFreshStudents() {
      var _this = this;

      this.axios.post('/api/user/fresh_students', this.form).then(function (_ref) {
        var data = _ref.data;

        _this.$router.push('/home/all-fresh_students');

        Toast.fire({
          icon: 'success',
          title: 'Student  Inserted successfully!'
        });
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

          case 403:
            _this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });

            break;

          case 500:
            _this.flashMessage.error({
              message: 'Something went wrong please contact system admin!',
              time: 5000
            });

            break;

          default:
            _this.flashMessage.error({
              message: 'Some error occurred, Please try again!',
              time: 5000
            });

            break;
        }
      });
    },
    selectedFile: function selectedFile(e) {
      this.excelFile = e.target.files[0];
      console.log(this.excelFile);
    },
    ImportExcel: function ImportExcel() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("excelFile", this.excelFile);
      this.axios.post("/api/user/importFreshStudents", formData).then(function (res) {
        if (res.status == 200) {
          _this2.$router.push('/home/all-fresh_students');

          Toast.fire({
            icon: 'success',
            title: 'Student  Inserted successfully!'
          });
        }
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.axios.get('/api/user/colleges').then(function (_ref2) {
      var data = _ref2.data;
      _this3.colleges = data;
    })["catch"]();
    this.axios.get('/api/user/acadamic_years').then(function (_ref3) {
      var data = _ref3.data;
      _this3.acadamic_years = data;
    })["catch"]();
  }
});

/***/ }),

/***/ "./resources/js/views/students/fresh/create.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/students/fresh/create.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=7043c6a5& */ "./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/students/fresh/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_7043c6a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=7043c6a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/students/fresh/create.vue?vue&type=template&id=7043c6a5& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Fresh Student Add")]),
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
            _vm._v("Fresh Student"),
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
                  _vm._v("Add Fresh Student\r\n                            "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { float: "right" },
                      attrs: { to: "/home/all-fresh_students" },
                    },
                    [_vm._v(" All Fresh Student")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row justify-content-start" }, [
                  _c("div", { staticClass: "col-md-6 border" }, [
                    _c("h3", { staticClass: "text-primary italic" }, [
                      _vm._v("Import From Excel"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.ImportExcel.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "form-gruop" }, [
                          _c("input", {
                            staticClass: "form-control text-success",
                            attrs: { type: "file", name: "file" },
                            on: { change: _vm.selectedFile },
                          }),
                        ]),
                        _c("br"),
                        _vm._v(" "),
                        _vm.errors.excelFile
                          ? _c("div", { staticClass: "text-danger" }, [
                              _vm._v("*" + _vm._s(_vm.errors.excelFile[0])),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._m(0),
                        _c("br"),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "row g-3",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.addFreshStudents.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.year_id,
                            expression: "form.year_id",
                          },
                        ],
                        staticClass: "form-select",
                        attrs: { id: "floatingSelect", "aria-label": "State" },
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
                              "year_id",
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
                          { attrs: { selected: "", value: "", disabled: "" } },
                          [_vm._v("Select Acadamic Year")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.acadamic_years, function (year) {
                          return _c(
                            "option",
                            { key: year.id, domProps: { value: year.id } },
                            [
                              _vm._v(
                                "\r\n                                        " +
                                  _vm._s(year.name) +
                                  "\r\n                                    "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.year_id
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.year_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.college_id,
                            expression: "form.college_id",
                          },
                        ],
                        staticClass: "form-select",
                        attrs: { id: "floatingSelect", "aria-label": "State" },
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
                              "college_id",
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
                          { attrs: { selected: "", value: "", disabled: "" } },
                          [_vm._v("Select college/school")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.colleges, function (college) {
                          return _c(
                            "option",
                            {
                              key: college.id,
                              domProps: { value: college.id },
                            },
                            [
                              _vm._v(
                                "\r\n                                        " +
                                  _vm._s(college.name) +
                                  "\r\n                                    "
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.college_id
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.college_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.campus,
                          expression: "form.campus",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter Campus Name" },
                      domProps: { value: _vm.form.campus },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "campus", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.campus
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.campus[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.first_name,
                          expression: "form.first_name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "First Name" },
                      domProps: { value: _vm.form.first_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "first_name", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.first_name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.first_name[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.lastname_name,
                          expression: "form.lastname_name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter Father Name" },
                      domProps: { value: _vm.form.lastname_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "lastname_name",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.lastname_name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.lastname_name[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.grand_father_name,
                          expression: "form.grand_father_name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter Grand Father Name",
                      },
                      domProps: { value: _vm.form.grand_father_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "grand_father_name",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.grand_father_name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.grand_father_name[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.sex,
                            expression: "form.sex",
                          },
                        ],
                        staticClass: "form-select",
                        attrs: { id: "floatingSelect", "aria-label": "State" },
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
                              "sex",
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
                          { attrs: { selected: "", value: "", disabled: "" } },
                          [_vm._v("Select Sex")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Male" } }, [
                          _vm._v("Male"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Female" } }, [
                          _vm._v("Female"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.errors.sex
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.sex[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(8),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.unversity_id,
                          expression: "form.unversity_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter University ID",
                      },
                      domProps: { value: _vm.form.unversity_id },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "unversity_id",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.unversity_id
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.unversity_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter University Password",
                      },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.password[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.regstration_number,
                          expression: "form.regstration_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter Registration Number",
                      },
                      domProps: { value: _vm.form.regstration_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "regstration_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.regstration_number
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(
                            "*" + _vm._s(_vm.errors.regstration_number[0])
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.block_number,
                          expression: "form.block_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Enter Block Number",
                      },
                      domProps: { value: _vm.form.block_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "block_number",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.block_number
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.block_number[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(12),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.dorm_number,
                          expression: "form.dorm_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter Dorm Number" },
                      domProps: { value: _vm.form.dorm_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "dorm_number", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.dorm_number
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.dorm_number[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm._m(13),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.section,
                          expression: "form.section",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Enter Section" },
                      domProps: { value: _vm.form.section },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "section", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.section
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v("*" + _vm._s(_vm.errors.section[0])),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _vm._m(14),
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
    return _c("div", { staticClass: "form-gruop" }, [
      _c("input", {
        staticClass: "btn btn-success",
        attrs: { type: "submit", value: "add" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Acadamic Year")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("College/School")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Campus Name")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("First Name")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Father Name")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Grand Father Name")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Sex")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("University ID")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("University Password")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Registration Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Block Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Dorm Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Section")])]
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