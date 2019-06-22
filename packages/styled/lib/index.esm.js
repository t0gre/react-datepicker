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
  g = 36e5,
  f = /[T ]/,
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
  C = /^(\d{2}([.,]\d*)?)$/,
  B = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  F = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /([Z+-].*)$/,
  L = /^(Z)$/,
  M = /^([+-])(\d{2})$/,
  R = /^([+-])(\d{2}):?(\d{2})$/
function H(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var T,
  E = function(e, t) {
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
          r = e.split(f)
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
          ? H(t, parseInt(n[1], 10) - 1)
          : (n = w.exec(e))
          ? H(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (d) {
      var s,
        T = d.getTime(),
        E = 0
      if (
        (i.time &&
          (E = (function(e) {
            var t, n, r
            if ((t = C.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * g
            if ((t = B.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * g + 6e4 * r
              )
            if ((t = F.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * g + 6e4 * r + 1e3 * a
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
        var O = T + E,
          I = new Date(O)
        s = u(I)
        var z = new Date(O)
        z.setDate(I.getDate() + 1)
        var P = u(z) - u(I)
        P > 0 && (s += P)
      }
      return new Date(T + E + s)
    }
    return new Date(e)
  },
  O = function(e) {
    var t = E(e)
    return t.setHours(0, 0, 0, 0), t
  },
  I = function(e) {
    var t = E(e)
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
          var t = E(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  z = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = E(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  P = function(e) {
    return z(e, {weekStartsOn: 1})
  },
  A = function(e) {
    var t = E(e),
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
    var t = E(e),
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
      ((T = {
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
              'string' == typeof T[e]
                ? T[e]
                : 1 === t
                ? T[e].one
                : T[e].other.replace('{{count}}', t)),
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
    var l = E(e)
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
    var n = E(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  Q = function(e, t, n) {
    var r = E(e),
      a = void 0 !== n ? n : 1,
      o = E(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(E(l)), l.setDate(l.getDate() + a)
    return i
  },
  _ = function(e) {
    var t = E(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  q = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = E(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  K = function(e) {
    return E(e).getDay()
  },
  ee = function(e) {
    var t = E(e)
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
    var n = E(e),
      r = E(t)
    return n.getTime() < r.getTime()
  },
  ie = function(e, t) {
    var n = E(e),
      r = E(t)
    return n.getTime() > r.getTime()
  },
  le = function(e, t, n) {
    var r = E(e).getTime(),
      a = E(t).getTime(),
      o = E(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  ce = function(e, t) {
    var n = O(e),
      r = O(t)
    return n.getTime() === r.getTime()
  },
  de = function(e, t) {
    var n = E(e),
      r = E(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  se = function(e) {
    return E(e).getFullYear()
  },
  ue = function(e) {
    return E(e).getMonth()
  },
  pe = function() {
    return O(new Date())
  },
  ge = function(e, t) {
    var n = E(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = E(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        a = new Date(0)
      return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
    })(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  }
function fe(e) {
  var t = ee(e)
  return {year: se(t), month: ue(t), date: t}
}
function me(e, t) {
  var n = fe(t || pe()),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = ge(e[e.length - 1].date, 1)), e.concat([fe(r)])
      }, a)),
    a
  )
}
function he(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = ge(r, n)), n > 0 ? e.concat([fe(r)]) : [fe(r)].concat(e)
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
    g = void 0 === p ? 1 : p,
    f = e.numberOfMonths,
    m = void 0 === f ? 2 : f,
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
    C = S[1],
    B = n(a),
    F = B[0],
    W = B[1],
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
    H = r(
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
          minBookingDays: g,
          isDateBlockedFn: v,
        })
      },
      [l, c, a, o, g, v],
    ),
    T = r(
      function(e) {
        return !!F && ce(e, F)
      },
      [F],
    ),
    E = r(
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
          minBookingDays: g,
          exactMinBookingDays: u,
          isDateBlocked: v,
        })
      },
      [w, a, o, g, u, v],
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
      isDateHovered: E,
      isFirstOrLastSelectedDate: R,
      isDateBlocked: H,
      numberOfMonths: m,
      isDateFocused: T,
      focusedDate: F,
      hoveredDate: w,
      onResetDates: function() {
        d({startDate: null, endDate: null, focusedInput: ve})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !H(e) || (a && ce(e, a)),
              n = !l || !oe(e, J(l, -1)),
              r = !c || !ie(e, c),
              i = J(e, g - 1),
              d = !l || !oe(i, l),
              s = !c || !ie(i, c),
              p = u && g > 1 && n && r && d && s,
              f = a && !o && !u && n && r,
              m = !(g > 1 && a) || le(e, a, J(a, g - 2)),
              h = a && ce(e, a) && m
            t && (p || f || h) ? C(e) : null !== w && C(null)
          }
        } else C(null)
      },
      onDateSelect: function(e) {
        ;(i === ke || i === ve) &&
        g > 0 &&
        u &&
        ye({
          minBookingDays: g,
          exactMinBookingDays: u,
          minBookingDate: l,
          maxBookingDate: c,
          isDateBlocked: v,
          startDate: e,
          endDate: null,
        })
          ? d({startDate: e, endDate: J(e, g - 1), focusedInput: null})
          : ((i === ke && a && oe(e, a)) || (i === ve && o && ie(e, o))) &&
            !u &&
            ye({minBookingDays: g, isDateBlocked: v, startDate: e, endDate: null})
          ? d({endDate: null, startDate: e, focusedInput: ke})
          : i === ve && !u && ye({minBookingDays: g, isDateBlocked: v, endDate: o, startDate: e})
          ? d({endDate: o, startDate: e, focusedInput: ke})
          : i === ve && !u && ye({minBookingDays: g, isDateBlocked: v, endDate: null, startDate: e})
          ? d({endDate: null, startDate: e, focusedInput: ke})
          : i === ke &&
            a &&
            !oe(e, a) &&
            !u &&
            ye({minBookingDays: g, isDateBlocked: v, startDate: a, endDate: e}) &&
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
  Ce = Object.prototype.hasOwnProperty,
  Be = Object.prototype.propertyIsEnumerable
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
          for (var i in (n = Object(arguments[o]))) Ce.call(n, i) && (a[i] = n[i])
          if (we) {
            r = we(n)
            for (var l = 0; l < r.length; l++) Be.call(n, r[l]) && (a[r[l]] = n[r[l]])
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
    return He(t, e, e)
  },
  He = function(e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Te = function(e) {
    var t = {},
      n = function(n) {
        var r = {}
        for (var a in n)
          if (e[a]) {
            var o = e[a],
              i = n[a],
              l = He(n.theme, o.scale, o.defaults)
            if ('object' != typeof i) Fe(r, o(i, l))
            else {
              if (
                ((t.breakpoints = t.breakpoints || He(n.theme, 'breakpoints', Le.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(Me))),
                  (r = We(r, Ee(t.media, o, l, i)))
                continue
              }
              null !== i && (r = We(r, Oe(t.breakpoints, o, l, i)))
            }
          }
        return r
      }
    return (n.config = e), (n.propNames = Object.keys(e)), (n.cache = t), n
  },
  Ee = function(e, t, n, r) {
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
      Te(t)
    )
  },
  Pe = function() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return (
      n.forEach(function(t) {
        t && t.config && Fe(e, t.config)
      }),
      Te(e)
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
    if (!je(e)) return He(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = He(t, r, r)
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
        return He(
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
        return He(t, e, null)
      }
    i.scale = n || o
    var l = (((t = {})[a] = i), t)
    return Te(l)
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
        Te(c)
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
  gt = l('div')(
    qe ||
      (qe = Se(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    pt,
    ut,
  ),
  ft = Pe($e, Je, Je, Je, Je, Je, at, Ue, Ue),
  mt = l('div')(
    Ke || (Ke = Se(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    ft,
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
var kt = {
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
function bt(e, t, n) {
  return n &&
    'object' == typeof n &&
    n.reactDatepicker &&
    'object' == typeof n.reactDatepicker &&
    n.reactDatepicker.colors &&
    'object' == typeof n.reactDatepicker.colors &&
    n.reactDatepicker.colors[e]
    ? n.reactDatepicker.colors[e]
    : t
}
var xt,
  St,
  wt,
  Ct = lt({prop: 'placeholderColor', cssProperty: 'color'}),
  Bt = lt({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  Ft = Pe(nt, Qe, tt, Ue, Qe, $e),
  Wt = l('label')(xt || (xt = Se(['\n  ', '\n'], ['\n  ', '\n'])), Ft),
  Lt = Pe(nt, nt, nt, nt, Ue, Ue),
  Mt = l('div')(
    St ||
      (St = Se(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    Lt,
  ),
  Rt = Pe(tt, $e, Ze, Ze, Xe, Ze, $e, Qe, Ue, Ue, ot),
  Ht = l('input')(
    wt ||
      (wt = Se(
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
    Rt,
    Bt,
    Ct,
    Bt,
    Ct,
    Bt,
    Ct,
  )
function Tt(t) {
  var n = t.placeholder,
    r = t.id,
    a = t.vertical,
    i = t.isActive,
    l = t.ariaLabel,
    d = t.onClick,
    s = t.value,
    u = t.showCalendarIcon,
    p = t.padding,
    g = t.rtl,
    f = t.disableAccessibility,
    m = o(c),
    h = vt({
      fontFamily: kt.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: bt('charcoal', kt.colors.charcoal, m),
      inputBackground: bt('white', kt.colors.white, m),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: p,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: bt('silverCloud', kt.colors.silverCloud, m),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: g ? 'unset' : a ? '8px' : '16px',
      inputCalendarWrapperRight: g ? (a ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: bt('graci', kt.colors.graci, m),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + bt('graci', kt.colors.graci, m),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: bt('white', kt.colors.white, m),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + bt('primaryColor', kt.colors.primaryColor, m),
    })
  return e.createElement(
    Wt,
    {
      htmlFor: r,
      display: h.inputLabelDisplay,
      position: h.inputLabelPosition,
      border: h.inputLabelBorder,
      background: h.inputLabelBackground,
      borderRadius: h.inputLabelBorderRadius,
      m: h.inputLabelMargin,
    },
    u &&
      e.createElement(
        Mt,
        {
          position: h.inputCalendarWrapperPosition,
          height: h.inputCalendarWrapperHeight,
          width: h.inputCalendarWrapperWidth,
          top: h.inputCalendarWrapperTop,
          left: h.inputCalendarWrapperLeft,
          right: h.inputCalendarWrapperRight,
        },
        e.createElement(yt, {
          width: h.inputCalendarIconWidth,
          height: h.inputCalendarIconHeight,
          color: h.inputCalendarIconColor,
        }),
      ),
    e.createElement(Ht, {
      readOnly: !0,
      tabIndex: f ? -1 : 0,
      border: h.inputBorder,
      p: h.inputPadding,
      width: h.inputWidth,
      minHeight: h.inputMinHeight,
      background: h.inputBackground,
      fontFamily: h.fontFamily,
      color: h.inputColor,
      fontSize: h.inputFontSize,
      fontWeight: h.inputFontWeight,
      placeholderColor: h.inputPlaceholderColor,
      placeholderFontWeight: h.inputPlaceholderFontWeight,
      boxShadow: i ? h.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: n,
      'aria-label': l,
      value: s,
      autoComplete: 'off',
      onFocus: d,
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
var Ot,
  It,
  zt,
  Pt = Pe(Ze, Ze, Ze, Xe, Ze, $e),
  At = l('div')(Ot || (Ot = Se(['\n  ', '\n'], ['\n  ', '\n'])), Pt),
  Yt = l(At)(
    zt ||
      (zt = Se(
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
        n = e.selectDateBorderColor
      return (
        t &&
        d(
          It ||
            (It = Se(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          n,
        )
      )
    },
  )
function jt(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    i = t.vertical,
    l = o(c),
    d = vt({
      fontFamily: kt.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: bt('silverCloud', kt.colors.silverCloud, l),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: bt('charcoal', kt.colors.charcoal, l),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: bt('primaryColor', kt.colors.primaryColor, l),
      selectDatePadding: '0',
    })
  return e.createElement(
    Dt,
    {p: d.selectDatePadding},
    e.createElement(
      At,
      {
        fontFamily: d.fontFamily,
        fontSize: d.selectDateLabelFontSize,
        color: d.selectDateLabelColor,
        m: d.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Yt,
      {
        as: 'span',
        color: d.selectDateDateColor,
        fontSize: d.selectDateDateFontSize,
        fontWeight: d.selectDateDateFontWeight,
        fontFamily: d.fontFamily,
        p: d.selectDateDatePadding,
        isActive: r,
        selectDateBorderColor: d.selectDateBorderColor,
      },
      a,
    ),
  )
}
var Nt,
  Gt,
  $t,
  Vt,
  Xt,
  Ut = function(t) {
    var n = t.label,
      r = o(c),
      a = vt({
        fontFamily: kt.fontFamily,
        monthLabelColor: bt('darcula', kt.colors.darcula, r),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      At,
      {
        fontFamily: a.fontFamily,
        fontSize: a.monthLabelFontSize,
        fontWeight: a.monthLabelFontWeight,
        lineHeight: a.monthLabelLineHeight,
        color: a.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      n,
    )
  },
  Zt = function(t) {
    var n = t.label,
      r = o(c),
      a = vt({
        fontFamily: kt.fontFamily,
        dayLabelColor: bt('silverCloud', kt.colors.silverCloud, r),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      At,
      {
        fontFamily: a.fontFamily,
        fontSize: a.dayLabelFontSize,
        fontWeight: a.dayLabelFontWeight,
        color: a.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      n,
    )
  },
  Jt = {
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
  Qt = e.createContext(Jt),
  _t = lt({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  qt = lt({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Kt = lt({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  en = lt({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  tn = lt({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  nn = lt({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  rn = Pe(ot, tt, Xe, Ze, Ze, Ze),
  an = l('button')(
    Xt ||
      (Xt = Se(
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
    _t,
    qt,
    rn,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        d(
          Nt ||
            (Nt = Se(
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
              $t ||
                ($t = Se(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              nn,
              en,
            )
          : ''
        : d(
            Gt ||
              (Gt = Se(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            tn,
            Kt,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return d(
        Vt ||
          (Vt = Se(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function on(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? a : e ? i : n ? l : o
}
function ln(n) {
  var l = n.day,
    d = n.date,
    s = i(null),
    u = o(Qt),
    p = u.focusedDate,
    g = u.isDateFocused,
    f = u.isDateSelected,
    m = u.isDateHovered,
    h = u.isDateBlocked,
    D = u.isFirstOrLastSelectedDate,
    y = u.onDateSelect,
    v = u.onDateFocus,
    k = u.onDateHover,
    b = u.onDayRender,
    x = (function(e) {
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
        g = e.dayRef,
        f = r(
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
          g && g.current && i(n) && g.current.focus()
        },
        [g, n, i],
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
        onClick: h ? function() {} : f,
        onMouseEnter: m,
      }
    })({
      date: d,
      focusedDate: p,
      isDateFocused: g,
      isDateSelected: f,
      isDateHovered: m,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: D,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: k,
      dayRef: s,
    }),
    S = o(c),
    w = bt('white', kt.colors.white, S),
    C = bt('mud', kt.colors.mud, S),
    B = bt('primaryColor', kt.colors.primaryColor, S),
    F = bt('accessibility', kt.colors.accessibility, S),
    W = bt('selectedDay', kt.colors.selectedDay, S),
    L = bt('selectedDayHover', kt.colors.selectedDayHover, S),
    M = bt('normalDayHover', kt.colors.normalDayHover, S),
    R = vt({
      fontFamily: kt.fontFamily,
      daySize: kt.daySize,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: C,
      dayHoverColor: C,
      daySelectedColor: w,
      daySelectedHoverColor: w,
      dayHoverRangeColor: w,
      daySelectedFirstOrLastColor: w,
      dayBackground: w,
      dayHoverBackground: M,
      daySelectedBackground: W,
      daySelectedHoverBackground: L,
      dayHoverRangeBackground: W,
      daySelectedFirstOrLastBackground: B,
      dayBorderColor: M,
      daySelectedBorderColor: W,
      dayHoverRangeBorderColor: W,
      daySelectedFirstOrLastBorderColor: B,
      dayAccessibilityBorderColor: F,
    }),
    H = a(
      function() {
        return on(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastBorderColor,
          selected: R.daySelectedBorderColor,
          normal: R.dayBorderColor,
          rangeHover: R.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, R, x.isWithinHoverRange],
    ),
    T = a(
      function() {
        return on(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastBackground,
          selected: R.daySelectedBackground,
          normal: R.dayBackground,
          rangeHover: R.dayHoverRangeBackground,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, R, x.isWithinHoverRange],
    ),
    E = a(
      function() {
        return on(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastColor,
          selected: R.daySelectedColor,
          normal: R.dayColor,
          rangeHover: R.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, R, x.isWithinHoverRange],
    )
  return e.createElement(
    an,
    xe({}, x, {
      ref: s,
      dayHeight: R.daySize,
      dayWidth: R.daySize,
      background: T,
      color: E,
      fontFamily: R.fontFamily,
      fontWeight: R.dayFontWeight,
      fontSize: R.dayFontSize,
      daySelectedHoverBackground: R.daySelectedHoverBackground,
      dayHoverBackground: R.dayHoverBackground,
      dayHoverColor: R.dayHoverColor,
      daySelectedHoverColor: R.daySelectedHoverColor,
      borderAccessibilityColor: R.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        H +
        ',\n        0 1px 0 0 ' +
        H +
        ',\n        1px 1px 0 0 ' +
        H +
        ',\n        1px 0 0 0 ' +
        H +
        ' inset,\n        0 1px 0 0 ' +
        H +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + d.toDateString(),
    }),
    'function' == typeof b
      ? b(d)
      : e.createElement(
          mt,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          l,
        ),
  )
}
var cn,
  dn,
  sn = s(
    cn ||
      (cn = Se(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  un = l('div')(
    dn ||
      (dn = Se(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    sn,
  ),
  pn = function(t) {
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
      d = vt({daySize: kt.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      un,
      null,
      e.createElement(
        mt,
        {justifyContent: 'center', m: d.monthLabelMargin},
        e.createElement(Ut, {label: c}),
      ),
      e.createElement(
        gt,
        {daySizeGridTemplateColumns: d.daySize},
        l.map(function(t) {
          return e.createElement(
            mt,
            {key: t, justifyContent: 'center', m: d.monthDayLabelMargin},
            e.createElement(Zt, {label: t}),
          )
        }),
      ),
      e.createElement(
        gt,
        {daySizeGridTemplateColumns: d.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(ln, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var gn,
  fn,
  mn,
  hn = l('button')(
    gn ||
      (gn = Se(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Dn = l(function(t) {
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
  })(mn || (mn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
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
function yn(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    i = o(c),
    l = vt({
      fontFamily: kt.fontFamily,
      resetDatesIconColor: bt('mud', kt.colors.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: bt('darcula', kt.colors.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    hn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(Dn, {
      height: l.resetDatesIconHeight,
      width: l.resetDatesIconWidth,
      color: l.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      At,
      {
        m: l.resetDatesTextMargin,
        lineHeight: l.resetDatesTextLineHeight,
        fontFamily: l.fontFamily,
        fontSize: l.resetDatesTextFontSize,
        color: l.resetDatesTextColor,
      },
      r,
    ),
  )
}
var vn,
  kn,
  bn = l('svg')(kn || (kn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return d(
      vn ||
        (vn = Se(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function xn(t) {
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
    bn,
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
var Sn,
  wn = Pe(Ue, Ue, tt, $e, Qe),
  Cn = l('button')(
    Sn ||
      (Sn = Se(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    wn,
  )
function Bn(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    i = t.rtl,
    l = t.ariaLabel,
    d = o(c),
    s = vt({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: bt('white', kt.colors.white, d),
      navButtonBorder: '1px solid ' + bt('silverCloud', kt.colors.silverCloud, d),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: bt('greey', kt.colors.greey, d),
    })
  function u() {
    return 'next' !== n || a
      ? 'next' === n && a
        ? 'down'
        : 'prev' !== n || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    Cn,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== u() || i ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && i ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': l,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(xn, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: u(),
    }),
  )
}
function Fn(t) {
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
var Wn,
  Ln,
  Mn = Pe($e, Xe, Ze, Ze, Ze),
  Rn = l('div')(
    Wn ||
      (Wn = Se(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    Mn,
  ),
  Hn = l('button')(
    Ln ||
      (Ln = Se(
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
    Rn,
    Xe,
    Xe,
  )
function Tn(t) {
  var n = t.onClick,
    r = t.rtl,
    a = t.closeText,
    i = o(c),
    l = vt({
      fontFamily: kt.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: bt('silverCloud', kt.colors.silverCloud, i),
      closeHoverColor: bt('darcula', kt.colors.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    Hn,
    {
      onClick: n,
      color: l.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(Fn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      Rn,
      {
        m: l.closeMargin,
        color: l.closeColor,
        fontSize: l.closeFontSize,
        fontFamily: l.fontFamily,
        fontWeight: l.closeFontWeight,
      },
      a,
    ),
  )
}
var En,
  On,
  In,
  zn,
  Pn,
  An,
  Yn = s(
    En ||
      (En = Se(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  jn = Pe(tt, $e, Qe, nt, ot, Ue),
  Nn = l('div')(
    In ||
      (In = Se(
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
    jn,
    function(e) {
      return (
        e.rtl &&
        d(On || (On = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    Yn,
  ),
  Gn = l('div')(
    zn ||
      (zn = Se(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  $n = Pe(Ue, Je),
  Vn = l(Dt)(Pn || (Pn = Se(['\n  ', '\n'], ['\n  ', '\n'])), $n),
  Xn = Pe(Ue, Ue),
  Un = l(gt)(An || (An = Se(['\n  ', '\n'], ['\n  ', '\n'])), Xn)
function Zn(t) {
  var n = t.startDate,
    r = t.endDate,
    a = t.minBookingDate,
    l = t.maxBookingDate,
    d = t.focusedInput,
    s = t.onDatesChange,
    u = t.dayLabelFormat,
    p = t.weekdayLabelFormat,
    g = t.monthLabelFormat,
    f = t.onDayRender,
    m = t.vertical,
    h = void 0 !== m && m,
    D = t.rtl,
    y = void 0 !== D && D,
    v = t.showResetDates,
    k = void 0 === v || v,
    b = t.showClose,
    x = void 0 === b || b,
    S = t.showSelectedDates,
    w = void 0 === S || S,
    C = t.exactMinBookingDays,
    B = void 0 !== C && C,
    F = t.isDateBlocked,
    W =
      void 0 === F
        ? function() {
            return !1
          }
        : F,
    L = t.minBookingDays,
    M = void 0 === L ? 1 : L,
    R = t.onClose,
    H = void 0 === R ? function() {} : R,
    T = t.numberOfMonths,
    E = t.firstDayOfWeek,
    O = t.displayFormat,
    I = void 0 === O ? 'MM/DD/YYYY' : O,
    z = t.phrases,
    P = void 0 === z ? ct : z,
    A = be({
      startDate: n,
      endDate: r,
      focusedInput: d,
      onDatesChange: s,
      minBookingDate: a,
      maxBookingDate: l,
      minBookingDays: M,
      isDateBlocked: W,
      exactMinBookingDays: B,
      numberOfMonths: T,
      firstDayOfWeek: E,
    }),
    Y = A.activeMonths,
    j = A.isDateSelected,
    N = A.isFirstOrLastSelectedDate,
    G = A.isDateHovered,
    $ = A.firstDayOfWeek,
    V = A.onDateSelect,
    X = A.onResetDates,
    U = A.goToPreviousMonths,
    Z = A.goToNextMonths,
    J = A.numberOfMonths,
    Q = A.hoveredDate,
    _ = A.onDateHover,
    q = A.isDateFocused,
    K = A.focusedDate,
    ee = A.onDateFocus,
    ae = A.isDateBlocked,
    oe = i(null),
    ie = o(c),
    le = vt({
      datepickerBackground: '#ffffff',
      datepickerPadding: h ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: h ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: h ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: h ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: h ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: y ? 'unset' : h ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: y ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: h ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: bt('silverCloud', kt.colors.silverCloud, ie),
      datepickerMonthsWrapperMargin: x || w ? (w ? '28px 0 0' : '48px 0 0') : 'unset',
      datepickerPreviousMonthButtonPosition: h ? 'relative' : 'absolute',
      datepickerPreviousMonthButtonTop: h ? 'unset' : '-5px',
      datepickerPreviousMonthButtonLeft: h ? 'unset' : '0',
      datepickerPreviousMonthButtonRight: 'unset',
      datepickerPreviousMonthButtonBottom: 'unset',
      datepickerNextMonthButtonPosition: h ? 'relative' : 'absolute',
      datepickerNextMonthButtonTop: h ? 'unset' : '-5px',
      datepickerNextMonthButtonLeft: 'unset',
      datepickerNextMonthButtonRight: h ? 'unset' : '0',
      datepickerNextMonthButtonBottom: 'unset',
      datepickerMonthsGridGap: h ? '32px' : '0 32px',
      datepickerMonthsGridOverflow: 'auto',
      datepickerMonthsGridHeight: h ? '50vh' : '100%',
      datepickerResetDatesWrapperMargin: h ? 'unset' : '32px 0 0',
      datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
    })
  function ce() {
    oe && oe.current && h && (oe.current.scrollTop = 0)
  }
  function de() {
    Z(), ce()
  }
  function se() {
    U(), ce()
  }
  return e.createElement(
    Qt.Provider,
    {
      value: {
        rtl: y,
        isDateFocused: q,
        isDateSelected: j,
        isDateHovered: G,
        isFirstOrLastSelectedDate: N,
        onDateFocus: ee,
        focusedDate: K,
        onDateSelect: V,
        onDateHover: _,
        onDayRender: f,
        isDateBlocked: ae,
      },
    },
    e.createElement(
      Nn,
      {
        background: le.datepickerBackground,
        p: le.datepickerPadding,
        borderRadius: le.datepickerBorderRadius,
        position: le.datepickerPosition,
        boxShadow: le.datepickerBoxShadow,
        width: le.datepickerWidth,
        rtl: y,
      },
      x &&
        e.createElement(
          Vn,
          {
            m: le.datepickerCloseWrapperMargin,
            display: le.datepickerCloseWrapperDisplay,
            justifyContent: le.datepickerCloseWrapperJustifyContent,
            position: le.datepickerCloseWrapperPosition,
            right: le.datepickerCloseWrapperRight,
            top: le.datepickerCloseWrapperTop,
            left: le.datepickerCloseWrapperLeft,
            bottom: le.datepickerCloseWrapperBottom,
            zIndex: le.datepickerCloseWrapperZIndex,
          },
          e.createElement(Tn, {onClick: H, rtl: y, closeText: P.close}),
        ),
      w &&
        e.createElement(
          Gn,
          null,
          e.createElement(
            gt,
            {gridTemplateColumns: le.datepickerSelectDateGridTemplateColumns},
            e.createElement(jt, {
              title: P.datepickerStartDateLabel,
              date: De(n, I, P.datepickerStartDatePlaceholder),
              isActive: d === ve,
              vertical: h,
            }),
            e.createElement(
              mt,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(Et, {
                height: le.datepickerSelectDateArrowIconHeight,
                width: le.datepickerSelectDateArrowIconWidth,
                iconColor: le.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(jt, {
              title: P.datepickerEndDateLabel,
              date: De(r, I, P.datepickerEndDatePlaceholder),
              isActive: d === ke,
              vertical: h,
            }),
          ),
        ),
      e.createElement(
        Dt,
        {position: 'relative'},
        e.createElement(
          Dt,
          {m: le.datepickerMonthsWrapperMargin},
          e.createElement(
            Un,
            {
              'data-testid': 'MonthGrid',
              overflow: le.datepickerMonthsGridOverflow,
              height: le.datepickerMonthsGridHeight,
              gridTemplateColumns: h ? '1fr' : 'repeat(' + J + ', 1fr)',
              gridGap: le.datepickerMonthsGridGap,
              pr: y ? '1px' : '0',
              ref: oe,
              onMouseLeave: function() {
                Q && _(null)
              },
            },
            Y.map(function(t) {
              return e.createElement(pn, {
                key: 'month-' + t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: $,
                dayLabelFormat: u || te,
                weekdayLabelFormat: p || ne,
                monthLabelFormat: g || re,
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
            k &&
              e.createElement(
                mt,
                {flex: '1', m: le.datepickerResetDatesWrapperMargin},
                e.createElement(yn, {rtl: y, onResetDates: X, text: P.resetDates}),
              ),
            e.createElement(
              Dt,
              {
                position: le.datepickerPreviousMonthButtonPosition,
                top: le.datepickerPreviousMonthButtonTop,
                left: le.datepickerPreviousMonthButtonLeft,
                right: le.datepickerPreviousMonthButtonRight,
                bottom: le.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(Bn, {
                type: 'prev',
                onClick: y && !h ? de : se,
                vertical: h,
                rtl: y,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              Dt,
              {
                position: le.datepickerNextMonthButtonPosition,
                top: le.datepickerNextMonthButtonTop,
                left: le.datepickerNextMonthButtonLeft,
                right: le.datepickerNextMonthButtonRight,
                bottom: le.datepickerNextMonthButtonBottom,
              },
              e.createElement(Bn, {
                type: 'next',
                onClick: y && !h ? se : de,
                vertical: h,
                rtl: y,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var Jn,
  Qn,
  _n,
  qn,
  Kn,
  er = l(Dt)(Qn || (Qn = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(Jn || (Jn = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  tr = Pe(Xe, Xe),
  nr = l(Et)(qn || (qn = Se(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), tr, function(e) {
    return (
      e.rtl &&
      d(
        _n ||
          (_n = Se(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  rr = Pe(tt, Qe, Qe),
  ar = l(gt)(Kn || (Kn = Se(['\n  ', '\n'], ['\n  ', '\n'])), rr)
function or(n) {
  var r = n.startDate,
    a = n.endDate,
    l = n.minBookingDate,
    d = n.maxBookingDate,
    s = n.firstDayOfWeek,
    u = n.onFocusChange,
    p = n.numberOfMonths,
    g = n.focusedInput,
    f = n.onDatesChange,
    m = n.exactMinBookingDays,
    h = n.dayLabelFormat,
    D = n.weekdayLabelFormat,
    y = n.monthLabelFormat,
    v = n.onDayRender,
    k = n.showClose,
    b = void 0 === k || k,
    x = n.showSelectedDates,
    S = void 0 === x || x,
    w = n.showResetDates,
    C = void 0 === w || w,
    B = n.vertical,
    F = void 0 !== B && B,
    W = n.rtl,
    L = void 0 !== W && W,
    M = n.isDateBlocked,
    R =
      void 0 === M
        ? function() {
            return !1
          }
        : M,
    H = n.minBookingDays,
    T = void 0 === H ? 1 : H,
    E = n.onClose,
    O = void 0 === E ? function() {} : E,
    I = n.showStartDateCalendarIcon,
    z = void 0 === I || I,
    P = n.showEndDateCalendarIcon,
    A = void 0 === P || P,
    Y = n.displayFormat,
    j = void 0 === Y ? 'MM/DD/YYYY' : Y,
    N = n.phrases,
    G = void 0 === N ? dt : N,
    $ = n.placement,
    V = void 0 === $ ? 'bottom' : $,
    X = i(null),
    U = o(c),
    Z = vt(
      xe(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: F ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: bt('graci', kt.colors.graci, U),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: F ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: F ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(V, L),
      ),
    )
  function J(e) {
    null !== g && X && X.current && !X.current.contains(e.target) && u(null)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', J),
        function() {
          window.removeEventListener('click', J)
        }
      )
    }),
    e.createElement(
      er,
      {rtl: L, position: 'relative', ref: X},
      e.createElement(
        ar,
        {
          background: Z.dateRangeBackground,
          gridTemplateColumns: Z.dateRangeGridTemplateColumns,
          border: Z.dateRangeBorder,
          borderRadius: Z.dateRangeBorderRadius,
        },
        e.createElement(Tt, {
          id: 'startDate',
          ariaLabel: G.startDateAriaLabel,
          placeholder: G.startDatePlaceholder,
          value: De(r, j, ''),
          onClick: function() {
            return u(ve)
          },
          showCalendarIcon: z,
          vertical: F,
          isActive: g === ve,
          padding: Z.dateRangeStartDateInputPadding,
          rtl: L,
        }),
        e.createElement(
          mt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(nr, {
            width: Z.dateRangeArrowIconWidth,
            height: Z.dateRangeArrowIconHeight,
            color: Z.dateRangeArrowIconColor,
            opacity: Z.dateRangeArrowIconOpacity,
            rtl: L,
          }),
        ),
        e.createElement(Tt, {
          id: 'endDate',
          ariaLabel: G.endDateAriaLabel,
          placeholder: G.endDatePlaceholder,
          value: De(a, j, ''),
          onClick: function() {
            return u(r ? ke : ve)
          },
          showCalendarIcon: A,
          vertical: F,
          isActive: g === ke,
          padding: Z.dateRangeEndDateInputPadding,
          rtl: L,
          disableAccessibility: g === ve,
        }),
      ),
      e.createElement(
        Dt,
        {
          position: Z.dateRangeDatepickerWrapperPosition,
          bottom: Z.dateRangeDatepickerWrapperBottom,
          left: Z.dateRangeDatepickerWrapperLeft,
          top: Z.dateRangeDatepickerWrapperTop,
          right: Z.dateRangeDatepickerWrapperRight,
        },
        null !== g &&
          e.createElement(Zn, {
            onClose: function() {
              O(), u(null)
            },
            startDate: r,
            endDate: a,
            minBookingDate: l,
            maxBookingDate: d,
            firstDayOfWeek: s,
            numberOfMonths: p,
            focusedInput: g,
            displayFormat: j,
            onDatesChange: f,
            minBookingDays: T,
            isDateBlocked: R,
            exactMinBookingDays: m,
            showResetDates: C,
            vertical: F,
            showSelectedDates: S,
            showClose: b,
            rtl: L,
            dayLabelFormat: h,
            weekdayLabelFormat: D,
            monthLabelFormat: y,
            onDayRender: v,
            phrases: G,
          }),
      ),
    )
  )
}
var ir,
  lr,
  cr = l(Dt)(lr || (lr = Se(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(ir || (ir = Se(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function dr(n) {
  var r = n.date,
    a = n.minBookingDate,
    o = n.maxBookingDate,
    l = n.firstDayOfWeek,
    c = n.onFocusChange,
    d = n.showDatepicker,
    s = n.onDateChange,
    u = n.dayLabelFormat,
    p = n.weekdayLabelFormat,
    g = n.monthLabelFormat,
    f = n.onDayRender,
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
    C = n.isDateBlocked,
    B =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    F = n.onClose,
    W = void 0 === F ? function() {} : F,
    L = n.showCalendarIcon,
    M = void 0 === L || L,
    R = n.displayFormat,
    H = void 0 === R ? 'MM/DD/YYYY' : R,
    T = n.phrases,
    E = void 0 === T ? st : T,
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
      cr,
      {rtl: w, position: 'relative', ref: z},
      e.createElement(Tt, {
        id: 'startDate',
        ariaLabel: E.dateAriaLabel,
        placeholder: E.datePlaceholder,
        value: De(r, H, ''),
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
          e.createElement(Zn, {
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
            displayFormat: H,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                n = e.startDate
              s({showDatepicker: null !== t, date: n})
            },
            isDateBlocked: B,
            showResetDates: k,
            vertical: x,
            showSelectedDates: !1,
            showClose: y,
            rtl: w,
            dayLabelFormat: u,
            weekdayLabelFormat: p,
            monthLabelFormat: g,
            onDayRender: f,
            phrases: E,
          }),
      ),
    )
  )
}
export {
  or as DateRangeInput,
  dr as DateSingleInput,
  Zn as Datepicker,
  ke as END_DATE,
  ve as START_DATE,
  dt as dateRangeInputPhrases,
  st as dateSingleInputPhrases,
  ct as datepickerPhrases,
}
