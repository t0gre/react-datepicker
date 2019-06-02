import e, {
  useEffect as t,
  useState as n,
  useCallback as r,
  useMemo as o,
  useContext as a,
  useRef as i,
} from 'react'
import c, {ThemeContext as s, css as l} from 'styled-components'
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
  g = /:/,
  m = /^(\d{2})$/,
  h = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  y = /^(\d{4})/,
  v = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  D = /^-(\d{2})$/,
  k = /^-?(\d{3})$/,
  b = /^-?(\d{2})-?(\d{2})$/,
  x = /^-?W(\d{2})$/,
  C = /^-?W(\d{2})-?(\d{1})$/,
  S = /^(\d{2}([.,]\d*)?)$/,
  w = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  B = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  M = /([Z+-].*)$/,
  F = /^(Z)$/,
  W = /^([+-])(\d{2})$/,
  E = /^([+-])(\d{2}):?(\d{2})$/
function T(e, t, n) {
  ;(t = t || 0), (n = n || 0)
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var o = 7 * t + n + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + o), r
}
var H,
  R = function(e, t) {
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
        if ((g.test(r[0]) ? ((n.date = null), (t = r[0])) : ((n.date = r[0]), (t = r[1])), t)) {
          var o = M.exec(t)
          o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t)
        }
        return n
      })(e),
      c = (function(e, t) {
        var n,
          r = h[t],
          o = v[t]
        if ((n = y.exec(e) || o.exec(e))) {
          var a = n[1]
          return {year: parseInt(a, 10), restDateString: e.slice(a.length)}
        }
        if ((n = m.exec(e) || r.exec(e))) {
          var i = n[1]
          return {year: 100 * parseInt(i, 10), restDateString: e.slice(i.length)}
        }
        return {year: null}
      })(i.date, n),
      s = c.year,
      l = (function(e, t) {
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
          ? T(t, parseInt(n[1], 10) - 1)
          : (n = C.exec(e))
          ? T(t, parseInt(n[1], 10) - 1, parseInt(n[2], 10) - 1)
          : null
      })(c.restDateString, s)
    if (l) {
      var H,
        R = l.getTime(),
        L = 0
      if (
        (i.time &&
          (L = (function(e) {
            var t, n, r
            if ((t = S.exec(e))) return ((n = parseFloat(t[1].replace(',', '.'))) % 24) * p
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
          (H =
            6e4 *
            ((o = F.exec(r))
              ? 0
              : (o = W.exec(r))
              ? ((a = 60 * parseInt(o[2], 10)), '+' === o[1] ? -a : a)
              : (o = E.exec(r))
              ? ((a = 60 * parseInt(o[2], 10) + parseInt(o[3], 10)), '+' === o[1] ? -a : a)
              : 0))
      else {
        var O = R + L,
          P = new Date(O)
        H = u(P)
        var z = new Date(O)
        z.setDate(P.getDate() + 1)
        var I = u(z) - u(P)
        I > 0 && (H += I)
      }
      return new Date(R + L + H)
    }
    return new Date(e)
  },
  L = function(e) {
    var t = R(e)
    return t.setHours(0, 0, 0, 0), t
  },
  O = function(e) {
    var t = R(e)
    return (
      (function(e, t) {
        var n = L(e),
          r = L(t),
          o = n.getTime() - 6e4 * n.getTimezoneOffset(),
          a = r.getTime() - 6e4 * r.getTimezoneOffset()
        return Math.round((o - a) / 864e5)
      })(
        t,
        (function(e) {
          var t = R(e),
            n = new Date(0)
          return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        })(t),
      ) + 1
    )
  },
  P = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = R(e),
      o = r.getDay(),
      a = (o < n ? 7 : 0) + o - n
    return r.setDate(r.getDate() - a), r.setHours(0, 0, 0, 0), r
  },
  z = function(e) {
    return P(e, {weekStartsOn: 1})
  },
  I = function(e) {
    var t = R(e),
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
    var t = R(e),
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
        o = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        a = ['AM', 'PM'],
        i = ['am', 'pm'],
        c = ['a.m.', 'p.m.'],
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
            return o[e.getDay()]
          },
          A: function(e) {
            return e.getHours() / 12 >= 1 ? a[1] : a[0]
          },
          a: function(e) {
            return e.getHours() / 12 >= 1 ? i[1] : i[0]
          },
          aa: function(e) {
            return e.getHours() / 12 >= 1 ? c[1] : c[0]
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
        {formatters: s, formattingTokensRegExp: V(s)}
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
    var c = R(e)
    return Y(c)
      ? (function(e, t, n) {
          var r,
            o,
            a,
            i = e.match(n),
            c = i.length
          for (r = 0; r < c; r++)
            (o = t[i[r]] || $[i[r]]),
              (i[r] =
                o ||
                ((a = i[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, '') : a.replace(/\\/g, '')))
          return function(e) {
            for (var t = '', n = 0; n < c; n++)
              i[n] instanceof Function ? (t += i[n](e, $)) : (t += i[n])
            return t
          }
        })(r, a, i)(c)
      : 'Invalid Date'
  },
  Z = function(e, t) {
    var n = R(e),
      r = Number(t)
    return n.setDate(n.getDate() + r), n
  },
  X = function(e, t, n) {
    var r = R(e),
      o = void 0 !== n ? n : 1,
      a = R(t).getTime()
    if (r.getTime() > a) throw new Error('The first date cannot be after the second date')
    var i = [],
      c = r
    for (c.setHours(0, 0, 0, 0); c.getTime() <= a; ) i.push(R(c)), c.setDate(c.getDate() + o)
    return i
  },
  J = function(e) {
    var t = R(e),
      n = t.getMonth()
    return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  },
  q = function(e, t) {
    var n = (t && Number(t.weekStartsOn)) || 0,
      r = R(e),
      o = r.getDay(),
      a = 6 + (o < n ? -7 : 0) - (o - n)
    return r.setDate(r.getDate() + a), r.setHours(23, 59, 59, 999), r
  },
  K = function(e) {
    return R(e).getDay()
  },
  Q = function(e) {
    var t = R(e)
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
  }
function ee(e) {
  var t = e.year,
    n = e.month,
    r = e.weekStartsOn,
    a = void 0 === r ? 1 : r,
    i = e.dayFormat,
    c =
      void 0 === i
        ? function(e) {
            return U(e, 'DD')
          }
        : i,
    s = e.weekDayFormat,
    l =
      void 0 === s
        ? function(e) {
            return U(e, 'dd')
          }
        : s,
    u = e.monthLabelFormat,
    d =
      void 0 === u
        ? function(e) {
            return U(e, 'MMMM YYYY')
          }
        : u
  return {
    days: o(
      function() {
        return (function(e) {
          var t = e.year,
            n = e.month,
            r = e.weekStartsOn,
            o = void 0 === r ? 1 : r,
            a = e.dayFormat,
            i =
              void 0 === a
                ? function(e) {
                    return U(e, 'DD')
                  }
                : a,
            c = new Date(t, n),
            s = Q(c),
            l = K(s),
            u = J(c),
            d = Array.from(Array(l >= o ? l - o : o).keys()).fill(0),
            p = X(s, u).map(function(e) {
              return {date: e, day: i(e)}
            })
          return d.concat(p)
        })({year: t, month: n, weekStartsOn: a, dayFormat: c})
      },
      [t, n, a, c],
    ),
    weekDays: o(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            n = t.weekStartsOn,
            r = void 0 === n ? 1 : n,
            o = t.weekDayFormat,
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
        })({weekStartsOn: a, weekDayFormat: l})
      },
      [a, l],
    ),
    monthLabel: d(new Date(t, n)),
  }
}
var te = function(e, t) {
    var n = R(e),
      r = R(t)
    return n.getTime() < r.getTime()
  },
  ne = function(e, t) {
    var n = R(e),
      r = R(t)
    return n.getTime() > r.getTime()
  },
  re = function(e, t, n) {
    var r = R(e).getTime(),
      o = R(t).getTime(),
      a = R(n).getTime()
    if (o > a) throw new Error('The start of the range cannot be after the end of the range')
    return r >= o && r <= a
  },
  oe = function(e, t) {
    var n = L(e),
      r = L(t)
    return n.getTime() === r.getTime()
  },
  ae = function(e, t) {
    var n = R(e),
      r = R(t)
    return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
  },
  ie = function(e) {
    return R(e).getFullYear()
  },
  ce = function(e) {
    return R(e).getMonth()
  },
  se = function() {
    return L(new Date())
  },
  le = function(e, t) {
    var n = R(e),
      r = Number(t),
      o = n.getMonth() + r,
      a = new Date(0)
    a.setFullYear(n.getFullYear(), o, 1), a.setHours(0, 0, 0, 0)
    var i = (function(e) {
      var t = R(e),
        n = t.getFullYear(),
        r = t.getMonth(),
        o = new Date(0)
      return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
    })(a)
    return n.setMonth(o, Math.min(i, n.getDate())), n
  }
function ue(e) {
  var t = Q(e)
  return {year: ie(t), month: ce(t), date: t}
}
function de(e, t) {
  var n = ue(t || se()),
    r = n.date,
    o = [n]
  return (
    e > 1 &&
      (o = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = le(e[e.length - 1].date, 1)), e.concat([ue(r)])
      }, o)),
    o
  )
}
function pe(e, t, n) {
  var r = e[n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (r = le(r, n)), n > 0 ? e.concat([ue(r)]) : [ue(r)].concat(e)
  }, [])
}
function fe(e, t, n) {
  return e && 'string' == typeof t ? U(e, t) : e && 'function' == typeof t ? t(e) : n
}
function ge(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.minBookingDays,
    a = e.exactMinBookingDays,
    i = e.minBookingDate,
    c = e.maxBookingDate,
    s = !i || !te(t, Z(i, -1)),
    l = !c || !ne(Z(t, o - 1), c)
  if (t && 1 === o && !n && !r(t)) return !0
  if ((t && o > 1 && !n && !a) || (t && o > 0 && a && s && l) || (t && o > 0 && a && !i && !c))
    return X(t, Z(t, o - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && n && !a) {
    var u = Z(t, o - 1)
    return (
      !te(n, u) &&
      X(t, n).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
var me = 'startDate',
  he = 'endDate'
function ye(e) {
  var o = e.startDate,
    a = e.endDate,
    i = e.focusedInput,
    c = e.minBookingDate,
    s = e.maxBookingDate,
    l = e.onDateChange,
    u = e.exactMinBookingDays,
    d = void 0 !== u && u,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    g = e.numberOfMonths,
    m = void 0 === g ? 2 : g,
    h = e.firstDayOfWeek,
    y = void 0 === h ? 1 : h,
    v = e.isDayBlocked,
    D =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    k = n(function() {
      return de(m, o)
    }),
    b = k[0],
    x = k[1],
    C = n(null),
    S = C[0],
    w = C[1],
    B = n(o),
    M = B[0],
    F = B[1],
    W = r(
      function(e) {
        F(e), (!M || (M && !ae(e, M))) && x(de(m, e))
      },
      [F, x, m, M],
    ),
    E = r(
      function(e) {
        return (function(e, t, n) {
          return !(!t || !n) && re(e, t, n)
        })(e, o, a)
      },
      [o, a],
    ),
    T = r(
      function(e) {
        return (function(e, t, n) {
          return !!((t && oe(e, t)) || (n && oe(e, n)))
        })(e, o, a)
      },
      [o, a],
    ),
    H = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.minBookingDate,
            r = e.maxBookingDate,
            o = e.isDayBlockedFn,
            a = e.startDate,
            i = e.endDate,
            c = e.minBookingDays,
            s = void 0 === c ? 1 : c,
            l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
            u = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
          return !!(
            (l && te(t, l)) ||
            (u && ne(t, u)) ||
            (a && !i && s > 1 && re(t, a, Z(a, s - 2))) ||
            (o && o(t))
          )
        })({
          date: e,
          minBookingDate: c,
          maxBookingDate: s,
          startDate: o,
          endDate: a,
          minBookingDays: f,
          isDayBlockedFn: D,
        })
      },
      [c, s, o, a, f, D],
    ),
    R = r(
      function(e) {
        return !!M && oe(e, M)
      },
      [M],
    ),
    L = r(
      function(e) {
        return (function(e) {
          var t = e.date,
            n = e.startDate,
            r = e.endDate,
            o = e.isDateBlocked,
            a = e.hoveredDate,
            i = e.minBookingDays
          return a && i > 1 && e.exactMinBookingDays && re(t, a, Z(a, i - 1))
            ? X(a, Z(a, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : n && !r && a && re(t, n, Z(n, i - 1)) && oe(n, a) && i > 1
            ? X(n, Z(n, i - 1)).reduce(function(e, t) {
                return e ? !o(t) : e
              }, !0)
            : !(!n || r || !a || te(a, n) || !re(t, n, a)) &&
              X(n, a).reduce(function(e, t) {
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
  function O(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      M ||
      (W(new Date()), x(de(m, new Date())))
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
      isDateSelected: E,
      isDateHovered: L,
      isFirstOrLastSelectedDate: T,
      isDateBlocked: H,
      numberOfMonths: m,
      isDateFocused: R,
      focusedDate: M,
      onResetDates: function() {
        l({startDate: null, endDate: null, focusedInput: me})
      },
      onDayHover: function(e) {
        var t = !H(e) || (o && oe(e, o)),
          n = !c || !te(e, Z(c, -1)),
          r = !s || !ne(e, s),
          i = Z(e, f - 1),
          l = !c || !te(i, c),
          u = !s || !ne(i, s),
          p = d && f > 1 && n && r && l && u,
          g = o && !a && !d && n && r,
          m = !(f > 1 && o) || re(e, o, Z(o, f - 2)),
          h = o && oe(e, o) && m
        t && (p || g || h) ? w(e) : null !== S && w(null)
      },
      onDaySelect: function(e) {
        ;(i === he || i === me) &&
        f > 0 &&
        d &&
        ge({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: c,
          maxBookingDate: s,
          isDateBlocked: D,
          startDate: e,
          endDate: null,
        })
          ? l({startDate: e, endDate: Z(e, f - 1), focusedInput: null})
          : ((i === he && o && te(e, o)) || (i === me && a && ne(e, a))) &&
            !d &&
            ge({minBookingDays: f, isDateBlocked: D, startDate: e, endDate: null})
          ? l({endDate: null, startDate: e, focusedInput: he})
          : i === me && !d && ge({minBookingDays: f, isDateBlocked: D, endDate: a, startDate: e})
          ? l({endDate: a, startDate: e, focusedInput: he})
          : i === me && !d && ge({minBookingDays: f, isDateBlocked: D, endDate: null, startDate: e})
          ? l({endDate: null, startDate: e, focusedInput: he})
          : i === he &&
            o &&
            !te(e, o) &&
            !d &&
            ge({minBookingDays: f, isDateBlocked: D, startDate: o, endDate: e}) &&
            l({startDate: o, endDate: e, focusedInput: null}),
          (!M || (M && !ae(e, M))) && x(de(m, e))
      },
      onDayFocus: W,
      goToPreviousMonths: function() {
        x(pe(b, m, -1)), F(null)
      },
      goToNextMonths: function() {
        x(pe(b, m, 1)), F(null)
      },
    }
  )
}
var ve = function() {
  return (ve =
    Object.assign ||
    function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      return e
    }).apply(this, arguments)
}
function De(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
function ke() {
  return (ke =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
function be(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function xe(e, t) {
  return e((t = {exports: {}}), t.exports), t.exports
}
var Ce = xe(function(e, t) {
  Object.defineProperty(t, '__esModule', {value: !0})
  var n = 'function' == typeof Symbol && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    o = n ? Symbol.for('react.portal') : 60106,
    a = n ? Symbol.for('react.fragment') : 60107,
    i = n ? Symbol.for('react.strict_mode') : 60108,
    c = n ? Symbol.for('react.profiler') : 60114,
    s = n ? Symbol.for('react.provider') : 60109,
    l = n ? Symbol.for('react.context') : 60110,
    u = n ? Symbol.for('react.async_mode') : 60111,
    d = n ? Symbol.for('react.concurrent_mode') : 60111,
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
            case u:
            case d:
            case a:
            case c:
            case i:
            case f:
              return e
            default:
              switch ((e = e && e.$$typeof)) {
                case l:
                case p:
                case s:
                  return e
                default:
                  return t
              }
          }
        case m:
        case g:
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
    (t.ContextConsumer = l),
    (t.ContextProvider = s),
    (t.Element = r),
    (t.ForwardRef = p),
    (t.Fragment = a),
    (t.Lazy = m),
    (t.Memo = g),
    (t.Portal = o),
    (t.Profiler = c),
    (t.StrictMode = i),
    (t.Suspense = f),
    (t.isValidElementType = function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === a ||
        e === d ||
        e === c ||
        e === i ||
        e === f ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === m ||
            e.$$typeof === g ||
            e.$$typeof === s ||
            e.$$typeof === l ||
            e.$$typeof === p))
      )
    }),
    (t.isAsyncMode = function(e) {
      return y(e) || h(e) === u
    }),
    (t.isConcurrentMode = y),
    (t.isContextConsumer = function(e) {
      return h(e) === l
    }),
    (t.isContextProvider = function(e) {
      return h(e) === s
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
      return h(e) === m
    }),
    (t.isMemo = function(e) {
      return h(e) === g
    }),
    (t.isPortal = function(e) {
      return h(e) === o
    }),
    (t.isProfiler = function(e) {
      return h(e) === c
    }),
    (t.isStrictMode = function(e) {
      return h(e) === i
    }),
    (t.isSuspense = function(e) {
      return h(e) === f
    })
})
be(Ce)
Ce.typeOf,
  Ce.AsyncMode,
  Ce.ConcurrentMode,
  Ce.ContextConsumer,
  Ce.ContextProvider,
  Ce.Element,
  Ce.ForwardRef,
  Ce.Fragment,
  Ce.Lazy,
  Ce.Memo,
  Ce.Portal,
  Ce.Profiler,
  Ce.StrictMode,
  Ce.Suspense,
  Ce.isValidElementType,
  Ce.isAsyncMode,
  Ce.isConcurrentMode,
  Ce.isContextConsumer,
  Ce.isContextProvider,
  Ce.isElement,
  Ce.isForwardRef,
  Ce.isFragment,
  Ce.isLazy,
  Ce.isMemo,
  Ce.isPortal,
  Ce.isProfiler,
  Ce.isStrictMode,
  Ce.isSuspense
var Se = xe(function(e, t) {})
be(Se)
Se.typeOf,
  Se.AsyncMode,
  Se.ConcurrentMode,
  Se.ContextConsumer,
  Se.ContextProvider,
  Se.Element,
  Se.ForwardRef,
  Se.Fragment,
  Se.Lazy,
  Se.Memo,
  Se.Portal,
  Se.Profiler,
  Se.StrictMode,
  Se.Suspense,
  Se.isValidElementType,
  Se.isAsyncMode,
  Se.isConcurrentMode,
  Se.isContextConsumer,
  Se.isContextProvider,
  Se.isElement,
  Se.isForwardRef,
  Se.isFragment,
  Se.isLazy,
  Se.isMemo,
  Se.isPortal,
  Se.isProfiler,
  Se.isStrictMode,
  Se.isSuspense,
  xe(function(e) {
    e.exports = Ce
  })
var we = Object.getOwnPropertySymbols,
  Be = Object.prototype.hasOwnProperty,
  Me = Object.prototype.propertyIsEnumerable
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
var Fe = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
Function.call.bind(Object.prototype.hasOwnProperty)
function We() {}
function Ee() {}
Ee.resetWarningCache = We
var Te,
  He,
  Re,
  Le = xe(function(e) {
    e.exports = (function() {
      function e(e, t, n, r, o, a) {
        if (a !== Fe) {
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
        checkPropTypes: Ee,
        resetWarningCache: We,
      }
      return (n.PropTypes = n), n
    })()
  }),
  Oe = function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
  Pe = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  ze = Le.oneOfType([Le.number, Le.string, Le.array, Le.object]),
  Ie = function(e) {
    return function() {
      return e.apply(void 0, arguments)
    }
  },
  Ae = function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var o = n.reduce(function(t, n) {
      return Ye(t)
        ? t
        : ('string' == typeof n ? n.split('.') : [n]).reduce(function(e, t) {
            return e && Ye(e[t]) ? e[t] : null
          }, e)
    }, null)
    return Ye(o) ? o : n[n.length - 1]
  },
  Ye = function(e) {
    return null != e
  },
  je = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Ve = function(e) {
    return je(e) && 0 !== e ? e + 'px' : e
  },
  Ne = function(e) {
    return '@media screen and (min-width: ' + Ve(e) + ')'
  },
  $e = function(e, t) {
    return Ae(t, e)
  },
  Ge = function e(t, n) {
    var r = {}
    for (var o in t) r[o] = t[o]
    for (var a in n) t[a] && 'object' == typeof t[a] ? (r[a] = e(t[a], n[a])) : (r[a] = n[a])
    return r
  },
  _e = function() {
    for (var e = {}, t = 0; t < arguments.length; t++)
      e = Ge(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
    return e
  },
  Ue = function(e) {
    var t,
      n = e.prop,
      r = e.cssProperty,
      o = e.alias,
      a = e.key,
      i = e.transformValue,
      c = void 0 === i ? $e : i,
      s = e.scale,
      l = void 0 === s ? {} : s,
      u = r || n,
      d = function(e) {
        var t = Ae(e, n, o, null)
        if (!Ye(t)) return null
        var r,
          i = Ae(e.theme, a, l),
          s = function(e) {
            var t
            return Ye(e) ? (((t = {})[u] = c(e, i)), t) : null
          }
        if ('object' != typeof (r = t) || null === r) return s(t)
        var d = Ae(e.theme, 'breakpoints', Pe),
          p = []
        if (Array.isArray(t)) {
          p.push(s(t[0]))
          for (var f = 1; f < t.slice(0, d.length + 1).length; f++) {
            var g = s(t[f])
            if (g) {
              var m,
                h = Ne(d[f - 1])
              p.push((((m = {})[h] = g), m))
            }
          }
        } else {
          for (var y in t) {
            var v,
              D = d[y],
              k = Ne(D),
              b = s(t[y])
            if (D) p.push((((v = {})[k] = b), v))
            else p.unshift(b)
          }
          p.sort(Oe)
        }
        return _e.apply(void 0, p)
      }
    return (
      ((d.propTypes = (((t = {})[n] = Ie(ze)), t))[n].meta = {prop: n, themeKey: a}),
      o && ((d.propTypes[o] = Ie(ze)), (d.propTypes[o].meta = {prop: o, themeKey: a})),
      d
    )
  },
  Ze = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
    var r = function(e) {
      var n = t
        .map(function(t) {
          return t(e)
        })
        .filter(Boolean)
      return _e.apply(void 0, n)
    }
    return (
      (r.propTypes = {}),
      t.forEach(function(e) {
        r.propTypes = ke({}, r.propTypes, e.propTypes)
      }),
      r
    )
  },
  Xe = function(e) {
    return function(t) {
      var n = function(n) {
        return t(e(n))
      }
      for (var r in t) n[r] = t[r]
      return n
    }
  },
  Je = function(e) {
    var t,
      n = e.key,
      r = e.prop,
      o = void 0 === r ? 'variant' : r,
      a = function(e) {
        return Ae(e.theme, [n, e[o]].join('.'), null)
      }
    return (a.propTypes = (((t = {})[o] = Le.oneOfType([Le.number, Le.string])), t)), a
  },
  qe = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  Ke = function(e, t) {
    if (!je(e)) return Ve(Ae(t, e, e))
    var n = e < 0,
      r = Math.abs(e),
      o = Ae(t, r)
    return je(o) ? Ve(o * (n ? -1 : 1)) : n ? '-' + o : o
  },
  Qe = Ue({prop: 'margin', alias: 'm', key: 'space', transformValue: Ke, scale: qe}),
  et = Ue({prop: 'marginTop', alias: 'mt', key: 'space', transformValue: Ke, scale: qe}),
  tt = Ue({prop: 'marginBottom', alias: 'mb', key: 'space', transformValue: Ke, scale: qe}),
  nt = Ue({prop: 'marginLeft', alias: 'ml', key: 'space', transformValue: Ke, scale: qe}),
  rt = Ue({prop: 'marginRight', alias: 'mr', key: 'space', transformValue: Ke, scale: qe}),
  ot = Ue({prop: 'padding', alias: 'p', key: 'space', transformValue: Ke, scale: qe}),
  at = Ue({prop: 'paddingTop', alias: 'pt', key: 'space', transformValue: Ke, scale: qe}),
  it = Ue({prop: 'paddingBottom', alias: 'pb', key: 'space', transformValue: Ke, scale: qe}),
  ct = Ue({prop: 'paddingLeft', alias: 'pl', key: 'space', transformValue: Ke, scale: qe}),
  st = Ue({prop: 'paddingRight', alias: 'pr', key: 'space', transformValue: Ke, scale: qe}),
  lt = Xe(function(e) {
    return ke({}, e, {
      mt: Ye(e.my) ? e.my : e.mt,
      mb: Ye(e.my) ? e.my : e.mb,
      ml: Ye(e.mx) ? e.mx : e.ml,
      mr: Ye(e.mx) ? e.mx : e.mr,
      pt: Ye(e.py) ? e.py : e.pt,
      pb: Ye(e.py) ? e.py : e.pb,
      pl: Ye(e.px) ? e.px : e.pl,
      pr: Ye(e.px) ? e.px : e.pr,
    })
  })(Ze(Qe, et, tt, nt, rt, ot, at, it, ct, st)),
  ut = Ze(
    Ue({prop: 'color', key: 'colors'}),
    Ue({prop: 'backgroundColor', alias: 'bg', key: 'colors'}),
  ),
  dt = function(e, t) {
    return !je(e) || e > 1 ? Ve(e) : 100 * e + '%'
  },
  pt = Ue({prop: 'width', key: 'widths', transformValue: dt}),
  ft = function(e, t) {
    return Ve(Ae(t, e))
  },
  gt = Ue({
    prop: 'fontSize',
    key: 'fontSizes',
    transformValue: ft,
    scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  }),
  mt = Ue({prop: 'fontFamily', key: 'fonts'}),
  ht = Ue({prop: 'fontWeight', key: 'fontWeights'}),
  yt = Ue({prop: 'lineHeight', key: 'lineHeights'}),
  vt = (Ue({prop: 'textAlign'}),
  Ue({prop: 'fontStyle'}),
  Ue({prop: 'letterSpacing', key: 'letterSpacings', transformValue: ft}),
  Ue({prop: 'display'})),
  Dt = (Ue({prop: 'maxWidth', key: 'maxWidths', transformValue: ft}),
  Ue({prop: 'minWidth', key: 'minWidths', transformValue: ft}),
  Ue({prop: 'height', key: 'heights', transformValue: ft})),
  kt = (Ue({prop: 'maxHeight', key: 'maxHeights', transformValue: ft}),
  Ue({prop: 'minHeight', key: 'minHeights', transformValue: ft})),
  bt = (Xe(function(e) {
    return ke({}, e, {width: e.size, height: e.size})
  })(Ze(pt, Dt)),
  Ue({prop: 'verticalAlign'}),
  Ue({prop: 'alignItems'})),
  xt = (Ue({prop: 'alignContent'}), Ue({prop: 'justifyItems'}), Ue({prop: 'justifyContent'})),
  Ct = Ue({prop: 'flexWrap'}),
  St = (Ue({prop: 'flexBasis', transformValue: dt}), Ue({prop: 'flexDirection'})),
  wt = Ue({prop: 'flex'}),
  Bt = (Ue({prop: 'justifySelf'}),
  Ue({prop: 'alignSelf'}),
  Ue({prop: 'order'}),
  Ue({prop: 'gridGap', key: 'space', transformValue: ft, scale: qe})),
  Mt = Ue({prop: 'gridColumnGap', key: 'space', transformValue: ft, scale: qe}),
  Ft = Ue({prop: 'gridRowGap', key: 'space', transformValue: ft, scale: qe}),
  Wt = (Ue({prop: 'gridColumn'}), Ue({prop: 'gridRow'}), Ue({prop: 'gridAutoFlow'})),
  Et = Ue({prop: 'gridAutoColumns'}),
  Tt = Ue({prop: 'gridAutoRows'}),
  Ht = Ue({prop: 'gridTemplateColumns'}),
  Rt = Ue({prop: 'gridTemplateRows'}),
  Lt = Ue({prop: 'gridTemplateAreas'}),
  Ot = Ue({prop: 'gridArea'}),
  Pt = Ue({prop: 'border', key: 'borders'}),
  zt = Ue({prop: 'borderWidth', key: 'borderWidths', transformValue: ft}),
  It = Ue({prop: 'borderStyle', key: 'borderStyles'}),
  At = Ue({prop: 'borderColor', key: 'colors'}),
  Yt = Ue({prop: 'borderTop', key: 'borders'}),
  jt = Ue({prop: 'borderRight', key: 'borders'}),
  Vt = Ue({prop: 'borderBottom', key: 'borders'}),
  Nt = Ue({prop: 'borderLeft', key: 'borders'}),
  $t = Ue({prop: 'borderRadius', key: 'radii', transformValue: ft}),
  Gt = Ze(Pt, Yt, jt, Vt, Nt, zt, It, At, $t),
  _t = Ue({prop: 'boxShadow', key: 'shadows'}),
  Ut = Ue({prop: 'opacity'}),
  Zt = Ue({prop: 'overflow'}),
  Xt = Ue({prop: 'background'}),
  Jt = (Ue({prop: 'backgroundImage'}),
  Ue({prop: 'backgroundSize'}),
  Ue({prop: 'backgroundPosition'}),
  Ue({prop: 'backgroundRepeat'}),
  Ue({prop: 'position'})),
  qt = Ue({prop: 'zIndex', key: 'zIndices'}),
  Kt = Ue({prop: 'top', transformValue: ft}),
  Qt = Ue({prop: 'right', transformValue: ft}),
  en = Ue({prop: 'bottom', transformValue: ft}),
  tn = Ue({prop: 'left', transformValue: ft}),
  nn = (Je({key: 'buttons'}),
  Je({key: 'textStyles', prop: 'textStyle'}),
  Je({key: 'colorStyles', prop: 'colors'}),
  {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
  }),
  rn = ve({}, nn, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  on = Object.freeze({datepickerPhrases: nn, dateRangeInputPhrases: rn}),
  an = Ue({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  cn = c('div')(
    Te ||
      (Te = De(
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
    Et,
    Wt,
    Tt,
    Mt,
    Bt,
    Ft,
    Lt,
    Ht,
    Rt,
    bt,
    xt,
    lt,
    an,
  ),
  sn = c('div')(
    He ||
      (He = De(
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
    lt,
    wt,
    Ct,
    St,
    bt,
    xt,
    Ot,
    Dt,
    pt,
  ),
  ln = c('div')(
    Re ||
      (Re = De(
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
    Ot,
    Dt,
    lt,
    pt,
    Jt,
    Kt,
    tn,
    Qt,
    en,
    qt,
  )
function un(t) {
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
function dn(e) {
  void 0 === e && (e = {})
  var t = a(s)
  return o(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(n, r) {
            var o
            return ve({}, n, (((o = {})[r] = t.reactDatepicker[r] || e[r]), o))
          }, {})
        : e
    },
    [t, e],
  )
}
var pn,
  fn,
  gn,
  mn = {
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
  hn = Ue({prop: 'placeholderColor', cssProperty: 'color'}),
  yn = Ue({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  vn = c('label')(
    pn ||
      (pn = De(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Jt,
    Pt,
    Xt,
    vt,
    $t,
    lt,
  ),
  Dn = c('div')(
    fn ||
      (fn = De(
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
    Jt,
    tn,
    Qt,
    Kt,
    Dt,
    pt,
  ),
  kn = c('input')(
    gn ||
      (gn = De(
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
    Xt,
    lt,
    mt,
    gt,
    ut,
    ht,
    lt,
    Pt,
    pt,
    kt,
    _t,
    yn,
    hn,
    yn,
    hn,
    yn,
    hn,
  )
function bn(t) {
  var n = t.placeholder,
    r = t.id,
    o = t.vertical,
    a = t.isActive,
    i = t.ariaLabel,
    c = t.onClick,
    s = t.value,
    l = t.showCalendarIcon,
    u = t.padding,
    d = t.rtl,
    p = t.disableAccessibility,
    f = dn({
      fontFamily: mn.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: mn.colors.charcoal,
      inputBackground: '#ffffff',
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: u,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: mn.colors.silverCloud,
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
    vn,
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
        Dn,
        {
          position: f.inputCalendarWrapperPosition,
          height: f.inputCalendarWrapperHeight,
          width: f.inputCalendarWrapperWidth,
          top: f.inputCalendarWrapperTop,
          left: f.inputCalendarWrapperLeft,
          right: f.inputCalendarWrapperRight,
        },
        e.createElement(un, {
          width: f.inputCalendarIconWidth,
          height: f.inputCalendarIconHeight,
          color: f.inputCalendarIconColor,
        }),
      ),
    e.createElement(kn, {
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
      value: s,
      autoComplete: 'off',
      onFocus: c,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function xn(t) {
  var n = t.height,
    r = t.width,
    o = t.iconColor,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    c = t.className,
    s = void 0 === c ? '' : c,
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
      color: o,
      className: s,
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
var Cn,
  Sn,
  wn,
  Bn = c('div')(
    Cn ||
      (Cn = De(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    mt,
    gt,
    ht,
    ut,
    yt,
    lt,
  ),
  Mn = c(Bn)(
    wn ||
      (wn = De(
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
        l(
          Sn ||
            (Sn = De(
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
              ['\n      &:after {\n        background: #00aeef;\n      }\n    '],
            )),
        )
      )
    },
  )
function Fn(t) {
  var n = t.title,
    r = t.isActive,
    o = t.date,
    a = t.vertical,
    i = dn({
      fontFamily: mn.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: mn.colors.silverCloud,
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: mn.colors.charcoal,
      selectDateDateFontSize: a ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDatePadding: '0',
    })
  return e.createElement(
    ln,
    {p: i.selectDatePadding},
    e.createElement(
      Bn,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Mn,
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
var Wn,
  En,
  Tn,
  Hn,
  Rn,
  Ln = function(t) {
    var n = t.label,
      r = dn({
        fontFamily: mn.fontFamily,
        monthLabelColor: mn.colors.darcula,
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Bn,
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
  On = function(t) {
    var n = t.label,
      r = dn({
        fontFamily: mn.fontFamily,
        dayLabelColor: mn.colors.silverCloud,
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Bn,
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
  Pn = e.createContext({
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
  }),
  zn = Ue({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  In = Ue({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  An = Ue({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Yn = Ue({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  jn = Ue({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Vn = Ue({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nn = c('button')(
    Rn ||
      (Rn = De(
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
    zn,
    In,
    _t,
    Xt,
    ut,
    mt,
    ht,
    gt,
    function(e) {
      var t = e.disabledDate,
        n = e.isStartOrEnd
      return (
        t &&
        !n &&
        l(
          Wn ||
            (Wn = De(
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
        o = e.isWithinHoverRange
      return t || n || r || o
        ? n && !r
          ? l(
              Tn ||
                (Tn = De(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Vn,
              Yn,
            )
          : ''
        : l(
            En ||
              (En = De(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            jn,
            An,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return l(
        Hn ||
          (Hn = De(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function $n(e, t, n, r) {
  var o = r.selectedFirstOrLast,
    a = r.normal,
    i = r.selected,
    c = r.rangeHover
  return t ? o : e ? i : n ? c : a
}
function Gn(n) {
  var c = n.day,
    s = n.date,
    l = i(null),
    u = a(Pn),
    d = u.focusedDate,
    p = u.isDateFocused,
    f = u.isDateSelected,
    g = u.isDateHovered,
    m = u.isDateBlocked,
    h = u.isFirstOrLastSelectedDate,
    y = u.onDaySelect,
    v = (function(e) {
      var n = e.date,
        o = e.focusedDate,
        a = e.isDateSelected,
        i = e.isDateFocused,
        c = e.isFirstOrLastSelectedDate,
        s = e.isDateHovered,
        l = e.isDateBlocked,
        u = e.onDaySelect,
        d = e.onDayFocus,
        p = e.onDayHover,
        f = e.dayRef,
        g = r(
          function() {
            return u(n)
          },
          [n, u],
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
      var h = l(n) && !s(n)
      return {
        role: 'button',
        tabIndex: null === o || i(n) ? 0 : -1,
        isActive: a(n),
        isStartOrEnd: c(n),
        isWithinHoverRange: s(n),
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
        onClick: h ? function() {} : g,
        onMouseEnter: m,
      }
    })({
      date: s,
      focusedDate: d,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: g,
      isDateBlocked: m,
      isFirstOrLastSelectedDate: h,
      onDayFocus: u.onDayFocus,
      onDaySelect: y,
      onDayHover: u.onDayHover,
      dayRef: l,
    }),
    D = dn({
      fontFamily: mn.fontFamily,
      daySize: mn.daySize,
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
    k = o(
      function() {
        return $n(v.isActive, v.isStartOrEnd, v.isWithinHoverRange, {
          selectedFirstOrLast: D.daySelectedFirstOrLastBorderColor,
          selected: D.daySelectedBorderColor,
          normal: D.dayBorderColor,
          rangeHover: D.dayHoverRangeColor,
        })
      },
      [v.isActive, v.isStartOrEnd, D, v.isWithinHoverRange],
    ),
    b = o(
      function() {
        return $n(v.isActive, v.isStartOrEnd, v.isWithinHoverRange, {
          selectedFirstOrLast: D.daySelectedFirstOrLastBackground,
          selected: D.daySelectedBackground,
          normal: D.dayBackground,
          rangeHover: D.dayHoverRangeBackground,
        })
      },
      [v.isActive, v.isStartOrEnd, D, v.isWithinHoverRange],
    ),
    x = o(
      function() {
        return $n(v.isActive, v.isStartOrEnd, v.isWithinHoverRange, {
          selectedFirstOrLast: D.daySelectedFirstOrLastColor,
          selected: D.daySelectedColor,
          normal: D.dayColor,
          rangeHover: D.dayHoverRangeColor,
        })
      },
      [v.isActive, v.isStartOrEnd, D, v.isWithinHoverRange],
    )
  return e.createElement(
    Nn,
    ve({}, v, {
      ref: l,
      dayHeight: D.daySize,
      dayWidth: D.daySize,
      background: b,
      color: x,
      fontFamily: D.fontFamily,
      fontWeight: D.dayFontWeight,
      fontSize: D.dayFontSize,
      daySelectedHoverBackground: D.daySelectedHoverBackground,
      dayHoverBackground: D.dayHoverBackground,
      dayHoverColor: D.dayHoverColor,
      daySelectedHoverColor: D.daySelectedHoverColor,
      borderAccessibilityColor: D.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        k +
        ',\n        0 1px 0 0 ' +
        k +
        ',\n        1px 1px 0 0 ' +
        k +
        ',\n        1px 0 0 0 ' +
        k +
        ' inset,\n        0 1px 0 0 ' +
        k +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + s.toDateString(),
    }),
    e.createElement(
      sn,
      {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
      c,
    ),
  )
}
var _n,
  Un = c('div')(
    _n ||
      (_n = De(
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
        ['\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n'],
      )),
  ),
  Zn = function(t) {
    var n = ee({year: t.year, month: t.month, weekStartsOn: t.firstDayOfWeek}),
      r = n.days,
      o = n.weekDays,
      a = n.monthLabel,
      i = dn({daySize: mn.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      Un,
      null,
      e.createElement(
        sn,
        {justifyContent: 'center', m: i.monthLabelMargin},
        e.createElement(Ln, {label: a}),
      ),
      e.createElement(
        cn,
        {daySizeGridTemplateColumns: i.daySize},
        o.map(function(t) {
          return e.createElement(
            sn,
            {key: t, justifyContent: 'center', m: i.monthDayLabelMargin},
            e.createElement(On, {label: t}),
          )
        }),
      ),
      e.createElement(
        cn,
        {daySizeGridTemplateColumns: i.daySize},
        r.map(function(t, n) {
          return 'object' == typeof t
            ? e.createElement(Gn, {date: t.date, key: t.day, day: t.day})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var Xn,
  Jn,
  qn,
  Kn = c('button')(
    Xn ||
      (Xn = De(
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
  })(qn || (qn = De(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      l(
        Jn ||
          (Jn = De(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function er(t) {
  var n = t.onResetDates,
    r = t.text,
    o = t.rtl,
    a = i(null),
    c = dn({
      fontFamily: mn.fontFamily,
      resetDatesIconColor: mn.colors.mud,
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: mn.colors.darcula,
      resetDatesTextMargin: o ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Kn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
      onMouseUp: function() {
        a && a.current && a.current.blur()
      },
      ref: a,
    },
    e.createElement(Qn, {
      height: c.resetDatesIconHeight,
      width: c.resetDatesIconWidth,
      color: c.resetDatesIconColor,
      rtl: o,
    }),
    e.createElement(
      Bn,
      {
        m: c.resetDatesTextMargin,
        lineHeight: c.resetDatesTextLineHeight,
        fontFamily: c.fontFamily,
        fontSize: c.resetDatesTextFontSize,
        color: c.resetDatesTextColor,
      },
      r,
    ),
  )
}
var tr,
  nr,
  rr = c('svg')(nr || (nr = De(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return l(
      tr ||
        (tr = De(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function or(t) {
  var n = t.height,
    r = t.width,
    o = t.color,
    a = t.direction,
    i = void 0 === a ? 'right' : a,
    c = t.className,
    s = void 0 === c ? '' : c,
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
    rr,
    {
      width: r,
      height: n,
      color: o,
      className: s,
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
var ar,
  ir = c('button')(
    ar ||
      (ar = De(
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
    pt,
    Dt,
    Xt,
    lt,
    Gt,
  )
function cr(t) {
  var n = t.type,
    r = t.onClick,
    o = t.vertical,
    a = t.rtl,
    c = t.ariaLabel,
    s = i(null),
    l = dn({
      navButtonWidth: o ? '48px' : '30px',
      navButtonHeight: o ? '48px' : '30px',
      navButtonBackground: '#ffffff',
      navButtonBorder: '1px solid #929598',
      navButtonPadding: '0',
      navButtonIconHeight: o ? '18px' : '11px',
      navButtonIconWidth: o ? '28px' : '18px',
      navButtonIconColor: mn.colors.greey,
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
    ir,
    {
      width: l.navButtonWidth,
      height: l.navButtonHeight,
      background: l.navButtonBackground,
      border: l.navButtonBorder,
      borderRight: 'up' !== u() || a ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && a ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': c,
      onClick: r,
      onMouseUp: function() {
        s && s.current && s.current.blur()
      },
      ref: s,
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(or, {
      width: l.navButtonIconWidth,
      height: l.navButtonIconHeight,
      color: l.navButtonIconColor,
      direction: u(),
    }),
  )
}
function sr(t) {
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
var lr,
  ur,
  dr = c('div')(
    lr ||
      (lr = De(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    lt,
    ut,
    gt,
    mt,
    ht,
  ),
  pr = c('button')(
    ur ||
      (ur = De(
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
    dr,
    ut,
    ut,
  )
function fr(t) {
  var n = t.onClick,
    r = t.rtl,
    o = dn({
      fontFamily: mn.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: '#929598',
      closeHoverColor: '#343132',
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    pr,
    {
      onClick: n,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(sr, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      dr,
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
var gr,
  mr,
  hr,
  yr,
  vr,
  Dr = c('div')(
    mr ||
      (mr = De(
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
        ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'],
      )),
    Xt,
    lt,
    $t,
    Jt,
    _t,
    pt,
    function(e) {
      return (
        e.rtl &&
        l(gr || (gr = De(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
  ),
  kr = c('div')(
    hr ||
      (hr = De(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  br = c(ln)(yr || (yr = De(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), vt, xt),
  xr = c(cn)(vr || (vr = De(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Zt, Dt)
function Cr(t) {
  var n = t.startDate,
    r = t.endDate,
    o = t.minBookingDate,
    a = t.maxBookingDate,
    c = t.focusedInput,
    s = t.onDateChange,
    l = t.vertical,
    u = void 0 !== l && l,
    d = t.rtl,
    p = void 0 !== d && d,
    f = t.showResetDates,
    g = void 0 === f || f,
    m = t.showClose,
    h = void 0 === m || m,
    y = t.showSelectedDates,
    v = void 0 === y || y,
    D = t.exactMinBookingDays,
    k = void 0 !== D && D,
    b = t.isDayBlocked,
    x =
      void 0 === b
        ? function() {
            return !1
          }
        : b,
    C = t.minBookingDays,
    S = void 0 === C ? 1 : C,
    w = t.onClose,
    B = void 0 === w ? function() {} : w,
    M = t.numberOfMonths,
    F = t.firstDayOfWeek,
    W = t.displayFormat,
    E = void 0 === W ? 'MM/DD/YYYY' : W,
    T = t.phrases,
    H = void 0 === T ? nn : T,
    R = ye({
      startDate: n,
      endDate: r,
      focusedInput: c,
      onDateChange: s,
      minBookingDate: o,
      maxBookingDate: a,
      minBookingDays: S,
      isDayBlocked: x,
      exactMinBookingDays: k,
      numberOfMonths: M,
      firstDayOfWeek: F,
    }),
    L = R.activeMonths,
    O = R.isDateSelected,
    P = R.isFirstOrLastSelectedDate,
    z = R.isDateBlocked,
    I = R.isDateHovered,
    A = R.firstDayOfWeek,
    Y = R.onDaySelect,
    j = R.onResetDates,
    V = R.goToPreviousMonths,
    N = R.goToNextMonths,
    $ = R.numberOfMonths,
    G = R.onDayHover,
    _ = R.isDateFocused,
    U = R.focusedDate,
    Z = R.onDayFocus,
    X = i(null),
    J = dn({
      datepickerBackground: '#ffffff',
      datepickerPadding: u ? '16px 16px 0' : '32px',
      datepickerBorderRadius: '2px',
      datepickerPosition: 'relative',
      datepickerWidth: 'fit-content',
      datepickerCloseWrapperPosition: u ? 'relative' : 'absolute',
      datepickerCloseWrapperDisplay: u ? 'flex' : 'block',
      datepickerCloseWrapperJustifyContent: u ? 'flex-end' : 'initial',
      datepickerCloseWrapperMargin: u ? '0 0 16px' : '0',
      datepickerCloseWrapperRight: p ? 'unset' : u ? '0' : '32px',
      datepickerCloseWrapperTop: 'unset',
      datepickerCloseWrapperLeft: p ? '32px' : 'unset',
      datepickerCloseWrapperBottom: 'unset',
      datepickerCloseWrapperZIndex: 1,
      datepickerSelectDateGridTemplateColumns: u ? '87px 50px 87px' : '126px 75px 126px',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: mn.colors.silverCloud,
      datepickerMonthsWrapperMargin: h || v ? (v ? '28px 0 0' : '48px 0 0') : 'unset',
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
  function q() {
    X && X.current && u && (X.current.scrollTop = 0)
  }
  function K() {
    N(), q()
  }
  function Q() {
    V(), q()
  }
  return e.createElement(
    Pn.Provider,
    {
      value: {
        rtl: p,
        isDateFocused: _,
        isDateSelected: O,
        isDateHovered: I,
        isDateBlocked: z,
        isFirstOrLastSelectedDate: P,
        onDayFocus: Z,
        focusedDate: U,
        onDaySelect: Y,
        onDayHover: G,
      },
    },
    e.createElement(
      Dr,
      {
        background: J.datepickerBackground,
        p: J.datepickerPadding,
        borderRadius: J.datepickerBorderRadius,
        position: J.datepickerPosition,
        boxShadow: J.datepickerBoxShadow,
        width: J.datepickerWidth,
        rtl: p,
      },
      h &&
        e.createElement(
          br,
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
          e.createElement(fr, {onClick: B, rtl: p}),
        ),
      v &&
        e.createElement(
          kr,
          null,
          e.createElement(
            cn,
            {gridTemplateColumns: J.datepickerSelectDateGridTemplateColumns},
            e.createElement(Fn, {
              title: H.datepickerStartDateLabel,
              date: fe(n, E, H.datepickerStartDatePlaceholder),
              isActive: c === me,
              vertical: u,
            }),
            e.createElement(
              sn,
              {justifyContent: 'center', alignItems: 'center'},
              e.createElement(xn, {
                height: J.datepickerSelectDateArrowIconHeight,
                width: J.datepickerSelectDateArrowIconWidth,
                iconColor: J.datepickerSelectDateArrowIconColor,
              }),
            ),
            e.createElement(Fn, {
              title: H.datepickerEndDateLabel,
              date: fe(r, E, H.datepickerEndDatePlaceholder),
              isActive: c === he,
              vertical: u,
            }),
          ),
        ),
      e.createElement(
        ln,
        {position: 'relative'},
        e.createElement(
          ln,
          {m: J.datepickerMonthsWrapperMargin},
          e.createElement(
            xr,
            {
              overflow: J.datepickerMonthsGridOverflow,
              height: J.datepickerMonthsGridHeight,
              gridTemplateColumns: u ? '1fr' : 'repeat(' + $ + ', 1fr)',
              gridGap: J.datepickerMonthsGridGap,
              pr: p ? '1px' : '0',
              ref: X,
            },
            L.map(function(t) {
              return e.createElement(Zn, {
                key: t.year + '-' + t.month,
                year: t.year,
                month: t.month,
                firstDayOfWeek: A,
              })
            }),
          ),
        ),
        e.createElement(
          sn,
          {alignItems: 'center'},
          e.createElement(
            e.Fragment,
            null,
            g &&
              e.createElement(
                sn,
                {flex: '1', m: J.datepickerResetDatesWrapperMargin},
                e.createElement(er, {rtl: p, onResetDates: j, text: H.resetDates}),
              ),
            e.createElement(
              ln,
              {
                position: J.datepickerPreviousMonthButtonPosition,
                top: J.datepickerPreviousMonthButtonTop,
                left: J.datepickerPreviousMonthButtonLeft,
                right: J.datepickerPreviousMonthButtonRight,
                bottom: J.datepickerPreviousMonthButtonBottom,
              },
              e.createElement(cr, {
                type: 'prev',
                onClick: p && !u ? K : Q,
                vertical: u,
                rtl: p,
                ariaLabel: 'Previous month',
              }),
            ),
            e.createElement(
              ln,
              {
                position: J.datepickerNextMonthButtonPosition,
                top: J.datepickerNextMonthButtonTop,
                left: J.datepickerNextMonthButtonLeft,
                right: J.datepickerNextMonthButtonRight,
                bottom: J.datepickerNextMonthButtonBottom,
              },
              e.createElement(cr, {
                type: 'next',
                onClick: p && !u ? Q : K,
                vertical: u,
                rtl: p,
                ariaLabel: 'Next month',
              }),
            ),
          ),
        ),
      ),
    ),
  )
}
var Sr,
  wr,
  Br,
  Mr,
  Fr,
  Wr = c(ln)(wr || (wr = De(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      l(Sr || (Sr = De(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Er = c(xn)(
    Mr || (Mr = De(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Ut,
    ut,
    function(e) {
      return (
        e.rtl &&
        l(
          Br ||
            (Br = De(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  Tr = c(cn)(
    Fr || (Fr = De(['\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n'])),
    Xt,
    Pt,
    $t,
  )
function Hr(n) {
  var r = n.startDate,
    o = n.endDate,
    a = n.minBookingDate,
    c = n.maxBookingDate,
    s = n.firstDayOfWeek,
    l = n.onFocusChange,
    u = n.numberOfMonths,
    d = n.focusedInput,
    p = n.onDateChange,
    f = n.exactMinBookingDays,
    g = n.showClose,
    m = void 0 === g || g,
    h = n.showSelectedDates,
    y = void 0 === h || h,
    v = n.showResetDates,
    D = void 0 === v || v,
    k = n.vertical,
    b = void 0 !== k && k,
    x = n.rtl,
    C = void 0 !== x && x,
    S = n.isDayBlocked,
    w =
      void 0 === S
        ? function() {
            return !1
          }
        : S,
    B = n.minBookingDays,
    M = void 0 === B ? 1 : B,
    F = n.onClose,
    W = void 0 === F ? function() {} : F,
    E = n.showStartDateCalendarIcon,
    T = void 0 === E || E,
    H = n.showEndDateCalendarIcon,
    R = void 0 === H || H,
    L = n.displayFormat,
    O = void 0 === L ? 'MM/DD/YYYY' : L,
    P = n.phrases,
    z = void 0 === P ? rn : P,
    I = n.placement,
    A = void 0 === I ? 'bottom' : I,
    Y = i(null),
    j = dn(
      ve(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: b ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: '#BCBEC0',
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: b ? (C ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: b ? (C ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(A),
      ),
    )
  function V(e) {
    null !== d && Y && Y.current && !Y.current.contains(e.target) && l(null)
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
      {rtl: C, position: 'relative', ref: Y},
      e.createElement(
        Tr,
        {
          background: j.dateRangeBackground,
          gridTemplateColumns: j.dateRangeGridTemplateColumns,
          border: j.dateRangeBorder,
          borderRadius: j.dateRangeBorderRadius,
        },
        e.createElement(bn, {
          id: 'startDate',
          ariaLabel: z.startDateAriaLabel,
          placeholder: z.startDatePlaceholder,
          value: fe(r, O, ''),
          onClick: function() {
            return l(me)
          },
          showCalendarIcon: T,
          vertical: b,
          isActive: d === me,
          padding: j.dateRangeStartDateInputPadding,
          rtl: C,
        }),
        e.createElement(
          sn,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Er, {
            width: j.dateRangeArrowIconWidth,
            height: j.dateRangeArrowIconHeight,
            color: j.dateRangeArrowIconColor,
            opacity: j.dateRangeArrowIconOpacity,
            rtl: C,
          }),
        ),
        e.createElement(bn, {
          id: 'endDate',
          ariaLabel: z.endDateAriaLabel,
          placeholder: z.endDatePlaceholder,
          value: fe(o, O, ''),
          onClick: function() {
            return l(r ? he : me)
          },
          showCalendarIcon: R,
          vertical: b,
          isActive: d === he,
          padding: j.dateRangeEndDateInputPadding,
          rtl: C,
          disableAccessibility: d === me,
        }),
      ),
      e.createElement(
        ln,
        {
          position: j.dateRangeDatepickerWrapperPosition,
          bottom: j.dateRangeDatepickerWrapperBottom,
          left: j.dateRangeDatepickerWrapperLeft,
          top: j.dateRangeDatepickerWrapperTop,
          right: j.dateRangeDatepickerWrapperRight,
        },
        null !== d &&
          e.createElement(Cr, {
            onClose: function() {
              W(), l(null)
            },
            startDate: r,
            endDate: o,
            minBookingDate: a,
            maxBookingDate: c,
            firstDayOfWeek: s,
            numberOfMonths: u,
            focusedInput: d,
            displayFormat: O,
            onDateChange: p,
            minBookingDays: M,
            isDayBlocked: w,
            exactMinBookingDays: f,
            showResetDates: D,
            vertical: b,
            showSelectedDates: y,
            showClose: m,
            rtl: C,
          }),
      ),
    )
  )
}
export {Hr as DateRangeInput, Cr as Datepicker, he as END_DATE, me as START_DATE, on as phrases}
