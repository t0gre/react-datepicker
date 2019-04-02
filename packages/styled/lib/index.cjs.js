'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var React = require('react'),
  React__default = _interopDefault(React),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled),
  __assign = function() {
    return (__assign =
      Object.assign ||
      function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var a in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
        return e
      }).apply(this, arguments)
  }
function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function _extends() {
  return (_extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function unwrapExports(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function createCommonjsModule(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var reactIs_production_min = createCommonjsModule(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    a = n ? Symbol.for('react.portal') : 60106,
    o = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    c = n ? Symbol.for('react.profiler') : 60114,
    l = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    d = n ? Symbol.for('react.forward_ref') : 60112,
    m = n ? Symbol.for('react.suspense') : 60113,
    f = n ? Symbol.for('react.memo') : 60115,
    _ = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case u:
            case p:
            case o:
            case c:
            case i:
            case m:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case s:
                case d:
                case l:
                  return e
                default:
                  return t
              }
          }
        case _:
        case f:
        case a:
          return t
      }
    }
  }
  function y(e) {
    return g(e) === p
  }
  ;(t.typeOf = g),
    (t.AsyncMode = u),
    (t.ConcurrentMode = p),
    (t.ContextConsumer = s),
    (t.ContextProvider = l),
    (t.Element = r),
    (t.ForwardRef = d),
    (t.Fragment = o),
    (t.Lazy = _),
    (t.Memo = f),
    (t.Portal = a),
    (t.Profiler = c),
    (t.StrictMode = i),
    (t.Suspense = m),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === o ||
        e === p ||
        e === c ||
        e === i ||
        e === m ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === _ ||
            e.$$typeof === f ||
            e.$$typeof === l ||
            e.$$typeof === s ||
            e.$$typeof === d))
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
      return g(e) === l
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return g(e) === d
    }),
    (t.isFragment = function(e) {
      return g(e) === o
    }),
    (t.isLazy = function(e) {
      return g(e) === _
    }),
    (t.isMemo = function(e) {
      return g(e) === f
    }),
    (t.isPortal = function(e) {
      return g(e) === a
    }),
    (t.isProfiler = function(e) {
      return g(e) === c
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === m
    })
})
unwrapExports(reactIs_production_min)
var reactIs_production_min_1 = reactIs_production_min.typeOf,
  reactIs_production_min_2 = reactIs_production_min.AsyncMode,
  reactIs_production_min_3 = reactIs_production_min.ConcurrentMode,
  reactIs_production_min_4 = reactIs_production_min.ContextConsumer,
  reactIs_production_min_5 = reactIs_production_min.ContextProvider,
  reactIs_production_min_6 = reactIs_production_min.Element,
  reactIs_production_min_7 = reactIs_production_min.ForwardRef,
  reactIs_production_min_8 = reactIs_production_min.Fragment,
  reactIs_production_min_9 = reactIs_production_min.Lazy,
  reactIs_production_min_10 = reactIs_production_min.Memo,
  reactIs_production_min_11 = reactIs_production_min.Portal,
  reactIs_production_min_12 = reactIs_production_min.Profiler,
  reactIs_production_min_13 = reactIs_production_min.StrictMode,
  reactIs_production_min_14 = reactIs_production_min.Suspense,
  reactIs_production_min_15 = reactIs_production_min.isValidElementType,
  reactIs_production_min_16 = reactIs_production_min.isAsyncMode,
  reactIs_production_min_17 = reactIs_production_min.isConcurrentMode,
  reactIs_production_min_18 = reactIs_production_min.isContextConsumer,
  reactIs_production_min_19 = reactIs_production_min.isContextProvider,
  reactIs_production_min_20 = reactIs_production_min.isElement,
  reactIs_production_min_21 = reactIs_production_min.isForwardRef,
  reactIs_production_min_22 = reactIs_production_min.isFragment,
  reactIs_production_min_23 = reactIs_production_min.isLazy,
  reactIs_production_min_24 = reactIs_production_min.isMemo,
  reactIs_production_min_25 = reactIs_production_min.isPortal,
  reactIs_production_min_26 = reactIs_production_min.isProfiler,
  reactIs_production_min_27 = reactIs_production_min.isStrictMode,
  reactIs_production_min_28 = reactIs_production_min.isSuspense,
  reactIs_development = createCommonjsModule(function(e, t) {})
unwrapExports(reactIs_development)
var reactIs_development_1 = reactIs_development.typeOf,
  reactIs_development_2 = reactIs_development.AsyncMode,
  reactIs_development_3 = reactIs_development.ConcurrentMode,
  reactIs_development_4 = reactIs_development.ContextConsumer,
  reactIs_development_5 = reactIs_development.ContextProvider,
  reactIs_development_6 = reactIs_development.Element,
  reactIs_development_7 = reactIs_development.ForwardRef,
  reactIs_development_8 = reactIs_development.Fragment,
  reactIs_development_9 = reactIs_development.Lazy,
  reactIs_development_10 = reactIs_development.Memo,
  reactIs_development_11 = reactIs_development.Portal,
  reactIs_development_12 = reactIs_development.Profiler,
  reactIs_development_13 = reactIs_development.StrictMode,
  reactIs_development_14 = reactIs_development.Suspense,
  reactIs_development_15 = reactIs_development.isValidElementType,
  reactIs_development_16 = reactIs_development.isAsyncMode,
  reactIs_development_17 = reactIs_development.isConcurrentMode,
  reactIs_development_18 = reactIs_development.isContextConsumer,
  reactIs_development_19 = reactIs_development.isContextProvider,
  reactIs_development_20 = reactIs_development.isElement,
  reactIs_development_21 = reactIs_development.isForwardRef,
  reactIs_development_22 = reactIs_development.isFragment,
  reactIs_development_23 = reactIs_development.isLazy,
  reactIs_development_24 = reactIs_development.isMemo,
  reactIs_development_25 = reactIs_development.isPortal,
  reactIs_development_26 = reactIs_development.isProfiler,
  reactIs_development_27 = reactIs_development.isStrictMode,
  reactIs_development_28 = reactIs_development.isSuspense,
  reactIs = createCommonjsModule(function(e) {
    e.exports = reactIs_production_min
  }),
  getOwnPropertySymbols = Object.getOwnPropertySymbols,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  propIsEnumerable = Object.prototype.propertyIsEnumerable
function toObject(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function shouldUseNative() {
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
}
var objectAssign = shouldUseNative()
    ? Object.assign
    : function(e, t) {
        for (var n, r, a = toObject(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) hasOwnProperty.call(n, i) && (a[i] = n[i])
          if (getOwnPropertySymbols) {
            r = getOwnPropertySymbols(n)
            for (var c = 0; c < r.length; c++) propIsEnumerable.call(n, r[c]) && (a[r[c]] = n[r[c]])
          }
        }
        return a
      },
  ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ReactPropTypesSecret_1 = ReactPropTypesSecret,
  has = Function.call.bind(Object.prototype.hasOwnProperty)
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction
var factoryWithThrowingShims = function() {
    function e(e, t, n, r, a, o) {
      if (o !== ReactPropTypesSecret_1) {
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
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    }
    return (n.PropTypes = n), n
  },
  propTypes = createCommonjsModule(function(e) {
    e.exports = factoryWithThrowingShims()
  }),
  defaultBreakpoints = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  propType = propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array,
    propTypes.object,
  ]),
  cloneFunction = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  get = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var a = n.reduce(function(t, n) {
      return is(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && is(e[t]) ? e[t] : null
          }, e)
    }, null)
    return is(a) ? a : n[n.length - 1]
  },
  is = function(e) {
    return null != e
  },
  isObject = function(e) {
    return 'object' == typeof e && null !== e
  },
  num = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  px = function(e) {
    return num(e) && 0 !== e ? e + 'px' : e
  },
  createMediaQuery = function(e) {
    return '@media screen and (min-width: ' + px(e) + ')'
  },
  getValue = function(e, t) {
    return get(t, e)
  },
  style = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      a = e.alias,
      o = e.key,
      i = e.transformValue,
      c = void 0 === i ? getValue : i,
      l = e.scale,
      s = void 0 === l ? {} : l,
      u = r || n,
      p = function(e) {
        var t = get(e, n, a, null)
        if (!is(t)) return null
        var r = get(e.theme, o, s),
          i = function(e) {
            var t
            return is(e) ? (((t = {})[u] = c(e, r)), t) : null
          }
        if (!isObject(t)) return i(t)
        var l = get(e.theme, 'breakpoints', defaultBreakpoints),
          p = []
        if (Array.isArray(t)) {
          p.push(i(t[0]))
          for (var d = 1; d < t.slice(0, l.length + 1).length; d++) {
            var m = i(t[d])
            if (m) {
              var f,
                _ = createMediaQuery(l[d - 1])
              p.push((((f = {})[_] = m), f))
            }
          }
        } else {
          for (var g in t) {
            var y,
              h = l[g],
              b = createMediaQuery(h),
              v = i(t[g])
            if (h) p.push((((y = {})[b] = v), y))
            else p.unshift(v)
          }
          p.sort()
        }
        return p
      }
    return (
      ((p.propTypes = (((t = {})[n] = cloneFunction(propType)), t))[n].meta = {
        prop: n,
        themeKey: o,
      }),
      a &&
        ((p.propTypes[a] = cloneFunction(propType)),
        (p.propTypes[a].meta = {prop: a, themeKey: o})),
      p
    )
  },
  compose = function() {
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
        r.propTypes = _extends({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  mapProps = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  variant = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      a = void 0 === r ? 'variant' : r,
      o = function(e) {
        return get(e.theme, [n, e[a]].join('.'), null)
      }
    return (
      (o.propTypes = (((t = {})[a] = propTypes.oneOfType([propTypes.number, propTypes.string])),
      t)),
      o
    )
  },
  spaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  getSpace = function(e, t) {
    if (!num(e)) return px(get(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      a = get(t, r)
    return num(a) ? px(a * (n ? -1 : 1)) : n ? '-' + a : a
  },
  margin = style({
    prop: 'margin',
    alias: 'm',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  marginTop = style({
    prop: 'marginTop',
    alias: 'mt',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  marginBottom = style({
    prop: 'marginBottom',
    alias: 'mb',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  marginLeft = style({
    prop: 'marginLeft',
    alias: 'ml',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  marginRight = style({
    prop: 'marginRight',
    alias: 'mr',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  padding = style({
    prop: 'padding',
    alias: 'p',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  paddingTop = style({
    prop: 'paddingTop',
    alias: 'pt',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  paddingBottom = style({
    prop: 'paddingBottom',
    alias: 'pb',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  paddingLeft = style({
    prop: 'paddingLeft',
    alias: 'pl',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  paddingRight = style({
    prop: 'paddingRight',
    alias: 'pr',
    key: 'space',
    transformValue: getSpace,
    scale: spaceScale,
  }),
  space = mapProps(function(e) {
    return _extends({}, e, {
      mt: is(e.my) ? e.my : e.mt,
      mb: is(e.my) ? e.my : e.mb,
      ml: is(e.mx) ? e.mx : e.ml,
      mr: is(e.mx) ? e.mx : e.mr,
      pt: is(e.py) ? e.py : e.pt,
      pb: is(e.py) ? e.py : e.pb,
      pl: is(e.px) ? e.px : e.pl,
      pr: is(e.px) ? e.px : e.pr,
    })
  })(
    compose(
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    ),
  ),
  textColor = style({prop: 'color', key: 'colors'}),
  backgroundColor = style({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  color = compose(
    textColor,
    backgroundColor,
  ),
  getWidth = function(e, t) {
    return !num(e) || e > 1 ? px(e) : 100 * e + '%'
  },
  width = style({prop: 'width', key: 'widths', transformValue: getWidth}),
  getPx = function(e, t) {
    return px(get(t, e))
  },
  fontSize = style({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: getPx,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  fontFamily = style({prop: 'fontFamily', key: 'fonts'}),
  fontWeight = style({prop: 'fontWeight', key: 'fontWeights'}),
  lineHeight = style({prop: 'lineHeight', key: 'lineHeights'}),
  textAlign = style({prop: 'textAlign'}),
  fontStyle = style({prop: 'fontStyle'}),
  letterSpacing = style({prop: 'letterSpacing', key: 'letterSpacings', transformValue: getPx}),
  display = style({prop: 'display'}),
  maxWidth = style({prop: 'maxWidth', key: 'maxWidths', transformValue: getPx}),
  minWidth = style({prop: 'minWidth', key: 'minWidths', transformValue: getPx}),
  height = style({prop: 'height', key: 'heights', transformValue: getPx}),
  maxHeight = style({prop: 'maxHeight', key: 'maxHeights', transformValue: getPx}),
  minHeight = style({prop: 'minHeight', key: 'minHeights', transformValue: getPx}),
  size = mapProps(function(e) {
    return _extends({}, e, {width: e.size, height: e.size})
  })(
    compose(
      width,
      height,
    ),
  ),
  verticalAlign = style({prop: 'verticalAlign'}),
  alignItems = style({prop: 'alignItems'}),
  alignContent = style({prop: 'alignContent'}),
  justifyItems = style({prop: 'justifyItems'}),
  justifyContent = style({prop: 'justifyContent'}),
  flexWrap = style({prop: 'flexWrap'}),
  flexBasis = style({prop: 'flexBasis', transformValue: getWidth}),
  flexDirection = style({prop: 'flexDirection'}),
  flex = style({prop: 'flex'}),
  justifySelf = style({prop: 'justifySelf'}),
  alignSelf = style({prop: 'alignSelf'}),
  order = style({prop: 'order'}),
  gridGap = style({prop: 'gridGap', key: 'space', transformValue: getPx, scale: spaceScale}),
  gridColumnGap = style({
    prop: 'gridColumnGap',
    key: 'space',
    transformValue: getPx,
    scale: spaceScale,
  }),
  gridRowGap = style({prop: 'gridRowGap', key: 'space', transformValue: getPx, scale: spaceScale}),
  gridColumn = style({prop: 'gridColumn'}),
  gridRow = style({prop: 'gridRow'}),
  gridAutoFlow = style({prop: 'gridAutoFlow'}),
  gridAutoColumns = style({prop: 'gridAutoColumns'}),
  gridAutoRows = style({prop: 'gridAutoRows'}),
  gridTemplateColumns = style({prop: 'gridTemplateColumns'}),
  gridTemplateRows = style({prop: 'gridTemplateRows'}),
  gridTemplateAreas = style({prop: 'gridTemplateAreas'}),
  gridArea = style({prop: 'gridArea'}),
  border = style({prop: 'border', key: 'borders'}),
  borderWidth = style({prop: 'borderWidth', key: 'borderWidths', transformValue: getPx}),
  borderStyle = style({prop: 'borderStyle', key: 'borderStyles'}),
  borderColor = style({prop: 'borderColor', key: 'colors'}),
  borderTop = style({prop: 'borderTop', key: 'borders'}),
  borderRight = style({prop: 'borderRight', key: 'borders'}),
  borderBottom = style({prop: 'borderBottom', key: 'borders'}),
  borderLeft = style({prop: 'borderLeft', key: 'borders'}),
  borderRadius = style({prop: 'borderRadius', key: 'radii', transformValue: getPx}),
  borders = compose(
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
  ),
  boxShadow = style({prop: 'boxShadow', key: 'shadows'}),
  opacity = style({prop: 'opacity'}),
  overflow = style({prop: 'overflow'}),
  background = style({prop: 'background'}),
  backgroundImage = style({prop: 'backgroundImage'}),
  backgroundSize = style({prop: 'backgroundSize'}),
  backgroundPosition = style({prop: 'backgroundPosition'}),
  backgroundRepeat = style({prop: 'backgroundRepeat'}),
  position = style({prop: 'position'}),
  zIndex = style({prop: 'zIndex', key: 'zIndices'}),
  top = style({prop: 'top', transformValue: getPx}),
  right = style({prop: 'right', transformValue: getPx}),
  bottom = style({prop: 'bottom', transformValue: getPx}),
  left = style({prop: 'left', transformValue: getPx}),
  buttonStyle = variant({key: 'buttons'}),
  textStyle = variant({key: 'textStyles', prop: 'textStyle'}),
  colorStyle = variant({key: 'colorStyles', prop: 'colors'}),
  n = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  a = function(e) {
    return e instanceof Date
  },
  u = 36e5,
  o = 6e4,
  i = 2,
  s = /[T ]/,
  c = /:/,
  f = /^(\d{2})$/,
  d = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  l = /^(\d{4})/,
  g = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  v = /^-(\d{2})$/,
  D = /^-?(\d{3})$/,
  m = /^-?(\d{2})-?(\d{2})$/,
  h = /^-?W(\d{2})$/,
  y = /^-?W(\d{2})-?(\d{1})$/,
  M = /^(\d{2}([.,]\d*)?)$/,
  T = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  p = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  S = /([Z+-].*)$/,
  Y = /^(Z)$/,
  w = /^([+-])(\d{2})$/,
  F = /^([+-])(\d{2}):?(\d{2})$/
function x(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var b = function(e, t) {
    if (a(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var r = (t || {}).additionalDigits
    r = null == r ? i : Number(r)
    var _,
      b,
      I,
      k = (function(e) {
        var t,
          n = {},
          r = e.split(s)
        if ((c.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = S.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      O = (function(e, t) {
        var n,
          r = d[t],
          a = g[t]
        if ((n = l.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = f.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(k.date, r),
      R = O.year,
      j = (function(e, t) {
        if (null === t) return null
        var n, r, a
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = v.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = D.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = m.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = h.exec(e))
          ? x(t, parseInt(n[1], 10) - 1)
          : (n = y.exec(e))
          ? x(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(O.restDateString, R)
    if (j) {
      var C,
        E = j.getTime(),
        P = 0
      if (
        (k.time &&
          (P = (function(e) {
            var t, n, r
            if ((t = M.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * u
            if ((t = T.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * u + r * o
              )
            if ((t = p.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * u + r * o + 1e3 * a
            }
            return null
          })(k.time)),
        k.timezone)
      )
        (_ = k.timezone),
          (C =
            ((b = Y.exec(_))
              ? 0
              : (b = w.exec(_))
              ? ((I = 60 * parseInt(b[2], 10)), '+' === b[1] ? -I : I)
              : (b = F.exec(_))
              ? ((I = 60 * parseInt(b[2], 10) + parseInt(b[3], 10)), '+' === b[1] ? -I : I)
              : 0) * o)
      else {
        var $ = E + P,
          z = new Date($)
        C = n(z)
        var A = new Date($)
        A.setDate(z.getDate() + 1)
        var W = n(A) - n(z)
        W > 0 && (C += W)
      }
      return new Date(E + P + C)
    }
    return new Date(e)
  },
  H = function(e) {
    var t = b(e),
      n = new Date(0)
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
  },
  k = function(e) {
    var t = b(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = 6e4,
  O = 864e5,
  $ = function(e, t) {
    var n = k(e),
      r = k(t),
      a = n.getTime() - n.getTimezoneOffset() * I,
      o = r.getTime() - r.getTimezoneOffset() * I
    return Math.round((a - o) / O)
  },
  W = function(e) {
    var t = b(e)
    return $(t, H(t)) + 1
  },
  A = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = b(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  E = function(e) {
    return A(e, {weekStartsOn: 1})
  },
  G = function(e) {
    var t = b(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = E(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = E(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  N = function(e) {
    var t = G(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), E(n)
  },
  z = 6048e5,
  C = function(e) {
    var t = b(e),
      n = E(t).getTime() - N(t).getTime()
    return Math.round(n / z) + 1
  },
  X = function(e) {
    if (a(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  Z = [
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
  U = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = Z.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  J = function() {
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
      a = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      o = ['AM', 'PM'],
      i = ['am', 'pm'],
      c = ['a.m.', 'p.m.'],
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
          return a[e.getDay()]
        },
        A: function(e) {
          return e.getHours() / 12 >= 1 ? o[1] : o[0]
        },
        a: function(e) {
          return e.getHours() / 12 >= 1 ? i[1] : i[0]
        },
        aa: function(e) {
          return e.getHours() / 12 >= 1 ? c[1] : c[0]
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
      {formatters: l, formattingTokensRegExp: U(l)}
    )
  },
  R = {
    distanceInWords: (function() {
      var e = {
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
      }
      return {
        localize: function(t, n, r) {
          var a
          return (
            (r = r || {}),
            (a =
              'string' == typeof e[t]
                ? e[t]
                : 1 === n
                ? e[t].one
                : e[t].other.replace('{{count}}', n)),
            r.addSuffix ? (r.comparison > 0 ? 'in ' + a : a + ' ago') : a
          )
        },
      }
    })(),
    format: J(),
  },
  B = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return Q(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return Q(e.getDate(), 2)
    },
    DDD: function(e) {
      return W(e)
    },
    DDDD: function(e) {
      return Q(W(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return C(e)
    },
    WW: function(e) {
      return Q(C(e), 2)
    },
    YY: function(e) {
      return Q(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return Q(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(G(e)).substr(2)
    },
    GGGG: function(e) {
      return G(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return Q(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return Q(B.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return Q(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return Q(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return Q(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return Q(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return P(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return P(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function P(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + Q(Math.floor(r / 60), 2) + t + Q(a, 2)
}
function Q(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var L = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (n || {}).locale,
      o = R.format.formatters,
      i = R.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var c = b(e)
    return X(c)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            c = i.length
          for (r = 0; r < c; r++)
            (a = t[i[r]] || B[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < c; n++)
              i[n] instanceof Function ? (t += i[n](e, B)) : (t += i[n])
            return t
          }
        })(r, o, i)(c)
      : 'Invalid Date'
  },
  j = function(e, t) {
    var n = b(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  q = function(e, t, n) {
    var r = b(e),
      a = void 0 !== n ? n : 1,
      o = b(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      c = r
    for (c.setHours(0, 0, 0, 0); c.getTime() <= o; ) i.push(b(c)), c.setDate(c.getDate() + a)
    return i
  },
  K = function(e) {
    var t = b(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  V = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = b(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  _ = function(e) {
    return b(e).getDay()
  },
  ee = function(e) {
    var t = b(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function te(e) {
  var t = void 0 === e ? {} : e,
    n = t.weekStartsOn,
    r = void 0 === n ? 1 : n,
    a = t.weekDayFormat,
    o =
      void 0 === a
        ? function(e) {
            return L(e, 'dd')
          }
        : a,
    i = new Date()
  return q(j(A(i), r), j(V(i), r)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function re(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    i =
      void 0 === o
        ? function(e) {
            return L(e, 'DD')
          }
        : o,
    c = new Date(t, n),
    l = ee(c),
    s = _(l),
    u = K(c),
    p = Array.from(Array(s >= a ? s - a : a).keys()).fill(0),
    d = q(l, u).map(function(e) {
      return {date: e, day: i(e)}
    })
  return p.concat(d)
}
function ne(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    i =
      void 0 === o
        ? function(e) {
            return L(e, 'DD')
          }
        : o,
    c = e.weekDayFormat,
    l =
      void 0 === c
        ? function(e) {
            return L(e, 'dd')
          }
        : c,
    s = e.monthLabelFormat,
    u =
      void 0 === s
        ? function(e) {
            return L(e, 'MMMM YYYY')
          }
        : s
  return {
    days: React.useMemo(
      function() {
        return re({year: t, month: n, weekStartsOn: a, dayFormat: i})
      },
      [t, n, a],
    ),
    weekDays: React.useMemo(
      function() {
        return te({weekStartsOn: a, weekDayFormat: l})
      },
      [a],
    ),
    monthLabel: u(new Date(t, n)),
  }
}
var ae = function(e, t) {
    var n = b(e),
      r = b(t)
    return n.getTime() < r.getTime()
  },
  ue = function(e, t) {
    var n = b(e),
      r = b(t)
    return n.getTime() > r.getTime()
  },
  oe = function(e, t, n) {
    var r = b(e).getTime(),
      a = b(t).getTime(),
      o = b(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  ie = function(e, t) {
    var n = k(e),
      r = k(t)
    return n.getTime() === r.getTime()
  },
  se = function(e) {
    return b(e).getFullYear()
  },
  ce = function(e) {
    return b(e).getMonth()
  },
  fe = function() {
    return k(new Date())
  },
  de = function(e) {
    var t = b(e),
      n = t.getFullYear(),
      r = t.getMonth(),
      a = new Date(0)
    return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
  },
  le = function(e, t) {
    var n = b(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = de(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  }
function ge(e, t, n) {
  return !(!t || !n) && oe(e, t, n)
}
function ve(e, t, n) {
  return !!((t && ie(e, t)) || (n && ie(e, n)))
}
function De(e, t, n, r) {
  return !!((t && ae(e, t)) || (n && ue(e, n)) || (r && r(e)))
}
function me(e) {
  var t = ee(e)
  return {year: se(t), month: ce(t), date: t}
}
function he() {
  return me(fe())
}
function ye(e, t) {
  var n = t ? me(t) : he(),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = le(e[e.length - 1].date, 1)), e.concat([me(r)])
      }, a)),
    a
  )
}
function Me(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = le(r, n)), e.concat([me(r)])
  }, [])
}
function Te(e, t, n) {
  return e && 'string' == typeof t ? L(e, t) : e && 'function' == typeof t ? t(e) : n
}
var pe = 'startDate',
  Se = 'endDate'
function Ye(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.focusedInput,
    a = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDateChange,
    c = e.numberOfMonths,
    l = void 0 === c ? 2 : c,
    s = e.firstDayOfWeek,
    u = void 0 === s ? 1 : s,
    p = React.useState(function() {
      return ye(l, t)
    }),
    d = p[0],
    m = p[1],
    f = React.useCallback(
      function(e) {
        return ge(e, t, n)
      },
      [t, n],
    ),
    _ = React.useCallback(
      function(e) {
        return ve(e, t, n)
      },
      [t, n],
    ),
    g = React.useCallback(
      function(e) {
        return De(e, a, o)
      },
      [a, o],
    )
  return {
    firstDayOfWeek: u,
    activeMonths: d,
    isDateSelected: f,
    isStartOrEndDate: _,
    isDateBlocked: g,
    numberOfMonths: l,
    onResetDates: function() {
      i({startDate: null, endDate: null, focusedInput: pe})
    },
    onDaySelect: function(e) {
      ;(r === Se && t && ae(e, t)) || (r === pe && n && ue(e, n))
        ? i({endDate: null, startDate: e, focusedInput: Se})
        : r === pe
        ? i({endDate: n, startDate: e, focusedInput: Se})
        : r === Se && t && !ae(e, t) && i({startDate: t, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      m(Me(d, l, -1))
    },
    goToNextMonths: function() {
      m(Me(d, l, 1))
    },
  }
}
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  datepickerPhrases = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
  },
  dateRangeInputPhrases = __assign({}, datepickerPhrases, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Grid = styled__default('div')(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
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
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    gridColumnGap,
    gridGap,
    gridRowGap,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    alignItems,
    justifyContent,
    space,
  ),
  Flex = styled__default('div')(
    templateObject_1$1 ||
      (templateObject_1$1 = __makeTemplateObject(
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
    space,
    flex,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    gridArea,
    height,
    width,
  ),
  Box = styled__default('div')(
    templateObject_1$2 ||
      (templateObject_1$2 = __makeTemplateObject(
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
    gridArea,
    height,
    space,
    width,
    position,
    top,
    left,
    right,
    bottom,
  )
function CalendarIcon(e) {
  var t = e.height,
    n = e.width,
    r = e.color,
    a = e.className,
    o = void 0 === a ? '' : a
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: o,
      color: r,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
var templateObject_1$3,
  templateObject_2,
  templateObject_3,
  InputLabel = styled__default('label')(
    templateObject_1$3 ||
      (templateObject_1$3 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    position,
    border,
    background,
    display,
    borderRadius,
    space,
  ),
  CalendarWrapper = styled__default('div')(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
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
    position,
    left,
    top,
    height,
    width,
  ),
  StyledInput = styled__default('input')(
    templateObject_3 ||
      (templateObject_3 = __makeTemplateObject(
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
    background,
    space,
    fontFamily,
    fontSize,
    color,
    fontWeight,
    space,
    border,
    width,
    minHeight,
  )
function Input(e) {
  var t = e.placeholder,
    n = e.id,
    r = e.ariaLabel,
    a = e.onClick,
    o = e.value,
    i = e.showCalendarIcon,
    c = e.inputBorder,
    l = e.inputMinHeight,
    s = e.inputPadding,
    u = e.calendarWrapperTop
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: n,
      display: 'block',
      position: 'relative',
      border: c || '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      mb: '0',
    },
    i &&
      React__default.createElement(
        CalendarWrapper,
        {position: 'absolute', height: '12px', width: '12px', top: u || '16px', left: '16px'},
        React__default.createElement(CalendarIcon, {
          width: '12px',
          height: '12px',
          color: '#BCBEC0',
        }),
      ),
    React__default.createElement(StyledInput, {
      border: '0',
      p: s || '0 44px',
      width: '100%',
      minHeight: l || '46px',
      background: '#ffffff',
      fontFamily: 'Montserrat',
      color: '#001217',
      fontSize: '14px',
      fontWeight: 600,
      id: n,
      placeholder: t,
      'aria-label': r,
      value: o,
      autoComplete: 'off',
      readOnly: !0,
      onFocus: a,
    }),
  )
}
function calculateAngle(e) {
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
}
function ArrowIcon(e) {
  var t = e.height,
    n = e.width,
    r = e.iconColor,
    a = e.direction,
    o = void 0 === a ? 'right' : a,
    i = e.className,
    c = void 0 === i ? '' : i,
    l = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: c,
      color: r,
      transform: 'rotate(' + l + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
var templateObject_1$4,
  templateObject_1$5,
  templateObject_2$1,
  Text = styled__default('div')(
    templateObject_1$4 ||
      (templateObject_1$4 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    space,
  ),
  StyledDate = styled__default(Text)(
    templateObject_2$1 ||
      (templateObject_2$1 = __makeTemplateObject(
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
        styled.css(
          templateObject_1$5 ||
            (templateObject_1$5 = __makeTemplateObject(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Date$1(e) {
  var t = e.title,
    n = e.isActive,
    r = e.date,
    a = void 0 === r ? 'Select' : r
  return React__default.createElement(
    'div',
    null,
    React__default.createElement(
      Text,
      {fontFamily: 'Montserrat', fontSize: '11px', color: '#929598', mb: '8px'},
      t,
    ),
    React__default.createElement(
      StyledDate,
      {
        as: 'span',
        color: '#001217',
        fontSize: '24px',
        fontWeight: 500,
        fontFamily: 'Montserrat',
        pb: '15px',
        isActive: n,
      },
      a,
    ),
  )
}
var MonthLabel = function(e) {
    var t = e.label
    return React__default.createElement(
      Text,
      {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: 1.57,
        color: '#343132',
      },
      t,
    )
  },
  MonthLabel$1 = function(e) {
    var t = e.label
    return React__default.createElement(
      Text,
      {fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 500, color: '#929598'},
      t,
    )
  },
  StyledDay = styled__default('button')(
    templateObject_4 ||
      (templateObject_4 = __makeTemplateObject(
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
    width,
    height,
    boxShadow,
    background,
    function(e) {
      return (
        e.disabled &&
        styled.css(
          templateObject_1$6 ||
            (templateObject_1$6 = __makeTemplateObject(
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
          ? styled.css(
              templateObject_3$1 ||
                (templateObject_3$1 = __makeTemplateObject(
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                  ['\n        &:hover {\n          background: #39beef;\n        }\n      '],
                )),
            )
          : ''
        : styled.css(
            templateObject_2$2 ||
              (templateObject_2$2 = __makeTemplateObject(
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
                ['\n        &:hover {\n          background: #e6e7e8;\n        }\n      '],
              )),
          )
    },
  )
function getBorderColor(e, t) {
  return t ? '#00aeef' : e ? '#71c9ed' : '#e6e7e8'
}
function getBackgroundColor(e, t) {
  return t ? '#00aeef' : e ? '#71c9ed' : '#ffffff'
}
function getColor(e, t) {
  return e || t ? '#ffffff' : '#58595b'
}
function Day(e) {
  var t = e.day,
    n = e.isActive,
    r = e.isStartOrEnd,
    a = e.disabled,
    o = e.onDaySelect,
    i = e.date,
    c = e.daySize,
    l = getBorderColor(n, r),
    s = getBackgroundColor(n, r),
    u = getColor(n, r)
  return React__default.createElement(
    StyledDay,
    {
      role: 'button',
      onClick: function() {
        return o(i)
      },
      disabled: a,
      isActive: n,
      isStartOrEnd: r,
      height: c || '36px',
      width: c || '36px',
      background: s,
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
    React__default.createElement(
      Flex,
      {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
      React__default.createElement(
        Text,
        {color: u, fontFamily: 'Montserrat', fontWeight: 500, fontSize: '14px'},
        t,
      ),
    ),
  )
}
var templateObject_1$6,
  templateObject_2$2,
  templateObject_3$1,
  templateObject_4,
  Day$1 = React__default.memo(Day),
  Month = function(e) {
    var t = e.year,
      n = e.month,
      r = e.firstDayOfWeek,
      a = e.isDateBlocked,
      o = e.isDateSelected,
      i = e.isStartOrEndDate,
      c = e.onDaySelect,
      l = e.daySize,
      s = ne({year: t, month: n, weekStartsOn: r}),
      u = s.days,
      p = s.weekDays,
      d = s.monthLabel
    return React__default.createElement(
      'div',
      null,
      React__default.createElement(
        Flex,
        {justifyContent: 'center', mb: '28px'},
        React__default.createElement(MonthLabel, {label: d}),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        p.map(function(e) {
          return React__default.createElement(
            Flex,
            {key: e, justifyContent: 'center', mb: '16px'},
            React__default.createElement(MonthLabel$1, {label: e}),
          )
        }),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(7, 1fr)'},
        u.map(function(e, t) {
          return 'object' == typeof e
            ? React__default.createElement(Day$1, {
                isActive: o(e.date),
                date: e.date,
                key: e.day,
                day: e.day,
                disabled: a(e.date),
                isStartOrEnd: i(e.date),
                onDaySelect: c,
                daySize: l,
              })
            : React__default.createElement('div', {key: t})
        }),
      ),
    )
  }
function CaretIcon(e) {
  var t = e.height,
    n = e.width,
    r = e.color,
    a = e.className,
    o = void 0 === a ? '' : a
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: o,
      color: r,
      viewBox: '0 0 14 14',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
    }),
  )
}
function ResetDates(e) {
  var t = e.onResetDates
  return React__default.createElement(
    Flex,
    {role: 'button', onClick: t, alignItems: 'center'},
    React__default.createElement(CaretIcon, {height: '14px', width: '14px', color: '58595B'}),
    React__default.createElement(
      Text,
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
function calculateAngle$1(e) {
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
}
function CaretIcon$1(e) {
  var t = e.height,
    n = e.width,
    r = e.color,
    a = e.direction,
    o = void 0 === a ? 'right' : a,
    i = e.className,
    c = void 0 === i ? '' : i,
    l = calculateAngle$1(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: c,
      color: r,
      transform: 'rotate(' + l + ' 0 0)',
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var templateObject_1$7,
  StyledNavButton = styled__default('button')(
    templateObject_1$7 ||
      (templateObject_1$7 = __makeTemplateObject(
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
    width,
    height,
    background,
    space,
    border,
  )
function NavButton(e) {
  var t = e.type,
    n = e.onClick
  return React__default.createElement(
    StyledNavButton,
    {
      width: '30px',
      height: '30px',
      background: '#ffffff',
      border: '1px solid #929598',
      p: '0',
      type: 'button',
      onClick: n,
    },
    React__default.createElement(CaretIcon$1, {
      width: '18px',
      height: '11px',
      color: '#808285',
      direction: 'next' === t ? 'right' : 'left',
    }),
  )
}
var templateObject_1$8,
  templateObject_2$3,
  StyledDatepicker = styled__default('div')(
    templateObject_1$8 ||
      (templateObject_1$8 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n'],
      )),
    background,
    space,
    borderRadius,
  ),
  DateWrapper = styled__default('div')(
    templateObject_2$3 ||
      (templateObject_2$3 = __makeTemplateObject(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  )
function Datepicker(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    o = e.focusedInput,
    i = e.onDateChange,
    c = e.numberOfMonths,
    l = e.firstDayOfWeek,
    s = e.displayFormat,
    u = void 0 === s ? 'MM/DD/YYYY' : s,
    p = e.phrases,
    d = void 0 === p ? datepickerPhrases : p,
    m = e.styles,
    f = void 0 === m ? {} : m,
    _ = Ye({
      startDate: t,
      endDate: n,
      focusedInput: o,
      onDateChange: i,
      minBookingDate: r,
      maxBookingDate: a,
      numberOfMonths: c,
      firstDayOfWeek: l,
    }),
    g = _.activeMonths,
    y = _.isDateSelected,
    h = _.isStartOrEndDate,
    b = _.isDateBlocked,
    v = _.firstDayOfWeek,
    x = _.onDaySelect,
    D = _.onResetDates,
    S = _.goToPreviousMonths,
    I = _.goToNextMonths,
    k = _.numberOfMonths
  return React__default.createElement(
    StyledDatepicker,
    {background: '#ffffff', p: '32px', borderRadius: '2px'},
    React__default.createElement(
      DateWrapper,
      null,
      React__default.createElement(
        Grid,
        {gridTemplateColumns: f.selectDateGridTemplateColumns || '126px 75px 126px'},
        React__default.createElement(Date$1, {
          title: d.datepickerStartDateLabel,
          date: Te(t, u, d.datepickerStartDatePlaceholder),
          isActive: o === pe,
        }),
        React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center'},
          React__default.createElement(ArrowIcon, {
            height: '12px',
            width: '15px',
            iconColor: '#929598',
          }),
        ),
        React__default.createElement(Date$1, {
          title: d.datepickerEndDateLabel,
          date: Te(n, u, d.datepickerEndDatePlaceholder),
          isActive: o === Se,
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '28px', position: 'relative'},
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', left: '0'},
        React__default.createElement(NavButton, {type: 'prev', onClick: S}),
      ),
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', right: '0'},
        React__default.createElement(NavButton, {type: 'next', onClick: I}),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(' + k + ', 1fr)', gridGap: '0 32px'},
        g.map(function(e) {
          return React__default.createElement(Month, {
            key: e.year + '-' + e.month,
            year: e.year,
            month: e.month,
            firstDayOfWeek: v,
            isDateBlocked: b,
            isDateSelected: y,
            isStartOrEndDate: h,
            onDaySelect: x,
            daySize: f.daySize,
          })
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '32px'},
      React__default.createElement(ResetDates, {onResetDates: D}),
    ),
  )
}
var templateObject_1$9,
  templateObject_2$4,
  InputArrowIcon = styled__default(ArrowIcon)(
    templateObject_1$9 ||
      (templateObject_1$9 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    opacity,
    color,
  ),
  InputGrid = styled__default(Grid)(
    templateObject_2$4 ||
      (templateObject_2$4 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n'],
      )),
    background,
    border,
    borderRadius,
  )
function DateRangeInput(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    c = e.numberOfMonths,
    l = e.focusedInput,
    s = e.onDateChange,
    u = e.showStartDateCalendarIcon,
    p = void 0 === u || u,
    d = e.showEndDateCalendarIcon,
    m = void 0 === d || d,
    f = e.styles,
    _ = void 0 === f ? {} : f,
    g = e.displayFormat,
    y = void 0 === g ? 'MM/DD/YYYY' : g,
    h = e.phrases,
    b = void 0 === h ? dateRangeInputPhrases : h,
    v = React.useRef(null)
  function x(e) {
    null !== l && v && v.current && !v.current.contains(e.target) && i(null)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', x),
        function() {
          window.removeEventListener('click', x)
        }
      )
    }),
    React__default.createElement(
      Box,
      {position: 'relative', ref: v},
      React__default.createElement(
        InputGrid,
        {
          background: _.inputGridBackground || 'transparent',
          gridTemplateColumns: _.inputGridTemplateColumns || '194px 39px 194px',
          border: _.inputGridBorder || '0',
          borderRadius: _.inputGridBorderRadius || '0',
        },
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: b.startDateAriaLabel,
          placeholder: b.startDatePlaceholder,
          value: Te(t, y, ''),
          onClick: function() {
            return i(pe)
          },
          showCalendarIcon: p,
          inputBorder: _.inputBorder,
          inputMinHeight: _.inputMinHeight,
          inputPadding: _.inputStartDatePadding || _.inputPadding,
          calendarWrapperTop: _.inputCalendarWrapperTop,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(InputArrowIcon, {
            width: '15px',
            height: '12px',
            color: _.inputArrowIconColor || '#ffffff',
            opacity: _.inputArrowIconOpacity || 0.4,
          }),
        ),
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: b.endDateAriaLabel,
          placeholder: b.endDatePlaceholder,
          value: Te(n, y, ''),
          onClick: function() {
            return i(t ? Se : pe)
          },
          showCalendarIcon: m,
          inputBorder: _.inputBorder,
          inputMinHeight: _.inputMinHeight,
          calendarWrapperTop: _.inputCalendarWrapperTop,
          inputPadding: _.inputEndDatePadding || _.inputPadding,
        }),
      ),
      React__default.createElement(
        Box,
        {position: 'absolute', bottom: _.datepickerBottom || '65px', left: _.datepickerLeft || '0'},
        null !== l &&
          React__default.createElement(Datepicker, {
            startDate: t,
            endDate: n,
            minBookingDate: r,
            maxBookingDate: a,
            firstDayOfWeek: o,
            numberOfMonths: c,
            focusedInput: l,
            displayFormat: y,
            onDateChange: s,
            styles: {
              daySize: _.daySize,
              selectDateGridTemplateColumns: _.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
exports.DateRangeInput = DateRangeInput
