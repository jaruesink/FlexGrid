/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap-setclasses !*/
!function (e, n, t) {
  function r(e, n) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === n;
  }function o() {
    var e, n, t, o, s, i, a;for (var l in x) {
      if (x.hasOwnProperty(l)) {
        if (e = [], n = x[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) {
          i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), g.push((o ? "" : "no-") + a.join("-"));
        }
      }
    }
  }function s(e) {
    var n = w.className,
        t = Modernizr._config.classPrefix || "";if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
    }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? w.className.baseVal = n : w.className = n);
  }function i(e, n) {
    return !!~("" + e).indexOf(n);
  }function a() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }function u(e, n, t) {
    var o;for (var s in e) {
      if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? f(o, t || n) : o);
    }return !1;
  }function d(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function p() {
    var e = n.body;return e || (e = a(_ ? "svg" : "body"), e.fake = !0), e;
  }function c(e, t, r, o) {
    var s,
        i,
        l,
        f,
        u = "modernizr",
        d = a("div"),
        c = p();if (parseInt(r, 10)) for (; r--;) {
      l = a("div"), l.id = o ? o[r] : u + (r + 1), d.appendChild(l);
    }return s = a("style"), s.type = "text/css", s.id = "s" + u, (c.fake ? c : d).appendChild(s), c.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", f = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), i = t(d, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = f, w.offsetHeight) : d.parentNode.removeChild(d), !!i;
  }function m(n, r) {
    var o = n.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(d(n[o]), r)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) {
        s.push("(" + d(n[o]) + ":" + r + ")");
      }return s = s.join(" or "), c("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }return t;
  }function h(e, n, o, s) {
    function f() {
      d && (delete P.style, delete P.modElem);
    }if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
      var u = m(e, o);if (!r(u, "undefined")) return u;
    }for (var d, p, c, h, v, y = ["modernizr", "tspan", "samp"]; !P.style && y.length;) {
      d = !0, P.modElem = a(y.shift()), P.style = P.modElem.style;
    }for (c = e.length, p = 0; c > p; p++) {
      if (h = e[p], v = P.style[h], i(h, "-") && (h = l(h)), P.style[h] !== t) {
        if (s || r(o, "undefined")) return f(), "pfx" == n ? h : !0;try {
          P.style[h] = o;
        } catch (g) {}if (P.style[h] != v) return f(), "pfx" == n ? h : !0;
      }
    }return f(), !1;
  }function v(e, n, t, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + S.join(i + " ") + i).split(" ");return r(n, "string") || r(n, "undefined") ? h(a, n, o, s) : (a = (e + " " + T.join(i + " ") + i).split(" "), u(a, n, t));
  }function y(e, n, r) {
    return v(e, t, t, n, r);
  }var g = [],
      x = [],
      C = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, n) {
      var t = this;setTimeout(function () {
        n(t[e]);
      }, 0);
    }, addTest: function addTest(e, n, t) {
      x.push({ name: e, fn: n, options: t });
    }, addAsyncTest: function addAsyncTest(e) {
      x.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = C, Modernizr = new Modernizr();var w = n.documentElement,
      _ = "svg" === w.nodeName.toLowerCase(),
      b = "Moz O ms Webkit",
      S = C._config.usePrefixes ? b.split(" ") : [];C._cssomPrefixes = S;var T = C._config.usePrefixes ? b.toLowerCase().split(" ") : [];C._domPrefixes = T;var E = { elem: a("modernizr") };Modernizr._q.push(function () {
    delete E.elem;
  });var P = { style: E.elem.style };Modernizr._q.unshift(function () {
    delete P.style;
  }), C.testAllProps = v, C.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)), Modernizr.addTest("flexwrap", y("flexWrap", "wrap", !0)), o(), s(g), delete C.addTest, delete C.addAsyncTest;for (var z = 0; z < Modernizr._q.length; z++) {
    Modernizr._q[z]();
  }e.Modernizr = Modernizr;
}(window, document);

/***/ },
/* 1 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var modernizr = __webpack_require__(0);

var examples = document.getElementsByClassName("example");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = examples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var example = _step.value;

    var prettyprint = example.nextElementSibling;
    prettyprint.textContent = example.innerHTML;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map