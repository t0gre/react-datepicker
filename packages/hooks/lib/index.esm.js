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
function h(t, e) {
  if (e.length < t)
    throw new TypeError(
      t + ' argument' + t > 1 ? 's' : ' required, but only ' + e.length + ' present',
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
  P: function(t, e) {
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
function p(t) {
  var e = new Date(t.getTime()),
    n = Math.ceil(e.getTimezoneOffset())
  return e.setSeconds(0, 0), 6e4 * n + (e.getTime() % 6e4)
}
var T = ['D', 'DD'],
  k = ['YY', 'YYYY']
function x(t) {
  return -1 !== T.indexOf(t)
}
function C(t) {
  return -1 !== k.indexOf(t)
}
function M(t) {
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
function U(t, e) {
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
function S(t, e) {
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
  var d = U(c, e),
    l = new Date(0)
  l.setUTCFullYear(r, 0, s), l.setUTCHours(0, 0, 0, 0)
  var w = U(l, e)
  return n.getTime() >= d.getTime() ? r + 1 : n.getTime() >= w.getTime() ? r : r - 1
}
function Y(t, e, n) {
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
function P(t) {
  h(1, arguments)
  var e = 1,
    n = m(t),
    r = n.getUTCDay(),
    a = (r < e ? 7 : 0) + r - e
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
}
function E(t) {
  h(1, arguments)
  var e = m(t),
    n = e.getUTCFullYear(),
    r = new Date(0)
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
  var a = P(r),
    i = new Date(0)
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = P(i)
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1
}
function q(t) {
  h(1, arguments)
  var e = E(t),
    n = new Date(0)
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var r = P(n)
  return r
}
function H(t) {
  h(1, arguments)
  var e = m(t),
    n = P(e).getTime() - q(e).getTime()
  return Math.round(n / 6048e5) + 1
}
function B(t, e) {
  h(1, arguments)
  var n = e || {},
    r = n.locale,
    a = r && r.options && r.options.firstWeekContainsDate,
    i = null == a ? 1 : f(a),
    o = null == n.firstWeekContainsDate ? i : f(n.firstWeekContainsDate),
    u = S(t, e),
    s = new Date(0)
  s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0)
  var c = U(s, e)
  return c
}
function O(t, e) {
  h(1, arguments)
  var n = m(t),
    r = U(n, e).getTime() - B(n, e).getTime()
  return Math.round(r / 6048e5) + 1
}
var N = /^(1[0-2]|0?\d)/,
  L = /^(3[0-1]|[0-2]?\d)/,
  W = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  F = /^(5[0-3]|[0-4]?\d)/,
  Q = /^(2[0-3]|[0-1]?\d)/,
  R = /^(2[0-4]|[0-1]?\d)/,
  I = /^(1[0-1]|0?\d)/,
  X = /^(1[0-2]|0?\d)/,
  G = /^[0-5]?\d/,
  A = /^[0-5]?\d/,
  z = /^\d/,
  j = /^\d{1,2}/,
  K = /^\d{1,3}/,
  J = /^\d{1,4}/,
  Z = /^-?\d+/,
  _ = /^-?\d/,
  $ = /^-?\d{1,2}/,
  V = /^-?\d{1,3}/,
  tt = /^-?\d{1,4}/,
  et = /^([+-])(\d{2})(\d{2})?|Z/,
  nt = /^([+-])(\d{2})(\d{2})|Z/,
  rt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  at = /^([+-])(\d{2}):(\d{2})|Z/,
  it = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
function ot(t, e, n) {
  var r = e.match(t)
  if (!r) return null
  var a = parseInt(r[0], 10)
  return {value: n ? n(a) : a, rest: e.slice(r[0].length)}
}
function ut(t, e) {
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
function st(t, e) {
  return ot(Z, t, e)
}
function ct(t, e, n) {
  switch (t) {
    case 1:
      return ot(z, e, n)
    case 2:
      return ot(j, e, n)
    case 3:
      return ot(K, e, n)
    case 4:
      return ot(J, e, n)
    default:
      return ot(new RegExp('^\\d{1,' + t + '}'), e, n)
  }
}
function dt(t, e, n) {
  switch (t) {
    case 1:
      return ot(_, e, n)
    case 2:
      return ot($, e, n)
    case 3:
      return ot(V, e, n)
    case 4:
      return ot(tt, e, n)
    default:
      return ot(new RegExp('^-?\\d{1,' + t + '}'), e, n)
  }
}
function lt(t) {
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
function ft(t, e) {
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
var ht = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  mt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function wt(t) {
  return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
}
var gt = {
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
            return ct(4, t, a)
          case 'yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ct(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = t.getUTCFullYear()
        if (n.isTwoDigitYear) {
          var i = ft(n.year, a)
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
            return ct(4, t, a)
          case 'Yo':
            return n.ordinalNumber(t, {unit: 'year', valueCallback: a})
          default:
            return ct(e.length, t, a)
        }
      },
      validate: function(t, e, n) {
        return e.isTwoDigitYear || e.year > 0
      },
      set: function(t, e, n, r) {
        var a = S(t, r)
        if (n.isTwoDigitYear) {
          var i = ft(n.year, a)
          return t.setUTCFullYear(i, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), U(t, r)
        }
        var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
        return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), U(t, r)
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(t, e, n, r) {
        return dt('R' === e ? 4 : e.length, t)
      },
      set: function(t, e, n, r) {
        var a = new Date(0)
        return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), P(a)
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
        return dt('u' === e ? 4 : e.length, t)
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
            return ct(e.length, t)
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
            return ct(e.length, t)
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
            return ot(N, t, a)
          case 'MM':
            return ct(2, t, a)
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
            return ot(N, t, a)
          case 'LL':
            return ct(2, t, a)
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
            return ot(F, t)
          case 'wo':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ct(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return U(
          (function(t, e, n) {
            h(2, arguments)
            var r = m(t),
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
            return ot(F, t)
          case 'Io':
            return n.ordinalNumber(t, {unit: 'week'})
          default:
            return ct(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return e >= 1 && e <= 53
      },
      set: function(t, e, n, r) {
        return P(
          (function(t, e) {
            h(2, arguments)
            var n = m(t),
              r = f(e),
              a = H(n) - r
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
            return ot(L, t)
          case 'do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ct(e.length, t)
        }
      },
      validate: function(t, e, n) {
        var r = wt(t.getUTCFullYear()),
          a = t.getUTCMonth()
        return r ? e >= 1 && e <= mt[a] : e >= 1 && e <= ht[a]
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
            return ot(W, t)
          case 'Do':
            return n.ordinalNumber(t, {unit: 'date'})
          default:
            return ct(e.length, t)
        }
      },
      validate: function(t, e, n) {
        return wt(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
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
        return (t = Y(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ct(e.length, t, a)
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
        return (t = Y(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ct(e.length, t, a)
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
        return (t = Y(t, n, r)).setUTCHours(0, 0, 0, 0), t
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
            return ct(e.length, t)
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
        return t.setUTCHours(lt(n), 0, 0, 0), t
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
        return t.setUTCHours(lt(n), 0, 0, 0), t
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
        return t.setUTCHours(lt(n), 0, 0, 0), t
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(t, e, n, r) {
        switch (e) {
          case 'h':
            return ot(X, t)
          case 'ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ct(e.length, t)
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
            return ot(Q, t)
          case 'Ho':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ct(e.length, t)
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
            return ot(I, t)
          case 'Ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ct(e.length, t)
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
            return ot(R, t)
          case 'ko':
            return n.ordinalNumber(t, {unit: 'hour'})
          default:
            return ct(e.length, t)
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
            return ot(G, t)
          case 'mo':
            return n.ordinalNumber(t, {unit: 'minute'})
          default:
            return ct(e.length, t)
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
            return ot(A, t)
          case 'so':
            return n.ordinalNumber(t, {unit: 'second'})
          default:
            return ct(e.length, t)
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
        return ct(e.length, t, function(t) {
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
            return ut(et, t)
          case 'XX':
            return ut(nt, t)
          case 'XXXX':
            return ut(rt, t)
          case 'XXXXX':
            return ut(it, t)
          case 'XXX':
          default:
            return ut(at, t)
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
            return ut(et, t)
          case 'xx':
            return ut(nt, t)
          case 'xxxx':
            return ut(rt, t)
          case 'xxxxx':
            return ut(it, t)
          case 'xxx':
          default:
            return ut(at, t)
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
        return st(t)
      },
      set: function(t, e, n, r) {
        return [new Date(1e3 * n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(t, e, n, r) {
        return st(t)
      },
      set: function(t, e, n, r) {
        return [new Date(n), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  vt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  yt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  bt = /^'([^]*?)'?$/,
  Dt = /''/g,
  pt = /\S/,
  Tt = /[a-zA-Z]/
function kt(t, e, n, r) {
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
    U = [{priority: 10, set: xt, index: 0}],
    S = i
      .match(yt)
      .map(function(t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, D[e])(t, u.formatLong, k) : t
      })
      .join('')
      .match(vt),
    Y = []
  for (T = 0; T < S.length; T++) {
    var P = S[T]
    !o.useAdditionalWeekYearTokens && C(P) && M(P), !o.useAdditionalDayOfYearTokens && x(P) && M(P)
    var E = P[0],
      q = gt[E]
    if (q) {
      var H = q.incompatibleTokens
      if (Array.isArray(H)) {
        for (var B = void 0, O = 0; O < Y.length; O++) {
          var N = Y[O].token
          if (-1 !== H.indexOf(N) || N === E) {
            B = Y[O]
            break
          }
        }
        if (B)
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(B.fullToken, '` and `')
              .concat(P, '` at the same time'),
          )
      } else if ('*' === q.incompatibleTokens && Y.length)
        throw new RangeError(
          "The format string mustn't contain `".concat(P, '` and any other token at the same time'),
        )
      Y.push({token: E, fullToken: P})
      var L = q.parse(a, P, u.match, k)
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
      if (E.match(Tt))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + E + '`',
        )
      if (("''" === P ? (P = "'") : "'" === E && (P = Ct(P)), 0 !== a.indexOf(P)))
        return new Date(NaN)
      a = a.slice(P.length)
    }
  }
  if (a.length > 0 && pt.test(a)) return new Date(NaN)
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
function xt(t, e) {
  if (e.timestampIsSet) return t
  var n = new Date(0)
  return (
    n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
    n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()),
    n
  )
}
function Ct(t) {
  return t.match(bt)[1].replace(Dt, "'")
}
function Mt(t) {
  h(1, arguments)
  var e = m(t)
  return !isNaN(e)
}
function Ut(t, e) {
  for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r
  return n + r
}
var St = function(t, e) {
    var n = t.getUTCFullYear(),
      r = n > 0 ? n : 1 - n
    return Ut('yy' === e ? r % 100 : r, e.length)
  },
  Yt = function(t, e) {
    var n = t.getUTCMonth()
    return 'M' === e ? String(n + 1) : Ut(n + 1, 2)
  },
  Pt = function(t, e) {
    return Ut(t.getUTCDate(), e.length)
  },
  Et = function(t, e) {
    return Ut(t.getUTCHours() % 12 || 12, e.length)
  },
  qt = function(t, e) {
    return Ut(t.getUTCHours(), e.length)
  },
  Ht = function(t, e) {
    return Ut(t.getUTCMinutes(), e.length)
  },
  Bt = function(t, e) {
    return Ut(t.getUTCSeconds(), e.length)
  },
  Ot = function(t, e) {
    var n = e.length,
      r = t.getUTCMilliseconds()
    return Ut(Math.floor(r * Math.pow(10, n - 3)), e.length)
  }
var Nt = 'midnight',
  Lt = 'noon',
  Wt = 'morning',
  Ft = 'afternoon',
  Qt = 'evening',
  Rt = 'night',
  It = {
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
      return St(t, e)
    },
    Y: function(t, e, n, r) {
      var a = S(t, r),
        i = a > 0 ? a : 1 - a
      return 'YY' === e
        ? Ut(i % 100, 2)
        : 'Yo' === e
        ? n.ordinalNumber(i, {unit: 'year'})
        : Ut(i, e.length)
    },
    R: function(t, e) {
      return Ut(E(t), e.length)
    },
    u: function(t, e) {
      return Ut(t.getUTCFullYear(), e.length)
    },
    Q: function(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3)
      switch (e) {
        case 'Q':
          return String(r)
        case 'QQ':
          return Ut(r, 2)
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
          return Ut(r, 2)
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
          return Yt(t, e)
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
          return Ut(r + 1, 2)
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
      return 'wo' === e ? n.ordinalNumber(a, {unit: 'week'}) : Ut(a, e.length)
    },
    I: function(t, e, n) {
      var r = H(t)
      return 'Io' === e ? n.ordinalNumber(r, {unit: 'week'}) : Ut(r, e.length)
    },
    d: function(t, e, n) {
      return 'do' === e ? n.ordinalNumber(t.getUTCDate(), {unit: 'date'}) : Pt(t, e)
    },
    D: function(t, e, n) {
      var r = (function(t) {
        h(1, arguments)
        var e = m(t),
          n = e.getTime()
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        var r = e.getTime(),
          a = n - r
        return Math.floor(a / 864e5) + 1
      })(t)
      return 'Do' === e ? n.ordinalNumber(r, {unit: 'dayOfYear'}) : Ut(r, e.length)
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
          return Ut(i, 2)
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
          return Ut(i, e.length)
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
          return Ut(a, e.length)
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
      switch (((r = 12 === a ? Lt : 0 === a ? Nt : a / 12 >= 1 ? 'pm' : 'am'), e)) {
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
      switch (((r = a >= 17 ? Qt : a >= 12 ? Ft : a >= 4 ? Wt : Rt), e)) {
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
      return Et(t, e)
    },
    H: function(t, e, n) {
      return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), {unit: 'hour'}) : qt(t, e)
    },
    K: function(t, e, n) {
      var r = t.getUTCHours() % 12
      return 'Ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : Ut(r, e.length)
    },
    k: function(t, e, n) {
      var r = t.getUTCHours()
      return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, {unit: 'hour'}) : Ut(r, e.length)
    },
    m: function(t, e, n) {
      return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), {unit: 'minute'}) : Ht(t, e)
    },
    s: function(t, e, n) {
      return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), {unit: 'second'}) : Bt(t, e)
    },
    S: function(t, e) {
      return Ot(t, e)
    },
    X: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (e) {
        case 'X':
          return Gt(a)
        case 'XXXX':
        case 'XX':
          return At(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return At(a, ':')
      }
    },
    x: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'x':
          return Gt(a)
        case 'xxxx':
        case 'xx':
          return At(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return At(a, ':')
      }
    },
    O: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Xt(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + At(a, ':')
      }
    },
    z: function(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset()
      switch (e) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Xt(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + At(a, ':')
      }
    },
    t: function(t, e, n, r) {
      var a = r._originalDate || t
      return Ut(Math.floor(a.getTime() / 1e3), e.length)
    },
    T: function(t, e, n, r) {
      return Ut((r._originalDate || t).getTime(), e.length)
    },
  }
function Xt(t, e) {
  var n = t > 0 ? '-' : '+',
    r = Math.abs(t),
    a = Math.floor(r / 60),
    i = r % 60
  if (0 === i) return n + String(a)
  var o = e || ''
  return n + String(a) + o + Ut(i, 2)
}
function Gt(t, e) {
  return t % 60 == 0 ? (t > 0 ? '-' : '+') + Ut(Math.abs(t) / 60, 2) : At(t, e)
}
function At(t, e) {
  var n = e || '',
    r = t > 0 ? '-' : '+',
    a = Math.abs(t)
  return r + Ut(Math.floor(a / 60), 2) + n + Ut(a % 60, 2)
}
var zt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  jt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Kt = /^'([^]*?)'?$/,
  Jt = /''/g,
  Zt = /[a-zA-Z]/
function _t(t, e, n) {
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
  if (!Mt(v)) throw new RangeError('Invalid time value')
  var y = p(v),
    b = g(v, y),
    T = {firstWeekContainsDate: s, weekStartsOn: w, locale: i, _originalDate: v},
    k = r
      .match(jt)
      .map(function(t) {
        var e = t[0]
        return 'p' === e || 'P' === e ? (0, D[e])(t, i.formatLong, T) : t
      })
      .join('')
      .match(zt)
      .map(function(t) {
        if ("''" === t) return "'"
        var e = t[0]
        if ("'" === e) return $t(t)
        var n = It[e]
        if (n)
          return (
            !a.useAdditionalWeekYearTokens && C(t) && M(t),
            !a.useAdditionalDayOfYearTokens && x(t) && M(t),
            n(b, t, i.localize, T)
          )
        if (e.match(Zt))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' + e + '`',
          )
        return t
      })
      .join('')
  return k
}
function $t(t) {
  return t.match(Kt)[1].replace(Jt, "'")
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
***************************************************************************** */ function Vt(
  t,
  e,
) {
  h(2, arguments)
  var n = m(t),
    r = f(e)
  return n.setDate(n.getDate() + r), n
}
function te(t, e) {
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
function ee(t, e) {
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
function ne(t) {
  h(1, arguments)
  var e = m(t)
  return e.setDate(1), e.setHours(0, 0, 0, 0), e
}
function re(t, e) {
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
function ae(t) {
  var e = void 0 === t ? {} : t,
    n = e.firstDayOfWeek,
    r = void 0 === n ? 1 : n,
    a = e.weekdayLabelFormat,
    i =
      void 0 === a
        ? function(t) {
            return _t(t, 'iiiiii')
          }
        : a,
    o = new Date()
  return te({start: Vt(re(o), r), end: Vt(ee(o), r)}).reduce(function(t, e) {
    return t.push(i(e)), t
  }, [])
}
function ie(t) {
  var e = t.year,
    n = t.month,
    r = t.firstDayOfWeek,
    a = void 0 === r ? 1 : r,
    i = t.dayLabelFormat,
    o =
      void 0 === i
        ? function(t) {
            return _t(t, 'dd')
          }
        : i,
    u = new Date(e, n),
    s = ne(u),
    c = (function(t) {
      h(1, arguments)
      var e = m(t),
        n = e.getDay()
      return n
    })(s),
    d = (function(t) {
      h(1, arguments)
      var e = m(t),
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
    te({start: s, end: d}).map(function(t) {
      return {date: t, dayLabel: o(t)}
    }),
  )
}
var oe = function(t) {
    return _t(t, 'dd')
  },
  ue = function(t) {
    return _t(t, 'eeeeee')
  },
  se = function(t) {
    return _t(t, 'MMMM yyyy')
  }
function ce(e) {
  var n = e.year,
    r = e.month,
    a = e.firstDayOfWeek,
    i = void 0 === a ? 1 : a,
    o = e.dayLabelFormat,
    u = void 0 === o ? oe : o,
    s = e.weekdayLabelFormat,
    c = void 0 === s ? ue : s,
    d = e.monthLabelFormat,
    l = void 0 === d ? se : d
  return {
    days: t(
      function() {
        return ie({year: n, month: r, firstDayOfWeek: i, dayLabelFormat: u})
      },
      [n, r, i, u],
    ),
    weekdayLabels: t(
      function() {
        return ae({firstDayOfWeek: i, weekdayLabelFormat: c})
      },
      [i, c],
    ),
    monthLabel: l(new Date(n, r)),
  }
}
function de(t, e) {
  h(2, arguments)
  var n = m(t),
    r = m(e)
  return n.getTime() < r.getTime()
}
function le(t, e) {
  h(2, arguments)
  var n = m(t),
    r = m(e)
  return n.getTime() > r.getTime()
}
function fe(t, e) {
  h(2, arguments)
  var n = e || {},
    r = m(t).getTime(),
    a = m(n.start).getTime(),
    i = m(n.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return r >= a && r <= i
}
function he(t) {
  h(1, arguments)
  var e = m(t)
  return e.setHours(0, 0, 0, 0), e
}
function me(t, e) {
  h(2, arguments)
  var n = he(t),
    r = he(e)
  return n.getTime() === r.getTime()
}
function we(t) {
  h(1, arguments)
  var e = m(t),
    n = e.getFullYear(),
    r = e.getMonth(),
    a = new Date(0)
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
function ge(t, e) {
  h(2, arguments)
  var n = m(t),
    r = f(e),
    a = n.getMonth() + r,
    i = new Date(0)
  i.setFullYear(n.getFullYear(), a, 1), i.setHours(0, 0, 0, 0)
  var o = we(i)
  return n.setMonth(a, Math.min(o, n.getDate())), n
}
var ve = function(t, e) {
  return (
    void 0 === t && (t = []),
    t.some(function(t) {
      return me(e, t)
    })
  )
}
function ye(t, e, n) {
  return !(!e || !n) && fe(t, {start: e, end: n})
}
function be(t, e, n) {
  return !!((e && me(t, e)) || (n && me(t, n)))
}
function De(t) {
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
    (l && de(e, l)) ||
    (f && le(e, f)) ||
    (i && !o && s > 1 && fe(e, {start: i, end: Vt(i, s - 2)})) ||
    (a && a(e))
  )
}
function pe(t) {
  var e = ne(t)
  return {
    year: (function(t) {
      h(1, arguments)
      var e = m(t),
        n = e.getFullYear()
      return n
    })(e),
    month: (function(t) {
      h(1, arguments)
      var e = m(t),
        n = e.getMonth()
      return n
    })(e),
    date: e,
  }
}
function Te() {
  return pe(he(Date.now()))
}
function ke(t, e) {
  var n = e ? pe(e) : Te(),
    r = n.date,
    a = [n]
  return (
    t > 1 &&
      (a = Array.from(Array(t - 1).keys()).reduce(function(t) {
        return (r = ge(t[t.length - 1].date, 1)), t.concat([pe(r)])
      }, a)),
    a
  )
}
function xe(t, e, n) {
  var r = t[n > 0 ? t.length - 1 : 0].date
  return Array.from(Array(e).keys()).reduce(function(t) {
    return (
      (r = 0 === t.length ? ge(r, n) : ge(r, n >= 0 ? 1 : -1)),
      n > 0 ? t.concat([pe(r)]) : [pe(r)].concat(t)
    )
  }, [])
}
function Ce(t, e, n) {
  return t && 'string' == typeof e ? _t(t, e) : t && 'function' == typeof e ? e(t) : n
}
function Me(t) {
  var e = t.startDate,
    n = t.endDate,
    r = t.isDateBlocked,
    a = t.minBookingDays,
    i = t.exactMinBookingDays,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = !o || !de(e, Vt(o, -1)),
    c = !u || !le(Vt(e, a - 1), u)
  return (
    !(!e || 1 !== a || n || r(e)) ||
    ((e && a > 1 && !n && !i) || (e && a > 0 && i && s && c) || (e && a > 0 && i && !o && !u)
      ? !te({start: e, end: Vt(e, a - 1)}).some(function(t) {
          return r(t)
        })
      : !(!e || !n || i) &&
        !de(n, Vt(e, a - 1)) &&
          !te({start: e, end: n}).some(function(t) {
            return r(t)
          }))
  )
}
var Ue = 'startDate',
  Se = 'endDate'
function Ye(t) {
  var r = t.startDate,
    a = t.endDate,
    i = t.focusedInput,
    o = t.minBookingDate,
    u = t.maxBookingDate,
    s = t.onDatesChange,
    c = t.initialVisibleMonth,
    d = t.exactMinBookingDays,
    l = void 0 !== d && d,
    f = t.minBookingDays,
    h = void 0 === f ? 1 : f,
    m = t.numberOfMonths,
    w = void 0 === m ? 2 : m,
    g = t.firstDayOfWeek,
    v = void 0 === g ? 1 : g,
    y = t.isDateBlocked,
    b =
      void 0 === y
        ? function() {
            return !1
          }
        : y,
    D = t.unavailableDates,
    p = void 0 === D ? [] : D,
    T = e(function() {
      return ke(w, r || c || null)
    }),
    k = T[0],
    x = T[1],
    C = e(null),
    M = C[0],
    U = C[1],
    S = e(r),
    Y = S[0],
    P = S[1]
  n(function() {
    return (
      'undefined' != typeof window && window.addEventListener('keydown', B),
      function() {
        window.removeEventListener('keydown', B)
      }
    )
  })
  var E = function(t) {
      return ve(p, t) || b(t)
    },
    q = function(t) {
      P(t), (!Y || (Y && !me(t, Y))) && x(ke(w, t))
    },
    H = function(t) {
      return De({
        date: t,
        minBookingDate: o,
        maxBookingDate: u,
        startDate: r,
        endDate: a,
        minBookingDays: h,
        isDateBlockedFn: E,
      })
    }
  function B(t) {
    if (
      ('ArrowRight' === t.key ||
        'ArrowLeft' === t.key ||
        'ArrowDown' === t.key ||
        'ArrowUp' === t.key) &&
      !Y
    ) {
      var e = k[0]
      q(e.date), x(ke(w, e.date))
    }
  }
  return {
    firstDayOfWeek: v,
    activeMonths: k,
    isDateSelected: function(t) {
      return ye(t, r, a)
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
        return i && o > 1 && u && fe(e, {start: i, end: Vt(i, o - 1)})
          ? !te({start: i, end: Vt(i, o - 1)}).some(function(t) {
              return a(t)
            })
          : n && !r && i && fe(e, {start: n, end: Vt(n, o - 1)}) && me(n, i) && o > 1
          ? !te({start: n, end: Vt(n, o - 1)}).some(function(t) {
              return a(t)
            })
          : !(!n || r || !i || de(i, n) || !fe(e, {start: n, end: i})) &&
            !te({start: n, end: i}).some(function(t) {
              return a(t)
            })
      })({
        date: t,
        hoveredDate: M,
        startDate: r,
        endDate: a,
        minBookingDays: h,
        exactMinBookingDays: l,
        isDateBlocked: E,
      })
    },
    isFirstOrLastSelectedDate: function(t) {
      return be(t, r, a)
    },
    isDateBlocked: H,
    numberOfMonths: w,
    isDateFocused: function(t) {
      return !!Y && me(t, Y)
    },
    focusedDate: Y,
    hoveredDate: M,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: 'startDate'})
    },
    onDateHover: function(t) {
      if (t) {
        if (t) {
          var e = !H(t) || (r && me(t, r)),
            n = !o || !de(t, Vt(o, -1)),
            i = !u || !le(t, u),
            s = Vt(t, h - 1),
            c = !o || !de(s, o),
            d = !u || !le(s, u),
            f = l && h > 1 && n && i && c && d,
            m = r && !a && !l && n && i,
            w = !(h > 1 && r) || fe(t, {start: r, end: Vt(r, h - 2)}),
            g = r && me(t, r) && w
          e && (f || m || g) ? U(t) : null !== M && U(null)
        }
      } else U(null)
    },
    onDateSelect: function(t) {
      ;('endDate' === i || 'startDate' === i) &&
      h > 0 &&
      l &&
      Me({
        minBookingDays: h,
        exactMinBookingDays: l,
        minBookingDate: o,
        maxBookingDate: u,
        isDateBlocked: E,
        startDate: t,
        endDate: null,
      })
        ? s({startDate: t, endDate: Vt(t, h - 1), focusedInput: null})
        : (('endDate' === i && r && de(t, r)) || ('startDate' === i && a && le(t, a))) &&
          !l &&
          Me({minBookingDays: h, isDateBlocked: E, startDate: t, endDate: null})
        ? s({endDate: null, startDate: t, focusedInput: 'endDate'})
        : 'startDate' === i &&
          !l &&
          Me({minBookingDays: h, isDateBlocked: E, endDate: a, startDate: t})
        ? s({endDate: a, startDate: t, focusedInput: 'endDate'})
        : 'startDate' === i &&
          !l &&
          Me({minBookingDays: h, isDateBlocked: E, endDate: null, startDate: t})
        ? s({endDate: null, startDate: t, focusedInput: 'endDate'})
        : 'endDate' === i &&
          r &&
          !de(t, r) &&
          !l &&
          Me({minBookingDays: h, isDateBlocked: E, startDate: r, endDate: t}) &&
          s({startDate: r, endDate: t, focusedInput: null}),
        'endDate' === i || (Y && (!Y || me(t, Y))) || x(ke(w, t))
    },
    onDateFocus: q,
    goToPreviousMonths: function() {
      x(xe(k, w, -1)), P(null)
    },
    goToNextMonths: function() {
      x(xe(k, w, 1)), P(null)
    },
    goToPreviousYear: function(t) {
      void 0 === t && (t = 1), x(xe(k, w, -(12 * t - w + 1))), P(null)
    },
    goToNextYear: function(t) {
      void 0 === t && (t = 1), x(xe(k, w, 12 * t - w + 1)), P(null)
    },
  }
}
function Pe(t) {
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
    m = r(
      function() {
        return d(e)
      },
      [e, d],
    ),
    w = r(
      function() {
        return f(e)
      },
      [e, f],
    )
  n(
    function() {
      h && h.current && o(e) && h.current.focus()
    },
    [h, e, o],
  )
  var g = c(e) && !s(e)
  return {
    tabIndex: null === a || o(e) ? 0 : -1,
    isSelected: i(e),
    isSelectedStartOrEnd: u(e),
    isWithinHoverRange: s(e),
    disabledDate: g,
    onKeyDown: function(t) {
      'ArrowRight' === t.key
        ? l(Vt(e, 1))
        : 'ArrowLeft' === t.key
        ? l(Vt(e, -1))
        : 'ArrowUp' === t.key
        ? l(Vt(e, -7))
        : 'ArrowDown' === t.key && l(Vt(e, 7))
    },
    onClick: g ? function() {} : m,
    onMouseEnter: w,
  }
}
export {
  Se as END_DATE,
  Ue as START_DATE,
  oe as dayLabelFormat,
  Te as getCurrentYearMonthAndDate,
  pe as getDateMonthAndYear,
  ie as getDays,
  ke as getInitialMonths,
  Ce as getInputValue,
  ae as getWeekdayLabels,
  De as isDateBlocked,
  ye as isDateSelected,
  be as isFirstOrLastSelectedDate,
  se as monthLabelFormat,
  kt as parseDate,
  Ye as useDatepicker,
  Pe as useDay,
  ce as useMonth,
  ue as weekdayLabelFormat,
}
