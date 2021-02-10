'use strict'
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var t = require('react'),
  n = e(t),
  r = require('styled-components'),
  a = e(r),
  o = {
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
function i(e) {
  return function (t) {
    var n = t || {},
      r = n.width ? String(n.width) : e.defaultWidth
    return e.formats[r] || e.formats[e.defaultWidth]
  }
}
var s = {
    date: i({
      formats: {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
      },
      defaultWidth: 'full',
    }),
    time: i({
      formats: {full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a'},
      defaultWidth: 'full',
    }),
    dateTime: i({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
      },
      defaultWidth: 'full',
    }),
  },
  d = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function c(e) {
  return function (t, n) {
    var r,
      a = n || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth,
        i = a.width ? String(a.width) : o
      r = e.formattingValues[i] || e.formattingValues[o]
    } else {
      var s = e.defaultWidth,
        d = a.width ? String(a.width) : e.defaultWidth
      r = e.values[d] || e.values[s]
    }
    return r[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
function u(e) {
  return function (t, n) {
    var r = String(t),
      a = n || {},
      o = a.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      s = r.match(i)
    if (!s) return null
    var d,
      c = s[0],
      u = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (d =
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
      (d = e.valueCallback ? e.valueCallback(d) : d),
      {value: (d = a.valueCallback ? a.valueCallback(d) : d), rest: r.slice(c.length)}
    )
  }
}
var l,
  p = {
    code: 'en-US',
    formatDistance: function (e, t, n) {
      var r
      return (
        (n = n || {}),
        (r =
          'string' == typeof o[e] ? o[e] : 1 === t ? o[e].one : o[e].other.replace('{{count}}', t)),
        n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
      )
    },
    formatLong: s,
    formatRelative: function (e, t, n, r) {
      return d[e]
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
      era: c({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: c({
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
      month: c({
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
      day: c({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: c({
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
        ((l = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (e) {
            return parseInt(e, 10)
          },
        }),
        function (e, t) {
          var n = String(e),
            r = t || {},
            a = n.match(l.matchPattern)
          if (!a) return null
          var o = a[0],
            i = n.match(l.parsePattern)
          if (!i) return null
          var s = l.valueCallback ? l.valueCallback(i[0]) : i[0]
          return {value: (s = r.valueCallback ? r.valueCallback(s) : s), rest: n.slice(o.length)}
        }),
      era: u({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: u({
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
      month: u({
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
      day: u({
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
      dayPeriod: u({
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
function f(e) {
  if (null === e || !0 === e || !1 === e) return NaN
  var t = Number(e)
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function h(e, t) {
  if (t.length < e)
    throw new TypeError(
      e + ' argument' + (e > 1 ? 's' : '') + ' required, but only ' + t.length + ' present',
    )
}
function g(e) {
  h(1, arguments)
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
function m(e, t) {
  h(2, arguments)
  var n = g(e).getTime(),
    r = f(t)
  return new Date(n + r)
}
function y(e, t) {
  h(2, arguments)
  var n = f(t)
  return m(e, -n)
}
function b(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var n in (t = t || {})) t.hasOwnProperty(n) && (e[n] = t[n])
  return e
}
function v(e, t) {
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
function w(e, t) {
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
var D = {
  p: w,
  P: function (e, t) {
    var n,
      r = e.match(/(P+)(p+)?/),
      a = r[1],
      o = r[2]
    if (!o) return v(e, t)
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
    return n.replace('{{date}}', v(a, t)).replace('{{time}}', w(o, t))
  },
}
function k(e) {
  return e.getTime() % 6e4
}
function x(e) {
  var t = new Date(e.getTime()),
    n = Math.ceil(t.getTimezoneOffset())
  return t.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + k(t)) % 6e4 : k(t))
}
var C = ['D', 'DD'],
  T = ['YY', 'YYYY']
function S(e) {
  return -1 !== C.indexOf(e)
}
function B(e) {
  return -1 !== T.indexOf(e)
}
function M(e) {
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
function R(e, t) {
  h(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == n.weekStartsOn ? o : f(n.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getUTCDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setUTCDate(s.getUTCDate() - c), s.setUTCHours(0, 0, 0, 0), s
}
function L(e, t) {
  h(1, arguments)
  var n = g(e, t),
    r = n.getUTCFullYear(),
    a = t || {},
    o = a.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : f(i),
    d = null == a.firstWeekContainsDate ? s : f(a.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(r + 1, 0, d), c.setUTCHours(0, 0, 0, 0)
  var u = R(c, t),
    l = new Date(0)
  l.setUTCFullYear(r, 0, d), l.setUTCHours(0, 0, 0, 0)
  var p = R(l, t)
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= p.getTime() ? r : r - 1
}
function W(e, t, n) {
  h(2, arguments)
  var r = n || {},
    a = r.locale,
    o = a && a.options && a.options.weekStartsOn,
    i = null == o ? 0 : f(o),
    s = null == r.weekStartsOn ? i : f(r.weekStartsOn)
  if (!(s >= 0 && s <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = g(e),
    c = f(t),
    u = d.getUTCDay(),
    l = c % 7,
    p = (l + 7) % 7,
    m = (p < s ? 7 : 0) + c - u
  return d.setUTCDate(d.getUTCDate() + m), d
}
function E(e) {
  h(1, arguments)
  var t = 1,
    n = g(e),
    r = n.getUTCDay(),
    a = (r < t ? 7 : 0) + r - t
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function F(e) {
  h(1, arguments)
  var t = g(e),
    n = t.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = E(r),
    o = new Date(0)
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = E(o)
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
}
function P(e) {
  h(1, arguments)
  var t = F(e),
    n = new Date(0)
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = E(n)
  return r
}
function H(e) {
  h(1, arguments)
  var t = g(e),
    n = E(t).getTime() - P(t).getTime()
  return Math.round(n / 6048e5) + 1
}
function O(e, t) {
  h(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    o = null == a ? 1 : f(a),
    i = null == n.firstWeekContainsDate ? o : f(n.firstWeekContainsDate),
    s = L(e, t),
    d = new Date(0)
  d.setUTCFullYear(s, 0, i), d.setUTCHours(0, 0, 0, 0)
  var c = R(d, t)
  return c
}
function I(e, t) {
  h(1, arguments)
  var n = g(e),
    r = R(n, t).getTime() - O(n, t).getTime()
  return Math.round(r / 6048e5) + 1
}
var z = /^(1[0-2]|0?\d)/,
  U = /^(3[0-1]|[0-2]?\d)/,
  N = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  Y = /^(5[0-3]|[0-4]?\d)/,
  A = /^(2[0-3]|[0-1]?\d)/,
  q = /^(2[0-4]|[0-1]?\d)/,
  G = /^(1[0-1]|0?\d)/,
  j = /^(1[0-2]|0?\d)/,
  X = /^[0-5]?\d/,
  Q = /^[0-5]?\d/,
  V = /^\d/,
  Z = /^\d{1,2}/,
  K = /^\d{1,3}/,
  _ = /^\d{1,4}/,
  J = /^-?\d+/,
  $ = /^-?\d/,
  ee = /^-?\d{1,2}/,
  te = /^-?\d{1,3}/,
  ne = /^-?\d{1,4}/,
  re = /^([+-])(\d{2})(\d{2})?|Z/,
  ae = /^([+-])(\d{2})(\d{2})|Z/,
  oe = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  ie = /^([+-])(\d{2}):(\d{2})|Z/,
  se = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function de(e, t, n) {
  var r = t.match(e)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: t.slice(r[0].length)}
}
function ce(e, t) {
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
function ue(e, t) {
  return de(J, e, t)
}
function le(e, t, n) {
  switch (e) {
    case 1:
      return de(V, t, n)
    case 2:
      return de(Z, t, n)
    case 3:
      return de(K, t, n)
    case 4:
      return de(_, t, n)
    default:
      return de(new RegExp('^\\d{1,' + e + '}'), t, n)
  }
}
function pe(e, t, n) {
  switch (e) {
    case 1:
      return de($, t, n)
    case 2:
      return de(ee, t, n)
    case 3:
      return de(te, t, n)
    case 4:
      return de(ne, t, n)
    default:
      return de(new RegExp('^-?\\d{1,' + e + '}'), t, n)
  }
}
function fe(e) {
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
function he(e, t) {
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
var ge = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  me = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function ye(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var be = {
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
            return le(4, e, a)
          case 'yo':
            return n.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return le(t.length, e, a)
        }
      },
      validate: function (e, t, n) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, n, r) {
        var a = e.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var o = he(n.year, a)
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
            return le(4, e, a)
          case 'Yo':
            return n.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return le(t.length, e, a)
        }
      },
      validate: function (e, t, n) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function (e, t, n, r) {
        var a = L(e, r)
        if (n.isTwoDigitYear) {
          var o = he(n.year, a)
          return e.setUTCFullYear(o, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), R(e, r)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - n.year : n.year
        return e.setUTCFullYear(i, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), R(e, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function (e, t, n, r) {
        return pe('R' === t ? 4 : t.length, e)
      },
      set: function (e, t, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), E(a)
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
        return pe('u' === t ? 4 : t.length, e)
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
            return le(t.length, e)
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
            return le(t.length, e)
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
            return de(z, e, a)
          case 'MM':
            return le(2, e, a)
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
            return de(z, e, a)
          case 'LL':
            return le(2, e, a)
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
            return de(Y, e)
          case 'wo':
            return n.ordinalNumber(e, {unit: 'week'})
          default:
            return le(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, n, r) {
        return R(
          (function (e, t, n) {
            h(2, arguments)
            var r = g(e),
              a = f(t),
              o = I(r, n) - a
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
            return de(Y, e)
          case 'Io':
            return n.ordinalNumber(e, {unit: 'week'})
          default:
            return le(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return t >= 1 && t <= 53
      },
      set: function (e, t, n, r) {
        return E(
          (function (e, t) {
            h(2, arguments)
            var n = g(e),
              r = f(t),
              a = H(n) - r
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
            return de(U, e)
          case 'do':
            return n.ordinalNumber(e, {unit: 'date'})
          default:
            return le(t.length, e)
        }
      },
      validate: function (e, t, n) {
        var r = ye(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return r ? t >= 1 && t <= me[a] : t >= 1 && t <= ge[a]
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
            return de(N, e)
          case 'Do':
            return n.ordinalNumber(e, {unit: 'date'})
          default:
            return le(t.length, e)
        }
      },
      validate: function (e, t, n) {
        return ye(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
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
        return (e = W(e, n, r)).setUTCHours(0, 0, 0, 0), e
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
            return le(t.length, e, a)
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
        return (e = W(e, n, r)).setUTCHours(0, 0, 0, 0), e
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
            return le(t.length, e, a)
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
        return (e = W(e, n, r)).setUTCHours(0, 0, 0, 0), e
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
            return le(t.length, e)
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
            h(2, arguments)
            var n = f(t)
            n % 7 == 0 && (n -= 7)
            var r = 1,
              a = g(e),
              o = a.getUTCDay(),
              i = n % 7,
              s = (i + 7) % 7,
              d = (s < r ? 7 : 0) + n - o
            return a.setUTCDate(a.getUTCDate() + d), a
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
        return e.setUTCHours(fe(n), 0, 0, 0), e
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
        return e.setUTCHours(fe(n), 0, 0, 0), e
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
        return e.setUTCHours(fe(n), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function (e, t, n, r) {
        switch (t) {
          case 'h':
            return de(j, e)
          case 'ho':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return le(t.length, e)
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
            return de(A, e)
          case 'Ho':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return le(t.length, e)
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
            return de(G, e)
          case 'Ko':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return le(t.length, e)
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
            return de(q, e)
          case 'ko':
            return n.ordinalNumber(e, {unit: 'hour'})
          default:
            return le(t.length, e)
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
            return de(X, e)
          case 'mo':
            return n.ordinalNumber(e, {unit: 'minute'})
          default:
            return le(t.length, e)
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
            return de(Q, e)
          case 'so':
            return n.ordinalNumber(e, {unit: 'second'})
          default:
            return le(t.length, e)
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
        return le(t.length, e, function (e) {
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
            return ce(re, e)
          case 'XX':
            return ce(ae, e)
          case 'XXXX':
            return ce(oe, e)
          case 'XXXXX':
            return ce(se, e)
          case 'XXX':
          default:
            return ce(ie, e)
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
            return ce(re, e)
          case 'xx':
            return ce(ae, e)
          case 'xxxx':
            return ce(oe, e)
          case 'xxxxx':
            return ce(se, e)
          case 'xxx':
          default:
            return ce(ie, e)
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
        return ue(e)
      },
      set: function (e, t, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function (e, t, n, r) {
        return ue(e)
      },
      set: function (e, t, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  ve = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  we = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  De = /^'([^]*?)'?$/,
  ke = /''/g,
  xe = /\S/,
  Ce = /[a-zA-Z]/
function Te(e, t) {
  if (t.timestampIsSet) return e
  var n = new Date(0)
  return (
    n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    n
  )
}
function Se(e) {
  return e.match(De)[1].replace(ke, "'")
}
function Be(e) {
  h(1, arguments)
  var t = g(e)
  return !isNaN(t)
}
function Me(e, t) {
  for (var n = e < 0 ? '-' : '', r = Math.abs(e).toString(); r.length < t; ) r = '0' + r
  return n + r
}
var Re = {
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
      return Me('yy' === t ? r % 100 : r, t.length)
    })(e, t)
  },
  Y: function (e, t, n, r) {
    var a = L(e, r),
      o = a > 0 ? a : 1 - a
    return 'YY' === t
      ? Me(o % 100, 2)
      : 'Yo' === t
      ? n.ordinalNumber(o, {unit: 'year'})
      : Me(o, t.length)
  },
  R: function (e, t) {
    return Me(F(e), t.length)
  },
  u: function (e, t) {
    return Me(e.getUTCFullYear(), t.length)
  },
  Q: function (e, t, n) {
    var r = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'Q':
        return String(r)
      case 'QQ':
        return Me(r, 2)
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
        return Me(r, 2)
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
          return 'M' === t ? String(n + 1) : Me(n + 1, 2)
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
        return Me(r + 1, 2)
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
    var a = I(e, r)
    return 'wo' === t ? n.ordinalNumber(a, {unit: 'week'}) : Me(a, t.length)
  },
  I: function (e, t, n) {
    var r = H(e)
    return 'Io' === t ? n.ordinalNumber(r, {unit: 'week'}) : Me(r, t.length)
  },
  d: function (e, t, n) {
    return 'do' === t
      ? n.ordinalNumber(e.getUTCDate(), {unit: 'date'})
      : (function (e, t) {
          return Me(e.getUTCDate(), t.length)
        })(e, t)
  },
  D: function (e, t, n) {
    var r = (function (e) {
      h(1, arguments)
      var t = g(e),
        n = t.getTime()
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      var r = t.getTime(),
        a = n - r
      return Math.floor(a / 864e5) + 1
    })(e)
    return 'Do' === t ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : Me(r, t.length)
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
        return Me(o, 2)
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
        return Me(o, t.length)
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
        return Me(a, t.length)
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
      return Me(e.getUTCHours() % 12 || 12, t.length)
    })(e, t)
  },
  H: function (e, t, n) {
    return 'Ho' === t
      ? n.ordinalNumber(e.getUTCHours(), {unit: 'hour'})
      : (function (e, t) {
          return Me(e.getUTCHours(), t.length)
        })(e, t)
  },
  K: function (e, t, n) {
    var r = e.getUTCHours() % 12
    return 'Ko' === t ? n.ordinalNumber(r, {unit: 'hour'}) : Me(r, t.length)
  },
  k: function (e, t, n) {
    var r = e.getUTCHours()
    return 0 === r && (r = 24), 'ko' === t ? n.ordinalNumber(r, {unit: 'hour'}) : Me(r, t.length)
  },
  m: function (e, t, n) {
    return 'mo' === t
      ? n.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'})
      : (function (e, t) {
          return Me(e.getUTCMinutes(), t.length)
        })(e, t)
  },
  s: function (e, t, n) {
    return 'so' === t
      ? n.ordinalNumber(e.getUTCSeconds(), {unit: 'second'})
      : (function (e, t) {
          return Me(e.getUTCSeconds(), t.length)
        })(e, t)
  },
  S: function (e, t) {
    return (function (e, t) {
      var n = t.length,
        r = e.getUTCMilliseconds()
      return Me(Math.floor(r * Math.pow(10, n - 3)), t.length)
    })(e, t)
  },
  X: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
    if (0 === a) return 'Z'
    switch (t) {
      case 'X':
        return We(a)
      case 'XXXX':
      case 'XX':
        return Ee(a)
      case 'XXXXX':
      case 'XXX':
      default:
        return Ee(a, ':')
    }
  },
  x: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'x':
        return We(a)
      case 'xxxx':
      case 'xx':
        return Ee(a)
      case 'xxxxx':
      case 'xxx':
      default:
        return Ee(a, ':')
    }
  },
  O: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + Le(a, ':')
      case 'OOOO':
      default:
        return 'GMT' + Ee(a, ':')
    }
  },
  z: function (e, t, n, r) {
    var a = (r._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + Le(a, ':')
      case 'zzzz':
      default:
        return 'GMT' + Ee(a, ':')
    }
  },
  t: function (e, t, n, r) {
    var a = r._originalDate || e
    return Me(Math.floor(a.getTime() / 1e3), t.length)
  },
  T: function (e, t, n, r) {
    return Me((r._originalDate || e).getTime(), t.length)
  },
}
function Le(e, t) {
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    a = Math.floor(r / 60),
    o = r % 60
  if (0 === o) return n + String(a)
  var i = t || ''
  return n + String(a) + i + Me(o, 2)
}
function We(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + Me(Math.abs(e) / 60, 2) : Ee(e, t)
}
function Ee(e, t) {
  var n = t || '',
    r = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return r + Me(Math.floor(a / 60), 2) + n + Me(a % 60, 2)
}
var Fe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Pe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  He = /^'([^]*?)'?$/,
  Oe = /''/g,
  Ie = /[a-zA-Z]/
function ze(e, t, n) {
  h(2, arguments)
  var r = String(t),
    a = n || {},
    o = a.locale || p,
    i = o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : f(i),
    d = null == a.firstWeekContainsDate ? s : f(a.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = o.options && o.options.weekStartsOn,
    u = null == c ? 0 : f(c),
    l = null == a.weekStartsOn ? u : f(a.weekStartsOn)
  if (!(l >= 0 && l <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!o.localize) throw new RangeError('locale must contain localize property')
  if (!o.formatLong) throw new RangeError('locale must contain formatLong property')
  var m = g(e)
  if (!Be(m)) throw new RangeError('Invalid time value')
  var b = x(m),
    v = y(m, b),
    w = {firstWeekContainsDate: d, weekStartsOn: l, locale: o, _originalDate: m},
    k = r
      .match(Pe)
      .map(function (e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, D[t])(e, o.formatLong, w) : e
      })
      .join('')
      .match(Fe)
      .map(function (e) {
        if ("''" === e) return "'"
        var t = e[0]
        if ("'" === t) return Ue(e)
        var n = Re[t]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && B(e) && M(e),
            !a.useAdditionalDayOfYearTokens && S(e) && M(e),
            n(v, e, o.localize, w)
          )
        if (t.match(Ie))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + t + '`',
          )
        return e
      })
      .join('')
  return k
}
function Ue(e) {
  return e.match(He)[1].replace(Oe, "'")
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
***************************************************************************** */ function Ne(
  e,
  t,
) {
  h(2, arguments)
  var n = g(e),
    r = f(t)
  return isNaN(r) ? new Date(NaN) : r ? (n.setDate(n.getDate() + r), n) : n
}
function Ye(e, t) {
  h(1, arguments)
  var n = e || {},
    r = g(n.start),
    a = g(n.end),
    o = a.getTime()
  if (!(r.getTime() <= o)) throw new RangeError('Invalid interval')
  var i = [],
    s = r
  s.setHours(0, 0, 0, 0)
  var d = t && 'step' in t ? Number(t.step) : 1
  if (d < 1 || isNaN(d)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; s.getTime() <= o; ) i.push(g(s)), s.setDate(s.getDate() + d), s.setHours(0, 0, 0, 0)
  return i
}
function Ae(e, t) {
  h(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == n.weekStartsOn ? o : f(n.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getDay(),
    c = 6 + (d < i ? -7 : 0) - (d - i)
  return s.setDate(s.getDate() + c), s.setHours(23, 59, 59, 999), s
}
function qe(e) {
  h(1, arguments)
  var t = g(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function Ge(e, t) {
  h(1, arguments)
  var n = t || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == n.weekStartsOn ? o : f(n.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setDate(s.getDate() - c), s.setHours(0, 0, 0, 0), s
}
var je = function (e) {
    return ze(e, 'dd')
  },
  Xe = function (e) {
    return ze(e, 'eeeeee')
  },
  Qe = function (e) {
    return ze(e, 'MMMM yyyy')
  }
function Ve(e) {
  var n = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    o = void 0 === a ? 1 : a,
    i = e.dayLabelFormat,
    s = void 0 === i ? je : i,
    d = e.weekdayLabelFormat,
    c = void 0 === d ? Xe : d,
    u = e.monthLabelFormat,
    l = void 0 === u ? Qe : u
  return {
    days: t.useMemo(
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
                    return ze(e, 'dd')
                  }
                : o,
            s = new Date(t, n),
            d = qe(s),
            c = (function (e) {
              h(1, arguments)
              var t = g(e),
                n = t.getDay()
              return n
            })(d),
            u = (function (e) {
              h(1, arguments)
              var t = g(e),
                n = t.getMonth()
              return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
            })(s)
          return (function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length
            var r = Array(e),
              a = 0
            for (t = 0; t < n; t++)
              for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) r[a] = o[i]
            return r
          })(
            Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
            Ye({start: d, end: u}).map(function (e) {
              return {date: e, dayLabel: i(e)}
            }),
          )
        })({year: n, month: r, firstDayOfWeek: o, dayLabelFormat: s})
      },
      [n, r, o, s],
    ),
    weekdayLabels: t.useMemo(
      function () {
        return (function (e) {
          var t = void 0 === e ? {} : e,
            n = t.firstDayOfWeek,
            r = void 0 === n ? 1 : n,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function (e) {
                    return ze(e, 'iiiiii')
                  }
                : a,
            i = new Date()
          return Ye({start: Ne(Ge(i), r), end: Ne(Ae(i), r)}).reduce(function (e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: l(new Date(n, r)),
  }
}
function Ze(e, t) {
  h(2, arguments)
  var n = g(e),
    r = g(t)
  return n.getTime() < r.getTime()
}
function Ke(e, t) {
  h(2, arguments)
  var n = g(e),
    r = g(t)
  return n.getTime() > r.getTime()
}
function _e(e, t) {
  h(2, arguments)
  var n = t || {},
    r = g(e).getTime(),
    a = g(n.start).getTime(),
    o = g(n.end).getTime()
  if (!(a <= o)) throw new RangeError('Invalid interval')
  return r >= a && r <= o
}
function Je(e) {
  h(1, arguments)
  var t = g(e)
  return t.setHours(0, 0, 0, 0), t
}
function $e(e, t) {
  h(2, arguments)
  var n = Je(e),
    r = Je(t)
  return n.getTime() === r.getTime()
}
function et(e, t) {
  h(2, arguments)
  var n = g(e),
    r = f(t)
  if (isNaN(r)) return new Date(NaN)
  if (!r) return n
  var a = n.getDate(),
    o = new Date(n.getTime())
  o.setMonth(n.getMonth() + r + 1, 0)
  var i = o.getDate()
  return a >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n)
}
var tt = function (e, t) {
  return (
    void 0 === e && (e = []),
    e.some(function (e) {
      return $e(t, e)
    })
  )
}
function nt(e) {
  var t = qe(e)
  return {
    year: (function (e) {
      h(1, arguments)
      var t = g(e),
        n = t.getFullYear()
      return n
    })(t),
    month: (function (e) {
      h(1, arguments)
      var t = g(e),
        n = t.getMonth()
      return n
    })(t),
    date: t,
  }
}
function rt(e, t) {
  var n = nt(t || Je(Date.now())),
    r = n.date,
    a = [n]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function (e) {
        return (r = et(e[e.length - 1].date, 1)), e.concat([nt(r)])
      }, a)),
    a
  )
}
function at(e, t, n, r) {
  var a = e[r ? (n > 0 ? 0 : e.length - r) : n > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function (e) {
    return (
      (a = 0 === e.length ? et(a, n) : et(a, n >= 0 ? 1 : -1)),
      n > 0 ? e.concat([nt(a)]) : [nt(a)].concat(e)
    )
  }, [])
}
function ot(e, t, n) {
  return e && 'string' == typeof t ? ze(e, t) : e && 'function' == typeof t ? t(e) : n
}
function it(e) {
  var t = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    d = !i || !Ze(t, Ne(i, -1)),
    c = !s || !Ke(Ne(t, a - 1), s)
  return !(
    (!t || 1 !== a || n || r(t)) &&
    ((t && a > 1 && !n && !o) || (t && a > 0 && o && d && c) || (t && a > 0 && o && !i && !s)
      ? Ye({start: t, end: Ne(t, a - 1)}).some(function (e) {
          return r(e)
        })
      : !t ||
        !n ||
        o ||
        Ze(n, Ne(t, a - 1)) ||
        Ye({start: t, end: n}).some(function (e) {
          return r(e)
        }))
  )
}
var st = 'startDate',
  dt = 'endDate'
function ct(e) {
  var n = e.startDate,
    r = e.endDate,
    a = e.focusedInput,
    o = e.minBookingDate,
    i = e.maxBookingDate,
    s = e.onDatesChange,
    d = e.initialVisibleMonth,
    c = e.exactMinBookingDays,
    u = void 0 !== c && c,
    l = e.minBookingDays,
    p = void 0 === l ? 1 : l,
    f = e.numberOfMonths,
    h = void 0 === f ? 2 : f,
    g = e.firstDayOfWeek,
    m = void 0 === g ? 1 : g,
    y = e.isDateBlocked,
    b =
      void 0 === y
        ? function () {
            return !1
          }
        : y,
    v = e.unavailableDates,
    w = void 0 === v ? [] : v,
    D = e.changeActiveMonthOnSelect,
    k = void 0 === D || D,
    x = t.useState(function () {
      return rt(h, n || d || null)
    }),
    C = x[0],
    T = x[1],
    S = t.useState(null),
    B = S[0],
    M = S[1],
    R = t.useState(n),
    L = R[0],
    W = R[1]
  t.useEffect(function () {
    return (
      'undefined' != typeof window &&
        window.addEventListener &&
        window.addEventListener('keydown', H),
      function () {
        window.removeEventListener && window.removeEventListener('keydown', H)
      }
    )
  })
  var E = function (e) {
      return tt(w, e) || b(e)
    },
    F = function (e) {
      W(e), (!L || (L && !$e(e, L))) && T(rt(h, e))
    },
    P = function (e) {
      return (function (e) {
        var t = e.date,
          n = e.minBookingDate,
          r = e.maxBookingDate,
          a = e.isDateBlockedFn,
          o = e.startDate,
          i = e.endDate,
          s = e.minBookingDays,
          d = void 0 === s ? 1 : s,
          c = e.unavailableDates,
          u = void 0 === c ? [] : c,
          l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
          p = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
        return !!(
          tt(u, t) ||
          (l && Ze(t, l)) ||
          (p && Ke(t, p)) ||
          (o && !i && d > 1 && _e(t, {start: o, end: Ne(o, d - 2)})) ||
          (a && a(t))
        )
      })({
        date: e,
        minBookingDate: o,
        maxBookingDate: i,
        startDate: n,
        endDate: r,
        minBookingDays: p,
        isDateBlockedFn: E,
      })
    }
  function H(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !L
    ) {
      var t = C[0]
      F(t.date), T(rt(h, t.date))
    }
  }
  var O = t.useCallback(
      function () {
        T(at(C, h, -1)), W(null)
      },
      [C, h],
    ),
    I = t.useCallback(
      function () {
        T(at(C, h, -1, 1)), W(null)
      },
      [C, h],
    ),
    z = t.useCallback(
      function () {
        T(at(C, h, 1)), W(null)
      },
      [C, h],
    ),
    U = t.useCallback(
      function () {
        T(at(C, h, 1, 1)), W(null)
      },
      [C, h],
    ),
    N = t.useCallback(
      function (e) {
        T(rt(h, e)), W(null)
      },
      [h],
    ),
    Y = t.useCallback(
      function (e) {
        void 0 === e && (e = 1), T(at(C, h, -(12 * e - h + 1))), W(null)
      },
      [C, h],
    ),
    A = t.useCallback(
      function (e) {
        void 0 === e && (e = 1), T(at(C, h, 12 * e - h + 1)), W(null)
      },
      [C, h],
    )
  return {
    firstDayOfWeek: m,
    activeMonths: C,
    isDateSelected: function (e) {
      return (function (e, t, n) {
        return !(!t || !n) && _e(e, {start: t, end: n})
      })(e, n, r)
    },
    isDateHovered: function (e) {
      return (function (e) {
        var t = e.date,
          n = e.startDate,
          r = e.endDate,
          a = e.isDateBlocked,
          o = e.hoveredDate,
          i = e.minBookingDays
        return o && i > 1 && e.exactMinBookingDays && _e(t, {start: o, end: Ne(o, i - 1)})
          ? !Ye({start: o, end: Ne(o, i - 1)}).some(function (e) {
              return a(e)
            })
          : n && !r && o && _e(t, {start: n, end: Ne(n, i - 1)}) && $e(n, o) && i > 1
          ? !Ye({start: n, end: Ne(n, i - 1)}).some(function (e) {
              return a(e)
            })
          : !(
              !n ||
              r ||
              !o ||
              Ze(o, n) ||
              !_e(t, {start: n, end: o}) ||
              Ye({start: n, end: o}).some(function (e) {
                return a(e)
              })
            )
      })({
        date: e,
        hoveredDate: B,
        startDate: n,
        endDate: r,
        minBookingDays: p,
        exactMinBookingDays: u,
        isDateBlocked: E,
      })
    },
    isFirstOrLastSelectedDate: function (e) {
      return (function (e, t, n) {
        return !!((t && $e(e, t)) || (n && $e(e, n)))
      })(e, n, r)
    },
    isStartDate: function (e) {
      return (function (e, t) {
        return !(!t || !$e(e, t))
      })(e, n)
    },
    isEndDate: function (e) {
      return (function (e, t) {
        return !(!t || !$e(e, t))
      })(e, r)
    },
    isDateBlocked: P,
    numberOfMonths: h,
    isDateFocused: function (e) {
      return !!L && $e(e, L)
    },
    focusedDate: L,
    hoveredDate: B,
    onResetDates: function () {
      s({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function (e) {
      if (e) {
        if (e) {
          var t = !P(e) || (n && $e(e, n)),
            a = !o || !Ze(e, Ne(o, -1)),
            s = !i || !Ke(e, i),
            d = Ne(e, p - 1),
            c = !o || !Ze(d, o),
            l = !i || !Ke(d, i),
            f = u && p > 1 && a && s && c && l,
            h = n && !r && !u && a && s,
            g = !(p > 1 && n) || _e(e, {start: n, end: Ne(n, p - 2)}),
            m = n && $e(e, n) && g
          t && (f || h || m) ? M(e) : null !== B && M(null)
        }
      } else M(null)
    },
    onDateSelect: function (e) {
      ;('endDate' === a || 'startDate' === a) &&
      p > 0 &&
      u &&
      it({
        minBookingDays: p,
        exactMinBookingDays: u,
        minBookingDate: o,
        maxBookingDate: i,
        isDateBlocked: E,
        startDate: e,
        endDate: null,
      })
        ? s({startDate: e, endDate: Ne(e, p - 1), focusedInput: null})
        : (('endDate' === a && n && Ze(e, n)) || ('startDate' === a && r && Ke(e, r))) &&
          !u &&
          it({minBookingDays: p, isDateBlocked: E, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === a &&
          !u &&
          it({minBookingDays: p, isDateBlocked: E, endDate: r, startDate: e})
        ? s({endDate: r, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === a &&
          !u &&
          it({minBookingDays: p, isDateBlocked: E, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'endDate' === a &&
          n &&
          !Ze(e, n) &&
          !u &&
          it({minBookingDays: p, isDateBlocked: E, startDate: n, endDate: e}) &&
          s({startDate: n, endDate: e, focusedInput: null}),
        'endDate' !== a && (!L || (L && !$e(e, L))) && k && T(rt(h, e))
    },
    onDateFocus: F,
    goToPreviousMonths: O,
    goToPreviousMonthsByOneMonth: I,
    goToNextMonths: z,
    goToNextMonthsByOneMonth: U,
    goToDate: N,
    goToPreviousYear: Y,
    goToNextYear: A,
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
var ut = function () {
  return (ut =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var a in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
      return e
    }).apply(this, arguments)
}
function lt(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var pt = Object.getOwnPropertySymbols,
  ft = Object.prototype.hasOwnProperty,
  ht = Object.prototype.propertyIsEnumerable
function gt(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
var mt = (function () {
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
        for (var n, r, a = gt(e), o = 1; o < arguments.length; o++) {
          for (var i in (n = Object(arguments[o]))) ft.call(n, i) && (a[i] = n[i])
          if (pt) {
            r = pt(n)
            for (var s = 0; s < r.length; s++) ht.call(n, r[s]) && (a[r[s]] = n[r[s]])
          }
        }
        return a
      },
  yt = function (e, t) {
    var n = mt({}, e, t)
    for (var r in e) {
      var a
      e[r] && 'object' == typeof t[r] && mt(n, (((a = {})[r] = mt(e[r], t[r])), a))
    }
    return n
  },
  bt = {
    breakpoints: [40, 52, 64].map(function (e) {
      return e + 'em'
    }),
  },
  vt = function (e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  wt = function (e, t) {
    return Dt(t, e, e)
  },
  Dt = function (e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  kt = function e(t) {
    var n = {},
      r = function (e) {
        var r,
          a,
          o = {},
          i = !1,
          s = e.theme && e.theme.disableStyledSystemCache
        for (var d in e)
          if (t[d]) {
            var c = t[d],
              u = e[d],
              l = Dt(e.theme, c.scale, c.defaults)
            if ('object' != typeof u) mt(o, c(u, l, e))
            else {
              if (
                ((n.breakpoints =
                  (!s && n.breakpoints) || Dt(e.theme, 'breakpoints', bt.breakpoints)),
                Array.isArray(u))
              ) {
                ;(n.media = (!s && n.media) || [null].concat(n.breakpoints.map(vt))),
                  (o = yt(o, xt(n.media, c, l, u, e)))
                continue
              }
              null !== u && ((o = yt(o, Ct(n.breakpoints, c, l, u, e))), (i = !0))
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
  xt = function (e, t, n, r, a) {
    var o = {}
    return (
      r.slice(0, e.length).forEach(function (r, i) {
        var s,
          d = e[i],
          c = t(r, n, a)
        d ? mt(o, (((s = {})[d] = mt({}, o[d], c)), s)) : mt(o, c)
      }),
      o
    )
  },
  Ct = function (e, t, n, r, a) {
    var o = {}
    for (var i in r) {
      var s = e[i],
        d = t(r[i], n, a)
      if (s) {
        var c,
          u = vt(s)
        mt(o, (((c = {})[u] = mt({}, o[u], d)), c))
      } else mt(o, d)
    }
    return o
  },
  Tt = function (e) {
    var t = e.properties,
      n = e.property,
      r = e.scale,
      a = e.transform,
      o = void 0 === a ? wt : a,
      i = e.defaultScale
    t = t || [n]
    var s = function (e, n, r) {
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
    return (s.scale = r), (s.defaults = i), s
  },
  St = function (e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function (n) {
        var r = e[n]
        t[n] = !0 !== r ? ('function' != typeof r ? Tt(r) : r) : Tt({property: n, scale: n})
      }),
      kt(t)
    )
  },
  Bt = function () {
    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    n.forEach(function (t) {
      t && t.config && mt(e, t.config)
    })
    var a = kt(e)
    return a
  },
  Mt = St({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function (e, t) {
        return Dt(
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
  Rt = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Rt.bg = Rt.backgroundColor
var Lt = St(Rt),
  Wt = St({
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
  Et = St({
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
  Ft = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Pt = St({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Ft.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Ft.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Ft.space},
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
  Ht = {
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
;(Ht.borderTopLeftRadius = {property: 'borderTopLeftRadius', scale: 'radii'}),
  (Ht.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
  (Ht.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
  (Ht.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
  (Ht.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
  (Ht.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
  (Ht.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
  (Ht.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
  (Ht.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
  (Ht.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
  (Ht.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
  (Ht.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
  (Ht.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'})
var Ot = St(Ht),
  It = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(It.bgImage = It.backgroundImage),
  (It.bgSize = It.backgroundSize),
  (It.bgPosition = It.backgroundPosition),
  (It.bgRepeat = It.backgroundRepeat)
var zt = St(It),
  Ut = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Nt = St({
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: Ut.space},
    right: {property: 'right', scale: 'space', defaultScale: Ut.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: Ut.space},
    left: {property: 'left', scale: 'space', defaultScale: Ut.space},
  }),
  Yt = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  At = function (e) {
    return 'number' == typeof e && !isNaN(e)
  },
  qt = function (e, t) {
    if (!At(e)) return Dt(t, e, e)
    var n = e < 0,
      r = Math.abs(e),
      a = Dt(t, r, r)
    return At(a) ? a * (n ? -1 : 1) : n ? '-' + a : a
  },
  Gt = {}
;(Gt.margin = {
  margin: {property: 'margin', scale: 'space', transform: qt, defaultScale: Yt.space},
  marginTop: {property: 'marginTop', scale: 'space', transform: qt, defaultScale: Yt.space},
  marginRight: {property: 'marginRight', scale: 'space', transform: qt, defaultScale: Yt.space},
  marginBottom: {property: 'marginBottom', scale: 'space', transform: qt, defaultScale: Yt.space},
  marginLeft: {property: 'marginLeft', scale: 'space', transform: qt, defaultScale: Yt.space},
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: qt,
    defaultScale: Yt.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: qt,
    defaultScale: Yt.space,
  },
}),
  (Gt.margin.m = Gt.margin.margin),
  (Gt.margin.mt = Gt.margin.marginTop),
  (Gt.margin.mr = Gt.margin.marginRight),
  (Gt.margin.mb = Gt.margin.marginBottom),
  (Gt.margin.ml = Gt.margin.marginLeft),
  (Gt.margin.mx = Gt.margin.marginX),
  (Gt.margin.my = Gt.margin.marginY),
  (Gt.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: Yt.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: Yt.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: Yt.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: Yt.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: Yt.space},
    paddingX: {properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: Yt.space},
    paddingY: {properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: Yt.space},
  }),
  (Gt.padding.p = Gt.padding.padding),
  (Gt.padding.pt = Gt.padding.paddingTop),
  (Gt.padding.pr = Gt.padding.paddingRight),
  (Gt.padding.pb = Gt.padding.paddingBottom),
  (Gt.padding.pl = Gt.padding.paddingLeft),
  (Gt.padding.px = Gt.padding.paddingX),
  (Gt.padding.py = Gt.padding.paddingY)
var jt = Bt(St(Gt.margin), St(Gt.padding)),
  Xt = St({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function Qt() {
  return (Qt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var Vt,
  Zt,
  Kt,
  _t = function (e, t, n, r, a) {
    for (t = t && t.split ? t.split('.') : [t], r = 0; r < t.length; r++) e = e ? e[t[r]] : a
    return e === a ? n : e
  },
  Jt = [40, 52, 64].map(function (e) {
    return e + 'em'
  }),
  $t = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  en = {
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
  tn = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  nn = {
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
  rn = function (e, t) {
    if ('number' != typeof t || t >= 0) return _t(e, t, t)
    var n = Math.abs(t),
      r = _t(e, n, n)
    return 'string' == typeof r ? '-' + r : -1 * r
  },
  an = [
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
    return Qt({}, e, (((n = {})[t] = rn), n))
  }, {}),
  on = function e(t) {
    return function (n) {
      void 0 === n && (n = {})
      var r = Qt({}, $t, {}, n.theme || n),
        a = {},
        o = (function (e) {
          return function (t) {
            var n = {},
              r = _t(t, 'breakpoints', Jt),
              a = [null].concat(
                r.map(function (e) {
                  return '@media screen and (min-width: ' + e + ')'
                }),
              )
            for (var o in e) {
              var i = 'function' == typeof e[o] ? e[o](t) : e[o]
              if (null != i)
                if (Array.isArray(i))
                  for (var s = 0; s < i.slice(0, a.length).length; s++) {
                    var d = a[s]
                    d ? ((n[d] = n[d] || {}), null != i[s] && (n[d][o] = i[s])) : (n[o] = i[s])
                  }
                else n[o] = i
            }
            return n
          }
        })('function' == typeof t ? t(r) : t)(r)
      for (var i in o) {
        var s = o[i],
          d = 'function' == typeof s ? s(r) : s
        if ('variant' !== i)
          if (d && 'object' == typeof d) a[i] = e(d)(r)
          else {
            var c = _t(en, i, i),
              u = _t(nn, c),
              l = _t(r, u, _t(r, c, {})),
              p = _t(an, c, _t)(l, d, d)
            if (tn[c]) for (var f = tn[c], h = 0; h < f.length; h++) a[f[h]] = p
            else a[c] = p
          }
        else a = Qt({}, a, {}, e(_t(r, d))(r))
      }
      return a
    }
  },
  sn = function (e) {
    var t,
      n,
      r = e.scale,
      a = e.prop,
      o = void 0 === a ? 'variant' : a,
      i = e.variants,
      s = void 0 === i ? {} : i,
      d = e.key
    ;((n = Object.keys(s).length
      ? function (e, t, n) {
          return on(Dt(t, e, null))(n.theme)
        }
      : function (e, t) {
          return Dt(t, e, null)
        }).scale = r || d),
      (n.defaults = s)
    var c = (((t = {})[o] = n), t)
    return kt(c)
  },
  dn =
    (sn({key: 'buttons'}),
    sn({key: 'textStyles', prop: 'textStyle'}),
    sn({key: 'colorStyles', prop: 'colors'}),
    Mt.width),
  cn = Mt.height,
  un = Mt.minHeight,
  ln = Mt.display,
  pn = Mt.overflow,
  fn = Lt.opacity,
  hn = Wt.fontSize,
  gn = Wt.fontFamily,
  mn = Wt.fontWeight,
  yn = Wt.lineHeight,
  bn = Et.alignItems,
  vn = Et.justifyContent,
  wn = Et.flexWrap,
  Dn = Et.flexDirection,
  kn = Et.flex,
  xn = Pt.gridGap,
  Cn = Pt.gridColumnGap,
  Tn = Pt.gridRowGap,
  Sn = Pt.gridAutoFlow,
  Bn = Pt.gridAutoColumns,
  Mn = Pt.gridAutoRows,
  Rn = Pt.gridTemplateColumns,
  Ln = Pt.gridTemplateRows,
  Wn = Pt.gridTemplateAreas,
  En = Pt.gridArea,
  Fn = Ot.borderRadius,
  Pn = Nt.zIndex,
  Hn = Nt.top,
  On = Nt.right,
  In = Nt.bottom,
  zn = Nt.left,
  Un = function (e) {
    var t = e.prop,
      n = e.cssProperty,
      r = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      s = e.properties,
      d = {}
    return (
      (d[t] = Tt({properties: s, property: n || t, scale: a, defaultScale: i, transform: o})),
      r && (d[r] = d[t]),
      kt(d)
    )
  },
  Nn = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Yn = ut(ut({}, Nn), {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  An = ut(ut({}, Nn), {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  qn = Un({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function (e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gn = Bt(Bn, Sn, Mn, Cn, xn, Tn, Wn, Rn, Ln, bn, vn, jt),
  jn = a('div')(
    Vt ||
      (Vt = lt(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    Gn,
    qn,
  ),
  Xn = Bt(jt, kn, wn, Dn, bn, vn, En, cn, dn),
  Qn = a('div')(
    Zt || (Zt = lt(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    Xn,
  ),
  Vn = Bt(En, cn, jt, dn, Nt, Hn, zn, On, In, Pn),
  Zn = a('div')(
    Kt ||
      (Kt = lt(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    Vn,
  )
function Kn(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    o = e.className,
    i = void 0 === o ? '' : o
  return n.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: i,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    n.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
function _n(e) {
  void 0 === e && (e = {})
  var n = t.useContext(r.ThemeContext)
  return t.useMemo(
    function () {
      return n && 'object' == typeof n && n.reactDatepicker && 'object' == typeof n.reactDatepicker
        ? Object.keys(e).reduce(function (t, r) {
            var a
            return ut(ut({}, t), (((a = {})[r] = n.reactDatepicker[r] || e[r]), a))
          }, {})
        : e
    },
    [n, e],
  )
}
var Jn = 'Montserrat, sans-serif',
  $n = {
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
  er = 36
function tr(e, t, n) {
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
var nr,
  rr,
  ar,
  or = Un({prop: 'placeholderColor', cssProperty: 'color'}),
  ir = Un({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  sr = Bt(Nt, Ot, zt, ln, Fn, jt),
  dr = a('label')(nr || (nr = lt(['\n  ', '\n'], ['\n  ', '\n'])), sr),
  cr = Bt(Nt, zn, On, Hn, cn, dn),
  ur = a('div')(
    rr ||
      (rr = lt(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    cr,
  ),
  lr = Bt(zt, jt, gn, hn, Lt, mn, jt, Ot, dn, un, Xt),
  pr = a('input')(
    ar ||
      (ar = lt(
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
    lr,
    ir,
    or,
    ir,
    or,
    ir,
    or,
  )
function fr(e) {
  var a = e.placeholder,
    o = e.id,
    i = e.vertical,
    s = e.isActive,
    d = e.ariaLabel,
    c = e.onClick,
    u = e.value,
    l = e.showCalendarIcon,
    m = e.padding,
    v = e.rtl,
    w = e.disableAccessibility,
    k = e.dateFormat,
    C = e.onChange,
    T = void 0 === C ? function () {} : C,
    R = t.useState(u),
    L = R[0],
    W = R[1],
    E = t.useRef(null)
  t.useEffect(
    function () {
      W(u)
    },
    [u],
  )
  var F = t.useContext(r.ThemeContext),
    P = _n({
      fontFamily: Jn,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: tr('charcoal', $n.charcoal, F),
      inputBackground: tr('white', $n.white, F),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: m,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: tr('silverCloud', $n.silverCloud, F),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: v ? 'unset' : i ? '8px' : '16px',
      inputCalendarWrapperRight: v ? (i ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: tr('graci', $n.graci, F),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + tr('graci', $n.graci, F),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: tr('white', $n.white, F),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + tr('primaryColor', $n.primaryColor, F),
    })
  return n.createElement(
    dr,
    {
      htmlFor: o,
      display: P.inputLabelDisplay,
      position: P.inputLabelPosition,
      border: P.inputLabelBorder,
      background: P.inputLabelBackground,
      borderRadius: P.inputLabelBorderRadius,
      m: P.inputLabelMargin,
    },
    l &&
      n.createElement(
        ur,
        {
          position: P.inputCalendarWrapperPosition,
          height: P.inputCalendarWrapperHeight,
          width: P.inputCalendarWrapperWidth,
          top: P.inputCalendarWrapperTop,
          left: P.inputCalendarWrapperLeft,
          right: P.inputCalendarWrapperRight,
        },
        n.createElement(Kn, {
          width: P.inputCalendarIconWidth,
          height: P.inputCalendarIconHeight,
          color: P.inputCalendarIconColor,
        }),
      ),
    n.createElement(pr, {
      tabIndex: w ? -1 : 0,
      border: P.inputBorder,
      p: P.inputPadding,
      width: P.inputWidth,
      minHeight: P.inputMinHeight,
      background: P.inputBackground,
      fontFamily: P.fontFamily,
      color: P.inputColor,
      fontSize: P.inputFontSize,
      fontWeight: P.inputFontWeight,
      placeholderColor: P.inputPlaceholderColor,
      placeholderFontWeight: P.inputPlaceholderFontWeight,
      boxShadow: s ? P.inputActiveBoxShadow : 'none',
      id: o,
      placeholder: a,
      'aria-label': d,
      value: L,
      autoComplete: 'off',
      onChange: function (e) {
        var t = e.target.value
        W(t),
          'number' == typeof E.current && clearTimeout(E.current),
          (E.current = setTimeout(function () {
            c()
            var e = (function (e, t, n, r) {
              h(3, arguments)
              var a = String(e),
                o = String(t),
                i = r || {},
                s = i.locale || p
              if (!s.match) throw new RangeError('locale must contain match property')
              var d = s.options && s.options.firstWeekContainsDate,
                c = null == d ? 1 : f(d),
                u = null == i.firstWeekContainsDate ? c : f(i.firstWeekContainsDate)
              if (!(u >= 1 && u <= 7))
                throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
              var l = s.options && s.options.weekStartsOn,
                m = null == l ? 0 : f(l),
                v = null == i.weekStartsOn ? m : f(i.weekStartsOn)
              if (!(v >= 0 && v <= 6))
                throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
              if ('' === o) return '' === a ? g(n) : new Date(NaN)
              var w,
                k = {firstWeekContainsDate: u, weekStartsOn: v, locale: s},
                C = [{priority: 10, set: Te, index: 0}],
                T = o
                  .match(we)
                  .map(function (e) {
                    var t = e[0]
                    return 'p' === t || 'P' === t ? (0, D[t])(e, s.formatLong, k) : e
                  })
                  .join('')
                  .match(ve),
                R = []
              for (w = 0; w < T.length; w++) {
                var L = T[w]
                !i.useAdditionalWeekYearTokens && B(L) && M(L),
                  !i.useAdditionalDayOfYearTokens && S(L) && M(L)
                var W = L[0],
                  E = be[W]
                if (E) {
                  var F = E.incompatibleTokens
                  if (Array.isArray(F)) {
                    for (var P = void 0, H = 0; H < R.length; H++) {
                      var O = R[H].token
                      if (-1 !== F.indexOf(O) || O === W) {
                        P = R[H]
                        break
                      }
                    }
                    if (P)
                      throw new RangeError(
                        "The format string mustn't contain `"
                          .concat(P.fullToken, '` and `')
                          .concat(L, '` at the same time'),
                      )
                  } else if ('*' === E.incompatibleTokens && R.length)
                    throw new RangeError(
                      "The format string mustn't contain `".concat(
                        L,
                        '` and any other token at the same time',
                      ),
                    )
                  R.push({token: W, fullToken: L})
                  var I = E.parse(a, L, s.match, k)
                  if (!I) return new Date(NaN)
                  C.push({
                    priority: E.priority,
                    set: E.set,
                    validate: E.validate,
                    value: I.value,
                    index: C.length,
                  }),
                    (a = I.rest)
                } else {
                  if (W.match(Ce))
                    throw new RangeError(
                      'Format string contains an unescaped latin alphabet character `' + W + '`',
                    )
                  if (("''" === L ? (L = "'") : "'" === W && (L = Se(L)), 0 !== a.indexOf(L)))
                    return new Date(NaN)
                  a = a.slice(L.length)
                }
              }
              if (a.length > 0 && xe.test(a)) return new Date(NaN)
              var z = C.map(function (e) {
                  return e.priority
                })
                  .sort(function (e, t) {
                    return t - e
                  })
                  .filter(function (e, t, n) {
                    return n.indexOf(e) === t
                  })
                  .map(function (e) {
                    return C.filter(function (t) {
                      return t.priority === e
                    }).reverse()
                  })
                  .map(function (e) {
                    return e[0]
                  }),
                U = g(n)
              if (isNaN(U)) return new Date(NaN)
              var N = y(U, x(U)),
                Y = {}
              for (w = 0; w < z.length; w++) {
                var A = z[w]
                if (A.validate && !A.validate(N, A.value, k)) return new Date(NaN)
                var q = A.set(N, Y, A.value, k)
                q[0] ? ((N = q[0]), b(Y, q[1])) : (N = q)
              }
              return N
            })(t, k, new Date())
            isNaN(e) || T(e)
          }, 1e3))
      },
      onFocus: c,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function hr(e) {
  var t = e.height,
    r = e.width,
    a = e.iconColor,
    o = e.direction,
    i = void 0 === o ? 'right' : o,
    s = e.className,
    d = void 0 === s ? '' : s,
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
  return n.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: d,
      transform: 'rotate(' + c + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    n.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
var gr,
  mr,
  yr,
  br = Bt(gn, hn, mn, Lt, yn, jt),
  vr = a('div')(gr || (gr = lt(['\n  ', '\n'], ['\n  ', '\n'])), br),
  wr = a(vr)(
    yr ||
      (yr = lt(
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
        r.css(
          mr ||
            (mr = lt(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          n,
        )
      )
    },
  )
function Dr(e) {
  var a = e.title,
    o = e.isActive,
    i = e.date,
    s = e.vertical,
    d = t.useContext(r.ThemeContext),
    c = _n({
      fontFamily: Jn,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: tr('silverCloud', $n.silverCloud, d),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: tr('charcoal', $n.charcoal, d),
      selectDateDateFontSize: s ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: tr('primaryColor', $n.primaryColor, d),
      selectDatePadding: '0',
    })
  return n.createElement(
    Zn,
    {p: c.selectDatePadding},
    n.createElement(
      vr,
      {
        fontFamily: c.fontFamily,
        fontSize: c.selectDateLabelFontSize,
        color: c.selectDateLabelColor,
        m: c.selectDateLabelMargin,
      },
      a,
    ),
    n.createElement(
      wr,
      {
        as: 'span',
        color: c.selectDateDateColor,
        fontSize: c.selectDateDateFontSize,
        fontWeight: c.selectDateDateFontWeight,
        fontFamily: c.fontFamily,
        p: c.selectDateDatePadding,
        isActive: o,
        selectDateBorderColor: c.selectDateBorderColor,
      },
      i,
    ),
  )
}
var kr,
  xr,
  Cr,
  Tr,
  Sr,
  Br = function (e) {
    var a = e.label,
      o = t.useContext(r.ThemeContext),
      i = _n({
        fontFamily: Jn,
        monthLabelColor: tr('darcula', $n.darcula, o),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return n.createElement(
      vr,
      {
        fontFamily: i.fontFamily,
        fontSize: i.monthLabelFontSize,
        fontWeight: i.monthLabelFontWeight,
        lineHeight: i.monthLabelLineHeight,
        color: i.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      a,
    )
  },
  Mr = function (e) {
    var a = e.label,
      o = t.useContext(r.ThemeContext),
      i = _n({
        fontFamily: Jn,
        dayLabelColor: tr('silverCloud', $n.silverCloud, o),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return n.createElement(
      vr,
      {
        fontFamily: i.fontFamily,
        fontSize: i.dayLabelFontSize,
        fontWeight: i.dayLabelFontWeight,
        color: i.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      a,
    )
  },
  Rr = {
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
  Lr = n.createContext(Rr),
  Wr = Un({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Er = Un({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function (e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Fr = Un({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Pr = Un({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Hr = Un({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Or = Un({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function (e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Ir = Bt(Xt, zt, Lt, gn, mn, hn),
  zr = a('button')(
    Sr ||
      (Sr = lt(
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
    Wr,
    Er,
    Ir,
    function (e) {
      var t = e.disabledDate,
        n = e.isSelectedStartOrEnd
      return (
        t &&
        !n &&
        r.css(
          kr ||
            (kr = lt(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function (e) {
      var t = e.disabledDate,
        n = e.isSelected,
        a = e.isSelectedStartOrEnd,
        o = e.isWithinHoverRange
      return t || n || a || o
        ? n && !a
          ? r.css(
              Cr ||
                (Cr = lt(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              Or,
              Pr,
            )
          : ''
        : r.css(
            xr ||
              (xr = lt(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            Hr,
            Fr,
          )
    },
    function (e) {
      var t = e.borderAccessibilityColor
      return r.css(
        Tr ||
          (Tr = lt(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Ur(e, t, n, r) {
  var a = r.selectedFirstOrLast,
    o = r.normal,
    i = r.selected,
    s = r.rangeHover
  return t ? a : e ? i : n ? s : o
}
function Nr(e) {
  var a = e.day,
    o = e.date,
    i = t.useRef(null),
    s = t.useContext(Lr),
    d = s.focusedDate,
    c = s.isDateFocused,
    u = s.isDateSelected,
    l = s.isDateHovered,
    p = s.isDateBlocked,
    f = s.isFirstOrLastSelectedDate,
    h = s.onDateSelect,
    g = s.onDateFocus,
    m = s.onDateHover,
    y = s.onDayRender,
    b = (function (e) {
      var n = e.date,
        r = e.focusedDate,
        a = e.isDateSelected,
        o = e.isDateFocused,
        i = e.isFirstOrLastSelectedDate,
        s = e.isDateHovered,
        d = e.isDateBlocked,
        c = e.onDateSelect,
        u = e.onDateFocus,
        l = e.onDateHover,
        p = t.useCallback(
          function () {
            return c(n)
          },
          [n, c],
        ),
        f = t.useCallback(
          function () {
            return l(n)
          },
          [n, l],
        ),
        h = d(n) && !s(n)
      return {
        tabIndex: null === r || o(n) ? 0 : -1,
        isSelected: a(n),
        isSelectedStartOrEnd: i(n),
        isWithinHoverRange: s(n),
        disabledDate: h,
        onKeyDown: function (e) {
          'ArrowRight' === e.key
            ? u(Ne(n, 1))
            : 'ArrowLeft' === e.key
            ? u(Ne(n, -1))
            : 'ArrowUp' === e.key
            ? u(Ne(n, -7))
            : 'ArrowDown' === e.key && u(Ne(n, 7))
        },
        onClick: h ? function () {} : p,
        onMouseEnter: f,
      }
    })({
      date: o,
      focusedDate: d,
      isDateFocused: c,
      isDateSelected: u,
      isDateHovered: l,
      isDateBlocked: p,
      isFirstOrLastSelectedDate: f,
      onDateFocus: g,
      onDateSelect: h,
      onDateHover: m,
      dayRef: i,
    }),
    v = t.useContext(r.ThemeContext),
    w = tr('white', $n.white, v),
    D = tr('mud', $n.mud, v),
    k = tr('primaryColor', $n.primaryColor, v),
    x = tr('accessibility', $n.accessibility, v),
    C = tr('selectedDay', $n.selectedDay, v),
    T = tr('selectedDayHover', $n.selectedDayHover, v),
    S = tr('normalDayHover', $n.normalDayHover, v),
    B = _n({
      fontFamily: Jn,
      daySize: er,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: D,
      dayHoverColor: D,
      daySelectedColor: w,
      daySelectedHoverColor: w,
      dayHoverRangeColor: w,
      daySelectedFirstOrLastColor: w,
      dayBackground: w,
      dayHoverBackground: S,
      daySelectedBackground: C,
      daySelectedHoverBackground: T,
      dayHoverRangeBackground: C,
      daySelectedFirstOrLastBackground: k,
      dayBorderColor: S,
      daySelectedBorderColor: C,
      dayHoverRangeBorderColor: C,
      daySelectedFirstOrLastBorderColor: k,
      dayAccessibilityBorderColor: x,
    }),
    M = t.useMemo(
      function () {
        return Ur(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastBorderColor,
          selected: B.daySelectedBorderColor,
          normal: B.dayBorderColor,
          rangeHover: B.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    ),
    R = t.useMemo(
      function () {
        return Ur(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastBackground,
          selected: B.daySelectedBackground,
          normal: B.dayBackground,
          rangeHover: B.dayHoverRangeBackground,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    ),
    L = t.useMemo(
      function () {
        return Ur(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastColor,
          selected: B.daySelectedColor,
          normal: B.dayColor,
          rangeHover: B.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    )
  return n.createElement(
    zr,
    ut({}, b, {
      ref: i,
      dayHeight: B.daySize,
      dayWidth: B.daySize,
      background: R,
      color: L,
      fontFamily: B.fontFamily,
      fontWeight: B.dayFontWeight,
      fontSize: B.dayFontSize,
      daySelectedHoverBackground: B.daySelectedHoverBackground,
      dayHoverBackground: B.dayHoverBackground,
      dayHoverColor: B.dayHoverColor,
      daySelectedHoverColor: B.daySelectedHoverColor,
      borderAccessibilityColor: B.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        M +
        ',\n        0 1px 0 0 ' +
        M +
        ',\n        1px 1px 0 0 ' +
        M +
        ',\n        1px 0 0 0 ' +
        M +
        ' inset,\n        0 1px 0 0 ' +
        M +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + o.toDateString(),
      type: 'button',
    }),
    'function' == typeof y
      ? y(o)
      : n.createElement(
          Qn,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          a,
        ),
  )
}
var Yr,
  Ar,
  qr = r.keyframes(
    Yr ||
      (Yr = lt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  Gr = a('div')(
    Ar ||
      (Ar = lt(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    qr,
  ),
  jr = function (e) {
    var t = e.year,
      r = e.month,
      a = e.firstDayOfWeek,
      o = Ve({
        dayLabelFormat: e.dayLabelFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: r,
        firstDayOfWeek: a,
      }),
      i = o.days,
      s = o.weekdayLabels,
      d = o.monthLabel,
      c = _n({daySize: er, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return n.createElement(
      Gr,
      null,
      n.createElement(
        Qn,
        {justifyContent: 'center', m: c.monthLabelMargin},
        n.createElement(Br, {label: d}),
      ),
      n.createElement(
        jn,
        {daySizeGridTemplateColumns: c.daySize},
        s.map(function (e) {
          return n.createElement(
            Qn,
            {key: e, justifyContent: 'center', m: c.monthDayLabelMargin},
            n.createElement(Mr, {label: e}),
          )
        }),
      ),
      n.createElement(
        jn,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function (e, t) {
          return 'object' == typeof e
            ? n.createElement(Nr, {date: e.date, key: e.dayLabel, day: e.dayLabel})
            : n.createElement('div', {key: t})
        }),
      ),
    )
  }
var Xr,
  Qr,
  Vr,
  Zr = a('button')(
    Xr ||
      (Xr = lt(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  Kr = a(function (e) {
    var t = e.height,
      r = e.width,
      a = e.color,
      o = e.className,
      i = void 0 === o ? '' : o
    return n.createElement(
      'svg',
      {
        width: r,
        height: t,
        color: a,
        className: i,
        viewBox: '0 0 14 14',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      n.createElement('path', {
        fill: 'currentColor',
        fillRule: 'nonzero',
        d:
          'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
      }),
    )
  })(Vr || (Vr = lt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    return (
      e.rtl &&
      r.css(
        Qr ||
          (Qr = lt(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function _r(e) {
  var a = e.onResetDates,
    o = e.text,
    i = e.rtl,
    s = t.useContext(r.ThemeContext),
    d = _n({
      fontFamily: Jn,
      resetDatesIconColor: tr('mud', $n.mud, s),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: tr('darcula', $n.darcula, s),
      resetDatesTextMargin: i ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return n.createElement(
    Zr,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: a,
      onMouseUp: function (e) {
        e.currentTarget.blur()
      },
    },
    n.createElement(Kr, {
      height: d.resetDatesIconHeight,
      width: d.resetDatesIconWidth,
      color: d.resetDatesIconColor,
      rtl: i,
    }),
    n.createElement(
      vr,
      {
        m: d.resetDatesTextMargin,
        lineHeight: d.resetDatesTextLineHeight,
        fontFamily: d.fontFamily,
        fontSize: d.resetDatesTextFontSize,
        color: d.resetDatesTextColor,
      },
      o,
    ),
  )
}
var Jr,
  $r,
  ea = a('svg')($r || ($r = lt(['\n  ', '\n'], ['\n  ', '\n'])), function (e) {
    var t = e.angle
    return r.css(
      Jr ||
        (Jr = lt(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function ta(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    o = e.direction,
    i = void 0 === o ? 'right' : o,
    s = e.className,
    d = void 0 === s ? '' : s,
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
  return n.createElement(
    ea,
    {
      width: r,
      height: t,
      color: a,
      className: d,
      angle: c,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    n.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var na,
  ra = Bt(dn, cn, zt, jt, Ot),
  aa = a('button')(
    na ||
      (na = lt(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    ra,
  )
function oa(e) {
  var a = e.type,
    o = e.onClick,
    i = e.vertical,
    s = e.rtl,
    d = e.ariaLabel,
    c = t.useContext(r.ThemeContext),
    u = _n({
      navButtonWidth: i ? '48px' : '30px',
      navButtonHeight: i ? '48px' : '30px',
      navButtonBackground: tr('white', $n.white, c),
      navButtonBorder: '1px solid ' + tr('silverCloud', $n.silverCloud, c),
      navButtonPadding: '0',
      navButtonIconHeight: i ? '18px' : '11px',
      navButtonIconWidth: i ? '28px' : '18px',
      navButtonIconColor: tr('greey', $n.greey, c),
    })
  function l() {
    return 'next' !== a || i
      ? 'next' === a && i
        ? 'down'
        : 'prev' !== a || i
        ? 'up'
        : 'left'
      : 'right'
  }
  return n.createElement(
    aa,
    {
      width: u.navButtonWidth,
      height: u.navButtonHeight,
      background: u.navButtonBackground,
      border: u.navButtonBorder,
      borderRight: 'up' !== l() || s ? u.navButtonBorder : 'unset',
      borderLeft: 'up' === l() && s ? 'unset' : u.navButtonBorder,
      p: u.navButtonPadding,
      type: 'button',
      'aria-label': d,
      onClick: o,
      onMouseUp: function (e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    n.createElement(ta, {
      width: u.navButtonIconWidth,
      height: u.navButtonIconHeight,
      color: u.navButtonIconColor,
      direction: l(),
    }),
  )
}
function ia(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    o = e.className,
    i = void 0 === o ? '' : o
  return n.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: i,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    n.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var sa,
  da,
  ca = Bt(jt, Lt, hn, gn, mn),
  ua = a('div')(
    sa ||
      (sa = lt(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    ca,
  ),
  la = a('button')(
    da ||
      (da = lt(
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
    ua,
    Lt,
    Lt,
  )
function pa(e) {
  var a = e.onClick,
    o = e.rtl,
    i = e.closeText,
    s = t.useContext(r.ThemeContext),
    d = _n({
      fontFamily: Jn,
      closeMargin: o ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: tr('silverCloud', $n.silverCloud, s),
      closeHoverColor: tr('darcula', $n.darcula, s),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return n.createElement(
    la,
    {
      onClick: a,
      color: d.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    n.createElement(ia, {width: '15px', height: '16px', color: '#ADADAD'}),
    n.createElement(
      ua,
      {
        m: d.closeMargin,
        color: d.closeColor,
        fontSize: d.closeFontSize,
        fontFamily: d.fontFamily,
        fontWeight: d.closeFontWeight,
      },
      i,
    ),
  )
}
var fa = r.keyframes(
    Da ||
      (Da = lt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  ha = Bt(zt, jt, Fn, Nt, Xt, dn, Pn),
  ga = a('div')(
    xa ||
      (xa = lt(
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
    ha,
    function (e) {
      return (
        e.rtl &&
        r.css(ka || (ka = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    fa,
  ),
  ma = a('div')(
    Ca ||
      (Ca = lt(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  ya = Bt(ln, vn),
  ba = a(Zn)(Ta || (Ta = lt(['\n  ', '\n'], ['\n  ', '\n'])), ya),
  va = Bt(pn, cn),
  wa = a(jn)(Sa || (Sa = lt(['\n  ', '\n'], ['\n  ', '\n'])), va)
var Da,
  ka,
  xa,
  Ca,
  Ta,
  Sa,
  Ba,
  Ma,
  Ra,
  La,
  Wa,
  Ea = n.forwardRef(function (e, a) {
    var o = e.startDate,
      i = e.endDate,
      s = e.minBookingDate,
      d = e.maxBookingDate,
      c = e.focusedInput,
      u = e.onDatesChange,
      l = e.dayLabelFormat,
      p = e.weekdayLabelFormat,
      f = e.monthLabelFormat,
      h = e.onDayRender,
      g = e.initialVisibleMonth,
      m = e.vertical,
      y = void 0 !== m && m,
      b = e.rtl,
      v = void 0 !== b && b,
      w = e.showResetDates,
      D = void 0 === w || w,
      k = e.showClose,
      x = void 0 === k || k,
      C = e.showSelectedDates,
      T = void 0 === C || C,
      S = e.exactMinBookingDays,
      B = void 0 !== S && S,
      M = e.isDateBlocked,
      R =
        void 0 === M
          ? function () {
              return !1
            }
          : M,
      L = e.minBookingDays,
      W = void 0 === L ? 1 : L,
      E = e.onClose,
      F = void 0 === E ? function () {} : E,
      P = e.numberOfMonths,
      H = e.firstDayOfWeek,
      O = e.displayFormat,
      I = void 0 === O ? 'MM/dd/yyyy' : O,
      z = e.phrases,
      U = void 0 === z ? Nn : z,
      N = e.unavailableDates,
      Y = ct({
        startDate: o,
        endDate: i,
        focusedInput: c,
        onDatesChange: u,
        minBookingDate: s,
        maxBookingDate: d,
        minBookingDays: W,
        isDateBlocked: R,
        exactMinBookingDays: B,
        unavailableDates: void 0 === N ? [] : N,
        initialVisibleMonth: g,
        numberOfMonths: P,
        firstDayOfWeek: H,
      }),
      A = Y.activeMonths,
      q = Y.isDateSelected,
      G = Y.isFirstOrLastSelectedDate,
      j = Y.isDateHovered,
      X = Y.firstDayOfWeek,
      Q = Y.onDateSelect,
      V = Y.onResetDates,
      Z = Y.goToPreviousMonths,
      K = Y.goToNextMonths,
      _ = Y.numberOfMonths,
      J = Y.hoveredDate,
      $ = Y.onDateHover,
      ee = Y.isDateFocused,
      te = Y.focusedDate,
      ne = Y.onDateFocus,
      re = Y.isDateBlocked
    t.useImperativeHandle(a, function () {
      return {
        onDateSelect: function (e) {
          Q(e)
        },
      }
    })
    var ae = t.useRef(null),
      oe = t.useContext(r.ThemeContext),
      ie = _n({
        datepickerZIndex: null,
        datepickerBackground: '#ffffff',
        datepickerPadding: y ? '16px 16px 0' : '32px',
        datepickerBorderRadius: '2px',
        datepickerPosition: 'relative',
        datepickerWidth: 'fit-content',
        datepickerCloseWrapperPosition: y ? 'relative' : 'absolute',
        datepickerCloseWrapperDisplay: y ? 'flex' : 'block',
        datepickerCloseWrapperJustifyContent: y ? 'flex-end' : 'initial',
        datepickerCloseWrapperMargin: y ? '0 0 16px' : '0',
        datepickerCloseWrapperRight: v ? 'unset' : y ? '0' : '32px',
        datepickerCloseWrapperTop: 'unset',
        datepickerCloseWrapperLeft: v ? '32px' : 'unset',
        datepickerCloseWrapperBottom: 'unset',
        datepickerCloseWrapperZIndex: 1,
        datepickerSelectDateGridTemplateColumns: y ? '87px 50px 87px' : '126px 75px 126px',
        datepickerSelectDateGridTemplateRows: 'unset',
        datepickerSelectDateArrowIconWidth: '15px',
        datepickerSelectDateArrowIconHeight: '12px',
        datepickerSelectDateArrowIconColor: tr('silverCloud', $n.silverCloud, oe),
        datepickerMonthsWrapperMargin: x || T ? (T ? '28px 0 0' : '48px 0 0') : 'unset',
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
      ae && ae.current && y && (ae.current.scrollTop = 0)
    }
    function de() {
      K(), se()
    }
    function ce() {
      Z(), se()
    }
    return n.createElement(
      r.ThemeProvider,
      {
        theme: function (e) {
          return e || {}
        },
      },
      n.createElement(
        Lr.Provider,
        {
          value: {
            rtl: v,
            isDateFocused: ee,
            isDateSelected: q,
            isDateHovered: j,
            isFirstOrLastSelectedDate: G,
            onDateFocus: ne,
            focusedDate: te,
            onDateSelect: Q,
            onDateHover: $,
            onDayRender: h,
            isDateBlocked: re,
          },
        },
        n.createElement(
          ga,
          {
            background: ie.datepickerBackground,
            p: ie.datepickerPadding,
            borderRadius: ie.datepickerBorderRadius,
            position: ie.datepickerPosition,
            boxShadow: ie.datepickerBoxShadow,
            width: ie.datepickerWidth,
            zIndex: ie.datepickerZIndex,
            rtl: v,
          },
          x &&
            n.createElement(
              ba,
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
              n.createElement(pa, {onClick: F, rtl: v, closeText: U.close}),
            ),
          T &&
            n.createElement(
              ma,
              null,
              n.createElement(
                jn,
                {
                  'data-testid': 'SelectedDatesGrid',
                  gridTemplateColumns: ie.datepickerSelectDateGridTemplateColumns,
                  gridTemplateRows: ie.datepickerSelectDateGridTemplateRows,
                },
                n.createElement(Dr, {
                  title: U.datepickerStartDateLabel,
                  date: ot(o, I, U.datepickerStartDatePlaceholder),
                  isActive: c === st,
                  vertical: y,
                }),
                n.createElement(
                  Qn,
                  {justifyContent: 'center', alignItems: 'center'},
                  n.createElement(hr, {
                    height: ie.datepickerSelectDateArrowIconHeight,
                    width: ie.datepickerSelectDateArrowIconWidth,
                    iconColor: ie.datepickerSelectDateArrowIconColor,
                  }),
                ),
                n.createElement(Dr, {
                  title: U.datepickerEndDateLabel,
                  date: ot(i, I, U.datepickerEndDatePlaceholder),
                  isActive: c === dt,
                  vertical: y,
                }),
              ),
            ),
          n.createElement(
            Zn,
            {position: 'relative'},
            n.createElement(
              Zn,
              {m: ie.datepickerMonthsWrapperMargin},
              n.createElement(
                wa,
                {
                  'data-testid': 'MonthGrid',
                  overflow: ie.datepickerMonthsGridOverflow,
                  height: ie.datepickerMonthsGridHeight,
                  gridTemplateColumns: y ? '1fr' : 'repeat(' + _ + ', 1fr)',
                  gridGap: ie.datepickerMonthsGridGap,
                  pr: v ? '1px' : '0',
                  ref: ae,
                  onMouseLeave: function () {
                    J && $(null)
                  },
                },
                A.map(function (e) {
                  return n.createElement(jr, {
                    key: 'month-' + e.year + '-' + e.month,
                    year: e.year,
                    month: e.month,
                    firstDayOfWeek: X,
                    dayLabelFormat: l || je,
                    weekdayLabelFormat: p || Xe,
                    monthLabelFormat: f || Qe,
                  })
                }),
              ),
            ),
            n.createElement(
              Qn,
              {alignItems: 'center'},
              n.createElement(
                n.Fragment,
                null,
                D &&
                  n.createElement(
                    Qn,
                    {flex: '1', m: ie.datepickerResetDatesWrapperMargin},
                    n.createElement(_r, {rtl: v, onResetDates: V, text: U.resetDates}),
                  ),
                n.createElement(
                  Zn,
                  {
                    position: ie.datepickerPreviousMonthButtonPosition,
                    top: ie.datepickerPreviousMonthButtonTop,
                    left: ie.datepickerPreviousMonthButtonLeft,
                    right: ie.datepickerPreviousMonthButtonRight,
                    bottom: ie.datepickerPreviousMonthButtonBottom,
                  },
                  n.createElement(oa, {
                    type: 'prev',
                    onClick: v && !y ? de : ce,
                    vertical: y,
                    rtl: v,
                    ariaLabel: 'Previous month',
                  }),
                ),
                n.createElement(
                  Zn,
                  {
                    position: ie.datepickerNextMonthButtonPosition,
                    top: ie.datepickerNextMonthButtonTop,
                    left: ie.datepickerNextMonthButtonLeft,
                    right: ie.datepickerNextMonthButtonRight,
                    bottom: ie.datepickerNextMonthButtonBottom,
                  },
                  n.createElement(oa, {
                    type: 'next',
                    onClick: v && !y ? ce : de,
                    vertical: y,
                    rtl: v,
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
  Fa = a(Zn)(Ma || (Ma = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pn, function (e) {
    return (
      e.rtl &&
      r.css(Ba || (Ba = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Pa = Bt(Lt, fn),
  Ha = a(hr)(La || (La = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pa, function (e) {
    return (
      e.rtl &&
      r.css(
        Ra ||
          (Ra = lt(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Oa = Bt(zt, Ot, Fn),
  Ia = a(jn)(Wa || (Wa = lt(['\n  ', '\n'], ['\n  ', '\n'])), Oa)
var za,
  Ua,
  Na = a(Zn)(Ua || (Ua = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pn, function (e) {
    return (
      e.rtl &&
      r.css(za || (za = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
;(exports.DateRangeInput = function (e) {
  var a = e.startDate,
    o = e.endDate,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    d = e.firstDayOfWeek,
    c = e.onFocusChange,
    u = e.numberOfMonths,
    l = e.focusedInput,
    p = e.onDatesChange,
    f = e.exactMinBookingDays,
    h = e.dayLabelFormat,
    g = e.weekdayLabelFormat,
    m = e.monthLabelFormat,
    y = e.onDayRender,
    b = e.initialVisibleMonth,
    v = e.showClose,
    w = void 0 === v || v,
    D = e.showSelectedDates,
    k = void 0 === D || D,
    x = e.showResetDates,
    C = void 0 === x || x,
    T = e.vertical,
    S = void 0 !== T && T,
    B = e.rtl,
    M = void 0 !== B && B,
    R = e.isDateBlocked,
    L =
      void 0 === R
        ? function () {
            return !1
          }
        : R,
    W = e.minBookingDays,
    E = void 0 === W ? 1 : W,
    F = e.onClose,
    P = void 0 === F ? function () {} : F,
    H = e.showStartDateCalendarIcon,
    O = void 0 === H || H,
    I = e.showEndDateCalendarIcon,
    z = void 0 === I || I,
    U = e.displayFormat,
    N = void 0 === U ? 'MM/dd/yyyy' : U,
    Y = e.phrases,
    A = void 0 === Y ? Yn : Y,
    q = e.placement,
    G = void 0 === q ? 'bottom' : q,
    j = e.startDateInputId,
    X = void 0 === j ? 'startDate' : j,
    Q = e.endDateInputId,
    V = void 0 === Q ? 'endDate' : Q,
    Z = e.unavailableDates,
    K = void 0 === Z ? [] : Z,
    _ = t.useRef(null),
    J = t.useRef(null),
    $ = t.useContext(r.ThemeContext),
    ee = _n(
      ut(
        {
          dateRangeZIndex: null,
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: S ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeGridTemplateRows: 'unset',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: tr('graci', $n.graci, $),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: S ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: S ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
        })(G, M),
      ),
    )
  function te(e) {
    null !== l && J && J.current && !J.current.contains(e.target) && c(null)
  }
  function ne(e) {
    _ && _.current && _.current.onDateSelect && _.current.onDateSelect(e)
  }
  return (
    t.useEffect(function () {
      return (
        'undefined' != typeof window && window.addEventListener('click', te),
        function () {
          window.removeEventListener('click', te)
        }
      )
    }),
    n.createElement(
      r.ThemeProvider,
      {
        theme: function (e) {
          return e || {}
        },
      },
      n.createElement(
        Fa,
        {zIndex: ee.dateRangeZIndex, rtl: M, position: 'relative', ref: J},
        n.createElement(
          Ia,
          {
            'data-testid': 'DateRangeInputGrid',
            background: ee.dateRangeBackground,
            gridTemplateColumns: ee.dateRangeGridTemplateColumns,
            gridTemplateRows: ee.dateRangeGridTemplateRows,
            border: ee.dateRangeBorder,
            borderRadius: ee.dateRangeBorderRadius,
          },
          n.createElement(fr, {
            id: X,
            ariaLabel: A.startDateAriaLabel,
            placeholder: A.startDatePlaceholder,
            value: ot(a, N, ''),
            onClick: function () {
              return c(st)
            },
            showCalendarIcon: O,
            vertical: S,
            isActive: l === st,
            padding: ee.dateRangeStartDateInputPadding,
            rtl: M,
            onChange: ne,
            dateFormat: N,
          }),
          n.createElement(
            Qn,
            {alignItems: 'center', justifyContent: 'center'},
            n.createElement(Ha, {
              width: ee.dateRangeArrowIconWidth,
              height: ee.dateRangeArrowIconHeight,
              color: ee.dateRangeArrowIconColor,
              opacity: ee.dateRangeArrowIconOpacity,
              rtl: M,
            }),
          ),
          n.createElement(fr, {
            id: V,
            ariaLabel: A.endDateAriaLabel,
            placeholder: A.endDatePlaceholder,
            value: ot(o, N, ''),
            onClick: function () {
              return c(a ? dt : st)
            },
            showCalendarIcon: z,
            vertical: S,
            isActive: l === dt,
            padding: ee.dateRangeEndDateInputPadding,
            rtl: M,
            disableAccessibility: l === st,
            onChange: ne,
            dateFormat: N,
          }),
        ),
        n.createElement(
          Zn,
          {
            position: ee.dateRangeDatepickerWrapperPosition,
            bottom: ee.dateRangeDatepickerWrapperBottom,
            left: ee.dateRangeDatepickerWrapperLeft,
            top: ee.dateRangeDatepickerWrapperTop,
            right: ee.dateRangeDatepickerWrapperRight,
          },
          null !== l &&
            n.createElement(Ea, {
              onClose: function () {
                P(), c(null)
              },
              startDate: a,
              endDate: o,
              minBookingDate: i,
              maxBookingDate: s,
              firstDayOfWeek: d,
              numberOfMonths: u,
              focusedInput: l,
              displayFormat: N,
              onDatesChange: p,
              minBookingDays: E,
              isDateBlocked: L,
              exactMinBookingDays: f,
              showResetDates: C,
              vertical: S,
              showSelectedDates: k,
              showClose: w,
              rtl: M,
              dayLabelFormat: h,
              weekdayLabelFormat: g,
              monthLabelFormat: m,
              onDayRender: y,
              phrases: A,
              unavailableDates: K,
              ref: _,
              initialVisibleMonth: b,
            }),
        ),
      ),
    )
  )
}),
  (exports.DateSingleInput = function (e) {
    var a = e.date,
      o = e.minBookingDate,
      i = e.maxBookingDate,
      s = e.firstDayOfWeek,
      d = e.onFocusChange,
      c = e.showDatepicker,
      u = e.onDateChange,
      l = e.dayLabelFormat,
      p = e.weekdayLabelFormat,
      f = e.monthLabelFormat,
      h = e.onDayRender,
      g = e.initialVisibleMonth,
      m = e.numberOfMonths,
      y = void 0 === m ? 1 : m,
      b = e.showClose,
      v = void 0 === b || b,
      w = e.showResetDate,
      D = void 0 === w || w,
      k = e.vertical,
      x = void 0 !== k && k,
      C = e.rtl,
      T = void 0 !== C && C,
      S = e.isDateBlocked,
      B =
        void 0 === S
          ? function () {
              return !1
            }
          : S,
      M = e.onClose,
      R = void 0 === M ? function () {} : M,
      L = e.showCalendarIcon,
      W = void 0 === L || L,
      E = e.displayFormat,
      F = void 0 === E ? 'MM/dd/yyyy' : E,
      P = e.phrases,
      H = void 0 === P ? An : P,
      O = e.placement,
      I = void 0 === O ? 'bottom' : O,
      z = e.inputId,
      U = void 0 === z ? 'startDate' : z,
      N = e.unavailableDates,
      Y = void 0 === N ? [] : N,
      A = t.useRef(null),
      q = t.useRef(null),
      G = _n(
        ut(
          {
            dateSingleZIndex: null,
            dateSingleInputPadding: x ? (T ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
          })(I, T),
        ),
      )
    function j(e) {
      c && q && q.current && !q.current.contains(e.target) && d(!1)
    }
    return (
      t.useEffect(function () {
        return (
          'undefined' != typeof window && window.addEventListener('click', j),
          function () {
            window.removeEventListener('click', j)
          }
        )
      }),
      n.createElement(
        r.ThemeProvider,
        {
          theme: function (e) {
            return e || {}
          },
        },
        n.createElement(
          Na,
          {zIndex: G.dateSingleZIndex, rtl: T, position: 'relative', ref: q},
          n.createElement(fr, {
            id: U,
            ariaLabel: H.dateAriaLabel,
            placeholder: H.datePlaceholder,
            value: ot(a, F, ''),
            onClick: function () {
              return d(!0)
            },
            showCalendarIcon: W,
            vertical: x,
            isActive: !1,
            padding: G.dateSingleInputPadding,
            rtl: T,
            onChange: function (e) {
              A && A.current && A.current.onDateSelect && A.current.onDateSelect(e)
            },
            dateFormat: F,
          }),
          n.createElement(
            Zn,
            {
              position: G.dateSingleDatepickerWrapperPosition,
              bottom: G.dateSingleDatepickerWrapperBottom,
              left: G.dateSingleDatepickerWrapperLeft,
              top: G.dateSingleDatepickerWrapperTop,
              right: G.dateSingleDatepickerWrapperRight,
            },
            c &&
              n.createElement(Ea, {
                exactMinBookingDays: !0,
                minBookingDays: 1,
                onClose: function () {
                  R(), d(!1)
                },
                startDate: a,
                endDate: a,
                minBookingDate: o,
                maxBookingDate: i,
                firstDayOfWeek: s,
                numberOfMonths: y,
                focusedInput: c ? st : null,
                displayFormat: F,
                onDatesChange: function (e) {
                  var t = e.focusedInput,
                    n = e.startDate
                  u({showDatepicker: null !== t, date: n})
                },
                isDateBlocked: B,
                showResetDates: D,
                vertical: x,
                showSelectedDates: !1,
                showClose: v,
                rtl: T,
                dayLabelFormat: l,
                weekdayLabelFormat: p,
                monthLabelFormat: f,
                onDayRender: h,
                phrases: H,
                ref: A,
                unavailableDates: Y,
                initialVisibleMonth: g,
              }),
          ),
        ),
      )
    )
  }),
  (exports.Datepicker = Ea),
  (exports.END_DATE = dt),
  (exports.START_DATE = st),
  (exports.dateRangeInputPhrases = Yn),
  (exports.dateSingleInputPhrases = An),
  (exports.datepickerPhrases = Nn)
