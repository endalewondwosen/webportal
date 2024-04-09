"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_alumni_registrar_admission_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.axios.get('/api/user/getSingleAdmissionApplicant/' + id).then(function (_ref) {
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
    downladaAdmitionBankStatement: function downladaAdmitionBankStatement(id, file) {
      this.axios({
        url: '/api/user/admissionBankStatementFile/' + id,
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
    downladAdmissionStudentCopyFile: function downladAdmissionStudentCopyFile(id, file) {
      this.axios({
        url: '/api/user/admissionStudentCopyFile/' + id,
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
    downladAdmissionOrginalDegree: function downladAdmissionOrginalDegree(id, file) {
      this.axios({
        url: '/api/user/admissionOrginalDegreeFile/' + id,
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
    downladAdmissionOtherDocuments: function downladAdmissionOtherDocuments(id, file) {
      this.axios({
        url: '/api/user/admissionOrginalDegreeFile/' + id,
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

/***/ "./resources/js/views/alumni/registrar/admission/details.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/admission/details.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=1c1aecc8& */ "./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__.render,
  _details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/alumni/registrar/admission/details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_1c1aecc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./details.vue?vue&type=template&id=1c1aecc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/alumni/registrar/admission/details.vue?vue&type=template&id=1c1aecc8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                    attrs: { to: "/home/registrar_admission_view" },
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
                                "\n                                        " +
                                  _vm._s(applicant.first_name) +
                                  " " +
                                  _vm._s(applicant.father_name) +
                                  "\n                                        " +
                                  _vm._s(applicant.grand_father_name) +
                                  "\n                                    "
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
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.mobile_number) +
                                  "\n                                    "
                              ),
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
                              [_vm._v("Nationality")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.nationality) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Region")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.region) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Zone/Subcity")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.zone_or_subcity) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Woreda")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.woreda) +
                                  "\n                                    "
                              ),
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
                            _vm._v("Education Background"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("b", { staticClass: "text-info" }, [
                              _vm._v("1.UNDERGRADUATE EDUCATION"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        Institution Name\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    applicant.undergraduate_unversity_name
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        CGPA\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.undergraduate__cgpa) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        Field Of Study\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    applicant.undergraduate_field_of_study
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("b", { staticClass: "text-info" }, [
                            _vm._v("2.POSTGRADUATE EDUCATION"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        Institution Name\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    applicant.postgraduate_unversity_name
                                  ) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        CGPA\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.postgraduate__cgpa) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        Field Of Study\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    applicant.postgraduate_field_of_study
                                  ) +
                                  "\n                                    "
                              ),
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
                          attrs: { id: "admission-view" },
                        },
                        [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v("Admission Request"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Admmission Title")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.announce.title) +
                                  "\n                                    "
                              ),
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
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.study.name) +
                                  "\n                                    "
                              ),
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
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.college.name) +
                                  "\n                                    "
                              ),
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
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.departement.name) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [
                                _vm._v(
                                  "\n                                        Year of Admission\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.year.name) +
                                  "\n                                    "
                              ),
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
                          key: index + 3,
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
                              [
                                _vm._v(
                                  "\n                                        Application Number\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.application_number) +
                                  "\n                                    "
                              ),
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
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(applicant.receipt_number) +
                                  "\n                                    "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-3 col-md-4 label" },
                              [_vm._v("Bank Statement")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.bank_statement
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
                                              return _vm.downladaAdmitionBankStatement(
                                                applicant.id,
                                                applicant.bank_statement
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
                              [
                                _vm._v(
                                  "\n                                        Student Copy\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.bank_statement
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
                                              return _vm.downladAdmissionStudentCopyFile(
                                                applicant.id,
                                                applicant.bank_statement
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
                              [_vm._v("Orginal Degree")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.orginal_degree
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
                                              return _vm.downladAdmissionOrginalDegree(
                                                applicant.id,
                                                applicant.orginal_degree
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
                              [_vm._v("Other Documents")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                              applicant.other_document
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
                                              return _vm.downladAdmissionOtherDocuments(
                                                applicant.id,
                                                applicant.orginal_degree
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
          [_vm._v("Education Backeground")]
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
              "data-bs-target": "#admission-view",
            },
          },
          [
            _vm._v(
              "\n                                    Admission Request\n                                "
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