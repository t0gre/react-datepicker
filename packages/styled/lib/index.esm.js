import e, {
  useState as t,
  useCallback as n,
  useMemo as r,
  useContext as o,
  useRef as a,
  useEffect as i,
} from 'react'
import l, {ThemeContext as u, css as s} from 'styled-components'
var c = function() {
  return (c =
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
var y = m(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    l = n ? Symbol.for('react.profiler') : 60114,
    u = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    c = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    y = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case c:
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
                case u:
                  return e
                default:
                  return t
              }
          }
        case y:
        case m:
        case o:
          return t
      }
    }
  }
  function g(e) {
    return h(e) === d
  }
  ;(t.typeOf = h),
    (t.AsyncMode = c),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = s),
    (t.ContextProvider = u),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = y),
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
          (e.$$typeof === y ||
            e.$$typeof === m ||
            e.$$typeof === u ||
            e.$$typeof === s ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return g(e) || h(e) === c
    }),
    (t.isConcurrentMode = g),
    (t.isContextConsumer = function(e) {
      return h(e) === s
    }),
    (t.isContextProvider = function(e) {
      return h(e) === u
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
      return h(e) === y
    }),
    (t.isMemo = function(e) {
      return h(e) === m
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
f(y)
y.typeOf,
  y.AsyncMode,
  y.ConcurrentMode,
  y.ContextConsumer,
  y.ContextProvider,
  y.Element,
  y.ForwardRef,
  y.Fragment,
  y.Lazy,
  y.Memo,
  y.Portal,
  y.Profiler,
  y.StrictMode,
  y.Suspense,
  y.isValidElementType,
  y.isAsyncMode,
  y.isConcurrentMode,
  y.isContextConsumer,
  y.isContextProvider,
  y.isElement,
  y.isForwardRef,
  y.isFragment,
  y.isLazy,
  y.isMemo,
  y.isPortal,
  y.isProfiler,
  y.isStrictMode,
  y.isSuspense
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
    e.exports = y
  })
var g = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  b = Object.prototype.propertyIsEnumerable
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
var D = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function x() {}
function k() {}
k.resetWarningCache = x
var S = m(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== D) {
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
        checkPropTypes: k,
        resetWarningCache: x,
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
  F = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return E(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && E(e[t]) ? e[t] : null
          }, e)
    }, null)
    return E(o) ? o : n[n.length - 1]
  },
  E = function(e) {
    return null != e
  },
  T = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  O = function(e) {
    return T(e) && 0 !== e ? e + 'px' : e
  },
  z = function(e) {
    return '@media screen and (min-width: ' + O(e) + ')'
  },
  L = function(e, t) {
    return F(t, e)
  },
  B = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      l = void 0 === i ? L : i,
      u = e.scale,
      s = void 0 === u ? {} : u,
      c = r || n,
      d = function(e) {
        var t = F(e, n, o, null)
        if (!E(t)) return null
        var r,
          i = F(e.theme, a, s),
          u = function(e) {
            var t
            return E(e) ? (((t = {})[c] = l(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return u(t)
        var d = F(e.theme, 'breakpoints', C),
          p = []
        if (Array.isArray(t)) {
          p.push(u(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var m = u(t[f])
            if (m) {
              var y,
                h = z(d[f - 1])
              p.push((((y = {})[h] = m), y))
            }
          }
        } else {
          for (var g in t) {
            var v,
              b = d[g],
              D = z(b),
              x = u(t[g])
            if (b) p.push((((v = {})[D] = x), v))
            else p.unshift(x)
          }
          p.sort()
        }
        return p
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
      return t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = p({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  W = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  P = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return F(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = S.oneOfType([S.number, S.string])), t)), a
  },
  I = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  A = function(e, t) {
    if (!T(e)) return O(F(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = F(t, r)
    return T(o) ? O(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  Y = B({prop: 'margin', alias: 'm', key: 'space', transformValue: A, scale: I}),
  V = B({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: A, scale: I}),
  j = B({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: A, scale: I}),
  R = B({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: A, scale: I}),
  $ = B({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: A, scale: I}),
  G = B({prop: 'padding', alias: 'p', key: 'space', transformValue: A, scale: I}),
  N = B({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: A, scale: I}),
  _ = B({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: A, scale: I}),
  U = B({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: A, scale: I}),
  X = B({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: A, scale: I}),
  Z = W(function(e) {
    return p({}, e, {
      mt: E(e.my) ? e.my : e.mt,
      mb: E(e.my) ? e.my : e.mb,
      ml: E(e.mx) ? e.mx : e.ml,
      mr: E(e.mx) ? e.mx : e.mr,
      pt: E(e.py) ? e.py : e.pt,
      pb: E(e.py) ? e.py : e.pb,
      pl: E(e.px) ? e.px : e.pl,
      pr: E(e.px) ? e.px : e.pr,
    })
  })(H(Y, V, j, R, $, G, N, _, U, X)),
  J = H(
    B({prop: 'color', key: 'colors'}),
    B({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  q = function(e, t) {
    return !T(e) || e > 1 ? O(e) : 100 * e + '%'
  },
  Q = B({prop: 'width', key: 'widths', transformValue: q}),
  K = function(e, t) {
    return O(F(t, e))
  },
  ee = B({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: K,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  te = B({prop: 'fontFamily', key: 'fonts'}),
  ne = B({prop: 'fontWeight', key: 'fontWeights'}),
  re = B({prop: 'lineHeight', key: 'lineHeights'}),
  oe = (B({prop: 'textAlign'}),
  B({prop: 'fontStyle'}),
  B({prop: 'letterSpacing', key: 'letterSpacings', transformValue: K}),
  B({prop: 'display'})),
  ae = (B({prop: 'maxWidth', key: 'maxWidths', transformValue: K}),
  B({prop: 'minWidth', key: 'minWidths', transformValue: K}),
  B({prop: 'height', key: 'heights', transformValue: K})),
  ie = (B({prop: 'maxHeight', key: 'maxHeights', transformValue: K}),
  B({prop: 'minHeight', key: 'minHeights', transformValue: K})),
  le = (W(function(e) {
    return p({}, e, {width: e.size, height: e.size})
  })(H(Q, ae)),
  B({prop: 'verticalAlign'}),
  B({prop: 'alignItems'})),
  ue = (B({prop: 'alignContent'}), B({prop: 'justifyItems'}), B({prop: 'justifyContent'})),
  se = B({prop: 'flexWrap'}),
  ce = (B({prop: 'flexBasis', transformValue: q}), B({prop: 'flexDirection'})),
  de = B({prop: 'flex'}),
  pe = (B({prop: 'justifySelf'}),
  B({prop: 'alignSelf'}),
  B({prop: 'order'}),
  B({prop: 'gridGap', key: 'space', transformValue: K, scale: I})),
  fe = B({prop: 'gridColumnGap', key: 'space', transformValue: K, scale: I}),
  me = B({prop: 'gridRowGap', key: 'space', transformValue: K, scale: I}),
  ye = (B({prop: 'gridColumn'}), B({prop: 'gridRow'}), B({prop: 'gridAutoFlow'})),
  he = B({prop: 'gridAutoColumns'}),
  ge = B({prop: 'gridAutoRows'}),
  ve = B({prop: 'gridTemplateColumns'}),
  be = B({prop: 'gridTemplateRows'}),
  De = B({prop: 'gridTemplateAreas'}),
  xe = B({prop: 'gridArea'}),
  ke = B({prop: 'border', key: 'borders'}),
  Se = B({prop: 'borderWidth', key: 'borderWidths', transformValue: K}),
  Ce = B({prop: 'borderStyle', key: 'borderStyles'}),
  we = B({prop: 'borderColor', key: 'colors'}),
  Me = B({prop: 'borderTop', key: 'borders'}),
  Fe = B({prop: 'borderRight', key: 'borders'}),
  Ee = B({prop: 'borderBottom', key: 'borders'}),
  Te = B({prop: 'borderLeft', key: 'borders'}),
  Oe = B({prop: 'borderRadius', key: 'radii', transformValue: K}),
  ze = (H(ke, Me, Fe, Ee, Te, Se, Ce, we, Oe), B({prop: 'boxShadow', key: 'shadows'})),
  Le = B({prop: 'opacity'}),
  Be = (B({prop: 'overflow'}), B({prop: 'background'})),
  He = (B({prop: 'backgroundImage'}),
  B({prop: 'backgroundSize'}),
  B({prop: 'backgroundPosition'}),
  B({prop: 'backgroundRepeat'}),
  B({prop: 'position'})),
  We = B({prop: 'zIndex', key: 'zIndices'}),
  Pe = B({prop: 'top', transformValue: K}),
  Ie = B({prop: 'right', transformValue: K}),
  Ae = B({prop: 'bottom', transformValue: K}),
  Ye = B({prop: 'left', transformValue: K}),
  Ve = (P({key: 'buttons'}),
  P({key: 'textStyles', prop: 'textStyle'}),
  P({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  je = function(e) {
    return e instanceof Date
  },
  Re = 36e5,
  $e = /[T ]/,
  Ge = /:/,
  Ne = /^(\d{2})$/,
  _e = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  Ue = /^(\d{4})/,
  Xe = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  Ze = /^-(\d{2})$/,
  Je = /^-?(\d{3})$/,
  qe = /^-?(\d{2})-?(\d{2})$/,
  Qe = /^-?W(\d{2})$/,
  Ke = /^-?W(\d{2})-?(\d{1})$/,
  et = /^(\d{2}([.,]\d*)?)$/,
  tt = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  nt = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  rt = /([Z+-].*)$/,
  ot = /^(Z)$/,
  at = /^([+-])(\d{2})$/,
  it = /^([+-])(\d{2}):?(\d{2})$/
function lt(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var ut,
  st = function(e, t) {
    if (je(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split($e)
        if ((Ge.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = rt.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = _e[t],
          o = Xe[t]
        if ((n = Ue.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Ne.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      u = l.year,
      s = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = Ze.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = Je.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = qe.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = Qe.exec(e))
          ? lt(t, parseInt(n[1], 10) - 1)
          : (n = Ke.exec(e))
          ? lt(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, u)
    if (s) {
      var c,
        d = s.getTime(),
        p = 0
      if (
        (i.time &&
          (p = (function(e) {
            var t, n, r
            if ((t = et.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * Re
            if ((t = tt.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * Re + 6e4 * r
              )
            if ((t = nt.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * Re + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (c =
            6e4 *
            ((o = ot.exec(r))
              ? 0
              : (o = at.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = it.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var f = d + p,
          m = new Date(f)
        c = Ve(m)
        var y = new Date(f)
        y.setDate(m.getDate() + 1)
        var h = Ve(y) - Ve(m)
        h > 0 && (c += h)
      }
      return new Date(d + p + c)
    }
    return new Date(e)
  },
  ct = function(e) {
    var t = st(e)
    return t.setHours(0, 0, 0, 0), t
  },
  dt = function(e) {
    var t = st(e)
    return (
      (function(e, t) {
        var n = ct(e),
          r = ct(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = st(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  pt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = st(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  ft = function(e) {
    return pt(e, {weekStartsOn: 1})
  },
  mt = function(e) {
    var t = st(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = ft(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = ft(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  yt = function(e) {
    var t = st(e),
      n =
        ft(t).getTime() -
        (function(e) {
          var t = mt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ft(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  ht = function(e) {
    if (je(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  gt = [
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
  vt = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = gt
      .concat(t)
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
        l = ['a.m.', 'p.m.'],
        u = {
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
          u[e + 'o'] = function(t, n) {
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
        {formatters: u, formattingTokensRegExp: vt(u)}
      )
    })(),
  },
  Dt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return kt(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return kt(e.getDate(), 2)
    },
    DDD: function(e) {
      return dt(e)
    },
    DDDD: function(e) {
      return kt(dt(e), 3)
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
      return kt(yt(e), 2)
    },
    YY: function(e) {
      return kt(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return kt(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(mt(e)).substr(2)
    },
    GGGG: function(e) {
      return mt(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return kt(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return kt(Dt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return kt(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return kt(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return kt(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return kt(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return xt(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return xt(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function xt(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + kt(Math.floor(r / 60), 2) + t + kt(o, 2)
}
function kt(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var St = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = bt.format.formatters,
      i = bt.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var l = st(e)
    return ht(l)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (o = t[i[r]] || Dt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, Dt)) : (t += i[n])
            return t
          }
        })(r, a, i)(l)
      : 'Invalid Date'
  },
  Ct = function(e, t) {
    var n = st(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  wt = function(e, t, n) {
    var r = st(e),
      o = void 0 !== n ? n : 1,
      a = st(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= a; ) i.push(st(l)), l.setDate(l.getDate() + o)
    return i
  },
  Mt = function(e) {
    var t = st(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Ft = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = st(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  Et = function(e) {
    return st(e).getDay()
  },
  Tt = function(e) {
    var t = st(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Ot(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    l =
      void 0 === i
        ? function(e) {
            return St(e, 'DD')
          }
        : i,
    u = e.weekDayFormat,
    s =
      void 0 === u
        ? function(e) {
            return St(e, 'dd')
          }
        : u,
    c = e.monthLabelFormat,
    d =
      void 0 === c
        ? function(e) {
            return St(e, 'MMMM YYYY')
          }
        : c
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
                    return St(e, 'DD')
                  }
                : a,
            l = new Date(t, n),
            u = Tt(l),
            s = Et(u),
            c = Mt(l),
            d = Array.from(Array(s >= o ? s - o : o).keys()).fill(0),
            p = wt(u, c).map(function(e) {
              return {date: e, day: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, weekStartsOn: a, dayFormat: l})
      },
      [t, n, a],
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
                    return St(e, 'dd')
                  }
                : o,
            i = new Date()
          return wt(Ct(pt(i), r), Ct(Ft(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: s})
      },
      [a],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var zt = function(e, t) {
    var n = st(e),
      r = st(t)
    return n.getTime() < r.getTime()
  },
  Lt = function(e, t) {
    var n = st(e),
      r = st(t)
    return n.getTime() > r.getTime()
  },
  Bt = function(e, t, n) {
    var r = st(e).getTime(),
      o = st(t).getTime(),
      a = st(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  Ht = function(e, t) {
    var n = ct(e),
      r = ct(t)
    return n.getTime() === r.getTime()
  },
  Wt = function(e) {
    return st(e).getFullYear()
  },
  Pt = function(e) {
    return st(e).getMonth()
  },
  It = function() {
    return ct(new Date())
  },
  At = function(e, t) {
    var n = st(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = st(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function Yt(e) {
  var t = Tt(e)
  return {year: Wt(t), month: Pt(t), date: t}
}
function Vt(e, t) {
  var n = Yt(t || It()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = At(e[e.length - 1].date, 1)), e.concat([Yt(r)])
      }, o)),
    o
  )
}
function jt(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = At(r, n)), n > 0 ? e.concat([Yt(r)]) : [Yt(r)].concat(e)
  }, [])
}
function Rt(e, t, n) {
  return e && 'string' == typeof t ? St(e, t) : e && 'function' == typeof t ? t(e) : n
}
var $t = 'startDate',
  Gt = 'endDate'
function Nt(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    u = e.onDateChange,
    s = e.numberOfMonths,
    c = void 0 === s ? 2 : s,
    d = e.firstDayOfWeek,
    p = void 0 === d ? 1 : d,
    f = t(function() {
      return Vt(c, r)
    }),
    m = f[0],
    y = f[1],
    h = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && Bt(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    g = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && Ht(e, t)) || (n && Ht(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    v = n(
      function(e) {
        return (function(e, t, n, r) {
          var o = t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0) : t,
            a = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
          return !!((o && zt(e, o)) || (a && Lt(e, a)) || (r && r(e)))
        })(e, i, l)
      },
      [i, l],
    )
  return {
    firstDayOfWeek: p,
    activeMonths: m,
    isDateSelected: h,
    isStartOrEndDate: g,
    isDateBlocked: v,
    numberOfMonths: c,
    onResetDates: function() {
      u({startDate: null, endDate: null, focusedInput: $t})
    },
    onDaySelect: function(e) {
      ;(a === Gt && r && zt(e, r)) || (a === $t && o && Lt(e, o))
        ? u({endDate: null, startDate: e, focusedInput: Gt})
        : a === $t
        ? u({endDate: o, startDate: e, focusedInput: Gt})
        : a === Gt && r && !zt(e, r) && u({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      y(jt(m, c, -1))
    },
    goToNextMonths: function() {
      y(jt(m, c, 1))
    },
  }
}
var _t,
  Ut,
  Xt,
  Zt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  Jt = c({}, Zt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  qt = B({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Qt = l('div')(
    _t ||
      (_t = d(
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
    he,
    ye,
    ge,
    fe,
    pe,
    me,
    De,
    ve,
    be,
    le,
    ue,
    Z,
    qt,
  ),
  Kt = l('div')(
    Ut ||
      (Ut = d(
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
    Z,
    de,
    se,
    ce,
    le,
    ue,
    xe,
    ae,
    Q,
  ),
  en = l('div')(
    Xt ||
      (Xt = d(
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
    xe,
    ae,
    Z,
    Q,
    He,
    Pe,
    Ye,
    Ie,
    Ae,
    We,
  )
function tn(t) {
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
function nn(e) {
  void 0 === e && (e = {})
  var t = o(u)
  return r(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return c({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var rn,
  on,
  an,
  ln = {
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
  un = B({prop: 'placeholderColor', cssProperty: 'color'}),
  sn = B({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  cn = l('label')(
    rn ||
      (rn = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    He,
    ke,
    Be,
    oe,
    Oe,
    Z,
  ),
  dn = l('div')(
    on ||
      (on = d(
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
    Ye,
    Pe,
    ae,
    Q,
  ),
  pn = l('input')(
    an ||
      (an = d(
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
    Be,
    Z,
    te,
    ee,
    J,
    ne,
    Z,
    ke,
    Q,
    ie,
    sn,
    un,
    sn,
    un,
    sn,
    un,
  )
function fn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.ariaLabel,
    a = t.onClick,
    i = t.value,
    l = t.showCalendarIcon,
    u = nn({
      fontFamily: ln.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: ln.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: '0 44px',
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: ln.colors.silverCloud,
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
    cn,
    {
      htmlFor: r,
      display: u.inputLabelDisplay,
      position: u.inputLabelPosition,
      border: u.inputLabelBorder,
      background: u.inputLabelBackground,
      borderRadius: u.inputLabelBorderRadius,
      m: u.inputLabelMargin,
    },
    l &&
      e.createElement(
        dn,
        {
          position: u.inputCalendarWrapperPosition,
          height: u.inputCalendarWrapperHeight,
          width: u.inputCalendarWrapperWidth,
          top: u.inputCalendarWrapperTop,
          left: u.inputCalendarWrapperLeft,
        },
        e.createElement(tn, {
          width: u.inputCalendarIconWidth,
          height: u.inputCalendarIconHeight,
          color: u.inputCalendarIconColor,
        }),
      ),
    e.createElement(pn, {
      readOnly: !0,
      border: u.inputBorder,
      p: u.inputPadding,
      width: u.inputWidth,
      minHeight: u.inputMinHeight,
      background: u.inputBackground,
      fontFamily: u.fontFamily,
      color: u.inputColor,
      fontSize: u.inputFontSize,
      fontWeight: u.inputFontWeight,
      placeholderColor: u.inputPlaceholderColor,
      placeholderFontWeight: u.inputPlaceholderFontWeight,
      id: r,
      placeholder: n,
      'aria-label': o,
      value: i,
      autoComplete: 'off',
      onFocus: a,
    }),
  )
}
function mn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    u = void 0 === l ? '' : l,
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
      className: u,
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
var yn,
  hn,
  gn,
  vn = l('div')(
    yn ||
      (yn = d(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    te,
    ee,
    ne,
    J,
    re,
    Z,
  ),
  bn = l(vn)(
    gn ||
      (gn = d(
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
          hn ||
            (hn = d(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Dn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = nn({
      fontFamily: ln.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: ln.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: ln.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    en,
    {p: a.selectDatePadding},
    e.createElement(
      vn,
      {
        fontFamily: a.fontFamily,
        fontSize: a.selectDateLabelFontSize,
        color: a.selectDateLabelColor,
        m: a.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      bn,
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
var xn = function(t) {
    var n = t.label,
      r = nn({
        fontFamily: ln.fontFamily,
        monthLabelColor: ln.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      vn,
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
  kn = function(t) {
    var n = t.label,
      r = nn({
        fontFamily: ln.fontFamily,
        dayLabelColor: ln.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      vn,
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
  Sn = B({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Cn = B({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  wn = B({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Mn = B({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Fn = B({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  En = B({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Tn = l('button')(
    Wn ||
      (Wn = d(
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
    Sn,
    Cn,
    ze,
    Be,
    J,
    te,
    ne,
    ee,
    function(e) {
      return (
        e.disabled &&
        s(
          zn ||
            (zn = d(
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
              Bn ||
                (Bn = d(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              En,
              Mn,
            )
          : ''
        : s(
            Ln ||
              (Ln = d(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Fn,
            wn,
          )
    },
    function(e) {
      var t = e.borderAccessibility
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
function On(e, t, n) {
  var r = n.selectedFirstOrLast,
    o = n.normal,
    a = n.selected
  return t ? r : e ? a : o
}
var zn,
  Ln,
  Bn,
  Hn,
  Wn,
  Pn = e.memo(function(t) {
    var n = t.day,
      o = t.isActive,
      a = t.isStartOrEnd,
      i = t.disabled,
      l = t.onDaySelect,
      u = t.date,
      s = nn({
        fontFamily: ln.fontFamily,
        daySize: ln.daySize,
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
      c = r(
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
      Tn,
      {
        role: 'button',
        onClick: function() {
          return l(u)
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
          c +
          ',\n        0 1px 0 0 ' +
          c +
          ',\n        1px 1px 0 0 ' +
          c +
          ',\n        1px 0 0 0 ' +
          c +
          ' inset,\n        0 1px 0 0 ' +
          c +
          ' inset',
        'data-testid': 'Day',
      },
      e.createElement(
        Kt,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        n,
      ),
    )
  }),
  In = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      l = t.isStartOrEndDate,
      u = t.onDaySelect,
      s = Ot({year: n, month: r, weekStartsOn: o}),
      c = s.days,
      d = s.weekDays,
      p = s.monthLabel,
      f = nn({daySize: ln.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      'div',
      null,
      e.createElement(
        Kt,
        {justifyContent: 'center', m: f.monthLabelMargin},
        e.createElement(xn, {label: p}),
      ),
      e.createElement(
        Qt,
        {daySizeGridTemplateColumns: f.daySize},
        d.map(function(t) {
          return e.createElement(
            Kt,
            {key: t, justifyContent: 'center', m: f.monthDayLabelMargin},
            e.createElement(kn, {label: t}),
          )
        }),
      ),
      e.createElement(
        Qt,
        {daySizeGridTemplateColumns: f.daySize},
        c.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Pn, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: l(t.date),
                onDaySelect: u,
              })
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
function An(t) {
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
var Yn,
  Vn = l('button')(
    Yn ||
      (Yn = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function jn(t) {
  var n = t.onResetDates,
    r = t.text,
    o = a(null),
    i = nn({
      fontFamily: ln.fontFamily,
      resetDatesIconColor: ln.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: ln.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Vn,
    {
      onClick: n,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(An, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
    }),
    e.createElement(
      vn,
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
var Rn,
  $n,
  Gn = l('svg')($n || ($n = d(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      Rn ||
        (Rn = d(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Nn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    u = void 0 === l ? '' : l,
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
    Gn,
    {
      width: r,
      height: n,
      color: o,
      className: u,
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
var _n,
  Un = l('button')(
    _n ||
      (_n = d(
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
    Q,
    ae,
    Be,
    Z,
    ke,
  )
function Xn(t) {
  var n = t.type,
    r = t.onClick,
    o = a(null),
    i = nn({
      navButtonWidth: '30px',
      navButtonHeight: '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: '11px',
      navButtonIconWidth: '18px',
      navButtonIconColor: ln.colors.greey,
    })
  return e.createElement(
    Un,
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
    e.createElement(Nn, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
function Zn(t) {
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
var Jn,
  qn,
  Qn = l('div')(
    Jn ||
      (Jn = d(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  Kn = l('button')(
    qn ||
      (qn = d(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    Qn,
  )
function er(t) {
  var n = t.onClick
  return e.createElement(
    Kn,
    {onClick: n},
    e.createElement(Zn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(Qn, null, 'Close'),
  )
}
var tr,
  nr,
  rr = l('div')(
    tr || (tr = d(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n'])),
    Be,
    Z,
    Oe,
    He,
  ),
  or = l('div')(
    nr ||
      (nr = d(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function ar(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    l = t.onDateChange,
    u = t.onClose,
    s = void 0 === u ? function() {} : u,
    c = t.numberOfMonths,
    d = t.firstDayOfWeek,
    p = t.displayFormat,
    f = void 0 === p ? 'MM/DD/YYYY' : p,
    m = t.phrases,
    y = void 0 === m ? Zt : m,
    h = t.styles,
    g = void 0 === h ? {} : h,
    v = Nt({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: l,
      minBookingDate: o,
      maxBookingDate: a,
      numberOfMonths: c,
      firstDayOfWeek: d,
    }),
    b = v.activeMonths,
    D = v.isDateSelected,
    x = v.isStartOrEndDate,
    k = v.isDateBlocked,
    S = v.firstDayOfWeek,
    C = v.onDaySelect,
    w = v.onResetDates,
    M = v.goToPreviousMonths,
    F = v.goToNextMonths,
    E = v.numberOfMonths
  return e.createElement(
    rr,
    {background: '#ffffff', p: '32px', borderRadius: '2px', position: 'relative'},
    e.createElement(
      en,
      {position: 'absolute', right: '32px', zIndex: 1},
      e.createElement(er, {onClick: s}),
    ),
    e.createElement(
      or,
      null,
      e.createElement(
        Qt,
        {gridTemplateColumns: g.selectDateGridTemplateColumns || '126px 75px 126px'},
        e.createElement(Dn, {
          title: y.datepickerStartDateLabel,
          date: Rt(n, f, y.datepickerStartDatePlaceholder),
          isActive: i === $t,
        }),
        e.createElement(
          Kt,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(mn, {height: '12px', width: '15px', iconColor: '#929598'}),
        ),
        e.createElement(Dn, {
          title: y.datepickerEndDateLabel,
          date: Rt(r, f, y.datepickerEndDatePlaceholder),
          isActive: i === Gt,
        }),
      ),
    ),
    e.createElement(
      en,
      {mt: '28px', position: 'relative'},
      e.createElement(
        en,
        {position: 'absolute', top: '-5px', left: '0'},
        e.createElement(Xn, {type: 'prev', onClick: M}),
      ),
      e.createElement(
        en,
        {position: 'absolute', top: '-5px', right: '0'},
        e.createElement(Xn, {type: 'next', onClick: F}),
      ),
      e.createElement(
        Qt,
        {gridTemplateColumns: 'repeat(' + E + ', 1fr)', gridGap: '0 32px'},
        b.map(function(t) {
          return e.createElement(In, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: S,
            isDateBlocked: k,
            isDateSelected: D,
            isStartOrEndDate: x,
            onDaySelect: C,
          })
        }),
      ),
    ),
    e.createElement(en, {mt: '32px'}, e.createElement(jn, {onResetDates: w, text: y.resetDates})),
  )
}
var ir,
  lr,
  ur = l(mn)(ir || (ir = d(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Le, J),
  sr = l(Qt)(
    lr || (lr = d(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Be,
    ke,
    Oe,
  )
function cr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    l = t.maxBookingDate,
    u = t.firstDayOfWeek,
    s = t.onFocusChange,
    c = t.numberOfMonths,
    d = t.focusedInput,
    p = t.onDateChange,
    f = t.onClose,
    m = void 0 === f ? function() {} : f,
    y = t.showStartDateCalendarIcon,
    h = void 0 === y || y,
    g = t.showEndDateCalendarIcon,
    v = void 0 === g || g,
    b = t.styles,
    D = void 0 === b ? {} : b,
    x = t.displayFormat,
    k = void 0 === x ? 'MM/DD/YYYY' : x,
    S = t.phrases,
    C = void 0 === S ? Jt : S,
    w = a(null)
  function M(e) {
    null !== d && w && w.current && !w.current.contains(e.target) && s(null)
  }
  return (
    i(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', M),
        function() {
          window.removeEventListener('click', M)
        }
      )
    }),
    e.createElement(
      en,
      {position: 'relative', ref: w},
      e.createElement(
        sr,
        {
          background: D.inputGridBackground || 'transparent',
          gridTemplateColumns: D.inputGridTemplateColumns || '194px 39px 194px',
          border: D.inputGridBorder || '0',
          borderRadius: D.inputGridBorderRadius || '0',
        },
        e.createElement(fn, {
          id: 'startDate',
          ariaLabel: C.startDateAriaLabel,
          placeholder: C.startDatePlaceholder,
          value: Rt(n, k, ''),
          onClick: function() {
            return s($t)
          },
          showCalendarIcon: h,
        }),
        e.createElement(
          Kt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(ur, {
            width: '15px',
            height: '12px',
            color: D.inputArrowIconColor || '#ffffff',
            opacity: D.inputArrowIconOpacity || 0.4,
          }),
        ),
        e.createElement(fn, {
          id: 'endDate',
          ariaLabel: C.endDateAriaLabel,
          placeholder: C.endDatePlaceholder,
          value: Rt(r, k, ''),
          onClick: function() {
            return s(n ? Gt : $t)
          },
          showCalendarIcon: v,
        }),
      ),
      e.createElement(
        en,
        {position: 'absolute', bottom: D.datepickerBottom || '65px', left: D.datepickerLeft || '0'},
        null !== d &&
          e.createElement(ar, {
            onClose: function() {
              m(), s(null)
            },
            startDate: n,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: l,
            firstDayOfWeek: u,
            numberOfMonths: c,
            focusedInput: d,
            displayFormat: k,
            onDateChange: p,
            styles: {
              daySize: D.daySize,
              selectDateGridTemplateColumns: D.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
export {cr as DateRangeInput, ar as Datepicker}
