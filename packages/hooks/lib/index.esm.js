import {useMemo as e, useState as t, useCallback as n} from 'react'
var r = function(e) {
  var t = new Date(e.getTime()),
    n = t.getTimezoneOffset()
  return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
}
var a = function(e) {
    return e instanceof Date
  },
  o = 36e5,
  u = 6e4,
  i = 2,
  s = /[T ]/,
  c = /:/,
  f = /^(\d{2})$/,
  D = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  d = /^(\d{4})/,
  l = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  g = /^-(\d{2})$/,
  v = /^-?(\d{3})$/,
  m = /^-?(\d{2})-?(\d{2})$/,
  h = /^-?W(\d{2})$/,
  y = /^-?W(\d{2})-?(\d{1})$/,
  M = /^(\d{2}([.,]\d*)?)$/,
  T = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  p = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  k = /([Z+-].*)$/,
  S = /^(Z)$/,
  Y = /^([+-])(\d{2})$/,
  w = /^([+-])(\d{2}):?(\d{2})$/
function F(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var x = function(e, t) {
  if (a(e)) return new Date(e.getTime())
  if ('string' != typeof e) return new Date(e)
  var n = (t || {}).additionalDigits
  n = null == n ? i : Number(n)
  var x = (function(e) {
      var t,
        n = {},
        r = e.split(s)
      if ((c.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
        var a = k.exec(t)
        a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
      }
      return n
    })(e),
    b = (function(e, t) {
      var n,
        r = D[t],
        a = l[t]
      if ((n = d.exec(e) || a.exec(e))) {
        var o = n[1]
        return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
      }
      if ((n = f.exec(e) || r.exec(e))) {
        var u = n[1]
        return {year: 100 * parseInt(u, 10), restDateString: e.slice(u.length)}
      }
      return {year: null}
    })(x.date, n),
    H = b.year,
    B = (function(e, t) {
      if (null === t) return null
      var n, r, a, o
      if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
      if ((n = g.exec(e)))
        return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
      if ((n = v.exec(e))) {
        r = new Date(0)
        var u = parseInt(n[1], 10)
        return r.setUTCFullYear(t, 0, u), r
      }
      if ((n = m.exec(e))) {
        ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
        var i = parseInt(n[2], 10)
        return r.setUTCFullYear(t, a, i), r
      }
      if ((n = h.exec(e))) return (o = parseInt(n[1], 10) - 1), F(t, o)
      if ((n = y.exec(e))) {
        o = parseInt(n[1], 10) - 1
        var s = parseInt(n[2], 10) - 1
        return F(t, o, s)
      }
      return null
    })(b.restDateString, H)
  if (B) {
    var I,
      O = B.getTime(),
      $ = 0
    if (
      (x.time &&
        ($ = (function(e) {
          var t, n, r
          if ((t = M.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * o
          if ((t = T.exec(e)))
            return (
              (n = parseInt(t[1], 10)),
              (r = parseFloat(t[2].replace(',', '.'))),
              (n % 24) * o + r * u
            )
          if ((t = p.exec(e))) {
            ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
            var a = parseFloat(t[3].replace(',', '.'))
            return (n % 24) * o + r * u + 1e3 * a
          }
          return null
        })(x.time)),
      x.timezone)
    )
      (N = x.timezone),
        (I =
          ((z = S.exec(N))
            ? 0
            : (z = Y.exec(N))
            ? ((C = 60 * parseInt(z[2], 10)), '+' === z[1] ? -C : C)
            : (z = w.exec(N))
            ? ((C = 60 * parseInt(z[2], 10) + parseInt(z[3], 10)), '+' === z[1] ? -C : C)
            : 0) * u)
    else {
      var W = O + $,
        A = new Date(W)
      I = r(A)
      var G = new Date(W)
      G.setDate(A.getDate() + 1)
      var E = r(G) - r(A)
      E > 0 && (I += E)
    }
    return new Date(O + $ + I)
  }
  var N, z, C
  return new Date(e)
}
var b = function(e) {
  var t = x(e),
    n = new Date(0)
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
}
var H = function(e) {
    var t = x(e)
    return t.setHours(0, 0, 0, 0), t
  },
  B = 6e4,
  I = 864e5
var O = function(e, t) {
  var n = H(e),
    r = H(t),
    a = n.getTime() - n.getTimezoneOffset() * B,
    o = r.getTime() - r.getTimezoneOffset() * B
  return Math.round((a - o) / I)
}
var $ = function(e) {
  var t = x(e)
  return O(t, b(t)) + 1
}
var W = function(e, t) {
  var n = (t && Number(t.weekStartsOn)) || 0,
    r = x(e),
    a = r.getDay(),
    o = (a < n ? 7 : 0) + a - n
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
}
var A = function(e) {
  return W(e, {weekStartsOn: 1})
}
var G = function(e) {
  var t = x(e),
    n = t.getFullYear(),
    r = new Date(0)
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
  var a = A(r),
    o = new Date(0)
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
  var u = A(o)
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1
}
var E = function(e) {
    var t = G(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), A(n)
  },
  N = 6048e5
var z = function(e) {
  var t = x(e),
    n = A(t).getTime() - E(t).getTime()
  return Math.round(n / N) + 1
}
var C = function(e) {
  if (a(e)) return !isNaN(e)
  throw new TypeError(toString.call(e) + ' is not an instance of Date')
}
var X = [
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
]
var Z = function(e) {
  var t = []
  for (var n in e) e.hasOwnProperty(n) && t.push(n)
  var r = X.concat(t)
    .sort()
    .reverse()
  return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
}
var U = function() {
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
      u = ['am', 'pm'],
      i = ['a.m.', 'p.m.'],
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
          return e.getHours() / 12 >= 1 ? u[1] : u[0]
        },
        aa: function(e) {
          return e.getHours() / 12 >= 1 ? i[1] : i[0]
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
      {formatters: s, formattingTokensRegExp: Z(s)}
    )
  },
  J = {
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
    format: U(),
  }
var R = {
  M: function(e) {
    return e.getMonth() + 1
  },
  MM: function(e) {
    return P(e.getMonth() + 1, 2)
  },
  Q: function(e) {
    return Math.ceil((e.getMonth() + 1) / 3)
  },
  D: function(e) {
    return e.getDate()
  },
  DD: function(e) {
    return P(e.getDate(), 2)
  },
  DDD: function(e) {
    return $(e)
  },
  DDDD: function(e) {
    return P($(e), 3)
  },
  d: function(e) {
    return e.getDay()
  },
  E: function(e) {
    return e.getDay() || 7
  },
  W: function(e) {
    return z(e)
  },
  WW: function(e) {
    return P(z(e), 2)
  },
  YY: function(e) {
    return P(e.getFullYear(), 4).substr(2)
  },
  YYYY: function(e) {
    return P(e.getFullYear(), 4)
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
    return P(e.getHours(), 2)
  },
  h: function(e) {
    var t = e.getHours()
    return 0 === t ? 12 : t > 12 ? t % 12 : t
  },
  hh: function(e) {
    return P(R.h(e), 2)
  },
  m: function(e) {
    return e.getMinutes()
  },
  mm: function(e) {
    return P(e.getMinutes(), 2)
  },
  s: function(e) {
    return e.getSeconds()
  },
  ss: function(e) {
    return P(e.getSeconds(), 2)
  },
  S: function(e) {
    return Math.floor(e.getMilliseconds() / 100)
  },
  SS: function(e) {
    return P(Math.floor(e.getMilliseconds() / 10), 2)
  },
  SSS: function(e) {
    return P(e.getMilliseconds(), 3)
  },
  Z: function(e) {
    return L(e.getTimezoneOffset(), ':')
  },
  ZZ: function(e) {
    return L(e.getTimezoneOffset())
  },
  X: function(e) {
    return Math.floor(e.getTime() / 1e3)
  },
  x: function(e) {
    return e.getTime()
  },
}
function L(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + P(Math.floor(r / 60), 2) + t + P(a, 2)
}
function P(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var Q = function(e, t, n) {
  var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    a = (n || {}).locale,
    o = J.format.formatters,
    u = J.format.formattingTokensRegExp
  a &&
    a.format &&
    a.format.formatters &&
    ((o = a.format.formatters),
    a.format.formattingTokensRegExp && (u = a.format.formattingTokensRegExp))
  var i = x(e)
  return C(i)
    ? (function(e, t, n) {
        var r,
          a,
          o,
          u = e.match(n),
          i = u.length
        for (r = 0; r < i; r++)
          (a = t[u[r]] || R[u[r]]),
            (u[r] =
              a || ((o = u[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
        return function(e) {
          for (var t = '', n = 0; n < i; n++)
            u[n] instanceof Function ? (t += u[n](e, R)) : (t += u[n])
          return t
        }
      })(r, o, u)(i)
    : 'Invalid Date'
}
var j = function(e, t) {
  var n = x(e),
    r = Number(t)
  return n.setDate(n.getDate() + r), n
}
var q = function(e, t, n) {
  var r = x(e),
    a = void 0 !== n ? n : 1,
    o = x(t).getTime()
  if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
  var u = [],
    i = r
  for (i.setHours(0, 0, 0, 0); i.getTime() <= o; ) u.push(x(i)), i.setDate(i.getDate() + a)
  return u
}
var K = function(e) {
  var t = x(e),
    n = t.getMonth()
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
}
var V = function(e, t) {
  var n = (t && Number(t.weekStartsOn)) || 0,
    r = x(e),
    a = r.getDay(),
    o = 6 + (a < n ? -7 : 0) - (a - n)
  return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
}
var _ = function(e) {
  return x(e).getDay()
}
var ee = function(e) {
  var t = x(e)
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
            return Q(e, 'dd')
          }
        : a,
    u = new Date()
  return q(j(W(u), r), j(V(u), r)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function ne(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    u =
      void 0 === o
        ? function(e) {
            return Q(e, 'DD')
          }
        : o,
    i = new Date(t, n),
    s = ee(i),
    c = _(s),
    f = K(i),
    D = Array.from(Array(c >= a ? c - a : a).keys()).fill(0),
    d = q(s, f).map(function(e) {
      return {date: e, day: u(e)}
    })
  return D.concat(d)
}
function re(t) {
  var n = t.year,
    r = t.month,
    a = t.weekStartsOn,
    o = void 0 === a ? 1 : a,
    u = t.dayFormat,
    i =
      void 0 === u
        ? function(e) {
            return Q(e, 'DD')
          }
        : u,
    s = t.weekDayFormat,
    c =
      void 0 === s
        ? function(e) {
            return Q(e, 'dd')
          }
        : s,
    f = t.monthLabelFormat,
    D =
      void 0 === f
        ? function(e) {
            return Q(e, 'MMMM YYYY')
          }
        : f
  return {
    days: e(
      function() {
        return ne({year: n, month: r, weekStartsOn: o, dayFormat: i})
      },
      [n, r, o, i],
    ),
    weekDays: e(
      function() {
        return te({weekStartsOn: o, weekDayFormat: c})
      },
      [o, c],
    ),
    monthLabel: D(new Date(n, r)),
  }
}
var ae = function(e, t) {
  var n = x(e),
    r = x(t)
  return n.getTime() < r.getTime()
}
var oe = function(e, t) {
  var n = x(e),
    r = x(t)
  return n.getTime() > r.getTime()
}
var ue = function(e, t, n) {
  var r = x(e).getTime(),
    a = x(t).getTime(),
    o = x(n).getTime()
  if (a > o) throw new Error('The start of the range cannot be after the end of the range')
  return r >= a && r <= o
}
var ie = function(e, t) {
  var n = H(e),
    r = H(t)
  return n.getTime() === r.getTime()
}
var se = function(e) {
  return x(e).getFullYear()
}
var ce = function(e) {
  return x(e).getMonth()
}
var fe = function() {
  return H(new Date())
}
var De = function(e) {
  var t = x(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    a = new Date(0)
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
var de = function(e, t) {
  var n = x(e),
    r = Number(t),
    a = n.getMonth() + r,
    o = new Date(0)
  o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
  var u = De(o)
  return n.setMonth(a, Math.min(u, n.getDate())), n
}
function le(e, t, n) {
  return !(!t || !n) && ue(e, t, n)
}
function ge(e, t, n) {
  return !!((t && ie(e, t)) || (n && ie(e, n)))
}
function ve(e) {
  var t = e.date,
    n = e.minBookingDate,
    r = e.maxBookingDate,
    a = e.isDayBlockedFn,
    o = e.startDate,
    u = e.endDate,
    i = e.minBookingDays,
    s = void 0 === i ? 1 : i,
    c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    f = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    (c && ae(t, c)) ||
    (f && oe(t, f)) ||
    (o && !u && s > 1 && ue(t, o, j(o, s - 2))) ||
    (a && a(t))
  )
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
        return (r = de(e[e.length - 1].date, 1)), e.concat([me(r)])
      }, a)),
    a
  )
}
function Me(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = de(r, n)), n > 0 ? e.concat([me(r)]) : [me(r)].concat(e)
  }, [])
}
function Te(e, t, n) {
  return e && 'string' == typeof t ? Q(e, t) : e && 'function' == typeof t ? t(e) : n
}
function pe(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays
  if (t && 1 === a && !n && !r(t)) return !0
  if (t && a > 1 && !n)
    return q(t, j(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n) {
    var o = j(t, a - 1)
    return (
      !ae(n, o) &&
      q(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var ke = 'startDate',
  Se = 'endDate'
function Ye(e) {
  var r = e.startDate,
    a = e.endDate,
    o = e.focusedInput,
    u = e.minBookingDate,
    i = e.maxBookingDate,
    s = e.onDateChange,
    c = e.exactMinBookingDays,
    f = void 0 !== c && c,
    D = e.minBookingDays,
    d = void 0 === D ? 1 : D,
    l = e.numberOfMonths,
    g = void 0 === l ? 2 : l,
    v = e.firstDayOfWeek,
    m = void 0 === v ? 1 : v,
    h = e.isDayBlocked,
    y =
      void 0 === h
        ? function() {
            return !1
          }
        : h,
    M = t(function() {
      return ye(g, r)
    }),
    T = M[0],
    p = M[1],
    k = t(null),
    S = k[0],
    Y = k[1],
    w = n(
      function(e) {
        return le(e, r, a)
      },
      [r, a],
    ),
    F = n(
      function(e) {
        return ge(e, r, a)
      },
      [r, a],
    ),
    x = n(
      function(e) {
        return ve({
          date: e,
          minBookingDate: u,
          maxBookingDate: i,
          startDate: r,
          endDate: a,
          minBookingDays: d,
          isDayBlockedFn: y,
        })
      },
      [u, i, r, a, d, y],
    ),
    b = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            u = e.minBookingDays
          return n && !r && o && ue(t, n, j(n, u - 1)) && ie(n, o) && u > 1
            ? q(n, j(n, u - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || ae(o, n) || !ue(t, n, o)) &&
                q(n, o).reduce(function(e, t) {
                  return e ? !a(t) : e
                }, !0)
        })({
          date: e,
          hoveredDate: S,
          startDate: r,
          endDate: a,
          minBookingDays: d,
          exactMinBookingDays: f,
          isDateBlocked: y,
        })
      },
      [S, r, a, d, f, y],
    )
  return {
    firstDayOfWeek: m,
    activeMonths: T,
    isDateSelected: w,
    isDateHovered: b,
    isFirstOrLastSelectedDate: F,
    isDateBlocked: x,
    numberOfMonths: g,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: ke})
    },
    onDayHover: function(e) {
      !r || a || (u && i && !ue(e, u, i)) || (!ie(e, r) && d > 1 && r && ue(e, r, j(r, d - 2)))
        ? Y(null)
        : Y(e)
    },
    onDaySelect: function(e) {
      ;((o === Se && r && ae(e, r)) || (o === ke && a && oe(e, a))) &&
      pe({minBookingDays: d, isDateBlocked: y, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: Se})
        : o === ke && pe({minBookingDays: d, isDateBlocked: y, endDate: a, startDate: e})
        ? s({endDate: a, startDate: e, focusedInput: Se})
        : o === ke && pe({minBookingDays: d, isDateBlocked: y, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: Se})
        : o === Se &&
          r &&
          !ae(e, r) &&
          pe({minBookingDays: d, isDateBlocked: y, startDate: r, endDate: e}) &&
          s({startDate: r, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      p(Me(T, g, -1))
    },
    goToNextMonths: function() {
      p(Me(T, g, 1))
    },
  }
}
export {
  Se as END_DATE,
  ke as START_DATE,
  he as getCurrentYearMonthAndDate,
  me as getDateMonthAndYear,
  ne as getDays,
  ye as getInitialMonths,
  Te as getInputValue,
  te as getWeekDays,
  ve as isDateBlocked,
  le as isDateSelected,
  ge as isFirstOrLastSelectedDate,
  Ye as useDatepicker,
  re as useMonth,
}
