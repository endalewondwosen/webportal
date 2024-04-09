"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_alumni_department_schedule_add_schedule_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: {},
      form: {
        announce: '',
        user_id: this.auth.user.id,
        exam_date: '',
        exam_time: '',
        exam_place: '',
        description: ''
      },
      announcementes: {},
      id: this.auth.user.id
    };
  },
  methods: {
    addAnnouncement: function addAnnouncement() {
      var _this = this;

      this.axios.post('/api/user/addExamSchedule', this.form).then(function (_ref) {
        var data = _ref.data;

        _this.$router.push('/home/exam_schedule_view');

        Toast.fire({
          icon: 'success',
          title: 'Exam Schedule Inserted successfully!'
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
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.axios.get('/api/user/getAnnouncements/' + this.id).then(function (_ref2) {
      var data = _ref2.data;
      _this2.announcementes = data;
    })["catch"]();
  }
});

/***/ }),

/***/ "./resources/js/views/alumni/department/schedule/add_schedule.vue":
/*!************************************************************************!*\
  !*** ./resources/js/views/alumni/department/schedule/add_schedule.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_schedule.vue?vue&type=template&id=03385e9c& */ "./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c&");
/* harmony import */ var _add_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_schedule.vue?vue&type=script&lang=js& */ "./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/alumni/department/schedule/add_schedule.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_schedule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_schedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_schedule_vue_vue_type_template_id_03385e9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add_schedule.vue?vue&type=template&id=03385e9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/department/schedule/add_schedule.vue?vue&type=template&id=03385e9c& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("h1", [_vm._v("Exam Schedule Add")]),
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
          _c("li", { staticClass: "breadcrumb-item" }, [
            _vm._v("Exam Schedule"),
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
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    staticStyle: { float: "right" },
                    attrs: { to: "/home/exam_schedule_view" },
                  },
                  [_vm._v(" All Exam Schedule")]
                ),
                _vm._v(" "),
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(
                    "Add Exam Schedule\r\n                                                  "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "row g-3",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.addAnnouncement.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.announce,
                              expression: "form.announce",
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
                                "announce",
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
                              attrs: { selected: "", value: "", disabled: "" },
                            },
                            [_vm._v("Select Announcement")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.announcementes, function (announce) {
                            return _c(
                              "option",
                              {
                                key: announce.id,
                                domProps: { value: announce.id },
                              },
                              [
                                _vm._v(
                                  "\r\n                                        " +
                                    _vm._s(announce.title) +
                                    "\r\n                                    "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.announce
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.announce[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.exam_date,
                            expression: "form.exam_date",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          placeholder: "Enter Anouncement Title",
                        },
                        domProps: { value: _vm.form.exam_date },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "exam_date", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.exam_date
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.exam_date[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.exam_time,
                            expression: "form.exam_time",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "2:00 a.m" },
                        domProps: { value: _vm.form.exam_time },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "exam_time", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.exam_time
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.exam_time[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.exam_place,
                            expression: "form.exam_place",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter exam place",
                        },
                        domProps: { value: _vm.form.exam_place },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "exam_place",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.exam_place
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.exam_place[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.description,
                            expression: "form.description",
                          },
                        ],
                        staticClass: "form-control",
                        staticStyle: { height: "100px" },
                        domProps: { value: _vm.form.description },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "description",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.description
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v("*" + _vm._s(_vm.errors.description[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm._m(5),
                  ]
                ),
              ],
              1
            ),
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
      [_c("b", [_vm._v("Announcement Title")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Exam Date")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Exam Time")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Exam Place")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Exam Description")])]
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