import e, {
  useEffect as t,
  useState as r,
  useCallback as n,
  useMemo as a,
  useContext as o,
  useRef as i,
  useImperativeHandle as s,
} from 'react'
import d, {ThemeContext as c, css as l, keyframes as u} from 'styled-components'
var p = {
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
}
function g(e) {
  return function(t) {
    var r = t || {},
      n = r.width ? String(r.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
var f = {
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
  h = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function m(e) {
  return function(t, r) {
    var n,
      a = r || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth,
        i = a.width ? String(a.width) : o
      n = e.formattingValues[i] || e.formattingValues[o]
    } else {
      var s = e.defaultWidth,
        d = a.width ? String(a.width) : e.defaultWidth
      n = e.values[d] || e.values[s]
    }
    return n[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
function y(e) {
  return function(t, r) {
    var n = String(t),
      a = r || {},
      o = a.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      s = n.match(i)
    if (!s) return null
    var d,
      c = s[0],
      l = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (d =
        '[object Array]' === Object.prototype.toString.call(l)
          ? l.findIndex(function(e) {
              return e.test(n)
            })
          : (function(e, t) {
              for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r
            })(l, function(e) {
              return e.test(n)
            })),
      (d = e.valueCallback ? e.valueCallback(d) : d),
      {value: (d = a.valueCallback ? a.valueCallback(d) : d), rest: n.slice(c.length)}
    )
  }
}
var b,
  w = {
    formatDistance: function(e, t, r) {
      var n
      return (
        (r = r || {}),
        (n =
          'string' == typeof p[e] ? p[e] : 1 === t ? p[e].one : p[e].other.replace('{{count}}', t)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
      )
    },
    formatLong: f,
    formatRelative: function(e, t, r, n) {
      return h[e]
    },
    localize: {
      ordinalNumber: function(e, t) {
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
      era: m({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: m({
        values: {
          narrow: ['1', '2', '3', '4'],
          abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
          wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        },
        defaultWidth: 'wide',
        argumentCallback: function(e) {
          return Number(e) - 1
        },
      }),
      month: m({
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
      day: m({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: m({
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
          valueCallback: function(e) {
            return parseInt(e, 10)
          },
        }),
        function(e, t) {
          var r = String(e),
            n = t || {},
            a = r.match(b.matchPattern)
          if (!a) return null
          var o = a[0],
            i = r.match(b.parsePattern)
          if (!i) return null
          var s = b.valueCallback ? b.valueCallback(i[0]) : i[0]
          return {value: (s = n.valueCallback ? n.valueCallback(s) : s), rest: r.slice(o.length)}
        }),
      era: y({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: y({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]},
        defaultParseWidth: 'any',
        valueCallback: function(e) {
          return e + 1
        },
      }),
      month: y({
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
      day: y({
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
      dayPeriod: y({
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
function v(e) {
  if (null === e || !0 === e || !1 === e) return NaN
  var t = Number(e)
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function D(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
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
function k(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  return (function(e, t) {
    if (arguments.length < 2)
      throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
    var r = D(e).getTime(),
      n = v(t)
    return new Date(r + n)
  })(e, -v(t))
}
function x(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var r in (t = t || {})) t.hasOwnProperty(r) && (e[r] = t[r])
  return e
}
function C(e, t) {
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
function T(e, t) {
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
var S = {
    p: T,
    P: function(e, t) {
      var r,
        n = e.match(/(P+)(p+)?/),
        a = n[1],
        o = n[2]
      if (!o) return C(e, t)
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
      return r.replace('{{date}}', C(a, t)).replace('{{time}}', T(o, t))
    },
  },
  B = 6e4
function L(e) {
  var t = new Date(e.getTime()),
    r = t.getTimezoneOffset()
  t.setSeconds(0, 0)
  var n = t.getTime() % B
  return r * B + n
}
var M = ['D', 'DD'],
  W = ['YY', 'YYYY']
function R(e) {
  return -1 !== M.indexOf(e)
}
function E(e) {
  return -1 !== W.indexOf(e)
}
function F(e) {
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
function H(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : v(a),
    i = null == r.weekStartsOn ? o : v(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = D(e),
    d = s.getUTCDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setUTCDate(s.getUTCDate() - c), s.setUTCHours(0, 0, 0, 0), s
}
function P(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = D(e, t),
    n = r.getUTCFullYear(),
    a = t || {},
    o = a.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : v(i),
    d = null == a.firstWeekContainsDate ? s : v(a.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(n + 1, 0, d), c.setUTCHours(0, 0, 0, 0)
  var l = H(c, t),
    u = new Date(0)
  u.setUTCFullYear(n, 0, d), u.setUTCHours(0, 0, 0, 0)
  var p = H(u, t)
  return r.getTime() >= l.getTime() ? n + 1 : r.getTime() >= p.getTime() ? n : n - 1
}
function O(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = r || {},
    a = n.locale,
    o = a && a.options && a.options.weekStartsOn,
    i = null == o ? 0 : v(o),
    s = null == n.weekStartsOn ? i : v(n.weekStartsOn)
  if (!(s >= 0 && s <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = D(e),
    c = v(t),
    l = (((c % 7) + 7) % 7 < s ? 7 : 0) + c - d.getUTCDay()
  return d.setUTCDate(d.getUTCDate() + l), d
}
function z(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = D(e),
    r = t.getUTCDay(),
    n = (r < 1 ? 7 : 0) + r - 1
  return t.setUTCDate(t.getUTCDate() - n), t.setUTCHours(0, 0, 0, 0), t
}
function U(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = D(e),
    r = t.getUTCFullYear(),
    n = new Date(0)
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var a = z(n),
    o = new Date(0)
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = z(o)
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1
}
var I = 6048e5
function q(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = D(e),
    r =
      z(t).getTime() -
      (function(e) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var t = U(e),
          r = new Date(0)
        return r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0), z(r)
      })(t).getTime()
  return Math.round(r / I) + 1
}
var N = 6048e5
function Y(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = D(e),
    n =
      H(r, t).getTime() -
      (function(e, t) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var r = t || {},
          n = r.locale,
          a = n && n.options && n.options.firstWeekContainsDate,
          o = null == a ? 1 : v(a),
          i = null == r.firstWeekContainsDate ? o : v(r.firstWeekContainsDate),
          s = P(e, t),
          d = new Date(0)
        return d.setUTCFullYear(s, 0, i), d.setUTCHours(0, 0, 0, 0), H(d, t)
      })(r, t).getTime()
  return Math.round(n / N) + 1
}
var A = 36e5,
  j = 6e4,
  G = 1e3,
  X = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  Q = /^([+-])(\d{2})(\d{2})?|Z/,
  V = /^([+-])(\d{2})(\d{2})|Z/,
  K = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  J = /^([+-])(\d{2}):(\d{2})|Z/,
  Z = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function _(e, t, r) {
  var n = t.match(e)
  if (!n) return null
  var a = parseInt(n[0], 10)
  return {value: r ? r(a) : a, rest: t.slice(n[0].length)}
}
function $(e, t) {
  var r = t.match(e)
  if (!r) return null
  if ('Z' === r[0]) return {value: 0, rest: t.slice(1)}
  var n = '+' === r[1] ? 1 : -1,
    a = r[2] ? parseInt(r[2], 10) : 0,
    o = r[3] ? parseInt(r[3], 10) : 0,
    i = r[5] ? parseInt(r[5], 10) : 0
  return {value: n * (a * A + o * j + i * G), rest: t.slice(r[0].length)}
}
function ee(e, t) {
  return _(X.anyDigitsSigned, e, t)
}
function te(e, t, r) {
  switch (e) {
    case 1:
      return _(X.singleDigit, t, r)
    case 2:
      return _(X.twoDigits, t, r)
    case 3:
      return _(X.threeDigits, t, r)
    case 4:
      return _(X.fourDigits, t, r)
    default:
      return _(new RegExp('^\\d{1,' + e + '}'), t, r)
  }
}
function re(e, t, r) {
  switch (e) {
    case 1:
      return _(X.singleDigitSigned, t, r)
    case 2:
      return _(X.twoDigitsSigned, t, r)
    case 3:
      return _(X.threeDigitsSigned, t, r)
    case 4:
      return _(X.fourDigitsSigned, t, r)
    default:
      return _(new RegExp('^-?\\d{1,' + e + '}'), t, r)
  }
}
function ne(e) {
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
function ae(e, t) {
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
var oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ie = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function se(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var de = {
    G: {
      priority: 140,
      parse: function(e, t, r, n) {
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
      set: function(e, t, r, n) {
        return (t.era = r), e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function(e, t, r, n) {
        var a = function(e) {
          return {year: e, isTwoDigitYear: 'yy' === t}
        }
        switch (t) {
          case 'y':
            return te(4, e, a)
          case 'yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return te(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = e.getUTCFullYear()
        if (r.isTwoDigitYear) {
          var o = ae(r.year, a)
          return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function(e, t, r, n) {
        var a = function(e) {
          return {year: e, isTwoDigitYear: 'YY' === t}
        }
        switch (t) {
          case 'Y':
            return te(4, e, a)
          case 'Yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return te(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = P(e, n)
        if (r.isTwoDigitYear) {
          var o = ae(r.year, a)
          return e.setUTCFullYear(o, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), H(e, n)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), H(e, n)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(e, t, r, n) {
        return re('R' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, n) {
        var a = new Date(0)
        return a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0), z(a)
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
      parse: function(e, t, r, n) {
        return re('u' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, n) {
        return e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'Q':
          case 'QQ':
            return te(t.length, e)
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
      validate: function(e, t, r) {
        return t >= 1 && t <= 4
      },
      set: function(e, t, r, n) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'q':
          case 'qq':
            return te(t.length, e)
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
      validate: function(e, t, r) {
        return t >= 1 && t <= 4
      },
      set: function(e, t, r, n) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function(e, t, r, n) {
        var a = function(e) {
          return e - 1
        }
        switch (t) {
          case 'M':
            return _(X.month, e, a)
          case 'MM':
            return te(2, e, a)
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
      validate: function(e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function(e, t, r, n) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function(e, t, r, n) {
        var a = function(e) {
          return e - 1
        }
        switch (t) {
          case 'L':
            return _(X.month, e, a)
          case 'LL':
            return te(2, e, a)
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
      validate: function(e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function(e, t, r, n) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'w':
            return _(X.week, e)
          case 'wo':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return H(
          (function(e, t, r) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var n = D(e),
              a = v(t),
              o = Y(n, r) - a
            return n.setUTCDate(n.getUTCDate() - 7 * o), n
          })(e, r, n),
          n,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'I':
            return _(X.week, e)
          case 'Io':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return z(
          (function(e, t) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var r = D(e),
              n = v(t),
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
      parse: function(e, t, r, n) {
        switch (t) {
          case 'd':
            return _(X.date, e)
          case 'do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        var n = se(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return n ? t >= 1 && t <= ie[a] : t >= 1 && t <= oe[a]
      },
      set: function(e, t, r, n) {
        return e.setUTCDate(r), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'D':
          case 'DD':
            return _(X.dayOfYear, e)
          case 'Do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return se(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
      },
      set: function(e, t, r, n) {
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
      parse: function(e, t, r, n) {
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
      validate: function(e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function(e, t, r, n) {
        return (e = O(e, r, n)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function(e, t, r, n) {
        var a = function(e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + n.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'e':
          case 'ee':
            return te(t.length, e, a)
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
      validate: function(e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function(e, t, r, n) {
        return (e = O(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
      parse: function(e, t, r, n) {
        var a = function(e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + n.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'c':
          case 'cc':
            return te(t.length, e, a)
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
      validate: function(e, t, r) {
        return t >= 0 && t <= 6
      },
      set: function(e, t, r, n) {
        return (e = O(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
      parse: function(e, t, r, n) {
        var a = function(e) {
          return 0 === e ? 7 : e
        }
        switch (t) {
          case 'i':
          case 'ii':
            return te(t.length, e)
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
      validate: function(e, t, r) {
        return t >= 1 && t <= 7
      },
      set: function(e, t, r, n) {
        return (
          (e = (function(e, t) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var r = v(t)
            r % 7 == 0 && (r -= 7)
            var n = D(e),
              a = (((r % 7) + 7) % 7 < 1 ? 7 : 0) + r - n.getUTCDay()
            return n.setUTCDate(n.getUTCDate() + a), n
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
      parse: function(e, t, r, n) {
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
      set: function(e, t, r, n) {
        return e.setUTCHours(ne(r), 0, 0, 0), e
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function(e, t, r, n) {
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
      set: function(e, t, r, n) {
        return e.setUTCHours(ne(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function(e, t, r, n) {
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
      set: function(e, t, r, n) {
        return e.setUTCHours(ne(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'h':
            return _(X.hour12h, e)
          case 'ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 12
      },
      set: function(e, t, r, n) {
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
      parse: function(e, t, r, n) {
        switch (t) {
          case 'H':
            return _(X.hour23h, e)
          case 'Ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 23
      },
      set: function(e, t, r, n) {
        return e.setUTCHours(r, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'K':
            return _(X.hour11h, e)
          case 'Ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function(e, t, r, n) {
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
      parse: function(e, t, r, n) {
        switch (t) {
          case 'k':
            return _(X.hour24h, e)
          case 'ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 24
      },
      set: function(e, t, r, n) {
        var a = r <= 24 ? r % 24 : r
        return e.setUTCHours(a, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'm':
            return _(X.minute, e)
          case 'mo':
            return r.ordinalNumber(e, {unit: 'minute'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function(e, t, r, n) {
        return e.setUTCMinutes(r, 0, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function(e, t, r, n) {
        switch (t) {
          case 's':
            return _(X.second, e)
          case 'so':
            return r.ordinalNumber(e, {unit: 'second'})
          default:
            return te(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function(e, t, r, n) {
        return e.setUTCSeconds(r, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function(e, t, r, n) {
        return te(t.length, e, function(e) {
          return Math.floor(e * Math.pow(10, 3 - t.length))
        })
      },
      set: function(e, t, r, n) {
        return e.setUTCMilliseconds(r), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'X':
            return $(Q, e)
          case 'XX':
            return $(V, e)
          case 'XXXX':
            return $(K, e)
          case 'XXXXX':
            return $(Z, e)
          case 'XXX':
          default:
            return $(J, e)
        }
      },
      set: function(e, t, r, n) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'x':
            return $(Q, e)
          case 'xx':
            return $(V, e)
          case 'xxxx':
            return $(K, e)
          case 'xxxxx':
            return $(Z, e)
          case 'xxx':
          default:
            return $(J, e)
        }
      },
      set: function(e, t, r, n) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function(e, t, r, n) {
        return ee(e)
      },
      set: function(e, t, r, n) {
        return [new Date(1e3 * r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(e, t, r, n) {
        return ee(e)
      },
      set: function(e, t, r, n) {
        return [new Date(r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  ce = 10,
  le = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  ue = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  pe = /^'(.*?)'?$/,
  ge = /''/g,
  fe = /\S/,
  he = /[a-zA-Z]/
function me(e, t) {
  if (t.timestampIsSet) return e
  var r = new Date(0)
  return (
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    r
  )
}
function ye(e, t) {
  for (var r = e < 0 ? '-' : '', n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return r + n
}
var be = {
  G: function(e, t, r) {
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
  y: function(e, t, r) {
    if ('yo' === t) {
      var n = e.getUTCFullYear(),
        a = n > 0 ? n : 1 - n
      return r.ordinalNumber(a, {unit: 'year'})
    }
    return (function(e, t) {
      var r = e.getUTCFullYear(),
        n = r > 0 ? r : 1 - r
      return ye('yy' === t ? n % 100 : n, t.length)
    })(e, t)
  },
  Y: function(e, t, r, n) {
    var a = P(e, n),
      o = a > 0 ? a : 1 - a
    return 'YY' === t
      ? ye(o % 100, 2)
      : 'Yo' === t
      ? r.ordinalNumber(o, {unit: 'year'})
      : ye(o, t.length)
  },
  R: function(e, t) {
    return ye(U(e), t.length)
  },
  u: function(e, t) {
    return ye(e.getUTCFullYear(), t.length)
  },
  Q: function(e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'Q':
        return String(n)
      case 'QQ':
        return ye(n, 2)
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
  q: function(e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'q':
        return String(n)
      case 'qq':
        return ye(n, 2)
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
  M: function(e, t, r) {
    var n = e.getUTCMonth()
    switch (t) {
      case 'M':
      case 'MM':
        return (function(e, t) {
          var r = e.getUTCMonth()
          return 'M' === t ? String(r + 1) : ye(r + 1, 2)
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
  L: function(e, t, r) {
    var n = e.getUTCMonth()
    switch (t) {
      case 'L':
        return String(n + 1)
      case 'LL':
        return ye(n + 1, 2)
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
  w: function(e, t, r, n) {
    var a = Y(e, n)
    return 'wo' === t ? r.ordinalNumber(a, {unit: 'week'}) : ye(a, t.length)
  },
  I: function(e, t, r) {
    var n = q(e)
    return 'Io' === t ? r.ordinalNumber(n, {unit: 'week'}) : ye(n, t.length)
  },
  d: function(e, t, r) {
    return 'do' === t
      ? r.ordinalNumber(e.getUTCDate(), {unit: 'date'})
      : (function(e, t) {
          return ye(e.getUTCDate(), t.length)
        })(e, t)
  },
  D: function(e, t, r) {
    var n = (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var t = D(e),
        r = t.getTime()
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      var n = r - t.getTime()
      return Math.floor(n / 864e5) + 1
    })(e)
    return 'Do' === t ? r.ordinalNumber(n, {unit: 'dayOfYear'}) : ye(n, t.length)
  },
  E: function(e, t, r) {
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
  e: function(e, t, r, n) {
    var a = e.getUTCDay(),
      o = (a - n.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'e':
        return String(o)
      case 'ee':
        return ye(o, 2)
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
  c: function(e, t, r, n) {
    var a = e.getUTCDay(),
      o = (a - n.weekStartsOn + 8) % 7 || 7
    switch (t) {
      case 'c':
        return String(o)
      case 'cc':
        return ye(o, t.length)
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
  i: function(e, t, r) {
    var n = e.getUTCDay(),
      a = 0 === n ? 7 : n
    switch (t) {
      case 'i':
        return String(a)
      case 'ii':
        return ye(a, t.length)
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
  a: function(e, t, r) {
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
  b: function(e, t, r) {
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
  B: function(e, t, r) {
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
  h: function(e, t, r) {
    if ('ho' === t) {
      var n = e.getUTCHours() % 12
      return 0 === n && (n = 12), r.ordinalNumber(n, {unit: 'hour'})
    }
    return (function(e, t) {
      return ye(e.getUTCHours() % 12 || 12, t.length)
    })(e, t)
  },
  H: function(e, t, r) {
    return 'Ho' === t
      ? r.ordinalNumber(e.getUTCHours(), {unit: 'hour'})
      : (function(e, t) {
          return ye(e.getUTCHours(), t.length)
        })(e, t)
  },
  K: function(e, t, r) {
    var n = e.getUTCHours() % 12
    return 'Ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : ye(n, t.length)
  },
  k: function(e, t, r) {
    var n = e.getUTCHours()
    return 0 === n && (n = 24), 'ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : ye(n, t.length)
  },
  m: function(e, t, r) {
    return 'mo' === t
      ? r.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'})
      : (function(e, t) {
          return ye(e.getUTCMinutes(), t.length)
        })(e, t)
  },
  s: function(e, t, r) {
    return 'so' === t
      ? r.ordinalNumber(e.getUTCSeconds(), {unit: 'second'})
      : (function(e, t) {
          return ye(e.getUTCSeconds(), t.length)
        })(e, t)
  },
  S: function(e, t) {
    return (function(e, t) {
      var r = t.length,
        n = e.getUTCMilliseconds()
      return ye(Math.floor(n * Math.pow(10, r - 3)), t.length)
    })(e, t)
  },
  X: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    if (0 === a) return 'Z'
    switch (t) {
      case 'X':
        return ve(a)
      case 'XXXX':
      case 'XX':
        return De(a)
      case 'XXXXX':
      case 'XXX':
      default:
        return De(a, ':')
    }
  },
  x: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'x':
        return ve(a)
      case 'xxxx':
      case 'xx':
        return De(a)
      case 'xxxxx':
      case 'xxx':
      default:
        return De(a, ':')
    }
  },
  O: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + we(a, ':')
      case 'OOOO':
      default:
        return 'GMT' + De(a, ':')
    }
  },
  z: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + we(a, ':')
      case 'zzzz':
      default:
        return 'GMT' + De(a, ':')
    }
  },
  t: function(e, t, r, n) {
    var a = n._originalDate || e
    return ye(Math.floor(a.getTime() / 1e3), t.length)
  },
  T: function(e, t, r, n) {
    return ye((n._originalDate || e).getTime(), t.length)
  },
}
function we(e, t) {
  var r = e > 0 ? '-' : '+',
    n = Math.abs(e),
    a = Math.floor(n / 60),
    o = n % 60
  if (0 === o) return r + String(a)
  var i = t || ''
  return r + String(a) + i + ye(o, 2)
}
function ve(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + ye(Math.abs(e) / 60, 2) : De(e, t)
}
function De(e, t) {
  var r = t || '',
    n = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return n + ye(Math.floor(a / 60), 2) + r + ye(a % 60, 2)
}
var ke = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  xe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Ce = /^'(.*?)'?$/,
  Te = /''/g,
  Se = /[a-zA-Z]/
function Be(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = String(t),
    a = r || {},
    o = a.locale || w,
    i = o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : v(i),
    d = null == a.firstWeekContainsDate ? s : v(a.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = o.options && o.options.weekStartsOn,
    l = null == c ? 0 : v(c),
    u = null == a.weekStartsOn ? l : v(a.weekStartsOn)
  if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!o.localize) throw new RangeError('locale must contain localize property')
  if (!o.formatLong) throw new RangeError('locale must contain formatLong property')
  var p = D(e)
  if (
    !(function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var t = D(e)
      return !isNaN(t)
    })(p)
  )
    throw new RangeError('Invalid time value')
  var g = k(p, L(p)),
    f = {firstWeekContainsDate: d, weekStartsOn: u, locale: o, _originalDate: p}
  return n
    .match(xe)
    .map(function(e) {
      var t = e[0]
      return 'p' === t || 'P' === t ? (0, S[t])(e, o.formatLong, f) : e
    })
    .join('')
    .match(ke)
    .map(function(e) {
      if ("''" === e) return "'"
      var t = e[0]
      if ("'" === t) return e.match(Ce)[1].replace(Te, "'")
      var r = be[t]
      if (r)
        return (
          !a.useAdditionalWeekYearTokens && E(e) && F(e),
          !a.useAdditionalDayOfYearTokens && R(e) && F(e),
          r(g, e, o.localize, f)
        )
      if (t.match(Se))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + t + '`',
        )
      return e
    })
    .join('')
}
function Le(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = D(e),
    n = v(t)
  return r.setDate(r.getDate() + n), r
}
function Me(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = e || {},
    n = D(r.start),
    a = D(r.end).getTime()
  if (!(n.getTime() <= a)) throw new RangeError('Invalid interval')
  var o = [],
    i = n
  i.setHours(0, 0, 0, 0)
  var s = t && 'step' in t ? Number(t.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; i.getTime() <= a; ) o.push(D(i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0)
  return o
}
function We(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : v(a),
    i = null == r.weekStartsOn ? o : v(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = D(e),
    d = s.getDay(),
    c = 6 + (d < i ? -7 : 0) - (d - i)
  return s.setDate(s.getDate() + c), s.setHours(23, 59, 59, 999), s
}
function Re(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = D(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function Ee(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : v(a),
    i = null == r.weekStartsOn ? o : v(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = D(e),
    d = s.getDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setDate(s.getDate() - c), s.setHours(0, 0, 0, 0), s
}
var Fe = function(e) {
    return Be(e, 'dd')
  },
  He = function(e) {
    return Be(e, 'eeeeee')
  },
  Pe = function(e) {
    return Be(e, 'MMMM yyyy')
  }
function Oe(e) {
  var t = e.year,
    r = e.month,
    n = e.firstDayOfWeek,
    o = void 0 === n ? 1 : n,
    i = e.dayLabelFormat,
    s = void 0 === i ? Fe : i,
    d = e.weekdayLabelFormat,
    c = void 0 === d ? He : d,
    l = e.monthLabelFormat,
    u = void 0 === l ? Pe : l
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
                    return Be(e, 'dd')
                  }
                : o,
            s = new Date(t, r),
            d = Re(s),
            c = (function(e) {
              if (arguments.length < 1)
                throw new TypeError(
                  '1 argument required, but only ' + arguments.length + ' present',
                )
              return D(e).getDay()
            })(d),
            l = (function(e) {
              if (arguments.length < 1)
                throw new TypeError(
                  '1 argument required, but only ' + arguments.length + ' present',
                )
              var t = D(e),
                r = t.getMonth()
              return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
            })(s),
            u = Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
            p = Me({start: d, end: l}).map(function(e) {
              return {date: e, dayLabel: i(e)}
            })
          return u.concat(p)
        })({year: t, month: r, firstDayOfWeek: o, dayLabelFormat: s})
      },
      [t, r, o, s],
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
                    return Be(e, 'iiiiii')
                  }
                : a,
            i = new Date()
          return Me({start: Le(Ee(i), n), end: Le(We(i), n)}).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: u(new Date(t, r)),
  }
}
function ze(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = D(e),
    n = D(t)
  return r.getTime() < n.getTime()
}
function Ue(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = D(e),
    n = D(t)
  return r.getTime() > n.getTime()
}
function Ie(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = D(e).getTime(),
    a = D(r.start).getTime(),
    o = D(r.end).getTime()
  if (!(a <= o)) throw new RangeError('Invalid interval')
  return n >= a && n <= o
}
function qe(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = D(e)
  return t.setHours(0, 0, 0, 0), t
}
function Ne(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = qe(e),
    n = qe(t)
  return r.getTime() === n.getTime()
}
function Ye(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = D(e),
    n = v(t),
    a = r.getMonth() + n,
    o = new Date(0)
  o.setFullYear(r.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
  var i = (function(e) {
    if (arguments.length < 1)
      throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
    var t = D(e),
      r = t.getFullYear(),
      n = t.getMonth(),
      a = new Date(0)
    return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
  })(o)
  return r.setMonth(a, Math.min(i, r.getDate())), r
}
function Ae(e) {
  var t = Re(e)
  return {
    year: (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return D(e).getFullYear()
    })(t),
    month: (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return D(e).getMonth()
    })(t),
    date: t,
  }
}
function je(e, t) {
  var r = Ae(t || qe(Date.now())),
    n = r.date,
    a = [r]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = Ye(e[e.length - 1].date, 1)), e.concat([Ae(n)])
      }, a)),
    a
  )
}
function Ge(e, t, r) {
  var n = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (n = 0 === e.length ? Ye(n, r) : Ye(n, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([Ae(n)]) : [Ae(n)].concat(e)
    )
  }, [])
}
function Xe(e, t, r) {
  return e && 'string' == typeof t ? Be(e, t) : e && 'function' == typeof t ? t(e) : r
}
function Qe(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    d = !i || !ze(t, Le(i, -1)),
    c = !s || !Ue(Le(t, a - 1), s)
  return (
    !(!t || 1 !== a || r || n(t)) ||
    ((t && a > 1 && !r && !o) || (t && a > 0 && o && d && c) || (t && a > 0 && o && !i && !s)
      ? Me({start: t, end: Le(t, a - 1)}).reduce(function(e, t) {
          return e ? !n(t) : e
        }, !0)
      : !(!t || !r || o) &&
        !ze(r, Le(t, a - 1)) &&
        Me({start: t, end: r}).reduce(function(e, t) {
          return e ? !n(t) : e
        }, !0))
  )
}
var Ve = 'startDate',
  Ke = 'endDate'
function Je(e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.focusedInput,
    s = e.minBookingDate,
    d = e.maxBookingDate,
    c = e.onDatesChange,
    l = e.exactMinBookingDays,
    u = void 0 !== l && l,
    p = e.minBookingDays,
    g = void 0 === p ? 1 : p,
    f = e.numberOfMonths,
    h = void 0 === f ? 2 : f,
    m = e.firstDayOfWeek,
    y = void 0 === m ? 1 : m,
    b = e.isDateBlocked,
    w =
      void 0 === b
        ? function() {
            return !1
          }
        : b,
    v = r(function() {
      return je(h, a)
    }),
    D = v[0],
    k = v[1],
    x = r(null),
    C = x[0],
    T = x[1],
    S = r(a),
    B = S[0],
    L = S[1],
    M = n(
      function(e) {
        L(e), (!B || (B && !Ne(e, B))) && k(je(h, e))
      },
      [L, k, h, B],
    ),
    W = n(
      function(e) {
        return (function(e, t, r) {
          return !(!t || !r) && Ie(e, {start: t, end: r})
        })(e, a, o)
      },
      [a, o],
    ),
    R = n(
      function(e) {
        return (function(e, t, r) {
          return !!((t && Ne(e, t)) || (r && Ne(e, r)))
        })(e, a, o)
      },
      [a, o],
    ),
    E = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            r = e.minBookingDate,
            n = e.maxBookingDate,
            a = e.isDateBlockedFn,
            o = e.startDate,
            i = e.endDate,
            s = e.minBookingDays,
            d = void 0 === s ? 1 : s,
            c = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
            l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
          return !!(
            (c && ze(t, c)) ||
            (l && Ue(t, l)) ||
            (o && !i && d > 1 && Ie(t, {start: o, end: Le(o, d - 2)})) ||
            (a && a(t))
          )
        })({
          date: e,
          minBookingDate: s,
          maxBookingDate: d,
          startDate: a,
          endDate: o,
          minBookingDays: g,
          isDateBlockedFn: w,
        })
      },
      [s, d, a, o, g, w],
    ),
    F = n(
      function(e) {
        return !!B && Ne(e, B)
      },
      [B],
    ),
    H = n(
      function(e) {
        return (function(e) {
          var t = e.date,
            r = e.startDate,
            n = e.endDate,
            a = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && Ie(t, {start: o, end: Le(o, i - 1)})
            ? Me({start: o, end: Le(o, i - 1)}).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : r && !n && o && Ie(t, {start: r, end: Le(r, i - 1)}) && Ne(r, o) && i > 1
            ? Me({start: r, end: Le(r, i - 1)}).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
            : !(!r || n || !o || ze(o, r) || !Ie(t, {start: r, end: o})) &&
              Me({start: r, end: o}).reduce(function(e, t) {
                return e ? !a(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: C,
          startDate: a,
          endDate: o,
          minBookingDays: g,
          exactMinBookingDays: u,
          isDateBlocked: w,
        })
      },
      [C, a, o, g, u, w],
    )
  function P(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !B
    ) {
      var t = D[0]
      M(t.date), k(je(h, t.date))
    }
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', P),
        function() {
          window.removeEventListener('keydown', P)
        }
      )
    }),
    {
      firstDayOfWeek: y,
      activeMonths: D,
      isDateSelected: W,
      isDateHovered: H,
      isFirstOrLastSelectedDate: R,
      isDateBlocked: E,
      numberOfMonths: h,
      isDateFocused: F,
      focusedDate: B,
      hoveredDate: C,
      onResetDates: function() {
        c({startDate: null, endDate: null, focusedInput: Ve})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var t = !E(e) || (a && Ne(e, a)),
              r = !s || !ze(e, Le(s, -1)),
              n = !d || !Ue(e, d),
              i = Le(e, g - 1),
              c = !s || !ze(i, s),
              l = !d || !Ue(i, d),
              p = u && g > 1 && r && n && c && l,
              f = a && !o && !u && r && n,
              h = !(g > 1 && a) || Ie(e, {start: a, end: Le(a, g - 2)}),
              m = a && Ne(e, a) && h
            t && (p || f || m) ? T(e) : null !== C && T(null)
          }
        } else T(null)
      },
      onDateSelect: function(e) {
        ;(i === Ke || i === Ve) &&
        g > 0 &&
        u &&
        Qe({
          minBookingDays: g,
          exactMinBookingDays: u,
          minBookingDate: s,
          maxBookingDate: d,
          isDateBlocked: w,
          startDate: e,
          endDate: null,
        })
          ? c({startDate: e, endDate: Le(e, g - 1), focusedInput: null})
          : ((i === Ke && a && ze(e, a)) || (i === Ve && o && Ue(e, o))) &&
            !u &&
            Qe({minBookingDays: g, isDateBlocked: w, startDate: e, endDate: null})
          ? c({endDate: null, startDate: e, focusedInput: Ke})
          : i === Ve && !u && Qe({minBookingDays: g, isDateBlocked: w, endDate: o, startDate: e})
          ? c({endDate: o, startDate: e, focusedInput: Ke})
          : i === Ve && !u && Qe({minBookingDays: g, isDateBlocked: w, endDate: null, startDate: e})
          ? c({endDate: null, startDate: e, focusedInput: Ke})
          : i === Ke &&
            a &&
            !ze(e, a) &&
            !u &&
            Qe({minBookingDays: g, isDateBlocked: w, startDate: a, endDate: e}) &&
            c({startDate: a, endDate: e, focusedInput: null}),
          i === Ke || (B && (!B || Ne(e, B))) || k(je(h, e))
      },
      onDateFocus: M,
      goToPreviousMonths: function() {
        k(Ge(D, h, -1)), L(null)
      },
      goToNextMonths: function() {
        k(Ge(D, h, 1)), L(null)
      },
      goToPreviousYear: function() {
        k(Ge(D, h, -(12 - h + 1))), L(null)
      },
      goToNextYear: function() {
        k(Ge(D, h, 12 - h + 1)), L(null)
      },
    }
  )
}
var Ze = function() {
  return (Ze =
    Object.assign ||
    function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var a in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function _e(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var $e = Object.getOwnPropertySymbols,
  et = Object.prototype.hasOwnProperty,
  tt = Object.prototype.propertyIsEnumerable
function rt(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var nt = (function() {
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
        for (var r, n, a = rt(e), o = 1; o < arguments.length; o++) {
          for (var i in (r = Object(arguments[o]))) et.call(r, i) && (a[i] = r[i])
          if ($e) {
            n = $e(r)
            for (var s = 0; s < n.length; s++) tt.call(r, n[s]) && (a[n[s]] = r[n[s]])
          }
        }
        return a
      },
  at = function(e, t) {
    var r = nt({}, e, t)
    for (var n in e) {
      var a
      e[n] && 'object' == typeof t[n] && nt(r, (((a = {})[n] = nt(e[n], t[n])), a))
    }
    return r
  },
  ot = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  it = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  st = function(e, t) {
    return dt(t, e, e)
  },
  dt = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  ct = function e(t) {
    var r = {},
      n = function(e) {
        var n,
          a,
          o = {},
          i = !1,
          s = e.theme && e.theme.disableStyledSystemCache
        for (var d in e)
          if (t[d]) {
            var c = t[d],
              l = e[d],
              u = dt(e.theme, c.scale, c.defaults)
            if ('object' != typeof l) nt(o, c(l, u, e))
            else {
              if (
                ((r.breakpoints =
                  (!s && r.breakpoints) || dt(e.theme, 'breakpoints', ot.breakpoints)),
                Array.isArray(l))
              ) {
                ;(r.media = (!s && r.media) || [null].concat(r.breakpoints.map(it))),
                  (o = at(o, lt(r.media, c, u, l, e)))
                continue
              }
              null !== l && ((o = at(o, ut(r.breakpoints, c, u, l, e))), (i = !0))
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
  lt = function(e, t, r, n, a) {
    var o = {}
    return (
      n.slice(0, e.length).forEach(function(n, i) {
        var s,
          d = e[i],
          c = t(n, r, a)
        d ? nt(o, (((s = {})[d] = nt({}, o[d], c)), s)) : nt(o, c)
      }),
      o
    )
  },
  ut = function(e, t, r, n, a) {
    var o = {}
    for (var i in n) {
      var s = e[i],
        d = t(n[i], r, a)
      if (s) {
        var c,
          l = it(s)
        nt(o, (((c = {})[l] = nt({}, o[l], d)), c))
      } else nt(o, d)
    }
    return o
  },
  pt = function(e) {
    var t = e.properties,
      r = e.property,
      n = e.scale,
      a = e.transform,
      o = void 0 === a ? st : a,
      i = e.defaultScale
    t = t || [r]
    var s = function(e, r, n) {
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
    return (s.scale = n), (s.defaults = i), s
  },
  gt = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(r) {
        var n = e[r]
        t[r] = !0 !== n ? ('function' != typeof n ? pt(n) : n) : pt({property: r, scale: r})
      }),
      ct(t)
    )
  },
  ft = function() {
    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    r.forEach(function(t) {
      t && t.config && nt(e, t.config)
    })
    var a = ct(e)
    return a
  },
  ht = gt({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return dt(
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
  mt = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
mt.bg = mt.backgroundColor
var yt,
  bt = gt(mt),
  wt = gt({
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
  vt = gt({
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
  Dt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  kt = gt({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Dt.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Dt.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Dt.space},
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
  xt = gt(
    (((yt = {
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
    (yt.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
    (yt.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
    (yt.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
    (yt.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
    (yt.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
    (yt.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
    (yt.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
    (yt.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
    (yt.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
    (yt.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
    (yt.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
    (yt.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'}),
    yt),
  ),
  Ct = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(Ct.bgImage = Ct.backgroundImage),
  (Ct.bgSize = Ct.backgroundSize),
  (Ct.bgPosition = Ct.backgroundPosition),
  (Ct.bgRepeat = Ct.backgroundRepeat)
var Tt = gt(Ct),
  St = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Bt = gt({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: St.space},
    right: {property: 'right', scale: 'space', defaultScale: St.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: St.space},
    left: {property: 'left', scale: 'space', defaultScale: St.space},
  }),
  Lt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Mt = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  Wt = function(e, t) {
    if (!Mt(e)) return dt(t, e, e)
    var r = e < 0,
      n = Math.abs(e),
      a = dt(t, n, n)
    return Mt(a) ? a * (r ? -1 : 1) : r ? '-' + a : a
  },
  Rt = {}
;(Rt.margin = {
  margin: {property: 'margin', scale: 'space', transform: Wt, defaultScale: Lt.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: Wt, defaultScale: Lt.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: Wt, defaultScale: Lt.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: Wt, defaultScale: Lt.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: Wt, defaultScale: Lt.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: Wt,
    defaultScale: Lt.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: Wt,
    defaultScale: Lt.space,
  },
}),
  (Rt.margin.m = Rt.margin.margin),
  (Rt.margin.mt = Rt.margin.marginTop),
  (Rt.margin.mr = Rt.margin.marginRight),
  (Rt.margin.mb = Rt.margin.marginBottom),
  (Rt.margin.ml = Rt.margin.marginLeft),
  (Rt.margin.mx = Rt.margin.marginX),
  (Rt.margin.my = Rt.margin.marginY),
  (Rt.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Lt.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Lt.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Lt.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Lt.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Lt.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Lt.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Lt.space},
  }),
  (Rt.padding.p = Rt.padding.padding),
  (Rt.padding.pt = Rt.padding.paddingTop),
  (Rt.padding.pr = Rt.padding.paddingRight),
  (Rt.padding.pb = Rt.padding.paddingBottom),
  (Rt.padding.pl = Rt.padding.paddingLeft),
  (Rt.padding.px = Rt.padding.paddingX),
  (Rt.padding.py = Rt.padding.paddingY)
var Et,
  Ft = ft(gt(Rt.margin), gt(Rt.padding)),
  Ht = gt({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function Pt() {
  return (Pt =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
var Ot,
  zt,
  Ut,
  It = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  qt = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  Nt = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  Yt = {
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
  At = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  jt =
    (((Et = {
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
    (Et.borderTopRightRadius = 'radii'),
    (Et.borderBottomWidth = 'borderWidths'),
    (Et.borderBottomColor = 'colors'),
    (Et.borderBottomStyle = 'borderStyles'),
    (Et.borderBottomLeftRadius = 'radii'),
    (Et.borderBottomRightRadius = 'radii'),
    (Et.borderLeftWidth = 'borderWidths'),
    (Et.borderLeftColor = 'colors'),
    (Et.borderLeftStyle = 'borderStyles'),
    (Et.borderRightWidth = 'borderWidths'),
    (Et.borderRightColor = 'colors'),
    (Et.borderRightStyle = 'borderStyles'),
    (Et.boxShadow = 'shadows'),
    (Et.textShadow = 'shadows'),
    (Et.zIndex = 'zIndices'),
    (Et.width = 'sizes'),
    (Et.minWidth = 'sizes'),
    (Et.maxWidth = 'sizes'),
    (Et.height = 'sizes'),
    (Et.minHeight = 'sizes'),
    (Et.maxHeight = 'sizes'),
    (Et.flexBasis = 'sizes'),
    (Et.size = 'sizes'),
    (Et.fill = 'colors'),
    (Et.stroke = 'colors'),
    Et),
  Gt = function(e, t) {
    if ('number' != typeof t || t >= 0) return It(e, t, t)
    var r = Math.abs(t),
      n = It(e, r, r)
    return 'string' == typeof n ? '-' + n : -1 * n
  },
  Xt = [
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
    return Pt({}, e, (((r = {})[t] = Gt), r))
  }, {}),
  Qt = function e(t) {
    return function(r) {
      void 0 === r && (r = {})
      var n = Pt({}, Nt, {}, r.theme || r),
        a = {},
        o = (function(e) {
          return function(t) {
            var r = {},
              n = It(t, 'breakpoints', qt),
              a = [null].concat(
                n.map(function(e) {
                  return '@media screen and (min-width: ' + e + ')'
                }),
              )
            for (var o in e) {
              var i = 'function' == typeof e[o] ? e[o](t) : e[o]
              if (null != i)
                if (Array.isArray(i))
                  for (var s = 0; s < i.slice(0, a.length).length; s++) {
                    var d = a[s]
                    null != i[s] && (d ? ((r[d] = r[d] || {}), (r[d][o] = i[s])) : (r[o] = i[s]))
                  }
                else r[o] = i
            }
            return r
          }
        })('function' == typeof t ? t(n) : t)(n)
      for (var i in o) {
        var s = o[i],
          d = 'function' == typeof s ? s(n) : s
        if ('variant' !== i)
          if (d && 'object' == typeof d) a[i] = e(d)(n)
          else {
            var c = It(Yt, i, i),
              l = It(jt, c),
              u = It(n, l, It(n, c, {})),
              p = It(Xt, c, It)(u, d, d)
            if (At[c]) for (var g = At[c], f = 0; f < g.length; f++) a[g[f]] = p
            else a[c] = p
          }
        else a = Pt({}, a, {}, e(It(n, d))(n))
      }
      return a
    }
  },
  Vt = function(e) {
    var t,
      r,
      n = e.scale,
      a = e.prop,
      o = void 0 === a ? 'variant' : a,
      i = e.variants,
      s = void 0 === i ? {} : i,
      d = e.key
    ;((r = Object.keys(s).length
      ? function(e, t, r) {
          return Qt(dt(t, e, null))(r.theme)
        }
      : function(e, t) {
          return dt(t, e, null)
        }).scale = n || d),
      (r.defaults = s)
    var c = (((t = {})[o] = r), t)
    return ct(c)
  },
  Kt =
    (Vt({key: 'buttons'}),
    Vt({key: 'textStyles', prop: 'textStyle'}),
    Vt({key: 'colorStyles', prop: 'colors'}),
    ht.width),
  Jt = ht.height,
  Zt = ht.minHeight,
  _t = ht.display,
  $t = ht.overflow,
  er = bt.opacity,
  tr = wt.fontSize,
  rr = wt.fontFamily,
  nr = wt.fontWeight,
  ar = wt.lineHeight,
  or = vt.alignItems,
  ir = vt.justifyContent,
  sr = vt.flexWrap,
  dr = vt.flexDirection,
  cr = vt.flex,
  lr = kt.gridGap,
  ur = kt.gridColumnGap,
  pr = kt.gridRowGap,
  gr = kt.gridAutoFlow,
  fr = kt.gridAutoColumns,
  hr = kt.gridAutoRows,
  mr = kt.gridTemplateColumns,
  yr = kt.gridTemplateRows,
  br = kt.gridTemplateAreas,
  wr = kt.gridArea,
  vr = xt.borderRadius,
  Dr = Bt.zIndex,
  kr = Bt.top,
  xr = Bt.right,
  Cr = Bt.bottom,
  Tr = Bt.left,
  Sr = function(e) {
    var t = e.prop,
      r = e.cssProperty,
      n = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      s = e.properties,
      d = {}
    return (
      (d[t] = pt({properties: s, property: r || t, scale: a, defaultScale: i, transform: o})),
      n && (d[n] = d[t]),
      ct(d)
    )
  },
  Br = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Lr = Ze({}, Br, {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Mr = Ze({}, Br, {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  Wr = Sr({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Rr = ft(fr, gr, hr, ur, lr, pr, br, mr, yr, or, ir, Ft),
  Er = d('div')(
    Ot ||
      (Ot = _e(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    Rr,
    Wr,
  ),
  Fr = ft(Ft, cr, sr, dr, or, ir, wr, Jt, Kt),
  Hr = d('div')(
    zt || (zt = _e(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    Fr,
  ),
  Pr = ft(wr, Jt, Ft, Kt, Bt, kr, Tr, xr, Cr, Dr),
  Or = d('div')(
    Ut ||
      (Ut = _e(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    Pr,
  )
function zr(t) {
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
function Ur(e) {
  void 0 === e && (e = {})
  var t = o(c)
  return a(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(r, n) {
            var a
            return Ze({}, r, (((a = {})[n] = t.reactDatepicker[n] || e[n]), a))
          }, {})
        : e
    },
    [t, e],
  )
}
var Ir = {
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
function qr(e, t, r) {
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
var Nr,
  Yr,
  Ar,
  jr = Sr({prop: 'placeholderColor', cssProperty: 'color'}),
  Gr = Sr({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  Xr = ft(Bt, xt, Tt, _t, vr, Ft),
  Qr = d('label')(Nr || (Nr = _e(['\n  ', '\n'], ['\n  ', '\n'])), Xr),
  Vr = ft(Bt, Tr, xr, kr, Jt, Kt),
  Kr = d('div')(
    Yr ||
      (Yr = _e(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    Vr,
  ),
  Jr = ft(Tt, Ft, rr, tr, bt, nr, Ft, xt, Kt, Zt, Ht),
  Zr = d('input')(
    Ar ||
      (Ar = _e(
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
    Jr,
    Gr,
    jr,
    Gr,
    jr,
    Gr,
    jr,
  )
function _r(n) {
  var a = n.placeholder,
    s = n.id,
    d = n.vertical,
    l = n.isActive,
    u = n.ariaLabel,
    p = n.onClick,
    g = n.value,
    f = n.showCalendarIcon,
    h = n.padding,
    m = n.rtl,
    y = n.disableAccessibility,
    b = n.dateFormat,
    C = n.onChange,
    T = void 0 === C ? function() {} : C,
    B = r(g),
    M = B[0],
    W = B[1],
    H = i(null)
  t(
    function() {
      W(g)
    },
    [g],
  )
  var P = o(c),
    O = Ur({
      fontFamily: Ir.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: qr('charcoal', Ir.colors.charcoal, P),
      inputBackground: qr('white', Ir.colors.white, P),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: h,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: qr('silverCloud', Ir.colors.silverCloud, P),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: m ? 'unset' : d ? '8px' : '16px',
      inputCalendarWrapperRight: m ? (d ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: qr('graci', Ir.colors.graci, P),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + qr('graci', Ir.colors.graci, P),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: qr('white', Ir.colors.white, P),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + qr('primaryColor', Ir.colors.primaryColor, P),
    })
  return e.createElement(
    Qr,
    {
      htmlFor: s,
      display: O.inputLabelDisplay,
      position: O.inputLabelPosition,
      border: O.inputLabelBorder,
      background: O.inputLabelBackground,
      borderRadius: O.inputLabelBorderRadius,
      m: O.inputLabelMargin,
    },
    f &&
      e.createElement(
        Kr,
        {
          position: O.inputCalendarWrapperPosition,
          height: O.inputCalendarWrapperHeight,
          width: O.inputCalendarWrapperWidth,
          top: O.inputCalendarWrapperTop,
          left: O.inputCalendarWrapperLeft,
          right: O.inputCalendarWrapperRight,
        },
        e.createElement(zr, {
          width: O.inputCalendarIconWidth,
          height: O.inputCalendarIconHeight,
          color: O.inputCalendarIconColor,
        }),
      ),
    e.createElement(Zr, {
      tabIndex: y ? -1 : 0,
      border: O.inputBorder,
      p: O.inputPadding,
      width: O.inputWidth,
      minHeight: O.inputMinHeight,
      background: O.inputBackground,
      fontFamily: O.fontFamily,
      color: O.inputColor,
      fontSize: O.inputFontSize,
      fontWeight: O.inputFontWeight,
      placeholderColor: O.inputPlaceholderColor,
      placeholderFontWeight: O.inputPlaceholderFontWeight,
      boxShadow: l ? O.inputActiveBoxShadow : 'none',
      id: s,
      placeholder: a,
      'aria-label': u,
      value: M,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        W(t),
          'number' == typeof H.current && clearTimeout(H.current),
          (H.current = setTimeout(function() {
            p()
            var e = (function(e, t, r, n) {
              if (arguments.length < 3)
                throw new TypeError(
                  '3 arguments required, but only ' + arguments.length + ' present',
                )
              var a = String(e),
                o = String(t),
                i = n || {},
                s = i.locale || w
              if (!s.match) throw new RangeError('locale must contain match property')
              var d = s.options && s.options.firstWeekContainsDate,
                c = null == d ? 1 : v(d),
                l = null == i.firstWeekContainsDate ? c : v(i.firstWeekContainsDate)
              if (!(l >= 1 && l <= 7))
                throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
              var u = s.options && s.options.weekStartsOn,
                p = null == u ? 0 : v(u),
                g = null == i.weekStartsOn ? p : v(i.weekStartsOn)
              if (!(g >= 0 && g <= 6))
                throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
              if ('' === o) return '' === a ? D(r) : new Date(NaN)
              var f,
                h = {firstWeekContainsDate: l, weekStartsOn: g, locale: s},
                m = [{priority: ce, set: me, index: 0}],
                y = o
                  .match(ue)
                  .map(function(e) {
                    var t = e[0]
                    return 'p' === t || 'P' === t ? (0, S[t])(e, s.formatLong, h) : e
                  })
                  .join('')
                  .match(le),
                b = []
              for (f = 0; f < y.length; f++) {
                var C = y[f]
                !i.useAdditionalWeekYearTokens && E(C) && F(C),
                  !i.useAdditionalDayOfYearTokens && R(C) && F(C)
                var T = C[0],
                  B = de[T]
                if (B) {
                  var M = B.incompatibleTokens
                  if (Array.isArray(M)) {
                    for (var W = void 0, H = 0; H < b.length; H++) {
                      var P = b[H].token
                      if (-1 !== M.indexOf(P) || P === T) {
                        W = b[H]
                        break
                      }
                    }
                    if (W)
                      throw new RangeError(
                        "The format string mustn't contain `"
                          .concat(W.fullToken, '` and `')
                          .concat(C, '` at the same time'),
                      )
                  } else if ('*' === B.incompatibleTokens && b.length)
                    throw new RangeError(
                      "The format string mustn't contain `".concat(
                        C,
                        '` and any other token at the same time',
                      ),
                    )
                  b.push({token: T, fullToken: C})
                  var O = B.parse(a, C, s.match, h)
                  if (!O) return new Date(NaN)
                  m.push({
                    priority: B.priority,
                    set: B.set,
                    validate: B.validate,
                    value: O.value,
                    index: m.length,
                  }),
                    (a = O.rest)
                } else {
                  if (T.match(he))
                    throw new RangeError(
                      'Format string contains an unescaped latin alphabet character `' + T + '`',
                    )
                  if (
                    ("''" === C ? (C = "'") : "'" === T && (C = C.match(pe)[1].replace(ge, "'")),
                    0 !== a.indexOf(C))
                  )
                    return new Date(NaN)
                  a = a.slice(C.length)
                }
              }
              if (a.length > 0 && fe.test(a)) return new Date(NaN)
              var z = m
                  .map(function(e) {
                    return e.priority
                  })
                  .sort(function(e, t) {
                    return t - e
                  })
                  .filter(function(e, t, r) {
                    return r.indexOf(e) === t
                  })
                  .map(function(e) {
                    return m
                      .filter(function(t) {
                        return t.priority === e
                      })
                      .reverse()
                  })
                  .map(function(e) {
                    return e[0]
                  }),
                U = D(r)
              if (isNaN(U)) return new Date(NaN)
              var I = k(U, L(U)),
                q = {}
              for (f = 0; f < z.length; f++) {
                var N = z[f]
                if (N.validate && !N.validate(I, N.value, h)) return new Date(NaN)
                var Y = N.set(I, q, N.value, h)
                Y[0] ? ((I = Y[0]), x(q, Y[1])) : (I = Y)
              }
              return I
            })(t, b, new Date())
            isNaN(e) || T(e)
          }, 1e3))
      },
      onFocus: p,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function $r(t) {
  var r = t.height,
    n = t.width,
    a = t.iconColor,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    s = t.className,
    d = void 0 === s ? '' : s,
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
      className: d,
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
var en,
  tn,
  rn,
  nn = ft(rr, tr, nr, bt, ar, Ft),
  an = d('div')(en || (en = _e(['\n  ', '\n'], ['\n  ', '\n'])), nn),
  on = d(an)(
    rn ||
      (rn = _e(
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
        l(
          tn ||
            (tn = _e(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          r,
        )
      )
    },
  )
function sn(t) {
  var r = t.title,
    n = t.isActive,
    a = t.date,
    i = t.vertical,
    s = o(c),
    d = Ur({
      fontFamily: Ir.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: qr('silverCloud', Ir.colors.silverCloud, s),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: qr('charcoal', Ir.colors.charcoal, s),
      selectDateDateFontSize: i ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: qr('primaryColor', Ir.colors.primaryColor, s),
      selectDatePadding: '0',
    })
  return e.createElement(
    Or,
    {p: d.selectDatePadding},
    e.createElement(
      an,
      {
        fontFamily: d.fontFamily,
        fontSize: d.selectDateLabelFontSize,
        color: d.selectDateLabelColor,
        m: d.selectDateLabelMargin,
      },
      r,
    ),
    e.createElement(
      on,
      {
        as: 'span',
        color: d.selectDateDateColor,
        fontSize: d.selectDateDateFontSize,
        fontWeight: d.selectDateDateFontWeight,
        fontFamily: d.fontFamily,
        p: d.selectDateDatePadding,
        isActive: n,
        selectDateBorderColor: d.selectDateBorderColor,
      },
      a,
    ),
  )
}
var dn,
  cn,
  ln,
  un,
  pn,
  gn = function(t) {
    var r = t.label,
      n = o(c),
      a = Ur({
        fontFamily: Ir.fontFamily,
        monthLabelColor: qr('darcula', Ir.colors.darcula, n),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return e.createElement(
      an,
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
  fn = function(t) {
    var r = t.label,
      n = o(c),
      a = Ur({
        fontFamily: Ir.fontFamily,
        dayLabelColor: qr('silverCloud', Ir.colors.silverCloud, n),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return e.createElement(
      an,
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
  hn = {
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
  mn = e.createContext(hn),
  yn = Sr({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  bn = Sr({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  wn = Sr({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  vn = Sr({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Dn = Sr({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  kn = Sr({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  xn = ft(Ht, Tt, bt, rr, nr, tr),
  Cn = d('button')(
    pn ||
      (pn = _e(
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
    yn,
    bn,
    xn,
    function(e) {
      var t = e.disabledDate,
        r = e.isSelectedStartOrEnd
      return (
        t &&
        !r &&
        l(
          dn ||
            (dn = _e(
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
          ? l(
              ln ||
                (ln = _e(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              kn,
              vn,
            )
          : ''
        : l(
            cn ||
              (cn = _e(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Dn,
            wn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return l(
        un ||
          (un = _e(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Tn(e, t, r, n) {
  var a = n.selectedFirstOrLast,
    o = n.normal,
    i = n.selected,
    s = n.rangeHover
  return t ? a : e ? i : r ? s : o
}
function Sn(r) {
  var s = r.day,
    d = r.date,
    l = i(null),
    u = o(mn),
    p = u.focusedDate,
    g = u.isDateFocused,
    f = u.isDateSelected,
    h = u.isDateHovered,
    m = u.isDateBlocked,
    y = u.isFirstOrLastSelectedDate,
    b = u.onDateSelect,
    w = u.onDateFocus,
    v = u.onDateHover,
    D = u.onDayRender,
    k = (function(e) {
      var r = e.date,
        a = e.focusedDate,
        o = e.isDateSelected,
        i = e.isDateFocused,
        s = e.isFirstOrLastSelectedDate,
        d = e.isDateHovered,
        c = e.isDateBlocked,
        l = e.onDateSelect,
        u = e.onDateFocus,
        p = e.onDateHover,
        g = e.dayRef,
        f = n(
          function() {
            return l(r)
          },
          [r, l],
        ),
        h = n(
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
      var m = c(r) && !d(r)
      return {
        tabIndex: null === a || i(r) ? 0 : -1,
        isSelected: o(r),
        isSelectedStartOrEnd: s(r),
        isWithinHoverRange: d(r),
        disabledDate: m,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(Le(r, 1))
            : 'ArrowLeft' === e.key
            ? u(Le(r, -1))
            : 'ArrowUp' === e.key
            ? u(Le(r, -7))
            : 'ArrowDown' === e.key && u(Le(r, 7))
        },
        onClick: m ? function() {} : f,
        onMouseEnter: h,
      }
    })({
      date: d,
      focusedDate: p,
      isDateFocused: g,
      isDateSelected: f,
      isDateHovered: h,
      isDateBlocked: m,
      isFirstOrLastSelectedDate: y,
      onDateFocus: w,
      onDateSelect: b,
      onDateHover: v,
      dayRef: l,
    }),
    x = o(c),
    C = qr('white', Ir.colors.white, x),
    T = qr('mud', Ir.colors.mud, x),
    S = qr('primaryColor', Ir.colors.primaryColor, x),
    B = qr('accessibility', Ir.colors.accessibility, x),
    L = qr('selectedDay', Ir.colors.selectedDay, x),
    M = qr('selectedDayHover', Ir.colors.selectedDayHover, x),
    W = qr('normalDayHover', Ir.colors.normalDayHover, x),
    R = Ur({
      fontFamily: Ir.fontFamily,
      daySize: Ir.daySize,
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
      daySelectedBackground: L,
      daySelectedHoverBackground: M,
      dayHoverRangeBackground: L,
      daySelectedFirstOrLastBackground: S,
      dayBorderColor: W,
      daySelectedBorderColor: L,
      dayHoverRangeBorderColor: L,
      daySelectedFirstOrLastBorderColor: S,
      dayAccessibilityBorderColor: B,
    }),
    E = a(
      function() {
        return Tn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastBorderColor,
          selected: R.daySelectedBorderColor,
          normal: R.dayBorderColor,
          rangeHover: R.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, R, k.isWithinHoverRange],
    ),
    F = a(
      function() {
        return Tn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastBackground,
          selected: R.daySelectedBackground,
          normal: R.dayBackground,
          rangeHover: R.dayHoverRangeBackground,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, R, k.isWithinHoverRange],
    ),
    H = a(
      function() {
        return Tn(k.isSelected, k.isSelectedStartOrEnd, k.isWithinHoverRange, {
          selectedFirstOrLast: R.daySelectedFirstOrLastColor,
          selected: R.daySelectedColor,
          normal: R.dayColor,
          rangeHover: R.dayHoverRangeColor,
        })
      },
      [k.isSelected, k.isSelectedStartOrEnd, R, k.isWithinHoverRange],
    )
  return e.createElement(
    Cn,
    Ze({}, k, {
      ref: l,
      dayHeight: R.daySize,
      dayWidth: R.daySize,
      background: F,
      color: H,
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
      'aria-label': 'Day-' + d.toDateString(),
      type: 'button',
    }),
    'function' == typeof D
      ? D(d)
      : e.createElement(
          Hr,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          s,
        ),
  )
}
var Bn,
  Ln,
  Mn = u(
    Bn ||
      (Bn = _e(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  Wn = d('div')(
    Ln ||
      (Ln = _e(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    Mn,
  ),
  Rn = function(t) {
    var r = t.year,
      n = t.month,
      a = t.firstDayOfWeek,
      o = Oe({
        dayLabelFormat: t.dayLabelFormat,
        monthLabelFormat: t.monthLabelFormat,
        weekdayLabelFormat: t.weekdayLabelFormat,
        year: r,
        month: n,
        firstDayOfWeek: a,
      }),
      i = o.days,
      s = o.weekdayLabels,
      d = o.monthLabel,
      c = Ur({daySize: Ir.daySize, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return e.createElement(
      Wn,
      null,
      e.createElement(
        Hr,
        {justifyContent: 'center', m: c.monthLabelMargin},
        e.createElement(gn, {label: d}),
      ),
      e.createElement(
        Er,
        {daySizeGridTemplateColumns: c.daySize},
        s.map(function(t) {
          return e.createElement(
            Hr,
            {key: t, justifyContent: 'center', m: c.monthDayLabelMargin},
            e.createElement(fn, {label: t}),
          )
        }),
      ),
      e.createElement(
        Er,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function(t, r) {
          return 'object' == typeof t
            ? e.createElement(Sn, {date: t.date, key: t.dayLabel, day: t.dayLabel})
            : e.createElement('div', {key: r})
        }),
      ),
    )
  }
var En,
  Fn,
  Hn,
  Pn = d('button')(
    En ||
      (En = _e(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  On = d(function(t) {
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
  })(Hn || (Hn = _e(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      l(
        Fn ||
          (Fn = _e(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function zn(t) {
  var r = t.onResetDates,
    n = t.text,
    a = t.rtl,
    i = o(c),
    s = Ur({
      fontFamily: Ir.fontFamily,
      resetDatesIconColor: qr('mud', Ir.colors.mud, i),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: qr('darcula', Ir.colors.darcula, i),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return e.createElement(
    Pn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    e.createElement(On, {
      height: s.resetDatesIconHeight,
      width: s.resetDatesIconWidth,
      color: s.resetDatesIconColor,
      rtl: a,
    }),
    e.createElement(
      an,
      {
        m: s.resetDatesTextMargin,
        lineHeight: s.resetDatesTextLineHeight,
        fontFamily: s.fontFamily,
        fontSize: s.resetDatesTextFontSize,
        color: s.resetDatesTextColor,
      },
      n,
    ),
  )
}
var Un,
  In,
  qn = d('svg')(In || (In = _e(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return l(
      Un ||
        (Un = _e(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function Nn(t) {
  var r = t.height,
    n = t.width,
    a = t.color,
    o = t.direction,
    i = void 0 === o ? 'right' : o,
    s = t.className,
    d = void 0 === s ? '' : s,
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
    qn,
    {
      width: n,
      height: r,
      color: a,
      className: d,
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
var Yn,
  An = ft(Kt, Jt, Tt, Ft, xt),
  jn = d('button')(
    Yn ||
      (Yn = _e(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    An,
  )
function Gn(t) {
  var r = t.type,
    n = t.onClick,
    a = t.vertical,
    i = t.rtl,
    s = t.ariaLabel,
    d = o(c),
    l = Ur({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: qr('white', Ir.colors.white, d),
      navButtonBorder: '1px solid ' + qr('silverCloud', Ir.colors.silverCloud, d),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: qr('greey', Ir.colors.greey, d),
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
    jn,
    {
      width: l.navButtonWidth,
      height: l.navButtonHeight,
      background: l.navButtonBackground,
      border: l.navButtonBorder,
      borderRight: 'up' !== u() || i ? l.navButtonBorder : 'unset',
      borderLeft: 'up' === u() && i ? 'unset' : l.navButtonBorder,
      p: l.navButtonPadding,
      type: 'button',
      'aria-label': s,
      onClick: n,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    e.createElement(Nn, {
      width: l.navButtonIconWidth,
      height: l.navButtonIconHeight,
      color: l.navButtonIconColor,
      direction: u(),
    }),
  )
}
function Xn(t) {
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
var Qn,
  Vn,
  Kn = ft(Ft, bt, tr, rr, nr),
  Jn = d('div')(
    Qn ||
      (Qn = _e(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    Kn,
  ),
  Zn = d('button')(
    Vn ||
      (Vn = _e(
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
    Jn,
    bt,
    bt,
  )
function _n(t) {
  var r = t.onClick,
    n = t.rtl,
    a = t.closeText,
    i = o(c),
    s = Ur({
      fontFamily: Ir.fontFamily,
      closeMargin: n ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: qr('silverCloud', Ir.colors.silverCloud, i),
      closeHoverColor: qr('darcula', Ir.colors.darcula, i),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return e.createElement(
    Zn,
    {
      onClick: r,
      color: s.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    e.createElement(Xn, {width: '15px', height: '16px', color: '#ADADAD'}),
    e.createElement(
      Jn,
      {
        m: s.closeMargin,
        color: s.closeColor,
        fontSize: s.closeFontSize,
        fontFamily: s.fontFamily,
        fontWeight: s.closeFontWeight,
      },
      a,
    ),
  )
}
var $n = u(
    sa ||
      (sa = _e(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  ea = ft(Tt, Ft, vr, Bt, Ht, Kt),
  ta = d('div')(
    ca ||
      (ca = _e(
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
    ea,
    function(e) {
      return (
        e.rtl &&
        l(da || (da = _e(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    $n,
  ),
  ra = d('div')(
    la ||
      (la = _e(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  na = ft(_t, ir),
  aa = d(Or)(ua || (ua = _e(['\n  ', '\n'], ['\n  ', '\n'])), na),
  oa = ft($t, Jt),
  ia = d(Er)(pa || (pa = _e(['\n  ', '\n'], ['\n  ', '\n'])), oa)
var sa,
  da,
  ca,
  la,
  ua,
  pa,
  ga,
  fa,
  ha,
  ma,
  ya,
  ba = e.forwardRef(function(t, r) {
    var n = t.startDate,
      a = t.endDate,
      d = t.minBookingDate,
      l = t.maxBookingDate,
      u = t.focusedInput,
      p = t.onDatesChange,
      g = t.dayLabelFormat,
      f = t.weekdayLabelFormat,
      h = t.monthLabelFormat,
      m = t.onDayRender,
      y = t.vertical,
      b = void 0 !== y && y,
      w = t.rtl,
      v = void 0 !== w && w,
      D = t.showResetDates,
      k = void 0 === D || D,
      x = t.showClose,
      C = void 0 === x || x,
      T = t.showSelectedDates,
      S = void 0 === T || T,
      B = t.exactMinBookingDays,
      L = void 0 !== B && B,
      M = t.isDateBlocked,
      W =
        void 0 === M
          ? function() {
              return !1
            }
          : M,
      R = t.minBookingDays,
      E = void 0 === R ? 1 : R,
      F = t.onClose,
      H = void 0 === F ? function() {} : F,
      P = t.numberOfMonths,
      O = t.firstDayOfWeek,
      z = t.displayFormat,
      U = void 0 === z ? 'MM/dd/yyyy' : z,
      I = t.phrases,
      q = void 0 === I ? Br : I,
      N = Je({
        startDate: n,
        endDate: a,
        focusedInput: u,
        onDatesChange: p,
        minBookingDate: d,
        maxBookingDate: l,
        minBookingDays: E,
        isDateBlocked: W,
        exactMinBookingDays: L,
        numberOfMonths: P,
        firstDayOfWeek: O,
      }),
      Y = N.activeMonths,
      A = N.isDateSelected,
      j = N.isFirstOrLastSelectedDate,
      G = N.isDateHovered,
      X = N.firstDayOfWeek,
      Q = N.onDateSelect,
      V = N.onResetDates,
      K = N.goToPreviousMonths,
      J = N.goToNextMonths,
      Z = N.numberOfMonths,
      _ = N.hoveredDate,
      $ = N.onDateHover,
      ee = N.isDateFocused,
      te = N.focusedDate,
      re = N.onDateFocus,
      ne = N.isDateBlocked
    s(r, function() {
      return {
        onDateSelect: function(e) {
          Q(e)
        },
      }
    })
    var ae = i(null),
      oe = o(c),
      ie = Ur({
        datepickerBackground: '#ffffff',
        datepickerPadding: b ? '16px 16px 0' : '32px',
        datepickerBorderRadius: '2px',
        datepickerPosition: 'relative',
        datepickerWidth: 'fit-content',
        datepickerCloseWrapperPosition: b ? 'relative' : 'absolute',
        datepickerCloseWrapperDisplay: b ? 'flex' : 'block',
        datepickerCloseWrapperJustifyContent: b ? 'flex-end' : 'initial',
        datepickerCloseWrapperMargin: b ? '0 0 16px' : '0',
        datepickerCloseWrapperRight: v ? 'unset' : b ? '0' : '32px',
        datepickerCloseWrapperTop: 'unset',
        datepickerCloseWrapperLeft: v ? '32px' : 'unset',
        datepickerCloseWrapperBottom: 'unset',
        datepickerCloseWrapperZIndex: 1,
        datepickerSelectDateGridTemplateColumns: b ? '87px 50px 87px' : '126px 75px 126px',
        datepickerSelectDateArrowIconWidth: '15px',
        datepickerSelectDateArrowIconHeight: '12px',
        datepickerSelectDateArrowIconColor: qr('silverCloud', Ir.colors.silverCloud, oe),
        datepickerMonthsWrapperMargin: C || S ? (S ? '28px 0 0' : '48px 0 0') : 'unset',
        datepickerPreviousMonthButtonPosition: b ? 'relative' : 'absolute',
        datepickerPreviousMonthButtonTop: b ? 'unset' : '-5px',
        datepickerPreviousMonthButtonLeft: b ? 'unset' : '0',
        datepickerPreviousMonthButtonRight: 'unset',
        datepickerPreviousMonthButtonBottom: 'unset',
        datepickerNextMonthButtonPosition: b ? 'relative' : 'absolute',
        datepickerNextMonthButtonTop: b ? 'unset' : '-5px',
        datepickerNextMonthButtonLeft: 'unset',
        datepickerNextMonthButtonRight: b ? 'unset' : '0',
        datepickerNextMonthButtonBottom: 'unset',
        datepickerMonthsGridGap: b ? '32px' : '0 32px',
        datepickerMonthsGridOverflow: 'auto',
        datepickerMonthsGridHeight: b ? '50vh' : '100%',
        datepickerResetDatesWrapperMargin: b ? 'unset' : '32px 0 0',
        datepickerBoxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
      })
    function se() {
      ae && ae.current && b && (ae.current.scrollTop = 0)
    }
    function de() {
      J(), se()
    }
    function ce() {
      K(), se()
    }
    return e.createElement(
      mn.Provider,
      {
        value: {
          rtl: v,
          isDateFocused: ee,
          isDateSelected: A,
          isDateHovered: G,
          isFirstOrLastSelectedDate: j,
          onDateFocus: re,
          focusedDate: te,
          onDateSelect: Q,
          onDateHover: $,
          onDayRender: m,
          isDateBlocked: ne,
        },
      },
      e.createElement(
        ta,
        {
          background: ie.datepickerBackground,
          p: ie.datepickerPadding,
          borderRadius: ie.datepickerBorderRadius,
          position: ie.datepickerPosition,
          boxShadow: ie.datepickerBoxShadow,
          width: ie.datepickerWidth,
          rtl: v,
        },
        C &&
          e.createElement(
            aa,
            {
              m: ie.datepickerCloseWrapperMargin,
              display: ie.datepickerCloseWrapperDisplay,
              justifyContent: ie.datepickerCloseWrapperJustifyContent,
              position: ie.datepickerCloseWrapperPosition,
              right: ie.datepickerCloseWrapperRight,
              top: ie.datepickerCloseWrapperTop,
              left: ie.datepickerCloseWrapperLeft,
              bottom: ie.datepickerCloseWrapperBottom,
              zIndex: ie.datepickerCloseWrapperZIndex,
            },
            e.createElement(_n, {onClick: H, rtl: v, closeText: q.close}),
          ),
        S &&
          e.createElement(
            ra,
            null,
            e.createElement(
              Er,
              {gridTemplateColumns: ie.datepickerSelectDateGridTemplateColumns},
              e.createElement(sn, {
                title: q.datepickerStartDateLabel,
                date: Xe(n, U, q.datepickerStartDatePlaceholder),
                isActive: u === Ve,
                vertical: b,
              }),
              e.createElement(
                Hr,
                {justifyContent: 'center', alignItems: 'center'},
                e.createElement($r, {
                  height: ie.datepickerSelectDateArrowIconHeight,
                  width: ie.datepickerSelectDateArrowIconWidth,
                  iconColor: ie.datepickerSelectDateArrowIconColor,
                }),
              ),
              e.createElement(sn, {
                title: q.datepickerEndDateLabel,
                date: Xe(a, U, q.datepickerEndDatePlaceholder),
                isActive: u === Ke,
                vertical: b,
              }),
            ),
          ),
        e.createElement(
          Or,
          {position: 'relative'},
          e.createElement(
            Or,
            {m: ie.datepickerMonthsWrapperMargin},
            e.createElement(
              ia,
              {
                'data-testid': 'MonthGrid',
                overflow: ie.datepickerMonthsGridOverflow,
                height: ie.datepickerMonthsGridHeight,
                gridTemplateColumns: b ? '1fr' : 'repeat(' + Z + ', 1fr)',
                gridGap: ie.datepickerMonthsGridGap,
                pr: v ? '1px' : '0',
                ref: ae,
                onMouseLeave: function() {
                  _ && $(null)
                },
              },
              Y.map(function(t) {
                return e.createElement(Rn, {
                  key: 'month-' + t.year + '-' + t.month,
                  year: t.year,
                  month: t.month,
                  firstDayOfWeek: X,
                  dayLabelFormat: g || Fe,
                  weekdayLabelFormat: f || He,
                  monthLabelFormat: h || Pe,
                })
              }),
            ),
          ),
          e.createElement(
            Hr,
            {alignItems: 'center'},
            e.createElement(
              e.Fragment,
              null,
              k &&
                e.createElement(
                  Hr,
                  {flex: '1', m: ie.datepickerResetDatesWrapperMargin},
                  e.createElement(zn, {rtl: v, onResetDates: V, text: q.resetDates}),
                ),
              e.createElement(
                Or,
                {
                  position: ie.datepickerPreviousMonthButtonPosition,
                  top: ie.datepickerPreviousMonthButtonTop,
                  left: ie.datepickerPreviousMonthButtonLeft,
                  right: ie.datepickerPreviousMonthButtonRight,
                  bottom: ie.datepickerPreviousMonthButtonBottom,
                },
                e.createElement(Gn, {
                  type: 'prev',
                  onClick: v && !b ? de : ce,
                  vertical: b,
                  rtl: v,
                  ariaLabel: 'Previous month',
                }),
              ),
              e.createElement(
                Or,
                {
                  position: ie.datepickerNextMonthButtonPosition,
                  top: ie.datepickerNextMonthButtonTop,
                  left: ie.datepickerNextMonthButtonLeft,
                  right: ie.datepickerNextMonthButtonRight,
                  bottom: ie.datepickerNextMonthButtonBottom,
                },
                e.createElement(Gn, {
                  type: 'next',
                  onClick: v && !b ? ce : de,
                  vertical: b,
                  rtl: v,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    )
  }),
  wa = d(Or)(fa || (fa = _e(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      l(ga || (ga = _e(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  va = ft(bt, er),
  Da = d($r)(ma || (ma = _e(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), va, function(e) {
    return (
      e.rtl &&
      l(
        ha ||
          (ha = _e(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  ka = ft(Tt, xt, vr),
  xa = d(Er)(ya || (ya = _e(['\n  ', '\n'], ['\n  ', '\n'])), ka)
function Ca(r) {
  var n = r.startDate,
    a = r.endDate,
    s = r.minBookingDate,
    d = r.maxBookingDate,
    l = r.firstDayOfWeek,
    u = r.onFocusChange,
    p = r.numberOfMonths,
    g = r.focusedInput,
    f = r.onDatesChange,
    h = r.exactMinBookingDays,
    m = r.dayLabelFormat,
    y = r.weekdayLabelFormat,
    b = r.monthLabelFormat,
    w = r.onDayRender,
    v = r.showClose,
    D = void 0 === v || v,
    k = r.showSelectedDates,
    x = void 0 === k || k,
    C = r.showResetDates,
    T = void 0 === C || C,
    S = r.vertical,
    B = void 0 !== S && S,
    L = r.rtl,
    M = void 0 !== L && L,
    W = r.isDateBlocked,
    R =
      void 0 === W
        ? function() {
            return !1
          }
        : W,
    E = r.minBookingDays,
    F = void 0 === E ? 1 : E,
    H = r.onClose,
    P = void 0 === H ? function() {} : H,
    O = r.showStartDateCalendarIcon,
    z = void 0 === O || O,
    U = r.showEndDateCalendarIcon,
    I = void 0 === U || U,
    q = r.displayFormat,
    N = void 0 === q ? 'MM/dd/yyyy' : q,
    Y = r.phrases,
    A = void 0 === Y ? Lr : Y,
    j = r.placement,
    G = void 0 === j ? 'bottom' : j,
    X = i(null),
    Q = i(null),
    V = o(c),
    K = Ur(
      Ze(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: B ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: qr('graci', Ir.colors.graci, V),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: B ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: B ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(G, M),
      ),
    )
  function J(e) {
    null !== g && Q && Q.current && !Q.current.contains(e.target) && u(null)
  }
  function Z(e) {
    X && X.current && X.current.onDateSelect && X.current.onDateSelect(e)
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
      wa,
      {rtl: M, position: 'relative', ref: Q},
      e.createElement(
        xa,
        {
          background: K.dateRangeBackground,
          gridTemplateColumns: K.dateRangeGridTemplateColumns,
          border: K.dateRangeBorder,
          borderRadius: K.dateRangeBorderRadius,
        },
        e.createElement(_r, {
          id: 'startDate',
          ariaLabel: A.startDateAriaLabel,
          placeholder: A.startDatePlaceholder,
          value: Xe(n, N, ''),
          onClick: function() {
            return u(Ve)
          },
          showCalendarIcon: z,
          vertical: B,
          isActive: g === Ve,
          padding: K.dateRangeStartDateInputPadding,
          rtl: M,
          onChange: Z,
          dateFormat: N,
        }),
        e.createElement(
          Hr,
          {alignItems: 'center', justifyContent: 'center'},
          e.createElement(Da, {
            width: K.dateRangeArrowIconWidth,
            height: K.dateRangeArrowIconHeight,
            color: K.dateRangeArrowIconColor,
            opacity: K.dateRangeArrowIconOpacity,
            rtl: M,
          }),
        ),
        e.createElement(_r, {
          id: 'endDate',
          ariaLabel: A.endDateAriaLabel,
          placeholder: A.endDatePlaceholder,
          value: Xe(a, N, ''),
          onClick: function() {
            return u(n ? Ke : Ve)
          },
          showCalendarIcon: I,
          vertical: B,
          isActive: g === Ke,
          padding: K.dateRangeEndDateInputPadding,
          rtl: M,
          disableAccessibility: g === Ve,
          onChange: Z,
          dateFormat: N,
        }),
      ),
      e.createElement(
        Or,
        {
          position: K.dateRangeDatepickerWrapperPosition,
          bottom: K.dateRangeDatepickerWrapperBottom,
          left: K.dateRangeDatepickerWrapperLeft,
          top: K.dateRangeDatepickerWrapperTop,
          right: K.dateRangeDatepickerWrapperRight,
        },
        null !== g &&
          e.createElement(ba, {
            onClose: function() {
              P(), u(null)
            },
            startDate: n,
            endDate: a,
            minBookingDate: s,
            maxBookingDate: d,
            firstDayOfWeek: l,
            numberOfMonths: p,
            focusedInput: g,
            displayFormat: N,
            onDatesChange: f,
            minBookingDays: F,
            isDateBlocked: R,
            exactMinBookingDays: h,
            showResetDates: T,
            vertical: B,
            showSelectedDates: x,
            showClose: D,
            rtl: M,
            dayLabelFormat: m,
            weekdayLabelFormat: y,
            monthLabelFormat: b,
            onDayRender: w,
            phrases: A,
            ref: X,
          }),
      ),
    )
  )
}
var Ta,
  Sa,
  Ba = d(Or)(Sa || (Sa = _e(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      l(Ta || (Ta = _e(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
function La(r) {
  var n = r.date,
    a = r.minBookingDate,
    o = r.maxBookingDate,
    s = r.firstDayOfWeek,
    d = r.onFocusChange,
    c = r.showDatepicker,
    l = r.onDateChange,
    u = r.dayLabelFormat,
    p = r.weekdayLabelFormat,
    g = r.monthLabelFormat,
    f = r.onDayRender,
    h = r.numberOfMonths,
    m = void 0 === h ? 1 : h,
    y = r.showClose,
    b = void 0 === y || y,
    w = r.showResetDate,
    v = void 0 === w || w,
    D = r.vertical,
    k = void 0 !== D && D,
    x = r.rtl,
    C = void 0 !== x && x,
    T = r.isDateBlocked,
    S =
      void 0 === T
        ? function() {
            return !1
          }
        : T,
    B = r.onClose,
    L = void 0 === B ? function() {} : B,
    M = r.showCalendarIcon,
    W = void 0 === M || M,
    R = r.displayFormat,
    E = void 0 === R ? 'MM/dd/yyyy' : R,
    F = r.phrases,
    H = void 0 === F ? Mr : F,
    P = r.placement,
    O = void 0 === P ? 'bottom' : P,
    z = i(null),
    U = i(null),
    I = Ur(
      Ze(
        {
          dateSingleInputPadding: k ? (C ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(O, C),
      ),
    )
  function q(e) {
    c && U && U.current && !U.current.contains(e.target) && d(!1)
  }
  return (
    t(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', q),
        function() {
          window.removeEventListener('click', q)
        }
      )
    }),
    e.createElement(
      Ba,
      {rtl: C, position: 'relative', ref: U},
      e.createElement(_r, {
        id: 'startDate',
        ariaLabel: H.dateAriaLabel,
        placeholder: H.datePlaceholder,
        value: Xe(n, E, ''),
        onClick: function() {
          return d(!0)
        },
        showCalendarIcon: W,
        vertical: k,
        isActive: !1,
        padding: I.dateSingleInputPadding,
        rtl: C,
        onChange: function(e) {
          z && z.current && z.current.onDateSelect && z.current.onDateSelect(e)
        },
        dateFormat: E,
      }),
      e.createElement(
        Or,
        {
          position: I.dateSingleDatepickerWrapperPosition,
          bottom: I.dateSingleDatepickerWrapperBottom,
          left: I.dateSingleDatepickerWrapperLeft,
          top: I.dateSingleDatepickerWrapperTop,
          right: I.dateSingleDatepickerWrapperRight,
        },
        c &&
          e.createElement(ba, {
            exactMinBookingDays: !0,
            minBookingDays: 1,
            onClose: function() {
              L(), d(!1)
            },
            startDate: n,
            endDate: n,
            minBookingDate: a,
            maxBookingDate: o,
            firstDayOfWeek: s,
            numberOfMonths: m,
            focusedInput: c ? Ve : null,
            displayFormat: E,
            onDatesChange: function(e) {
              var t = e.focusedInput,
                r = e.startDate
              l({showDatepicker: null !== t, date: r})
            },
            isDateBlocked: S,
            showResetDates: v,
            vertical: k,
            showSelectedDates: !1,
            showClose: b,
            rtl: C,
            dayLabelFormat: u,
            weekdayLabelFormat: p,
            monthLabelFormat: g,
            onDayRender: f,
            phrases: H,
            ref: z,
          }),
      ),
    )
  )
}
export {
  Ca as DateRangeInput,
  La as DateSingleInput,
  ba as Datepicker,
  Ke as END_DATE,
  Ve as START_DATE,
  Lr as dateRangeInputPhrases,
  Mr as dateSingleInputPhrases,
  Br as datepickerPhrases,
}
