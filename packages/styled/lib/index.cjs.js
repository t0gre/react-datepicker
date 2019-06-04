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
var B = function(e, t) {
    if (o(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? s : Number(n)
    var r,
      _,
      b,
      C = (function(e) {
        var t,
          n = {},
          r = e.split(c)
        if ((f.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = T.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      R = (function(e, t) {
        var n,
          r = d[t],
          a = g[t]
        if ((n = l.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = D.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(C.date, n),
      O = R.year,
      I = (function(e, t) {
        if (null === t) return null
        var n, r, a
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = v.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = m.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = h.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = y.exec(e))
          ? x(t, parseInt(n[1], 10) - 1)
          : (n = M.exec(e))
          ? x(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(R.restDateString, O)
    if (I) {
      var B,
        j = I.getTime(),
        W = 0
      if (
        (C.time &&
          (W = (function(e) {
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
          })(C.time)),
        C.timezone)
      )
        (r = C.timezone),
          (B =
            ((_ = S.exec(r))
              ? 0
              : (_ = F.exec(r))
              ? ((b = 60 * parseInt(_[2], 10)), '+' === _[1] ? -b : b)
              : (_ = Y.exec(r))
              ? ((b = 60 * parseInt(_[2], 10) + parseInt(_[3], 10)), '+' === _[1] ? -b : b)
              : 0) * i)
      else {
        var P = j + W,
          L = new Date(P)
        B = a(L)
        var H = new Date(P)
        H.setDate(L.getDate() + 1)
        var E = a(H) - a(L)
        E > 0 && (B += E)
      }
      return new Date(j + W + B)
    }
    return new Date(e)
  },
  b = function(e) {
    var t = B(e),
      n = new Date(0)
    return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
  },
  H = function(e) {
    var t = B(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = 6e4,
  O = 864e5,
  A = function(e, t) {
    var n = H(e),
      r = H(t),
      a = n.getTime() - n.getTimezoneOffset() * I,
      o = r.getTime() - r.getTimezoneOffset() * I
    return Math.round((a - o) / O)
  },
  $ = function(e) {
    var t = B(e)
    return A(t, b(t)) + 1
  },
  W = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = B(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  E = function(e) {
    return W(e, {weekStartsOn: 1})
  },
  L = function(e) {
    var t = B(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = E(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = E(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  G = function(e) {
    var t = L(e),
      n = new Date(0)
    return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), E(n)
  },
  C = 6048e5,
  N = function(e) {
    var t = B(e),
      n = E(t).getTime() - G(t).getTime()
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
    var r = U.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
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
      r = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      a = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
          return e.getHours() / 12 >= 1 ? l[1] : l[0]
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
      return $(e)
    },
    DDDD: function(e) {
      return Q($(e), 3)
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
      return String(L(e)).substr(2)
    },
    GGGG: function(e) {
      return L(e)
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
      i = Z.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var l = B(e)
    return R(l)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (a = t[i[r]] || J[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, J)) : (t += i[n])
            return t
          }
        })(r, o, i)(l)
      : 'Invalid Date'
  },
  K = function(e, t) {
    var n = B(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  q = function(e, t, n) {
    var r = B(e),
      a = void 0 !== n ? n : 1,
      o = B(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(B(l)), l.setDate(l.getDate() + a)
    return i
  },
  V = function(e) {
    var t = B(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  _ = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = B(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  ee = function(e) {
    return B(e).getDay()
  },
  te = function(e) {
    var t = B(e)
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
    i = new Date()
  return q(K(W(i), r), K(_(i), r)).reduce(function(e, t) {
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
            return j(e, 'DD')
          }
        : o,
    l = new Date(t, n),
    c = te(l),
    s = ee(c),
    d = V(l),
    p = Array.from(Array(s >= a ? s - a : a).keys()).fill(0),
    u = q(c, d).map(function(e) {
      return {date: e, day: i(e)}
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
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    o = e.dayFormat,
    i = void 0 === o ? ae : o,
    l = e.weekdayLabelFormat,
    c = void 0 === l ? oe : l,
    s = e.monthLabelFormat,
    d = void 0 === s ? ue : s
  return {
    days: React.useMemo(
      function() {
        return re({year: t, month: n, weekStartsOn: a, dayFormat: i})
      },
      [t, n, a, i],
    ),
    weekDays: React.useMemo(
      function() {
        return ne({weekStartsOn: a, weekdayLabelFormat: c})
      },
      [a, c],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var se = function(e, t) {
    var n = B(e),
      r = B(t)
    return n.getTime() < r.getTime()
  },
  ce = function(e, t) {
    var n = B(e),
      r = B(t)
    return n.getTime() > r.getTime()
  },
  fe = function(e, t, n) {
    var r = B(e).getTime(),
      a = B(t).getTime(),
      o = B(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  De = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getTime() === r.getTime()
  },
  de = function(e, t) {
    var n = B(e),
      r = B(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  le = function(e) {
    return B(e).getFullYear()
  },
  ge = function(e) {
    return B(e).getMonth()
  },
  ve = function() {
    return H(new Date())
  },
  me = function(e) {
    var t = B(e),
      n = t.getFullYear(),
      r = t.getMonth(),
      a = new Date(0)
    return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
  },
  he = function(e, t) {
    var n = B(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = me(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
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
    i = e.endDate,
    l = e.minBookingDays,
    c = void 0 === l ? 1 : l,
    s = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    d = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    (s && se(t, s)) ||
    (d && ce(t, d)) ||
    (o && !i && c > 1 && fe(t, o, K(o, c - 2))) ||
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
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !se(t, K(i, -1)),
    s = !l || !ce(K(t, a - 1), l)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && c && s) || (t && a > 0 && o && !i && !l))
    return q(t, K(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var d = K(t, a - 1)
    return (
      !se(n, d) &&
      q(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var xe = 'startDate',
  Be = 'endDate'
function be(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.focusedInput,
    a = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDatesChange,
    l = e.exactMinBookingDays,
    c = void 0 !== l && l,
    s = e.minBookingDays,
    d = void 0 === s ? 1 : s,
    p = e.numberOfMonths,
    u = void 0 === p ? 2 : p,
    m = e.firstDayOfWeek,
    f = void 0 === m ? 1 : m,
    g = e.isDateBlocked,
    y =
      void 0 === g
        ? function() {
            return !1
          }
        : g,
    h = React.useState(function() {
      return Te(u, t)
    }),
    _ = h[0],
    b = h[1],
    v = React.useState(null),
    D = v[0],
    k = v[1],
    x = React.useState(t),
    S = x[0],
    C = x[1],
    w = React.useCallback(
      function(e) {
        C(e), (!S || (S && !de(e, S))) && b(Te(u, e))
      },
      [C, b, u, S],
    ),
    R = React.useCallback(
      function(e) {
        return ye(e, t, n)
      },
      [t, n],
    ),
    O = React.useCallback(
      function(e) {
        return Me(e, t, n)
      },
      [t, n],
    ),
    I = React.useCallback(
      function(e) {
        return ke({
          date: e,
          minBookingDate: a,
          maxBookingDate: o,
          startDate: t,
          endDate: n,
          minBookingDays: d,
          isDateBlockedFn: y,
        })
      },
      [a, o, t, n, d, y],
    ),
    B = React.useCallback(
      function(e) {
        return !!S && De(e, S)
      },
      [S],
    ),
    T = React.useCallback(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && fe(t, o, K(o, i - 1))
            ? q(o, K(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && fe(t, n, K(n, i - 1)) && De(n, o) && i > 1
            ? q(n, K(n, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || se(o, n) || !fe(t, n, o)) &&
              q(n, o).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: D,
          startDate: t,
          endDate: n,
          minBookingDays: d,
          exactMinBookingDays: c,
          isDateBlocked: y,
        })
      },
      [D, t, n, d, c, y],
    )
  function F(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      S ||
      (w(new Date()), b(Te(u, new Date())))
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
      activeMonths: _,
      isDateSelected: R,
      isDateHovered: T,
      isFirstOrLastSelectedDate: O,
      isDateBlocked: I,
      numberOfMonths: u,
      isDateFocused: B,
      focusedDate: S,
      onResetDates: function() {
        i({startDate: null, endDate: null, focusedInput: xe})
      },
      onDayHover: function(e) {
        var r = !I(e) || (t && De(e, t)),
          i = !a || !se(e, K(a, -1)),
          l = !o || !ce(e, o),
          s = K(e, d - 1),
          p = !a || !se(s, a),
          u = !o || !ce(s, o),
          m = c && d > 1 && i && l && p && u,
          f = t && !n && !c && i && l,
          g = !(d > 1 && t) || fe(e, t, K(t, d - 2)),
          y = t && De(e, t) && g
        r && (m || f || y) ? k(e) : null !== D && k(null)
      },
      onDaySelect: function(e) {
        ;(r === Be || r === xe) &&
        d > 0 &&
        c &&
        Ye({
          minBookingDays: d,
          exactMinBookingDays: c,
          minBookingDate: a,
          maxBookingDate: o,
          isDateBlocked: y,
          startDate: e,
          endDate: null,
        })
          ? i({startDate: e, endDate: K(e, d - 1), focusedInput: null})
          : ((r === Be && t && se(e, t)) || (r === xe && n && ce(e, n))) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: y, startDate: e, endDate: null})
          ? i({endDate: null, startDate: e, focusedInput: Be})
          : r === xe && !c && Ye({minBookingDays: d, isDateBlocked: y, endDate: n, startDate: e})
          ? i({endDate: n, startDate: e, focusedInput: Be})
          : r === xe && !c && Ye({minBookingDays: d, isDateBlocked: y, endDate: null, startDate: e})
          ? i({endDate: null, startDate: e, focusedInput: Be})
          : r === Be &&
            t &&
            !se(e, t) &&
            !c &&
            Ye({minBookingDays: d, isDateBlocked: y, startDate: t, endDate: e}) &&
            i({startDate: t, endDate: e, focusedInput: null}),
          (!S || (S && !de(e, S))) && b(Te(u, e))
      },
      onDayFocus: w,
      goToPreviousMonths: function() {
        b(Se(_, u, -1)), C(null)
      },
      goToNextMonths: function() {
        b(Se(_, u, 1)), C(null)
      },
    }
  )
}
function He(e) {
  var t = e.date,
    n = e.focusedDate,
    r = e.isDateSelected,
    a = e.isDateFocused,
    o = e.isFirstOrLastSelectedDate,
    i = e.isDateHovered,
    l = e.isDateBlocked,
    c = e.onDaySelect,
    s = e.onDayFocus,
    d = e.onDayHover,
    p = e.dayRef,
    u = React.useCallback(
      function() {
        return c(t)
      },
      [t, c],
    ),
    m = React.useCallback(
      function() {
        return d(t)
      },
      [t, d],
    )
  React.useEffect(
    function() {
      p && p.current && a(t) && p.current.focus()
    },
    [p, t, a],
  )
  var f = l(t) && !i(t)
  return {
    role: 'button',
    tabIndex: null === n || a(t) ? 0 : -1,
    isActive: r(t),
    isStartOrEnd: o(t),
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
    onMouseEnter: m,
  }
}
var __assign = function() {
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
    l = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    d = n ? Symbol.for('react.async_mode') : 60111,
    p = n ? Symbol.for('react.concurrent_mode') : 60111,
    u = n ? Symbol.for('react.forward_ref') : 60112,
    m = n ? Symbol.for('react.suspense') : 60113,
    f = n ? Symbol.for('react.memo') : 60115,
    g = n ? Symbol.for('react.lazy') : 60116
  function y(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case d:
            case p:
            case o:
            case l:
            case i:
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
        case g:
        case f:
        case a:
          return t
      }
    }
  }
  function h(e) {
    return y(e) === p
  }
  ;(t.typeOf = y),
    (t.AsyncMode = d),
    (t.ConcurrentMode = p),
    (t.ContextConsumer = s),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = u),
    (t.Fragment = o),
    (t.Lazy = g),
    (t.Memo = f),
    (t.Portal = a),
    (t.Profiler = l),
    (t.StrictMode = i),
    (t.Suspense = m),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === o ||
        e === p ||
        e === l ||
        e === i ||
        e === m ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === g ||
            e.$$typeof === f ||
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === u))
      )
    }),
    (t.isAsyncMode = function(e) {
      return h(e) || y(e) === d
    }),
    (t.isConcurrentMode = h),
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
      return y(e) === o
    }),
    (t.isLazy = function(e) {
      return y(e) === g
    }),
    (t.isMemo = function(e) {
      return y(e) === f
    }),
    (t.isPortal = function(e) {
      return y(e) === a
    }),
    (t.isProfiler = function(e) {
      return y(e) === l
    }),
    (t.isStrictMode = function(e) {
      return y(e) === i
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
        for (var n, r, a = toObject(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) hasOwnProperty.call(n, i) && (a[i] = n[i])
          if (getOwnPropertySymbols) {
            r = getOwnPropertySymbols(n)
            for (var l = 0; l < r.length; l++) propIsEnumerable.call(n, r[l]) && (a[r[l]] = n[r[l]])
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
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  factoryWithThrowingShims = function() {
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
  compare = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
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
  merge = function e(t, n) {
    var r = {}
    for (var a in t) r[a] = t[a]
    for (var o in n) t[o] && 'object' == typeof t[o] ? (r[o] = e(t[o], n[o])) : (r[o] = n[o])
    return r
  },
  mergeAll = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = merge(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  style = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      a = e.alias,
      o = e.key,
      i = e.transformValue,
      l = void 0 === i ? getValue : i,
      c = e.scale,
      s = void 0 === c ? {} : c,
      d = r || n,
      p = function(e) {
        var t = get(e, n, a, null)
        if (!is(t)) return null
        var r = get(e.theme, o, s),
          i = function(e) {
            var t
            return is(e) ? (((t = {})[d] = l(e, r)), t) : null
          }
        if (!isObject(t)) return i(t)
        var c = get(e.theme, 'breakpoints', defaultBreakpoints),
          p = []
        if (Array.isArray(t)) {
          p.push(i(t[0]))
          for (var u = 1; u < t.slice(0, c.length + 1).length; u++) {
            var m = i(t[u])
            if (m) {
              var f,
                g = createMediaQuery(c[u - 1])
              p.push((((f = {})[g] = m), f))
            }
          }
        } else {
          for (var y in t) {
            var h,
              _ = c[y],
              b = createMediaQuery(_),
              v = i(t[y])
            if (_) p.push((((h = {})[b] = v), h))
            else p.unshift(v)
          }
          p.sort(compare)
        }
        return mergeAll.apply(void 0, p)
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
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return mergeAll.apply(void 0, n)
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
  phrases = Object.freeze({
    datepickerPhrases: datepickerPhrases,
    dateRangeInputPhrases: dateRangeInputPhrases,
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
    daySizeGridTemplateColumns,
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
    a = e.className,
    o = void 0 === a ? '' : a
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
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
        ? Object.keys(e).reduce(function(n, r) {
            var a
            return __assign({}, n, (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
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
          '\n  ',
          '\n  cursor: pointer;\n  \n  svg {\n    display: block;\n  }\n',
        ],
        [
          '\n  ',
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
    right,
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
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    ',
          '\n    ',
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
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  box-sizing: border-box;\n  outline: 0;\n  \n  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    ',
          '\n    ',
          '\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    ',
          '\n    ',
          '\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    ',
          '\n    ',
          '\n  }\n',
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
    boxShadow,
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
    r = e.vertical,
    a = e.isActive,
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
      inputCalendarWrapperLeft: d ? 'unset' : r ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (r ? '8px' : '16px') : 'unset',
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
      boxShadow: a ? u.inputActiveBoxShadow : 'none',
      id: n,
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
    n = e.width,
    r = e.iconColor,
    a = e.direction,
    o = void 0 === a ? 'right' : a,
    i = e.className,
    l = void 0 === i ? '' : i,
    c = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
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
    a = e.vertical,
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: globalStyles.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: globalStyles.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
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
    onDayFocus: function() {},
    onDayHover: function() {},
    onDaySelect: function() {},
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
      var t = e.disabledDate,
        n = e.isStartOrEnd
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
        n = e.isActive,
        r = e.isStartOrEnd,
        a = e.isWithinHoverRange
      return t || n || r || a
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
function getColor(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? a : e ? i : n ? l : o
}
function Day(e) {
  var t = e.day,
    n = e.date,
    r = React.useRef(null),
    a = React.useContext(DatepickerContext),
    o = a.focusedDate,
    i = a.isDateFocused,
    l = a.isDateSelected,
    c = a.isDateHovered,
    s = a.isDateBlocked,
    d = a.isFirstOrLastSelectedDate,
    p = a.onDaySelect,
    u = a.onDayFocus,
    m = a.onDayHover,
    f = a.onDayRender,
    g = He({
      date: n,
      focusedDate: o,
      isDateFocused: i,
      isDateSelected: l,
      isDateHovered: c,
      isDateBlocked: s,
      isFirstOrLastSelectedDate: d,
      onDayFocus: u,
      onDaySelect: p,
      onDayHover: m,
      dayRef: r,
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
        return getColor(g.isActive, g.isStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastBorderColor,
          selected: y.daySelectedBorderColor,
          normal: y.dayBorderColor,
          rangeHover: y.dayHoverRangeColor,
        })
      },
      [g.isActive, g.isStartOrEnd, y, g.isWithinHoverRange],
    ),
    _ = React.useMemo(
      function() {
        return getColor(g.isActive, g.isStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastBackground,
          selected: y.daySelectedBackground,
          normal: y.dayBackground,
          rangeHover: y.dayHoverRangeBackground,
        })
      },
      [g.isActive, g.isStartOrEnd, y, g.isWithinHoverRange],
    ),
    b = React.useMemo(
      function() {
        return getColor(g.isActive, g.isStartOrEnd, g.isWithinHoverRange, {
          selectedFirstOrLast: y.daySelectedFirstOrLastColor,
          selected: y.daySelectedColor,
          normal: y.dayColor,
          rangeHover: y.dayHoverRangeColor,
        })
      },
      [g.isActive, g.isStartOrEnd, y, g.isWithinHoverRange],
    )
  return React__default.createElement(
    StyledDay,
    __assign({}, g, {
      ref: r,
      dayHeight: y.daySize,
      dayWidth: y.daySize,
      background: _,
      color: b,
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
      'aria-label': 'Day-' + n.toDateString(),
    }),
    'function' == typeof f
      ? f(n)
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
      r = e.firstDayOfWeek,
      a = ie({
        dayFormat: e.dayFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: n,
        weekStartsOn: r,
      }),
      o = a.days,
      i = a.weekDays,
      l = a.monthLabel,
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
            ? React__default.createElement(Day, {date: e.date, key: e.day, day: e.day})
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
      color: r,
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
    r = e.rtl,
    a = React.useRef(null),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: globalStyles.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: globalStyles.colors.darcula,
      resetDatesTextMargin: r ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return React__default.createElement(
    StyledReactDates,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: t,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    React__default.createElement(RedoIconStyle, {
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
      rtl: r,
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
    r = e.color,
    a = e.direction,
    o = void 0 === a ? 'right' : a,
    i = e.className,
    l = void 0 === i ? '' : i,
    c = calculateAngle$1(o)
  return React__default.createElement(
    Svg,
    {
      width: n,
      height: t,
      color: r,
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
  StyledNavButton = styled__default('button')(
    templateObject_1$a ||
      (templateObject_1$a = __makeTemplateObject(
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
    borders,
  )
function NavButton(e) {
  var t = e.type,
    n = e.onClick,
    r = e.vertical,
    a = e.rtl,
    o = e.ariaLabel,
    i = React.useRef(null),
    l = useThemeProps({
      navButtonWidth: r ? '48px' : '30px',
      navButtonHeight: r ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: r ? '18px' : '11px',
      navButtonIconWidth: r ? '28px' : '18px',
      navButtonIconColor: globalStyles.colors.greey,
    })
  function c() {
    return 'next' !== t || r
      ? 'next' === t && r
        ? 'down'
        : 'prev' !== t || r
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
      borderRight: 'up' !== c() || a ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === c() && a ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': o,
      onClick: n,
      onMouseUp: function() {
        i && i.current && i.current.blur()
      },
      ref: i,
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
    n = e.width,
    r = e.color,
    a = e.className,
    o = void 0 === a ? '' : a
  return React__default.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: r,
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
  Text$1 = styled__default('div')(
    templateObject_1$b ||
      (templateObject_1$b = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    space,
    color,
    fontSize,
    fontFamily,
    fontWeight,
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
      'Close',
    ),
  )
}
var templateObject_1$c,
  templateObject_2$6,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  StyledDatepicker = styled__default('div')(
    templateObject_2$6 ||
      (templateObject_2$6 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    background,
    space,
    borderRadius,
    position,
    boxShadow,
    width,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_1$c ||
            (templateObject_1$c = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
  ),
  DateWrapper = styled__default('div')(
    templateObject_3$3 ||
      (templateObject_3$3 = __makeTemplateObject(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  CloseWrapper = styled__default(Box)(
    templateObject_4$1 ||
      (templateObject_4$1 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    display,
    justifyContent,
  ),
  MonthGrid = styled__default(Grid)(
    templateObject_5$1 ||
      (templateObject_5$1 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    overflow,
    height,
  )
function Datepicker(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    o = e.focusedInput,
    i = e.onDatesChange,
    l = e.dayFormat,
    c = e.weekdayLabelFormat,
    s = e.monthLabelFormat,
    d = e.onDayRender,
    p = e.vertical,
    u = void 0 !== p && p,
    m = e.rtl,
    f = void 0 !== m && m,
    g = e.showResetDates,
    y = void 0 === g || g,
    h = e.showClose,
    _ = void 0 === h || h,
    b = e.showSelectedDates,
    v = void 0 === b || b,
    D = e.exactMinBookingDays,
    k = void 0 !== D && D,
    x = e.isDateBlocked,
    S =
      void 0 === x
        ? function() {
            return !1
          }
        : x,
    C = e.minBookingDays,
    w = void 0 === C ? 1 : C,
    R = e.onClose,
    O = void 0 === R ? function() {} : R,
    I = e.numberOfMonths,
    B = e.firstDayOfWeek,
    T = e.displayFormat,
    F = void 0 === T ? 'MM/DD/YYYY' : T,
    M = e.phrases,
    j = void 0 === M ? datepickerPhrases : M,
    W = be({
      startDate: t,
      endDate: n,
      focusedInput: o,
      onDatesChange: i,
      minBookingDate: r,
      maxBookingDate: a,
      minBookingDays: w,
      isDateBlocked: S,
      exactMinBookingDays: k,
      numberOfMonths: I,
      firstDayOfWeek: B,
    }),
    P = W.activeMonths,
    L = W.isDateSelected,
    H = W.isFirstOrLastSelectedDate,
    E = W.isDateHovered,
    $ = W.firstDayOfWeek,
    A = W.onDaySelect,
    z = W.onResetDates,
    Y = W.goToPreviousMonths,
    V = W.goToNextMonths,
    G = W.numberOfMonths,
    N = W.onDayHover,
    K = W.isDateFocused,
    Q = W.focusedDate,
    U = W.onDayFocus,
    Z = W.isDateBlocked,
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
      datepickerCloseWrapperRight: f ? 'unset' : u ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: f ? '32px' : 'unset',
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
  function X() {
    q && q.current && u && (q.current.scrollTop = 0)
  }
  function ee() {
    V(), X()
  }
  function te() {
    Y(), X()
  }
  return React__default.createElement(
    DatepickerContext.Provider,
    {
      value: {
        rtl: f,
        isDateFocused: K,
        isDateSelected: L,
        isDateHovered: E,
        isFirstOrLastSelectedDate: H,
        onDayFocus: U,
        focusedDate: Q,
        onDaySelect: A,
        onDayHover: N,
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
        rtl: f,
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
          React__default.createElement(Close, {onClick: O, rtl: f}),
        ),
      v &&
        React__default.createElement(
          DateWrapper,
          null,
          React__default.createElement(
            Grid,
            {gridTemplateColumns: J.datepickerSelectDateGridTemplateColumns},
            React__default.createElement(SelectDate, {
              title: j.datepickerStartDateLabel,
              date: Fe(t, F, j.datepickerStartDatePlaceholder),
              isActive: o === xe,
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
              title: j.datepickerEndDateLabel,
              date: Fe(n, F, j.datepickerEndDatePlaceholder),
              isActive: o === Be,
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
              overflow: J.datepickerMonthsGridOverflow,
              height: J.datepickerMonthsGridHeight,
              gridTemplateColumns: u ? '1fr' : 'repeat(' + G + ', 1fr)',
              gridGap: J.datepickerMonthsGridGap,
              pr: f ? '1px' : '0',
              ref: q,
            },
            P.map(function(e) {
              return React__default.createElement(Month, {
                key: e.year + '-' + e.month,
                year: e.year,
                month: e.month,
                firstDayOfWeek: $,
                dayFormat: l || ae,
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
                  rtl: f,
                  onResetDates: z,
                  text: j.resetDates,
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
                onClick: f && !u ? ee : te,
                vertical: u,
                rtl: f,
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
                onClick: f && !u ? te : ee,
                vertical: u,
                rtl: f,
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
  InputArrowIcon = styled__default(ArrowIcon)(
    templateObject_4$2 ||
      (templateObject_4$2 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n'],
      )),
    opacity,
    color,
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
  InputGrid = styled__default(Grid)(
    templateObject_5$2 ||
      (templateObject_5$2 = __makeTemplateObject(
        ['\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n'],
      )),
    background,
    border,
    borderRadius,
  )
function getPlacement(e) {
  return 'top' === e
    ? {
        dateRangeDatepickerWrapperTop: 'unset',
        dateRangeDatepickerWrapperRight: 'unset',
        dateRangeDatepickerWrapperBottom: '65px',
        dateRangeDatepickerWrapperLeft: '0',
      }
    : {
        dateRangeDatepickerWrapperTop: 'unset',
        dateRangeDatepickerWrapperRight: '65px',
        dateRangeDatepickerWrapperBottom: 'unset',
        dateRangeDatepickerWrapperLeft: '0',
      }
}
function DateRangeInput(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    l = e.numberOfMonths,
    c = e.focusedInput,
    s = e.onDatesChange,
    d = e.exactMinBookingDays,
    p = e.dayFormat,
    u = e.weekdayLabelFormat,
    m = e.monthLabelFormat,
    f = e.onDayRender,
    g = e.showClose,
    y = void 0 === g || g,
    h = e.showSelectedDates,
    _ = void 0 === h || h,
    b = e.showResetDates,
    v = void 0 === b || b,
    D = e.vertical,
    k = void 0 !== D && D,
    x = e.rtl,
    S = void 0 !== x && x,
    C = e.isDateBlocked,
    w =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    R = e.minBookingDays,
    O = void 0 === R ? 1 : R,
    I = e.onClose,
    B = void 0 === I ? function() {} : I,
    T = e.showStartDateCalendarIcon,
    F = void 0 === T || T,
    M = e.showEndDateCalendarIcon,
    j = void 0 === M || M,
    W = e.displayFormat,
    P = void 0 === W ? 'MM/DD/YYYY' : W,
    L = e.phrases,
    H = void 0 === L ? dateRangeInputPhrases : L,
    E = e.placement,
    $ = void 0 === E ? 'bottom' : E,
    A = React.useRef(null),
    z = useThemeProps(
      __assign(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: k ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: k ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: k ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        getPlacement($),
      ),
    )
  function Y(e) {
    null !== c && A && A.current && !A.current.contains(e.target) && i(null)
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
      {rtl: S, position: 'relative', ref: A},
      React__default.createElement(
        InputGrid,
        {
          background: z.dateRangeBackground,
          gridTemplateColumns: z.dateRangeGridTemplateColumns,
          border: z.dateRangeBorder,
          borderRadius: z.dateRangeBorderRadius,
        },
        React__default.createElement(Input, {
          id: 'startDate',
          ariaLabel: H.startDateAriaLabel,
          placeholder: H.startDatePlaceholder,
          value: Fe(t, P, ''),
          onClick: function() {
            return i(xe)
          },
          showCalendarIcon: F,
          vertical: k,
          isActive: c === xe,
          padding: z.dateRangeStartDateInputPadding,
          rtl: S,
        }),
        React__default.createElement(
          Flex,
          {alignItems: 'center', justifyContent: 'center'},
          React__default.createElement(InputArrowIcon, {
            width: z.dateRangeArrowIconWidth,
            height: z.dateRangeArrowIconHeight,
            color: z.dateRangeArrowIconColor,
            opacity: z.dateRangeArrowIconOpacity,
            rtl: S,
          }),
        ),
        React__default.createElement(Input, {
          id: 'endDate',
          ariaLabel: H.endDateAriaLabel,
          placeholder: H.endDatePlaceholder,
          value: Fe(n, P, ''),
          onClick: function() {
            return i(t ? Be : xe)
          },
          showCalendarIcon: j,
          vertical: k,
          isActive: c === Be,
          padding: z.dateRangeEndDateInputPadding,
          rtl: S,
          disableAccessibility: c === xe,
        }),
      ),
      React__default.createElement(
        Box,
        {
          position: z.dateRangeDatepickerWrapperPosition,
          bottom: z.dateRangeDatepickerWrapperBottom,
          left: z.dateRangeDatepickerWrapperLeft,
          top: z.dateRangeDatepickerWrapperTop,
          right: z.dateRangeDatepickerWrapperRight,
        },
        null !== c &&
          React__default.createElement(Datepicker, {
            onClose: function() {
              B(), i(null)
            },
            startDate: t,
            endDate: n,
            minBookingDate: r,
            maxBookingDate: a,
            firstDayOfWeek: o,
            numberOfMonths: l,
            focusedInput: c,
            displayFormat: P,
            onDatesChange: s,
            minBookingDays: O,
            isDateBlocked: w,
            exactMinBookingDays: d,
            showResetDates: v,
            vertical: k,
            showSelectedDates: _,
            showClose: y,
            rtl: S,
            dayFormat: p,
            weekdayLabelFormat: u,
            monthLabelFormat: m,
            onDayRender: f,
          }),
      ),
    )
  )
}
;(exports.DateRangeInput = DateRangeInput),
  (exports.Datepicker = Datepicker),
  (exports.END_DATE = Be),
  (exports.START_DATE = xe),
  (exports.phrases = phrases)
