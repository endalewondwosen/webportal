"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_alumni_registrar_official_transcript_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    this.axios.get('/api/user/getSingleApplicant/' + id).then(function (_ref) {
      var data = _ref.data;
      _this.applicants = data;
    })["catch"]();
  },
  data: function data() {
    return {
      applicants: {}
    };
  },
  methods: {
    downladBankStatement: function downladBankStatement(id, file) {
      this.axios({
        url: '/api/user/registerarBankStatementFile/' + id,
        method: 'GET',
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = file;
        link.click();
      });
    },
    downladCostSharing: function downladCostSharing(id, file) {
      this.axios({
        url: '/api/user/registerarBankStatementFile/' + id,
        method: 'GET',
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = file;
        link.click();
      });
    },
    downladOtherDocuments: function downladOtherDocuments(id, file) {
      this.axios({
        url: '/api/user/registerarOtherDocuments/' + id,
        method: 'GET',
        responseType: 'arraybuffer'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = file;
        link.click();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/alumni/registrar/official_transcript/details.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/official_transcript/details.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=c5c6086e& */ "./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__.render,
  _details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/alumni/registrar/official_transcript/details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_c5c6086e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=template&id=c5c6086e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/official_transcript/details.vue?vue&type=template&id=c5c6086e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "section profile" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body pt-3" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    staticStyle: { float: "right" },
                    attrs: { to: "/home/registrar_official_transcript" },
                  },
                  [_vm._v(" Back")]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-content pt-2" },
                  [
                    _vm._l(_vm.applicants, function (applicant, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass:
                            "tab-pane fade profile-overview active show",
                          attrs: { id: "profile-overview" },
                        },
                        [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v("Profile Details"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Full Name")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                _vm._s(applicant.first_name) +
                                  " " +
                                  _vm._s(applicant.father_name) +
                                  " " +
                                  _vm._s(applicant.grand_father_name)
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Sex")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.sex)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Mobile Number")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.mobile_number)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Email")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.email)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("University ID")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.university_id)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Admmission Type")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.admission.name)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Study Level")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.study.name)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("College")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.college.name)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Departement")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.departement.name)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Year of Graduation")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.year.name)),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.applicants, function (applicant, index) {
                      return _c(
                        "div",
                        {
                          key: index + 1,
                          staticClass: "tab-pane fade profile-overview",
                          attrs: { id: "profile-edit" },
                        },
                        [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v("Official Transcript Sent To"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Name of Institution")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.name_of_institution)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Destination Country")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.destination_country)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Address Of Institution")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.address_of_institution)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Mailing System")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.mailing_agent)),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.applicants, function (applicant, index) {
                      return _c(
                        "div",
                        {
                          key: index + 2,
                          staticClass: "tab-pane fade profile-overview pt-3",
                          attrs: { id: "profile-settings" },
                        },
                        [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v("Attached Documents"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Bank Statement")]
                            ),
                            _vm._v(" "),
                            applicant.bank_receipt
                              ? _c(
                                  "div",
                                  { staticClass: "col-lg-9 col-md-8" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info",
                                        on: {
                                          click: function ($event) {
                                            return _vm.downladBankStatement(
                                              applicant.id,
                                              applicant.bank_receipt
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "bx bxs-download",
                                        }),
                                      ]
                                    ),
                                  ]
                                )
                              : _c("p", [_vm._v("No File ")]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Cost Sharing Letter")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.cost_sharing_letter
                                ? _c(
                                    "div",
                                    { staticClass: "col-lg-9 col-md-8" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-info",
                                          on: {
                                            click: function ($event) {
                                              return _vm.downladCostSharing(
                                                applicant.id,
                                                applicant.cost_sharing_letter
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "bx bxs-download",
                                          }),
                                        ]
                                      ),
                                    ]
                                  )
                                : _c("p", [_vm._v("No File ")]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Application Number")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.application_number)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Reciept Number")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(_vm._s(applicant.reciept_number)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Other Documents")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.other_documents
                                ? _c(
                                    "div",
                                    { staticClass: "col-lg-9 col-md-8" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-info",
                                          on: {
                                            click: function ($event) {
                                              return _vm.downladOtherDocuments(
                                                applicant.id,
                                                applicant.other_documents
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "bx bxs-download",
                                          }),
                                        ]
                                      ),
                                    ]
                                  )
                                : _c("p", [_vm._v("No File ")]),
                            ]),
                          ]),
                        ]
                      )
                    }),
                  ],
                  2
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
    return _c("div", { staticClass: "pagetitle" }, [
      _c("h1", [_vm._v("Applicant Details")]),
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
          [_vm._v("Personal Information")]
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
          [_vm._v("Officail Transcript Sent To")]
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
              "data-bs-target": "#profile-settings",
            },
          },
          [_vm._v("Documents")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);