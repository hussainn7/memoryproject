(self["webpackChunk"] = self["webpackChunk"] || []).push([["plugins"],{

/***/ "./assets/js/app.init.light-sidebar.js":
/*!*********************************************!*\
  !*** ./assets/js/app.init.light-sidebar.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  "use strict";

  $("#main-wrapper").AdminSettings({
    Theme: false,
    // this can be true or false ( true means dark and false means light ),
    Layout: 'horizontal',
    LogoBg: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    NavbarBg: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarType: 'full',
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_moment_locale_af_js-node_modules_mome-74ecea","vendors-node_modules_bootstrap-tagsinput_dist_bootstrap-tagsinput_js-node_modules_bootstrap4--1b7f1d","assets_extra-libs_sparkline_sparkline_js-assets_js_admin_js-assets_js_common_js-assets_js_cus-d41fe4"], function() { return __webpack_exec__("./assets/js/common.js"), __webpack_exec__("./assets/js/admin.js"), __webpack_exec__("./assets/js/app.init.light-sidebar.js"), __webpack_exec__("./assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"), __webpack_exec__("./assets/extra-libs/sparkline/sparkline.js"), __webpack_exec__("./assets/js/waves.js"), __webpack_exec__("./assets/js/sidebarmenu.js"), __webpack_exec__("./assets/js/custom.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVc7RUFDVCxZQUFZOztFQUlaQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNDLGFBQWEsQ0FBQztJQUM3QkMsS0FBSyxFQUFFLEtBQUs7SUFBRTtJQUNkQyxNQUFNLEVBQUUsWUFBWTtJQUNwQkMsTUFBTSxFQUFFLE9BQU87SUFBRTtJQUNqQkMsUUFBUSxFQUFFLE9BQU87SUFBRTtJQUNuQkMsV0FBVyxFQUFFLE1BQU07SUFBRTtJQUNyQkMsWUFBWSxFQUFFLE9BQU87SUFBRTtJQUN2QkMsZUFBZSxFQUFFLElBQUk7SUFBRTtJQUN2QkMsY0FBYyxFQUFFLElBQUk7SUFBRTtJQUN0QkMsV0FBVyxFQUFFLEtBQUssQ0FBRTtFQUN4QixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmluaXQubGlnaHQtc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG5cblxuICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLkFkbWluU2V0dGluZ3Moe1xuICAgICAgICBUaGVtZTogZmFsc2UsIC8vIHRoaXMgY2FuIGJlIHRydWUgb3IgZmFsc2UgKCB0cnVlIG1lYW5zIGRhcmsgYW5kIGZhbHNlIG1lYW5zIGxpZ2h0ICksXG4gICAgICAgIExheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgICBMb2dvQmc6ICdza2luNicsIC8vIFlvdSBjYW4gY2hhbmdlIHRoZSBWYWx1ZSB0byBiZSBza2luMS9za2luMi9za2luMy9za2luNC9za2luNS9za2luNlxuICAgICAgICBOYXZiYXJCZzogJ3NraW42JywgLy8gWW91IGNhbiBjaGFuZ2UgdGhlIFZhbHVlIHRvIGJlIHNraW4xL3NraW4yL3NraW4zL3NraW40L3NraW41L3NraW42XG4gICAgICAgIFNpZGViYXJUeXBlOiAnZnVsbCcsIC8vIFlvdSBjYW4gY2hhbmdlIGl0IGZ1bGwgLyBtaW5pLXNpZGViYXIgLyBpY29uYmFyIC8gb3ZlcmxheVxuICAgICAgICBTaWRlYmFyQ29sb3I6ICdza2luNicsIC8vIFlvdSBjYW4gY2hhbmdlIHRoZSBWYWx1ZSB0byBiZSBza2luMS9za2luMi9za2luMy9za2luNC9za2luNS9za2luNlxuICAgICAgICBTaWRlYmFyUG9zaXRpb246IHRydWUsIC8vIGl0IGNhbiBiZSB0cnVlIC8gZmFsc2UgKCB0cnVlIG1lYW5zIEZpeGVkIGFuZCBmYWxzZSBtZWFucyBhYnNvbHV0ZSApXG4gICAgICAgIEhlYWRlclBvc2l0aW9uOiB0cnVlLCAvLyBpdCBjYW4gYmUgdHJ1ZSAvIGZhbHNlICggdHJ1ZSBtZWFucyBGaXhlZCBhbmQgZmFsc2UgbWVhbnMgYWJzb2x1dGUgKVxuICAgICAgICBCb3hlZExheW91dDogZmFsc2UsIC8vIGl0IGNhbiBiZSB0cnVlIC8gZmFsc2UgKCB0cnVlIG1lYW5zIEJveGVkIGFuZCBmYWxzZSBtZWFucyBGbHVpZCApXG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiJCIsIkFkbWluU2V0dGluZ3MiLCJUaGVtZSIsIkxheW91dCIsIkxvZ29CZyIsIk5hdmJhckJnIiwiU2lkZWJhclR5cGUiLCJTaWRlYmFyQ29sb3IiLCJTaWRlYmFyUG9zaXRpb24iLCJIZWFkZXJQb3NpdGlvbiIsIkJveGVkTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==