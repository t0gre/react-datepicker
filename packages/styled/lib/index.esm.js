import e, {useState as t, useCallback as n, useMemo as r, useRef as o, useEffect as a} from 'react'
import i, {css as u} from 'styled-components'
var s = function() {
  return (s =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function c(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function l() {
  return (l =
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
function p(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var d = p(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    u = n ? Symbol.for('react.profiler') : 60114,
    s = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    l = n ? Symbol.for('react.async_mode') : 60111,
    f = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    d = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    h = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case l:
            case f:
            case a:
            case u:
            case i:
            case d:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case c:
                case p:
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
    return g(e) === f
  }
  ;(t.typeOf = g),
    (t.AsyncMode = l),
    (t.ConcurrentMode = f),
    (t.ContextConsumer = c),
    (t.ContextProvider = s),
    (t.Element = r),
    (t.ForwardRef = p),
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
        e === f ||
        e === u ||
        e === i ||
        e === d ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === h ||
            e.$$typeof === m ||
            e.$$typeof === s ||
            e.$$typeof === c ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || g(e) === l
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return g(e) === c
    }),
    (t.isContextProvider = function(e) {
      return g(e) === s
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
      return g(e) === u
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === d
    })
})
f(d)
d.typeOf,
  d.AsyncMode,
  d.ConcurrentMode,
  d.ContextConsumer,
  d.ContextProvider,
  d.Element,
  d.ForwardRef,
  d.Fragment,
  d.Lazy,
  d.Memo,
  d.Portal,
  d.Profiler,
  d.StrictMode,
  d.Suspense,
  d.isValidElementType,
  d.isAsyncMode,
  d.isConcurrentMode,
  d.isContextConsumer,
  d.isContextProvider,
  d.isElement,
  d.isForwardRef,
  d.isFragment,
  d.isLazy,
  d.isMemo,
  d.isPortal,
  d.isProfiler,
  d.isStrictMode,
  d.isSuspense
var m = p(function(e, t) {})
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
  m.isSuspense,
  p(function(e) {
    e.exports = d
  })
var h = Object.getOwnPropertySymbols,
  g = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable
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
var v = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function b() {}
function D() {}
D.resetWarningCache = b
var x = p(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== v) {
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
        checkPropTypes: D,
        resetWarningCache: b,
      }
      return (n.PropTypes = n), n
    })()
  }),
  k = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  w = x.oneOfType([x.number, x.string, x.array, x.object]),
  S = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  M = function(e) {
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
  C = function(e) {
    return T(e) && 0 !== e ? e + 'px' : e
  },
  O = function(e) {
    return '@media screen and (min-width: ' + C(e) + ')'
  },
  F = function(e, t) {
    return M(t, e)
  },
  z = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      u = void 0 === i ? F : i,
      s = e.scale,
      c = void 0 === s ? {} : s,
      l = r || n,
      f = function(e) {
        var t = M(e, n, o, null)
        if (!E(t)) return null
        var r,
          i = M(e.theme, a, c),
          s = function(e) {
            var t
            return E(e) ? (((t = {})[l] = u(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return s(t)
        var f = M(e.theme, 'breakpoints', k),
          p = []
        if (Array.isArray(t)) {
          p.push(s(t[0]))
          for (var d = 1; d < t.slice(0, f.length + 1).length; d++) {
            var m = s(t[d])
            if (m) {
              var h,
                g = O(f[d - 1])
              p.push((((h = {})[g] = m), h))
            }
          }
        } else {
          for (var y in t) {
            var v,
              b = f[y],
              D = O(b),
              x = s(t[y])
            if (b) p.push((((v = {})[D] = x), v))
            else p.unshift(x)
          }
          p.sort()
        }
        return p
      }
    return (
      ((f.propTypes = (((t = {})[n] = S(w)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((f.propTypes[o] = S(w)), (f.propTypes[o].meta = {prop: o, themeKey: a})),
      f
    )
  },
  Y = function() {
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
        r.propTypes = l({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  P = function(e) {
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
        return M(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = x.oneOfType([x.number, x.string])), t)), a
  },
  j = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  H = function(e, t) {
    if (!T(e)) return C(M(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = M(t, r)
    return T(o) ? C(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  I = z({prop: 'margin', alias: 'm', key: 'space', transformValue: H, scale: j}),
  V = z({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: H, scale: j}),
  W = z({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: H, scale: j}),
  R = z({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: H, scale: j}),
  L = z({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: H, scale: j}),
  $ = z({prop: 'padding', alias: 'p', key: 'space', transformValue: H, scale: j}),
  B = z({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: H, scale: j}),
  N = z({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: H, scale: j}),
  _ = z({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: H, scale: j}),
  G = z({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: H, scale: j}),
  U = P(function(e) {
    return l({}, e, {
      mt: E(e.my) ? e.my : e.mt,
      mb: E(e.my) ? e.my : e.mb,
      ml: E(e.mx) ? e.mx : e.ml,
      mr: E(e.mx) ? e.mx : e.mr,
      pt: E(e.py) ? e.py : e.pt,
      pb: E(e.py) ? e.py : e.pb,
      pl: E(e.px) ? e.px : e.pl,
      pr: E(e.px) ? e.px : e.pr,
    })
  })(Y(I, V, W, R, L, $, B, N, _, G)),
  X = Y(
    z({prop: 'color', key: 'colors'}),
    z({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  Z = function(e, t) {
    return !T(e) || e > 1 ? C(e) : 100 * e + '%'
  },
  J = z({prop: 'width', key: 'widths', transformValue: Z}),
  q = function(e, t) {
    return C(M(t, e))
  },
  Q = z({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: q,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  K = z({prop: 'fontFamily', key: 'fonts'}),
  ee = z({prop: 'fontWeight', key: 'fontWeights'}),
  te = z({prop: 'lineHeight', key: 'lineHeights'}),
  ne = (z({prop: 'textAlign'}),
  z({prop: 'fontStyle'}),
  z({prop: 'letterSpacing', key: 'letterSpacings', transformValue: q}),
  z({prop: 'display'})),
  re = (z({prop: 'maxWidth', key: 'maxWidths', transformValue: q}),
  z({prop: 'minWidth', key: 'minWidths', transformValue: q}),
  z({prop: 'height', key: 'heights', transformValue: q})),
  oe = (z({prop: 'maxHeight', key: 'maxHeights', transformValue: q}),
  z({prop: 'minHeight', key: 'minHeights', transformValue: q}),
  P(function(e) {
    return l({}, e, {width: e.size, height: e.size})
  })(Y(J, re)),
  z({prop: 'verticalAlign'}),
  z({prop: 'alignItems'})),
  ae = (z({prop: 'alignContent'}), z({prop: 'justifyItems'}), z({prop: 'justifyContent'})),
  ie = z({prop: 'flexWrap'}),
  ue = (z({prop: 'flexBasis', transformValue: Z}), z({prop: 'flexDirection'})),
  se = z({prop: 'flex'}),
  ce = (z({prop: 'justifySelf'}),
  z({prop: 'alignSelf'}),
  z({prop: 'order'}),
  z({prop: 'gridGap', key: 'space', transformValue: q, scale: j})),
  le = z({prop: 'gridColumnGap', key: 'space', transformValue: q, scale: j}),
  fe = z({prop: 'gridRowGap', key: 'space', transformValue: q, scale: j}),
  pe = (z({prop: 'gridColumn'}), z({prop: 'gridRow'}), z({prop: 'gridAutoFlow'})),
  de = z({prop: 'gridAutoColumns'}),
  me = z({prop: 'gridAutoRows'}),
  he = z({prop: 'gridTemplateColumns'}),
  ge = z({prop: 'gridTemplateRows'}),
  ye = z({prop: 'gridTemplateAreas'}),
  ve = z({prop: 'gridArea'}),
  be = z({prop: 'border', key: 'borders'}),
  De = z({prop: 'borderWidth', key: 'borderWidths', transformValue: q}),
  xe = z({prop: 'borderStyle', key: 'borderStyles'}),
  ke = z({prop: 'borderColor', key: 'colors'}),
  we = z({prop: 'borderTop', key: 'borders'}),
  Se = z({prop: 'borderRight', key: 'borders'}),
  Me = z({prop: 'borderBottom', key: 'borders'}),
  Ee = z({prop: 'borderLeft', key: 'borders'}),
  Te = z({prop: 'borderRadius', key: 'radii', transformValue: q}),
  Ce = (Y(be, we, Se, Me, Ee, De, xe, ke, Te), z({prop: 'boxShadow', key: 'shadows'})),
  Oe = z({prop: 'opacity'}),
  Fe = (z({prop: 'overflow'}), z({prop: 'background'})),
  ze = (z({prop: 'backgroundImage'}),
  z({prop: 'backgroundSize'}),
  z({prop: 'backgroundPosition'}),
  z({prop: 'backgroundRepeat'}),
  z({prop: 'position'})),
  Ye = (z({prop: 'zIndex', key: 'zIndices'}), z({prop: 'top', transformValue: q})),
  Pe = z({prop: 'right', transformValue: q}),
  Ae = z({prop: 'bottom', transformValue: q}),
  je = z({prop: 'left', transformValue: q}),
  He = (A({key: 'buttons'}),
  A({key: 'textStyles', prop: 'textStyle'}),
  A({key: 'colorStyles', prop: 'colors'}),
  function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  }),
  Ie = function(e) {
    return e instanceof Date
  },
  Ve = 36e5,
  We = /[T ]/,
  Re = /:/,
  Le = /^(\d{2})$/,
  $e = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  Be = /^(\d{4})/,
  Ne = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  _e = /^-(\d{2})$/,
  Ge = /^-?(\d{3})$/,
  Ue = /^-?(\d{2})-?(\d{2})$/,
  Xe = /^-?W(\d{2})$/,
  Ze = /^-?W(\d{2})-?(\d{1})$/,
  Je = /^(\d{2}([.,]\d*)?)$/,
  qe = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  Qe = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  Ke = /([Z+-].*)$/,
  et = /^(Z)$/,
  tt = /^([+-])(\d{2})$/,
  nt = /^([+-])(\d{2}):?(\d{2})$/
function rt(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var ot,
  at = function(e, t) {
    if (Ie(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(We)
        if ((Re.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = Ke.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      u = (function(e, t) {
        var n,
          r = $e[t],
          o = Ne[t]
        if ((n = Be.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = Le.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      s = u.year,
      c = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = _e.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = Ge.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = Ue.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = Xe.exec(e))
          ? rt(t, parseInt(n[1], 10) - 1)
          : (n = Ze.exec(e))
          ? rt(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(u.restDateString, s)
    if (c) {
      var l,
        f = c.getTime(),
        p = 0
      if (
        (i.time &&
          (p = (function(e) {
            var t, n, r
            if ((t = Je.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * Ve
            if ((t = qe.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * Ve + 6e4 * r
              )
            if ((t = Qe.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * Ve + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (l =
            6e4 *
            ((o = et.exec(r))
              ? 0
              : (o = tt.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = nt.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var d = f + p,
          m = new Date(d)
        l = He(m)
        var h = new Date(d)
        h.setDate(m.getDate() + 1)
        var g = He(h) - He(m)
        g > 0 && (l += g)
      }
      return new Date(f + p + l)
    }
    return new Date(e)
  },
  it = function(e) {
    var t = at(e)
    return t.setHours(0, 0, 0, 0), t
  },
  ut = function(e) {
    var t = at(e)
    return (
      (function(e, t) {
        var n = it(e),
          r = it(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = at(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  st = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = at(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  ct = function(e) {
    return st(e, {weekStartsOn: 1})
  },
  lt = function(e) {
    var t = at(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = ct(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = ct(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  ft = function(e) {
    var t = at(e),
      n =
        ct(t).getTime() -
        (function(e) {
          var t = lt(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ct(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  pt = function(e) {
    if (Ie(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  dt = [
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
  mt = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = dt
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  ht = {
    distanceInWords: ((ot = {
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
            'string' == typeof ot[e]
              ? ot[e]
              : 1 === t
              ? ot[e].one
              : ot[e].other.replace('{{count}}', t)),
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
        {formatters: s, formattingTokensRegExp: mt(s)}
      )
    })(),
  },
  gt = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return vt(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return vt(e.getDate(), 2)
    },
    DDD: function(e) {
      return ut(e)
    },
    DDDD: function(e) {
      return vt(ut(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return ft(e)
    },
    WW: function(e) {
      return vt(ft(e), 2)
    },
    YY: function(e) {
      return vt(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return vt(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(lt(e)).substr(2)
    },
    GGGG: function(e) {
      return lt(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return vt(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return vt(gt.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return vt(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return vt(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return vt(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return vt(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return yt(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return yt(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function yt(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + vt(Math.floor(r / 60), 2) + t + vt(o, 2)
}
function vt(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var bt = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = ht.format.formatters,
      i = ht.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var u = at(e)
    return pt(u)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            u = i.length
          for (r = 0; r < u; r++)
            (o = t[i[r]] || gt[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < u; n++)
              i[n] instanceof Function ? (t += i[n](e, gt)) : (t += i[n])
            return t
          }
        })(r, a, i)(u)
      : 'Invalid Date'
  },
  Dt = function(e, t) {
    var n = at(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  xt = function(e, t, n) {
    var r = at(e),
      o = void 0 !== n ? n : 1,
      a = at(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      u = r
    for (u.setHours(0, 0, 0, 0); u.getTime() <= a; ) i.push(at(u)), u.setDate(u.getDate() + o)
    return i
  },
  kt = function(e) {
    var t = at(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  wt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = at(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  St = function(e) {
    return at(e).getDay()
  },
  Mt = function(e) {
    var t = at(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function Et(e) {
  var t = e.year,
    n = e.month,
    o = e.weekStartsOn,
    a = void 0 === o ? 1 : o,
    i = e.dayFormat,
    u =
      void 0 === i
        ? function(e) {
            return bt(e, 'DD')
          }
        : i,
    s = e.weekDayFormat,
    c =
      void 0 === s
        ? function(e) {
            return bt(e, 'dd')
          }
        : s,
    l = e.monthLabelFormat,
    f =
      void 0 === l
        ? function(e) {
            return bt(e, 'MMMM YYYY')
          }
        : l
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
                    return bt(e, 'DD')
                  }
                : a,
            u = new Date(t, n),
            s = Mt(u),
            c = St(s),
            l = kt(u),
            f = Array.from(Array(c >= o ? c - o : o).keys()).fill(0),
            p = xt(s, l).map(function(e) {
              return {date: e, day: i(e)}
            })
          return f.concat(p)
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
                    return bt(e, 'dd')
                  }
                : o,
            i = new Date()
          return xt(Dt(st(i), r), Dt(wt(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({weekStartsOn: a, weekDayFormat: c})
      },
      [a],
    ),
    monthLabel: f(new Date(t, n)),
  }
}
var Tt = function(e, t) {
    var n = at(e),
      r = at(t)
    return n.getTime() < r.getTime()
  },
  Ct = function(e, t) {
    var n = at(e),
      r = at(t)
    return n.getTime() > r.getTime()
  },
  Ot = function(e, t, n) {
    var r = at(e).getTime(),
      o = at(t).getTime(),
      a = at(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  Ft = function(e, t) {
    var n = it(e),
      r = it(t)
    return n.getTime() === r.getTime()
  },
  zt = function(e) {
    return at(e).getFullYear()
  },
  Yt = function(e) {
    return at(e).getMonth()
  },
  Pt = function() {
    return it(new Date())
  },
  At = function(e, t) {
    var n = at(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = at(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function jt(e) {
  var t = Mt(e)
  return {year: zt(t), month: Yt(t), date: t}
}
function Ht(e, t) {
  var n = jt(t || Pt()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = At(e[e.length - 1].date, 1)), e.concat([jt(r)])
      }, o)),
    o
  )
}
function It(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = At(r, n)), e.concat([jt(r)])
  }, [])
}
function Vt(e, t, n) {
  return e && 'string' == typeof t ? bt(e, t) : e && 'function' == typeof t ? t(e) : n
}
var Wt = 'startDate',
  Rt = 'endDate'
function Lt(e) {
  var r = e.startDate,
    o = e.endDate,
    a = e.focusedInput,
    i = e.minBookingDate,
    u = e.maxBookingDate,
    s = e.onDateChange,
    c = e.numberOfMonths,
    l = void 0 === c ? 2 : c,
    f = e.firstDayOfWeek,
    p = void 0 === f ? 1 : f,
    d = t(function() {
      return Ht(l, r)
    }),
    m = d[0],
    h = d[1],
    g = n(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && Ot(e, t, n)
        })(e, r, o)
      },
      [r, o],
    ),
    y = n(
      function(e) {
        return (function(e, t, n) {
          return !!((t && Ft(e, t)) || (n && Ft(e, n)))
        })(e, r, o)
      },
      [r, o],
    ),
    v = n(
      function(e) {
        return (function(e, t, n, r) {
          return !!((t && Tt(e, t)) || (n && Ct(e, n)) || (r && r(e)))
        })(e, i, u)
      },
      [i, u],
    )
  return {
    firstDayOfWeek: p,
    activeMonths: m,
    isDateSelected: g,
    isStartOrEndDate: y,
    isDateBlocked: v,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: Wt})
    },
    onDaySelect: function(e) {
      ;(a === Rt && r && Tt(e, r)) || (a === Wt && o && Ct(e, o))
        ? s({endDate: null, startDate: e, focusedInput: Rt})
        : a === Wt
        ? s({endDate: o, startDate: e, focusedInput: Rt})
        : a === Rt && r && !Tt(e, r) && s({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      h(It(m, l, -1))
    },
    goToNextMonths: function() {
      h(It(m, l, 1))
    },
  }
}
var $t,
  Bt,
  Nt,
  _t = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
  },
  Gt = s({}, _t, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Set start date',
    endDatePlaceholder: 'Set end date',
  }),
  Ut = i('div')(
    $t ||
      ($t = c(
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
    de,
    pe,
    me,
    le,
    ce,
    fe,
    ye,
    he,
    ge,
    oe,
    ae,
    U,
  ),
  Xt = i('div')(
    Bt ||
      (Bt = c(
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
    U,
    se,
    ie,
    ue,
    oe,
    ae,
    ve,
    re,
    J,
  ),
  Zt = i('div')(
    Nt ||
      (Nt = c(
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
          '\n',
        ],
      )),
    ve,
    re,
    U,
    J,
    ze,
    Ye,
    je,
    Pe,
    Ae,
  )
function Jt(t) {
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
      className: i,
      color: o,
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
var qt,
  Qt,
  Kt,
  en = i('label')(
    qt ||
      (qt = c(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    ze,
    be,
    Fe,
    ne,
    Te,
  ),
  tn = i('div')(
    Qt ||
      (Qt = c(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n  svg {\n    display: block;\n  }\n'],
      )),
    ze,
    je,
    Ye,
    re,
    J,
  ),
  nn = i('input')(
    Kt ||
      (Kt = c(
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
    Fe,
    U,
    K,
    Q,
    X,
    ee,
    U,
    be,
    J,
    re,
  )
function rn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.ariaLabel,
    a = t.onClick,
    i = t.value
  return e.createElement(
    en,
    {
      htmlFor: r,
      display: 'block',
      position: 'relative',
      border: '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      onClick: a,
    },
    e.createElement(
      tn,
      {position: 'absolute', height: '12px', width: '12px', top: '16px', left: '16px'},
      e.createElement(Jt, {width: '12px', height: '12px', color: '#BCBEC0'}),
    ),
    e.createElement(nn, {
      border: '0',
      px: '44px',
      width: '100%',
      height: '46px',
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
    }),
  )
}
function on(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    u = t.className,
    s = void 0 === u ? '' : u,
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
      className: s,
      color: o,
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
var an,
  un,
  sn,
  cn = i('div')(
    an ||
      (an = c(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    K,
    Q,
    ee,
    X,
    te,
    U,
  ),
  ln = i(cn)(
    sn ||
      (sn = c(
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
        u(
          un ||
            (un = c(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function fn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = void 0 === o ? 'Select' : o
  return e.createElement(
    'div',
    null,
    e.createElement(
      cn,
      {fontFamily: 'Montserrat', fontSize: '11px', color: '#929598', mb: '8px'},
      n,
    ),
    e.createElement(
      ln,
      {
        as: 'span',
        color: '#001217',
        fontSize: '24px',
        fontWeight: 500,
        fontFamily: 'Montserrat',
        pb: '15px',
        isActive: r,
      },
      a,
    ),
  )
}
var pn = function(t) {
    var n = t.label
    return e.createElement(
      cn,
      {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 1.57,
        color: '#343132',
      },
      n,
    )
  },
  dn = function(t) {
    var n = t.label
    return e.createElement(
      cn,
      {fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 500, color: '#929598'},
      n,
    )
  },
  mn = i('button')(
    vn ||
      (vn = c(
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
    J,
    re,
    Ce,
    Fe,
    function(e) {
      return (
        e.disabled &&
        u(
          hn ||
            (hn = c(
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
          ? u(
              yn ||
                (yn = c(
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                )),
            )
          : ''
        : u(
            gn ||
              (gn = c(
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
              )),
          )
    },
  )
var hn,
  gn,
  yn,
  vn,
  bn = e.memo(function(t) {
    var n = t.day,
      r = t.isActive,
      o = t.isStartOrEnd,
      a = t.disabled,
      i = t.onDaySelect,
      u = t.date,
      s = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#e6e7e8'
      })(r, o),
      c = (function(e, t) {
        return t ? '#00aeef' : e ? '#71c9ed' : '#ffffff'
      })(r, o),
      l = (function(e, t) {
        return e || t ? '#ffffff' : '#58595b'
      })(r, o)
    return e.createElement(
      mn,
      {
        role: 'button',
        onClick: function() {
          return i(u)
        },
        disabled: a,
        isActive: r,
        isStartOrEnd: o,
        height: '36px',
        width: '36px',
        background: c,
        boxShadow:
          '1px 0 0 0 ' +
          s +
          ',\n        0 1px 0 0 ' +
          s +
          ',\n        1px 1px 0 0 ' +
          s +
          ',\n        1px 0 0 0 ' +
          s +
          ' inset,\n        0 1px 0 0 ' +
          s +
          ' inset',
      },
      e.createElement(
        Xt,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        e.createElement(
          cn,
          {color: l, fontFamily: 'Montserrat', fontWeight: 500, fontSize: '14px'},
          n,
        ),
      ),
    )
  }),
  Dn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = t.isDateBlocked,
      i = t.isDateSelected,
      u = t.isStartOrEndDate,
      s = t.onDaySelect,
      c = Et({year: n, month: r, weekStartsOn: o}),
      l = c.days,
      f = c.weekDays,
      p = c.monthLabel
    return e.createElement(
      'div',
      null,
      e.createElement(Xt, {justifyContent: 'center', mb: '28px'}, e.createElement(pn, {label: p})),
      e.createElement(
        Ut,
        {gridTemplateColumns: 'repeat(7, 36px)'},
        f.map(function(t) {
          return e.createElement(
            Xt,
            {key: t, justifyContent: 'center', mb: '16px'},
            e.createElement(dn, {label: t}),
          )
        }),
      ),
      e.createElement(
        Ut,
        {gridTemplateColumns: 'repeat(7, 36px)'},
        l.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(bn, {
                isActive: i(t.date),
                date: t.date,
                key: t.day,
                day: t.day,
                disabled: a(t.date),
                isStartOrEnd: u(t.date),
                onDaySelect: s,
              })
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
function xn(t) {
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
      className: i,
      color: o,
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
function kn(t) {
  var n = t.onResetDates
  return e.createElement(
    Xt,
    {role: 'button', onClick: n, alignItems: 'center'},
    e.createElement(xn, {height: '14px', width: '14px', color: '58595B'}),
    e.createElement(
      cn,
      {
        ml: '8px',
        mt: '1px',
        lineHeight: 1.18,
        fontFamily: 'Montserrat',
        fontSize: '11px',
        color: '#343132',
      },
      'Reset dates',
    ),
  )
}
function wn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    u = t.className,
    s = void 0 === u ? '' : u,
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
    'svg',
    {
      width: r,
      height: n,
      className: s,
      color: o,
      transform: 'rotate(' + c + ' 0 0)',
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    e.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var Sn,
  Mn = i('button')(
    Sn ||
      (Sn = c(
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
    J,
    re,
    Fe,
    U,
    be,
  )
function En(t) {
  var n = t.type,
    r = t.onClick
  return e.createElement(
    Mn,
    {
      width: '30px',
      height: '30px',
      background: '#ffffff',
      border: '1px solid #929598',
      p: '0',
      type: 'button',
      onClick: r,
    },
    e.createElement(wn, {
      width: '18px',
      height: '11px',
      color: '#808285',
      direction: 'next' === n ? 'right' : 'left',
    }),
  )
}
var Tn,
  Cn,
  On = i('div')(
    Tn || (Tn = c(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Fe,
    U,
    Te,
  ),
  Fn = i('div')(
    Cn ||
      (Cn = c(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function zn(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    u = t.numberOfMonths,
    s = t.onDateChange,
    c = t.firstDayOfWeek,
    l = t.displayFormat,
    f = void 0 === l ? 'MM/DD/YYYY' : l,
    p = t.phrases,
    d = void 0 === p ? _t : p,
    m = Lt({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDateChange: s,
      minBookingDate: o,
      maxBookingDate: a,
      numberOfMonths: u,
      firstDayOfWeek: c,
    }),
    h = m.activeMonths,
    g = m.isDateSelected,
    y = m.isStartOrEndDate,
    v = m.isDateBlocked,
    b = m.firstDayOfWeek,
    D = m.onDaySelect,
    x = m.onResetDates,
    k = m.goToPreviousMonths,
    w = m.goToNextMonths
  return e.createElement(
    On,
    {background: '#ffffff', p: '32px', borderRadius: '2px'},
    e.createElement(
      Fn,
      null,
      e.createElement(
        Ut,
        {gridTemplateColumns: '126px 75px 126px'},
        e.createElement(fn, {
          title: d.datepickerStartDateLabel,
          date: Vt(n, f, d.datepickerStartDatePlaceholder),
          isActive: i === Wt,
        }),
        e.createElement(
          Xt,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(on, {height: '12px', width: '15px', color: '#929598'}),
        ),
        e.createElement(fn, {
          title: d.datepickerEndDateLabel,
          date: Vt(r, f, d.datepickerEndDatePlaceholder),
          isActive: i === Rt,
        }),
      ),
    ),
    e.createElement(
      Zt,
      {mt: '28px', position: 'relative'},
      e.createElement(
        Zt,
        {position: 'absolute', top: '-5px', left: '0'},
        e.createElement(En, {type: 'prev', onClick: k}),
      ),
      e.createElement(
        Zt,
        {position: 'absolute', top: '-5px', right: '0'},
        e.createElement(En, {type: 'next', onClick: w}),
      ),
      e.createElement(
        Ut,
        {gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0 32px'},
        h.map(function(t) {
          return e.createElement(Dn, {
            key: t.year + '-' + t.month,
            year: t.year,
            month: t.month,
            firstDayOfWeek: b,
            isDateBlocked: v,
            isDateSelected: g,
            isStartOrEndDate: y,
            onDaySelect: D,
          })
        }),
      ),
    ),
    e.createElement(Zt, {mt: '32px'}, e.createElement(kn, {onResetDates: x})),
  )
}
var Yn,
  Pn = i(on)(Yn || (Yn = c(['\n  ', '\n'], ['\n  ', '\n'])), Oe)
function An(t) {
  var n = t.startDate,
    r = t.endDate,
    i = t.minBookingDate,
    u = t.maxBookingDate,
    s = t.firstDayOfWeek,
    c = t.onFocusChange,
    l = t.numberOfMonths,
    f = t.focusedInput,
    p = t.onDateChange,
    d = t.displayFormat,
    m = void 0 === d ? 'MM/DD/YYYY' : d,
    h = t.phrases,
    g = void 0 === h ? Gt : h,
    y = o(null)
  function v(e) {
    null !== f && y && y.current && !y.current.contains(e.target) && c(null)
  }
  return (
    a(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', v),
        function() {
          window.removeEventListener('click', v)
        }
      )
    }),
    e.createElement(
      Zt,
      {position: 'relative'},
      e.createElement(
        Ut,
        {gridTemplateColumns: '194px 39px 194px'},
        e.createElement(rn, {
          id: 'startDate',
          ariaLabel: g.startDateAriaLabel,
          placeholder: g.startDatePlaceholder,
          value: Vt(n, m, ''),
          onClick: function() {
            return c(Wt)
          },
        }),
        e.createElement(
          Xt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Pn, {width: '15px', height: '12px', color: '#ffffff', opacity: 0.4}),
        ),
        e.createElement(rn, {
          id: 'startDate',
          ariaLabel: g.endDateAriaLabel,
          placeholder: g.endDatePlaceholder,
          value: Vt(r, m, ''),
          onClick: function() {
            return c(Rt)
          },
        }),
      ),
      e.createElement(
        Zt,
        {ref: y, position: 'absolute', bottom: '64px', left: '0'},
        null !== f &&
          e.createElement(zn, {
            startDate: n,
            endDate: r,
            minBookingDate: i,
            maxBookingDate: u,
            firstDayOfWeek: s,
            numberOfMonths: l,
            focusedInput: f,
            displayFormat: m,
            onDateChange: p,
          }),
      ),
    )
  )
}
export {An as DateRangeInput}
