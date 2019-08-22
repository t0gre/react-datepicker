import e, {
  useEffect as t,
  useState as r,
  useCallback as n,
  useMemo as a,
  useContext as o,
  useRef as i,
  useImperativeHandle as d,
} from 'react'
import l, {ThemeContext as c, css as s, keyframes as u} from 'styled-components'
var p = function(e) {
    var t = new Date(e.getTime()),
      r = t.getTimezoneOffset()
    return t.setSeconds(0, 0), 6e4 * r + (t.getTime() % 6e4)
  },
  g = function(e) {
    return e instanceof Date
  },
  f = 36e5,
  m = /[T ]/,
  h = /:/,
  y = /^(\d{2})$/,
  D = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  v = /^(\d{4})/,
  b = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  k = /^-(\d{2})$/,
  S = /^-?(\d{3})$/,
  x = /^-?(\d{2})-?(\d{2})$/,
  w = /^-?W(\d{2})$/,
  C = /^-?W(\d{2})-?(\d{1})$/,
  B = /^(\d{2}([.,]\d*)?)$/,
  R = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  W = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  L = /([Z+-].*)$/,
  F = /^(Z)$/,
  M = /^([+-])(\d{2})$/,
  T = /^([+-])(\d{2}):?(\d{2})$/
function H(e, t, r) {
  ;(t = t || 0), (r = r || 0)
  var n = new Date(0)
  n.setUTCFullYear(e, 0, 4)
  var a = 7 * t + r + 1 - (n.getUTCDay() || 7)
  return n.setUTCDate(n.getUTCDate() + a), n
}
var E,
  z = function(e, t) {
    if (g(e)) return new Date(e.getTime())
    if ('string' != typeof e) return new Date(e)
    var r = (t || {}).additionalDigits
    r = null == r ? 2 : Number(r)
    var n,
      a,
      o,
      i = (function(e) {
        var t,
          r = {},
          n = e.split(m)
        if ((h.test(n[0]) ? ((r.date = null), (t = n[0])) : ((r.date = n[0]), (t = n[1])), t)) {
          var a = L.exec(t)
          a ? ((r.time = t.replace(a[1], '')), (r.timezone = a[1])) : (r.time = t)
        }
        return r
      })(e),
      d = (function(e, t) {
        var r,
          n = D[t],
          a = b[t]
        if ((r = v.exec(e) || a.exec(e))) {
          var o = r[1]
          return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
        }
        if ((r = y.exec(e) || n.exec(e))) {
          var i = r[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, r),
      l = d.year,
      c = (function(e, t) {
        if (null === t) return null
        var r, n, a
        if (0 === e.length) return (n = new Date(0)).setUTCFullYear(t), n
        if ((r = k.exec(e)))
          return (n = new Date(0)), (a = parseInt(r[1], 10) - 1), n.setUTCFullYear(t, a), n
        if ((r = S.exec(e))) {
          n = new Date(0)
          var o = parseInt(r[1], 10)
          return n.setUTCFullYear(t, 0, o), n
        }
        if ((r = x.exec(e))) {
          ;(n = new Date(0)), (a = parseInt(r[1], 10) - 1)
          var i = parseInt(r[2], 10)
          return n.setUTCFullYear(t, a, i), n
        }
        return (r = w.exec(e))
          ? H(t, parseInt(r[1], 10) - 1)
          : (r = C.exec(e))
          ? H(t, parseInt(r[1], 10) - 1, parseInt(r[2], 10) - 1)
          : null
      })(d.restDateString, l)
    if (c) {
      var s,
        u = c.getTime(),
        E = 0
      if (
        (i.time &&
          (E = (function(e) {
            var t, r, n
            if ((t = B.exec(e))) return ((r = parseFloat(t[1].replace(',', '.'))) % 24) * f
            if ((t = R.exec(e)))
              return (
                (r = parseInt(t[1], 10)),
                (n = parseFloat(t[2].replace(',', '.'))),
                (r % 24) * f + 6e4 * n
              )
            if ((t = W.exec(e))) {
              ;(r = parseInt(t[1], 10)), (n = parseInt(t[2], 10))
              var a = parseFloat(t[3].replace(',', '.'))
              return (r % 24) * f + 6e4 * n + 1e3 * a
            }
            return null
          })(i.time)),
        i.timezone)
      )
        (n = i.timezone),
          (s =
            6e4 *
            ((a = F.exec(n))
              ? 0
              : (a = M.exec(n))
              ? ((o = 60 * parseInt(a[2], 10)), '+' === a[1] ? -o : o)
              : (a = T.exec(n))
              ? ((o = 60 * parseInt(a[2], 10) + parseInt(a[3], 10)), '+' === a[1] ? -o : o)
              : 0))
      else {
        var z = u + E,
          I = new Date(z)
        s = p(I)
        var O = new Date(z)
        O.setDate(I.getDate() + 1)
        var A = p(O) - p(I)
        A > 0 && (s += A)
      }
      return new Date(u + E + s)
    }
    return new Date(e)
  },
  I = function(e) {
    var t = z(e)
    return t.setHours(0, 0, 0, 0), t
  },
  O = function(e) {
    var t = z(e)
    return (
      (function(e, t) {
        var r = I(e),
          n = I(t),
          a = r.getTime() - 6e4 * r.getTimezoneOffset(),
          o = n.getTime() - 6e4 * n.getTimezoneOffset()
        return Math.round((a - o) / 864e5)
      })(
        t,
        (function(e) {
          var t = z(e),
            r = new Date(0)
          return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r
        })(t),
      ) + 1
    )
  },
  A = function(e, t) {
    var r = (t && Number(t.weekStartsOn)) || 0,
      n = z(e),
      a = n.getDay(),
      o = (a < r ? 7 : 0) + a - r
    return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
  },
  P = function(e) {
    return A(e, {weekStartsOn: 1})
  },
  Y = function(e) {
    var t = z(e),
      r = t.getFullYear(),
      n = new Date(0)
    n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0)
    var a = P(n),
      o = new Date(0)
    o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0)
    var i = P(o)
    return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1
  },
  j = function(e) {
    var t = z(e),
      r =
        P(t).getTime() -
        (function(e) {
          var t = Y(e),
            r = new Date(0)
          return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), P(r)
        })(t).getTime()
    return Math.round(r / 6048e5) + 1
  },
  G = function(e) {
    if (g(e)) return !isNaN(e)
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
  X = function(e) {
    var t = []
    for (var r in e) e.hasOwnProperty(r) && t.push(r)
    var n = N.concat(t)
      .sort()
      .reverse()
    return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + n.join('|') + '|.)', 'g')
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
        localize: function(e, t, r) {
          var n
          return (
            (r = r || {}),
            (n =
              'string' == typeof E[e]
                ? E[e]
                : 1 === t
                ? E[e].one
                : E[e].other.replace('{{count}}', t)),
            r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
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
        r = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        n = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        a = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        o = ['AM', 'PM'],
        i = ['am', 'pm'],
        d = ['a.m.', 'p.m.'],
        l = {
          MMM: function(t) {
            return e[t.getMonth()]
          },
          MMMM: function(e) {
            return t[e.getMonth()]
          },
          dd: function(e) {
            return r[e.getDay()]
          },
          ddd: function(e) {
            return n[e.getDay()]
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
            return e.getHours() / 12 >= 1 ? d[1] : d[0]
          },
        }
      return (
        ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
          l[e + 'o'] = function(t, r) {
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
            })(r[e](t))
          }
        }),
        {formatters: l, formattingTokensRegExp: X(l)}
      )
    })(),
  },
  V = {
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
      return Z(V.h(e), 2)
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
  var r = e > 0 ? '-' : '+',
    n = Math.abs(e),
    a = n % 60
  return r + Z(Math.floor(n / 60), 2) + t + Z(a, 2)
}
function Z(e, t) {
  for (var r = Math.abs(e).toString(); r.length < t; ) r = '0' + r
  return r
}
var J = function(e, t, r) {
    var n = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
      a = (r || {}).locale,
      o = $.format.formatters,
      i = $.format.formattingTokensRegExp
    a &&
      a.format &&
      a.format.formatters &&
      ((o = a.format.formatters),
      a.format.formattingTokensRegExp && (i = a.format.formattingTokensRegExp))
    var d = z(e)
    return G(d)
      ? (function(e, t, r) {
          var n,
            a,
            o,
            i = e.match(r),
            d = i.length
          for (n = 0; n < d; n++)
            (a = t[i[n]] || V[i[n]]),
              (i[n] =
                a ||
                ((o = i[n]).match(/\[[\s\S]/) ? o.replace(/^\[|]$/g, '') : o.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', r = 0; r < d; r++)
              i[r] instanceof Function ? (t += i[r](e, V)) : (t += i[r])
            return t
          }
        })(n, o, i)(d)
      : 'Invalid Date'
  },
  Q = function(e, t) {
    var r = z(e),
      n = Number(t)
    return r.setDate(r.getDate() + n), r
  },
  _ = function(e, t, r) {
    var n = z(e),
      a = void 0 !== r ? r : 1,
      o = z(t).getTime()
    if (n.getTime() > o) throw new Error('The first date cannot be after the second date')
    var i = [],
      d = n
    for (d.setHours(0, 0, 0, 0); d.getTime() <= o; ) i.push(z(d)), d.setDate(d.getDate() + a)
    return i
  },
  q = function(e) {
    var t = z(e),
      r = t.getMonth()
    return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  K = function(e, t) {
    var r = (t && Number(t.weekStartsOn)) || 0,
      n = z(e),
      a = n.getDay(),
      o = 6 + (a < r ? -7 : 0) - (a - r)
    return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
  },
  ee = function(e) {
    return z(e).getDay()
  },
  te = function(e) {
    var t = z(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
var re = function(e) {
    return J(e, 'DD')
  },
  ne = function(e) {
    return J(e, 'dd')
  },
  ae = function(e) {
    return J(e, 'MMMM YYYY')
  }
function oe(e) {
  var t = e.year,
    r = e.month,
    n = e.firstDayOfWeek,
    o = void 0 === n ? 1 : n,
    i = e.dayLabelFormat,
    d = void 0 === i ? re : i,
    l = e.weekdayLabelFormat,
    c = void 0 === l ? ne : l,
    s = e.monthLabelFormat,
    u = void 0 === s ? ae : s
  return {
    days: a(
      function() {
        return (function(e) {
          var t = e.year,
            r = e.month,
            n = e.firstDayOfWeek,
            a = void 0 === n ? 1 : n,
            o = e.dayLabelFormat,
            i =
              void 0 === o
                ? function(e) {
                    return J(e, 'DD')
                  }
                : o,
            d = new Date(t, r),
            l = te(d),
            c = ee(l),
            s = q(d),
            u = Array.from(Array(c >= a ? c - a : a).keys()).fill(0),
            p = _(l, s).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return u.concat(p)
        })({year: t, month: r, firstDayOfWeek: o, dayLabelFormat: d})
      },
      [t, r, o, d],
    ),
    weekdayLabels: a(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            r = t.firstDayOfWeek,
            n = void 0 === r ? 1 : r,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function(e) {
                    return J(e, 'dd')
                  }
                : a,
            i = new Date()
          return _(Q(A(i), n), Q(K(i), n)).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: u(new Date(t, r)),
  }
}
var ie = function(e, t) {
    var r = z(e),
      n = z(t)
    return r.getTime() < n.getTime()
  },
  de = function(e, t) {
    var r = z(e),
      n = z(t)
    return r.getTime() > n.getTime()
  },
  le = function(e, t, r) {
    var n = z(e).getTime(),
      a = z(t).getTime(),
      o = z(r).getTime()
    if (a > o) throw new Error('The start of the range cannot be after the end of the range')
    return n >= a && n <= o
  },
  ce = function(e, t) {
    var r = I(e),
      n = I(t)
    return r.getTime() === n.getTime()
  },
  se = function(e, t) {
    var r = z(e),
      n = z(t)
    return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth()
  },
  ue = function(e) {
    return z(e).getFullYear()
  },
  pe = function(e) {
    return z(e).getMonth()
  },
  ge = function() {
    return I(new Date())
  },
  fe = function(e, t) {
    var r = z(e),
      n = Number(t),
      a = r.getMonth() + n,
      o = new Date(0)
    o.setFullYear(r.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = z(e),
        r = t.getFullYear(),
        n = t.getMonth(),
        a = new Date(0)
      return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
    })(o)
    return r.setMonth(a, Math.min(i, r.getDate())), r
  }
function me(e) {
  var t = te(e)
  return {year: ue(t), month: pe(t), date: t}
}
function he(e, t) {
  var r = me(t || ge()),
    n = r.date,
    a = [r]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = fe(e[e.length - 1].date, 1)), e.concat([me(n)])
      }, a)),
    a
  )
}
function ye(e, t, r) {
  var n = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (n = 0 === e.length ? fe(n, r) : fe(n, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([me(n)]) : [me(n)].concat(e)
    )
  }, [])
}
function De(e, t, r) {
  return e && 'string' == typeof t ? J(e, t) : e && 'function' == typeof t ? t(e) : r
}
function ve(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    d = e.maxBookingDate,
    l = !i || !ie(t, Q(i, -1)),
    c = !d || !de(Q(t, a - 1), d)
  if (t && 1 === a && !r && !n(t)) return !0
  if ((t && a > 1 && !r && !o) || (t && a > 0 && o && l && c) || (t && a > 0 && o && !i && !d))
    return _(t, Q(t, a - 1)).reduce(function(e, t) {
      return e ? !n(t) : e
    }, !0)
  if (t && r && !o) {
    var s = Q(t, a - 1)
    return (
      !ie(r, s) &&
      _(t, r).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    )
  }
  return !1
}
var be = 'startDate',
  ke = 'endDate'
function Se(e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.focusedInput,
    d = e.minBookingDate,
    l = e.maxBookingDate,
    c = e.onDatesChange,
    s = e.exactMinBookingDays,
    u = void 0 !== s && s,
    p = e.minBookingDays,
    g = void 0 === p ? 1 : p,
    f = e.numberOfMonths,
    m = void 0 === f ? 2 : f,
    h = e.firstDayOfWeek,
    y = void 0 === h ? 1 : h,
    D = e.isDateBlocked,
    v =
      void 0 === D
        ? function() {
            return !1
          }
        : D,
    b = r(function() {
      return he(m, a)
    }),
    k = b[0],
    S = b[1],
    x = r(null),
    w = x[0],
    C = x[1],
    B = r(a),
    R = B[0],
    W = B[1],
    L = n(
      function(e) {
        W(e), (!R || (R && !se(e, R))) && S(he(m, e))
      },
      [W, S, m, R],
    ),
    F = n(
      function(e) {
        return (function(e, t, r) {
          return !(!t || !r) && le(e, t, r)
        })(e, a, o)
      },
      [a, o],
    ),
    M = n(
      function(e) {
        return (function(e, t, r) {
          return !!((t && ce(e, t)) || (r && ce(e, r)))
        })(e, a, o)
      },
      [a, o],
    ),
    T = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            r = e.minBookingDate,
            n = e.maxBookingDate,
            a = e.isDateBlockedFn,
            o = e.startDate,
            i = e.endDate,
            d = e.minBookingDays,
            l = void 0 === d ? 1 : d,
            c = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
            s = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
          return !!(
            (c && ie(t, c)) ||
            (s && de(t, s)) ||
            (o && !i && l > 1 && le(t, o, Q(o, l - 2))) ||
            (a && a(t))
          )
        })({
          date: e,
          minBookingDate: d,
          maxBookingDate: l,
          startDate: a,
          endDate: o,
          minBookingDays: g,
          isDateBlockedFn: v,
        })
      },
      [d, l, a, o, g, v],
    ),
    H = n(
      function(e) {
        return !!R && ce(e, R)
      },
      [R],
    ),
    E = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            r = e.startDate,
            n = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && le(t, o, Q(o, i - 1))
            ? _(o, Q(o, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : r && !n && o && le(t, r, Q(r, i - 1)) && ce(r, o) && i > 1
            ? _(r, Q(r, i - 1)).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!r || n || !o || ie(o, r) || !le(t, r, o)) &&
              _(r, o).reduce(function(e, t) {
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
  function z(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !R
    ) {
      var t = k[0]
      L(t.date), S(he(m, t.date))
    }
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
      isDateSelected: F,
      isDateHovered: E,
      isFirstOrLastSelectedDate: M,
      isDateBlocked: T,
      numberOfMonths: m,
      isDateFocused: H,
      focusedDate: R,
      hoveredDate: w,
      onResetDates: function() {
        c({startDate: null, endDate: null, focusedInput: be})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !T(e) || (a && ce(e, a)),
              r = !d || !ie(e, Q(d, -1)),
              n = !l || !de(e, l),
              i = Q(e, g - 1),
              c = !d || !ie(i, d),
              s = !l || !de(i, l),
              p = u && g > 1 && r && n && c && s,
              f = a && !o && !u && r && n,
              m = !(g > 1 && a) || le(e, a, Q(a, g - 2)),
              h = a && ce(e, a) && m
            t && (p || f || h) ? C(e) : null !== w && C(null)
          }
        } else C(null)
      },
      onDateSelect: function(e) {
        ;(i === ke || i === be) &&
        g > 0 &&
        u &&
        ve({
          minBookingDays: g,
          exactMinBookingDays: u,
          minBookingDate: d,
          maxBookingDate: l,
          isDateBlocked: v,
          startDate: e,
          endDate: null,
        })
          ? c({startDate: e, endDate: Q(e, g - 1), focusedInput: null})
          : ((i === ke && a && ie(e, a)) || (i === be && o && de(e, o))) &&
            !u &&
            ve({minBookingDays: g, isDateBlocked: v, startDate: e, endDate: null})
          ? c({endDate: null, startDate: e, focusedInput: ke})
          : i === be && !u && ve({minBookingDays: g, isDateBlocked: v, endDate: o, startDate: e})
          ? c({endDate: o, startDate: e, focusedInput: ke})
          : i === be && !u && ve({minBookingDays: g, isDateBlocked: v, endDate: null, startDate: e})
          ? c({endDate: null, startDate: e, focusedInput: ke})
          : i === ke &&
            a &&
            !ie(e, a) &&
            !u &&
            ve({minBookingDays: g, isDateBlocked: v, startDate: a, endDate: e}) &&
            c({startDate: a, endDate: e, focusedInput: null}),
          i === ke || (R && (!R || se(e, R))) || S(he(m, e))
      },
      onDateFocus: L,
      goToPreviousMonths: function() {
        S(ye(k, m, -1)), W(null)
      },
      goToNextMonths: function() {
        S(ye(k, m, 1)), W(null)
      },
      goToPreviousYear: function() {
        S(ye(k, m, -(12 - m + 1))), W(null)
      },
      goToNextYear: function() {
        S(ye(k, m, 12 - m + 1)), W(null)
      },
    }
  )
}
var xe = function() {
  return (xe =
    Object.assign ||
    function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var a in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function we(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var Ce = Object.getOwnPropertySymbols,
  Be = Object.prototype.hasOwnProperty,
  Re = Object.prototype.propertyIsEnumerable
function We(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var Le = (function() {
    try {
      if (!Object.assign) return !1
      var e = new String('abc')
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
      for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var n = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          n[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
      )
    } catch (e) {
      return !1
    }
  })()
    ? Object.assign
    : function(e, t) {
        for (var r, n, a = We(e), o = 1; o < arguments.length; o++) {
          for (var i in (r = Object(arguments[o]))) Be.call(r, i) && (a[i] = r[i])
          if (Ce) {
            n = Ce(r)
            for (var d = 0; d < n.length; d++) Re.call(r, n[d]) && (a[n[d]] = r[n[d]])
          }
        }
        return a
      },
  Fe = function(e, t) {
    var r = Le({}, e, t)
    for (var n in e) {
      var a
      e[n] && 'object' == typeof t[n] && Le(r, (((a = {})[n] = Le(e[n], t[n])), a))
    }
    return r
  },
  Me = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  Te = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  He = function(e, t) {
    return Ee(t, e, e)
  },
  Ee = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  ze = function e(t) {
    var r = {},
      n = function(e) {
        var n,
          a,
          o = {},
          i = !1,
          d = e.theme && e.theme.disableStyledSystemCache
        for (var l in e)
          if (t[l]) {
            var c = t[l],
              s = e[l],
              u = Ee(e.theme, c.scale, c.defaults)
            if ('object' != typeof s) Le(o, c(s, u, e))
            else {
              if (
                ((r.breakpoints =
                  (!d && r.breakpoints) || Ee(e.theme, 'breakpoints', Me.breakpoints)),
                Array.isArray(s))
              ) {
                ;(r.media = (!d && r.media) || [null].concat(r.breakpoints.map(Te))),
                  (o = Fe(o, Ie(r.media, c, u, s, e)))
                continue
              }
              null !== s && ((o = Fe(o, Oe(r.breakpoints, c, u, s, e))), (i = !0))
            }
          }
        return (
          i &&
            ((n = o),
            (a = {}),
            Object.keys(n)
              .sort()
              .forEach(function(e) {
                a[e] = n[e]
              }),
            (o = a)),
          o
        )
      }
    ;(n.config = t), (n.propNames = Object.keys(t)), (n.cache = r)
    var a = Object.keys(t).filter(function(e) {
      return 'config' !== e
    })
    return (
      a.length > 1 &&
        a.forEach(function(r) {
          var a
          n[r] = e((((a = {})[r] = t[r]), a))
        }),
      n
    )
  },
  Ie = function(e, t, r, n, a) {
    var o = {}
    return (
      n.slice(0, e.length).forEach(function(n, i) {
        var d,
          l = e[i],
          c = t(n, r, a)
        l ? Le(o, (((d = {})[l] = Le({}, o[l], c)), d)) : Le(o, c)
      }),
      o
    )
  },
  Oe = function(e, t, r, n, a) {
    var o = {}
    for (var i in n) {
      var d = e[i],
        l = t(n[i], r, a)
      if (d) {
        var c,
          s = Te(d)
        Le(o, (((c = {})[s] = Le({}, o[s], l)), c))
      } else Le(o, l)
    }
    return o
  },
  Ae = function(e) {
    var t = e.properties,
      r = e.property,
      n = e.scale,
      a = e.transform,
      o = void 0 === a ? He : a,
      i = e.defaultScale
    t = t || [r]
    var d = function(e, r, n) {
      var a = {},
        i = o(e, r, n)
      if (null !== i)
        return (
          t.forEach(function(e) {
            a[e] = i
          }),
          a
        )
    }
    return (d.scale = n), (d.defaults = i), d
  },
  Pe = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(r) {
        var n = e[r]
        t[r] = !0 !== n ? ('function' != typeof n ? Ae(n) : n) : Ae({property: r, scale: r})
      }),
      ze(t)
    )
  },
  Ye = function() {
    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    r.forEach(function(t) {
      t && t.config && Le(e, t.config)
    })
    var a = ze(e)
    return a
  },
  je = Pe({
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
    overflowX: !0,
    overflowY: !0,
    display: !0,
    verticalAlign: !0,
  }),
  Ge = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Ge.bg = Ge.backgroundColor
var Ne,
  Xe = Pe(Ge),
  $e = Pe({
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
  Ve = Pe({
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
  Ue = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Ze = Pe({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Ue.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Ue.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Ue.space},
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
  Je = Pe(
    (((Ne = {
      border: {property: 'border', scale: 'borders'},
      borderWidth: {property: 'borderWidth', scale: 'borderWidths'},
      borderStyle: {property: 'borderStyle', scale: 'borderStyles'},
      borderColor: {property: 'borderColor', scale: 'colors'},
      borderRadius: {property: 'borderRadius', scale: 'radii'},
      borderTop: {property: 'borderTop', scale: 'borders'},
      borderTopLeftRadius: {property: 'borderTopLeftRadius', scale: 'radii'},
      borderTopRightRadius: {property: 'borderTopRightRadius', scale: 'radii'},
      borderRight: {property: 'borderRight', scale: 'borders'},
      borderBottom: {property: 'borderBottom', scale: 'borders'},
      borderBottomLeftRadius: {property: 'borderBottomLeftRadius', scale: 'radii'},
      borderBottomRightRadius: {property: 'borderBottomRightRadius', scale: 'radii'},
      borderLeft: {property: 'borderLeft', scale: 'borders'},
      borderX: {properties: ['borderLeft', 'borderRight'], scale: 'borders'},
      borderY: {properties: ['borderTop', 'borderBottom'], scale: 'borders'},
      borderTopWidth: {property: 'borderTopWidth', scale: 'borderWidths'},
      borderTopColor: {property: 'borderTopColor', scale: 'colors'},
      borderTopStyle: {property: 'borderTopStyle', scale: 'borderStyles'},
    }).borderTopLeftRadius = {property: 'borderTopLeftRadius', scale: 'radii'}),
    (Ne.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
    (Ne.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
    (Ne.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
    (Ne.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
    (Ne.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
    (Ne.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
    (Ne.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
    (Ne.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
    (Ne.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
    (Ne.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
    (Ne.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
    (Ne.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'}),
    Ne),
  ),
  Qe = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(Qe.bgImage = Qe.backgroundImage),
  (Qe.bgSize = Qe.backgroundSize),
  (Qe.bgPosition = Qe.backgroundPosition),
  (Qe.bgRepeat = Qe.backgroundRepeat)
var _e = Pe(Qe),
  qe = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Ke = Pe({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: qe.space},
    right: {property: 'right', scale: 'space', defaultScale: qe.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: qe.space},
    left: {property: 'left', scale: 'space', defaultScale: qe.space},
  }),
  et = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  tt = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  rt = function(e, t) {
    if (!tt(e)) return Ee(t, e, e)
    var r = e < 0,
      n = Math.abs(e),
      a = Ee(t, n, n)
    return tt(a) ? a * (r ? -1 : 1) : r ? '-' + a : a
  },
  nt = {}
;(nt.margin = {
  margin: {property: 'margin', scale: 'space', transform: rt, defaultScale: et.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: rt, defaultScale: et.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: rt, defaultScale: et.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: rt, defaultScale: et.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: rt, defaultScale: et.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: rt,
    defaultScale: et.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: rt,
    defaultScale: et.space,
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
    padding: {property: 'padding', scale: 'space', defaultScale: et.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: et.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: et.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: et.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: et.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: et.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: et.space},
  }),
  (nt.padding.p = nt.padding.padding),
  (nt.padding.pt = nt.padding.paddingTop),
  (nt.padding.pr = nt.padding.paddingRight),
  (nt.padding.pb = nt.padding.paddingBottom),
  (nt.padding.pl = nt.padding.paddingLeft),
  (nt.padding.px = nt.padding.paddingX),
  (nt.padding.py = nt.padding.paddingY)
var at,
  ot = Ye(Pe(nt.margin), Pe(nt.padding)),
  it = Pe({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function dt() {
  return (dt =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
var lt,
  ct,
  st,
  ut = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  pt = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  gt = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  ft = {
    bg: 'backgroundColor',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginX',
    my: 'marginY',
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingX',
    py: 'paddingY',
  },
  mt = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  ht =
    (((at = {
      color: 'colors',
      backgroundColor: 'colors',
      borderColor: 'colors',
      margin: 'space',
      marginTop: 'space',
      marginRight: 'space',
      marginBottom: 'space',
      marginLeft: 'space',
      marginX: 'space',
      marginY: 'space',
      padding: 'space',
      paddingTop: 'space',
      paddingRight: 'space',
      paddingBottom: 'space',
      paddingLeft: 'space',
      paddingX: 'space',
      paddingY: 'space',
      top: 'space',
      right: 'space',
      bottom: 'space',
      left: 'space',
      gridGap: 'space',
      gridColumnGap: 'space',
      gridRowGap: 'space',
      gap: 'space',
      columnGap: 'space',
      rowGap: 'space',
      fontFamily: 'fonts',
      fontSize: 'fontSizes',
      fontWeight: 'fontWeights',
      lineHeight: 'lineHeights',
      letterSpacing: 'letterSpacings',
      border: 'borders',
      borderTop: 'borders',
      borderRight: 'borders',
      borderBottom: 'borders',
      borderLeft: 'borders',
      borderWidth: 'borderWidths',
      borderStyle: 'borderStyles',
      borderRadius: 'radii',
      borderTopRightRadius: 'radii',
      borderTopLeftRadius: 'radii',
      borderBottomRightRadius: 'radii',
      borderBottomLeftRadius: 'radii',
      borderTopWidth: 'borderWidths',
      borderTopColor: 'colors',
      borderTopStyle: 'borderStyles',
    }).borderTopLeftRadius = 'radii'),
    (at.borderTopRightRadius = 'radii'),
    (at.borderBottomWidth = 'borderWidths'),
    (at.borderBottomColor = 'colors'),
    (at.borderBottomStyle = 'borderStyles'),
    (at.borderBottomLeftRadius = 'radii'),
    (at.borderBottomRightRadius = 'radii'),
    (at.borderLeftWidth = 'borderWidths'),
    (at.borderLeftColor = 'colors'),
    (at.borderLeftStyle = 'borderStyles'),
    (at.borderRightWidth = 'borderWidths'),
    (at.borderRightColor = 'colors'),
    (at.borderRightStyle = 'borderStyles'),
    (at.boxShadow = 'shadows'),
    (at.textShadow = 'shadows'),
    (at.zIndex = 'zIndices'),
    (at.width = 'sizes'),
    (at.minWidth = 'sizes'),
    (at.maxWidth = 'sizes'),
    (at.height = 'sizes'),
    (at.minHeight = 'sizes'),
    (at.maxHeight = 'sizes'),
    (at.flexBasis = 'sizes'),
    (at.size = 'sizes'),
    (at.fill = 'colors'),
    (at.stroke = 'colors'),
    at),
  yt = function(e, t) {
    if ('number' != typeof t || t >= 0) return ut(e, t, t)
    var r = Math.abs(t),
      n = ut(e, r, r)
    return 'string' == typeof n ? '-' + n : -1 * n
  },
  Dt = [
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'top',
    'bottom',
    'left',
    'right',
  ].reduce(function(e, t) {
    var r
    return dt({}, e, (((r = {})[t] = yt), r))
  }, {}),
  vt = function e(t) {
    return function(r) {
      void 0 === r && (r = {})
      var n = dt({}, gt, {}, r.theme || r),
        a = {},
        o = (function(e) {
          return function(t) {
            var r = {},
              n = ut(t, 'breakpoints', pt),
              a = [null].concat(
                n.map(function(e) {
                  return '@media screen and (min-width: ' + e + ')'
                }),
              )
            for (var o in e) {
              var i = 'function' == typeof e[o] ? e[o](t) : e[o]
              if (null != i)
                if (Array.isArray(i))
                  for (var d = 0; d < i.slice(0, a.length).length; d++) {
                    var l = a[d]
                    null != i[d] && (l ? ((r[l] = r[l] || {}), (r[l][o] = i[d])) : (r[o] = i[d]))
                  }
                else r[o] = i
            }
            return r
          }
        })('function' == typeof t ? t(n) : t)(n)
      for (var i in o) {
        var d = o[i],
          l = 'function' == typeof d ? d(n) : d
        if ('variant' !== i)
          if (l && 'object' == typeof l) a[i] = e(l)(n)
          else {
            var c = ut(ft, i, i),
              s = ut(ht, c),
              u = ut(n, s, ut(n, c, {})),
              p = ut(Dt, c, ut)(u, l, l)
            if (mt[c]) for (var g = mt[c], f = 0; f < g.length; f++) a[g[f]] = p
            else a[c] = p
          }
        else a = dt({}, a, {}, e(ut(n, l))(n))
      }
      return a
    }
  },
  bt = function(e) {
    var t,
      r,
      n = e.scale,
      a = e.prop,
      o = void 0 === a ? 'variant' : a,
      i = e.variants,
      d = void 0 === i ? {} : i,
      l = e.key
    ;((r = Object.keys(d).length
      ? function(e, t, r) {
          return vt(Ee(t, e, null))(r.theme)
        }
      : function(e, t) {
          return Ee(t, e, null)
        }).scale = n || l),
      (r.defaults = d)
    var c = (((t = {})[o] = r), t)
    return ze(c)
  },
  kt =
    (bt({key: 'buttons'}),
    bt({key: 'textStyles', prop: 'textStyle'}),
    bt({key: 'colorStyles', prop: 'colors'}),
    je.width),
  St = je.height,
  xt = je.minHeight,
  wt = je.display,
  Ct = je.overflow,
  Bt = Xe.opacity,
  Rt = $e.fontSize,
  Wt = $e.fontFamily,
  Lt = $e.fontWeight,
  Ft = $e.lineHeight,
  Mt = Ve.alignItems,
  Tt = Ve.justifyContent,
  Ht = Ve.flexWrap,
  Et = Ve.flexDirection,
  zt = Ve.flex,
  It = Ze.gridGap,
  Ot = Ze.gridColumnGap,
  At = Ze.gridRowGap,
  Pt = Ze.gridAutoFlow,
  Yt = Ze.gridAutoColumns,
  jt = Ze.gridAutoRows,
  Gt = Ze.gridTemplateColumns,
  Nt = Ze.gridTemplateRows,
  Xt = Ze.gridTemplateAreas,
  $t = Ze.gridArea,
  Vt = Je.borderRadius,
  Ut = Ke.zIndex,
  Zt = Ke.top,
  Jt = Ke.right,
  Qt = Ke.bottom,
  _t = Ke.left,
  qt = function(e) {
    var t = e.prop,
      r = e.cssProperty,
      n = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      d = e.properties,
      l = {}
    return (
      (l[t] = Ae({properties: d, property: r || t, scale: a, defaultScale: i, transform: o})),
      n && (l[n] = l[t]),
      ze(l)
    )
  },
  Kt = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  er = xe({}, Kt, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  tr = xe({}, Kt, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  rr = qt({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  nr = Ye(Yt, Pt, jt, Ot, It, At, Xt, Gt, Nt, Mt, Tt, ot),
  ar = l('div')(
    lt ||
      (lt = we(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    nr,
    rr,
  ),
  or = Ye(ot, zt, Ht, Et, Mt, Tt, $t, St, kt),
  ir = l('div')(
    ct || (ct = we(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    or,
  ),
  dr = Ye($t, St, ot, kt, Ke, Zt, _t, Jt, Qt, Ut),
  lr = l('div')(
    st ||
      (st = we(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    dr,
  )
function cr(t) {
  var r = t.height,
    n = t.width,
    a = t.color,
    o = t.className,
    i = void 0 === o ? '' : o
  return e.createElement(
    'svg',
    {
      width: n,
      height: r,
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
function sr(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(r, n) {
            var a
            return xe({}, r, (((a = {})[n] = t.reactDatepicker[n] || e[n]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var ur = {
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
function pr(e, t, r) {
  return r &&
    'object' == typeof r &&
    r.reactDatepicker &&
    'object' == typeof r.reactDatepicker &&
    r.reactDatepicker.colors &&
    'object' == typeof r.reactDatepicker.colors &&
    r.reactDatepicker.colors[e]
    ? r.reactDatepicker.colors[e]
    : t
}
var gr,
  fr,
  mr,
  hr = qt({prop: 'placeholderColor', cssProperty: 'color'}),
  yr = qt({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  Dr = Ye(Ke, Je, _e, wt, Vt, ot),
  vr = l('label')(gr || (gr = we(['\n  ', '\n'], ['\n  ', '\n'])), Dr),
  br = Ye(Ke, _t, Jt, Zt, St, kt),
  kr = l('div')(
    fr ||
      (fr = we(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    br,
  ),
  Sr = Ye(_e, ot, Wt, Rt, Xe, Lt, ot, Je, kt, xt, it),
  xr = l('input')(
    mr ||
      (mr = we(
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
    Sr,
    yr,
    hr,
    yr,
    hr,
    yr,
    hr,
  )
function wr(n) {
  var a = n.placeholder,
    d = n.id,
    l = n.vertical,
    s = n.isActive,
    u = n.ariaLabel,
    p = n.onClick,
    g = n.value,
    f = n.showCalendarIcon,
    m = n.padding,
    h = n.rtl,
    y = n.disableAccessibility,
    D = n.dateFormat,
    v = n.onChange,
    b = void 0 === v ? function() {} : v,
    k = r(g),
    S = k[0],
    x = k[1],
    w = i(null)
  t(
    function() {
      x(g)
    },
    [g],
  )
  var C = o(c),
    B = sr({
      fontFamily: ur.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: pr('charcoal', ur.colors.charcoal, C),
      inputBackground: pr('white', ur.colors.white, C),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: m,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: pr('silverCloud', ur.colors.silverCloud, C),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: h ? 'unset' : l ? '8px' : '16px',
      inputCalendarWrapperRight: h ? (l ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: pr('graci', ur.colors.graci, C),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + pr('graci', ur.colors.graci, C),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: pr('white', ur.colors.white, C),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + pr('primaryColor', ur.colors.primaryColor, C),
    })
  return e.createElement(
    vr,
    {
      htmlFor: d,
      display: B.inputLabelDisplay,
      position: B.inputLabelPosition,
      border: B.inputLabelBorder,
      background: B.inputLabelBackground,
      borderRadius: B.inputLabelBorderRadius,
      m: B.inputLabelMargin,
    },
    f &&
      e.createElement(
        kr,
        {
          position: B.inputCalendarWrapperPosition,
          height: B.inputCalendarWrapperHeight,
          width: B.inputCalendarWrapperWidth,
          top: B.inputCalendarWrapperTop,
          left: B.inputCalendarWrapperLeft,
          right: B.inputCalendarWrapperRight,
        },
        e.createElement(cr, {
          width: B.inputCalendarIconWidth,
          height: B.inputCalendarIconHeight,
          color: B.inputCalendarIconColor,
        }),
      ),
    e.createElement(xr, {
      tabIndex: y ? -1 : 0,
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
      id: d,
      placeholder: a,
      'aria-label': u,
      value: S,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        x(t),
          'number' == typeof w.current && clearTimeout(w.current),
          (w.current = setTimeout(function() {
            p()
            var e = z(t, D)
            isNaN(e) || b(e)
          }, 1e3))
      },
      onFocus: p,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function Cr(t) {
  var r = t.height,
    n = t.width,
    a = t.iconColor,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    d = t.className,
    l = void 0 === d ? '' : d,
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
      width: n,
      height: r,
      color: a,
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
var Br,
  Rr,
  Wr,
  Lr = Ye(Wt, Rt, Lt, Xe, Ft, ot),
  Fr = l('div')(Br || (Br = we(['\n  ', '\n'], ['\n  ', '\n'])), Lr),
  Mr = l(Fr)(
    Wr ||
      (Wr = we(
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
        r = e.selectDateBorderColor
      return (
        t &&
        s(
          Rr ||
            (Rr = we(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          r,
        )
      )
    },
  )
function Tr(t) {
  var r = t.title,
    n = t.isActive,
    a = t.date,
    i = t.vertical,
    d = o(c),
    l = sr({
      fontFamily: ur.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: pr('silverCloud', ur.colors.silverCloud, d),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: pr('charcoal', ur.colors.charcoal, d),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: pr('primaryColor', ur.colors.primaryColor, d),
      selectDatePadding: '0',
    })
  return e.createElement(
    lr,
    {p: l.selectDatePadding},
    e.createElement(
      Fr,
      {
        fontFamily: l.fontFamily,
        fontSize: l.selectDateLabelFontSize,
        color: l.selectDateLabelColor,
        m: l.selectDateLabelMargin,
      },
      r,
    ),
    e.createElement(
      Mr,
      {
        as: 'span',
        color: l.selectDateDateColor,
        fontSize: l.selectDateDateFontSize,
        fontWeight: l.selectDateDateFontWeight,
        fontFamily: l.fontFamily,
        p: l.selectDateDatePadding,
        isActive: n,
        selectDateBorderColor: l.selectDateBorderColor,
      },
      a,
    ),
  )
}
var Hr,
  Er,
  zr,
  Ir,
  Or,
  Ar = function(t) {
    var r = t.label,
      n = o(c),
      a = sr({
        fontFamily: ur.fontFamily,
        monthLabelColor: pr('darcula', ur.colors.darcula, n),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Fr,
      {
        fontFamily: a.fontFamily,
        fontSize: a.monthLabelFontSize,
        fontWeight: a.monthLabelFontWeight,
        lineHeight: a.monthLabelLineHeight,
        color: a.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      r,
    )
  },
  Pr = function(t) {
    var r = t.label,
      n = o(c),
      a = sr({
        fontFamily: ur.fontFamily,
        dayLabelColor: pr('silverCloud', ur.colors.silverCloud, n),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Fr,
      {
        fontFamily: a.fontFamily,
        fontSize: a.dayLabelFontSize,
        fontWeight: a.dayLabelFontWeight,
        color: a.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      r,
    )
  },
  Yr = {
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
  jr = e.createContext(Yr),
  Gr = qt({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nr = qt({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Xr = qt({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  $r = qt({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vr = qt({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Ur = qt({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Zr = Ye(it, _e, Xe, Wt, Lt, Rt),
  Jr = l('button')(
    Or ||
      (Or = we(
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
    Gr,
    Nr,
    Zr,
    function(e) {
      var t = e.disabledDate,
        r = e.isSelectedStartOrEnd
      return (
        t &&
        !r &&
        s(
          Hr ||
            (Hr = we(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabledDate,
        r = e.isSelected,
        n = e.isSelectedStartOrEnd,
        a = e.isWithinHoverRange
      return t || r || n || a
        ? r && !n
          ? s(
              zr ||
                (zr = we(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Ur,
              $r,
            )
          : ''
        : s(
            Er ||
              (Er = we(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Vr,
            Xr,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return s(
        Ir ||
          (Ir = we(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Qr(e, t, r, n) {
  var a = n.selectedFirstOrLast,
    o = n.normal,
    i = n.selected,
    d = n.rangeHover
  return t ? a : e ? i : r ? d : o
}
function _r(r) {
  var d = r.day,
    l = r.date,
    s = i(null),
    u = o(jr),
    p = u.focusedDate,
    g = u.isDateFocused,
    f = u.isDateSelected,
    m = u.isDateHovered,
    h = u.isDateBlocked,
    y = u.isFirstOrLastSelectedDate,
    D = u.onDateSelect,
    v = u.onDateFocus,
    b = u.onDateHover,
    k = u.onDayRender,
    S = (function(e) {
      var r = e.date,
        a = e.focusedDate,
        o = e.isDateSelected,
        i = e.isDateFocused,
        d = e.isFirstOrLastSelectedDate,
        l = e.isDateHovered,
        c = e.isDateBlocked,
        s = e.onDateSelect,
        u = e.onDateFocus,
        p = e.onDateHover,
        g = e.dayRef,
        f = n(
          function() {
            return s(r)
          },
          [r, s],
        ),
        m = n(
          function() {
            return p(r)
          },
          [r, p],
        )
      t(
        function() {
          g && g.current && i(r) && g.current.focus()
        },
        [g, r, i],
      )
      var h = c(r) && !l(r)
      return {
        tabIndex: null === a || i(r) ? 0 : -1,
        isSelected: o(r),
        isSelectedStartOrEnd: d(r),
        isWithinHoverRange: l(r),
        disabledDate: h,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(Q(r, 1))
            : 'ArrowLeft' === e.key
            ? u(Q(r, -1))
            : 'ArrowUp' === e.key
            ? u(Q(r, -7))
            : 'ArrowDown' === e.key && u(Q(r, 7))
        },
        onClick: h ? function() {} : f,
        onMouseEnter: m,
      }
    })({
      date: l,
      focusedDate: p,
      isDateFocused: g,
      isDateSelected: f,
      isDateHovered: m,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: y,
      onDateFocus: v,
      onDateSelect: D,
      onDateHover: b,
      dayRef: s,
    }),
    x = o(c),
    w = pr('white', ur.colors.white, x),
    C = pr('mud', ur.colors.mud, x),
    B = pr('primaryColor', ur.colors.primaryColor, x),
    R = pr('accessibility', ur.colors.accessibility, x),
    W = pr('selectedDay', ur.colors.selectedDay, x),
    L = pr('selectedDayHover', ur.colors.selectedDayHover, x),
    F = pr('normalDayHover', ur.colors.normalDayHover, x),
    M = sr({
      fontFamily: ur.fontFamily,
      daySize: ur.daySize,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: C,
      dayHoverColor: C,
      daySelectedColor: w,
      daySelectedHoverColor: w,
      dayHoverRangeColor: w,
      daySelectedFirstOrLastColor: w,
      dayBackground: w,
      dayHoverBackground: F,
      daySelectedBackground: W,
      daySelectedHoverBackground: L,
      dayHoverRangeBackground: W,
      daySelectedFirstOrLastBackground: B,
      dayBorderColor: F,
      daySelectedBorderColor: W,
      dayHoverRangeBorderColor: W,
      daySelectedFirstOrLastBorderColor: B,
      dayAccessibilityBorderColor: R,
    }),
    T = a(
      function() {
        return Qr(S.isSelected, S.isSelectedStartOrEnd, S.isWithinHoverRange, {
          selectedFirstOrLast: M.daySelectedFirstOrLastBorderColor,
          selected: M.daySelectedBorderColor,
          normal: M.dayBorderColor,
          rangeHover: M.dayHoverRangeColor,
        })
      },
      [S.isSelected, S.isSelectedStartOrEnd, M, S.isWithinHoverRange],
    ),
    H = a(
      function() {
        return Qr(S.isSelected, S.isSelectedStartOrEnd, S.isWithinHoverRange, {
          selectedFirstOrLast: M.daySelectedFirstOrLastBackground,
          selected: M.daySelectedBackground,
          normal: M.dayBackground,
          rangeHover: M.dayHoverRangeBackground,
        })
      },
      [S.isSelected, S.isSelectedStartOrEnd, M, S.isWithinHoverRange],
    ),
    E = a(
      function() {
        return Qr(S.isSelected, S.isSelectedStartOrEnd, S.isWithinHoverRange, {
          selectedFirstOrLast: M.daySelectedFirstOrLastColor,
          selected: M.daySelectedColor,
          normal: M.dayColor,
          rangeHover: M.dayHoverRangeColor,
        })
      },
      [S.isSelected, S.isSelectedStartOrEnd, M, S.isWithinHoverRange],
    )
  return e.createElement(
    Jr,
    xe({}, S, {
      ref: s,
      dayHeight: M.daySize,
      dayWidth: M.daySize,
      background: H,
      color: E,
      fontFamily: M.fontFamily,
      fontWeight: M.dayFontWeight,
      fontSize: M.dayFontSize,
      daySelectedHoverBackground: M.daySelectedHoverBackground,
      dayHoverBackground: M.dayHoverBackground,
      dayHoverColor: M.dayHoverColor,
      daySelectedHoverColor: M.daySelectedHoverColor,
      borderAccessibilityColor: M.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        T +
        ',\n        0 1px 0 0 ' +
        T +
        ',\n        1px 1px 0 0 ' +
        T +
        ',\n        1px 0 0 0 ' +
        T +
        ' inset,\n        0 1px 0 0 ' +
        T +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + l.toDateString(),
    }),
    'function' == typeof k
      ? k(l)
      : e.createElement(
          ir,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          d,
        ),
  )
}
var qr,
  Kr,
  en = u(
    qr ||
      (qr = we(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  tn = l('div')(
    Kr ||
      (Kr = we(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    en,
  ),
  rn = function(t) {
    var r = t.year,
      n = t.month,
      a = t.firstDayOfWeek,
      o = oe({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: r,
        month: n,
        firstDayOfWeek: a,
      }),
      i = o.days,
      d = o.weekdayLabels,
      l = o.monthLabel,
      c = sr({daySize: ur.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      tn,
      null,
      e.createElement(
        ir,
        {justifyContent: 'center', m: c.monthLabelMargin},
        e.createElement(Ar, {label: l}),
      ),
      e.createElement(
        ar,
        {daySizeGridTemplateColumns: c.daySize},
        d.map(function(t) {
          return e.createElement(
            ir,
            {key: t, justifyContent: 'center', m: c.monthDayLabelMargin},
            e.createElement(Pr, {label: t}),
          )
        }),
      ),
      e.createElement(
        ar,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function(t, r) {
          return 'object' == typeof t
            ? e.createElement(_r, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: r})
        }),
      ),
    )
  }
var nn,
  an,
  on,
  dn = l('button')(
    nn ||
      (nn = we(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  ln = l(function(t) {
    var r = t.height,
      n = t.width,
      a = t.color,
      o = t.className,
      i = void 0 === o ? '' : o
    return e.createElement(
      'svg',
      {
        width: n,
        height: r,
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
  })(on || (on = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(
        an ||
          (an = we(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function cn(t) {
  var r = t.onResetDates,
    n = t.text,
    a = t.rtl,
    i = o(c),
    d = sr({
      fontFamily: ur.fontFamily,
      resetDatesIconColor: pr('mud', ur.colors.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: pr('darcula', ur.colors.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    dn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(ln, {
      height: d.resetDatesIconHeight,
      width: d.resetDatesIconWidth,
      color: d.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      Fr,
      {
        m: d.resetDatesTextMargin,
        lineHeight: d.resetDatesTextLineHeight,
        fontFamily: d.fontFamily,
        fontSize: d.resetDatesTextFontSize,
        color: d.resetDatesTextColor,
      },
      n,
    ),
  )
}
var sn,
  un,
  pn = l('svg')(un || (un = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return s(
      sn ||
        (sn = we(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function gn(t) {
  var r = t.height,
    n = t.width,
    a = t.color,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    d = t.className,
    l = void 0 === d ? '' : d,
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
    pn,
    {
      width: n,
      height: r,
      color: a,
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
var fn,
  mn = Ye(kt, St, _e, ot, Je),
  hn = l('button')(
    fn ||
      (fn = we(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    mn,
  )
function yn(t) {
  var r = t.type,
    n = t.onClick,
    a = t.vertical,
    i = t.rtl,
    d = t.ariaLabel,
    l = o(c),
    s = sr({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: pr('white', ur.colors.white, l),
      navButtonBorder: '1px solid ' + pr('silverCloud', ur.colors.silverCloud, l),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: pr('greey', ur.colors.greey, l),
    })
  function u() {
    return 'next' !== r || a
      ? 'next' === r && a
        ? 'down'
        : 'prev' !== r || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    hn,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== u() || i ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && i ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': d,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(gn, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: u(),
    }),
  )
}
function Dn(t) {
  var r = t.height,
    n = t.width,
    a = t.color,
    o = t.className,
    i = void 0 === o ? '' : o
  return e.createElement(
    'svg',
    {
      width: n,
      height: r,
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
var vn,
  bn,
  kn = Ye(ot, Xe, Rt, Wt, Lt),
  Sn = l('div')(
    vn ||
      (vn = we(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    kn,
  ),
  xn = l('button')(
    bn ||
      (bn = we(
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
    Sn,
    Xe,
    Xe,
  )
function wn(t) {
  var r = t.onClick,
    n = t.rtl,
    a = t.closeText,
    i = o(c),
    d = sr({
      fontFamily: ur.fontFamily,
      closeMargin: n ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: pr('silverCloud', ur.colors.silverCloud, i),
      closeHoverColor: pr('darcula', ur.colors.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    xn,
    {
      onClick: r,
      color: d.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(Dn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      Sn,
      {
        m: d.closeMargin,
        color: d.closeColor,
        fontSize: d.closeFontSize,
        fontFamily: d.fontFamily,
        fontWeight: d.closeFontWeight,
      },
      a,
    ),
  )
}
var Cn = u(
    Hn ||
      (Hn = we(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  Bn = Ye(_e, ot, Vt, Ke, it, kt),
  Rn = l('div')(
    zn ||
      (zn = we(
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
    Bn,
    function(e) {
      return (
        e.rtl &&
        s(En || (En = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    Cn,
  ),
  Wn = l('div')(
    In ||
      (In = we(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Ln = Ye(wt, Tt),
  Fn = l(lr)(On || (On = we(['\n  ', '\n'], ['\n  ', '\n'])), Ln),
  Mn = Ye(Ct, St),
  Tn = l(ar)(An || (An = we(['\n  ', '\n'], ['\n  ', '\n'])), Mn)
var Hn,
  En,
  zn,
  In,
  On,
  An,
  Pn,
  Yn,
  jn,
  Gn,
  Nn,
  Xn = e.forwardRef(function(t, r) {
    var n = t.startDate,
      a = t.endDate,
      l = t.minBookingDate,
      s = t.maxBookingDate,
      u = t.focusedInput,
      p = t.onDatesChange,
      g = t.dayLabelFormat,
      f = t.weekdayLabelFormat,
      m = t.monthLabelFormat,
      h = t.onDayRender,
      y = t.vertical,
      D = void 0 !== y && y,
      v = t.rtl,
      b = void 0 !== v && v,
      k = t.showResetDates,
      S = void 0 === k || k,
      x = t.showClose,
      w = void 0 === x || x,
      C = t.showSelectedDates,
      B = void 0 === C || C,
      R = t.exactMinBookingDays,
      W = void 0 !== R && R,
      L = t.isDateBlocked,
      F =
        void 0 === L
          ? function() {
              return !1
            }
          : L,
      M = t.minBookingDays,
      T = void 0 === M ? 1 : M,
      H = t.onClose,
      E = void 0 === H ? function() {} : H,
      z = t.numberOfMonths,
      I = t.firstDayOfWeek,
      O = t.displayFormat,
      A = void 0 === O ? 'MM/DD/YYYY' : O,
      P = t.phrases,
      Y = void 0 === P ? Kt : P,
      j = Se({
        startDate: n,
        endDate: a,
        focusedInput: u,
        onDatesChange: p,
        minBookingDate: l,
        maxBookingDate: s,
        minBookingDays: T,
        isDateBlocked: F,
        exactMinBookingDays: W,
        numberOfMonths: z,
        firstDayOfWeek: I,
      }),
      G = j.activeMonths,
      N = j.isDateSelected,
      X = j.isFirstOrLastSelectedDate,
      $ = j.isDateHovered,
      V = j.firstDayOfWeek,
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
    d(r, function() {
      return {
        onDateSelect: function(e) {
          U(e)
        },
      }
    })
    var de = i(null),
      le = o(c),
      ce = sr({
        datepickerBackground: '#ffffff',
        datepickerPadding: D ? '16px 16px 0' : '32px',
        datepickerBorderRadius: '2px',
        datepickerPosition: 'relative',
        datepickerWidth: 'fit-content',
        datepickerCloseWrapperPosition: D ? 'relative' : 'absolute',
        datepickerCloseWrapperDisplay: D ? 'flex' : 'block',
        datepickerCloseWrapperJustifyContent: D ? 'flex-end' : 'initial',
        datepickerCloseWrapperMargin: D ? '0 0 16px' : '0',
        datepickerCloseWrapperRight: b ? 'unset' : D ? '0' : '32px',
        datepickerCloseWrapperTop: 'unset',
        datepickerCloseWrapperLeft: b ? '32px' : 'unset',
        datepickerCloseWrapperBottom: 'unset',
        datepickerCloseWrapperZIndex: 1,
        datepickerSelectDateGridTemplateColumns: D ? '87px 50px 87px' : '126px 75px 126px',
        datepickerSelectDateArrowIconWidth: '15px',
        datepickerSelectDateArrowIconHeight: '12px',
        datepickerSelectDateArrowIconColor: pr('silverCloud', ur.colors.silverCloud, le),
        datepickerMonthsWrapperMargin: w || B ? (B ? '28px 0 0' : '48px 0 0') : 'unset',
        datepickerPreviousMonthButtonPosition: D ? 'relative' : 'absolute',
        datepickerPreviousMonthButtonTop: D ? 'unset' : '-5px',
        datepickerPreviousMonthButtonLeft: D ? 'unset' : '0',
        datepickerPreviousMonthButtonRight: 'unset',
        datepickerPreviousMonthButtonBottom: 'unset',
        datepickerNextMonthButtonPosition: D ? 'relative' : 'absolute',
        datepickerNextMonthButtonTop: D ? 'unset' : '-5px',
        datepickerNextMonthButtonLeft: 'unset',
        datepickerNextMonthButtonRight: D ? 'unset' : '0',
        datepickerNextMonthButtonBottom: 'unset',
        datepickerMonthsGridGap: D ? '32px' : '0 32px',
        datepickerMonthsGridOverflow: 'auto',
        datepickerMonthsGridHeight: D ? '50vh' : '100%',
        datepickerResetDatesWrapperMargin: D ? 'unset' : '32px 0 0',
        datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
      })
    function se() {
      de && de.current && D && (de.current.scrollTop = 0)
    }
    function ue() {
      Q(), se()
    }
    function pe() {
      J(), se()
    }
    return e.createElement(
      jr.Provider,
      {
        value: {
          rtl: b,
          isDateFocused: ee,
          isDateSelected: N,
          isDateHovered: $,
          isFirstOrLastSelectedDate: X,
          onDateFocus: oe,
          focusedDate: te,
          onDateSelect: U,
          onDateHover: K,
          onDayRender: h,
          isDateBlocked: ie,
        },
      },
      e.createElement(
        Rn,
        {
          background: ce.datepickerBackground,
          p: ce.datepickerPadding,
          borderRadius: ce.datepickerBorderRadius,
          position: ce.datepickerPosition,
          boxShadow: ce.datepickerBoxShadow,
          width: ce.datepickerWidth,
          rtl: b,
        },
        w &&
          e.createElement(
            Fn,
            {
              m: ce.datepickerCloseWrapperMargin,
              display: ce.datepickerCloseWrapperDisplay,
              justifyContent: ce.datepickerCloseWrapperJustifyContent,
              position: ce.datepickerCloseWrapperPosition,
              right: ce.datepickerCloseWrapperRight,
              top: ce.datepickerCloseWrapperTop,
              left: ce.datepickerCloseWrapperLeft,
              bottom: ce.datepickerCloseWrapperBottom,
              zIndex: ce.datepickerCloseWrapperZIndex,
            },
            e.createElement(wn, {onClick: E, rtl: b, closeText: Y.close}),
          ),
        B &&
          e.createElement(
            Wn,
            null,
            e.createElement(
              ar,
              {gridTemplateColumns: ce.datepickerSelectDateGridTemplateColumns},
              e.createElement(Tr, {
                title: Y.datepickerStartDateLabel,
                date: De(n, A, Y.datepickerStartDatePlaceholder),
                isActive: u === be,
                vertical: D,
              }),
              e.createElement(
                ir,
                {justifyContent: 'center', alignItems: 'center'},
                e.createElement(Cr, {
                  height: ce.datepickerSelectDateArrowIconHeight,
                  width: ce.datepickerSelectDateArrowIconWidth,
                  iconColor: ce.datepickerSelectDateArrowIconColor,
                }),
              ),
              e.createElement(Tr, {
                title: Y.datepickerEndDateLabel,
                date: De(a, A, Y.datepickerEndDatePlaceholder),
                isActive: u === ke,
                vertical: D,
              }),
            ),
          ),
        e.createElement(
          lr,
          {position: 'relative'},
          e.createElement(
            lr,
            {m: ce.datepickerMonthsWrapperMargin},
            e.createElement(
              Tn,
              {
                'data-testid': 'MonthGrid',
                overflow: ce.datepickerMonthsGridOverflow,
                height: ce.datepickerMonthsGridHeight,
                gridTemplateColumns: D ? '1fr' : 'repeat(' + _ + ', 1fr)',
                gridGap: ce.datepickerMonthsGridGap,
                pr: b ? '1px' : '0',
                ref: de,
                onMouseLeave: function() {
                  q && K(null)
                },
              },
              G.map(function(t) {
                return e.createElement(rn, {
                  key: 'month-' + t.year + '-' + t.month,
                  year: t.year,
                  month: t.month,
                  firstDayOfWeek: V,
                  dayLabelFormat: g || re,
                  weekdayLabelFormat: f || ne,
                  monthLabelFormat: m || ae,
                })
              }),
            ),
          ),
          e.createElement(
            ir,
            {alignItems: 'center'},
            e.createElement(
              e.Fragment,
              null,
              S &&
                e.createElement(
                  ir,
                  {flex: '1', m: ce.datepickerResetDatesWrapperMargin},
                  e.createElement(cn, {rtl: b, onResetDates: Z, text: Y.resetDates}),
                ),
              e.createElement(
                lr,
                {
                  position: ce.datepickerPreviousMonthButtonPosition,
                  top: ce.datepickerPreviousMonthButtonTop,
                  left: ce.datepickerPreviousMonthButtonLeft,
                  right: ce.datepickerPreviousMonthButtonRight,
                  bottom: ce.datepickerPreviousMonthButtonBottom,
                },
                e.createElement(yn, {
                  type: 'prev',
                  onClick: b && !D ? ue : pe,
                  vertical: D,
                  rtl: b,
                  ariaLabel: 'Previous month',
                }),
              ),
              e.createElement(
                lr,
                {
                  position: ce.datepickerNextMonthButtonPosition,
                  top: ce.datepickerNextMonthButtonTop,
                  left: ce.datepickerNextMonthButtonLeft,
                  right: ce.datepickerNextMonthButtonRight,
                  bottom: ce.datepickerNextMonthButtonBottom,
                },
                e.createElement(yn, {
                  type: 'next',
                  onClick: b && !D ? pe : ue,
                  vertical: D,
                  rtl: b,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    )
  }),
  $n = l(lr)(Yn || (Yn = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(Pn || (Pn = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Vn = Ye(Xe, Bt),
  Un = l(Cr)(Gn || (Gn = we(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Vn, function(e) {
    return (
      e.rtl &&
      s(
        jn ||
          (jn = we(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Zn = Ye(_e, Je, Vt),
  Jn = l(ar)(Nn || (Nn = we(['\n  ', '\n'], ['\n  ', '\n'])), Zn)
function Qn(r) {
  var n = r.startDate,
    a = r.endDate,
    d = r.minBookingDate,
    l = r.maxBookingDate,
    s = r.firstDayOfWeek,
    u = r.onFocusChange,
    p = r.numberOfMonths,
    g = r.focusedInput,
    f = r.onDatesChange,
    m = r.exactMinBookingDays,
    h = r.dayLabelFormat,
    y = r.weekdayLabelFormat,
    D = r.monthLabelFormat,
    v = r.onDayRender,
    b = r.showClose,
    k = void 0 === b || b,
    S = r.showSelectedDates,
    x = void 0 === S || S,
    w = r.showResetDates,
    C = void 0 === w || w,
    B = r.vertical,
    R = void 0 !== B && B,
    W = r.rtl,
    L = void 0 !== W && W,
    F = r.isDateBlocked,
    M =
      void 0 === F
        ? function() {
            return !1
          }
        : F,
    T = r.minBookingDays,
    H = void 0 === T ? 1 : T,
    E = r.onClose,
    z = void 0 === E ? function() {} : E,
    I = r.showStartDateCalendarIcon,
    O = void 0 === I || I,
    A = r.showEndDateCalendarIcon,
    P = void 0 === A || A,
    Y = r.displayFormat,
    j = void 0 === Y ? 'MM/DD/YYYY' : Y,
    G = r.phrases,
    N = void 0 === G ? er : G,
    X = r.placement,
    $ = void 0 === X ? 'bottom' : X,
    V = i(null),
    U = i(null),
    Z = o(c),
    J = sr(
      xe(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: R ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: pr('graci', ur.colors.graci, Z),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: R ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: R ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })($, L),
      ),
    )
  function Q(e) {
    null !== g && U && U.current && !U.current.contains(e.target) && u(null)
  }
  function _(e) {
    V && V.current && V.current.onDateSelect && V.current.onDateSelect(e)
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
      $n,
      {rtl: L, position: 'relative', ref: U},
      e.createElement(
        Jn,
        {
          background: J.dateRangeBackground,
          gridTemplateColumns: J.dateRangeGridTemplateColumns,
          border: J.dateRangeBorder,
          borderRadius: J.dateRangeBorderRadius,
        },
        e.createElement(wr, {
          id: 'startDate',
          ariaLabel: N.startDateAriaLabel,
          placeholder: N.startDatePlaceholder,
          value: De(n, j, ''),
          onClick: function() {
            return u(be)
          },
          showCalendarIcon: O,
          vertical: R,
          isActive: g === be,
          padding: J.dateRangeStartDateInputPadding,
          rtl: L,
          onChange: _,
          dateFormat: j,
        }),
        e.createElement(
          ir,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Un, {
            width: J.dateRangeArrowIconWidth,
            height: J.dateRangeArrowIconHeight,
            color: J.dateRangeArrowIconColor,
            opacity: J.dateRangeArrowIconOpacity,
            rtl: L,
          }),
        ),
        e.createElement(wr, {
          id: 'endDate',
          ariaLabel: N.endDateAriaLabel,
          placeholder: N.endDatePlaceholder,
          value: De(a, j, ''),
          onClick: function() {
            return u(n ? ke : be)
          },
          showCalendarIcon: P,
          vertical: R,
          isActive: g === ke,
          padding: J.dateRangeEndDateInputPadding,
          rtl: L,
          disableAccessibility: g === be,
          onChange: _,
          dateFormat: j,
        }),
      ),
      e.createElement(
        lr,
        {
          position: J.dateRangeDatepickerWrapperPosition,
          bottom: J.dateRangeDatepickerWrapperBottom,
          left: J.dateRangeDatepickerWrapperLeft,
          top: J.dateRangeDatepickerWrapperTop,
          right: J.dateRangeDatepickerWrapperRight,
        },
        null !== g &&
          e.createElement(Xn, {
            onClose: function() {
              z(), u(null)
            },
            startDate: n,
            endDate: a,
            minBookingDate: d,
            maxBookingDate: l,
            firstDayOfWeek: s,
            numberOfMonths: p,
            focusedInput: g,
            displayFormat: j,
            onDatesChange: f,
            minBookingDays: H,
            isDateBlocked: M,
            exactMinBookingDays: m,
            showResetDates: C,
            vertical: R,
            showSelectedDates: x,
            showClose: k,
            rtl: L,
            dayLabelFormat: h,
            weekdayLabelFormat: y,
            monthLabelFormat: D,
            onDayRender: v,
            phrases: N,
            ref: V,
          }),
      ),
    )
  )
}
var _n,
  qn,
  Kn = l(lr)(qn || (qn = we(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      s(_n || (_n = we(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function ea(r) {
  var n = r.date,
    a = r.minBookingDate,
    o = r.maxBookingDate,
    d = r.firstDayOfWeek,
    l = r.onFocusChange,
    c = r.showDatepicker,
    s = r.onDateChange,
    u = r.dayLabelFormat,
    p = r.weekdayLabelFormat,
    g = r.monthLabelFormat,
    f = r.onDayRender,
    m = r.numberOfMonths,
    h = void 0 === m ? 1 : m,
    y = r.showClose,
    D = void 0 === y || y,
    v = r.showResetDate,
    b = void 0 === v || v,
    k = r.vertical,
    S = void 0 !== k && k,
    x = r.rtl,
    w = void 0 !== x && x,
    C = r.isDateBlocked,
    B =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    R = r.onClose,
    W = void 0 === R ? function() {} : R,
    L = r.showCalendarIcon,
    F = void 0 === L || L,
    M = r.displayFormat,
    T = void 0 === M ? 'MM/DD/YYYY' : M,
    H = r.phrases,
    E = void 0 === H ? tr : H,
    z = r.placement,
    I = void 0 === z ? 'bottom' : z,
    O = i(null),
    A = i(null),
    P = sr(
      xe(
        {
          dateSingleInputPadding: S ? (w ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
  function Y(e) {
    c && A && A.current && !A.current.contains(e.target) && l(!1)
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
      Kn,
      {rtl: w, position: 'relative', ref: A},
      e.createElement(wr, {
        id: 'startDate',
        ariaLabel: E.dateAriaLabel,
        placeholder: E.datePlaceholder,
        value: De(n, T, ''),
        onClick: function() {
          return l(!0)
        },
        showCalendarIcon: F,
        vertical: S,
        isActive: !1,
        padding: P.dateSingleInputPadding,
        rtl: w,
        onChange: function(e) {
          O && O.current && O.current.onDateSelect && O.current.onDateSelect(e)
        },
        dateFormat: T,
      }),
      e.createElement(
        lr,
        {
          position: P.dateSingleDatepickerWrapperPosition,
          bottom: P.dateSingleDatepickerWrapperBottom,
          left: P.dateSingleDatepickerWrapperLeft,
          top: P.dateSingleDatepickerWrapperTop,
          right: P.dateSingleDatepickerWrapperRight,
        },
        c &&
          e.createElement(Xn, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              W(), l(!1)
            },
            startDate: n,
            endDate: n,
            minBookingDate: a,
            maxBookingDate: o,
            firstDayOfWeek: d,
            numberOfMonths: h,
            focusedInput: c ? be : null,
            displayFormat: T,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                r = e.startDate
              s({showDatepicker: null !== t, date: r})
            },
            isDateBlocked: B,
            showResetDates: b,
            vertical: S,
            showSelectedDates: !1,
            showClose: D,
            rtl: w,
            dayLabelFormat: u,
            weekdayLabelFormat: p,
            monthLabelFormat: g,
            onDayRender: f,
            phrases: E,
            ref: O,
          }),
      ),
    )
  )
}
export {
  Qn as DateRangeInput,
  ea as DateSingleInput,
  Xn as Datepicker,
  ke as END_DATE,
  be as START_DATE,
  er as dateRangeInputPhrases,
  tr as dateSingleInputPhrases,
  Kt as datepickerPhrases,
}
