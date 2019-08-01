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
  Y = /^([+-])(\d{2})$/,
  S = /^([+-])(\d{2}):?(\d{2})$/
function x(e, t, a) {
  ;(t = t || 0), (a = a || 0)
  var n = new Date(0)
  n.setUTCFullYear(e, 0, 4)
  var r = 7 * t + a + 1 - (n.getUTCDay() || 7)
  return n.setUTCDate(n.getUTCDate() + r), n
}
var b = function(e, t) {
    if (o(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? s : Number(n)
    var r,
      b,
      _,
      C = (function(e) {
        var t,
          a = {},
          n = e.split(c)
        if ((f.test(n[0]) ? ((a.date = null), (t = n[0])) : ((a.date = n[0]), (t = n[1])), t)) {
          var r = T.exec(t)
          r ? ((a.time = t.replace(r[1], '')), (a.timezone = r[1])) : (a.time = t)
        }
        return a
      })(e),
      R = (function(e, t) {
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
      })(C.date, n),
      O = R.year,
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
          ? x(t, parseInt(a[1], 10) - 1)
          : (a = M.exec(e))
          ? x(t, parseInt(a[1], 10) - 1, parseInt(a[2], 10) - 1)
          : null
      })(R.restDateString, O)
    if (B) {
      var j,
        W = B.getTime(),
        $ = 0
      if (
        (C.time &&
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
          })(C.time)),
        C.timezone)
      )
        (r = C.timezone),
          (j =
            ((b = F.exec(r))
              ? 0
              : (b = Y.exec(r))
              ? ((_ = 60 * parseInt(b[2], 10)), '+' === b[1] ? -_ : _)
              : (b = S.exec(r))
              ? ((_ = 60 * parseInt(b[2], 10) + parseInt(b[3], 10)), '+' === b[1] ? -_ : _)
              : 0) * i)
      else {
        var L = W + $,
          I = new Date(L)
        j = a(I)
        var P = new Date(L)
        P.setDate(I.getDate() + 1)
        var H = a(P) - a(I)
        H > 0 && (j += H)
      }
      return new Date(W + $ + j)
    }
    return new Date(e)
  },
  B = function(e) {
    var t = b(e),
      a = new Date(0)
    return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a
  },
  H = function(e) {
    var t = b(e)
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
    var t = b(e)
    return A(t, B(t)) + 1
  },
  L = function(e, t) {
    var a = (t && Number(t.weekStartsOn)) || 0,
      n = b(e),
      r = n.getDay(),
      o = (r < a ? 7 : 0) + r - a
    return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
  },
  $ = function(e) {
    return L(e, {weekStartsOn: 1})
  },
  E = function(e) {
    var t = b(e),
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
  N = 6048e5,
  C = function(e) {
    var t = b(e),
      a = $(t).getTime() - G(t).getTime()
    return Math.round(a / N) + 1
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
    var l = b(e)
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
    var a = b(e),
      n = Number(t)
    return a.setDate(a.getDate() + n), a
  },
  q = function(e, t, a) {
    var n = b(e),
      r = void 0 !== a ? a : 1,
      o = b(t).getTime()
    if (n.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = n
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(b(l)), l.setDate(l.getDate() + r)
    return i
  },
  V = function(e) {
    var t = b(e),
      a = t.getMonth()
    return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  _ = function(e, t) {
    var a = (t && Number(t.weekStartsOn)) || 0,
      n = b(e),
      r = n.getDay(),
      o = 6 + (r < a ? -7 : 0) - (r - a)
    return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
  },
  ee = function(e) {
    return b(e).getDay()
  },
  te = function(e) {
    var t = b(e)
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
    var a = b(e),
      n = b(t)
    return a.getTime() < n.getTime()
  },
  ce = function(e, t) {
    var a = b(e),
      n = b(t)
    return a.getTime() > n.getTime()
  },
  fe = function(e, t, a) {
    var n = b(e).getTime(),
      r = b(t).getTime(),
      o = b(a).getTime()
    if (r > o) throw new Error('The start of the range cannot be after the end of the range')
    return n >= r && n <= o
  },
  De = function(e, t) {
    var a = H(e),
      n = H(t)
    return a.getTime() === n.getTime()
  },
  de = function(e, t) {
    var a = b(e),
      n = b(t)
    return a.getFullYear() === n.getFullYear() && a.getMonth() === n.getMonth()
  },
  le = function(e) {
    return b(e).getFullYear()
  },
  ge = function(e) {
    return b(e).getMonth()
  },
  ve = function() {
    return H(new Date())
  },
  me = function(e) {
    var t = b(e),
      a = t.getFullYear(),
      n = t.getMonth(),
      r = new Date(0)
    return r.setFullYear(a, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
  },
  he = function(e, t) {
    var a = b(e),
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
    return (
      (n = 0 === e.length ? he(n, a) : he(n, a >= 0 ? 1 : -1)),
      a > 0 ? e.concat([pe(n)]) : [pe(n)].concat(e)
    )
  }, [])
}
function Ye(e, t, a) {
  return e && 'string' == typeof t ? j(e, t) : e && 'function' == typeof t ? t(e) : a
}
function Se(e) {
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
var xe = 'startDate',
  be = 'endDate'
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
    g = e.firstDayOfWeek,
    f = void 0 === g ? 1 : g,
    m = e.isDateBlocked,
    h =
      void 0 === m
        ? function() {
            return !1
          }
        : m,
    y = React.useState(function() {
      return Te(u, t)
    }),
    b = y[0],
    D = y[1],
    v = React.useState(null),
    k = v[0],
    _ = v[1],
    S = React.useState(t),
    x = S[0],
    C = S[1],
    R = React.useCallback(
      function(e) {
        C(e), (!x || (x && !de(e, x))) && D(Te(u, e))
      },
      [C, D, u, x],
    ),
    w = React.useCallback(
      function(e) {
        return ye(e, t, a)
      },
      [t, a],
    ),
    O = React.useCallback(
      function(e) {
        return Me(e, t, a)
      },
      [t, a],
    ),
    T = React.useCallback(
      function(e) {
        return ke({
          date: e,
          minBookingDate: r,
          maxBookingDate: o,
          startDate: t,
          endDate: a,
          minBookingDays: d,
          isDateBlockedFn: h,
        })
      },
      [r, o, t, a, d, h],
    ),
    B = React.useCallback(
      function(e) {
        return !!x && De(e, x)
      },
      [x],
    ),
    j = React.useCallback(
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
          isDateBlocked: h,
        })
      },
      [k, t, a, d, c, h],
    )
  function F(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !x
    ) {
      var t = b[0]
      R(t.date), D(Te(u, t.date))
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
      firstDayOfWeek: f,
      activeMonths: b,
      isDateSelected: w,
      isDateHovered: j,
      isFirstOrLastSelectedDate: O,
      isDateBlocked: T,
      numberOfMonths: u,
      isDateFocused: B,
      focusedDate: x,
      hoveredDate: k,
      onResetDates: function() {
        i({startDate: null, endDate: null, focusedInput: xe})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var n = !T(e) || (t && De(e, t)),
              i = !r || !se(e, K(r, -1)),
              l = !o || !ce(e, o),
              s = K(e, d - 1),
              p = !r || !se(s, r),
              u = !o || !ce(s, o),
              g = c && d > 1 && i && l && p && u,
              f = t && !a && !c && i && l,
              m = !(d > 1 && t) || fe(e, t, K(t, d - 2)),
              h = t && De(e, t) && m
            n && (g || f || h) ? _(e) : null !== k && _(null)
          }
        } else _(null)
      },
      onDateSelect: function(e) {
        ;(n === be || n === xe) &&
        d > 0 &&
        c &&
        Se({
          minBookingDays: d,
          exactMinBookingDays: c,
          minBookingDate: r,
          maxBookingDate: o,
          isDateBlocked: h,
          startDate: e,
          endDate: null,
        })
          ? i({startDate: e, endDate: K(e, d - 1), focusedInput: null})
          : ((n === be && t && se(e, t)) || (n === xe && a && ce(e, a))) &&
            !c &&
            Se({minBookingDays: d, isDateBlocked: h, startDate: e, endDate: null})
          ? i({endDate: null, startDate: e, focusedInput: be})
          : n === xe && !c && Se({minBookingDays: d, isDateBlocked: h, endDate: a, startDate: e})
          ? i({endDate: a, startDate: e, focusedInput: be})
          : n === xe && !c && Se({minBookingDays: d, isDateBlocked: h, endDate: null, startDate: e})
          ? i({endDate: null, startDate: e, focusedInput: be})
          : n === be &&
            t &&
            !se(e, t) &&
            !c &&
            Se({minBookingDays: d, isDateBlocked: h, startDate: t, endDate: e}) &&
            i({startDate: t, endDate: e, focusedInput: null}),
          n === be || (x && (!x || de(e, x))) || D(Te(u, e))
      },
      onDateFocus: R,
      goToPreviousMonths: function() {
        D(Fe(b, u, -1)), C(null)
      },
      goToNextMonths: function() {
        D(Fe(b, u, 1)), C(null)
      },
      goToPreviousYear: function() {
        D(Fe(b, u, -11)), C(null)
      },
      goToNextYear: function() {
        D(Fe(b, u, 11)), C(null)
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
    g = React.useCallback(
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
  var f = l(t) && !i(t)
  return {
    tabIndex: null === a || r(t) ? 0 : -1,
    isSelected: n(t),
    isSelectedStartOrEnd: o(t),
    isWithinHoverRange: i(t),
    disabledDate: f,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? s(K(t, 1))
        : 'ArrowLeft' === e.key
        ? s(K(t, -1))
        : 'ArrowUp' === e.key
        ? s(K(t, -7))
        : 'ArrowDown' === e.key && s(K(t, 7))
    },
    onClick: f ? function() {} : u,
    onMouseEnter: g,
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
  sort = function(e) {
    var t = {}
    return (
      Object.keys(e)
        .sort()
        .forEach(function(a) {
          t[a] = e[a]
        }),
      t
    )
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
  createParser = function e(t) {
    var a = {},
      n = function(e) {
        var n = {},
          r = !1,
          o = e.theme && e.theme.disableStyledSystemCache
        for (var i in e)
          if (t[i]) {
            var l = t[i],
              c = e[i],
              s = get(e.theme, l.scale, l.defaults)
            if ('object' != typeof c) objectAssign(n, l(c, s))
            else {
              if (
                ((a.breakpoints =
                  (!o && a.breakpoints) || get(e.theme, 'breakpoints', defaults.breakpoints)),
                Array.isArray(c))
              ) {
                ;(a.media = (!o && a.media) || [null].concat(a.breakpoints.map(createMediaQuery))),
                  (n = merge(n, parseResponsiveStyle(a.media, l, s, c)))
                continue
              }
              null !== c &&
                ((n = merge(n, parseResponsiveObject(a.breakpoints, l, s, c))), (r = !0))
            }
          }
        return r && (n = sort(n)), n
      }
    ;(n.config = t), (n.propNames = Object.keys(t)), (n.cache = a)
    var r = Object.keys(t).filter(function(e) {
      return 'config' !== e
    })
    return (
      r.length > 1 &&
        r.forEach(function(a) {
          var r
          n[a] = e((((r = {})[a] = t[a]), r))
        }),
      n
    )
  },
  parseResponsiveStyle = function(e, t, a, n) {
    var r = {}
    return (
      n.slice(0, e.length).forEach(function(n, o) {
        var i,
          l = e[o],
          c = t(n, a)
        l ? objectAssign(r, (((i = {})[l] = objectAssign({}, r[l], c)), i)) : objectAssign(r, c)
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
        t[a] =
          !0 !== n
            ? 'function' != typeof n
              ? createStyleFunction(n)
              : n
            : createStyleFunction({property: a, scale: a})
      }),
      createParser(t)
    )
  },
  compose = function() {
    for (var e = {}, t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n]
    a.forEach(function(t) {
      t && t.config && objectAssign(e, t.config)
    })
    var r = createParser(e)
    return r
  },
  isNumber = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getWidth = function(e, t) {
    return get(t, e, !isNumber(e) || e > 1 ? e : 100 * e + '%')
  },
  config = {
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
  layout = system(config),
  config$1 = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
config$1.bg = config$1.backgroundColor
var color = system(config$1),
  defaults$1 = {fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
  config$2 = {
    fontFamily: {property: 'fontFamily', scale: 'fonts'},
    fontSize: {property: 'fontSize', scale: 'fontSizes', defaultScale: defaults$1.fontSizes},
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
  defaults$2 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  config$4 = {
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: defaults$2.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: defaults$2.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: defaults$2.space},
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
  grid = system(config$4),
  config$5 = {
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
  border = system(config$5),
  config$6 = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(config$6.bgImage = config$6.backgroundImage),
  (config$6.bgSize = config$6.backgroundSize),
  (config$6.bgPosition = config$6.backgroundPosition),
  (config$6.bgRepeat = config$6.backgroundRepeat)
var background = system(config$6),
  defaults$3 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  config$7 = {
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: defaults$3.space},
    right: {property: 'right', scale: 'space', defaultScale: defaults$3.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: defaults$3.space},
    left: {property: 'left', scale: 'space', defaultScale: defaults$3.space},
  },
  position = system(config$7),
  defaults$4 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  isNumber$1 = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getMargin = function(e, t) {
    if (!isNumber$1(e)) return get(t, e, e)
    var a = e < 0,
      n = Math.abs(e),
      r = get(t, n, n)
    return isNumber$1(r) ? r * (a ? -1 : 1) : a ? '-' + r : r
  },
  configs = {}
;(configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
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
    padding: {property: 'padding', scale: 'space', defaultScale: defaults$4.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: defaults$4.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: defaults$4.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: defaults$4.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: defaults$4.space},
    paddingX: {
      properties: ['paddingLeft', 'paddingRight'],
      scale: 'space',
      defaultScale: defaults$4.space,
    },
    paddingY: {
      properties: ['paddingTop', 'paddingBottom'],
      scale: 'space',
      defaultScale: defaults$4.space,
    },
  }),
  (configs.padding.p = configs.padding.padding),
  (configs.padding.pt = configs.padding.paddingTop),
  (configs.padding.pr = configs.padding.paddingRight),
  (configs.padding.pb = configs.padding.paddingBottom),
  (configs.padding.pl = configs.padding.paddingLeft),
  (configs.padding.px = configs.padding.paddingX),
  (configs.padding.py = configs.padding.paddingY)
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  margin = system(configs.margin),
  padding = system(configs.padding),
  space = compose(
    margin,
    padding,
  ),
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
  width = layout.width,
  height = layout.height,
  minHeight = layout.minHeight,
  display = layout.display,
  overflow = layout.overflow,
  opacity = color.opacity,
  fontSize = typography.fontSize,
  fontFamily = typography.fontFamily,
  fontWeight = typography.fontWeight,
  lineHeight = typography.lineHeight,
  alignItems = flexbox.alignItems,
  justifyContent = flexbox.justifyContent,
  flexWrap = flexbox.flexWrap,
  flexDirection = flexbox.flexDirection,
  flex = flexbox.flex,
  gridGap = grid.gridGap,
  gridColumnGap = grid.gridColumnGap,
  gridRowGap = grid.gridRowGap,
  gridAutoFlow = grid.gridAutoFlow,
  gridAutoColumns = grid.gridAutoColumns,
  gridAutoRows = grid.gridAutoRows,
  gridTemplateColumns = grid.gridTemplateColumns,
  gridTemplateRows = grid.gridTemplateRows,
  gridTemplateAreas = grid.gridTemplateAreas,
  gridArea = grid.gridArea,
  borderRadius = border.borderRadius,
  zIndex = position.zIndex,
  top = position.top,
  right = position.right,
  bottom = position.bottom,
  left = position.left,
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
    flex,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    gridArea,
    height,
    width,
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
var globalStyles = {
  fontFamily: 'Montserrat, sans-serif',
  colors: {
    primaryColor: '#00aeef',
    silverCloud: '#929598',
    charcoal: '#001217',
    darcula: '#343132',
    mud: '#58595B',
    greey: '#808285',
    graci: '#BCBEC0',
    white: '#ffffff',
    accessibility: '#009fef',
    selectedDay: '#71c9ed',
    selectedDayHover: '#39beef',
    normalDayHover: '#e6e7e8',
  },
  daySize: 36,
}
function getThemeProp(e, t, a) {
  return a &&
    'object' == typeof a &&
    a.reactDatepicker &&
    'object' == typeof a.reactDatepicker &&
    a.reactDatepicker.colors &&
    'object' == typeof a.reactDatepicker.colors &&
    a.reactDatepicker.colors[e]
    ? a.reactDatepicker.colors[e]
    : t
}
var templateObject_1$3,
  templateObject_2,
  templateObject_3,
  placeholderColor = style({prop: 'placeholderColor', cssProperty: 'color'}),
  placeholderFontWeight = style({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  composeInputLabelStyles = compose(
    position,
    border,
    background,
    display,
    borderRadius,
    space,
  ),
  InputLabel = styled__default('label')(
    templateObject_1$3 ||
      (templateObject_1$3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeInputLabelStyles,
  ),
  composeCalendarWrapperStyles = compose(
    position,
    left,
    right,
    top,
    height,
    width,
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
    fontFamily,
    fontSize,
    color,
    fontWeight,
    space,
    border,
    width,
    minHeight,
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
    u = e.dateFormat,
    g = e.onChange,
    f = void 0 === g ? function() {} : g,
    m = React.useState(l),
    h = m[0],
    y = m[1],
    D = React.useRef(null)
  React.useEffect(
    function() {
      y(l)
    },
    [l],
  )
  var v = React.useContext(styled.ThemeContext),
    k = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, v),
      inputBackground: getThemeProp('white', globalStyles.colors.white, v),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: s,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, v),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : n ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (n ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: getThemeProp('graci', globalStyles.colors.graci, v),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + getThemeProp('graci', globalStyles.colors.graci, v),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: getThemeProp('white', globalStyles.colors.white, v),
      inputLabelMargin: '0',
      inputActiveBoxShadow:
        'inset 0px -3px 0 ' + getThemeProp('primaryColor', globalStyles.colors.primaryColor, v),
    })
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: a,
      display: k.inputLabelDisplay,
      position: k.inputLabelPosition,
      border: k.inputLabelBorder,
      background: k.inputLabelBackground,
      borderRadius: k.inputLabelBorderRadius,
      m: k.inputLabelMargin,
    },
    c &&
      React__default.createElement(
        CalendarWrapper,
        {
          position: k.inputCalendarWrapperPosition,
          height: k.inputCalendarWrapperHeight,
          width: k.inputCalendarWrapperWidth,
          top: k.inputCalendarWrapperTop,
          left: k.inputCalendarWrapperLeft,
          right: k.inputCalendarWrapperRight,
        },
        React__default.createElement(CalendarIcon, {
          width: k.inputCalendarIconWidth,
          height: k.inputCalendarIconHeight,
          color: k.inputCalendarIconColor,
        }),
      ),
    React__default.createElement(StyledInput, {
      tabIndex: p ? -1 : 0,
      border: k.inputBorder,
      p: k.inputPadding,
      width: k.inputWidth,
      minHeight: k.inputMinHeight,
      background: k.inputBackground,
      fontFamily: k.fontFamily,
      color: k.inputColor,
      fontSize: k.inputFontSize,
      fontWeight: k.inputFontWeight,
      placeholderColor: k.inputPlaceholderColor,
      placeholderFontWeight: k.inputPlaceholderFontWeight,
      boxShadow: r ? k.inputActiveBoxShadow : 'none',
      id: a,
      placeholder: t,
      'aria-label': o,
      value: h,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        y(t),
          'number' == typeof D.current && clearTimeout(D.current),
          (D.current = setTimeout(function() {
            i()
            var e = b(t, u)
            isNaN(e) || f(e)
          }, 1e3))
      },
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
    fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight,
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
      var t = e.isActive,
        a = e.selectDateBorderColor
      return (
        t &&
        styled.css(
          templateObject_1$5 ||
            (templateObject_1$5 = __makeTemplateObject(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          a,
        )
      )
    },
  )
function SelectDate(e) {
  var t = e.title,
    a = e.isActive,
    n = e.date,
    r = e.vertical,
    o = React.useContext(styled.ThemeContext),
    i = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, o),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: getThemeProp('charcoal', globalStyles.colors.charcoal, o),
      selectDateDateFontSize: r ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: getThemeProp('primaryColor', globalStyles.colors.primaryColor, o),
      selectDatePadding: '0',
    })
  return React__default.createElement(
    Box,
    {p: i.selectDatePadding},
    React__default.createElement(
      Text,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      t,
    ),
    React__default.createElement(
      StyledDate,
      {
        as: 'span',
        color: i.selectDateDateColor,
        fontSize: i.selectDateDateFontSize,
        fontWeight: i.selectDateDateFontWeight,
        fontFamily: i.fontFamily,
        p: i.selectDateDatePadding,
        isActive: a,
        selectDateBorderColor: i.selectDateBorderColor,
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
      a = React.useContext(styled.ThemeContext),
      n = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        monthLabelColor: getThemeProp('darcula', globalStyles.colors.darcula, a),
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
        'data-testid': 'MonthLabel',
      },
      t,
    )
  },
  MonthLabel$1 = function(e) {
    var t = e.label,
      a = React.useContext(styled.ThemeContext),
      n = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        dayLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, a),
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
    fontFamily,
    fontWeight,
    fontSize,
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
    g = r.onDateHover,
    f = r.onDayRender,
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
      onDateHover: g,
      dayRef: n,
    }),
    h = React.useContext(styled.ThemeContext),
    y = getThemeProp('white', globalStyles.colors.white, h),
    b = getThemeProp('mud', globalStyles.colors.mud, h),
    D = getThemeProp('primaryColor', globalStyles.colors.primaryColor, h),
    v = getThemeProp('accessibility', globalStyles.colors.accessibility, h),
    k = getThemeProp('selectedDay', globalStyles.colors.selectedDay, h),
    _ = getThemeProp('selectedDayHover', globalStyles.colors.selectedDayHover, h),
    S = getThemeProp('normalDayHover', globalStyles.colors.normalDayHover, h),
    x = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      daySize: globalStyles.daySize,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: b,
      dayHoverColor: b,
      daySelectedColor: y,
      daySelectedHoverColor: y,
      dayHoverRangeColor: y,
      daySelectedFirstOrLastColor: y,
      dayBackground: y,
      dayHoverBackground: S,
      daySelectedBackground: k,
      daySelectedHoverBackground: _,
      dayHoverRangeBackground: k,
      daySelectedFirstOrLastBackground: D,
      dayBorderColor: S,
      daySelectedBorderColor: k,
      dayHoverRangeBorderColor: k,
      daySelectedFirstOrLastBorderColor: D,
      dayAccessibilityBorderColor: v,
    }),
    C = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBorderColor,
          selected: x.daySelectedBorderColor,
          normal: x.dayBorderColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, x, m.isWithinHoverRange],
    ),
    R = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBackground,
          selected: x.daySelectedBackground,
          normal: x.dayBackground,
          rangeHover: x.dayHoverRangeBackground,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, x, m.isWithinHoverRange],
    ),
    w = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastColor,
          selected: x.daySelectedColor,
          normal: x.dayColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, x, m.isWithinHoverRange],
    )
  return React__default.createElement(
    StyledDay,
    __assign({}, m, {
      ref: n,
      dayHeight: x.daySize,
      dayWidth: x.daySize,
      background: R,
      color: w,
      fontFamily: x.fontFamily,
      fontWeight: x.dayFontWeight,
      fontSize: x.dayFontSize,
      daySelectedHoverBackground: x.daySelectedHoverBackground,
      dayHoverBackground: x.dayHoverBackground,
      dayHoverColor: x.dayHoverColor,
      daySelectedHoverColor: x.daySelectedHoverColor,
      borderAccessibilityColor: x.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        C +
        ',\n        0 1px 0 0 ' +
        C +
        ',\n        1px 1px 0 0 ' +
        C +
        ',\n        1px 0 0 0 ' +
        C +
        ' inset,\n        0 1px 0 0 ' +
        C +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + a.toDateString(),
    }),
    'function' == typeof f
      ? f(a)
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
    r = React.useContext(styled.ThemeContext),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: getThemeProp('mud', globalStyles.colors.mud, r),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: getThemeProp('darcula', globalStyles.colors.darcula, r),
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
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
      rtl: n,
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
    width,
    height,
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
    i = React.useContext(styled.ThemeContext),
    l = useThemeProps({
      navButtonWidth: n ? '48px' : '30px',
      navButtonHeight: n ? '48px' : '30px',
      navButtonBackground: getThemeProp('white', globalStyles.colors.white, i),
      navButtonBorder:
        '1px solid ' + getThemeProp('silverCloud', globalStyles.colors.silverCloud, i),
      navButtonPadding: '0',
      navButtonIconHeight: n ? '18px' : '11px',
      navButtonIconWidth: n ? '28px' : '18px',
      navButtonIconColor: getThemeProp('greey', globalStyles.colors.greey, i),
    })
  function c() {
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
      width: l.navButtonWidth,
      height: l.navButtonHeight,
      background: l.navButtonBackground,
      border: l.navButtonBorder,
      borderRight: 'up' !== c() || r ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === c() && r ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': o,
      onClick: a,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    React__default.createElement(CaretIcon$1, {
      width: l.navButtonIconWidth,
      height: l.navButtonIconHeight,
      color: l.navButtonIconColor,
      direction: c(),
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
    fontSize,
    fontFamily,
    fontWeight,
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
    r = React.useContext(styled.ThemeContext),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      closeMargin: a ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, r),
      closeHoverColor: getThemeProp('darcula', globalStyles.colors.darcula, r),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return React__default.createElement(
    Wrapper,
    {
      onClick: t,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    React__default.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React__default.createElement(
      Text$1,
      {
        m: o.closeMargin,
        color: o.closeColor,
        fontSize: o.closeFontSize,
        fontFamily: o.fontFamily,
        fontWeight: o.closeFontWeight,
      },
      n,
    ),
  )
}
var opacity0To100$1 = styled.keyframes(
    templateObject_1$c ||
      (templateObject_1$c = __makeTemplateObject(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  composeStyledDatepickerStyles = compose(
    background,
    space,
    borderRadius,
    position,
    shadow,
    width,
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
    display,
    justifyContent,
  ),
  CloseWrapper = styled__default(Box)(
    templateObject_5$1 ||
      (templateObject_5$1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeCloseWrapperStyles,
  ),
  composeMonthGridStyles = compose(
    overflow,
    height,
  ),
  MonthGrid = styled__default(Grid)(
    templateObject_6 || (templateObject_6 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeMonthGridStyles,
  )
function Datepicker(e, t) {
  var a = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.focusedInput,
    l = e.onDatesChange,
    c = e.dayLabelFormat,
    s = e.weekdayLabelFormat,
    d = e.monthLabelFormat,
    p = e.onDayRender,
    u = e.vertical,
    g = void 0 !== u && u,
    f = e.rtl,
    m = void 0 !== f && f,
    h = e.showResetDates,
    y = void 0 === h || h,
    b = e.showClose,
    D = void 0 === b || b,
    v = e.showSelectedDates,
    k = void 0 === v || v,
    _ = e.exactMinBookingDays,
    S = void 0 !== _ && _,
    x = e.isDateBlocked,
    C =
      void 0 === x
        ? function() {
            return !1
          }
        : x,
    R = e.minBookingDays,
    w = void 0 === R ? 1 : R,
    O = e.onClose,
    T = void 0 === O ? function() {} : O,
    B = e.numberOfMonths,
    j = e.firstDayOfWeek,
    F = e.displayFormat,
    W = void 0 === F ? 'MM/DD/YYYY' : F,
    M = e.phrases,
    $ = void 0 === M ? datepickerPhrases : M,
    L = Be({
      startDate: a,
      endDate: n,
      focusedInput: i,
      onDatesChange: l,
      minBookingDate: r,
      maxBookingDate: o,
      minBookingDays: w,
      isDateBlocked: C,
      exactMinBookingDays: S,
      numberOfMonths: B,
      firstDayOfWeek: j,
    }),
    I = L.activeMonths,
    P = L.isDateSelected,
    H = L.isFirstOrLastSelectedDate,
    E = L.isDateHovered,
    A = L.firstDayOfWeek,
    z = L.onDateSelect,
    Y = L.onResetDates,
    G = L.goToPreviousMonths,
    N = L.goToNextMonths,
    K = L.numberOfMonths,
    Q = L.hoveredDate,
    V = L.onDateHover,
    U = L.isDateFocused,
    X = L.focusedDate,
    Z = L.onDateFocus,
    q = L.isDateBlocked
  React.useImperativeHandle(t, function() {
    return {
      onDateSelect: function(e) {
        z(e)
      },
    }
  })
  var J = React.useRef(null),
    ee = React.useContext(styled.ThemeContext),
    te = useThemeProps({
      datepickerBackground: '#ffffff',
      datepickerPadding: g ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: g ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: g ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: g ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: g ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: m ? 'unset' : g ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: m ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: g ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: getThemeProp(
        'silverCloud',
        globalStyles.colors.silverCloud,
        ee,
      ),
      datepickerMonthsWrapperMargin: D || k ? (k ? '28px 0 0' : '48px 0 0') : 'unset',
      datepickerPreviousMonthButtonPosition: g ? 'relative' : 'absolute',
      datepickerPreviousMonthButtonTop: g ? 'unset' : '-5px',
      datepickerPreviousMonthButtonLeft: g ? 'unset' : '0',
      datepickerPreviousMonthButtonRight: 'unset',
      datepickerPreviousMonthButtonBottom: 'unset',
      datepickerNextMonthButtonPosition: g ? 'relative' : 'absolute',
      datepickerNextMonthButtonTop: g ? 'unset' : '-5px',
      datepickerNextMonthButtonLeft: 'unset',
      datepickerNextMonthButtonRight: g ? 'unset' : '0',
      datepickerNextMonthButtonBottom: 'unset',
      datepickerMonthsGridGap: g ? '32px' : '0 32px',
      datepickerMonthsGridOverflow: 'auto',
      datepickerMonthsGridHeight: g ? '50vh' : '100%',
      datepickerResetDatesWrapperMargin: g ? 'unset' : '32px 0 0',
      datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    })
  function ne() {
    J && J.current && g && (J.current.scrollTop = 0)
  }
  function re() {
    N(), ne()
  }
  function ie() {
    G(), ne()
  }
  return React__default.createElement(
    DatepickerContext.Provider,
    {
      value: {
        rtl: m,
        isDateFocused: U,
        isDateSelected: P,
        isDateHovered: E,
        isFirstOrLastSelectedDate: H,
        onDateFocus: Z,
        focusedDate: X,
        onDateSelect: z,
        onDateHover: V,
        onDayRender: p,
        isDateBlocked: q,
      },
    },
    React__default.createElement(
      StyledDatepicker,
      {
        background: te.datepickerBackground,
        p: te.datepickerPadding,
        borderRadius: te.datepickerBorderRadius,
        position: te.datepickerPosition,
        boxShadow: te.datepickerBoxShadow,
        width: te.datepickerWidth,
        rtl: m,
      },
      D &&
        React__default.createElement(
          CloseWrapper,
          {
            m: te.datepickerCloseWrapperMargin,
            display: te.datepickerCloseWrapperDisplay,
            justifyContent: te.datepickerCloseWrapperJustifyContent,
            position: te.datepickerCloseWrapperPosition,
            right: te.datepickerCloseWrapperRight,
            top: te.datepickerCloseWrapperTop,
            left: te.datepickerCloseWrapperLeft,
            bottom: te.datepickerCloseWrapperBottom,
            zIndex: te.datepickerCloseWrapperZIndex,
          },
          React__default.createElement(Close, {onClick: T, rtl: m, closeText: $.close}),
        ),
      k &&
        React__default.createElement(
          DateWrapper,
          null,
          React__default.createElement(
            Grid,
            {gridTemplateColumns: te.datepickerSelectDateGridTemplateColumns},
            React__default.createElement(SelectDate, {
              title: $.datepickerStartDateLabel,
              date: Ye(a, W, $.datepickerStartDatePlaceholder),
              isActive: i === xe,
              vertical: g,
            }),
            React__default.createElement(
              Flex,
              {justifyContent: 'center', alignItems: 'center'},
              React__default.createElement(ArrowIcon, {
                height: te.datepickerSelectDateArrowIconHeight,
                width: te.datepickerSelectDateArrowIconWidth,
                iconColor: te.datepickerSelectDateArrowIconColor,
              }),
            ),
            React__default.createElement(SelectDate, {
              title: $.datepickerEndDateLabel,
              date: Ye(n, W, $.datepickerEndDatePlaceholder),
              isActive: i === be,
              vertical: g,
            }),
          ),
        ),
      React__default.createElement(
        Box,
        {position: 'relative'},
        React__default.createElement(
          Box,
          {m: te.datepickerMonthsWrapperMargin},
          React__default.createElement(
            MonthGrid,
            {
              'data-testid': 'MonthGrid',
              overflow: te.datepickerMonthsGridOverflow,
              height: te.datepickerMonthsGridHeight,
              gridTemplateColumns: g ? '1fr' : 'repeat(' + K + ', 1fr)',
              gridGap: te.datepickerMonthsGridGap,
              pr: m ? '1px' : '0',
              ref: J,
              onMouseLeave: function() {
                Q && V(null)
              },
            },
            I.map(function(e) {
              return React__default.createElement(Month, {
                key: 'month-' + e.year + '-' + e.month,
                year: e.year,
                month: e.month,
                firstDayOfWeek: A,
                dayLabelFormat: c || ae,
                weekdayLabelFormat: s || oe,
                monthLabelFormat: d || ue,
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
                {flex: '1', m: te.datepickerResetDatesWrapperMargin},
                React__default.createElement(ResetDates, {
                  rtl: m,
                  onResetDates: Y,
                  text: $.resetDates,
                }),
              ),
            React__default.createElement(
              Box,
              {
                position: te.datepickerPreviousMonthButtonPosition,
                top: te.datepickerPreviousMonthButtonTop,
                left: te.datepickerPreviousMonthButtonLeft,
                right: te.datepickerPreviousMonthButtonRight,
                bottom: te.datepickerPreviousMonthButtonBottom,
              },
              React__default.createElement(NavButton, {
                type: 'prev',
                onClick: m && !g ? re : ie,
                vertical: g,
                rtl: m,
                ariaLabel: 'Previous month',
              }),
            ),
            React__default.createElement(
              Box,
              {
                position: te.datepickerNextMonthButtonPosition,
                top: te.datepickerNextMonthButtonTop,
                left: te.datepickerNextMonthButtonLeft,
                right: te.datepickerNextMonthButtonRight,
                bottom: te.datepickerNextMonthButtonBottom,
              },
              React__default.createElement(NavButton, {
                type: 'next',
                onClick: m && !g ? ie : re,
                vertical: g,
                rtl: m,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var templateObject_1$c,
  templateObject_2$7,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6,
  templateObject_1$d,
  templateObject_2$8,
  templateObject_3$4,
  templateObject_4$2,
  templateObject_5$2,
  Datepicker$1 = React__default.forwardRef(Datepicker),
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
    opacity,
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
    borderRadius,
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
    g = e.monthLabelFormat,
    f = e.onDayRender,
    m = e.showClose,
    h = void 0 === m || m,
    y = e.showSelectedDates,
    b = void 0 === y || y,
    D = e.showResetDates,
    v = void 0 === D || D,
    k = e.vertical,
    _ = void 0 !== k && k,
    S = e.rtl,
    x = void 0 !== S && S,
    C = e.isDateBlocked,
    R =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    w = e.minBookingDays,
    O = void 0 === w ? 1 : w,
    T = e.onClose,
    B = void 0 === T ? function() {} : T,
    j = e.showStartDateCalendarIcon,
    F = void 0 === j || j,
    W = e.showEndDateCalendarIcon,
    M = void 0 === W || W,
    $ = e.displayFormat,
    L = void 0 === $ ? 'MM/DD/YYYY' : $,
    I = e.phrases,
    P = void 0 === I ? dateRangeInputPhrases : I,
    H = e.placement,
    E = void 0 === H ? 'bottom' : H,
    A = React.useRef(null),
    z = React.useRef(null),
    Y = React.useContext(styled.ThemeContext),
    G = useThemeProps(
      __assign(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: _ ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: getThemeProp('graci', globalStyles.colors.graci, Y),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: _ ? (x ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: _ ? (x ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        getPlacement(E, x),
      ),
    )
  function N(e) {
    null !== c && z && z.current && !z.current.contains(e.target) && i(null)
  }
  function K(e) {
    A && A.current && A.current.onDateSelect && A.current.onDateSelect(e)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', N),
        function() {
          window.removeEventListener('click', N)
        }
      )
    }),
    React__default.createElement(
      Wrapper$1,
      {rtl: x, position: 'relative', ref: z},
      React__default.createElement(
        InputGrid,
        {
          background: G.dateRangeBackground,
          gridTemplateColumns: G.dateRangeGridTemplateColumns,
          border: G.dateRangeBorder,
          borderRadius: G.dateRangeBorderRadius,
        },
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: P.startDateAriaLabel,
          placeholder: P.startDatePlaceholder,
          value: Ye(t, L, ''),
          onClick: function() {
            return i(xe)
          },
          showCalendarIcon: F,
          vertical: _,
          isActive: c === xe,
          padding: G.dateRangeStartDateInputPadding,
          rtl: x,
          onChange: K,
          dateFormat: L,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(InputArrowIcon, {
            width: G.dateRangeArrowIconWidth,
            height: G.dateRangeArrowIconHeight,
            color: G.dateRangeArrowIconColor,
            opacity: G.dateRangeArrowIconOpacity,
            rtl: x,
          }),
        ),
        React__default.createElement(Input, {
          id: 'endDate',
          ariaLabel: P.endDateAriaLabel,
          placeholder: P.endDatePlaceholder,
          value: Ye(a, L, ''),
          onClick: function() {
            return i(t ? be : xe)
          },
          showCalendarIcon: M,
          vertical: _,
          isActive: c === be,
          padding: G.dateRangeEndDateInputPadding,
          rtl: x,
          disableAccessibility: c === xe,
          onChange: K,
          dateFormat: L,
        }),
      ),
      React__default.createElement(
        Box,
        {
          position: G.dateRangeDatepickerWrapperPosition,
          bottom: G.dateRangeDatepickerWrapperBottom,
          left: G.dateRangeDatepickerWrapperLeft,
          top: G.dateRangeDatepickerWrapperTop,
          right: G.dateRangeDatepickerWrapperRight,
        },
        null !== c &&
          React__default.createElement(Datepicker$1, {
            onClose: function() {
              B(), i(null)
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
            minBookingDays: O,
            isDateBlocked: R,
            exactMinBookingDays: d,
            showResetDates: v,
            vertical: _,
            showSelectedDates: b,
            showClose: h,
            rtl: x,
            dayLabelFormat: p,
            weekdayLabelFormat: u,
            monthLabelFormat: g,
            onDayRender: f,
            phrases: P,
            ref: A,
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
    g = void 0 === u ? 1 : u,
    f = e.showClose,
    m = void 0 === f || f,
    h = e.showResetDate,
    y = void 0 === h || h,
    b = e.vertical,
    D = void 0 !== b && b,
    v = e.rtl,
    k = void 0 !== v && v,
    _ = e.isDateBlocked,
    S =
      void 0 === _
        ? function() {
            return !1
          }
        : _,
    x = e.onClose,
    C = void 0 === x ? function() {} : x,
    R = e.showCalendarIcon,
    w = void 0 === R || R,
    O = e.displayFormat,
    T = void 0 === O ? 'MM/DD/YYYY' : O,
    B = e.phrases,
    j = void 0 === B ? dateSingleInputPhrases : B,
    F = e.placement,
    W = void 0 === F ? 'bottom' : F,
    M = React.useRef(null),
    $ = React.useRef(null),
    L = useThemeProps(
      __assign(
        {
          dateSingleInputPadding: D ? (k ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        getPlacement$1(W, k),
      ),
    )
  function I(e) {
    i && $ && $.current && !$.current.contains(e.target) && o(!1)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', I),
        function() {
          window.removeEventListener('click', I)
        }
      )
    }),
    React__default.createElement(
      Wrapper$2,
      {rtl: k, position: 'relative', ref: $},
      React__default.createElement(Input, {
        id: 'startDate',
        ariaLabel: j.dateAriaLabel,
        placeholder: j.datePlaceholder,
        value: Ye(t, T, ''),
        onClick: function() {
          return o(!0)
        },
        showCalendarIcon: w,
        vertical: D,
        isActive: !1,
        padding: L.dateSingleInputPadding,
        rtl: k,
        onChange: function(e) {
          M && M.current && M.current.onDateSelect && M.current.onDateSelect(e)
        },
        dateFormat: T,
      }),
      React__default.createElement(
        Box,
        {
          position: L.dateSingleDatepickerWrapperPosition,
          bottom: L.dateSingleDatepickerWrapperBottom,
          left: L.dateSingleDatepickerWrapperLeft,
          top: L.dateSingleDatepickerWrapperTop,
          right: L.dateSingleDatepickerWrapperRight,
        },
        i &&
          React__default.createElement(Datepicker$1, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              C(), o(!1)
            },
            startDate: t,
            endDate: t,
            minBookingDate: a,
            maxBookingDate: n,
            firstDayOfWeek: r,
            numberOfMonths: g,
            focusedInput: i ? xe : null,
            displayFormat: T,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                a = e.startDate
              l({showDatepicker: null !== t, date: a})
            },
            isDateBlocked: S,
            showResetDates: y,
            vertical: D,
            showSelectedDates: !1,
            showClose: m,
            rtl: k,
            dayLabelFormat: c,
            weekdayLabelFormat: s,
            monthLabelFormat: d,
            onDayRender: p,
            phrases: j,
            ref: M,
          }),
      ),
    )
  )
}
;(exports.DateRangeInput = DateRangeInput),
  (exports.DateSingleInput = DateSingleInput),
  (exports.Datepicker = Datepicker$1),
  (exports.END_DATE = be),
  (exports.START_DATE = xe),
  (exports.dateRangeInputPhrases = dateRangeInputPhrases),
  (exports.dateSingleInputPhrases = dateSingleInputPhrases),
  (exports.datepickerPhrases = datepickerPhrases)
