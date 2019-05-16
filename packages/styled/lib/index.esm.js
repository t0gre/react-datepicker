import e, {
  useState as t,
  useCallback as n,
  useMemo as r,
  useContext as o,
  useRef as a,
  useEffect as i,
} from 'react'
import s, {ThemeContext as l, css as c} from 'styled-components'
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
function m(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var g = m(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    l = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    g = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case u:
            case d:
            case a:
            case s:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case c:
                case p:
                case l:
                  return e
                default:
                  return t
              }
          }
        case g:
        case m:
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
    (t.ContextConsumer = c),
    (t.ContextProvider = l),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = g),
    (t.Memo = m),
    (t.Portal = o),
    (t.Profiler = s),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === s ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === g ||
            e.$$typeof === m ||
            e.$$typeof === l ||
            e.$$typeof === c ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || h(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return h(e) === c
    }),
    (t.isContextProvider = function(e) {
      return h(e) === l
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
      return h(e) === g
    }),
    (t.isMemo = function(e) {
      return h(e) === m
    }),
    (t.isPortal = function(e) {
      return h(e) === o
    }),
    (t.isProfiler = function(e) {
      return h(e) === s
    }),
    (t.isStrictMode = function(e) {
      return h(e) === i
    }),
    (t.isSuspense = function(e) {
      return h(e) === f
    })
})
f(g)
g.typeOf,
  g.AsyncMode,
  g.ConcurrentMode,
  g.ContextConsumer,
  g.ContextProvider,
  g.Element,
  g.ForwardRef,
  g.Fragment,
  g.Lazy,
  g.Memo,
  g.Portal,
  g.Profiler,
  g.StrictMode,
  g.Suspense,
  g.isValidElementType,
  g.isAsyncMode,
  g.isConcurrentMode,
  g.isContextConsumer,
  g.isContextProvider,
  g.isElement,
  g.isForwardRef,
  g.isFragment,
  g.isLazy,
  g.isMemo,
  g.isPortal,
  g.isProfiler,
  g.isStrictMode,
  g.isSuspense
var h = m(function(e, t) {})
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
  m(function(e) {
    e.exports = g
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
var C = m(function(e) {
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
  S = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  w = C.oneOfType([C.number, C.string, C.array, C.object]),
  M = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  B = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return F(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && F(e[t]) ? e[t] : null
          }, e)
    }, null)
    return F(o) ? o : n[n.length - 1]
  },
  F = function(e) {
    return null != e
  },
  T = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  W = function(e) {
    return T(e) && 0 !== e ? e + 'px' : e
  },
  E = function(e) {
    return '@media screen and (min-width: ' + W(e) + ')'
  },
  H = function(e, t) {
    return B(t, e)
  },
  P = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] && 'object' == typeof t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  L = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = P(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  O = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      s = void 0 === i ? H : i,
      l = e.scale,
      c = void 0 === l ? {} : l,
      u = r || n,
      d = function(e) {
        var t = B(e, n, o, null)
        if (!F(t)) return null
        var r,
          i = B(e.theme, a, c),
          l = function(e) {
            var t
            return F(e) ? (((t = {})[u] = s(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return l(t)
        var d = B(e.theme, 'breakpoints', S),
          p = []
        if (Array.isArray(t)) {
          p.push(l(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var m = l(t[f])
            if (m) {
              var g,
                h = E(d[f - 1])
              p.push((((g = {})[h] = m), g))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              k = E(D),
              b = l(t[y])
            if (D) p.push((((v = {})[k] = b), v))
            else p.unshift(b)
          }
          p.sort()
        }
        return L.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = M(w)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = M(w)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  R = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return L.apply(void 0, n)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = p({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  z = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  I = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return B(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = C.oneOfType([C.number, C.string])), t)), a
  },
  A = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  Y = function(e, t) {
    if (!T(e)) return W(B(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = B(t, r)
    return T(o) ? W(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  j = O({prop: 'margin', alias: 'm', key: 'space', transformValue: Y, scale: A}),
  V = O({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: Y, scale: A}),
  N = O({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: Y, scale: A}),
  $ = O({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: Y, scale: A}),
  G = O({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: Y, scale: A}),
  _ = O({prop: 'padding', alias: 'p', key: 'space', transformValue: Y, scale: A}),
  U = O({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: Y, scale: A}),
  Z = O({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: Y, scale: A}),
  X = O({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: Y, scale: A}),
  J = O({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: Y, scale: A}),
  q = z(function(e) {
    return p({}, e, {
      mt: F(e.my) ? e.my : e.mt,
      mb: F(e.my) ? e.my : e.mb,
      ml: F(e.mx) ? e.mx : e.ml,
      mr: F(e.mx) ? e.mx : e.mr,
      pt: F(e.py) ? e.py : e.pt,
      pb: F(e.py) ? e.py : e.pb,
      pl: F(e.px) ? e.px : e.pl,
      pr: F(e.px) ? e.px : e.pr,
    })
  })(R(j, V, N, $, G, _, U, Z, X, J)),
  Q = R(
    O({prop: 'color', key: 'colors'}),
    O({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  K = function(e, t) {
    return !T(e) || e > 1 ? W(e) : 100 * e + '%'
  },
  ee = O({prop: 'width', key: 'widths', transformValue: K}),
  te = function(e, t) {
    return W(B(t, e))
  },
  ne = O({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: te,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  re = O({prop: 'fontFamily', key: 'fonts'}),
  oe = O({prop: 'fontWeight', key: 'fontWeights'}),
  ae = O({prop: 'lineHeight', key: 'lineHeights'}),
  ie = (O({prop: 'textAlign'}),
  O({prop: 'fontStyle'}),
  O({prop: 'letterSpacing', key: 'letterSpacings', transformValue: te}),
  O({prop: 'display'})),
  se = (O({prop: 'maxWidth', key: 'maxWidths', transformValue: te}),
  O({prop: 'minWidth', key: 'minWidths', transformValue: te}),
  O({prop: 'height', key: 'heights', transformValue: te})),
  le = (O({prop: 'maxHeight', key: 'maxHeights', transformValue: te}),
  O({prop: 'minHeight', key: 'minHeights', transformValue: te})),
  ce = (z(function(e) {
    return p({}, e, {width: e.size, height: e.size})
  })(R(ee, se)),
  O({prop: 'verticalAlign'}),
  O({prop: 'alignItems'})),
  ue = (O({prop: 'alignContent'}), O({prop: 'justifyItems'}), O({prop: 'justifyContent'})),
  de = O({prop: 'flexWrap'}),
  pe = (O({prop: 'flexBasis', transformValue: K}), O({prop: 'flexDirection'})),
  fe = O({prop: 'flex'}),
  me = (O({prop: 'justifySelf'}),
  O({prop: 'alignSelf'}),
  O({prop: 'order'}),
  O({prop: 'gridGap', key: 'space', transformValue: te, scale: A})),
  ge = O({prop: 'gridColumnGap', key: 'space', transformValue: te, scale: A}),
  he = O({prop: 'gridRowGap', key: 'space', transformValue: te, scale: A}),
  ye = (O({prop: 'gridColumn'}), O({prop: 'gridRow'}), O({prop: 'gridAutoFlow'})),
  ve = O({prop: 'gridAutoColumns'}),
  De = O({prop: 'gridAutoRows'}),
  ke = O({prop: 'gridTemplateColumns'}),
  be = O({prop: 'gridTemplateRows'}),
  xe = O({prop: 'gridTemplateAreas'}),
  Ce = O({prop: 'gridArea'}),
  Se = O({prop: 'border', key: 'borders'}),
  we = O({prop: 'borderWidth', key: 'borderWidths', transformValue: te}),
  Me = O({prop: 'borderStyle', key: 'borderStyles'}),
  Be = O({prop: 'borderColor', key: 'colors'}),
  Fe = O({prop: 'borderTop', key: 'borders'}),
  Te = O({prop: 'borderRight', key: 'borders'}),
  We = O({prop: 'borderBottom', key: 'borders'}),
  Ee = O({prop: 'borderLeft', key: 'borders'}),
  He = O({prop: 'borderRadius', key: 'radii', transformValue: te}),
  Pe = (R(Se, Fe, Te, We, Ee, we, Me, Be, He), O({prop: 'boxShadow', key: 'shadows'})),
  Le = O({prop: 'opacity'}),
  Oe = (O({prop: 'overflow'}), O({prop: 'background'})),
  Re = (O({prop: 'backgroundImage'}),
  O({prop: 'backgroundSize'}),
  O({prop: 'backgroundPosition'}),
  O({prop: 'backgroundRepeat'}),
  O({prop: 'position'})),
  ze = O({prop: 'zIndex', key: 'zIndices'}),
  Ie = O({prop: 'top', transformValue: te}),
  Ae = O({prop: 'right', transformValue: te}),
  Ye = O({prop: 'bottom', transformValue: te}),
  je = O({prop: 'left', transformValue: te}),
  Ve = (I({key: 'buttons'}),
  I({key: 'textStyles', prop: 'textStyle'}),
  I({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  Ne = function(e) {
    return e instanceof Date
  },
  $e = 36e5,
  Ge = /[T ]/,
  _e = /:/,
  Ue = /^(\d{2})$/,
  Ze = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  Xe = /^(\d{4})/,
  Je = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  qe = /^-(\d{2})$/,
  Qe = /^-?(\d{3})$/,
  Ke = /^-?(\d{2})-?(\d{2})$/,
  et = /^-?W(\d{2})$/,
  tt = /^-?W(\d{2})-?(\d{1})$/,
  nt = /^(\d{2}([.,]\d*)?)$/,
  rt = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  ot = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  at = /([Z+-].*)$/,
  it = /^(Z)$/,
  st = /^([+-])(\d{2})$/,
  lt = /^([+-])(\d{2}):?(\d{2})$/
function ct(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var ut,
  dt = function(e, t) {
    if (Ne(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(Ge)
        if ((_e.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = at.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      s = (function(e, t) {
        var n,
          r = Ze[t],
          o = Je[t]
        if ((n = Xe.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Ue.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      l = s.year,
      c = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = qe.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = Qe.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = Ke.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = et.exec(e))
          ? ct(t, parseInt(n[1], 10) - 1)
          : (n = tt.exec(e))
          ? ct(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(s.restDateString, l)
    if (c) {
      var u,
        d = c.getTime(),
        p = 0
      if (
        (i.time &&
          (p = (function(e) {
            var t, n, r
            if ((t = nt.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * $e
            if ((t = rt.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * $e + 6e4 * r
              )
            if ((t = ot.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * $e + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (u =
            6e4 *
            ((o = it.exec(r))
              ? 0
              : (o = st.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = lt.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var f = d + p,
          m = new Date(f)
        u = Ve(m)
        var g = new Date(f)
        g.setDate(m.getDate() + 1)
        var h = Ve(g) - Ve(m)
        h > 0 && (u += h)
      }
      return new Date(d + p + u)
    }
    return new Date(e)
  },
  pt = function(e) {
    var t = dt(e)
    return t.setHours(0, 0, 0, 0), t
  },
  ft = function(e) {
    var t = dt(e)
    return (
      (function(e, t) {
        var n = pt(e),
          r = pt(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = dt(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  mt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = dt(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  gt = function(e) {
    return mt(e, {weekStartsOn: 1})
  },
  ht = function(e) {
    var t = dt(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = gt(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = gt(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  yt = function(e) {
    var t = dt(e),
      n =
        gt(t).getTime() -
        (function(e) {
          var t = ht(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), gt(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  vt = function(e) {
    if (Ne(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  Dt = [
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
  kt = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = Dt.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  bt = {
    distanceInWords: ((ut = {
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
            'string' == typeof ut[e]
              ? ut[e]
              : 1 === t
              ? ut[e].one
              : ut[e].other.replace('{{count}}', t)),
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
        s = ['a.m.', 'p.m.'],
        l = {
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
            return e.getHours() / 12 >= 1 ? s[1] : s[0]
          },
        }
      return (
        ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
          l[e + 'o'] = function(t, n) {
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
        {formatters: l, formattingTokensRegExp: kt(l)}
      )
    })(),
  },
  xt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return St(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return St(e.getDate(), 2)
    },
    DDD: function(e) {
      return ft(e)
    },
    DDDD: function(e) {
      return St(ft(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return yt(e)
    },
    WW: function(e) {
      return St(yt(e), 2)
    },
    YY: function(e) {
      return St(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return St(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(ht(e)).substr(2)
    },
    GGGG: function(e) {
      return ht(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return St(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return St(xt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return St(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return St(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return St(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return St(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return Ct(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return Ct(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function Ct(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + St(Math.floor(r / 60), 2) + t + St(o, 2)
}
function St(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var wt = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = bt.format.formatters,
      i = bt.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var s = dt(e)
    return vt(s)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            s = i.length
          for (r = 0; r < s; r++)
            (o = t[i[r]] || xt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < s; n++)
              i[n] instanceof Function ? (t += i[n](e, xt)) : (t += i[n])
            return t
          }
        })(r, a, i)(s)
      : 'Invalid Date'
  },
  Mt = function(e, t) {
    var n = dt(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Bt = function(e, t, n) {
    var r = dt(e),
      o = void 0 !== n ? n : 1,
      a = dt(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      s = r
    for (s.setHours(0, 0, 0, 0); s.getTime() <= a; ) i.push(dt(s)), s.setDate(s.getDate() + o)
    return i
  },
  Ft = function(e) {
    var t = dt(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Tt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = dt(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  Wt = function(e) {
    return dt(e).getDay()
  },
  Et = function(e) {
    var t = dt(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Ht(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    s =
      void 0 === i
        ? function(e) {
            return wt(e, 'DD')
          }
        : i,
    l = e.weekDayFormat,
    c =
      void 0 === l
        ? function(e) {
            return wt(e, 'dd')
          }
        : l,
    u = e.monthLabelFormat,
    d =
      void 0 === u
        ? function(e) {
            return wt(e, 'MMMM YYYY')
          }
        : u
  return {
    days: r(
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
                    return wt(e, 'DD')
                  }
                : a,
            s = new Date(t, n),
            l = Et(s),
            c = Wt(l),
            u = Ft(s),
            d = Array.from(Array(c >= o ? c - o : o).keys()).fill(0),
            p = Bt(l, u).map(function(e) {
              return {date: e, day: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, weekStartsOn: a, dayFormat: s})
      },
      [t, n, a, s],
    ),
    weekDays: r(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.weekStartsOn,
            r = void 0 === n ? 1 : n,
            o = t.weekDayFormat,
            a =
              void 0 === o
                ? function(e) {
                    return wt(e, 'dd')
                  }
                : o,
            i = new Date()
          return Bt(Mt(mt(i), r), Mt(Tt(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: c})
      },
      [a, c],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var Pt = function(e, t) {
    var n = dt(e),
      r = dt(t)
    return n.getTime() < r.getTime()
  },
  Lt = function(e, t) {
    var n = dt(e),
      r = dt(t)
    return n.getTime() > r.getTime()
  },
  Ot = function(e, t, n) {
    var r = dt(e).getTime(),
      o = dt(t).getTime(),
      a = dt(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  Rt = function(e, t) {
    var n = pt(e),
      r = pt(t)
    return n.getTime() === r.getTime()
  },
  zt = function(e) {
    return dt(e).getFullYear()
  },
  It = function(e) {
    return dt(e).getMonth()
  },
  At = function() {
    return pt(new Date())
  },
  Yt = function(e, t) {
    var n = dt(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = dt(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function jt(e) {
  var t = Et(e)
  return {year: zt(t), month: It(t), date: t}
}
function Vt(e, t) {
  var n = jt(t || At()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = Yt(e[e.length - 1].date, 1)), e.concat([jt(r)])
      }, o)),
    o
  )
}
function Nt(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = Yt(r, n)), n > 0 ? e.concat([jt(r)]) : [jt(r)].concat(e)
  }, [])
}
function $t(e, t, n) {
  return e && 'string' == typeof t ? wt(e, t) : e && 'function' == typeof t ? t(e) : n
}
function Gt(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.minBookingDays,
    a = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate
  if (t && 1 === o && !n && !r(t)) return !0
  if (
    (t && o > 1 && !n && !a) ||
    (t && o > 0 && a && i && s && !Pt(t, i) && !Lt(Mt(t, o - 1), s)) ||
    (t && o > 0 && a && !i && !s)
  )
    return Bt(t, Mt(t, o - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !a) {
    var l = Mt(t, o - 1)
    return (
      !Pt(n, l) &&
      Bt(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var _t = 'startDate',
  Ut = 'endDate'
function Zt(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    l = e.onDateChange,
    c = e.exactMinBookingDays,
    u = void 0 !== c && c,
    d = e.minBookingDays,
    p = void 0 === d ? 1 : d,
    f = e.numberOfMonths,
    m = void 0 === f ? 2 : f,
    g = e.firstDayOfWeek,
    h = void 0 === g ? 1 : g,
    y = e.isDayBlocked,
    v =
      void 0 === y
        ? function() {
            return !1
          }
        : y,
    D = t(function() {
      return Vt(m, r)
    }),
    k = D[0],
    b = D[1],
    x = t(null),
    C = x[0],
    S = x[1],
    w = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && Ot(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    M = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && Rt(e, t)) || (n && Rt(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    B = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            o = e.isDayBlockedFn,
            a = e.startDate,
            i = e.endDate,
            s = e.minBookingDays,
            l = void 0 === s ? 1 : s,
            c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            u = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (c && Pt(t, c)) ||
            (u && Lt(t, u)) ||
            (a && !i && l > 1 && Ot(t, a, Mt(a, l - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: i,
          maxBookingDate: s,
          startDate: r,
          endDate: o,
          minBookingDays: p,
          isDayBlockedFn: v,
        })
      },
      [i, s, r, o, p, v],
    ),
    F = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            o = e.isDateBlocked,
            a = e.hoveredDate,
            i = e.minBookingDays
          return a && i > 1 && e.exactMinBookingDays && Ot(t, a, Mt(a, i - 1))
            ? Bt(a, Mt(a, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : n && !r && a && Ot(t, n, Mt(n, i - 1)) && Rt(n, a) && i > 1
            ? Bt(n, Mt(n, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : !(!n || r || !a || Pt(a, n) || !Ot(t, n, a)) &&
              Bt(n, a).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: C,
          startDate: r,
          endDate: o,
          minBookingDays: p,
          exactMinBookingDays: u,
          isDateBlocked: v,
        })
      },
      [C, r, o, p, u, v],
    )
  return {
    firstDayOfWeek: h,
    activeMonths: k,
    isDateSelected: w,
    isDateHovered: F,
    isFirstOrLastSelectedDate: M,
    isDateBlocked: B,
    numberOfMonths: m,
    onResetDates: function() {
      l({startDate: null, endDate: null, focusedInput: _t})
    },
    onDayHover: function(e) {
      ;(u && (p <= 1 || (i && s && (!Ot(e, i, s) || !Ot(Mt(e, p - 1), i, s))))) ||
      (!u &&
        (!r ||
          o ||
          (i && s && !Ot(e, i, s)) ||
          (!Rt(e, r) && p > 1 && r && Ot(e, r, Mt(r, p - 2)))))
        ? S(null)
        : S(e)
    },
    onDaySelect: function(e) {
      ;(a === Ut || a === _t) &&
      p > 0 &&
      u &&
      Gt({
        minBookingDays: p,
        exactMinBookingDays: u,
        minBookingDate: i,
        maxBookingDate: s,
        isDateBlocked: v,
        startDate: e,
        endDate: null,
      })
        ? l({startDate: e, endDate: Mt(e, p - 1), focusedInput: null})
        : ((a === Ut && r && Pt(e, r)) || (a === _t && o && Lt(e, o))) &&
          !u &&
          Gt({minBookingDays: p, isDateBlocked: v, startDate: e, endDate: null})
        ? l({endDate: null, startDate: e, focusedInput: Ut})
        : a === _t && !u && Gt({minBookingDays: p, isDateBlocked: v, endDate: o, startDate: e})
        ? l({endDate: o, startDate: e, focusedInput: Ut})
        : a === _t && !u && Gt({minBookingDays: p, isDateBlocked: v, endDate: null, startDate: e})
        ? l({endDate: null, startDate: e, focusedInput: Ut})
        : a === Ut &&
          r &&
          !Pt(e, r) &&
          !u &&
          Gt({minBookingDays: p, isDateBlocked: v, startDate: r, endDate: e}) &&
          l({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      b(Nt(k, m, -1))
    },
    goToNextMonths: function() {
      b(Nt(k, m, 1))
    },
  }
}
var Xt,
  Jt,
  qt,
  Qt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  Kt = u({}, Qt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  en = O({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  tn = O({
    prop: 'numberOfMonthsGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(' + e + ', 1fr)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  nn = s('div')(
    Xt ||
      (Xt = d(
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
          '\n  ',
          '\n',
        ],
      )),
    ve,
    ye,
    De,
    ge,
    me,
    he,
    xe,
    ke,
    be,
    ce,
    ue,
    q,
    en,
    tn,
  ),
  rn = s('div')(
    Jt ||
      (Jt = d(
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
    q,
    fe,
    de,
    pe,
    ce,
    ue,
    Ce,
    se,
    ee,
  ),
  on = s('div')(
    qt ||
      (qt = d(
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
    se,
    q,
    ee,
    Re,
    Ie,
    je,
    Ae,
    Ye,
    ze,
  )
function an(t) {
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
function sn(e) {
  void 0 === e && (e = {})
  var t = o(l)
  return r(
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
var ln,
  cn,
  un,
  dn = {
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
  pn = O({prop: 'placeholderColor', cssProperty: 'color'}),
  fn = O({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  mn = s('label')(
    ln ||
      (ln = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Re,
    Se,
    Oe,
    ie,
    He,
    q,
  ),
  gn = s('div')(
    cn ||
      (cn = d(
        [
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
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
      )),
    Re,
    je,
    Ie,
    se,
    ee,
  ),
  hn = s('input')(
    un ||
      (un = d(
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
    Oe,
    q,
    re,
    ne,
    Q,
    oe,
    q,
    Se,
    ee,
    le,
    Pe,
    fn,
    pn,
    fn,
    pn,
    fn,
    pn,
  )
function yn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.vertical,
    a = t.isActive,
    i = t.ariaLabel,
    s = t.onClick,
    l = t.value,
    c = t.showCalendarIcon,
    u = t.padding,
    d = sn({
      fontFamily: dn.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: dn.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: u,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: dn.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: o ? '8px' : '16px',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: '#BCBEC0',
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid #d0d0d0',
      inputLabelBorderRadius: '2px',
      inputLabelBackground: '#ffffff',
      inputLabelMargin: '0',
      inputActiveBoxShadow: '0px 4px 0 #00aeef',
    })
  return e.createElement(
    mn,
    {
      htmlFor: r,
      display: d.inputLabelDisplay,
      position: d.inputLabelPosition,
      border: d.inputLabelBorder,
      background: d.inputLabelBackground,
      borderRadius: d.inputLabelBorderRadius,
      m: d.inputLabelMargin,
    },
    c &&
      e.createElement(
        gn,
        {
          position: d.inputCalendarWrapperPosition,
          height: d.inputCalendarWrapperHeight,
          width: d.inputCalendarWrapperWidth,
          top: d.inputCalendarWrapperTop,
          left: d.inputCalendarWrapperLeft,
        },
        e.createElement(an, {
          width: d.inputCalendarIconWidth,
          height: d.inputCalendarIconHeight,
          color: d.inputCalendarIconColor,
        }),
      ),
    e.createElement(hn, {
      readOnly: !0,
      border: d.inputBorder,
      p: d.inputPadding,
      width: d.inputWidth,
      minHeight: d.inputMinHeight,
      background: d.inputBackground,
      fontFamily: d.fontFamily,
      color: d.inputColor,
      fontSize: d.inputFontSize,
      fontWeight: d.inputFontWeight,
      placeholderColor: d.inputPlaceholderColor,
      placeholderFontWeight: d.inputPlaceholderFontWeight,
      boxShadow: a ? d.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: n,
      'aria-label': i,
      value: l,
      autoComplete: 'off',
      onFocus: s,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function vn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    l = void 0 === s ? '' : s,
    c = (function(e) {
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
      className: l,
      transform: 'rotate(' + c + ' 0 0)',
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
var Dn,
  kn,
  bn,
  xn = s('div')(
    Dn ||
      (Dn = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    re,
    ne,
    oe,
    Q,
    ae,
    q,
  ),
  Cn = s(xn)(
    bn ||
      (bn = d(
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
        c(
          kn ||
            (kn = d(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Sn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = t.vertical,
    i = sn({
      fontFamily: dn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: dn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: dn.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    on,
    {p: i.selectDatePadding},
    e.createElement(
      xn,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Cn,
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
var wn = function(t) {
    var n = t.label,
      r = sn({
        fontFamily: dn.fontFamily,
        monthLabelColor: dn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      xn,
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
  Mn = function(t) {
    var n = t.label,
      r = sn({
        fontFamily: dn.fontFamily,
        dayLabelColor: dn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      xn,
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
  Bn = O({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Fn = O({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Tn = O({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Wn = O({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  En = O({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Hn = O({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Pn = s('button')(
    An ||
      (An = d(
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
    Bn,
    Fn,
    Pe,
    Oe,
    Q,
    re,
    oe,
    ne,
    function(e) {
      var t = e.disabled,
        n = e.isStartOrEnd
      return (
        t &&
        !n &&
        c(
          On ||
            (On = d(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabled,
        n = e.isActive,
        r = e.isStartOrEnd,
        o = e.isWithinHoverRange
      return t || n || r || o
        ? n && !r
          ? c(
              zn ||
                (zn = d(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Hn,
              Wn,
            )
          : ''
        : c(
            Rn ||
              (Rn = d(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            En,
            Tn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return c(
        In ||
          (In = d(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Ln(e, t, n, r) {
  var o = r.selectedFirstOrLast,
    a = r.normal,
    i = r.selected,
    s = r.rangeHover
  return t ? o : e ? i : n ? s : a
}
var On,
  Rn,
  zn,
  In,
  An,
  Yn = e.memo(function(t) {
    var n = t.day,
      o = t.isActive,
      a = t.isStartOrEnd,
      i = t.disabled,
      s = t.onDaySelect,
      l = t.onDayHover,
      c = t.date,
      u = t.isWithinHoverRange,
      d = sn({
        fontFamily: dn.fontFamily,
        daySize: dn.daySize,
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
      p = r(
        function() {
          return Ln(o, a, u, {
            selectedFirstOrLast: d.daySelectedFirstOrLastBorderColor,
            selected: d.daySelectedBorderColor,
            normal: d.dayBorderColor,
            rangeHover: d.dayHoverRangeColor,
          })
        },
        [o, a, d, u],
      ),
      f = r(
        function() {
          return Ln(o, a, u, {
            selectedFirstOrLast: d.daySelectedFirstOrLastBackground,
            selected: d.daySelectedBackground,
            normal: d.dayBackground,
            rangeHover: d.dayHoverRangeBackground,
          })
        },
        [o, a, d, u],
      ),
      m = r(
        function() {
          return Ln(o, a, u, {
            selectedFirstOrLast: d.daySelectedFirstOrLastColor,
            selected: d.daySelectedColor,
            normal: d.dayColor,
            rangeHover: d.dayHoverRangeColor,
          })
        },
        [o, a, d, u],
      )
    return e.createElement(
      Pn,
      {
        role: 'button',
        onClick: function() {
          return s(c)
        },
        onMouseEnter: function() {
          return l(c)
        },
        disabled: i && !u,
        isActive: o,
        isStartOrEnd: a,
        isWithinHoverRange: u,
        dayHeight: d.daySize,
        dayWidth: d.daySize,
        background: f,
        color: m,
        fontFamily: d.fontFamily,
        fontWeight: d.dayFontWeight,
        fontSize: d.dayFontSize,
        daySelectedHoverBackground: d.daySelectedHoverBackground,
        dayHoverBackground: d.dayHoverBackground,
        dayHoverColor: d.dayHoverColor,
        daySelectedHoverColor: d.daySelectedHoverColor,
        borderAccessibilityColor: d.dayAccessibilityBorderColor,
        boxShadow:
          '1px 0 0 0 ' +
          p +
          ',\n        0 1px 0 0 ' +
          p +
          ',\n        1px 1px 0 0 ' +
          p +
          ',\n        1px 0 0 0 ' +
          p +
          ' inset,\n        0 1px 0 0 ' +
          p +
          ' inset',
        'data-testid': 'Day',
      },
      e.createElement(
        rn,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        n,
      ),
    )
  }),
  jn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      s = t.isStartOrEndDate,
      l = t.onDaySelect,
      c = t.onDayHover,
      u = t.isDateHovered,
      d = Ht({year: n, month: r, weekStartsOn: o}),
      p = d.days,
      f = d.weekDays,
      m = d.monthLabel,
      g = sn({daySize: dn.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      'div',
      null,
      e.createElement(
        rn,
        {justifyContent: 'center', m: g.monthLabelMargin},
        e.createElement(wn, {label: m}),
      ),
      e.createElement(
        nn,
        {daySizeGridTemplateColumns: g.daySize},
        f.map(function(t) {
          return e.createElement(
            rn,
            {key: t, justifyContent: 'center', m: g.monthDayLabelMargin},
            e.createElement(Mn, {label: t}),
          )
        }),
      ),
      e.createElement(
        nn,
        {daySizeGridTemplateColumns: g.daySize},
        p.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Yn, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: s(t.date),
                onDaySelect: l,
                onDayHover: c,
                isWithinHoverRange: u(t.date),
              })
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
function Vn(t) {
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
}
var Nn,
  $n = s('button')(
    Nn ||
      (Nn = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function Gn(t) {
  var n = t.onResetDates,
    r = t.text,
    o = a(null),
    i = sn({
      fontFamily: dn.fontFamily,
      resetDatesIconColor: dn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: dn.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    $n,
    {
      onClick: n,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(Vn, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
    }),
    e.createElement(
      xn,
      {
        m: i.resetDatesTextMargin,
        lineHeight: i.resetDatesTextLineHeight,
        fontFamily: i.fontFamily,
        fontSize: i.resetDatesTextFontSize,
        color: i.resetDatesTextColor,
      },
      r,
    ),
  )
}
var _n,
  Un,
  Zn = s('svg')(Un || (Un = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return c(
      _n ||
        (_n = d(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Xn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    l = void 0 === s ? '' : s,
    c = (function(e) {
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
    Zn,
    {
      width: r,
      height: n,
      color: o,
      className: l,
      angle: c,
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
var Jn,
  qn = s('button')(
    Jn ||
      (Jn = d(
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
    ee,
    se,
    Oe,
    q,
    Se,
  )
function Qn(t) {
  var n = t.type,
    r = t.onClick,
    o = a(null),
    i = sn({
      navButtonWidth: '30px',
      navButtonHeight: '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: '11px',
      navButtonIconWidth: '18px',
      navButtonIconColor: dn.colors.greey,
    })
  return e.createElement(
    qn,
    {
      width: i.navButtonWidth,
      height: i.navButtonHeight,
      background: i.navButtonBackground,
      border: i.navButtonBorder,
      p: i.navButtonPadding,
      type: 'button',
      onClick: r,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(Xn, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
function Kn(t) {
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
var er,
  tr,
  nr = s('div')(
    er ||
      (er = d(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  rr = s('button')(
    tr ||
      (tr = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    nr,
  )
function or(t) {
  var n = t.onClick
  return e.createElement(
    rr,
    {onClick: n, 'data-testid': 'DatepickerClose'},
    e.createElement(Kn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(nr, null, 'Close'),
  )
}
var ar,
  ir,
  sr,
  lr = s('div')(
    ar ||
      (ar = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Oe,
    q,
    He,
    Re,
    Pe,
  ),
  cr = s('div')(
    ir ||
      (ir = d(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  ur = s(on)(sr || (sr = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), ie, ue)
function dr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    s = t.onDateChange,
    l = t.vertical,
    c = void 0 !== l && l,
    u = t.showResetDates,
    d = void 0 === u || u,
    p = t.showClose,
    f = void 0 === p || p,
    m = t.showSelectedDates,
    g = void 0 === m || m,
    h = t.exactMinBookingDays,
    y = void 0 !== h && h,
    v = t.isDayBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    k = t.minBookingDays,
    b = void 0 === k ? 1 : k,
    x = t.onClose,
    C = void 0 === x ? function() {} : x,
    S = t.numberOfMonths,
    w = t.firstDayOfWeek,
    M = t.displayFormat,
    B = void 0 === M ? 'MM/DD/YYYY' : M,
    F = t.phrases,
    T = void 0 === F ? Qt : F,
    W = Zt({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: s,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: b,
      isDayBlocked: D,
      exactMinBookingDays: y,
      numberOfMonths: S,
      firstDayOfWeek: w,
    }),
    E = W.activeMonths,
    H = W.isDateSelected,
    P = W.isFirstOrLastSelectedDate,
    L = W.isDateBlocked,
    O = W.isDateHovered,
    R = W.firstDayOfWeek,
    z = W.onDaySelect,
    I = W.onResetDates,
    A = W.goToPreviousMonths,
    Y = W.goToNextMonths,
    j = W.numberOfMonths,
    V = W.onDayHover,
    N = sn({
      datepickerBackground: '#ffffff',
      datepickerPadding: c ? '16px' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerCloseWrapperPosition: c ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: c ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: c ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: c ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: c ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: c ? '100px 50px 100px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: dn.colors.silverCloud,
      datepickerMonthsWrapperMargin: '28px 0 0',
      datepickerPreviousMonthButtonPosition: 'absolute',
      datepickerPreviousMonthButtonTop: '-5px',
      datepickerPreviousMonthButtonLeft: '0',
      datepickerPreviousMonthButtonRight: 'unset',
      datepickerPreviousMonthButtonBottom: 'unset',
      datepickerNextMonthButtonPosition: 'absolute',
      datepickerNextMonthButtonTop: '-5px',
      datepickerNextMonthButtonLeft: 'unset',
      datepickerNextMonthButtonRight: '0',
      datepickerNextMonthButtonBottom: 'unset',
      datepickerMonthsGridGap: '0 32px',
      datepickerResetDatesWrapperMargin: '32px 0 0',
      datepickerBoxShadow: 'none',
    })
  return e.createElement(
    lr,
    {
      background: N.datepickerBackground,
      p: N.datepickerPadding,
      borderRadius: N.datepickerBorderRadius,
      position: N.datepickerPosition,
      boxShadow: N.datepickerBoxShadow,
    },
    f &&
      e.createElement(
        ur,
        {
          m: N.datepickerCloseWrapperMargin,
          display: N.datepickerCloseWrapperDisplay,
          justifyContent: N.datepickerCloseWrapperJustifyContent,
          position: N.datepickerCloseWrapperPosition,
          right: N.datepickerCloseWrapperRight,
          top: N.datepickerCloseWrapperTop,
          left: N.datepickerCloseWrapperLeft,
          bottom: N.datepickerCloseWrapperBottom,
          zIndex: N.datepickerCloseWrapperZIndex,
        },
        e.createElement(or, {onClick: C}),
      ),
    g &&
      e.createElement(
        cr,
        null,
        e.createElement(
          nn,
          {gridTemplateColumns: N.datepickerSelectDateGridTemplateColumns},
          e.createElement(Sn, {
            title: T.datepickerStartDateLabel,
            date: $t(n, B, T.datepickerStartDatePlaceholder),
            isActive: i === _t,
            vertical: c,
          }),
          e.createElement(
            rn,
            {justifyContent: 'center', alignItems: 'center'},
            e.createElement(vn, {
              height: N.datepickerSelectDateArrowIconHeight,
              width: N.datepickerSelectDateArrowIconWidth,
              iconColor: N.datepickerSelectDateArrowIconColor,
            }),
          ),
          e.createElement(Sn, {
            title: T.datepickerEndDateLabel,
            date: $t(r, B, T.datepickerEndDatePlaceholder),
            isActive: i === Ut,
            vertical: c,
          }),
        ),
      ),
    e.createElement(
      on,
      {m: N.datepickerMonthsWrapperMargin, position: 'relative'},
      e.createElement(
        on,
        {
          position: N.datepickerPreviousMonthButtonPosition,
          top: N.datepickerPreviousMonthButtonTop,
          left: N.datepickerPreviousMonthButtonLeft,
          right: N.datepickerPreviousMonthButtonRight,
          bottom: N.datepickerPreviousMonthButtonBottom,
        },
        e.createElement(Qn, {type: 'prev', onClick: A}),
      ),
      e.createElement(
        on,
        {
          position: N.datepickerNextMonthButtonPosition,
          top: N.datepickerNextMonthButtonTop,
          left: N.datepickerNextMonthButtonLeft,
          right: N.datepickerNextMonthButtonRight,
          bottom: N.datepickerNextMonthButtonBottom,
        },
        e.createElement(Qn, {type: 'next', onClick: Y}),
      ),
      e.createElement(
        nn,
        {numberOfMonthsGridTemplateColumns: j, gridGap: N.datepickerMonthsGridGap},
        E.map(function(t) {
          return e.createElement(jn, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: R,
            isDateBlocked: L,
            isDateSelected: H,
            isStartOrEndDate: P,
            onDaySelect: z,
            onDayHover: V,
            isDateHovered: O,
          })
        }),
      ),
    ),
    d &&
      e.createElement(
        on,
        {m: N.datepickerResetDatesWrapperMargin},
        e.createElement(Gn, {onResetDates: I, text: T.resetDates}),
      ),
  )
}
var pr,
  fr,
  mr = s(vn)(pr || (pr = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Le, Q),
  gr = s(nn)(
    fr || (fr = d(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Oe,
    Se,
    He,
  )
function hr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    s = t.maxBookingDate,
    l = t.firstDayOfWeek,
    c = t.onFocusChange,
    u = t.numberOfMonths,
    d = t.focusedInput,
    p = t.onDateChange,
    f = t.exactMinBookingDays,
    m = t.showClose,
    g = void 0 === m || m,
    h = t.showSelectedDates,
    y = void 0 === h || h,
    v = t.showResetDates,
    D = void 0 === v || v,
    k = t.vertical,
    b = void 0 !== k && k,
    x = t.isDayBlocked,
    C =
      void 0 === x
        ? function() {
            return !1
          }
        : x,
    S = t.minBookingDays,
    w = void 0 === S ? 1 : S,
    M = t.onClose,
    B = void 0 === M ? function() {} : M,
    F = t.showStartDateCalendarIcon,
    T = void 0 === F || F,
    W = t.showEndDateCalendarIcon,
    E = void 0 === W || W,
    H = t.displayFormat,
    P = void 0 === H ? 'MM/DD/YYYY' : H,
    L = t.phrases,
    O = void 0 === L ? Kt : L,
    R = a(null),
    z = sn({
      dateRangeBackground: 'transparent',
      dateRangeGridTemplateColumns: b ? '1fr 24px 1fr' : '194px 39px 194px',
      dateRangeBorder: '0',
      dateRangeBorderRadius: '0',
      dateRangeArrowIconWidth: '15px',
      dateRangeArrowIconHeight: '12px',
      dateRangeArrowIconColor: '#ffffff',
      dateRangeArrowIconOpacity: 0.4,
      dateRangeStartDateInputPadding: b ? '0 8px 0 32px' : '0 44px',
      dateRangeEndDateInputPadding: b ? '0 8px 0 32px' : '0 44px',
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: 'unset',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: '0',
      dateRangeDatepickerWrapperPosition: 'absolute',
    })
  function I(e) {
    null !== d && R && R.current && !R.current.contains(e.target) && c(null)
  }
  return (
    i(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', I),
        function() {
          window.removeEventListener('click', I)
        }
      )
    }),
    e.createElement(
      on,
      {position: 'relative', ref: R},
      e.createElement(
        gr,
        {
          background: z.dateRangeBackground,
          gridTemplateColumns: z.dateRangeGridTemplateColumns,
          border: z.dateRangeBorder,
          borderRadius: z.dateRangeBorderRadius,
        },
        e.createElement(yn, {
          id: 'startDate',
          ariaLabel: O.startDateAriaLabel,
          placeholder: O.startDatePlaceholder,
          value: $t(n, P, ''),
          onClick: function() {
            return c(_t)
          },
          showCalendarIcon: T,
          vertical: b,
          isActive: d === _t,
          padding: z.dateRangeStartDateInputPadding,
        }),
        e.createElement(
          rn,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(mr, {
            width: z.dateRangeArrowIconWidth,
            height: z.dateRangeArrowIconHeight,
            color: z.dateRangeArrowIconColor,
            opacity: z.dateRangeArrowIconOpacity,
          }),
        ),
        e.createElement(yn, {
          id: 'endDate',
          ariaLabel: O.endDateAriaLabel,
          placeholder: O.endDatePlaceholder,
          value: $t(r, P, ''),
          onClick: function() {
            return c(n ? Ut : _t)
          },
          showCalendarIcon: E,
          vertical: b,
          isActive: d === Ut,
          padding: z.dateRangeEndDateInputPadding,
        }),
      ),
      e.createElement(
        on,
        {
          position: z.dateRangeDatepickerWrapperPosition,
          bottom: z.dateRangeDatepickerWrapperBottom,
          left: z.dateRangeDatepickerWrapperLeft,
          top: z.dateRangeDatepickerWrapperTop,
          right: z.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(dr, {
            onClose: function() {
              B(), c(null)
            },
            startDate: n,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: s,
            firstDayOfWeek: l,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: P,
            onDateChange: p,
            minBookingDays: w,
            isDayBlocked: C,
            exactMinBookingDays: f,
            showResetDates: D,
            vertical: b,
            showSelectedDates: y,
            showClose: g,
          }),
      ),
    )
  )
}
export {hr as DateRangeInput, dr as Datepicker}
