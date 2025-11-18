(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend-plugins"],{

/***/ "./assets/js/app.init.frontend.js":
/*!****************************************!*\
  !*** ./assets/js/app.init.frontend.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  "use strict";

  $("#main-wrapper").AdminSettings({
    Theme: false,
    // this can be true or false ( true means dark and false means light ),
    Layout: 'vertical',
    LogoBg: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    NavbarBg: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarType: '',
    // You can change it full / mini-sidebar / iconbar / overlay
    SidebarColor: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarPosition: true,
    // it can be true / false ( true means Fixed and false means absolute )
    HeaderPosition: true,
    // it can be true / false ( true means Fixed and false means absolute )
    BoxedLayout: false // it can be true / false ( true means Boxed and false means Fluid )
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_moment_locale_af_js-node_modules_mome-74ecea","vendors-node_modules_bootstrap-tagsinput_dist_bootstrap-tagsinput_js-node_modules_bootstrap4--1b7f1d","assets_extra-libs_sparkline_sparkline_js-assets_js_admin_js-assets_js_common_js-assets_js_cus-d41fe4"], function() { return __webpack_exec__("./assets/js/common.js"), __webpack_exec__("./assets/js/admin.js"), __webpack_exec__("./assets/js/app.init.frontend.js"), __webpack_exec__("./assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"), __webpack_exec__("./assets/extra-libs/sparkline/sparkline.js"), __webpack_exec__("./assets/js/waves.js"), __webpack_exec__("./assets/js/sidebarmenu.js"), __webpack_exec__("./assets/js/custom.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtcGx1Z2lucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVc7RUFDVCxZQUFZOztFQUNaQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNDLGFBQWEsQ0FBQztJQUM3QkMsS0FBSyxFQUFFLEtBQUs7SUFBRTtJQUNkQyxNQUFNLEVBQUUsVUFBVTtJQUNsQkMsTUFBTSxFQUFFLE9BQU87SUFBRTtJQUNqQkMsUUFBUSxFQUFFLE9BQU87SUFBRTtJQUNuQkMsV0FBVyxFQUFFLEVBQUU7SUFBRTtJQUNqQkMsWUFBWSxFQUFFLE9BQU87SUFBRTtJQUN2QkMsZUFBZSxFQUFFLElBQUk7SUFBRTtJQUN2QkMsY0FBYyxFQUFFLElBQUk7SUFBRTtJQUN0QkMsV0FBVyxFQUFFLEtBQUssQ0FBRTtFQUN4QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmluaXQuZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAkKFwiI21haW4td3JhcHBlclwiKS5BZG1pblNldHRpbmdzKHtcbiAgICAgICAgVGhlbWU6IGZhbHNlLCAvLyB0aGlzIGNhbiBiZSB0cnVlIG9yIGZhbHNlICggdHJ1ZSBtZWFucyBkYXJrIGFuZCBmYWxzZSBtZWFucyBsaWdodCApLFxuICAgICAgICBMYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgIExvZ29CZzogJ3NraW42JywgLy8gWW91IGNhbiBjaGFuZ2UgdGhlIFZhbHVlIHRvIGJlIHNraW4xL3NraW4yL3NraW4zL3NraW40L3NraW41L3NraW42XG4gICAgICAgIE5hdmJhckJnOiAnc2tpbjYnLCAvLyBZb3UgY2FuIGNoYW5nZSB0aGUgVmFsdWUgdG8gYmUgc2tpbjEvc2tpbjIvc2tpbjMvc2tpbjQvc2tpbjUvc2tpbjZcbiAgICAgICAgU2lkZWJhclR5cGU6ICcnLCAvLyBZb3UgY2FuIGNoYW5nZSBpdCBmdWxsIC8gbWluaS1zaWRlYmFyIC8gaWNvbmJhciAvIG92ZXJsYXlcbiAgICAgICAgU2lkZWJhckNvbG9yOiAnc2tpbjYnLCAvLyBZb3UgY2FuIGNoYW5nZSB0aGUgVmFsdWUgdG8gYmUgc2tpbjEvc2tpbjIvc2tpbjMvc2tpbjQvc2tpbjUvc2tpbjZcbiAgICAgICAgU2lkZWJhclBvc2l0aW9uOiB0cnVlLCAvLyBpdCBjYW4gYmUgdHJ1ZSAvIGZhbHNlICggdHJ1ZSBtZWFucyBGaXhlZCBhbmQgZmFsc2UgbWVhbnMgYWJzb2x1dGUgKVxuICAgICAgICBIZWFkZXJQb3NpdGlvbjogdHJ1ZSwgLy8gaXQgY2FuIGJlIHRydWUgLyBmYWxzZSAoIHRydWUgbWVhbnMgRml4ZWQgYW5kIGZhbHNlIG1lYW5zIGFic29sdXRlIClcbiAgICAgICAgQm94ZWRMYXlvdXQ6IGZhbHNlLCAvLyBpdCBjYW4gYmUgdHJ1ZSAvIGZhbHNlICggdHJ1ZSBtZWFucyBCb3hlZCBhbmQgZmFsc2UgbWVhbnMgRmx1aWQgKVxuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbIiQiLCJBZG1pblNldHRpbmdzIiwiVGhlbWUiLCJMYXlvdXQiLCJMb2dvQmciLCJOYXZiYXJCZyIsIlNpZGViYXJUeXBlIiwiU2lkZWJhckNvbG9yIiwiU2lkZWJhclBvc2l0aW9uIiwiSGVhZGVyUG9zaXRpb24iLCJCb3hlZExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=