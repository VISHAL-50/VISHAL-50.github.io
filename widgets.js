(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gc = { exports: {} },
  Ta = {},
  Yc = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  am = Symbol.for("react.portal"),
  om = Symbol.for("react.fragment"),
  lm = Symbol.for("react.strict_mode"),
  sm = Symbol.for("react.profiler"),
  um = Symbol.for("react.provider"),
  cm = Symbol.for("react.context"),
  fm = Symbol.for("react.forward_ref"),
  dm = Symbol.for("react.suspense"),
  pm = Symbol.for("react.memo"),
  mm = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function hm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qc = Object.assign,
  Kc = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Xc);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qc() {}
qc.prototype = Qn.prototype;
function Hl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kc),
    (this.updater = n || Xc);
}
var Ul = (Hl.prototype = new qc());
Ul.constructor = Hl;
Qc(Ul, Qn.prototype);
Ul.isPureReactComponent = !0;
var tu = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  Wl = { current: null },
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ef(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Zc.call(t, r) && !Jc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Wl.current,
  };
}
function vm(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function gm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Ya(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gm("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case am:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ya(o, 0) : r),
      tu(i)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Ni(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Gl(i) &&
            (i = vm(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = r + Ya(a, l);
      o += Ni(a, t, n, s, i);
    }
  else if (((s = hm(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (s = r + Ya(a, l++)), (o += Ni(a, t, n, s, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function ym(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  Li = { transition: null },
  wm = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: Wl,
  };
function tf() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: ai,
  forEach: function (e, t, n) {
    ai(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = Qn;
V.Fragment = om;
V.Profiler = sm;
V.PureComponent = Hl;
V.StrictMode = lm;
V.Suspense = dm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
V.act = tf;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qc({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Wl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Zc.call(t, s) &&
        !Jc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: a, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: cm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: um, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = ef;
V.createFactory = function (e) {
  var t = ef.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: fm, render: e };
};
V.isValidElement = Gl;
V.lazy = function (e) {
  return { $$typeof: mm, _payload: { _status: -1, _result: e }, _init: ym };
};
V.memo = function (e, t) {
  return { $$typeof: pm, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
V.unstable_act = tf;
V.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Ee.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
V.useId = function () {
  return Ee.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ee.current.useRef(e);
};
V.useState = function (e) {
  return Ee.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Ee.current.useTransition();
};
V.version = "18.3.1";
Yc.exports = V;
var F = Yc.exports;
const te = Wc(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm = F,
  Sm = Symbol.for("react.element"),
  km = Symbol.for("react.fragment"),
  Em = Object.prototype.hasOwnProperty,
  bm = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function nf(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Em.call(t, r) && !Cm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sm,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: bm.current,
  };
}
Ta.Fragment = km;
Ta.jsx = nf;
Ta.jsxs = nf;
Gc.exports = Ta;
var M = Gc.exports,
  Mo = {},
  rf = { exports: {} },
  Re = {},
  af = { exports: {} },
  of = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, z) {
    var j = T.length;
    T.push(z);
    e: for (; 0 < j; ) {
      var G = (j - 1) >>> 1,
        oe = T[G];
      if (0 < i(oe, z)) (T[G] = z), (T[j] = oe), (j = G);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var z = T[0],
      j = T.pop();
    if (j !== z) {
      T[0] = j;
      e: for (var G = 0, oe = T.length, ri = oe >>> 1; G < ri; ) {
        var Qt = 2 * (G + 1) - 1,
          Ga = T[Qt],
          Kt = Qt + 1,
          ii = T[Kt];
        if (0 > i(Ga, j))
          Kt < oe && 0 > i(ii, Ga)
            ? ((T[G] = ii), (T[Kt] = j), (G = Kt))
            : ((T[G] = Ga), (T[Qt] = j), (G = Qt));
        else if (Kt < oe && 0 > i(ii, j)) (T[G] = ii), (T[Kt] = j), (G = Kt);
        else break e;
      }
    }
    return z;
  }
  function i(T, z) {
    var j = T.sortIndex - z.sortIndex;
    return j !== 0 ? j : T.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    c = [],
    f = 1,
    p = null,
    h = 3,
    v = !1,
    g = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= T)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function w(T) {
    if (((y = !1), m(T), !g))
      if (n(s) !== null) (g = !0), ie(x);
      else {
        var z = n(c);
        z !== null && Ce(w, z.startTime - T);
      }
  }
  function x(T, z) {
    (g = !1), y && ((y = !1), u(b), (b = -1)), (v = !0);
    var j = h;
    try {
      for (
        m(z), p = n(s);
        p !== null && (!(p.expirationTime > z) || (T && !C()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var oe = G(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof oe == "function" ? (p.callback = oe) : p === n(s) && r(s),
            m(z);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var ri = !0;
      else {
        var Qt = n(c);
        Qt !== null && Ce(w, Qt.startTime - z), (ri = !1);
      }
      return ri;
    } finally {
      (p = null), (h = j), (v = !1);
    }
  }
  var E = !1,
    P = null,
    b = -1,
    _ = 5,
    k = -1;
  function C() {
    return !(e.unstable_now() - k < _);
  }
  function O() {
    if (P !== null) {
      var T = e.unstable_now();
      k = T;
      var z = !0;
      try {
        z = P(!0, T);
      } finally {
        z ? N() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var N;
  if (typeof d == "function")
    N = function () {
      d(O);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      H = D.port2;
    (D.port1.onmessage = O),
      (N = function () {
        H.postMessage(null);
      });
  } else
    N = function () {
      S(O, 0);
    };
  function ie(T) {
    (P = T), E || ((E = !0), N());
  }
  function Ce(T, z) {
    b = S(function () {
      T(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), ie(x));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var j = h;
      h = z;
      try {
        return T();
      } finally {
        h = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, z) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var j = h;
      h = T;
      try {
        return z();
      } finally {
        h = j;
      }
    }),
    (e.unstable_scheduleCallback = function (T, z, j) {
      var G = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? G + j : G))
          : (j = G),
        T)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = j + oe),
        (T = {
          id: f++,
          callback: z,
          priorityLevel: T,
          startTime: j,
          expirationTime: oe,
          sortIndex: -1,
        }),
        j > G
          ? ((T.sortIndex = j),
            t(c, T),
            n(s) === null &&
              T === n(c) &&
              (y ? (u(b), (b = -1)) : (y = !0), Ce(w, j - G)))
          : ((T.sortIndex = oe), t(s, T), g || v || ((g = !0), ie(x))),
        T
      );
    }),
    (e.unstable_shouldYield = C),
    (e.unstable_wrapCallback = function (T) {
      var z = h;
      return function () {
        var j = h;
        h = z;
        try {
          return T.apply(this, arguments);
        } finally {
          h = j;
        }
      };
    });
})(of);
af.exports = of;
var Tm = af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm = F,
  je = Tm;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lf = new Set(),
  Tr = {};
function hn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) lf.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  No = Object.prototype.hasOwnProperty,
  _m =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  iu = {};
function Om(e) {
  return No.call(iu, e)
    ? !0
    : No.call(ru, e)
    ? !1
    : _m.test(e)
    ? (iu[e] = !0)
    : ((ru[e] = !0), !1);
}
function zm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Im(e, t, n, r) {
  if (t === null || typeof t > "u" || zm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yl = /[\-:]([a-z])/g;
function Xl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Xl);
    ve[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Xl);
    ve[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yl, Xl);
  ve[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ql(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Im(t, n, i, r) && (n = null),
    r || i === null
      ? Om(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oi = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  Kl = Symbol.for("react.strict_mode"),
  Lo = Symbol.for("react.profiler"),
  sf = Symbol.for("react.provider"),
  uf = Symbol.for("react.context"),
  ql = Symbol.for("react.forward_ref"),
  Ao = Symbol.for("react.suspense"),
  jo = Symbol.for("react.suspense_list"),
  Zl = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  cf = Symbol.for("react.offscreen"),
  au = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (au && e[au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  Xa;
function ur(e) {
  if (Xa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xa = (t && t[1]) || "";
    }
  return (
    `
` +
    Xa +
    e
  );
}
var Qa = !1;
function Ka(e, t) {
  if (!e || Qa) return "";
  Qa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Qa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function Mm(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ka(e.type, !1)), e;
    case 11:
      return (e = Ka(e.type.render, !1)), e;
    case 1:
      return (e = Ka(e.type, !0)), e;
    default:
      return "";
  }
}
function Ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case yn:
      return "Portal";
    case Lo:
      return "Profiler";
    case Kl:
      return "StrictMode";
    case Ao:
      return "Suspense";
    case jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uf:
        return (e.displayName || "Context") + ".Consumer";
      case sf:
        return (e._context.displayName || "Context") + ".Provider";
      case ql:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zl:
        return (
          (t = e.displayName || null), t !== null ? t : Ro(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Ro(e(t));
        } catch {}
    }
  return null;
}
function Nm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ro(t);
    case 8:
      return t === Kl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lm(e) {
  var t = ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = Lm(e));
}
function df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fo(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pf(e, t) {
  (t = t.checked), t != null && Ql(e, "checked", t, !1);
}
function Do(e, t) {
  pf(e, t);
  var n = Vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $o(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $o(e, t.type, Vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $o(e, t, n) {
  (t !== "number" || Xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function Nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function mf(e, t) {
  var n = Vt(t.value),
    r = Vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  vf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Am = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Am.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function gf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function yf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = gf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var jm = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ho(e, t) {
  if (t) {
    if (jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Uo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wo = null;
function Jl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Go = null,
  Ln = null,
  An = null;
function cu(e) {
  if ((e = Zr(e))) {
    if (typeof Go != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Ia(t)), Go(e.stateNode, e.type, t));
  }
}
function wf(e) {
  Ln ? (An ? An.push(e) : (An = [e])) : (Ln = e);
}
function xf() {
  if (Ln) {
    var e = Ln,
      t = An;
    if (((An = Ln = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Sf(e, t) {
  return e(t);
}
function kf() {}
var qa = !1;
function Ef(e, t, n) {
  if (qa) return e(t, n);
  qa = !0;
  try {
    return Sf(e, t, n);
  } finally {
    (qa = !1), (Ln !== null || An !== null) && (kf(), xf());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ia(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Yo = !1;
if (ht)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        Yo = !0;
      },
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr);
  } catch {
    Yo = !1;
  }
function Rm(e, t, n, r, i, a, o, l, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var hr = !1,
  Qi = null,
  Ki = !1,
  Xo = null,
  Fm = {
    onError: function (e) {
      (hr = !0), (Qi = e);
    },
  };
function Dm(e, t, n, r, i, a, o, l, s) {
  (hr = !1), (Qi = null), Rm.apply(Fm, arguments);
}
function $m(e, t, n, r, i, a, o, l, s) {
  if ((Dm.apply(this, arguments), hr)) {
    if (hr) {
      var c = Qi;
      (hr = !1), (Qi = null);
    } else throw Error(I(198));
    Ki || ((Ki = !0), (Xo = c));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if (vn(e) !== e) throw Error(I(188));
}
function Vm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return fu(i), e;
        if (a === r) return fu(i), t;
        a = a.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Cf(e) {
  return (e = Vm(e)), e !== null ? Tf(e) : null;
}
function Tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pf = je.unstable_scheduleCallback,
  du = je.unstable_cancelCallback,
  Bm = je.unstable_shouldYield,
  Hm = je.unstable_requestPaint,
  ae = je.unstable_now,
  Um = je.unstable_getCurrentPriorityLevel,
  es = je.unstable_ImmediatePriority,
  _f = je.unstable_UserBlockingPriority,
  qi = je.unstable_NormalPriority,
  Wm = je.unstable_LowPriority,
  Of = je.unstable_IdlePriority,
  Pa = null,
  lt = null;
function Gm(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Qm,
  Ym = Math.log,
  Xm = Math.LN2;
function Qm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ym(e) / Xm) | 0)) | 0;
}
var ui = 64,
  ci = 4194304;
function fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = fr(l)) : ((a &= o), a !== 0 && (r = fr(a)));
  } else (o = n & ~i), o !== 0 ? (r = fr(o)) : a !== 0 && (r = fr(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Km(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Ze(a),
      l = 1 << o,
      s = i[o];
    s === -1
      ? (!(l & n) || l & r) && (i[o] = Km(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function Qo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zf() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function Za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function Zm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function ts(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function If(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mf,
  ns,
  Nf,
  Lf,
  Af,
  Ko = !1,
  fi = [],
  Nt = null,
  Lt = null,
  At = null,
  Or = new Map(),
  zr = new Map(),
  _t = [],
  Jm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Lt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function nr(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Zr(t)), t !== null && ns(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function eh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = nr(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Lt = nr(Lt, e, t, n, r, i)), !0;
    case "mouseover":
      return (At = nr(At, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return Or.set(a, nr(Or.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), zr.set(a, nr(zr.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function jf(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bf(n)), t !== null)) {
          (e.blockedOn = t),
            Af(e.priority, function () {
              Nf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wo = r), n.target.dispatchEvent(r), (Wo = null);
    } else return (t = Zr(n)), t !== null && ns(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Ai(e) && n.delete(t);
}
function th() {
  (Ko = !1),
    Nt !== null && Ai(Nt) && (Nt = null),
    Lt !== null && Ai(Lt) && (Lt = null),
    At !== null && Ai(At) && (At = null),
    Or.forEach(mu),
    zr.forEach(mu);
}
function rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ko ||
      ((Ko = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, th)));
}
function Ir(e) {
  function t(i) {
    return rr(i, e);
  }
  if (0 < fi.length) {
    rr(fi[0], e);
    for (var n = 1; n < fi.length; n++) {
      var r = fi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && rr(Nt, e),
      Lt !== null && rr(Lt, e),
      At !== null && rr(At, e),
      Or.forEach(t),
      zr.forEach(t),
      n = 0;
    n < _t.length;
    n++
  )
    (r = _t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && ((n = _t[0]), n.blockedOn === null); )
    jf(n), n.blockedOn === null && _t.shift();
}
var jn = kt.ReactCurrentBatchConfig,
  Ji = !0;
function nh(e, t, n, r) {
  var i = U,
    a = jn.transition;
  jn.transition = null;
  try {
    (U = 1), rs(e, t, n, r);
  } finally {
    (U = i), (jn.transition = a);
  }
}
function rh(e, t, n, r) {
  var i = U,
    a = jn.transition;
  jn.transition = null;
  try {
    (U = 4), rs(e, t, n, r);
  } finally {
    (U = i), (jn.transition = a);
  }
}
function rs(e, t, n, r) {
  if (Ji) {
    var i = qo(e, t, n, r);
    if (i === null) so(e, t, r, ea, n), pu(e, r);
    else if (eh(i, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < Jm.indexOf(e))) {
      for (; i !== null; ) {
        var a = Zr(i);
        if (
          (a !== null && Mf(a),
          (a = qo(e, t, n, r)),
          a === null && so(e, t, r, ea, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else so(e, t, r, null, n);
  }
}
var ea = null;
function qo(e, t, n, r) {
  if (((ea = null), (e = Jl(r)), (e = Jt(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function Rf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Um()) {
        case es:
          return 1;
        case _f:
          return 4;
        case qi:
        case Wm:
          return 16;
        case Of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null,
  is = null,
  ji = null;
function Ff() {
  if (ji) return ji;
  var e,
    t = is,
    n = t.length,
    r,
    i = "value" in zt ? zt.value : zt.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (ji = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function hu() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? di
        : hu),
      (this.isPropagationStopped = hu),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  as = Fe(Kn),
  qr = ee({}, Kn, { view: 0, detail: 0 }),
  ih = Fe(qr),
  Ja,
  eo,
  ir,
  _a = ee({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: os,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? ((Ja = e.screenX - ir.screenX), (eo = e.screenY - ir.screenY))
              : (eo = Ja = 0),
            (ir = e)),
          Ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : eo;
    },
  }),
  vu = Fe(_a),
  ah = ee({}, _a, { dataTransfer: 0 }),
  oh = Fe(ah),
  lh = ee({}, qr, { relatedTarget: 0 }),
  to = Fe(lh),
  sh = ee({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uh = Fe(sh),
  ch = ee({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fh = Fe(ch),
  dh = ee({}, Kn, { data: 0 }),
  gu = Fe(dh),
  ph = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
}
function os() {
  return vh;
}
var gh = ee({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = ph[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: os,
    charCode: function (e) {
      return e.type === "keypress" ? Ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ri(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yh = Fe(gh),
  wh = ee({}, _a, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  yu = Fe(wh),
  xh = ee({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: os,
  }),
  Sh = Fe(xh),
  kh = ee({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eh = Fe(kh),
  bh = ee({}, _a, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ch = Fe(bh),
  Th = [9, 13, 27, 32],
  ls = ht && "CompositionEvent" in window,
  vr = null;
ht && "documentMode" in document && (vr = document.documentMode);
var Ph = ht && "TextEvent" in window && !vr,
  Df = ht && (!ls || (vr && 8 < vr && 11 >= vr)),
  wu = " ",
  xu = !1;
function $f(e, t) {
  switch (e) {
    case "keyup":
      return Th.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function _h(e, t) {
  switch (e) {
    case "compositionend":
      return Vf(t);
    case "keypress":
      return t.which !== 32 ? null : ((xu = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && xu ? null : e;
    default:
      return null;
  }
}
function Oh(e, t) {
  if (xn)
    return e === "compositionend" || (!ls && $f(e, t))
      ? ((e = Ff()), (ji = is = zt = null), (xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Df && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zh[e.type] : t === "textarea";
}
function Bf(e, t, n, r) {
  wf(r),
    (t = ta(t, "onChange")),
    0 < t.length &&
      ((n = new as("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gr = null,
  Mr = null;
function Ih(e) {
  Jf(e, 0);
}
function Oa(e) {
  var t = En(e);
  if (df(t)) return e;
}
function Mh(e, t) {
  if (e === "change") return t;
}
var Hf = !1;
if (ht) {
  var no;
  if (ht) {
    var ro = "oninput" in document;
    if (!ro) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (ro = typeof ku.oninput == "function");
    }
    no = ro;
  } else no = !1;
  Hf = no && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  gr && (gr.detachEvent("onpropertychange", Uf), (Mr = gr = null));
}
function Uf(e) {
  if (e.propertyName === "value" && Oa(Mr)) {
    var t = [];
    Bf(t, Mr, e, Jl(e)), Ef(Ih, t);
  }
}
function Nh(e, t, n) {
  e === "focusin"
    ? (Eu(), (gr = t), (Mr = n), gr.attachEvent("onpropertychange", Uf))
    : e === "focusout" && Eu();
}
function Lh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Oa(Mr);
}
function Ah(e, t) {
  if (e === "click") return Oa(t);
}
function jh(e, t) {
  if (e === "input" || e === "change") return Oa(t);
}
function Rh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : Rh;
function Nr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!No.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cu(e, t) {
  var n = bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bu(n);
  }
}
function Wf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gf() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fh(e) {
  var t = Gf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ss(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Cu(n, a));
        var o = Cu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dh = ht && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Zo = null,
  yr = null,
  Jo = !1;
function Tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jo ||
    Sn == null ||
    Sn !== Xi(r) ||
    ((r = Sn),
    "selectionStart" in r && ss(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yr && Nr(yr, r)) ||
      ((yr = r),
      (r = ta(Zo, "onSelect")),
      0 < r.length &&
        ((t = new as("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function pi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: pi("Animation", "AnimationEnd"),
    animationiteration: pi("Animation", "AnimationIteration"),
    animationstart: pi("Animation", "AnimationStart"),
    transitionend: pi("Transition", "TransitionEnd"),
  },
  io = {},
  Yf = {};
ht &&
  ((Yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function za(e) {
  if (io[e]) return io[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yf) return (io[e] = t[n]);
  return e;
}
var Xf = za("animationend"),
  Qf = za("animationiteration"),
  Kf = za("animationstart"),
  qf = za("transitionend"),
  Zf = new Map(),
  Pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  Zf.set(e, t), hn(t, [e]);
}
for (var ao = 0; ao < Pu.length; ao++) {
  var oo = Pu[ao],
    $h = oo.toLowerCase(),
    Vh = oo[0].toUpperCase() + oo.slice(1);
  Gt($h, "on" + Vh);
}
Gt(Xf, "onAnimationEnd");
Gt(Qf, "onAnimationIteration");
Gt(Kf, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(qf, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $m(r, t, void 0, e), (e.currentTarget = null);
}
function Jf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), s !== a && i.isPropagationStopped())) break e;
          _u(i, l, c), (a = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (s = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            s !== a && i.isPropagationStopped())
          )
            break e;
          _u(i, l, c), (a = s);
        }
    }
  }
  if (Ki) throw ((e = Xo), (Ki = !1), (Xo = null), e);
}
function Y(e, t) {
  var n = t[il];
  n === void 0 && (n = t[il] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ed(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
  var r = 0;
  t && (r |= 4), ed(n, e, r, t);
}
var mi = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[mi]) {
    (e[mi] = !0),
      lf.forEach(function (n) {
        n !== "selectionchange" && (Bh.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mi] || ((t[mi] = !0), lo("selectionchange", !1, t));
  }
}
function ed(e, t, n, r) {
  switch (Rf(t)) {
    case 1:
      var i = nh;
      break;
    case 4:
      i = rh;
      break;
    default:
      i = rs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Yo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function so(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Jt(l)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ef(function () {
    var c = a,
      f = Jl(n),
      p = [];
    e: {
      var h = Zf.get(e);
      if (h !== void 0) {
        var v = as,
          g = e;
        switch (e) {
          case "keypress":
            if (Ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = yh;
            break;
          case "focusin":
            (g = "focus"), (v = to);
            break;
          case "focusout":
            (g = "blur"), (v = to);
            break;
          case "beforeblur":
          case "afterblur":
            v = to;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = oh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sh;
            break;
          case Xf:
          case Qf:
          case Kf:
            v = uh;
            break;
          case qf:
            v = Eh;
            break;
          case "scroll":
            v = ih;
            break;
          case "wheel":
            v = Ch;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = yu;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          u = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              u !== null && ((w = _r(d, u)), w != null && y.push(Ar(d, w, m)))),
            S)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((h = new v(h, g, null, n, f)), p.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Wo &&
            (g = n.relatedTarget || n.fromElement) &&
            (Jt(g) || g[vt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = c),
              (g = g ? Jt(g) : null),
              g !== null &&
                ((S = vn(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = c)),
          v !== g)
        ) {
          if (
            ((y = vu),
            (w = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = yu),
              (w = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (S = v == null ? h : En(v)),
            (m = g == null ? h : En(g)),
            (h = new y(w, d + "leave", v, n, f)),
            (h.target = S),
            (h.relatedTarget = m),
            (w = null),
            Jt(f) === c &&
              ((y = new y(u, d + "enter", g, n, f)),
              (y.target = m),
              (y.relatedTarget = S),
              (w = y)),
            (S = w),
            v && g)
          )
            t: {
              for (y = v, u = g, d = 0, m = y; m; m = gn(m)) d++;
              for (m = 0, w = u; w; w = gn(w)) m++;
              for (; 0 < d - m; ) (y = gn(y)), d--;
              for (; 0 < m - d; ) (u = gn(u)), m--;
              for (; d--; ) {
                if (y === u || (u !== null && y === u.alternate)) break t;
                (y = gn(y)), (u = gn(u));
              }
              y = null;
            }
          else y = null;
          v !== null && Ou(p, h, v, y, !1),
            g !== null && S !== null && Ou(p, S, g, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? En(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var x = Mh;
        else if (Su(h))
          if (Hf) x = jh;
          else {
            x = Lh;
            var E = Nh;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = Ah);
        if (x && (x = x(e, c))) {
          Bf(p, x, n, f);
          break e;
        }
        E && E(e, h, c),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            $o(h, "number", h.value);
      }
      switch (((E = c ? En(c) : window), e)) {
        case "focusin":
          (Su(E) || E.contentEditable === "true") &&
            ((Sn = E), (Zo = c), (yr = null));
          break;
        case "focusout":
          yr = Zo = Sn = null;
          break;
        case "mousedown":
          Jo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Jo = !1), Tu(p, n, f);
          break;
        case "selectionchange":
          if (Dh) break;
        case "keydown":
        case "keyup":
          Tu(p, n, f);
      }
      var P;
      if (ls)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        xn
          ? $f(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Df &&
          n.locale !== "ko" &&
          (xn || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && xn && (P = Ff())
            : ((zt = f),
              (is = "value" in zt ? zt.value : zt.textContent),
              (xn = !0))),
        (E = ta(c, b)),
        0 < E.length &&
          ((b = new gu(b, e, null, n, f)),
          p.push({ event: b, listeners: E }),
          P ? (b.data = P) : ((P = Vf(n)), P !== null && (b.data = P)))),
        (P = Ph ? _h(e, n) : Oh(e, n)) &&
          ((c = ta(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new gu("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: c }),
            (f.data = P)));
    }
    Jf(p, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ta(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = _r(e, n)),
      a != null && r.unshift(Ar(e, a, i)),
      (a = _r(e, t)),
      a != null && r.push(Ar(e, a, i))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      c = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((s = _r(n, a)), s != null && o.unshift(Ar(n, s, l)))
        : i || ((s = _r(n, a)), s != null && o.push(Ar(n, s, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Hh = /\r\n?/g,
  Uh = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hh,
      `
`
    )
    .replace(Uh, "");
}
function hi(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(I(425));
}
function na() {}
var el = null,
  tl = null;
function nl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rl = typeof setTimeout == "function" ? setTimeout : void 0,
  Wh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  Gh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
      ? function (e) {
          return Iu.resolve(null).then(e).catch(Yh);
        }
      : rl;
function Yh(e) {
  setTimeout(function () {
    throw e;
  });
}
function uo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ir(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + qn,
  jr = "__reactProps$" + qn,
  vt = "__reactContainer$" + qn,
  il = "__reactEvents$" + qn,
  Xh = "__reactListeners$" + qn,
  Qh = "__reactHandles$" + qn;
function Jt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[it] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Ia(e) {
  return e[jr] || null;
}
var al = [],
  bn = -1;
function Yt(e) {
  return { current: e };
}
function Q(e) {
  0 > bn || ((e.current = al[bn]), (al[bn] = null), bn--);
}
function W(e, t) {
  bn++, (al[bn] = e.current), (e.current = t);
}
var Bt = {},
  xe = Yt(Bt),
  _e = Yt(!1),
  ln = Bt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function ra() {
  Q(_e), Q(xe);
}
function Nu(e, t, n) {
  if (xe.current !== Bt) throw Error(I(168));
  W(xe, t), W(_e, n);
}
function td(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(I(108, Nm(e) || "Unknown", i));
  return ee({}, n, r);
}
function ia(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (ln = xe.current),
    W(xe, e),
    W(_e, _e.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = td(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(_e),
      Q(xe),
      W(xe, e))
    : Q(_e),
    W(_e, n);
}
var ft = null,
  Ma = !1,
  co = !1;
function nd(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
function Kh(e) {
  (Ma = !0), nd(e);
}
function Xt() {
  if (!co && ft !== null) {
    co = !0;
    var e = 0,
      t = U;
    try {
      var n = ft;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ft = null), (Ma = !1);
    } catch (i) {
      throw (ft !== null && (ft = ft.slice(e + 1)), Pf(es, Xt), i);
    } finally {
      (U = t), (co = !1);
    }
  }
  return null;
}
var Cn = [],
  Tn = 0,
  aa = null,
  oa = 0,
  Ve = [],
  Be = 0,
  sn = null,
  dt = 1,
  pt = "";
function qt(e, t) {
  (Cn[Tn++] = oa), (Cn[Tn++] = aa), (aa = e), (oa = t);
}
function rd(e, t, n) {
  (Ve[Be++] = dt), (Ve[Be++] = pt), (Ve[Be++] = sn), (sn = e);
  var r = dt;
  e = pt;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Ze(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (dt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (pt = a + e);
  } else (dt = (1 << a) | (n << i) | r), (pt = e);
}
function us(e) {
  e.return !== null && (qt(e, 1), rd(e, 1, 0));
}
function cs(e) {
  for (; e === aa; )
    (aa = Cn[--Tn]), (Cn[Tn] = null), (oa = Cn[--Tn]), (Cn[Tn] = null);
  for (; e === sn; )
    (sn = Ve[--Be]),
      (Ve[Be] = null),
      (pt = Ve[--Be]),
      (Ve[Be] = null),
      (dt = Ve[--Be]),
      (Ve[Be] = null);
}
var Ae = null,
  Le = null,
  q = !1,
  Ke = null;
function id(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Le = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: dt, overflow: pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ol(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ll(e) {
  if (q) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (ol(e)) throw Error(I(418));
        t = jt(n.nextSibling);
        var r = Ae;
        t && Au(e, t)
          ? id(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Ae = e));
      }
    } else {
      if (ol(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Ae = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function vi(e) {
  if (e !== Ae) return !1;
  if (!q) return ju(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !nl(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (ol(e)) throw (ad(), Error(I(418)));
    for (; t; ) id(e, t), (t = jt(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ae ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = Le; e; ) e = jt(e.nextSibling);
}
function Hn() {
  (Le = Ae = null), (q = !1);
}
function fs(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var qh = kt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ru(e) {
  var t = e._init;
  return t(e._payload);
}
function od(e) {
  function t(u, d) {
    if (e) {
      var m = u.deletions;
      m === null ? ((u.deletions = [d]), (u.flags |= 16)) : m.push(d);
    }
  }
  function n(u, d) {
    if (!e) return null;
    for (; d !== null; ) t(u, d), (d = d.sibling);
    return null;
  }
  function r(u, d) {
    for (u = new Map(); d !== null; )
      d.key !== null ? u.set(d.key, d) : u.set(d.index, d), (d = d.sibling);
    return u;
  }
  function i(u, d) {
    return (u = $t(u, d)), (u.index = 0), (u.sibling = null), u;
  }
  function a(u, d, m) {
    return (
      (u.index = m),
      e
        ? ((m = u.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((u.flags |= 2), d) : m)
            : ((u.flags |= 2), d))
        : ((u.flags |= 1048576), d)
    );
  }
  function o(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function l(u, d, m, w) {
    return d === null || d.tag !== 6
      ? ((d = yo(m, u.mode, w)), (d.return = u), d)
      : ((d = i(d, m)), (d.return = u), d);
  }
  function s(u, d, m, w) {
    var x = m.type;
    return x === wn
      ? f(u, d, m.props.children, w, m.key)
      : d !== null &&
        (d.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Tt &&
            Ru(x) === d.type))
      ? ((w = i(d, m.props)), (w.ref = ar(u, d, m)), (w.return = u), w)
      : ((w = Ui(m.type, m.key, m.props, null, u.mode, w)),
        (w.ref = ar(u, d, m)),
        (w.return = u),
        w);
  }
  function c(u, d, m, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = wo(m, u.mode, w)), (d.return = u), d)
      : ((d = i(d, m.children || [])), (d.return = u), d);
  }
  function f(u, d, m, w, x) {
    return d === null || d.tag !== 7
      ? ((d = on(m, u.mode, w, x)), (d.return = u), d)
      : ((d = i(d, m)), (d.return = u), d);
  }
  function p(u, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = yo("" + d, u.mode, m)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case oi:
          return (
            (m = Ui(d.type, d.key, d.props, null, u.mode, m)),
            (m.ref = ar(u, null, d)),
            (m.return = u),
            m
          );
        case yn:
          return (d = wo(d, u.mode, m)), (d.return = u), d;
        case Tt:
          var w = d._init;
          return p(u, w(d._payload), m);
      }
      if (cr(d) || er(d))
        return (d = on(d, u.mode, m, null)), (d.return = u), d;
      gi(u, d);
    }
    return null;
  }
  function h(u, d, m, w) {
    var x = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : l(u, d, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case oi:
          return m.key === x ? s(u, d, m, w) : null;
        case yn:
          return m.key === x ? c(u, d, m, w) : null;
        case Tt:
          return (x = m._init), h(u, d, x(m._payload), w);
      }
      if (cr(m) || er(m)) return x !== null ? null : f(u, d, m, w, null);
      gi(u, m);
    }
    return null;
  }
  function v(u, d, m, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (u = u.get(m) || null), l(d, u, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case oi:
          return (u = u.get(w.key === null ? m : w.key) || null), s(d, u, w, x);
        case yn:
          return (u = u.get(w.key === null ? m : w.key) || null), c(d, u, w, x);
        case Tt:
          var E = w._init;
          return v(u, d, m, E(w._payload), x);
      }
      if (cr(w) || er(w)) return (u = u.get(m) || null), f(d, u, w, x, null);
      gi(d, w);
    }
    return null;
  }
  function g(u, d, m, w) {
    for (
      var x = null, E = null, P = d, b = (d = 0), _ = null;
      P !== null && b < m.length;
      b++
    ) {
      P.index > b ? ((_ = P), (P = null)) : (_ = P.sibling);
      var k = h(u, P, m[b], w);
      if (k === null) {
        P === null && (P = _);
        break;
      }
      e && P && k.alternate === null && t(u, P),
        (d = a(k, d, b)),
        E === null ? (x = k) : (E.sibling = k),
        (E = k),
        (P = _);
    }
    if (b === m.length) return n(u, P), q && qt(u, b), x;
    if (P === null) {
      for (; b < m.length; b++)
        (P = p(u, m[b], w)),
          P !== null &&
            ((d = a(P, d, b)), E === null ? (x = P) : (E.sibling = P), (E = P));
      return q && qt(u, b), x;
    }
    for (P = r(u, P); b < m.length; b++)
      (_ = v(P, u, b, m[b], w)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? b : _.key),
          (d = a(_, d, b)),
          E === null ? (x = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        P.forEach(function (C) {
          return t(u, C);
        }),
      q && qt(u, b),
      x
    );
  }
  function y(u, d, m, w) {
    var x = er(m);
    if (typeof x != "function") throw Error(I(150));
    if (((m = x.call(m)), m == null)) throw Error(I(151));
    for (
      var E = (x = null), P = d, b = (d = 0), _ = null, k = m.next();
      P !== null && !k.done;
      b++, k = m.next()
    ) {
      P.index > b ? ((_ = P), (P = null)) : (_ = P.sibling);
      var C = h(u, P, k.value, w);
      if (C === null) {
        P === null && (P = _);
        break;
      }
      e && P && C.alternate === null && t(u, P),
        (d = a(C, d, b)),
        E === null ? (x = C) : (E.sibling = C),
        (E = C),
        (P = _);
    }
    if (k.done) return n(u, P), q && qt(u, b), x;
    if (P === null) {
      for (; !k.done; b++, k = m.next())
        (k = p(u, k.value, w)),
          k !== null &&
            ((d = a(k, d, b)), E === null ? (x = k) : (E.sibling = k), (E = k));
      return q && qt(u, b), x;
    }
    for (P = r(u, P); !k.done; b++, k = m.next())
      (k = v(P, u, b, k.value, w)),
        k !== null &&
          (e && k.alternate !== null && P.delete(k.key === null ? b : k.key),
          (d = a(k, d, b)),
          E === null ? (x = k) : (E.sibling = k),
          (E = k));
    return (
      e &&
        P.forEach(function (O) {
          return t(u, O);
        }),
      q && qt(u, b),
      x
    );
  }
  function S(u, d, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === wn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case oi:
          e: {
            for (var x = m.key, E = d; E !== null; ) {
              if (E.key === x) {
                if (((x = m.type), x === wn)) {
                  if (E.tag === 7) {
                    n(u, E.sibling),
                      (d = i(E, m.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Tt &&
                    Ru(x) === E.type)
                ) {
                  n(u, E.sibling),
                    (d = i(E, m.props)),
                    (d.ref = ar(u, E, m)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, E);
                break;
              } else t(u, E);
              E = E.sibling;
            }
            m.type === wn
              ? ((d = on(m.props.children, u.mode, w, m.key)),
                (d.return = u),
                (u = d))
              : ((w = Ui(m.type, m.key, m.props, null, u.mode, w)),
                (w.ref = ar(u, d, m)),
                (w.return = u),
                (u = w));
          }
          return o(u);
        case yn:
          e: {
            for (E = m.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(u, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = u),
                    (u = d);
                  break e;
                } else {
                  n(u, d);
                  break;
                }
              else t(u, d);
              d = d.sibling;
            }
            (d = wo(m, u.mode, w)), (d.return = u), (u = d);
          }
          return o(u);
        case Tt:
          return (E = m._init), S(u, d, E(m._payload), w);
      }
      if (cr(m)) return g(u, d, m, w);
      if (er(m)) return y(u, d, m, w);
      gi(u, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = i(d, m)), (d.return = u), (u = d))
          : (n(u, d), (d = yo(m, u.mode, w)), (d.return = u), (u = d)),
        o(u))
      : n(u, d);
  }
  return S;
}
var Un = od(!0),
  ld = od(!1),
  la = Yt(null),
  sa = null,
  Pn = null,
  ds = null;
function ps() {
  ds = Pn = sa = null;
}
function ms(e) {
  var t = la.current;
  Q(la), (e._currentValue = t);
}
function sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Rn(e, t) {
  (sa = e),
    (ds = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (ds !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (sa === null) throw Error(I(308));
      (Pn = e), (sa.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var en = null;
function hs(e) {
  en === null ? (en = [e]) : en.push(e);
}
function sd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), hs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function vs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), hs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Fi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ts(e, n);
  }
}
function Fu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ua(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      c = s.next;
    (s.next = null), o === null ? (a = c) : (o.next = c), (o = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = c) : (l.next = c),
        (f.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var p = i.baseState;
    (o = 0), (f = c = s = null), (l = a);
    do {
      var h = l.lane,
        v = l.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            y = l;
          switch (((h = t), (v = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                p = g.call(v, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(v, p, h) : g),
                h == null)
              )
                break e;
              p = ee({}, p, h);
              break e;
            case 2:
              Pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((c = f = v), (s = p)) : (f = f.next = v),
          (o |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = p),
      (i.baseState = s),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (cn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Du(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(I(191, i));
        i.call(r);
      }
    }
}
var Jr = {},
  st = Yt(Jr),
  Rr = Yt(Jr),
  Fr = Yt(Jr);
function tn(e) {
  if (e === Jr) throw Error(I(174));
  return e;
}
function gs(e, t) {
  switch ((W(Fr, t), W(Rr, e), W(st, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bo(t, e));
  }
  Q(st), W(st, t);
}
function Wn() {
  Q(st), Q(Rr), Q(Fr);
}
function cd(e) {
  tn(Fr.current);
  var t = tn(st.current),
    n = Bo(t, e.type);
  t !== n && (W(Rr, e), W(st, n));
}
function ys(e) {
  Rr.current === e && (Q(st), Q(Rr));
}
var Z = Yt(0);
function ca(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fo = [];
function ws() {
  for (var e = 0; e < fo.length; e++)
    fo[e]._workInProgressVersionPrimary = null;
  fo.length = 0;
}
var Di = kt.ReactCurrentDispatcher,
  po = kt.ReactCurrentBatchConfig,
  un = 0,
  J = null,
  se = null,
  de = null,
  fa = !1,
  wr = !1,
  Dr = 0,
  Zh = 0;
function ge() {
  throw Error(I(321));
}
function xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Ss(e, t, n, r, i, a) {
  if (
    ((un = a),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Di.current = e === null || e.memoizedState === null ? nv : rv),
    (e = n(r, i)),
    wr)
  ) {
    a = 0;
    do {
      if (((wr = !1), (Dr = 0), 25 <= a)) throw Error(I(301));
      (a += 1),
        (de = se = null),
        (t.updateQueue = null),
        (Di.current = iv),
        (e = n(r, i));
    } while (wr);
  }
  if (
    ((Di.current = da),
    (t = se !== null && se.next !== null),
    (un = 0),
    (de = se = J = null),
    (fa = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function ks() {
  var e = Dr !== 0;
  return (Dr = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (J.memoizedState = de = e) : (de = de.next = e), de;
}
function Ge() {
  if (se === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = de === null ? J.memoizedState : de.next;
  if (t !== null) (de = t), (se = e);
  else {
    if (e === null) throw Error(I(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      de === null ? (J.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mo(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      s = null,
      c = a;
    do {
      var f = c.lane;
      if ((un & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((l = s = p), (o = r)) : (s = s.next = p),
          (J.lanes |= f),
          (cn |= f);
      }
      c = c.next;
    } while (c !== null && c !== a);
    s === null ? (o = r) : (s.next = l),
      et(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (J.lanes |= a), (cn |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ho(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    et(a, t.memoizedState) || (Pe = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function fd() {}
function dd(e, t) {
  var n = J,
    r = Ge(),
    i = t(),
    a = !et(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Es(hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, md.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(I(349));
    un & 30 || pd(n, t, i);
  }
  return i;
}
function pd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function md(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vd(t) && gd(e);
}
function hd(e, t, n) {
  return n(function () {
    vd(t) && gd(e);
  });
}
function vd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function gd(e) {
  var t = gt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function $u(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $r,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tv.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function yd() {
  return Ge().memoizedState;
}
function $i(e, t, n, r) {
  var i = nt();
  (J.flags |= e),
    (i.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Na(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((a = o.destroy), r !== null && xs(r, o.deps))) {
      i.memoizedState = Vr(t, n, a, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = Vr(1 | t, n, a, r));
}
function Vu(e, t) {
  return $i(8390656, 8, e, t);
}
function Es(e, t) {
  return Na(2048, 8, e, t);
}
function wd(e, t) {
  return Na(4, 2, e, t);
}
function xd(e, t) {
  return Na(4, 4, e, t);
}
function Sd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Na(4, 4, Sd.bind(null, t, e), n)
  );
}
function bs() {}
function Ed(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cd(e, t, n) {
  return un & 21
    ? (et(n, t) || ((n = zf()), (J.lanes |= n), (cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Jh(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = po.transition;
  po.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (po.transition = r);
  }
}
function Td() {
  return Ge().memoizedState;
}
function ev(e, t, n) {
  var r = Dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    _d(t, n);
  else if (((n = sd(e, t, n, r)), n !== null)) {
    var i = ke();
    Je(n, e, r, i), Od(n, t, r);
  }
}
function tv(e, t, n) {
  var r = Dt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) _d(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), et(l, o))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), hs(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = sd(e, t, i, r)),
      n !== null && ((i = ke()), Je(n, e, r, i), Od(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function _d(e, t) {
  wr = fa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ts(e, n);
  }
}
var da = {
    readContext: We,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  nv = {
    readContext: We,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ev.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: bs,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = Jh.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = nt();
      if (q) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(I(349));
        un & 30 || pd(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Vu(hd.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Vr(9, md.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = pe.identifierPrefix;
      if (q) {
        var n = pt,
          r = dt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Dr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rv = {
    readContext: We,
    useCallback: Ed,
    useContext: We,
    useEffect: Es,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: xd,
    useMemo: bd,
    useReducer: mo,
    useRef: yd,
    useState: function () {
      return mo($r);
    },
    useDebugValue: bs,
    useDeferredValue: function (e) {
      var t = Ge();
      return Cd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = mo($r)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: dd,
    useId: Td,
    unstable_isNewReconciler: !1,
  },
  iv = {
    readContext: We,
    useCallback: Ed,
    useContext: We,
    useEffect: Es,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: xd,
    useMemo: bd,
    useReducer: ho,
    useRef: yd,
    useState: function () {
      return ho($r);
    },
    useDebugValue: bs,
    useDeferredValue: function (e) {
      var t = Ge();
      return se === null ? (t.memoizedState = e) : Cd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = ho($r)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: dd,
    useId: Td,
    unstable_isNewReconciler: !1,
  };
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var La = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Dt(e),
      a = mt(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Rt(e, a, i)),
      t !== null && (Je(t, e, i, r), Fi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Dt(e),
      a = mt(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Rt(e, a, i)),
      t !== null && (Je(t, e, i, r), Fi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Dt(e),
      i = mt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Rt(e, i, r)),
      t !== null && (Je(t, e, r, n), Fi(t, e, r));
  },
};
function Bu(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nr(n, r) || !Nr(i, a)
      : !0
  );
}
function zd(e, t, n) {
  var r = !1,
    i = Bt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = We(a))
      : ((i = Oe(t) ? ln : xe.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Bn(e, i) : Bt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = La),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && La.enqueueReplaceState(t, t.state, null);
}
function cl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), vs(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = We(a))
    : ((a = Oe(t) ? ln : xe.current), (i.context = Bn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (ul(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && La.enqueueReplaceState(i, i.state, null),
      ua(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var av = typeof WeakMap == "function" ? WeakMap : Map;
function Id(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ma || ((ma = !0), (Sl = r)), fl(e, t);
    }),
    n
  );
}
function Md(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        fl(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        fl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Uu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new av();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = wv.bind(null, e, t, n)), t.then(e, e));
}
function Wu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mt(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ov = kt.ReactCurrentOwner,
  Pe = !1;
function Se(e, t, n, r) {
  t.child = e === null ? ld(t, null, n, r) : Un(t, e.child, n, r);
}
function Yu(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Rn(t, i),
    (r = Ss(e, t, n, r, a, i)),
    (n = ks()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (q && n && us(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Ms(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Nd(e, t, a, r, i))
      : ((e = Ui(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Nr), n(o, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $t(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nd(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Nr(a, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return dl(e, t, n, r, i);
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(On, Ie),
        (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(On, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        W(On, Ie),
        (Ie |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(On, Ie),
      (Ie |= r);
  return Se(e, t, i, n), t.child;
}
function Ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function dl(e, t, n, r, i) {
  var a = Oe(n) ? ln : xe.current;
  return (
    (a = Bn(t, a)),
    Rn(t, i),
    (n = Ss(e, t, n, r, a, i)),
    (r = ks()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (q && r && us(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function Qu(e, t, n, r, i) {
  if (Oe(n)) {
    var a = !0;
    ia(t);
  } else a = !1;
  if ((Rn(t, i), t.stateNode === null))
    Vi(e, t), zd(t, n, r), cl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = We(c))
      : ((c = Oe(n) ? ln : xe.current), (c = Bn(t, c)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || s !== c) && Hu(t, o, r, c)),
      (Pt = !1);
    var h = t.memoizedState;
    (o.state = h),
      ua(t, r, o, i),
      (s = t.memoizedState),
      l !== r || h !== s || _e.current || Pt
        ? (typeof f == "function" && (ul(t, n, f, r), (s = t.memoizedState)),
          (l = Pt || Bu(t, n, l, r, h, s, c))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ud(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Xe(t.type, l)),
      (o.props = c),
      (p = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = We(s))
        : ((s = Oe(n) ? ln : xe.current), (s = Bn(t, s)));
    var v = n.getDerivedStateFromProps;
    (f =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || h !== s) && Hu(t, o, r, s)),
      (Pt = !1),
      (h = t.memoizedState),
      (o.state = h),
      ua(t, r, o, i);
    var g = t.memoizedState;
    l !== p || h !== g || _e.current || Pt
      ? (typeof v == "function" && (ul(t, n, v, r), (g = t.memoizedState)),
        (c = Pt || Bu(t, n, c, r, h, g, s) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return pl(e, t, n, r, a, i);
}
function pl(e, t, n, r, i, a) {
  Ad(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Lu(t, n, !1), yt(e, t, a);
  (r = t.stateNode), (ov.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Un(t, e.child, null, a)), (t.child = Un(t, null, l, a)))
      : Se(e, t, l, a),
    (t.memoizedState = r.state),
    i && Lu(t, n, !0),
    t.child
  );
}
function jd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Nu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Nu(e, t.context, !1),
    gs(e, t.containerInfo);
}
function Ku(e, t, n, r, i) {
  return Hn(), fs(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var ml = { dehydrated: null, treeContext: null, retryLane: 0 };
function hl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    i = Z.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(Z, i & 1),
    e === null)
  )
    return (
      ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = Ra(o, r, 0, null)),
              (e = on(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = hl(n)),
              (t.memoizedState = ml),
              e)
            : Cs(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return lv(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = $t(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = $t(l, a)) : ((a = on(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? hl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = ml),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = $t(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cs(e, t) {
  return (
    (t = Ra({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && fs(r),
    Un(t, e.child, null, n),
    (e = Cs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lv(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vo(Error(I(422)))), yi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = Ra({ mode: "visible", children: r.children }, i, 0, null)),
        (a = on(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Un(t, e.child, null, o),
        (t.child.memoizedState = hl(o)),
        (t.memoizedState = ml),
        a);
  if (!(t.mode & 1)) return yi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(I(419))), (r = vo(a, r, void 0)), yi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Pe || l)) {
    if (((r = pe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), gt(e, i), Je(r, e, i, -1));
    }
    return Is(), (r = vo(Error(I(421)))), yi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Le = jt(i.nextSibling)),
      (Ae = t),
      (q = !0),
      (Ke = null),
      e !== null &&
        ((Ve[Be++] = dt),
        (Ve[Be++] = pt),
        (Ve[Be++] = sn),
        (dt = e.id),
        (pt = e.overflow),
        (sn = t)),
      (t = Cs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sl(e.return, t, n);
}
function go(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((Se(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qu(e, n, t);
        else if (e.tag === 19) qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ca(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          go(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ca(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        go(t, !0, n, null, a);
        break;
      case "together":
        go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sv(e, t, n) {
  switch (t.tag) {
    case 3:
      jd(t), Hn();
      break;
    case 5:
      cd(t);
      break;
    case 1:
      Oe(t.type) && ia(t);
      break;
    case 4:
      gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(la, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rd(e, t, n)
          : (W(Z, Z.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      W(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ld(e, t, n);
  }
  return yt(e, t, n);
}
var Dd, vl, $d, Vd;
Dd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vl = function () {};
$d = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), tn(st.current);
    var a = null;
    switch (n) {
      case "input":
        (i = Fo(e, i)), (r = Fo(e, r)), (a = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Vo(e, i)), (r = Vo(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = na);
    }
    Ho(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Tr.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && s !== l && (s != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                l[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (a || (a = []), a.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (a = a || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Tr.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && Y("scroll", e),
                  a || l === s || (a = []))
                : (a = a || []).push(c, s));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function uv(e, t, n) {
  var r = t.pendingProps;
  switch ((cs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Oe(t.type) && ra(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        Q(_e),
        Q(xe),
        ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (bl(Ke), (Ke = null)))),
        vl(e, t),
        ye(t),
        null
      );
    case 5:
      ys(t);
      var i = tn(Fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $d(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return ye(t), null;
        }
        if (((e = tn(st.current)), vi(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[it] = t), (r[jr] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < dr.length; i++) Y(dr[i], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              ou(r, a), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              su(r, a), Y("invalid", r);
          }
          Ho(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Tr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              li(r), lu(r, a, !0);
              break;
            case "textarea":
              li(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = na);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[it] = t),
            (e[jr] = r),
            Dd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Uo(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < dr.length; i++) Y(dr[i], e);
                i = r;
                break;
              case "source":
                Y("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (i = r);
                break;
              case "details":
                Y("toggle", e), (i = r);
                break;
              case "input":
                ou(e, r), (i = Fo(e, r)), Y("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                su(e, r), (i = Vo(e, r)), Y("invalid", e);
                break;
              default:
                i = r;
            }
            Ho(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style"
                  ? yf(e, s)
                  : a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && vf(e, s))
                  : a === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Pr(e, s)
                    : typeof s == "number" && Pr(e, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Tr.hasOwnProperty(a)
                      ? s != null && a === "onScroll" && Y("scroll", e)
                      : s != null && Ql(e, a, s, o));
              }
            switch (n) {
              case "input":
                li(e), lu(e, r, !1);
                break;
              case "textarea":
                li(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Nn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = na);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = tn(Fr.current)), tn(st.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (a = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (Q(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Le !== null && t.mode & 1 && !(t.flags & 128))
          ad(), Hn(), (t.flags |= 98560), (a = !1);
        else if (((a = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(I(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(I(317));
            a[it] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (a = !1);
        } else Ke !== null && (bl(Ke), (Ke = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : Is())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Wn(), vl(e, t), e === null && Lr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return ms(t.type._context), ye(t), null;
    case 17:
      return Oe(t.type) && ra(), ye(t), null;
    case 19:
      if ((Q(Z), (a = t.memoizedState), a === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) or(a, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ca(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    or(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ae() > Yn &&
            ((t.flags |= 128), (r = !0), or(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ca(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              or(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !q)
            )
              return ye(t), null;
          } else
            2 * ae() - a.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), or(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = ae()),
          (t.sibling = null),
          (n = Z.current),
          W(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        zs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function cv(e, t) {
  switch ((cs(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && ra(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        Q(_e),
        Q(xe),
        ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ys(t), null;
    case 13:
      if ((Q(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(I(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(Z), null;
    case 4:
      return Wn(), null;
    case 10:
      return ms(t.type._context), null;
    case 22:
    case 23:
      return zs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wi = !1,
  we = !1,
  fv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function gl(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Zu = !1;
function dv(e, t) {
  if (((el = Ji), (e = Gf()), ss(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            s = -1,
            c = 0,
            f = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = o + i),
                p !== a || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++c === i && (l = o),
                h === a && ++f === r && (s = o),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = v;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (tl = { focusedElem: e, selectionRange: n }, Ji = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    S = g.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Xe(t.type, y),
                      S
                    );
                  u.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (g = Zu), (Zu = !1), g;
}
function xr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && gl(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Aa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function yl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[jr], delete t[il], delete t[Xh], delete t[Qh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = na));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling);
}
function xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xl(e, t, n), e = e.sibling; e !== null; ) xl(e, t, n), (e = e.sibling);
}
var me = null,
  Qe = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Ud(e, t, n), (n = n.sibling);
}
function Ud(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Pa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || _n(n, t);
    case 6:
      var r = me,
        i = Qe;
      (me = null),
        bt(e, t, n),
        (me = r),
        (Qe = i),
        me !== null &&
          (Qe
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (Qe
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? uo(e.parentNode, n)
              : e.nodeType === 1 && uo(e, n),
            Ir(e))
          : uo(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (i = Qe),
        (me = n.stateNode.containerInfo),
        (Qe = !0),
        bt(e, t, n),
        (me = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && gl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (_n(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ne(n, t, l);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), bt(e, t, n), (we = r))
        : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fv()),
      t.forEach(function (r) {
        var i = Sv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (me = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (me = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (me = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (me === null) throw Error(I(160));
        Ud(a, o, i), (me = null), (Qe = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (c) {
        ne(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wd(t, e), (t = t.sibling);
}
function Wd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ye(t, e), tt(e), r & 4)) {
        try {
          xr(3, e, e.return), Aa(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          xr(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      Ye(t, e), tt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (
        (Ye(t, e),
        tt(e),
        r & 512 && n !== null && _n(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Pr(i, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && a.type === "radio" && a.name != null && pf(i, a),
              Uo(l, o);
            var c = Uo(l, a);
            for (o = 0; o < s.length; o += 2) {
              var f = s[o],
                p = s[o + 1];
              f === "style"
                ? yf(i, p)
                : f === "dangerouslySetInnerHTML"
                ? vf(i, p)
                : f === "children"
                ? Pr(i, p)
                : Ql(i, f, p, c);
            }
            switch (l) {
              case "input":
                Do(i, a);
                break;
              case "textarea":
                mf(i, a);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var v = a.value;
                v != null
                  ? Nn(i, !!a.multiple, v, !1)
                  : h !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Nn(i, !!a.multiple, a.defaultValue, !0)
                      : Nn(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[jr] = a;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ye(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      Ye(t, e), tt(e);
      break;
    case 13:
      Ye(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (_s = ae())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (c = we) || f), Ye(t, e), (we = c)) : Ye(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (A = e, f = e.child; f !== null; ) {
            for (p = A = f; A !== null; ) {
              switch (((h = A), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, h, h.return);
                  break;
                case 1:
                  _n(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  _n(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    nc(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (A = v)) : nc(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (i = p.stateNode),
                  c
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = gf("display", o)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ye(t, e), tt(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      Ye(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Pr(i, ""), (r.flags &= -33));
          var a = Ju(e);
          xl(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Ju(e);
          wl(e, l, o);
          break;
        default:
          throw Error(I(161));
      }
    } catch (s) {
      ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pv(e, t, n) {
  (A = e), Gd(e);
}
function Gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || wi;
      if (!o) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || we;
        l = wi;
        var c = we;
        if (((wi = o), (we = s) && !c))
          for (A = i; A !== null; )
            (o = A),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? rc(i)
                : s !== null
                ? ((s.return = o), (A = s))
                : rc(i);
        for (; a !== null; ) (A = a), Gd(a), (a = a.sibling);
        (A = i), (wi = l), (we = c);
      }
      tc(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (A = a)) : tc(e);
  }
}
function tc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Aa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Du(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Du(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Ir(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        we || (t.flags & 512 && yl(t));
      } catch (h) {
        ne(t, t.return, h);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function nc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function rc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Aa(4, t);
          } catch (s) {
            ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ne(t, i, s);
            }
          }
          var a = t.return;
          try {
            yl(t);
          } catch (s) {
            ne(t, a, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            yl(t);
          } catch (s) {
            ne(t, o, s);
          }
      }
    } catch (s) {
      ne(t, t.return, s);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var mv = Math.ceil,
  pa = kt.ReactCurrentDispatcher,
  Ts = kt.ReactCurrentOwner,
  Ue = kt.ReactCurrentBatchConfig,
  B = 0,
  pe = null,
  le = null,
  he = 0,
  Ie = 0,
  On = Yt(0),
  ue = 0,
  Br = null,
  cn = 0,
  ja = 0,
  Ps = 0,
  Sr = null,
  Te = null,
  _s = 0,
  Yn = 1 / 0,
  ct = null,
  ma = !1,
  Sl = null,
  Ft = null,
  xi = !1,
  It = null,
  ha = 0,
  kr = 0,
  kl = null,
  Bi = -1,
  Hi = 0;
function ke() {
  return B & 6 ? ae() : Bi !== -1 ? Bi : (Bi = ae());
}
function Dt(e) {
  return e.mode & 1
    ? B & 2 && he !== 0
      ? he & -he
      : qh.transition !== null
      ? (Hi === 0 && (Hi = zf()), Hi)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < kr) throw ((kr = 0), (kl = null), Error(I(185)));
  Kr(e, n, r),
    (!(B & 2) || e !== pe) &&
      (e === pe && (!(B & 2) && (ja |= n), ue === 4 && Ot(e, he)),
      ze(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Yn = ae() + 500), Ma && Xt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  qm(e, t);
  var r = Zi(e, e === pe ? he : 0);
  if (r === 0)
    n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? Kh(ic.bind(null, e)) : nd(ic.bind(null, e)),
        Gh(function () {
          !(B & 6) && Xt();
        }),
        (n = null);
    else {
      switch (If(r)) {
        case 1:
          n = es;
          break;
        case 4:
          n = _f;
          break;
        case 16:
          n = qi;
          break;
        case 536870912:
          n = Of;
          break;
        default:
          n = qi;
      }
      n = ep(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((Bi = -1), (Hi = 0), B & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Zi(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = va(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var a = Qd();
    (pe !== e || he !== t) && ((ct = null), (Yn = ae() + 500), an(e, t));
    do
      try {
        gv();
        break;
      } catch (l) {
        Xd(e, l);
      }
    while (!0);
    ps(),
      (pa.current = a),
      (B = i),
      le !== null ? (t = 0) : ((pe = null), (he = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Qo(e)), i !== 0 && ((r = i), (t = El(e, i)))), t === 1)
    )
      throw ((n = Br), an(e, 0), Ot(e, r), ze(e, ae()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hv(i) &&
          ((t = va(e, r)),
          t === 2 && ((a = Qo(e)), a !== 0 && ((r = a), (t = El(e, a)))),
          t === 1))
      )
        throw ((n = Br), an(e, 0), Ot(e, r), ze(e, ae()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Zt(e, Te, ct);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = _s + 500 - ae()), 10 < t))
          ) {
            if (Zi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = rl(Zt.bind(null, e, Te, ct), t);
            break;
          }
          Zt(e, Te, ct);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ze(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * mv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rl(Zt.bind(null, e, Te, ct), r);
            break;
          }
          Zt(e, Te, ct);
          break;
        case 5:
          Zt(e, Te, ct);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return ze(e, ae()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function El(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = va(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && bl(t)),
    e
  );
}
function bl(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function hv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!et(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~Ps,
      t &= ~ja,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ic(e) {
  if (B & 6) throw Error(I(327));
  Fn();
  var t = Zi(e, 0);
  if (!(t & 1)) return ze(e, ae()), null;
  var n = va(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && ((t = r), (n = El(e, r)));
  }
  if (n === 1) throw ((n = Br), an(e, 0), Ot(e, t), ze(e, ae()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Te, ct),
    ze(e, ae()),
    null
  );
}
function Os(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Yn = ae() + 500), Ma && Xt());
  }
}
function fn(e) {
  It !== null && It.tag === 0 && !(B & 6) && Fn();
  var t = B;
  B |= 1;
  var n = Ue.transition,
    r = U;
  try {
    if (((Ue.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Ue.transition = n), (B = t), !(B & 6) && Xt();
  }
}
function zs() {
  (Ie = On.current), Q(On);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wh(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((cs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ra();
          break;
        case 3:
          Wn(), Q(_e), Q(xe), ws();
          break;
        case 5:
          ys(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          Q(Z);
          break;
        case 19:
          Q(Z);
          break;
        case 10:
          ms(r.type._context);
          break;
        case 22:
        case 23:
          zs();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (le = e = $t(e.current, null)),
    (he = Ie = t),
    (ue = 0),
    (Br = null),
    (Ps = ja = cn = 0),
    (Te = Sr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = le;
    try {
      if ((ps(), (Di.current = da), fa)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fa = !1;
      }
      if (
        ((un = 0),
        (de = se = J = null),
        (wr = !1),
        (Dr = 0),
        (Ts.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Br = t), (le = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Wu(o);
          if (v !== null) {
            (v.flags &= -257),
              Gu(v, o, l, a, t),
              v.mode & 1 && Uu(a, c, t),
              (t = v),
              (s = c);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Uu(a, c, t), Is();
              break e;
            }
            s = Error(I(426));
          }
        } else if (q && l.mode & 1) {
          var S = Wu(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Gu(S, o, l, a, t),
              fs(Gn(s, l));
            break e;
          }
        }
        (a = s = Gn(s, l)),
          ue !== 4 && (ue = 2),
          Sr === null ? (Sr = [a]) : Sr.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var u = Id(a, s, t);
              Fu(a, u);
              break e;
            case 1:
              l = s;
              var d = a.type,
                m = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(m))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var w = Md(a, l, t);
                Fu(a, w);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      qd(n);
    } catch (x) {
      (t = x), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qd() {
  var e = pa.current;
  return (pa.current = da), e === null ? da : e;
}
function Is() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    pe === null || (!(cn & 268435455) && !(ja & 268435455)) || Ot(pe, he);
}
function va(e, t) {
  var n = B;
  B |= 2;
  var r = Qd();
  (pe !== e || he !== t) && ((ct = null), an(e, t));
  do
    try {
      vv();
      break;
    } catch (i) {
      Xd(e, i);
    }
  while (!0);
  if ((ps(), (B = n), (pa.current = r), le !== null)) throw Error(I(261));
  return (pe = null), (he = 0), ue;
}
function vv() {
  for (; le !== null; ) Kd(le);
}
function gv() {
  for (; le !== null && !Bm(); ) Kd(le);
}
function Kd(e) {
  var t = Jd(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? qd(e) : (le = t),
    (Ts.current = null);
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cv(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = uv(n, t, Ie)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Zt(e, t, n) {
  var r = U,
    i = Ue.transition;
  try {
    (Ue.transition = null), (U = 1), yv(e, t, n, r);
  } finally {
    (Ue.transition = i), (U = r);
  }
  return null;
}
function yv(e, t, n, r) {
  do Fn();
  while (It !== null);
  if (B & 6) throw Error(I(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Zm(e, a),
    e === pe && ((le = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xi ||
      ((xi = !0),
      ep(qi, function () {
        return Fn(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = Ue.transition), (Ue.transition = null);
    var o = U;
    U = 1;
    var l = B;
    (B |= 4),
      (Ts.current = null),
      dv(e, n),
      Wd(n, e),
      Fh(tl),
      (Ji = !!el),
      (tl = el = null),
      (e.current = n),
      pv(n),
      Hm(),
      (B = l),
      (U = o),
      (Ue.transition = a);
  } else e.current = n;
  if (
    (xi && ((xi = !1), (It = e), (ha = i)),
    (a = e.pendingLanes),
    a === 0 && (Ft = null),
    Gm(n.stateNode),
    ze(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ma) throw ((ma = !1), (e = Sl), (Sl = null), e);
  return (
    ha & 1 && e.tag !== 0 && Fn(),
    (a = e.pendingLanes),
    a & 1 ? (e === kl ? kr++ : ((kr = 0), (kl = e))) : (kr = 0),
    Xt(),
    null
  );
}
function Fn() {
  if (It !== null) {
    var e = If(ha),
      t = Ue.transition,
      n = U;
    try {
      if (((Ue.transition = null), (U = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (ha = 0), B & 6)) throw Error(I(331));
        var i = B;
        for (B |= 4, A = e.current; A !== null; ) {
          var a = A,
            o = a.child;
          if (A.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var c = l[s];
                for (A = c; A !== null; ) {
                  var f = A;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, f, a);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (A = p);
                  else
                    for (; A !== null; ) {
                      f = A;
                      var h = f.sibling,
                        v = f.return;
                      if ((Bd(f), f === c)) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (A = h);
                        break;
                      }
                      A = v;
                    }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              A = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (A = o);
          else
            e: for (; A !== null; ) {
              if (((a = A), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xr(9, a, a.return);
                }
              var u = a.sibling;
              if (u !== null) {
                (u.return = a.return), (A = u);
                break e;
              }
              A = a.return;
            }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          o = A;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (A = m);
          else
            e: for (o = d; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Aa(9, l);
                  }
                } catch (x) {
                  ne(l, l.return, x);
                }
              if (l === o) {
                A = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (A = w);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((B = i), Xt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Pa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Ue.transition = t);
    }
  }
  return !1;
}
function ac(e, t, n) {
  (t = Gn(n, t)),
    (t = Id(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = ke()),
    e !== null && (Kr(e, 1, t), ze(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) ac(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ac(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = Md(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = ke()),
            t !== null && (Kr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (ue === 4 || (ue === 3 && (he & 130023424) === he && 500 > ae() - _s)
        ? an(e, 0)
        : (Ps |= n)),
    ze(e, t);
}
function Zd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = ke();
  (e = gt(e, t)), e !== null && (Kr(e, t, n), ze(e, n));
}
function xv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zd(e, n);
}
function Sv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Zd(e, n);
}
var Jd;
Jd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), sv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), q && t.flags & 1048576 && rd(t, oa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vi(e, t), (e = t.pendingProps);
      var i = Bn(t, xe.current);
      Rn(t, n), (i = Ss(null, t, r, e, i, n));
      var a = ks();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((a = !0), ia(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            vs(t),
            (i.updater = La),
            (t.stateNode = i),
            (i._reactInternals = t),
            cl(t, r, e, n),
            (t = pl(null, t, r, !0, a, n)))
          : ((t.tag = 0), q && a && us(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ev(r)),
          (e = Xe(r, e)),
          i)
        ) {
          case 0:
            t = dl(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        dl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Qu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((jd(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          ud(e, t),
          ua(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Gn(Error(I(423)), t)), (t = Ku(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gn(Error(I(424)), t)), (t = Ku(e, t, r, n, i));
            break e;
          } else
            for (
              Le = jt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                q = !0,
                Ke = null,
                n = ld(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cd(t),
        e === null && ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        nl(r, i) ? (o = null) : a !== null && nl(r, a) && (t.flags |= 32),
        Ad(e, t),
        Se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ll(t), null;
    case 13:
      return Rd(e, t, n);
    case 4:
      return (
        gs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Yu(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          W(la, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (et(a.value, o)) {
            if (a.children === i.children && !_e.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (a.tag === 1) {
                      (s = mt(-1, n & -n)), (s.tag = 2);
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (c.pending = s);
                      }
                    }
                    (a.lanes |= n),
                      (s = a.alternate),
                      s !== null && (s.lanes |= n),
                      sl(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(I(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  sl(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Rn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xe(r, t.pendingProps)),
        (i = Xe(r.type, i)),
        Xu(e, t, r, i, n)
      );
    case 15:
      return Nd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Vi(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), ia(t)) : (e = !1),
        Rn(t, n),
        zd(t, r, i),
        cl(t, r, i, n),
        pl(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return Ld(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function ep(e, t) {
  return Pf(e, t);
}
function kv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new kv(e, t, n, r);
}
function Ms(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ev(e) {
  if (typeof e == "function") return Ms(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ql)) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ui(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ms(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case wn:
        return on(n.children, i, a, t);
      case Kl:
        (o = 8), (i |= 8);
        break;
      case Lo:
        return (
          (e = He(12, n, t, i | 2)), (e.elementType = Lo), (e.lanes = a), e
        );
      case Ao:
        return (e = He(13, n, t, i)), (e.elementType = Ao), (e.lanes = a), e;
      case jo:
        return (e = He(19, n, t, i)), (e.elementType = jo), (e.lanes = a), e;
      case cf:
        return Ra(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sf:
              o = 10;
              break e;
            case uf:
              o = 9;
              break e;
            case ql:
              o = 11;
              break e;
            case Zl:
              o = 14;
              break e;
            case Tt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function on(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function Ra(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = cf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yo(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function wo(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Za(0)),
    (this.expirationTimes = Za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ns(e, t, n, r, i, a, o, l, s) {
  return (
    (e = new bv(e, t, n, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = He(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vs(a),
    e
  );
}
function Cv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return td(e, n, t);
  }
  return t;
}
function np(e, t, n, r, i, a, o, l, s) {
  return (
    (e = Ns(n, r, !0, e, i, a, o, l, s)),
    (e.context = tp(null)),
    (n = e.current),
    (r = ke()),
    (i = Dt(n)),
    (a = mt(r, i)),
    (a.callback = t ?? null),
    Rt(n, a, i),
    (e.current.lanes = i),
    Kr(e, i, r),
    ze(e, r),
    e
  );
}
function Fa(e, t, n, r) {
  var i = t.current,
    a = ke(),
    o = Dt(i);
  return (
    (n = tp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(i, t, o)),
    e !== null && (Je(e, i, o, a), Fi(e, i, o)),
    o
  );
}
function ga(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ls(e, t) {
  oc(e, t), (e = e.alternate) && oc(e, t);
}
function Tv() {
  return null;
}
var rp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function As(e) {
  this._internalRoot = e;
}
Da.prototype.render = As.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Fa(e, t, null, null);
};
Da.prototype.unmount = As.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      Fa(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function Da(e) {
  this._internalRoot = e;
}
Da.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++);
    _t.splice(n, 0, e), n === 0 && jf(e);
  }
};
function js(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $a(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lc() {}
function Pv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = ga(o);
        a.call(c);
      };
    }
    var o = np(t, r, e, 0, null, !1, !1, "", lc);
    return (
      (e._reactRootContainer = o),
      (e[vt] = o.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = ga(s);
      l.call(c);
    };
  }
  var s = Ns(e, 0, !1, null, null, !1, !1, "", lc);
  return (
    (e._reactRootContainer = s),
    (e[vt] = s.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      Fa(t, s, n, r);
    }),
    s
  );
}
function Va(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = ga(o);
        l.call(s);
      };
    }
    Fa(t, o, e, i);
  } else o = Pv(n, t, e, i, r);
  return ga(o);
}
Mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 &&
          (ts(t, n | 1), ze(t, ae()), !(B & 6) && ((Yn = ae() + 500), Xt()));
      }
      break;
    case 13:
      fn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = ke();
          Je(r, e, 1, i);
        }
      }),
        Ls(e, 1);
  }
};
ns = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ke();
      Je(t, e, 134217728, n);
    }
    Ls(e, 134217728);
  }
};
Nf = function (e) {
  if (e.tag === 13) {
    var t = Dt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ke();
      Je(n, e, t, r);
    }
    Ls(e, t);
  }
};
Lf = function () {
  return U;
};
Af = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Go = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Do(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ia(r);
            if (!i) throw Error(I(90));
            df(r), Do(r, i);
          }
        }
      }
      break;
    case "textarea":
      mf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nn(e, !!n.multiple, t, !1);
  }
};
Sf = Os;
kf = fn;
var _v = { usingClientEntryPoint: !1, Events: [Zr, En, Ia, wf, xf, Os] },
  lr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ov = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || Tv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (Pa = Si.inject(Ov)), (lt = Si);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _v;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!js(t)) throw Error(I(200));
  return Cv(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!js(e)) throw Error(I(299));
  var n = !1,
    r = "",
    i = rp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ns(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    new As(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = Cf(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return fn(e);
};
Re.hydrate = function (e, t, n) {
  if (!$a(t)) throw Error(I(200));
  return Va(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!js(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = rp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = np(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[vt] = t.current),
    Lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Da(t);
};
Re.render = function (e, t, n) {
  if (!$a(t)) throw Error(I(200));
  return Va(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!$a(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (fn(function () {
        Va(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = Os;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$a(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Va(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function ip() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip);
    } catch (e) {
      console.error(e);
    }
}
ip(), (rf.exports = Re);
var zv = rf.exports,
  sc = zv;
(Mo.createRoot = sc.createRoot), (Mo.hydrateRoot = sc.hydrateRoot);
var ap = {
    prefix: "fas",
    iconName: "circle-chevron-right",
    icon: [
      512,
      512,
      ["chevron-circle-right"],
      "f138",
      "M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z",
    ],
  },
  Iv = {
    prefix: "fas",
    iconName: "volume-high",
    icon: [
      640,
      512,
      [128266, "volume-up"],
      "f028",
      "M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z",
    ],
  },
  op = Iv,
  Mv = {
    prefix: "fas",
    iconName: "play",
    icon: [
      384,
      512,
      [9654],
      "f04b",
      "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
    ],
  },
  Nv = {
    prefix: "fas",
    iconName: "volume-xmark",
    icon: [
      576,
      512,
      ["volume-mute", "volume-times"],
      "f6a9",
      "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
    ],
  },
  lp = Nv,
  Lv = {
    prefix: "fas",
    iconName: "xmark",
    icon: [
      384,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        "close",
        "multiply",
        "remove",
        "times",
      ],
      "f00d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    ],
  },
  sp = Lv,
  up = {
    prefix: "fas",
    iconName: "circle-chevron-left",
    icon: [
      512,
      512,
      ["chevron-circle-left"],
      "f137",
      "M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z",
    ],
  };
function uc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uc(Object(n), !0).forEach(function (r) {
          ce(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ya(e) {
  "@babel/helpers - typeof";
  return (
    (ya =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ya(e)
  );
}
function Av(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jv(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Rv(e, t, n) {
  return (
    t && jv(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ce(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Rs(e, t) {
  return Dv(e) || Vv(e, t) || cp(e, t) || Hv();
}
function ei(e) {
  return Fv(e) || $v(e) || cp(e) || Bv();
}
function Fv(e) {
  if (Array.isArray(e)) return Cl(e);
}
function Dv(e) {
  if (Array.isArray(e)) return e;
}
function $v(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Vv(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (a = !0), (l = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function cp(e, t) {
  if (e) {
    if (typeof e == "string") return Cl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cl(e, t);
  }
}
function Cl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cc = function () {},
  Fs = {},
  fp = {},
  dp = null,
  pp = { mark: cc, measure: cc };
try {
  typeof window < "u" && (Fs = window),
    typeof document < "u" && (fp = document),
    typeof MutationObserver < "u" && (dp = MutationObserver),
    typeof performance < "u" && (pp = performance);
} catch {}
var Uv = Fs.navigator || {},
  fc = Uv.userAgent,
  dc = fc === void 0 ? "" : fc,
  Ht = Fs,
  K = fp,
  pc = dp,
  ki = pp;
Ht.document;
var Et =
    !!K.documentElement &&
    !!K.head &&
    typeof K.addEventListener == "function" &&
    typeof K.createElement == "function",
  mp = ~dc.indexOf("MSIE") || ~dc.indexOf("Trident/"),
  Ei,
  bi,
  Ci,
  Ti,
  Pi,
  wt = "___FONT_AWESOME___",
  Tl = 16,
  hp = "fa",
  vp = "svg-inline--fa",
  dn = "data-fa-i2svg",
  Pl = "data-fa-pseudo-element",
  Wv = "data-fa-pseudo-element-pending",
  Ds = "data-prefix",
  $s = "data-icon",
  mc = "fontawesome-i2svg",
  Gv = "async",
  Yv = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  gp = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  X = "classic",
  re = "sharp",
  Vs = [X, re];
function ti(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[X];
    },
  });
}
var Hr = ti(
    ((Ei = {}),
    ce(Ei, X, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    ce(Ei, re, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    Ei)
  ),
  Ur = ti(
    ((bi = {}),
    ce(bi, X, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    ce(bi, re, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    bi)
  ),
  Wr = ti(
    ((Ci = {}),
    ce(Ci, X, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    ce(Ci, re, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    Ci)
  ),
  Xv = ti(
    ((Ti = {}),
    ce(Ti, X, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    ce(Ti, re, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    Ti)
  ),
  Qv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  yp = "fa-layers-text",
  Kv =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  qv = ti(
    ((Pi = {}),
    ce(Pi, X, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    ce(Pi, re, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    Pi)
  ),
  wp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Zv = wp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Jv = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  nn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Gr = new Set();
Object.keys(Ur[X]).map(Gr.add.bind(Gr));
Object.keys(Ur[re]).map(Gr.add.bind(Gr));
var eg = []
    .concat(Vs, ei(Gr), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      nn.GROUP,
      nn.SWAP_OPACITY,
      nn.PRIMARY,
      nn.SECONDARY,
    ])
    .concat(
      wp.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      Zv.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Er = Ht.FontAwesomeConfig || {};
function tg(e) {
  var t = K.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function ng(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (K && typeof K.querySelector == "function") {
  var rg = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  rg.forEach(function (e) {
    var t = Rs(e, 2),
      n = t[0],
      r = t[1],
      i = ng(tg(n));
    i != null && (Er[r] = i);
  });
}
var xp = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: hp,
  replacementClass: vp,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Er.familyPrefix && (Er.cssPrefix = Er.familyPrefix);
var Xn = L(L({}, xp), Er);
Xn.autoReplaceSvg || (Xn.observeMutations = !1);
var R = {};
Object.keys(xp).forEach(function (e) {
  Object.defineProperty(R, e, {
    enumerable: !0,
    set: function (n) {
      (Xn[e] = n),
        br.forEach(function (r) {
          return r(R);
        });
    },
    get: function () {
      return Xn[e];
    },
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Xn.cssPrefix = t),
      br.forEach(function (n) {
        return n(R);
      });
  },
  get: function () {
    return Xn.cssPrefix;
  },
});
Ht.FontAwesomeConfig = R;
var br = [];
function ig(e) {
  return (
    br.push(e),
    function () {
      br.splice(br.indexOf(e), 1);
    }
  );
}
var Ct = Tl,
  at = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function ag(e) {
  if (!(!e || !Et)) {
    var t = K.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = K.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return K.head.insertBefore(t, r), e;
  }
}
var og = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Yr() {
  for (var e = 12, t = ""; e-- > 0; ) t += og[(Math.random() * 62) | 0];
  return t;
}
function Zn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Bs(e) {
  return e.classList
    ? Zn(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function Sp(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function lg(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(Sp(e[n]), '" ');
    }, "")
    .trim();
}
function Ba(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Hs(e) {
  return (
    e.size !== at.size ||
    e.x !== at.x ||
    e.y !== at.y ||
    e.rotate !== at.rotate ||
    e.flipX ||
    e.flipY
  );
}
function sg(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(a, " ").concat(o, " ").concat(l) },
    c = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: s, path: c };
}
function ug(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Tl : n,
    i = e.height,
    a = i === void 0 ? Tl : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    s = "";
  return (
    l && mp
      ? (s += "translate("
          .concat(t.x / Ct - r / 2, "em, ")
          .concat(t.y / Ct - a / 2, "em) "))
      : l
      ? (s += "translate(calc(-50% + "
          .concat(t.x / Ct, "em), calc(-50% + ")
          .concat(t.y / Ct, "em)) "))
      : (s += "translate(".concat(t.x / Ct, "em, ").concat(t.y / Ct, "em) ")),
    (s += "scale("
      .concat((t.size / Ct) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Ct) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var cg = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function kp() {
  var e = hp,
    t = vp,
    n = R.cssPrefix,
    r = R.replacementClass,
    i = cg;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(a, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return i;
}
var hc = !1;
function xo() {
  R.autoAddCss && !hc && (ag(kp()), (hc = !0));
}
var fg = {
    mixout: function () {
      return { dom: { css: kp, insertCss: xo } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          xo();
        },
        beforeI2svg: function () {
          xo();
        },
      };
    },
  },
  xt = Ht || {};
xt[wt] || (xt[wt] = {});
xt[wt].styles || (xt[wt].styles = {});
xt[wt].hooks || (xt[wt].hooks = {});
xt[wt].shims || (xt[wt].shims = []);
var qe = xt[wt],
  Ep = [],
  dg = function e() {
    K.removeEventListener("DOMContentLoaded", e),
      (wa = 1),
      Ep.map(function (t) {
        return t();
      });
  },
  wa = !1;
Et &&
  ((wa = (K.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    K.readyState
  )),
  wa || K.addEventListener("DOMContentLoaded", dg));
function pg(e) {
  Et && (wa ? setTimeout(e, 0) : Ep.push(e));
}
function ni(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == "string"
    ? Sp(e)
    : "<"
        .concat(t, " ")
        .concat(lg(r), ">")
        .concat(a.map(ni).join(""), "</")
        .concat(t, ">");
}
function vc(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var So = function (t, n, r, i) {
  var a = Object.keys(t),
    o = a.length,
    l = n,
    s,
    c,
    f;
  for (r === void 0 ? ((s = 1), (f = t[a[0]])) : ((s = 0), (f = r)); s < o; s++)
    (c = a[s]), (f = l(f, t[c], c, t));
  return f;
};
function mg(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function _l(e) {
  var t = mg(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function hg(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function gc(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Ol(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = gc(t);
  typeof qe.hooks.addPack == "function" && !i
    ? qe.hooks.addPack(e, gc(t))
    : (qe.styles[e] = L(L({}, qe.styles[e] || {}), a)),
    e === "fas" && Ol("fa", t);
}
var _i,
  Oi,
  zi,
  zn = qe.styles,
  vg = qe.shims,
  gg =
    ((_i = {}),
    ce(_i, X, Object.values(Wr[X])),
    ce(_i, re, Object.values(Wr[re])),
    _i),
  Us = null,
  bp = {},
  Cp = {},
  Tp = {},
  Pp = {},
  _p = {},
  yg =
    ((Oi = {}),
    ce(Oi, X, Object.keys(Hr[X])),
    ce(Oi, re, Object.keys(Hr[re])),
    Oi);
function wg(e) {
  return ~eg.indexOf(e);
}
function xg(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !wg(i) ? i : null;
}
var Op = function () {
  var t = function (a) {
    return So(
      zn,
      function (o, l, s) {
        return (o[s] = So(l, a, {})), o;
      },
      {}
    );
  };
  (bp = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (s) {
        return typeof s == "number";
      });
      l.forEach(function (s) {
        i[s.toString(16)] = o;
      });
    }
    return i;
  })),
    (Cp = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (s) {
          return typeof s == "string";
        });
        l.forEach(function (s) {
          i[s] = o;
        });
      }
      return i;
    })),
    (_p = t(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (s) {
          i[s] = o;
        }),
        i
      );
    }));
  var n = "far" in zn || R.autoFetchSvg,
    r = So(
      vg,
      function (i, a) {
        var o = a[0],
          l = a[1],
          s = a[2];
        return (
          l === "far" && !n && (l = "fas"),
          typeof o == "string" && (i.names[o] = { prefix: l, iconName: s }),
          typeof o == "number" &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: s }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Tp = r.names),
    (Pp = r.unicodes),
    (Us = Ha(R.styleDefault, { family: R.familyDefault }));
};
ig(function (e) {
  Us = Ha(e.styleDefault, { family: R.familyDefault });
});
Op();
function Ws(e, t) {
  return (bp[e] || {})[t];
}
function Sg(e, t) {
  return (Cp[e] || {})[t];
}
function rn(e, t) {
  return (_p[e] || {})[t];
}
function zp(e) {
  return Tp[e] || { prefix: null, iconName: null };
}
function kg(e) {
  var t = Pp[e],
    n = Ws("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Ut() {
  return Us;
}
var Gs = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Ha(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? X : n,
    i = Hr[r][e],
    a = Ur[r][e] || Ur[r][i],
    o = e in qe.styles ? e : null;
  return a || o || null;
}
var yc =
  ((zi = {}),
  ce(zi, X, Object.keys(Wr[X])),
  ce(zi, re, Object.keys(Wr[re])),
  zi);
function Ua(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      ce(t, X, "".concat(R.cssPrefix, "-").concat(X)),
      ce(t, re, "".concat(R.cssPrefix, "-").concat(re)),
      t),
    o = null,
    l = X;
  (e.includes(a[X]) ||
    e.some(function (c) {
      return yc[X].includes(c);
    })) &&
    (l = X),
    (e.includes(a[re]) ||
      e.some(function (c) {
        return yc[re].includes(c);
      })) &&
      (l = re);
  var s = e.reduce(function (c, f) {
    var p = xg(R.cssPrefix, f);
    if (
      (zn[f]
        ? ((f = gg[l].includes(f) ? Xv[l][f] : f), (o = f), (c.prefix = f))
        : yg[l].indexOf(f) > -1
        ? ((o = f), (c.prefix = Ha(f, { family: l })))
        : p
        ? (c.iconName = p)
        : f !== R.replacementClass &&
          f !== a[X] &&
          f !== a[re] &&
          c.rest.push(f),
      !i && c.prefix && c.iconName)
    ) {
      var h = o === "fa" ? zp(c.iconName) : {},
        v = rn(c.prefix, c.iconName);
      h.prefix && (o = null),
        (c.iconName = h.iconName || v || c.iconName),
        (c.prefix = h.prefix || c.prefix),
        c.prefix === "far" &&
          !zn.far &&
          zn.fas &&
          !R.autoFetchSvg &&
          (c.prefix = "fas");
    }
    return c;
  }, Gs());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix &&
      l === re &&
      (zn.fass || R.autoFetchSvg) &&
      ((s.prefix = "fass"),
      (s.iconName = rn(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === "fa" || o === "fa") && (s.prefix = Ut() || "fas"),
    s
  );
}
var Eg = (function () {
    function e() {
      Av(this, e), (this.definitions = {});
    }
    return (
      Rv(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = L(L({}, n.definitions[l] || {}), o[l])),
                Ol(l, o[l]);
              var s = Wr[X][l];
              s && Ol(s, o[l]), Op();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  s = o.iconName,
                  c = o.icon,
                  f = c[2];
                n[l] || (n[l] = {}),
                  f.length > 0 &&
                    f.forEach(function (p) {
                      typeof p == "string" && (n[l][p] = c);
                    }),
                  (n[l][s] = c);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  wc = [],
  In = {},
  Dn = {},
  bg = Object.keys(Dn);
function Cg(e, t) {
  var n = t.mixoutsTo;
  return (
    (wc = e),
    (In = {}),
    Object.keys(Dn).forEach(function (r) {
      bg.indexOf(r) === -1 && delete Dn[r];
    }),
    wc.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == "function" && (n[o] = i[o]),
            ya(i[o]) === "object" &&
              Object.keys(i[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          In[o] || (In[o] = []), In[o].push(a[o]);
        });
      }
      r.provides && r.provides(Dn);
    }),
    n
  );
}
function zl(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var a = In[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function pn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = In[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function St() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Dn[e] ? Dn[e].apply(null, t) : void 0;
}
function Il(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Ut();
  if (t)
    return (t = rn(n, t) || t), vc(Ip.definitions, n, t) || vc(qe.styles, n, t);
}
var Ip = new Eg(),
  Tg = function () {
    (R.autoReplaceSvg = !1), (R.observeMutations = !1), pn("noAuto");
  },
  Pg = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Et
        ? (pn("beforeI2svg", t), St("pseudoElements2svg", t), St("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0),
        (R.observeMutations = !0),
        pg(function () {
          Og({ autoReplaceSvgRoot: n }), pn("watch", t);
        });
    },
  },
  _g = {
    icon: function (t) {
      if (t === null) return null;
      if (ya(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: rn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Ha(t[0]);
        return { prefix: r, iconName: rn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(R.cssPrefix, "-")) > -1 || t.match(Qv))
      ) {
        var i = Ua(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || Ut(),
          iconName: rn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var a = Ut();
        return { prefix: a, iconName: rn(a, t) || t };
      }
    },
  },
  De = {
    noAuto: Tg,
    config: R,
    dom: Pg,
    parse: _g,
    library: Ip,
    findIconDefinition: Il,
    toHtml: ni,
  },
  Og = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? K : n;
    (Object.keys(qe.styles).length > 0 || R.autoFetchSvg) &&
      Et &&
      R.autoReplaceSvg &&
      De.dom.i2svg({ node: r });
  };
function Wa(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return ni(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Et) {
          var r = K.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function zg(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (Hs(o) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      c = { x: l / s / 2, y: 0.5 };
    i.style = Ba(
      L(
        L({}, a),
        {},
        {
          "transform-origin": ""
            .concat(c.x + o.x / 16, "em ")
            .concat(c.y + o.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function Ig(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? "".concat(t, "-").concat(R.cssPrefix, "-").concat(n) : a;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: L(L({}, i), {}, { id: o }), children: r },
      ],
    },
  ];
}
function Ys(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    s = e.title,
    c = e.maskId,
    f = e.titleId,
    p = e.extra,
    h = e.watchable,
    v = h === void 0 ? !1 : h,
    g = r.found ? r : n,
    y = g.width,
    S = g.height,
    u = i === "fak",
    d = [R.replacementClass, a ? "".concat(R.cssPrefix, "-").concat(a) : ""]
      .filter(function (_) {
        return p.classes.indexOf(_) === -1;
      })
      .filter(function (_) {
        return _ !== "" || !!_;
      })
      .concat(p.classes)
      .join(" "),
    m = {
      children: [],
      attributes: L(
        L({}, p.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": a,
          class: d,
          role: p.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(y, " ").concat(S),
        }
      ),
    },
    w =
      u && !~p.classes.indexOf("fa-fw")
        ? { width: "".concat((y / S) * 16 * 0.0625, "em") }
        : {};
  v && (m.attributes[dn] = ""),
    s &&
      (m.children.push({
        tag: "title",
        attributes: {
          id: m.attributes["aria-labelledby"] || "title-".concat(f || Yr()),
        },
        children: [s],
      }),
      delete m.attributes.title);
  var x = L(
      L({}, m),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: c,
        transform: o,
        symbol: l,
        styles: L(L({}, w), p.styles),
      }
    ),
    E =
      r.found && n.found
        ? St("generateAbstractMask", x) || { children: [], attributes: {} }
        : St("generateAbstractIcon", x) || { children: [], attributes: {} },
    P = E.children,
    b = E.attributes;
  return (x.children = P), (x.attributes = b), l ? Ig(x) : zg(x);
}
function xc(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    c = L(
      L(L({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(" ") }
    );
  s && (c[dn] = "");
  var f = L({}, o.styles);
  Hs(i) &&
    ((f.transform = ug({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (f["-webkit-transform"] = f.transform));
  var p = Ba(f);
  p.length > 0 && (c.style = p);
  var h = [];
  return (
    h.push({ tag: "span", attributes: c, children: [t] }),
    a &&
      h.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }),
    h
  );
}
function Mg(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = L(
      L(L({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    a = Ba(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
var ko = qe.styles;
function Ml(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = Rs(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(R.cssPrefix, "-").concat(nn.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(R.cssPrefix, "-").concat(nn.SECONDARY),
                fill: "currentColor",
                d: a[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(R.cssPrefix, "-").concat(nn.PRIMARY),
                fill: "currentColor",
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var Ng = { found: !1, width: 512, height: 512 };
function Lg(e, t) {
  !gp &&
    !R.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Nl(e, t) {
  var n = t;
  return (
    t === "fa" && R.styleDefault !== null && (t = Ut()),
    new Promise(function (r, i) {
      if ((St("missingIconAbstract"), n === "fa")) {
        var a = zp(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && ko[t] && ko[t][e]) {
        var o = ko[t][e];
        return r(Ml(o));
      }
      Lg(e, t),
        r(
          L(
            L({}, Ng),
            {},
            {
              icon:
                R.showMissingIcons && e ? St("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Sc = function () {},
  Ll =
    R.measurePerformance && ki && ki.mark && ki.measure
      ? ki
      : { mark: Sc, measure: Sc },
  pr = 'FA "6.5.2"',
  Ag = function (t) {
    return (
      Ll.mark("".concat(pr, " ").concat(t, " begins")),
      function () {
        return Mp(t);
      }
    );
  },
  Mp = function (t) {
    Ll.mark("".concat(pr, " ").concat(t, " ends")),
      Ll.measure(
        "".concat(pr, " ").concat(t),
        "".concat(pr, " ").concat(t, " begins"),
        "".concat(pr, " ").concat(t, " ends")
      );
  },
  Xs = { begin: Ag, end: Mp },
  Wi = function () {};
function kc(e) {
  var t = e.getAttribute ? e.getAttribute(dn) : null;
  return typeof t == "string";
}
function jg(e) {
  var t = e.getAttribute ? e.getAttribute(Ds) : null,
    n = e.getAttribute ? e.getAttribute($s) : null;
  return t && n;
}
function Rg(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(R.replacementClass)
  );
}
function Fg() {
  if (R.autoReplaceSvg === !0) return Gi.replace;
  var e = Gi[R.autoReplaceSvg];
  return e || Gi.replace;
}
function Dg(e) {
  return K.createElementNS("http://www.w3.org/2000/svg", e);
}
function $g(e) {
  return K.createElement(e);
}
function Np(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? Dg : $g) : n;
  if (typeof e == "string") return K.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(Np(o, { ceFn: r }));
    }),
    i
  );
}
function Vg(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var Gi = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Np(i), n);
        }),
        n.getAttribute(dn) === null && R.keepOriginalSource)
      ) {
        var r = K.createComment(Vg(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~Bs(n).indexOf(R.replacementClass)) return Gi.replace(t);
    var i = new RegExp("".concat(R.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(" ").reduce(
        function (l, s) {
          return (
            s === R.replacementClass || s.match(i)
              ? l.toSvg.push(s)
              : l.toNode.push(s),
            l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(" ")),
        a.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function (l) {
      return ni(l);
    }).join(`
`);
    n.setAttribute(dn, ""), (n.innerHTML = o);
  },
};
function Ec(e) {
  e();
}
function Lp(e, t) {
  var n = typeof t == "function" ? t : Wi;
  if (e.length === 0) n();
  else {
    var r = Ec;
    R.mutateApproach === Gv && (r = Ht.requestAnimationFrame || Ec),
      r(function () {
        var i = Fg(),
          a = Xs.begin("mutate");
        e.map(i), a(), n();
      });
  }
}
var Qs = !1;
function Ap() {
  Qs = !0;
}
function Al() {
  Qs = !1;
}
var xa = null;
function bc(e) {
  if (pc && R.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Wi : t,
      r = e.nodeCallback,
      i = r === void 0 ? Wi : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? Wi : a,
      l = e.observeMutationsRoot,
      s = l === void 0 ? K : l;
    (xa = new pc(function (c) {
      if (!Qs) {
        var f = Ut();
        Zn(c).forEach(function (p) {
          if (
            (p.type === "childList" &&
              p.addedNodes.length > 0 &&
              !kc(p.addedNodes[0]) &&
              (R.searchPseudoElements && o(p.target), n(p.target)),
            p.type === "attributes" &&
              p.target.parentNode &&
              R.searchPseudoElements &&
              o(p.target.parentNode),
            p.type === "attributes" &&
              kc(p.target) &&
              ~Jv.indexOf(p.attributeName))
          )
            if (p.attributeName === "class" && jg(p.target)) {
              var h = Ua(Bs(p.target)),
                v = h.prefix,
                g = h.iconName;
              p.target.setAttribute(Ds, v || f),
                g && p.target.setAttribute($s, g);
            } else Rg(p.target) && i(p.target);
        });
      }
    })),
      Et &&
        xa.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function Bg() {
  xa && xa.disconnect();
}
function Hg(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var a = i.split(":"),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function Ug(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = Ua(Bs(e));
  return (
    i.prefix || (i.prefix = Ut()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          Sg(i.prefix, e.innerText) || Ws(i.prefix, _l(e.innerText))),
      !i.iconName &&
        R.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function Wg(e) {
  var t = Zn(e.attributes).reduce(function (i, a) {
      return (
        i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    R.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(R.replacementClass, "-title-")
            .concat(r || Yr()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function Gg() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: at,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Cc(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = Ug(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = Wg(e),
    l = zl("parseNodeAttributes", {}, e),
    s = t.styleParser ? Hg(e) : [];
  return L(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: at,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: s, attributes: o },
    },
    l
  );
}
var Yg = qe.styles;
function jp(e) {
  var t = R.autoReplaceSvg === "nest" ? Cc(e, { styleParser: !1 }) : Cc(e);
  return ~t.extra.classes.indexOf(yp)
    ? St("generateLayersText", e, t)
    : St("generateSvgReplacementMutation", e, t);
}
var Wt = new Set();
Vs.map(function (e) {
  Wt.add("fa-".concat(e));
});
Object.keys(Hr[X]).map(Wt.add.bind(Wt));
Object.keys(Hr[re]).map(Wt.add.bind(Wt));
Wt = ei(Wt);
function Tc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Et) return Promise.resolve();
  var n = K.documentElement.classList,
    r = function (p) {
      return n.add("".concat(mc, "-").concat(p));
    },
    i = function (p) {
      return n.remove("".concat(mc, "-").concat(p));
    },
    a = R.autoFetchSvg
      ? Wt
      : Vs.map(function (f) {
          return "fa-".concat(f);
        }).concat(Object.keys(Yg));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(yp, ":not([").concat(dn, "])")]
    .concat(
      a.map(function (f) {
        return ".".concat(f, ":not([").concat(dn, "])");
      })
    )
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = Zn(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var s = Xs.begin("onTree"),
    c = l.reduce(function (f, p) {
      try {
        var h = jp(p);
        h && f.push(h);
      } catch (v) {
        gp || (v.name === "MissingIcon" && console.error(v));
      }
      return f;
    }, []);
  return new Promise(function (f, p) {
    Promise.all(c)
      .then(function (h) {
        Lp(h, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            s(),
            f();
        });
      })
      .catch(function (h) {
        s(), p(h);
      });
  });
}
function Xg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  jp(e).then(function (n) {
    n && Lp([n], t);
  });
}
function Qg(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Il(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : Il(i || {})),
      e(r, L(L({}, n), {}, { mask: i }))
    );
  };
}
var Kg = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? at : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      l = n.mask,
      s = l === void 0 ? null : l,
      c = n.maskId,
      f = c === void 0 ? null : c,
      p = n.title,
      h = p === void 0 ? null : p,
      v = n.titleId,
      g = v === void 0 ? null : v,
      y = n.classes,
      S = y === void 0 ? [] : y,
      u = n.attributes,
      d = u === void 0 ? {} : u,
      m = n.styles,
      w = m === void 0 ? {} : m;
    if (t) {
      var x = t.prefix,
        E = t.iconName,
        P = t.icon;
      return Wa(L({ type: "icon" }, t), function () {
        return (
          pn("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          R.autoA11y &&
            (h
              ? (d["aria-labelledby"] = ""
                  .concat(R.replacementClass, "-title-")
                  .concat(g || Yr()))
              : ((d["aria-hidden"] = "true"), (d.focusable = "false"))),
          Ys({
            icons: {
              main: Ml(P),
              mask: s
                ? Ml(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: x,
            iconName: E,
            transform: L(L({}, at), i),
            symbol: o,
            title: h,
            maskId: f,
            titleId: g,
            extra: { attributes: d, styles: w, classes: S },
          })
        );
      });
    }
  },
  qg = {
    mixout: function () {
      return { icon: Qg(Kg) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Tc), (n.nodeCallback = Xg), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? K : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Tc(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            s = r.transform,
            c = r.symbol,
            f = r.mask,
            p = r.maskId,
            h = r.extra;
          return new Promise(function (v, g) {
            Promise.all([
              Nl(i, l),
              f.iconName
                ? Nl(f.iconName, f.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (y) {
                var S = Rs(y, 2),
                  u = S[0],
                  d = S[1];
                v([
                  n,
                  Ys({
                    icons: { main: u, mask: d },
                    prefix: l,
                    iconName: i,
                    transform: s,
                    symbol: c,
                    maskId: p,
                    title: a,
                    titleId: o,
                    extra: h,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(g);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            l = n.styles,
            s = Ba(l);
          s.length > 0 && (i.style = s);
          var c;
          return (
            Hs(o) &&
              (c = St("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(c || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  Zg = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return Wa({ type: "layer" }, function () {
            pn("beforeDOMElementCreation", { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      o = o.concat(s.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(R.cssPrefix, "-layers")]
                      .concat(ei(a))
                      .join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  Jg = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            s = r.attributes,
            c = s === void 0 ? {} : s,
            f = r.styles,
            p = f === void 0 ? {} : f;
          return Wa({ type: "counter", content: n }, function () {
            return (
              pn("beforeDOMElementCreation", { content: n, params: r }),
              Mg({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: c,
                  styles: p,
                  classes: ["".concat(R.cssPrefix, "-layers-counter")].concat(
                    ei(l)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  e0 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            a = i === void 0 ? at : i,
            o = r.title,
            l = o === void 0 ? null : o,
            s = r.classes,
            c = s === void 0 ? [] : s,
            f = r.attributes,
            p = f === void 0 ? {} : f,
            h = r.styles,
            v = h === void 0 ? {} : h;
          return Wa({ type: "text", content: n }, function () {
            return (
              pn("beforeDOMElementCreation", { content: n, params: r }),
              xc({
                content: n,
                transform: L(L({}, at), a),
                title: l,
                extra: {
                  attributes: p,
                  styles: v,
                  classes: ["".concat(R.cssPrefix, "-layers-text")].concat(
                    ei(c)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          s = null;
        if (mp) {
          var c = parseInt(getComputedStyle(n).fontSize, 10),
            f = n.getBoundingClientRect();
          (l = f.width / c), (s = f.height / c);
        }
        return (
          R.autoA11y && !i && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            xc({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  t0 = new RegExp('"', "ug"),
  Pc = [1105920, 1112319];
function n0(e) {
  var t = e.replace(t0, ""),
    n = hg(t, 0),
    r = n >= Pc[0] && n <= Pc[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: _l(i ? t[0] : t), isSecondary: r || i };
}
function _c(e, t) {
  var n = "".concat(Wv).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = Zn(e.children),
      o = a.filter(function (P) {
        return P.getAttribute(Pl) === t;
      })[0],
      l = Ht.getComputedStyle(e, t),
      s = l.getPropertyValue("font-family").match(Kv),
      c = l.getPropertyValue("font-weight"),
      f = l.getPropertyValue("content");
    if (o && !s) return e.removeChild(o), r();
    if (s && f !== "none" && f !== "") {
      var p = l.getPropertyValue("content"),
        h = ~["Sharp"].indexOf(s[2]) ? re : X,
        v = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(s[2])
          ? Ur[h][s[2].toLowerCase()]
          : qv[h][c],
        g = n0(p),
        y = g.value,
        S = g.isSecondary,
        u = s[0].startsWith("FontAwesome"),
        d = Ws(v, y),
        m = d;
      if (u) {
        var w = kg(y);
        w.iconName && w.prefix && ((d = w.iconName), (v = w.prefix));
      }
      if (
        d &&
        !S &&
        (!o || o.getAttribute(Ds) !== v || o.getAttribute($s) !== m)
      ) {
        e.setAttribute(n, m), o && e.removeChild(o);
        var x = Gg(),
          E = x.extra;
        (E.attributes[Pl] = t),
          Nl(d, v)
            .then(function (P) {
              var b = Ys(
                  L(
                    L({}, x),
                    {},
                    {
                      icons: { main: P, mask: Gs() },
                      prefix: v,
                      iconName: m,
                      extra: E,
                      watchable: !0,
                    }
                  )
                ),
                _ = K.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(_, e.firstChild)
                : e.appendChild(_),
                (_.outerHTML = b.map(function (k) {
                  return ni(k);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function r0(e) {
  return Promise.all([_c(e, "::before"), _c(e, "::after")]);
}
function i0(e) {
  return (
    e.parentNode !== document.head &&
    !~Yv.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Pl) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Oc(e) {
  if (Et)
    return new Promise(function (t, n) {
      var r = Zn(e.querySelectorAll("*")).filter(i0).map(r0),
        i = Xs.begin("searchPseudoElements");
      Ap(),
        Promise.all(r)
          .then(function () {
            i(), Al(), t();
          })
          .catch(function () {
            i(), Al(), n();
          });
    });
}
var a0 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Oc), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? K : r;
        R.searchPseudoElements && Oc(i);
      };
    },
  },
  zc = !1,
  o0 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Ap(), (zc = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          bc(zl("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          Bg();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          zc
            ? Al()
            : bc(zl("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Ic = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var a = i.toLowerCase().split("-"),
          o = a[0],
          l = a.slice(1).join("-");
        if (o && l === "h") return (r.flipX = !0), r;
        if (o && l === "v") return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + l;
            break;
          case "shrink":
            r.size = r.size - l;
            break;
          case "left":
            r.x = r.x - l;
            break;
          case "right":
            r.x = r.x + l;
            break;
          case "up":
            r.y = r.y - l;
            break;
          case "down":
            r.y = r.y + l;
            break;
          case "rotate":
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  l0 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Ic(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = Ic(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          l = { transform: "translate(".concat(a / 2, " 256)") },
          s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          c = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          f = "rotate(".concat(i.rotate, " 0 0)"),
          p = { transform: "".concat(s, " ").concat(c, " ").concat(f) },
          h = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          v = { outer: l, inner: p, path: h };
        return {
          tag: "g",
          attributes: L({}, v.outer),
          children: [
            {
              tag: "g",
              attributes: L({}, v.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: L(L({}, r.icon.attributes), v.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Eo = { x: 0, y: 0, width: "100%", height: "100%" };
function Mc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function s0(e) {
  return e.tag === "g" ? e.children : [e];
}
var u0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            a = i
              ? Ua(
                  i.split(" ").map(function (o) {
                    return o.trim();
                  })
                )
              : Gs();
          return (
            a.prefix || (a.prefix = Ut()),
            (n.mask = a),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          l = n.maskId,
          s = n.transform,
          c = a.width,
          f = a.icon,
          p = o.width,
          h = o.icon,
          v = sg({ transform: s, containerWidth: p, iconWidth: c }),
          g = { tag: "rect", attributes: L(L({}, Eo), {}, { fill: "white" }) },
          y = f.children ? { children: f.children.map(Mc) } : {},
          S = {
            tag: "g",
            attributes: L({}, v.inner),
            children: [
              Mc(
                L({ tag: f.tag, attributes: L(L({}, f.attributes), v.path) }, y)
              ),
            ],
          },
          u = { tag: "g", attributes: L({}, v.outer), children: [S] },
          d = "mask-".concat(l || Yr()),
          m = "clip-".concat(l || Yr()),
          w = {
            tag: "mask",
            attributes: L(
              L({}, Eo),
              {},
              {
                id: d,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [g, u],
          },
          x = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: m }, children: s0(h) },
              w,
            ],
          };
        return (
          r.push(x, {
            tag: "rect",
            attributes: L(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(m, ")"),
                mask: "url(#".concat(d, ")"),
              },
              Eo
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  c0 = {
    provides: function (t) {
      var n = !1;
      Ht.matchMedia &&
        (n = Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            a = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: L(
              L({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var o = L(L({}, a), {}, { attributeName: "opacity" }),
            l = {
              tag: "circle",
              attributes: L(L({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: L(
                    L({}, a),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: L(L({}, o), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(l),
            r.push({
              tag: "path",
              attributes: L(
                L({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: L(L({}, o), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: L(
                  L({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: L(L({}, o), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  f0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            a = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  d0 = [fg, qg, Zg, Jg, e0, a0, o0, l0, u0, c0, f0];
Cg(d0, { mixoutsTo: De });
De.noAuto;
De.config;
De.library;
De.dom;
var jl = De.parse;
De.findIconDefinition;
De.toHtml;
var p0 = De.icon;
De.layer;
De.text;
De.counter;
var Rp = { exports: {} },
  m0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  h0 = m0,
  v0 = h0;
function Fp() {}
function Dp() {}
Dp.resetWarningCache = Fp;
var g0 = function () {
  function e(r, i, a, o, l, s) {
    if (s !== v0) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dp,
    resetWarningCache: Fp,
  };
  return (n.PropTypes = n), n;
};
Rp.exports = g0();
var y0 = Rp.exports;
const $ = Wc(y0);
function Nc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nc(Object(n), !0).forEach(function (r) {
          Mn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Sa(e) {
  "@babel/helpers - typeof";
  return (
    (Sa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sa(e)
  );
}
function Mn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function w0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++)
    (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function x0(e, t) {
  if (e == null) return {};
  var n = w0(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Rl(e) {
  return S0(e) || k0(e) || E0(e) || b0();
}
function S0(e) {
  if (Array.isArray(e)) return Fl(e);
}
function k0(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function E0(e, t) {
  if (e) {
    if (typeof e == "string") return Fl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fl(e, t);
  }
}
function Fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function b0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C0(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    s = e.spin,
    c = e.spinPulse,
    f = e.spinReverse,
    p = e.pulse,
    h = e.fixedWidth,
    v = e.inverse,
    g = e.border,
    y = e.listItem,
    S = e.flip,
    u = e.size,
    d = e.rotation,
    m = e.pull,
    w =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": a,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": s,
        "fa-spin-reverse": f,
        "fa-spin-pulse": c,
        "fa-pulse": p,
        "fa-fw": h,
        "fa-inverse": v,
        "fa-border": g,
        "fa-li": y,
        "fa-flip": S === !0,
        "fa-flip-horizontal": S === "horizontal" || S === "both",
        "fa-flip-vertical": S === "vertical" || S === "both",
      }),
      Mn(t, "fa-".concat(u), typeof u < "u" && u !== null),
      Mn(t, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0),
      Mn(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
      Mn(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(w)
    .map(function (x) {
      return w[x] ? x : null;
    })
    .filter(function (x) {
      return x;
    });
}
function T0(e) {
  return (e = e - 0), e === e;
}
function $p(e) {
  return T0(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var P0 = ["style"];
function _0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function O0(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = $p(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[_0(i)] = a) : (t[i] = a), t;
    }, {});
}
function Vp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return Vp(e, s);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, c) {
        var f = t.attributes[c];
        switch (c) {
          case "class":
            (s.attrs.className = f), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = O0(f);
            break;
          default:
            c.indexOf("aria-") === 0 || c.indexOf("data-") === 0
              ? (s.attrs[c.toLowerCase()] = f)
              : (s.attrs[$p(c)] = f);
        }
        return s;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    l = x0(n, P0);
  return (
    (i.attrs.style = rt(rt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, rt(rt({}, i.attrs), l)].concat(Rl(r)))
  );
}
var Bp = !1;
try {
  Bp = !0;
} catch {}
function z0() {
  if (!Bp && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Lc(e) {
  if (e && Sa(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (jl.icon) return jl.icon(e);
  if (e === null) return null;
  if (e && Sa(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function bo(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Mn({}, e, t)
    : {};
}
var Ac = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Ne = te.forwardRef(function (e, t) {
    var n = rt(rt({}, Ac), e),
      r = n.icon,
      i = n.mask,
      a = n.symbol,
      o = n.className,
      l = n.title,
      s = n.titleId,
      c = n.maskId,
      f = Lc(r),
      p = bo("classes", [].concat(Rl(C0(n)), Rl((o || "").split(" ")))),
      h = bo(
        "transform",
        typeof n.transform == "string" ? jl.transform(n.transform) : n.transform
      ),
      v = bo("mask", Lc(i)),
      g = p0(
        f,
        rt(
          rt(rt(rt({}, p), h), v),
          {},
          { symbol: a, title: l, titleId: s, maskId: c }
        )
      );
    if (!g) return z0("Could not find icon", f), null;
    var y = g.abstract,
      S = { ref: t };
    return (
      Object.keys(n).forEach(function (u) {
        Ac.hasOwnProperty(u) || (S[u] = n[u]);
      }),
      I0(y[0], S)
    );
  });
Ne.displayName = "FontAwesomeIcon";
Ne.propTypes = {
  beat: $.bool,
  border: $.bool,
  beatFade: $.bool,
  bounce: $.bool,
  className: $.string,
  fade: $.bool,
  flash: $.bool,
  mask: $.oneOfType([$.object, $.array, $.string]),
  maskId: $.string,
  fixedWidth: $.bool,
  inverse: $.bool,
  flip: $.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: $.oneOfType([$.object, $.array, $.string]),
  listItem: $.bool,
  pull: $.oneOf(["right", "left"]),
  pulse: $.bool,
  rotation: $.oneOf([0, 90, 180, 270]),
  shake: $.bool,
  size: $.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: $.bool,
  spinPulse: $.bool,
  spinReverse: $.bool,
  symbol: $.oneOfType([$.bool, $.string]),
  title: $.string,
  titleId: $.string,
  transform: $.oneOfType([$.string, $.object]),
  swapOpacity: $.bool,
};
var I0 = Vp.bind(null, te.createElement);
function jc(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Ks(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : jc(t[n]) &&
          jc(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Ks(e[n], t[n]);
    });
}
const Hp = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Jn() {
  const e = typeof document < "u" ? document : {};
  return Ks(e, Hp), e;
}
const M0 = {
  document: Hp,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function $e() {
  const e = typeof window < "u" ? window : {};
  return Ks(e, M0), e;
}
function N0(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function L0(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Dl(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function ka() {
  return Date.now();
}
function A0(e) {
  const t = $e();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function j0(e, t) {
  t === void 0 && (t = "x");
  const n = $e();
  let r, i, a;
  const o = A0(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (a = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((a =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = a.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = a.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = a.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Ii(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function R0(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Me() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !R0(r)) {
      const i = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0);
      for (let a = 0, o = i.length; a < o; a += 1) {
        const l = i[a],
          s = Object.getOwnPropertyDescriptor(r, l);
        s !== void 0 &&
          s.enumerable &&
          (Ii(e[l]) && Ii(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Me(e[l], r[l])
            : !Ii(e[l]) && Ii(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Me(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function Mi(e, t, n) {
  e.style.setProperty(t, n);
}
function Up(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = $e(),
    a = -t.translate;
  let o = null,
    l;
  const s = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > a ? "next" : "prev",
    f = (h, v) => (c === "next" && h >= v) || (c === "prev" && h <= v),
    p = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const h = Math.max(Math.min((l - o) / s, 1), 0),
        v = 0.5 - Math.cos(h * Math.PI) / 2;
      let g = a + v * (n - a);
      if ((f(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), f(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(p);
    };
  p();
}
function qs(e) {
  return (
    e.querySelector(".swiper-slide-transform") ||
    (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
    e
  );
}
function ot(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Ea(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Xr(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : N0(t))), n;
}
function F0(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function D0(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Mt(e, t) {
  return $e().getComputedStyle(e, null).getPropertyValue(t);
}
function ba(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Wp(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function $l(e, t, n) {
  const r = $e();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function fe(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function Gp(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let a = ot(e.el, `.${r[i]}`)[0];
          a || ((a = Xr("div", r[i])), (a.className = r[i]), e.el.append(a)),
            (n[i] = a),
            (t[i] = a);
        }
      }),
    n
  );
}
function $0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function a(g) {
    let y;
    return g &&
      typeof g == "string" &&
      t.isElement &&
      ((y = t.el.querySelector(g)), y)
      ? y
      : (g &&
          (typeof g == "string" && (y = [...document.querySelectorAll(g)]),
          t.params.uniqueNavElements &&
          typeof g == "string" &&
          y &&
          y.length > 1 &&
          t.el.querySelectorAll(g).length === 1
            ? (y = t.el.querySelector(g))
            : y && y.length === 1 && (y = y[0])),
        g && !y ? g : y);
  }
  function o(g, y) {
    const S = t.params.navigation;
    (g = fe(g)),
      g.forEach((u) => {
        u &&
          (u.classList[y ? "add" : "remove"](...S.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = y),
          t.params.watchOverflow &&
            t.enabled &&
            u.classList[t.isLocked ? "add" : "remove"](S.lockClass));
      });
  }
  function l() {
    const { nextEl: g, prevEl: y } = t.navigation;
    if (t.params.loop) {
      o(y, !1), o(g, !1);
      return;
    }
    o(y, t.isBeginning && !t.params.rewind), o(g, t.isEnd && !t.params.rewind);
  }
  function s(g) {
    g.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function c(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function f() {
    const g = t.params.navigation;
    if (
      ((t.params.navigation = Gp(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let y = a(g.nextEl),
      S = a(g.prevEl);
    Object.assign(t.navigation, { nextEl: y, prevEl: S }),
      (y = fe(y)),
      (S = fe(S));
    const u = (d, m) => {
      d && d.addEventListener("click", m === "next" ? c : s),
        !t.enabled && d && d.classList.add(...g.lockClass.split(" "));
    };
    y.forEach((d) => u(d, "next")), S.forEach((d) => u(d, "prev"));
  }
  function p() {
    let { nextEl: g, prevEl: y } = t.navigation;
    (g = fe(g)), (y = fe(y));
    const S = (u, d) => {
      u.removeEventListener("click", d === "next" ? c : s),
        u.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    g.forEach((u) => S(u, "next")), y.forEach((u) => S(u, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (f(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      p();
    }),
    r("enable disable", () => {
      let { nextEl: g, prevEl: y } = t.navigation;
      if (((g = fe(g)), (y = fe(y)), t.enabled)) {
        l();
        return;
      }
      [...g, ...y]
        .filter((S) => !!S)
        .forEach((S) => S.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (g, y) => {
      let { nextEl: S, prevEl: u } = t.navigation;
      (S = fe(S)), (u = fe(u));
      const d = y.target;
      let m = u.includes(d) || S.includes(d);
      if (t.isElement && !m) {
        const w = y.path || (y.composedPath && y.composedPath());
        w && (m = w.find((x) => S.includes(x) || u.includes(x)));
      }
      if (t.params.navigation.hideOnClick && !m) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === d || t.pagination.el.contains(d))
        )
          return;
        let w;
        S.length
          ? (w = S[0].classList.contains(t.params.navigation.hiddenClass))
          : u.length &&
            (w = u[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...S, ...u]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        f(),
        l();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(t.navigation, {
    enable: h,
    disable: v,
    update: l,
    init: f,
    destroy: p,
  });
}
function sr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function V0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const a = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
      paginationDisabledClass: `${a}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    l = 0;
  function s() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(u, d) {
    const { bulletActiveClass: m } = t.params.pagination;
    u &&
      ((u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${m}-${d}`),
        (u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${m}-${d}-${d}`)));
  }
  function f(u) {
    const d = u.target.closest(sr(t.params.pagination.bulletClass));
    if (!d) return;
    u.preventDefault();
    const m = ba(d) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === m) return;
      t.slideToLoop(m);
    } else t.slideTo(m);
  }
  function p() {
    const u = t.rtl,
      d = t.params.pagination;
    if (s()) return;
    let m = t.pagination.el;
    m = fe(m);
    let w, x;
    const E =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      P = t.params.loop
        ? Math.ceil(E / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((x = t.previousRealIndex || 0),
          (w =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((w = t.snapIndex), (x = t.previousSnapIndex))
        : ((x = t.previousIndex || 0), (w = t.activeIndex || 0)),
      d.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const b = t.pagination.bullets;
      let _, k, C;
      if (
        (d.dynamicBullets &&
          ((o = $l(b[0], t.isHorizontal() ? "width" : "height")),
          m.forEach((O) => {
            O.style[t.isHorizontal() ? "width" : "height"] = `${
              o * (d.dynamicMainBullets + 4)
            }px`;
          }),
          d.dynamicMainBullets > 1 &&
            x !== void 0 &&
            ((l += w - (x || 0)),
            l > d.dynamicMainBullets - 1
              ? (l = d.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (_ = Math.max(w - l, 0)),
          (k = _ + (Math.min(b.length, d.dynamicMainBullets) - 1)),
          (C = (k + _) / 2)),
        b.forEach((O) => {
          const N = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (D) => `${d.bulletActiveClass}${D}`
            ),
          ]
            .map((D) =>
              typeof D == "string" && D.includes(" ") ? D.split(" ") : D
            )
            .flat();
          O.classList.remove(...N);
        }),
        m.length > 1)
      )
        b.forEach((O) => {
          const N = ba(O);
          N === w
            ? O.classList.add(...d.bulletActiveClass.split(" "))
            : t.isElement && O.setAttribute("part", "bullet"),
            d.dynamicBullets &&
              (N >= _ &&
                N <= k &&
                O.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),
              N === _ && c(O, "prev"),
              N === k && c(O, "next"));
        });
      else {
        const O = b[w];
        if (
          (O && O.classList.add(...d.bulletActiveClass.split(" ")),
          t.isElement &&
            b.forEach((N, D) => {
              N.setAttribute("part", D === w ? "bullet-active" : "bullet");
            }),
          d.dynamicBullets)
        ) {
          const N = b[_],
            D = b[k];
          for (let H = _; H <= k; H += 1)
            b[H] &&
              b[H].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          c(N, "prev"), c(D, "next");
        }
      }
      if (d.dynamicBullets) {
        const O = Math.min(b.length, d.dynamicMainBullets + 4),
          N = (o * O - o) / 2 - C * o,
          D = u ? "right" : "left";
        b.forEach((H) => {
          H.style[t.isHorizontal() ? D : "top"] = `${N}px`;
        });
      }
    }
    m.forEach((b, _) => {
      if (
        (d.type === "fraction" &&
          (b.querySelectorAll(sr(d.currentClass)).forEach((k) => {
            k.textContent = d.formatFractionCurrent(w + 1);
          }),
          b.querySelectorAll(sr(d.totalClass)).forEach((k) => {
            k.textContent = d.formatFractionTotal(P);
          })),
        d.type === "progressbar")
      ) {
        let k;
        d.progressbarOpposite
          ? (k = t.isHorizontal() ? "vertical" : "horizontal")
          : (k = t.isHorizontal() ? "horizontal" : "vertical");
        const C = (w + 1) / P;
        let O = 1,
          N = 1;
        k === "horizontal" ? (O = C) : (N = C),
          b.querySelectorAll(sr(d.progressbarFillClass)).forEach((D) => {
            (D.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${N})`),
              (D.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      d.type === "custom" && d.renderCustom
        ? ((b.innerHTML = d.renderCustom(t, w + 1, P)),
          _ === 0 && i("paginationRender", b))
        : (_ === 0 && i("paginationRender", b), i("paginationUpdate", b)),
        t.params.watchOverflow &&
          t.enabled &&
          b.classList[t.isLocked ? "add" : "remove"](d.lockClass);
    });
  }
  function h() {
    const u = t.params.pagination;
    if (s()) return;
    const d =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let m = t.pagination.el;
    m = fe(m);
    let w = "";
    if (u.type === "bullets") {
      let x = t.params.loop
        ? Math.ceil(d / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && x > d && (x = d);
      for (let E = 0; E < x; E += 1)
        u.renderBullet
          ? (w += u.renderBullet.call(t, E, u.bulletClass))
          : (w += `<${u.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (w = u.renderFraction.call(t, u.currentClass, u.totalClass))
        : (w = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (w = u.renderProgressbar.call(t, u.progressbarFillClass))
          : (w = `<span class="${u.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      m.forEach((x) => {
        u.type !== "custom" && (x.innerHTML = w || ""),
          u.type === "bullets" &&
            t.pagination.bullets.push(...x.querySelectorAll(sr(u.bulletClass)));
      }),
      u.type !== "custom" && i("paginationRender", m[0]);
  }
  function v() {
    t.params.pagination = Gp(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = t.params.pagination;
    if (!u.el) return;
    let d;
    typeof u.el == "string" && t.isElement && (d = t.el.querySelector(u.el)),
      !d &&
        typeof u.el == "string" &&
        (d = [...document.querySelectorAll(u.el)]),
      d || (d = u.el),
      !(!d || d.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(d) &&
          d.length > 1 &&
          ((d = [...t.el.querySelectorAll(u.el)]),
          d.length > 1 &&
            (d = d.filter((m) => Wp(m, ".swiper")[0] === t.el)[0])),
        Array.isArray(d) && d.length === 1 && (d = d[0]),
        Object.assign(t.pagination, { el: d }),
        (d = fe(d)),
        d.forEach((m) => {
          u.type === "bullets" &&
            u.clickable &&
            m.classList.add(...(u.clickableClass || "").split(" ")),
            m.classList.add(u.modifierClass + u.type),
            m.classList.add(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (m.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (l = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              m.classList.add(u.progressbarOppositeClass),
            u.clickable && m.addEventListener("click", f),
            t.enabled || m.classList.add(u.lockClass);
        }));
  }
  function g() {
    const u = t.params.pagination;
    if (s()) return;
    let d = t.pagination.el;
    d &&
      ((d = fe(d)),
      d.forEach((m) => {
        m.classList.remove(u.hiddenClass),
          m.classList.remove(u.modifierClass + u.type),
          m.classList.remove(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable &&
            (m.classList.remove(...(u.clickableClass || "").split(" ")),
            m.removeEventListener("click", f));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((m) =>
          m.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const u = t.params.pagination;
    let { el: d } = t.pagination;
    (d = fe(d)),
      d.forEach((m) => {
        m.classList.remove(u.horizontalClass, u.verticalClass),
          m.classList.add(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? S() : (v(), h(), p());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && p();
    }),
    r("snapIndexChange", () => {
      p();
    }),
    r("snapGridLengthChange", () => {
      h(), p();
    }),
    r("destroy", () => {
      g();
    }),
    r("enable disable", () => {
      let { el: u } = t.pagination;
      u &&
        ((u = fe(u)),
        u.forEach((d) =>
          d.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      p();
    }),
    r("click", (u, d) => {
      const m = d.target,
        w = fe(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !m.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && m === t.navigation.nextEl) ||
            (t.navigation.prevEl && m === t.navigation.prevEl))
        )
          return;
        const x = w[0].classList.contains(t.params.pagination.hiddenClass);
        i(x === !0 ? "paginationShow" : "paginationHide"),
          w.forEach((E) => E.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = fe(u)),
        u.forEach((d) =>
          d.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        v(),
        h(),
        p();
    },
    S = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = fe(u)),
        u.forEach((d) =>
          d.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        g();
    };
  Object.assign(t.pagination, {
    enable: y,
    disable: S,
    render: h,
    update: p,
    init: v,
    destroy: g,
  });
}
function B0(e) {
  const {
    effect: t,
    swiper: n,
    on: r,
    setTranslate: i,
    setTransition: a,
    overwriteParams: o,
    perspective: l,
    recreateShadows: s,
    getEffectParams: c,
  } = e;
  r("beforeInit", () => {
    if (n.params.effect !== t) return;
    n.classNames.push(`${n.params.containerModifierClass}${t}`),
      l && l() && n.classNames.push(`${n.params.containerModifierClass}3d`);
    const p = o ? o() : {};
    Object.assign(n.params, p), Object.assign(n.originalParams, p);
  }),
    r("setTranslate", () => {
      n.params.effect === t && i();
    }),
    r("setTransition", (p, h) => {
      n.params.effect === t && a(h);
    }),
    r("transitionEnd", () => {
      if (n.params.effect === t && s) {
        if (!c || !c().slideShadows) return;
        n.slides.forEach((p) => {
          p.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((h) => h.remove());
        }),
          s();
      }
    });
  let f;
  r("virtualUpdate", () => {
    n.params.effect === t &&
      (n.slides.length || (f = !0),
      requestAnimationFrame(() => {
        f && n.slides && n.slides.length && (i(), (f = !1));
      }));
  });
}
function H0(e, t) {
  const n = qs(t);
  return (
    n !== t &&
      ((n.style.backfaceVisibility = "hidden"),
      (n.style["-webkit-backface-visibility"] = "hidden")),
    n
  );
}
function Rc(e, t, n) {
  const r = `swiper-slide-shadow${
      n ? `-${n}` : ""
    }${` swiper-slide-shadow-${e}`}`,
    i = qs(t);
  let a = i.querySelector(`.${r.split(" ").join(".")}`);
  return a || ((a = Xr("div", r.split(" "))), i.append(a)), a;
}
function U0(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    B0({
      effect: "coverflow",
      swiper: t,
      on: r,
      setTranslate: () => {
        const { width: o, height: l, slides: s, slidesSizesGrid: c } = t,
          f = t.params.coverflowEffect,
          p = t.isHorizontal(),
          h = t.translate,
          v = p ? -h + o / 2 : -h + l / 2,
          g = p ? f.rotate : -f.rotate,
          y = f.depth;
        for (let S = 0, u = s.length; S < u; S += 1) {
          const d = s[S],
            m = c[S],
            w = d.swiperSlideOffset,
            x = (v - w - m / 2) / m,
            E =
              typeof f.modifier == "function" ? f.modifier(x) : x * f.modifier;
          let P = p ? g * E : 0,
            b = p ? 0 : g * E,
            _ = -y * Math.abs(E),
            k = f.stretch;
          typeof k == "string" &&
            k.indexOf("%") !== -1 &&
            (k = (parseFloat(f.stretch) / 100) * m);
          let C = p ? 0 : k * E,
            O = p ? k * E : 0,
            N = 1 - (1 - f.scale) * Math.abs(E);
          Math.abs(O) < 0.001 && (O = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(_) < 0.001 && (_ = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(N) < 0.001 && (N = 0),
            t.browser &&
              t.browser.need3dFix &&
              ((Math.abs(P) / 90) % 2 === 1 && (P += 0.001),
              (Math.abs(b) / 90) % 2 === 1 && (b += 0.001));
          const D = `translate3d(${O}px,${C}px,${_}px)  rotateX(${b}deg) rotateY(${P}deg) scale(${N})`,
            H = H0(f, d);
          if (
            ((H.style.transform = D),
            (d.style.zIndex = -Math.abs(Math.round(E)) + 1),
            f.slideShadows)
          ) {
            let ie = p
                ? d.querySelector(".swiper-slide-shadow-left")
                : d.querySelector(".swiper-slide-shadow-top"),
              Ce = p
                ? d.querySelector(".swiper-slide-shadow-right")
                : d.querySelector(".swiper-slide-shadow-bottom");
            ie || (ie = Rc("coverflow", d, p ? "left" : "top")),
              Ce || (Ce = Rc("coverflow", d, p ? "right" : "bottom")),
              ie && (ie.style.opacity = E > 0 ? E : 0),
              Ce && (Ce.style.opacity = -E > 0 ? -E : 0);
          }
        }
      },
      setTransition: (o) => {
        t.slides
          .map((s) => qs(s))
          .forEach((s) => {
            (s.style.transitionDuration = `${o}ms`),
              s
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((c) => {
                  c.style.transitionDuration = `${o}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
let Co;
function W0() {
  const e = $e(),
    t = Jn();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Yp() {
  return Co || (Co = W0()), Co;
}
let To;
function G0(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Yp(),
    r = $e(),
    i = r.navigator.platform,
    a = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = r.screen.width,
    s = r.screen.height,
    c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = a.match(/(iPad).*OS\s([\d_]+)/);
  const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let g = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f &&
      g &&
      n.touch &&
      y.indexOf(`${l}x${s}`) >= 0 &&
      ((f = a.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, "13_0_0"]),
      (g = !1)),
    c && !v && ((o.os = "android"), (o.android = !0)),
    (f || h || p) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Xp(e) {
  return e === void 0 && (e = {}), To || (To = G0(e)), To;
}
let Po;
function Y0() {
  const e = $e(),
    t = Xp();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [s, c] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((f) => Number(f));
      n = s < 16 || (s === 16 && c < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    a = r(),
    o = a || (i && t.ios);
  return {
    isSafari: n || a,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function X0() {
  return Po || (Po = Y0()), Po;
}
function Q0(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = $e();
  let a = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    s = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((a = new ResizeObserver((p) => {
          o = i.requestAnimationFrame(() => {
            const { width: h, height: v } = t;
            let g = h,
              y = v;
            p.forEach((S) => {
              let { contentBoxSize: u, contentRect: d, target: m } = S;
              (m && m !== t.el) ||
                ((g = d ? d.width : (u[0] || u).inlineSize),
                (y = d ? d.height : (u[0] || u).blockSize));
            }),
              (g !== h || y !== v) && l();
          });
        })),
        a.observe(t.el));
    },
    c = () => {
      o && i.cancelAnimationFrame(o),
        a && a.unobserve && t.el && (a.unobserve(t.el), (a = null));
    },
    f = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      s();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", f);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", f);
    });
}
function K0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const a = [],
    o = $e(),
    l = function (f, p) {
      p === void 0 && (p = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        v = new h((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", g[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(y)
            : o.setTimeout(y, 0);
        });
      v.observe(f, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        a.push(v);
    },
    s = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = Wp(t.hostEl);
          for (let p = 0; p < f.length; p += 1) l(f[p]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      a.forEach((f) => {
        f.disconnect();
      }),
        a.splice(0, a.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", s),
    r("destroy", c);
}
var q0 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((a) => {
        r.eventsListeners[a] || (r.eventsListeners[a] = []),
          r.eventsListeners[a][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
        o[l] = arguments[l];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, a) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(a, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (
      typeof a[0] == "string" || Array.isArray(a[0])
        ? ((t = a[0]), (n = a.slice(1, a.length)), (r = e))
        : ((t = a[0].events), (n = a[0].data), (r = a[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((s) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [s, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[s] &&
            e.eventsListeners[s].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function Z0() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Mt(r, "padding-left") || 0, 10) -
        parseInt(Mt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Mt(r, "padding-top") || 0, 10) -
        parseInt(Mt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function J0() {
  const e = this;
  function t(k, C) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(C)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: a, rtlTranslate: o, wrongRTL: l } = e,
    s = e.virtual && n.virtual.enabled,
    c = s ? e.virtual.slides.length : e.slides.length,
    f = ot(i, `.${e.params.slideClass}, swiper-slide`),
    p = s ? e.virtual.slides.length : f.length;
  let h = [];
  const v = [],
    g = [];
  let y = n.slidesOffsetBefore;
  typeof y == "function" && (y = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const u = e.snapGrid.length,
    d = e.slidesGrid.length;
  let m = n.spaceBetween,
    w = -y,
    x = 0,
    E = 0;
  if (typeof a > "u") return;
  typeof m == "string" && m.indexOf("%") >= 0
    ? (m = (parseFloat(m.replace("%", "")) / 100) * a)
    : typeof m == "string" && (m = parseFloat(m)),
    (e.virtualSize = -m),
    f.forEach((k) => {
      o ? (k.style.marginLeft = "") : (k.style.marginRight = ""),
        (k.style.marginBottom = ""),
        (k.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Mi(r, "--swiper-centered-offset-before", ""),
      Mi(r, "--swiper-centered-offset-after", ""));
  const P = n.grid && n.grid.rows > 1 && e.grid;
  P ? e.grid.initSlides(f) : e.grid && e.grid.unsetSlides();
  let b;
  const _ =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (k) => typeof n.breakpoints[k].slidesPerView < "u"
    ).length > 0;
  for (let k = 0; k < p; k += 1) {
    b = 0;
    let C;
    if (
      (f[k] && (C = f[k]),
      P && e.grid.updateSlide(k, C, f),
      !(f[k] && Mt(C, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        _ && (f[k].style[e.getDirectionLabel("width")] = "");
        const O = getComputedStyle(C),
          N = C.style.transform,
          D = C.style.webkitTransform;
        if (
          (N && (C.style.transform = "none"),
          D && (C.style.webkitTransform = "none"),
          n.roundLengths)
        )
          b = e.isHorizontal() ? $l(C, "width") : $l(C, "height");
        else {
          const H = t(O, "width"),
            ie = t(O, "padding-left"),
            Ce = t(O, "padding-right"),
            T = t(O, "margin-left"),
            z = t(O, "margin-right"),
            j = O.getPropertyValue("box-sizing");
          if (j && j === "border-box") b = H + T + z;
          else {
            const { clientWidth: G, offsetWidth: oe } = C;
            b = H + ie + Ce + T + z + (oe - G);
          }
        }
        N && (C.style.transform = N),
          D && (C.style.webkitTransform = D),
          n.roundLengths && (b = Math.floor(b));
      } else
        (b = (a - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (b = Math.floor(b)),
          f[k] && (f[k].style[e.getDirectionLabel("width")] = `${b}px`);
      f[k] && (f[k].swiperSlideSize = b),
        g.push(b),
        n.centeredSlides
          ? ((w = w + b / 2 + x / 2 + m),
            x === 0 && k !== 0 && (w = w - a / 2 - m),
            k === 0 && (w = w - a / 2 - m),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            E % n.slidesPerGroup === 0 && h.push(w),
            v.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && h.push(w),
            v.push(w),
            (w = w + b + m)),
        (e.virtualSize += b + m),
        (x = b),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + S),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + m}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`),
    P && e.grid.updateWrapperSize(b, h),
    !n.centeredSlides)
  ) {
    const k = [];
    for (let C = 0; C < h.length; C += 1) {
      let O = h[C];
      n.roundLengths && (O = Math.floor(O)),
        h[C] <= e.virtualSize - a && k.push(O);
    }
    (h = k),
      Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(e.virtualSize - a);
  }
  if (s && n.loop) {
    const k = g[0] + m;
    if (n.slidesPerGroup > 1) {
      const C = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        O = k * n.slidesPerGroup;
      for (let N = 0; N < C; N += 1) h.push(h[h.length - 1] + O);
    }
    for (let C = 0; C < e.virtual.slidesBefore + e.virtual.slidesAfter; C += 1)
      n.slidesPerGroup === 1 && h.push(h[h.length - 1] + k),
        v.push(v[v.length - 1] + k),
        (e.virtualSize += k);
  }
  if ((h.length === 0 && (h = [0]), m !== 0)) {
    const k =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    f.filter((C, O) =>
      !n.cssMode || n.loop ? !0 : O !== f.length - 1
    ).forEach((C) => {
      C.style[k] = `${m}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0;
    g.forEach((O) => {
      k += O + (m || 0);
    }),
      (k -= m);
    const C = k - a;
    h = h.map((O) => (O <= 0 ? -y : O > C ? C + S : O));
  }
  if (n.centerInsufficientSlides) {
    let k = 0;
    g.forEach((O) => {
      k += O + (m || 0);
    }),
      (k -= m);
    const C = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (k + C < a) {
      const O = (a - k - C) / 2;
      h.forEach((N, D) => {
        h[D] = N - O;
      }),
        v.forEach((N, D) => {
          v[D] = N + O;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: h,
      slidesGrid: v,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Mi(r, "--swiper-centered-offset-before", `${-h[0]}px`),
      Mi(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`
      );
    const k = -e.snapGrid[0],
      C = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + k)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + C));
  }
  if (
    (p !== c && e.emit("slidesLengthChange"),
    h.length !== u &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== d && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !s && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const k = `${n.containerModifierClass}backface-hidden`,
      C = e.el.classList.contains(k);
    p <= n.maxBackfaceHiddenSlides
      ? C || e.el.classList.add(k)
      : C && e.el.classList.remove(k);
  }
}
function e1(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    a;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const l = t.activeIndex + a;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (a = 0; a < n.length; a += 1)
    if (typeof n[a] < "u") {
      const l = n[a].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function t1() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const Fc = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function n1(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: a } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let s = 0; s < r.length; s += 1) {
    const c = r[s];
    let f = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= r[0].swiperSlideOffset);
    const p =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + l),
      h =
        (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (c.swiperSlideSize + l),
      v = -(o - f),
      g = v + t.slidesSizesGrid[s],
      y = v >= 0 && v <= t.size - t.slidesSizesGrid[s],
      S =
        (v >= 0 && v < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (v <= 0 && g >= t.size);
    S && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(s)),
      Fc(c, S, n.slideVisibleClass),
      Fc(c, y, n.slideFullyVisibleClass),
      (c.progress = i ? -p : p),
      (c.originalProgress = i ? -h : h);
  }
}
function r1(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * f) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: a, isEnd: o, progressLoop: l } = t;
  const s = a,
    c = o;
  if (r === 0) (i = 0), (a = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const f = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1;
    (a = f || i <= 0), (o = p || i >= 1), f && (i = 0), p && (i = 1);
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[f],
      v = t.slidesGrid[p],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= h ? (l = (y - h) / g) : (l = (y + g - v) / g), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: a, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !s && t.emit("reachBeginning toEdge"),
    o && !c && t.emit("reachEnd toEdge"),
    ((s && !a) || (c && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const _o = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function i1() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    a = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (p) => ot(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
  let s, c, f;
  if (a)
    if (n.loop) {
      let p = i - e.virtual.slidesBefore;
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (s = l(`[data-swiper-slide-index="${p}"]`));
    } else s = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((s = t.filter((p) => p.column === i)[0]),
        (f = t.filter((p) => p.column === i + 1)[0]),
        (c = t.filter((p) => p.column === i - 1)[0]))
      : (s = t[i]);
  s &&
    (o ||
      ((f = D0(s, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !f && (f = t[0]),
      (c = F0(s, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((p) => {
      _o(p, p === s, n.slideActiveClass),
        _o(p, p === f, n.slideNextClass),
        _o(p, p === c, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Yi = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Oo = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Vl = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((s, c) => o + r + c)),
        e.slides.forEach((s, c) => {
          l.includes(s.column) && Oo(e, c);
        });
      return;
    }
    const a = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= a + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > a) && Oo(e, l);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(a + t, n - 1); o += 1)
        o !== i && (o > a || o < i) && Oo(e, o);
  };
function a1(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let a = 0; a < t.length; a += 1)
    typeof t[a + 1] < "u"
      ? r >= t[a] && r < t[a + 1] - (t[a + 1] - t[a]) / 2
        ? (i = a)
        : r >= t[a] && r < t[a + 1] && (i = a + 1)
      : r >= t[a] && (i = a);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function o1(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: a, realIndex: o, snapIndex: l } = t;
  let s = e,
    c;
  const f = (v) => {
    let g = v - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof s > "u" && (s = a1(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, s);
    c = v + Math.floor((s - v) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), s === a && !t.params.loop)) {
    c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  if (s === a && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(s);
    return;
  }
  const p = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled && i.loop) h = f(s);
  else if (p) {
    const v = t.slides.filter((y) => y.column === s)[0];
    let g = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
      (h = Math.floor(g / i.grid.rows));
  } else if (t.slides[s]) {
    const v = t.slides[s].getAttribute("data-swiper-slide-index");
    v ? (h = parseInt(v, 10)) : (h = s);
  } else h = s;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: a,
    activeIndex: s,
  }),
    t.initialized && Vl(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function l1(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let a = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (a = !0), (o = l);
        break;
      }
  }
  if (i && a)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var s1 = {
  updateSize: Z0,
  updateSlides: J0,
  updateAutoHeight: e1,
  updateSlidesOffset: t1,
  updateSlidesProgress: n1,
  updateProgress: r1,
  updateSlidesClasses: i1,
  updateActiveIndex: o1,
  updateClickedSlide: l1,
};
function u1(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: a } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = j0(a, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function c1(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: a, progress: o } = n;
  let l = 0,
    s = 0;
  const c = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (s = e),
    i.roundLengths && ((l = Math.floor(l)), (s = Math.floor(s))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : s),
    i.cssMode
      ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -s)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (s -= n.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${l}px, ${s}px, ${c}px)`));
  let f;
  const p = n.maxTranslate() - n.minTranslate();
  p === 0 ? (f = 0) : (f = (e - n.minTranslate()) / p),
    f !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function f1() {
  return -this.snapGrid[0];
}
function d1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function p1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const a = this,
    { params: o, wrapperEl: l } = a;
  if (a.animating && o.preventInteractionOnTransition) return !1;
  const s = a.minTranslate(),
    c = a.maxTranslate();
  let f;
  if (
    (r && e > s ? (f = s) : r && e < c ? (f = c) : (f = e),
    a.updateProgress(f),
    o.cssMode)
  ) {
    const p = a.isHorizontal();
    if (t === 0) l[p ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!a.support.smoothScroll)
        return (
          Up({ swiper: a, targetPosition: -f, side: p ? "left" : "top" }), !0
        );
      l.scrollTo({ [p ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (a.setTransition(0),
        a.setTranslate(f),
        n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd")))
      : (a.setTransition(t),
        a.setTranslate(f),
        n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (h) {
              !a ||
                a.destroyed ||
                (h.target === this &&
                  (a.wrapperEl.removeEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  (a.animating = !1),
                  n && a.emit("transitionEnd")));
            }),
          a.wrapperEl.addEventListener(
            "transitionend",
            a.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var m1 = {
  getTranslate: u1,
  setTranslate: c1,
  minTranslate: f1,
  maxTranslate: d1,
  translateTo: p1,
};
function h1(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Qp(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: a, previousIndex: o } = t;
  let l = r;
  if (
    (l || (a > o ? (l = "next") : a < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && a !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function v1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Qp({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function g1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Qp({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var y1 = { setTransition: h1, transitionStart: v1, transitionEnd: g1 };
function w1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const a = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: s,
    slidesGrid: c,
    previousIndex: f,
    activeIndex: p,
    rtlTranslate: h,
    wrapperEl: v,
    enabled: g,
  } = a;
  if (
    (!g && !r && !i) ||
    a.destroyed ||
    (a.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = a.params.speed);
  const y = Math.min(a.params.slidesPerGroupSkip, o);
  let S = y + Math.floor((o - y) / a.params.slidesPerGroup);
  S >= s.length && (S = s.length - 1);
  const u = -s[S];
  if (l.normalizeSlideIndex)
    for (let m = 0; m < c.length; m += 1) {
      const w = -Math.floor(u * 100),
        x = Math.floor(c[m] * 100),
        E = Math.floor(c[m + 1] * 100);
      typeof c[m + 1] < "u"
        ? w >= x && w < E - (E - x) / 2
          ? (o = m)
          : w >= x && w < E && (o = m + 1)
        : w >= x && (o = m);
    }
  if (
    a.initialized &&
    o !== p &&
    ((!a.allowSlideNext &&
      (h
        ? u > a.translate && u > a.minTranslate()
        : u < a.translate && u < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        u > a.translate &&
        u > a.maxTranslate() &&
        (p || 0) !== o))
  )
    return !1;
  o !== (f || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(u);
  let d;
  if (
    (o > p ? (d = "next") : o < p ? (d = "prev") : (d = "reset"),
    (h && -u === a.translate) || (!h && u === a.translate))
  )
    return (
      a.updateActiveIndex(o),
      l.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      l.effect !== "slide" && a.setTranslate(u),
      d !== "reset" && (a.transitionStart(n, d), a.transitionEnd(n, d)),
      !1
    );
  if (l.cssMode) {
    const m = a.isHorizontal(),
      w = h ? u : -u;
    if (t === 0) {
      const x = a.virtual && a.params.virtual.enabled;
      x &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        x && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[m ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (v[m ? "scrollLeft" : "scrollTop"] = w),
        x &&
          requestAnimationFrame(() => {
            (a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1);
          });
    } else {
      if (!a.support.smoothScroll)
        return (
          Up({ swiper: a, targetPosition: w, side: m ? "left" : "top" }), !0
        );
      v.scrollTo({ [m ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    a.setTransition(t),
    a.setTranslate(u),
    a.updateActiveIndex(o),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", t, r),
    a.transitionStart(n, d),
    t === 0
      ? a.transitionEnd(n, d)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (w) {
            !a ||
              a.destroyed ||
              (w.target === this &&
                (a.wrapperEl.removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(n, d)));
          }),
        a.wrapperEl.addEventListener(
          "transitionend",
          a.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function x1(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const a = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (a) {
        const h = o * i.params.grid.rows;
        l = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const s = a
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: c } = i.params;
      let f = i.params.slidesPerView;
      f === "auto"
        ? (f = i.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          c && f % 2 === 0 && (f = f + 1));
      let p = s - l < f;
      if (
        (c && (p = p || l < Math.ceil(f / 2)),
        r && c && i.params.slidesPerView !== "auto" && !a && (p = !1),
        p)
      ) {
        const h = c
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? l + 1 : l - s + 1,
          slideRealIndex: h === "next" ? i.realIndex : void 0,
        });
      }
      if (a) {
        const h = o * i.params.grid.rows;
        o = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function S1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: a, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = a.slidesPerGroup;
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const s = r.activeIndex < a.slidesPerGroupSkip ? 1 : l,
    c = r.virtual && a.virtual.enabled;
  if (a.loop) {
    if (o && !c && a.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + s, e, t, n);
        }),
        !0
      );
  }
  return a.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + s, e, t, n);
}
function k1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: a,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: s,
      animating: c,
    } = r;
  if (!s || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const f = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !f && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const p = l ? r.translate : -r.translate;
  function h(u) {
    return u < 0 ? -Math.floor(Math.abs(u)) : Math.floor(u);
  }
  const v = h(p),
    g = a.map((u) => h(u));
  let y = a[g.indexOf(v) - 1];
  if (typeof y > "u" && i.cssMode) {
    let u;
    a.forEach((d, m) => {
      v >= d && (u = m);
    }),
      typeof u < "u" && (y = a[u > 0 ? u - 1 : u]);
  }
  let S = 0;
  if (
    (typeof y < "u" &&
      ((S = o.indexOf(y)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const u =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(u, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function E1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function b1(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let a = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, a),
    l = o + Math.floor((a - o) / i.params.slidesPerGroup),
    s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[l]) {
    const c = i.snapGrid[l],
      f = i.snapGrid[l + 1];
    s - c > (f - c) * r && (a += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[l - 1],
      f = i.snapGrid[l];
    s - c <= (f - c) * r && (a -= i.params.slidesPerGroup);
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, i.slidesGrid.length - 1)),
    i.slideTo(a, e, t, n)
  );
}
function C1() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    a;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              ot(n, `${o}[data-swiper-slide-index="${a}"]`)[0]
            )),
            Dl(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            ot(n, `${o}[data-swiper-slide-index="${a}"]`)[0]
          )),
          Dl(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var T1 = {
  slideTo: w1,
  slideToLoop: x1,
  slideNext: S1,
  slidePrev: k1,
  slideReset: E1,
  slideToClosest: b1,
  slideToClickedSlide: C1,
};
function P1(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      ot(r, `.${n.slideClass}, swiper-slide`).forEach((p, h) => {
        p.setAttribute("data-swiper-slide-index", h);
      });
    },
    a = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (a ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    s = a && t.slides.length % n.grid.rows !== 0,
    c = (f) => {
      for (let p = 0; p < f; p += 1) {
        const h = t.isElement
          ? Xr("swiper-slide", [n.slideBlankClass])
          : Xr("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(h);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const f = o - (t.slides.length % o);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      Ea(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (s) {
    if (n.loopAddBlankSlides) {
      const f = n.grid.rows - (t.slides.length % n.grid.rows);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      Ea(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function _1(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: a,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const s = this;
  if (!s.params.loop) return;
  s.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: f,
      allowSlideNext: p,
      slidesEl: h,
      params: v,
    } = s,
    { centeredSlides: g } = v;
  if (
    ((s.allowSlidePrev = !0),
    (s.allowSlideNext = !0),
    s.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && s.snapIndex === 0
        ? s.slideTo(s.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && s.snapIndex < v.slidesPerView
        ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
        : s.snapIndex === s.snapGrid.length - 1 &&
          s.slideTo(s.virtual.slidesBefore, 0, !1, !0)),
      (s.allowSlidePrev = f),
      (s.allowSlideNext = p),
      s.emit("loopFix");
    return;
  }
  let y = v.slidesPerView;
  y === "auto"
    ? (y = s.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(v.slidesPerView, 10))),
      g && y % 2 === 0 && (y = y + 1));
  const S = v.slidesPerGroupAuto ? y : v.slidesPerGroup;
  let u = S;
  u % S !== 0 && (u += S - (u % S)),
    (u += v.loopAdditionalSlides),
    (s.loopedSlides = u);
  const d = s.grid && v.grid && v.grid.rows > 1;
  c.length < y + u
    ? Ea(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : d &&
      v.grid.fill === "row" &&
      Ea(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const m = [],
    w = [];
  let x = s.activeIndex;
  typeof a > "u"
    ? (a = s.getSlideIndex(
        c.filter((N) => N.classList.contains(v.slideActiveClass))[0]
      ))
    : (x = a);
  const E = r === "next" || !r,
    P = r === "prev" || !r;
  let b = 0,
    _ = 0;
  const k = d ? Math.ceil(c.length / v.grid.rows) : c.length,
    O = (d ? c[a].column : a) + (g && typeof i > "u" ? -y / 2 + 0.5 : 0);
  if (O < u) {
    b = Math.max(u - O, S);
    for (let N = 0; N < u - O; N += 1) {
      const D = N - Math.floor(N / k) * k;
      if (d) {
        const H = k - D - 1;
        for (let ie = c.length - 1; ie >= 0; ie -= 1)
          c[ie].column === H && m.push(ie);
      } else m.push(k - D - 1);
    }
  } else if (O + y > k - u) {
    _ = Math.max(O - (k - u * 2), S);
    for (let N = 0; N < _; N += 1) {
      const D = N - Math.floor(N / k) * k;
      d
        ? c.forEach((H, ie) => {
            H.column === D && w.push(ie);
          })
        : w.push(D);
    }
  }
  if (
    ((s.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      s.__preventObserver__ = !1;
    }),
    P &&
      m.forEach((N) => {
        (c[N].swiperLoopMoveDOM = !0),
          h.prepend(c[N]),
          (c[N].swiperLoopMoveDOM = !1);
      }),
    E &&
      w.forEach((N) => {
        (c[N].swiperLoopMoveDOM = !0),
          h.append(c[N]),
          (c[N].swiperLoopMoveDOM = !1);
      }),
    s.recalcSlides(),
    v.slidesPerView === "auto"
      ? s.updateSlides()
      : d &&
        ((m.length > 0 && P) || (w.length > 0 && E)) &&
        s.slides.forEach((N, D) => {
          s.grid.updateSlide(D, N, s.slides);
        }),
    v.watchSlidesProgress && s.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && P) {
      if (typeof t > "u") {
        const N = s.slidesGrid[x],
          H = s.slidesGrid[x + b] - N;
        l
          ? s.setTranslate(s.translate - H)
          : (s.slideTo(x + Math.ceil(b), 0, !1, !0),
            i &&
              ((s.touchEventsData.startTranslate =
                s.touchEventsData.startTranslate - H),
              (s.touchEventsData.currentTranslate =
                s.touchEventsData.currentTranslate - H)));
      } else if (i) {
        const N = d ? m.length / v.grid.rows : m.length;
        s.slideTo(s.activeIndex + N, 0, !1, !0),
          (s.touchEventsData.currentTranslate = s.translate);
      }
    } else if (w.length > 0 && E)
      if (typeof t > "u") {
        const N = s.slidesGrid[x],
          H = s.slidesGrid[x - _] - N;
        l
          ? s.setTranslate(s.translate - H)
          : (s.slideTo(x - _, 0, !1, !0),
            i &&
              ((s.touchEventsData.startTranslate =
                s.touchEventsData.startTranslate - H),
              (s.touchEventsData.currentTranslate =
                s.touchEventsData.currentTranslate - H)));
      } else {
        const N = d ? w.length / v.grid.rows : w.length;
        s.slideTo(s.activeIndex - N, 0, !1, !0);
      }
  }
  if (
    ((s.allowSlidePrev = f),
    (s.allowSlideNext = p),
    s.controller && s.controller.control && !o)
  ) {
    const N = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: a,
      byController: !0,
    };
    Array.isArray(s.controller.control)
      ? s.controller.control.forEach((D) => {
          !D.destroyed &&
            D.params.loop &&
            D.loopFix({
              ...N,
              slideTo: D.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : s.controller.control instanceof s.constructor &&
        s.controller.control.params.loop &&
        s.controller.control.loopFix({
          ...N,
          slideTo:
            s.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  s.emit("loopFix");
}
function O1() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const a =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[a] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var z1 = { loopCreate: P1, loopFix: _1, loopDestroy: O1 };
function I1(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function M1() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var N1 = { setGrabCursor: I1, unsetGrabCursor: M1 };
function L1(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Jn() || r === $e()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Dc(e, t, n) {
  const r = $e(),
    { params: i } = e,
    a = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return a && (n <= o || n >= r.innerWidth - o)
    ? a === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function A1(e) {
  const t = this,
    n = Jn();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Dc(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: a, touches: o, enabled: l } = t;
  if (
    !l ||
    (!a.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && a.preventInteractionOnTransition)
  )
    return;
  !t.animating && a.cssMode && a.loop && t.loopFix();
  let s = r.target;
  if (
    (a.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(s)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!a.noSwipingClass && a.noSwipingClass !== "",
    f = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && f && (s = f[0]);
  const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    h = !!(r.target && r.target.shadowRoot);
  if (a.noSwiping && (h ? L1(p, s) : s.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !s.closest(a.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const v = o.currentX,
    g = o.currentY;
  if (!Dc(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = g),
    (i.touchStartTime = ka()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  s.matches(i.focusableElements) &&
    ((y = !1), s.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== s &&
      n.activeElement.blur();
  const S = y && t.allowTouchMove && a.touchStartPreventDefault;
  (a.touchStartForcePreventDefault || S) &&
    !s.isContentEditable &&
    r.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function j1(e) {
  const t = Jn(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: a, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let s = e;
  if (
    (s.originalEvent && (s = s.originalEvent),
    s.type === "pointermove" &&
      (r.touchId !== null || s.pointerId !== r.pointerId))
  )
    return;
  let c;
  if (s.type === "touchmove") {
    if (
      ((c = [...s.changedTouches].filter((E) => E.identifier === r.touchId)[0]),
      !c || c.identifier !== r.touchId)
    )
      return;
  } else c = s;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
    return;
  }
  const f = c.pageX,
    p = c.pageY;
  if (s.preventedByNestedSwiper) {
    (a.startX = f), (a.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    s.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(a, { startX: f, startY: p, currentX: f, currentY: p }),
        (r.touchStartTime = ka()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < a.startY && n.translate <= n.maxTranslate()) ||
        (p > a.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (f < a.startX && n.translate <= n.maxTranslate()) ||
      (f > a.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    s.target === t.activeElement &&
    s.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", s),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = f),
    (a.currentY = p);
  const h = a.currentX - a.startX,
    v = a.currentY - a.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : h * h + v * v >= 25 &&
        ((E = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", s),
    typeof r.startMoving > "u" &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (s.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && s.cancelable && s.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
  let g = n.isHorizontal() ? h : v,
    y = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
  i.oneWayMovement &&
    ((g = Math.abs(g) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
    (a.diff = g),
    (g *= i.touchRatio),
    o && ((g = -g), (y = -y));
  const S = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = y > 0 ? "prev" : "next");
  const u = n.params.loop && !i.cssMode,
    d =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (u && d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", s);
  }
  let m;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      u &&
      d &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(a, {
      startX: f,
      startY: p,
      currentX: f,
      currentY: p,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", s),
    (r.isMoved = !0),
    (r.currentTranslate = g + r.startTranslate);
  let w = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    g > 0
      ? (u &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** x)))
      : g < 0 &&
        (u &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** x))),
    w && (s.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (r.currentTranslate = r.startTranslate),
          (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function R1(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((x) => x.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: s,
    slidesGrid: c,
    enabled: f,
  } = t;
  if (!f || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const p = ka(),
    h = p - n.touchStartTime;
  if (t.allowClick) {
    const x = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((x && x[0]) || r.target, x),
      t.emit("tap click", r),
      h < 300 &&
        p - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = ka()),
    Dl(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (o.followFinger
      ? (v = s ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const g = v >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    S = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < c.length;
    x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const E = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof c[x + E] < "u"
      ? (g || (v >= c[x] && v < c[x + E])) && ((y = x), (S = c[x + E] - c[x]))
      : (g || v >= c[x]) && ((y = x), (S = c[c.length - 1] - c[c.length - 2]));
  }
  let u = null,
    d = null;
  o.rewind &&
    (t.isBeginning
      ? (d =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (u = 0));
  const m = (v - c[y]) / S,
    w = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? u : y + w)
        : t.slideTo(y)),
      t.swipeDirection === "prev" &&
        (m > 1 - o.longSwipesRatio
          ? t.slideTo(y + w)
          : d !== null && m < 0 && Math.abs(m) > o.longSwipesRatio
          ? t.slideTo(d)
          : t.slideTo(y));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(y + w)
        : t.slideTo(y)
      : (t.swipeDirection === "next" && t.slideTo(u !== null ? u : y + w),
        t.swipeDirection === "prev" && t.slideTo(d !== null ? d : y));
  }
}
function $c() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: a } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
}
function F1(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function D1() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const a = e.maxTranslate() - e.minTranslate();
  a === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / a),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function $1(e) {
  const t = this;
  Yi(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function V1() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Kp = (e, t) => {
  const n = Jn(),
    { params: r, el: i, wrapperEl: a, device: o } = e,
    l = !!r.nested,
    s = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  !i ||
    typeof i == "string" ||
    (n[s]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[s]("touchstart", e.onTouchStart, { passive: !1 }),
    i[s]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[s]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[s]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[s]("touchend", e.onTouchEnd, { passive: !0 }),
    n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[s]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[s]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[s]("click", e.onClick, !0),
    r.cssMode && a[s]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          $c,
          !0
        )
      : e[c]("observerUpdate", $c, !0),
    i[s]("load", e.onLoad, { capture: !0 }));
};
function B1() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = A1.bind(e)),
    (e.onTouchMove = j1.bind(e)),
    (e.onTouchEnd = R1.bind(e)),
    (e.onDocumentTouchStart = V1.bind(e)),
    t.cssMode && (e.onScroll = D1.bind(e)),
    (e.onClick = F1.bind(e)),
    (e.onLoad = $1.bind(e)),
    Kp(e, "on");
}
function H1() {
  Kp(this, "off");
}
var U1 = { attachEvents: B1, detachEvents: H1 };
const Vc = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function W1() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    a = r.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const s = (o in a ? a[o] : void 0) || e.originalParams,
    c = Vc(e, r),
    f = Vc(e, s),
    p = e.params.grabCursor,
    h = s.grabCursor,
    v = r.enabled;
  c && !f
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      f &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((s.grid.fill && s.grid.fill === "column") ||
        (!s.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    p && !h ? e.unsetGrabCursor() : !p && h && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((m) => {
      if (typeof s[m] > "u") return;
      const w = r[m] && r[m].enabled,
        x = s[m] && s[m].enabled;
      w && !x && e[m].disable(), !w && x && e[m].enable();
    });
  const g = s.direction && s.direction !== r.direction,
    y = r.loop && (s.slidesPerView !== r.slidesPerView || g),
    S = r.loop;
  g && n && e.changeDirection(), Me(e.params, s);
  const u = e.params.enabled,
    d = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !u ? e.disable() : !v && u && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", s),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && d
        ? (e.loopCreate(t), e.updateSlides())
        : S && !d && e.loopDestroy()),
    e.emit("breakpoint", s);
}
function G1(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = $e(),
    a = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const s = parseFloat(l.substr(1));
        return { value: a * s, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, s) => parseInt(l.value, 10) - parseInt(s.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: s, value: c } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = s)
      : c <= n.clientWidth && (r = s);
  }
  return r || "max";
}
var Y1 = { setBreakpoint: W1, getBreakpoint: G1 };
function X1(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Q1() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: a } = e,
    o = X1(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function K1() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var q1 = { addClasses: Q1, removeClasses: K1 };
function Z1() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      a = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > a;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var J1 = { checkOverflow: Z1 },
  Bl = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ey(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      a = r[i];
    if (typeof a != "object" || a === null) {
      Me(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in a))
    ) {
      Me(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Me(t, r);
  };
}
const zo = {
    eventsEmitter: q0,
    update: s1,
    translate: m1,
    transition: y1,
    slide: T1,
    loop: z1,
    grabCursor: N1,
    events: U1,
    breakpoints: Y1,
    checkOverflow: J1,
    classes: q1,
  },
  Io = {};
let Zs = class ut {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Me({}, n)),
      t && !n.el && (n.el = t);
    const o = Jn();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const f = [];
      return (
        o.querySelectorAll(n.el).forEach((p) => {
          const h = Me({}, n, { el: p });
          f.push(new ut(h));
        }),
        f
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Yp()),
      (l.device = Xp({ userAgent: n.userAgent })),
      (l.browser = X0()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const s = {};
    l.modules.forEach((f) => {
      f({
        params: n,
        swiper: l,
        extendParams: ey(n, s),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const c = Me({}, Bl, s);
    return (
      (l.params = Me({}, c, Io, n)),
      (l.originalParams = Me({}, l.params)),
      (l.passedParams = Me({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((f) => {
          l.on(f, l.params.on[f]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = ot(n, `.${r.slideClass}, swiper-slide`),
      a = ba(i[0]);
    return ba(t) - a;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = ot(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: a,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: s,
        activeIndex: c,
      } = r;
    let f = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let p = a[c] ? Math.ceil(a[c].swiperSlideSize) : 0,
        h;
      for (let v = c + 1; v < a.length; v += 1)
        a[v] &&
          !h &&
          ((p += Math.ceil(a[v].swiperSlideSize)), (f += 1), p > s && (h = !0));
      for (let v = c - 1; v >= 0; v -= 1)
        a[v] &&
          !h &&
          ((p += a[v].swiperSlideSize), (f += 1), p > s && (h = !0));
    } else if (t === "current")
      for (let p = c + 1; p < a.length; p += 1)
        (n ? o[p] + l[p] - o[c] < s : o[p] - o[c] < s) && (f += 1);
    else for (let p = c - 1; p >= 0; p -= 1) o[c] - o[p] < s && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Yi(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let a;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        a = t.slideTo(o.length - 1, 0, !1, !0);
      } else a = t.slideTo(t.activeIndex, 0, !1, !0);
      a || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((a) => {
          t === "vertical" ? (a.style.width = "") : (a.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : ot(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Xr("div", n.params.wrapperClass)),
        r.append(o),
        ot(r, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Mt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Mt(r, "direction") === "rtl"),
        wrongRTL: Mt(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((a) => {
        a.complete
          ? Yi(n, a)
          : a.addEventListener("load", (o) => {
              Yi(n, o.target);
            });
      }),
      Vl(n),
      (n.initialized = !0),
      Vl(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: a, wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          a && typeof a != "string" && a.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((s) => {
              s.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                s.removeAttribute("style"),
                s.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((s) => {
          r.off(s);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), L0(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Me(Io, t);
  }
  static get extendedDefaults() {
    return Io;
  }
  static get defaults() {
    return Bl;
  }
  static installModule(t) {
    ut.prototype.__modules__ || (ut.prototype.__modules__ = []);
    const n = ut.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ut.installModule(n)), ut)
      : (ut.installModule(t), ut);
  }
};
Object.keys(zo).forEach((e) => {
  Object.keys(zo[e]).forEach((t) => {
    Zs.prototype[t] = zo[e][t];
  });
});
Zs.use([Q0, K0]);
const qp = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function $n(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : mn(t[r]) && mn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : $n(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Zp(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Jp(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function em(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function tm(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function ty(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function ny(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: a,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: s,
  } = e;
  const c = i.filter(
      (_) => _ !== "children" && _ !== "direction" && _ !== "wrapperClass"
    ),
    {
      params: f,
      pagination: p,
      navigation: h,
      scrollbar: v,
      virtual: g,
      thumbs: y,
    } = t;
  let S, u, d, m, w, x, E, P;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    f.thumbs &&
    !f.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      f.controller &&
      !f.controller.control &&
      (u = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || s) &&
      (f.pagination || f.pagination === !1) &&
      p &&
      !p.el &&
      (d = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (f.scrollbar || f.scrollbar === !1) &&
      v &&
      !v.el &&
      (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || a) &&
      (f.navigation || f.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (w = !0);
  const b = (_) => {
    t[_] &&
      (t[_].destroy(),
      _ === "navigation"
        ? (t.isElement && (t[_].prevEl.remove(), t[_].nextEl.remove()),
          (f[_].prevEl = void 0),
          (f[_].nextEl = void 0),
          (t[_].prevEl = void 0),
          (t[_].nextEl = void 0))
        : (t.isElement && t[_].el.remove(),
          (f[_].el = void 0),
          (t[_].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (f.loop && !r.loop ? (x = !0) : !f.loop && r.loop ? (E = !0) : (P = !0)),
    c.forEach((_) => {
      if (mn(f[_]) && mn(r[_]))
        Object.assign(f[_], r[_]),
          (_ === "navigation" || _ === "pagination" || _ === "scrollbar") &&
            "enabled" in r[_] &&
            !r[_].enabled &&
            b(_);
      else {
        const k = r[_];
        (k === !0 || k === !1) &&
        (_ === "navigation" || _ === "pagination" || _ === "scrollbar")
          ? k === !1 && b(_)
          : (f[_] = r[_]);
      }
    }),
    c.includes("controller") &&
      !u &&
      t.controller &&
      t.controller.control &&
      f.controller &&
      f.controller.control &&
      (t.controller.control = f.controller.control),
    i.includes("children") && n && g && f.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        f.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && f.loop && (P = !0),
    S && y.init() && y.update(!0),
    u && (t.controller.control = f.controller.control),
    d &&
      (t.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-pagination"),
        s.part.add("pagination"),
        t.el.appendChild(s)),
      s && (f.pagination.el = s),
      p.init(),
      p.render(),
      p.update()),
    m &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (f.scrollbar.el = l),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    w &&
      (t.isElement &&
        ((!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-next"),
          (a.innerHTML = t.hostEl.constructor.nextButtonSvg),
          a.part.add("button-next"),
          t.el.appendChild(a)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      a && (f.navigation.nextEl = a),
      o && (f.navigation.prevEl = o),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (x || P) && t.loopDestroy(),
    (E || P) && t.loopCreate(),
    t.update();
}
function ry(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  $n(n, Bl), (n._emitClasses = !0), (n.init = !1);
  const a = {},
    o = qp.map((s) => s.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((s) => {
      typeof e[s] > "u" ||
        (o.indexOf(s) >= 0
          ? mn(e[s])
            ? ((n[s] = {}), (i[s] = {}), $n(n[s], e[s]), $n(i[s], e[s]))
            : ((n[s] = e[s]), (i[s] = e[s]))
          : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function"
          ? t
            ? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
            : (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
          : (a[s] = e[s]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((s) => {
      n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s];
    }),
    { params: n, passedParams: i, rest: a, events: r }
  );
}
function iy(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: a,
    scrollbarEl: o,
    swiper: l,
  } = e;
  Zp(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    Jp(t) &&
      a &&
      ((l.params.pagination.el = a), (l.originalParams.pagination.el = a)),
    em(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function ay(e, t, n, r, i) {
  const a = [];
  if (!t) return a;
  const o = (s) => {
    a.indexOf(s) < 0 && a.push(s);
  };
  if (n && r) {
    const s = r.map(i),
      c = n.map(i);
    s.join("") !== c.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    qp
      .filter((s) => s[0] === "_")
      .map((s) => s.replace(/_/, ""))
      .forEach((s) => {
        if (s in e && s in t)
          if (mn(e[s]) && mn(t[s])) {
            const c = Object.keys(e[s]),
              f = Object.keys(t[s]);
            c.length !== f.length
              ? o(s)
              : (c.forEach((p) => {
                  e[s][p] !== t[s][p] && o(s);
                }),
                f.forEach((p) => {
                  e[s][p] !== t[s][p] && o(s);
                }));
          } else e[s] !== t[s] && o(s);
      }),
    a
  );
}
const oy = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Ca() {
  return (
    (Ca = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ca.apply(this, arguments)
  );
}
function nm(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function rm(e) {
  const t = [];
  return (
    te.Children.toArray(e).forEach((n) => {
      nm(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          rm(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function ly(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    te.Children.toArray(e).forEach((r) => {
      if (nm(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = rm(r.props.children);
        i.length > 0 ? i.forEach((a) => t.push(a)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function sy(e, t, n) {
  if (!n) return null;
  const r = (f) => {
      let p = f;
      return (
        f < 0 ? (p = t.length + f) : p >= t.length && (p = p - t.length), p
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: a, to: o } = n,
    l = e.params.loop ? -t.length : 0,
    s = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let f = l; f < s; f += 1) f >= a && f <= o && c.push(t[r(f)]);
  return c.map((f, p) =>
    te.cloneElement(f, {
      swiper: e,
      style: i,
      key: f.props.virtualIndex || f.key || `slide-${p}`,
    })
  );
}
function Cr(e, t) {
  return typeof window > "u" ? F.useEffect(e, t) : F.useLayoutEffect(e, t);
}
const Bc = F.createContext(null),
  uy = F.createContext(null),
  im = F.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: a,
        onSwiper: o,
        ...l
      } = e === void 0 ? {} : e,
      s = !1;
    const [c, f] = F.useState("swiper"),
      [p, h] = F.useState(null),
      [v, g] = F.useState(!1),
      y = F.useRef(!1),
      S = F.useRef(null),
      u = F.useRef(null),
      d = F.useRef(null),
      m = F.useRef(null),
      w = F.useRef(null),
      x = F.useRef(null),
      E = F.useRef(null),
      P = F.useRef(null),
      { params: b, passedParams: _, rest: k, events: C } = ry(l),
      { slides: O, slots: N } = ly(a),
      D = () => {
        g(!v);
      };
    Object.assign(b.on, {
      _containerClasses(z, j) {
        f(j);
      },
    });
    const H = () => {
      Object.assign(b.on, C), (s = !0);
      const z = { ...b };
      if (
        (delete z.wrapperClass,
        (u.current = new Zs(z)),
        u.current.virtual && u.current.params.virtual.enabled)
      ) {
        u.current.virtual.slides = O;
        const j = {
          cache: !1,
          slides: O,
          renderExternal: h,
          renderExternalUpdate: !1,
        };
        $n(u.current.params.virtual, j),
          $n(u.current.originalParams.virtual, j);
      }
    };
    S.current || H(), u.current && u.current.on("_beforeBreakpoint", D);
    const ie = () => {
        s ||
          !C ||
          !u.current ||
          Object.keys(C).forEach((z) => {
            u.current.on(z, C[z]);
          });
      },
      Ce = () => {
        !C ||
          !u.current ||
          Object.keys(C).forEach((z) => {
            u.current.off(z, C[z]);
          });
      };
    F.useEffect(() => () => {
      u.current && u.current.off("_beforeBreakpoint", D);
    }),
      F.useEffect(() => {
        !y.current &&
          u.current &&
          (u.current.emitSlidesClasses(), (y.current = !0));
      }),
      Cr(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            u.current.destroyed && H(),
            iy(
              {
                el: S.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: E.current,
                scrollbarEl: P.current,
                swiper: u.current,
              },
              b
            ),
            o && !u.current.destroyed && o(u.current),
            () => {
              u.current && !u.current.destroyed && u.current.destroy(!0, !1);
            }
          );
      }, []),
      Cr(() => {
        ie();
        const z = ay(_, d.current, O, m.current, (j) => j.key);
        return (
          (d.current = _),
          (m.current = O),
          z.length &&
            u.current &&
            !u.current.destroyed &&
            ny({
              swiper: u.current,
              slides: O,
              passedParams: _,
              changedParams: z,
              nextEl: w.current,
              prevEl: x.current,
              scrollbarEl: P.current,
              paginationEl: E.current,
            }),
          () => {
            Ce();
          }
        );
      }),
      Cr(() => {
        oy(u.current);
      }, [p]);
    function T() {
      return b.virtual
        ? sy(u.current, O, p)
        : O.map((z, j) =>
            te.cloneElement(z, { swiper: u.current, swiperSlideIndex: j })
          );
    }
    return te.createElement(
      r,
      Ca({ ref: S, className: tm(`${c}${n ? ` ${n}` : ""}`) }, k),
      te.createElement(
        uy.Provider,
        { value: u.current },
        N["container-start"],
        te.createElement(
          i,
          { className: ty(b.wrapperClass) },
          N["wrapper-start"],
          T(),
          N["wrapper-end"]
        ),
        Zp(b) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement("div", {
              ref: x,
              className: "swiper-button-prev",
            }),
            te.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        em(b) &&
          te.createElement("div", { ref: P, className: "swiper-scrollbar" }),
        Jp(b) &&
          te.createElement("div", { ref: E, className: "swiper-pagination" }),
        N["container-end"]
      )
    );
  });
im.displayName = "Swiper";
const Js = F.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: a,
    zoom: o,
    lazy: l,
    virtualIndex: s,
    swiperSlideIndex: c,
    ...f
  } = e === void 0 ? {} : e;
  const p = F.useRef(null),
    [h, v] = F.useState("swiper-slide"),
    [g, y] = F.useState(!1);
  function S(w, x, E) {
    x === p.current && v(E);
  }
  Cr(() => {
    if (
      (typeof c < "u" && (p.current.swiperSlideIndex = c),
      t && (t.current = p.current),
      !(!p.current || !a))
    ) {
      if (a.destroyed) {
        h !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        a.on("_slideClass", S),
        () => {
          a && a.off("_slideClass", S);
        }
      );
    }
  }),
    Cr(() => {
      a && p.current && !a.destroyed && v(a.getSlideClasses(p.current));
    }, [a]);
  const u = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(u) : r),
    m = () => {
      y(!0);
    };
  return te.createElement(
    n,
    Ca(
      {
        ref: p,
        className: tm(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": s,
        onLoad: m,
      },
      f
    ),
    o &&
      te.createElement(
        Bc.Provider,
        { value: u },
        te.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          d(),
          l &&
            !g &&
            te.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      te.createElement(
        Bc.Provider,
        { value: u },
        d(),
        l &&
          !g &&
          te.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Js.displayName = "SwiperSlide";
const cy = ({ videos: e, campaigns: t }) => {
    const [n, r] = F.useState(null),
      i = (o) => {
        r(o);
      },
      a = () => {
        r(null);
      };
    return M.jsxs("div", {
      className: "container",
      children: [
        M.jsxs(im, {
          effect: "coverflow",
          grabCursor: !0,
          centeredSlides: !0,
          loop: !0,
          slidesPerView: "auto",
          coverflowEffect: { rotate: 0, stretch: 0, depth: 100, modifier: 2.5 },
          pagination: { el: ".swiper-pagination", clickable: !0 },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: !0,
          },
          modules: [U0, V0, $0],
          className: "swiper_container",
          children: [
            e.map((o, l) =>
              M.jsx(M.Fragment, {
                children: M.jsx(
                  Js,
                  {
                    onClick: () => i(l),
                    children: M.jsxs("div", {
                      className: "video-container",
                      children: [
                        M.jsx("video", {
                          src: o,
                          loop: !0,
                          muted: !0,
                          autoPlay: !0,
                          playsInline: !0,
                          className: "vid",
                        }),
                        M.jsx("div", {
                          className: "carousel-div",
                          children: M.jsxs("p", {
                            className: "txt2",
                            children: [
                              t[l].campaignName,
                              " ",
                              M.jsx("br", {}),
                              " From",
                              " ",
                              t[l].offerPrice.currency,
                              t[l].offerPrice.price,
                            ],
                          }),
                        }),
                      ],
                    }),
                  },
                  l
                ),
              })
            ),
            M.jsxs("div", {
              className: "slider-controler",
              children: [
                M.jsx("div", {
                  className: "swiper-button-prev slider-arrow",
                  children: M.jsx("ion-icon", { name: "arrow-back-outline" }),
                }),
                M.jsx("div", {
                  className: "swiper-button-next slider-arrow",
                  children: M.jsx("ion-icon", {
                    name: "arrow-forward-outline",
                  }),
                }),
                M.jsx("div", { className: "swiper-pagination" }),
              ],
            }),
          ],
        }),
        n !== null && M.jsx(fy, { campaigns: t, currentIndex: n, onClose: a }),
      ],
    });
  },
  fy = ({ campaigns: e, currentIndex: t, onClose: n }) => {
    const [r, i] = F.useState(t),
      [a, o] = F.useState(0),
      [l, s] = F.useState({}),
      [c, f] = F.useState(!1),
      [p, h] = F.useState(!1),
      [v, g] = F.useState(null),
      [y, S] = F.useState(!1),
      u = F.useRef([]),
      d = F.useRef(null),
      m = F.useRef(null),
      w = window.innerWidth <= 450;
    F.useEffect(() => {
      const T = new IntersectionObserver(
        (z) => {
          z.forEach((j) => {
            const G = u.current.indexOf(j.target);
            j.isIntersecting ? (j.target.play(), o(G)) : j.target.pause();
          });
        },
        { threshold: 0.5 }
      );
      return (
        u.current.forEach((z) => {
          z && T.observe(z);
        }),
        () => {
          u.current.forEach((z) => {
            z && T.unobserve(z);
          });
        }
      );
    }, [r]),
      F.useEffect(() => {
        const T = u.current[a];
        T && T.play();
      }, [a]);
    const x = () => {
        const T = (r + 1) % e.length;
        o(0), i(T), h(!1), clearTimeout(d.current);
      },
      E = () => {
        const T = (r - 1 + e.length) % e.length;
        i(T), o(0), h(!1), clearTimeout(d.current);
      },
      P = (T) => {
        const z = u.current[T];
        z && (z.paused ? z.play() : z.pause(), f(z.paused));
      },
      b = (T) => {
        const z = u.current[T];
        z && ((z.muted = !z.muted), s((j) => ({ ...j, [T]: z.muted })));
      },
      _ = (T) => {
        clearTimeout(d.current);
      },
      k = (T, z) => {
        T === 0 && (g(z.duration), C(z.duration));
      },
      C = (T) => {
        clearTimeout(d.current),
          (d.current = setTimeout(() => {
            h(!0),
              setTimeout(() => {
                h(!1);
              }, 1e4);
          }, T * 1e3));
      },
      O = (T) => {
        clearTimeout(d.current), T === 0 && v && C(v);
      },
      N = () => {
        clearTimeout(d.current);
      },
      D = () => {
        S(!y);
      },
      H = (T) => {
        const z = T.split(`
`),
          j = z.slice(0, 2).join(" ");
        return z.length > 3 ? `${j}...` : j;
      },
      ie = () => {
        w &&
          m.current &&
          (m.current.requestFullscreen
            ? m.current.requestFullscreen()
            : m.current.mozRequestFullScreen
            ? m.current.mozRequestFullScreen()
            : m.current.webkitRequestFullscreen
            ? m.current.webkitRequestFullscreen()
            : m.current.msRequestFullscreen && m.current.msRequestFullscreen());
      },
      Ce = () => {
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitExitFullscreen
          ? document.webkitExitFullscreen()
          : document.msExitFullscreen && document.msExitFullscreen();
      };
    return (
      F.useEffect(() => {
        ie();
        const T = () => {
          document.fullscreenElement || n();
        };
        return (
          document.addEventListener("fullscreenchange", T),
          () => {
            document.removeEventListener("fullscreenchange", T),
              document.fullscreenElement && Ce();
          }
        );
      }, [n]),
      M.jsxs("div", {
        ref: m,
        className: "whole",
        children: [
          M.jsx("div", {
            className: "prevbtn",
            onClick: E,
            children: M.jsx(Ne, { icon: up }),
          }),
          M.jsx("div", {
            className: "closediv",
            children: M.jsx("button", {
              className: "closebtn",
              onClick: n,
              children: M.jsx(Ne, { icon: sp }),
            }),
          }),
          M.jsx("div", {
            className: "reelsContainer",
            children: e[r].videoId.map((T, z) =>
              M.jsx(Js, {
                children: M.jsxs(
                  "div",
                  {
                    className: "reel",
                    children: [
                      M.jsxs("div", {
                        className: "video-container",
                        children: [
                          M.jsx("video", {
                            ref: (j) => (u.current[z] = j),
                            src: T,
                            className: "ad",
                            loop: !0,
                            playsInline: !0,
                            controls: !1,
                            autoPlay: z === a,
                            onClick: () => P(z),
                            onPause: () => {
                              N(), f(!0);
                            },
                            onPlay: () => {
                              O(z), f(!1);
                            },
                            onEnded: () => _(),
                            onLoadedMetadata: (j) => k(z, j.target),
                          }),
                          c &&
                            M.jsx(Ne, {
                              icon: Mv,
                              onClick: () => P(z),
                              className: "play-button",
                            }),
                          z === 0 &&
                            p &&
                            M.jsx(Ne, {
                              icon: faAnglesDown,
                              bounce: !0,
                              className: "down-arrow",
                            }),
                        ],
                      }),
                      M.jsx("div", {
                        className: "functions",
                        children: M.jsx(Ne, {
                          icon: l[z] ? lp : op,
                          className: "volume",
                          onClick: () => b(z),
                          style: { cursor: "pointer" },
                        }),
                      }),
                      M.jsxs("div", {
                        className: "bookdiv",
                        children: [
                          M.jsx("img", {
                            className: "img",
                            src: e[r].campaignPhoto,
                            alt: "Campaign",
                          }),
                          M.jsxs("div", {
                            className: "text",
                            children: [
                              M.jsx("p", {
                                className: "hotelname",
                                children: e[r].campaignName,
                              }),
                              M.jsxs("p", {
                                className: "offer",
                                children: [
                                  y
                                    ? e[r].campaignDetails
                                    : H(e[r].campaignDetails),
                                  M.jsx("br", {}),
                                  M.jsx("span", {
                                    className: "view-more",
                                    onClick: D,
                                    children: y ? " View Less" : " View More",
                                  }),
                                ],
                              }),
                              M.jsxs("h2", {
                                className: "offerprice",
                                children: [
                                  "From ",
                                  e[r].offerPrice.currency,
                                  e[r].offerPrice.price,
                                ],
                              }),
                            ],
                          }),
                          M.jsx("div", {
                            className: "divbtn",
                            children: M.jsx("a", {
                              href: e[r].campaignLink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "bookbtn",
                              children: "Book",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  z
                ),
              })
            ),
          }),
          M.jsx("div", {
            className: "nextbtn",
            onClick: x,
            children: M.jsx(Ne, { icon: ap }),
          }),
        ],
      })
    );
  },
  Hc = () => {
    const [e, t] = F.useState([]),
      [n, r] = F.useState([]);
    return (
      F.useEffect(() => {
        new URLSearchParams(window.location.search),
          (async (o) => {
            try {
              const s = await (
                  await fetch(
                    `https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${o}`
                  )
                ).json(),
                c = s.campaigns.map((f) => f.videoId[0]);
              t(c), r(s.campaigns);
            } catch (l) {
              console.error("Error fetching data:", l);
            }
          })("24c5e580-0291-1fb8-b7ef-97cd6d3971a2");
      }, []),
      M.jsxs("div", {
        className: "App",
        children: [
          M.jsx("style", {
            children: `
        .swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: red; */
  height: auto;
  display: flex;
  width: auto !important;
  max-width: 100% !important;
  justify-content: center;
  align-items: center;
}



.swiper-wrapper {
  /* transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms;
  width: 3118px;
  display: flex;
  align-items: center;
  place-content: center;
  transition-delay: 0ms;
  align-content: center;
  justify-content: flex-start; */




  display: flex;
  width: 3118px;
  transform: translate3d(-779.5px, 0px, 0px);
  transition-duration: 0ms;
  transition-delay: 0ms;
  align-content: center;
  align-items: flex-end;
}



/* .swiper swiper-initialized swiper-horizontal swiper-grid swiper-backface-hidden mySwiper{
  display: flex;
  align-items: center;
  justify-content: center;
} */


.swiper-3d .swiper-slide-shadow-left {
  background-color: transparent !important;
}

.swiper-3d .swiper-slide-shadow-right {
  background-color: transparent !important;
}


.carousel-div {
  min-width: 100%;
  /* background-color: rgba(234, 227, 227, 0.212); */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.199), rgba(0, 0, 0, 0.884));
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 15%;
  bottom: 61px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
}

.txt1 {
  position: relative;
  top: 1vh;
  color: white;
}

.txt2 {
  position: relative;
  top: 0vh;
  color: white;
}

.video-container {
  width: 100%;
  height: 100%;
  margin-top: 100px;
}


.video-container2 {
  margin-top: 20px;
}

.vid {
  width: 100%;
  height: auto;
}

.down-arrow {
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
  color: white;
  pointer-events: none;
  /* So the icon does not block clicks on the video */
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 10vh;
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;

}



.carousel-container {
  position: relative;
  overflow: hidden;
  left: 2.5%;
  width: 95%;
  /* Ensure the carousel container has a fixed width */
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* Smooth scrolling */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}

.vid {
  border-radius: 20px;
   box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75); 
  width: 100%;
  object-fit: cover;
}

.video-container {
  object-fit: cover;
  max-width: 230px;
  // flex: 0 0 calc(20% - 10px);
  /* Adjust the width to fit 5 videos with a gap */
  margin-right: 10px;
  /* Adjust the gap between videos */
}

.video-container:last-child {
  margin-right: 0;
  /* Remove margin from the last video to prevent unnecessary gap */
}


.nextbtn,
.prevbtn {
  color: white;
  background-color: transparent;
  z-index: 1000;
  border: none;
  font-size: 7vh;

}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .video-container {
    flex: 0 0 calc(25% - 10px);
    /* Adjust to 4 videos per view */
  }
}

@media (max-width: 900px) {
  .video-container {
    flex: 0 0 calc(33.33% - 10px);
    /* Adjust to 3 videos per view */
  }
}

@media (max-width: 600px) {
  .video-container {
    flex: 0 0 calc(50% - 10px);
    /* Adjust to 2 videos per view */
  }
}

@media (max-width: 400px) {
  .video-container {
    flex: 0 0 calc(100% - 10px);
    /* Adjust to 1 video per view */
  }
}

.whole {
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgb(62, 61, 61);
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  background-size: cover;
  max-height: fit-content;
  max-width: 1510px;
  z-index: 1;
}

.reelsContainer::-webkit-scrollbar {
  display: none;
}

.ad {
  /* width: 100%; */
  width: 84%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  justify-content: center;
}

.closediv {
  position: absolute;
  top: 0vh;
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;

}

.bookdiv {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 53vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display: flex;
}

.img {
  position: absolute;
  top: 50%;
  /* Move the div to the center horizontally */
  transform: translateY(-50%);
  left: 4%;
  width: 22%;
  height: 80%;
  border-radius: 10px;
}

.divbtn {
  width: 20vh;
  min-height: 100%;
  position: absolute;
  right: 0px;

}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 5px;
  width: 11vh;
  height: 5vh;
  right: -13vh;
  position: relative;
  top: 5vh;
  transform: translateX(-50%);
  text-decoration: none;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: block;
  position: relative;

  cursor: pointer;
  width: 45%;
  right: -15vh;
}

.hotelname {
  position: relative;
  top: 1vh;
  color: black;
  padding-left: 0vh;
  font-weight: bolder;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
}

.offer {
  position: relative;
  color: black;
  top: 1vh;

  padding-left: 0vh;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  position: relative;
  top: -0.5vh;
  cursor: pointer;
}

.offerprice {
  position: relative;
  top: 1vh;
  color: black;
  padding-left: 0vh;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2vh;
}

.volume {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none;
  /* Remove button border */
  padding: 0;
  /* Remove button padding */
  cursor: pointer;
  /* Add pointer cursor */
  z-index: 1000;
  outline: none;
  /* Remove focus outline */
}


/* Mobile responsive */
@media (max-width: 450px) {

  .down-arrow {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none;
    /* So the icon does not block clicks on the video */
  }

  .carousel-container {
    position: relative;
    overflow: hidden;
    left: 2.5%;
    width: 95vw;

    max-height: 408px;
    min-height: 300px;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    /* Smooth scrolling */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
    max-height: 408px;
    min-height: 300px;
  }

  .carousel::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, and Opera */
  }

  .vid {
    border-radius: 20px;
    /* box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75); */
    width: 100%;
    object-fit: cover;
  }

  .video-container {


    min-width: 200px;
    max-width: 230px;

    object-fit: cover;
    border-radius: 20px;
    flex: 0 0 calc(20% - 10px);
    /* Adjust the width to fit 5 videos with a gap */
    margin-right: 10px;
    /* Adjust the gap between videos */
  }

  .whole {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(0, 0, 0, 0.831); */
    /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reelsContainer {
    height: 100vh;
    width: 100vw;
    /* Ensure the reelsContainer takes the full width of the viewport */
    overflow: auto;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    position: relative;
  }

  .reel {
    height: 100%;
    width: 100%;
    /* Ensure each reel takes the full width of the viewport */
    scroll-snap-align: start;
    border-radius: 40px;
    position: relative;
    justify-content: center;
  }

  .ad {
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    position: absolute;
    justify-content: center;
  }

  .nextbtn,
  .prevbtn {

    color: white;
    z-index: 1000;
    border: none;
    font-size: 10vw;
    position: absolute;

  }

  .nextbtn {
    right: 0px;
  }

  .prevbtn {
    left: 0px;
  }

  .functions {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 10%;
    display: grid;
  }

  .closediv {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .bookdiv {
    position: absolute;
    bottom: 1.5%;
    left: 50%;
    /* Move the div to the center horizontally */
    transform: translateX(-50%);
    /* Adjust the position to center */
    width: 100%;
    min-height: 15vh;
    background-color: rgba(255, 255, 255, 0.863);
    border-radius: 10px;
    display: flex;
  }

  .img {
    position: absolute;
    top: 50%;
    /* Move the div to the center horizontally */
    transform: translateY(-50%);
    left: 4%;
    width: 22%;
    height: 80%;
    border-radius: 10px;
  }

  .divbtn {
    width: 20vh;
    min-height: 100%;
    position: absolute;
    right: 0px;

  }

  .bookbtn {
    background-color: rgb(114, 94, 205);
    color: white;
    border: none;
    border-radius: 5px;
    width: 11vh;
    height: 5vh;
    right: -13vh;
    position: relative;
    top: 5vh;
    transform: translateX(-50%);
    text-decoration: none;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2.2vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    display: block;
    position: relative;

    cursor: pointer;
    width: 40%;
    right: -15vh;
  }

  .hotelname {
    position: relative;
    top: 1vh;
    color: black;
    padding-left: 0vh;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2.2vh;
  }

  .offer {
    position: relative;
    color: black;
    top: 1vh;
    padding-left: 0vh;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 1.8vh;
  }

  .view-more {
    font-size: 1.6vh;
    color: rgb(114, 94, 205);
    position: relative;
    top: -0.5vh;
    cursor: pointer;
  }

  .offerprice {
    position: relative;
    top: 0vh;
    color: black;
    padding-left: 0vh;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2vh;
  }

  .volume {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }

  .closebtn {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none;
    /* Remove button border */
    padding: 0;
    /* Remove button padding */
    cursor: pointer;
    /* Add pointer cursor */
    z-index: 1000;
    outline: none;
    /* Remove focus outline */
  }

}`,
          }),
          M.jsx(cy, { videos: e, campaigns: n }),
          " ",
        ],
      })
    );
  },
  Uc = ({ campaigns: e }) => {
    const t = F.useRef(null),
      [n, r] = F.useState(!1),
      [i, a] = F.useState(null),
      [o, l] = F.useState(0),
      [s, c] = F.useState(!1),
      [f, p] = F.useState(0),
      [h, v] = F.useState({}),
      [g, y] = F.useState(!1);
    F.useEffect(() => {
      const C = t.current,
        O = () => {
          y(C.paused), C.paused && C.play();
        };
      return (
        C && (C.addEventListener("play", O), C.addEventListener("pause", O)),
        () => {
          C &&
            (C.removeEventListener("play", O),
            C.removeEventListener("pause", O));
        }
      );
    }, [i, o, e]),
      F.useEffect(() => {
        if (i !== null && e[i]) {
          const C = e[i];
          if (o < C.videoId.length) {
            const O = C.videoId[o];
            (t.current.src = O), t.current.play(), p(0), y(!1);
          }
        }
      }, [i, o, e]),
      F.useEffect(() => {
        const C = setInterval(() => {
          t.current && p((t.current.currentTime / t.current.duration) * 100);
        }, 100);
        return () => clearInterval(C);
      }, [o, i]),
      F.useEffect(() => {
        t.current && (t.current.muted = s);
      }, [s]);
    const S = (C) => {
        a(C), l(0);
      },
      u = () => {
        if (
          (v((C) => ({ ...C, [`${i}-${o}`]: !0 })), p(100), i !== null && e[i])
        ) {
          const C = e[i];
          o + 1 < C.videoId.length
            ? l(o + 1)
            : i + 1 < e.length
            ? (a(i + 1), l(0))
            : (a(null), l(0));
        }
      },
      d = () => {
        i !== null
          ? i + 1 < e.length
            ? (a(i + 1), l(0))
            : (a(0), l(0))
          : e.length > 0 && (a(0), l(0));
      },
      m = () => {
        i !== null
          ? i > 0
            ? (a(i - 1), l(0))
            : (a(e.length - 1), l(0))
          : e.length > 0 && (a(e.length - 1), l(0));
      },
      w = () => {
        i !== null &&
          e[i] &&
          o + 1 < e[i].videoId.length &&
          (v((C) => ({ ...C, [`${i}-${o}`]: !0 })), l(o + 1));
      },
      x = () => {
        i !== null && e[i] && o > 0 && l(o - 1);
      },
      E = () => {
        c((C) => !C);
      },
      P = () => {
        a(null), l(0), y(!1), c(!1);
      },
      b = (C) => {
        const O = C.currentTarget.getBoundingClientRect(),
          N = C.clientX - O.left,
          D = O.width;
        N < D / 2 ? x() : w();
      },
      _ = () => {
        r(!n);
      },
      k = (C) => {
        const O = C.split(`
`);
        return O.length > 2
          ? {
              truncated: O.slice(0, 2).join(`
`),
              hasMore: !0,
            }
          : { truncated: C, hasMore: !1 };
      };
    return M.jsx(M.Fragment, {
      children: M.jsxs("div", {
        className: "storiesHeader",
        children: [
          M.jsx("div", {
            className: "outer",
            children: e.map((C, O) =>
              M.jsx(
                "div",
                {
                  onClick: () => S(O),
                  className: `inner ${i === O ? "active" : ""} ${
                    C.videoId.some((N, D) => h[`${O}-${D}`])
                      ? "played"
                      : "not-played"
                  }`,
                  children: M.jsx("img", {
                    src: C.campaignPhoto,
                    alt: "Campaign",
                    className: "campaign-photo",
                  }),
                },
                O
              )
            ),
          }),
          M.jsxs("div", {
            className: `topp ${i !== null ? "active" : ""}`,
            children: [
              M.jsx("div", {
                className: "next",
                onClick: d,
                children: M.jsx(Ne, { icon: ap }),
              }),
              M.jsx("div", {
                className: "previous",
                onClick: m,
                children: M.jsx(Ne, { icon: up }),
              }),
              M.jsx("div", {
                className: "outer-box",
                children:
                  i !== null &&
                  M.jsxs("div", {
                    className: "boxed-video",
                    children: [
                      M.jsx("div", {
                        className: "mute-unmute",
                        onClick: E,
                        children: s
                          ? M.jsx(Ne, { icon: lp })
                          : M.jsx(Ne, { icon: op }),
                      }),
                      M.jsx("div", {
                        className: "close-button",
                        onClick: P,
                        children: M.jsx(Ne, { className: "close", icon: sp }),
                      }),
                      M.jsx("div", {
                        className: "progress-bar",
                        children: e[i].videoId.map((C, O) =>
                          M.jsx(
                            "div",
                            {
                              className: "progress",
                              children: M.jsx("div", {
                                className: "progress1",
                                style: {
                                  width: `${
                                    O === o ? f : h[`${i}-${O}`] ? 100 : 0
                                  }%`,
                                },
                              }),
                            },
                            O
                          )
                        ),
                      }),
                      M.jsx("video", {
                        className: "boxed-video",
                        ref: t,
                        onClick: b,
                        onEnded: u,
                        autoPlay: !0,
                        children:
                          "Your browser does not support the video tag.",
                      }),
                      M.jsxs("div", {
                        className: "bookdiv",
                        children: [
                          M.jsx("div", {
                            className: "img1",
                            children: M.jsx("img", {
                              className: "img",
                              src: e[i].campaignPhoto,
                              alt: "Campaign",
                            }),
                          }),
                          M.jsxs("div", {
                            style: { fontFamily: "Poppins, sans-serif" },
                            className: "text",
                            children: [
                              M.jsx("p", {
                                style: { fontFamily: "Poppins, sans-serif" },
                                className: "hotelname",
                                children: e[i].campaignName,
                              }),
                              M.jsxs("pre", {
                                style: { fontFamily: "Poppins, sans-serif" },
                                className: "offer",
                                children: [
                                  n
                                    ? e[i].campaignDetails
                                    : k(e[i].campaignDetails).truncated,
                                  k(e[i].campaignDetails).hasMore &&
                                    M.jsx("div", {
                                      children: M.jsx("span", {
                                        style: {
                                          fontFamily: "Poppins, sans-serif",
                                        },
                                        className: "view-more",
                                        onClick: _,
                                        children: n
                                          ? " View Less"
                                          : " View More",
                                      }),
                                    }),
                                ],
                              }),
                              M.jsxs("h2", {
                                style: { fontFamily: "Poppins, sans-serif" },
                                className: "offerprice",
                                children: [
                                  "From ",
                                  e[i].offerPrice.currency,
                                  e[i].offerPrice.price,
                                ],
                              }),
                            ],
                          }),
                          M.jsx("div", {
                            className: "divbtn",
                            children: M.jsx("a", {
                              href: e[i].hotelInfo.hotellink,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "bookbtn",
                              children: "Book",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function dy() {
  F.useState([]);
  const [e, t] = F.useState([]),
    [n, r] = F.useState("");
  F.useEffect(() => {
    const a = window.prompt(
      "Enter the component type (Stories, Carosole, both):"
    );
    r(a),
      (async (s) => {
        try {
          const f = await (
            await fetch(
              `https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${s}`
            )
          ).json();
          t(f.campaigns);
        } catch (c) {
          console.error("Error fetching data:", c);
        }
      })("24c5e580-0291-1fb8-b7ef-97cd6d3971a2");
  }, []);
  const i = () => {
    switch (n) {
      case "Stories":
        return M.jsx(Uc, { campaigns: e });
      case "Carosole":
        return M.jsx(Hc, { campaigns: e });
      case "both":
        return M.jsxs("div", {
          children: [M.jsx(Hc, { campaigns: e }), M.jsx(Uc, { campaigns: e })],
        });
      default:
        return M.jsx("div", { children: "No valid component type specified" });
    }
  };
  return M.jsxs("div", {
    className: "App1",
    children: [
      M.jsx("style", {
        children: ` .root1 {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    line-height: normal;
  }
  :root {
    line-height: normal;
    --main-color: #8e44ad;
    /* --main-color: #ff9933; */
    --red: #e74c3c;
    --orange: #f39c12;
    --white: #fff;
    --black: #2c3e50;
    --light-color: #888;
    --light-bg: #eee;
    --border: 0.1rem solid rgba(0, 0, 0, 0.2);
  }
  /* Global reset for line-height */
  body, p, h1, h2, h3, h4, h5, h6 {
    line-height: normal;
  }
  *, :after, :before {
      box-sizing: border-box !important;
  }

  .header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    font-size:16px !important;
    opacity:1 !important;

  }

  /* stories heading section starts  */
  .outer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    padding: 1rem;
    border-radius: 1rem;
    scroll-behavior: smooth;
    cursor: pointer;
    /* position: absolute; */
  }

  .inner {
   height: 6vw;
      width: 6vw;
      background-color: rgb(255, 251, 240);
      font-size: 2rem;
      color: black;
      margin: .8rem;
      display: flex;
      /* border: 6px solid red; */
      padding: 2px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
  }

  .outer::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  .outer {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .inner video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers the entire circular area */
    border-radius: 50%; /* Maintain circular shape */
  }

  .inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .topp {
    height: 100%;
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.178); */
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 16px !important;
    display: none;
    background: rgb(62, 61, 61);;
  }

  /* .outer-box {
    height: 40rem;
    width: 51rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  } */

  .close-button {
     position: absolute;
      position: absolute;
      top: 2%;
      right: 1%;
      /* transform: translate(-50%, -50%); */
      cursor: pointer;
      z-index: 10;
      /* background: rgba(255, 255, 255, 0.2); */
      padding: 2rem;
      font-size: 0.5rem;
      border-radius: 50%;
      /* transform: translateY(-50%); */
      font-size: 5vh;
      padding: 0.5rem 1rem;
      /* background-color: rgb(0 0 0 / 2%); */
      color: white;
      border-radius: 0.5rem;
      cursor: pointer;
  }
      .play-pause {
   position: absolute;
      // top: 40%;
      // right: 44%;
      cursor: pointer;
      z-index: 10;
      font-size: 7vh;
      background-color: rgb(255 255 255 / 0%);
      color: white;
      border-radius: 50%;
      height: 12vh;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items:center;
  display: none;

  }
  // .topp:hover .play-pause{
  // display:block;
  // }
  /* Other styles you may have */

  .active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .outer-box {
       height: 100vh;
      width: 56vh; //31em;
      /* background-color: white; */
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px !important;
  }

  .boxed-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers the entire box */
  }

  .next,
  .previous {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 5.5vh;
    padding: 0.5rem 1rem;
    /* background-color: rgb(0 0 0 / 2%); */
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index:10;
    /* background: rgba(255, 255, 255, 0.2); */
  }

  .next {
    right: .2em;
  }

  .previous {
    left: .2em;
  }

  .mute-unmute {
        position: absolute;
      top: 60%;
      right: 1%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 10;
      /* background: rgba(255, 255, 255, 0.2); */
      padding: 2rem;
      // font-size: 0.em;
      border-radius: 50%;
      transform: translateY(-50%);
      font-size: 3.5vh;
      padding: 0.5rem 1rem;
      /* background-color: rgb(0 0 0 / 2%); */
      color: white;
      border-radius: 0.5rem;
      cursor: pointer;
      /* background: rgba(255, 255, 255, 0.2); */
  }

  .progress-bar {
  display: flex;
      align-items: center;
      width: 99%;
      padding: 0px 0px;
      height: 0.5vh;
      top: 3%;
      /* margin-left: 10px; */
      /* margin-right: 26px; */
      position: relative;
      margin-top: 0px;
  }

  .progress {
    flex: 1;
      height: 100%;
      background-color: #1513133d;
      transition: 0.1s;
      margin-right: 2px;
      margin:.3rem
  }
  .progress1{
    height: 100%;
    background-color: white;
    transition: 0.1s;
    margin-right: 2px; /
  }
   .bookdiv {
   position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      width: 95%;
      min-height: 15vh;
      background-color: rgba(255, 255, 255, 0.863);
      border-radius: 1.8vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.4vh;
      opacity: 0.8;
  }

  .img1 {
   flex: 0 0 22%;
      display: flex;
      height: 12vh;
      justify-content: center;
      align-items: center;
  }

  .img {
       width: 100%;
      height: 100%;
      border-radius: 1.8vh;
  }

  .text {
       text-align: left;
      margin-left: 1vh;
      margin-right: 1vh;
      flex-grow: 1;

  }

  .hotelname {
    margin-top: 0;
    margin-bottom: 0;
    color: black;
    font-weight: bolder;
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
    font-size: 2.2vh;
    margin-bottom: 0em !important;
  }

  .offer {
    color: black;
    margin: 2px 0;
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
    font-size: 1.8vh;
  }

  .view-more {
    font-size: 1.6vh;
    color: rgb(114, 94, 205);
    cursor: pointer;
  }

  .offerprice {
    color: black;
    margin: 4px 0;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
    font-size: 2vh !important;
    line-height:normal;
  }

  .divbtn {
    display: flex;
    align-items: center;
  }

  .bookbtn {
  background-color: rgb(114, 94, 205);
      color: white;
      border: none;
      border-radius: .5vh;
      text-decoration: none;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 2.2vh;
      text-align: center;
      padding: 1.3vh 2.5vh;
  }

  /* Add this to your App.css */
  .inner.not-played {
    border: 3px solid #ff7e5f; /* Example gradient border for not played */
  }

  .inner.played {
    border: 3px solid #ccc; /* Example solid border for played */
  }

  /* .inner.played {
    border-color: green; /* Change this to your desired color */
  /* } */ */

  .boxed-video-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  /* media query
   */

  /* Add this media query at the end of your CSS */
  @media screen and (max-width: 800px) {
    /* // @media (max-width: 800px) { */
        .outer {
          padding: 0.5rem;
          overflow-x: auto;
        }

        .inner {
          height: 6rem;
          width: 6rem;
          font-size: 1.5rem;
          margin: 0.5rem;
        }

        // .close-button {
        //   font-size: 2rem;
        //   top: 1rem;
        //   right: 1rem;
        //   padding: 0.3rem 0.6rem;
        // }

        .next,
        .previous {
          // font-size: 2.5em;
          // padding: 0.3rem 0.6rem;
          // top: 45%;
          z-index: 20;
        }

        .progress-bar {
          width: 100%;
        }
      }
  @media screen and (max-width: 450px) {
      /* // @media (max-width: 400px) { */
        .text {
          right: -13vh;
         // margin-left: 5em;
          //margin-right: -3vh; //-.2em;
          // text-wrap:wrap;
        }
          .offer{
          text-wrap:wrap;}
      }`,
      }),
      i(),
    ],
  });
}
Mo.createRoot(document.getElementById("stories")).render(
  M.jsx(te.StrictMode, { children: M.jsx(dy, {}) })
);
