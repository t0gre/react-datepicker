'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var React = require('react'),
  React__default = _interopDefault(React),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled),
  hooks = require('@datepicker-react/hooks'),
  __assign = function() {
    return (__assign =
      Object.assign ||
      function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
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
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    l = n ? Symbol.for('react.strict_mode') : 60108,
    i = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    p = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    u = n ? Symbol.for('react.forward_ref') : 60112,
    m = n ? Symbol.for('react.suspense') : 60113,
    f = n ? Symbol.for('react.memo') : 60115,
    _ = n ? Symbol.for('react.lazy') : 60116
  function y(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case p:
            case d:
            case a:
            case i:
            case l:
            case m:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case s:
                case u:
                case c:
                  return e
                default:
                  return t
              }
          }
        case _:
        case f:
        case o:
          return t
      }
    }
  }
  function g(e) {
    return y(e) === d
  }
  ;(t.typeOf = y),
    (t.AsyncMode = p),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = s),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = u),
    (t.Fragment = a),
    (t.Lazy = _),
    (t.Memo = f),
    (t.Portal = o),
    (t.Profiler = i),
    (t.StrictMode = l),
    (t.Suspense = m),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === i ||
        e === l ||
        e === m ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === _ ||
            e.$$typeof === f ||
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === u))
      )
    }),
    (t.isAsyncMode = function(e) {
      return g(e) || y(e) === p
    }),
    (t.isConcurrentMode = g),
    (t.isContextConsumer = function(e) {
      return y(e) === s
    }),
    (t.isContextProvider = function(e) {
      return y(e) === c
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return y(e) === u
    }),
    (t.isFragment = function(e) {
      return y(e) === a
    }),
    (t.isLazy = function(e) {
      return y(e) === _
    }),
    (t.isMemo = function(e) {
      return y(e) === f
    }),
    (t.isPortal = function(e) {
      return y(e) === o
    }),
    (t.isProfiler = function(e) {
      return y(e) === i
    }),
    (t.isStrictMode = function(e) {
      return y(e) === l
    }),
    (t.isSuspense = function(e) {
      return y(e) === m
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
        for (var n, r, o = toObject(e), a = 1; a < arguments.length; a++) {
          for (var l in (n = Object(arguments[a]))) hasOwnProperty.call(n, l) && (o[l] = n[l])
          if (getOwnPropertySymbols) {
            r = getOwnPropertySymbols(n)
            for (var i = 0; i < r.length; i++) propIsEnumerable.call(n, r[i]) && (o[r[i]] = n[r[i]])
          }
        }
        return o
      },
  ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ReactPropTypesSecret_1 = ReactPropTypesSecret,
  has = Function.call.bind(Object.prototype.hasOwnProperty)
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  factoryWithThrowingShims = function() {
    function e(e, t, n, r, o, a) {
      if (a !== ReactPropTypesSecret_1) {
        var l = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
        )
        throw ((l.name = 'Invariant Violation'), l)
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
    var o = n.reduce(function(t, n) {
      return is(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && is(e[t]) ? e[t] : null
          }, e)
    }, null)
    return is(o) ? o : n[n.length - 1]
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
      o = e.alias,
      a = e.key,
      l = e.transformValue,
      i = void 0 === l ? getValue : l,
      c = e.scale,
      s = void 0 === c ? {} : c,
      p = r || n,
      d = function(e) {
        var t = get(e, n, o, null)
        if (!is(t)) return null
        var r = get(e.theme, a, s),
          l = function(e) {
            var t
            return is(e) ? (((t = {})[p] = i(e, r)), t) : null
          }
        if (!isObject(t)) return l(t)
        var c = get(e.theme, 'breakpoints', defaultBreakpoints),
          d = []
        if (Array.isArray(t)) {
          d.push(l(t[0]))
          for (var u = 1; u < t.slice(0, c.length + 1).length; u++) {
            var m = l(t[u])
            if (m) {
              var f,
                _ = createMediaQuery(c[u - 1])
              d.push((((f = {})[_] = m), f))
            }
          }
        } else {
          for (var y in t) {
            var g,
              b = c[y],
              h = createMediaQuery(b),
              v = l(t[y])
            if (b) d.push((((g = {})[h] = v), g))
            else d.unshift(v)
          }
          d.sort()
        }
        return d
      }
    return (
      ((d.propTypes = (((t = {})[n] = cloneFunction(propType)), t))[n].meta = {
        prop: n,
        themeKey: a,
      }),
      o &&
        ((d.propTypes[o] = cloneFunction(propType)),
        (d.propTypes[o].meta = {prop: o, themeKey: a})),
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
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return get(e.theme, [n, e[o]].join('.'), null)
      }
    return (
      (a.propTypes = (((t = {})[o] = propTypes.oneOfType([propTypes.number, propTypes.string])),
      t)),
      a
    )
  },
  spaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  getSpace = function(e, t) {
    if (!num(e)) return px(get(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = get(t, r)
    return num(o) ? px(o * (n ? -1 : 1)) : n ? '-' + o : o
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
  datepickerPhrases = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
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
    gridArea,
    height,
    space,
    width,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
  )
function CalendarIcon(e) {
  var t = e.height,
    n = e.width,
    r = e.color,
    o = e.className,
    a = void 0 === o ? '' : o
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
      className: a,
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
    o = e.onClick,
    a = e.value,
    l = e.showCalendarIcon,
    i = e.inputBorder,
    c = e.inputMinHeight,
    s = e.inputPadding,
    p = e.calendarWrapperTop
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: n,
      display: 'block',
      position: 'relative',
      border: i || '1px solid #d0d0d0',
      background: '#ffffff',
      borderRadius: '2px',
      mb: '0',
    },
    l &&
      React__default.createElement(
        CalendarWrapper,
        {position: 'absolute', height: '12px', width: '12px', top: p || '16px', left: '16px'},
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
      minHeight: c || '46px',
      background: '#ffffff',
      fontFamily: 'Montserrat',
      color: '#001217',
      fontSize: '14px',
      fontWeight: 600,
      id: n,
      placeholder: t,
      'aria-label': r,
      value: a,
      autoComplete: 'off',
      readOnly: !0,
      onFocus: o,
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
    o = e.direction,
    a = void 0 === o ? 'right' : o,
    l = e.className,
    i = void 0 === l ? '' : l,
    c = calculateAngle(a)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
      className: i,
      transform: 'rotate(' + c + ' 0 0)',
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
function useThemeProps(e) {
  void 0 === e && (e = {})
  var t = React.useContext(styled.ThemeContext)
  return React.useMemo(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return __assign({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var templateObject_1$4,
  templateObject_1$5,
  templateObject_2$1,
  globalStyles = {
    fontFamily: 'Montserrat, sans-serif',
    colors: {
      silverCloud: '#929598',
      charcoal: '#001217',
      darcula: '#343132',
      mud: '#58595B',
      greey: '#808285',
    },
  },
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
function SelectDate(e) {
  var t = e.title,
    n = e.isActive,
    r = e.date,
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: globalStyles.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: globalStyles.colors.charcoal,
      selectDateDateFontSize: '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return React__default.createElement(
    Box,
    {p: o.selectDatePadding},
    React__default.createElement(
      Text,
      {
        fontFamily: o.fontFamily,
        fontSize: o.selectDateLabelFontSize,
        color: o.selectDateLabelColor,
        m: o.selectDateLabelMargin,
      },
      t,
    ),
    React__default.createElement(
      StyledDate,
      {
        as: 'span',
        color: o.selectDateDateColor,
        fontSize: o.selectDateDateFontSize,
        fontWeight: o.selectDateDateFontWeight,
        fontFamily: o.fontFamily,
        p: o.selectDateDatePadding,
        isActive: n,
      },
      r,
    ),
  )
}
var MonthLabel = function(e) {
    var t = e.label,
      n = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        monthLabelColor: globalStyles.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: n.fontFamily,
        fontSize: n.monthLabelFontSize,
        fontWeight: n.monthLabelFontWeight,
        lineHeight: n.monthLabelLineHeight,
        color: n.monthLabelColor,
      },
      t,
    )
  },
  MonthLabel$1 = function(e) {
    var t = e.label,
      n = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        dayLabelColor: globalStyles.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: n.fontFamily,
        fontSize: n.dayLabelFontSize,
        fontWeight: n.dayLabelFontWeight,
        color: n.dayLabelColor,
      },
      t,
    )
  },
  dayHeight = style({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayWidth = style({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayHoverColor = style({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  daySelectedHoverColor = style({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayHoverBackground = style({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  daySelectedHoverBackground = style({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  StyledDay = styled__default('button')(
    templateObject_5 ||
      (templateObject_5 = __makeTemplateObject(
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
    dayHeight,
    dayWidth,
    boxShadow,
    background,
    color,
    fontFamily,
    fontWeight,
    fontSize,
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
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              daySelectedHoverBackground,
              daySelectedHoverColor,
            )
          : ''
        : styled.css(
            templateObject_2$2 ||
              (templateObject_2$2 = __makeTemplateObject(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            dayHoverBackground,
            dayHoverColor,
          )
    },
    function(e) {
      var t = e.borderAccessibility
      return styled.css(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function getColor(e, t, n) {
  var r = n.selectedFirstOrLast,
    o = n.normal,
    a = n.selected
  return t ? r : e ? a : o
}
function Day(e) {
  var t = e.day,
    n = e.isActive,
    r = e.isStartOrEnd,
    o = e.disabled,
    a = e.onDaySelect,
    l = e.date,
    i = e.daySize,
    c = useThemeProps({
      fontFamily: globalStyles.fontFamily,
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
    s = React.useMemo(
      function() {
        return getColor(n, r, {
          selectedFirstOrLast: c.borderSelectedFirstOrLastColor,
          selected: c.borderSelectedColor,
          normal: c.borderColor,
        })
      },
      [n, r, c],
    ),
    p = React.useMemo(
      function() {
        return getColor(n, r, {
          selectedFirstOrLast: c.daySelectedFirstOrLastBackground,
          selected: c.daySelectedBackground,
          normal: c.dayBackground,
        })
      },
      [n, r, c],
    ),
    d = React.useMemo(
      function() {
        return getColor(n, r, {
          selectedFirstOrLast: c.daySelectedFirstOrLastColor,
          selected: c.daySelectedColor,
          normal: c.dayColor,
        })
      },
      [n, r, c],
    )
  return React__default.createElement(
    StyledDay,
    {
      role: 'button',
      onClick: function() {
        return a(l)
      },
      disabled: o,
      isActive: n,
      isStartOrEnd: r,
      dayHeight: i,
      dayWidth: i,
      background: p,
      color: d,
      fontFamily: c.fontFamily,
      fontWeight: c.dayFontWeight,
      fontSize: c.dayFontSize,
      daySelectedHoverBackground: c.daySelectedHoverBackground,
      dayHoverBackground: c.dayHoverBackground,
      dayHoverColor: c.dayHoverColor,
      daySelectedHoverColor: c.daySelectedHoverColor,
      borderAccessibility: c.borderAccessibility,
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
    React__default.createElement(
      Flex,
      {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
      t,
    ),
  )
}
var templateObject_1$6,
  templateObject_2$2,
  templateObject_3$1,
  templateObject_4,
  templateObject_5,
  Day$1 = React__default.memo(Day),
  Month = function(e) {
    var t = e.year,
      n = e.month,
      r = e.firstDayOfWeek,
      o = e.isDateBlocked,
      a = e.isDateSelected,
      l = e.isStartOrEndDate,
      i = e.onDaySelect,
      c = e.daySize,
      s = void 0 === c ? 45 : c,
      p = hooks.useMonth({year: t, month: n, weekStartsOn: r}),
      d = p.days,
      u = p.weekDays,
      m = p.monthLabel
    return React__default.createElement(
      'div',
      null,
      React__default.createElement(
        Flex,
        {justifyContent: 'center', mb: '28px'},
        React__default.createElement(MonthLabel, {label: m}),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(7, ' + s + 'px)'},
        u.map(function(e) {
          return React__default.createElement(
            Flex,
            {key: e, justifyContent: 'center', mb: '16px'},
            React__default.createElement(MonthLabel$1, {label: e}),
          )
        }),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(7, ' + s + 'px)'},
        d.map(function(e, t) {
          return 'object' == typeof e
            ? React__default.createElement(Day$1, {
                isActive: a(e.date),
                date: e.date,
                key: e.day,
                day: e.day,
                disabled: o(e.date),
                isStartOrEnd: l(e.date),
                onDaySelect: i,
                daySize: s,
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
    o = e.className,
    a = void 0 === o ? '' : o
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
      className: a,
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
var templateObject_1$7,
  StyledReactDates = styled__default('button')(
    templateObject_1$7 ||
      (templateObject_1$7 = __makeTemplateObject(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  )
function ResetDates(e) {
  var t = e.onResetDates,
    n = e.text,
    r = React.useRef(null),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: globalStyles.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: globalStyles.colors.darcula,
      resetDatesTextMargin: '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return React__default.createElement(
    StyledReactDates,
    {
      onClick: t,
      onMouseUp: function() {
        r && r.current && r.current.blur()
      },
      ref: r,
    },
    React__default.createElement(CaretIcon, {
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
    }),
    React__default.createElement(
      Text,
      {
        m: o.resetDatesTextMargin,
        lineHeight: o.resetDatesTextLineHeight,
        fontFamily: o.fontFamily,
        fontSize: o.resetDatesTextFontSize,
        color: o.resetDatesTextColor,
      },
      n,
    ),
  )
}
var templateObject_1$8,
  templateObject_2$3,
  Svg = styled__default('svg')(
    templateObject_2$3 ||
      (templateObject_2$3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      var t = e.angle
      return styled.css(
        templateObject_1$8 ||
          (templateObject_1$8 = __makeTemplateObject(
            ['\n      transform: rotate(', 'deg);\n    '],
            ['\n      transform: rotate(', 'deg);\n    '],
          )),
        t,
      )
    },
  )
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
    o = e.direction,
    a = void 0 === o ? 'right' : o,
    l = e.className,
    i = void 0 === l ? '' : l,
    c = calculateAngle$1(a)
  return React__default.createElement(
    Svg,
    {
      width: n,
      height: t,
      color: r,
      className: i,
      angle: c,
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
var templateObject_1$9,
  StyledNavButton = styled__default('button')(
    templateObject_1$9 ||
      (templateObject_1$9 = __makeTemplateObject(
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
    n = e.onClick,
    r = React.useRef(null),
    o = useThemeProps({
      navButtonWidth: '30px',
      navButtonHeight: '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: '11px',
      navButtonIconWidth: '18px',
      navButtonIconColor: globalStyles.colors.greey,
    })
  return React__default.createElement(
    StyledNavButton,
    {
      width: o.navButtonWidth,
      height: o.navButtonHeight,
      background: o.navButtonBackground,
      border: o.navButtonBorder,
      p: o.navButtonPadding,
      type: 'button',
      onClick: n,
      onMouseUp: function() {
        r && r.current && r.current.blur()
      },
      ref: r,
    },
    React__default.createElement(CaretIcon$1, {
      width: o.navButtonIconWidth,
      height: o.navButtonIconHeight,
      color: o.navButtonIconColor,
      direction: 'next' === t ? 'right' : 'left',
    }),
  )
}
function CloseIcon(e) {
  var t = e.height,
    n = e.width,
    r = e.color,
    o = e.className,
    a = void 0 === o ? '' : o
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
      className: a,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var templateObject_1$a,
  templateObject_2$4,
  Text$1 = styled__default('div')(
    templateObject_1$a ||
      (templateObject_1$a = __makeTemplateObject(
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
        [
          '\n  margin-left: 16px;\n  margin-top: 1px;\n  float: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #929598;\n  transition: color 0.15s;\n',
        ],
      )),
  ),
  Wrapper = styled__default('button')(
    templateObject_2$4 ||
      (templateObject_2$4 = __makeTemplateObject(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background: transparent;\n  padding: 0;\n  border: 0;\n\n  svg {\n    transition: color 0.15s;\n  }\n\n  &:hover {\n    ',
          ' {\n      color: #343132;\n    }\n\n    svg {\n      color: #343132;\n    }\n  }\n',
        ],
      )),
    Text$1,
  )
function Close(e) {
  var t = e.onClick
  return React__default.createElement(
    Wrapper,
    {onClick: t},
    React__default.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React__default.createElement(Text$1, null, 'Close'),
  )
}
var templateObject_1$b,
  templateObject_2$5,
  StyledDatepicker = styled__default('div')(
    templateObject_1$b ||
      (templateObject_1$b = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    background,
    space,
    borderRadius,
    position,
  ),
  DateWrapper = styled__default('div')(
    templateObject_2$5 ||
      (templateObject_2$5 = __makeTemplateObject(
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
    o = e.maxBookingDate,
    a = e.focusedInput,
    l = e.onDateChange,
    i = e.onClose,
    c = void 0 === i ? function() {} : i,
    s = e.numberOfMonths,
    p = e.firstDayOfWeek,
    d = e.displayFormat,
    u = void 0 === d ? 'MM/DD/YYYY' : d,
    m = e.phrases,
    f = void 0 === m ? datepickerPhrases : m,
    _ = e.styles,
    y = void 0 === _ ? {} : _,
    g = hooks.useDatepicker({
      startDate: t,
      endDate: n,
      focusedInput: a,
      onDateChange: l,
      minBookingDate: r,
      maxBookingDate: o,
      numberOfMonths: s,
      firstDayOfWeek: p,
    }),
    b = g.activeMonths,
    h = g.isDateSelected,
    v = g.isStartOrEndDate,
    x = g.isDateBlocked,
    k = g.firstDayOfWeek,
    S = g.onDaySelect,
    I = g.onResetDates,
    O = g.goToPreviousMonths,
    C = g.goToNextMonths,
    D = g.numberOfMonths
  return React__default.createElement(
    StyledDatepicker,
    {background: '#ffffff', p: '32px', borderRadius: '2px', position: 'relative'},
    React__default.createElement(
      Box,
      {position: 'absolute', right: '32px', zIndex: 1},
      React__default.createElement(Close, {onClick: c}),
    ),
    React__default.createElement(
      DateWrapper,
      null,
      React__default.createElement(
        Grid,
        {gridTemplateColumns: y.selectDateGridTemplateColumns || '126px 75px 126px'},
        React__default.createElement(SelectDate, {
          title: f.datepickerStartDateLabel,
          date: hooks.getInputValue(t, u, f.datepickerStartDatePlaceholder),
          isActive: a === hooks.START_DATE,
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
        React__default.createElement(SelectDate, {
          title: f.datepickerEndDateLabel,
          date: hooks.getInputValue(n, u, f.datepickerEndDatePlaceholder),
          isActive: a === hooks.END_DATE,
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '28px', position: 'relative'},
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', left: '0'},
        React__default.createElement(NavButton, {type: 'prev', onClick: O}),
      ),
      React__default.createElement(
        Box,
        {position: 'absolute', top: '-5px', right: '0'},
        React__default.createElement(NavButton, {type: 'next', onClick: C}),
      ),
      React__default.createElement(
        Grid,
        {gridTemplateColumns: 'repeat(' + D + ', 1fr)', gridGap: '0 32px'},
        b.map(function(e) {
          return React__default.createElement(Month, {
            key: e.year + '-' + e.month,
            year: e.year,
            month: e.month,
            firstDayOfWeek: k,
            isDateBlocked: x,
            isDateSelected: h,
            isStartOrEndDate: v,
            onDaySelect: S,
          })
        }),
      ),
    ),
    React__default.createElement(
      Box,
      {mt: '32px'},
      React__default.createElement(ResetDates, {onResetDates: I, text: f.resetDates}),
    ),
  )
}
var templateObject_1$c,
  templateObject_2$6,
  InputArrowIcon = styled__default(ArrowIcon)(
    templateObject_1$c ||
      (templateObject_1$c = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    opacity,
    color,
  ),
  InputGrid = styled__default(Grid)(
    templateObject_2$6 ||
      (templateObject_2$6 = __makeTemplateObject(
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
    o = e.maxBookingDate,
    a = e.firstDayOfWeek,
    l = e.onFocusChange,
    i = e.numberOfMonths,
    c = e.focusedInput,
    s = e.onDateChange,
    p = e.onClose,
    d = void 0 === p ? function() {} : p,
    u = e.showStartDateCalendarIcon,
    m = void 0 === u || u,
    f = e.showEndDateCalendarIcon,
    _ = void 0 === f || f,
    y = e.styles,
    g = void 0 === y ? {} : y,
    b = e.displayFormat,
    h = void 0 === b ? 'MM/DD/YYYY' : b,
    v = e.phrases,
    x = void 0 === v ? dateRangeInputPhrases : v,
    k = React.useRef(null)
  function S(e) {
    null !== c && k && k.current && !k.current.contains(e.target) && l(null)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', S),
        function() {
          window.removeEventListener('click', S)
        }
      )
    }),
    React__default.createElement(
      Box,
      {position: 'relative', ref: k},
      React__default.createElement(
        InputGrid,
        {
          background: g.inputGridBackground || 'transparent',
          gridTemplateColumns: g.inputGridTemplateColumns || '194px 39px 194px',
          border: g.inputGridBorder || '0',
          borderRadius: g.inputGridBorderRadius || '0',
        },
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: x.startDateAriaLabel,
          placeholder: x.startDatePlaceholder,
          value: hooks.getInputValue(t, h, ''),
          onClick: function() {
            return l(hooks.START_DATE)
          },
          showCalendarIcon: m,
          inputBorder: g.inputBorder,
          inputMinHeight: g.inputMinHeight,
          inputPadding: g.inputStartDatePadding || g.inputPadding,
          calendarWrapperTop: g.inputCalendarWrapperTop,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(InputArrowIcon, {
            width: '15px',
            height: '12px',
            color: g.inputArrowIconColor || '#ffffff',
            opacity: g.inputArrowIconOpacity || 0.4,
          }),
        ),
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: x.endDateAriaLabel,
          placeholder: x.endDatePlaceholder,
          value: hooks.getInputValue(n, h, ''),
          onClick: function() {
            return l(t ? hooks.END_DATE : hooks.START_DATE)
          },
          showCalendarIcon: _,
          inputBorder: g.inputBorder,
          inputMinHeight: g.inputMinHeight,
          calendarWrapperTop: g.inputCalendarWrapperTop,
          inputPadding: g.inputEndDatePadding || g.inputPadding,
        }),
      ),
      React__default.createElement(
        Box,
        {position: 'absolute', bottom: g.datepickerBottom || '65px', left: g.datepickerLeft || '0'},
        null !== c &&
          React__default.createElement(Datepicker, {
            onClose: function() {
              d(), l(null)
            },
            startDate: t,
            endDate: n,
            minBookingDate: r,
            maxBookingDate: o,
            firstDayOfWeek: a,
            numberOfMonths: i,
            focusedInput: c,
            displayFormat: h,
            onDateChange: s,
            styles: {
              daySize: g.daySize,
              selectDateGridTemplateColumns: g.selectDateGridTemplateColumns,
            },
          }),
      ),
    )
  )
}
;(exports.DateRangeInput = DateRangeInput), (exports.Datepicker = Datepicker)
