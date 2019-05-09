import e, {
  useState as t,
  useCallback as n,
  useMemo as r,
  useContext as o,
  useRef as a,
  useEffect as i,
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
function m(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var h = m(function(e, t) {
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
    m = n ? Symbol.for('react.memo') : 60115,
    h = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
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
        case h:
        case m:
        case o:
          return t
      }
    }
  }
  function y(e) {
    return g(e) === d
  }
  ;(t.typeOf = g),
    (t.AsyncMode = u),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = s),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = h),
    (t.Memo = m),
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
          (e.$$typeof === h ||
            e.$$typeof === m ||
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || g(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return g(e) === s
    }),
    (t.isContextProvider = function(e) {
      return g(e) === c
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return g(e) === p
    }),
    (t.isFragment = function(e) {
      return g(e) === a
    }),
    (t.isLazy = function(e) {
      return g(e) === h
    }),
    (t.isMemo = function(e) {
      return g(e) === m
    }),
    (t.isPortal = function(e) {
      return g(e) === o
    }),
    (t.isProfiler = function(e) {
      return g(e) === l
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === f
    })
})
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
  h.isSuspense
var g = m(function(e, t) {})
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
  g.isSuspense,
  m(function(e) {
    e.exports = h
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
var b = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function k() {}
function x() {}
x.resetWarningCache = k
var S = m(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== b) {
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
        resetWarningCache: k,
      }
      return (n.PropTypes = n), n
    })()
  }),
  C = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  w = S.oneOfType([S.number, S.string, S.array, S.object]),
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
  E = function(e) {
    return T(e) && 0 !== e ? e + 'px' : e
  },
  W = function(e) {
    return '@media screen and (min-width: ' + E(e) + ')'
  },
  L = function(e, t) {
    return B(t, e)
  },
  O = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  P = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = O(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  z = function(e) {
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
        var t = B(e, n, o, null)
        if (!F(t)) return null
        var r,
          i = B(e.theme, a, s),
          c = function(e) {
            var t
            return F(e) ? (((t = {})[u] = l(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return c(t)
        var d = B(e.theme, 'breakpoints', C),
          p = []
        if (Array.isArray(t)) {
          p.push(c(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var m = c(t[f])
            if (m) {
              var h,
                g = W(d[f - 1])
              p.push((((h = {})[g] = m), h))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              b = W(D),
              k = c(t[y])
            if (D) p.push((((v = {})[b] = k), v))
            else p.unshift(k)
          }
          p.sort()
        }
        return P.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = M(w)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = M(w)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  H = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return P.apply(void 0, n)
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
  R = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return B(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = S.oneOfType([S.number, S.string])), t)), a
  },
  A = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  Y = function(e, t) {
    if (!T(e)) return E(B(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = B(t, r)
    return T(o) ? E(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  V = z({prop: 'margin', alias: 'm', key: 'space', transformValue: Y, scale: A}),
  j = z({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: Y, scale: A}),
  N = z({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: Y, scale: A}),
  $ = z({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: Y, scale: A}),
  G = z({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: Y, scale: A}),
  _ = z({prop: 'padding', alias: 'p', key: 'space', transformValue: Y, scale: A}),
  U = z({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: Y, scale: A}),
  Z = z({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: Y, scale: A}),
  X = z({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: Y, scale: A}),
  J = z({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: Y, scale: A}),
  q = I(function(e) {
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
  })(H(V, j, N, $, G, _, U, Z, X, J)),
  Q = H(
    z({prop: 'color', key: 'colors'}),
    z({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  K = function(e, t) {
    return !T(e) || e > 1 ? E(e) : 100 * e + '%'
  },
  ee = z({prop: 'width', key: 'widths', transformValue: K}),
  te = function(e, t) {
    return E(B(t, e))
  },
  ne = z({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: te,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  re = z({prop: 'fontFamily', key: 'fonts'}),
  oe = z({prop: 'fontWeight', key: 'fontWeights'}),
  ae = z({prop: 'lineHeight', key: 'lineHeights'}),
  ie = (z({prop: 'textAlign'}),
  z({prop: 'fontStyle'}),
  z({prop: 'letterSpacing', key: 'letterSpacings', transformValue: te}),
  z({prop: 'display'})),
  le = (z({prop: 'maxWidth', key: 'maxWidths', transformValue: te}),
  z({prop: 'minWidth', key: 'minWidths', transformValue: te}),
  z({prop: 'height', key: 'heights', transformValue: te})),
  ce = (z({prop: 'maxHeight', key: 'maxHeights', transformValue: te}),
  z({prop: 'minHeight', key: 'minHeights', transformValue: te})),
  se = (I(function(e) {
    return p({}, e, {width: e.size, height: e.size})
  })(H(ee, le)),
  z({prop: 'verticalAlign'}),
  z({prop: 'alignItems'})),
  ue = (z({prop: 'alignContent'}), z({prop: 'justifyItems'}), z({prop: 'justifyContent'})),
  de = z({prop: 'flexWrap'}),
  pe = (z({prop: 'flexBasis', transformValue: K}), z({prop: 'flexDirection'})),
  fe = z({prop: 'flex'}),
  me = (z({prop: 'justifySelf'}),
  z({prop: 'alignSelf'}),
  z({prop: 'order'}),
  z({prop: 'gridGap', key: 'space', transformValue: te, scale: A})),
  he = z({prop: 'gridColumnGap', key: 'space', transformValue: te, scale: A}),
  ge = z({prop: 'gridRowGap', key: 'space', transformValue: te, scale: A}),
  ye = (z({prop: 'gridColumn'}), z({prop: 'gridRow'}), z({prop: 'gridAutoFlow'})),
  ve = z({prop: 'gridAutoColumns'}),
  De = z({prop: 'gridAutoRows'}),
  be = z({prop: 'gridTemplateColumns'}),
  ke = z({prop: 'gridTemplateRows'}),
  xe = z({prop: 'gridTemplateAreas'}),
  Se = z({prop: 'gridArea'}),
  Ce = z({prop: 'border', key: 'borders'}),
  we = z({prop: 'borderWidth', key: 'borderWidths', transformValue: te}),
  Me = z({prop: 'borderStyle', key: 'borderStyles'}),
  Be = z({prop: 'borderColor', key: 'colors'}),
  Fe = z({prop: 'borderTop', key: 'borders'}),
  Te = z({prop: 'borderRight', key: 'borders'}),
  Ee = z({prop: 'borderBottom', key: 'borders'}),
  We = z({prop: 'borderLeft', key: 'borders'}),
  Le = z({prop: 'borderRadius', key: 'radii', transformValue: te}),
  Oe = (H(Ce, Fe, Te, Ee, We, we, Me, Be, Le), z({prop: 'boxShadow', key: 'shadows'})),
  Pe = z({prop: 'opacity'}),
  ze = (z({prop: 'overflow'}), z({prop: 'background'})),
  He = (z({prop: 'backgroundImage'}),
  z({prop: 'backgroundSize'}),
  z({prop: 'backgroundPosition'}),
  z({prop: 'backgroundRepeat'}),
  z({prop: 'position'})),
  Ie = z({prop: 'zIndex', key: 'zIndices'}),
  Re = z({prop: 'top', transformValue: te}),
  Ae = z({prop: 'right', transformValue: te}),
  Ye = z({prop: 'bottom', transformValue: te}),
  Ve = z({prop: 'left', transformValue: te}),
  je = (R({key: 'buttons'}),
  R({key: 'textStyles', prop: 'textStyle'}),
  R({key: 'colorStyles', prop: 'colors'}),
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
  lt = /^([+-])(\d{2})$/,
  ct = /^([+-])(\d{2}):?(\d{2})$/
function st(e, t, n) {
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
      l = (function(e, t) {
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
      c = l.year,
      s = (function(e, t) {
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
          ? st(t, parseInt(n[1], 10) - 1)
          : (n = tt.exec(e))
          ? st(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
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
              : (o = lt.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = ct.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var f = d + p,
          m = new Date(f)
        u = je(m)
        var h = new Date(f)
        h.setDate(m.getDate() + 1)
        var g = je(h) - je(m)
        g > 0 && (u += g)
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
  ht = function(e) {
    return mt(e, {weekStartsOn: 1})
  },
  gt = function(e) {
    var t = dt(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = ht(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = ht(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  yt = function(e) {
    var t = dt(e),
      n =
        ht(t).getTime() -
        (function(e) {
          var t = gt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ht(n)
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
  bt = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = Dt.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  kt = {
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
        {formatters: c, formattingTokensRegExp: bt(c)}
      )
    })(),
  },
  xt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return Ct(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return Ct(e.getDate(), 2)
    },
    DDD: function(e) {
      return ft(e)
    },
    DDDD: function(e) {
      return Ct(ft(e), 3)
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
      return Ct(yt(e), 2)
    },
    YY: function(e) {
      return Ct(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return Ct(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(gt(e)).substr(2)
    },
    GGGG: function(e) {
      return gt(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return Ct(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return Ct(xt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return Ct(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return Ct(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return Ct(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return Ct(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return St(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return St(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function St(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + Ct(Math.floor(r / 60), 2) + t + Ct(o, 2)
}
function Ct(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var wt = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = kt.format.formatters,
      i = kt.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var l = dt(e)
    return vt(l)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (o = t[i[r]] || xt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, xt)) : (t += i[n])
            return t
          }
        })(r, a, i)(l)
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
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= a; ) i.push(dt(l)), l.setDate(l.getDate() + o)
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
  Et = function(e) {
    return dt(e).getDay()
  },
  Wt = function(e) {
    var t = dt(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Lt(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    l =
      void 0 === i
        ? function(e) {
            return wt(e, 'DD')
          }
        : i,
    c = e.weekDayFormat,
    s =
      void 0 === c
        ? function(e) {
            return wt(e, 'dd')
          }
        : c,
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
            l = new Date(t, n),
            c = Wt(l),
            s = Et(c),
            u = Ft(l),
            d = Array.from(Array(s >= o ? s - o : o).keys()).fill(0),
            p = Bt(c, u).map(function(e) {
              return {date: e, day: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, weekStartsOn: a, dayFormat: l})
      },
      [t, n, a, l],
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
        })({weekStartsOn: a, weekDayFormat: s})
      },
      [a, s],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var Ot = function(e, t) {
    var n = dt(e),
      r = dt(t)
    return n.getTime() < r.getTime()
  },
  Pt = function(e, t) {
    var n = dt(e),
      r = dt(t)
    return n.getTime() > r.getTime()
  },
  zt = function(e, t, n) {
    var r = dt(e).getTime(),
      o = dt(t).getTime(),
      a = dt(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  Ht = function(e, t) {
    var n = pt(e),
      r = pt(t)
    return n.getTime() === r.getTime()
  },
  It = function(e) {
    return dt(e).getFullYear()
  },
  Rt = function(e) {
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
function Vt(e) {
  var t = Wt(e)
  return {year: It(t), month: Rt(t), date: t}
}
function jt(e, t) {
  var n = Vt(t || At()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = Yt(e[e.length - 1].date, 1)), e.concat([Vt(r)])
      }, o)),
    o
  )
}
function Nt(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = Yt(r, n)), n > 0 ? e.concat([Vt(r)]) : [Vt(r)].concat(e)
  }, [])
}
function $t(e, t, n) {
  return e && 'string' == typeof t ? wt(e, t) : e && 'function' == typeof t ? t(e) : n
}
var Gt = 'startDate',
  _t = 'endDate'
function Ut(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = e.onDateChange,
    s = e.minBookingDays,
    u = void 0 === s ? 1 : s,
    d = e.numberOfMonths,
    p = void 0 === d ? 2 : d,
    f = e.firstDayOfWeek,
    m = void 0 === f ? 1 : f,
    h = t(function() {
      return jt(p, r)
    }),
    g = h[0],
    y = h[1],
    v = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && zt(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    D = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && Ht(e, t)) || (n && Ht(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    b = n(
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
            (s && Ot(t, s)) ||
            (u && Pt(t, u)) ||
            (a && !i && c > 1 && zt(t, a, Mt(a, c - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: i,
          maxBookingDate: l,
          startDate: r,
          endDate: o,
          minBookingDays: u,
        })
      },
      [i, l, r, o, u],
    )
  return {
    firstDayOfWeek: m,
    activeMonths: g,
    isDateSelected: v,
    isFirstOrLastSelectedDate: D,
    isDateBlocked: b,
    numberOfMonths: p,
    onResetDates: function() {
      c({startDate: null, endDate: null, focusedInput: Gt})
    },
    onDaySelect: function(e) {
      ;(a === _t && r && Ot(e, r)) || (a === Gt && o && Pt(e, o))
        ? c({endDate: null, startDate: e, focusedInput: _t})
        : a === Gt
        ? c({endDate: o, startDate: e, focusedInput: _t})
        : a === _t && r && !Ot(e, r) && c({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      y(Nt(g, p, -1))
    },
    goToNextMonths: function() {
      y(Nt(g, p, 1))
    },
  }
}
var Zt,
  Xt,
  Jt,
  qt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  Qt = u({}, qt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Kt = z({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  en = z({
    prop: 'numberOfMonthsGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(' + e + ', 1fr)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  tn = l('div')(
    Zt ||
      (Zt = d(
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
    he,
    me,
    ge,
    xe,
    be,
    ke,
    se,
    ue,
    q,
    Kt,
    en,
  ),
  nn = l('div')(
    Xt ||
      (Xt = d(
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
    se,
    ue,
    Se,
    le,
    ee,
  ),
  rn = l('div')(
    Jt ||
      (Jt = d(
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
    Se,
    le,
    q,
    ee,
    He,
    Re,
    Ve,
    Ae,
    Ye,
    Ie,
  )
function on(t) {
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
function an(e) {
  void 0 === e && (e = {})
  var t = o(c)
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
  sn,
  un = {
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
  dn = z({prop: 'placeholderColor', cssProperty: 'color'}),
  pn = z({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  fn = l('label')(
    ln ||
      (ln = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    He,
    Ce,
    ze,
    ie,
    Le,
    q,
  ),
  mn = l('div')(
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
    He,
    Ve,
    Re,
    le,
    ee,
  ),
  hn = l('input')(
    sn ||
      (sn = d(
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
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
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
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
        ],
      )),
    ze,
    q,
    re,
    ne,
    Q,
    oe,
    q,
    Ce,
    ee,
    ce,
    pn,
    dn,
    pn,
    dn,
    pn,
    dn,
  )
function gn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.ariaLabel,
    a = t.onClick,
    i = t.value,
    l = t.showCalendarIcon,
    c = an({
      fontFamily: un.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: un.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: '0 44px',
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: un.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: '16px',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: '#BCBEC0',
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid #d0d0d0',
      inputLabelBorderRadius: '2px',
      inputLabelBackground: '#ffffff',
      inputLabelMargin: '0',
    })
  return e.createElement(
    fn,
    {
      htmlFor: r,
      display: c.inputLabelDisplay,
      position: c.inputLabelPosition,
      border: c.inputLabelBorder,
      background: c.inputLabelBackground,
      borderRadius: c.inputLabelBorderRadius,
      m: c.inputLabelMargin,
    },
    l &&
      e.createElement(
        mn,
        {
          position: c.inputCalendarWrapperPosition,
          height: c.inputCalendarWrapperHeight,
          width: c.inputCalendarWrapperWidth,
          top: c.inputCalendarWrapperTop,
          left: c.inputCalendarWrapperLeft,
        },
        e.createElement(on, {
          width: c.inputCalendarIconWidth,
          height: c.inputCalendarIconHeight,
          color: c.inputCalendarIconColor,
        }),
      ),
    e.createElement(hn, {
      readOnly: !0,
      border: c.inputBorder,
      p: c.inputPadding,
      width: c.inputWidth,
      minHeight: c.inputMinHeight,
      background: c.inputBackground,
      fontFamily: c.fontFamily,
      color: c.inputColor,
      fontSize: c.inputFontSize,
      fontWeight: c.inputFontWeight,
      placeholderColor: c.inputPlaceholderColor,
      placeholderFontWeight: c.inputPlaceholderFontWeight,
      id: r,
      placeholder: n,
      'aria-label': o,
      value: i,
      autoComplete: 'off',
      onFocus: a,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function yn(t) {
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
var vn,
  Dn,
  bn,
  kn = l('div')(
    vn ||
      (vn = d(
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
  xn = l(kn)(
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
        s(
          Dn ||
            (Dn = d(
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
    a = an({
      fontFamily: un.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: un.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: un.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    rn,
    {p: a.selectDatePadding},
    e.createElement(
      kn,
      {
        fontFamily: a.fontFamily,
        fontSize: a.selectDateLabelFontSize,
        color: a.selectDateLabelColor,
        m: a.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      xn,
      {
        as: 'span',
        color: a.selectDateDateColor,
        fontSize: a.selectDateDateFontSize,
        fontWeight: a.selectDateDateFontWeight,
        fontFamily: a.fontFamily,
        p: a.selectDateDatePadding,
        isActive: r,
      },
      o,
    ),
  )
}
var Cn = function(t) {
    var n = t.label,
      r = an({
        fontFamily: un.fontFamily,
        monthLabelColor: un.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      kn,
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
  wn = function(t) {
    var n = t.label,
      r = an({
        fontFamily: un.fontFamily,
        dayLabelColor: un.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      kn,
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
  Mn = z({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Bn = z({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Fn = z({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Tn = z({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  En = z({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Wn = z({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Ln = l('button')(
    Rn ||
      (Rn = d(
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
    Mn,
    Bn,
    Oe,
    ze,
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
        s(
          Pn ||
            (Pn = d(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabled,
        n = e.isActive,
        r = e.isStartOrEnd
      return t || n || r
        ? n && !r
          ? s(
              Hn ||
                (Hn = d(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Wn,
              Tn,
            )
          : ''
        : s(
            zn ||
              (zn = d(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            En,
            Fn,
          )
    },
    function(e) {
      var t = e.borderAccessibility
      return s(
        In ||
          (In = d(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function On(e, t, n) {
  var r = n.selectedFirstOrLast,
    o = n.normal,
    a = n.selected
  return t ? r : e ? a : o
}
var Pn,
  zn,
  Hn,
  In,
  Rn,
  An = e.memo(function(t) {
    var n = t.day,
      o = t.isActive,
      a = t.isStartOrEnd,
      i = t.disabled,
      l = t.onDaySelect,
      c = t.date,
      s = an({
        fontFamily: un.fontFamily,
        daySize: un.daySize,
        dayFontWeight: 500,
        dayFontSize: '14px',
        dayColor: '#58595b',
        dayHoverColor: '#58595b',
        daySelectedColor: '#ffffff',
        daySelectedHoverColor: '#ffffff',
        daySelectedFirstOrLastColor: '#ffffff',
        dayBackground: '#ffffff',
        dayHoverBackground: '#e6e7e8',
        daySelectedBackground: '#71c9ed',
        daySelectedHoverBackground: '#39beef',
        daySelectedFirstOrLastBackground: '#00aeef',
        dayBorderColor: '#e6e7e8',
        dayBorderSelectedColor: '#71c9ed',
        dayBorderSelectedFirstOrLastColor: '#00aeef',
        dayBorderAccessibility: '#009fef',
      }),
      u = r(
        function() {
          return On(o, a, {
            selectedFirstOrLast: s.dayBorderSelectedFirstOrLastColor,
            selected: s.dayBorderSelectedColor,
            normal: s.dayBorderColor,
          })
        },
        [o, a, s],
      ),
      d = r(
        function() {
          return On(o, a, {
            selectedFirstOrLast: s.daySelectedFirstOrLastBackground,
            selected: s.daySelectedBackground,
            normal: s.dayBackground,
          })
        },
        [o, a, s],
      ),
      p = r(
        function() {
          return On(o, a, {
            selectedFirstOrLast: s.daySelectedFirstOrLastColor,
            selected: s.daySelectedColor,
            normal: s.dayColor,
          })
        },
        [o, a, s],
      )
    return e.createElement(
      Ln,
      {
        role: 'button',
        onClick: function() {
          return l(c)
        },
        disabled: i,
        isActive: o,
        isStartOrEnd: a,
        dayHeight: s.daySize,
        dayWidth: s.daySize,
        background: d,
        color: p,
        fontFamily: s.fontFamily,
        fontWeight: s.dayFontWeight,
        fontSize: s.dayFontSize,
        daySelectedHoverBackground: s.daySelectedHoverBackground,
        dayHoverBackground: s.dayHoverBackground,
        dayHoverColor: s.dayHoverColor,
        daySelectedHoverColor: s.daySelectedHoverColor,
        borderAccessibility: s.dayBorderAccessibility,
        boxShadow:
          '1px 0 0 0 ' +
          u +
          ',\n        0 1px 0 0 ' +
          u +
          ',\n        1px 1px 0 0 ' +
          u +
          ',\n        1px 0 0 0 ' +
          u +
          ' inset,\n        0 1px 0 0 ' +
          u +
          ' inset',
        'data-testid': 'Day',
      },
      e.createElement(
        nn,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        n,
      ),
    )
  }),
  Yn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      l = t.isStartOrEndDate,
      c = t.onDaySelect,
      s = Lt({year: n, month: r, weekStartsOn: o}),
      u = s.days,
      d = s.weekDays,
      p = s.monthLabel,
      f = an({daySize: un.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      'div',
      null,
      e.createElement(
        nn,
        {justifyContent: 'center', m: f.monthLabelMargin},
        e.createElement(Cn, {label: p}),
      ),
      e.createElement(
        tn,
        {daySizeGridTemplateColumns: f.daySize},
        d.map(function(t) {
          return e.createElement(
            nn,
            {key: t, justifyContent: 'center', m: f.monthDayLabelMargin},
            e.createElement(wn, {label: t}),
          )
        }),
      ),
      e.createElement(
        tn,
        {daySizeGridTemplateColumns: f.daySize},
        u.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(An, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: l(t.date),
                onDaySelect: c,
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
var jn,
  Nn = l('button')(
    jn ||
      (jn = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function $n(t) {
  var n = t.onResetDates,
    r = t.text,
    o = a(null),
    i = an({
      fontFamily: un.fontFamily,
      resetDatesIconColor: un.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: un.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Nn,
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
      kn,
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
var Gn,
  _n,
  Un = l('svg')(_n || (_n = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      Gn ||
        (Gn = d(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Zn(t) {
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
    Un,
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
var Xn,
  Jn = l('button')(
    Xn ||
      (Xn = d(
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
    le,
    ze,
    q,
    Ce,
  )
function qn(t) {
  var n = t.type,
    r = t.onClick,
    o = a(null),
    i = an({
      navButtonWidth: '30px',
      navButtonHeight: '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: '11px',
      navButtonIconWidth: '18px',
      navButtonIconColor: un.colors.greey,
    })
  return e.createElement(
    Jn,
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
    e.createElement(Zn, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
function Qn(t) {
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
var Kn,
  er,
  tr = l('div')(
    Kn ||
      (Kn = d(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  nr = l('button')(
    er ||
      (er = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    tr,
  )
function rr(t) {
  var n = t.onClick
  return e.createElement(
    nr,
    {onClick: n, 'data-testid': 'DatepickerClose'},
    e.createElement(Qn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(tr, null, 'Close'),
  )
}
var or,
  ar,
  ir = l('div')(
    or ||
      (or = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    ze,
    q,
    Le,
    He,
    Oe,
  ),
  lr = l('div')(
    ar ||
      (ar = d(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function cr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    l = t.onDateChange,
    c = t.minBookingDays,
    s = void 0 === c ? 1 : c,
    u = t.onClose,
    d = void 0 === u ? function() {} : u,
    p = t.numberOfMonths,
    f = t.firstDayOfWeek,
    m = t.displayFormat,
    h = void 0 === m ? 'MM/DD/YYYY' : m,
    g = t.phrases,
    y = void 0 === g ? qt : g,
    v = Ut({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: l,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: s,
      numberOfMonths: p,
      firstDayOfWeek: f,
    }),
    D = v.activeMonths,
    b = v.isDateSelected,
    k = v.isFirstOrLastSelectedDate,
    x = v.isDateBlocked,
    S = v.firstDayOfWeek,
    C = v.onDaySelect,
    w = v.onResetDates,
    M = v.goToPreviousMonths,
    B = v.goToNextMonths,
    F = v.numberOfMonths,
    T = an({
      datepickerBackground: '#ffffff',
      datepickerPadding: '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerCloseWrapperPosition: 'absolute',
      datepickerCloseWrapperRight: '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: un.colors.silverCloud,
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
    ir,
    {
      background: T.datepickerBackground,
      p: T.datepickerPadding,
      borderRadius: T.datepickerBorderRadius,
      position: T.datepickerPosition,
      boxShadow: T.datepickerBoxShadow,
    },
    e.createElement(
      rn,
      {
        position: T.datepickerCloseWrapperPosition,
        right: T.datepickerCloseWrapperRight,
        top: T.datepickerCloseWrapperTop,
        left: T.datepickerCloseWrapperLeft,
        bottom: T.datepickerCloseWrapperBottom,
        zIndex: T.datepickerCloseWrapperZIndex,
      },
      e.createElement(rr, {onClick: d}),
    ),
    e.createElement(
      lr,
      null,
      e.createElement(
        tn,
        {gridTemplateColumns: T.datepickerSelectDateGridTemplateColumns},
        e.createElement(Sn, {
          title: y.datepickerStartDateLabel,
          date: $t(n, h, y.datepickerStartDatePlaceholder),
          isActive: i === Gt,
        }),
        e.createElement(
          nn,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(yn, {
            height: T.datepickerSelectDateArrowIconHeight,
            width: T.datepickerSelectDateArrowIconWidth,
            iconColor: T.datepickerSelectDateArrowIconColor,
          }),
        ),
        e.createElement(Sn, {
          title: y.datepickerEndDateLabel,
          date: $t(r, h, y.datepickerEndDatePlaceholder),
          isActive: i === _t,
        }),
      ),
    ),
    e.createElement(
      rn,
      {m: T.datepickerMonthsWrapperMargin, position: 'relative'},
      e.createElement(
        rn,
        {
          position: T.datepickerPreviousMonthButtonPosition,
          top: T.datepickerPreviousMonthButtonTop,
          left: T.datepickerPreviousMonthButtonLeft,
          right: T.datepickerPreviousMonthButtonRight,
          bottom: T.datepickerPreviousMonthButtonBottom,
        },
        e.createElement(qn, {type: 'prev', onClick: M}),
      ),
      e.createElement(
        rn,
        {
          position: T.datepickerNextMonthButtonPosition,
          top: T.datepickerNextMonthButtonTop,
          left: T.datepickerNextMonthButtonLeft,
          right: T.datepickerNextMonthButtonRight,
          bottom: T.datepickerNextMonthButtonBottom,
        },
        e.createElement(qn, {type: 'next', onClick: B}),
      ),
      e.createElement(
        tn,
        {numberOfMonthsGridTemplateColumns: F, gridGap: T.datepickerMonthsGridGap},
        D.map(function(t) {
          return e.createElement(Yn, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: S,
            isDateBlocked: x,
            isDateSelected: b,
            isStartOrEndDate: k,
            onDaySelect: C,
          })
        }),
      ),
    ),
    e.createElement(
      rn,
      {m: T.datepickerResetDatesWrapperMargin},
      e.createElement($n, {onResetDates: w, text: y.resetDates}),
    ),
  )
}
var sr,
  ur,
  dr = l(yn)(sr || (sr = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pe, Q),
  pr = l(tn)(
    ur || (ur = d(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    ze,
    Ce,
    Le,
  )
function fr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    l = t.maxBookingDate,
    c = t.firstDayOfWeek,
    s = t.onFocusChange,
    u = t.numberOfMonths,
    d = t.focusedInput,
    p = t.onDateChange,
    f = t.minBookingDays,
    m = void 0 === f ? 1 : f,
    h = t.onClose,
    g = void 0 === h ? function() {} : h,
    y = t.showStartDateCalendarIcon,
    v = void 0 === y || y,
    D = t.showEndDateCalendarIcon,
    b = void 0 === D || D,
    k = t.displayFormat,
    x = void 0 === k ? 'MM/DD/YYYY' : k,
    S = t.phrases,
    C = void 0 === S ? Qt : S,
    w = a(null),
    M = an({
      dateRangeBackground: 'transparent',
      dateRangeGridTemplateColumns: '194px 39px 194px',
      dateRangeBorder: '0',
      dateRangeBorderRadius: '0',
      dateRangeArrowIconWidth: '15px',
      dateRangeArrowIconHeight: '12px',
      dateRangeArrowIconColor: '#ffffff',
      dateRangeArrowIconOpacity: 0.4,
      dateRangeDatepickerWrapperTop: 'unset',
      dateRangeDatepickerWrapperRight: 'unset',
      dateRangeDatepickerWrapperBottom: '65px',
      dateRangeDatepickerWrapperLeft: '0',
      dateRangeDatepickerWrapperPosition: 'absolute',
    })
  function B(e) {
    null !== d && w && w.current && !w.current.contains(e.target) && s(null)
  }
  return (
    i(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', B),
        function() {
          window.removeEventListener('click', B)
        }
      )
    }),
    e.createElement(
      rn,
      {position: 'relative', ref: w},
      e.createElement(
        pr,
        {
          background: M.dateRangeBackground,
          gridTemplateColumns: M.dateRangeGridTemplateColumns,
          border: M.dateRangeBorder,
          borderRadius: M.dateRangeBorderRadius,
        },
        e.createElement(gn, {
          id: 'startDate',
          ariaLabel: C.startDateAriaLabel,
          placeholder: C.startDatePlaceholder,
          value: $t(n, x, ''),
          onClick: function() {
            return s(Gt)
          },
          showCalendarIcon: v,
        }),
        e.createElement(
          nn,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(dr, {
            width: M.dateRangeArrowIconWidth,
            height: M.dateRangeArrowIconHeight,
            color: M.dateRangeArrowIconColor,
            opacity: M.dateRangeArrowIconOpacity,
          }),
        ),
        e.createElement(gn, {
          id: 'endDate',
          ariaLabel: C.endDateAriaLabel,
          placeholder: C.endDatePlaceholder,
          value: $t(r, x, ''),
          onClick: function() {
            return s(n ? _t : Gt)
          },
          showCalendarIcon: b,
        }),
      ),
      e.createElement(
        rn,
        {
          position: M.dateRangeDatepickerWrapperPosition,
          bottom: M.dateRangeDatepickerWrapperBottom,
          left: M.dateRangeDatepickerWrapperLeft,
          top: M.dateRangeDatepickerWrapperTop,
          right: M.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(cr, {
            onClose: function() {
              g(), s(null)
            },
            startDate: n,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: l,
            firstDayOfWeek: c,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: x,
            onDateChange: p,
            minBookingDays: m,
          }),
      ),
    )
  )
}
export {fr as DateRangeInput, cr as Datepicker}
