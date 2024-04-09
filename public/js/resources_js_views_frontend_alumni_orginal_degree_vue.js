"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_alumni_orginal_degree_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      colleges: {},
      acadamic_years: {},
      admission_types: {},
      study_levels: {},
      departements: {},
      errors: {},
      first_name: "",
      father_name: "",
      grand_father_name: "",
      sex: "",
      university_id: "",
      mobile_number: "",
      email: "",
      admission_type: "",
      study_level: "",
      college_id: "",
      departement_id: "",
      year_of_graduation: "",
      service_type: "",
      bank_tr_ref: "",
      bank_receipt: null,
      cost_sharing_letter: null,
      other_documents: null,
      getstudentIdData: {},
      status: {
        year_id: "",
        application_number: ""
      },
      statusResult: ""
    };
  },
  computed: {
    getValue: function getValue() {
      var objectSize = 0;

      for (var k in this.getstudentIdData) {
        objectSize++;
      } // objectSize here holds the size of your object


      return objectSize;
    }
  },
  methods: {
    checkStatus: function checkStatus() {
      var _this = this;

      this.axios.post("/api/user/checkOrginalStatus", this.status).then(function (_ref) {
        var data = _ref.data;

        if (data == 2) {
          _this.statusResult = data;
        } else if (data == 1) {
          _this.statusResult = data;
        } else if (data == 0) {
          _this.statusResult = data;
        } else {
          Toast.fire({
            icon: "error",
            title: data.message
          });
        }

        _this.errors = "";
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    onbankRecietFileChange: function onbankRecietFileChange(e) {
      // console.log('selcted file', e.target.files[0])
      this.bank_receipt = e.target.files[0];
    },
    otherDocumnet: function otherDocumnet(e) {
      //  console.log('other documet', e.target.files[0]);
      this.other_documents = e.target.files[0];
    },
    costsharingDocument: function costsharingDocument(e) {
      // console.log('costsahring', e.target.files[0]);
      this.cost_sharing_letter = e.target.files[0];
    },
    getStudentId: function getStudentId() {
      var _this2 = this;

      this.axios.get("/api/user/getStudentId/" + this.form.university_id).then(function (_ref2) {
        var data = _ref2.data;
        _this2.getstudentIdData = data;

        if (_this2.getValue <= 0) {
          Toast.fire({
            icon: "error",
            title: "Sorry! We cannot find this University Id ,try again!"
          });
        }
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

          case 500:
            _this2.flashMessage.error({
              message: "Something went wrong please contact system admin!",
              time: 5000
            });

            break;

          default:
            _this2.flashMessage.error({
              message: "Some error occurred, Please try again!",
              time: 5000
            });

            break;
        }
      });
    },
    sendOfficialTranscript: function sendOfficialTranscript() {
      var _this3 = this;

      var fd = new FormData();
      fd.append("bank_reciept", this.bank_receipt);
      fd.append("other_document", this.other_documents);
      fd.append("cost_sharing", this.cost_sharing_letter);
      fd.append("first_name", this.first_name);
      fd.append("father_name", this.father_name);
      fd.append("grand_father_name", this.grand_father_name);
      fd.append("sex", this.sex);
      fd.append("university_id", this.university_id);
      fd.append("mobile_number", this.mobile_number);
      fd.append("email", this.email);
      fd.append("admission_type", this.admission_type);
      fd.append("study_level", this.study_level);
      fd.append("college_id", this.college_id);
      fd.append("departement_id", this.departement_id);
      fd.append("year_of_graduation", this.year_of_graduation);
      fd.append("service_type", this.service_type);
      fd.append("bank_tr_ref", this.bank_tr_ref);
      this.axios.post("/api/user/orginal_degree", fd).then(function () {
        _this3.$router.push("/");

        Toast.fire({
          icon: "success",
          title: "Your Request Submited Successfully "
        });
      })["catch"](function (error) {
        switch (error.response.status) {
          case 422:
            _this3.errors = error.response.data.errors;
            break;

          case 401:
            Toast.fire({
              icon: "success",
              title: error.response.data.message
            });
            break;

          case 403:
            _this3.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });

            break;

          case 500:
            _this3.flashMessage.error({
              message: "Something went wrong please contact system admin!",
              time: 5000
            });

            break;

          default:
            _this3.flashMessage.error({
              message: "Some error occurred, Please try again!",
              time: 5000
            });

            break;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.axios.get("/api/user/acadamic_years").then(function (_ref3) {
      var data = _ref3.data;
      _this4.acadamic_years = data;
    })["catch"]();
    this.axios.get("/api/user/colleges").then(function (_ref4) {
      var data = _ref4.data;
      _this4.colleges = data;
    })["catch"]();
    this.axios.get("/api/user/study_levels").then(function (_ref5) {
      var data = _ref5.data;
      _this4.study_levels = data;
    })["catch"]();
    this.axios.get("/api/user/admission_types").then(function (_ref6) {
      var data = _ref6.data;
      _this4.admission_types = data;
    })["catch"]();
    this.axios.get("/api/user/departements").then(function (_ref7) {
      var data = _ref7.data;
      _this4.departements = data;
    })["catch"]();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#main[data-v-961ef6ac],\r\n#footer[data-v-961ef6ac] {\r\n  margin-left: 0px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_style_index_0_id_961ef6ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_style_index_0_id_961ef6ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_style_index_0_id_961ef6ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/alumni/orginal_degree.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/frontend/alumni/orginal_degree.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true& */ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true&");
/* harmony import */ var _orginal_degree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orginal_degree.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js&");
/* harmony import */ var _orginal_degree_vue_vue_type_style_index_0_id_961ef6ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& */ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orginal_degree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "961ef6ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/alumni/orginal_degree.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orginal_degree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_style_index_0_id_961ef6ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=style&index=0&id=961ef6ac&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orginal_degree_vue_vue_type_template_id_961ef6ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/alumni/orginal_degree.vue?vue&type=template&id=961ef6ac&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
              _c("h5", { staticClass: "card-title text-center" }, [
                _vm._v(
                  "\r\n                Original Degree Request Form\r\n              "
                ),
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-content pt-2",
                  attrs: { id: "myTabjustifiedContent" },
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade",
                      attrs: {
                        id: "profile-justified",
                        role: "tabpanel",
                        "aria-labelledby": "profile-tab",
                      },
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "card" }, [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", { staticClass: "card-title" }, [
                                _vm._v("Orginal Degree"),
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "form",
                                  {
                                    staticClass: "row g-3",
                                    attrs: { enctype: "multipart/form-data" },
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.sendOfficialTranscript.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.university_id,
                                            expression: "university_id",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Enter your University Id",
                                        },
                                        domProps: { value: _vm.university_id },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.university_id =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.university_id
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.university_id[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                            value: _vm.first_name,
                                            expression: "first_name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "First Name",
                                        },
                                        domProps: { value: _vm.first_name },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.first_name = $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first_name
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.first_name[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                            value: _vm.father_name,
                                            expression: "father_name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Enter Father Name",
                                        },
                                        domProps: { value: _vm.father_name },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.father_name =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.father_name
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.father_name[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                            value: _vm.grand_father_name,
                                            expression: "grand_father_name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder:
                                            "Enter Grand Father Name",
                                        },
                                        domProps: {
                                          value: _vm.grand_father_name,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.grand_father_name =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.grand_father_name
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors
                                                      .grand_father_name[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                              value: _vm.sex,
                                              expression: "sex",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.sex = $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select Sex\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Male" } },
                                            [_vm._v("Male")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Female" } },
                                            [_vm._v("Female")]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.sex
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(_vm.errors.sex[0]) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                            value: _vm.mobile_number,
                                            expression: "mobile_number",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "09 10 45 67 23",
                                        },
                                        domProps: { value: _vm.mobile_number },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.mobile_number =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.mobile_number
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.mobile_number[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
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
                                            value: _vm.email,
                                            expression: "email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          placeholder: "someone@gmail.com",
                                        },
                                        domProps: { value: _vm.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.email = $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.email
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(_vm.errors.email[0]) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(10),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.year_of_graduation,
                                              expression: "year_of_graduation",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.year_of_graduation = $event
                                                .target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select year of graduation\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.acadamic_years,
                                            function (year) {
                                              return _c(
                                                "option",
                                                {
                                                  key: year.id,
                                                  domProps: { value: year.id },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(year.name) +
                                                      "\r\n                                  "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.year_of_graduation
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors
                                                      .year_of_graduation[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(11),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.college_id,
                                              expression: "college_id",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.college_id = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select college/school\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.colleges,
                                            function (college) {
                                              return _c(
                                                "option",
                                                {
                                                  key: college.id,
                                                  domProps: {
                                                    value: college.id,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(college.name) +
                                                      "\r\n                                  "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.college_id
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.college_id[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(12),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.departement_id,
                                              expression: "departement_id",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.departement_id = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select department\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.departements,
                                            function (departement) {
                                              return _c(
                                                "option",
                                                {
                                                  key: departement.id,
                                                  domProps: {
                                                    value: departement.id,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(departement.name) +
                                                      "\r\n                                  "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.departement_id
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.departement_id[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(13),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.admission_type,
                                              expression: "admission_type",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.admission_type = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select admission type\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.admission_types,
                                            function (admission) {
                                              return _c(
                                                "option",
                                                {
                                                  key: admission.id,
                                                  domProps: {
                                                    value: admission.id,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(admission.name) +
                                                      "\r\n                                  "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                          _vm._v(
                                            "\r\n                                  1\r\n                                "
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.admission_type
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.admission_type[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(14),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.study_level,
                                              expression: "study_level",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.study_level = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select study level\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.study_levels,
                                            function (study) {
                                              return _c(
                                                "option",
                                                {
                                                  key: study.id,
                                                  domProps: { value: study.id },
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(study.name) +
                                                      "\r\n                                  "
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.study_level
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.study_level[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(15),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.bank_tr_ref,
                                            expression: "bank_tr_ref",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Bank Deposit Tr. Ref.",
                                        },
                                        domProps: { value: _vm.bank_tr_ref },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.bank_tr_ref =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.bank_tr_ref
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.bank_tr_ref[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(16),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.service_type,
                                              expression: "service_type",
                                            },
                                          ],
                                          staticClass: "form-select",
                                          attrs: {
                                            id: "floatingSelect",
                                            "aria-label": "State",
                                          },
                                          on: {
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.service_type = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                selected: "",
                                                value: "",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Select service Type\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "Orginal Degree",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Orginal Degree\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value:
                                                  "Orginal Degree Replacement",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Orginal Degree Replacement\r\n                                  "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "Name Change" } },
                                            [
                                              _vm._v(
                                                "\r\n                                    Name Change\r\n                                  "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.service_type
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.service_type[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(17),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "file" },
                                        on: {
                                          change: _vm.onbankRecietFileChange,
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.bank_receipt
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors.bank_receipt[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(18),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "file" },
                                        on: { change: _vm.costsharingDocument },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.cost_sharing_letter
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors
                                                      .cost_sharing_letter[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _vm._m(19),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "file" },
                                        on: { change: _vm.otherDocumnet },
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.other_documents
                                        ? _c(
                                            "div",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                "\r\n                                  *" +
                                                  _vm._s(
                                                    _vm.errors
                                                      .other_documents[0]
                                                  ) +
                                                  "\r\n                                "
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(20),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade active show",
                      attrs: {
                        id: "contact-justified",
                        role: "tabpanel",
                        "aria-labelledby": "contact-tab",
                      },
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "card" }, [
                            _c("div", { staticClass: "card-body" }, [
                              _c("h5", { staticClass: "card-title" }, [
                                _vm._v("Orginal Degree Status"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  staticClass: "row g-3",
                                  on: {
                                    submit: function ($event) {
                                      $event.preventDefault()
                                      return _vm.checkStatus.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _vm._m(21),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.status.year_id,
                                            expression: "status.year_id",
                                          },
                                        ],
                                        staticClass: "form-select",
                                        attrs: {
                                          id: "floatingSelect",
                                          "aria-label": "State",
                                        },
                                        on: {
                                          change: function ($event) {
                                            var $$selectedVal =
                                              Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function (o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function (o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                            _vm.$set(
                                              _vm.status,
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
                                          {
                                            attrs: {
                                              selected: "",
                                              value: "",
                                              disabled: "",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                  Select Acadamic Year\r\n                                "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.acadamic_years,
                                          function (year) {
                                            return _c(
                                              "option",
                                              {
                                                key: year.id,
                                                domProps: { value: year.id },
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                  " +
                                                    _vm._s(year.name) +
                                                    "\r\n                                "
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _vm.errors.year_id
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\r\n                                *" +
                                                _vm._s(_vm.errors.year_id[0]) +
                                                "\r\n                              "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-4" }, [
                                    _vm._m(22),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.status.application_number,
                                          expression:
                                            "status.application_number",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Application Number",
                                      },
                                      domProps: {
                                        value: _vm.status.application_number,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.status,
                                            "application_number",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.application_number
                                      ? _c(
                                          "div",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              "\r\n                                *" +
                                                _vm._s(
                                                  _vm.errors
                                                    .application_number[0]
                                                ) +
                                                "\r\n                              "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                  _vm._v(" "),
                                  _vm._m(23),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _vm.statusResult == "0"
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "alert alert-warning bg-warning border-0 alert-dismissible fade show",
                                      attrs: { role: "alert" },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                            Your Original Degree Request is on\r\n                            Progress,please Wait us!\r\n                            Thank You!\r\n                            "
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
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.statusResult == "2"
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "alert alert-danger bg-danger text-light border-0 alert-dismissible fade show",
                                      attrs: { role: "alert" },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                            Your Original Degree Request is Rejected,please\r\n                            Contact The Registrar Office!\r\n                            Thank You\r\n                            "
                                      ),
                                      _c("button", {
                                        staticClass:
                                          "btn-close btn-close-white",
                                        attrs: {
                                          type: "button",
                                          "data-bs-dismiss": "alert",
                                          "aria-label": "Close",
                                        },
                                      }),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.statusResult == "1"
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "alert alert-success bg-success text-light border-0 alert-dismissible fade show",
                                      attrs: { role: "alert" },
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                            Your Original Degree Request is  Accepted.You Can take it as soon as possible.Thank you!\r\n                            "
                                      ),
                                      _c("button", {
                                        staticClass:
                                          "btn-close btn-close-white",
                                        attrs: {
                                          type: "button",
                                          "data-bs-dismiss": "alert",
                                          "aria-label": "Close",
                                        },
                                      }),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div"),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
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
    return _c("div", { staticClass: "pagetitle text-center mybody" }, [
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
      "ul",
      {
        staticClass: "nav nav-tabs d-flex",
        attrs: { id: "myTabjustified", role: "tablist" },
      },
      [
        _c(
          "li",
          {
            staticClass: "nav-item flex-fill",
            attrs: { role: "presentation" },
          },
          [
            _c(
              "button",
              {
                staticClass: "nav-link w-100",
                attrs: {
                  id: "home-tab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#home-justified",
                  type: "button",
                  role: "tab",
                  "aria-controls": "home",
                  "aria-selected": "false",
                },
              },
              [
                _vm._v(
                  "\r\n                    Instruction\r\n                  "
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "nav-item flex-fill",
            attrs: { role: "presentation" },
          },
          [
            _c(
              "button",
              {
                staticClass: "nav-link w-100",
                attrs: {
                  id: "profile-tab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#profile-justified",
                  type: "button",
                  role: "tab",
                  "aria-controls": "profile",
                  "aria-selected": "true",
                },
              },
              [
                _vm._v(
                  "\r\n                    Application Form\r\n                  "
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "nav-item flex-fill",
            attrs: { role: "presentation" },
          },
          [
            _c(
              "button",
              {
                staticClass: "nav-link w-100 active",
                attrs: {
                  id: "contact-tab",
                  "data-bs-toggle": "tab",
                  "data-bs-target": "#contact-justified",
                  type: "button",
                  role: "tab",
                  "aria-controls": "contact",
                  "aria-selected": "false",
                },
              },
              [
                _vm._v(
                  "\r\n                    Original Degree Status\r\n                  "
                ),
              ]
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane fade",
        attrs: {
          id: "home-justified",
          role: "tabpanel",
          "aria-labelledby": "home-tab",
        },
      },
      [
        _c("strong", { staticClass: "text-danger" }, [
          _vm._v("There is no instruction yet!!"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("ID No. ")])]
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
      [_c("b", [_vm._v("Mobile Number")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Email")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Year of Graduation")])]
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
      [_c("b", [_vm._v("Departement")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Admission Type")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Study Level")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Bank Deposit Tr. Ref.")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Service Type")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label text-danger", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Attach Receipt of Bank Deposit")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label text-danger", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Attach Cost sharing letter")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label text-danger", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Attach Other Documents")])]
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
        [
          _vm._v(
            "\r\n                                  Submit\r\n                                "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-secondary", attrs: { type: "reset" } },
        [
          _vm._v(
            "\r\n                                  Reset\r\n                                "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Year of Application")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "inputNanme4" } },
      [_c("b", [_vm._v("Application Number")])]
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
          [
            _vm._v(
              "\r\n                                Search\r\n                              "
            ),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);