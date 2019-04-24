import e, {useContext as n, useMemo as t, useRef as r, useEffect as o} from 'react'
import a, {ThemeContext as i, css as l} from 'styled-components'
import {
  useMonth as c,
  useDatepicker as s,
  getInputValue as p,
  START_DATE as d,
  END_DATE as u,
} from '@datepicker-react/hooks'
var f = function() {
  return (f =
    Object.assign ||
    function(e) {
      for (var n, t = 1, r = arguments.length; t < r; t++)
        for (var o in (n = arguments[t]))
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
      return e
    }).apply(this, arguments)
}
function m(e, n) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: n}) : (e.raw = n), e
}
function y() {
  return (y =
    Object.assign ||
    function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n]
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
      }
      return e
    }).apply(this, arguments)
}
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function g(e, n) {
  return e((n = {exports: {}}), n.exports), n.exports
}
var b = g(function(e, n) {
  Object.defineProperty(n, '__esModule', {value: !0})
  var t = 'function' == typeof Symbol && Symbol.for,
    r = t ? Symbol.for('react.element') : 60103,
    o = t ? Symbol.for('react.portal') : 60106,
    a = t ? Symbol.for('react.fragment') : 60107,
    i = t ? Symbol.for('react.strict_mode') : 60108,
    l = t ? Symbol.for('react.profiler') : 60114,
    c = t ? Symbol.for('react.provider') : 60109,
    s = t ? Symbol.for('react.context') : 60110,
    p = t ? Symbol.for('react.async_mode') : 60111,
    d = t ? Symbol.for('react.concurrent_mode') : 60111,
    u = t ? Symbol.for('react.forward_ref') : 60112,
    f = t ? Symbol.for('react.suspense') : 60113,
    m = t ? Symbol.for('react.memo') : 60115,
    y = t ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var n = e.$$typeof
      switch (n) {
        case r:
          switch ((e = e.type)) {
            case p:
            case d:
            case a:
            case l:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case s:
                case u:
                case c:
                  return e
                default:
                  return n
              }
          }
        case y:
        case m:
        case o:
          return n
      }
    }
  }
  function g(e) {
    return h(e) === d
  }
  ;(n.typeOf = h),
    (n.AsyncMode = p),
    (n.ConcurrentMode = d),
    (n.ContextConsumer = s),
    (n.ContextProvider = c),
    (n.Element = r),
    (n.ForwardRef = u),
    (n.Fragment = a),
    (n.Lazy = y),
    (n.Memo = m),
    (n.Portal = o),
    (n.Profiler = l),
    (n.StrictMode = i),
    (n.Suspense = f),
    (n.isValidElementType = function(e) {
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
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === u))
      )
    }),
    (n.isAsyncMode = function(e) {
      return g(e) || h(e) === p
    }),
    (n.isConcurrentMode = g),
    (n.isContextConsumer = function(e) {
      return h(e) === s
    }),
    (n.isContextProvider = function(e) {
      return h(e) === c
    }),
    (n.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (n.isForwardRef = function(e) {
      return h(e) === u
    }),
    (n.isFragment = function(e) {
      return h(e) === a
    }),
    (n.isLazy = function(e) {
      return h(e) === y
    }),
    (n.isMemo = function(e) {
      return h(e) === m
    }),
    (n.isPortal = function(e) {
      return h(e) === o
    }),
    (n.isProfiler = function(e) {
      return h(e) === l
    }),
    (n.isStrictMode = function(e) {
      return h(e) === i
    }),
    (n.isSuspense = function(e) {
      return h(e) === f
    })
})
h(b)
b.typeOf,
  b.AsyncMode,
  b.ConcurrentMode,
  b.ContextConsumer,
  b.ContextProvider,
  b.Element,
  b.ForwardRef,
  b.Fragment,
  b.Lazy,
  b.Memo,
  b.Portal,
  b.Profiler,
  b.StrictMode,
  b.Suspense,
  b.isValidElementType,
  b.isAsyncMode,
  b.isConcurrentMode,
  b.isContextConsumer,
  b.isContextProvider,
  b.isElement,
  b.isForwardRef,
  b.isFragment,
  b.isLazy,
  b.isMemo,
  b.isPortal,
  b.isProfiler,
  b.isStrictMode,
  b.isSuspense
var v = g(function(e, n) {})
h(v)
v.typeOf,
  v.AsyncMode,
  v.ConcurrentMode,
  v.ContextConsumer,
  v.ContextProvider,
  v.Element,
  v.ForwardRef,
  v.Fragment,
  v.Lazy,
  v.Memo,
  v.Portal,
  v.Profiler,
  v.StrictMode,
  v.Suspense,
  v.isValidElementType,
  v.isAsyncMode,
  v.isConcurrentMode,
  v.isContextConsumer,
  v.isContextProvider,
  v.isElement,
  v.isForwardRef,
  v.isFragment,
  v.isLazy,
  v.isMemo,
  v.isPortal,
  v.isProfiler,
  v.isStrictMode,
  v.isSuspense,
  g(function(e) {
    e.exports = b
  })
var x = Object.getOwnPropertySymbols,
  k = Object.prototype.hasOwnProperty,
  C = Object.prototype.propertyIsEnumerable
;(function() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
    for (var n = {}, t = 0; t < 10; t++) n['_' + String.fromCharCode(t)] = t
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(n)
        .map(function(e) {
          return n[e]
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
var S = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function D() {}
function w() {}
w.resetWarningCache = D
var E,
  F,
  O,
  z = g(function(e) {
    e.exports = (function() {
      function e(e, n, t, r, o, a) {
        if (a !== S) {
          var i = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          )
          throw ((i.name = 'Invariant Violation'), i)
        }
      }
      function n() {
        return e
      }
      e.isRequired = e
      var t = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: n,
        element: e,
        elementType: e,
        instanceOf: n,
        node: e,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
        checkPropTypes: w,
        resetWarningCache: D,
      }
      return (t.PropTypes = t), t
    })()
  }),
  B = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  L = z.oneOfType([z.number, z.string, z.array, z.object]),
  M = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  P = function(e) {
    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      t[r - 1] = arguments[r]
    var o = t.reduce(function(n, t) {
      return T(n)
        ? n
        : ('string' == typeof t ? t.split('.') : [t]).reduce(function(e, n) {
            return e && T(e[n]) ? e[n] : null
          }, e)
    }, null)
    return T(o) ? o : t[t.length - 1]
  },
  T = function(e) {
    return null != e
  },
  H = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  W = function(e) {
    return H(e) && 0 !== e ? e + 'px' : e
  },
  V = function(e) {
    return '@media screen and (min-width: ' + W(e) + ')'
  },
  j = function(e, n) {
    return P(n, e)
  },
  A = function(e) {
    var n,
      t = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      l = void 0 === i ? j : i,
      c = e.scale,
      s = void 0 === c ? {} : c,
      p = r || t,
      d = function(e) {
        var n = P(e, t, o, null)
        if (!T(n)) return null
        var r,
          i = P(e.theme, a, s),
          c = function(e) {
            var n
            return T(e) ? (((n = {})[p] = l(e, i)), n) : null
          }
        if ('object' != typeof (r = n) || null === r) return c(n)
        var d = P(e.theme, 'breakpoints', B),
          u = []
        if (Array.isArray(n)) {
          u.push(c(n[0]))
          for (var f = 1; f < n.slice(0, d.length + 1).length; f++) {
            var m = c(n[f])
            if (m) {
              var y,
                h = V(d[f - 1])
              u.push((((y = {})[h] = m), y))
            }
          }
        } else {
          for (var g in n) {
            var b,
              v = d[g],
              x = V(v),
              k = c(n[g])
            if (v) u.push((((b = {})[x] = k), b))
            else u.unshift(k)
          }
          u.sort()
        }
        return u
      }
    return (
      ((d.propTypes = (((n = {})[t] = M(L)), n))[t].meta = {prop: t, themeKey: a}),
      o && ((d.propTypes[o] = M(L)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  I = function() {
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
    var r = function(e) {
      return n
        .map(function(n) {
          return n(e)
        })
        .filter(Boolean)
    }
    return (
      (r.propTypes = {}),
      n.forEach(function(e) {
        r.propTypes = y({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  R = function(e) {
    return function(n) {
      var t = function(t) {
        return n(e(t))
      }
      for (var r in n) t[r] = n[r]
      return t
    }
  },
  _ = function(e) {
    var n,
      t = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return P(e.theme, [t, e[o]].join('.'), null)
      }
    return (a.propTypes = (((n = {})[o] = z.oneOfType([z.number, z.string])), n)), a
  },
  N = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  $ = function(e, n) {
    if (!H(e)) return W(P(n, e, e))
    var t = e < 0,
      r = Math.abs(e),
      o = P(n, r)
    return H(o) ? W(o * (t ? -1 : 1)) : t ? '-' + o : o
  },
  G = A({prop: 'margin', alias: 'm', key: 'space', transformValue: $, scale: N}),
  Y = A({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: $, scale: N}),
  U = A({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: $, scale: N}),
  q = A({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: $, scale: N}),
  K = A({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: $, scale: N}),
  J = A({prop: 'padding', alias: 'p', key: 'space', transformValue: $, scale: N}),
  Q = A({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: $, scale: N}),
  X = A({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: $, scale: N}),
  Z = A({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: $, scale: N}),
  ee = A({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: $, scale: N}),
  ne = R(function(e) {
    return y({}, e, {
      mt: T(e.my) ? e.my : e.mt,
      mb: T(e.my) ? e.my : e.mb,
      ml: T(e.mx) ? e.mx : e.ml,
      mr: T(e.mx) ? e.mx : e.mr,
      pt: T(e.py) ? e.py : e.pt,
      pb: T(e.py) ? e.py : e.pb,
      pl: T(e.px) ? e.px : e.pl,
      pr: T(e.px) ? e.px : e.pr,
    })
  })(I(G, Y, U, q, K, J, Q, X, Z, ee)),
  te = I(
    A({prop: 'color', key: 'colors'}),
    A({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  re = function(e, n) {
    return !H(e) || e > 1 ? W(e) : 100 * e + '%'
  },
  oe = A({prop: 'width', key: 'widths', transformValue: re}),
  ae = function(e, n) {
    return W(P(n, e))
  },
  ie = A({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: ae,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  le = A({prop: 'fontFamily', key: 'fonts'}),
  ce = A({prop: 'fontWeight', key: 'fontWeights'}),
  se = A({prop: 'lineHeight', key: 'lineHeights'}),
  pe = (A({prop: 'textAlign'}),
  A({prop: 'fontStyle'}),
  A({prop: 'letterSpacing', key: 'letterSpacings', transformValue: ae}),
  A({prop: 'display'})),
  de = (A({prop: 'maxWidth', key: 'maxWidths', transformValue: ae}),
  A({prop: 'minWidth', key: 'minWidths', transformValue: ae}),
  A({prop: 'height', key: 'heights', transformValue: ae})),
  ue = (A({prop: 'maxHeight', key: 'maxHeights', transformValue: ae}),
  A({prop: 'minHeight', key: 'minHeights', transformValue: ae})),
  fe = (R(function(e) {
    return y({}, e, {width: e.size, height: e.size})
  })(I(oe, de)),
  A({prop: 'verticalAlign'}),
  A({prop: 'alignItems'})),
  me = (A({prop: 'alignContent'}), A({prop: 'justifyItems'}), A({prop: 'justifyContent'})),
  ye = A({prop: 'flexWrap'}),
  he = (A({prop: 'flexBasis', transformValue: re}), A({prop: 'flexDirection'})),
  ge = A({prop: 'flex'}),
  be = (A({prop: 'justifySelf'}),
  A({prop: 'alignSelf'}),
  A({prop: 'order'}),
  A({prop: 'gridGap', key: 'space', transformValue: ae, scale: N})),
  ve = A({prop: 'gridColumnGap', key: 'space', transformValue: ae, scale: N}),
  xe = A({prop: 'gridRowGap', key: 'space', transformValue: ae, scale: N}),
  ke = (A({prop: 'gridColumn'}), A({prop: 'gridRow'}), A({prop: 'gridAutoFlow'})),
  Ce = A({prop: 'gridAutoColumns'}),
  Se = A({prop: 'gridAutoRows'}),
  De = A({prop: 'gridTemplateColumns'}),
  we = A({prop: 'gridTemplateRows'}),
  Ee = A({prop: 'gridTemplateAreas'}),
  Fe = A({prop: 'gridArea'}),
  Oe = A({prop: 'border', key: 'borders'}),
  ze = A({prop: 'borderWidth', key: 'borderWidths', transformValue: ae}),
  Be = A({prop: 'borderStyle', key: 'borderStyles'}),
  Le = A({prop: 'borderColor', key: 'colors'}),
  Me = A({prop: 'borderTop', key: 'borders'}),
  Pe = A({prop: 'borderRight', key: 'borders'}),
  Te = A({prop: 'borderBottom', key: 'borders'}),
  He = A({prop: 'borderLeft', key: 'borders'}),
  We = A({prop: 'borderRadius', key: 'radii', transformValue: ae}),
  Ve = (I(Oe, Me, Pe, Te, He, ze, Be, Le, We), A({prop: 'boxShadow', key: 'shadows'})),
  je = A({prop: 'opacity'}),
  Ae = (A({prop: 'overflow'}), A({prop: 'background'})),
  Ie = (A({prop: 'backgroundImage'}),
  A({prop: 'backgroundSize'}),
  A({prop: 'backgroundPosition'}),
  A({prop: 'backgroundRepeat'}),
  A({prop: 'position'})),
  Re = A({prop: 'zIndex', key: 'zIndices'}),
  _e = A({prop: 'top', transformValue: ae}),
  Ne = A({prop: 'right', transformValue: ae}),
  $e = A({prop: 'bottom', transformValue: ae}),
  Ge = A({prop: 'left', transformValue: ae}),
  Ye = (_({key: 'buttons'}),
  _({key: 'textStyles', prop: 'textStyle'}),
  _({key: 'colorStyles', prop: 'colors'}),
  {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  }),
  Ue = f({}, Ye, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  qe = a('div')(
    E ||
      (E = m(
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
    Ce,
    ke,
    Se,
    ve,
    be,
    xe,
    Ee,
    De,
    we,
    fe,
    me,
    ne,
  ),
  Ke = a('div')(
    F ||
      (F = m(
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
    ne,
    ge,
    ye,
    he,
    fe,
    me,
    Fe,
    de,
    oe,
  ),
  Je = a('div')(
    O ||
      (O = m(
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
    Fe,
    de,
    ne,
    oe,
    Ie,
    _e,
    Ge,
    Ne,
    $e,
    Re,
  )
function Qe(n) {
  var t = n.height,
    r = n.width,
    o = n.color,
    a = n.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: t,
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
var Xe,
  Ze,
  en,
  nn = a('label')(
    Xe ||
      (Xe = m(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ie,
    Oe,
    Ae,
    pe,
    We,
    ne,
  ),
  tn = a('div')(
    Ze ||
      (Ze = m(
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
    Ie,
    Ge,
    _e,
    de,
    oe,
  ),
  rn = a('input')(
    en ||
      (en = m(
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
    Ae,
    ne,
    le,
    ie,
    te,
    ce,
    ne,
    Oe,
    oe,
    ue,
  )
function on(n) {
  var t = n.placeholder,
    r = n.id,
    o = n.ariaLabel,
    a = n.onClick,
    i = n.value,
    l = n.showCalendarIcon,
    c = n.inputBorder,
    s = n.inputMinHeight,
    p = n.inputPadding,
    d = n.calendarWrapperTop
  return e.createElement(
    nn,
    {
      htmlFor: r,
      display: 'block',
      position: 'relative',
      border: c || '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      mb: '0',
    },
    l &&
      e.createElement(
        tn,
        {position: 'absolute', height: '12px', width: '12px', top: d || '16px', left: '16px'},
        e.createElement(Qe, {width: '12px', height: '12px', color: '#BCBEC0'}),
      ),
    e.createElement(rn, {
      border: '0',
      p: p || '0 44px',
      width: '100%',
      minHeight: s || '46px',
      background: '#ffffff',
      fontFamily: 'Montserrat',
      color: '#001217',
      fontSize: '14px',
      fontWeight: 600,
      id: r,
      placeholder: t,
      'aria-label': o,
      value: i,
      autoComplete: 'off',
      readOnly: !0,
      onFocus: a,
    }),
  )
}
function an(n) {
  var t = n.height,
    r = n.width,
    o = n.iconColor,
    a = n.direction,
    i = void 0 === a ? 'right' : a,
    l = n.className,
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
      height: t,
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
function ln(e) {
  void 0 === e && (e = {})
  var r = n(i)
  return t(
    function() {
      return r && 'object' == typeof r && r.reactDatepicker && 'object' == typeof r.reactDatepicker
        ? Object.keys(e).reduce(function(n, t) {
            var o
            return f({}, n, (((o = {})[t] = r.reactDatepicker[t] || e[t]), o))
          }, {})
        : e
    },
    [r, e],
  )
}
var cn,
  sn,
  pn,
  dn = {
    fontFamily: 'Montserrat, sans-serif',
    colors: {
      silverCloud: '#929598',
      charcoal: '#001217',
      darcula: '#343132',
      mud: '#58595B',
      greey: '#808285',
    },
  },
  un = a('div')(
    cn ||
      (cn = m(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    le,
    ie,
    ce,
    te,
    se,
    ne,
  ),
  fn = a(un)(
    pn ||
      (pn = m(
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
          sn ||
            (sn = m(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function mn(n) {
  var t = n.title,
    r = n.isActive,
    o = n.date,
    a = ln({
      fontFamily: dn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: dn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: dn.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    Je,
    {p: a.selectDatePadding},
    e.createElement(
      un,
      {
        fontFamily: a.fontFamily,
        fontSize: a.selectDateLabelFontSize,
        color: a.selectDateLabelColor,
        m: a.selectDateLabelMargin,
      },
      t,
    ),
    e.createElement(
      fn,
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
var yn = function(n) {
    var t = n.label,
      r = ln({
        fontFamily: dn.fontFamily,
        monthLabelColor: dn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      un,
      {
        fontFamily: r.fontFamily,
        fontSize: r.monthLabelFontSize,
        fontWeight: r.monthLabelFontWeight,
        lineHeight: r.monthLabelLineHeight,
        color: r.monthLabelColor,
      },
      t,
    )
  },
  hn = function(n) {
    var t = n.label,
      r = ln({
        fontFamily: dn.fontFamily,
        dayLabelColor: dn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      un,
      {
        fontFamily: r.fontFamily,
        fontSize: r.dayLabelFontSize,
        fontWeight: r.dayLabelFontWeight,
        color: r.dayLabelColor,
      },
      t,
    )
  },
  gn = A({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  bn = A({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  vn = A({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  xn = A({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  kn = A({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Cn = A({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Sn = a('button')(
    zn ||
      (zn = m(
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
    gn,
    bn,
    Ve,
    Ae,
    te,
    le,
    ce,
    ie,
    function(e) {
      return (
        e.disabled &&
        l(
          wn ||
            (wn = m(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var n = e.disabled,
        t = e.isActive,
        r = e.isStartOrEnd
      return n || t || r
        ? t && !r
          ? l(
              Fn ||
                (Fn = m(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Cn,
              xn,
            )
          : ''
        : l(
            En ||
              (En = m(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            kn,
            vn,
          )
    },
    function(e) {
      var n = e.borderAccessibility
      return l(
        On ||
          (On = m(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        n,
      )
    },
  )
function Dn(e, n, t) {
  var r = t.selectedFirstOrLast,
    o = t.normal,
    a = t.selected
  return n ? r : e ? a : o
}
var wn,
  En,
  Fn,
  On,
  zn,
  Bn = e.memo(function(n) {
    var r = n.day,
      o = n.isActive,
      a = n.isStartOrEnd,
      i = n.disabled,
      l = n.onDaySelect,
      c = n.date,
      s = n.daySize,
      p = ln({
        fontFamily: dn.fontFamily,
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
        borderColor: '#e6e7e8',
        borderSelectedColor: '#71c9ed',
        borderSelectedFirstOrLastColor: '#00aeef',
        borderAccessibility: '#009fef',
      }),
      d = t(
        function() {
          return Dn(o, a, {
            selectedFirstOrLast: p.borderSelectedFirstOrLastColor,
            selected: p.borderSelectedColor,
            normal: p.borderColor,
          })
        },
        [o, a, p],
      ),
      u = t(
        function() {
          return Dn(o, a, {
            selectedFirstOrLast: p.daySelectedFirstOrLastBackground,
            selected: p.daySelectedBackground,
            normal: p.dayBackground,
          })
        },
        [o, a, p],
      ),
      f = t(
        function() {
          return Dn(o, a, {
            selectedFirstOrLast: p.daySelectedFirstOrLastColor,
            selected: p.daySelectedColor,
            normal: p.dayColor,
          })
        },
        [o, a, p],
      )
    return e.createElement(
      Sn,
      {
        role: 'button',
        onClick: function() {
          return l(c)
        },
        disabled: i,
        isActive: o,
        isStartOrEnd: a,
        dayHeight: s,
        dayWidth: s,
        background: u,
        color: f,
        fontFamily: p.fontFamily,
        fontWeight: p.dayFontWeight,
        fontSize: p.dayFontSize,
        daySelectedHoverBackground: p.daySelectedHoverBackground,
        dayHoverBackground: p.dayHoverBackground,
        dayHoverColor: p.dayHoverColor,
        daySelectedHoverColor: p.daySelectedHoverColor,
        borderAccessibility: p.borderAccessibility,
        boxShadow:
          '1px 0 0 0 ' +
          d +
          ',\n        0 1px 0 0 ' +
          d +
          ',\n        1px 1px 0 0 ' +
          d +
          ',\n        1px 0 0 0 ' +
          d +
          ' inset,\n        0 1px 0 0 ' +
          d +
          ' inset',
      },
      e.createElement(
        Ke,
        {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
        r,
      ),
    )
  }),
  Ln = function(n) {
    var t = n.year,
      r = n.month,
      o = n.firstDayOfWeek,
      a = n.isDateBlocked,
      i = n.isDateSelected,
      l = n.isStartOrEndDate,
      s = n.onDaySelect,
      p = n.daySize,
      d = void 0 === p ? 45 : p,
      u = c({year: t, month: r, weekStartsOn: o}),
      f = u.days,
      m = u.weekDays,
      y = u.monthLabel
    return e.createElement(
      'div',
      null,
      e.createElement(Ke, {justifyContent: 'center', mb: '28px'}, e.createElement(yn, {label: y})),
      e.createElement(
        qe,
        {gridTemplateColumns: 'repeat(7, ' + d + 'px)'},
        m.map(function(n) {
          return e.createElement(
            Ke,
            {key: n, justifyContent: 'center', mb: '16px'},
            e.createElement(hn, {label: n}),
          )
        }),
      ),
      e.createElement(
        qe,
        {gridTemplateColumns: 'repeat(7, ' + d + 'px)'},
        f.map(function(n, t) {
          return 'object' == typeof n
            ? e.createElement(Bn, {
                isActive: i(n.date),
                date: n.date,
                key: n.day,
                day: n.day,
                disabled: a(n.date),
                isStartOrEnd: l(n.date),
                onDaySelect: s,
                daySize: d,
              })
            : e.createElement('div', {key: t})
        }),
      ),
    )
  }
function Mn(n) {
  var t = n.height,
    r = n.width,
    o = n.color,
    a = n.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: t,
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
var Pn,
  Tn = a('button')(
    Pn ||
      (Pn = m(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function Hn(n) {
  var t = n.onResetDates,
    o = n.text,
    a = r(null),
    i = ln({
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
    Tn,
    {
      onClick: t,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(Mn, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
    }),
    e.createElement(
      un,
      {
        m: i.resetDatesTextMargin,
        lineHeight: i.resetDatesTextLineHeight,
        fontFamily: i.fontFamily,
        fontSize: i.resetDatesTextFontSize,
        color: i.resetDatesTextColor,
      },
      o,
    ),
  )
}
var Wn,
  Vn,
  jn = a('svg')(Vn || (Vn = m(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var n = e.angle
    return l(
      Wn ||
        (Wn = m(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      n,
    )
  })
function An(n) {
  var t = n.height,
    r = n.width,
    o = n.color,
    a = n.direction,
    i = void 0 === a ? 'right' : a,
    l = n.className,
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
    jn,
    {
      width: r,
      height: t,
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
var In,
  Rn = a('button')(
    In ||
      (In = m(
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
    oe,
    de,
    Ae,
    ne,
    Oe,
  )
function _n(n) {
  var t = n.type,
    o = n.onClick,
    a = r(null),
    i = ln({
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
    Rn,
    {
      width: i.navButtonWidth,
      height: i.navButtonHeight,
      background: i.navButtonBackground,
      border: i.navButtonBorder,
      p: i.navButtonPadding,
      type: 'button',
      onClick: o,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(An, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: 'next' === t ? 'right' : 'left',
    }),
  )
}
function Nn(n) {
  var t = n.height,
    r = n.width,
    o = n.color,
    a = n.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: t,
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
var $n,
  Gn,
  Yn = a('div')(
    $n ||
      ($n = m(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  Un = a('button')(
    Gn ||
      (Gn = m(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    Yn,
  )
function qn(n) {
  var t = n.onClick
  return e.createElement(
    Un,
    {onClick: t},
    e.createElement(Nn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(Yn, null, 'Close'),
  )
}
var Kn,
  Jn,
  Qn = a('div')(
    Kn || (Kn = m(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n'])),
    Ae,
    ne,
    We,
    Ie,
  ),
  Xn = a('div')(
    Jn ||
      (Jn = m(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function Zn(n) {
  var t = n.startDate,
    r = n.endDate,
    o = n.minBookingDate,
    a = n.maxBookingDate,
    i = n.focusedInput,
    l = n.onDateChange,
    c = n.onClose,
    f = void 0 === c ? function() {} : c,
    m = n.numberOfMonths,
    y = n.firstDayOfWeek,
    h = n.displayFormat,
    g = void 0 === h ? 'MM/DD/YYYY' : h,
    b = n.phrases,
    v = void 0 === b ? Ye : b,
    x = n.styles,
    k = void 0 === x ? {} : x,
    C = s({
      startDate: t,
      endDate: r,
      focusedInput: i,
      onDateChange: l,
      minBookingDate: o,
      maxBookingDate: a,
      numberOfMonths: m,
      firstDayOfWeek: y,
    }),
    S = C.activeMonths,
    D = C.isDateSelected,
    w = C.isStartOrEndDate,
    E = C.isDateBlocked,
    F = C.firstDayOfWeek,
    O = C.onDaySelect,
    z = C.onResetDates,
    B = C.goToPreviousMonths,
    L = C.goToNextMonths,
    M = C.numberOfMonths
  return e.createElement(
    Qn,
    {background: '#ffffff', p: '32px', borderRadius: '2px', position: 'relative'},
    e.createElement(
      Je,
      {position: 'absolute', right: '32px', zIndex: 1},
      e.createElement(qn, {onClick: f}),
    ),
    e.createElement(
      Xn,
      null,
      e.createElement(
        qe,
        {gridTemplateColumns: k.selectDateGridTemplateColumns || '126px 75px 126px'},
        e.createElement(mn, {
          title: v.datepickerStartDateLabel,
          date: p(t, g, v.datepickerStartDatePlaceholder),
          isActive: i === d,
        }),
        e.createElement(
          Ke,
          {justifyContent: 'center', alignItems: 'center'},
          e.createElement(an, {height: '12px', width: '15px', iconColor: '#929598'}),
        ),
        e.createElement(mn, {
          title: v.datepickerEndDateLabel,
          date: p(r, g, v.datepickerEndDatePlaceholder),
          isActive: i === u,
        }),
      ),
    ),
    e.createElement(
      Je,
      {mt: '28px', position: 'relative'},
      e.createElement(
        Je,
        {position: 'absolute', top: '-5px', left: '0'},
        e.createElement(_n, {type: 'prev', onClick: B}),
      ),
      e.createElement(
        Je,
        {position: 'absolute', top: '-5px', right: '0'},
        e.createElement(_n, {type: 'next', onClick: L}),
      ),
      e.createElement(
        qe,
        {gridTemplateColumns: 'repeat(' + M + ', 1fr)', gridGap: '0 32px'},
        S.map(function(n) {
          return e.createElement(Ln, {
            key: n.year + '-' + n.month,
            year: n.year,
            month: n.month,
            firstDayOfWeek: F,
            isDateBlocked: E,
            isDateSelected: D,
            isStartOrEndDate: w,
            onDaySelect: O,
          })
        }),
      ),
    ),
    e.createElement(Je, {mt: '32px'}, e.createElement(Hn, {onResetDates: z, text: v.resetDates})),
  )
}
var et,
  nt,
  tt = a(an)(et || (et = m(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), je, te),
  rt = a(qe)(
    nt || (nt = m(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ae,
    Oe,
    We,
  )
function ot(n) {
  var t = n.startDate,
    a = n.endDate,
    i = n.minBookingDate,
    l = n.maxBookingDate,
    c = n.firstDayOfWeek,
    s = n.onFocusChange,
    f = n.numberOfMonths,
    m = n.focusedInput,
    y = n.onDateChange,
    h = n.onClose,
    g = void 0 === h ? function() {} : h,
    b = n.showStartDateCalendarIcon,
    v = void 0 === b || b,
    x = n.showEndDateCalendarIcon,
    k = void 0 === x || x,
    C = n.styles,
    S = void 0 === C ? {} : C,
    D = n.displayFormat,
    w = void 0 === D ? 'MM/DD/YYYY' : D,
    E = n.phrases,
    F = void 0 === E ? Ue : E,
    O = r(null)
  function z(e) {
    null !== m && O && O.current && !O.current.contains(e.target) && s(null)
  }
  return (
    o(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', z),
        function() {
          window.removeEventListener('click', z)
        }
      )
    }),
    e.createElement(
      Je,
      {position: 'relative', ref: O},
      e.createElement(
        rt,
        {
          background: S.inputGridBackground || 'transparent',
          gridTemplateColumns: S.inputGridTemplateColumns || '194px 39px 194px',
          border: S.inputGridBorder || '0',
          borderRadius: S.inputGridBorderRadius || '0',
        },
        e.createElement(on, {
          id: 'startDate',
          ariaLabel: F.startDateAriaLabel,
          placeholder: F.startDatePlaceholder,
          value: p(t, w, ''),
          onClick: function() {
            return s(d)
          },
          showCalendarIcon: v,
          inputBorder: S.inputBorder,
          inputMinHeight: S.inputMinHeight,
          inputPadding: S.inputStartDatePadding || S.inputPadding,
          calendarWrapperTop: S.inputCalendarWrapperTop,
        }),
        e.createElement(
          Ke,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(tt, {
            width: '15px',
            height: '12px',
            color: S.inputArrowIconColor || '#ffffff',
            opacity: S.inputArrowIconOpacity || 0.4,
          }),
        ),
        e.createElement(on, {
          id: 'startDate',
          ariaLabel: F.endDateAriaLabel,
          placeholder: F.endDatePlaceholder,
          value: p(a, w, ''),
          onClick: function() {
            return s(t ? u : d)
          },
          showCalendarIcon: k,
          inputBorder: S.inputBorder,
          inputMinHeight: S.inputMinHeight,
          calendarWrapperTop: S.inputCalendarWrapperTop,
          inputPadding: S.inputEndDatePadding || S.inputPadding,
        }),
      ),
      e.createElement(
        Je,
        {position: 'absolute', bottom: S.datepickerBottom || '65px', left: S.datepickerLeft || '0'},
        null !== m &&
          e.createElement(Zn, {
            onClose: function() {
              g(), s(null)
            },
            startDate: t,
            endDate: a,
            minBookingDate: i,
            maxBookingDate: l,
            firstDayOfWeek: c,
            numberOfMonths: f,
            focusedInput: m,
            displayFormat: w,
            onDateChange: y,
            styles: {
              daySize: S.daySize,
              selectDateGridTemplateColumns: S.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
export {ot as DateRangeInput, Zn as Datepicker}
