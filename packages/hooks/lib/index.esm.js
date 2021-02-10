import {useMemo as t, useState as e, useEffect as n, useCallback as r} from 'react'
var a = {
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
function i(t) {
  return function (e) {
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
function c(t) {
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
var d,
  l = {
    code: 'en-US',
    formatDistance: function (t, e, n) {
      var r
      return (
        (n = n || {}),
        (r =
          'string' == typeof a[t] ? a[t] : 1 === e ? a[t].one : a[t].other.replace('{{count}}', e)),
        n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
      )
    },
    formatLong: o,
    formatRelative: function (t, e, n, r) {
      return u[t]
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
        argumentCallback: function (t) {
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
          valueCallback: function (t) {
            return parseInt(t, 10)
          },
        }),
        function (t, e) {
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
        valueCallback: function (t) {
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
function h(t, e) {
  if (e.length < t)
    throw new TypeError(
      t + ' argument' + (t > 1 ? 's' : '') + ' required, but only ' + e.length + ' present',
    )
}
function m(t) {
  h(1, arguments)
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
function w(t, e) {
  h(2, arguments)
  var n = m(t).getTime(),
    r = f(e)
  return new Date(n + r)
}
function g(t, e) {
  h(2, arguments)
  var n = f(e)
  return w(t, -n)
}
function v(t, e) {
  if (null == t)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n])
  return t
}
function y(t, e) {
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
function b(t, e) {
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
var D = {
  p: b,
  P: function (t, e) {
    var n,
      r = t.match(/(P+)(p+)?/),
      a = r[1],
      i = r[2]
    if (!i) return y(t, e)
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
    return n.replace('{{date}}', y(a, e)).replace('{{time}}', b(i, e))
  },
}
function T(t) {
  return t.getTime() % 6e4
}
function p(t) {
  var e = new Date(t.getTime()),
    n = Math.ceil(e.getTimezoneOffset())
  return e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + T(e)) % 6e4 : T(e))
}
var k = ['D', 'DD'],
  x = ['YY', 'YYYY']
function C(t) {
  return -1 !== k.indexOf(t)
}
function M(t) {
  return -1 !== x.indexOf(t)
}
function U(t) {
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
function S(t, e) {
  h(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = m(t),
    s = u.getUTCDay(),
    c = (s < o ? 7 : 0) + s - o
  return u.setUTCDate(u.getUTCDate() - c), u.setUTCHours(0, 0, 0, 0), u
}
function P(t, e) {
  h(1, arguments)
  var n = m(t, e),
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
  var d = S(c, e),
    l = new Date(0)
  l.setUTCFullYear(r, 0, s), l.setUTCHours(0, 0, 0, 0)
  var w = S(l, e)
  return n.getTime() >= d.getTime() ? r + 1 : n.getTime() >= w.getTime() ? r : r - 1
}
function E(t, e, n) {
  h(2, arguments)
  var r = n || {},
    a = r.locale,
    i = a && a.options && a.options.weekStartsOn,
    o = null == i ? 0 : f(i),
    u = null == r.weekStartsOn ? o : f(r.weekStartsOn)
  if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = m(t),
    c = f(e),
    d = s.getUTCDay(),
    l = c % 7,
    w = (l + 7) % 7,
    g = (w < u ? 7 : 0) + c - d
  return s.setUTCDate(s.getUTCDate() + g), s
}
function Y(t) {
  h(1, arguments)
  var e = 1,
    n = m(t),
    r = n.getUTCDay(),
    a = (r < e ? 7 : 0) + r - e
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function N(t) {
  h(1, arguments)
  var e = m(t),
    n = e.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = Y(r),
    i = new Date(0)
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = Y(i)
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}
function q(t) {
  h(1, arguments)
  var e = N(t),
    n = new Date(0)
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = Y(n)
  return r
}
function B(t) {
  h(1, arguments)
  var e = m(t),
    n = Y(e).getTime() - q(e).getTime()
  return Math.round(n / 6048e5) + 1
}
function O(t, e) {
  h(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    i = null == a ? 1 : f(a),
    o = null == n.firstWeekContainsDate ? i : f(n.firstWeekContainsDate),
    u = P(t, e),
    s = new Date(0)
  s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0)
  var c = S(s, e)
  return c
}
function H(t, e) {
  h(1, arguments)
  var n = m(t),
    r = S(n, e).getTime() - O(n, e).getTime()
  return Math.round(r / 6048e5) + 1
}
var L = /^(1[0-2]|0?\d)/,
  W = /^(3[0-1]|[0-2]?\d)/,
  F = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  Q = /^(5[0-3]|[0-4]?\d)/,
  R = /^(2[0-3]|[0-1]?\d)/,
  I = /^(2[0-4]|[0-1]?\d)/,
  X = /^(1[0-1]|0?\d)/,
  G = /^(1[0-2]|0?\d)/,
  A = /^[0-5]?\d/,
  z = /^[0-5]?\d/,
  j = /^\d/,
  K = /^\d{1,2}/,
  J = /^\d{1,3}/,
  Z = /^\d{1,4}/,
  _ = /^-?\d+/,
  $ = /^-?\d/,
  V = /^-?\d{1,2}/,
  tt = /^-?\d{1,3}/,
  et = /^-?\d{1,4}/,
  nt = /^([+-])(\d{2})(\d{2})?|Z/,
  rt = /^([+-])(\d{2})(\d{2})|Z/,
  at = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  it = /^([+-])(\d{2}):(\d{2})|Z/,
  ot = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function ut(t, e, n) {
  var r = e.match(t)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: e.slice(r[0].length)}
}
function st(t, e) {
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
function ct(t, e) {
  return ut(_, t, e)
}
function dt(t, e, n) {
  switch (t) {
    case 1:
      return ut(j, e, n)
    case 2:
      return ut(K, e, n)
    case 3:
      return ut(J, e, n)
    case 4:
      return ut(Z, e, n)
    default:
      return ut(new RegExp('^\\d{1,' + t + '}'), e, n)
  }
}
function lt(t, e, n) {
  switch (t) {
    case 1:
      return ut($, e, n)
    case 2:
      return ut(V, e, n)
    case 3:
      return ut(tt, e, n)
    case 4:
      return ut(et, e, n)
    default:
      return ut(new RegExp('^-?\\d{1,' + t + '}'), e, n)
  }
}
function ft(t) {
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
function ht(t, e) {
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
var mt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  wt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function gt(t) {
  return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
}
var vt = {
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
            return dt(4, t, a)
          case 'yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return dt(e.length, t, a)
        }
      },
      validate: function (t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function (t, e, n, r) {
        var a = t.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var i = ht(n.year, a)
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
            return dt(4, t, a)
          case 'Yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return dt(e.length, t, a)
        }
      },
      validate: function (t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function (t, e, n, r) {
        var a = P(t, r)
        if (n.isTwoDigitYear) {
          var i = ht(n.year, a)
          return t.setUTCFullYear(i, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), S(t, r)
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), S(t, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function (t, e, n, r) {
        return lt('R' === e ? 4 : e.length, t)
      },
      set: function (t, e, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), Y(a)
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
        return lt('u' === e ? 4 : e.length, t)
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
            return dt(e.length, t)
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
            return dt(e.length, t)
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
            return ut(L, t, a)
          case 'MM':
            return dt(2, t, a)
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
            return ut(L, t, a)
          case 'LL':
            return dt(2, t, a)
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
            return ut(Q, t)
          case 'wo':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return dt(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function (t, e, n, r) {
        return S(
          (function (t, e, n) {
            h(2, arguments)
            var r = m(t),
              a = f(e),
              i = H(r, n) - a
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
            return ut(Q, t)
          case 'Io':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return dt(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function (t, e, n, r) {
        return Y(
          (function (t, e) {
            h(2, arguments)
            var n = m(t),
              r = f(e),
              a = B(n) - r
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
            return ut(W, t)
          case 'do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return dt(e.length, t)
        }
      },
      validate: function (t, e, n) {
        var r = gt(t.getUTCFullYear()),
          a = t.getUTCMonth()
        return r ? e >= 1 && e <= wt[a] : e >= 1 && e <= mt[a]
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
            return ut(F, t)
          case 'Do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return dt(e.length, t)
        }
      },
      validate: function (t, e, n) {
        return gt(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
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
        return (t = E(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return dt(e.length, t, a)
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
      parse: function (t, e, n, r) {
        var a = function (t) {
          var e = 7 * Math.floor((t - 1) / 7)
          return ((t + r.weekStartsOn + 6) % 7) + e
        }
        switch (e) {
          case 'c':
          case 'cc':
            return dt(e.length, t, a)
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
      parse: function (t, e, n, r) {
        var a = function (t) {
          return 0 === t ? 7 : t
        }
        switch (e) {
          case 'i':
          case 'ii':
            return dt(e.length, t)
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
            h(2, arguments)
            var n = f(e)
            n % 7 == 0 && (n -= 7)
            var r = 1,
              a = m(t),
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
        return t.setUTCHours(ft(n), 0, 0, 0), t
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
        return t.setUTCHours(ft(n), 0, 0, 0), t
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
        return t.setUTCHours(ft(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function (t, e, n, r) {
        switch (e) {
          case 'h':
            return ut(G, t)
          case 'ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return dt(e.length, t)
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
            return ut(R, t)
          case 'Ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return dt(e.length, t)
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
            return ut(X, t)
          case 'Ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return dt(e.length, t)
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
            return ut(I, t)
          case 'ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return dt(e.length, t)
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
            return ut(A, t)
          case 'mo':
            return n.ordinalNumber(t, {unit: 'minute'})
          default:
            return dt(e.length, t)
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
            return ut(z, t)
          case 'so':
            return n.ordinalNumber(t, {unit: 'second'})
          default:
            return dt(e.length, t)
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
        return dt(e.length, t, function (t) {
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
            return st(nt, t)
          case 'XX':
            return st(rt, t)
          case 'XXXX':
            return st(at, t)
          case 'XXXXX':
            return st(ot, t)
          case 'XXX':
          default:
            return st(it, t)
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
            return st(nt, t)
          case 'xx':
            return st(rt, t)
          case 'xxxx':
            return st(at, t)
          case 'xxxxx':
            return st(ot, t)
          case 'xxx':
          default:
            return st(it, t)
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
        return ct(t)
      },
      set: function (t, e, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function (t, e, n, r) {
        return ct(t)
      },
      set: function (t, e, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  yt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  bt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Dt = /^'([^]*?)'?$/,
  Tt = /''/g,
  pt = /\S/,
  kt = /[a-zA-Z]/
function xt(t, e, n, r) {
  h(3, arguments)
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
  var w = u.options && u.options.weekStartsOn,
    y = null == w ? 0 : f(w),
    b = null == o.weekStartsOn ? y : f(o.weekStartsOn)
  if (!(b >= 0 && b <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if ('' === i) return '' === a ? m(n) : new Date(NaN)
  var T,
    k = {firstWeekContainsDate: d, weekStartsOn: b, locale: u},
    x = [{priority: 10, set: Ct, index: 0}],
    S = i
      .match(bt)
      .map(function (t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, D[e])(t, u.formatLong, k) : t
      })
      .join('')
      .match(yt),
    P = []
  for (T = 0; T < S.length; T++) {
    var E = S[T]
    !o.useAdditionalWeekYearTokens && M(E) && U(E), !o.useAdditionalDayOfYearTokens && C(E) && U(E)
    var Y = E[0],
      N = vt[Y]
    if (N) {
      var q = N.incompatibleTokens
      if (Array.isArray(q)) {
        for (var B = void 0, O = 0; O < P.length; O++) {
          var H = P[O].token
          if (-1 !== q.indexOf(H) || H === Y) {
            B = P[O]
            break
          }
        }
        if (B)
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(B.fullToken, '` and `')
              .concat(E, '` at the same time'),
          )
      } else if ('*' === N.incompatibleTokens && P.length)
        throw new RangeError(
          "The format string mustn't contain `".concat(E, '` and any other token at the same time'),
        )
      P.push({token: Y, fullToken: E})
      var L = N.parse(a, E, u.match, k)
      if (!L) return new Date(NaN)
      x.push({
        priority: N.priority,
        set: N.set,
        validate: N.validate,
        value: L.value,
        index: x.length,
      }),
        (a = L.rest)
    } else {
      if (Y.match(kt))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + Y + '`',
        )
      if (("''" === E ? (E = "'") : "'" === Y && (E = Mt(E)), 0 !== a.indexOf(E)))
        return new Date(NaN)
      a = a.slice(E.length)
    }
  }
  if (a.length > 0 && pt.test(a)) return new Date(NaN)
  var W = x
      .map(function (t) {
        return t.priority
      })
      .sort(function (t, e) {
        return e - t
      })
      .filter(function (t, e, n) {
        return n.indexOf(t) === e
      })
      .map(function (t) {
        return x
          .filter(function (e) {
            return e.priority === t
          })
          .reverse()
      })
      .map(function (t) {
        return t[0]
      }),
    F = m(n)
  if (isNaN(F)) return new Date(NaN)
  var Q = g(F, p(F)),
    R = {}
  for (T = 0; T < W.length; T++) {
    var I = W[T]
    if (I.validate && !I.validate(Q, I.value, k)) return new Date(NaN)
    var X = I.set(Q, R, I.value, k)
    X[0] ? ((Q = X[0]), v(R, X[1])) : (Q = X)
  }
  return Q
}
function Ct(t, e) {
  if (e.timestampIsSet) return t
  var n = new Date(0)
  return (
    n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
    n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
    n
  )
}
function Mt(t) {
  return t.match(Dt)[1].replace(Tt, "'")
}
function Ut(t) {
  h(1, arguments)
  var e = m(t)
  return !isNaN(e)
}
function St(t, e) {
  for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r
  return n + r
}
var Pt = function (t, e) {
    var n = t.getUTCFullYear(),
      r = n > 0 ? n : 1 - n
    return St('yy' === e ? r % 100 : r, e.length)
  },
  Et = function (t, e) {
    var n = t.getUTCMonth()
    return 'M' === e ? String(n + 1) : St(n + 1, 2)
  },
  Yt = function (t, e) {
    return St(t.getUTCDate(), e.length)
  },
  Nt = function (t, e) {
    return St(t.getUTCHours() % 12 || 12, e.length)
  },
  qt = function (t, e) {
    return St(t.getUTCHours(), e.length)
  },
  Bt = function (t, e) {
    return St(t.getUTCMinutes(), e.length)
  },
  Ot = function (t, e) {
    return St(t.getUTCSeconds(), e.length)
  },
  Ht = function (t, e) {
    var n = e.length,
      r = t.getUTCMilliseconds()
    return St(Math.floor(r * Math.pow(10, n - 3)), e.length)
  }
var Lt = 'midnight',
  Wt = 'noon',
  Ft = 'morning',
  Qt = 'afternoon',
  Rt = 'evening',
  It = 'night',
  Xt = {
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
      return Pt(t, e)
    },
    Y: function (t, e, n, r) {
      var a = P(t, r),
        i = a > 0 ? a : 1 - a
      return 'YY' === e
        ? St(i % 100, 2)
        : 'Yo' === e
        ? n.ordinalNumber(i, {unit: 'year'})
        : St(i, e.length)
    },
    R: function (t, e) {
      return St(N(t), e.length)
    },
    u: function (t, e) {
      return St(t.getUTCFullYear(), e.length)
    },
    Q: function (t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'Q':
          return String(r)
        case 'QQ':
          return St(r, 2)
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
          return St(r, 2)
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
          return Et(t, e)
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
          return St(r + 1, 2)
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
      var a = H(t, r)
      return 'wo' === e ? n.ordinalNumber(a, {unit: 'week'}) : St(a, e.length)
    },
    I: function (t, e, n) {
      var r = B(t)
      return 'Io' === e ? n.ordinalNumber(r, {unit: 'week'}) : St(r, e.length)
    },
    d: function (t, e, n) {
      return 'do' === e ? n.ordinalNumber(t.getUTCDate(), {unit: 'date'}) : Yt(t, e)
    },
    D: function (t, e, n) {
      var r = (function (t) {
        h(1, arguments)
        var e = m(t),
          n = e.getTime()
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        var r = e.getTime(),
          a = n - r
        return Math.floor(a / 864e5) + 1
      })(t)
      return 'Do' === e ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : St(r, e.length)
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
          return St(i, 2)
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
          return St(i, e.length)
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
          return St(a, e.length)
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
      switch (((r = 12 === a ? Wt : 0 === a ? Lt : a / 12 >= 1 ? 'pm' : 'am'), e)) {
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
      switch (((r = a >= 17 ? Rt : a >= 12 ? Qt : a >= 4 ? Ft : It), e)) {
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
      return Nt(t, e)
    },
    H: function (t, e, n) {
      return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), {unit: 'hour'}) : qt(t, e)
    },
    K: function (t, e, n) {
      var r = t.getUTCHours() % 12
      return 'Ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : St(r, e.length)
    },
    k: function (t, e, n) {
      var r = t.getUTCHours()
      return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : St(r, e.length)
    },
    m: function (t, e, n) {
      return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), {unit: 'minute'}) : Bt(t, e)
    },
    s: function (t, e, n) {
      return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), {unit: 'second'}) : Ot(t, e)
    },
    S: function (t, e) {
      return Ht(t, e)
    },
    X: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (e) {
        case 'X':
          return At(a)
        case 'XXXX':
        case 'XX':
          return zt(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return zt(a, ':')
      }
    },
    x: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'x':
          return At(a)
        case 'xxxx':
        case 'xx':
          return zt(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return zt(a, ':')
      }
    },
    O: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Gt(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + zt(a, ':')
      }
    },
    z: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Gt(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + zt(a, ':')
      }
    },
    t: function (t, e, n, r) {
      var a = r._originalDate || t
      return St(Math.floor(a.getTime() / 1e3), e.length)
    },
    T: function (t, e, n, r) {
      return St((r._originalDate || t).getTime(), e.length)
    },
  }
function Gt(t, e) {
  var n = t > 0 ? '-' : '+',
    r = Math.abs(t),
    a = Math.floor(r / 60),
    i = r % 60
  if (0 === i) return n + String(a)
  var o = e || ''
  return n + String(a) + o + St(i, 2)
}
function At(t, e) {
  return t % 60 == 0 ? (t > 0 ? '-' : '+') + St(Math.abs(t) / 60, 2) : zt(t, e)
}
function zt(t, e) {
  var n = e || '',
    r = t > 0 ? '-' : '+',
    a = Math.abs(t)
  return r + St(Math.floor(a / 60), 2) + n + St(a % 60, 2)
}
var jt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Kt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Jt = /^'([^]*?)'?$/,
  Zt = /''/g,
  _t = /[a-zA-Z]/
function $t(t, e, n) {
  h(2, arguments)
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
  var v = m(t)
  if (!Ut(v)) throw new RangeError('Invalid time value')
  var y = p(v),
    b = g(v, y),
    T = {firstWeekContainsDate: s, weekStartsOn: w, locale: i, _originalDate: v},
    k = r
      .match(Kt)
      .map(function (t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, D[e])(t, i.formatLong, T) : t
      })
      .join('')
      .match(jt)
      .map(function (t) {
        if ("''" === t) return "'"
        var e = t[0]
        if ("'" === e) return Vt(t)
        var n = Xt[e]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && M(t) && U(t),
            !a.useAdditionalDayOfYearTokens && C(t) && U(t),
            n(b, t, i.localize, T)
          )
        if (e.match(_t))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + e + '`',
          )
        return t
      })
      .join('')
  return k
}
function Vt(t) {
  return t.match(Jt)[1].replace(Zt, "'")
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
***************************************************************************** */ function te(
  t,
  e,
) {
  h(2, arguments)
  var n = m(t),
    r = f(e)
  return isNaN(r) ? new Date(NaN) : r ? (n.setDate(n.getDate() + r), n) : n
}
function ee(t, e) {
  h(1, arguments)
  var n = t || {},
    r = m(n.start),
    a = m(n.end),
    i = a.getTime()
  if (!(r.getTime() <= i)) throw new RangeError('Invalid interval')
  var o = [],
    u = r
  u.setHours(0, 0, 0, 0)
  var s = e && 'step' in e ? Number(e.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; u.getTime() <= i; ) o.push(m(u)), u.setDate(u.getDate() + s), u.setHours(0, 0, 0, 0)
  return o
}
function ne(t, e) {
  h(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = m(t),
    s = u.getDay(),
    c = 6 + (s < o ? -7 : 0) - (s - o)
  return u.setDate(u.getDate() + c), u.setHours(23, 59, 59, 999), u
}
function re(t) {
  h(1, arguments)
  var e = m(t)
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}
function ae(t, e) {
  h(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.weekStartsOn,
    i = null == a ? 0 : f(a),
    o = null == n.weekStartsOn ? i : f(n.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = m(t),
    s = u.getDay(),
    c = (s < o ? 7 : 0) + s - o
  return u.setDate(u.getDate() - c), u.setHours(0, 0, 0, 0), u
}
function ie(t) {
  var e = void 0 === t ? {} : t,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    a = e.weekdayLabelFormat,
    i =
      void 0 === a
        ? function (t) {
            return $t(t, 'iiiiii')
          }
        : a,
    o = new Date()
  return ee({start: te(ae(o), r), end: te(ne(o), r)}).reduce(function (t, e) {
    return t.push(i(e)), t
  }, [])
}
function oe(t) {
  var e = t.year,
    n = t.month,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = t.dayLabelFormat,
    o =
      void 0 === i
        ? function (t) {
            return $t(t, 'dd')
          }
        : i,
    u = new Date(e, n),
    s = re(u),
    c = (function (t) {
      h(1, arguments)
      var e = m(t),
        n = e.getDay()
      return n
    })(s),
    d = (function (t) {
      h(1, arguments)
      var e = m(t),
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
    ee({start: s, end: d}).map(function (t) {
      return {date: t, dayLabel: o(t)}
    }),
  )
}
var ue = function (t) {
    return $t(t, 'dd')
  },
  se = function (t) {
    return $t(t, 'eeeeee')
  },
  ce = function (t) {
    return $t(t, 'MMMM yyyy')
  }
function de(e) {
  var n = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    i = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    u = void 0 === o ? ue : o,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? se : s,
    d = e.monthLabelFormat,
    l = void 0 === d ? ce : d
  return {
    days: t(
      function () {
        return oe({year: n, month: r, firstDayOfWeek: i, dayLabelFormat: u})
      },
      [n, r, i, u],
    ),
    weekdayLabels: t(
      function () {
        return ie({firstDayOfWeek: i, weekdayLabelFormat: c})
      },
      [i, c],
    ),
    monthLabel: l(new Date(n, r)),
  }
}
function le(t, e) {
  h(2, arguments)
  var n = m(t),
    r = m(e)
  return n.getTime() < r.getTime()
}
function fe(t, e) {
  h(2, arguments)
  var n = m(t),
    r = m(e)
  return n.getTime() > r.getTime()
}
function he(t, e) {
  h(2, arguments)
  var n = e || {},
    r = m(t).getTime(),
    a = m(n.start).getTime(),
    i = m(n.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return r >= a && r <= i
}
function me(t) {
  h(1, arguments)
  var e = m(t)
  return e.setHours(0, 0, 0, 0), e
}
function we(t, e) {
  h(2, arguments)
  var n = me(t),
    r = me(e)
  return n.getTime() === r.getTime()
}
function ge(t, e) {
  h(2, arguments)
  var n = m(t),
    r = f(e)
  if (isNaN(r)) return new Date(NaN)
  if (!r) return n
  var a = n.getDate(),
    i = new Date(n.getTime())
  i.setMonth(n.getMonth() + r + 1, 0)
  var o = i.getDate()
  return a >= o ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n)
}
var ve = function (t, e) {
  return (
    void 0 === t && (t = []),
    t.some(function (t) {
      return we(e, t)
    })
  )
}
function ye(t, e, n) {
  return !(!e || !n) && he(t, {start: e, end: n})
}
function be(t, e, n) {
  return !!((e && we(t, e)) || (n && we(t, n)))
}
function De(t, e) {
  return !(!e || !we(t, e))
}
function Te(t, e) {
  return !(!e || !we(t, e))
}
function pe(t) {
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
    ve(d, e) ||
    (l && le(e, l)) ||
    (f && fe(e, f)) ||
    (i && !o && s > 1 && he(e, {start: i, end: te(i, s - 2)})) ||
    (a && a(e))
  )
}
function ke(t) {
  var e = re(t)
  return {
    year: (function (t) {
      h(1, arguments)
      var e = m(t),
        n = e.getFullYear()
      return n
    })(e),
    month: (function (t) {
      h(1, arguments)
      var e = m(t),
        n = e.getMonth()
      return n
    })(e),
    date: e,
  }
}
function xe() {
  return ke(me(Date.now()))
}
function Ce(t, e) {
  var n = e ? ke(e) : xe(),
    r = n.date,
    a = [n]
  return (
    t > 1 &&
      (a = Array.from(Array(t - 1).keys()).reduce(function (t) {
        return (r = ge(t[t.length - 1].date, 1)), t.concat([ke(r)])
      }, a)),
    a
  )
}
function Me(t, e, n, r) {
  var a = t[r ? (n > 0 ? 0 : t.length - r) : n > 0 ? t.length - 1 : 0].date
  return Array.from(Array(e).keys()).reduce(function (t) {
    return (
      (a = 0 === t.length ? ge(a, n) : ge(a, n >= 0 ? 1 : -1)),
      n > 0 ? t.concat([ke(a)]) : [ke(a)].concat(t)
    )
  }, [])
}
function Ue(t, e, n) {
  return t && 'string' == typeof e ? $t(t, e) : t && 'function' == typeof e ? e(t) : n
}
function Se(t) {
  var e = t.startDate,
    n = t.endDate,
    r = t.isDateBlocked,
    a = t.minBookingDays,
    i = t.exactMinBookingDays,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = !o || !le(e, te(o, -1)),
    c = !u || !fe(te(e, a - 1), u)
  return (
    !(!e || 1 !== a || n || r(e)) ||
    ((e && a > 1 && !n && !i) || (e && a > 0 && i && s && c) || (e && a > 0 && i && !o && !u)
      ? !ee({start: e, end: te(e, a - 1)}).some(function (t) {
          return r(t)
        })
      : !(!e || !n || i) &&
        !le(n, te(e, a - 1)) &&
        !ee({start: e, end: n}).some(function (t) {
          return r(t)
        }))
  )
}
var Pe = 'startDate',
  Ee = 'endDate'
function Ye(t) {
  var a = t.startDate,
    i = t.endDate,
    o = t.focusedInput,
    u = t.minBookingDate,
    s = t.maxBookingDate,
    c = t.onDatesChange,
    d = t.initialVisibleMonth,
    l = t.exactMinBookingDays,
    f = void 0 !== l && l,
    h = t.minBookingDays,
    m = void 0 === h ? 1 : h,
    w = t.numberOfMonths,
    g = void 0 === w ? 2 : w,
    v = t.firstDayOfWeek,
    y = void 0 === v ? 1 : v,
    b = t.isDateBlocked,
    D =
      void 0 === b
        ? function () {
            return !1
          }
        : b,
    T = t.unavailableDates,
    p = void 0 === T ? [] : T,
    k = t.changeActiveMonthOnSelect,
    x = void 0 === k || k,
    C = e(function () {
      return Ce(g, a || d || null)
    }),
    M = C[0],
    U = C[1],
    S = e(null),
    P = S[0],
    E = S[1],
    Y = e(a),
    N = Y[0],
    q = Y[1]
  n(function () {
    return (
      'undefined' != typeof window &&
        window.addEventListener &&
        window.addEventListener('keydown', L),
      function () {
        window.removeEventListener && window.removeEventListener('keydown', L)
      }
    )
  })
  var B = function (t) {
      return ve(p, t) || D(t)
    },
    O = function (t) {
      q(t), (!N || (N && !we(t, N))) && U(Ce(g, t))
    },
    H = function (t) {
      return pe({
        date: t,
        minBookingDate: u,
        maxBookingDate: s,
        startDate: a,
        endDate: i,
        minBookingDays: m,
        isDateBlockedFn: B,
      })
    }
  function L(t) {
    if (
      ('ArrowRight' === t.key ||
        'ArrowLeft' === t.key ||
        'ArrowDown' === t.key ||
        'ArrowUp' === t.key) &&
      !N
    ) {
      var e = M[0]
      O(e.date), U(Ce(g, e.date))
    }
  }
  var W = r(
      function () {
        U(Me(M, g, -1)), q(null)
      },
      [M, g],
    ),
    F = r(
      function () {
        U(Me(M, g, -1, 1)), q(null)
      },
      [M, g],
    ),
    Q = r(
      function () {
        U(Me(M, g, 1)), q(null)
      },
      [M, g],
    ),
    R = r(
      function () {
        U(Me(M, g, 1, 1)), q(null)
      },
      [M, g],
    ),
    I = r(
      function (t) {
        U(Ce(g, t)), q(null)
      },
      [g],
    ),
    X = r(
      function (t) {
        void 0 === t && (t = 1), U(Me(M, g, -(12 * t - g + 1))), q(null)
      },
      [M, g],
    ),
    G = r(
      function (t) {
        void 0 === t && (t = 1), U(Me(M, g, 12 * t - g + 1)), q(null)
      },
      [M, g],
    )
  return {
    firstDayOfWeek: y,
    activeMonths: M,
    isDateSelected: function (t) {
      return ye(t, a, i)
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
        return i && o > 1 && u && he(e, {start: i, end: te(i, o - 1)})
          ? !ee({start: i, end: te(i, o - 1)}).some(function (t) {
              return a(t)
            })
          : n && !r && i && he(e, {start: n, end: te(n, o - 1)}) && we(n, i) && o > 1
          ? !ee({start: n, end: te(n, o - 1)}).some(function (t) {
              return a(t)
            })
          : !(!n || r || !i || le(i, n) || !he(e, {start: n, end: i})) &&
            !ee({start: n, end: i}).some(function (t) {
              return a(t)
            })
      })({
        date: t,
        hoveredDate: P,
        startDate: a,
        endDate: i,
        minBookingDays: m,
        exactMinBookingDays: f,
        isDateBlocked: B,
      })
    },
    isFirstOrLastSelectedDate: function (t) {
      return be(t, a, i)
    },
    isStartDate: function (t) {
      return De(t, a)
    },
    isEndDate: function (t) {
      return Te(t, i)
    },
    isDateBlocked: H,
    numberOfMonths: g,
    isDateFocused: function (t) {
      return !!N && we(t, N)
    },
    focusedDate: N,
    hoveredDate: P,
    onResetDates: function () {
      c({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function (t) {
      if (t) {
        if (t) {
          var e = !H(t) || (a && we(t, a)),
            n = !u || !le(t, te(u, -1)),
            r = !s || !fe(t, s),
            o = te(t, m - 1),
            c = !u || !le(o, u),
            d = !s || !fe(o, s),
            l = f && m > 1 && n && r && c && d,
            h = a && !i && !f && n && r,
            w = !(m > 1 && a) || he(t, {start: a, end: te(a, m - 2)}),
            g = a && we(t, a) && w
          e && (l || h || g) ? E(t) : null !== P && E(null)
        }
      } else E(null)
    },
    onDateSelect: function (t) {
      ;('endDate' === o || 'startDate' === o) &&
      m > 0 &&
      f &&
      Se({
        minBookingDays: m,
        exactMinBookingDays: f,
        minBookingDate: u,
        maxBookingDate: s,
        isDateBlocked: B,
        startDate: t,
        endDate: null,
      })
        ? c({startDate: t, endDate: te(t, m - 1), focusedInput: null})
        : (('endDate' === o && a && le(t, a)) || ('startDate' === o && i && fe(t, i))) &&
          !f &&
          Se({minBookingDays: m, isDateBlocked: B, startDate: t, endDate: null})
        ? c({endDate: null, startDate: t, focusedInput: 'endDate'})
        : 'startDate' === o &&
          !f &&
          Se({minBookingDays: m, isDateBlocked: B, endDate: i, startDate: t})
        ? c({endDate: i, startDate: t, focusedInput: 'endDate'})
        : 'startDate' === o &&
          !f &&
          Se({minBookingDays: m, isDateBlocked: B, endDate: null, startDate: t})
        ? c({endDate: null, startDate: t, focusedInput: 'endDate'})
        : 'endDate' === o &&
          a &&
          !le(t, a) &&
          !f &&
          Se({minBookingDays: m, isDateBlocked: B, startDate: a, endDate: t}) &&
          c({startDate: a, endDate: t, focusedInput: null}),
        'endDate' !== o && (!N || (N && !we(t, N))) && x && U(Ce(g, t))
    },
    onDateFocus: O,
    goToPreviousMonths: W,
    goToPreviousMonthsByOneMonth: F,
    goToNextMonths: Q,
    goToNextMonthsByOneMonth: R,
    goToDate: I,
    goToPreviousYear: X,
    goToNextYear: G,
  }
}
function Ne(t) {
  var e = t.date,
    n = t.focusedDate,
    a = t.isDateSelected,
    i = t.isDateFocused,
    o = t.isFirstOrLastSelectedDate,
    u = t.isDateHovered,
    s = t.isDateBlocked,
    c = t.onDateSelect,
    d = t.onDateFocus,
    l = t.onDateHover,
    f = r(
      function () {
        return c(e)
      },
      [e, c],
    ),
    h = r(
      function () {
        return l(e)
      },
      [e, l],
    ),
    m = s(e) && !u(e)
  return {
    tabIndex: null === n || i(e) ? 0 : -1,
    isSelected: a(e),
    isSelectedStartOrEnd: o(e),
    isWithinHoverRange: u(e),
    disabledDate: m,
    onKeyDown: function (t) {
      'ArrowRight' === t.key
        ? d(te(e, 1))
        : 'ArrowLeft' === t.key
        ? d(te(e, -1))
        : 'ArrowUp' === t.key
        ? d(te(e, -7))
        : 'ArrowDown' === t.key && d(te(e, 7))
    },
    onClick: m ? function () {} : f,
    onMouseEnter: h,
  }
}
export {
  Ee as END_DATE,
  Pe as START_DATE,
  ue as dayLabelFormat,
  xe as getCurrentYearMonthAndDate,
  ke as getDateMonthAndYear,
  oe as getDays,
  Ce as getInitialMonths,
  Ue as getInputValue,
  ie as getWeekdayLabels,
  pe as isDateBlocked,
  ye as isDateSelected,
  Te as isEndDate,
  be as isFirstOrLastSelectedDate,
  De as isStartDate,
  ce as monthLabelFormat,
  xt as parseDate,
  Ye as useDatepicker,
  Ne as useDay,
  de as useMonth,
  se as weekdayLabelFormat,
}
