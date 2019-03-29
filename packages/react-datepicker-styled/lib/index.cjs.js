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
    u = n ? Symbol.for('react.profiler') : 60114,
    s = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    l = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    f = n ? Symbol.for('react.forward_ref') : 60112,
    p = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    g = n ? Symbol.for('react.lazy') : 60116
  function y(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case l:
            case d:
            case o:
            case u:
            case i:
            case p:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case c:
                case f:
                case s:
                  return e
                default:
                  return t
              }
          }
        case g:
        case m:
        case a:
          return t
      }
    }
  }
  function h(e) {
    return y(e) === d
  }
  ;(t.typeOf = y),
    (t.AsyncMode = l),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = c),
    (t.ContextProvider = s),
    (t.Element = r),
    (t.ForwardRef = f),
    (t.Fragment = o),
    (t.Lazy = g),
    (t.Memo = m),
    (t.Portal = a),
    (t.Profiler = u),
    (t.StrictMode = i),
    (t.Suspense = p),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === o ||
        e === d ||
        e === u ||
        e === i ||
        e === p ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === g ||
            e.$$typeof === m ||
            e.$$typeof === s ||
            e.$$typeof === c ||
            e.$$typeof === f))
      )
    }),
    (t.isAsyncMode = function(e) {
      return h(e) || y(e) === l
    }),
    (t.isConcurrentMode = h),
    (t.isContextConsumer = function(e) {
      return y(e) === c
    }),
    (t.isContextProvider = function(e) {
      return y(e) === s
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return y(e) === f
    }),
    (t.isFragment = function(e) {
      return y(e) === o
    }),
    (t.isLazy = function(e) {
      return y(e) === g
    }),
    (t.isMemo = function(e) {
      return y(e) === m
    }),
    (t.isPortal = function(e) {
      return y(e) === a
    }),
    (t.isProfiler = function(e) {
      return y(e) === u
    }),
    (t.isStrictMode = function(e) {
      return y(e) === i
    }),
    (t.isSuspense = function(e) {
      return y(e) === p
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
            for (var u = 0; u < r.length; u++) propIsEnumerable.call(n, r[u]) && (a[r[u]] = n[r[u]])
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
      u = void 0 === i ? getValue : i,
      s = e.scale,
      c = void 0 === s ? {} : s,
      l = r || n,
      d = function(e) {
        var t = get(e, n, a, null)
        if (!is(t)) return null
        var r = get(e.theme, o, c),
          i = function(e) {
            var t
            return is(e) ? (((t = {})[l] = u(e, r)), t) : null
          }
        if (!isObject(t)) return i(t)
        var s = get(e.theme, 'breakpoints', defaultBreakpoints),
          d = []
        if (Array.isArray(t)) {
          d.push(i(t[0]))
          for (var f = 1; f < t.slice(0, s.length + 1).length; f++) {
            var p = i(t[f])
            if (p) {
              var m,
                g = createMediaQuery(s[f - 1])
              d.push((((m = {})[g] = p), m))
            }
          }
        } else {
          for (var y in t) {
            var h,
              _ = s[y],
              v = createMediaQuery(_),
              b = i(t[y])
            if (_) d.push((((h = {})[v] = b), h))
            else d.unshift(b)
          }
          d.sort()
        }
        return d
      }
    return (
      ((d.propTypes = (((t = {})[n] = cloneFunction(propType)), t))[n].meta = {
        prop: n,
        themeKey: o,
      }),
      a &&
        ((d.propTypes[a] = cloneFunction(propType)),
        (d.propTypes[a].meta = {prop: a, themeKey: o})),
      d
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
  f = /:/,
  c = /^(\d{2})$/,
  v = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  l = /^(\d{4})/,
  d = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  g = /^-(\d{2})$/,
  m = /^-?(\d{3})$/,
  D = /^-?(\d{2})-?(\d{2})$/,
  h = /^-?W(\d{2})$/,
  M = /^-?W(\d{2})-?(\d{1})$/,
  T = /^(\d{2}([.,]\d*)?)$/,
  y = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  S = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  Y = /([Z+-].*)$/,
  O = /^(Z)$/,
  w = /^([+-])(\d{2})$/,
  b = /^([+-])(\d{2}):?(\d{2})$/
function p(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var I = function(e, t) {
    if (a(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var r = (t || {}).additionalDigits
    r = null == r ? i : Number(r)
    var _,
      I,
      x,
      k = (function(e) {
        var t,
          n = {},
          r = e.split(s)
        if ((f.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = Y.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      R = (function(e, t) {
        var n,
          r = v[t],
          a = d[t]
        if ((n = l.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = c.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(k.date, r),
      C = R.year,
      j = (function(e, t) {
        if (null === t) return null
        var n, r, a
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = g.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = m.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = D.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = h.exec(e))
          ? p(t, parseInt(n[1], 10) - 1)
          : (n = M.exec(e))
          ? p(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(R.restDateString, C)
    if (j) {
      var F,
        E = j.getTime(),
        W = 0
      if (
        (k.time &&
          (W = (function(e) {
            var t, n, r
            if ((t = T.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * u
            if ((t = y.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * u + r * o
              )
            if ((t = S.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * u + r * o + 1e3 * a
            }
            return null
          })(k.time)),
        k.timezone)
      )
        (_ = k.timezone),
          (F =
            ((I = O.exec(_))
              ? 0
              : (I = w.exec(_))
              ? ((x = 60 * parseInt(I[2], 10)), '+' === I[1] ? -x : x)
              : (I = b.exec(_))
              ? ((x = 60 * parseInt(I[2], 10) + parseInt(I[3], 10)), '+' === I[1] ? -x : x)
              : 0) * o)
      else {
        var P = E + W,
          z = new Date(P)
        F = n(z)
        var A = new Date(P)
        A.setDate(z.getDate() + 1)
        var $ = n(A) - n(z)
        $ > 0 && (F += $)
      }
      return new Date(E + W + F)
    }
    return new Date(e)
  },
  F = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  H = function(e, t) {
    var n = I(e).getTime(),
      r = Number(t)
    return new Date(n + r)
  },
  x = 36e5,
  k = function(e, t) {
    var n = Number(t)
    return H(e, n * x)
  },
  W = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = I(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  N = function(e) {
    return W(e, {weekStartsOn: 1})
  },
  z = function(e) {
    var t = I(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = N(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = N(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  A = function(e) {
    var t = z(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), N(n)
  },
  E = function(e) {
    var t = I(e)
    return t.setHours(0, 0, 0, 0), t
  },
  X = 6e4,
  $ = 864e5,
  C = function(e, t) {
    var n = E(e),
      r = E(t),
      a = n.getTime() - n.getTimezoneOffset() * X,
      o = r.getTime() - r.getTimezoneOffset() * X
    return Math.round((a - o) / $)
  },
  Q = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = C(n, A(n)),
      o = new Date(0)
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), (n = A(o)).setDate(n.getDate() + a), n
  },
  G = function(e, t) {
    var n = Number(t)
    return Q(e, z(e) + n)
  },
  R = 6e4,
  U = function(e, t) {
    var n = Number(t)
    return H(e, n * R)
  },
  Z = function(e) {
    var t = I(e),
      n = t.getFullYear(),
      r = t.getMonth(),
      a = new Date(0)
    return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
  },
  B = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = Z(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  },
  J = function(e, t) {
    var n = Number(t)
    return B(e, 3 * n)
  },
  L = function(e, t) {
    var n = Number(t)
    return H(e, 1e3 * n)
  },
  P = function(e, t) {
    var n = Number(t)
    return F(e, 7 * n)
  },
  j = function(e, t) {
    var n = Number(t)
    return B(e, 12 * n)
  },
  q = function(e, t, n, r) {
    var a = I(e).getTime(),
      o = I(t).getTime(),
      i = I(n).getTime(),
      u = I(r).getTime()
    if (a > o || i > u)
      throw new Error('The start of the range cannot be after the end of the range')
    return a < u && i < o
  },
  V = function(e, t) {
    if (!(t instanceof Array))
      throw new TypeError(toString.call(t) + ' is not an instance of Array')
    var n,
      r,
      a = I(e).getTime()
    return (
      t.forEach(function(e, t) {
        var o = I(e),
          i = Math.abs(a - o.getTime())
        ;(void 0 === n || i < r) && ((n = t), (r = i))
      }),
      n
    )
  },
  K = function(e, t) {
    if (!(t instanceof Array))
      throw new TypeError(toString.call(t) + ' is not an instance of Array')
    var n,
      r,
      a = I(e).getTime()
    return (
      t.forEach(function(e) {
        var t = I(e),
          o = Math.abs(a - t.getTime())
        ;(void 0 === n || o < r) && ((n = t), (r = o))
      }),
      n
    )
  },
  _ = function(e, t) {
    var n = I(e).getTime(),
      r = I(t).getTime()
    return n < r ? -1 : n > r ? 1 : 0
  },
  ee = function(e, t) {
    var n = I(e).getTime(),
      r = I(t).getTime()
    return n > r ? -1 : n < r ? 1 : 0
  },
  te = 6e4,
  re = 6048e5,
  ne = function(e, t) {
    var n = N(e),
      r = N(t),
      a = n.getTime() - n.getTimezoneOffset() * te,
      o = r.getTime() - r.getTimezoneOffset() * te
    return Math.round((a - o) / re)
  },
  ae = function(e, t) {
    return z(e) - z(t)
  },
  ue = function(e, t) {
    var n = I(e),
      r = I(t)
    return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
  },
  oe = function(e) {
    var t = I(e)
    return Math.floor(t.getMonth() / 3) + 1
  },
  ie = function(e, t) {
    var n = I(e),
      r = I(t)
    return 4 * (n.getFullYear() - r.getFullYear()) + (oe(n) - oe(r))
  },
  se = 6e4,
  fe = 6048e5,
  ce = function(e, t, n) {
    var r = W(e, n),
      a = W(t, n),
      o = r.getTime() - r.getTimezoneOffset() * se,
      i = a.getTime() - a.getTimezoneOffset() * se
    return Math.round((o - i) / fe)
  },
  ve = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getFullYear() - r.getFullYear()
  },
  le = function(e, t) {
    var n = I(e),
      r = I(t),
      a = _(n, r),
      o = Math.abs(C(n, r))
    return n.setDate(n.getDate() - a * o), a * (o - (_(n, r) === -a))
  },
  de = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getTime() - r.getTime()
  },
  ge = 36e5,
  me = function(e, t) {
    var n = de(e, t) / ge
    return n > 0 ? Math.floor(n) : Math.ceil(n)
  },
  De = function(e, t) {
    var n = Number(t)
    return G(e, -n)
  },
  he = function(e, t) {
    var n = I(e),
      r = I(t),
      a = _(n, r),
      o = Math.abs(ae(n, r))
    return (n = De(n, a * o)), a * (o - (_(n, r) === -a))
  },
  Me = 6e4,
  Te = function(e, t) {
    var n = de(e, t) / Me
    return n > 0 ? Math.floor(n) : Math.ceil(n)
  },
  ye = function(e, t) {
    var n = I(e),
      r = I(t),
      a = _(n, r),
      o = Math.abs(ue(n, r))
    return n.setMonth(n.getMonth() - a * o), a * (o - (_(n, r) === -a))
  },
  Se = function(e, t) {
    var n = ye(e, t) / 3
    return n > 0 ? Math.floor(n) : Math.ceil(n)
  },
  Ye = function(e, t) {
    var n = de(e, t) / 1e3
    return n > 0 ? Math.floor(n) : Math.ceil(n)
  },
  Oe = function(e, t) {
    var n = le(e, t) / 7
    return n > 0 ? Math.floor(n) : Math.ceil(n)
  },
  we = function(e, t) {
    var n = I(e),
      r = I(t),
      a = _(n, r),
      o = Math.abs(ve(n, r))
    return n.setFullYear(n.getFullYear() - a * o), a * (o - (_(n, r) === -a))
  },
  be = [
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
  pe = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = be
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  Ie = function() {
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
          return a[e.getDay()]
        },
        A: function(e) {
          return e.getHours() / 12 >= 1 ? o[1] : o[0]
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
      {formatters: s, formattingTokensRegExp: pe(s)}
    )
  },
  Fe = {
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
    format: Ie(),
  },
  He = 1440,
  xe = 2520,
  ke = 43200,
  We = 86400,
  Ne = function(e, t, n) {
    var r = n || {},
      a = ee(e, t),
      o = r.locale,
      i = Fe.distanceInWords.localize
    o && o.distanceInWords && o.distanceInWords.localize && (i = o.distanceInWords.localize)
    var u,
      s,
      c = {addSuffix: Boolean(r.addSuffix), comparison: a}
    a > 0 ? ((u = I(e)), (s = I(t))) : ((u = I(t)), (s = I(e)))
    var l,
      d = Ye(s, u),
      f = s.getTimezoneOffset() - u.getTimezoneOffset(),
      p = Math.round(d / 60) - f
    if (p < 2)
      return r.includeSeconds
        ? d < 5
          ? i('lessThanXSeconds', 5, c)
          : d < 10
          ? i('lessThanXSeconds', 10, c)
          : d < 20
          ? i('lessThanXSeconds', 20, c)
          : d < 40
          ? i('halfAMinute', null, c)
          : i(d < 60 ? 'lessThanXMinutes' : 'xMinutes', 1, c)
        : 0 === p
        ? i('lessThanXMinutes', 1, c)
        : i('xMinutes', p, c)
    if (p < 45) return i('xMinutes', p, c)
    if (p < 90) return i('aboutXHours', 1, c)
    if (p < He) return i('aboutXHours', Math.round(p / 60), c)
    if (p < xe) return i('xDays', 1, c)
    if (p < ke) return i('xDays', Math.round(p / He), c)
    if (p < We) return i('aboutXMonths', (l = Math.round(p / ke)), c)
    if ((l = ye(s, u)) < 12) return i('xMonths', Math.round(p / ke), c)
    var m = l % 12,
      g = Math.floor(l / 12)
    return m < 3
      ? i('aboutXYears', g, c)
      : m < 9
      ? i('overXYears', g, c)
      : i('almostXYears', g + 1, c)
  },
  ze = 1440,
  Ae = 43200,
  Ee = 525600,
  Xe = function(e, t, n) {
    var r = n || {},
      a = ee(e, t),
      o = r.locale,
      i = Fe.distanceInWords.localize
    o && o.distanceInWords && o.distanceInWords.localize && (i = o.distanceInWords.localize)
    var u,
      s,
      c,
      l = {addSuffix: Boolean(r.addSuffix), comparison: a}
    a > 0 ? ((u = I(e)), (s = I(t))) : ((u = I(t)), (s = I(e)))
    var d = Math[r.partialMethod ? String(r.partialMethod) : 'floor'],
      f = Ye(s, u),
      p = s.getTimezoneOffset() - u.getTimezoneOffset(),
      m = d(f / 60) - p
    if (
      's' ===
      (c = r.unit
        ? String(r.unit)
        : m < 1
        ? 's'
        : m < 60
        ? 'm'
        : m < ze
        ? 'h'
        : m < Ae
        ? 'd'
        : m < Ee
        ? 'M'
        : 'Y')
    )
      return i('xSeconds', f, l)
    if ('m' === c) return i('xMinutes', m, l)
    if ('h' === c) return i('xHours', d(m / 60), l)
    if ('d' === c) return i('xDays', d(m / ze), l)
    if ('M' === c) return i('xMonths', d(m / Ae), l)
    if ('Y' === c) return i('xYears', d(m / Ee), l)
    throw new Error('Unknown unit: ' + c)
  },
  $e = function(e, t) {
    return Ne(Date.now(), e, t)
  },
  Ce = function(e) {
    var t = I(e)
    return t.setHours(23, 59, 59, 999), t
  },
  Qe = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = I(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  Ge = function(e) {
    var t = I(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  Re = function() {
    return Ce(new Date())
  },
  Ue = function(e) {
    var t = I(e),
      n = new Date(0)
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
  },
  Ze = function(e) {
    var t = I(e)
    return C(t, Ue(t)) + 1
  },
  Be = 6048e5,
  Je = function(e) {
    var t = I(e),
      n = N(t).getTime() - A(t).getTime()
    return Math.round(n / Be) + 1
  },
  Le = function(e) {
    if (a(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  Pe = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return qe(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return qe(e.getDate(), 2)
    },
    DDD: function(e) {
      return Ze(e)
    },
    DDDD: function(e) {
      return qe(Ze(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return Je(e)
    },
    WW: function(e) {
      return qe(Je(e), 2)
    },
    YY: function(e) {
      return qe(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return qe(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(z(e)).substr(2)
    },
    GGGG: function(e) {
      return z(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return qe(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return qe(Pe.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return qe(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return qe(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return qe(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return qe(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return je(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return je(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function je(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + qe(Math.floor(r / 60), 2) + t + qe(a, 2)
}
function qe(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var Ve = function(e) {
    var t = I(e).getFullYear()
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
  },
  Ke = function(e) {
    var t = I(e).getDay()
    return 0 === t && (t = 7), t
  },
  _e = 6048e5,
  et = function(e) {
    var t = A(e),
      n = A(P(t, 60)).valueOf() - t.valueOf()
    return Math.round(n / _e)
  },
  tt = 864e5,
  rt = function(e) {
    var t = I(e)
    return Ce(t).getTime() === Ge(t).getTime()
  },
  nt = function(e) {
    var t = I(e)
    return t.setMinutes(0, 0, 0), t
  },
  at = function(e, t) {
    var n = nt(e),
      r = nt(t)
    return n.getTime() === r.getTime()
  },
  ut = function(e, t, n) {
    var r = W(e, n),
      a = W(t, n)
    return r.getTime() === a.getTime()
  },
  ot = function(e, t) {
    return ut(e, t, {weekStartsOn: 1})
  },
  it = function(e, t) {
    var n = A(e),
      r = A(t)
    return n.getTime() === r.getTime()
  },
  st = function(e) {
    var t = I(e)
    return t.setSeconds(0, 0), t
  },
  ft = function(e, t) {
    var n = st(e),
      r = st(t)
    return n.getTime() === r.getTime()
  },
  ct = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  vt = function(e) {
    var t = I(e),
      n = t.getMonth(),
      r = n - (n % 3)
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t
  },
  lt = function(e, t) {
    var n = vt(e),
      r = vt(t)
    return n.getTime() === r.getTime()
  },
  dt = function(e) {
    var t = I(e)
    return t.setMilliseconds(0), t
  },
  gt = function(e, t) {
    var n = dt(e),
      r = dt(t)
    return n.getTime() === r.getTime()
  },
  mt = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getFullYear() === r.getFullYear()
  },
  Dt = function(e) {
    return at(new Date(), e)
  },
  ht = function(e) {
    return ot(new Date(), e)
  },
  Mt = function(e) {
    return it(new Date(), e)
  },
  Tt = function(e) {
    return ft(new Date(), e)
  },
  yt = function(e) {
    return ct(new Date(), e)
  },
  St = function(e) {
    return lt(new Date(), e)
  },
  Yt = function(e) {
    return gt(new Date(), e)
  },
  Ot = function(e, t) {
    return ut(new Date(), e, t)
  },
  wt = function(e) {
    return mt(new Date(), e)
  },
  bt = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = I(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + o), r
  },
  pt = function(e) {
    var t = z(e),
      n = new Date(0)
    n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0)
    var r = N(n)
    return r.setDate(r.getDate() - 1), r
  },
  It = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setDate(r), n
  },
  Ft = function(e, t, n) {
    var r = (n && Number(n.weekStartsOn)) || 0,
      a = I(e),
      o = Number(t),
      i = a.getDay()
    return F(a, (((o % 7) + 7) % 7 < r ? 7 : 0) + o - i)
  },
  Ht = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setMonth(0), n.setDate(r), n
  },
  xt = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setHours(r), n
  },
  kt = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = Ke(n)
    return F(n, r - a)
  },
  Wt = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = Je(n) - r
    return n.setDate(n.getDate() - 7 * a), n
  },
  Nt = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setMilliseconds(r), n
  },
  zt = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setMinutes(r), n
  },
  At = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = n.getFullYear(),
      o = n.getDate(),
      i = new Date(0)
    i.setFullYear(a, r, 15), i.setHours(0, 0, 0, 0)
    var u = Z(i)
    return n.setMonth(r, Math.min(o, u)), n
  },
  Et = function(e, t) {
    var n = I(e),
      r = Number(t) - (Math.floor(n.getMonth() / 3) + 1)
    return At(n, n.getMonth() + 3 * r)
  },
  Xt = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setSeconds(r), n
  },
  $t = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setFullYear(r), n
  },
  Ct = function(e) {
    var t = I(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  },
  Qt = function() {
    return E(new Date())
  },
  Gt = function(e, t) {
    var n = Number(t)
    return F(e, -n)
  },
  Rt = function(e, t) {
    var n = Number(t)
    return k(e, -n)
  },
  Ut = function(e, t) {
    var n = Number(t)
    return H(e, -n)
  },
  Zt = function(e, t) {
    var n = Number(t)
    return U(e, -n)
  },
  Bt = function(e, t) {
    var n = Number(t)
    return B(e, -n)
  },
  Jt = function(e, t) {
    var n = Number(t)
    return J(e, -n)
  },
  Lt = function(e, t) {
    var n = Number(t)
    return L(e, -n)
  },
  Pt = function(e, t) {
    var n = Number(t)
    return P(e, -n)
  },
  jt = function(e, t) {
    var n = Number(t)
    return j(e, -n)
  },
  qt = {
    addDays: F,
    addHours: k,
    addISOYears: G,
    addMilliseconds: H,
    addMinutes: U,
    addMonths: B,
    addQuarters: J,
    addSeconds: L,
    addWeeks: P,
    addYears: j,
    areRangesOverlapping: q,
    closestIndexTo: V,
    closestTo: K,
    compareAsc: _,
    compareDesc: ee,
    differenceInCalendarDays: C,
    differenceInCalendarISOWeeks: ne,
    differenceInCalendarISOYears: ae,
    differenceInCalendarMonths: ue,
    differenceInCalendarQuarters: ie,
    differenceInCalendarWeeks: ce,
    differenceInCalendarYears: ve,
    differenceInDays: le,
    differenceInHours: me,
    differenceInISOYears: he,
    differenceInMilliseconds: de,
    differenceInMinutes: Te,
    differenceInMonths: ye,
    differenceInQuarters: Se,
    differenceInSeconds: Ye,
    differenceInWeeks: Oe,
    differenceInYears: we,
    distanceInWords: Ne,
    distanceInWordsStrict: Xe,
    distanceInWordsToNow: $e,
    eachDay: function(e, t, n) {
      var r = I(e),
        a = void 0 !== n ? n : 1,
        o = I(t).getTime()
      if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
      var i = [],
        u = r
      for (u.setHours(0, 0, 0, 0); u.getTime() <= o; ) i.push(I(u)), u.setDate(u.getDate() + a)
      return i
    },
    endOfDay: Ce,
    endOfHour: function(e) {
      var t = I(e)
      return t.setMinutes(59, 59, 999), t
    },
    endOfISOWeek: function(e) {
      return Qe(e, {weekStartsOn: 1})
    },
    endOfISOYear: function(e) {
      var t = z(e),
        n = new Date(0)
      n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0)
      var r = N(n)
      return r.setMilliseconds(r.getMilliseconds() - 1), r
    },
    endOfMinute: function(e) {
      var t = I(e)
      return t.setSeconds(59, 999), t
    },
    endOfMonth: Ge,
    endOfQuarter: function(e) {
      var t = I(e),
        n = t.getMonth(),
        r = n - (n % 3) + 3
      return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
    },
    endOfSecond: function(e) {
      var t = I(e)
      return t.setMilliseconds(999), t
    },
    endOfToday: Re,
    endOfTomorrow: function() {
      var e = new Date(),
        t = e.getFullYear(),
        n = e.getMonth(),
        r = e.getDate(),
        a = new Date(0)
      return a.setFullYear(t, n, r + 1), a.setHours(23, 59, 59, 999), a
    },
    endOfWeek: Qe,
    endOfYear: function(e) {
      var t = I(e),
        n = t.getFullYear()
      return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
    },
    endOfYesterday: function() {
      var e = new Date(),
        t = e.getFullYear(),
        n = e.getMonth(),
        r = e.getDate(),
        a = new Date(0)
      return a.setFullYear(t, n, r - 1), a.setHours(23, 59, 59, 999), a
    },
    format: function(e, t, n) {
      var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
        a = (n || {}).locale,
        o = Fe.format.formatters,
        i = Fe.format.formattingTokensRegExp
      a &&
        a.format &&
        a.format.formatters &&
        ((o = a.format.formatters),
        a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
      var u = I(e)
      return Le(u)
        ? (function(e, t, n) {
            var r,
              a,
              o,
              i = e.match(n),
              u = i.length
            for (r = 0; r < u; r++)
              (a = t[i[r]] || Pe[i[r]]),
                (i[r] =
                  a ||
                  ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
            return function(e) {
              for (var t = '', n = 0; n < u; n++)
                i[n] instanceof Function ? (t += i[n](e, Pe)) : (t += i[n])
              return t
            }
          })(r, o, i)(u)
        : 'Invalid Date'
    },
    getDate: function(e) {
      return I(e).getDate()
    },
    getDay: function(e) {
      return I(e).getDay()
    },
    getDayOfYear: Ze,
    getDaysInMonth: Z,
    getDaysInYear: function(e) {
      return Ve(e) ? 366 : 365
    },
    getHours: function(e) {
      return I(e).getHours()
    },
    getISODay: Ke,
    getISOWeek: Je,
    getISOWeeksInYear: et,
    getISOYear: z,
    getMilliseconds: function(e) {
      return I(e).getMilliseconds()
    },
    getMinutes: function(e) {
      return I(e).getMinutes()
    },
    getMonth: function(e) {
      return I(e).getMonth()
    },
    getOverlappingDaysInRanges: function(e, t, n, r) {
      var a = I(e).getTime(),
        o = I(t).getTime(),
        i = I(n).getTime(),
        u = I(r).getTime()
      if (a > o || i > u)
        throw new Error('The start of the range cannot be after the end of the range')
      if (!(a < u && i < o)) return 0
      var s = (u > o ? o : u) - (i < a ? a : i)
      return Math.ceil(s / tt)
    },
    getQuarter: oe,
    getSeconds: function(e) {
      return I(e).getSeconds()
    },
    getTime: function(e) {
      return I(e).getTime()
    },
    getYear: function(e) {
      return I(e).getFullYear()
    },
    isAfter: function(e, t) {
      var n = I(e),
        r = I(t)
      return n.getTime() > r.getTime()
    },
    isBefore: function(e, t) {
      var n = I(e),
        r = I(t)
      return n.getTime() < r.getTime()
    },
    isDate: a,
    isEqual: function(e, t) {
      var n = I(e),
        r = I(t)
      return n.getTime() === r.getTime()
    },
    isFirstDayOfMonth: function(e) {
      return 1 === I(e).getDate()
    },
    isFriday: function(e) {
      return 5 === I(e).getDay()
    },
    isFuture: function(e) {
      return I(e).getTime() > new Date().getTime()
    },
    isLastDayOfMonth: rt,
    isLeapYear: Ve,
    isMonday: function(e) {
      return 1 === I(e).getDay()
    },
    isPast: function(e) {
      return I(e).getTime() < new Date().getTime()
    },
    isSameDay: function(e, t) {
      var n = E(e),
        r = E(t)
      return n.getTime() === r.getTime()
    },
    isSameHour: at,
    isSameISOWeek: ot,
    isSameISOYear: it,
    isSameMinute: ft,
    isSameMonth: ct,
    isSameQuarter: lt,
    isSameSecond: gt,
    isSameWeek: ut,
    isSameYear: mt,
    isSaturday: function(e) {
      return 6 === I(e).getDay()
    },
    isSunday: function(e) {
      return 0 === I(e).getDay()
    },
    isThisHour: Dt,
    isThisISOWeek: ht,
    isThisISOYear: Mt,
    isThisMinute: Tt,
    isThisMonth: yt,
    isThisQuarter: St,
    isThisSecond: Yt,
    isThisWeek: Ot,
    isThisYear: wt,
    isThursday: function(e) {
      return 4 === I(e).getDay()
    },
    isToday: function(e) {
      return E(e).getTime() === E(new Date()).getTime()
    },
    isTomorrow: function(e) {
      var t = new Date()
      return t.setDate(t.getDate() + 1), E(e).getTime() === E(t).getTime()
    },
    isTuesday: function(e) {
      return 2 === I(e).getDay()
    },
    isValid: Le,
    isWednesday: function(e) {
      return 3 === I(e).getDay()
    },
    isWeekend: function(e) {
      var t = I(e).getDay()
      return 0 === t || 6 === t
    },
    isWithinRange: function(e, t, n) {
      var r = I(e).getTime(),
        a = I(t).getTime(),
        o = I(n).getTime()
      if (a > o) throw new Error('The start of the range cannot be after the end of the range')
      return r >= a && r <= o
    },
    isYesterday: function(e) {
      var t = new Date()
      return t.setDate(t.getDate() - 1), E(e).getTime() === E(t).getTime()
    },
    lastDayOfISOWeek: function(e) {
      return bt(e, {weekStartsOn: 1})
    },
    lastDayOfISOYear: pt,
    lastDayOfMonth: function(e) {
      var t = I(e),
        n = t.getMonth()
      return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
    },
    lastDayOfQuarter: function(e) {
      var t = I(e),
        n = t.getMonth(),
        r = n - (n % 3) + 3
      return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
    },
    lastDayOfWeek: bt,
    lastDayOfYear: function(e) {
      var t = I(e),
        n = t.getFullYear()
      return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
    },
    max: function() {
      var e = Array.prototype.slice.call(arguments).map(function(e) {
          return I(e)
        }),
        t = Math.max.apply(null, e)
      return new Date(t)
    },
    min: function() {
      var e = Array.prototype.slice.call(arguments).map(function(e) {
          return I(e)
        }),
        t = Math.min.apply(null, e)
      return new Date(t)
    },
    parse: I,
    setDate: It,
    setDay: Ft,
    setDayOfYear: Ht,
    setHours: xt,
    setISODay: kt,
    setISOWeek: Wt,
    setISOYear: Q,
    setMilliseconds: Nt,
    setMinutes: zt,
    setMonth: At,
    setQuarter: Et,
    setSeconds: Xt,
    setYear: $t,
    startOfDay: E,
    startOfHour: nt,
    startOfISOWeek: N,
    startOfISOYear: A,
    startOfMinute: st,
    startOfMonth: Ct,
    startOfQuarter: vt,
    startOfSecond: dt,
    startOfToday: Qt,
    startOfTomorrow: function() {
      var e = new Date(),
        t = e.getFullYear(),
        n = e.getMonth(),
        r = e.getDate(),
        a = new Date(0)
      return a.setFullYear(t, n, r + 1), a.setHours(0, 0, 0, 0), a
    },
    startOfWeek: W,
    startOfYear: Ue,
    startOfYesterday: function() {
      var e = new Date(),
        t = e.getFullYear(),
        n = e.getMonth(),
        r = e.getDate(),
        a = new Date(0)
      return a.setFullYear(t, n, r - 1), a.setHours(0, 0, 0, 0), a
    },
    subDays: Gt,
    subHours: Rt,
    subISOYears: De,
    subMilliseconds: Ut,
    subMinutes: Zt,
    subMonths: Bt,
    subQuarters: Jt,
    subSeconds: Lt,
    subWeeks: Pt,
    subYears: jt,
  },
  Vt = qt.addDays,
  Kt = qt.addMonths,
  _t = qt.eachDay,
  er = qt.endOfMonth,
  tr = qt.endOfWeek,
  rr = qt.format,
  nr = qt.getDay,
  ar = qt.getMonth,
  ur = qt.getYear,
  or = qt.isAfter,
  ir = qt.isBefore,
  sr = qt.isSameDay,
  fr = qt.isWithinRange,
  cr = qt.startOfMonth,
  vr = qt.startOfToday,
  lr = qt.startOfWeek
function dr(e) {
  var t = void 0 === e ? {} : e,
    n = t.weekStartsOn,
    r = void 0 === n ? 1 : n,
    a = t.weekDayFormat,
    o =
      void 0 === a
        ? function(e) {
            return rr(e, 'dd')
          }
        : a,
    i = new Date()
  return _t(Vt(lr(i), r), Vt(tr(i), r)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function gr(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    i =
      void 0 === o
        ? function(e) {
            return rr(e, 'DD')
          }
        : o,
    u = new Date(t, n),
    s = cr(u),
    c = nr(s),
    l = er(u),
    d = Array.from(Array(c >= a ? c - a : a).keys()).fill(0),
    f = _t(s, l).map(function(e) {
      return {date: e, day: i(e)}
    })
  return d.concat(f)
}
function mr(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    i =
      void 0 === o
        ? function(e) {
            return rr(e, 'DD')
          }
        : o,
    u = e.weekDayFormat,
    s =
      void 0 === u
        ? function(e) {
            return rr(e, 'dd')
          }
        : u,
    c = e.monthLabelFormat,
    l =
      void 0 === c
        ? function(e) {
            return rr(e, 'MMMM YYYY')
          }
        : c
  return {
    days: React.useMemo(
      function() {
        return gr({year: t, month: n, weekStartsOn: a, dayFormat: i})
      },
      [t, n, a],
    ),
    weekDays: React.useMemo(
      function() {
        return dr({weekStartsOn: a, weekDayFormat: s})
      },
      [a],
    ),
    monthLabel: l(new Date(t, n)),
  }
}
function Dr(e, t, n) {
  return !(!t || !n) && fr(e, t, n)
}
function hr(e, t, n) {
  return !!((t && sr(e, t)) || (n && sr(e, n)))
}
function Mr(e, t, n, r) {
  return !!((t && ir(e, t)) || (n && or(e, n)) || (r && r(e)))
}
function Tr(e) {
  var t = cr(e)
  return {year: ur(t), month: ar(t), date: t}
}
function yr() {
  return Tr(vr())
}
function Sr(e, t) {
  var n = t ? Tr(t) : yr(),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = Kt(e[e.length - 1].date, 1)), e.concat([Tr(r)])
      }, a)),
    a
  )
}
function Yr(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = Kt(r, n)), e.concat([Tr(r)])
  }, [])
}
function Or(e, t, n) {
  return e && 'string' == typeof t ? rr(e, t) : e && 'function' == typeof t ? t(e) : n
}
var wr = 'startDate',
  br = 'endDate'
function pr(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.focusedInput,
    a = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDateChange,
    u = e.numberOfMonths,
    s = void 0 === u ? 2 : u,
    c = e.firstDayOfWeek,
    l = void 0 === c ? 1 : c,
    d = React.useState(function() {
      return Sr(s, t)
    }),
    f = d[0],
    p = d[1],
    m = React.useCallback(
      function(e) {
        return Dr(e, t, n)
      },
      [t, n],
    ),
    g = React.useCallback(
      function(e) {
        return hr(e, t, n)
      },
      [t, n],
    ),
    y = React.useCallback(
      function(e) {
        return Mr(e, a, o)
      },
      [a, o],
    )
  return {
    firstDayOfWeek: l,
    activeMonths: f,
    isDateSelected: m,
    isStartOrEndDate: g,
    isDateBlocked: y,
    onResetDates: function() {
      i({startDate: null, endDate: null, focusedInput: wr})
    },
    onDaySelect: function(e) {
      ;(r === br && t && ir(e, t)) || (r === wr && n && or(e, n))
        ? i({endDate: null, startDate: e, focusedInput: br})
        : r === wr
        ? i({endDate: n, startDate: e, focusedInput: br})
        : r === br && t && !ir(e, t) && i({startDate: t, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      p(Yr(f, s, -1))
    },
    goToNextMonths: function() {
      p(Yr(f, s, 1))
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
    startDatePlaceholder: 'Set start date',
    endDatePlaceholder: 'Set end date',
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
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    position,
    border,
    background,
    display,
    borderRadius,
  ),
  CalendarWrapper = styled__default('div')(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  \n  svg {\n    display: block;\n  }\n'],
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
    height,
  )
function Input(e) {
  var t = e.placeholder,
    n = e.id,
    r = e.ariaLabel,
    a = e.onClick,
    o = e.value
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: n,
      display: 'block',
      position: 'relative',
      border: '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      onClick: a,
    },
    React__default.createElement(
      CalendarWrapper,
      {position: 'absolute', height: '12px', width: '12px', top: '16px', left: '16px'},
      React__default.createElement(CalendarIcon, {width: '12px', height: '12px', color: '#BCBEC0'}),
    ),
    React__default.createElement(StyledInput, {
      border: '0',
      px: '44px',
      width: '100%',
      height: '46px',
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
    r = e.color,
    a = e.direction,
    o = void 0 === a ? 'right' : a,
    i = e.className,
    u = void 0 === i ? '' : i,
    s = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: u,
      color: r,
      transform: 'rotate(' + s + ' 0 0)',
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
    u = getBorderColor(n, r),
    s = getBackgroundColor(n, r),
    c = getColor(n, r)
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
      height: '36px',
      width: '36px',
      background: s,
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
    },
    React__default.createElement(
      Flex,
      {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
      React__default.createElement(
        Text,
        {color: c, fontFamily: 'Montserrat', fontWeight: 500, fontSize: '14px'},
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
      u = e.onDaySelect,
      s = mr({year: t, month: n, weekStartsOn: r}),
      c = s.days,
      l = s.weekDays,
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
        {gridTemplateColumns: 'repeat(7, 36px)'},
        l.map(function(e) {
          return React__default.createElement(
            Flex,
            {key: e, justifyContent: 'center', mb: '16px'},
            React__default.createElement(MonthLabel$1, {label: e}),
          )
        }),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(7, 36px)'},
        c.map(function(e, t) {
          return 'object' == typeof e
            ? React__default.createElement(Day$1, {
                isActive: o(e.date),
                date: e.date,
                key: e.day,
                day: e.day,
                disabled: a(e.date),
                isStartOrEnd: i(e.date),
                onDaySelect: u,
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
    u = void 0 === i ? '' : i,
    s = calculateAngle$1(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      className: u,
      color: r,
      transform: 'rotate(' + s + ' 0 0)',
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      stroke: 'currentColor',
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
    i = e.numberOfMonths,
    u = e.onDateChange,
    s = e.firstDayOfWeek,
    c = e.displayFormat,
    l = void 0 === c ? 'MM/DD/YYYY' : c,
    d = e.phrases,
    f = void 0 === d ? datepickerPhrases : d,
    p = pr({
      startDate: t,
      endDate: n,
      focusedInput: o,
      onDateChange: u,
      minBookingDate: r,
      maxBookingDate: a,
      numberOfMonths: i,
      firstDayOfWeek: s,
    }),
    m = p.activeMonths,
    g = p.isDateSelected,
    y = p.isStartOrEndDate,
    h = p.isDateBlocked,
    _ = p.firstDayOfWeek,
    v = p.onDaySelect,
    b = p.onResetDates,
    I = p.goToPreviousMonths,
    D = p.goToNextMonths
  return React__default.createElement(
    StyledDatepicker,
    {background: '#ffffff', p: '32px', borderRadius: '2px'},
    React__default.createElement(
      DateWrapper,
      null,
      React__default.createElement(
        Grid,
        {gridTemplateColumns: '126px 75px 126px'},
        React__default.createElement(Date$1, {
          title: f.datepickerStartDateLabel,
          date: Or(t, l, f.datepickerStartDatePlaceholder),
          isActive: o === wr,
        }),
        React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center'},
          React__default.createElement(ArrowIcon, {
            height: '12px',
            width: '15px',
            color: '#929598',
          }),
        ),
        React__default.createElement(Date$1, {
          title: f.datepickerEndDateLabel,
          date: Or(n, l, f.datepickerEndDatePlaceholder),
          isActive: o === br,
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '28px', position: 'relative'},
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', left: '0'},
        React__default.createElement(NavButton, {type: 'prev', onClick: I}),
      ),
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', right: '0'},
        React__default.createElement(NavButton, {type: 'next', onClick: D}),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0 32px'},
        m.map(function(e) {
          return React__default.createElement(Month, {
            key: e.year + '-' + e.month,
            year: e.year,
            month: e.month,
            firstDayOfWeek: _,
            isDateBlocked: h,
            isDateSelected: g,
            isStartOrEndDate: y,
            onDaySelect: v,
          })
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '32px'},
      React__default.createElement(ResetDates, {onResetDates: b}),
    ),
  )
}
var templateObject_1$9,
  StyledArrowIcon = styled__default(ArrowIcon)(
    templateObject_1$9 ||
      (templateObject_1$9 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    opacity,
  )
function DateRangeInput(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    u = e.numberOfMonths,
    s = e.focusedInput,
    c = e.onDateChange,
    l = e.displayFormat,
    d = void 0 === l ? 'MM/DD/YYYY' : l,
    f = e.phrases,
    p = void 0 === f ? dateRangeInputPhrases : f,
    m = React.useRef(null)
  function g(e) {
    null !== s && m && m.current && !m.current.contains(e.target) && i(null)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', g),
        function() {
          window.removeEventListener('click', g)
        }
      )
    }),
    React__default.createElement(
      Box,
      {position: 'relative'},
      React__default.createElement(
        Grid,
        {gridTemplateColumns: '194px 39px 194px'},
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: p.startDateAriaLabel,
          placeholder: p.startDatePlaceholder,
          value: Or(t, d, ''),
          onClick: function() {
            return i(wr)
          },
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(StyledArrowIcon, {
            width: '15px',
            height: '12px',
            color: '#ffffff',
            opacity: 0.4,
          }),
        ),
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: p.endDateAriaLabel,
          placeholder: p.endDatePlaceholder,
          value: Or(n, d, ''),
          onClick: function() {
            return i(br)
          },
        }),
      ),
      React__default.createElement(
        Box,
        {ref: m, position: 'absolute', bottom: '64px', left: '0'},
        null !== s &&
          React__default.createElement(Datepicker, {
            startDate: t,
            endDate: n,
            minBookingDate: r,
            maxBookingDate: a,
            firstDayOfWeek: o,
            numberOfMonths: u,
            focusedInput: s,
            displayFormat: d,
            onDateChange: c,
          }),
      ),
    )
  )
}
exports.DateRangeInput = DateRangeInput
