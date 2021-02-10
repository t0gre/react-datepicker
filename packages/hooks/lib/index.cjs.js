'use strict'
Object.defineProperty(exports, '__esModule', {value: !0})
var t = require('react'),
  e = {
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
function n(t) {
  return function (e) {
    var n = e || {},
      r = n.width ? String(n.width) : t.defaultWidth
    return t.formats[r] || t.formats[t.defaultWidth]
  }
}
var r = {
    date: n({
      formats: {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
      },
      defaultWidth: 'full',
    }),
    time: n({
      formats: {full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a'},
      defaultWidth: 'full',
    }),
    dateTime: n({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
      },
      defaultWidth: 'full',
    }),
  },
  a = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function i(t) {
  return function (e, n) {
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
function o(t) {
  return function (e, n) {
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
          ? (function (t, e) {
              for (var n = 0; n < t.length; n++) if (e(t[n])) return n
            })(d, function (t) {
              return t.test(c)
            })
          : (function (t, e) {
              for (var n in t) if (t.hasOwnProperty(n) && e(t[n])) return n
            })(d, function (t) {
              return t.test(c)
            })),
      (s = t.valueCallback ? t.valueCallback(s) : s),
      {value: (s = a.valueCallback ? a.valueCallback(s) : s), rest: r.slice(c.length)}
    )
  }
}
var u,
  s = {
    code: 'en-US',
    formatDistance: function (t, n, r) {
      var a
      return (
        (r = r || {}),
        (a =
          'string' == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace('{{count}}', n)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + a : a + ' ago') : a
      )
    },
    formatLong: r,
    formatRelative: function (t, e, n, r) {
      return a[t]
    },
    localize: {
      ordinalNumber: function (t, e) {
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
      era: i({
        values: {
          narrow: ['B', 'A'],
          abbreviated: ['BC', 'AD'],
          wide: ['Before Christ', 'Anno Domini'],
        },
        defaultWidth: 'wide',
      }),
      quarter: i({
        values: {
          narrow: ['1', '2', '3', '4'],
          abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
          wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
        },
        defaultWidth: 'wide',
        argumentCallback: function (t) {
          return Number(t) - 1
        },
      }),
      month: i({
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
      day: i({
        values: {
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        defaultWidth: 'wide',
      }),
      dayPeriod: i({
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
        ((u = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (t) {
            return parseInt(t, 10)
          },
        }),
        function (t, e) {
          var n = String(t),
            r = e || {},
            a = n.match(u.matchPattern)
          if (!a) return null
          var i = a[0],
            o = n.match(u.parsePattern)
          if (!o) return null
          var s = u.valueCallback ? u.valueCallback(o[0]) : o[0]
          return {value: (s = r.valueCallback ? r.valueCallback(s) : s), rest: n.slice(i.length)}
        }),
      era: o({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/^b/i, /^(a|c)/i]},
        defaultParseWidth: 'any',
      }),
      quarter: o({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]},
        defaultParseWidth: 'any',
        valueCallback: function (t) {
          return t + 1
        },
      }),
      month: o({
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
      day: o({
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
      dayPeriod: o({
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
function c(t) {
  if (null === t || !0 === t || !1 === t) return NaN
  var e = Number(t)
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
}
function d(t, e) {
  if (e.length < t)
    throw new TypeError(
      t + ' argument' + (t > 1 ? 's' : '') + ' required, but only ' + e.length + ' present',
    )
}
function l(t) {
  d(1, arguments)
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
function f(t, e) {
  d(2, arguments)
  var n = l(t).getTime(),
    r = c(e)
  return new Date(n + r)
}
function h(t, e) {
  d(2, arguments)
  var n = c(e)
  return f(t, -n)
}
function m(t, e) {
  if (null == t)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n])
  return t
}
function w(t, e) {
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
function g(t, e) {
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
  p: g,
  P: function (t, e) {
    var n,
      r = t.match(/(P+)(p+)?/),
      a = r[1],
      i = r[2]
    if (!i) return w(t, e)
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
    return n.replace('{{date}}', w(a, e)).replace('{{time}}', g(i, e))
  },
}
function y(t) {
  return t.getTime() % 6e4
}
function b(t) {
  var e = new Date(t.getTime()),
    n = Math.ceil(e.getTimezoneOffset())
  return e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + y(e)) % 6e4 : y(e))
}
var p = ['D', 'DD'],
  D = ['YY', 'YYYY']
function T(t) {
  return -1 !== p.indexOf(t)
}
function k(t) {
  return -1 !== D.indexOf(t)
}
function x(t) {
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
function C(t, e) {
  d(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : c(a),
    o = null == n.weekStartsOn ? i : c(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = l(t),
    s = u.getUTCDay(),
    f = (s < o ? 7 : 0) + s - o
  return u.setUTCDate(u.getUTCDate() - f), u.setUTCHours(0, 0, 0, 0), u
}
function M(t, e) {
  d(1, arguments)
  var n = l(t, e),
    r = n.getUTCFullYear(),
    a = e || {},
    i = a.locale,
    o = i && i.options && i.options.firstWeekContainsDate,
    u = null == o ? 1 : c(o),
    s = null == a.firstWeekContainsDate ? u : c(a.firstWeekContainsDate)
  if (!(s >= 1 && s <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var f = new Date(0)
  f.setUTCFullYear(r + 1, 0, s), f.setUTCHours(0, 0, 0, 0)
  var h = C(f, e),
    m = new Date(0)
  m.setUTCFullYear(r, 0, s), m.setUTCHours(0, 0, 0, 0)
  var w = C(m, e)
  return n.getTime() >= h.getTime() ? r + 1 : n.getTime() >= w.getTime() ? r : r - 1
}
function U(t, e, n) {
  d(2, arguments)
  var r = n || {},
    a = r.locale,
    i = a && a.options && a.options.weekStartsOn,
    o = null == i ? 0 : c(i),
    u = null == r.weekStartsOn ? o : c(r.weekStartsOn)
  if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = l(t),
    f = c(e),
    h = s.getUTCDay(),
    m = f % 7,
    w = (m + 7) % 7,
    g = (w < u ? 7 : 0) + f - h
  return s.setUTCDate(s.getUTCDate() + g), s
}
function S(t) {
  d(1, arguments)
  var e = 1,
    n = l(t),
    r = n.getUTCDay(),
    a = (r < e ? 7 : 0) + r - e
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function E(t) {
  d(1, arguments)
  var e = l(t),
    n = e.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = S(r),
    i = new Date(0)
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = S(i)
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}
function P(t) {
  d(1, arguments)
  var e = E(t),
    n = new Date(0)
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = S(n)
  return r
}
function Y(t) {
  d(1, arguments)
  var e = l(t),
    n = S(e).getTime() - P(e).getTime()
  return Math.round(n / 6048e5) + 1
}
function N(t, e) {
  d(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    i = null == a ? 1 : c(a),
    o = null == n.firstWeekContainsDate ? i : c(n.firstWeekContainsDate),
    u = M(t, e),
    s = new Date(0)
  s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0)
  var l = C(s, e)
  return l
}
function q(t, e) {
  d(1, arguments)
  var n = l(t),
    r = C(n, e).getTime() - N(n, e).getTime()
  return Math.round(r / 6048e5) + 1
}
var O = /^(1[0-2]|0?\d)/,
  B = /^(3[0-1]|[0-2]?\d)/,
  H = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  L = /^(5[0-3]|[0-4]?\d)/,
  W = /^(2[0-3]|[0-1]?\d)/,
  F = /^(2[0-4]|[0-1]?\d)/,
  Q = /^(1[0-1]|0?\d)/,
  R = /^(1[0-2]|0?\d)/,
  I = /^[0-5]?\d/,
  A = /^[0-5]?\d/,
  X = /^\d/,
  G = /^\d{1,2}/,
  z = /^\d{1,3}/,
  j = /^\d{1,4}/,
  K = /^-?\d+/,
  _ = /^-?\d/,
  J = /^-?\d{1,2}/,
  Z = /^-?\d{1,3}/,
  V = /^-?\d{1,4}/,
  $ = /^([+-])(\d{2})(\d{2})?|Z/,
  tt = /^([+-])(\d{2})(\d{2})|Z/,
  et = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  nt = /^([+-])(\d{2}):(\d{2})|Z/,
  rt = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function at(t, e, n) {
  var r = e.match(t)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: e.slice(r[0].length)}
}
function it(t, e) {
  var n = e.match(t)
  return n
    ? 'Z' === n[0]
      ? {value: 0, rest: e.slice(1)}
      : {
          value:
            ('+' === n[1] ? 1 : -1) *
            (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
              6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
              1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
          rest: e.slice(n[0].length),
        }
    : null
}
function ot(t, e) {
  return at(K, t, e)
}
function ut(t, e, n) {
  switch (t) {
    case 1:
      return at(X, e, n)
    case 2:
      return at(G, e, n)
    case 3:
      return at(z, e, n)
    case 4:
      return at(j, e, n)
    default:
      return at(new RegExp('^\\d{1,' + t + '}'), e, n)
  }
}
function st(t, e, n) {
  switch (t) {
    case 1:
      return at(_, e, n)
    case 2:
      return at(J, e, n)
    case 3:
      return at(Z, e, n)
    case 4:
      return at(V, e, n)
    default:
      return at(new RegExp('^-?\\d{1,' + t + '}'), e, n)
  }
}
function ct(t) {
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
function dt(t, e) {
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
var lt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  ft = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function ht(t) {
  return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
}
var mt = {
    G: {
      priority: 140,
      parse: function (t, e, n, r) {
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
      set: function (t, e, n, r) {
        return (e.era = n), t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['R', 'u', 't', 'T'],
    },
    y: {
      priority: 130,
      parse: function (t, e, n, r) {
        var a = function (t) {
          return {year: t, isTwoDigitYear: 'yy' === e}
        }
        switch (e) {
          case 'y':
            return ut(4, t, a)
          case 'yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ut(e.length, t, a)
        }
      },
      validate: function (t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function (t, e, n, r) {
        var a = t.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var i = dt(n.year, a)
          return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Y: {
      priority: 130,
      parse: function (t, e, n, r) {
        var a = function (t) {
          return {year: t, isTwoDigitYear: 'YY' === e}
        }
        switch (e) {
          case 'Y':
            return ut(4, t, a)
          case 'Yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ut(e.length, t, a)
        }
      },
      validate: function (t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function (t, e, n, r) {
        var a = M(t, r)
        if (n.isTwoDigitYear) {
          var i = dt(n.year, a)
          return t.setUTCFullYear(i, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), C(t, r)
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), C(t, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function (t, e, n, r) {
        return st('R' === e ? 4 : e.length, t)
      },
      set: function (t, e, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), S(a)
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
      parse: function (t, e, n, r) {
        return st('u' === e ? 4 : e.length, t)
      },
      set: function (t, e, n, r) {
        return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
    },
    Q: {
      priority: 120,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'Q':
          case 'QQ':
            return ut(e.length, t)
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
      validate: function (t, e, n) {
        return e >= 1 && e <= 4
      },
      set: function (t, e, n, r) {
        return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    q: {
      priority: 120,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'q':
          case 'qq':
            return ut(e.length, t)
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
      validate: function (t, e, n) {
        return e >= 1 && e <= 4
      },
      set: function (t, e, n, r) {
        return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    M: {
      priority: 110,
      parse: function (t, e, n, r) {
        var a = function (t) {
          return t - 1
        }
        switch (e) {
          case 'M':
            return at(O, t, a)
          case 'MM':
            return ut(2, t, a)
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
      validate: function (t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function (t, e, n, r) {
        return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    L: {
      priority: 110,
      parse: function (t, e, n, r) {
        var a = function (t) {
          return t - 1
        }
        switch (e) {
          case 'L':
            return at(O, t, a)
          case 'LL':
            return ut(2, t, a)
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
      validate: function (t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function (t, e, n, r) {
        return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    w: {
      priority: 100,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'w':
            return at(L, t)
          case 'wo':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function (t, e, n, r) {
        return C(
          (function (t, e, n) {
            d(2, arguments)
            var r = l(t),
              a = c(e),
              i = q(r, n) - a
            return r.setUTCDate(r.getUTCDate() - 7 * i), r
          })(t, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'I':
            return at(L, t)
          case 'Io':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function (t, e, n, r) {
        return S(
          (function (t, e) {
            d(2, arguments)
            var n = l(t),
              r = c(e),
              a = Y(n) - r
            return n.setUTCDate(n.getUTCDate() - 7 * a), n
          })(t, n, r),
          r,
        )
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'd':
            return at(B, t)
          case 'do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        var r = ht(t.getUTCFullYear()),
          a = t.getUTCMonth()
        return r ? e >= 1 && e <= ft[a] : e >= 1 && e <= lt[a]
      },
      set: function (t, e, n, r) {
        return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
    },
    D: {
      priority: 90,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'D':
          case 'DD':
            return at(H, t)
          case 'Do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return ht(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
      },
      set: function (t, e, n, r) {
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
      parse: function (t, e, n, r) {
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
      validate: function (t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function (t, e, n, r) {
        return (t = U(t, n, r)).setUTCHours(0, 0, 0, 0), t
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
    },
    e: {
      priority: 90,
      parse: function (t, e, n, r) {
        var a = function (t) {
          var e = 7 * Math.floor((t - 1) / 7)
          return ((t + r.weekStartsOn + 6) % 7) + e
        }
        switch (e) {
          case 'e':
          case 'ee':
            return ut(e.length, t, a)
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
      validate: function (t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function (t, e, n, r) {
        return (t = U(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
      parse: function (t, e, n, r) {
        var a = function (t) {
          var e = 7 * Math.floor((t - 1) / 7)
          return ((t + r.weekStartsOn + 6) % 7) + e
        }
        switch (e) {
          case 'c':
          case 'cc':
            return ut(e.length, t, a)
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
      validate: function (t, e, n) {
        return e >= 0 && e <= 6
      },
      set: function (t, e, n, r) {
        return (t = U(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
      parse: function (t, e, n, r) {
        var a = function (t) {
          return 0 === t ? 7 : t
        }
        switch (e) {
          case 'i':
          case 'ii':
            return ut(e.length, t)
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
      validate: function (t, e, n) {
        return e >= 1 && e <= 7
      },
      set: function (t, e, n, r) {
        return (
          (t = (function (t, e) {
            d(2, arguments)
            var n = c(e)
            n % 7 == 0 && (n -= 7)
            var r = 1,
              a = l(t),
              i = a.getUTCDay(),
              o = n % 7,
              u = (o + 7) % 7,
              s = (u < r ? 7 : 0) + n - i
            return a.setUTCDate(a.getUTCDate() + s), a
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
      parse: function (t, e, n, r) {
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
      set: function (t, e, n, r) {
        return t.setUTCHours(ct(n), 0, 0, 0), t
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    b: {
      priority: 80,
      parse: function (t, e, n, r) {
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
      set: function (t, e, n, r) {
        return t.setUTCHours(ct(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
    },
    B: {
      priority: 80,
      parse: function (t, e, n, r) {
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
      set: function (t, e, n, r) {
        return t.setUTCHours(ct(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'h':
            return at(R, t)
          case 'ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 12
      },
      set: function (t, e, n, r) {
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
      parse: function (t, e, n, r) {
        switch (e) {
          case 'H':
            return at(W, t)
          case 'Ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 0 && e <= 23
      },
      set: function (t, e, n, r) {
        return t.setUTCHours(n, 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
    },
    K: {
      priority: 70,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'K':
            return at(Q, t)
          case 'Ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 0 && e <= 11
      },
      set: function (t, e, n, r) {
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
      parse: function (t, e, n, r) {
        switch (e) {
          case 'k':
            return at(F, t)
          case 'ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 24
      },
      set: function (t, e, n, r) {
        var a = n <= 24 ? n % 24 : n
        return t.setUTCHours(a, 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
    },
    m: {
      priority: 60,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'm':
            return at(I, t)
          case 'mo':
            return n.ordinalNumber(t, {unit: 'minute'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 0 && e <= 59
      },
      set: function (t, e, n, r) {
        return t.setUTCMinutes(n, 0, 0), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    s: {
      priority: 50,
      parse: function (t, e, n, r) {
        switch (e) {
          case 's':
            return at(A, t)
          case 'so':
            return n.ordinalNumber(t, {unit: 'second'})
          default:
            return ut(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 0 && e <= 59
      },
      set: function (t, e, n, r) {
        return t.setUTCSeconds(n, 0), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    S: {
      priority: 30,
      parse: function (t, e, n, r) {
        return ut(e.length, t, function (t) {
          return Math.floor(t * Math.pow(10, 3 - e.length))
        })
      },
      set: function (t, e, n, r) {
        return t.setUTCMilliseconds(n), t
      },
      incompatibleTokens: ['t', 'T'],
    },
    X: {
      priority: 10,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'X':
            return it($, t)
          case 'XX':
            return it(tt, t)
          case 'XXXX':
            return it(et, t)
          case 'XXXXX':
            return it(rt, t)
          case 'XXX':
          default:
            return it(nt, t)
        }
      },
      set: function (t, e, n, r) {
        return e.timestampIsSet ? t : new Date(t.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'x'],
    },
    x: {
      priority: 10,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'x':
            return it($, t)
          case 'xx':
            return it(tt, t)
          case 'xxxx':
            return it(et, t)
          case 'xxxxx':
            return it(rt, t)
          case 'xxx':
          default:
            return it(nt, t)
        }
      },
      set: function (t, e, n, r) {
        return e.timestampIsSet ? t : new Date(t.getTime() - n)
      },
      incompatibleTokens: ['t', 'T', 'X'],
    },
    t: {
      priority: 40,
      parse: function (t, e, n, r) {
        return ot(t)
      },
      set: function (t, e, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function (t, e, n, r) {
        return ot(t)
      },
      set: function (t, e, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  wt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  gt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  vt = /^'([^]*?)'?$/,
  yt = /''/g,
  bt = /\S/,
  pt = /[a-zA-Z]/
function Dt(t, e) {
  if (e.timestampIsSet) return t
  var n = new Date(0)
  return (
    n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
    n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
    n
  )
}
function Tt(t) {
  return t.match(vt)[1].replace(yt, "'")
}
function kt(t) {
  d(1, arguments)
  var e = l(t)
  return !isNaN(e)
}
function xt(t, e) {
  for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r
  return n + r
}
var Ct = function (t, e) {
    var n = t.getUTCFullYear(),
      r = n > 0 ? n : 1 - n
    return xt('yy' === e ? r % 100 : r, e.length)
  },
  Mt = function (t, e) {
    var n = t.getUTCMonth()
    return 'M' === e ? String(n + 1) : xt(n + 1, 2)
  },
  Ut = function (t, e) {
    return xt(t.getUTCDate(), e.length)
  },
  St = function (t, e) {
    return xt(t.getUTCHours() % 12 || 12, e.length)
  },
  Et = function (t, e) {
    return xt(t.getUTCHours(), e.length)
  },
  Pt = function (t, e) {
    return xt(t.getUTCMinutes(), e.length)
  },
  Yt = function (t, e) {
    return xt(t.getUTCSeconds(), e.length)
  },
  Nt = function (t, e) {
    var n = e.length,
      r = t.getUTCMilliseconds()
    return xt(Math.floor(r * Math.pow(10, n - 3)), e.length)
  }
var qt = 'midnight',
  Ot = 'noon',
  Bt = 'morning',
  Ht = 'afternoon',
  Lt = 'evening',
  Wt = 'night',
  Ft = {
    G: function (t, e, n) {
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
    y: function (t, e, n) {
      if ('yo' === e) {
        var r = t.getUTCFullYear(),
          a = r > 0 ? r : 1 - r
        return n.ordinalNumber(a, {unit: 'year'})
      }
      return Ct(t, e)
    },
    Y: function (t, e, n, r) {
      var a = M(t, r),
        i = a > 0 ? a : 1 - a
      return 'YY' === e
        ? xt(i % 100, 2)
        : 'Yo' === e
        ? n.ordinalNumber(i, {unit: 'year'})
        : xt(i, e.length)
    },
    R: function (t, e) {
      return xt(E(t), e.length)
    },
    u: function (t, e) {
      return xt(t.getUTCFullYear(), e.length)
    },
    Q: function (t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'Q':
          return String(r)
        case 'QQ':
          return xt(r, 2)
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
    q: function (t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'q':
          return String(r)
        case 'qq':
          return xt(r, 2)
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
    M: function (t, e, n) {
      var r = t.getUTCMonth()
      switch (e) {
        case 'M':
        case 'MM':
          return Mt(t, e)
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
    L: function (t, e, n) {
      var r = t.getUTCMonth()
      switch (e) {
        case 'L':
          return String(r + 1)
        case 'LL':
          return xt(r + 1, 2)
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
    w: function (t, e, n, r) {
      var a = q(t, r)
      return 'wo' === e ? n.ordinalNumber(a, {unit: 'week'}) : xt(a, e.length)
    },
    I: function (t, e, n) {
      var r = Y(t)
      return 'Io' === e ? n.ordinalNumber(r, {unit: 'week'}) : xt(r, e.length)
    },
    d: function (t, e, n) {
      return 'do' === e ? n.ordinalNumber(t.getUTCDate(), {unit: 'date'}) : Ut(t, e)
    },
    D: function (t, e, n) {
      var r = (function (t) {
        d(1, arguments)
        var e = l(t),
          n = e.getTime()
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        var r = e.getTime(),
          a = n - r
        return Math.floor(a / 864e5) + 1
      })(t)
      return 'Do' === e ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : xt(r, e.length)
    },
    E: function (t, e, n) {
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
    e: function (t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7
      switch (e) {
        case 'e':
          return String(i)
        case 'ee':
          return xt(i, 2)
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
    c: function (t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7
      switch (e) {
        case 'c':
          return String(i)
        case 'cc':
          return xt(i, e.length)
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
    i: function (t, e, n) {
      var r = t.getUTCDay(),
        a = 0 === r ? 7 : r
      switch (e) {
        case 'i':
          return String(a)
        case 'ii':
          return xt(a, e.length)
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
    a: function (t, e, n) {
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
    b: function (t, e, n) {
      var r,
        a = t.getUTCHours()
      switch (((r = 12 === a ? Ot : 0 === a ? qt : a / 12 >= 1 ? 'pm' : 'am'), e)) {
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
    B: function (t, e, n) {
      var r,
        a = t.getUTCHours()
      switch (((r = a >= 17 ? Lt : a >= 12 ? Ht : a >= 4 ? Bt : Wt), e)) {
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
    h: function (t, e, n) {
      if ('ho' === e) {
        var r = t.getUTCHours() % 12
        return 0 === r && (r = 12), n.ordinalNumber(r, {unit: 'hour'})
      }
      return St(t, e)
    },
    H: function (t, e, n) {
      return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), {unit: 'hour'}) : Et(t, e)
    },
    K: function (t, e, n) {
      var r = t.getUTCHours() % 12
      return 'Ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : xt(r, e.length)
    },
    k: function (t, e, n) {
      var r = t.getUTCHours()
      return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : xt(r, e.length)
    },
    m: function (t, e, n) {
      return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), {unit: 'minute'}) : Pt(t, e)
    },
    s: function (t, e, n) {
      return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), {unit: 'second'}) : Yt(t, e)
    },
    S: function (t, e) {
      return Nt(t, e)
    },
    X: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (e) {
        case 'X':
          return Rt(a)
        case 'XXXX':
        case 'XX':
          return It(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return It(a, ':')
      }
    },
    x: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'x':
          return Rt(a)
        case 'xxxx':
        case 'xx':
          return It(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return It(a, ':')
      }
    },
    O: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Qt(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + It(a, ':')
      }
    },
    z: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Qt(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + It(a, ':')
      }
    },
    t: function (t, e, n, r) {
      var a = r._originalDate || t
      return xt(Math.floor(a.getTime() / 1e3), e.length)
    },
    T: function (t, e, n, r) {
      return xt((r._originalDate || t).getTime(), e.length)
    },
  }
function Qt(t, e) {
  var n = t > 0 ? '-' : '+',
    r = Math.abs(t),
    a = Math.floor(r / 60),
    i = r % 60
  if (0 === i) return n + String(a)
  var o = e || ''
  return n + String(a) + o + xt(i, 2)
}
function Rt(t, e) {
  return t % 60 == 0 ? (t > 0 ? '-' : '+') + xt(Math.abs(t) / 60, 2) : It(t, e)
}
function It(t, e) {
  var n = e || '',
    r = t > 0 ? '-' : '+',
    a = Math.abs(t)
  return r + xt(Math.floor(a / 60), 2) + n + xt(a % 60, 2)
}
var At = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Xt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Gt = /^'([^]*?)'?$/,
  zt = /''/g,
  jt = /[a-zA-Z]/
function Kt(t, e, n) {
  d(2, arguments)
  var r = String(e),
    a = n || {},
    i = a.locale || s,
    o = i.options && i.options.firstWeekContainsDate,
    u = null == o ? 1 : c(o),
    f = null == a.firstWeekContainsDate ? u : c(a.firstWeekContainsDate)
  if (!(f >= 1 && f <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var m = i.options && i.options.weekStartsOn,
    w = null == m ? 0 : c(m),
    g = null == a.weekStartsOn ? w : c(a.weekStartsOn)
  if (!(g >= 0 && g <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!i.localize) throw new RangeError('locale must contain localize property')
  if (!i.formatLong) throw new RangeError('locale must contain formatLong property')
  var y = l(t)
  if (!kt(y)) throw new RangeError('Invalid time value')
  var p = b(y),
    D = h(y, p),
    C = {firstWeekContainsDate: f, weekStartsOn: g, locale: i, _originalDate: y},
    M = r
      .match(Xt)
      .map(function (t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, v[e])(t, i.formatLong, C) : t
      })
      .join('')
      .match(At)
      .map(function (t) {
        if ("''" === t) return "'"
        var e = t[0]
        if ("'" === e) return _t(t)
        var n = Ft[e]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && k(t) && x(t),
            !a.useAdditionalDayOfYearTokens && T(t) && x(t),
            n(D, t, i.localize, C)
          )
        if (e.match(jt))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + e + '`',
          )
        return t
      })
      .join('')
  return M
}
function _t(t) {
  return t.match(Gt)[1].replace(zt, "'")
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
***************************************************************************** */ function Jt(
  t,
  e,
) {
  d(2, arguments)
  var n = l(t),
    r = c(e)
  return isNaN(r) ? new Date(NaN) : r ? (n.setDate(n.getDate() + r), n) : n
}
function Zt(t, e) {
  d(1, arguments)
  var n = t || {},
    r = l(n.start),
    a = l(n.end),
    i = a.getTime()
  if (!(r.getTime() <= i)) throw new RangeError('Invalid interval')
  var o = [],
    u = r
  u.setHours(0, 0, 0, 0)
  var s = e && 'step' in e ? Number(e.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; u.getTime() <= i; ) o.push(l(u)), u.setDate(u.getDate() + s), u.setHours(0, 0, 0, 0)
  return o
}
function Vt(t, e) {
  d(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : c(a),
    o = null == n.weekStartsOn ? i : c(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = l(t),
    s = u.getDay(),
    f = 6 + (s < o ? -7 : 0) - (s - o)
  return u.setDate(u.getDate() + f), u.setHours(23, 59, 59, 999), u
}
function $t(t) {
  d(1, arguments)
  var e = l(t)
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}
function te(t, e) {
  d(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : c(a),
    o = null == n.weekStartsOn ? i : c(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = l(t),
    s = u.getDay(),
    f = (s < o ? 7 : 0) + s - o
  return u.setDate(u.getDate() - f), u.setHours(0, 0, 0, 0), u
}
function ee(t) {
  var e = void 0 === t ? {} : t,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    a = e.weekdayLabelFormat,
    i =
      void 0 === a
        ? function (t) {
            return Kt(t, 'iiiiii')
          }
        : a,
    o = new Date()
  return Zt({start: Jt(te(o), r), end: Jt(Vt(o), r)}).reduce(function (t, e) {
    return t.push(i(e)), t
  }, [])
}
function ne(t) {
  var e = t.year,
    n = t.month,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = t.dayLabelFormat,
    o =
      void 0 === i
        ? function (t) {
            return Kt(t, 'dd')
          }
        : i,
    u = new Date(e, n),
    s = $t(u),
    c = (function (t) {
      d(1, arguments)
      var e = l(t),
        n = e.getDay()
      return n
    })(s),
    f = (function (t) {
      d(1, arguments)
      var e = l(t),
        n = e.getMonth()
      return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e
    })(u)
  return (function () {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length
    var r = Array(t),
      a = 0
    for (e = 0; e < n; e++)
      for (var i = arguments[e], o = 0, u = i.length; o < u; o++, a++) r[a] = i[o]
    return r
  })(
    Array.from(Array(c >= a ? c - a : 6 - a + c + 1).keys()).fill(0),
    Zt({start: s, end: f}).map(function (t) {
      return {date: t, dayLabel: o(t)}
    }),
  )
}
var re = function (t) {
    return Kt(t, 'dd')
  },
  ae = function (t) {
    return Kt(t, 'eeeeee')
  },
  ie = function (t) {
    return Kt(t, 'MMMM yyyy')
  }
function oe(t, e) {
  d(2, arguments)
  var n = l(t),
    r = l(e)
  return n.getTime() < r.getTime()
}
function ue(t, e) {
  d(2, arguments)
  var n = l(t),
    r = l(e)
  return n.getTime() > r.getTime()
}
function se(t, e) {
  d(2, arguments)
  var n = e || {},
    r = l(t).getTime(),
    a = l(n.start).getTime(),
    i = l(n.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return r >= a && r <= i
}
function ce(t) {
  d(1, arguments)
  var e = l(t)
  return e.setHours(0, 0, 0, 0), e
}
function de(t, e) {
  d(2, arguments)
  var n = ce(t),
    r = ce(e)
  return n.getTime() === r.getTime()
}
function le(t, e) {
  d(2, arguments)
  var n = l(t),
    r = c(e)
  if (isNaN(r)) return new Date(NaN)
  if (!r) return n
  var a = n.getDate(),
    i = new Date(n.getTime())
  i.setMonth(n.getMonth() + r + 1, 0)
  var o = i.getDate()
  return a >= o ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n)
}
var fe = function (t, e) {
  return (
    void 0 === t && (t = []),
    t.some(function (t) {
      return de(e, t)
    })
  )
}
function he(t, e, n) {
  return !(!e || !n) && se(t, {start: e, end: n})
}
function me(t, e, n) {
  return !!((e && de(t, e)) || (n && de(t, n)))
}
function we(t, e) {
  return !(!e || !de(t, e))
}
function ge(t, e) {
  return !(!e || !de(t, e))
}
function ve(t) {
  var e = t.date,
    n = t.minBookingDate,
    r = t.maxBookingDate,
    a = t.isDateBlockedFn,
    i = t.startDate,
    o = t.endDate,
    u = t.minBookingDays,
    s = void 0 === u ? 1 : u,
    c = t.unavailableDates,
    d = void 0 === c ? [] : c,
    l = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n,
    f = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    fe(d, e) ||
    (l && oe(e, l)) ||
    (f && ue(e, f)) ||
    (i && !o && s > 1 && se(e, {start: i, end: Jt(i, s - 2)})) ||
    (a && a(e))
  )
}
function ye(t) {
  var e = $t(t)
  return {
    year: (function (t) {
      d(1, arguments)
      var e = l(t),
        n = e.getFullYear()
      return n
    })(e),
    month: (function (t) {
      d(1, arguments)
      var e = l(t),
        n = e.getMonth()
      return n
    })(e),
    date: e,
  }
}
function be() {
  return ye(ce(Date.now()))
}
function pe(t, e) {
  var n = e ? ye(e) : be(),
    r = n.date,
    a = [n]
  return (
    t > 1 &&
      (a = Array.from(Array(t - 1).keys()).reduce(function (t) {
        return (r = le(t[t.length - 1].date, 1)), t.concat([ye(r)])
      }, a)),
    a
  )
}
function De(t, e, n, r) {
  var a = t[r ? (n > 0 ? 0 : t.length - r) : n > 0 ? t.length - 1 : 0].date
  return Array.from(Array(e).keys()).reduce(function (t) {
    return (
      (a = 0 === t.length ? le(a, n) : le(a, n >= 0 ? 1 : -1)),
      n > 0 ? t.concat([ye(a)]) : [ye(a)].concat(t)
    )
  }, [])
}
function Te(t) {
  var e = t.startDate,
    n = t.endDate,
    r = t.isDateBlocked,
    a = t.minBookingDays,
    i = t.exactMinBookingDays,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = !o || !oe(e, Jt(o, -1)),
    c = !u || !ue(Jt(e, a - 1), u)
  return (
    !(!e || 1 !== a || n || r(e)) ||
    ((e && a > 1 && !n && !i) || (e && a > 0 && i && s && c) || (e && a > 0 && i && !o && !u)
      ? !Zt({start: e, end: Jt(e, a - 1)}).some(function (t) {
          return r(t)
        })
      : !(!e || !n || i) &&
        !oe(n, Jt(e, a - 1)) &&
        !Zt({start: e, end: n}).some(function (t) {
          return r(t)
        }))
  )
}
;(exports.END_DATE = 'endDate'),
  (exports.START_DATE = 'startDate'),
  (exports.dayLabelFormat = re),
  (exports.getCurrentYearMonthAndDate = be),
  (exports.getDateMonthAndYear = ye),
  (exports.getDays = ne),
  (exports.getInitialMonths = pe),
  (exports.getInputValue = function (t, e, n) {
    return t && 'string' == typeof e ? Kt(t, e) : t && 'function' == typeof e ? e(t) : n
  }),
  (exports.getWeekdayLabels = ee),
  (exports.isDateBlocked = ve),
  (exports.isDateSelected = he),
  (exports.isEndDate = ge),
  (exports.isFirstOrLastSelectedDate = me),
  (exports.isStartDate = we),
  (exports.monthLabelFormat = ie),
  (exports.parseDate = function (t, e, n, r) {
    d(3, arguments)
    var a = String(t),
      i = String(e),
      o = r || {},
      u = o.locale || s
    if (!u.match) throw new RangeError('locale must contain match property')
    var f = u.options && u.options.firstWeekContainsDate,
      w = null == f ? 1 : c(f),
      g = null == o.firstWeekContainsDate ? w : c(o.firstWeekContainsDate)
    if (!(g >= 1 && g <= 7))
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
    var y = u.options && u.options.weekStartsOn,
      p = null == y ? 0 : c(y),
      D = null == o.weekStartsOn ? p : c(o.weekStartsOn)
    if (!(D >= 0 && D <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
    if ('' === i) return '' === a ? l(n) : new Date(NaN)
    var C,
      M = {firstWeekContainsDate: g, weekStartsOn: D, locale: u},
      U = [{priority: 10, set: Dt, index: 0}],
      S = i
        .match(gt)
        .map(function (t) {
          var e = t[0]
          return 'p' === e || 'P' === e ? (0, v[e])(t, u.formatLong, M) : t
        })
        .join('')
        .match(wt),
      E = []
    for (C = 0; C < S.length; C++) {
      var P = S[C]
      !o.useAdditionalWeekYearTokens && k(P) && x(P),
        !o.useAdditionalDayOfYearTokens && T(P) && x(P)
      var Y = P[0],
        N = mt[Y]
      if (N) {
        var q = N.incompatibleTokens
        if (Array.isArray(q)) {
          for (var O = void 0, B = 0; B < E.length; B++) {
            var H = E[B].token
            if (-1 !== q.indexOf(H) || H === Y) {
              O = E[B]
              break
            }
          }
          if (O)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(O.fullToken, '` and `')
                .concat(P, '` at the same time'),
            )
        } else if ('*' === N.incompatibleTokens && E.length)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              P,
              '` and any other token at the same time',
            ),
          )
        E.push({token: Y, fullToken: P})
        var L = N.parse(a, P, u.match, M)
        if (!L) return new Date(NaN)
        U.push({
          priority: N.priority,
          set: N.set,
          validate: N.validate,
          value: L.value,
          index: U.length,
        }),
          (a = L.rest)
      } else {
        if (Y.match(pt))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + Y + '`',
          )
        if (("''" === P ? (P = "'") : "'" === Y && (P = Tt(P)), 0 !== a.indexOf(P)))
          return new Date(NaN)
        a = a.slice(P.length)
      }
    }
    if (a.length > 0 && bt.test(a)) return new Date(NaN)
    var W = U.map(function (t) {
        return t.priority
      })
        .sort(function (t, e) {
          return e - t
        })
        .filter(function (t, e, n) {
          return n.indexOf(t) === e
        })
        .map(function (t) {
          return U.filter(function (e) {
            return e.priority === t
          }).reverse()
        })
        .map(function (t) {
          return t[0]
        }),
      F = l(n)
    if (isNaN(F)) return new Date(NaN)
    var Q = h(F, b(F)),
      R = {}
    for (C = 0; C < W.length; C++) {
      var I = W[C]
      if (I.validate && !I.validate(Q, I.value, M)) return new Date(NaN)
      var A = I.set(Q, R, I.value, M)
      A[0] ? ((Q = A[0]), m(R, A[1])) : (Q = A)
    }
    return Q
  }),
  (exports.useDatepicker = function (e) {
    var n = e.startDate,
      r = e.endDate,
      a = e.focusedInput,
      i = e.minBookingDate,
      o = e.maxBookingDate,
      u = e.onDatesChange,
      s = e.initialVisibleMonth,
      c = e.exactMinBookingDays,
      d = void 0 !== c && c,
      l = e.minBookingDays,
      f = void 0 === l ? 1 : l,
      h = e.numberOfMonths,
      m = void 0 === h ? 2 : h,
      w = e.firstDayOfWeek,
      g = void 0 === w ? 1 : w,
      v = e.isDateBlocked,
      y =
        void 0 === v
          ? function () {
              return !1
            }
          : v,
      b = e.unavailableDates,
      p = void 0 === b ? [] : b,
      D = e.changeActiveMonthOnSelect,
      T = void 0 === D || D,
      k = t.useState(function () {
        return pe(m, n || s || null)
      }),
      x = k[0],
      C = k[1],
      M = t.useState(null),
      U = M[0],
      S = M[1],
      E = t.useState(n),
      P = E[0],
      Y = E[1]
    t.useEffect(function () {
      return (
        'undefined' != typeof window &&
          window.addEventListener &&
          window.addEventListener('keydown', B),
        function () {
          window.removeEventListener && window.removeEventListener('keydown', B)
        }
      )
    })
    var N = function (t) {
        return fe(p, t) || y(t)
      },
      q = function (t) {
        Y(t), (!P || (P && !de(t, P))) && C(pe(m, t))
      },
      O = function (t) {
        return ve({
          date: t,
          minBookingDate: i,
          maxBookingDate: o,
          startDate: n,
          endDate: r,
          minBookingDays: f,
          isDateBlockedFn: N,
        })
      }
    function B(t) {
      if (
        ('ArrowRight' === t.key ||
          'ArrowLeft' === t.key ||
          'ArrowDown' === t.key ||
          'ArrowUp' === t.key) &&
        !P
      ) {
        var e = x[0]
        q(e.date), C(pe(m, e.date))
      }
    }
    var H = t.useCallback(
        function () {
          C(De(x, m, -1)), Y(null)
        },
        [x, m],
      ),
      L = t.useCallback(
        function () {
          C(De(x, m, -1, 1)), Y(null)
        },
        [x, m],
      ),
      W = t.useCallback(
        function () {
          C(De(x, m, 1)), Y(null)
        },
        [x, m],
      ),
      F = t.useCallback(
        function () {
          C(De(x, m, 1, 1)), Y(null)
        },
        [x, m],
      ),
      Q = t.useCallback(
        function (t) {
          C(pe(m, t)), Y(null)
        },
        [m],
      ),
      R = t.useCallback(
        function (t) {
          void 0 === t && (t = 1), C(De(x, m, -(12 * t - m + 1))), Y(null)
        },
        [x, m],
      ),
      I = t.useCallback(
        function (t) {
          void 0 === t && (t = 1), C(De(x, m, 12 * t - m + 1)), Y(null)
        },
        [x, m],
      )
    return {
      firstDayOfWeek: g,
      activeMonths: x,
      isDateSelected: function (t) {
        return he(t, n, r)
      },
      isDateHovered: function (t) {
        return (function (t) {
          var e = t.date,
            n = t.startDate,
            r = t.endDate,
            a = t.isDateBlocked,
            i = t.hoveredDate,
            o = t.minBookingDays,
            u = t.exactMinBookingDays
          return i && o > 1 && u && se(e, {start: i, end: Jt(i, o - 1)})
            ? !Zt({start: i, end: Jt(i, o - 1)}).some(function (t) {
                return a(t)
              })
            : n && !r && i && se(e, {start: n, end: Jt(n, o - 1)}) && de(n, i) && o > 1
            ? !Zt({start: n, end: Jt(n, o - 1)}).some(function (t) {
                return a(t)
              })
            : !(!n || r || !i || oe(i, n) || !se(e, {start: n, end: i})) &&
              !Zt({start: n, end: i}).some(function (t) {
                return a(t)
              })
        })({
          date: t,
          hoveredDate: U,
          startDate: n,
          endDate: r,
          minBookingDays: f,
          exactMinBookingDays: d,
          isDateBlocked: N,
        })
      },
      isFirstOrLastSelectedDate: function (t) {
        return me(t, n, r)
      },
      isStartDate: function (t) {
        return we(t, n)
      },
      isEndDate: function (t) {
        return ge(t, r)
      },
      isDateBlocked: O,
      numberOfMonths: m,
      isDateFocused: function (t) {
        return !!P && de(t, P)
      },
      focusedDate: P,
      hoveredDate: U,
      onResetDates: function () {
        u({startDate: null, endDate: null, focusedInput: 'startDate'})
      },
      onDateHover: function (t) {
        if (t) {
          if (t) {
            var e = !O(t) || (n && de(t, n)),
              a = !i || !oe(t, Jt(i, -1)),
              u = !o || !ue(t, o),
              s = Jt(t, f - 1),
              c = !i || !oe(s, i),
              l = !o || !ue(s, o),
              h = d && f > 1 && a && u && c && l,
              m = n && !r && !d && a && u,
              w = !(f > 1 && n) || se(t, {start: n, end: Jt(n, f - 2)}),
              g = n && de(t, n) && w
            e && (h || m || g) ? S(t) : null !== U && S(null)
          }
        } else S(null)
      },
      onDateSelect: function (t) {
        ;('endDate' === a || 'startDate' === a) &&
        f > 0 &&
        d &&
        Te({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: i,
          maxBookingDate: o,
          isDateBlocked: N,
          startDate: t,
          endDate: null,
        })
          ? u({startDate: t, endDate: Jt(t, f - 1), focusedInput: null})
          : (('endDate' === a && n && oe(t, n)) || ('startDate' === a && r && ue(t, r))) &&
            !d &&
            Te({minBookingDays: f, isDateBlocked: N, startDate: t, endDate: null})
          ? u({endDate: null, startDate: t, focusedInput: 'endDate'})
          : 'startDate' === a &&
            !d &&
            Te({minBookingDays: f, isDateBlocked: N, endDate: r, startDate: t})
          ? u({endDate: r, startDate: t, focusedInput: 'endDate'})
          : 'startDate' === a &&
            !d &&
            Te({minBookingDays: f, isDateBlocked: N, endDate: null, startDate: t})
          ? u({endDate: null, startDate: t, focusedInput: 'endDate'})
          : 'endDate' === a &&
            n &&
            !oe(t, n) &&
            !d &&
            Te({minBookingDays: f, isDateBlocked: N, startDate: n, endDate: t}) &&
            u({startDate: n, endDate: t, focusedInput: null}),
          'endDate' !== a && (!P || (P && !de(t, P))) && T && C(pe(m, t))
      },
      onDateFocus: q,
      goToPreviousMonths: H,
      goToPreviousMonthsByOneMonth: L,
      goToNextMonths: W,
      goToNextMonthsByOneMonth: F,
      goToDate: Q,
      goToPreviousYear: R,
      goToNextYear: I,
    }
  }),
  (exports.useDay = function (e) {
    var n = e.date,
      r = e.focusedDate,
      a = e.isDateSelected,
      i = e.isDateFocused,
      o = e.isFirstOrLastSelectedDate,
      u = e.isDateHovered,
      s = e.isDateBlocked,
      c = e.onDateSelect,
      d = e.onDateFocus,
      l = e.onDateHover,
      f = t.useCallback(
        function () {
          return c(n)
        },
        [n, c],
      ),
      h = t.useCallback(
        function () {
          return l(n)
        },
        [n, l],
      ),
      m = s(n) && !u(n)
    return {
      tabIndex: null === r || i(n) ? 0 : -1,
      isSelected: a(n),
      isSelectedStartOrEnd: o(n),
      isWithinHoverRange: u(n),
      disabledDate: m,
      onKeyDown: function (t) {
        'ArrowRight' === t.key
          ? d(Jt(n, 1))
          : 'ArrowLeft' === t.key
          ? d(Jt(n, -1))
          : 'ArrowUp' === t.key
          ? d(Jt(n, -7))
          : 'ArrowDown' === t.key && d(Jt(n, 7))
      },
      onClick: m ? function () {} : f,
      onMouseEnter: h,
    }
  }),
  (exports.useMonth = function (e) {
    var n = e.year,
      r = e.month,
      a = e.firstDayOfWeek,
      i = void 0 === a ? 1 : a,
      o = e.dayLabelFormat,
      u = void 0 === o ? re : o,
      s = e.weekdayLabelFormat,
      c = void 0 === s ? ae : s,
      d = e.monthLabelFormat,
      l = void 0 === d ? ie : d
    return {
      days: t.useMemo(
        function () {
          return ne({year: n, month: r, firstDayOfWeek: i, dayLabelFormat: u})
        },
        [n, r, i, u],
      ),
      weekdayLabels: t.useMemo(
        function () {
          return ee({firstDayOfWeek: i, weekdayLabelFormat: c})
        },
        [i, c],
      ),
      monthLabel: l(new Date(n, r)),
    }
  }),
  (exports.weekdayLabelFormat = ae)
