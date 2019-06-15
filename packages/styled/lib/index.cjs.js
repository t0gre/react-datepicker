'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var React = require('react'),
  React__default = _interopDefault(React),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled),
  ReactDOM = require('react-dom'),
  ReactDOM__default = _interopDefault(ReactDOM),
  a = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
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
  w = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  p = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  T = /([Z+-].*)$/,
  F = /^(Z)$/,
  S = /^([+-])(\d{2})$/,
  Y = /^([+-])(\d{2}):?(\d{2})$/
function b(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var a = new Date(0)
  a.setUTCFullYear(e, 0, 4)
  var r = 7 * t + n + 1 - (a.getUTCDay() || 7)
  return a.setUTCDate(a.getUTCDate() + r), a
}
var x = function(e, t) {
    if (o(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? s : Number(n)
    var r,
      _,
      x,
      C = (function(e) {
        var t,
          n = {},
          a = e.split(c)
        if ((f.test(a[0]) ? ((n.date = null), (t = a[0])) : ((n.date = a[0]), (t = a[1])), t)) {
          var r = T.exec(t)
          r ? ((n.time = t.replace(r[1], '')), (n.timezone = r[1])) : (n.time = t)
        }
        return n
      })(e),
      R = (function(e, t) {
        var n,
          a = d[t],
          r = g[t]
        if ((n = l.exec(e) || r.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = D.exec(e) || a.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(C.date, n),
      E = R.year,
      I = (function(e, t) {
        if (null === t) return null
        var n, a, r
        if (0 === e.length) return (a = new Date(0)).setUTCFullYear(t), a
        if ((n = v.exec(e)))
          return (a = new Date(0)), (r = parseInt(n[1], 10) - 1), a.setUTCFullYear(t, r), a
        if ((n = m.exec(e))) {
          a = new Date(0)
          var o = parseInt(n[1], 10)
          return a.setUTCFullYear(t, 0, o), a
        }
        if ((n = h.exec(e))) {
          ;(a = new Date(0)), (r = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return a.setUTCFullYear(t, r, i), a
        }
        return (n = y.exec(e))
          ? b(t, parseInt(n[1], 10) - 1)
          : (n = M.exec(e))
          ? b(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(R.restDateString, E)
    if (I) {
      var O,
        j = I.getTime(),
        B = 0
      if (
        (C.time &&
          (B = (function(e) {
            var t, n, a
            if ((t = k.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * u
            if ((t = w.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (a = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * u + a * i
              )
            if ((t = p.exec(e))) {
              ;(n = parseInt(t[1], 10)), (a = parseInt(t[2], 10))
              var r = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * u + a * i + 1e3 * r
            }
            return null
          })(C.time)),
        C.timezone)
      )
        (r = C.timezone),
          (O =
            ((_ = F.exec(r))
              ? 0
              : (_ = S.exec(r))
              ? ((x = 60 * parseInt(_[2], 10)), '+' === _[1] ? -x : x)
              : (_ = Y.exec(r))
              ? ((x = 60 * parseInt(_[2], 10) + parseInt(_[3], 10)), '+' === _[1] ? -x : x)
              : 0) * i)
      else {
        var W = j + B,
          $ = new Date(W)
        O = a($)
        var L = new Date(W)
        L.setDate($.getDate() + 1)
        var P = a(L) - a($)
        P > 0 && (O += P)
      }
      return new Date(j + B + O)
    }
    return new Date(e)
  },
  B = function(e) {
    var t = x(e),
      n = new Date(0)
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
  },
  H = function(e) {
    var t = x(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = 6e4,
  O = 864e5,
  A = function(e, t) {
    var n = H(e),
      a = H(t),
      r = n.getTime() - n.getTimezoneOffset() * I,
      o = a.getTime() - a.getTimezoneOffset() * I
    return Math.round((r - o) / O)
  },
  W = function(e) {
    var t = x(e)
    return A(t, B(t)) + 1
  },
  L = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      a = x(e),
      r = a.getDay(),
      o = (r < n ? 7 : 0) + r - n
    return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
  },
  $ = function(e) {
    return L(e, {weekStartsOn: 1})
  },
  E = function(e) {
    var t = x(e),
      n = t.getFullYear(),
      a = new Date(0)
    a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0)
    var r = $(a),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = $(o)
    return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  G = function(e) {
    var t = E(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), $(n)
  },
  C = 6048e5,
  N = function(e) {
    var t = x(e),
      n = $(t).getTime() - G(t).getTime()
    return Math.round(n / C) + 1
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
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var a = U.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + a.join('|') + '|.)', 'g')
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
      n = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      a = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      r = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      o = ['AM', 'PM'],
      i = ['am', 'pm'],
      s = ['a.m.', 'p.m.'],
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
          return a[e.getDay()]
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
          return e.getHours() / 12 >= 1 ? s[1] : s[0]
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
        localize: function(t, n, a) {
          var r
          return (
            (a = a || {}),
            (r =
              'string' == typeof e[t]
                ? e[t]
                : 1 === n
                ? e[t].one
                : e[t].other.replace('{{count}}', n)),
            a.addSuffix ? (a.comparison > 0 ? 'in ' + r : r + ' ago') : r
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
  var n = e > 0 ? '-' : '+',
    a = Math.abs(e),
    r = a % 60
  return n + Q(Math.floor(a / 60), 2) + t + Q(r, 2)
}
function Q(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var j = function(e, t, n) {
    var a = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      r = (n || {}).locale,
      o = Z.format.formatters,
      i = Z.format.formattingTokensRegExp
    r &&
      r.format &&
      r.format.formatters &&
      ((o = r.format.formatters),
      r.format.formattingTokensRegExp && (i = r.format.formattingTokensRegExp))
    var s = x(e)
    return R(s)
      ? (function(e, t, n) {
          var a,
            r,
            o,
            i = e.match(n),
            s = i.length
          for (a = 0; a < s; a++)
            (r = t[i[a]] || J[i[a]]),
              (i[a] =
                r ||
                ((o = i[a]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < s; n++)
              i[n] instanceof Function ? (t += i[n](e, J)) : (t += i[n])
            return t
          }
        })(a, o, i)(s)
      : 'Invalid Date'
  },
  K = function(e, t) {
    var n = x(e),
      a = Number(t)
    return n.setDate(n.getDate() + a), n
  },
  q = function(e, t, n) {
    var a = x(e),
      r = void 0 !== n ? n : 1,
      o = x(t).getTime()
    if (a.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      s = a
    for (s.setHours(0, 0, 0, 0); s.getTime() <= o; ) i.push(x(s)), s.setDate(s.getDate() + r)
    return i
  },
  V = function(e) {
    var t = x(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  _ = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      a = x(e),
      r = a.getDay(),
      o = 6 + (r < n ? -7 : 0) - (r - n)
    return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
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
    n = t.firstDayOfWeek,
    a = void 0 === n ? 1 : n,
    r = t.weekdayLabelFormat,
    o =
      void 0 === r
        ? function(e) {
            return j(e, 'dd')
          }
        : r,
    i = new Date()
  return q(K(L(i), a), K(_(i), a)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function re(e) {
  var t = e.year,
    n = e.month,
    a = e.firstDayOfWeek,
    r = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    i =
      void 0 === o
        ? function(e) {
            return j(e, 'DD')
          }
        : o,
    s = new Date(t, n),
    c = te(s),
    l = ee(c),
    d = V(s),
    p = Array.from(Array(l >= r ? l - r : r).keys()).fill(0),
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
    n = e.month,
    a = e.firstDayOfWeek,
    r = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    i = void 0 === o ? ae : o,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? oe : s,
    l = e.monthLabelFormat,
    d = void 0 === l ? ue : l
  return {
    days: React.useMemo(
      function() {
        return re({year: t, month: n, firstDayOfWeek: r, dayLabelFormat: i})
      },
      [t, n, r, i],
    ),
    weekdayLabels: React.useMemo(
      function() {
        return ne({firstDayOfWeek: r, weekdayLabelFormat: c})
      },
      [r, c],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var se = function(e, t) {
    var n = x(e),
      a = x(t)
    return n.getTime() < a.getTime()
  },
  ce = function(e, t) {
    var n = x(e),
      a = x(t)
    return n.getTime() > a.getTime()
  },
  fe = function(e, t, n) {
    var a = x(e).getTime(),
      r = x(t).getTime(),
      o = x(n).getTime()
    if (r > o) throw new Error('The start of the range cannot be after the end of the range')
    return a >= r && a <= o
  },
  De = function(e, t) {
    var n = H(e),
      a = H(t)
    return n.getTime() === a.getTime()
  },
  de = function(e, t) {
    var n = x(e),
      a = x(t)
    return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
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
      n = t.getFullYear(),
      a = t.getMonth(),
      r = new Date(0)
    return r.setFullYear(n, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
  },
  he = function(e, t) {
    var n = x(e),
      a = Number(t),
      r = n.getMonth() + a,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), r, 1), o.setHours(0, 0, 0, 0)
    var i = me(o)
    return n.setMonth(r, Math.min(i, n.getDate())), n
  }
function ye(e, t, n) {
  return !(!t || !n) && fe(e, t, n)
}
function Me(e, t, n) {
  return !!((t && De(e, t)) || (n && De(e, n)))
}
function ke(e) {
  var t = e.date,
    n = e.minBookingDate,
    a = e.maxBookingDate,
    r = e.isDateBlockedFn,
    o = e.startDate,
    i = e.endDate,
    s = e.minBookingDays,
    c = void 0 === s ? 1 : s,
    l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    d = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a
  return !!(
    (l && se(t, l)) ||
    (d && ce(t, d)) ||
    (o && !i && c > 1 && fe(t, o, K(o, c - 2))) ||
    (r && r(t))
  )
}
function we(e) {
  var t = te(e)
  return {year: le(t), month: ge(t), date: t}
}
function pe() {
  return we(ve())
}
function Te(e, t) {
  var n = t ? we(t) : pe(),
    a = n.date,
    r = [n]
  return (
    e > 1 &&
      (r = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (a = he(e[e.length - 1].date, 1)), e.concat([we(a)])
      }, r)),
    r
  )
}
function Fe(e, t, n) {
  var a = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (a = he(a, n)), n > 0 ? e.concat([we(a)]) : [we(a)].concat(e)
  }, [])
}
function Se(e, t, n) {
  return e && 'string' == typeof t ? j(e, t) : e && 'function' == typeof t ? t(e) : n
}
function Ye(e) {
  var t = e.startDate,
    n = e.endDate,
    a = e.isDateBlocked,
    r = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    c = !i || !se(t, K(i, -1)),
    l = !s || !ce(K(t, r - 1), s)
  if (t && 1 === r && !n && !a(t)) return !0
  if ((t && r > 1 && !n && !o) || (t && r > 0 && o && c && l) || (t && r > 0 && o && !i && !s))
    return q(t, K(t, r - 1)).reduce(function(e, t) {
      return e ? !a(t) : e
    }, !0)
  if (t && n && !o) {
    var d = K(t, r - 1)
    return (
      !se(n, d) &&
      q(t, n).reduce(function(e, t) {
        return e ? !a(t) : e
      }, !0)
    )
  }
  return !1
}
var be = 'startDate',
  xe = 'endDate'
function Be(e) {
  var t = e.startDate,
    n = e.endDate,
    a = e.focusedInput,
    r = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDatesChange,
    s = e.exactMinBookingDays,
    c = void 0 !== s && s,
    l = e.minBookingDays,
    d = void 0 === l ? 1 : l,
    p = e.numberOfMonths,
    u = void 0 === p ? 2 : p,
    f = e.firstDayOfWeek,
    m = void 0 === f ? 1 : f,
    g = e.isDateBlocked,
    h =
      void 0 === g
        ? function() {
            return !1
          }
        : g,
    y = React.useState(function() {
      return Te(u, t)
    }),
    _ = y[0],
    b = y[1],
    v = React.useState(null),
    D = v[0],
    x = v[1],
    k = React.useState(t),
    S = k[0],
    C = k[1],
    R = React.useCallback(
      function(e) {
        C(e), (!S || (S && !de(e, S))) && b(Te(u, e))
      },
      [C, b, u, S],
    ),
    E = React.useCallback(
      function(e) {
        return ye(e, t, n)
      },
      [t, n],
    ),
    I = React.useCallback(
      function(e) {
        return Me(e, t, n)
      },
      [t, n],
    ),
    O = React.useCallback(
      function(e) {
        return ke({
          date: e,
          minBookingDate: r,
          maxBookingDate: o,
          startDate: t,
          endDate: n,
          minBookingDays: d,
          isDateBlockedFn: h,
        })
      },
      [r, o, t, n, d, h],
    ),
    T = React.useCallback(
      function(e) {
        return !!S && De(e, S)
      },
      [S],
    ),
    w = React.useCallback(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            a = e.endDate,
            r = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && fe(t, o, K(o, i - 1))
            ? q(o, K(o, i - 1)).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
            : n && !a && o && fe(t, n, K(n, i - 1)) && De(n, o) && i > 1
            ? q(n, K(n, i - 1)).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
            : !(!n || a || !o || se(o, n) || !fe(t, n, o)) &&
              q(n, o).reduce(function(e, t) {
                return e ? !r(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: D,
          startDate: t,
          endDate: n,
          minBookingDays: d,
          exactMinBookingDays: c,
          isDateBlocked: h,
        })
      },
      [D, t, n, d, c, h],
    )
  function M(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      S ||
      (R(new Date()), b(Te(u, new Date())))
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', M),
        function() {
          window.removeEventListener('keydown', M)
        }
      )
    }),
    {
      firstDayOfWeek: m,
      activeMonths: _,
      isDateSelected: E,
      isDateHovered: w,
      isFirstOrLastSelectedDate: I,
      isDateBlocked: O,
      numberOfMonths: u,
      isDateFocused: T,
      focusedDate: S,
      hoveredDate: D,
      onResetDates: function() {
        i({startDate: null, endDate: null, focusedInput: be})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var a = !O(e) || (t && De(e, t)),
              i = !r || !se(e, K(r, -1)),
              s = !o || !ce(e, o),
              l = K(e, d - 1),
              p = !r || !se(l, r),
              u = !o || !ce(l, o),
              f = c && d > 1 && i && s && p && u,
              m = t && !n && !c && i && s,
              g = !(d > 1 && t) || fe(e, t, K(t, d - 2)),
              h = t && De(e, t) && g
            a && (f || m || h) ? x(e) : null !== D && x(null)
          }
        } else x(null)
      },
      onDateSelect: function(e) {
        ;(a === xe || a === be) &&
        d > 0 &&
        c &&
        Ye({
          minBookingDays: d,
          exactMinBookingDays: c,
          minBookingDate: r,
          maxBookingDate: o,
          isDateBlocked: h,
          startDate: e,
          endDate: null,
        })
          ? i({startDate: e, endDate: K(e, d - 1), focusedInput: null})
          : ((a === xe && t && se(e, t)) || (a === be && n && ce(e, n))) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: h, startDate: e, endDate: null})
          ? i({endDate: null, startDate: e, focusedInput: xe})
          : a === be && !c && Ye({minBookingDays: d, isDateBlocked: h, endDate: n, startDate: e})
          ? i({endDate: n, startDate: e, focusedInput: xe})
          : a === be && !c && Ye({minBookingDays: d, isDateBlocked: h, endDate: null, startDate: e})
          ? i({endDate: null, startDate: e, focusedInput: xe})
          : a === xe &&
            t &&
            !se(e, t) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: h, startDate: t, endDate: e}) &&
            i({startDate: t, endDate: e, focusedInput: null}),
          (!S || (S && !de(e, S))) && b(Te(u, e))
      },
      onDateFocus: R,
      goToPreviousMonths: function() {
        b(Fe(_, u, -1)), C(null)
      },
      goToNextMonths: function() {
        b(Fe(_, u, 1)), C(null)
      },
    }
  )
}
function He(e) {
  var t = e.date,
    n = e.focusedDate,
    a = e.isDateSelected,
    r = e.isDateFocused,
    o = e.isFirstOrLastSelectedDate,
    i = e.isDateHovered,
    s = e.isDateBlocked,
    c = e.onDateSelect,
    l = e.onDateFocus,
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
  var m = s(t) && !i(t)
  return {
    tabIndex: null === n || r(t) ? 0 : -1,
    isSelected: a(t),
    isSelectedStartOrEnd: o(t),
    isWithinHoverRange: i(t),
    disabledDate: m,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? l(K(t, 1))
        : 'ArrowLeft' === e.key
        ? l(K(t, -1))
        : 'ArrowUp' === e.key
        ? l(K(t, -7))
        : 'ArrowDown' === e.key && l(K(t, 7))
    },
    onClick: m ? function() {} : u,
    onMouseEnter: f,
  }
}
var __assign = function() {
  return (__assign =
    Object.assign ||
    function(e) {
      for (var t, n = 1, a = arguments.length; n < a; n++)
        for (var r in (t = arguments[n]))
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
    var a = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        a[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
    )
  } catch (e) {
    return !1
  }
}
var objectAssign = shouldUseNative()
    ? Object.assign
    : function(e, t) {
        for (var n, a, r = toObject(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) hasOwnProperty.call(n, i) && (r[i] = n[i])
          if (getOwnPropertySymbols) {
            a = getOwnPropertySymbols(n)
            for (var s = 0; s < a.length; s++) propIsEnumerable.call(n, a[s]) && (r[a[s]] = n[a[s]])
          }
        }
        return r
      },
  merge = function(e, t) {
    var n = objectAssign({}, e, t)
    for (var a in e) {
      var r
      e[a] &&
        'object' == typeof t[a] &&
        objectAssign(n, (((r = {})[a] = objectAssign(e[a], t[a])), r))
    }
    return n
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
  get = function(e, t, n, a, r) {
    for (t = t && t.split ? t.split('.') : [t], a = 0; a < t.length; a++) e = e ? e[t[a]] : r
    return e === r ? n : e
  },
  createParser = function(e) {
    var t = {},
      n = function(n) {
        var a = {}
        for (var r in n)
          if (e[r]) {
            var o = e[r],
              i = n[r],
              s = get(n.theme, o.scale, o.defaults)
            if ('object' != typeof i) objectAssign(a, o(i, s))
            else {
              if (
                ((t.breakpoints =
                  t.breakpoints || get(n.theme, 'breakpoints', defaults.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(createMediaQuery))),
                  (a = merge(a, parseResponsiveStyle(t.media, o, s, i)))
                continue
              }
              null !== i && (a = merge(a, parseResponsiveObject(t.breakpoints, o, s, i)))
            }
          }
        return a
      }
    return (n.config = e), (n.propNames = Object.keys(e)), (n.cache = t), n
  },
  parseResponsiveStyle = function(e, t, n, a) {
    var r = {}
    return (
      a.slice(0, e.length).forEach(function(a, o) {
        var i,
          s = e[o],
          c = t(a, n)
        void 0 !== c && objectAssign(r, s ? (((i = {})[s] = objectAssign({}, r[s], c)), i) : c)
      }),
      r
    )
  },
  parseResponsiveObject = function(e, t, n, a) {
    var r = {}
    for (var o in a) {
      var i = e[o],
        s = t(a[o], n)
      if (i) {
        var c,
          l = createMediaQuery(i)
        objectAssign(r, (((c = {})[l] = objectAssign({}, r[l], s)), c))
      } else objectAssign(r, s)
    }
    return r
  },
  createStyleFunction = function(e) {
    var t = e.properties,
      n = e.property,
      a = e.scale,
      r = e.transform,
      o = void 0 === r ? getValue : r,
      i = e.defaultScale
    t = t || [n]
    var s = function(e, n) {
      var a = {},
        r = o(e, n)
      if (null !== r)
        return (
          t.forEach(function(e) {
            a[e] = r
          }),
          a
        )
    }
    return (s.scale = a), (s.defaults = i), s
  },
  system = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(n) {
        var a = e[n]
        t[n] = createStyleFunction(!0 !== a ? a : {property: n, scale: n})
      }),
      createParser(t)
    )
  },
  compose = function() {
    for (var e = {}, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a]
    return (
      n.forEach(function(t) {
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
        var n = arguments[t]
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
    var n = e < 0,
      a = Math.abs(e),
      r = get(t, a, a)
    return isNumber(r) ? r * (n ? -1 : 1) : n ? '-' + r : r
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
      n = e.scale,
      a = e.prop,
      r = void 0 === a ? 'variant' : a,
      o = e.key,
      i = function(e, t) {
        return get(t, e, null)
      }
    i.scale = n || o
    var s = (((t = {})[r] = i), t)
    return createParser(s)
  },
  buttonStyle = variant({key: 'buttons'}),
  textStyle = variant({key: 'textStyles', prop: 'textStyle'}),
  colorStyle = variant({key: 'colorStyles', prop: 'colors'}),
  style = function(e) {
    var t = e.prop,
      n = e.cssProperty,
      a = e.alias,
      r = e.key,
      o = e.transformValue,
      i = e.scale,
      s = e.properties,
      c = {}
    return (
      (c[t] = createStyleFunction({
        properties: s,
        property: n || t,
        scale: r,
        defaultScale: i,
        transform: o,
      })),
      a && (c[a] = c[t]),
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
    n = e.width,
    a = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
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
        ? Object.keys(e).reduce(function(n, a) {
            var r
            return __assign({}, n, (((r = {})[a] = t.reactDatepicker[a] || e[a]), r))
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
    n = e.id,
    a = e.vertical,
    r = e.isActive,
    o = e.ariaLabel,
    i = e.onClick,
    s = e.value,
    c = e.showCalendarIcon,
    l = e.padding,
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
      inputPadding: l,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: globalStyles.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : a ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (a ? '8px' : '16px') : 'unset',
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
      htmlFor: n,
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
      id: n,
      placeholder: t,
      'aria-label': o,
      value: s,
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
    n = e.width,
    a = e.iconColor,
    r = e.direction,
    o = void 0 === r ? 'right' : r,
    i = e.className,
    s = void 0 === i ? '' : i,
    c = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
      className: s,
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
function _extends$1() {
  return (_extends$1 =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
      }
      return e
    }).apply(this, arguments)
}
function _objectWithoutPropertiesLoose(e, t) {
  if (null == e) return {}
  var n,
    a,
    r = {},
    o = Object.keys(e)
  for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
  return r
}
function _inheritsLoose(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t)
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
    a = n ? Symbol.for('react.element') : 60103,
    r = n ? Symbol.for('react.portal') : 60106,
    o = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    l = n ? Symbol.for('react.context') : 60110,
    d = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    u = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    g = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case a:
          switch ((e = e.type)) {
            case d:
            case p:
            case o:
            case s:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case l:
                case u:
                case c:
                  return e
                default:
                  return t
              }
          }
        case g:
        case m:
        case r:
          return t
      }
    }
  }
  function y(e) {
    return h(e) === p
  }
  ;(t.typeOf = h),
    (t.AsyncMode = d),
    (t.ConcurrentMode = p),
    (t.ContextConsumer = l),
    (t.ContextProvider = c),
    (t.Element = a),
    (t.ForwardRef = u),
    (t.Fragment = o),
    (t.Lazy = g),
    (t.Memo = m),
    (t.Portal = r),
    (t.Profiler = s),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === o ||
        e === p ||
        e === s ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === g ||
            e.$$typeof === m ||
            e.$$typeof === c ||
            e.$$typeof === l ||
            e.$$typeof === u))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || h(e) === d
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return h(e) === l
    }),
    (t.isContextProvider = function(e) {
      return h(e) === c
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === a
    }),
    (t.isForwardRef = function(e) {
      return h(e) === u
    }),
    (t.isFragment = function(e) {
      return h(e) === o
    }),
    (t.isLazy = function(e) {
      return h(e) === g
    }),
    (t.isMemo = function(e) {
      return h(e) === m
    }),
    (t.isPortal = function(e) {
      return h(e) === r
    }),
    (t.isProfiler = function(e) {
      return h(e) === s
    }),
    (t.isStrictMode = function(e) {
      return h(e) === i
    }),
    (t.isSuspense = function(e) {
      return h(e) === f
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
  ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ReactPropTypesSecret_1 = ReactPropTypesSecret,
  has = Function.call.bind(Object.prototype.hasOwnProperty)
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction
var factoryWithThrowingShims = function() {
    function e(e, t, n, a, r, o) {
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
  interopRequireDefault = createCommonjsModule(function(e) {
    e.exports = function(e) {
      return e && e.__esModule ? e : {default: e}
    }
  })
unwrapExports(interopRequireDefault)
var hasClass_1 = createCommonjsModule(function(e, t) {
  ;(t.__esModule = !0),
    (t.default = function(e, t) {
      return e.classList
        ? !!t && e.classList.contains(t)
        : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')
    }),
    (e.exports = t.default)
})
unwrapExports(hasClass_1)
var addClass_1 = createCommonjsModule(function(e, t) {
    ;(t.__esModule = !0),
      (t.default = function(e, t) {
        e.classList
          ? e.classList.add(t)
          : (0, n.default)(e, t) ||
            ('string' == typeof e.className
              ? (e.className = e.className + ' ' + t)
              : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
      })
    var n = interopRequireDefault(hasClass_1)
    e.exports = t.default
  }),
  addOneClass = unwrapExports(addClass_1)
function replaceClassName(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
var removeClass = function(e, t) {
    e.classList
      ? e.classList.remove(t)
      : 'string' == typeof e.className
      ? (e.className = replaceClassName(e.className, t))
      : e.setAttribute('class', replaceClassName((e.className && e.className.baseVal) || '', t))
  },
  config$8 = {disabled: !1},
  TransitionGroupContext = React__default.createContext(null),
  UNMOUNTED = 'unmounted',
  EXITED = 'exited',
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
  Transition = (function(e) {
    function t(t, n) {
      var a
      a = e.call(this, t, n) || this
      var r,
        o = n && !n.isMounting ? t.enter : t.appear
      return (
        (a.appearStatus = null),
        t.in
          ? o
            ? ((r = EXITED), (a.appearStatus = ENTERING))
            : (r = ENTERED)
          : (r = t.unmountOnExit || t.mountOnEnter ? UNMOUNTED : EXITED),
        (a.state = {status: r}),
        (a.nextCallback = null),
        a
      )
    }
    _inheritsLoose(t, e),
      (t.getDerivedStateFromProps = function(e, t) {
        return e.in && t.status === UNMOUNTED ? {status: EXITED} : null
      })
    var n = t.prototype
    return (
      (n.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function(e) {
        var t = null
        if (e !== this.props) {
          var n = this.state.status
          this.props.in
            ? n !== ENTERING && n !== ENTERED && (t = ENTERING)
            : (n !== ENTERING && n !== ENTERED) || (t = EXITING)
        }
        this.updateStatus(!1, t)
      }),
      (n.componentWillUnmount = function() {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function() {
        var e,
          t,
          n,
          a = this.props.timeout
        return (
          (e = t = n = a),
          null != a &&
            'number' != typeof a &&
            ((e = a.exit), (t = a.enter), (n = void 0 !== a.appear ? a.appear : t)),
          {exit: e, enter: t, appear: n}
        )
      }),
      (n.updateStatus = function(e, t) {
        if ((void 0 === e && (e = !1), null !== t)) {
          this.cancelNextCallback()
          var n = ReactDOM__default.findDOMNode(this)
          t === ENTERING ? this.performEnter(n, e) : this.performExit(n)
        } else
          this.props.unmountOnExit &&
            this.state.status === EXITED &&
            this.setState({status: UNMOUNTED})
      }),
      (n.performEnter = function(e, t) {
        var n = this,
          a = this.props.enter,
          r = this.context ? this.context.isMounting : t,
          o = this.getTimeouts(),
          i = r ? o.appear : o.enter
        ;(!t && !a) || config$8.disabled
          ? this.safeSetState({status: ENTERED}, function() {
              n.props.onEntered(e)
            })
          : (this.props.onEnter(e, r),
            this.safeSetState({status: ENTERING}, function() {
              n.props.onEntering(e, r),
                n.onTransitionEnd(e, i, function() {
                  n.safeSetState({status: ENTERED}, function() {
                    n.props.onEntered(e, r)
                  })
                })
            }))
      }),
      (n.performExit = function(e) {
        var t = this,
          n = this.props.exit,
          a = this.getTimeouts()
        n && !config$8.disabled
          ? (this.props.onExit(e),
            this.safeSetState({status: EXITING}, function() {
              t.props.onExiting(e),
                t.onTransitionEnd(e, a.exit, function() {
                  t.safeSetState({status: EXITED}, function() {
                    t.props.onExited(e)
                  })
                })
            }))
          : this.safeSetState({status: EXITED}, function() {
              t.props.onExited(e)
            })
      }),
      (n.cancelNextCallback = function() {
        null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function(e, t) {
        ;(t = this.setNextCallback(t)), this.setState(e, t)
      }),
      (n.setNextCallback = function(e) {
        var t = this,
          n = !0
        return (
          (this.nextCallback = function(a) {
            n && ((n = !1), (t.nextCallback = null), e(a))
          }),
          (this.nextCallback.cancel = function() {
            n = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function(e, t, n) {
        this.setNextCallback(n)
        var a = null == t && !this.props.addEndListener
        e && !a
          ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback),
            null != t && setTimeout(this.nextCallback, t))
          : setTimeout(this.nextCallback, 0)
      }),
      (n.render = function() {
        var e = this.state.status
        if (e === UNMOUNTED) return null
        var t = this.props,
          n = t.children,
          a = _objectWithoutPropertiesLoose(t, ['children'])
        if (
          (delete a.in,
          delete a.mountOnEnter,
          delete a.unmountOnExit,
          delete a.appear,
          delete a.enter,
          delete a.exit,
          delete a.timeout,
          delete a.addEndListener,
          delete a.onEnter,
          delete a.onEntering,
          delete a.onEntered,
          delete a.onExit,
          delete a.onExiting,
          delete a.onExited,
          'function' == typeof n)
        )
          return React__default.createElement(
            TransitionGroupContext.Provider,
            {value: null},
            n(e, a),
          )
        var r = React__default.Children.only(n)
        return React__default.createElement(
          TransitionGroupContext.Provider,
          {value: null},
          React__default.cloneElement(r, a),
        )
      }),
      t
    )
  })(React__default.Component)
function noop() {}
;(Transition.contextType = TransitionGroupContext),
  (Transition.propTypes = {}),
  (Transition.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop,
  }),
  (Transition.UNMOUNTED = 0),
  (Transition.EXITED = 1),
  (Transition.ENTERING = 2),
  (Transition.ENTERED = 3),
  (Transition.EXITING = 4)
var _addClass = function(e, t) {
    return (
      e &&
      t &&
      t.split(' ').forEach(function(t) {
        return addOneClass(e, t)
      })
    )
  },
  removeClass$1 = function(e, t) {
    return (
      e &&
      t &&
      t.split(' ').forEach(function(t) {
        return removeClass(e, t)
      })
    )
  },
  CSSTransition = (function(e) {
    function t() {
      for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r]
      return (
        ((t = e.call.apply(e, [this].concat(a)) || this).appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (t.onEnter = function(e, n) {
          t.removeClasses(e, 'exit'),
            t.addClass(e, n ? 'appear' : 'enter', 'base'),
            t.props.onEnter && t.props.onEnter(e, n)
        }),
        (t.onEntering = function(e, n) {
          var a = n ? 'appear' : 'enter'
          t.addClass(e, a, 'active'), t.props.onEntering && t.props.onEntering(e, n)
        }),
        (t.onEntered = function(e, n) {
          var a = n ? 'appear' : 'enter'
          t.removeClasses(e, a),
            t.addClass(e, a, 'done'),
            t.props.onEntered && t.props.onEntered(e, n)
        }),
        (t.onExit = function(e) {
          t.removeClasses(e, 'appear'),
            t.removeClasses(e, 'enter'),
            t.addClass(e, 'exit', 'base'),
            t.props.onExit && t.props.onExit(e)
        }),
        (t.onExiting = function(e) {
          t.addClass(e, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e)
        }),
        (t.onExited = function(e) {
          t.removeClasses(e, 'exit'),
            t.addClass(e, 'exit', 'done'),
            t.props.onExited && t.props.onExited(e)
        }),
        (t.getClassNames = function(e) {
          var n = t.props.classNames,
            a = 'string' == typeof n,
            r = a ? '' + (a && n ? n + '-' : '') + e : n[e]
          return {
            baseClassName: r,
            activeClassName: a ? r + '-active' : n[e + 'Active'],
            doneClassName: a ? r + '-done' : n[e + 'Done'],
          }
        }),
        t
      )
    }
    _inheritsLoose(t, e)
    var n = t.prototype
    return (
      (n.addClass = function(e, t, n) {
        var a = this.getClassNames(t)[n + 'ClassName']
        'appear' === t && 'done' === n && (a += ' ' + this.getClassNames('enter').doneClassName),
          'active' === n && e && e.scrollTop,
          (this.appliedClasses[t][n] = a),
          _addClass(e, a)
      }),
      (n.removeClasses = function(e, t) {
        var n = this.appliedClasses[t],
          a = n.base,
          r = n.active,
          o = n.done
        ;(this.appliedClasses[t] = {}),
          a && removeClass$1(e, a),
          r && removeClass$1(e, r),
          o && removeClass$1(e, o)
      }),
      (n.render = function() {
        var e = this.props,
          t = (e.classNames, _objectWithoutPropertiesLoose(e, ['classNames']))
        return React__default.createElement(
          Transition,
          _extends$1({}, t, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        )
      }),
      t
    )
  })(React__default.Component)
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function getChildMapping(e, t) {
  var n = Object.create(null)
  return (
    e &&
      React.Children.map(e, function(e) {
        return e
      }).forEach(function(e) {
        n[e.key] = (function(e) {
          return t && React.isValidElement(e) ? t(e) : e
        })(e)
      }),
    n
  )
}
function mergeChildMappings(e, t) {
  function n(n) {
    return n in t ? t[n] : e[n]
  }
  ;(e = e || {}), (t = t || {})
  var a,
    r = Object.create(null),
    o = []
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i)
  var s = {}
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var l = r[c][a]
        s[r[c][a]] = n(l)
      }
    s[c] = n(c)
  }
  for (a = 0; a < o.length; a++) s[o[a]] = n(o[a])
  return s
}
function getProp(e, t, n) {
  return null != n[t] ? n[t] : e.props[t]
}
function getInitialChildMapping(e, t) {
  return getChildMapping(e.children, function(n) {
    return React.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: getProp(n, 'appear', e),
      enter: getProp(n, 'enter', e),
      exit: getProp(n, 'exit', e),
    })
  })
}
function getNextChildMapping(e, t, n) {
  var a = getChildMapping(e.children),
    r = mergeChildMappings(t, a)
  return (
    Object.keys(r).forEach(function(o) {
      var i = r[o]
      if (React.isValidElement(i)) {
        var s = o in t,
          c = o in a,
          l = t[o],
          d = React.isValidElement(l) && !l.props.in
        !c || (s && !d)
          ? c || !s || d
            ? c &&
              s &&
              React.isValidElement(l) &&
              (r[o] = React.cloneElement(i, {
                onExited: n.bind(null, i),
                in: l.props.in,
                exit: getProp(i, 'exit', e),
                enter: getProp(i, 'enter', e),
              }))
            : (r[o] = React.cloneElement(i, {in: !1}))
          : (r[o] = React.cloneElement(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: getProp(i, 'exit', e),
              enter: getProp(i, 'enter', e),
            }))
      }
    }),
    r
  )
}
;(CSSTransition.defaultProps = {classNames: ''}), (CSSTransition.propTypes = {})
var values =
    Object.values ||
    function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    },
  defaultProps = {
    component: 'div',
    childFactory: function(e) {
      return e
    },
  },
  TransitionGroup = (function(e) {
    function t(t, n) {
      var a,
        r = (a = e.call(this, t, n) || this).handleExited.bind(
          _assertThisInitialized(_assertThisInitialized(a)),
        )
      return (a.state = {contextValue: {isMounting: !0}, handleExited: r, firstRender: !0}), a
    }
    _inheritsLoose(t, e)
    var n = t.prototype
    return (
      (n.componentDidMount = function() {
        ;(this.mounted = !0), this.setState({contextValue: {isMounting: !1}})
      }),
      (n.componentWillUnmount = function() {
        this.mounted = !1
      }),
      (t.getDerivedStateFromProps = function(e, t) {
        var n = t.children,
          a = t.handleExited
        return {
          children: t.firstRender ? getInitialChildMapping(e, a) : getNextChildMapping(e, n, a),
          firstRender: !1,
        }
      }),
      (n.handleExited = function(e, t) {
        var n = getChildMapping(this.props.children)
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function(t) {
              var n = _extends$1({}, t.children)
              return delete n[e.key], {children: n}
            }))
      }),
      (n.render = function() {
        var e = this.props,
          t = e.component,
          n = e.childFactory,
          a = _objectWithoutPropertiesLoose(e, ['component', 'childFactory']),
          r = this.state.contextValue,
          o = values(this.state.children).map(n)
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          null === t
            ? React__default.createElement(TransitionGroupContext.Provider, {value: r}, o)
            : React__default.createElement(
                TransitionGroupContext.Provider,
                {value: r},
                React__default.createElement(t, a, o),
              )
        )
      }),
      t
    )
  })(React__default.Component)
;(TransitionGroup.propTypes = {}), (TransitionGroup.defaultProps = defaultProps)
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
    n = e.isActive,
    a = e.date,
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
        isActive: n,
      },
      a,
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
        'data-testid': 'MonthLabel',
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
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
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
        n = e.isSelected,
        a = e.isSelectedStartOrEnd,
        r = e.isWithinHoverRange
      return t || n || a || r
        ? n && !a
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
function getColor(e, t, n, a) {
  var r = a.selectedFirstOrLast,
    o = a.normal,
    i = a.selected,
    s = a.rangeHover
  return t ? r : e ? i : n ? s : o
}
function Day(e) {
  var t = e.day,
    n = e.date,
    a = React.useRef(null),
    r = React.useContext(DatepickerContext),
    o = r.focusedDate,
    i = r.isDateFocused,
    s = r.isDateSelected,
    c = r.isDateHovered,
    l = r.isDateBlocked,
    d = r.isFirstOrLastSelectedDate,
    p = r.onDateSelect,
    u = r.onDateFocus,
    f = r.onDateHover,
    m = r.onDayRender,
    g = He({
      date: n,
      focusedDate: o,
      isDateFocused: i,
      isDateSelected: s,
      isDateHovered: c,
      isDateBlocked: l,
      isFirstOrLastSelectedDate: d,
      onDateFocus: u,
      onDateSelect: p,
      onDateHover: f,
      dayRef: a,
    }),
    h = useThemeProps({
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
    y = React.useMemo(
      function() {
        return getColor(g.isSelected, g.isSelectedStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: h.daySelectedFirstOrLastBorderColor,
          selected: h.daySelectedBorderColor,
          normal: h.dayBorderColor,
          rangeHover: h.dayHoverRangeColor,
        })
      },
      [g.isSelected, g.isSelectedStartOrEnd, h, g.isWithinHoverRange],
    ),
    _ = React.useMemo(
      function() {
        return getColor(g.isSelected, g.isSelectedStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: h.daySelectedFirstOrLastBackground,
          selected: h.daySelectedBackground,
          normal: h.dayBackground,
          rangeHover: h.dayHoverRangeBackground,
        })
      },
      [g.isSelected, g.isSelectedStartOrEnd, h, g.isWithinHoverRange],
    ),
    b = React.useMemo(
      function() {
        return getColor(g.isSelected, g.isSelectedStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: h.daySelectedFirstOrLastColor,
          selected: h.daySelectedColor,
          normal: h.dayColor,
          rangeHover: h.dayHoverRangeColor,
        })
      },
      [g.isSelected, g.isSelectedStartOrEnd, h, g.isWithinHoverRange],
    )
  return React__default.createElement(
    StyledDay,
    __assign({}, g, {
      ref: a,
      dayHeight: h.daySize,
      dayWidth: h.daySize,
      background: _,
      color: b,
      fontFamily: h.fontFamily,
      fontWeight: h.dayFontWeight,
      fontSize: h.dayFontSize,
      daySelectedHoverBackground: h.daySelectedHoverBackground,
      dayHoverBackground: h.dayHoverBackground,
      dayHoverColor: h.dayHoverColor,
      daySelectedHoverColor: h.daySelectedHoverColor,
      borderAccessibilityColor: h.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        y +
        ',\n        0 1px 0 0 ' +
        y +
        ',\n        1px 1px 0 0 ' +
        y +
        ',\n        1px 0 0 0 ' +
        y +
        ' inset,\n        0 1px 0 0 ' +
        y +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + n.toDateString(),
    }),
    'function' == typeof m
      ? m(n)
      : React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          t,
        ),
  )
}
var templateObject_1$7,
  MonthWrapper = styled__default('div')(
    templateObject_1$7 ||
      (templateObject_1$7 = __makeTemplateObject(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Month = function(e) {
    var t = e.year,
      n = e.month,
      a = e.firstDayOfWeek,
      r = ie({
        dayLabelFormat: e.dayLabelFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: n,
        firstDayOfWeek: a,
      }),
      o = r.days,
      i = r.weekdayLabels,
      s = r.monthLabel,
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
        React__default.createElement(MonthLabel, {label: s}),
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
    n = e.width,
    a = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
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
  templateObject_2$3,
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
          templateObject_2$3 ||
            (templateObject_2$3 = __makeTemplateObject(
              ['\n      transform: rotate(-180deg);\n    '],
              ['\n      transform: rotate(-180deg);\n    '],
            )),
        )
      )
    },
  )
function ResetDates(e) {
  var t = e.onResetDates,
    n = e.text,
    a = e.rtl,
    r = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: globalStyles.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: globalStyles.colors.darcula,
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
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
      rtl: a,
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
      n,
    ),
  )
}
var templateObject_1$9,
  templateObject_2$4,
  Svg = styled__default('svg')(
    templateObject_2$4 ||
      (templateObject_2$4 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
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
    n = e.width,
    a = e.color,
    r = e.direction,
    o = void 0 === r ? 'right' : r,
    i = e.className,
    s = void 0 === i ? '' : i,
    c = calculateAngle$1(o)
  return React__default.createElement(
    Svg,
    {
      width: n,
      height: t,
      color: a,
      className: s,
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
    n = e.onClick,
    a = e.vertical,
    r = e.rtl,
    o = e.ariaLabel,
    i = useThemeProps({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: globalStyles.colors.greey,
    })
  function s() {
    return 'next' !== t || a
      ? 'next' === t && a
        ? 'down'
        : 'prev' !== t || a
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
      borderRight: 'up' !== s() || r ? i.navButtonBorder : 'unset',
      borderLeft: 'up' === s() && r ? 'unset' : i.navButtonBorder,
      p: i.navButtonPadding,
      type: 'button',
      'aria-label': o,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    React__default.createElement(CaretIcon$1, {
      width: i.navButtonIconWidth,
      height: i.navButtonIconHeight,
      color: i.navButtonIconColor,
      direction: s(),
    }),
  )
}
function CloseIcon(e) {
  var t = e.height,
    n = e.width,
    a = e.color,
    r = e.className,
    o = void 0 === r ? '' : r
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
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
  templateObject_2$5,
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
    templateObject_2$5 ||
      (templateObject_2$5 = __makeTemplateObject(
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
    n = e.rtl,
    a = e.closeText,
    r = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      closeMargin: n ? '1px 16px 0 0' : '1px 0 0 16px',
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
      a,
    ),
  )
}
var templateObject_1$c,
  templateObject_2$6,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6,
  opacity0To100 = styled.keyframes(
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
          ';\n  animation-duration: 0.15s;\n  \n  .item-enter {\n    opacity: 0;\n  }\n  .item-enter-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n  .item-exit {\n    opacity: 1;\n  }\n  .item-exit-active {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  \n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  \n  .item-enter {\n    opacity: 0;\n  }\n  .item-enter-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n  .item-exit {\n    opacity: 1;\n  }\n  .item-exit-active {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n  }\n',
        ],
      )),
    composeStyledDatepickerStyles,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_2$6 ||
            (templateObject_2$6 = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
    opacity0To100,
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
    n = e.endDate,
    a = e.minBookingDate,
    r = e.maxBookingDate,
    o = e.focusedInput,
    i = e.onDatesChange,
    s = e.dayLabelFormat,
    c = e.weekdayLabelFormat,
    l = e.monthLabelFormat,
    d = e.onDayRender,
    p = e.vertical,
    u = void 0 !== p && p,
    f = e.rtl,
    m = void 0 !== f && f,
    g = e.showResetDates,
    h = void 0 === g || g,
    y = e.showClose,
    _ = void 0 === y || y,
    b = e.showSelectedDates,
    v = void 0 === b || b,
    D = e.exactMinBookingDays,
    x = void 0 !== D && D,
    k = e.isDateBlocked,
    S =
      void 0 === k
        ? function() {
            return !1
          }
        : k,
    C = e.minBookingDays,
    R = void 0 === C ? 1 : C,
    E = e.onClose,
    I = void 0 === E ? function() {} : E,
    O = e.numberOfMonths,
    T = e.firstDayOfWeek,
    w = e.displayFormat,
    M = void 0 === w ? 'MM/DD/YYYY' : w,
    j = e.phrases,
    B = void 0 === j ? datepickerPhrases : j,
    F = Be({
      startDate: t,
      endDate: n,
      focusedInput: o,
      onDatesChange: i,
      minBookingDate: a,
      maxBookingDate: r,
      minBookingDays: R,
      isDateBlocked: S,
      exactMinBookingDays: x,
      numberOfMonths: O,
      firstDayOfWeek: T,
    }),
    W = F.activeMonths,
    $ = F.isDateSelected,
    L = F.isFirstOrLastSelectedDate,
    P = F.isDateHovered,
    H = F.firstDayOfWeek,
    N = F.onDateSelect,
    A = F.onResetDates,
    z = F.goToPreviousMonths,
    G = F.goToNextMonths,
    Y = F.numberOfMonths,
    V = F.hoveredDate,
    U = F.onDateHover,
    X = F.isDateFocused,
    K = F.focusedDate,
    Q = F.onDateFocus,
    q = F.isDateBlocked,
    Z = React.useRef(null),
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
      datepickerCloseWrapperRight: m ? 'unset' : u ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: m ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: u ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: globalStyles.colors.silverCloud,
      datepickerMonthsWrapperMargin: _ || v ? (v ? '28px 0 0' : '48px 0 0') : 'unset',
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
    Z && Z.current && u && (Z.current.scrollTop = 0)
  }
  function te() {
    G(), ee()
  }
  function ne() {
    z(), ee()
  }
  return React__default.createElement(
    DatepickerContext.Provider,
    {
      value: {
        rtl: m,
        isDateFocused: X,
        isDateSelected: $,
        isDateHovered: P,
        isFirstOrLastSelectedDate: L,
        onDateFocus: Q,
        focusedDate: K,
        onDateSelect: N,
        onDateHover: U,
        onDayRender: d,
        isDateBlocked: q,
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
        rtl: m,
      },
      _ &&
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
          React__default.createElement(Close, {onClick: I, rtl: m, closeText: B.close}),
        ),
      v &&
        React__default.createElement(
          DateWrapper,
          null,
          React__default.createElement(
            Grid,
            {gridTemplateColumns: J.datepickerSelectDateGridTemplateColumns},
            React__default.createElement(SelectDate, {
              title: B.datepickerStartDateLabel,
              date: Se(t, M, B.datepickerStartDatePlaceholder),
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
              title: B.datepickerEndDateLabel,
              date: Se(n, M, B.datepickerEndDatePlaceholder),
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
            TransitionGroup,
            {className: 'todo-list'},
            React__default.createElement(
              MonthGrid,
              {
                'data-testid': 'MonthGrid',
                overflow: J.datepickerMonthsGridOverflow,
                height: J.datepickerMonthsGridHeight,
                gridTemplateColumns: u ? '1fr' : 'repeat(' + Y + ', 1fr)',
                gridGap: J.datepickerMonthsGridGap,
                pr: m ? '1px' : '0',
                ref: Z,
                onMouseLeave: function() {
                  V && U(null)
                },
              },
              W.map(function(e) {
                return React__default.createElement(
                  CSSTransition,
                  {key: e.year + '-' + e.month, timeout: 250, classNames: 'item', in: !0},
                  React__default.createElement(Month, {
                    key: 'month-' + e.year + '-' + e.month,
                    year: e.year,
                    month: e.month,
                    firstDayOfWeek: H,
                    dayLabelFormat: s || ae,
                    weekdayLabelFormat: c || oe,
                    monthLabelFormat: l || ue,
                  }),
                )
              }),
            ),
          ),
        ),
        React__default.createElement(
          Flex,
          {alignItems: 'center'},
          React__default.createElement(
            React__default.Fragment,
            null,
            h &&
              React__default.createElement(
                Flex,
                {flex: '1', m: J.datepickerResetDatesWrapperMargin},
                React__default.createElement(ResetDates, {
                  rtl: m,
                  onResetDates: A,
                  text: B.resetDates,
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
                onClick: m && !u ? te : ne,
                vertical: u,
                rtl: m,
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
                onClick: m && !u ? ne : te,
                vertical: u,
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
var templateObject_1$d,
  templateObject_2$7,
  templateObject_3$4,
  templateObject_4$2,
  templateObject_5$2,
  Wrapper$1 = styled__default(Box)(
    templateObject_2$7 ||
      (templateObject_2$7 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
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
    n = e.endDate,
    a = e.minBookingDate,
    r = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    s = e.numberOfMonths,
    c = e.focusedInput,
    l = e.onDatesChange,
    d = e.exactMinBookingDays,
    p = e.dayLabelFormat,
    u = e.weekdayLabelFormat,
    f = e.monthLabelFormat,
    m = e.onDayRender,
    g = e.showClose,
    h = void 0 === g || g,
    y = e.showSelectedDates,
    _ = void 0 === y || y,
    b = e.showResetDates,
    v = void 0 === b || b,
    D = e.vertical,
    x = void 0 !== D && D,
    k = e.rtl,
    S = void 0 !== k && k,
    C = e.isDateBlocked,
    R =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    E = e.minBookingDays,
    I = void 0 === E ? 1 : E,
    O = e.onClose,
    T = void 0 === O ? function() {} : O,
    w = e.showStartDateCalendarIcon,
    M = void 0 === w || w,
    j = e.showEndDateCalendarIcon,
    B = void 0 === j || j,
    F = e.displayFormat,
    W = void 0 === F ? 'MM/DD/YYYY' : F,
    $ = e.phrases,
    L = void 0 === $ ? dateRangeInputPhrases : $,
    P = e.placement,
    H = void 0 === P ? 'bottom' : P,
    N = React.useRef(null),
    A = useThemeProps(
      __assign(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: x ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: x ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: x ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        getPlacement(H, S),
      ),
    )
  function z(e) {
    null !== c && N && N.current && !N.current.contains(e.target) && i(null)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', z),
        function() {
          window.removeEventListener('click', z)
        }
      )
    }),
    React__default.createElement(
      Wrapper$1,
      {rtl: S, position: 'relative', ref: N},
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
          ariaLabel: L.startDateAriaLabel,
          placeholder: L.startDatePlaceholder,
          value: Se(t, W, ''),
          onClick: function() {
            return i(be)
          },
          showCalendarIcon: M,
          vertical: x,
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
          ariaLabel: L.endDateAriaLabel,
          placeholder: L.endDatePlaceholder,
          value: Se(n, W, ''),
          onClick: function() {
            return i(t ? xe : be)
          },
          showCalendarIcon: B,
          vertical: x,
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
              T(), i(null)
            },
            startDate: t,
            endDate: n,
            minBookingDate: a,
            maxBookingDate: r,
            firstDayOfWeek: o,
            numberOfMonths: s,
            focusedInput: c,
            displayFormat: W,
            onDatesChange: l,
            minBookingDays: I,
            isDateBlocked: R,
            exactMinBookingDays: d,
            showResetDates: v,
            vertical: x,
            showSelectedDates: _,
            showClose: h,
            rtl: S,
            dayLabelFormat: p,
            weekdayLabelFormat: u,
            monthLabelFormat: f,
            onDayRender: m,
            phrases: L,
          }),
      ),
    )
  )
}
var templateObject_1$e,
  templateObject_2$8,
  Wrapper$2 = styled__default(Box)(
    templateObject_2$8 ||
      (templateObject_2$8 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
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
    n = e.minBookingDate,
    a = e.maxBookingDate,
    r = e.firstDayOfWeek,
    o = e.onFocusChange,
    i = e.showDatepicker,
    s = e.onDateChange,
    c = e.dayLabelFormat,
    l = e.weekdayLabelFormat,
    d = e.monthLabelFormat,
    p = e.onDayRender,
    u = e.numberOfMonths,
    f = void 0 === u ? 1 : u,
    m = e.showClose,
    g = void 0 === m || m,
    h = e.showResetDate,
    y = void 0 === h || h,
    _ = e.vertical,
    b = void 0 !== _ && _,
    v = e.rtl,
    D = void 0 !== v && v,
    x = e.isDateBlocked,
    k =
      void 0 === x
        ? function() {
            return !1
          }
        : x,
    S = e.onClose,
    C = void 0 === S ? function() {} : S,
    R = e.showCalendarIcon,
    E = void 0 === R || R,
    I = e.displayFormat,
    O = void 0 === I ? 'MM/DD/YYYY' : I,
    T = e.phrases,
    w = void 0 === T ? dateSingleInputPhrases : T,
    M = e.placement,
    j = void 0 === M ? 'bottom' : M,
    B = React.useRef(null),
    F = useThemeProps(
      __assign(
        {
          dateSingleInputPadding: b ? (D ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        getPlacement$1(j, D),
      ),
    )
  function W(e) {
    i && B && B.current && !B.current.contains(e.target) && o(!1)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', W),
        function() {
          window.removeEventListener('click', W)
        }
      )
    }),
    React__default.createElement(
      Wrapper$2,
      {rtl: D, position: 'relative', ref: B},
      React__default.createElement(Input, {
        id: 'startDate',
        ariaLabel: w.dateAriaLabel,
        placeholder: w.datePlaceholder,
        value: Se(t, O, ''),
        onClick: function() {
          return o(!0)
        },
        showCalendarIcon: E,
        vertical: b,
        isActive: !1,
        padding: F.dateSingleInputPadding,
        rtl: D,
      }),
      React__default.createElement(
        Box,
        {
          position: F.dateSingleDatepickerWrapperPosition,
          bottom: F.dateSingleDatepickerWrapperBottom,
          left: F.dateSingleDatepickerWrapperLeft,
          top: F.dateSingleDatepickerWrapperTop,
          right: F.dateSingleDatepickerWrapperRight,
        },
        i &&
          React__default.createElement(Datepicker, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              C(), o(!1)
            },
            startDate: t,
            endDate: t,
            minBookingDate: n,
            maxBookingDate: a,
            firstDayOfWeek: r,
            numberOfMonths: f,
            focusedInput: i ? be : null,
            displayFormat: O,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                n = e.startDate
              s({showDatepicker: null !== t, date: n})
            },
            isDateBlocked: k,
            showResetDates: y,
            vertical: b,
            showSelectedDates: !1,
            showClose: g,
            rtl: D,
            dayLabelFormat: c,
            weekdayLabelFormat: l,
            monthLabelFormat: d,
            onDayRender: p,
            phrases: w,
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
