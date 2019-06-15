import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as a,
  useContext as o,
  Children as i,
  isValidElement as s,
  cloneElement as c,
  useRef as l,
} from 'react'
import d, {ThemeContext as u, css as p, keyframes as f} from 'styled-components'
import g from 'react-dom'
var m = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  h = function(e) {
    return e instanceof Date
  },
  y = 36e5,
  v = /[T ]/,
  D = /:/,
  b = /^(\d{2})$/,
  x = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  k = /^(\d{4})/,
  S = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  C = /^-(\d{2})$/,
  w = /^-?(\d{3})$/,
  E = /^-?(\d{2})-?(\d{2})$/,
  B = /^-?W(\d{2})$/,
  M = /^-?W(\d{2})-?(\d{1})$/,
  F = /^(\d{2}([.,]\d*)?)$/,
  L = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  R = /([Z+-].*)$/,
  T = /^(Z)$/,
  O = /^([+-])(\d{2})$/,
  H = /^([+-])(\d{2}):?(\d{2})$/
function P(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var I,
  z = function(e, t) {
    if (h(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      a,
      o,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(v)
        if ((D.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = R.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      s = (function(e, t) {
        var n,
          r = x[t],
          a = S[t]
        if ((n = k.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = b.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      c = s.year,
      l = (function(e, t) {
        if (null === t) return null
        var n, r, a
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = C.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = w.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = E.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = B.exec(e))
          ? P(t, parseInt(n[1], 10) - 1)
          : (n = M.exec(e))
          ? P(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(s.restDateString, c)
    if (l) {
      var d,
        u = l.getTime(),
        p = 0
      if (
        (i.time &&
          (p = (function(e) {
            var t, n, r
            if ((t = F.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * y
            if ((t = L.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * y + 6e4 * r
              )
            if ((t = W.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * y + 6e4 * r + 1e3 * a
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (d =
            6e4 *
            ((a = T.exec(r))
              ? 0
              : (a = O.exec(r))
              ? ((o = 60 * parseInt(a[2], 10)), '+' === a[1] ? -o : o)
              : (a = H.exec(r))
              ? ((o = 60 * parseInt(a[2], 10) + parseInt(a[3], 10)), '+' === a[1] ? -o : o)
              : 0))
      else {
        var f = u + p,
          g = new Date(f)
        d = m(g)
        var I = new Date(f)
        I.setDate(g.getDate() + 1)
        var z = m(I) - m(g)
        z > 0 && (d += z)
      }
      return new Date(u + p + d)
    }
    return new Date(e)
  },
  A = function(e) {
    var t = z(e)
    return t.setHours(0, 0, 0, 0), t
  },
  N = function(e) {
    var t = z(e)
    return (
      (function(e, t) {
        var n = A(e),
          r = A(t),
          a = n.getTime() - 6e4 * n.getTimezoneOffset(),
          o = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((a - o) / 864e5)
      })(
        t,
        (function(e) {
          var t = z(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  Y = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = z(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  j = function(e) {
    return Y(e, {weekStartsOn: 1})
  },
  G = function(e) {
    var t = z(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = j(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = j(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  $ = function(e) {
    var t = z(e),
      n =
        j(t).getTime() -
        (function(e) {
          var t = G(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), j(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  _ = function(e) {
    if (h(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  V = [
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
    var r = V.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  X = {
    distanceInWords:
      ((I = {
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
      }),
      {
        localize: function(e, t, n) {
          var r
          return (
            (n = n || {}),
            (r =
              'string' == typeof I[e]
                ? I[e]
                : 1 === t
                ? I[e].one
                : I[e].other.replace('{{count}}', t)),
            n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
          )
        },
      }),
    format: (function() {
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
        {formatters: c, formattingTokensRegExp: U(c)}
      )
    })(),
  },
  Z = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return q(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return q(e.getDate(), 2)
    },
    DDD: function(e) {
      return N(e)
    },
    DDDD: function(e) {
      return q(N(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return $(e)
    },
    WW: function(e) {
      return q($(e), 2)
    },
    YY: function(e) {
      return q(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return q(e.getFullYear(), 4)
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
      return q(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return q(Z.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return q(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return q(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return q(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return q(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return J(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return J(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function J(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + q(Math.floor(r / 60), 2) + t + q(a, 2)
}
function q(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var Q = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (n || {}).locale,
      o = X.format.formatters,
      i = X.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var s = z(e)
    return _(s)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            s = i.length
          for (r = 0; r < s; r++)
            (a = t[i[r]] || Z[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < s; n++)
              i[n] instanceof Function ? (t += i[n](e, Z)) : (t += i[n])
            return t
          }
        })(r, o, i)(s)
      : 'Invalid Date'
  },
  K = function(e, t) {
    var n = z(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  ee = function(e, t, n) {
    var r = z(e),
      a = void 0 !== n ? n : 1,
      o = z(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      s = r
    for (s.setHours(0, 0, 0, 0); s.getTime() <= o; ) i.push(z(s)), s.setDate(s.getDate() + a)
    return i
  },
  te = function(e) {
    var t = z(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  ne = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = z(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  re = function(e) {
    return z(e).getDay()
  },
  ae = function(e) {
    var t = z(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var oe = function(e) {
    return Q(e, 'DD')
  },
  ie = function(e) {
    return Q(e, 'dd')
  },
  se = function(e) {
    return Q(e, 'MMMM YYYY')
  }
function ce(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    o = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    s = void 0 === i ? oe : i,
    c = e.weekdayLabelFormat,
    l = void 0 === c ? ie : c,
    d = e.monthLabelFormat,
    u = void 0 === d ? se : d
  return {
    days: a(
      function() {
        return (function(e) {
          var t = e.year,
            n = e.month,
            r = e.firstDayOfWeek,
            a = void 0 === r ? 1 : r,
            o = e.dayLabelFormat,
            i =
              void 0 === o
                ? function(e) {
                    return Q(e, 'DD')
                  }
                : o,
            s = new Date(t, n),
            c = ae(s),
            l = re(c),
            d = te(s),
            u = Array.from(Array(l >= a ? l - a : a).keys()).fill(0),
            p = ee(c, d).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return u.concat(p)
        })({year: t, month: n, firstDayOfWeek: o, dayLabelFormat: s})
      },
      [t, n, o, s],
    ),
    weekdayLabels: a(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.firstDayOfWeek,
            r = void 0 === n ? 1 : n,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function(e) {
                    return Q(e, 'dd')
                  }
                : a,
            i = new Date()
          return ee(K(Y(i), r), K(ne(i), r)).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: l})
      },
      [o, l],
    ),
    monthLabel: u(new Date(t, n)),
  }
}
var le = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getTime() < r.getTime()
  },
  de = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getTime() > r.getTime()
  },
  ue = function(e, t, n) {
    var r = z(e).getTime(),
      a = z(t).getTime(),
      o = z(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  pe = function(e, t) {
    var n = A(e),
      r = A(t)
    return n.getTime() === r.getTime()
  },
  fe = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  ge = function(e) {
    return z(e).getFullYear()
  },
  me = function(e) {
    return z(e).getMonth()
  },
  he = function() {
    return A(new Date())
  },
  ye = function(e, t) {
    var n = z(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = z(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        a = new Date(0)
      return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
    })(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  }
function ve(e) {
  var t = ae(e)
  return {year: ge(t), month: me(t), date: t}
}
function De(e, t) {
  var n = ve(t || he()),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = ye(e[e.length - 1].date, 1)), e.concat([ve(r)])
      }, a)),
    a
  )
}
function be(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = ye(r, n)), n > 0 ? e.concat([ve(r)]) : [ve(r)].concat(e)
  }, [])
}
function xe(e, t, n) {
  return e && 'string' == typeof t ? Q(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ke(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    c = !i || !le(t, K(i, -1)),
    l = !s || !de(K(t, a - 1), s)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && c && l) || (t && a > 0 && o && !i && !s))
    return ee(t, K(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var d = K(t, a - 1)
    return (
      !le(n, d) &&
      ee(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var Se = 'startDate',
  Ce = 'endDate'
function we(e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.focusedInput,
    s = e.minBookingDate,
    c = e.maxBookingDate,
    l = e.onDatesChange,
    d = e.exactMinBookingDays,
    u = void 0 !== d && d,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    g = e.numberOfMonths,
    m = void 0 === g ? 2 : g,
    h = e.firstDayOfWeek,
    y = void 0 === h ? 1 : h,
    v = e.isDateBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    b = n(function() {
      return De(m, a)
    }),
    x = b[0],
    k = b[1],
    S = n(null),
    C = S[0],
    w = S[1],
    E = n(a),
    B = E[0],
    M = E[1],
    F = r(
      function(e) {
        M(e), (!B || (B && !fe(e, B))) && k(De(m, e))
      },
      [M, k, m, B],
    ),
    L = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && ue(e, t, n)
        })(e, a, o)
      },
      [a, o],
    ),
    W = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && pe(e, t)) || (n && pe(e, n)))
        })(e, a, o)
      },
      [a, o],
    ),
    R = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            a = e.isDateBlockedFn,
            o = e.startDate,
            i = e.endDate,
            s = e.minBookingDays,
            c = void 0 === s ? 1 : s,
            l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            d = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (l && le(t, l)) ||
            (d && de(t, d)) ||
            (o && !i && c > 1 && ue(t, o, K(o, c - 2))) ||
            (a && a(t))
          )
        })({
          date: e,
          minBookingDate: s,
          maxBookingDate: c,
          startDate: a,
          endDate: o,
          minBookingDays: f,
          isDateBlockedFn: D,
        })
      },
      [s, c, a, o, f, D],
    ),
    T = r(
      function(e) {
        return !!B && pe(e, B)
      },
      [B],
    ),
    O = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && ue(t, o, K(o, i - 1))
            ? ee(o, K(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && ue(t, n, K(n, i - 1)) && pe(n, o) && i > 1
            ? ee(n, K(n, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || le(o, n) || !ue(t, n, o)) &&
              ee(n, o).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: C,
          startDate: a,
          endDate: o,
          minBookingDays: f,
          exactMinBookingDays: u,
          isDateBlocked: D,
        })
      },
      [C, a, o, f, u, D],
    )
  function H(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      B ||
      (F(new Date()), k(De(m, new Date())))
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', H),
        function() {
          window.removeEventListener('keydown', H)
        }
      )
    }),
    {
      firstDayOfWeek: y,
      activeMonths: x,
      isDateSelected: L,
      isDateHovered: O,
      isFirstOrLastSelectedDate: W,
      isDateBlocked: R,
      numberOfMonths: m,
      isDateFocused: T,
      focusedDate: B,
      hoveredDate: C,
      onResetDates: function() {
        l({startDate: null, endDate: null, focusedInput: Se})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !R(e) || (a && pe(e, a)),
              n = !s || !le(e, K(s, -1)),
              r = !c || !de(e, c),
              i = K(e, f - 1),
              l = !s || !le(i, s),
              d = !c || !de(i, c),
              p = u && f > 1 && n && r && l && d,
              g = a && !o && !u && n && r,
              m = !(f > 1 && a) || ue(e, a, K(a, f - 2)),
              h = a && pe(e, a) && m
            t && (p || g || h) ? w(e) : null !== C && w(null)
          }
        } else w(null)
      },
      onDateSelect: function(e) {
        ;(i === Ce || i === Se) &&
        f > 0 &&
        u &&
        ke({
          minBookingDays: f,
          exactMinBookingDays: u,
          minBookingDate: s,
          maxBookingDate: c,
          isDateBlocked: D,
          startDate: e,
          endDate: null,
        })
          ? l({startDate: e, endDate: K(e, f - 1), focusedInput: null})
          : ((i === Ce && a && le(e, a)) || (i === Se && o && de(e, o))) &&
            !u &&
            ke({minBookingDays: f, isDateBlocked: D, startDate: e, endDate: null})
          ? l({endDate: null, startDate: e, focusedInput: Ce})
          : i === Se && !u && ke({minBookingDays: f, isDateBlocked: D, endDate: o, startDate: e})
          ? l({endDate: o, startDate: e, focusedInput: Ce})
          : i === Se && !u && ke({minBookingDays: f, isDateBlocked: D, endDate: null, startDate: e})
          ? l({endDate: null, startDate: e, focusedInput: Ce})
          : i === Ce &&
            a &&
            !le(e, a) &&
            !u &&
            ke({minBookingDays: f, isDateBlocked: D, startDate: a, endDate: e}) &&
            l({startDate: a, endDate: e, focusedInput: null}),
          (!B || (B && !fe(e, B))) && k(De(m, e))
      },
      onDateFocus: F,
      goToPreviousMonths: function() {
        k(be(x, m, -1)), M(null)
      },
      goToNextMonths: function() {
        k(be(x, m, 1)), M(null)
      },
    }
  )
}
var Ee = function() {
  return (Ee =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function Be(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var Me = Object.getOwnPropertySymbols,
  Fe = Object.prototype.hasOwnProperty,
  Le = Object.prototype.propertyIsEnumerable
var We = (function() {
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
  })()
    ? Object.assign
    : function(e, t) {
        for (
          var n,
            r,
            a = (function(e) {
              if (null == e)
                throw new TypeError('Object.assign cannot be called with null or undefined')
              return Object(e)
            })(e),
            o = 1;
          o < arguments.length;
          o++
        ) {
          for (var i in (n = Object(arguments[o]))) Fe.call(n, i) && (a[i] = n[i])
          if (Me) {
            r = Me(n)
            for (var s = 0; s < r.length; s++) Le.call(n, r[s]) && (a[r[s]] = n[r[s]])
          }
        }
        return a
      },
  Re = function(e, t) {
    var n = We({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && We(n, (((a = {})[r] = We(e[r], t[r])), a))
    }
    return n
  },
  Te = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  Oe = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  He = function(e, t) {
    return Pe(t, e, e)
  },
  Pe = function(e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Ie = function(e) {
    var t = {},
      n = function(n) {
        var r = {}
        for (var a in n)
          if (e[a]) {
            var o = e[a],
              i = n[a],
              s = Pe(n.theme, o.scale, o.defaults)
            if ('object' != typeof i) We(r, o(i, s))
            else {
              if (
                ((t.breakpoints = t.breakpoints || Pe(n.theme, 'breakpoints', Te.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(Oe))),
                  (r = Re(r, ze(t.media, o, s, i)))
                continue
              }
              null !== i && (r = Re(r, Ae(t.breakpoints, o, s, i)))
            }
          }
        return r
      }
    return (n.config = e), (n.propNames = Object.keys(e)), (n.cache = t), n
  },
  ze = function(e, t, n, r) {
    var a = {}
    return (
      r.slice(0, e.length).forEach(function(r, o) {
        var i,
          s = e[o],
          c = t(r, n)
        void 0 !== c && We(a, s ? (((i = {})[s] = We({}, a[s], c)), i) : c)
      }),
      a
    )
  },
  Ae = function(e, t, n, r) {
    var a = {}
    for (var o in r) {
      var i = e[o],
        s = t(r[o], n)
      if (i) {
        var c,
          l = Oe(i)
        We(a, (((c = {})[l] = We({}, a[l], s)), c))
      } else We(a, s)
    }
    return a
  },
  Ne = function(e) {
    var t = e.properties,
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? He : a,
      i = e.defaultScale
    t = t || [n]
    var s = function(e, n) {
      var r = {},
        a = o(e, n)
      if (null !== a)
        return (
          t.forEach(function(e) {
            r[e] = a
          }),
          r
        )
    }
    return (s.scale = r), (s.defaults = i), s
  },
  Ye = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(n) {
        var r = e[n]
        t[n] = Ne(!0 !== r ? r : {property: n, scale: n})
      }),
      Ie(t)
    )
  },
  je = function() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return (
      n.forEach(function(t) {
        t && t.config && We(e, t.config)
      }),
      Ie(e)
    )
  }
function Ge() {
  return (Ge =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var $e = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  _e = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Ve = function(e, t) {
    if (!_e(e)) return Pe(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Pe(t, r, r)
    return _e(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
  },
  Ue = {}
;(Ue.margin = {
  margin: {property: 'margin', scale: 'space', transform: Ve, defaultScale: $e.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: Ve, defaultScale: $e.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: Ve, defaultScale: $e.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: Ve, defaultScale: $e.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: Ve, defaultScale: $e.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: Ve,
    defaultScale: $e.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: Ve,
    defaultScale: $e.space,
  },
}),
  (Ue.margin.m = Ue.margin.margin),
  (Ue.margin.mt = Ue.margin.marginTop),
  (Ue.margin.mr = Ue.margin.marginRight),
  (Ue.margin.mb = Ue.margin.marginBottom),
  (Ue.margin.ml = Ue.margin.marginLeft),
  (Ue.margin.mx = Ue.margin.marginX),
  (Ue.margin.my = Ue.margin.marginY),
  (Ue.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: $e.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: $e.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: $e.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: $e.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: $e.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: $e.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: $e.space},
  }),
  (Ue.padding.p = Ue.padding.padding),
  (Ue.padding.pt = Ue.padding.paddingTop),
  (Ue.padding.pr = Ue.padding.paddingRight),
  (Ue.padding.pb = Ue.padding.paddingBottom),
  (Ue.padding.pl = Ue.padding.paddingLeft),
  (Ue.padding.px = Ue.padding.paddingX),
  (Ue.padding.py = Ue.padding.paddingY)
Ye(Ue.margin), Ye(Ue.padding)
var Xe = Ye(Ge({}, Ue.margin, Ue.padding)),
  Ze = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Ze.bg = Ze.backgroundColor
var Je = Ye(Ze),
  qe = Ye({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return Pe(
          t,
          e,
          !(function(e) {
            return 'number' == typeof e && !isNaN(e)
          })(e) || e > 1
            ? e
            : 100 * e + '%',
        )
      },
    },
    height: {property: 'height', scale: 'sizes'},
    minWidth: {property: 'minWidth', scale: 'sizes'},
    minHeight: {property: 'minHeight', scale: 'sizes'},
    maxWidth: {property: 'maxWidth', scale: 'sizes'},
    maxHeight: {property: 'maxHeight', scale: 'sizes'},
    size: {properties: ['width', 'height'], scale: 'sizes'},
    overflow: !0,
    display: !0,
    verticalAlign: !0,
  }),
  Qe = Ye({
    fontFamily: {property: 'fontFamily', scale: 'fonts'},
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
      defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    },
    fontWeight: {property: 'fontWeight', scale: 'fontWeights'},
    lineHeight: {property: 'lineHeight', scale: 'lineHeights'},
    letterSpacing: {property: 'letterSpacing', scale: 'letterSpacings'},
    textAlign: !0,
    fontStyle: !0,
  }),
  Ke = Ye({
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
  }),
  et = Ye({
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
  }),
  tt = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(tt.bgImage = tt.backgroundImage),
  (tt.bgSize = tt.backgroundSize),
  (tt.bgPosition = tt.backgroundPosition),
  (tt.bgRepeat = tt.backgroundRepeat)
var nt,
  rt,
  at,
  ot = Ye(tt),
  it = Ye({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: !0,
    right: !0,
    bottom: !0,
    left: !0,
  }),
  st = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  ct = Ye({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: st.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: st.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: st.space},
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridAutoRows: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  }),
  lt = Ye({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  }),
  dt = function(e) {
    var t,
      n = e.scale,
      r = e.prop,
      a = void 0 === r ? 'variant' : r,
      o = e.key,
      i = function(e, t) {
        return Pe(t, e, null)
      }
    i.scale = n || o
    var s = (((t = {})[a] = i), t)
    return Ie(s)
  },
  ut =
    (dt({key: 'buttons'}),
    dt({key: 'textStyles', prop: 'textStyle'}),
    dt({key: 'colorStyles', prop: 'colors'}),
    function(e) {
      var t = e.prop,
        n = e.cssProperty,
        r = e.alias,
        a = e.key,
        o = e.transformValue,
        i = e.scale,
        s = e.properties,
        c = {}
      return (
        (c[t] = Ne({properties: s, property: n || t, scale: a, defaultScale: i, transform: o})),
        r && (c[r] = c[t]),
        Ie(c)
      )
    }),
  pt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  ft = Ee({}, pt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  gt = Ee({}, pt, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  mt = ut({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  ht = je(ct, ct, ct, ct, ct, ct, ct, ct, ct, Ke, Ke, Xe),
  yt = d('div')(
    nt ||
      (nt = Be(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    ht,
    mt,
  ),
  vt = je(Xe, Ke, Ke, Ke, Ke, Ke, ct, qe, qe),
  Dt = d('div')(
    rt || (rt = Be(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    vt,
  ),
  bt = je(ct, qe, Xe, qe, it, it, it, it, it, it),
  xt = d('div')(
    at ||
      (at = Be(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    bt,
  )
function kt(t) {
  var n = t.height,
    r = t.width,
    a = t.color,
    o = t.className,
    i = void 0 === o ? '' : o
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: a,
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
function St(e) {
  void 0 === e && (e = {})
  var t = o(u)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var a
            return Ee({}, n, (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var Ct,
  wt,
  Et,
  Bt = {
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
  Mt = ut({prop: 'placeholderColor', cssProperty: 'color'}),
  Ft = ut({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  Lt = je(it, et, ot, qe, et, Xe),
  Wt = d('label')(Ct || (Ct = Be(['\n  ', '\n'], ['\n  ', '\n'])), Lt),
  Rt = je(it, it, it, it, qe, qe),
  Tt = d('div')(
    wt ||
      (wt = Be(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    Rt,
  ),
  Ot = je(ot, Xe, Qe, Qe, Je, Qe, Xe, et, qe, qe, lt),
  Ht = d('input')(
    Et ||
      (Et = Be(
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
    Ot,
    Ft,
    Mt,
    Ft,
    Mt,
    Ft,
    Mt,
  )
function Pt(t) {
  var n = t.placeholder,
    r = t.id,
    a = t.vertical,
    o = t.isActive,
    i = t.ariaLabel,
    s = t.onClick,
    c = t.value,
    l = t.showCalendarIcon,
    d = t.padding,
    u = t.rtl,
    p = t.disableAccessibility,
    f = St({
      fontFamily: Bt.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: Bt.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: d,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: Bt.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: u ? 'unset' : a ? '8px' : '16px',
      inputCalendarWrapperRight: u ? (a ? '8px' : '16px') : 'unset',
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
  return e.createElement(
    Wt,
    {
      htmlFor: r,
      display: f.inputLabelDisplay,
      position: f.inputLabelPosition,
      border: f.inputLabelBorder,
      background: f.inputLabelBackground,
      borderRadius: f.inputLabelBorderRadius,
      m: f.inputLabelMargin,
    },
    l &&
      e.createElement(
        Tt,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(kt, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(Ht, {
      readOnly: !0,
      tabIndex: p ? -1 : 0,
      border: f.inputBorder,
      p: f.inputPadding,
      width: f.inputWidth,
      minHeight: f.inputMinHeight,
      background: f.inputBackground,
      fontFamily: f.fontFamily,
      color: f.inputColor,
      fontSize: f.inputFontSize,
      fontWeight: f.inputFontWeight,
      placeholderColor: f.inputPlaceholderColor,
      placeholderFontWeight: f.inputPlaceholderFontWeight,
      boxShadow: o ? f.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: n,
      'aria-label': i,
      value: c,
      autoComplete: 'off',
      onFocus: s,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function It(t) {
  var n = t.height,
    r = t.width,
    a = t.iconColor,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    s = t.className,
    c = void 0 === s ? '' : s,
    l = (function(e) {
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
      height: n,
      color: a,
      className: c,
      transform: 'rotate(' + l + ' 0 0)',
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
function zt() {
  return (zt =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function At(e, t) {
  if (null == e) return {}
  var n,
    r,
    a = {},
    o = Object.keys(e)
  for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
  return a
}
function Nt(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t)
}
function Yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function jt(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var Gt = jt(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    a = n ? Symbol.for('react.portal') : 60106,
    o = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    l = n ? Symbol.for('react.context') : 60110,
    d = n ? Symbol.for('react.async_mode') : 60111,
    u = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    g = n ? Symbol.for('react.memo') : 60115,
    m = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case d:
            case u:
            case o:
            case s:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case l:
                case p:
                case c:
                  return e
                default:
                  return t
              }
          }
        case m:
        case g:
        case a:
          return t
      }
    }
  }
  function y(e) {
    return h(e) === u
  }
  ;(t.typeOf = h),
    (t.AsyncMode = d),
    (t.ConcurrentMode = u),
    (t.ContextConsumer = l),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = o),
    (t.Lazy = m),
    (t.Memo = g),
    (t.Portal = a),
    (t.Profiler = s),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === o ||
        e === u ||
        e === s ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === m ||
            e.$$typeof === g ||
            e.$$typeof === c ||
            e.$$typeof === l ||
            e.$$typeof === p))
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
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return h(e) === p
    }),
    (t.isFragment = function(e) {
      return h(e) === o
    }),
    (t.isLazy = function(e) {
      return h(e) === m
    }),
    (t.isMemo = function(e) {
      return h(e) === g
    }),
    (t.isPortal = function(e) {
      return h(e) === a
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
Yt(Gt)
Gt.typeOf,
  Gt.AsyncMode,
  Gt.ConcurrentMode,
  Gt.ContextConsumer,
  Gt.ContextProvider,
  Gt.Element,
  Gt.ForwardRef,
  Gt.Fragment,
  Gt.Lazy,
  Gt.Memo,
  Gt.Portal,
  Gt.Profiler,
  Gt.StrictMode,
  Gt.Suspense,
  Gt.isValidElementType,
  Gt.isAsyncMode,
  Gt.isConcurrentMode,
  Gt.isContextConsumer,
  Gt.isContextProvider,
  Gt.isElement,
  Gt.isForwardRef,
  Gt.isFragment,
  Gt.isLazy,
  Gt.isMemo,
  Gt.isPortal,
  Gt.isProfiler,
  Gt.isStrictMode,
  Gt.isSuspense
var $t = jt(function(e, t) {})
Yt($t)
$t.typeOf,
  $t.AsyncMode,
  $t.ConcurrentMode,
  $t.ContextConsumer,
  $t.ContextProvider,
  $t.Element,
  $t.ForwardRef,
  $t.Fragment,
  $t.Lazy,
  $t.Memo,
  $t.Portal,
  $t.Profiler,
  $t.StrictMode,
  $t.Suspense,
  $t.isValidElementType,
  $t.isAsyncMode,
  $t.isConcurrentMode,
  $t.isContextConsumer,
  $t.isContextProvider,
  $t.isElement,
  $t.isForwardRef,
  $t.isFragment,
  $t.isLazy,
  $t.isMemo,
  $t.isPortal,
  $t.isProfiler,
  $t.isStrictMode,
  $t.isSuspense,
  jt(function(e) {
    e.exports = Gt
  })
var _t = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function Vt() {}
function Ut() {}
Ut.resetWarningCache = Vt
jt(function(e) {
  e.exports = (function() {
    function e(e, t, n, r, a, o) {
      if (o !== _t) {
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
      checkPropTypes: Ut,
      resetWarningCache: Vt,
    }
    return (n.PropTypes = n), n
  })()
})
var Xt = jt(function(e) {
  e.exports = function(e) {
    return e && e.__esModule ? e : {default: e}
  }
})
Yt(Xt)
var Zt = jt(function(e, t) {
  ;(t.__esModule = !0),
    (t.default = function(e, t) {
      return e.classList
        ? !!t && e.classList.contains(t)
        : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')
    }),
    (e.exports = t.default)
})
Yt(Zt)
var Jt = Yt(
  jt(function(e, t) {
    ;(t.__esModule = !0),
      (t.default = function(e, t) {
        e.classList
          ? e.classList.add(t)
          : (0, n.default)(e, t) ||
            ('string' == typeof e.className
              ? (e.className = e.className + ' ' + t)
              : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
      })
    var n = Xt(Zt)
    e.exports = t.default
  }),
)
function qt(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
var Qt = !1,
  Kt = e.createContext(null),
  en = 'unmounted',
  tn = 'exited',
  nn = 'entering',
  rn = 'entered',
  an = (function(t) {
    function n(e, n) {
      var r
      r = t.call(this, e, n) || this
      var a,
        o = n && !n.isMounting ? e.enter : e.appear
      return (
        (r.appearStatus = null),
        e.in
          ? o
            ? ((a = tn), (r.appearStatus = nn))
            : (a = rn)
          : (a = e.unmountOnExit || e.mountOnEnter ? en : tn),
        (r.state = {status: a}),
        (r.nextCallback = null),
        r
      )
    }
    Nt(n, t),
      (n.getDerivedStateFromProps = function(e, t) {
        return e.in && t.status === en ? {status: tn} : null
      })
    var r = n.prototype
    return (
      (r.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
      }),
      (r.componentDidUpdate = function(e) {
        var t = null
        if (e !== this.props) {
          var n = this.state.status
          this.props.in
            ? n !== nn && n !== rn && (t = nn)
            : (n !== nn && n !== rn) || (t = 'exiting')
        }
        this.updateStatus(!1, t)
      }),
      (r.componentWillUnmount = function() {
        this.cancelNextCallback()
      }),
      (r.getTimeouts = function() {
        var e,
          t,
          n,
          r = this.props.timeout
        return (
          (e = t = n = r),
          null != r &&
            'number' != typeof r &&
            ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
          {exit: e, enter: t, appear: n}
        )
      }),
      (r.updateStatus = function(e, t) {
        if ((void 0 === e && (e = !1), null !== t)) {
          this.cancelNextCallback()
          var n = g.findDOMNode(this)
          t === nn ? this.performEnter(n, e) : this.performExit(n)
        } else this.props.unmountOnExit && this.state.status === tn && this.setState({status: en})
      }),
      (r.performEnter = function(e, t) {
        var n = this,
          r = this.props.enter,
          a = this.context ? this.context.isMounting : t,
          o = this.getTimeouts(),
          i = a ? o.appear : o.enter
        ;(!t && !r) || Qt
          ? this.safeSetState({status: rn}, function() {
              n.props.onEntered(e)
            })
          : (this.props.onEnter(e, a),
            this.safeSetState({status: nn}, function() {
              n.props.onEntering(e, a),
                n.onTransitionEnd(e, i, function() {
                  n.safeSetState({status: rn}, function() {
                    n.props.onEntered(e, a)
                  })
                })
            }))
      }),
      (r.performExit = function(e) {
        var t = this,
          n = this.props.exit,
          r = this.getTimeouts()
        n && !Qt
          ? (this.props.onExit(e),
            this.safeSetState({status: 'exiting'}, function() {
              t.props.onExiting(e),
                t.onTransitionEnd(e, r.exit, function() {
                  t.safeSetState({status: tn}, function() {
                    t.props.onExited(e)
                  })
                })
            }))
          : this.safeSetState({status: tn}, function() {
              t.props.onExited(e)
            })
      }),
      (r.cancelNextCallback = function() {
        null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (r.safeSetState = function(e, t) {
        ;(t = this.setNextCallback(t)), this.setState(e, t)
      }),
      (r.setNextCallback = function(e) {
        var t = this,
          n = !0
        return (
          (this.nextCallback = function(r) {
            n && ((n = !1), (t.nextCallback = null), e(r))
          }),
          (this.nextCallback.cancel = function() {
            n = !1
          }),
          this.nextCallback
        )
      }),
      (r.onTransitionEnd = function(e, t, n) {
        this.setNextCallback(n)
        var r = null == t && !this.props.addEndListener
        e && !r
          ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback),
            null != t && setTimeout(this.nextCallback, t))
          : setTimeout(this.nextCallback, 0)
      }),
      (r.render = function() {
        var t = this.state.status
        if (t === en) return null
        var n = this.props,
          r = n.children,
          a = At(n, ['children'])
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
          'function' == typeof r)
        )
          return e.createElement(Kt.Provider, {value: null}, r(t, a))
        var o = e.Children.only(r)
        return e.createElement(Kt.Provider, {value: null}, e.cloneElement(o, a))
      }),
      n
    )
  })(e.Component)
function on() {}
;(an.contextType = Kt),
  (an.propTypes = {}),
  (an.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: on,
    onEntering: on,
    onEntered: on,
    onExit: on,
    onExiting: on,
    onExited: on,
  }),
  (an.UNMOUNTED = 0),
  (an.EXITED = 1),
  (an.ENTERING = 2),
  (an.ENTERED = 3),
  (an.EXITING = 4)
var sn = function(e, t) {
    return (
      e &&
      t &&
      t.split(' ').forEach(function(t) {
        return (
          (r = t),
          void ((n = e).classList
            ? n.classList.remove(r)
            : 'string' == typeof n.className
            ? (n.className = qt(n.className, r))
            : n.setAttribute('class', qt((n.className && n.className.baseVal) || '', r)))
        )
        var n, r
      })
    )
  },
  cn = (function(t) {
    function n() {
      for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a]
      return (
        ((e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (e.onEnter = function(t, n) {
          e.removeClasses(t, 'exit'),
            e.addClass(t, n ? 'appear' : 'enter', 'base'),
            e.props.onEnter && e.props.onEnter(t, n)
        }),
        (e.onEntering = function(t, n) {
          var r = n ? 'appear' : 'enter'
          e.addClass(t, r, 'active'), e.props.onEntering && e.props.onEntering(t, n)
        }),
        (e.onEntered = function(t, n) {
          var r = n ? 'appear' : 'enter'
          e.removeClasses(t, r),
            e.addClass(t, r, 'done'),
            e.props.onEntered && e.props.onEntered(t, n)
        }),
        (e.onExit = function(t) {
          e.removeClasses(t, 'appear'),
            e.removeClasses(t, 'enter'),
            e.addClass(t, 'exit', 'base'),
            e.props.onExit && e.props.onExit(t)
        }),
        (e.onExiting = function(t) {
          e.addClass(t, 'exit', 'active'), e.props.onExiting && e.props.onExiting(t)
        }),
        (e.onExited = function(t) {
          e.removeClasses(t, 'exit'),
            e.addClass(t, 'exit', 'done'),
            e.props.onExited && e.props.onExited(t)
        }),
        (e.getClassNames = function(t) {
          var n = e.props.classNames,
            r = 'string' == typeof n,
            a = r ? '' + (r && n ? n + '-' : '') + t : n[t]
          return {
            baseClassName: a,
            activeClassName: r ? a + '-active' : n[t + 'Active'],
            doneClassName: r ? a + '-done' : n[t + 'Done'],
          }
        }),
        e
      )
    }
    Nt(n, t)
    var r = n.prototype
    return (
      (r.addClass = function(e, t, n) {
        var r = this.getClassNames(t)[n + 'ClassName']
        'appear' === t && 'done' === n && (r += ' ' + this.getClassNames('enter').doneClassName),
          'active' === n && e && e.scrollTop,
          (this.appliedClasses[t][n] = r),
          (function(e, t) {
            e &&
              t &&
              t.split(' ').forEach(function(t) {
                return Jt(e, t)
              })
          })(e, r)
      }),
      (r.removeClasses = function(e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          a = n.active,
          o = n.done
        ;(this.appliedClasses[t] = {}), r && sn(e, r), a && sn(e, a), o && sn(e, o)
      }),
      (r.render = function() {
        var t = this.props,
          n = (t.classNames, At(t, ['classNames']))
        return e.createElement(
          an,
          zt({}, n, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        )
      }),
      n
    )
  })(e.Component)
function ln(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function dn(e, t) {
  var n = Object.create(null)
  return (
    e &&
      i
        .map(e, function(e) {
          return e
        })
        .forEach(function(e) {
          n[e.key] = (function(e) {
            return t && s(e) ? t(e) : e
          })(e)
        }),
    n
  )
}
function un(e, t, n) {
  return null != n[t] ? n[t] : e.props[t]
}
function pn(e, t, n) {
  var r = dn(e.children),
    a = (function(e, t) {
      function n(n) {
        return n in t ? t[n] : e[n]
      }
      ;(e = e || {}), (t = t || {})
      var r,
        a = Object.create(null),
        o = []
      for (var i in e) i in t ? o.length && ((a[i] = o), (o = [])) : o.push(i)
      var s = {}
      for (var c in t) {
        if (a[c])
          for (r = 0; r < a[c].length; r++) {
            var l = a[c][r]
            s[a[c][r]] = n(l)
          }
        s[c] = n(c)
      }
      for (r = 0; r < o.length; r++) s[o[r]] = n(o[r])
      return s
    })(t, r)
  return (
    Object.keys(a).forEach(function(o) {
      var i = a[o]
      if (s(i)) {
        var l = o in t,
          d = o in r,
          u = t[o],
          p = s(u) && !u.props.in
        !d || (l && !p)
          ? d || !l || p
            ? d &&
              l &&
              s(u) &&
              (a[o] = c(i, {
                onExited: n.bind(null, i),
                in: u.props.in,
                exit: un(i, 'exit', e),
                enter: un(i, 'enter', e),
              }))
            : (a[o] = c(i, {in: !1}))
          : (a[o] = c(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: un(i, 'exit', e),
              enter: un(i, 'enter', e),
            }))
      }
    }),
    a
  )
}
;(cn.defaultProps = {classNames: ''}), (cn.propTypes = {})
var fn =
    Object.values ||
    function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    },
  gn = (function(t) {
    function n(e, n) {
      var r,
        a = (r = t.call(this, e, n) || this).handleExited.bind(ln(ln(r)))
      return (r.state = {contextValue: {isMounting: !0}, handleExited: a, firstRender: !0}), r
    }
    Nt(n, t)
    var r = n.prototype
    return (
      (r.componentDidMount = function() {
        ;(this.mounted = !0), this.setState({contextValue: {isMounting: !1}})
      }),
      (r.componentWillUnmount = function() {
        this.mounted = !1
      }),
      (n.getDerivedStateFromProps = function(e, t) {
        var n,
          r,
          a = t.children,
          o = t.handleExited
        return {
          children: t.firstRender
            ? ((n = e),
              (r = o),
              dn(n.children, function(e) {
                return c(e, {
                  onExited: r.bind(null, e),
                  in: !0,
                  appear: un(e, 'appear', n),
                  enter: un(e, 'enter', n),
                  exit: un(e, 'exit', n),
                })
              }))
            : pn(e, a, o),
          firstRender: !1,
        }
      }),
      (r.handleExited = function(e, t) {
        var n = dn(this.props.children)
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function(t) {
              var n = zt({}, t.children)
              return delete n[e.key], {children: n}
            }))
      }),
      (r.render = function() {
        var t = this.props,
          n = t.component,
          r = t.childFactory,
          a = At(t, ['component', 'childFactory']),
          o = this.state.contextValue,
          i = fn(this.state.children).map(r)
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          null === n
            ? e.createElement(Kt.Provider, {value: o}, i)
            : e.createElement(Kt.Provider, {value: o}, e.createElement(n, a, i))
        )
      }),
      n
    )
  })(e.Component)
;(gn.propTypes = {}),
  (gn.defaultProps = {
    component: 'div',
    childFactory: function(e) {
      return e
    },
  })
var mn,
  hn,
  yn,
  vn = je(Qe, Qe, Qe, Je, Qe, Xe),
  Dn = d('div')(mn || (mn = Be(['\n  ', '\n'], ['\n  ', '\n'])), vn),
  bn = d(Dn)(
    yn ||
      (yn = Be(
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
        p(
          hn ||
            (hn = Be(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function xn(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    o = t.vertical,
    i = St({
      fontFamily: Bt.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: Bt.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: Bt.colors.charcoal,
      selectDateDateFontSize: o ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    xt,
    {p: i.selectDatePadding},
    e.createElement(
      Dn,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      bn,
      {
        as: 'span',
        color: i.selectDateDateColor,
        fontSize: i.selectDateDateFontSize,
        fontWeight: i.selectDateDateFontWeight,
        fontFamily: i.fontFamily,
        p: i.selectDateDatePadding,
        isActive: r,
      },
      a,
    ),
  )
}
var kn,
  Sn,
  Cn,
  wn,
  En,
  Bn = function(t) {
    var n = t.label,
      r = St({
        fontFamily: Bt.fontFamily,
        monthLabelColor: Bt.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Dn,
      {
        fontFamily: r.fontFamily,
        fontSize: r.monthLabelFontSize,
        fontWeight: r.monthLabelFontWeight,
        lineHeight: r.monthLabelLineHeight,
        color: r.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      n,
    )
  },
  Mn = function(t) {
    var n = t.label,
      r = St({
        fontFamily: Bt.fontFamily,
        dayLabelColor: Bt.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Dn,
      {
        fontFamily: r.fontFamily,
        fontSize: r.dayLabelFontSize,
        fontWeight: r.dayLabelFontWeight,
        color: r.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      n,
    )
  },
  Fn = {
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
  Ln = e.createContext(Fn),
  Wn = ut({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Rn = ut({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Tn = ut({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  On = ut({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Hn = ut({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Pn = ut({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  In = je(lt, ot, Je, Qe, Qe, Qe),
  zn = d('button')(
    En ||
      (En = Be(
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
    Wn,
    Rn,
    In,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        p(
          kn ||
            (kn = Be(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabledDate,
        n = e.isSelected,
        r = e.isSelectedStartOrEnd,
        a = e.isWithinHoverRange
      return t || n || r || a
        ? n && !r
          ? p(
              Cn ||
                (Cn = Be(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Pn,
              On,
            )
          : ''
        : p(
            Sn ||
              (Sn = Be(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Hn,
            Tn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return p(
        wn ||
          (wn = Be(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function An(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    s = r.rangeHover
  return t ? a : e ? i : n ? s : o
}
function Nn(n) {
  var i = n.day,
    s = n.date,
    c = l(null),
    d = o(Ln),
    u = d.focusedDate,
    p = d.isDateFocused,
    f = d.isDateSelected,
    g = d.isDateHovered,
    m = d.isDateBlocked,
    h = d.isFirstOrLastSelectedDate,
    y = d.onDateSelect,
    v = d.onDateFocus,
    D = d.onDateHover,
    b = d.onDayRender,
    x = (function(e) {
      var n = e.date,
        a = e.focusedDate,
        o = e.isDateSelected,
        i = e.isDateFocused,
        s = e.isFirstOrLastSelectedDate,
        c = e.isDateHovered,
        l = e.isDateBlocked,
        d = e.onDateSelect,
        u = e.onDateFocus,
        p = e.onDateHover,
        f = e.dayRef,
        g = r(
          function() {
            return d(n)
          },
          [n, d],
        ),
        m = r(
          function() {
            return p(n)
          },
          [n, p],
        )
      t(
        function() {
          f && f.current && i(n) && f.current.focus()
        },
        [f, n, i],
      )
      var h = l(n) && !c(n)
      return {
        tabIndex: null === a || i(n) ? 0 : -1,
        isSelected: o(n),
        isSelectedStartOrEnd: s(n),
        isWithinHoverRange: c(n),
        disabledDate: h,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(K(n, 1))
            : 'ArrowLeft' === e.key
            ? u(K(n, -1))
            : 'ArrowUp' === e.key
            ? u(K(n, -7))
            : 'ArrowDown' === e.key && u(K(n, 7))
        },
        onClick: h ? function() {} : g,
        onMouseEnter: m,
      }
    })({
      date: s,
      focusedDate: u,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: g,
      isDateBlocked: m,
      isFirstOrLastSelectedDate: h,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: D,
      dayRef: c,
    }),
    k = St({
      fontFamily: Bt.fontFamily,
      daySize: Bt.daySize,
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
    S = a(
      function() {
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastBorderColor,
          selected: k.daySelectedBorderColor,
          normal: k.dayBorderColor,
          rangeHover: k.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, k, x.isWithinHoverRange],
    ),
    C = a(
      function() {
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastBackground,
          selected: k.daySelectedBackground,
          normal: k.dayBackground,
          rangeHover: k.dayHoverRangeBackground,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, k, x.isWithinHoverRange],
    ),
    w = a(
      function() {
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: k.daySelectedFirstOrLastColor,
          selected: k.daySelectedColor,
          normal: k.dayColor,
          rangeHover: k.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, k, x.isWithinHoverRange],
    )
  return e.createElement(
    zn,
    Ee({}, x, {
      ref: c,
      dayHeight: k.daySize,
      dayWidth: k.daySize,
      background: C,
      color: w,
      fontFamily: k.fontFamily,
      fontWeight: k.dayFontWeight,
      fontSize: k.dayFontSize,
      daySelectedHoverBackground: k.daySelectedHoverBackground,
      dayHoverBackground: k.dayHoverBackground,
      dayHoverColor: k.dayHoverColor,
      daySelectedHoverColor: k.daySelectedHoverColor,
      borderAccessibilityColor: k.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        S +
        ',\n        0 1px 0 0 ' +
        S +
        ',\n        1px 1px 0 0 ' +
        S +
        ',\n        1px 0 0 0 ' +
        S +
        ' inset,\n        0 1px 0 0 ' +
        S +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + s.toDateString(),
    }),
    'function' == typeof b
      ? b(s)
      : e.createElement(
          Dt,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          i,
        ),
  )
}
var Yn,
  jn = d('div')(
    Yn ||
      (Yn = Be(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Gn = function(t) {
    var n = t.year,
      r = t.month,
      a = t.firstDayOfWeek,
      o = ce({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: n,
        month: r,
        firstDayOfWeek: a,
      }),
      i = o.days,
      s = o.weekdayLabels,
      c = o.monthLabel,
      l = St({daySize: Bt.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      jn,
      null,
      e.createElement(
        Dt,
        {justifyContent: 'center', m: l.monthLabelMargin},
        e.createElement(Bn, {label: c}),
      ),
      e.createElement(
        yt,
        {daySizeGridTemplateColumns: l.daySize},
        s.map(function(t) {
          return e.createElement(
            Dt,
            {key: t, justifyContent: 'center', m: l.monthDayLabelMargin},
            e.createElement(Mn, {label: t}),
          )
        }),
      ),
      e.createElement(
        yt,
        {daySizeGridTemplateColumns: l.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Nn, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var $n,
  _n,
  Vn,
  Un = d('button')(
    $n ||
      ($n = Be(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Xn = d(function(t) {
    var n = t.height,
      r = t.width,
      a = t.color,
      o = t.className,
      i = void 0 === o ? '' : o
    return e.createElement(
      'svg',
      {
        width: r,
        height: n,
        color: a,
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
  })(Vn || (Vn = Be(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(
        _n ||
          (_n = Be(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function Zn(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    o = St({
      fontFamily: Bt.fontFamily,
      resetDatesIconColor: Bt.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: Bt.colors.darcula,
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Un,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(Xn, {
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      Dn,
      {
        m: o.resetDatesTextMargin,
        lineHeight: o.resetDatesTextLineHeight,
        fontFamily: o.fontFamily,
        fontSize: o.resetDatesTextFontSize,
        color: o.resetDatesTextColor,
      },
      r,
    ),
  )
}
var Jn,
  qn,
  Qn = d('svg')(qn || (qn = Be(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return p(
      Jn ||
        (Jn = Be(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Kn(t) {
  var n = t.height,
    r = t.width,
    a = t.color,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    s = t.className,
    c = void 0 === s ? '' : s,
    l = (function(e) {
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
    Qn,
    {
      width: r,
      height: n,
      color: a,
      className: c,
      angle: l,
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
var er,
  tr = je(qe, qe, ot, Xe, et),
  nr = d('button')(
    er ||
      (er = Be(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    tr,
  )
function rr(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    o = t.rtl,
    i = t.ariaLabel,
    s = St({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: Bt.colors.greey,
    })
  function c() {
    return 'next' !== n || a
      ? 'next' === n && a
        ? 'down'
        : 'prev' !== n || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    nr,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== c() || o ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === c() && o ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': i,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(Kn, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: c(),
    }),
  )
}
function ar(t) {
  var n = t.height,
    r = t.width,
    a = t.color,
    o = t.className,
    i = void 0 === o ? '' : o
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: a,
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
var or,
  ir,
  sr = je(Xe, Je, Qe, Qe, Qe),
  cr = d('div')(
    or ||
      (or = Be(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    sr,
  ),
  lr = d('button')(
    ir ||
      (ir = Be(
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
    cr,
    Je,
    Je,
  )
function dr(t) {
  var n = t.onClick,
    r = t.rtl,
    a = t.closeText,
    o = St({
      fontFamily: Bt.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    lr,
    {
      onClick: n,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(ar, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      cr,
      {
        m: o.closeMargin,
        color: o.closeColor,
        fontSize: o.closeFontSize,
        fontFamily: o.fontFamily,
        fontWeight: o.closeFontWeight,
      },
      a,
    ),
  )
}
var ur,
  pr,
  fr,
  gr,
  mr,
  hr,
  yr = f(
    ur ||
      (ur = Be(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  vr = je(ot, Xe, et, it, lt, qe),
  Dr = d('div')(
    fr ||
      (fr = Be(
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
    vr,
    function(e) {
      return (
        e.rtl &&
        p(pr || (pr = Be(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    yr,
  ),
  br = d('div')(
    gr ||
      (gr = Be(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  xr = je(qe, Ke),
  kr = d(xt)(mr || (mr = Be(['\n  ', '\n'], ['\n  ', '\n'])), xr),
  Sr = je(qe, qe),
  Cr = d(yt)(hr || (hr = Be(['\n  ', '\n'], ['\n  ', '\n'])), Sr)
function wr(t) {
  var n = t.startDate,
    r = t.endDate,
    a = t.minBookingDate,
    o = t.maxBookingDate,
    i = t.focusedInput,
    s = t.onDatesChange,
    c = t.dayLabelFormat,
    d = t.weekdayLabelFormat,
    u = t.monthLabelFormat,
    p = t.onDayRender,
    f = t.vertical,
    g = void 0 !== f && f,
    m = t.rtl,
    h = void 0 !== m && m,
    y = t.showResetDates,
    v = void 0 === y || y,
    D = t.showClose,
    b = void 0 === D || D,
    x = t.showSelectedDates,
    k = void 0 === x || x,
    S = t.exactMinBookingDays,
    C = void 0 !== S && S,
    w = t.isDateBlocked,
    E =
      void 0 === w
        ? function() {
            return !1
          }
        : w,
    B = t.minBookingDays,
    M = void 0 === B ? 1 : B,
    F = t.onClose,
    L = void 0 === F ? function() {} : F,
    W = t.numberOfMonths,
    R = t.firstDayOfWeek,
    T = t.displayFormat,
    O = void 0 === T ? 'MM/DD/YYYY' : T,
    H = t.phrases,
    P = void 0 === H ? pt : H,
    I = we({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDatesChange: s,
      minBookingDate: a,
      maxBookingDate: o,
      minBookingDays: M,
      isDateBlocked: E,
      exactMinBookingDays: C,
      numberOfMonths: W,
      firstDayOfWeek: R,
    }),
    z = I.activeMonths,
    A = I.isDateSelected,
    N = I.isFirstOrLastSelectedDate,
    Y = I.isDateHovered,
    j = I.firstDayOfWeek,
    G = I.onDateSelect,
    $ = I.onResetDates,
    _ = I.goToPreviousMonths,
    V = I.goToNextMonths,
    U = I.numberOfMonths,
    X = I.hoveredDate,
    Z = I.onDateHover,
    J = I.isDateFocused,
    q = I.focusedDate,
    Q = I.onDateFocus,
    K = I.isDateBlocked,
    ee = l(null),
    te = St({
      datepickerBackground: '#ffffff',
      datepickerPadding: g ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: g ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: g ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: g ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: g ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: h ? 'unset' : g ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: h ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: g ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: Bt.colors.silverCloud,
      datepickerMonthsWrapperMargin: b || k ? (k ? '28px 0 0' : '48px 0 0') : 'unset',
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
    ee && ee.current && g && (ee.current.scrollTop = 0)
  }
  function re() {
    V(), ne()
  }
  function ae() {
    _(), ne()
  }
  return e.createElement(
    Ln.Provider,
    {
      value: {
        rtl: h,
        isDateFocused: J,
        isDateSelected: A,
        isDateHovered: Y,
        isFirstOrLastSelectedDate: N,
        onDateFocus: Q,
        focusedDate: q,
        onDateSelect: G,
        onDateHover: Z,
        onDayRender: p,
        isDateBlocked: K,
      },
    },
    e.createElement(
      Dr,
      {
        background: te.datepickerBackground,
        p: te.datepickerPadding,
        borderRadius: te.datepickerBorderRadius,
        position: te.datepickerPosition,
        boxShadow: te.datepickerBoxShadow,
        width: te.datepickerWidth,
        rtl: h,
      },
      b &&
        e.createElement(
          kr,
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
          e.createElement(dr, {onClick: L, rtl: h, closeText: P.close}),
        ),
      k &&
        e.createElement(
          br,
          null,
          e.createElement(
            yt,
            {gridTemplateColumns: te.datepickerSelectDateGridTemplateColumns},
            e.createElement(xn, {
              title: P.datepickerStartDateLabel,
              date: xe(n, O, P.datepickerStartDatePlaceholder),
              isActive: i === Se,
              vertical: g,
            }),
            e.createElement(
              Dt,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(It, {
                height: te.datepickerSelectDateArrowIconHeight,
                width: te.datepickerSelectDateArrowIconWidth,
                iconColor: te.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(xn, {
              title: P.datepickerEndDateLabel,
              date: xe(r, O, P.datepickerEndDatePlaceholder),
              isActive: i === Ce,
              vertical: g,
            }),
          ),
        ),
      e.createElement(
        xt,
        {position: 'relative'},
        e.createElement(
          xt,
          {m: te.datepickerMonthsWrapperMargin},
          e.createElement(
            gn,
            {className: 'todo-list'},
            e.createElement(
              Cr,
              {
                'data-testid': 'MonthGrid',
                overflow: te.datepickerMonthsGridOverflow,
                height: te.datepickerMonthsGridHeight,
                gridTemplateColumns: g ? '1fr' : 'repeat(' + U + ', 1fr)',
                gridGap: te.datepickerMonthsGridGap,
                pr: h ? '1px' : '0',
                ref: ee,
                onMouseLeave: function() {
                  X && Z(null)
                },
              },
              z.map(function(t) {
                return e.createElement(
                  cn,
                  {key: t.year + '-' + t.month, timeout: 250, classNames: 'item', in: !0},
                  e.createElement(Gn, {
                    key: 'month-' + t.year + '-' + t.month,
                    year: t.year,
                    month: t.month,
                    firstDayOfWeek: j,
                    dayLabelFormat: c || oe,
                    weekdayLabelFormat: d || ie,
                    monthLabelFormat: u || se,
                  }),
                )
              }),
            ),
          ),
        ),
        e.createElement(
          Dt,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            v &&
              e.createElement(
                Dt,
                {flex: '1', m: te.datepickerResetDatesWrapperMargin},
                e.createElement(Zn, {rtl: h, onResetDates: $, text: P.resetDates}),
              ),
            e.createElement(
              xt,
              {
                position: te.datepickerPreviousMonthButtonPosition,
                top: te.datepickerPreviousMonthButtonTop,
                left: te.datepickerPreviousMonthButtonLeft,
                right: te.datepickerPreviousMonthButtonRight,
                bottom: te.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(rr, {
                type: 'prev',
                onClick: h && !g ? re : ae,
                vertical: g,
                rtl: h,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              xt,
              {
                position: te.datepickerNextMonthButtonPosition,
                top: te.datepickerNextMonthButtonTop,
                left: te.datepickerNextMonthButtonLeft,
                right: te.datepickerNextMonthButtonRight,
                bottom: te.datepickerNextMonthButtonBottom,
              },
              e.createElement(rr, {
                type: 'next',
                onClick: h && !g ? ae : re,
                vertical: g,
                rtl: h,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var Er,
  Br,
  Mr,
  Fr,
  Lr,
  Wr = d(xt)(Br || (Br = Be(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(Er || (Er = Be(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Rr = je(Je, Je),
  Tr = d(It)(Fr || (Fr = Be(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Rr, function(e) {
    return (
      e.rtl &&
      p(
        Mr ||
          (Mr = Be(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Or = je(ot, et, et),
  Hr = d(yt)(Lr || (Lr = Be(['\n  ', '\n'], ['\n  ', '\n'])), Or)
function Pr(n) {
  var r = n.startDate,
    a = n.endDate,
    o = n.minBookingDate,
    i = n.maxBookingDate,
    s = n.firstDayOfWeek,
    c = n.onFocusChange,
    d = n.numberOfMonths,
    u = n.focusedInput,
    p = n.onDatesChange,
    f = n.exactMinBookingDays,
    g = n.dayLabelFormat,
    m = n.weekdayLabelFormat,
    h = n.monthLabelFormat,
    y = n.onDayRender,
    v = n.showClose,
    D = void 0 === v || v,
    b = n.showSelectedDates,
    x = void 0 === b || b,
    k = n.showResetDates,
    S = void 0 === k || k,
    C = n.vertical,
    w = void 0 !== C && C,
    E = n.rtl,
    B = void 0 !== E && E,
    M = n.isDateBlocked,
    F =
      void 0 === M
        ? function() {
            return !1
          }
        : M,
    L = n.minBookingDays,
    W = void 0 === L ? 1 : L,
    R = n.onClose,
    T = void 0 === R ? function() {} : R,
    O = n.showStartDateCalendarIcon,
    H = void 0 === O || O,
    P = n.showEndDateCalendarIcon,
    I = void 0 === P || P,
    z = n.displayFormat,
    A = void 0 === z ? 'MM/DD/YYYY' : z,
    N = n.phrases,
    Y = void 0 === N ? ft : N,
    j = n.placement,
    G = void 0 === j ? 'bottom' : j,
    $ = l(null),
    _ = St(
      Ee(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: w ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: w ? (B ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: w ? (B ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        (function(e, t) {
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
        })(G, B),
      ),
    )
  function V(e) {
    null !== u && $ && $.current && !$.current.contains(e.target) && c(null)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', V),
        function() {
          window.removeEventListener('click', V)
        }
      )
    }),
    e.createElement(
      Wr,
      {rtl: B, position: 'relative', ref: $},
      e.createElement(
        Hr,
        {
          background: _.dateRangeBackground,
          gridTemplateColumns: _.dateRangeGridTemplateColumns,
          border: _.dateRangeBorder,
          borderRadius: _.dateRangeBorderRadius,
        },
        e.createElement(Pt, {
          id: 'startDate',
          ariaLabel: Y.startDateAriaLabel,
          placeholder: Y.startDatePlaceholder,
          value: xe(r, A, ''),
          onClick: function() {
            return c(Se)
          },
          showCalendarIcon: H,
          vertical: w,
          isActive: u === Se,
          padding: _.dateRangeStartDateInputPadding,
          rtl: B,
        }),
        e.createElement(
          Dt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Tr, {
            width: _.dateRangeArrowIconWidth,
            height: _.dateRangeArrowIconHeight,
            color: _.dateRangeArrowIconColor,
            opacity: _.dateRangeArrowIconOpacity,
            rtl: B,
          }),
        ),
        e.createElement(Pt, {
          id: 'endDate',
          ariaLabel: Y.endDateAriaLabel,
          placeholder: Y.endDatePlaceholder,
          value: xe(a, A, ''),
          onClick: function() {
            return c(r ? Ce : Se)
          },
          showCalendarIcon: I,
          vertical: w,
          isActive: u === Ce,
          padding: _.dateRangeEndDateInputPadding,
          rtl: B,
          disableAccessibility: u === Se,
        }),
      ),
      e.createElement(
        xt,
        {
          position: _.dateRangeDatepickerWrapperPosition,
          bottom: _.dateRangeDatepickerWrapperBottom,
          left: _.dateRangeDatepickerWrapperLeft,
          top: _.dateRangeDatepickerWrapperTop,
          right: _.dateRangeDatepickerWrapperRight,
        },
        null !== u &&
          e.createElement(wr, {
            onClose: function() {
              T(), c(null)
            },
            startDate: r,
            endDate: a,
            minBookingDate: o,
            maxBookingDate: i,
            firstDayOfWeek: s,
            numberOfMonths: d,
            focusedInput: u,
            displayFormat: A,
            onDatesChange: p,
            minBookingDays: W,
            isDateBlocked: F,
            exactMinBookingDays: f,
            showResetDates: S,
            vertical: w,
            showSelectedDates: x,
            showClose: D,
            rtl: B,
            dayLabelFormat: g,
            weekdayLabelFormat: m,
            monthLabelFormat: h,
            onDayRender: y,
            phrases: Y,
          }),
      ),
    )
  )
}
var Ir,
  zr,
  Ar = d(xt)(zr || (zr = Be(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(Ir || (Ir = Be(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function Nr(n) {
  var r = n.date,
    a = n.minBookingDate,
    o = n.maxBookingDate,
    i = n.firstDayOfWeek,
    s = n.onFocusChange,
    c = n.showDatepicker,
    d = n.onDateChange,
    u = n.dayLabelFormat,
    p = n.weekdayLabelFormat,
    f = n.monthLabelFormat,
    g = n.onDayRender,
    m = n.numberOfMonths,
    h = void 0 === m ? 1 : m,
    y = n.showClose,
    v = void 0 === y || y,
    D = n.showResetDate,
    b = void 0 === D || D,
    x = n.vertical,
    k = void 0 !== x && x,
    S = n.rtl,
    C = void 0 !== S && S,
    w = n.isDateBlocked,
    E =
      void 0 === w
        ? function() {
            return !1
          }
        : w,
    B = n.onClose,
    M = void 0 === B ? function() {} : B,
    F = n.showCalendarIcon,
    L = void 0 === F || F,
    W = n.displayFormat,
    R = void 0 === W ? 'MM/DD/YYYY' : W,
    T = n.phrases,
    O = void 0 === T ? gt : T,
    H = n.placement,
    P = void 0 === H ? 'bottom' : H,
    I = l(null),
    z = St(
      Ee(
        {
          dateSingleInputPadding: k ? (C ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        (function(e, t) {
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
        })(P, C),
      ),
    )
  function A(e) {
    c && I && I.current && !I.current.contains(e.target) && s(!1)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', A),
        function() {
          window.removeEventListener('click', A)
        }
      )
    }),
    e.createElement(
      Ar,
      {rtl: C, position: 'relative', ref: I},
      e.createElement(Pt, {
        id: 'startDate',
        ariaLabel: O.dateAriaLabel,
        placeholder: O.datePlaceholder,
        value: xe(r, R, ''),
        onClick: function() {
          return s(!0)
        },
        showCalendarIcon: L,
        vertical: k,
        isActive: !1,
        padding: z.dateSingleInputPadding,
        rtl: C,
      }),
      e.createElement(
        xt,
        {
          position: z.dateSingleDatepickerWrapperPosition,
          bottom: z.dateSingleDatepickerWrapperBottom,
          left: z.dateSingleDatepickerWrapperLeft,
          top: z.dateSingleDatepickerWrapperTop,
          right: z.dateSingleDatepickerWrapperRight,
        },
        c &&
          e.createElement(wr, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              M(), s(!1)
            },
            startDate: r,
            endDate: r,
            minBookingDate: a,
            maxBookingDate: o,
            firstDayOfWeek: i,
            numberOfMonths: h,
            focusedInput: c ? Se : null,
            displayFormat: R,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                n = e.startDate
              d({showDatepicker: null !== t, date: n})
            },
            isDateBlocked: E,
            showResetDates: b,
            vertical: k,
            showSelectedDates: !1,
            showClose: v,
            rtl: C,
            dayLabelFormat: u,
            weekdayLabelFormat: p,
            monthLabelFormat: f,
            onDayRender: g,
            phrases: O,
          }),
      ),
    )
  )
}
export {
  Pr as DateRangeInput,
  Nr as DateSingleInput,
  wr as Datepicker,
  Ce as END_DATE,
  Se as START_DATE,
  ft as dateRangeInputPhrases,
  gt as dateSingleInputPhrases,
  pt as datepickerPhrases,
}
