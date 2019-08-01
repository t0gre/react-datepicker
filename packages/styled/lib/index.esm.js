import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as a,
  useContext as o,
  useRef as i,
  useImperativeHandle as l,
} from 'react'
import c, {ThemeContext as d, css as s, keyframes as u} from 'styled-components'
var p = function(e) {
    var t = new Date(e.getTime()),
      n = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * n + (t.getTime() % 6e4)
  },
  f = function(e) {
    return e instanceof Date
  },
  g = 36e5,
  m = /[T ]/,
  h = /:/,
  D = /^(\d{2})$/,
  y = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  v = /^(\d{4})/,
  k = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  b = /^-(\d{2})$/,
  x = /^-?(\d{3})$/,
  S = /^-?(\d{2})-?(\d{2})$/,
  w = /^-?W(\d{2})$/,
  C = /^-?W(\d{2})-?(\d{1})$/,
  B = /^(\d{2}([.,]\d*)?)$/,
  F = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  L = /([Z+-].*)$/,
  M = /^(Z)$/,
  R = /^([+-])(\d{2})$/,
  H = /^([+-])(\d{2}):?(\d{2})$/
function T(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var a = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + a), r
}
var E,
  I = function(e, t) {
    if (f(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var n = (t || {}).additionalDigits
    n = null == n ? 2 : Number(n)
    var r,
      a,
      o,
      i = (function(e) {
        var t,
          n = {},
          r = e.split(m)
        if ((h.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var a = L.exec(t)
          a ? ((n.time = t.replace(a[1], '')), (n.timezone = a[1])) : (n.time = t)
        }
        return n
      })(e),
      l = (function(e, t) {
        var n,
          r = y[t],
          a = k[t]
        if ((n = v.exec(e) || a.exec(e))) {
          var o = n[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((n = D.exec(e) || r.exec(e))) {
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
        if ((n = b.exec(e)))
          return (r = new Date(0)), (a = parseInt(n[1], 10) - 1), r.setUTCFullYear(t, a), r
        if ((n = x.exec(e))) {
          r = new Date(0)
          var o = parseInt(n[1], 10)
          return r.setUTCFullYear(t, 0, o), r
        }
        if ((n = S.exec(e))) {
          ;(r = new Date(0)), (a = parseInt(n[1], 10) - 1)
          var i = parseInt(n[2], 10)
          return r.setUTCFullYear(t, a, i), r
        }
        return (n = w.exec(e))
          ? T(t, parseInt(n[1], 10) - 1)
          : (n = C.exec(e))
          ? T(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(l.restDateString, c)
    if (d) {
      var s,
        u = d.getTime(),
        E = 0
      if (
        (i.time &&
          (E = (function(e) {
            var t, n, r
            if ((t = B.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * g
            if ((t = F.exec(e)))
              return (
                (n = parseInt(t[1], 10)),
                (r = parseFloat(t[2].replace(',', '.'))),
                (n % 24) * g + 6e4 * r
              )
            if ((t = W.exec(e))) {
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
            ((a = M.exec(r))
              ? 0
              : (a = R.exec(r))
              ? ((o = 60 * parseInt(a[2], 10)), '+' === a[1] ? -o : o)
              : (a = H.exec(r))
              ? ((o = 60 * parseInt(a[2], 10) + parseInt(a[3], 10)), '+' === a[1] ? -o : o)
              : 0))
      else {
        var I = u + E,
          z = new Date(I)
        s = p(z)
        var O = new Date(I)
        O.setDate(z.getDate() + 1)
        var P = p(O) - p(z)
        P > 0 && (s += P)
      }
      return new Date(u + E + s)
    }
    return new Date(e)
  },
  z = function(e) {
    var t = I(e)
    return t.setHours(0, 0, 0, 0), t
  },
  O = function(e) {
    var t = I(e)
    return (
      (function(e, t) {
        var n = z(e),
          r = z(t),
          a = n.getTime() - 6e4 * n.getTimezoneOffset(),
          o = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((a - o) / 864e5)
      })(
        t,
        (function(e) {
          var t = I(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  P = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = I(e),
      a = r.getDay(),
      o = (a < n ? 7 : 0) + a - n
    return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
  },
  A = function(e) {
    return P(e, {weekStartsOn: 1})
  },
  Y = function(e) {
    var t = I(e),
      n = t.getFullYear(),
      r = new Date(0)
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
    var a = A(r),
      o = new Date(0)
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0)
    var i = A(o)
    return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
  },
  j = function(e) {
    var t = I(e),
      n =
        A(t).getTime() -
        (function(e) {
          var t = Y(e),
            n = new Date(0)
          return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), A(n)
        })(t).getTime()
    return Math.round(n / 6048e5) + 1
  },
  N = function(e) {
    if (f(e)) return !isNaN(e)
    throw new TypeError(toString.call(e) + ' is not an instance of Date')
  },
  G = [
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
  $ = function(e) {
    var t = []
    for (var n in e) e.hasOwnProperty(n) && t.push(n)
    var r = G.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
  },
  V = {
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
        {formatters: c, formattingTokensRegExp: $(c)}
      )
    })(),
  },
  X = {
    M: function(e) {
      return e.getMonth() + 1
    },
    MM: function(e) {
      return Z(e.getMonth() + 1, 2)
    },
    Q: function(e) {
      return Math.ceil((e.getMonth() + 1) / 3)
    },
    D: function(e) {
      return e.getDate()
    },
    DD: function(e) {
      return Z(e.getDate(), 2)
    },
    DDD: function(e) {
      return O(e)
    },
    DDDD: function(e) {
      return Z(O(e), 3)
    },
    d: function(e) {
      return e.getDay()
    },
    E: function(e) {
      return e.getDay() || 7
    },
    W: function(e) {
      return j(e)
    },
    WW: function(e) {
      return Z(j(e), 2)
    },
    YY: function(e) {
      return Z(e.getFullYear(), 4).substr(2)
    },
    YYYY: function(e) {
      return Z(e.getFullYear(), 4)
    },
    GG: function(e) {
      return String(Y(e)).substr(2)
    },
    GGGG: function(e) {
      return Y(e)
    },
    H: function(e) {
      return e.getHours()
    },
    HH: function(e) {
      return Z(e.getHours(), 2)
    },
    h: function(e) {
      var t = e.getHours()
      return 0 === t ? 12 : t > 12 ? t % 12 : t
    },
    hh: function(e) {
      return Z(X.h(e), 2)
    },
    m: function(e) {
      return e.getMinutes()
    },
    mm: function(e) {
      return Z(e.getMinutes(), 2)
    },
    s: function(e) {
      return e.getSeconds()
    },
    ss: function(e) {
      return Z(e.getSeconds(), 2)
    },
    S: function(e) {
      return Math.floor(e.getMilliseconds() / 100)
    },
    SS: function(e) {
      return Z(Math.floor(e.getMilliseconds() / 10), 2)
    },
    SSS: function(e) {
      return Z(e.getMilliseconds(), 3)
    },
    Z: function(e) {
      return U(e.getTimezoneOffset(), ':')
    },
    ZZ: function(e) {
      return U(e.getTimezoneOffset())
    },
    X: function(e) {
      return Math.floor(e.getTime() / 1e3)
    },
    x: function(e) {
      return e.getTime()
    },
  }
function U(e, t) {
  t = t || ''
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = r % 60
  return n + Z(Math.floor(r / 60), 2) + t + Z(a, 2)
}
function Z(e, t) {
  for (var n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return n
}
var J = function(e, t, n) {
    var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (n || {}).locale,
      o = V.format.formatters,
      i = V.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var l = I(e)
    return N(l)
      ? (function(e, t, n) {
          var r,
            a,
            o,
            i = e.match(n),
            l = i.length
          for (r = 0; r < l; r++)
            (a = t[i[r]] || X[i[r]]),
              (i[r] =
                a ||
                ((o = i[r]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < l; n++)
              i[n] instanceof Function ? (t += i[n](e, X)) : (t += i[n])
            return t
          }
        })(r, o, i)(l)
      : 'Invalid Date'
  },
  Q = function(e, t) {
    var n = I(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  _ = function(e, t, n) {
    var r = I(e),
      a = void 0 !== n ? n : 1,
      o = I(t).getTime()
    if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      l = r
    for (l.setHours(0, 0, 0, 0); l.getTime() <= o; ) i.push(I(l)), l.setDate(l.getDate() + a)
    return i
  },
  q = function(e) {
    var t = I(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  K = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = I(e),
      a = r.getDay(),
      o = 6 + (a < n ? -7 : 0) - (a - n)
    return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
  },
  ee = function(e) {
    return I(e).getDay()
  },
  te = function(e) {
    var t = I(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var ne = function(e) {
    return J(e, 'DD')
  },
  re = function(e) {
    return J(e, 'dd')
  },
  ae = function(e) {
    return J(e, 'MMMM YYYY')
  }
function oe(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    o = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    l = void 0 === i ? ne : i,
    c = e.weekdayLabelFormat,
    d = void 0 === c ? re : c,
    s = e.monthLabelFormat,
    u = void 0 === s ? ae : s
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
                    return J(e, 'DD')
                  }
                : o,
            l = new Date(t, n),
            c = te(l),
            d = ee(c),
            s = q(l),
            u = Array.from(Array(d >= a ? d - a : a).keys()).fill(0),
            p = _(c, s).map(function(e) {
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
                    return J(e, 'dd')
                  }
                : a,
            i = new Date()
          return _(Q(P(i), r), Q(K(i), r)).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: d})
      },
      [o, d],
    ),
    monthLabel: u(new Date(t, n)),
  }
}
var ie = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getTime() < r.getTime()
  },
  le = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getTime() > r.getTime()
  },
  ce = function(e, t, n) {
    var r = I(e).getTime(),
      a = I(t).getTime(),
      o = I(n).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return r >= a && r <= o
  },
  de = function(e, t) {
    var n = z(e),
      r = z(t)
    return n.getTime() === r.getTime()
  },
  se = function(e, t) {
    var n = I(e),
      r = I(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  ue = function(e) {
    return I(e).getFullYear()
  },
  pe = function(e) {
    return I(e).getMonth()
  },
  fe = function() {
    return z(new Date())
  },
  ge = function(e, t) {
    var n = I(e),
      r = Number(t),
      a = n.getMonth() + r,
      o = new Date(0)
    o.setFullYear(n.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = I(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        a = new Date(0)
      return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
    })(o)
    return n.setMonth(a, Math.min(i, n.getDate())), n
  }
function me(e) {
  var t = te(e)
  return {year: ue(t), month: pe(t), date: t}
}
function he(e, t) {
  var n = me(t || fe()),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = ge(e[e.length - 1].date, 1)), e.concat([me(r)])
      }, a)),
    a
  )
}
function De(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (r = 0 === e.length ? ge(r, n) : ge(r, n >= 0 ? 1 : -1)),
      n > 0 ? e.concat([me(r)]) : [me(r)].concat(e)
    )
  }, [])
}
function ye(e, t, n) {
  return e && 'string' == typeof t ? J(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ve(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    l = e.maxBookingDate,
    c = !i || !ie(t, Q(i, -1)),
    d = !l || !le(Q(t, a - 1), l)
  if (t && 1 === a && !n && !r(t)) return !0
  if ((t && a > 1 && !n && !o) || (t && a > 0 && o && c && d) || (t && a > 0 && o && !i && !l))
    return _(t, Q(t, a - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !o) {
    var s = Q(t, a - 1)
    return (
      !ie(n, s) &&
      _(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var ke = 'startDate',
  be = 'endDate'
function xe(e) {
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
      return he(m, a)
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
        W(e), (!F || (F && !se(e, F))) && x(he(m, e))
      },
      [W, x, m, F],
    ),
    M = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && ce(e, t, n)
        })(e, a, o)
      },
      [a, o],
    ),
    R = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && de(e, t)) || (n && de(e, n)))
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
            (d && ie(t, d)) ||
            (s && le(t, s)) ||
            (o && !i && c > 1 && ce(t, o, Q(o, c - 2))) ||
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
    T = r(
      function(e) {
        return !!F && de(e, F)
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
          return o && i > 1 && e.exactMinBookingDays && ce(t, o, Q(o, i - 1))
            ? _(o, Q(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : n && !r && o && ce(t, n, Q(n, i - 1)) && de(n, o) && i > 1
            ? _(n, Q(n, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!n || r || !o || ie(o, n) || !ce(t, n, o)) &&
              _(n, o).reduce(function(e, t) {
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
  function I(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !F
    ) {
      var t = b[0]
      L(t.date), x(he(m, t.date))
    }
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', I),
        function() {
          window.removeEventListener('keydown', I)
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
        d({startDate: null, endDate: null, focusedInput: ke})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !H(e) || (a && de(e, a)),
              n = !l || !ie(e, Q(l, -1)),
              r = !c || !le(e, c),
              i = Q(e, f - 1),
              d = !l || !ie(i, l),
              s = !c || !le(i, c),
              p = u && f > 1 && n && r && d && s,
              g = a && !o && !u && n && r,
              m = !(f > 1 && a) || ce(e, a, Q(a, f - 2)),
              h = a && de(e, a) && m
            t && (p || g || h) ? C(e) : null !== w && C(null)
          }
        } else C(null)
      },
      onDateSelect: function(e) {
        ;(i === be || i === ke) &&
        f > 0 &&
        u &&
        ve({
          minBookingDays: f,
          exactMinBookingDays: u,
          minBookingDate: l,
          maxBookingDate: c,
          isDateBlocked: v,
          startDate: e,
          endDate: null,
        })
          ? d({startDate: e, endDate: Q(e, f - 1), focusedInput: null})
          : ((i === be && a && ie(e, a)) || (i === ke && o && le(e, o))) &&
            !u &&
            ve({minBookingDays: f, isDateBlocked: v, startDate: e, endDate: null})
          ? d({endDate: null, startDate: e, focusedInput: be})
          : i === ke && !u && ve({minBookingDays: f, isDateBlocked: v, endDate: o, startDate: e})
          ? d({endDate: o, startDate: e, focusedInput: be})
          : i === ke && !u && ve({minBookingDays: f, isDateBlocked: v, endDate: null, startDate: e})
          ? d({endDate: null, startDate: e, focusedInput: be})
          : i === be &&
            a &&
            !ie(e, a) &&
            !u &&
            ve({minBookingDays: f, isDateBlocked: v, startDate: a, endDate: e}) &&
            d({startDate: a, endDate: e, focusedInput: null}),
          i === be || (F && (!F || se(e, F))) || x(he(m, e))
      },
      onDateFocus: L,
      goToPreviousMonths: function() {
        x(De(b, m, -1)), W(null)
      },
      goToNextMonths: function() {
        x(De(b, m, 1)), W(null)
      },
      goToPreviousYear: function() {
        x(De(b, m, -11)), W(null)
      },
      goToNextYear: function() {
        x(De(b, m, 11)), W(null)
      },
    }
  )
}
var Se = function() {
  return (Se =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function we(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var Ce = Object.getOwnPropertySymbols,
  Be = Object.prototype.hasOwnProperty,
  Fe = Object.prototype.propertyIsEnumerable
function We(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var Le = (function() {
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
        for (var n, r, a = We(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) Be.call(n, i) && (a[i] = n[i])
          if (Ce) {
            r = Ce(n)
            for (var l = 0; l < r.length; l++) Fe.call(n, r[l]) && (a[r[l]] = n[r[l]])
          }
        }
        return a
      },
  Me = function(e, t) {
    var n = Le({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && Le(n, (((a = {})[r] = Le(e[r], t[r])), a))
    }
    return n
  },
  Re = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  He = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  Te = function(e, t) {
    return Ee(t, e, e)
  },
  Ee = function(e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Ie = function e(t) {
    var n = {},
      r = function(e) {
        var r,
          a,
          o = {},
          i = !1,
          l = e.theme && e.theme.disableStyledSystemCache
        for (var c in e)
          if (t[c]) {
            var d = t[c],
              s = e[c],
              u = Ee(e.theme, d.scale, d.defaults)
            if ('object' != typeof s) Le(o, d(s, u))
            else {
              if (
                ((n.breakpoints =
                  (!l && n.breakpoints) || Ee(e.theme, 'breakpoints', Re.breakpoints)),
                Array.isArray(s))
              ) {
                ;(n.media = (!l && n.media) || [null].concat(n.breakpoints.map(He))),
                  (o = Me(o, ze(n.media, d, u, s)))
                continue
              }
              null !== s && ((o = Me(o, Oe(n.breakpoints, d, u, s))), (i = !0))
            }
          }
        return (
          i &&
            ((r = o),
            (a = {}),
            Object.keys(r)
              .sort()
              .forEach(function(e) {
                a[e] = r[e]
              }),
            (o = a)),
          o
        )
      }
    ;(r.config = t), (r.propNames = Object.keys(t)), (r.cache = n)
    var a = Object.keys(t).filter(function(e) {
      return 'config' !== e
    })
    return (
      a.length > 1 &&
        a.forEach(function(n) {
          var a
          r[n] = e((((a = {})[n] = t[n]), a))
        }),
      r
    )
  },
  ze = function(e, t, n, r) {
    var a = {}
    return (
      r.slice(0, e.length).forEach(function(r, o) {
        var i,
          l = e[o],
          c = t(r, n)
        l ? Le(a, (((i = {})[l] = Le({}, a[l], c)), i)) : Le(a, c)
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
          d = He(i)
        Le(a, (((c = {})[d] = Le({}, a[d], l)), c))
      } else Le(a, l)
    }
    return a
  },
  Pe = function(e) {
    var t = e.properties,
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? Te : a,
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
  Ae = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(n) {
        var r = e[n]
        t[n] = !0 !== r ? ('function' != typeof r ? Pe(r) : r) : Pe({property: n, scale: n})
      }),
      Ie(t)
    )
  },
  Ye = function() {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    n.forEach(function(t) {
      t && t.config && Le(e, t.config)
    })
    var a = Ie(e)
    return a
  },
  je = Ae({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return Ee(
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
  Ne = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Ne.bg = Ne.backgroundColor
var Ge = Ae(Ne),
  $e = Ae({
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
  Ve = Ae({
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
  Xe = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Ue = Ae({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Xe.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Xe.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Xe.space},
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
  Ze = Ae({
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
var Qe = Ae(Je),
  _e = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  qe = Ae({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: _e.space},
    right: {property: 'right', scale: 'space', defaultScale: _e.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: _e.space},
    left: {property: 'left', scale: 'space', defaultScale: _e.space},
  }),
  Ke = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  et = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  tt = function(e, t) {
    if (!et(e)) return Ee(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Ee(t, r, r)
    return et(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
  },
  nt = {}
;(nt.margin = {
  margin: {property: 'margin', scale: 'space', transform: tt, defaultScale: Ke.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: tt, defaultScale: Ke.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: tt, defaultScale: Ke.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: tt, defaultScale: Ke.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: tt, defaultScale: Ke.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: tt,
    defaultScale: Ke.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: tt,
    defaultScale: Ke.space,
  },
}),
  (nt.margin.m = nt.margin.margin),
  (nt.margin.mt = nt.margin.marginTop),
  (nt.margin.mr = nt.margin.marginRight),
  (nt.margin.mb = nt.margin.marginBottom),
  (nt.margin.ml = nt.margin.marginLeft),
  (nt.margin.mx = nt.margin.marginX),
  (nt.margin.my = nt.margin.marginY),
  (nt.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Ke.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Ke.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Ke.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Ke.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Ke.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Ke.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Ke.space},
  }),
  (nt.padding.p = nt.padding.padding),
  (nt.padding.pt = nt.padding.paddingTop),
  (nt.padding.pr = nt.padding.paddingRight),
  (nt.padding.pb = nt.padding.paddingBottom),
  (nt.padding.pl = nt.padding.paddingLeft),
  (nt.padding.px = nt.padding.paddingX),
  (nt.padding.py = nt.padding.paddingY)
var rt,
  at,
  ot,
  it = Ye(Ae(nt.margin), Ae(nt.padding)),
  lt = Ae({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  }),
  ct = function(e) {
    var t,
      n = e.scale,
      r = e.prop,
      a = void 0 === r ? 'variant' : r,
      o = e.key,
      i = function(e, t) {
        return Ee(t, e, null)
      }
    i.scale = n || o
    var l = (((t = {})[a] = i), t)
    return Ie(l)
  },
  dt =
    (ct({key: 'buttons'}),
    ct({key: 'textStyles', prop: 'textStyle'}),
    ct({key: 'colorStyles', prop: 'colors'}),
    je.width),
  st = je.height,
  ut = je.minHeight,
  pt = je.display,
  ft = je.overflow,
  gt = Ge.opacity,
  mt = $e.fontSize,
  ht = $e.fontFamily,
  Dt = $e.fontWeight,
  yt = $e.lineHeight,
  vt = Ve.alignItems,
  kt = Ve.justifyContent,
  bt = Ve.flexWrap,
  xt = Ve.flexDirection,
  St = Ve.flex,
  wt = Ue.gridGap,
  Ct = Ue.gridColumnGap,
  Bt = Ue.gridRowGap,
  Ft = Ue.gridAutoFlow,
  Wt = Ue.gridAutoColumns,
  Lt = Ue.gridAutoRows,
  Mt = Ue.gridTemplateColumns,
  Rt = Ue.gridTemplateRows,
  Ht = Ue.gridTemplateAreas,
  Tt = Ue.gridArea,
  Et = Ze.borderRadius,
  It = qe.zIndex,
  zt = qe.top,
  Ot = qe.right,
  Pt = qe.bottom,
  At = qe.left,
  Yt = function(e) {
    var t = e.prop,
      n = e.cssProperty,
      r = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      l = e.properties,
      c = {}
    return (
      (c[t] = Pe({properties: l, property: n || t, scale: a, defaultScale: i, transform: o})),
      r && (c[r] = c[t]),
      Ie(c)
    )
  },
  jt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Nt = Se({}, jt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Gt = Se({}, jt, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  $t = Yt({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vt = Ye(Wt, Ft, Lt, Ct, wt, Bt, Ht, Mt, Rt, vt, kt, it),
  Xt = c('div')(
    rt ||
      (rt = we(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    Vt,
    $t,
  ),
  Ut = Ye(it, St, bt, xt, vt, kt, Tt, st, dt),
  Zt = c('div')(
    at || (at = we(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    Ut,
  ),
  Jt = Ye(Tt, st, it, dt, qe, zt, At, Ot, Pt, It),
  Qt = c('div')(
    ot ||
      (ot = we(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    Jt,
  )
function _t(t) {
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
function qt(e) {
  void 0 === e && (e = {})
  var t = o(d)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var a
            return Se({}, n, (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var Kt = {
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
function en(e, t, n) {
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
var tn,
  nn,
  rn,
  an = Yt({prop: 'placeholderColor', cssProperty: 'color'}),
  on = Yt({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  ln = Ye(qe, Ze, Qe, pt, Et, it),
  cn = c('label')(tn || (tn = we(['\n  ', '\n'], ['\n  ', '\n'])), ln),
  dn = Ye(qe, At, Ot, zt, st, dt),
  sn = c('div')(
    nn ||
      (nn = we(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    dn,
  ),
  un = Ye(Qe, it, ht, mt, Ge, Dt, it, Ze, dt, ut, lt),
  pn = c('input')(
    rn ||
      (rn = we(
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
    un,
    on,
    an,
    on,
    an,
    on,
    an,
  )
function fn(r) {
  var a = r.placeholder,
    l = r.id,
    c = r.vertical,
    s = r.isActive,
    u = r.ariaLabel,
    p = r.onClick,
    f = r.value,
    g = r.showCalendarIcon,
    m = r.padding,
    h = r.rtl,
    D = r.disableAccessibility,
    y = r.dateFormat,
    v = r.onChange,
    k = void 0 === v ? function() {} : v,
    b = n(f),
    x = b[0],
    S = b[1],
    w = i(null)
  t(
    function() {
      S(f)
    },
    [f],
  )
  var C = o(d),
    B = qt({
      fontFamily: Kt.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: en('charcoal', Kt.colors.charcoal, C),
      inputBackground: en('white', Kt.colors.white, C),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: m,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: en('silverCloud', Kt.colors.silverCloud, C),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: h ? 'unset' : c ? '8px' : '16px',
      inputCalendarWrapperRight: h ? (c ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: en('graci', Kt.colors.graci, C),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + en('graci', Kt.colors.graci, C),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: en('white', Kt.colors.white, C),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + en('primaryColor', Kt.colors.primaryColor, C),
    })
  return e.createElement(
    cn,
    {
      htmlFor: l,
      display: B.inputLabelDisplay,
      position: B.inputLabelPosition,
      border: B.inputLabelBorder,
      background: B.inputLabelBackground,
      borderRadius: B.inputLabelBorderRadius,
      m: B.inputLabelMargin,
    },
    g &&
      e.createElement(
        sn,
        {
          position: B.inputCalendarWrapperPosition,
          height: B.inputCalendarWrapperHeight,
          width: B.inputCalendarWrapperWidth,
          top: B.inputCalendarWrapperTop,
          left: B.inputCalendarWrapperLeft,
          right: B.inputCalendarWrapperRight,
        },
        e.createElement(_t, {
          width: B.inputCalendarIconWidth,
          height: B.inputCalendarIconHeight,
          color: B.inputCalendarIconColor,
        }),
      ),
    e.createElement(pn, {
      tabIndex: D ? -1 : 0,
      border: B.inputBorder,
      p: B.inputPadding,
      width: B.inputWidth,
      minHeight: B.inputMinHeight,
      background: B.inputBackground,
      fontFamily: B.fontFamily,
      color: B.inputColor,
      fontSize: B.inputFontSize,
      fontWeight: B.inputFontWeight,
      placeholderColor: B.inputPlaceholderColor,
      placeholderFontWeight: B.inputPlaceholderFontWeight,
      boxShadow: s ? B.inputActiveBoxShadow : 'none',
      id: l,
      placeholder: a,
      'aria-label': u,
      value: x,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        S(t),
          'number' == typeof w.current && clearTimeout(w.current),
          (w.current = setTimeout(function() {
            p()
            var e = I(t, y)
            isNaN(e) || k(e)
          }, 1e3))
      },
      onFocus: p,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function gn(t) {
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
var mn,
  hn,
  Dn,
  yn = Ye(ht, mt, Dt, Ge, yt, it),
  vn = c('div')(mn || (mn = we(['\n  ', '\n'], ['\n  ', '\n'])), yn),
  kn = c(vn)(
    Dn ||
      (Dn = we(
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
        s(
          hn ||
            (hn = we(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          n,
        )
      )
    },
  )
function bn(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    i = t.vertical,
    l = o(d),
    c = qt({
      fontFamily: Kt.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: en('silverCloud', Kt.colors.silverCloud, l),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: en('charcoal', Kt.colors.charcoal, l),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: en('primaryColor', Kt.colors.primaryColor, l),
      selectDatePadding: '0',
    })
  return e.createElement(
    Qt,
    {p: c.selectDatePadding},
    e.createElement(
      vn,
      {
        fontFamily: c.fontFamily,
        fontSize: c.selectDateLabelFontSize,
        color: c.selectDateLabelColor,
        m: c.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      kn,
      {
        as: 'span',
        color: c.selectDateDateColor,
        fontSize: c.selectDateDateFontSize,
        fontWeight: c.selectDateDateFontWeight,
        fontFamily: c.fontFamily,
        p: c.selectDateDatePadding,
        isActive: r,
        selectDateBorderColor: c.selectDateBorderColor,
      },
      a,
    ),
  )
}
var xn,
  Sn,
  wn,
  Cn,
  Bn,
  Fn = function(t) {
    var n = t.label,
      r = o(d),
      a = qt({
        fontFamily: Kt.fontFamily,
        monthLabelColor: en('darcula', Kt.colors.darcula, r),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      vn,
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
  Wn = function(t) {
    var n = t.label,
      r = o(d),
      a = qt({
        fontFamily: Kt.fontFamily,
        dayLabelColor: en('silverCloud', Kt.colors.silverCloud, r),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      vn,
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
  Ln = {
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
  Mn = e.createContext(Ln),
  Rn = Yt({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Hn = Yt({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Tn = Yt({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  En = Yt({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  In = Yt({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  zn = Yt({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  On = Ye(lt, Qe, Ge, ht, Dt, mt),
  Pn = c('button')(
    Bn ||
      (Bn = we(
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
    Rn,
    Hn,
    On,
    function(e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        s(
          xn ||
            (xn = we(
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
          ? s(
              wn ||
                (wn = we(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              zn,
              En,
            )
          : ''
        : s(
            Sn ||
              (Sn = we(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            In,
            Tn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return s(
        Cn ||
          (Cn = we(
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
    l = r.rangeHover
  return t ? a : e ? i : n ? l : o
}
function Yn(n) {
  var l = n.day,
    c = n.date,
    s = i(null),
    u = o(Mn),
    p = u.focusedDate,
    f = u.isDateFocused,
    g = u.isDateSelected,
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
            ? u(Q(n, 1))
            : 'ArrowLeft' === e.key
            ? u(Q(n, -1))
            : 'ArrowUp' === e.key
            ? u(Q(n, -7))
            : 'ArrowDown' === e.key && u(Q(n, 7))
        },
        onClick: h ? function() {} : g,
        onMouseEnter: m,
      }
    })({
      date: c,
      focusedDate: p,
      isDateFocused: f,
      isDateSelected: g,
      isDateHovered: m,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: D,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: k,
      dayRef: s,
    }),
    S = o(d),
    w = en('white', Kt.colors.white, S),
    C = en('mud', Kt.colors.mud, S),
    B = en('primaryColor', Kt.colors.primaryColor, S),
    F = en('accessibility', Kt.colors.accessibility, S),
    W = en('selectedDay', Kt.colors.selectedDay, S),
    L = en('selectedDayHover', Kt.colors.selectedDayHover, S),
    M = en('normalDayHover', Kt.colors.normalDayHover, S),
    R = qt({
      fontFamily: Kt.fontFamily,
      daySize: Kt.daySize,
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
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
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
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
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
        return An(x.isSelected, x.isSelectedStartOrEnd, x.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastColor,
          selected: R.daySelectedColor,
          normal: R.dayColor,
          rangeHover: R.dayHoverRangeColor,
        })
      },
      [x.isSelected, x.isSelectedStartOrEnd, R, x.isWithinHoverRange],
    )
  return e.createElement(
    Pn,
    Se({}, x, {
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
      'aria-label': 'Day-' + c.toDateString(),
    }),
    'function' == typeof b
      ? b(c)
      : e.createElement(
          Zt,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          l,
        ),
  )
}
var jn,
  Nn,
  Gn = u(
    jn ||
      (jn = we(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  $n = c('div')(
    Nn ||
      (Nn = we(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    Gn,
  ),
  Vn = function(t) {
    var n = t.year,
      r = t.month,
      a = t.firstDayOfWeek,
      o = oe({
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
      d = qt({daySize: Kt.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      $n,
      null,
      e.createElement(
        Zt,
        {justifyContent: 'center', m: d.monthLabelMargin},
        e.createElement(Fn, {label: c}),
      ),
      e.createElement(
        Xt,
        {daySizeGridTemplateColumns: d.daySize},
        l.map(function(t) {
          return e.createElement(
            Zt,
            {key: t, justifyContent: 'center', m: d.monthDayLabelMargin},
            e.createElement(Wn, {label: t}),
          )
        }),
      ),
      e.createElement(
        Xt,
        {daySizeGridTemplateColumns: d.daySize},
        i.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Yn, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Xn,
  Un,
  Zn,
  Jn = c('button')(
    Xn ||
      (Xn = we(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Qn = c(function(t) {
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
  })(Zn || (Zn = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(
        Un ||
          (Un = we(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function _n(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    i = o(d),
    l = qt({
      fontFamily: Kt.fontFamily,
      resetDatesIconColor: en('mud', Kt.colors.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: en('darcula', Kt.colors.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Jn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(Qn, {
      height: l.resetDatesIconHeight,
      width: l.resetDatesIconWidth,
      color: l.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      vn,
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
var qn,
  Kn,
  er = c('svg')(Kn || (Kn = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      qn ||
        (qn = we(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function tr(t) {
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
    er,
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
var nr,
  rr = Ye(dt, st, Qe, it, Ze),
  ar = c('button')(
    nr ||
      (nr = we(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    rr,
  )
function or(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    i = t.rtl,
    l = t.ariaLabel,
    c = o(d),
    s = qt({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: en('white', Kt.colors.white, c),
      navButtonBorder: '1px solid ' + en('silverCloud', Kt.colors.silverCloud, c),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: en('greey', Kt.colors.greey, c),
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
    ar,
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
    e.createElement(tr, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: u(),
    }),
  )
}
function ir(t) {
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
var lr,
  cr,
  dr = Ye(it, Ge, mt, ht, Dt),
  sr = c('div')(
    lr ||
      (lr = we(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    dr,
  ),
  ur = c('button')(
    cr ||
      (cr = we(
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
    sr,
    Ge,
    Ge,
  )
function pr(t) {
  var n = t.onClick,
    r = t.rtl,
    a = t.closeText,
    i = o(d),
    l = qt({
      fontFamily: Kt.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: en('silverCloud', Kt.colors.silverCloud, i),
      closeHoverColor: en('darcula', Kt.colors.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    ur,
    {
      onClick: n,
      color: l.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(ir, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      sr,
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
var fr = u(
    br ||
      (br = we(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  gr = Ye(Qe, it, Et, qe, lt, dt),
  mr = c('div')(
    Sr ||
      (Sr = we(
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
    gr,
    function(e) {
      return (
        e.rtl &&
        s(xr || (xr = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    fr,
  ),
  hr = c('div')(
    wr ||
      (wr = we(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Dr = Ye(pt, kt),
  yr = c(Qt)(Cr || (Cr = we(['\n  ', '\n'], ['\n  ', '\n'])), Dr),
  vr = Ye(ft, st),
  kr = c(Xt)(Br || (Br = we(['\n  ', '\n'], ['\n  ', '\n'])), vr)
var br,
  xr,
  Sr,
  wr,
  Cr,
  Br,
  Fr,
  Wr,
  Lr,
  Mr,
  Rr,
  Hr = e.forwardRef(function(t, n) {
    var r = t.startDate,
      a = t.endDate,
      c = t.minBookingDate,
      s = t.maxBookingDate,
      u = t.focusedInput,
      p = t.onDatesChange,
      f = t.dayLabelFormat,
      g = t.weekdayLabelFormat,
      m = t.monthLabelFormat,
      h = t.onDayRender,
      D = t.vertical,
      y = void 0 !== D && D,
      v = t.rtl,
      k = void 0 !== v && v,
      b = t.showResetDates,
      x = void 0 === b || b,
      S = t.showClose,
      w = void 0 === S || S,
      C = t.showSelectedDates,
      B = void 0 === C || C,
      F = t.exactMinBookingDays,
      W = void 0 !== F && F,
      L = t.isDateBlocked,
      M =
        void 0 === L
          ? function() {
              return !1
            }
          : L,
      R = t.minBookingDays,
      H = void 0 === R ? 1 : R,
      T = t.onClose,
      E = void 0 === T ? function() {} : T,
      I = t.numberOfMonths,
      z = t.firstDayOfWeek,
      O = t.displayFormat,
      P = void 0 === O ? 'MM/DD/YYYY' : O,
      A = t.phrases,
      Y = void 0 === A ? jt : A,
      j = xe({
        startDate: r,
        endDate: a,
        focusedInput: u,
        onDatesChange: p,
        minBookingDate: c,
        maxBookingDate: s,
        minBookingDays: H,
        isDateBlocked: M,
        exactMinBookingDays: W,
        numberOfMonths: I,
        firstDayOfWeek: z,
      }),
      N = j.activeMonths,
      G = j.isDateSelected,
      $ = j.isFirstOrLastSelectedDate,
      V = j.isDateHovered,
      X = j.firstDayOfWeek,
      U = j.onDateSelect,
      Z = j.onResetDates,
      J = j.goToPreviousMonths,
      Q = j.goToNextMonths,
      _ = j.numberOfMonths,
      q = j.hoveredDate,
      K = j.onDateHover,
      ee = j.isDateFocused,
      te = j.focusedDate,
      oe = j.onDateFocus,
      ie = j.isDateBlocked
    l(n, function() {
      return {
        onDateSelect: function(e) {
          U(e)
        },
      }
    })
    var le = i(null),
      ce = o(d),
      de = qt({
        datepickerBackground: '#ffffff',
        datepickerPadding: y ? '16px 16px 0' : '32px',
        datepickerBorderRadius: '2px',
        datepickerPosition: 'relative',
        datepickerWidth: 'fit-content',
        datepickerCloseWrapperPosition: y ? 'relative' : 'absolute',
        datepickerCloseWrapperDisplay: y ? 'flex' : 'block',
        datepickerCloseWrapperJustifyContent: y ? 'flex-end' : 'initial',
        datepickerCloseWrapperMargin: y ? '0 0 16px' : '0',
        datepickerCloseWrapperRight: k ? 'unset' : y ? '0' : '32px',
        datepickerCloseWrapperTop: 'unset',
        datepickerCloseWrapperLeft: k ? '32px' : 'unset',
        datepickerCloseWrapperBottom: 'unset',
        datepickerCloseWrapperZIndex: 1,
        datepickerSelectDateGridTemplateColumns: y ? '87px 50px 87px' : '126px 75px 126px',
        datepickerSelectDateArrowIconWidth: '15px',
        datepickerSelectDateArrowIconHeight: '12px',
        datepickerSelectDateArrowIconColor: en('silverCloud', Kt.colors.silverCloud, ce),
        datepickerMonthsWrapperMargin: w || B ? (B ? '28px 0 0' : '48px 0 0') : 'unset',
        datepickerPreviousMonthButtonPosition: y ? 'relative' : 'absolute',
        datepickerPreviousMonthButtonTop: y ? 'unset' : '-5px',
        datepickerPreviousMonthButtonLeft: y ? 'unset' : '0',
        datepickerPreviousMonthButtonRight: 'unset',
        datepickerPreviousMonthButtonBottom: 'unset',
        datepickerNextMonthButtonPosition: y ? 'relative' : 'absolute',
        datepickerNextMonthButtonTop: y ? 'unset' : '-5px',
        datepickerNextMonthButtonLeft: 'unset',
        datepickerNextMonthButtonRight: y ? 'unset' : '0',
        datepickerNextMonthButtonBottom: 'unset',
        datepickerMonthsGridGap: y ? '32px' : '0 32px',
        datepickerMonthsGridOverflow: 'auto',
        datepickerMonthsGridHeight: y ? '50vh' : '100%',
        datepickerResetDatesWrapperMargin: y ? 'unset' : '32px 0 0',
        datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
      })
    function se() {
      le && le.current && y && (le.current.scrollTop = 0)
    }
    function ue() {
      Q(), se()
    }
    function pe() {
      J(), se()
    }
    return e.createElement(
      Mn.Provider,
      {
        value: {
          rtl: k,
          isDateFocused: ee,
          isDateSelected: G,
          isDateHovered: V,
          isFirstOrLastSelectedDate: $,
          onDateFocus: oe,
          focusedDate: te,
          onDateSelect: U,
          onDateHover: K,
          onDayRender: h,
          isDateBlocked: ie,
        },
      },
      e.createElement(
        mr,
        {
          background: de.datepickerBackground,
          p: de.datepickerPadding,
          borderRadius: de.datepickerBorderRadius,
          position: de.datepickerPosition,
          boxShadow: de.datepickerBoxShadow,
          width: de.datepickerWidth,
          rtl: k,
        },
        w &&
          e.createElement(
            yr,
            {
              m: de.datepickerCloseWrapperMargin,
              display: de.datepickerCloseWrapperDisplay,
              justifyContent: de.datepickerCloseWrapperJustifyContent,
              position: de.datepickerCloseWrapperPosition,
              right: de.datepickerCloseWrapperRight,
              top: de.datepickerCloseWrapperTop,
              left: de.datepickerCloseWrapperLeft,
              bottom: de.datepickerCloseWrapperBottom,
              zIndex: de.datepickerCloseWrapperZIndex,
            },
            e.createElement(pr, {onClick: E, rtl: k, closeText: Y.close}),
          ),
        B &&
          e.createElement(
            hr,
            null,
            e.createElement(
              Xt,
              {gridTemplateColumns: de.datepickerSelectDateGridTemplateColumns},
              e.createElement(bn, {
                title: Y.datepickerStartDateLabel,
                date: ye(r, P, Y.datepickerStartDatePlaceholder),
                isActive: u === ke,
                vertical: y,
              }),
              e.createElement(
                Zt,
                {justifyContent: 'center', alignItems: 'center'},
                e.createElement(gn, {
                  height: de.datepickerSelectDateArrowIconHeight,
                  width: de.datepickerSelectDateArrowIconWidth,
                  iconColor: de.datepickerSelectDateArrowIconColor,
                }),
              ),
              e.createElement(bn, {
                title: Y.datepickerEndDateLabel,
                date: ye(a, P, Y.datepickerEndDatePlaceholder),
                isActive: u === be,
                vertical: y,
              }),
            ),
          ),
        e.createElement(
          Qt,
          {position: 'relative'},
          e.createElement(
            Qt,
            {m: de.datepickerMonthsWrapperMargin},
            e.createElement(
              kr,
              {
                'data-testid': 'MonthGrid',
                overflow: de.datepickerMonthsGridOverflow,
                height: de.datepickerMonthsGridHeight,
                gridTemplateColumns: y ? '1fr' : 'repeat(' + _ + ', 1fr)',
                gridGap: de.datepickerMonthsGridGap,
                pr: k ? '1px' : '0',
                ref: le,
                onMouseLeave: function() {
                  q && K(null)
                },
              },
              N.map(function(t) {
                return e.createElement(Vn, {
                  key: 'month-' + t.year + '-' + t.month,
                  year: t.year,
                  month: t.month,
                  firstDayOfWeek: X,
                  dayLabelFormat: f || ne,
                  weekdayLabelFormat: g || re,
                  monthLabelFormat: m || ae,
                })
              }),
            ),
          ),
          e.createElement(
            Zt,
            {alignItems: 'center'},
            e.createElement(
              e.Fragment,
              null,
              x &&
                e.createElement(
                  Zt,
                  {flex: '1', m: de.datepickerResetDatesWrapperMargin},
                  e.createElement(_n, {rtl: k, onResetDates: Z, text: Y.resetDates}),
                ),
              e.createElement(
                Qt,
                {
                  position: de.datepickerPreviousMonthButtonPosition,
                  top: de.datepickerPreviousMonthButtonTop,
                  left: de.datepickerPreviousMonthButtonLeft,
                  right: de.datepickerPreviousMonthButtonRight,
                  bottom: de.datepickerPreviousMonthButtonBottom,
                },
                e.createElement(or, {
                  type: 'prev',
                  onClick: k && !y ? ue : pe,
                  vertical: y,
                  rtl: k,
                  ariaLabel: 'Previous month',
                }),
              ),
              e.createElement(
                Qt,
                {
                  position: de.datepickerNextMonthButtonPosition,
                  top: de.datepickerNextMonthButtonTop,
                  left: de.datepickerNextMonthButtonLeft,
                  right: de.datepickerNextMonthButtonRight,
                  bottom: de.datepickerNextMonthButtonBottom,
                },
                e.createElement(or, {
                  type: 'next',
                  onClick: k && !y ? pe : ue,
                  vertical: y,
                  rtl: k,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    )
  }),
  Tr = c(Qt)(Wr || (Wr = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(Fr || (Fr = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Er = Ye(Ge, gt),
  Ir = c(gn)(Mr || (Mr = we(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Er, function(e) {
    return (
      e.rtl &&
      s(
        Lr ||
          (Lr = we(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  zr = Ye(Qe, Ze, Et),
  Or = c(Xt)(Rr || (Rr = we(['\n  ', '\n'], ['\n  ', '\n'])), zr)
function Pr(n) {
  var r = n.startDate,
    a = n.endDate,
    l = n.minBookingDate,
    c = n.maxBookingDate,
    s = n.firstDayOfWeek,
    u = n.onFocusChange,
    p = n.numberOfMonths,
    f = n.focusedInput,
    g = n.onDatesChange,
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
    I = void 0 === E ? function() {} : E,
    z = n.showStartDateCalendarIcon,
    O = void 0 === z || z,
    P = n.showEndDateCalendarIcon,
    A = void 0 === P || P,
    Y = n.displayFormat,
    j = void 0 === Y ? 'MM/DD/YYYY' : Y,
    N = n.phrases,
    G = void 0 === N ? Nt : N,
    $ = n.placement,
    V = void 0 === $ ? 'bottom' : $,
    X = i(null),
    U = i(null),
    Z = o(d),
    J = qt(
      Se(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: F ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: en('graci', Kt.colors.graci, Z),
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
  function Q(e) {
    null !== f && U && U.current && !U.current.contains(e.target) && u(null)
  }
  function _(e) {
    X && X.current && X.current.onDateSelect && X.current.onDateSelect(e)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', Q),
        function() {
          window.removeEventListener('click', Q)
        }
      )
    }),
    e.createElement(
      Tr,
      {rtl: L, position: 'relative', ref: U},
      e.createElement(
        Or,
        {
          background: J.dateRangeBackground,
          gridTemplateColumns: J.dateRangeGridTemplateColumns,
          border: J.dateRangeBorder,
          borderRadius: J.dateRangeBorderRadius,
        },
        e.createElement(fn, {
          id: 'startDate',
          ariaLabel: G.startDateAriaLabel,
          placeholder: G.startDatePlaceholder,
          value: ye(r, j, ''),
          onClick: function() {
            return u(ke)
          },
          showCalendarIcon: O,
          vertical: F,
          isActive: f === ke,
          padding: J.dateRangeStartDateInputPadding,
          rtl: L,
          onChange: _,
          dateFormat: j,
        }),
        e.createElement(
          Zt,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Ir, {
            width: J.dateRangeArrowIconWidth,
            height: J.dateRangeArrowIconHeight,
            color: J.dateRangeArrowIconColor,
            opacity: J.dateRangeArrowIconOpacity,
            rtl: L,
          }),
        ),
        e.createElement(fn, {
          id: 'endDate',
          ariaLabel: G.endDateAriaLabel,
          placeholder: G.endDatePlaceholder,
          value: ye(a, j, ''),
          onClick: function() {
            return u(r ? be : ke)
          },
          showCalendarIcon: A,
          vertical: F,
          isActive: f === be,
          padding: J.dateRangeEndDateInputPadding,
          rtl: L,
          disableAccessibility: f === ke,
          onChange: _,
          dateFormat: j,
        }),
      ),
      e.createElement(
        Qt,
        {
          position: J.dateRangeDatepickerWrapperPosition,
          bottom: J.dateRangeDatepickerWrapperBottom,
          left: J.dateRangeDatepickerWrapperLeft,
          top: J.dateRangeDatepickerWrapperTop,
          right: J.dateRangeDatepickerWrapperRight,
        },
        null !== f &&
          e.createElement(Hr, {
            onClose: function() {
              I(), u(null)
            },
            startDate: r,
            endDate: a,
            minBookingDate: l,
            maxBookingDate: c,
            firstDayOfWeek: s,
            numberOfMonths: p,
            focusedInput: f,
            displayFormat: j,
            onDatesChange: g,
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
            ref: X,
          }),
      ),
    )
  )
}
var Ar,
  Yr,
  jr = c(Qt)(Yr || (Yr = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(Ar || (Ar = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function Nr(n) {
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
    E = void 0 === T ? Gt : T,
    I = n.placement,
    z = void 0 === I ? 'bottom' : I,
    O = i(null),
    P = i(null),
    A = qt(
      Se(
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
        })(z, w),
      ),
    )
  function Y(e) {
    d && P && P.current && !P.current.contains(e.target) && c(!1)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', Y),
        function() {
          window.removeEventListener('click', Y)
        }
      )
    }),
    e.createElement(
      jr,
      {rtl: w, position: 'relative', ref: P},
      e.createElement(fn, {
        id: 'startDate',
        ariaLabel: E.dateAriaLabel,
        placeholder: E.datePlaceholder,
        value: ye(r, H, ''),
        onClick: function() {
          return c(!0)
        },
        showCalendarIcon: M,
        vertical: x,
        isActive: !1,
        padding: A.dateSingleInputPadding,
        rtl: w,
        onChange: function(e) {
          O && O.current && O.current.onDateSelect && O.current.onDateSelect(e)
        },
        dateFormat: H,
      }),
      e.createElement(
        Qt,
        {
          position: A.dateSingleDatepickerWrapperPosition,
          bottom: A.dateSingleDatepickerWrapperBottom,
          left: A.dateSingleDatepickerWrapperLeft,
          top: A.dateSingleDatepickerWrapperTop,
          right: A.dateSingleDatepickerWrapperRight,
        },
        d &&
          e.createElement(Hr, {
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
            focusedInput: d ? ke : null,
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
            monthLabelFormat: f,
            onDayRender: g,
            phrases: E,
            ref: O,
          }),
      ),
    )
  )
}
export {
  Pr as DateRangeInput,
  Nr as DateSingleInput,
  Hr as Datepicker,
  be as END_DATE,
  ke as START_DATE,
  Nt as dateRangeInputPhrases,
  Gt as dateSingleInputPhrases,
  jt as datepickerPhrases,
}
