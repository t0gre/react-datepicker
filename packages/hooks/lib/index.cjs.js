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
    aboutXMonths: {one: 'about 1 month', other: 'about {{count}} months'},
    xMonths: {one: '1 month', other: '{{count}} months'},
    aboutXYears: {one: 'about 1 year', other: 'about {{count}} years'},
    xYears: {one: '1 year', other: '{{count}} years'},
    overXYears: {one: 'over 1 year', other: 'over {{count}} years'},
    almostXYears: {one: 'almost 1 year', other: 'almost {{count}} years'},
  }
function n(t) {
  return function(e) {
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
function o(t) {
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
var u,
  s = {
    code: 'en-US',
    formatDistance: function(t, n, r) {
      var a
      return (
        (r = r || {}),
        (a =
          'string' == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace('{{count}}', n)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + a : a + ' ago') : a
      )
    },
    formatLong: r,
    formatRelative: function(t, e, n, r) {
      return a[t]
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
        argumentCallback: function(t) {
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
          valueCallback: function(t) {
            return parseInt(t, 10)
          },
        }),
        function(t, e) {
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
        valueCallback: function(t) {
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
      t + ' argument' + t > 1 ? 's' : ' required, but only ' + e.length + ' present',
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
  P: function(t, e) {
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
  var e = new Date(t.getTime()),
    n = Math.ceil(e.getTimezoneOffset())
  return e.setSeconds(0, 0), 6e4 * n + (e.getTime() % 6e4)
}
var b = ['D', 'DD'],
  p = ['YY', 'YYYY']
function D(t) {
  return -1 !== b.indexOf(t)
}
function T(t) {
  return -1 !== p.indexOf(t)
}
function k(t) {
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
function x(t, e) {
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
function C(t, e) {
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
  var h = x(f, e),
    m = new Date(0)
  m.setUTCFullYear(r, 0, s), m.setUTCHours(0, 0, 0, 0)
  var w = x(m, e)
  return n.getTime() >= h.getTime() ? r + 1 : n.getTime() >= w.getTime() ? r : r - 1
}
function M(t, e, n) {
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
function U(t) {
  d(1, arguments)
  var e = 1,
    n = l(t),
    r = n.getUTCDay(),
    a = (r < e ? 7 : 0) + r - e
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function S(t) {
  d(1, arguments)
  var e = l(t),
    n = e.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = U(r),
    i = new Date(0)
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = U(i)
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}
function Y(t) {
  d(1, arguments)
  var e = S(t),
    n = new Date(0)
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = U(n)
  return r
}
function E(t) {
  d(1, arguments)
  var e = l(t),
    n = U(e).getTime() - Y(e).getTime()
  return Math.round(n / 6048e5) + 1
}
function P(t, e) {
  d(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    i = null == a ? 1 : c(a),
    o = null == n.firstWeekContainsDate ? i : c(n.firstWeekContainsDate),
    u = C(t, e),
    s = new Date(0)
  s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0)
  var l = x(s, e)
  return l
}
function q(t, e) {
  d(1, arguments)
  var n = l(t),
    r = x(n, e).getTime() - P(n, e).getTime()
  return Math.round(r / 6048e5) + 1
}
var B = /^(1[0-2]|0?\d)/,
  H = /^(3[0-1]|[0-2]?\d)/,
  O = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  N = /^(5[0-3]|[0-4]?\d)/,
  L = /^(2[0-3]|[0-1]?\d)/,
  W = /^(2[0-4]|[0-1]?\d)/,
  F = /^(1[0-1]|0?\d)/,
  Q = /^(1[0-2]|0?\d)/,
  R = /^[0-5]?\d/,
  I = /^[0-5]?\d/,
  A = /^\d/,
  X = /^\d{1,2}/,
  G = /^\d{1,3}/,
  z = /^\d{1,4}/,
  j = /^-?\d+/,
  K = /^-?\d/,
  _ = /^-?\d{1,2}/,
  J = /^-?\d{1,3}/,
  Z = /^-?\d{1,4}/,
  V = /^([+-])(\d{2})(\d{2})?|Z/,
  $ = /^([+-])(\d{2})(\d{2})|Z/,
  tt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  et = /^([+-])(\d{2}):(\d{2})|Z/,
  nt = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function rt(t, e, n) {
  var r = e.match(t)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: e.slice(r[0].length)}
}
function at(t, e) {
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
function it(t, e) {
  return rt(j, t, e)
}
function ot(t, e, n) {
  switch (t) {
    case 1:
      return rt(A, e, n)
    case 2:
      return rt(X, e, n)
    case 3:
      return rt(G, e, n)
    case 4:
      return rt(z, e, n)
    default:
      return rt(new RegExp('^\\d{1,' + t + '}'), e, n)
  }
}
function ut(t, e, n) {
  switch (t) {
    case 1:
      return rt(K, e, n)
    case 2:
      return rt(_, e, n)
    case 3:
      return rt(J, e, n)
    case 4:
      return rt(Z, e, n)
    default:
      return rt(new RegExp('^-?\\d{1,' + t + '}'), e, n)
  }
}
function st(t) {
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
function ct(t, e) {
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
var dt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  lt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function ft(t) {
  return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
}
var ht = {
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
            return ot(4, t, a)
          case 'yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ot(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = t.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var i = ct(n.year, a)
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
            return ot(4, t, a)
          case 'Yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ot(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = C(t, r)
        if (n.isTwoDigitYear) {
          var i = ct(n.year, a)
          return t.setUTCFullYear(i, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), x(t, r)
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), x(t, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(t, e, n, r) {
        return ut('R' === e ? 4 : e.length, t)
      },
      set: function(t, e, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), U(a)
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
        return ut('u' === e ? 4 : e.length, t)
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
            return ot(e.length, t)
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
            return ot(e.length, t)
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
            return rt(B, t, a)
          case 'MM':
            return ot(2, t, a)
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
            return rt(B, t, a)
          case 'LL':
            return ot(2, t, a)
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
            return rt(N, t)
          case 'wo':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ot(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return x(
          (function(t, e, n) {
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
      parse: function(t, e, n, r) {
        switch (e) {
          case 'I':
            return rt(N, t)
          case 'Io':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ot(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return U(
          (function(t, e) {
            d(2, arguments)
            var n = l(t),
              r = c(e),
              a = E(n) - r
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
            return rt(H, t)
          case 'do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ot(e.length, t)
        }
      },
      validate: function(t, e, n) {
        var r = ft(t.getUTCFullYear()),
          a = t.getUTCMonth()
        return r ? e >= 1 && e <= lt[a] : e >= 1 && e <= dt[a]
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
            return rt(O, t)
          case 'Do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ot(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return ft(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
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
        return (t = M(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ot(e.length, t, a)
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
        return (t = M(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ot(e.length, t, a)
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
        return (t = M(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ot(e.length, t)
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
        return t.setUTCHours(st(n), 0, 0, 0), t
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
        return t.setUTCHours(st(n), 0, 0, 0), t
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
        return t.setUTCHours(st(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'h':
            return rt(Q, t)
          case 'ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ot(e.length, t)
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
            return rt(L, t)
          case 'Ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ot(e.length, t)
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
            return rt(F, t)
          case 'Ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ot(e.length, t)
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
            return rt(W, t)
          case 'ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ot(e.length, t)
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
            return rt(R, t)
          case 'mo':
            return n.ordinalNumber(t, {unit: 'minute'})
          default:
            return ot(e.length, t)
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
            return rt(I, t)
          case 'so':
            return n.ordinalNumber(t, {unit: 'second'})
          default:
            return ot(e.length, t)
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
        return ot(e.length, t, function(t) {
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
            return at(V, t)
          case 'XX':
            return at($, t)
          case 'XXXX':
            return at(tt, t)
          case 'XXXXX':
            return at(nt, t)
          case 'XXX':
          default:
            return at(et, t)
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
            return at(V, t)
          case 'xx':
            return at($, t)
          case 'xxxx':
            return at(tt, t)
          case 'xxxxx':
            return at(nt, t)
          case 'xxx':
          default:
            return at(et, t)
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
        return it(t)
      },
      set: function(t, e, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(t, e, n, r) {
        return it(t)
      },
      set: function(t, e, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  mt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  wt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  gt = /^'([^]*?)'?$/,
  vt = /''/g,
  yt = /\S/,
  bt = /[a-zA-Z]/
function pt(t, e) {
  if (e.timestampIsSet) return t
  var n = new Date(0)
  return (
    n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
    n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
    n
  )
}
function Dt(t) {
  return t.match(gt)[1].replace(vt, "'")
}
function Tt(t) {
  d(1, arguments)
  var e = l(t)
  return !isNaN(e)
}
function kt(t, e) {
  for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r
  return n + r
}
var xt = function(t, e) {
    var n = t.getUTCFullYear(),
      r = n > 0 ? n : 1 - n
    return kt('yy' === e ? r % 100 : r, e.length)
  },
  Ct = function(t, e) {
    var n = t.getUTCMonth()
    return 'M' === e ? String(n + 1) : kt(n + 1, 2)
  },
  Mt = function(t, e) {
    return kt(t.getUTCDate(), e.length)
  },
  Ut = function(t, e) {
    return kt(t.getUTCHours() % 12 || 12, e.length)
  },
  St = function(t, e) {
    return kt(t.getUTCHours(), e.length)
  },
  Yt = function(t, e) {
    return kt(t.getUTCMinutes(), e.length)
  },
  Et = function(t, e) {
    return kt(t.getUTCSeconds(), e.length)
  },
  Pt = function(t, e) {
    var n = e.length,
      r = t.getUTCMilliseconds()
    return kt(Math.floor(r * Math.pow(10, n - 3)), e.length)
  }
var qt = 'midnight',
  Bt = 'noon',
  Ht = 'morning',
  Ot = 'afternoon',
  Nt = 'evening',
  Lt = 'night',
  Wt = {
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
      return xt(t, e)
    },
    Y: function(t, e, n, r) {
      var a = C(t, r),
        i = a > 0 ? a : 1 - a
      return 'YY' === e
        ? kt(i % 100, 2)
        : 'Yo' === e
        ? n.ordinalNumber(i, {unit: 'year'})
        : kt(i, e.length)
    },
    R: function(t, e) {
      return kt(S(t), e.length)
    },
    u: function(t, e) {
      return kt(t.getUTCFullYear(), e.length)
    },
    Q: function(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'Q':
          return String(r)
        case 'QQ':
          return kt(r, 2)
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
          return kt(r, 2)
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
          return Ct(t, e)
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
          return kt(r + 1, 2)
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
      var a = q(t, r)
      return 'wo' === e ? n.ordinalNumber(a, {unit: 'week'}) : kt(a, e.length)
    },
    I: function(t, e, n) {
      var r = E(t)
      return 'Io' === e ? n.ordinalNumber(r, {unit: 'week'}) : kt(r, e.length)
    },
    d: function(t, e, n) {
      return 'do' === e ? n.ordinalNumber(t.getUTCDate(), {unit: 'date'}) : Mt(t, e)
    },
    D: function(t, e, n) {
      var r = (function(t) {
        d(1, arguments)
        var e = l(t),
          n = e.getTime()
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        var r = e.getTime(),
          a = n - r
        return Math.floor(a / 864e5) + 1
      })(t)
      return 'Do' === e ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : kt(r, e.length)
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
          return kt(i, 2)
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
          return kt(i, e.length)
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
          return kt(a, e.length)
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
      switch (((r = 12 === a ? Bt : 0 === a ? qt : a / 12 >= 1 ? 'pm' : 'am'), e)) {
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
      switch (((r = a >= 17 ? Nt : a >= 12 ? Ot : a >= 4 ? Ht : Lt), e)) {
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
      return Ut(t, e)
    },
    H: function(t, e, n) {
      return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), {unit: 'hour'}) : St(t, e)
    },
    K: function(t, e, n) {
      var r = t.getUTCHours() % 12
      return 'Ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : kt(r, e.length)
    },
    k: function(t, e, n) {
      var r = t.getUTCHours()
      return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : kt(r, e.length)
    },
    m: function(t, e, n) {
      return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), {unit: 'minute'}) : Yt(t, e)
    },
    s: function(t, e, n) {
      return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), {unit: 'second'}) : Et(t, e)
    },
    S: function(t, e) {
      return Pt(t, e)
    },
    X: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (e) {
        case 'X':
          return Qt(a)
        case 'XXXX':
        case 'XX':
          return Rt(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return Rt(a, ':')
      }
    },
    x: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'x':
          return Qt(a)
        case 'xxxx':
        case 'xx':
          return Rt(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return Rt(a, ':')
      }
    },
    O: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Ft(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + Rt(a, ':')
      }
    },
    z: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Ft(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + Rt(a, ':')
      }
    },
    t: function(t, e, n, r) {
      var a = r._originalDate || t
      return kt(Math.floor(a.getTime() / 1e3), e.length)
    },
    T: function(t, e, n, r) {
      return kt((r._originalDate || t).getTime(), e.length)
    },
  }
function Ft(t, e) {
  var n = t > 0 ? '-' : '+',
    r = Math.abs(t),
    a = Math.floor(r / 60),
    i = r % 60
  if (0 === i) return n + String(a)
  var o = e || ''
  return n + String(a) + o + kt(i, 2)
}
function Qt(t, e) {
  return t % 60 == 0 ? (t > 0 ? '-' : '+') + kt(Math.abs(t) / 60, 2) : Rt(t, e)
}
function Rt(t, e) {
  var n = e || '',
    r = t > 0 ? '-' : '+',
    a = Math.abs(t)
  return r + kt(Math.floor(a / 60), 2) + n + kt(a % 60, 2)
}
var It = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Xt = /^'([^]*?)'?$/,
  Gt = /''/g,
  zt = /[a-zA-Z]/
function jt(t, e, n) {
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
  var b = l(t)
  if (!Tt(b)) throw new RangeError('Invalid time value')
  var p = y(b),
    x = h(b, p),
    C = {firstWeekContainsDate: f, weekStartsOn: g, locale: i, _originalDate: b},
    M = r
      .match(At)
      .map(function(t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, v[e])(t, i.formatLong, C) : t
      })
      .join('')
      .match(It)
      .map(function(t) {
        if ("''" === t) return "'"
        var e = t[0]
        if ("'" === e) return Kt(t)
        var n = Wt[e]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && T(t) && k(t),
            !a.useAdditionalDayOfYearTokens && D(t) && k(t),
            n(x, t, i.localize, C)
          )
        if (e.match(zt))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + e + '`',
          )
        return t
      })
      .join('')
  return M
}
function Kt(t) {
  return t.match(Xt)[1].replace(Gt, "'")
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
***************************************************************************** */ function _t(
  t,
  e,
) {
  d(2, arguments)
  var n = l(t),
    r = c(e)
  return n.setDate(n.getDate() + r), n
}
function Jt(t, e) {
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
function Zt(t, e) {
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
function Vt(t) {
  d(1, arguments)
  var e = l(t)
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}
function $t(t, e) {
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
function te(t) {
  var e = void 0 === t ? {} : t,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    a = e.weekdayLabelFormat,
    i =
      void 0 === a
        ? function(t) {
            return jt(t, 'iiiiii')
          }
        : a,
    o = new Date()
  return Jt({start: _t($t(o), r), end: _t(Zt(o), r)}).reduce(function(t, e) {
    return t.push(i(e)), t
  }, [])
}
function ee(t) {
  var e = t.year,
    n = t.month,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = t.dayLabelFormat,
    o =
      void 0 === i
        ? function(t) {
            return jt(t, 'dd')
          }
        : i,
    u = new Date(e, n),
    s = Vt(u),
    c = (function(t) {
      d(1, arguments)
      var e = l(t),
        n = e.getDay()
      return n
    })(s),
    f = (function(t) {
      d(1, arguments)
      var e = l(t),
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
    Jt({start: s, end: f}).map(function(t) {
      return {date: t, dayLabel: o(t)}
    }),
  )
}
var ne = function(t) {
    return jt(t, 'dd')
  },
  re = function(t) {
    return jt(t, 'eeeeee')
  },
  ae = function(t) {
    return jt(t, 'MMMM yyyy')
  }
function ie(t, e) {
  d(2, arguments)
  var n = l(t),
    r = l(e)
  return n.getTime() < r.getTime()
}
function oe(t, e) {
  d(2, arguments)
  var n = l(t),
    r = l(e)
  return n.getTime() > r.getTime()
}
function ue(t, e) {
  d(2, arguments)
  var n = e || {},
    r = l(t).getTime(),
    a = l(n.start).getTime(),
    i = l(n.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return r >= a && r <= i
}
function se(t) {
  d(1, arguments)
  var e = l(t)
  return e.setHours(0, 0, 0, 0), e
}
function ce(t, e) {
  d(2, arguments)
  var n = se(t),
    r = se(e)
  return n.getTime() === r.getTime()
}
function de(t) {
  d(1, arguments)
  var e = l(t),
    n = e.getFullYear(),
    r = e.getMonth(),
    a = new Date(0)
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
function le(t, e) {
  d(2, arguments)
  var n = l(t),
    r = c(e),
    a = n.getMonth() + r,
    i = new Date(0)
  i.setFullYear(n.getFullYear(), a, 1), i.setHours(0, 0, 0, 0)
  var o = de(i)
  return n.setMonth(a, Math.min(o, n.getDate())), n
}
var fe = function(t, e) {
  return (
    void 0 === t && (t = []),
    t.some(function(t) {
      return ce(e, t)
    })
  )
}
function he(t, e, n) {
  return !(!e || !n) && ue(t, {start: e, end: n})
}
function me(t, e, n) {
  return !!((e && ce(t, e)) || (n && ce(t, n)))
}
function we(t) {
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
    (l && ie(e, l)) ||
    (f && oe(e, f)) ||
    (i && !o && s > 1 && ue(e, {start: i, end: _t(i, s - 2)})) ||
    (a && a(e))
  )
}
function ge(t) {
  var e = Vt(t)
  return {
    year: (function(t) {
      d(1, arguments)
      var e = l(t),
        n = e.getFullYear()
      return n
    })(e),
    month: (function(t) {
      d(1, arguments)
      var e = l(t),
        n = e.getMonth()
      return n
    })(e),
    date: e,
  }
}
function ve() {
  return ge(se(Date.now()))
}
function ye(t, e) {
  var n = e ? ge(e) : ve(),
    r = n.date,
    a = [n]
  return (
    t > 1 &&
      (a = Array.from(Array(t - 1).keys()).reduce(function(t) {
        return (r = le(t[t.length - 1].date, 1)), t.concat([ge(r)])
      }, a)),
    a
  )
}
function be(t, e, n) {
  var r = t[n > 0 ? t.length - 1 : 0].date
  return Array.from(Array(e).keys()).reduce(function(t) {
    return (
      (r = 0 === t.length ? le(r, n) : le(r, n >= 0 ? 1 : -1)),
      n > 0 ? t.concat([ge(r)]) : [ge(r)].concat(t)
    )
  }, [])
}
function pe(t) {
  var e = t.startDate,
    n = t.endDate,
    r = t.isDateBlocked,
    a = t.minBookingDays,
    i = t.exactMinBookingDays,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = !o || !ie(e, _t(o, -1)),
    c = !u || !oe(_t(e, a - 1), u)
  return (
    !(!e || 1 !== a || n || r(e)) ||
    ((e && a > 1 && !n && !i) || (e && a > 0 && i && s && c) || (e && a > 0 && i && !o && !u)
      ? !Jt({start: e, end: _t(e, a - 1)}).some(function(t) {
          return r(t)
        })
      : !(!e || !n || i) &&
        !ie(n, _t(e, a - 1)) &&
          !Jt({start: e, end: n}).some(function(t) {
            return r(t)
          }))
  )
}
;(exports.END_DATE = 'endDate'),
  (exports.START_DATE = 'startDate'),
  (exports.dayLabelFormat = ne),
  (exports.getCurrentYearMonthAndDate = ve),
  (exports.getDateMonthAndYear = ge),
  (exports.getDays = ee),
  (exports.getInitialMonths = ye),
  (exports.getInputValue = function(t, e, n) {
    return t && 'string' == typeof e ? jt(t, e) : t && 'function' == typeof e ? e(t) : n
  }),
  (exports.getWeekdayLabels = te),
  (exports.isDateBlocked = we),
  (exports.isDateSelected = he),
  (exports.isFirstOrLastSelectedDate = me),
  (exports.monthLabelFormat = ae),
  (exports.parseDate = function(t, e, n, r) {
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
    var b = u.options && u.options.weekStartsOn,
      p = null == b ? 0 : c(b),
      x = null == o.weekStartsOn ? p : c(o.weekStartsOn)
    if (!(x >= 0 && x <= 6))
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
    if ('' === i) return '' === a ? l(n) : new Date(NaN)
    var C,
      M = {firstWeekContainsDate: g, weekStartsOn: x, locale: u},
      U = [{priority: 10, set: pt, index: 0}],
      S = i
        .match(wt)
        .map(function(t) {
          var e = t[0]
          return 'p' === e || 'P' === e ? (0, v[e])(t, u.formatLong, M) : t
        })
        .join('')
        .match(mt),
      Y = []
    for (C = 0; C < S.length; C++) {
      var E = S[C]
      !o.useAdditionalWeekYearTokens && T(E) && k(E),
        !o.useAdditionalDayOfYearTokens && D(E) && k(E)
      var P = E[0],
        q = ht[P]
      if (q) {
        var B = q.incompatibleTokens
        if (Array.isArray(B)) {
          for (var H = void 0, O = 0; O < Y.length; O++) {
            var N = Y[O].token
            if (-1 !== B.indexOf(N) || N === P) {
              H = Y[O]
              break
            }
          }
          if (H)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(H.fullToken, '` and `')
                .concat(E, '` at the same time'),
            )
        } else if ('*' === q.incompatibleTokens && Y.length)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              E,
              '` and any other token at the same time',
            ),
          )
        Y.push({token: P, fullToken: E})
        var L = q.parse(a, E, u.match, M)
        if (!L) return new Date(NaN)
        U.push({
          priority: q.priority,
          set: q.set,
          validate: q.validate,
          value: L.value,
          index: U.length,
        }),
          (a = L.rest)
      } else {
        if (P.match(bt))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + P + '`',
          )
        if (("''" === E ? (E = "'") : "'" === P && (E = Dt(E)), 0 !== a.indexOf(E)))
          return new Date(NaN)
        a = a.slice(E.length)
      }
    }
    if (a.length > 0 && yt.test(a)) return new Date(NaN)
    var W = U.map(function(t) {
        return t.priority
      })
        .sort(function(t, e) {
          return e - t
        })
        .filter(function(t, e, n) {
          return n.indexOf(t) === e
        })
        .map(function(t) {
          return U.filter(function(e) {
            return e.priority === t
          }).reverse()
        })
        .map(function(t) {
          return t[0]
        }),
      F = l(n)
    if (isNaN(F)) return new Date(NaN)
    var Q = h(F, y(F)),
      R = {}
    for (C = 0; C < W.length; C++) {
      var I = W[C]
      if (I.validate && !I.validate(Q, I.value, M)) return new Date(NaN)
      var A = I.set(Q, R, I.value, M)
      A[0] ? ((Q = A[0]), m(R, A[1])) : (Q = A)
    }
    return Q
  }),
  (exports.useDatepicker = function(e) {
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
          ? function() {
              return !1
            }
          : v,
      b = e.unavailableDates,
      p = void 0 === b ? [] : b,
      D = t.useState(function() {
        return ye(m, n || s || null)
      }),
      T = D[0],
      k = D[1],
      x = t.useState(null),
      C = x[0],
      M = x[1],
      U = t.useState(n),
      S = U[0],
      Y = U[1]
    t.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', B),
        function() {
          window.removeEventListener('keydown', B)
        }
      )
    })
    var E = function(t) {
        return fe(p, t) || y(t)
      },
      P = function(t) {
        Y(t), (!S || (S && !ce(t, S))) && k(ye(m, t))
      },
      q = function(t) {
        return we({
          date: t,
          minBookingDate: i,
          maxBookingDate: o,
          startDate: n,
          endDate: r,
          minBookingDays: f,
          isDateBlockedFn: E,
        })
      }
    function B(t) {
      if (
        ('ArrowRight' === t.key ||
          'ArrowLeft' === t.key ||
          'ArrowDown' === t.key ||
          'ArrowUp' === t.key) &&
        !S
      ) {
        var e = T[0]
        P(e.date), k(ye(m, e.date))
      }
    }
    return {
      firstDayOfWeek: g,
      activeMonths: T,
      isDateSelected: function(t) {
        return he(t, n, r)
      },
      isDateHovered: function(t) {
        return (function(t) {
          var e = t.date,
            n = t.startDate,
            r = t.endDate,
            a = t.isDateBlocked,
            i = t.hoveredDate,
            o = t.minBookingDays,
            u = t.exactMinBookingDays
          return i && o > 1 && u && ue(e, {start: i, end: _t(i, o - 1)})
            ? !Jt({start: i, end: _t(i, o - 1)}).some(function(t) {
                return a(t)
              })
            : n && !r && i && ue(e, {start: n, end: _t(n, o - 1)}) && ce(n, i) && o > 1
            ? !Jt({start: n, end: _t(n, o - 1)}).some(function(t) {
                return a(t)
              })
            : !(!n || r || !i || ie(i, n) || !ue(e, {start: n, end: i})) &&
              !Jt({start: n, end: i}).some(function(t) {
                return a(t)
              })
        })({
          date: t,
          hoveredDate: C,
          startDate: n,
          endDate: r,
          minBookingDays: f,
          exactMinBookingDays: d,
          isDateBlocked: E,
        })
      },
      isFirstOrLastSelectedDate: function(t) {
        return me(t, n, r)
      },
      isDateBlocked: q,
      numberOfMonths: m,
      isDateFocused: function(t) {
        return !!S && ce(t, S)
      },
      focusedDate: S,
      hoveredDate: C,
      onResetDates: function() {
        u({startDate: null, endDate: null, focusedInput: 'startDate'})
      },
      onDateHover: function(t) {
        if (t) {
          if (t) {
            var e = !q(t) || (n && ce(t, n)),
              a = !i || !ie(t, _t(i, -1)),
              u = !o || !oe(t, o),
              s = _t(t, f - 1),
              c = !i || !ie(s, i),
              l = !o || !oe(s, o),
              h = d && f > 1 && a && u && c && l,
              m = n && !r && !d && a && u,
              w = !(f > 1 && n) || ue(t, {start: n, end: _t(n, f - 2)}),
              g = n && ce(t, n) && w
            e && (h || m || g) ? M(t) : null !== C && M(null)
          }
        } else M(null)
      },
      onDateSelect: function(t) {
        ;('endDate' === a || 'startDate' === a) &&
        f > 0 &&
        d &&
        pe({
          minBookingDays: f,
          exactMinBookingDays: d,
          minBookingDate: i,
          maxBookingDate: o,
          isDateBlocked: E,
          startDate: t,
          endDate: null,
        })
          ? u({startDate: t, endDate: _t(t, f - 1), focusedInput: null})
          : (('endDate' === a && n && ie(t, n)) || ('startDate' === a && r && oe(t, r))) &&
            !d &&
            pe({minBookingDays: f, isDateBlocked: E, startDate: t, endDate: null})
          ? u({endDate: null, startDate: t, focusedInput: 'endDate'})
          : 'startDate' === a &&
            !d &&
            pe({minBookingDays: f, isDateBlocked: E, endDate: r, startDate: t})
          ? u({endDate: r, startDate: t, focusedInput: 'endDate'})
          : 'startDate' === a &&
            !d &&
            pe({minBookingDays: f, isDateBlocked: E, endDate: null, startDate: t})
          ? u({endDate: null, startDate: t, focusedInput: 'endDate'})
          : 'endDate' === a &&
            n &&
            !ie(t, n) &&
            !d &&
            pe({minBookingDays: f, isDateBlocked: E, startDate: n, endDate: t}) &&
            u({startDate: n, endDate: t, focusedInput: null}),
          'endDate' === a || (S && (!S || ce(t, S))) || k(ye(m, t))
      },
      onDateFocus: P,
      goToPreviousMonths: function() {
        k(be(T, m, -1)), Y(null)
      },
      goToNextMonths: function() {
        k(be(T, m, 1)), Y(null)
      },
      goToPreviousYear: function(t) {
        void 0 === t && (t = 1), k(be(T, m, -(12 * t - m + 1))), Y(null)
      },
      goToNextYear: function(t) {
        void 0 === t && (t = 1), k(be(T, m, 12 * t - m + 1)), Y(null)
      },
    }
  }),
  (exports.useDay = function(e) {
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
      f = e.dayRef,
      h = t.useCallback(
        function() {
          return c(n)
        },
        [n, c],
      ),
      m = t.useCallback(
        function() {
          return l(n)
        },
        [n, l],
      )
    t.useEffect(
      function() {
        f && f.current && i(n) && f.current.focus()
      },
      [f, n, i],
    )
    var w = s(n) && !u(n)
    return {
      tabIndex: null === r || i(n) ? 0 : -1,
      isSelected: a(n),
      isSelectedStartOrEnd: o(n),
      isWithinHoverRange: u(n),
      disabledDate: w,
      onKeyDown: function(t) {
        'ArrowRight' === t.key
          ? d(_t(n, 1))
          : 'ArrowLeft' === t.key
          ? d(_t(n, -1))
          : 'ArrowUp' === t.key
          ? d(_t(n, -7))
          : 'ArrowDown' === t.key && d(_t(n, 7))
      },
      onClick: w ? function() {} : h,
      onMouseEnter: m,
    }
  }),
  (exports.useMonth = function(e) {
    var n = e.year,
      r = e.month,
      a = e.firstDayOfWeek,
      i = void 0 === a ? 1 : a,
      o = e.dayLabelFormat,
      u = void 0 === o ? ne : o,
      s = e.weekdayLabelFormat,
      c = void 0 === s ? re : s,
      d = e.monthLabelFormat,
      l = void 0 === d ? ae : d
    return {
      days: t.useMemo(
        function() {
          return ee({year: n, month: r, firstDayOfWeek: i, dayLabelFormat: u})
        },
        [n, r, i, u],
      ),
      weekdayLabels: t.useMemo(
        function() {
          return te({firstDayOfWeek: i, weekdayLabelFormat: c})
        },
        [i, c],
      ),
      monthLabel: l(new Date(n, r)),
    }
  }),
  (exports.weekdayLabelFormat = re)
