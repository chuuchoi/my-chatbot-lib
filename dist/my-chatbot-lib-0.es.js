import Pe, { useState as cr } from "react";
var U = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function dr() {
  if (Oe) return $;
  Oe = 1;
  var F = Pe, R = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, P = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, f, x) {
    var p, E = {}, O = null, Y = null;
    x !== void 0 && (O = "" + x), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (p in f) g.call(f, p) && !b.hasOwnProperty(p) && (E[p] = f[p]);
    if (T && T.defaultProps) for (p in f = T.defaultProps, f) E[p] === void 0 && (E[p] = f[p]);
    return { $$typeof: R, type: T, key: O, ref: Y, props: E, _owner: P.current };
  }
  return $.Fragment = _, $.jsx = m, $.jsxs = m, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var F = Pe, R = Symbol.for("react.element"), _ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Z = Symbol.iterator, xe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var j = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ie = !1, Q;
    Q = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === b || Ie || e === P || e === x || e === p || Ae || e === Y || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === E || e.$$typeof === m || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case _:
          return "Portal";
        case b:
          return "Profiler";
        case P:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ee(r) + ".Consumer";
          case m:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case O: {
            var o = e, u = o._payload, i = o._init;
            try {
              return y(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, re, te, ne, ae, ie, oe, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: re
            }),
            info: S({}, e, {
              value: te
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: ie
            }),
            groupCollapsed: S({}, e, {
              value: oe
            }),
            groupEnd: S({}, e, {
              value: ue
            })
          });
        }
        A < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = j.ReactCurrentDispatcher, q;
    function L(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var B = !1, N;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ne();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, J.current = u, Le(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", C = k ? L(k) : "";
      return typeof e == "function" && N.set(e, C), C;
    }
    function Ve(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case E:
            return V(e.type, r, t);
          case O: {
            var n = e, o = n._payload, u = n._init;
            try {
              return V(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, fe = {}, ce = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(I);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(o), c("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), de(e);
    }
    var pe = j.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge;
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (ve(t), a = "" + t), ze(r) && (ve(r.key), a = "" + r.key), Ge(r) && (d = r.ref, Xe(r, o));
        for (u in r)
          I.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), d && Ze(i, l);
        }
        return Qe(e, a, d, o, n, pe.current, i);
      }
    }
    var G = j.ReactCurrentOwner, be = j.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function Ee() {
      {
        if (G.current) {
          var e = y(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var ye = {};
    function tr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), w(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), w(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            w(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    var me = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = rr();
          d ? a += d : a += Ee();
          var s;
          e === null ? s = "null" : K(e) ? s = "array" : e !== void 0 && e.$$typeof === R ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var k = 0; k < h.length; k++)
                  _e(h[k], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(h, e);
        }
        if (I.call(r, "key")) {
          var C = y(e), v = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!me[C + H]) {
            var lr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, C, lr, C), me[C + H] = !0;
          }
        }
        return e === g ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function or(e, r, t) {
      return Te(e, r, t, !1);
    }
    var ur = or, sr = ir;
    W.Fragment = g, W.jsx = ur, W.jsxs = sr;
  }()), W;
}
var Ce;
function pr() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? U.exports = dr() : U.exports = vr()), U.exports;
}
var D = pr();
function gr({ onSend: F, messages: R }) {
  const [_, g] = cr(""), P = () => {
    _.trim() && (F(_), g(""));
  };
  return /* @__PURE__ */ D.jsxs("div", { className: "chatbot-container", children: [
    /* @__PURE__ */ D.jsx("div", { className: "chatbot-messages", children: R.map((b, m) => /* @__PURE__ */ D.jsx("div", { className: `chatbot-msg ${b.from}`, children: b.text }, m)) }),
    /* @__PURE__ */ D.jsxs("div", { className: "chatbot-input", children: [
      /* @__PURE__ */ D.jsx(
        "input",
        {
          value: _,
          onChange: (b) => g(b.target.value),
          placeholder: "메시지를 입력하세요..."
        }
      ),
      /* @__PURE__ */ D.jsx("button", { onClick: P, children: "전송" })
    ] })
  ] });
}
export {
  gr as default
};
