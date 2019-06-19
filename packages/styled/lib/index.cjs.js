'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var React = require('react'),
  React__default = _interopDefault(React),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled),
  a = function(e) {
    var t = new Date(e.getTime()),
      a = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * a + (t.getTime() % 6e4)
  },
  o = function(e) {
    return e instanceof Date
  },
  u = 36e5,
  i = 6e4,
  s = 2,
  c = /[T ]/,
  f = /:/,
  D = /^(\d{2})$/,
  d = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  l = /^(\d{4})/,
  g = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  v = /^-(\d{2})$/,
  m = /^-?(\d{3})$/,
  h = /^-?(\d{2})-?(\d{2})$/,
  y = /^-?W(\d{2})$/,
  M = /^-?W(\d{2})-?(\d{1})$/,
  k = /^(\d{2}([.,]\d*)?)$/,
  p = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  w = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  T = /([Z+-].*)$/,
  F = /^(Z)$/,
  S = /^([+-])(\d{2})$/,
  Y = /^([+-])(\d{2}):?(\d{2})$/
function b(e, t, a) {
  ;(t = t || 0), (a = a || 0)
  var n = new Date(0)
  n.setUTCFullYear(e, 0, 4)
  var r = 7 * t + a + 1 - (n.getUTCDay() || 7)
  return n.setUTCDate(n.getUTCDate() + r), n
}
var x = function(e, t) {
    if (o(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? s : Number(n)
    var r,
      _,
      x,
      R = (function(e) {
        var t,
          a = {},
          n = e.split(c)
        if ((f.test(n[0]) ? ((a.date = null), (t = n[0])) : ((a.date = n[0]), (t = n[1])), t)) {
          var r = T.exec(t)
          r ? ((a.time = t.replace(r[1], '')), (a.timezone = r[1])) : (a.time = t)
        }
        return a
      })(e),
      O = (function(e, t) {
        var a,
          n = d[t],
          r = g[t]
        if ((a = l.exec(e) || r.exec(e))) {
          var o = a[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((a = D.exec(e) || n.exec(e))) {
          var i = a[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(R.date, n),
      C = O.year,
      B = (function(e, t) {
        if (null === t) return null
        var a, n, r
        if (0 === e.length) return (n = new Date(0)).setUTCFullYear(t), n
        if ((a = v.exec(e)))
          return (n = new Date(0)), (r = parseInt(a[1], 10) - 1), n.setUTCFullYear(t, r), n
        if ((a = m.exec(e))) {
          n = new Date(0)
          var o = parseInt(a[1], 10)
          return n.setUTCFullYear(t, 0, o), n
        }
        if ((a = h.exec(e))) {
          ;(n = new Date(0)), (r = parseInt(a[1], 10) - 1)
          var i = parseInt(a[2], 10)
          return n.setUTCFullYear(t, r, i), n
        }
        return (a = y.exec(e))
          ? b(t, parseInt(a[1], 10) - 1)
          : (a = M.exec(e))
          ? b(t, parseInt(a[1], 10) - 1, parseInt(a[2], 10) - 1)
          : null
      })(O.restDateString, C)
    if (B) {
      var j,
        W = B.getTime(),
        $ = 0
      if (
        (R.time &&
          ($ = (function(e) {
            var t, a, n
            if ((t = k.exec(e))) return ((a = parseFloat(t[1].replace(',', '.'))) % 24) * u
            if ((t = p.exec(e)))
              return (
                (a = parseInt(t[1], 10)),
                (n = parseFloat(t[2].replace(',', '.'))),
                (a % 24) * u + n * i
              )
            if ((t = w.exec(e))) {
              ;(a = parseInt(t[1], 10)), (n = parseInt(t[2], 10))
              var r = parseFloat(t[3].replace(',', '.'))
              return (a % 24) * u + n * i + 1e3 * r
            }
            return null
          })(R.time)),
        R.timezone)
      )
        (r = R.timezone),
          (j =
            ((_ = F.exec(r))
              ? 0
              : (_ = S.exec(r))
              ? ((x = 60 * parseInt(_[2], 10)), '+' === _[1] ? -x : x)
              : (_ = Y.exec(r))
              ? ((x = 60 * parseInt(_[2], 10) + parseInt(_[3], 10)), '+' === _[1] ? -x : x)
              : 0) * i)
      else {
        var L = W + $,
          I = new Date(L)
        j = a(I)
        var H = new Date(L)
        H.setDate(I.getDate() + 1)
        var E = a(H) - a(I)
        E > 0 && (j += E)
      }
      return new Date(W + $ + j)
    }
    return new Date(e)
  },
  B = function(e) {
    var t = x(e),
      a = new Date(0)
    return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a
  },
  H = function(e) {
    var t = x(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = 6e4,
  O = 864e5,
  A = function(e, t) {
    var a = H(e),
      n = H(t),
      r = a.getTime() - a.getTimezoneOffset() * I,
      o = n.getTime() - n.getTimezoneOffset() * I
    return Math.round((r - o) / O)
  },
  W = function(e) {
    var t = x(e)
    return A(t, B(t)) + 1
  },
  L = function(e, t) {
    var a = (t && Number(t.weekStartsOn)) || 0,
      n = x(e),
      r = n.getDay(),
      o = (r < a ? 7 : 0) + r - a
    return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
  },
  $ = function(e) {
    return L(e, {weekStartsOn: 1})
  },
  E = function(e) {
    var t = x(e),
      a = t.getFullYear(),
      n = new Date(0)
    n.setFullYear(a + 1, 0, 4), n.setHours(0, 0, 0, 0)
    var r = $(n),
      o = new Date(0)
    o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0)
    var i = $(o)
    return t.getTime() >= r.getTime() ? a + 1 : t.getTime() >= i.getTime() ? a : a - 1
  },
  G = function(e) {
    var t = E(e),
      a = new Date(0)
    return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), $(a)
  },
  C = 6048e5,
  N = function(e) {
    var t = x(e),
      a = $(t).getTime() - G(t).getTime()
    return Math.round(a / C) + 1
  },
  R = function(e) {
    if (o(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  U = [
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
  z = function(e) {
    var t = []
    for (var a in e) e.hasOwnProperty(a) && t.push(a)
    var n = U.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + n.join('|') + '|.)', 'g')
  },
  X = function() {
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
      a = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      n = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      r = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      o = ['AM', 'PM'],
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
          return a[e.getDay()]
        },
        ddd: function(e) {
          return n[e.getDay()]
        },
        dddd: function(e) {
          return r[e.getDay()]
        },
        A: function(e) {
          return e.getHours() / 12 >= 1 ? o[1] : o[0]
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
        c[e + 'o'] = function(t, a) {
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
          })(a[e](t))
        }
      }),
      {formatters: c, formattingTokensRegExp: z(c)}
    )
  },
  Z = {
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
        localize: function(t, a, n) {
          var r
          return (
            (n = n || {}),
            (r =
              'string' == typeof e[t]
                ? e[t]
                : 1 === a
                ? e[t].one
                : e[t].other.replace('{{count}}', a)),
            n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
          )
        },
      }
    })(),
    format: X(),
  },
  J = {
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
      return N(e)
    },
    WW: function(e) {
      return Q(N(e), 2)
    },
    YY: function(e) {
      return Q(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return Q(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(E(e)).substr(2)
    },
    GGGG: function(e) {
      return E(e)
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
      return Q(J.h(e), 2)
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
  var a = e > 0 ? '-' : '+',
    n = Math.abs(e),
    r = n % 60
  return a + Q(Math.floor(n / 60), 2) + t + Q(r, 2)
}
function Q(e, t) {
  for (var a = Math.abs(e).toString(); a.length < t; ) a = '0' + a
  return a
}
var j = function(e, t, a) {
    var n = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      r = (a || {}).locale,
      o = Z.format.formatters,
      i = Z.format.formattingTokensRegExp
    r &&
      r.format &&
      r.format.formatters &&
      ((o = r.format.formatters),
      r.format.formattingTokensRegExp && (i = r.format.formattingTokensRegExp))
    var l = x(e)
    return R(l)
      ? (function(e, t, a) {
          var n,
            r,
            o,
            i = e.match(a),
            l = i.length
          for (n = 0; n < l; n++)
            (r = t[i[n]] || J[i[n]]),
              (i[n] =
                r ||
                ((o = i[n]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', a = 0; a < l; a++)
              i[a] instanceof Function ? (t += i[a](e, J)) : (t += i[a])
            return t
          }
        })(n, o, i)(l)
      : 'Invalid Date'
  },
  K = function(e, t) {
    var a = x(e),
      n = Number(t)
    return a.setDate(a.getDate() + n), a
  },
  q = function(e, t, a) {
    var n = x(e),
      r = void 0 !== a ? a : 1,
      o = x(t).getTime()
    if (n.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = n
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(x(l)), l.setDate(l.getDate() + r)
    return i
  },
  V = function(e) {
    var t = x(e),
      a = t.getMonth()
    return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  _ = function(e, t) {
    var a = (t && Number(t.weekStartsOn)) || 0,
      n = x(e),
      r = n.getDay(),
      o = 6 + (r < a ? -7 : 0) - (r - a)
    return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
  },
  ee = function(e) {
    return x(e).getDay()
  },
  te = function(e) {
    var t = x(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function ne(e) {
  var t = void 0 === e ? {} : e,
    a = t.firstDayOfWeek,
    n = void 0 === a ? 1 : a,
    r = t.weekdayLabelFormat,
    o =
      void 0 === r
        ? function(e) {
            return j(e, 'dd')
          }
        : r,
    i = new Date()
  return q(K(L(i), n), K(_(i), n)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function re(e) {
  var t = e.year,
    a = e.month,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    o = e.dayLabelFormat,
    i =
      void 0 === o
        ? function(e) {
            return j(e, 'DD')
          }
        : o,
    l = new Date(t, a),
    c = te(l),
    s = ee(c),
    d = V(l),
    p = Array.from(Array(s >= r ? s - r : r).keys()).fill(0),
    u = q(c, d).map(function(e) {
      return {date: e, dayLabel: i(e)}
    })
  return p.concat(u)
}
var ae = function(e) {
    return j(e, 'DD')
  },
  oe = function(e) {
    return j(e, 'dd')
  },
  ue = function(e) {
    return j(e, 'MMMM YYYY')
  }
function ie(e) {
  var t = e.year,
    a = e.month,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    o = e.dayLabelFormat,
    i = void 0 === o ? ae : o,
    l = e.weekdayLabelFormat,
    c = void 0 === l ? oe : l,
    s = e.monthLabelFormat,
    d = void 0 === s ? ue : s
  return {
    days: React.useMemo(
      function() {
        return re({year: t, month: a, firstDayOfWeek: r, dayLabelFormat: i})
      },
      [t, a, r, i],
    ),
    weekdayLabels: React.useMemo(
      function() {
        return ne({firstDayOfWeek: r, weekdayLabelFormat: c})
      },
      [r, c],
    ),
    monthLabel: d(new Date(t, a)),
  }
}
var se = function(e, t) {
    var a = x(e),
      n = x(t)
    return a.getTime() < n.getTime()
  },
  ce = function(e, t) {
    var a = x(e),
      n = x(t)
    return a.getTime() > n.getTime()
  },
  fe = function(e, t, a) {
    var n = x(e).getTime(),
      r = x(t).getTime(),
      o = x(a).getTime()
    if (r > o) throw new Error('The start of the range cannot be after the end of the range')
    return n >= r && n <= o
  },
  De = function(e, t) {
    var a = H(e),
      n = H(t)
    return a.getTime() === n.getTime()
  },
  de = function(e, t) {
    var a = x(e),
      n = x(t)
    return a.getFullYear() === n.getFullYear() && a.getMonth() === n.getMonth()
  },
  le = function(e) {
    return x(e).getFullYear()
  },
  ge = function(e) {
    return x(e).getMonth()
  },
  ve = function() {
    return H(new Date())
  },
  me = function(e) {
    var t = x(e),
      a = t.getFullYear(),
      n = t.getMonth(),
      r = new Date(0)
    return r.setFullYear(a, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
  },
  he = function(e, t) {
    var a = x(e),
      n = Number(t),
      r = a.getMonth() + n,
      o = new Date(0)
    o.setFullYear(a.getFullYear(), r, 1), o.setHours(0, 0, 0, 0)
    var i = me(o)
    return a.setMonth(r, Math.min(i, a.getDate())), a
  }
function ye(e, t, a) {
  return !(!t || !a) && fe(e, t, a)
}
function Me(e, t, a) {
  return !!((t && De(e, t)) || (a && De(e, a)))
}
function ke(e) {
  var t = e.date,
    a = e.minBookingDate,
    n = e.maxBookingDate,
    r = e.isDateBlockedFn,
    o = e.startDate,
    i = e.endDate,
    l = e.minBookingDays,
    c = void 0 === l ? 1 : l,
    s = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a,
    d = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
  return !!(
    (s && se(t, s)) ||
    (d && ce(t, d)) ||
    (o && !i && c > 1 && fe(t, o, K(o, c - 2))) ||
    (r && r(t))
  )
}
function pe(e) {
  var t = te(e)
  return {year: le(t), month: ge(t), date: t}
}
function we() {
  return pe(ve())
}
function Te(e, t) {
  var a = t ? pe(t) : we(),
    n = a.date,
    r = [a]
  return (
    e > 1 &&
      (r = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = he(e[e.length - 1].date, 1)), e.concat([pe(n)])
      }, r)),
    r
  )
}
function Fe(e, t, a) {
  var n = e[a > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (n = he(n, a)), a > 0 ? e.concat([pe(n)]) : [pe(n)].concat(e)
  }, [])
}
function Se(e, t, a) {
  return e && 'string' == typeof t ? j(e, t) : e && 'function' == typeof t ? t(e) : a
}
function Ye(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.isDateBlocked,
    r = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !se(t, K(i, -1)),
    s = !l || !ce(K(t, r - 1), l)
  if (t && 1 === r && !a && !n(t)) return !0
  if ((t && r > 1 && !a && !o) || (t && r > 0 && o && c && s) || (t && r > 0 && o && !i && !l))
    return q(t, K(t, r - 1)).reduce(function(e, t) {
      return e ? !n(t) : e
    }, !0)
  if (t && a && !o) {
    var d = K(t, r - 1)
    return (
      !se(a, d) &&
      q(t, a).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    )
  }
  return !1
}
var be = 'startDate',
  xe = 'endDate'
function Be(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.focusedInput,
    r = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDatesChange,
    l = e.exactMinBookingDays,
    c = void 0 !== l && l,
    s = e.minBookingDays,
    d = void 0 === s ? 1 : s,
    p = e.numberOfMonths,
    u = void 0 === p ? 2 : p,
    f = e.firstDayOfWeek,
    g = void 0 === f ? 1 : f,
    m = e.isDateBlocked,
    y =
      void 0 === m
        ? function() {
            return !1
          }
        : m,
    h = React.useState(function() {
      return Te(u, t)
    }),
    b = h[0],
    D = h[1],
    v = React.useState(null),
    k = v[0],
    _ = v[1],
    x = React.useState(t),
    S = x[0],
    R = x[1],
    O = React.useCallback(
      function(e) {
        R(e), (!S || (S && !de(e, S))) && D(Te(u, e))
      },
      [R, D, u, S],
    ),
    C = React.useCallback(
      function(e) {
        return ye(e, t, a)
      },
      [t, a],
    ),
    w = React.useCallback(
      function(e) {
        return Me(e, t, a)
      },
      [t, a],
    ),
    B = React.useCallback(
      function(e) {
        return ke({
          date: e,
          minBookingDate: r,
          maxBookingDate: o,
          startDate: t,
          endDate: a,
          minBookingDays: d,
          isDateBlockedFn: y,
        })
      },
      [r, o, t, a, d, y],
    ),
    j = React.useCallback(
      function(e) {
        return !!S && De(e, S)
      },
      [S],
    ),
    W = React.useCallback(
      function(e) {
        return (function(e) {
          var t = e.date,
            a = e.startDate,
            n = e.endDate,
            r = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && fe(t, o, K(o, i - 1))
            ? q(o, K(o, i - 1)).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
            : a && !n && o && fe(t, a, K(a, i - 1)) && De(a, o) && i > 1
            ? q(a, K(a, i - 1)).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
            : !(!a || n || !o || se(o, a) || !fe(t, a, o)) &&
              q(a, o).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: k,
          startDate: t,
          endDate: a,
          minBookingDays: d,
          exactMinBookingDays: c,
          isDateBlocked: y,
        })
      },
      [k, t, a, d, c, y],
    )
  function F(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !S
    ) {
      var t = b[0]
      O(t.date), D(Te(u, t.date))
    }
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', F),
        function() {
          window.removeEventListener('keydown', F)
        }
      )
    }),
    {
      firstDayOfWeek: g,
      activeMonths: b,
      isDateSelected: C,
      isDateHovered: W,
      isFirstOrLastSelectedDate: w,
      isDateBlocked: B,
      numberOfMonths: u,
      isDateFocused: j,
      focusedDate: S,
      hoveredDate: k,
      onResetDates: function() {
        i({startDate: null, endDate: null, focusedInput: be})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var n = !B(e) || (t && De(e, t)),
              i = !r || !se(e, K(r, -1)),
              l = !o || !ce(e, o),
              s = K(e, d - 1),
              p = !r || !se(s, r),
              u = !o || !ce(s, o),
              f = c && d > 1 && i && l && p && u,
              g = t && !a && !c && i && l,
              m = !(d > 1 && t) || fe(e, t, K(t, d - 2)),
              y = t && De(e, t) && m
            n && (f || g || y) ? _(e) : null !== k && _(null)
          }
        } else _(null)
      },
      onDateSelect: function(e) {
        ;(n === xe || n === be) &&
        d > 0 &&
        c &&
        Ye({
          minBookingDays: d,
          exactMinBookingDays: c,
          minBookingDate: r,
          maxBookingDate: o,
          isDateBlocked: y,
          startDate: e,
          endDate: null,
        })
          ? i({startDate: e, endDate: K(e, d - 1), focusedInput: null})
          : ((n === xe && t && se(e, t)) || (n === be && a && ce(e, a))) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: y, startDate: e, endDate: null})
          ? i({endDate: null, startDate: e, focusedInput: xe})
          : n === be && !c && Ye({minBookingDays: d, isDateBlocked: y, endDate: a, startDate: e})
          ? i({endDate: a, startDate: e, focusedInput: xe})
          : n === be && !c && Ye({minBookingDays: d, isDateBlocked: y, endDate: null, startDate: e})
          ? i({endDate: null, startDate: e, focusedInput: xe})
          : n === xe &&
            t &&
            !se(e, t) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: y, startDate: t, endDate: e}) &&
            i({startDate: t, endDate: e, focusedInput: null}),
          n === xe || (S && (!S || de(e, S))) || D(Te(u, e))
      },
      onDateFocus: O,
      goToPreviousMonths: function() {
        D(Fe(b, u, -1)), R(null)
      },
      goToNextMonths: function() {
        D(Fe(b, u, 1)), R(null)
      },
    }
  )
}
function He(e) {
  var t = e.date,
    a = e.focusedDate,
    n = e.isDateSelected,
    r = e.isDateFocused,
    o = e.isFirstOrLastSelectedDate,
    i = e.isDateHovered,
    l = e.isDateBlocked,
    c = e.onDateSelect,
    s = e.onDateFocus,
    d = e.onDateHover,
    p = e.dayRef,
    u = React.useCallback(
      function() {
        return c(t)
      },
      [t, c],
    ),
    f = React.useCallback(
      function() {
        return d(t)
      },
      [t, d],
    )
  React.useEffect(
    function() {
      p && p.current && r(t) && p.current.focus()
    },
    [p, t, r],
  )
  var g = l(t) && !i(t)
  return {
    tabIndex: null === a || r(t) ? 0 : -1,
    isSelected: n(t),
    isSelectedStartOrEnd: o(t),
    isWithinHoverRange: i(t),
    disabledDate: g,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? s(K(t, 1))
        : 'ArrowLeft' === e.key
        ? s(K(t, -1))
        : 'ArrowUp' === e.key
        ? s(K(t, -7))
        : 'ArrowDown' === e.key && s(K(t, 7))
    },
    onClick: g ? function() {} : u,
    onMouseEnter: f,
  }
}
var __assign = function() {
  return (__assign =
    Object.assign ||
    function(e) {
      for (var t, a = 1, n = arguments.length; a < n; a++)
        for (var r in (t = arguments[a]))
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
      return e
    }).apply(this, arguments)
}
function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var getOwnPropertySymbols = Object.getOwnPropertySymbols,
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
    for (var t = {}, a = 0; a < 10; a++) t['_' + String.fromCharCode(a)] = a
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(t)
        .map(function(e) {
          return t[e]
        })
        .join('')
    )
      return !1
    var n = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        n[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
    )
  } catch (e) {
    return !1
  }
}
var objectAssign = shouldUseNative()
    ? Object.assign
    : function(e, t) {
        for (var a, n, r = toObject(e), o = 1; o < arguments.length; o++) {
          for (var i in (a = Object(arguments[o]))) hasOwnProperty.call(a, i) && (r[i] = a[i])
          if (getOwnPropertySymbols) {
            n = getOwnPropertySymbols(a)
            for (var l = 0; l < n.length; l++) propIsEnumerable.call(a, n[l]) && (r[n[l]] = a[n[l]])
          }
        }
        return r
      },
  merge = function(e, t) {
    var a = objectAssign({}, e, t)
    for (var n in e) {
      var r
      e[n] &&
        'object' == typeof t[n] &&
        objectAssign(a, (((r = {})[n] = objectAssign(e[n], t[n])), r))
    }
    return a
  },
  defaults = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  createMediaQuery = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  getValue = function(e, t) {
    return get(t, e, e)
  },
  get = function(e, t, a, n, r) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : r
    return e === r ? a : e
  },
  createParser = function(e) {
    var t = {},
      a = function(a) {
        var n = {}
        for (var r in a)
          if (e[r]) {
            var o = e[r],
              i = a[r],
              l = get(a.theme, o.scale, o.defaults)
            if ('object' != typeof i) objectAssign(n, o(i, l))
            else {
              if (
                ((t.breakpoints =
                  t.breakpoints || get(a.theme, 'breakpoints', defaults.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(createMediaQuery))),
                  (n = merge(n, parseResponsiveStyle(t.media, o, l, i)))
                continue
              }
              null !== i && (n = merge(n, parseResponsiveObject(t.breakpoints, o, l, i)))
            }
          }
        return n
      }
    return (a.config = e), (a.propNames = Object.keys(e)), (a.cache = t), a
  },
  parseResponsiveStyle = function(e, t, a, n) {
    var r = {}
    return (
      n.slice(0, e.length).forEach(function(n, o) {
        var i,
          l = e[o],
          c = t(n, a)
        void 0 !== c && objectAssign(r, l ? (((i = {})[l] = objectAssign({}, r[l], c)), i) : c)
      }),
      r
    )
  },
  parseResponsiveObject = function(e, t, a, n) {
    var r = {}
    for (var o in n) {
      var i = e[o],
        l = t(n[o], a)
      if (i) {
        var c,
          s = createMediaQuery(i)
        objectAssign(r, (((c = {})[s] = objectAssign({}, r[s], l)), c))
      } else objectAssign(r, l)
    }
    return r
  },
  createStyleFunction = function(e) {
    var t = e.properties,
      a = e.property,
      n = e.scale,
      r = e.transform,
      o = void 0 === r ? getValue : r,
      i = e.defaultScale
    t = t || [a]
    var l = function(e, a) {
      var n = {},
        r = o(e, a)
      if (null !== r)
        return (
          t.forEach(function(e) {
            n[e] = r
          }),
          n
        )
    }
    return (l.scale = n), (l.defaults = i), l
  },
  system = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(a) {
        var n = e[a]
        t[a] = createStyleFunction(!0 !== n ? n : {property: a, scale: a})
      }),
      createParser(t)
    )
  },
  compose = function() {
    for (var e = {}, t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n]
    return (
      a.forEach(function(t) {
        t && t.config && objectAssign(e, t.config)
      }),
      createParser(e)
    )
  }
function _extends() {
  return (_extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t]
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
      }
      return e
    }).apply(this, arguments)
}
var defaults$1 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  isNumber = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getMargin = function(e, t) {
    if (!isNumber(e)) return get(t, e, e)
    var a = e < 0,
      n = Math.abs(e),
      r = get(t, n, n)
    return isNumber(r) ? r * (a ? -1 : 1) : a ? '-' + r : r
  },
  configs = {}
;(configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$1.space,
  },
}),
  (configs.margin.m = configs.margin.margin),
  (configs.margin.mt = configs.margin.marginTop),
  (configs.margin.mr = configs.margin.marginRight),
  (configs.margin.mb = configs.margin.marginBottom),
  (configs.margin.ml = configs.margin.marginLeft),
  (configs.margin.mx = configs.margin.marginX),
  (configs.margin.my = configs.margin.marginY),
  (configs.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: defaults$1.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: defaults$1.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: defaults$1.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: defaults$1.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: defaults$1.space},
    paddingX: {
      properties: ['paddingLeft', 'paddingRight'],
      scale: 'space',
      defaultScale: defaults$1.space,
    },
    paddingY: {
      properties: ['paddingTop', 'paddingBottom'],
      scale: 'space',
      defaultScale: defaults$1.space,
    },
  }),
  (configs.padding.p = configs.padding.padding),
  (configs.padding.pt = configs.padding.paddingTop),
  (configs.padding.pr = configs.padding.paddingRight),
  (configs.padding.pb = configs.padding.paddingBottom),
  (configs.padding.pl = configs.padding.paddingLeft),
  (configs.padding.px = configs.padding.paddingX),
  (configs.padding.py = configs.padding.paddingY)
var margin = system(configs.margin),
  padding = system(configs.padding),
  space = system(_extends({}, configs.margin, configs.padding)),
  config = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
config.bg = config.backgroundColor
var color = system(config),
  isNumber$1 = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getWidth = function(e, t) {
    return get(t, e, !isNumber$1(e) || e > 1 ? e : 100 * e + '%')
  },
  config$1 = {
    width: {property: 'width', scale: 'sizes', transform: getWidth},
    height: {property: 'height', scale: 'sizes'},
    minWidth: {property: 'minWidth', scale: 'sizes'},
    minHeight: {property: 'minHeight', scale: 'sizes'},
    maxWidth: {property: 'maxWidth', scale: 'sizes'},
    maxHeight: {property: 'maxHeight', scale: 'sizes'},
    size: {properties: ['width', 'height'], scale: 'sizes'},
    overflow: !0,
    display: !0,
    verticalAlign: !0,
  },
  layout = system(config$1),
  defaults$2 = {fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
  config$2 = {
    fontFamily: {property: 'fontFamily', scale: 'fonts'},
    fontSize: {property: 'fontSize', scale: 'fontSizes', defaultScale: defaults$2.fontSizes},
    fontWeight: {property: 'fontWeight', scale: 'fontWeights'},
    lineHeight: {property: 'lineHeight', scale: 'lineHeights'},
    letterSpacing: {property: 'letterSpacing', scale: 'letterSpacings'},
    textAlign: !0,
    fontStyle: !0,
  },
  typography = system(config$2),
  config$3 = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: !0,
    flex: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: !0,
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
  },
  flexbox = system(config$3),
  config$4 = {
    border: {property: 'border', scale: 'borders'},
    borderWidth: {property: 'borderWidth', scale: 'borderWidths'},
    borderStyle: {property: 'borderStyle', scale: 'borderStyles'},
    borderColor: {property: 'borderColor', scale: 'colors'},
    borderRadius: {property: 'borderRadius', scale: 'radii'},
    borderTop: {property: 'borderTop', scale: 'borders'},
    borderRight: {property: 'borderRight', scale: 'borders'},
    borderBottom: {property: 'borderBottom', scale: 'borders'},
    borderLeft: {property: 'borderLeft', scale: 'borders'},
    borderX: {properties: ['borderLeft', 'borderRight'], scale: 'borders'},
    borderY: {properties: ['borderTop', 'borderBottom'], scale: 'borders'},
  },
  border = system(config$4),
  config$5 = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(config$5.bgImage = config$5.backgroundImage),
  (config$5.bgSize = config$5.backgroundSize),
  (config$5.bgPosition = config$5.backgroundPosition),
  (config$5.bgRepeat = config$5.backgroundRepeat)
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  background = system(config$5),
  config$6 = {
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: !0,
    right: !0,
    bottom: !0,
    left: !0,
  },
  position = system(config$6),
  defaults$3 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  config$7 = {
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: defaults$3.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: defaults$3.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: defaults$3.space},
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridAutoRows: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  grid = system(config$7),
  shadow = system({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  }),
  variant = function(e) {
    var t,
      a = e.scale,
      n = e.prop,
      r = void 0 === n ? 'variant' : n,
      o = e.key,
      i = function(e, t) {
        return get(t, e, null)
      }
    i.scale = a || o
    var l = (((t = {})[r] = i), t)
    return createParser(l)
  },
  buttonStyle = variant({key: 'buttons'}),
  textStyle = variant({key: 'textStyles', prop: 'textStyle'}),
  colorStyle = variant({key: 'colorStyles', prop: 'colors'}),
  style = function(e) {
    var t = e.prop,
      a = e.cssProperty,
      n = e.alias,
      r = e.key,
      o = e.transformValue,
      i = e.scale,
      l = e.properties,
      c = {}
    return (
      (c[t] = createStyleFunction({
        properties: l,
        property: a || t,
        scale: r,
        defaultScale: i,
        transform: o,
      })),
      n && (c[n] = c[t]),
      createParser(c)
    )
  },
  datepickerPhrases = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  dateRangeInputPhrases = __assign({}, datepickerPhrases, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  dateSingleInputPhrases = __assign({}, datepickerPhrases, {
    dateAriaLabel: 'Select date',
    datePlaceholder: 'Select date',
  }),
  daySizeGridTemplateColumns = style({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  composeGridStyles = compose(
    grid,
    grid,
    grid,
    grid,
    grid,
    grid,
    grid,
    grid,
    grid,
    flexbox,
    flexbox,
    space,
  ),
  Grid = styled__default('div')(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['\n  display: grid;\n  ', '\n  ', '\n'],
        ['\n  display: grid;\n  ', '\n  ', '\n'],
      )),
    composeGridStyles,
    daySizeGridTemplateColumns,
  ),
  composeFlexStyles = compose(
    space,
    flexbox,
    flexbox,
    flexbox,
    flexbox,
    flexbox,
    grid,
    layout,
    layout,
  ),
  Flex = styled__default('div')(
    templateObject_1$1 ||
      (templateObject_1$1 = __makeTemplateObject(
        ['\n  display: flex;\n  ', '\n'],
        ['\n  display: flex;\n  ', '\n'],
      )),
    composeFlexStyles,
  ),
  composeBoxStyles = compose(
    grid,
    layout,
    space,
    layout,
    position,
    position,
    position,
    position,
    position,
    position,
  ),
  Box = styled__default('div')(
    templateObject_1$2 ||
      (templateObject_1$2 = __makeTemplateObject(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    composeBoxStyles,
  )
function CalendarIcon(e) {
  var t = e.height,
    a = e.width,
    n = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: a,
      height: t,
      color: n,
      className: o,
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
function useThemeProps(e) {
  void 0 === e && (e = {})
  var t = React.useContext(styled.ThemeContext)
  return React.useMemo(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(a, n) {
            var r
            return __assign({}, a, (((r = {})[n] = t.reactDatepicker[n] || e[n]), r))
          }, {})
        : e
    },
    [t, e],
  )
}
var templateObject_1$3,
  templateObject_2,
  templateObject_3,
  globalStyles = {
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
  placeholderColor = style({prop: 'placeholderColor', cssProperty: 'color'}),
  placeholderFontWeight = style({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  composeInputLabelStyles = compose(
    position,
    border,
    background,
    layout,
    border,
    space,
  ),
  InputLabel = styled__default('label')(
    templateObject_1$3 ||
      (templateObject_1$3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeInputLabelStyles,
  ),
  composeCalendarWrapperStyles = compose(
    position,
    position,
    position,
    position,
    layout,
    layout,
  ),
  CalendarWrapper = styled__default('div')(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    composeCalendarWrapperStyles,
  ),
  composeStyledInputStyle = compose(
    background,
    space,
    typography,
    typography,
    color,
    typography,
    space,
    border,
    layout,
    layout,
    shadow,
  ),
  StyledInput = styled__default('input')(
    templateObject_3 ||
      (templateObject_3 = __makeTemplateObject(
        [
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
        ],
        [
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n\n  ::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder {\n    /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder {\n    /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
        ],
      )),
    composeStyledInputStyle,
    placeholderFontWeight,
    placeholderColor,
    placeholderFontWeight,
    placeholderColor,
    placeholderFontWeight,
    placeholderColor,
  )
function Input(e) {
  var t = e.placeholder,
    a = e.id,
    n = e.vertical,
    r = e.isActive,
    o = e.ariaLabel,
    i = e.onClick,
    l = e.value,
    c = e.showCalendarIcon,
    s = e.padding,
    d = e.rtl,
    p = e.disableAccessibility,
    u = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: globalStyles.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: s,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: globalStyles.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : n ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (n ? '8px' : '16px') : 'unset',
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
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: a,
      display: u.inputLabelDisplay,
      position: u.inputLabelPosition,
      border: u.inputLabelBorder,
      background: u.inputLabelBackground,
      borderRadius: u.inputLabelBorderRadius,
      m: u.inputLabelMargin,
    },
    c &&
      React__default.createElement(
        CalendarWrapper,
        {
          position: u.inputCalendarWrapperPosition,
          height: u.inputCalendarWrapperHeight,
          width: u.inputCalendarWrapperWidth,
          top: u.inputCalendarWrapperTop,
          left: u.inputCalendarWrapperLeft,
          right: u.inputCalendarWrapperRight,
        },
        React__default.createElement(CalendarIcon, {
          width: u.inputCalendarIconWidth,
          height: u.inputCalendarIconHeight,
          color: u.inputCalendarIconColor,
        }),
      ),
    React__default.createElement(StyledInput, {
      readOnly: !0,
      tabIndex: p ? -1 : 0,
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
      boxShadow: r ? u.inputActiveBoxShadow : 'none',
      id: a,
      placeholder: t,
      'aria-label': o,
      value: l,
      autoComplete: 'off',
      onFocus: i,
      'data-testid': 'DatepickerInput',
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
    a = e.width,
    n = e.iconColor,
    r = e.direction,
    o = void 0 === r ? 'right' : r,
    i = e.className,
    l = void 0 === i ? '' : i,
    c = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: a,
      height: t,
      color: n,
      className: l,
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
var templateObject_1$4,
  templateObject_1$5,
  templateObject_2$1,
  composeStyles = compose(
    typography,
    typography,
    typography,
    color,
    typography,
    space,
  ),
  Text = styled__default('div')(
    templateObject_1$4 ||
      (templateObject_1$4 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeStyles,
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
    a = e.isActive,
    n = e.date,
    r = e.vertical,
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: globalStyles.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: globalStyles.colors.charcoal,
      selectDateDateFontSize: r ? '16px' : '24px',
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
        isActive: a,
      },
      n,
    ),
  )
}
var templateObject_1$6,
  templateObject_2$2,
  templateObject_3$1,
  templateObject_4,
  templateObject_5,
  MonthLabel = function(e) {
    var t = e.label,
      a = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        monthLabelColor: globalStyles.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: a.fontFamily,
        fontSize: a.monthLabelFontSize,
        fontWeight: a.monthLabelFontWeight,
        lineHeight: a.monthLabelLineHeight,
        color: a.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      t,
    )
  },
  MonthLabel$1 = function(e) {
    var t = e.label,
      a = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        dayLabelColor: globalStyles.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: a.fontFamily,
        fontSize: a.dayLabelFontSize,
        fontWeight: a.dayLabelFontWeight,
        color: a.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      t,
    )
  },
  datepickerContextDefaultValue = {
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
    onDateFocus: function() {},
    onDateHover: function() {},
    onDateSelect: function() {},
    onDayRender: void 0,
  },
  DatepickerContext = React__default.createContext(datepickerContextDefaultValue),
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
  composeStyledDayStyles = compose(
    shadow,
    background,
    color,
    typography,
    typography,
    typography,
  ),
  StyledDay = styled__default('button')(
    templateObject_5 ||
      (templateObject_5 = __makeTemplateObject(
        [
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
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  ',
          '\n  \n  &:focus {\n    ',
          '\n  }\n',
        ],
      )),
    dayHeight,
    dayWidth,
    composeStyledDayStyles,
    function(e) {
      var t = e.disabledDate,
        a = e.isSelectedStartOrEnd
      return (
        t &&
        !a &&
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
      var t = e.disabledDate,
        a = e.isSelected,
        n = e.isSelectedStartOrEnd,
        r = e.isWithinHoverRange
      return t || a || n || r
        ? a && !n
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
      var t = e.borderAccessibilityColor
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
function getColor(e, t, a, n) {
  var r = n.selectedFirstOrLast,
    o = n.normal,
    i = n.selected,
    l = n.rangeHover
  return t ? r : e ? i : a ? l : o
}
function Day(e) {
  var t = e.day,
    a = e.date,
    n = React.useRef(null),
    r = React.useContext(DatepickerContext),
    o = r.focusedDate,
    i = r.isDateFocused,
    l = r.isDateSelected,
    c = r.isDateHovered,
    s = r.isDateBlocked,
    d = r.isFirstOrLastSelectedDate,
    p = r.onDateSelect,
    u = r.onDateFocus,
    f = r.onDateHover,
    g = r.onDayRender,
    m = He({
      date: a,
      focusedDate: o,
      isDateFocused: i,
      isDateSelected: l,
      isDateHovered: c,
      isDateBlocked: s,
      isFirstOrLastSelectedDate: d,
      onDateFocus: u,
      onDateSelect: p,
      onDateHover: f,
      dayRef: n,
    }),
    y = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      daySize: globalStyles.daySize,
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
    h = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastBorderColor,
          selected: y.daySelectedBorderColor,
          normal: y.dayBorderColor,
          rangeHover: y.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, y, m.isWithinHoverRange],
    ),
    b = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastBackground,
          selected: y.daySelectedBackground,
          normal: y.dayBackground,
          rangeHover: y.dayHoverRangeBackground,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, y, m.isWithinHoverRange],
    ),
    D = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastColor,
          selected: y.daySelectedColor,
          normal: y.dayColor,
          rangeHover: y.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, y, m.isWithinHoverRange],
    )
  return React__default.createElement(
    StyledDay,
    __assign({}, m, {
      ref: n,
      dayHeight: y.daySize,
      dayWidth: y.daySize,
      background: b,
      color: D,
      fontFamily: y.fontFamily,
      fontWeight: y.dayFontWeight,
      fontSize: y.dayFontSize,
      daySelectedHoverBackground: y.daySelectedHoverBackground,
      dayHoverBackground: y.dayHoverBackground,
      dayHoverColor: y.dayHoverColor,
      daySelectedHoverColor: y.daySelectedHoverColor,
      borderAccessibilityColor: y.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        h +
        ',\n        0 1px 0 0 ' +
        h +
        ',\n        1px 1px 0 0 ' +
        h +
        ',\n        1px 0 0 0 ' +
        h +
        ' inset,\n        0 1px 0 0 ' +
        h +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + a.toDateString(),
    }),
    'function' == typeof g
      ? g(a)
      : React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          t,
        ),
  )
}
var templateObject_1$7,
  templateObject_2$3,
  opacity0To100 = styled.keyframes(
    templateObject_1$7 ||
      (templateObject_1$7 = __makeTemplateObject(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  MonthWrapper = styled__default('div')(
    templateObject_2$3 ||
      (templateObject_2$3 = __makeTemplateObject(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    opacity0To100,
  ),
  Month = function(e) {
    var t = e.year,
      a = e.month,
      n = e.firstDayOfWeek,
      r = ie({
        dayLabelFormat: e.dayLabelFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: a,
        firstDayOfWeek: n,
      }),
      o = r.days,
      i = r.weekdayLabels,
      l = r.monthLabel,
      c = useThemeProps({
        daySize: globalStyles.daySize,
        monthLabelMargin: '0 0 28px',
        monthDayLabelMargin: '0 0 16px',
      })
    return React__default.createElement(
      MonthWrapper,
      null,
      React__default.createElement(
        Flex,
        {justifyContent: 'center', m: c.monthLabelMargin},
        React__default.createElement(MonthLabel, {label: l}),
      ),
      React__default.createElement(
        Grid,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function(e) {
          return React__default.createElement(
            Flex,
            {key: e, justifyContent: 'center', m: c.monthDayLabelMargin},
            React__default.createElement(MonthLabel$1, {label: e}),
          )
        }),
      ),
      React__default.createElement(
        Grid,
        {daySizeGridTemplateColumns: c.daySize},
        o.map(function(e, t) {
          return 'object' == typeof e
            ? React__default.createElement(Day, {date: e.date, key: e.dayLabel, day: e.dayLabel})
            : React__default.createElement('div', {key: t})
        }),
      ),
    )
  }
function CaretIcon(e) {
  var t = e.height,
    a = e.width,
    n = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: a,
      height: t,
      color: n,
      className: o,
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
var templateObject_1$8,
  templateObject_2$4,
  templateObject_3$2,
  StyledReactDates = styled__default('button')(
    templateObject_1$8 ||
      (templateObject_1$8 = __makeTemplateObject(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  RedoIconStyle = styled__default(CaretIcon)(
    templateObject_3$2 ||
      (templateObject_3$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_2$4 ||
            (templateObject_2$4 = __makeTemplateObject(
              ['\n      transform: rotate(-180deg);\n    '],
              ['\n      transform: rotate(-180deg);\n    '],
            )),
        )
      )
    },
  )
function ResetDates(e) {
  var t = e.onResetDates,
    a = e.text,
    n = e.rtl,
    r = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: globalStyles.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: globalStyles.colors.darcula,
      resetDatesTextMargin: n ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return React__default.createElement(
    StyledReactDates,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: t,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    React__default.createElement(RedoIconStyle, {
      height: r.resetDatesIconHeight,
      width: r.resetDatesIconWidth,
      color: r.resetDatesIconColor,
      rtl: n,
    }),
    React__default.createElement(
      Text,
      {
        m: r.resetDatesTextMargin,
        lineHeight: r.resetDatesTextLineHeight,
        fontFamily: r.fontFamily,
        fontSize: r.resetDatesTextFontSize,
        color: r.resetDatesTextColor,
      },
      a,
    ),
  )
}
var templateObject_1$9,
  templateObject_2$5,
  Svg = styled__default('svg')(
    templateObject_2$5 ||
      (templateObject_2$5 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      var t = e.angle
      return styled.css(
        templateObject_1$9 ||
          (templateObject_1$9 = __makeTemplateObject(
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
    a = e.width,
    n = e.color,
    r = e.direction,
    o = void 0 === r ? 'right' : r,
    i = e.className,
    l = void 0 === i ? '' : i,
    c = calculateAngle$1(o)
  return React__default.createElement(
    Svg,
    {
      width: a,
      height: t,
      color: n,
      className: l,
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
var templateObject_1$a,
  composeSyles = compose(
    layout,
    layout,
    background,
    space,
    border,
  ),
  StyledNavButton = styled__default('button')(
    templateObject_1$a ||
      (templateObject_1$a = __makeTemplateObject(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    composeSyles,
  )
function NavButton(e) {
  var t = e.type,
    a = e.onClick,
    n = e.vertical,
    r = e.rtl,
    o = e.ariaLabel,
    i = useThemeProps({
      navButtonWidth: n ? '48px' : '30px',
      navButtonHeight: n ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: n ? '18px' : '11px',
      navButtonIconWidth: n ? '28px' : '18px',
      navButtonIconColor: globalStyles.colors.greey,
    })
  function l() {
    return 'next' !== t || n
      ? 'next' === t && n
        ? 'down'
        : 'prev' !== t || n
        ? 'up'
        : 'left'
      : 'right'
  }
  return React__default.createElement(
    StyledNavButton,
    {
      width: i.navButtonWidth,
      height: i.navButtonHeight,
      background: i.navButtonBackground,
      border: i.navButtonBorder,
      borderRight: 'up' !== l() || r ? i.navButtonBorder : 'unset',
      borderLeft: 'up' === l() && r ? 'unset' : i.navButtonBorder,
      p: i.navButtonPadding,
      type: 'button',
      'aria-label': o,
      onClick: a,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    React__default.createElement(CaretIcon$1, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: l(),
    }),
  )
}
function CloseIcon(e) {
  var t = e.height,
    a = e.width,
    n = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: a,
      height: t,
      color: n,
      className: o,
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
var templateObject_1$b,
  templateObject_2$6,
  composeTextStyles = compose(
    space,
    color,
    typography,
    typography,
    typography,
  ),
  Text$1 = styled__default('div')(
    templateObject_1$b ||
      (templateObject_1$b = __makeTemplateObject(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    composeTextStyles,
  ),
  Wrapper = styled__default('button')(
    templateObject_2$6 ||
      (templateObject_2$6 = __makeTemplateObject(
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
    Text$1,
    color,
    color,
  )
function Close(e) {
  var t = e.onClick,
    a = e.rtl,
    n = e.closeText,
    r = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      closeMargin: a ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return React__default.createElement(
    Wrapper,
    {
      onClick: t,
      color: r.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    React__default.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React__default.createElement(
      Text$1,
      {
        m: r.closeMargin,
        color: r.closeColor,
        fontSize: r.closeFontSize,
        fontFamily: r.fontFamily,
        fontWeight: r.closeFontWeight,
      },
      n,
    ),
  )
}
var templateObject_1$c,
  templateObject_2$7,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6,
  opacity0To100$1 = styled.keyframes(
    templateObject_1$c ||
      (templateObject_1$c = __makeTemplateObject(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  composeStyledDatepickerStyles = compose(
    background,
    space,
    border,
    position,
    shadow,
    layout,
  ),
  StyledDatepicker = styled__default('div')(
    templateObject_3$3 ||
      (templateObject_3$3 = __makeTemplateObject(
        [
          '\n  ',
          '\n  ',
          '\n  \n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  \n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
        ],
      )),
    composeStyledDatepickerStyles,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_2$7 ||
            (templateObject_2$7 = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
    opacity0To100$1,
  ),
  DateWrapper = styled__default('div')(
    templateObject_4$1 ||
      (templateObject_4$1 = __makeTemplateObject(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  composeCloseWrapperStyles = compose(
    layout,
    flexbox,
  ),
  CloseWrapper = styled__default(Box)(
    templateObject_5$1 ||
      (templateObject_5$1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeCloseWrapperStyles,
  ),
  composeMonthGridStyles = compose(
    layout,
    layout,
  ),
  MonthGrid = styled__default(Grid)(
    templateObject_6 || (templateObject_6 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeMonthGridStyles,
  )
function Datepicker(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.minBookingDate,
    r = e.maxBookingDate,
    o = e.focusedInput,
    i = e.onDatesChange,
    l = e.dayLabelFormat,
    c = e.weekdayLabelFormat,
    s = e.monthLabelFormat,
    d = e.onDayRender,
    p = e.vertical,
    u = void 0 !== p && p,
    f = e.rtl,
    g = void 0 !== f && f,
    m = e.showResetDates,
    y = void 0 === m || m,
    h = e.showClose,
    b = void 0 === h || h,
    D = e.showSelectedDates,
    v = void 0 === D || D,
    k = e.exactMinBookingDays,
    _ = void 0 !== k && k,
    x = e.isDateBlocked,
    S =
      void 0 === x
        ? function() {
            return !1
          }
        : x,
    R = e.minBookingDays,
    O = void 0 === R ? 1 : R,
    C = e.onClose,
    w = void 0 === C ? function() {} : C,
    B = e.numberOfMonths,
    j = e.firstDayOfWeek,
    W = e.displayFormat,
    F = void 0 === W ? 'MM/DD/YYYY' : W,
    T = e.phrases,
    M = void 0 === T ? datepickerPhrases : T,
    $ = Be({
      startDate: t,
      endDate: a,
      focusedInput: o,
      onDatesChange: i,
      minBookingDate: n,
      maxBookingDate: r,
      minBookingDays: O,
      isDateBlocked: S,
      exactMinBookingDays: _,
      numberOfMonths: B,
      firstDayOfWeek: j,
    }),
    L = $.activeMonths,
    I = $.isDateSelected,
    H = $.isFirstOrLastSelectedDate,
    E = $.isDateHovered,
    P = $.firstDayOfWeek,
    z = $.onDateSelect,
    A = $.onResetDates,
    Y = $.goToPreviousMonths,
    G = $.goToNextMonths,
    N = $.numberOfMonths,
    K = $.hoveredDate,
    Q = $.onDateHover,
    V = $.isDateFocused,
    U = $.focusedDate,
    X = $.onDateFocus,
    Z = $.isDateBlocked,
    q = React.useRef(null),
    J = useThemeProps({
      datepickerBackground: '#ffffff',
      datepickerPadding: u ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: u ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: u ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: u ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: u ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: g ? 'unset' : u ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: g ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: u ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: globalStyles.colors.silverCloud,
      datepickerMonthsWrapperMargin: b || v ? (v ? '28px 0 0' : '48px 0 0') : 'unset',
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
  function ee() {
    q && q.current && u && (q.current.scrollTop = 0)
  }
  function te() {
    G(), ee()
  }
  function ne() {
    Y(), ee()
  }
  return React__default.createElement(
    DatepickerContext.Provider,
    {
      value: {
        rtl: g,
        isDateFocused: V,
        isDateSelected: I,
        isDateHovered: E,
        isFirstOrLastSelectedDate: H,
        onDateFocus: X,
        focusedDate: U,
        onDateSelect: z,
        onDateHover: Q,
        onDayRender: d,
        isDateBlocked: Z,
      },
    },
    React__default.createElement(
      StyledDatepicker,
      {
        background: J.datepickerBackground,
        p: J.datepickerPadding,
        borderRadius: J.datepickerBorderRadius,
        position: J.datepickerPosition,
        boxShadow: J.datepickerBoxShadow,
        width: J.datepickerWidth,
        rtl: g,
      },
      b &&
        React__default.createElement(
          CloseWrapper,
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
          React__default.createElement(Close, {onClick: w, rtl: g, closeText: M.close}),
        ),
      v &&
        React__default.createElement(
          DateWrapper,
          null,
          React__default.createElement(
            Grid,
            {gridTemplateColumns: J.datepickerSelectDateGridTemplateColumns},
            React__default.createElement(SelectDate, {
              title: M.datepickerStartDateLabel,
              date: Se(t, F, M.datepickerStartDatePlaceholder),
              isActive: o === be,
              vertical: u,
            }),
            React__default.createElement(
              Flex,
              {justifyContent: 'center', alignItems: 'center'},
              React__default.createElement(ArrowIcon, {
                height: J.datepickerSelectDateArrowIconHeight,
                width: J.datepickerSelectDateArrowIconWidth,
                iconColor: J.datepickerSelectDateArrowIconColor,
              }),
            ),
            React__default.createElement(SelectDate, {
              title: M.datepickerEndDateLabel,
              date: Se(a, F, M.datepickerEndDatePlaceholder),
              isActive: o === xe,
              vertical: u,
            }),
          ),
        ),
      React__default.createElement(
        Box,
        {position: 'relative'},
        React__default.createElement(
          Box,
          {m: J.datepickerMonthsWrapperMargin},
          React__default.createElement(
            MonthGrid,
            {
              'data-testid': 'MonthGrid',
              overflow: J.datepickerMonthsGridOverflow,
              height: J.datepickerMonthsGridHeight,
              gridTemplateColumns: u ? '1fr' : 'repeat(' + N + ', 1fr)',
              gridGap: J.datepickerMonthsGridGap,
              pr: g ? '1px' : '0',
              ref: q,
              onMouseLeave: function() {
                K && Q(null)
              },
            },
            L.map(function(e) {
              return React__default.createElement(Month, {
                key: 'month-' + e.year + '-' + e.month,
                year: e.year,
                month: e.month,
                firstDayOfWeek: P,
                dayLabelFormat: l || ae,
                weekdayLabelFormat: c || oe,
                monthLabelFormat: s || ue,
              })
            }),
          ),
        ),
        React__default.createElement(
          Flex,
          {alignItems: 'center'},
          React__default.createElement(
            React__default.Fragment,
            null,
            y &&
              React__default.createElement(
                Flex,
                {flex: '1', m: J.datepickerResetDatesWrapperMargin},
                React__default.createElement(ResetDates, {
                  rtl: g,
                  onResetDates: A,
                  text: M.resetDates,
                }),
              ),
            React__default.createElement(
              Box,
              {
                position: J.datepickerPreviousMonthButtonPosition,
                top: J.datepickerPreviousMonthButtonTop,
                left: J.datepickerPreviousMonthButtonLeft,
                right: J.datepickerPreviousMonthButtonRight,
                bottom: J.datepickerPreviousMonthButtonBottom,
              },
              React__default.createElement(NavButton, {
                type: 'prev',
                onClick: g && !u ? te : ne,
                vertical: u,
                rtl: g,
                ariaLabel: 'Previous month',
              }),
            ),
            React__default.createElement(
              Box,
              {
                position: J.datepickerNextMonthButtonPosition,
                top: J.datepickerNextMonthButtonTop,
                left: J.datepickerNextMonthButtonLeft,
                right: J.datepickerNextMonthButtonRight,
                bottom: J.datepickerNextMonthButtonBottom,
              },
              React__default.createElement(NavButton, {
                type: 'next',
                onClick: g && !u ? ne : te,
                vertical: u,
                rtl: g,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var templateObject_1$d,
  templateObject_2$8,
  templateObject_3$4,
  templateObject_4$2,
  templateObject_5$2,
  Wrapper$1 = styled__default(Box)(
    templateObject_2$8 ||
      (templateObject_2$8 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_1$d ||
            (templateObject_1$d = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
  ),
  composeInputArrowIconStyles = compose(
    color,
    color,
  ),
  InputArrowIcon = styled__default(ArrowIcon)(
    templateObject_4$2 ||
      (templateObject_4$2 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    composeInputArrowIconStyles,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_3$4 ||
            (templateObject_3$4 = __makeTemplateObject(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  composeInputGridStyles = compose(
    background,
    border,
    border,
  ),
  InputGrid = styled__default(Grid)(
    templateObject_5$2 ||
      (templateObject_5$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeInputGridStyles,
  )
function getPlacement(e, t) {
  return 'top' !== e || t
    ? 'top' === e && t
      ? {
          dateRangeDatepickerWrapperTop: 'unset',
          dateRangeDatepickerWrapperRight: '0',
          dateRangeDatepickerWrapperBottom: '65px',
          dateRangeDatepickerWrapperLeft: 'unset',
        }
      : 'bottom' === e && t
      ? {
          dateRangeDatepickerWrapperTop: 'unset',
          dateRangeDatepickerWrapperRight: '0',
          dateRangeDatepickerWrapperBottom: 'unset',
          dateRangeDatepickerWrapperLeft: 'unset',
        }
      : {
          dateRangeDatepickerWrapperTop: 'unset',
          dateRangeDatepickerWrapperRight: 'unset',
          dateRangeDatepickerWrapperBottom: 'unset',
          dateRangeDatepickerWrapperLeft: '0',
        }
    : {
        dateRangeDatepickerWrapperTop: 'unset',
        dateRangeDatepickerWrapperRight: 'unset',
        dateRangeDatepickerWrapperBottom: '65px',
        dateRangeDatepickerWrapperLeft: '0',
      }
}
function DateRangeInput(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.minBookingDate,
    r = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    l = e.numberOfMonths,
    c = e.focusedInput,
    s = e.onDatesChange,
    d = e.exactMinBookingDays,
    p = e.dayLabelFormat,
    u = e.weekdayLabelFormat,
    f = e.monthLabelFormat,
    g = e.onDayRender,
    m = e.showClose,
    y = void 0 === m || m,
    h = e.showSelectedDates,
    b = void 0 === h || h,
    D = e.showResetDates,
    v = void 0 === D || D,
    k = e.vertical,
    _ = void 0 !== k && k,
    x = e.rtl,
    S = void 0 !== x && x,
    R = e.isDateBlocked,
    O =
      void 0 === R
        ? function() {
            return !1
          }
        : R,
    C = e.minBookingDays,
    w = void 0 === C ? 1 : C,
    B = e.onClose,
    j = void 0 === B ? function() {} : B,
    W = e.showStartDateCalendarIcon,
    F = void 0 === W || W,
    T = e.showEndDateCalendarIcon,
    M = void 0 === T || T,
    $ = e.displayFormat,
    L = void 0 === $ ? 'MM/DD/YYYY' : $,
    I = e.phrases,
    H = void 0 === I ? dateRangeInputPhrases : I,
    E = e.placement,
    P = void 0 === E ? 'bottom' : E,
    z = React.useRef(null),
    A = useThemeProps(
      __assign(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: _ ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: _ ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: _ ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        getPlacement(P, S),
      ),
    )
  function Y(e) {
    null !== c && z && z.current && !z.current.contains(e.target) && i(null)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', Y),
        function() {
          window.removeEventListener('click', Y)
        }
      )
    }),
    React__default.createElement(
      Wrapper$1,
      {rtl: S, position: 'relative', ref: z},
      React__default.createElement(
        InputGrid,
        {
          background: A.dateRangeBackground,
          gridTemplateColumns: A.dateRangeGridTemplateColumns,
          border: A.dateRangeBorder,
          borderRadius: A.dateRangeBorderRadius,
        },
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: H.startDateAriaLabel,
          placeholder: H.startDatePlaceholder,
          value: Se(t, L, ''),
          onClick: function() {
            return i(be)
          },
          showCalendarIcon: F,
          vertical: _,
          isActive: c === be,
          padding: A.dateRangeStartDateInputPadding,
          rtl: S,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(InputArrowIcon, {
            width: A.dateRangeArrowIconWidth,
            height: A.dateRangeArrowIconHeight,
            color: A.dateRangeArrowIconColor,
            opacity: A.dateRangeArrowIconOpacity,
            rtl: S,
          }),
        ),
        React__default.createElement(Input, {
          id: 'endDate',
          ariaLabel: H.endDateAriaLabel,
          placeholder: H.endDatePlaceholder,
          value: Se(a, L, ''),
          onClick: function() {
            return i(t ? xe : be)
          },
          showCalendarIcon: M,
          vertical: _,
          isActive: c === xe,
          padding: A.dateRangeEndDateInputPadding,
          rtl: S,
          disableAccessibility: c === be,
        }),
      ),
      React__default.createElement(
        Box,
        {
          position: A.dateRangeDatepickerWrapperPosition,
          bottom: A.dateRangeDatepickerWrapperBottom,
          left: A.dateRangeDatepickerWrapperLeft,
          top: A.dateRangeDatepickerWrapperTop,
          right: A.dateRangeDatepickerWrapperRight,
        },
        null !== c &&
          React__default.createElement(Datepicker, {
            onClose: function() {
              j(), i(null)
            },
            startDate: t,
            endDate: a,
            minBookingDate: n,
            maxBookingDate: r,
            firstDayOfWeek: o,
            numberOfMonths: l,
            focusedInput: c,
            displayFormat: L,
            onDatesChange: s,
            minBookingDays: w,
            isDateBlocked: O,
            exactMinBookingDays: d,
            showResetDates: v,
            vertical: _,
            showSelectedDates: b,
            showClose: y,
            rtl: S,
            dayLabelFormat: p,
            weekdayLabelFormat: u,
            monthLabelFormat: f,
            onDayRender: g,
            phrases: H,
          }),
      ),
    )
  )
}
var templateObject_1$e,
  templateObject_2$9,
  Wrapper$2 = styled__default(Box)(
    templateObject_2$9 ||
      (templateObject_2$9 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_1$e ||
            (templateObject_1$e = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
  )
function getPlacement$1(e, t) {
  return 'top' !== e || t
    ? 'top' === e && t
      ? {
          dateSingleDatepickerWrapperTop: 'unset',
          dateSingleDatepickerWrapperRight: '0',
          dateSingleDatepickerWrapperBottom: '65px',
          dateSingleDatepickerWrapperLeft: 'unset',
        }
      : 'bottom' === e && t
      ? {
          dateSingleDatepickerWrapperTop: 'unset',
          dateSingleDatepickerWrapperRight: '0',
          dateSingleDatepickerWrapperBottom: 'unset',
          dateSingleDatepickerWrapperLeft: 'unset',
        }
      : {
          dateSingleDatepickerWrapperTop: 'unset',
          dateSingleDatepickerWrapperRight: 'unset',
          dateSingleDatepickerWrapperBottom: 'unset',
          dateSingleDatepickerWrapperLeft: '0',
        }
    : {
        dateSingleDatepickerWrapperTop: 'unset',
        dateSingleDatepickerWrapperRight: 'unset',
        dateSingleDatepickerWrapperBottom: '65px',
        dateSingleDatepickerWrapperLeft: '0',
      }
}
function DateSingleInput(e) {
  var t = e.date,
    a = e.minBookingDate,
    n = e.maxBookingDate,
    r = e.firstDayOfWeek,
    o = e.onFocusChange,
    i = e.showDatepicker,
    l = e.onDateChange,
    c = e.dayLabelFormat,
    s = e.weekdayLabelFormat,
    d = e.monthLabelFormat,
    p = e.onDayRender,
    u = e.numberOfMonths,
    f = void 0 === u ? 1 : u,
    g = e.showClose,
    m = void 0 === g || g,
    y = e.showResetDate,
    h = void 0 === y || y,
    b = e.vertical,
    D = void 0 !== b && b,
    v = e.rtl,
    k = void 0 !== v && v,
    _ = e.isDateBlocked,
    x =
      void 0 === _
        ? function() {
            return !1
          }
        : _,
    S = e.onClose,
    R = void 0 === S ? function() {} : S,
    O = e.showCalendarIcon,
    C = void 0 === O || O,
    w = e.displayFormat,
    B = void 0 === w ? 'MM/DD/YYYY' : w,
    j = e.phrases,
    W = void 0 === j ? dateSingleInputPhrases : j,
    F = e.placement,
    T = void 0 === F ? 'bottom' : F,
    M = React.useRef(null),
    $ = useThemeProps(
      __assign(
        {
          dateSingleInputPadding: D ? (k ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        getPlacement$1(T, k),
      ),
    )
  function L(e) {
    i && M && M.current && !M.current.contains(e.target) && o(!1)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', L),
        function() {
          window.removeEventListener('click', L)
        }
      )
    }),
    React__default.createElement(
      Wrapper$2,
      {rtl: k, position: 'relative', ref: M},
      React__default.createElement(Input, {
        id: 'startDate',
        ariaLabel: W.dateAriaLabel,
        placeholder: W.datePlaceholder,
        value: Se(t, B, ''),
        onClick: function() {
          return o(!0)
        },
        showCalendarIcon: C,
        vertical: D,
        isActive: !1,
        padding: $.dateSingleInputPadding,
        rtl: k,
      }),
      React__default.createElement(
        Box,
        {
          position: $.dateSingleDatepickerWrapperPosition,
          bottom: $.dateSingleDatepickerWrapperBottom,
          left: $.dateSingleDatepickerWrapperLeft,
          top: $.dateSingleDatepickerWrapperTop,
          right: $.dateSingleDatepickerWrapperRight,
        },
        i &&
          React__default.createElement(Datepicker, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              R(), o(!1)
            },
            startDate: t,
            endDate: t,
            minBookingDate: a,
            maxBookingDate: n,
            firstDayOfWeek: r,
            numberOfMonths: f,
            focusedInput: i ? be : null,
            displayFormat: B,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                a = e.startDate
              l({showDatepicker: null !== t, date: a})
            },
            isDateBlocked: x,
            showResetDates: h,
            vertical: D,
            showSelectedDates: !1,
            showClose: m,
            rtl: k,
            dayLabelFormat: c,
            weekdayLabelFormat: s,
            monthLabelFormat: d,
            onDayRender: p,
            phrases: W,
          }),
      ),
    )
  )
}
;(exports.DateRangeInput = DateRangeInput),
  (exports.DateSingleInput = DateSingleInput),
  (exports.Datepicker = Datepicker),
  (exports.END_DATE = xe),
  (exports.START_DATE = be),
  (exports.dateRangeInputPhrases = dateRangeInputPhrases),
  (exports.dateSingleInputPhrases = dateSingleInputPhrases),
  (exports.datepickerPhrases = datepickerPhrases)
