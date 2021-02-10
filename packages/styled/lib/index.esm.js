import e, {
  useState as t,
  useEffect as n,
  useCallback as r,
  useMemo as a,
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
    var n = t || {},
      r = n.width ? String(n.width) : e.defaultWidth
    return e.formats[r] || e.formats[e.defaultWidth]
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
  return function (t, n) {
    var r,
      a = n || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth,
        i = a.width ? String(a.width) : o
      r = e.formattingValues[i] || e.formattingValues[o]
    } else {
      var d = e.defaultWidth,
        s = a.width ? String(a.width) : e.defaultWidth
      r = e.values[s] || e.values[d]
    }
    return r[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
function v(e) {
  return function (t, n) {
    var r = String(t),
      a = n || {},
      o = a.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      d = r.match(i)
    if (!d) return null
    var s,
      c = d[0],
      u = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (s =
        '[object Array]' === Object.prototype.toString.call(u)
          ? (function (e, t) {
              for (var n = 0; n < e.length; n++) if (t(e[n])) return n
            })(u, function (e) {
              return e.test(c)
            })
          : (function (e, t) {
              for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n
            })(u, function (e) {
              return e.test(c)
            })),
      (s = e.valueCallback ? e.valueCallback(s) : s),
      {value: (s = a.valueCallback ? a.valueCallback(s) : s), rest: r.slice(c.length)}
    )
  }
}
var b,
  w = {
    code: 'en-US',
    formatDistance: function (e, t, n) {
      var r
      return (
        (n = n || {}),
        (r =
          'string' == typeof f[e] ? f[e] : 1 === t ? f[e].one : f[e].other.replace('{{count}}', t)),
        n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
      )
    },
    formatLong: h,
    formatRelative: function (e, t, n, r) {
      return m[e]
    },
    localize: {
      ordinalNumber: function (e, t) {
        var n = Number(e),
          r = n % 100
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + 'st'
            case 2:
              return n + 'nd'
            case 3:
              return n + 'rd'
          }
        return n + 'th'
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
        ((b = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (e) {
            return parseInt(e, 10)
          },
        }),
        function (e, t) {
          var n = String(e),
            r = t || {},
            a = n.match(b.matchPattern)
          if (!a) return null
          var o = a[0],
            i = n.match(b.parsePattern)
          if (!i) return null
          var d = b.valueCallback ? b.valueCallback(i[0]) : i[0]
          return {value: (d = r.valueCallback ? r.valueCallback(d) : d), rest: n.slice(o.length)}
        }),
      era: v({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: v({
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
      month: v({
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
      day: v({
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
      dayPeriod: v({
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
  var n = x(e).getTime(),
    r = D(t)
  return new Date(n + r)
}
function T(e, t) {
  k(2, arguments)
  var n = D(t)
  return C(e, -n)
}
function S(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var n in (t = t || {})) t.hasOwnProperty(n) && (e[n] = t[n])
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
var L = {
  p: M,
  P: function (e, t) {
    var n,
      r = e.match(/(P+)(p+)?/),
      a = r[1],
      o = r[2]
    if (!o) return B(e, t)
    switch (a) {
      case 'P':
        n = t.dateTime({width: 'short'})
        break
      case 'PP':
        n = t.dateTime({width: 'medium'})
        break
      case 'PPP':
        n = t.dateTime({width: 'long'})
        break
      case 'PPPP':
      default:
        n = t.dateTime({width: 'full'})
    }
    return n.replace('{{date}}', B(a, t)).replace('{{time}}', M(o, t))
  },
}
function W(e) {
  return e.getTime() % 6e4
}
function R(e) {
  var t = new Date(e.getTime()),
    n = Math.ceil(t.getTimezoneOffset())
  return t.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + W(t)) % 6e4 : W(t))
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
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == n.weekStartsOn ? o : D(n.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = x(e),
    s = d.getUTCDay(),
    c = (s < i ? 7 : 0) + s - i
  return d.setUTCDate(d.getUTCDate() - c), d.setUTCHours(0, 0, 0, 0), d
}
function z(e, t) {
  k(1, arguments)
  var n = x(e, t),
    r = n.getUTCFullYear(),
    a = t || {},
    o = a.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    d = null == i ? 1 : D(i),
    s = null == a.firstWeekContainsDate ? d : D(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(r + 1, 0, s), c.setUTCHours(0, 0, 0, 0)
  var u = I(c, t),
    l = new Date(0)
  l.setUTCFullYear(r, 0, s), l.setUTCHours(0, 0, 0, 0)
  var p = I(l, t)
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= p.getTime() ? r : r - 1
}
function U(e, t, n) {
  k(2, arguments)
  var r = n || {},
    a = r.locale,
    o = a && a.options && a.options.weekStartsOn,
    i = null == o ? 0 : D(o),
    d = null == r.weekStartsOn ? i : D(r.weekStartsOn)
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
    n = x(e),
    r = n.getUTCDay(),
    a = (r < t ? 7 : 0) + r - t
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function Y(e) {
  k(1, arguments)
  var t = x(e),
    n = t.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = N(r),
    o = new Date(0)
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = N(o)
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}
function A(e) {
  k(1, arguments)
  var t = Y(e),
    n = new Date(0)
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = N(n)
  return r
}
function q(e) {
  k(1, arguments)
  var t = x(e),
    n = N(t).getTime() - A(t).getTime()
  return Math.round(n / 6048e5) + 1
}
function G(e, t) {
  k(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    o = null == a ? 1 : D(a),
    i = null == n.firstWeekContainsDate ? o : D(n.firstWeekContainsDate),
    d = z(e, t),
    s = new Date(0)
  s.setUTCFullYear(d, 0, i), s.setUTCHours(0, 0, 0, 0)
  var c = I(s, t)
  return c
}
function j(e, t) {
  k(1, arguments)
  var n = x(e),
    r = I(n, t).getTime() - G(n, t).getTime()
  return Math.round(r / 6048e5) + 1
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
  ne = /^\d/,
  re = /^\d{1,2}/,
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
function me(e, t, n) {
  var r = t.match(e)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: t.slice(r[0].length)}
}
function ye(e, t) {
  var n = t.match(e)
  return n
    ? 'Z' === n[0]
      ? {value: 0, rest: t.slice(1)}
      : {
          value:
            ('+' === n[1] ? 1 : -1) *
            (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
              6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
              1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
          rest: t.slice(n[0].length),
        }
    : null
}
function ve(e, t) {
  return me(ie, e, t)
}
function be(e, t, n) {
  switch (e) {
    case 1:
      return me(ne, t, n)
    case 2:
      return me(re, t, n)
    case 3:
      return me(ae, t, n)
    case 4:
      return me(oe, t, n)
    default:
      return me(new RegExp('^\\d{1,' + e + '}'), t, n)
  }
}
function we(e, t, n) {
  switch (e) {
    case 1:
      return me(de, t, n)
    case 2:
      return me(se, t, n)
    case 3:
      return me(ce, t, n)
    case 4:
      return me(ue, t, n)
    default:
      return me(new RegExp('^-?\\d{1,' + e + '}'), t, n)
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
  var n,
    r = t > 0,
    a = r ? t : 1 - t
  if (a <= 50) n = e || 100
  else {
    var o = a + 50
    n = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0)
  }
  return r ? n : 1 - n
}
var xe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Ce = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function Te(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var Se = {
    G: {
      priority: 140,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'G':
          case 'GG':
          case 'GGG':
            return n.era(e, {width: 'abbreviated'}) || n.era(e, {width: 'narrow'})
          case 'GGGGG':
            return n.era(e, {width: 'narrow'})
          case 'GGGG':
          default:
            return (
              n.era(e, {width: 'wide'}) ||
              n.era(e, {width: 'abbreviated'}) ||
              n.era(e, {width: 'narrow'})
            )
        }
      },
      set: function (e, t, n, r) {
        return (t.era = n), e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function (e, t, n, r) {
        var a = function (e) {
          return {year: e, isTwoDigitYear: 'yy' === t}
        }
        switch (t) {
          case 'y':
            return be(4, e, a)
          case 'yo':
            return n.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return be(t.length, e, a)
        }
      },
      validate: function (e, t, n) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, n, r) {
        var a = e.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var o = ke(n.year, a)
          return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
        }
        var i = 'era' in t && 1 !== t.era ? 1 - n.year : n.year
        return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function (e, t, n, r) {
        var a = function (e) {
          return {year: e, isTwoDigitYear: 'YY' === t}
        }
        switch (t) {
          case 'Y':
            return be(4, e, a)
          case 'Yo':
            return n.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return be(t.length, e, a)
        }
      },
      validate: function (e, t, n) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, n, r) {
        var a = z(e, r)
        if (n.isTwoDigitYear) {
          var o = ke(n.year, a)
          return e.setUTCFullYear(o, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), I(e, r)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - n.year : n.year
        return e.setUTCFullYear(i, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), I(e, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function (e, t, n, r) {
        return we('R' === t ? 4 : t.length, e)
      },
      set: function (e, t, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), N(a)
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
      parse: function (e, t, n, r) {
        return we('u' === t ? 4 : t.length, e)
      },
      set: function (e, t, n, r) {
        return e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'Q':
          case 'QQ':
            return be(t.length, e)
          case 'Qo':
            return n.ordinalNumber(e, {unit: 'quarter'})
          case 'QQQ':
            return (
              n.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.quarter(e, {width: 'narrow', context: 'formatting'})
            )
          case 'QQQQQ':
            return n.quarter(e, {width: 'narrow', context: 'formatting'})
          case 'QQQQ':
          default:
            return (
              n.quarter(e, {width: 'wide', context: 'formatting'}) ||
              n.quarter(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.quarter(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 4
      },
      set: function (e, t, n, r) {
        return e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'q':
          case 'qq':
            return be(t.length, e)
          case 'qo':
            return n.ordinalNumber(e, {unit: 'quarter'})
          case 'qqq':
            return (
              n.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.quarter(e, {width: 'narrow', context: 'standalone'})
            )
          case 'qqqqq':
            return n.quarter(e, {width: 'narrow', context: 'standalone'})
          case 'qqqq':
          default:
            return (
              n.quarter(e, {width: 'wide', context: 'standalone'}) ||
              n.quarter(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.quarter(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 4
      },
      set: function (e, t, n, r) {
        return e.setUTCMonth(3 * (n - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function (e, t, n, r) {
        var a = function (e) {
          return e - 1
        }
        switch (t) {
          case 'M':
            return me(X, e, a)
          case 'MM':
            return be(2, e, a)
          case 'Mo':
            return n.ordinalNumber(e, {unit: 'month', valueCallback: a})
          case 'MMM':
            return (
              n.month(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.month(e, {width: 'narrow', context: 'formatting'})
            )
          case 'MMMMM':
            return n.month(e, {width: 'narrow', context: 'formatting'})
          case 'MMMM':
          default:
            return (
              n.month(e, {width: 'wide', context: 'formatting'}) ||
              n.month(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.month(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, n, r) {
        return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function (e, t, n, r) {
        var a = function (e) {
          return e - 1
        }
        switch (t) {
          case 'L':
            return me(X, e, a)
          case 'LL':
            return be(2, e, a)
          case 'Lo':
            return n.ordinalNumber(e, {unit: 'month', valueCallback: a})
          case 'LLL':
            return (
              n.month(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.month(e, {width: 'narrow', context: 'standalone'})
            )
          case 'LLLLL':
            return n.month(e, {width: 'narrow', context: 'standalone'})
          case 'LLLL':
          default:
            return (
              n.month(e, {width: 'wide', context: 'standalone'}) ||
              n.month(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.month(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, n, r) {
        return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'w':
            return me(Z, e)
          case 'wo':
            return n.ordinalNumber(e, {unit: 'week'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, n, r) {
        return I(
          (function (e, t, n) {
            k(2, arguments)
            var r = x(e),
              a = D(t),
              o = j(r, n) - a
            return r.setUTCDate(r.getUTCDate() - 7 * o), r
          })(e, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'I':
            return me(Z, e)
          case 'Io':
            return n.ordinalNumber(e, {unit: 'week'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, n, r) {
        return N(
          (function (e, t) {
            k(2, arguments)
            var n = x(e),
              r = D(t),
              a = q(n) - r
            return n.setUTCDate(n.getUTCDate() - 7 * a), n
          })(e, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'd':
            return me(Q, e)
          case 'do':
            return n.ordinalNumber(e, {unit: 'date'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        var r = Te(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return r ? t >= 1 && t <= Ce[a] : t >= 1 && t <= xe[a]
      },
      set: function (e, t, n, r) {
        return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'D':
          case 'DD':
            return me(V, e)
          case 'Do':
            return n.ordinalNumber(e, {unit: 'date'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return Te(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
      },
      set: function (e, t, n, r) {
        return e.setUTCMonth(0, n), e.setUTCHours(0, 0, 0, 0), e
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
      parse: function (e, t, n, r) {
        switch (t) {
          case 'E':
          case 'EE':
          case 'EEE':
            return (
              n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEEE':
            return n.day(e, {width: 'narrow', context: 'formatting'})
          case 'EEEEEE':
            return (
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEE':
          default:
            return (
              n.day(e, {width: 'wide', context: 'formatting'}) ||
              n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, n, r) {
        return (e = U(e, n, r)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function (e, t, n, r) {
        var a = function (e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + r.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'e':
          case 'ee':
            return be(t.length, e, a)
          case 'eo':
            return n.ordinalNumber(e, {unit: 'day', valueCallback: a})
          case 'eee':
            return (
              n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'eeeee':
            return n.day(e, {width: 'narrow', context: 'formatting'})
          case 'eeeeee':
            return (
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
          case 'eeee':
          default:
            return (
              n.day(e, {width: 'wide', context: 'formatting'}) ||
              n.day(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(e, {width: 'short', context: 'formatting'}) ||
              n.day(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, n, r) {
        return (e = U(e, n, r)).setUTCHours(0, 0, 0, 0), e
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
      parse: function (e, t, n, r) {
        var a = function (e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + r.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'c':
          case 'cc':
            return be(t.length, e, a)
          case 'co':
            return n.ordinalNumber(e, {unit: 'day', valueCallback: a})
          case 'ccc':
            return (
              n.day(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.day(e, {width: 'short', context: 'standalone'}) ||
              n.day(e, {width: 'narrow', context: 'standalone'})
            )
          case 'ccccc':
            return n.day(e, {width: 'narrow', context: 'standalone'})
          case 'cccccc':
            return (
              n.day(e, {width: 'short', context: 'standalone'}) ||
              n.day(e, {width: 'narrow', context: 'standalone'})
            )
          case 'cccc':
          default:
            return (
              n.day(e, {width: 'wide', context: 'standalone'}) ||
              n.day(e, {width: 'abbreviated', context: 'standalone'}) ||
              n.day(e, {width: 'short', context: 'standalone'}) ||
              n.day(e, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 6
      },
      set: function (e, t, n, r) {
        return (e = U(e, n, r)).setUTCHours(0, 0, 0, 0), e
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
      parse: function (e, t, n, r) {
        var a = function (e) {
          return 0 === e ? 7 : e
        }
        switch (t) {
          case 'i':
          case 'ii':
            return be(t.length, e)
          case 'io':
            return n.ordinalNumber(e, {unit: 'day'})
          case 'iii':
            return (
              n.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiiii':
            return n.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
          case 'iiiiii':
            return (
              n.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiii':
          default:
            return (
              n.day(e, {width: 'wide', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(e, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 7
      },
      set: function (e, t, n, r) {
        return (
          (e = (function (e, t) {
            k(2, arguments)
            var n = D(t)
            n % 7 == 0 && (n -= 7)
            var r = 1,
              a = x(e),
              o = a.getUTCDay(),
              i = n % 7,
              d = (i + 7) % 7,
              s = (d < r ? 7 : 0) + n - o
            return a.setUTCDate(a.getUTCDate() + s), a
          })(e, n, r)).setUTCHours(0, 0, 0, 0),
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
      parse: function (e, t, n, r) {
        switch (t) {
          case 'a':
          case 'aa':
          case 'aaa':
            return (
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'aaaaa':
            return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'aaaa':
          default:
            return (
              n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, n, r) {
        return e.setUTCHours(De(n), 0, 0, 0), e
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'b':
          case 'bb':
          case 'bbb':
            return (
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'bbbbb':
            return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'bbbb':
          default:
            return (
              n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, n, r) {
        return e.setUTCHours(De(n), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'B':
          case 'BB':
          case 'BBB':
            return (
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
          case 'BBBBB':
            return n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
          case 'BBBB':
          default:
            return (
              n.dayPeriod(e, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(e, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function (e, t, n, r) {
        return e.setUTCHours(De(n), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'h':
            return me($, e)
          case 'ho':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 12
      },
      set: function (e, t, n, r) {
        var a = e.getUTCHours() >= 12
        return (
          a && n < 12
            ? e.setUTCHours(n + 12, 0, 0, 0)
            : a || 12 !== n
            ? e.setUTCHours(n, 0, 0, 0)
            : e.setUTCHours(0, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
    },
    H: {
      priority: 70,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'H':
            return me(K, e)
          case 'Ho':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 23
      },
      set: function (e, t, n, r) {
        return e.setUTCHours(n, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'K':
            return me(_, e)
          case 'Ko':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 11
      },
      set: function (e, t, n, r) {
        return (
          e.getUTCHours() >= 12 && n < 12
            ? e.setUTCHours(n + 12, 0, 0, 0)
            : e.setUTCHours(n, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
    },
    k: {
      priority: 70,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'k':
            return me(J, e)
          case 'ko':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 24
      },
      set: function (e, t, n, r) {
        var a = n <= 24 ? n % 24 : n
        return e.setUTCHours(a, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'm':
            return me(ee, e)
          case 'mo':
            return n.ordinalNumber(e, {unit: 'minute'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 59
      },
      set: function (e, t, n, r) {
        return e.setUTCMinutes(n, 0, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function (e, t, n, r) {
        switch (t) {
          case 's':
            return me(te, e)
          case 'so':
            return n.ordinalNumber(e, {unit: 'second'})
          default:
            return be(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 0 && t <= 59
      },
      set: function (e, t, n, r) {
        return e.setUTCSeconds(n, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function (e, t, n, r) {
        return be(t.length, e, function (e) {
          return Math.floor(e * Math.pow(10, 3 - t.length))
        })
      },
      set: function (e, t, n, r) {
        return e.setUTCMilliseconds(n), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function (e, t, n, r) {
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
      set: function (e, t, n, r) {
        return t.timestampIsSet ? e : new Date(e.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function (e, t, n, r) {
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
      set: function (e, t, n, r) {
        return t.timestampIsSet ? e : new Date(e.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function (e, t, n, r) {
        return ve(e)
      },
      set: function (e, t, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function (e, t, n, r) {
        return ve(e)
      },
      set: function (e, t, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  Be = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Me = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Le = /^'([^]*?)'?$/,
  We = /''/g,
  Re = /\S/,
  Ee = /[a-zA-Z]/
function Fe(e, t) {
  if (t.timestampIsSet) return e
  var n = new Date(0)
  return (
    n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    n
  )
}
function He(e) {
  return e.match(Le)[1].replace(We, "'")
}
function Pe(e) {
  k(1, arguments)
  var t = x(e)
  return !isNaN(t)
}
function Oe(e, t) {
  for (var n = e < 0 ? '-' : '', r = Math.abs(e).toString(); r.length < t; ) r = '0' + r
  return n + r
}
var Ie = {
  G: function (e, t, n) {
    var r = e.getUTCFullYear() > 0 ? 1 : 0
    switch (t) {
      case 'G':
      case 'GG':
      case 'GGG':
        return n.era(r, {width: 'abbreviated'})
      case 'GGGGG':
        return n.era(r, {width: 'narrow'})
      case 'GGGG':
      default:
        return n.era(r, {width: 'wide'})
    }
  },
  y: function (e, t, n) {
    if ('yo' === t) {
      var r = e.getUTCFullYear(),
        a = r > 0 ? r : 1 - r
      return n.ordinalNumber(a, {unit: 'year'})
    }
    return (function (e, t) {
      var n = e.getUTCFullYear(),
        r = n > 0 ? n : 1 - n
      return Oe('yy' === t ? r % 100 : r, t.length)
    })(e, t)
  },
  Y: function (e, t, n, r) {
    var a = z(e, r),
      o = a > 0 ? a : 1 - a
    return 'YY' === t
      ? Oe(o % 100, 2)
      : 'Yo' === t
      ? n.ordinalNumber(o, {unit: 'year'})
      : Oe(o, t.length)
  },
  R: function (e, t) {
    return Oe(Y(e), t.length)
  },
  u: function (e, t) {
    return Oe(e.getUTCFullYear(), t.length)
  },
  Q: function (e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'Q':
        return String(r)
      case 'QQ':
        return Oe(r, 2)
      case 'Qo':
        return n.ordinalNumber(r, {unit: 'quarter'})
      case 'QQQ':
        return n.quarter(r, {width: 'abbreviated', context: 'formatting'})
      case 'QQQQQ':
        return n.quarter(r, {width: 'narrow', context: 'formatting'})
      case 'QQQQ':
      default:
        return n.quarter(r, {width: 'wide', context: 'formatting'})
    }
  },
  q: function (e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'q':
        return String(r)
      case 'qq':
        return Oe(r, 2)
      case 'qo':
        return n.ordinalNumber(r, {unit: 'quarter'})
      case 'qqq':
        return n.quarter(r, {width: 'abbreviated', context: 'standalone'})
      case 'qqqqq':
        return n.quarter(r, {width: 'narrow', context: 'standalone'})
      case 'qqqq':
      default:
        return n.quarter(r, {width: 'wide', context: 'standalone'})
    }
  },
  M: function (e, t, n) {
    var r = e.getUTCMonth()
    switch (t) {
      case 'M':
      case 'MM':
        return (function (e, t) {
          var n = e.getUTCMonth()
          return 'M' === t ? String(n + 1) : Oe(n + 1, 2)
        })(e, t)
      case 'Mo':
        return n.ordinalNumber(r + 1, {unit: 'month'})
      case 'MMM':
        return n.month(r, {width: 'abbreviated', context: 'formatting'})
      case 'MMMMM':
        return n.month(r, {width: 'narrow', context: 'formatting'})
      case 'MMMM':
      default:
        return n.month(r, {width: 'wide', context: 'formatting'})
    }
  },
  L: function (e, t, n) {
    var r = e.getUTCMonth()
    switch (t) {
      case 'L':
        return String(r + 1)
      case 'LL':
        return Oe(r + 1, 2)
      case 'Lo':
        return n.ordinalNumber(r + 1, {unit: 'month'})
      case 'LLL':
        return n.month(r, {width: 'abbreviated', context: 'standalone'})
      case 'LLLLL':
        return n.month(r, {width: 'narrow', context: 'standalone'})
      case 'LLLL':
      default:
        return n.month(r, {width: 'wide', context: 'standalone'})
    }
  },
  w: function (e, t, n, r) {
    var a = j(e, r)
    return 'wo' === t ? n.ordinalNumber(a, {unit: 'week'}) : Oe(a, t.length)
  },
  I: function (e, t, n) {
    var r = q(e)
    return 'Io' === t ? n.ordinalNumber(r, {unit: 'week'}) : Oe(r, t.length)
  },
  d: function (e, t, n) {
    return 'do' === t
      ? n.ordinalNumber(e.getUTCDate(), {unit: 'date'})
      : (function (e, t) {
          return Oe(e.getUTCDate(), t.length)
        })(e, t)
  },
  D: function (e, t, n) {
    var r = (function (e) {
      k(1, arguments)
      var t = x(e),
        n = t.getTime()
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      var r = t.getTime(),
        a = n - r
      return Math.floor(a / 864e5) + 1
    })(e)
    return 'Do' === t ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : Oe(r, t.length)
  },
  E: function (e, t, n) {
    var r = e.getUTCDay()
    switch (t) {
      case 'E':
      case 'EE':
      case 'EEE':
        return n.day(r, {width: 'abbreviated', context: 'formatting'})
      case 'EEEEE':
        return n.day(r, {width: 'narrow', context: 'formatting'})
      case 'EEEEEE':
        return n.day(r, {width: 'short', context: 'formatting'})
      case 'EEEE':
      default:
        return n.day(r, {width: 'wide', context: 'formatting'})
    }
  },
  e: function (e, t, n, r) {
    var a = e.getUTCDay(),
      o = (a - r.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'e':
        return String(o)
      case 'ee':
        return Oe(o, 2)
      case 'eo':
        return n.ordinalNumber(o, {unit: 'day'})
      case 'eee':
        return n.day(a, {width: 'abbreviated', context: 'formatting'})
      case 'eeeee':
        return n.day(a, {width: 'narrow', context: 'formatting'})
      case 'eeeeee':
        return n.day(a, {width: 'short', context: 'formatting'})
      case 'eeee':
      default:
        return n.day(a, {width: 'wide', context: 'formatting'})
    }
  },
  c: function (e, t, n, r) {
    var a = e.getUTCDay(),
      o = (a - r.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'c':
        return String(o)
      case 'cc':
        return Oe(o, t.length)
      case 'co':
        return n.ordinalNumber(o, {unit: 'day'})
      case 'ccc':
        return n.day(a, {width: 'abbreviated', context: 'standalone'})
      case 'ccccc':
        return n.day(a, {width: 'narrow', context: 'standalone'})
      case 'cccccc':
        return n.day(a, {width: 'short', context: 'standalone'})
      case 'cccc':
      default:
        return n.day(a, {width: 'wide', context: 'standalone'})
    }
  },
  i: function (e, t, n) {
    var r = e.getUTCDay(),
      a = 0 === r ? 7 : r
    switch (t) {
      case 'i':
        return String(a)
      case 'ii':
        return Oe(a, t.length)
      case 'io':
        return n.ordinalNumber(a, {unit: 'day'})
      case 'iii':
        return n.day(r, {width: 'abbreviated', context: 'formatting'})
      case 'iiiii':
        return n.day(r, {width: 'narrow', context: 'formatting'})
      case 'iiiiii':
        return n.day(r, {width: 'short', context: 'formatting'})
      case 'iiii':
      default:
        return n.day(r, {width: 'wide', context: 'formatting'})
    }
  },
  a: function (e, t, n) {
    var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
    switch (t) {
      case 'a':
      case 'aa':
      case 'aaa':
        return n.dayPeriod(r, {width: 'abbreviated', context: 'formatting'})
      case 'aaaaa':
        return n.dayPeriod(r, {width: 'narrow', context: 'formatting'})
      case 'aaaa':
      default:
        return n.dayPeriod(r, {width: 'wide', context: 'formatting'})
    }
  },
  b: function (e, t, n) {
    var r,
      a = e.getUTCHours()
    switch (((r = 12 === a ? 'noon' : 0 === a ? 'midnight' : a / 12 >= 1 ? 'pm' : 'am'), t)) {
      case 'b':
      case 'bb':
      case 'bbb':
        return n.dayPeriod(r, {width: 'abbreviated', context: 'formatting'})
      case 'bbbbb':
        return n.dayPeriod(r, {width: 'narrow', context: 'formatting'})
      case 'bbbb':
      default:
        return n.dayPeriod(r, {width: 'wide', context: 'formatting'})
    }
  },
  B: function (e, t, n) {
    var r,
      a = e.getUTCHours()
    switch (((r = a >= 17 ? 'evening' : a >= 12 ? 'afternoon' : a >= 4 ? 'morning' : 'night'), t)) {
      case 'B':
      case 'BB':
      case 'BBB':
        return n.dayPeriod(r, {width: 'abbreviated', context: 'formatting'})
      case 'BBBBB':
        return n.dayPeriod(r, {width: 'narrow', context: 'formatting'})
      case 'BBBB':
      default:
        return n.dayPeriod(r, {width: 'wide', context: 'formatting'})
    }
  },
  h: function (e, t, n) {
    if ('ho' === t) {
      var r = e.getUTCHours() % 12
      return 0 === r && (r = 12), n.ordinalNumber(r, {unit: 'hour'})
    }
    return (function (e, t) {
      return Oe(e.getUTCHours() % 12 || 12, t.length)
    })(e, t)
  },
  H: function (e, t, n) {
    return 'Ho' === t
      ? n.ordinalNumber(e.getUTCHours(), {unit: 'hour'})
      : (function (e, t) {
          return Oe(e.getUTCHours(), t.length)
        })(e, t)
  },
  K: function (e, t, n) {
    var r = e.getUTCHours() % 12
    return 'Ko' === t ? n.ordinalNumber(r, {unit: 'hour'}) : Oe(r, t.length)
  },
  k: function (e, t, n) {
    var r = e.getUTCHours()
    return 0 === r && (r = 24), 'ko' === t ? n.ordinalNumber(r, {unit: 'hour'}) : Oe(r, t.length)
  },
  m: function (e, t, n) {
    return 'mo' === t
      ? n.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'})
      : (function (e, t) {
          return Oe(e.getUTCMinutes(), t.length)
        })(e, t)
  },
  s: function (e, t, n) {
    return 'so' === t
      ? n.ordinalNumber(e.getUTCSeconds(), {unit: 'second'})
      : (function (e, t) {
          return Oe(e.getUTCSeconds(), t.length)
        })(e, t)
  },
  S: function (e, t) {
    return (function (e, t) {
      var n = t.length,
        r = e.getUTCMilliseconds()
      return Oe(Math.floor(r * Math.pow(10, n - 3)), t.length)
    })(e, t)
  },
  X: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
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
  x: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
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
  O: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
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
  z: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
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
  t: function (e, t, n, r) {
    var a = r._originalDate || e
    return Oe(Math.floor(a.getTime() / 1e3), t.length)
  },
  T: function (e, t, n, r) {
    return Oe((r._originalDate || e).getTime(), t.length)
  },
}
function ze(e, t) {
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = Math.floor(r / 60),
    o = r % 60
  if (0 === o) return n + String(a)
  var i = t || ''
  return n + String(a) + i + Oe(o, 2)
}
function Ue(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + Oe(Math.abs(e) / 60, 2) : Ne(e, t)
}
function Ne(e, t) {
  var n = t || '',
    r = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return r + Oe(Math.floor(a / 60), 2) + n + Oe(a % 60, 2)
}
var Ye = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Ae = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  qe = /^'([^]*?)'?$/,
  Ge = /''/g,
  je = /[a-zA-Z]/
function Xe(e, t, n) {
  k(2, arguments)
  var r = String(t),
    a = n || {},
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
  var f = R(p),
    g = T(p, f),
    h = {firstWeekContainsDate: s, weekStartsOn: l, locale: o, _originalDate: p},
    m = r
      .match(Ae)
      .map(function (e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, L[t])(e, o.formatLong, h) : e
      })
      .join('')
      .match(Ye)
      .map(function (e) {
        if ("''" === e) return "'"
        var t = e[0]
        if ("'" === t) return Qe(e)
        var n = Ie[t]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && P(e) && O(e),
            !a.useAdditionalDayOfYearTokens && H(e) && O(e),
            n(g, e, o.localize, h)
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
  var n = x(e),
    r = D(t)
  return isNaN(r) ? new Date(NaN) : r ? (n.setDate(n.getDate() + r), n) : n
}
function Ze(e, t) {
  k(1, arguments)
  var n = e || {},
    r = x(n.start),
    a = x(n.end),
    o = a.getTime()
  if (!(r.getTime() <= o)) throw new RangeError('Invalid interval')
  var i = [],
    d = r
  d.setHours(0, 0, 0, 0)
  var s = t && 'step' in t ? Number(t.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; d.getTime() <= o; ) i.push(x(d)), d.setDate(d.getDate() + s), d.setHours(0, 0, 0, 0)
  return i
}
function Ke(e, t) {
  k(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == n.weekStartsOn ? o : D(n.weekStartsOn)
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
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : D(a),
    i = null == n.weekStartsOn ? o : D(n.weekStartsOn)
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
function nt(e) {
  var t = e.year,
    n = e.month,
    r = e.firstDayOfWeek,
    o = void 0 === r ? 1 : r,
    i = e.dayLabelFormat,
    d = void 0 === i ? $e : i,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? et : s,
    u = e.monthLabelFormat,
    l = void 0 === u ? tt : u
  return {
    days: a(
      function () {
        return (function (e) {
          var t = e.year,
            n = e.month,
            r = e.firstDayOfWeek,
            a = void 0 === r ? 1 : r,
            o = e.dayLabelFormat,
            i =
              void 0 === o
                ? function (e) {
                    return Xe(e, 'dd')
                  }
                : o,
            d = new Date(t, n),
            s = Je(d),
            c = (function (e) {
              k(1, arguments)
              var t = x(e),
                n = t.getDay()
              return n
            })(s),
            u = (function (e) {
              k(1, arguments)
              var t = x(e),
                n = t.getMonth()
              return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
            })(d)
          return (function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length
            var r = Array(e),
              a = 0
            for (t = 0; t < n; t++)
              for (var o = arguments[t], i = 0, d = o.length; i < d; i++, a++) r[a] = o[i]
            return r
          })(
            Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
            Ze({start: s, end: u}).map(function (e) {
              return {date: e, dayLabel: i(e)}
            }),
          )
        })({year: t, month: n, firstDayOfWeek: o, dayLabelFormat: d})
      },
      [t, n, o, d],
    ),
    weekdayLabels: a(
      function () {
        return (function (e) {
          var t = void 0 === e ? {} : e,
            n = t.firstDayOfWeek,
            r = void 0 === n ? 1 : n,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function (e) {
                    return Xe(e, 'iiiiii')
                  }
                : a,
            i = new Date()
          return Ze({start: Ve(_e(i), r), end: Ve(Ke(i), r)}).reduce(function (e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: l(new Date(t, n)),
  }
}
function rt(e, t) {
  k(2, arguments)
  var n = x(e),
    r = x(t)
  return n.getTime() < r.getTime()
}
function at(e, t) {
  k(2, arguments)
  var n = x(e),
    r = x(t)
  return n.getTime() > r.getTime()
}
function ot(e, t) {
  k(2, arguments)
  var n = t || {},
    r = x(e).getTime(),
    a = x(n.start).getTime(),
    o = x(n.end).getTime()
  if (!(a <= o)) throw new RangeError('Invalid interval')
  return r >= a && r <= o
}
function it(e) {
  k(1, arguments)
  var t = x(e)
  return t.setHours(0, 0, 0, 0), t
}
function dt(e, t) {
  k(2, arguments)
  var n = it(e),
    r = it(t)
  return n.getTime() === r.getTime()
}
function st(e, t) {
  k(2, arguments)
  var n = x(e),
    r = D(t)
  if (isNaN(r)) return new Date(NaN)
  if (!r) return n
  var a = n.getDate(),
    o = new Date(n.getTime())
  o.setMonth(n.getMonth() + r + 1, 0)
  var i = o.getDate()
  return a >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n)
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
        n = t.getFullYear()
      return n
    })(t),
    month: (function (e) {
      k(1, arguments)
      var t = x(e),
        n = t.getMonth()
      return n
    })(t),
    date: t,
  }
}
function lt(e, t) {
  var n = ut(t || it(Date.now())),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function (e) {
        return (r = st(e[e.length - 1].date, 1)), e.concat([ut(r)])
      }, a)),
    a
  )
}
function pt(e, t, n, r) {
  var a = e[r ? (n > 0 ? 0 : e.length - r) : n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function (e) {
    return (
      (a = 0 === e.length ? st(a, n) : st(a, n >= 0 ? 1 : -1)),
      n > 0 ? e.concat([ut(a)]) : [ut(a)].concat(e)
    )
  }, [])
}
function ft(e, t, n) {
  return e && 'string' == typeof t ? Xe(e, t) : e && 'function' == typeof t ? t(e) : n
}
function gt(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    d = e.maxBookingDate,
    s = !i || !rt(t, Ve(i, -1)),
    c = !d || !at(Ve(t, a - 1), d)
  return !(
    (!t || 1 !== a || n || r(t)) &&
    ((t && a > 1 && !n && !o) || (t && a > 0 && o && s && c) || (t && a > 0 && o && !i && !d)
      ? Ze({start: t, end: Ve(t, a - 1)}).some(function (e) {
          return r(e)
        })
      : !t ||
        !n ||
        o ||
        rt(n, Ve(t, a - 1)) ||
        Ze({start: t, end: n}).some(function (e) {
          return r(e)
        }))
  )
}
var ht = 'startDate',
  mt = 'endDate'
function yt(e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.focusedInput,
    d = e.minBookingDate,
    s = e.maxBookingDate,
    c = e.onDatesChange,
    u = e.initialVisibleMonth,
    l = e.exactMinBookingDays,
    p = void 0 !== l && l,
    f = e.minBookingDays,
    g = void 0 === f ? 1 : f,
    h = e.numberOfMonths,
    m = void 0 === h ? 2 : h,
    y = e.firstDayOfWeek,
    v = void 0 === y ? 1 : y,
    b = e.isDateBlocked,
    w =
      void 0 === b
        ? function () {
            return !1
          }
        : b,
    D = e.unavailableDates,
    k = void 0 === D ? [] : D,
    x = e.changeActiveMonthOnSelect,
    C = void 0 === x || x,
    T = t(function () {
      return lt(m, a || u || null)
    }),
    S = T[0],
    B = T[1],
    M = t(null),
    L = M[0],
    W = M[1],
    R = t(a),
    E = R[0],
    F = R[1]
  n(function () {
    return (
      'undefined' != typeof window &&
        window.addEventListener &&
        window.addEventListener('keydown', I),
      function () {
        window.removeEventListener && window.removeEventListener('keydown', I)
      }
    )
  })
  var H = function (e) {
      return ct(k, e) || w(e)
    },
    P = function (e) {
      F(e), (!E || (E && !dt(e, E))) && B(lt(m, e))
    },
    O = function (e) {
      return (function (e) {
        var t = e.date,
          n = e.minBookingDate,
          r = e.maxBookingDate,
          a = e.isDateBlockedFn,
          o = e.startDate,
          i = e.endDate,
          d = e.minBookingDays,
          s = void 0 === d ? 1 : d,
          c = e.unavailableDates,
          u = void 0 === c ? [] : c,
          l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
          p = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
        return !!(
          ct(u, t) ||
          (l && rt(t, l)) ||
          (p && at(t, p)) ||
          (o && !i && s > 1 && ot(t, {start: o, end: Ve(o, s - 2)})) ||
          (a && a(t))
        )
      })({
        date: e,
        minBookingDate: d,
        maxBookingDate: s,
        startDate: a,
        endDate: o,
        minBookingDays: g,
        isDateBlockedFn: H,
      })
    }
  function I(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !E
    ) {
      var t = S[0]
      P(t.date), B(lt(m, t.date))
    }
  }
  var z = r(
      function () {
        B(pt(S, m, -1)), F(null)
      },
      [S, m],
    ),
    U = r(
      function () {
        B(pt(S, m, -1, 1)), F(null)
      },
      [S, m],
    ),
    N = r(
      function () {
        B(pt(S, m, 1)), F(null)
      },
      [S, m],
    ),
    Y = r(
      function () {
        B(pt(S, m, 1, 1)), F(null)
      },
      [S, m],
    ),
    A = r(
      function (e) {
        B(lt(m, e)), F(null)
      },
      [m],
    ),
    q = r(
      function (e) {
        void 0 === e && (e = 1), B(pt(S, m, -(12 * e - m + 1))), F(null)
      },
      [S, m],
    ),
    G = r(
      function (e) {
        void 0 === e && (e = 1), B(pt(S, m, 12 * e - m + 1)), F(null)
      },
      [S, m],
    )
  return {
    firstDayOfWeek: v,
    activeMonths: S,
    isDateSelected: function (e) {
      return (function (e, t, n) {
        return !(!t || !n) && ot(e, {start: t, end: n})
      })(e, a, o)
    },
    isDateHovered: function (e) {
      return (function (e) {
        var t = e.date,
          n = e.startDate,
          r = e.endDate,
          a = e.isDateBlocked,
          o = e.hoveredDate,
          i = e.minBookingDays
        return o && i > 1 && e.exactMinBookingDays && ot(t, {start: o, end: Ve(o, i - 1)})
          ? !Ze({start: o, end: Ve(o, i - 1)}).some(function (e) {
              return a(e)
            })
          : n && !r && o && ot(t, {start: n, end: Ve(n, i - 1)}) && dt(n, o) && i > 1
          ? !Ze({start: n, end: Ve(n, i - 1)}).some(function (e) {
              return a(e)
            })
          : !(
              !n ||
              r ||
              !o ||
              rt(o, n) ||
              !ot(t, {start: n, end: o}) ||
              Ze({start: n, end: o}).some(function (e) {
                return a(e)
              })
            )
      })({
        date: e,
        hoveredDate: L,
        startDate: a,
        endDate: o,
        minBookingDays: g,
        exactMinBookingDays: p,
        isDateBlocked: H,
      })
    },
    isFirstOrLastSelectedDate: function (e) {
      return (function (e, t, n) {
        return !!((t && dt(e, t)) || (n && dt(e, n)))
      })(e, a, o)
    },
    isStartDate: function (e) {
      return (function (e, t) {
        return !(!t || !dt(e, t))
      })(e, a)
    },
    isEndDate: function (e) {
      return (function (e, t) {
        return !(!t || !dt(e, t))
      })(e, o)
    },
    isDateBlocked: O,
    numberOfMonths: m,
    isDateFocused: function (e) {
      return !!E && dt(e, E)
    },
    focusedDate: E,
    hoveredDate: L,
    onResetDates: function () {
      c({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function (e) {
      if (e) {
        if (e) {
          var t = !O(e) || (a && dt(e, a)),
            n = !d || !rt(e, Ve(d, -1)),
            r = !s || !at(e, s),
            i = Ve(e, g - 1),
            c = !d || !rt(i, d),
            u = !s || !at(i, s),
            l = p && g > 1 && n && r && c && u,
            f = a && !o && !p && n && r,
            h = !(g > 1 && a) || ot(e, {start: a, end: Ve(a, g - 2)}),
            m = a && dt(e, a) && h
          t && (l || f || m) ? W(e) : null !== L && W(null)
        }
      } else W(null)
    },
    onDateSelect: function (e) {
      ;('endDate' === i || 'startDate' === i) &&
      g > 0 &&
      p &&
      gt({
        minBookingDays: g,
        exactMinBookingDays: p,
        minBookingDate: d,
        maxBookingDate: s,
        isDateBlocked: H,
        startDate: e,
        endDate: null,
      })
        ? c({startDate: e, endDate: Ve(e, g - 1), focusedInput: null})
        : (('endDate' === i && a && rt(e, a)) || ('startDate' === i && o && at(e, o))) &&
          !p &&
          gt({minBookingDays: g, isDateBlocked: H, startDate: e, endDate: null})
        ? c({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === i &&
          !p &&
          gt({minBookingDays: g, isDateBlocked: H, endDate: o, startDate: e})
        ? c({endDate: o, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === i &&
          !p &&
          gt({minBookingDays: g, isDateBlocked: H, endDate: null, startDate: e})
        ? c({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'endDate' === i &&
          a &&
          !rt(e, a) &&
          !p &&
          gt({minBookingDays: g, isDateBlocked: H, startDate: a, endDate: e}) &&
          c({startDate: a, endDate: e, focusedInput: null}),
        'endDate' !== i && (!E || (E && !dt(e, E))) && C && B(lt(m, e))
    },
    onDateFocus: P,
    goToPreviousMonths: z,
    goToPreviousMonthsByOneMonth: U,
    goToNextMonths: N,
    goToNextMonthsByOneMonth: Y,
    goToDate: A,
    goToPreviousYear: q,
    goToNextYear: G,
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
var vt = function () {
  return (vt =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function bt(e, t) {
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
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e]
          })
          .join('')
      )
        return !1
      var r = {}
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          r[e] = e
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      )
    } catch (e) {
      return !1
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var n, r, a = xt(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) Dt.call(n, i) && (a[i] = n[i])
          if (wt) {
            r = wt(n)
            for (var d = 0; d < r.length; d++) kt.call(n, r[d]) && (a[r[d]] = n[r[d]])
          }
        }
        return a
      },
  Tt = function (e, t) {
    var n = Ct({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && Ct(n, (((a = {})[r] = Ct(e[r], t[r])), a))
    }
    return n
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
    return Lt(t, e, e)
  },
  Lt = function (e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Wt = function e(t) {
    var n = {},
      r = function (e) {
        var r,
          a,
          o = {},
          i = !1,
          d = e.theme && e.theme.disableStyledSystemCache
        for (var s in e)
          if (t[s]) {
            var c = t[s],
              u = e[s],
              l = Lt(e.theme, c.scale, c.defaults)
            if ('object' != typeof u) Ct(o, c(u, l, e))
            else {
              if (
                ((n.breakpoints =
                  (!d && n.breakpoints) || Lt(e.theme, 'breakpoints', St.breakpoints)),
                Array.isArray(u))
              ) {
                ;(n.media = (!d && n.media) || [null].concat(n.breakpoints.map(Bt))),
                  (o = Tt(o, Rt(n.media, c, l, u, e)))
                continue
              }
              null !== u && ((o = Tt(o, Et(n.breakpoints, c, l, u, e))), (i = !0))
            }
          }
        return (
          i &&
            ((r = o),
            (a = {}),
            Object.keys(r)
              .sort(function (e, t) {
                return e.localeCompare(t, void 0, {numeric: !0, sensitivity: 'base'})
              })
              .forEach(function (e) {
                a[e] = r[e]
              }),
            (o = a)),
          o
        )
      }
    ;(r.config = t), (r.propNames = Object.keys(t)), (r.cache = n)
    var a = Object.keys(t).filter(function (e) {
      return 'config' !== e
    })
    return (
      a.length > 1 &&
        a.forEach(function (n) {
          var a
          r[n] = e((((a = {})[n] = t[n]), a))
        }),
      r
    )
  },
  Rt = function (e, t, n, r, a) {
    var o = {}
    return (
      r.slice(0, e.length).forEach(function (r, i) {
        var d,
          s = e[i],
          c = t(r, n, a)
        s ? Ct(o, (((d = {})[s] = Ct({}, o[s], c)), d)) : Ct(o, c)
      }),
      o
    )
  },
  Et = function (e, t, n, r, a) {
    var o = {}
    for (var i in r) {
      var d = e[i],
        s = t(r[i], n, a)
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
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? Mt : a,
      i = e.defaultScale
    t = t || [n]
    var d = function (e, n, r) {
      var a = {},
        i = o(e, n, r)
      if (null !== i)
        return (
          t.forEach(function (e) {
            a[e] = i
          }),
          a
        )
    }
    return (d.scale = r), (d.defaults = i), d
  },
  Ht = function (e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function (n) {
        var r = e[n]
        t[n] = !0 !== r ? ('function' != typeof r ? Ft(r) : r) : Ft({property: n, scale: n})
      }),
      Wt(t)
    )
  },
  Pt = function () {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    n.forEach(function (t) {
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
        return Lt(
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
    if (!Kt(e)) return Lt(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Lt(t, r, r)
    return Kt(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
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
  en = Ht({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function tn() {
  return (tn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var nn,
  rn,
  an,
  on = function (e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  dn = [40, 52, 64].map(function (e) {
    return e + 'em'
  }),
  sn = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  cn = {
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
  un = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  ln = {
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
  pn = function (e, t) {
    if ('number' != typeof t || t >= 0) return on(e, t, t)
    var n = Math.abs(t),
      r = on(e, n, n)
    return 'string' == typeof r ? '-' + r : -1 * r
  },
  fn = [
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
    var n
    return tn({}, e, (((n = {})[t] = pn), n))
  }, {}),
  gn = function e(t) {
    return function (n) {
      void 0 === n && (n = {})
      var r = tn({}, sn, {}, n.theme || n),
        a = {},
        o = (function (e) {
          return function (t) {
            var n = {},
              r = on(t, 'breakpoints', dn),
              a = [null].concat(
                r.map(function (e) {
                  return '@media screen and (min-width: ' + e + ')'
                }),
              )
            for (var o in e) {
              var i = 'function' == typeof e[o] ? e[o](t) : e[o]
              if (null != i)
                if (Array.isArray(i))
                  for (var d = 0; d < i.slice(0, a.length).length; d++) {
                    var s = a[d]
                    s ? ((n[s] = n[s] || {}), null != i[d] && (n[s][o] = i[d])) : (n[o] = i[d])
                  }
                else n[o] = i
            }
            return n
          }
        })('function' == typeof t ? t(r) : t)(r)
      for (var i in o) {
        var d = o[i],
          s = 'function' == typeof d ? d(r) : d
        if ('variant' !== i)
          if (s && 'object' == typeof s) a[i] = e(s)(r)
          else {
            var c = on(cn, i, i),
              u = on(ln, c),
              l = on(r, u, on(r, c, {})),
              p = on(fn, c, on)(l, s, s)
            if (un[c]) for (var f = un[c], g = 0; g < f.length; g++) a[f[g]] = p
            else a[c] = p
          }
        else a = tn({}, a, {}, e(on(r, s))(r))
      }
      return a
    }
  },
  hn = function (e) {
    var t,
      n,
      r = e.scale,
      a = e.prop,
      o = void 0 === a ? 'variant' : a,
      i = e.variants,
      d = void 0 === i ? {} : i,
      s = e.key
    ;((n = Object.keys(d).length
      ? function (e, t, n) {
          return gn(Lt(t, e, null))(n.theme)
        }
      : function (e, t) {
          return Lt(t, e, null)
        }).scale = r || s),
      (n.defaults = d)
    var c = (((t = {})[o] = n), t)
    return Wt(c)
  },
  mn =
    (hn({key: 'buttons'}),
    hn({key: 'textStyles', prop: 'textStyle'}),
    hn({key: 'colorStyles', prop: 'colors'}),
    Ot.width),
  yn = Ot.height,
  vn = Ot.minHeight,
  bn = Ot.display,
  wn = Ot.overflow,
  Dn = zt.opacity,
  kn = Ut.fontSize,
  xn = Ut.fontFamily,
  Cn = Ut.fontWeight,
  Tn = Ut.lineHeight,
  Sn = Nt.alignItems,
  Bn = Nt.justifyContent,
  Mn = Nt.flexWrap,
  Ln = Nt.flexDirection,
  Wn = Nt.flex,
  Rn = At.gridGap,
  En = At.gridColumnGap,
  Fn = At.gridRowGap,
  Hn = At.gridAutoFlow,
  Pn = At.gridAutoColumns,
  On = At.gridAutoRows,
  In = At.gridTemplateColumns,
  zn = At.gridTemplateRows,
  Un = At.gridTemplateAreas,
  Nn = At.gridArea,
  Yn = Gt.borderRadius,
  An = Vt.zIndex,
  qn = Vt.top,
  Gn = Vt.right,
  jn = Vt.bottom,
  Xn = Vt.left,
  Qn = function (e) {
    var t = e.prop,
      n = e.cssProperty,
      r = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      d = e.properties,
      s = {}
    return (
      (s[t] = Ft({properties: d, property: n || t, scale: a, defaultScale: i, transform: o})),
      r && (s[r] = s[t]),
      Wt(s)
    )
  },
  Vn = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Zn = vt(vt({}, Vn), {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Kn = vt(vt({}, Vn), {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  Jn = Qn({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function (e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  _n = Pt(Pn, Hn, On, En, Rn, Fn, Un, In, zn, Sn, Bn, $t),
  $n = s('div')(
    nn ||
      (nn = bt(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    _n,
    Jn,
  ),
  er = Pt($t, Wn, Mn, Ln, Sn, Bn, Nn, yn, mn),
  tr = s('div')(
    rn || (rn = bt(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    er,
  ),
  nr = Pt(Nn, yn, $t, mn, Vt, qn, Xn, Gn, jn, An),
  rr = s('div')(
    an ||
      (an = bt(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    nr,
  )
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
function or(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return a(
    function () {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function (n, r) {
            var a
            return vt(vt({}, n), (((a = {})[r] = t.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var ir = 'Montserrat, sans-serif',
  dr = {
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
  sr = 36
function cr(e, t, n) {
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
var ur,
  lr,
  pr,
  fr = Qn({prop: 'placeholderColor', cssProperty: 'color'}),
  gr = Qn({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  hr = Pt(Vt, Gt, Xt, bn, Yn, $t),
  mr = s('label')(ur || (ur = bt(['\n  ', '\n'], ['\n  ', '\n'])), hr),
  yr = Pt(Vt, Xn, Gn, qn, yn, mn),
  vr = s('div')(
    lr ||
      (lr = bt(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    yr,
  ),
  br = Pt(Xt, $t, xn, kn, zt, Cn, $t, Gt, mn, vn, en),
  wr = s('input')(
    pr ||
      (pr = bt(
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
    br,
    gr,
    fr,
    gr,
    fr,
    gr,
    fr,
  )
function Dr(r) {
  var a = r.placeholder,
    d = r.id,
    s = r.vertical,
    u = r.isActive,
    l = r.ariaLabel,
    p = r.onClick,
    f = r.value,
    g = r.showCalendarIcon,
    h = r.padding,
    m = r.rtl,
    y = r.disableAccessibility,
    v = r.dateFormat,
    b = r.onChange,
    C = void 0 === b ? function () {} : b,
    B = t(f),
    M = B[0],
    W = B[1],
    E = i(null)
  n(
    function () {
      W(f)
    },
    [f],
  )
  var F = o(c),
    I = or({
      fontFamily: ir,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: cr('charcoal', dr.charcoal, F),
      inputBackground: cr('white', dr.white, F),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: h,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: cr('silverCloud', dr.silverCloud, F),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: m ? 'unset' : s ? '8px' : '16px',
      inputCalendarWrapperRight: m ? (s ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: cr('graci', dr.graci, F),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + cr('graci', dr.graci, F),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: cr('white', dr.white, F),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + cr('primaryColor', dr.primaryColor, F),
    })
  return e.createElement(
    mr,
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
        vr,
        {
          position: I.inputCalendarWrapperPosition,
          height: I.inputCalendarWrapperHeight,
          width: I.inputCalendarWrapperWidth,
          top: I.inputCalendarWrapperTop,
          left: I.inputCalendarWrapperLeft,
          right: I.inputCalendarWrapperRight,
        },
        e.createElement(ar, {
          width: I.inputCalendarIconWidth,
          height: I.inputCalendarIconHeight,
          color: I.inputCalendarIconColor,
        }),
      ),
    e.createElement(wr, {
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
            var e = (function (e, t, n, r) {
              k(3, arguments)
              var a = String(e),
                o = String(t),
                i = r || {},
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
              if ('' === o) return '' === a ? x(n) : new Date(NaN)
              var g,
                h = {firstWeekContainsDate: u, weekStartsOn: f, locale: d},
                m = [{priority: 10, set: Fe, index: 0}],
                y = o
                  .match(Me)
                  .map(function (e) {
                    var t = e[0]
                    return 'p' === t || 'P' === t ? (0, L[t])(e, d.formatLong, h) : e
                  })
                  .join('')
                  .match(Be),
                v = []
              for (g = 0; g < y.length; g++) {
                var b = y[g]
                !i.useAdditionalWeekYearTokens && P(b) && O(b),
                  !i.useAdditionalDayOfYearTokens && H(b) && O(b)
                var C = b[0],
                  B = Se[C]
                if (B) {
                  var M = B.incompatibleTokens
                  if (Array.isArray(M)) {
                    for (var W = void 0, E = 0; E < v.length; E++) {
                      var F = v[E].token
                      if (-1 !== M.indexOf(F) || F === C) {
                        W = v[E]
                        break
                      }
                    }
                    if (W)
                      throw new RangeError(
                        "The format string mustn't contain `"
                          .concat(W.fullToken, '` and `')
                          .concat(b, '` at the same time'),
                      )
                  } else if ('*' === B.incompatibleTokens && v.length)
                    throw new RangeError(
                      "The format string mustn't contain `".concat(
                        b,
                        '` and any other token at the same time',
                      ),
                    )
                  v.push({token: C, fullToken: b})
                  var I = B.parse(a, b, d.match, h)
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
                  if (("''" === b ? (b = "'") : "'" === C && (b = He(b)), 0 !== a.indexOf(b)))
                    return new Date(NaN)
                  a = a.slice(b.length)
                }
              }
              if (a.length > 0 && Re.test(a)) return new Date(NaN)
              var z = m
                  .map(function (e) {
                    return e.priority
                  })
                  .sort(function (e, t) {
                    return t - e
                  })
                  .filter(function (e, t, n) {
                    return n.indexOf(e) === t
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
                U = x(n)
              if (isNaN(U)) return new Date(NaN)
              var N = T(U, R(U)),
                Y = {}
              for (g = 0; g < z.length; g++) {
                var A = z[g]
                if (A.validate && !A.validate(N, A.value, h)) return new Date(NaN)
                var q = A.set(N, Y, A.value, h)
                q[0] ? ((N = q[0]), S(Y, q[1])) : (N = q)
              }
              return N
            })(t, v, new Date())
            isNaN(e) || C(e)
          }, 1e3))
      },
      onFocus: p,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function kr(t) {
  var n = t.height,
    r = t.width,
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
      width: r,
      height: n,
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
var xr,
  Cr,
  Tr,
  Sr = Pt(xn, kn, Cn, zt, Tn, $t),
  Br = s('div')(xr || (xr = bt(['\n  ', '\n'], ['\n  ', '\n'])), Sr),
  Mr = s(Br)(
    Tr ||
      (Tr = bt(
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
        n = e.selectDateBorderColor
      return (
        t &&
        u(
          Cr ||
            (Cr = bt(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          n,
        )
      )
    },
  )
function Lr(t) {
  var n = t.title,
    r = t.isActive,
    a = t.date,
    i = t.vertical,
    d = o(c),
    s = or({
      fontFamily: ir,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: cr('silverCloud', dr.silverCloud, d),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: cr('charcoal', dr.charcoal, d),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: cr('primaryColor', dr.primaryColor, d),
      selectDatePadding: '0',
    })
  return e.createElement(
    rr,
    {p: s.selectDatePadding},
    e.createElement(
      Br,
      {
        fontFamily: s.fontFamily,
        fontSize: s.selectDateLabelFontSize,
        color: s.selectDateLabelColor,
        m: s.selectDateLabelMargin,
      },
      n,
    ),
    e.createElement(
      Mr,
      {
        as: 'span',
        color: s.selectDateDateColor,
        fontSize: s.selectDateDateFontSize,
        fontWeight: s.selectDateDateFontWeight,
        fontFamily: s.fontFamily,
        p: s.selectDateDatePadding,
        isActive: r,
        selectDateBorderColor: s.selectDateBorderColor,
      },
      a,
    ),
  )
}
var Wr,
  Rr,
  Er,
  Fr,
  Hr,
  Pr = function (t) {
    var n = t.label,
      r = o(c),
      a = or({
        fontFamily: ir,
        monthLabelColor: cr('darcula', dr.darcula, r),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      Br,
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
  Or = function (t) {
    var n = t.label,
      r = o(c),
      a = or({
        fontFamily: ir,
        dayLabelColor: cr('silverCloud', dr.silverCloud, r),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      Br,
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
  Ir = {
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
  zr = e.createContext(Ir),
  Ur = Qn({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Nr = Qn({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Yr = Qn({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Ar = Qn({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  qr = Qn({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gr = Qn({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  jr = Pt(en, Xt, zt, xn, Cn, kn),
  Xr = s('button')(
    Hr ||
      (Hr = bt(
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n\n  ',
          '\n\n  // @ts-ignore\n  ',
          '\n\n  &:focus {\n    // @ts-ignore\n    ',
          '\n  }\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  outline: 0;\n\n  ',
          '\n\n  // @ts-ignore\n  ',
          '\n\n  &:focus {\n    // @ts-ignore\n    ',
          '\n  }\n',
        ],
      )),
    Ur,
    Nr,
    jr,
    function (e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        u(
          Wr ||
            (Wr = bt(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function (e) {
      var t = e.disabledDate,
        n = e.isSelected,
        r = e.isSelectedStartOrEnd,
        a = e.isWithinHoverRange
      return t || n || r || a
        ? n && !r
          ? u(
              Er ||
                (Er = bt(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Gr,
              Ar,
            )
          : ''
        : u(
            Rr ||
              (Rr = bt(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            qr,
            Yr,
          )
    },
    function (e) {
      var t = e.borderAccessibilityColor
      return u(
        Fr ||
          (Fr = bt(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Qr(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    d = r.rangeHover
  return t ? a : e ? i : n ? d : o
}
function Vr(t) {
  var n = t.day,
    d = t.date,
    s = i(null),
    u = o(zr),
    l = u.focusedDate,
    p = u.isDateFocused,
    f = u.isDateSelected,
    g = u.isDateHovered,
    h = u.isDateBlocked,
    m = u.isFirstOrLastSelectedDate,
    y = u.onDateSelect,
    v = u.onDateFocus,
    b = u.onDateHover,
    w = u.onDayRender,
    D = (function (e) {
      var t = e.date,
        n = e.focusedDate,
        a = e.isDateSelected,
        o = e.isDateFocused,
        i = e.isFirstOrLastSelectedDate,
        d = e.isDateHovered,
        s = e.isDateBlocked,
        c = e.onDateSelect,
        u = e.onDateFocus,
        l = e.onDateHover,
        p = r(
          function () {
            return c(t)
          },
          [t, c],
        ),
        f = r(
          function () {
            return l(t)
          },
          [t, l],
        ),
        g = s(t) && !d(t)
      return {
        tabIndex: null === n || o(t) ? 0 : -1,
        isSelected: a(t),
        isSelectedStartOrEnd: i(t),
        isWithinHoverRange: d(t),
        disabledDate: g,
        onKeyDown: function (e) {
          'ArrowRight' === e.key
            ? u(Ve(t, 1))
            : 'ArrowLeft' === e.key
            ? u(Ve(t, -1))
            : 'ArrowUp' === e.key
            ? u(Ve(t, -7))
            : 'ArrowDown' === e.key && u(Ve(t, 7))
        },
        onClick: g ? function () {} : p,
        onMouseEnter: f,
      }
    })({
      date: d,
      focusedDate: l,
      isDateFocused: p,
      isDateSelected: f,
      isDateHovered: g,
      isDateBlocked: h,
      isFirstOrLastSelectedDate: m,
      onDateFocus: v,
      onDateSelect: y,
      onDateHover: b,
      dayRef: s,
    }),
    k = o(c),
    x = cr('white', dr.white, k),
    C = cr('mud', dr.mud, k),
    T = cr('primaryColor', dr.primaryColor, k),
    S = cr('accessibility', dr.accessibility, k),
    B = cr('selectedDay', dr.selectedDay, k),
    M = cr('selectedDayHover', dr.selectedDayHover, k),
    L = cr('normalDayHover', dr.normalDayHover, k),
    W = or({
      fontFamily: ir,
      daySize: sr,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: C,
      dayHoverColor: C,
      daySelectedColor: x,
      daySelectedHoverColor: x,
      dayHoverRangeColor: x,
      daySelectedFirstOrLastColor: x,
      dayBackground: x,
      dayHoverBackground: L,
      daySelectedBackground: B,
      daySelectedHoverBackground: M,
      dayHoverRangeBackground: B,
      daySelectedFirstOrLastBackground: T,
      dayBorderColor: L,
      daySelectedBorderColor: B,
      dayHoverRangeBorderColor: B,
      daySelectedFirstOrLastBorderColor: T,
      dayAccessibilityBorderColor: S,
    }),
    R = a(
      function () {
        return Qr(D.isSelected, D.isSelectedStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: W.daySelectedFirstOrLastBorderColor,
          selected: W.daySelectedBorderColor,
          normal: W.dayBorderColor,
          rangeHover: W.dayHoverRangeColor,
        })
      },
      [D.isSelected, D.isSelectedStartOrEnd, W, D.isWithinHoverRange],
    ),
    E = a(
      function () {
        return Qr(D.isSelected, D.isSelectedStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: W.daySelectedFirstOrLastBackground,
          selected: W.daySelectedBackground,
          normal: W.dayBackground,
          rangeHover: W.dayHoverRangeBackground,
        })
      },
      [D.isSelected, D.isSelectedStartOrEnd, W, D.isWithinHoverRange],
    ),
    F = a(
      function () {
        return Qr(D.isSelected, D.isSelectedStartOrEnd, D.isWithinHoverRange, {
          selectedFirstOrLast: W.daySelectedFirstOrLastColor,
          selected: W.daySelectedColor,
          normal: W.dayColor,
          rangeHover: W.dayHoverRangeColor,
        })
      },
      [D.isSelected, D.isSelectedStartOrEnd, W, D.isWithinHoverRange],
    )
  return e.createElement(
    Xr,
    vt({}, D, {
      ref: s,
      dayHeight: W.daySize,
      dayWidth: W.daySize,
      background: E,
      color: F,
      fontFamily: W.fontFamily,
      fontWeight: W.dayFontWeight,
      fontSize: W.dayFontSize,
      daySelectedHoverBackground: W.daySelectedHoverBackground,
      dayHoverBackground: W.dayHoverBackground,
      dayHoverColor: W.dayHoverColor,
      daySelectedHoverColor: W.daySelectedHoverColor,
      borderAccessibilityColor: W.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        R +
        ',\n        0 1px 0 0 ' +
        R +
        ',\n        1px 1px 0 0 ' +
        R +
        ',\n        1px 0 0 0 ' +
        R +
        ' inset,\n        0 1px 0 0 ' +
        R +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + d.toDateString(),
      type: 'button',
    }),
    'function' == typeof w
      ? w(d)
      : e.createElement(
          tr,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          n,
        ),
  )
}
var Zr,
  Kr,
  Jr = l(
    Zr ||
      (Zr = bt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  _r = s('div')(
    Kr ||
      (Kr = bt(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    Jr,
  ),
  $r = function (t) {
    var n = t.year,
      r = t.month,
      a = t.firstDayOfWeek,
      o = nt({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: n,
        month: r,
        firstDayOfWeek: a,
      }),
      i = o.days,
      d = o.weekdayLabels,
      s = o.monthLabel,
      c = or({daySize: sr, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      _r,
      null,
      e.createElement(
        tr,
        {justifyContent: 'center', m: c.monthLabelMargin},
        e.createElement(Pr, {label: s}),
      ),
      e.createElement(
        $n,
        {daySizeGridTemplateColumns: c.daySize},
        d.map(function (t) {
          return e.createElement(
            tr,
            {key: t, justifyContent: 'center', m: c.monthDayLabelMargin},
            e.createElement(Or, {label: t}),
          )
        }),
      ),
      e.createElement(
        $n,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function (t, n) {
          return 'object' == typeof t
            ? e.createElement(Vr, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: n})
        }),
      ),
    )
  }
var ea,
  ta,
  na,
  ra = s('button')(
    ea ||
      (ea = bt(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  aa = s(function (t) {
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
  })(na || (na = bt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    return (
      e.rtl &&
      u(
        ta ||
          (ta = bt(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function oa(t) {
  var n = t.onResetDates,
    r = t.text,
    a = t.rtl,
    i = o(c),
    d = or({
      fontFamily: ir,
      resetDatesIconColor: cr('mud', dr.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: cr('darcula', dr.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    ra,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: n,
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
      Br,
      {
        m: d.resetDatesTextMargin,
        lineHeight: d.resetDatesTextLineHeight,
        fontFamily: d.fontFamily,
        fontSize: d.resetDatesTextFontSize,
        color: d.resetDatesTextColor,
      },
      r,
    ),
  )
}
var ia,
  da,
  sa = s('svg')(da || (da = bt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    var t = e.angle
    return u(
      ia ||
        (ia = bt(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function ca(t) {
  var n = t.height,
    r = t.width,
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
      width: r,
      height: n,
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
  la = Pt(mn, yn, Xt, $t, Gt),
  pa = s('button')(
    ua ||
      (ua = bt(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    la,
  )
function fa(t) {
  var n = t.type,
    r = t.onClick,
    a = t.vertical,
    i = t.rtl,
    d = t.ariaLabel,
    s = o(c),
    u = or({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: cr('white', dr.white, s),
      navButtonBorder: '1px solid ' + cr('silverCloud', dr.silverCloud, s),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: cr('greey', dr.greey, s),
    })
  function l() {
    return 'next' !== n || a
      ? 'next' === n && a
        ? 'down'
        : 'prev' !== n || a
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
      onClick: r,
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
var ha,
  ma,
  ya = Pt($t, zt, kn, xn, Cn),
  va = s('div')(
    ha ||
      (ha = bt(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    ya,
  ),
  ba = s('button')(
    ma ||
      (ma = bt(
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
    va,
    zt,
    zt,
  )
function wa(t) {
  var n = t.onClick,
    r = t.rtl,
    a = t.closeText,
    i = o(c),
    d = or({
      fontFamily: ir,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: cr('silverCloud', dr.silverCloud, i),
      closeHoverColor: cr('darcula', dr.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    ba,
    {
      onClick: n,
      color: d.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(ga, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      va,
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
    La ||
      (La = bt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  ka = Pt(Xt, $t, Yn, Vt, en, mn, An),
  xa = s('div')(
    Ra ||
      (Ra = bt(
        [
          '\n  ',
          '\n  ',
          '\n\n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
        ],
        [
          '\n  ',
          '\n  ',
          '\n\n  animation-name: ',
          ';\n  animation-duration: 0.15s;\n  animation-timing-function: ease-in;\n',
        ],
      )),
    ka,
    function (e) {
      return (
        e.rtl &&
        u(Wa || (Wa = bt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    Da,
  ),
  Ca = s('div')(
    Ea ||
      (Ea = bt(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  Ta = Pt(bn, Bn),
  Sa = s(rr)(Fa || (Fa = bt(['\n  ', '\n'], ['\n  ', '\n'])), Ta),
  Ba = Pt(wn, yn),
  Ma = s($n)(Ha || (Ha = bt(['\n  ', '\n'], ['\n  ', '\n'])), Ba)
var La,
  Wa,
  Ra,
  Ea,
  Fa,
  Ha,
  Pa,
  Oa,
  Ia,
  za,
  Ua,
  Na = e.forwardRef(function (t, n) {
    var r = t.startDate,
      a = t.endDate,
      s = t.minBookingDate,
      u = t.maxBookingDate,
      l = t.focusedInput,
      f = t.onDatesChange,
      g = t.dayLabelFormat,
      h = t.weekdayLabelFormat,
      m = t.monthLabelFormat,
      y = t.onDayRender,
      v = t.initialVisibleMonth,
      b = t.vertical,
      w = void 0 !== b && b,
      D = t.rtl,
      k = void 0 !== D && D,
      x = t.showResetDates,
      C = void 0 === x || x,
      T = t.showClose,
      S = void 0 === T || T,
      B = t.showSelectedDates,
      M = void 0 === B || B,
      L = t.exactMinBookingDays,
      W = void 0 !== L && L,
      R = t.isDateBlocked,
      E =
        void 0 === R
          ? function () {
              return !1
            }
          : R,
      F = t.minBookingDays,
      H = void 0 === F ? 1 : F,
      P = t.onClose,
      O = void 0 === P ? function () {} : P,
      I = t.numberOfMonths,
      z = t.firstDayOfWeek,
      U = t.displayFormat,
      N = void 0 === U ? 'MM/dd/yyyy' : U,
      Y = t.phrases,
      A = void 0 === Y ? Vn : Y,
      q = t.unavailableDates,
      G = yt({
        startDate: r,
        endDate: a,
        focusedInput: l,
        onDatesChange: f,
        minBookingDate: s,
        maxBookingDate: u,
        minBookingDays: H,
        isDateBlocked: E,
        exactMinBookingDays: W,
        unavailableDates: void 0 === q ? [] : q,
        initialVisibleMonth: v,
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
      ne = G.onDateHover,
      re = G.isDateFocused,
      ae = G.focusedDate,
      oe = G.onDateFocus,
      ie = G.isDateBlocked
    d(n, function () {
      return {
        onDateSelect: function (e) {
          K(e)
        },
      }
    })
    var de = i(null),
      se = o(c),
      ce = or({
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
        datepickerSelectDateArrowIconColor: cr('silverCloud', dr.silverCloud, se),
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
        zr.Provider,
        {
          value: {
            rtl: k,
            isDateFocused: re,
            isDateSelected: X,
            isDateHovered: V,
            isFirstOrLastSelectedDate: Q,
            onDateFocus: oe,
            focusedDate: ae,
            onDateSelect: K,
            onDateHover: ne,
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
                $n,
                {
                  'data-testid': 'SelectedDatesGrid',
                  gridTemplateColumns: ce.datepickerSelectDateGridTemplateColumns,
                  gridTemplateRows: ce.datepickerSelectDateGridTemplateRows,
                },
                e.createElement(Lr, {
                  title: A.datepickerStartDateLabel,
                  date: ft(r, N, A.datepickerStartDatePlaceholder),
                  isActive: l === ht,
                  vertical: w,
                }),
                e.createElement(
                  tr,
                  {justifyContent: 'center', alignItems: 'center'},
                  e.createElement(kr, {
                    height: ce.datepickerSelectDateArrowIconHeight,
                    width: ce.datepickerSelectDateArrowIconWidth,
                    iconColor: ce.datepickerSelectDateArrowIconColor,
                  }),
                ),
                e.createElement(Lr, {
                  title: A.datepickerEndDateLabel,
                  date: ft(a, N, A.datepickerEndDatePlaceholder),
                  isActive: l === mt,
                  vertical: w,
                }),
              ),
            ),
          e.createElement(
            rr,
            {position: 'relative'},
            e.createElement(
              rr,
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
                    te && ne(null)
                  },
                },
                j.map(function (t) {
                  return e.createElement($r, {
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
              tr,
              {alignItems: 'center'},
              e.createElement(
                e.Fragment,
                null,
                C &&
                  e.createElement(
                    tr,
                    {flex: '1', m: ce.datepickerResetDatesWrapperMargin},
                    e.createElement(oa, {rtl: k, onResetDates: J, text: A.resetDates}),
                  ),
                e.createElement(
                  rr,
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
                  rr,
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
  Ya = s(rr)(Oa || (Oa = bt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), An, function (e) {
    return (
      e.rtl &&
      u(Pa || (Pa = bt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Aa = Pt(zt, Dn),
  qa = s(kr)(za || (za = bt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Aa, function (e) {
    return (
      e.rtl &&
      u(
        Ia ||
          (Ia = bt(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Ga = Pt(Xt, Gt, Yn),
  ja = s($n)(Ua || (Ua = bt(['\n  ', '\n'], ['\n  ', '\n'])), Ga)
function Xa(t) {
  var r = t.startDate,
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
    v = t.weekdayLabelFormat,
    b = t.monthLabelFormat,
    w = t.onDayRender,
    D = t.initialVisibleMonth,
    k = t.showClose,
    x = void 0 === k || k,
    C = t.showSelectedDates,
    T = void 0 === C || C,
    S = t.showResetDates,
    B = void 0 === S || S,
    M = t.vertical,
    L = void 0 !== M && M,
    W = t.rtl,
    R = void 0 !== W && W,
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
    j = void 0 === G ? Zn : G,
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
    ne = o(c),
    re = or(
      vt(
        {
          dateRangeZIndex: null,
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: L ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeGridTemplateRows: 'unset',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: cr('graci', dr.graci, ne),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: L ? (R ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: L ? (R ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(Q, R),
      ),
    )
  function ae(e) {
    null !== g && te && te.current && !te.current.contains(e.target) && l(null)
  }
  function oe(e) {
    ee && ee.current && ee.current.onDateSelect && ee.current.onDateSelect(e)
  }
  return (
    n(function () {
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
        {zIndex: re.dateRangeZIndex, rtl: R, position: 'relative', ref: te},
        e.createElement(
          ja,
          {
            'data-testid': 'DateRangeInputGrid',
            background: re.dateRangeBackground,
            gridTemplateColumns: re.dateRangeGridTemplateColumns,
            gridTemplateRows: re.dateRangeGridTemplateRows,
            border: re.dateRangeBorder,
            borderRadius: re.dateRangeBorderRadius,
          },
          e.createElement(Dr, {
            id: Z,
            ariaLabel: j.startDateAriaLabel,
            placeholder: j.startDatePlaceholder,
            value: ft(r, q, ''),
            onClick: function () {
              return l(ht)
            },
            showCalendarIcon: U,
            vertical: L,
            isActive: g === ht,
            padding: re.dateRangeStartDateInputPadding,
            rtl: R,
            onChange: oe,
            dateFormat: q,
          }),
          e.createElement(
            tr,
            {alignItems: 'center', justifyContent: 'center'},
            e.createElement(qa, {
              width: re.dateRangeArrowIconWidth,
              height: re.dateRangeArrowIconHeight,
              color: re.dateRangeArrowIconColor,
              opacity: re.dateRangeArrowIconOpacity,
              rtl: R,
            }),
          ),
          e.createElement(Dr, {
            id: J,
            ariaLabel: j.endDateAriaLabel,
            placeholder: j.endDatePlaceholder,
            value: ft(a, q, ''),
            onClick: function () {
              return l(r ? mt : ht)
            },
            showCalendarIcon: Y,
            vertical: L,
            isActive: g === mt,
            padding: re.dateRangeEndDateInputPadding,
            rtl: R,
            disableAccessibility: g === ht,
            onChange: oe,
            dateFormat: q,
          }),
        ),
        e.createElement(
          rr,
          {
            position: re.dateRangeDatepickerWrapperPosition,
            bottom: re.dateRangeDatepickerWrapperBottom,
            left: re.dateRangeDatepickerWrapperLeft,
            top: re.dateRangeDatepickerWrapperTop,
            right: re.dateRangeDatepickerWrapperRight,
          },
          null !== g &&
            e.createElement(Na, {
              onClose: function () {
                I(), l(null)
              },
              startDate: r,
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
              vertical: L,
              showSelectedDates: T,
              showClose: x,
              rtl: R,
              dayLabelFormat: y,
              weekdayLabelFormat: v,
              monthLabelFormat: b,
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
  Za = s(rr)(Va || (Va = bt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), An, function (e) {
    return (
      e.rtl &&
      u(Qa || (Qa = bt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function Ka(t) {
  var r = t.date,
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
    v = void 0 === y ? 1 : y,
    b = t.showClose,
    w = void 0 === b || b,
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
    L = t.onClose,
    W = void 0 === L ? function () {} : L,
    R = t.showCalendarIcon,
    E = void 0 === R || R,
    F = t.displayFormat,
    H = void 0 === F ? 'MM/dd/yyyy' : F,
    P = t.phrases,
    O = void 0 === P ? Kn : P,
    I = t.placement,
    z = void 0 === I ? 'bottom' : I,
    U = t.inputId,
    N = void 0 === U ? 'startDate' : U,
    Y = t.unavailableDates,
    A = void 0 === Y ? [] : Y,
    q = i(null),
    G = i(null),
    j = or(
      vt(
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
    n(function () {
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
        e.createElement(Dr, {
          id: N,
          ariaLabel: O.dateAriaLabel,
          placeholder: O.datePlaceholder,
          value: ft(r, H, ''),
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
          rr,
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
              startDate: r,
              endDate: r,
              minBookingDate: a,
              maxBookingDate: o,
              firstDayOfWeek: d,
              numberOfMonths: v,
              focusedInput: c ? ht : null,
              displayFormat: H,
              onDatesChange: function (e) {
                var t = e.focusedInput,
                  n = e.startDate
                u({showDatepicker: null !== t, date: n})
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
  Zn as dateRangeInputPhrases,
  Kn as dateSingleInputPhrases,
  Vn as datepickerPhrases,
}
