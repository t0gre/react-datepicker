import e, {
  useState as t,
  useEffect as r,
  useMemo as n,
  useCallback as a,
  useContext as o,
  useRef as i,
  useImperativeHandle as d,
} from 'react'
import s, {ThemeContext as c, css as u, keyframes as l, ThemeProvider as p} from 'styled-components'
var f = {
  lessThanXSeconds: {one: 'less than a second', other: 'less than {{count}} seconds'},
  xSeconds: {one: '1 second', other: '{{count}} seconds'},
  halfAMinute: 'half a minute',
  lessThanXMinutes: {one: 'less than a minute', other: 'less than {{count}} minutes'},
  xMinutes: {one: '1 minute', other: '{{count}} minutes'},
  aboutXHours: {one: 'about 1 hour', other: 'about {{count}} hours'},
  xHours: {one: '1 hour', other: '{{count}} hours'},
  xDays: {one: '1 day', other: '{{count}} days'},
  aboutXWeeks: {one: 'about 1 week', other: 'about {{count}} weeks'},
  xWeeks: {one: '1 week', other: '{{count}} weeks'},
  aboutXMonths: {one: 'about 1 month', other: 'about {{count}} months'},
  xMonths: {one: '1 month', other: '{{count}} months'},
  aboutXYears: {one: 'about 1 year', other: 'about {{count}} years'},
  xYears: {one: '1 year', other: '{{count}} years'},
  overXYears: {one: 'over 1 year', other: 'over {{count}} years'},
  almostXYears: {one: 'almost 1 year', other: 'almost {{count}} years'},
}
function g(e) {
  return function (t) {
    var r = t || {},
      n = r.width ? String(r.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
var h = {
    date: g({
      formats: {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
      },
      defaultWidth: 'full',
    }),
    time: g({
      formats: {full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a'},
      defaultWidth: 'full',
    }),
    dateTime: g({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
      },
      defaultWidth: 'full',
    }),
  },
  m = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function y(e) {
  return function (t, r) {
    var n,
      a = r || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth,
        i = a.width ? String(a.width) : o
      n = e.formattingValues[i] || e.formattingValues[o]
    } else {
      var d = e.defaultWidth,
        s = a.width ? String(a.width) : e.defaultWidth
      n = e.values[s] || e.values[d]
    }
    return n[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
function b(e) {
  return function (t, r) {
    var n = String(t),
      a = r || {},
      o = a.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      d = n.match(i)
    if (!d) return null
    var s,
      c = d[0],
      u = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (s =
        '[object Array]' === Object.prototype.toString.call(u)
          ? (function (e, t) {
              for (var r = 0; r < e.length; r++) if (t(e[r])) return r
            })(u, function (e) {
              return e.test(c)
            })
          : (function (e, t) {
              for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r
            })(u, function (e) {
              return e.test(c)
            })),
      (s = e.valueCallback ? e.valueCallback(s) : s),
      {value: (s = a.valueCallback ? a.valueCallback(s) : s), rest: n.slice(c.length)}
    )
  }
}
var v,
  w = {
    code: 'en-US',
    formatDistance: function (e, t, r) {
      var n
      return (
        (r = r || {}),
        (n =
          'string' == typeof f[e] ? f[e] : 1 === t ? f[e].one : f[e].other.replace('{{count}}', t)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
      )
    },
    formatLong: h,
    formatRelative: function (e, t, r, n) {
      return m[e]
    },
    localize: {
      ordinalNumber: function (e, t) {
        var r = Number(e),
          n = r % 100
        if (n > 20 || n < 10)
          switch (n % 10) {
            case 1:
              return r + 'st'
            case 2:
              return r + 'nd'
            case 3:
              return r + 'rd'
          }
        return r + 'th'
      },
      era: y({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: y({
        values: {
          narrow: ['1', '2', '3', '4'],
          abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
          wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
          return Number(e) - 1
        },
      }),
      month: y({
        values: {
          narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          abbreviated: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          wide: [
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
        },
        defaultWidth: 'wide',
      }),
      day: y({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: y({
        values: {
          narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
          abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
          wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
          },
        },
        defaultWidth: 'wide',
        formattingValues: {
          narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
          abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
          wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
          },
        },
        defaultFormattingWidth: 'wide',
      }),
    },
    match: {
      ordinalNumber:
        ((v = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (e) {
            return parseInt(e, 10)
          },
        }),
        function (e, t) {
          var r = String(e),
            n = t || {},
            a = r.match(v.matchPattern)
          if (!a) return null
          var o = a[0],
            i = r.match(v.parsePattern)
          if (!i) return null
          var d = v.valueCallback ? v.valueCallback(i[0]) : i[0]
          return {value: (d = n.valueCallback ? n.valueCallback(d) : d), rest: r.slice(o.length)}
        }),
      era: b({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: b({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]},
        defaultParseWidth: 'any',
        valueCallback: function (e) {
          return e + 1
        },
      }),
      month: b({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: 'any',
      }),
      day: b({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: 'any',
      }),
      dayPeriod: b({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: 'any',
      }),
    },
    options: {weekStartsOn: 0, firstWeekContainsDate: 1},
  }
function D(e) {
  if (null === e || !0 === e || !1 === e) return NaN
  var t = Number(e)
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function k(e, t) {
  if (t.length < e)
    throw new TypeError(
      e + ' argument' + (e > 1 ? 's' : '') + ' required, but only ' + t.length + ' present',
    )
}
function x(e) {
  k(1, arguments)
  var t = Object.prototype.toString.call(e)
  return e instanceof Date || ('object' == typeof e && '[object Date]' === t)
    ? new Date(e.getTime())
    : 'number' == typeof e || '[object Number]' === t
    ? new Date(e)
    : (('string' != typeof e && '[object String]' !== t) ||
        'undefined' == typeof console ||
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule",
        ),
        console.warn(new Error().stack)),
      new Date(NaN))
}
function C(e, t) {
  k(2, arguments)
  var r = x(e).getTime(),
    n = D(t)
  return new Date(r + n)
}
function T(e, t) {
  k(2, arguments)
  var r = D(t)
  return C(e, -r)
}
function S(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var r in (t = t || {})) t.hasOwnProperty(r) && (e[r] = t[r])
  return e
}
function B(e, t) {
  switch (e) {
    case 'P':
      return t.date({width: 'short'})
    case 'PP':
      return t.date({width: 'medium'})
    case 'PPP':
      return t.date({width: 'long'})
    case 'PPPP':
    default:
      return t.date({width: 'full'})
  }
}
function M(e, t) {
  switch (e) {
    case 'p':
      return t.time({width: 'short'})
    case 'pp':
      return t.time({width: 'medium'})
    case 'ppp':
      return t.time({width: 'long'})
    case 'pppp':
    default:
      return t.time({width: 'full'})
  }
}
var R = {
  p: M,
  P: function (e, t) {
    var r,
      n = e.match(/(P+)(p+)?/),
      a = n[1],
      o = n[2]
    if (!o) return B(e, t)
    switch (a) {
      case 'P':
        r = t.dateTime({width: 'short'})
        break
      case 'PP':
        r = t.dateTime({width: 'medium'})
        break
      case 'PPP':
        r = t.dateTime({width: 'long'})
        break
      case 'PPPP':
      default:
        r = t.dateTime({width: 'full'})
    }
    return r.replace('{{date}}', B(a, t)).replace('{{time}}', M(o, t))
  },
}
function W(e) {
  return e.getTime() % 6e4
}
function L(e) {
  var t = new Date(e.getTime()),
    r = Math.ceil(t.getTimezoneOffset())
  return t.setSeconds(0, 0), 6e4 * r + (r > 0 ? (6e4 + W(t)) % 6e4 : W(t))
}
var E = ['D', 'DD'],
  F = ['YY', 'YYYY']
function H(e) {
  return -1 !== E.indexOf(e)
}
function P(e) {
  return -1 !== F.indexOf(e)
}
function O(e) {
  if ('YYYY' === e)
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr',
    )
  if ('YY' === e)
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr')
  if ('D' === e)
    throw new RangeError(
      'Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr',
    )
  if ('DD' === e)
    throw new RangeError(
      'Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr',
    )
}
function I(e, t) {
  k(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == r.weekStartsOn ? o : D(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = x(e),
    s = d.getUTCDay(),
    c = (s < i ? 7 : 0) + s - i
  return d.setUTCDate(d.getUTCDate() - c), d.setUTCHours(0, 0, 0, 0), d
}
function z(e, t) {
  k(1, arguments)
  var r = x(e, t),
    n = r.getUTCFullYear(),
    a = t || {},
    o = a.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    d = null == i ? 1 : D(i),
    s = null == a.firstWeekContainsDate ? d : D(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(n + 1, 0, s), c.setUTCHours(0, 0, 0, 0)
  var u = I(c, t),
    l = new Date(0)
  l.setUTCFullYear(n, 0, s), l.setUTCHours(0, 0, 0, 0)
  var p = I(l, t)
  return r.getTime() >= u.getTime() ? n + 1 : r.getTime() >= p.getTime() ? n : n - 1
}
function U(e, t, r) {
  k(2, arguments)
  var n = r || {},
    a = n.locale,
    o = a && a.options && a.options.weekStartsOn,
    i = null == o ? 0 : D(o),
    d = null == n.weekStartsOn ? i : D(n.weekStartsOn)
  if (!(d >= 0 && d <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = x(e),
    c = D(t),
    u = s.getUTCDay(),
    l = c % 7,
    p = (l + 7) % 7,
    f = (p < d ? 7 : 0) + c - u
  return s.setUTCDate(s.getUTCDate() + f), s
}
function N(e) {
  k(1, arguments)
  var t = 1,
    r = x(e),
    n = r.getUTCDay(),
    a = (n < t ? 7 : 0) + n - t
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r
}
function Y(e) {
  k(1, arguments)
  var t = x(e),
    r = t.getUTCFullYear(),
    n = new Date(0)
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var a = N(n),
    o = new Date(0)
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = N(o)
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1
}
function A(e) {
  k(1, arguments)
  var t = Y(e),
    r = new Date(0)
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var n = N(r)
  return n
}
function q(e) {
  k(1, arguments)
  var t = x(e),
    r = N(t).getTime() - A(t).getTime()
  return Math.round(r / 6048e5) + 1
}
function G(e, t) {
  k(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.firstWeekContainsDate,
    o = null == a ? 1 : D(a),
    i = null == r.firstWeekContainsDate ? o : D(r.firstWeekContainsDate),
    d = z(e, t),
    s = new Date(0)
  s.setUTCFullYear(d, 0, i), s.setUTCHours(0, 0, 0, 0)
  var c = I(s, t)
  return c
}
function j(e, t) {
  k(1, arguments)
  var r = x(e),
    n = I(r, t).getTime() - G(r, t).getTime()
  return Math.round(n / 6048e5) + 1
}
var X = /^(1[0-2]|0?\d)/,
  Q = /^(3[0-1]|[0-2]?\d)/,
  V = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  Z = /^(5[0-3]|[0-4]?\d)/,
  K = /^(2[0-3]|[0-1]?\d)/,
  J = /^(2[0-4]|[0-1]?\d)/,
  _ = /^(1[0-1]|0?\d)/,
  $ = /^(1[0-2]|0?\d)/,
  ee = /^[0-5]?\d/,
  te = /^[0-5]?\d/,
  re = /^\d/,
  ne = /^\d{1,2}/,
  ae = /^\d{1,3}/,
  oe = /^\d{1,4}/,
  ie = /^-?\d+/,
  de = /^-?\d/,
  se = /^-?\d{1,2}/,
  ce = /^-?\d{1,3}/,
  ue = /^-?\d{1,4}/,
  le = /^([+-])(\d{2})(\d{2})?|Z/,
  pe = /^([+-])(\d{2})(\d{2})|Z/,
  fe = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  ge = /^([+-])(\d{2}):(\d{2})|Z/,
  he = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function me(e, t, r) {
  var n = t.match(e)
  if (!n) return null
  var a = parseInt(n[0], 10)
  return {value: r ? r(a) : a, rest: t.slice(n[0].length)}
}
function ye(e, t) {
  var r = t.match(e)
  return r
    ? 'Z' === r[0]
      ? {value: 0, rest: t.slice(1)}
      : {
          value:
            ('+' === r[1] ? 1 : -1) *
            (36e5 * (r[2] ? parseInt(r[2], 10) : 0) +
              6e4 * (r[3] ? parseInt(r[3], 10) : 0) +
              1e3 * (r[5] ? parseInt(r[5], 10) : 0)),
          rest: t.slice(r[0].length),
        }
    : null
}
function be(e, t) {
  return me(ie, e, t)
}
function ve(e, t, r) {
  switch (e) {
    case 1:
      return me(re, t, r)
    case 2:
      return me(ne, t, r)
    case 3:
      return me(ae, t, r)
    case 4:
      return me(oe, t, r)
    default:
      return me(new RegExp('^\\d{1,' + e + '}'), t, r)
  }
}
function we(e, t, r) {
  switch (e) {
    case 1:
      return me(de, t, r)
    case 2:
      return me(se, t, r)
    case 3:
      return me(ce, t, r)
    case 4:
      return me(ue, t, r)
    default:
      return me(new RegExp('^-?\\d{1,' + e + '}'), t, r)
  }
}
function De(e) {
  switch (e) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}
function ke(e, t) {
  var r,
    n = t > 0,
    a = n ? t : 1 - t
  if (a <= 50) r = e || 100
  else {
    var o = a + 50
    r = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0)
  }
  return n ? r : 1 - r
}
var xe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Ce = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function Te(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var Se = {
    G: {
      priority: 140,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'G':
          case 'GG':
          case 'GGG':
            return r.era(e, {width: 'abbreviated'}) || r.era(e, {width: 'narrow'})
          case 'GGGGG':
            return r.era(e, {width: 'narrow'})
          case 'GGGG':
          default:
            return (
              r.era(e, {width: 'wide'}) ||
              r.era(e, {width: 'abbreviated'}) ||
              r.era(e, {width: 'narrow'})
            )
        }
      },
      set: function (e, t, r, n) {
        return (t.era = r), e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function (e, t, r, n) {
        var a = function (e) {
          return {year: e, isTwoDigitYear: 'yy' === t}
        }
        switch (t) {
          case 'y':
            return ve(4, e, a)
          case 'yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return ve(t.length, e, a)
        }
      },
      validate: function (e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, r, n) {
        var a = e.getUTCFullYear()
        if (r.isTwoDigitYear) {
          var o = ke(r.year, a)
          return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function (e, t, r, n) {
        var a = function (e) {
          return {year: e, isTwoDigitYear: 'YY' === t}
        }
        switch (t) {
          case 'Y':
            return ve(4, e, a)
          case 'Yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return ve(t.length, e, a)
        }
      },
      validate: function (e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, r, n) {
        var a = z(e, n)
        if (r.isTwoDigitYear) {
          var o = ke(r.year, a)
          return e.setUTCFullYear(o, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), I(e, n)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), I(e, n)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function (e, t, r, n) {
        return we('R' === t ? 4 : t.length, e)
      },
      set: function (e, t, r, n) {
        var a = new Date(0)
        return a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0), N(a)
      },
      incompatibleTokens: [
        'G',
        'y',
        'Y',
        'u',
        'Q',
        'q',
        'M',
        'L',
        'w',
        'd',
        'D',
        'e',
        'c',
        't',
        'T',
      ],
    },
    u: {
      priority: 130,
      parse: function (e, t, r, n) {
        return we('u' === t ? 4 : t.length, e)
      },
      set: function (e, t, r, n) {
        return e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'Q':
          case 'QQ':
            return ve(t.length, e)
          case 'Qo':
            return r.ordinalNumber(e, {unit: 'quarter'})
          case 'QQQ':
            return (
              r.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.quarter(e, {width: 'narrow', context: 'formatting'})
            )
          case 'QQQQQ':
            return r.quarter(e, {width: 'narrow', context: 'formatting'})
          case 'QQQQ':
          default:
            return (
              r.quarter(e, {width: 'wide', context: 'formatting'}) ||
              r.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.quarter(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 4
      },
      set: function (e, t, r, n) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'q':
          case 'qq':
            return ve(t.length, e)
          case 'qo':
            return r.ordinalNumber(e, {unit: 'quarter'})
          case 'qqq':
            return (
              r.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.quarter(e, {width: 'narrow', context: 'standalone'})
            )
          case 'qqqqq':
            return r.quarter(e, {width: 'narrow', context: 'standalone'})
          case 'qqqq':
          default:
            return (
              r.quarter(e, {width: 'wide', context: 'standalone'}) ||
              r.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.quarter(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 4
      },
      set: function (e, t, r, n) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function (e, t, r, n) {
        var a = function (e) {
          return e - 1
        }
        switch (t) {
          case 'M':
            return me(X, e, a)
          case 'MM':
            return ve(2, e, a)
          case 'Mo':
            return r.ordinalNumber(e, {unit: 'month', valueCallback: a})
          case 'MMM':
            return (
              r.month(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.month(e, {width: 'narrow', context: 'formatting'})
            )
          case 'MMMMM':
            return r.month(e, {width: 'narrow', context: 'formatting'})
          case 'MMMM':
          default:
            return (
              r.month(e, {width: 'wide', context: 'formatting'}) ||
              r.month(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.month(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, r, n) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function (e, t, r, n) {
        var a = function (e) {
          return e - 1
        }
        switch (t) {
          case 'L':
            return me(X, e, a)
          case 'LL':
            return ve(2, e, a)
          case 'Lo':
            return r.ordinalNumber(e, {unit: 'month', valueCallback: a})
          case 'LLL':
            return (
              r.month(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.month(e, {width: 'narrow', context: 'standalone'})
            )
          case 'LLLLL':
            return r.month(e, {width: 'narrow', context: 'standalone'})
          case 'LLLL':
          default:
            return (
              r.month(e, {width: 'wide', context: 'standalone'}) ||
              r.month(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.month(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, r, n) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'w':
            return me(Z, e)
          case 'wo':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, r, n) {
        return I(
          (function (e, t, r) {
            k(2, arguments)
            var n = x(e),
              a = D(t),
              o = j(n, r) - a
            return n.setUTCDate(n.getUTCDate() - 7 * o), n
          })(e, r, n),
          n,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'I':
            return me(Z, e)
          case 'Io':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, r, n) {
        return N(
          (function (e, t) {
            k(2, arguments)
            var r = x(e),
              n = D(t),
              a = q(r) - n
            return r.setUTCDate(r.getUTCDate() - 7 * a), r
          })(e, r, n),
          n,
        )
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'd':
            return me(Q, e)
          case 'do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        var n = Te(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return n ? t >= 1 && t <= Ce[a] : t >= 1 && t <= xe[a]
      },
      set: function (e, t, r, n) {
        return e.setUTCDate(r), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'D':
          case 'DD':
            return me(V, e)
          case 'Do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return Te(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
      },
      set: function (e, t, r, n) {
        return e.setUTCMonth(0, r), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: [
        'Y',
        'R',
        'q',
        'Q',
        'M',
        'L',
        'w',
        'I',
        'd',
        'E',
        'i',
        'e',
        'c',
        't',
        'T',
      ],
    },
    E: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'E':
          case 'EE':
          case 'EEE':
            return (
              r.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEEE':
            return r.day(e, {width: 'narrow', context: 'formatting'})
          case 'EEEEEE':
            return (
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEE':
          default:
            return (
              r.day(e, {width: 'wide', context: 'formatting'}) ||
              r.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, r, n) {
        return (e = U(e, r, n)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function (e, t, r, n) {
        var a = function (e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + n.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'e':
          case 'ee':
            return ve(t.length, e, a)
          case 'eo':
            return r.ordinalNumber(e, {unit: 'day', valueCallback: a})
          case 'eee':
            return (
              r.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'eeeee':
            return r.day(e, {width: 'narrow', context: 'formatting'})
          case 'eeeeee':
            return (
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'eeee':
          default:
            return (
              r.day(e, {width: 'wide', context: 'formatting'}) ||
              r.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.day(e, {width: 'short', context: 'formatting'}) ||
              r.day(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, r, n) {
        return (e = U(e, r, n)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'E',
        'i',
        'c',
        't',
        'T',
      ],
    },
    c: {
      priority: 90,
      parse: function (e, t, r, n) {
        var a = function (e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + n.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'c':
          case 'cc':
            return ve(t.length, e, a)
          case 'co':
            return r.ordinalNumber(e, {unit: 'day', valueCallback: a})
          case 'ccc':
            return (
              r.day(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.day(e, {width: 'short', context: 'standalone'}) ||
              r.day(e, {width: 'narrow', context: 'standalone'})
            )
          case 'ccccc':
            return r.day(e, {width: 'narrow', context: 'standalone'})
          case 'cccccc':
            return (
              r.day(e, {width: 'short', context: 'standalone'}) ||
              r.day(e, {width: 'narrow', context: 'standalone'})
            )
          case 'cccc':
          default:
            return (
              r.day(e, {width: 'wide', context: 'standalone'}) ||
              r.day(e, {width: 'abbreviated', context: 'standalone'}) ||
              r.day(e, {width: 'short', context: 'standalone'}) ||
              r.day(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, r, n) {
        return (e = U(e, r, n)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'E',
        'i',
        'e',
        't',
        'T',
      ],
    },
    i: {
      priority: 90,
      parse: function (e, t, r, n) {
        var a = function (e) {
          return 0 === e ? 7 : e
        }
        switch (t) {
          case 'i':
          case 'ii':
            return ve(t.length, e)
          case 'io':
            return r.ordinalNumber(e, {unit: 'day'})
          case 'iii':
            return (
              r.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiiii':
            return r.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
          case 'iiiiii':
            return (
              r.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiii':
          default:
            return (
              r.day(e, {width: 'wide', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 7
      },
      set: function (e, t, r, n) {
        return (
          (e = (function (e, t) {
            k(2, arguments)
            var r = D(t)
            r % 7 == 0 && (r -= 7)
            var n = 1,
              a = x(e),
              o = a.getUTCDay(),
              i = r % 7,
              d = (i + 7) % 7,
              s = (d < n ? 7 : 0) + r - o
            return a.setUTCDate(a.getUTCDate() + s), a
          })(e, r, n)).setUTCHours(0, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: [
        'y',
        'Y',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'w',
        'd',
        'D',
        'E',
        'e',
        'c',
        't',
        'T',
      ],
    },
    a: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'a':
          case 'aa':
          case 'aaa':
            return (
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'aaaaa':
            return r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'aaaa':
          default:
            return (
              r.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, r, n) {
        return e.setUTCHours(De(r), 0, 0, 0), e
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'b':
          case 'bb':
          case 'bbb':
            return (
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'bbbbb':
            return r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'bbbb':
          default:
            return (
              r.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, r, n) {
        return e.setUTCHours(De(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'B':
          case 'BB':
          case 'BBB':
            return (
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'BBBBB':
            return r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'BBBB':
          default:
            return (
              r.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              r.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, r, n) {
        return e.setUTCHours(De(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'h':
            return me($, e)
          case 'ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 12
      },
      set: function (e, t, r, n) {
        var a = e.getUTCHours() >= 12
        return (
          a && r < 12
            ? e.setUTCHours(r + 12, 0, 0, 0)
            : a || 12 !== r
            ? e.setUTCHours(r, 0, 0, 0)
            : e.setUTCHours(0, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
    },
    H: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'H':
            return me(K, e)
          case 'Ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 23
      },
      set: function (e, t, r, n) {
        return e.setUTCHours(r, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'K':
            return me(_, e)
          case 'Ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, r, n) {
        return (
          e.getUTCHours() >= 12 && r < 12
            ? e.setUTCHours(r + 12, 0, 0, 0)
            : e.setUTCHours(r, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
    },
    k: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'k':
            return me(J, e)
          case 'ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 24
      },
      set: function (e, t, r, n) {
        var a = r <= 24 ? r % 24 : r
        return e.setUTCHours(a, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'm':
            return me(ee, e)
          case 'mo':
            return r.ordinalNumber(e, {unit: 'minute'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function (e, t, r, n) {
        return e.setUTCMinutes(r, 0, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function (e, t, r, n) {
        switch (t) {
          case 's':
            return me(te, e)
          case 'so':
            return r.ordinalNumber(e, {unit: 'second'})
          default:
            return ve(t.length, e)
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function (e, t, r, n) {
        return e.setUTCSeconds(r, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function (e, t, r, n) {
        return ve(t.length, e, function (e) {
          return Math.floor(e * Math.pow(10, 3 - t.length))
        })
      },
      set: function (e, t, r, n) {
        return e.setUTCMilliseconds(r), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'X':
            return ye(le, e)
          case 'XX':
            return ye(pe, e)
          case 'XXXX':
            return ye(fe, e)
          case 'XXXXX':
            return ye(he, e)
          case 'XXX':
          default:
            return ye(ge, e)
        }
      },
      set: function (e, t, r, n) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function (e, t, r, n) {
        switch (t) {
          case 'x':
            return ye(le, e)
          case 'xx':
            return ye(pe, e)
          case 'xxxx':
            return ye(fe, e)
          case 'xxxxx':
            return ye(he, e)
          case 'xxx':
          default:
            return ye(ge, e)
        }
      },
      set: function (e, t, r, n) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function (e, t, r, n) {
        return be(e)
      },
      set: function (e, t, r, n) {
        return [new Date(1e3 * r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function (e, t, r, n) {
        return be(e)
      },
      set: function (e, t, r, n) {
        return [new Date(r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  Be = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Me = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Re = /^'([^]*?)'?$/,
  We = /''/g,
  Le = /\S/,
  Ee = /[a-zA-Z]/
function Fe(e, t) {
  if (t.timestampIsSet) return e
  var r = new Date(0)
  return (
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    r
  )
}
function He(e) {
  return e.match(Re)[1].replace(We, "'")
}
function Pe(e) {
  k(1, arguments)
  var t = x(e)
  return !isNaN(t)
}
function Oe(e, t) {
  for (var r = e < 0 ? '-' : '', n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return r + n
}
var Ie = {
  G: function (e, t, r) {
    var n = e.getUTCFullYear() > 0 ? 1 : 0
    switch (t) {
      case 'G':
      case 'GG':
      case 'GGG':
        return r.era(n, {width: 'abbreviated'})
      case 'GGGGG':
        return r.era(n, {width: 'narrow'})
      case 'GGGG':
      default:
        return r.era(n, {width: 'wide'})
    }
  },
  y: function (e, t, r) {
    if ('yo' === t) {
      var n = e.getUTCFullYear(),
        a = n > 0 ? n : 1 - n
      return r.ordinalNumber(a, {unit: 'year'})
    }
    return (function (e, t) {
      var r = e.getUTCFullYear(),
        n = r > 0 ? r : 1 - r
      return Oe('yy' === t ? n % 100 : n, t.length)
    })(e, t)
  },
  Y: function (e, t, r, n) {
    var a = z(e, n),
      o = a > 0 ? a : 1 - a
    return 'YY' === t
      ? Oe(o % 100, 2)
      : 'Yo' === t
      ? r.ordinalNumber(o, {unit: 'year'})
      : Oe(o, t.length)
  },
  R: function (e, t) {
    return Oe(Y(e), t.length)
  },
  u: function (e, t) {
    return Oe(e.getUTCFullYear(), t.length)
  },
  Q: function (e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'Q':
        return String(n)
      case 'QQ':
        return Oe(n, 2)
      case 'Qo':
        return r.ordinalNumber(n, {unit: 'quarter'})
      case 'QQQ':
        return r.quarter(n, {width: 'abbreviated', context: 'formatting'})
      case 'QQQQQ':
        return r.quarter(n, {width: 'narrow', context: 'formatting'})
      case 'QQQQ':
      default:
        return r.quarter(n, {width: 'wide', context: 'formatting'})
    }
  },
  q: function (e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'q':
        return String(n)
      case 'qq':
        return Oe(n, 2)
      case 'qo':
        return r.ordinalNumber(n, {unit: 'quarter'})
      case 'qqq':
        return r.quarter(n, {width: 'abbreviated', context: 'standalone'})
      case 'qqqqq':
        return r.quarter(n, {width: 'narrow', context: 'standalone'})
      case 'qqqq':
      default:
        return r.quarter(n, {width: 'wide', context: 'standalone'})
    }
  },
  M: function (e, t, r) {
    var n = e.getUTCMonth()
    switch (t) {
      case 'M':
      case 'MM':
        return (function (e, t) {
          var r = e.getUTCMonth()
          return 'M' === t ? String(r + 1) : Oe(r + 1, 2)
        })(e, t)
      case 'Mo':
        return r.ordinalNumber(n + 1, {unit: 'month'})
      case 'MMM':
        return r.month(n, {width: 'abbreviated', context: 'formatting'})
      case 'MMMMM':
        return r.month(n, {width: 'narrow', context: 'formatting'})
      case 'MMMM':
      default:
        return r.month(n, {width: 'wide', context: 'formatting'})
    }
  },
  L: function (e, t, r) {
    var n = e.getUTCMonth()
    switch (t) {
      case 'L':
        return String(n + 1)
      case 'LL':
        return Oe(n + 1, 2)
      case 'Lo':
        return r.ordinalNumber(n + 1, {unit: 'month'})
      case 'LLL':
        return r.month(n, {width: 'abbreviated', context: 'standalone'})
      case 'LLLLL':
        return r.month(n, {width: 'narrow', context: 'standalone'})
      case 'LLLL':
      default:
        return r.month(n, {width: 'wide', context: 'standalone'})
    }
  },
  w: function (e, t, r, n) {
    var a = j(e, n)
    return 'wo' === t ? r.ordinalNumber(a, {unit: 'week'}) : Oe(a, t.length)
  },
  I: function (e, t, r) {
    var n = q(e)
    return 'Io' === t ? r.ordinalNumber(n, {unit: 'week'}) : Oe(n, t.length)
  },
  d: function (e, t, r) {
    return 'do' === t
      ? r.ordinalNumber(e.getUTCDate(), {unit: 'date'})
      : (function (e, t) {
          return Oe(e.getUTCDate(), t.length)
        })(e, t)
  },
  D: function (e, t, r) {
    var n = (function (e) {
      k(1, arguments)
      var t = x(e),
        r = t.getTime()
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      var n = t.getTime(),
        a = r - n
      return Math.floor(a / 864e5) + 1
    })(e)
    return 'Do' === t ? r.ordinalNumber(n, {unit: 'dayOfYear'}) : Oe(n, t.length)
  },
  E: function (e, t, r) {
    var n = e.getUTCDay()
    switch (t) {
      case 'E':
      case 'EE':
      case 'EEE':
        return r.day(n, {width: 'abbreviated', context: 'formatting'})
      case 'EEEEE':
        return r.day(n, {width: 'narrow', context: 'formatting'})
      case 'EEEEEE':
        return r.day(n, {width: 'short', context: 'formatting'})
      case 'EEEE':
      default:
        return r.day(n, {width: 'wide', context: 'formatting'})
    }
  },
  e: function (e, t, r, n) {
    var a = e.getUTCDay(),
      o = (a - n.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'e':
        return String(o)
      case 'ee':
        return Oe(o, 2)
      case 'eo':
        return r.ordinalNumber(o, {unit: 'day'})
      case 'eee':
        return r.day(a, {width: 'abbreviated', context: 'formatting'})
      case 'eeeee':
        return r.day(a, {width: 'narrow', context: 'formatting'})
      case 'eeeeee':
        return r.day(a, {width: 'short', context: 'formatting'})
      case 'eeee':
      default:
        return r.day(a, {width: 'wide', context: 'formatting'})
    }
  },
  c: function (e, t, r, n) {
    var a = e.getUTCDay(),
      o = (a - n.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'c':
        return String(o)
      case 'cc':
        return Oe(o, t.length)
      case 'co':
        return r.ordinalNumber(o, {unit: 'day'})
      case 'ccc':
        return r.day(a, {width: 'abbreviated', context: 'standalone'})
      case 'ccccc':
        return r.day(a, {width: 'narrow', context: 'standalone'})
      case 'cccccc':
        return r.day(a, {width: 'short', context: 'standalone'})
      case 'cccc':
      default:
        return r.day(a, {width: 'wide', context: 'standalone'})
    }
  },
  i: function (e, t, r) {
    var n = e.getUTCDay(),
      a = 0 === n ? 7 : n
    switch (t) {
      case 'i':
        return String(a)
      case 'ii':
        return Oe(a, t.length)
      case 'io':
        return r.ordinalNumber(a, {unit: 'day'})
      case 'iii':
        return r.day(n, {width: 'abbreviated', context: 'formatting'})
      case 'iiiii':
        return r.day(n, {width: 'narrow', context: 'formatting'})
      case 'iiiiii':
        return r.day(n, {width: 'short', context: 'formatting'})
      case 'iiii':
      default:
        return r.day(n, {width: 'wide', context: 'formatting'})
    }
  },
  a: function (e, t, r) {
    var n = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
    switch (t) {
      case 'a':
      case 'aa':
      case 'aaa':
        return r.dayPeriod(n, {width: 'abbreviated', context: 'formatting'})
      case 'aaaaa':
        return r.dayPeriod(n, {width: 'narrow', context: 'formatting'})
      case 'aaaa':
      default:
        return r.dayPeriod(n, {width: 'wide', context: 'formatting'})
    }
  },
  b: function (e, t, r) {
    var n,
      a = e.getUTCHours()
    switch (((n = 12 === a ? 'noon' : 0 === a ? 'midnight' : a / 12 >= 1 ? 'pm' : 'am'), t)) {
      case 'b':
      case 'bb':
      case 'bbb':
        return r.dayPeriod(n, {width: 'abbreviated', context: 'formatting'})
      case 'bbbbb':
        return r.dayPeriod(n, {width: 'narrow', context: 'formatting'})
      case 'bbbb':
      default:
        return r.dayPeriod(n, {width: 'wide', context: 'formatting'})
    }
  },
  B: function (e, t, r) {
    var n,
      a = e.getUTCHours()
    switch (((n = a >= 17 ? 'evening' : a >= 12 ? 'afternoon' : a >= 4 ? 'morning' : 'night'), t)) {
      case 'B':
      case 'BB':
      case 'BBB':
        return r.dayPeriod(n, {width: 'abbreviated', context: 'formatting'})
      case 'BBBBB':
        return r.dayPeriod(n, {width: 'narrow', context: 'formatting'})
      case 'BBBB':
      default:
        return r.dayPeriod(n, {width: 'wide', context: 'formatting'})
    }
  },
  h: function (e, t, r) {
    if ('ho' === t) {
      var n = e.getUTCHours() % 12
      return 0 === n && (n = 12), r.ordinalNumber(n, {unit: 'hour'})
    }
    return (function (e, t) {
      return Oe(e.getUTCHours() % 12 || 12, t.length)
    })(e, t)
  },
  H: function (e, t, r) {
    return 'Ho' === t
      ? r.ordinalNumber(e.getUTCHours(), {unit: 'hour'})
      : (function (e, t) {
          return Oe(e.getUTCHours(), t.length)
        })(e, t)
  },
  K: function (e, t, r) {
    var n = e.getUTCHours() % 12
    return 'Ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : Oe(n, t.length)
  },
  k: function (e, t, r) {
    var n = e.getUTCHours()
    return 0 === n && (n = 24), 'ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : Oe(n, t.length)
  },
  m: function (e, t, r) {
    return 'mo' === t
      ? r.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'})
      : (function (e, t) {
          return Oe(e.getUTCMinutes(), t.length)
        })(e, t)
  },
  s: function (e, t, r) {
    return 'so' === t
      ? r.ordinalNumber(e.getUTCSeconds(), {unit: 'second'})
      : (function (e, t) {
          return Oe(e.getUTCSeconds(), t.length)
        })(e, t)
  },
  S: function (e, t) {
    return (function (e, t) {
      var r = t.length,
        n = e.getUTCMilliseconds()
      return Oe(Math.floor(n * Math.pow(10, r - 3)), t.length)
    })(e, t)
  },
  X: function (e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    if (0 === a) return 'Z'
    switch (t) {
      case 'X':
        return Ue(a)
      case 'XXXX':
      case 'XX':
        return Ne(a)
      case 'XXXXX':
      case 'XXX':
      default:
        return Ne(a, ':')
    }
  },
  x: function (e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'x':
        return Ue(a)
      case 'xxxx':
      case 'xx':
        return Ne(a)
      case 'xxxxx':
      case 'xxx':
      default:
        return Ne(a, ':')
    }
  },
  O: function (e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + ze(a, ':')
      case 'OOOO':
      default:
        return 'GMT' + Ne(a, ':')
    }
  },
  z: function (e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + ze(a, ':')
      case 'zzzz':
      default:
        return 'GMT' + Ne(a, ':')
    }
  },
  t: function (e, t, r, n) {
    var a = n._originalDate || e
    return Oe(Math.floor(a.getTime() / 1e3), t.length)
  },
  T: function (e, t, r, n) {
    return Oe((n._originalDate || e).getTime(), t.length)
  },
}
function ze(e, t) {
  var r = e > 0 ? '-' : '+',
    n = Math.abs(e),
    a = Math.floor(n / 60),
    o = n % 60
  if (0 === o) return r + String(a)
  var i = t || ''
  return r + String(a) + i + Oe(o, 2)
}
function Ue(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + Oe(Math.abs(e) / 60, 2) : Ne(e, t)
}
function Ne(e, t) {
  var r = t || '',
    n = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return n + Oe(Math.floor(a / 60), 2) + r + Oe(a % 60, 2)
}
var Ye = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Ae = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  qe = /^'([^]*?)'?$/,
  Ge = /''/g,
  je = /[a-zA-Z]/
function Xe(e, t, r) {
  k(2, arguments)
  var n = String(t),
    a = r || {},
    o = a.locale || w,
    i = o.options && o.options.firstWeekContainsDate,
    d = null == i ? 1 : D(i),
    s = null == a.firstWeekContainsDate ? d : D(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = o.options && o.options.weekStartsOn,
    u = null == c ? 0 : D(c),
    l = null == a.weekStartsOn ? u : D(a.weekStartsOn)
  if (!(l >= 0 && l <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!o.localize) throw new RangeError('locale must contain localize property')
  if (!o.formatLong) throw new RangeError('locale must contain formatLong property')
  var p = x(e)
  if (!Pe(p)) throw new RangeError('Invalid time value')
  var f = L(p),
    g = T(p, f),
    h = {firstWeekContainsDate: s, weekStartsOn: l, locale: o, _originalDate: p},
    m = n
      .match(Ae)
      .map(function (e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, R[t])(e, o.formatLong, h) : e
      })
      .join('')
      .match(Ye)
      .map(function (e) {
        if ("''" === e) return "'"
        var t = e[0]
        if ("'" === t) return Qe(e)
        var r = Ie[t]
        if (r)
          return (
            !a.useAdditionalWeekYearTokens && P(e) && O(e),
            !a.useAdditionalDayOfYearTokens && H(e) && O(e),
            r(g, e, o.localize, h)
          )
        if (t.match(je))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + t + '`',
          )
        return e
      })
      .join('')
  return m
}
function Qe(e) {
  return e.match(qe)[1].replace(Ge, "'")
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Ve(
  e,
  t,
) {
  k(2, arguments)
  var r = x(e),
    n = D(t)
  return isNaN(n) ? new Date(NaN) : n ? (r.setDate(r.getDate() + n), r) : r
}
function Ze(e, t) {
  k(1, arguments)
  var r = e || {},
    n = x(r.start),
    a = x(r.end),
    o = a.getTime()
  if (!(n.getTime() <= o)) throw new RangeError('Invalid interval')
  var i = [],
    d = n
  d.setHours(0, 0, 0, 0)
  var s = t && 'step' in t ? Number(t.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; d.getTime() <= o; ) i.push(x(d)), d.setDate(d.getDate() + s), d.setHours(0, 0, 0, 0)
  return i
}
function Ke(e, t) {
  k(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == r.weekStartsOn ? o : D(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = x(e),
    s = d.getDay(),
    c = 6 + (s < i ? -7 : 0) - (s - i)
  return d.setDate(d.getDate() + c), d.setHours(23, 59, 59, 999), d
}
function Je(e) {
  k(1, arguments)
  var t = x(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function _e(e, t) {
  k(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == r.weekStartsOn ? o : D(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = x(e),
    s = d.getDay(),
    c = (s < i ? 7 : 0) + s - i
  return d.setDate(d.getDate() - c), d.setHours(0, 0, 0, 0), d
}
var $e = function (e) {
    return Xe(e, 'dd')
  },
  et = function (e) {
    return Xe(e, 'eeeeee')
  },
  tt = function (e) {
    return Xe(e, 'MMMM yyyy')
  }
function rt(e) {
  var t = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    o = void 0 === a ? 1 : a,
    i = e.dayLabelFormat,
    d = void 0 === i ? $e : i,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? et : s,
    u = e.monthLabelFormat,
    l = void 0 === u ? tt : u
  return {
    days: n(
      function () {
        return (function (e) {
          var t = e.year,
            r = e.month,
            n = e.firstDayOfWeek,
            a = void 0 === n ? 1 : n,
            o = e.dayLabelFormat,
            i =
              void 0 === o
                ? function (e) {
                    return Xe(e, 'dd')
                  }
                : o,
            d = new Date(t, r),
            s = Je(d),
            c = (function (e) {
              k(1, arguments)
              var t = x(e),
                r = t.getDay()
              return r
            })(s),
            u = (function (e) {
              k(1, arguments)
              var t = x(e),
                r = t.getMonth()
              return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
            })(d)
          return (function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
            var n = Array(e),
              a = 0
            for (t = 0; t < r; t++)
              for (var o = arguments[t], i = 0, d = o.length; i < d; i++, a++) n[a] = o[i]
            return n
          })(
            Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
            Ze({start: s, end: u}).map(function (e) {
              return {date: e, dayLabel: i(e)}
            }),
          )
        })({year: t, month: r, firstDayOfWeek: o, dayLabelFormat: d})
      },
      [t, r, o, d],
    ),
    weekdayLabels: n(
      function () {
        return (function (e) {
          var t = void 0 === e ? {} : e,
            r = t.firstDayOfWeek,
            n = void 0 === r ? 1 : r,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function (e) {
                    return Xe(e, 'iiiiii')
                  }
                : a,
            i = new Date()
          return Ze({start: Ve(_e(i), n), end: Ve(Ke(i), n)}).reduce(function (e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: l(new Date(t, r)),
  }
}
function nt(e, t) {
  k(2, arguments)
  var r = x(e),
    n = x(t)
  return r.getTime() < n.getTime()
}
function at(e, t) {
  k(2, arguments)
  var r = x(e),
    n = x(t)
  return r.getTime() > n.getTime()
}
function ot(e, t) {
  k(2, arguments)
  var r = t || {},
    n = x(e).getTime(),
    a = x(r.start).getTime(),
    o = x(r.end).getTime()
  if (!(a <= o)) throw new RangeError('Invalid interval')
  return n >= a && n <= o
}
function it(e) {
  k(1, arguments)
  var t = x(e)
  return t.setHours(0, 0, 0, 0), t
}
function dt(e, t) {
  k(2, arguments)
  var r = it(e),
    n = it(t)
  return r.getTime() === n.getTime()
}
function st(e, t) {
  k(2, arguments)
  var r = x(e),
    n = D(t)
  if (isNaN(n)) return new Date(NaN)
  if (!n) return r
  var a = r.getDate(),
    o = new Date(r.getTime())
  o.setMonth(r.getMonth() + n + 1, 0)
  var i = o.getDate()
  return a >= i ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a), r)
}
var ct = function (e, t) {
  return (
    void 0 === e && (e = []),
    e.some(function (e) {
      return dt(t, e)
    })
  )
}
function ut(e) {
  var t = Je(e)
  return {
    year: (function (e) {
      k(1, arguments)
      var t = x(e),
        r = t.getFullYear()
      return r
    })(t),
    month: (function (e) {
      k(1, arguments)
      var t = x(e),
        r = t.getMonth()
      return r
    })(t),
    date: t,
  }
}
function lt(e, t) {
  var r = ut(t || it(Date.now())),
    n = r.date,
    a = [r]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function (e) {
        return (n = st(e[e.length - 1].date, 1)), e.concat([ut(n)])
      }, a)),
    a
  )
}
function pt(e, t, r) {
  var n = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function (e) {
    return (
      (n = 0 === e.length ? st(n, r) : st(n, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([ut(n)]) : [ut(n)].concat(e)
    )
  }, [])
}
function ft(e, t, r) {
  return e && 'string' == typeof t ? Xe(e, t) : e && 'function' == typeof t ? t(e) : r
}
function gt(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    d = e.maxBookingDate,
    s = !i || !nt(t, Ve(i, -1)),
    c = !d || !at(Ve(t, a - 1), d)
  return !(
    (!t || 1 !== a || r || n(t)) &&
    ((t && a > 1 && !r && !o) || (t && a > 0 && o && s && c) || (t && a > 0 && o && !i && !d)
      ? Ze({start: t, end: Ve(t, a - 1)}).some(function (e) {
          return n(e)
        })
      : !t ||
        !r ||
        o ||
        nt(r, Ve(t, a - 1)) ||
        Ze({start: t, end: r}).some(function (e) {
          return n(e)
        }))
  )
}
var ht = 'startDate',
  mt = 'endDate'
function yt(e) {
  var n = e.startDate,
    a = e.endDate,
    o = e.focusedInput,
    i = e.minBookingDate,
    d = e.maxBookingDate,
    s = e.onDatesChange,
    c = e.initialVisibleMonth,
    u = e.exactMinBookingDays,
    l = void 0 !== u && u,
    p = e.minBookingDays,
    f = void 0 === p ? 1 : p,
    g = e.numberOfMonths,
    h = void 0 === g ? 2 : g,
    m = e.firstDayOfWeek,
    y = void 0 === m ? 1 : m,
    b = e.isDateBlocked,
    v =
      void 0 === b
        ? function () {
            return !1
          }
        : b,
    w = e.unavailableDates,
    D = void 0 === w ? [] : w,
    k = t(function () {
      return lt(h, n || c || null)
    }),
    x = k[0],
    C = k[1],
    T = t(null),
    S = T[0],
    B = T[1],
    M = t(n),
    R = M[0],
    W = M[1]
  r(function () {
    return (
      'undefined' != typeof window && window.addEventListener('keydown', H),
      function () {
        window.removeEventListener('keydown', H)
      }
    )
  })
  var L = function (e) {
      return ct(D, e) || v(e)
    },
    E = function (e) {
      W(e), (!R || (R && !dt(e, R))) && C(lt(h, e))
    },
    F = function (e) {
      return (function (e) {
        var t = e.date,
          r = e.minBookingDate,
          n = e.maxBookingDate,
          a = e.isDateBlockedFn,
          o = e.startDate,
          i = e.endDate,
          d = e.minBookingDays,
          s = void 0 === d ? 1 : d,
          c = e.unavailableDates,
          u = void 0 === c ? [] : c,
          l = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
          p = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
        return !!(
          ct(u, t) ||
          (l && nt(t, l)) ||
          (p && at(t, p)) ||
          (o && !i && s > 1 && ot(t, {start: o, end: Ve(o, s - 2)})) ||
          (a && a(t))
        )
      })({
        date: e,
        minBookingDate: i,
        maxBookingDate: d,
        startDate: n,
        endDate: a,
        minBookingDays: f,
        isDateBlockedFn: L,
      })
    }
  function H(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !R
    ) {
      var t = x[0]
      E(t.date), C(lt(h, t.date))
    }
  }
  return {
    firstDayOfWeek: y,
    activeMonths: x,
    isDateSelected: function (e) {
      return (function (e, t, r) {
        return !(!t || !r) && ot(e, {start: t, end: r})
      })(e, n, a)
    },
    isDateHovered: function (e) {
      return (function (e) {
        var t = e.date,
          r = e.startDate,
          n = e.endDate,
          a = e.isDateBlocked,
          o = e.hoveredDate,
          i = e.minBookingDays
        return o && i > 1 && e.exactMinBookingDays && ot(t, {start: o, end: Ve(o, i - 1)})
          ? !Ze({start: o, end: Ve(o, i - 1)}).some(function (e) {
              return a(e)
            })
          : r && !n && o && ot(t, {start: r, end: Ve(r, i - 1)}) && dt(r, o) && i > 1
          ? !Ze({start: r, end: Ve(r, i - 1)}).some(function (e) {
              return a(e)
            })
          : !(
              !r ||
              n ||
              !o ||
              nt(o, r) ||
              !ot(t, {start: r, end: o}) ||
              Ze({start: r, end: o}).some(function (e) {
                return a(e)
              })
            )
      })({
        date: e,
        hoveredDate: S,
        startDate: n,
        endDate: a,
        minBookingDays: f,
        exactMinBookingDays: l,
        isDateBlocked: L,
      })
    },
    isFirstOrLastSelectedDate: function (e) {
      return (function (e, t, r) {
        return !!((t && dt(e, t)) || (r && dt(e, r)))
      })(e, n, a)
    },
    isDateBlocked: F,
    numberOfMonths: h,
    isDateFocused: function (e) {
      return !!R && dt(e, R)
    },
    focusedDate: R,
    hoveredDate: S,
    onResetDates: function () {
      s({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function (e) {
      if (e) {
        if (e) {
          var t = !F(e) || (n && dt(e, n)),
            r = !i || !nt(e, Ve(i, -1)),
            o = !d || !at(e, d),
            s = Ve(e, f - 1),
            c = !i || !nt(s, i),
            u = !d || !at(s, d),
            p = l && f > 1 && r && o && c && u,
            g = n && !a && !l && r && o,
            h = !(f > 1 && n) || ot(e, {start: n, end: Ve(n, f - 2)}),
            m = n && dt(e, n) && h
          t && (p || g || m) ? B(e) : null !== S && B(null)
        }
      } else B(null)
    },
    onDateSelect: function (e) {
      ;('endDate' === o || 'startDate' === o) &&
      f > 0 &&
      l &&
      gt({
        minBookingDays: f,
        exactMinBookingDays: l,
        minBookingDate: i,
        maxBookingDate: d,
        isDateBlocked: L,
        startDate: e,
        endDate: null,
      })
        ? s({startDate: e, endDate: Ve(e, f - 1), focusedInput: null})
        : (('endDate' === o && n && nt(e, n)) || ('startDate' === o && a && at(e, a))) &&
          !l &&
          gt({minBookingDays: f, isDateBlocked: L, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === o &&
          !l &&
          gt({minBookingDays: f, isDateBlocked: L, endDate: a, startDate: e})
        ? s({endDate: a, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === o &&
          !l &&
          gt({minBookingDays: f, isDateBlocked: L, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'endDate' === o &&
          n &&
          !nt(e, n) &&
          !l &&
          gt({minBookingDays: f, isDateBlocked: L, startDate: n, endDate: e}) &&
          s({startDate: n, endDate: e, focusedInput: null}),
        'endDate' === o || (R && (!R || dt(e, R))) || C(lt(h, e))
    },
    onDateFocus: E,
    goToPreviousMonths: function () {
      C(pt(x, h, -1)), W(null)
    },
    goToNextMonths: function () {
      C(pt(x, h, 1)), W(null)
    },
    goToDate: function (e) {
      C(lt(h, e)), W(null)
    },
    goToPreviousYear: function (e) {
      void 0 === e && (e = 1), C(pt(x, h, -(12 * e - h + 1))), W(null)
    },
    goToNextYear: function (e) {
      void 0 === e && (e = 1), C(pt(x, h, 12 * e - h + 1)), W(null)
    },
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var bt = function () {
  return (bt =
    Object.assign ||
    function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var a in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function vt(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var wt = Object.getOwnPropertySymbols,
  Dt = Object.prototype.hasOwnProperty,
  kt = Object.prototype.propertyIsEnumerable
function xt(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var Ct = (function () {
    try {
      if (!Object.assign) return !1
      var e = new String('abc')
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
      for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var n = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          n[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
      )
    } catch (e) {
      return !1
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var r, n, a = xt(e), o = 1; o < arguments.length; o++) {
          for (var i in (r = Object(arguments[o]))) Dt.call(r, i) && (a[i] = r[i])
          if (wt) {
            n = wt(r)
            for (var d = 0; d < n.length; d++) kt.call(r, n[d]) && (a[n[d]] = r[n[d]])
          }
        }
        return a
      },
  Tt = function (e, t) {
    var r = Ct({}, e, t)
    for (var n in e) {
      var a
      e[n] && 'object' == typeof t[n] && Ct(r, (((a = {})[n] = Ct(e[n], t[n])), a))
    }
    return r
  },
  St = {
    breakpoints: [40, 52, 64].map(function (e) {
      return e + 'em'
    }),
  },
  Bt = function (e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  Mt = function (e, t) {
    return Rt(t, e, e)
  },
  Rt = function (e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  Wt = function e(t) {
    var r = {},
      n = function (e) {
        var n,
          a,
          o = {},
          i = !1,
          d = e.theme && e.theme.disableStyledSystemCache
        for (var s in e)
          if (t[s]) {
            var c = t[s],
              u = e[s],
              l = Rt(e.theme, c.scale, c.defaults)
            if ('object' != typeof u) Ct(o, c(u, l, e))
            else {
              if (
                ((r.breakpoints =
                  (!d && r.breakpoints) || Rt(e.theme, 'breakpoints', St.breakpoints)),
                Array.isArray(u))
              ) {
                ;(r.media = (!d && r.media) || [null].concat(r.breakpoints.map(Bt))),
                  (o = Tt(o, Lt(r.media, c, l, u, e)))
                continue
              }
              null !== u && ((o = Tt(o, Et(r.breakpoints, c, l, u, e))), (i = !0))
            }
          }
        return (
          i &&
            ((n = o),
            (a = {}),
            Object.keys(n)
              .sort(function (e, t) {
                return e.localeCompare(t, void 0, {numeric: !0, sensitivity: 'base'})
              })
              .forEach(function (e) {
                a[e] = n[e]
              }),
            (o = a)),
          o
        )
      }
    ;(n.config = t), (n.propNames = Object.keys(t)), (n.cache = r)
    var a = Object.keys(t).filter(function (e) {
      return 'config' !== e
    })
    return (
      a.length > 1 &&
        a.forEach(function (r) {
          var a
          n[r] = e((((a = {})[r] = t[r]), a))
        }),
      n
    )
  },
  Lt = function (e, t, r, n, a) {
    var o = {}
    return (
      n.slice(0, e.length).forEach(function (n, i) {
        var d,
          s = e[i],
          c = t(n, r, a)
        s ? Ct(o, (((d = {})[s] = Ct({}, o[s], c)), d)) : Ct(o, c)
      }),
      o
    )
  },
  Et = function (e, t, r, n, a) {
    var o = {}
    for (var i in n) {
      var d = e[i],
        s = t(n[i], r, a)
      if (d) {
        var c,
          u = Bt(d)
        Ct(o, (((c = {})[u] = Ct({}, o[u], s)), c))
      } else Ct(o, s)
    }
    return o
  },
  Ft = function (e) {
    var t = e.properties,
      r = e.property,
      n = e.scale,
      a = e.transform,
      o = void 0 === a ? Mt : a,
      i = e.defaultScale
    t = t || [r]
    var d = function (e, r, n) {
      var a = {},
        i = o(e, r, n)
      if (null !== i)
        return (
          t.forEach(function (e) {
            a[e] = i
          }),
          a
        )
    }
    return (d.scale = n), (d.defaults = i), d
  },
  Ht = function (e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function (r) {
        var n = e[r]
        t[r] = !0 !== n ? ('function' != typeof n ? Ft(n) : n) : Ft({property: r, scale: r})
      }),
      Wt(t)
    )
  },
  Pt = function () {
    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    r.forEach(function (t) {
      t && t.config && Ct(e, t.config)
    })
    var a = Wt(e)
    return a
  },
  Ot = Ht({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function (e, t) {
        return Rt(
          t,
          e,
          !(function (e) {
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
  It = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
It.bg = It.backgroundColor
var zt = Ht(It),
  Ut = Ht({
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
  Nt = Ht({
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
  Yt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  At = Ht({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Yt.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Yt.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Yt.space},
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
  qt = {
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
  }
;(qt.borderTopLeftRadius = {property: 'borderTopLeftRadius', scale: 'radii'}),
  (qt.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
  (qt.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
  (qt.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
  (qt.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
  (qt.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
  (qt.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
  (qt.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
  (qt.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
  (qt.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
  (qt.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
  (qt.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
  (qt.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'})
var Gt = Ht(qt),
  jt = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(jt.bgImage = jt.backgroundImage),
  (jt.bgSize = jt.backgroundSize),
  (jt.bgPosition = jt.backgroundPosition),
  (jt.bgRepeat = jt.backgroundRepeat)
var Xt = Ht(jt),
  Qt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Vt = Ht({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: Qt.space},
    right: {property: 'right', scale: 'space', defaultScale: Qt.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: Qt.space},
    left: {property: 'left', scale: 'space', defaultScale: Qt.space},
  }),
  Zt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Kt = function (e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Jt = function (e, t) {
    if (!Kt(e)) return Rt(t, e, e)
    var r = e < 0,
      n = Math.abs(e),
      a = Rt(t, n, n)
    return Kt(a) ? a * (r ? -1 : 1) : r ? '-' + a : a
  },
  _t = {}
;(_t.margin = {
  margin: {property: 'margin', scale: 'space', transform: Jt, defaultScale: Zt.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: Jt, defaultScale: Zt.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: Jt, defaultScale: Zt.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: Jt, defaultScale: Zt.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: Jt, defaultScale: Zt.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: Jt,
    defaultScale: Zt.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: Jt,
    defaultScale: Zt.space,
  },
}),
  (_t.margin.m = _t.margin.margin),
  (_t.margin.mt = _t.margin.marginTop),
  (_t.margin.mr = _t.margin.marginRight),
  (_t.margin.mb = _t.margin.marginBottom),
  (_t.margin.ml = _t.margin.marginLeft),
  (_t.margin.mx = _t.margin.marginX),
  (_t.margin.my = _t.margin.marginY),
  (_t.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Zt.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Zt.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Zt.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Zt.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Zt.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Zt.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Zt.space},
  }),
  (_t.padding.p = _t.padding.padding),
  (_t.padding.pt = _t.padding.paddingTop),
  (_t.padding.pr = _t.padding.paddingRight),
  (_t.padding.pb = _t.padding.paddingBottom),
  (_t.padding.pl = _t.padding.paddingLeft),
  (_t.padding.px = _t.padding.paddingX),
  (_t.padding.py = _t.padding.paddingY)
var $t = Pt(Ht(_t.margin), Ht(_t.padding)),
  er = Ht({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function tr() {
  return (tr =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
var rr,
  nr,
  ar,
  or = function (e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  ir = [40, 52, 64].map(function (e) {
    return e + 'em'
  }),
  dr = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  sr = {
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
  cr = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  ur = {
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
    borderBottomWidth: 'borderWidths',
    borderBottomColor: 'colors',
    borderBottomStyle: 'borderStyles',
    borderLeftWidth: 'borderWidths',
    borderLeftColor: 'colors',
    borderLeftStyle: 'borderStyles',
    borderRightWidth: 'borderWidths',
    borderRightColor: 'colors',
    borderRightStyle: 'borderStyles',
    outlineColor: 'colors',
    boxShadow: 'shadows',
    textShadow: 'shadows',
    zIndex: 'zIndices',
    width: 'sizes',
    minWidth: 'sizes',
    maxWidth: 'sizes',
    height: 'sizes',
    minHeight: 'sizes',
    maxHeight: 'sizes',
    flexBasis: 'sizes',
    size: 'sizes',
    fill: 'colors',
    stroke: 'colors',
  },
  lr = function (e, t) {
    if ('number' != typeof t || t >= 0) return or(e, t, t)
    var r = Math.abs(t),
      n = or(e, r, r)
    return 'string' == typeof n ? '-' + n : -1 * n
  },
  pr = [
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
  ].reduce(function (e, t) {
    var r
    return tr({}, e, (((r = {})[t] = lr), r))
  }, {}),
  fr = function e(t) {
    return function (r) {
      void 0 === r && (r = {})
      var n = tr({}, dr, {}, r.theme || r),
        a = {},
        o = (function (e) {
          return function (t) {
            var r = {},
              n = or(t, 'breakpoints', ir),
              a = [null].concat(
                n.map(function (e) {
                  return '@media screen and (min-width: ' + e + ')'
                }),
              )
            for (var o in e) {
              var i = 'function' == typeof e[o] ? e[o](t) : e[o]
              if (null != i)
                if (Array.isArray(i))
                  for (var d = 0; d < i.slice(0, a.length).length; d++) {
                    var s = a[d]
                    s ? ((r[s] = r[s] || {}), null != i[d] && (r[s][o] = i[d])) : (r[o] = i[d])
                  }
                else r[o] = i
            }
            return r
          }
        })('function' == typeof t ? t(n) : t)(n)
      for (var i in o) {
        var d = o[i],
          s = 'function' == typeof d ? d(n) : d
        if ('variant' !== i)
          if (s && 'object' == typeof s) a[i] = e(s)(n)
          else {
            var c = or(sr, i, i),
              u = or(ur, c),
              l = or(n, u, or(n, c, {})),
              p = or(pr, c, or)(l, s, s)
            if (cr[c]) for (var f = cr[c], g = 0; g < f.length; g++) a[f[g]] = p
            else a[c] = p
          }
        else a = tr({}, a, {}, e(or(n, s))(n))
      }
      return a
    }
  },
  gr = function (e) {
    var t,
      r,
      n = e.scale,
      a = e.prop,
      o = void 0 === a ? 'variant' : a,
      i = e.variants,
      d = void 0 === i ? {} : i,
      s = e.key
    ;((r = Object.keys(d).length
      ? function (e, t, r) {
          return fr(Rt(t, e, null))(r.theme)
        }
      : function (e, t) {
          return Rt(t, e, null)
        }).scale = n || s),
      (r.defaults = d)
    var c = (((t = {})[o] = r), t)
    return Wt(c)
  },
  hr =
    (gr({key: 'buttons'}),
    gr({key: 'textStyles', prop: 'textStyle'}),
    gr({key: 'colorStyles', prop: 'colors'}),
    Ot.width),
  mr = Ot.height,
  yr = Ot.minHeight,
  br = Ot.display,
  vr = Ot.overflow,
  wr = zt.opacity,
  Dr = Ut.fontSize,
  kr = Ut.fontFamily,
  xr = Ut.fontWeight,
  Cr = Ut.lineHeight,
  Tr = Nt.alignItems,
  Sr = Nt.justifyContent,
  Br = Nt.flexWrap,
  Mr = Nt.flexDirection,
  Rr = Nt.flex,
  Wr = At.gridGap,
  Lr = At.gridColumnGap,
  Er = At.gridRowGap,
  Fr = At.gridAutoFlow,
  Hr = At.gridAutoColumns,
  Pr = At.gridAutoRows,
  Or = At.gridTemplateColumns,
  Ir = At.gridTemplateRows,
  zr = At.gridTemplateAreas,
  Ur = At.gridArea,
  Nr = Gt.borderRadius,
  Yr = Vt.zIndex,
  Ar = Vt.top,
  qr = Vt.right,
  Gr = Vt.bottom,
  jr = Vt.left,
  Xr = function (e) {
    var t = e.prop,
      r = e.cssProperty,
      n = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      d = e.properties,
      s = {}
    return (
      (s[t] = Ft({properties: d, property: r || t, scale: a, defaultScale: i, transform: o})),
      n && (s[n] = s[t]),
      Wt(s)
    )
  },
  Qr = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Vr = bt(bt({}, Qr), {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Zr = bt(bt({}, Qr), {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  Kr = Xr({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function (e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Jr = Pt(Hr, Fr, Pr, Lr, Wr, Er, zr, Or, Ir, Tr, Sr, $t),
  _r = s('div')(
    rr ||
      (rr = vt(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    Jr,
    Kr,
  ),
  $r = Pt($t, Rr, Br, Mr, Tr, Sr, Ur, mr, hr),
  en = s('div')(
    nr || (nr = vt(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    $r,
  ),
  tn = Pt(Ur, mr, $t, hr, Vt, Ar, jr, qr, Gr, Yr),
  rn = s('div')(
    ar ||
      (ar = vt(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    tn,
  )
function nn(t) {
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
function an(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return n(
    function () {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function (r, n) {
            var a
            return bt(bt({}, r), (((a = {})[n] = t.reactDatepicker[n] || e[n]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var on = 'Montserrat, sans-serif',
  dn = {
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
  sn = 36
function cn(e, t, r) {
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
var un,
  ln,
  pn,
  fn = Xr({prop: 'placeholderColor', cssProperty: 'color'}),
  gn = Xr({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  hn = Pt(Vt, Gt, Xt, br, Nr, $t),
  mn = s('label')(un || (un = vt(['\n  ', '\n'], ['\n  ', '\n'])), hn),
  yn = Pt(Vt, jr, qr, Ar, mr, hr),
  bn = s('div')(
    ln ||
      (ln = vt(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    yn,
  ),
  vn = Pt(Xt, $t, kr, Dr, zt, xr, $t, Gt, hr, yr, er),
  wn = s('input')(
    pn ||
      (pn = vt(
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
    vn,
    gn,
    fn,
    gn,
    fn,
    gn,
    fn,
  )
function Dn(n) {
  var a = n.placeholder,
    d = n.id,
    s = n.vertical,
    u = n.isActive,
    l = n.ariaLabel,
    p = n.onClick,
    f = n.value,
    g = n.showCalendarIcon,
    h = n.padding,
    m = n.rtl,
    y = n.disableAccessibility,
    b = n.dateFormat,
    v = n.onChange,
    C = void 0 === v ? function () {} : v,
    B = t(f),
    M = B[0],
    W = B[1],
    E = i(null)
  r(
    function () {
      W(f)
    },
    [f],
  )
  var F = o(c),
    I = an({
      fontFamily: on,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: cn('charcoal', dn.charcoal, F),
      inputBackground: cn('white', dn.white, F),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: h,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: cn('silverCloud', dn.silverCloud, F),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: m ? 'unset' : s ? '8px' : '16px',
      inputCalendarWrapperRight: m ? (s ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: cn('graci', dn.graci, F),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + cn('graci', dn.graci, F),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: cn('white', dn.white, F),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + cn('primaryColor', dn.primaryColor, F),
    })
  return e.createElement(
    mn,
    {
      htmlFor: d,
      display: I.inputLabelDisplay,
      position: I.inputLabelPosition,
      border: I.inputLabelBorder,
      background: I.inputLabelBackground,
      borderRadius: I.inputLabelBorderRadius,
      m: I.inputLabelMargin,
    },
    g &&
      e.createElement(
        bn,
        {
          position: I.inputCalendarWrapperPosition,
          height: I.inputCalendarWrapperHeight,
          width: I.inputCalendarWrapperWidth,
          top: I.inputCalendarWrapperTop,
          left: I.inputCalendarWrapperLeft,
          right: I.inputCalendarWrapperRight,
        },
        e.createElement(nn, {
          width: I.inputCalendarIconWidth,
          height: I.inputCalendarIconHeight,
          color: I.inputCalendarIconColor,
        }),
      ),
    e.createElement(wn, {
      tabIndex: y ? -1 : 0,
      border: I.inputBorder,
      p: I.inputPadding,
      width: I.inputWidth,
      minHeight: I.inputMinHeight,
      background: I.inputBackground,
      fontFamily: I.fontFamily,
      color: I.inputColor,
      fontSize: I.inputFontSize,
      fontWeight: I.inputFontWeight,
      placeholderColor: I.inputPlaceholderColor,
      placeholderFontWeight: I.inputPlaceholderFontWeight,
      boxShadow: u ? I.inputActiveBoxShadow : 'none',
      id: d,
      placeholder: a,
      'aria-label': l,
      value: M,
      autoComplete: 'off',
      onChange: function (e) {
        var t = e.target.value
        W(t),
          'number' == typeof E.current && clearTimeout(E.current),
          (E.current = setTimeout(function () {
            p()
            var e = (function (e, t, r, n) {
              k(3, arguments)
              var a = String(e),
                o = String(t),
                i = n || {},
                d = i.locale || w
              if (!d.match) throw new RangeError('locale must contain match property')
              var s = d.options && d.options.firstWeekContainsDate,
                c = null == s ? 1 : D(s),
                u = null == i.firstWeekContainsDate ? c : D(i.firstWeekContainsDate)
              if (!(u >= 1 && u <= 7))
                throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
              var l = d.options && d.options.weekStartsOn,
                p = null == l ? 0 : D(l),
                f = null == i.weekStartsOn ? p : D(i.weekStartsOn)
              if (!(f >= 0 && f <= 6))
                throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
              if ('' === o) return '' === a ? x(r) : new Date(NaN)
              var g,
                h = {firstWeekContainsDate: u, weekStartsOn: f, locale: d},
                m = [{priority: 10, set: Fe, index: 0}],
                y = o
                  .match(Me)
                  .map(function (e) {
                    var t = e[0]
                    return 'p' === t || 'P' === t ? (0, R[t])(e, d.formatLong, h) : e
                  })
                  .join('')
                  .match(Be),
                b = []
              for (g = 0; g < y.length; g++) {
                var v = y[g]
                !i.useAdditionalWeekYearTokens && P(v) && O(v),
                  !i.useAdditionalDayOfYearTokens && H(v) && O(v)
                var C = v[0],
                  B = Se[C]
                if (B) {
                  var M = B.incompatibleTokens
                  if (Array.isArray(M)) {
                    for (var W = void 0, E = 0; E < b.length; E++) {
                      var F = b[E].token
                      if (-1 !== M.indexOf(F) || F === C) {
                        W = b[E]
                        break
                      }
                    }
                    if (W)
                      throw new RangeError(
                        "The format string mustn't contain `"
                          .concat(W.fullToken, '` and `')
                          .concat(v, '` at the same time'),
                      )
                  } else if ('*' === B.incompatibleTokens && b.length)
                    throw new RangeError(
                      "The format string mustn't contain `".concat(
                        v,
                        '` and any other token at the same time',
                      ),
                    )
                  b.push({token: C, fullToken: v})
                  var I = B.parse(a, v, d.match, h)
                  if (!I) return new Date(NaN)
                  m.push({
                    priority: B.priority,
                    set: B.set,
                    validate: B.validate,
                    value: I.value,
                    index: m.length,
                  }),
                    (a = I.rest)
                } else {
                  if (C.match(Ee))
                    throw new RangeError(
                      'Format string contains an unescaped latin alphabet character `' + C + '`',
                    )
                  if (("''" === v ? (v = "'") : "'" === C && (v = He(v)), 0 !== a.indexOf(v)))
                    return new Date(NaN)
                  a = a.slice(v.length)
                }
              }
              if (a.length > 0 && Le.test(a)) return new Date(NaN)
              var z = m
                  .map(function (e) {
                    return e.priority
                  })
                  .sort(function (e, t) {
                    return t - e
                  })
                  .filter(function (e, t, r) {
                    return r.indexOf(e) === t
                  })
                  .map(function (e) {
                    return m
                      .filter(function (t) {
                        return t.priority === e
                      })
                      .reverse()
                  })
                  .map(function (e) {
                    return e[0]
                  }),
                U = x(r)
              if (isNaN(U)) return new Date(NaN)
              var N = T(U, L(U)),
                Y = {}
              for (g = 0; g < z.length; g++) {
                var A = z[g]
                if (A.validate && !A.validate(N, A.value, h)) return new Date(NaN)
                var q = A.set(N, Y, A.value, h)
                q[0] ? ((N = q[0]), S(Y, q[1])) : (N = q)
              }
              return N
            })(t, b, new Date())
            isNaN(e) || C(e)
          }, 1e3))
      },
      onFocus: p,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function kn(t) {
  var r = t.height,
    n = t.width,
    a = t.iconColor,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    d = t.className,
    s = void 0 === d ? '' : d,
    c = (function (e) {
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
      className: s,
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
var xn,
  Cn,
  Tn,
  Sn = Pt(kr, Dr, xr, zt, Cr, $t),
  Bn = s('div')(xn || (xn = vt(['\n  ', '\n'], ['\n  ', '\n'])), Sn),
  Mn = s(Bn)(
    Tn ||
      (Tn = vt(
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
        [
          "\n  position: relative;\n  display: inline-block;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  ",
          '\n',
        ],
      )),
    function (e) {
      var t = e.isActive,
        r = e.selectDateBorderColor
      return (
        t &&
        u(
          Cn ||
            (Cn = vt(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          r,
        )
      )
    },
  )
function Rn(t) {
  var r = t.title,
    n = t.isActive,
    a = t.date,
    i = t.vertical,
    d = o(c),
    s = an({
      fontFamily: on,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: cn('silverCloud', dn.silverCloud, d),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: cn('charcoal', dn.charcoal, d),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: cn('primaryColor', dn.primaryColor, d),
      selectDatePadding: '0',
    })
  return e.createElement(
    rn,
    {p: s.selectDatePadding},
    e.createElement(
      Bn,
      {
        fontFamily: s.fontFamily,
        fontSize: s.selectDateLabelFontSize,
        color: s.selectDateLabelColor,
        m: s.selectDateLabelMargin,
      },
      r,
    ),
    e.createElement(
      Mn,
      {
        as: 'span',
        color: s.selectDateDateColor,
        fontSize: s.selectDateDateFontSize,
        fontWeight: s.selectDateDateFontWeight,
        fontFamily: s.fontFamily,
        p: s.selectDateDatePadding,
        isActive: n,
        selectDateBorderColor: s.selectDateBorderColor,
      },
      a,
    ),
  )
}
var Wn,
  Ln,
  En,
  Fn,
  Hn,
  Pn = function (t) {
    var r = t.label,
      n = o(c),
      a = an({
        fontFamily: on,
        monthLabelColor: cn('darcula', dn.darcula, n),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Bn,
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
  On = function (t) {
    var r = t.label,
      n = o(c),
      a = an({
        fontFamily: on,
        dayLabelColor: cn('silverCloud', dn.silverCloud, n),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Bn,
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
  In = {
    rtl: !1,
    focusedDate: null,
    isDateFocused: function () {
      return !1
    },
    isDateSelected: function () {
      return !1
    },
    isDateHovered: function () {
      return !1
    },
    isDateBlocked: function () {
      return !1
    },
    isFirstOrLastSelectedDate: function () {
      return !1
    },
    onDateFocus: function () {},
    onDateHover: function () {},
    onDateSelect: function () {},
    onDayRender: void 0,
  },
  zn = e.createContext(In),
  Un = Xr({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nn = Xr({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Yn = Xr({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  An = Xr({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  qn = Xr({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gn = Xr({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  jn = Pt(er, Xt, zt, kr, xr, Dr),
  Xn = s('button')(
    Hn ||
      (Hn = vt(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  // @ts-ignore\n  ',
          '\n  \n  &:focus {\n    // @ts-ignore\n    ',
          '\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n  \n  ',
          '\n  \n  // @ts-ignore\n  ',
          '\n  \n  &:focus {\n    // @ts-ignore\n    ',
          '\n  }\n',
        ],
      )),
    Un,
    Nn,
    jn,
    function (e) {
      var t = e.disabledDate,
        r = e.isSelectedStartOrEnd
      return (
        t &&
        !r &&
        u(
          Wn ||
            (Wn = vt(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function (e) {
      var t = e.disabledDate,
        r = e.isSelected,
        n = e.isSelectedStartOrEnd,
        a = e.isWithinHoverRange
      return t || r || n || a
        ? r && !n
          ? u(
              En ||
                (En = vt(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Gn,
              An,
            )
          : ''
        : u(
            Ln ||
              (Ln = vt(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            qn,
            Yn,
          )
    },
    function (e) {
      var t = e.borderAccessibilityColor
      return u(
        Fn ||
          (Fn = vt(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Qn(e, t, r, n) {
  var a = n.selectedFirstOrLast,
    o = n.normal,
    i = n.selected,
    d = n.rangeHover
  return t ? a : e ? i : r ? d : o
}
function Vn(t) {
  var d = t.day,
    s = t.date,
    u = i(null),
    l = o(zn),
    p = l.focusedDate,
    f = l.isDateFocused,
    g = l.isDateSelected,
    h = l.isDateHovered,
    m = l.isDateBlocked,
    y = l.isFirstOrLastSelectedDate,
    b = l.onDateSelect,
    v = l.onDateFocus,
    w = l.onDateHover,
    D = l.onDayRender,
    k = (function (e) {
      var t = e.date,
        n = e.focusedDate,
        o = e.isDateSelected,
        i = e.isDateFocused,
        d = e.isFirstOrLastSelectedDate,
        s = e.isDateHovered,
        c = e.isDateBlocked,
        u = e.onDateSelect,
        l = e.onDateFocus,
        p = e.onDateHover,
        f = e.dayRef,
        g = a(
          function () {
            return u(t)
          },
          [t, u],
        ),
        h = a(
          function () {
            return p(t)
          },
          [t, p],
        )
      r(
        function () {
          f && f.current && i(t) && f.current.focus()
        },
        [f, t, i],
      )
      var m = c(t) && !s(t)
      return {
        tabIndex: null === n || i(t) ? 0 : -1,
        isSelected: o(t),
        isSelectedStartOrEnd: d(t),
        isWithinHoverRange: s(t),
        disabledDate: m,
        onKeyDown: function (e) {
          'ArrowRight' === e.key
            ? l(Ve(t, 1))
            : 'ArrowLeft' === e.key
            ? l(Ve(t, -1))
            : 'ArrowUp' === e.key
            ? l(Ve(t, -7))
            : 'ArrowDown' === e.key && l(Ve(t, 7))
        },
        onClick: m ? function () {} : g,
        onMouseEnter: h,
      }
    })({
      date: s,
      focusedDate: p,
      isDateFocused: f,
      isDateSelected: g,
      isDateHovered: h,
      isDateBlocked: m,
      isFirstOrLastSelectedDate: y,
      onDateFocus: v,
      onDateSelect: b,
      onDateHover: w,
      dayRef: u,
    }),
    x = o(c),
    C = cn('white', dn.white, x),
    T = cn('mud', dn.mud, x),
    S = cn('primaryColor', dn.primaryColor, x),
    B = cn('accessibility', dn.accessibility, x),
    M = cn('selectedDay', dn.selectedDay, x),
    R = cn('selectedDayHover', dn.selectedDayHover, x),
    W = cn('normalDayHover', dn.normalDayHover, x),
    L = an({
      fontFamily: on,
      daySize: sn,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: T,
      dayHoverColor: T,
      daySelectedColor: C,
      daySelectedHoverColor: C,
      dayHoverRangeColor: C,
      daySelectedFirstOrLastColor: C,
      dayBackground: C,
      dayHoverBackground: W,
      daySelectedBackground: M,
      daySelectedHoverBackground: R,
      dayHoverRangeBackground: M,
      daySelectedFirstOrLastBackground: S,
      dayBorderColor: W,
      daySelectedBorderColor: M,
      dayHoverRangeBorderColor: M,
      daySelectedFirstOrLastBorderColor: S,
      dayAccessibilityBorderColor: B,
    }),
    E = n(
      function () {
        return Qn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: L.daySelectedFirstOrLastBorderColor,
          selected: L.daySelectedBorderColor,
          normal: L.dayBorderColor,
          rangeHover: L.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, L, k.isWithinHoverRange],
    ),
    F = n(
      function () {
        return Qn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: L.daySelectedFirstOrLastBackground,
          selected: L.daySelectedBackground,
          normal: L.dayBackground,
          rangeHover: L.dayHoverRangeBackground,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, L, k.isWithinHoverRange],
    ),
    H = n(
      function () {
        return Qn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: L.daySelectedFirstOrLastColor,
          selected: L.daySelectedColor,
          normal: L.dayColor,
          rangeHover: L.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, L, k.isWithinHoverRange],
    )
  return e.createElement(
    Xn,
    bt({}, k, {
      ref: u,
      dayHeight: L.daySize,
      dayWidth: L.daySize,
      background: F,
      color: H,
      fontFamily: L.fontFamily,
      fontWeight: L.dayFontWeight,
      fontSize: L.dayFontSize,
      daySelectedHoverBackground: L.daySelectedHoverBackground,
      dayHoverBackground: L.dayHoverBackground,
      dayHoverColor: L.dayHoverColor,
      daySelectedHoverColor: L.daySelectedHoverColor,
      borderAccessibilityColor: L.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        E +
        ',\n        0 1px 0 0 ' +
        E +
        ',\n        1px 1px 0 0 ' +
        E +
        ',\n        1px 0 0 0 ' +
        E +
        ' inset,\n        0 1px 0 0 ' +
        E +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + s.toDateString(),
      type: 'button',
    }),
    'function' == typeof D
      ? D(s)
      : e.createElement(
          en,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          d,
        ),
  )
}
var Zn,
  Kn,
  Jn = l(
    Zn ||
      (Zn = vt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  _n = s('div')(
    Kn ||
      (Kn = vt(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    Jn,
  ),
  $n = function (t) {
    var r = t.year,
      n = t.month,
      a = t.firstDayOfWeek,
      o = rt({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: r,
        month: n,
        firstDayOfWeek: a,
      }),
      i = o.days,
      d = o.weekdayLabels,
      s = o.monthLabel,
      c = an({daySize: sn, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      _n,
      null,
      e.createElement(
        en,
        {justifyContent: 'center', m: c.monthLabelMargin},
        e.createElement(Pn, {label: s}),
      ),
      e.createElement(
        _r,
        {daySizeGridTemplateColumns: c.daySize},
        d.map(function (t) {
          return e.createElement(
            en,
            {key: t, justifyContent: 'center', m: c.monthDayLabelMargin},
            e.createElement(On, {label: t}),
          )
        }),
      ),
      e.createElement(
        _r,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function (t, r) {
          return 'object' == typeof t
            ? e.createElement(Vn, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: r})
        }),
      ),
    )
  }
var ea,
  ta,
  ra,
  na = s('button')(
    ea ||
      (ea = vt(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  aa = s(function (t) {
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
  })(ra || (ra = vt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    return (
      e.rtl &&
      u(
        ta ||
          (ta = vt(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function oa(t) {
  var r = t.onResetDates,
    n = t.text,
    a = t.rtl,
    i = o(c),
    d = an({
      fontFamily: on,
      resetDatesIconColor: cn('mud', dn.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: cn('darcula', dn.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    na,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: r,
      onMouseUp: function (e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(aa, {
      height: d.resetDatesIconHeight,
      width: d.resetDatesIconWidth,
      color: d.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      Bn,
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
var ia,
  da,
  sa = s('svg')(da || (da = vt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    var t = e.angle
    return u(
      ia ||
        (ia = vt(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function ca(t) {
  var r = t.height,
    n = t.width,
    a = t.color,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    d = t.className,
    s = void 0 === d ? '' : d,
    c = (function (e) {
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
    sa,
    {
      width: n,
      height: r,
      color: a,
      className: s,
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
var ua,
  la = Pt(hr, mr, Xt, $t, Gt),
  pa = s('button')(
    ua ||
      (ua = vt(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    la,
  )
function fa(t) {
  var r = t.type,
    n = t.onClick,
    a = t.vertical,
    i = t.rtl,
    d = t.ariaLabel,
    s = o(c),
    u = an({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: cn('white', dn.white, s),
      navButtonBorder: '1px solid ' + cn('silverCloud', dn.silverCloud, s),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: cn('greey', dn.greey, s),
    })
  function l() {
    return 'next' !== r || a
      ? 'next' === r && a
        ? 'down'
        : 'prev' !== r || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return e.createElement(
    pa,
    {
      width: u.navButtonWidth,
      height: u.navButtonHeight,
      background: u.navButtonBackground,
      border: u.navButtonBorder,
      borderRight: 'up' !== l() || i ? u.navButtonBorder : 'unset',
      borderLeft: 'up' === l() && i ? 'unset' : u.navButtonBorder,
      p: u.navButtonPadding,
      type: 'button',
      'aria-label': d,
      onClick: n,
      onMouseUp: function (e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(ca, {
      width: u.navButtonIconWidth,
      height: u.navButtonIconHeight,
      color: u.navButtonIconColor,
      direction: l(),
    }),
  )
}
function ga(t) {
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
var ha,
  ma,
  ya = Pt($t, zt, Dr, kr, xr),
  ba = s('div')(
    ha ||
      (ha = vt(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    ya,
  ),
  va = s('button')(
    ma ||
      (ma = vt(
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
    ba,
    zt,
    zt,
  )
function wa(t) {
  var r = t.onClick,
    n = t.rtl,
    a = t.closeText,
    i = o(c),
    d = an({
      fontFamily: on,
      closeMargin: n ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: cn('silverCloud', dn.silverCloud, i),
      closeHoverColor: cn('darcula', dn.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    va,
    {
      onClick: r,
      color: d.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(ga, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      ba,
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
var Da = l(
    Ra ||
      (Ra = vt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  ka = Pt(Xt, $t, Nr, Vt, er, hr, Yr),
  xa = s('div')(
    La ||
      (La = vt(
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
    ka,
    function (e) {
      return (
        e.rtl &&
        u(Wa || (Wa = vt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    Da,
  ),
  Ca = s('div')(
    Ea ||
      (Ea = vt(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Ta = Pt(br, Sr),
  Sa = s(rn)(Fa || (Fa = vt(['\n  ', '\n'], ['\n  ', '\n'])), Ta),
  Ba = Pt(vr, mr),
  Ma = s(_r)(Ha || (Ha = vt(['\n  ', '\n'], ['\n  ', '\n'])), Ba)
var Ra,
  Wa,
  La,
  Ea,
  Fa,
  Ha,
  Pa,
  Oa,
  Ia,
  za,
  Ua,
  Na = e.forwardRef(function (t, r) {
    var n = t.startDate,
      a = t.endDate,
      s = t.minBookingDate,
      u = t.maxBookingDate,
      l = t.focusedInput,
      f = t.onDatesChange,
      g = t.dayLabelFormat,
      h = t.weekdayLabelFormat,
      m = t.monthLabelFormat,
      y = t.onDayRender,
      b = t.initialVisibleMonth,
      v = t.vertical,
      w = void 0 !== v && v,
      D = t.rtl,
      k = void 0 !== D && D,
      x = t.showResetDates,
      C = void 0 === x || x,
      T = t.showClose,
      S = void 0 === T || T,
      B = t.showSelectedDates,
      M = void 0 === B || B,
      R = t.exactMinBookingDays,
      W = void 0 !== R && R,
      L = t.isDateBlocked,
      E =
        void 0 === L
          ? function () {
              return !1
            }
          : L,
      F = t.minBookingDays,
      H = void 0 === F ? 1 : F,
      P = t.onClose,
      O = void 0 === P ? function () {} : P,
      I = t.numberOfMonths,
      z = t.firstDayOfWeek,
      U = t.displayFormat,
      N = void 0 === U ? 'MM/dd/yyyy' : U,
      Y = t.phrases,
      A = void 0 === Y ? Qr : Y,
      q = t.unavailableDates,
      G = yt({
        startDate: n,
        endDate: a,
        focusedInput: l,
        onDatesChange: f,
        minBookingDate: s,
        maxBookingDate: u,
        minBookingDays: H,
        isDateBlocked: E,
        exactMinBookingDays: W,
        unavailableDates: void 0 === q ? [] : q,
        initialVisibleMonth: b,
        numberOfMonths: I,
        firstDayOfWeek: z,
      }),
      j = G.activeMonths,
      X = G.isDateSelected,
      Q = G.isFirstOrLastSelectedDate,
      V = G.isDateHovered,
      Z = G.firstDayOfWeek,
      K = G.onDateSelect,
      J = G.onResetDates,
      _ = G.goToPreviousMonths,
      $ = G.goToNextMonths,
      ee = G.numberOfMonths,
      te = G.hoveredDate,
      re = G.onDateHover,
      ne = G.isDateFocused,
      ae = G.focusedDate,
      oe = G.onDateFocus,
      ie = G.isDateBlocked
    d(r, function () {
      return {
        onDateSelect: function (e) {
          K(e)
        },
      }
    })
    var de = i(null),
      se = o(c),
      ce = an({
        datepickerZIndex: null,
        datepickerBackground: '#ffffff',
        datepickerPadding: w ? '16px 16px 0' : '32px',
        datepickerBorderRadius: '2px',
        datepickerPosition: 'relative',
        datepickerWidth: 'fit-content',
        datepickerCloseWrapperPosition: w ? 'relative' : 'absolute',
        datepickerCloseWrapperDisplay: w ? 'flex' : 'block',
        datepickerCloseWrapperJustifyContent: w ? 'flex-end' : 'initial',
        datepickerCloseWrapperMargin: w ? '0 0 16px' : '0',
        datepickerCloseWrapperRight: k ? 'unset' : w ? '0' : '32px',
        datepickerCloseWrapperTop: 'unset',
        datepickerCloseWrapperLeft: k ? '32px' : 'unset',
        datepickerCloseWrapperBottom: 'unset',
        datepickerCloseWrapperZIndex: 1,
        datepickerSelectDateGridTemplateColumns: w ? '87px 50px 87px' : '126px 75px 126px',
        datepickerSelectDateGridTemplateRows: 'unset',
        datepickerSelectDateArrowIconWidth: '15px',
        datepickerSelectDateArrowIconHeight: '12px',
        datepickerSelectDateArrowIconColor: cn('silverCloud', dn.silverCloud, se),
        datepickerMonthsWrapperMargin: S || M ? (M ? '28px 0 0' : '48px 0 0') : 'unset',
        datepickerPreviousMonthButtonPosition: w ? 'relative' : 'absolute',
        datepickerPreviousMonthButtonTop: w ? 'unset' : '-5px',
        datepickerPreviousMonthButtonLeft: w ? 'unset' : '0',
        datepickerPreviousMonthButtonRight: 'unset',
        datepickerPreviousMonthButtonBottom: 'unset',
        datepickerNextMonthButtonPosition: w ? 'relative' : 'absolute',
        datepickerNextMonthButtonTop: w ? 'unset' : '-5px',
        datepickerNextMonthButtonLeft: 'unset',
        datepickerNextMonthButtonRight: w ? 'unset' : '0',
        datepickerNextMonthButtonBottom: 'unset',
        datepickerMonthsGridGap: w ? '32px' : '0 32px',
        datepickerMonthsGridOverflow: 'auto',
        datepickerMonthsGridHeight: w ? '50vh' : '100%',
        datepickerResetDatesWrapperMargin: w ? 'unset' : '32px 0 0',
        datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
      })
    function ue() {
      de && de.current && w && (de.current.scrollTop = 0)
    }
    function le() {
      $(), ue()
    }
    function pe() {
      _(), ue()
    }
    return e.createElement(
      p,
      {
        theme: function (e) {
          return e || {}
        },
      },
      e.createElement(
        zn.Provider,
        {
          value: {
            rtl: k,
            isDateFocused: ne,
            isDateSelected: X,
            isDateHovered: V,
            isFirstOrLastSelectedDate: Q,
            onDateFocus: oe,
            focusedDate: ae,
            onDateSelect: K,
            onDateHover: re,
            onDayRender: y,
            isDateBlocked: ie,
          },
        },
        e.createElement(
          xa,
          {
            background: ce.datepickerBackground,
            p: ce.datepickerPadding,
            borderRadius: ce.datepickerBorderRadius,
            position: ce.datepickerPosition,
            boxShadow: ce.datepickerBoxShadow,
            width: ce.datepickerWidth,
            zIndex: ce.datepickerZIndex,
            rtl: k,
          },
          S &&
            e.createElement(
              Sa,
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
              e.createElement(wa, {onClick: O, rtl: k, closeText: A.close}),
            ),
          M &&
            e.createElement(
              Ca,
              null,
              e.createElement(
                _r,
                {
                  'data-testid': 'SelectedDatesGrid',
                  gridTemplateColumns: ce.datepickerSelectDateGridTemplateColumns,
                  gridTemplateRows: ce.datepickerSelectDateGridTemplateRows,
                },
                e.createElement(Rn, {
                  title: A.datepickerStartDateLabel,
                  date: ft(n, N, A.datepickerStartDatePlaceholder),
                  isActive: l === ht,
                  vertical: w,
                }),
                e.createElement(
                  en,
                  {justifyContent: 'center', alignItems: 'center'},
                  e.createElement(kn, {
                    height: ce.datepickerSelectDateArrowIconHeight,
                    width: ce.datepickerSelectDateArrowIconWidth,
                    iconColor: ce.datepickerSelectDateArrowIconColor,
                  }),
                ),
                e.createElement(Rn, {
                  title: A.datepickerEndDateLabel,
                  date: ft(a, N, A.datepickerEndDatePlaceholder),
                  isActive: l === mt,
                  vertical: w,
                }),
              ),
            ),
          e.createElement(
            rn,
            {position: 'relative'},
            e.createElement(
              rn,
              {m: ce.datepickerMonthsWrapperMargin},
              e.createElement(
                Ma,
                {
                  'data-testid': 'MonthGrid',
                  overflow: ce.datepickerMonthsGridOverflow,
                  height: ce.datepickerMonthsGridHeight,
                  gridTemplateColumns: w ? '1fr' : 'repeat(' + ee + ', 1fr)',
                  gridGap: ce.datepickerMonthsGridGap,
                  pr: k ? '1px' : '0',
                  ref: de,
                  onMouseLeave: function () {
                    te && re(null)
                  },
                },
                j.map(function (t) {
                  return e.createElement($n, {
                    key: 'month-' + t.year + '-' + t.month,
                    year: t.year,
                    month: t.month,
                    firstDayOfWeek: Z,
                    dayLabelFormat: g || $e,
                    weekdayLabelFormat: h || et,
                    monthLabelFormat: m || tt,
                  })
                }),
              ),
            ),
            e.createElement(
              en,
              {alignItems: 'center'},
              e.createElement(
                e.Fragment,
                null,
                C &&
                  e.createElement(
                    en,
                    {flex: '1', m: ce.datepickerResetDatesWrapperMargin},
                    e.createElement(oa, {rtl: k, onResetDates: J, text: A.resetDates}),
                  ),
                e.createElement(
                  rn,
                  {
                    position: ce.datepickerPreviousMonthButtonPosition,
                    top: ce.datepickerPreviousMonthButtonTop,
                    left: ce.datepickerPreviousMonthButtonLeft,
                    right: ce.datepickerPreviousMonthButtonRight,
                    bottom: ce.datepickerPreviousMonthButtonBottom,
                  },
                  e.createElement(fa, {
                    type: 'prev',
                    onClick: k && !w ? le : pe,
                    vertical: w,
                    rtl: k,
                    ariaLabel: 'Previous month',
                  }),
                ),
                e.createElement(
                  rn,
                  {
                    position: ce.datepickerNextMonthButtonPosition,
                    top: ce.datepickerNextMonthButtonTop,
                    left: ce.datepickerNextMonthButtonLeft,
                    right: ce.datepickerNextMonthButtonRight,
                    bottom: ce.datepickerNextMonthButtonBottom,
                  },
                  e.createElement(fa, {
                    type: 'next',
                    onClick: k && !w ? pe : le,
                    vertical: w,
                    rtl: k,
                    ariaLabel: 'Next month',
                  }),
                ),
              ),
            ),
          ),
        ),
      ),
    )
  }),
  Ya = s(rn)(Oa || (Oa = vt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Yr, function (e) {
    return (
      e.rtl &&
      u(Pa || (Pa = vt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Aa = Pt(zt, wr),
  qa = s(kn)(za || (za = vt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Aa, function (e) {
    return (
      e.rtl &&
      u(
        Ia ||
          (Ia = vt(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Ga = Pt(Xt, Gt, Nr),
  ja = s(_r)(Ua || (Ua = vt(['\n  ', '\n'], ['\n  ', '\n'])), Ga)
function Xa(t) {
  var n = t.startDate,
    a = t.endDate,
    d = t.minBookingDate,
    s = t.maxBookingDate,
    u = t.firstDayOfWeek,
    l = t.onFocusChange,
    f = t.numberOfMonths,
    g = t.focusedInput,
    h = t.onDatesChange,
    m = t.exactMinBookingDays,
    y = t.dayLabelFormat,
    b = t.weekdayLabelFormat,
    v = t.monthLabelFormat,
    w = t.onDayRender,
    D = t.initialVisibleMonth,
    k = t.showClose,
    x = void 0 === k || k,
    C = t.showSelectedDates,
    T = void 0 === C || C,
    S = t.showResetDates,
    B = void 0 === S || S,
    M = t.vertical,
    R = void 0 !== M && M,
    W = t.rtl,
    L = void 0 !== W && W,
    E = t.isDateBlocked,
    F =
      void 0 === E
        ? function () {
            return !1
          }
        : E,
    H = t.minBookingDays,
    P = void 0 === H ? 1 : H,
    O = t.onClose,
    I = void 0 === O ? function () {} : O,
    z = t.showStartDateCalendarIcon,
    U = void 0 === z || z,
    N = t.showEndDateCalendarIcon,
    Y = void 0 === N || N,
    A = t.displayFormat,
    q = void 0 === A ? 'MM/dd/yyyy' : A,
    G = t.phrases,
    j = void 0 === G ? Vr : G,
    X = t.placement,
    Q = void 0 === X ? 'bottom' : X,
    V = t.startDateInputId,
    Z = void 0 === V ? 'startDate' : V,
    K = t.endDateInputId,
    J = void 0 === K ? 'endDate' : K,
    _ = t.unavailableDates,
    $ = void 0 === _ ? [] : _,
    ee = i(null),
    te = i(null),
    re = o(c),
    ne = an(
      bt(
        {
          dateRangeZIndex: null,
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: R ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeGridTemplateRows: 'unset',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: cn('graci', dn.graci, re),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: R ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: R ? (L ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        (function (e, t) {
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
        })(Q, L),
      ),
    )
  function ae(e) {
    null !== g && te && te.current && !te.current.contains(e.target) && l(null)
  }
  function oe(e) {
    ee && ee.current && ee.current.onDateSelect && ee.current.onDateSelect(e)
  }
  return (
    r(function () {
      return (
        'undefined' != typeof window && window.addEventListener('click', ae),
        function () {
          window.removeEventListener('click', ae)
        }
      )
    }),
    e.createElement(
      p,
      {
        theme: function (e) {
          return e || {}
        },
      },
      e.createElement(
        Ya,
        {zIndex: ne.dateRangeZIndex, rtl: L, position: 'relative', ref: te},
        e.createElement(
          ja,
          {
            'data-testid': 'DateRangeInputGrid',
            background: ne.dateRangeBackground,
            gridTemplateColumns: ne.dateRangeGridTemplateColumns,
            gridTemplateRows: ne.dateRangeGridTemplateRows,
            border: ne.dateRangeBorder,
            borderRadius: ne.dateRangeBorderRadius,
          },
          e.createElement(Dn, {
            id: Z,
            ariaLabel: j.startDateAriaLabel,
            placeholder: j.startDatePlaceholder,
            value: ft(n, q, ''),
            onClick: function () {
              return l(ht)
            },
            showCalendarIcon: U,
            vertical: R,
            isActive: g === ht,
            padding: ne.dateRangeStartDateInputPadding,
            rtl: L,
            onChange: oe,
            dateFormat: q,
          }),
          e.createElement(
            en,
            {alignItems: 'center', justifyContent: 'center'},
            e.createElement(qa, {
              width: ne.dateRangeArrowIconWidth,
              height: ne.dateRangeArrowIconHeight,
              color: ne.dateRangeArrowIconColor,
              opacity: ne.dateRangeArrowIconOpacity,
              rtl: L,
            }),
          ),
          e.createElement(Dn, {
            id: J,
            ariaLabel: j.endDateAriaLabel,
            placeholder: j.endDatePlaceholder,
            value: ft(a, q, ''),
            onClick: function () {
              return l(n ? mt : ht)
            },
            showCalendarIcon: Y,
            vertical: R,
            isActive: g === mt,
            padding: ne.dateRangeEndDateInputPadding,
            rtl: L,
            disableAccessibility: g === ht,
            onChange: oe,
            dateFormat: q,
          }),
        ),
        e.createElement(
          rn,
          {
            position: ne.dateRangeDatepickerWrapperPosition,
            bottom: ne.dateRangeDatepickerWrapperBottom,
            left: ne.dateRangeDatepickerWrapperLeft,
            top: ne.dateRangeDatepickerWrapperTop,
            right: ne.dateRangeDatepickerWrapperRight,
          },
          null !== g &&
            e.createElement(Na, {
              onClose: function () {
                I(), l(null)
              },
              startDate: n,
              endDate: a,
              minBookingDate: d,
              maxBookingDate: s,
              firstDayOfWeek: u,
              numberOfMonths: f,
              focusedInput: g,
              displayFormat: q,
              onDatesChange: h,
              minBookingDays: P,
              isDateBlocked: F,
              exactMinBookingDays: m,
              showResetDates: B,
              vertical: R,
              showSelectedDates: T,
              showClose: x,
              rtl: L,
              dayLabelFormat: y,
              weekdayLabelFormat: b,
              monthLabelFormat: v,
              onDayRender: w,
              phrases: j,
              unavailableDates: $,
              ref: ee,
              initialVisibleMonth: D,
            }),
        ),
      ),
    )
  )
}
var Qa,
  Va,
  Za = s(rn)(Va || (Va = vt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Yr, function (e) {
    return (
      e.rtl &&
      u(Qa || (Qa = vt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function Ka(t) {
  var n = t.date,
    a = t.minBookingDate,
    o = t.maxBookingDate,
    d = t.firstDayOfWeek,
    s = t.onFocusChange,
    c = t.showDatepicker,
    u = t.onDateChange,
    l = t.dayLabelFormat,
    f = t.weekdayLabelFormat,
    g = t.monthLabelFormat,
    h = t.onDayRender,
    m = t.initialVisibleMonth,
    y = t.numberOfMonths,
    b = void 0 === y ? 1 : y,
    v = t.showClose,
    w = void 0 === v || v,
    D = t.showResetDate,
    k = void 0 === D || D,
    x = t.vertical,
    C = void 0 !== x && x,
    T = t.rtl,
    S = void 0 !== T && T,
    B = t.isDateBlocked,
    M =
      void 0 === B
        ? function () {
            return !1
          }
        : B,
    R = t.onClose,
    W = void 0 === R ? function () {} : R,
    L = t.showCalendarIcon,
    E = void 0 === L || L,
    F = t.displayFormat,
    H = void 0 === F ? 'MM/dd/yyyy' : F,
    P = t.phrases,
    O = void 0 === P ? Zr : P,
    I = t.placement,
    z = void 0 === I ? 'bottom' : I,
    U = t.inputId,
    N = void 0 === U ? 'startDate' : U,
    Y = t.unavailableDates,
    A = void 0 === Y ? [] : Y,
    q = i(null),
    G = i(null),
    j = an(
      bt(
        {
          dateSingleZIndex: null,
          dateSingleInputPadding: C ? (S ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        (function (e, t) {
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
        })(z, S),
      ),
    )
  function X(e) {
    c && G && G.current && !G.current.contains(e.target) && s(!1)
  }
  return (
    r(function () {
      return (
        'undefined' != typeof window && window.addEventListener('click', X),
        function () {
          window.removeEventListener('click', X)
        }
      )
    }),
    e.createElement(
      p,
      {
        theme: function (e) {
          return e || {}
        },
      },
      e.createElement(
        Za,
        {zIndex: j.dateSingleZIndex, rtl: S, position: 'relative', ref: G},
        e.createElement(Dn, {
          id: N,
          ariaLabel: O.dateAriaLabel,
          placeholder: O.datePlaceholder,
          value: ft(n, H, ''),
          onClick: function () {
            return s(!0)
          },
          showCalendarIcon: E,
          vertical: C,
          isActive: !1,
          padding: j.dateSingleInputPadding,
          rtl: S,
          onChange: function (e) {
            q && q.current && q.current.onDateSelect && q.current.onDateSelect(e)
          },
          dateFormat: H,
        }),
        e.createElement(
          rn,
          {
            position: j.dateSingleDatepickerWrapperPosition,
            bottom: j.dateSingleDatepickerWrapperBottom,
            left: j.dateSingleDatepickerWrapperLeft,
            top: j.dateSingleDatepickerWrapperTop,
            right: j.dateSingleDatepickerWrapperRight,
          },
          c &&
            e.createElement(Na, {
              exactMinBookingDays: !0,
              minBookingDays: 1,
              onClose: function () {
                W(), s(!1)
              },
              startDate: n,
              endDate: n,
              minBookingDate: a,
              maxBookingDate: o,
              firstDayOfWeek: d,
              numberOfMonths: b,
              focusedInput: c ? ht : null,
              displayFormat: H,
              onDatesChange: function (e) {
                var t = e.focusedInput,
                  r = e.startDate
                u({showDatepicker: null !== t, date: r})
              },
              isDateBlocked: M,
              showResetDates: k,
              vertical: C,
              showSelectedDates: !1,
              showClose: w,
              rtl: S,
              dayLabelFormat: l,
              weekdayLabelFormat: f,
              monthLabelFormat: g,
              onDayRender: h,
              phrases: O,
              ref: q,
              unavailableDates: A,
              initialVisibleMonth: m,
            }),
        ),
      ),
    )
  )
}
export {
  Xa as DateRangeInput,
  Ka as DateSingleInput,
  Na as Datepicker,
  mt as END_DATE,
  ht as START_DATE,
  Vr as dateRangeInputPhrases,
  Zr as dateSingleInputPhrases,
  Qr as datepickerPhrases,
}
