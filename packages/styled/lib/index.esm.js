import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as o,
  useContext as a,
  useRef as i,
} from 'react'
import l, {ThemeContext as c, css as s} from 'styled-components'
var u = function() {
  return (u =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function d(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function p() {
  return (p =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function g(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var m = g(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    l = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    g = n ? Symbol.for('react.memo') : 60115,
    m = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case u:
            case d:
            case a:
            case l:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case s:
                case p:
                case c:
                  return e
                default:
                  return t
              }
          }
        case m:
        case g:
        case o:
          return t
      }
    }
  }
  function y(e) {
    return h(e) === d
  }
  ;(t.typeOf = h),
    (t.AsyncMode = u),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = s),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = m),
    (t.Memo = g),
    (t.Portal = o),
    (t.Profiler = l),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === l ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === m ||
            e.$$typeof === g ||
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || h(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return h(e) === s
    }),
    (t.isContextProvider = function(e) {
      return h(e) === c
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return h(e) === p
    }),
    (t.isFragment = function(e) {
      return h(e) === a
    }),
    (t.isLazy = function(e) {
      return h(e) === m
    }),
    (t.isMemo = function(e) {
      return h(e) === g
    }),
    (t.isPortal = function(e) {
      return h(e) === o
    }),
    (t.isProfiler = function(e) {
      return h(e) === l
    }),
    (t.isStrictMode = function(e) {
      return h(e) === i
    }),
    (t.isSuspense = function(e) {
      return h(e) === f
    })
})
f(m)
m.typeOf,
  m.AsyncMode,
  m.ConcurrentMode,
  m.ContextConsumer,
  m.ContextProvider,
  m.Element,
  m.ForwardRef,
  m.Fragment,
  m.Lazy,
  m.Memo,
  m.Portal,
  m.Profiler,
  m.StrictMode,
  m.Suspense,
  m.isValidElementType,
  m.isAsyncMode,
  m.isConcurrentMode,
  m.isContextConsumer,
  m.isContextProvider,
  m.isElement,
  m.isForwardRef,
  m.isFragment,
  m.isLazy,
  m.isMemo,
  m.isPortal,
  m.isProfiler,
  m.isStrictMode,
  m.isSuspense
var h = g(function(e, t) {})
f(h)
h.typeOf,
  h.AsyncMode,
  h.ConcurrentMode,
  h.ContextConsumer,
  h.ContextProvider,
  h.Element,
  h.ForwardRef,
  h.Fragment,
  h.Lazy,
  h.Memo,
  h.Portal,
  h.Profiler,
  h.StrictMode,
  h.Suspense,
  h.isValidElementType,
  h.isAsyncMode,
  h.isConcurrentMode,
  h.isContextConsumer,
  h.isContextProvider,
  h.isElement,
  h.isForwardRef,
  h.isFragment,
  h.isLazy,
  h.isMemo,
  h.isPortal,
  h.isProfiler,
  h.isStrictMode,
  h.isSuspense,
  g(function(e) {
    e.exports = m
  })
var y = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable
;(function() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(t)
        .map(function(e) {
          return t[e]
        })
        .join('')
    )
      return !1
    var r = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        r[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
    )
  } catch (e) {
    return !1
  }
})() && Object.assign
var k = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function b() {}
function x() {}
x.resetWarningCache = b
var S = g(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== k) {
          var i = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          )
          throw ((i.name = 'Invariant Violation'), i)
        }
      }
      function t() {
        return e
      }
      e.isRequired = e
      var n = {
        array: e,
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
        checkPropTypes: x,
        resetWarningCache: b,
      }
      return (n.PropTypes = n), n
    })()
  }),
  C = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
  w = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  B = S.oneOfType([S.number, S.string, S.array, S.object]),
  M = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  F = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return W(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && W(e[t]) ? e[t] : null
          }, e)
    }, null)
    return W(o) ? o : n[n.length - 1]
  },
  W = function(e) {
    return null != e
  },
  E = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  H = function(e) {
    return E(e) && 0 !== e ? e + 'px' : e
  },
  T = function(e) {
    return '@media screen and (min-width: ' + H(e) + ')'
  },
  L = function(e, t) {
    return F(t, e)
  },
  R = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] && 'object' == typeof t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  O = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = R(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  P = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      l = void 0 === i ? L : i,
      c = e.scale,
      s = void 0 === c ? {} : c,
      u = r || n,
      d = function(e) {
        var t = F(e, n, o, null)
        if (!W(t)) return null
        var r,
          i = F(e.theme, a, s),
          c = function(e) {
            var t
            return W(e) ? (((t = {})[u] = l(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return c(t)
        var d = F(e.theme, 'breakpoints', w),
          p = []
        if (Array.isArray(t)) {
          p.push(c(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var g = c(t[f])
            if (g) {
              var m,
                h = T(d[f - 1])
              p.push((((m = {})[h] = g), m))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              k = T(D),
              b = c(t[y])
            if (D) p.push((((v = {})[k] = b), v))
            else p.unshift(b)
          }
          p.sort(C)
        }
        return O.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = M(B)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = M(B)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  z = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return O.apply(void 0, n)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = p({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  I = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  A = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return F(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = S.oneOfType([S.number, S.string])), t)), a
  },
  Y = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  j = function(e, t) {
    if (!E(e)) return H(F(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = F(t, r)
    return E(o) ? H(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  V = P({prop: 'margin', alias: 'm', key: 'space', transformValue: j, scale: Y}),
  N = P({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: j, scale: Y}),
  $ = P({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: j, scale: Y}),
  G = P({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: j, scale: Y}),
  _ = P({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: j, scale: Y}),
  U = P({prop: 'padding', alias: 'p', key: 'space', transformValue: j, scale: Y}),
  Z = P({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: j, scale: Y}),
  X = P({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: j, scale: Y}),
  J = P({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: j, scale: Y}),
  q = P({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: j, scale: Y}),
  K = I(function(e) {
    return p({}, e, {
      mt: W(e.my) ? e.my : e.mt,
      mb: W(e.my) ? e.my : e.mb,
      ml: W(e.mx) ? e.mx : e.ml,
      mr: W(e.mx) ? e.mx : e.mr,
      pt: W(e.py) ? e.py : e.pt,
      pb: W(e.py) ? e.py : e.pb,
      pl: W(e.px) ? e.px : e.pl,
      pr: W(e.px) ? e.px : e.pr,
    })
  })(z(V, N, $, G, _, U, Z, X, J, q)),
  Q = z(
    P({prop: 'color', key: 'colors'}),
    P({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  ee = function(e, t) {
    return !E(e) || e > 1 ? H(e) : 100 * e + '%'
  },
  te = P({prop: 'width', key: 'widths', transformValue: ee}),
  ne = function(e, t) {
    return H(F(t, e))
  },
  re = P({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: ne,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  oe = P({prop: 'fontFamily', key: 'fonts'}),
  ae = P({prop: 'fontWeight', key: 'fontWeights'}),
  ie = P({prop: 'lineHeight', key: 'lineHeights'}),
  le = (P({prop: 'textAlign'}),
  P({prop: 'fontStyle'}),
  P({prop: 'letterSpacing', key: 'letterSpacings', transformValue: ne}),
  P({prop: 'display'})),
  ce = (P({prop: 'maxWidth', key: 'maxWidths', transformValue: ne}),
  P({prop: 'minWidth', key: 'minWidths', transformValue: ne}),
  P({prop: 'height', key: 'heights', transformValue: ne})),
  se = (P({prop: 'maxHeight', key: 'maxHeights', transformValue: ne}),
  P({prop: 'minHeight', key: 'minHeights', transformValue: ne})),
  ue = (I(function(e) {
    return p({}, e, {width: e.size, height: e.size})
  })(z(te, ce)),
  P({prop: 'verticalAlign'}),
  P({prop: 'alignItems'})),
  de = (P({prop: 'alignContent'}), P({prop: 'justifyItems'}), P({prop: 'justifyContent'})),
  pe = P({prop: 'flexWrap'}),
  fe = (P({prop: 'flexBasis', transformValue: ee}), P({prop: 'flexDirection'})),
  ge = P({prop: 'flex'}),
  me = (P({prop: 'justifySelf'}),
  P({prop: 'alignSelf'}),
  P({prop: 'order'}),
  P({prop: 'gridGap', key: 'space', transformValue: ne, scale: Y})),
  he = P({prop: 'gridColumnGap', key: 'space', transformValue: ne, scale: Y}),
  ye = P({prop: 'gridRowGap', key: 'space', transformValue: ne, scale: Y}),
  ve = (P({prop: 'gridColumn'}), P({prop: 'gridRow'}), P({prop: 'gridAutoFlow'})),
  De = P({prop: 'gridAutoColumns'}),
  ke = P({prop: 'gridAutoRows'}),
  be = P({prop: 'gridTemplateColumns'}),
  xe = P({prop: 'gridTemplateRows'}),
  Se = P({prop: 'gridTemplateAreas'}),
  Ce = P({prop: 'gridArea'}),
  we = P({prop: 'border', key: 'borders'}),
  Be = P({prop: 'borderWidth', key: 'borderWidths', transformValue: ne}),
  Me = P({prop: 'borderStyle', key: 'borderStyles'}),
  Fe = P({prop: 'borderColor', key: 'colors'}),
  We = P({prop: 'borderTop', key: 'borders'}),
  Ee = P({prop: 'borderRight', key: 'borders'}),
  He = P({prop: 'borderBottom', key: 'borders'}),
  Te = P({prop: 'borderLeft', key: 'borders'}),
  Le = P({prop: 'borderRadius', key: 'radii', transformValue: ne}),
  Re = z(we, We, Ee, He, Te, Be, Me, Fe, Le),
  Oe = P({prop: 'boxShadow', key: 'shadows'}),
  Pe = P({prop: 'opacity'}),
  ze = P({prop: 'overflow'}),
  Ie = P({prop: 'background'}),
  Ae = (P({prop: 'backgroundImage'}),
  P({prop: 'backgroundSize'}),
  P({prop: 'backgroundPosition'}),
  P({prop: 'backgroundRepeat'}),
  P({prop: 'position'})),
  Ye = P({prop: 'zIndex', key: 'zIndices'}),
  je = P({prop: 'top', transformValue: ne}),
  Ve = P({prop: 'right', transformValue: ne}),
  Ne = P({prop: 'bottom', transformValue: ne}),
  $e = P({prop: 'left', transformValue: ne}),
  Ge = (A({key: 'buttons'}),
  A({key: 'textStyles', prop: 'textStyle'}),
  A({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  _e = function(e) {
    return e instanceof Date
  },
  Ue = 36e5,
  Ze = /[T ]/,
  Xe = /:/,
  Je = /^(\d{2})$/,
  qe = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  Ke = /^(\d{4})/,
  Qe = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  et = /^-(\d{2})$/,
  tt = /^-?(\d{3})$/,
  nt = /^-?(\d{2})-?(\d{2})$/,
  rt = /^-?W(\d{2})$/,
  ot = /^-?W(\d{2})-?(\d{1})$/,
  at = /^(\d{2}([.,]\d*)?)$/,
  it = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  lt = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  ct = /([Z+-].*)$/,
  st = /^(Z)$/,
  ut = /^([+-])(\d{2})$/,
  dt = /^([+-])(\d{2}):?(\d{2})$/
function pt(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var ft,
  gt = function(e, t) {
    if (_e(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(Ze)
        if ((Xe.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = ct.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = qe[t],
          o = Qe[t]
        if ((n = Ke.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Je.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      c = l.year,
      s = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = et.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = tt.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = nt.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = rt.exec(e))
          ? pt(t, parseInt(n[1], 10) - 1)
          : (n = ot.exec(e))
          ? pt(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (s) {
      var u,
        d = s.getTime(),
        p = 0
      if (
        (i.time &&
          (p = (function(e) {
            var t, n, r
            if ((t = at.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * Ue
            if ((t = it.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * Ue + 6e4 * r
              )
            if ((t = lt.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * Ue + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (u =
            6e4 *
            ((o = st.exec(r))
              ? 0
              : (o = ut.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = dt.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var f = d + p,
          g = new Date(f)
        u = Ge(g)
        var m = new Date(f)
        m.setDate(g.getDate() + 1)
        var h = Ge(m) - Ge(g)
        h > 0 && (u += h)
      }
      return new Date(d + p + u)
    }
    return new Date(e)
  },
  mt = function(e) {
    var t = gt(e)
    return t.setHours(0, 0, 0, 0), t
  },
  ht = function(e) {
    var t = gt(e)
    return (
      (function(e, t) {
        var n = mt(e),
          r = mt(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = gt(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  yt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = gt(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  vt = function(e) {
    return yt(e, {weekStartsOn: 1})
  },
  Dt = function(e) {
    var t = gt(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = vt(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = vt(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  kt = function(e) {
    var t = gt(e),
      n =
        vt(t).getTime() -
        (function(e) {
          var t = Dt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), vt(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  bt = function(e) {
    if (_e(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  xt = [
    'M',
    'MM',
    'Q',
    'D',
    'DD',
    'DDD',
    'DDDD',
    'd',
    'E',
    'W',
    'WW',
    'YY',
    'YYYY',
    'GG',
    'GGGG',
    'H',
    'HH',
    'h',
    'hh',
    'm',
    'mm',
    's',
    'ss',
    'S',
    'SS',
    'SSS',
    'Z',
    'ZZ',
    'X',
    'x',
  ],
  St = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = xt
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  Ct = {
    distanceInWords: ((ft = {
      lessThanXSeconds: {one: 'less than a second', other: 'less than {{count}} seconds'},
      xSeconds: {one: '1 second', other: '{{count}} seconds'},
      halfAMinute: 'half a minute',
      lessThanXMinutes: {one: 'less than a minute', other: 'less than {{count}} minutes'},
      xMinutes: {one: '1 minute', other: '{{count}} minutes'},
      aboutXHours: {one: 'about 1 hour', other: 'about {{count}} hours'},
      xHours: {one: '1 hour', other: '{{count}} hours'},
      xDays: {one: '1 day', other: '{{count}} days'},
      aboutXMonths: {one: 'about 1 month', other: 'about {{count}} months'},
      xMonths: {one: '1 month', other: '{{count}} months'},
      aboutXYears: {one: 'about 1 year', other: 'about {{count}} years'},
      xYears: {one: '1 year', other: '{{count}} years'},
      overXYears: {one: 'over 1 year', other: 'over {{count}} years'},
      almostXYears: {one: 'almost 1 year', other: 'almost {{count}} years'},
    }),
    {
      localize: function(e, t, n) {
        var r
        return (
          (n = n || {}),
          (r =
            'string' == typeof ft[e]
              ? ft[e]
              : 1 === t
              ? ft[e].one
              : ft[e].other.replace('{{count}}', t)),
          n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
        )
      },
    }),
    format: (function() {
      var e = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        t = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        n = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        r = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        a = ['AM', 'PM'],
        i = ['am', 'pm'],
        l = ['a.m.', 'p.m.'],
        c = {
          MMM: function(t) {
            return e[t.getMonth()]
          },
          MMMM: function(e) {
            return t[e.getMonth()]
          },
          dd: function(e) {
            return n[e.getDay()]
          },
          ddd: function(e) {
            return r[e.getDay()]
          },
          dddd: function(e) {
            return o[e.getDay()]
          },
          A: function(e) {
            return e.getHours() / 12 >= 1 ? a[1] : a[0]
          },
          a: function(e) {
            return e.getHours() / 12 >= 1 ? i[1] : i[0]
          },
          aa: function(e) {
            return e.getHours() / 12 >= 1 ? l[1] : l[0]
          },
        }
      return (
        ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
          c[e + 'o'] = function(t, n) {
            return (function(e) {
              var t = e % 100
              if (t > 20 || t < 10)
                switch (t % 10) {
                  case 1:
                    return e + 'st'
                  case 2:
                    return e + 'nd'
                  case 3:
                    return e + 'rd'
                }
              return e + 'th'
            })(n[e](t))
          }
        }),
        {formatters: c, formattingTokensRegExp: St(c)}
      )
    })(),
  },
  wt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return Mt(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return Mt(e.getDate(), 2)
    },
    DDD: function(e) {
      return ht(e)
    },
    DDDD: function(e) {
      return Mt(ht(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return kt(e)
    },
    WW: function(e) {
      return Mt(kt(e), 2)
    },
    YY: function(e) {
      return Mt(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return Mt(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(Dt(e)).substr(2)
    },
    GGGG: function(e) {
      return Dt(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return Mt(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return Mt(wt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return Mt(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return Mt(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return Mt(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return Mt(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return Bt(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return Bt(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function Bt(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + Mt(Math.floor(r / 60), 2) + t + Mt(o, 2)
}
function Mt(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var Ft = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = Ct.format.formatters,
      i = Ct.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var l = gt(e)
    return bt(l)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (o = t[i[r]] || wt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, wt)) : (t += i[n])
            return t
          }
        })(r, a, i)(l)
      : 'Invalid Date'
  },
  Wt = function(e, t) {
    var n = gt(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Et = function(e, t, n) {
    var r = gt(e),
      o = void 0 !== n ? n : 1,
      a = gt(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= a; ) i.push(gt(l)), l.setDate(l.getDate() + o)
    return i
  },
  Ht = function(e) {
    var t = gt(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Tt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = gt(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  Lt = function(e) {
    return gt(e).getDay()
  },
  Rt = function(e) {
    var t = gt(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Ot(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    i = e.dayFormat,
    l =
      void 0 === i
        ? function(e) {
            return Ft(e, 'DD')
          }
        : i,
    c = e.weekDayFormat,
    s =
      void 0 === c
        ? function(e) {
            return Ft(e, 'dd')
          }
        : c,
    u = e.monthLabelFormat,
    d =
      void 0 === u
        ? function(e) {
            return Ft(e, 'MMMM YYYY')
          }
        : u
  return {
    days: o(
      function() {
        return (function(e) {
          var t = e.year,
            n = e.month,
            r = e.weekStartsOn,
            o = void 0 === r ? 1 : r,
            a = e.dayFormat,
            i =
              void 0 === a
                ? function(e) {
                    return Ft(e, 'DD')
                  }
                : a,
            l = new Date(t, n),
            c = Rt(l),
            s = Lt(c),
            u = Ht(l),
            d = Array.from(Array(s >= o ? s - o : o).keys()).fill(0),
            p = Et(c, u).map(function(e) {
              return {date: e, day: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, weekStartsOn: a, dayFormat: l})
      },
      [t, n, a, l],
    ),
    weekDays: o(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.weekStartsOn,
            r = void 0 === n ? 1 : n,
            o = t.weekDayFormat,
            a =
              void 0 === o
                ? function(e) {
                    return Ft(e, 'dd')
                  }
                : o,
            i = new Date()
          return Et(Wt(yt(i), r), Wt(Tt(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: s})
      },
      [a, s],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var Pt = function(e, t) {
    var n = gt(e),
      r = gt(t)
    return n.getTime() < r.getTime()
  },
  zt = function(e, t) {
    var n = gt(e),
      r = gt(t)
    return n.getTime() > r.getTime()
  },
  It = function(e, t, n) {
    var r = gt(e).getTime(),
      o = gt(t).getTime(),
      a = gt(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  At = function(e, t) {
    var n = mt(e),
      r = mt(t)
    return n.getTime() === r.getTime()
  },
  Yt = function(e, t) {
    var n = gt(e),
      r = gt(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  jt = function(e) {
    return gt(e).getFullYear()
  },
  Vt = function(e) {
    return gt(e).getMonth()
  },
  Nt = function() {
    return mt(new Date())
  },
  $t = function(e, t) {
    var n = gt(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = gt(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function Gt(e) {
  var t = Rt(e)
  return {year: jt(t), month: Vt(t), date: t}
}
function _t(e, t) {
  var n = Gt(t || Nt()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = $t(e[e.length - 1].date, 1)), e.concat([Gt(r)])
      }, o)),
    o
  )
}
function Ut(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = $t(r, n)), n > 0 ? e.concat([Gt(r)]) : [Gt(r)].concat(e)
  }, [])
}
function Zt(e, t, n) {
  return e && 'string' == typeof t ? Ft(e, t) : e && 'function' == typeof t ? t(e) : n
}
function Xt(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.minBookingDays,
    a = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !Pt(t, Wt(i, -1)),
    s = !l || !zt(Wt(t, o - 1), l)
  if (t && 1 === o && !n && !r(t)) return !0
  if ((t && o > 1 && !n && !a) || (t && o > 0 && a && c && s) || (t && o > 0 && a && !i && !l))
    return Et(t, Wt(t, o - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !a) {
    var u = Wt(t, o - 1)
    return (
      !Pt(n, u) &&
      Et(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var Jt = 'startDate',
  qt = 'endDate'
function Kt(e) {
  var o = e.startDate,
    a = e.endDate,
    i = e.focusedInput,
    l = e.minBookingDate,
    c = e.maxBookingDate,
    s = e.onDateChange,
    u = e.exactMinBookingDays,
    d = void 0 !== u && u,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    g = e.numberOfMonths,
    m = void 0 === g ? 2 : g,
    h = e.firstDayOfWeek,
    y = void 0 === h ? 1 : h,
    v = e.isDayBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    k = n(function() {
      return _t(m, o)
    }),
    b = k[0],
    x = k[1],
    S = n(null),
    C = S[0],
    w = S[1],
    B = n(o),
    M = B[0],
    F = B[1],
    W = r(
      function(e) {
        F(e), (!M || (M && !Yt(e, M))) && x(_t(m, e))
      },
      [F, x, m, M],
    ),
    E = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && It(e, t, n)
        })(e, o, a)
      },
      [o, a],
    ),
    H = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && At(e, t)) || (n && At(e, n)))
        })(e, o, a)
      },
      [o, a],
    ),
    T = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            o = e.isDayBlockedFn,
            a = e.startDate,
            i = e.endDate,
            l = e.minBookingDays,
            c = void 0 === l ? 1 : l,
            s = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            u = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (s && Pt(t, s)) ||
            (u && zt(t, u)) ||
            (a && !i && c > 1 && It(t, a, Wt(a, c - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: l,
          maxBookingDate: c,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          isDayBlockedFn: D,
        })
      },
      [l, c, o, a, f, D],
    ),
    L = r(
      function(e) {
        return !!M && At(e, M)
      },
      [M],
    ),
    R = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            o = e.isDateBlocked,
            a = e.hoveredDate,
            i = e.minBookingDays
          return a && i > 1 && e.exactMinBookingDays && It(t, a, Wt(a, i - 1))
            ? Et(a, Wt(a, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : n && !r && a && It(t, n, Wt(n, i - 1)) && At(n, a) && i > 1
            ? Et(n, Wt(n, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : !(!n || r || !a || Pt(a, n) || !It(t, n, a)) &&
              Et(n, a).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: C,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          exactMinBookingDays: d,
          isDateBlocked: D,
        })
      },
      [C, o, a, f, d, D],
    )
  function O(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      M ||
      (W(new Date()), x(_t(m, new Date())))
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', O),
        function() {
          window.removeEventListener('keydown', O)
        }
      )
    }),
    {
      firstDayOfWeek: y,
      activeMonths: b,
      isDateSelected: E,
      isDateHovered: R,
      isFirstOrLastSelectedDate: H,
      isDateBlocked: T,
      numberOfMonths: m,
      isDateFocused: L,
      focusedDate: M,
      onResetDates: function() {
        s({startDate: null, endDate: null, focusedInput: Jt})
      },
      onDayHover: function(e) {
        var t = !T(e) || (o && At(e, o)),
          n = !l || !Pt(e, Wt(l, -1)),
          r = !c || !zt(e, c),
          i = Wt(e, f - 1),
          s = !l || !Pt(i, l),
          u = !c || !zt(i, c),
          p = d && f > 1 && n && r && s && u,
          g = o && !a && !d && n && r,
          m = !(f > 1 && o) || It(e, o, Wt(o, f - 2)),
          h = o && At(e, o) && m
        t && (p || g || h) ? w(e) : null !== C && w(null)
      },
      onDaySelect: function(e) {
        ;(i === qt || i === Jt) &&
        f > 0 &&
        d &&
        Xt({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: l,
          maxBookingDate: c,
          isDateBlocked: D,
          startDate: e,
          endDate: null,
        })
          ? s({startDate: e, endDate: Wt(e, f - 1), focusedInput: null})
          : ((i === qt && o && Pt(e, o)) || (i === Jt && a && zt(e, a))) &&
            !d &&
            Xt({minBookingDays: f, isDateBlocked: D, startDate: e, endDate: null})
          ? s({endDate: null, startDate: e, focusedInput: qt})
          : i === Jt && !d && Xt({minBookingDays: f, isDateBlocked: D, endDate: a, startDate: e})
          ? s({endDate: a, startDate: e, focusedInput: qt})
          : i === Jt && !d && Xt({minBookingDays: f, isDateBlocked: D, endDate: null, startDate: e})
          ? s({endDate: null, startDate: e, focusedInput: qt})
          : i === qt &&
            o &&
            !Pt(e, o) &&
            !d &&
            Xt({minBookingDays: f, isDateBlocked: D, startDate: o, endDate: e}) &&
            s({startDate: o, endDate: e, focusedInput: null}),
          (!M || (M && !Yt(e, M))) && x(_t(m, e))
      },
      onDayFocus: W,
      goToPreviousMonths: function() {
        x(Ut(b, m, -1)), F(null)
      },
      goToNextMonths: function() {
        x(Ut(b, m, 1)), F(null)
      },
    }
  )
}
var Qt,
  en,
  tn,
  nn = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  rn = u({}, nn, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  on = P({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  an = l('div')(
    Qt ||
      (Qt = d(
        [
          '\n  display: grid;\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  display: grid;\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    De,
    ve,
    ke,
    he,
    me,
    ye,
    Se,
    be,
    xe,
    ue,
    de,
    K,
    on,
  ),
  ln = l('div')(
    en ||
      (en = d(
        [
          '\n  display: flex;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  display: flex;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    K,
    ge,
    pe,
    fe,
    ue,
    de,
    Ce,
    ce,
    te,
  ),
  cn = l('div')(
    tn ||
      (tn = d(
        [
          '\n  box-sizing: border-box;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
        [
          '\n  box-sizing: border-box;\n\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ],
      )),
    Ce,
    ce,
    K,
    te,
    Ae,
    je,
    $e,
    Ve,
    Ne,
    Ye,
  )
function sn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: i,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
function un(e) {
  void 0 === e && (e = {})
  var t = a(c)
  return o(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return u({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var dn,
  pn,
  fn,
  gn = {
    fontFamily: 'Montserrat, sans-serif',
    colors: {
      silverCloud: '#929598',
      charcoal: '#001217',
      darcula: '#343132',
      mud: '#58595B',
      greey: '#808285',
    },
    daySize: 36,
  },
  mn = P({prop: 'placeholderColor', cssProperty: 'color'}),
  hn = P({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  yn = l('label')(
    dn ||
      (dn = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ae,
    we,
    Ie,
    le,
    Le,
    K,
  ),
  vn = l('div')(
    pn ||
      (pn = d(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
      )),
    Ae,
    $e,
    Ve,
    je,
    ce,
    te,
  ),
  Dn = l('input')(
    fn ||
      (fn = d(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
        ],
      )),
    Ie,
    K,
    oe,
    re,
    Q,
    ae,
    K,
    we,
    te,
    se,
    Oe,
    hn,
    mn,
    hn,
    mn,
    hn,
    mn,
  )
function kn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.vertical,
    a = t.isActive,
    i = t.ariaLabel,
    l = t.onClick,
    c = t.value,
    s = t.showCalendarIcon,
    u = t.padding,
    d = t.rtl,
    p = t.disableAccessibility,
    f = un({
      fontFamily: gn.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: gn.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: u,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: gn.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : o ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (o ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: '#BCBEC0',
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid #d0d0d0',
      inputLabelBorderRadius: '2px',
      inputLabelBackground: '#ffffff',
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 #00aeef',
    })
  return e.createElement(
    yn,
    {
      htmlFor: r,
      display: f.inputLabelDisplay,
      position: f.inputLabelPosition,
      border: f.inputLabelBorder,
      background: f.inputLabelBackground,
      borderRadius: f.inputLabelBorderRadius,
      m: f.inputLabelMargin,
    },
    s &&
      e.createElement(
        vn,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(sn, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(Dn, {
      readOnly: !0,
      tabIndex: p ? -1 : 0,
      border: f.inputBorder,
      p: f.inputPadding,
      width: f.inputWidth,
      minHeight: f.inputMinHeight,
      background: f.inputBackground,
      fontFamily: f.fontFamily,
      color: f.inputColor,
      fontSize: f.inputFontSize,
      fontWeight: f.inputFontWeight,
      placeholderColor: f.inputPlaceholderColor,
      placeholderFontWeight: f.inputPlaceholderFontWeight,
      boxShadow: a ? f.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: n,
      'aria-label': i,
      value: c,
      autoComplete: 'off',
      onFocus: l,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function bn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    c = void 0 === l ? '' : l,
    s = (function(e) {
      switch (e) {
        case 'up':
          return 0
        case 'down':
          return 180
        case 'left':
          return -90
        case 'right':
        default:
          return 90
      }
    })(i)
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: c,
      transform: 'rotate(' + s + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
var xn,
  Sn,
  Cn,
  wn = l('div')(
    xn ||
      (xn = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    oe,
    re,
    ae,
    Q,
    ie,
    K,
  ),
  Bn = l(wn)(
    Cn ||
      (Cn = d(
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
      )),
    function(e) {
      return (
        e.isActive &&
        s(
          Sn ||
            (Sn = d(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Mn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = t.vertical,
    i = un({
      fontFamily: gn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: gn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: gn.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    cn,
    {p: i.selectDatePadding},
    e.createElement(
      wn,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Bn,
      {
        as: 'span',
        color: i.selectDateDateColor,
        fontSize: i.selectDateDateFontSize,
        fontWeight: i.selectDateDateFontWeight,
        fontFamily: i.fontFamily,
        p: i.selectDateDatePadding,
        isActive: r,
      },
      o,
    ),
  )
}
var Fn,
  Wn,
  En,
  Hn,
  Tn,
  Ln = function(t) {
    var n = t.label,
      r = un({
        fontFamily: gn.fontFamily,
        monthLabelColor: gn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      wn,
      {
        fontFamily: r.fontFamily,
        fontSize: r.monthLabelFontSize,
        fontWeight: r.monthLabelFontWeight,
        lineHeight: r.monthLabelLineHeight,
        color: r.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      n,
    )
  },
  Rn = function(t) {
    var n = t.label,
      r = un({
        fontFamily: gn.fontFamily,
        dayLabelColor: gn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      wn,
      {
        fontFamily: r.fontFamily,
        fontSize: r.dayLabelFontSize,
        fontWeight: r.dayLabelFontWeight,
        color: r.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      n,
    )
  },
  On = e.createContext({
    rtl: !1,
    focusedDate: null,
    isDateFocused: function() {
      return !1
    },
    isDateSelected: function() {
      return !1
    },
    isDateHovered: function() {
      return !1
    },
    isDateBlocked: function() {
      return !1
    },
    isFirstOrLastSelectedDate: function() {
      return !1
    },
    onDayFocus: function() {},
    onDayHover: function() {},
    onDaySelect: function() {},
  }),
  Pn = P({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  zn = P({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  In = P({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  An = P({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Yn = P({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  jn = P({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vn = l('button')(
    Tn ||
      (Tn = d(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n  \n  &:focus {\n    ',
          '\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n  \n  &:focus {\n    ',
          '\n  }\n',
        ],
      )),
    Pn,
    zn,
    Oe,
    Ie,
    Q,
    oe,
    ae,
    re,
    function(e) {
      var t = e.disabledDate,
        n = e.isStartOrEnd
      return (
        t &&
        !n &&
        s(
          Fn ||
            (Fn = d(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabledDate,
        n = e.isActive,
        r = e.isStartOrEnd,
        o = e.isWithinHoverRange
      return t || n || r || o
        ? n && !r
          ? s(
              En ||
                (En = d(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              jn,
              An,
            )
          : ''
        : s(
            Wn ||
              (Wn = d(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Yn,
            In,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return s(
        Hn ||
          (Hn = d(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Nn(e, t, n, r) {
  var o = r.selectedFirstOrLast,
    a = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? o : e ? i : n ? l : a
}
function $n(n) {
  var l = n.day,
    c = n.date,
    s = i(null),
    d = a(On),
    p = d.focusedDate,
    f = d.isDateFocused,
    g = d.isDateSelected,
    m = d.isDateHovered,
    h = d.isDateBlocked,
    y = d.isFirstOrLastSelectedDate,
    v = d.onDaySelect,
    D = (function(e) {
      var n = e.date,
        o = e.focusedDate,
        a = e.isDateSelected,
        i = e.isDateFocused,
        l = e.isFirstOrLastSelectedDate,
        c = e.isDateHovered,
        s = e.isDateBlocked,
        u = e.onDaySelect,
        d = e.onDayFocus,
        p = e.onDayHover,
        f = e.dayRef,
        g = r(
          function() {
            return u(n)
          },
          [n, u],
        ),
        m = r(
          function() {
            return p(n)
          },
          [n, p],
        )
      t(
        function() {
          f && f.current && i(n) && f.current.focus()
        },
        [f, n, i],
      )
      var h = s(n) && !c(n)
      return {
        role: 'button',
        tabIndex: null === o || i(n) ? 0 : -1,
        isActive: a(n),
        isStartOrEnd: l(n),
        isWithinHoverRange: c(n),
        disabledDate: h,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? d(Wt(n, 1))
            : 'ArrowLeft' === e.key
            ? d(Wt(n, -1))
            : 'ArrowUp' === e.key
            ? d(Wt(n, -7))
            : 'ArrowDown' === e.key && d(Wt(n, 7))
        },
        onClick: h ? function() {} : g,
        onMouseEnter: m,
      }
    })({
      date: c,
      focusedDate: p,
      isDateFocused: f,
      isDateSelected: g,
      isDateHovered: m,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: y,
      onDayFocus: d.onDayFocus,
      onDaySelect: v,
      onDayHover: d.onDayHover,
      dayRef: s,
    }),
    k = un({
      fontFamily: gn.fontFamily,
      daySize: gn.daySize,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: '#58595b',
      dayHoverColor: '#58595b',
      daySelectedColor: '#ffffff',
      daySelectedHoverColor: '#ffffff',
      dayHoverRangeColor: '#ffffff',
      daySelectedFirstOrLastColor: '#ffffff',
      dayBackground: '#ffffff',
      dayHoverBackground: '#e6e7e8',
      daySelectedBackground: '#71c9ed',
      daySelectedHoverBackground: '#39beef',
      dayHoverRangeBackground: '#71c9ed',
      daySelectedFirstOrLastBackground: '#00aeef',
      dayBorderColor: '#e6e7e8',
      daySelectedBorderColor: '#71c9ed',
      dayHoverRangeBorderColor: '#71c9ed',
      daySelectedFirstOrLastBorderColor: '#00aeef',
      dayAccessibilityBorderColor: '#009fef',
    }),
    b = o(
      function() {
        return Nn(D.isActive, D.isStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastBorderColor,
          selected: k.daySelectedBorderColor,
          normal: k.dayBorderColor,
          rangeHover: k.dayHoverRangeColor,
        })
      },
      [D.isActive, D.isStartOrEnd, k, D.isWithinHoverRange],
    ),
    x = o(
      function() {
        return Nn(D.isActive, D.isStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastBackground,
          selected: k.daySelectedBackground,
          normal: k.dayBackground,
          rangeHover: k.dayHoverRangeBackground,
        })
      },
      [D.isActive, D.isStartOrEnd, k, D.isWithinHoverRange],
    ),
    S = o(
      function() {
        return Nn(D.isActive, D.isStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastColor,
          selected: k.daySelectedColor,
          normal: k.dayColor,
          rangeHover: k.dayHoverRangeColor,
        })
      },
      [D.isActive, D.isStartOrEnd, k, D.isWithinHoverRange],
    )
  return e.createElement(
    Vn,
    u({}, D, {
      ref: s,
      dayHeight: k.daySize,
      dayWidth: k.daySize,
      background: x,
      color: S,
      fontFamily: k.fontFamily,
      fontWeight: k.dayFontWeight,
      fontSize: k.dayFontSize,
      daySelectedHoverBackground: k.daySelectedHoverBackground,
      dayHoverBackground: k.dayHoverBackground,
      dayHoverColor: k.dayHoverColor,
      daySelectedHoverColor: k.daySelectedHoverColor,
      borderAccessibilityColor: k.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        b +
        ',\n        0 1px 0 0 ' +
        b +
        ',\n        1px 1px 0 0 ' +
        b +
        ',\n        1px 0 0 0 ' +
        b +
        ' inset,\n        0 1px 0 0 ' +
        b +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + c.toDateString(),
    }),
    e.createElement(
      ln,
      {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
      l,
    ),
  )
}
var Gn,
  _n = l('div')(
    Gn ||
      (Gn = d(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Un = function(t) {
    var n = Ot({year: t.year, month: t.month, weekStartsOn: t.firstDayOfWeek}),
      r = n.days,
      o = n.weekDays,
      a = n.monthLabel,
      i = un({daySize: gn.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      _n,
      null,
      e.createElement(
        ln,
        {justifyContent: 'center', m: i.monthLabelMargin},
        e.createElement(Ln, {label: a}),
      ),
      e.createElement(
        an,
        {daySizeGridTemplateColumns: i.daySize},
        o.map(function(t) {
          return e.createElement(
            ln,
            {key: t, justifyContent: 'center', m: i.monthDayLabelMargin},
            e.createElement(Rn, {label: t}),
          )
        }),
      ),
      e.createElement(
        an,
        {daySizeGridTemplateColumns: i.daySize},
        r.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement($n, {date: t.date, key: t.day, day: t.day})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Zn,
  Xn,
  Jn,
  qn = l('button')(
    Zn ||
      (Zn = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Kn = l(function(t) {
    var n = t.height,
      r = t.width,
      o = t.color,
      a = t.className,
      i = void 0 === a ? '' : a
    return e.createElement(
      'svg',
      {
        width: r,
        height: n,
        color: o,
        className: i,
        viewBox: '0 0 14 14',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      e.createElement('path', {
        fill: 'currentColor',
        fillRule: 'nonzero',
        d:
          'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
      }),
    )
  })(Jn || (Jn = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(
        Xn ||
          (Xn = d(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function Qn(t) {
  var n = t.onResetDates,
    r = t.text,
    o = t.rtl,
    a = i(null),
    l = un({
      fontFamily: gn.fontFamily,
      resetDatesIconColor: gn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: gn.colors.darcula,
      resetDatesTextMargin: o ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    qn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(Kn, {
      height: l.resetDatesIconHeight,
      width: l.resetDatesIconWidth,
      color: l.resetDatesIconColor,
      rtl: o,
    }),
    e.createElement(
      wn,
      {
        m: l.resetDatesTextMargin,
        lineHeight: l.resetDatesTextLineHeight,
        fontFamily: l.fontFamily,
        fontSize: l.resetDatesTextFontSize,
        color: l.resetDatesTextColor,
      },
      r,
    ),
  )
}
var er,
  tr,
  nr = l('svg')(tr || (tr = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      er ||
        (er = d(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function rr(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    c = void 0 === l ? '' : l,
    s = (function(e) {
      switch (e) {
        case 'up':
          return 180
        case 'down':
          return 0
        case 'left':
          return 90
        case 'right':
        default:
          return -90
      }
    })(i)
  return e.createElement(
    nr,
    {
      width: r,
      height: n,
      color: o,
      className: c,
      angle: s,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var or,
  ar = l('button')(
    or ||
      (or = d(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ],
      )),
    te,
    ce,
    Ie,
    K,
    Re,
  )
function ir(t) {
  var n = t.type,
    r = t.onClick,
    o = t.vertical,
    a = t.rtl,
    l = t.ariaLabel,
    c = i(null),
    s = un({
      navButtonWidth: o ? '48px' : '30px',
      navButtonHeight: o ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: o ? '18px' : '11px',
      navButtonIconWidth: o ? '28px' : '18px',
      navButtonIconColor: gn.colors.greey,
    })
  function u() {
    return 'next' !== n || o
      ? 'next' === n && o
        ? 'down'
        : 'prev' !== n || o
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    ar,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== u() || a ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && a ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': l,
      onClick: r,
      onMouseUp: function() {
        c && c.current && c.current.blur()
      },
      ref: c,
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(rr, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: u(),
    }),
  )
}
function lr(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
      className: i,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var cr,
  sr,
  ur = l('div')(
    cr ||
      (cr = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    K,
    Q,
    re,
    oe,
    ae,
  ),
  dr = l('button')(
    sr ||
      (sr = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      ',
          '\n    }\n\n    svg {\n      ',
          '\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      ',
          '\n    }\n\n    svg {\n      ',
          '\n    }\n  }\n',
        ],
      )),
    ur,
    Q,
    Q,
  )
function pr(t) {
  var n = t.onClick,
    r = t.rtl,
    o = un({
      fontFamily: gn.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    dr,
    {
      onClick: n,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(lr, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      ur,
      {
        m: o.closeMargin,
        color: o.closeColor,
        fontSize: o.closeFontSize,
        fontFamily: o.fontFamily,
        fontWeight: o.closeFontWeight,
      },
      'Close',
    ),
  )
}
var fr,
  gr,
  mr,
  hr,
  yr,
  vr = l('div')(
    gr ||
      (gr = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ie,
    K,
    Le,
    Ae,
    Oe,
    function(e) {
      return (
        e.rtl &&
        s(fr || (fr = d(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
  ),
  Dr = l('div')(
    mr ||
      (mr = d(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  kr = l(cn)(hr || (hr = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), le, de),
  br = l(an)(yr || (yr = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), ze, ce)
function xr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    l = t.focusedInput,
    c = t.onDateChange,
    s = t.vertical,
    u = void 0 !== s && s,
    d = t.rtl,
    p = void 0 !== d && d,
    f = t.showResetDates,
    g = void 0 === f || f,
    m = t.showClose,
    h = void 0 === m || m,
    y = t.showSelectedDates,
    v = void 0 === y || y,
    D = t.exactMinBookingDays,
    k = void 0 !== D && D,
    b = t.isDayBlocked,
    x =
      void 0 === b
        ? function() {
            return !1
          }
        : b,
    S = t.minBookingDays,
    C = void 0 === S ? 1 : S,
    w = t.onClose,
    B = void 0 === w ? function() {} : w,
    M = t.numberOfMonths,
    F = t.firstDayOfWeek,
    W = t.displayFormat,
    E = void 0 === W ? 'MM/DD/YYYY' : W,
    H = t.phrases,
    T = void 0 === H ? nn : H,
    L = Kt({
      startDate: n,
      endDate: r,
      focusedInput: l,
      onDateChange: c,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: C,
      isDayBlocked: x,
      exactMinBookingDays: k,
      numberOfMonths: M,
      firstDayOfWeek: F,
    }),
    R = L.activeMonths,
    O = L.isDateSelected,
    P = L.isFirstOrLastSelectedDate,
    z = L.isDateBlocked,
    I = L.isDateHovered,
    A = L.firstDayOfWeek,
    Y = L.onDaySelect,
    j = L.onResetDates,
    V = L.goToPreviousMonths,
    N = L.goToNextMonths,
    $ = L.numberOfMonths,
    G = L.onDayHover,
    _ = L.isDateFocused,
    U = L.focusedDate,
    Z = L.onDayFocus,
    X = i(null),
    J = un({
      datepickerBackground: '#ffffff',
      datepickerPadding: u ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerCloseWrapperPosition: u ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: u ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: u ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: u ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: p ? 'unset' : u ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: p ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: u ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: gn.colors.silverCloud,
      datepickerMonthsWrapperMargin: '28px 0 0',
      datepickerPreviousMonthButtonPosition: u ? 'relative' : 'absolute',
      datepickerPreviousMonthButtonTop: u ? 'unset' : '-5px',
      datepickerPreviousMonthButtonLeft: u ? 'unset' : '0',
      datepickerPreviousMonthButtonRight: 'unset',
      datepickerPreviousMonthButtonBottom: 'unset',
      datepickerNextMonthButtonPosition: u ? 'relative' : 'absolute',
      datepickerNextMonthButtonTop: u ? 'unset' : '-5px',
      datepickerNextMonthButtonLeft: 'unset',
      datepickerNextMonthButtonRight: u ? 'unset' : '0',
      datepickerNextMonthButtonBottom: 'unset',
      datepickerMonthsGridGap: u ? '32px' : '0 32px',
      datepickerMonthsGridOverflow: 'auto',
      datepickerMonthsGridHeight: u ? '50vh' : '100%',
      datepickerResetDatesWrapperMargin: u ? 'unset' : '32px 0 0',
      datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    })
  function q() {
    X && X.current && u && (X.current.scrollTop = 0)
  }
  function K() {
    N(), q()
  }
  function Q() {
    V(), q()
  }
  return e.createElement(
    On.Provider,
    {
      value: {
        rtl: p,
        isDateFocused: _,
        isDateSelected: O,
        isDateHovered: I,
        isDateBlocked: z,
        isFirstOrLastSelectedDate: P,
        onDayFocus: Z,
        focusedDate: U,
        onDaySelect: Y,
        onDayHover: G,
      },
    },
    e.createElement(
      vr,
      {
        background: J.datepickerBackground,
        p: J.datepickerPadding,
        borderRadius: J.datepickerBorderRadius,
        position: J.datepickerPosition,
        boxShadow: J.datepickerBoxShadow,
        rtl: p,
      },
      h &&
        e.createElement(
          kr,
          {
            m: J.datepickerCloseWrapperMargin,
            display: J.datepickerCloseWrapperDisplay,
            justifyContent: J.datepickerCloseWrapperJustifyContent,
            position: J.datepickerCloseWrapperPosition,
            right: J.datepickerCloseWrapperRight,
            top: J.datepickerCloseWrapperTop,
            left: J.datepickerCloseWrapperLeft,
            bottom: J.datepickerCloseWrapperBottom,
            zIndex: J.datepickerCloseWrapperZIndex,
          },
          e.createElement(pr, {onClick: B, rtl: p}),
        ),
      v &&
        e.createElement(
          Dr,
          null,
          e.createElement(
            an,
            {gridTemplateColumns: J.datepickerSelectDateGridTemplateColumns},
            e.createElement(Mn, {
              title: T.datepickerStartDateLabel,
              date: Zt(n, E, T.datepickerStartDatePlaceholder),
              isActive: l === Jt,
              vertical: u,
            }),
            e.createElement(
              ln,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(bn, {
                height: J.datepickerSelectDateArrowIconHeight,
                width: J.datepickerSelectDateArrowIconWidth,
                iconColor: J.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(Mn, {
              title: T.datepickerEndDateLabel,
              date: Zt(r, E, T.datepickerEndDatePlaceholder),
              isActive: l === qt,
              vertical: u,
            }),
          ),
        ),
      e.createElement(
        cn,
        {position: 'relative'},
        e.createElement(
          cn,
          {m: J.datepickerMonthsWrapperMargin},
          e.createElement(
            br,
            {
              overflow: J.datepickerMonthsGridOverflow,
              height: J.datepickerMonthsGridHeight,
              gridTemplateColumns: u ? '1fr' : 'repeat(' + $ + ', 1fr)',
              gridGap: J.datepickerMonthsGridGap,
              pr: p ? '1px' : '0',
              ref: X,
            },
            R.map(function(t) {
              return e.createElement(Un, {
                key: t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: A,
              })
            }),
          ),
        ),
        e.createElement(
          ln,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            g &&
              e.createElement(
                ln,
                {flex: '1', m: J.datepickerResetDatesWrapperMargin},
                e.createElement(Qn, {rtl: p, onResetDates: j, text: T.resetDates}),
              ),
            e.createElement(
              cn,
              {
                position: J.datepickerPreviousMonthButtonPosition,
                top: J.datepickerPreviousMonthButtonTop,
                left: J.datepickerPreviousMonthButtonLeft,
                right: J.datepickerPreviousMonthButtonRight,
                bottom: J.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(ir, {
                type: 'prev',
                onClick: p && !u ? K : Q,
                vertical: u,
                rtl: p,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              cn,
              {
                position: J.datepickerNextMonthButtonPosition,
                top: J.datepickerNextMonthButtonTop,
                left: J.datepickerNextMonthButtonLeft,
                right: J.datepickerNextMonthButtonRight,
                bottom: J.datepickerNextMonthButtonBottom,
              },
              e.createElement(ir, {
                type: 'next',
                onClick: p && !u ? Q : K,
                vertical: u,
                rtl: p,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var Sr,
  Cr,
  wr,
  Br,
  Mr,
  Fr = l(cn)(Cr || (Cr = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(Sr || (Sr = d(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Wr = l(bn)(
    Br || (Br = d(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Pe,
    Q,
    function(e) {
      return (
        e.rtl &&
        s(
          wr ||
            (wr = d(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  Er = l(an)(
    Mr || (Mr = d(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ie,
    we,
    Le,
  )
function Hr(n) {
  var r = n.startDate,
    o = n.endDate,
    a = n.minBookingDate,
    l = n.maxBookingDate,
    c = n.firstDayOfWeek,
    s = n.onFocusChange,
    u = n.numberOfMonths,
    d = n.focusedInput,
    p = n.onDateChange,
    f = n.exactMinBookingDays,
    g = n.showClose,
    m = void 0 === g || g,
    h = n.showSelectedDates,
    y = void 0 === h || h,
    v = n.showResetDates,
    D = void 0 === v || v,
    k = n.vertical,
    b = void 0 !== k && k,
    x = n.rtl,
    S = void 0 !== x && x,
    C = n.isDayBlocked,
    w =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    B = n.minBookingDays,
    M = void 0 === B ? 1 : B,
    F = n.onClose,
    W = void 0 === F ? function() {} : F,
    E = n.showStartDateCalendarIcon,
    H = void 0 === E || E,
    T = n.showEndDateCalendarIcon,
    L = void 0 === T || T,
    R = n.displayFormat,
    O = void 0 === R ? 'MM/DD/YYYY' : R,
    P = n.phrases,
    z = void 0 === P ? rn : P,
    I = i(null),
    A = un({
      dateRangeBackground: 'transparent',
      dateRangeGridTemplateColumns: b ? '1fr 24px 1fr' : '194px 39px 194px',
      dateRangeBorder: '0',
      dateRangeBorderRadius: '0',
      dateRangeArrowIconWidth: '15px',
      dateRangeArrowIconHeight: '12px',
      dateRangeArrowIconColor: '#ffffff',
      dateRangeArrowIconOpacity: 0.4,
      dateRangeStartDateInputPadding: b ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
      dateRangeEndDateInputPadding: b ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: 'unset',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: '0',
      dateRangeDatepickerWrapperPosition: 'absolute',
    })
  function Y(e) {
    null !== d && I && I.current && !I.current.contains(e.target) && s(null)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', Y),
        function() {
          window.removeEventListener('click', Y)
        }
      )
    }),
    e.createElement(
      Fr,
      {rtl: S, position: 'relative', ref: I},
      e.createElement(
        Er,
        {
          background: A.dateRangeBackground,
          gridTemplateColumns: A.dateRangeGridTemplateColumns,
          border: A.dateRangeBorder,
          borderRadius: A.dateRangeBorderRadius,
        },
        e.createElement(kn, {
          id: 'startDate',
          ariaLabel: z.startDateAriaLabel,
          placeholder: z.startDatePlaceholder,
          value: Zt(r, O, ''),
          onClick: function() {
            return s(Jt)
          },
          showCalendarIcon: H,
          vertical: b,
          isActive: d === Jt,
          padding: A.dateRangeStartDateInputPadding,
          rtl: S,
        }),
        e.createElement(
          ln,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Wr, {
            width: A.dateRangeArrowIconWidth,
            height: A.dateRangeArrowIconHeight,
            color: A.dateRangeArrowIconColor,
            opacity: A.dateRangeArrowIconOpacity,
            rtl: S,
          }),
        ),
        e.createElement(kn, {
          id: 'endDate',
          ariaLabel: z.endDateAriaLabel,
          placeholder: z.endDatePlaceholder,
          value: Zt(o, O, ''),
          onClick: function() {
            return s(r ? qt : Jt)
          },
          showCalendarIcon: L,
          vertical: b,
          isActive: d === qt,
          padding: A.dateRangeEndDateInputPadding,
          rtl: S,
          disableAccessibility: d === Jt,
        }),
      ),
      e.createElement(
        cn,
        {
          position: A.dateRangeDatepickerWrapperPosition,
          bottom: A.dateRangeDatepickerWrapperBottom,
          left: A.dateRangeDatepickerWrapperLeft,
          top: A.dateRangeDatepickerWrapperTop,
          right: A.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(xr, {
            onClose: function() {
              W(), s(null)
            },
            startDate: r,
            endDate: o,
            minBookingDate: a,
            maxBookingDate: l,
            firstDayOfWeek: c,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: O,
            onDateChange: p,
            minBookingDays: M,
            isDayBlocked: w,
            exactMinBookingDays: f,
            showResetDates: D,
            vertical: b,
            showSelectedDates: y,
            showClose: m,
            rtl: S,
          }),
      ),
    )
  )
}
export {Hr as DateRangeInput, xr as Datepicker}
