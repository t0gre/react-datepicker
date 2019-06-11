import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as o,
  useContext as a,
  Children as i,
  isValidElement as s,
  cloneElement as l,
  useRef as c,
} from 'react'
import u, {ThemeContext as d, css as p, keyframes as f} from 'styled-components'
import m from 'react-dom'
var h = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  g = function(e) {
    return e instanceof Date
  },
  y = 36e5,
  v = /[T ]/,
  D = /:/,
  k = /^(\d{2})$/,
  x = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  b = /^(\d{4})/,
  C = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  S = /^-(\d{2})$/,
  w = /^-?(\d{3})$/,
  E = /^-?(\d{2})-?(\d{2})$/,
  M = /^-?W(\d{2})$/,
  B = /^-?W(\d{2})-?(\d{1})$/,
  F = /^(\d{2}([.,]\d*)?)$/,
  L = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  T = /([Z+-].*)$/,
  R = /^(Z)$/,
  O = /^([+-])(\d{2})$/,
  H = /^([+-])(\d{2}):?(\d{2})$/
function P(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var I,
  z = function(e, t) {
    if (g(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(v)
        if ((D.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = T.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      s = (function(e, t) {
        var n,
          r = x[t],
          o = C[t]
        if ((n = b.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = k.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      l = s.year,
      c = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = S.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = w.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = E.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = M.exec(e))
          ? P(t, parseInt(n[1], 10) - 1)
          : (n = B.exec(e))
          ? P(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(s.restDateString, l)
    if (c) {
      var u,
        d = c.getTime(),
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
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * y + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (u =
            6e4 *
            ((o = R.exec(r))
              ? 0
              : (o = O.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = H.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var f = d + p,
          m = new Date(f)
        u = h(m)
        var I = new Date(f)
        I.setDate(m.getDate() + 1)
        var z = h(I) - h(m)
        z > 0 && (u += z)
      }
      return new Date(d + p + u)
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
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
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
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  j = function(e) {
    return Y(e, {weekStartsOn: 1})
  },
  V = function(e) {
    var t = z(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = j(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = j(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  $ = function(e) {
    var t = z(e),
      n =
        j(t).getTime() -
        (function(e) {
          var t = V(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), j(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  G = function(e) {
    if (g(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  _ = [
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
    var r = _.concat(t)
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
        o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        a = ['AM', 'PM'],
        i = ['am', 'pm'],
        s = ['a.m.', 'p.m.'],
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
            return o[e.getDay()]
          },
          A: function(e) {
            return e.getHours() / 12 >= 1 ? a[1] : a[0]
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
      return String(V(e)).substr(2)
    },
    GGGG: function(e) {
      return V(e)
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
    o = r % 60
  return n + q(Math.floor(r / 60), 2) + t + q(o, 2)
}
function q(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var K = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = X.format.formatters,
      i = X.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var s = z(e)
    return G(s)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            s = i.length
          for (r = 0; r < s; r++)
            (o = t[i[r]] || Z[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < s; n++)
              i[n] instanceof Function ? (t += i[n](e, Z)) : (t += i[n])
            return t
          }
        })(r, a, i)(s)
      : 'Invalid Date'
  },
  Q = function(e, t) {
    var n = z(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  ee = function(e, t, n) {
    var r = z(e),
      o = void 0 !== n ? n : 1,
      a = z(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      s = r
    for (s.setHours(0, 0, 0, 0); s.getTime() <= a; ) i.push(z(s)), s.setDate(s.getDate() + o)
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
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  re = function(e) {
    return z(e).getDay()
  },
  oe = function(e) {
    var t = z(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var ae = function(e) {
    return K(e, 'DD')
  },
  ie = function(e) {
    return K(e, 'dd')
  },
  se = function(e) {
    return K(e, 'MMMM YYYY')
  }
function le(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    s = void 0 === i ? ae : i,
    l = e.weekdayLabelFormat,
    c = void 0 === l ? ie : l,
    u = e.monthLabelFormat,
    d = void 0 === u ? se : u
  return {
    days: o(
      function() {
        return (function(e) {
          var t = e.year,
            n = e.month,
            r = e.firstDayOfWeek,
            o = void 0 === r ? 1 : r,
            a = e.dayLabelFormat,
            i =
              void 0 === a
                ? function(e) {
                    return K(e, 'DD')
                  }
                : a,
            s = new Date(t, n),
            l = oe(s),
            c = re(l),
            u = te(s),
            d = Array.from(Array(c >= o ? c - o : o).keys()).fill(0),
            p = ee(l, u).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, firstDayOfWeek: a, dayLabelFormat: s})
      },
      [t, n, a, s],
    ),
    weekdayLabels: o(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.firstDayOfWeek,
            r = void 0 === n ? 1 : n,
            o = t.weekdayLabelFormat,
            a =
              void 0 === o
                ? function(e) {
                    return K(e, 'dd')
                  }
                : o,
            i = new Date()
          return ee(Q(Y(i), r), Q(ne(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({firstDayOfWeek: a, weekdayLabelFormat: c})
      },
      [a, c],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var ce = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getTime() < r.getTime()
  },
  ue = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getTime() > r.getTime()
  },
  de = function(e, t, n) {
    var r = z(e).getTime(),
      o = z(t).getTime(),
      a = z(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
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
  me = function(e) {
    return z(e).getFullYear()
  },
  he = function(e) {
    return z(e).getMonth()
  },
  ge = function() {
    return A(new Date())
  },
  ye = function(e, t) {
    var n = z(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = z(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function ve(e) {
  var t = oe(e)
  return {year: me(t), month: he(t), date: t}
}
function De(e, t) {
  var n = ve(t || ge()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = ye(e[e.length - 1].date, 1)), e.concat([ve(r)])
      }, o)),
    o
  )
}
function ke(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = ye(r, n)), n > 0 ? e.concat([ve(r)]) : [ve(r)].concat(e)
  }, [])
}
function xe(e, t, n) {
  return e && 'string' == typeof t ? K(e, t) : e && 'function' == typeof t ? t(e) : n
}
function be(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.minBookingDays,
    a = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    l = !i || !ce(t, Q(i, -1)),
    c = !s || !ue(Q(t, o - 1), s)
  if (t && 1 === o && !n && !r(t)) return !0
  if ((t && o > 1 && !n && !a) || (t && o > 0 && a && l && c) || (t && o > 0 && a && !i && !s))
    return ee(t, Q(t, o - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !a) {
    var u = Q(t, o - 1)
    return (
      !ce(n, u) &&
      ee(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var Ce = 'startDate',
  Se = 'endDate'
function we(e) {
  var o = e.startDate,
    a = e.endDate,
    i = e.focusedInput,
    s = e.minBookingDate,
    l = e.maxBookingDate,
    c = e.onDatesChange,
    u = e.exactMinBookingDays,
    d = void 0 !== u && u,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    m = e.numberOfMonths,
    h = void 0 === m ? 2 : m,
    g = e.firstDayOfWeek,
    y = void 0 === g ? 1 : g,
    v = e.isDateBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    k = n(function() {
      return De(h, o)
    }),
    x = k[0],
    b = k[1],
    C = n(null),
    S = C[0],
    w = C[1],
    E = n(o),
    M = E[0],
    B = E[1],
    F = r(
      function(e) {
        B(e), (!M || (M && !fe(e, M))) && b(De(h, e))
      },
      [B, b, h, M],
    ),
    L = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && de(e, t, n)
        })(e, o, a)
      },
      [o, a],
    ),
    W = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && pe(e, t)) || (n && pe(e, n)))
        })(e, o, a)
      },
      [o, a],
    ),
    T = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            o = e.isDateBlockedFn,
            a = e.startDate,
            i = e.endDate,
            s = e.minBookingDays,
            l = void 0 === s ? 1 : s,
            c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            u = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (c && ce(t, c)) ||
            (u && ue(t, u)) ||
            (a && !i && l > 1 && de(t, a, Q(a, l - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: s,
          maxBookingDate: l,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          isDateBlockedFn: D,
        })
      },
      [s, l, o, a, f, D],
    ),
    R = r(
      function(e) {
        return !!M && pe(e, M)
      },
      [M],
    ),
    O = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            o = e.isDateBlocked,
            a = e.hoveredDate,
            i = e.minBookingDays
          return a && i > 1 && e.exactMinBookingDays && de(t, a, Q(a, i - 1))
            ? ee(a, Q(a, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : n && !r && a && de(t, n, Q(n, i - 1)) && pe(n, a) && i > 1
            ? ee(n, Q(n, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : !(!n || r || !a || ce(a, n) || !de(t, n, a)) &&
              ee(n, a).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: S,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          exactMinBookingDays: d,
          isDateBlocked: D,
        })
      },
      [S, o, a, f, d, D],
    )
  function H(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      M ||
      (F(new Date()), b(De(h, new Date())))
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
      isDateBlocked: T,
      numberOfMonths: h,
      isDateFocused: R,
      focusedDate: M,
      hoveredDate: S,
      onResetDates: function() {
        c({startDate: null, endDate: null, focusedInput: Ce})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !T(e) || (o && pe(e, o)),
              n = !s || !ce(e, Q(s, -1)),
              r = !l || !ue(e, l),
              i = Q(e, f - 1),
              c = !s || !ce(i, s),
              u = !l || !ue(i, l),
              p = d && f > 1 && n && r && c && u,
              m = o && !a && !d && n && r,
              h = !(f > 1 && o) || de(e, o, Q(o, f - 2)),
              g = o && pe(e, o) && h
            t && (p || m || g) ? w(e) : null !== S && w(null)
          }
        } else w(null)
      },
      onDateSelect: function(e) {
        ;(i === Se || i === Ce) &&
        f > 0 &&
        d &&
        be({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: s,
          maxBookingDate: l,
          isDateBlocked: D,
          startDate: e,
          endDate: null,
        })
          ? c({startDate: e, endDate: Q(e, f - 1), focusedInput: null})
          : ((i === Se && o && ce(e, o)) || (i === Ce && a && ue(e, a))) &&
            !d &&
            be({minBookingDays: f, isDateBlocked: D, startDate: e, endDate: null})
          ? c({endDate: null, startDate: e, focusedInput: Se})
          : i === Ce && !d && be({minBookingDays: f, isDateBlocked: D, endDate: a, startDate: e})
          ? c({endDate: a, startDate: e, focusedInput: Se})
          : i === Ce && !d && be({minBookingDays: f, isDateBlocked: D, endDate: null, startDate: e})
          ? c({endDate: null, startDate: e, focusedInput: Se})
          : i === Se &&
            o &&
            !ce(e, o) &&
            !d &&
            be({minBookingDays: f, isDateBlocked: D, startDate: o, endDate: e}) &&
            c({startDate: o, endDate: e, focusedInput: null}),
          (!M || (M && !fe(e, M))) && b(De(h, e))
      },
      onDateFocus: F,
      goToPreviousMonths: function() {
        b(ke(x, h, -1)), B(null)
      },
      goToNextMonths: function() {
        b(ke(x, h, 1)), B(null)
      },
    }
  )
}
var Ee = function() {
  return (Ee =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function Me(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function Be() {
  return (Be =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function Fe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function Le(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var We = Le(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    s = n ? Symbol.for('react.profiler') : 60114,
    l = n ? Symbol.for('react.provider') : 60109,
    c = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    h = n ? Symbol.for('react.lazy') : 60116
  function g(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case u:
            case d:
            case a:
            case s:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case c:
                case p:
                case l:
                  return e
                default:
                  return t
              }
          }
        case h:
        case m:
        case o:
          return t
      }
    }
  }
  function y(e) {
    return g(e) === d
  }
  ;(t.typeOf = g),
    (t.AsyncMode = u),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = c),
    (t.ContextProvider = l),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = h),
    (t.Memo = m),
    (t.Portal = o),
    (t.Profiler = s),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === s ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === h ||
            e.$$typeof === m ||
            e.$$typeof === l ||
            e.$$typeof === c ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || g(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return g(e) === c
    }),
    (t.isContextProvider = function(e) {
      return g(e) === l
    }),
    (t.isElement = function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r
    }),
    (t.isForwardRef = function(e) {
      return g(e) === p
    }),
    (t.isFragment = function(e) {
      return g(e) === a
    }),
    (t.isLazy = function(e) {
      return g(e) === h
    }),
    (t.isMemo = function(e) {
      return g(e) === m
    }),
    (t.isPortal = function(e) {
      return g(e) === o
    }),
    (t.isProfiler = function(e) {
      return g(e) === s
    }),
    (t.isStrictMode = function(e) {
      return g(e) === i
    }),
    (t.isSuspense = function(e) {
      return g(e) === f
    })
})
Fe(We)
We.typeOf,
  We.AsyncMode,
  We.ConcurrentMode,
  We.ContextConsumer,
  We.ContextProvider,
  We.Element,
  We.ForwardRef,
  We.Fragment,
  We.Lazy,
  We.Memo,
  We.Portal,
  We.Profiler,
  We.StrictMode,
  We.Suspense,
  We.isValidElementType,
  We.isAsyncMode,
  We.isConcurrentMode,
  We.isContextConsumer,
  We.isContextProvider,
  We.isElement,
  We.isForwardRef,
  We.isFragment,
  We.isLazy,
  We.isMemo,
  We.isPortal,
  We.isProfiler,
  We.isStrictMode,
  We.isSuspense
var Te = Le(function(e, t) {})
Fe(Te)
Te.typeOf,
  Te.AsyncMode,
  Te.ConcurrentMode,
  Te.ContextConsumer,
  Te.ContextProvider,
  Te.Element,
  Te.ForwardRef,
  Te.Fragment,
  Te.Lazy,
  Te.Memo,
  Te.Portal,
  Te.Profiler,
  Te.StrictMode,
  Te.Suspense,
  Te.isValidElementType,
  Te.isAsyncMode,
  Te.isConcurrentMode,
  Te.isContextConsumer,
  Te.isContextProvider,
  Te.isElement,
  Te.isForwardRef,
  Te.isFragment,
  Te.isLazy,
  Te.isMemo,
  Te.isPortal,
  Te.isProfiler,
  Te.isStrictMode,
  Te.isSuspense,
  Le(function(e) {
    e.exports = We
  })
var Re = Object.getOwnPropertySymbols,
  Oe = Object.prototype.hasOwnProperty,
  He = Object.prototype.propertyIsEnumerable
;(function() {
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
})() && Object.assign
var Pe = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function Ie() {}
function ze() {}
ze.resetWarningCache = Ie
var Ae,
  Ne,
  Ye,
  je = Le(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== Pe) {
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
        checkPropTypes: ze,
        resetWarningCache: Ie,
      }
      return (n.PropTypes = n), n
    })()
  }),
  Ve = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
  $e = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  Ge = je.oneOfType([je.number, je.string, je.array, je.object]),
  _e = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  Ue = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return Xe(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && Xe(e[t]) ? e[t] : null
          }, e)
    }, null)
    return Xe(o) ? o : n[n.length - 1]
  },
  Xe = function(e) {
    return null != e
  },
  Ze = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Je = function(e) {
    return Ze(e) && 0 !== e ? e + 'px' : e
  },
  qe = function(e) {
    return '@media screen and (min-width: ' + Je(e) + ')'
  },
  Ke = function(e, t) {
    return Ue(t, e)
  },
  Qe = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] && 'object' == typeof t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  et = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = Qe(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  tt = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      s = void 0 === i ? Ke : i,
      l = e.scale,
      c = void 0 === l ? {} : l,
      u = r || n,
      d = function(e) {
        var t = Ue(e, n, o, null)
        if (!Xe(t)) return null
        var r,
          i = Ue(e.theme, a, c),
          l = function(e) {
            var t
            return Xe(e) ? (((t = {})[u] = s(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return l(t)
        var d = Ue(e.theme, 'breakpoints', $e),
          p = []
        if (Array.isArray(t)) {
          p.push(l(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var m = l(t[f])
            if (m) {
              var h,
                g = qe(d[f - 1])
              p.push((((h = {})[g] = m), h))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              k = qe(D),
              x = l(t[y])
            if (D) p.push((((v = {})[k] = x), v))
            else p.unshift(x)
          }
          p.sort(Ve)
        }
        return et.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = _e(Ge)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = _e(Ge)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  nt = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return et.apply(void 0, n)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = Be({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  rt = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  ot = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return Ue(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = je.oneOfType([je.number, je.string])), t)), a
  },
  at = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  it = function(e, t) {
    if (!Ze(e)) return Je(Ue(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = Ue(t, r)
    return Ze(o) ? Je(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  st = tt({prop: 'margin', alias: 'm', key: 'space', transformValue: it, scale: at}),
  lt = tt({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: it, scale: at}),
  ct = tt({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: it, scale: at}),
  ut = tt({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: it, scale: at}),
  dt = tt({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: it, scale: at}),
  pt = tt({prop: 'padding', alias: 'p', key: 'space', transformValue: it, scale: at}),
  ft = tt({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: it, scale: at}),
  mt = tt({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: it, scale: at}),
  ht = tt({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: it, scale: at}),
  gt = tt({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: it, scale: at}),
  yt = rt(function(e) {
    return Be({}, e, {
      mt: Xe(e.my) ? e.my : e.mt,
      mb: Xe(e.my) ? e.my : e.mb,
      ml: Xe(e.mx) ? e.mx : e.ml,
      mr: Xe(e.mx) ? e.mx : e.mr,
      pt: Xe(e.py) ? e.py : e.pt,
      pb: Xe(e.py) ? e.py : e.pb,
      pl: Xe(e.px) ? e.px : e.pl,
      pr: Xe(e.px) ? e.px : e.pr,
    })
  })(nt(st, lt, ct, ut, dt, pt, ft, mt, ht, gt)),
  vt = nt(
    tt({prop: 'color', key: 'colors'}),
    tt({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  Dt = function(e, t) {
    return !Ze(e) || e > 1 ? Je(e) : 100 * e + '%'
  },
  kt = tt({prop: 'width', key: 'widths', transformValue: Dt}),
  xt = function(e, t) {
    return Je(Ue(t, e))
  },
  bt = tt({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: xt,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  Ct = tt({prop: 'fontFamily', key: 'fonts'}),
  St = tt({prop: 'fontWeight', key: 'fontWeights'}),
  wt = tt({prop: 'lineHeight', key: 'lineHeights'}),
  Et =
    (tt({prop: 'textAlign'}),
    tt({prop: 'fontStyle'}),
    tt({prop: 'letterSpacing', key: 'letterSpacings', transformValue: xt}),
    tt({prop: 'display'})),
  Mt =
    (tt({prop: 'maxWidth', key: 'maxWidths', transformValue: xt}),
    tt({prop: 'minWidth', key: 'minWidths', transformValue: xt}),
    tt({prop: 'height', key: 'heights', transformValue: xt})),
  Bt =
    (tt({prop: 'maxHeight', key: 'maxHeights', transformValue: xt}),
    tt({prop: 'minHeight', key: 'minHeights', transformValue: xt})),
  Ft =
    (rt(function(e) {
      return Be({}, e, {width: e.size, height: e.size})
    })(nt(kt, Mt)),
    tt({prop: 'verticalAlign'}),
    tt({prop: 'alignItems'})),
  Lt = (tt({prop: 'alignContent'}), tt({prop: 'justifyItems'}), tt({prop: 'justifyContent'})),
  Wt = tt({prop: 'flexWrap'}),
  Tt = (tt({prop: 'flexBasis', transformValue: Dt}), tt({prop: 'flexDirection'})),
  Rt = tt({prop: 'flex'}),
  Ot =
    (tt({prop: 'justifySelf'}),
    tt({prop: 'alignSelf'}),
    tt({prop: 'order'}),
    tt({prop: 'gridGap', key: 'space', transformValue: xt, scale: at})),
  Ht = tt({prop: 'gridColumnGap', key: 'space', transformValue: xt, scale: at}),
  Pt = tt({prop: 'gridRowGap', key: 'space', transformValue: xt, scale: at}),
  It = (tt({prop: 'gridColumn'}), tt({prop: 'gridRow'}), tt({prop: 'gridAutoFlow'})),
  zt = tt({prop: 'gridAutoColumns'}),
  At = tt({prop: 'gridAutoRows'}),
  Nt = tt({prop: 'gridTemplateColumns'}),
  Yt = tt({prop: 'gridTemplateRows'}),
  jt = tt({prop: 'gridTemplateAreas'}),
  Vt = tt({prop: 'gridArea'}),
  $t = tt({prop: 'border', key: 'borders'}),
  Gt = tt({prop: 'borderWidth', key: 'borderWidths', transformValue: xt}),
  _t = tt({prop: 'borderStyle', key: 'borderStyles'}),
  Ut = tt({prop: 'borderColor', key: 'colors'}),
  Xt = tt({prop: 'borderTop', key: 'borders'}),
  Zt = tt({prop: 'borderRight', key: 'borders'}),
  Jt = tt({prop: 'borderBottom', key: 'borders'}),
  qt = tt({prop: 'borderLeft', key: 'borders'}),
  Kt = tt({prop: 'borderRadius', key: 'radii', transformValue: xt}),
  Qt = nt($t, Xt, Zt, Jt, qt, Gt, _t, Ut, Kt),
  en = tt({prop: 'boxShadow', key: 'shadows'}),
  tn = tt({prop: 'opacity'}),
  nn = tt({prop: 'overflow'}),
  rn = tt({prop: 'background'}),
  on =
    (tt({prop: 'backgroundImage'}),
    tt({prop: 'backgroundSize'}),
    tt({prop: 'backgroundPosition'}),
    tt({prop: 'backgroundRepeat'}),
    tt({prop: 'position'})),
  an = tt({prop: 'zIndex', key: 'zIndices'}),
  sn = tt({prop: 'top', transformValue: xt}),
  ln = tt({prop: 'right', transformValue: xt}),
  cn = tt({prop: 'bottom', transformValue: xt}),
  un = tt({prop: 'left', transformValue: xt}),
  dn =
    (ot({key: 'buttons'}),
    ot({key: 'textStyles', prop: 'textStyle'}),
    ot({key: 'colorStyles', prop: 'colors'}),
    {
      datepickerStartDatePlaceholder: 'Select',
      datepickerStartDateLabel: 'Start date:',
      datepickerEndDatePlaceholder: 'Select',
      datepickerEndDateLabel: 'End date:',
      resetDates: 'Reset dates',
      close: 'Close',
    }),
  pn = Ee({}, dn, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  fn = Ee({}, dn, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  mn = tt({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  hn = u('div')(
    Ae ||
      (Ae = Me(
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
    zt,
    It,
    At,
    Ht,
    Ot,
    Pt,
    jt,
    Nt,
    Yt,
    Ft,
    Lt,
    yt,
    mn,
  ),
  gn = u('div')(
    Ne ||
      (Ne = Me(
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
    yt,
    Rt,
    Wt,
    Tt,
    Ft,
    Lt,
    Vt,
    Mt,
    kt,
  ),
  yn = u('div')(
    Ye ||
      (Ye = Me(
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
    Vt,
    Mt,
    yt,
    kt,
    on,
    sn,
    un,
    ln,
    cn,
    an,
  )
function vn(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
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
function Dn(e) {
  void 0 === e && (e = {})
  var t = a(d)
  return o(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return Ee({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var kn,
  xn,
  bn,
  Cn = {
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
  Sn = tt({prop: 'placeholderColor', cssProperty: 'color'}),
  wn = tt({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  En = u('label')(
    kn ||
      (kn = Me(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    on,
    $t,
    rn,
    Et,
    Kt,
    yt,
  ),
  Mn = u('div')(
    xn ||
      (xn = Me(
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
    on,
    un,
    ln,
    sn,
    Mt,
    kt,
  ),
  Bn = u('input')(
    bn ||
      (bn = Me(
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
    rn,
    yt,
    Ct,
    bt,
    vt,
    St,
    yt,
    $t,
    kt,
    Bt,
    en,
    wn,
    Sn,
    wn,
    Sn,
    wn,
    Sn,
  )
function Fn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.vertical,
    a = t.isActive,
    i = t.ariaLabel,
    s = t.onClick,
    l = t.value,
    c = t.showCalendarIcon,
    u = t.padding,
    d = t.rtl,
    p = t.disableAccessibility,
    f = Dn({
      fontFamily: Cn.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: Cn.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: u,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: Cn.colors.silverCloud,
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : o ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (o ? '8px' : '16px') : 'unset',
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
    En,
    {
      htmlFor: r,
      display: f.inputLabelDisplay,
      position: f.inputLabelPosition,
      border: f.inputLabelBorder,
      background: f.inputLabelBackground,
      borderRadius: f.inputLabelBorderRadius,
      m: f.inputLabelMargin,
    },
    c &&
      e.createElement(
        Mn,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(vn, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(Bn, {
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
      boxShadow: a ? f.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: n,
      'aria-label': i,
      value: l,
      autoComplete: 'off',
      onFocus: s,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function Ln(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    l = void 0 === s ? '' : s,
    c = (function(e) {
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
      color: o,
      className: l,
      transform: 'rotate(' + c + ' 0 0)',
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
function Wn() {
  return (Wn =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function Tn(e, t) {
  if (null == e) return {}
  var n,
    r,
    o = {},
    a = Object.keys(e)
  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
  return o
}
function Rn(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t)
}
var On = Le(function(e) {
  e.exports = function(e) {
    return e && e.__esModule ? e : {default: e}
  }
})
Fe(On)
var Hn = Le(function(e, t) {
  ;(t.__esModule = !0),
    (t.default = function(e, t) {
      return e.classList
        ? !!t && e.classList.contains(t)
        : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')
    }),
    (e.exports = t.default)
})
Fe(Hn)
var Pn = Fe(
  Le(function(e, t) {
    ;(t.__esModule = !0),
      (t.default = function(e, t) {
        e.classList
          ? e.classList.add(t)
          : (0, n.default)(e, t) ||
            ('string' == typeof e.className
              ? (e.className = e.className + ' ' + t)
              : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
      })
    var n = On(Hn)
    e.exports = t.default
  }),
)
function In(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}
var zn = !1,
  An = e.createContext(null),
  Nn = 'unmounted',
  Yn = 'exited',
  jn = 'entering',
  Vn = 'entered',
  $n = (function(t) {
    function n(e, n) {
      var r
      r = t.call(this, e, n) || this
      var o,
        a = n && !n.isMounting ? e.enter : e.appear
      return (
        (r.appearStatus = null),
        e.in
          ? a
            ? ((o = Yn), (r.appearStatus = jn))
            : (o = Vn)
          : (o = e.unmountOnExit || e.mountOnEnter ? Nn : Yn),
        (r.state = {status: o}),
        (r.nextCallback = null),
        r
      )
    }
    Rn(n, t),
      (n.getDerivedStateFromProps = function(e, t) {
        return e.in && t.status === Nn ? {status: Yn} : null
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
            ? n !== jn && n !== Vn && (t = jn)
            : (n !== jn && n !== Vn) || (t = 'exiting')
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
          var n = m.findDOMNode(this)
          t === jn ? this.performEnter(n, e) : this.performExit(n)
        } else this.props.unmountOnExit && this.state.status === Yn && this.setState({status: Nn})
      }),
      (r.performEnter = function(e, t) {
        var n = this,
          r = this.props.enter,
          o = this.context ? this.context.isMounting : t,
          a = this.getTimeouts(),
          i = o ? a.appear : a.enter
        ;(!t && !r) || zn
          ? this.safeSetState({status: Vn}, function() {
              n.props.onEntered(e)
            })
          : (this.props.onEnter(e, o),
            this.safeSetState({status: jn}, function() {
              n.props.onEntering(e, o),
                n.onTransitionEnd(e, i, function() {
                  n.safeSetState({status: Vn}, function() {
                    n.props.onEntered(e, o)
                  })
                })
            }))
      }),
      (r.performExit = function(e) {
        var t = this,
          n = this.props.exit,
          r = this.getTimeouts()
        n && !zn
          ? (this.props.onExit(e),
            this.safeSetState({status: 'exiting'}, function() {
              t.props.onExiting(e),
                t.onTransitionEnd(e, r.exit, function() {
                  t.safeSetState({status: Yn}, function() {
                    t.props.onExited(e)
                  })
                })
            }))
          : this.safeSetState({status: Yn}, function() {
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
        if (t === Nn) return null
        var n = this.props,
          r = n.children,
          o = Tn(n, ['children'])
        if (
          (delete o.in,
          delete o.mountOnEnter,
          delete o.unmountOnExit,
          delete o.appear,
          delete o.enter,
          delete o.exit,
          delete o.timeout,
          delete o.addEndListener,
          delete o.onEnter,
          delete o.onEntering,
          delete o.onEntered,
          delete o.onExit,
          delete o.onExiting,
          delete o.onExited,
          'function' == typeof r)
        )
          return e.createElement(An.Provider, {value: null}, r(t, o))
        var a = e.Children.only(r)
        return e.createElement(An.Provider, {value: null}, e.cloneElement(a, o))
      }),
      n
    )
  })(e.Component)
function Gn() {}
;($n.contextType = An),
  ($n.propTypes = {}),
  ($n.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Gn,
    onEntering: Gn,
    onEntered: Gn,
    onExit: Gn,
    onExiting: Gn,
    onExited: Gn,
  }),
  ($n.UNMOUNTED = 0),
  ($n.EXITED = 1),
  ($n.ENTERING = 2),
  ($n.ENTERED = 3),
  ($n.EXITING = 4)
var _n = function(e, t) {
    return (
      e &&
      t &&
      t.split(' ').forEach(function(t) {
        return (
          (r = t),
          void ((n = e).classList
            ? n.classList.remove(r)
            : 'string' == typeof n.className
            ? (n.className = In(n.className, r))
            : n.setAttribute('class', In((n.className && n.className.baseVal) || '', r)))
        )
        var n, r
      })
    )
  },
  Un = (function(t) {
    function n() {
      for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
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
            o = r ? '' + (r && n ? n + '-' : '') + t : n[t]
          return {
            baseClassName: o,
            activeClassName: r ? o + '-active' : n[t + 'Active'],
            doneClassName: r ? o + '-done' : n[t + 'Done'],
          }
        }),
        e
      )
    }
    Rn(n, t)
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
                return Pn(e, t)
              })
          })(e, r)
      }),
      (r.removeClasses = function(e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          o = n.active,
          a = n.done
        ;(this.appliedClasses[t] = {}), r && _n(e, r), o && _n(e, o), a && _n(e, a)
      }),
      (r.render = function() {
        var t = this.props,
          n = (t.classNames, Tn(t, ['classNames']))
        return e.createElement(
          $n,
          Wn({}, n, {
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
function Xn(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function Zn(e, t) {
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
function Jn(e, t, n) {
  return null != n[t] ? n[t] : e.props[t]
}
function qn(e, t, n) {
  var r = Zn(e.children),
    o = (function(e, t) {
      function n(n) {
        return n in t ? t[n] : e[n]
      }
      ;(e = e || {}), (t = t || {})
      var r,
        o = Object.create(null),
        a = []
      for (var i in e) i in t ? a.length && ((o[i] = a), (a = [])) : a.push(i)
      var s = {}
      for (var l in t) {
        if (o[l])
          for (r = 0; r < o[l].length; r++) {
            var c = o[l][r]
            s[o[l][r]] = n(c)
          }
        s[l] = n(l)
      }
      for (r = 0; r < a.length; r++) s[a[r]] = n(a[r])
      return s
    })(t, r)
  return (
    Object.keys(o).forEach(function(a) {
      var i = o[a]
      if (s(i)) {
        var c = a in t,
          u = a in r,
          d = t[a],
          p = s(d) && !d.props.in
        !u || (c && !p)
          ? u || !c || p
            ? u &&
              c &&
              s(d) &&
              (o[a] = l(i, {
                onExited: n.bind(null, i),
                in: d.props.in,
                exit: Jn(i, 'exit', e),
                enter: Jn(i, 'enter', e),
              }))
            : (o[a] = l(i, {in: !1}))
          : (o[a] = l(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: Jn(i, 'exit', e),
              enter: Jn(i, 'enter', e),
            }))
      }
    }),
    o
  )
}
;(Un.defaultProps = {classNames: ''}), (Un.propTypes = {})
var Kn =
    Object.values ||
    function(e) {
      return Object.keys(e).map(function(t) {
        return e[t]
      })
    },
  Qn = (function(t) {
    function n(e, n) {
      var r,
        o = (r = t.call(this, e, n) || this).handleExited.bind(Xn(Xn(r)))
      return (r.state = {contextValue: {isMounting: !0}, handleExited: o, firstRender: !0}), r
    }
    Rn(n, t)
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
          o = t.children,
          a = t.handleExited
        return {
          children: t.firstRender
            ? ((n = e),
              (r = a),
              Zn(n.children, function(e) {
                return l(e, {
                  onExited: r.bind(null, e),
                  in: !0,
                  appear: Jn(e, 'appear', n),
                  enter: Jn(e, 'enter', n),
                  exit: Jn(e, 'exit', n),
                })
              }))
            : qn(e, o, a),
          firstRender: !1,
        }
      }),
      (r.handleExited = function(e, t) {
        var n = Zn(this.props.children)
        e.key in n ||
          (e.props.onExited && e.props.onExited(t),
          this.mounted &&
            this.setState(function(t) {
              var n = Wn({}, t.children)
              return delete n[e.key], {children: n}
            }))
      }),
      (r.render = function() {
        var t = this.props,
          n = t.component,
          r = t.childFactory,
          o = Tn(t, ['component', 'childFactory']),
          a = this.state.contextValue,
          i = Kn(this.state.children).map(r)
        return (
          delete o.appear,
          delete o.enter,
          delete o.exit,
          null === n
            ? e.createElement(An.Provider, {value: a}, i)
            : e.createElement(An.Provider, {value: a}, e.createElement(n, o, i))
        )
      }),
      n
    )
  })(e.Component)
;(Qn.propTypes = {}),
  (Qn.defaultProps = {
    component: 'div',
    childFactory: function(e) {
      return e
    },
  })
var er,
  tr,
  nr,
  rr = u('div')(
    er ||
      (er = Me(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ct,
    bt,
    St,
    vt,
    wt,
    yt,
  ),
  or = u(rr)(
    nr ||
      (nr = Me(
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
          tr ||
            (tr = Me(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function ar(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = t.vertical,
    i = Dn({
      fontFamily: Cn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: Cn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: Cn.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    yn,
    {p: i.selectDatePadding},
    e.createElement(
      rr,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      or,
      {
        as: 'span',
        color: i.selectDateDateColor,
        fontSize: i.selectDateDateFontSize,
        fontWeight: i.selectDateDateFontWeight,
        fontFamily: i.fontFamily,
        p: i.selectDateDatePadding,
        isActive: r,
      },
      o,
    ),
  )
}
var ir,
  sr,
  lr,
  cr,
  ur,
  dr = function(t) {
    var n = t.label,
      r = Dn({
        fontFamily: Cn.fontFamily,
        monthLabelColor: Cn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      rr,
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
  pr = function(t) {
    var n = t.label,
      r = Dn({
        fontFamily: Cn.fontFamily,
        dayLabelColor: Cn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      rr,
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
  fr = {
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
  mr = e.createContext(fr),
  hr = tt({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  gr = tt({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  yr = tt({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  vr = tt({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Dr = tt({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  kr = tt({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  xr = u('button')(
    ur ||
      (ur = Me(
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
    hr,
    gr,
    en,
    rn,
    vt,
    Ct,
    St,
    bt,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        p(
          ir ||
            (ir = Me(
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
        o = e.isWithinHoverRange
      return t || n || r || o
        ? n && !r
          ? p(
              lr ||
                (lr = Me(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              kr,
              vr,
            )
          : ''
        : p(
            sr ||
              (sr = Me(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Dr,
            yr,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return p(
        cr ||
          (cr = Me(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function br(e, t, n, r) {
  var o = r.selectedFirstOrLast,
    a = r.normal,
    i = r.selected,
    s = r.rangeHover
  return t ? o : e ? i : n ? s : a
}
function Cr(n) {
  var i = n.day,
    s = n.date,
    l = c(null),
    u = a(mr),
    d = u.focusedDate,
    p = u.isDateFocused,
    f = u.isDateSelected,
    m = u.isDateHovered,
    h = u.isDateBlocked,
    g = u.isFirstOrLastSelectedDate,
    y = u.onDateSelect,
    v = u.onDateFocus,
    D = u.onDateHover,
    k = u.onDayRender,
    x = (function(e) {
      var n = e.date,
        o = e.focusedDate,
        a = e.isDateSelected,
        i = e.isDateFocused,
        s = e.isFirstOrLastSelectedDate,
        l = e.isDateHovered,
        c = e.isDateBlocked,
        u = e.onDateSelect,
        d = e.onDateFocus,
        p = e.onDateHover,
        f = e.dayRef,
        m = r(
          function() {
            return u(n)
          },
          [n, u],
        ),
        h = r(
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
      var g = c(n) && !l(n)
      return {
        tabIndex: null === o || i(n) ? 0 : -1,
        isSelected: a(n),
        isSelectedStartOrEnd: s(n),
        isWithinHoverRange: l(n),
        disabledDate: g,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? d(Q(n, 1))
            : 'ArrowLeft' === e.key
            ? d(Q(n, -1))
            : 'ArrowUp' === e.key
            ? d(Q(n, -7))
            : 'ArrowDown' === e.key && d(Q(n, 7))
        },
        onClick: g ? function() {} : m,
        onMouseEnter: h,
      }
    })({
      date: s,
      focusedDate: d,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: m,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: g,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: D,
      dayRef: l,
    }),
    b = Dn({
      fontFamily: Cn.fontFamily,
      daySize: Cn.daySize,
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
    C = o(
      function() {
        return br(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: b.daySelectedFirstOrLastBorderColor,
          selected: b.daySelectedBorderColor,
          normal: b.dayBorderColor,
          rangeHover: b.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, b, x.isWithinHoverRange],
    ),
    S = o(
      function() {
        return br(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: b.daySelectedFirstOrLastBackground,
          selected: b.daySelectedBackground,
          normal: b.dayBackground,
          rangeHover: b.dayHoverRangeBackground,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, b, x.isWithinHoverRange],
    ),
    w = o(
      function() {
        return br(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: b.daySelectedFirstOrLastColor,
          selected: b.daySelectedColor,
          normal: b.dayColor,
          rangeHover: b.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, b, x.isWithinHoverRange],
    )
  return e.createElement(
    xr,
    Ee({}, x, {
      ref: l,
      dayHeight: b.daySize,
      dayWidth: b.daySize,
      background: S,
      color: w,
      fontFamily: b.fontFamily,
      fontWeight: b.dayFontWeight,
      fontSize: b.dayFontSize,
      daySelectedHoverBackground: b.daySelectedHoverBackground,
      dayHoverBackground: b.dayHoverBackground,
      dayHoverColor: b.dayHoverColor,
      daySelectedHoverColor: b.daySelectedHoverColor,
      borderAccessibilityColor: b.dayAccessibilityBorderColor,
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
      'aria-label': 'Day-' + s.toDateString(),
    }),
    'function' == typeof k
      ? k(s)
      : e.createElement(
          gn,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          i,
        ),
  )
}
var Sr,
  wr = u('div')(
    Sr ||
      (Sr = Me(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Er = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = le({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: n,
        month: r,
        firstDayOfWeek: o,
      }),
      i = a.days,
      s = a.weekdayLabels,
      l = a.monthLabel,
      c = Dn({daySize: Cn.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      wr,
      null,
      e.createElement(
        gn,
        {justifyContent: 'center', m: c.monthLabelMargin},
        e.createElement(dr, {label: l}),
      ),
      e.createElement(
        hn,
        {daySizeGridTemplateColumns: c.daySize},
        s.map(function(t) {
          return e.createElement(
            gn,
            {key: t, justifyContent: 'center', m: c.monthDayLabelMargin},
            e.createElement(pr, {label: t}),
          )
        }),
      ),
      e.createElement(
        hn,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Cr, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Mr,
  Br,
  Fr,
  Lr = u('button')(
    Mr ||
      (Mr = Me(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Wr = u(function(t) {
    var n = t.height,
      r = t.width,
      o = t.color,
      a = t.className,
      i = void 0 === a ? '' : a
    return e.createElement(
      'svg',
      {
        width: r,
        height: n,
        color: o,
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
  })(Fr || (Fr = Me(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(
        Br ||
          (Br = Me(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function Tr(t) {
  var n = t.onResetDates,
    r = t.text,
    o = t.rtl,
    a = c(null),
    i = Dn({
      fontFamily: Cn.fontFamily,
      resetDatesIconColor: Cn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: Cn.colors.darcula,
      resetDatesTextMargin: o ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Lr,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(Wr, {
      height: i.resetDatesIconHeight,
      width: i.resetDatesIconWidth,
      color: i.resetDatesIconColor,
      rtl: o,
    }),
    e.createElement(
      rr,
      {
        m: i.resetDatesTextMargin,
        lineHeight: i.resetDatesTextLineHeight,
        fontFamily: i.fontFamily,
        fontSize: i.resetDatesTextFontSize,
        color: i.resetDatesTextColor,
      },
      r,
    ),
  )
}
var Rr,
  Or,
  Hr = u('svg')(Or || (Or = Me(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return p(
      Rr ||
        (Rr = Me(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Pr(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    s = t.className,
    l = void 0 === s ? '' : s,
    c = (function(e) {
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
    Hr,
    {
      width: r,
      height: n,
      color: o,
      className: l,
      angle: c,
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
var Ir,
  zr = u('button')(
    Ir ||
      (Ir = Me(
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
    kt,
    Mt,
    rn,
    yt,
    Qt,
  )
function Ar(t) {
  var n = t.type,
    r = t.onClick,
    o = t.vertical,
    a = t.rtl,
    i = t.ariaLabel,
    s = c(null),
    l = Dn({
      navButtonWidth: o ? '48px' : '30px',
      navButtonHeight: o ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: o ? '18px' : '11px',
      navButtonIconWidth: o ? '28px' : '18px',
      navButtonIconColor: Cn.colors.greey,
    })
  function u() {
    return 'next' !== n || o
      ? 'next' === n && o
        ? 'down'
        : 'prev' !== n || o
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    zr,
    {
      width: l.navButtonWidth,
      height: l.navButtonHeight,
      background: l.navButtonBackground,
      border: l.navButtonBorder,
      borderRight: 'up' !== u() || a ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && a ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': i,
      onClick: r,
      onMouseUp: function() {
        s && s.current && s.current.blur()
      },
      ref: s,
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(Pr, {
      width: l.navButtonIconWidth,
      height: l.navButtonIconHeight,
      color: l.navButtonIconColor,
      direction: u(),
    }),
  )
}
function Nr(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.className,
    i = void 0 === a ? '' : a
  return e.createElement(
    'svg',
    {
      width: r,
      height: n,
      color: o,
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
var Yr,
  jr,
  Vr = u('div')(
    Yr ||
      (Yr = Me(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    yt,
    vt,
    bt,
    Ct,
    St,
  ),
  $r = u('button')(
    jr ||
      (jr = Me(
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
    Vr,
    vt,
    vt,
  )
function Gr(t) {
  var n = t.onClick,
    r = t.rtl,
    o = t.closeText,
    a = Dn({
      fontFamily: Cn.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    $r,
    {
      onClick: n,
      color: a.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(Nr, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      Vr,
      {
        m: a.closeMargin,
        color: a.closeColor,
        fontSize: a.closeFontSize,
        fontFamily: a.fontFamily,
        fontWeight: a.closeFontWeight,
      },
      o,
    ),
  )
}
var _r,
  Ur,
  Xr,
  Zr,
  Jr,
  qr,
  Kr = f(
    _r ||
      (_r = Me(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  Qr = u('div')(
    Xr ||
      (Xr = Me(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  \n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  \n  .item-enter {\n    opacity: 0;\n  }\n  .item-enter-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n  .item-exit {\n    opacity: 1;\n  }\n  .item-exit-active {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  \n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  \n  .item-enter {\n    opacity: 0;\n  }\n  .item-enter-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n  .item-exit {\n    opacity: 1;\n  }\n  .item-exit-active {\n    opacity: 0;\n    transition: opacity 250ms ease-in;\n  }\n',
        ],
      )),
    rn,
    yt,
    Kt,
    on,
    en,
    kt,
    function(e) {
      return (
        e.rtl &&
        p(Ur || (Ur = Me(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    Kr,
  ),
  eo = u('div')(
    Zr ||
      (Zr = Me(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  to = u(yn)(Jr || (Jr = Me(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Et, Lt),
  no = u(hn)(qr || (qr = Me(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), nn, Mt)
function ro(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    i = t.focusedInput,
    s = t.onDatesChange,
    l = t.dayLabelFormat,
    u = t.weekdayLabelFormat,
    d = t.monthLabelFormat,
    p = t.onDayRender,
    f = t.vertical,
    m = void 0 !== f && f,
    h = t.rtl,
    g = void 0 !== h && h,
    y = t.showResetDates,
    v = void 0 === y || y,
    D = t.showClose,
    k = void 0 === D || D,
    x = t.showSelectedDates,
    b = void 0 === x || x,
    C = t.exactMinBookingDays,
    S = void 0 !== C && C,
    w = t.isDateBlocked,
    E =
      void 0 === w
        ? function() {
            return !1
          }
        : w,
    M = t.minBookingDays,
    B = void 0 === M ? 1 : M,
    F = t.onClose,
    L = void 0 === F ? function() {} : F,
    W = t.numberOfMonths,
    T = t.firstDayOfWeek,
    R = t.displayFormat,
    O = void 0 === R ? 'MM/DD/YYYY' : R,
    H = t.phrases,
    P = void 0 === H ? dn : H,
    I = we({
      startDate: n,
      endDate: r,
      focusedInput: i,
      onDatesChange: s,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: B,
      isDateBlocked: E,
      exactMinBookingDays: S,
      numberOfMonths: W,
      firstDayOfWeek: T,
    }),
    z = I.activeMonths,
    A = I.isDateSelected,
    N = I.isFirstOrLastSelectedDate,
    Y = I.isDateHovered,
    j = I.firstDayOfWeek,
    V = I.onDateSelect,
    $ = I.onResetDates,
    G = I.goToPreviousMonths,
    _ = I.goToNextMonths,
    U = I.numberOfMonths,
    X = I.hoveredDate,
    Z = I.onDateHover,
    J = I.isDateFocused,
    q = I.focusedDate,
    K = I.onDateFocus,
    Q = I.isDateBlocked,
    ee = c(null),
    te = Dn({
      datepickerBackground: '#ffffff',
      datepickerPadding: m ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: m ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: m ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: m ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: m ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: g ? 'unset' : m ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: g ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: m ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: Cn.colors.silverCloud,
      datepickerMonthsWrapperMargin: k || b ? (b ? '28px 0 0' : '48px 0 0') : 'unset',
      datepickerPreviousMonthButtonPosition: m ? 'relative' : 'absolute',
      datepickerPreviousMonthButtonTop: m ? 'unset' : '-5px',
      datepickerPreviousMonthButtonLeft: m ? 'unset' : '0',
      datepickerPreviousMonthButtonRight: 'unset',
      datepickerPreviousMonthButtonBottom: 'unset',
      datepickerNextMonthButtonPosition: m ? 'relative' : 'absolute',
      datepickerNextMonthButtonTop: m ? 'unset' : '-5px',
      datepickerNextMonthButtonLeft: 'unset',
      datepickerNextMonthButtonRight: m ? 'unset' : '0',
      datepickerNextMonthButtonBottom: 'unset',
      datepickerMonthsGridGap: m ? '32px' : '0 32px',
      datepickerMonthsGridOverflow: 'auto',
      datepickerMonthsGridHeight: m ? '50vh' : '100%',
      datepickerResetDatesWrapperMargin: m ? 'unset' : '32px 0 0',
      datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    })
  function ne() {
    ee && ee.current && m && (ee.current.scrollTop = 0)
  }
  function re() {
    _(), ne()
  }
  function oe() {
    G(), ne()
  }
  return e.createElement(
    mr.Provider,
    {
      value: {
        rtl: g,
        isDateFocused: J,
        isDateSelected: A,
        isDateHovered: Y,
        isFirstOrLastSelectedDate: N,
        onDateFocus: K,
        focusedDate: q,
        onDateSelect: V,
        onDateHover: Z,
        onDayRender: p,
        isDateBlocked: Q,
      },
    },
    e.createElement(
      Qr,
      {
        background: te.datepickerBackground,
        p: te.datepickerPadding,
        borderRadius: te.datepickerBorderRadius,
        position: te.datepickerPosition,
        boxShadow: te.datepickerBoxShadow,
        width: te.datepickerWidth,
        rtl: g,
      },
      k &&
        e.createElement(
          to,
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
          e.createElement(Gr, {onClick: L, rtl: g, closeText: P.close}),
        ),
      b &&
        e.createElement(
          eo,
          null,
          e.createElement(
            hn,
            {gridTemplateColumns: te.datepickerSelectDateGridTemplateColumns},
            e.createElement(ar, {
              title: P.datepickerStartDateLabel,
              date: xe(n, O, P.datepickerStartDatePlaceholder),
              isActive: i === Ce,
              vertical: m,
            }),
            e.createElement(
              gn,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(Ln, {
                height: te.datepickerSelectDateArrowIconHeight,
                width: te.datepickerSelectDateArrowIconWidth,
                iconColor: te.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(ar, {
              title: P.datepickerEndDateLabel,
              date: xe(r, O, P.datepickerEndDatePlaceholder),
              isActive: i === Se,
              vertical: m,
            }),
          ),
        ),
      e.createElement(
        yn,
        {position: 'relative'},
        e.createElement(
          yn,
          {m: te.datepickerMonthsWrapperMargin},
          e.createElement(
            Qn,
            {className: 'todo-list'},
            e.createElement(
              no,
              {
                'data-testid': 'MonthGrid',
                overflow: te.datepickerMonthsGridOverflow,
                height: te.datepickerMonthsGridHeight,
                gridTemplateColumns: m ? '1fr' : 'repeat(' + U + ', 1fr)',
                gridGap: te.datepickerMonthsGridGap,
                pr: g ? '1px' : '0',
                ref: ee,
                onMouseLeave: function() {
                  X && Z(null)
                },
              },
              z.map(function(t) {
                return e.createElement(
                  Un,
                  {key: t.year + '-' + t.month, timeout: 250, classNames: 'item', in: !0},
                  e.createElement(Er, {
                    key: 'month-' + t.year + '-' + t.month,
                    year: t.year,
                    month: t.month,
                    firstDayOfWeek: j,
                    dayLabelFormat: l || ae,
                    weekdayLabelFormat: u || ie,
                    monthLabelFormat: d || se,
                  }),
                )
              }),
            ),
          ),
        ),
        e.createElement(
          gn,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            v &&
              e.createElement(
                gn,
                {flex: '1', m: te.datepickerResetDatesWrapperMargin},
                e.createElement(Tr, {rtl: g, onResetDates: $, text: P.resetDates}),
              ),
            e.createElement(
              yn,
              {
                position: te.datepickerPreviousMonthButtonPosition,
                top: te.datepickerPreviousMonthButtonTop,
                left: te.datepickerPreviousMonthButtonLeft,
                right: te.datepickerPreviousMonthButtonRight,
                bottom: te.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(Ar, {
                type: 'prev',
                onClick: g && !m ? re : oe,
                vertical: m,
                rtl: g,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              yn,
              {
                position: te.datepickerNextMonthButtonPosition,
                top: te.datepickerNextMonthButtonTop,
                left: te.datepickerNextMonthButtonLeft,
                right: te.datepickerNextMonthButtonRight,
                bottom: te.datepickerNextMonthButtonBottom,
              },
              e.createElement(Ar, {
                type: 'next',
                onClick: g && !m ? oe : re,
                vertical: m,
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
var oo,
  ao,
  io,
  so,
  lo,
  co = u(yn)(ao || (ao = Me(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(oo || (oo = Me(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  uo = u(Ln)(
    so || (so = Me(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    tn,
    vt,
    function(e) {
      return (
        e.rtl &&
        p(
          io ||
            (io = Me(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  po = u(hn)(
    lo || (lo = Me(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    rn,
    $t,
    Kt,
  )
function fo(n) {
  var r = n.startDate,
    o = n.endDate,
    a = n.minBookingDate,
    i = n.maxBookingDate,
    s = n.firstDayOfWeek,
    l = n.onFocusChange,
    u = n.numberOfMonths,
    d = n.focusedInput,
    p = n.onDatesChange,
    f = n.exactMinBookingDays,
    m = n.dayLabelFormat,
    h = n.weekdayLabelFormat,
    g = n.monthLabelFormat,
    y = n.onDayRender,
    v = n.showClose,
    D = void 0 === v || v,
    k = n.showSelectedDates,
    x = void 0 === k || k,
    b = n.showResetDates,
    C = void 0 === b || b,
    S = n.vertical,
    w = void 0 !== S && S,
    E = n.rtl,
    M = void 0 !== E && E,
    B = n.isDateBlocked,
    F =
      void 0 === B
        ? function() {
            return !1
          }
        : B,
    L = n.minBookingDays,
    W = void 0 === L ? 1 : L,
    T = n.onClose,
    R = void 0 === T ? function() {} : T,
    O = n.showStartDateCalendarIcon,
    H = void 0 === O || O,
    P = n.showEndDateCalendarIcon,
    I = void 0 === P || P,
    z = n.displayFormat,
    A = void 0 === z ? 'MM/DD/YYYY' : z,
    N = n.phrases,
    Y = void 0 === N ? pn : N,
    j = n.placement,
    V = void 0 === j ? 'bottom' : j,
    $ = c(null),
    G = Dn(
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
          dateRangeStartDateInputPadding: w ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: w ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        (function(e) {
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
        })(V),
      ),
    )
  function _(e) {
    null !== d && $ && $.current && !$.current.contains(e.target) && l(null)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', _),
        function() {
          window.removeEventListener('click', _)
        }
      )
    }),
    e.createElement(
      co,
      {rtl: M, position: 'relative', ref: $},
      e.createElement(
        po,
        {
          background: G.dateRangeBackground,
          gridTemplateColumns: G.dateRangeGridTemplateColumns,
          border: G.dateRangeBorder,
          borderRadius: G.dateRangeBorderRadius,
        },
        e.createElement(Fn, {
          id: 'startDate',
          ariaLabel: Y.startDateAriaLabel,
          placeholder: Y.startDatePlaceholder,
          value: xe(r, A, ''),
          onClick: function() {
            return l(Ce)
          },
          showCalendarIcon: H,
          vertical: w,
          isActive: d === Ce,
          padding: G.dateRangeStartDateInputPadding,
          rtl: M,
        }),
        e.createElement(
          gn,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(uo, {
            width: G.dateRangeArrowIconWidth,
            height: G.dateRangeArrowIconHeight,
            color: G.dateRangeArrowIconColor,
            opacity: G.dateRangeArrowIconOpacity,
            rtl: M,
          }),
        ),
        e.createElement(Fn, {
          id: 'endDate',
          ariaLabel: Y.endDateAriaLabel,
          placeholder: Y.endDatePlaceholder,
          value: xe(o, A, ''),
          onClick: function() {
            return l(r ? Se : Ce)
          },
          showCalendarIcon: I,
          vertical: w,
          isActive: d === Se,
          padding: G.dateRangeEndDateInputPadding,
          rtl: M,
          disableAccessibility: d === Ce,
        }),
      ),
      e.createElement(
        yn,
        {
          position: G.dateRangeDatepickerWrapperPosition,
          bottom: G.dateRangeDatepickerWrapperBottom,
          left: G.dateRangeDatepickerWrapperLeft,
          top: G.dateRangeDatepickerWrapperTop,
          right: G.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(ro, {
            onClose: function() {
              R(), l(null)
            },
            startDate: r,
            endDate: o,
            minBookingDate: a,
            maxBookingDate: i,
            firstDayOfWeek: s,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: A,
            onDatesChange: p,
            minBookingDays: W,
            isDateBlocked: F,
            exactMinBookingDays: f,
            showResetDates: C,
            vertical: w,
            showSelectedDates: x,
            showClose: D,
            rtl: M,
            dayLabelFormat: m,
            weekdayLabelFormat: h,
            monthLabelFormat: g,
            onDayRender: y,
            phrases: Y,
          }),
      ),
    )
  )
}
var mo,
  ho,
  go = u(yn)(ho || (ho = Me(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      p(mo || (mo = Me(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function yo(n) {
  var r = n.date,
    o = n.minBookingDate,
    a = n.maxBookingDate,
    i = n.firstDayOfWeek,
    s = n.onFocusChange,
    l = n.showDatepicker,
    u = n.onDateChange,
    d = n.dayLabelFormat,
    p = n.weekdayLabelFormat,
    f = n.monthLabelFormat,
    m = n.onDayRender,
    h = n.numberOfMonths,
    g = void 0 === h ? 1 : h,
    y = n.showClose,
    v = void 0 === y || y,
    D = n.showResetDate,
    k = void 0 === D || D,
    x = n.vertical,
    b = void 0 !== x && x,
    C = n.rtl,
    S = void 0 !== C && C,
    w = n.isDateBlocked,
    E =
      void 0 === w
        ? function() {
            return !1
          }
        : w,
    M = n.onClose,
    B = void 0 === M ? function() {} : M,
    F = n.showCalendarIcon,
    L = void 0 === F || F,
    W = n.displayFormat,
    T = void 0 === W ? 'MM/DD/YYYY' : W,
    R = n.phrases,
    O = void 0 === R ? fn : R,
    H = n.placement,
    P = void 0 === H ? 'bottom' : H,
    I = c(null),
    z = Dn(
      Ee(
        {
          dateSingleInputPadding: b ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        (function(e) {
          return 'top' === e
            ? {
                dateSingleDatepickerWrapperTop: 'unset',
                dateSingleDatepickerWrapperRight: 'unset',
                dateSingleDatepickerWrapperBottom: '65px',
                dateSingleDatepickerWrapperLeft: '0',
              }
            : {
                dateSingleDatepickerWrapperTop: 'unset',
                dateSingleDatepickerWrapperRight: '65px',
                dateSingleDatepickerWrapperBottom: 'unset',
                dateSingleDatepickerWrapperLeft: '0',
              }
        })(P),
      ),
    )
  function A(e) {
    l && I && I.current && !I.current.contains(e.target) && s(!1)
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
      go,
      {rtl: S, position: 'relative', ref: I},
      e.createElement(Fn, {
        id: 'startDate',
        ariaLabel: O.dateAriaLabel,
        placeholder: O.datePlaceholder,
        value: xe(r, T, ''),
        onClick: function() {
          return s(!0)
        },
        showCalendarIcon: L,
        vertical: b,
        isActive: !1,
        padding: z.dateSingleInputPadding,
        rtl: S,
      }),
      e.createElement(
        yn,
        {
          position: z.dateSingleDatepickerWrapperPosition,
          bottom: z.dateSingleDatepickerWrapperBottom,
          left: z.dateSingleDatepickerWrapperLeft,
          top: z.dateSingleDatepickerWrapperTop,
          right: z.dateSingleDatepickerWrapperRight,
        },
        l &&
          e.createElement(ro, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              B(), s(!1)
            },
            startDate: r,
            endDate: r,
            minBookingDate: o,
            maxBookingDate: a,
            firstDayOfWeek: i,
            numberOfMonths: g,
            focusedInput: l ? Ce : null,
            displayFormat: T,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                n = e.startDate
              u({showDatepicker: null !== t, date: n})
            },
            isDateBlocked: E,
            showResetDates: k,
            vertical: b,
            showSelectedDates: !1,
            showClose: v,
            rtl: S,
            dayLabelFormat: d,
            weekdayLabelFormat: p,
            monthLabelFormat: f,
            onDayRender: m,
            phrases: O,
          }),
      ),
    )
  )
}
export {
  fo as DateRangeInput,
  yo as DateSingleInput,
  ro as Datepicker,
  Se as END_DATE,
  Ce as START_DATE,
  pn as dateRangeInputPhrases,
  fn as dateSingleInputPhrases,
  dn as datepickerPhrases,
}
