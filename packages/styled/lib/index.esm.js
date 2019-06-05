import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as o,
  useContext as a,
  useRef as i,
} from 'react'
import l, {ThemeContext as c, css as s} from 'styled-components'
var u = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  d = function(e) {
    return e instanceof Date
  },
  p = 36e5,
  f = /[T ]/,
  m = /:/,
  g = /^(\d{2})$/,
  h = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  y = /^(\d{4})/,
  v = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  D = /^-(\d{2})$/,
  k = /^-?(\d{3})$/,
  b = /^-?(\d{2})-?(\d{2})$/,
  x = /^-?W(\d{2})$/,
  S = /^-?W(\d{2})-?(\d{1})$/,
  C = /^(\d{2}([.,]\d*)?)$/,
  w = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  B = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  M = /([Z+-].*)$/,
  F = /^(Z)$/,
  L = /^([+-])(\d{2})$/,
  W = /^([+-])(\d{2}):?(\d{2})$/
function E(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var T,
  H = function(e, t) {
    if (d(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      o,
      a,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(f)
        if ((m.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = M.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = h[t],
          o = v[t]
        if ((n = y.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = g.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      c = l.year,
      s = (function(e, t) {
        if (null === t) return null
        var n, r, o
        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
        if ((n = D.exec(e)))
          return (r = new Date(0)), (o = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, o), r
        if ((n = k.exec(e))) {
          r = new Date(0)
          var a = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, a), r
        }
        if ((n = b.exec(e))) {
          ;(r = new Date(0)), (o = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, o, i), r
        }
        return (n = x.exec(e))
          ? E(t, parseInt(n[1], 10) - 1)
          : (n = S.exec(e))
          ? E(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (s) {
      var T,
        H = s.getTime(),
        R = 0
      if (
        (i.time &&
          (R = (function(e) {
            var t, n, r
            if ((t = C.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * p
            if ((t = w.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * p + 6e4 * r
              )
            if ((t = B.exec(e))) {
              ;(n = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
              var o = parseFloat(t[3].replace(',', '.'))
              return (n % 24) * p + 6e4 * r + 1e3 * o
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (r = i.timezone),
          (T =
            6e4 *
            ((o = F.exec(r))
              ? 0
              : (o = L.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = W.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var O = H + R,
          P = new Date(O)
        T = u(P)
        var z = new Date(O)
        z.setDate(P.getDate() + 1)
        var I = u(z) - u(P)
        I > 0 && (T += I)
      }
      return new Date(H + R + T)
    }
    return new Date(e)
  },
  R = function(e) {
    var t = H(e)
    return t.setHours(0, 0, 0, 0), t
  },
  O = function(e) {
    var t = H(e)
    return (
      (function(e, t) {
        var n = R(e),
          r = R(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
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
  P = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = H(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  z = function(e) {
    return P(e, {weekStartsOn: 1})
  },
  I = function(e) {
    var t = H(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var o = z(r),
      a = new Date(0)
    a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0)
    var i = z(a)
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  A = function(e) {
    var t = H(e),
      n =
        z(t).getTime() -
        (function(e) {
          var t = I(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), z(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  Y = function(e) {
    if (d(e)) return !isNaN(e)
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
  V = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = j
      .concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  N = {
    distanceInWords: ((T = {
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
        o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        a = ['AM', 'PM'],
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
            return o[e.getDay()]
          },
          A: function(e) {
            return e.getHours() / 12 >= 1 ? a[1] : a[0]
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
        {formatters: c, formattingTokensRegExp: V(c)}
      )
    })(),
  },
  $ = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return _(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return _(e.getDate(), 2)
    },
    DDD: function(e) {
      return O(e)
    },
    DDDD: function(e) {
      return _(O(e), 3)
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
      return _(A(e), 2)
    },
    YY: function(e) {
      return _(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return _(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(I(e)).substr(2)
    },
    GGGG: function(e) {
      return I(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return _(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return _($.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return _(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return _(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return _(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return _(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return G(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return G(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function G(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = r % 60
  return n + _(Math.floor(r / 60), 2) + t + _(o, 2)
}
function _(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var U = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      o = (n || {}).locale,
      a = N.format.formatters,
      i = N.format.formattingTokensRegExp
    o &&
      o.format &&
      o.format.formatters &&
      ((a = o.format.formatters),
      o.format.formattingTokensRegExp && (i = o.format.formattingTokensRegExp))
    var l = H(e)
    return Y(l)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (o = t[i[r]] || $[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, $)) : (t += i[n])
            return t
          }
        })(r, a, i)(l)
      : 'Invalid Date'
  },
  Z = function(e, t) {
    var n = H(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  X = function(e, t, n) {
    var r = H(e),
      o = void 0 !== n ? n : 1,
      a = H(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= a; ) i.push(H(l)), l.setDate(l.getDate() + o)
    return i
  },
  J = function(e) {
    var t = H(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  q = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = H(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  K = function(e) {
    return H(e).getDay()
  },
  Q = function(e) {
    var t = H(e)
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
    a = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    l = void 0 === i ? ee : i,
    c = e.weekdayLabelFormat,
    s = void 0 === c ? te : c,
    u = e.monthLabelFormat,
    d = void 0 === u ? ne : u
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
                    return U(e, 'DD')
                  }
                : a,
            l = new Date(t, n),
            c = Q(l),
            s = K(c),
            u = J(l),
            d = Array.from(Array(s >= o ? s - o : o).keys()).fill(0),
            p = X(c, u).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, firstDayOfWeek: a, dayLabelFormat: l})
      },
      [t, n, a, l],
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
                    return U(e, 'dd')
                  }
                : o,
            i = new Date()
          return X(Z(P(i), r), Z(q(i), r)).reduce(function(e, t) {
            return e.push(a(t)), e
          }, [])
        })({firstDayOfWeek: a, weekdayLabelFormat: s})
      },
      [a, s],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var oe = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getTime() < r.getTime()
  },
  ae = function(e, t) {
    var n = H(e),
      r = H(t)
    return n.getTime() > r.getTime()
  },
  ie = function(e, t, n) {
    var r = H(e).getTime(),
      o = H(t).getTime(),
      a = H(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  le = function(e, t) {
    var n = R(e),
      r = R(t)
    return n.getTime() === r.getTime()
  },
  ce = function(e, t) {
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
  de = function() {
    return R(new Date())
  },
  pe = function(e, t) {
    var n = H(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = H(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function fe(e) {
  var t = Q(e)
  return {year: se(t), month: ue(t), date: t}
}
function me(e, t) {
  var n = fe(t || de()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = pe(e[e.length - 1].date, 1)), e.concat([fe(r)])
      }, o)),
    o
  )
}
function ge(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = pe(r, n)), n > 0 ? e.concat([fe(r)]) : [fe(r)].concat(e)
  }, [])
}
function he(e, t, n) {
  return e && 'string' == typeof t ? U(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ye(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.minBookingDays,
    a = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !oe(t, Z(i, -1)),
    s = !l || !ae(Z(t, o - 1), l)
  if (t && 1 === o && !n && !r(t)) return !0
  if ((t && o > 1 && !n && !a) || (t && o > 0 && a && c && s) || (t && o > 0 && a && !i && !l))
    return X(t, Z(t, o - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !a) {
    var u = Z(t, o - 1)
    return (
      !oe(n, u) &&
      X(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var ve = 'startDate',
  De = 'endDate'
function ke(e) {
  var o = e.startDate,
    a = e.endDate,
    i = e.focusedInput,
    l = e.minBookingDate,
    c = e.maxBookingDate,
    s = e.onDatesChange,
    u = e.exactMinBookingDays,
    d = void 0 !== u && u,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    m = e.numberOfMonths,
    g = void 0 === m ? 2 : m,
    h = e.firstDayOfWeek,
    y = void 0 === h ? 1 : h,
    v = e.isDateBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    k = n(function() {
      return me(g, o)
    }),
    b = k[0],
    x = k[1],
    S = n(null),
    C = S[0],
    w = S[1],
    B = n(o),
    M = B[0],
    F = B[1],
    L = r(
      function(e) {
        F(e), (!M || (M && !ce(e, M))) && x(me(g, e))
      },
      [F, x, g, M],
    ),
    W = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && ie(e, t, n)
        })(e, o, a)
      },
      [o, a],
    ),
    E = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && le(e, t)) || (n && le(e, n)))
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
            l = e.minBookingDays,
            c = void 0 === l ? 1 : l,
            s = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            u = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (s && oe(t, s)) ||
            (u && ae(t, u)) ||
            (a && !i && c > 1 && ie(t, a, Z(a, c - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: l,
          maxBookingDate: c,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          isDateBlockedFn: D,
        })
      },
      [l, c, o, a, f, D],
    ),
    H = r(
      function(e) {
        return !!M && le(e, M)
      },
      [M],
    ),
    R = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            o = e.isDateBlocked,
            a = e.hoveredDate,
            i = e.minBookingDays
          return a && i > 1 && e.exactMinBookingDays && ie(t, a, Z(a, i - 1))
            ? X(a, Z(a, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : n && !r && a && ie(t, n, Z(n, i - 1)) && le(n, a) && i > 1
            ? X(n, Z(n, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : !(!n || r || !a || oe(a, n) || !ie(t, n, a)) &&
              X(n, a).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: C,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          exactMinBookingDays: d,
          isDateBlocked: D,
        })
      },
      [C, o, a, f, d, D],
    )
  function O(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      M ||
      (L(new Date()), x(me(g, new Date())))
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
      firstDayOfWeek: y,
      activeMonths: b,
      isDateSelected: W,
      isDateHovered: R,
      isFirstOrLastSelectedDate: E,
      isDateBlocked: T,
      numberOfMonths: g,
      isDateFocused: H,
      focusedDate: M,
      hoveredDate: C,
      onResetDates: function() {
        s({startDate: null, endDate: null, focusedInput: ve})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !T(e) || (o && le(e, o)),
              n = !l || !oe(e, Z(l, -1)),
              r = !c || !ae(e, c),
              i = Z(e, f - 1),
              s = !l || !oe(i, l),
              u = !c || !ae(i, c),
              p = d && f > 1 && n && r && s && u,
              m = o && !a && !d && n && r,
              g = !(f > 1 && o) || ie(e, o, Z(o, f - 2)),
              h = o && le(e, o) && g
            t && (p || m || h) ? w(e) : null !== C && w(null)
          }
        } else w(null)
      },
      onDateSelect: function(e) {
        ;(i === De || i === ve) &&
        f > 0 &&
        d &&
        ye({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: l,
          maxBookingDate: c,
          isDateBlocked: D,
          startDate: e,
          endDate: null,
        })
          ? s({startDate: e, endDate: Z(e, f - 1), focusedInput: null})
          : ((i === De && o && oe(e, o)) || (i === ve && a && ae(e, a))) &&
            !d &&
            ye({minBookingDays: f, isDateBlocked: D, startDate: e, endDate: null})
          ? s({endDate: null, startDate: e, focusedInput: De})
          : i === ve && !d && ye({minBookingDays: f, isDateBlocked: D, endDate: a, startDate: e})
          ? s({endDate: a, startDate: e, focusedInput: De})
          : i === ve && !d && ye({minBookingDays: f, isDateBlocked: D, endDate: null, startDate: e})
          ? s({endDate: null, startDate: e, focusedInput: De})
          : i === De &&
            o &&
            !oe(e, o) &&
            !d &&
            ye({minBookingDays: f, isDateBlocked: D, startDate: o, endDate: e}) &&
            s({startDate: o, endDate: e, focusedInput: null}),
          (!M || (M && !ce(e, M))) && x(me(g, e))
      },
      onDateFocus: L,
      goToPreviousMonths: function() {
        x(ge(b, g, -1)), F(null)
      },
      goToNextMonths: function() {
        x(ge(b, g, 1)), F(null)
      },
    }
  )
}
var be = function() {
  return (be =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function xe(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function Se() {
  return (Se =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function Ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function we(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var Be = we(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    l = n ? Symbol.for('react.profiler') : 60114,
    c = n ? Symbol.for('react.provider') : 60109,
    s = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
    p = n ? Symbol.for('react.forward_ref') : 60112,
    f = n ? Symbol.for('react.suspense') : 60113,
    m = n ? Symbol.for('react.memo') : 60115,
    g = n ? Symbol.for('react.lazy') : 60116
  function h(e) {
    if ('object' == typeof e && null !== e) {
      var t = e.$$typeof
      switch (t) {
        case r:
          switch ((e = e.type)) {
            case u:
            case d:
            case a:
            case l:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case s:
                case p:
                case c:
                  return e
                default:
                  return t
              }
          }
        case g:
        case m:
        case o:
          return t
      }
    }
  }
  function y(e) {
    return h(e) === d
  }
  ;(t.typeOf = h),
    (t.AsyncMode = u),
    (t.ConcurrentMode = d),
    (t.ContextConsumer = s),
    (t.ContextProvider = c),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = g),
    (t.Memo = m),
    (t.Portal = o),
    (t.Profiler = l),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === l ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === g ||
            e.$$typeof === m ||
            e.$$typeof === c ||
            e.$$typeof === s ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || h(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return h(e) === s
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
      return h(e) === a
    }),
    (t.isLazy = function(e) {
      return h(e) === g
    }),
    (t.isMemo = function(e) {
      return h(e) === m
    }),
    (t.isPortal = function(e) {
      return h(e) === o
    }),
    (t.isProfiler = function(e) {
      return h(e) === l
    }),
    (t.isStrictMode = function(e) {
      return h(e) === i
    }),
    (t.isSuspense = function(e) {
      return h(e) === f
    })
})
Ce(Be)
Be.typeOf,
  Be.AsyncMode,
  Be.ConcurrentMode,
  Be.ContextConsumer,
  Be.ContextProvider,
  Be.Element,
  Be.ForwardRef,
  Be.Fragment,
  Be.Lazy,
  Be.Memo,
  Be.Portal,
  Be.Profiler,
  Be.StrictMode,
  Be.Suspense,
  Be.isValidElementType,
  Be.isAsyncMode,
  Be.isConcurrentMode,
  Be.isContextConsumer,
  Be.isContextProvider,
  Be.isElement,
  Be.isForwardRef,
  Be.isFragment,
  Be.isLazy,
  Be.isMemo,
  Be.isPortal,
  Be.isProfiler,
  Be.isStrictMode,
  Be.isSuspense
var Me = we(function(e, t) {})
Ce(Me)
Me.typeOf,
  Me.AsyncMode,
  Me.ConcurrentMode,
  Me.ContextConsumer,
  Me.ContextProvider,
  Me.Element,
  Me.ForwardRef,
  Me.Fragment,
  Me.Lazy,
  Me.Memo,
  Me.Portal,
  Me.Profiler,
  Me.StrictMode,
  Me.Suspense,
  Me.isValidElementType,
  Me.isAsyncMode,
  Me.isConcurrentMode,
  Me.isContextConsumer,
  Me.isContextProvider,
  Me.isElement,
  Me.isForwardRef,
  Me.isFragment,
  Me.isLazy,
  Me.isMemo,
  Me.isPortal,
  Me.isProfiler,
  Me.isStrictMode,
  Me.isSuspense,
  we(function(e) {
    e.exports = Be
  })
var Fe = Object.getOwnPropertySymbols,
  Le = Object.prototype.hasOwnProperty,
  We = Object.prototype.propertyIsEnumerable
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
var Ee = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function Te() {}
function He() {}
He.resetWarningCache = Te
var Re,
  Oe,
  Pe,
  ze = we(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== Ee) {
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
        checkPropTypes: He,
        resetWarningCache: Te,
      }
      return (n.PropTypes = n), n
    })()
  }),
  Ie = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
  Ae = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  Ye = ze.oneOfType([ze.number, ze.string, ze.array, ze.object]),
  je = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  Ve = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return Ne(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && Ne(e[t]) ? e[t] : null
          }, e)
    }, null)
    return Ne(o) ? o : n[n.length - 1]
  },
  Ne = function(e) {
    return null != e
  },
  $e = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Ge = function(e) {
    return $e(e) && 0 !== e ? e + 'px' : e
  },
  _e = function(e) {
    return '@media screen and (min-width: ' + Ge(e) + ')'
  },
  Ue = function(e, t) {
    return Ve(t, e)
  },
  Ze = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] && 'object' == typeof t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  Xe = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = Ze(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  Je = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      l = void 0 === i ? Ue : i,
      c = e.scale,
      s = void 0 === c ? {} : c,
      u = r || n,
      d = function(e) {
        var t = Ve(e, n, o, null)
        if (!Ne(t)) return null
        var r,
          i = Ve(e.theme, a, s),
          c = function(e) {
            var t
            return Ne(e) ? (((t = {})[u] = l(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return c(t)
        var d = Ve(e.theme, 'breakpoints', Ae),
          p = []
        if (Array.isArray(t)) {
          p.push(c(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var m = c(t[f])
            if (m) {
              var g,
                h = _e(d[f - 1])
              p.push((((g = {})[h] = m), g))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              k = _e(D),
              b = c(t[y])
            if (D) p.push((((v = {})[k] = b), v))
            else p.unshift(b)
          }
          p.sort(Ie)
        }
        return Xe.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = je(Ye)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = je(Ye)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  qe = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return Xe.apply(void 0, n)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = Se({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  Ke = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  Qe = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return Ve(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = ze.oneOfType([ze.number, ze.string])), t)), a
  },
  et = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  tt = function(e, t) {
    if (!$e(e)) return Ge(Ve(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = Ve(t, r)
    return $e(o) ? Ge(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  nt = Je({prop: 'margin', alias: 'm', key: 'space', transformValue: tt, scale: et}),
  rt = Je({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: tt, scale: et}),
  ot = Je({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: tt, scale: et}),
  at = Je({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: tt, scale: et}),
  it = Je({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: tt, scale: et}),
  lt = Je({prop: 'padding', alias: 'p', key: 'space', transformValue: tt, scale: et}),
  ct = Je({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: tt, scale: et}),
  st = Je({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: tt, scale: et}),
  ut = Je({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: tt, scale: et}),
  dt = Je({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: tt, scale: et}),
  pt = Ke(function(e) {
    return Se({}, e, {
      mt: Ne(e.my) ? e.my : e.mt,
      mb: Ne(e.my) ? e.my : e.mb,
      ml: Ne(e.mx) ? e.mx : e.ml,
      mr: Ne(e.mx) ? e.mx : e.mr,
      pt: Ne(e.py) ? e.py : e.pt,
      pb: Ne(e.py) ? e.py : e.pb,
      pl: Ne(e.px) ? e.px : e.pl,
      pr: Ne(e.px) ? e.px : e.pr,
    })
  })(qe(nt, rt, ot, at, it, lt, ct, st, ut, dt)),
  ft = qe(
    Je({prop: 'color', key: 'colors'}),
    Je({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  mt = function(e, t) {
    return !$e(e) || e > 1 ? Ge(e) : 100 * e + '%'
  },
  gt = Je({prop: 'width', key: 'widths', transformValue: mt}),
  ht = function(e, t) {
    return Ge(Ve(t, e))
  },
  yt = Je({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: ht,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  vt = Je({prop: 'fontFamily', key: 'fonts'}),
  Dt = Je({prop: 'fontWeight', key: 'fontWeights'}),
  kt = Je({prop: 'lineHeight', key: 'lineHeights'}),
  bt = (Je({prop: 'textAlign'}),
  Je({prop: 'fontStyle'}),
  Je({prop: 'letterSpacing', key: 'letterSpacings', transformValue: ht}),
  Je({prop: 'display'})),
  xt = (Je({prop: 'maxWidth', key: 'maxWidths', transformValue: ht}),
  Je({prop: 'minWidth', key: 'minWidths', transformValue: ht}),
  Je({prop: 'height', key: 'heights', transformValue: ht})),
  St = (Je({prop: 'maxHeight', key: 'maxHeights', transformValue: ht}),
  Je({prop: 'minHeight', key: 'minHeights', transformValue: ht})),
  Ct = (Ke(function(e) {
    return Se({}, e, {width: e.size, height: e.size})
  })(qe(gt, xt)),
  Je({prop: 'verticalAlign'}),
  Je({prop: 'alignItems'})),
  wt = (Je({prop: 'alignContent'}), Je({prop: 'justifyItems'}), Je({prop: 'justifyContent'})),
  Bt = Je({prop: 'flexWrap'}),
  Mt = (Je({prop: 'flexBasis', transformValue: mt}), Je({prop: 'flexDirection'})),
  Ft = Je({prop: 'flex'}),
  Lt = (Je({prop: 'justifySelf'}),
  Je({prop: 'alignSelf'}),
  Je({prop: 'order'}),
  Je({prop: 'gridGap', key: 'space', transformValue: ht, scale: et})),
  Wt = Je({prop: 'gridColumnGap', key: 'space', transformValue: ht, scale: et}),
  Et = Je({prop: 'gridRowGap', key: 'space', transformValue: ht, scale: et}),
  Tt = (Je({prop: 'gridColumn'}), Je({prop: 'gridRow'}), Je({prop: 'gridAutoFlow'})),
  Ht = Je({prop: 'gridAutoColumns'}),
  Rt = Je({prop: 'gridAutoRows'}),
  Ot = Je({prop: 'gridTemplateColumns'}),
  Pt = Je({prop: 'gridTemplateRows'}),
  zt = Je({prop: 'gridTemplateAreas'}),
  It = Je({prop: 'gridArea'}),
  At = Je({prop: 'border', key: 'borders'}),
  Yt = Je({prop: 'borderWidth', key: 'borderWidths', transformValue: ht}),
  jt = Je({prop: 'borderStyle', key: 'borderStyles'}),
  Vt = Je({prop: 'borderColor', key: 'colors'}),
  Nt = Je({prop: 'borderTop', key: 'borders'}),
  $t = Je({prop: 'borderRight', key: 'borders'}),
  Gt = Je({prop: 'borderBottom', key: 'borders'}),
  _t = Je({prop: 'borderLeft', key: 'borders'}),
  Ut = Je({prop: 'borderRadius', key: 'radii', transformValue: ht}),
  Zt = qe(At, Nt, $t, Gt, _t, Yt, jt, Vt, Ut),
  Xt = Je({prop: 'boxShadow', key: 'shadows'}),
  Jt = Je({prop: 'opacity'}),
  qt = Je({prop: 'overflow'}),
  Kt = Je({prop: 'background'}),
  Qt = (Je({prop: 'backgroundImage'}),
  Je({prop: 'backgroundSize'}),
  Je({prop: 'backgroundPosition'}),
  Je({prop: 'backgroundRepeat'}),
  Je({prop: 'position'})),
  en = Je({prop: 'zIndex', key: 'zIndices'}),
  tn = Je({prop: 'top', transformValue: ht}),
  nn = Je({prop: 'right', transformValue: ht}),
  rn = Je({prop: 'bottom', transformValue: ht}),
  on = Je({prop: 'left', transformValue: ht}),
  an = (Qe({key: 'buttons'}),
  Qe({key: 'textStyles', prop: 'textStyle'}),
  Qe({key: 'colorStyles', prop: 'colors'}),
  {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  }),
  ln = be({}, an, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  cn = Object.freeze({datepickerPhrases: an, dateRangeInputPhrases: ln}),
  sn = Je({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  un = l('div')(
    Re ||
      (Re = xe(
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
    Ht,
    Tt,
    Rt,
    Wt,
    Lt,
    Et,
    zt,
    Ot,
    Pt,
    Ct,
    wt,
    pt,
    sn,
  ),
  dn = l('div')(
    Oe ||
      (Oe = xe(
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
    pt,
    Ft,
    Bt,
    Mt,
    Ct,
    wt,
    It,
    xt,
    gt,
  ),
  pn = l('div')(
    Pe ||
      (Pe = xe(
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
    It,
    xt,
    pt,
    gt,
    Qt,
    tn,
    on,
    nn,
    rn,
    en,
  )
function fn(t) {
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
function mn(e) {
  void 0 === e && (e = {})
  var t = a(c)
  return o(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return be({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var gn,
  hn,
  yn,
  vn = {
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
  Dn = Je({prop: 'placeholderColor', cssProperty: 'color'}),
  kn = Je({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  bn = l('label')(
    gn ||
      (gn = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Qt,
    At,
    Kt,
    bt,
    Ut,
    pt,
  ),
  xn = l('div')(
    hn ||
      (hn = xe(
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
    Qt,
    on,
    nn,
    tn,
    xt,
    gt,
  ),
  Sn = l('input')(
    yn ||
      (yn = xe(
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
    Kt,
    pt,
    vt,
    yt,
    ft,
    Dt,
    pt,
    At,
    gt,
    St,
    Xt,
    kn,
    Dn,
    kn,
    Dn,
    kn,
    Dn,
  )
function Cn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.vertical,
    a = t.isActive,
    i = t.ariaLabel,
    l = t.onClick,
    c = t.value,
    s = t.showCalendarIcon,
    u = t.padding,
    d = t.rtl,
    p = t.disableAccessibility,
    f = mn({
      fontFamily: vn.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: vn.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: u,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: vn.colors.silverCloud,
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
    bn,
    {
      htmlFor: r,
      display: f.inputLabelDisplay,
      position: f.inputLabelPosition,
      border: f.inputLabelBorder,
      background: f.inputLabelBackground,
      borderRadius: f.inputLabelBorderRadius,
      m: f.inputLabelMargin,
    },
    s &&
      e.createElement(
        xn,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(fn, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(Sn, {
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
      value: c,
      autoComplete: 'off',
      onFocus: l,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function wn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    c = void 0 === l ? '' : l,
    s = (function(e) {
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
      className: c,
      transform: 'rotate(' + s + ' 0 0)',
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
var Bn,
  Mn,
  Fn,
  Ln = l('div')(
    Bn ||
      (Bn = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    vt,
    yt,
    Dt,
    ft,
    kt,
    pt,
  ),
  Wn = l(Ln)(
    Fn ||
      (Fn = xe(
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
        s(
          Mn ||
            (Mn = xe(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function En(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = t.vertical,
    i = mn({
      fontFamily: vn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: vn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: vn.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    pn,
    {p: i.selectDatePadding},
    e.createElement(
      Ln,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Wn,
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
var Tn,
  Hn,
  Rn,
  On,
  Pn,
  zn = function(t) {
    var n = t.label,
      r = mn({
        fontFamily: vn.fontFamily,
        monthLabelColor: vn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Ln,
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
  In = function(t) {
    var n = t.label,
      r = mn({
        fontFamily: vn.fontFamily,
        dayLabelColor: vn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Ln,
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
  An = {
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
  Yn = e.createContext(An),
  jn = Je({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vn = Je({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nn = Je({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  $n = Je({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gn = Je({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  _n = Je({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Un = l('button')(
    Pn ||
      (Pn = xe(
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
    jn,
    Vn,
    Xt,
    Kt,
    ft,
    vt,
    Dt,
    yt,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        s(
          Tn ||
            (Tn = xe(
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
          ? s(
              Rn ||
                (Rn = xe(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              _n,
              $n,
            )
          : ''
        : s(
            Hn ||
              (Hn = xe(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Gn,
            Nn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return s(
        On ||
          (On = xe(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Zn(e, t, n, r) {
  var o = r.selectedFirstOrLast,
    a = r.normal,
    i = r.selected,
    l = r.rangeHover
  return t ? o : e ? i : n ? l : a
}
function Xn(n) {
  var l = n.day,
    c = n.date,
    s = i(null),
    u = a(Yn),
    d = u.focusedDate,
    p = u.isDateFocused,
    f = u.isDateSelected,
    m = u.isDateHovered,
    g = u.isDateBlocked,
    h = u.isFirstOrLastSelectedDate,
    y = u.onDateSelect,
    v = u.onDateFocus,
    D = u.onDateHover,
    k = u.onDayRender,
    b = (function(e) {
      var n = e.date,
        o = e.focusedDate,
        a = e.isDateSelected,
        i = e.isDateFocused,
        l = e.isFirstOrLastSelectedDate,
        c = e.isDateHovered,
        s = e.isDateBlocked,
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
        g = r(
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
      var h = s(n) && !c(n)
      return {
        tabIndex: null === o || i(n) ? 0 : -1,
        isSelected: a(n),
        isSelectedStartOrEnd: l(n),
        isWithinHoverRange: c(n),
        disabledDate: h,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? d(Z(n, 1))
            : 'ArrowLeft' === e.key
            ? d(Z(n, -1))
            : 'ArrowUp' === e.key
            ? d(Z(n, -7))
            : 'ArrowDown' === e.key && d(Z(n, 7))
        },
        onClick: h ? function() {} : m,
        onMouseEnter: g,
      }
    })({
      date: c,
      focusedDate: d,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: m,
      isDateBlocked: g,
      isFirstOrLastSelectedDate: h,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: D,
      dayRef: s,
    }),
    x = mn({
      fontFamily: vn.fontFamily,
      daySize: vn.daySize,
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
    S = o(
      function() {
        return Zn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBorderColor,
          selected: x.daySelectedBorderColor,
          normal: x.dayBorderColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    ),
    C = o(
      function() {
        return Zn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastBackground,
          selected: x.daySelectedBackground,
          normal: x.dayBackground,
          rangeHover: x.dayHoverRangeBackground,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    ),
    w = o(
      function() {
        return Zn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: x.daySelectedFirstOrLastColor,
          selected: x.daySelectedColor,
          normal: x.dayColor,
          rangeHover: x.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, x, b.isWithinHoverRange],
    )
  return e.createElement(
    Un,
    be({}, b, {
      ref: s,
      dayHeight: x.daySize,
      dayWidth: x.daySize,
      background: C,
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
          dn,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          l,
        ),
  )
}
var Jn,
  qn = l('div')(
    Jn ||
      (Jn = xe(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Kn = function(t) {
    var n = t.year,
      r = t.month,
      o = t.firstDayOfWeek,
      a = re({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: n,
        month: r,
        firstDayOfWeek: o,
      }),
      i = a.days,
      l = a.weekdayLabels,
      c = a.monthLabel,
      s = mn({daySize: vn.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      qn,
      null,
      e.createElement(
        dn,
        {justifyContent: 'center', m: s.monthLabelMargin},
        e.createElement(zn, {label: c}),
      ),
      e.createElement(
        un,
        {daySizeGridTemplateColumns: s.daySize},
        l.map(function(t) {
          return e.createElement(
            dn,
            {key: t, justifyContent: 'center', m: s.monthDayLabelMargin},
            e.createElement(In, {label: t}),
          )
        }),
      ),
      e.createElement(
        un,
        {daySizeGridTemplateColumns: s.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Xn, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Qn,
  er,
  tr,
  nr = l('button')(
    Qn ||
      (Qn = xe(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  rr = l(function(t) {
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
  })(tr || (tr = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(
        er ||
          (er = xe(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function or(t) {
  var n = t.onResetDates,
    r = t.text,
    o = t.rtl,
    a = i(null),
    l = mn({
      fontFamily: vn.fontFamily,
      resetDatesIconColor: vn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: vn.colors.darcula,
      resetDatesTextMargin: o ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    nr,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(rr, {
      height: l.resetDatesIconHeight,
      width: l.resetDatesIconWidth,
      color: l.resetDatesIconColor,
      rtl: o,
    }),
    e.createElement(
      Ln,
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
var ar,
  ir,
  lr = l('svg')(ir || (ir = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      ar ||
        (ar = xe(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function cr(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    l = t.className,
    c = void 0 === l ? '' : l,
    s = (function(e) {
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
    lr,
    {
      width: r,
      height: n,
      color: o,
      className: c,
      angle: s,
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
var sr,
  ur = l('button')(
    sr ||
      (sr = xe(
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
    gt,
    xt,
    Kt,
    pt,
    Zt,
  )
function dr(t) {
  var n = t.type,
    r = t.onClick,
    o = t.vertical,
    a = t.rtl,
    l = t.ariaLabel,
    c = i(null),
    s = mn({
      navButtonWidth: o ? '48px' : '30px',
      navButtonHeight: o ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: o ? '18px' : '11px',
      navButtonIconWidth: o ? '28px' : '18px',
      navButtonIconColor: vn.colors.greey,
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
    ur,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== u() || a ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && a ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': l,
      onClick: r,
      onMouseUp: function() {
        c && c.current && c.current.blur()
      },
      ref: c,
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(cr, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: u(),
    }),
  )
}
function pr(t) {
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
var fr,
  mr,
  gr = l('div')(
    fr ||
      (fr = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    pt,
    ft,
    yt,
    vt,
    Dt,
  ),
  hr = l('button')(
    mr ||
      (mr = xe(
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
    gr,
    ft,
    ft,
  )
function yr(t) {
  var n = t.onClick,
    r = t.rtl,
    o = mn({
      fontFamily: vn.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    hr,
    {
      onClick: n,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(pr, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      gr,
      {
        m: o.closeMargin,
        color: o.closeColor,
        fontSize: o.closeFontSize,
        fontFamily: o.fontFamily,
        fontWeight: o.closeFontWeight,
      },
      'Close',
    ),
  )
}
var vr,
  Dr,
  kr,
  br,
  xr,
  Sr = l('div')(
    Dr ||
      (Dr = xe(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Kt,
    pt,
    Ut,
    Qt,
    Xt,
    gt,
    function(e) {
      return (
        e.rtl &&
        s(vr || (vr = xe(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
  ),
  Cr = l('div')(
    kr ||
      (kr = xe(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  wr = l(pn)(br || (br = xe(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), bt, wt),
  Br = l(un)(xr || (xr = xe(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), qt, xt)
function Mr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    l = t.focusedInput,
    c = t.onDatesChange,
    s = t.dayLabelFormat,
    u = t.weekdayLabelFormat,
    d = t.monthLabelFormat,
    p = t.onDayRender,
    f = t.vertical,
    m = void 0 !== f && f,
    g = t.rtl,
    h = void 0 !== g && g,
    y = t.showResetDates,
    v = void 0 === y || y,
    D = t.showClose,
    k = void 0 === D || D,
    b = t.showSelectedDates,
    x = void 0 === b || b,
    S = t.exactMinBookingDays,
    C = void 0 !== S && S,
    w = t.isDateBlocked,
    B =
      void 0 === w
        ? function() {
            return !1
          }
        : w,
    M = t.minBookingDays,
    F = void 0 === M ? 1 : M,
    L = t.onClose,
    W = void 0 === L ? function() {} : L,
    E = t.numberOfMonths,
    T = t.firstDayOfWeek,
    H = t.displayFormat,
    R = void 0 === H ? 'MM/DD/YYYY' : H,
    O = t.phrases,
    P = void 0 === O ? an : O,
    z = ke({
      startDate: n,
      endDate: r,
      focusedInput: l,
      onDatesChange: c,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: F,
      isDateBlocked: B,
      exactMinBookingDays: C,
      numberOfMonths: E,
      firstDayOfWeek: T,
    }),
    I = z.activeMonths,
    A = z.isDateSelected,
    Y = z.isFirstOrLastSelectedDate,
    j = z.isDateHovered,
    V = z.firstDayOfWeek,
    N = z.onDateSelect,
    $ = z.onResetDates,
    G = z.goToPreviousMonths,
    _ = z.goToNextMonths,
    U = z.numberOfMonths,
    Z = z.hoveredDate,
    X = z.onDateHover,
    J = z.isDateFocused,
    q = z.focusedDate,
    K = z.onDateFocus,
    Q = z.isDateBlocked,
    re = i(null),
    oe = mn({
      datepickerBackground: '#ffffff',
      datepickerPadding: m ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: m ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: m ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: m ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: m ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: h ? 'unset' : m ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: h ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: m ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: vn.colors.silverCloud,
      datepickerMonthsWrapperMargin: k || x ? (x ? '28px 0 0' : '48px 0 0') : 'unset',
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
  function ae() {
    re && re.current && m && (re.current.scrollTop = 0)
  }
  function ie() {
    _(), ae()
  }
  function le() {
    G(), ae()
  }
  return e.createElement(
    Yn.Provider,
    {
      value: {
        rtl: h,
        isDateFocused: J,
        isDateSelected: A,
        isDateHovered: j,
        isFirstOrLastSelectedDate: Y,
        onDateFocus: K,
        focusedDate: q,
        onDateSelect: N,
        onDateHover: X,
        onDayRender: p,
        isDateBlocked: Q,
      },
    },
    e.createElement(
      Sr,
      {
        background: oe.datepickerBackground,
        p: oe.datepickerPadding,
        borderRadius: oe.datepickerBorderRadius,
        position: oe.datepickerPosition,
        boxShadow: oe.datepickerBoxShadow,
        width: oe.datepickerWidth,
        rtl: h,
      },
      k &&
        e.createElement(
          wr,
          {
            m: oe.datepickerCloseWrapperMargin,
            display: oe.datepickerCloseWrapperDisplay,
            justifyContent: oe.datepickerCloseWrapperJustifyContent,
            position: oe.datepickerCloseWrapperPosition,
            right: oe.datepickerCloseWrapperRight,
            top: oe.datepickerCloseWrapperTop,
            left: oe.datepickerCloseWrapperLeft,
            bottom: oe.datepickerCloseWrapperBottom,
            zIndex: oe.datepickerCloseWrapperZIndex,
          },
          e.createElement(yr, {onClick: W, rtl: h}),
        ),
      x &&
        e.createElement(
          Cr,
          null,
          e.createElement(
            un,
            {gridTemplateColumns: oe.datepickerSelectDateGridTemplateColumns},
            e.createElement(En, {
              title: P.datepickerStartDateLabel,
              date: he(n, R, P.datepickerStartDatePlaceholder),
              isActive: l === ve,
              vertical: m,
            }),
            e.createElement(
              dn,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(wn, {
                height: oe.datepickerSelectDateArrowIconHeight,
                width: oe.datepickerSelectDateArrowIconWidth,
                iconColor: oe.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(En, {
              title: P.datepickerEndDateLabel,
              date: he(r, R, P.datepickerEndDatePlaceholder),
              isActive: l === De,
              vertical: m,
            }),
          ),
        ),
      e.createElement(
        pn,
        {position: 'relative'},
        e.createElement(
          pn,
          {m: oe.datepickerMonthsWrapperMargin},
          e.createElement(
            Br,
            {
              'data-testid': 'MonthGrid',
              overflow: oe.datepickerMonthsGridOverflow,
              height: oe.datepickerMonthsGridHeight,
              gridTemplateColumns: m ? '1fr' : 'repeat(' + U + ', 1fr)',
              gridGap: oe.datepickerMonthsGridGap,
              pr: h ? '1px' : '0',
              ref: re,
              onMouseLeave: function() {
                Z && X(null)
              },
            },
            I.map(function(t) {
              return e.createElement(Kn, {
                key: t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: V,
                dayLabelFormat: s || ee,
                weekdayLabelFormat: u || te,
                monthLabelFormat: d || ne,
              })
            }),
          ),
        ),
        e.createElement(
          dn,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            v &&
              e.createElement(
                dn,
                {flex: '1', m: oe.datepickerResetDatesWrapperMargin},
                e.createElement(or, {rtl: h, onResetDates: $, text: P.resetDates}),
              ),
            e.createElement(
              pn,
              {
                position: oe.datepickerPreviousMonthButtonPosition,
                top: oe.datepickerPreviousMonthButtonTop,
                left: oe.datepickerPreviousMonthButtonLeft,
                right: oe.datepickerPreviousMonthButtonRight,
                bottom: oe.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(dr, {
                type: 'prev',
                onClick: h && !m ? ie : le,
                vertical: m,
                rtl: h,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              pn,
              {
                position: oe.datepickerNextMonthButtonPosition,
                top: oe.datepickerNextMonthButtonTop,
                left: oe.datepickerNextMonthButtonLeft,
                right: oe.datepickerNextMonthButtonRight,
                bottom: oe.datepickerNextMonthButtonBottom,
              },
              e.createElement(dr, {
                type: 'next',
                onClick: h && !m ? le : ie,
                vertical: m,
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
var Fr,
  Lr,
  Wr,
  Er,
  Tr,
  Hr = l(pn)(Lr || (Lr = xe(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(Fr || (Fr = xe(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Rr = l(wn)(
    Er || (Er = xe(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Jt,
    ft,
    function(e) {
      return (
        e.rtl &&
        s(
          Wr ||
            (Wr = xe(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  Or = l(un)(
    Tr || (Tr = xe(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Kt,
    At,
    Ut,
  )
function Pr(n) {
  var r = n.startDate,
    o = n.endDate,
    a = n.minBookingDate,
    l = n.maxBookingDate,
    c = n.firstDayOfWeek,
    s = n.onFocusChange,
    u = n.numberOfMonths,
    d = n.focusedInput,
    p = n.onDatesChange,
    f = n.exactMinBookingDays,
    m = n.dayLabelFormat,
    g = n.weekdayLabelFormat,
    h = n.monthLabelFormat,
    y = n.onDayRender,
    v = n.showClose,
    D = void 0 === v || v,
    k = n.showSelectedDates,
    b = void 0 === k || k,
    x = n.showResetDates,
    S = void 0 === x || x,
    C = n.vertical,
    w = void 0 !== C && C,
    B = n.rtl,
    M = void 0 !== B && B,
    F = n.isDateBlocked,
    L =
      void 0 === F
        ? function() {
            return !1
          }
        : F,
    W = n.minBookingDays,
    E = void 0 === W ? 1 : W,
    T = n.onClose,
    H = void 0 === T ? function() {} : T,
    R = n.showStartDateCalendarIcon,
    O = void 0 === R || R,
    P = n.showEndDateCalendarIcon,
    z = void 0 === P || P,
    I = n.displayFormat,
    A = void 0 === I ? 'MM/DD/YYYY' : I,
    Y = n.phrases,
    j = void 0 === Y ? ln : Y,
    V = n.placement,
    N = void 0 === V ? 'bottom' : V,
    $ = i(null),
    G = mn(
      be(
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
        })(N),
      ),
    )
  function _(e) {
    null !== d && $ && $.current && !$.current.contains(e.target) && s(null)
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
      Hr,
      {rtl: M, position: 'relative', ref: $},
      e.createElement(
        Or,
        {
          background: G.dateRangeBackground,
          gridTemplateColumns: G.dateRangeGridTemplateColumns,
          border: G.dateRangeBorder,
          borderRadius: G.dateRangeBorderRadius,
        },
        e.createElement(Cn, {
          id: 'startDate',
          ariaLabel: j.startDateAriaLabel,
          placeholder: j.startDatePlaceholder,
          value: he(r, A, ''),
          onClick: function() {
            return s(ve)
          },
          showCalendarIcon: O,
          vertical: w,
          isActive: d === ve,
          padding: G.dateRangeStartDateInputPadding,
          rtl: M,
        }),
        e.createElement(
          dn,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Rr, {
            width: G.dateRangeArrowIconWidth,
            height: G.dateRangeArrowIconHeight,
            color: G.dateRangeArrowIconColor,
            opacity: G.dateRangeArrowIconOpacity,
            rtl: M,
          }),
        ),
        e.createElement(Cn, {
          id: 'endDate',
          ariaLabel: j.endDateAriaLabel,
          placeholder: j.endDatePlaceholder,
          value: he(o, A, ''),
          onClick: function() {
            return s(r ? De : ve)
          },
          showCalendarIcon: z,
          vertical: w,
          isActive: d === De,
          padding: G.dateRangeEndDateInputPadding,
          rtl: M,
          disableAccessibility: d === ve,
        }),
      ),
      e.createElement(
        pn,
        {
          position: G.dateRangeDatepickerWrapperPosition,
          bottom: G.dateRangeDatepickerWrapperBottom,
          left: G.dateRangeDatepickerWrapperLeft,
          top: G.dateRangeDatepickerWrapperTop,
          right: G.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(Mr, {
            onClose: function() {
              H(), s(null)
            },
            startDate: r,
            endDate: o,
            minBookingDate: a,
            maxBookingDate: l,
            firstDayOfWeek: c,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: A,
            onDatesChange: p,
            minBookingDays: E,
            isDateBlocked: L,
            exactMinBookingDays: f,
            showResetDates: S,
            vertical: w,
            showSelectedDates: b,
            showClose: D,
            rtl: M,
            dayLabelFormat: m,
            weekdayLabelFormat: g,
            monthLabelFormat: h,
            onDayRender: y,
          }),
      ),
    )
  )
}
export {Pr as DateRangeInput, Mr as Datepicker, De as END_DATE, ve as START_DATE, cn as phrases}
