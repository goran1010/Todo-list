(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => m });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o),
          u = n(667),
          c = n.n(u),
          s = new URL(n(937), n.b),
          d = new URL(n(883), n.b),
          l = i()(a()),
          f = c()(s),
          h = c()(d);
        l.push([
          e.id,
          `@font-face {\n  font-family: "Roboto";\n  src: url(${f});\n}\n@font-face {\n  font-family: "Autography";\n  src: url(${h});\n}\n\n* {\n  font-family: "Roboto", Arial, Helvetica, sans-serif;\n  margin: 0;\n  box-sizing: content-box;\n}\nbutton {\n  font-weight: bold;\n}\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\nmain {\n  gap: 1rem;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  background-color: darkgrey;\n}\nheader {\n  background-color: darkgray;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: space-between;\n  padding: 0.5rem 1.5rem;\n}\nheader > button {\n  align-self: center;\n  color: white;\n  background-color: blue;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n}\nheader > button:active {\n  background-color: rgb(105, 160, 179);\n  border: 2px solid gray;\n}\naside {\n  background-color: lightgray;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n}\n.aside-upper {\n  background-color: darkgray;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n.aside-projects {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  justify-self: stretch;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n}\n.right {\n  background-color: lightgray;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n}\n.name,\n.description {\n  display: flex;\n  flex-direction: column;\n}\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 1.5rem;\n}\n.cards {\n  padding: 0.5rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n  background-color: white;\n}\nfooter {\n  background-color: darkgray;\n  min-height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: auto;\n  font-family: "Autography", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n}\n.project-card {\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n  padding: 5px;\n  margin: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.project-card:hover {\n  cursor: pointer;\n}\n.viewing {\n  box-shadow: 0 0 10px blue;\n}\n.delete-project {\n  position: absolute;\n  cursor: pointer;\n  background-color: red;\n  font-weight: bold;\n  top: -1.3rem;\n  right: 0;\n  border-radius: 5px 5px 0 0;\n  padding: 2px 2px 0 2px;\n}\n.delete-project:active {\n  background-color: rgb(248, 94, 94);\n  color: darkgrey;\n}\n`,
          "",
        ]);
        const m = l;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var c = this[u][0];
                  null != c && (i[c] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (r && i[d[0]]) ||
                  (void 0 !== o &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = o)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], u = 0; u < e.length; u++) {
            var c = e[u],
              s = r.base ? c[0] + r.base : c[0],
              d = o[s] || 0,
              l = "".concat(s, " ").concat(d);
            o[s] = d + 1;
            var f = n(l),
              h = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(h);
            else {
              var m = a(h, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var u = n(o[i]);
              t[u].references--;
            }
            for (var c = r(e, a), s = 0; s < o.length; s++) {
              var d = n(o[s]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            o = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      883: (e, t, n) => {
        e.exports = n.p + "fonts/Autography.otf";
      },
      937: (e, t, n) => {
        e.exports = n.p + "fonts/Roboto-Regular.ttf";
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        a = n.n(r),
        o = n(569),
        i = n.n(o),
        u = n(565),
        c = n.n(u),
        s = n(216),
        d = n.n(s),
        l = n(589),
        f = n.n(l),
        h = n(426),
        m = {};
      (m.styleTagTransform = f()),
        (m.setAttributes = c()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = a()),
        (m.insertStyleElement = d()),
        t()(h.Z, m),
        h.Z && h.Z.locals && h.Z.locals,
        n(883),
        n(937);
      class g {
        constructor(e, t) {
          (this.name = e),
            (this.description = t),
            (this.dateCreated = new Date());
        }
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function v(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              " argument" +
              (e > 1 ? "s" : "") +
              " required, but only " +
              t.length +
              " present"
          );
      }
      function w(e) {
        v(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || ("object" === p(e) && "[object Date]" === t)
          ? new Date(e.getTime())
          : "number" == typeof e || "[object Number]" === t
          ? new Date(e)
          : (("string" != typeof e && "[object String]" !== t) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function b(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      function y(e) {
        v(1, arguments);
        var t = w(e),
          n = t.getUTCDay(),
          r = (n < 1 ? 7 : 0) + n - 1;
        return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t;
      }
      function C(e) {
        v(1, arguments);
        var t = w(e),
          n = t.getUTCFullYear(),
          r = new Date(0);
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var a = y(r),
          o = new Date(0);
        o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var i = y(o);
        return t.getTime() >= a.getTime()
          ? n + 1
          : t.getTime() >= i.getTime()
          ? n
          : n - 1;
      }
      var T = {};
      function x() {
        return T;
      }
      function S(e, t) {
        var n, r, a, o, i, u, c, s;
        v(1, arguments);
        var d = x(),
          l = b(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (a =
                        null !== (o = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== o
                          ? o
                          : null == t ||
                            null === (i = t.locale) ||
                            void 0 === i ||
                            null === (u = i.options) ||
                            void 0 === u
                          ? void 0
                          : u.weekStartsOn) && void 0 !== a
                      ? a
                      : d.weekStartsOn) && void 0 !== r
                  ? r
                  : null === (c = d.locale) ||
                    void 0 === c ||
                    null === (s = c.options) ||
                    void 0 === s
                  ? void 0
                  : s.weekStartsOn) && void 0 !== n
              ? n
              : 0
          );
        if (!(l >= 0 && l <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var f = w(e),
          h = f.getUTCDay(),
          m = (h < l ? 7 : 0) + h - l;
        return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
      }
      function M(e, t) {
        var n, r, a, o, i, u, c, s;
        v(1, arguments);
        var d = w(e),
          l = d.getUTCFullYear(),
          f = x(),
          h = b(
            null !==
              (n =
                null !==
                  (r =
                    null !==
                      (a =
                        null !==
                          (o = null == t ? void 0 : t.firstWeekContainsDate) &&
                        void 0 !== o
                          ? o
                          : null == t ||
                            null === (i = t.locale) ||
                            void 0 === i ||
                            null === (u = i.options) ||
                            void 0 === u
                          ? void 0
                          : u.firstWeekContainsDate) && void 0 !== a
                      ? a
                      : f.firstWeekContainsDate) && void 0 !== r
                  ? r
                  : null === (c = f.locale) ||
                    void 0 === c ||
                    null === (s = c.options) ||
                    void 0 === s
                  ? void 0
                  : s.firstWeekContainsDate) && void 0 !== n
              ? n
              : 1
          );
        if (!(h >= 1 && h <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var m = new Date(0);
        m.setUTCFullYear(l + 1, 0, h), m.setUTCHours(0, 0, 0, 0);
        var g = S(m, t),
          p = new Date(0);
        p.setUTCFullYear(l, 0, h), p.setUTCHours(0, 0, 0, 0);
        var y = S(p, t);
        return d.getTime() >= g.getTime()
          ? l + 1
          : d.getTime() >= y.getTime()
          ? l
          : l - 1;
      }
      function k(e, t) {
        for (
          var n = e < 0 ? "-" : "", r = Math.abs(e).toString();
          r.length < t;

        )
          r = "0" + r;
        return n + r;
      }
      const D = function (e, t) {
          var n = e.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
          return k("yy" === t ? r % 100 : r, t.length);
        },
        P = function (e, t) {
          var n = e.getUTCMonth();
          return "M" === t ? String(n + 1) : k(n + 1, 2);
        },
        E = function (e, t) {
          return k(e.getUTCDate(), t.length);
        },
        j = function (e, t) {
          return k(e.getUTCHours() % 12 || 12, t.length);
        },
        U = function (e, t) {
          return k(e.getUTCHours(), t.length);
        },
        N = function (e, t) {
          return k(e.getUTCMinutes(), t.length);
        },
        W = function (e, t) {
          return k(e.getUTCSeconds(), t.length);
        },
        O = function (e, t) {
          var n = t.length,
            r = e.getUTCMilliseconds();
          return k(Math.floor(r * Math.pow(10, n - 3)), t.length);
        };
      var Y = {
        G: function (e, t, n) {
          var r = e.getUTCFullYear() > 0 ? 1 : 0;
          switch (t) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (e, t, n) {
          if ("yo" === t) {
            var r = e.getUTCFullYear(),
              a = r > 0 ? r : 1 - r;
            return n.ordinalNumber(a, { unit: "year" });
          }
          return D(e, t);
        },
        Y: function (e, t, n, r) {
          var a = M(e, r),
            o = a > 0 ? a : 1 - a;
          return "YY" === t
            ? k(o % 100, 2)
            : "Yo" === t
            ? n.ordinalNumber(o, { unit: "year" })
            : k(o, t.length);
        },
        R: function (e, t) {
          return k(C(e), t.length);
        },
        u: function (e, t) {
          return k(e.getUTCFullYear(), t.length);
        },
        Q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "Q":
              return String(r);
            case "QQ":
              return k(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, { width: "narrow", context: "formatting" });
            default:
              return n.quarter(r, { width: "wide", context: "formatting" });
          }
        },
        q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3);
          switch (t) {
            case "q":
              return String(r);
            case "qq":
              return k(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, { width: "narrow", context: "standalone" });
            default:
              return n.quarter(r, { width: "wide", context: "standalone" });
          }
        },
        M: function (e, t, n) {
          var r = e.getUTCMonth();
          switch (t) {
            case "M":
            case "MM":
              return P(e, t);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, { width: "narrow", context: "formatting" });
            default:
              return n.month(r, { width: "wide", context: "formatting" });
          }
        },
        L: function (e, t, n) {
          var r = e.getUTCMonth();
          switch (t) {
            case "L":
              return String(r + 1);
            case "LL":
              return k(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, { width: "narrow", context: "standalone" });
            default:
              return n.month(r, { width: "wide", context: "standalone" });
          }
        },
        w: function (e, t, n, r) {
          var a = (function (e, t) {
            v(1, arguments);
            var n = w(e),
              r =
                S(n, t).getTime() -
                (function (e, t) {
                  var n, r, a, o, i, u, c, s;
                  v(1, arguments);
                  var d = x(),
                    l = b(
                      null !==
                        (n =
                          null !==
                            (r =
                              null !==
                                (a =
                                  null !==
                                    (o =
                                      null == t
                                        ? void 0
                                        : t.firstWeekContainsDate) &&
                                  void 0 !== o
                                    ? o
                                    : null == t ||
                                      null === (i = t.locale) ||
                                      void 0 === i ||
                                      null === (u = i.options) ||
                                      void 0 === u
                                    ? void 0
                                    : u.firstWeekContainsDate) && void 0 !== a
                                ? a
                                : d.firstWeekContainsDate) && void 0 !== r
                            ? r
                            : null === (c = d.locale) ||
                              void 0 === c ||
                              null === (s = c.options) ||
                              void 0 === s
                            ? void 0
                            : s.firstWeekContainsDate) && void 0 !== n
                        ? n
                        : 1
                    ),
                    f = M(e, t),
                    h = new Date(0);
                  return (
                    h.setUTCFullYear(f, 0, l),
                    h.setUTCHours(0, 0, 0, 0),
                    S(h, t)
                  );
                })(n, t).getTime();
            return Math.round(r / 6048e5) + 1;
          })(e, r);
          return "wo" === t
            ? n.ordinalNumber(a, { unit: "week" })
            : k(a, t.length);
        },
        I: function (e, t, n) {
          var r = (function (e) {
            v(1, arguments);
            var t = w(e),
              n =
                y(t).getTime() -
                (function (e) {
                  v(1, arguments);
                  var t = C(e),
                    n = new Date(0);
                  return (
                    n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), y(n)
                  );
                })(t).getTime();
            return Math.round(n / 6048e5) + 1;
          })(e);
          return "Io" === t
            ? n.ordinalNumber(r, { unit: "week" })
            : k(r, t.length);
        },
        d: function (e, t, n) {
          return "do" === t
            ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
            : E(e, t);
        },
        D: function (e, t, n) {
          var r = (function (e) {
            v(1, arguments);
            var t = w(e),
              n = t.getTime();
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            var r = n - t.getTime();
            return Math.floor(r / 864e5) + 1;
          })(e);
          return "Do" === t
            ? n.ordinalNumber(r, { unit: "dayOfYear" })
            : k(r, t.length);
        },
        E: function (e, t, n) {
          var r = e.getUTCDay();
          switch (t) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        e: function (e, t, n, r) {
          var a = e.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "e":
              return String(o);
            case "ee":
              return k(o, 2);
            case "eo":
              return n.ordinalNumber(o, { unit: "day" });
            case "eee":
              return n.day(a, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(a, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(a, { width: "short", context: "formatting" });
            default:
              return n.day(a, { width: "wide", context: "formatting" });
          }
        },
        c: function (e, t, n, r) {
          var a = e.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case "c":
              return String(o);
            case "cc":
              return k(o, t.length);
            case "co":
              return n.ordinalNumber(o, { unit: "day" });
            case "ccc":
              return n.day(a, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(a, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(a, { width: "short", context: "standalone" });
            default:
              return n.day(a, { width: "wide", context: "standalone" });
          }
        },
        i: function (e, t, n) {
          var r = e.getUTCDay(),
            a = 0 === r ? 7 : r;
          switch (t) {
            case "i":
              return String(a);
            case "ii":
              return k(a, t.length);
            case "io":
              return n.ordinalNumber(a, { unit: "day" });
            case "iii":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        a: function (e, t, n) {
          var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (t) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        b: function (e, t, n) {
          var r,
            a = e.getUTCHours();
          switch (
            ((r =
              12 === a
                ? "noon"
                : 0 === a
                ? "midnight"
                : a / 12 >= 1
                ? "pm"
                : "am"),
            t)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        B: function (e, t, n) {
          var r,
            a = e.getUTCHours();
          switch (
            ((r =
              a >= 17
                ? "evening"
                : a >= 12
                ? "afternoon"
                : a >= 4
                ? "morning"
                : "night"),
            t)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        h: function (e, t, n) {
          if ("ho" === t) {
            var r = e.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return j(e, t);
        },
        H: function (e, t, n) {
          return "Ho" === t
            ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
            : U(e, t);
        },
        K: function (e, t, n) {
          var r = e.getUTCHours() % 12;
          return "Ko" === t
            ? n.ordinalNumber(r, { unit: "hour" })
            : k(r, t.length);
        },
        k: function (e, t, n) {
          var r = e.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : k(r, t.length)
          );
        },
        m: function (e, t, n) {
          return "mo" === t
            ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
            : N(e, t);
        },
        s: function (e, t, n) {
          return "so" === t
            ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
            : W(e, t);
        },
        S: function (e, t) {
          return O(e, t);
        },
        X: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset();
          if (0 === a) return "Z";
          switch (t) {
            case "X":
              return L(a);
            case "XXXX":
            case "XX":
              return A(a);
            default:
              return A(a, ":");
          }
        },
        x: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "x":
              return L(a);
            case "xxxx":
            case "xx":
              return A(a);
            default:
              return A(a, ":");
          }
        },
        O: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + q(a, ":");
            default:
              return "GMT" + A(a, ":");
          }
        },
        z: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset();
          switch (t) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + q(a, ":");
            default:
              return "GMT" + A(a, ":");
          }
        },
        t: function (e, t, n, r) {
          var a = r._originalDate || e;
          return k(Math.floor(a.getTime() / 1e3), t.length);
        },
        T: function (e, t, n, r) {
          return k((r._originalDate || e).getTime(), t.length);
        },
      };
      function q(e, t) {
        var n = e > 0 ? "-" : "+",
          r = Math.abs(e),
          a = Math.floor(r / 60),
          o = r % 60;
        if (0 === o) return n + String(a);
        var i = t || "";
        return n + String(a) + i + k(o, 2);
      }
      function L(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + k(Math.abs(e) / 60, 2)
          : A(e, t);
      }
      function A(e, t) {
        var n = t || "",
          r = e > 0 ? "-" : "+",
          a = Math.abs(e);
        return r + k(Math.floor(a / 60), 2) + n + k(a % 60, 2);
      }
      const F = Y;
      var H = function (e, t) {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        R = function (e, t) {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        };
      const z = {
        p: R,
        P: function (e, t) {
          var n,
            r = e.match(/(P+)(p+)?/) || [],
            a = r[1],
            o = r[2];
          if (!o) return H(e, t);
          switch (a) {
            case "P":
              n = t.dateTime({ width: "short" });
              break;
            case "PP":
              n = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = t.dateTime({ width: "long" });
              break;
            default:
              n = t.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", H(a, t)).replace("{{time}}", R(o, t));
        },
      };
      var I = ["D", "DD"],
        Q = ["YY", "YYYY"];
      function G(e, t, n) {
        if ("YYYY" === e)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(t, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("YY" === e)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(t, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("D" === e)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(t, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("DD" === e)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(t, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
      }
      var B = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function J(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      const X = {
        date: J({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: J({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: J({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var $ = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function V(e) {
        return function (t, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
              o = null != n && n.width ? String(n.width) : a;
            r = e.formattingValues[o] || e.formattingValues[a];
          } else {
            var i = e.defaultWidth,
              u = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[u] || e.values[i];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      const _ = {
        ordinalNumber: function (e, t) {
          var n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: V({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: V({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: V({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: V({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: V({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function Z(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            a =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
          if (!o) return null;
          var i,
            u = o[0],
            c =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            s = Array.isArray(c)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++) if (e[n].test(u)) return n;
                })(c)
              : (function (e, t) {
                  for (var n in e)
                    if (e.hasOwnProperty(n) && e[n].test(u)) return n;
                })(c);
          return (
            (i = e.valueCallback ? e.valueCallback(s) : s),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: t.slice(u.length),
            }
          );
        };
      }
      var K,
        ee = {
          ordinalNumber:
            ((K = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match(K.matchPattern);
              if (!n) return null;
              var r = n[0],
                a = e.match(K.parsePattern);
              if (!a) return null;
              var o = K.valueCallback ? K.valueCallback(a[0]) : a[0];
              return {
                value: (o = t.valueCallback ? t.valueCallback(o) : o),
                rest: e.slice(r.length),
              };
            }),
          era: Z({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: Z({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: Z({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: Z({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: Z({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const te = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          var r,
            a = B[e];
          return (
            (r =
              "string" == typeof a
                ? a
                : 1 === t
                ? a.one
                : a.other.replace("{{count}}", t.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: X,
        formatRelative: function (e, t, n, r) {
          return $[e];
        },
        localize: _,
        match: ee,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var ne = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        re = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ae = /^'([^]*?)'?$/,
        oe = /''/g,
        ie = /[a-zA-Z]/;
      function ue(e, t, n) {
        var r, a, o, i, u, c, s, d, l, f, h, m, g, y, C, T, S, M;
        v(2, arguments);
        var k = String(t),
          D = x(),
          P =
            null !==
              (r =
                null !== (a = null == n ? void 0 : n.locale) && void 0 !== a
                  ? a
                  : D.locale) && void 0 !== r
              ? r
              : te,
          E = b(
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (u =
                        null !==
                          (c = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== c
                          ? c
                          : null == n ||
                            null === (s = n.locale) ||
                            void 0 === s ||
                            null === (d = s.options) ||
                            void 0 === d
                          ? void 0
                          : d.firstWeekContainsDate) && void 0 !== u
                      ? u
                      : D.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (l = D.locale) ||
                    void 0 === l ||
                    null === (f = l.options) ||
                    void 0 === f
                  ? void 0
                  : f.firstWeekContainsDate) && void 0 !== o
              ? o
              : 1
          );
        if (!(E >= 1 && E <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var j = b(
          null !==
            (h =
              null !==
                (m =
                  null !==
                    (g =
                      null !== (y = null == n ? void 0 : n.weekStartsOn) &&
                      void 0 !== y
                        ? y
                        : null == n ||
                          null === (C = n.locale) ||
                          void 0 === C ||
                          null === (T = C.options) ||
                          void 0 === T
                        ? void 0
                        : T.weekStartsOn) && void 0 !== g
                    ? g
                    : D.weekStartsOn) && void 0 !== m
                ? m
                : null === (S = D.locale) ||
                  void 0 === S ||
                  null === (M = S.options) ||
                  void 0 === M
                ? void 0
                : M.weekStartsOn) && void 0 !== h
            ? h
            : 0
        );
        if (!(j >= 0 && j <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if (!P.localize)
          throw new RangeError("locale must contain localize property");
        if (!P.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var U = w(e);
        if (
          !(function (e) {
            if (
              (v(1, arguments),
              !(function (e) {
                return (
                  v(1, arguments),
                  e instanceof Date ||
                    ("object" === p(e) &&
                      "[object Date]" === Object.prototype.toString.call(e))
                );
              })(e) && "number" != typeof e)
            )
              return !1;
            var t = w(e);
            return !isNaN(Number(t));
          })(U)
        )
          throw new RangeError("Invalid time value");
        var N = (function (e) {
            var t = new Date(
              Date.UTC(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                e.getHours(),
                e.getMinutes(),
                e.getSeconds(),
                e.getMilliseconds()
              )
            );
            return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
          })(U),
          W = (function (e, t) {
            return (
              v(2, arguments),
              (function (e, t) {
                v(2, arguments);
                var n = w(e).getTime(),
                  r = b(t);
                return new Date(n + r);
              })(e, -b(t))
            );
          })(U, N),
          O = {
            firstWeekContainsDate: E,
            weekStartsOn: j,
            locale: P,
            _originalDate: U,
          };
        return k
          .match(re)
          .map(function (e) {
            var t = e[0];
            return "p" === t || "P" === t ? (0, z[t])(e, P.formatLong) : e;
          })
          .join("")
          .match(ne)
          .map(function (r) {
            if ("''" === r) return "'";
            var a,
              o,
              i = r[0];
            if ("'" === i)
              return (o = (a = r).match(ae)) ? o[1].replace(oe, "'") : a;
            var u,
              c = F[i];
            if (c)
              return (
                (null != n && n.useAdditionalWeekYearTokens) ||
                  ((u = r), -1 === Q.indexOf(u)) ||
                  G(r, t, String(e)),
                (null != n && n.useAdditionalDayOfYearTokens) ||
                  !(function (e) {
                    return -1 !== I.indexOf(e);
                  })(r) ||
                  G(r, t, String(e)),
                c(W, r, P.localize, O)
              );
            if (i.match(ie))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  i +
                  "`"
              );
            return r;
          })
          .join("");
      }
      class ce {
        constructor(e, t) {
          (this.projectName = e),
            (this.projectDescription = t),
            (this.projectDateCreated = ue(new Date(), "yyyy-MM-dd")),
            (this.allTodos = []),
            (this.isViewed = !0);
        }
        createNewTodo(e, t) {
          let n = new g(e, t);
          this.allTodos.push(n);
        }
      }
      function se(e) {
        document.querySelector(".content").firstChild &&
          document
            .querySelector(".content")
            .removeChild(document.querySelector(".content").firstChild);
        let t = e.find((e) => e.isViewed);
        if (!t) return;
        const n = document.createElement("input"),
          r = document.createElement("input"),
          a = document.createElement("div");
        a.classList.add("cards");
        const o = document.createElement("button");
        o.addEventListener("click", () => {
          t.createNewTodo(n.value, r.value),
            localStorage.setItem("allProjects", JSON.stringify(e)),
            se(e);
        }),
          (o.textContent = "Create a New Todo"),
          (a.textContent = `\n  ${t.projectName},\n  ${t.projectDescription},\n  ${t.projectDateCreated}`),
          a.appendChild(n),
          a.appendChild(r),
          a.appendChild(o),
          t.allTodos.forEach((n, r) => {
            const o = document.createElement("div"),
              i = document.createElement("div"),
              u = document.createElement("div");
            (i.textContent = `${n.name}`), (u.textContent = `${n.description}`);
            const c = document.createElement("div");
            (c.textContent = "x"),
              c.addEventListener("click", () => {
                t.allTodos.splice(r, 1),
                  localStorage.setItem("allProjects", JSON.stringify(e)),
                  se(e);
              }),
              o.appendChild(i),
              o.appendChild(u),
              o.appendChild(c),
              a.appendChild(o);
          }),
          document.querySelector(".content").appendChild(a);
      }
      function de(e) {
        for (; document.querySelector(".aside-projects").firstChild; )
          document
            .querySelector(".aside-projects")
            .removeChild(document.querySelector(".aside-projects").firstChild);
        e.forEach((t, n) => {
          const r = document.createElement("div"),
            a = document.createElement("h3"),
            o = document.createElement("p"),
            i = document.createElement("div"),
            u = document.createElement("div");
          t.isViewed && r.classList.add("viewing"),
            (i.textContent = "DELETE"),
            i.classList.add("delete-project"),
            i.addEventListener("click", (t) => {
              t.stopPropagation(),
                e.splice(n, 1),
                localStorage.setItem("allProjects", JSON.stringify(e)),
                de(e),
                se(e);
            }),
            (a.textContent = t.projectName),
            (o.textContent = t.projectDescription),
            (u.textContent = `${t.projectDateCreated}`),
            r.classList.add("project-card"),
            r.appendChild(i),
            r.appendChild(a),
            r.appendChild(o),
            r.appendChild(u),
            r.addEventListener("click", () => {
              e.forEach((e) => {
                e.isViewed = !1;
              }),
                (t.isViewed = !0),
                de(e),
                se(e);
            }),
            document.querySelector(".aside-projects").appendChild(r);
        });
      }
      let le = [];
      le = (function (e) {
        if (
          localStorage.getItem("allProjects") &&
          0 != JSON.parse(localStorage.getItem("allProjects")).length
        ) {
          e = JSON.parse(localStorage.getItem("allProjects"));
          for (let t = 0; t < e.length; t++) {
            let n = e[t].allTodos,
              r = (e[t].isViewed, e[t].projectDateCreated);
            (e[t] = new ce(e[t].projectName, e[t].projectDescription)),
              (e[t].allTodos = n),
              (e[t].isViewed = !1),
              (e[t].projectDateCreated = r);
          }
          return de(e), se(e), e;
        }
        return (
          (function (e) {
            let t = new ce(
              "Default Name",
              "Description for the Default Project"
            );
            e.forEach((e) => (e.isViewed = !1)), e.push(t), se(e), de(e);
          })(e),
          e
        );
      })(le);
      const fe = document.querySelector("header button"),
        he = document.querySelector("header input#project-name");
      let me = he.value;
      he.addEventListener("keyup", () => {
        me = he.value;
      });
      const ge = document.querySelector("header textarea#project-description");
      let pe = ge.value;
      ge.addEventListener("keyup", () => {
        pe = ge.value;
      }),
        fe.addEventListener("click", () => {
          let e = new ce(me, pe);
          le.forEach((e) => (e.isViewed = !1)),
            le.push(e),
            localStorage.setItem("allProjects", JSON.stringify(le)),
            se(le),
            de(le),
            (he.value = ""),
            (ge.value = "");
        });
    })();
})();
