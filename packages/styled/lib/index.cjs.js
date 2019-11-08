'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var React = require('react'),
  React__default = _interopDefault(React),
  styled = require('styled-components'),
  styled__default = _interopDefault(styled),
  a = {
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
function i(e) {
  return function(t) {
    var r = t || {},
      a = r.width ? String(r.width) : e.defaultWidth
    return e.formats[a] || e.formats[e.defaultWidth]
  }
}
var o = {
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
  u = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function s(e) {
  return function(t, r) {
    var a,
      n = r || {}
    if ('formatting' === (n.context ? String(n.context) : 'standalone') && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth,
        i = n.width ? String(n.width) : o
      a = e.formattingValues[i] || e.formattingValues[o]
    } else {
      var s = e.defaultWidth,
        l = n.width ? String(n.width) : e.defaultWidth
      a = e.values[l] || e.values[s]
    }
    return a[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
function c(e) {
  return function(t, r) {
    var a = String(t),
      n = r || {},
      o = n.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      s = a.match(i)
    if (!s) return null
    var l,
      c = s[0],
      d = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (l =
        '[object Array]' === Object.prototype.toString.call(d)
          ? (function(e, t) {
              for (var r = 0; r < e.length; r++) if (t(e[r])) return r
            })(d, function(e) {
              return e.test(a)
            })
          : (function(e, t) {
              for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r
            })(d, function(e) {
              return e.test(a)
            })),
      (l = e.valueCallback ? e.valueCallback(l) : l),
      {value: (l = n.valueCallback ? n.valueCallback(l) : l), rest: a.slice(c.length)}
    )
  }
}
var d,
  l = {
    code: 'en-US',
    formatDistance: function(e, t, r) {
      var n
      return (
        (r = r || {}),
        (n =
          'string' == typeof a[e] ? a[e] : 1 === t ? a[e].one : a[e].other.replace('{{count}}', t)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
      )
    },
    formatLong: o,
    formatRelative: function(e, t, r, a) {
      return u[e]
    },
    localize: {
      ordinalNumber: function(e, t) {
        var r = Number(e),
          a = r % 100
        if (a > 20 || a < 10)
          switch (a % 10) {
            case 1:
              return r + 'st'
            case 2:
              return r + 'nd'
            case 3:
              return r + 'rd'
          }
        return r + 'th'
      },
      era: s({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: s({
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
      month: s({
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
      day: s({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: s({
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
        ((d = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function(e) {
            return parseInt(e, 10)
          },
        }),
        function(e, t) {
          var r = String(e),
            a = t || {},
            n = r.match(d.matchPattern)
          if (!n) return null
          var o = n[0],
            i = r.match(d.parsePattern)
          if (!i) return null
          var s = d.valueCallback ? d.valueCallback(i[0]) : i[0]
          return {value: (s = a.valueCallback ? a.valueCallback(s) : s), rest: r.slice(o.length)}
        }),
      era: c({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: c({
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
      month: c({
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
      day: c({
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
      dayPeriod: c({
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
function h(e) {
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
function g(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  return (function(e, t) {
    if (arguments.length < 2)
      throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
    var r = h(e).getTime(),
      a = f(t)
    return new Date(r + a)
  })(e, -f(t))
}
function w(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var r in (t = t || {})) t.hasOwnProperty(r) && (e[r] = t[r])
  return e
}
function m(e, t) {
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
function y(e, t) {
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
var v = {
    p: y,
    P: function(e, t) {
      var r,
        a = e.match(/(P+)(p+)?/),
        n = a[1],
        o = a[2]
      if (!o) return m(e, t)
      switch (n) {
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
      return r.replace('{{date}}', m(n, t)).replace('{{time}}', y(o, t))
    },
  },
  b = 6e4
function p(e) {
  var t = new Date(e.getTime()),
    r = t.getTimezoneOffset()
  t.setSeconds(0, 0)
  var a = t.getTime() % b
  return r * b + a
}
var T = ['D', 'DD'],
  D = ['YY', 'YYYY']
function k(e) {
  return -1 !== T.indexOf(e)
}
function x(e) {
  return -1 !== D.indexOf(e)
}
function C(e) {
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
function M(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    a = r.locale,
    n = a && a.options && a.options.weekStartsOn,
    o = null == n ? 0 : f(n),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = h(e),
    l = s.getUTCDay(),
    c = (l < i ? 7 : 0) + l - i
  return s.setUTCDate(s.getUTCDate() - c), s.setUTCHours(0, 0, 0, 0), s
}
function U(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = h(e, t),
    a = r.getUTCFullYear(),
    n = t || {},
    o = n.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : f(i),
    l = null == n.firstWeekContainsDate ? s : f(n.firstWeekContainsDate)
  if (!(l >= 1 && l <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(a + 1, 0, l), c.setUTCHours(0, 0, 0, 0)
  var d = M(c, t),
    u = new Date(0)
  u.setUTCFullYear(a, 0, l), u.setUTCHours(0, 0, 0, 0)
  var p = M(u, t)
  return r.getTime() >= d.getTime() ? a + 1 : r.getTime() >= p.getTime() ? a : a - 1
}
function E(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var a = r || {},
    n = a.locale,
    o = n && n.options && n.options.weekStartsOn,
    i = null == o ? 0 : f(o),
    s = null == a.weekStartsOn ? i : f(a.weekStartsOn)
  if (!(s >= 0 && s <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var l = h(e),
    c = f(t),
    d = (((c % 7) + 7) % 7 < s ? 7 : 0) + c - l.getUTCDay()
  return l.setUTCDate(l.getUTCDate() + d), l
}
function q(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = h(e),
    r = t.getUTCDay(),
    a = (r < 1 ? 7 : 0) + r - 1
  return t.setUTCDate(t.getUTCDate() - a), t.setUTCHours(0, 0, 0, 0), t
}
function S(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = h(e),
    r = t.getUTCFullYear(),
    a = new Date(0)
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0)
  var n = q(a),
    o = new Date(0)
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = q(o)
  return t.getTime() >= n.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1
}
var Y = 6048e5
function P(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = h(e),
    r =
      q(t).getTime() -
      (function(e) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var t = S(e),
          r = new Date(0)
        return r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0), q(r)
      })(t).getTime()
  return Math.round(r / Y) + 1
}
var H = 6048e5
function O(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = h(e),
    a =
      M(r, t).getTime() -
      (function(e, t) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var r = t || {},
          a = r.locale,
          n = a && a.options && a.options.firstWeekContainsDate,
          o = null == n ? 1 : f(n),
          i = null == r.firstWeekContainsDate ? o : f(r.firstWeekContainsDate),
          s = U(e, t),
          l = new Date(0)
        return l.setUTCFullYear(s, 0, i), l.setUTCHours(0, 0, 0, 0), M(l, t)
      })(r, t).getTime()
  return Math.round(a / H) + 1
}
var B = 36e5,
  N = 6e4,
  L = 1e3,
  W = {
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
  F = /^([+-])(\d{2})(\d{2})?|Z/,
  Q = /^([+-])(\d{2})(\d{2})|Z/,
  R = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  I = /^([+-])(\d{2}):(\d{2})|Z/,
  X = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function G(e, t, r) {
  var a = t.match(e)
  if (!a) return null
  var n = parseInt(a[0], 10)
  return {value: r ? r(n) : n, rest: t.slice(a[0].length)}
}
function A(e, t) {
  var r = t.match(e)
  if (!r) return null
  if ('Z' === r[0]) return {value: 0, rest: t.slice(1)}
  var a = '+' === r[1] ? 1 : -1,
    n = r[2] ? parseInt(r[2], 10) : 0,
    o = r[3] ? parseInt(r[3], 10) : 0,
    i = r[5] ? parseInt(r[5], 10) : 0
  return {value: a * (n * B + o * N + i * L), rest: t.slice(r[0].length)}
}
function z(e, t) {
  return G(W.anyDigitsSigned, e, t)
}
function j(e, t, r) {
  switch (e) {
    case 1:
      return G(W.singleDigit, t, r)
    case 2:
      return G(W.twoDigits, t, r)
    case 3:
      return G(W.threeDigits, t, r)
    case 4:
      return G(W.fourDigits, t, r)
    default:
      return G(new RegExp('^\\d{1,' + e + '}'), t, r)
  }
}
function K(e, t, r) {
  switch (e) {
    case 1:
      return G(W.singleDigitSigned, t, r)
    case 2:
      return G(W.twoDigitsSigned, t, r)
    case 3:
      return G(W.threeDigitsSigned, t, r)
    case 4:
      return G(W.fourDigitsSigned, t, r)
    default:
      return G(new RegExp('^-?\\d{1,' + e + '}'), t, r)
  }
}
function J(e) {
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
function Z(e, t) {
  var r,
    a = t > 0,
    n = a ? t : 1 - t
  if (n <= 50) r = e || 100
  else {
    var o = n + 50
    r = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0)
  }
  return a ? r : 1 - r
}
var _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  $ = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function V(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var tt = {
    G: {
      priority: 140,
      parse: function(e, t, r, a) {
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
      set: function(e, t, r, a) {
        return (t.era = r), e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function(e, t, r, a) {
        var n = function(e) {
          return {year: e, isTwoDigitYear: 'yy' === t}
        }
        switch (t) {
          case 'y':
            return j(4, e, n)
          case 'yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: n})
          default:
            return j(t.length, e, n)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, a) {
        var n = e.getUTCFullYear()
        if (r.isTwoDigitYear) {
          var o = Z(r.year, n)
          return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function(e, t, r, a) {
        var n = function(e) {
          return {year: e, isTwoDigitYear: 'YY' === t}
        }
        switch (t) {
          case 'Y':
            return j(4, e, n)
          case 'Yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: n})
          default:
            return j(t.length, e, n)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, a) {
        var n = U(e, a)
        if (r.isTwoDigitYear) {
          var o = Z(r.year, n)
          return e.setUTCFullYear(o, 0, a.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), M(e, a)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, a.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), M(e, a)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(e, t, r, a) {
        return K('R' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, a) {
        var n = new Date(0)
        return n.setUTCFullYear(r, 0, 4), n.setUTCHours(0, 0, 0, 0), q(n)
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
      parse: function(e, t, r, a) {
        return K('u' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, a) {
        return e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'Q':
          case 'QQ':
            return j(t.length, e)
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
      set: function(e, t, r, a) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'q':
          case 'qq':
            return j(t.length, e)
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
      set: function(e, t, r, a) {
        return e.setUTCMonth(3 * (r - 1), 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function(e, t, r, a) {
        var n = function(e) {
          return e - 1
        }
        switch (t) {
          case 'M':
            return G(W.month, e, n)
          case 'MM':
            return j(2, e, n)
          case 'Mo':
            return r.ordinalNumber(e, {unit: 'month', valueCallback: n})
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
      set: function(e, t, r, a) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function(e, t, r, a) {
        var n = function(e) {
          return e - 1
        }
        switch (t) {
          case 'L':
            return G(W.month, e, n)
          case 'LL':
            return j(2, e, n)
          case 'Lo':
            return r.ordinalNumber(e, {unit: 'month', valueCallback: n})
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
      set: function(e, t, r, a) {
        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'w':
            return G(W.week, e)
          case 'wo':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, a) {
        return M(
          (function(e, t, r) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var a = h(e),
              n = f(t),
              o = O(a, r) - n
            return a.setUTCDate(a.getUTCDate() - 7 * o), a
          })(e, r, a),
          a,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'I':
            return G(W.week, e)
          case 'Io':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, a) {
        return q(
          (function(e, t) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var r = h(e),
              a = f(t),
              n = P(r) - a
            return r.setUTCDate(r.getUTCDate() - 7 * n), r
          })(e, r, a),
          a,
        )
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'd':
            return G(W.date, e)
          case 'do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        var a = V(e.getUTCFullYear()),
          n = e.getUTCMonth()
        return a ? t >= 1 && t <= $[n] : t >= 1 && t <= _[n]
      },
      set: function(e, t, r, a) {
        return e.setUTCDate(r), e.setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'D':
          case 'DD':
            return G(W.dayOfYear, e)
          case 'Do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return V(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
      },
      set: function(e, t, r, a) {
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
      parse: function(e, t, r, a) {
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
      set: function(e, t, r, a) {
        return (e = E(e, r, a)).setUTCHours(0, 0, 0, 0), e
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function(e, t, r, a) {
        var n = function(e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + a.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'e':
          case 'ee':
            return j(t.length, e, n)
          case 'eo':
            return r.ordinalNumber(e, {unit: 'day', valueCallback: n})
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
      set: function(e, t, r, a) {
        return (e = E(e, r, a)).setUTCHours(0, 0, 0, 0), e
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
      parse: function(e, t, r, a) {
        var n = function(e) {
          var t = 7 * Math.floor((e - 1) / 7)
          return ((e + a.weekStartsOn + 6) % 7) + t
        }
        switch (t) {
          case 'c':
          case 'cc':
            return j(t.length, e, n)
          case 'co':
            return r.ordinalNumber(e, {unit: 'day', valueCallback: n})
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
      set: function(e, t, r, a) {
        return (e = E(e, r, a)).setUTCHours(0, 0, 0, 0), e
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
      parse: function(e, t, r, a) {
        var n = function(e) {
          return 0 === e ? 7 : e
        }
        switch (t) {
          case 'i':
          case 'ii':
            return j(t.length, e)
          case 'io':
            return r.ordinalNumber(e, {unit: 'day'})
          case 'iii':
            return (
              r.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'short', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: n})
            )
          case 'iiiii':
            return r.day(e, {width: 'narrow', context: 'formatting', valueCallback: n})
          case 'iiiiii':
            return (
              r.day(e, {width: 'short', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: n})
            )
          case 'iiii':
          default:
            return (
              r.day(e, {width: 'wide', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'abbreviated', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'short', context: 'formatting', valueCallback: n}) ||
              r.day(e, {width: 'narrow', context: 'formatting', valueCallback: n})
            )
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 7
      },
      set: function(e, t, r, a) {
        return (
          (e = (function(e, t) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var r = f(t)
            r % 7 == 0 && (r -= 7)
            var a = h(e),
              n = (((r % 7) + 7) % 7 < 1 ? 7 : 0) + r - a.getUTCDay()
            return a.setUTCDate(a.getUTCDate() + n), a
          })(e, r, a)).setUTCHours(0, 0, 0, 0),
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
      parse: function(e, t, r, a) {
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
      set: function(e, t, r, a) {
        return e.setUTCHours(J(r), 0, 0, 0), e
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function(e, t, r, a) {
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
      set: function(e, t, r, a) {
        return e.setUTCHours(J(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function(e, t, r, a) {
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
      set: function(e, t, r, a) {
        return e.setUTCHours(J(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'h':
            return G(W.hour12h, e)
          case 'ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 12
      },
      set: function(e, t, r, a) {
        var n = e.getUTCHours() >= 12
        return (
          n && r < 12
            ? e.setUTCHours(r + 12, 0, 0, 0)
            : n || 12 !== r
            ? e.setUTCHours(r, 0, 0, 0)
            : e.setUTCHours(0, 0, 0, 0),
          e
        )
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
    },
    H: {
      priority: 70,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'H':
            return G(W.hour23h, e)
          case 'Ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 23
      },
      set: function(e, t, r, a) {
        return e.setUTCHours(r, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'K':
            return G(W.hour11h, e)
          case 'Ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 11
      },
      set: function(e, t, r, a) {
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
      parse: function(e, t, r, a) {
        switch (t) {
          case 'k':
            return G(W.hour24h, e)
          case 'ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 24
      },
      set: function(e, t, r, a) {
        var n = r <= 24 ? r % 24 : r
        return e.setUTCHours(n, 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'm':
            return G(W.minute, e)
          case 'mo':
            return r.ordinalNumber(e, {unit: 'minute'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function(e, t, r, a) {
        return e.setUTCMinutes(r, 0, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function(e, t, r, a) {
        switch (t) {
          case 's':
            return G(W.second, e)
          case 'so':
            return r.ordinalNumber(e, {unit: 'second'})
          default:
            return j(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 0 && t <= 59
      },
      set: function(e, t, r, a) {
        return e.setUTCSeconds(r, 0), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function(e, t, r, a) {
        return j(t.length, e, function(e) {
          return Math.floor(e * Math.pow(10, 3 - t.length))
        })
      },
      set: function(e, t, r, a) {
        return e.setUTCMilliseconds(r), e
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'X':
            return A(F, e)
          case 'XX':
            return A(Q, e)
          case 'XXXX':
            return A(R, e)
          case 'XXXXX':
            return A(X, e)
          case 'XXX':
          default:
            return A(I, e)
        }
      },
      set: function(e, t, r, a) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function(e, t, r, a) {
        switch (t) {
          case 'x':
            return A(F, e)
          case 'xx':
            return A(Q, e)
          case 'xxxx':
            return A(R, e)
          case 'xxxxx':
            return A(X, e)
          case 'xxx':
          default:
            return A(I, e)
        }
      },
      set: function(e, t, r, a) {
        return t.timestampIsSet ? e : new Date(e.getTime() - r)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function(e, t, r, a) {
        return z(e)
      },
      set: function(e, t, r, a) {
        return [new Date(1e3 * r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(e, t, r, a) {
        return z(e)
      },
      set: function(e, t, r, a) {
        return [new Date(r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  et = 10,
  nt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  rt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  at = /^'([^]*?)'?$/,
  it = /''/g,
  ot = /\S/,
  ut = /[a-zA-Z]/
function st(e, t, r, a) {
  if (arguments.length < 3)
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present')
  var n = String(e),
    o = String(t),
    i = a || {},
    s = i.locale || l
  if (!s.match) throw new RangeError('locale must contain match property')
  var c = s.options && s.options.firstWeekContainsDate,
    d = null == c ? 1 : f(c),
    u = null == i.firstWeekContainsDate ? d : f(i.firstWeekContainsDate)
  if (!(u >= 1 && u <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var m = s.options && s.options.weekStartsOn,
    y = null == m ? 0 : f(m),
    b = null == i.weekStartsOn ? y : f(i.weekStartsOn)
  if (!(b >= 0 && b <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if ('' === o) return '' === n ? h(r) : new Date(NaN)
  var D,
    T = {firstWeekContainsDate: u, weekStartsOn: b, locale: s},
    _ = [{priority: et, set: ct, index: 0}],
    S = o
      .match(rt)
      .map(function(e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, v[t])(e, s.formatLong, T) : e
      })
      .join('')
      .match(nt),
    R = []
  for (D = 0; D < S.length; D++) {
    var O = S[D]
    !i.useAdditionalWeekYearTokens && x(O) && C(O), !i.useAdditionalDayOfYearTokens && k(O) && C(O)
    var B = O[0],
      W = tt[B]
    if (W) {
      var M = W.incompatibleTokens
      if (Array.isArray(M)) {
        for (var j = void 0, L = 0; L < R.length; L++) {
          var P = R[L].token
          if (-1 !== M.indexOf(P) || P === B) {
            j = R[L]
            break
          }
        }
        if (j)
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(j.fullToken, '` and `')
              .concat(O, '` at the same time'),
          )
      } else if ('*' === W.incompatibleTokens && R.length)
        throw new RangeError(
          "The format string mustn't contain `".concat(O, '` and any other token at the same time'),
        )
      R.push({token: B, fullToken: O})
      var E = W.parse(n, O, s.match, T)
      if (!E) return new Date(NaN)
      _.push({
        priority: W.priority,
        set: W.set,
        validate: W.validate,
        value: E.value,
        index: _.length,
      }),
        (n = E.rest)
    } else {
      if (B.match(ut))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + B + '`',
        )
      if (
        ("''" === O ? (O = "'") : "'" === B && (O = O.match(at)[1].replace(it, "'")),
        0 !== n.indexOf(O))
      )
        return new Date(NaN)
      n = n.slice(O.length)
    }
  }
  if (n.length > 0 && ot.test(n)) return new Date(NaN)
  var F = _.map(function(e) {
      return e.priority
    })
      .sort(function(e, t) {
        return t - e
      })
      .filter(function(e, t, r) {
        return r.indexOf(e) === t
      })
      .map(function(e) {
        return _.filter(function(t) {
          return t.priority === e
        }).reverse()
      })
      .map(function(e) {
        return e[0]
      }),
    H = h(r)
  if (isNaN(H)) return new Date(NaN)
  var $ = g(H, p(H)),
    I = {}
  for (D = 0; D < F.length; D++) {
    var A = F[D]
    if (A.validate && !A.validate($, A.value, T)) return new Date(NaN)
    var z = A.set($, I, A.value, T)
    z[0] ? (($ = z[0]), w(I, z[1])) : ($ = z)
  }
  return $
}
function ct(e, t) {
  if (t.timestampIsSet) return e
  var r = new Date(0)
  return (
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    r
  )
}
function dt(e, t) {
  for (var r = e < 0 ? '-' : '', a = Math.abs(e).toString(); a.length < t; ) a = '0' + a
  return r + a
}
var lt = function(e, t) {
    var r = e.getUTCFullYear(),
      a = r > 0 ? r : 1 - r
    return dt('yy' === t ? a % 100 : a, t.length)
  },
  ft = function(e, t) {
    var r = e.getUTCMonth()
    return 'M' === t ? String(r + 1) : dt(r + 1, 2)
  },
  ht = function(e, t) {
    return dt(e.getUTCDate(), t.length)
  },
  gt = function(e, t) {
    return dt(e.getUTCHours() % 12 || 12, t.length)
  },
  wt = function(e, t) {
    return dt(e.getUTCHours(), t.length)
  },
  mt = function(e, t) {
    return dt(e.getUTCMinutes(), t.length)
  },
  yt = function(e, t) {
    return dt(e.getUTCSeconds(), t.length)
  },
  vt = function(e, t) {
    var r = t.length,
      a = e.getUTCMilliseconds()
    return dt(Math.floor(a * Math.pow(10, r - 3)), t.length)
  },
  bt = 864e5,
  pt = 'midnight',
  Tt = 'noon',
  Dt = 'morning',
  kt = 'afternoon',
  xt = 'evening',
  Ct = 'night',
  Mt = {
    G: function(e, t, r) {
      var a = e.getUTCFullYear() > 0 ? 1 : 0
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return r.era(a, {width: 'abbreviated'})
        case 'GGGGG':
          return r.era(a, {width: 'narrow'})
        case 'GGGG':
        default:
          return r.era(a, {width: 'wide'})
      }
    },
    y: function(e, t, r) {
      if ('yo' === t) {
        var a = e.getUTCFullYear(),
          n = a > 0 ? a : 1 - a
        return r.ordinalNumber(n, {unit: 'year'})
      }
      return lt(e, t)
    },
    Y: function(e, t, r, a) {
      var n = U(e, a),
        o = n > 0 ? n : 1 - n
      return 'YY' === t
        ? dt(o % 100, 2)
        : 'Yo' === t
        ? r.ordinalNumber(o, {unit: 'year'})
        : dt(o, t.length)
    },
    R: function(e, t) {
      return dt(S(e), t.length)
    },
    u: function(e, t) {
      return dt(e.getUTCFullYear(), t.length)
    },
    Q: function(e, t, r) {
      var a = Math.ceil((e.getUTCMonth() + 1) / 3)
      switch (t) {
        case 'Q':
          return String(a)
        case 'QQ':
          return dt(a, 2)
        case 'Qo':
          return r.ordinalNumber(a, {unit: 'quarter'})
        case 'QQQ':
          return r.quarter(a, {width: 'abbreviated', context: 'formatting'})
        case 'QQQQQ':
          return r.quarter(a, {width: 'narrow', context: 'formatting'})
        case 'QQQQ':
        default:
          return r.quarter(a, {width: 'wide', context: 'formatting'})
      }
    },
    q: function(e, t, r) {
      var a = Math.ceil((e.getUTCMonth() + 1) / 3)
      switch (t) {
        case 'q':
          return String(a)
        case 'qq':
          return dt(a, 2)
        case 'qo':
          return r.ordinalNumber(a, {unit: 'quarter'})
        case 'qqq':
          return r.quarter(a, {width: 'abbreviated', context: 'standalone'})
        case 'qqqqq':
          return r.quarter(a, {width: 'narrow', context: 'standalone'})
        case 'qqqq':
        default:
          return r.quarter(a, {width: 'wide', context: 'standalone'})
      }
    },
    M: function(e, t, r) {
      var a = e.getUTCMonth()
      switch (t) {
        case 'M':
        case 'MM':
          return ft(e, t)
        case 'Mo':
          return r.ordinalNumber(a + 1, {unit: 'month'})
        case 'MMM':
          return r.month(a, {width: 'abbreviated', context: 'formatting'})
        case 'MMMMM':
          return r.month(a, {width: 'narrow', context: 'formatting'})
        case 'MMMM':
        default:
          return r.month(a, {width: 'wide', context: 'formatting'})
      }
    },
    L: function(e, t, r) {
      var a = e.getUTCMonth()
      switch (t) {
        case 'L':
          return String(a + 1)
        case 'LL':
          return dt(a + 1, 2)
        case 'Lo':
          return r.ordinalNumber(a + 1, {unit: 'month'})
        case 'LLL':
          return r.month(a, {width: 'abbreviated', context: 'standalone'})
        case 'LLLLL':
          return r.month(a, {width: 'narrow', context: 'standalone'})
        case 'LLLL':
        default:
          return r.month(a, {width: 'wide', context: 'standalone'})
      }
    },
    w: function(e, t, r, a) {
      var n = O(e, a)
      return 'wo' === t ? r.ordinalNumber(n, {unit: 'week'}) : dt(n, t.length)
    },
    I: function(e, t, r) {
      var a = P(e)
      return 'Io' === t ? r.ordinalNumber(a, {unit: 'week'}) : dt(a, t.length)
    },
    d: function(e, t, r) {
      return 'do' === t ? r.ordinalNumber(e.getUTCDate(), {unit: 'date'}) : ht(e, t)
    },
    D: function(e, t, r) {
      var a = (function(e) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var t = h(e),
          r = t.getTime()
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        var a = r - t.getTime()
        return Math.floor(a / bt) + 1
      })(e)
      return 'Do' === t ? r.ordinalNumber(a, {unit: 'dayOfYear'}) : dt(a, t.length)
    },
    E: function(e, t, r) {
      var a = e.getUTCDay()
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return r.day(a, {width: 'abbreviated', context: 'formatting'})
        case 'EEEEE':
          return r.day(a, {width: 'narrow', context: 'formatting'})
        case 'EEEEEE':
          return r.day(a, {width: 'short', context: 'formatting'})
        case 'EEEE':
        default:
          return r.day(a, {width: 'wide', context: 'formatting'})
      }
    },
    e: function(e, t, r, a) {
      var n = e.getUTCDay(),
        o = (n - a.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case 'e':
          return String(o)
        case 'ee':
          return dt(o, 2)
        case 'eo':
          return r.ordinalNumber(o, {unit: 'day'})
        case 'eee':
          return r.day(n, {width: 'abbreviated', context: 'formatting'})
        case 'eeeee':
          return r.day(n, {width: 'narrow', context: 'formatting'})
        case 'eeeeee':
          return r.day(n, {width: 'short', context: 'formatting'})
        case 'eeee':
        default:
          return r.day(n, {width: 'wide', context: 'formatting'})
      }
    },
    c: function(e, t, r, a) {
      var n = e.getUTCDay(),
        o = (n - a.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case 'c':
          return String(o)
        case 'cc':
          return dt(o, t.length)
        case 'co':
          return r.ordinalNumber(o, {unit: 'day'})
        case 'ccc':
          return r.day(n, {width: 'abbreviated', context: 'standalone'})
        case 'ccccc':
          return r.day(n, {width: 'narrow', context: 'standalone'})
        case 'cccccc':
          return r.day(n, {width: 'short', context: 'standalone'})
        case 'cccc':
        default:
          return r.day(n, {width: 'wide', context: 'standalone'})
      }
    },
    i: function(e, t, r) {
      var a = e.getUTCDay(),
        n = 0 === a ? 7 : a
      switch (t) {
        case 'i':
          return String(n)
        case 'ii':
          return dt(n, t.length)
        case 'io':
          return r.ordinalNumber(n, {unit: 'day'})
        case 'iii':
          return r.day(a, {width: 'abbreviated', context: 'formatting'})
        case 'iiiii':
          return r.day(a, {width: 'narrow', context: 'formatting'})
        case 'iiiiii':
          return r.day(a, {width: 'short', context: 'formatting'})
        case 'iiii':
        default:
          return r.day(a, {width: 'wide', context: 'formatting'})
      }
    },
    a: function(e, t, r) {
      var a = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
      switch (t) {
        case 'a':
        case 'aa':
        case 'aaa':
          return r.dayPeriod(a, {width: 'abbreviated', context: 'formatting'})
        case 'aaaaa':
          return r.dayPeriod(a, {width: 'narrow', context: 'formatting'})
        case 'aaaa':
        default:
          return r.dayPeriod(a, {width: 'wide', context: 'formatting'})
      }
    },
    b: function(e, t, r) {
      var a,
        n = e.getUTCHours()
      switch (((a = 12 === n ? Tt : 0 === n ? pt : n / 12 >= 1 ? 'pm' : 'am'), t)) {
        case 'b':
        case 'bb':
        case 'bbb':
          return r.dayPeriod(a, {width: 'abbreviated', context: 'formatting'})
        case 'bbbbb':
          return r.dayPeriod(a, {width: 'narrow', context: 'formatting'})
        case 'bbbb':
        default:
          return r.dayPeriod(a, {width: 'wide', context: 'formatting'})
      }
    },
    B: function(e, t, r) {
      var a,
        n = e.getUTCHours()
      switch (((a = n >= 17 ? xt : n >= 12 ? kt : n >= 4 ? Dt : Ct), t)) {
        case 'B':
        case 'BB':
        case 'BBB':
          return r.dayPeriod(a, {width: 'abbreviated', context: 'formatting'})
        case 'BBBBB':
          return r.dayPeriod(a, {width: 'narrow', context: 'formatting'})
        case 'BBBB':
        default:
          return r.dayPeriod(a, {width: 'wide', context: 'formatting'})
      }
    },
    h: function(e, t, r) {
      if ('ho' === t) {
        var a = e.getUTCHours() % 12
        return 0 === a && (a = 12), r.ordinalNumber(a, {unit: 'hour'})
      }
      return gt(e, t)
    },
    H: function(e, t, r) {
      return 'Ho' === t ? r.ordinalNumber(e.getUTCHours(), {unit: 'hour'}) : wt(e, t)
    },
    K: function(e, t, r) {
      var a = e.getUTCHours() % 12
      return 'Ko' === t ? r.ordinalNumber(a, {unit: 'hour'}) : dt(a, t.length)
    },
    k: function(e, t, r) {
      var a = e.getUTCHours()
      return 0 === a && (a = 24), 'ko' === t ? r.ordinalNumber(a, {unit: 'hour'}) : dt(a, t.length)
    },
    m: function(e, t, r) {
      return 'mo' === t ? r.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'}) : mt(e, t)
    },
    s: function(e, t, r) {
      return 'so' === t ? r.ordinalNumber(e.getUTCSeconds(), {unit: 'second'}) : yt(e, t)
    },
    S: function(e, t) {
      return vt(e, t)
    },
    X: function(e, t, r, a) {
      var n = (a._originalDate || e).getTimezoneOffset()
      if (0 === n) return 'Z'
      switch (t) {
        case 'X':
          return Et(n)
        case 'XXXX':
        case 'XX':
          return qt(n)
        case 'XXXXX':
        case 'XXX':
        default:
          return qt(n, ':')
      }
    },
    x: function(e, t, r, a) {
      var n = (a._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'x':
          return Et(n)
        case 'xxxx':
        case 'xx':
          return qt(n)
        case 'xxxxx':
        case 'xxx':
        default:
          return qt(n, ':')
      }
    },
    O: function(e, t, r, a) {
      var n = (a._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Ut(n, ':')
        case 'OOOO':
        default:
          return 'GMT' + qt(n, ':')
      }
    },
    z: function(e, t, r, a) {
      var n = (a._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Ut(n, ':')
        case 'zzzz':
        default:
          return 'GMT' + qt(n, ':')
      }
    },
    t: function(e, t, r, a) {
      var n = a._originalDate || e
      return dt(Math.floor(n.getTime() / 1e3), t.length)
    },
    T: function(e, t, r, a) {
      return dt((a._originalDate || e).getTime(), t.length)
    },
  }
function Ut(e, t) {
  var r = e > 0 ? '-' : '+',
    a = Math.abs(e),
    n = Math.floor(a / 60),
    o = a % 60
  if (0 === o) return r + String(n)
  var i = t || ''
  return r + String(n) + i + dt(o, 2)
}
function Et(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + dt(Math.abs(e) / 60, 2) : qt(e, t)
}
function qt(e, t) {
  var r = t || '',
    a = e > 0 ? '-' : '+',
    n = Math.abs(e)
  return a + dt(Math.floor(n / 60), 2) + r + dt(n % 60, 2)
}
var St = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Yt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Pt = /^'([^]*?)'?$/,
  Ht = /''/g,
  Ot = /[a-zA-Z]/
function Bt(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var a = String(t),
    n = r || {},
    o = n.locale || l,
    i = o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : f(i),
    c = null == n.firstWeekContainsDate ? s : f(n.firstWeekContainsDate)
  if (!(c >= 1 && c <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var d = o.options && o.options.weekStartsOn,
    u = null == d ? 0 : f(d),
    m = null == n.weekStartsOn ? u : f(n.weekStartsOn)
  if (!(m >= 0 && m <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!o.localize) throw new RangeError('locale must contain localize property')
  if (!o.formatLong) throw new RangeError('locale must contain formatLong property')
  var y = h(e)
  if (
    !(function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var t = h(e)
      return !isNaN(t)
    })(y)
  )
    throw new RangeError('Invalid time value')
  var b = g(y, p(y)),
    w = {firstWeekContainsDate: c, weekStartsOn: m, locale: o, _originalDate: y}
  return a
    .match(Yt)
    .map(function(e) {
      var t = e[0]
      return 'p' === t || 'P' === t ? (0, v[t])(e, o.formatLong, w) : e
    })
    .join('')
    .match(St)
    .map(function(e) {
      if ("''" === e) return "'"
      var t = e[0]
      if ("'" === t) return e.match(Pt)[1].replace(Ht, "'")
      var r = Mt[t]
      if (r)
        return (
          !n.useAdditionalWeekYearTokens && x(e) && C(e),
          !n.useAdditionalDayOfYearTokens && k(e) && C(e),
          r(b, e, o.localize, w)
        )
      if (t.match(Ot))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + t + '`',
        )
      return e
    })
    .join('')
}
function Nt(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = h(e),
    a = f(t)
  return r.setDate(r.getDate() + a), r
}
function Lt(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = e || {},
    a = h(r.start),
    n = h(r.end).getTime()
  if (!(a.getTime() <= n)) throw new RangeError('Invalid interval')
  var o = [],
    i = a
  i.setHours(0, 0, 0, 0)
  var s = t && 'step' in t ? Number(t.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; i.getTime() <= n; ) o.push(h(i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0)
  return o
}
function Wt(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    a = r.locale,
    n = a && a.options && a.options.weekStartsOn,
    o = null == n ? 0 : f(n),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = h(e),
    l = s.getDay(),
    c = 6 + (l < i ? -7 : 0) - (l - i)
  return s.setDate(s.getDate() + c), s.setHours(23, 59, 59, 999), s
}
function Ft(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = h(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function Qt(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    a = r.locale,
    n = a && a.options && a.options.weekStartsOn,
    o = null == n ? 0 : f(n),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = h(e),
    l = s.getDay(),
    c = (l < i ? 7 : 0) + l - i
  return s.setDate(s.getDate() - c), s.setHours(0, 0, 0, 0), s
}
function Rt(e) {
  var t = void 0 === e ? {} : e,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    n = t.weekdayLabelFormat,
    o =
      void 0 === n
        ? function(e) {
            return Bt(e, 'iiiiii')
          }
        : n,
    i = new Date()
  return Lt({start: Nt(Qt(i), a), end: Nt(Wt(i), a)}).reduce(function(e, t) {
    return e.push(o(t)), e
  }, [])
}
function It(e) {
  var t = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    n = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    i =
      void 0 === o
        ? function(e) {
            return Bt(e, 'dd')
          }
        : o,
    s = new Date(t, r),
    l = Ft(s),
    c = (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(e).getDay()
    })(l),
    d = (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var t = h(e),
        r = t.getMonth()
      return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
    })(s)
  return (function() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
    var a = Array(e),
      n = 0
    for (t = 0; t < r; t++)
      for (var o = arguments[t], i = 0, s = o.length; i < s; i++, n++) a[n] = o[i]
    return a
  })(
    Array.from(Array(c >= n ? c - n : 6 - n + c + 1).keys()).fill(0),
    Lt({start: l, end: d}).map(function(e) {
      return {date: e, dayLabel: i(e)}
    }),
  )
}
var Xt = function(e) {
    return Bt(e, 'dd')
  },
  Gt = function(e) {
    return Bt(e, 'eeeeee')
  },
  At = function(e) {
    return Bt(e, 'MMMM yyyy')
  }
function zt(e) {
  var t = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    n = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    i = void 0 === o ? Xt : o,
    s = e.weekdayLabelFormat,
    l = void 0 === s ? Gt : s,
    c = e.monthLabelFormat,
    d = void 0 === c ? At : c
  return {
    days: React.useMemo(
      function() {
        return It({year: t, month: r, firstDayOfWeek: n, dayLabelFormat: i})
      },
      [t, r, n, i],
    ),
    weekdayLabels: React.useMemo(
      function() {
        return Rt({firstDayOfWeek: n, weekdayLabelFormat: l})
      },
      [n, l],
    ),
    monthLabel: d(new Date(t, r)),
  }
}
function jt(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = h(e),
    a = h(t)
  return r.getTime() < a.getTime()
}
function Kt(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = h(e),
    a = h(t)
  return r.getTime() > a.getTime()
}
function Jt(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = t || {},
    a = h(e).getTime(),
    n = h(r.start).getTime(),
    o = h(r.end).getTime()
  if (!(n <= o)) throw new RangeError('Invalid interval')
  return a >= n && a <= o
}
function Zt(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = h(e)
  return t.setHours(0, 0, 0, 0), t
}
function _t(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = Zt(e),
    a = Zt(t)
  return r.getTime() === a.getTime()
}
function $t(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = h(e),
    a = f(t),
    n = r.getMonth() + a,
    o = new Date(0)
  o.setFullYear(r.getFullYear(), n, 1), o.setHours(0, 0, 0, 0)
  var i = (function(e) {
    if (arguments.length < 1)
      throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
    var t = h(e),
      r = t.getFullYear(),
      a = t.getMonth(),
      n = new Date(0)
    return n.setFullYear(r, a + 1, 0), n.setHours(0, 0, 0, 0), n.getDate()
  })(o)
  return r.setMonth(n, Math.min(i, r.getDate())), r
}
function Vt(e, t, r) {
  return !(!t || !r) && Jt(e, {start: t, end: r})
}
function te(e, t, r) {
  return !!((t && _t(e, t)) || (r && _t(e, r)))
}
function ee(e) {
  var t = e.date,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    n = e.isDateBlockedFn,
    o = e.startDate,
    i = e.endDate,
    s = e.minBookingDays,
    l = void 0 === s ? 1 : s,
    c = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
    d = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a
  return !!(
    (c && jt(t, c)) ||
    (d && Kt(t, d)) ||
    (o && !i && l > 1 && Jt(t, {start: o, end: Nt(o, l - 2)})) ||
    (n && n(t))
  )
}
function ne(e) {
  var t = Ft(e)
  return {
    year: (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(e).getFullYear()
    })(t),
    month: (function(e) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(e).getMonth()
    })(t),
    date: t,
  }
}
function re() {
  return ne(Zt(Date.now()))
}
function ae(e, t) {
  var r = t ? ne(t) : re(),
    a = r.date,
    n = [r]
  return (
    e > 1 &&
      (n = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (a = $t(e[e.length - 1].date, 1)), e.concat([ne(a)])
      }, n)),
    n
  )
}
function ie(e, t, r) {
  var a = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (a = 0 === e.length ? $t(a, r) : $t(a, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([ne(a)]) : [ne(a)].concat(e)
    )
  }, [])
}
function oe(e, t, r) {
  return e && 'string' == typeof t ? Bt(e, t) : e && 'function' == typeof t ? t(e) : r
}
function ue(e) {
  var t = e.startDate,
    r = e.endDate,
    a = e.isDateBlocked,
    n = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    l = !i || !jt(t, Nt(i, -1)),
    c = !s || !Kt(Nt(t, n - 1), s)
  return (
    !(!t || 1 !== n || r || a(t)) ||
    ((t && n > 1 && !r && !o) || (t && n > 0 && o && l && c) || (t && n > 0 && o && !i && !s)
      ? Lt({start: t, end: Nt(t, n - 1)}).reduce(function(e, t) {
          return e ? !a(t) : e
        }, !0)
      : !(!t || !r || o) &&
        !jt(r, Nt(t, n - 1)) &&
        Lt({start: t, end: r}).reduce(function(e, t) {
          return e ? !a(t) : e
        }, !0))
  )
}
var se = 'startDate',
  ce = 'endDate'
function de(e) {
  var t = e.startDate,
    r = e.endDate,
    a = e.focusedInput,
    n = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.onDatesChange,
    s = e.exactMinBookingDays,
    l = void 0 !== s && s,
    c = e.minBookingDays,
    d = void 0 === c ? 1 : c,
    u = e.numberOfMonths,
    p = void 0 === u ? 2 : u,
    g = e.firstDayOfWeek,
    f = void 0 === g ? 1 : g,
    m = e.isDateBlocked,
    h =
      void 0 === m
        ? function() {
            return !1
          }
        : m,
    y = React.useState(function() {
      return ae(p, t)
    }),
    b = y[0],
    w = y[1],
    v = React.useState(null),
    D = v[0],
    k = v[1],
    x = React.useState(t),
    T = x[0],
    C = x[1],
    _ = React.useCallback(
      function(e) {
        C(e), (!T || (T && !_t(e, T))) && w(ae(p, e))
      },
      [C, w, p, T],
    ),
    S = React.useCallback(
      function(e) {
        return Vt(e, t, r)
      },
      [t, r],
    ),
    R = React.useCallback(
      function(e) {
        return te(e, t, r)
      },
      [t, r],
    ),
    O = React.useCallback(
      function(e) {
        return ee({
          date: e,
          minBookingDate: n,
          maxBookingDate: o,
          startDate: t,
          endDate: r,
          minBookingDays: d,
          isDateBlockedFn: h,
        })
      },
      [n, o, t, r, d, h],
    ),
    B = React.useCallback(
      function(e) {
        return !!T && _t(e, T)
      },
      [T],
    ),
    W = React.useCallback(
      function(e) {
        return (function(e) {
          var t = e.date,
            r = e.startDate,
            a = e.endDate,
            n = e.isDateBlocked,
            o = e.hoveredDate,
            i = e.minBookingDays
          return o && i > 1 && e.exactMinBookingDays && Jt(t, {start: o, end: Nt(o, i - 1)})
            ? Lt({start: o, end: Nt(o, i - 1)}).reduce(function(e, t) {
                return e ? !n(t) : e
              }, !0)
            : r && !a && o && Jt(t, {start: r, end: Nt(r, i - 1)}) && _t(r, o) && i > 1
            ? Lt({start: r, end: Nt(r, i - 1)}).reduce(function(e, t) {
                return e ? !n(t) : e
              }, !0)
            : !(!r || a || !o || jt(o, r) || !Jt(t, {start: r, end: o})) &&
              Lt({start: r, end: o}).reduce(function(e, t) {
                return e ? !n(t) : e
              }, !0)
        })({
          date: e,
          hoveredDate: D,
          startDate: t,
          endDate: r,
          minBookingDays: d,
          exactMinBookingDays: l,
          isDateBlocked: h,
        })
      },
      [D, t, r, d, l, h],
    )
  function M(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !T
    ) {
      var t = b[0]
      _(t.date), w(ae(p, t.date))
    }
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', M),
        function() {
          window.removeEventListener('keydown', M)
        }
      )
    }),
    {
      firstDayOfWeek: f,
      activeMonths: b,
      isDateSelected: S,
      isDateHovered: W,
      isFirstOrLastSelectedDate: R,
      isDateBlocked: O,
      numberOfMonths: p,
      isDateFocused: B,
      focusedDate: T,
      hoveredDate: D,
      onResetDates: function() {
        i({startDate: null, endDate: null, focusedInput: se})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var a = !O(e) || (t && _t(e, t)),
              i = !n || !jt(e, Nt(n, -1)),
              s = !o || !Kt(e, o),
              c = Nt(e, d - 1),
              u = !n || !jt(c, n),
              p = !o || !Kt(c, o),
              g = l && d > 1 && i && s && u && p,
              f = t && !r && !l && i && s,
              m = !(d > 1 && t) || Jt(e, {start: t, end: Nt(t, d - 2)}),
              h = t && _t(e, t) && m
            a && (g || f || h) ? k(e) : null !== D && k(null)
          }
        } else k(null)
      },
      onDateSelect: function(e) {
        ;(a === ce || a === se) &&
        d > 0 &&
        l &&
        ue({
          minBookingDays: d,
          exactMinBookingDays: l,
          minBookingDate: n,
          maxBookingDate: o,
          isDateBlocked: h,
          startDate: e,
          endDate: null,
        })
          ? i({startDate: e, endDate: Nt(e, d - 1), focusedInput: null})
          : ((a === ce && t && jt(e, t)) || (a === se && r && Kt(e, r))) &&
            !l &&
            ue({minBookingDays: d, isDateBlocked: h, startDate: e, endDate: null})
          ? i({endDate: null, startDate: e, focusedInput: ce})
          : a === se && !l && ue({minBookingDays: d, isDateBlocked: h, endDate: r, startDate: e})
          ? i({endDate: r, startDate: e, focusedInput: ce})
          : a === se && !l && ue({minBookingDays: d, isDateBlocked: h, endDate: null, startDate: e})
          ? i({endDate: null, startDate: e, focusedInput: ce})
          : a === ce &&
            t &&
            !jt(e, t) &&
            !l &&
            ue({minBookingDays: d, isDateBlocked: h, startDate: t, endDate: e}) &&
            i({startDate: t, endDate: e, focusedInput: null}),
          a === ce || (T && (!T || _t(e, T))) || w(ae(p, e))
      },
      onDateFocus: _,
      goToPreviousMonths: function() {
        w(ie(b, p, -1)), C(null)
      },
      goToNextMonths: function() {
        w(ie(b, p, 1)), C(null)
      },
      goToPreviousYear: function() {
        w(ie(b, p, -(12 - p + 1))), C(null)
      },
      goToNextYear: function() {
        w(ie(b, p, 12 - p + 1)), C(null)
      },
    }
  )
}
function le(e) {
  var t = e.date,
    r = e.focusedDate,
    a = e.isDateSelected,
    n = e.isDateFocused,
    o = e.isFirstOrLastSelectedDate,
    i = e.isDateHovered,
    s = e.isDateBlocked,
    l = e.onDateSelect,
    c = e.onDateFocus,
    d = e.onDateHover,
    u = e.dayRef,
    p = React.useCallback(
      function() {
        return l(t)
      },
      [t, l],
    ),
    g = React.useCallback(
      function() {
        return d(t)
      },
      [t, d],
    )
  React.useEffect(
    function() {
      u && u.current && n(t) && u.current.focus()
    },
    [u, t, n],
  )
  var f = s(t) && !i(t)
  return {
    tabIndex: null === r || n(t) ? 0 : -1,
    isSelected: a(t),
    isSelectedStartOrEnd: o(t),
    isWithinHoverRange: i(t),
    disabledDate: f,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? c(Nt(t, 1))
        : 'ArrowLeft' === e.key
        ? c(Nt(t, -1))
        : 'ArrowUp' === e.key
        ? c(Nt(t, -7))
        : 'ArrowDown' === e.key && c(Nt(t, 7))
    },
    onClick: f ? function() {} : p,
    onMouseEnter: g,
  }
}
var __assign = function() {
  return (__assign =
    Object.assign ||
    function(e) {
      for (var t, r = 1, a = arguments.length; r < a; r++)
        for (var n in (t = arguments[r]))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return e
    }).apply(this, arguments)
}
function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) : (e.raw = t), e
}
var getOwnPropertySymbols = Object.getOwnPropertySymbols,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  propIsEnumerable = Object.prototype.propertyIsEnumerable
function toObject(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function shouldUseNative() {
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
    var a = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        a[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
    )
  } catch (e) {
    return !1
  }
}
var objectAssign = shouldUseNative()
    ? Object.assign
    : function(e, t) {
        for (var r, a, n = toObject(e), o = 1; o < arguments.length; o++) {
          for (var i in (r = Object(arguments[o]))) hasOwnProperty.call(r, i) && (n[i] = r[i])
          if (getOwnPropertySymbols) {
            a = getOwnPropertySymbols(r)
            for (var s = 0; s < a.length; s++) propIsEnumerable.call(r, a[s]) && (n[a[s]] = r[a[s]])
          }
        }
        return n
      },
  merge = function(e, t) {
    var r = objectAssign({}, e, t)
    for (var a in e) {
      var n
      e[a] &&
        'object' == typeof t[a] &&
        objectAssign(r, (((n = {})[a] = objectAssign(e[a], t[a])), n))
    }
    return r
  },
  sort = function(e) {
    var t = {}
    return (
      Object.keys(e)
        .sort(function(e, t) {
          return e.localeCompare(t, void 0, {numeric: !0, sensitivity: 'base'})
        })
        .forEach(function(r) {
          t[r] = e[r]
        }),
      t
    )
  },
  defaults = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  createMediaQuery = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  getValue = function(e, t) {
    return get(t, e, e)
  },
  get = function(e, t, r, a, n) {
    for (t = t && t.split ? t.split('.') : [t], a = 0; a < t.length; a++) e = e ? e[t[a]] : n
    return e === n ? r : e
  },
  createParser = function e(t) {
    var r = {},
      a = function(e) {
        var a = {},
          n = !1,
          o = e.theme && e.theme.disableStyledSystemCache
        for (var i in e)
          if (t[i]) {
            var s = t[i],
              l = e[i],
              c = get(e.theme, s.scale, s.defaults)
            if ('object' != typeof l) objectAssign(a, s(l, c, e))
            else {
              if (
                ((r.breakpoints =
                  (!o && r.breakpoints) || get(e.theme, 'breakpoints', defaults.breakpoints)),
                Array.isArray(l))
              ) {
                ;(r.media = (!o && r.media) || [null].concat(r.breakpoints.map(createMediaQuery))),
                  (a = merge(a, parseResponsiveStyle(r.media, s, c, l, e)))
                continue
              }
              null !== l &&
                ((a = merge(a, parseResponsiveObject(r.breakpoints, s, c, l, e))), (n = !0))
            }
          }
        return n && (a = sort(a)), a
      }
    ;(a.config = t), (a.propNames = Object.keys(t)), (a.cache = r)
    var n = Object.keys(t).filter(function(e) {
      return 'config' !== e
    })
    return (
      n.length > 1 &&
        n.forEach(function(r) {
          var n
          a[r] = e((((n = {})[r] = t[r]), n))
        }),
      a
    )
  },
  parseResponsiveStyle = function(e, t, r, a, n) {
    var o = {}
    return (
      a.slice(0, e.length).forEach(function(a, i) {
        var s,
          l = e[i],
          c = t(a, r, n)
        l ? objectAssign(o, (((s = {})[l] = objectAssign({}, o[l], c)), s)) : objectAssign(o, c)
      }),
      o
    )
  },
  parseResponsiveObject = function(e, t, r, a, n) {
    var o = {}
    for (var i in a) {
      var s = e[i],
        l = t(a[i], r, n)
      if (s) {
        var c,
          d = createMediaQuery(s)
        objectAssign(o, (((c = {})[d] = objectAssign({}, o[d], l)), c))
      } else objectAssign(o, l)
    }
    return o
  },
  createStyleFunction = function(e) {
    var t = e.properties,
      r = e.property,
      a = e.scale,
      n = e.transform,
      o = void 0 === n ? getValue : n,
      i = e.defaultScale
    t = t || [r]
    var s = function(e, r, a) {
      var n = {},
        i = o(e, r, a)
      if (null !== i)
        return (
          t.forEach(function(e) {
            n[e] = i
          }),
          n
        )
    }
    return (s.scale = a), (s.defaults = i), s
  },
  system = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(r) {
        var a = e[r]
        t[r] =
          !0 !== a
            ? 'function' != typeof a
              ? createStyleFunction(a)
              : a
            : createStyleFunction({property: r, scale: r})
      }),
      createParser(t)
    )
  },
  compose = function() {
    for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a]
    r.forEach(function(t) {
      t && t.config && objectAssign(e, t.config)
    })
    var n = createParser(e)
    return n
  },
  isNumber = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getWidth = function(e, t) {
    return get(t, e, !isNumber(e) || e > 1 ? e : 100 * e + '%')
  },
  config = {
    width: {property: 'width', scale: 'sizes', transform: getWidth},
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
  },
  layout = system(config),
  config$1 = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
config$1.bg = config$1.backgroundColor
var _config,
  color = system(config$1),
  defaults$1 = {fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
  config$2 = {
    fontFamily: {property: 'fontFamily', scale: 'fonts'},
    fontSize: {property: 'fontSize', scale: 'fontSizes', defaultScale: defaults$1.fontSizes},
    fontWeight: {property: 'fontWeight', scale: 'fontWeights'},
    lineHeight: {property: 'lineHeight', scale: 'lineHeights'},
    letterSpacing: {property: 'letterSpacing', scale: 'letterSpacings'},
    textAlign: !0,
    fontStyle: !0,
  },
  typography = system(config$2),
  config$3 = {
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
  },
  flexbox = system(config$3),
  defaults$2 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  config$4 = {
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: defaults$2.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: defaults$2.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: defaults$2.space},
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridAutoRows: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  grid = system(config$4),
  config$5 =
    (((_config = {
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
    (_config.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
    (_config.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
    (_config.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
    (_config.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
    (_config.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
    (_config.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
    (_config.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
    (_config.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
    (_config.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
    (_config.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
    (_config.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
    (_config.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'}),
    _config),
  border = system(config$5),
  config$6 = {
    background: !0,
    backgroundImage: !0,
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
  }
;(config$6.bgImage = config$6.backgroundImage),
  (config$6.bgSize = config$6.backgroundSize),
  (config$6.bgPosition = config$6.backgroundPosition),
  (config$6.bgRepeat = config$6.backgroundRepeat)
var background = system(config$6),
  defaults$3 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  config$7 = {
    position: !0,
    zIndex: {property: 'zIndex', scale: 'zIndices'},
    top: {property: 'top', scale: 'space', defaultScale: defaults$3.space},
    right: {property: 'right', scale: 'space', defaultScale: defaults$3.space},
    bottom: {property: 'bottom', scale: 'space', defaultScale: defaults$3.space},
    left: {property: 'left', scale: 'space', defaultScale: defaults$3.space},
  },
  position = system(config$7),
  defaults$4 = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  isNumber$1 = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  getMargin = function(e, t) {
    if (!isNumber$1(e)) return get(t, e, e)
    var r = e < 0,
      a = Math.abs(e),
      n = get(t, a, a)
    return isNumber$1(n) ? n * (r ? -1 : 1) : r ? '-' + n : n
  },
  configs = {}
;(configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space,
  },
}),
  (configs.margin.m = configs.margin.margin),
  (configs.margin.mt = configs.margin.marginTop),
  (configs.margin.mr = configs.margin.marginRight),
  (configs.margin.mb = configs.margin.marginBottom),
  (configs.margin.ml = configs.margin.marginLeft),
  (configs.margin.mx = configs.margin.marginX),
  (configs.margin.my = configs.margin.marginY),
  (configs.padding = {
    padding: {property: 'padding', scale: 'space', defaultScale: defaults$4.space},
    paddingTop: {property: 'paddingTop', scale: 'space', defaultScale: defaults$4.space},
    paddingRight: {property: 'paddingRight', scale: 'space', defaultScale: defaults$4.space},
    paddingBottom: {property: 'paddingBottom', scale: 'space', defaultScale: defaults$4.space},
    paddingLeft: {property: 'paddingLeft', scale: 'space', defaultScale: defaults$4.space},
    paddingX: {
      properties: ['paddingLeft', 'paddingRight'],
      scale: 'space',
      defaultScale: defaults$4.space,
    },
    paddingY: {
      properties: ['paddingTop', 'paddingBottom'],
      scale: 'space',
      defaultScale: defaults$4.space,
    },
  }),
  (configs.padding.p = configs.padding.padding),
  (configs.padding.pt = configs.padding.paddingTop),
  (configs.padding.pr = configs.padding.paddingRight),
  (configs.padding.pb = configs.padding.paddingBottom),
  (configs.padding.pl = configs.padding.paddingLeft),
  (configs.padding.px = configs.padding.paddingX),
  (configs.padding.py = configs.padding.paddingY)
var _scales,
  margin = system(configs.margin),
  padding = system(configs.padding),
  space = compose(
    margin,
    padding,
  ),
  shadow = system({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function _extends() {
  return (_extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
      }
      return e
    }).apply(this, arguments)
}
var templateObject_1,
  templateObject_1$1,
  templateObject_1$2,
  get$1 = function(e, t, r, a, n) {
    for (t = t && t.split ? t.split('.') : [t], a = 0; a < t.length; a++) e = e ? e[t[a]] : n
    return e === n ? r : e
  },
  defaultBreakpoints = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  defaultTheme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  aliases = {
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
  multiples = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  scales =
    (((_scales = {
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
    (_scales.borderTopRightRadius = 'radii'),
    (_scales.borderBottomWidth = 'borderWidths'),
    (_scales.borderBottomColor = 'colors'),
    (_scales.borderBottomStyle = 'borderStyles'),
    (_scales.borderBottomLeftRadius = 'radii'),
    (_scales.borderBottomRightRadius = 'radii'),
    (_scales.borderLeftWidth = 'borderWidths'),
    (_scales.borderLeftColor = 'colors'),
    (_scales.borderLeftStyle = 'borderStyles'),
    (_scales.borderRightWidth = 'borderWidths'),
    (_scales.borderRightColor = 'colors'),
    (_scales.borderRightStyle = 'borderStyles'),
    (_scales.boxShadow = 'shadows'),
    (_scales.textShadow = 'shadows'),
    (_scales.zIndex = 'zIndices'),
    (_scales.width = 'sizes'),
    (_scales.minWidth = 'sizes'),
    (_scales.maxWidth = 'sizes'),
    (_scales.height = 'sizes'),
    (_scales.minHeight = 'sizes'),
    (_scales.maxHeight = 'sizes'),
    (_scales.flexBasis = 'sizes'),
    (_scales.size = 'sizes'),
    (_scales.fill = 'colors'),
    (_scales.stroke = 'colors'),
    _scales),
  positiveOrNegative = function(e, t) {
    if ('number' != typeof t || t >= 0) return get$1(e, t, t)
    var r = Math.abs(t),
      a = get$1(e, r, r)
    return 'string' == typeof a ? '-' + a : -1 * a
  },
  transforms = [
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
    return _extends({}, e, (((r = {})[t] = positiveOrNegative), r))
  }, {}),
  responsive = function(e) {
    return function(t) {
      var r = {},
        a = get$1(t, 'breakpoints', defaultBreakpoints),
        n = [null].concat(
          a.map(function(e) {
            return '@media screen and (min-width: ' + e + ')'
          }),
        )
      for (var o in e) {
        var i = 'function' == typeof e[o] ? e[o](t) : e[o]
        if (null != i)
          if (Array.isArray(i))
            for (var s = 0; s < i.slice(0, n.length).length; s++) {
              var l = n[s]
              null != i[s] && (l ? ((r[l] = r[l] || {}), (r[l][o] = i[s])) : (r[o] = i[s]))
            }
          else r[o] = i
      }
      return r
    }
  },
  css = function e(t) {
    return function(r) {
      void 0 === r && (r = {})
      var a = _extends({}, defaultTheme, {}, r.theme || r),
        n = {},
        o = 'function' == typeof t ? t(a) : t,
        i = responsive(o)(a)
      for (var s in i) {
        var l = i[s],
          c = 'function' == typeof l ? l(a) : l
        if ('variant' !== s)
          if (c && 'object' == typeof c) n[s] = e(c)(a)
          else {
            var d = get$1(aliases, s, s),
              u = get$1(scales, d),
              p = get$1(a, u, get$1(a, d, {})),
              g = get$1(transforms, d, get$1)(p, c, c)
            if (multiples[d]) for (var f = multiples[d], m = 0; m < f.length; m++) n[f[m]] = g
            else n[d] = g
          }
        else n = _extends({}, n, {}, e(get$1(a, c))(a))
      }
      return n
    }
  },
  variant = function(e) {
    var t,
      r,
      a = e.scale,
      n = e.prop,
      o = void 0 === n ? 'variant' : n,
      i = e.variants,
      s = void 0 === i ? {} : i,
      l = e.key
    ;((r = Object.keys(s).length
      ? function(e, t, r) {
          return css(get(t, e, null))(r.theme)
        }
      : function(e, t) {
          return get(t, e, null)
        }).scale = a || l),
      (r.defaults = s)
    var c = (((t = {})[o] = r), t)
    return createParser(c)
  },
  buttonStyle = variant({key: 'buttons'}),
  textStyle = variant({key: 'textStyles', prop: 'textStyle'}),
  colorStyle = variant({key: 'colorStyles', prop: 'colors'}),
  width = layout.width,
  height = layout.height,
  minHeight = layout.minHeight,
  display = layout.display,
  overflow = layout.overflow,
  opacity = color.opacity,
  fontSize = typography.fontSize,
  fontFamily = typography.fontFamily,
  fontWeight = typography.fontWeight,
  lineHeight = typography.lineHeight,
  alignItems = flexbox.alignItems,
  justifyContent = flexbox.justifyContent,
  flexWrap = flexbox.flexWrap,
  flexDirection = flexbox.flexDirection,
  flex = flexbox.flex,
  gridGap = grid.gridGap,
  gridColumnGap = grid.gridColumnGap,
  gridRowGap = grid.gridRowGap,
  gridAutoFlow = grid.gridAutoFlow,
  gridAutoColumns = grid.gridAutoColumns,
  gridAutoRows = grid.gridAutoRows,
  gridTemplateColumns = grid.gridTemplateColumns,
  gridTemplateRows = grid.gridTemplateRows,
  gridTemplateAreas = grid.gridTemplateAreas,
  gridArea = grid.gridArea,
  borderRadius = border.borderRadius,
  zIndex = position.zIndex,
  top = position.top,
  right = position.right,
  bottom = position.bottom,
  left = position.left,
  style = function(e) {
    var t = e.prop,
      r = e.cssProperty,
      a = e.alias,
      n = e.key,
      o = e.transformValue,
      i = e.scale,
      s = e.properties,
      l = {}
    return (
      (l[t] = createStyleFunction({
        properties: s,
        property: r || t,
        scale: n,
        defaultScale: i,
        transform: o,
      })),
      a && (l[a] = l[t]),
      createParser(l)
    )
  },
  datepickerPhrases = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  dateRangeInputPhrases = __assign(__assign({}, datepickerPhrases), {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  dateSingleInputPhrases = __assign(__assign({}, datepickerPhrases), {
    dateAriaLabel: 'Select date',
    datePlaceholder: 'Select date',
  }),
  daySizeGridTemplateColumns = style({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  composeGridStyles = compose(
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    gridColumnGap,
    gridGap,
    gridRowGap,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    alignItems,
    justifyContent,
    space,
  ),
  Grid = styled__default('div')(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['\n  display: grid;\n  ', '\n  ', '\n'],
        ['\n  display: grid;\n  ', '\n  ', '\n'],
      )),
    composeGridStyles,
    daySizeGridTemplateColumns,
  ),
  composeFlexStyles = compose(
    space,
    flex,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    gridArea,
    height,
    width,
  ),
  Flex = styled__default('div')(
    templateObject_1$1 ||
      (templateObject_1$1 = __makeTemplateObject(
        ['\n  display: flex;\n  ', '\n'],
        ['\n  display: flex;\n  ', '\n'],
      )),
    composeFlexStyles,
  ),
  composeBoxStyles = compose(
    gridArea,
    height,
    space,
    width,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
  ),
  Box = styled__default('div')(
    templateObject_1$2 ||
      (templateObject_1$2 = __makeTemplateObject(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    composeBoxStyles,
  )
function CalendarIcon(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    n = e.className,
    o = void 0 === n ? '' : n
  return React__default.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: o,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
function useThemeProps(e) {
  void 0 === e && (e = {})
  var t = React.useContext(styled.ThemeContext)
  return React.useMemo(
    function() {
      return t && 'object' == typeof t && t.reactDatepicker && 'object' == typeof t.reactDatepicker
        ? Object.keys(e).reduce(function(r, a) {
            var n
            return __assign(__assign({}, r), (((n = {})[a] = t.reactDatepicker[a] || e[a]), n))
          }, {})
        : e
    },
    [t, e],
  )
}
var globalStyles = {
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
function getThemeProp(e, t, r) {
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
var templateObject_1$3,
  templateObject_2,
  templateObject_3,
  placeholderColor = style({prop: 'placeholderColor', cssProperty: 'color'}),
  placeholderFontWeight = style({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  composeInputLabelStyles = compose(
    position,
    border,
    background,
    display,
    borderRadius,
    space,
  ),
  InputLabel = styled__default('label')(
    templateObject_1$3 ||
      (templateObject_1$3 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeInputLabelStyles,
  ),
  composeCalendarWrapperStyles = compose(
    position,
    left,
    right,
    top,
    height,
    width,
  ),
  CalendarWrapper = styled__default('div')(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    composeCalendarWrapperStyles,
  ),
  composeStyledInputStyle = compose(
    background,
    space,
    fontFamily,
    fontSize,
    color,
    fontWeight,
    space,
    border,
    width,
    minHeight,
    shadow,
  ),
  StyledInput = styled__default('input')(
    templateObject_3 ||
      (templateObject_3 = __makeTemplateObject(
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
    composeStyledInputStyle,
    placeholderFontWeight,
    placeholderColor,
    placeholderFontWeight,
    placeholderColor,
    placeholderFontWeight,
    placeholderColor,
  )
function Input(e) {
  var t = e.placeholder,
    r = e.id,
    a = e.vertical,
    n = e.isActive,
    o = e.ariaLabel,
    i = e.onClick,
    s = e.value,
    l = e.showCalendarIcon,
    c = e.padding,
    d = e.rtl,
    u = e.disableAccessibility,
    p = e.dateFormat,
    g = e.onChange,
    f = void 0 === g ? function() {} : g,
    m = React.useState(s),
    h = m[0],
    y = m[1],
    b = React.useRef(null)
  React.useEffect(
    function() {
      y(s)
    },
    [s],
  )
  var w = React.useContext(styled.ThemeContext),
    v = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: getThemeProp('charcoal', globalStyles.colors.charcoal, w),
      inputBackground: getThemeProp('white', globalStyles.colors.white, w),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: c,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, w),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: d ? 'unset' : a ? '8px' : '16px',
      inputCalendarWrapperRight: d ? (a ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: getThemeProp('graci', globalStyles.colors.graci, w),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + getThemeProp('graci', globalStyles.colors.graci, w),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: getThemeProp('white', globalStyles.colors.white, w),
      inputLabelMargin: '0',
      inputActiveBoxShadow:
        'inset 0px -3px 0 ' + getThemeProp('primaryColor', globalStyles.colors.primaryColor, w),
    })
  return React__default.createElement(
    InputLabel,
    {
      htmlFor: r,
      display: v.inputLabelDisplay,
      position: v.inputLabelPosition,
      border: v.inputLabelBorder,
      background: v.inputLabelBackground,
      borderRadius: v.inputLabelBorderRadius,
      m: v.inputLabelMargin,
    },
    l &&
      React__default.createElement(
        CalendarWrapper,
        {
          position: v.inputCalendarWrapperPosition,
          height: v.inputCalendarWrapperHeight,
          width: v.inputCalendarWrapperWidth,
          top: v.inputCalendarWrapperTop,
          left: v.inputCalendarWrapperLeft,
          right: v.inputCalendarWrapperRight,
        },
        React__default.createElement(CalendarIcon, {
          width: v.inputCalendarIconWidth,
          height: v.inputCalendarIconHeight,
          color: v.inputCalendarIconColor,
        }),
      ),
    React__default.createElement(StyledInput, {
      tabIndex: u ? -1 : 0,
      border: v.inputBorder,
      p: v.inputPadding,
      width: v.inputWidth,
      minHeight: v.inputMinHeight,
      background: v.inputBackground,
      fontFamily: v.fontFamily,
      color: v.inputColor,
      fontSize: v.inputFontSize,
      fontWeight: v.inputFontWeight,
      placeholderColor: v.inputPlaceholderColor,
      placeholderFontWeight: v.inputPlaceholderFontWeight,
      boxShadow: n ? v.inputActiveBoxShadow : 'none',
      id: r,
      placeholder: t,
      'aria-label': o,
      value: h,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        y(t),
          'number' == typeof b.current && clearTimeout(b.current),
          (b.current = setTimeout(function() {
            i()
            var e = st(t, p, new Date())
            isNaN(e) || f(e)
          }, 1e3))
      },
      onFocus: i,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function calculateAngle(e) {
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
}
function ArrowIcon(e) {
  var t = e.height,
    r = e.width,
    a = e.iconColor,
    n = e.direction,
    o = void 0 === n ? 'right' : n,
    i = e.className,
    s = void 0 === i ? '' : i,
    l = calculateAngle(o)
  return React__default.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: s,
      transform: 'rotate(' + l + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
var templateObject_1$4,
  templateObject_1$5,
  templateObject_2$1,
  composeStyles = compose(
    fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    space,
  ),
  Text = styled__default('div')(
    templateObject_1$4 ||
      (templateObject_1$4 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeStyles,
  ),
  StyledDate = styled__default(Text)(
    templateObject_2$1 ||
      (templateObject_2$1 = __makeTemplateObject(
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
        styled.css(
          templateObject_1$5 ||
            (templateObject_1$5 = __makeTemplateObject(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          r,
        )
      )
    },
  )
function SelectDate(e) {
  var t = e.title,
    r = e.isActive,
    a = e.date,
    n = e.vertical,
    o = React.useContext(styled.ThemeContext),
    i = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, o),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: getThemeProp('charcoal', globalStyles.colors.charcoal, o),
      selectDateDateFontSize: n ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: getThemeProp('primaryColor', globalStyles.colors.primaryColor, o),
      selectDatePadding: '0',
    })
  return React__default.createElement(
    Box,
    {p: i.selectDatePadding},
    React__default.createElement(
      Text,
      {
        fontFamily: i.fontFamily,
        fontSize: i.selectDateLabelFontSize,
        color: i.selectDateLabelColor,
        m: i.selectDateLabelMargin,
      },
      t,
    ),
    React__default.createElement(
      StyledDate,
      {
        as: 'span',
        color: i.selectDateDateColor,
        fontSize: i.selectDateDateFontSize,
        fontWeight: i.selectDateDateFontWeight,
        fontFamily: i.fontFamily,
        p: i.selectDateDatePadding,
        isActive: r,
        selectDateBorderColor: i.selectDateBorderColor,
      },
      a,
    ),
  )
}
var templateObject_1$6,
  templateObject_2$2,
  templateObject_3$1,
  templateObject_4,
  templateObject_5,
  MonthLabel = function(e) {
    var t = e.label,
      r = React.useContext(styled.ThemeContext),
      a = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        monthLabelColor: getThemeProp('darcula', globalStyles.colors.darcula, r),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: a.fontFamily,
        fontSize: a.monthLabelFontSize,
        fontWeight: a.monthLabelFontWeight,
        lineHeight: a.monthLabelLineHeight,
        color: a.monthLabelColor,
        'data-testid': 'MonthLabel',
      },
      t,
    )
  },
  MonthLabel$1 = function(e) {
    var t = e.label,
      r = React.useContext(styled.ThemeContext),
      a = useThemeProps({
        fontFamily: globalStyles.fontFamily,
        dayLabelColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, r),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return React__default.createElement(
      Text,
      {
        fontFamily: a.fontFamily,
        fontSize: a.dayLabelFontSize,
        fontWeight: a.dayLabelFontWeight,
        color: a.dayLabelColor,
        'data-testid': 'DayLabel',
      },
      t,
    )
  },
  datepickerContextDefaultValue = {
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
  DatepickerContext = React__default.createContext(datepickerContextDefaultValue),
  dayHeight = style({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayWidth = style({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayHoverColor = style({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  daySelectedHoverColor = style({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  dayHoverBackground = style({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  daySelectedHoverBackground = style({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  composeStyledDayStyles = compose(
    shadow,
    background,
    color,
    fontFamily,
    fontWeight,
    fontSize,
  ),
  StyledDay = styled__default('button')(
    templateObject_5 ||
      (templateObject_5 = __makeTemplateObject(
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
    dayHeight,
    dayWidth,
    composeStyledDayStyles,
    function(e) {
      var t = e.disabledDate,
        r = e.isSelectedStartOrEnd
      return (
        t &&
        !r &&
        styled.css(
          templateObject_1$6 ||
            (templateObject_1$6 = __makeTemplateObject(
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
              ['\n      cursor: initial;\n      opacity: 0.4;\n    '],
            )),
        )
      )
    },
    function(e) {
      var t = e.disabledDate,
        r = e.isSelected,
        a = e.isSelectedStartOrEnd,
        n = e.isWithinHoverRange
      return t || r || a || n
        ? r && !a
          ? styled.css(
              templateObject_3$1 ||
                (templateObject_3$1 = __makeTemplateObject(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              daySelectedHoverBackground,
              daySelectedHoverColor,
            )
          : ''
        : styled.css(
            templateObject_2$2 ||
              (templateObject_2$2 = __makeTemplateObject(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            dayHoverBackground,
            dayHoverColor,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return styled.css(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function getColor(e, t, r, a) {
  var n = a.selectedFirstOrLast,
    o = a.normal,
    i = a.selected,
    s = a.rangeHover
  return t ? n : e ? i : r ? s : o
}
function Day(e) {
  var t = e.day,
    r = e.date,
    a = React.useRef(null),
    n = React.useContext(DatepickerContext),
    o = n.focusedDate,
    i = n.isDateFocused,
    s = n.isDateSelected,
    l = n.isDateHovered,
    c = n.isDateBlocked,
    d = n.isFirstOrLastSelectedDate,
    u = n.onDateSelect,
    p = n.onDateFocus,
    g = n.onDateHover,
    f = n.onDayRender,
    m = le({
      date: r,
      focusedDate: o,
      isDateFocused: i,
      isDateSelected: s,
      isDateHovered: l,
      isDateBlocked: c,
      isFirstOrLastSelectedDate: d,
      onDateFocus: p,
      onDateSelect: u,
      onDateHover: g,
      dayRef: a,
    }),
    h = React.useContext(styled.ThemeContext),
    y = getThemeProp('white', globalStyles.colors.white, h),
    b = getThemeProp('mud', globalStyles.colors.mud, h),
    w = getThemeProp('primaryColor', globalStyles.colors.primaryColor, h),
    v = getThemeProp('accessibility', globalStyles.colors.accessibility, h),
    D = getThemeProp('selectedDay', globalStyles.colors.selectedDay, h),
    k = getThemeProp('selectedDayHover', globalStyles.colors.selectedDayHover, h),
    x = getThemeProp('normalDayHover', globalStyles.colors.normalDayHover, h),
    T = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      daySize: globalStyles.daySize,
      dayFontWeight: 500,
      dayFontSize: '14px',
      dayColor: b,
      dayHoverColor: b,
      daySelectedColor: y,
      daySelectedHoverColor: y,
      dayHoverRangeColor: y,
      daySelectedFirstOrLastColor: y,
      dayBackground: y,
      dayHoverBackground: x,
      daySelectedBackground: D,
      daySelectedHoverBackground: k,
      dayHoverRangeBackground: D,
      daySelectedFirstOrLastBackground: w,
      dayBorderColor: x,
      daySelectedBorderColor: D,
      dayHoverRangeBorderColor: D,
      daySelectedFirstOrLastBorderColor: w,
      dayAccessibilityBorderColor: v,
    }),
    C = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: T.daySelectedFirstOrLastBorderColor,
          selected: T.daySelectedBorderColor,
          normal: T.dayBorderColor,
          rangeHover: T.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, T, m.isWithinHoverRange],
    ),
    _ = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: T.daySelectedFirstOrLastBackground,
          selected: T.daySelectedBackground,
          normal: T.dayBackground,
          rangeHover: T.dayHoverRangeBackground,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, T, m.isWithinHoverRange],
    ),
    S = React.useMemo(
      function() {
        return getColor(m.isSelected, m.isSelectedStartOrEnd, m.isWithinHoverRange, {
          selectedFirstOrLast: T.daySelectedFirstOrLastColor,
          selected: T.daySelectedColor,
          normal: T.dayColor,
          rangeHover: T.dayHoverRangeColor,
        })
      },
      [m.isSelected, m.isSelectedStartOrEnd, T, m.isWithinHoverRange],
    )
  return React__default.createElement(
    StyledDay,
    __assign({}, m, {
      ref: a,
      dayHeight: T.daySize,
      dayWidth: T.daySize,
      background: _,
      color: S,
      fontFamily: T.fontFamily,
      fontWeight: T.dayFontWeight,
      fontSize: T.dayFontSize,
      daySelectedHoverBackground: T.daySelectedHoverBackground,
      dayHoverBackground: T.dayHoverBackground,
      dayHoverColor: T.dayHoverColor,
      daySelectedHoverColor: T.daySelectedHoverColor,
      borderAccessibilityColor: T.dayAccessibilityBorderColor,
      boxShadow:
        '1px 0 0 0 ' +
        C +
        ',\n        0 1px 0 0 ' +
        C +
        ',\n        1px 1px 0 0 ' +
        C +
        ',\n        1px 0 0 0 ' +
        C +
        ' inset,\n        0 1px 0 0 ' +
        C +
        ' inset',
      'data-testid': 'Day',
      'aria-label': 'Day-' + r.toDateString(),
      type: 'button',
    }),
    'function' == typeof f
      ? f(r)
      : React__default.createElement(
          Flex,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          t,
        ),
  )
}
var templateObject_1$7,
  templateObject_2$3,
  opacity0To100 = styled.keyframes(
    templateObject_1$7 ||
      (templateObject_1$7 = __makeTemplateObject(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  MonthWrapper = styled__default('div')(
    templateObject_2$3 ||
      (templateObject_2$3 = __makeTemplateObject(
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
        [
          '\n  animation-name: ',
          ';\n  animation-duration: 0.25s;\n  animation-timing-function: ease-in;\n\n  &:last-child {\n    padding: 0 1px 1px 0;\n  }\n',
        ],
      )),
    opacity0To100,
  ),
  Month = function(e) {
    var t = e.year,
      r = e.month,
      a = e.firstDayOfWeek,
      n = zt({
        dayLabelFormat: e.dayLabelFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: r,
        firstDayOfWeek: a,
      }),
      o = n.days,
      i = n.weekdayLabels,
      s = n.monthLabel,
      l = useThemeProps({
        daySize: globalStyles.daySize,
        monthLabelMargin: '0 0 28px',
        monthDayLabelMargin: '0 0 16px',
      })
    return React__default.createElement(
      MonthWrapper,
      null,
      React__default.createElement(
        Flex,
        {justifyContent: 'center', m: l.monthLabelMargin},
        React__default.createElement(MonthLabel, {label: s}),
      ),
      React__default.createElement(
        Grid,
        {daySizeGridTemplateColumns: l.daySize},
        i.map(function(e) {
          return React__default.createElement(
            Flex,
            {key: e, justifyContent: 'center', m: l.monthDayLabelMargin},
            React__default.createElement(MonthLabel$1, {label: e}),
          )
        }),
      ),
      React__default.createElement(
        Grid,
        {daySizeGridTemplateColumns: l.daySize},
        o.map(function(e, t) {
          return 'object' == typeof e
            ? React__default.createElement(Day, {date: e.date, key: e.dayLabel, day: e.dayLabel})
            : React__default.createElement('div', {key: t})
        }),
      ),
    )
  }
function CaretIcon(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    n = e.className,
    o = void 0 === n ? '' : n
  return React__default.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: o,
      viewBox: '0 0 14 14',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
    }),
  )
}
var templateObject_1$8,
  templateObject_2$4,
  templateObject_3$2,
  StyledReactDates = styled__default('button')(
    templateObject_1$8 ||
      (templateObject_1$8 = __makeTemplateObject(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  RedoIconStyle = styled__default(CaretIcon)(
    templateObject_3$2 ||
      (templateObject_3$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_2$4 ||
            (templateObject_2$4 = __makeTemplateObject(
              ['\n      transform: rotate(-180deg);\n    '],
              ['\n      transform: rotate(-180deg);\n    '],
            )),
        )
      )
    },
  )
function ResetDates(e) {
  var t = e.onResetDates,
    r = e.text,
    a = e.rtl,
    n = React.useContext(styled.ThemeContext),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      resetDatesIconColor: getThemeProp('mud', globalStyles.colors.mud, n),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: getThemeProp('darcula', globalStyles.colors.darcula, n),
      resetDatesTextMargin: a ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return React__default.createElement(
    StyledReactDates,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: t,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    React__default.createElement(RedoIconStyle, {
      height: o.resetDatesIconHeight,
      width: o.resetDatesIconWidth,
      color: o.resetDatesIconColor,
      rtl: a,
    }),
    React__default.createElement(
      Text,
      {
        m: o.resetDatesTextMargin,
        lineHeight: o.resetDatesTextLineHeight,
        fontFamily: o.fontFamily,
        fontSize: o.resetDatesTextFontSize,
        color: o.resetDatesTextColor,
      },
      r,
    ),
  )
}
var templateObject_1$9,
  templateObject_2$5,
  Svg = styled__default('svg')(
    templateObject_2$5 ||
      (templateObject_2$5 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      var t = e.angle
      return styled.css(
        templateObject_1$9 ||
          (templateObject_1$9 = __makeTemplateObject(
            ['\n      transform: rotate(', 'deg);\n    '],
            ['\n      transform: rotate(', 'deg);\n    '],
          )),
        t,
      )
    },
  )
function calculateAngle$1(e) {
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
}
function CaretIcon$1(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    n = e.direction,
    o = void 0 === n ? 'right' : n,
    i = e.className,
    s = void 0 === i ? '' : i,
    l = calculateAngle$1(o)
  return React__default.createElement(
    Svg,
    {
      width: r,
      height: t,
      color: a,
      className: s,
      angle: l,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var templateObject_1$a,
  composeSyles = compose(
    width,
    height,
    background,
    space,
    border,
  ),
  StyledNavButton = styled__default('button')(
    templateObject_1$a ||
      (templateObject_1$a = __makeTemplateObject(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    composeSyles,
  )
function NavButton(e) {
  var t = e.type,
    r = e.onClick,
    a = e.vertical,
    n = e.rtl,
    o = e.ariaLabel,
    i = React.useContext(styled.ThemeContext),
    s = useThemeProps({
      navButtonWidth: a ? '48px' : '30px',
      navButtonHeight: a ? '48px' : '30px',
      navButtonBackground: getThemeProp('white', globalStyles.colors.white, i),
      navButtonBorder:
        '1px solid ' + getThemeProp('silverCloud', globalStyles.colors.silverCloud, i),
      navButtonPadding: '0',
      navButtonIconHeight: a ? '18px' : '11px',
      navButtonIconWidth: a ? '28px' : '18px',
      navButtonIconColor: getThemeProp('greey', globalStyles.colors.greey, i),
    })
  function l() {
    return 'next' !== t || a
      ? 'next' === t && a
        ? 'down'
        : 'prev' !== t || a
        ? 'up'
        : 'left'
      : 'right'
  }
  return React__default.createElement(
    StyledNavButton,
    {
      width: s.navButtonWidth,
      height: s.navButtonHeight,
      background: s.navButtonBackground,
      border: s.navButtonBorder,
      borderRight: 'up' !== l() || n ? s.navButtonBorder : 'unset',
      borderLeft: 'up' === l() && n ? 'unset' : s.navButtonBorder,
      p: s.navButtonPadding,
      type: 'button',
      'aria-label': o,
      onClick: r,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    React__default.createElement(CaretIcon$1, {
      width: s.navButtonIconWidth,
      height: s.navButtonIconHeight,
      color: s.navButtonIconColor,
      direction: l(),
    }),
  )
}
function CloseIcon(e) {
  var t = e.height,
    r = e.width,
    a = e.color,
    n = e.className,
    o = void 0 === n ? '' : n
  return React__default.createElement(
    'svg',
    {
      width: r,
      height: t,
      color: a,
      className: o,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React__default.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var templateObject_1$b,
  templateObject_2$6,
  composeTextStyles = compose(
    space,
    color,
    fontSize,
    fontFamily,
    fontWeight,
  ),
  Text$1 = styled__default('div')(
    templateObject_1$b ||
      (templateObject_1$b = __makeTemplateObject(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    composeTextStyles,
  ),
  Wrapper = styled__default('button')(
    templateObject_2$6 ||
      (templateObject_2$6 = __makeTemplateObject(
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
    Text$1,
    color,
    color,
  )
function Close(e) {
  var t = e.onClick,
    r = e.rtl,
    a = e.closeText,
    n = React.useContext(styled.ThemeContext),
    o = useThemeProps({
      fontFamily: globalStyles.fontFamily,
      closeMargin: r ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: getThemeProp('silverCloud', globalStyles.colors.silverCloud, n),
      closeHoverColor: getThemeProp('darcula', globalStyles.colors.darcula, n),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return React__default.createElement(
    Wrapper,
    {
      onClick: t,
      color: o.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    React__default.createElement(CloseIcon, {width: '15px', height: '16px', color: '#ADADAD'}),
    React__default.createElement(
      Text$1,
      {
        m: o.closeMargin,
        color: o.closeColor,
        fontSize: o.closeFontSize,
        fontFamily: o.fontFamily,
        fontWeight: o.closeFontWeight,
      },
      a,
    ),
  )
}
var opacity0To100$1 = styled.keyframes(
    templateObject_1$c ||
      (templateObject_1$c = __makeTemplateObject(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  composeStyledDatepickerStyles = compose(
    background,
    space,
    borderRadius,
    position,
    shadow,
    width,
  ),
  StyledDatepicker = styled__default('div')(
    templateObject_3$3 ||
      (templateObject_3$3 = __makeTemplateObject(
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
    composeStyledDatepickerStyles,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_2$7 ||
            (templateObject_2$7 = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
    opacity0To100$1,
  ),
  DateWrapper = styled__default('div')(
    templateObject_4$1 ||
      (templateObject_4$1 = __makeTemplateObject(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  composeCloseWrapperStyles = compose(
    display,
    justifyContent,
  ),
  CloseWrapper = styled__default(Box)(
    templateObject_5$1 ||
      (templateObject_5$1 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeCloseWrapperStyles,
  ),
  composeMonthGridStyles = compose(
    overflow,
    height,
  ),
  MonthGrid = styled__default(Grid)(
    templateObject_6 || (templateObject_6 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeMonthGridStyles,
  )
function Datepicker(e, t) {
  var r = e.startDate,
    a = e.endDate,
    n = e.minBookingDate,
    o = e.maxBookingDate,
    i = e.focusedInput,
    s = e.onDatesChange,
    l = e.dayLabelFormat,
    c = e.weekdayLabelFormat,
    d = e.monthLabelFormat,
    u = e.onDayRender,
    p = e.vertical,
    g = void 0 !== p && p,
    f = e.rtl,
    m = void 0 !== f && f,
    h = e.showResetDates,
    y = void 0 === h || h,
    b = e.showClose,
    w = void 0 === b || b,
    v = e.showSelectedDates,
    D = void 0 === v || v,
    k = e.exactMinBookingDays,
    x = void 0 !== k && k,
    T = e.isDateBlocked,
    C =
      void 0 === T
        ? function() {
            return !1
          }
        : T,
    _ = e.minBookingDays,
    S = void 0 === _ ? 1 : _,
    R = e.onClose,
    O = void 0 === R ? function() {} : R,
    B = e.numberOfMonths,
    W = e.firstDayOfWeek,
    M = e.displayFormat,
    j = void 0 === M ? 'MM/dd/yyyy' : M,
    L = e.phrases,
    P = void 0 === L ? datepickerPhrases : L,
    E = de({
      startDate: r,
      endDate: a,
      focusedInput: i,
      onDatesChange: s,
      minBookingDate: n,
      maxBookingDate: o,
      minBookingDays: S,
      isDateBlocked: C,
      exactMinBookingDays: x,
      numberOfMonths: B,
      firstDayOfWeek: W,
    }),
    F = E.activeMonths,
    H = E.isDateSelected,
    $ = E.isFirstOrLastSelectedDate,
    I = E.isDateHovered,
    A = E.firstDayOfWeek,
    z = E.onDateSelect,
    N = E.onResetDates,
    U = E.goToPreviousMonths,
    q = E.goToNextMonths,
    G = E.numberOfMonths,
    Y = E.hoveredDate,
    Q = E.onDateHover,
    X = E.isDateFocused,
    V = E.focusedDate,
    J = E.onDateFocus,
    K = E.isDateBlocked
  React.useImperativeHandle(t, function() {
    return {
      onDateSelect: function(e) {
        z(e)
      },
    }
  })
  var Z = React.useRef(null),
    ee = React.useContext(styled.ThemeContext),
    te = useThemeProps({
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
      datepickerSelectDateGridTemplateRows: 'unset',
      datepickerSelectDateArrowIconWidth: '15px',
      datepickerSelectDateArrowIconHeight: '12px',
      datepickerSelectDateArrowIconColor: getThemeProp(
        'silverCloud',
        globalStyles.colors.silverCloud,
        ee,
      ),
      datepickerMonthsWrapperMargin: w || D ? (D ? '28px 0 0' : '48px 0 0') : 'unset',
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
  function re() {
    Z && Z.current && g && (Z.current.scrollTop = 0)
  }
  function ae() {
    q(), re()
  }
  function ne() {
    U(), re()
  }
  return React__default.createElement(
    styled.ThemeProvider,
    {
      theme: function(e) {
        return e || {}
      },
    },
    React__default.createElement(
      DatepickerContext.Provider,
      {
        value: {
          rtl: m,
          isDateFocused: X,
          isDateSelected: H,
          isDateHovered: I,
          isFirstOrLastSelectedDate: $,
          onDateFocus: J,
          focusedDate: V,
          onDateSelect: z,
          onDateHover: Q,
          onDayRender: u,
          isDateBlocked: K,
        },
      },
      React__default.createElement(
        StyledDatepicker,
        {
          background: te.datepickerBackground,
          p: te.datepickerPadding,
          borderRadius: te.datepickerBorderRadius,
          position: te.datepickerPosition,
          boxShadow: te.datepickerBoxShadow,
          width: te.datepickerWidth,
          rtl: m,
        },
        w &&
          React__default.createElement(
            CloseWrapper,
            {
              m: te.datepickerCloseWrapperMargin,
              display: te.datepickerCloseWrapperDisplay,
              justifyContent: te.datepickerCloseWrapperJustifyContent,
              position: te.datepickerCloseWrapperPosition,
              right: te.datepickerCloseWrapperRight,
              top: te.datepickerCloseWrapperTop,
              left: te.datepickerCloseWrapperLeft,
              bottom: te.datepickerCloseWrapperBottom,
              zIndex: te.datepickerCloseWrapperZIndex,
            },
            React__default.createElement(Close, {onClick: O, rtl: m, closeText: P.close}),
          ),
        D &&
          React__default.createElement(
            DateWrapper,
            null,
            React__default.createElement(
              Grid,
              {
                'data-testid': 'SelectedDatesGrid',
                gridTemplateColumns: te.datepickerSelectDateGridTemplateColumns,
                gridTemplateRows: te.datepickerSelectDateGridTemplateRows,
              },
              React__default.createElement(SelectDate, {
                title: P.datepickerStartDateLabel,
                date: oe(r, j, P.datepickerStartDatePlaceholder),
                isActive: i === se,
                vertical: g,
              }),
              React__default.createElement(
                Flex,
                {justifyContent: 'center', alignItems: 'center'},
                React__default.createElement(ArrowIcon, {
                  height: te.datepickerSelectDateArrowIconHeight,
                  width: te.datepickerSelectDateArrowIconWidth,
                  iconColor: te.datepickerSelectDateArrowIconColor,
                }),
              ),
              React__default.createElement(SelectDate, {
                title: P.datepickerEndDateLabel,
                date: oe(a, j, P.datepickerEndDatePlaceholder),
                isActive: i === ce,
                vertical: g,
              }),
            ),
          ),
        React__default.createElement(
          Box,
          {position: 'relative'},
          React__default.createElement(
            Box,
            {m: te.datepickerMonthsWrapperMargin},
            React__default.createElement(
              MonthGrid,
              {
                'data-testid': 'MonthGrid',
                overflow: te.datepickerMonthsGridOverflow,
                height: te.datepickerMonthsGridHeight,
                gridTemplateColumns: g ? '1fr' : 'repeat(' + G + ', 1fr)',
                gridGap: te.datepickerMonthsGridGap,
                pr: m ? '1px' : '0',
                ref: Z,
                onMouseLeave: function() {
                  Y && Q(null)
                },
              },
              F.map(function(e) {
                return React__default.createElement(Month, {
                  key: 'month-' + e.year + '-' + e.month,
                  year: e.year,
                  month: e.month,
                  firstDayOfWeek: A,
                  dayLabelFormat: l || Xt,
                  weekdayLabelFormat: c || Gt,
                  monthLabelFormat: d || At,
                })
              }),
            ),
          ),
          React__default.createElement(
            Flex,
            {alignItems: 'center'},
            React__default.createElement(
              React__default.Fragment,
              null,
              y &&
                React__default.createElement(
                  Flex,
                  {flex: '1', m: te.datepickerResetDatesWrapperMargin},
                  React__default.createElement(ResetDates, {
                    rtl: m,
                    onResetDates: N,
                    text: P.resetDates,
                  }),
                ),
              React__default.createElement(
                Box,
                {
                  position: te.datepickerPreviousMonthButtonPosition,
                  top: te.datepickerPreviousMonthButtonTop,
                  left: te.datepickerPreviousMonthButtonLeft,
                  right: te.datepickerPreviousMonthButtonRight,
                  bottom: te.datepickerPreviousMonthButtonBottom,
                },
                React__default.createElement(NavButton, {
                  type: 'prev',
                  onClick: m && !g ? ae : ne,
                  vertical: g,
                  rtl: m,
                  ariaLabel: 'Previous month',
                }),
              ),
              React__default.createElement(
                Box,
                {
                  position: te.datepickerNextMonthButtonPosition,
                  top: te.datepickerNextMonthButtonTop,
                  left: te.datepickerNextMonthButtonLeft,
                  right: te.datepickerNextMonthButtonRight,
                  bottom: te.datepickerNextMonthButtonBottom,
                },
                React__default.createElement(NavButton, {
                  type: 'next',
                  onClick: m && !g ? ne : ae,
                  vertical: g,
                  rtl: m,
                  ariaLabel: 'Next month',
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
var templateObject_1$c,
  templateObject_2$7,
  templateObject_3$3,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6,
  templateObject_1$d,
  templateObject_2$8,
  templateObject_3$4,
  templateObject_4$2,
  templateObject_5$2,
  Datepicker$1 = React__default.forwardRef(Datepicker),
  Wrapper$1 = styled__default(Box)(
    templateObject_2$8 ||
      (templateObject_2$8 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_1$d ||
            (templateObject_1$d = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
  ),
  composeInputArrowIconStyles = compose(
    color,
    opacity,
  ),
  InputArrowIcon = styled__default(ArrowIcon)(
    templateObject_4$2 ||
      (templateObject_4$2 = __makeTemplateObject(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])),
    composeInputArrowIconStyles,
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_3$4 ||
            (templateObject_3$4 = __makeTemplateObject(
              ['\n      transform: rotate(-90deg);\n    '],
              ['\n      transform: rotate(-90deg);\n    '],
            )),
        )
      )
    },
  ),
  composeInputGridStyles = compose(
    background,
    border,
    borderRadius,
  ),
  InputGrid = styled__default(Grid)(
    templateObject_5$2 ||
      (templateObject_5$2 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    composeInputGridStyles,
  )
function getPlacement(e, t) {
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
}
function DateRangeInput(e) {
  var t = e.startDate,
    r = e.endDate,
    a = e.minBookingDate,
    n = e.maxBookingDate,
    o = e.firstDayOfWeek,
    i = e.onFocusChange,
    s = e.numberOfMonths,
    l = e.focusedInput,
    c = e.onDatesChange,
    d = e.exactMinBookingDays,
    u = e.dayLabelFormat,
    p = e.weekdayLabelFormat,
    g = e.monthLabelFormat,
    f = e.onDayRender,
    m = e.showClose,
    h = void 0 === m || m,
    y = e.showSelectedDates,
    b = void 0 === y || y,
    w = e.showResetDates,
    v = void 0 === w || w,
    D = e.vertical,
    k = void 0 !== D && D,
    x = e.rtl,
    T = void 0 !== x && x,
    C = e.isDateBlocked,
    _ =
      void 0 === C
        ? function() {
            return !1
          }
        : C,
    S = e.minBookingDays,
    R = void 0 === S ? 1 : S,
    O = e.onClose,
    B = void 0 === O ? function() {} : O,
    W = e.showStartDateCalendarIcon,
    M = void 0 === W || W,
    j = e.showEndDateCalendarIcon,
    L = void 0 === j || j,
    P = e.displayFormat,
    E = void 0 === P ? 'MM/dd/yyyy' : P,
    F = e.phrases,
    H = void 0 === F ? dateRangeInputPhrases : F,
    $ = e.placement,
    I = void 0 === $ ? 'bottom' : $,
    A = e.startDateInputId,
    z = void 0 === A ? 'startDate' : A,
    N = e.endDateInputId,
    U = void 0 === N ? 'endDate' : N,
    q = React.useRef(null),
    G = React.useRef(null),
    Y = React.useContext(styled.ThemeContext),
    Q = useThemeProps(
      __assign(
        {
          dateRangeBackground: 'transparent',
          dateRangeGridTemplateColumns: k ? '1fr 24px 1fr' : '194px 39px 194px',
          dateRangeGridTemplateRows: 'unset',
          dateRangeBorder: '0',
          dateRangeBorderRadius: '0',
          dateRangeArrowIconWidth: '15px',
          dateRangeArrowIconHeight: '12px',
          dateRangeArrowIconColor: getThemeProp('graci', globalStyles.colors.graci, Y),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: k ? (T ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: k ? (T ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeDatepickerWrapperPosition: 'absolute',
        },
        getPlacement(I, T),
      ),
    )
  function X(e) {
    null !== l && G && G.current && !G.current.contains(e.target) && i(null)
  }
  function V(e) {
    q && q.current && q.current.onDateSelect && q.current.onDateSelect(e)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', X),
        function() {
          window.removeEventListener('click', X)
        }
      )
    }),
    React__default.createElement(
      styled.ThemeProvider,
      {
        theme: function(e) {
          return e || {}
        },
      },
      React__default.createElement(
        Wrapper$1,
        {rtl: T, position: 'relative', ref: G},
        React__default.createElement(
          InputGrid,
          {
            'data-testid': 'DateRangeInputGrid',
            background: Q.dateRangeBackground,
            gridTemplateColumns: Q.dateRangeGridTemplateColumns,
            gridTemplateRows: Q.dateRangeGridTemplateRows,
            border: Q.dateRangeBorder,
            borderRadius: Q.dateRangeBorderRadius,
          },
          React__default.createElement(Input, {
            id: z,
            ariaLabel: H.startDateAriaLabel,
            placeholder: H.startDatePlaceholder,
            value: oe(t, E, ''),
            onClick: function() {
              return i(se)
            },
            showCalendarIcon: M,
            vertical: k,
            isActive: l === se,
            padding: Q.dateRangeStartDateInputPadding,
            rtl: T,
            onChange: V,
            dateFormat: E,
          }),
          React__default.createElement(
            Flex,
            {alignItems: 'center', justifyContent: 'center'},
            React__default.createElement(InputArrowIcon, {
              width: Q.dateRangeArrowIconWidth,
              height: Q.dateRangeArrowIconHeight,
              color: Q.dateRangeArrowIconColor,
              opacity: Q.dateRangeArrowIconOpacity,
              rtl: T,
            }),
          ),
          React__default.createElement(Input, {
            id: U,
            ariaLabel: H.endDateAriaLabel,
            placeholder: H.endDatePlaceholder,
            value: oe(r, E, ''),
            onClick: function() {
              return i(t ? ce : se)
            },
            showCalendarIcon: L,
            vertical: k,
            isActive: l === ce,
            padding: Q.dateRangeEndDateInputPadding,
            rtl: T,
            disableAccessibility: l === se,
            onChange: V,
            dateFormat: E,
          }),
        ),
        React__default.createElement(
          Box,
          {
            position: Q.dateRangeDatepickerWrapperPosition,
            bottom: Q.dateRangeDatepickerWrapperBottom,
            left: Q.dateRangeDatepickerWrapperLeft,
            top: Q.dateRangeDatepickerWrapperTop,
            right: Q.dateRangeDatepickerWrapperRight,
          },
          null !== l &&
            React__default.createElement(Datepicker$1, {
              onClose: function() {
                B(), i(null)
              },
              startDate: t,
              endDate: r,
              minBookingDate: a,
              maxBookingDate: n,
              firstDayOfWeek: o,
              numberOfMonths: s,
              focusedInput: l,
              displayFormat: E,
              onDatesChange: c,
              minBookingDays: R,
              isDateBlocked: _,
              exactMinBookingDays: d,
              showResetDates: v,
              vertical: k,
              showSelectedDates: b,
              showClose: h,
              rtl: T,
              dayLabelFormat: u,
              weekdayLabelFormat: p,
              monthLabelFormat: g,
              onDayRender: f,
              phrases: H,
              ref: q,
            }),
        ),
      ),
    )
  )
}
var templateObject_1$e,
  templateObject_2$9,
  Wrapper$2 = styled__default(Box)(
    templateObject_2$9 ||
      (templateObject_2$9 = __makeTemplateObject(['\n  ', '\n'], ['\n  ', '\n'])),
    function(e) {
      return (
        e.rtl &&
        styled.css(
          templateObject_1$e ||
            (templateObject_1$e = __makeTemplateObject(
              ['\n      direction: rtl;\n    '],
              ['\n      direction: rtl;\n    '],
            )),
        )
      )
    },
  )
function getPlacement$1(e, t) {
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
}
function DateSingleInput(e) {
  var t = e.date,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    n = e.firstDayOfWeek,
    o = e.onFocusChange,
    i = e.showDatepicker,
    s = e.onDateChange,
    l = e.dayLabelFormat,
    c = e.weekdayLabelFormat,
    d = e.monthLabelFormat,
    u = e.onDayRender,
    p = e.numberOfMonths,
    g = void 0 === p ? 1 : p,
    f = e.showClose,
    m = void 0 === f || f,
    h = e.showResetDate,
    y = void 0 === h || h,
    b = e.vertical,
    w = void 0 !== b && b,
    v = e.rtl,
    D = void 0 !== v && v,
    k = e.isDateBlocked,
    x =
      void 0 === k
        ? function() {
            return !1
          }
        : k,
    T = e.onClose,
    C = void 0 === T ? function() {} : T,
    _ = e.showCalendarIcon,
    S = void 0 === _ || _,
    R = e.displayFormat,
    O = void 0 === R ? 'MM/dd/yyyy' : R,
    B = e.phrases,
    W = void 0 === B ? dateSingleInputPhrases : B,
    M = e.placement,
    j = void 0 === M ? 'bottom' : M,
    L = e.inputId,
    P = void 0 === L ? 'startDate' : L,
    E = React.useRef(null),
    F = React.useRef(null),
    H = useThemeProps(
      __assign(
        {
          dateSingleInputPadding: w ? (D ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateSingleDatepickerWrapperPosition: 'absolute',
        },
        getPlacement$1(j, D),
      ),
    )
  function $(e) {
    i && F && F.current && !F.current.contains(e.target) && o(!1)
  }
  return (
    React.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', $),
        function() {
          window.removeEventListener('click', $)
        }
      )
    }),
    React__default.createElement(
      styled.ThemeProvider,
      {
        theme: function(e) {
          return e || {}
        },
      },
      React__default.createElement(
        Wrapper$2,
        {rtl: D, position: 'relative', ref: F},
        React__default.createElement(Input, {
          id: P,
          ariaLabel: W.dateAriaLabel,
          placeholder: W.datePlaceholder,
          value: oe(t, O, ''),
          onClick: function() {
            return o(!0)
          },
          showCalendarIcon: S,
          vertical: w,
          isActive: !1,
          padding: H.dateSingleInputPadding,
          rtl: D,
          onChange: function(e) {
            E && E.current && E.current.onDateSelect && E.current.onDateSelect(e)
          },
          dateFormat: O,
        }),
        React__default.createElement(
          Box,
          {
            position: H.dateSingleDatepickerWrapperPosition,
            bottom: H.dateSingleDatepickerWrapperBottom,
            left: H.dateSingleDatepickerWrapperLeft,
            top: H.dateSingleDatepickerWrapperTop,
            right: H.dateSingleDatepickerWrapperRight,
          },
          i &&
            React__default.createElement(Datepicker$1, {
              exactMinBookingDays: !0,
              minBookingDays: 1,
              onClose: function() {
                C(), o(!1)
              },
              startDate: t,
              endDate: t,
              minBookingDate: r,
              maxBookingDate: a,
              firstDayOfWeek: n,
              numberOfMonths: g,
              focusedInput: i ? se : null,
              displayFormat: O,
              onDatesChange: function(e) {
                var t = e.focusedInput,
                  r = e.startDate
                s({showDatepicker: null !== t, date: r})
              },
              isDateBlocked: x,
              showResetDates: y,
              vertical: w,
              showSelectedDates: !1,
              showClose: m,
              rtl: D,
              dayLabelFormat: l,
              weekdayLabelFormat: c,
              monthLabelFormat: d,
              onDayRender: u,
              phrases: W,
              ref: E,
            }),
        ),
      ),
    )
  )
}
;(exports.DateRangeInput = DateRangeInput),
  (exports.DateSingleInput = DateSingleInput),
  (exports.Datepicker = Datepicker$1),
  (exports.END_DATE = ce),
  (exports.START_DATE = se),
  (exports.dateRangeInputPhrases = dateRangeInputPhrases),
  (exports.dateSingleInputPhrases = dateSingleInputPhrases),
  (exports.datepickerPhrases = datepickerPhrases)
