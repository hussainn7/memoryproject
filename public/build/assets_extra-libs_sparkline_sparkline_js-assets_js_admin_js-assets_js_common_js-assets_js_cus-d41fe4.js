(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_extra-libs_sparkline_sparkline_js-assets_js_admin_js-assets_js_common_js-assets_js_cus-d41fe4"],{

/***/ "./assets/extra-libs/sparkline/sparkline.js":
/*!**************************************************!*\
  !*** ./assets/extra-libs/sparkline/sparkline.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function (a, b, c) {
  (function (a) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
  })(function (d) {
    "use strict";

    var e = {},
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L = 0;
    f = function f() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: c,
          normalRangeMax: c,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: c,
          chartRangeMax: c,
          chartRangeMinX: c,
          chartRangeMaxX: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: c,
          nullColor: c,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          colorMap: c,
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              "-1": "Loss",
              0: "Draw",
              1: "Win"
            }
          }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: c,
          thresholdValue: 0,
          chartRangeMax: c,
          chartRangeMin: c,
          chartRangeClip: !1,
          tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: c,
          tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: {
              r: "Range",
              p: "Performance",
              t: "Target"
            }
          }
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: c,
          targetColor: "#4a2",
          chartRangeMax: c,
          chartRangeMin: c,
          tooltipFormat: new h("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    }, E = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', g = function g() {
      var a, b;
      return a = function a() {
        this.init.apply(this, arguments);
      }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0](), arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a;
    }, d.SPFormatClass = h = g({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(a, b) {
        this.format = a, this.fclass = b;
      },
      render: function render(a, b, d) {
        var e = this,
          f = a,
          g,
          h,
          i,
          j,
          k;
        return this.format.replace(this.fre, function () {
          var a;
          return h = arguments[1], i = arguments[3], g = e.precre.exec(h), g ? (k = g[2], h = g[1]) : k = !1, j = f[h], j === c ? "" : i && b && b[i] ? (a = b[i], a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (d.get("numberFormatter") ? j = d.get("numberFormatter")(j) : j = s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), j);
        });
      }
    }), d.spformat = function (a, b) {
      return new h(a, b);
    }, i = function i(a, b, c) {
      return a < b ? b : a > c ? c : a;
    }, j = function j(a, c) {
      var d;
      return c === 2 ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]);
    }, k = function k(a) {
      var b;
      switch (a) {
        case "undefined":
          a = c;
          break;
        case "null":
          a = null;
          break;
        case "true":
          a = !0;
          break;
        case "false":
          a = !1;
          break;
        default:
          b = parseFloat(a), a == b && (a = b);
      }
      return a;
    }, l = function l(a) {
      var b,
        c = [];
      for (b = a.length; b--;) c[b] = k(a[b]);
      return c;
    }, m = function m(a, b) {
      var c,
        d,
        e = [];
      for (c = 0, d = a.length; c < d; c++) a[c] !== b && e.push(a[c]);
      return e;
    }, n = function n(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    }, s = function s(a, b, c, e, f) {
      var g, h;
      a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f);
      for (h = g - c; h > 0; h -= c) a.splice(h, 0, e);
      return a.join("");
    }, o = function o(a, b, c) {
      var d;
      for (d = b.length; d--;) {
        if (c && b[d] === null) continue;
        if (b[d] !== a) return !1;
      }
      return !0;
    }, p = function p(a) {
      var b = 0,
        c;
      for (c = a.length; c--;) b += typeof a[c] == "number" ? a[c] : 0;
      return b;
    }, r = function r(a) {
      return d.isArray(a) ? a : [a];
    }, q = function q(b) {
      var c;
      a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c[typeof a.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = b);
    }, d.fn.simpledraw = function (b, e, f, g) {
      var h, i;
      if (f && (h = this.data("_jqs_vcanvas"))) return h;
      if (d.fn.sparkline.canvas === !1) return !1;
      if (d.fn.sparkline.canvas === c) {
        var j = a.createElement("canvas");
        if (!j.getContext || !j.getContext("2d")) {
          if (!a.namespaces || !!a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;
          a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function (a, b, c, d) {
            return new J(a, b, c);
          };
        } else d.fn.sparkline.canvas = function (a, b, c, d) {
          return new I(a, b, c, d);
        };
      }
      return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h;
    }, d.fn.cleardraw = function () {
      var a = this.data("_jqs_vcanvas");
      a && a.reset();
    }, d.RangeMapClass = t = g({
      init: function init(a) {
        var b,
          c,
          d = [];
        for (b in a) a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]), c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]), c[2] = a[b], d.push(c));
        this.map = a, this.rangelist = d || !1;
      },
      get: function get(a) {
        var b = this.rangelist,
          d,
          e,
          f;
        if ((f = this.map[a]) !== c) return f;
        if (b) for (d = b.length; d--;) {
          e = b[d];
          if (e[0] <= a && e[1] >= a) return e[2];
        }
        return c;
      }
    }), d.range_map = function (a) {
      return new t(a);
    }, u = g({
      init: function init(a, b) {
        var c = d(a);
        this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight");
      },
      registerSparkline: function registerSparkline(a) {
        this.splist.push(a), this.over && this.updateDisplay();
      },
      registerCanvas: function registerCanvas(a) {
        var b = d(a.canvas);
        this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this));
      },
      reset: function reset(a) {
        this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c);
      },
      mouseclick: function mouseclick(a) {
        var b = d.Event("sparklineClick");
        b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b);
      },
      mouseenter: function mouseenter(b) {
        d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        d(a.body).unbind("mousemove.jqs");
        var b = this.splist,
          c = b.length,
          e = !1,
          f,
          g;
        this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);
        for (g = 0; g < c; g++) f = b[g], f.clearRegionHighlight() && (e = !0);
        e && this.canvas.render();
      },
      mousemove: function mousemove(a) {
        this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var a = this.splist,
          b = a.length,
          c = !1,
          e = this.$canvas.offset(),
          f = this.currentPageX - e.left,
          g = this.currentPageY - e.top,
          h,
          i,
          j,
          k,
          l;
        if (!this.over) return;
        for (j = 0; j < b; j++) i = a[j], k = i.setRegionHighlight(this.currentEl, f, g), k && (c = !0);
        if (c) {
          l = d.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l);
          if (this.tooltip) {
            h = "";
            for (j = 0; j < b; j++) i = a[j], h += i.getCurrentRegionTooltip();
            this.tooltip.setContent(h);
          }
          this.disableHighlight || this.canvas.render();
        }
        k === null && this.mouseleave();
      }
    }), v = g({
      sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function init(b) {
        var c = b.get("tooltipClassname", "jqstooltip"),
          e = this.sizeStyle,
          f;
        this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", {
          id: "jqssizetip",
          style: e,
          "class": c
        }), this.tooltip = d("<div/>", {
          id: "jqstooltip",
          "class": c
        }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition();
      },
      getSize: function getSize(a) {
        this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove();
      },
      setContent: function setContent(a) {
        if (!a) {
          this.tooltip.css("visibility", "hidden"), this.hidden = !0;
          return;
        }
        this.getSize(a), this.tooltip.html(a).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        }), this.hidden && (this.hidden = !1, this.updatePosition());
      },
      updatePosition: function updatePosition(a, b) {
        if (a === c) {
          if (this.mousex === c) return;
          a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop;
        } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;
        if (!this.height || !this.width || this.hidden) return;
        b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({
          left: a,
          top: b
        });
      },
      remove: function remove() {
        this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs");
      }
    }), F = function F() {
      q(E);
    }, d(F), K = [], d.fn.sparkline = function (b, e) {
      return this.each(function () {
        var f = new d.fn.sparkline.options(this, e),
          g = d(this),
          h,
          i;
        h = function h() {
          var e, h, i, j, k, l, m;
          if (b === "html" || b === c) {
            m = this.getAttribute(f.get("tagValuesAttribute"));
            if (m === c || m === null) m = g.html();
            e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else e = b;
          h = f.get("width") === "auto" ? e.length * f.get("defaultPixelsPerValue") : f.get("width");
          if (f.get("height") === "auto") {
            if (!f.get("composite") || !d.data(this, "_jqs_vcanvas")) j = a.createElement("span"), j.innerHTML = "a", g.html(j), i = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null;
          } else i = f.get("height");
          f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? f.get("composite") || k.reset() : (k = new u(this, f), d.data(this, "_jqs_mhandler", k)));
          if (f.get("composite") && !d.data(this, "_jqs_vcanvas")) {
            d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0));
            return;
          }
          l = new d.fn.sparkline[f.get("type")](this, e, f, h, i), l.render(), k && k.registerSparkline(l);
        };
        if (d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
          if (!f.get("composite") && d.data(this, "_jqs_pending")) for (i = K.length; i; i--) K[i - 1][0] == this && K.splice(i - 1, 1);
          K.push([this, h]), d.data(this, "_jqs_pending", !0);
        } else h.call(this);
      });
    }, d.fn.sparkline.defaults = f(), d.sparkline_display_visible = function () {
      var a,
        b,
        c,
        e = [];
      for (b = 0, c = K.length; b < c; b++) a = K[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a), d.data(K[b][0], "_jqs_pending", !1), e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1), e.push(b));
      for (b = e.length; b; b--) K.splice(e[b - 1], 1);
    }, d.fn.sparkline.options = g({
      init: function init(a, b) {
        var c, f, g, h;
        this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, f = d.fn.sparkline.defaults, g = f.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix), h = this.getTagSetting("type"), h === e ? c = f[b.type || g.type] : c = f[h], this.mergedOptions = d.extend({}, g, c, b);
      },
      getTagSetting: function getTagSetting(a) {
        var b = this.tagOptionsPrefix,
          d,
          f,
          g,
          h;
        if (b === !1 || b === c) return e;
        if (this.tagValCache.hasOwnProperty(a)) d = this.tagValCache.key;else {
          d = this.tag.getAttribute(b + a);
          if (d === c || d === null) d = e;else if (d.substr(0, 1) === "[") {
            d = d.substr(1, d.length - 2).split(",");
            for (f = d.length; f--;) d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""));
          } else if (d.substr(0, 1) === "{") {
            g = d.substr(1, d.length - 2).split(","), d = {};
            for (f = g.length; f--;) h = g[f].split(":", 2), d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""));
          } else d = k(d);
          this.tagValCache.key = d;
        }
        return d;
      },
      get: function get(a, b) {
        var d = this.getTagSetting(a),
          f;
        return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f;
      }
    }), d.fn.sparkline._base = g({
      disabled: !1,
      init: function init(a, b, e, f, g) {
        this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c;
      },
      initTarget: function initTarget() {
        var a = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0;
      },
      render: function render() {
        return this.disabled ? (this.el.innerHTML = "", !1) : !0;
      },
      getRegion: function getRegion(a, b) {},
      setRegionHighlight: function setRegionHighlight(a, b, d) {
        var e = this.currentRegion,
          f = !this.options.get("disableHighlight"),
          g;
        return b > this.canvasWidth || d > this.canvasHeight || b < 0 || d < 0 ? null : (g = this.getRegion(a, b, d), e !== g ? (e !== c && f && this.removeHighlight(), this.currentRegion = g, g !== c && f && this.renderHighlight(), !0) : !1);
      },
      clearRegionHighlight: function clearRegionHighlight() {
        return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(!0);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(!1);
      },
      changeHighlight: function changeHighlight(a) {},
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var a = this.options,
          b = "",
          e = [],
          f,
          g,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t;
        if (this.currentRegion === c) return "";
        f = this.getCurrentRegionFields(), q = a.get("tooltipFormatter");
        if (q) return q(this, a, f);
        a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"), g = this.options.get("tooltipFormat");
        if (!g) return "";
        d.isArray(g) || (g = [g]), d.isArray(f) || (f = [f]), m = this.options.get("tooltipFormatFieldlist"), n = this.options.get("tooltipFormatFieldlistKey");
        if (m && n) {
          o = [];
          for (l = f.length; l--;) p = f[l][n], (t = d.inArray(p, m)) != -1 && (o[t] = f[l]);
          f = o;
        }
        i = g.length, s = f.length;
        for (l = 0; l < i; l++) {
          r = g[l], typeof r == "string" && (r = new h(r)), j = r.fclass || "jqsfield";
          for (t = 0; t < s; t++) if (!f[t].isNull || !a.get("tooltipSkipNull")) d.extend(f[t], {
            prefix: a.get("tooltipPrefix"),
            suffix: a.get("tooltipSuffix")
          }), k = r.render(f[t], a.get("tooltipValueLookups"), a), e.push('<div class="' + j + '">' + k + "</div>");
        }
        return e.length ? b + e.join("\n") : "";
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(a, c) {
        var d = c.get("highlightColor"),
          e = c.get("highlightLighten"),
          f,
          g,
          h,
          j;
        if (d) return d;
        if (e) {
          f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);
          if (f) {
            h = [], g = a.length === 4 ? 16 : 1;
            for (j = 0; j < 3; j++) h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255);
            return "rgb(" + h.join(",") + ")";
          }
        }
        return a;
      }
    }), w = {
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
          c = this.target,
          e = this.regionShapes[b],
          f;
        e && (f = this.renderRegion(b, a), d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f), this.regionShapes[b] = d.map(f, function (a) {
          return a.id;
        })) : (c.replaceWithShape(e, f), this.regionShapes[b] = f.id));
      },
      render: function render() {
        var a = this.values,
          b = this.target,
          c = this.regionShapes,
          e,
          f,
          g,
          h;
        if (!this.cls._super.render.call(this)) return;
        for (g = a.length; g--;) {
          e = this.renderRegion(g);
          if (e) {
            if (d.isArray(e)) {
              f = [];
              for (h = e.length; h--;) e[h].append(), f.push(e[h].id);
              c[g] = f;
            } else e.append(), c[g] = e.id;
          } else c[g] = null;
        }
        b.render();
      }
    }, d.fn.sparkline.line = x = g(d.fn.sparkline._base, {
      type: "line",
      init: function init(a, b, c, d, e) {
        x._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e,
          f = this.regionMap;
        for (e = f.length; e--;) if (f[e] !== null && b >= f[e][0] && b <= f[e][1]) return f[e][2];
        return c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.yvalues[a] === null,
          x: this.xvalues[a],
          y: this.yvalues[a],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: a
        };
      },
      renderHighlight: function renderHighlight() {
        var a = this.currentRegion,
          b = this.target,
          d = this.vertices[a],
          e = this.options,
          f = e.get("spotRadius"),
          g = e.get("highlightSpotColor"),
          h = e.get("highlightLineColor"),
          i,
          j;
        if (!d) return;
        f && g && (i = b.drawCircle(d[0], d[1], f, c, g), this.highlightSpotId = i.id, b.insertAfterShape(this.lastShapeId, i)), h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = j.id, b.insertAfterShape(this.lastShapeId, j));
      },
      removeHighlight: function removeHighlight() {
        var a = this.target;
        this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null);
      },
      scanValues: function scanValues() {
        var a = this.values,
          c = a.length,
          d = this.xvalues,
          e = this.yvalues,
          f = this.yminmax,
          g,
          h,
          i,
          j,
          k;
        for (g = 0; g < c; g++) h = a[g], i = typeof a[g] == "string", j = _typeof(a[g]) == "object" && a[g] instanceof Array, k = i && a[g].split(":"), i && k.length === 2 ? (d.push(Number(k[0])), e.push(Number(k[1])), f.push(Number(k[1]))) : j ? (d.push(h[0]), e.push(h[1]), f.push(h[1])) : (d.push(g), a[g] === null || a[g] === "null" ? e.push(null) : (e.push(Number(h)), f.push(Number(h))));
        this.options.get("xvalues") && (d = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, f), this.miny = this.minyorg = b.min.apply(b, f), this.maxx = b.max.apply(b, d), this.minx = b.min.apply(b, d), this.xvalues = d, this.yvalues = e, this.yminmax = f;
      },
      processRangeOptions: function processRangeOptions() {
        var a = this.options,
          b = a.get("normalRangeMin"),
          d = a.get("normalRangeMax");
        b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"));
      },
      drawNormalRange: function drawNormalRange(a, d, e, f, g) {
        var h = this.options.get("normalRangeMin"),
          i = this.options.get("normalRangeMax"),
          j = d + b.round(e - e * ((i - this.miny) / g)),
          k = b.round(e * (i - h) / g);
        this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append();
      },
      render: function render() {
        var a = this.options,
          e = this.target,
          f = this.canvasWidth,
          g = this.canvasHeight,
          h = this.vertices,
          i = a.get("spotRadius"),
          j = this.regionMap,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          u,
          v,
          w,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K;
        if (!x._super.render.call(this)) return;
        this.scanValues(), this.processRangeOptions(), I = this.xvalues, J = this.yvalues;
        if (!this.yminmax.length || this.yvalues.length < 2) return;
        n = o = 0, k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, m = this.yvalues.length - 1, i && (f < i * 4 || g < i * 4) && (i = 0);
        if (i) {
          G = a.get("highlightSpotColor") && !a.get("disableInteraction");
          if (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny) g -= b.ceil(i);
          if (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy) g -= b.ceil(i), n += b.ceil(i);
          if (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy)) o += b.ceil(i), f -= b.ceil(i);
          if (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy)) f -= b.ceil(i);
        }
        g--, a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), q = [], r = [q], z = A = null, B = J.length;
        for (K = 0; K < B; K++) s = I[K], v = I[K + 1], u = J[K], w = o + b.round((s - this.minx) * (f / k)), y = K < B - 1 ? o + b.round((v - this.minx) * (f / k)) : f, A = w + (y - w) / 2, j[K] = [z || 0, A, K], z = A, u === null ? K && (J[K - 1] !== null && (q = [], r.push(q)), h.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), q.length || q.push([w, n + g]), p = [w, n + b.round(g - g * ((u - this.miny) / l))], q.push(p), h.push(p));
        C = [], D = [], E = r.length;
        for (K = 0; K < E; K++) q = r[K], q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]), D.push(q.slice(0)), q.pop()), q.length > 2 && (q[0] = [q[0][0], q[1][1]]), C.push(q));
        E = D.length;
        for (K = 0; K < E; K++) e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
        a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), E = C.length;
        for (K = 0; K < E; K++) e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
        if (i && a.get("valueSpots")) {
          F = a.get("valueSpots"), F.get === c && (F = new t(F));
          for (K = 0; K < B; K++) H = F.get(J[K]), H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append();
        }
        i && a.get("spotColor") && J[m] !== null && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(), this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()), i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())), this.lastShapeId = e.getLastShapeId(), this.canvasTop = n, e.render();
      }
    }), d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, {
      type: "bar",
      init: function init(a, e, f, g, h) {
        var j = parseInt(f.get("barWidth"), 10),
          n = parseInt(f.get("barSpacing"), 10),
          o = f.get("chartRangeMin"),
          p = f.get("chartRangeMax"),
          q = f.get("chartRangeClip"),
          r = Infinity,
          s = -Infinity,
          u,
          v,
          w,
          x,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O,
          P,
          Q,
          R;
        y._super.init.call(this, a, e, f, g, h);
        for (A = 0, B = e.length; A < B; A++) {
          O = e[A], u = typeof O == "string" && O.indexOf(":") > -1;
          if (u || d.isArray(O)) J = !0, u && (O = e[A] = l(O.split(":"))), O = m(O, null), v = b.min.apply(b, O), w = b.max.apply(b, O), v < r && (r = v), w > s && (s = w);
        }
        this.stacked = J, this.regionShapes = {}, this.barWidth = j, this.barSpacing = n, this.totalBarWidth = j + n, this.width = g = e.length * j + (e.length - 1) * n, this.initTarget(), q && (H = o === c ? -Infinity : o, I = p === c ? Infinity : p), z = [], x = J ? [] : z;
        var S = [],
          T = [];
        for (A = 0, B = e.length; A < B; A++) if (J) {
          K = e[A], e[A] = N = [], S[A] = 0, x[A] = T[A] = 0;
          for (L = 0, M = K.length; L < M; L++) O = N[L] = q ? i(K[L], H, I) : K[L], O !== null && (O > 0 && (S[A] += O), r < 0 && s > 0 ? O < 0 ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (O < 0 ? s : r)), z.push(O));
        } else O = q ? i(e[A], H, I) : e[A], O = e[A] = k(O), O !== null && z.push(O);
        this.max = G = b.max.apply(b, z), this.min = F = b.min.apply(b, z), this.stackMax = s = J ? b.max.apply(b, S) : G, this.stackMin = r = J ? b.min.apply(b, z) : F, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")), this.zeroAxis = D = f.get("zeroAxis", !0), F <= 0 && G >= 0 && D ? E = 0 : D == 0 ? E = F : F > 0 ? E = F : E = G, this.xaxisOffset = E, C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F, this.canvasHeightEf = D && F < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, F < E ? (Q = J && G >= 0 ? s : G, P = (Q - E) / C * this.canvasHeight, P !== b.ceil(P) && (this.canvasHeightEf -= 2, P = b.ceil(P))) : P = this.canvasHeight, this.yoffset = P, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.range = C;
      },
      getRegion: function getRegion(a, d, e) {
        var f = b.floor(d / this.totalBarWidth);
        return f < 0 || f >= this.values.length ? c : f;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion,
          b = r(this.values[a]),
          c = [],
          d,
          e;
        for (e = b.length; e--;) d = b[e], c.push({
          isNull: d === null,
          value: d,
          color: this.calcColor(e, d, a),
          offset: a
        });
        return c;
      },
      calcColor: function calcColor(a, b, e) {
        var f = this.colorMapByIndex,
          g = this.colorMapByValue,
          h = this.options,
          i,
          j;
        return this.stacked ? i = h.get("stackedBarColor") : i = b < 0 ? h.get("negBarColor") : h.get("barColor"), b === 0 && h.get("zeroColor") !== c && (i = h.get("zeroColor")), g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]), d.isArray(i) ? i[a % i.length] : i;
      },
      renderRegion: function renderRegion(a, e) {
        var f = this.values[a],
          g = this.options,
          h = this.xaxisOffset,
          i = [],
          j = this.range,
          k = this.stacked,
          l = this.target,
          m = a * this.totalBarWidth,
          n = this.canvasHeightEf,
          p = this.yoffset,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z;
        f = d.isArray(f) ? f : [f], w = f.length, x = f[0], t = o(null, f), z = o(h, f, !0);
        if (t) return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), q = p > 0 ? p - 1 : p, l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;
        u = p;
        for (v = 0; v < w; v++) {
          x = f[v];
          if (k && x === h) {
            if (!z || y) continue;
            y = !0;
          }
          j > 0 ? r = b.floor(n * (b.abs(x - h) / j)) + 1 : r = 1, x < h || x === h && p === 0 ? (q = u, u += r) : (q = p - r, p -= r), s = this.calcColor(v, x, a), e && (s = this.calcHighlightColor(s, g)), i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s));
        }
        return i.length === 1 ? i[0] : i;
      }
    }), d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, {
      type: "tristate",
      init: function init(a, b, e, f, g) {
        var h = parseInt(e.get("barWidth"), 10),
          i = parseInt(e.get("barSpacing"), 10);
        z._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.initTarget();
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          color: this.calcColor(this.values[a], a),
          offset: a
        };
      },
      calcColor: function calcColor(a, b) {
        var c = this.values,
          d = this.options,
          e = this.colorMapByIndex,
          f = this.colorMapByValue,
          g,
          h;
        return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"), g;
      },
      renderRegion: function renderRegion(a, c) {
        var d = this.values,
          e = this.options,
          f = this.target,
          g,
          h,
          i,
          j,
          k,
          l;
        g = f.pixelHeight, i = b.round(g / 2), j = a * this.totalBarWidth, d[a] < 0 ? (k = i, h = i - 1) : d[a] > 0 ? (k = 0, h = i - 1) : (k = i - 1, h = 2), l = this.calcColor(d[a], a);
        if (l === null) return;
        return c && (l = this.calcHighlightColor(l, e)), f.drawRect(j, k, this.barWidth - 1, h - 1, l, l);
      }
    }), d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, {
      type: "discrete",
      init: function init(a, e, f, g, h) {
        A._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = f.get("width") === "auto" ? e.length * 2 : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = f.get("lineHeight") === "auto" ? b.round(this.canvasHeight * .3) : f.get("lineHeight"));
      },
      getRegion: function getRegion(a, c, d) {
        return b.floor(c / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          offset: a
        };
      },
      renderRegion: function renderRegion(a, c) {
        var d = this.values,
          e = this.options,
          f = this.min,
          g = this.max,
          h = this.range,
          j = this.interval,
          k = this.target,
          l = this.canvasHeight,
          m = this.lineHeight,
          n = l - m,
          o,
          p,
          q,
          r;
        return p = i(d[a], f, g), r = a * j, o = b.round(n - n * ((p - f) / h)), q = e.get("thresholdColor") && p < e.get("thresholdValue") ? e.get("thresholdColor") : e.get("lineColor"), c && (q = this.calcHighlightColor(q, e)), k.drawLine(r, o, r, o + m, q);
      }
    }), d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, {
      type: "bullet",
      init: function init(a, d, e, f, g) {
        var h, i, j;
        B._super.init.call(this, a, d, e, f, g), this.values = d = l(d), j = d.slice(), j[0] = j[0] === null ? j[2] : j[0], j[1] = d[1] === null ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), e.get("base") === c ? h = h < 0 ? h : 0 : h = e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = e.get("width") === "auto" ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget();
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          fieldkey: a.substr(0, 1),
          value: this.values[a.substr(1)],
          region: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
          c = this.valueShapes[b],
          d;
        delete this.shapes[c];
        switch (b.substr(0, 1)) {
          case "r":
            d = this.renderRange(b.substr(1), a);
            break;
          case "p":
            d = this.renderPerformance(a);
            break;
          case "t":
            d = this.renderTarget(a);
        }
        this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d);
      },
      renderRange: function renderRange(a, c) {
        var d = this.values[a],
          e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
          f = this.options.get("rangeColors")[a - 2];
        return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f);
      },
      renderPerformance: function renderPerformance(a) {
        var c = this.values[1],
          d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
          e = this.options.get("performanceColor");
        return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(this.canvasHeight * .3), d - 1, b.round(this.canvasHeight * .4) - 1, e, e);
      },
      renderTarget: function renderTarget(a) {
        var c = this.values[0],
          d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
          e = b.round(this.canvasHeight * .1),
          f = this.canvasHeight - e * 2,
          g = this.options.get("targetColor");
        return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g);
      },
      render: function render() {
        var a = this.values.length,
          b = this.target,
          c,
          d;
        if (!B._super.render.call(this)) return;
        for (c = 2; c < a; c++) d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, this.valueShapes["r" + c] = d.id;
        this.values[1] !== null && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", this.valueShapes.p1 = d.id), this.values[0] !== null && (d = this.renderTarget().append(), this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render();
      }
    }), d.fn.sparkline.pie = C = g(d.fn.sparkline._base, {
      type: "pie",
      init: function init(a, c, e, f, g) {
        var h = 0,
          i;
        C._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), e.get("width") === "auto" && (this.width = this.height);
        if (c.length > 0) for (i = c.length; i--;) h += c[i];
        this.total = h, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(a, b, d) {
        var e = this.target.getShapeAt(a, b, d);
        return e !== c && this.shapes[e] !== c ? this.shapes[e] : c;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = this.currentRegion;
        return {
          isNull: this.values[a] === c,
          value: this.values[a],
          percent: this.values[a] / this.total * 100,
          color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
          offset: a
        };
      },
      changeHighlight: function changeHighlight(a) {
        var b = this.currentRegion,
          c = this.renderSlice(b, a),
          d = this.valueShapes[b];
        delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b;
      },
      renderSlice: function renderSlice(a, d) {
        var e = this.target,
          f = this.options,
          g = this.radius,
          h = f.get("borderWidth"),
          i = f.get("offset"),
          j = 2 * b.PI,
          k = this.values,
          l = this.total,
          m = i ? 2 * b.PI * (i / 360) : 0,
          n,
          o,
          p,
          q,
          r;
        q = k.length;
        for (p = 0; p < q; p++) {
          n = m, o = m, l > 0 && (o = m + j * (k[p] / l));
          if (a === p) return r = f.get("sliceColors")[p % f.get("sliceColors").length], d && (r = this.calcHighlightColor(r, f)), e.drawPieSlice(g, g, g - h, n, o, c, r);
          m = o;
        }
      },
      render: function render() {
        var a = this.target,
          d = this.values,
          e = this.options,
          f = this.radius,
          g = e.get("borderWidth"),
          h,
          i;
        if (!C._super.render.call(this)) return;
        g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append();
        for (i = d.length; i--;) d[i] && (h = this.renderSlice(i).append(), this.valueShapes[i] = h.id, this.shapes[h.id] = i);
        a.render();
      }
    }), d.fn.sparkline.box = D = g(d.fn.sparkline._base, {
      type: "box",
      init: function init(a, b, c, e, f) {
        D._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = c.get("width") === "auto" ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1);
      },
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var a = [{
          field: "lq",
          value: this.quartiles[0]
        }, {
          field: "med",
          value: this.quartiles[1]
        }, {
          field: "uq",
          value: this.quartiles[2]
        }];
        return this.loutlier !== c && a.push({
          field: "lo",
          value: this.loutlier
        }), this.routlier !== c && a.push({
          field: "ro",
          value: this.routlier
        }), this.lwhisker !== c && a.push({
          field: "lw",
          value: this.lwhisker
        }), this.rwhisker !== c && a.push({
          field: "rw",
          value: this.rwhisker
        }), a;
      },
      render: function render() {
        var a = this.target,
          d = this.values,
          e = d.length,
          f = this.options,
          g = this.canvasWidth,
          h = this.canvasHeight,
          i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"),
          k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"),
          l = 0,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w;
        if (!D._super.render.call(this)) return;
        if (f.get("raw")) f.get("showOutliers") && d.length > 5 ? (n = d[0], m = d[1], p = d[2], q = d[3], r = d[4], s = d[5], t = d[6]) : (m = d[0], p = d[1], q = d[2], r = d[3], s = d[4]);else {
          d.sort(function (a, b) {
            return a - b;
          }), p = j(d, 1), q = j(d, 2), r = j(d, 3), o = r - p;
          if (f.get("showOutliers")) {
            m = s = c;
            for (u = 0; u < e; u++) m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]), d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
            n = d[0], t = d[e - 1];
          } else m = d[0], s = d[e - 1];
        }
        this.quartiles = [p, q, r], this.lwhisker = m, this.rwhisker = s, this.loutlier = n, this.routlier = t, w = g / (k - i + 1), f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")), g -= 2 * b.ceil(f.get("spotRadius")), w = g / (k - i + 1), n < m && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), a.drawRect(b.round((p - i) * w + l), b.round(h * .1), b.round((r - p) * w), b.round(h * .8), f.get("boxLineColor"), f.get("boxFillColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((q - i) * w + l), b.round(h * .1), b.round((q - i) * w + l), b.round(h * .9), f.get("medianColor")).append(), f.get("target") && (v = b.ceil(f.get("spotRadius")), a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(), a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()), a.render();
      }
    }), G = g({
      init: function init(a, b, c, d) {
        this.target = a, this.id = b, this.type = c, this.args = d;
      },
      append: function append() {
        return this.target.appendShape(this), this;
      }
    }), H = g({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(a, b, c) {
        if (!a) return;
        this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this);
      },
      drawLine: function drawLine(a, b, c, d, e, f) {
        return this.drawShape([[a, b], [c, d]], e, f);
      },
      drawShape: function drawShape(a, b, c, d) {
        return this._genShape("Shape", [a, b, c, d]);
      },
      drawCircle: function drawCircle(a, b, c, d, e, f) {
        return this._genShape("Circle", [a, b, c, d, e, f]);
      },
      drawPieSlice: function drawPieSlice(a, b, c, d, e, f, g) {
        return this._genShape("PieSlice", [a, b, c, d, e, f, g]);
      },
      drawRect: function drawRect(a, b, c, d, e, f) {
        return this._genShape("Rect", [a, b, c, d, e, f]);
      },
      getElement: function getElement() {
        return this.canvas;
      },
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },
      reset: function reset() {
        alert("reset not implemented");
      },
      _insert: function _insert(a, b) {
        d(b).html(a);
      },
      _calculatePixelDims: function _calculatePixelDims(a, b, c) {
        var e;
        e = this._pxregex.exec(b), e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(), e = this._pxregex.exec(a), e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width();
      },
      _genShape: function _genShape(a, b) {
        var c = L++;
        return b.unshift(c), new G(this, c, a, b);
      },
      appendShape: function appendShape(a) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function replaceWithShape(a, b) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function insertAfterShape(a, b) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function removeShapeId(a) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function getShapeAt(a, b, c) {
        alert("getShapeAt not implemented");
      },
      render: function render() {
        alert("render not implemented");
      }
    }), I = g(H, {
      init: function init(b, e, f, g) {
        I._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({
          display: "inline-block",
          width: b,
          height: e,
          verticalAlign: "top"
        }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(a, b, d) {
        var e = this.canvas.getContext("2d");
        return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e;
      },
      reset: function reset() {
        var a = this._getContext();
        a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c;
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g = this._getContext(d, e, f),
          h,
          i;
        g.beginPath(), g.moveTo(b[0][0] + .5, b[0][1] + .5);
        for (h = 1, i = b.length; h < i; h++) g.lineTo(b[h][0] + .5, b[h][1] + .5);
        d !== c && g.stroke(), e !== c && g.fill(), this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawCircle: function _drawCircle(a, d, e, f, g, h, i) {
        var j = this._getContext(g, h, i);
        j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill();
      },
      _drawPieSlice: function _drawPieSlice(a, b, d, e, f, g, h, i) {
        var j = this._getContext(h, i);
        j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a);
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g);
      },
      appendShape: function appendShape(a) {
        return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c = this.shapeseq,
          d;
        this.shapes[b.id] = b;
        for (d = c.length; d--;) c[d] == a && (c[d] = b.id);
        delete this.shapes[a];
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c = this.shapeseq,
          d = {},
          e,
          f,
          g;
        for (f = a.length; f--;) d[a[f]] = !0;
        for (f = c.length; f--;) e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], g = f);
        for (f = b.length; f--;) c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f];
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c = this.shapeseq,
          d;
        for (d = c.length; d--;) if (c[d] === a) {
          c.splice(d + 1, 0, b.id), this.shapes[b.id] = b;
          return;
        }
      },
      removeShapeId: function removeShapeId(a) {
        var b = this.shapeseq,
          c;
        for (c = b.length; c--;) if (b[c] === a) {
          b.splice(c, 1);
          break;
        }
        delete this.shapes[a];
      },
      getShapeAt: function getShapeAt(a, b, c) {
        return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId;
      },
      render: function render() {
        var a = this.shapeseq,
          b = this.shapes,
          c = a.length,
          d = this._getContext(),
          e,
          f,
          g;
        d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        for (g = 0; g < c; g++) e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
        this.interact || (this.shapes = {}, this.shapeseq = []);
      }
    }), J = g(H, {
      init: function init(b, c, e) {
        var f;
        J._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: b,
          height: c,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = "";
      },
      _drawShape: function _drawShape(a, b, d, e, f) {
        var g = [],
          h,
          i,
          j,
          k,
          l,
          m,
          n;
        for (n = 0, m = b.length; n < m; n++) g[n] = "" + b[n][0] + "," + b[n][1];
        return h = g.splice(0, 1), f = f === c ? 1 : f, i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', k = g[0] === g[g.length - 1] ? "x " : "", l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + h + " l " + g.join(", ") + " " + k + 'e">' + " </v:shape>", l;
      },
      _drawCircle: function _drawCircle(a, b, d, e, f, g, h) {
        var i, j, k;
        return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + e * 2 + "px; height:" + e * 2 + 'px"></v:oval>', k;
      },
      _drawPieSlice: function _drawPieSlice(a, d, e, f, g, h, i, j) {
        var k, l, m, n, o, p, q, r;
        if (g === h) return "";
        h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f);
        if (l === n && m === o) {
          if (h - g < b.PI) return "";
          l = n = d + f, m = o = e;
        }
        return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e">' + " </v:shape>", r);
      },
      _drawRect: function _drawRect(a, b, c, d, e, f, g) {
        return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g);
      },
      reset: function reset() {
        this.group.innerHTML = "";
      },
      appendShape: function appendShape(a) {
        var b = this["_draw" + a.type].apply(this, a.args);
        return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id;
      },
      replaceWithShape: function replaceWithShape(a, b) {
        var c = d("#jqsshape" + a),
          e = this["_draw" + b.type].apply(this, b.args);
        c[0].outerHTML = e;
      },
      replaceWithShapes: function replaceWithShapes(a, b) {
        var c = d("#jqsshape" + a[0]),
          e = "",
          f = b.length,
          g;
        for (g = 0; g < f; g++) e += this["_draw" + b[g].type].apply(this, b[g].args);
        c[0].outerHTML = e;
        for (g = 1; g < a.length; g++) d("#jqsshape" + a[g]).remove();
      },
      insertAfterShape: function insertAfterShape(a, b) {
        var c = d("#jqsshape" + a),
          e = this["_draw" + b.type].apply(this, b.args);
        c[0].insertAdjacentHTML("afterEnd", e);
      },
      removeShapeId: function removeShapeId(a) {
        var b = d("#jqsshape" + a);
        this.group.removeChild(b[0]);
      },
      getShapeAt: function getShapeAt(a, b, c) {
        var d = a.id.substr(8);
        return d;
      },
      render: function render() {
        this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0);
      }
    });
  });
})(document, Math);

/***/ }),

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Admin Panel settings
$.fn.AdminSettings = function (settings) {
  var myid = this.attr("id");
  // General option for vertical header

  var defaultSidebarType = 'full';
  if (Cookies.get('sidebar-type') == "mini-sidebar") {
    defaultSidebarType = 'mini-sidebar';
  }
  settings.SidebarType = defaultSidebarType;
  var defaults = {
    Theme: true,
    // this can be true or false ( true means dark and false means light ),
    Layout: 'horizontal',
    //
    LogoBg: 'skin1',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    NavbarBg: 'skin6',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarType: defaultSidebarType,
    // You can change it full / mini-sidebar
    SidebarColor: 'skin1',
    // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarPosition: true,
    // it can be true / false
    HeaderPosition: true,
    // it can be true / false
    BoxedLayout: false // it can be true / false
  };
  settings = $.extend({}, defaults, settings);
  // Attribute functions
  var AdminSettings = {
    // Settings INIT
    AdminSettingsInit: function AdminSettingsInit() {
      AdminSettings.ManageTheme();
      AdminSettings.ManageThemeLayout();
      AdminSettings.ManageThemeBackground();
      AdminSettings.ManageSidebarType();
      AdminSettings.ManageSidebarColor();
      AdminSettings.ManageSidebarPosition();
      AdminSettings.ManageBoxedLayout();
    },
    //****************************
    // ManageThemeLayout functions
    //****************************
    ManageTheme: function ManageTheme() {
      var themeview = settings.Theme;
      switch (settings.Layout) {
        case 'vertical':
          if (themeview == true) {
            $('body').attr("data-theme", 'dark');
            $("#theme-view").prop("checked", !0);
          } else {
            $('#' + myid).attr("data-theme", 'light');
            $("body").prop("checked", !1);
          }
          break;
        default:
      }
    },
    //****************************
    // ManageThemeLayout functions
    //****************************
    ManageThemeLayout: function ManageThemeLayout() {
      switch (settings.Layout) {
        case 'horizontal':
          $('#' + myid).attr("data-layout", "horizontal");
          break;
        case 'vertical':
          $('#' + myid).attr("data-layout", "vertical");
          $('.scroll-sidebar').perfectScrollbar({});
          break;
        default:
      }
    },
    //****************************
    // ManageSidebarType functions
    //****************************
    ManageThemeBackground: function ManageThemeBackground() {
      // Logo bg attribute
      function setlogobg() {
        var lbg = settings.LogoBg;
        if (lbg != undefined && lbg != "") {
          $('#' + myid + ' .topbar .top-navbar .navbar-header').attr("data-logobg", lbg);
        } else {
          $('#' + myid + ' .topbar .top-navbar .navbar-header').attr("data-logobg", "skin1");
        }
      }
      ;
      setlogobg();
      // Navbar bg attribute
      function setnavbarbg() {
        var nbg = settings.NavbarBg;
        if (nbg != undefined && nbg != "") {
          $('#' + myid + ' .topbar .navbar-collapse').attr("data-navbarbg", nbg);
          $('#' + myid + ' .topbar').attr("data-navbarbg", nbg);
          $('#' + myid).attr("data-navbarbg", nbg);
        } else {
          $('#' + myid + ' .topbar .navbar-collapse').attr("data-navbarbg", "skin1");
          $('#' + myid + ' .topbar').attr("data-navbarbg", "skin1");
          $('#' + myid).attr("data-navbarbg", "skin1");
        }
      }
      ;
      setnavbarbg();
    },
    //****************************
    // ManageThemeLayout functions
    //****************************
    ManageSidebarType: function ManageSidebarType() {
      switch (settings.SidebarType) {
        //****************************
        // If the sidebar type has full
        //****************************
        case 'full':
          $('#' + myid).attr("data-sidebartype", "full");
          //****************************
          /* This is for the mini-sidebar if width is less then 1170*/
          //****************************
          var setsidebartype = function setsidebartype() {
            var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
            if (width < 1170) {
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              $("#main-wrapper").addClass("mini-sidebar");
              Cookies.set('sidebar-type', 'mini-sidebar');
            } else {
              $("#main-wrapper").attr("data-sidebartype", "full");
              $("#main-wrapper").removeClass("mini-sidebar");
              Cookies.set('sidebar-type', 'full');
            }
            //Cookies.set('mini-sidebar', $("#main-wrapper").hasClass('mini-sidebar'));
          };
          $(window).ready(setsidebartype);
          $(window).on("resize", setsidebartype);
          //****************************
          /* This is for sidebartoggler*/
          //****************************
          $('.sidebartoggler').on("click", function () {
            $("#main-wrapper").toggleClass("mini-sidebar");
            if ($("#main-wrapper").hasClass("mini-sidebar")) {
              $(".sidebartoggler").prop("checked", !0);
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              Cookies.set('sidebar-type', 'mini-sidebar');
            } else {
              $(".sidebartoggler").prop("checked", !1);
              $("#main-wrapper").attr("data-sidebartype", "full");
              Cookies.set('sidebar-type', 'full');
            }
          });
          break;
        //****************************
        // If the sidebar type has mini-sidebar
        //****************************
        case 'mini-sidebar':
          $('#' + myid).attr("data-sidebartype", "mini-sidebar");
          //****************************
          /* This is for sidebartoggler*/
          //****************************
          $('.sidebartoggler').on("click", function () {
            $("#main-wrapper").toggleClass("mini-sidebar");
            if ($("#main-wrapper").hasClass("mini-sidebar")) {
              $(".sidebartoggler").prop("checked", !0);
              $("#main-wrapper").attr("data-sidebartype", "full");
              Cookies.set('sidebar-type', 'full');
            } else {
              $(".sidebartoggler").prop("checked", !1);
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              Cookies.set('sidebar-type', 'mini-sidebar');
            }
          });
          break;
        //****************************
        // If the sidebar type has iconbar
        //****************************
        case 'iconbar':
          $('#' + myid).attr("data-sidebartype", "iconbar");
          //****************************
          /* This is for the mini-sidebar if width is less then 1170*/
          //****************************
          var setsidebartype = function setsidebartype() {
            var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
            if (width < 1170) {
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              $("#main-wrapper").addClass("mini-sidebar");
              Cookies.set('sidebar-type', 'mini-sidebar');
            } else {
              $("#main-wrapper").attr("data-sidebartype", "iconbar");
              $("#main-wrapper").removeClass("mini-sidebar");
              Cookies.set('sidebar-type', 'iconbar');
            }
          };
          $(window).ready(setsidebartype);
          $(window).on("resize", setsidebartype);
          //****************************
          /* This is for sidebartoggler*/
          //****************************
          $('.sidebartoggler').on("click", function () {
            $("#main-wrapper").toggleClass("mini-sidebar");
            if ($("#main-wrapper").hasClass("mini-sidebar")) {
              $(".sidebartoggler").prop("checked", !0);
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              Cookies.set('sidebar-type', 'mini-sidebar');
            } else {
              $(".sidebartoggler").prop("checked", !1);
              $("#main-wrapper").attr("data-sidebartype", "iconbar");
              Cookies.set('sidebar-type', 'iconbar');
            }
          });
          break;
        //****************************
        // If the sidebar type has overlay
        //****************************
        case 'overlay':
          $('#' + myid).attr("data-sidebartype", "overlay");
          var setsidebartype = function setsidebartype() {
            var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
            if (width < 767) {
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
              $("#main-wrapper").addClass("mini-sidebar");
            } else {
              $("#main-wrapper").attr("data-sidebartype", "overlay");
              $("#main-wrapper").removeClass("mini-sidebar");
            }
          };
          $(window).ready(setsidebartype);
          $(window).on("resize", setsidebartype);
          //****************************
          /* This is for sidebartoggler*/
          //****************************
          $('.sidebartoggler').on("click", function () {
            $("#main-wrapper").toggleClass("show-sidebar");
            if ($("#main-wrapper").hasClass("show-sidebar")) {
              $(".sidebartoggler").prop("checked", !0);
              $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
            } else {
              $(".sidebartoggler").prop("checked", !1);
              $("#main-wrapper").attr("data-sidebartype", "iconbar");
            }
          });
          break;
        default:
      }
    },
    //****************************
    // ManageSidebarColor functions
    //****************************
    ManageSidebarColor: function ManageSidebarColor() {
      // Logo bg attribute
      function setsidebarbg() {
        var sbg = settings.SidebarColor;
        if (sbg != undefined && sbg != "") {
          $('#' + myid + ' .left-sidebar').attr("data-sidebarbg", sbg);
        } else {
          $('#' + myid + ' .left-sidebar').attr("data-sidebarbg", "skin1");
        }
      }
      ;
      setsidebarbg();
    },
    //****************************
    // ManageSidebarPosition functions
    //****************************
    ManageSidebarPosition: function ManageSidebarPosition() {
      var sidebarposition = settings.SidebarPosition;
      var headerposition = settings.HeaderPosition;
      switch (settings.Layout) {
        case 'vertical':
          if (sidebarposition == true) {
            $('#' + myid).attr("data-sidebar-position", 'fixed');
            $("#sidebar-position").prop("checked", !0);
          } else {
            $('#' + myid).attr("data-sidebar-position", 'absolute');
            $("#sidebar-position").prop("checked", !1);
          }
          if (headerposition == true) {
            $('#' + myid).attr("data-header-position", 'fixed');
            $("#header-position").prop("checked", !0);
          } else {
            $('#' + myid).attr("data-header-position", 'relative');
            $("#header-position").prop("checked", !1);
          }
          break;
        default:
      }
    },
    //****************************
    // ManageBoxedLayout functions
    //****************************
    ManageBoxedLayout: function ManageBoxedLayout() {
      var boxedlayout = settings.BoxedLayout;
      switch (settings.Layout) {
        case 'vertical':
          if (boxedlayout == true) {
            $('#' + myid).attr("data-boxed-layout", 'boxed');
            $("#boxed-layout").prop("checked", !0);
          } else {
            $('#' + myid).attr("data-boxed-layout", 'full');
            $("#boxed-layout").prop("checked", !1);
          }
          break;
        case 'horizontal':
          if (boxedlayout == true) {
            $('#' + myid).attr("data-boxed-layout", 'boxed');
            $("#boxed-layout").prop("checked", !0);
          } else {
            $('#' + myid).attr("data-boxed-layout", 'full');
            $("#boxed-layout").prop("checked", !1);
          }
          break;
        default:
      }
    }
  };
  AdminSettings.AdminSettingsInit();
};
//****************************
// This is for the chat customizer setting
//****************************
$(function () {
  var chatarea = $("#chat");
  $('#chat .message-center a').on('click', function () {
    var name = $(this).find(".mail-contnet h5").text();
    var img = $(this).find(".user-img img").attr("src");
    var id = $(this).attr("data-user-id");
    var status = $(this).find(".profile-status").attr("data-status");
    if ($(this).hasClass("active")) {
      $(this).toggleClass("active");
      $(".chat-windows #user-chat" + id).hide();
    } else {
      $(this).toggleClass("active");
      if ($(".chat-windows #user-chat" + id).length) {
        $(".chat-windows #user-chat" + id).removeClass("mini-chat").show();
      } else {
        var msg = msg_receive('I watched the storm, so beautiful yet terrific.');
        msg += msg_sent('That is very deep indeed!');
        var html = "<div class='user-chat' id='user-chat" + id + "' data-user-id='" + id + "'>";
        html += "<div class='chat-head'><img src='" + img + "' data-user-id='" + id + "'><span class='status " + status + "'></span><span class='name'>" + name + "</span><span class='opts'><i class='ti-close closeit' data-user-id='" + id + "'></i><i class='ti-minus mini-chat' data-user-id='" + id + "'></i></span></div>";
        html += "<div class='chat-body'><ul class='chat-list'>" + msg + "</ul></div>";
        html += "<div class='chat-footer'><input type='text' data-user-id='" + id + "' placeholder='Type & Enter' class='form-control'></div>";
        html += "</div>";
        $(".chat-windows").append(html);
      }
    }
  });
  $(document).on('click', ".chat-windows .user-chat .chat-head .closeit", function (e) {
    var id = $(this).attr("data-user-id");
    $(".chat-windows #user-chat" + id).hide();
    $("#chat .message-center .user-info#chat_user_" + id).removeClass("active");
  });
  $(document).on('click', ".chat-windows .user-chat .chat-head img, .chat-windows .user-chat .chat-head .mini-chat", function (e) {
    var id = $(this).attr("data-user-id");
    if (!$(".chat-windows #user-chat" + id).hasClass("mini-chat")) {
      $(".chat-windows #user-chat" + id).addClass("mini-chat");
    } else {
      $(".chat-windows #user-chat" + id).removeClass("mini-chat");
    }
  });
  $(document).on('keypress', ".chat-windows .user-chat .chat-footer input", function (e) {
    if (e.keyCode == 13) {
      var id = $(this).attr("data-user-id");
      var msg = $(this).val();
      msg = msg_sent(msg);
      $(".chat-windows #user-chat" + id + " .chat-body .chat-list").append(msg);
      $(this).val("");
      $(this).focus();
    }
    $(".chat-windows #user-chat" + id + " .chat-body").perfectScrollbar({
      suppressScrollX: true
    });
  });
  $(".page-wrapper").on('click', function (e) {
    $('.chat-windows').addClass('hide-chat');
    $('.chat-windows').removeClass('show-chat');
  });
  $(".service-panel-toggle").on('click', function (e) {
    $('.chat-windows').addClass('show-chat');
    $('.chat-windows').removeClass('hide-chat');
  });
});
function msg_receive(msg) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  return "<li class='msg_receive'><div class='chat-content'><div class='box bg-light-info'>" + msg + "</div></div><div class='chat-time'>" + h + ":" + m + "</div></li>";
}
function msg_sent(msg) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  return "<li class='odd msg_sent'><div class='chat-content'><div class='box bg-light-info'>" + msg + "</div><br></div><div class='chat-time'>" + h + ":" + m + "</div></li>";
}

// $.notifyDefaults({
//     placement: {
//         from: "top"
//     },
//     animate:{
//         enter: "animated fadeInUp",
//         exit: "animated fadeOutDown"
//     },
//     template: '<div data-notify="container" class="col-6 col-sm-4 alert alert-{0}" role="alert">' +
//         '<span data-notify="icon"></span> ' +
//         '<span data-notify="title">{1}</span> ' +
//         '<span data-notify="message">{2}</span>' +
//         '<div class="progress" data-notify="progressbar">' +
//         '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//         '</div>' +
//         '<a href="{3}" target="{4}" data-notify="url"></a>' +
//         '</div>'
// });

/***/ }),

/***/ "./assets/js/app.init.duallistbox.js":
/*!*******************************************!*\
  !*** ./assets/js/app.init.duallistbox.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  "use strict";

  if ($('.diallistbox').length) {
    $(".diallistbox").bootstrapDualListbox({
      nonSelectedListLabel: 'Verfügbar',
      selectedListLabel: 'Ausgewählt',
      preserveSelectionOnMove: 'moved',
      moveOnSelect: false,
      showFilterInputs: false,
      infoText: 'Angezeigt {0}'
    });
  }
});

/***/ }),

/***/ "./assets/js/common.js":
/*!*****************************!*\
  !*** ./assets/js/common.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// require jQuery normally
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// create global $ and jQuery variables
__webpack_require__.g.$ = __webpack_require__.g.jQuery = jQuery = $;

/***/ }),

/***/ "./assets/js/custom.js":
/*!*****************************!*\
  !*** ./assets/js/custom.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! eonasdan-bootstrap-datetimepicker */ "./node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js");
__webpack_require__(/*! bootstrap-tagsinput */ "./node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js");
__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
__webpack_require__(/*! bootstrap4-duallistbox */ "./node_modules/bootstrap4-duallistbox/dist/jquery.bootstrap-duallistbox.js");
__webpack_require__(/*! ./app.init.duallistbox */ "./assets/js/app.init.duallistbox.js");


$(function () {
  $(".preloader").fadeOut();
  // ==============================================================
  // Theme options
  // ==============================================================
  // ==============================================================
  // sidebar-hover
  // ==============================================================

  $(".left-sidebar").hover(function () {
    $(".navbar-header").addClass("expand-logo");
  }, function () {
    $(".navbar-header").removeClass("expand-logo");
  });
  // this is for close icon when navigation open in mobile view
  $(".nav-toggler").on('click', function () {
    $("#main-wrapper").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");
  });
  $(".nav-lock").on('click', function () {
    $("body").toggleClass("lock-nav");
    $(".nav-lock i").toggleClass("mdi-toggle-switch-off");
    $("body, .page-wrapper").trigger("resize");
  });
  $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
    $(".app-search").toggle(200);
    $(".app-search input").focus();
  });

  // ==============================================================
  // Right sidebar options
  // ==============================================================
  $(function () {
    $(".service-panel-toggle").on('click', function () {
      $(".customizer").toggleClass('show-service-panel');
    });
    $('.page-wrapper').on('click', function () {
      $(".customizer").removeClass('show-service-panel');
    });
  });
  // ==============================================================
  // This is for the floating labels
  // ==============================================================
  $('.floating-labels .form-control').on('focus blur', function (e) {
    $(this).parents('.input-group').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
  }).trigger('blur');

  // ==============================================================
  //tooltip
  // ==============================================================
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  // ==============================================================
  //Popover
  // ==============================================================
  $(function () {
    $('[data-bs-toggle="popover"]').popover();
  });

  // ==============================================================
  // Perfact scrollbar
  // ==============================================================
  $('.message-center, .customizer-body, .scrollable').perfectScrollbar({
    wheelPropagation: !0
  });

  /*var ps = new PerfectScrollbar('.message-body');
  var ps = new PerfectScrollbar('.mail');
  var ps = new PerfectScrollbar('.scroll-sidebar');
  var ps = new PerfectScrollbar('.customizer-body');*/

  // ==============================================================
  // Resize all elements
  // ==============================================================
  $("body, .page-wrapper").trigger("resize");
  $(".page-wrapper").delay(20).show();
  // ==============================================================
  // To do list
  // ==============================================================
  $(".list-task li label").click(function () {
    $(this).toggleClass("task-done");
  });
  // ==============================================================
  // Collapsable cards
  // ==============================================================
  $('a[data-action="collapse"]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
    $(this).closest('.card').children('.card-body').collapse('toggle');
  });
  // Toggle fullscreen
  $('a[data-action="expand"]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
    $(this).closest('.card').toggleClass('card-fullscreen');
  });
  // Close BusinessCard
  $('a[data-action="close"]').on('click', function () {
    $(this).closest('.card').removeClass().slideUp('fast');
  });
  // ==============================================================
  // LThis is for mega menu
  // ==============================================================
  $(document).on('click', '.mega-dropdown', function (e) {
    e.stopPropagation();
  });
  // ==============================================================
  // Last month earning
  // ==============================================================
  var sparklineLogin = function sparklineLogin() {
    $('.lastmonth').sparkline([6, 10, 9, 11, 9, 10, 12], {
      type: 'bar',
      height: '35',
      barWidth: '4',
      width: '100%',
      resize: true,
      barSpacing: '8',
      barColor: '#2961ff'
    });
  };
  var sparkResize;
  $(window).resize(function (e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(sparklineLogin, 500);
  });
  sparklineLogin();

  // ==============================================================
  // This is for the innerleft sidebar
  // ==============================================================
  $(".show-left-part").on('click', function () {
    $('.left-part').toggleClass('show-panel');
    $('.show-left-part').toggleClass('ti-menu');
  });
  $('.datetimepicker').datetimepicker({
    icons: {
      time: 'far fa-clock',
      date: 'fas fa-calendar',
      up: 'fas fa-chevron-up',
      down: 'fas fa-chevron-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-check-circle',
      clear: 'fas fa-trash',
      close: 'fas fa-remove'
    }
  });
  $(".statistics_datetimepicker").datetimepicker({
    format: "MM.YYYY",
    icons: {
      time: 'far fa-clock',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-check-circle',
      clear: 'fa fa-trash',
      close: 'fa fa-remove'
    }
  });
  var dateTimePickerConfigWithDay = {
    format: "DD.MM.YYYY",
    locale: 'ru',
    icons: {
      time: 'far fa-clock',
      date: 'fa fa-calendar',
      up: 'fa fa-chevron-up',
      down: 'fa fa-chevron-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-check-circle',
      clear: 'fa fa-trash',
      close: 'fa fa-remove'
    }
  };
  $(function () {
    if ($(".js--datetimepicker").length) {
      console.log('init js--datetimepicker');
      $('.js--datetimepicker').datetimepicker(dateTimePickerConfigWithDay);
    }
    $('.datepicker').datetimepicker({
      format: "DD.MM.YYYY",
      locale: 'ru',
      icons: {
        time: 'far fa-clock',
        date: 'fas fa-calendar',
        up: 'fas fa-chevron-up',
        down: 'fas fa-chevron-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-check-circle',
        clear: 'fas fa-trash',
        close: 'fas fa-remove'
      }
    });
  });
  if ($(window).width() > 992) {
    var table = $('.datatable').DataTable();
    table.fixedHeader.disable();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 64) {
        $('.topbar').addClass('fixed');
      } else if ($(this).scrollTop() < 64) {
        $('.topbar').removeClass('fixed');
      }
    });
  }
  setTimeout(function () {
    var el = $('#main-wrapper');
    if (el.data('layout') === 'horizontal' && el.data('navbarbg') === 'skin6') {
      var window_width = $(window).width();
      var nav_bar_childer = $('.navbar').children();
      var nav_bar_width = 0;
      $(nav_bar_childer).each(function () {
        nav_bar_width += $(this).width();
      });
      if (nav_bar_width > window_width) {
        $('#sidebarnav').addClass('css--hide-icon');
      }
    }
  }, 200);

  // init,configure dropzone
  dropzone__WEBPACK_IMPORTED_MODULE_1__["default"].autoDiscover = false;
  if ($(".dropzone").length) {
    var dropzoneOrderUpload = new dropzone__WEBPACK_IMPORTED_MODULE_1__["default"](".dropzone", DropzoneOptions);
    $('.js-dropzone-send').click(function (e) {
      e.preventDefault();
      dropzoneOrderUpload.processQueue();
    });
  }
});

/***/ }),

/***/ "./assets/js/sidebarmenu.js":
/*!**********************************!*\
  !*** ./assets/js/sidebarmenu.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================
$(function () {
  "use strict";

  var url = window.location + "";
  var path = url.replace(window.location.protocol + "//" + window.location.host + "/", "");
  var element = $('ul#sidebarnav a').filter(function () {
    return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
  });
  element.parentsUntil(".sidebar-nav").each(function (index) {
    if ($(this).is("li") && $(this).children("a").length !== 0) {
      $(this).children("a").addClass("active");
      $(this).parent("ul#sidebarnav").length === 0 ? $(this).addClass("active") : $(this).addClass("selected");
    } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
      $(this).addClass("selected");
    } else if ($(this).is("ul")) {
      $(this).addClass('in');
    }
  });
  element.addClass("active");
  $('#sidebarnav a').on('click', function (e) {
    if (!$(this).hasClass("active")) {
      // hide any open menus and remove all other classes
      $("ul", $(this).parents("ul:first")).removeClass("in");
      $("a", $(this).parents("ul:first")).removeClass("active");

      // open our new menu and add the open class
      $(this).next("ul").addClass("in");
      $(this).addClass("active");
    } else if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents("ul:first").removeClass("active");
      $(this).next("ul").removeClass("in");
    }
  });
  $('#sidebarnav >li >a.has-arrow').on('click', function (e) {
    e.preventDefault();
  });
});

/***/ }),

/***/ "./assets/js/waves.js":
/*!****************************!*\
  !*** ./assets/js/waves.js ***!
  \****************************/
/***/ (function() {

!function (t) {
  "use strict";

  function e(t) {
    return null !== t && t === t.window;
  }
  function n(t) {
    return e(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  function a(t) {
    var e,
      a,
      i = {
        top: 0,
        left: 0
      },
      o = t && t.ownerDocument;
    return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (i = t.getBoundingClientRect()), a = n(o), {
      top: i.top + a.pageYOffset - e.clientTop,
      left: i.left + a.pageXOffset - e.clientLeft
    };
  }
  function i(t) {
    var e = "";
    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    return e;
  }
  function o(t) {
    if (d.allowEvent(t) === !1) return null;
    for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
      if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
        e = n;
        break;
      }
      if (n.classList.contains("waves-effect")) {
        e = n;
        break;
      }
      n = n.parentElement;
    }
    return e;
  }
  function r(e) {
    var n = o(e);
    null !== n && (c.show(e, n), "ontouchstart" in t && (n.addEventListener("touchend", c.hide, !1), n.addEventListener("touchcancel", c.hide, !1)), n.addEventListener("mouseup", c.hide, !1), n.addEventListener("mouseleave", c.hide, !1));
  }
  var s = s || {},
    u = document.querySelectorAll.bind(document),
    c = {
      duration: 750,
      show: function show(t, e) {
        if (2 === t.button) return !1;
        var n = e || this,
          o = document.createElement("div");
        o.className = "waves-ripple", n.appendChild(o);
        var r = a(n),
          s = t.pageY - r.top,
          u = t.pageX - r.left,
          d = "scale(" + n.clientWidth / 100 * 10 + ")";
        "touches" in t && (s = t.touches[0].pageY - r.top, u = t.touches[0].pageX - r.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", d), o.setAttribute("data-x", u), o.setAttribute("data-y", s);
        var l = {
          top: s + "px",
          left: u + "px"
        };
        o.className = o.className + " waves-notransition", o.setAttribute("style", i(l)), o.className = o.className.replace("waves-notransition", ""), l["-webkit-transform"] = d, l["-moz-transform"] = d, l["-ms-transform"] = d, l["-o-transform"] = d, l.transform = d, l.opacity = "1", l["-webkit-transition-duration"] = c.duration + "ms", l["-moz-transition-duration"] = c.duration + "ms", l["-o-transition-duration"] = c.duration + "ms", l["transition-duration"] = c.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", i(l));
      },
      hide: function hide(t) {
        d.touchup(t);
        var e = this,
          n = (1.4 * e.clientWidth, null),
          a = e.getElementsByClassName("waves-ripple");
        if (!(a.length > 0)) return !1;
        n = a[a.length - 1];
        var o = n.getAttribute("data-x"),
          r = n.getAttribute("data-y"),
          s = n.getAttribute("data-scale"),
          u = Date.now() - Number(n.getAttribute("data-hold")),
          l = 350 - u;
        0 > l && (l = 0), setTimeout(function () {
          var t = {
            top: r + "px",
            left: o + "px",
            opacity: "0",
            "-webkit-transition-duration": c.duration + "ms",
            "-moz-transition-duration": c.duration + "ms",
            "-o-transition-duration": c.duration + "ms",
            "transition-duration": c.duration + "ms",
            "-webkit-transform": s,
            "-moz-transform": s,
            "-ms-transform": s,
            "-o-transform": s,
            transform: s
          };
          n.setAttribute("style", i(t)), setTimeout(function () {
            try {
              e.removeChild(n);
            } catch (t) {
              return !1;
            }
          }, c.duration);
        }, l);
      },
      wrapInput: function wrapInput(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("input" === n.tagName.toLowerCase()) {
            var a = n.parentNode;
            if ("i" === a.tagName.toLowerCase() && -1 !== a.className.indexOf("waves-effect")) continue;
            var i = document.createElement("i");
            i.className = n.className + " waves-input-wrapper";
            var o = n.getAttribute("style");
            o || (o = ""), i.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), a.replaceChild(i, n), i.appendChild(n);
          }
        }
      }
    },
    d = {
      touches: 0,
      allowEvent: function allowEvent(t) {
        var e = !0;
        return "touchstart" === t.type ? d.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
          d.touches > 0 && (d.touches -= 1);
        }, 500) : "mousedown" === t.type && d.touches > 0 && (e = !1), e;
      },
      touchup: function touchup(t) {
        d.allowEvent(t);
      }
    };
  s.displayEffect = function (e) {
    e = e || {}, "duration" in e && (c.duration = e.duration), c.wrapInput(u(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", r, !1), document.body.addEventListener("mousedown", r, !1);
  }, s.attach = function (e) {
    "input" === e.tagName.toLowerCase() && (c.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", r, !1), e.addEventListener("mousedown", r, !1);
  }, t.Waves = s, document.addEventListener("DOMContentLoaded", function () {
    s.displayEffect();
  }, !1);
}(window);

/***/ }),

/***/ "./assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js":
/*!****************************************************************************!*\
  !*** ./assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* perfect-scrollbar v0.6.10 */
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = undefined;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = undefined;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})({
  1: [function (require, module, exports) {
    'use strict';

    var ps = require('../main'),
      psInstances = require('../plugin/instances');
    function mountJQuery(jQuery) {
      jQuery.fn.perfectScrollbar = function (settingOrCommand) {
        return this.each(function () {
          if (_typeof(settingOrCommand) === 'object' || typeof settingOrCommand === 'undefined') {
            // If it's an object or none, initialize.
            var settings = settingOrCommand;
            if (!psInstances.get(this)) {
              ps.initialize(this, settings);
            }
          } else {
            // Unless, it may be a command.
            var command = settingOrCommand;
            if (command === 'update') {
              ps.update(this);
            } else if (command === 'destroy') {
              ps.destroy(this);
            }
          }
          return jQuery(this);
        });
      };
    }
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (mountJQuery),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var jq; }
    module.exports = mountJQuery;
  }, {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function (require, module, exports) {
    'use strict';

    function oldAdd(element, className) {
      var classes = element.className.split(' ');
      if (classes.indexOf(className) < 0) {
        classes.push(className);
      }
      element.className = classes.join(' ');
    }
    function oldRemove(element, className) {
      var classes = element.className.split(' ');
      var idx = classes.indexOf(className);
      if (idx >= 0) {
        classes.splice(idx, 1);
      }
      element.className = classes.join(' ');
    }
    exports.add = function (element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        oldAdd(element, className);
      }
    };
    exports.remove = function (element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        oldRemove(element, className);
      }
    };
    exports.list = function (element) {
      if (element.classList) {
        return Array.prototype.slice.apply(element.classList);
      } else {
        return element.className.split(' ');
      }
    };
  }, {}],
  3: [function (require, module, exports) {
    'use strict';

    var DOM = {};
    DOM.e = function (tagName, className) {
      var element = document.createElement(tagName);
      element.className = className;
      return element;
    };
    DOM.appendTo = function (child, parent) {
      parent.appendChild(child);
      return child;
    };
    function cssGet(element, styleName) {
      return window.getComputedStyle(element)[styleName];
    }
    function cssSet(element, styleName, styleValue) {
      if (typeof styleValue === 'number') {
        styleValue = styleValue.toString() + 'px';
      }
      element.style[styleName] = styleValue;
      return element;
    }
    function cssMultiSet(element, obj) {
      for (var key in obj) {
        var val = obj[key];
        if (typeof val === 'number') {
          val = val.toString() + 'px';
        }
        element.style[key] = val;
      }
      return element;
    }
    DOM.css = function (element, styleNameOrObject, styleValue) {
      if (_typeof(styleNameOrObject) === 'object') {
        // multiple set with object
        return cssMultiSet(element, styleNameOrObject);
      } else {
        if (typeof styleValue === 'undefined') {
          return cssGet(element, styleNameOrObject);
        } else {
          return cssSet(element, styleNameOrObject, styleValue);
        }
      }
    };
    DOM.matches = function (element, query) {
      if (typeof element.matches !== 'undefined') {
        return element.matches(query);
      } else {
        if (typeof element.matchesSelector !== 'undefined') {
          return element.matchesSelector(query);
        } else if (typeof element.webkitMatchesSelector !== 'undefined') {
          return element.webkitMatchesSelector(query);
        } else if (typeof element.mozMatchesSelector !== 'undefined') {
          return element.mozMatchesSelector(query);
        } else if (typeof element.msMatchesSelector !== 'undefined') {
          return element.msMatchesSelector(query);
        }
      }
    };
    DOM.remove = function (element) {
      if (typeof element.remove !== 'undefined') {
        element.remove();
      } else {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };
    DOM.queryChildren = function (element, selector) {
      return Array.prototype.filter.call(element.childNodes, function (child) {
        return DOM.matches(child, selector);
      });
    };
    module.exports = DOM;
  }, {}],
  4: [function (require, module, exports) {
    'use strict';

    var EventElement = function EventElement(element) {
      this.element = element;
      this.events = {};
    };
    EventElement.prototype.bind = function (eventName, handler) {
      if (typeof this.events[eventName] === 'undefined') {
        this.events[eventName] = [];
      }
      this.events[eventName].push(handler);
      this.element.addEventListener(eventName, handler, false);
    };
    EventElement.prototype.unbind = function (eventName, handler) {
      var isHandlerProvided = typeof handler !== 'undefined';
      this.events[eventName] = this.events[eventName].filter(function (hdlr) {
        if (isHandlerProvided && hdlr !== handler) {
          return true;
        }
        this.element.removeEventListener(eventName, hdlr, false);
        return false;
      }, this);
    };
    EventElement.prototype.unbindAll = function () {
      for (var name in this.events) {
        this.unbind(name);
      }
    };
    var EventManager = function EventManager() {
      this.eventElements = [];
    };
    EventManager.prototype.eventElement = function (element) {
      var ee = this.eventElements.filter(function (eventElement) {
        return eventElement.element === element;
      })[0];
      if (typeof ee === 'undefined') {
        ee = new EventElement(element);
        this.eventElements.push(ee);
      }
      return ee;
    };
    EventManager.prototype.bind = function (element, eventName, handler) {
      this.eventElement(element).bind(eventName, handler);
    };
    EventManager.prototype.unbind = function (element, eventName, handler) {
      this.eventElement(element).unbind(eventName, handler);
    };
    EventManager.prototype.unbindAll = function () {
      for (var i = 0; i < this.eventElements.length; i++) {
        this.eventElements[i].unbindAll();
      }
    };
    EventManager.prototype.once = function (element, eventName, handler) {
      var ee = this.eventElement(element);
      var onceHandler = function onceHandler(e) {
        ee.unbind(eventName, onceHandler);
        handler(e);
      };
      ee.bind(eventName, onceHandler);
    };
    module.exports = EventManager;
  }, {}],
  5: [function (require, module, exports) {
    'use strict';

    module.exports = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      };
    }();
  }, {}],
  6: [function (require, module, exports) {
    'use strict';

    var cls = require('./class'),
      d = require('./dom');
    exports.toInt = function (x) {
      return parseInt(x, 10) || 0;
    };
    exports.clone = function (obj) {
      if (obj === null) {
        return null;
      } else if (_typeof(obj) === 'object') {
        var result = {};
        for (var key in obj) {
          result[key] = this.clone(obj[key]);
        }
        return result;
      } else {
        return obj;
      }
    };
    exports.extend = function (original, source) {
      var result = this.clone(original);
      for (var key in source) {
        result[key] = this.clone(source[key]);
      }
      return result;
    };
    exports.isEditable = function (el) {
      return d.matches(el, "input,[contenteditable]") || d.matches(el, "select,[contenteditable]") || d.matches(el, "textarea,[contenteditable]") || d.matches(el, "button,[contenteditable]");
    };
    exports.removePsClasses = function (element) {
      var clsList = cls.list(element);
      for (var i = 0; i < clsList.length; i++) {
        var className = clsList[i];
        if (className.indexOf('ps-') === 0) {
          cls.remove(element, className);
        }
      }
    };
    exports.outerWidth = function (element) {
      return this.toInt(d.css(element, 'width')) + this.toInt(d.css(element, 'paddingLeft')) + this.toInt(d.css(element, 'paddingRight')) + this.toInt(d.css(element, 'borderLeftWidth')) + this.toInt(d.css(element, 'borderRightWidth'));
    };
    exports.startScrolling = function (element, axis) {
      cls.add(element, 'ps-in-scrolling');
      if (typeof axis !== 'undefined') {
        cls.add(element, 'ps-' + axis);
      } else {
        cls.add(element, 'ps-x');
        cls.add(element, 'ps-y');
      }
    };
    exports.stopScrolling = function (element, axis) {
      cls.remove(element, 'ps-in-scrolling');
      if (typeof axis !== 'undefined') {
        cls.remove(element, 'ps-' + axis);
      } else {
        cls.remove(element, 'ps-x');
        cls.remove(element, 'ps-y');
      }
    };
    exports.env = {
      isWebKit: 'WebkitAppearance' in document.documentElement.style,
      supportsTouch: 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: window.navigator.msMaxTouchPoints !== null
    };
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function (require, module, exports) {
    'use strict';

    var destroy = require('./plugin/destroy'),
      initialize = require('./plugin/initialize'),
      update = require('./plugin/update');
    module.exports = {
      initialize: initialize,
      update: update,
      destroy: destroy
    };
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function (require, module, exports) {
    'use strict';

    module.exports = {
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      stopPropagationOnClick: true,
      suppressScrollX: false,
      suppressScrollY: false,
      swipePropagation: true,
      useBothWheelAxes: false,
      useKeyboard: true,
      useSelectionScroll: false,
      wheelPropagation: false,
      wheelSpeed: 1,
      theme: 'default'
    };
  }, {}],
  9: [function (require, module, exports) {
    'use strict';

    var d = require('../lib/dom'),
      h = require('../lib/helper'),
      instances = require('./instances');
    module.exports = function (element) {
      var i = instances.get(element);
      if (!i) {
        return;
      }
      i.event.unbindAll();
      d.remove(i.scrollbarX);
      d.remove(i.scrollbarY);
      d.remove(i.scrollbarXRail);
      d.remove(i.scrollbarYRail);
      h.removePsClasses(element);
      instances.remove(element);
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
      instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindClickRailHandler(element, i) {
      function pageOffset(el) {
        return el.getBoundingClientRect();
      }
      var stopPropagation = window.Event.prototype.stopPropagation.bind;
      if (i.settings.stopPropagationOnClick) {
        i.event.bind(i.scrollbarY, 'click', stopPropagation);
      }
      i.event.bind(i.scrollbarYRail, 'click', function (e) {
        var halfOfScrollbarLength = h.toInt(i.scrollbarYHeight / 2);
        var positionTop = i.railYRatio * (e.pageY - window.pageYOffset - pageOffset(i.scrollbarYRail).top - halfOfScrollbarLength);
        var maxPositionTop = i.railYRatio * (i.railYHeight - i.scrollbarYHeight);
        var positionRatio = positionTop / maxPositionTop;
        if (positionRatio < 0) {
          positionRatio = 0;
        } else if (positionRatio > 1) {
          positionRatio = 1;
        }
        updateScroll(element, 'top', (i.contentHeight - i.containerHeight) * positionRatio);
        updateGeometry(element);
        e.stopPropagation();
      });
      if (i.settings.stopPropagationOnClick) {
        i.event.bind(i.scrollbarX, 'click', stopPropagation);
      }
      i.event.bind(i.scrollbarXRail, 'click', function (e) {
        var halfOfScrollbarLength = h.toInt(i.scrollbarXWidth / 2);
        var positionLeft = i.railXRatio * (e.pageX - window.pageXOffset - pageOffset(i.scrollbarXRail).left - halfOfScrollbarLength);
        var maxPositionLeft = i.railXRatio * (i.railXWidth - i.scrollbarXWidth);
        var positionRatio = positionLeft / maxPositionLeft;
        if (positionRatio < 0) {
          positionRatio = 0;
        } else if (positionRatio > 1) {
          positionRatio = 1;
        }
        updateScroll(element, 'left', (i.contentWidth - i.containerWidth) * positionRatio - i.negativeScrollAdjustment);
        updateGeometry(element);
        e.stopPropagation();
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindClickRailHandler(element, i);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function (require, module, exports) {
    'use strict';

    var d = require('../../lib/dom'),
      h = require('../../lib/helper'),
      instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindMouseScrollXHandler(element, i) {
      var currentLeft = null;
      var currentPageX = null;
      function updateScrollLeft(deltaX) {
        var newLeft = currentLeft + deltaX * i.railXRatio;
        var maxLeft = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + i.railXRatio * (i.railXWidth - i.scrollbarXWidth);
        if (newLeft < 0) {
          i.scrollbarXLeft = 0;
        } else if (newLeft > maxLeft) {
          i.scrollbarXLeft = maxLeft;
        } else {
          i.scrollbarXLeft = newLeft;
        }
        var scrollLeft = h.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - i.railXRatio * i.scrollbarXWidth)) - i.negativeScrollAdjustment;
        updateScroll(element, 'left', scrollLeft);
      }
      var mouseMoveHandler = function mouseMoveHandler(e) {
        updateScrollLeft(e.pageX - currentPageX);
        updateGeometry(element);
        e.stopPropagation();
        e.preventDefault();
      };
      var mouseUpHandler = function mouseUpHandler() {
        h.stopScrolling(element, 'x');
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      };
      i.event.bind(i.scrollbarX, 'mousedown', function (e) {
        currentPageX = e.pageX;
        currentLeft = h.toInt(d.css(i.scrollbarX, 'left')) * i.railXRatio;
        h.startScrolling(element, 'x');
        i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
        e.stopPropagation();
        e.preventDefault();
      });
    }
    function bindMouseScrollYHandler(element, i) {
      var currentTop = null;
      var currentPageY = null;
      function updateScrollTop(deltaY) {
        var newTop = currentTop + deltaY * i.railYRatio;
        var maxTop = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + i.railYRatio * (i.railYHeight - i.scrollbarYHeight);
        if (newTop < 0) {
          i.scrollbarYTop = 0;
        } else if (newTop > maxTop) {
          i.scrollbarYTop = maxTop;
        } else {
          i.scrollbarYTop = newTop;
        }
        var scrollTop = h.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - i.railYRatio * i.scrollbarYHeight));
        updateScroll(element, 'top', scrollTop);
      }
      var mouseMoveHandler = function mouseMoveHandler(e) {
        updateScrollTop(e.pageY - currentPageY);
        updateGeometry(element);
        e.stopPropagation();
        e.preventDefault();
      };
      var mouseUpHandler = function mouseUpHandler() {
        h.stopScrolling(element, 'y');
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      };
      i.event.bind(i.scrollbarY, 'mousedown', function (e) {
        currentPageY = e.pageY;
        currentTop = h.toInt(d.css(i.scrollbarY, 'top')) * i.railYRatio;
        h.startScrolling(element, 'y');
        i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
        e.stopPropagation();
        e.preventDefault();
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindMouseScrollXHandler(element, i);
      bindMouseScrollYHandler(element, i);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
      d = require('../../lib/dom'),
      instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindKeyboardHandler(element, i) {
      var hovered = false;
      i.event.bind(element, 'mouseenter', function () {
        hovered = true;
      });
      i.event.bind(element, 'mouseleave', function () {
        hovered = false;
      });
      var shouldPrevent = false;
      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;
        if (deltaX === 0) {
          if (!i.scrollbarYActive) {
            return false;
          }
          if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
            return !i.settings.wheelPropagation;
          }
        }
        var scrollLeft = element.scrollLeft;
        if (deltaY === 0) {
          if (!i.scrollbarXActive) {
            return false;
          }
          if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
            return !i.settings.wheelPropagation;
          }
        }
        return true;
      }
      i.event.bind(i.ownerDocument, 'keydown', function (e) {
        if (e.isDefaultPrevented && e.isDefaultPrevented()) {
          return;
        }
        var focused = d.matches(i.scrollbarX, ':focus') || d.matches(i.scrollbarY, ':focus');
        if (!hovered && !focused) {
          return;
        }
        var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
        if (activeElement) {
          // go deeper if element is a webcomponent
          while (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
          if (h.isEditable(activeElement)) {
            return;
          }
        }
        var deltaX = 0;
        var deltaY = 0;
        switch (e.which) {
          case 37:
            // left
            deltaX = -30;
            break;
          case 38:
            // up
            deltaY = 30;
            break;
          case 39:
            // right
            deltaX = 30;
            break;
          case 40:
            // down
            deltaY = -30;
            break;
          case 33:
            // page up
            deltaY = 90;
            break;
          case 32:
            // space bar
            if (e.shiftKey) {
              deltaY = 90;
            } else {
              deltaY = -90;
            }
            break;
          case 34:
            // page down
            deltaY = -90;
            break;
          case 35:
            // end
            if (e.ctrlKey) {
              deltaY = -i.contentHeight;
            } else {
              deltaY = -i.containerHeight;
            }
            break;
          case 36:
            // home
            if (e.ctrlKey) {
              deltaY = element.scrollTop;
            } else {
              deltaY = i.containerHeight;
            }
            break;
          default:
            return;
        }
        updateScroll(element, 'top', element.scrollTop - deltaY);
        updateScroll(element, 'left', element.scrollLeft + deltaX);
        updateGeometry(element);
        shouldPrevent = shouldPreventDefault(deltaX, deltaY);
        if (shouldPrevent) {
          e.preventDefault();
        }
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindKeyboardHandler(element, i);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindMouseWheelHandler(element, i) {
      var shouldPrevent = false;
      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;
        if (deltaX === 0) {
          if (!i.scrollbarYActive) {
            return false;
          }
          if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
            return !i.settings.wheelPropagation;
          }
        }
        var scrollLeft = element.scrollLeft;
        if (deltaY === 0) {
          if (!i.scrollbarXActive) {
            return false;
          }
          if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
            return !i.settings.wheelPropagation;
          }
        }
        return true;
      }
      function getDeltaFromEvent(e) {
        var deltaX = e.deltaX;
        var deltaY = -1 * e.deltaY;
        if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
          // OS X Safari
          deltaX = -1 * e.wheelDeltaX / 6;
          deltaY = e.wheelDeltaY / 6;
        }
        if (e.deltaMode && e.deltaMode === 1) {
          // Firefox in deltaMode 1: Line scrolling
          deltaX *= 10;
          deltaY *= 10;
        }
        if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
          // IE in some mouse drivers
          deltaX = 0;
          deltaY = e.wheelDelta;
        }
        return [deltaX, deltaY];
      }
      function shouldBeConsumedByTextarea(deltaX, deltaY) {
        var hoveredTextarea = element.querySelector('textarea:hover');
        if (hoveredTextarea) {
          var maxScrollTop = hoveredTextarea.scrollHeight - hoveredTextarea.clientHeight;
          if (maxScrollTop > 0) {
            if (!(hoveredTextarea.scrollTop === 0 && deltaY > 0) && !(hoveredTextarea.scrollTop === maxScrollTop && deltaY < 0)) {
              return true;
            }
          }
          var maxScrollLeft = hoveredTextarea.scrollLeft - hoveredTextarea.clientWidth;
          if (maxScrollLeft > 0) {
            if (!(hoveredTextarea.scrollLeft === 0 && deltaX < 0) && !(hoveredTextarea.scrollLeft === maxScrollLeft && deltaX > 0)) {
              return true;
            }
          }
        }
        return false;
      }
      function mousewheelHandler(e) {
        var delta = getDeltaFromEvent(e);
        var deltaX = delta[0];
        var deltaY = delta[1];
        if (shouldBeConsumedByTextarea(deltaX, deltaY)) {
          return;
        }
        shouldPrevent = false;
        if (!i.settings.useBothWheelAxes) {
          // deltaX will only be used for horizontal scrolling and deltaY will
          // only be used for vertical scrolling - this is the default
          updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
          updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
        } else if (i.scrollbarYActive && !i.scrollbarXActive) {
          // only vertical scrollbar is active and useBothWheelAxes option is
          // active, so let's scroll vertical bar using both mouse wheel axes
          if (deltaY) {
            updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
          } else {
            updateScroll(element, 'top', element.scrollTop + deltaX * i.settings.wheelSpeed);
          }
          shouldPrevent = true;
        } else if (i.scrollbarXActive && !i.scrollbarYActive) {
          // useBothWheelAxes and only horizontal bar is active, so use both
          // wheel axes for horizontal bar
          if (deltaX) {
            updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
          } else {
            updateScroll(element, 'left', element.scrollLeft - deltaY * i.settings.wheelSpeed);
          }
          shouldPrevent = true;
        }
        updateGeometry(element);
        shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
        if (shouldPrevent) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if (typeof window.onwheel !== "undefined") {
        i.event.bind(element, 'wheel', mousewheelHandler);
      } else if (typeof window.onmousewheel !== "undefined") {
        i.event.bind(element, 'mousewheel', mousewheelHandler);
      }
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindMouseWheelHandler(element, i);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
      updateGeometry = require('../update-geometry');
    function bindNativeScrollHandler(element, i) {
      i.event.bind(element, 'scroll', function () {
        updateGeometry(element);
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindNativeScrollHandler(element, i);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
      instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindSelectionHandler(element, i) {
      function getRangeNode() {
        var selection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : '';
        if (selection.toString().length === 0) {
          return null;
        } else {
          return selection.getRangeAt(0).commonAncestorContainer;
        }
      }
      var scrollingLoop = null;
      var scrollDiff = {
        top: 0,
        left: 0
      };
      function startScrolling() {
        if (!scrollingLoop) {
          scrollingLoop = setInterval(function () {
            if (!instances.get(element)) {
              clearInterval(scrollingLoop);
              return;
            }
            updateScroll(element, 'top', element.scrollTop + scrollDiff.top);
            updateScroll(element, 'left', element.scrollLeft + scrollDiff.left);
            updateGeometry(element);
          }, 50); // every .1 sec
        }
      }
      function stopScrolling() {
        if (scrollingLoop) {
          clearInterval(scrollingLoop);
          scrollingLoop = null;
        }
        h.stopScrolling(element);
      }
      var isSelected = false;
      i.event.bind(i.ownerDocument, 'selectionchange', function () {
        if (element.contains(getRangeNode())) {
          isSelected = true;
        } else {
          isSelected = false;
          stopScrolling();
        }
      });
      i.event.bind(window, 'mouseup', function () {
        if (isSelected) {
          isSelected = false;
          stopScrolling();
        }
      });
      i.event.bind(window, 'mousemove', function (e) {
        if (isSelected) {
          var mousePosition = {
            x: e.pageX,
            y: e.pageY
          };
          var containerGeometry = {
            left: element.offsetLeft,
            right: element.offsetLeft + element.offsetWidth,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight
          };
          if (mousePosition.x < containerGeometry.left + 3) {
            scrollDiff.left = -5;
            h.startScrolling(element, 'x');
          } else if (mousePosition.x > containerGeometry.right - 3) {
            scrollDiff.left = 5;
            h.startScrolling(element, 'x');
          } else {
            scrollDiff.left = 0;
          }
          if (mousePosition.y < containerGeometry.top + 3) {
            if (containerGeometry.top + 3 - mousePosition.y < 5) {
              scrollDiff.top = -5;
            } else {
              scrollDiff.top = -20;
            }
            h.startScrolling(element, 'y');
          } else if (mousePosition.y > containerGeometry.bottom - 3) {
            if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
              scrollDiff.top = 5;
            } else {
              scrollDiff.top = 20;
            }
            h.startScrolling(element, 'y');
          } else {
            scrollDiff.top = 0;
          }
          if (scrollDiff.top === 0 && scrollDiff.left === 0) {
            stopScrolling();
          } else {
            startScrolling();
          }
        }
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      bindSelectionHandler(element, i);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
      updateGeometry = require('../update-geometry'),
      updateScroll = require('../update-scroll');
    function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;
        var scrollLeft = element.scrollLeft;
        var magnitudeX = Math.abs(deltaX);
        var magnitudeY = Math.abs(deltaY);
        if (magnitudeY > magnitudeX) {
          // user is perhaps trying to swipe up/down the page

          if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
            return !i.settings.swipePropagation;
          }
        } else if (magnitudeX > magnitudeY) {
          // user is perhaps trying to swipe left/right across the page

          if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
            return !i.settings.swipePropagation;
          }
        }
        return true;
      }
      function applyTouchMove(differenceX, differenceY) {
        updateScroll(element, 'top', element.scrollTop - differenceY);
        updateScroll(element, 'left', element.scrollLeft - differenceX);
        updateGeometry(element);
      }
      var startOffset = {};
      var startTime = 0;
      var speed = {};
      var easingLoop = null;
      var inGlobalTouch = false;
      var inLocalTouch = false;
      function globalTouchStart() {
        inGlobalTouch = true;
      }
      function globalTouchEnd() {
        inGlobalTouch = false;
      }
      function getTouch(e) {
        if (e.targetTouches) {
          return e.targetTouches[0];
        } else {
          // Maybe IE pointer
          return e;
        }
      }
      function shouldHandle(e) {
        if (e.targetTouches && e.targetTouches.length === 1) {
          return true;
        }
        if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
          return true;
        }
        return false;
      }
      function touchStart(e) {
        if (shouldHandle(e)) {
          inLocalTouch = true;
          var touch = getTouch(e);
          startOffset.pageX = touch.pageX;
          startOffset.pageY = touch.pageY;
          startTime = new Date().getTime();
          if (easingLoop !== null) {
            clearInterval(easingLoop);
          }
          e.stopPropagation();
        }
      }
      function touchMove(e) {
        if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
          var touch = getTouch(e);
          var currentOffset = {
            pageX: touch.pageX,
            pageY: touch.pageY
          };
          var differenceX = currentOffset.pageX - startOffset.pageX;
          var differenceY = currentOffset.pageY - startOffset.pageY;
          applyTouchMove(differenceX, differenceY);
          startOffset = currentOffset;
          var currentTime = new Date().getTime();
          var timeGap = currentTime - startTime;
          if (timeGap > 0) {
            speed.x = differenceX / timeGap;
            speed.y = differenceY / timeGap;
            startTime = currentTime;
          }
          if (shouldPreventDefault(differenceX, differenceY)) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }
      function touchEnd() {
        if (!inGlobalTouch && inLocalTouch) {
          inLocalTouch = false;
          clearInterval(easingLoop);
          easingLoop = setInterval(function () {
            if (!instances.get(element)) {
              clearInterval(easingLoop);
              return;
            }
            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(easingLoop);
              return;
            }
            applyTouchMove(speed.x * 30, speed.y * 30);
            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        }
      }
      if (supportsTouch) {
        i.event.bind(window, 'touchstart', globalTouchStart);
        i.event.bind(window, 'touchend', globalTouchEnd);
        i.event.bind(element, 'touchstart', touchStart);
        i.event.bind(element, 'touchmove', touchMove);
        i.event.bind(element, 'touchend', touchEnd);
      }
      if (supportsIePointer) {
        if (window.PointerEvent) {
          i.event.bind(window, 'pointerdown', globalTouchStart);
          i.event.bind(window, 'pointerup', globalTouchEnd);
          i.event.bind(element, 'pointerdown', touchStart);
          i.event.bind(element, 'pointermove', touchMove);
          i.event.bind(element, 'pointerup', touchEnd);
        } else if (window.MSPointerEvent) {
          i.event.bind(window, 'MSPointerDown', globalTouchStart);
          i.event.bind(window, 'MSPointerUp', globalTouchEnd);
          i.event.bind(element, 'MSPointerDown', touchStart);
          i.event.bind(element, 'MSPointerMove', touchMove);
          i.event.bind(element, 'MSPointerUp', touchEnd);
        }
      }
    }
    module.exports = function (element, supportsTouch, supportsIePointer) {
      var i = instances.get(element);
      bindTouchHandler(element, i, supportsTouch, supportsIePointer);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
      h = require('../lib/helper'),
      instances = require('./instances'),
      updateGeometry = require('./update-geometry');

    // Handlers
    var clickRailHandler = require('./handler/click-rail'),
      dragScrollbarHandler = require('./handler/drag-scrollbar'),
      keyboardHandler = require('./handler/keyboard'),
      mouseWheelHandler = require('./handler/mouse-wheel'),
      nativeScrollHandler = require('./handler/native-scroll'),
      selectionHandler = require('./handler/selection'),
      touchHandler = require('./handler/touch');
    module.exports = function (element, userSettings) {
      userSettings = _typeof(userSettings) === 'object' ? userSettings : {};
      cls.add(element, 'ps-container');

      // Create a plugin instance.
      var i = instances.add(element);
      i.settings = h.extend(i.settings, userSettings);
      cls.add(element, 'ps-theme-' + i.settings.theme);
      clickRailHandler(element);
      dragScrollbarHandler(element);
      mouseWheelHandler(element);
      nativeScrollHandler(element);
      if (i.settings.useSelectionScroll) {
        selectionHandler(element);
      }
      if (h.env.supportsTouch || h.env.supportsIePointer) {
        touchHandler(element, h.env.supportsTouch, h.env.supportsIePointer);
      }
      if (i.settings.useKeyboard) {
        keyboardHandler(element);
      }
      updateGeometry(element);
    };
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
      d = require('../lib/dom'),
      defaultSettings = require('./default-setting'),
      EventManager = require('../lib/event-manager'),
      guid = require('../lib/guid'),
      h = require('../lib/helper');
    var instances = {};
    function Instance(element) {
      var i = this;
      i.settings = h.clone(defaultSettings);
      i.containerWidth = null;
      i.containerHeight = null;
      i.contentWidth = null;
      i.contentHeight = null;
      i.isRtl = d.css(element, 'direction') === "rtl";
      i.isNegativeScroll = function () {
        var originalScrollLeft = element.scrollLeft;
        var result = null;
        element.scrollLeft = -1;
        result = element.scrollLeft < 0;
        element.scrollLeft = originalScrollLeft;
        return result;
      }();
      i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
      i.event = new EventManager();
      i.ownerDocument = element.ownerDocument || document;
      function focus() {
        cls.add(element, 'ps-focus');
      }
      function blur() {
        cls.remove(element, 'ps-focus');
      }
      i.scrollbarXRail = d.appendTo(d.e('div', 'ps-scrollbar-x-rail'), element);
      i.scrollbarX = d.appendTo(d.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
      i.scrollbarX.setAttribute('tabindex', 0);
      i.event.bind(i.scrollbarX, 'focus', focus);
      i.event.bind(i.scrollbarX, 'blur', blur);
      i.scrollbarXActive = null;
      i.scrollbarXWidth = null;
      i.scrollbarXLeft = null;
      i.scrollbarXBottom = h.toInt(d.css(i.scrollbarXRail, 'bottom'));
      i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN
      i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : h.toInt(d.css(i.scrollbarXRail, 'top'));
      i.railBorderXWidth = h.toInt(d.css(i.scrollbarXRail, 'borderLeftWidth')) + h.toInt(d.css(i.scrollbarXRail, 'borderRightWidth'));
      // Set rail to display:block to calculate margins
      d.css(i.scrollbarXRail, 'display', 'block');
      i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
      d.css(i.scrollbarXRail, 'display', '');
      i.railXWidth = null;
      i.railXRatio = null;
      i.scrollbarYRail = d.appendTo(d.e('div', 'ps-scrollbar-y-rail'), element);
      i.scrollbarY = d.appendTo(d.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
      i.scrollbarY.setAttribute('tabindex', 0);
      i.event.bind(i.scrollbarY, 'focus', focus);
      i.event.bind(i.scrollbarY, 'blur', blur);
      i.scrollbarYActive = null;
      i.scrollbarYHeight = null;
      i.scrollbarYTop = null;
      i.scrollbarYRight = h.toInt(d.css(i.scrollbarYRail, 'right'));
      i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN
      i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : h.toInt(d.css(i.scrollbarYRail, 'left'));
      i.scrollbarYOuterWidth = i.isRtl ? h.outerWidth(i.scrollbarY) : null;
      i.railBorderYWidth = h.toInt(d.css(i.scrollbarYRail, 'borderTopWidth')) + h.toInt(d.css(i.scrollbarYRail, 'borderBottomWidth'));
      d.css(i.scrollbarYRail, 'display', 'block');
      i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));
      d.css(i.scrollbarYRail, 'display', '');
      i.railYHeight = null;
      i.railYRatio = null;
    }
    function getId(element) {
      if (typeof element.dataset === 'undefined') {
        return element.getAttribute('data-ps-id');
      } else {
        return element.dataset.psId;
      }
    }
    function setId(element, id) {
      if (typeof element.dataset === 'undefined') {
        element.setAttribute('data-ps-id', id);
      } else {
        element.dataset.psId = id;
      }
    }
    function removeId(element) {
      if (typeof element.dataset === 'undefined') {
        element.removeAttribute('data-ps-id');
      } else {
        delete element.dataset.psId;
      }
    }
    exports.add = function (element) {
      var newId = guid();
      setId(element, newId);
      instances[newId] = new Instance(element);
      return instances[newId];
    };
    exports.remove = function (element) {
      delete instances[getId(element)];
      removeId(element);
    };
    exports.get = function (element) {
      return instances[getId(element)];
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
      d = require('../lib/dom'),
      h = require('../lib/helper'),
      instances = require('./instances'),
      updateScroll = require('./update-scroll');
    function getThumbSize(i, thumbSize) {
      if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
      }
      if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
      }
      return thumbSize;
    }
    function updateCss(element, i) {
      var xRailOffset = {
        width: i.railXWidth
      };
      if (i.isRtl) {
        xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
      } else {
        xRailOffset.left = element.scrollLeft;
      }
      if (i.isScrollbarXUsingBottom) {
        xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
      } else {
        xRailOffset.top = i.scrollbarXTop + element.scrollTop;
      }
      d.css(i.scrollbarXRail, xRailOffset);
      var yRailOffset = {
        top: element.scrollTop,
        height: i.railYHeight
      };
      if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
          yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
        } else {
          yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
      } else {
        if (i.isRtl) {
          yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
        } else {
          yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
      }
      d.css(i.scrollbarYRail, yRailOffset);
      d.css(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth
      });
      d.css(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth
      });
    }
    module.exports = function (element) {
      var i = instances.get(element);
      i.containerWidth = element.clientWidth;
      i.containerHeight = element.clientHeight;
      i.contentWidth = element.scrollWidth;
      i.contentHeight = element.scrollHeight;
      var existingRails;
      if (!element.contains(i.scrollbarXRail)) {
        existingRails = d.queryChildren(element, '.ps-scrollbar-x-rail');
        if (existingRails.length > 0) {
          existingRails.forEach(function (rail) {
            d.remove(rail);
          });
        }
        d.appendTo(i.scrollbarXRail, element);
      }
      if (!element.contains(i.scrollbarYRail)) {
        existingRails = d.queryChildren(element, '.ps-scrollbar-y-rail');
        if (existingRails.length > 0) {
          existingRails.forEach(function (rail) {
            d.remove(rail);
          });
        }
        d.appendTo(i.scrollbarYRail, element);
      }
      if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
        i.scrollbarXActive = true;
        i.railXWidth = i.containerWidth - i.railXMarginWidth;
        i.railXRatio = i.containerWidth / i.railXWidth;
        i.scrollbarXWidth = getThumbSize(i, h.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
        i.scrollbarXLeft = h.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
      } else {
        i.scrollbarXActive = false;
      }
      if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
        i.scrollbarYActive = true;
        i.railYHeight = i.containerHeight - i.railYMarginHeight;
        i.railYRatio = i.containerHeight / i.railYHeight;
        i.scrollbarYHeight = getThumbSize(i, h.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
        i.scrollbarYTop = h.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
      } else {
        i.scrollbarYActive = false;
      }
      if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
        i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
      }
      if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
        i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
      }
      updateCss(element, i);
      if (i.scrollbarXActive) {
        cls.add(element, 'ps-active-x');
      } else {
        cls.remove(element, 'ps-active-x');
        i.scrollbarXWidth = 0;
        i.scrollbarXLeft = 0;
        updateScroll(element, 'left', 0);
      }
      if (i.scrollbarYActive) {
        cls.add(element, 'ps-active-y');
      } else {
        cls.remove(element, 'ps-active-y');
        i.scrollbarYHeight = 0;
        i.scrollbarYTop = 0;
        updateScroll(element, 'top', 0);
      }
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (require, module, exports) {
    'use strict';

    var instances = require('./instances');
    var upEvent = document.createEvent('Event'),
      downEvent = document.createEvent('Event'),
      leftEvent = document.createEvent('Event'),
      rightEvent = document.createEvent('Event'),
      yEvent = document.createEvent('Event'),
      xEvent = document.createEvent('Event'),
      xStartEvent = document.createEvent('Event'),
      xEndEvent = document.createEvent('Event'),
      yStartEvent = document.createEvent('Event'),
      yEndEvent = document.createEvent('Event'),
      lastTop,
      lastLeft;
    upEvent.initEvent('ps-scroll-up', true, true);
    downEvent.initEvent('ps-scroll-down', true, true);
    leftEvent.initEvent('ps-scroll-left', true, true);
    rightEvent.initEvent('ps-scroll-right', true, true);
    yEvent.initEvent('ps-scroll-y', true, true);
    xEvent.initEvent('ps-scroll-x', true, true);
    xStartEvent.initEvent('ps-x-reach-start', true, true);
    xEndEvent.initEvent('ps-x-reach-end', true, true);
    yStartEvent.initEvent('ps-y-reach-start', true, true);
    yEndEvent.initEvent('ps-y-reach-end', true, true);
    module.exports = function (element, axis, value) {
      if (typeof element === 'undefined') {
        throw 'You must provide an element to the update-scroll function';
      }
      if (typeof axis === 'undefined') {
        throw 'You must provide an axis to the update-scroll function';
      }
      if (typeof value === 'undefined') {
        throw 'You must provide a value to the update-scroll function';
      }
      if (axis === 'top' && value <= 0) {
        element.scrollTop = value = 0; // don't allow negative scroll
        element.dispatchEvent(yStartEvent);
      }
      if (axis === 'left' && value <= 0) {
        element.scrollLeft = value = 0; // don't allow negative scroll
        element.dispatchEvent(xStartEvent);
      }
      var i = instances.get(element);
      if (axis === 'top' && value >= i.contentHeight - i.containerHeight) {
        element.scrollTop = value = i.contentHeight - i.containerHeight; // don't allow scroll past container
        element.dispatchEvent(yEndEvent);
      }
      if (axis === 'left' && value >= i.contentWidth - i.containerWidth) {
        element.scrollLeft = value = i.contentWidth - i.containerWidth; // don't allow scroll past container
        element.dispatchEvent(xEndEvent);
      }
      if (!lastTop) {
        lastTop = element.scrollTop;
      }
      if (!lastLeft) {
        lastLeft = element.scrollLeft;
      }
      if (axis === 'top' && value < lastTop) {
        element.dispatchEvent(upEvent);
      }
      if (axis === 'top' && value > lastTop) {
        element.dispatchEvent(downEvent);
      }
      if (axis === 'left' && value < lastLeft) {
        element.dispatchEvent(leftEvent);
      }
      if (axis === 'left' && value > lastLeft) {
        element.dispatchEvent(rightEvent);
      }
      if (axis === 'top') {
        element.scrollTop = lastTop = value;
        element.dispatchEvent(yEvent);
      }
      if (axis === 'left') {
        element.scrollLeft = lastLeft = value;
        element.dispatchEvent(xEvent);
      }
    };
  }, {
    "./instances": 18
  }],
  21: [function (require, module, exports) {
    'use strict';

    var d = require('../lib/dom'),
      h = require('../lib/helper'),
      instances = require('./instances'),
      updateGeometry = require('./update-geometry'),
      updateScroll = require('./update-scroll');
    module.exports = function (element) {
      var i = instances.get(element);
      if (!i) {
        return;
      }

      // Recalcuate negative scrollLeft adjustment
      i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;

      // Recalculate rail margins
      d.css(i.scrollbarXRail, 'display', 'block');
      d.css(i.scrollbarYRail, 'display', 'block');
      i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
      i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));

      // Hide scrollbars not to affect scrollWidth and scrollHeight
      d.css(i.scrollbarXRail, 'display', 'none');
      d.css(i.scrollbarYRail, 'display', 'none');
      updateGeometry(element);

      // Update top/left scroll to trigger events
      updateScroll(element, 'top', element.scrollTop);
      updateScroll(element, 'left', element.scrollLeft);
      d.css(i.scrollbarXRail, 'display', '');
      d.css(i.scrollbarYRail, 'display', '');
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]);

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ps": "./node_modules/moment/locale/ar-ps.js",
	"./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
	"./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2V4dHJhLWxpYnNfc3BhcmtsaW5lX3NwYXJrbGluZV9qcy1hc3NldHNfanNfYWRtaW5fanMtYXNzZXRzX2pzX2NvbW1vbl9qcy1hc3NldHNfanNfY3VzLWQ0MWZlNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLENBQUMsVUFBU0EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQztFQUFDLENBQUMsVUFBU0YsQ0FBQyxFQUFDO0lBQUMsS0FBcUMsR0FBQ0csaUNBQU8sQ0FBQyx5RUFBUSxDQUFDLG9DQUFDSCxDQUFDO0FBQUE7QUFBQTtBQUFBLGtHQUFDLEdBQUNLLENBQXVDO0VBQUEsQ0FBQyxFQUFFLFVBQVNHLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsSUFBSUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUM7TUFBQ0MsQ0FBQyxHQUFDLENBQUM7SUFBQ2hDLENBQUMsR0FBQyxTQUFBQSxFQUFBLEVBQVU7TUFBQyxPQUFNO1FBQUNpQyxNQUFNLEVBQUM7VUFBQ0MsSUFBSSxFQUFDLE1BQU07VUFBQ0MsU0FBUyxFQUFDLE1BQU07VUFBQ0MsU0FBUyxFQUFDLE1BQU07VUFBQ0MscUJBQXFCLEVB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QyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUNrQixDQUFDLENBQUM0RyxNQUFNLENBQUNOLElBQUksQ0FBQ1MsSUFBSSxDQUFDLElBQUksRUFBQy9JLENBQUMsRUFBQ1EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDa1EsTUFBTSxHQUFDclEsQ0FBQyxHQUFDUSxDQUFDLENBQUNSLENBQUMsQ0FBQyxFQUFDTSxDQUFDLEdBQUNOLENBQUMsQ0FBQ3NJLEtBQUssQ0FBQyxDQUFDLEVBQUNoSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxJQUFJLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxJQUFJLEdBQUNNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRixDQUFDLEdBQUNYLENBQUMsQ0FBQzBULEdBQUcsQ0FBQ3BMLEtBQUssQ0FBQ3RJLENBQUMsRUFBQ08sQ0FBQyxDQUFDLEVBQUNLLENBQUMsR0FBQ1osQ0FBQyxDQUFDdVQsR0FBRyxDQUFDakwsS0FBSyxDQUFDdEksQ0FBQyxFQUFDTyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDaUosR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFHeEosQ0FBQyxHQUFDVSxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsR0FBQ0gsQ0FBQyxDQUFDaUosR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksQ0FBQ2lLLEdBQUcsR0FBQy9TLENBQUMsRUFBQyxJQUFJLENBQUM0UyxHQUFHLEdBQUMzUyxDQUFDLEVBQUMsSUFBSSxDQUFDMFUsS0FBSyxHQUFDMVUsQ0FBQyxHQUFDRCxDQUFDLEVBQUMsSUFBSSxDQUFDZ1YsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsVUFBVSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzlTLEtBQUssR0FBQ3RDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDaUosR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFHLE1BQU0sR0FBQyxPQUFPLEdBQUNoSixDQUFDLEVBQUMsSUFBSSxDQUFDbUgsTUFBTSxHQUFDLElBQUksQ0FBQ29FLEdBQUcsQ0FBQ2pCLFVBQVUsQ0FBQ3RLLENBQUMsRUFBQ0MsQ0FBQyxFQUFDRixDQUFDLENBQUNpSixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQ2xKLENBQUMsQ0FBQ2lJLE1BQU0sS0FBRyxJQUFJLENBQUNtSSxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNHLFVBQVUsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDSyxTQUFTLEVBQUMsU0FBQUEsVUFBU3BSLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDb0gsTUFBTSxDQUFDa08sVUFBVSxDQUFDL1YsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsQ0FBQztRQUFDLE9BQU9DLENBQUMsS0FBR1AsQ0FBQyxJQUFFLElBQUksQ0FBQzBWLE1BQU0sQ0FBQ25WLENBQUMsQ0FBQyxLQUFHUCxDQUFDLEdBQUMsSUFBSSxDQUFDMFYsTUFBTSxDQUFDblYsQ0FBQyxDQUFDLEdBQUNQLENBQUM7TUFBQSxDQUFDO01BQUNzUixzQkFBc0IsRUFBQyxTQUFBQSx1QkFBQSxFQUFVO1FBQUMsSUFBSXhSLENBQUMsR0FBQyxJQUFJLENBQUM4USxhQUFhO1FBQUMsT0FBTTtVQUFDa0YsUUFBUSxFQUFDaFcsQ0FBQyxDQUFDMFEsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7VUFBQzhFLEtBQUssRUFBQyxJQUFJLENBQUMzRSxNQUFNLENBQUM3USxDQUFDLENBQUMwUSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBQ3VGLE1BQU0sRUFBQ2pXO1FBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3VSLGVBQWUsRUFBQyxTQUFBQSxnQkFBU3ZSLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM2USxhQUFhO1VBQUM1USxDQUFDLEdBQUMsSUFBSSxDQUFDMlYsV0FBVyxDQUFDNVYsQ0FBQyxDQUFDO1VBQUNPLENBQUM7UUFBQyxPQUFPLElBQUksQ0FBQ29WLE1BQU0sQ0FBQzFWLENBQUMsQ0FBQztRQUFDLFFBQU9ELENBQUMsQ0FBQ3lRLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1VBQUUsS0FBSSxHQUFHO1lBQUNsUSxDQUFDLEdBQUMsSUFBSSxDQUFDMFYsV0FBVyxDQUFDalcsQ0FBQyxDQUFDeVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDMVEsQ0FBQyxDQUFDO1lBQUM7VUFBTSxLQUFJLEdBQUc7WUFBQ1EsQ0FBQyxHQUFDLElBQUksQ0FBQzJWLGlCQUFpQixDQUFDblcsQ0FBQyxDQUFDO1lBQUM7VUFBTSxLQUFJLEdBQUc7WUFBQ1EsQ0FBQyxHQUFDLElBQUksQ0FBQzRWLFlBQVksQ0FBQ3BXLENBQUMsQ0FBQztRQUFBO1FBQUMsSUFBSSxDQUFDNlYsV0FBVyxDQUFDNVYsQ0FBQyxDQUFDLEdBQUNPLENBQUMsQ0FBQ21PLEVBQUUsRUFBQyxJQUFJLENBQUNpSCxNQUFNLENBQUNwVixDQUFDLENBQUNtTyxFQUFFLENBQUMsR0FBQzFPLENBQUMsRUFBQyxJQUFJLENBQUM0SCxNQUFNLENBQUNxSyxnQkFBZ0IsQ0FBQ2hTLENBQUMsRUFBQ00sQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDMFYsV0FBVyxFQUFDLFNBQUFBLFlBQVNsVyxDQUFDLEVBQUNFLENBQUMsRUFBQztRQUFDLElBQUlNLENBQUMsR0FBQyxJQUFJLENBQUNxUSxNQUFNLENBQUM3USxDQUFDLENBQUM7VUFBQ1MsQ0FBQyxHQUFDUixDQUFDLENBQUM0UixLQUFLLENBQUMsSUFBSSxDQUFDYixXQUFXLElBQUUsQ0FBQ3hRLENBQUMsR0FBQyxJQUFJLENBQUNtVCxHQUFHLElBQUUsSUFBSSxDQUFDNEIsS0FBSyxDQUFDLENBQUM7VUFBQzdVLENBQUMsR0FBQyxJQUFJLENBQUN3TCxPQUFPLENBQUN4QyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMxSixDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBT0UsQ0FBQyxLQUFHUSxDQUFDLEdBQUMsSUFBSSxDQUFDa1Isa0JBQWtCLENBQUNsUixDQUFDLEVBQUMsSUFBSSxDQUFDd0wsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNyRSxNQUFNLENBQUNtTSxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQ3ZULENBQUMsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDeVEsWUFBWSxHQUFDLENBQUMsRUFBQ3hRLENBQUMsRUFBQ0EsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDeVYsaUJBQWlCLEVBQUMsU0FBQUEsa0JBQVNuVyxDQUFDLEVBQUM7UUFBQyxJQUFJRSxDQUFDLEdBQUMsSUFBSSxDQUFDMlEsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUFDclEsQ0FBQyxHQUFDUCxDQUFDLENBQUM0UixLQUFLLENBQUMsSUFBSSxDQUFDYixXQUFXLElBQUUsQ0FBQzlRLENBQUMsR0FBQyxJQUFJLENBQUN5VCxHQUFHLElBQUUsSUFBSSxDQUFDNEIsS0FBSyxDQUFDLENBQUM7VUFBQzlVLENBQUMsR0FBQyxJQUFJLENBQUN5TCxPQUFPLENBQUN4QyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFBQyxPQUFPMUosQ0FBQyxLQUFHUyxDQUFDLEdBQUMsSUFBSSxDQUFDbVIsa0JBQWtCLENBQUNuUixDQUFDLEVBQUMsSUFBSSxDQUFDeUwsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNyRSxNQUFNLENBQUNtTSxRQUFRLENBQUMsQ0FBQyxFQUFDL1QsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLElBQUksQ0FBQ1gsWUFBWSxHQUFDLEVBQUUsQ0FBQyxFQUFDMVEsQ0FBQyxHQUFDLENBQUMsRUFBQ1AsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLElBQUksQ0FBQ1gsWUFBWSxHQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBQ3pRLENBQUMsRUFBQ0EsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDMlYsWUFBWSxFQUFDLFNBQUFBLGFBQVNwVyxDQUFDLEVBQUM7UUFBQyxJQUFJRSxDQUFDLEdBQUMsSUFBSSxDQUFDMlEsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUFDclEsQ0FBQyxHQUFDUCxDQUFDLENBQUM0UixLQUFLLENBQUMsSUFBSSxDQUFDYixXQUFXLElBQUUsQ0FBQzlRLENBQUMsR0FBQyxJQUFJLENBQUN5VCxHQUFHLElBQUUsSUFBSSxDQUFDNEIsS0FBSyxDQUFDLEdBQUMsSUFBSSxDQUFDckosT0FBTyxDQUFDeEMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFDLENBQUMsQ0FBQztVQUFDakosQ0FBQyxHQUFDUixDQUFDLENBQUM0UixLQUFLLENBQUMsSUFBSSxDQUFDWCxZQUFZLEdBQUMsRUFBRSxDQUFDO1VBQUN4USxDQUFDLEdBQUMsSUFBSSxDQUFDd1EsWUFBWSxHQUFDelEsQ0FBQyxHQUFDLENBQUM7VUFBQ0UsQ0FBQyxHQUFDLElBQUksQ0FBQ3VMLE9BQU8sQ0FBQ3hDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFBQyxPQUFPMUosQ0FBQyxLQUFHVyxDQUFDLEdBQUMsSUFBSSxDQUFDaVIsa0JBQWtCLENBQUNqUixDQUFDLEVBQUMsSUFBSSxDQUFDdUwsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNyRSxNQUFNLENBQUNtTSxRQUFRLENBQUN4VCxDQUFDLEVBQUNDLENBQUMsRUFBQyxJQUFJLENBQUN5TCxPQUFPLENBQUN4QyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUMsQ0FBQyxFQUFDaEosQ0FBQyxHQUFDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUM0SSxNQUFNLEVBQUMsU0FBQUEsT0FBQSxFQUFVO1FBQUMsSUFBSXZKLENBQUMsR0FBQyxJQUFJLENBQUM2USxNQUFNLENBQUNwSSxNQUFNO1VBQUN4SSxDQUFDLEdBQUMsSUFBSSxDQUFDNEgsTUFBTTtVQUFDM0gsQ0FBQztVQUFDTSxDQUFDO1FBQUMsSUFBRyxDQUFDd0IsQ0FBQyxDQUFDNEcsTUFBTSxDQUFDVyxNQUFNLENBQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztRQUFPLEtBQUk3SSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNGLENBQUMsRUFBQ0UsQ0FBQyxFQUFFLEVBQUNNLENBQUMsR0FBQyxJQUFJLENBQUMwVixXQUFXLENBQUNoVyxDQUFDLENBQUMsQ0FBQ2lTLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDeUQsTUFBTSxDQUFDcFYsQ0FBQyxDQUFDbU8sRUFBRSxDQUFDLEdBQUMsR0FBRyxHQUFDek8sQ0FBQyxFQUFDLElBQUksQ0FBQzJWLFdBQVcsQ0FBQyxHQUFHLEdBQUMzVixDQUFDLENBQUMsR0FBQ00sQ0FBQyxDQUFDbU8sRUFBRTtRQUFDLElBQUksQ0FBQ2tDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBRyxJQUFJLEtBQUdyUSxDQUFDLEdBQUMsSUFBSSxDQUFDMlYsaUJBQWlCLENBQUMsQ0FBQyxDQUFDaEUsTUFBTSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUN5RCxNQUFNLENBQUNwVixDQUFDLENBQUNtTyxFQUFFLENBQUMsR0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDa0gsV0FBVyxDQUFDUSxFQUFFLEdBQUM3VixDQUFDLENBQUNtTyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUNrQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUcsSUFBSSxLQUFHclEsQ0FBQyxHQUFDLElBQUksQ0FBQzRWLFlBQVksQ0FBQyxDQUFDLENBQUNqRSxNQUFNLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3lELE1BQU0sQ0FBQ3BWLENBQUMsQ0FBQ21PLEVBQUUsQ0FBQyxHQUFDLElBQUksRUFBQyxJQUFJLENBQUNrSCxXQUFXLENBQUNTLEVBQUUsR0FBQzlWLENBQUMsQ0FBQ21PLEVBQUUsQ0FBQyxFQUFDMU8sQ0FBQyxDQUFDc0osTUFBTSxDQUFDLENBQUM7TUFBQTtJQUFDLENBQUMsQ0FBQyxFQUFDL0ksQ0FBQyxDQUFDRixFQUFFLENBQUNDLFNBQVMsQ0FBQ3VHLEdBQUcsR0FBQzdFLENBQUMsR0FBQ3RCLENBQUMsQ0FBQ0gsQ0FBQyxDQUFDRixFQUFFLENBQUNDLFNBQVMsQ0FBQ29RLEtBQUssRUFBQztNQUFDL04sSUFBSSxFQUFDLEtBQUs7TUFBQzBGLElBQUksRUFBQyxTQUFBQSxLQUFTdEksQ0FBQyxFQUFDRSxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsQ0FBQztVQUFDQyxDQUFDO1FBQUNvQixDQUFDLENBQUMyRyxNQUFNLENBQUNOLElBQUksQ0FBQ1MsSUFBSSxDQUFDLElBQUksRUFBQy9JLENBQUMsRUFBQ0UsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaVYsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsV0FBVyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2hGLE1BQU0sR0FBQzNRLENBQUMsR0FBQ00sQ0FBQyxDQUFDMEYsR0FBRyxDQUFDaEcsQ0FBQyxFQUFDbVQsTUFBTSxDQUFDLEVBQUM1UyxDQUFDLENBQUNpSixHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUcsTUFBTSxLQUFHLElBQUksQ0FBQzFHLEtBQUssR0FBQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztRQUFDLElBQUcvQyxDQUFDLENBQUN1SSxNQUFNLEdBQUMsQ0FBQyxFQUFDLEtBQUk1SCxDQUFDLEdBQUNYLENBQUMsQ0FBQ3VJLE1BQU0sRUFBQzVILENBQUMsRUFBRSxHQUFFRCxDQUFDLElBQUVWLENBQUMsQ0FBQ1csQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDMFYsS0FBSyxHQUFDM1YsQ0FBQyxFQUFDLElBQUksQ0FBQ21RLFVBQVUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDeUYsTUFBTSxHQUFDdlcsQ0FBQyxDQUFDMkosS0FBSyxDQUFDM0osQ0FBQyxDQUFDMFQsR0FBRyxDQUFDLElBQUksQ0FBQzNDLFdBQVcsRUFBQyxJQUFJLENBQUNFLFlBQVksQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ0UsU0FBUyxFQUFDLFNBQUFBLFVBQVNwUixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQ29ILE1BQU0sQ0FBQ2tPLFVBQVUsQ0FBQy9WLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLENBQUM7UUFBQyxPQUFPQyxDQUFDLEtBQUdQLENBQUMsSUFBRSxJQUFJLENBQUMwVixNQUFNLENBQUNuVixDQUFDLENBQUMsS0FBR1AsQ0FBQyxHQUFDLElBQUksQ0FBQzBWLE1BQU0sQ0FBQ25WLENBQUMsQ0FBQyxHQUFDUCxDQUFDO01BQUEsQ0FBQztNQUFDc1Isc0JBQXNCLEVBQUMsU0FBQUEsdUJBQUEsRUFBVTtRQUFDLElBQUl4UixDQUFDLEdBQUMsSUFBSSxDQUFDOFEsYUFBYTtRQUFDLE9BQU07VUFBQ1csTUFBTSxFQUFDLElBQUksQ0FBQ1osTUFBTSxDQUFDN1EsQ0FBQyxDQUFDLEtBQUdFLENBQUM7VUFBQ3NWLEtBQUssRUFBQyxJQUFJLENBQUMzRSxNQUFNLENBQUM3USxDQUFDLENBQUM7VUFBQ3lXLE9BQU8sRUFBQyxJQUFJLENBQUM1RixNQUFNLENBQUM3USxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUN1VyxLQUFLLEdBQUMsR0FBRztVQUFDNUQsS0FBSyxFQUFDLElBQUksQ0FBQ3pHLE9BQU8sQ0FBQ3hDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzFKLENBQUMsR0FBQyxJQUFJLENBQUNrTSxPQUFPLENBQUN4QyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUNqQixNQUFNLENBQUM7VUFBQzFCLE1BQU0sRUFBQy9HO1FBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3VSLGVBQWUsRUFBQyxTQUFBQSxnQkFBU3ZSLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM2USxhQUFhO1VBQUM1USxDQUFDLEdBQUMsSUFBSSxDQUFDd1csV0FBVyxDQUFDelcsQ0FBQyxFQUFDRCxDQUFDLENBQUM7VUFBQ1EsQ0FBQyxHQUFDLElBQUksQ0FBQ3FWLFdBQVcsQ0FBQzVWLENBQUMsQ0FBQztRQUFDLE9BQU8sSUFBSSxDQUFDMlYsTUFBTSxDQUFDcFYsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDcUgsTUFBTSxDQUFDcUssZ0JBQWdCLENBQUMxUixDQUFDLEVBQUNOLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzJWLFdBQVcsQ0FBQzVWLENBQUMsQ0FBQyxHQUFDQyxDQUFDLENBQUN5TyxFQUFFLEVBQUMsSUFBSSxDQUFDaUgsTUFBTSxDQUFDMVYsQ0FBQyxDQUFDeU8sRUFBRSxDQUFDLEdBQUMxTyxDQUFDO01BQUEsQ0FBQztNQUFDeVcsV0FBVyxFQUFDLFNBQUFBLFlBQVMxVyxDQUFDLEVBQUNRLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUNvSCxNQUFNO1VBQUNuSCxDQUFDLEdBQUMsSUFBSSxDQUFDd0wsT0FBTztVQUFDdkwsQ0FBQyxHQUFDLElBQUksQ0FBQzZWLE1BQU07VUFBQzVWLENBQUMsR0FBQ0YsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGFBQWEsQ0FBQztVQUFDN0ksQ0FBQyxHQUFDSCxDQUFDLENBQUNnSixHQUFHLENBQUMsUUFBUSxDQUFDO1VBQUM1SSxDQUFDLEdBQUMsQ0FBQyxHQUFDYixDQUFDLENBQUMwVyxFQUFFO1VBQUM1VixDQUFDLEdBQUMsSUFBSSxDQUFDOFAsTUFBTTtVQUFDN1AsQ0FBQyxHQUFDLElBQUksQ0FBQ3VWLEtBQUs7VUFBQ3RWLENBQUMsR0FBQ0osQ0FBQyxHQUFDLENBQUMsR0FBQ1osQ0FBQyxDQUFDMFcsRUFBRSxJQUFFOVYsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUM7VUFBQ0ssQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1FBQUNELENBQUMsR0FBQ04sQ0FBQyxDQUFDMEgsTUFBTTtRQUFDLEtBQUlySCxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNDLENBQUMsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7VUFBQ0YsQ0FBQyxHQUFDRCxDQUFDLEVBQUNFLENBQUMsR0FBQ0YsQ0FBQyxFQUFDRCxDQUFDLEdBQUMsQ0FBQyxLQUFHRyxDQUFDLEdBQUNGLENBQUMsR0FBQ0gsQ0FBQyxJQUFFQyxDQUFDLENBQUNLLENBQUMsQ0FBQyxHQUFDSixDQUFDLENBQUMsQ0FBQztVQUFDLElBQUdoQixDQUFDLEtBQUdvQixDQUFDLEVBQUMsT0FBT0UsQ0FBQyxHQUFDWixDQUFDLENBQUNnSixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUN0SSxDQUFDLEdBQUNWLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQ2pCLE1BQU0sQ0FBQyxFQUFDakksQ0FBQyxLQUFHYyxDQUFDLEdBQUMsSUFBSSxDQUFDc1Esa0JBQWtCLENBQUN0USxDQUFDLEVBQUNaLENBQUMsQ0FBQyxDQUFDLEVBQUNELENBQUMsQ0FBQ21XLFlBQVksQ0FBQ2pXLENBQUMsRUFBQ0EsQ0FBQyxFQUFDQSxDQUFDLEdBQUNDLENBQUMsRUFBQ00sQ0FBQyxFQUFDQyxDQUFDLEVBQUNqQixDQUFDLEVBQUNvQixDQUFDLENBQUM7VUFBQ0wsQ0FBQyxHQUFDRSxDQUFDO1FBQUE7TUFBQyxDQUFDO01BQUNvSSxNQUFNLEVBQUMsU0FBQUEsT0FBQSxFQUFVO1FBQUMsSUFBSXZKLENBQUMsR0FBQyxJQUFJLENBQUM2SCxNQUFNO1VBQUNySCxDQUFDLEdBQUMsSUFBSSxDQUFDcVEsTUFBTTtVQUFDcFEsQ0FBQyxHQUFDLElBQUksQ0FBQ3lMLE9BQU87VUFBQ3hMLENBQUMsR0FBQyxJQUFJLENBQUM4VixNQUFNO1VBQUM3VixDQUFDLEdBQUNGLENBQUMsQ0FBQ2lKLEdBQUcsQ0FBQyxhQUFhLENBQUM7VUFBQzlJLENBQUM7VUFBQ0MsQ0FBQztRQUFDLElBQUcsQ0FBQ29CLENBQUMsQ0FBQzJHLE1BQU0sQ0FBQ1csTUFBTSxDQUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFBT3BJLENBQUMsSUFBRVgsQ0FBQyxDQUFDNFMsVUFBVSxDQUFDbFMsQ0FBQyxFQUFDQSxDQUFDLEVBQUNULENBQUMsQ0FBQzJKLEtBQUssQ0FBQ2xKLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUNpSixHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUN4SixDQUFDLEVBQUNTLENBQUMsQ0FBQyxDQUFDd1IsTUFBTSxDQUFDLENBQUM7UUFBQyxLQUFJdFIsQ0FBQyxHQUFDTCxDQUFDLENBQUNpSSxNQUFNLEVBQUM1SCxDQUFDLEVBQUUsR0FBRUwsQ0FBQyxDQUFDSyxDQUFDLENBQUMsS0FBR0QsQ0FBQyxHQUFDLElBQUksQ0FBQzhWLFdBQVcsQ0FBQzdWLENBQUMsQ0FBQyxDQUFDc1IsTUFBTSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMwRCxXQUFXLENBQUNoVixDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDK04sRUFBRSxFQUFDLElBQUksQ0FBQ2lILE1BQU0sQ0FBQ2hWLENBQUMsQ0FBQytOLEVBQUUsQ0FBQyxHQUFDOU4sQ0FBQyxDQUFDO1FBQUNiLENBQUMsQ0FBQ3VKLE1BQU0sQ0FBQyxDQUFDO01BQUE7SUFBQyxDQUFDLENBQUMsRUFBQy9JLENBQUMsQ0FBQ0YsRUFBRSxDQUFDQyxTQUFTLENBQUM0RyxHQUFHLEdBQUNqRixDQUFDLEdBQUN2QixDQUFDLENBQUNILENBQUMsQ0FBQ0YsRUFBRSxDQUFDQyxTQUFTLENBQUNvUSxLQUFLLEVBQUM7TUFBQy9OLElBQUksRUFBQyxLQUFLO01BQUMwRixJQUFJLEVBQUMsU0FBQUEsS0FBU3RJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUN3QixDQUFDLENBQUMwRyxNQUFNLENBQUNOLElBQUksQ0FBQ1MsSUFBSSxDQUFDLElBQUksRUFBQy9JLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDbVEsTUFBTSxHQUFDclEsQ0FBQyxDQUFDMEYsR0FBRyxDQUFDakcsQ0FBQyxFQUFDb1QsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDclEsS0FBSyxHQUFDOUMsQ0FBQyxDQUFDd0osR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFHLE1BQU0sR0FBQyxPQUFPLEdBQUNqSixDQUFDLEVBQUMsSUFBSSxDQUFDc1EsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNGLE1BQU0sQ0FBQ3BJLE1BQU0sS0FBRyxJQUFJLENBQUNtSSxRQUFRLEdBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDUSxTQUFTLEVBQUMsU0FBQUEsVUFBQSxFQUFVO1FBQUMsT0FBTyxDQUFDO01BQUEsQ0FBQztNQUFDSSxzQkFBc0IsRUFBQyxTQUFBQSx1QkFBQSxFQUFVO1FBQUMsSUFBSXhSLENBQUMsR0FBQyxDQUFDO1VBQUM2VyxLQUFLLEVBQUMsSUFBSTtVQUFDckIsS0FBSyxFQUFDLElBQUksQ0FBQ3NCLFNBQVMsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxFQUFDO1VBQUNELEtBQUssRUFBQyxLQUFLO1VBQUNyQixLQUFLLEVBQUMsSUFBSSxDQUFDc0IsU0FBUyxDQUN0Z2dDLENBQUM7UUFBQyxDQUFDLEVBQUM7VUFBQ0QsS0FBSyxFQUFDLElBQUk7VUFBQ3JCLEtBQUssRUFBQyxJQUFJLENBQUNzQixTQUFTLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQztRQUFDLE9BQU8sSUFBSSxDQUFDQyxRQUFRLEtBQUc3VyxDQUFDLElBQUVGLENBQUMsQ0FBQzhKLElBQUksQ0FBQztVQUFDK00sS0FBSyxFQUFDLElBQUk7VUFBQ3JCLEtBQUssRUFBQyxJQUFJLENBQUN1QjtRQUFRLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxLQUFHOVcsQ0FBQyxJQUFFRixDQUFDLENBQUM4SixJQUFJLENBQUM7VUFBQytNLEtBQUssRUFBQyxJQUFJO1VBQUNyQixLQUFLLEVBQUMsSUFBSSxDQUFDd0I7UUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNDLFFBQVEsS0FBRy9XLENBQUMsSUFBRUYsQ0FBQyxDQUFDOEosSUFBSSxDQUFDO1VBQUMrTSxLQUFLLEVBQUMsSUFBSTtVQUFDckIsS0FBSyxFQUFDLElBQUksQ0FBQ3lCO1FBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyxRQUFRLEtBQUdoWCxDQUFDLElBQUVGLENBQUMsQ0FBQzhKLElBQUksQ0FBQztVQUFDK00sS0FBSyxFQUFDLElBQUk7VUFBQ3JCLEtBQUssRUFBQyxJQUFJLENBQUMwQjtRQUFRLENBQUMsQ0FBQyxFQUFDbFgsQ0FBQztNQUFBLENBQUM7TUFBQ3VKLE1BQU0sRUFBQyxTQUFBQSxPQUFBLEVBQVU7UUFBQyxJQUFJdkosQ0FBQyxHQUFDLElBQUksQ0FBQzZILE1BQU07VUFBQ3JILENBQUMsR0FBQyxJQUFJLENBQUNxUSxNQUFNO1VBQUNwUSxDQUFDLEdBQUNELENBQUMsQ0FBQ2lJLE1BQU07VUFBQy9ILENBQUMsR0FBQyxJQUFJLENBQUN3TCxPQUFPO1VBQUN2TCxDQUFDLEdBQUMsSUFBSSxDQUFDcVEsV0FBVztVQUFDcFEsQ0FBQyxHQUFDLElBQUksQ0FBQ3NRLFlBQVk7VUFBQ3JRLENBQUMsR0FBQ0gsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFHeEosQ0FBQyxHQUFDRCxDQUFDLENBQUMwVCxHQUFHLENBQUNwTCxLQUFLLENBQUN0SSxDQUFDLEVBQUNPLENBQUMsQ0FBQyxHQUFDRSxDQUFDLENBQUNnSixHQUFHLENBQUMsZUFBZSxDQUFDO1VBQUMzSSxDQUFDLEdBQUNMLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBR3hKLENBQUMsR0FBQ0QsQ0FBQyxDQUFDdVQsR0FBRyxDQUFDakwsS0FBSyxDQUFDdEksQ0FBQyxFQUFDTyxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGVBQWUsQ0FBQztVQUFDMUksQ0FBQyxHQUFDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1FBQUMsSUFBRyxDQUFDTyxDQUFDLENBQUMwRyxNQUFNLENBQUNXLE1BQU0sQ0FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO1FBQU8sSUFBR3JJLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQ2hKLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBRWxKLENBQUMsQ0FBQ2lJLE1BQU0sR0FBQyxDQUFDLElBQUV2SCxDQUFDLEdBQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ1MsQ0FBQyxHQUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNZLENBQUMsR0FBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDYSxDQUFDLEdBQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2MsQ0FBQyxHQUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNlLENBQUMsR0FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDZ0IsQ0FBQyxHQUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHUyxDQUFDLEdBQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ1ksQ0FBQyxHQUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNhLENBQUMsR0FBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDYyxDQUFDLEdBQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2UsQ0FBQyxHQUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJO1VBQUNBLENBQUMsQ0FBQzJXLElBQUksQ0FBQyxVQUFTblgsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7WUFBQyxPQUFPRCxDQUFDLEdBQUNDLENBQUM7VUFBQSxDQUFDLENBQUMsRUFBQ21CLENBQUMsR0FBQ04sQ0FBQyxDQUFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUNhLENBQUMsR0FBQ1AsQ0FBQyxDQUFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUNjLENBQUMsR0FBQ1IsQ0FBQyxDQUFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUNXLENBQUMsR0FBQ0csQ0FBQyxHQUFDRixDQUFDO1VBQUMsSUFBR1YsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFDO1lBQUN6SSxDQUFDLEdBQUNNLENBQUMsR0FBQ3JCLENBQUM7WUFBQyxLQUFJdUIsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDaEIsQ0FBQyxFQUFDZ0IsQ0FBQyxFQUFFLEVBQUNSLENBQUMsS0FBR2YsQ0FBQyxJQUFFTSxDQUFDLENBQUNpQixDQUFDLENBQUMsR0FBQ0wsQ0FBQyxHQUFDRCxDQUFDLEdBQUNULENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBR3pJLENBQUMsR0FBQ1QsQ0FBQyxDQUFDaUIsQ0FBQyxDQUFDLENBQUMsRUFBQ2pCLENBQUMsQ0FBQ2lCLENBQUMsQ0FBQyxHQUFDSCxDQUFDLEdBQUNILENBQUMsR0FBQ1QsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFHbkksQ0FBQyxHQUFDZixDQUFDLENBQUNpQixDQUFDLENBQUMsQ0FBQztZQUFDUCxDQUFDLEdBQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2dCLENBQUMsR0FBQ2hCLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQztVQUFBLENBQUMsTUFBS1EsQ0FBQyxHQUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNlLENBQUMsR0FBQ2YsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUE7UUFBQyxJQUFJLENBQUNxVyxTQUFTLEdBQUMsQ0FBQzFWLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMyVixRQUFRLEdBQUNoVyxDQUFDLEVBQUMsSUFBSSxDQUFDaVcsUUFBUSxHQUFDM1YsQ0FBQyxFQUFDLElBQUksQ0FBQ3dWLFFBQVEsR0FBQzdWLENBQUMsRUFBQyxJQUFJLENBQUM4VixRQUFRLEdBQUN4VixDQUFDLEVBQUNHLENBQUMsR0FBQ2hCLENBQUMsSUFBRUksQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNILENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBRzFJLENBQUMsR0FBQ2YsQ0FBQyxDQUFDZ1UsSUFBSSxDQUFDdlQsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMvSSxDQUFDLElBQUUsQ0FBQyxHQUFDVixDQUFDLENBQUNnVSxJQUFJLENBQUN2VCxDQUFDLENBQUNnSixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQy9ILENBQUMsR0FBQ2hCLENBQUMsSUFBRUksQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNLLENBQUMsR0FBQ0QsQ0FBQyxJQUFFakIsQ0FBQyxDQUFDNFMsVUFBVSxDQUFDLENBQUMxUixDQUFDLEdBQUNMLENBQUMsSUFBRWMsQ0FBQyxHQUFDWCxDQUFDLEVBQUNKLENBQUMsR0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBQ2hKLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDaEosQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQ3lJLE1BQU0sQ0FBQyxDQUFDLEVBQUMzUSxDQUFDLEdBQUNELENBQUMsSUFBRXZCLENBQUMsQ0FBQzRTLFVBQVUsQ0FBQyxDQUFDcFIsQ0FBQyxHQUFDWCxDQUFDLElBQUVjLENBQUMsR0FBQ1gsQ0FBQyxFQUFDSixDQUFDLEdBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUNnSixHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUNoSixDQUFDLENBQUNnSixHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBQ2hKLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUN5SSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUNuUyxDQUFDLENBQUNnVSxRQUFRLENBQUMvVCxDQUFDLENBQUM0UixLQUFLLENBQUMsQ0FBQ3pRLENBQUMsR0FBQ1AsQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUNYLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDdlEsQ0FBQyxHQUFDRixDQUFDLElBQUVPLENBQUMsQ0FBQyxFQUFDMUIsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDalIsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDRixDQUFDLENBQUNnSixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUNoSixDQUFDLENBQUNnSixHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQ3lJLE1BQU0sQ0FBQyxDQUFDLEVBQUNuUyxDQUFDLENBQUMrUyxRQUFRLENBQUM5UyxDQUFDLENBQUM0UixLQUFLLENBQUMsQ0FBQzVRLENBQUMsR0FBQ0osQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNYLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDelEsQ0FBQyxHQUFDUCxDQUFDLElBQUVjLENBQUMsR0FBQ1gsQ0FBQyxDQUFDLEVBQUNmLENBQUMsQ0FBQzRSLEtBQUssQ0FBQ2pSLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ0YsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUN5SSxNQUFNLENBQUMsQ0FBQyxFQUFDblMsQ0FBQyxDQUFDK1MsUUFBUSxDQUFDOVMsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLENBQUM1USxDQUFDLEdBQUNKLENBQUMsSUFBRWMsQ0FBQyxHQUFDWCxDQUFDLENBQUMsRUFBQ2YsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDalIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDWCxDQUFDLENBQUM0UixLQUFLLENBQUMsQ0FBQzVRLENBQUMsR0FBQ0osQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ0YsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUN5SSxNQUFNLENBQUMsQ0FBQyxFQUFDblMsQ0FBQyxDQUFDK1MsUUFBUSxDQUFDOVMsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLENBQUN0USxDQUFDLEdBQUNWLENBQUMsSUFBRWMsQ0FBQyxHQUFDWCxDQUFDLENBQUMsRUFBQ2YsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDalIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDWCxDQUFDLENBQUM0UixLQUFLLENBQUMsQ0FBQ3ZRLENBQUMsR0FBQ1QsQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDeUksTUFBTSxDQUFDLENBQUMsRUFBQ25TLENBQUMsQ0FBQytTLFFBQVEsQ0FBQzlTLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDdFEsQ0FBQyxHQUFDVixDQUFDLElBQUVjLENBQUMsR0FBQ1gsQ0FBQyxDQUFDLEVBQUNmLENBQUMsQ0FBQzRSLEtBQUssQ0FBQ2pSLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ1gsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLENBQUN0USxDQUFDLEdBQUNWLENBQUMsSUFBRWMsQ0FBQyxHQUFDWCxDQUFDLENBQUMsRUFBQ2YsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDalIsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDeUksTUFBTSxDQUFDLENBQUMsRUFBQ25TLENBQUMsQ0FBQytTLFFBQVEsQ0FBQzlTLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDeFEsQ0FBQyxHQUFDUixDQUFDLElBQUVjLENBQUMsR0FBQ1gsQ0FBQyxDQUFDLEVBQUNmLENBQUMsQ0FBQzRSLEtBQUssQ0FBQ2pSLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQ1gsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDLENBQUN4USxDQUFDLEdBQUNSLENBQUMsSUFBRWMsQ0FBQyxHQUFDWCxDQUFDLENBQUMsRUFBQ2YsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDalIsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDRixDQUFDLENBQUNnSixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQ3lJLE1BQU0sQ0FBQyxDQUFDLEVBQUN6UixDQUFDLENBQUNnSixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUdoSSxDQUFDLEdBQUN6QixDQUFDLENBQUNnVSxJQUFJLENBQUN2VCxDQUFDLENBQUNnSixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQzFKLENBQUMsQ0FBQytTLFFBQVEsQ0FBQzlTLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDblIsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFDN0ksQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxHQUFDYyxDQUFDLENBQUMsRUFBQ3pCLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDblIsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFDN0ksQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxFQUFDZixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxHQUFDYyxDQUFDLENBQUMsRUFBQ2hCLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDeUksTUFBTSxDQUFDLENBQUMsRUFBQ25TLENBQUMsQ0FBQytTLFFBQVEsQ0FBQzlTLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDblIsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFDN0ksQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsR0FBQ1UsQ0FBQyxDQUFDLEVBQUN6QixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNYLENBQUMsQ0FBQzRSLEtBQUssQ0FBQyxDQUFDblIsQ0FBQyxDQUFDZ0osR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFDN0ksQ0FBQyxJQUFFYyxDQUFDLEdBQUNYLENBQUMsR0FBQ1UsQ0FBQyxDQUFDLEVBQUN6QixDQUFDLENBQUM0UixLQUFLLENBQUNqUixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQ2dKLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDeUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDblMsQ0FBQyxDQUFDdUosTUFBTSxDQUFDLENBQUM7TUFBQTtJQUFDLENBQUMsQ0FBQyxFQUFDbEgsQ0FBQyxHQUFDMUIsQ0FBQyxDQUFDO01BQUMySCxJQUFJLEVBQUMsU0FBQUEsS0FBU3RJLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQ3FILE1BQU0sR0FBQzdILENBQUMsRUFBQyxJQUFJLENBQUMyTyxFQUFFLEdBQUMxTyxDQUFDLEVBQUMsSUFBSSxDQUFDMkMsSUFBSSxHQUFDMUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2tYLElBQUksR0FBQzVXLENBQUM7TUFBQSxDQUFDO01BQUMyUixNQUFNLEVBQUMsU0FBQUEsT0FBQSxFQUFVO1FBQUMsT0FBTyxJQUFJLENBQUN0SyxNQUFNLENBQUN3UCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSTtNQUFBO0lBQUMsQ0FBQyxDQUFDLEVBQUMvVSxDQUFDLEdBQUMzQixDQUFDLENBQUM7TUFBQzJXLFFBQVEsRUFBQyxpQkFBaUI7TUFBQ2hQLElBQUksRUFBQyxTQUFBQSxLQUFTdEksQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBQ0YsQ0FBQyxFQUFDO1FBQU8sSUFBSSxDQUFDZ0QsS0FBSyxHQUFDaEQsQ0FBQyxFQUFDLElBQUksQ0FBQ2lELE1BQU0sR0FBQ2hELENBQUMsRUFBQyxJQUFJLENBQUM0SCxNQUFNLEdBQUMzSCxDQUFDLEVBQUMsSUFBSSxDQUFDd1MsV0FBVyxHQUFDLElBQUksRUFBQ3hTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBR0EsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ00sQ0FBQyxDQUFDeUssSUFBSSxDQUFDL0ssQ0FBQyxFQUFDLGNBQWMsRUFBQyxJQUFJLENBQUM7TUFBQSxDQUFDO01BQUM2UyxRQUFRLEVBQUMsU0FBQUEsU0FBUy9TLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQ3lULFNBQVMsQ0FBQyxDQUFDLENBQUNuVSxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDLENBQUNDLENBQUMsRUFBQ00sQ0FBQyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUN5VCxTQUFTLEVBQUMsU0FBQUEsVUFBU25VLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDK1csU0FBUyxDQUFDLE9BQU8sRUFBQyxDQUFDdlgsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNvUyxVQUFVLEVBQUMsU0FBQUEsV0FBUzVTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQzZXLFNBQVMsQ0FBQyxRQUFRLEVBQUMsQ0FBQ3ZYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ2tXLFlBQVksRUFBQyxTQUFBQSxhQUFTNVcsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUM0VyxTQUFTLENBQUMsVUFBVSxFQUFDLENBQUN2WCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3FULFFBQVEsRUFBQyxTQUFBQSxTQUFTaFUsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDNlcsU0FBUyxDQUFDLE1BQU0sRUFBQyxDQUFDdlgsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDOFcsVUFBVSxFQUFDLFNBQUFBLFdBQUEsRUFBVTtRQUFDLE9BQU8sSUFBSSxDQUFDdE0sTUFBTTtNQUFBLENBQUM7TUFBQ2tKLGNBQWMsRUFBQyxTQUFBQSxlQUFBLEVBQVU7UUFBQyxPQUFPLElBQUksQ0FBQzFCLFdBQVc7TUFBQSxDQUFDO01BQUNoSCxLQUFLLEVBQUMsU0FBQUEsTUFBQSxFQUFVO1FBQUNvRSxLQUFLLENBQUMsdUJBQXVCLENBQUM7TUFBQSxDQUFDO01BQUMySCxPQUFPLEVBQUMsU0FBQUEsUUFBU3pYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUNPLENBQUMsQ0FBQ1AsQ0FBQyxDQUFDLENBQUNxUCxJQUFJLENBQUN0UCxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUMwWCxtQkFBbUIsRUFBQyxTQUFBQSxvQkFBUzFYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJTyxDQUFDO1FBQUNBLENBQUMsR0FBQyxJQUFJLENBQUM2VyxRQUFRLENBQUM3TixJQUFJLENBQUN4SixDQUFDLENBQUMsRUFBQ1EsQ0FBQyxHQUFDLElBQUksQ0FBQzBRLFdBQVcsR0FBQzFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMwUSxXQUFXLEdBQUMzUSxDQUFDLENBQUNOLENBQUMsQ0FBQyxDQUFDK0MsTUFBTSxDQUFDLENBQUMsRUFBQ3hDLENBQUMsR0FBQyxJQUFJLENBQUM2VyxRQUFRLENBQUM3TixJQUFJLENBQUN6SixDQUFDLENBQUMsRUFBQ1MsQ0FBQyxHQUFDLElBQUksQ0FBQ3dRLFVBQVUsR0FBQ3hRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUN3USxVQUFVLEdBQUN6USxDQUFDLENBQUNOLENBQUMsQ0FBQyxDQUFDOEMsS0FBSyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUN1VSxTQUFTLEVBQUMsU0FBQUEsVUFBU3ZYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDd0MsQ0FBQyxFQUFFO1FBQUMsT0FBT3pDLENBQUMsQ0FBQytJLE9BQU8sQ0FBQzlJLENBQUMsQ0FBQyxFQUFDLElBQUltQyxDQUFDLENBQUMsSUFBSSxFQUFDbkMsQ0FBQyxFQUFDRixDQUFDLEVBQUNDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ29YLFdBQVcsRUFBQyxTQUFBQSxZQUFTclgsQ0FBQyxFQUFDO1FBQUM4UCxLQUFLLENBQUMsNkJBQTZCLENBQUM7TUFBQSxDQUFDO01BQUNvQyxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBU2xTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUM2UCxLQUFLLENBQUMsa0NBQWtDLENBQUM7TUFBQSxDQUFDO01BQUNnRCxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBUzlTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUM2UCxLQUFLLENBQUMsa0NBQWtDLENBQUM7TUFBQSxDQUFDO01BQUNvRCxhQUFhLEVBQUMsU0FBQUEsY0FBU2xULENBQUMsRUFBQztRQUFDOFAsS0FBSyxDQUFDLCtCQUErQixDQUFDO01BQUEsQ0FBQztNQUFDaUcsVUFBVSxFQUFDLFNBQUFBLFdBQVMvVixDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUM0UCxLQUFLLENBQUMsNEJBQTRCLENBQUM7TUFBQSxDQUFDO01BQUN2RyxNQUFNLEVBQUMsU0FBQUEsT0FBQSxFQUFVO1FBQUN1RyxLQUFLLENBQUMsd0JBQXdCLENBQUM7TUFBQTtJQUFDLENBQUMsQ0FBQyxFQUFDdk4sQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDMkIsQ0FBQyxFQUFDO01BQUNnRyxJQUFJLEVBQUMsU0FBQUEsS0FBU3JJLENBQUMsRUFBQ1EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDNEIsQ0FBQyxDQUFDcUcsTUFBTSxDQUFDTixJQUFJLENBQUNTLElBQUksQ0FBQyxJQUFJLEVBQUM5SSxDQUFDLEVBQUNRLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDd0ssTUFBTSxHQUFDbEwsQ0FBQyxDQUFDMEssYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDaEssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHQSxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUN5SyxJQUFJLENBQUN2SyxDQUFDLEVBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxFQUFDRixDQUFDLENBQUMsSUFBSSxDQUFDMEssTUFBTSxDQUFDLENBQUNxRSxHQUFHLENBQUM7VUFBQ29JLE9BQU8sRUFBQyxjQUFjO1VBQUMzVSxLQUFLLEVBQUMvQyxDQUFDO1VBQUNnRCxNQUFNLEVBQUN4QyxDQUFDO1VBQUNtWCxhQUFhLEVBQUM7UUFBSyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxJQUFJLENBQUN2TSxNQUFNLEVBQUN4SyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNnWCxtQkFBbUIsQ0FBQ3pYLENBQUMsRUFBQ1EsQ0FBQyxFQUFDLElBQUksQ0FBQ3lLLE1BQU0sQ0FBQyxFQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDbEksS0FBSyxHQUFDLElBQUksQ0FBQ2lPLFVBQVUsRUFBQyxJQUFJLENBQUMvRixNQUFNLENBQUNqSSxNQUFNLEdBQUMsSUFBSSxDQUFDa08sV0FBVyxFQUFDLElBQUksQ0FBQzBHLFFBQVEsR0FBQ2xYLENBQUMsRUFBQyxJQUFJLENBQUNpVixNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDa0MsUUFBUSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUNDLG9CQUFvQixHQUFDN1gsQ0FBQyxFQUFDTSxDQUFDLENBQUMsSUFBSSxDQUFDMEssTUFBTSxDQUFDLENBQUNxRSxHQUFHLENBQUM7VUFBQ3ZNLEtBQUssRUFBQyxJQUFJLENBQUNpTyxVQUFVO1VBQUNoTyxNQUFNLEVBQUMsSUFBSSxDQUFDa087UUFBVyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUM2RyxXQUFXLEVBQUMsU0FBQUEsWUFBU2hZLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDeUssTUFBTSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQUMsT0FBT25MLENBQUMsS0FBR0UsQ0FBQyxLQUFHTyxDQUFDLENBQUN3WCxXQUFXLEdBQUNqWSxDQUFDLENBQUMsRUFBQ1MsQ0FBQyxDQUFDZ0UsU0FBUyxHQUFDakUsQ0FBQyxLQUFHTixDQUFDLEdBQUMsQ0FBQyxHQUFDTSxDQUFDLEVBQUNQLENBQUMsS0FBR0MsQ0FBQyxLQUFHTyxDQUFDLENBQUN5WCxTQUFTLEdBQUNqWSxDQUFDLENBQUMsRUFBQ1EsQ0FBQztNQUFBLENBQUM7TUFBQ2lMLEtBQUssRUFBQyxTQUFBQSxNQUFBLEVBQVU7UUFBQyxJQUFJMUwsQ0FBQyxHQUFDLElBQUksQ0FBQ2dZLFdBQVcsQ0FBQyxDQUFDO1FBQUNoWSxDQUFDLENBQUNtWSxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUNsSCxVQUFVLEVBQUMsSUFBSSxDQUFDRSxXQUFXLENBQUMsRUFBQyxJQUFJLENBQUN5RSxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDa0MsUUFBUSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUNDLG9CQUFvQixHQUFDN1gsQ0FBQztNQUFBLENBQUM7TUFBQ2tZLFVBQVUsRUFBQyxTQUFBQSxXQUFTcFksQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDcVgsV0FBVyxDQUFDeFgsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztVQUFDRSxDQUFDO1VBQUNDLENBQUM7UUFBQ0YsQ0FBQyxDQUFDMFgsU0FBUyxDQUFDLENBQUMsRUFBQzFYLENBQUMsQ0FBQzJYLE1BQU0sQ0FBQ3JZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLEVBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUM7UUFBQyxLQUFJVyxDQUFDLEdBQUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUNaLENBQUMsQ0FBQ3dJLE1BQU0sRUFBQzdILENBQUMsR0FBQ0MsQ0FBQyxFQUFDRCxDQUFDLEVBQUUsRUFBQ0QsQ0FBQyxDQUFDNFgsTUFBTSxDQUFDdFksQ0FBQyxDQUFDVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLEVBQUNYLENBQUMsQ0FBQ1csQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDO1FBQUNKLENBQUMsS0FBR04sQ0FBQyxJQUFFUyxDQUFDLENBQUM2WCxNQUFNLENBQUMsQ0FBQyxFQUFDL1gsQ0FBQyxLQUFHUCxDQUFDLElBQUVTLENBQUMsQ0FBQzhYLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyxPQUFPLEtBQUd4WSxDQUFDLElBQUUsSUFBSSxDQUFDeVksT0FBTyxLQUFHelksQ0FBQyxJQUFFUyxDQUFDLENBQUNpWSxhQUFhLENBQUMsSUFBSSxDQUFDRixPQUFPLEVBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBRyxJQUFJLENBQUNaLG9CQUFvQixHQUFDL1gsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDNlksV0FBVyxFQUFDLFNBQUFBLFlBQVM3WSxDQUFDLEVBQUNRLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDa1gsV0FBVyxDQUFDclgsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFDQyxDQUFDLENBQUN1WCxTQUFTLENBQUMsQ0FBQyxFQUFDdlgsQ0FBQyxDQUFDZ1ksR0FBRyxDQUFDdFksQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDVCxDQUFDLENBQUMwVyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMrQixPQUFPLEtBQUd4WSxDQUFDLElBQUUsSUFBSSxDQUFDeVksT0FBTyxLQUFHelksQ0FBQyxJQUFFWSxDQUFDLENBQUM4WCxhQUFhLENBQUMsSUFBSSxDQUFDRixPQUFPLEVBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBRyxJQUFJLENBQUNaLG9CQUFvQixHQUFDL1gsQ0FBQyxDQUFDLEVBQUNXLENBQUMsS0FBR1QsQ0FBQyxJQUFFWSxDQUFDLENBQUMwWCxNQUFNLENBQUMsQ0FBQyxFQUFDNVgsQ0FBQyxLQUFHVixDQUFDLElBQUVZLENBQUMsQ0FBQzJYLElBQUksQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDTSxhQUFhLEVBQUMsU0FBQUEsY0FBUy9ZLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQ2tYLFdBQVcsQ0FBQ3BYLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUNDLENBQUMsQ0FBQ3VYLFNBQVMsQ0FBQyxDQUFDLEVBQUN2WCxDQUFDLENBQUN3WCxNQUFNLENBQUNyWSxDQUFDLEVBQUNPLENBQUMsQ0FBQyxFQUFDTSxDQUFDLENBQUNnWSxHQUFHLENBQUM3WSxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRyxDQUFDLENBQUN5WCxNQUFNLENBQUN0WSxDQUFDLEVBQUNPLENBQUMsQ0FBQyxFQUFDTSxDQUFDLENBQUNrWSxTQUFTLENBQUMsQ0FBQyxFQUFDcFksQ0FBQyxLQUFHVixDQUFDLElBQUVZLENBQUMsQ0FBQzBYLE1BQU0sQ0FBQyxDQUFDLEVBQUMzWCxDQUFDLElBQUVDLENBQUMsQ0FBQzJYLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyxPQUFPLEtBQUd4WSxDQUFDLElBQUUsSUFBSSxDQUFDeVksT0FBTyxLQUFHelksQ0FBQyxJQUFFWSxDQUFDLENBQUM4WCxhQUFhLENBQUMsSUFBSSxDQUFDRixPQUFPLEVBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBRyxJQUFJLENBQUNaLG9CQUFvQixHQUFDL1gsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDaVosU0FBUyxFQUFDLFNBQUFBLFVBQVNqWixDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQ3lYLFVBQVUsQ0FBQ3BZLENBQUMsRUFBQyxDQUFDLENBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsQ0FBQ0QsQ0FBQyxHQUFDTyxDQUFDLEVBQUNOLENBQUMsQ0FBQyxFQUFDLENBQUNELENBQUMsR0FBQ08sQ0FBQyxFQUFDTixDQUFDLEdBQUNPLENBQUMsQ0FBQyxFQUFDLENBQUNSLENBQUMsRUFBQ0MsQ0FBQyxHQUFDTyxDQUFDLENBQUMsRUFBQyxDQUFDUixDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDLEVBQUNRLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDMFcsV0FBVyxFQUFDLFNBQUFBLFlBQVNyWCxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQzRWLE1BQU0sQ0FBQzVWLENBQUMsQ0FBQzJPLEVBQUUsQ0FBQyxHQUFDM08sQ0FBQyxFQUFDLElBQUksQ0FBQzhYLFFBQVEsQ0FBQ2hPLElBQUksQ0FBQzlKLENBQUMsQ0FBQzJPLEVBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQytELFdBQVcsR0FBQzFTLENBQUMsQ0FBQzJPLEVBQUUsRUFBQzNPLENBQUMsQ0FBQzJPLEVBQUU7TUFBQSxDQUFDO01BQUN1RCxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBU2xTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQzRYLFFBQVE7VUFBQ3RYLENBQUM7UUFBQyxJQUFJLENBQUNvVixNQUFNLENBQUMzVixDQUFDLENBQUMwTyxFQUFFLENBQUMsR0FBQzFPLENBQUM7UUFBQyxLQUFJTyxDQUFDLEdBQUNOLENBQUMsQ0FBQ3VJLE1BQU0sRUFBQ2pJLENBQUMsRUFBRSxHQUFFTixDQUFDLENBQUNNLENBQUMsQ0FBQyxJQUFFUixDQUFDLEtBQUdFLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUNQLENBQUMsQ0FBQzBPLEVBQUUsQ0FBQztRQUFDLE9BQU8sSUFBSSxDQUFDaUgsTUFBTSxDQUFDNVYsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDaVMsaUJBQWlCLEVBQUMsU0FBQUEsa0JBQVNqUyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM0WCxRQUFRO1VBQUN0WCxDQUFDLEdBQUMsQ0FBQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1FBQUMsS0FBSUQsQ0FBQyxHQUFDVixDQUFDLENBQUN5SSxNQUFNLEVBQUMvSCxDQUFDLEVBQUUsR0FBRUYsQ0FBQyxDQUFDUixDQUFDLENBQUNVLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUMsS0FBSUEsQ0FBQyxHQUFDUixDQUFDLENBQUN1SSxNQUFNLEVBQUMvSCxDQUFDLEVBQUUsR0FBRUQsQ0FBQyxHQUFDUCxDQUFDLENBQUNRLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFHUCxDQUFDLENBQUNtSyxNQUFNLENBQUMzSixDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxJQUFJLENBQUNrVixNQUFNLENBQUNuVixDQUFDLENBQUMsRUFBQ0UsQ0FBQyxHQUFDRCxDQUFDLENBQUM7UUFBQyxLQUFJQSxDQUFDLEdBQUNULENBQUMsQ0FBQ3dJLE1BQU0sRUFBQy9ILENBQUMsRUFBRSxHQUFFUixDQUFDLENBQUNtSyxNQUFNLENBQUMxSixDQUFDLEVBQUMsQ0FBQyxFQUFDVixDQUFDLENBQUNTLENBQUMsQ0FBQyxDQUFDaU8sRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDaUgsTUFBTSxDQUFDM1YsQ0FBQyxDQUFDUyxDQUFDLENBQUMsQ0FBQ2lPLEVBQUUsQ0FBQyxHQUFDMU8sQ0FBQyxDQUFDUyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNvUyxnQkFBZ0IsRUFBQyxTQUFBQSxpQkFBUzlTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQzRYLFFBQVE7VUFBQ3RYLENBQUM7UUFBQyxLQUFJQSxDQUFDLEdBQUNOLENBQUMsQ0FBQ3VJLE1BQU0sRUFBQ2pJLENBQUMsRUFBRSxHQUFFLElBQUdOLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEtBQUdSLENBQUMsRUFBQztVQUFDRSxDQUFDLENBQUNtSyxNQUFNLENBQUM3SixDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQ1AsQ0FBQyxDQUFDME8sRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDaUgsTUFBTSxDQUFDM1YsQ0FBQyxDQUFDME8sRUFBRSxDQUFDLEdBQUMxTyxDQUFDO1VBQUM7UUFBTTtNQUFDLENBQUM7TUFBQ2lULGFBQWEsRUFBQyxTQUFBQSxjQUFTbFQsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQzZYLFFBQVE7VUFBQzVYLENBQUM7UUFBQyxLQUFJQSxDQUFDLEdBQUNELENBQUMsQ0FBQ3dJLE1BQU0sRUFBQ3ZJLENBQUMsRUFBRSxHQUFFLElBQUdELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUdGLENBQUMsRUFBQztVQUFDQyxDQUFDLENBQUNvSyxNQUFNLENBQUNuSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1VBQUM7UUFBSztRQUFDLE9BQU8sSUFBSSxDQUFDMFYsTUFBTSxDQUFDNVYsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDK1YsVUFBVSxFQUFDLFNBQUFBLFdBQVMvVixDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUN3WSxPQUFPLEdBQUN6WSxDQUFDLEVBQUMsSUFBSSxDQUFDMFksT0FBTyxHQUFDelksQ0FBQyxFQUFDLElBQUksQ0FBQ3FKLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDd08sb0JBQW9CO01BQUEsQ0FBQztNQUFDeE8sTUFBTSxFQUFDLFNBQUFBLE9BQUEsRUFBVTtRQUFDLElBQUl2SixDQUFDLEdBQUMsSUFBSSxDQUFDOFgsUUFBUTtVQUFDN1gsQ0FBQyxHQUFDLElBQUksQ0FBQzJWLE1BQU07VUFBQzFWLENBQUMsR0FBQ0YsQ0FBQyxDQUFDeUksTUFBTTtVQUFDakksQ0FBQyxHQUFDLElBQUksQ0FBQ3dYLFdBQVcsQ0FBQyxDQUFDO1VBQUN2WCxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztRQUFDSCxDQUFDLENBQUMyWCxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUNsSCxVQUFVLEVBQUMsSUFBSSxDQUFDRSxXQUFXLENBQUM7UUFBQyxLQUFJeFEsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDVCxDQUFDLEVBQUNTLENBQUMsRUFBRSxFQUFDRixDQUFDLEdBQUNULENBQUMsQ0FBQ1csQ0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQ1QsQ0FBQyxDQUFDUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxHQUFDQyxDQUFDLENBQUNrQyxJQUFJLENBQUMsQ0FBQzJGLEtBQUssQ0FBQyxJQUFJLEVBQUM3SCxDQUFDLENBQUMwVyxJQUFJLENBQUM7UUFBQyxJQUFJLENBQUNTLFFBQVEsS0FBRyxJQUFJLENBQUNqQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDa0MsUUFBUSxHQUFDLEVBQUUsQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUFDLEVBQUN0VixDQUFDLEdBQUM3QixDQUFDLENBQUMyQixDQUFDLEVBQUM7TUFBQ2dHLElBQUksRUFBQyxTQUFBQSxLQUFTckksQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUM7UUFBQzhCLENBQUMsQ0FBQ29HLE1BQU0sQ0FBQ04sSUFBSSxDQUFDUyxJQUFJLENBQUMsSUFBSSxFQUFDOUksQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUdBLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNELENBQUMsQ0FBQ3lLLElBQUksQ0FBQ3hLLENBQUMsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDeUssTUFBTSxHQUFDbEwsQ0FBQyxDQUFDMEssYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDbEssQ0FBQyxDQUFDLElBQUksQ0FBQzBLLE1BQU0sQ0FBQyxDQUFDcUUsR0FBRyxDQUFDO1VBQUNvSSxPQUFPLEVBQUMsY0FBYztVQUFDdUIsUUFBUSxFQUFDLFVBQVU7VUFBQ0MsUUFBUSxFQUFDLFFBQVE7VUFBQ25XLEtBQUssRUFBQy9DLENBQUM7VUFBQ2dELE1BQU0sRUFBQy9DLENBQUM7VUFBQ2taLE1BQU0sRUFBQyxLQUFLO1VBQUNDLE9BQU8sRUFBQyxLQUFLO1VBQUN6QixhQUFhLEVBQUM7UUFBSyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxJQUFJLENBQUN2TSxNQUFNLEVBQUN6SyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNpWCxtQkFBbUIsQ0FBQ3pYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDLElBQUksQ0FBQ2dMLE1BQU0sQ0FBQyxFQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDbEksS0FBSyxHQUFDLElBQUksQ0FBQ2lPLFVBQVUsRUFBQyxJQUFJLENBQUMvRixNQUFNLENBQUNqSSxNQUFNLEdBQUMsSUFBSSxDQUFDa08sV0FBVyxFQUFDelEsQ0FBQyxHQUFDLHdDQUF3QyxHQUFDLElBQUksQ0FBQ3VRLFVBQVUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDRSxXQUFXLEdBQUMsR0FBRyxHQUFDLCtDQUErQyxHQUFDLElBQUksQ0FBQ0YsVUFBVSxHQUFDLFlBQVksR0FBQyxJQUFJLENBQUNFLFdBQVcsR0FBQyxpQkFBaUIsRUFBQyxJQUFJLENBQUNqRyxNQUFNLENBQUNvTyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUM1WSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM2WSxLQUFLLEdBQUMvWSxDQUFDLENBQUMsSUFBSSxDQUFDMEssTUFBTSxDQUFDLENBQUNzTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsU0FBUyxHQUFDLEVBQUU7TUFBQSxDQUFDO01BQUN0QixVQUFVLEVBQUMsU0FBQUEsV0FBU3BZLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLEVBQUU7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztVQUFDQyxDQUFDO1VBQUNDLENBQUM7VUFBQ0MsQ0FBQztRQUFDLEtBQUlBLENBQUMsR0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQ2hCLENBQUMsQ0FBQ3dJLE1BQU0sRUFBQ3ZILENBQUMsR0FBQ0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUUsRUFBQ1AsQ0FBQyxDQUFDTyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUNqQixDQUFDLENBQUNpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUNqQixDQUFDLENBQUNpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPTixDQUFDLEdBQUNELENBQUMsQ0FBQzBKLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMzSixDQUFDLEdBQUNBLENBQUMsS0FBR1IsQ0FBQyxHQUFDLENBQUMsR0FBQ1EsQ0FBQyxFQUFDRyxDQUFDLEdBQUNMLENBQUMsS0FBR04sQ0FBQyxHQUFDLG1CQUFtQixHQUFDLGlCQUFpQixHQUFDUSxDQUFDLEdBQUMsbUJBQW1CLEdBQUNGLENBQUMsR0FBQyxJQUFJLEVBQUNNLENBQUMsR0FBQ0wsQ0FBQyxLQUFHUCxDQUFDLEdBQUMsaUJBQWlCLEdBQUMsY0FBYyxHQUFDTyxDQUFDLEdBQUMsa0JBQWtCLEVBQUNNLENBQUMsR0FBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHQSxDQUFDLENBQUNBLENBQUMsQ0FBQzhILE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDekgsQ0FBQyxHQUFDLHdDQUF3QyxHQUFDLElBQUksQ0FBQ2lRLFVBQVUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDRSxXQUFXLEdBQUMsSUFBSSxHQUFDLGVBQWUsR0FBQ25SLENBQUMsR0FBQyxJQUFJLEdBQUNhLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLG9EQUFvRCxHQUFDLElBQUksQ0FBQ3FRLFdBQVcsR0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDRixVQUFVLEdBQUMsOEJBQThCLEdBQUMsV0FBVyxHQUFDclEsQ0FBQyxHQUFDLEtBQUssR0FBQ0QsQ0FBQyxDQUFDMkosSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsR0FBQ3ZKLENBQUMsR0FBQyxLQUFLLEdBQUMsYUFBYSxFQUFDQyxDQUFDO01BQUEsQ0FBQztNQUFDNlgsV0FBVyxFQUFDLFNBQUFBLFlBQVM3WSxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQztRQUFDLE9BQU9kLENBQUMsSUFBRVEsQ0FBQyxFQUFDRCxDQUFDLElBQUVDLENBQUMsRUFBQ0ksQ0FBQyxHQUFDSCxDQUFDLEtBQUdSLENBQUMsR0FBQyxtQkFBbUIsR0FBQyxpQkFBaUIsR0FBQ1UsQ0FBQyxHQUFDLG1CQUFtQixHQUFDRixDQUFDLEdBQUMsSUFBSSxFQUFDSSxDQUFDLEdBQUNILENBQUMsS0FBR1QsQ0FBQyxHQUFDLGlCQUFpQixHQUFDLGNBQWMsR0FBQ1MsQ0FBQyxHQUFDLGtCQUFrQixFQUFDSSxDQUFDLEdBQUMsdUJBQXVCLEdBQUNmLENBQUMsR0FBQyxJQUFJLEdBQUNhLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLGdDQUFnQyxHQUFDTixDQUFDLEdBQUMsV0FBVyxHQUFDUCxDQUFDLEdBQUMsWUFBWSxHQUFDUSxDQUFDLEdBQUMsQ0FBQyxHQUFDLGFBQWEsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsR0FBQyxlQUFlLEVBQUNNLENBQUM7TUFBQSxDQUFDO01BQUNnWSxhQUFhLEVBQUMsU0FBQUEsY0FBUy9ZLENBQUMsRUFBQ1EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUMsSUFBR1gsQ0FBQyxLQUFHQyxDQUFDLEVBQUMsT0FBTSxFQUFFO1FBQUNBLENBQUMsR0FBQ0QsQ0FBQyxLQUFHLENBQUMsR0FBQ1YsQ0FBQyxDQUFDMFcsRUFBRSxLQUFHaFcsQ0FBQyxHQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsR0FBQ1gsQ0FBQyxDQUFDMFcsRUFBRSxDQUFDLEVBQUMzVixDQUFDLEdBQUNSLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDNVIsQ0FBQyxDQUFDMFosR0FBRyxDQUFDaFosQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQyxFQUFDTyxDQUFDLEdBQUNSLENBQUMsR0FBQ1IsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDNVIsQ0FBQyxDQUFDMlosR0FBRyxDQUFDalosQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQyxFQUFDUSxDQUFDLEdBQUNWLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDNVIsQ0FBQyxDQUFDMFosR0FBRyxDQUFDL1ksQ0FBQyxDQUFDLEdBQUNGLENBQUMsQ0FBQyxFQUFDUyxDQUFDLEdBQUNWLENBQUMsR0FBQ1IsQ0FBQyxDQUFDNFIsS0FBSyxDQUFDNVIsQ0FBQyxDQUFDMlosR0FBRyxDQUFDaFosQ0FBQyxDQUFDLEdBQUNGLENBQUMsQ0FBQztRQUFDLElBQUdNLENBQUMsS0FBR0UsQ0FBQyxJQUFFRCxDQUFDLEtBQUdFLENBQUMsRUFBQztVQUFDLElBQUdQLENBQUMsR0FBQ0QsQ0FBQyxHQUFDVixDQUFDLENBQUMwVyxFQUFFLEVBQUMsT0FBTSxFQUFFO1VBQUMzVixDQUFDLEdBQUNFLENBQUMsR0FBQ1YsQ0FBQyxHQUFDRSxDQUFDLEVBQUNPLENBQUMsR0FBQ0UsQ0FBQyxHQUFDVixDQUFDO1FBQUE7UUFBQyxPQUFPTyxDQUFDLEtBQUdFLENBQUMsSUFBRUQsQ0FBQyxLQUFHRSxDQUFDLElBQUVQLENBQUMsR0FBQ0QsQ0FBQyxHQUFDVixDQUFDLENBQUMwVyxFQUFFLEdBQUMsRUFBRSxJQUFFNVYsQ0FBQyxHQUFDLENBQUNQLENBQUMsR0FBQ0UsQ0FBQyxFQUFDRCxDQUFDLEdBQUNDLENBQUMsRUFBQ0YsQ0FBQyxHQUFDRSxDQUFDLEVBQUNELENBQUMsR0FBQ0MsQ0FBQyxFQUFDTSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDUCxDQUFDLEtBQUdYLENBQUMsR0FBQyxtQkFBbUIsR0FBQyxtQ0FBbUMsR0FBQ1csQ0FBQyxHQUFDLElBQUksRUFBQ1EsQ0FBQyxHQUFDUCxDQUFDLEtBQUdaLENBQUMsR0FBQyxpQkFBaUIsR0FBQyxjQUFjLEdBQUNZLENBQUMsR0FBQyxrQkFBa0IsRUFBQ1EsQ0FBQyxHQUFDLHdDQUF3QyxHQUFDLElBQUksQ0FBQzJQLFVBQVUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDRSxXQUFXLEdBQUMsSUFBSSxHQUFDLGVBQWUsR0FBQ25SLENBQUMsR0FBQyxJQUFJLEdBQUNvQixDQUFDLEdBQUNDLENBQUMsR0FBQyxvREFBb0QsR0FBQyxJQUFJLENBQUM4UCxXQUFXLEdBQUMsV0FBVyxHQUFDLElBQUksQ0FBQ0YsVUFBVSxHQUFDLDhCQUE4QixHQUFDLFdBQVcsR0FBQ3pRLENBQUMsR0FBQyxHQUFHLEdBQUNDLENBQUMsR0FBQyxNQUFNLEdBQUNNLENBQUMsQ0FBQ3VKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxRQUFRLEdBQUMsYUFBYSxFQUFDaEosQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDMlgsU0FBUyxFQUFDLFNBQUFBLFVBQVNqWixDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQ3lYLFVBQVUsQ0FBQ3BZLENBQUMsRUFBQyxDQUFDLENBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsQ0FBQ0QsQ0FBQyxFQUFDQyxDQUFDLEdBQUNPLENBQUMsQ0FBQyxFQUFDLENBQUNSLENBQUMsR0FBQ08sQ0FBQyxFQUFDTixDQUFDLEdBQUNPLENBQUMsQ0FBQyxFQUFDLENBQUNSLENBQUMsR0FBQ08sQ0FBQyxFQUFDTixDQUFDLENBQUMsRUFBQyxDQUFDRCxDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDLEVBQUNRLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDK0ssS0FBSyxFQUFDLFNBQUFBLE1BQUEsRUFBVTtRQUFDLElBQUksQ0FBQzZOLEtBQUssQ0FBQzFKLFNBQVMsR0FBQyxFQUFFO01BQUEsQ0FBQztNQUFDd0gsV0FBVyxFQUFDLFNBQUFBLFlBQVNyWCxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQ0QsQ0FBQyxDQUFDNEMsSUFBSSxDQUFDLENBQUMyRixLQUFLLENBQUMsSUFBSSxFQUFDdkksQ0FBQyxDQUFDb1gsSUFBSSxDQUFDO1FBQUMsT0FBTyxJQUFJLENBQUNxQyxRQUFRLEdBQUMsSUFBSSxDQUFDRixLQUFLLENBQUNELGtCQUFrQixDQUFDLFdBQVcsRUFBQ3JaLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ3laLFNBQVMsSUFBRXpaLENBQUMsRUFBQyxJQUFJLENBQUN5UyxXQUFXLEdBQUMxUyxDQUFDLENBQUMyTyxFQUFFLEVBQUMzTyxDQUFDLENBQUMyTyxFQUFFO01BQUEsQ0FBQztNQUFDdUQsZ0JBQWdCLEVBQUMsU0FBQUEsaUJBQVNsUyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQ00sQ0FBQyxDQUFDLFdBQVcsR0FBQ1IsQ0FBQyxDQUFDO1VBQUNTLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDUixDQUFDLENBQUMyQyxJQUFJLENBQUMsQ0FBQzJGLEtBQUssQ0FBQyxJQUFJLEVBQUN0SSxDQUFDLENBQUNtWCxJQUFJLENBQUM7UUFBQ2xYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzJaLFNBQVMsR0FBQ3BaLENBQUM7TUFBQSxDQUFDO01BQUN3UixpQkFBaUIsRUFBQyxTQUFBQSxrQkFBU2pTLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDTSxDQUFDLENBQUMsV0FBVyxHQUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBQ1MsQ0FBQyxHQUFDLEVBQUU7VUFBQ0MsQ0FBQyxHQUFDVCxDQUFDLENBQUN3SSxNQUFNO1VBQUM5SCxDQUFDO1FBQUMsS0FBSUEsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDRCxDQUFDLEVBQUNDLENBQUMsRUFBRSxFQUFDRixDQUFDLElBQUUsSUFBSSxDQUFDLE9BQU8sR0FBQ1IsQ0FBQyxDQUFDVSxDQUFDLENBQUMsQ0FBQ2lDLElBQUksQ0FBQyxDQUFDMkYsS0FBSyxDQUFDLElBQUksRUFBQ3RJLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUN5VyxJQUFJLENBQUM7UUFBQ2xYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzJaLFNBQVMsR0FBQ3BaLENBQUM7UUFBQyxLQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNYLENBQUMsQ0FBQ3lJLE1BQU0sRUFBQzlILENBQUMsRUFBRSxFQUFDSCxDQUFDLENBQUMsV0FBVyxHQUFDUixDQUFDLENBQUNXLENBQUMsQ0FBQyxDQUFDLENBQUN3TSxNQUFNLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQzJGLGdCQUFnQixFQUFDLFNBQUFBLGlCQUFTOVMsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUNNLENBQUMsQ0FBQyxXQUFXLEdBQUNSLENBQUMsQ0FBQztVQUFDUyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQ1IsQ0FBQyxDQUFDMkMsSUFBSSxDQUFDLENBQUMyRixLQUFLLENBQUMsSUFBSSxFQUFDdEksQ0FBQyxDQUFDbVgsSUFBSSxDQUFDO1FBQUNsWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNvWixrQkFBa0IsQ0FBQyxVQUFVLEVBQUM3WSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUN5UyxhQUFhLEVBQUMsU0FBQUEsY0FBU2xULENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQ08sQ0FBQyxDQUFDLFdBQVcsR0FBQ1IsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDdVosS0FBSyxDQUFDTyxXQUFXLENBQUM3WixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUM4VixVQUFVLEVBQUMsU0FBQUEsV0FBUy9WLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJTSxDQUFDLEdBQUNSLENBQUMsQ0FBQzJPLEVBQUUsQ0FBQytCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPbFEsQ0FBQztNQUFBLENBQUM7TUFBQytJLE1BQU0sRUFBQyxTQUFBQSxPQUFBLEVBQVU7UUFBQyxJQUFJLENBQUNrUSxRQUFRLEtBQUcsSUFBSSxDQUFDRixLQUFLLENBQUMxSixTQUFTLEdBQUMsSUFBSSxDQUFDNkosU0FBUyxFQUFDLElBQUksQ0FBQ0QsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDO01BQUE7SUFBQyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7QUFBQSxDQUFDLEVBQUVNLFFBQVEsRUFBQ0MsSUFBSSxDQUFDOzs7Ozs7Ozs7OztBQ0gxbFU7QUFDQUMsQ0FBQyxDQUFDM1osRUFBRSxDQUFDNFosYUFBYSxHQUFHLFVBQVVDLFFBQVEsRUFBRTtFQUNyQyxJQUFJQyxJQUFJLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQzFCOztFQUVBLElBQUlDLGtCQUFrQixHQUFHLE1BQU07RUFDL0IsSUFBS0MsT0FBTyxDQUFDN1EsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGNBQWMsRUFBRztJQUNqRDRRLGtCQUFrQixHQUFHLGNBQWM7RUFDdkM7RUFDQUgsUUFBUSxDQUFDSyxXQUFXLEdBQUdGLGtCQUFrQjtFQUV6QyxJQUFJckssUUFBUSxHQUFHO0lBQ1h3SyxLQUFLLEVBQUUsSUFBSTtJQUFFO0lBQ2JDLE1BQU0sRUFBRSxZQUFZO0lBQUU7SUFDdEJDLE1BQU0sRUFBRSxPQUFPO0lBQUU7SUFDakJDLFFBQVEsRUFBRSxPQUFPO0lBQUU7SUFDbkJKLFdBQVcsRUFBRUYsa0JBQWtCO0lBQUU7SUFDakNPLFlBQVksRUFBRSxPQUFPO0lBQUU7SUFDdkJDLGVBQWUsRUFBRSxJQUFJO0lBQUU7SUFDdkJDLGNBQWMsRUFBRSxJQUFJO0lBQUU7SUFDdEJDLFdBQVcsRUFBRSxLQUFLLENBQUU7RUFDeEIsQ0FBQztFQUNEYixRQUFRLEdBQUdGLENBQUMsQ0FBQ3RSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXNILFFBQVEsRUFBRWtLLFFBQVEsQ0FBQztFQUMzQztFQUNBLElBQUlELGFBQWEsR0FBRztJQUNoQjtJQUNBZSxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQSxFQUFZO01BQzNCZixhQUFhLENBQUNnQixXQUFXLENBQUMsQ0FBQztNQUMzQmhCLGFBQWEsQ0FBQ2lCLGlCQUFpQixDQUFDLENBQUM7TUFDakNqQixhQUFhLENBQUNrQixxQkFBcUIsQ0FBQyxDQUFDO01BQ3JDbEIsYUFBYSxDQUFDbUIsaUJBQWlCLENBQUMsQ0FBQztNQUNqQ25CLGFBQWEsQ0FBQ29CLGtCQUFrQixDQUFDLENBQUM7TUFDbENwQixhQUFhLENBQUNxQixxQkFBcUIsQ0FBQyxDQUFDO01BQ3JDckIsYUFBYSxDQUFDc0IsaUJBQWlCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0M7SUFDRjtJQUNBO0lBQ0FOLFdBQVcsRUFBRSxTQUFBQSxZQUFBLEVBQVk7TUFDckIsSUFBSU8sU0FBUyxHQUFHdEIsUUFBUSxDQUFDTSxLQUFLO01BQzlCLFFBQVFOLFFBQVEsQ0FBQ08sTUFBTTtRQUN2QixLQUFLLFVBQVU7VUFDWCxJQUFJZSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ25CeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztZQUNwQ0osQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUN4QyxDQUFDLE1BQ0k7WUFDRHpCLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztZQUN6Q0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUNqQztVQUNBO1FBRUo7TUFDQTtJQUNKLENBQUM7SUFBRTtJQUNIO0lBQ0E7SUFDQVAsaUJBQWlCLEVBQUUsU0FBQUEsa0JBQUEsRUFBWTtNQUUzQixRQUFRaEIsUUFBUSxDQUFDTyxNQUFNO1FBQ3ZCLEtBQUssWUFBWTtVQUNiVCxDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7VUFDL0M7UUFDSixLQUFLLFVBQVU7VUFDWEosQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1VBQzdDSixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzBCLGdCQUFnQixDQUFDLENBQUUsQ0FBQyxDQUFDO1VBQzFDO1FBQ0o7TUFDQTtJQUNKLENBQUM7SUFDQztJQUNGO0lBQ0E7SUFDQVAscUJBQXFCLEVBQUUsU0FBQUEsc0JBQUEsRUFBWTtNQUMvQjtNQUNBLFNBQVNRLFNBQVNBLENBQUEsRUFBRztRQUNqQixJQUFJQyxHQUFHLEdBQUcxQixRQUFRLENBQUNRLE1BQU07UUFDekIsSUFBSWtCLEdBQUcsSUFBSUMsU0FBUyxJQUFJRCxHQUFHLElBQUksRUFBRSxFQUFFO1VBQy9CNUIsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxHQUFHLHFDQUFxQyxDQUFDLENBQUNDLElBQUksQ0FBQyxhQUFhLEVBQUV3QixHQUFHLENBQUM7UUFDbEYsQ0FBQyxNQUNJO1VBQ0Q1QixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLEdBQUcscUNBQXFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDdEY7TUFDSjtNQUFDO01BQ0R1QixTQUFTLENBQUMsQ0FBQztNQUNYO01BQ0EsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO1FBQ25CLElBQUlDLEdBQUcsR0FBRzdCLFFBQVEsQ0FBQ1MsUUFBUTtRQUMzQixJQUFJb0IsR0FBRyxJQUFJRixTQUFTLElBQUlFLEdBQUcsSUFBSSxFQUFFLEVBQUU7VUFDL0IvQixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLEdBQUcsMkJBQTJCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRTJCLEdBQUcsQ0FBQztVQUN0RS9CLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRTJCLEdBQUcsQ0FBQztVQUNyRC9CLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFMkIsR0FBRyxDQUFDO1FBQzVDLENBQUMsTUFDSTtVQUNEL0IsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxHQUFHLDJCQUEyQixDQUFDLENBQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO1VBQ3pFSixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO1VBQzFESixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7UUFDaEQ7TUFDSjtNQUFDO01BQ0QwQixXQUFXLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0M7SUFDRjtJQUNBO0lBQ0FWLGlCQUFpQixFQUFFLFNBQUFBLGtCQUFBLEVBQVk7TUFDM0IsUUFBUWxCLFFBQVEsQ0FBQ0ssV0FBVztRQUN4QjtRQUNBO1FBQ0E7UUFDSixLQUFLLE1BQU07VUFDUFAsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7VUFDOUM7VUFDQTtVQUNBO1VBQ0EsSUFBSTRCLGNBQWMsR0FBRyxTQUFBQSxlQUFBLEVBQVk7WUFDN0IsSUFBSWpaLEtBQUssR0FBSWdNLE1BQU0sQ0FBQzFELFVBQVUsR0FBRyxDQUFDLEdBQUkwRCxNQUFNLENBQUMxRCxVQUFVLEdBQUcsSUFBSSxDQUFDNFEsTUFBTSxDQUFDbFosS0FBSztZQUMzRSxJQUFJQSxLQUFLLEdBQUcsSUFBSSxFQUFFO2NBQ2RpWCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7Y0FDM0RKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Y0FDM0M1QixPQUFPLENBQUM2QixHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMvQyxDQUFDLE1BQ0k7Y0FDRG5DLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQztjQUNuREosQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDb0MsV0FBVyxDQUFDLGNBQWMsQ0FBQztjQUM5QzlCLE9BQU8sQ0FBQzZCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1lBQ3ZDO1lBQ0E7VUFDSixDQUFDO1VBQ0RuQyxDQUFDLENBQUNqTCxNQUFNLENBQUMsQ0FBQ3NOLEtBQUssQ0FBQ0wsY0FBYyxDQUFDO1VBQy9CaEMsQ0FBQyxDQUFDakwsTUFBTSxDQUFDLENBQUN1TixFQUFFLENBQUMsUUFBUSxFQUFFTixjQUFjLENBQUM7VUFDdEM7VUFDQTtVQUNBO1VBQ0FoQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3NDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtZQUN6Q3RDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDOUMsSUFBSXZDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtjQUM3Q3hDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUN4Q3pCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztjQUMzREUsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7WUFDL0MsQ0FBQyxNQUNJO2NBQ0RuQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDeEN6QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7Y0FDbkRFLE9BQU8sQ0FBQzZCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1lBQ3ZDO1VBQ0osQ0FBQyxDQUFDO1VBQ0Y7UUFDQTtRQUNBO1FBQ0E7UUFDSixLQUFLLGNBQWM7VUFDZm5DLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO1VBQ3REO1VBQ0E7VUFDQTtVQUNBSixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3NDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtZQUN6Q3RDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDOUMsSUFBSXZDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtjQUM3Q3hDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUN4Q3pCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQztjQUNuREUsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7WUFDdkMsQ0FBQyxNQUNJO2NBQ0RuQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDeEN6QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7Y0FDM0RFLE9BQU8sQ0FBQzZCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO1lBQy9DO1VBQ0osQ0FBQyxDQUFDO1VBQ0Y7UUFDQTtRQUNBO1FBQ0E7UUFDSixLQUFLLFNBQVM7VUFDVm5DLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO1VBQ2pEO1VBQ0E7VUFDQTtVQUNBLElBQUk0QixjQUFjLEdBQUcsU0FBQUEsZUFBQSxFQUFZO1lBQzdCLElBQUlqWixLQUFLLEdBQUlnTSxNQUFNLENBQUMxRCxVQUFVLEdBQUcsQ0FBQyxHQUFJMEQsTUFBTSxDQUFDMUQsVUFBVSxHQUFHLElBQUksQ0FBQzRRLE1BQU0sQ0FBQ2xaLEtBQUs7WUFDM0UsSUFBSUEsS0FBSyxHQUFHLElBQUksRUFBRTtjQUNkaVgsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2NBQzNESixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNrQyxRQUFRLENBQUMsY0FBYyxDQUFDO2NBQzNDNUIsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7WUFDL0MsQ0FBQyxNQUNJO2NBQ0RuQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7Y0FDdERKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ29DLFdBQVcsQ0FBQyxjQUFjLENBQUM7Y0FDOUM5QixPQUFPLENBQUM2QixHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztZQUMxQztVQUNKLENBQUM7VUFDRG5DLENBQUMsQ0FBQ2pMLE1BQU0sQ0FBQyxDQUFDc04sS0FBSyxDQUFDTCxjQUFjLENBQUM7VUFDL0JoQyxDQUFDLENBQUNqTCxNQUFNLENBQUMsQ0FBQ3VOLEVBQUUsQ0FBQyxRQUFRLEVBQUVOLGNBQWMsQ0FBQztVQUN0QztVQUNBO1VBQ0E7VUFDQWhDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1lBQ3pDdEMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDdUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUM5QyxJQUFJdkMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDd0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2NBQzdDeEMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ3hDekIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2NBQzNERSxPQUFPLENBQUM2QixHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMvQyxDQUFDLE1BQ0k7Y0FDRG5DLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUN4Q3pCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQztjQUN0REUsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7WUFDMUM7VUFDSixDQUFDLENBQUM7VUFDRjtRQUNBO1FBQ0E7UUFDQTtRQUNKLEtBQUssU0FBUztVQUNWbkMsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7VUFDakQsSUFBSTRCLGNBQWMsR0FBRyxTQUFBQSxlQUFBLEVBQVk7WUFDN0IsSUFBSWpaLEtBQUssR0FBSWdNLE1BQU0sQ0FBQzFELFVBQVUsR0FBRyxDQUFDLEdBQUkwRCxNQUFNLENBQUMxRCxVQUFVLEdBQUcsSUFBSSxDQUFDNFEsTUFBTSxDQUFDbFosS0FBSztZQUMzRSxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2NBQ2JpWCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7Y0FDM0RKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDL0MsQ0FBQyxNQUNJO2NBQ0RsQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7Y0FDdERKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ29DLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDbEQ7VUFDSixDQUFDO1VBQ0RwQyxDQUFDLENBQUNqTCxNQUFNLENBQUMsQ0FBQ3NOLEtBQUssQ0FBQ0wsY0FBYyxDQUFDO1VBQy9CaEMsQ0FBQyxDQUFDakwsTUFBTSxDQUFDLENBQUN1TixFQUFFLENBQUMsUUFBUSxFQUFFTixjQUFjLENBQUM7VUFDdEM7VUFDQTtVQUNBO1VBQ0FoQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3NDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtZQUN6Q3RDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDOUMsSUFBSXZDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtjQUM3Q3hDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUN4Q3pCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixFQUFDLGNBQWMsQ0FBQztZQUM5RCxDQUFDLE1BQ0k7Y0FDREosQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ3hDekIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUMsU0FBUyxDQUFDO1lBQ3pEO1VBQ0osQ0FBQyxDQUFDO1VBQ0Y7UUFDSjtNQUNBO0lBQ0osQ0FBQztJQUNDO0lBQ0Y7SUFDQTtJQUNBaUIsa0JBQWtCLEVBQUUsU0FBQUEsbUJBQUEsRUFBWTtNQUM1QjtNQUNBLFNBQVNvQixZQUFZQSxDQUFBLEVBQUc7UUFDcEIsSUFBSUMsR0FBRyxHQUFHeEMsUUFBUSxDQUFDVSxZQUFZO1FBQy9CLElBQUk4QixHQUFHLElBQUliLFNBQVMsSUFBSWEsR0FBRyxJQUFJLEVBQUUsRUFBRTtVQUMvQjFDLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUVzQyxHQUFHLENBQUM7UUFDaEUsQ0FBQyxNQUNJO1VBQ0QxQyxDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQztRQUNwRTtNQUNKO01BQUM7TUFDRHFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDQztJQUNGO0lBQ0E7SUFDQW5CLHFCQUFxQixFQUFFLFNBQUFBLHNCQUFBLEVBQVk7TUFDL0IsSUFBSXFCLGVBQWUsR0FBR3pDLFFBQVEsQ0FBQ1csZUFBZTtNQUM5QyxJQUFJK0IsY0FBYyxHQUFHMUMsUUFBUSxDQUFDWSxjQUFjO01BQzVDLFFBQVFaLFFBQVEsQ0FBQ08sTUFBTTtRQUN2QixLQUFLLFVBQVU7VUFDWCxJQUFJa0MsZUFBZSxJQUFJLElBQUksRUFBRTtZQUN6QjNDLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDO1lBQ3BESixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDOUMsQ0FBQyxNQUNJO1lBQ0R6QixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFVBQVUsQ0FBQztZQUN2REosQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQzlDO1VBQ0EsSUFBSW1CLGNBQWMsSUFBSSxJQUFJLEVBQUU7WUFDeEI1QyxDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQztZQUNuREosQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQzdDLENBQUMsTUFDSTtZQUNEekIsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUM7WUFDdERKLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUM3QztVQUNBO1FBQ0o7TUFDQTtJQUNKLENBQUM7SUFDQztJQUNGO0lBQ0E7SUFDQUYsaUJBQWlCLEVBQUUsU0FBQUEsa0JBQUEsRUFBWTtNQUMzQixJQUFJc0IsV0FBVyxHQUFHM0MsUUFBUSxDQUFDYSxXQUFXO01BQ3RDLFFBQVFiLFFBQVEsQ0FBQ08sTUFBTTtRQUN2QixLQUFLLFVBQVU7VUFDWCxJQUFJb0MsV0FBVyxJQUFJLElBQUksRUFBRTtZQUNyQjdDLENBQUMsQ0FBQyxHQUFHLEdBQUdHLElBQUksQ0FBQyxDQUFDQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDO1lBQ2hESixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUN5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQzFDLENBQUMsTUFDSTtZQUNEekIsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUM7WUFDL0NKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDMUM7VUFDQTtRQUNKLEtBQUssWUFBWTtVQUNiLElBQUlvQixXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3JCN0MsQ0FBQyxDQUFDLEdBQUcsR0FBR0csSUFBSSxDQUFDLENBQUNDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUM7WUFDaERKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDMUMsQ0FBQyxNQUNJO1lBQ0R6QixDQUFDLENBQUMsR0FBRyxHQUFHRyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQztZQUMvQ0osQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUMxQztVQUNBO1FBQ0o7TUFDQTtJQUNKO0VBQ0YsQ0FBQztFQUNIeEIsYUFBYSxDQUFDZSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQWhCLENBQUMsQ0FBQyxZQUFZO0VBQ1YsSUFBSThDLFFBQVEsR0FBRzlDLENBQUMsQ0FBQyxPQUFPLENBQUM7RUFDekJBLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ2pELElBQUlTLElBQUksR0FBRy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxJQUFJQyxHQUFHLEdBQUdsRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNnRCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25ELElBQUkxTCxFQUFFLEdBQUdzTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckMsSUFBSStDLE1BQU0sR0FBR25ELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRSxJQUFJSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7TUFDNUJ4QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1QyxXQUFXLENBQUMsUUFBUSxDQUFDO01BQzdCdkMsQ0FBQyxDQUFDLDBCQUEwQixHQUFHdEwsRUFBRSxDQUFDLENBQUMwTyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDLE1BQ0k7TUFDRHBELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDN0IsSUFBSXZDLENBQUMsQ0FBQywwQkFBMEIsR0FBR3RMLEVBQUUsQ0FBQyxDQUFDbEcsTUFBTSxFQUFFO1FBQzNDd1IsQ0FBQyxDQUFDLDBCQUEwQixHQUFHdEwsRUFBRSxDQUFDLENBQUMwTixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUNpQixJQUFJLENBQUMsQ0FBQztNQUN0RSxDQUFDLE1BQ0k7UUFDRCxJQUFJQyxHQUFHLEdBQUdDLFdBQVcsQ0FBQyxpREFBaUQsQ0FBQztRQUN4RUQsR0FBRyxJQUFJRSxRQUFRLENBQUMsMkJBQTJCLENBQUM7UUFDNUMsSUFBSW5PLElBQUksR0FBRyxzQ0FBc0MsR0FBR1gsRUFBRSxHQUFHLGtCQUFrQixHQUFHQSxFQUFFLEdBQUcsSUFBSTtRQUN2RlcsSUFBSSxJQUFJLG1DQUFtQyxHQUFHNk4sR0FBRyxHQUFHLGtCQUFrQixHQUFHeE8sRUFBRSxHQUFHLHdCQUF3QixHQUFHeU8sTUFBTSxHQUFHLDhCQUE4QixHQUFHSixJQUFJLEdBQUcsc0VBQXNFLEdBQUdyTyxFQUFFLEdBQUcsb0RBQW9ELEdBQUdBLEVBQUUsR0FBRyxxQkFBcUI7UUFDelRXLElBQUksSUFBSSwrQ0FBK0MsR0FBR2lPLEdBQUcsR0FBRyxhQUFhO1FBQzdFak8sSUFBSSxJQUFJLDREQUE0RCxHQUFHWCxFQUFFLEdBQUcsMERBQTBEO1FBQ3RJVyxJQUFJLElBQUksUUFBUTtRQUNoQjJLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzlILE1BQU0sQ0FBQzdDLElBQUksQ0FBQztNQUNuQztJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBQ0YySyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDd0MsRUFBRSxDQUFDLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQ2pGLElBQUlrTyxFQUFFLEdBQUdzTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckNKLENBQUMsQ0FBQywwQkFBMEIsR0FBR3RMLEVBQUUsQ0FBQyxDQUFDME8sSUFBSSxDQUFDLENBQUM7SUFDekNwRCxDQUFDLENBQUMsNkNBQTZDLEdBQUd0TCxFQUFFLENBQUMsQ0FBQzBOLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDL0UsQ0FBQyxDQUFDO0VBQ0ZwQyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDd0MsRUFBRSxDQUFDLE9BQU8sRUFBRSx5RkFBeUYsRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQzVILElBQUlrTyxFQUFFLEdBQUdzTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckMsSUFBSSxDQUFDSixDQUFDLENBQUMsMEJBQTBCLEdBQUd0TCxFQUFFLENBQUMsQ0FBQzhOLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUMzRHhDLENBQUMsQ0FBQywwQkFBMEIsR0FBR3RMLEVBQUUsQ0FBQyxDQUFDd04sUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUM1RCxDQUFDLE1BQ0k7TUFDRGxDLENBQUMsQ0FBQywwQkFBMEIsR0FBR3RMLEVBQUUsQ0FBQyxDQUFDME4sV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUMvRDtFQUNKLENBQUMsQ0FBQztFQUNGcEMsQ0FBQyxDQUFDRixRQUFRLENBQUMsQ0FBQ3dDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsNkNBQTZDLEVBQUUsVUFBVTliLENBQUMsRUFBRTtJQUNuRixJQUFJQSxDQUFDLENBQUNpZCxPQUFPLElBQUksRUFBRSxFQUFFO01BQ2pCLElBQUkvTyxFQUFFLEdBQUdzTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxjQUFjLENBQUM7TUFDckMsSUFBSWtELEdBQUcsR0FBR3RELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzBELEdBQUcsQ0FBQyxDQUFDO01BQ3ZCSixHQUFHLEdBQUdFLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDO01BQ25CdEQsQ0FBQyxDQUFDLDBCQUEwQixHQUFHdEwsRUFBRSxHQUFHLHdCQUF3QixDQUFDLENBQUN3RCxNQUFNLENBQUNvTCxHQUFHLENBQUM7TUFDekV0RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMwRCxHQUFHLENBQUMsRUFBRSxDQUFDO01BQ2YxRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRCxLQUFLLENBQUMsQ0FBQztJQUNuQjtJQUNBM0QsQ0FBQyxDQUFDLDBCQUEwQixHQUFHdEwsRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDZ04sZ0JBQWdCLENBQUM7TUFDaEVrQyxlQUFlLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBQ0Y1RCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNzQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVU5YixDQUFDLEVBQUU7SUFDeEN3WixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNrQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3hDbEMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDb0MsV0FBVyxDQUFDLFdBQVcsQ0FBQztFQUMvQyxDQUFDLENBQUM7RUFDRnBDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQ2hEd1osQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDa0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUN4Q2xDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ29DLFdBQVcsQ0FBQyxXQUFXLENBQUM7RUFDL0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsU0FBU21CLFdBQVdBLENBQUNELEdBQUcsRUFBRTtFQUN0QixJQUFJL2MsQ0FBQyxHQUFHLElBQUlzZCxJQUFJLENBQUMsQ0FBQztFQUNsQixJQUFJbGQsQ0FBQyxHQUFHSixDQUFDLENBQUN1ZCxRQUFRLENBQUMsQ0FBQztFQUNwQixJQUFJOWMsQ0FBQyxHQUFHVCxDQUFDLENBQUN3ZCxVQUFVLENBQUMsQ0FBQztFQUN0QixPQUFPLG1GQUFtRixHQUFHVCxHQUFHLEdBQUcscUNBQXFDLEdBQUczYyxDQUFDLEdBQUcsR0FBRyxHQUFHSyxDQUFDLEdBQUcsYUFBYTtBQUMxSztBQUVBLFNBQVN3YyxRQUFRQSxDQUFDRixHQUFHLEVBQUU7RUFDbkIsSUFBSS9jLENBQUMsR0FBRyxJQUFJc2QsSUFBSSxDQUFDLENBQUM7RUFDbEIsSUFBSWxkLENBQUMsR0FBR0osQ0FBQyxDQUFDdWQsUUFBUSxDQUFDLENBQUM7RUFDcEIsSUFBSTljLENBQUMsR0FBR1QsQ0FBQyxDQUFDd2QsVUFBVSxDQUFDLENBQUM7RUFDdEIsT0FBTyxvRkFBb0YsR0FBR1QsR0FBRyxHQUFHLHlDQUF5QyxHQUFHM2MsQ0FBQyxHQUFHLEdBQUcsR0FBR0ssQ0FBQyxHQUFHLGFBQWE7QUFDL0s7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RhQWdaLENBQUMsQ0FBQyxZQUFXO0VBQ1QsWUFBWTs7RUFFWixJQUFLQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUN4UixNQUFNLEVBQUc7SUFDNUJ3UixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNnRSxvQkFBb0IsQ0FBQztNQUNuQ0Msb0JBQW9CLEVBQUUsV0FBVztNQUNqQ0MsaUJBQWlCLEVBQUUsWUFBWTtNQUMvQkMsdUJBQXVCLEVBQUUsT0FBTztNQUNoQ0MsWUFBWSxFQUFFLEtBQUs7TUFDbkJDLGdCQUFnQixFQUFFLEtBQUs7TUFDdkJDLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2RGO0FBQ0EsSUFBTXRFLENBQUMsR0FBR3VFLG1CQUFPLENBQUMsb0RBQVEsQ0FBQzs7QUFFM0I7QUFDQUMscUJBQU0sQ0FBQ3hFLENBQUMsR0FBR3dFLHFCQUFNLENBQUNwZSxNQUFNLEdBQUdBLE1BQU0sR0FBRzRaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckN1RSxtQkFBTyxDQUFDLDhIQUFtQyxDQUFDO0FBQzVDQSxtQkFBTyxDQUFDLDJGQUFxQixDQUFDO0FBQzlCQSxtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDdEJBLG1CQUFPLENBQUMsMEdBQXdCLENBQUM7QUFFakNBLG1CQUFPLENBQUMsbUVBQXdCLENBQUM7QUFFTDtBQUNJO0FBRWhDdkUsQ0FBQyxDQUFDLFlBQVk7RUFFVkEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDMkUsT0FBTyxDQUFDLENBQUM7RUFDekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBM0UsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDNEUsS0FBSyxDQUNwQixZQUFZO0lBQ1I1RSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxhQUFhLENBQUM7RUFDL0MsQ0FBQyxFQUNELFlBQVk7SUFDUmxDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDb0MsV0FBVyxDQUFDLGFBQWEsQ0FBQztFQUNsRCxDQUNKLENBQUM7RUFDRDtFQUNBcEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ3RDdEMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDdUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUM5Q3ZDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDdUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztFQUM5QyxDQUFDLENBQUM7RUFDRnZDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ3NDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNuQ3RDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDakN2QyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUN1QyxXQUFXLENBQUMsdUJBQXVCLENBQUM7SUFDckR2QyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzFNLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0VBQ0YwTSxDQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQ3NDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUN6RXRDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzZFLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDNUI3RSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzJELEtBQUssQ0FBQyxDQUFDO0VBQ2xDLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0VBQ0E7RUFDQTNELENBQUMsQ0FBQyxZQUFZO0lBQ1ZBLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO01BQy9DdEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDdUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0lBRXRELENBQUMsQ0FBQztJQUNGdkMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3ZDdEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDb0MsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBcEMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUNzQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVU5YixDQUFDLEVBQUU7SUFDOUR3WixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNqSyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUN3TSxXQUFXLENBQUMsU0FBUyxFQUFHL2IsQ0FBQyxDQUFDbUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUM0UyxLQUFLLENBQUMvTSxNQUFNLEdBQUcsQ0FBRSxDQUFDO0VBQ3pHLENBQUMsQ0FBQyxDQUFDOEUsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7RUFFbEI7RUFDQTtFQUNBO0VBQ0EwTSxDQUFDLENBQUMsWUFBWTtJQUNWQSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQzFOLE9BQU8sQ0FBQyxDQUFDO0VBQzdDLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBME4sQ0FBQyxDQUFDLFlBQVk7SUFDVkEsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM4RSxPQUFPLENBQUMsQ0FBQztFQUM3QyxDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBO0VBQ0E5RSxDQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQzBCLGdCQUFnQixDQUFDO0lBQ2pFcUQsZ0JBQWdCLEVBQUUsQ0FBQztFQUN2QixDQUFDLENBQUM7O0VBRUY7QUFDSjtBQUNBO0FBQ0E7O0VBRUk7RUFDQTtFQUNBO0VBQ0EvRSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzFNLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFDMUMwTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNnRixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMzQixJQUFJLENBQUMsQ0FBQztFQUNuQztFQUNBO0VBQ0E7RUFDQXJELENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaE4sS0FBSyxDQUFDLFlBQVk7SUFDdkNnTixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1QyxXQUFXLENBQUMsV0FBVyxDQUFDO0VBQ3BDLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBdkMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNzQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVU5YixDQUFDLEVBQUU7SUFDcERBLENBQUMsQ0FBQ3llLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCakYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOUosT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOE0sSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUNULFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRnZDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzlKLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQ3FKLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzJGLFFBQVEsQ0FBQyxRQUFRLENBQUM7RUFDdEUsQ0FBQyxDQUFDO0VBQ0Y7RUFDQWxGLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQ2xEQSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztJQUNsQmpGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzlKLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzhNLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDVCxXQUFXLENBQUMscUNBQXFDLENBQUM7SUFDNUd2QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM5SixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUNxTSxXQUFXLENBQUMsaUJBQWlCLENBQUM7RUFDM0QsQ0FBQyxDQUFDO0VBQ0Y7RUFDQXZDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ2hEdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOUosT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDa00sV0FBVyxDQUFDLENBQUMsQ0FBQytDLE9BQU8sQ0FBQyxNQUFNLENBQUM7RUFDMUQsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtFQUNBO0VBQ0FuRixDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDd0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQ25EQSxDQUFDLENBQUM0ZSxlQUFlLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQSxJQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBZTtJQUM3QnJGLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzFaLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO01BQ2pEcUMsSUFBSSxFQUFFLEtBQUs7TUFDWEssTUFBTSxFQUFFLElBQUk7TUFDWnlDLFFBQVEsRUFBRSxHQUFHO01BQ2IxQyxLQUFLLEVBQUUsTUFBTTtNQUNidWMsTUFBTSxFQUFFLElBQUk7TUFDWjVaLFVBQVUsRUFBRSxHQUFHO01BQ2ZQLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztFQUVOLENBQUM7RUFDRCxJQUFJb2EsV0FBVztFQUVmdkYsQ0FBQyxDQUFDakwsTUFBTSxDQUFDLENBQUN1USxNQUFNLENBQUMsVUFBVTllLENBQUMsRUFBRTtJQUMxQmdmLFlBQVksQ0FBQ0QsV0FBVyxDQUFDO0lBQ3pCQSxXQUFXLEdBQUdFLFVBQVUsQ0FBQ0osY0FBYyxFQUFFLEdBQUcsQ0FBQztFQUNqRCxDQUFDLENBQUM7RUFDRkEsY0FBYyxDQUFDLENBQUM7O0VBRWhCO0VBQ0E7RUFDQTtFQUNBckYsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNzQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDekN0QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN1QyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3pDdkMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN1QyxXQUFXLENBQUMsU0FBUyxDQUFDO0VBQy9DLENBQUMsQ0FBQztFQUdGdkMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMwRixjQUFjLENBQUM7SUFDaENDLEtBQUssRUFBRTtNQUNIQyxJQUFJLEVBQUUsY0FBYztNQUNwQkMsSUFBSSxFQUFFLGlCQUFpQjtNQUN2QkMsRUFBRSxFQUFFLG1CQUFtQjtNQUN2QkMsSUFBSSxFQUFFLHFCQUFxQjtNQUMzQkMsUUFBUSxFQUFFLHFCQUFxQjtNQUMvQkMsSUFBSSxFQUFFLHNCQUFzQjtNQUM1QkMsS0FBSyxFQUFFLHFCQUFxQjtNQUM1QkMsS0FBSyxFQUFFLGNBQWM7TUFDckJDLEtBQUssRUFBRTtJQUNYO0VBQ0osQ0FBQyxDQUFDO0VBRUZwRyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQzBGLGNBQWMsQ0FBQztJQUMzQ3RXLE1BQU0sRUFBRSxTQUFTO0lBQ2pCdVcsS0FBSyxFQUFFO01BQ0hDLElBQUksRUFBRSxjQUFjO01BQ3BCQyxJQUFJLEVBQUUsZ0JBQWdCO01BQ3RCQyxFQUFFLEVBQUUsa0JBQWtCO01BQ3RCQyxJQUFJLEVBQUUsb0JBQW9CO01BQzFCQyxRQUFRLEVBQUUsb0JBQW9CO01BQzlCQyxJQUFJLEVBQUUscUJBQXFCO01BQzNCQyxLQUFLLEVBQUUsb0JBQW9CO01BQzNCQyxLQUFLLEVBQUUsYUFBYTtNQUNwQkMsS0FBSyxFQUFFO0lBQ1g7RUFDSixDQUFDLENBQUM7RUFFRixJQUFNQywyQkFBMkIsR0FBRztJQUNoQ2pYLE1BQU0sRUFBRSxZQUFZO0lBQ3BCa1gsTUFBTSxFQUFFLElBQUk7SUFDWlgsS0FBSyxFQUFFO01BQ0hDLElBQUksRUFBRSxjQUFjO01BQ3BCQyxJQUFJLEVBQUUsZ0JBQWdCO01BQ3RCQyxFQUFFLEVBQUUsa0JBQWtCO01BQ3RCQyxJQUFJLEVBQUUsb0JBQW9CO01BQzFCQyxRQUFRLEVBQUUsb0JBQW9CO01BQzlCQyxJQUFJLEVBQUUscUJBQXFCO01BQzNCQyxLQUFLLEVBQUUsb0JBQW9CO01BQzNCQyxLQUFLLEVBQUUsYUFBYTtNQUNwQkMsS0FBSyxFQUFFO0lBQ1g7RUFDSixDQUFDO0VBRURwRyxDQUFDLENBQUMsWUFBVTtJQUNSLElBQUlBLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDeFIsTUFBTSxFQUFFO01BQ2pDK1gsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7TUFDdEN4RyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzBGLGNBQWMsQ0FBQ1csMkJBQTJCLENBQUM7SUFDeEU7SUFDQXJHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzBGLGNBQWMsQ0FBQztNQUM1QnRXLE1BQU0sRUFBRSxZQUFZO01BQ3BCa1gsTUFBTSxFQUFFLElBQUk7TUFDWlgsS0FBSyxFQUFFO1FBQ0hDLElBQUksRUFBRSxjQUFjO1FBQ3BCQyxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCQyxFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCQyxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxRQUFRLEVBQUUscUJBQXFCO1FBQy9CQyxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxLQUFLLEVBQUUsY0FBYztRQUNyQkMsS0FBSyxFQUFFO01BQ1g7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFLRixJQUFLcEcsQ0FBQyxDQUFDakwsTUFBTSxDQUFDLENBQUNoTSxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQztJQUN6QixJQUFJMGQsS0FBSyxHQUFHekcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDMEcsU0FBUyxDQUFDLENBQUM7SUFDdkNELEtBQUssQ0FBQ0UsV0FBVyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUUzQjVHLENBQUMsQ0FBQ2pMLE1BQU0sQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLFlBQVk7TUFDekIsSUFBSTdHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQy9LLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzFCK0ssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDa0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztNQUNsQyxDQUFDLE1BQU0sSUFBSWxDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQy9LLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDK0ssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDb0MsV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUNyQztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUFxRCxVQUFVLENBQUMsWUFBWTtJQUNuQixJQUFJclQsRUFBRSxHQUFHNE4sQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUUzQixJQUFJNU4sRUFBRSxDQUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFlBQVksSUFBSW9CLEVBQUUsQ0FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxPQUFPLEVBQUU7TUFDdkUsSUFBSThWLFlBQVksR0FBRzlHLENBQUMsQ0FBQ2pMLE1BQU0sQ0FBQyxDQUFDaE0sS0FBSyxDQUFDLENBQUM7TUFDcEMsSUFBSWdlLGVBQWUsR0FBRy9HLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7TUFFN0MsSUFBSXlILGFBQWEsR0FBRyxDQUFDO01BQ3JCaEgsQ0FBQyxDQUFDK0csZUFBZSxDQUFDLENBQUNyUixJQUFJLENBQUMsWUFBWTtRQUNoQ3NSLGFBQWEsSUFBSWhILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2pYLEtBQUssQ0FBQyxDQUFDO01BQ3BDLENBQUMsQ0FBQztNQUVGLElBQUlpZSxhQUFhLEdBQUdGLFlBQVksRUFBRTtRQUU5QjlHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUMvQztJQUNKO0VBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7RUFFWDtFQUNJd0MsZ0RBQVEsQ0FBQ3VDLFlBQVksR0FBRyxLQUFLO0VBRTdCLElBQUtqSCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUN4UixNQUFNLEVBQUc7SUFFekIsSUFBSTBZLG1CQUFtQixHQUFHLElBQUl4QyxnREFBUSxDQUFDLFdBQVcsRUFBRXlDLGVBQWUsQ0FBQztJQUVwRW5ILENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDaE4sS0FBSyxDQUFDLFVBQVV4TSxDQUFDLEVBQUU7TUFDdENBLENBQUMsQ0FBQ3llLGNBQWMsQ0FBQyxDQUFDO01BQ2xCaUMsbUJBQW1CLENBQUNFLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztFQUVOO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzdRRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXBILENBQUMsQ0FBQyxZQUFXO0VBQ1QsWUFBWTs7RUFDWCxJQUFJcUgsR0FBRyxHQUFHdFMsTUFBTSxDQUFDdVMsUUFBUSxHQUFHLEVBQUU7RUFDM0IsSUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUM5WCxPQUFPLENBQUN3RixNQUFNLENBQUN1UyxRQUFRLENBQUNFLFFBQVEsR0FBRyxJQUFJLEdBQUd6UyxNQUFNLENBQUN1UyxRQUFRLENBQUNHLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3hGLElBQUlDLE9BQU8sR0FBRzFILENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMkgsTUFBTSxDQUFDLFlBQVc7SUFDakQsT0FBTyxJQUFJLENBQUNDLElBQUksS0FBS1AsR0FBRyxJQUFJLElBQUksQ0FBQ08sSUFBSSxLQUFLTCxJQUFJLENBQUM7RUFDbkQsQ0FBQyxDQUFDO0VBQ0ZHLE9BQU8sQ0FBQ0csWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDblMsSUFBSSxDQUFDLFVBQVVvUyxLQUFLLEVBQ3pEO0lBQ0ksSUFBRzlILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2xLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSWtLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDL1EsTUFBTSxLQUFLLENBQUMsRUFDekQ7TUFDSXdSLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDMkMsUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUN4Q2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytILE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQ3ZaLE1BQU0sS0FBSyxDQUFDLEdBQ3RDd1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDa0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUMxQmxDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQyxNQUNJLElBQUcsQ0FBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2xLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSWtLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDL1EsTUFBTSxLQUFLLENBQUMsRUFDL0Q7TUFDSXdSLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFFaEMsQ0FBQyxNQUNJLElBQUdsQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNsSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUM7TUFDckJrSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNrQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzFCO0VBQ0osQ0FBQyxDQUFDO0VBRU53RixPQUFPLENBQUN4RixRQUFRLENBQUMsUUFBUSxDQUFDO0VBQzFCbEMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBRXBDLElBQUksQ0FBQ3daLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUM3QjtNQUNBeEMsQ0FBQyxDQUFDLElBQUksRUFBRUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDakssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUNxTSxXQUFXLENBQUMsSUFBSSxDQUFDO01BQ3REcEMsQ0FBQyxDQUFDLEdBQUcsRUFBRUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDakssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUNxTSxXQUFXLENBQUMsUUFBUSxDQUFDOztNQUV6RDtNQUNBcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQztNQUNqQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFFOUIsQ0FBQyxNQUNJLElBQUlsQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7TUFDakN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvQyxXQUFXLENBQUMsUUFBUSxDQUFDO01BQzdCcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDakssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDcU0sV0FBVyxDQUFDLFFBQVEsQ0FBQztNQUNqRHBDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzdELFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDeEM7RUFDUixDQUFDLENBQUM7RUFDRnBDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDc0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVOWIsQ0FBQyxFQUFFO0lBQ3ZEQSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7QUFFTixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUMxREYsQ0FBQyxVQUFTMWQsQ0FBQyxFQUFDO0VBQUMsWUFBWTs7RUFBQyxTQUFTZixDQUFDQSxDQUFDZSxDQUFDLEVBQUM7SUFBQyxPQUFPLElBQUksS0FBR0EsQ0FBQyxJQUFFQSxDQUFDLEtBQUdBLENBQUMsQ0FBQ3dOLE1BQU07RUFBQTtFQUFDLFNBQVM5TixDQUFDQSxDQUFDTSxDQUFDLEVBQUM7SUFBQyxPQUFPZixDQUFDLENBQUNlLENBQUMsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBQyxLQUFHQSxDQUFDLENBQUN5Z0IsUUFBUSxJQUFFemdCLENBQUMsQ0FBQzBnQixXQUFXO0VBQUE7RUFBQyxTQUFTbGlCLENBQUNBLENBQUN3QixDQUFDLEVBQUM7SUFBQyxJQUFJZixDQUFDO01BQUNULENBQUM7TUFBQ2EsQ0FBQyxHQUFDO1FBQUNvTixHQUFHLEVBQUMsQ0FBQztRQUFDRCxJQUFJLEVBQUM7TUFBQyxDQUFDO01BQUM3TSxDQUFDLEdBQUNLLENBQUMsSUFBRUEsQ0FBQyxDQUFDMmdCLGFBQWE7SUFBQyxPQUFPMWhCLENBQUMsR0FBQ1UsQ0FBQyxDQUFDaWhCLGVBQWUsRUFBQyxXQUFXLElBQUUsT0FBTzVnQixDQUFDLENBQUM2Z0IscUJBQXFCLEtBQUd4aEIsQ0FBQyxHQUFDVyxDQUFDLENBQUM2Z0IscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUNyaUIsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBQztNQUFDOE0sR0FBRyxFQUFDcE4sQ0FBQyxDQUFDb04sR0FBRyxHQUFDak8sQ0FBQyxDQUFDc2lCLFdBQVcsR0FBQzdoQixDQUFDLENBQUM4aEIsU0FBUztNQUFDdlUsSUFBSSxFQUFDbk4sQ0FBQyxDQUFDbU4sSUFBSSxHQUFDaE8sQ0FBQyxDQUFDd2lCLFdBQVcsR0FBQy9oQixDQUFDLENBQUNnaUI7SUFBVSxDQUFDO0VBQUE7RUFBQyxTQUFTNWhCLENBQUNBLENBQUNXLENBQUMsRUFBQztJQUFDLElBQUlmLENBQUMsR0FBQyxFQUFFO0lBQUMsS0FBSSxJQUFJUyxDQUFDLElBQUlNLENBQUMsRUFBQ0EsQ0FBQyxDQUFDb0ssY0FBYyxDQUFDMUssQ0FBQyxDQUFDLEtBQUdULENBQUMsSUFBRVMsQ0FBQyxHQUFDLEdBQUcsR0FBQ00sQ0FBQyxDQUFDTixDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7SUFBQyxPQUFPVCxDQUFDO0VBQUE7RUFBQyxTQUFTVSxDQUFDQSxDQUFDSyxDQUFDLEVBQUM7SUFBQyxJQUFHaEIsQ0FBQyxDQUFDa2lCLFVBQVUsQ0FBQ2xoQixDQUFDLENBQUMsS0FBRyxDQUFDLENBQUMsRUFBQyxPQUFPLElBQUk7SUFBQyxLQUFJLElBQUlmLENBQUMsR0FBQyxJQUFJLEVBQUNTLENBQUMsR0FBQ00sQ0FBQyxDQUFDcUcsTUFBTSxJQUFFckcsQ0FBQyxDQUFDbWhCLFVBQVUsRUFBQyxJQUFJLEtBQUd6aEIsQ0FBQyxDQUFDMGhCLGFBQWEsR0FBRTtNQUFDLElBQUcsRUFBRTFoQixDQUFDLFlBQVkyaEIsVUFBVSxJQUFFLENBQUMsQ0FBQyxLQUFHM2hCLENBQUMsQ0FBQzRoQixTQUFTLENBQUNqWCxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQztRQUFDcEwsQ0FBQyxHQUFDUyxDQUFDO1FBQUM7TUFBSztNQUFDLElBQUdBLENBQUMsQ0FBQzZoQixTQUFTLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUFDdmlCLENBQUMsR0FBQ1MsQ0FBQztRQUFDO01BQUs7TUFBQ0EsQ0FBQyxHQUFDQSxDQUFDLENBQUMwaEIsYUFBYTtJQUFBO0lBQUMsT0FBT25pQixDQUFDO0VBQUE7RUFBQyxTQUFTYSxDQUFDQSxDQUFDYixDQUFDLEVBQUM7SUFBQyxJQUFJUyxDQUFDLEdBQUNDLENBQUMsQ0FBQ1YsQ0FBQyxDQUFDO0lBQUMsSUFBSSxLQUFHUyxDQUFDLEtBQUdoQixDQUFDLENBQUNvZCxJQUFJLENBQUM3YyxDQUFDLEVBQUNTLENBQUMsQ0FBQyxFQUFDLGNBQWMsSUFBR00sQ0FBQyxLQUFHTixDQUFDLENBQUMraEIsZ0JBQWdCLENBQUMsVUFBVSxFQUFDL2lCLENBQUMsQ0FBQ21kLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDbmMsQ0FBQyxDQUFDK2hCLGdCQUFnQixDQUFDLGFBQWEsRUFBQy9pQixDQUFDLENBQUNtZCxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDbmMsQ0FBQyxDQUFDK2hCLGdCQUFnQixDQUFDLFNBQVMsRUFBQy9pQixDQUFDLENBQUNtZCxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ25jLENBQUMsQ0FBQytoQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUMvaUIsQ0FBQyxDQUFDbWQsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQTtFQUFDLElBQUk5YixDQUFDLEdBQUNBLENBQUMsSUFBRSxDQUFDLENBQUM7SUFBQ0UsQ0FBQyxHQUFDc1ksUUFBUSxDQUFDbUosZ0JBQWdCLENBQUN6VixJQUFJLENBQUNzTSxRQUFRLENBQUM7SUFBQzdaLENBQUMsR0FBQztNQUFDaWpCLFFBQVEsRUFBQyxHQUFHO01BQUM3RixJQUFJLEVBQUMsU0FBQUEsS0FBUzliLENBQUMsRUFBQ2YsQ0FBQyxFQUFDO1FBQUMsSUFBRyxDQUFDLEtBQUdlLENBQUMsQ0FBQzRoQixNQUFNLEVBQUMsT0FBTSxDQUFDLENBQUM7UUFBQyxJQUFJbGlCLENBQUMsR0FBQ1QsQ0FBQyxJQUFFLElBQUk7VUFBQ1UsQ0FBQyxHQUFDNFksUUFBUSxDQUFDclAsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUFDdkosQ0FBQyxDQUFDMmhCLFNBQVMsR0FBQyxjQUFjLEVBQUM1aEIsQ0FBQyxDQUFDMEosV0FBVyxDQUFDekosQ0FBQyxDQUFDO1FBQUMsSUFBSUcsQ0FBQyxHQUFDdEIsQ0FBQyxDQUFDa0IsQ0FBQyxDQUFDO1VBQUNLLENBQUMsR0FBQ0MsQ0FBQyxDQUFDb00sS0FBSyxHQUFDdE0sQ0FBQyxDQUFDMk0sR0FBRztVQUFDeE0sQ0FBQyxHQUFDRCxDQUFDLENBQUNtTSxLQUFLLEdBQUNyTSxDQUFDLENBQUMwTSxJQUFJO1VBQUN4TixDQUFDLEdBQUMsUUFBUSxHQUFDVSxDQUFDLENBQUNtaUIsV0FBVyxHQUFDLEdBQUcsR0FBQyxFQUFFLEdBQUMsR0FBRztRQUFDLFNBQVMsSUFBRzdoQixDQUFDLEtBQUdELENBQUMsR0FBQ0MsQ0FBQyxDQUFDOGhCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFWLEtBQUssR0FBQ3RNLENBQUMsQ0FBQzJNLEdBQUcsRUFBQ3hNLENBQUMsR0FBQ0QsQ0FBQyxDQUFDOGhCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzNWLEtBQUssR0FBQ3JNLENBQUMsQ0FBQzBNLElBQUksQ0FBQyxFQUFDN00sQ0FBQyxDQUFDb2lCLFlBQVksQ0FBQyxXQUFXLEVBQUN6RixJQUFJLENBQUMwRixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUNyaUIsQ0FBQyxDQUFDb2lCLFlBQVksQ0FBQyxZQUFZLEVBQUMvaUIsQ0FBQyxDQUFDLEVBQUNXLENBQUMsQ0FBQ29pQixZQUFZLENBQUMsUUFBUSxFQUFDOWhCLENBQUMsQ0FBQyxFQUFDTixDQUFDLENBQUNvaUIsWUFBWSxDQUFDLFFBQVEsRUFBQ2hpQixDQUFDLENBQUM7UUFBQyxJQUFJUCxDQUFDLEdBQUM7VUFBQ2lOLEdBQUcsRUFBQzFNLENBQUMsR0FBQyxJQUFJO1VBQUN5TSxJQUFJLEVBQUN2TSxDQUFDLEdBQUM7UUFBSSxDQUFDO1FBQUNOLENBQUMsQ0FBQzJoQixTQUFTLEdBQUMzaEIsQ0FBQyxDQUFDMmhCLFNBQVMsR0FBQyxxQkFBcUIsRUFBQzNoQixDQUFDLENBQUNvaUIsWUFBWSxDQUFDLE9BQU8sRUFBQzFpQixDQUFDLENBQUNHLENBQUMsQ0FBQyxDQUFDLEVBQUNHLENBQUMsQ0FBQzJoQixTQUFTLEdBQUMzaEIsQ0FBQyxDQUFDMmhCLFNBQVMsQ0FBQ3RaLE9BQU8sQ0FBQyxvQkFBb0IsRUFBQyxFQUFFLENBQUMsRUFBQ3hJLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFDUixDQUFDLEVBQUNRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDUixDQUFDLEVBQUNRLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBQ1IsQ0FBQyxFQUFDUSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUNSLENBQUMsRUFBQ1EsQ0FBQyxDQUFDeWlCLFNBQVMsR0FBQ2pqQixDQUFDLEVBQUNRLENBQUMsQ0FBQzBpQixPQUFPLEdBQUMsR0FBRyxFQUFDMWlCLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFDZCxDQUFDLENBQUNpakIsUUFBUSxHQUFDLElBQUksRUFBQ25pQixDQUFDLENBQUMsMEJBQTBCLENBQUMsR0FBQ2QsQ0FBQyxDQUFDaWpCLFFBQVEsR0FBQyxJQUFJLEVBQUNuaUIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEdBQUNkLENBQUMsQ0FBQ2lqQixRQUFRLEdBQUMsSUFBSSxFQUFDbmlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFDZCxDQUFDLENBQUNpakIsUUFBUSxHQUFDLElBQUksRUFBQ25pQixDQUFDLENBQUMsb0NBQW9DLENBQUMsR0FBQywwQ0FBMEMsRUFBQ0EsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLEdBQUMsMENBQTBDLEVBQUNBLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxHQUFDLDBDQUEwQyxFQUFDQSxDQUFDLENBQUMsNEJBQTRCLENBQUMsR0FBQywwQ0FBMEMsRUFBQ0csQ0FBQyxDQUFDb2lCLFlBQVksQ0FBQyxPQUFPLEVBQUMxaUIsQ0FBQyxDQUFDRyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3FjLElBQUksRUFBQyxTQUFBQSxLQUFTN2IsQ0FBQyxFQUFDO1FBQUNoQixDQUFDLENBQUNtakIsT0FBTyxDQUFDbmlCLENBQUMsQ0FBQztRQUFDLElBQUlmLENBQUMsR0FBQyxJQUFJO1VBQUNTLENBQUMsSUFBRSxHQUFHLEdBQUNULENBQUMsQ0FBQzRpQixXQUFXLEVBQUMsSUFBSSxDQUFDO1VBQUNyakIsQ0FBQyxHQUFDUyxDQUFDLENBQUNtakIsc0JBQXNCLENBQUMsY0FBYyxDQUFDO1FBQUMsSUFBRyxFQUFFNWpCLENBQUMsQ0FBQ3lJLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBQyxPQUFNLENBQUMsQ0FBQztRQUFDdkgsQ0FBQyxHQUFDbEIsQ0FBQyxDQUFDQSxDQUFDLENBQUN5SSxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSXRILENBQUMsR0FBQ0QsQ0FBQyxDQUFDME8sWUFBWSxDQUFDLFFBQVEsQ0FBQztVQUFDdE8sQ0FBQyxHQUFDSixDQUFDLENBQUMwTyxZQUFZLENBQUMsUUFBUSxDQUFDO1VBQUNyTyxDQUFDLEdBQUNMLENBQUMsQ0FBQzBPLFlBQVksQ0FBQyxZQUFZLENBQUM7VUFBQ25PLENBQUMsR0FBQ3FjLElBQUksQ0FBQzBGLEdBQUcsQ0FBQyxDQUFDLEdBQUNuUSxNQUFNLENBQUNuUyxDQUFDLENBQUMwTyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7VUFBQzVPLENBQUMsR0FBQyxHQUFHLEdBQUNTLENBQUM7UUFBQyxDQUFDLEdBQUNULENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDMGUsVUFBVSxDQUFDLFlBQVU7VUFBQyxJQUFJbGUsQ0FBQyxHQUFDO1lBQUN5TSxHQUFHLEVBQUMzTSxDQUFDLEdBQUMsSUFBSTtZQUFDME0sSUFBSSxFQUFDN00sQ0FBQyxHQUFDLElBQUk7WUFBQ3VpQixPQUFPLEVBQUMsR0FBRztZQUFDLDZCQUE2QixFQUFDeGpCLENBQUMsQ0FBQ2lqQixRQUFRLEdBQUMsSUFBSTtZQUFDLDBCQUEwQixFQUFDampCLENBQUMsQ0FBQ2lqQixRQUFRLEdBQUMsSUFBSTtZQUFDLHdCQUF3QixFQUFDampCLENBQUMsQ0FBQ2lqQixRQUFRLEdBQUMsSUFBSTtZQUFDLHFCQUFxQixFQUFDampCLENBQUMsQ0FBQ2lqQixRQUFRLEdBQUMsSUFBSTtZQUFDLG1CQUFtQixFQUFDNWhCLENBQUM7WUFBQyxnQkFBZ0IsRUFBQ0EsQ0FBQztZQUFDLGVBQWUsRUFBQ0EsQ0FBQztZQUFDLGNBQWMsRUFBQ0EsQ0FBQztZQUFDa2lCLFNBQVMsRUFBQ2xpQjtVQUFDLENBQUM7VUFBQ0wsQ0FBQyxDQUFDcWlCLFlBQVksQ0FBQyxPQUFPLEVBQUMxaUIsQ0FBQyxDQUFDVyxDQUFDLENBQUMsQ0FBQyxFQUFDa2UsVUFBVSxDQUFDLFlBQVU7WUFBQyxJQUFHO2NBQUNqZixDQUFDLENBQUNxWixXQUFXLENBQUM1WSxDQUFDLENBQUM7WUFBQSxDQUFDLFFBQU1NLENBQUMsRUFBQztjQUFDLE9BQU0sQ0FBQyxDQUFDO1lBQUE7VUFBQyxDQUFDLEVBQUN0QixDQUFDLENBQUNpakIsUUFBUSxDQUFDO1FBQUEsQ0FBQyxFQUFDbmlCLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQzZpQixTQUFTLEVBQUMsU0FBQUEsVUFBU3JpQixDQUFDLEVBQUM7UUFBQyxLQUFJLElBQUlmLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ2UsQ0FBQyxDQUFDaUgsTUFBTSxFQUFDaEksQ0FBQyxFQUFFLEVBQUM7VUFBQyxJQUFJUyxDQUFDLEdBQUNNLENBQUMsQ0FBQ2YsQ0FBQyxDQUFDO1VBQUMsSUFBRyxPQUFPLEtBQUdTLENBQUMsQ0FBQzRpQixPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEVBQUM7WUFBQyxJQUFJL2pCLENBQUMsR0FBQ2tCLENBQUMsQ0FBQzhpQixVQUFVO1lBQUMsSUFBRyxHQUFHLEtBQUdoa0IsQ0FBQyxDQUFDOGpCLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsS0FBRy9qQixDQUFDLENBQUM4aUIsU0FBUyxDQUFDalgsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFDO1lBQVMsSUFBSWhMLENBQUMsR0FBQ2taLFFBQVEsQ0FBQ3JQLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFBQzdKLENBQUMsQ0FBQ2lpQixTQUFTLEdBQUM1aEIsQ0FBQyxDQUFDNGhCLFNBQVMsR0FBQyxzQkFBc0I7WUFBQyxJQUFJM2hCLENBQUMsR0FBQ0QsQ0FBQyxDQUFDME8sWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUFDek8sQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUNOLENBQUMsQ0FBQzBpQixZQUFZLENBQUMsT0FBTyxFQUFDcGlCLENBQUMsQ0FBQyxFQUFDRCxDQUFDLENBQUM0aEIsU0FBUyxHQUFDLG9CQUFvQixFQUFDNWhCLENBQUMsQ0FBQytpQixlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUNqa0IsQ0FBQyxDQUFDa2tCLFlBQVksQ0FBQ3JqQixDQUFDLEVBQUNLLENBQUMsQ0FBQyxFQUFDTCxDQUFDLENBQUMrSixXQUFXLENBQUMxSixDQUFDLENBQUM7VUFBQTtRQUFDO01BQUM7SUFBQyxDQUFDO0lBQUNWLENBQUMsR0FBQztNQUFDOGlCLE9BQU8sRUFBQyxDQUFDO01BQUNaLFVBQVUsRUFBQyxTQUFBQSxXQUFTbGhCLENBQUMsRUFBQztRQUFDLElBQUlmLENBQUMsR0FBQyxDQUFDLENBQUM7UUFBQyxPQUFNLFlBQVksS0FBR2UsQ0FBQyxDQUFDb0IsSUFBSSxHQUFDcEMsQ0FBQyxDQUFDOGlCLE9BQU8sSUFBRSxDQUFDLEdBQUMsVUFBVSxLQUFHOWhCLENBQUMsQ0FBQ29CLElBQUksSUFBRSxhQUFhLEtBQUdwQixDQUFDLENBQUNvQixJQUFJLEdBQUM4YyxVQUFVLENBQUMsWUFBVTtVQUFDbGYsQ0FBQyxDQUFDOGlCLE9BQU8sR0FBQyxDQUFDLEtBQUc5aUIsQ0FBQyxDQUFDOGlCLE9BQU8sSUFBRSxDQUFDLENBQUM7UUFBQSxDQUFDLEVBQUMsR0FBRyxDQUFDLEdBQUMsV0FBVyxLQUFHOWhCLENBQUMsQ0FBQ29CLElBQUksSUFBRXBDLENBQUMsQ0FBQzhpQixPQUFPLEdBQUMsQ0FBQyxLQUFHN2lCLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxDQUFDO01BQUEsQ0FBQztNQUFDa2pCLE9BQU8sRUFBQyxTQUFBQSxRQUFTbmlCLENBQUMsRUFBQztRQUFDaEIsQ0FBQyxDQUFDa2lCLFVBQVUsQ0FBQ2xoQixDQUFDLENBQUM7TUFBQTtJQUFDLENBQUM7RUFBQ0QsQ0FBQyxDQUFDNGlCLGFBQWEsR0FBQyxVQUFTMWpCLENBQUMsRUFBQztJQUFDQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQyxVQUFVLElBQUdBLENBQUMsS0FBR1AsQ0FBQyxDQUFDaWpCLFFBQVEsR0FBQzFpQixDQUFDLENBQUMwaUIsUUFBUSxDQUFDLEVBQUNqakIsQ0FBQyxDQUFDMmpCLFNBQVMsQ0FBQ3BpQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxjQUFjLElBQUdELENBQUMsSUFBRXVZLFFBQVEsQ0FBQ2xQLElBQUksQ0FBQ29ZLGdCQUFnQixDQUFDLFlBQVksRUFBQzNoQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3lZLFFBQVEsQ0FBQ2xQLElBQUksQ0FBQ29ZLGdCQUFnQixDQUFDLFdBQVcsRUFBQzNoQixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNDLENBQUMsQ0FBQzZpQixNQUFNLEdBQUMsVUFBUzNqQixDQUFDLEVBQUM7SUFBQyxPQUFPLEtBQUdBLENBQUMsQ0FBQ3FqQixPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEtBQUc3akIsQ0FBQyxDQUFDMmpCLFNBQVMsQ0FBQyxDQUFDcGpCLENBQUMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbWlCLGFBQWEsQ0FBQyxFQUFDLGNBQWMsSUFBR3BoQixDQUFDLElBQUVmLENBQUMsQ0FBQ3dpQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUMzaEIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNiLENBQUMsQ0FBQ3dpQixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUMzaEIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDRSxDQUFDLENBQUM2aUIsS0FBSyxHQUFDOWlCLENBQUMsRUFBQ3dZLFFBQVEsQ0FBQ2tKLGdCQUFnQixDQUFDLGtCQUFrQixFQUFDLFlBQVU7SUFBQzFoQixDQUFDLENBQUM0aUIsYUFBYSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxDQUFDLENBQUNuVixNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDQTVvSTtBQUNBLENBQUMsU0FBU3ZPLENBQUNBLENBQUNlLENBQUMsRUFBQ04sQ0FBQyxFQUFDSSxDQUFDLEVBQUM7RUFBQyxTQUFTQyxDQUFDQSxDQUFDSixDQUFDLEVBQUNNLENBQUMsRUFBQztJQUFDLElBQUcsQ0FBQ1AsQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBQztNQUFDLElBQUcsQ0FBQ0ssQ0FBQyxDQUFDTCxDQUFDLENBQUMsRUFBQztRQUFDLElBQUluQixDQUFDLEdBQUMsU0FBbUM7UUFBQyxJQUFHLENBQUN5QixDQUFDLElBQUV6QixDQUFDLEVBQUMsT0FBT0EsT0FBQyxDQUFDbUIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBR04sQ0FBQyxFQUFDLE9BQU9BLENBQUMsQ0FBQ00sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSVQsQ0FBQyxHQUFDLElBQUk0akIsS0FBSyxDQUFDLHNCQUFzQixHQUFDbmpCLENBQUMsR0FBQyxHQUFHLENBQUM7UUFBQyxNQUFNVCxDQUFDLENBQUM2akIsSUFBSSxHQUFDLGtCQUFrQixFQUFDN2pCLENBQUM7TUFBQTtNQUFDLElBQUlNLENBQUMsR0FBQ0UsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQztRQUFDcWpCLE9BQU8sRUFBQyxDQUFDO01BQUMsQ0FBQztNQUFDaGpCLENBQUMsQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM0SCxJQUFJLENBQUMvSCxDQUFDLENBQUN3akIsT0FBTyxFQUFDLFVBQVMvakIsQ0FBQyxFQUFDO1FBQUMsSUFBSVMsQ0FBQyxHQUFDTSxDQUFDLENBQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVixDQUFDLENBQUM7UUFBQyxPQUFPYyxDQUFDLENBQUNMLENBQUMsR0FBQ0EsQ0FBQyxHQUFDVCxDQUFDLENBQUM7TUFBQSxDQUFDLEVBQUNPLENBQUMsRUFBQ0EsQ0FBQyxDQUFDd2pCLE9BQU8sRUFBQy9qQixDQUFDLEVBQUNlLENBQUMsRUFBQ04sQ0FBQyxFQUFDSSxDQUFDLENBQUM7SUFBQTtJQUFDLE9BQU9KLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUNxakIsT0FBTztFQUFBO0VBQUMsSUFBSTNqQixDQUFDLEdBQUMsU0FBbUM7RUFBQyxLQUFJLElBQUlNLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ0csQ0FBQyxDQUFDbUgsTUFBTSxFQUFDdEgsQ0FBQyxFQUFFLEVBQUNJLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDSCxDQUFDLENBQUMsQ0FBQztFQUFDLE9BQU9JLENBQUM7QUFBQSxDQUFDLEVBQUU7RUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTaWQsT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDL2QsWUFBWTs7SUFFWixJQUFJRSxFQUFFLEdBQUdsRyxPQUFPLENBQUMsU0FBUyxDQUFDO01BQ3ZCbUcsV0FBVyxHQUFHbkcsT0FBTyxDQUFDLHFCQUFxQixDQUFDO0lBRWhELFNBQVNvRyxXQUFXQSxDQUFDdmtCLE1BQU0sRUFBRTtNQUMzQkEsTUFBTSxDQUFDQyxFQUFFLENBQUNxYixnQkFBZ0IsR0FBRyxVQUFVa0osZ0JBQWdCLEVBQUU7UUFDdkQsT0FBTyxJQUFJLENBQUNsVixJQUFJLENBQUMsWUFBWTtVQUMzQixJQUFJeUQsT0FBQSxDQUFPeVIsZ0JBQWdCLE1BQUssUUFBUSxJQUNwQyxPQUFPQSxnQkFBZ0IsS0FBSyxXQUFXLEVBQUU7WUFDM0M7WUFDQSxJQUFJMUssUUFBUSxHQUFHMEssZ0JBQWdCO1lBRS9CLElBQUksQ0FBQ0YsV0FBVyxDQUFDamIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2NBQzFCZ2IsRUFBRSxDQUFDSSxVQUFVLENBQUMsSUFBSSxFQUFFM0ssUUFBUSxDQUFDO1lBQy9CO1VBQ0YsQ0FBQyxNQUFNO1lBQ0w7WUFDQSxJQUFJNEssT0FBTyxHQUFHRixnQkFBZ0I7WUFFOUIsSUFBSUUsT0FBTyxLQUFLLFFBQVEsRUFBRTtjQUN4QkwsRUFBRSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pCLENBQUMsTUFBTSxJQUFJRCxPQUFPLEtBQUssU0FBUyxFQUFFO2NBQ2hDTCxFQUFFLENBQUNPLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEI7VUFDRjtVQUVBLE9BQU81a0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUM7TUFDSixDQUFDO0lBQ0g7SUFFQSxJQUFJLElBQTBDLEVBQUU7TUFDOUM7TUFDQUYsaUNBQU8sQ0FBQyx5RUFBUSxDQUFDLG9DQUFFeWtCLFdBQVc7QUFBQTtBQUFBO0FBQUEsa0dBQUM7SUFDakMsQ0FBQyxNQUFNLFdBS047SUFFREgsTUFBTSxDQUFDRCxPQUFPLEdBQUdJLFdBQVc7RUFFNUIsQ0FBQyxFQUFDO0lBQUMsU0FBUyxFQUFDLENBQUM7SUFBQyxxQkFBcUIsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVNwRyxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUM3RSxZQUFZOztJQUVaLFNBQVNXLE1BQU1BLENBQUN4RCxPQUFPLEVBQUVtQixTQUFTLEVBQUU7TUFDbEMsSUFBSXNDLE9BQU8sR0FBR3pELE9BQU8sQ0FBQ21CLFNBQVMsQ0FBQzNZLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDMUMsSUFBSWliLE9BQU8sQ0FBQ3ZaLE9BQU8sQ0FBQ2lYLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQ3NDLE9BQU8sQ0FBQ3RiLElBQUksQ0FBQ2daLFNBQVMsQ0FBQztNQUN6QjtNQUNBbkIsT0FBTyxDQUFDbUIsU0FBUyxHQUFHc0MsT0FBTyxDQUFDOWEsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN2QztJQUVBLFNBQVMrYSxTQUFTQSxDQUFDMUQsT0FBTyxFQUFFbUIsU0FBUyxFQUFFO01BQ3JDLElBQUlzQyxPQUFPLEdBQUd6RCxPQUFPLENBQUNtQixTQUFTLENBQUMzWSxLQUFLLENBQUMsR0FBRyxDQUFDO01BQzFDLElBQUltYixHQUFHLEdBQUdGLE9BQU8sQ0FBQ3ZaLE9BQU8sQ0FBQ2lYLFNBQVMsQ0FBQztNQUNwQyxJQUFJd0MsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNaRixPQUFPLENBQUMvYSxNQUFNLENBQUNpYixHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQ3hCO01BQ0EzRCxPQUFPLENBQUNtQixTQUFTLEdBQUdzQyxPQUFPLENBQUM5YSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3ZDO0lBRUFrYSxPQUFPLENBQUNuWixHQUFHLEdBQUcsVUFBVXNXLE9BQU8sRUFBRW1CLFNBQVMsRUFBRTtNQUMxQyxJQUFJbkIsT0FBTyxDQUFDb0IsU0FBUyxFQUFFO1FBQ3JCcEIsT0FBTyxDQUFDb0IsU0FBUyxDQUFDMVgsR0FBRyxDQUFDeVgsU0FBUyxDQUFDO01BQ2xDLENBQUMsTUFBTTtRQUNMcUMsTUFBTSxDQUFDeEQsT0FBTyxFQUFFbUIsU0FBUyxDQUFDO01BQzVCO0lBQ0YsQ0FBQztJQUVEMEIsT0FBTyxDQUFDclgsTUFBTSxHQUFHLFVBQVV3VSxPQUFPLEVBQUVtQixTQUFTLEVBQUU7TUFDN0MsSUFBSW5CLE9BQU8sQ0FBQ29CLFNBQVMsRUFBRTtRQUNyQnBCLE9BQU8sQ0FBQ29CLFNBQVMsQ0FBQzVWLE1BQU0sQ0FBQzJWLFNBQVMsQ0FBQztNQUNyQyxDQUFDLE1BQU07UUFDTHVDLFNBQVMsQ0FBQzFELE9BQU8sRUFBRW1CLFNBQVMsQ0FBQztNQUMvQjtJQUNGLENBQUM7SUFFRDBCLE9BQU8sQ0FBQ2UsSUFBSSxHQUFHLFVBQVU1RCxPQUFPLEVBQUU7TUFDaEMsSUFBSUEsT0FBTyxDQUFDb0IsU0FBUyxFQUFFO1FBQ3JCLE9BQU9sYSxLQUFLLENBQUNILFNBQVMsQ0FBQ0ksS0FBSyxDQUFDUCxLQUFLLENBQUNvWixPQUFPLENBQUNvQixTQUFTLENBQUM7TUFDdkQsQ0FBQyxNQUFNO1FBQ0wsT0FBT3BCLE9BQU8sQ0FBQ21CLFNBQVMsQ0FBQzNZLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDckM7SUFDRixDQUFDO0VBRUQsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUMsQ0FBQyxFQUFDLENBQUMsVUFBU3FVLE9BQU8sRUFBQ2lHLE1BQU0sRUFBQ0QsT0FBTyxFQUFDO0lBQ3pDLFlBQVk7O0lBRVosSUFBSWdCLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFWkEsR0FBRyxDQUFDL2tCLENBQUMsR0FBRyxVQUFVcWpCLE9BQU8sRUFBRWhCLFNBQVMsRUFBRTtNQUNwQyxJQUFJbkIsT0FBTyxHQUFHNUgsUUFBUSxDQUFDclAsYUFBYSxDQUFDb1osT0FBTyxDQUFDO01BQzdDbkMsT0FBTyxDQUFDbUIsU0FBUyxHQUFHQSxTQUFTO01BQzdCLE9BQU9uQixPQUFPO0lBQ2hCLENBQUM7SUFFRDZELEdBQUcsQ0FBQzVXLFFBQVEsR0FBRyxVQUFVNlcsS0FBSyxFQUFFekQsTUFBTSxFQUFFO01BQ3RDQSxNQUFNLENBQUNwWCxXQUFXLENBQUM2YSxLQUFLLENBQUM7TUFDekIsT0FBT0EsS0FBSztJQUNkLENBQUM7SUFFRCxTQUFTQyxNQUFNQSxDQUFDL0QsT0FBTyxFQUFFZ0UsU0FBUyxFQUFFO01BQ2xDLE9BQU8zVyxNQUFNLENBQUM0VyxnQkFBZ0IsQ0FBQ2pFLE9BQU8sQ0FBQyxDQUFDZ0UsU0FBUyxDQUFDO0lBQ3BEO0lBRUEsU0FBU0UsTUFBTUEsQ0FBQ2xFLE9BQU8sRUFBRWdFLFNBQVMsRUFBRUcsVUFBVSxFQUFFO01BQzlDLElBQUksT0FBT0EsVUFBVSxLQUFLLFFBQVEsRUFBRTtRQUNsQ0EsVUFBVSxHQUFHQSxVQUFVLENBQUM3YixRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7TUFDM0M7TUFDQTBYLE9BQU8sQ0FBQzdXLEtBQUssQ0FBQzZhLFNBQVMsQ0FBQyxHQUFHRyxVQUFVO01BQ3JDLE9BQU9uRSxPQUFPO0lBQ2hCO0lBRUEsU0FBU29FLFdBQVdBLENBQUNwRSxPQUFPLEVBQUVxRSxHQUFHLEVBQUU7TUFDakMsS0FBSyxJQUFJdlYsR0FBRyxJQUFJdVYsR0FBRyxFQUFFO1FBQ25CLElBQUlySSxHQUFHLEdBQUdxSSxHQUFHLENBQUN2VixHQUFHLENBQUM7UUFDbEIsSUFBSSxPQUFPa04sR0FBRyxLQUFLLFFBQVEsRUFBRTtVQUMzQkEsR0FBRyxHQUFHQSxHQUFHLENBQUMxVCxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDN0I7UUFDQTBYLE9BQU8sQ0FBQzdXLEtBQUssQ0FBQzJGLEdBQUcsQ0FBQyxHQUFHa04sR0FBRztNQUMxQjtNQUNBLE9BQU9nRSxPQUFPO0lBQ2hCO0lBRUE2RCxHQUFHLENBQUNqVyxHQUFHLEdBQUcsVUFBVW9TLE9BQU8sRUFBRXNFLGlCQUFpQixFQUFFSCxVQUFVLEVBQUU7TUFDMUQsSUFBSTFTLE9BQUEsQ0FBTzZTLGlCQUFpQixNQUFLLFFBQVEsRUFBRTtRQUN6QztRQUNBLE9BQU9GLFdBQVcsQ0FBQ3BFLE9BQU8sRUFBRXNFLGlCQUFpQixDQUFDO01BQ2hELENBQUMsTUFBTTtRQUNMLElBQUksT0FBT0gsVUFBVSxLQUFLLFdBQVcsRUFBRTtVQUNyQyxPQUFPSixNQUFNLENBQUMvRCxPQUFPLEVBQUVzRSxpQkFBaUIsQ0FBQztRQUMzQyxDQUFDLE1BQU07VUFDTCxPQUFPSixNQUFNLENBQUNsRSxPQUFPLEVBQUVzRSxpQkFBaUIsRUFBRUgsVUFBVSxDQUFDO1FBQ3ZEO01BQ0Y7SUFDRixDQUFDO0lBRUROLEdBQUcsQ0FBQ1UsT0FBTyxHQUFHLFVBQVV2RSxPQUFPLEVBQUV3RSxLQUFLLEVBQUU7TUFDdEMsSUFBSSxPQUFPeEUsT0FBTyxDQUFDdUUsT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUMxQyxPQUFPdkUsT0FBTyxDQUFDdUUsT0FBTyxDQUFDQyxLQUFLLENBQUM7TUFDL0IsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxPQUFPeEUsT0FBTyxDQUFDeUUsZUFBZSxLQUFLLFdBQVcsRUFBRTtVQUNsRCxPQUFPekUsT0FBTyxDQUFDeUUsZUFBZSxDQUFDRCxLQUFLLENBQUM7UUFDdkMsQ0FBQyxNQUFNLElBQUksT0FBT3hFLE9BQU8sQ0FBQzBFLHFCQUFxQixLQUFLLFdBQVcsRUFBRTtVQUMvRCxPQUFPMUUsT0FBTyxDQUFDMEUscUJBQXFCLENBQUNGLEtBQUssQ0FBQztRQUM3QyxDQUFDLE1BQU0sSUFBSSxPQUFPeEUsT0FBTyxDQUFDMkUsa0JBQWtCLEtBQUssV0FBVyxFQUFFO1VBQzVELE9BQU8zRSxPQUFPLENBQUMyRSxrQkFBa0IsQ0FBQ0gsS0FBSyxDQUFDO1FBQzFDLENBQUMsTUFBTSxJQUFJLE9BQU94RSxPQUFPLENBQUM0RSxpQkFBaUIsS0FBSyxXQUFXLEVBQUU7VUFDM0QsT0FBTzVFLE9BQU8sQ0FBQzRFLGlCQUFpQixDQUFDSixLQUFLLENBQUM7UUFDekM7TUFDRjtJQUNGLENBQUM7SUFFRFgsR0FBRyxDQUFDclksTUFBTSxHQUFHLFVBQVV3VSxPQUFPLEVBQUU7TUFDOUIsSUFBSSxPQUFPQSxPQUFPLENBQUN4VSxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ3pDd1UsT0FBTyxDQUFDeFUsTUFBTSxDQUFDLENBQUM7TUFDbEIsQ0FBQyxNQUFNO1FBQ0wsSUFBSXdVLE9BQU8sQ0FBQ3FDLFVBQVUsRUFBRTtVQUN0QnJDLE9BQU8sQ0FBQ3FDLFVBQVUsQ0FBQ2xLLFdBQVcsQ0FBQzZILE9BQU8sQ0FBQztRQUN6QztNQUNGO0lBQ0YsQ0FBQztJQUVENkQsR0FBRyxDQUFDZ0IsYUFBYSxHQUFHLFVBQVU3RSxPQUFPLEVBQUU4RSxRQUFRLEVBQUU7TUFDL0MsT0FBTzVkLEtBQUssQ0FBQ0gsU0FBUyxDQUFDa1osTUFBTSxDQUFDN1ksSUFBSSxDQUFDNFksT0FBTyxDQUFDK0UsVUFBVSxFQUFFLFVBQVVqQixLQUFLLEVBQUU7UUFDdEUsT0FBT0QsR0FBRyxDQUFDVSxPQUFPLENBQUNULEtBQUssRUFBRWdCLFFBQVEsQ0FBQztNQUNyQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRURoQyxNQUFNLENBQUNELE9BQU8sR0FBR2dCLEdBQUc7RUFFcEIsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUMsQ0FBQyxFQUFDLENBQUMsVUFBU2hILE9BQU8sRUFBQ2lHLE1BQU0sRUFBQ0QsT0FBTyxFQUFDO0lBQ3pDLFlBQVk7O0lBRVosSUFBSW1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFhaEYsT0FBTyxFQUFFO01BQ3BDLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO01BQ3RCLElBQUksQ0FBQ2lGLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVERCxZQUFZLENBQUNqZSxTQUFTLENBQUMrRSxJQUFJLEdBQUcsVUFBVW9aLFNBQVMsRUFBRUMsT0FBTyxFQUFFO01BQzFELElBQUksT0FBTyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQ2pELElBQUksQ0FBQ0QsTUFBTSxDQUFDQyxTQUFTLENBQUMsR0FBRyxFQUFFO01BQzdCO01BQ0EsSUFBSSxDQUFDRCxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDL2MsSUFBSSxDQUFDZ2QsT0FBTyxDQUFDO01BQ3BDLElBQUksQ0FBQ25GLE9BQU8sQ0FBQ3NCLGdCQUFnQixDQUFDNEQsU0FBUyxFQUFFQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFFREgsWUFBWSxDQUFDamUsU0FBUyxDQUFDOEUsTUFBTSxHQUFHLFVBQVVxWixTQUFTLEVBQUVDLE9BQU8sRUFBRTtNQUM1RCxJQUFJQyxpQkFBaUIsR0FBSSxPQUFPRCxPQUFPLEtBQUssV0FBWTtNQUN4RCxJQUFJLENBQUNGLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDRCxNQUFNLENBQUNDLFNBQVMsQ0FBQyxDQUFDakYsTUFBTSxDQUFDLFVBQVVvRixJQUFJLEVBQUU7UUFDckUsSUFBSUQsaUJBQWlCLElBQUlDLElBQUksS0FBS0YsT0FBTyxFQUFFO1VBQ3pDLE9BQU8sSUFBSTtRQUNiO1FBQ0EsSUFBSSxDQUFDbkYsT0FBTyxDQUFDc0YsbUJBQW1CLENBQUNKLFNBQVMsRUFBRUcsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUN4RCxPQUFPLEtBQUs7TUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1YsQ0FBQztJQUVETCxZQUFZLENBQUNqZSxTQUFTLENBQUN3ZSxTQUFTLEdBQUcsWUFBWTtNQUM3QyxLQUFLLElBQUlsSyxJQUFJLElBQUksSUFBSSxDQUFDNEosTUFBTSxFQUFFO1FBQzVCLElBQUksQ0FBQ3BaLE1BQU0sQ0FBQ3dQLElBQUksQ0FBQztNQUNuQjtJQUNGLENBQUM7SUFFRCxJQUFJbUssWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBZTtNQUM3QixJQUFJLENBQUNDLGFBQWEsR0FBRyxFQUFFO0lBQ3pCLENBQUM7SUFFREQsWUFBWSxDQUFDemUsU0FBUyxDQUFDMmUsWUFBWSxHQUFHLFVBQVUxRixPQUFPLEVBQUU7TUFDdkQsSUFBSTJGLEVBQUUsR0FBRyxJQUFJLENBQUNGLGFBQWEsQ0FBQ3hGLE1BQU0sQ0FBQyxVQUFVeUYsWUFBWSxFQUFFO1FBQ3pELE9BQU9BLFlBQVksQ0FBQzFGLE9BQU8sS0FBS0EsT0FBTztNQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDTCxJQUFJLE9BQU8yRixFQUFFLEtBQUssV0FBVyxFQUFFO1FBQzdCQSxFQUFFLEdBQUcsSUFBSVgsWUFBWSxDQUFDaEYsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQ3lGLGFBQWEsQ0FBQ3RkLElBQUksQ0FBQ3dkLEVBQUUsQ0FBQztNQUM3QjtNQUNBLE9BQU9BLEVBQUU7SUFDWCxDQUFDO0lBRURILFlBQVksQ0FBQ3plLFNBQVMsQ0FBQytFLElBQUksR0FBRyxVQUFVa1UsT0FBTyxFQUFFa0YsU0FBUyxFQUFFQyxPQUFPLEVBQUU7TUFDbkUsSUFBSSxDQUFDTyxZQUFZLENBQUMxRixPQUFPLENBQUMsQ0FBQ2xVLElBQUksQ0FBQ29aLFNBQVMsRUFBRUMsT0FBTyxDQUFDO0lBQ3JELENBQUM7SUFFREssWUFBWSxDQUFDemUsU0FBUyxDQUFDOEUsTUFBTSxHQUFHLFVBQVVtVSxPQUFPLEVBQUVrRixTQUFTLEVBQUVDLE9BQU8sRUFBRTtNQUNyRSxJQUFJLENBQUNPLFlBQVksQ0FBQzFGLE9BQU8sQ0FBQyxDQUFDblUsTUFBTSxDQUFDcVosU0FBUyxFQUFFQyxPQUFPLENBQUM7SUFDdkQsQ0FBQztJQUVESyxZQUFZLENBQUN6ZSxTQUFTLENBQUN3ZSxTQUFTLEdBQUcsWUFBWTtNQUM3QyxLQUFLLElBQUlybUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ3VtQixhQUFhLENBQUMzZSxNQUFNLEVBQUU1SCxDQUFDLEVBQUUsRUFBRTtRQUNsRCxJQUFJLENBQUN1bUIsYUFBYSxDQUFDdm1CLENBQUMsQ0FBQyxDQUFDcW1CLFNBQVMsQ0FBQyxDQUFDO01BQ25DO0lBQ0YsQ0FBQztJQUVEQyxZQUFZLENBQUN6ZSxTQUFTLENBQUM2ZSxJQUFJLEdBQUcsVUFBVTVGLE9BQU8sRUFBRWtGLFNBQVMsRUFBRUMsT0FBTyxFQUFFO01BQ25FLElBQUlRLEVBQUUsR0FBRyxJQUFJLENBQUNELFlBQVksQ0FBQzFGLE9BQU8sQ0FBQztNQUNuQyxJQUFJNkYsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQWEvbUIsQ0FBQyxFQUFFO1FBQzdCNm1CLEVBQUUsQ0FBQzlaLE1BQU0sQ0FBQ3FaLFNBQVMsRUFBRVcsV0FBVyxDQUFDO1FBQ2pDVixPQUFPLENBQUNybUIsQ0FBQyxDQUFDO01BQ1osQ0FBQztNQUNENm1CLEVBQUUsQ0FBQzdaLElBQUksQ0FBQ29aLFNBQVMsRUFBRVcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRC9DLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHMkMsWUFBWTtFQUU3QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTM0ksT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDekMsWUFBWTs7SUFFWkMsTUFBTSxDQUFDRCxPQUFPLEdBQUksWUFBWTtNQUM1QixTQUFTaUQsRUFBRUEsQ0FBQSxFQUFHO1FBQ1osT0FBT3pOLElBQUksQ0FBQ3BRLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR29RLElBQUksQ0FBQzBOLE1BQU0sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQ3BDemQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUNaMGQsU0FBUyxDQUFDLENBQUMsQ0FBQztNQUMxQjtNQUNBLE9BQU8sWUFBWTtRQUNqQixPQUFPRixFQUFFLENBQUMsQ0FBQyxHQUFHQSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0EsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdBLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUMzQ0EsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdBLEVBQUUsQ0FBQyxDQUFDLEdBQUdBLEVBQUUsQ0FBQyxDQUFDLEdBQUdBLEVBQUUsQ0FBQyxDQUFDO01BQ3hDLENBQUM7SUFDSCxDQUFDLENBQUUsQ0FBQztFQUVKLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVNqSixPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUN6QyxZQUFZOztJQUVaLElBQUl2YixHQUFHLEdBQUd1VixPQUFPLENBQUMsU0FBUyxDQUFDO01BQ3hCaGUsQ0FBQyxHQUFHZ2UsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUV4QmdHLE9BQU8sQ0FBQ29ELEtBQUssR0FBRyxVQUFVaG1CLENBQUMsRUFBRTtNQUMzQixPQUFPa1EsUUFBUSxDQUFDbFEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVENGlCLE9BQU8sQ0FBQ3FELEtBQUssR0FBRyxVQUFVN0IsR0FBRyxFQUFFO01BQzdCLElBQUlBLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDaEIsT0FBTyxJQUFJO01BQ2IsQ0FBQyxNQUFNLElBQUk1UyxPQUFBLENBQU80UyxHQUFHLE1BQUssUUFBUSxFQUFFO1FBQ2xDLElBQUk4QixNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJclgsR0FBRyxJQUFJdVYsR0FBRyxFQUFFO1VBQ25COEIsTUFBTSxDQUFDclgsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDb1gsS0FBSyxDQUFDN0IsR0FBRyxDQUFDdlYsR0FBRyxDQUFDLENBQUM7UUFDcEM7UUFDQSxPQUFPcVgsTUFBTTtNQUNmLENBQUMsTUFBTTtRQUNMLE9BQU85QixHQUFHO01BQ1o7SUFDRixDQUFDO0lBRUR4QixPQUFPLENBQUM3YixNQUFNLEdBQUcsVUFBVW9mLFFBQVEsRUFBRUMsTUFBTSxFQUFFO01BQzNDLElBQUlGLE1BQU0sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsUUFBUSxDQUFDO01BQ2pDLEtBQUssSUFBSXRYLEdBQUcsSUFBSXVYLE1BQU0sRUFBRTtRQUN0QkYsTUFBTSxDQUFDclgsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDb1gsS0FBSyxDQUFDRyxNQUFNLENBQUN2WCxHQUFHLENBQUMsQ0FBQztNQUN2QztNQUNBLE9BQU9xWCxNQUFNO0lBQ2YsQ0FBQztJQUVEdEQsT0FBTyxDQUFDeUQsVUFBVSxHQUFHLFVBQVU1YixFQUFFLEVBQUU7TUFDakMsT0FBTzdMLENBQUMsQ0FBQzBsQixPQUFPLENBQUM3WixFQUFFLEVBQUUseUJBQXlCLENBQUMsSUFDeEM3TCxDQUFDLENBQUMwbEIsT0FBTyxDQUFDN1osRUFBRSxFQUFFLDBCQUEwQixDQUFDLElBQ3pDN0wsQ0FBQyxDQUFDMGxCLE9BQU8sQ0FBQzdaLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxJQUMzQzdMLENBQUMsQ0FBQzBsQixPQUFPLENBQUM3WixFQUFFLEVBQUUsMEJBQTBCLENBQUM7SUFDbEQsQ0FBQztJQUVEbVksT0FBTyxDQUFDMEQsZUFBZSxHQUFHLFVBQVV2RyxPQUFPLEVBQUU7TUFDM0MsSUFBSXdHLE9BQU8sR0FBR2xmLEdBQUcsQ0FBQ3NjLElBQUksQ0FBQzVELE9BQU8sQ0FBQztNQUMvQixLQUFLLElBQUk5Z0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHc25CLE9BQU8sQ0FBQzFmLE1BQU0sRUFBRTVILENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUlpaUIsU0FBUyxHQUFHcUYsT0FBTyxDQUFDdG5CLENBQUMsQ0FBQztRQUMxQixJQUFJaWlCLFNBQVMsQ0FBQ2pYLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDbEM1QyxHQUFHLENBQUNrRSxNQUFNLENBQUN3VSxPQUFPLEVBQUVtQixTQUFTLENBQUM7UUFDaEM7TUFDRjtJQUNGLENBQUM7SUFFRDBCLE9BQU8sQ0FBQzRELFVBQVUsR0FBRyxVQUFVekcsT0FBTyxFQUFFO01BQ3RDLE9BQU8sSUFBSSxDQUFDaUcsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQ29TLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUNuQyxJQUFJLENBQUNpRyxLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDb1MsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEdBQ3pDLElBQUksQ0FBQ2lHLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUNvUyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUMsR0FDMUMsSUFBSSxDQUFDaUcsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQ29TLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEdBQzdDLElBQUksQ0FBQ2lHLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUNvUyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ2QyxPQUFPLENBQUM2RCxjQUFjLEdBQUcsVUFBVTFHLE9BQU8sRUFBRTJHLElBQUksRUFBRTtNQUNoRHJmLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQ3NXLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztNQUNuQyxJQUFJLE9BQU8yRyxJQUFJLEtBQUssV0FBVyxFQUFFO1FBQy9CcmYsR0FBRyxDQUFDb0MsR0FBRyxDQUFDc1csT0FBTyxFQUFFLEtBQUssR0FBRzJHLElBQUksQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDTHJmLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQ3NXLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDeEIxWSxHQUFHLENBQUNvQyxHQUFHLENBQUNzVyxPQUFPLEVBQUUsTUFBTSxDQUFDO01BQzFCO0lBQ0YsQ0FBQztJQUVENkMsT0FBTyxDQUFDK0QsYUFBYSxHQUFHLFVBQVU1RyxPQUFPLEVBQUUyRyxJQUFJLEVBQUU7TUFDL0NyZixHQUFHLENBQUNrRSxNQUFNLENBQUN3VSxPQUFPLEVBQUUsaUJBQWlCLENBQUM7TUFDdEMsSUFBSSxPQUFPMkcsSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUMvQnJmLEdBQUcsQ0FBQ2tFLE1BQU0sQ0FBQ3dVLE9BQU8sRUFBRSxLQUFLLEdBQUcyRyxJQUFJLENBQUM7TUFDbkMsQ0FBQyxNQUFNO1FBQ0xyZixHQUFHLENBQUNrRSxNQUFNLENBQUN3VSxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQzNCMVksR0FBRyxDQUFDa0UsTUFBTSxDQUFDd1UsT0FBTyxFQUFFLE1BQU0sQ0FBQztNQUM3QjtJQUNGLENBQUM7SUFFRDZDLE9BQU8sQ0FBQ2dFLEdBQUcsR0FBRztNQUNaQyxRQUFRLEVBQUUsa0JBQWtCLElBQUkxTyxRQUFRLENBQUNxSSxlQUFlLENBQUN0WCxLQUFLO01BQzlENGQsYUFBYSxFQUFJLGNBQWMsSUFBSTFaLE1BQU0sSUFBS0EsTUFBTSxDQUFDMlosYUFBYSxJQUFJNU8sUUFBUSxZQUFZL0ssTUFBTSxDQUFDMlosYUFBYztNQUMvR0MsaUJBQWlCLEVBQUU1WixNQUFNLENBQUM2WixTQUFTLENBQUNDLGdCQUFnQixLQUFLO0lBQzNELENBQUM7RUFFRCxDQUFDLEVBQUM7SUFBQyxTQUFTLEVBQUMsQ0FBQztJQUFDLE9BQU8sRUFBQztFQUFDLENBQUMsQ0FBQztFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVN0SyxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUM5RCxZQUFZOztJQUVaLElBQUlTLE9BQU8sR0FBR3pHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztNQUNyQ3NHLFVBQVUsR0FBR3RHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztNQUMzQ3dHLE1BQU0sR0FBR3hHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUV2Q2lHLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHO01BQ2ZNLFVBQVUsRUFBRUEsVUFBVTtNQUN0QkUsTUFBTSxFQUFFQSxNQUFNO01BQ2RDLE9BQU8sRUFBRUE7SUFDWCxDQUFDO0VBRUQsQ0FBQyxFQUFDO0lBQUMsa0JBQWtCLEVBQUMsQ0FBQztJQUFDLHFCQUFxQixFQUFDLEVBQUU7SUFBQyxpQkFBaUIsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVN6RyxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUMzRyxZQUFZOztJQUVaQyxNQUFNLENBQUNELE9BQU8sR0FBRztNQUNmdUUsa0JBQWtCLEVBQUUsSUFBSTtNQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtNQUN4QkMsbUJBQW1CLEVBQUUsQ0FBQztNQUN0QkMsbUJBQW1CLEVBQUUsQ0FBQztNQUN0QkMsc0JBQXNCLEVBQUUsSUFBSTtNQUM1QnRMLGVBQWUsRUFBRSxLQUFLO01BQ3RCdUwsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLGdCQUFnQixFQUFFLElBQUk7TUFDdEJDLGdCQUFnQixFQUFFLEtBQUs7TUFDdkJDLFdBQVcsRUFBRSxJQUFJO01BQ2pCQyxrQkFBa0IsRUFBRSxLQUFLO01BQ3pCeEssZ0JBQWdCLEVBQUUsS0FBSztNQUN2QnlLLFVBQVUsRUFBRSxDQUFDO01BQ2JDLEtBQUssRUFBRTtJQUNULENBQUM7RUFFRCxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTbEwsT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDekMsWUFBWTs7SUFFWixJQUFJaGtCLENBQUMsR0FBR2dlLE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFDekI1ZCxDQUFDLEdBQUc0ZCxPQUFPLENBQUMsZUFBZSxDQUFDO01BQzVCbUwsU0FBUyxHQUFHbkwsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUV0Q2lHLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHLFVBQVU3QyxPQUFPLEVBQUU7TUFDbEMsSUFBSTlnQixDQUFDLEdBQUc4b0IsU0FBUyxDQUFDamdCLEdBQUcsQ0FBQ2lZLE9BQU8sQ0FBQztNQUU5QixJQUFJLENBQUM5Z0IsQ0FBQyxFQUFFO1FBQ047TUFDRjtNQUVBQSxDQUFDLENBQUMrb0IsS0FBSyxDQUFDMUMsU0FBUyxDQUFDLENBQUM7TUFDbkIxbUIsQ0FBQyxDQUFDMk0sTUFBTSxDQUFDdE0sQ0FBQyxDQUFDZ3BCLFVBQVUsQ0FBQztNQUN0QnJwQixDQUFDLENBQUMyTSxNQUFNLENBQUN0TSxDQUFDLENBQUNpcEIsVUFBVSxDQUFDO01BQ3RCdHBCLENBQUMsQ0FBQzJNLE1BQU0sQ0FBQ3RNLENBQUMsQ0FBQ2twQixjQUFjLENBQUM7TUFDMUJ2cEIsQ0FBQyxDQUFDMk0sTUFBTSxDQUFDdE0sQ0FBQyxDQUFDbXBCLGNBQWMsQ0FBQztNQUMxQnBwQixDQUFDLENBQUNzbkIsZUFBZSxDQUFDdkcsT0FBTyxDQUFDO01BRTFCZ0ksU0FBUyxDQUFDeGMsTUFBTSxDQUFDd1UsT0FBTyxDQUFDO0lBQzNCLENBQUM7RUFFRCxDQUFDLEVBQUM7SUFBQyxZQUFZLEVBQUMsQ0FBQztJQUFDLGVBQWUsRUFBQyxDQUFDO0lBQUMsYUFBYSxFQUFDO0VBQUUsQ0FBQyxDQUFDO0VBQUMsRUFBRSxFQUFDLENBQUMsVUFBU25ELE9BQU8sRUFBQ2lHLE1BQU0sRUFBQ0QsT0FBTyxFQUFDO0lBQzNGLFlBQVk7O0lBRVosSUFBSTVqQixDQUFDLEdBQUc0ZCxPQUFPLENBQUMsa0JBQWtCLENBQUM7TUFDL0JtTCxTQUFTLEdBQUduTCxPQUFPLENBQUMsY0FBYyxDQUFDO01BQ25DeUwsY0FBYyxHQUFHekwsT0FBTyxDQUFDLG9CQUFvQixDQUFDO01BQzlDMEwsWUFBWSxHQUFHMUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTlDLFNBQVMyTCxvQkFBb0JBLENBQUN4SSxPQUFPLEVBQUU5Z0IsQ0FBQyxFQUFFO01BQ3hDLFNBQVN1cEIsVUFBVUEsQ0FBQy9kLEVBQUUsRUFBRTtRQUN0QixPQUFPQSxFQUFFLENBQUNnVyxxQkFBcUIsQ0FBQyxDQUFDO01BQ25DO01BQ0EsSUFBSWhELGVBQWUsR0FBR3JRLE1BQU0sQ0FBQzVCLEtBQUssQ0FBQzFFLFNBQVMsQ0FBQzJXLGVBQWUsQ0FBQzVSLElBQUk7TUFFakUsSUFBSTVNLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ2dQLHNCQUFzQixFQUFFO1FBQ3JDdG9CLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNpcEIsVUFBVSxFQUFFLE9BQU8sRUFBRXpLLGVBQWUsQ0FBQztNQUN0RDtNQUNBeGUsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQzVNLENBQUMsQ0FBQ21wQixjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVV2cEIsQ0FBQyxFQUFFO1FBQ25ELElBQUk0cEIscUJBQXFCLEdBQUd6cEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQy9tQixDQUFDLENBQUN5cEIsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUlDLFdBQVcsR0FBRzFwQixDQUFDLENBQUMycEIsVUFBVSxJQUFJL3BCLENBQUMsQ0FBQ21OLEtBQUssR0FBR29CLE1BQU0sQ0FBQ3NULFdBQVcsR0FBRzhILFVBQVUsQ0FBQ3ZwQixDQUFDLENBQUNtcEIsY0FBYyxDQUFDLENBQUMvYixHQUFHLEdBQUdvYyxxQkFBcUIsQ0FBQztRQUMxSCxJQUFJSSxjQUFjLEdBQUc1cEIsQ0FBQyxDQUFDMnBCLFVBQVUsSUFBSTNwQixDQUFDLENBQUM2cEIsV0FBVyxHQUFHN3BCLENBQUMsQ0FBQ3lwQixnQkFBZ0IsQ0FBQztRQUN4RSxJQUFJSyxhQUFhLEdBQUdKLFdBQVcsR0FBR0UsY0FBYztRQUVoRCxJQUFJRSxhQUFhLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCQSxhQUFhLEdBQUcsQ0FBQztRQUNuQixDQUFDLE1BQU0sSUFBSUEsYUFBYSxHQUFHLENBQUMsRUFBRTtVQUM1QkEsYUFBYSxHQUFHLENBQUM7UUFDbkI7UUFFQVQsWUFBWSxDQUFDdkksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOWdCLENBQUMsQ0FBQytwQixhQUFhLEdBQUcvcEIsQ0FBQyxDQUFDZ3FCLGVBQWUsSUFBSUYsYUFBYSxDQUFDO1FBQ25GVixjQUFjLENBQUN0SSxPQUFPLENBQUM7UUFFdkJsaEIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDO01BRUYsSUFBSXhlLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ2dQLHNCQUFzQixFQUFFO1FBQ3JDdG9CLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNncEIsVUFBVSxFQUFFLE9BQU8sRUFBRXhLLGVBQWUsQ0FBQztNQUN0RDtNQUNBeGUsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQzVNLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVV0cEIsQ0FBQyxFQUFFO1FBQ25ELElBQUk0cEIscUJBQXFCLEdBQUd6cEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQy9tQixDQUFDLENBQUNpcUIsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJQyxZQUFZLEdBQUdscUIsQ0FBQyxDQUFDbXFCLFVBQVUsSUFBSXZxQixDQUFDLENBQUNrTixLQUFLLEdBQUdxQixNQUFNLENBQUN3VCxXQUFXLEdBQUc0SCxVQUFVLENBQUN2cEIsQ0FBQyxDQUFDa3BCLGNBQWMsQ0FBQyxDQUFDL2IsSUFBSSxHQUFHcWMscUJBQXFCLENBQUM7UUFDNUgsSUFBSVksZUFBZSxHQUFHcHFCLENBQUMsQ0FBQ21xQixVQUFVLElBQUlucUIsQ0FBQyxDQUFDcXFCLFVBQVUsR0FBR3JxQixDQUFDLENBQUNpcUIsZUFBZSxDQUFDO1FBQ3ZFLElBQUlILGFBQWEsR0FBR0ksWUFBWSxHQUFHRSxlQUFlO1FBRWxELElBQUlOLGFBQWEsR0FBRyxDQUFDLEVBQUU7VUFDckJBLGFBQWEsR0FBRyxDQUFDO1FBQ25CLENBQUMsTUFBTSxJQUFJQSxhQUFhLEdBQUcsQ0FBQyxFQUFFO1VBQzVCQSxhQUFhLEdBQUcsQ0FBQztRQUNuQjtRQUVBVCxZQUFZLENBQUN2SSxPQUFPLEVBQUUsTUFBTSxFQUFHLENBQUM5Z0IsQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxJQUFJVCxhQUFhLEdBQUk5cEIsQ0FBQyxDQUFDd3FCLHdCQUF3QixDQUFDO1FBQ2pIcEIsY0FBYyxDQUFDdEksT0FBTyxDQUFDO1FBRXZCbGhCLENBQUMsQ0FBQzRlLGVBQWUsQ0FBQyxDQUFDO01BQ3JCLENBQUMsQ0FBQztJQUNKO0lBRUFvRixNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFO01BQ2xDLElBQUk5Z0IsQ0FBQyxHQUFHOG9CLFNBQVMsQ0FBQ2pnQixHQUFHLENBQUNpWSxPQUFPLENBQUM7TUFDOUJ3SSxvQkFBb0IsQ0FBQ3hJLE9BQU8sRUFBRTlnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGtCQUFrQixFQUFDLENBQUM7SUFBQyxjQUFjLEVBQUMsRUFBRTtJQUFDLG9CQUFvQixFQUFDLEVBQUU7SUFBQyxrQkFBa0IsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVMyZCxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUM5SCxZQUFZOztJQUVaLElBQUloa0IsQ0FBQyxHQUFHZ2UsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUM1QjVkLENBQUMsR0FBRzRkLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztNQUMvQm1MLFNBQVMsR0FBR25MLE9BQU8sQ0FBQyxjQUFjLENBQUM7TUFDbkN5TCxjQUFjLEdBQUd6TCxPQUFPLENBQUMsb0JBQW9CLENBQUM7TUFDOUMwTCxZQUFZLEdBQUcxTCxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFFOUMsU0FBUzhNLHVCQUF1QkEsQ0FBQzNKLE9BQU8sRUFBRTlnQixDQUFDLEVBQUU7TUFDM0MsSUFBSTBxQixXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJcGYsWUFBWSxHQUFHLElBQUk7TUFFdkIsU0FBU3FmLGdCQUFnQkEsQ0FBQ0MsTUFBTSxFQUFFO1FBQ2hDLElBQUlDLE9BQU8sR0FBR0gsV0FBVyxHQUFJRSxNQUFNLEdBQUc1cUIsQ0FBQyxDQUFDbXFCLFVBQVc7UUFDbkQsSUFBSVcsT0FBTyxHQUFHM1IsSUFBSSxDQUFDeEcsR0FBRyxDQUFDLENBQUMsRUFBRTNTLENBQUMsQ0FBQ2twQixjQUFjLENBQUMxSCxxQkFBcUIsQ0FBQyxDQUFDLENBQUNyVSxJQUFJLENBQUMsR0FBSW5OLENBQUMsQ0FBQ21xQixVQUFVLElBQUlucUIsQ0FBQyxDQUFDcXFCLFVBQVUsR0FBR3JxQixDQUFDLENBQUNpcUIsZUFBZSxDQUFFO1FBRTlILElBQUlZLE9BQU8sR0FBRyxDQUFDLEVBQUU7VUFDZjdxQixDQUFDLENBQUMrcUIsY0FBYyxHQUFHLENBQUM7UUFDdEIsQ0FBQyxNQUFNLElBQUlGLE9BQU8sR0FBR0MsT0FBTyxFQUFFO1VBQzVCOXFCLENBQUMsQ0FBQytxQixjQUFjLEdBQUdELE9BQU87UUFDNUIsQ0FBQyxNQUFNO1VBQ0w5cUIsQ0FBQyxDQUFDK3FCLGNBQWMsR0FBR0YsT0FBTztRQUM1QjtRQUVBLElBQUl2YyxVQUFVLEdBQUd2TyxDQUFDLENBQUNnbkIsS0FBSyxDQUFDL21CLENBQUMsQ0FBQytxQixjQUFjLElBQUkvcUIsQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxDQUFDLElBQUl2cUIsQ0FBQyxDQUFDdXFCLGNBQWMsR0FBSXZxQixDQUFDLENBQUNtcUIsVUFBVSxHQUFHbnFCLENBQUMsQ0FBQ2lxQixlQUFnQixDQUFDLENBQUMsR0FBR2pxQixDQUFDLENBQUN3cUIsd0JBQXdCO1FBQ3ZLbkIsWUFBWSxDQUFDdkksT0FBTyxFQUFFLE1BQU0sRUFBRXhTLFVBQVUsQ0FBQztNQUMzQztNQUVBLElBQUkwYyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFhcHJCLENBQUMsRUFBRTtRQUNsQytxQixnQkFBZ0IsQ0FBQy9xQixDQUFDLENBQUNrTixLQUFLLEdBQUd4QixZQUFZLENBQUM7UUFDeEM4ZCxjQUFjLENBQUN0SSxPQUFPLENBQUM7UUFDdkJsaEIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7UUFDbkI1ZSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztNQUNwQixDQUFDO01BRUQsSUFBSTRNLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFlO1FBQy9CbHJCLENBQUMsQ0FBQzJuQixhQUFhLENBQUM1RyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQzdCOWdCLENBQUMsQ0FBQytvQixLQUFLLENBQUNwYyxNQUFNLENBQUMzTSxDQUFDLENBQUNzaEIsYUFBYSxFQUFFLFdBQVcsRUFBRTBKLGdCQUFnQixDQUFDO01BQ2hFLENBQUM7TUFFRGhyQixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDZ3BCLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVXBwQixDQUFDLEVBQUU7UUFDbkQwTCxZQUFZLEdBQUcxTCxDQUFDLENBQUNrTixLQUFLO1FBQ3RCNGQsV0FBVyxHQUFHM3FCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDZ3BCLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHaHBCLENBQUMsQ0FBQ21xQixVQUFVO1FBQ2pFcHFCLENBQUMsQ0FBQ3luQixjQUFjLENBQUMxRyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBRTlCOWdCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNzaEIsYUFBYSxFQUFFLFdBQVcsRUFBRTBKLGdCQUFnQixDQUFDO1FBQzVEaHJCLENBQUMsQ0FBQytvQixLQUFLLENBQUNyQyxJQUFJLENBQUMxbUIsQ0FBQyxDQUFDc2hCLGFBQWEsRUFBRSxTQUFTLEVBQUUySixjQUFjLENBQUM7UUFFeERyckIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7UUFDbkI1ZSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztNQUNwQixDQUFDLENBQUM7SUFDSjtJQUVBLFNBQVM2TSx1QkFBdUJBLENBQUNwSyxPQUFPLEVBQUU5Z0IsQ0FBQyxFQUFFO01BQzNDLElBQUltckIsVUFBVSxHQUFHLElBQUk7TUFDckIsSUFBSTVmLFlBQVksR0FBRyxJQUFJO01BRXZCLFNBQVM2ZixlQUFlQSxDQUFDQyxNQUFNLEVBQUU7UUFDL0IsSUFBSUMsTUFBTSxHQUFHSCxVQUFVLEdBQUlFLE1BQU0sR0FBR3JyQixDQUFDLENBQUMycEIsVUFBVztRQUNqRCxJQUFJNEIsTUFBTSxHQUFHcFMsSUFBSSxDQUFDeEcsR0FBRyxDQUFDLENBQUMsRUFBRTNTLENBQUMsQ0FBQ21wQixjQUFjLENBQUMzSCxxQkFBcUIsQ0FBQyxDQUFDLENBQUNwVSxHQUFHLENBQUMsR0FBSXBOLENBQUMsQ0FBQzJwQixVQUFVLElBQUkzcEIsQ0FBQyxDQUFDNnBCLFdBQVcsR0FBRzdwQixDQUFDLENBQUN5cEIsZ0JBQWdCLENBQUU7UUFFOUgsSUFBSTZCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDZHRyQixDQUFDLENBQUN3ckIsYUFBYSxHQUFHLENBQUM7UUFDckIsQ0FBQyxNQUFNLElBQUlGLE1BQU0sR0FBR0MsTUFBTSxFQUFFO1VBQzFCdnJCLENBQUMsQ0FBQ3dyQixhQUFhLEdBQUdELE1BQU07UUFDMUIsQ0FBQyxNQUFNO1VBQ0x2ckIsQ0FBQyxDQUFDd3JCLGFBQWEsR0FBR0YsTUFBTTtRQUMxQjtRQUVBLElBQUlqZCxTQUFTLEdBQUd0TyxDQUFDLENBQUNnbkIsS0FBSyxDQUFDL21CLENBQUMsQ0FBQ3dyQixhQUFhLElBQUl4ckIsQ0FBQyxDQUFDK3BCLGFBQWEsR0FBRy9wQixDQUFDLENBQUNncUIsZUFBZSxDQUFDLElBQUlocUIsQ0FBQyxDQUFDZ3FCLGVBQWUsR0FBSWhxQixDQUFDLENBQUMycEIsVUFBVSxHQUFHM3BCLENBQUMsQ0FBQ3lwQixnQkFBaUIsQ0FBQyxDQUFDO1FBQzVJSixZQUFZLENBQUN2SSxPQUFPLEVBQUUsS0FBSyxFQUFFelMsU0FBUyxDQUFDO01BQ3pDO01BRUEsSUFBSTJjLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQWFwckIsQ0FBQyxFQUFFO1FBQ2xDd3JCLGVBQWUsQ0FBQ3hyQixDQUFDLENBQUNtTixLQUFLLEdBQUd4QixZQUFZLENBQUM7UUFDdkM2ZCxjQUFjLENBQUN0SSxPQUFPLENBQUM7UUFDdkJsaEIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7UUFDbkI1ZSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztNQUNwQixDQUFDO01BRUQsSUFBSTRNLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFlO1FBQy9CbHJCLENBQUMsQ0FBQzJuQixhQUFhLENBQUM1RyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBQzdCOWdCLENBQUMsQ0FBQytvQixLQUFLLENBQUNwYyxNQUFNLENBQUMzTSxDQUFDLENBQUNzaEIsYUFBYSxFQUFFLFdBQVcsRUFBRTBKLGdCQUFnQixDQUFDO01BQ2hFLENBQUM7TUFFRGhyQixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDaXBCLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVXJwQixDQUFDLEVBQUU7UUFDbkQyTCxZQUFZLEdBQUczTCxDQUFDLENBQUNtTixLQUFLO1FBQ3RCb2UsVUFBVSxHQUFHcHJCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDaXBCLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHanBCLENBQUMsQ0FBQzJwQixVQUFVO1FBQy9ENXBCLENBQUMsQ0FBQ3luQixjQUFjLENBQUMxRyxPQUFPLEVBQUUsR0FBRyxDQUFDO1FBRTlCOWdCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNzaEIsYUFBYSxFQUFFLFdBQVcsRUFBRTBKLGdCQUFnQixDQUFDO1FBQzVEaHJCLENBQUMsQ0FBQytvQixLQUFLLENBQUNyQyxJQUFJLENBQUMxbUIsQ0FBQyxDQUFDc2hCLGFBQWEsRUFBRSxTQUFTLEVBQUUySixjQUFjLENBQUM7UUFFeERyckIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7UUFDbkI1ZSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztNQUNwQixDQUFDLENBQUM7SUFDSjtJQUVBdUYsTUFBTSxDQUFDRCxPQUFPLEdBQUcsVUFBVTdDLE9BQU8sRUFBRTtNQUNsQyxJQUFJOWdCLENBQUMsR0FBRzhvQixTQUFTLENBQUNqZ0IsR0FBRyxDQUFDaVksT0FBTyxDQUFDO01BQzlCMkosdUJBQXVCLENBQUMzSixPQUFPLEVBQUU5Z0IsQ0FBQyxDQUFDO01BQ25Da3JCLHVCQUF1QixDQUFDcEssT0FBTyxFQUFFOWdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0VBRUQsQ0FBQyxFQUFDO0lBQUMsZUFBZSxFQUFDLENBQUM7SUFBQyxrQkFBa0IsRUFBQyxDQUFDO0lBQUMsY0FBYyxFQUFDLEVBQUU7SUFBQyxvQkFBb0IsRUFBQyxFQUFFO0lBQUMsa0JBQWtCLEVBQUM7RUFBRSxDQUFDLENBQUM7RUFBQyxFQUFFLEVBQUMsQ0FBQyxVQUFTMmQsT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDaEosWUFBWTs7SUFFWixJQUFJNWpCLENBQUMsR0FBRzRkLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztNQUMvQmhlLENBQUMsR0FBR2dlLE9BQU8sQ0FBQyxlQUFlLENBQUM7TUFDNUJtTCxTQUFTLEdBQUduTCxPQUFPLENBQUMsY0FBYyxDQUFDO01BQ25DeUwsY0FBYyxHQUFHekwsT0FBTyxDQUFDLG9CQUFvQixDQUFDO01BQzlDMEwsWUFBWSxHQUFHMUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTlDLFNBQVM4TixtQkFBbUJBLENBQUMzSyxPQUFPLEVBQUU5Z0IsQ0FBQyxFQUFFO01BQ3ZDLElBQUkwckIsT0FBTyxHQUFHLEtBQUs7TUFDbkIxckIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ2tVLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWTtRQUM5QzRLLE9BQU8sR0FBRyxJQUFJO01BQ2hCLENBQUMsQ0FBQztNQUNGMXJCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVk7UUFDOUM0SyxPQUFPLEdBQUcsS0FBSztNQUNqQixDQUFDLENBQUM7TUFFRixJQUFJQyxhQUFhLEdBQUcsS0FBSztNQUN6QixTQUFTQyxvQkFBb0JBLENBQUNoQixNQUFNLEVBQUVTLE1BQU0sRUFBRTtRQUM1QyxJQUFJaGQsU0FBUyxHQUFHeVMsT0FBTyxDQUFDelMsU0FBUztRQUNqQyxJQUFJdWMsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNoQixJQUFJLENBQUM1cUIsQ0FBQyxDQUFDNnJCLGdCQUFnQixFQUFFO1lBQ3ZCLE9BQU8sS0FBSztVQUNkO1VBQ0EsSUFBS3hkLFNBQVMsS0FBSyxDQUFDLElBQUlnZCxNQUFNLEdBQUcsQ0FBQyxJQUFNaGQsU0FBUyxJQUFJck8sQ0FBQyxDQUFDK3BCLGFBQWEsR0FBRy9wQixDQUFDLENBQUNncUIsZUFBZSxJQUFJcUIsTUFBTSxHQUFHLENBQUUsRUFBRTtZQUN2RyxPQUFPLENBQUNyckIsQ0FBQyxDQUFDc1osUUFBUSxDQUFDNkUsZ0JBQWdCO1VBQ3JDO1FBQ0Y7UUFFQSxJQUFJN1AsVUFBVSxHQUFHd1MsT0FBTyxDQUFDeFMsVUFBVTtRQUNuQyxJQUFJK2MsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNoQixJQUFJLENBQUNyckIsQ0FBQyxDQUFDOHJCLGdCQUFnQixFQUFFO1lBQ3ZCLE9BQU8sS0FBSztVQUNkO1VBQ0EsSUFBS3hkLFVBQVUsS0FBSyxDQUFDLElBQUlzYyxNQUFNLEdBQUcsQ0FBQyxJQUFNdGMsVUFBVSxJQUFJdE8sQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxJQUFJSyxNQUFNLEdBQUcsQ0FBRSxFQUFFO1lBQ3ZHLE9BQU8sQ0FBQzVxQixDQUFDLENBQUNzWixRQUFRLENBQUM2RSxnQkFBZ0I7VUFDckM7UUFDRjtRQUNBLE9BQU8sSUFBSTtNQUNiO01BRUFuZSxDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDc2hCLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVTFoQixDQUFDLEVBQUU7UUFDcEQsSUFBSUEsQ0FBQyxDQUFDbXNCLGtCQUFrQixJQUFJbnNCLENBQUMsQ0FBQ21zQixrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7VUFDbEQ7UUFDRjtRQUVBLElBQUlDLE9BQU8sR0FBR3JzQixDQUFDLENBQUMwbEIsT0FBTyxDQUFDcmxCLENBQUMsQ0FBQ2dwQixVQUFVLEVBQUUsUUFBUSxDQUFDLElBQ2pDcnBCLENBQUMsQ0FBQzBsQixPQUFPLENBQUNybEIsQ0FBQyxDQUFDaXBCLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFFL0MsSUFBSSxDQUFDeUMsT0FBTyxJQUFJLENBQUNNLE9BQU8sRUFBRTtVQUN4QjtRQUNGO1FBRUEsSUFBSUMsYUFBYSxHQUFHL1MsUUFBUSxDQUFDK1MsYUFBYSxHQUFHL1MsUUFBUSxDQUFDK1MsYUFBYSxHQUFHanNCLENBQUMsQ0FBQ3NoQixhQUFhLENBQUMySyxhQUFhO1FBQ25HLElBQUlBLGFBQWEsRUFBRTtVQUNqQjtVQUNBLE9BQU9BLGFBQWEsQ0FBQ0MsVUFBVSxFQUFFO1lBQy9CRCxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDRCxhQUFhO1VBQ3hEO1VBQ0EsSUFBSWxzQixDQUFDLENBQUNxbkIsVUFBVSxDQUFDNkUsYUFBYSxDQUFDLEVBQUU7WUFDL0I7VUFDRjtRQUNGO1FBRUEsSUFBSXJCLE1BQU0sR0FBRyxDQUFDO1FBQ2QsSUFBSVMsTUFBTSxHQUFHLENBQUM7UUFFZCxRQUFRenJCLENBQUMsQ0FBQ3VzQixLQUFLO1VBQ2YsS0FBSyxFQUFFO1lBQUU7WUFDUHZCLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDWjtVQUNGLEtBQUssRUFBRTtZQUFFO1lBQ1BTLE1BQU0sR0FBRyxFQUFFO1lBQ1g7VUFDRixLQUFLLEVBQUU7WUFBRTtZQUNQVCxNQUFNLEdBQUcsRUFBRTtZQUNYO1VBQ0YsS0FBSyxFQUFFO1lBQUU7WUFDUFMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNaO1VBQ0YsS0FBSyxFQUFFO1lBQUU7WUFDUEEsTUFBTSxHQUFHLEVBQUU7WUFDWDtVQUNGLEtBQUssRUFBRTtZQUFFO1lBQ1AsSUFBSXpyQixDQUFDLENBQUN3c0IsUUFBUSxFQUFFO2NBQ2RmLE1BQU0sR0FBRyxFQUFFO1lBQ2IsQ0FBQyxNQUFNO2NBQ0xBLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDZDtZQUNBO1VBQ0YsS0FBSyxFQUFFO1lBQUU7WUFDUEEsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNaO1VBQ0YsS0FBSyxFQUFFO1lBQUU7WUFDUCxJQUFJenJCLENBQUMsQ0FBQ3lzQixPQUFPLEVBQUU7Y0FDYmhCLE1BQU0sR0FBRyxDQUFDcnJCLENBQUMsQ0FBQytwQixhQUFhO1lBQzNCLENBQUMsTUFBTTtjQUNMc0IsTUFBTSxHQUFHLENBQUNyckIsQ0FBQyxDQUFDZ3FCLGVBQWU7WUFDN0I7WUFDQTtVQUNGLEtBQUssRUFBRTtZQUFFO1lBQ1AsSUFBSXBxQixDQUFDLENBQUN5c0IsT0FBTyxFQUFFO2NBQ2JoQixNQUFNLEdBQUd2SyxPQUFPLENBQUN6UyxTQUFTO1lBQzVCLENBQUMsTUFBTTtjQUNMZ2QsTUFBTSxHQUFHcnJCLENBQUMsQ0FBQ2dxQixlQUFlO1lBQzVCO1lBQ0E7VUFDRjtZQUNFO1FBQ0Y7UUFFQVgsWUFBWSxDQUFDdkksT0FBTyxFQUFFLEtBQUssRUFBRUEsT0FBTyxDQUFDelMsU0FBUyxHQUFHZ2QsTUFBTSxDQUFDO1FBQ3hEaEMsWUFBWSxDQUFDdkksT0FBTyxFQUFFLE1BQU0sRUFBRUEsT0FBTyxDQUFDeFMsVUFBVSxHQUFHc2MsTUFBTSxDQUFDO1FBQzFEeEIsY0FBYyxDQUFDdEksT0FBTyxDQUFDO1FBRXZCNkssYUFBYSxHQUFHQyxvQkFBb0IsQ0FBQ2hCLE1BQU0sRUFBRVMsTUFBTSxDQUFDO1FBQ3BELElBQUlNLGFBQWEsRUFBRTtVQUNqQi9yQixDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztRQUNwQjtNQUNGLENBQUMsQ0FBQztJQUNKO0lBRUF1RixNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFO01BQ2xDLElBQUk5Z0IsQ0FBQyxHQUFHOG9CLFNBQVMsQ0FBQ2pnQixHQUFHLENBQUNpWSxPQUFPLENBQUM7TUFDOUIySyxtQkFBbUIsQ0FBQzNLLE9BQU8sRUFBRTlnQixDQUFDLENBQUM7SUFDakMsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGVBQWUsRUFBQyxDQUFDO0lBQUMsa0JBQWtCLEVBQUMsQ0FBQztJQUFDLGNBQWMsRUFBQyxFQUFFO0lBQUMsb0JBQW9CLEVBQUMsRUFBRTtJQUFDLGtCQUFrQixFQUFDO0VBQUUsQ0FBQyxDQUFDO0VBQUMsRUFBRSxFQUFDLENBQUMsVUFBUzJkLE9BQU8sRUFBQ2lHLE1BQU0sRUFBQ0QsT0FBTyxFQUFDO0lBQ2hKLFlBQVk7O0lBRVosSUFBSW1GLFNBQVMsR0FBR25MLE9BQU8sQ0FBQyxjQUFjLENBQUM7TUFDbkN5TCxjQUFjLEdBQUd6TCxPQUFPLENBQUMsb0JBQW9CLENBQUM7TUFDOUMwTCxZQUFZLEdBQUcxTCxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFFOUMsU0FBUzJPLHFCQUFxQkEsQ0FBQ3hMLE9BQU8sRUFBRTlnQixDQUFDLEVBQUU7TUFDekMsSUFBSTJyQixhQUFhLEdBQUcsS0FBSztNQUV6QixTQUFTQyxvQkFBb0JBLENBQUNoQixNQUFNLEVBQUVTLE1BQU0sRUFBRTtRQUM1QyxJQUFJaGQsU0FBUyxHQUFHeVMsT0FBTyxDQUFDelMsU0FBUztRQUNqQyxJQUFJdWMsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNoQixJQUFJLENBQUM1cUIsQ0FBQyxDQUFDNnJCLGdCQUFnQixFQUFFO1lBQ3ZCLE9BQU8sS0FBSztVQUNkO1VBQ0EsSUFBS3hkLFNBQVMsS0FBSyxDQUFDLElBQUlnZCxNQUFNLEdBQUcsQ0FBQyxJQUFNaGQsU0FBUyxJQUFJck8sQ0FBQyxDQUFDK3BCLGFBQWEsR0FBRy9wQixDQUFDLENBQUNncUIsZUFBZSxJQUFJcUIsTUFBTSxHQUFHLENBQUUsRUFBRTtZQUN2RyxPQUFPLENBQUNyckIsQ0FBQyxDQUFDc1osUUFBUSxDQUFDNkUsZ0JBQWdCO1VBQ3JDO1FBQ0Y7UUFFQSxJQUFJN1AsVUFBVSxHQUFHd1MsT0FBTyxDQUFDeFMsVUFBVTtRQUNuQyxJQUFJK2MsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNoQixJQUFJLENBQUNyckIsQ0FBQyxDQUFDOHJCLGdCQUFnQixFQUFFO1lBQ3ZCLE9BQU8sS0FBSztVQUNkO1VBQ0EsSUFBS3hkLFVBQVUsS0FBSyxDQUFDLElBQUlzYyxNQUFNLEdBQUcsQ0FBQyxJQUFNdGMsVUFBVSxJQUFJdE8sQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxJQUFJSyxNQUFNLEdBQUcsQ0FBRSxFQUFFO1lBQ3ZHLE9BQU8sQ0FBQzVxQixDQUFDLENBQUNzWixRQUFRLENBQUM2RSxnQkFBZ0I7VUFDckM7UUFDRjtRQUNBLE9BQU8sSUFBSTtNQUNiO01BRUEsU0FBU29PLGlCQUFpQkEsQ0FBQzNzQixDQUFDLEVBQUU7UUFDNUIsSUFBSWdyQixNQUFNLEdBQUdockIsQ0FBQyxDQUFDZ3JCLE1BQU07UUFDckIsSUFBSVMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHenJCLENBQUMsQ0FBQ3lyQixNQUFNO1FBRTFCLElBQUksT0FBT1QsTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPUyxNQUFNLEtBQUssV0FBVyxFQUFFO1VBQ2xFO1VBQ0FULE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBR2hyQixDQUFDLENBQUM0c0IsV0FBVyxHQUFHLENBQUM7VUFDL0JuQixNQUFNLEdBQUd6ckIsQ0FBQyxDQUFDNnNCLFdBQVcsR0FBRyxDQUFDO1FBQzVCO1FBRUEsSUFBSTdzQixDQUFDLENBQUM4c0IsU0FBUyxJQUFJOXNCLENBQUMsQ0FBQzhzQixTQUFTLEtBQUssQ0FBQyxFQUFFO1VBQ3BDO1VBQ0E5QixNQUFNLElBQUksRUFBRTtVQUNaUyxNQUFNLElBQUksRUFBRTtRQUNkO1FBRUEsSUFBSVQsTUFBTSxLQUFLQSxNQUFNLElBQUlTLE1BQU0sS0FBS0EsTUFBTSxtQkFBa0I7VUFDMUQ7VUFDQVQsTUFBTSxHQUFHLENBQUM7VUFDVlMsTUFBTSxHQUFHenJCLENBQUMsQ0FBQytzQixVQUFVO1FBQ3ZCO1FBRUEsT0FBTyxDQUFDL0IsTUFBTSxFQUFFUyxNQUFNLENBQUM7TUFDekI7TUFFQSxTQUFTdUIsMEJBQTBCQSxDQUFDaEMsTUFBTSxFQUFFUyxNQUFNLEVBQUU7UUFDbEQsSUFBSXdCLGVBQWUsR0FBRy9MLE9BQU8sQ0FBQ2dNLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RCxJQUFJRCxlQUFlLEVBQUU7VUFDbkIsSUFBSUUsWUFBWSxHQUFHRixlQUFlLENBQUNHLFlBQVksR0FBR0gsZUFBZSxDQUFDSSxZQUFZO1VBQzlFLElBQUlGLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxFQUFFRixlQUFlLENBQUN4ZSxTQUFTLEtBQUssQ0FBQyxJQUFJZ2QsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUNoRCxFQUFFd0IsZUFBZSxDQUFDeGUsU0FBUyxLQUFLMGUsWUFBWSxJQUFJMUIsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2NBQy9ELE9BQU8sSUFBSTtZQUNiO1VBQ0Y7VUFDQSxJQUFJNkIsYUFBYSxHQUFHTCxlQUFlLENBQUN2ZSxVQUFVLEdBQUd1ZSxlQUFlLENBQUNySyxXQUFXO1VBQzVFLElBQUkwSyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksRUFBRUwsZUFBZSxDQUFDdmUsVUFBVSxLQUFLLENBQUMsSUFBSXNjLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFDakQsRUFBRWlDLGVBQWUsQ0FBQ3ZlLFVBQVUsS0FBSzRlLGFBQWEsSUFBSXRDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtjQUNqRSxPQUFPLElBQUk7WUFDYjtVQUNGO1FBQ0Y7UUFDQSxPQUFPLEtBQUs7TUFDZDtNQUVBLFNBQVN1QyxpQkFBaUJBLENBQUN2dEIsQ0FBQyxFQUFFO1FBQzVCLElBQUl3dEIsS0FBSyxHQUFHYixpQkFBaUIsQ0FBQzNzQixDQUFDLENBQUM7UUFFaEMsSUFBSWdyQixNQUFNLEdBQUd3QyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUkvQixNQUFNLEdBQUcrQixLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXJCLElBQUlSLDBCQUEwQixDQUFDaEMsTUFBTSxFQUFFUyxNQUFNLENBQUMsRUFBRTtVQUM5QztRQUNGO1FBRUFNLGFBQWEsR0FBRyxLQUFLO1FBQ3JCLElBQUksQ0FBQzNyQixDQUFDLENBQUNzWixRQUFRLENBQUNtUCxnQkFBZ0IsRUFBRTtVQUNoQztVQUNBO1VBQ0FZLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxLQUFLLEVBQUVBLE9BQU8sQ0FBQ3pTLFNBQVMsR0FBSWdkLE1BQU0sR0FBR3JyQixDQUFDLENBQUNzWixRQUFRLENBQUNzUCxVQUFXLENBQUM7VUFDbEZTLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxNQUFNLEVBQUVBLE9BQU8sQ0FBQ3hTLFVBQVUsR0FBSXNjLE1BQU0sR0FBRzVxQixDQUFDLENBQUNzWixRQUFRLENBQUNzUCxVQUFXLENBQUM7UUFDdEYsQ0FBQyxNQUFNLElBQUk1b0IsQ0FBQyxDQUFDNnJCLGdCQUFnQixJQUFJLENBQUM3ckIsQ0FBQyxDQUFDOHJCLGdCQUFnQixFQUFFO1VBQ3BEO1VBQ0E7VUFDQSxJQUFJVCxNQUFNLEVBQUU7WUFDVmhDLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxLQUFLLEVBQUVBLE9BQU8sQ0FBQ3pTLFNBQVMsR0FBSWdkLE1BQU0sR0FBR3JyQixDQUFDLENBQUNzWixRQUFRLENBQUNzUCxVQUFXLENBQUM7VUFDcEYsQ0FBQyxNQUFNO1lBQ0xTLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxLQUFLLEVBQUVBLE9BQU8sQ0FBQ3pTLFNBQVMsR0FBSXVjLE1BQU0sR0FBRzVxQixDQUFDLENBQUNzWixRQUFRLENBQUNzUCxVQUFXLENBQUM7VUFDcEY7VUFDQStDLGFBQWEsR0FBRyxJQUFJO1FBQ3RCLENBQUMsTUFBTSxJQUFJM3JCLENBQUMsQ0FBQzhyQixnQkFBZ0IsSUFBSSxDQUFDOXJCLENBQUMsQ0FBQzZyQixnQkFBZ0IsRUFBRTtVQUNwRDtVQUNBO1VBQ0EsSUFBSWpCLE1BQU0sRUFBRTtZQUNWdkIsWUFBWSxDQUFDdkksT0FBTyxFQUFFLE1BQU0sRUFBRUEsT0FBTyxDQUFDeFMsVUFBVSxHQUFJc2MsTUFBTSxHQUFHNXFCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ3NQLFVBQVcsQ0FBQztVQUN0RixDQUFDLE1BQU07WUFDTFMsWUFBWSxDQUFDdkksT0FBTyxFQUFFLE1BQU0sRUFBRUEsT0FBTyxDQUFDeFMsVUFBVSxHQUFJK2MsTUFBTSxHQUFHcnJCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ3NQLFVBQVcsQ0FBQztVQUN0RjtVQUNBK0MsYUFBYSxHQUFHLElBQUk7UUFDdEI7UUFFQXZDLGNBQWMsQ0FBQ3RJLE9BQU8sQ0FBQztRQUV2QjZLLGFBQWEsR0FBSUEsYUFBYSxJQUFJQyxvQkFBb0IsQ0FBQ2hCLE1BQU0sRUFBRVMsTUFBTSxDQUFFO1FBQ3ZFLElBQUlNLGFBQWEsRUFBRTtVQUNqQi9yQixDQUFDLENBQUM0ZSxlQUFlLENBQUMsQ0FBQztVQUNuQjVlLENBQUMsQ0FBQ3llLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCO01BQ0Y7TUFFQSxJQUFJLE9BQU9sUSxNQUFNLENBQUNrZixPQUFPLEtBQUssV0FBVyxFQUFFO1FBQ3pDcnRCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsT0FBTyxFQUFFcU0saUJBQWlCLENBQUM7TUFDbkQsQ0FBQyxNQUFNLElBQUksT0FBT2hmLE1BQU0sQ0FBQ21mLFlBQVksS0FBSyxXQUFXLEVBQUU7UUFDckR0dEIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ2tVLE9BQU8sRUFBRSxZQUFZLEVBQUVxTSxpQkFBaUIsQ0FBQztNQUN4RDtJQUNGO0lBRUF2SixNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFO01BQ2xDLElBQUk5Z0IsQ0FBQyxHQUFHOG9CLFNBQVMsQ0FBQ2pnQixHQUFHLENBQUNpWSxPQUFPLENBQUM7TUFDOUJ3TCxxQkFBcUIsQ0FBQ3hMLE9BQU8sRUFBRTlnQixDQUFDLENBQUM7SUFDbkMsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGNBQWMsRUFBQyxFQUFFO0lBQUMsb0JBQW9CLEVBQUMsRUFBRTtJQUFDLGtCQUFrQixFQUFDO0VBQUUsQ0FBQyxDQUFDO0VBQUMsRUFBRSxFQUFDLENBQUMsVUFBUzJkLE9BQU8sRUFBQ2lHLE1BQU0sRUFBQ0QsT0FBTyxFQUFDO0lBQ3pHLFlBQVk7O0lBRVosSUFBSW1GLFNBQVMsR0FBR25MLE9BQU8sQ0FBQyxjQUFjLENBQUM7TUFDbkN5TCxjQUFjLEdBQUd6TCxPQUFPLENBQUMsb0JBQW9CLENBQUM7SUFFbEQsU0FBUzRQLHVCQUF1QkEsQ0FBQ3pNLE9BQU8sRUFBRTlnQixDQUFDLEVBQUU7TUFDM0NBLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVk7UUFDMUNzSSxjQUFjLENBQUN0SSxPQUFPLENBQUM7TUFDekIsQ0FBQyxDQUFDO0lBQ0o7SUFFQThDLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHLFVBQVU3QyxPQUFPLEVBQUU7TUFDbEMsSUFBSTlnQixDQUFDLEdBQUc4b0IsU0FBUyxDQUFDamdCLEdBQUcsQ0FBQ2lZLE9BQU8sQ0FBQztNQUM5QnlNLHVCQUF1QixDQUFDek0sT0FBTyxFQUFFOWdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0VBRUQsQ0FBQyxFQUFDO0lBQUMsY0FBYyxFQUFDLEVBQUU7SUFBQyxvQkFBb0IsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVMyZCxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUNuRixZQUFZOztJQUVaLElBQUk1akIsQ0FBQyxHQUFHNGQsT0FBTyxDQUFDLGtCQUFrQixDQUFDO01BQy9CbUwsU0FBUyxHQUFHbkwsT0FBTyxDQUFDLGNBQWMsQ0FBQztNQUNuQ3lMLGNBQWMsR0FBR3pMLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztNQUM5QzBMLFlBQVksR0FBRzFMLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUU5QyxTQUFTNlAsb0JBQW9CQSxDQUFDMU0sT0FBTyxFQUFFOWdCLENBQUMsRUFBRTtNQUN4QyxTQUFTeXRCLFlBQVlBLENBQUEsRUFBRztRQUN0QixJQUFJQyxTQUFTLEdBQUd2ZixNQUFNLENBQUN3ZixZQUFZLEdBQUd4ZixNQUFNLENBQUN3ZixZQUFZLENBQUMsQ0FBQyxHQUMzQ3pVLFFBQVEsQ0FBQ3lVLFlBQVksR0FBR3pVLFFBQVEsQ0FBQ3lVLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUNwRSxJQUFJRCxTQUFTLENBQUN0a0IsUUFBUSxDQUFDLENBQUMsQ0FBQ3hCLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDckMsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxNQUFNO1VBQ0wsT0FBTzhsQixTQUFTLENBQUNFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsdUJBQXVCO1FBQ3hEO01BQ0Y7TUFFQSxJQUFJQyxhQUFhLEdBQUcsSUFBSTtNQUN4QixJQUFJQyxVQUFVLEdBQUc7UUFBQzNnQixHQUFHLEVBQUUsQ0FBQztRQUFFRCxJQUFJLEVBQUU7TUFBQyxDQUFDO01BQ2xDLFNBQVNxYSxjQUFjQSxDQUFBLEVBQUc7UUFDeEIsSUFBSSxDQUFDc0csYUFBYSxFQUFFO1VBQ2xCQSxhQUFhLEdBQUdFLFdBQVcsQ0FBQyxZQUFZO1lBQ3RDLElBQUksQ0FBQ2xGLFNBQVMsQ0FBQ2pnQixHQUFHLENBQUNpWSxPQUFPLENBQUMsRUFBRTtjQUMzQm1OLGFBQWEsQ0FBQ0gsYUFBYSxDQUFDO2NBQzVCO1lBQ0Y7WUFFQXpFLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxLQUFLLEVBQUVBLE9BQU8sQ0FBQ3pTLFNBQVMsR0FBRzBmLFVBQVUsQ0FBQzNnQixHQUFHLENBQUM7WUFDaEVpYyxZQUFZLENBQUN2SSxPQUFPLEVBQUUsTUFBTSxFQUFFQSxPQUFPLENBQUN4UyxVQUFVLEdBQUd5ZixVQUFVLENBQUM1Z0IsSUFBSSxDQUFDO1lBQ25FaWMsY0FBYyxDQUFDdEksT0FBTyxDQUFDO1VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1Y7TUFDRjtNQUNBLFNBQVM0RyxhQUFhQSxDQUFBLEVBQUc7UUFDdkIsSUFBSW9HLGFBQWEsRUFBRTtVQUNqQkcsYUFBYSxDQUFDSCxhQUFhLENBQUM7VUFDNUJBLGFBQWEsR0FBRyxJQUFJO1FBQ3RCO1FBQ0EvdEIsQ0FBQyxDQUFDMm5CLGFBQWEsQ0FBQzVHLE9BQU8sQ0FBQztNQUMxQjtNQUVBLElBQUlvTixVQUFVLEdBQUcsS0FBSztNQUN0Qmx1QixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDc2hCLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxZQUFZO1FBQzNELElBQUlSLE9BQU8sQ0FBQ3FCLFFBQVEsQ0FBQ3NMLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNwQ1MsVUFBVSxHQUFHLElBQUk7UUFDbkIsQ0FBQyxNQUFNO1VBQ0xBLFVBQVUsR0FBRyxLQUFLO1VBQ2xCeEcsYUFBYSxDQUFDLENBQUM7UUFDakI7TUFDRixDQUFDLENBQUM7TUFDRjFuQixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDdUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZO1FBQzFDLElBQUkrZixVQUFVLEVBQUU7VUFDZEEsVUFBVSxHQUFHLEtBQUs7VUFDbEJ4RyxhQUFhLENBQUMsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQztNQUVGMW5CLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUN1QixNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVV2TyxDQUFDLEVBQUU7UUFDN0MsSUFBSXN1QixVQUFVLEVBQUU7VUFDZCxJQUFJQyxhQUFhLEdBQUc7WUFBQ3B0QixDQUFDLEVBQUVuQixDQUFDLENBQUNrTixLQUFLO1lBQUU5TCxDQUFDLEVBQUVwQixDQUFDLENBQUNtTjtVQUFLLENBQUM7VUFDNUMsSUFBSXFoQixpQkFBaUIsR0FBRztZQUN0QmpoQixJQUFJLEVBQUUyVCxPQUFPLENBQUM5UyxVQUFVO1lBQ3hCcWdCLEtBQUssRUFBRXZOLE9BQU8sQ0FBQzlTLFVBQVUsR0FBRzhTLE9BQU8sQ0FBQ3dOLFdBQVc7WUFDL0NsaEIsR0FBRyxFQUFFMFQsT0FBTyxDQUFDN1MsU0FBUztZQUN0QnNnQixNQUFNLEVBQUV6TixPQUFPLENBQUM3UyxTQUFTLEdBQUc2UyxPQUFPLENBQUMwTjtVQUN0QyxDQUFDO1VBRUQsSUFBSUwsYUFBYSxDQUFDcHRCLENBQUMsR0FBR3F0QixpQkFBaUIsQ0FBQ2poQixJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2hENGdCLFVBQVUsQ0FBQzVnQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCcE4sQ0FBQyxDQUFDeW5CLGNBQWMsQ0FBQzFHLE9BQU8sRUFBRSxHQUFHLENBQUM7VUFDaEMsQ0FBQyxNQUFNLElBQUlxTixhQUFhLENBQUNwdEIsQ0FBQyxHQUFHcXRCLGlCQUFpQixDQUFDQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3hETixVQUFVLENBQUM1Z0IsSUFBSSxHQUFHLENBQUM7WUFDbkJwTixDQUFDLENBQUN5bkIsY0FBYyxDQUFDMUcsT0FBTyxFQUFFLEdBQUcsQ0FBQztVQUNoQyxDQUFDLE1BQU07WUFDTGlOLFVBQVUsQ0FBQzVnQixJQUFJLEdBQUcsQ0FBQztVQUNyQjtVQUVBLElBQUlnaEIsYUFBYSxDQUFDbnRCLENBQUMsR0FBR290QixpQkFBaUIsQ0FBQ2hoQixHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUlnaEIsaUJBQWlCLENBQUNoaEIsR0FBRyxHQUFHLENBQUMsR0FBRytnQixhQUFhLENBQUNudEIsQ0FBQyxHQUFHLENBQUMsRUFBRTtjQUNuRCtzQixVQUFVLENBQUMzZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLE1BQU07Y0FDTDJnQixVQUFVLENBQUMzZ0IsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN0QjtZQUNBck4sQ0FBQyxDQUFDeW5CLGNBQWMsQ0FBQzFHLE9BQU8sRUFBRSxHQUFHLENBQUM7VUFDaEMsQ0FBQyxNQUFNLElBQUlxTixhQUFhLENBQUNudEIsQ0FBQyxHQUFHb3RCLGlCQUFpQixDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pELElBQUlKLGFBQWEsQ0FBQ250QixDQUFDLEdBQUdvdEIsaUJBQWlCLENBQUNHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2NBQ3REUixVQUFVLENBQUMzZ0IsR0FBRyxHQUFHLENBQUM7WUFDcEIsQ0FBQyxNQUFNO2NBQ0wyZ0IsVUFBVSxDQUFDM2dCLEdBQUcsR0FBRyxFQUFFO1lBQ3JCO1lBQ0FyTixDQUFDLENBQUN5bkIsY0FBYyxDQUFDMUcsT0FBTyxFQUFFLEdBQUcsQ0FBQztVQUNoQyxDQUFDLE1BQU07WUFDTGlOLFVBQVUsQ0FBQzNnQixHQUFHLEdBQUcsQ0FBQztVQUNwQjtVQUVBLElBQUkyZ0IsVUFBVSxDQUFDM2dCLEdBQUcsS0FBSyxDQUFDLElBQUkyZ0IsVUFBVSxDQUFDNWdCLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDakR1YSxhQUFhLENBQUMsQ0FBQztVQUNqQixDQUFDLE1BQU07WUFDTEYsY0FBYyxDQUFDLENBQUM7VUFDbEI7UUFDRjtNQUNGLENBQUMsQ0FBQztJQUNKO0lBRUE1RCxNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFO01BQ2xDLElBQUk5Z0IsQ0FBQyxHQUFHOG9CLFNBQVMsQ0FBQ2pnQixHQUFHLENBQUNpWSxPQUFPLENBQUM7TUFDOUIwTSxvQkFBb0IsQ0FBQzFNLE9BQU8sRUFBRTlnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGtCQUFrQixFQUFDLENBQUM7SUFBQyxjQUFjLEVBQUMsRUFBRTtJQUFDLG9CQUFvQixFQUFDLEVBQUU7SUFBQyxrQkFBa0IsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVMyZCxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUM5SCxZQUFZOztJQUVaLElBQUltRixTQUFTLEdBQUduTCxPQUFPLENBQUMsY0FBYyxDQUFDO01BQ25DeUwsY0FBYyxHQUFHekwsT0FBTyxDQUFDLG9CQUFvQixDQUFDO01BQzlDMEwsWUFBWSxHQUFHMUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTlDLFNBQVM4USxnQkFBZ0JBLENBQUMzTixPQUFPLEVBQUU5Z0IsQ0FBQyxFQUFFNm5CLGFBQWEsRUFBRUUsaUJBQWlCLEVBQUU7TUFDdEUsU0FBUzZELG9CQUFvQkEsQ0FBQ2hCLE1BQU0sRUFBRVMsTUFBTSxFQUFFO1FBQzVDLElBQUloZCxTQUFTLEdBQUd5UyxPQUFPLENBQUN6UyxTQUFTO1FBQ2pDLElBQUlDLFVBQVUsR0FBR3dTLE9BQU8sQ0FBQ3hTLFVBQVU7UUFDbkMsSUFBSW9nQixVQUFVLEdBQUd2VixJQUFJLENBQUNqRixHQUFHLENBQUMwVyxNQUFNLENBQUM7UUFDakMsSUFBSStELFVBQVUsR0FBR3hWLElBQUksQ0FBQ2pGLEdBQUcsQ0FBQ21YLE1BQU0sQ0FBQztRQUVqQyxJQUFJc0QsVUFBVSxHQUFHRCxVQUFVLEVBQUU7VUFDM0I7O1VBRUEsSUFBTXJELE1BQU0sR0FBRyxDQUFDLElBQU1oZCxTQUFTLEtBQUtyTyxDQUFDLENBQUMrcEIsYUFBYSxHQUFHL3BCLENBQUMsQ0FBQ2dxQixlQUFnQixJQUNsRXFCLE1BQU0sR0FBRyxDQUFDLElBQU1oZCxTQUFTLEtBQUssQ0FBRyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQ3JPLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ2tQLGdCQUFnQjtVQUNyQztRQUNGLENBQUMsTUFBTSxJQUFJa0csVUFBVSxHQUFHQyxVQUFVLEVBQUU7VUFDbEM7O1VBRUEsSUFBTS9ELE1BQU0sR0FBRyxDQUFDLElBQU10YyxVQUFVLEtBQUt0TyxDQUFDLENBQUNzcUIsWUFBWSxHQUFHdHFCLENBQUMsQ0FBQ3VxQixjQUFlLElBQ2pFSyxNQUFNLEdBQUcsQ0FBQyxJQUFNdGMsVUFBVSxLQUFLLENBQUcsRUFBRTtZQUN4QyxPQUFPLENBQUN0TyxDQUFDLENBQUNzWixRQUFRLENBQUNrUCxnQkFBZ0I7VUFDckM7UUFDRjtRQUVBLE9BQU8sSUFBSTtNQUNiO01BRUEsU0FBU29HLGNBQWNBLENBQUNDLFdBQVcsRUFBRUMsV0FBVyxFQUFFO1FBQ2hEekYsWUFBWSxDQUFDdkksT0FBTyxFQUFFLEtBQUssRUFBRUEsT0FBTyxDQUFDelMsU0FBUyxHQUFHeWdCLFdBQVcsQ0FBQztRQUM3RHpGLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxNQUFNLEVBQUVBLE9BQU8sQ0FBQ3hTLFVBQVUsR0FBR3VnQixXQUFXLENBQUM7UUFFL0R6RixjQUFjLENBQUN0SSxPQUFPLENBQUM7TUFDekI7TUFFQSxJQUFJaU8sV0FBVyxHQUFHLENBQUMsQ0FBQztNQUNwQixJQUFJQyxTQUFTLEdBQUcsQ0FBQztNQUNqQixJQUFJQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ2QsSUFBSUMsVUFBVSxHQUFHLElBQUk7TUFDckIsSUFBSUMsYUFBYSxHQUFHLEtBQUs7TUFDekIsSUFBSUMsWUFBWSxHQUFHLEtBQUs7TUFFeEIsU0FBU0MsZ0JBQWdCQSxDQUFBLEVBQUc7UUFDMUJGLGFBQWEsR0FBRyxJQUFJO01BQ3RCO01BQ0EsU0FBU0csY0FBY0EsQ0FBQSxFQUFHO1FBQ3hCSCxhQUFhLEdBQUcsS0FBSztNQUN2QjtNQUVBLFNBQVNJLFFBQVFBLENBQUMzdkIsQ0FBQyxFQUFFO1FBQ25CLElBQUlBLENBQUMsQ0FBQzR2QixhQUFhLEVBQUU7VUFDbkIsT0FBTzV2QixDQUFDLENBQUM0dkIsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLE1BQU07VUFDTDtVQUNBLE9BQU81dkIsQ0FBQztRQUNWO01BQ0Y7TUFDQSxTQUFTNnZCLFlBQVlBLENBQUM3dkIsQ0FBQyxFQUFFO1FBQ3ZCLElBQUlBLENBQUMsQ0FBQzR2QixhQUFhLElBQUk1dkIsQ0FBQyxDQUFDNHZCLGFBQWEsQ0FBQzVuQixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25ELE9BQU8sSUFBSTtRQUNiO1FBQ0EsSUFBSWhJLENBQUMsQ0FBQzh2QixXQUFXLElBQUk5dkIsQ0FBQyxDQUFDOHZCLFdBQVcsS0FBSyxPQUFPLElBQUk5dkIsQ0FBQyxDQUFDOHZCLFdBQVcsS0FBSzl2QixDQUFDLENBQUMrdkIsb0JBQW9CLEVBQUU7VUFDMUYsT0FBTyxJQUFJO1FBQ2I7UUFDQSxPQUFPLEtBQUs7TUFDZDtNQUNBLFNBQVNDLFVBQVVBLENBQUNod0IsQ0FBQyxFQUFFO1FBQ3JCLElBQUk2dkIsWUFBWSxDQUFDN3ZCLENBQUMsQ0FBQyxFQUFFO1VBQ25Cd3ZCLFlBQVksR0FBRyxJQUFJO1VBRW5CLElBQUlTLEtBQUssR0FBR04sUUFBUSxDQUFDM3ZCLENBQUMsQ0FBQztVQUV2Qm12QixXQUFXLENBQUNqaUIsS0FBSyxHQUFHK2lCLEtBQUssQ0FBQy9pQixLQUFLO1VBQy9CaWlCLFdBQVcsQ0FBQ2hpQixLQUFLLEdBQUc4aUIsS0FBSyxDQUFDOWlCLEtBQUs7VUFFL0JpaUIsU0FBUyxHQUFJLElBQUkvUixJQUFJLENBQUMsQ0FBQyxDQUFFNlMsT0FBTyxDQUFDLENBQUM7VUFFbEMsSUFBSVosVUFBVSxLQUFLLElBQUksRUFBRTtZQUN2QmpCLGFBQWEsQ0FBQ2lCLFVBQVUsQ0FBQztVQUMzQjtVQUVBdHZCLENBQUMsQ0FBQzRlLGVBQWUsQ0FBQyxDQUFDO1FBQ3JCO01BQ0Y7TUFDQSxTQUFTdVIsU0FBU0EsQ0FBQ253QixDQUFDLEVBQUU7UUFDcEIsSUFBSSxDQUFDdXZCLGFBQWEsSUFBSUMsWUFBWSxJQUFJSyxZQUFZLENBQUM3dkIsQ0FBQyxDQUFDLEVBQUU7VUFDckQsSUFBSWl3QixLQUFLLEdBQUdOLFFBQVEsQ0FBQzN2QixDQUFDLENBQUM7VUFFdkIsSUFBSW93QixhQUFhLEdBQUc7WUFBQ2xqQixLQUFLLEVBQUUraUIsS0FBSyxDQUFDL2lCLEtBQUs7WUFBRUMsS0FBSyxFQUFFOGlCLEtBQUssQ0FBQzlpQjtVQUFLLENBQUM7VUFFNUQsSUFBSThoQixXQUFXLEdBQUdtQixhQUFhLENBQUNsakIsS0FBSyxHQUFHaWlCLFdBQVcsQ0FBQ2ppQixLQUFLO1VBQ3pELElBQUlnaUIsV0FBVyxHQUFHa0IsYUFBYSxDQUFDampCLEtBQUssR0FBR2dpQixXQUFXLENBQUNoaUIsS0FBSztVQUV6RDZoQixjQUFjLENBQUNDLFdBQVcsRUFBRUMsV0FBVyxDQUFDO1VBQ3hDQyxXQUFXLEdBQUdpQixhQUFhO1VBRTNCLElBQUlDLFdBQVcsR0FBSSxJQUFJaFQsSUFBSSxDQUFDLENBQUMsQ0FBRTZTLE9BQU8sQ0FBQyxDQUFDO1VBRXhDLElBQUlJLE9BQU8sR0FBR0QsV0FBVyxHQUFHakIsU0FBUztVQUNyQyxJQUFJa0IsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNmakIsS0FBSyxDQUFDbHVCLENBQUMsR0FBRzh0QixXQUFXLEdBQUdxQixPQUFPO1lBQy9CakIsS0FBSyxDQUFDanVCLENBQUMsR0FBRzh0QixXQUFXLEdBQUdvQixPQUFPO1lBQy9CbEIsU0FBUyxHQUFHaUIsV0FBVztVQUN6QjtVQUVBLElBQUlyRSxvQkFBb0IsQ0FBQ2lELFdBQVcsRUFBRUMsV0FBVyxDQUFDLEVBQUU7WUFDbERsdkIsQ0FBQyxDQUFDNGUsZUFBZSxDQUFDLENBQUM7WUFDbkI1ZSxDQUFDLENBQUN5ZSxjQUFjLENBQUMsQ0FBQztVQUNwQjtRQUNGO01BQ0Y7TUFDQSxTQUFTOFIsUUFBUUEsQ0FBQSxFQUFHO1FBQ2xCLElBQUksQ0FBQ2hCLGFBQWEsSUFBSUMsWUFBWSxFQUFFO1VBQ2xDQSxZQUFZLEdBQUcsS0FBSztVQUVwQm5CLGFBQWEsQ0FBQ2lCLFVBQVUsQ0FBQztVQUN6QkEsVUFBVSxHQUFHbEIsV0FBVyxDQUFDLFlBQVk7WUFDbkMsSUFBSSxDQUFDbEYsU0FBUyxDQUFDamdCLEdBQUcsQ0FBQ2lZLE9BQU8sQ0FBQyxFQUFFO2NBQzNCbU4sYUFBYSxDQUFDaUIsVUFBVSxDQUFDO2NBQ3pCO1lBQ0Y7WUFFQSxJQUFJL1YsSUFBSSxDQUFDakYsR0FBRyxDQUFDK2EsS0FBSyxDQUFDbHVCLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSW9ZLElBQUksQ0FBQ2pGLEdBQUcsQ0FBQythLEtBQUssQ0FBQ2p1QixDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7Y0FDeERpdEIsYUFBYSxDQUFDaUIsVUFBVSxDQUFDO2NBQ3pCO1lBQ0Y7WUFFQU4sY0FBYyxDQUFDSyxLQUFLLENBQUNsdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRWt1QixLQUFLLENBQUNqdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUUxQ2l1QixLQUFLLENBQUNsdUIsQ0FBQyxJQUFJLEdBQUc7WUFDZGt1QixLQUFLLENBQUNqdUIsQ0FBQyxJQUFJLEdBQUc7VUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNSO01BQ0Y7TUFFQSxJQUFJNm1CLGFBQWEsRUFBRTtRQUNqQjduQixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDdUIsTUFBTSxFQUFFLFlBQVksRUFBRWtoQixnQkFBZ0IsQ0FBQztRQUNwRHJ2QixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDdUIsTUFBTSxFQUFFLFVBQVUsRUFBRW1oQixjQUFjLENBQUM7UUFDaER0dkIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ2tVLE9BQU8sRUFBRSxZQUFZLEVBQUU4TyxVQUFVLENBQUM7UUFDL0M1dkIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ2tVLE9BQU8sRUFBRSxXQUFXLEVBQUVpUCxTQUFTLENBQUM7UUFDN0MvdkIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ2tVLE9BQU8sRUFBRSxVQUFVLEVBQUVxUCxRQUFRLENBQUM7TUFDN0M7TUFFQSxJQUFJcEksaUJBQWlCLEVBQUU7UUFDckIsSUFBSTVaLE1BQU0sQ0FBQ2lpQixZQUFZLEVBQUU7VUFDdkJwd0IsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxhQUFhLEVBQUVraEIsZ0JBQWdCLENBQUM7VUFDckRydkIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxXQUFXLEVBQUVtaEIsY0FBYyxDQUFDO1VBQ2pEdHZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsYUFBYSxFQUFFOE8sVUFBVSxDQUFDO1VBQ2hENXZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsYUFBYSxFQUFFaVAsU0FBUyxDQUFDO1VBQy9DL3ZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsV0FBVyxFQUFFcVAsUUFBUSxDQUFDO1FBQzlDLENBQUMsTUFBTSxJQUFJaGlCLE1BQU0sQ0FBQ2tpQixjQUFjLEVBQUU7VUFDaENyd0IsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxlQUFlLEVBQUVraEIsZ0JBQWdCLENBQUM7VUFDdkRydkIsQ0FBQyxDQUFDK29CLEtBQUssQ0FBQ25jLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxhQUFhLEVBQUVtaEIsY0FBYyxDQUFDO1VBQ25EdHZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsZUFBZSxFQUFFOE8sVUFBVSxDQUFDO1VBQ2xENXZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsZUFBZSxFQUFFaVAsU0FBUyxDQUFDO1VBQ2pEL3ZCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUNrVSxPQUFPLEVBQUUsYUFBYSxFQUFFcVAsUUFBUSxDQUFDO1FBQ2hEO01BQ0Y7SUFDRjtJQUVBdk0sTUFBTSxDQUFDRCxPQUFPLEdBQUcsVUFBVTdDLE9BQU8sRUFBRStHLGFBQWEsRUFBRUUsaUJBQWlCLEVBQUU7TUFDcEUsSUFBSS9uQixDQUFDLEdBQUc4b0IsU0FBUyxDQUFDamdCLEdBQUcsQ0FBQ2lZLE9BQU8sQ0FBQztNQUM5QjJOLGdCQUFnQixDQUFDM04sT0FBTyxFQUFFOWdCLENBQUMsRUFBRTZuQixhQUFhLEVBQUVFLGlCQUFpQixDQUFDO0lBQ2hFLENBQUM7RUFFRCxDQUFDLEVBQUM7SUFBQyxjQUFjLEVBQUMsRUFBRTtJQUFDLG9CQUFvQixFQUFDLEVBQUU7SUFBQyxrQkFBa0IsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVNwSyxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUN6RyxZQUFZOztJQUVaLElBQUl2YixHQUFHLEdBQUd1VixPQUFPLENBQUMsY0FBYyxDQUFDO01BQzdCNWQsQ0FBQyxHQUFHNGQsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUM1Qm1MLFNBQVMsR0FBR25MLE9BQU8sQ0FBQyxhQUFhLENBQUM7TUFDbEN5TCxjQUFjLEdBQUd6TCxPQUFPLENBQUMsbUJBQW1CLENBQUM7O0lBRWpEO0lBQ0EsSUFBSTJTLGdCQUFnQixHQUFHM1MsT0FBTyxDQUFDLHNCQUFzQixDQUFDO01BQ2xENFMsb0JBQW9CLEdBQUc1UyxPQUFPLENBQUMsMEJBQTBCLENBQUM7TUFDMUQ2UyxlQUFlLEdBQUc3UyxPQUFPLENBQUMsb0JBQW9CLENBQUM7TUFDL0M4UyxpQkFBaUIsR0FBRzlTLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztNQUNwRCtTLG1CQUFtQixHQUFHL1MsT0FBTyxDQUFDLHlCQUF5QixDQUFDO01BQ3hEZ1QsZ0JBQWdCLEdBQUdoVCxPQUFPLENBQUMscUJBQXFCLENBQUM7TUFDakRpVCxZQUFZLEdBQUdqVCxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFFN0NpRyxNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFK1AsWUFBWSxFQUFFO01BQ2hEQSxZQUFZLEdBQUd0ZSxPQUFBLENBQU9zZSxZQUFZLE1BQUssUUFBUSxHQUFHQSxZQUFZLEdBQUcsQ0FBQyxDQUFDO01BRW5Fem9CLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQ3NXLE9BQU8sRUFBRSxjQUFjLENBQUM7O01BRWhDO01BQ0EsSUFBSTlnQixDQUFDLEdBQUc4b0IsU0FBUyxDQUFDdGUsR0FBRyxDQUFDc1csT0FBTyxDQUFDO01BRTlCOWdCLENBQUMsQ0FBQ3NaLFFBQVEsR0FBR3ZaLENBQUMsQ0FBQytILE1BQU0sQ0FBQzlILENBQUMsQ0FBQ3NaLFFBQVEsRUFBRXVYLFlBQVksQ0FBQztNQUMvQ3pvQixHQUFHLENBQUNvQyxHQUFHLENBQUNzVyxPQUFPLEVBQUUsV0FBVyxHQUFHOWdCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ3VQLEtBQUssQ0FBQztNQUVoRHlILGdCQUFnQixDQUFDeFAsT0FBTyxDQUFDO01BQ3pCeVAsb0JBQW9CLENBQUN6UCxPQUFPLENBQUM7TUFDN0IyUCxpQkFBaUIsQ0FBQzNQLE9BQU8sQ0FBQztNQUMxQjRQLG1CQUFtQixDQUFDNVAsT0FBTyxDQUFDO01BRTVCLElBQUk5Z0IsQ0FBQyxDQUFDc1osUUFBUSxDQUFDcVAsa0JBQWtCLEVBQUU7UUFDakNnSSxnQkFBZ0IsQ0FBQzdQLE9BQU8sQ0FBQztNQUMzQjtNQUVBLElBQUkvZ0IsQ0FBQyxDQUFDNG5CLEdBQUcsQ0FBQ0UsYUFBYSxJQUFJOW5CLENBQUMsQ0FBQzRuQixHQUFHLENBQUNJLGlCQUFpQixFQUFFO1FBQ2xENkksWUFBWSxDQUFDOVAsT0FBTyxFQUFFL2dCLENBQUMsQ0FBQzRuQixHQUFHLENBQUNFLGFBQWEsRUFBRTluQixDQUFDLENBQUM0bkIsR0FBRyxDQUFDSSxpQkFBaUIsQ0FBQztNQUNyRTtNQUNBLElBQUkvbkIsQ0FBQyxDQUFDc1osUUFBUSxDQUFDb1AsV0FBVyxFQUFFO1FBQzFCOEgsZUFBZSxDQUFDMVAsT0FBTyxDQUFDO01BQzFCO01BRUFzSSxjQUFjLENBQUN0SSxPQUFPLENBQUM7SUFDekIsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGNBQWMsRUFBQyxDQUFDO0lBQUMsZUFBZSxFQUFDLENBQUM7SUFBQyxzQkFBc0IsRUFBQyxFQUFFO0lBQUMsMEJBQTBCLEVBQUMsRUFBRTtJQUFDLG9CQUFvQixFQUFDLEVBQUU7SUFBQyx1QkFBdUIsRUFBQyxFQUFFO0lBQUMseUJBQXlCLEVBQUMsRUFBRTtJQUFDLHFCQUFxQixFQUFDLEVBQUU7SUFBQyxpQkFBaUIsRUFBQyxFQUFFO0lBQUMsYUFBYSxFQUFDLEVBQUU7SUFBQyxtQkFBbUIsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVNuRCxPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUMxUyxZQUFZOztJQUVaLElBQUl2YixHQUFHLEdBQUd1VixPQUFPLENBQUMsY0FBYyxDQUFDO01BQzdCaGUsQ0FBQyxHQUFHZ2UsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUN6Qm1ULGVBQWUsR0FBR25ULE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztNQUM5QzJJLFlBQVksR0FBRzNJLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztNQUM5Q29ULElBQUksR0FBR3BULE9BQU8sQ0FBQyxhQUFhLENBQUM7TUFDN0I1ZCxDQUFDLEdBQUc0ZCxPQUFPLENBQUMsZUFBZSxDQUFDO0lBRWhDLElBQUltTCxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLFNBQVNrSSxRQUFRQSxDQUFDbFEsT0FBTyxFQUFFO01BQ3pCLElBQUk5Z0IsQ0FBQyxHQUFHLElBQUk7TUFFWkEsQ0FBQyxDQUFDc1osUUFBUSxHQUFHdlosQ0FBQyxDQUFDaW5CLEtBQUssQ0FBQzhKLGVBQWUsQ0FBQztNQUNyQzl3QixDQUFDLENBQUN1cUIsY0FBYyxHQUFHLElBQUk7TUFDdkJ2cUIsQ0FBQyxDQUFDZ3FCLGVBQWUsR0FBRyxJQUFJO01BQ3hCaHFCLENBQUMsQ0FBQ3NxQixZQUFZLEdBQUcsSUFBSTtNQUNyQnRxQixDQUFDLENBQUMrcEIsYUFBYSxHQUFHLElBQUk7TUFFdEIvcEIsQ0FBQyxDQUFDaXhCLEtBQUssR0FBR3R4QixDQUFDLENBQUMrTyxHQUFHLENBQUNvUyxPQUFPLEVBQUUsV0FBVyxDQUFDLEtBQUssS0FBSztNQUMvQzlnQixDQUFDLENBQUNreEIsZ0JBQWdCLEdBQUksWUFBWTtRQUNoQyxJQUFJQyxrQkFBa0IsR0FBR3JRLE9BQU8sQ0FBQ3hTLFVBQVU7UUFDM0MsSUFBSTJZLE1BQU0sR0FBRyxJQUFJO1FBQ2pCbkcsT0FBTyxDQUFDeFMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN2QjJZLE1BQU0sR0FBR25HLE9BQU8sQ0FBQ3hTLFVBQVUsR0FBRyxDQUFDO1FBQy9Cd1MsT0FBTyxDQUFDeFMsVUFBVSxHQUFHNmlCLGtCQUFrQjtRQUN2QyxPQUFPbEssTUFBTTtNQUNmLENBQUMsQ0FBRSxDQUFDO01BQ0pqbkIsQ0FBQyxDQUFDd3FCLHdCQUF3QixHQUFHeHFCLENBQUMsQ0FBQ2t4QixnQkFBZ0IsR0FBR3BRLE9BQU8sQ0FBQ3NRLFdBQVcsR0FBR3RRLE9BQU8sQ0FBQzBCLFdBQVcsR0FBRyxDQUFDO01BQy9GeGlCLENBQUMsQ0FBQytvQixLQUFLLEdBQUcsSUFBSXpDLFlBQVksQ0FBQyxDQUFDO01BQzVCdG1CLENBQUMsQ0FBQ3NoQixhQUFhLEdBQUdSLE9BQU8sQ0FBQ1EsYUFBYSxJQUFJcEksUUFBUTtNQUVuRCxTQUFTNkQsS0FBS0EsQ0FBQSxFQUFHO1FBQ2YzVSxHQUFHLENBQUNvQyxHQUFHLENBQUNzVyxPQUFPLEVBQUUsVUFBVSxDQUFDO01BQzlCO01BRUEsU0FBU3VRLElBQUlBLENBQUEsRUFBRztRQUNkanBCLEdBQUcsQ0FBQ2tFLE1BQU0sQ0FBQ3dVLE9BQU8sRUFBRSxVQUFVLENBQUM7TUFDakM7TUFFQTlnQixDQUFDLENBQUNrcEIsY0FBYyxHQUFHdnBCLENBQUMsQ0FBQ29PLFFBQVEsQ0FBQ3BPLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxFQUFFa2hCLE9BQU8sQ0FBQztNQUN6RTlnQixDQUFDLENBQUNncEIsVUFBVSxHQUFHcnBCLENBQUMsQ0FBQ29PLFFBQVEsQ0FBQ3BPLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFSSxDQUFDLENBQUNrcEIsY0FBYyxDQUFDO01BQ3pFbHBCLENBQUMsQ0FBQ2dwQixVQUFVLENBQUN0RyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztNQUN4QzFpQixDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDZ3BCLFVBQVUsRUFBRSxPQUFPLEVBQUVqTSxLQUFLLENBQUM7TUFDMUMvYyxDQUFDLENBQUMrb0IsS0FBSyxDQUFDbmMsSUFBSSxDQUFDNU0sQ0FBQyxDQUFDZ3BCLFVBQVUsRUFBRSxNQUFNLEVBQUVxSSxJQUFJLENBQUM7TUFDeENyeEIsQ0FBQyxDQUFDOHJCLGdCQUFnQixHQUFHLElBQUk7TUFDekI5ckIsQ0FBQyxDQUFDaXFCLGVBQWUsR0FBRyxJQUFJO01BQ3hCanFCLENBQUMsQ0FBQytxQixjQUFjLEdBQUcsSUFBSTtNQUN2Qi9xQixDQUFDLENBQUNzeEIsZ0JBQWdCLEdBQUd2eEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO01BQy9EbHBCLENBQUMsQ0FBQ3V4Qix1QkFBdUIsR0FBR3Z4QixDQUFDLENBQUNzeEIsZ0JBQWdCLEtBQUt0eEIsQ0FBQyxDQUFDc3hCLGdCQUFnQixDQUFDLENBQUM7TUFDdkV0eEIsQ0FBQyxDQUFDd3hCLGFBQWEsR0FBR3h4QixDQUFDLENBQUN1eEIsdUJBQXVCLEdBQUcsSUFBSSxHQUFHeHhCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDa3BCLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztNQUM1RmxwQixDQUFDLENBQUN5eEIsZ0JBQWdCLEdBQUcxeEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUMsR0FBR25wQixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztNQUMvSDtNQUNBdnBCLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztNQUMzQ2xwQixDQUFDLENBQUMweEIsZ0JBQWdCLEdBQUczeEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUducEIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO01BQ3JIdnBCLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQztNQUN0Q2xwQixDQUFDLENBQUNxcUIsVUFBVSxHQUFHLElBQUk7TUFDbkJycUIsQ0FBQyxDQUFDbXFCLFVBQVUsR0FBRyxJQUFJO01BRW5CbnFCLENBQUMsQ0FBQ21wQixjQUFjLEdBQUd4cEIsQ0FBQyxDQUFDb08sUUFBUSxDQUFDcE8sQ0FBQyxDQUFDQyxDQUFDLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEVBQUVraEIsT0FBTyxDQUFDO01BQ3pFOWdCLENBQUMsQ0FBQ2lwQixVQUFVLEdBQUd0cEIsQ0FBQyxDQUFDb08sUUFBUSxDQUFDcE8sQ0FBQyxDQUFDQyxDQUFDLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEVBQUVJLENBQUMsQ0FBQ21wQixjQUFjLENBQUM7TUFDekVucEIsQ0FBQyxDQUFDaXBCLFVBQVUsQ0FBQ3ZHLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO01BQ3hDMWlCLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNpcEIsVUFBVSxFQUFFLE9BQU8sRUFBRWxNLEtBQUssQ0FBQztNQUMxQy9jLENBQUMsQ0FBQytvQixLQUFLLENBQUNuYyxJQUFJLENBQUM1TSxDQUFDLENBQUNpcEIsVUFBVSxFQUFFLE1BQU0sRUFBRW9JLElBQUksQ0FBQztNQUN4Q3J4QixDQUFDLENBQUM2ckIsZ0JBQWdCLEdBQUcsSUFBSTtNQUN6QjdyQixDQUFDLENBQUN5cEIsZ0JBQWdCLEdBQUcsSUFBSTtNQUN6QnpwQixDQUFDLENBQUN3ckIsYUFBYSxHQUFHLElBQUk7TUFDdEJ4ckIsQ0FBQyxDQUFDMnhCLGVBQWUsR0FBRzV4QixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ21wQixjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7TUFDN0RucEIsQ0FBQyxDQUFDNHhCLHNCQUFzQixHQUFHNXhCLENBQUMsQ0FBQzJ4QixlQUFlLEtBQUszeEIsQ0FBQyxDQUFDMnhCLGVBQWUsQ0FBQyxDQUFDO01BQ3BFM3hCLENBQUMsQ0FBQzZ4QixjQUFjLEdBQUc3eEIsQ0FBQyxDQUFDNHhCLHNCQUFzQixHQUFHLElBQUksR0FBRzd4QixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ21wQixjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7TUFDN0ZucEIsQ0FBQyxDQUFDOHhCLG9CQUFvQixHQUFHOXhCLENBQUMsQ0FBQ2l4QixLQUFLLEdBQUdseEIsQ0FBQyxDQUFDd25CLFVBQVUsQ0FBQ3ZuQixDQUFDLENBQUNpcEIsVUFBVSxDQUFDLEdBQUcsSUFBSTtNQUNwRWpwQixDQUFDLENBQUMreEIsZ0JBQWdCLEdBQUdoeUIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQ3BuQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNtcEIsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsR0FBR3BwQixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ21wQixjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztNQUMvSHhwQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNtcEIsY0FBYyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7TUFDM0NucEIsQ0FBQyxDQUFDZ3lCLGlCQUFpQixHQUFHanlCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHcHBCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztNQUN0SHhwQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNtcEIsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7TUFDdENucEIsQ0FBQyxDQUFDNnBCLFdBQVcsR0FBRyxJQUFJO01BQ3BCN3BCLENBQUMsQ0FBQzJwQixVQUFVLEdBQUcsSUFBSTtJQUNyQjtJQUVBLFNBQVNzSSxLQUFLQSxDQUFDblIsT0FBTyxFQUFFO01BQ3RCLElBQUksT0FBT0EsT0FBTyxDQUFDb1IsT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUMxQyxPQUFPcFIsT0FBTyxDQUFDL1IsWUFBWSxDQUFDLFlBQVksQ0FBQztNQUMzQyxDQUFDLE1BQU07UUFDTCxPQUFPK1IsT0FBTyxDQUFDb1IsT0FBTyxDQUFDQyxJQUFJO01BQzdCO0lBQ0Y7SUFFQSxTQUFTQyxLQUFLQSxDQUFDdFIsT0FBTyxFQUFFaFQsRUFBRSxFQUFFO01BQzFCLElBQUksT0FBT2dULE9BQU8sQ0FBQ29SLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDMUNwUixPQUFPLENBQUM0QixZQUFZLENBQUMsWUFBWSxFQUFFNVUsRUFBRSxDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNMZ1QsT0FBTyxDQUFDb1IsT0FBTyxDQUFDQyxJQUFJLEdBQUdya0IsRUFBRTtNQUMzQjtJQUNGO0lBRUEsU0FBU3VrQixRQUFRQSxDQUFDdlIsT0FBTyxFQUFFO01BQ3pCLElBQUksT0FBT0EsT0FBTyxDQUFDb1IsT0FBTyxLQUFLLFdBQVcsRUFBRTtRQUMxQ3BSLE9BQU8sQ0FBQ3NDLGVBQWUsQ0FBQyxZQUFZLENBQUM7TUFDdkMsQ0FBQyxNQUFNO1FBQ0wsT0FBT3RDLE9BQU8sQ0FBQ29SLE9BQU8sQ0FBQ0MsSUFBSTtNQUM3QjtJQUNGO0lBRUF4TyxPQUFPLENBQUNuWixHQUFHLEdBQUcsVUFBVXNXLE9BQU8sRUFBRTtNQUMvQixJQUFJd1IsS0FBSyxHQUFHdkIsSUFBSSxDQUFDLENBQUM7TUFDbEJxQixLQUFLLENBQUN0UixPQUFPLEVBQUV3UixLQUFLLENBQUM7TUFDckJ4SixTQUFTLENBQUN3SixLQUFLLENBQUMsR0FBRyxJQUFJdEIsUUFBUSxDQUFDbFEsT0FBTyxDQUFDO01BQ3hDLE9BQU9nSSxTQUFTLENBQUN3SixLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVEM08sT0FBTyxDQUFDclgsTUFBTSxHQUFHLFVBQVV3VSxPQUFPLEVBQUU7TUFDbEMsT0FBT2dJLFNBQVMsQ0FBQ21KLEtBQUssQ0FBQ25SLE9BQU8sQ0FBQyxDQUFDO01BQ2hDdVIsUUFBUSxDQUFDdlIsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRDZDLE9BQU8sQ0FBQzlhLEdBQUcsR0FBRyxVQUFVaVksT0FBTyxFQUFFO01BQy9CLE9BQU9nSSxTQUFTLENBQUNtSixLQUFLLENBQUNuUixPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0VBRUQsQ0FBQyxFQUFDO0lBQUMsY0FBYyxFQUFDLENBQUM7SUFBQyxZQUFZLEVBQUMsQ0FBQztJQUFDLHNCQUFzQixFQUFDLENBQUM7SUFBQyxhQUFhLEVBQUMsQ0FBQztJQUFDLGVBQWUsRUFBQyxDQUFDO0lBQUMsbUJBQW1CLEVBQUM7RUFBQyxDQUFDLENBQUM7RUFBQyxFQUFFLEVBQUMsQ0FBQyxVQUFTbkQsT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDMUosWUFBWTs7SUFFWixJQUFJdmIsR0FBRyxHQUFHdVYsT0FBTyxDQUFDLGNBQWMsQ0FBQztNQUM3QmhlLENBQUMsR0FBR2dlLE9BQU8sQ0FBQyxZQUFZLENBQUM7TUFDekI1ZCxDQUFDLEdBQUc0ZCxPQUFPLENBQUMsZUFBZSxDQUFDO01BQzVCbUwsU0FBUyxHQUFHbkwsT0FBTyxDQUFDLGFBQWEsQ0FBQztNQUNsQzBMLFlBQVksR0FBRzFMLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUU3QyxTQUFTNFUsWUFBWUEsQ0FBQ3Z5QixDQUFDLEVBQUV3eUIsU0FBUyxFQUFFO01BQ2xDLElBQUl4eUIsQ0FBQyxDQUFDc1osUUFBUSxDQUFDNk8sa0JBQWtCLEVBQUU7UUFDakNxSyxTQUFTLEdBQUdyWixJQUFJLENBQUN4RyxHQUFHLENBQUM2ZixTQUFTLEVBQUV4eUIsQ0FBQyxDQUFDc1osUUFBUSxDQUFDNk8sa0JBQWtCLENBQUM7TUFDaEU7TUFDQSxJQUFJbm9CLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQzRPLGtCQUFrQixFQUFFO1FBQ2pDc0ssU0FBUyxHQUFHclosSUFBSSxDQUFDckcsR0FBRyxDQUFDMGYsU0FBUyxFQUFFeHlCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQzRPLGtCQUFrQixDQUFDO01BQ2hFO01BQ0EsT0FBT3NLLFNBQVM7SUFDbEI7SUFFQSxTQUFTQyxTQUFTQSxDQUFDM1IsT0FBTyxFQUFFOWdCLENBQUMsRUFBRTtNQUM3QixJQUFJMHlCLFdBQVcsR0FBRztRQUFDdndCLEtBQUssRUFBRW5DLENBQUMsQ0FBQ3FxQjtNQUFVLENBQUM7TUFDdkMsSUFBSXJxQixDQUFDLENBQUNpeEIsS0FBSyxFQUFFO1FBQ1h5QixXQUFXLENBQUN2bEIsSUFBSSxHQUFHbk4sQ0FBQyxDQUFDd3FCLHdCQUF3QixHQUFHMUosT0FBTyxDQUFDeFMsVUFBVSxHQUFHdE8sQ0FBQyxDQUFDdXFCLGNBQWMsR0FBR3ZxQixDQUFDLENBQUNzcUIsWUFBWTtNQUN4RyxDQUFDLE1BQU07UUFDTG9JLFdBQVcsQ0FBQ3ZsQixJQUFJLEdBQUcyVCxPQUFPLENBQUN4UyxVQUFVO01BQ3ZDO01BQ0EsSUFBSXRPLENBQUMsQ0FBQ3V4Qix1QkFBdUIsRUFBRTtRQUM3Qm1CLFdBQVcsQ0FBQ25FLE1BQU0sR0FBR3Z1QixDQUFDLENBQUNzeEIsZ0JBQWdCLEdBQUd4USxPQUFPLENBQUN6UyxTQUFTO01BQzdELENBQUMsTUFBTTtRQUNMcWtCLFdBQVcsQ0FBQ3RsQixHQUFHLEdBQUdwTixDQUFDLENBQUN3eEIsYUFBYSxHQUFHMVEsT0FBTyxDQUFDelMsU0FBUztNQUN2RDtNQUNBMU8sQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDa3BCLGNBQWMsRUFBRXdKLFdBQVcsQ0FBQztNQUVwQyxJQUFJQyxXQUFXLEdBQUc7UUFBQ3ZsQixHQUFHLEVBQUUwVCxPQUFPLENBQUN6UyxTQUFTO1FBQUVqTSxNQUFNLEVBQUVwQyxDQUFDLENBQUM2cEI7TUFBVyxDQUFDO01BQ2pFLElBQUk3cEIsQ0FBQyxDQUFDNHhCLHNCQUFzQixFQUFFO1FBQzVCLElBQUk1eEIsQ0FBQyxDQUFDaXhCLEtBQUssRUFBRTtVQUNYMEIsV0FBVyxDQUFDdEUsS0FBSyxHQUFHcnVCLENBQUMsQ0FBQ3NxQixZQUFZLElBQUl0cUIsQ0FBQyxDQUFDd3FCLHdCQUF3QixHQUFHMUosT0FBTyxDQUFDeFMsVUFBVSxDQUFDLEdBQUd0TyxDQUFDLENBQUMyeEIsZUFBZSxHQUFHM3hCLENBQUMsQ0FBQzh4QixvQkFBb0I7UUFDckksQ0FBQyxNQUFNO1VBQ0xhLFdBQVcsQ0FBQ3RFLEtBQUssR0FBR3J1QixDQUFDLENBQUMyeEIsZUFBZSxHQUFHN1EsT0FBTyxDQUFDeFMsVUFBVTtRQUM1RDtNQUNGLENBQUMsTUFBTTtRQUNMLElBQUl0TyxDQUFDLENBQUNpeEIsS0FBSyxFQUFFO1VBQ1gwQixXQUFXLENBQUN4bEIsSUFBSSxHQUFHbk4sQ0FBQyxDQUFDd3FCLHdCQUF3QixHQUFHMUosT0FBTyxDQUFDeFMsVUFBVSxHQUFHdE8sQ0FBQyxDQUFDdXFCLGNBQWMsR0FBRyxDQUFDLEdBQUd2cUIsQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUM2eEIsY0FBYyxHQUFHN3hCLENBQUMsQ0FBQzh4QixvQkFBb0I7UUFDeEosQ0FBQyxNQUFNO1VBQ0xhLFdBQVcsQ0FBQ3hsQixJQUFJLEdBQUduTixDQUFDLENBQUM2eEIsY0FBYyxHQUFHL1EsT0FBTyxDQUFDeFMsVUFBVTtRQUMxRDtNQUNGO01BQ0EzTyxDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNtcEIsY0FBYyxFQUFFd0osV0FBVyxDQUFDO01BRXBDaHpCLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2dwQixVQUFVLEVBQUU7UUFBQzdiLElBQUksRUFBRW5OLENBQUMsQ0FBQytxQixjQUFjO1FBQUU1b0IsS0FBSyxFQUFFbkMsQ0FBQyxDQUFDaXFCLGVBQWUsR0FBR2pxQixDQUFDLENBQUN5eEI7TUFBZ0IsQ0FBQyxDQUFDO01BQzVGOXhCLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2lwQixVQUFVLEVBQUU7UUFBQzdiLEdBQUcsRUFBRXBOLENBQUMsQ0FBQ3dyQixhQUFhO1FBQUVwcEIsTUFBTSxFQUFFcEMsQ0FBQyxDQUFDeXBCLGdCQUFnQixHQUFHenBCLENBQUMsQ0FBQyt4QjtNQUFnQixDQUFDLENBQUM7SUFDOUY7SUFFQW5PLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHLFVBQVU3QyxPQUFPLEVBQUU7TUFDbEMsSUFBSTlnQixDQUFDLEdBQUc4b0IsU0FBUyxDQUFDamdCLEdBQUcsQ0FBQ2lZLE9BQU8sQ0FBQztNQUU5QjlnQixDQUFDLENBQUN1cUIsY0FBYyxHQUFHekosT0FBTyxDQUFDMEIsV0FBVztNQUN0Q3hpQixDQUFDLENBQUNncUIsZUFBZSxHQUFHbEosT0FBTyxDQUFDbU0sWUFBWTtNQUN4Q2p0QixDQUFDLENBQUNzcUIsWUFBWSxHQUFHeEosT0FBTyxDQUFDc1EsV0FBVztNQUNwQ3B4QixDQUFDLENBQUMrcEIsYUFBYSxHQUFHakosT0FBTyxDQUFDa00sWUFBWTtNQUV0QyxJQUFJNEYsYUFBYTtNQUNqQixJQUFJLENBQUM5UixPQUFPLENBQUNxQixRQUFRLENBQUNuaUIsQ0FBQyxDQUFDa3BCLGNBQWMsQ0FBQyxFQUFFO1FBQ3ZDMEosYUFBYSxHQUFHanpCLENBQUMsQ0FBQ2dtQixhQUFhLENBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLENBQUM7UUFDaEUsSUFBSThSLGFBQWEsQ0FBQ2hyQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzVCZ3JCLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLElBQUksRUFBRTtZQUNwQ256QixDQUFDLENBQUMyTSxNQUFNLENBQUN3bUIsSUFBSSxDQUFDO1VBQ2hCLENBQUMsQ0FBQztRQUNKO1FBQ0FuekIsQ0FBQyxDQUFDb08sUUFBUSxDQUFDL04sQ0FBQyxDQUFDa3BCLGNBQWMsRUFBRXBJLE9BQU8sQ0FBQztNQUN2QztNQUNBLElBQUksQ0FBQ0EsT0FBTyxDQUFDcUIsUUFBUSxDQUFDbmlCLENBQUMsQ0FBQ21wQixjQUFjLENBQUMsRUFBRTtRQUN2Q3lKLGFBQWEsR0FBR2p6QixDQUFDLENBQUNnbUIsYUFBYSxDQUFDN0UsT0FBTyxFQUFFLHNCQUFzQixDQUFDO1FBQ2hFLElBQUk4UixhQUFhLENBQUNockIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUM1QmdyQixhQUFhLENBQUNDLE9BQU8sQ0FBQyxVQUFVQyxJQUFJLEVBQUU7WUFDcENuekIsQ0FBQyxDQUFDMk0sTUFBTSxDQUFDd21CLElBQUksQ0FBQztVQUNoQixDQUFDLENBQUM7UUFDSjtRQUNBbnpCLENBQUMsQ0FBQ29PLFFBQVEsQ0FBQy9OLENBQUMsQ0FBQ21wQixjQUFjLEVBQUVySSxPQUFPLENBQUM7TUFDdkM7TUFFQSxJQUFJLENBQUM5Z0IsQ0FBQyxDQUFDc1osUUFBUSxDQUFDMEQsZUFBZSxJQUFJaGQsQ0FBQyxDQUFDdXFCLGNBQWMsR0FBR3ZxQixDQUFDLENBQUNzWixRQUFRLENBQUM4TyxtQkFBbUIsR0FBR3BvQixDQUFDLENBQUNzcUIsWUFBWSxFQUFFO1FBQ3JHdHFCLENBQUMsQ0FBQzhyQixnQkFBZ0IsR0FBRyxJQUFJO1FBQ3pCOXJCLENBQUMsQ0FBQ3FxQixVQUFVLEdBQUdycUIsQ0FBQyxDQUFDdXFCLGNBQWMsR0FBR3ZxQixDQUFDLENBQUMweEIsZ0JBQWdCO1FBQ3BEMXhCLENBQUMsQ0FBQ21xQixVQUFVLEdBQUducUIsQ0FBQyxDQUFDdXFCLGNBQWMsR0FBR3ZxQixDQUFDLENBQUNxcUIsVUFBVTtRQUM5Q3JxQixDQUFDLENBQUNpcUIsZUFBZSxHQUFHc0ksWUFBWSxDQUFDdnlCLENBQUMsRUFBRUQsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQy9tQixDQUFDLENBQUNxcUIsVUFBVSxHQUFHcnFCLENBQUMsQ0FBQ3VxQixjQUFjLEdBQUd2cUIsQ0FBQyxDQUFDc3FCLFlBQVksQ0FBQyxDQUFDO1FBQzlGdHFCLENBQUMsQ0FBQytxQixjQUFjLEdBQUdockIsQ0FBQyxDQUFDZ25CLEtBQUssQ0FBQyxDQUFDL21CLENBQUMsQ0FBQ3dxQix3QkFBd0IsR0FBRzFKLE9BQU8sQ0FBQ3hTLFVBQVUsS0FBS3RPLENBQUMsQ0FBQ3FxQixVQUFVLEdBQUdycUIsQ0FBQyxDQUFDaXFCLGVBQWUsQ0FBQyxJQUFJanFCLENBQUMsQ0FBQ3NxQixZQUFZLEdBQUd0cUIsQ0FBQyxDQUFDdXFCLGNBQWMsQ0FBQyxDQUFDO01BQzFKLENBQUMsTUFBTTtRQUNMdnFCLENBQUMsQ0FBQzhyQixnQkFBZ0IsR0FBRyxLQUFLO01BQzVCO01BRUEsSUFBSSxDQUFDOXJCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQ2lQLGVBQWUsSUFBSXZvQixDQUFDLENBQUNncUIsZUFBZSxHQUFHaHFCLENBQUMsQ0FBQ3NaLFFBQVEsQ0FBQytPLG1CQUFtQixHQUFHcm9CLENBQUMsQ0FBQytwQixhQUFhLEVBQUU7UUFDdkcvcEIsQ0FBQyxDQUFDNnJCLGdCQUFnQixHQUFHLElBQUk7UUFDekI3ckIsQ0FBQyxDQUFDNnBCLFdBQVcsR0FBRzdwQixDQUFDLENBQUNncUIsZUFBZSxHQUFHaHFCLENBQUMsQ0FBQ2d5QixpQkFBaUI7UUFDdkRoeUIsQ0FBQyxDQUFDMnBCLFVBQVUsR0FBRzNwQixDQUFDLENBQUNncUIsZUFBZSxHQUFHaHFCLENBQUMsQ0FBQzZwQixXQUFXO1FBQ2hEN3BCLENBQUMsQ0FBQ3lwQixnQkFBZ0IsR0FBRzhJLFlBQVksQ0FBQ3Z5QixDQUFDLEVBQUVELENBQUMsQ0FBQ2duQixLQUFLLENBQUMvbUIsQ0FBQyxDQUFDNnBCLFdBQVcsR0FBRzdwQixDQUFDLENBQUNncUIsZUFBZSxHQUFHaHFCLENBQUMsQ0FBQytwQixhQUFhLENBQUMsQ0FBQztRQUNsRy9wQixDQUFDLENBQUN3ckIsYUFBYSxHQUFHenJCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNqRyxPQUFPLENBQUN6UyxTQUFTLElBQUlyTyxDQUFDLENBQUM2cEIsV0FBVyxHQUFHN3BCLENBQUMsQ0FBQ3lwQixnQkFBZ0IsQ0FBQyxJQUFJenBCLENBQUMsQ0FBQytwQixhQUFhLEdBQUcvcEIsQ0FBQyxDQUFDZ3FCLGVBQWUsQ0FBQyxDQUFDO01BQzdILENBQUMsTUFBTTtRQUNMaHFCLENBQUMsQ0FBQzZyQixnQkFBZ0IsR0FBRyxLQUFLO01BQzVCO01BRUEsSUFBSTdyQixDQUFDLENBQUMrcUIsY0FBYyxJQUFJL3FCLENBQUMsQ0FBQ3FxQixVQUFVLEdBQUdycUIsQ0FBQyxDQUFDaXFCLGVBQWUsRUFBRTtRQUN4RGpxQixDQUFDLENBQUMrcUIsY0FBYyxHQUFHL3FCLENBQUMsQ0FBQ3FxQixVQUFVLEdBQUdycUIsQ0FBQyxDQUFDaXFCLGVBQWU7TUFDckQ7TUFDQSxJQUFJanFCLENBQUMsQ0FBQ3dyQixhQUFhLElBQUl4ckIsQ0FBQyxDQUFDNnBCLFdBQVcsR0FBRzdwQixDQUFDLENBQUN5cEIsZ0JBQWdCLEVBQUU7UUFDekR6cEIsQ0FBQyxDQUFDd3JCLGFBQWEsR0FBR3hyQixDQUFDLENBQUM2cEIsV0FBVyxHQUFHN3BCLENBQUMsQ0FBQ3lwQixnQkFBZ0I7TUFDdEQ7TUFFQWdKLFNBQVMsQ0FBQzNSLE9BQU8sRUFBRTlnQixDQUFDLENBQUM7TUFFckIsSUFBSUEsQ0FBQyxDQUFDOHJCLGdCQUFnQixFQUFFO1FBQ3RCMWpCLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQ3NXLE9BQU8sRUFBRSxhQUFhLENBQUM7TUFDakMsQ0FBQyxNQUFNO1FBQ0wxWSxHQUFHLENBQUNrRSxNQUFNLENBQUN3VSxPQUFPLEVBQUUsYUFBYSxDQUFDO1FBQ2xDOWdCLENBQUMsQ0FBQ2lxQixlQUFlLEdBQUcsQ0FBQztRQUNyQmpxQixDQUFDLENBQUMrcUIsY0FBYyxHQUFHLENBQUM7UUFDcEIxQixZQUFZLENBQUN2SSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztNQUNsQztNQUNBLElBQUk5Z0IsQ0FBQyxDQUFDNnJCLGdCQUFnQixFQUFFO1FBQ3RCempCLEdBQUcsQ0FBQ29DLEdBQUcsQ0FBQ3NXLE9BQU8sRUFBRSxhQUFhLENBQUM7TUFDakMsQ0FBQyxNQUFNO1FBQ0wxWSxHQUFHLENBQUNrRSxNQUFNLENBQUN3VSxPQUFPLEVBQUUsYUFBYSxDQUFDO1FBQ2xDOWdCLENBQUMsQ0FBQ3lwQixnQkFBZ0IsR0FBRyxDQUFDO1FBQ3RCenBCLENBQUMsQ0FBQ3dyQixhQUFhLEdBQUcsQ0FBQztRQUNuQm5DLFlBQVksQ0FBQ3ZJLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ2pDO0lBQ0YsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGNBQWMsRUFBQyxDQUFDO0lBQUMsWUFBWSxFQUFDLENBQUM7SUFBQyxlQUFlLEVBQUMsQ0FBQztJQUFDLGFBQWEsRUFBQyxFQUFFO0lBQUMsaUJBQWlCLEVBQUM7RUFBRSxDQUFDLENBQUM7RUFBQyxFQUFFLEVBQUMsQ0FBQyxVQUFTbkQsT0FBTyxFQUFDaUcsTUFBTSxFQUFDRCxPQUFPLEVBQUM7SUFDakksWUFBWTs7SUFFWixJQUFJbUYsU0FBUyxHQUFHbkwsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUV0QyxJQUFJb1YsT0FBTyxHQUFHN1osUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN2Q0MsU0FBUyxHQUFHL1osUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN6Q0UsU0FBUyxHQUFHaGEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN6Q0csVUFBVSxHQUFHamEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUMxQ0ksTUFBTSxHQUFHbGEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN0Q0ssTUFBTSxHQUFHbmEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN0Q00sV0FBVyxHQUFHcGEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUMzQ08sU0FBUyxHQUFHcmEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN6Q1EsV0FBVyxHQUFHdGEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUMzQ1MsU0FBUyxHQUFHdmEsUUFBUSxDQUFDOFosV0FBVyxDQUFDLE9BQU8sQ0FBQztNQUN6Q1UsT0FBTztNQUNQQyxRQUFRO0lBRVpaLE9BQU8sQ0FBQ2EsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzdDWCxTQUFTLENBQUNXLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pEVixTQUFTLENBQUNVLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pEVCxVQUFVLENBQUNTLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ25EUixNQUFNLENBQUNRLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMzQ1AsTUFBTSxDQUFDTyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDM0NOLFdBQVcsQ0FBQ00sU0FBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDckRMLFNBQVMsQ0FBQ0ssU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakRKLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDckRILFNBQVMsQ0FBQ0csU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFFakRoUSxNQUFNLENBQUNELE9BQU8sR0FBRyxVQUFVN0MsT0FBTyxFQUFFMkcsSUFBSSxFQUFFOVMsS0FBSyxFQUFFO01BQy9DLElBQUksT0FBT21NLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDbEMsTUFBTSwyREFBMkQ7TUFDbkU7TUFFQSxJQUFJLE9BQU8yRyxJQUFJLEtBQUssV0FBVyxFQUFFO1FBQy9CLE1BQU0sd0RBQXdEO01BQ2hFO01BRUEsSUFBSSxPQUFPOVMsS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUNoQyxNQUFNLHdEQUF3RDtNQUNoRTtNQUVBLElBQUk4UyxJQUFJLEtBQUssS0FBSyxJQUFJOVMsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNoQ21NLE9BQU8sQ0FBQ3pTLFNBQVMsR0FBR3NHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQm1NLE9BQU8sQ0FBQytTLGFBQWEsQ0FBQ0wsV0FBVyxDQUFDO01BQ3BDO01BRUEsSUFBSS9MLElBQUksS0FBSyxNQUFNLElBQUk5UyxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2pDbU0sT0FBTyxDQUFDeFMsVUFBVSxHQUFHcUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDbU0sT0FBTyxDQUFDK1MsYUFBYSxDQUFDUCxXQUFXLENBQUM7TUFDcEM7TUFFQSxJQUFJdHpCLENBQUMsR0FBRzhvQixTQUFTLENBQUNqZ0IsR0FBRyxDQUFDaVksT0FBTyxDQUFDO01BRTlCLElBQUkyRyxJQUFJLEtBQUssS0FBSyxJQUFJOVMsS0FBSyxJQUFJM1UsQ0FBQyxDQUFDK3BCLGFBQWEsR0FBRy9wQixDQUFDLENBQUNncUIsZUFBZSxFQUFFO1FBQ2xFbEosT0FBTyxDQUFDelMsU0FBUyxHQUFHc0csS0FBSyxHQUFHM1UsQ0FBQyxDQUFDK3BCLGFBQWEsR0FBRy9wQixDQUFDLENBQUNncUIsZUFBZSxDQUFDLENBQUM7UUFDakVsSixPQUFPLENBQUMrUyxhQUFhLENBQUNKLFNBQVMsQ0FBQztNQUNsQztNQUVBLElBQUloTSxJQUFJLEtBQUssTUFBTSxJQUFJOVMsS0FBSyxJQUFJM1UsQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxFQUFFO1FBQ2pFekosT0FBTyxDQUFDeFMsVUFBVSxHQUFHcUcsS0FBSyxHQUFHM1UsQ0FBQyxDQUFDc3FCLFlBQVksR0FBR3RxQixDQUFDLENBQUN1cUIsY0FBYyxDQUFDLENBQUM7UUFDaEV6SixPQUFPLENBQUMrUyxhQUFhLENBQUNOLFNBQVMsQ0FBQztNQUNsQztNQUVBLElBQUksQ0FBQ0csT0FBTyxFQUFFO1FBQ1pBLE9BQU8sR0FBRzVTLE9BQU8sQ0FBQ3pTLFNBQVM7TUFDN0I7TUFFQSxJQUFJLENBQUNzbEIsUUFBUSxFQUFFO1FBQ2JBLFFBQVEsR0FBRzdTLE9BQU8sQ0FBQ3hTLFVBQVU7TUFDL0I7TUFFQSxJQUFJbVosSUFBSSxLQUFLLEtBQUssSUFBSTlTLEtBQUssR0FBRytlLE9BQU8sRUFBRTtRQUNyQzVTLE9BQU8sQ0FBQytTLGFBQWEsQ0FBQ2QsT0FBTyxDQUFDO01BQ2hDO01BRUEsSUFBSXRMLElBQUksS0FBSyxLQUFLLElBQUk5UyxLQUFLLEdBQUcrZSxPQUFPLEVBQUU7UUFDckM1UyxPQUFPLENBQUMrUyxhQUFhLENBQUNaLFNBQVMsQ0FBQztNQUNsQztNQUVBLElBQUl4TCxJQUFJLEtBQUssTUFBTSxJQUFJOVMsS0FBSyxHQUFHZ2YsUUFBUSxFQUFFO1FBQ3ZDN1MsT0FBTyxDQUFDK1MsYUFBYSxDQUFDWCxTQUFTLENBQUM7TUFDbEM7TUFFQSxJQUFJekwsSUFBSSxLQUFLLE1BQU0sSUFBSTlTLEtBQUssR0FBR2dmLFFBQVEsRUFBRTtRQUN2QzdTLE9BQU8sQ0FBQytTLGFBQWEsQ0FBQ1YsVUFBVSxDQUFDO01BQ25DO01BRUEsSUFBSTFMLElBQUksS0FBSyxLQUFLLEVBQUU7UUFDbEIzRyxPQUFPLENBQUN6UyxTQUFTLEdBQUdxbEIsT0FBTyxHQUFHL2UsS0FBSztRQUNuQ21NLE9BQU8sQ0FBQytTLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDO01BQy9CO01BRUEsSUFBSTNMLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkIzRyxPQUFPLENBQUN4UyxVQUFVLEdBQUdxbEIsUUFBUSxHQUFHaGYsS0FBSztRQUNyQ21NLE9BQU8sQ0FBQytTLGFBQWEsQ0FBQ1IsTUFBTSxDQUFDO01BQy9CO0lBRUYsQ0FBQztFQUVELENBQUMsRUFBQztJQUFDLGFBQWEsRUFBQztFQUFFLENBQUMsQ0FBQztFQUFDLEVBQUUsRUFBQyxDQUFDLFVBQVMxVixPQUFPLEVBQUNpRyxNQUFNLEVBQUNELE9BQU8sRUFBQztJQUMxRCxZQUFZOztJQUVaLElBQUloa0IsQ0FBQyxHQUFHZ2UsT0FBTyxDQUFDLFlBQVksQ0FBQztNQUN6QjVkLENBQUMsR0FBRzRkLE9BQU8sQ0FBQyxlQUFlLENBQUM7TUFDNUJtTCxTQUFTLEdBQUduTCxPQUFPLENBQUMsYUFBYSxDQUFDO01BQ2xDeUwsY0FBYyxHQUFHekwsT0FBTyxDQUFDLG1CQUFtQixDQUFDO01BQzdDMEwsWUFBWSxHQUFHMUwsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBRTdDaUcsTUFBTSxDQUFDRCxPQUFPLEdBQUcsVUFBVTdDLE9BQU8sRUFBRTtNQUNsQyxJQUFJOWdCLENBQUMsR0FBRzhvQixTQUFTLENBQUNqZ0IsR0FBRyxDQUFDaVksT0FBTyxDQUFDO01BRTlCLElBQUksQ0FBQzlnQixDQUFDLEVBQUU7UUFDTjtNQUNGOztNQUVBO01BQ0FBLENBQUMsQ0FBQ3dxQix3QkFBd0IsR0FBR3hxQixDQUFDLENBQUNreEIsZ0JBQWdCLEdBQUdwUSxPQUFPLENBQUNzUSxXQUFXLEdBQUd0USxPQUFPLENBQUMwQixXQUFXLEdBQUcsQ0FBQzs7TUFFL0Y7TUFDQTdpQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7TUFDM0N2cEIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO01BQzNDbnBCLENBQUMsQ0FBQzB4QixnQkFBZ0IsR0FBRzN4QixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBR25wQixDQUFDLENBQUNnbkIsS0FBSyxDQUFDcG5CLENBQUMsQ0FBQytPLEdBQUcsQ0FBQzFPLENBQUMsQ0FBQ2twQixjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7TUFDckhscEIsQ0FBQyxDQUFDZ3lCLGlCQUFpQixHQUFHanlCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHcHBCLENBQUMsQ0FBQ2duQixLQUFLLENBQUNwbkIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQzs7TUFFdEg7TUFDQXhwQixDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7TUFDMUN2cEIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO01BRTFDQyxjQUFjLENBQUN0SSxPQUFPLENBQUM7O01BRXZCO01BQ0F1SSxZQUFZLENBQUN2SSxPQUFPLEVBQUUsS0FBSyxFQUFFQSxPQUFPLENBQUN6UyxTQUFTLENBQUM7TUFDL0NnYixZQUFZLENBQUN2SSxPQUFPLEVBQUUsTUFBTSxFQUFFQSxPQUFPLENBQUN4UyxVQUFVLENBQUM7TUFFakQzTyxDQUFDLENBQUMrTyxHQUFHLENBQUMxTyxDQUFDLENBQUNrcEIsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7TUFDdEN2cEIsQ0FBQyxDQUFDK08sR0FBRyxDQUFDMU8sQ0FBQyxDQUFDbXBCLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO0lBQ3hDLENBQUM7RUFFRCxDQUFDLEVBQUM7SUFBQyxZQUFZLEVBQUMsQ0FBQztJQUFDLGVBQWUsRUFBQyxDQUFDO0lBQUMsYUFBYSxFQUFDLEVBQUU7SUFBQyxtQkFBbUIsRUFBQyxFQUFFO0lBQUMsaUJBQWlCLEVBQUM7RUFBRSxDQUFDO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNoaUQzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9leHRyYS1saWJzL3NwYXJrbGluZS9zcGFya2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuaW5pdC5kdWFsbGlzdGJveC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpZGViYXJtZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93YXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGlicy9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L3BlcmZlY3Qtc2Nyb2xsYmFyLmpxdWVyeS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvIHN5bmMgXlxcLlxcLy4qJCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqcXVlcnkuc3BhcmtsaW5lIDIuMS4yIC0gaHR0cDovL29tbmlwb3RlbnQubmV0L2pxdWVyeS5zcGFya2xpbmUvIFxuKiogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZSAtIHNlZSBhYm92ZSBzaXRlIGZvciBkZXRhaWxzICovXG5cbihmdW5jdGlvbihhLGIsYyl7KGZ1bmN0aW9uKGEpe3R5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOmpRdWVyeSYmIWpRdWVyeS5mbi5zcGFya2xpbmUmJmEoalF1ZXJ5KX0pKGZ1bmN0aW9uKGQpe1widXNlIHN0cmljdFwiO3ZhciBlPXt9LGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHUsdix3LHgseSx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMPTA7Zj1mdW5jdGlvbigpe3JldHVybntjb21tb246e3R5cGU6XCJsaW5lXCIsbGluZUNvbG9yOlwiIzAwZlwiLGZpbGxDb2xvcjpcIiNjZGZcIixkZWZhdWx0UGl4ZWxzUGVyVmFsdWU6Myx3aWR0aDpcImF1dG9cIixoZWlnaHQ6XCJhdXRvXCIsY29tcG9zaXRlOiExLHRhZ1ZhbHVlc0F0dHJpYnV0ZTpcInZhbHVlc1wiLHRhZ09wdGlvbnNQcmVmaXg6XCJzcGFya1wiLGVuYWJsZVRhZ09wdGlvbnM6ITEsZW5hYmxlSGlnaGxpZ2h0OiEwLGhpZ2hsaWdodExpZ2h0ZW46MS40LHRvb2x0aXBTa2lwTnVsbDohMCx0b29sdGlwUHJlZml4OlwiXCIsdG9vbHRpcFN1ZmZpeDpcIlwiLGRpc2FibGVIaWRkZW5DaGVjazohMSxudW1iZXJGb3JtYXR0ZXI6ITEsbnVtYmVyRGlnaXRHcm91cENvdW50OjMsbnVtYmVyRGlnaXRHcm91cFNlcDpcIixcIixudW1iZXJEZWNpbWFsTWFyazpcIi5cIixkaXNhYmxlVG9vbHRpcHM6ITEsZGlzYWJsZUludGVyYWN0aW9uOiExfSxsaW5lOntzcG90Q29sb3I6XCIjZjgwXCIsaGlnaGxpZ2h0U3BvdENvbG9yOlwiIzVmNVwiLGhpZ2hsaWdodExpbmVDb2xvcjpcIiNmMjJcIixzcG90UmFkaXVzOjEuNSxtaW5TcG90Q29sb3I6XCIjZjgwXCIsbWF4U3BvdENvbG9yOlwiI2Y4MFwiLGxpbmVXaWR0aDoxLG5vcm1hbFJhbmdlTWluOmMsbm9ybWFsUmFuZ2VNYXg6Yyxub3JtYWxSYW5nZUNvbG9yOlwiI2NjY1wiLGRyYXdOb3JtYWxPblRvcDohMSxjaGFydFJhbmdlTWluOmMsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW5YOmMsY2hhcnRSYW5nZU1heFg6Yyx0b29sdGlwRm9ybWF0Om5ldyBoKCc8c3BhbiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj4mIzk2Nzk7PC9zcGFuPiB7e3ByZWZpeH19e3t5fX17e3N1ZmZpeH19Jyl9LGJhcjp7YmFyQ29sb3I6XCIjMzM2NmNjXCIsbmVnQmFyQ29sb3I6XCIjZjQ0XCIsc3RhY2tlZEJhckNvbG9yOltcIiMzMzY2Y2NcIixcIiNkYzM5MTJcIixcIiNmZjk5MDBcIixcIiMxMDk2MThcIixcIiM2NmFhMDBcIixcIiNkZDQ0NzdcIixcIiMwMDk5YzZcIixcIiM5OTAwOTlcIl0semVyb0NvbG9yOmMsbnVsbENvbG9yOmMsemVyb0F4aXM6ITAsYmFyV2lkdGg6NCxiYXJTcGFjaW5nOjEsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW46YyxjaGFydFJhbmdlQ2xpcDohMSxjb2xvck1hcDpjLHRvb2x0aXBGb3JtYXQ6bmV3IGgoJzxzcGFuIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPiYjOTY3OTs8L3NwYW4+IHt7cHJlZml4fX17e3ZhbHVlfX17e3N1ZmZpeH19Jyl9LHRyaXN0YXRlOntiYXJXaWR0aDo0LGJhclNwYWNpbmc6MSxwb3NCYXJDb2xvcjpcIiM2ZjZcIixuZWdCYXJDb2xvcjpcIiNmNDRcIix6ZXJvQmFyQ29sb3I6XCIjOTk5XCIsY29sb3JNYXA6e30sdG9vbHRpcEZvcm1hdDpuZXcgaCgnPHNwYW4gc3R5bGU9XCJjb2xvcjoge3tjb2xvcn19XCI+JiM5Njc5Ozwvc3Bhbj4ge3t2YWx1ZTptYXB9fScpLHRvb2x0aXBWYWx1ZUxvb2t1cHM6e21hcDp7XCItMVwiOlwiTG9zc1wiLDA6XCJEcmF3XCIsMTpcIldpblwifX19LGRpc2NyZXRlOntsaW5lSGVpZ2h0OlwiYXV0b1wiLHRocmVzaG9sZENvbG9yOmMsdGhyZXNob2xkVmFsdWU6MCxjaGFydFJhbmdlTWF4OmMsY2hhcnRSYW5nZU1pbjpjLGNoYXJ0UmFuZ2VDbGlwOiExLHRvb2x0aXBGb3JtYXQ6bmV3IGgoXCJ7e3ByZWZpeH19e3t2YWx1ZX19e3tzdWZmaXh9fVwiKX0sYnVsbGV0Ont0YXJnZXRDb2xvcjpcIiNmMzNcIix0YXJnZXRXaWR0aDozLHBlcmZvcm1hbmNlQ29sb3I6XCIjMzNmXCIscmFuZ2VDb2xvcnM6W1wiI2QzZGFmZVwiLFwiI2E4YjZmZlwiLFwiIzdmOTRmZlwiXSxiYXNlOmMsdG9vbHRpcEZvcm1hdDpuZXcgaChcInt7ZmllbGRrZXk6ZmllbGRzfX0gLSB7e3ZhbHVlfX1cIiksdG9vbHRpcFZhbHVlTG9va3Vwczp7ZmllbGRzOntyOlwiUmFuZ2VcIixwOlwiUGVyZm9ybWFuY2VcIix0OlwiVGFyZ2V0XCJ9fX0scGllOntvZmZzZXQ6MCxzbGljZUNvbG9yczpbXCIjMzM2NmNjXCIsXCIjZGMzOTEyXCIsXCIjZmY5OTAwXCIsXCIjMTA5NjE4XCIsXCIjNjZhYTAwXCIsXCIjZGQ0NDc3XCIsXCIjMDA5OWM2XCIsXCIjOTkwMDk5XCJdLGJvcmRlcldpZHRoOjAsYm9yZGVyQ29sb3I6XCIjMDAwXCIsdG9vbHRpcEZvcm1hdDpuZXcgaCgnPHNwYW4gc3R5bGU9XCJjb2xvcjoge3tjb2xvcn19XCI+JiM5Njc5Ozwvc3Bhbj4ge3t2YWx1ZX19ICh7e3BlcmNlbnQuMX19JSknKX0sYm94OntyYXc6ITEsYm94TGluZUNvbG9yOlwiIzAwMFwiLGJveEZpbGxDb2xvcjpcIiNjZGZcIix3aGlza2VyQ29sb3I6XCIjMDAwXCIsb3V0bGllckxpbmVDb2xvcjpcIiMzMzNcIixvdXRsaWVyRmlsbENvbG9yOlwiI2ZmZlwiLG1lZGlhbkNvbG9yOlwiI2YwMFwiLHNob3dPdXRsaWVyczohMCxvdXRsaWVySVFSOjEuNSxzcG90UmFkaXVzOjEuNSx0YXJnZXQ6Yyx0YXJnZXRDb2xvcjpcIiM0YTJcIixjaGFydFJhbmdlTWF4OmMsY2hhcnRSYW5nZU1pbjpjLHRvb2x0aXBGb3JtYXQ6bmV3IGgoXCJ7e2ZpZWxkOmZpZWxkc319OiB7e3ZhbHVlfX1cIiksdG9vbHRpcEZvcm1hdEZpZWxkbGlzdEtleTpcImZpZWxkXCIsdG9vbHRpcFZhbHVlTG9va3Vwczp7ZmllbGRzOntscTpcIkxvd2VyIFF1YXJ0aWxlXCIsbWVkOlwiTWVkaWFuXCIsdXE6XCJVcHBlciBRdWFydGlsZVwiLGxvOlwiTGVmdCBPdXRsaWVyXCIscm86XCJSaWdodCBPdXRsaWVyXCIsbHc6XCJMZWZ0IFdoaXNrZXJcIixydzpcIlJpZ2h0IFdoaXNrZXJcIn19fX19LEU9Jy5qcXN0b29sdGlwIHsgcG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDBweDt0b3A6IDBweDt2aXNpYmlsaXR5OiBoaWRkZW47YmFja2dyb3VuZDogcmdiKDAsIDAsIDApIHRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9Izk5MDAwMDAwLCBlbmRDb2xvcnN0cj0jOTkwMDAwMDApOy1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9Izk5MDAwMDAwLCBlbmRDb2xvcnN0cj0jOTkwMDAwMDApXCI7Y29sb3I6IHdoaXRlO2ZvbnQ6IDEwcHggYXJpYWwsIHNhbiBzZXJpZjt0ZXh0LWFsaWduOiBsZWZ0O3doaXRlLXNwYWNlOiBub3dyYXA7cGFkZGluZzogNXB4O2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO3otaW5kZXg6IDEwMDAwO30uanFzZmllbGQgeyBjb2xvcjogd2hpdGU7Zm9udDogMTBweCBhcmlhbCwgc2FuIHNlcmlmO3RleHQtYWxpZ246IGxlZnQ7fScsZz1mdW5jdGlvbigpe3ZhciBhLGI7cmV0dXJuIGE9ZnVuY3Rpb24oKXt0aGlzLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxhcmd1bWVudHMubGVuZ3RoPjE/KGFyZ3VtZW50c1swXT8oYS5wcm90b3R5cGU9ZC5leHRlbmQobmV3IGFyZ3VtZW50c1swXSxhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aC0xXSksYS5fc3VwZXI9YXJndW1lbnRzWzBdLnByb3RvdHlwZSk6YS5wcm90b3R5cGU9YXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0sYXJndW1lbnRzLmxlbmd0aD4yJiYoYj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSwtMSksYi51bnNoaWZ0KGEucHJvdG90eXBlKSxkLmV4dGVuZC5hcHBseShkLGIpKSk6YS5wcm90b3R5cGU9YXJndW1lbnRzWzBdLGEucHJvdG90eXBlLmNscz1hLGF9LGQuU1BGb3JtYXRDbGFzcz1oPWcoe2ZyZTovXFx7XFx7KFtcXHcuXSs/KSg6KC4rPykpP1xcfVxcfS9nLHByZWNyZTovKFxcdyspXFwuKFxcZCspLyxpbml0OmZ1bmN0aW9uKGEsYil7dGhpcy5mb3JtYXQ9YSx0aGlzLmZjbGFzcz1ifSxyZW5kZXI6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPXRoaXMsZj1hLGcsaCxpLGosaztyZXR1cm4gdGhpcy5mb3JtYXQucmVwbGFjZSh0aGlzLmZyZSxmdW5jdGlvbigpe3ZhciBhO3JldHVybiBoPWFyZ3VtZW50c1sxXSxpPWFyZ3VtZW50c1szXSxnPWUucHJlY3JlLmV4ZWMoaCksZz8oaz1nWzJdLGg9Z1sxXSk6az0hMSxqPWZbaF0saj09PWM/XCJcIjppJiZiJiZiW2ldPyhhPWJbaV0sYS5nZXQ/YltpXS5nZXQoail8fGo6YltpXVtqXXx8aik6KG4oaikmJihkLmdldChcIm51bWJlckZvcm1hdHRlclwiKT9qPWQuZ2V0KFwibnVtYmVyRm9ybWF0dGVyXCIpKGopOmo9cyhqLGssZC5nZXQoXCJudW1iZXJEaWdpdEdyb3VwQ291bnRcIiksZC5nZXQoXCJudW1iZXJEaWdpdEdyb3VwU2VwXCIpLGQuZ2V0KFwibnVtYmVyRGVjaW1hbE1hcmtcIikpKSxqKX0pfX0pLGQuc3Bmb3JtYXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IGgoYSxiKX0saT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGE8Yj9iOmE+Yz9jOmF9LGo9ZnVuY3Rpb24oYSxjKXt2YXIgZDtyZXR1cm4gYz09PTI/KGQ9Yi5mbG9vcihhLmxlbmd0aC8yKSxhLmxlbmd0aCUyP2FbZF06KGFbZC0xXSthW2RdKS8yKTphLmxlbmd0aCUyPyhkPShhLmxlbmd0aCpjK2MpLzQsZCUxPyhhW2IuZmxvb3IoZCldK2FbYi5mbG9vcihkKS0xXSkvMjphW2QtMV0pOihkPShhLmxlbmd0aCpjKzIpLzQsZCUxPyhhW2IuZmxvb3IoZCldK2FbYi5mbG9vcihkKS0xXSkvMjphW2QtMV0pfSxrPWZ1bmN0aW9uKGEpe3ZhciBiO3N3aXRjaChhKXtjYXNlXCJ1bmRlZmluZWRcIjphPWM7YnJlYWs7Y2FzZVwibnVsbFwiOmE9bnVsbDticmVhaztjYXNlXCJ0cnVlXCI6YT0hMDticmVhaztjYXNlXCJmYWxzZVwiOmE9ITE7YnJlYWs7ZGVmYXVsdDpiPXBhcnNlRmxvYXQoYSksYT09YiYmKGE9Yil9cmV0dXJuIGF9LGw9ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXTtmb3IoYj1hLmxlbmd0aDtiLS07KWNbYl09ayhhW2JdKTtyZXR1cm4gY30sbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1bXTtmb3IoYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylhW2NdIT09YiYmZS5wdXNoKGFbY10pO3JldHVybiBlfSxuPWZ1bmN0aW9uKGEpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KGEpKSYmaXNGaW5pdGUoYSl9LHM9ZnVuY3Rpb24oYSxiLGMsZSxmKXt2YXIgZyxoO2E9KGI9PT0hMT9wYXJzZUZsb2F0KGEpLnRvU3RyaW5nKCk6YS50b0ZpeGVkKGIpKS5zcGxpdChcIlwiKSxnPShnPWQuaW5BcnJheShcIi5cIixhKSk8MD9hLmxlbmd0aDpnLGc8YS5sZW5ndGgmJihhW2ddPWYpO2ZvcihoPWctYztoPjA7aC09YylhLnNwbGljZShoLDAsZSk7cmV0dXJuIGEuam9pbihcIlwiKX0sbz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ7Zm9yKGQ9Yi5sZW5ndGg7ZC0tOyl7aWYoYyYmYltkXT09PW51bGwpY29udGludWU7aWYoYltkXSE9PWEpcmV0dXJuITF9cmV0dXJuITB9LHA9ZnVuY3Rpb24oYSl7dmFyIGI9MCxjO2ZvcihjPWEubGVuZ3RoO2MtLTspYis9dHlwZW9mIGFbY109PVwibnVtYmVyXCI/YVtjXTowO3JldHVybiBifSxyPWZ1bmN0aW9uKGEpe3JldHVybiBkLmlzQXJyYXkoYSk/YTpbYV19LHE9ZnVuY3Rpb24oYil7dmFyIGM7YS5jcmVhdGVTdHlsZVNoZWV0P2EuY3JlYXRlU3R5bGVTaGVldCgpLmNzc1RleHQ9YjooYz1hLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxjLnR5cGU9XCJ0ZXh0L2Nzc1wiLGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGMpLGNbdHlwZW9mIGEuYm9keS5zdHlsZS5XZWJraXRBcHBlYXJhbmNlPT1cInN0cmluZ1wiP1wiaW5uZXJUZXh0XCI6XCJpbm5lckhUTUxcIl09Yil9LGQuZm4uc2ltcGxlZHJhdz1mdW5jdGlvbihiLGUsZixnKXt2YXIgaCxpO2lmKGYmJihoPXRoaXMuZGF0YShcIl9qcXNfdmNhbnZhc1wiKSkpcmV0dXJuIGg7aWYoZC5mbi5zcGFya2xpbmUuY2FudmFzPT09ITEpcmV0dXJuITE7aWYoZC5mbi5zcGFya2xpbmUuY2FudmFzPT09Yyl7dmFyIGo9YS5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2lmKCFqLmdldENvbnRleHR8fCFqLmdldENvbnRleHQoXCIyZFwiKSl7aWYoIWEubmFtZXNwYWNlc3x8ISFhLm5hbWVzcGFjZXMudilyZXR1cm4gZC5mbi5zcGFya2xpbmUuY2FudmFzPSExLCExO2EubmFtZXNwYWNlcy5hZGQoXCJ2XCIsXCJ1cm46c2NoZW1hcy1taWNyb3NvZnQtY29tOnZtbFwiLFwiI2RlZmF1bHQjVk1MXCIpLGQuZm4uc3BhcmtsaW5lLmNhbnZhcz1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gbmV3IEooYSxiLGMpfX1lbHNlIGQuZm4uc3BhcmtsaW5lLmNhbnZhcz1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gbmV3IEkoYSxiLGMsZCl9fXJldHVybiBiPT09YyYmKGI9ZCh0aGlzKS5pbm5lcldpZHRoKCkpLGU9PT1jJiYoZT1kKHRoaXMpLmlubmVySGVpZ2h0KCkpLGg9ZC5mbi5zcGFya2xpbmUuY2FudmFzKGIsZSx0aGlzLGcpLGk9ZCh0aGlzKS5kYXRhKFwiX2pxc19taGFuZGxlclwiKSxpJiZpLnJlZ2lzdGVyQ2FudmFzKGgpLGh9LGQuZm4uY2xlYXJkcmF3PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kYXRhKFwiX2pxc192Y2FudmFzXCIpO2EmJmEucmVzZXQoKX0sZC5SYW5nZU1hcENsYXNzPXQ9Zyh7aW5pdDpmdW5jdGlvbihhKXt2YXIgYixjLGQ9W107Zm9yKGIgaW4gYSlhLmhhc093blByb3BlcnR5KGIpJiZ0eXBlb2YgYj09XCJzdHJpbmdcIiYmYi5pbmRleE9mKFwiOlwiKT4tMSYmKGM9Yi5zcGxpdChcIjpcIiksY1swXT1jWzBdLmxlbmd0aD09PTA/LUluZmluaXR5OnBhcnNlRmxvYXQoY1swXSksY1sxXT1jWzFdLmxlbmd0aD09PTA/SW5maW5pdHk6cGFyc2VGbG9hdChjWzFdKSxjWzJdPWFbYl0sZC5wdXNoKGMpKTt0aGlzLm1hcD1hLHRoaXMucmFuZ2VsaXN0PWR8fCExfSxnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5yYW5nZWxpc3QsZCxlLGY7aWYoKGY9dGhpcy5tYXBbYV0pIT09YylyZXR1cm4gZjtpZihiKWZvcihkPWIubGVuZ3RoO2QtLTspe2U9YltkXTtpZihlWzBdPD1hJiZlWzFdPj1hKXJldHVybiBlWzJdfXJldHVybiBjfX0pLGQucmFuZ2VfbWFwPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdChhKX0sdT1nKHtpbml0OmZ1bmN0aW9uKGEsYil7dmFyIGM9ZChhKTt0aGlzLiRlbD1jLHRoaXMub3B0aW9ucz1iLHRoaXMuY3VycmVudFBhZ2VYPTAsdGhpcy5jdXJyZW50UGFnZVk9MCx0aGlzLmVsPWEsdGhpcy5zcGxpc3Q9W10sdGhpcy50b29sdGlwPW51bGwsdGhpcy5vdmVyPSExLHRoaXMuZGlzcGxheVRvb2x0aXBzPSFiLmdldChcImRpc2FibGVUb29sdGlwc1wiKSx0aGlzLmhpZ2hsaWdodEVuYWJsZWQ9IWIuZ2V0KFwiZGlzYWJsZUhpZ2hsaWdodFwiKX0scmVnaXN0ZXJTcGFya2xpbmU6ZnVuY3Rpb24oYSl7dGhpcy5zcGxpc3QucHVzaChhKSx0aGlzLm92ZXImJnRoaXMudXBkYXRlRGlzcGxheSgpfSxyZWdpc3RlckNhbnZhczpmdW5jdGlvbihhKXt2YXIgYj1kKGEuY2FudmFzKTt0aGlzLmNhbnZhcz1hLHRoaXMuJGNhbnZhcz1iLGIubW91c2VlbnRlcihkLnByb3h5KHRoaXMubW91c2VlbnRlcix0aGlzKSksYi5tb3VzZWxlYXZlKGQucHJveHkodGhpcy5tb3VzZWxlYXZlLHRoaXMpKSxiLmNsaWNrKGQucHJveHkodGhpcy5tb3VzZWNsaWNrLHRoaXMpKX0scmVzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5zcGxpc3Q9W10sdGhpcy50b29sdGlwJiZhJiYodGhpcy50b29sdGlwLnJlbW92ZSgpLHRoaXMudG9vbHRpcD1jKX0sbW91c2VjbGljazpmdW5jdGlvbihhKXt2YXIgYj1kLkV2ZW50KFwic3BhcmtsaW5lQ2xpY2tcIik7Yi5vcmlnaW5hbEV2ZW50PWEsYi5zcGFya2xpbmVzPXRoaXMuc3BsaXN0LHRoaXMuJGVsLnRyaWdnZXIoYil9LG1vdXNlZW50ZXI6ZnVuY3Rpb24oYil7ZChhLmJvZHkpLnVuYmluZChcIm1vdXNlbW92ZS5qcXNcIiksZChhLmJvZHkpLmJpbmQoXCJtb3VzZW1vdmUuanFzXCIsZC5wcm94eSh0aGlzLm1vdXNlbW92ZSx0aGlzKSksdGhpcy5vdmVyPSEwLHRoaXMuY3VycmVudFBhZ2VYPWIucGFnZVgsdGhpcy5jdXJyZW50UGFnZVk9Yi5wYWdlWSx0aGlzLmN1cnJlbnRFbD1iLnRhcmdldCwhdGhpcy50b29sdGlwJiZ0aGlzLmRpc3BsYXlUb29sdGlwcyYmKHRoaXMudG9vbHRpcD1uZXcgdih0aGlzLm9wdGlvbnMpLHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbihiLnBhZ2VYLGIucGFnZVkpKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX0sbW91c2VsZWF2ZTpmdW5jdGlvbigpe2QoYS5ib2R5KS51bmJpbmQoXCJtb3VzZW1vdmUuanFzXCIpO3ZhciBiPXRoaXMuc3BsaXN0LGM9Yi5sZW5ndGgsZT0hMSxmLGc7dGhpcy5vdmVyPSExLHRoaXMuY3VycmVudEVsPW51bGwsdGhpcy50b29sdGlwJiYodGhpcy50b29sdGlwLnJlbW92ZSgpLHRoaXMudG9vbHRpcD1udWxsKTtmb3IoZz0wO2c8YztnKyspZj1iW2ddLGYuY2xlYXJSZWdpb25IaWdobGlnaHQoKSYmKGU9ITApO2UmJnRoaXMuY2FudmFzLnJlbmRlcigpfSxtb3VzZW1vdmU6ZnVuY3Rpb24oYSl7dGhpcy5jdXJyZW50UGFnZVg9YS5wYWdlWCx0aGlzLmN1cnJlbnRQYWdlWT1hLnBhZ2VZLHRoaXMuY3VycmVudEVsPWEudGFyZ2V0LHRoaXMudG9vbHRpcCYmdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKGEucGFnZVgsYS5wYWdlWSksdGhpcy51cGRhdGVEaXNwbGF5KCl9LHVwZGF0ZURpc3BsYXk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnNwbGlzdCxiPWEubGVuZ3RoLGM9ITEsZT10aGlzLiRjYW52YXMub2Zmc2V0KCksZj10aGlzLmN1cnJlbnRQYWdlWC1lLmxlZnQsZz10aGlzLmN1cnJlbnRQYWdlWS1lLnRvcCxoLGksaixrLGw7aWYoIXRoaXMub3ZlcilyZXR1cm47Zm9yKGo9MDtqPGI7aisrKWk9YVtqXSxrPWkuc2V0UmVnaW9uSGlnaGxpZ2h0KHRoaXMuY3VycmVudEVsLGYsZyksayYmKGM9ITApO2lmKGMpe2w9ZC5FdmVudChcInNwYXJrbGluZVJlZ2lvbkNoYW5nZVwiKSxsLnNwYXJrbGluZXM9dGhpcy5zcGxpc3QsdGhpcy4kZWwudHJpZ2dlcihsKTtpZih0aGlzLnRvb2x0aXApe2g9XCJcIjtmb3Ioaj0wO2o8YjtqKyspaT1hW2pdLGgrPWkuZ2V0Q3VycmVudFJlZ2lvblRvb2x0aXAoKTt0aGlzLnRvb2x0aXAuc2V0Q29udGVudChoKX10aGlzLmRpc2FibGVIaWdobGlnaHR8fHRoaXMuY2FudmFzLnJlbmRlcigpfWs9PT1udWxsJiZ0aGlzLm1vdXNlbGVhdmUoKX19KSx2PWcoe3NpemVTdHlsZTpcInBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O3Zpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O2Zsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XCIsaW5pdDpmdW5jdGlvbihiKXt2YXIgYz1iLmdldChcInRvb2x0aXBDbGFzc25hbWVcIixcImpxc3Rvb2x0aXBcIiksZT10aGlzLnNpemVTdHlsZSxmO3RoaXMuY29udGFpbmVyPWIuZ2V0KFwidG9vbHRpcENvbnRhaW5lclwiKXx8YS5ib2R5LHRoaXMudG9vbHRpcE9mZnNldFg9Yi5nZXQoXCJ0b29sdGlwT2Zmc2V0WFwiLDEwKSx0aGlzLnRvb2x0aXBPZmZzZXRZPWIuZ2V0KFwidG9vbHRpcE9mZnNldFlcIiwxMiksZChcIiNqcXNzaXpldGlwXCIpLnJlbW92ZSgpLGQoXCIjanFzdG9vbHRpcFwiKS5yZW1vdmUoKSx0aGlzLnNpemV0aXA9ZChcIjxkaXYvPlwiLHtpZDpcImpxc3NpemV0aXBcIixzdHlsZTplLFwiY2xhc3NcIjpjfSksdGhpcy50b29sdGlwPWQoXCI8ZGl2Lz5cIix7aWQ6XCJqcXN0b29sdGlwXCIsXCJjbGFzc1wiOmN9KS5hcHBlbmRUbyh0aGlzLmNvbnRhaW5lciksZj10aGlzLnRvb2x0aXAub2Zmc2V0KCksdGhpcy5vZmZzZXRMZWZ0PWYubGVmdCx0aGlzLm9mZnNldFRvcD1mLnRvcCx0aGlzLmhpZGRlbj0hMCxkKHdpbmRvdykudW5iaW5kKFwicmVzaXplLmpxcyBzY3JvbGwuanFzXCIpLGQod2luZG93KS5iaW5kKFwicmVzaXplLmpxcyBzY3JvbGwuanFzXCIsZC5wcm94eSh0aGlzLnVwZGF0ZVdpbmRvd0RpbXMsdGhpcykpLHRoaXMudXBkYXRlV2luZG93RGltcygpfSx1cGRhdGVXaW5kb3dEaW1zOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxUb3A9ZCh3aW5kb3cpLnNjcm9sbFRvcCgpLHRoaXMuc2Nyb2xsTGVmdD1kKHdpbmRvdykuc2Nyb2xsTGVmdCgpLHRoaXMuc2Nyb2xsUmlnaHQ9dGhpcy5zY3JvbGxMZWZ0K2Qod2luZG93KS53aWR0aCgpLHRoaXMudXBkYXRlUG9zaXRpb24oKX0sZ2V0U2l6ZTpmdW5jdGlvbihhKXt0aGlzLnNpemV0aXAuaHRtbChhKS5hcHBlbmRUbyh0aGlzLmNvbnRhaW5lciksdGhpcy53aWR0aD10aGlzLnNpemV0aXAud2lkdGgoKSsxLHRoaXMuaGVpZ2h0PXRoaXMuc2l6ZXRpcC5oZWlnaHQoKSx0aGlzLnNpemV0aXAucmVtb3ZlKCl9LHNldENvbnRlbnQ6ZnVuY3Rpb24oYSl7aWYoIWEpe3RoaXMudG9vbHRpcC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksdGhpcy5oaWRkZW49ITA7cmV0dXJufXRoaXMuZ2V0U2l6ZShhKSx0aGlzLnRvb2x0aXAuaHRtbChhKS5jc3Moe3dpZHRoOnRoaXMud2lkdGgsaGVpZ2h0OnRoaXMuaGVpZ2h0LHZpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9KSx0aGlzLmhpZGRlbiYmKHRoaXMuaGlkZGVuPSExLHRoaXMudXBkYXRlUG9zaXRpb24oKSl9LHVwZGF0ZVBvc2l0aW9uOmZ1bmN0aW9uKGEsYil7aWYoYT09PWMpe2lmKHRoaXMubW91c2V4PT09YylyZXR1cm47YT10aGlzLm1vdXNleC10aGlzLm9mZnNldExlZnQsYj10aGlzLm1vdXNleS10aGlzLm9mZnNldFRvcH1lbHNlIHRoaXMubW91c2V4PWEtPXRoaXMub2Zmc2V0TGVmdCx0aGlzLm1vdXNleT1iLT10aGlzLm9mZnNldFRvcDtpZighdGhpcy5oZWlnaHR8fCF0aGlzLndpZHRofHx0aGlzLmhpZGRlbilyZXR1cm47Yi09dGhpcy5oZWlnaHQrdGhpcy50b29sdGlwT2Zmc2V0WSxhKz10aGlzLnRvb2x0aXBPZmZzZXRYLGI8dGhpcy5zY3JvbGxUb3AmJihiPXRoaXMuc2Nyb2xsVG9wKSxhPHRoaXMuc2Nyb2xsTGVmdD9hPXRoaXMuc2Nyb2xsTGVmdDphK3RoaXMud2lkdGg+dGhpcy5zY3JvbGxSaWdodCYmKGE9dGhpcy5zY3JvbGxSaWdodC10aGlzLndpZHRoKSx0aGlzLnRvb2x0aXAuY3NzKHtsZWZ0OmEsdG9wOmJ9KX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy50b29sdGlwLnJlbW92ZSgpLHRoaXMuc2l6ZXRpcC5yZW1vdmUoKSx0aGlzLnNpemV0aXA9dGhpcy50b29sdGlwPWMsZCh3aW5kb3cpLnVuYmluZChcInJlc2l6ZS5qcXMgc2Nyb2xsLmpxc1wiKX19KSxGPWZ1bmN0aW9uKCl7cShFKX0sZChGKSxLPVtdLGQuZm4uc3BhcmtsaW5lPWZ1bmN0aW9uKGIsZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBmPW5ldyBkLmZuLnNwYXJrbGluZS5vcHRpb25zKHRoaXMsZSksZz1kKHRoaXMpLGgsaTtoPWZ1bmN0aW9uKCl7dmFyIGUsaCxpLGosayxsLG07aWYoYj09PVwiaHRtbFwifHxiPT09Yyl7bT10aGlzLmdldEF0dHJpYnV0ZShmLmdldChcInRhZ1ZhbHVlc0F0dHJpYnV0ZVwiKSk7aWYobT09PWN8fG09PT1udWxsKW09Zy5odG1sKCk7ZT1tLnJlcGxhY2UoLyheXFxzKjwhLS0pfCgtLT5cXHMqJCl8XFxzKy9nLFwiXCIpLnNwbGl0KFwiLFwiKX1lbHNlIGU9YjtoPWYuZ2V0KFwid2lkdGhcIik9PT1cImF1dG9cIj9lLmxlbmd0aCpmLmdldChcImRlZmF1bHRQaXhlbHNQZXJWYWx1ZVwiKTpmLmdldChcIndpZHRoXCIpO2lmKGYuZ2V0KFwiaGVpZ2h0XCIpPT09XCJhdXRvXCIpe2lmKCFmLmdldChcImNvbXBvc2l0ZVwiKXx8IWQuZGF0YSh0aGlzLFwiX2pxc192Y2FudmFzXCIpKWo9YS5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxqLmlubmVySFRNTD1cImFcIixnLmh0bWwoaiksaT1kKGopLmlubmVySGVpZ2h0KCl8fGQoaikuaGVpZ2h0KCksZChqKS5yZW1vdmUoKSxqPW51bGx9ZWxzZSBpPWYuZ2V0KFwiaGVpZ2h0XCIpO2YuZ2V0KFwiZGlzYWJsZUludGVyYWN0aW9uXCIpP2s9ITE6KGs9ZC5kYXRhKHRoaXMsXCJfanFzX21oYW5kbGVyXCIpLGs/Zi5nZXQoXCJjb21wb3NpdGVcIil8fGsucmVzZXQoKTooaz1uZXcgdSh0aGlzLGYpLGQuZGF0YSh0aGlzLFwiX2pxc19taGFuZGxlclwiLGspKSk7aWYoZi5nZXQoXCJjb21wb3NpdGVcIikmJiFkLmRhdGEodGhpcyxcIl9qcXNfdmNhbnZhc1wiKSl7ZC5kYXRhKHRoaXMsXCJfanFzX2Vycm5vdGlmeVwiKXx8KGFsZXJ0KFwiQXR0ZW1wdGVkIHRvIGF0dGFjaCBhIGNvbXBvc2l0ZSBzcGFya2xpbmUgdG8gYW4gZWxlbWVudCB3aXRoIG5vIGV4aXN0aW5nIHNwYXJrbGluZVwiKSxkLmRhdGEodGhpcyxcIl9qcXNfZXJybm90aWZ5XCIsITApKTtyZXR1cm59bD1uZXcoZC5mbi5zcGFya2xpbmVbZi5nZXQoXCJ0eXBlXCIpXSkodGhpcyxlLGYsaCxpKSxsLnJlbmRlcigpLGsmJmsucmVnaXN0ZXJTcGFya2xpbmUobCl9O2lmKGQodGhpcykuaHRtbCgpJiYhZi5nZXQoXCJkaXNhYmxlSGlkZGVuQ2hlY2tcIikmJmQodGhpcykuaXMoXCI6aGlkZGVuXCIpfHwhZCh0aGlzKS5wYXJlbnRzKFwiYm9keVwiKS5sZW5ndGgpe2lmKCFmLmdldChcImNvbXBvc2l0ZVwiKSYmZC5kYXRhKHRoaXMsXCJfanFzX3BlbmRpbmdcIikpZm9yKGk9Sy5sZW5ndGg7aTtpLS0pS1tpLTFdWzBdPT10aGlzJiZLLnNwbGljZShpLTEsMSk7Sy5wdXNoKFt0aGlzLGhdKSxkLmRhdGEodGhpcyxcIl9qcXNfcGVuZGluZ1wiLCEwKX1lbHNlIGguY2FsbCh0aGlzKX0pfSxkLmZuLnNwYXJrbGluZS5kZWZhdWx0cz1mKCksZC5zcGFya2xpbmVfZGlzcGxheV92aXNpYmxlPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGU9W107Zm9yKGI9MCxjPUsubGVuZ3RoO2I8YztiKyspYT1LW2JdWzBdLGQoYSkuaXMoXCI6dmlzaWJsZVwiKSYmIWQoYSkucGFyZW50cygpLmlzKFwiOmhpZGRlblwiKT8oS1tiXVsxXS5jYWxsKGEpLGQuZGF0YShLW2JdWzBdLFwiX2pxc19wZW5kaW5nXCIsITEpLGUucHVzaChiKSk6IWQoYSkuY2xvc2VzdChcImh0bWxcIikubGVuZ3RoJiYhZC5kYXRhKGEsXCJfanFzX3BlbmRpbmdcIikmJihkLmRhdGEoS1tiXVswXSxcIl9qcXNfcGVuZGluZ1wiLCExKSxlLnB1c2goYikpO2ZvcihiPWUubGVuZ3RoO2I7Yi0tKUsuc3BsaWNlKGVbYi0xXSwxKX0sZC5mbi5zcGFya2xpbmUub3B0aW9ucz1nKHtpbml0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZixnLGg7dGhpcy51c2VyT3B0aW9ucz1iPWJ8fHt9LHRoaXMudGFnPWEsdGhpcy50YWdWYWxDYWNoZT17fSxmPWQuZm4uc3BhcmtsaW5lLmRlZmF1bHRzLGc9Zi5jb21tb24sdGhpcy50YWdPcHRpb25zUHJlZml4PWIuZW5hYmxlVGFnT3B0aW9ucyYmKGIudGFnT3B0aW9uc1ByZWZpeHx8Zy50YWdPcHRpb25zUHJlZml4KSxoPXRoaXMuZ2V0VGFnU2V0dGluZyhcInR5cGVcIiksaD09PWU/Yz1mW2IudHlwZXx8Zy50eXBlXTpjPWZbaF0sdGhpcy5tZXJnZWRPcHRpb25zPWQuZXh0ZW5kKHt9LGcsYyxiKX0sZ2V0VGFnU2V0dGluZzpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnRhZ09wdGlvbnNQcmVmaXgsZCxmLGcsaDtpZihiPT09ITF8fGI9PT1jKXJldHVybiBlO2lmKHRoaXMudGFnVmFsQ2FjaGUuaGFzT3duUHJvcGVydHkoYSkpZD10aGlzLnRhZ1ZhbENhY2hlLmtleTtlbHNle2Q9dGhpcy50YWcuZ2V0QXR0cmlidXRlKGIrYSk7aWYoZD09PWN8fGQ9PT1udWxsKWQ9ZTtlbHNlIGlmKGQuc3Vic3RyKDAsMSk9PT1cIltcIil7ZD1kLnN1YnN0cigxLGQubGVuZ3RoLTIpLnNwbGl0KFwiLFwiKTtmb3IoZj1kLmxlbmd0aDtmLS07KWRbZl09ayhkW2ZdLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLFwiXCIpKX1lbHNlIGlmKGQuc3Vic3RyKDAsMSk9PT1cIntcIil7Zz1kLnN1YnN0cigxLGQubGVuZ3RoLTIpLnNwbGl0KFwiLFwiKSxkPXt9O2ZvcihmPWcubGVuZ3RoO2YtLTspaD1nW2ZdLnNwbGl0KFwiOlwiLDIpLGRbaFswXS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZyxcIlwiKV09ayhoWzFdLnJlcGxhY2UoLyheXFxzKil8KFxccyokKS9nLFwiXCIpKX1lbHNlIGQ9ayhkKTt0aGlzLnRhZ1ZhbENhY2hlLmtleT1kfXJldHVybiBkfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgZD10aGlzLmdldFRhZ1NldHRpbmcoYSksZjtyZXR1cm4gZCE9PWU/ZDooZj10aGlzLm1lcmdlZE9wdGlvbnNbYV0pPT09Yz9iOmZ9fSksZC5mbi5zcGFya2xpbmUuX2Jhc2U9Zyh7ZGlzYWJsZWQ6ITEsaW5pdDpmdW5jdGlvbihhLGIsZSxmLGcpe3RoaXMuZWw9YSx0aGlzLiRlbD1kKGEpLHRoaXMudmFsdWVzPWIsdGhpcy5vcHRpb25zPWUsdGhpcy53aWR0aD1mLHRoaXMuaGVpZ2h0PWcsdGhpcy5jdXJyZW50UmVnaW9uPWN9LGluaXRUYXJnZXQ6ZnVuY3Rpb24oKXt2YXIgYT0hdGhpcy5vcHRpb25zLmdldChcImRpc2FibGVJbnRlcmFjdGlvblwiKTsodGhpcy50YXJnZXQ9dGhpcy4kZWwuc2ltcGxlZHJhdyh0aGlzLndpZHRoLHRoaXMuaGVpZ2h0LHRoaXMub3B0aW9ucy5nZXQoXCJjb21wb3NpdGVcIiksYSkpPyh0aGlzLmNhbnZhc1dpZHRoPXRoaXMudGFyZ2V0LnBpeGVsV2lkdGgsdGhpcy5jYW52YXNIZWlnaHQ9dGhpcy50YXJnZXQucGl4ZWxIZWlnaHQpOnRoaXMuZGlzYWJsZWQ9ITB9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRpc2FibGVkPyh0aGlzLmVsLmlubmVySFRNTD1cIlwiLCExKTohMH0sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsYil7fSxzZXRSZWdpb25IaWdobGlnaHQ6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPXRoaXMuY3VycmVudFJlZ2lvbixmPSF0aGlzLm9wdGlvbnMuZ2V0KFwiZGlzYWJsZUhpZ2hsaWdodFwiKSxnO3JldHVybiBiPnRoaXMuY2FudmFzV2lkdGh8fGQ+dGhpcy5jYW52YXNIZWlnaHR8fGI8MHx8ZDwwP251bGw6KGc9dGhpcy5nZXRSZWdpb24oYSxiLGQpLGUhPT1nPyhlIT09YyYmZiYmdGhpcy5yZW1vdmVIaWdobGlnaHQoKSx0aGlzLmN1cnJlbnRSZWdpb249ZyxnIT09YyYmZiYmdGhpcy5yZW5kZXJIaWdobGlnaHQoKSwhMCk6ITEpfSxjbGVhclJlZ2lvbkhpZ2hsaWdodDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRSZWdpb24hPT1jPyh0aGlzLnJlbW92ZUhpZ2hsaWdodCgpLHRoaXMuY3VycmVudFJlZ2lvbj1jLCEwKTohMX0scmVuZGVySGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5jaGFuZ2VIaWdobGlnaHQoITApfSxyZW1vdmVIaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmNoYW5nZUhpZ2hsaWdodCghMSl9LGNoYW5nZUhpZ2hsaWdodDpmdW5jdGlvbihhKXt9LGdldEN1cnJlbnRSZWdpb25Ub29sdGlwOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLGI9XCJcIixlPVtdLGYsZyxpLGosayxsLG0sbixvLHAscSxyLHMsdDtpZih0aGlzLmN1cnJlbnRSZWdpb249PT1jKXJldHVyblwiXCI7Zj10aGlzLmdldEN1cnJlbnRSZWdpb25GaWVsZHMoKSxxPWEuZ2V0KFwidG9vbHRpcEZvcm1hdHRlclwiKTtpZihxKXJldHVybiBxKHRoaXMsYSxmKTthLmdldChcInRvb2x0aXBDaGFydFRpdGxlXCIpJiYoYis9JzxkaXYgY2xhc3M9XCJqcXMganFzdGl0bGVcIj4nK2EuZ2V0KFwidG9vbHRpcENoYXJ0VGl0bGVcIikrXCI8L2Rpdj5cXG5cIiksZz10aGlzLm9wdGlvbnMuZ2V0KFwidG9vbHRpcEZvcm1hdFwiKTtpZighZylyZXR1cm5cIlwiO2QuaXNBcnJheShnKXx8KGc9W2ddKSxkLmlzQXJyYXkoZil8fChmPVtmXSksbT10aGlzLm9wdGlvbnMuZ2V0KFwidG9vbHRpcEZvcm1hdEZpZWxkbGlzdFwiKSxuPXRoaXMub3B0aW9ucy5nZXQoXCJ0b29sdGlwRm9ybWF0RmllbGRsaXN0S2V5XCIpO2lmKG0mJm4pe289W107Zm9yKGw9Zi5sZW5ndGg7bC0tOylwPWZbbF1bbl0sKHQ9ZC5pbkFycmF5KHAsbSkpIT0tMSYmKG9bdF09ZltsXSk7Zj1vfWk9Zy5sZW5ndGgscz1mLmxlbmd0aDtmb3IobD0wO2w8aTtsKyspe3I9Z1tsXSx0eXBlb2Ygcj09XCJzdHJpbmdcIiYmKHI9bmV3IGgocikpLGo9ci5mY2xhc3N8fFwianFzZmllbGRcIjtmb3IodD0wO3Q8czt0KyspaWYoIWZbdF0uaXNOdWxsfHwhYS5nZXQoXCJ0b29sdGlwU2tpcE51bGxcIikpZC5leHRlbmQoZlt0XSx7cHJlZml4OmEuZ2V0KFwidG9vbHRpcFByZWZpeFwiKSxzdWZmaXg6YS5nZXQoXCJ0b29sdGlwU3VmZml4XCIpfSksaz1yLnJlbmRlcihmW3RdLGEuZ2V0KFwidG9vbHRpcFZhbHVlTG9va3Vwc1wiKSxhKSxlLnB1c2goJzxkaXYgY2xhc3M9XCInK2orJ1wiPicraytcIjwvZGl2PlwiKX1yZXR1cm4gZS5sZW5ndGg/YitlLmpvaW4oXCJcXG5cIik6XCJcIn0sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe30sY2FsY0hpZ2hsaWdodENvbG9yOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9Yy5nZXQoXCJoaWdobGlnaHRDb2xvclwiKSxlPWMuZ2V0KFwiaGlnaGxpZ2h0TGlnaHRlblwiKSxmLGcsaCxqO2lmKGQpcmV0dXJuIGQ7aWYoZSl7Zj0vXiMoWzAtOWEtZl0pKFswLTlhLWZdKShbMC05YS1mXSkkL2kuZXhlYyhhKXx8L14jKFswLTlhLWZdezJ9KShbMC05YS1mXXsyfSkoWzAtOWEtZl17Mn0pJC9pLmV4ZWMoYSk7aWYoZil7aD1bXSxnPWEubGVuZ3RoPT09ND8xNjoxO2ZvcihqPTA7ajwzO2orKyloW2pdPWkoYi5yb3VuZChwYXJzZUludChmW2orMV0sMTYpKmcqZSksMCwyNTUpO3JldHVyblwicmdiKFwiK2guam9pbihcIixcIikrXCIpXCJ9fXJldHVybiBhfX0pLHc9e2NoYW5nZUhpZ2hsaWdodDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmN1cnJlbnRSZWdpb24sYz10aGlzLnRhcmdldCxlPXRoaXMucmVnaW9uU2hhcGVzW2JdLGY7ZSYmKGY9dGhpcy5yZW5kZXJSZWdpb24oYixhKSxkLmlzQXJyYXkoZil8fGQuaXNBcnJheShlKT8oYy5yZXBsYWNlV2l0aFNoYXBlcyhlLGYpLHRoaXMucmVnaW9uU2hhcGVzW2JdPWQubWFwKGYsZnVuY3Rpb24oYSl7cmV0dXJuIGEuaWR9KSk6KGMucmVwbGFjZVdpdGhTaGFwZShlLGYpLHRoaXMucmVnaW9uU2hhcGVzW2JdPWYuaWQpKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52YWx1ZXMsYj10aGlzLnRhcmdldCxjPXRoaXMucmVnaW9uU2hhcGVzLGUsZixnLGg7aWYoIXRoaXMuY2xzLl9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47Zm9yKGc9YS5sZW5ndGg7Zy0tOyl7ZT10aGlzLnJlbmRlclJlZ2lvbihnKTtpZihlKWlmKGQuaXNBcnJheShlKSl7Zj1bXTtmb3IoaD1lLmxlbmd0aDtoLS07KWVbaF0uYXBwZW5kKCksZi5wdXNoKGVbaF0uaWQpO2NbZ109Zn1lbHNlIGUuYXBwZW5kKCksY1tnXT1lLmlkO2Vsc2UgY1tnXT1udWxsfWIucmVuZGVyKCl9fSxkLmZuLnNwYXJrbGluZS5saW5lPXg9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx7dHlwZTpcImxpbmVcIixpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSl7eC5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxiLGMsZCxlKSx0aGlzLnZlcnRpY2VzPVtdLHRoaXMucmVnaW9uTWFwPVtdLHRoaXMueHZhbHVlcz1bXSx0aGlzLnl2YWx1ZXM9W10sdGhpcy55bWlubWF4PVtdLHRoaXMuaGlnaHRsaWdodFNwb3RJZD1udWxsLHRoaXMubGFzdFNoYXBlSWQ9bnVsbCx0aGlzLmluaXRUYXJnZXQoKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmPXRoaXMucmVnaW9uTWFwO2ZvcihlPWYubGVuZ3RoO2UtLTspaWYoZltlXSE9PW51bGwmJmI+PWZbZV1bMF0mJmI8PWZbZV1bMV0pcmV0dXJuIGZbZV1bMl07cmV0dXJuIGN9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2lzTnVsbDp0aGlzLnl2YWx1ZXNbYV09PT1udWxsLHg6dGhpcy54dmFsdWVzW2FdLHk6dGhpcy55dmFsdWVzW2FdLGNvbG9yOnRoaXMub3B0aW9ucy5nZXQoXCJsaW5lQ29sb3JcIiksZmlsbENvbG9yOnRoaXMub3B0aW9ucy5nZXQoXCJmaWxsQ29sb3JcIiksb2Zmc2V0OmF9fSxyZW5kZXJIaWdobGlnaHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb24sYj10aGlzLnRhcmdldCxkPXRoaXMudmVydGljZXNbYV0sZT10aGlzLm9wdGlvbnMsZj1lLmdldChcInNwb3RSYWRpdXNcIiksZz1lLmdldChcImhpZ2hsaWdodFNwb3RDb2xvclwiKSxoPWUuZ2V0KFwiaGlnaGxpZ2h0TGluZUNvbG9yXCIpLGksajtpZighZClyZXR1cm47ZiYmZyYmKGk9Yi5kcmF3Q2lyY2xlKGRbMF0sZFsxXSxmLGMsZyksdGhpcy5oaWdobGlnaHRTcG90SWQ9aS5pZCxiLmluc2VydEFmdGVyU2hhcGUodGhpcy5sYXN0U2hhcGVJZCxpKSksaCYmKGo9Yi5kcmF3TGluZShkWzBdLHRoaXMuY2FudmFzVG9wLGRbMF0sdGhpcy5jYW52YXNUb3ArdGhpcy5jYW52YXNIZWlnaHQsaCksdGhpcy5oaWdobGlnaHRMaW5lSWQ9ai5pZCxiLmluc2VydEFmdGVyU2hhcGUodGhpcy5sYXN0U2hhcGVJZCxqKSl9LHJlbW92ZUhpZ2hsaWdodDpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGFyZ2V0O3RoaXMuaGlnaGxpZ2h0U3BvdElkJiYoYS5yZW1vdmVTaGFwZUlkKHRoaXMuaGlnaGxpZ2h0U3BvdElkKSx0aGlzLmhpZ2hsaWdodFNwb3RJZD1udWxsKSx0aGlzLmhpZ2hsaWdodExpbmVJZCYmKGEucmVtb3ZlU2hhcGVJZCh0aGlzLmhpZ2hsaWdodExpbmVJZCksdGhpcy5oaWdobGlnaHRMaW5lSWQ9bnVsbCl9LHNjYW5WYWx1ZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnZhbHVlcyxjPWEubGVuZ3RoLGQ9dGhpcy54dmFsdWVzLGU9dGhpcy55dmFsdWVzLGY9dGhpcy55bWlubWF4LGcsaCxpLGosaztmb3IoZz0wO2c8YztnKyspaD1hW2ddLGk9dHlwZW9mIGFbZ109PVwic3RyaW5nXCIsaj10eXBlb2YgYVtnXT09XCJvYmplY3RcIiYmYVtnXWluc3RhbmNlb2YgQXJyYXksaz1pJiZhW2ddLnNwbGl0KFwiOlwiKSxpJiZrLmxlbmd0aD09PTI/KGQucHVzaChOdW1iZXIoa1swXSkpLGUucHVzaChOdW1iZXIoa1sxXSkpLGYucHVzaChOdW1iZXIoa1sxXSkpKTpqPyhkLnB1c2goaFswXSksZS5wdXNoKGhbMV0pLGYucHVzaChoWzFdKSk6KGQucHVzaChnKSxhW2ddPT09bnVsbHx8YVtnXT09PVwibnVsbFwiP2UucHVzaChudWxsKTooZS5wdXNoKE51bWJlcihoKSksZi5wdXNoKE51bWJlcihoKSkpKTt0aGlzLm9wdGlvbnMuZ2V0KFwieHZhbHVlc1wiKSYmKGQ9dGhpcy5vcHRpb25zLmdldChcInh2YWx1ZXNcIikpLHRoaXMubWF4eT10aGlzLm1heHlvcmc9Yi5tYXguYXBwbHkoYixmKSx0aGlzLm1pbnk9dGhpcy5taW55b3JnPWIubWluLmFwcGx5KGIsZiksdGhpcy5tYXh4PWIubWF4LmFwcGx5KGIsZCksdGhpcy5taW54PWIubWluLmFwcGx5KGIsZCksdGhpcy54dmFsdWVzPWQsdGhpcy55dmFsdWVzPWUsdGhpcy55bWlubWF4PWZ9LHByb2Nlc3NSYW5nZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMsYj1hLmdldChcIm5vcm1hbFJhbmdlTWluXCIpLGQ9YS5nZXQoXCJub3JtYWxSYW5nZU1heFwiKTtiIT09YyYmKGI8dGhpcy5taW55JiYodGhpcy5taW55PWIpLGQ+dGhpcy5tYXh5JiYodGhpcy5tYXh5PWQpKSxhLmdldChcImNoYXJ0UmFuZ2VNaW5cIikhPT1jJiYoYS5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8YS5nZXQoXCJjaGFydFJhbmdlTWluXCIpPHRoaXMubWlueSkmJih0aGlzLm1pbnk9YS5nZXQoXCJjaGFydFJhbmdlTWluXCIpKSxhLmdldChcImNoYXJ0UmFuZ2VNYXhcIikhPT1jJiYoYS5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8YS5nZXQoXCJjaGFydFJhbmdlTWF4XCIpPnRoaXMubWF4eSkmJih0aGlzLm1heHk9YS5nZXQoXCJjaGFydFJhbmdlTWF4XCIpKSxhLmdldChcImNoYXJ0UmFuZ2VNaW5YXCIpIT09YyYmKGEuZ2V0KFwiY2hhcnRSYW5nZUNsaXBYXCIpfHxhLmdldChcImNoYXJ0UmFuZ2VNaW5YXCIpPHRoaXMubWlueCkmJih0aGlzLm1pbng9YS5nZXQoXCJjaGFydFJhbmdlTWluWFwiKSksYS5nZXQoXCJjaGFydFJhbmdlTWF4WFwiKSE9PWMmJihhLmdldChcImNoYXJ0UmFuZ2VDbGlwWFwiKXx8YS5nZXQoXCJjaGFydFJhbmdlTWF4WFwiKT50aGlzLm1heHgpJiYodGhpcy5tYXh4PWEuZ2V0KFwiY2hhcnRSYW5nZU1heFhcIikpfSxkcmF3Tm9ybWFsUmFuZ2U6ZnVuY3Rpb24oYSxkLGUsZixnKXt2YXIgaD10aGlzLm9wdGlvbnMuZ2V0KFwibm9ybWFsUmFuZ2VNaW5cIiksaT10aGlzLm9wdGlvbnMuZ2V0KFwibm9ybWFsUmFuZ2VNYXhcIiksaj1kK2Iucm91bmQoZS1lKigoaS10aGlzLm1pbnkpL2cpKSxrPWIucm91bmQoZSooaS1oKS9nKTt0aGlzLnRhcmdldC5kcmF3UmVjdChhLGosZixrLGMsdGhpcy5vcHRpb25zLmdldChcIm5vcm1hbFJhbmdlQ29sb3JcIikpLmFwcGVuZCgpfSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMsZT10aGlzLnRhcmdldCxmPXRoaXMuY2FudmFzV2lkdGgsZz10aGlzLmNhbnZhc0hlaWdodCxoPXRoaXMudmVydGljZXMsaT1hLmdldChcInNwb3RSYWRpdXNcIiksaj10aGlzLnJlZ2lvbk1hcCxrLGwsbSxuLG8scCxxLHIscyx1LHYsdyx5LHosQSxCLEMsRCxFLEYsRyxILEksSixLO2lmKCF4Ll9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47dGhpcy5zY2FuVmFsdWVzKCksdGhpcy5wcm9jZXNzUmFuZ2VPcHRpb25zKCksST10aGlzLnh2YWx1ZXMsSj10aGlzLnl2YWx1ZXM7aWYoIXRoaXMueW1pbm1heC5sZW5ndGh8fHRoaXMueXZhbHVlcy5sZW5ndGg8MilyZXR1cm47bj1vPTAsaz10aGlzLm1heHgtdGhpcy5taW54PT09MD8xOnRoaXMubWF4eC10aGlzLm1pbngsbD10aGlzLm1heHktdGhpcy5taW55PT09MD8xOnRoaXMubWF4eS10aGlzLm1pbnksbT10aGlzLnl2YWx1ZXMubGVuZ3RoLTEsaSYmKGY8aSo0fHxnPGkqNCkmJihpPTApO2lmKGkpe0c9YS5nZXQoXCJoaWdobGlnaHRTcG90Q29sb3JcIikmJiFhLmdldChcImRpc2FibGVJbnRlcmFjdGlvblwiKTtpZihHfHxhLmdldChcIm1pblNwb3RDb2xvclwiKXx8YS5nZXQoXCJzcG90Q29sb3JcIikmJkpbbV09PT10aGlzLm1pbnkpZy09Yi5jZWlsKGkpO2lmKEd8fGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpfHxhLmdldChcInNwb3RDb2xvclwiKSYmSlttXT09PXRoaXMubWF4eSlnLT1iLmNlaWwoaSksbis9Yi5jZWlsKGkpO2lmKEd8fChhLmdldChcIm1pblNwb3RDb2xvclwiKXx8YS5nZXQoXCJtYXhTcG90Q29sb3JcIikpJiYoSlswXT09PXRoaXMubWlueXx8SlswXT09PXRoaXMubWF4eSkpbys9Yi5jZWlsKGkpLGYtPWIuY2VpbChpKTtpZihHfHxhLmdldChcInNwb3RDb2xvclwiKXx8YS5nZXQoXCJtaW5TcG90Q29sb3JcIil8fGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpJiYoSlttXT09PXRoaXMubWlueXx8SlttXT09PXRoaXMubWF4eSkpZi09Yi5jZWlsKGkpfWctLSxhLmdldChcIm5vcm1hbFJhbmdlTWluXCIpIT09YyYmIWEuZ2V0KFwiZHJhd05vcm1hbE9uVG9wXCIpJiZ0aGlzLmRyYXdOb3JtYWxSYW5nZShvLG4sZyxmLGwpLHE9W10scj1bcV0sej1BPW51bGwsQj1KLmxlbmd0aDtmb3IoSz0wO0s8QjtLKyspcz1JW0tdLHY9SVtLKzFdLHU9SltLXSx3PW8rYi5yb3VuZCgocy10aGlzLm1pbngpKihmL2spKSx5PUs8Qi0xP28rYi5yb3VuZCgodi10aGlzLm1pbngpKihmL2spKTpmLEE9dysoeS13KS8yLGpbS109W3p8fDAsQSxLXSx6PUEsdT09PW51bGw/SyYmKEpbSy0xXSE9PW51bGwmJihxPVtdLHIucHVzaChxKSksaC5wdXNoKG51bGwpKToodTx0aGlzLm1pbnkmJih1PXRoaXMubWlueSksdT50aGlzLm1heHkmJih1PXRoaXMubWF4eSkscS5sZW5ndGh8fHEucHVzaChbdyxuK2ddKSxwPVt3LG4rYi5yb3VuZChnLWcqKCh1LXRoaXMubWlueSkvbCkpXSxxLnB1c2gocCksaC5wdXNoKHApKTtDPVtdLEQ9W10sRT1yLmxlbmd0aDtmb3IoSz0wO0s8RTtLKyspcT1yW0tdLHEubGVuZ3RoJiYoYS5nZXQoXCJmaWxsQ29sb3JcIikmJihxLnB1c2goW3FbcS5sZW5ndGgtMV1bMF0sbitnXSksRC5wdXNoKHEuc2xpY2UoMCkpLHEucG9wKCkpLHEubGVuZ3RoPjImJihxWzBdPVtxWzBdWzBdLHFbMV1bMV1dKSxDLnB1c2gocSkpO0U9RC5sZW5ndGg7Zm9yKEs9MDtLPEU7SysrKWUuZHJhd1NoYXBlKERbS10sYS5nZXQoXCJmaWxsQ29sb3JcIiksYS5nZXQoXCJmaWxsQ29sb3JcIikpLmFwcGVuZCgpO2EuZ2V0KFwibm9ybWFsUmFuZ2VNaW5cIikhPT1jJiZhLmdldChcImRyYXdOb3JtYWxPblRvcFwiKSYmdGhpcy5kcmF3Tm9ybWFsUmFuZ2UobyxuLGcsZixsKSxFPUMubGVuZ3RoO2ZvcihLPTA7SzxFO0srKyllLmRyYXdTaGFwZShDW0tdLGEuZ2V0KFwibGluZUNvbG9yXCIpLGMsYS5nZXQoXCJsaW5lV2lkdGhcIikpLmFwcGVuZCgpO2lmKGkmJmEuZ2V0KFwidmFsdWVTcG90c1wiKSl7Rj1hLmdldChcInZhbHVlU3BvdHNcIiksRi5nZXQ9PT1jJiYoRj1uZXcgdChGKSk7Zm9yKEs9MDtLPEI7SysrKUg9Ri5nZXQoSltLXSksSCYmZS5kcmF3Q2lyY2xlKG8rYi5yb3VuZCgoSVtLXS10aGlzLm1pbngpKihmL2spKSxuK2Iucm91bmQoZy1nKigoSltLXS10aGlzLm1pbnkpL2wpKSxpLGMsSCkuYXBwZW5kKCl9aSYmYS5nZXQoXCJzcG90Q29sb3JcIikmJkpbbV0hPT1udWxsJiZlLmRyYXdDaXJjbGUobytiLnJvdW5kKChJW0kubGVuZ3RoLTFdLXRoaXMubWlueCkqKGYvaykpLG4rYi5yb3VuZChnLWcqKChKW21dLXRoaXMubWlueSkvbCkpLGksYyxhLmdldChcInNwb3RDb2xvclwiKSkuYXBwZW5kKCksdGhpcy5tYXh5IT09dGhpcy5taW55b3JnJiYoaSYmYS5nZXQoXCJtaW5TcG90Q29sb3JcIikmJihzPUlbZC5pbkFycmF5KHRoaXMubWlueW9yZyxKKV0sZS5kcmF3Q2lyY2xlKG8rYi5yb3VuZCgocy10aGlzLm1pbngpKihmL2spKSxuK2Iucm91bmQoZy1nKigodGhpcy5taW55b3JnLXRoaXMubWlueSkvbCkpLGksYyxhLmdldChcIm1pblNwb3RDb2xvclwiKSkuYXBwZW5kKCkpLGkmJmEuZ2V0KFwibWF4U3BvdENvbG9yXCIpJiYocz1JW2QuaW5BcnJheSh0aGlzLm1heHlvcmcsSildLGUuZHJhd0NpcmNsZShvK2Iucm91bmQoKHMtdGhpcy5taW54KSooZi9rKSksbitiLnJvdW5kKGctZyooKHRoaXMubWF4eW9yZy10aGlzLm1pbnkpL2wpKSxpLGMsYS5nZXQoXCJtYXhTcG90Q29sb3JcIikpLmFwcGVuZCgpKSksdGhpcy5sYXN0U2hhcGVJZD1lLmdldExhc3RTaGFwZUlkKCksdGhpcy5jYW52YXNUb3A9bixlLnJlbmRlcigpfX0pLGQuZm4uc3BhcmtsaW5lLmJhcj15PWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Usdyx7dHlwZTpcImJhclwiLGluaXQ6ZnVuY3Rpb24oYSxlLGYsZyxoKXt2YXIgaj1wYXJzZUludChmLmdldChcImJhcldpZHRoXCIpLDEwKSxuPXBhcnNlSW50KGYuZ2V0KFwiYmFyU3BhY2luZ1wiKSwxMCksbz1mLmdldChcImNoYXJ0UmFuZ2VNaW5cIikscD1mLmdldChcImNoYXJ0UmFuZ2VNYXhcIikscT1mLmdldChcImNoYXJ0UmFuZ2VDbGlwXCIpLHI9SW5maW5pdHkscz0tSW5maW5pdHksdSx2LHcseCx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSO3kuX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsZSxmLGcsaCk7Zm9yKEE9MCxCPWUubGVuZ3RoO0E8QjtBKyspe089ZVtBXSx1PXR5cGVvZiBPPT1cInN0cmluZ1wiJiZPLmluZGV4T2YoXCI6XCIpPi0xO2lmKHV8fGQuaXNBcnJheShPKSlKPSEwLHUmJihPPWVbQV09bChPLnNwbGl0KFwiOlwiKSkpLE89bShPLG51bGwpLHY9Yi5taW4uYXBwbHkoYixPKSx3PWIubWF4LmFwcGx5KGIsTyksdjxyJiYocj12KSx3PnMmJihzPXcpfXRoaXMuc3RhY2tlZD1KLHRoaXMucmVnaW9uU2hhcGVzPXt9LHRoaXMuYmFyV2lkdGg9aix0aGlzLmJhclNwYWNpbmc9bix0aGlzLnRvdGFsQmFyV2lkdGg9aituLHRoaXMud2lkdGg9Zz1lLmxlbmd0aCpqKyhlLmxlbmd0aC0xKSpuLHRoaXMuaW5pdFRhcmdldCgpLHEmJihIPW89PT1jPy1JbmZpbml0eTpvLEk9cD09PWM/SW5maW5pdHk6cCksej1bXSx4PUo/W106ejt2YXIgUz1bXSxUPVtdO2ZvcihBPTAsQj1lLmxlbmd0aDtBPEI7QSsrKWlmKEope0s9ZVtBXSxlW0FdPU49W10sU1tBXT0wLHhbQV09VFtBXT0wO2ZvcihMPTAsTT1LLmxlbmd0aDtMPE07TCsrKU89TltMXT1xP2koS1tMXSxILEkpOktbTF0sTyE9PW51bGwmJihPPjAmJihTW0FdKz1PKSxyPDAmJnM+MD9PPDA/VFtBXSs9Yi5hYnMoTyk6eFtBXSs9Tzp4W0FdKz1iLmFicyhPLShPPDA/czpyKSksei5wdXNoKE8pKX1lbHNlIE89cT9pKGVbQV0sSCxJKTplW0FdLE89ZVtBXT1rKE8pLE8hPT1udWxsJiZ6LnB1c2goTyk7dGhpcy5tYXg9Rz1iLm1heC5hcHBseShiLHopLHRoaXMubWluPUY9Yi5taW4uYXBwbHkoYix6KSx0aGlzLnN0YWNrTWF4PXM9Sj9iLm1heC5hcHBseShiLFMpOkcsdGhpcy5zdGFja01pbj1yPUo/Yi5taW4uYXBwbHkoYix6KTpGLGYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSE9PWMmJihmLmdldChcImNoYXJ0UmFuZ2VDbGlwXCIpfHxmLmdldChcImNoYXJ0UmFuZ2VNaW5cIik8RikmJihGPWYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSksZi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpIT09YyYmKGYuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT5HKSYmKEc9Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpKSx0aGlzLnplcm9BeGlzPUQ9Zi5nZXQoXCJ6ZXJvQXhpc1wiLCEwKSxGPD0wJiZHPj0wJiZEP0U9MDpEPT0wP0U9RjpGPjA/RT1GOkU9Ryx0aGlzLnhheGlzT2Zmc2V0PUUsQz1KP2IubWF4LmFwcGx5KGIseCkrYi5tYXguYXBwbHkoYixUKTpHLUYsdGhpcy5jYW52YXNIZWlnaHRFZj1EJiZGPDA/dGhpcy5jYW52YXNIZWlnaHQtMjp0aGlzLmNhbnZhc0hlaWdodC0xLEY8RT8oUT1KJiZHPj0wP3M6RyxQPShRLUUpL0MqdGhpcy5jYW52YXNIZWlnaHQsUCE9PWIuY2VpbChQKSYmKHRoaXMuY2FudmFzSGVpZ2h0RWYtPTIsUD1iLmNlaWwoUCkpKTpQPXRoaXMuY2FudmFzSGVpZ2h0LHRoaXMueW9mZnNldD1QLGQuaXNBcnJheShmLmdldChcImNvbG9yTWFwXCIpKT8odGhpcy5jb2xvck1hcEJ5SW5kZXg9Zi5nZXQoXCJjb2xvck1hcFwiKSx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1udWxsKToodGhpcy5jb2xvck1hcEJ5SW5kZXg9bnVsbCx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1mLmdldChcImNvbG9yTWFwXCIpLHRoaXMuY29sb3JNYXBCeVZhbHVlJiZ0aGlzLmNvbG9yTWFwQnlWYWx1ZS5nZXQ9PT1jJiYodGhpcy5jb2xvck1hcEJ5VmFsdWU9bmV3IHQodGhpcy5jb2xvck1hcEJ5VmFsdWUpKSksdGhpcy5yYW5nZT1DfSxnZXRSZWdpb246ZnVuY3Rpb24oYSxkLGUpe3ZhciBmPWIuZmxvb3IoZC90aGlzLnRvdGFsQmFyV2lkdGgpO3JldHVybiBmPDB8fGY+PXRoaXMudmFsdWVzLmxlbmd0aD9jOmZ9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb24sYj1yKHRoaXMudmFsdWVzW2FdKSxjPVtdLGQsZTtmb3IoZT1iLmxlbmd0aDtlLS07KWQ9YltlXSxjLnB1c2goe2lzTnVsbDpkPT09bnVsbCx2YWx1ZTpkLGNvbG9yOnRoaXMuY2FsY0NvbG9yKGUsZCxhKSxvZmZzZXQ6YX0pO3JldHVybiBjfSxjYWxjQ29sb3I6ZnVuY3Rpb24oYSxiLGUpe3ZhciBmPXRoaXMuY29sb3JNYXBCeUluZGV4LGc9dGhpcy5jb2xvck1hcEJ5VmFsdWUsaD10aGlzLm9wdGlvbnMsaSxqO3JldHVybiB0aGlzLnN0YWNrZWQ/aT1oLmdldChcInN0YWNrZWRCYXJDb2xvclwiKTppPWI8MD9oLmdldChcIm5lZ0JhckNvbG9yXCIpOmguZ2V0KFwiYmFyQ29sb3JcIiksYj09PTAmJmguZ2V0KFwiemVyb0NvbG9yXCIpIT09YyYmKGk9aC5nZXQoXCJ6ZXJvQ29sb3JcIikpLGcmJihqPWcuZ2V0KGIpKT9pPWo6ZiYmZi5sZW5ndGg+ZSYmKGk9ZltlXSksZC5pc0FycmF5KGkpP2lbYSVpLmxlbmd0aF06aX0scmVuZGVyUmVnaW9uOmZ1bmN0aW9uKGEsZSl7dmFyIGY9dGhpcy52YWx1ZXNbYV0sZz10aGlzLm9wdGlvbnMsaD10aGlzLnhheGlzT2Zmc2V0LGk9W10saj10aGlzLnJhbmdlLGs9dGhpcy5zdGFja2VkLGw9dGhpcy50YXJnZXQsbT1hKnRoaXMudG90YWxCYXJXaWR0aCxuPXRoaXMuY2FudmFzSGVpZ2h0RWYscD10aGlzLnlvZmZzZXQscSxyLHMsdCx1LHYsdyx4LHksejtmPWQuaXNBcnJheShmKT9mOltmXSx3PWYubGVuZ3RoLHg9ZlswXSx0PW8obnVsbCxmKSx6PW8oaCxmLCEwKTtpZih0KXJldHVybiBnLmdldChcIm51bGxDb2xvclwiKT8ocz1lP2cuZ2V0KFwibnVsbENvbG9yXCIpOnRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKGcuZ2V0KFwibnVsbENvbG9yXCIpLGcpLHE9cD4wP3AtMTpwLGwuZHJhd1JlY3QobSxxLHRoaXMuYmFyV2lkdGgtMSwwLHMscykpOmM7dT1wO2Zvcih2PTA7djx3O3YrKyl7eD1mW3ZdO2lmKGsmJng9PT1oKXtpZighenx8eSljb250aW51ZTt5PSEwfWo+MD9yPWIuZmxvb3IobiooYi5hYnMoeC1oKS9qKSkrMTpyPTEseDxofHx4PT09aCYmcD09PTA/KHE9dSx1Kz1yKToocT1wLXIscC09cikscz10aGlzLmNhbGNDb2xvcih2LHgsYSksZSYmKHM9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IocyxnKSksaS5wdXNoKGwuZHJhd1JlY3QobSxxLHRoaXMuYmFyV2lkdGgtMSxyLTEscyxzKSl9cmV0dXJuIGkubGVuZ3RoPT09MT9pWzBdOml9fSksZC5mbi5zcGFya2xpbmUudHJpc3RhdGU9ej1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHcse3R5cGU6XCJ0cmlzdGF0ZVwiLGluaXQ6ZnVuY3Rpb24oYSxiLGUsZixnKXt2YXIgaD1wYXJzZUludChlLmdldChcImJhcldpZHRoXCIpLDEwKSxpPXBhcnNlSW50KGUuZ2V0KFwiYmFyU3BhY2luZ1wiKSwxMCk7ei5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxiLGUsZixnKSx0aGlzLnJlZ2lvblNoYXBlcz17fSx0aGlzLmJhcldpZHRoPWgsdGhpcy5iYXJTcGFjaW5nPWksdGhpcy50b3RhbEJhcldpZHRoPWgraSx0aGlzLnZhbHVlcz1kLm1hcChiLE51bWJlciksdGhpcy53aWR0aD1mPWIubGVuZ3RoKmgrKGIubGVuZ3RoLTEpKmksZC5pc0FycmF5KGUuZ2V0KFwiY29sb3JNYXBcIikpPyh0aGlzLmNvbG9yTWFwQnlJbmRleD1lLmdldChcImNvbG9yTWFwXCIpLHRoaXMuY29sb3JNYXBCeVZhbHVlPW51bGwpOih0aGlzLmNvbG9yTWFwQnlJbmRleD1udWxsLHRoaXMuY29sb3JNYXBCeVZhbHVlPWUuZ2V0KFwiY29sb3JNYXBcIiksdGhpcy5jb2xvck1hcEJ5VmFsdWUmJnRoaXMuY29sb3JNYXBCeVZhbHVlLmdldD09PWMmJih0aGlzLmNvbG9yTWFwQnlWYWx1ZT1uZXcgdCh0aGlzLmNvbG9yTWFwQnlWYWx1ZSkpKSx0aGlzLmluaXRUYXJnZXQoKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYi5mbG9vcihjL3RoaXMudG90YWxCYXJXaWR0aCl9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2lzTnVsbDp0aGlzLnZhbHVlc1thXT09PWMsdmFsdWU6dGhpcy52YWx1ZXNbYV0sY29sb3I6dGhpcy5jYWxjQ29sb3IodGhpcy52YWx1ZXNbYV0sYSksb2Zmc2V0OmF9fSxjYWxjQ29sb3I6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnZhbHVlcyxkPXRoaXMub3B0aW9ucyxlPXRoaXMuY29sb3JNYXBCeUluZGV4LGY9dGhpcy5jb2xvck1hcEJ5VmFsdWUsZyxoO3JldHVybiBmJiYoaD1mLmdldChhKSk/Zz1oOmUmJmUubGVuZ3RoPmI/Zz1lW2JdOmNbYl08MD9nPWQuZ2V0KFwibmVnQmFyQ29sb3JcIik6Y1tiXT4wP2c9ZC5nZXQoXCJwb3NCYXJDb2xvclwiKTpnPWQuZ2V0KFwiemVyb0JhckNvbG9yXCIpLGd9LHJlbmRlclJlZ2lvbjpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMudmFsdWVzLGU9dGhpcy5vcHRpb25zLGY9dGhpcy50YXJnZXQsZyxoLGksaixrLGw7Zz1mLnBpeGVsSGVpZ2h0LGk9Yi5yb3VuZChnLzIpLGo9YSp0aGlzLnRvdGFsQmFyV2lkdGgsZFthXTwwPyhrPWksaD1pLTEpOmRbYV0+MD8oaz0wLGg9aS0xKTooaz1pLTEsaD0yKSxsPXRoaXMuY2FsY0NvbG9yKGRbYV0sYSk7aWYobD09PW51bGwpcmV0dXJuO3JldHVybiBjJiYobD10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihsLGUpKSxmLmRyYXdSZWN0KGosayx0aGlzLmJhcldpZHRoLTEsaC0xLGwsbCl9fSksZC5mbi5zcGFya2xpbmUuZGlzY3JldGU9QT1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHcse3R5cGU6XCJkaXNjcmV0ZVwiLGluaXQ6ZnVuY3Rpb24oYSxlLGYsZyxoKXtBLl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGUsZixnLGgpLHRoaXMucmVnaW9uU2hhcGVzPXt9LHRoaXMudmFsdWVzPWU9ZC5tYXAoZSxOdW1iZXIpLHRoaXMubWluPWIubWluLmFwcGx5KGIsZSksdGhpcy5tYXg9Yi5tYXguYXBwbHkoYixlKSx0aGlzLnJhbmdlPXRoaXMubWF4LXRoaXMubWluLHRoaXMud2lkdGg9Zz1mLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/ZS5sZW5ndGgqMjp0aGlzLndpZHRoLHRoaXMuaW50ZXJ2YWw9Yi5mbG9vcihnL2UubGVuZ3RoKSx0aGlzLml0ZW1XaWR0aD1nL2UubGVuZ3RoLGYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSE9PWMmJihmLmdldChcImNoYXJ0UmFuZ2VDbGlwXCIpfHxmLmdldChcImNoYXJ0UmFuZ2VNaW5cIik8dGhpcy5taW4pJiYodGhpcy5taW49Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpKSxmLmdldChcImNoYXJ0UmFuZ2VNYXhcIikhPT1jJiYoZi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpPnRoaXMubWF4KSYmKHRoaXMubWF4PWYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSksdGhpcy5pbml0VGFyZ2V0KCksdGhpcy50YXJnZXQmJih0aGlzLmxpbmVIZWlnaHQ9Zi5nZXQoXCJsaW5lSGVpZ2h0XCIpPT09XCJhdXRvXCI/Yi5yb3VuZCh0aGlzLmNhbnZhc0hlaWdodCouMyk6Zi5nZXQoXCJsaW5lSGVpZ2h0XCIpKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYi5mbG9vcihjL3RoaXMuaXRlbVdpZHRoKX0sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY3VycmVudFJlZ2lvbjtyZXR1cm57aXNOdWxsOnRoaXMudmFsdWVzW2FdPT09Yyx2YWx1ZTp0aGlzLnZhbHVlc1thXSxvZmZzZXQ6YX19LHJlbmRlclJlZ2lvbjpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMudmFsdWVzLGU9dGhpcy5vcHRpb25zLGY9dGhpcy5taW4sZz10aGlzLm1heCxoPXRoaXMucmFuZ2Usaj10aGlzLmludGVydmFsLGs9dGhpcy50YXJnZXQsbD10aGlzLmNhbnZhc0hlaWdodCxtPXRoaXMubGluZUhlaWdodCxuPWwtbSxvLHAscSxyO3JldHVybiBwPWkoZFthXSxmLGcpLHI9YSpqLG89Yi5yb3VuZChuLW4qKChwLWYpL2gpKSxxPWUuZ2V0KFwidGhyZXNob2xkQ29sb3JcIikmJnA8ZS5nZXQoXCJ0aHJlc2hvbGRWYWx1ZVwiKT9lLmdldChcInRocmVzaG9sZENvbG9yXCIpOmUuZ2V0KFwibGluZUNvbG9yXCIpLGMmJihxPXRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKHEsZSkpLGsuZHJhd0xpbmUocixvLHIsbyttLHEpfX0pLGQuZm4uc3BhcmtsaW5lLmJ1bGxldD1CPWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJidWxsZXRcIixpbml0OmZ1bmN0aW9uKGEsZCxlLGYsZyl7dmFyIGgsaSxqO0IuX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsZCxlLGYsZyksdGhpcy52YWx1ZXM9ZD1sKGQpLGo9ZC5zbGljZSgpLGpbMF09alswXT09PW51bGw/alsyXTpqWzBdLGpbMV09ZFsxXT09PW51bGw/alsyXTpqWzFdLGg9Yi5taW4uYXBwbHkoYixkKSxpPWIubWF4LmFwcGx5KGIsZCksZS5nZXQoXCJiYXNlXCIpPT09Yz9oPWg8MD9oOjA6aD1lLmdldChcImJhc2VcIiksdGhpcy5taW49aCx0aGlzLm1heD1pLHRoaXMucmFuZ2U9aS1oLHRoaXMuc2hhcGVzPXt9LHRoaXMudmFsdWVTaGFwZXM9e30sdGhpcy5yZWdpb25kYXRhPXt9LHRoaXMud2lkdGg9Zj1lLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/XCI0LjBlbVwiOmYsdGhpcy50YXJnZXQ9dGhpcy4kZWwuc2ltcGxlZHJhdyhmLGcsZS5nZXQoXCJjb21wb3NpdGVcIikpLGQubGVuZ3RofHwodGhpcy5kaXNhYmxlZD0hMCksdGhpcy5pbml0VGFyZ2V0KCl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIsZCl7dmFyIGU9dGhpcy50YXJnZXQuZ2V0U2hhcGVBdChhLGIsZCk7cmV0dXJuIGUhPT1jJiZ0aGlzLnNoYXBlc1tlXSE9PWM/dGhpcy5zaGFwZXNbZV06Y30sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY3VycmVudFJlZ2lvbjtyZXR1cm57ZmllbGRrZXk6YS5zdWJzdHIoMCwxKSx2YWx1ZTp0aGlzLnZhbHVlc1thLnN1YnN0cigxKV0scmVnaW9uOmF9fSxjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jdXJyZW50UmVnaW9uLGM9dGhpcy52YWx1ZVNoYXBlc1tiXSxkO2RlbGV0ZSB0aGlzLnNoYXBlc1tjXTtzd2l0Y2goYi5zdWJzdHIoMCwxKSl7Y2FzZVwiclwiOmQ9dGhpcy5yZW5kZXJSYW5nZShiLnN1YnN0cigxKSxhKTticmVhaztjYXNlXCJwXCI6ZD10aGlzLnJlbmRlclBlcmZvcm1hbmNlKGEpO2JyZWFrO2Nhc2VcInRcIjpkPXRoaXMucmVuZGVyVGFyZ2V0KGEpfXRoaXMudmFsdWVTaGFwZXNbYl09ZC5pZCx0aGlzLnNoYXBlc1tkLmlkXT1iLHRoaXMudGFyZ2V0LnJlcGxhY2VXaXRoU2hhcGUoYyxkKX0scmVuZGVyUmFuZ2U6ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLnZhbHVlc1thXSxlPWIucm91bmQodGhpcy5jYW52YXNXaWR0aCooKGQtdGhpcy5taW4pL3RoaXMucmFuZ2UpKSxmPXRoaXMub3B0aW9ucy5nZXQoXCJyYW5nZUNvbG9yc1wiKVthLTJdO3JldHVybiBjJiYoZj10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihmLHRoaXMub3B0aW9ucykpLHRoaXMudGFyZ2V0LmRyYXdSZWN0KDAsMCxlLTEsdGhpcy5jYW52YXNIZWlnaHQtMSxmLGYpfSxyZW5kZXJQZXJmb3JtYW5jZTpmdW5jdGlvbihhKXt2YXIgYz10aGlzLnZhbHVlc1sxXSxkPWIucm91bmQodGhpcy5jYW52YXNXaWR0aCooKGMtdGhpcy5taW4pL3RoaXMucmFuZ2UpKSxlPXRoaXMub3B0aW9ucy5nZXQoXCJwZXJmb3JtYW5jZUNvbG9yXCIpO3JldHVybiBhJiYoZT10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihlLHRoaXMub3B0aW9ucykpLHRoaXMudGFyZ2V0LmRyYXdSZWN0KDAsYi5yb3VuZCh0aGlzLmNhbnZhc0hlaWdodCouMyksZC0xLGIucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjQpLTEsZSxlKX0scmVuZGVyVGFyZ2V0OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMudmFsdWVzWzBdLGQ9Yi5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoKigoYy10aGlzLm1pbikvdGhpcy5yYW5nZSktdGhpcy5vcHRpb25zLmdldChcInRhcmdldFdpZHRoXCIpLzIpLGU9Yi5yb3VuZCh0aGlzLmNhbnZhc0hlaWdodCouMSksZj10aGlzLmNhbnZhc0hlaWdodC1lKjIsZz10aGlzLm9wdGlvbnMuZ2V0KFwidGFyZ2V0Q29sb3JcIik7cmV0dXJuIGEmJihnPXRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKGcsdGhpcy5vcHRpb25zKSksdGhpcy50YXJnZXQuZHJhd1JlY3QoZCxlLHRoaXMub3B0aW9ucy5nZXQoXCJ0YXJnZXRXaWR0aFwiKS0xLGYtMSxnLGcpfSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnZhbHVlcy5sZW5ndGgsYj10aGlzLnRhcmdldCxjLGQ7aWYoIUIuX3N1cGVyLnJlbmRlci5jYWxsKHRoaXMpKXJldHVybjtmb3IoYz0yO2M8YTtjKyspZD10aGlzLnJlbmRlclJhbmdlKGMpLmFwcGVuZCgpLHRoaXMuc2hhcGVzW2QuaWRdPVwiclwiK2MsdGhpcy52YWx1ZVNoYXBlc1tcInJcIitjXT1kLmlkO3RoaXMudmFsdWVzWzFdIT09bnVsbCYmKGQ9dGhpcy5yZW5kZXJQZXJmb3JtYW5jZSgpLmFwcGVuZCgpLHRoaXMuc2hhcGVzW2QuaWRdPVwicDFcIix0aGlzLnZhbHVlU2hhcGVzLnAxPWQuaWQpLHRoaXMudmFsdWVzWzBdIT09bnVsbCYmKGQ9dGhpcy5yZW5kZXJUYXJnZXQoKS5hcHBlbmQoKSx0aGlzLnNoYXBlc1tkLmlkXT1cInQwXCIsdGhpcy52YWx1ZVNoYXBlcy50MD1kLmlkKSxiLnJlbmRlcigpfX0pLGQuZm4uc3BhcmtsaW5lLnBpZT1DPWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJwaWVcIixpbml0OmZ1bmN0aW9uKGEsYyxlLGYsZyl7dmFyIGg9MCxpO0MuX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsYyxlLGYsZyksdGhpcy5zaGFwZXM9e30sdGhpcy52YWx1ZVNoYXBlcz17fSx0aGlzLnZhbHVlcz1jPWQubWFwKGMsTnVtYmVyKSxlLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCImJih0aGlzLndpZHRoPXRoaXMuaGVpZ2h0KTtpZihjLmxlbmd0aD4wKWZvcihpPWMubGVuZ3RoO2ktLTspaCs9Y1tpXTt0aGlzLnRvdGFsPWgsdGhpcy5pbml0VGFyZ2V0KCksdGhpcy5yYWRpdXM9Yi5mbG9vcihiLm1pbih0aGlzLmNhbnZhc1dpZHRoLHRoaXMuY2FudmFzSGVpZ2h0KS8yKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLnRhcmdldC5nZXRTaGFwZUF0KGEsYixkKTtyZXR1cm4gZSE9PWMmJnRoaXMuc2hhcGVzW2VdIT09Yz90aGlzLnNoYXBlc1tlXTpjfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uO3JldHVybntpc051bGw6dGhpcy52YWx1ZXNbYV09PT1jLHZhbHVlOnRoaXMudmFsdWVzW2FdLHBlcmNlbnQ6dGhpcy52YWx1ZXNbYV0vdGhpcy50b3RhbCoxMDAsY29sb3I6dGhpcy5vcHRpb25zLmdldChcInNsaWNlQ29sb3JzXCIpW2EldGhpcy5vcHRpb25zLmdldChcInNsaWNlQ29sb3JzXCIpLmxlbmd0aF0sb2Zmc2V0OmF9fSxjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jdXJyZW50UmVnaW9uLGM9dGhpcy5yZW5kZXJTbGljZShiLGEpLGQ9dGhpcy52YWx1ZVNoYXBlc1tiXTtkZWxldGUgdGhpcy5zaGFwZXNbZF0sdGhpcy50YXJnZXQucmVwbGFjZVdpdGhTaGFwZShkLGMpLHRoaXMudmFsdWVTaGFwZXNbYl09Yy5pZCx0aGlzLnNoYXBlc1tjLmlkXT1ifSxyZW5kZXJTbGljZTpmdW5jdGlvbihhLGQpe3ZhciBlPXRoaXMudGFyZ2V0LGY9dGhpcy5vcHRpb25zLGc9dGhpcy5yYWRpdXMsaD1mLmdldChcImJvcmRlcldpZHRoXCIpLGk9Zi5nZXQoXCJvZmZzZXRcIiksaj0yKmIuUEksaz10aGlzLnZhbHVlcyxsPXRoaXMudG90YWwsbT1pPzIqYi5QSSooaS8zNjApOjAsbixvLHAscSxyO3E9ay5sZW5ndGg7Zm9yKHA9MDtwPHE7cCsrKXtuPW0sbz1tLGw+MCYmKG89bStqKihrW3BdL2wpKTtpZihhPT09cClyZXR1cm4gcj1mLmdldChcInNsaWNlQ29sb3JzXCIpW3AlZi5nZXQoXCJzbGljZUNvbG9yc1wiKS5sZW5ndGhdLGQmJihyPXRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKHIsZikpLGUuZHJhd1BpZVNsaWNlKGcsZyxnLWgsbixvLGMscik7bT1vfX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50YXJnZXQsZD10aGlzLnZhbHVlcyxlPXRoaXMub3B0aW9ucyxmPXRoaXMucmFkaXVzLGc9ZS5nZXQoXCJib3JkZXJXaWR0aFwiKSxoLGk7aWYoIUMuX3N1cGVyLnJlbmRlci5jYWxsKHRoaXMpKXJldHVybjtnJiZhLmRyYXdDaXJjbGUoZixmLGIuZmxvb3IoZi1nLzIpLGUuZ2V0KFwiYm9yZGVyQ29sb3JcIiksYyxnKS5hcHBlbmQoKTtmb3IoaT1kLmxlbmd0aDtpLS07KWRbaV0mJihoPXRoaXMucmVuZGVyU2xpY2UoaSkuYXBwZW5kKCksdGhpcy52YWx1ZVNoYXBlc1tpXT1oLmlkLHRoaXMuc2hhcGVzW2guaWRdPWkpO2EucmVuZGVyKCl9fSksZC5mbi5zcGFya2xpbmUuYm94PUQ9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx7dHlwZTpcImJveFwiLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZSxmKXtELl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGIsYyxlLGYpLHRoaXMudmFsdWVzPWQubWFwKGIsTnVtYmVyKSx0aGlzLndpZHRoPWMuZ2V0KFwid2lkdGhcIik9PT1cImF1dG9cIj9cIjQuMGVtXCI6ZSx0aGlzLmluaXRUYXJnZXQoKSx0aGlzLnZhbHVlcy5sZW5ndGh8fCh0aGlzLmRpc2FibGVkPTEpfSxnZXRSZWdpb246ZnVuY3Rpb24oKXtyZXR1cm4gMX0sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe3ZhciBhPVt7ZmllbGQ6XCJscVwiLHZhbHVlOnRoaXMucXVhcnRpbGVzWzBdfSx7ZmllbGQ6XCJtZWRcIix2YWx1ZTp0aGlzLnF1YXJ0aWxlc1xuWzFdfSx7ZmllbGQ6XCJ1cVwiLHZhbHVlOnRoaXMucXVhcnRpbGVzWzJdfV07cmV0dXJuIHRoaXMubG91dGxpZXIhPT1jJiZhLnB1c2goe2ZpZWxkOlwibG9cIix2YWx1ZTp0aGlzLmxvdXRsaWVyfSksdGhpcy5yb3V0bGllciE9PWMmJmEucHVzaCh7ZmllbGQ6XCJyb1wiLHZhbHVlOnRoaXMucm91dGxpZXJ9KSx0aGlzLmx3aGlza2VyIT09YyYmYS5wdXNoKHtmaWVsZDpcImx3XCIsdmFsdWU6dGhpcy5sd2hpc2tlcn0pLHRoaXMucndoaXNrZXIhPT1jJiZhLnB1c2goe2ZpZWxkOlwicndcIix2YWx1ZTp0aGlzLnJ3aGlza2VyfSksYX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50YXJnZXQsZD10aGlzLnZhbHVlcyxlPWQubGVuZ3RoLGY9dGhpcy5vcHRpb25zLGc9dGhpcy5jYW52YXNXaWR0aCxoPXRoaXMuY2FudmFzSGVpZ2h0LGk9Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpPT09Yz9iLm1pbi5hcHBseShiLGQpOmYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSxrPWYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT09PWM/Yi5tYXguYXBwbHkoYixkKTpmLmdldChcImNoYXJ0UmFuZ2VNYXhcIiksbD0wLG0sbixvLHAscSxyLHMsdCx1LHYsdztpZighRC5fc3VwZXIucmVuZGVyLmNhbGwodGhpcykpcmV0dXJuO2lmKGYuZ2V0KFwicmF3XCIpKWYuZ2V0KFwic2hvd091dGxpZXJzXCIpJiZkLmxlbmd0aD41PyhuPWRbMF0sbT1kWzFdLHA9ZFsyXSxxPWRbM10scj1kWzRdLHM9ZFs1XSx0PWRbNl0pOihtPWRbMF0scD1kWzFdLHE9ZFsyXSxyPWRbM10scz1kWzRdKTtlbHNle2Quc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLWJ9KSxwPWooZCwxKSxxPWooZCwyKSxyPWooZCwzKSxvPXItcDtpZihmLmdldChcInNob3dPdXRsaWVyc1wiKSl7bT1zPWM7Zm9yKHU9MDt1PGU7dSsrKW09PT1jJiZkW3VdPnAtbypmLmdldChcIm91dGxpZXJJUVJcIikmJihtPWRbdV0pLGRbdV08citvKmYuZ2V0KFwib3V0bGllcklRUlwiKSYmKHM9ZFt1XSk7bj1kWzBdLHQ9ZFtlLTFdfWVsc2UgbT1kWzBdLHM9ZFtlLTFdfXRoaXMucXVhcnRpbGVzPVtwLHEscl0sdGhpcy5sd2hpc2tlcj1tLHRoaXMucndoaXNrZXI9cyx0aGlzLmxvdXRsaWVyPW4sdGhpcy5yb3V0bGllcj10LHc9Zy8oay1pKzEpLGYuZ2V0KFwic2hvd091dGxpZXJzXCIpJiYobD1iLmNlaWwoZi5nZXQoXCJzcG90UmFkaXVzXCIpKSxnLT0yKmIuY2VpbChmLmdldChcInNwb3RSYWRpdXNcIikpLHc9Zy8oay1pKzEpLG48bSYmYS5kcmF3Q2lyY2xlKChuLWkpKncrbCxoLzIsZi5nZXQoXCJzcG90UmFkaXVzXCIpLGYuZ2V0KFwib3V0bGllckxpbmVDb2xvclwiKSxmLmdldChcIm91dGxpZXJGaWxsQ29sb3JcIikpLmFwcGVuZCgpLHQ+cyYmYS5kcmF3Q2lyY2xlKCh0LWkpKncrbCxoLzIsZi5nZXQoXCJzcG90UmFkaXVzXCIpLGYuZ2V0KFwib3V0bGllckxpbmVDb2xvclwiKSxmLmdldChcIm91dGxpZXJGaWxsQ29sb3JcIikpLmFwcGVuZCgpKSxhLmRyYXdSZWN0KGIucm91bmQoKHAtaSkqdytsKSxiLnJvdW5kKGgqLjEpLGIucm91bmQoKHItcCkqdyksYi5yb3VuZChoKi44KSxmLmdldChcImJveExpbmVDb2xvclwiKSxmLmdldChcImJveEZpbGxDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChtLWkpKncrbCksYi5yb3VuZChoLzIpLGIucm91bmQoKHAtaSkqdytsKSxiLnJvdW5kKGgvMiksZi5nZXQoXCJsaW5lQ29sb3JcIikpLmFwcGVuZCgpLGEuZHJhd0xpbmUoYi5yb3VuZCgobS1pKSp3K2wpLGIucm91bmQoaC80KSxiLnJvdW5kKChtLWkpKncrbCksYi5yb3VuZChoLWgvNCksZi5nZXQoXCJ3aGlza2VyQ29sb3JcIikpLmFwcGVuZCgpLGEuZHJhd0xpbmUoYi5yb3VuZCgocy1pKSp3K2wpLGIucm91bmQoaC8yKSxiLnJvdW5kKChyLWkpKncrbCksYi5yb3VuZChoLzIpLGYuZ2V0KFwibGluZUNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKHMtaSkqdytsKSxiLnJvdW5kKGgvNCksYi5yb3VuZCgocy1pKSp3K2wpLGIucm91bmQoaC1oLzQpLGYuZ2V0KFwid2hpc2tlckNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKHEtaSkqdytsKSxiLnJvdW5kKGgqLjEpLGIucm91bmQoKHEtaSkqdytsKSxiLnJvdW5kKGgqLjkpLGYuZ2V0KFwibWVkaWFuQ29sb3JcIikpLmFwcGVuZCgpLGYuZ2V0KFwidGFyZ2V0XCIpJiYodj1iLmNlaWwoZi5nZXQoXCJzcG90UmFkaXVzXCIpKSxhLmRyYXdMaW5lKGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbCksYi5yb3VuZChoLzItdiksYi5yb3VuZCgoZi5nZXQoXCJ0YXJnZXRcIiktaSkqdytsKSxiLnJvdW5kKGgvMit2KSxmLmdldChcInRhcmdldENvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbC12KSxiLnJvdW5kKGgvMiksYi5yb3VuZCgoZi5nZXQoXCJ0YXJnZXRcIiktaSkqdytsK3YpLGIucm91bmQoaC8yKSxmLmdldChcInRhcmdldENvbG9yXCIpKS5hcHBlbmQoKSksYS5yZW5kZXIoKX19KSxHPWcoe2luaXQ6ZnVuY3Rpb24oYSxiLGMsZCl7dGhpcy50YXJnZXQ9YSx0aGlzLmlkPWIsdGhpcy50eXBlPWMsdGhpcy5hcmdzPWR9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnRhcmdldC5hcHBlbmRTaGFwZSh0aGlzKSx0aGlzfX0pLEg9Zyh7X3B4cmVnZXg6LyhcXGQrKShweCk/XFxzKiQvaSxpbml0OmZ1bmN0aW9uKGEsYixjKXtpZighYSlyZXR1cm47dGhpcy53aWR0aD1hLHRoaXMuaGVpZ2h0PWIsdGhpcy50YXJnZXQ9Yyx0aGlzLmxhc3RTaGFwZUlkPW51bGwsY1swXSYmKGM9Y1swXSksZC5kYXRhKGMsXCJfanFzX3ZjYW52YXNcIix0aGlzKX0sZHJhd0xpbmU6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB0aGlzLmRyYXdTaGFwZShbW2EsYl0sW2MsZF1dLGUsZil9LGRyYXdTaGFwZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5fZ2VuU2hhcGUoXCJTaGFwZVwiLFthLGIsYyxkXSl9LGRyYXdDaXJjbGU6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB0aGlzLl9nZW5TaGFwZShcIkNpcmNsZVwiLFthLGIsYyxkLGUsZl0pfSxkcmF3UGllU2xpY2U6ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7cmV0dXJuIHRoaXMuX2dlblNoYXBlKFwiUGllU2xpY2VcIixbYSxiLGMsZCxlLGYsZ10pfSxkcmF3UmVjdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHRoaXMuX2dlblNoYXBlKFwiUmVjdFwiLFthLGIsYyxkLGUsZl0pfSxnZXRFbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FudmFzfSxnZXRMYXN0U2hhcGVJZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxhc3RTaGFwZUlkfSxyZXNldDpmdW5jdGlvbigpe2FsZXJ0KFwicmVzZXQgbm90IGltcGxlbWVudGVkXCIpfSxfaW5zZXJ0OmZ1bmN0aW9uKGEsYil7ZChiKS5odG1sKGEpfSxfY2FsY3VsYXRlUGl4ZWxEaW1zOmZ1bmN0aW9uKGEsYixjKXt2YXIgZTtlPXRoaXMuX3B4cmVnZXguZXhlYyhiKSxlP3RoaXMucGl4ZWxIZWlnaHQ9ZVsxXTp0aGlzLnBpeGVsSGVpZ2h0PWQoYykuaGVpZ2h0KCksZT10aGlzLl9weHJlZ2V4LmV4ZWMoYSksZT90aGlzLnBpeGVsV2lkdGg9ZVsxXTp0aGlzLnBpeGVsV2lkdGg9ZChjKS53aWR0aCgpfSxfZ2VuU2hhcGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz1MKys7cmV0dXJuIGIudW5zaGlmdChjKSxuZXcgRyh0aGlzLGMsYSxiKX0sYXBwZW5kU2hhcGU6ZnVuY3Rpb24oYSl7YWxlcnQoXCJhcHBlbmRTaGFwZSBub3QgaW1wbGVtZW50ZWRcIil9LHJlcGxhY2VXaXRoU2hhcGU6ZnVuY3Rpb24oYSxiKXthbGVydChcInJlcGxhY2VXaXRoU2hhcGUgbm90IGltcGxlbWVudGVkXCIpfSxpbnNlcnRBZnRlclNoYXBlOmZ1bmN0aW9uKGEsYil7YWxlcnQoXCJpbnNlcnRBZnRlclNoYXBlIG5vdCBpbXBsZW1lbnRlZFwiKX0scmVtb3ZlU2hhcGVJZDpmdW5jdGlvbihhKXthbGVydChcInJlbW92ZVNoYXBlSWQgbm90IGltcGxlbWVudGVkXCIpfSxnZXRTaGFwZUF0OmZ1bmN0aW9uKGEsYixjKXthbGVydChcImdldFNoYXBlQXQgbm90IGltcGxlbWVudGVkXCIpfSxyZW5kZXI6ZnVuY3Rpb24oKXthbGVydChcInJlbmRlciBub3QgaW1wbGVtZW50ZWRcIil9fSksST1nKEgse2luaXQ6ZnVuY3Rpb24oYixlLGYsZyl7SS5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYixlLGYpLHRoaXMuY2FudmFzPWEuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxmWzBdJiYoZj1mWzBdKSxkLmRhdGEoZixcIl9qcXNfdmNhbnZhc1wiLHRoaXMpLGQodGhpcy5jYW52YXMpLmNzcyh7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHdpZHRoOmIsaGVpZ2h0OmUsdmVydGljYWxBbGlnbjpcInRvcFwifSksdGhpcy5faW5zZXJ0KHRoaXMuY2FudmFzLGYpLHRoaXMuX2NhbGN1bGF0ZVBpeGVsRGltcyhiLGUsdGhpcy5jYW52YXMpLHRoaXMuY2FudmFzLndpZHRoPXRoaXMucGl4ZWxXaWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQ9dGhpcy5waXhlbEhlaWdodCx0aGlzLmludGVyYWN0PWcsdGhpcy5zaGFwZXM9e30sdGhpcy5zaGFwZXNlcT1bXSx0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWMsZCh0aGlzLmNhbnZhcykuY3NzKHt3aWR0aDp0aGlzLnBpeGVsV2lkdGgsaGVpZ2h0OnRoaXMucGl4ZWxIZWlnaHR9KX0sX2dldENvbnRleHQ6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPXRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gYSE9PWMmJihlLnN0cm9rZVN0eWxlPWEpLGUubGluZVdpZHRoPWQ9PT1jPzE6ZCxiIT09YyYmKGUuZmlsbFN0eWxlPWIpLGV9LHJlc2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZ2V0Q29udGV4dCgpO2EuY2xlYXJSZWN0KDAsMCx0aGlzLnBpeGVsV2lkdGgsdGhpcy5waXhlbEhlaWdodCksdGhpcy5zaGFwZXM9e30sdGhpcy5zaGFwZXNlcT1bXSx0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWN9LF9kcmF3U2hhcGU6ZnVuY3Rpb24oYSxiLGQsZSxmKXt2YXIgZz10aGlzLl9nZXRDb250ZXh0KGQsZSxmKSxoLGk7Zy5iZWdpblBhdGgoKSxnLm1vdmVUbyhiWzBdWzBdKy41LGJbMF1bMV0rLjUpO2ZvcihoPTEsaT1iLmxlbmd0aDtoPGk7aCsrKWcubGluZVRvKGJbaF1bMF0rLjUsYltoXVsxXSsuNSk7ZCE9PWMmJmcuc3Ryb2tlKCksZSE9PWMmJmcuZmlsbCgpLHRoaXMudGFyZ2V0WCE9PWMmJnRoaXMudGFyZ2V0WSE9PWMmJmcuaXNQb2ludEluUGF0aCh0aGlzLnRhcmdldFgsdGhpcy50YXJnZXRZKSYmKHRoaXMuY3VycmVudFRhcmdldFNoYXBlSWQ9YSl9LF9kcmF3Q2lyY2xlOmZ1bmN0aW9uKGEsZCxlLGYsZyxoLGkpe3ZhciBqPXRoaXMuX2dldENvbnRleHQoZyxoLGkpO2ouYmVnaW5QYXRoKCksai5hcmMoZCxlLGYsMCwyKmIuUEksITEpLHRoaXMudGFyZ2V0WCE9PWMmJnRoaXMudGFyZ2V0WSE9PWMmJmouaXNQb2ludEluUGF0aCh0aGlzLnRhcmdldFgsdGhpcy50YXJnZXRZKSYmKHRoaXMuY3VycmVudFRhcmdldFNoYXBlSWQ9YSksZyE9PWMmJmouc3Ryb2tlKCksaCE9PWMmJmouZmlsbCgpfSxfZHJhd1BpZVNsaWNlOmZ1bmN0aW9uKGEsYixkLGUsZixnLGgsaSl7dmFyIGo9dGhpcy5fZ2V0Q29udGV4dChoLGkpO2ouYmVnaW5QYXRoKCksai5tb3ZlVG8oYixkKSxqLmFyYyhiLGQsZSxmLGcsITEpLGoubGluZVRvKGIsZCksai5jbG9zZVBhdGgoKSxoIT09YyYmai5zdHJva2UoKSxpJiZqLmZpbGwoKSx0aGlzLnRhcmdldFghPT1jJiZ0aGlzLnRhcmdldFkhPT1jJiZqLmlzUG9pbnRJblBhdGgodGhpcy50YXJnZXRYLHRoaXMudGFyZ2V0WSkmJih0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWEpfSxfZHJhd1JlY3Q6ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7cmV0dXJuIHRoaXMuX2RyYXdTaGFwZShhLFtbYixjXSxbYitkLGNdLFtiK2QsYytlXSxbYixjK2VdLFtiLGNdXSxmLGcpfSxhcHBlbmRTaGFwZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zaGFwZXNbYS5pZF09YSx0aGlzLnNoYXBlc2VxLnB1c2goYS5pZCksdGhpcy5sYXN0U2hhcGVJZD1hLmlkLGEuaWR9LHJlcGxhY2VXaXRoU2hhcGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNoYXBlc2VxLGQ7dGhpcy5zaGFwZXNbYi5pZF09Yjtmb3IoZD1jLmxlbmd0aDtkLS07KWNbZF09PWEmJihjW2RdPWIuaWQpO2RlbGV0ZSB0aGlzLnNoYXBlc1thXX0scmVwbGFjZVdpdGhTaGFwZXM6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNoYXBlc2VxLGQ9e30sZSxmLGc7Zm9yKGY9YS5sZW5ndGg7Zi0tOylkW2FbZl1dPSEwO2ZvcihmPWMubGVuZ3RoO2YtLTspZT1jW2ZdLGRbZV0mJihjLnNwbGljZShmLDEpLGRlbGV0ZSB0aGlzLnNoYXBlc1tlXSxnPWYpO2ZvcihmPWIubGVuZ3RoO2YtLTspYy5zcGxpY2UoZywwLGJbZl0uaWQpLHRoaXMuc2hhcGVzW2JbZl0uaWRdPWJbZl19LGluc2VydEFmdGVyU2hhcGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNoYXBlc2VxLGQ7Zm9yKGQ9Yy5sZW5ndGg7ZC0tOylpZihjW2RdPT09YSl7Yy5zcGxpY2UoZCsxLDAsYi5pZCksdGhpcy5zaGFwZXNbYi5pZF09YjtyZXR1cm59fSxyZW1vdmVTaGFwZUlkOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2hhcGVzZXEsYztmb3IoYz1iLmxlbmd0aDtjLS07KWlmKGJbY109PT1hKXtiLnNwbGljZShjLDEpO2JyZWFrfWRlbGV0ZSB0aGlzLnNoYXBlc1thXX0sZ2V0U2hhcGVBdDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMudGFyZ2V0WD1iLHRoaXMudGFyZ2V0WT1jLHRoaXMucmVuZGVyKCksdGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZH0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zaGFwZXNlcSxiPXRoaXMuc2hhcGVzLGM9YS5sZW5ndGgsZD10aGlzLl9nZXRDb250ZXh0KCksZSxmLGc7ZC5jbGVhclJlY3QoMCwwLHRoaXMucGl4ZWxXaWR0aCx0aGlzLnBpeGVsSGVpZ2h0KTtmb3IoZz0wO2c8YztnKyspZT1hW2ddLGY9YltlXSx0aGlzW1wiX2RyYXdcIitmLnR5cGVdLmFwcGx5KHRoaXMsZi5hcmdzKTt0aGlzLmludGVyYWN0fHwodGhpcy5zaGFwZXM9e30sdGhpcy5zaGFwZXNlcT1bXSl9fSksSj1nKEgse2luaXQ6ZnVuY3Rpb24oYixjLGUpe3ZhciBmO0ouX3N1cGVyLmluaXQuY2FsbCh0aGlzLGIsYyxlKSxlWzBdJiYoZT1lWzBdKSxkLmRhdGEoZSxcIl9qcXNfdmNhbnZhc1wiLHRoaXMpLHRoaXMuY2FudmFzPWEuY3JlYXRlRWxlbWVudChcInNwYW5cIiksZCh0aGlzLmNhbnZhcykuY3NzKHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLG92ZXJmbG93OlwiaGlkZGVuXCIsd2lkdGg6YixoZWlnaHQ6YyxtYXJnaW46XCIwcHhcIixwYWRkaW5nOlwiMHB4XCIsdmVydGljYWxBbGlnbjpcInRvcFwifSksdGhpcy5faW5zZXJ0KHRoaXMuY2FudmFzLGUpLHRoaXMuX2NhbGN1bGF0ZVBpeGVsRGltcyhiLGMsdGhpcy5jYW52YXMpLHRoaXMuY2FudmFzLndpZHRoPXRoaXMucGl4ZWxXaWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQ9dGhpcy5waXhlbEhlaWdodCxmPSc8djpncm91cCBjb29yZG9yaWdpbj1cIjAgMFwiIGNvb3Jkc2l6ZT1cIicrdGhpcy5waXhlbFdpZHRoK1wiIFwiK3RoaXMucGl4ZWxIZWlnaHQrJ1wiJysnIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOicrdGhpcy5waXhlbFdpZHRoK1wicHg7aGVpZ2h0PVwiK3RoaXMucGl4ZWxIZWlnaHQrJ3B4O1wiPjwvdjpncm91cD4nLHRoaXMuY2FudmFzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZUVuZFwiLGYpLHRoaXMuZ3JvdXA9ZCh0aGlzLmNhbnZhcykuY2hpbGRyZW4oKVswXSx0aGlzLnJlbmRlcmVkPSExLHRoaXMucHJlcmVuZGVyPVwiXCJ9LF9kcmF3U2hhcGU6ZnVuY3Rpb24oYSxiLGQsZSxmKXt2YXIgZz1bXSxoLGksaixrLGwsbSxuO2ZvcihuPTAsbT1iLmxlbmd0aDtuPG07bisrKWdbbl09XCJcIitiW25dWzBdK1wiLFwiK2Jbbl1bMV07cmV0dXJuIGg9Zy5zcGxpY2UoMCwxKSxmPWY9PT1jPzE6ZixpPWQ9PT1jPycgc3Ryb2tlZD1cImZhbHNlXCIgJzonIHN0cm9rZVdlaWdodD1cIicrZisncHhcIiBzdHJva2VDb2xvcj1cIicrZCsnXCIgJyxqPWU9PT1jPycgZmlsbGVkPVwiZmFsc2VcIic6JyBmaWxsQ29sb3I9XCInK2UrJ1wiIGZpbGxlZD1cInRydWVcIiAnLGs9Z1swXT09PWdbZy5sZW5ndGgtMV0/XCJ4IFwiOlwiXCIsbD0nPHY6c2hhcGUgY29vcmRvcmlnaW49XCIwIDBcIiBjb29yZHNpemU9XCInK3RoaXMucGl4ZWxXaWR0aCtcIiBcIit0aGlzLnBpeGVsSGVpZ2h0KydcIiAnKycgaWQ9XCJqcXNzaGFwZScrYSsnXCIgJytpK2orJyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDowcHg7aGVpZ2h0OicrdGhpcy5waXhlbEhlaWdodCtcInB4O3dpZHRoOlwiK3RoaXMucGl4ZWxXaWR0aCsncHg7cGFkZGluZzowcHg7bWFyZ2luOjBweDtcIiAnKycgcGF0aD1cIm0gJytoK1wiIGwgXCIrZy5qb2luKFwiLCBcIikrXCIgXCIraysnZVwiPicrXCIgPC92OnNoYXBlPlwiLGx9LF9kcmF3Q2lyY2xlOmZ1bmN0aW9uKGEsYixkLGUsZixnLGgpe3ZhciBpLGosaztyZXR1cm4gYi09ZSxkLT1lLGk9Zj09PWM/JyBzdHJva2VkPVwiZmFsc2VcIiAnOicgc3Ryb2tlV2VpZ2h0PVwiJytoKydweFwiIHN0cm9rZUNvbG9yPVwiJytmKydcIiAnLGo9Zz09PWM/JyBmaWxsZWQ9XCJmYWxzZVwiJzonIGZpbGxDb2xvcj1cIicrZysnXCIgZmlsbGVkPVwidHJ1ZVwiICcsaz0nPHY6b3ZhbCAgaWQ9XCJqcXNzaGFwZScrYSsnXCIgJytpK2orJyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDonK2QrXCJweDsgbGVmdDpcIitiK1wicHg7IHdpZHRoOlwiK2UqMitcInB4OyBoZWlnaHQ6XCIrZSoyKydweFwiPjwvdjpvdmFsPicsa30sX2RyYXdQaWVTbGljZTpmdW5jdGlvbihhLGQsZSxmLGcsaCxpLGope3ZhciBrLGwsbSxuLG8scCxxLHI7aWYoZz09PWgpcmV0dXJuXCJcIjtoLWc9PT0yKmIuUEkmJihnPTAsaD0yKmIuUEkpLGw9ZCtiLnJvdW5kKGIuY29zKGcpKmYpLG09ZStiLnJvdW5kKGIuc2luKGcpKmYpLG49ZCtiLnJvdW5kKGIuY29zKGgpKmYpLG89ZStiLnJvdW5kKGIuc2luKGgpKmYpO2lmKGw9PT1uJiZtPT09byl7aWYoaC1nPGIuUEkpcmV0dXJuXCJcIjtsPW49ZCtmLG09bz1lfXJldHVybiBsPT09biYmbT09PW8mJmgtZzxiLlBJP1wiXCI6KGs9W2QtZixlLWYsZCtmLGUrZixsLG0sbixvXSxwPWk9PT1jPycgc3Ryb2tlZD1cImZhbHNlXCIgJzonIHN0cm9rZVdlaWdodD1cIjFweFwiIHN0cm9rZUNvbG9yPVwiJytpKydcIiAnLHE9aj09PWM/JyBmaWxsZWQ9XCJmYWxzZVwiJzonIGZpbGxDb2xvcj1cIicraisnXCIgZmlsbGVkPVwidHJ1ZVwiICcscj0nPHY6c2hhcGUgY29vcmRvcmlnaW49XCIwIDBcIiBjb29yZHNpemU9XCInK3RoaXMucGl4ZWxXaWR0aCtcIiBcIit0aGlzLnBpeGVsSGVpZ2h0KydcIiAnKycgaWQ9XCJqcXNzaGFwZScrYSsnXCIgJytwK3ErJyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDowcHg7aGVpZ2h0OicrdGhpcy5waXhlbEhlaWdodCtcInB4O3dpZHRoOlwiK3RoaXMucGl4ZWxXaWR0aCsncHg7cGFkZGluZzowcHg7bWFyZ2luOjBweDtcIiAnKycgcGF0aD1cIm0gJytkK1wiLFwiK2UrXCIgd2EgXCIray5qb2luKFwiLCBcIikrJyB4IGVcIj4nK1wiIDwvdjpzaGFwZT5cIixyKX0sX2RyYXdSZWN0OmZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybiB0aGlzLl9kcmF3U2hhcGUoYSxbW2IsY10sW2IsYytlXSxbYitkLGMrZV0sW2IrZCxjXSxbYixjXV0sZixnKX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLmdyb3VwLmlubmVySFRNTD1cIlwifSxhcHBlbmRTaGFwZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzW1wiX2RyYXdcIithLnR5cGVdLmFwcGx5KHRoaXMsYS5hcmdzKTtyZXR1cm4gdGhpcy5yZW5kZXJlZD90aGlzLmdyb3VwLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZUVuZFwiLGIpOnRoaXMucHJlcmVuZGVyKz1iLHRoaXMubGFzdFNoYXBlSWQ9YS5pZCxhLmlkfSxyZXBsYWNlV2l0aFNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9ZChcIiNqcXNzaGFwZVwiK2EpLGU9dGhpc1tcIl9kcmF3XCIrYi50eXBlXS5hcHBseSh0aGlzLGIuYXJncyk7Y1swXS5vdXRlckhUTUw9ZX0scmVwbGFjZVdpdGhTaGFwZXM6ZnVuY3Rpb24oYSxiKXt2YXIgYz1kKFwiI2pxc3NoYXBlXCIrYVswXSksZT1cIlwiLGY9Yi5sZW5ndGgsZztmb3IoZz0wO2c8ZjtnKyspZSs9dGhpc1tcIl9kcmF3XCIrYltnXS50eXBlXS5hcHBseSh0aGlzLGJbZ10uYXJncyk7Y1swXS5vdXRlckhUTUw9ZTtmb3IoZz0xO2c8YS5sZW5ndGg7ZysrKWQoXCIjanFzc2hhcGVcIithW2ddKS5yZW1vdmUoKX0saW5zZXJ0QWZ0ZXJTaGFwZTpmdW5jdGlvbihhLGIpe3ZhciBjPWQoXCIjanFzc2hhcGVcIithKSxlPXRoaXNbXCJfZHJhd1wiK2IudHlwZV0uYXBwbHkodGhpcyxiLmFyZ3MpO2NbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJFbmRcIixlKX0scmVtb3ZlU2hhcGVJZDpmdW5jdGlvbihhKXt2YXIgYj1kKFwiI2pxc3NoYXBlXCIrYSk7dGhpcy5ncm91cC5yZW1vdmVDaGlsZChiWzBdKX0sZ2V0U2hhcGVBdDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5pZC5zdWJzdHIoOCk7cmV0dXJuIGR9LHJlbmRlcjpmdW5jdGlvbigpe3RoaXMucmVuZGVyZWR8fCh0aGlzLmdyb3VwLmlubmVySFRNTD10aGlzLnByZXJlbmRlcix0aGlzLnJlbmRlcmVkPSEwKX19KX0pfSkoZG9jdW1lbnQsTWF0aCk7IiwiXG4vLyBBZG1pbiBQYW5lbCBzZXR0aW5nc1xuJC5mbi5BZG1pblNldHRpbmdzID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgdmFyIG15aWQgPSB0aGlzLmF0dHIoXCJpZFwiKTtcbiAgICAvLyBHZW5lcmFsIG9wdGlvbiBmb3IgdmVydGljYWwgaGVhZGVyXG5cbiAgICB2YXIgZGVmYXVsdFNpZGViYXJUeXBlID0gJ2Z1bGwnO1xuICAgIGlmICggQ29va2llcy5nZXQoJ3NpZGViYXItdHlwZScpID09IFwibWluaS1zaWRlYmFyXCIgKSB7XG4gICAgICAgIGRlZmF1bHRTaWRlYmFyVHlwZSA9ICdtaW5pLXNpZGViYXInO1xuICAgIH1cbiAgICBzZXR0aW5ncy5TaWRlYmFyVHlwZSA9IGRlZmF1bHRTaWRlYmFyVHlwZTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgVGhlbWU6IHRydWUsIC8vIHRoaXMgY2FuIGJlIHRydWUgb3IgZmFsc2UgKCB0cnVlIG1lYW5zIGRhcmsgYW5kIGZhbHNlIG1lYW5zIGxpZ2h0ICksXG4gICAgICAgIExheW91dDogJ2hvcml6b250YWwnLCAvL1xuICAgICAgICBMb2dvQmc6ICdza2luMScsIC8vIFlvdSBjYW4gY2hhbmdlIHRoZSBWYWx1ZSB0byBiZSBza2luMS9za2luMi9za2luMy9za2luNC9za2luNS9za2luNlxuICAgICAgICBOYXZiYXJCZzogJ3NraW42JywgLy8gWW91IGNhbiBjaGFuZ2UgdGhlIFZhbHVlIHRvIGJlIHNraW4xL3NraW4yL3NraW4zL3NraW40L3NraW41L3NraW42XG4gICAgICAgIFNpZGViYXJUeXBlOiBkZWZhdWx0U2lkZWJhclR5cGUsIC8vIFlvdSBjYW4gY2hhbmdlIGl0IGZ1bGwgLyBtaW5pLXNpZGViYXJcbiAgICAgICAgU2lkZWJhckNvbG9yOiAnc2tpbjEnLCAvLyBZb3UgY2FuIGNoYW5nZSB0aGUgVmFsdWUgdG8gYmUgc2tpbjEvc2tpbjIvc2tpbjMvc2tpbjQvc2tpbjUvc2tpbjZcbiAgICAgICAgU2lkZWJhclBvc2l0aW9uOiB0cnVlLCAvLyBpdCBjYW4gYmUgdHJ1ZSAvIGZhbHNlXG4gICAgICAgIEhlYWRlclBvc2l0aW9uOiB0cnVlLCAvLyBpdCBjYW4gYmUgdHJ1ZSAvIGZhbHNlXG4gICAgICAgIEJveGVkTGF5b3V0OiBmYWxzZSwgLy8gaXQgY2FuIGJlIHRydWUgLyBmYWxzZVxuICAgIH07XG4gICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcbiAgICAvLyBBdHRyaWJ1dGUgZnVuY3Rpb25zXG4gICAgdmFyIEFkbWluU2V0dGluZ3MgPSB7XG4gICAgICAgIC8vIFNldHRpbmdzIElOSVRcbiAgICAgICAgQWRtaW5TZXR0aW5nc0luaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEFkbWluU2V0dGluZ3MuTWFuYWdlVGhlbWUoKTtcbiAgICAgICAgICAgIEFkbWluU2V0dGluZ3MuTWFuYWdlVGhlbWVMYXlvdXQoKTtcbiAgICAgICAgICAgIEFkbWluU2V0dGluZ3MuTWFuYWdlVGhlbWVCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICBBZG1pblNldHRpbmdzLk1hbmFnZVNpZGViYXJUeXBlKCk7XG4gICAgICAgICAgICBBZG1pblNldHRpbmdzLk1hbmFnZVNpZGViYXJDb2xvcigpO1xuICAgICAgICAgICAgQWRtaW5TZXR0aW5ncy5NYW5hZ2VTaWRlYmFyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIEFkbWluU2V0dGluZ3MuTWFuYWdlQm94ZWRMYXlvdXQoKTtcbiAgICAgICAgfVxuICAgICAgICAsIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAvLyBNYW5hZ2VUaGVtZUxheW91dCBmdW5jdGlvbnNcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE1hbmFnZVRoZW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhlbWV2aWV3ID0gc2V0dGluZ3MuVGhlbWU7XG4gICAgICAgICAgICBzd2l0Y2ggKHNldHRpbmdzLkxheW91dCkge1xuICAgICAgICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICAgICAgICAgIGlmICh0aGVtZXZpZXcgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYXR0cihcImRhdGEtdGhlbWVcIiwgJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0aGVtZS12aWV3XCIpLnByb3AoXCJjaGVja2VkXCIsICEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgbXlpZCkuYXR0cihcImRhdGEtdGhlbWVcIiwgJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLnByb3AoXCJjaGVja2VkXCIsICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAvLyBNYW5hZ2VUaGVtZUxheW91dCBmdW5jdGlvbnNcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE1hbmFnZVRoZW1lTGF5b3V0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2V0dGluZ3MuTGF5b3V0KSB7XG4gICAgICAgICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLWxheW91dFwiLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1sYXlvdXRcIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgICAgICAkKCcuc2Nyb2xsLXNpZGViYXInKS5wZXJmZWN0U2Nyb2xsYmFyKHsgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICwgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vIE1hbmFnZVNpZGViYXJUeXBlIGZ1bmN0aW9uc1xuICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTWFuYWdlVGhlbWVCYWNrZ3JvdW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBMb2dvIGJnIGF0dHJpYnV0ZVxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0bG9nb2JnKCkge1xuICAgICAgICAgICAgICAgIHZhciBsYmcgPSBzZXR0aW5ncy5Mb2dvQmc7XG4gICAgICAgICAgICAgICAgaWYgKGxiZyAhPSB1bmRlZmluZWQgJiYgbGJnICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkICsgJyAudG9wYmFyIC50b3AtbmF2YmFyIC5uYXZiYXItaGVhZGVyJykuYXR0cihcImRhdGEtbG9nb2JnXCIsIGxiZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQgKyAnIC50b3BiYXIgLnRvcC1uYXZiYXIgLm5hdmJhci1oZWFkZXInKS5hdHRyKFwiZGF0YS1sb2dvYmdcIiwgXCJza2luMVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0bG9nb2JnKCk7XG4gICAgICAgICAgICAvLyBOYXZiYXIgYmcgYXR0cmlidXRlXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRuYXZiYXJiZygpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmJnID0gc2V0dGluZ3MuTmF2YmFyQmc7XG4gICAgICAgICAgICAgICAgaWYgKG5iZyAhPSB1bmRlZmluZWQgJiYgbmJnICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkICsgJyAudG9wYmFyIC5uYXZiYXItY29sbGFwc2UnKS5hdHRyKFwiZGF0YS1uYXZiYXJiZ1wiLCBuYmcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQgKyAnIC50b3BiYXInKS5hdHRyKFwiZGF0YS1uYXZiYXJiZ1wiLCBuYmcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLW5hdmJhcmJnXCIsIG5iZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQgKyAnIC50b3BiYXIgLm5hdmJhci1jb2xsYXBzZScpLmF0dHIoXCJkYXRhLW5hdmJhcmJnXCIsIFwic2tpbjFcIik7XG4gICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQgKyAnIC50b3BiYXInKS5hdHRyKFwiZGF0YS1uYXZiYXJiZ1wiLCBcInNraW4xXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLW5hdmJhcmJnXCIsIFwic2tpbjFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldG5hdmJhcmJnKCk7XG4gICAgICAgIH1cbiAgICAgICAgLCAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgLy8gTWFuYWdlVGhlbWVMYXlvdXQgZnVuY3Rpb25zXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBNYW5hZ2VTaWRlYmFyVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoIChzZXR0aW5ncy5TaWRlYmFyVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzaWRlYmFyIHR5cGUgaGFzIGZ1bGxcbiAgICAgICAgICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICAgICAgICAgICQoJyMnICsgbXlpZCkuYXR0cihcImRhdGEtc2lkZWJhcnR5cGVcIiwgXCJmdWxsXCIpO1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgZm9yIHRoZSBtaW5pLXNpZGViYXIgaWYgd2lkdGggaXMgbGVzcyB0aGVuIDExNzAqL1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIHZhciBzZXRzaWRlYmFydHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoID4gMCkgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHRoaXMuc2NyZWVuLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGggPCAxMTcwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcIm1pbmktc2lkZWJhclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmFkZENsYXNzKFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ3NpZGViYXItdHlwZScsICdtaW5pLXNpZGViYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsIFwiZnVsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ3NpZGViYXItdHlwZScsICdmdWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldCgnbWluaS1zaWRlYmFyJywgJChcIiNtYWluLXdyYXBwZXJcIikuaGFzQ2xhc3MoJ21pbmktc2lkZWJhcicpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICQod2luZG93KS5yZWFkeShzZXRzaWRlYmFydHlwZSk7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHNldHNpZGViYXJ0eXBlKTtcbiAgICAgICAgICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAvKiBUaGlzIGlzIGZvciBzaWRlYmFydG9nZ2xlciovXG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgJCgnLnNpZGViYXJ0b2dnbGVyJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLnRvZ2dsZUNsYXNzKFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChcIiNtYWluLXdyYXBwZXJcIikuaGFzQ2xhc3MoXCJtaW5pLXNpZGViYXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc2lkZWJhcnRvZ2dsZXJcIikucHJvcChcImNoZWNrZWRcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikuYXR0cihcImRhdGEtc2lkZWJhcnR5cGVcIiwgXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ21pbmktc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zaWRlYmFydG9nZ2xlclwiKS5wcm9wKFwiY2hlY2tlZFwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcImZ1bGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ2Z1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzaWRlYmFyIHR5cGUgaGFzIG1pbmktc2lkZWJhclxuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgY2FzZSAnbWluaS1zaWRlYmFyJzpcbiAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsIFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgZm9yIHNpZGViYXJ0b2dnbGVyKi9cbiAgICAgICAgICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcnRvZ2dsZXInKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKFwiI21haW4td3JhcHBlclwiKS5oYXNDbGFzcyhcIm1pbmktc2lkZWJhclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zaWRlYmFydG9nZ2xlclwiKS5wcm9wKFwiY2hlY2tlZFwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcImZ1bGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ2Z1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuc2lkZWJhcnRvZ2dsZXJcIikucHJvcChcImNoZWNrZWRcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikuYXR0cihcImRhdGEtc2lkZWJhcnR5cGVcIiwgXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ21pbmktc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNpZGViYXIgdHlwZSBoYXMgaWNvbmJhclxuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgY2FzZSAnaWNvbmJhcic6XG4gICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcImljb25iYXJcIik7XG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgLyogVGhpcyBpcyBmb3IgdGhlIG1pbmktc2lkZWJhciBpZiB3aWR0aCBpcyBsZXNzIHRoZW4gMTE3MCovXG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgdmFyIHNldHNpZGViYXJ0eXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAod2luZG93LmlubmVyV2lkdGggPiAwKSA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy5zY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8IDExNzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsIFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ21pbmktc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikuYXR0cihcImRhdGEtc2lkZWJhcnR5cGVcIiwgXCJpY29uYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLnNldCgnc2lkZWJhci10eXBlJywgJ2ljb25iYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlYWR5KHNldHNpZGViYXJ0eXBlKTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgc2V0c2lkZWJhcnR5cGUpO1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIC8qIFRoaXMgaXMgZm9yIHNpZGViYXJ0b2dnbGVyKi9cbiAgICAgICAgICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcnRvZ2dsZXInKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKFwiI21haW4td3JhcHBlclwiKS5oYXNDbGFzcyhcIm1pbmktc2lkZWJhclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5zaWRlYmFydG9nZ2xlclwiKS5wcm9wKFwiY2hlY2tlZFwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcIm1pbmktc2lkZWJhclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KCdzaWRlYmFyLXR5cGUnLCAnbWluaS1zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJ0b2dnbGVyXCIpLnByb3AoXCJjaGVja2VkXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsIFwiaWNvbmJhclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KCdzaWRlYmFyLXR5cGUnLCAnaWNvbmJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNpZGViYXIgdHlwZSBoYXMgb3ZlcmxheVxuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XG4gICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1zaWRlYmFydHlwZVwiLCBcIm92ZXJsYXlcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNldHNpZGViYXJ0eXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAod2luZG93LmlubmVyV2lkdGggPiAwKSA/IHdpbmRvdy5pbm5lcldpZHRoIDogdGhpcy5zY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8IDc2Nykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNtYWluLXdyYXBwZXJcIikuYXR0cihcImRhdGEtc2lkZWJhcnR5cGVcIiwgXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS5hZGRDbGFzcyhcIm1pbmktc2lkZWJhclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsIFwib3ZlcmxheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKFwibWluaS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykucmVhZHkoc2V0c2lkZWJhcnR5cGUpO1xuICAgICAgICAgICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBzZXRzaWRlYmFydHlwZSk7XG4gICAgICAgICAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgLyogVGhpcyBpcyBmb3Igc2lkZWJhcnRvZ2dsZXIqL1xuICAgICAgICAgICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICQoJy5zaWRlYmFydG9nZ2xlcicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInNob3ctc2lkZWJhclwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIjbWFpbi13cmFwcGVyXCIpLmhhc0NsYXNzKFwic2hvdy1zaWRlYmFyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJ0b2dnbGVyXCIpLnByb3AoXCJjaGVja2VkXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsXCJtaW5pLXNpZGViYXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJ0b2dnbGVyXCIpLnByb3AoXCJjaGVja2VkXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbWFpbi13cmFwcGVyXCIpLmF0dHIoXCJkYXRhLXNpZGViYXJ0eXBlXCIsXCJpY29uYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICwgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vIE1hbmFnZVNpZGViYXJDb2xvciBmdW5jdGlvbnNcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE1hbmFnZVNpZGViYXJDb2xvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTG9nbyBiZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldHNpZGViYXJiZygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2JnID0gc2V0dGluZ3MuU2lkZWJhckNvbG9yO1xuICAgICAgICAgICAgICAgIGlmIChzYmcgIT0gdW5kZWZpbmVkICYmIHNiZyAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgbXlpZCArICcgLmxlZnQtc2lkZWJhcicpLmF0dHIoXCJkYXRhLXNpZGViYXJiZ1wiLCBzYmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkICsgJyAubGVmdC1zaWRlYmFyJykuYXR0cihcImRhdGEtc2lkZWJhcmJnXCIsIFwic2tpbjFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldHNpZGViYXJiZygpO1xuICAgICAgICB9XG4gICAgICAgICwgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vIE1hbmFnZVNpZGViYXJQb3NpdGlvbiBmdW5jdGlvbnNcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE1hbmFnZVNpZGViYXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpZGViYXJwb3NpdGlvbiA9IHNldHRpbmdzLlNpZGViYXJQb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBoZWFkZXJwb3NpdGlvbiA9IHNldHRpbmdzLkhlYWRlclBvc2l0aW9uO1xuICAgICAgICAgICAgc3dpdGNoIChzZXR0aW5ncy5MYXlvdXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICBpZiAoc2lkZWJhcnBvc2l0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1zaWRlYmFyLXBvc2l0aW9uXCIsICdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3NpZGViYXItcG9zaXRpb25cIikucHJvcChcImNoZWNrZWRcIiwgITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1zaWRlYmFyLXBvc2l0aW9uXCIsICdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3NpZGViYXItcG9zaXRpb25cIikucHJvcChcImNoZWNrZWRcIiwgITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVycG9zaXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLWhlYWRlci1wb3NpdGlvblwiLCAnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNoZWFkZXItcG9zaXRpb25cIikucHJvcChcImNoZWNrZWRcIiwgITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1oZWFkZXItcG9zaXRpb25cIiwgJ3JlbGF0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjaGVhZGVyLXBvc2l0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICwgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vIE1hbmFnZUJveGVkTGF5b3V0IGZ1bmN0aW9uc1xuICAgICAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTWFuYWdlQm94ZWRMYXlvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBib3hlZGxheW91dCA9IHNldHRpbmdzLkJveGVkTGF5b3V0O1xuICAgICAgICAgICAgc3dpdGNoIChzZXR0aW5ncy5MYXlvdXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgICAgICAgICBpZiAoYm94ZWRsYXlvdXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLWJveGVkLWxheW91dFwiLCAnYm94ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNib3hlZC1sYXlvdXRcIikucHJvcChcImNoZWNrZWRcIiwgITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBteWlkKS5hdHRyKFwiZGF0YS1ib3hlZC1sYXlvdXRcIiwgJ2Z1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNib3hlZC1sYXlvdXRcIikucHJvcChcImNoZWNrZWRcIiwgITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICAgICAgICAgIGlmIChib3hlZGxheW91dCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgbXlpZCkuYXR0cihcImRhdGEtYm94ZWQtbGF5b3V0XCIsICdib3hlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2JveGVkLWxheW91dFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAhMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcjJyArIG15aWQpLmF0dHIoXCJkYXRhLWJveGVkLWxheW91dFwiLCAnZnVsbCcpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2JveGVkLWxheW91dFwiKS5wcm9wKFwiY2hlY2tlZFwiLCAhMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICwgfTtcbiAgICBBZG1pblNldHRpbmdzLkFkbWluU2V0dGluZ3NJbml0KCk7XG59O1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGlzIGZvciB0aGUgY2hhdCBjdXN0b21pemVyIHNldHRpbmdcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoYXRhcmVhID0gJChcIiNjaGF0XCIpO1xuICAgICQoJyNjaGF0IC5tZXNzYWdlLWNlbnRlciBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuZmluZChcIi5tYWlsLWNvbnRuZXQgaDVcIikudGV4dCgpO1xuICAgICAgICB2YXIgaW1nID0gJCh0aGlzKS5maW5kKFwiLnVzZXItaW1nIGltZ1wiKS5hdHRyKFwic3JjXCIpO1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXVzZXItaWRcIik7XG4gICAgICAgIHZhciBzdGF0dXMgPSAkKHRoaXMpLmZpbmQoXCIucHJvZmlsZS1zdGF0dXNcIikuYXR0cihcImRhdGEtc3RhdHVzXCIpO1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoXCIuY2hhdC13aW5kb3dzICN1c2VyLWNoYXRcIiArIGlkKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgaWYgKCQoXCIuY2hhdC13aW5kb3dzICN1c2VyLWNoYXRcIiArIGlkKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmNoYXQtd2luZG93cyAjdXNlci1jaGF0XCIgKyBpZCkucmVtb3ZlQ2xhc3MoXCJtaW5pLWNoYXRcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IG1zZ19yZWNlaXZlKCdJIHdhdGNoZWQgdGhlIHN0b3JtLCBzbyBiZWF1dGlmdWwgeWV0IHRlcnJpZmljLicpO1xuICAgICAgICAgICAgICAgIG1zZyArPSBtc2dfc2VudCgnVGhhdCBpcyB2ZXJ5IGRlZXAgaW5kZWVkIScpO1xuICAgICAgICAgICAgICAgIHZhciBodG1sID0gXCI8ZGl2IGNsYXNzPSd1c2VyLWNoYXQnIGlkPSd1c2VyLWNoYXRcIiArIGlkICsgXCInIGRhdGEtdXNlci1pZD0nXCIgKyBpZCArIFwiJz5cIjtcbiAgICAgICAgICAgICAgICBodG1sICs9IFwiPGRpdiBjbGFzcz0nY2hhdC1oZWFkJz48aW1nIHNyYz0nXCIgKyBpbWcgKyBcIicgZGF0YS11c2VyLWlkPSdcIiArIGlkICsgXCInPjxzcGFuIGNsYXNzPSdzdGF0dXMgXCIgKyBzdGF0dXMgKyBcIic+PC9zcGFuPjxzcGFuIGNsYXNzPSduYW1lJz5cIiArIG5hbWUgKyBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nb3B0cyc+PGkgY2xhc3M9J3RpLWNsb3NlIGNsb3NlaXQnIGRhdGEtdXNlci1pZD0nXCIgKyBpZCArIFwiJz48L2k+PGkgY2xhc3M9J3RpLW1pbnVzIG1pbmktY2hhdCcgZGF0YS11c2VyLWlkPSdcIiArIGlkICsgXCInPjwvaT48L3NwYW4+PC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBcIjxkaXYgY2xhc3M9J2NoYXQtYm9keSc+PHVsIGNsYXNzPSdjaGF0LWxpc3QnPlwiICsgbXNnICsgXCI8L3VsPjwvZGl2PlwiO1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPSdjaGF0LWZvb3Rlcic+PGlucHV0IHR5cGU9J3RleHQnIGRhdGEtdXNlci1pZD0nXCIgKyBpZCArIFwiJyBwbGFjZWhvbGRlcj0nVHlwZSAmIEVudGVyJyBjbGFzcz0nZm9ybS1jb250cm9sJz48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgJChcIi5jaGF0LXdpbmRvd3NcIikuYXBwZW5kKGh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgXCIuY2hhdC13aW5kb3dzIC51c2VyLWNoYXQgLmNoYXQtaGVhZCAuY2xvc2VpdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXVzZXItaWRcIik7XG4gICAgICAgICQoXCIuY2hhdC13aW5kb3dzICN1c2VyLWNoYXRcIiArIGlkKS5oaWRlKCk7XG4gICAgICAgICQoXCIjY2hhdCAubWVzc2FnZS1jZW50ZXIgLnVzZXItaW5mbyNjaGF0X3VzZXJfXCIgKyBpZCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgXCIuY2hhdC13aW5kb3dzIC51c2VyLWNoYXQgLmNoYXQtaGVhZCBpbWcsIC5jaGF0LXdpbmRvd3MgLnVzZXItY2hhdCAuY2hhdC1oZWFkIC5taW5pLWNoYXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS11c2VyLWlkXCIpO1xuICAgICAgICBpZiAoISQoXCIuY2hhdC13aW5kb3dzICN1c2VyLWNoYXRcIiArIGlkKS5oYXNDbGFzcyhcIm1pbmktY2hhdFwiKSkge1xuICAgICAgICAgICAgJChcIi5jaGF0LXdpbmRvd3MgI3VzZXItY2hhdFwiICsgaWQpLmFkZENsYXNzKFwibWluaS1jaGF0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJChcIi5jaGF0LXdpbmRvd3MgI3VzZXItY2hhdFwiICsgaWQpLnJlbW92ZUNsYXNzKFwibWluaS1jaGF0XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2tleXByZXNzJywgXCIuY2hhdC13aW5kb3dzIC51c2VyLWNoYXQgLmNoYXQtZm9vdGVyIGlucHV0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGEtdXNlci1pZFwiKTtcbiAgICAgICAgICAgIHZhciBtc2cgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgbXNnID0gbXNnX3NlbnQobXNnKTtcbiAgICAgICAgICAgICQoXCIuY2hhdC13aW5kb3dzICN1c2VyLWNoYXRcIiArIGlkICsgXCIgLmNoYXQtYm9keSAuY2hhdC1saXN0XCIpLmFwcGVuZChtc2cpO1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoXCJcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5jaGF0LXdpbmRvd3MgI3VzZXItY2hhdFwiICsgaWQgKyBcIiAuY2hhdC1ib2R5XCIpLnBlcmZlY3RTY3JvbGxiYXIoe1xuICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICQoXCIucGFnZS13cmFwcGVyXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJy5jaGF0LXdpbmRvd3MnKS5hZGRDbGFzcygnaGlkZS1jaGF0Jyk7XG4gICAgICAgICQoJy5jaGF0LXdpbmRvd3MnKS5yZW1vdmVDbGFzcygnc2hvdy1jaGF0Jyk7XG4gICAgfSk7XG4gICAgJChcIi5zZXJ2aWNlLXBhbmVsLXRvZ2dsZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3dzJykuYWRkQ2xhc3MoJ3Nob3ctY2hhdCcpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3dzJykucmVtb3ZlQ2xhc3MoJ2hpZGUtY2hhdCcpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIG1zZ19yZWNlaXZlKG1zZykge1xuICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaCA9IGQuZ2V0SG91cnMoKTtcbiAgICB2YXIgbSA9IGQuZ2V0TWludXRlcygpO1xuICAgIHJldHVybiBcIjxsaSBjbGFzcz0nbXNnX3JlY2VpdmUnPjxkaXYgY2xhc3M9J2NoYXQtY29udGVudCc+PGRpdiBjbGFzcz0nYm94IGJnLWxpZ2h0LWluZm8nPlwiICsgbXNnICsgXCI8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdjaGF0LXRpbWUnPlwiICsgaCArIFwiOlwiICsgbSArIFwiPC9kaXY+PC9saT5cIjtcbn1cblxuZnVuY3Rpb24gbXNnX3NlbnQobXNnKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBoID0gZC5nZXRIb3VycygpO1xuICAgIHZhciBtID0gZC5nZXRNaW51dGVzKCk7XG4gICAgcmV0dXJuIFwiPGxpIGNsYXNzPSdvZGQgbXNnX3NlbnQnPjxkaXYgY2xhc3M9J2NoYXQtY29udGVudCc+PGRpdiBjbGFzcz0nYm94IGJnLWxpZ2h0LWluZm8nPlwiICsgbXNnICsgXCI8L2Rpdj48YnI+PC9kaXY+PGRpdiBjbGFzcz0nY2hhdC10aW1lJz5cIiArIGggKyBcIjpcIiArIG0gKyBcIjwvZGl2PjwvbGk+XCI7XG59XG5cblxuLy8gJC5ub3RpZnlEZWZhdWx0cyh7XG4vLyAgICAgcGxhY2VtZW50OiB7XG4vLyAgICAgICAgIGZyb206IFwidG9wXCJcbi8vICAgICB9LFxuLy8gICAgIGFuaW1hdGU6e1xuLy8gICAgICAgICBlbnRlcjogXCJhbmltYXRlZCBmYWRlSW5VcFwiLFxuLy8gICAgICAgICBleGl0OiBcImFuaW1hdGVkIGZhZGVPdXREb3duXCJcbi8vICAgICB9LFxuLy8gICAgIHRlbXBsYXRlOiAnPGRpdiBkYXRhLW5vdGlmeT1cImNvbnRhaW5lclwiIGNsYXNzPVwiY29sLTYgY29sLXNtLTQgYWxlcnQgYWxlcnQtezB9XCIgcm9sZT1cImFsZXJ0XCI+JyArXG4vLyAgICAgICAgICc8c3BhbiBkYXRhLW5vdGlmeT1cImljb25cIj48L3NwYW4+ICcgK1xuLy8gICAgICAgICAnPHNwYW4gZGF0YS1ub3RpZnk9XCJ0aXRsZVwiPnsxfTwvc3Bhbj4gJyArXG4vLyAgICAgICAgICc8c3BhbiBkYXRhLW5vdGlmeT1cIm1lc3NhZ2VcIj57Mn08L3NwYW4+JyArXG4vLyAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBkYXRhLW5vdGlmeT1cInByb2dyZXNzYmFyXCI+JyArXG4vLyAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci17MH1cIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPVwid2lkdGg6IDAlO1wiPjwvZGl2PicgK1xuLy8gICAgICAgICAnPC9kaXY+JyArXG4vLyAgICAgICAgICc8YSBocmVmPVwiezN9XCIgdGFyZ2V0PVwiezR9XCIgZGF0YS1ub3RpZnk9XCJ1cmxcIj48L2E+JyArXG4vLyAgICAgICAgICc8L2Rpdj4nXG4vLyB9KTtcbiIsIiQoZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoICQoJy5kaWFsbGlzdGJveCcpLmxlbmd0aCApIHtcbiAgICAgICAgJChcIi5kaWFsbGlzdGJveFwiKS5ib290c3RyYXBEdWFsTGlzdGJveCh7XG4gICAgICAgICAgICBub25TZWxlY3RlZExpc3RMYWJlbDogJ1ZlcmbDvGdiYXInLFxuICAgICAgICAgICAgc2VsZWN0ZWRMaXN0TGFiZWw6ICdBdXNnZXfDpGhsdCcsXG4gICAgICAgICAgICBwcmVzZXJ2ZVNlbGVjdGlvbk9uTW92ZTogJ21vdmVkJyxcbiAgICAgICAgICAgIG1vdmVPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICBzaG93RmlsdGVySW5wdXRzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZm9UZXh0OiAnQW5nZXplaWd0IHswfScsXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7IiwiLy8gcmVxdWlyZSBqUXVlcnkgbm9ybWFsbHlcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuLy8gY3JlYXRlIGdsb2JhbCAkIGFuZCBqUXVlcnkgdmFyaWFibGVzXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSBqUXVlcnkgPSAkO1xuIiwicmVxdWlyZSgnZW9uYXNkYW4tYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJyk7XG5yZXF1aXJlKCdib290c3RyYXAtdGFnc2lucHV0Jyk7XG5yZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xucmVxdWlyZSgnYm9vdHN0cmFwNC1kdWFsbGlzdGJveCcpO1xuXG5yZXF1aXJlKCcuL2FwcC5pbml0LmR1YWxsaXN0Ym94Jyk7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwiZHJvcHpvbmVcIjtcblxuJChmdW5jdGlvbiAoKSB7XG5cbiAgICAkKFwiLnByZWxvYWRlclwiKS5mYWRlT3V0KCk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBUaGVtZSBvcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIHNpZGViYXItaG92ZXJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgJChcIi5sZWZ0LXNpZGViYXJcIikuaG92ZXIoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIubmF2YmFyLWhlYWRlclwiKS5hZGRDbGFzcyhcImV4cGFuZC1sb2dvXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiLm5hdmJhci1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJleHBhbmQtbG9nb1wiKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgLy8gdGhpcyBpcyBmb3IgY2xvc2UgaWNvbiB3aGVuIG5hdmlnYXRpb24gb3BlbiBpbiBtb2JpbGUgdmlld1xuICAgICQoXCIubmF2LXRvZ2dsZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI21haW4td3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInNob3ctc2lkZWJhclwiKTtcbiAgICAgICAgJChcIi5uYXYtdG9nZ2xlciBpXCIpLnRvZ2dsZUNsYXNzKFwidGktbWVudVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLm5hdi1sb2NrXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJsb2NrLW5hdlwiKTtcbiAgICAgICAgJChcIi5uYXYtbG9jayBpXCIpLnRvZ2dsZUNsYXNzKFwibWRpLXRvZ2dsZS1zd2l0Y2gtb2ZmXCIpO1xuICAgICAgICAkKFwiYm9keSwgLnBhZ2Utd3JhcHBlclwiKS50cmlnZ2VyKFwicmVzaXplXCIpO1xuICAgIH0pO1xuICAgICQoXCIuc2VhcmNoLWJveCBhLCAuc2VhcmNoLWJveCAuYXBwLXNlYXJjaCAuc3JoLWJ0blwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuYXBwLXNlYXJjaFwiKS50b2dnbGUoMjAwKTtcbiAgICAgICAgJChcIi5hcHAtc2VhcmNoIGlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFJpZ2h0IHNpZGViYXIgb3B0aW9uc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuc2VydmljZS1wYW5lbC10b2dnbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcIi5jdXN0b21pemVyXCIpLnRvZ2dsZUNsYXNzKCdzaG93LXNlcnZpY2UtcGFuZWwnKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnBhZ2Utd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCIuY3VzdG9taXplclwiKS5yZW1vdmVDbGFzcygnc2hvdy1zZXJ2aWNlLXBhbmVsJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJCgnLmZsb2F0aW5nLWxhYmVscyAuZm9ybS1jb250cm9sJykub24oJ2ZvY3VzIGJsdXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5pbnB1dC1ncm91cCcpLnRvZ2dsZUNsYXNzKCdmb2N1c2VkJywgKGUudHlwZSA9PT0gJ2ZvY3VzJyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA+IDApKTtcbiAgICB9KS50cmlnZ2VyKCdibHVyJyk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vdG9vbHRpcFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKClcbiAgICB9KTtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vUG9wb3ZlclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKClcbiAgICB9KTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUGVyZmFjdCBzY3JvbGxiYXJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICQoJy5tZXNzYWdlLWNlbnRlciwgLmN1c3RvbWl6ZXItYm9keSwgLnNjcm9sbGFibGUnKS5wZXJmZWN0U2Nyb2xsYmFyKHtcbiAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogITBcbiAgICB9KTtcblxuICAgIC8qdmFyIHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5tZXNzYWdlLWJvZHknKTtcbiAgICB2YXIgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLm1haWwnKTtcbiAgICB2YXIgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcignLnNjcm9sbC1zaWRlYmFyJyk7XG4gICAgdmFyIHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoJy5jdXN0b21pemVyLWJvZHknKTsqL1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZXNpemUgYWxsIGVsZW1lbnRzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAkKFwiYm9keSwgLnBhZ2Utd3JhcHBlclwiKS50cmlnZ2VyKFwicmVzaXplXCIpO1xuICAgICQoXCIucGFnZS13cmFwcGVyXCIpLmRlbGF5KDIwKS5zaG93KCk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBUbyBkbyBsaXN0XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAkKFwiLmxpc3QtdGFzayBsaSBsYWJlbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJ0YXNrLWRvbmVcIik7XG4gICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb2xsYXBzYWJsZSBjYXJkc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJCgnYVtkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnW2RhdGEtYWN0aW9uPVwiY29sbGFwc2VcIl0gaScpLnRvZ2dsZUNsYXNzKCd0aS1taW51cyB0aS1wbHVzJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5jaGlsZHJlbignLmNhcmQtYm9keScpLmNvbGxhcHNlKCd0b2dnbGUnKTtcbiAgICB9KTtcbiAgICAvLyBUb2dnbGUgZnVsbHNjcmVlblxuICAgICQoJ2FbZGF0YS1hY3Rpb249XCJleHBhbmRcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCdbZGF0YS1hY3Rpb249XCJleHBhbmRcIl0gaScpLnRvZ2dsZUNsYXNzKCdtZGktYXJyb3ctZXhwYW5kIG1kaS1hcnJvdy1jb21wcmVzcycpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykudG9nZ2xlQ2xhc3MoJ2NhcmQtZnVsbHNjcmVlbicpO1xuICAgIH0pO1xuICAgIC8vIENsb3NlIEJ1c2luZXNzQ2FyZFxuICAgICQoJ2FbZGF0YS1hY3Rpb249XCJjbG9zZVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLnJlbW92ZUNsYXNzKCkuc2xpZGVVcCgnZmFzdCcpO1xuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTFRoaXMgaXMgZm9yIG1lZ2EgbWVudVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZWdhLWRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pO1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTGFzdCBtb250aCBlYXJuaW5nXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YXIgc3BhcmtsaW5lTG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5sYXN0bW9udGgnKS5zcGFya2xpbmUoWzYsIDEwLCA5LCAxMSwgOSwgMTAsIDEyXSwge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICczNScsXG4gICAgICAgICAgICBiYXJXaWR0aDogJzQnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGJhclNwYWNpbmc6ICc4JyxcbiAgICAgICAgICAgIGJhckNvbG9yOiAnIzI5NjFmZidcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuICAgIHZhciBzcGFya1Jlc2l6ZTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNwYXJrUmVzaXplKTtcbiAgICAgICAgc3BhcmtSZXNpemUgPSBzZXRUaW1lb3V0KHNwYXJrbGluZUxvZ2luLCA1MDApO1xuICAgIH0pO1xuICAgIHNwYXJrbGluZUxvZ2luKCk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBpbm5lcmxlZnQgc2lkZWJhclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgJChcIi5zaG93LWxlZnQtcGFydFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5sZWZ0LXBhcnQnKS50b2dnbGVDbGFzcygnc2hvdy1wYW5lbCcpO1xuICAgICAgICAkKCcuc2hvdy1sZWZ0LXBhcnQnKS50b2dnbGVDbGFzcygndGktbWVudScpO1xuICAgIH0pO1xuXG5cbiAgICAkKCcuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICB0aW1lOiAnZmFyIGZhLWNsb2NrJyxcbiAgICAgICAgICAgIGRhdGU6ICdmYXMgZmEtY2FsZW5kYXInLFxuICAgICAgICAgICAgdXA6ICdmYXMgZmEtY2hldnJvbi11cCcsXG4gICAgICAgICAgICBkb3duOiAnZmFzIGZhLWNoZXZyb24tZG93bicsXG4gICAgICAgICAgICBwcmV2aW91czogJ2ZhcyBmYS1jaGV2cm9uLWxlZnQnLFxuICAgICAgICAgICAgbmV4dDogJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JyxcbiAgICAgICAgICAgIHRvZGF5OiAnZmFzIGZhLWNoZWNrLWNpcmNsZScsXG4gICAgICAgICAgICBjbGVhcjogJ2ZhcyBmYS10cmFzaCcsXG4gICAgICAgICAgICBjbG9zZTogJ2ZhcyBmYS1yZW1vdmUnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIuc3RhdGlzdGljc19kYXRldGltZXBpY2tlclwiKS5kYXRldGltZXBpY2tlcih7XG4gICAgICAgIGZvcm1hdDogXCJNTS5ZWVlZXCIsXG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICB0aW1lOiAnZmFyIGZhLWNsb2NrJyxcbiAgICAgICAgICAgIGRhdGU6ICdmYSBmYS1jYWxlbmRhcicsXG4gICAgICAgICAgICB1cDogJ2ZhIGZhLWNoZXZyb24tdXAnLFxuICAgICAgICAgICAgZG93bjogJ2ZhIGZhLWNoZXZyb24tZG93bicsXG4gICAgICAgICAgICBwcmV2aW91czogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXG4gICAgICAgICAgICBuZXh0OiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXG4gICAgICAgICAgICB0b2RheTogJ2ZhIGZhLWNoZWNrLWNpcmNsZScsXG4gICAgICAgICAgICBjbGVhcjogJ2ZhIGZhLXRyYXNoJyxcbiAgICAgICAgICAgIGNsb3NlOiAnZmEgZmEtcmVtb3ZlJ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRlVGltZVBpY2tlckNvbmZpZ1dpdGhEYXkgPSB7XG4gICAgICAgIGZvcm1hdDogXCJERC5NTS5ZWVlZXCIsXG4gICAgICAgIGxvY2FsZTogJ3J1JyxcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgIHRpbWU6ICdmYXIgZmEtY2xvY2snLFxuICAgICAgICAgICAgZGF0ZTogJ2ZhIGZhLWNhbGVuZGFyJyxcbiAgICAgICAgICAgIHVwOiAnZmEgZmEtY2hldnJvbi11cCcsXG4gICAgICAgICAgICBkb3duOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcbiAgICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcbiAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcbiAgICAgICAgICAgIHRvZGF5OiAnZmEgZmEtY2hlY2stY2lyY2xlJyxcbiAgICAgICAgICAgIGNsZWFyOiAnZmEgZmEtdHJhc2gnLFxuICAgICAgICAgICAgY2xvc2U6ICdmYSBmYS1yZW1vdmUnXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJChcIi5qcy0tZGF0ZXRpbWVwaWNrZXJcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBqcy0tZGF0ZXRpbWVwaWNrZXInKTtcbiAgICAgICAgICAgICQoJy5qcy0tZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcihkYXRlVGltZVBpY2tlckNvbmZpZ1dpdGhEYXkpO1xuICAgICAgICB9XG4gICAgICAgICQoJy5kYXRlcGlja2VyJykuZGF0ZXRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgZm9ybWF0OiBcIkRELk1NLllZWVlcIixcbiAgICAgICAgICAgIGxvY2FsZTogJ3J1JyxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgdGltZTogJ2ZhciBmYS1jbG9jaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJ2ZhcyBmYS1jYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgdXA6ICdmYXMgZmEtY2hldnJvbi11cCcsXG4gICAgICAgICAgICAgICAgZG93bjogJ2ZhcyBmYS1jaGV2cm9uLWRvd24nLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnZmFzIGZhLWNoZXZyb24tbGVmdCcsXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICB0b2RheTogJ2ZhcyBmYS1jaGVjay1jaXJjbGUnLFxuICAgICAgICAgICAgICAgIGNsZWFyOiAnZmFzIGZhLXRyYXNoJyxcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2ZhcyBmYS1yZW1vdmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuXG4gICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA+IDk5Mil7XG4gICAgICAgIHZhciB0YWJsZSA9ICQoJy5kYXRhdGFibGUnKS5EYXRhVGFibGUoKTtcbiAgICAgICAgdGFibGUuZml4ZWRIZWFkZXIuZGlzYWJsZSgpO1xuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA2NCkge1xuICAgICAgICAgICAgICAgICQoJy50b3BiYXInKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDY0KSB7XG4gICAgICAgICAgICAgICAgJCgnLnRvcGJhcicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGVsID0gJCgnI21haW4td3JhcHBlcicpO1xuXG4gICAgICAgIGlmIChlbC5kYXRhKCdsYXlvdXQnKSA9PT0gJ2hvcml6b250YWwnICYmIGVsLmRhdGEoJ25hdmJhcmJnJykgPT09ICdza2luNicpIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgIGxldCBuYXZfYmFyX2NoaWxkZXIgPSAkKCcubmF2YmFyJykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgbGV0IG5hdl9iYXJfd2lkdGggPSAwO1xuICAgICAgICAgICAgJChuYXZfYmFyX2NoaWxkZXIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG5hdl9iYXJfd2lkdGggKz0gJCh0aGlzKS53aWR0aCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChuYXZfYmFyX3dpZHRoID4gd2luZG93X3dpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICAkKCcjc2lkZWJhcm5hdicpLmFkZENsYXNzKCdjc3MtLWhpZGUtaWNvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgMjAwKTtcblxuLy8gaW5pdCxjb25maWd1cmUgZHJvcHpvbmVcbiAgICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcblxuICAgIGlmICggJChcIi5kcm9wem9uZVwiKS5sZW5ndGggKSB7XG5cbiAgICAgICAgbGV0IGRyb3B6b25lT3JkZXJVcGxvYWQgPSBuZXcgRHJvcHpvbmUoXCIuZHJvcHpvbmVcIiwgRHJvcHpvbmVPcHRpb25zKTtcblxuICAgICAgICAkKCcuanMtZHJvcHpvbmUtc2VuZCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkcm9wem9uZU9yZGVyVXBsb2FkLnByb2Nlc3NRdWV1ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn0pO1xuIiwiLypcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXG5BdXRob3I6IFdyYXBwaXhlbFxuXG5GaWxlOiBqc1xuKi9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBdXRvIHNlbGVjdCBsZWZ0IG5hdmJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiQoZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24gKyBcIlwiO1xuICAgICAgICB2YXIgcGF0aCA9IHVybC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgXCIvXCIsIFwiXCIpO1xuICAgICAgICB2YXIgZWxlbWVudCA9ICQoJ3VsI3NpZGViYXJuYXYgYScpLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhyZWYgPT09IHVybCB8fCB0aGlzLmhyZWYgPT09IHBhdGg7Ly8gfHwgdXJsLmhyZWYuaW5kZXhPZih0aGlzLmhyZWYpID09PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRzVW50aWwoXCIuc2lkZWJhci1uYXZcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCQodGhpcykuaXMoXCJsaVwiKSAmJiAkKHRoaXMpLmNoaWxkcmVuKFwiYVwiKS5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbihcImFcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoXCJ1bCNzaWRlYmFybmF2XCIpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/ICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgOiAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCEkKHRoaXMpLmlzKFwidWxcIikgJiYgJCh0aGlzKS5jaGlsZHJlbihcImFcIikubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZigkKHRoaXMpLmlzKFwidWxcIikpe1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgZWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKCcjc2lkZWJhcm5hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkZSBhbnkgb3BlbiBtZW51cyBhbmQgcmVtb3ZlIGFsbCBvdGhlciBjbGFzc2VzXG4gICAgICAgICAgICAgICAgJChcInVsXCIsICQodGhpcykucGFyZW50cyhcInVsOmZpcnN0XCIpKS5yZW1vdmVDbGFzcyhcImluXCIpO1xuICAgICAgICAgICAgICAgICQoXCJhXCIsICQodGhpcykucGFyZW50cyhcInVsOmZpcnN0XCIpKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIG9wZW4gb3VyIG5ldyBtZW51IGFuZCBhZGQgdGhlIG9wZW4gY2xhc3NcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoXCJ1bFwiKS5hZGRDbGFzcyhcImluXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhcInVsOmZpcnN0XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykubmV4dChcInVsXCIpLnJlbW92ZUNsYXNzKFwiaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgfSlcbiAgICAkKCcjc2lkZWJhcm5hdiA+bGkgPmEuaGFzLWFycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG59KTtcbiIsIiFmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQpe3JldHVybiBudWxsIT09dCYmdD09PXQud2luZG93fWZ1bmN0aW9uIG4odCl7cmV0dXJuIGUodCk/dDo5PT09dC5ub2RlVHlwZSYmdC5kZWZhdWx0Vmlld31mdW5jdGlvbiBhKHQpe3ZhciBlLGEsaT17dG9wOjAsbGVmdDowfSxvPXQmJnQub3duZXJEb2N1bWVudDtyZXR1cm4gZT1vLmRvY3VtZW50RWxlbWVudCxcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QmJihpPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGE9bihvKSx7dG9wOmkudG9wK2EucGFnZVlPZmZzZXQtZS5jbGllbnRUb3AsbGVmdDppLmxlZnQrYS5wYWdlWE9mZnNldC1lLmNsaWVudExlZnR9fWZ1bmN0aW9uIGkodCl7dmFyIGU9XCJcIjtmb3IodmFyIG4gaW4gdCl0Lmhhc093blByb3BlcnR5KG4pJiYoZSs9bitcIjpcIit0W25dK1wiO1wiKTtyZXR1cm4gZX1mdW5jdGlvbiBvKHQpe2lmKGQuYWxsb3dFdmVudCh0KT09PSExKXJldHVybiBudWxsO2Zvcih2YXIgZT1udWxsLG49dC50YXJnZXR8fHQuc3JjRWxlbWVudDtudWxsIT09bi5wYXJlbnRFbGVtZW50Oyl7aWYoIShuIGluc3RhbmNlb2YgU1ZHRWxlbWVudHx8LTE9PT1uLmNsYXNzTmFtZS5pbmRleE9mKFwid2F2ZXMtZWZmZWN0XCIpKSl7ZT1uO2JyZWFrfWlmKG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwid2F2ZXMtZWZmZWN0XCIpKXtlPW47YnJlYWt9bj1uLnBhcmVudEVsZW1lbnR9cmV0dXJuIGV9ZnVuY3Rpb24gcihlKXt2YXIgbj1vKGUpO251bGwhPT1uJiYoYy5zaG93KGUsbiksXCJvbnRvdWNoc3RhcnRcImluIHQmJihuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGMuaGlkZSwhMSksbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIixjLmhpZGUsITEpKSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYy5oaWRlLCExKSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsYy5oaWRlLCExKSl9dmFyIHM9c3x8e30sdT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpLGM9e2R1cmF0aW9uOjc1MCxzaG93OmZ1bmN0aW9uKHQsZSl7aWYoMj09PXQuYnV0dG9uKXJldHVybiExO3ZhciBuPWV8fHRoaXMsbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO28uY2xhc3NOYW1lPVwid2F2ZXMtcmlwcGxlXCIsbi5hcHBlbmRDaGlsZChvKTt2YXIgcj1hKG4pLHM9dC5wYWdlWS1yLnRvcCx1PXQucGFnZVgtci5sZWZ0LGQ9XCJzY2FsZShcIituLmNsaWVudFdpZHRoLzEwMCoxMCtcIilcIjtcInRvdWNoZXNcImluIHQmJihzPXQudG91Y2hlc1swXS5wYWdlWS1yLnRvcCx1PXQudG91Y2hlc1swXS5wYWdlWC1yLmxlZnQpLG8uc2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIsRGF0ZS5ub3coKSksby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjYWxlXCIsZCksby5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIix1KSxvLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLHMpO3ZhciBsPXt0b3A6cytcInB4XCIsbGVmdDp1K1wicHhcIn07by5jbGFzc05hbWU9by5jbGFzc05hbWUrXCIgd2F2ZXMtbm90cmFuc2l0aW9uXCIsby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGkobCkpLG8uY2xhc3NOYW1lPW8uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3YXZlcy1ub3RyYW5zaXRpb25cIixcIlwiKSxsW1wiLXdlYmtpdC10cmFuc2Zvcm1cIl09ZCxsW1wiLW1vei10cmFuc2Zvcm1cIl09ZCxsW1wiLW1zLXRyYW5zZm9ybVwiXT1kLGxbXCItby10cmFuc2Zvcm1cIl09ZCxsLnRyYW5zZm9ybT1kLGwub3BhY2l0eT1cIjFcIixsW1wiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCJdPWMuZHVyYXRpb24rXCJtc1wiLGxbXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIl09Yy5kdXJhdGlvbitcIm1zXCIsbFtcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIl09Yy5kdXJhdGlvbitcIm1zXCIsbFtcInRyYW5zaXRpb24tZHVyYXRpb25cIl09Yy5kdXJhdGlvbitcIm1zXCIsbFtcIi13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIl09XCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsbFtcIi1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCJdPVwiY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKVwiLGxbXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiXT1cImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsaShsKSl9LGhpZGU6ZnVuY3Rpb24odCl7ZC50b3VjaHVwKHQpO3ZhciBlPXRoaXMsbj0oMS40KmUuY2xpZW50V2lkdGgsbnVsbCksYT1lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3YXZlcy1yaXBwbGVcIik7aWYoIShhLmxlbmd0aD4wKSlyZXR1cm4hMTtuPWFbYS5sZW5ndGgtMV07dmFyIG89bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikscj1uLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSxzPW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1zY2FsZVwiKSx1PURhdGUubm93KCktTnVtYmVyKG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1ob2xkXCIpKSxsPTM1MC11OzA+bCYmKGw9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciB0PXt0b3A6citcInB4XCIsbGVmdDpvK1wicHhcIixvcGFjaXR5OlwiMFwiLFwiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCI6Yy5kdXJhdGlvbitcIm1zXCIsXCItbW96LXRyYW5zaXRpb24tZHVyYXRpb25cIjpjLmR1cmF0aW9uK1wibXNcIixcIi1vLXRyYW5zaXRpb24tZHVyYXRpb25cIjpjLmR1cmF0aW9uK1wibXNcIixcInRyYW5zaXRpb24tZHVyYXRpb25cIjpjLmR1cmF0aW9uK1wibXNcIixcIi13ZWJraXQtdHJhbnNmb3JtXCI6cyxcIi1tb3otdHJhbnNmb3JtXCI6cyxcIi1tcy10cmFuc2Zvcm1cIjpzLFwiLW8tdHJhbnNmb3JtXCI6cyx0cmFuc2Zvcm06c307bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGkodCkpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0cnl7ZS5yZW1vdmVDaGlsZChuKX1jYXRjaCh0KXtyZXR1cm4hMX19LGMuZHVyYXRpb24pfSxsKX0sd3JhcElucHV0OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKXt2YXIgbj10W2VdO2lmKFwiaW5wdXRcIj09PW4udGFnTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgYT1uLnBhcmVudE5vZGU7aWYoXCJpXCI9PT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmLTEhPT1hLmNsYXNzTmFtZS5pbmRleE9mKFwid2F2ZXMtZWZmZWN0XCIpKWNvbnRpbnVlO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO2kuY2xhc3NOYW1lPW4uY2xhc3NOYW1lK1wiIHdhdmVzLWlucHV0LXdyYXBwZXJcIjt2YXIgbz1uLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO298fChvPVwiXCIpLGkuc2V0QXR0cmlidXRlKFwic3R5bGVcIixvKSxuLmNsYXNzTmFtZT1cIndhdmVzLWJ1dHRvbi1pbnB1dFwiLG4ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksYS5yZXBsYWNlQ2hpbGQoaSxuKSxpLmFwcGVuZENoaWxkKG4pfX19fSxkPXt0b3VjaGVzOjAsYWxsb3dFdmVudDpmdW5jdGlvbih0KXt2YXIgZT0hMDtyZXR1cm5cInRvdWNoc3RhcnRcIj09PXQudHlwZT9kLnRvdWNoZXMrPTE6XCJ0b3VjaGVuZFwiPT09dC50eXBlfHxcInRvdWNoY2FuY2VsXCI9PT10LnR5cGU/c2V0VGltZW91dChmdW5jdGlvbigpe2QudG91Y2hlcz4wJiYoZC50b3VjaGVzLT0xKX0sNTAwKTpcIm1vdXNlZG93blwiPT09dC50eXBlJiZkLnRvdWNoZXM+MCYmKGU9ITEpLGV9LHRvdWNodXA6ZnVuY3Rpb24odCl7ZC5hbGxvd0V2ZW50KHQpfX07cy5kaXNwbGF5RWZmZWN0PWZ1bmN0aW9uKGUpe2U9ZXx8e30sXCJkdXJhdGlvblwiaW4gZSYmKGMuZHVyYXRpb249ZS5kdXJhdGlvbiksYy53cmFwSW5wdXQodShcIi53YXZlcy1lZmZlY3RcIikpLFwib250b3VjaHN0YXJ0XCJpbiB0JiZkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsciwhMSksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsciwhMSl9LHMuYXR0YWNoPWZ1bmN0aW9uKGUpe1wiaW5wdXRcIj09PWUudGFnTmFtZS50b0xvd2VyQ2FzZSgpJiYoYy53cmFwSW5wdXQoW2VdKSxlPWUucGFyZW50RWxlbWVudCksXCJvbnRvdWNoc3RhcnRcImluIHQmJmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixyLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixyLCExKX0sdC5XYXZlcz1zLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtzLmRpc3BsYXlFZmZlY3QoKX0sITEpfSh3aW5kb3cpOyIsIi8qIHBlcmZlY3Qtc2Nyb2xsYmFyIHYwLjYuMTAgKi9cbihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIHBzID0gcmVxdWlyZSgnLi4vbWFpbicpXG4gICwgcHNJbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9wbHVnaW4vaW5zdGFuY2VzJyk7XG5cbmZ1bmN0aW9uIG1vdW50SlF1ZXJ5KGpRdWVyeSkge1xuICBqUXVlcnkuZm4ucGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIChzZXR0aW5nT3JDb21tYW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIHNldHRpbmdPckNvbW1hbmQgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgdHlwZW9mIHNldHRpbmdPckNvbW1hbmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0IG9yIG5vbmUsIGluaXRpYWxpemUuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHNldHRpbmdPckNvbW1hbmQ7XG5cbiAgICAgICAgaWYgKCFwc0luc3RhbmNlcy5nZXQodGhpcykpIHtcbiAgICAgICAgICBwcy5pbml0aWFsaXplKHRoaXMsIHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5sZXNzLCBpdCBtYXkgYmUgYSBjb21tYW5kLlxuICAgICAgICB2YXIgY29tbWFuZCA9IHNldHRpbmdPckNvbW1hbmQ7XG5cbiAgICAgICAgaWYgKGNvbW1hbmQgPT09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgcHMudXBkYXRlKHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09ICdkZXN0cm95Jykge1xuICAgICAgICAgIHBzLmRlc3Ryb3kodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGpRdWVyeSh0aGlzKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gIGRlZmluZShbJ2pxdWVyeSddLCBtb3VudEpRdWVyeSk7XG59IGVsc2Uge1xuICB2YXIganEgPSB3aW5kb3cualF1ZXJ5ID8gd2luZG93LmpRdWVyeSA6IHdpbmRvdy4kO1xuICBpZiAodHlwZW9mIGpxICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vdW50SlF1ZXJ5KGpxKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vdW50SlF1ZXJ5O1xuXG59LHtcIi4uL21haW5cIjo3LFwiLi4vcGx1Z2luL2luc3RhbmNlc1wiOjE4fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9sZEFkZChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgdmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICBpZiAoY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSkgPCAwKSB7XG4gICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gb2xkUmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICB2YXIgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIHZhciBpZHggPSBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKTtcbiAgaWYgKGlkeCA+PSAwKSB7XG4gICAgY2xhc3Nlcy5zcGxpY2UoaWR4LCAxKTtcbiAgfVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xufVxuXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgb2xkQWRkKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBvbGRSZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufTtcblxuZXhwb3J0cy5saXN0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbGVtZW50LmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIH1cbn07XG5cbn0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRE9NID0ge307XG5cbkRPTS5lID0gZnVuY3Rpb24gKHRhZ05hbWUsIGNsYXNzTmFtZSkge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbkRPTS5hcHBlbmRUbyA9IGZ1bmN0aW9uIChjaGlsZCwgcGFyZW50KSB7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIHJldHVybiBjaGlsZDtcbn07XG5cbmZ1bmN0aW9uIGNzc0dldChlbGVtZW50LCBzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3N0eWxlTmFtZV07XG59XG5cbmZ1bmN0aW9uIGNzc1NldChlbGVtZW50LCBzdHlsZU5hbWUsIHN0eWxlVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHN0eWxlVmFsdWUgPSBzdHlsZVZhbHVlLnRvU3RyaW5nKCkgKyAncHgnO1xuICB9XG4gIGVsZW1lbnQuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjc3NNdWx0aVNldChlbGVtZW50LCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IHZhbC50b1N0cmluZygpICsgJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5ET00uY3NzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0LCBzdHlsZVZhbHVlKSB7XG4gIGlmICh0eXBlb2Ygc3R5bGVOYW1lT3JPYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gbXVsdGlwbGUgc2V0IHdpdGggb2JqZWN0XG4gICAgcmV0dXJuIGNzc011bHRpU2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gY3NzR2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNzc1NldChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCwgc3R5bGVWYWx1ZSk7XG4gICAgfVxuICB9XG59O1xuXG5ET00ubWF0Y2hlcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBxdWVyeSkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHF1ZXJ5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlc1NlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvcihxdWVyeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcihxdWVyeSk7XG4gICAgfVxuICB9XG59O1xuXG5ET00ucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50LnJlbW92ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbn07XG5cbkRPTS5xdWVyeUNoaWxkcmVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gRE9NLm1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBFdmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmV2ZW50cyA9IHt9O1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGlzSGFuZGxlclByb3ZpZGVkID0gKHR5cGVvZiBoYW5kbGVyICE9PSAndW5kZWZpbmVkJyk7XG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGRscikge1xuICAgIGlmIChpc0hhbmRsZXJQcm92aWRlZCAmJiBoZGxyICE9PSBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoZGxyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LCB0aGlzKTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgdGhpcy51bmJpbmQobmFtZSk7XG4gIH1cbn07XG5cbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5ldmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChldmVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZXZlbnRFbGVtZW50LmVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gIH0pWzBdO1xuICBpZiAodHlwZW9mIGVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVlID0gbmV3IEV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMucHVzaChlZSk7XG4gIH1cbiAgcmV0dXJuIGVlO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkudW5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmV2ZW50RWxlbWVudHNbaV0udW5iaW5kQWxsKCk7XG4gIH1cbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciBvbmNlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZSk7XG4gIH07XG4gIGVlLmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50TWFuYWdlcjtcblxufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gczQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICB9O1xufSkoKTtcblxufSx7fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBjbHMgPSByZXF1aXJlKCcuL2NsYXNzJylcbiAgLCBkID0gcmVxdWlyZSgnLi9kb20nKTtcblxuZXhwb3J0cy50b0ludCA9IGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiBwYXJzZUludCh4LCAxMCkgfHwgMDtcbn07XG5cbmV4cG9ydHMuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXMuY2xvbmUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbn07XG5cbmV4cG9ydHMuZXh0ZW5kID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBzb3VyY2UpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuY2xvbmUob3JpZ2luYWwpO1xuICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgcmVzdWx0W2tleV0gPSB0aGlzLmNsb25lKHNvdXJjZVtrZXldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5pc0VkaXRhYmxlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHJldHVybiBkLm1hdGNoZXMoZWwsIFwiaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV1cIikgfHxcbiAgICAgICAgIGQubWF0Y2hlcyhlbCwgXCJzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV1cIikgfHxcbiAgICAgICAgIGQubWF0Y2hlcyhlbCwgXCJ0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXVwiKSB8fFxuICAgICAgICAgZC5tYXRjaGVzKGVsLCBcImJ1dHRvbixbY29udGVudGVkaXRhYmxlXVwiKTtcbn07XG5cbmV4cG9ydHMucmVtb3ZlUHNDbGFzc2VzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIGNsc0xpc3QgPSBjbHMubGlzdChlbGVtZW50KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsc0xpc3RbaV07XG4gICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCdwcy0nKSA9PT0gMCkge1xuICAgICAgY2xzLnJlbW92ZShlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5vdXRlcldpZHRoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHRoaXMudG9JbnQoZC5jc3MoZWxlbWVudCwgJ3dpZHRoJykpICtcbiAgICAgICAgIHRoaXMudG9JbnQoZC5jc3MoZWxlbWVudCwgJ3BhZGRpbmdMZWZ0JykpICtcbiAgICAgICAgIHRoaXMudG9JbnQoZC5jc3MoZWxlbWVudCwgJ3BhZGRpbmdSaWdodCcpKSArXG4gICAgICAgICB0aGlzLnRvSW50KGQuY3NzKGVsZW1lbnQsICdib3JkZXJMZWZ0V2lkdGgnKSkgK1xuICAgICAgICAgdGhpcy50b0ludChkLmNzcyhlbGVtZW50LCAnYm9yZGVyUmlnaHRXaWR0aCcpKTtcbn07XG5cbmV4cG9ydHMuc3RhcnRTY3JvbGxpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcykge1xuICBjbHMuYWRkKGVsZW1lbnQsICdwcy1pbi1zY3JvbGxpbmcnKTtcbiAgaWYgKHR5cGVvZiBheGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLScgKyBheGlzKTtcbiAgfSBlbHNlIHtcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy14Jyk7XG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMteScpO1xuICB9XG59O1xuXG5leHBvcnRzLnN0b3BTY3JvbGxpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcykge1xuICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1pbi1zY3JvbGxpbmcnKTtcbiAgaWYgKHR5cGVvZiBheGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLScgKyBheGlzKTtcbiAgfSBlbHNlIHtcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy14Jyk7XG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMteScpO1xuICB9XG59O1xuXG5leHBvcnRzLmVudiA9IHtcbiAgaXNXZWJLaXQ6ICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gIHN1cHBvcnRzVG91Y2g6ICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcbiAgc3VwcG9ydHNJZVBvaW50ZXI6IHdpbmRvdy5uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAhPT0gbnVsbFxufTtcblxufSx7XCIuL2NsYXNzXCI6MixcIi4vZG9tXCI6M31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVzdHJveSA9IHJlcXVpcmUoJy4vcGx1Z2luL2Rlc3Ryb3knKVxuICAsIGluaXRpYWxpemUgPSByZXF1aXJlKCcuL3BsdWdpbi9pbml0aWFsaXplJylcbiAgLCB1cGRhdGUgPSByZXF1aXJlKCcuL3BsdWdpbi91cGRhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gIHVwZGF0ZTogdXBkYXRlLFxuICBkZXN0cm95OiBkZXN0cm95XG59O1xuXG59LHtcIi4vcGx1Z2luL2Rlc3Ryb3lcIjo5LFwiLi9wbHVnaW4vaW5pdGlhbGl6ZVwiOjE3LFwiLi9wbHVnaW4vdXBkYXRlXCI6MjF9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxYTWFyZ2luT2Zmc2V0OiAwLFxuICBzY3JvbGxZTWFyZ2luT2Zmc2V0OiAwLFxuICBzdG9wUHJvcGFnYXRpb25PbkNsaWNrOiB0cnVlLFxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxuICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxuICBzd2lwZVByb3BhZ2F0aW9uOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgdXNlS2V5Ym9hcmQ6IHRydWUsXG4gIHVzZVNlbGVjdGlvblNjcm9sbDogZmFsc2UsXG4gIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlLFxuICB3aGVlbFNwZWVkOiAxLFxuICB0aGVtZTogJ2RlZmF1bHQnXG59O1xuXG59LHt9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGQgPSByZXF1aXJlKCcuLi9saWIvZG9tJylcbiAgLCBoID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpXG4gICwgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG5cbiAgaWYgKCFpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaS5ldmVudC51bmJpbmRBbGwoKTtcbiAgZC5yZW1vdmUoaS5zY3JvbGxiYXJYKTtcbiAgZC5yZW1vdmUoaS5zY3JvbGxiYXJZKTtcbiAgZC5yZW1vdmUoaS5zY3JvbGxiYXJYUmFpbCk7XG4gIGQucmVtb3ZlKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICBoLnJlbW92ZVBzQ2xhc3NlcyhlbGVtZW50KTtcblxuICBpbnN0YW5jZXMucmVtb3ZlKGVsZW1lbnQpO1xufTtcblxufSx7XCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9pbnN0YW5jZXNcIjoxOH1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGggPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVyJylcbiAgLCBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKVxuICAsIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5JylcbiAgLCB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XG5cbmZ1bmN0aW9uIGJpbmRDbGlja1JhaWxIYW5kbGVyKGVsZW1lbnQsIGkpIHtcbiAgZnVuY3Rpb24gcGFnZU9mZnNldChlbCkge1xuICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuICB2YXIgc3RvcFByb3BhZ2F0aW9uID0gd2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24uYmluZDtcblxuICBpZiAoaS5zZXR0aW5ncy5zdG9wUHJvcGFnYXRpb25PbkNsaWNrKSB7XG4gICAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgfVxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZUmFpbCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgaGFsZk9mU2Nyb2xsYmFyTGVuZ3RoID0gaC50b0ludChpLnNjcm9sbGJhcllIZWlnaHQgLyAyKTtcbiAgICB2YXIgcG9zaXRpb25Ub3AgPSBpLnJhaWxZUmF0aW8gKiAoZS5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCAtIHBhZ2VPZmZzZXQoaS5zY3JvbGxiYXJZUmFpbCkudG9wIC0gaGFsZk9mU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgICB2YXIgbWF4UG9zaXRpb25Ub3AgPSBpLnJhaWxZUmF0aW8gKiAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCk7XG4gICAgdmFyIHBvc2l0aW9uUmF0aW8gPSBwb3NpdGlvblRvcCAvIG1heFBvc2l0aW9uVG9wO1xuXG4gICAgaWYgKHBvc2l0aW9uUmF0aW8gPCAwKSB7XG4gICAgICBwb3NpdGlvblJhdGlvID0gMDtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uUmF0aW8gPiAxKSB7XG4gICAgICBwb3NpdGlvblJhdGlvID0gMTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgKiBwb3NpdGlvblJhdGlvKTtcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGlmIChpLnNldHRpbmdzLnN0b3BQcm9wYWdhdGlvbk9uQ2xpY2spIHtcbiAgICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICB9XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBoYWxmT2ZTY3JvbGxiYXJMZW5ndGggPSBoLnRvSW50KGkuc2Nyb2xsYmFyWFdpZHRoIC8gMik7XG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9IGkucmFpbFhSYXRpbyAqIChlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gcGFnZU9mZnNldChpLnNjcm9sbGJhclhSYWlsKS5sZWZ0IC0gaGFsZk9mU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgICB2YXIgbWF4UG9zaXRpb25MZWZ0ID0gaS5yYWlsWFJhdGlvICogKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKTtcbiAgICB2YXIgcG9zaXRpb25SYXRpbyA9IHBvc2l0aW9uTGVmdCAvIG1heFBvc2l0aW9uTGVmdDtcblxuICAgIGlmIChwb3NpdGlvblJhdGlvIDwgMCkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDA7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvblJhdGlvID4gMSkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDE7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgKChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpICogcG9zaXRpb25SYXRpbykgLSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCk7XG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG4gIGJpbmRDbGlja1JhaWxIYW5kbGVyKGVsZW1lbnQsIGkpO1xufTtcblxufSx7XCIuLi8uLi9saWIvaGVscGVyXCI6NixcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuLi91cGRhdGUtc2Nyb2xsXCI6MjB9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBkID0gcmVxdWlyZSgnLi4vLi4vbGliL2RvbScpXG4gICwgaCA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKVxuICAsIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpXG4gICwgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKVxuICAsIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcblxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsWEhhbmRsZXIoZWxlbWVudCwgaSkge1xuICB2YXIgY3VycmVudExlZnQgPSBudWxsO1xuICB2YXIgY3VycmVudFBhZ2VYID0gbnVsbDtcblxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxMZWZ0KGRlbHRhWCkge1xuICAgIHZhciBuZXdMZWZ0ID0gY3VycmVudExlZnQgKyAoZGVsdGFYICogaS5yYWlsWFJhdGlvKTtcbiAgICB2YXIgbWF4TGVmdCA9IE1hdGgubWF4KDAsIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgKyAoaS5yYWlsWFJhdGlvICogKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSk7XG5cbiAgICBpZiAobmV3TGVmdCA8IDApIHtcbiAgICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3TGVmdCA+IG1heExlZnQpIHtcbiAgICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBtYXhMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpLnNjcm9sbGJhclhMZWZ0ID0gbmV3TGVmdDtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGgudG9JbnQoaS5zY3JvbGxiYXJYTGVmdCAqIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIC8gKGkuY29udGFpbmVyV2lkdGggLSAoaS5yYWlsWFJhdGlvICogaS5zY3JvbGxiYXJYV2lkdGgpKSkgLSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudDtcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHZhciBtb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB1cGRhdGVTY3JvbGxMZWZ0KGUucGFnZVggLSBjdXJyZW50UGFnZVgpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHZhciBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBoLnN0b3BTY3JvbGxpbmcoZWxlbWVudCwgJ3gnKTtcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfTtcblxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjdXJyZW50UGFnZVggPSBlLnBhZ2VYO1xuICAgIGN1cnJlbnRMZWZ0ID0gaC50b0ludChkLmNzcyhpLnNjcm9sbGJhclgsICdsZWZ0JykpICogaS5yYWlsWFJhdGlvO1xuICAgIGguc3RhcnRTY3JvbGxpbmcoZWxlbWVudCwgJ3gnKTtcblxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsWUhhbmRsZXIoZWxlbWVudCwgaSkge1xuICB2YXIgY3VycmVudFRvcCA9IG51bGw7XG4gIHZhciBjdXJyZW50UGFnZVkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFRvcChkZWx0YVkpIHtcbiAgICB2YXIgbmV3VG9wID0gY3VycmVudFRvcCArIChkZWx0YVkgKiBpLnJhaWxZUmF0aW8pO1xuICAgIHZhciBtYXhUb3AgPSBNYXRoLm1heCgwLCBpLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkgKyAoaS5yYWlsWVJhdGlvICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpKTtcblxuICAgIGlmIChuZXdUb3AgPCAwKSB7XG4gICAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3VG9wID4gbWF4VG9wKSB7XG4gICAgICBpLnNjcm9sbGJhcllUb3AgPSBtYXhUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkuc2Nyb2xsYmFyWVRvcCA9IG5ld1RvcDtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gaC50b0ludChpLnNjcm9sbGJhcllUb3AgKiAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIC8gKGkuY29udGFpbmVySGVpZ2h0IC0gKGkucmFpbFlSYXRpbyAqIGkuc2Nyb2xsYmFyWUhlaWdodCkpKTtcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIHNjcm9sbFRvcCk7XG4gIH1cblxuICB2YXIgbW91c2VNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdXBkYXRlU2Nyb2xsVG9wKGUucGFnZVkgLSBjdXJyZW50UGFnZVkpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHZhciBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBoLnN0b3BTY3JvbGxpbmcoZWxlbWVudCwgJ3knKTtcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfTtcblxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjdXJyZW50UGFnZVkgPSBlLnBhZ2VZO1xuICAgIGN1cnJlbnRUb3AgPSBoLnRvSW50KGQuY3NzKGkuc2Nyb2xsYmFyWSwgJ3RvcCcpKSAqIGkucmFpbFlSYXRpbztcbiAgICBoLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XG5cbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xuICBiaW5kTW91c2VTY3JvbGxYSGFuZGxlcihlbGVtZW50LCBpKTtcbiAgYmluZE1vdXNlU2Nyb2xsWUhhbmRsZXIoZWxlbWVudCwgaSk7XG59O1xuXG59LHtcIi4uLy4uL2xpYi9kb21cIjozLFwiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaCA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKVxuICAsIGQgPSByZXF1aXJlKCcuLi8uLi9saWIvZG9tJylcbiAgLCBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKVxuICAsIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5JylcbiAgLCB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XG5cbmZ1bmN0aW9uIGJpbmRLZXlib2FyZEhhbmRsZXIoZWxlbWVudCwgaSkge1xuICB2YXIgaG92ZXJlZCA9IGZhbHNlO1xuICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgaG92ZXJlZCA9IHRydWU7XG4gIH0pO1xuICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaG92ZXJlZCA9IGZhbHNlO1xuICB9KTtcblxuICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fCAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICgoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fCAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMCkpIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCAmJiBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZvY3VzZWQgPSBkLm1hdGNoZXMoaS5zY3JvbGxiYXJYLCAnOmZvY3VzJykgfHxcbiAgICAgICAgICAgICAgICAgIGQubWF0Y2hlcyhpLnNjcm9sbGJhclksICc6Zm9jdXMnKTtcblxuICAgIGlmICghaG92ZXJlZCAmJiAhZm9jdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBpLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgLy8gZ28gZGVlcGVyIGlmIGVsZW1lbnQgaXMgYSB3ZWJjb21wb25lbnRcbiAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgfVxuICAgICAgaWYgKGguaXNFZGl0YWJsZShhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhWCA9IDA7XG4gICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICBkZWx0YVggPSAtMzA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgZGVsdGFZID0gMzA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OiAvLyByaWdodFxuICAgICAgZGVsdGFYID0gMzA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICBkZWx0YVkgPSAtMzA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMzOiAvLyBwYWdlIHVwXG4gICAgICBkZWx0YVkgPSA5MDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzI6IC8vIHNwYWNlIGJhclxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgZGVsdGFZID0gOTA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YVkgPSAtOTA7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgIGRlbHRhWSA9IC05MDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzNjogLy8gaG9tZVxuICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICBkZWx0YVkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gZGVsdGFZKTtcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyBkZWx0YVgpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKTtcbiAgICBpZiAoc2hvdWxkUHJldmVudCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xuICBiaW5kS2V5Ym9hcmRIYW5kbGVyKGVsZW1lbnQsIGkpO1xufTtcblxufSx7XCIuLi8uLi9saWIvZG9tXCI6MyxcIi4uLy4uL2xpYi9oZWxwZXJcIjo2LFwiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOSxcIi4uL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpXG4gICwgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKVxuICAsIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcblxuZnVuY3Rpb24gYmluZE1vdXNlV2hlZWxIYW5kbGVyKGVsZW1lbnQsIGkpIHtcbiAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fCAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICgoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fCAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMCkpIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsdGFGcm9tRXZlbnQoZSkge1xuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICB2YXIgZGVsdGFZID0gLTEgKiBlLmRlbHRhWTtcblxuICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBkZWx0YVkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIE9TIFggU2FmYXJpXG4gICAgICBkZWx0YVggPSAtMSAqIGUud2hlZWxEZWx0YVggLyA2O1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xuICAgICAgZGVsdGFYICo9IDEwO1xuICAgICAgZGVsdGFZICo9IDEwO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWS8qIE5hTiBjaGVja3MgKi8pIHtcbiAgICAgIC8vIElFIGluIHNvbWUgbW91c2UgZHJpdmVyc1xuICAgICAgZGVsdGFYID0gMDtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2RlbHRhWCwgZGVsdGFZXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeVRleHRhcmVhKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIGhvdmVyZWRUZXh0YXJlYSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWE6aG92ZXInKTtcbiAgICBpZiAoaG92ZXJlZFRleHRhcmVhKSB7XG4gICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gaG92ZXJlZFRleHRhcmVhLnNjcm9sbEhlaWdodCAtIGhvdmVyZWRUZXh0YXJlYS5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICBpZiAoIShob3ZlcmVkVGV4dGFyZWEuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGhvdmVyZWRUZXh0YXJlYS5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGhvdmVyZWRUZXh0YXJlYS5zY3JvbGxMZWZ0IC0gaG92ZXJlZFRleHRhcmVhLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgIGlmICghKGhvdmVyZWRUZXh0YXJlYS5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmXG4gICAgICAgICAgICAhKGhvdmVyZWRUZXh0YXJlYS5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2V3aGVlbEhhbmRsZXIoZSkge1xuICAgIHZhciBkZWx0YSA9IGdldERlbHRhRnJvbUV2ZW50KGUpO1xuXG4gICAgdmFyIGRlbHRhWCA9IGRlbHRhWzBdO1xuICAgIHZhciBkZWx0YVkgPSBkZWx0YVsxXTtcblxuICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlUZXh0YXJlYShkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XG4gICAgaWYgKCFpLnNldHRpbmdzLnVzZUJvdGhXaGVlbEF4ZXMpIHtcbiAgICAgIC8vIGRlbHRhWCB3aWxsIG9ubHkgYmUgdXNlZCBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgYW5kIGRlbHRhWSB3aWxsXG4gICAgICAvLyBvbmx5IGJlIHVzZWQgZm9yIHZlcnRpY2FsIHNjcm9sbGluZyAtIHRoaXMgaXMgdGhlIGRlZmF1bHRcbiAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgLSAoZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XG4gICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyAoZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhcllBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgLy8gb25seSB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgYWN0aXZlIGFuZCB1c2VCb3RoV2hlZWxBeGVzIG9wdGlvbiBpc1xuICAgICAgLy8gYWN0aXZlLCBzbyBsZXQncyBzY3JvbGwgdmVydGljYWwgYmFyIHVzaW5nIGJvdGggbW91c2Ugd2hlZWwgYXhlc1xuICAgICAgaWYgKGRlbHRhWSkge1xuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gKGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIChkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlICYmICFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgIC8vIHVzZUJvdGhXaGVlbEF4ZXMgYW5kIG9ubHkgaG9yaXpvbnRhbCBiYXIgaXMgYWN0aXZlLCBzbyB1c2UgYm90aFxuICAgICAgLy8gd2hlZWwgYXhlcyBmb3IgaG9yaXpvbnRhbCBiYXJcbiAgICAgIGlmIChkZWx0YVgpIHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgKGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0IC0gKGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XG5cbiAgICBzaG91bGRQcmV2ZW50ID0gKHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpKTtcbiAgICBpZiAoc2hvdWxkUHJldmVudCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5vbndoZWVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcbiAgYmluZE1vdXNlV2hlZWxIYW5kbGVyKGVsZW1lbnQsIGkpO1xufTtcblxufSx7XCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJylcbiAgLCB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xuXG5mdW5jdGlvbiBiaW5kTmF0aXZlU2Nyb2xsSGFuZGxlcihlbGVtZW50LCBpKSB7XG4gIGkuZXZlbnQuYmluZChlbGVtZW50LCAnc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG4gIGJpbmROYXRpdmVTY3JvbGxIYW5kbGVyKGVsZW1lbnQsIGkpO1xufTtcblxufSx7XCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaCA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKVxuICAsIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpXG4gICwgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKVxuICAsIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcblxuZnVuY3Rpb24gYmluZFNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCwgaSkge1xuICBmdW5jdGlvbiBnZXRSYW5nZU5vZGUoKSB7XG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24gPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSA6ICcnO1xuICAgIGlmIChzZWxlY3Rpb24udG9TdHJpbmcoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcm9sbGluZ0xvb3AgPSBudWxsO1xuICB2YXIgc2Nyb2xsRGlmZiA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICBmdW5jdGlvbiBzdGFydFNjcm9sbGluZygpIHtcbiAgICBpZiAoIXNjcm9sbGluZ0xvb3ApIHtcbiAgICAgIHNjcm9sbGluZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2VzLmdldChlbGVtZW50KSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIHNjcm9sbERpZmYudG9wKTtcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgc2Nyb2xsRGlmZi5sZWZ0KTtcbiAgICAgICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XG4gICAgICB9LCA1MCk7IC8vIGV2ZXJ5IC4xIHNlY1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGlmIChzY3JvbGxpbmdMb29wKSB7XG4gICAgICBjbGVhckludGVydmFsKHNjcm9sbGluZ0xvb3ApO1xuICAgICAgc2Nyb2xsaW5nTG9vcCA9IG51bGw7XG4gICAgfVxuICAgIGguc3RvcFNjcm9sbGluZyhlbGVtZW50KTtcbiAgfVxuXG4gIHZhciBpc1NlbGVjdGVkID0gZmFsc2U7XG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVsZW1lbnQuY29udGFpbnMoZ2V0UmFuZ2VOb2RlKCkpKSB7XG4gICAgICBpc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgc3RvcFNjcm9sbGluZygpO1xuICAgIH1cbiAgfSk7XG4gIGkuZXZlbnQuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICBzdG9wU2Nyb2xsaW5nKCk7XG4gICAgfVxuICB9KTtcblxuICBpLmV2ZW50LmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB7eDogZS5wYWdlWCwgeTogZS5wYWdlWX07XG4gICAgICB2YXIgY29udGFpbmVyR2VvbWV0cnkgPSB7XG4gICAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICAgICAgcmlnaHQ6IGVsZW1lbnQub2Zmc2V0TGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICAgIGJvdHRvbTogZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgfTtcblxuICAgICAgaWYgKG1vdXNlUG9zaXRpb24ueCA8IGNvbnRhaW5lckdlb21ldHJ5LmxlZnQgKyAzKSB7XG4gICAgICAgIHNjcm9sbERpZmYubGVmdCA9IC01O1xuICAgICAgICBoLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XG4gICAgICB9IGVsc2UgaWYgKG1vdXNlUG9zaXRpb24ueCA+IGNvbnRhaW5lckdlb21ldHJ5LnJpZ2h0IC0gMykge1xuICAgICAgICBzY3JvbGxEaWZmLmxlZnQgPSA1O1xuICAgICAgICBoLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxEaWZmLmxlZnQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobW91c2VQb3NpdGlvbi55IDwgY29udGFpbmVyR2VvbWV0cnkudG9wICsgMykge1xuICAgICAgICBpZiAoY29udGFpbmVyR2VvbWV0cnkudG9wICsgMyAtIG1vdXNlUG9zaXRpb24ueSA8IDUpIHtcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IC01O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gLTIwO1xuICAgICAgICB9XG4gICAgICAgIGguc3RhcnRTY3JvbGxpbmcoZWxlbWVudCwgJ3knKTtcbiAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbi55ID4gY29udGFpbmVyR2VvbWV0cnkuYm90dG9tIC0gMykge1xuICAgICAgICBpZiAobW91c2VQb3NpdGlvbi55IC0gY29udGFpbmVyR2VvbWV0cnkuYm90dG9tICsgMyA8IDUpIHtcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IDU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICBoLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxEaWZmLnRvcCA9PT0gMCAmJiBzY3JvbGxEaWZmLmxlZnQgPT09IDApIHtcbiAgICAgICAgc3RvcFNjcm9sbGluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRTY3JvbGxpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcbiAgYmluZFNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCwgaSk7XG59O1xuXG59LHtcIi4uLy4uL2xpYi9oZWxwZXJcIjo2LFwiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOSxcIi4uL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpXG4gICwgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKVxuICAsIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcblxuZnVuY3Rpb24gYmluZFRvdWNoSGFuZGxlcihlbGVtZW50LCBpLCBzdXBwb3J0c1RvdWNoLCBzdXBwb3J0c0llUG9pbnRlcikge1xuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgbWFnbml0dWRlWCA9IE1hdGguYWJzKGRlbHRhWCk7XG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xuXG4gICAgaWYgKG1hZ25pdHVkZVkgPiBtYWduaXR1ZGVYKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcblxuICAgICAgaWYgKCgoZGVsdGFZIDwgMCkgJiYgKHNjcm9sbFRvcCA9PT0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpKSB8fFxuICAgICAgICAgICgoZGVsdGFZID4gMCkgJiYgKHNjcm9sbFRvcCA9PT0gMCkpKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcblxuICAgICAgaWYgKCgoZGVsdGFYIDwgMCkgJiYgKHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkpIHx8XG4gICAgICAgICAgKChkZWx0YVggPiAwKSAmJiAoc2Nyb2xsTGVmdCA9PT0gMCkpKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCAtIGRpZmZlcmVuY2VZKTtcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgLSBkaWZmZXJlbmNlWCk7XG5cbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcbiAgfVxuXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xuICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgdmFyIHNwZWVkID0ge307XG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcbiAgdmFyIGluR2xvYmFsVG91Y2ggPSBmYWxzZTtcbiAgdmFyIGluTG9jYWxUb3VjaCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGdsb2JhbFRvdWNoU3RhcnQoKSB7XG4gICAgaW5HbG9iYWxUb3VjaCA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZ2xvYmFsVG91Y2hFbmQoKSB7XG4gICAgaW5HbG9iYWxUb3VjaCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1heWJlIElFIHBvaW50ZXJcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzaG91bGRIYW5kbGUoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiYgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICBpbkxvY2FsVG91Y2ggPSB0cnVlO1xuXG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgICAgc3RhcnRPZmZzZXQucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XG5cbiAgICAgIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICB9XG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XG4gICAgaWYgKCFpbkdsb2JhbFRvdWNoICYmIGluTG9jYWxUb3VjaCAmJiBzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHtwYWdlWDogdG91Y2gucGFnZVgsIHBhZ2VZOiB0b3VjaC5wYWdlWX07XG5cbiAgICAgIHZhciBkaWZmZXJlbmNlWCA9IGN1cnJlbnRPZmZzZXQucGFnZVggLSBzdGFydE9mZnNldC5wYWdlWDtcbiAgICAgIHZhciBkaWZmZXJlbmNlWSA9IGN1cnJlbnRPZmZzZXQucGFnZVkgLSBzdGFydE9mZnNldC5wYWdlWTtcblxuICAgICAgYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKTtcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b3VjaEVuZCgpIHtcbiAgICBpZiAoIWluR2xvYmFsVG91Y2ggJiYgaW5Mb2NhbFRvdWNoKSB7XG4gICAgICBpbkxvY2FsVG91Y2ggPSBmYWxzZTtcblxuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgIGVhc2luZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2VzLmdldChlbGVtZW50KSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkLngpIDwgMC4wMSAmJiBNYXRoLmFicyhzcGVlZC55KSA8IDAuMDEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5VG91Y2hNb3ZlKHNwZWVkLnggKiAzMCwgc3BlZWQueSAqIDMwKTtcblxuICAgICAgICBzcGVlZC54ICo9IDAuODtcbiAgICAgICAgc3BlZWQueSAqPSAwLjg7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICBpLmV2ZW50LmJpbmQod2luZG93LCAndG91Y2hzdGFydCcsIGdsb2JhbFRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGdsb2JhbFRvdWNoRW5kKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcbiAgfVxuXG4gIGlmIChzdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQod2luZG93LCAncG9pbnRlcmRvd24nLCBnbG9iYWxUb3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdwb2ludGVydXAnLCBnbG9iYWxUb3VjaEVuZCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQod2luZG93LCAnTVNQb2ludGVyRG93bicsIGdsb2JhbFRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ01TUG9pbnRlclVwJywgZ2xvYmFsVG91Y2hFbmQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlck1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgc3VwcG9ydHNUb3VjaCwgc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xuICBiaW5kVG91Y2hIYW5kbGVyKGVsZW1lbnQsIGksIHN1cHBvcnRzVG91Y2gsIHN1cHBvcnRzSWVQb2ludGVyKTtcbn07XG5cbn0se1wiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOSxcIi4uL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGNscyA9IHJlcXVpcmUoJy4uL2xpYi9jbGFzcycpXG4gICwgaCA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKVxuICAsIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJylcbiAgLCB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4vdXBkYXRlLWdlb21ldHJ5Jyk7XG5cbi8vIEhhbmRsZXJzXG52YXIgY2xpY2tSYWlsSGFuZGxlciA9IHJlcXVpcmUoJy4vaGFuZGxlci9jbGljay1yYWlsJylcbiAgLCBkcmFnU2Nyb2xsYmFySGFuZGxlciA9IHJlcXVpcmUoJy4vaGFuZGxlci9kcmFnLXNjcm9sbGJhcicpXG4gICwga2V5Ym9hcmRIYW5kbGVyID0gcmVxdWlyZSgnLi9oYW5kbGVyL2tleWJvYXJkJylcbiAgLCBtb3VzZVdoZWVsSGFuZGxlciA9IHJlcXVpcmUoJy4vaGFuZGxlci9tb3VzZS13aGVlbCcpXG4gICwgbmF0aXZlU2Nyb2xsSGFuZGxlciA9IHJlcXVpcmUoJy4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsJylcbiAgLCBzZWxlY3Rpb25IYW5kbGVyID0gcmVxdWlyZSgnLi9oYW5kbGVyL3NlbGVjdGlvbicpXG4gICwgdG91Y2hIYW5kbGVyID0gcmVxdWlyZSgnLi9oYW5kbGVyL3RvdWNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHVzZXJTZXR0aW5ncykge1xuICB1c2VyU2V0dGluZ3MgPSB0eXBlb2YgdXNlclNldHRpbmdzID09PSAnb2JqZWN0JyA/IHVzZXJTZXR0aW5ncyA6IHt9O1xuXG4gIGNscy5hZGQoZWxlbWVudCwgJ3BzLWNvbnRhaW5lcicpO1xuXG4gIC8vIENyZWF0ZSBhIHBsdWdpbiBpbnN0YW5jZS5cbiAgdmFyIGkgPSBpbnN0YW5jZXMuYWRkKGVsZW1lbnQpO1xuXG4gIGkuc2V0dGluZ3MgPSBoLmV4dGVuZChpLnNldHRpbmdzLCB1c2VyU2V0dGluZ3MpO1xuICBjbHMuYWRkKGVsZW1lbnQsICdwcy10aGVtZS0nICsgaS5zZXR0aW5ncy50aGVtZSk7XG5cbiAgY2xpY2tSYWlsSGFuZGxlcihlbGVtZW50KTtcbiAgZHJhZ1Njcm9sbGJhckhhbmRsZXIoZWxlbWVudCk7XG4gIG1vdXNlV2hlZWxIYW5kbGVyKGVsZW1lbnQpO1xuICBuYXRpdmVTY3JvbGxIYW5kbGVyKGVsZW1lbnQpO1xuXG4gIGlmIChpLnNldHRpbmdzLnVzZVNlbGVjdGlvblNjcm9sbCkge1xuICAgIHNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoaC5lbnYuc3VwcG9ydHNUb3VjaCB8fCBoLmVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIHRvdWNoSGFuZGxlcihlbGVtZW50LCBoLmVudi5zdXBwb3J0c1RvdWNoLCBoLmVudi5zdXBwb3J0c0llUG9pbnRlcik7XG4gIH1cbiAgaWYgKGkuc2V0dGluZ3MudXNlS2V5Ym9hcmQpIHtcbiAgICBrZXlib2FyZEhhbmRsZXIoZWxlbWVudCk7XG4gIH1cblxuICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcbn07XG5cbn0se1wiLi4vbGliL2NsYXNzXCI6MixcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9oYW5kbGVyL2NsaWNrLXJhaWxcIjoxMCxcIi4vaGFuZGxlci9kcmFnLXNjcm9sbGJhclwiOjExLFwiLi9oYW5kbGVyL2tleWJvYXJkXCI6MTIsXCIuL2hhbmRsZXIvbW91c2Utd2hlZWxcIjoxMyxcIi4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsXCI6MTQsXCIuL2hhbmRsZXIvc2VsZWN0aW9uXCI6MTUsXCIuL2hhbmRsZXIvdG91Y2hcIjoxNixcIi4vaW5zdGFuY2VzXCI6MTgsXCIuL3VwZGF0ZS1nZW9tZXRyeVwiOjE5fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJylcbiAgLCBkID0gcmVxdWlyZSgnLi4vbGliL2RvbScpXG4gICwgZGVmYXVsdFNldHRpbmdzID0gcmVxdWlyZSgnLi9kZWZhdWx0LXNldHRpbmcnKVxuICAsIEV2ZW50TWFuYWdlciA9IHJlcXVpcmUoJy4uL2xpYi9ldmVudC1tYW5hZ2VyJylcbiAgLCBndWlkID0gcmVxdWlyZSgnLi4vbGliL2d1aWQnKVxuICAsIGggPSByZXF1aXJlKCcuLi9saWIvaGVscGVyJyk7XG5cbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuZnVuY3Rpb24gSW5zdGFuY2UoZWxlbWVudCkge1xuICB2YXIgaSA9IHRoaXM7XG5cbiAgaS5zZXR0aW5ncyA9IGguY2xvbmUoZGVmYXVsdFNldHRpbmdzKTtcbiAgaS5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIGkuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgaS5jb250ZW50V2lkdGggPSBudWxsO1xuICBpLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIGkuaXNSdGwgPSBkLmNzcyhlbGVtZW50LCAnZGlyZWN0aW9uJykgPT09IFwicnRsXCI7XG4gIGkuaXNOZWdhdGl2ZVNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMTtcbiAgICByZXN1bHQgPSBlbGVtZW50LnNjcm9sbExlZnQgPCAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IG9yaWdpbmFsU2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xuICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IGkuaXNOZWdhdGl2ZVNjcm9sbCA/IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoIDogMDtcbiAgaS5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgaS5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWZvY3VzJyk7XG4gIH1cblxuICBmdW5jdGlvbiBibHVyKCkge1xuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLWZvY3VzJyk7XG4gIH1cblxuICBpLnNjcm9sbGJhclhSYWlsID0gZC5hcHBlbmRUbyhkLmUoJ2RpdicsICdwcy1zY3JvbGxiYXIteC1yYWlsJyksIGVsZW1lbnQpO1xuICBpLnNjcm9sbGJhclggPSBkLmFwcGVuZFRvKGQuZSgnZGl2JywgJ3BzLXNjcm9sbGJhci14JyksIGkuc2Nyb2xsYmFyWFJhaWwpO1xuICBpLnNjcm9sbGJhclguc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnZm9jdXMnLCBmb2N1cyk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdibHVyJywgYmx1cik7XG4gIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IG51bGw7XG4gIGkuc2Nyb2xsYmFyWFdpZHRoID0gbnVsbDtcbiAgaS5zY3JvbGxiYXJYTGVmdCA9IG51bGw7XG4gIGkuc2Nyb2xsYmFyWEJvdHRvbSA9IGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2JvdHRvbScpKTtcbiAgaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSA9PT0gaS5zY3JvbGxiYXJYQm90dG9tOyAvLyAhaXNOYU5cbiAgaS5zY3JvbGxiYXJYVG9wID0gaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA/IG51bGwgOiBoLnRvSW50KGQuY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICd0b3AnKSk7XG4gIGkucmFpbEJvcmRlclhXaWR0aCA9IGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2JvcmRlckxlZnRXaWR0aCcpKSArIGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2JvcmRlclJpZ2h0V2lkdGgnKSk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgaS5yYWlsWE1hcmdpbldpZHRoID0gaC50b0ludChkLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnbWFyZ2luTGVmdCcpKSArIGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpblJpZ2h0JykpO1xuICBkLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnZGlzcGxheScsICcnKTtcbiAgaS5yYWlsWFdpZHRoID0gbnVsbDtcbiAgaS5yYWlsWFJhdGlvID0gbnVsbDtcblxuICBpLnNjcm9sbGJhcllSYWlsID0gZC5hcHBlbmRUbyhkLmUoJ2RpdicsICdwcy1zY3JvbGxiYXIteS1yYWlsJyksIGVsZW1lbnQpO1xuICBpLnNjcm9sbGJhclkgPSBkLmFwcGVuZFRvKGQuZSgnZGl2JywgJ3BzLXNjcm9sbGJhci15JyksIGkuc2Nyb2xsYmFyWVJhaWwpO1xuICBpLnNjcm9sbGJhclkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnZm9jdXMnLCBmb2N1cyk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdibHVyJywgYmx1cik7XG4gIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IG51bGw7XG4gIGkuc2Nyb2xsYmFyWUhlaWdodCA9IG51bGw7XG4gIGkuc2Nyb2xsYmFyWVRvcCA9IG51bGw7XG4gIGkuc2Nyb2xsYmFyWVJpZ2h0ID0gaC50b0ludChkLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAncmlnaHQnKSk7XG4gIGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCA9IGkuc2Nyb2xsYmFyWVJpZ2h0ID09PSBpLnNjcm9sbGJhcllSaWdodDsgLy8gIWlzTmFOXG4gIGkuc2Nyb2xsYmFyWUxlZnQgPSBpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPyBudWxsIDogaC50b0ludChkLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbGVmdCcpKTtcbiAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aCA9IGkuaXNSdGwgPyBoLm91dGVyV2lkdGgoaS5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIGkucmFpbEJvcmRlcllXaWR0aCA9IGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2JvcmRlclRvcFdpZHRoJykpICsgaC50b0ludChkLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnYm9yZGVyQm90dG9tV2lkdGgnKSk7XG4gIGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIGkucmFpbFlNYXJnaW5IZWlnaHQgPSBoLnRvSW50KGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Ub3AnKSkgKyBoLnRvSW50KGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Cb3R0b20nKSk7XG4gIGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJycpO1xuICBpLnJhaWxZSGVpZ2h0ID0gbnVsbDtcbiAgaS5yYWlsWVJhdGlvID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0SWQoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQuZGF0YXNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHMtaWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnBzSWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0SWQoZWxlbWVudCwgaWQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRhdGFzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHMtaWQnLCBpZCk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5kYXRhc2V0LnBzSWQgPSBpZDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVJZChlbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudC5kYXRhc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXBzLWlkJyk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldC5wc0lkO1xuICB9XG59XG5cbmV4cG9ydHMuYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIG5ld0lkID0gZ3VpZCgpO1xuICBzZXRJZChlbGVtZW50LCBuZXdJZCk7XG4gIGluc3RhbmNlc1tuZXdJZF0gPSBuZXcgSW5zdGFuY2UoZWxlbWVudCk7XG4gIHJldHVybiBpbnN0YW5jZXNbbmV3SWRdO1xufTtcblxuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBkZWxldGUgaW5zdGFuY2VzW2dldElkKGVsZW1lbnQpXTtcbiAgcmVtb3ZlSWQoZWxlbWVudCk7XG59O1xuXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiBpbnN0YW5jZXNbZ2V0SWQoZWxlbWVudCldO1xufTtcblxufSx7XCIuLi9saWIvY2xhc3NcIjoyLFwiLi4vbGliL2RvbVwiOjMsXCIuLi9saWIvZXZlbnQtbWFuYWdlclwiOjQsXCIuLi9saWIvZ3VpZFwiOjUsXCIuLi9saWIvaGVscGVyXCI6NixcIi4vZGVmYXVsdC1zZXR0aW5nXCI6OH1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGNscyA9IHJlcXVpcmUoJy4uL2xpYi9jbGFzcycpXG4gICwgZCA9IHJlcXVpcmUoJy4uL2xpYi9kb20nKVxuICAsIGggPSByZXF1aXJlKCcuLi9saWIvaGVscGVyJylcbiAgLCBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpXG4gICwgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi91cGRhdGUtc2Nyb2xsJyk7XG5cbmZ1bmN0aW9uIGdldFRodW1iU2l6ZShpLCB0aHVtYlNpemUpIHtcbiAgaWYgKGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5tYXgodGh1bWJTaXplLCBpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgaWYgKGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5taW4odGh1bWJTaXplLCBpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHRodW1iU2l6ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsZW1lbnQsIGkpIHtcbiAgdmFyIHhSYWlsT2Zmc2V0ID0ge3dpZHRoOiBpLnJhaWxYV2lkdGh9O1xuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGkuY29udGFpbmVyV2lkdGggLSBpLmNvbnRlbnRXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICB9XG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XG4gICAgeFJhaWxPZmZzZXQuYm90dG9tID0gaS5zY3JvbGxiYXJYQm90dG9tIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgZWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cbiAgZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHt0b3A6IGVsZW1lbnQuc2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHR9O1xuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5jb250ZW50V2lkdGggLSAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpIC0gaS5zY3JvbGxiYXJZUmlnaHQgLSBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuc2Nyb2xsYmFyWVJpZ2h0IC0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0ICsgaS5jb250YWluZXJXaWR0aCAqIDIgLSBpLmNvbnRlbnRXaWR0aCAtIGkuc2Nyb2xsYmFyWUxlZnQgLSBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID0gaS5zY3JvbGxiYXJZTGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1cbiAgZC5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xuXG4gIGQuY3NzKGkuc2Nyb2xsYmFyWCwge2xlZnQ6IGkuc2Nyb2xsYmFyWExlZnQsIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aH0pO1xuICBkLmNzcyhpLnNjcm9sbGJhclksIHt0b3A6IGkuc2Nyb2xsYmFyWVRvcCwgaGVpZ2h0OiBpLnNjcm9sbGJhcllIZWlnaHQgLSBpLnJhaWxCb3JkZXJZV2lkdGh9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG5cbiAgaS5jb250YWluZXJXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGkuY29udGFpbmVySGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgdmFyIGV4aXN0aW5nUmFpbHM7XG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhclhSYWlsKSkge1xuICAgIGV4aXN0aW5nUmFpbHMgPSBkLnF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgJy5wcy1zY3JvbGxiYXIteC1yYWlsJyk7XG4gICAgaWYgKGV4aXN0aW5nUmFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgZXhpc3RpbmdSYWlscy5mb3JFYWNoKGZ1bmN0aW9uIChyYWlsKSB7XG4gICAgICAgIGQucmVtb3ZlKHJhaWwpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGQuYXBwZW5kVG8oaS5zY3JvbGxiYXJYUmFpbCwgZWxlbWVudCk7XG4gIH1cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWVJhaWwpKSB7XG4gICAgZXhpc3RpbmdSYWlscyA9IGQucXVlcnlDaGlsZHJlbihlbGVtZW50LCAnLnBzLXNjcm9sbGJhci15LXJhaWwnKTtcbiAgICBpZiAoZXhpc3RpbmdSYWlscy5sZW5ndGggPiAwKSB7XG4gICAgICBleGlzdGluZ1JhaWxzLmZvckVhY2goZnVuY3Rpb24gKHJhaWwpIHtcbiAgICAgICAgZC5yZW1vdmUocmFpbCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZC5hcHBlbmRUbyhpLnNjcm9sbGJhcllSYWlsLCBlbGVtZW50KTtcbiAgfVxuXG4gIGlmICghaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgaS5jb250YWluZXJXaWR0aCArIGkuc2V0dGluZ3Muc2Nyb2xsWE1hcmdpbk9mZnNldCA8IGkuY29udGVudFdpZHRoKSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxYV2lkdGggPSBpLmNvbnRhaW5lcldpZHRoIC0gaS5yYWlsWE1hcmdpbldpZHRoO1xuICAgIGkucmFpbFhSYXRpbyA9IGkuY29udGFpbmVyV2lkdGggLyBpLnJhaWxYV2lkdGg7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoaSwgaC50b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpKTtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gaC50b0ludCgoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICogKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSAvIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiYgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHQpIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFlIZWlnaHQgPSBpLmNvbnRhaW5lckhlaWdodCAtIGkucmFpbFlNYXJnaW5IZWlnaHQ7XG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IGdldFRodW1iU2l6ZShpLCBoLnRvSW50KGkucmFpbFlIZWlnaHQgKiBpLmNvbnRhaW5lckhlaWdodCAvIGkuY29udGVudEhlaWdodCkpO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGgudG9JbnQoZWxlbWVudC5zY3JvbGxUb3AgKiAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkgLyAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpLnNjcm9sbGJhclhMZWZ0ID49IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSB7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllUb3AgPj0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkge1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQ7XG4gIH1cblxuICB1cGRhdGVDc3MoZWxlbWVudCwgaSk7XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWFjdGl2ZS14Jyk7XG4gIH0gZWxzZSB7XG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtYWN0aXZlLXgnKTtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IDA7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgMCk7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWFjdGl2ZS15Jyk7XG4gIH0gZWxzZSB7XG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtYWN0aXZlLXknKTtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSAwO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCAwKTtcbiAgfVxufTtcblxufSx7XCIuLi9saWIvY2xhc3NcIjoyLFwiLi4vbGliL2RvbVwiOjMsXCIuLi9saWIvaGVscGVyXCI6NixcIi4vaW5zdGFuY2VzXCI6MTgsXCIuL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJyk7XG5cbnZhciB1cEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JylcbiAgLCBkb3duRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAsIGxlZnRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG4gICwgcmlnaHRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG4gICwgeUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JylcbiAgLCB4RXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAsIHhTdGFydEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JylcbiAgLCB4RW5kRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAsIHlTdGFydEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JylcbiAgLCB5RW5kRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAsIGxhc3RUb3BcbiAgLCBsYXN0TGVmdDtcblxudXBFdmVudC5pbml0RXZlbnQoJ3BzLXNjcm9sbC11cCcsIHRydWUsIHRydWUpO1xuZG93bkV2ZW50LmluaXRFdmVudCgncHMtc2Nyb2xsLWRvd24nLCB0cnVlLCB0cnVlKTtcbmxlZnRFdmVudC5pbml0RXZlbnQoJ3BzLXNjcm9sbC1sZWZ0JywgdHJ1ZSwgdHJ1ZSk7XG5yaWdodEV2ZW50LmluaXRFdmVudCgncHMtc2Nyb2xsLXJpZ2h0JywgdHJ1ZSwgdHJ1ZSk7XG55RXZlbnQuaW5pdEV2ZW50KCdwcy1zY3JvbGwteScsIHRydWUsIHRydWUpO1xueEV2ZW50LmluaXRFdmVudCgncHMtc2Nyb2xsLXgnLCB0cnVlLCB0cnVlKTtcbnhTdGFydEV2ZW50LmluaXRFdmVudCgncHMteC1yZWFjaC1zdGFydCcsIHRydWUsIHRydWUpO1xueEVuZEV2ZW50LmluaXRFdmVudCgncHMteC1yZWFjaC1lbmQnLCB0cnVlLCB0cnVlKTtcbnlTdGFydEV2ZW50LmluaXRFdmVudCgncHMteS1yZWFjaC1zdGFydCcsIHRydWUsIHRydWUpO1xueUVuZEV2ZW50LmluaXRFdmVudCgncHMteS1yZWFjaC1lbmQnLCB0cnVlLCB0cnVlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcywgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGFuIGVsZW1lbnQgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGFuIGF4aXMgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyAnWW91IG11c3QgcHJvdmlkZSBhIHZhbHVlIHRvIHRoZSB1cGRhdGUtc2Nyb2xsIGZ1bmN0aW9uJztcbiAgfVxuXG4gIGlmIChheGlzID09PSAndG9wJyAmJiB2YWx1ZSA8PSAwKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZSA9IDA7IC8vIGRvbid0IGFsbG93IG5lZ2F0aXZlIHNjcm9sbFxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh5U3RhcnRFdmVudCk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ2xlZnQnICYmIHZhbHVlIDw9IDApIHtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWx1ZSA9IDA7IC8vIGRvbid0IGFsbG93IG5lZ2F0aXZlIHNjcm9sbFxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh4U3RhcnRFdmVudCk7XG4gIH1cblxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG5cbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZSA9IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0OyAvLyBkb24ndCBhbGxvdyBzY3JvbGwgcGFzdCBjb250YWluZXJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoeUVuZEV2ZW50KTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPj0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSB7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWUgPSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGg7IC8vIGRvbid0IGFsbG93IHNjcm9sbCBwYXN0IGNvbnRhaW5lclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh4RW5kRXZlbnQpO1xuICB9XG5cbiAgaWYgKCFsYXN0VG9wKSB7XG4gICAgbGFzdFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgaWYgKCFsYXN0TGVmdCkge1xuICAgIGxhc3RMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlIDwgbGFzdFRvcCkge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudCh1cEV2ZW50KTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAndG9wJyAmJiB2YWx1ZSA+IGxhc3RUb3ApIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZG93bkV2ZW50KTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPCBsYXN0TGVmdCkge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChsZWZ0RXZlbnQpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA+IGxhc3RMZWZ0KSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHJpZ2h0RXZlbnQpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBsYXN0VG9wID0gdmFsdWU7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHlFdmVudCk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ2xlZnQnKSB7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gbGFzdExlZnQgPSB2YWx1ZTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoeEV2ZW50KTtcbiAgfVxuXG59O1xuXG59LHtcIi4vaW5zdGFuY2VzXCI6MTh9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBkID0gcmVxdWlyZSgnLi4vbGliL2RvbScpXG4gICwgaCA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKVxuICAsIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJylcbiAgLCB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4vdXBkYXRlLWdlb21ldHJ5JylcbiAgLCB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuL3VwZGF0ZS1zY3JvbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XG5cbiAgaWYgKCFpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcbiAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSBpLmlzTmVnYXRpdmVTY3JvbGwgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCA6IDA7XG5cbiAgLy8gUmVjYWxjdWxhdGUgcmFpbCBtYXJnaW5zXG4gIGQuY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIGkucmFpbFhNYXJnaW5XaWR0aCA9IGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ21hcmdpbkxlZnQnKSkgKyBoLnRvSW50KGQuY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5SaWdodCcpKTtcbiAgaS5yYWlsWU1hcmdpbkhlaWdodCA9IGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ21hcmdpblRvcCcpKSArIGgudG9JbnQoZC5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ21hcmdpbkJvdHRvbScpKTtcblxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XG4gIGQuY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgZC5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG4gIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xuXG4gIC8vIFVwZGF0ZSB0b3AvbGVmdCBzY3JvbGwgdG8gdHJpZ2dlciBldmVudHNcbiAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCk7XG4gIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCk7XG5cbiAgZC5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnJyk7XG4gIGQuY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJycpO1xufTtcblxufSx7XCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9pbnN0YW5jZXNcIjoxOCxcIi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuL3VwZGF0ZS1zY3JvbGxcIjoyMH1dfSx7fSxbMV0pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItcHNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXBzLmpzXCIsXG5cdFwiLi9hci1wcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItcHMuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3Uta21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS1rbXIuanNcIixcblx0XCIuL2t1LWttci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3Uta21yLmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImRlZmluZSIsImFtZCIsImpRdWVyeSIsImZuIiwic3BhcmtsaW5lIiwiZCIsImUiLCJmIiwiZyIsImgiLCJpIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJjb21tb24iLCJ0eXBlIiwibGluZUNvbG9yIiwiZmlsbENvbG9yIiwiZGVmYXVsdFBpeGVsc1BlclZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJjb21wb3NpdGUiLCJ0YWdWYWx1ZXNBdHRyaWJ1dGUiLCJ0YWdPcHRpb25zUHJlZml4IiwiZW5hYmxlVGFnT3B0aW9ucyIsImVuYWJsZUhpZ2hsaWdodCIsImhpZ2hsaWdodExpZ2h0ZW4iLCJ0b29sdGlwU2tpcE51bGwiLCJ0b29sdGlwUHJlZml4IiwidG9vbHRpcFN1ZmZpeCIsImRpc2FibGVIaWRkZW5DaGVjayIsIm51bWJlckZvcm1hdHRlciIsIm51bWJlckRpZ2l0R3JvdXBDb3VudCIsIm51bWJlckRpZ2l0R3JvdXBTZXAiLCJudW1iZXJEZWNpbWFsTWFyayIsImRpc2FibGVUb29sdGlwcyIsImRpc2FibGVJbnRlcmFjdGlvbiIsImxpbmUiLCJzcG90Q29sb3IiLCJoaWdobGlnaHRTcG90Q29sb3IiLCJoaWdobGlnaHRMaW5lQ29sb3IiLCJzcG90UmFkaXVzIiwibWluU3BvdENvbG9yIiwibWF4U3BvdENvbG9yIiwibGluZVdpZHRoIiwibm9ybWFsUmFuZ2VNaW4iLCJub3JtYWxSYW5nZU1heCIsIm5vcm1hbFJhbmdlQ29sb3IiLCJkcmF3Tm9ybWFsT25Ub3AiLCJjaGFydFJhbmdlTWluIiwiY2hhcnRSYW5nZU1heCIsImNoYXJ0UmFuZ2VNaW5YIiwiY2hhcnRSYW5nZU1heFgiLCJ0b29sdGlwRm9ybWF0IiwiYmFyIiwiYmFyQ29sb3IiLCJuZWdCYXJDb2xvciIsInN0YWNrZWRCYXJDb2xvciIsInplcm9Db2xvciIsIm51bGxDb2xvciIsInplcm9BeGlzIiwiYmFyV2lkdGgiLCJiYXJTcGFjaW5nIiwiY2hhcnRSYW5nZUNsaXAiLCJjb2xvck1hcCIsInRyaXN0YXRlIiwicG9zQmFyQ29sb3IiLCJ6ZXJvQmFyQ29sb3IiLCJ0b29sdGlwVmFsdWVMb29rdXBzIiwibWFwIiwiZGlzY3JldGUiLCJsaW5lSGVpZ2h0IiwidGhyZXNob2xkQ29sb3IiLCJ0aHJlc2hvbGRWYWx1ZSIsImJ1bGxldCIsInRhcmdldENvbG9yIiwidGFyZ2V0V2lkdGgiLCJwZXJmb3JtYW5jZUNvbG9yIiwicmFuZ2VDb2xvcnMiLCJiYXNlIiwiZmllbGRzIiwicGllIiwib2Zmc2V0Iiwic2xpY2VDb2xvcnMiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYm94IiwicmF3IiwiYm94TGluZUNvbG9yIiwiYm94RmlsbENvbG9yIiwid2hpc2tlckNvbG9yIiwib3V0bGllckxpbmVDb2xvciIsIm91dGxpZXJGaWxsQ29sb3IiLCJtZWRpYW5Db2xvciIsInNob3dPdXRsaWVycyIsIm91dGxpZXJJUVIiLCJ0YXJnZXQiLCJ0b29sdGlwRm9ybWF0RmllbGRsaXN0S2V5IiwibHEiLCJtZWQiLCJ1cSIsImxvIiwicm8iLCJsdyIsInJ3IiwiaW5pdCIsImFwcGx5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiZXh0ZW5kIiwiX3N1cGVyIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJ1bnNoaWZ0IiwiY2xzIiwiU1BGb3JtYXRDbGFzcyIsImZyZSIsInByZWNyZSIsImZvcm1hdCIsImZjbGFzcyIsInJlbmRlciIsInJlcGxhY2UiLCJleGVjIiwiZ2V0Iiwic3Bmb3JtYXQiLCJmbG9vciIsInBhcnNlRmxvYXQiLCJwdXNoIiwiaXNOYU4iLCJpc0Zpbml0ZSIsInRvU3RyaW5nIiwidG9GaXhlZCIsInNwbGl0IiwiaW5BcnJheSIsInNwbGljZSIsImpvaW4iLCJpc0FycmF5IiwiY3JlYXRlU3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJzdHlsZSIsIldlYmtpdEFwcGVhcmFuY2UiLCJzaW1wbGVkcmF3IiwiZGF0YSIsImNhbnZhcyIsImdldENvbnRleHQiLCJuYW1lc3BhY2VzIiwiYWRkIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVnaXN0ZXJDYW52YXMiLCJjbGVhcmRyYXciLCJyZXNldCIsIlJhbmdlTWFwQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJJbmZpbml0eSIsInJhbmdlbGlzdCIsInJhbmdlX21hcCIsIiRlbCIsIm9wdGlvbnMiLCJjdXJyZW50UGFnZVgiLCJjdXJyZW50UGFnZVkiLCJlbCIsInNwbGlzdCIsInRvb2x0aXAiLCJvdmVyIiwiZGlzcGxheVRvb2x0aXBzIiwiaGlnaGxpZ2h0RW5hYmxlZCIsInJlZ2lzdGVyU3BhcmtsaW5lIiwidXBkYXRlRGlzcGxheSIsIiRjYW52YXMiLCJtb3VzZWVudGVyIiwicHJveHkiLCJtb3VzZWxlYXZlIiwiY2xpY2siLCJtb3VzZWNsaWNrIiwicmVtb3ZlIiwiRXZlbnQiLCJvcmlnaW5hbEV2ZW50Iiwic3BhcmtsaW5lcyIsInRyaWdnZXIiLCJ1bmJpbmQiLCJiaW5kIiwibW91c2Vtb3ZlIiwicGFnZVgiLCJwYWdlWSIsImN1cnJlbnRFbCIsInVwZGF0ZVBvc2l0aW9uIiwiY2xlYXJSZWdpb25IaWdobGlnaHQiLCJsZWZ0IiwidG9wIiwic2V0UmVnaW9uSGlnaGxpZ2h0IiwiZ2V0Q3VycmVudFJlZ2lvblRvb2x0aXAiLCJzZXRDb250ZW50IiwiZGlzYWJsZUhpZ2hsaWdodCIsInNpemVTdHlsZSIsImNvbnRhaW5lciIsInRvb2x0aXBPZmZzZXRYIiwidG9vbHRpcE9mZnNldFkiLCJzaXpldGlwIiwiaWQiLCJhcHBlbmRUbyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJoaWRkZW4iLCJ3aW5kb3ciLCJ1cGRhdGVXaW5kb3dEaW1zIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbFJpZ2h0IiwiZ2V0U2l6ZSIsImh0bWwiLCJjc3MiLCJ2aXNpYmlsaXR5IiwibW91c2V4IiwibW91c2V5IiwiZWFjaCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFsZXJ0IiwiaXMiLCJwYXJlbnRzIiwiZGVmYXVsdHMiLCJzcGFya2xpbmVfZGlzcGxheV92aXNpYmxlIiwiY2xvc2VzdCIsInVzZXJPcHRpb25zIiwidGFnIiwidGFnVmFsQ2FjaGUiLCJnZXRUYWdTZXR0aW5nIiwibWVyZ2VkT3B0aW9ucyIsImtleSIsInN1YnN0ciIsIl9iYXNlIiwiZGlzYWJsZWQiLCJ2YWx1ZXMiLCJjdXJyZW50UmVnaW9uIiwiaW5pdFRhcmdldCIsImNhbnZhc1dpZHRoIiwicGl4ZWxXaWR0aCIsImNhbnZhc0hlaWdodCIsInBpeGVsSGVpZ2h0IiwiZ2V0UmVnaW9uIiwicmVtb3ZlSGlnaGxpZ2h0IiwicmVuZGVySGlnaGxpZ2h0IiwiY2hhbmdlSGlnaGxpZ2h0IiwiZ2V0Q3VycmVudFJlZ2lvbkZpZWxkcyIsImlzTnVsbCIsInByZWZpeCIsInN1ZmZpeCIsImNhbGNIaWdobGlnaHRDb2xvciIsInJvdW5kIiwicGFyc2VJbnQiLCJyZWdpb25TaGFwZXMiLCJyZW5kZXJSZWdpb24iLCJyZXBsYWNlV2l0aFNoYXBlcyIsInJlcGxhY2VXaXRoU2hhcGUiLCJhcHBlbmQiLCJ2ZXJ0aWNlcyIsInJlZ2lvbk1hcCIsInh2YWx1ZXMiLCJ5dmFsdWVzIiwieW1pbm1heCIsImhpZ2h0bGlnaHRTcG90SWQiLCJsYXN0U2hhcGVJZCIsImNvbG9yIiwiZHJhd0NpcmNsZSIsImhpZ2hsaWdodFNwb3RJZCIsImluc2VydEFmdGVyU2hhcGUiLCJkcmF3TGluZSIsImNhbnZhc1RvcCIsImhpZ2hsaWdodExpbmVJZCIsInJlbW92ZVNoYXBlSWQiLCJzY2FuVmFsdWVzIiwiX3R5cGVvZiIsIk51bWJlciIsIm1heHkiLCJtYXh5b3JnIiwibWF4IiwibWlueSIsIm1pbnlvcmciLCJtaW4iLCJtYXh4IiwibWlueCIsInByb2Nlc3NSYW5nZU9wdGlvbnMiLCJkcmF3Tm9ybWFsUmFuZ2UiLCJkcmF3UmVjdCIsImNlaWwiLCJwb3AiLCJkcmF3U2hhcGUiLCJnZXRMYXN0U2hhcGVJZCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsInN0YWNrZWQiLCJ0b3RhbEJhcldpZHRoIiwiUyIsIlQiLCJhYnMiLCJzdGFja01heCIsInN0YWNrTWluIiwieGF4aXNPZmZzZXQiLCJjYW52YXNIZWlnaHRFZiIsInlvZmZzZXQiLCJjb2xvck1hcEJ5SW5kZXgiLCJjb2xvck1hcEJ5VmFsdWUiLCJyYW5nZSIsInZhbHVlIiwiY2FsY0NvbG9yIiwiaW50ZXJ2YWwiLCJpdGVtV2lkdGgiLCJzaGFwZXMiLCJ2YWx1ZVNoYXBlcyIsInJlZ2lvbmRhdGEiLCJnZXRTaGFwZUF0IiwiZmllbGRrZXkiLCJyZWdpb24iLCJyZW5kZXJSYW5nZSIsInJlbmRlclBlcmZvcm1hbmNlIiwicmVuZGVyVGFyZ2V0IiwicDEiLCJ0MCIsInRvdGFsIiwicmFkaXVzIiwicGVyY2VudCIsInJlbmRlclNsaWNlIiwiUEkiLCJkcmF3UGllU2xpY2UiLCJmaWVsZCIsInF1YXJ0aWxlcyIsImxvdXRsaWVyIiwicm91dGxpZXIiLCJsd2hpc2tlciIsInJ3aGlza2VyIiwic29ydCIsImFyZ3MiLCJhcHBlbmRTaGFwZSIsIl9weHJlZ2V4IiwiX2dlblNoYXBlIiwiZ2V0RWxlbWVudCIsIl9pbnNlcnQiLCJfY2FsY3VsYXRlUGl4ZWxEaW1zIiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJpbnRlcmFjdCIsInNoYXBlc2VxIiwiY3VycmVudFRhcmdldFNoYXBlSWQiLCJfZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiY2xlYXJSZWN0IiwiX2RyYXdTaGFwZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZpbGwiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImlzUG9pbnRJblBhdGgiLCJfZHJhd0NpcmNsZSIsImFyYyIsIl9kcmF3UGllU2xpY2UiLCJjbG9zZVBhdGgiLCJfZHJhd1JlY3QiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwibWFyZ2luIiwicGFkZGluZyIsImluc2VydEFkamFjZW50SFRNTCIsImdyb3VwIiwiY2hpbGRyZW4iLCJyZW5kZXJlZCIsInByZXJlbmRlciIsImNvcyIsInNpbiIsIm91dGVySFRNTCIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnQiLCJNYXRoIiwiJCIsIkFkbWluU2V0dGluZ3MiLCJzZXR0aW5ncyIsIm15aWQiLCJhdHRyIiwiZGVmYXVsdFNpZGViYXJUeXBlIiwiQ29va2llcyIsIlNpZGViYXJUeXBlIiwiVGhlbWUiLCJMYXlvdXQiLCJMb2dvQmciLCJOYXZiYXJCZyIsIlNpZGViYXJDb2xvciIsIlNpZGViYXJQb3NpdGlvbiIsIkhlYWRlclBvc2l0aW9uIiwiQm94ZWRMYXlvdXQiLCJBZG1pblNldHRpbmdzSW5pdCIsIk1hbmFnZVRoZW1lIiwiTWFuYWdlVGhlbWVMYXlvdXQiLCJNYW5hZ2VUaGVtZUJhY2tncm91bmQiLCJNYW5hZ2VTaWRlYmFyVHlwZSIsIk1hbmFnZVNpZGViYXJDb2xvciIsIk1hbmFnZVNpZGViYXJQb3NpdGlvbiIsIk1hbmFnZUJveGVkTGF5b3V0IiwidGhlbWV2aWV3IiwicHJvcCIsInBlcmZlY3RTY3JvbGxiYXIiLCJzZXRsb2dvYmciLCJsYmciLCJ1bmRlZmluZWQiLCJzZXRuYXZiYXJiZyIsIm5iZyIsInNldHNpZGViYXJ0eXBlIiwic2NyZWVuIiwiYWRkQ2xhc3MiLCJzZXQiLCJyZW1vdmVDbGFzcyIsInJlYWR5Iiwib24iLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwic2V0c2lkZWJhcmJnIiwic2JnIiwic2lkZWJhcnBvc2l0aW9uIiwiaGVhZGVycG9zaXRpb24iLCJib3hlZGxheW91dCIsImNoYXRhcmVhIiwibmFtZSIsImZpbmQiLCJ0ZXh0IiwiaW1nIiwic3RhdHVzIiwiaGlkZSIsInNob3ciLCJtc2ciLCJtc2dfcmVjZWl2ZSIsIm1zZ19zZW50Iiwia2V5Q29kZSIsInZhbCIsImZvY3VzIiwic3VwcHJlc3NTY3JvbGxYIiwiRGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImJvb3RzdHJhcER1YWxMaXN0Ym94Iiwibm9uU2VsZWN0ZWRMaXN0TGFiZWwiLCJzZWxlY3RlZExpc3RMYWJlbCIsInByZXNlcnZlU2VsZWN0aW9uT25Nb3ZlIiwibW92ZU9uU2VsZWN0Iiwic2hvd0ZpbHRlcklucHV0cyIsImluZm9UZXh0IiwicmVxdWlyZSIsImdsb2JhbCIsIm1vbWVudCIsIkRyb3B6b25lIiwiZmFkZU91dCIsImhvdmVyIiwidG9nZ2xlIiwicG9wb3ZlciIsIndoZWVsUHJvcGFnYXRpb24iLCJkZWxheSIsInByZXZlbnREZWZhdWx0IiwiY29sbGFwc2UiLCJzbGlkZVVwIiwic3RvcFByb3BhZ2F0aW9uIiwic3BhcmtsaW5lTG9naW4iLCJyZXNpemUiLCJzcGFya1Jlc2l6ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJkYXRldGltZXBpY2tlciIsImljb25zIiwidGltZSIsImRhdGUiLCJ1cCIsImRvd24iLCJwcmV2aW91cyIsIm5leHQiLCJ0b2RheSIsImNsZWFyIiwiY2xvc2UiLCJkYXRlVGltZVBpY2tlckNvbmZpZ1dpdGhEYXkiLCJsb2NhbGUiLCJjb25zb2xlIiwibG9nIiwidGFibGUiLCJEYXRhVGFibGUiLCJmaXhlZEhlYWRlciIsImRpc2FibGUiLCJzY3JvbGwiLCJ3aW5kb3dfd2lkdGgiLCJuYXZfYmFyX2NoaWxkZXIiLCJuYXZfYmFyX3dpZHRoIiwiYXV0b0Rpc2NvdmVyIiwiZHJvcHpvbmVPcmRlclVwbG9hZCIsIkRyb3B6b25lT3B0aW9ucyIsInByb2Nlc3NRdWV1ZSIsInVybCIsImxvY2F0aW9uIiwicGF0aCIsInByb3RvY29sIiwiaG9zdCIsImVsZW1lbnQiLCJmaWx0ZXIiLCJocmVmIiwicGFyZW50c1VudGlsIiwiaW5kZXgiLCJwYXJlbnQiLCJub2RlVHlwZSIsImRlZmF1bHRWaWV3Iiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwiYWxsb3dFdmVudCIsInNyY0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiU1ZHRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkdXJhdGlvbiIsImJ1dHRvbiIsImNsaWVudFdpZHRoIiwidG91Y2hlcyIsInNldEF0dHJpYnV0ZSIsIm5vdyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0b3VjaHVwIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndyYXBJbnB1dCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudE5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXBsYWNlQ2hpbGQiLCJkaXNwbGF5RWZmZWN0IiwiYXR0YWNoIiwiV2F2ZXMiLCJFcnJvciIsImNvZGUiLCJleHBvcnRzIiwibW9kdWxlIiwicHMiLCJwc0luc3RhbmNlcyIsIm1vdW50SlF1ZXJ5Iiwic2V0dGluZ09yQ29tbWFuZCIsImluaXRpYWxpemUiLCJjb21tYW5kIiwidXBkYXRlIiwiZGVzdHJveSIsImpxIiwib2xkQWRkIiwiY2xhc3NlcyIsIm9sZFJlbW92ZSIsImlkeCIsImxpc3QiLCJET00iLCJjaGlsZCIsImNzc0dldCIsInN0eWxlTmFtZSIsImdldENvbXB1dGVkU3R5bGUiLCJjc3NTZXQiLCJzdHlsZVZhbHVlIiwiY3NzTXVsdGlTZXQiLCJvYmoiLCJzdHlsZU5hbWVPck9iamVjdCIsIm1hdGNoZXMiLCJxdWVyeSIsIm1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwicXVlcnlDaGlsZHJlbiIsInNlbGVjdG9yIiwiY2hpbGROb2RlcyIsIkV2ZW50RWxlbWVudCIsImV2ZW50cyIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJpc0hhbmRsZXJQcm92aWRlZCIsImhkbHIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidW5iaW5kQWxsIiwiRXZlbnRNYW5hZ2VyIiwiZXZlbnRFbGVtZW50cyIsImV2ZW50RWxlbWVudCIsImVlIiwib25jZSIsIm9uY2VIYW5kbGVyIiwiczQiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJ0b0ludCIsImNsb25lIiwicmVzdWx0Iiwib3JpZ2luYWwiLCJzb3VyY2UiLCJpc0VkaXRhYmxlIiwicmVtb3ZlUHNDbGFzc2VzIiwiY2xzTGlzdCIsIm91dGVyV2lkdGgiLCJzdGFydFNjcm9sbGluZyIsImF4aXMiLCJzdG9wU2Nyb2xsaW5nIiwiZW52IiwiaXNXZWJLaXQiLCJzdXBwb3J0c1RvdWNoIiwiRG9jdW1lbnRUb3VjaCIsInN1cHBvcnRzSWVQb2ludGVyIiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsIm1heFNjcm9sbGJhckxlbmd0aCIsIm1pblNjcm9sbGJhckxlbmd0aCIsInNjcm9sbFhNYXJnaW5PZmZzZXQiLCJzY3JvbGxZTWFyZ2luT2Zmc2V0Iiwic3RvcFByb3BhZ2F0aW9uT25DbGljayIsInN1cHByZXNzU2Nyb2xsWSIsInN3aXBlUHJvcGFnYXRpb24iLCJ1c2VCb3RoV2hlZWxBeGVzIiwidXNlS2V5Ym9hcmQiLCJ1c2VTZWxlY3Rpb25TY3JvbGwiLCJ3aGVlbFNwZWVkIiwidGhlbWUiLCJpbnN0YW5jZXMiLCJldmVudCIsInNjcm9sbGJhclgiLCJzY3JvbGxiYXJZIiwic2Nyb2xsYmFyWFJhaWwiLCJzY3JvbGxiYXJZUmFpbCIsInVwZGF0ZUdlb21ldHJ5IiwidXBkYXRlU2Nyb2xsIiwiYmluZENsaWNrUmFpbEhhbmRsZXIiLCJwYWdlT2Zmc2V0IiwiaGFsZk9mU2Nyb2xsYmFyTGVuZ3RoIiwic2Nyb2xsYmFyWUhlaWdodCIsInBvc2l0aW9uVG9wIiwicmFpbFlSYXRpbyIsIm1heFBvc2l0aW9uVG9wIiwicmFpbFlIZWlnaHQiLCJwb3NpdGlvblJhdGlvIiwiY29udGVudEhlaWdodCIsImNvbnRhaW5lckhlaWdodCIsInNjcm9sbGJhclhXaWR0aCIsInBvc2l0aW9uTGVmdCIsInJhaWxYUmF0aW8iLCJtYXhQb3NpdGlvbkxlZnQiLCJyYWlsWFdpZHRoIiwiY29udGVudFdpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJuZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQiLCJiaW5kTW91c2VTY3JvbGxYSGFuZGxlciIsImN1cnJlbnRMZWZ0IiwidXBkYXRlU2Nyb2xsTGVmdCIsImRlbHRhWCIsIm5ld0xlZnQiLCJtYXhMZWZ0Iiwic2Nyb2xsYmFyWExlZnQiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJiaW5kTW91c2VTY3JvbGxZSGFuZGxlciIsImN1cnJlbnRUb3AiLCJ1cGRhdGVTY3JvbGxUb3AiLCJkZWx0YVkiLCJuZXdUb3AiLCJtYXhUb3AiLCJzY3JvbGxiYXJZVG9wIiwiYmluZEtleWJvYXJkSGFuZGxlciIsImhvdmVyZWQiLCJzaG91bGRQcmV2ZW50Iiwic2hvdWxkUHJldmVudERlZmF1bHQiLCJzY3JvbGxiYXJZQWN0aXZlIiwic2Nyb2xsYmFyWEFjdGl2ZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImZvY3VzZWQiLCJhY3RpdmVFbGVtZW50Iiwic2hhZG93Um9vdCIsIndoaWNoIiwic2hpZnRLZXkiLCJjdHJsS2V5IiwiYmluZE1vdXNlV2hlZWxIYW5kbGVyIiwiZ2V0RGVsdGFGcm9tRXZlbnQiLCJ3aGVlbERlbHRhWCIsIndoZWVsRGVsdGFZIiwiZGVsdGFNb2RlIiwid2hlZWxEZWx0YSIsInNob3VsZEJlQ29uc3VtZWRCeVRleHRhcmVhIiwiaG92ZXJlZFRleHRhcmVhIiwicXVlcnlTZWxlY3RvciIsIm1heFNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heFNjcm9sbExlZnQiLCJtb3VzZXdoZWVsSGFuZGxlciIsImRlbHRhIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsImJpbmROYXRpdmVTY3JvbGxIYW5kbGVyIiwiYmluZFNlbGVjdGlvbkhhbmRsZXIiLCJnZXRSYW5nZU5vZGUiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0IiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJzY3JvbGxpbmdMb29wIiwic2Nyb2xsRGlmZiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlzU2VsZWN0ZWQiLCJtb3VzZVBvc2l0aW9uIiwiY29udGFpbmVyR2VvbWV0cnkiLCJyaWdodCIsIm9mZnNldFdpZHRoIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiYmluZFRvdWNoSGFuZGxlciIsIm1hZ25pdHVkZVgiLCJtYWduaXR1ZGVZIiwiYXBwbHlUb3VjaE1vdmUiLCJkaWZmZXJlbmNlWCIsImRpZmZlcmVuY2VZIiwic3RhcnRPZmZzZXQiLCJzdGFydFRpbWUiLCJzcGVlZCIsImVhc2luZ0xvb3AiLCJpbkdsb2JhbFRvdWNoIiwiaW5Mb2NhbFRvdWNoIiwiZ2xvYmFsVG91Y2hTdGFydCIsImdsb2JhbFRvdWNoRW5kIiwiZ2V0VG91Y2giLCJ0YXJnZXRUb3VjaGVzIiwic2hvdWxkSGFuZGxlIiwicG9pbnRlclR5cGUiLCJNU1BPSU5URVJfVFlQRV9NT1VTRSIsInRvdWNoU3RhcnQiLCJ0b3VjaCIsImdldFRpbWUiLCJ0b3VjaE1vdmUiLCJjdXJyZW50T2Zmc2V0IiwiY3VycmVudFRpbWUiLCJ0aW1lR2FwIiwidG91Y2hFbmQiLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsImNsaWNrUmFpbEhhbmRsZXIiLCJkcmFnU2Nyb2xsYmFySGFuZGxlciIsImtleWJvYXJkSGFuZGxlciIsIm1vdXNlV2hlZWxIYW5kbGVyIiwibmF0aXZlU2Nyb2xsSGFuZGxlciIsInNlbGVjdGlvbkhhbmRsZXIiLCJ0b3VjaEhhbmRsZXIiLCJ1c2VyU2V0dGluZ3MiLCJkZWZhdWx0U2V0dGluZ3MiLCJndWlkIiwiSW5zdGFuY2UiLCJpc1J0bCIsImlzTmVnYXRpdmVTY3JvbGwiLCJvcmlnaW5hbFNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsImJsdXIiLCJzY3JvbGxiYXJYQm90dG9tIiwiaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20iLCJzY3JvbGxiYXJYVG9wIiwicmFpbEJvcmRlclhXaWR0aCIsInJhaWxYTWFyZ2luV2lkdGgiLCJzY3JvbGxiYXJZUmlnaHQiLCJpc1Njcm9sbGJhcllVc2luZ1JpZ2h0Iiwic2Nyb2xsYmFyWUxlZnQiLCJzY3JvbGxiYXJZT3V0ZXJXaWR0aCIsInJhaWxCb3JkZXJZV2lkdGgiLCJyYWlsWU1hcmdpbkhlaWdodCIsImdldElkIiwiZGF0YXNldCIsInBzSWQiLCJzZXRJZCIsInJlbW92ZUlkIiwibmV3SWQiLCJnZXRUaHVtYlNpemUiLCJ0aHVtYlNpemUiLCJ1cGRhdGVDc3MiLCJ4UmFpbE9mZnNldCIsInlSYWlsT2Zmc2V0IiwiZXhpc3RpbmdSYWlscyIsImZvckVhY2giLCJyYWlsIiwidXBFdmVudCIsImNyZWF0ZUV2ZW50IiwiZG93bkV2ZW50IiwibGVmdEV2ZW50IiwicmlnaHRFdmVudCIsInlFdmVudCIsInhFdmVudCIsInhTdGFydEV2ZW50IiwieEVuZEV2ZW50IiwieVN0YXJ0RXZlbnQiLCJ5RW5kRXZlbnQiLCJsYXN0VG9wIiwibGFzdExlZnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==