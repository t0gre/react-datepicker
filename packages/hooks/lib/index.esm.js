import {useMemo as t, useState as e, useCallback as n, useEffect as r} from 'react'
var a = {
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
function i(t) {
  return function(e) {
    var n = e || {},
      r = n.width ? String(n.width) : t.defaultWidth
    return t.formats[r] || t.formats[t.defaultWidth]
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
function s(t) {
  return function(e, n) {
    var r,
      a = n || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && t.formattingValues) {
      var i = t.defaultFormattingWidth || t.defaultWidth,
        o = a.width ? String(a.width) : i
      r = t.formattingValues[o] || t.formattingValues[i]
    } else {
      var u = t.defaultWidth,
        s = a.width ? String(a.width) : t.defaultWidth
      r = t.values[s] || t.values[u]
    }
    return r[t.argumentCallback ? t.argumentCallback(e) : e]
  }
}
function c(t) {
  return function(e, n) {
    var r = String(e),
      a = n || {},
      i = a.width,
      o = (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
      u = r.match(o)
    if (!u) return null
    var s,
      c = u[0],
      d = (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth]
    return (
      (s =
        '[object Array]' === Object.prototype.toString.call(d)
          ? (function(t, e) {
              for (var n = 0; n < t.length; n++) if (e(t[n])) return n
            })(d, function(t) {
              return t.test(r)
            })
          : (function(t, e) {
              for (var n in t) if (t.hasOwnProperty(n) && e(t[n])) return n
            })(d, function(t) {
              return t.test(r)
            })),
      (s = t.valueCallback ? t.valueCallback(s) : s),
      {value: (s = a.valueCallback ? a.valueCallback(s) : s), rest: r.slice(c.length)}
    )
  }
}
var d,
  l = {
    code: 'en-US',
    formatDistance: function(t, e, n) {
      var r
      return (
        (n = n || {}),
        (r =
          'string' == typeof a[t] ? a[t] : 1 === e ? a[t].one : a[t].other.replace('{{count}}', e)),
        n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
      )
    },
    formatLong: o,
    formatRelative: function(t, e, n, r) {
      return u[t]
    },
    localize: {
      ordinalNumber: function(t, e) {
        var n = Number(t),
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
        argumentCallback: function(t) {
          return Number(t) - 1
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
          valueCallback: function(t) {
            return parseInt(t, 10)
          },
        }),
        function(t, e) {
          var n = String(t),
            r = e || {},
            a = n.match(d.matchPattern)
          if (!a) return null
          var i = a[0],
            o = n.match(d.parsePattern)
          if (!o) return null
          var u = d.valueCallback ? d.valueCallback(o[0]) : o[0]
          return {value: (u = r.valueCallback ? r.valueCallback(u) : u), rest: n.slice(i.length)}
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
        valueCallback: function(t) {
          return t + 1
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
function f(t) {
  if (null === t || !0 === t || !1 === t) return NaN
  var e = Number(t)
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
}
function h(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = Object.prototype.toString.call(t)
  return t instanceof Date || ('object' == typeof t && '[object Date]' === e)
    ? new Date(t.getTime())
    : 'number' == typeof t || '[object Number]' === e
    ? new Date(t)
    : (('string' != typeof t && '[object String]' !== e) ||
        'undefined' == typeof console ||
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule",
        ),
        console.warn(new Error().stack)),
      new Date(NaN))
}
function g(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  return (function(t, e) {
    if (arguments.length < 2)
      throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
    var n = h(t).getTime(),
      r = f(e)
    return new Date(n + r)
  })(t, -f(e))
}
function w(t, e) {
  if (null == t)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n])
  return t
}
function m(t, e) {
  switch (t) {
    case 'P':
      return e.date({width: 'short'})
    case 'PP':
      return e.date({width: 'medium'})
    case 'PPP':
      return e.date({width: 'long'})
    case 'PPPP':
    default:
      return e.date({width: 'full'})
  }
}
function y(t, e) {
  switch (t) {
    case 'p':
      return e.time({width: 'short'})
    case 'pp':
      return e.time({width: 'medium'})
    case 'ppp':
      return e.time({width: 'long'})
    case 'pppp':
    default:
      return e.time({width: 'full'})
  }
}
var v = {
    p: y,
    P: function(t, e) {
      var n,
        r = t.match(/(P+)(p+)?/),
        a = r[1],
        i = r[2]
      if (!i) return m(t, e)
      switch (a) {
        case 'P':
          n = e.dateTime({width: 'short'})
          break
        case 'PP':
          n = e.dateTime({width: 'medium'})
          break
        case 'PPP':
          n = e.dateTime({width: 'long'})
          break
        case 'PPPP':
        default:
          n = e.dateTime({width: 'full'})
      }
      return n.replace('{{date}}', m(a, e)).replace('{{time}}', y(i, e))
    },
  },
  b = 6e4
function p(t) {
  var e = new Date(t.getTime()),
    n = e.getTimezoneOffset()
  e.setSeconds(0, 0)
  var r = e.getTime() % b
  return n * b + r
}
var T = ['D', 'DD'],
  D = ['YY', 'YYYY']
function k(t) {
  return -1 !== T.indexOf(t)
}
function x(t) {
  return -1 !== D.indexOf(t)
}
function C(t) {
  if ('YYYY' === t)
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr',
    )
  if ('YY' === t)
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr')
  if ('D' === t)
    throw new RangeError(
      'Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr',
    )
  if ('DD' === t)
    throw new RangeError(
      'Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr',
    )
}
function M(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = h(t),
    s = u.getUTCDay(),
    c = (s < o ? 7 : 0) + s - o
  return u.setUTCDate(u.getUTCDate() - c), u.setUTCHours(0, 0, 0, 0), u
}
function U(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = h(t, e),
    r = n.getUTCFullYear(),
    a = e || {},
    i = a.locale,
    o = i && i.options && i.options.firstWeekContainsDate,
    u = null == o ? 1 : f(o),
    s = null == a.firstWeekContainsDate ? u : f(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(r + 1, 0, s), c.setUTCHours(0, 0, 0, 0)
  var d = M(c, e),
    l = new Date(0)
  l.setUTCFullYear(r, 0, s), l.setUTCHours(0, 0, 0, 0)
  var g = M(l, e)
  return n.getTime() >= d.getTime() ? r + 1 : n.getTime() >= g.getTime() ? r : r - 1
}
function E(t, e, n) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = n || {},
    a = r.locale,
    i = a && a.options && a.options.weekStartsOn,
    o = null == i ? 0 : f(i),
    u = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = h(t),
    c = f(e),
    d = (((c % 7) + 7) % 7 < u ? 7 : 0) + c - s.getUTCDay()
  return s.setUTCDate(s.getUTCDate() + d), s
}
function q(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = h(t),
    n = e.getUTCDay(),
    r = (n < 1 ? 7 : 0) + n - 1
  return e.setUTCDate(e.getUTCDate() - r), e.setUTCHours(0, 0, 0, 0), e
}
function S(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = h(t),
    n = e.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = q(r),
    i = new Date(0)
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = q(i)
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}
var Y = 6048e5
function P(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = h(t),
    n =
      q(e).getTime() -
      (function(t) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var e = S(t),
          n = new Date(0)
        return n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), q(n)
      })(e).getTime()
  return Math.round(n / Y) + 1
}
var H = 6048e5
function O(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = h(t),
    r =
      M(n, e).getTime() -
      (function(t, e) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var n = e || {},
          r = n.locale,
          a = r && r.options && r.options.firstWeekContainsDate,
          i = null == a ? 1 : f(a),
          o = null == n.firstWeekContainsDate ? i : f(n.firstWeekContainsDate),
          u = U(t, e),
          s = new Date(0)
        return s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0), M(s, e)
      })(n, e).getTime()
  return Math.round(r / H) + 1
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
function G(t, e, n) {
  var r = e.match(t)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: e.slice(r[0].length)}
}
function A(t, e) {
  var n = e.match(t)
  if (!n) return null
  if ('Z' === n[0]) return {value: 0, rest: e.slice(1)}
  var r = '+' === n[1] ? 1 : -1,
    a = n[2] ? parseInt(n[2], 10) : 0,
    i = n[3] ? parseInt(n[3], 10) : 0,
    o = n[5] ? parseInt(n[5], 10) : 0
  return {value: r * (a * B + i * N + o * L), rest: e.slice(n[0].length)}
}
function z(t, e) {
  return G(W.anyDigitsSigned, t, e)
}
function j(t, e, n) {
  switch (t) {
    case 1:
      return G(W.singleDigit, e, n)
    case 2:
      return G(W.twoDigits, e, n)
    case 3:
      return G(W.threeDigits, e, n)
    case 4:
      return G(W.fourDigits, e, n)
    default:
      return G(new RegExp('^\\d{1,' + t + '}'), e, n)
  }
}
function K(t, e, n) {
  switch (t) {
    case 1:
      return G(W.singleDigitSigned, e, n)
    case 2:
      return G(W.twoDigitsSigned, e, n)
    case 3:
      return G(W.threeDigitsSigned, e, n)
    case 4:
      return G(W.fourDigitsSigned, e, n)
    default:
      return G(new RegExp('^-?\\d{1,' + t + '}'), e, n)
  }
}
function J(t) {
  switch (t) {
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
function Z(t, e) {
  var n,
    r = e > 0,
    a = r ? e : 1 - e
  if (a <= 50) n = t || 100
  else {
    var i = a + 50
    n = t + 100 * Math.floor(i / 100) - (t >= i % 100 ? 100 : 0)
  }
  return r ? n : 1 - n
}
var _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  $ = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function V(t) {
  return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
}
var tt = {
    G: {
      priority: 140,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'G':
          case 'GG':
          case 'GGG':
            return n.era(t, {width: 'abbreviated'}) || n.era(t, {width: 'narrow'})
          case 'GGGGG':
            return n.era(t, {width: 'narrow'})
          case 'GGGG':
          default:
            return (
              n.era(t, {width: 'wide'}) ||
              n.era(t, {width: 'abbreviated'}) ||
              n.era(t, {width: 'narrow'})
            )
        }
      },
      set: function(t, e, n, r) {
        return (e.era = n), t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function(t, e, n, r) {
        var a = function(t) {
          return {year: t, isTwoDigitYear: 'yy' === e}
        }
        switch (e) {
          case 'y':
            return j(4, t, a)
          case 'yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return j(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = t.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var i = Z(n.year, a)
          return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function(t, e, n, r) {
        var a = function(t) {
          return {year: t, isTwoDigitYear: 'YY' === e}
        }
        switch (e) {
          case 'Y':
            return j(4, t, a)
          case 'Yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return j(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = U(t, r)
        if (n.isTwoDigitYear) {
          var i = Z(n.year, a)
          return t.setUTCFullYear(i, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), M(t, r)
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), M(t, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(t, e, n, r) {
        return K('R' === e ? 4 : e.length, t)
      },
      set: function(t, e, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), q(a)
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
      parse: function(t, e, n, r) {
        return K('u' === e ? 4 : e.length, t)
      },
      set: function(t, e, n, r) {
        return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'Q':
          case 'QQ':
            return j(e.length, t)
          case 'Qo':
            return n.ordinalNumber(t, {unit: 'quarter'})
          case 'QQQ':
            return (
              n.quarter(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.quarter(t, {width: 'narrow', context: 'formatting'})
            )
          case 'QQQQQ':
            return n.quarter(t, {width: 'narrow', context: 'formatting'})
          case 'QQQQ':
          default:
            return (
              n.quarter(t, {width: 'wide', context: 'formatting'}) ||
              n.quarter(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.quarter(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 4
      },
      set: function(t, e, n, r) {
        return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'q':
          case 'qq':
            return j(e.length, t)
          case 'qo':
            return n.ordinalNumber(t, {unit: 'quarter'})
          case 'qqq':
            return (
              n.quarter(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.quarter(t, {width: 'narrow', context: 'standalone'})
            )
          case 'qqqqq':
            return n.quarter(t, {width: 'narrow', context: 'standalone'})
          case 'qqqq':
          default:
            return (
              n.quarter(t, {width: 'wide', context: 'standalone'}) ||
              n.quarter(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.quarter(t, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 4
      },
      set: function(t, e, n, r) {
        return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function(t, e, n, r) {
        var a = function(t) {
          return t - 1
        }
        switch (e) {
          case 'M':
            return G(W.month, t, a)
          case 'MM':
            return j(2, t, a)
          case 'Mo':
            return n.ordinalNumber(t, {unit: 'month', valueCallback: a})
          case 'MMM':
            return (
              n.month(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.month(t, {width: 'narrow', context: 'formatting'})
            )
          case 'MMMMM':
            return n.month(t, {width: 'narrow', context: 'formatting'})
          case 'MMMM':
          default:
            return (
              n.month(t, {width: 'wide', context: 'formatting'}) ||
              n.month(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.month(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function(t, e, n, r) {
        return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function(t, e, n, r) {
        var a = function(t) {
          return t - 1
        }
        switch (e) {
          case 'L':
            return G(W.month, t, a)
          case 'LL':
            return j(2, t, a)
          case 'Lo':
            return n.ordinalNumber(t, {unit: 'month', valueCallback: a})
          case 'LLL':
            return (
              n.month(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.month(t, {width: 'narrow', context: 'standalone'})
            )
          case 'LLLLL':
            return n.month(t, {width: 'narrow', context: 'standalone'})
          case 'LLLL':
          default:
            return (
              n.month(t, {width: 'wide', context: 'standalone'}) ||
              n.month(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.month(t, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function(t, e, n, r) {
        return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'w':
            return G(W.week, t)
          case 'wo':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return M(
          (function(t, e, n) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var r = h(t),
              a = f(e),
              i = O(r, n) - a
            return r.setUTCDate(r.getUTCDate() - 7 * i), r
          })(t, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'I':
            return G(W.week, t)
          case 'Io':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return q(
          (function(t, e) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var n = h(t),
              r = f(e),
              a = P(n) - r
            return n.setUTCDate(n.getUTCDate() - 7 * a), n
          })(t, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'd':
            return G(W.date, t)
          case 'do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        var r = V(t.getUTCFullYear()),
          a = t.getUTCMonth()
        return r ? e >= 1 && e <= $[a] : e >= 1 && e <= _[a]
      },
      set: function(t, e, n, r) {
        return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'D':
          case 'DD':
            return G(W.dayOfYear, t)
          case 'Do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return V(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
      },
      set: function(t, e, n, r) {
        return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t
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
      parse: function(t, e, n, r) {
        switch (e) {
          case 'E':
          case 'EE':
          case 'EEE':
            return (
              n.day(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEEE':
            return n.day(t, {width: 'narrow', context: 'formatting'})
          case 'EEEEEE':
            return (
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
          case 'EEEE':
          default:
            return (
              n.day(t, {width: 'wide', context: 'formatting'}) ||
              n.day(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function(t, e, n, r) {
        return (t = E(t, n, r)).setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function(t, e, n, r) {
        var a = function(t) {
          var e = 7 * Math.floor((t - 1) / 7)
          return ((t + r.weekStartsOn + 6) % 7) + e
        }
        switch (e) {
          case 'e':
          case 'ee':
            return j(e.length, t, a)
          case 'eo':
            return n.ordinalNumber(t, {unit: 'day', valueCallback: a})
          case 'eee':
            return (
              n.day(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
          case 'eeeee':
            return n.day(t, {width: 'narrow', context: 'formatting'})
          case 'eeeeee':
            return (
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
          case 'eeee':
          default:
            return (
              n.day(t, {width: 'wide', context: 'formatting'}) ||
              n.day(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.day(t, {width: 'short', context: 'formatting'}) ||
              n.day(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function(t, e, n, r) {
        return (t = E(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
      parse: function(t, e, n, r) {
        var a = function(t) {
          var e = 7 * Math.floor((t - 1) / 7)
          return ((t + r.weekStartsOn + 6) % 7) + e
        }
        switch (e) {
          case 'c':
          case 'cc':
            return j(e.length, t, a)
          case 'co':
            return n.ordinalNumber(t, {unit: 'day', valueCallback: a})
          case 'ccc':
            return (
              n.day(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.day(t, {width: 'short', context: 'standalone'}) ||
              n.day(t, {width: 'narrow', context: 'standalone'})
            )
          case 'ccccc':
            return n.day(t, {width: 'narrow', context: 'standalone'})
          case 'cccccc':
            return (
              n.day(t, {width: 'short', context: 'standalone'}) ||
              n.day(t, {width: 'narrow', context: 'standalone'})
            )
          case 'cccc':
          default:
            return (
              n.day(t, {width: 'wide', context: 'standalone'}) ||
              n.day(t, {width: 'abbreviated', context: 'standalone'}) ||
              n.day(t, {width: 'short', context: 'standalone'}) ||
              n.day(t, {width: 'narrow', context: 'standalone'})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function(t, e, n, r) {
        return (t = E(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
      parse: function(t, e, n, r) {
        var a = function(t) {
          return 0 === t ? 7 : t
        }
        switch (e) {
          case 'i':
          case 'ii':
            return j(e.length, t)
          case 'io':
            return n.ordinalNumber(t, {unit: 'day'})
          case 'iii':
            return (
              n.day(t, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiiii':
            return n.day(t, {width: 'narrow', context: 'formatting', valueCallback: a})
          case 'iiiiii':
            return (
              n.day(t, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
          case 'iiii':
          default:
            return (
              n.day(t, {width: 'wide', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'abbreviated', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'short', context: 'formatting', valueCallback: a}) ||
              n.day(t, {width: 'narrow', context: 'formatting', valueCallback: a})
            )
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 7
      },
      set: function(t, e, n, r) {
        return (
          (t = (function(t, e) {
            if (arguments.length < 2)
              throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
            var n = f(e)
            n % 7 == 0 && (n -= 7)
            var r = h(t),
              a = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - r.getUTCDay()
            return r.setUTCDate(r.getUTCDate() + a), r
          })(t, n, r)).setUTCHours(0, 0, 0, 0),
          t
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
      parse: function(t, e, n, r) {
        switch (e) {
          case 'a':
          case 'aa':
          case 'aaa':
            return (
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
          case 'aaaaa':
            return n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
          case 'aaaa':
          default:
            return (
              n.dayPeriod(t, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function(t, e, n, r) {
        return t.setUTCHours(J(n), 0, 0, 0), t
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'b':
          case 'bb':
          case 'bbb':
            return (
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
          case 'bbbbb':
            return n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
          case 'bbbb':
          default:
            return (
              n.dayPeriod(t, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function(t, e, n, r) {
        return t.setUTCHours(J(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'B':
          case 'BB':
          case 'BBB':
            return (
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
          case 'BBBBB':
            return n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
          case 'BBBB':
          default:
            return (
              n.dayPeriod(t, {width: 'wide', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'abbreviated', context: 'formatting'}) ||
              n.dayPeriod(t, {width: 'narrow', context: 'formatting'})
            )
        }
      },
      set: function(t, e, n, r) {
        return t.setUTCHours(J(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'h':
            return G(W.hour12h, t)
          case 'ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 12
      },
      set: function(t, e, n, r) {
        var a = t.getUTCHours() >= 12
        return (
          a && n < 12
            ? t.setUTCHours(n + 12, 0, 0, 0)
            : a || 12 !== n
            ? t.setUTCHours(n, 0, 0, 0)
            : t.setUTCHours(0, 0, 0, 0),
          t
        )
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
    },
    H: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'H':
            return G(W.hour23h, t)
          case 'Ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 23
      },
      set: function(t, e, n, r) {
        return t.setUTCHours(n, 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'K':
            return G(W.hour11h, t)
          case 'Ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function(t, e, n, r) {
        return (
          t.getUTCHours() >= 12 && n < 12
            ? t.setUTCHours(n + 12, 0, 0, 0)
            : t.setUTCHours(n, 0, 0, 0),
          t
        )
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
    },
    k: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'k':
            return G(W.hour24h, t)
          case 'ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 24
      },
      set: function(t, e, n, r) {
        var a = n <= 24 ? n % 24 : n
        return t.setUTCHours(a, 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'm':
            return G(W.minute, t)
          case 'mo':
            return n.ordinalNumber(t, {unit: 'minute'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 59
      },
      set: function(t, e, n, r) {
        return t.setUTCMinutes(n, 0, 0), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function(t, e, n, r) {
        switch (e) {
          case 's':
            return G(W.second, t)
          case 'so':
            return n.ordinalNumber(t, {unit: 'second'})
          default:
            return j(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 0 && e <= 59
      },
      set: function(t, e, n, r) {
        return t.setUTCSeconds(n, 0), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function(t, e, n, r) {
        return j(e.length, t, function(t) {
          return Math.floor(t * Math.pow(10, 3 - e.length))
        })
      },
      set: function(t, e, n, r) {
        return t.setUTCMilliseconds(n), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'X':
            return A(F, t)
          case 'XX':
            return A(Q, t)
          case 'XXXX':
            return A(R, t)
          case 'XXXXX':
            return A(X, t)
          case 'XXX':
          default:
            return A(I, t)
        }
      },
      set: function(t, e, n, r) {
        return e.timestampIsSet ? t : new Date(t.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'x':
            return A(F, t)
          case 'xx':
            return A(Q, t)
          case 'xxxx':
            return A(R, t)
          case 'xxxxx':
            return A(X, t)
          case 'xxx':
          default:
            return A(I, t)
        }
      },
      set: function(t, e, n, r) {
        return e.timestampIsSet ? t : new Date(t.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function(t, e, n, r) {
        return z(t)
      },
      set: function(t, e, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(t, e, n, r) {
        return z(t)
      },
      set: function(t, e, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
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
function st(t, e, n, r) {
  if (arguments.length < 3)
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present')
  var a = String(t),
    i = String(e),
    o = r || {},
    u = o.locale || l
  if (!u.match) throw new RangeError('locale must contain match property')
  var s = u.options && u.options.firstWeekContainsDate,
    c = null == s ? 1 : f(s),
    d = null == o.firstWeekContainsDate ? c : f(o.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var m = u.options && u.options.weekStartsOn,
    y = null == m ? 0 : f(m),
    b = null == o.weekStartsOn ? y : f(o.weekStartsOn)
  if (!(b >= 0 && b <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if ('' === i) return '' === a ? h(n) : new Date(NaN)
  var T,
    D = {firstWeekContainsDate: d, weekStartsOn: b, locale: u},
    M = [{priority: et, set: ct, index: 0}],
    U = i
      .match(rt)
      .map(function(t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, v[e])(t, u.formatLong, D) : t
      })
      .join('')
      .match(nt),
    E = []
  for (T = 0; T < U.length; T++) {
    var q = U[T]
    !o.useAdditionalWeekYearTokens && x(q) && C(q), !o.useAdditionalDayOfYearTokens && k(q) && C(q)
    var S = q[0],
      Y = tt[S]
    if (Y) {
      var P = Y.incompatibleTokens
      if (Array.isArray(P)) {
        for (var H = void 0, O = 0; O < E.length; O++) {
          var B = E[O].token
          if (-1 !== P.indexOf(B) || B === S) {
            H = E[O]
            break
          }
        }
        if (H)
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(H.fullToken, '` and `')
              .concat(q, '` at the same time'),
          )
      } else if ('*' === Y.incompatibleTokens && E.length)
        throw new RangeError(
          "The format string mustn't contain `".concat(q, '` and any other token at the same time'),
        )
      E.push({token: S, fullToken: q})
      var N = Y.parse(a, q, u.match, D)
      if (!N) return new Date(NaN)
      M.push({
        priority: Y.priority,
        set: Y.set,
        validate: Y.validate,
        value: N.value,
        index: M.length,
      }),
        (a = N.rest)
    } else {
      if (S.match(ut))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + S + '`',
        )
      if (
        ("''" === q ? (q = "'") : "'" === S && (q = q.match(at)[1].replace(it, "'")),
        0 !== a.indexOf(q))
      )
        return new Date(NaN)
      a = a.slice(q.length)
    }
  }
  if (a.length > 0 && ot.test(a)) return new Date(NaN)
  var L = M.map(function(t) {
      return t.priority
    })
      .sort(function(t, e) {
        return e - t
      })
      .filter(function(t, e, n) {
        return n.indexOf(t) === e
      })
      .map(function(t) {
        return M.filter(function(e) {
          return e.priority === t
        }).reverse()
      })
      .map(function(t) {
        return t[0]
      }),
    W = h(n)
  if (isNaN(W)) return new Date(NaN)
  var F = g(W, p(W)),
    Q = {}
  for (T = 0; T < L.length; T++) {
    var R = L[T]
    if (R.validate && !R.validate(F, R.value, D)) return new Date(NaN)
    var I = R.set(F, Q, R.value, D)
    I[0] ? ((F = I[0]), w(Q, I[1])) : (F = I)
  }
  return F
}
function ct(t, e) {
  if (e.timestampIsSet) return t
  var n = new Date(0)
  return (
    n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
    n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
    n
  )
}
function dt(t, e) {
  for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r
  return n + r
}
var lt = function(t, e) {
    var n = t.getUTCFullYear(),
      r = n > 0 ? n : 1 - n
    return dt('yy' === e ? r % 100 : r, e.length)
  },
  ft = function(t, e) {
    var n = t.getUTCMonth()
    return 'M' === e ? String(n + 1) : dt(n + 1, 2)
  },
  ht = function(t, e) {
    return dt(t.getUTCDate(), e.length)
  },
  gt = function(t, e) {
    return dt(t.getUTCHours() % 12 || 12, e.length)
  },
  wt = function(t, e) {
    return dt(t.getUTCHours(), e.length)
  },
  mt = function(t, e) {
    return dt(t.getUTCMinutes(), e.length)
  },
  yt = function(t, e) {
    return dt(t.getUTCSeconds(), e.length)
  },
  vt = function(t, e) {
    var n = e.length,
      r = t.getUTCMilliseconds()
    return dt(Math.floor(r * Math.pow(10, n - 3)), e.length)
  },
  bt = 864e5
var pt = 'midnight',
  Tt = 'noon',
  Dt = 'morning',
  kt = 'afternoon',
  xt = 'evening',
  Ct = 'night',
  Mt = {
    G: function(t, e, n) {
      var r = t.getUTCFullYear() > 0 ? 1 : 0
      switch (e) {
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
    y: function(t, e, n) {
      if ('yo' === e) {
        var r = t.getUTCFullYear(),
          a = r > 0 ? r : 1 - r
        return n.ordinalNumber(a, {unit: 'year'})
      }
      return lt(t, e)
    },
    Y: function(t, e, n, r) {
      var a = U(t, r),
        i = a > 0 ? a : 1 - a
      return 'YY' === e
        ? dt(i % 100, 2)
        : 'Yo' === e
        ? n.ordinalNumber(i, {unit: 'year'})
        : dt(i, e.length)
    },
    R: function(t, e) {
      return dt(S(t), e.length)
    },
    u: function(t, e) {
      return dt(t.getUTCFullYear(), e.length)
    },
    Q: function(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'Q':
          return String(r)
        case 'QQ':
          return dt(r, 2)
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
    q: function(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'q':
          return String(r)
        case 'qq':
          return dt(r, 2)
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
    M: function(t, e, n) {
      var r = t.getUTCMonth()
      switch (e) {
        case 'M':
        case 'MM':
          return ft(t, e)
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
    L: function(t, e, n) {
      var r = t.getUTCMonth()
      switch (e) {
        case 'L':
          return String(r + 1)
        case 'LL':
          return dt(r + 1, 2)
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
    w: function(t, e, n, r) {
      var a = O(t, r)
      return 'wo' === e ? n.ordinalNumber(a, {unit: 'week'}) : dt(a, e.length)
    },
    I: function(t, e, n) {
      var r = P(t)
      return 'Io' === e ? n.ordinalNumber(r, {unit: 'week'}) : dt(r, e.length)
    },
    d: function(t, e, n) {
      return 'do' === e ? n.ordinalNumber(t.getUTCDate(), {unit: 'date'}) : ht(t, e)
    },
    D: function(t, e, n) {
      var r = (function(t) {
        if (arguments.length < 1)
          throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
        var e = h(t),
          n = e.getTime()
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        var r = n - e.getTime()
        return Math.floor(r / bt) + 1
      })(t)
      return 'Do' === e ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : dt(r, e.length)
    },
    E: function(t, e, n) {
      var r = t.getUTCDay()
      switch (e) {
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
    e: function(t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7
      switch (e) {
        case 'e':
          return String(i)
        case 'ee':
          return dt(i, 2)
        case 'eo':
          return n.ordinalNumber(i, {unit: 'day'})
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
    c: function(t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7
      switch (e) {
        case 'c':
          return String(i)
        case 'cc':
          return dt(i, e.length)
        case 'co':
          return n.ordinalNumber(i, {unit: 'day'})
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
    i: function(t, e, n) {
      var r = t.getUTCDay(),
        a = 0 === r ? 7 : r
      switch (e) {
        case 'i':
          return String(a)
        case 'ii':
          return dt(a, e.length)
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
    a: function(t, e, n) {
      var r = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
      switch (e) {
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
    b: function(t, e, n) {
      var r,
        a = t.getUTCHours()
      switch (((r = 12 === a ? Tt : 0 === a ? pt : a / 12 >= 1 ? 'pm' : 'am'), e)) {
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
    B: function(t, e, n) {
      var r,
        a = t.getUTCHours()
      switch (((r = a >= 17 ? xt : a >= 12 ? kt : a >= 4 ? Dt : Ct), e)) {
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
    h: function(t, e, n) {
      if ('ho' === e) {
        var r = t.getUTCHours() % 12
        return 0 === r && (r = 12), n.ordinalNumber(r, {unit: 'hour'})
      }
      return gt(t, e)
    },
    H: function(t, e, n) {
      return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), {unit: 'hour'}) : wt(t, e)
    },
    K: function(t, e, n) {
      var r = t.getUTCHours() % 12
      return 'Ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : dt(r, e.length)
    },
    k: function(t, e, n) {
      var r = t.getUTCHours()
      return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : dt(r, e.length)
    },
    m: function(t, e, n) {
      return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), {unit: 'minute'}) : mt(t, e)
    },
    s: function(t, e, n) {
      return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), {unit: 'second'}) : yt(t, e)
    },
    S: function(t, e) {
      return vt(t, e)
    },
    X: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (e) {
        case 'X':
          return Et(a)
        case 'XXXX':
        case 'XX':
          return qt(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return qt(a, ':')
      }
    },
    x: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'x':
          return Et(a)
        case 'xxxx':
        case 'xx':
          return qt(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return qt(a, ':')
      }
    },
    O: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Ut(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + qt(a, ':')
      }
    },
    z: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Ut(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + qt(a, ':')
      }
    },
    t: function(t, e, n, r) {
      var a = r._originalDate || t
      return dt(Math.floor(a.getTime() / 1e3), e.length)
    },
    T: function(t, e, n, r) {
      return dt((r._originalDate || t).getTime(), e.length)
    },
  }
function Ut(t, e) {
  var n = t > 0 ? '-' : '+',
    r = Math.abs(t),
    a = Math.floor(r / 60),
    i = r % 60
  if (0 === i) return n + String(a)
  var o = e || ''
  return n + String(a) + o + dt(i, 2)
}
function Et(t, e) {
  return t % 60 == 0 ? (t > 0 ? '-' : '+') + dt(Math.abs(t) / 60, 2) : qt(t, e)
}
function qt(t, e) {
  var n = e || '',
    r = t > 0 ? '-' : '+',
    a = Math.abs(t)
  return r + dt(Math.floor(a / 60), 2) + n + dt(a % 60, 2)
}
var St = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Yt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Pt = /^'([^]*?)'?$/,
  Ht = /''/g,
  Ot = /[a-zA-Z]/
function Bt(t, e, n) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = String(e),
    a = n || {},
    i = a.locale || l,
    o = i.options && i.options.firstWeekContainsDate,
    u = null == o ? 1 : f(o),
    s = null == a.firstWeekContainsDate ? u : f(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = i.options && i.options.weekStartsOn,
    d = null == c ? 0 : f(c),
    w = null == a.weekStartsOn ? d : f(a.weekStartsOn)
  if (!(w >= 0 && w <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!i.localize) throw new RangeError('locale must contain localize property')
  if (!i.formatLong) throw new RangeError('locale must contain formatLong property')
  var m = h(t)
  if (
    !(function(t) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var e = h(t)
      return !isNaN(e)
    })(m)
  )
    throw new RangeError('Invalid time value')
  var y = g(m, p(m)),
    b = {firstWeekContainsDate: s, weekStartsOn: w, locale: i, _originalDate: m}
  return r
    .match(Yt)
    .map(function(t) {
      var e = t[0]
      return 'p' === e || 'P' === e ? (0, v[e])(t, i.formatLong, b) : t
    })
    .join('')
    .match(St)
    .map(function(t) {
      if ("''" === t) return "'"
      var e = t[0]
      if ("'" === e) return t.match(Pt)[1].replace(Ht, "'")
      var n = Mt[e]
      if (n)
        return (
          !a.useAdditionalWeekYearTokens && x(t) && C(t),
          !a.useAdditionalDayOfYearTokens && k(t) && C(t),
          n(y, t, i.localize, b)
        )
      if (e.match(Ot))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + e + '`',
        )
      return t
    })
    .join('')
}
function Nt(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = h(t),
    r = f(e)
  return n.setDate(n.getDate() + r), n
}
function Lt(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = t || {},
    r = h(n.start),
    a = h(n.end).getTime()
  if (!(r.getTime() <= a)) throw new RangeError('Invalid interval')
  var i = [],
    o = r
  o.setHours(0, 0, 0, 0)
  var u = e && 'step' in e ? Number(e.step) : 1
  if (u < 1 || isNaN(u)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; o.getTime() <= a; ) i.push(h(o)), o.setDate(o.getDate() + u), o.setHours(0, 0, 0, 0)
  return i
}
function Wt(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = h(t),
    s = u.getDay(),
    c = 6 + (s < o ? -7 : 0) - (s - o)
  return u.setDate(u.getDate() + c), u.setHours(23, 59, 59, 999), u
}
function Ft(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = h(t)
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}
function Qt(t, e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = h(t),
    s = u.getDay(),
    c = (s < o ? 7 : 0) + s - o
  return u.setDate(u.getDate() - c), u.setHours(0, 0, 0, 0), u
}
function Rt(t) {
  var e = void 0 === t ? {} : t,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    a = e.weekdayLabelFormat,
    i =
      void 0 === a
        ? function(t) {
            return Bt(t, 'iiiiii')
          }
        : a,
    o = new Date()
  return Lt({start: Nt(Qt(o), r), end: Nt(Wt(o), r)}).reduce(function(t, e) {
    return t.push(i(e)), t
  }, [])
}
function It(t) {
  var e = t.year,
    n = t.month,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = t.dayLabelFormat,
    o =
      void 0 === i
        ? function(t) {
            return Bt(t, 'dd')
          }
        : i,
    u = new Date(e, n),
    s = Ft(u),
    c = (function(t) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(t).getDay()
    })(s),
    d = (function(t) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      var e = h(t),
        n = e.getMonth()
      return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e
    })(u)
  return (function() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length
    var r = Array(t),
      a = 0
    for (e = 0; e < n; e++)
      for (var i = arguments[e], o = 0, u = i.length; o < u; o++, a++) r[a] = i[o]
    return r
  })(
    Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
    Lt({start: s, end: d}).map(function(t) {
      return {date: t, dayLabel: o(t)}
    }),
  )
}
var Xt = function(t) {
    return Bt(t, 'dd')
  },
  Gt = function(t) {
    return Bt(t, 'eeeeee')
  },
  At = function(t) {
    return Bt(t, 'MMMM yyyy')
  }
function zt(e) {
  var n = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    i = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    u = void 0 === o ? Xt : o,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? Gt : s,
    d = e.monthLabelFormat,
    l = void 0 === d ? At : d
  return {
    days: t(
      function() {
        return It({year: n, month: r, firstDayOfWeek: i, dayLabelFormat: u})
      },
      [n, r, i, u],
    ),
    weekdayLabels: t(
      function() {
        return Rt({firstDayOfWeek: i, weekdayLabelFormat: c})
      },
      [i, c],
    ),
    monthLabel: l(new Date(n, r)),
  }
}
function jt(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = h(t),
    r = h(e)
  return n.getTime() < r.getTime()
}
function Kt(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = h(t),
    r = h(e)
  return n.getTime() > r.getTime()
}
function Jt(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = e || {},
    r = h(t).getTime(),
    a = h(n.start).getTime(),
    i = h(n.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return r >= a && r <= i
}
function Zt(t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var e = h(t)
  return e.setHours(0, 0, 0, 0), e
}
function _t(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = Zt(t),
    r = Zt(e)
  return n.getTime() === r.getTime()
}
function $t(t, e) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = h(t),
    r = f(e),
    a = n.getMonth() + r,
    i = new Date(0)
  i.setFullYear(n.getFullYear(), a, 1), i.setHours(0, 0, 0, 0)
  var o = (function(t) {
    if (arguments.length < 1)
      throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
    var e = h(t),
      n = e.getFullYear(),
      r = e.getMonth(),
      a = new Date(0)
    return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
  })(i)
  return n.setMonth(a, Math.min(o, n.getDate())), n
}
function Vt(t, e, n) {
  return !(!e || !n) && Jt(t, {start: e, end: n})
}
function te(t, e, n) {
  return !!((e && _t(t, e)) || (n && _t(t, n)))
}
function ee(t) {
  var e = t.date,
    n = t.minBookingDate,
    r = t.maxBookingDate,
    a = t.isDateBlockedFn,
    i = t.startDate,
    o = t.endDate,
    u = t.minBookingDays,
    s = void 0 === u ? 1 : u,
    c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    d = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    (c && jt(e, c)) ||
    (d && Kt(e, d)) ||
    (i && !o && s > 1 && Jt(e, {start: i, end: Nt(i, s - 2)})) ||
    (a && a(e))
  )
}
function ne(t) {
  var e = Ft(t)
  return {
    year: (function(t) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(t).getFullYear()
    })(e),
    month: (function(t) {
      if (arguments.length < 1)
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
      return h(t).getMonth()
    })(e),
    date: e,
  }
}
function re() {
  return ne(Zt(Date.now()))
}
function ae(t, e) {
  var n = e ? ne(e) : re(),
    r = n.date,
    a = [n]
  return (
    t > 1 &&
      (a = Array.from(Array(t - 1).keys()).reduce(function(t) {
        return (r = $t(t[t.length - 1].date, 1)), t.concat([ne(r)])
      }, a)),
    a
  )
}
function ie(t, e, n) {
  var r = t[n > 0 ? t.length - 1 : 0].date
  return Array.from(Array(e).keys()).reduce(function(t) {
    return (
      (r = 0 === t.length ? $t(r, n) : $t(r, n >= 0 ? 1 : -1)),
      n > 0 ? t.concat([ne(r)]) : [ne(r)].concat(t)
    )
  }, [])
}
function oe(t, e, n) {
  return t && 'string' == typeof e ? Bt(t, e) : t && 'function' == typeof e ? e(t) : n
}
function ue(t) {
  var e = t.startDate,
    n = t.endDate,
    r = t.isDateBlocked,
    a = t.minBookingDays,
    i = t.exactMinBookingDays,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = !o || !jt(e, Nt(o, -1)),
    c = !u || !Kt(Nt(e, a - 1), u)
  return (
    !(!e || 1 !== a || n || r(e)) ||
    ((e && a > 1 && !n && !i) || (e && a > 0 && i && s && c) || (e && a > 0 && i && !o && !u)
      ? Lt({start: e, end: Nt(e, a - 1)}).reduce(function(t, e) {
          return t ? !r(e) : t
        }, !0)
      : !(!e || !n || i) &&
        (!jt(n, Nt(e, a - 1)) &&
          Lt({start: e, end: n}).reduce(function(t, e) {
            return t ? !r(e) : t
          }, !0)))
  )
}
var se = 'startDate',
  ce = 'endDate'
function de(t) {
  var a = t.startDate,
    i = t.endDate,
    o = t.focusedInput,
    u = t.minBookingDate,
    s = t.maxBookingDate,
    c = t.onDatesChange,
    d = t.exactMinBookingDays,
    l = void 0 !== d && d,
    f = t.minBookingDays,
    h = void 0 === f ? 1 : f,
    g = t.numberOfMonths,
    w = void 0 === g ? 2 : g,
    m = t.firstDayOfWeek,
    y = void 0 === m ? 1 : m,
    v = t.isDateBlocked,
    b =
      void 0 === v
        ? function() {
            return !1
          }
        : v,
    p = e(function() {
      return ae(w, a)
    }),
    T = p[0],
    D = p[1],
    k = e(null),
    x = k[0],
    C = k[1],
    M = e(a),
    U = M[0],
    E = M[1],
    q = n(
      function(t) {
        E(t), (!U || (U && !_t(t, U))) && D(ae(w, t))
      },
      [E, D, w, U],
    ),
    S = n(
      function(t) {
        return Vt(t, a, i)
      },
      [a, i],
    ),
    Y = n(
      function(t) {
        return te(t, a, i)
      },
      [a, i],
    ),
    P = n(
      function(t) {
        return ee({
          date: t,
          minBookingDate: u,
          maxBookingDate: s,
          startDate: a,
          endDate: i,
          minBookingDays: h,
          isDateBlockedFn: b,
        })
      },
      [u, s, a, i, h, b],
    ),
    H = n(
      function(t) {
        return !!U && _t(t, U)
      },
      [U],
    ),
    O = n(
      function(t) {
        return (function(t) {
          var e = t.date,
            n = t.startDate,
            r = t.endDate,
            a = t.isDateBlocked,
            i = t.hoveredDate,
            o = t.minBookingDays,
            u = t.exactMinBookingDays
          return i && o > 1 && u && Jt(e, {start: i, end: Nt(i, o - 1)})
            ? Lt({start: i, end: Nt(i, o - 1)}).reduce(function(t, e) {
                return t ? !a(e) : t
              }, !0)
            : n && !r && i && Jt(e, {start: n, end: Nt(n, o - 1)}) && _t(n, i) && o > 1
            ? Lt({start: n, end: Nt(n, o - 1)}).reduce(function(t, e) {
                return t ? !a(e) : t
              }, !0)
            : !(!n || r || !i || jt(i, n) || !Jt(e, {start: n, end: i})) &&
              Lt({start: n, end: i}).reduce(function(t, e) {
                return t ? !a(e) : t
              }, !0)
        })({
          date: t,
          hoveredDate: x,
          startDate: a,
          endDate: i,
          minBookingDays: h,
          exactMinBookingDays: l,
          isDateBlocked: b,
        })
      },
      [x, a, i, h, l, b],
    )
  function B(t) {
    if (
      ('ArrowRight' === t.key ||
        'ArrowLeft' === t.key ||
        'ArrowDown' === t.key ||
        'ArrowUp' === t.key) &&
      !U
    ) {
      var e = T[0]
      q(e.date), D(ae(w, e.date))
    }
  }
  return (
    r(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', B),
        function() {
          window.removeEventListener('keydown', B)
        }
      )
    }),
    {
      firstDayOfWeek: y,
      activeMonths: T,
      isDateSelected: S,
      isDateHovered: O,
      isFirstOrLastSelectedDate: Y,
      isDateBlocked: P,
      numberOfMonths: w,
      isDateFocused: H,
      focusedDate: U,
      hoveredDate: x,
      onResetDates: function() {
        c({startDate: null, endDate: null, focusedInput: se})
      },
      onDateHover: function(t) {
        if (t) {
          if (t) {
            var e = !P(t) || (a && _t(t, a)),
              n = !u || !jt(t, Nt(u, -1)),
              r = !s || !Kt(t, s),
              o = Nt(t, h - 1),
              c = !u || !jt(o, u),
              d = !s || !Kt(o, s),
              f = l && h > 1 && n && r && c && d,
              g = a && !i && !l && n && r,
              w = !(h > 1 && a) || Jt(t, {start: a, end: Nt(a, h - 2)}),
              m = a && _t(t, a) && w
            e && (f || g || m) ? C(t) : null !== x && C(null)
          }
        } else C(null)
      },
      onDateSelect: function(t) {
        ;(o === ce || o === se) &&
        h > 0 &&
        l &&
        ue({
          minBookingDays: h,
          exactMinBookingDays: l,
          minBookingDate: u,
          maxBookingDate: s,
          isDateBlocked: b,
          startDate: t,
          endDate: null,
        })
          ? c({startDate: t, endDate: Nt(t, h - 1), focusedInput: null})
          : ((o === ce && a && jt(t, a)) || (o === se && i && Kt(t, i))) &&
            !l &&
            ue({minBookingDays: h, isDateBlocked: b, startDate: t, endDate: null})
          ? c({endDate: null, startDate: t, focusedInput: ce})
          : o === se && !l && ue({minBookingDays: h, isDateBlocked: b, endDate: i, startDate: t})
          ? c({endDate: i, startDate: t, focusedInput: ce})
          : o === se && !l && ue({minBookingDays: h, isDateBlocked: b, endDate: null, startDate: t})
          ? c({endDate: null, startDate: t, focusedInput: ce})
          : o === ce &&
            a &&
            !jt(t, a) &&
            !l &&
            ue({minBookingDays: h, isDateBlocked: b, startDate: a, endDate: t}) &&
            c({startDate: a, endDate: t, focusedInput: null}),
          o === ce || (U && (!U || _t(t, U))) || D(ae(w, t))
      },
      onDateFocus: q,
      goToPreviousMonths: function() {
        D(ie(T, w, -1)), E(null)
      },
      goToNextMonths: function() {
        D(ie(T, w, 1)), E(null)
      },
      goToPreviousYear: function() {
        D(ie(T, w, -(12 - w + 1))), E(null)
      },
      goToNextYear: function() {
        D(ie(T, w, 12 - w + 1)), E(null)
      },
    }
  )
}
function le(t) {
  var e = t.date,
    a = t.focusedDate,
    i = t.isDateSelected,
    o = t.isDateFocused,
    u = t.isFirstOrLastSelectedDate,
    s = t.isDateHovered,
    c = t.isDateBlocked,
    d = t.onDateSelect,
    l = t.onDateFocus,
    f = t.onDateHover,
    h = t.dayRef,
    g = n(
      function() {
        return d(e)
      },
      [e, d],
    ),
    w = n(
      function() {
        return f(e)
      },
      [e, f],
    )
  r(
    function() {
      h && h.current && o(e) && h.current.focus()
    },
    [h, e, o],
  )
  var m = c(e) && !s(e)
  return {
    tabIndex: null === a || o(e) ? 0 : -1,
    isSelected: i(e),
    isSelectedStartOrEnd: u(e),
    isWithinHoverRange: s(e),
    disabledDate: m,
    onKeyDown: function(t) {
      'ArrowRight' === t.key
        ? l(Nt(e, 1))
        : 'ArrowLeft' === t.key
        ? l(Nt(e, -1))
        : 'ArrowUp' === t.key
        ? l(Nt(e, -7))
        : 'ArrowDown' === t.key && l(Nt(e, 7))
    },
    onClick: m ? function() {} : g,
    onMouseEnter: w,
  }
}
export {
  ce as END_DATE,
  se as START_DATE,
  Xt as dayLabelFormat,
  re as getCurrentYearMonthAndDate,
  ne as getDateMonthAndYear,
  It as getDays,
  ae as getInitialMonths,
  oe as getInputValue,
  Rt as getWeekdayLabels,
  ee as isDateBlocked,
  Vt as isDateSelected,
  te as isFirstOrLastSelectedDate,
  At as monthLabelFormat,
  st as parseDate,
  de as useDatepicker,
  le as useDay,
  zt as useMonth,
  Gt as weekdayLabelFormat,
}
