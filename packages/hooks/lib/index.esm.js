import {useMemo as e, useState as t, useCallback as n, useEffect as r} from 'react'
var a = function(e) {
  var t = new Date(e.getTime()),
    n = t.getTimezoneOffset()
  return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
}
var o = function(e) {
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
  S = /^(Z)$/,
  F = /^([+-])(\d{2})$/,
  Y = /^([+-])(\d{2}):?(\d{2})$/
function x(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var b = function(e, t) {
  if (o(e)) return new Date(e.getTime())
  if ('string' != typeof e) return new Date(e)
  var n = (t || {}).additionalDigits
  n = null == n ? s : Number(n)
  var r = (function(e) {
      var t,
        n = {},
        r = e.split(c)
      if ((f.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
        var a = T.exec(t)
        a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
      }
      return n
    })(e),
    b = (function(e, t) {
      var n,
        r = d[t],
        a = g[t]
      if ((n = l.exec(e) || a.exec(e))) {
        var o = n[1]
        return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
      }
      if ((n = D.exec(e) || r.exec(e))) {
        var u = n[1]
        return {year: 100 * parseInt(u, 10), restDateString: e.slice(u.length)}
      }
      return {year: null}
    })(r.date, n),
    B = b.year,
    H = (function(e, t) {
      if (null === t) return null
      var n, r, a, o
      if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
      if ((n = v.exec(e)))
        return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
      if ((n = m.exec(e))) {
        r = new Date(0)
        var u = parseInt(n[1], 10)
        return r.setUTCFullYear(t, 0, u), r
      }
      if ((n = h.exec(e))) {
        ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
        var i = parseInt(n[2], 10)
        return r.setUTCFullYear(t, a, i), r
      }
      if ((n = y.exec(e))) return (o = parseInt(n[1], 10) - 1), x(t, o)
      if ((n = M.exec(e))) {
        o = parseInt(n[1], 10) - 1
        var s = parseInt(n[2], 10) - 1
        return x(t, o, s)
      }
      return null
    })(b.restDateString, B)
  if (H) {
    var I,
      O = H.getTime(),
      A = 0
    if (
      (r.time &&
        (A = (function(e) {
          var t, n, r
          if ((t = k.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * u
          if ((t = w.exec(e)))
            return (
              (n = parseInt(t[1], 10)),
              (r = parseFloat(t[2].replace(',', '.'))),
              (n % 24) * u + r * i
            )
          if ((t = p.exec(e))) {
            ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
            var a = parseFloat(t[3].replace(',', '.'))
            return (n % 24) * u + r * i + 1e3 * a
          }
          return null
        })(r.time)),
      r.timezone)
    )
      (G = r.timezone),
        (I =
          ((C = S.exec(G))
            ? 0
            : (C = F.exec(G))
            ? ((N = 60 * parseInt(C[2], 10)), '+' === C[1] ? -N : N)
            : (C = Y.exec(G))
            ? ((N = 60 * parseInt(C[2], 10) + parseInt(C[3], 10)), '+' === C[1] ? -N : N)
            : 0) * i)
    else {
      var L = O + A,
        $ = new Date(L)
      I = a($)
      var W = new Date(L)
      W.setDate($.getDate() + 1)
      var E = a(W) - a($)
      E > 0 && (I += E)
    }
    return new Date(O + A + I)
  }
  var G, C, N
  return new Date(e)
}
var B = function(e) {
  var t = b(e),
    n = new Date(0)
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
}
var H = function(e) {
    var t = b(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = 6e4,
  O = 864e5
var A = function(e, t) {
  var n = H(e),
    r = H(t),
    a = n.getTime() - n.getTimezoneOffset() * I,
    o = r.getTime() - r.getTimezoneOffset() * I
  return Math.round((a - o) / O)
}
var L = function(e) {
  var t = b(e)
  return A(t, B(t)) + 1
}
var $ = function(e, t) {
  var n = (t && Number(t.weekStartsOn)) || 0,
    r = b(e),
    a = r.getDay(),
    o = (a < n ? 7 : 0) + a - n
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
}
var W = function(e) {
  return $(e, {weekStartsOn: 1})
}
var E = function(e) {
  var t = b(e),
    n = t.getFullYear(),
    r = new Date(0)
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
  var a = W(r),
    o = new Date(0)
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
  var u = W(o)
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1
}
var G = function(e) {
    var t = E(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), W(n)
  },
  C = 6048e5
var N = function(e) {
  var t = b(e),
    n = W(t).getTime() - G(t).getTime()
  return Math.round(n / C) + 1
}
var R = function(e) {
  if (o(e)) return !isNaN(e)
  throw new TypeError(toString.call(e) + ' is not an instance of Date')
}
var U = [
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
var z = function(e) {
  var t = []
  for (var n in e) e.hasOwnProperty(n) && t.push(n)
  var r = U.concat(t)
    .sort()
    .reverse()
  return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
}
var X = function() {
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
      {formatters: s, formattingTokensRegExp: z(s)}
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
    format: X(),
  }
var J = {
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
    return L(e)
  },
  DDDD: function(e) {
    return Q(L(e), 3)
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
    r = Math.abs(e),
    a = r % 60
  return n + Q(Math.floor(r / 60), 2) + t + Q(a, 2)
}
function Q(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var j = function(e, t, n) {
  var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    a = (n || {}).locale,
    o = Z.format.formatters,
    u = Z.format.formattingTokensRegExp
  a &&
    a.format &&
    a.format.formatters &&
    ((o = a.format.formatters),
    a.format.formattingTokensRegExp && (u = a.format.formattingTokensRegExp))
  var i = b(e)
  return R(i)
    ? (function(e, t, n) {
        var r,
          a,
          o,
          u = e.match(n),
          i = u.length
        for (r = 0; r < i; r++)
          (a = t[u[r]] || J[u[r]]),
            (u[r] =
              a || ((o = u[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
        return function(e) {
          for (var t = '', n = 0; n < i; n++)
            u[n] instanceof Function ? (t += u[n](e, J)) : (t += u[n])
          return t
        }
      })(r, o, u)(i)
    : 'Invalid Date'
}
var K = function(e, t) {
  var n = b(e),
    r = Number(t)
  return n.setDate(n.getDate() + r), n
}
var q = function(e, t, n) {
  var r = b(e),
    a = void 0 !== n ? n : 1,
    o = b(t).getTime()
  if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
  var u = [],
    i = r
  for (i.setHours(0, 0, 0, 0); i.getTime() <= o; ) u.push(b(i)), i.setDate(i.getDate() + a)
  return u
}
var V = function(e) {
  var t = b(e),
    n = t.getMonth()
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
}
var _ = function(e, t) {
  var n = (t && Number(t.weekStartsOn)) || 0,
    r = b(e),
    a = r.getDay(),
    o = 6 + (a < n ? -7 : 0) - (a - n)
  return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
}
var ee = function(e) {
  return b(e).getDay()
}
var te = function(e) {
  var t = b(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function ne(e) {
  var t = void 0 === e ? {} : e,
    n = t.weekStartsOn,
    r = void 0 === n ? 1 : n,
    a = t.weekdayLabelFormat,
    o =
      void 0 === a
        ? function(e) {
            return j(e, 'dd')
          }
        : a,
    u = new Date()
  return q(K($(u), r), K(_(u), r)).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function re(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayLabelFormat,
    u =
      void 0 === o
        ? function(e) {
            return j(e, 'DD')
          }
        : o,
    i = new Date(t, n),
    s = te(i),
    c = ee(s),
    f = V(i),
    D = Array.from(Array(c >= a ? c - a : a).keys()).fill(0),
    d = q(s, f).map(function(e) {
      return {date: e, day: u(e)}
    })
  return D.concat(d)
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
function ie(t) {
  var n = t.year,
    r = t.month,
    a = t.weekStartsOn,
    o = void 0 === a ? 1 : a,
    u = t.dayLabelFormat,
    i = void 0 === u ? ae : u,
    s = t.weekdayLabelFormat,
    c = void 0 === s ? oe : s,
    f = t.monthLabelFormat,
    D = void 0 === f ? ue : f
  return {
    days: e(
      function() {
        return re({year: n, month: r, weekStartsOn: o, dayLabelFormat: i})
      },
      [n, r, o, i],
    ),
    weekDays: e(
      function() {
        return ne({weekStartsOn: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: D(new Date(n, r)),
  }
}
var se = function(e, t) {
  var n = b(e),
    r = b(t)
  return n.getTime() < r.getTime()
}
var ce = function(e, t) {
  var n = b(e),
    r = b(t)
  return n.getTime() > r.getTime()
}
var fe = function(e, t, n) {
  var r = b(e).getTime(),
    a = b(t).getTime(),
    o = b(n).getTime()
  if (a > o) throw new Error('The start of the range cannot be after the end of the range')
  return r >= a && r <= o
}
var De = function(e, t) {
  var n = H(e),
    r = H(t)
  return n.getTime() === r.getTime()
}
var de = function(e, t) {
  var n = b(e),
    r = b(t)
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
}
var le = function(e) {
  return b(e).getFullYear()
}
var ge = function(e) {
  return b(e).getMonth()
}
var ve = function() {
  return H(new Date())
}
var me = function(e) {
  var t = b(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    a = new Date(0)
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
var he = function(e, t) {
  var n = b(e),
    r = Number(t),
    a = n.getMonth() + r,
    o = new Date(0)
  o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
  var u = me(o)
  return n.setMonth(a, Math.min(u, n.getDate())), n
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
    r = e.maxBookingDate,
    a = e.isDateBlockedFn,
    o = e.startDate,
    u = e.endDate,
    i = e.minBookingDays,
    s = void 0 === i ? 1 : i,
    c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    f = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    (c && se(t, c)) ||
    (f && ce(t, f)) ||
    (o && !u && s > 1 && fe(t, o, K(o, s - 2))) ||
    (a && a(t))
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
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = he(e[e.length - 1].date, 1)), e.concat([we(r)])
      }, a)),
    a
  )
}
function Se(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = he(r, n)), n > 0 ? e.concat([we(r)]) : [we(r)].concat(e)
  }, [])
}
function Fe(e, t, n) {
  return e && 'string' == typeof t ? j(e, t) : e && 'function' == typeof t ? t(e) : n
}
function Ye(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    u = e.minBookingDate,
    i = e.maxBookingDate,
    s = !u || !se(t, K(u, -1)),
    c = !i || !ce(K(t, a - 1), i)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && s && c) || (t && a > 0 && o && !u && !i))
    return q(t, K(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var f = K(t, a - 1)
    return (
      !se(n, f) &&
      q(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var xe = 'startDate',
  be = 'endDate'
function Be(e) {
  var a = e.startDate,
    o = e.endDate,
    u = e.focusedInput,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    c = e.onDatesChange,
    f = e.exactMinBookingDays,
    D = void 0 !== f && f,
    d = e.minBookingDays,
    l = void 0 === d ? 1 : d,
    g = e.numberOfMonths,
    v = void 0 === g ? 2 : g,
    m = e.firstDayOfWeek,
    h = void 0 === m ? 1 : m,
    y = e.isDateBlocked,
    M =
      void 0 === y
        ? function() {
            return !1
          }
        : y,
    k = t(function() {
      return Te(v, a)
    }),
    w = k[0],
    p = k[1],
    T = t(null),
    S = T[0],
    F = T[1],
    Y = t(a),
    x = Y[0],
    b = Y[1],
    B = n(
      function(e) {
        b(e), (!x || (x && !de(e, x))) && p(Te(v, e))
      },
      [b, p, v, x],
    ),
    H = n(
      function(e) {
        return ye(e, a, o)
      },
      [a, o],
    ),
    I = n(
      function(e) {
        return Me(e, a, o)
      },
      [a, o],
    ),
    O = n(
      function(e) {
        return ke({
          date: e,
          minBookingDate: i,
          maxBookingDate: s,
          startDate: a,
          endDate: o,
          minBookingDays: l,
          isDateBlockedFn: M,
        })
      },
      [i, s, a, o, l, M],
    ),
    A = n(
      function(e) {
        return !!x && De(e, x)
      },
      [x],
    ),
    L = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            u = e.minBookingDays,
            i = e.exactMinBookingDays
          return o && u > 1 && i && fe(t, o, K(o, u - 1))
            ? q(o, K(o, u - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && fe(t, n, K(n, u - 1)) && De(n, o) && u > 1
            ? q(n, K(n, u - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || se(o, n) || !fe(t, n, o)) &&
              q(n, o).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: S,
          startDate: a,
          endDate: o,
          minBookingDays: l,
          exactMinBookingDays: D,
          isDateBlocked: M,
        })
      },
      [S, a, o, l, D, M],
    )
  function $(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      x ||
      (B(new Date()), p(Te(v, new Date())))
  }
  return (
    r(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', $),
        function() {
          window.removeEventListener('keydown', $)
        }
      )
    }),
    {
      firstDayOfWeek: h,
      activeMonths: w,
      isDateSelected: H,
      isDateHovered: L,
      isFirstOrLastSelectedDate: I,
      isDateBlocked: O,
      numberOfMonths: v,
      isDateFocused: A,
      focusedDate: x,
      onResetDates: function() {
        c({startDate: null, endDate: null, focusedInput: xe})
      },
      onDayHover: function(e) {
        var t = !O(e) || (a && De(e, a)),
          n = !i || !se(e, K(i, -1)),
          r = !s || !ce(e, s),
          u = K(e, l - 1),
          c = !i || !se(u, i),
          f = !s || !ce(u, s),
          d = D && l > 1 && n && r && c && f,
          g = a && !o && !D && n && r,
          v = !(l > 1 && a) || fe(e, a, K(a, l - 2)),
          m = a && De(e, a) && v
        t && (d || g || m) ? F(e) : null !== S && F(null)
      },
      onDaySelect: function(e) {
        ;(u === be || u === xe) &&
        l > 0 &&
        D &&
        Ye({
          minBookingDays: l,
          exactMinBookingDays: D,
          minBookingDate: i,
          maxBookingDate: s,
          isDateBlocked: M,
          startDate: e,
          endDate: null,
        })
          ? c({startDate: e, endDate: K(e, l - 1), focusedInput: null})
          : ((u === be && a && se(e, a)) || (u === xe && o && ce(e, o))) &&
            !D &&
            Ye({minBookingDays: l, isDateBlocked: M, startDate: e, endDate: null})
          ? c({endDate: null, startDate: e, focusedInput: be})
          : u === xe && !D && Ye({minBookingDays: l, isDateBlocked: M, endDate: o, startDate: e})
          ? c({endDate: o, startDate: e, focusedInput: be})
          : u === xe && !D && Ye({minBookingDays: l, isDateBlocked: M, endDate: null, startDate: e})
          ? c({endDate: null, startDate: e, focusedInput: be})
          : u === be &&
            a &&
            !se(e, a) &&
            !D &&
            Ye({minBookingDays: l, isDateBlocked: M, startDate: a, endDate: e}) &&
            c({startDate: a, endDate: e, focusedInput: null}),
          (!x || (x && !de(e, x))) && p(Te(v, e))
      },
      onDayFocus: B,
      goToPreviousMonths: function() {
        p(Se(w, v, -1)), b(null)
      },
      goToNextMonths: function() {
        p(Se(w, v, 1)), b(null)
      },
    }
  )
}
function He(e) {
  var t = e.date,
    a = e.focusedDate,
    o = e.isDateSelected,
    u = e.isDateFocused,
    i = e.isFirstOrLastSelectedDate,
    s = e.isDateHovered,
    c = e.isDateBlocked,
    f = e.onDaySelect,
    D = e.onDayFocus,
    d = e.onDayHover,
    l = e.dayRef,
    g = n(
      function() {
        return f(t)
      },
      [t, f],
    ),
    v = n(
      function() {
        return d(t)
      },
      [t, d],
    )
  r(
    function() {
      l && l.current && u(t) && l.current.focus()
    },
    [l, t, u],
  )
  var m = c(t) && !s(t)
  return {
    role: 'button',
    tabIndex: null === a || u(t) ? 0 : -1,
    isActive: o(t),
    isStartOrEnd: i(t),
    isWithinHoverRange: s(t),
    disabledDate: m,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? D(K(t, 1))
        : 'ArrowLeft' === e.key
        ? D(K(t, -1))
        : 'ArrowUp' === e.key
        ? D(K(t, -7))
        : 'ArrowDown' === e.key && D(K(t, 7))
    },
    onClick: m ? function() {} : g,
    onMouseEnter: v,
  }
}
export {
  be as END_DATE,
  xe as START_DATE,
  ae as dayLabelFormat,
  pe as getCurrentYearMonthAndDate,
  we as getDateMonthAndYear,
  re as getDays,
  Te as getInitialMonths,
  Fe as getInputValue,
  ne as getWeekDays,
  ke as isDateBlocked,
  ye as isDateSelected,
  Me as isFirstOrLastSelectedDate,
  ue as monthLabelFormat,
  Be as useDatepicker,
  He as useDay,
  ie as useMonth,
  oe as weekdayLabelFormat,
}
