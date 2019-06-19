import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as a,
  useContext as o,
  useRef as i,
} from 'react'
import l, {ThemeContext as c, css as d, keyframes as s} from 'styled-components'
var u = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  p = function(e) {
    return e instanceof Date
  },
  f = 36e5,
  g = /[T ]/,
  m = /:/,
  h = /^(\d{2})$/,
  D = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  y = /^(\d{4})/,
  v = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  k = /^-(\d{2})$/,
  b = /^-?(\d{3})$/,
  x = /^-?(\d{2})-?(\d{2})$/,
  S = /^-?W(\d{2})$/,
  w = /^-?W(\d{2})-?(\d{1})$/,
  B = /^(\d{2}([.,]\d*)?)$/,
  C = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  F = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /([Z+-].*)$/,
  L = /^(Z)$/,
  M = /^([+-])(\d{2})$/,
  R = /^([+-])(\d{2}):?(\d{2})$/
function T(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var E,
  H = function(e, t) {
    if (p(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      a,
      o,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(g)
        if ((m.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = W.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = D[t],
          a = v[t]
        if ((n = y.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = h.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      c = l.year,
      d = (function(e, t) {
        if (null === t) return null
        var n, r, a
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = k.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = b.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = x.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = S.exec(e))
          ? T(t, parseInt(n[1], 10) - 1)
          : (n = w.exec(e))
          ? T(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (d) {
      var s,
        E = d.getTime(),
        H = 0
      if (
        (i.time &&
          (H = (function(e) {
            var t, n, r
            if ((t = B.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * f
            if ((t = C.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * f + 6e4 * r
              )
            if ((t = F.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * f + 6e4 * r + 1e3 * a
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (s =
            6e4 *
            ((a = L.exec(r))
              ? 0
              : (a = M.exec(r))
              ? ((o = 60 * parseInt(a[2], 10)), '+' === a[1] ? -o : o)
              : (a = R.exec(r))
              ? ((o = 60 * parseInt(a[2], 10) + parseInt(a[3], 10)), '+' === a[1] ? -o : o)
              : 0))
      else {
        var O = E + H,
          I = new Date(O)
        s = u(I)
        var z = new Date(O)
        z.setDate(I.getDate() + 1)
        var P = u(z) - u(I)
        P > 0 && (s += P)
      }
      return new Date(E + H + s)
    }
    return new Date(e)
  },
  O = function(e) {
    var t = H(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = function(e) {
    var t = H(e)
    return (
      (function(e, t) {
        var n = O(e),
          r = O(t),
          a = n.getTime() - 6e4 * n.getTimezoneOffset(),
          o = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((a - o) / 864e5)
      })(
        t,
        (function(e) {
          var t = H(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  z = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = H(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  P = function(e) {
    return z(e, {weekStartsOn: 1})
  },
  A = function(e) {
    var t = H(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = P(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = P(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  Y = function(e) {
    var t = H(e),
      n =
        P(t).getTime() -
        (function(e) {
          var t = A(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), P(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  j = function(e) {
    if (p(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  N = [
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
  G = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = N.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  $ = {
    distanceInWords:
      ((E = {
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
              'string' == typeof E[e]
                ? E[e]
                : 1 === t
                ? E[e].one
                : E[e].other.replace('{{count}}', t)),
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
        {formatters: c, formattingTokensRegExp: G(c)}
      )
    })(),
  },
  V = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return U(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return U(e.getDate(), 2)
    },
    DDD: function(e) {
      return I(e)
    },
    DDDD: function(e) {
      return U(I(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return Y(e)
    },
    WW: function(e) {
      return U(Y(e), 2)
    },
    YY: function(e) {
      return U(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return U(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(A(e)).substr(2)
    },
    GGGG: function(e) {
      return A(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return U(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return U(V.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return U(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return U(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return U(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return U(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return X(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return X(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function X(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + U(Math.floor(r / 60), 2) + t + U(a, 2)
}
function U(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var Z = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (n || {}).locale,
      o = $.format.formatters,
      i = $.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var l = H(e)
    return j(l)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (a = t[i[r]] || V[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, V)) : (t += i[n])
            return t
          }
        })(r, o, i)(l)
      : 'Invalid Date'
  },
  J = function(e, t) {
    var n = H(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Q = function(e, t, n) {
    var r = H(e),
      a = void 0 !== n ? n : 1,
      o = H(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(H(l)), l.setDate(l.getDate() + a)
    return i
  },
  _ = function(e) {
    var t = H(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  q = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = H(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  K = function(e) {
    return H(e).getDay()
  },
  ee = function(e) {
    var t = H(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var te = function(e) {
    return Z(e, 'DD')
  },
  ne = function(e) {
    return Z(e, 'dd')
  },
  re = function(e) {
    return Z(e, 'MMMM YYYY')
  }
function ae(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    o = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    l = void 0 === i ? te : i,
    c = e.weekdayLabelFormat,
    d = void 0 === c ? ne : c,
    s = e.monthLabelFormat,
    u = void 0 === s ? re : s
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
                    return Z(e, 'DD')
                  }
                : o,
            l = new Date(t, n),
            c = ee(l),
            d = K(c),
            s = _(l),
            u = Array.from(Array(d >= a ? d - a : a).keys()).fill(0),
            p = Q(c, s).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return u.concat(p)
        })({year: t, month: n, firstDayOfWeek: o, dayLabelFormat: l})
      },
      [t, n, o, l],
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
                    return Z(e, 'dd')
                  }
                : a,
            i = new Date()
          return Q(J(z(i), r), J(q(i), r)).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: d})
      },
      [o, d],
    ),
    monthLabel: u(new Date(t, n)),
  }
}
var oe = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getTime() < r.getTime()
  },
  ie = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getTime() > r.getTime()
  },
  le = function(e, t, n) {
    var r = H(e).getTime(),
      a = H(t).getTime(),
      o = H(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  ce = function(e, t) {
    var n = O(e),
      r = O(t)
    return n.getTime() === r.getTime()
  },
  de = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  se = function(e) {
    return H(e).getFullYear()
  },
  ue = function(e) {
    return H(e).getMonth()
  },
  pe = function() {
    return O(new Date())
  },
  fe = function(e, t) {
    var n = H(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = H(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        a = new Date(0)
      return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
    })(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  }
function ge(e) {
  var t = ee(e)
  return {year: se(t), month: ue(t), date: t}
}
function me(e, t) {
  var n = ge(t || pe()),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = fe(e[e.length - 1].date, 1)), e.concat([ge(r)])
      }, a)),
    a
  )
}
function he(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = fe(r, n)), n > 0 ? e.concat([ge(r)]) : [ge(r)].concat(e)
  }, [])
}
function De(e, t, n) {
  return e && 'string' == typeof t ? Z(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ye(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !oe(t, J(i, -1)),
    d = !l || !ie(J(t, a - 1), l)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && c && d) || (t && a > 0 && o && !i && !l))
    return Q(t, J(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var s = J(t, a - 1)
    return (
      !oe(n, s) &&
      Q(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var ve = 'startDate',
  ke = 'endDate'
function be(e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.focusedInput,
    l = e.minBookingDate,
    c = e.maxBookingDate,
    d = e.onDatesChange,
    s = e.exactMinBookingDays,
    u = void 0 !== s && s,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    g = e.numberOfMonths,
    m = void 0 === g ? 2 : g,
    h = e.firstDayOfWeek,
    D = void 0 === h ? 1 : h,
    y = e.isDateBlocked,
    v =
      void 0 === y
        ? function() {
            return !1
          }
        : y,
    k = n(function() {
      return me(m, a)
    }),
    b = k[0],
    x = k[1],
    S = n(null),
    w = S[0],
    B = S[1],
    C = n(a),
    F = C[0],
    W = C[1],
    L = r(
      function(e) {
        W(e), (!F || (F && !de(e, F))) && x(me(m, e))
      },
      [W, x, m, F],
    ),
    M = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && le(e, t, n)
        })(e, a, o)
      },
      [a, o],
    ),
    R = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && ce(e, t)) || (n && ce(e, n)))
        })(e, a, o)
      },
      [a, o],
    ),
    T = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            a = e.isDateBlockedFn,
            o = e.startDate,
            i = e.endDate,
            l = e.minBookingDays,
            c = void 0 === l ? 1 : l,
            d = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            s = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (d && oe(t, d)) ||
            (s && ie(t, s)) ||
            (o && !i && c > 1 && le(t, o, J(o, c - 2))) ||
            (a && a(t))
          )
        })({
          date: e,
          minBookingDate: l,
          maxBookingDate: c,
          startDate: a,
          endDate: o,
          minBookingDays: f,
          isDateBlockedFn: v,
        })
      },
      [l, c, a, o, f, v],
    ),
    E = r(
      function(e) {
        return !!F && ce(e, F)
      },
      [F],
    ),
    H = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && le(t, o, J(o, i - 1))
            ? Q(o, J(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && le(t, n, J(n, i - 1)) && ce(n, o) && i > 1
            ? Q(n, J(n, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || oe(o, n) || !le(t, n, o)) &&
              Q(n, o).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: w,
          startDate: a,
          endDate: o,
          minBookingDays: f,
          exactMinBookingDays: u,
          isDateBlocked: v,
        })
      },
      [w, a, o, f, u, v],
    )
  function O(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !F
    ) {
      var t = b[0]
      L(t.date), x(me(m, t.date))
    }
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', O),
        function() {
          window.removeEventListener('keydown', O)
        }
      )
    }),
    {
      firstDayOfWeek: D,
      activeMonths: b,
      isDateSelected: M,
      isDateHovered: H,
      isFirstOrLastSelectedDate: R,
      isDateBlocked: T,
      numberOfMonths: m,
      isDateFocused: E,
      focusedDate: F,
      hoveredDate: w,
      onResetDates: function() {
        d({startDate: null, endDate: null, focusedInput: ve})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !T(e) || (a && ce(e, a)),
              n = !l || !oe(e, J(l, -1)),
              r = !c || !ie(e, c),
              i = J(e, f - 1),
              d = !l || !oe(i, l),
              s = !c || !ie(i, c),
              p = u && f > 1 && n && r && d && s,
              g = a && !o && !u && n && r,
              m = !(f > 1 && a) || le(e, a, J(a, f - 2)),
              h = a && ce(e, a) && m
            t && (p || g || h) ? B(e) : null !== w && B(null)
          }
        } else B(null)
      },
      onDateSelect: function(e) {
        ;(i === ke || i === ve) &&
        f > 0 &&
        u &&
        ye({
          minBookingDays: f,
          exactMinBookingDays: u,
          minBookingDate: l,
          maxBookingDate: c,
          isDateBlocked: v,
          startDate: e,
          endDate: null,
        })
          ? d({startDate: e, endDate: J(e, f - 1), focusedInput: null})
          : ((i === ke && a && oe(e, a)) || (i === ve && o && ie(e, o))) &&
            !u &&
            ye({minBookingDays: f, isDateBlocked: v, startDate: e, endDate: null})
          ? d({endDate: null, startDate: e, focusedInput: ke})
          : i === ve && !u && ye({minBookingDays: f, isDateBlocked: v, endDate: o, startDate: e})
          ? d({endDate: o, startDate: e, focusedInput: ke})
          : i === ve && !u && ye({minBookingDays: f, isDateBlocked: v, endDate: null, startDate: e})
          ? d({endDate: null, startDate: e, focusedInput: ke})
          : i === ke &&
            a &&
            !oe(e, a) &&
            !u &&
            ye({minBookingDays: f, isDateBlocked: v, startDate: a, endDate: e}) &&
            d({startDate: a, endDate: e, focusedInput: null}),
          i === ke || (F && (!F || de(e, F))) || x(me(m, e))
      },
      onDateFocus: L,
      goToPreviousMonths: function() {
        x(he(b, m, -1)), W(null)
      },
      goToNextMonths: function() {
        x(he(b, m, 1)), W(null)
      },
    }
  )
}
var xe = function() {
  return (xe =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function Se(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var we = Object.getOwnPropertySymbols,
  Be = Object.prototype.hasOwnProperty,
  Ce = Object.prototype.propertyIsEnumerable
var Fe = (function() {
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
          for (var i in (n = Object(arguments[o]))) Be.call(n, i) && (a[i] = n[i])
          if (we) {
            r = we(n)
            for (var l = 0; l < r.length; l++) Ce.call(n, r[l]) && (a[r[l]] = n[r[l]])
          }
        }
        return a
      },
  We = function(e, t) {
    var n = Fe({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && Fe(n, (((a = {})[r] = Fe(e[r], t[r])), a))
    }
    return n
  },
  Le = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  Me = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  Re = function(e, t) {
    return Te(t, e, e)
  },
  Te = function(e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Ee = function(e) {
    var t = {},
      n = function(n) {
        var r = {}
        for (var a in n)
          if (e[a]) {
            var o = e[a],
              i = n[a],
              l = Te(n.theme, o.scale, o.defaults)
            if ('object' != typeof i) Fe(r, o(i, l))
            else {
              if (
                ((t.breakpoints = t.breakpoints || Te(n.theme, 'breakpoints', Le.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(Me))),
                  (r = We(r, He(t.media, o, l, i)))
                continue
              }
              null !== i && (r = We(r, Oe(t.breakpoints, o, l, i)))
            }
          }
        return r
      }
    return (n.config = e), (n.propNames = Object.keys(e)), (n.cache = t), n
  },
  He = function(e, t, n, r) {
    var a = {}
    return (
      r.slice(0, e.length).forEach(function(r, o) {
        var i,
          l = e[o],
          c = t(r, n)
        void 0 !== c && Fe(a, l ? (((i = {})[l] = Fe({}, a[l], c)), i) : c)
      }),
      a
    )
  },
  Oe = function(e, t, n, r) {
    var a = {}
    for (var o in r) {
      var i = e[o],
        l = t(r[o], n)
      if (i) {
        var c,
          d = Me(i)
        Fe(a, (((c = {})[d] = Fe({}, a[d], l)), c))
      } else Fe(a, l)
    }
    return a
  },
  Ie = function(e) {
    var t = e.properties,
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? Re : a,
      i = e.defaultScale
    t = t || [n]
    var l = function(e, n) {
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
    return (l.scale = r), (l.defaults = i), l
  },
  ze = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(n) {
        var r = e[n]
        t[n] = Ie(!0 !== r ? r : {property: n, scale: n})
      }),
      Ee(t)
    )
  },
  Pe = function() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return (
      n.forEach(function(t) {
        t && t.config && Fe(e, t.config)
      }),
      Ee(e)
    )
  }
function Ae() {
  return (Ae =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var Ye = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  je = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Ne = function(e, t) {
    if (!je(e)) return Te(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Te(t, r, r)
    return je(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
  },
  Ge = {}
;(Ge.margin = {
  margin: {property: 'margin', scale: 'space', transform: Ne, defaultScale: Ye.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: Ne, defaultScale: Ye.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: Ne, defaultScale: Ye.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: Ne, defaultScale: Ye.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: Ne, defaultScale: Ye.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: Ne,
    defaultScale: Ye.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: Ne,
    defaultScale: Ye.space,
  },
}),
  (Ge.margin.m = Ge.margin.margin),
  (Ge.margin.mt = Ge.margin.marginTop),
  (Ge.margin.mr = Ge.margin.marginRight),
  (Ge.margin.mb = Ge.margin.marginBottom),
  (Ge.margin.ml = Ge.margin.marginLeft),
  (Ge.margin.mx = Ge.margin.marginX),
  (Ge.margin.my = Ge.margin.marginY),
  (Ge.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Ye.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Ye.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Ye.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Ye.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Ye.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Ye.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Ye.space},
  }),
  (Ge.padding.p = Ge.padding.padding),
  (Ge.padding.pt = Ge.padding.paddingTop),
  (Ge.padding.pr = Ge.padding.paddingRight),
  (Ge.padding.pb = Ge.padding.paddingBottom),
  (Ge.padding.pl = Ge.padding.paddingLeft),
  (Ge.padding.px = Ge.padding.paddingX),
  (Ge.padding.py = Ge.padding.paddingY)
ze(Ge.margin), ze(Ge.padding)
var $e = ze(Ae({}, Ge.margin, Ge.padding)),
  Ve = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Ve.bg = Ve.backgroundColor
var Xe = ze(Ve),
  Ue = ze({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return Te(
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
  Ze = ze({
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
  Je = ze({
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
  Qe = ze({
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
  _e = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(_e.bgImage = _e.backgroundImage),
  (_e.bgSize = _e.backgroundSize),
  (_e.bgPosition = _e.backgroundPosition),
  (_e.bgRepeat = _e.backgroundRepeat)
var qe,
  Ke,
  et,
  tt = ze(_e),
  nt = ze({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: !0,
    right: !0,
    bottom: !0,
    left: !0,
  }),
  rt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  at = ze({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: rt.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: rt.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: rt.space},
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
  ot = ze({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  }),
  it = function(e) {
    var t,
      n = e.scale,
      r = e.prop,
      a = void 0 === r ? 'variant' : r,
      o = e.key,
      i = function(e, t) {
        return Te(t, e, null)
      }
    i.scale = n || o
    var l = (((t = {})[a] = i), t)
    return Ee(l)
  },
  lt =
    (it({key: 'buttons'}),
    it({key: 'textStyles', prop: 'textStyle'}),
    it({key: 'colorStyles', prop: 'colors'}),
    function(e) {
      var t = e.prop,
        n = e.cssProperty,
        r = e.alias,
        a = e.key,
        o = e.transformValue,
        i = e.scale,
        l = e.properties,
        c = {}
      return (
        (c[t] = Ie({properties: l, property: n || t, scale: a, defaultScale: i, transform: o})),
        r && (c[r] = c[t]),
        Ee(c)
      )
    }),
  ct = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  dt = xe({}, ct, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  st = xe({}, ct, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  ut = lt({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  pt = Pe(at, at, at, at, at, at, at, at, at, Je, Je, $e),
  ft = l('div')(
    qe ||
      (qe = Se(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    pt,
    ut,
  ),
  gt = Pe($e, Je, Je, Je, Je, Je, at, Ue, Ue),
  mt = l('div')(
    Ke || (Ke = Se(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    gt,
  ),
  ht = Pe(at, Ue, $e, Ue, nt, nt, nt, nt, nt, nt),
  Dt = l('div')(
    et ||
      (et = Se(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    ht,
  )
function yt(t) {
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
function vt(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var a
            return xe({}, n, (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var kt,
  bt,
  xt,
  St = {
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
  wt = lt({prop: 'placeholderColor', cssProperty: 'color'}),
  Bt = lt({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  Ct = Pe(nt, Qe, tt, Ue, Qe, $e),
  Ft = l('label')(kt || (kt = Se(['\n  ', '\n'], ['\n  ', '\n'])), Ct),
  Wt = Pe(nt, nt, nt, nt, Ue, Ue),
  Lt = l('div')(
    bt ||
      (bt = Se(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    Wt,
  ),
  Mt = Pe(tt, $e, Ze, Ze, Xe, Ze, $e, Qe, Ue, Ue, ot),
  Rt = l('input')(
    xt ||
      (xt = Se(
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
    Mt,
    Bt,
    wt,
    Bt,
    wt,
    Bt,
    wt,
  )
function Tt(t) {
  var n = t.placeholder,
    r = t.id,
    a = t.vertical,
    o = t.isActive,
    i = t.ariaLabel,
    l = t.onClick,
    c = t.value,
    d = t.showCalendarIcon,
    s = t.padding,
    u = t.rtl,
    p = t.disableAccessibility,
    f = vt({
      fontFamily: St.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: St.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: s,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: St.colors.silverCloud,
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
    Ft,
    {
      htmlFor: r,
      display: f.inputLabelDisplay,
      position: f.inputLabelPosition,
      border: f.inputLabelBorder,
      background: f.inputLabelBackground,
      borderRadius: f.inputLabelBorderRadius,
      m: f.inputLabelMargin,
    },
    d &&
      e.createElement(
        Lt,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(yt, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(Rt, {
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
      onFocus: l,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function Et(t) {
  var n = t.height,
    r = t.width,
    a = t.iconColor,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    l = t.className,
    c = void 0 === l ? '' : l,
    d = (function(e) {
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
      transform: 'rotate(' + d + ' 0 0)',
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
var Ht,
  Ot,
  It,
  zt = Pe(Ze, Ze, Ze, Xe, Ze, $e),
  Pt = l('div')(Ht || (Ht = Se(['\n  ', '\n'], ['\n  ', '\n'])), zt),
  At = l(Pt)(
    It ||
      (It = Se(
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
        d(
          Ot ||
            (Ot = Se(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Yt(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    o = t.vertical,
    i = vt({
      fontFamily: St.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: St.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: St.colors.charcoal,
      selectDateDateFontSize: o ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    Dt,
    {p: i.selectDatePadding},
    e.createElement(
      Pt,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      At,
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
var jt,
  Nt,
  Gt,
  $t,
  Vt,
  Xt = function(t) {
    var n = t.label,
      r = vt({
        fontFamily: St.fontFamily,
        monthLabelColor: St.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Pt,
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
  Ut = function(t) {
    var n = t.label,
      r = vt({
        fontFamily: St.fontFamily,
        dayLabelColor: St.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Pt,
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
  Zt = {
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
  Jt = e.createContext(Zt),
  Qt = lt({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  _t = lt({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  qt = lt({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Kt = lt({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  en = lt({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  tn = lt({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  nn = Pe(ot, tt, Xe, Ze, Ze, Ze),
  rn = l('button')(
    Vt ||
      (Vt = Se(
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
    Qt,
    _t,
    nn,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        d(
          jt ||
            (jt = Se(
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
          ? d(
              Gt ||
                (Gt = Se(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              tn,
              Kt,
            )
          : ''
        : d(
            Nt ||
              (Nt = Se(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            en,
            qt,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return d(
        $t ||
          ($t = Se(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function an(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? a : e ? i : n ? l : o
}
function on(n) {
  var l = n.day,
    c = n.date,
    d = i(null),
    s = o(Jt),
    u = s.focusedDate,
    p = s.isDateFocused,
    f = s.isDateSelected,
    g = s.isDateHovered,
    m = s.isDateBlocked,
    h = s.isFirstOrLastSelectedDate,
    D = s.onDateSelect,
    y = s.onDateFocus,
    v = s.onDateHover,
    k = s.onDayRender,
    b = (function(e) {
      var n = e.date,
        a = e.focusedDate,
        o = e.isDateSelected,
        i = e.isDateFocused,
        l = e.isFirstOrLastSelectedDate,
        c = e.isDateHovered,
        d = e.isDateBlocked,
        s = e.onDateSelect,
        u = e.onDateFocus,
        p = e.onDateHover,
        f = e.dayRef,
        g = r(
          function() {
            return s(n)
          },
          [n, s],
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
      var h = d(n) && !c(n)
      return {
        tabIndex: null === a || i(n) ? 0 : -1,
        isSelected: o(n),
        isSelectedStartOrEnd: l(n),
        isWithinHoverRange: c(n),
        disabledDate: h,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(J(n, 1))
            : 'ArrowLeft' === e.key
            ? u(J(n, -1))
            : 'ArrowUp' === e.key
            ? u(J(n, -7))
            : 'ArrowDown' === e.key && u(J(n, 7))
        },
        onClick: h ? function() {} : g,
        onMouseEnter: m,
      }
    })({
      date: c,
      focusedDate: u,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: g,
      isDateBlocked: m,
      isFirstOrLastSelectedDate: h,
      onDateFocus: y,
      onDateSelect: D,
      onDateHover: v,
      dayRef: d,
    }),
    x = vt({
      fontFamily: St.fontFamily,
      daySize: St.daySize,
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
        return an(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBorderColor,
          selected: x.daySelectedBorderColor,
          normal: x.dayBorderColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    ),
    w = a(
      function() {
        return an(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBackground,
          selected: x.daySelectedBackground,
          normal: x.dayBackground,
          rangeHover: x.dayHoverRangeBackground,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    ),
    B = a(
      function() {
        return an(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastColor,
          selected: x.daySelectedColor,
          normal: x.dayColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    )
  return e.createElement(
    rn,
    xe({}, b, {
      ref: d,
      dayHeight: x.daySize,
      dayWidth: x.daySize,
      background: w,
      color: B,
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
      'aria-label': 'Day-' + c.toDateString(),
    }),
    'function' == typeof k
      ? k(c)
      : e.createElement(
          mt,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          l,
        ),
  )
}
var ln,
  cn,
  dn = s(
    ln ||
      (ln = Se(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  sn = l('div')(
    cn ||
      (cn = Se(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    dn,
  ),
  un = function(t) {
    var n = t.year,
      r = t.month,
      a = t.firstDayOfWeek,
      o = ae({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: n,
        month: r,
        firstDayOfWeek: a,
      }),
      i = o.days,
      l = o.weekdayLabels,
      c = o.monthLabel,
      d = vt({daySize: St.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      sn,
      null,
      e.createElement(
        mt,
        {justifyContent: 'center', m: d.monthLabelMargin},
        e.createElement(Xt, {label: c}),
      ),
      e.createElement(
        ft,
        {daySizeGridTemplateColumns: d.daySize},
        l.map(function(t) {
          return e.createElement(
            mt,
            {key: t, justifyContent: 'center', m: d.monthDayLabelMargin},
            e.createElement(Ut, {label: t}),
          )
        }),
      ),
      e.createElement(
        ft,
        {daySizeGridTemplateColumns: d.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(on, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var pn,
  fn,
  gn,
  mn = l('button')(
    pn ||
      (pn = Se(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  hn = l(function(t) {
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
  })(gn || (gn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(
        fn ||
          (fn = Se(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function Dn(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    o = vt({
      fontFamily: St.fontFamily,
      resetDatesIconColor: St.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: St.colors.darcula,
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    mn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(hn, {
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      Pt,
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
var yn,
  vn,
  kn = l('svg')(vn || (vn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return d(
      yn ||
        (yn = Se(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function bn(t) {
  var n = t.height,
    r = t.width,
    a = t.color,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    l = t.className,
    c = void 0 === l ? '' : l,
    d = (function(e) {
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
    kn,
    {
      width: r,
      height: n,
      color: a,
      className: c,
      angle: d,
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
var xn,
  Sn = Pe(Ue, Ue, tt, $e, Qe),
  wn = l('button')(
    xn ||
      (xn = Se(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    Sn,
  )
function Bn(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    o = t.rtl,
    i = t.ariaLabel,
    l = vt({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: St.colors.greey,
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
    wn,
    {
      width: l.navButtonWidth,
      height: l.navButtonHeight,
      background: l.navButtonBackground,
      border: l.navButtonBorder,
      borderRight: 'up' !== c() || o ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === c() && o ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': i,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(bn, {
      width: l.navButtonIconWidth,
      height: l.navButtonIconHeight,
      color: l.navButtonIconColor,
      direction: c(),
    }),
  )
}
function Cn(t) {
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
var Fn,
  Wn,
  Ln = Pe($e, Xe, Ze, Ze, Ze),
  Mn = l('div')(
    Fn ||
      (Fn = Se(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    Ln,
  ),
  Rn = l('button')(
    Wn ||
      (Wn = Se(
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
    Mn,
    Xe,
    Xe,
  )
function Tn(t) {
  var n = t.onClick,
    r = t.rtl,
    a = t.closeText,
    o = vt({
      fontFamily: St.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    Rn,
    {
      onClick: n,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(Cn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      Mn,
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
var En,
  Hn,
  On,
  In,
  zn,
  Pn,
  An = s(
    En ||
      (En = Se(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  Yn = Pe(tt, $e, Qe, nt, ot, Ue),
  jn = l('div')(
    On ||
      (On = Se(
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
    Yn,
    function(e) {
      return (
        e.rtl &&
        d(Hn || (Hn = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    An,
  ),
  Nn = l('div')(
    In ||
      (In = Se(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Gn = Pe(Ue, Je),
  $n = l(Dt)(zn || (zn = Se(['\n  ', '\n'], ['\n  ', '\n'])), Gn),
  Vn = Pe(Ue, Ue),
  Xn = l(ft)(Pn || (Pn = Se(['\n  ', '\n'], ['\n  ', '\n'])), Vn)
function Un(t) {
  var n = t.startDate,
    r = t.endDate,
    a = t.minBookingDate,
    o = t.maxBookingDate,
    l = t.focusedInput,
    c = t.onDatesChange,
    d = t.dayLabelFormat,
    s = t.weekdayLabelFormat,
    u = t.monthLabelFormat,
    p = t.onDayRender,
    f = t.vertical,
    g = void 0 !== f && f,
    m = t.rtl,
    h = void 0 !== m && m,
    D = t.showResetDates,
    y = void 0 === D || D,
    v = t.showClose,
    k = void 0 === v || v,
    b = t.showSelectedDates,
    x = void 0 === b || b,
    S = t.exactMinBookingDays,
    w = void 0 !== S && S,
    B = t.isDateBlocked,
    C =
      void 0 === B
        ? function() {
            return !1
          }
        : B,
    F = t.minBookingDays,
    W = void 0 === F ? 1 : F,
    L = t.onClose,
    M = void 0 === L ? function() {} : L,
    R = t.numberOfMonths,
    T = t.firstDayOfWeek,
    E = t.displayFormat,
    H = void 0 === E ? 'MM/DD/YYYY' : E,
    O = t.phrases,
    I = void 0 === O ? ct : O,
    z = be({
      startDate: n,
      endDate: r,
      focusedInput: l,
      onDatesChange: c,
      minBookingDate: a,
      maxBookingDate: o,
      minBookingDays: W,
      isDateBlocked: C,
      exactMinBookingDays: w,
      numberOfMonths: R,
      firstDayOfWeek: T,
    }),
    P = z.activeMonths,
    A = z.isDateSelected,
    Y = z.isFirstOrLastSelectedDate,
    j = z.isDateHovered,
    N = z.firstDayOfWeek,
    G = z.onDateSelect,
    $ = z.onResetDates,
    V = z.goToPreviousMonths,
    X = z.goToNextMonths,
    U = z.numberOfMonths,
    Z = z.hoveredDate,
    J = z.onDateHover,
    Q = z.isDateFocused,
    _ = z.focusedDate,
    q = z.onDateFocus,
    K = z.isDateBlocked,
    ee = i(null),
    ae = vt({
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
      datepickerSelectDateArrowIconColor: St.colors.silverCloud,
      datepickerMonthsWrapperMargin: k || x ? (x ? '28px 0 0' : '48px 0 0') : 'unset',
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
  function oe() {
    ee && ee.current && g && (ee.current.scrollTop = 0)
  }
  function ie() {
    X(), oe()
  }
  function le() {
    V(), oe()
  }
  return e.createElement(
    Jt.Provider,
    {
      value: {
        rtl: h,
        isDateFocused: Q,
        isDateSelected: A,
        isDateHovered: j,
        isFirstOrLastSelectedDate: Y,
        onDateFocus: q,
        focusedDate: _,
        onDateSelect: G,
        onDateHover: J,
        onDayRender: p,
        isDateBlocked: K,
      },
    },
    e.createElement(
      jn,
      {
        background: ae.datepickerBackground,
        p: ae.datepickerPadding,
        borderRadius: ae.datepickerBorderRadius,
        position: ae.datepickerPosition,
        boxShadow: ae.datepickerBoxShadow,
        width: ae.datepickerWidth,
        rtl: h,
      },
      k &&
        e.createElement(
          $n,
          {
            m: ae.datepickerCloseWrapperMargin,
            display: ae.datepickerCloseWrapperDisplay,
            justifyContent: ae.datepickerCloseWrapperJustifyContent,
            position: ae.datepickerCloseWrapperPosition,
            right: ae.datepickerCloseWrapperRight,
            top: ae.datepickerCloseWrapperTop,
            left: ae.datepickerCloseWrapperLeft,
            bottom: ae.datepickerCloseWrapperBottom,
            zIndex: ae.datepickerCloseWrapperZIndex,
          },
          e.createElement(Tn, {onClick: M, rtl: h, closeText: I.close}),
        ),
      x &&
        e.createElement(
          Nn,
          null,
          e.createElement(
            ft,
            {gridTemplateColumns: ae.datepickerSelectDateGridTemplateColumns},
            e.createElement(Yt, {
              title: I.datepickerStartDateLabel,
              date: De(n, H, I.datepickerStartDatePlaceholder),
              isActive: l === ve,
              vertical: g,
            }),
            e.createElement(
              mt,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(Et, {
                height: ae.datepickerSelectDateArrowIconHeight,
                width: ae.datepickerSelectDateArrowIconWidth,
                iconColor: ae.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(Yt, {
              title: I.datepickerEndDateLabel,
              date: De(r, H, I.datepickerEndDatePlaceholder),
              isActive: l === ke,
              vertical: g,
            }),
          ),
        ),
      e.createElement(
        Dt,
        {position: 'relative'},
        e.createElement(
          Dt,
          {m: ae.datepickerMonthsWrapperMargin},
          e.createElement(
            Xn,
            {
              'data-testid': 'MonthGrid',
              overflow: ae.datepickerMonthsGridOverflow,
              height: ae.datepickerMonthsGridHeight,
              gridTemplateColumns: g ? '1fr' : 'repeat(' + U + ', 1fr)',
              gridGap: ae.datepickerMonthsGridGap,
              pr: h ? '1px' : '0',
              ref: ee,
              onMouseLeave: function() {
                Z && J(null)
              },
            },
            P.map(function(t) {
              return e.createElement(un, {
                key: 'month-' + t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: N,
                dayLabelFormat: d || te,
                weekdayLabelFormat: s || ne,
                monthLabelFormat: u || re,
              })
            }),
          ),
        ),
        e.createElement(
          mt,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            y &&
              e.createElement(
                mt,
                {flex: '1', m: ae.datepickerResetDatesWrapperMargin},
                e.createElement(Dn, {rtl: h, onResetDates: $, text: I.resetDates}),
              ),
            e.createElement(
              Dt,
              {
                position: ae.datepickerPreviousMonthButtonPosition,
                top: ae.datepickerPreviousMonthButtonTop,
                left: ae.datepickerPreviousMonthButtonLeft,
                right: ae.datepickerPreviousMonthButtonRight,
                bottom: ae.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(Bn, {
                type: 'prev',
                onClick: h && !g ? ie : le,
                vertical: g,
                rtl: h,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              Dt,
              {
                position: ae.datepickerNextMonthButtonPosition,
                top: ae.datepickerNextMonthButtonTop,
                left: ae.datepickerNextMonthButtonLeft,
                right: ae.datepickerNextMonthButtonRight,
                bottom: ae.datepickerNextMonthButtonBottom,
              },
              e.createElement(Bn, {
                type: 'next',
                onClick: h && !g ? le : ie,
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
var Zn,
  Jn,
  Qn,
  _n,
  qn,
  Kn = l(Dt)(Jn || (Jn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(Zn || (Zn = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  er = Pe(Xe, Xe),
  tr = l(Et)(_n || (_n = Se(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), er, function(e) {
    return (
      e.rtl &&
      d(
        Qn ||
          (Qn = Se(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  nr = Pe(tt, Qe, Qe),
  rr = l(ft)(qn || (qn = Se(['\n  ', '\n'], ['\n  ', '\n'])), nr)
function ar(n) {
  var r = n.startDate,
    a = n.endDate,
    o = n.minBookingDate,
    l = n.maxBookingDate,
    c = n.firstDayOfWeek,
    d = n.onFocusChange,
    s = n.numberOfMonths,
    u = n.focusedInput,
    p = n.onDatesChange,
    f = n.exactMinBookingDays,
    g = n.dayLabelFormat,
    m = n.weekdayLabelFormat,
    h = n.monthLabelFormat,
    D = n.onDayRender,
    y = n.showClose,
    v = void 0 === y || y,
    k = n.showSelectedDates,
    b = void 0 === k || k,
    x = n.showResetDates,
    S = void 0 === x || x,
    w = n.vertical,
    B = void 0 !== w && w,
    C = n.rtl,
    F = void 0 !== C && C,
    W = n.isDateBlocked,
    L =
      void 0 === W
        ? function() {
            return !1
          }
        : W,
    M = n.minBookingDays,
    R = void 0 === M ? 1 : M,
    T = n.onClose,
    E = void 0 === T ? function() {} : T,
    H = n.showStartDateCalendarIcon,
    O = void 0 === H || H,
    I = n.showEndDateCalendarIcon,
    z = void 0 === I || I,
    P = n.displayFormat,
    A = void 0 === P ? 'MM/DD/YYYY' : P,
    Y = n.phrases,
    j = void 0 === Y ? dt : Y,
    N = n.placement,
    G = void 0 === N ? 'bottom' : N,
    $ = i(null),
    V = vt(
      xe(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: B ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: B ? (F ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: B ? (F ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(G, F),
      ),
    )
  function X(e) {
    null !== u && $ && $.current && !$.current.contains(e.target) && d(null)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', X),
        function() {
          window.removeEventListener('click', X)
        }
      )
    }),
    e.createElement(
      Kn,
      {rtl: F, position: 'relative', ref: $},
      e.createElement(
        rr,
        {
          background: V.dateRangeBackground,
          gridTemplateColumns: V.dateRangeGridTemplateColumns,
          border: V.dateRangeBorder,
          borderRadius: V.dateRangeBorderRadius,
        },
        e.createElement(Tt, {
          id: 'startDate',
          ariaLabel: j.startDateAriaLabel,
          placeholder: j.startDatePlaceholder,
          value: De(r, A, ''),
          onClick: function() {
            return d(ve)
          },
          showCalendarIcon: O,
          vertical: B,
          isActive: u === ve,
          padding: V.dateRangeStartDateInputPadding,
          rtl: F,
        }),
        e.createElement(
          mt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(tr, {
            width: V.dateRangeArrowIconWidth,
            height: V.dateRangeArrowIconHeight,
            color: V.dateRangeArrowIconColor,
            opacity: V.dateRangeArrowIconOpacity,
            rtl: F,
          }),
        ),
        e.createElement(Tt, {
          id: 'endDate',
          ariaLabel: j.endDateAriaLabel,
          placeholder: j.endDatePlaceholder,
          value: De(a, A, ''),
          onClick: function() {
            return d(r ? ke : ve)
          },
          showCalendarIcon: z,
          vertical: B,
          isActive: u === ke,
          padding: V.dateRangeEndDateInputPadding,
          rtl: F,
          disableAccessibility: u === ve,
        }),
      ),
      e.createElement(
        Dt,
        {
          position: V.dateRangeDatepickerWrapperPosition,
          bottom: V.dateRangeDatepickerWrapperBottom,
          left: V.dateRangeDatepickerWrapperLeft,
          top: V.dateRangeDatepickerWrapperTop,
          right: V.dateRangeDatepickerWrapperRight,
        },
        null !== u &&
          e.createElement(Un, {
            onClose: function() {
              E(), d(null)
            },
            startDate: r,
            endDate: a,
            minBookingDate: o,
            maxBookingDate: l,
            firstDayOfWeek: c,
            numberOfMonths: s,
            focusedInput: u,
            displayFormat: A,
            onDatesChange: p,
            minBookingDays: R,
            isDateBlocked: L,
            exactMinBookingDays: f,
            showResetDates: S,
            vertical: B,
            showSelectedDates: b,
            showClose: v,
            rtl: F,
            dayLabelFormat: g,
            weekdayLabelFormat: m,
            monthLabelFormat: h,
            onDayRender: D,
            phrases: j,
          }),
      ),
    )
  )
}
var or,
  ir,
  lr = l(Dt)(ir || (ir = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(or || (or = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function cr(n) {
  var r = n.date,
    a = n.minBookingDate,
    o = n.maxBookingDate,
    l = n.firstDayOfWeek,
    c = n.onFocusChange,
    d = n.showDatepicker,
    s = n.onDateChange,
    u = n.dayLabelFormat,
    p = n.weekdayLabelFormat,
    f = n.monthLabelFormat,
    g = n.onDayRender,
    m = n.numberOfMonths,
    h = void 0 === m ? 1 : m,
    D = n.showClose,
    y = void 0 === D || D,
    v = n.showResetDate,
    k = void 0 === v || v,
    b = n.vertical,
    x = void 0 !== b && b,
    S = n.rtl,
    w = void 0 !== S && S,
    B = n.isDateBlocked,
    C =
      void 0 === B
        ? function() {
            return !1
          }
        : B,
    F = n.onClose,
    W = void 0 === F ? function() {} : F,
    L = n.showCalendarIcon,
    M = void 0 === L || L,
    R = n.displayFormat,
    T = void 0 === R ? 'MM/DD/YYYY' : R,
    E = n.phrases,
    H = void 0 === E ? st : E,
    O = n.placement,
    I = void 0 === O ? 'bottom' : O,
    z = i(null),
    P = vt(
      xe(
        {
          dateSingleInputPadding: x ? (w ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(I, w),
      ),
    )
  function A(e) {
    d && z && z.current && !z.current.contains(e.target) && c(!1)
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
      lr,
      {rtl: w, position: 'relative', ref: z},
      e.createElement(Tt, {
        id: 'startDate',
        ariaLabel: H.dateAriaLabel,
        placeholder: H.datePlaceholder,
        value: De(r, T, ''),
        onClick: function() {
          return c(!0)
        },
        showCalendarIcon: M,
        vertical: x,
        isActive: !1,
        padding: P.dateSingleInputPadding,
        rtl: w,
      }),
      e.createElement(
        Dt,
        {
          position: P.dateSingleDatepickerWrapperPosition,
          bottom: P.dateSingleDatepickerWrapperBottom,
          left: P.dateSingleDatepickerWrapperLeft,
          top: P.dateSingleDatepickerWrapperTop,
          right: P.dateSingleDatepickerWrapperRight,
        },
        d &&
          e.createElement(Un, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              W(), c(!1)
            },
            startDate: r,
            endDate: r,
            minBookingDate: a,
            maxBookingDate: o,
            firstDayOfWeek: l,
            numberOfMonths: h,
            focusedInput: d ? ve : null,
            displayFormat: T,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                n = e.startDate
              s({showDatepicker: null !== t, date: n})
            },
            isDateBlocked: C,
            showResetDates: k,
            vertical: x,
            showSelectedDates: !1,
            showClose: y,
            rtl: w,
            dayLabelFormat: u,
            weekdayLabelFormat: p,
            monthLabelFormat: f,
            onDayRender: g,
            phrases: H,
          }),
      ),
    )
  )
}
export {
  ar as DateRangeInput,
  cr as DateSingleInput,
  Un as Datepicker,
  ke as END_DATE,
  ve as START_DATE,
  dt as dateRangeInputPhrases,
  st as dateSingleInputPhrases,
  ct as datepickerPhrases,
}
