import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as a,
  useContext as o,
  useRef as i,
} from 'react'
import l, {ThemeContext as c, css as d} from 'styled-components'
var s = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  u = function(e) {
    return e instanceof Date
  },
  p = 36e5,
  f = /[T ]/,
  g = /:/,
  h = /^(\d{2})$/,
  m = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  y = /^(\d{4})/,
  D = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  v = /^-(\d{2})$/,
  b = /^-?(\d{3})$/,
  k = /^-?(\d{2})-?(\d{2})$/,
  x = /^-?W(\d{2})$/,
  S = /^-?W(\d{2})-?(\d{1})$/,
  w = /^(\d{2}([.,]\d*)?)$/,
  C = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  B = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  F = /([Z+-].*)$/,
  M = /^(Z)$/,
  L = /^([+-])(\d{2})$/,
  W = /^([+-])(\d{2}):?(\d{2})$/
function R(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var H,
  E = function(e, t) {
    if (u(e)) return new Date(e.getTime())
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
        if ((g.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = F.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = m[t],
          a = D[t]
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
        if ((n = v.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = b.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = k.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = x.exec(e))
          ? R(t, parseInt(n[1], 10) - 1)
          : (n = S.exec(e))
          ? R(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (d) {
      var H,
        E = d.getTime(),
        T = 0
      if (
        (i.time &&
          (T = (function(e) {
            var t, n, r
            if ((t = w.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * p
            if ((t = C.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * p + 6e4 * r
              )
            if ((t = B.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * p + 6e4 * r + 1e3 * a
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (H =
            6e4 *
            ((a = M.exec(r))
              ? 0
              : (a = L.exec(r))
              ? ((o = 60 * parseInt(a[2], 10)), '+' === a[1] ? -o : o)
              : (a = W.exec(r))
              ? ((o = 60 * parseInt(a[2], 10) + parseInt(a[3], 10)), '+' === a[1] ? -o : o)
              : 0))
      else {
        var z = E + T,
          O = new Date(z)
        H = s(O)
        var I = new Date(z)
        I.setDate(O.getDate() + 1)
        var P = s(I) - s(O)
        P > 0 && (H += P)
      }
      return new Date(E + T + H)
    }
    return new Date(e)
  },
  T = function(e) {
    var t = E(e)
    return t.setHours(0, 0, 0, 0), t
  },
  z = function(e) {
    var t = E(e)
    return (
      (function(e, t) {
        var n = T(e),
          r = T(t),
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
  O = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = E(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  I = function(e) {
    return O(e, {weekStartsOn: 1})
  },
  P = function(e) {
    var t = E(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = I(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = I(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  A = function(e) {
    var t = E(e),
      n =
        I(t).getTime() -
        (function(e) {
          var t = P(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), I(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  Y = function(e) {
    if (u(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  j = [
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
  N = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = j
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  G = {
    distanceInWords: ((H = {
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
            'string' == typeof H[e]
              ? H[e]
              : 1 === t
              ? H[e].one
              : H[e].other.replace('{{count}}', t)),
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
        {formatters: c, formattingTokensRegExp: N(c)}
      )
    })(),
  },
  $ = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return X(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return X(e.getDate(), 2)
    },
    DDD: function(e) {
      return z(e)
    },
    DDDD: function(e) {
      return X(z(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return A(e)
    },
    WW: function(e) {
      return X(A(e), 2)
    },
    YY: function(e) {
      return X(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return X(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(P(e)).substr(2)
    },
    GGGG: function(e) {
      return P(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return X(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return X($.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return X(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return X(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return X(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return X(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return V(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return V(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function V(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + X(Math.floor(r / 60), 2) + t + X(a, 2)
}
function X(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var U = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (n || {}).locale,
      o = G.format.formatters,
      i = G.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var l = E(e)
    return Y(l)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (a = t[i[r]] || $[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, $)) : (t += i[n])
            return t
          }
        })(r, o, i)(l)
      : 'Invalid Date'
  },
  Z = function(e, t) {
    var n = E(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  J = function(e, t, n) {
    var r = E(e),
      a = void 0 !== n ? n : 1,
      o = E(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(E(l)), l.setDate(l.getDate() + a)
    return i
  },
  Q = function(e) {
    var t = E(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  _ = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = E(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  q = function(e) {
    return E(e).getDay()
  },
  K = function(e) {
    var t = E(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var ee = function(e) {
    return U(e, 'DD')
  },
  te = function(e) {
    return U(e, 'dd')
  },
  ne = function(e) {
    return U(e, 'MMMM YYYY')
  }
function re(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    o = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    l = void 0 === i ? ee : i,
    c = e.weekdayLabelFormat,
    d = void 0 === c ? te : c,
    s = e.monthLabelFormat,
    u = void 0 === s ? ne : s
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
                    return U(e, 'DD')
                  }
                : o,
            l = new Date(t, n),
            c = K(l),
            d = q(c),
            s = Q(l),
            u = Array.from(Array(d >= a ? d - a : a).keys()).fill(0),
            p = J(c, s).map(function(e) {
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
                    return U(e, 'dd')
                  }
                : a,
            i = new Date()
          return J(Z(O(i), r), Z(_(i), r)).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: d})
      },
      [o, d],
    ),
    monthLabel: u(new Date(t, n)),
  }
}
var ae = function(e, t) {
    var n = E(e),
      r = E(t)
    return n.getTime() < r.getTime()
  },
  oe = function(e, t) {
    var n = E(e),
      r = E(t)
    return n.getTime() > r.getTime()
  },
  ie = function(e, t, n) {
    var r = E(e).getTime(),
      a = E(t).getTime(),
      o = E(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  le = function(e, t) {
    var n = T(e),
      r = T(t)
    return n.getTime() === r.getTime()
  },
  ce = function(e, t) {
    var n = E(e),
      r = E(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  de = function(e) {
    return E(e).getFullYear()
  },
  se = function(e) {
    return E(e).getMonth()
  },
  ue = function() {
    return T(new Date())
  },
  pe = function(e, t) {
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
  var t = K(e)
  return {year: de(t), month: se(t), date: t}
}
function ge(e, t) {
  var n = fe(t || ue()),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = pe(e[e.length - 1].date, 1)), e.concat([fe(r)])
      }, a)),
    a
  )
}
function he(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = pe(r, n)), n > 0 ? e.concat([fe(r)]) : [fe(r)].concat(e)
  }, [])
}
function me(e, t, n) {
  return e && 'string' == typeof t ? U(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ye(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !ae(t, Z(i, -1)),
    d = !l || !oe(Z(t, a - 1), l)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && c && d) || (t && a > 0 && o && !i && !l))
    return J(t, Z(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var s = Z(t, a - 1)
    return (
      !ae(n, s) &&
      J(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var De = 'startDate',
  ve = 'endDate'
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
    h = void 0 === g ? 2 : g,
    m = e.firstDayOfWeek,
    y = void 0 === m ? 1 : m,
    D = e.isDateBlocked,
    v =
      void 0 === D
        ? function() {
            return !1
          }
        : D,
    b = n(function() {
      return ge(h, a)
    }),
    k = b[0],
    x = b[1],
    S = n(null),
    w = S[0],
    C = S[1],
    B = n(a),
    F = B[0],
    M = B[1],
    L = r(
      function(e) {
        M(e), (!F || (F && !ce(e, F))) && x(ge(h, e))
      },
      [M, x, h, F],
    ),
    W = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && ie(e, t, n)
        })(e, a, o)
      },
      [a, o],
    ),
    R = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && le(e, t)) || (n && le(e, n)))
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
            (d && ae(t, d)) ||
            (s && oe(t, s)) ||
            (o && !i && c > 1 && ie(t, o, Z(o, c - 2))) ||
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
        return !!F && le(e, F)
      },
      [F],
    ),
    T = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && ie(t, o, Z(o, i - 1))
            ? J(o, Z(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && ie(t, n, Z(n, i - 1)) && le(n, o) && i > 1
            ? J(n, Z(n, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || ae(o, n) || !ie(t, n, o)) &&
              J(n, o).reduce(function(e, t) {
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
  function z(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      F ||
      (L(new Date()), x(ge(h, new Date())))
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', z),
        function() {
          window.removeEventListener('keydown', z)
        }
      )
    }),
    {
      firstDayOfWeek: y,
      activeMonths: k,
      isDateSelected: W,
      isDateHovered: T,
      isFirstOrLastSelectedDate: R,
      isDateBlocked: H,
      numberOfMonths: h,
      isDateFocused: E,
      focusedDate: F,
      hoveredDate: w,
      onResetDates: function() {
        d({startDate: null, endDate: null, focusedInput: De})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !H(e) || (a && le(e, a)),
              n = !l || !ae(e, Z(l, -1)),
              r = !c || !oe(e, c),
              i = Z(e, f - 1),
              d = !l || !ae(i, l),
              s = !c || !oe(i, c),
              p = u && f > 1 && n && r && d && s,
              g = a && !o && !u && n && r,
              h = !(f > 1 && a) || ie(e, a, Z(a, f - 2)),
              m = a && le(e, a) && h
            t && (p || g || m) ? C(e) : null !== w && C(null)
          }
        } else C(null)
      },
      onDateSelect: function(e) {
        ;(i === ve || i === De) &&
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
          ? d({startDate: e, endDate: Z(e, f - 1), focusedInput: null})
          : ((i === ve && a && ae(e, a)) || (i === De && o && oe(e, o))) &&
            !u &&
            ye({minBookingDays: f, isDateBlocked: v, startDate: e, endDate: null})
          ? d({endDate: null, startDate: e, focusedInput: ve})
          : i === De && !u && ye({minBookingDays: f, isDateBlocked: v, endDate: o, startDate: e})
          ? d({endDate: o, startDate: e, focusedInput: ve})
          : i === De && !u && ye({minBookingDays: f, isDateBlocked: v, endDate: null, startDate: e})
          ? d({endDate: null, startDate: e, focusedInput: ve})
          : i === ve &&
            a &&
            !ae(e, a) &&
            !u &&
            ye({minBookingDays: f, isDateBlocked: v, startDate: a, endDate: e}) &&
            d({startDate: a, endDate: e, focusedInput: null}),
          (!F || (F && !ce(e, F))) && x(ge(h, e))
      },
      onDateFocus: L,
      goToPreviousMonths: function() {
        x(he(k, h, -1)), M(null)
      },
      goToNextMonths: function() {
        x(he(k, h, 1)), M(null)
      },
    }
  )
}
var ke = function() {
  return (ke =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function xe(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var Se = Object.getOwnPropertySymbols,
  we = Object.prototype.hasOwnProperty,
  Ce = Object.prototype.propertyIsEnumerable
var Be = (function() {
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
          for (var i in (n = Object(arguments[o]))) we.call(n, i) && (a[i] = n[i])
          if (Se) {
            r = Se(n)
            for (var l = 0; l < r.length; l++) Ce.call(n, r[l]) && (a[r[l]] = n[r[l]])
          }
        }
        return a
      },
  Fe = function(e, t) {
    var n = Be({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && Be(n, (((a = {})[r] = Be(e[r], t[r])), a))
    }
    return n
  },
  Me = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  Le = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  We = function(e, t) {
    return Re(t, e, e)
  },
  Re = function(e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  He = function(e) {
    var t = {},
      n = function(n) {
        var r = {}
        for (var a in n)
          if (e[a]) {
            var o = e[a],
              i = n[a],
              l = Re(n.theme, o.scale, o.defaults)
            if ('object' != typeof i) Be(r, o(i, l))
            else {
              if (
                ((t.breakpoints = t.breakpoints || Re(n.theme, 'breakpoints', Me.breakpoints)),
                Array.isArray(i))
              ) {
                ;(t.media = t.media || [null].concat(t.breakpoints.map(Le))),
                  (r = Fe(r, Ee(t.media, o, l, i)))
                continue
              }
              null !== i && (r = Fe(r, Te(t.breakpoints, o, l, i)))
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
        void 0 !== c && Be(a, l ? (((i = {})[l] = Be({}, a[l], c)), i) : c)
      }),
      a
    )
  },
  Te = function(e, t, n, r) {
    var a = {}
    for (var o in r) {
      var i = e[o],
        l = t(r[o], n)
      if (i) {
        var c,
          d = Le(i)
        Be(a, (((c = {})[d] = Be({}, a[d], l)), c))
      } else Be(a, l)
    }
    return a
  },
  ze = function(e) {
    var t = e.properties,
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? We : a,
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
  Oe = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(n) {
        var r = e[n]
        t[n] = ze(!0 !== r ? r : {property: n, scale: n})
      }),
      He(t)
    )
  }
function Ie() {
  return (Ie =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var Pe = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Ae = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Ye = function(e, t) {
    if (!Ae(e)) return Re(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Re(t, r, r)
    return Ae(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
  },
  je = {}
;(je.margin = {
  margin: {property: 'margin', scale: 'space', transform: Ye, defaultScale: Pe.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: Ye, defaultScale: Pe.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: Ye, defaultScale: Pe.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: Ye, defaultScale: Pe.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: Ye, defaultScale: Pe.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: Ye,
    defaultScale: Pe.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: Ye,
    defaultScale: Pe.space,
  },
}),
  (je.margin.m = je.margin.margin),
  (je.margin.mt = je.margin.marginTop),
  (je.margin.mr = je.margin.marginRight),
  (je.margin.mb = je.margin.marginBottom),
  (je.margin.ml = je.margin.marginLeft),
  (je.margin.mx = je.margin.marginX),
  (je.margin.my = je.margin.marginY),
  (je.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Pe.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Pe.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Pe.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Pe.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Pe.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Pe.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Pe.space},
  }),
  (je.padding.p = je.padding.padding),
  (je.padding.pt = je.padding.paddingTop),
  (je.padding.pr = je.padding.paddingRight),
  (je.padding.pb = je.padding.paddingBottom),
  (je.padding.pl = je.padding.paddingLeft),
  (je.padding.px = je.padding.paddingX),
  (je.padding.py = je.padding.paddingY)
Oe(je.margin), Oe(je.padding)
var Ne = Oe(Ie({}, je.margin, je.padding)),
  Ge = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Ge.bg = Ge.backgroundColor
var $e = Oe(Ge),
  Ve = Oe({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return Re(
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
  Xe = Oe({
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
  Ue = Oe({
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
  Ze = Oe({
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
  Je = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(Je.bgImage = Je.backgroundImage),
  (Je.bgSize = Je.backgroundSize),
  (Je.bgPosition = Je.backgroundPosition),
  (Je.bgRepeat = Je.backgroundRepeat)
var Qe,
  _e,
  qe,
  Ke = Oe(Je),
  et = Oe({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: !0,
    right: !0,
    bottom: !0,
    left: !0,
  }),
  tt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  nt = Oe({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: tt.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: tt.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: tt.space},
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
  rt = Oe({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  }),
  at = function(e) {
    var t,
      n = e.scale,
      r = e.prop,
      a = void 0 === r ? 'variant' : r,
      o = e.key,
      i = function(e, t) {
        return Re(t, e, null)
      }
    i.scale = n || o
    var l = (((t = {})[a] = i), t)
    return He(l)
  },
  ot = (at({key: 'buttons'}),
  at({key: 'textStyles', prop: 'textStyle'}),
  at({key: 'colorStyles', prop: 'colors'}),
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
      (c[t] = ze({properties: l, property: n || t, scale: a, defaultScale: i, transform: o})),
      r && (c[r] = c[t]),
      He(c)
    )
  }),
  it = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  },
  lt = ke({}, it, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  ct = Object.freeze({datepickerPhrases: it, dateRangeInputPhrases: lt}),
  dt = ot({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  st = l('div')(
    Qe ||
      (Qe = xe(
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
    nt,
    nt,
    nt,
    nt,
    nt,
    nt,
    nt,
    nt,
    nt,
    Ue,
    Ue,
    Ne,
    dt,
  ),
  ut = l('div')(
    _e ||
      (_e = xe(
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
    Ne,
    Ue,
    Ue,
    Ue,
    Ue,
    Ue,
    nt,
    Ve,
    Ve,
  ),
  pt = l('div')(
    qe ||
      (qe = xe(
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
    nt,
    Ve,
    Ne,
    Ve,
    et,
    et,
    et,
    et,
    et,
    et,
  )
function ft(t) {
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
function gt(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var a
            return ke({}, n, (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var ht,
  mt,
  yt,
  Dt = {
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
  vt = ot({prop: 'placeholderColor', cssProperty: 'color'}),
  bt = ot({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  kt = l('label')(
    ht ||
      (ht = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    et,
    Ze,
    Ke,
    Ve,
    Ze,
    Ne,
  ),
  xt = l('div')(
    mt ||
      (mt = xe(
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
    et,
    et,
    et,
    et,
    Ve,
    Ve,
  ),
  St = l('input')(
    yt ||
      (yt = xe(
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
    Ke,
    Ne,
    Xe,
    Xe,
    $e,
    Xe,
    Ne,
    Ze,
    Ve,
    Ve,
    rt,
    bt,
    vt,
    bt,
    vt,
    bt,
    vt,
  )
function wt(t) {
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
    f = gt({
      fontFamily: Dt.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: Dt.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: s,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: Dt.colors.silverCloud,
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
    kt,
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
        xt,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(ft, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(St, {
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
function Ct(t) {
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
var Bt,
  Ft,
  Mt,
  Lt = l('div')(
    Bt ||
      (Bt = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Xe,
    Xe,
    Xe,
    $e,
    Xe,
    Ne,
  ),
  Wt = l(Lt)(
    Mt ||
      (Mt = xe(
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
          Ft ||
            (Ft = xe(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Rt(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    o = t.vertical,
    i = gt({
      fontFamily: Dt.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: Dt.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: Dt.colors.charcoal,
      selectDateDateFontSize: o ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    pt,
    {p: i.selectDatePadding},
    e.createElement(
      Lt,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Wt,
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
var Ht,
  Et,
  Tt,
  zt,
  Ot,
  It = function(t) {
    var n = t.label,
      r = gt({
        fontFamily: Dt.fontFamily,
        monthLabelColor: Dt.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Lt,
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
  Pt = function(t) {
    var n = t.label,
      r = gt({
        fontFamily: Dt.fontFamily,
        dayLabelColor: Dt.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Lt,
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
  At = {
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
  Yt = e.createContext(At),
  jt = ot({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nt = ot({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gt = ot({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  $t = ot({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vt = ot({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Xt = ot({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Ut = l('button')(
    Ot ||
      (Ot = xe(
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
    jt,
    Nt,
    rt,
    Ke,
    $e,
    Xe,
    Xe,
    Xe,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        d(
          Ht ||
            (Ht = xe(
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
              Tt ||
                (Tt = xe(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Xt,
              $t,
            )
          : ''
        : d(
            Et ||
              (Et = xe(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Vt,
            Gt,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return d(
        zt ||
          (zt = xe(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Zt(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? a : e ? i : n ? l : o
}
function Jt(n) {
  var l = n.day,
    c = n.date,
    d = i(null),
    s = o(Yt),
    u = s.focusedDate,
    p = s.isDateFocused,
    f = s.isDateSelected,
    g = s.isDateHovered,
    h = s.isDateBlocked,
    m = s.isFirstOrLastSelectedDate,
    y = s.onDateSelect,
    D = s.onDateFocus,
    v = s.onDateHover,
    b = s.onDayRender,
    k = (function(e) {
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
      var m = d(n) && !c(n)
      return {
        tabIndex: null === a || i(n) ? 0 : -1,
        isSelected: o(n),
        isSelectedStartOrEnd: l(n),
        isWithinHoverRange: c(n),
        disabledDate: m,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(Z(n, 1))
            : 'ArrowLeft' === e.key
            ? u(Z(n, -1))
            : 'ArrowUp' === e.key
            ? u(Z(n, -7))
            : 'ArrowDown' === e.key && u(Z(n, 7))
        },
        onClick: m ? function() {} : g,
        onMouseEnter: h,
      }
    })({
      date: c,
      focusedDate: u,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: g,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: m,
      onDateFocus: D,
      onDateSelect: y,
      onDateHover: v,
      dayRef: d,
    }),
    x = gt({
      fontFamily: Dt.fontFamily,
      daySize: Dt.daySize,
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
        return Zt(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBorderColor,
          selected: x.daySelectedBorderColor,
          normal: x.dayBorderColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, x, k.isWithinHoverRange],
    ),
    w = a(
      function() {
        return Zt(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBackground,
          selected: x.daySelectedBackground,
          normal: x.dayBackground,
          rangeHover: x.dayHoverRangeBackground,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, x, k.isWithinHoverRange],
    ),
    C = a(
      function() {
        return Zt(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastColor,
          selected: x.daySelectedColor,
          normal: x.dayColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, x, k.isWithinHoverRange],
    )
  return e.createElement(
    Ut,
    ke({}, k, {
      ref: d,
      dayHeight: x.daySize,
      dayWidth: x.daySize,
      background: w,
      color: C,
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
    'function' == typeof b
      ? b(c)
      : e.createElement(
          ut,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          l,
        ),
  )
}
var Qt,
  _t = l('div')(
    Qt ||
      (Qt = xe(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  qt = function(t) {
    var n = t.year,
      r = t.month,
      a = t.firstDayOfWeek,
      o = re({
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
      d = gt({daySize: Dt.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      _t,
      null,
      e.createElement(
        ut,
        {justifyContent: 'center', m: d.monthLabelMargin},
        e.createElement(It, {label: c}),
      ),
      e.createElement(
        st,
        {daySizeGridTemplateColumns: d.daySize},
        l.map(function(t) {
          return e.createElement(
            ut,
            {key: t, justifyContent: 'center', m: d.monthDayLabelMargin},
            e.createElement(Pt, {label: t}),
          )
        }),
      ),
      e.createElement(
        st,
        {daySizeGridTemplateColumns: d.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Jt, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Kt,
  en,
  tn,
  nn = l('button')(
    Kt ||
      (Kt = xe(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  rn = l(function(t) {
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
  })(tn || (tn = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(
        en ||
          (en = xe(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function an(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    o = i(null),
    l = gt({
      fontFamily: Dt.fontFamily,
      resetDatesIconColor: Dt.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: Dt.colors.darcula,
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    nn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function() {
        o && o.current && o.current.blur()
      },
      ref: o,
    },
    e.createElement(rn, {
      height: l.resetDatesIconHeight,
      width: l.resetDatesIconWidth,
      color: l.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      Lt,
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
var on,
  ln,
  cn = l('svg')(ln || (ln = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return d(
      on ||
        (on = xe(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function dn(t) {
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
    cn,
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
var sn,
  un = l('button')(
    sn ||
      (sn = xe(
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
    Ve,
    Ve,
    Ke,
    Ne,
    Ze,
  )
function pn(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    o = t.rtl,
    l = t.ariaLabel,
    c = i(null),
    d = gt({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: Dt.colors.greey,
    })
  function s() {
    return 'next' !== n || a
      ? 'next' === n && a
        ? 'down'
        : 'prev' !== n || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    un,
    {
      width: d.navButtonWidth,
      height: d.navButtonHeight,
      background: d.navButtonBackground,
      border: d.navButtonBorder,
      borderRight: 'up' !== s() || o ? d.navButtonBorder : 'unset',
      borderLeft: 'up' === s() && o ? 'unset' : d.navButtonBorder,
      p: d.navButtonPadding,
      type: 'button',
      'aria-label': l,
      onClick: r,
      onMouseUp: function() {
        c && c.current && c.current.blur()
      },
      ref: c,
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(dn, {
      width: d.navButtonIconWidth,
      height: d.navButtonIconHeight,
      color: d.navButtonIconColor,
      direction: s(),
    }),
  )
}
function fn(t) {
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
var gn,
  hn,
  mn = l('div')(
    gn ||
      (gn = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    Ne,
    $e,
    Xe,
    Xe,
    Xe,
  ),
  yn = l('button')(
    hn ||
      (hn = xe(
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
    mn,
    $e,
    $e,
  )
function Dn(t) {
  var n = t.onClick,
    r = t.rtl,
    a = gt({
      fontFamily: Dt.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    yn,
    {
      onClick: n,
      color: a.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(fn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      mn,
      {
        m: a.closeMargin,
        color: a.closeColor,
        fontSize: a.closeFontSize,
        fontFamily: a.fontFamily,
        fontWeight: a.closeFontWeight,
      },
      'Close',
    ),
  )
}
var vn,
  bn,
  kn,
  xn,
  Sn,
  wn = l('div')(
    bn ||
      (bn = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Ke,
    Ne,
    Ze,
    et,
    rt,
    Ve,
    function(e) {
      return (
        e.rtl &&
        d(vn || (vn = xe(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
  ),
  Cn = l('div')(
    kn ||
      (kn = xe(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Bn = l(pt)(xn || (xn = xe(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Ve, Ue),
  Fn = l(st)(Sn || (Sn = xe(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Ve, Ve)
function Mn(t) {
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
    h = t.rtl,
    m = void 0 !== h && h,
    y = t.showResetDates,
    D = void 0 === y || y,
    v = t.showClose,
    b = void 0 === v || v,
    k = t.showSelectedDates,
    x = void 0 === k || k,
    S = t.exactMinBookingDays,
    w = void 0 !== S && S,
    C = t.isDateBlocked,
    B =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    F = t.minBookingDays,
    M = void 0 === F ? 1 : F,
    L = t.onClose,
    W = void 0 === L ? function() {} : L,
    R = t.numberOfMonths,
    H = t.firstDayOfWeek,
    E = t.displayFormat,
    T = void 0 === E ? 'MM/DD/YYYY' : E,
    z = t.phrases,
    O = void 0 === z ? it : z,
    I = be({
      startDate: n,
      endDate: r,
      focusedInput: l,
      onDatesChange: c,
      minBookingDate: a,
      maxBookingDate: o,
      minBookingDays: M,
      isDateBlocked: B,
      exactMinBookingDays: w,
      numberOfMonths: R,
      firstDayOfWeek: H,
    }),
    P = I.activeMonths,
    A = I.isDateSelected,
    Y = I.isFirstOrLastSelectedDate,
    j = I.isDateHovered,
    N = I.firstDayOfWeek,
    G = I.onDateSelect,
    $ = I.onResetDates,
    V = I.goToPreviousMonths,
    X = I.goToNextMonths,
    U = I.numberOfMonths,
    Z = I.hoveredDate,
    J = I.onDateHover,
    Q = I.isDateFocused,
    _ = I.focusedDate,
    q = I.onDateFocus,
    K = I.isDateBlocked,
    re = i(null),
    ae = gt({
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
      datepickerSelectDateArrowIconColor: Dt.colors.silverCloud,
      datepickerMonthsWrapperMargin: b || x ? (x ? '28px 0 0' : '48px 0 0') : 'unset',
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
    re && re.current && g && (re.current.scrollTop = 0)
  }
  function ie() {
    X(), oe()
  }
  function le() {
    V(), oe()
  }
  return e.createElement(
    Yt.Provider,
    {
      value: {
        rtl: m,
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
      wn,
      {
        background: ae.datepickerBackground,
        p: ae.datepickerPadding,
        borderRadius: ae.datepickerBorderRadius,
        position: ae.datepickerPosition,
        boxShadow: ae.datepickerBoxShadow,
        width: ae.datepickerWidth,
        rtl: m,
      },
      b &&
        e.createElement(
          Bn,
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
          e.createElement(Dn, {onClick: W, rtl: m}),
        ),
      x &&
        e.createElement(
          Cn,
          null,
          e.createElement(
            st,
            {gridTemplateColumns: ae.datepickerSelectDateGridTemplateColumns},
            e.createElement(Rt, {
              title: O.datepickerStartDateLabel,
              date: me(n, T, O.datepickerStartDatePlaceholder),
              isActive: l === De,
              vertical: g,
            }),
            e.createElement(
              ut,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(Ct, {
                height: ae.datepickerSelectDateArrowIconHeight,
                width: ae.datepickerSelectDateArrowIconWidth,
                iconColor: ae.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(Rt, {
              title: O.datepickerEndDateLabel,
              date: me(r, T, O.datepickerEndDatePlaceholder),
              isActive: l === ve,
              vertical: g,
            }),
          ),
        ),
      e.createElement(
        pt,
        {position: 'relative'},
        e.createElement(
          pt,
          {m: ae.datepickerMonthsWrapperMargin},
          e.createElement(
            Fn,
            {
              'data-testid': 'MonthGrid',
              overflow: ae.datepickerMonthsGridOverflow,
              height: ae.datepickerMonthsGridHeight,
              gridTemplateColumns: g ? '1fr' : 'repeat(' + U + ', 1fr)',
              gridGap: ae.datepickerMonthsGridGap,
              pr: m ? '1px' : '0',
              ref: re,
              onMouseLeave: function() {
                Z && J(null)
              },
            },
            P.map(function(t) {
              return e.createElement(qt, {
                key: t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: N,
                dayLabelFormat: d || ee,
                weekdayLabelFormat: s || te,
                monthLabelFormat: u || ne,
              })
            }),
          ),
        ),
        e.createElement(
          ut,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            D &&
              e.createElement(
                ut,
                {flex: '1', m: ae.datepickerResetDatesWrapperMargin},
                e.createElement(an, {rtl: m, onResetDates: $, text: O.resetDates}),
              ),
            e.createElement(
              pt,
              {
                position: ae.datepickerPreviousMonthButtonPosition,
                top: ae.datepickerPreviousMonthButtonTop,
                left: ae.datepickerPreviousMonthButtonLeft,
                right: ae.datepickerPreviousMonthButtonRight,
                bottom: ae.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(pn, {
                type: 'prev',
                onClick: m && !g ? ie : le,
                vertical: g,
                rtl: m,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              pt,
              {
                position: ae.datepickerNextMonthButtonPosition,
                top: ae.datepickerNextMonthButtonTop,
                left: ae.datepickerNextMonthButtonLeft,
                right: ae.datepickerNextMonthButtonRight,
                bottom: ae.datepickerNextMonthButtonBottom,
              },
              e.createElement(pn, {
                type: 'next',
                onClick: m && !g ? le : ie,
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
var Ln,
  Wn,
  Rn,
  Hn,
  En,
  Tn = l(pt)(Wn || (Wn = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      d(Ln || (Ln = xe(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  zn = l(Ct)(
    Hn || (Hn = xe(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    $e,
    $e,
    function(e) {
      return (
        e.rtl &&
        d(
          Rn ||
            (Rn = xe(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  On = l(st)(
    En || (En = xe(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ke,
    Ze,
    Ze,
  )
function In(n) {
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
    h = n.weekdayLabelFormat,
    m = n.monthLabelFormat,
    y = n.onDayRender,
    D = n.showClose,
    v = void 0 === D || D,
    b = n.showSelectedDates,
    k = void 0 === b || b,
    x = n.showResetDates,
    S = void 0 === x || x,
    w = n.vertical,
    C = void 0 !== w && w,
    B = n.rtl,
    F = void 0 !== B && B,
    M = n.isDateBlocked,
    L =
      void 0 === M
        ? function() {
            return !1
          }
        : M,
    W = n.minBookingDays,
    R = void 0 === W ? 1 : W,
    H = n.onClose,
    E = void 0 === H ? function() {} : H,
    T = n.showStartDateCalendarIcon,
    z = void 0 === T || T,
    O = n.showEndDateCalendarIcon,
    I = void 0 === O || O,
    P = n.displayFormat,
    A = void 0 === P ? 'MM/DD/YYYY' : P,
    Y = n.phrases,
    j = void 0 === Y ? lt : Y,
    N = n.placement,
    G = void 0 === N ? 'bottom' : N,
    $ = i(null),
    V = gt(
      ke(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: C ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: C ? (F ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: C ? (F ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(G),
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
      Tn,
      {rtl: F, position: 'relative', ref: $},
      e.createElement(
        On,
        {
          background: V.dateRangeBackground,
          gridTemplateColumns: V.dateRangeGridTemplateColumns,
          border: V.dateRangeBorder,
          borderRadius: V.dateRangeBorderRadius,
        },
        e.createElement(wt, {
          id: 'startDate',
          ariaLabel: j.startDateAriaLabel,
          placeholder: j.startDatePlaceholder,
          value: me(r, A, ''),
          onClick: function() {
            return d(De)
          },
          showCalendarIcon: z,
          vertical: C,
          isActive: u === De,
          padding: V.dateRangeStartDateInputPadding,
          rtl: F,
        }),
        e.createElement(
          ut,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(zn, {
            width: V.dateRangeArrowIconWidth,
            height: V.dateRangeArrowIconHeight,
            color: V.dateRangeArrowIconColor,
            opacity: V.dateRangeArrowIconOpacity,
            rtl: F,
          }),
        ),
        e.createElement(wt, {
          id: 'endDate',
          ariaLabel: j.endDateAriaLabel,
          placeholder: j.endDatePlaceholder,
          value: me(a, A, ''),
          onClick: function() {
            return d(r ? ve : De)
          },
          showCalendarIcon: I,
          vertical: C,
          isActive: u === ve,
          padding: V.dateRangeEndDateInputPadding,
          rtl: F,
          disableAccessibility: u === De,
        }),
      ),
      e.createElement(
        pt,
        {
          position: V.dateRangeDatepickerWrapperPosition,
          bottom: V.dateRangeDatepickerWrapperBottom,
          left: V.dateRangeDatepickerWrapperLeft,
          top: V.dateRangeDatepickerWrapperTop,
          right: V.dateRangeDatepickerWrapperRight,
        },
        null !== u &&
          e.createElement(Mn, {
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
            vertical: C,
            showSelectedDates: k,
            showClose: v,
            rtl: F,
            dayLabelFormat: g,
            weekdayLabelFormat: h,
            monthLabelFormat: m,
            onDayRender: y,
          }),
      ),
    )
  )
}
export {In as DateRangeInput, Mn as Datepicker, ve as END_DATE, De as START_DATE, ct as phrases}
