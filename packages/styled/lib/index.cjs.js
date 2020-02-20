'use strict'
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', {value: !0})
var t = require('react'),
  r = e(t),
  n = require('styled-components'),
  a = e(n),
  o = {
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
      n = r.width ? String(r.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
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
function u(e) {
  return function(t, r) {
    var n = String(t),
      a = r || {},
      o = a.width,
      i = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      s = n.match(i)
    if (!s) return null
    var d,
      c = s[0],
      u = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (d =
        '[object Array]' === Object.prototype.toString.call(u)
          ? (function(e, t) {
              for (var r = 0; r < e.length; r++) if (t(e[r])) return r
            })(u, function(e) {
              return e.test(n)
            })
          : (function(e, t) {
              for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r
            })(u, function(e) {
              return e.test(n)
            })),
      (d = e.valueCallback ? e.valueCallback(d) : d),
      {value: (d = a.valueCallback ? a.valueCallback(d) : d), rest: n.slice(c.length)}
    )
  }
}
var l,
  p = {
    code: 'en-US',
    formatDistance: function(e, t, r) {
      var n
      return (
        (r = r || {}),
        (n =
          'string' == typeof o[e] ? o[e] : 1 === t ? o[e].one : o[e].other.replace('{{count}}', t)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
      )
    },
    formatLong: s,
    formatRelative: function(e, t, r, n) {
      return d[e]
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
        argumentCallback: function(e) {
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
          valueCallback: function(e) {
            return parseInt(e, 10)
          },
        }),
        function(e, t) {
          var r = String(e),
            n = t || {},
            a = r.match(l.matchPattern)
          if (!a) return null
          var o = a[0],
            i = r.match(l.parsePattern)
          if (!i) return null
          var s = l.valueCallback ? l.valueCallback(i[0]) : i[0]
          return {value: (s = n.valueCallback ? n.valueCallback(s) : s), rest: r.slice(o.length)}
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
        valueCallback: function(e) {
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
      e + ' argument' + e > 1 ? 's' : ' required, but only ' + t.length + ' present',
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
  var r = g(e).getTime(),
    n = f(t)
  return new Date(r + n)
}
function y(e, t) {
  h(2, arguments)
  var r = f(t)
  return m(e, -r)
}
function b(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var r in (t = t || {})) t.hasOwnProperty(r) && (e[r] = t[r])
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
  P: function(e, t) {
    var r,
      n = e.match(/(P+)(p+)?/),
      a = n[1],
      o = n[2]
    if (!o) return v(e, t)
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
    return r.replace('{{date}}', v(a, t)).replace('{{time}}', w(o, t))
  },
}
function k(e) {
  var t = new Date(e.getTime()),
    r = Math.ceil(t.getTimezoneOffset())
  return t.setSeconds(0, 0), 6e4 * r + (t.getTime() % 6e4)
}
var x = ['D', 'DD'],
  C = ['YY', 'YYYY']
function T(e) {
  return -1 !== x.indexOf(e)
}
function S(e) {
  return -1 !== C.indexOf(e)
}
function B(e) {
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
  h(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getUTCDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setUTCDate(s.getUTCDate() - c), s.setUTCHours(0, 0, 0, 0), s
}
function R(e, t) {
  h(1, arguments)
  var r = g(e, t),
    n = r.getUTCFullYear(),
    a = t || {},
    o = a.locale,
    i = o && o.options && o.options.firstWeekContainsDate,
    s = null == i ? 1 : f(i),
    d = null == a.firstWeekContainsDate ? s : f(a.firstWeekContainsDate)
  if (!(d >= 1 && d <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var c = new Date(0)
  c.setUTCFullYear(n + 1, 0, d), c.setUTCHours(0, 0, 0, 0)
  var u = M(c, t),
    l = new Date(0)
  l.setUTCFullYear(n, 0, d), l.setUTCHours(0, 0, 0, 0)
  var p = M(l, t)
  return r.getTime() >= u.getTime() ? n + 1 : r.getTime() >= p.getTime() ? n : n - 1
}
function L(e, t, r) {
  h(2, arguments)
  var n = r || {},
    a = n.locale,
    o = a && a.options && a.options.weekStartsOn,
    i = null == o ? 0 : f(o),
    s = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(s >= 0 && s <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var d = g(e),
    c = f(t),
    u = d.getUTCDay(),
    l = c % 7,
    p = (l + 7) % 7,
    m = (p < s ? 7 : 0) + c - u
  return d.setUTCDate(d.getUTCDate() + m), d
}
function W(e) {
  h(1, arguments)
  var t = 1,
    r = g(e),
    n = r.getUTCDay(),
    a = (n < t ? 7 : 0) + n - t
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r
}
function E(e) {
  h(1, arguments)
  var t = g(e),
    r = t.getUTCFullYear(),
    n = new Date(0)
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var a = W(n),
    o = new Date(0)
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0)
  var i = W(o)
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1
}
function F(e) {
  h(1, arguments)
  var t = E(e),
    r = new Date(0)
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var n = W(r)
  return n
}
function H(e) {
  h(1, arguments)
  var t = g(e),
    r = W(t).getTime() - F(t).getTime()
  return Math.round(r / 6048e5) + 1
}
function P(e, t) {
  h(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.firstWeekContainsDate,
    o = null == a ? 1 : f(a),
    i = null == r.firstWeekContainsDate ? o : f(r.firstWeekContainsDate),
    s = R(e, t),
    d = new Date(0)
  d.setUTCFullYear(s, 0, i), d.setUTCHours(0, 0, 0, 0)
  var c = M(d, t)
  return c
}
function O(e, t) {
  h(1, arguments)
  var r = g(e),
    n = M(r, t).getTime() - P(r, t).getTime()
  return Math.round(n / 6048e5) + 1
}
var I = /^(1[0-2]|0?\d)/,
  z = /^(3[0-1]|[0-2]?\d)/,
  U = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  N = /^(5[0-3]|[0-4]?\d)/,
  Y = /^(2[0-3]|[0-1]?\d)/,
  A = /^(2[0-4]|[0-1]?\d)/,
  q = /^(1[0-1]|0?\d)/,
  G = /^(1[0-2]|0?\d)/,
  j = /^[0-5]?\d/,
  X = /^[0-5]?\d/,
  Q = /^\d/,
  V = /^\d{1,2}/,
  Z = /^\d{1,3}/,
  K = /^\d{1,4}/,
  _ = /^-?\d+/,
  J = /^-?\d/,
  $ = /^-?\d{1,2}/,
  ee = /^-?\d{1,3}/,
  te = /^-?\d{1,4}/,
  re = /^([+-])(\d{2})(\d{2})?|Z/,
  ne = /^([+-])(\d{2})(\d{2})|Z/,
  ae = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  oe = /^([+-])(\d{2}):(\d{2})|Z/,
  ie = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function se(e, t, r) {
  var n = t.match(e)
  if (!n) return null
  var a = parseInt(n[0], 10)
  return {value: r ? r(a) : a, rest: t.slice(n[0].length)}
}
function de(e, t) {
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
function ce(e, t) {
  return se(_, e, t)
}
function ue(e, t, r) {
  switch (e) {
    case 1:
      return se(Q, t, r)
    case 2:
      return se(V, t, r)
    case 3:
      return se(Z, t, r)
    case 4:
      return se(K, t, r)
    default:
      return se(new RegExp('^\\d{1,' + e + '}'), t, r)
  }
}
function le(e, t, r) {
  switch (e) {
    case 1:
      return se(J, t, r)
    case 2:
      return se($, t, r)
    case 3:
      return se(ee, t, r)
    case 4:
      return se(te, t, r)
    default:
      return se(new RegExp('^-?\\d{1,' + e + '}'), t, r)
  }
}
function pe(e) {
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
function fe(e, t) {
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
var he = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ge = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function me(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var ye = {
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
            return ue(4, e, a)
          case 'yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return ue(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = e.getUTCFullYear()
        if (r.isTwoDigitYear) {
          var o = fe(r.year, a)
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
            return ue(4, e, a)
          case 'Yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return ue(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = R(e, n)
        if (r.isTwoDigitYear) {
          var o = fe(r.year, a)
          return e.setUTCFullYear(o, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), M(e, n)
        }
        var i = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(i, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), M(e, n)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(e, t, r, n) {
        return le('R' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, n) {
        var a = new Date(0)
        return a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0), W(a)
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
        return le('u' === t ? 4 : t.length, e)
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
            return ue(t.length, e)
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
            return ue(t.length, e)
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
            return se(I, e, a)
          case 'MM':
            return ue(2, e, a)
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
            return se(I, e, a)
          case 'LL':
            return ue(2, e, a)
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
            return se(N, e)
          case 'wo':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return ue(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return M(
          (function(e, t, r) {
            h(2, arguments)
            var n = g(e),
              a = f(t),
              o = O(n, r) - a
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
            return se(N, e)
          case 'Io':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return ue(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return W(
          (function(e, t) {
            h(2, arguments)
            var r = g(e),
              n = f(t),
              a = H(r) - n
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
            return se(z, e)
          case 'do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return ue(t.length, e)
        }
      },
      validate: function(e, t, r) {
        var n = me(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return n ? t >= 1 && t <= ge[a] : t >= 1 && t <= he[a]
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
            return se(U, e)
          case 'Do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return ue(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return me(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
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
        return (e = L(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return ue(t.length, e, a)
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
        return (e = L(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return ue(t.length, e, a)
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
        return (e = L(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return ue(t.length, e)
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
            h(2, arguments)
            var r = f(t)
            r % 7 == 0 && (r -= 7)
            var n = 1,
              a = g(e),
              o = a.getUTCDay(),
              i = r % 7,
              s = (i + 7) % 7,
              d = (s < n ? 7 : 0) + r - o
            return a.setUTCDate(a.getUTCDate() + d), a
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
        return e.setUTCHours(pe(r), 0, 0, 0), e
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
        return e.setUTCHours(pe(r), 0, 0, 0), e
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
        return e.setUTCHours(pe(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'h':
            return se(G, e)
          case 'ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ue(t.length, e)
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
            return se(Y, e)
          case 'Ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ue(t.length, e)
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
            return se(q, e)
          case 'Ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ue(t.length, e)
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
            return se(A, e)
          case 'ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return ue(t.length, e)
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
            return se(j, e)
          case 'mo':
            return r.ordinalNumber(e, {unit: 'minute'})
          default:
            return ue(t.length, e)
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
            return se(X, e)
          case 'so':
            return r.ordinalNumber(e, {unit: 'second'})
          default:
            return ue(t.length, e)
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
        return ue(t.length, e, function(e) {
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
            return de(re, e)
          case 'XX':
            return de(ne, e)
          case 'XXXX':
            return de(ae, e)
          case 'XXXXX':
            return de(ie, e)
          case 'XXX':
          default:
            return de(oe, e)
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
            return de(re, e)
          case 'xx':
            return de(ne, e)
          case 'xxxx':
            return de(ae, e)
          case 'xxxxx':
            return de(ie, e)
          case 'xxx':
          default:
            return de(oe, e)
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
        return ce(e)
      },
      set: function(e, t, r, n) {
        return [new Date(1e3 * r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(e, t, r, n) {
        return ce(e)
      },
      set: function(e, t, r, n) {
        return [new Date(r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  be = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  ve = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  we = /^'([^]*?)'?$/,
  De = /''/g,
  ke = /\S/,
  xe = /[a-zA-Z]/
function Ce(e, t) {
  if (t.timestampIsSet) return e
  var r = new Date(0)
  return (
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    r
  )
}
function Te(e) {
  return e.match(we)[1].replace(De, "'")
}
function Se(e) {
  h(1, arguments)
  var t = g(e)
  return !isNaN(t)
}
function Be(e, t) {
  for (var r = e < 0 ? '-' : '', n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return r + n
}
var Me = {
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
      return Be('yy' === t ? n % 100 : n, t.length)
    })(e, t)
  },
  Y: function(e, t, r, n) {
    var a = R(e, n),
      o = a > 0 ? a : 1 - a
    return 'YY' === t
      ? Be(o % 100, 2)
      : 'Yo' === t
      ? r.ordinalNumber(o, {unit: 'year'})
      : Be(o, t.length)
  },
  R: function(e, t) {
    return Be(E(e), t.length)
  },
  u: function(e, t) {
    return Be(e.getUTCFullYear(), t.length)
  },
  Q: function(e, t, r) {
    var n = Math.ceil((e.getUTCMonth() + 1) / 3)
    switch (t) {
      case 'Q':
        return String(n)
      case 'QQ':
        return Be(n, 2)
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
        return Be(n, 2)
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
          return 'M' === t ? String(r + 1) : Be(r + 1, 2)
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
        return Be(n + 1, 2)
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
    var a = O(e, n)
    return 'wo' === t ? r.ordinalNumber(a, {unit: 'week'}) : Be(a, t.length)
  },
  I: function(e, t, r) {
    var n = H(e)
    return 'Io' === t ? r.ordinalNumber(n, {unit: 'week'}) : Be(n, t.length)
  },
  d: function(e, t, r) {
    return 'do' === t
      ? r.ordinalNumber(e.getUTCDate(), {unit: 'date'})
      : (function(e, t) {
          return Be(e.getUTCDate(), t.length)
        })(e, t)
  },
  D: function(e, t, r) {
    var n = (function(e) {
      h(1, arguments)
      var t = g(e),
        r = t.getTime()
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      var n = t.getTime(),
        a = r - n
      return Math.floor(a / 864e5) + 1
    })(e)
    return 'Do' === t ? r.ordinalNumber(n, {unit: 'dayOfYear'}) : Be(n, t.length)
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
        return Be(o, 2)
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
        return Be(o, t.length)
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
        return Be(a, t.length)
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
      return Be(e.getUTCHours() % 12 || 12, t.length)
    })(e, t)
  },
  H: function(e, t, r) {
    return 'Ho' === t
      ? r.ordinalNumber(e.getUTCHours(), {unit: 'hour'})
      : (function(e, t) {
          return Be(e.getUTCHours(), t.length)
        })(e, t)
  },
  K: function(e, t, r) {
    var n = e.getUTCHours() % 12
    return 'Ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : Be(n, t.length)
  },
  k: function(e, t, r) {
    var n = e.getUTCHours()
    return 0 === n && (n = 24), 'ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : Be(n, t.length)
  },
  m: function(e, t, r) {
    return 'mo' === t
      ? r.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'})
      : (function(e, t) {
          return Be(e.getUTCMinutes(), t.length)
        })(e, t)
  },
  s: function(e, t, r) {
    return 'so' === t
      ? r.ordinalNumber(e.getUTCSeconds(), {unit: 'second'})
      : (function(e, t) {
          return Be(e.getUTCSeconds(), t.length)
        })(e, t)
  },
  S: function(e, t) {
    return (function(e, t) {
      var r = t.length,
        n = e.getUTCMilliseconds()
      return Be(Math.floor(n * Math.pow(10, r - 3)), t.length)
    })(e, t)
  },
  X: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    if (0 === a) return 'Z'
    switch (t) {
      case 'X':
        return Le(a)
      case 'XXXX':
      case 'XX':
        return We(a)
      case 'XXXXX':
      case 'XXX':
      default:
        return We(a, ':')
    }
  },
  x: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'x':
        return Le(a)
      case 'xxxx':
      case 'xx':
        return We(a)
      case 'xxxxx':
      case 'xxx':
      default:
        return We(a, ':')
    }
  },
  O: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + Re(a, ':')
      case 'OOOO':
      default:
        return 'GMT' + We(a, ':')
    }
  },
  z: function(e, t, r, n) {
    var a = (n._originalDate || e).getTimezoneOffset()
    switch (t) {
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + Re(a, ':')
      case 'zzzz':
      default:
        return 'GMT' + We(a, ':')
    }
  },
  t: function(e, t, r, n) {
    var a = n._originalDate || e
    return Be(Math.floor(a.getTime() / 1e3), t.length)
  },
  T: function(e, t, r, n) {
    return Be((n._originalDate || e).getTime(), t.length)
  },
}
function Re(e, t) {
  var r = e > 0 ? '-' : '+',
    n = Math.abs(e),
    a = Math.floor(n / 60),
    o = n % 60
  if (0 === o) return r + String(a)
  var i = t || ''
  return r + String(a) + i + Be(o, 2)
}
function Le(e, t) {
  return e % 60 == 0 ? (e > 0 ? '-' : '+') + Be(Math.abs(e) / 60, 2) : We(e, t)
}
function We(e, t) {
  var r = t || '',
    n = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return n + Be(Math.floor(a / 60), 2) + r + Be(a % 60, 2)
}
var Ee = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Fe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  He = /^'([^]*?)'?$/,
  Pe = /''/g,
  Oe = /[a-zA-Z]/
function Ie(e, t, r) {
  h(2, arguments)
  var n = String(t),
    a = r || {},
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
  if (!Se(m)) throw new RangeError('Invalid time value')
  var b = k(m),
    v = y(m, b),
    w = {firstWeekContainsDate: d, weekStartsOn: l, locale: o, _originalDate: m},
    x = n
      .match(Fe)
      .map(function(e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, D[t])(e, o.formatLong, w) : e
      })
      .join('')
      .match(Ee)
      .map(function(e) {
        if ("''" === e) return "'"
        var t = e[0]
        if ("'" === t) return ze(e)
        var r = Me[t]
        if (r)
          return (
            !a.useAdditionalWeekYearTokens && S(e) && B(e),
            !a.useAdditionalDayOfYearTokens && T(e) && B(e),
            r(v, e, o.localize, w)
          )
        if (t.match(Oe))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + t + '`',
          )
        return e
      })
      .join('')
  return x
}
function ze(e) {
  return e.match(He)[1].replace(Pe, "'")
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function Ue(
  e,
  t,
) {
  h(2, arguments)
  var r = g(e),
    n = f(t)
  return r.setDate(r.getDate() + n), r
}
function Ne(e, t) {
  h(1, arguments)
  var r = e || {},
    n = g(r.start),
    a = g(r.end),
    o = a.getTime()
  if (!(n.getTime() <= o)) throw new RangeError('Invalid interval')
  var i = [],
    s = n
  s.setHours(0, 0, 0, 0)
  var d = t && 'step' in t ? Number(t.step) : 1
  if (d < 1 || isNaN(d)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; s.getTime() <= o; ) i.push(g(s)), s.setDate(s.getDate() + d), s.setHours(0, 0, 0, 0)
  return i
}
function Ye(e, t) {
  h(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getDay(),
    c = 6 + (d < i ? -7 : 0) - (d - i)
  return s.setDate(s.getDate() + c), s.setHours(23, 59, 59, 999), s
}
function Ae(e) {
  h(1, arguments)
  var t = g(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function qe(e, t) {
  h(1, arguments)
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    o = null == a ? 0 : f(a),
    i = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(i >= 0 && i <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = g(e),
    d = s.getDay(),
    c = (d < i ? 7 : 0) + d - i
  return s.setDate(s.getDate() - c), s.setHours(0, 0, 0, 0), s
}
var Ge = function(e) {
    return Ie(e, 'dd')
  },
  je = function(e) {
    return Ie(e, 'eeeeee')
  },
  Xe = function(e) {
    return Ie(e, 'MMMM yyyy')
  }
function Qe(e) {
  var r = e.year,
    n = e.month,
    a = e.firstDayOfWeek,
    o = void 0 === a ? 1 : a,
    i = e.dayLabelFormat,
    s = void 0 === i ? Ge : i,
    d = e.weekdayLabelFormat,
    c = void 0 === d ? je : d,
    u = e.monthLabelFormat,
    l = void 0 === u ? Xe : u
  return {
    days: t.useMemo(
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
                    return Ie(e, 'dd')
                  }
                : o,
            s = new Date(t, r),
            d = Ae(s),
            c = (function(e) {
              h(1, arguments)
              var t = g(e),
                r = t.getDay()
              return r
            })(d),
            u = (function(e) {
              h(1, arguments)
              var t = g(e),
                r = t.getMonth()
              return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
            })(s)
          return (function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
            var n = Array(e),
              a = 0
            for (t = 0; t < r; t++)
              for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) n[a] = o[i]
            return n
          })(
            Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
            Ne({start: d, end: u}).map(function(e) {
              return {date: e, dayLabel: i(e)}
            }),
          )
        })({year: r, month: n, firstDayOfWeek: o, dayLabelFormat: s})
      },
      [r, n, o, s],
    ),
    weekdayLabels: t.useMemo(
      function() {
        return (function(e) {
          var t = void 0 === e ? {} : e,
            r = t.firstDayOfWeek,
            n = void 0 === r ? 1 : r,
            a = t.weekdayLabelFormat,
            o =
              void 0 === a
                ? function(e) {
                    return Ie(e, 'iiiiii')
                  }
                : a,
            i = new Date()
          return Ne({start: Ue(qe(i), n), end: Ue(Ye(i), n)}).reduce(function(e, t) {
            return e.push(o(t)), e
          }, [])
        })({firstDayOfWeek: o, weekdayLabelFormat: c})
      },
      [o, c],
    ),
    monthLabel: l(new Date(r, n)),
  }
}
function Ve(e, t) {
  h(2, arguments)
  var r = g(e),
    n = g(t)
  return r.getTime() < n.getTime()
}
function Ze(e, t) {
  h(2, arguments)
  var r = g(e),
    n = g(t)
  return r.getTime() > n.getTime()
}
function Ke(e, t) {
  h(2, arguments)
  var r = t || {},
    n = g(e).getTime(),
    a = g(r.start).getTime(),
    o = g(r.end).getTime()
  if (!(a <= o)) throw new RangeError('Invalid interval')
  return n >= a && n <= o
}
function _e(e) {
  h(1, arguments)
  var t = g(e)
  return t.setHours(0, 0, 0, 0), t
}
function Je(e, t) {
  h(2, arguments)
  var r = _e(e),
    n = _e(t)
  return r.getTime() === n.getTime()
}
function $e(e) {
  h(1, arguments)
  var t = g(e),
    r = t.getFullYear(),
    n = t.getMonth(),
    a = new Date(0)
  return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
function et(e, t) {
  h(2, arguments)
  var r = g(e),
    n = f(t),
    a = r.getMonth() + n,
    o = new Date(0)
  o.setFullYear(r.getFullYear(), a, 1), o.setHours(0, 0, 0, 0)
  var i = $e(o)
  return r.setMonth(a, Math.min(i, r.getDate())), r
}
var tt = function(e, t) {
  return (
    void 0 === e && (e = []),
    e.some(function(e) {
      return Je(t, e)
    })
  )
}
function rt(e) {
  var t = Ae(e)
  return {
    year: (function(e) {
      h(1, arguments)
      var t = g(e),
        r = t.getFullYear()
      return r
    })(t),
    month: (function(e) {
      h(1, arguments)
      var t = g(e),
        r = t.getMonth()
      return r
    })(t),
    date: t,
  }
}
function nt(e, t) {
  var r = rt(t || _e(Date.now())),
    n = r.date,
    a = [r]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = et(e[e.length - 1].date, 1)), e.concat([rt(n)])
      }, a)),
    a
  )
}
function at(e, t, r) {
  var n = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (n = 0 === e.length ? et(n, r) : et(n, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([rt(n)]) : [rt(n)].concat(e)
    )
  }, [])
}
function ot(e, t, r) {
  return e && 'string' == typeof t ? Ie(e, t) : e && 'function' == typeof t ? t(e) : r
}
function it(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    a = e.minBookingDays,
    o = e.exactMinBookingDays,
    i = e.minBookingDate,
    s = e.maxBookingDate,
    d = !i || !Ve(t, Ue(i, -1)),
    c = !s || !Ze(Ue(t, a - 1), s)
  return !(
    (!t || 1 !== a || r || n(t)) &&
    ((t && a > 1 && !r && !o) || (t && a > 0 && o && d && c) || (t && a > 0 && o && !i && !s)
      ? Ne({start: t, end: Ue(t, a - 1)}).some(function(e) {
          return n(e)
        })
      : !t ||
        !r ||
        o ||
        Ve(r, Ue(t, a - 1)) ||
        Ne({start: t, end: r}).some(function(e) {
          return n(e)
        }))
  )
}
var st = 'startDate',
  dt = 'endDate'
function ct(e) {
  var r = e.startDate,
    n = e.endDate,
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
        ? function() {
            return !1
          }
        : y,
    v = e.unavailableDates,
    w = void 0 === v ? [] : v,
    D = t.useState(function() {
      return nt(h, r || d || null)
    }),
    k = D[0],
    x = D[1],
    C = t.useState(null),
    T = C[0],
    S = C[1],
    B = t.useState(r),
    M = B[0],
    R = B[1]
  t.useEffect(function() {
    return (
      'undefined' != typeof window && window.addEventListener('keydown', F),
      function() {
        window.removeEventListener('keydown', F)
      }
    )
  })
  var L = function(e) {
      return tt(w, e) || b(e)
    },
    W = function(e) {
      R(e), (!M || (M && !Je(e, M))) && x(nt(h, e))
    },
    E = function(e) {
      return (function(e) {
        var t = e.date,
          r = e.minBookingDate,
          n = e.maxBookingDate,
          a = e.isDateBlockedFn,
          o = e.startDate,
          i = e.endDate,
          s = e.minBookingDays,
          d = void 0 === s ? 1 : s,
          c = e.unavailableDates,
          u = void 0 === c ? [] : c,
          l = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
          p = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
        return !!(
          tt(u, t) ||
          (l && Ve(t, l)) ||
          (p && Ze(t, p)) ||
          (o && !i && d > 1 && Ke(t, {start: o, end: Ue(o, d - 2)})) ||
          (a && a(t))
        )
      })({
        date: e,
        minBookingDate: o,
        maxBookingDate: i,
        startDate: r,
        endDate: n,
        minBookingDays: p,
        isDateBlockedFn: L,
      })
    }
  function F(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !M
    ) {
      var t = k[0]
      W(t.date), x(nt(h, t.date))
    }
  }
  return {
    firstDayOfWeek: m,
    activeMonths: k,
    isDateSelected: function(e) {
      return (function(e, t, r) {
        return !(!t || !r) && Ke(e, {start: t, end: r})
      })(e, r, n)
    },
    isDateHovered: function(e) {
      return (function(e) {
        var t = e.date,
          r = e.startDate,
          n = e.endDate,
          a = e.isDateBlocked,
          o = e.hoveredDate,
          i = e.minBookingDays
        return o && i > 1 && e.exactMinBookingDays && Ke(t, {start: o, end: Ue(o, i - 1)})
          ? !Ne({start: o, end: Ue(o, i - 1)}).some(function(e) {
              return a(e)
            })
          : r && !n && o && Ke(t, {start: r, end: Ue(r, i - 1)}) && Je(r, o) && i > 1
          ? !Ne({start: r, end: Ue(r, i - 1)}).some(function(e) {
              return a(e)
            })
          : !(
              !r ||
              n ||
              !o ||
              Ve(o, r) ||
              !Ke(t, {start: r, end: o}) ||
              Ne({start: r, end: o}).some(function(e) {
                return a(e)
              })
            )
      })({
        date: e,
        hoveredDate: T,
        startDate: r,
        endDate: n,
        minBookingDays: p,
        exactMinBookingDays: u,
        isDateBlocked: L,
      })
    },
    isFirstOrLastSelectedDate: function(e) {
      return (function(e, t, r) {
        return !!((t && Je(e, t)) || (r && Je(e, r)))
      })(e, r, n)
    },
    isDateBlocked: E,
    numberOfMonths: h,
    isDateFocused: function(e) {
      return !!M && Je(e, M)
    },
    focusedDate: M,
    hoveredDate: T,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function(e) {
      if (e) {
        if (e) {
          var t = !E(e) || (r && Je(e, r)),
            a = !o || !Ve(e, Ue(o, -1)),
            s = !i || !Ze(e, i),
            d = Ue(e, p - 1),
            c = !o || !Ve(d, o),
            l = !i || !Ze(d, i),
            f = u && p > 1 && a && s && c && l,
            h = r && !n && !u && a && s,
            g = !(p > 1 && r) || Ke(e, {start: r, end: Ue(r, p - 2)}),
            m = r && Je(e, r) && g
          t && (f || h || m) ? S(e) : null !== T && S(null)
        }
      } else S(null)
    },
    onDateSelect: function(e) {
      ;('endDate' === a || 'startDate' === a) &&
      p > 0 &&
      u &&
      it({
        minBookingDays: p,
        exactMinBookingDays: u,
        minBookingDate: o,
        maxBookingDate: i,
        isDateBlocked: L,
        startDate: e,
        endDate: null,
      })
        ? s({startDate: e, endDate: Ue(e, p - 1), focusedInput: null})
        : (('endDate' === a && r && Ve(e, r)) || ('startDate' === a && n && Ze(e, n))) &&
          !u &&
          it({minBookingDays: p, isDateBlocked: L, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === a &&
          !u &&
          it({minBookingDays: p, isDateBlocked: L, endDate: n, startDate: e})
        ? s({endDate: n, startDate: e, focusedInput: 'endDate'})
        : 'startDate' === a &&
          !u &&
          it({minBookingDays: p, isDateBlocked: L, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: 'endDate'})
        : 'endDate' === a &&
          r &&
          !Ve(e, r) &&
          !u &&
          it({minBookingDays: p, isDateBlocked: L, startDate: r, endDate: e}) &&
          s({startDate: r, endDate: e, focusedInput: null}),
        'endDate' === a || (M && (!M || Je(e, M))) || x(nt(h, e))
    },
    onDateFocus: W,
    goToPreviousMonths: function() {
      x(at(k, h, -1)), R(null)
    },
    goToNextMonths: function() {
      x(at(k, h, 1)), R(null)
    },
    goToPreviousYear: function(e) {
      void 0 === e && (e = 1), x(at(k, h, -(12 * e - h + 1))), R(null)
    },
    goToNextYear: function(e) {
      void 0 === e && (e = 1), x(at(k, h, 12 * e - h + 1)), R(null)
    },
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ut = function() {
  return (ut =
    Object.assign ||
    function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var a in (t = arguments[r]))
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
var mt = (function() {
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
        for (var r, n, a = gt(e), o = 1; o < arguments.length; o++) {
          for (var i in (r = Object(arguments[o]))) ft.call(r, i) && (a[i] = r[i])
          if (pt) {
            n = pt(r)
            for (var s = 0; s < n.length; s++) ht.call(r, n[s]) && (a[n[s]] = r[n[s]])
          }
        }
        return a
      },
  yt = function(e, t) {
    var r = mt({}, e, t)
    for (var n in e) {
      var a
      e[n] && 'object' == typeof t[n] && mt(r, (((a = {})[n] = mt(e[n], t[n])), a))
    }
    return r
  },
  bt = {
    breakpoints: [40, 52, 64].map(function(e) {
      return e + 'em'
    }),
  },
  vt = function(e) {
    return '@media screen and (min-width: ' + e + ')'
  },
  wt = function(e, t) {
    return Dt(t, e, e)
  },
  Dt = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  kt = function e(t) {
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
              u = e[d],
              l = Dt(e.theme, c.scale, c.defaults)
            if ('object' != typeof u) mt(o, c(u, l, e))
            else {
              if (
                ((r.breakpoints =
                  (!s && r.breakpoints) || Dt(e.theme, 'breakpoints', bt.breakpoints)),
                Array.isArray(u))
              ) {
                ;(r.media = (!s && r.media) || [null].concat(r.breakpoints.map(vt))),
                  (o = yt(o, xt(r.media, c, l, u, e)))
                continue
              }
              null !== u && ((o = yt(o, Ct(r.breakpoints, c, l, u, e))), (i = !0))
            }
          }
        return (
          i &&
            ((n = o),
            (a = {}),
            Object.keys(n)
              .sort(function(e, t) {
                return e.localeCompare(t, void 0, {numeric: !0, sensitivity: 'base'})
              })
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
  xt = function(e, t, r, n, a) {
    var o = {}
    return (
      n.slice(0, e.length).forEach(function(n, i) {
        var s,
          d = e[i],
          c = t(n, r, a)
        d ? mt(o, (((s = {})[d] = mt({}, o[d], c)), s)) : mt(o, c)
      }),
      o
    )
  },
  Ct = function(e, t, r, n, a) {
    var o = {}
    for (var i in n) {
      var s = e[i],
        d = t(n[i], r, a)
      if (s) {
        var c,
          u = vt(s)
        mt(o, (((c = {})[u] = mt({}, o[u], d)), c))
      } else mt(o, d)
    }
    return o
  },
  Tt = function(e) {
    var t = e.properties,
      r = e.property,
      n = e.scale,
      a = e.transform,
      o = void 0 === a ? wt : a,
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
  St = function(e) {
    void 0 === e && (e = {})
    var t = {}
    return (
      Object.keys(e).forEach(function(r) {
        var n = e[r]
        t[r] = !0 !== n ? ('function' != typeof n ? Tt(n) : n) : Tt({property: r, scale: r})
      }),
      kt(t)
    )
  },
  Bt = function() {
    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
    r.forEach(function(t) {
      t && t.config && mt(e, t.config)
    })
    var a = kt(e)
    return a
  },
  Mt = St({
    width: {
      property: 'width',
      scale: 'sizes',
      transform: function(e, t) {
        return Dt(
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
  Rt = {
    color: {property: 'color', scale: 'colors'},
    backgroundColor: {property: 'backgroundColor', scale: 'colors'},
    opacity: !0,
  }
Rt.bg = Rt.backgroundColor
var Lt,
  Wt = St(Rt),
  Et = St({
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
  Ft = St({
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
  Ht = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
  Pt = St({
    gridGap: {property: 'gridGap', scale: 'space', defaultScale: Ht.space},
    gridColumnGap: {property: 'gridColumnGap', scale: 'space', defaultScale: Ht.space},
    gridRowGap: {property: 'gridRowGap', scale: 'space', defaultScale: Ht.space},
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
  Ot = St(
    (((Lt = {
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
    (Lt.borderTopRightRadius = {property: 'borderTopRightRadius', scale: 'radii'}),
    (Lt.borderBottomWidth = {property: 'borderBottomWidth', scale: 'borderWidths'}),
    (Lt.borderBottomColor = {property: 'borderBottomColor', scale: 'colors'}),
    (Lt.borderBottomStyle = {property: 'borderBottomStyle', scale: 'borderStyles'}),
    (Lt.borderBottomLeftRadius = {property: 'borderBottomLeftRadius', scale: 'radii'}),
    (Lt.borderBottomRightRadius = {property: 'borderBottomRightRadius', scale: 'radii'}),
    (Lt.borderLeftWidth = {property: 'borderLeftWidth', scale: 'borderWidths'}),
    (Lt.borderLeftColor = {property: 'borderLeftColor', scale: 'colors'}),
    (Lt.borderLeftStyle = {property: 'borderLeftStyle', scale: 'borderStyles'}),
    (Lt.borderRightWidth = {property: 'borderRightWidth', scale: 'borderWidths'}),
    (Lt.borderRightColor = {property: 'borderRightColor', scale: 'colors'}),
    (Lt.borderRightStyle = {property: 'borderRightStyle', scale: 'borderStyles'}),
    Lt),
  ),
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
  At = function(e) {
    return 'number' == typeof e && !isNaN(e)
  },
  qt = function(e, t) {
    if (!At(e)) return Dt(t, e, e)
    var r = e < 0,
      n = Math.abs(e),
      a = Dt(t, n, n)
    return At(a) ? a * (r ? -1 : 1) : r ? '-' + a : a
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
var jt,
  Xt = Bt(St(Gt.margin), St(Gt.padding)),
  Qt = St({
    boxShadow: {property: 'boxShadow', scale: 'shadows'},
    textShadow: {property: 'textShadow', scale: 'shadows'},
  })
function Vt() {
  return (Vt =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t]
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    }).apply(this, arguments)
}
var Zt,
  Kt,
  _t,
  Jt = function(e, t, r, n, a) {
    for (t = t && t.split ? t.split('.') : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : a
    return e === a ? r : e
  },
  $t = [40, 52, 64].map(function(e) {
    return e + 'em'
  }),
  er = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  tr = {
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
  rr = {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
  nr =
    (((jt = {
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
    (jt.borderTopRightRadius = 'radii'),
    (jt.borderBottomWidth = 'borderWidths'),
    (jt.borderBottomColor = 'colors'),
    (jt.borderBottomStyle = 'borderStyles'),
    (jt.borderBottomLeftRadius = 'radii'),
    (jt.borderBottomRightRadius = 'radii'),
    (jt.borderLeftWidth = 'borderWidths'),
    (jt.borderLeftColor = 'colors'),
    (jt.borderLeftStyle = 'borderStyles'),
    (jt.borderRightWidth = 'borderWidths'),
    (jt.borderRightColor = 'colors'),
    (jt.borderRightStyle = 'borderStyles'),
    (jt.boxShadow = 'shadows'),
    (jt.textShadow = 'shadows'),
    (jt.zIndex = 'zIndices'),
    (jt.width = 'sizes'),
    (jt.minWidth = 'sizes'),
    (jt.maxWidth = 'sizes'),
    (jt.height = 'sizes'),
    (jt.minHeight = 'sizes'),
    (jt.maxHeight = 'sizes'),
    (jt.flexBasis = 'sizes'),
    (jt.size = 'sizes'),
    (jt.fill = 'colors'),
    (jt.stroke = 'colors'),
    jt),
  ar = function(e, t) {
    if ('number' != typeof t || t >= 0) return Jt(e, t, t)
    var r = Math.abs(t),
      n = Jt(e, r, r)
    return 'string' == typeof n ? '-' + n : -1 * n
  },
  or = [
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
    return Vt({}, e, (((r = {})[t] = ar), r))
  }, {}),
  ir = function e(t) {
    return function(r) {
      void 0 === r && (r = {})
      var n = Vt({}, er, {}, r.theme || r),
        a = {},
        o = (function(e) {
          return function(t) {
            var r = {},
              n = Jt(t, 'breakpoints', $t),
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
            var c = Jt(tr, i, i),
              u = Jt(nr, c),
              l = Jt(n, u, Jt(n, c, {})),
              p = Jt(or, c, Jt)(l, d, d)
            if (rr[c]) for (var f = rr[c], h = 0; h < f.length; h++) a[f[h]] = p
            else a[c] = p
          }
        else a = Vt({}, a, {}, e(Jt(n, d))(n))
      }
      return a
    }
  },
  sr = function(e) {
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
          return ir(Dt(t, e, null))(r.theme)
        }
      : function(e, t) {
          return Dt(t, e, null)
        }).scale = n || d),
      (r.defaults = s)
    var c = (((t = {})[o] = r), t)
    return kt(c)
  },
  dr =
    (sr({key: 'buttons'}),
    sr({key: 'textStyles', prop: 'textStyle'}),
    sr({key: 'colorStyles', prop: 'colors'}),
    Mt.width),
  cr = Mt.height,
  ur = Mt.minHeight,
  lr = Mt.display,
  pr = Mt.overflow,
  fr = Wt.opacity,
  hr = Et.fontSize,
  gr = Et.fontFamily,
  mr = Et.fontWeight,
  yr = Et.lineHeight,
  br = Ft.alignItems,
  vr = Ft.justifyContent,
  wr = Ft.flexWrap,
  Dr = Ft.flexDirection,
  kr = Ft.flex,
  xr = Pt.gridGap,
  Cr = Pt.gridColumnGap,
  Tr = Pt.gridRowGap,
  Sr = Pt.gridAutoFlow,
  Br = Pt.gridAutoColumns,
  Mr = Pt.gridAutoRows,
  Rr = Pt.gridTemplateColumns,
  Lr = Pt.gridTemplateRows,
  Wr = Pt.gridTemplateAreas,
  Er = Pt.gridArea,
  Fr = Ot.borderRadius,
  Hr = Nt.zIndex,
  Pr = Nt.top,
  Or = Nt.right,
  Ir = Nt.bottom,
  zr = Nt.left,
  Ur = function(e) {
    var t = e.prop,
      r = e.cssProperty,
      n = e.alias,
      a = e.key,
      o = e.transformValue,
      i = e.scale,
      s = e.properties,
      d = {}
    return (
      (d[t] = Tt({properties: s, property: r || t, scale: a, defaultScale: i, transform: o})),
      n && (d[n] = d[t]),
      kt(d)
    )
  },
  Nr = {
    datepickerStartDatePlaceholder: 'Select',
    datepickerStartDateLabel: 'Start date:',
    datepickerEndDatePlaceholder: 'Select',
    datepickerEndDateLabel: 'End date:',
    resetDates: 'Reset dates',
    close: 'Close',
  },
  Yr = ut(ut({}, Nr), {
    startDateAriaLabel: 'Start date',
    endDateAriaLabel: 'End date',
    startDatePlaceholder: 'Start date',
    endDatePlaceholder: 'End date',
  }),
  Ar = ut(ut({}, Nr), {dateAriaLabel: 'Select date', datePlaceholder: 'Select date'}),
  qr = Ur({
    prop: 'daySizeGridTemplateColumns',
    cssProperty: 'gridTemplateColumns',
    key: 'gridTemplateColumns',
    transformValue: function(e) {
      return 'repeat(7, ' + e + 'px)'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Gr = Bt(Br, Sr, Mr, Cr, xr, Tr, Wr, Rr, Lr, br, vr, Xt),
  jr = a('div')(
    Zt ||
      (Zt = lt(['\n  display: grid;\n  ', '\n  ', '\n'], ['\n  display: grid;\n  ', '\n  ', '\n'])),
    Gr,
    qr,
  ),
  Xr = Bt(Xt, kr, wr, Dr, br, vr, Er, cr, dr),
  Qr = a('div')(
    Kt || (Kt = lt(['\n  display: flex;\n  ', '\n'], ['\n  display: flex;\n  ', '\n'])),
    Xr,
  ),
  Vr = Bt(Er, cr, Xt, dr, Nt, Pr, zr, Or, Ir, Hr),
  Zr = a('div')(
    _t ||
      (_t = lt(
        ['\n  box-sizing: border-box;\n  ', '\n'],
        ['\n  box-sizing: border-box;\n  ', '\n'],
      )),
    Vr,
  )
function Kr(e) {
  var t = e.height,
    n = e.width,
    a = e.color,
    o = e.className,
    i = void 0 === o ? '' : o
  return r.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
      className: i,
      viewBox: '0 0 12 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    r.createElement('path', {
      d:
        'M8 1H7v1h1V1zM6.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM6 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 6 3zm3.5 5.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 9 3zm-.5 2.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-3 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm-2 3h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM11 1h-1v1h1v9H1V2h1V1H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM3.5 6.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 1H4v1h1V1zm1.5 7.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-4-3h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM3 3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2A.5.5 0 0 0 3 3z',
      fill: 'currentColor',
      fillRule: 'nonzero',
    }),
  )
}
function _r(e) {
  void 0 === e && (e = {})
  var r = t.useContext(n.ThemeContext)
  return t.useMemo(
    function() {
      return r && 'object' == typeof r && r.reactDatepicker && 'object' == typeof r.reactDatepicker
        ? Object.keys(e).reduce(function(t, n) {
            var a
            return ut(ut({}, t), (((a = {})[n] = r.reactDatepicker[n] || e[n]), a))
          }, {})
        : e
    },
    [r, e],
  )
}
var Jr = 'Montserrat, sans-serif',
  $r = {
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
  en = 36
function tn(e, t, r) {
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
var rn,
  nn,
  an,
  on = Ur({prop: 'placeholderColor', cssProperty: 'color'}),
  sn = Ur({prop: 'placeholderFontWeight', cssProperty: 'fontWeight'}),
  dn = Bt(Nt, Ot, zt, lr, Fr, Xt),
  cn = a('label')(rn || (rn = lt(['\n  ', '\n'], ['\n  ', '\n'])), dn),
  un = Bt(Nt, zr, Or, Pr, cr, dr),
  ln = a('div')(
    nn ||
      (nn = lt(
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
        ['\n  ', '\n  cursor: pointer;\n\n  svg {\n    display: block;\n  }\n'],
      )),
    un,
  ),
  pn = Bt(zt, Xt, gr, hr, Wt, mr, Xt, Ot, dr, ur, Qt),
  fn = a('input')(
    an ||
      (an = lt(
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
    pn,
    sn,
    on,
    sn,
    on,
    sn,
    on,
  )
function hn(e) {
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
    x = e.dateFormat,
    C = e.onChange,
    M = void 0 === C ? function() {} : C,
    R = t.useState(u),
    L = R[0],
    W = R[1],
    E = t.useRef(null)
  t.useEffect(
    function() {
      W(u)
    },
    [u],
  )
  var F = t.useContext(n.ThemeContext),
    H = _r({
      fontFamily: Jr,
      inputFontWeight: 600,
      inputFontSize: '14px',
      inputColor: tn('charcoal', $r.charcoal, F),
      inputBackground: tn('white', $r.white, F),
      inputMinHeight: '46px',
      inputWidth: '100%',
      inputPadding: m,
      inputBorder: '0',
      inputPlaceholderFontWeight: 500,
      inputPlaceholderColor: tn('silverCloud', $r.silverCloud, F),
      inputCalendarWrapperPosition: 'absolute',
      inputCalendarWrapperHeight: '12px',
      inputCalendarWrapperWidth: '12px',
      inputCalendarWrapperTop: '16px',
      inputCalendarWrapperLeft: v ? 'unset' : i ? '8px' : '16px',
      inputCalendarWrapperRight: v ? (i ? '8px' : '16px') : 'unset',
      inputCalendarIconWidth: '12px',
      inputCalendarIconHeight: '12px',
      inputCalendarIconColor: tn('graci', $r.graci, F),
      inputLabelDisplay: 'block',
      inputLabelPosition: 'relative',
      inputLabelBorder: '1px solid ' + tn('graci', $r.graci, F),
      inputLabelBorderRadius: '2px',
      inputLabelBackground: tn('white', $r.white, F),
      inputLabelMargin: '0',
      inputActiveBoxShadow: 'inset 0px -3px 0 ' + tn('primaryColor', $r.primaryColor, F),
    })
  return r.createElement(
    cn,
    {
      htmlFor: o,
      display: H.inputLabelDisplay,
      position: H.inputLabelPosition,
      border: H.inputLabelBorder,
      background: H.inputLabelBackground,
      borderRadius: H.inputLabelBorderRadius,
      m: H.inputLabelMargin,
    },
    l &&
      r.createElement(
        ln,
        {
          position: H.inputCalendarWrapperPosition,
          height: H.inputCalendarWrapperHeight,
          width: H.inputCalendarWrapperWidth,
          top: H.inputCalendarWrapperTop,
          left: H.inputCalendarWrapperLeft,
          right: H.inputCalendarWrapperRight,
        },
        r.createElement(Kr, {
          width: H.inputCalendarIconWidth,
          height: H.inputCalendarIconHeight,
          color: H.inputCalendarIconColor,
        }),
      ),
    r.createElement(fn, {
      tabIndex: w ? -1 : 0,
      border: H.inputBorder,
      p: H.inputPadding,
      width: H.inputWidth,
      minHeight: H.inputMinHeight,
      background: H.inputBackground,
      fontFamily: H.fontFamily,
      color: H.inputColor,
      fontSize: H.inputFontSize,
      fontWeight: H.inputFontWeight,
      placeholderColor: H.inputPlaceholderColor,
      placeholderFontWeight: H.inputPlaceholderFontWeight,
      boxShadow: s ? H.inputActiveBoxShadow : 'none',
      id: o,
      placeholder: a,
      'aria-label': d,
      value: L,
      autoComplete: 'off',
      onChange: function(e) {
        var t = e.target.value
        W(t),
          'number' == typeof E.current && clearTimeout(E.current),
          (E.current = setTimeout(function() {
            c()
            var e = (function(e, t, r, n) {
              h(3, arguments)
              var a = String(e),
                o = String(t),
                i = n || {},
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
              if ('' === o) return '' === a ? g(r) : new Date(NaN)
              var w,
                x = {firstWeekContainsDate: u, weekStartsOn: v, locale: s},
                C = [{priority: 10, set: Ce, index: 0}],
                M = o
                  .match(ve)
                  .map(function(e) {
                    var t = e[0]
                    return 'p' === t || 'P' === t ? (0, D[t])(e, s.formatLong, x) : e
                  })
                  .join('')
                  .match(be),
                R = []
              for (w = 0; w < M.length; w++) {
                var L = M[w]
                !i.useAdditionalWeekYearTokens && S(L) && B(L),
                  !i.useAdditionalDayOfYearTokens && T(L) && B(L)
                var W = L[0],
                  E = ye[W]
                if (E) {
                  var F = E.incompatibleTokens
                  if (Array.isArray(F)) {
                    for (var H = void 0, P = 0; P < R.length; P++) {
                      var O = R[P].token
                      if (-1 !== F.indexOf(O) || O === W) {
                        H = R[P]
                        break
                      }
                    }
                    if (H)
                      throw new RangeError(
                        "The format string mustn't contain `"
                          .concat(H.fullToken, '` and `')
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
                  var I = E.parse(a, L, s.match, x)
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
                  if (W.match(xe))
                    throw new RangeError(
                      'Format string contains an unescaped latin alphabet character `' + W + '`',
                    )
                  if (("''" === L ? (L = "'") : "'" === W && (L = Te(L)), 0 !== a.indexOf(L)))
                    return new Date(NaN)
                  a = a.slice(L.length)
                }
              }
              if (a.length > 0 && ke.test(a)) return new Date(NaN)
              var z = C.map(function(e) {
                  return e.priority
                })
                  .sort(function(e, t) {
                    return t - e
                  })
                  .filter(function(e, t, r) {
                    return r.indexOf(e) === t
                  })
                  .map(function(e) {
                    return C.filter(function(t) {
                      return t.priority === e
                    }).reverse()
                  })
                  .map(function(e) {
                    return e[0]
                  }),
                U = g(r)
              if (isNaN(U)) return new Date(NaN)
              var N = y(U, k(U)),
                Y = {}
              for (w = 0; w < z.length; w++) {
                var A = z[w]
                if (A.validate && !A.validate(N, A.value, x)) return new Date(NaN)
                var q = A.set(N, Y, A.value, x)
                q[0] ? ((N = q[0]), b(Y, q[1])) : (N = q)
              }
              return N
            })(t, x, new Date())
            isNaN(e) || M(e)
          }, 1e3))
      },
      onFocus: c,
      'data-testid': 'DatepickerInput',
    }),
  )
}
function gn(e) {
  var t = e.height,
    n = e.width,
    a = e.iconColor,
    o = e.direction,
    i = void 0 === o ? 'right' : o,
    s = e.className,
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
  return r.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
      className: d,
      transform: 'rotate(' + c + ' 0 0)',
      viewBox: '0 0 9 12',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    r.createElement('path', {
      fill: 'currentColor',
      d:
        'M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z',
    }),
  )
}
var mn,
  yn,
  bn,
  vn = Bt(gr, hr, mr, Wt, yr, Xt),
  wn = a('div')(mn || (mn = lt(['\n  ', '\n'], ['\n  ', '\n'])), vn),
  Dn = a(wn)(
    bn ||
      (bn = lt(
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
        n.css(
          yn ||
            (yn = lt(
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
              ['\n      &:after {\n        background: ', ';\n      }\n    '],
            )),
          r,
        )
      )
    },
  )
function kn(e) {
  var a = e.title,
    o = e.isActive,
    i = e.date,
    s = e.vertical,
    d = t.useContext(n.ThemeContext),
    c = _r({
      fontFamily: Jr,
      selectDateLabelFontSize: '11px',
      selectDateLabelColor: tn('silverCloud', $r.silverCloud, d),
      selectDateLabelMargin: '0 0 8px',
      selectDateDateColor: tn('charcoal', $r.charcoal, d),
      selectDateDateFontSize: s ? '16px' : '24px',
      selectDateDateFontWeight: 500,
      selectDateDatePadding: '0 0 15px',
      selectDateBorderColor: tn('primaryColor', $r.primaryColor, d),
      selectDatePadding: '0',
    })
  return r.createElement(
    Zr,
    {p: c.selectDatePadding},
    r.createElement(
      wn,
      {
        fontFamily: c.fontFamily,
        fontSize: c.selectDateLabelFontSize,
        color: c.selectDateLabelColor,
        m: c.selectDateLabelMargin,
      },
      a,
    ),
    r.createElement(
      Dn,
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
var xn,
  Cn,
  Tn,
  Sn,
  Bn,
  Mn = function(e) {
    var a = e.label,
      o = t.useContext(n.ThemeContext),
      i = _r({
        fontFamily: Jr,
        monthLabelColor: tn('darcula', $r.darcula, o),
        monthLabelLineHeight: 1.57,
        monthLabelFontWeight: 600,
        monthLabelFontSize: '14px',
      })
    return r.createElement(
      wn,
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
  Rn = function(e) {
    var a = e.label,
      o = t.useContext(n.ThemeContext),
      i = _r({
        fontFamily: Jr,
        dayLabelColor: tn('silverCloud', $r.silverCloud, o),
        dayLabelFontWeight: 500,
        dayLabelFontSize: '11px',
      })
    return r.createElement(
      wn,
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
  Wn = r.createContext(Ln),
  En = Ur({
    prop: 'dayHeight',
    cssProperty: 'height',
    key: 'dayHeight',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Fn = Ur({
    prop: 'dayWidth',
    cssProperty: 'width',
    key: 'dayWidth',
    transformValue: function(e) {
      return e + 'px'
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Hn = Ur({
    prop: 'dayHoverColor',
    cssProperty: 'color',
    key: 'dayHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  Pn = Ur({
    prop: 'daySelectedHoverColor',
    cssProperty: 'color',
    key: 'daySelectedHoverColor',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  On = Ur({
    prop: 'dayHoverBackground',
    cssProperty: 'background',
    key: 'dayHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  In = Ur({
    prop: 'daySelectedHoverBackground',
    cssProperty: 'background',
    key: 'daySelectedHoverBackground',
    transformValue: function(e) {
      return e
    },
    scale: [0, 4, 8, 16, 32],
  }),
  zn = Bt(Qt, zt, Wt, gr, mr, hr),
  Un = a('button')(
    Bn ||
      (Bn = lt(
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
    En,
    Fn,
    zn,
    function(e) {
      var t = e.disabledDate,
        r = e.isSelectedStartOrEnd
      return (
        t &&
        !r &&
        n.css(
          xn ||
            (xn = lt(
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
        o = e.isWithinHoverRange
      return t || r || a || o
        ? r && !a
          ? n.css(
              Tn ||
                (Tn = lt(
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                  ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                )),
              In,
              Pn,
            )
          : ''
        : n.css(
            Cn ||
              (Cn = lt(
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
                ['\n        &:hover {\n          ', '\n          ', '\n        }\n      '],
              )),
            On,
            Hn,
          )
    },
    function(e) {
      var t = e.borderAccessibilityColor
      return n.css(
        Sn ||
          (Sn = lt(
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
            ['\n      box-shadow: none;\n      border: 2px solid ', ';\n    '],
          )),
        t,
      )
    },
  )
function Nn(e, t, r, n) {
  var a = n.selectedFirstOrLast,
    o = n.normal,
    i = n.selected,
    s = n.rangeHover
  return t ? a : e ? i : r ? s : o
}
function Yn(e) {
  var a = e.day,
    o = e.date,
    i = t.useRef(null),
    s = t.useContext(Wn),
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
    b = (function(e) {
      var r = e.date,
        n = e.focusedDate,
        a = e.isDateSelected,
        o = e.isDateFocused,
        i = e.isFirstOrLastSelectedDate,
        s = e.isDateHovered,
        d = e.isDateBlocked,
        c = e.onDateSelect,
        u = e.onDateFocus,
        l = e.onDateHover,
        p = e.dayRef,
        f = t.useCallback(
          function() {
            return c(r)
          },
          [r, c],
        ),
        h = t.useCallback(
          function() {
            return l(r)
          },
          [r, l],
        )
      t.useEffect(
        function() {
          p && p.current && o(r) && p.current.focus()
        },
        [p, r, o],
      )
      var g = d(r) && !s(r)
      return {
        tabIndex: null === n || o(r) ? 0 : -1,
        isSelected: a(r),
        isSelectedStartOrEnd: i(r),
        isWithinHoverRange: s(r),
        disabledDate: g,
        onKeyDown: function(e) {
          'ArrowRight' === e.key
            ? u(Ue(r, 1))
            : 'ArrowLeft' === e.key
            ? u(Ue(r, -1))
            : 'ArrowUp' === e.key
            ? u(Ue(r, -7))
            : 'ArrowDown' === e.key && u(Ue(r, 7))
        },
        onClick: g ? function() {} : f,
        onMouseEnter: h,
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
    v = t.useContext(n.ThemeContext),
    w = tn('white', $r.white, v),
    D = tn('mud', $r.mud, v),
    k = tn('primaryColor', $r.primaryColor, v),
    x = tn('accessibility', $r.accessibility, v),
    C = tn('selectedDay', $r.selectedDay, v),
    T = tn('selectedDayHover', $r.selectedDayHover, v),
    S = tn('normalDayHover', $r.normalDayHover, v),
    B = _r({
      fontFamily: Jr,
      daySize: en,
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
      function() {
        return Nn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastBorderColor,
          selected: B.daySelectedBorderColor,
          normal: B.dayBorderColor,
          rangeHover: B.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    ),
    R = t.useMemo(
      function() {
        return Nn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastBackground,
          selected: B.daySelectedBackground,
          normal: B.dayBackground,
          rangeHover: B.dayHoverRangeBackground,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    ),
    L = t.useMemo(
      function() {
        return Nn(b.isSelected, b.isSelectedStartOrEnd, b.isWithinHoverRange, {
          selectedFirstOrLast: B.daySelectedFirstOrLastColor,
          selected: B.daySelectedColor,
          normal: B.dayColor,
          rangeHover: B.dayHoverRangeColor,
        })
      },
      [b.isSelected, b.isSelectedStartOrEnd, B, b.isWithinHoverRange],
    )
  return r.createElement(
    Un,
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
      : r.createElement(
          Qr,
          {justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'},
          a,
        ),
  )
}
var An,
  qn,
  Gn = n.keyframes(
    An ||
      (An = lt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  jn = a('div')(
    qn ||
      (qn = lt(
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
  Xn = function(e) {
    var t = e.year,
      n = e.month,
      a = e.firstDayOfWeek,
      o = Qe({
        dayLabelFormat: e.dayLabelFormat,
        monthLabelFormat: e.monthLabelFormat,
        weekdayLabelFormat: e.weekdayLabelFormat,
        year: t,
        month: n,
        firstDayOfWeek: a,
      }),
      i = o.days,
      s = o.weekdayLabels,
      d = o.monthLabel,
      c = _r({daySize: en, monthLabelMargin: '0 0 28px', monthDayLabelMargin: '0 0 16px'})
    return r.createElement(
      jn,
      null,
      r.createElement(
        Qr,
        {justifyContent: 'center', m: c.monthLabelMargin},
        r.createElement(Mn, {label: d}),
      ),
      r.createElement(
        jr,
        {daySizeGridTemplateColumns: c.daySize},
        s.map(function(e) {
          return r.createElement(
            Qr,
            {key: e, justifyContent: 'center', m: c.monthDayLabelMargin},
            r.createElement(Rn, {label: e}),
          )
        }),
      ),
      r.createElement(
        jr,
        {daySizeGridTemplateColumns: c.daySize},
        i.map(function(e, t) {
          return 'object' == typeof e
            ? r.createElement(Yn, {date: e.date, key: e.dayLabel, day: e.dayLabel})
            : r.createElement('div', {key: t})
        }),
      ),
    )
  }
var Qn,
  Vn,
  Zn,
  Kn = a('button')(
    Qn ||
      (Qn = lt(
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
        [
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  padding: 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n',
        ],
      )),
  ),
  _n = a(function(e) {
    var t = e.height,
      n = e.width,
      a = e.color,
      o = e.className,
      i = void 0 === o ? '' : o
    return r.createElement(
      'svg',
      {
        width: n,
        height: t,
        color: a,
        className: i,
        viewBox: '0 0 14 14',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('path', {
        fill: 'currentColor',
        fillRule: 'nonzero',
        d:
          'M9.015 11.15c-.027-.18-.04-.39-.067-.585a3.958 3.958 0 0 1-4.48-.056C2.663 9.241 2.142 6.663 3.292 4.74c1.217-2.02 3.797-2.592 5.696-1.282.589.404 1.03.934 1.35 1.533l-1.216.808L13 7.917l-.174-4.556-1.056.696a5.812 5.812 0 0 0-1.846-2.062C7.25.155 3.64.935 1.901 3.765c-1.672 2.717-.95 6.382 1.605 8.194a5.535 5.535 0 0 0 5.616.501c0-.083 0-.167-.013-.264a9.193 9.193 0 0 0-.094-1.046z',
      }),
    )
  })(Zn || (Zn = lt(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    return (
      e.rtl &&
      n.css(
        Vn ||
          (Vn = lt(
            ['\n      transform: rotate(-180deg);\n    '],
            ['\n      transform: rotate(-180deg);\n    '],
          )),
      )
    )
  })
function Jn(e) {
  var a = e.onResetDates,
    o = e.text,
    i = e.rtl,
    s = t.useContext(n.ThemeContext),
    d = _r({
      fontFamily: Jr,
      resetDatesIconColor: tn('mud', $r.mud, s),
      resetDatesIconHeight: '14px',
      resetDatesIconWidth: '14px',
      resetDatesTextColor: tn('darcula', $r.darcula, s),
      resetDatesTextMargin: i ? '1px 8px 0 0' : '1px 0 0 8px',
      resetDatesTextLineHeight: 1.18,
      resetDatesTextFontSize: '11px',
    })
  return r.createElement(
    Kn,
    {
      'aria-label': 'Reset dates',
      tabIndex: -1,
      onClick: a,
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
    },
    r.createElement(_n, {
      height: d.resetDatesIconHeight,
      width: d.resetDatesIconWidth,
      color: d.resetDatesIconColor,
      rtl: i,
    }),
    r.createElement(
      wn,
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
var $n,
  ea,
  ta = a('svg')(ea || (ea = lt(['\n  ', '\n'], ['\n  ', '\n'])), function(e) {
    var t = e.angle
    return n.css(
      $n ||
        ($n = lt(
          ['\n      transform: rotate(', 'deg);\n    '],
          ['\n      transform: rotate(', 'deg);\n    '],
        )),
      t,
    )
  })
function ra(e) {
  var t = e.height,
    n = e.width,
    a = e.color,
    o = e.direction,
    i = void 0 === o ? 'right' : o,
    s = e.className,
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
  return r.createElement(
    ta,
    {
      width: n,
      height: t,
      color: a,
      className: d,
      angle: c,
      viewBox: '0 0 9 6',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    r.createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d:
        'M4.058 4.594L1.185 1.72a.312.312 0 1 1 .442-.442L4.5 4.152l2.873-2.873a.312.312 0 1 1 .442.442L4.723 4.812a.316.316 0 0 1-.446 0l-.219-.218z',
    }),
  )
}
var na,
  aa = Bt(dr, cr, zt, Xt, Ot),
  oa = a('button')(
    na ||
      (na = lt(
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
        ['\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],
      )),
    aa,
  )
function ia(e) {
  var a = e.type,
    o = e.onClick,
    i = e.vertical,
    s = e.rtl,
    d = e.ariaLabel,
    c = t.useContext(n.ThemeContext),
    u = _r({
      navButtonWidth: i ? '48px' : '30px',
      navButtonHeight: i ? '48px' : '30px',
      navButtonBackground: tn('white', $r.white, c),
      navButtonBorder: '1px solid ' + tn('silverCloud', $r.silverCloud, c),
      navButtonPadding: '0',
      navButtonIconHeight: i ? '18px' : '11px',
      navButtonIconWidth: i ? '28px' : '18px',
      navButtonIconColor: tn('greey', $r.greey, c),
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
  return r.createElement(
    oa,
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
      onMouseUp: function(e) {
        e.currentTarget.blur()
      },
      'data-testid': 'DatepickerNavButton',
    },
    r.createElement(ra, {
      width: u.navButtonIconWidth,
      height: u.navButtonIconHeight,
      color: u.navButtonIconColor,
      direction: l(),
    }),
  )
}
function sa(e) {
  var t = e.height,
    n = e.width,
    a = e.color,
    o = e.className,
    i = void 0 === o ? '' : o
  return r.createElement(
    'svg',
    {
      width: n,
      height: t,
      color: a,
      className: i,
      viewBox: '0 0 15 16',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    r.createElement('path', {
      fill: 'currentColor',
      fillRule: 'nonzero',
      d:
        'M14.69.263a.802.802 0 0 0-1.187 0L7.47 6.694 1.433.262a.802.802 0 0 0-1.187 0 .938.938 0 0 0 0 1.267L6.28 7.96.246 14.392a.937.937 0 0 0 0 1.266.81.81 0 0 0 .594.262.81.81 0 0 0 .593-.262l6.035-6.432 6.035 6.432a.812.812 0 0 0 .593.262.81.81 0 0 0 .594-.262.937.937 0 0 0 0-1.266L8.656 7.96l6.034-6.43a.937.937 0 0 0 0-1.267z',
    }),
  )
}
var da,
  ca,
  ua = Bt(Xt, Wt, hr, gr, mr),
  la = a('div')(
    da ||
      (da = lt(
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
        ['\n  ', '\n  float: left;\n  transition: color 0.15s;\n'],
      )),
    ua,
  ),
  pa = a('button')(
    ca ||
      (ca = lt(
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
    la,
    Wt,
    Wt,
  )
function fa(e) {
  var a = e.onClick,
    o = e.rtl,
    i = e.closeText,
    s = t.useContext(n.ThemeContext),
    d = _r({
      fontFamily: Jr,
      closeMargin: o ? '1px 16px 0 0' : '1px 0 0 16px',
      closeColor: tn('silverCloud', $r.silverCloud, s),
      closeHoverColor: tn('darcula', $r.darcula, s),
      closeFontSize: '12px',
      closeFontWeight: 600,
    })
  return r.createElement(
    pa,
    {
      onClick: a,
      color: d.closeHoverColor,
      'data-testid': 'DatepickerClose',
      tabIndex: -1,
      'aria-label': 'Close',
    },
    r.createElement(sa, {width: '15px', height: '16px', color: '#ADADAD'}),
    r.createElement(
      la,
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
var ha = n.keyframes(
    ka ||
      (ka = lt(
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
        ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'],
      )),
  ),
  ga = Bt(zt, Xt, Fr, Nt, Qt, dr, Hr),
  ma = a('div')(
    Ca ||
      (Ca = lt(
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
    ga,
    function(e) {
      return (
        e.rtl &&
        n.css(xa || (xa = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
      )
    },
    ha,
  ),
  ya = a('div')(
    Ta ||
      (Ta = lt(
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
        [
          "\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: '';\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #e6e7e8;\n    bottom: 0;\n    left: 0;\n  }\n",
        ],
      )),
  ),
  ba = Bt(lr, vr),
  va = a(Zr)(Sa || (Sa = lt(['\n  ', '\n'], ['\n  ', '\n'])), ba),
  wa = Bt(pr, cr),
  Da = a(jr)(Ba || (Ba = lt(['\n  ', '\n'], ['\n  ', '\n'])), wa)
var ka,
  xa,
  Ca,
  Ta,
  Sa,
  Ba,
  Ma,
  Ra,
  La,
  Wa,
  Ea,
  Fa = r.forwardRef(function(e, a) {
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
          ? function() {
              return !1
            }
          : M,
      L = e.minBookingDays,
      W = void 0 === L ? 1 : L,
      E = e.onClose,
      F = void 0 === E ? function() {} : E,
      H = e.numberOfMonths,
      P = e.firstDayOfWeek,
      O = e.displayFormat,
      I = void 0 === O ? 'MM/dd/yyyy' : O,
      z = e.phrases,
      U = void 0 === z ? Nr : z,
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
        numberOfMonths: H,
        firstDayOfWeek: P,
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
      re = Y.onDateFocus,
      ne = Y.isDateBlocked
    t.useImperativeHandle(a, function() {
      return {
        onDateSelect: function(e) {
          Q(e)
        },
      }
    })
    var ae = t.useRef(null),
      oe = t.useContext(n.ThemeContext),
      ie = _r({
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
        datepickerSelectDateArrowIconColor: tn('silverCloud', $r.silverCloud, oe),
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
    return r.createElement(
      n.ThemeProvider,
      {
        theme: function(e) {
          return e || {}
        },
      },
      r.createElement(
        Wn.Provider,
        {
          value: {
            rtl: v,
            isDateFocused: ee,
            isDateSelected: q,
            isDateHovered: j,
            isFirstOrLastSelectedDate: G,
            onDateFocus: re,
            focusedDate: te,
            onDateSelect: Q,
            onDateHover: $,
            onDayRender: h,
            isDateBlocked: ne,
          },
        },
        r.createElement(
          ma,
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
            r.createElement(
              va,
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
              r.createElement(fa, {onClick: F, rtl: v, closeText: U.close}),
            ),
          T &&
            r.createElement(
              ya,
              null,
              r.createElement(
                jr,
                {
                  'data-testid': 'SelectedDatesGrid',
                  gridTemplateColumns: ie.datepickerSelectDateGridTemplateColumns,
                  gridTemplateRows: ie.datepickerSelectDateGridTemplateRows,
                },
                r.createElement(kn, {
                  title: U.datepickerStartDateLabel,
                  date: ot(o, I, U.datepickerStartDatePlaceholder),
                  isActive: c === st,
                  vertical: y,
                }),
                r.createElement(
                  Qr,
                  {justifyContent: 'center', alignItems: 'center'},
                  r.createElement(gn, {
                    height: ie.datepickerSelectDateArrowIconHeight,
                    width: ie.datepickerSelectDateArrowIconWidth,
                    iconColor: ie.datepickerSelectDateArrowIconColor,
                  }),
                ),
                r.createElement(kn, {
                  title: U.datepickerEndDateLabel,
                  date: ot(i, I, U.datepickerEndDatePlaceholder),
                  isActive: c === dt,
                  vertical: y,
                }),
              ),
            ),
          r.createElement(
            Zr,
            {position: 'relative'},
            r.createElement(
              Zr,
              {m: ie.datepickerMonthsWrapperMargin},
              r.createElement(
                Da,
                {
                  'data-testid': 'MonthGrid',
                  overflow: ie.datepickerMonthsGridOverflow,
                  height: ie.datepickerMonthsGridHeight,
                  gridTemplateColumns: y ? '1fr' : 'repeat(' + _ + ', 1fr)',
                  gridGap: ie.datepickerMonthsGridGap,
                  pr: v ? '1px' : '0',
                  ref: ae,
                  onMouseLeave: function() {
                    J && $(null)
                  },
                },
                A.map(function(e) {
                  return r.createElement(Xn, {
                    key: 'month-' + e.year + '-' + e.month,
                    year: e.year,
                    month: e.month,
                    firstDayOfWeek: X,
                    dayLabelFormat: l || Ge,
                    weekdayLabelFormat: p || je,
                    monthLabelFormat: f || Xe,
                  })
                }),
              ),
            ),
            r.createElement(
              Qr,
              {alignItems: 'center'},
              r.createElement(
                r.Fragment,
                null,
                D &&
                  r.createElement(
                    Qr,
                    {flex: '1', m: ie.datepickerResetDatesWrapperMargin},
                    r.createElement(Jn, {rtl: v, onResetDates: V, text: U.resetDates}),
                  ),
                r.createElement(
                  Zr,
                  {
                    position: ie.datepickerPreviousMonthButtonPosition,
                    top: ie.datepickerPreviousMonthButtonTop,
                    left: ie.datepickerPreviousMonthButtonLeft,
                    right: ie.datepickerPreviousMonthButtonRight,
                    bottom: ie.datepickerPreviousMonthButtonBottom,
                  },
                  r.createElement(ia, {
                    type: 'prev',
                    onClick: v && !y ? de : ce,
                    vertical: y,
                    rtl: v,
                    ariaLabel: 'Previous month',
                  }),
                ),
                r.createElement(
                  Zr,
                  {
                    position: ie.datepickerNextMonthButtonPosition,
                    top: ie.datepickerNextMonthButtonTop,
                    left: ie.datepickerNextMonthButtonLeft,
                    right: ie.datepickerNextMonthButtonRight,
                    bottom: ie.datepickerNextMonthButtonBottom,
                  },
                  r.createElement(ia, {
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
  Ha = a(Zr)(Ra || (Ra = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Hr, function(e) {
    return (
      e.rtl &&
      n.css(Ma || (Ma = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  }),
  Pa = Bt(Wt, fr),
  Oa = a(gn)(Wa || (Wa = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Pa, function(e) {
    return (
      e.rtl &&
      n.css(
        La ||
          (La = lt(
            ['\n      transform: rotate(-90deg);\n    '],
            ['\n      transform: rotate(-90deg);\n    '],
          )),
      )
    )
  }),
  Ia = Bt(zt, Ot, Fr),
  za = a(jr)(Ea || (Ea = lt(['\n  ', '\n'], ['\n  ', '\n'])), Ia)
var Ua,
  Na,
  Ya = a(Zr)(Na || (Na = lt(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n'])), Hr, function(e) {
    return (
      e.rtl &&
      n.css(Ua || (Ua = lt(['\n      direction: rtl;\n    '], ['\n      direction: rtl;\n    '])))
    )
  })
;(exports.DateRangeInput = function(e) {
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
        ? function() {
            return !1
          }
        : R,
    W = e.minBookingDays,
    E = void 0 === W ? 1 : W,
    F = e.onClose,
    H = void 0 === F ? function() {} : F,
    P = e.showStartDateCalendarIcon,
    O = void 0 === P || P,
    I = e.showEndDateCalendarIcon,
    z = void 0 === I || I,
    U = e.displayFormat,
    N = void 0 === U ? 'MM/dd/yyyy' : U,
    Y = e.phrases,
    A = void 0 === Y ? Yr : Y,
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
    $ = t.useContext(n.ThemeContext),
    ee = _r(
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
          dateRangeArrowIconColor: tn('graci', $r.graci, $),
          dateRangeArrowIconOpacity: 1,
          dateRangeStartDateInputPadding: S ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
          dateRangeEndDateInputPadding: S ? (M ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
  function te(e) {
    null !== l && J && J.current && !J.current.contains(e.target) && c(null)
  }
  function re(e) {
    _ && _.current && _.current.onDateSelect && _.current.onDateSelect(e)
  }
  return (
    t.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('click', te),
        function() {
          window.removeEventListener('click', te)
        }
      )
    }),
    r.createElement(
      n.ThemeProvider,
      {
        theme: function(e) {
          return e || {}
        },
      },
      r.createElement(
        Ha,
        {zIndex: ee.dateRangeZIndex, rtl: M, position: 'relative', ref: J},
        r.createElement(
          za,
          {
            'data-testid': 'DateRangeInputGrid',
            background: ee.dateRangeBackground,
            gridTemplateColumns: ee.dateRangeGridTemplateColumns,
            gridTemplateRows: ee.dateRangeGridTemplateRows,
            border: ee.dateRangeBorder,
            borderRadius: ee.dateRangeBorderRadius,
          },
          r.createElement(hn, {
            id: X,
            ariaLabel: A.startDateAriaLabel,
            placeholder: A.startDatePlaceholder,
            value: ot(a, N, ''),
            onClick: function() {
              return c(st)
            },
            showCalendarIcon: O,
            vertical: S,
            isActive: l === st,
            padding: ee.dateRangeStartDateInputPadding,
            rtl: M,
            onChange: re,
            dateFormat: N,
          }),
          r.createElement(
            Qr,
            {alignItems: 'center', justifyContent: 'center'},
            r.createElement(Oa, {
              width: ee.dateRangeArrowIconWidth,
              height: ee.dateRangeArrowIconHeight,
              color: ee.dateRangeArrowIconColor,
              opacity: ee.dateRangeArrowIconOpacity,
              rtl: M,
            }),
          ),
          r.createElement(hn, {
            id: V,
            ariaLabel: A.endDateAriaLabel,
            placeholder: A.endDatePlaceholder,
            value: ot(o, N, ''),
            onClick: function() {
              return c(a ? dt : st)
            },
            showCalendarIcon: z,
            vertical: S,
            isActive: l === dt,
            padding: ee.dateRangeEndDateInputPadding,
            rtl: M,
            disableAccessibility: l === st,
            onChange: re,
            dateFormat: N,
          }),
        ),
        r.createElement(
          Zr,
          {
            position: ee.dateRangeDatepickerWrapperPosition,
            bottom: ee.dateRangeDatepickerWrapperBottom,
            left: ee.dateRangeDatepickerWrapperLeft,
            top: ee.dateRangeDatepickerWrapperTop,
            right: ee.dateRangeDatepickerWrapperRight,
          },
          null !== l &&
            r.createElement(Fa, {
              onClose: function() {
                H(), c(null)
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
  (exports.DateSingleInput = function(e) {
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
          ? function() {
              return !1
            }
          : S,
      M = e.onClose,
      R = void 0 === M ? function() {} : M,
      L = e.showCalendarIcon,
      W = void 0 === L || L,
      E = e.displayFormat,
      F = void 0 === E ? 'MM/dd/yyyy' : E,
      H = e.phrases,
      P = void 0 === H ? Ar : H,
      O = e.placement,
      I = void 0 === O ? 'bottom' : O,
      z = e.inputId,
      U = void 0 === z ? 'startDate' : z,
      N = e.unavailableDates,
      Y = void 0 === N ? [] : N,
      A = t.useRef(null),
      q = t.useRef(null),
      G = _r(
        ut(
          {
            dateSingleZIndex: null,
            dateSingleInputPadding: x ? (T ? '0 32px 0 8px' : '0 8px 0 32px') : '0 44px',
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
          })(I, T),
        ),
      )
    function j(e) {
      c && q && q.current && !q.current.contains(e.target) && d(!1)
    }
    return (
      t.useEffect(function() {
        return (
          'undefined' != typeof window && window.addEventListener('click', j),
          function() {
            window.removeEventListener('click', j)
          }
        )
      }),
      r.createElement(
        n.ThemeProvider,
        {
          theme: function(e) {
            return e || {}
          },
        },
        r.createElement(
          Ya,
          {zIndex: G.dateSingleZIndex, rtl: T, position: 'relative', ref: q},
          r.createElement(hn, {
            id: U,
            ariaLabel: P.dateAriaLabel,
            placeholder: P.datePlaceholder,
            value: ot(a, F, ''),
            onClick: function() {
              return d(!0)
            },
            showCalendarIcon: W,
            vertical: x,
            isActive: !1,
            padding: G.dateSingleInputPadding,
            rtl: T,
            onChange: function(e) {
              A && A.current && A.current.onDateSelect && A.current.onDateSelect(e)
            },
            dateFormat: F,
          }),
          r.createElement(
            Zr,
            {
              position: G.dateSingleDatepickerWrapperPosition,
              bottom: G.dateSingleDatepickerWrapperBottom,
              left: G.dateSingleDatepickerWrapperLeft,
              top: G.dateSingleDatepickerWrapperTop,
              right: G.dateSingleDatepickerWrapperRight,
            },
            c &&
              r.createElement(Fa, {
                exactMinBookingDays: !0,
                minBookingDays: 1,
                onClose: function() {
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
                onDatesChange: function(e) {
                  var t = e.focusedInput,
                    r = e.startDate
                  u({showDatepicker: null !== t, date: r})
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
                phrases: P,
                ref: A,
                unavailableDates: Y,
                initialVisibleMonth: g,
              }),
          ),
        ),
      )
    )
  }),
  (exports.Datepicker = Fa),
  (exports.END_DATE = dt),
  (exports.START_DATE = st),
  (exports.dateRangeInputPhrases = Yr),
  (exports.dateSingleInputPhrases = Ar),
  (exports.datepickerPhrases = Nr)
