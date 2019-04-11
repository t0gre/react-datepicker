import e, {
  useState as t,
  useCallback as n,
  useMemo as r,
  useContext as o,
  useRef as a,
  useEffect as i,
} from 'react'
import u, {ThemeContext as s, css as l} from 'styled-components'
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
function p(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function f() {
  return (f =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function d(e) {
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
    u = n ? Symbol.for('react.profiler') : 60114,
    s = n ? Symbol.for('react.provider') : 60109,
    l = n ? Symbol.for('react.context') : 60110,
    c = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    f = n ? Symbol.for('react.forward_ref') : 60112,
    d = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    h = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case c:
            case p:
            case a:
            case u:
            case i:
            case d:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case l:
                case f:
                case s:
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
    return g(e) === p
  }
  ;(t.typeOf = g),
    (t.AsyncMode = c),
    (t.ConcurrentMode = p),
    (t.ContextConsumer = l),
    (t.ContextProvider = s),
    (t.Element = r),
    (t.ForwardRef = f),
    (t.Fragment = a),
    (t.Lazy = h),
    (t.Memo = m),
    (t.Portal = o),
    (t.Profiler = u),
    (t.StrictMode = i),
    (t.Suspense = d),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === p ||
        e === u ||
        e === i ||
        e === d ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === h ||
            e.$$typeof === m ||
            e.$$typeof === s ||
            e.$$typeof === l ||
            e.$$typeof === f))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || g(e) === c
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return g(e) === l
    }),
    (t.isContextProvider = function(e) {
      return g(e) === s
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return g(e) === f
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
      return g(e) === u
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === d
    })
})
d(h)
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
d(g)
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
function w() {}
w.resetWarningCache = x
var k = m(function(e) {
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
        checkPropTypes: w,
        resetWarningCache: x,
      }
      return (n.PropTypes = n), n
    })()
  }),
  S = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  M = k.oneOfType([k.number, k.string, k.array, k.object]),
  C = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  E = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return T(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && T(e[t]) ? e[t] : null
          }, e)
    }, null)
    return T(o) ? o : n[n.length - 1]
  },
  T = function(e) {
    return null != e
  },
  F = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  O = function(e) {
    return F(e) && 0 !== e ? e + 'px' : e
  },
  z = function(e) {
    return '@media screen and (min-width: ' + O(e) + ')'
  },
  P = function(e, t) {
    return E(t, e)
  },
  I = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      u = void 0 === i ? P : i,
      s = e.scale,
      l = void 0 === s ? {} : s,
      c = r || n,
      p = function(e) {
        var t = E(e, n, o, null)
        if (!T(t)) return null
        var r,
          i = E(e.theme, a, l),
          s = function(e) {
            var t
            return T(e) ? (((t = {})[c] = u(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return s(t)
        var p = E(e.theme, 'breakpoints', S),
          f = []
        if (Array.isArray(t)) {
          f.push(s(t[0]))
          for (var d = 1; d < t.slice(0, p.length + 1).length; d++) {
            var m = s(t[d])
            if (m) {
              var h,
                g = z(p[d - 1])
              f.push((((h = {})[g] = m), h))
            }
          }
        } else {
          for (var y in t) {
            var v,
              b = p[y],
              D = z(b),
              x = s(t[y])
            if (b) f.push((((v = {})[D] = x), v))
            else f.unshift(x)
          }
          f.sort()
        }
        return f
      }
    return (
      ((p.propTypes = (((t = {})[n] = C(M)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((p.propTypes[o] = C(M)), (p.propTypes[o].meta = {prop: o, themeKey: a})),
      p
    )
  },
  B = function() {
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
        r.propTypes = f({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  H = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  L = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return E(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = k.oneOfType([k.number, k.string])), t)), a
  },
  Y = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  W = function(e, t) {
    if (!F(e)) return O(E(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = E(t, r)
    return F(o) ? O(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  A = I({prop: 'margin', alias: 'm', key: 'space', transformValue: W, scale: Y}),
  j = I({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: W, scale: Y}),
  V = I({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: W, scale: Y}),
  R = I({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: W, scale: Y}),
  $ = I({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: W, scale: Y}),
  N = I({prop: 'padding', alias: 'p', key: 'space', transformValue: W, scale: Y}),
  G = I({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: W, scale: Y}),
  _ = I({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: W, scale: Y}),
  U = I({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: W, scale: Y}),
  X = I({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: W, scale: Y}),
  Z = H(function(e) {
    return f({}, e, {
      mt: T(e.my) ? e.my : e.mt,
      mb: T(e.my) ? e.my : e.mb,
      ml: T(e.mx) ? e.mx : e.ml,
      mr: T(e.mx) ? e.mx : e.mr,
      pt: T(e.py) ? e.py : e.pt,
      pb: T(e.py) ? e.py : e.pb,
      pl: T(e.px) ? e.px : e.pl,
      pr: T(e.px) ? e.px : e.pr,
    })
  })(B(A, j, V, R, $, N, G, _, U, X)),
  J = B(
    I({prop: 'color', key: 'colors'}),
    I({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  q = function(e, t) {
    return !F(e) || e > 1 ? O(e) : 100 * e + '%'
  },
  Q = I({prop: 'width', key: 'widths', transformValue: q}),
  K = function(e, t) {
    return O(E(t, e))
  },
  ee = I({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: K,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  te = I({prop: 'fontFamily', key: 'fonts'}),
  ne = I({prop: 'fontWeight', key: 'fontWeights'}),
  re = I({prop: 'lineHeight', key: 'lineHeights'}),
  oe = (I({prop: 'textAlign'}),
  I({prop: 'fontStyle'}),
  I({prop: 'letterSpacing', key: 'letterSpacings', transformValue: K}),
  I({prop: 'display'})),
  ae = (I({prop: 'maxWidth', key: 'maxWidths', transformValue: K}),
  I({prop: 'minWidth', key: 'minWidths', transformValue: K}),
  I({prop: 'height', key: 'heights', transformValue: K})),
  ie = (I({prop: 'maxHeight', key: 'maxHeights', transformValue: K}),
  I({prop: 'minHeight', key: 'minHeights', transformValue: K})),
  ue = (H(function(e) {
    return f({}, e, {width: e.size, height: e.size})
  })(B(Q, ae)),
  I({prop: 'verticalAlign'}),
  I({prop: 'alignItems'})),
  se = (I({prop: 'alignContent'}), I({prop: 'justifyItems'}), I({prop: 'justifyContent'})),
  le = I({prop: 'flexWrap'}),
  ce = (I({prop: 'flexBasis', transformValue: q}), I({prop: 'flexDirection'})),
  pe = I({prop: 'flex'}),
  fe = (I({prop: 'justifySelf'}),
  I({prop: 'alignSelf'}),
  I({prop: 'order'}),
  I({prop: 'gridGap', key: 'space', transformValue: K, scale: Y})),
  de = I({prop: 'gridColumnGap', key: 'space', transformValue: K, scale: Y}),
  me = I({prop: 'gridRowGap', key: 'space', transformValue: K, scale: Y}),
  he = (I({prop: 'gridColumn'}), I({prop: 'gridRow'}), I({prop: 'gridAutoFlow'})),
  ge = I({prop: 'gridAutoColumns'}),
  ye = I({prop: 'gridAutoRows'}),
  ve = I({prop: 'gridTemplateColumns'}),
  be = I({prop: 'gridTemplateRows'}),
  De = I({prop: 'gridTemplateAreas'}),
  xe = I({prop: 'gridArea'}),
  we = I({prop: 'border', key: 'borders'}),
  ke = I({prop: 'borderWidth', key: 'borderWidths', transformValue: K}),
  Se = I({prop: 'borderStyle', key: 'borderStyles'}),
  Me = I({prop: 'borderColor', key: 'colors'}),
  Ce = I({prop: 'borderTop', key: 'borders'}),
  Ee = I({prop: 'borderRight', key: 'borders'}),
  Te = I({prop: 'borderBottom', key: 'borders'}),
  Fe = I({prop: 'borderLeft', key: 'borders'}),
  Oe = I({prop: 'borderRadius', key: 'radii', transformValue: K}),
  ze = (B(we, Ce, Ee, Te, Fe, ke, Se, Me, Oe), I({prop: 'boxShadow', key: 'shadows'})),
  Pe = I({prop: 'opacity'}),
  Ie = (I({prop: 'overflow'}), I({prop: 'background'})),
  Be = (I({prop: 'backgroundImage'}),
  I({prop: 'backgroundSize'}),
  I({prop: 'backgroundPosition'}),
  I({prop: 'backgroundRepeat'}),
  I({prop: 'position'})),
  He = I({prop: 'zIndex', key: 'zIndices'}),
  Le = I({prop: 'top', transformValue: K}),
  Ye = I({prop: 'right', transformValue: K}),
  We = I({prop: 'bottom', transformValue: K}),
  Ae = I({prop: 'left', transformValue: K}),
  je = (L({key: 'buttons'}),
  L({key: 'textStyles', prop: 'textStyle'}),
  L({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  Ve = function(e) {
    return e instanceof Date
  },
  Re = 36e5,
  $e = /[T ]/,
  Ne = /:/,
  Ge = /^(\d{2})$/,
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
function ut(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var st,
  lt = function(e, t) {
    if (Ve(e)) return new Date(e.getTime())
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
        if ((Ne.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = rt.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      u = (function(e, t) {
        var n,
          r = _e[t],
          o = Xe[t]
        if ((n = Ue.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Ge.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      s = u.year,
      l = (function(e, t) {
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
          ? ut(t, parseInt(n[1], 10) - 1)
          : (n = Ke.exec(e))
          ? ut(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(u.restDateString, s)
    if (l) {
      var c,
        p = l.getTime(),
        f = 0
      if (
        (i.time &&
          (f = (function(e) {
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
        var d = p + f,
          m = new Date(d)
        c = je(m)
        var h = new Date(d)
        h.setDate(m.getDate() + 1)
        var g = je(h) - je(m)
        g > 0 && (c += g)
      }
      return new Date(p + f + c)
    }
    return new Date(e)
  },
  ct = function(e) {
    var t = lt(e)
    return t.setHours(0, 0, 0, 0), t
  },
  pt = function(e) {
    var t = lt(e)
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
          var t = lt(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  ft = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = lt(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  dt = function(e) {
    return ft(e, {weekStartsOn: 1})
  },
  mt = function(e) {
    var t = lt(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = dt(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = dt(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  ht = function(e) {
    var t = lt(e),
      n =
        dt(t).getTime() -
        (function(e) {
          var t = mt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), dt(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  gt = function(e) {
    if (Ve(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  yt = [
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
    var r = yt
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  bt = {
    distanceInWords: ((st = {
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
            'string' == typeof st[e]
              ? st[e]
              : 1 === t
              ? st[e].one
              : st[e].other.replace('{{count}}', t)),
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
        u = ['a.m.', 'p.m.'],
        s = {
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
            return e.getHours() / 12 >= 1 ? u[1] : u[0]
          },
        }
      return (
        ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
          s[e + 'o'] = function(t, n) {
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
        {formatters: s, formattingTokensRegExp: vt(s)}
      )
    })(),
  },
  Dt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return wt(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return wt(e.getDate(), 2)
    },
    DDD: function(e) {
      return pt(e)
    },
    DDDD: function(e) {
      return wt(pt(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return ht(e)
    },
    WW: function(e) {
      return wt(ht(e), 2)
    },
    YY: function(e) {
      return wt(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return wt(e.getFullYear(), 4)
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
      return wt(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return wt(Dt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return wt(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return wt(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return wt(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return wt(e.getMilliseconds(), 3)
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
  return n + wt(Math.floor(r / 60), 2) + t + wt(o, 2)
}
function wt(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var kt = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = bt.format.formatters,
      i = bt.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var u = lt(e)
    return gt(u)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            u = i.length
          for (r = 0; r < u; r++)
            (o = t[i[r]] || Dt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < u; n++)
              i[n] instanceof Function ? (t += i[n](e, Dt)) : (t += i[n])
            return t
          }
        })(r, a, i)(u)
      : 'Invalid Date'
  },
  St = function(e, t) {
    var n = lt(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Mt = function(e, t, n) {
    var r = lt(e),
      o = void 0 !== n ? n : 1,
      a = lt(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      u = r
    for (u.setHours(0, 0, 0, 0); u.getTime() <= a; ) i.push(lt(u)), u.setDate(u.getDate() + o)
    return i
  },
  Ct = function(e) {
    var t = lt(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Et = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = lt(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  Tt = function(e) {
    return lt(e).getDay()
  },
  Ft = function(e) {
    var t = lt(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Ot(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    u =
      void 0 === i
        ? function(e) {
            return kt(e, 'DD')
          }
        : i,
    s = e.weekDayFormat,
    l =
      void 0 === s
        ? function(e) {
            return kt(e, 'dd')
          }
        : s,
    c = e.monthLabelFormat,
    p =
      void 0 === c
        ? function(e) {
            return kt(e, 'MMMM YYYY')
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
                    return kt(e, 'DD')
                  }
                : a,
            u = new Date(t, n),
            s = Ft(u),
            l = Tt(s),
            c = Ct(u),
            p = Array.from(Array(l >= o ? l - o : o).keys()).fill(0),
            f = Mt(s, c).map(function(e) {
              return {date: e, day: i(e)}
            })
          return p.concat(f)
        })({year: t, month: n, weekStartsOn: a, dayFormat: u})
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
                    return kt(e, 'dd')
                  }
                : o,
            i = new Date()
          return Mt(St(ft(i), r), St(Et(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: l})
      },
      [a],
    ),
    monthLabel: p(new Date(t, n)),
  }
}
var zt = function(e, t) {
    var n = lt(e),
      r = lt(t)
    return n.getTime() < r.getTime()
  },
  Pt = function(e, t) {
    var n = lt(e),
      r = lt(t)
    return n.getTime() > r.getTime()
  },
  It = function(e, t, n) {
    var r = lt(e).getTime(),
      o = lt(t).getTime(),
      a = lt(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  Bt = function(e, t) {
    var n = ct(e),
      r = ct(t)
    return n.getTime() === r.getTime()
  },
  Ht = function(e) {
    return lt(e).getFullYear()
  },
  Lt = function(e) {
    return lt(e).getMonth()
  },
  Yt = function() {
    return ct(new Date())
  },
  Wt = function(e, t) {
    var n = lt(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = lt(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function At(e) {
  var t = Ft(e)
  return {year: Ht(t), month: Lt(t), date: t}
}
function jt(e, t) {
  var n = At(t || Yt()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = Wt(e[e.length - 1].date, 1)), e.concat([At(r)])
      }, o)),
    o
  )
}
function Vt(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = Wt(r, n)), n > 0 ? e.concat([At(r)]) : [At(r)].concat(e)
  }, [])
}
function Rt(e, t, n) {
  return e && 'string' == typeof t ? kt(e, t) : e && 'function' == typeof t ? t(e) : n
}
var $t = 'startDate',
  Nt = 'endDate'
function Gt(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    u = e.maxBookingDate,
    s = e.onDateChange,
    l = e.numberOfMonths,
    c = void 0 === l ? 2 : l,
    p = e.firstDayOfWeek,
    f = void 0 === p ? 1 : p,
    d = t(function() {
      return jt(c, r)
    }),
    m = d[0],
    h = d[1],
    g = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && It(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    y = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && Bt(e, t)) || (n && Bt(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    v = n(
      function(e) {
        return (function(e, t, n, r) {
          var o = t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0) : t,
            a = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
          return !!((o && zt(e, o)) || (a && Pt(e, a)) || (r && r(e)))
        })(e, i, u)
      },
      [i, u],
    )
  return {
    firstDayOfWeek: f,
    activeMonths: m,
    isDateSelected: g,
    isStartOrEndDate: y,
    isDateBlocked: v,
    numberOfMonths: c,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: $t})
    },
    onDaySelect: function(e) {
      ;(a === Nt && r && zt(e, r)) || (a === $t && o && Pt(e, o))
        ? s({endDate: null, startDate: e, focusedInput: Nt})
        : a === $t
        ? s({endDate: o, startDate: e, focusedInput: Nt})
        : a === Nt && r && !zt(e, r) && s({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      h(Vt(m, c, -1))
    },
    goToNextMonths: function() {
      h(Vt(m, c, 1))
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
  qt = u('div')(
    _t ||
      (_t = p(
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
          '\n',
        ],
      )),
    ge,
    he,
    ye,
    de,
    fe,
    me,
    De,
    ve,
    be,
    ue,
    se,
    Z,
  ),
  Qt = u('div')(
    Ut ||
      (Ut = p(
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
    pe,
    le,
    ce,
    ue,
    se,
    xe,
    ae,
    Q,
  ),
  Kt = u('div')(
    Xt ||
      (Xt = p(
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
    Be,
    Le,
    Ae,
    Ye,
    We,
    He,
  )
function en(t) {
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
var tn,
  nn,
  rn,
  on = u('label')(
    tn ||
      (tn = p(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Be,
    we,
    Ie,
    oe,
    Oe,
    Z,
  ),
  an = u('div')(
    nn ||
      (nn = p(
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
    Be,
    Ae,
    Le,
    ae,
    Q,
  ),
  un = u('input')(
    rn ||
      (rn = p(
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
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-weight: 500;\n    color: #929598;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-weight: 500;\n    color: #929598;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-weight: 500;\n    color: #929598;\n  }\n',
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
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-weight: 500;\n    color: #929598;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-weight: 500;\n    color: #929598;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-weight: 500;\n    color: #929598;\n  }\n',
        ],
      )),
    Ie,
    Z,
    te,
    ee,
    J,
    ne,
    Z,
    we,
    Q,
    ie,
  )
function sn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.ariaLabel,
    a = t.onClick,
    i = t.value,
    u = t.showCalendarIcon,
    s = t.inputBorder,
    l = t.inputMinHeight,
    c = t.inputPadding,
    p = t.calendarWrapperTop
  return e.createElement(
    on,
    {
      htmlFor: r,
      display: 'block',
      position: 'relative',
      border: s || '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      mb: '0',
    },
    u &&
      e.createElement(
        an,
        {position: 'absolute', height: '12px', width: '12px', top: p || '16px', left: '16px'},
        e.createElement(en, {width: '12px', height: '12px', color: '#BCBEC0'}),
      ),
    e.createElement(un, {
      border: '0',
      p: c || '0 44px',
      width: '100%',
      minHeight: l || '46px',
      background: '#ffffff',
      fontFamily: 'Montserrat',
      color: '#001217',
      fontSize: '14px',
      fontWeight: 600,
      id: r,
      placeholder: n,
      'aria-label': o,
      value: i,
      autoComplete: 'off',
      readOnly: !0,
      onFocus: a,
    }),
  )
}
function ln(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    u = t.className,
    s = void 0 === u ? '' : u,
    l = (function(e) {
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
      className: s,
      transform: 'rotate(' + l + ' 0 0)',
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
function cn(e) {
  void 0 === e && (e = {})
  var t = o(s)
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
var pn,
  fn,
  dn,
  mn = {
    fontFamily: 'Montserrat, sans-serif',
    colors: {
      silverCloud: '#929598',
      charcoal: '#001217',
      darcula: '#343132',
      mud: '#58595B',
      greey: '#808285',
    },
  },
  hn = u('div')(
    pn ||
      (pn = p(
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
  gn = u(hn)(
    dn ||
      (dn = p(
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
        l(
          fn ||
            (fn = p(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function yn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = cn({
      fontFamily: mn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: mn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: mn.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    Kt,
    {p: a.selectDatePadding},
    e.createElement(
      hn,
      {
        fontFamily: a.fontFamily,
        fontSize: a.selectDateLabelFontSize,
        color: a.selectDateLabelColor,
        m: a.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      gn,
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
var vn = function(t) {
    var n = t.label,
      r = cn({
        fontFamily: mn.fontFamily,
        monthLabelColor: mn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      hn,
      {
        fontFamily: r.fontFamily,
        fontSize: r.monthLabelFontSize,
        fontWeight: r.monthLabelFontWeight,
        lineHeight: r.monthLabelLineHeight,
        color: r.monthLabelColor,
      },
      n,
    )
  },
  bn = function(t) {
    var n = t.label
    return e.createElement(
      hn,
      {fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 500, color: '#929598'},
      n,
    )
  },
  Dn = u('button')(
    Sn ||
      (Sn = p(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n',
        ],
      )),
    Q,
    ae,
    ze,
    Ie,
    function(e) {
      return (
        e.disabled &&
        l(
          xn ||
            (xn = p(
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
          ? l(
              kn ||
                (kn = p(
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                )),
            )
          : ''
        : l(
            wn ||
              (wn = p(
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
              )),
          )
    },
  )
var xn,
  wn,
  kn,
  Sn,
  Mn = e.memo(function(t) {
    var n = t.day,
      r = t.isActive,
      o = t.isStartOrEnd,
      a = t.disabled,
      i = t.onDaySelect,
      u = t.date,
      s = t.daySize,
      l = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#e6e7e8'
      })(r, o),
      c = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#ffffff'
      })(r, o),
      p = (function(e, t) {
        return e || t ? '#ffffff' : '#58595b'
      })(r, o)
    return e.createElement(
      Dn,
      {
        role: 'button',
        onClick: function() {
          return i(u)
        },
        disabled: a,
        isActive: r,
        isStartOrEnd: o,
        height: s || '36px',
        width: s || '36px',
        background: c,
        boxShadow:
          '1px 0 0 0 ' +
          l +
          ',\n        0 1px 0 0 ' +
          l +
          ',\n        1px 1px 0 0 ' +
          l +
          ',\n        1px 0 0 0 ' +
          l +
          ' inset,\n        0 1px 0 0 ' +
          l +
          ' inset',
      },
      e.createElement(
        Qt,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        e.createElement(
          hn,
          {color: p, fontFamily: 'Montserrat', fontWeight: 500, fontSize: '14px'},
          n,
        ),
      ),
    )
  }),
  Cn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      u = t.isStartOrEndDate,
      s = t.onDaySelect,
      l = t.daySize,
      c = Ot({year: n, month: r, weekStartsOn: o}),
      p = c.days,
      f = c.weekDays,
      d = c.monthLabel
    return e.createElement(
      'div',
      null,
      e.createElement(Qt, {justifyContent: 'center', mb: '28px'}, e.createElement(vn, {label: d})),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        f.map(function(t) {
          return e.createElement(
            Qt,
            {key: t, justifyContent: 'center', mb: '16px'},
            e.createElement(bn, {label: t}),
          )
        }),
      ),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        p.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Mn, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: u(t.date),
                onDaySelect: s,
                daySize: l,
              })
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
function En(t) {
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
var Tn,
  Fn = u('button')(
    Tn ||
      (Tn = p(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function On(t) {
  var n = t.onResetDates,
    r = t.text,
    o = a(null),
    i = cn({
      fontFamily: mn.fontFamily,
      resetDatesIconColor: mn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: mn.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Fn,
    {
      onClick: n,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(En, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
    }),
    e.createElement(
      hn,
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
var zn,
  Pn,
  In = u('svg')(Pn || (Pn = p(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return l(
      zn ||
        (zn = p(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Bn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    u = t.className,
    s = void 0 === u ? '' : u,
    l = (function(e) {
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
    In,
    {
      width: r,
      height: n,
      color: o,
      className: s,
      angle: l,
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
var Hn,
  Ln = u('button')(
    Hn ||
      (Hn = p(
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
    Ie,
    Z,
    we,
  )
function Yn(t) {
  var n = t.type,
    r = t.onClick,
    o = a(null),
    i = cn({
      navButtonWidth: '30px',
      navButtonHeight: '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: '11px',
      navButtonIconWidth: '18px',
      navButtonIconColor: mn.colors.greey,
    })
  return e.createElement(
    Ln,
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
    e.createElement(Bn, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
function Wn(t) {
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
var An,
  jn,
  Vn = u('div')(
    An ||
      (An = p(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  Rn = u('button')(
    jn ||
      (jn = p(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    Vn,
  )
function $n(t) {
  var n = t.onClick
  return e.createElement(
    Rn,
    {onClick: n},
    e.createElement(Wn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(Vn, null, 'Close'),
  )
}
var Nn,
  Gn,
  _n = u('div')(
    Nn || (Nn = p(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n'])),
    Ie,
    Z,
    Oe,
    Be,
  ),
  Un = u('div')(
    Gn ||
      (Gn = p(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function Xn(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    u = t.onDateChange,
    s = t.onClose,
    l = void 0 === s ? function() {} : s,
    c = t.numberOfMonths,
    p = t.firstDayOfWeek,
    f = t.displayFormat,
    d = void 0 === f ? 'MM/DD/YYYY' : f,
    m = t.phrases,
    h = void 0 === m ? Zt : m,
    g = t.styles,
    y = void 0 === g ? {} : g,
    v = Gt({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: u,
      minBookingDate: o,
      maxBookingDate: a,
      numberOfMonths: c,
      firstDayOfWeek: p,
    }),
    b = v.activeMonths,
    D = v.isDateSelected,
    x = v.isStartOrEndDate,
    w = v.isDateBlocked,
    k = v.firstDayOfWeek,
    S = v.onDaySelect,
    M = v.onResetDates,
    C = v.goToPreviousMonths,
    E = v.goToNextMonths,
    T = v.numberOfMonths
  return e.createElement(
    _n,
    {background: '#ffffff', p: '32px', borderRadius: '2px', position: 'relative'},
    e.createElement(
      Kt,
      {position: 'absolute', right: '32px', zIndex: 1},
      e.createElement($n, {onClick: l}),
    ),
    e.createElement(
      Un,
      null,
      e.createElement(
        qt,
        {gridTemplateColumns: y.selectDateGridTemplateColumns || '126px 75px 126px'},
        e.createElement(yn, {
          title: h.datepickerStartDateLabel,
          date: Rt(n, d, h.datepickerStartDatePlaceholder),
          isActive: i === $t,
        }),
        e.createElement(
          Qt,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(ln, {height: '12px', width: '15px', iconColor: '#929598'}),
        ),
        e.createElement(yn, {
          title: h.datepickerEndDateLabel,
          date: Rt(r, d, h.datepickerEndDatePlaceholder),
          isActive: i === Nt,
        }),
      ),
    ),
    e.createElement(
      Kt,
      {mt: '28px', position: 'relative'},
      e.createElement(
        Kt,
        {position: 'absolute', top: '-5px', left: '0'},
        e.createElement(Yn, {type: 'prev', onClick: C}),
      ),
      e.createElement(
        Kt,
        {position: 'absolute', top: '-5px', right: '0'},
        e.createElement(Yn, {type: 'next', onClick: E}),
      ),
      e.createElement(
        qt,
        {gridTemplateColumns: 'repeat(' + T + ', 1fr)', gridGap: '0 32px'},
        b.map(function(t) {
          return e.createElement(Cn, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: k,
            isDateBlocked: w,
            isDateSelected: D,
            isStartOrEndDate: x,
            onDaySelect: S,
            daySize: y.daySize,
          })
        }),
      ),
    ),
    e.createElement(Kt, {mt: '32px'}, e.createElement(On, {onResetDates: M, text: h.resetDates})),
  )
}
var Zn,
  Jn,
  qn = u(ln)(Zn || (Zn = p(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pe, J),
  Qn = u(qt)(
    Jn || (Jn = p(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ie,
    we,
    Oe,
  )
function Kn(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = t.firstDayOfWeek,
    l = t.onFocusChange,
    c = t.numberOfMonths,
    p = t.focusedInput,
    f = t.onDateChange,
    d = t.onClose,
    m = void 0 === d ? function() {} : d,
    h = t.showStartDateCalendarIcon,
    g = void 0 === h || h,
    y = t.showEndDateCalendarIcon,
    v = void 0 === y || y,
    b = t.styles,
    D = void 0 === b ? {} : b,
    x = t.displayFormat,
    w = void 0 === x ? 'MM/DD/YYYY' : x,
    k = t.phrases,
    S = void 0 === k ? Jt : k,
    M = a(null)
  function C(e) {
    null !== p && M && M.current && !M.current.contains(e.target) && l(null)
  }
  return (
    i(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', C),
        function() {
          window.removeEventListener('click', C)
        }
      )
    }),
    e.createElement(
      Kt,
      {position: 'relative', ref: M},
      e.createElement(
        Qn,
        {
          background: D.inputGridBackground || 'transparent',
          gridTemplateColumns: D.inputGridTemplateColumns || '194px 39px 194px',
          border: D.inputGridBorder || '0',
          borderRadius: D.inputGridBorderRadius || '0',
        },
        e.createElement(sn, {
          id: 'startDate',
          ariaLabel: S.startDateAriaLabel,
          placeholder: S.startDatePlaceholder,
          value: Rt(n, w, ''),
          onClick: function() {
            return l($t)
          },
          showCalendarIcon: g,
          inputBorder: D.inputBorder,
          inputMinHeight: D.inputMinHeight,
          inputPadding: D.inputStartDatePadding || D.inputPadding,
          calendarWrapperTop: D.inputCalendarWrapperTop,
        }),
        e.createElement(
          Qt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(qn, {
            width: '15px',
            height: '12px',
            color: D.inputArrowIconColor || '#ffffff',
            opacity: D.inputArrowIconOpacity || 0.4,
          }),
        ),
        e.createElement(sn, {
          id: 'startDate',
          ariaLabel: S.endDateAriaLabel,
          placeholder: S.endDatePlaceholder,
          value: Rt(r, w, ''),
          onClick: function() {
            return l(n ? Nt : $t)
          },
          showCalendarIcon: v,
          inputBorder: D.inputBorder,
          inputMinHeight: D.inputMinHeight,
          calendarWrapperTop: D.inputCalendarWrapperTop,
          inputPadding: D.inputEndDatePadding || D.inputPadding,
        }),
      ),
      e.createElement(
        Kt,
        {position: 'absolute', bottom: D.datepickerBottom || '65px', left: D.datepickerLeft || '0'},
        null !== p &&
          e.createElement(Xn, {
            onClose: function() {
              m(), l(null)
            },
            startDate: n,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: u,
            firstDayOfWeek: s,
            numberOfMonths: c,
            focusedInput: p,
            displayFormat: w,
            onDateChange: f,
            styles: {
              daySize: D.daySize,
              selectDateGridTemplateColumns: D.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
export {Kn as DateRangeInput, Xn as Datepicker}
