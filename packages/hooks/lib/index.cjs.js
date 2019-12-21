'use strict'
Object.defineProperty(exports, '__esModule', {value: !0})
var react = require('react'),
  formatDistanceLocale = {
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
function formatDistance(e, t, r) {
  var n
  return (
    (r = r || {}),
    (n =
      'string' == typeof formatDistanceLocale[e]
        ? formatDistanceLocale[e]
        : 1 === t
        ? formatDistanceLocale[e].one
        : formatDistanceLocale[e].other.replace('{{count}}', t)),
    r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
  )
}
function buildFormatLongFn(e) {
  return function(t) {
    var r = t || {},
      n = r.width ? String(r.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  timeFormats = {full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a'},
  dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  formatLong = {
    date: buildFormatLongFn({formats: dateFormats, defaultWidth: 'full'}),
    time: buildFormatLongFn({formats: timeFormats, defaultWidth: 'full'}),
    dateTime: buildFormatLongFn({formats: dateTimeFormats, defaultWidth: 'full'}),
  },
  formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  }
function formatRelative(e, t, r, n) {
  return formatRelativeLocale[e]
}
function buildLocalizeFn(e) {
  return function(t, r) {
    var n,
      a = r || {}
    if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        o = a.width ? String(a.width) : i
      n = e.formattingValues[o] || e.formattingValues[i]
    } else {
      var s = e.defaultWidth,
        u = a.width ? String(a.width) : e.defaultWidth
      n = e.values[u] || e.values[s]
    }
    return n[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  monthValues = {
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
  dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  dayPeriodValues = {
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
  formattingDayPeriodValues = {
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
  }
function ordinalNumber(e, t) {
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
}
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({values: eraValues, defaultWidth: 'wide'}),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(e) {
      return Number(e) - 1
    },
  }),
  month: buildLocalizeFn({values: monthValues, defaultWidth: 'wide'}),
  day: buildLocalizeFn({values: dayValues, defaultWidth: 'wide'}),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}
function buildMatchPatternFn(e) {
  return function(t, r) {
    var n = String(t),
      a = r || {},
      i = n.match(e.matchPattern)
    if (!i) return null
    var o = i[0],
      s = n.match(e.parsePattern)
    if (!s) return null
    var u = e.valueCallback ? e.valueCallback(s[0]) : s[0]
    return {value: (u = a.valueCallback ? a.valueCallback(u) : u), rest: n.slice(o.length)}
  }
}
function buildMatchFn(e) {
  return function(t, r) {
    var n = String(t),
      a = r || {},
      i = a.width,
      o = (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
      s = n.match(o)
    if (!s) return null
    var u,
      d = s[0],
      c = (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth]
    return (
      (u =
        '[object Array]' === Object.prototype.toString.call(c)
          ? findIndex(c, function(e) {
              return e.test(n)
            })
          : findKey(c, function(e) {
              return e.test(n)
            })),
      (u = e.valueCallback ? e.valueCallback(u) : u),
      {value: (u = a.valueCallback ? a.valueCallback(u) : u), rest: n.slice(d.length)}
    )
  }
}
function findKey(e, t) {
  for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r
}
function findIndex(e, t) {
  for (var r = 0; r < e.length; r++) if (t(e[r])) return r
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i,
  parseOrdinalNumberPattern = /\d+/i,
  matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  parseEraPatterns = {any: [/^b/i, /^(a|c)/i]},
  matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  parseQuarterPatterns = {any: [/1/i, /2/i, /3/i, /4/i]},
  matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
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
  matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  parseDayPeriodPatterns = {
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
  match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function(e) {
        return parseInt(e, 10)
      },
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns,
      defaultParseWidth: 'any',
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: 'any',
      valueCallback: function(e) {
        return e + 1
      },
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: 'any',
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns,
      defaultParseWidth: 'any',
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: 'any',
    }),
  },
  locale = {
    code: 'en-US',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {weekStartsOn: 0, firstWeekContainsDate: 1},
  }
function toInteger(e) {
  if (null === e || !0 === e || !1 === e) return NaN
  var t = Number(e)
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function toDate(e) {
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
function addMilliseconds(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e).getTime(),
    n = toInteger(t)
  return new Date(r + n)
}
function subMilliseconds(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  return addMilliseconds(e, -toInteger(t))
}
function assign(e, t) {
  if (null == e)
    throw new TypeError('assign requires that input parameter not be null or undefined')
  for (var r in (t = t || {})) t.hasOwnProperty(r) && (e[r] = t[r])
  return e
}
function dateLongFormatter(e, t) {
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
function timeLongFormatter(e, t) {
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
function dateTimeLongFormatter(e, t) {
  var r,
    n = e.match(/(P+)(p+)?/),
    a = n[1],
    i = n[2]
  if (!i) return dateLongFormatter(e, t)
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
  return r.replace('{{date}}', dateLongFormatter(a, t)).replace('{{time}}', timeLongFormatter(i, t))
}
var longFormatters = {p: timeLongFormatter, P: dateTimeLongFormatter},
  MILLISECONDS_IN_MINUTE = 6e4
function getTimezoneOffsetInMilliseconds(e) {
  var t = new Date(e.getTime()),
    r = Math.ceil(t.getTimezoneOffset())
  t.setSeconds(0, 0)
  var n = t.getTime() % MILLISECONDS_IN_MINUTE
  return r * MILLISECONDS_IN_MINUTE + n
}
var protectedDayOfYearTokens = ['D', 'DD'],
  protectedWeekYearTokens = ['YY', 'YYYY']
function isProtectedDayOfYearToken(e) {
  return -1 !== protectedDayOfYearTokens.indexOf(e)
}
function isProtectedWeekYearToken(e) {
  return -1 !== protectedWeekYearTokens.indexOf(e)
}
function throwProtectedError(e) {
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
function startOfUTCWeek(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    i = null == a ? 0 : toInteger(a),
    o = null == r.weekStartsOn ? i : toInteger(r.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = toDate(e),
    u = s.getUTCDay(),
    d = (u < o ? 7 : 0) + u - o
  return s.setUTCDate(s.getUTCDate() - d), s.setUTCHours(0, 0, 0, 0), s
}
function getUTCWeekYear(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = toDate(e, t),
    n = r.getUTCFullYear(),
    a = t || {},
    i = a.locale,
    o = i && i.options && i.options.firstWeekContainsDate,
    s = null == o ? 1 : toInteger(o),
    u = null == a.firstWeekContainsDate ? s : toInteger(a.firstWeekContainsDate)
  if (!(u >= 1 && u <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var d = new Date(0)
  d.setUTCFullYear(n + 1, 0, u), d.setUTCHours(0, 0, 0, 0)
  var c = startOfUTCWeek(d, t),
    l = new Date(0)
  l.setUTCFullYear(n, 0, u), l.setUTCHours(0, 0, 0, 0)
  var f = startOfUTCWeek(l, t)
  return r.getTime() >= c.getTime() ? n + 1 : r.getTime() >= f.getTime() ? n : n - 1
}
function setUTCDay(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = r || {},
    a = n.locale,
    i = a && a.options && a.options.weekStartsOn,
    o = null == i ? 0 : toInteger(i),
    s = null == n.weekStartsOn ? o : toInteger(n.weekStartsOn)
  if (!(s >= 0 && s <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var u = toDate(e),
    d = toInteger(t),
    c = (((d % 7) + 7) % 7 < s ? 7 : 0) + d - u.getUTCDay()
  return u.setUTCDate(u.getUTCDate() + c), u
}
function setUTCISODay(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toInteger(t)
  r % 7 == 0 && (r -= 7)
  var n = toDate(e),
    a = (((r % 7) + 7) % 7 < 1 ? 7 : 0) + r - n.getUTCDay()
  return n.setUTCDate(n.getUTCDate() + a), n
}
function startOfUTCISOWeek(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = t.getUTCDay(),
    n = (r < 1 ? 7 : 0) + r - 1
  return t.setUTCDate(t.getUTCDate() - n), t.setUTCHours(0, 0, 0, 0), t
}
function getUTCISOWeekYear(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = t.getUTCFullYear(),
    n = new Date(0)
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0)
  var a = startOfUTCISOWeek(n),
    i = new Date(0)
  i.setUTCFullYear(r, 0, 4), i.setUTCHours(0, 0, 0, 0)
  var o = startOfUTCISOWeek(i)
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
}
function startOfUTCISOWeekYear(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = getUTCISOWeekYear(e),
    r = new Date(0)
  return r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0), startOfUTCISOWeek(r)
}
var MILLISECONDS_IN_WEEK = 6048e5
function getUTCISOWeek(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = startOfUTCISOWeek(t).getTime() - startOfUTCISOWeekYear(t).getTime()
  return Math.round(r / MILLISECONDS_IN_WEEK) + 1
}
function setUTCISOWeek(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = toInteger(t),
    a = getUTCISOWeek(r) - n
  return r.setUTCDate(r.getUTCDate() - 7 * a), r
}
function startOfUTCWeekYear(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.firstWeekContainsDate,
    i = null == a ? 1 : toInteger(a),
    o = null == r.firstWeekContainsDate ? i : toInteger(r.firstWeekContainsDate),
    s = getUTCWeekYear(e, t),
    u = new Date(0)
  return u.setUTCFullYear(s, 0, o), u.setUTCHours(0, 0, 0, 0), startOfUTCWeek(u, t)
}
var MILLISECONDS_IN_WEEK$1 = 6048e5
function getUTCWeek(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = startOfUTCWeek(r, t).getTime() - startOfUTCWeekYear(r, t).getTime()
  return Math.round(n / MILLISECONDS_IN_WEEK$1) + 1
}
function setUTCWeek(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = toDate(e),
    a = toInteger(t),
    i = getUTCWeek(n, r) - a
  return n.setUTCDate(n.getUTCDate() - 7 * i), n
}
var MILLISECONDS_IN_HOUR = 36e5,
  MILLISECONDS_IN_MINUTE$1 = 6e4,
  MILLISECONDS_IN_SECOND = 1e3,
  numericPatterns = {
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
  timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  }
function parseNumericPattern(e, t, r) {
  var n = t.match(e)
  if (!n) return null
  var a = parseInt(n[0], 10)
  return {value: r ? r(a) : a, rest: t.slice(n[0].length)}
}
function parseTimezonePattern(e, t) {
  var r = t.match(e)
  if (!r) return null
  if ('Z' === r[0]) return {value: 0, rest: t.slice(1)}
  var n = '+' === r[1] ? 1 : -1,
    a = r[2] ? parseInt(r[2], 10) : 0,
    i = r[3] ? parseInt(r[3], 10) : 0,
    o = r[5] ? parseInt(r[5], 10) : 0
  return {
    value:
      n * (a * MILLISECONDS_IN_HOUR + i * MILLISECONDS_IN_MINUTE$1 + o * MILLISECONDS_IN_SECOND),
    rest: t.slice(r[0].length),
  }
}
function parseAnyDigitsSigned(e, t) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, e, t)
}
function parseNDigits(e, t, r) {
  switch (e) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, t, r)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, t, r)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, t, r)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, t, r)
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + e + '}'), t, r)
  }
}
function parseNDigitsSigned(e, t, r) {
  switch (e) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, t, r)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, t, r)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, t, r)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, t, r)
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + e + '}'), t, r)
  }
}
function dayPeriodEnumToHours(e) {
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
function normalizeTwoDigitYear(e, t) {
  var r,
    n = t > 0,
    a = n ? t : 1 - t
  if (a <= 50) r = e || 100
  else {
    var i = a + 50
    r = e + 100 * Math.floor(i / 100) - (e >= i % 100 ? 100 : 0)
  }
  return n ? r : 1 - r
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function isLeapYearIndex(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0)
}
var parsers = {
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
            return parseNDigits(4, e, a)
          case 'yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return parseNDigits(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = e.getUTCFullYear()
        if (r.isTwoDigitYear) {
          var i = normalizeTwoDigitYear(r.year, a)
          return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
        }
        var o = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
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
            return parseNDigits(4, e, a)
          case 'Yo':
            return r.ordinalNumber(e, {unit: 'year', valueCallback: a})
          default:
            return parseNDigits(t.length, e, a)
        }
      },
      validate: function(e, t, r) {
        return t.isTwoDigitYear || t.year > 0
      },
      set: function(e, t, r, n) {
        var a = getUTCWeekYear(e, n)
        if (r.isTwoDigitYear) {
          var i = normalizeTwoDigitYear(r.year, a)
          return (
            e.setUTCFullYear(i, 0, n.firstWeekContainsDate),
            e.setUTCHours(0, 0, 0, 0),
            startOfUTCWeek(e, n)
          )
        }
        var o = 'era' in t && 1 !== t.era ? 1 - r.year : r.year
        return (
          e.setUTCFullYear(o, 0, n.firstWeekContainsDate),
          e.setUTCHours(0, 0, 0, 0),
          startOfUTCWeek(e, n)
        )
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    R: {
      priority: 130,
      parse: function(e, t, r, n) {
        return parseNDigitsSigned('R' === t ? 4 : t.length, e)
      },
      set: function(e, t, r, n) {
        var a = new Date(0)
        return a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0), startOfUTCISOWeek(a)
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
        return parseNDigitsSigned('u' === t ? 4 : t.length, e)
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
            return parseNDigits(t.length, e)
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
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.month, e, a)
          case 'MM':
            return parseNDigits(2, e, a)
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
            return parseNumericPattern(numericPatterns.month, e, a)
          case 'LL':
            return parseNDigits(2, e, a)
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
            return parseNumericPattern(numericPatterns.week, e)
          case 'wo':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return parseNDigits(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return startOfUTCWeek(setUTCWeek(e, r, n), n)
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
    },
    I: {
      priority: 100,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'I':
            return parseNumericPattern(numericPatterns.week, e)
          case 'Io':
            return r.ordinalNumber(e, {unit: 'week'})
          default:
            return parseNDigits(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return t >= 1 && t <= 53
      },
      set: function(e, t, r, n) {
        return startOfUTCISOWeek(setUTCISOWeek(e, r, n), n)
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
    },
    d: {
      priority: 90,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'd':
            return parseNumericPattern(numericPatterns.date, e)
          case 'do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return parseNDigits(t.length, e)
        }
      },
      validate: function(e, t, r) {
        var n = isLeapYearIndex(e.getUTCFullYear()),
          a = e.getUTCMonth()
        return n ? t >= 1 && t <= DAYS_IN_MONTH_LEAP_YEAR[a] : t >= 1 && t <= DAYS_IN_MONTH[a]
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
            return parseNumericPattern(numericPatterns.dayOfYear, e)
          case 'Do':
            return r.ordinalNumber(e, {unit: 'date'})
          default:
            return parseNDigits(t.length, e)
        }
      },
      validate: function(e, t, r) {
        return isLeapYearIndex(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
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
        return (e = setUTCDay(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return parseNDigits(t.length, e, a)
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
        return (e = setUTCDay(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return parseNDigits(t.length, e, a)
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
        return (e = setUTCDay(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
            return parseNDigits(t.length, e)
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
        return (e = setUTCISODay(e, r, n)).setUTCHours(0, 0, 0, 0), e
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
        return e.setUTCHours(dayPeriodEnumToHours(r), 0, 0, 0), e
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
        return e.setUTCHours(dayPeriodEnumToHours(r), 0, 0, 0), e
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
        return e.setUTCHours(dayPeriodEnumToHours(r), 0, 0, 0), e
      },
      incompatibleTokens: ['a', 'b', 't', 'T'],
    },
    h: {
      priority: 70,
      parse: function(e, t, r, n) {
        switch (t) {
          case 'h':
            return parseNumericPattern(numericPatterns.hour12h, e)
          case 'ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.hour23h, e)
          case 'Ho':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.hour11h, e)
          case 'Ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.hour24h, e)
          case 'ko':
            return r.ordinalNumber(e, {unit: 'hour'})
          default:
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.minute, e)
          case 'mo':
            return r.ordinalNumber(e, {unit: 'minute'})
          default:
            return parseNDigits(t.length, e)
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
            return parseNumericPattern(numericPatterns.second, e)
          case 'so':
            return r.ordinalNumber(e, {unit: 'second'})
          default:
            return parseNDigits(t.length, e)
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
        return parseNDigits(t.length, e, function(e) {
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
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, e)
          case 'XX':
            return parseTimezonePattern(timezonePatterns.basic, e)
          case 'XXXX':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, e)
          case 'XXXXX':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, e)
          case 'XXX':
          default:
            return parseTimezonePattern(timezonePatterns.extended, e)
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
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, e)
          case 'xx':
            return parseTimezonePattern(timezonePatterns.basic, e)
          case 'xxxx':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, e)
          case 'xxxxx':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, e)
          case 'xxx':
          default:
            return parseTimezonePattern(timezonePatterns.extended, e)
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
        return parseAnyDigitsSigned(e)
      },
      set: function(e, t, r, n) {
        return [new Date(1e3 * r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
    T: {
      priority: 20,
      parse: function(e, t, r, n) {
        return parseAnyDigitsSigned(e)
      },
      set: function(e, t, r, n) {
        return [new Date(r), {timestampIsSet: !0}]
      },
      incompatibleTokens: '*',
    },
  },
  TIMEZONE_UNIT_PRIORITY = 10,
  formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  escapedStringRegExp = /^'([^]*?)'?$/,
  doubleQuoteRegExp = /''/g,
  notWhitespaceRegExp = /\S/,
  unescapedLatinCharacterRegExp = /[a-zA-Z]/
function parse(e, t, r, n) {
  if (arguments.length < 3)
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present')
  var a = String(e),
    i = String(t),
    o = n || {},
    s = o.locale || locale
  if (!s.match) throw new RangeError('locale must contain match property')
  var u = s.options && s.options.firstWeekContainsDate,
    d = null == u ? 1 : toInteger(u),
    c = null == o.firstWeekContainsDate ? d : toInteger(o.firstWeekContainsDate)
  if (!(c >= 1 && c <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var l = s.options && s.options.weekStartsOn,
    f = null == l ? 0 : toInteger(l),
    g = null == o.weekStartsOn ? f : toInteger(o.weekStartsOn)
  if (!(g >= 0 && g <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if ('' === i) return '' === a ? toDate(r) : new Date(NaN)
  var h,
    m = {firstWeekContainsDate: c, weekStartsOn: g, locale: s},
    w = [{priority: TIMEZONE_UNIT_PRIORITY, set: dateToSystemTimezone, index: 0}],
    y = i
      .match(longFormattingTokensRegExp)
      .map(function(e) {
        var t = e[0]
        return 'p' === t || 'P' === t ? (0, longFormatters[t])(e, s.formatLong, m) : e
      })
      .join('')
      .match(formattingTokensRegExp),
    D = []
  for (h = 0; h < y.length; h++) {
    var p = y[h]
    !o.useAdditionalWeekYearTokens && isProtectedWeekYearToken(p) && throwProtectedError(p),
      !o.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(p) && throwProtectedError(p)
    var T = p[0],
      b = parsers[T]
    if (b) {
      var v = b.incompatibleTokens
      if (Array.isArray(v)) {
        for (var k = void 0, C = 0; C < D.length; C++) {
          var M = D[C].token
          if (-1 !== v.indexOf(M) || M === T) {
            k = D[C]
            break
          }
        }
        if (k)
          throw new RangeError(
            "The format string mustn't contain `"
              .concat(k.fullToken, '` and `')
              .concat(p, '` at the same time'),
          )
      } else if ('*' === b.incompatibleTokens && D.length)
        throw new RangeError(
          "The format string mustn't contain `".concat(p, '` and any other token at the same time'),
        )
      D.push({token: T, fullToken: p})
      var x = b.parse(a, p, s.match, m)
      if (!x) return new Date(NaN)
      w.push({
        priority: b.priority,
        set: b.set,
        validate: b.validate,
        value: x.value,
        index: w.length,
      }),
        (a = x.rest)
    } else {
      if (T.match(unescapedLatinCharacterRegExp))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + T + '`',
        )
      if (("''" === p ? (p = "'") : "'" === T && (p = cleanEscapedString(p)), 0 !== a.indexOf(p)))
        return new Date(NaN)
      a = a.slice(p.length)
    }
  }
  if (a.length > 0 && notWhitespaceRegExp.test(a)) return new Date(NaN)
  var E = w
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
        return w
          .filter(function(t) {
            return t.priority === e
          })
          .reverse()
      })
      .map(function(e) {
        return e[0]
      }),
    S = toDate(r)
  if (isNaN(S)) return new Date(NaN)
  var P = subMilliseconds(S, getTimezoneOffsetInMilliseconds(S)),
    O = {}
  for (h = 0; h < E.length; h++) {
    var N = E[h]
    if (N.validate && !N.validate(P, N.value, m)) return new Date(NaN)
    var I = N.set(P, O, N.value, m)
    I[0] ? ((P = I[0]), assign(O, I[1])) : (P = I)
  }
  return P
}
function dateToSystemTimezone(e, t) {
  if (t.timestampIsSet) return e
  var r = new Date(0)
  return (
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
    r
  )
}
function cleanEscapedString(e) {
  return e.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
function isValid(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e)
  return !isNaN(t)
}
function addLeadingZeros(e, t) {
  for (var r = e < 0 ? '-' : '', n = Math.abs(e).toString(); n.length < t; ) n = '0' + n
  return r + n
}
var formatters = {
    y: function(e, t) {
      var r = e.getUTCFullYear(),
        n = r > 0 ? r : 1 - r
      return addLeadingZeros('yy' === t ? n % 100 : n, t.length)
    },
    M: function(e, t) {
      var r = e.getUTCMonth()
      return 'M' === t ? String(r + 1) : addLeadingZeros(r + 1, 2)
    },
    d: function(e, t) {
      return addLeadingZeros(e.getUTCDate(), t.length)
    },
    a: function(e, t) {
      var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
      switch (t) {
        case 'a':
        case 'aa':
        case 'aaa':
          return r.toUpperCase()
        case 'aaaaa':
          return r[0]
        case 'aaaa':
        default:
          return 'am' === r ? 'a.m.' : 'p.m.'
      }
    },
    h: function(e, t) {
      return addLeadingZeros(e.getUTCHours() % 12 || 12, t.length)
    },
    H: function(e, t) {
      return addLeadingZeros(e.getUTCHours(), t.length)
    },
    m: function(e, t) {
      return addLeadingZeros(e.getUTCMinutes(), t.length)
    },
    s: function(e, t) {
      return addLeadingZeros(e.getUTCSeconds(), t.length)
    },
    S: function(e, t) {
      var r = t.length,
        n = e.getUTCMilliseconds()
      return addLeadingZeros(Math.floor(n * Math.pow(10, r - 3)), t.length)
    },
  },
  MILLISECONDS_IN_DAY = 864e5
function getUTCDayOfYear(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = t.getTime()
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
  var n = r - t.getTime()
  return Math.floor(n / MILLISECONDS_IN_DAY) + 1
}
var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  formatters$1 = {
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
      return formatters.y(e, t)
    },
    Y: function(e, t, r, n) {
      var a = getUTCWeekYear(e, n),
        i = a > 0 ? a : 1 - a
      return 'YY' === t
        ? addLeadingZeros(i % 100, 2)
        : 'Yo' === t
        ? r.ordinalNumber(i, {unit: 'year'})
        : addLeadingZeros(i, t.length)
    },
    R: function(e, t) {
      return addLeadingZeros(getUTCISOWeekYear(e), t.length)
    },
    u: function(e, t) {
      return addLeadingZeros(e.getUTCFullYear(), t.length)
    },
    Q: function(e, t, r) {
      var n = Math.ceil((e.getUTCMonth() + 1) / 3)
      switch (t) {
        case 'Q':
          return String(n)
        case 'QQ':
          return addLeadingZeros(n, 2)
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
          return addLeadingZeros(n, 2)
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
          return formatters.M(e, t)
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
          return addLeadingZeros(n + 1, 2)
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
      var a = getUTCWeek(e, n)
      return 'wo' === t ? r.ordinalNumber(a, {unit: 'week'}) : addLeadingZeros(a, t.length)
    },
    I: function(e, t, r) {
      var n = getUTCISOWeek(e)
      return 'Io' === t ? r.ordinalNumber(n, {unit: 'week'}) : addLeadingZeros(n, t.length)
    },
    d: function(e, t, r) {
      return 'do' === t ? r.ordinalNumber(e.getUTCDate(), {unit: 'date'}) : formatters.d(e, t)
    },
    D: function(e, t, r) {
      var n = getUTCDayOfYear(e)
      return 'Do' === t ? r.ordinalNumber(n, {unit: 'dayOfYear'}) : addLeadingZeros(n, t.length)
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
        i = (a - n.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case 'e':
          return String(i)
        case 'ee':
          return addLeadingZeros(i, 2)
        case 'eo':
          return r.ordinalNumber(i, {unit: 'day'})
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
        i = (a - n.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case 'c':
          return String(i)
        case 'cc':
          return addLeadingZeros(i, t.length)
        case 'co':
          return r.ordinalNumber(i, {unit: 'day'})
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
          return addLeadingZeros(a, t.length)
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
      switch (
        ((n =
          12 === a
            ? dayPeriodEnum.noon
            : 0 === a
            ? dayPeriodEnum.midnight
            : a / 12 >= 1
            ? 'pm'
            : 'am'),
        t)
      ) {
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
      switch (
        ((n =
          a >= 17
            ? dayPeriodEnum.evening
            : a >= 12
            ? dayPeriodEnum.afternoon
            : a >= 4
            ? dayPeriodEnum.morning
            : dayPeriodEnum.night),
        t)
      ) {
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
      return formatters.h(e, t)
    },
    H: function(e, t, r) {
      return 'Ho' === t ? r.ordinalNumber(e.getUTCHours(), {unit: 'hour'}) : formatters.H(e, t)
    },
    K: function(e, t, r) {
      var n = e.getUTCHours() % 12
      return 'Ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : addLeadingZeros(n, t.length)
    },
    k: function(e, t, r) {
      var n = e.getUTCHours()
      return (
        0 === n && (n = 24),
        'ko' === t ? r.ordinalNumber(n, {unit: 'hour'}) : addLeadingZeros(n, t.length)
      )
    },
    m: function(e, t, r) {
      return 'mo' === t ? r.ordinalNumber(e.getUTCMinutes(), {unit: 'minute'}) : formatters.m(e, t)
    },
    s: function(e, t, r) {
      return 'so' === t ? r.ordinalNumber(e.getUTCSeconds(), {unit: 'second'}) : formatters.s(e, t)
    },
    S: function(e, t) {
      return formatters.S(e, t)
    },
    X: function(e, t, r, n) {
      var a = (n._originalDate || e).getTimezoneOffset()
      if (0 === a) return 'Z'
      switch (t) {
        case 'X':
          return formatTimezoneWithOptionalMinutes(a)
        case 'XXXX':
        case 'XX':
          return formatTimezone(a)
        case 'XXXXX':
        case 'XXX':
        default:
          return formatTimezone(a, ':')
      }
    },
    x: function(e, t, r, n) {
      var a = (n._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'x':
          return formatTimezoneWithOptionalMinutes(a)
        case 'xxxx':
        case 'xx':
          return formatTimezone(a)
        case 'xxxxx':
        case 'xxx':
        default:
          return formatTimezone(a, ':')
      }
    },
    O: function(e, t, r, n) {
      var a = (n._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + formatTimezoneShort(a, ':')
        case 'OOOO':
        default:
          return 'GMT' + formatTimezone(a, ':')
      }
    },
    z: function(e, t, r, n) {
      var a = (n._originalDate || e).getTimezoneOffset()
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + formatTimezoneShort(a, ':')
        case 'zzzz':
        default:
          return 'GMT' + formatTimezone(a, ':')
      }
    },
    t: function(e, t, r, n) {
      var a = n._originalDate || e
      return addLeadingZeros(Math.floor(a.getTime() / 1e3), t.length)
    },
    T: function(e, t, r, n) {
      return addLeadingZeros((n._originalDate || e).getTime(), t.length)
    },
  }
function formatTimezoneShort(e, t) {
  var r = e > 0 ? '-' : '+',
    n = Math.abs(e),
    a = Math.floor(n / 60),
    i = n % 60
  if (0 === i) return r + String(a)
  var o = t || ''
  return r + String(a) + o + addLeadingZeros(i, 2)
}
function formatTimezoneWithOptionalMinutes(e, t) {
  return e % 60 == 0
    ? (e > 0 ? '-' : '+') + addLeadingZeros(Math.abs(e) / 60, 2)
    : formatTimezone(e, t)
}
function formatTimezone(e, t) {
  var r = t || '',
    n = e > 0 ? '-' : '+',
    a = Math.abs(e)
  return n + addLeadingZeros(Math.floor(a / 60), 2) + r + addLeadingZeros(a % 60, 2)
}
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  escapedStringRegExp$1 = /^'([^]*?)'?$/,
  doubleQuoteRegExp$1 = /''/g,
  unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/
function format(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var n = String(t),
    a = r || {},
    i = a.locale || locale,
    o = i.options && i.options.firstWeekContainsDate,
    s = null == o ? 1 : toInteger(o),
    u = null == a.firstWeekContainsDate ? s : toInteger(a.firstWeekContainsDate)
  if (!(u >= 1 && u <= 7))
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  var d = i.options && i.options.weekStartsOn,
    c = null == d ? 0 : toInteger(d),
    l = null == a.weekStartsOn ? c : toInteger(a.weekStartsOn)
  if (!(l >= 0 && l <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  if (!i.localize) throw new RangeError('locale must contain localize property')
  if (!i.formatLong) throw new RangeError('locale must contain formatLong property')
  var f = toDate(e)
  if (!isValid(f)) throw new RangeError('Invalid time value')
  var g = subMilliseconds(f, getTimezoneOffsetInMilliseconds(f)),
    h = {firstWeekContainsDate: u, weekStartsOn: l, locale: i, _originalDate: f}
  return n
    .match(longFormattingTokensRegExp$1)
    .map(function(e) {
      var t = e[0]
      return 'p' === t || 'P' === t ? (0, longFormatters[t])(e, i.formatLong, h) : e
    })
    .join('')
    .match(formattingTokensRegExp$1)
    .map(function(e) {
      if ("''" === e) return "'"
      var t = e[0]
      if ("'" === t) return cleanEscapedString$1(e)
      var r = formatters$1[t]
      if (r)
        return (
          !a.useAdditionalWeekYearTokens && isProtectedWeekYearToken(e) && throwProtectedError(e),
          !a.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(e) && throwProtectedError(e),
          r(g, e, i.localize, h)
        )
      if (t.match(unescapedLatinCharacterRegExp$1))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' + t + '`',
        )
      return e
    })
    .join('')
}
function cleanEscapedString$1(e) {
  return e.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'")
}
function __spreadArrays() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
  var n = Array(e),
    a = 0
  for (t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o]
  return n
}
function addDays(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = toInteger(t)
  return r.setDate(r.getDate() + n), r
}
function eachDayOfInterval(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = e || {},
    n = toDate(r.start),
    a = toDate(r.end).getTime()
  if (!(n.getTime() <= a)) throw new RangeError('Invalid interval')
  var i = [],
    o = n
  o.setHours(0, 0, 0, 0)
  var s = t && 'step' in t ? Number(t.step) : 1
  if (s < 1 || isNaN(s)) throw new RangeError('`options.step` must be a number greater than 1')
  for (; o.getTime() <= a; ) i.push(toDate(o)), o.setDate(o.getDate() + s), o.setHours(0, 0, 0, 0)
  return i
}
function endOfMonth(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = t.getMonth()
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
}
function endOfWeek(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    i = null == a ? 0 : toInteger(a),
    o = null == r.weekStartsOn ? i : toInteger(r.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = toDate(e),
    u = s.getDay(),
    d = 6 + (u < o ? -7 : 0) - (u - o)
  return s.setDate(s.getDate() + d), s.setHours(23, 59, 59, 999), s
}
function getDay(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  return toDate(e).getDay()
}
function startOfMonth(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
function startOfWeek(e, t) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = r.locale,
    a = n && n.options && n.options.weekStartsOn,
    i = null == a ? 0 : toInteger(a),
    o = null == r.weekStartsOn ? i : toInteger(r.weekStartsOn)
  if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  var s = toDate(e),
    u = s.getDay(),
    d = (u < o ? 7 : 0) + u - o
  return s.setDate(s.getDate() - d), s.setHours(0, 0, 0, 0), s
}
function getWeekdayLabels(e) {
  var t = void 0 === e ? {} : e,
    r = t.firstDayOfWeek,
    n = void 0 === r ? 1 : r,
    a = t.weekdayLabelFormat,
    i =
      void 0 === a
        ? function(e) {
            return format(e, 'iiiiii')
          }
        : a,
    o = new Date()
  return eachDayOfInterval({
    start: addDays(startOfWeek(o), n),
    end: addDays(endOfWeek(o), n),
  }).reduce(function(e, t) {
    return e.push(i(t)), e
  }, [])
}
function getDays(e) {
  var t = e.year,
    r = e.month,
    n = e.firstDayOfWeek,
    a = void 0 === n ? 1 : n,
    i = e.dayLabelFormat,
    o =
      void 0 === i
        ? function(e) {
            return format(e, 'dd')
          }
        : i,
    s = new Date(t, r),
    u = startOfMonth(s),
    d = getDay(u),
    c = endOfMonth(s)
  return __spreadArrays(
    Array.from(Array(d >= a ? d - a : 6 - a + d + 1).keys()).fill(0),
    eachDayOfInterval({start: u, end: c}).map(function(e) {
      return {date: e, dayLabel: o(e)}
    }),
  )
}
var dayLabelFormatFn = function(e) {
    return format(e, 'dd')
  },
  weekdayLabelFormatFn = function(e) {
    return format(e, 'eeeeee')
  },
  monthLabelFormatFn = function(e) {
    return format(e, 'MMMM yyyy')
  }
function useMonth(e) {
  var t = e.year,
    r = e.month,
    n = e.firstDayOfWeek,
    a = void 0 === n ? 1 : n,
    i = e.dayLabelFormat,
    o = void 0 === i ? dayLabelFormatFn : i,
    s = e.weekdayLabelFormat,
    u = void 0 === s ? weekdayLabelFormatFn : s,
    d = e.monthLabelFormat,
    c = void 0 === d ? monthLabelFormatFn : d
  return {
    days: react.useMemo(
      function() {
        return getDays({year: t, month: r, firstDayOfWeek: a, dayLabelFormat: o})
      },
      [t, r, a, o],
    ),
    weekdayLabels: react.useMemo(
      function() {
        return getWeekdayLabels({firstDayOfWeek: a, weekdayLabelFormat: u})
      },
      [a, u],
    ),
    monthLabel: c(new Date(t, r)),
  }
}
function isBefore(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = toDate(t)
  return r.getTime() < n.getTime()
}
function isAfter(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = toDate(t)
  return r.getTime() > n.getTime()
}
function isWithinInterval(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = t || {},
    n = toDate(e).getTime(),
    a = toDate(r.start).getTime(),
    i = toDate(r.end).getTime()
  if (!(a <= i)) throw new RangeError('Invalid interval')
  return n >= a && n <= i
}
function startOfDay(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e)
  return t.setHours(0, 0, 0, 0), t
}
function isSameDay(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = startOfDay(e),
    n = startOfDay(t)
  return r.getTime() === n.getTime()
}
function getYear(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  return toDate(e).getFullYear()
}
function getMonth(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  return toDate(e).getMonth()
}
function startOfToday() {
  return startOfDay(Date.now())
}
function getDaysInMonth(e) {
  if (arguments.length < 1)
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  var t = toDate(e),
    r = t.getFullYear(),
    n = t.getMonth(),
    a = new Date(0)
  return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}
function addMonths(e, t) {
  if (arguments.length < 2)
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  var r = toDate(e),
    n = toInteger(t),
    a = r.getMonth() + n,
    i = new Date(0)
  i.setFullYear(r.getFullYear(), a, 1), i.setHours(0, 0, 0, 0)
  var o = getDaysInMonth(i)
  return r.setMonth(a, Math.min(o, r.getDate())), r
}
function isDateSelected(e, t, r) {
  return !(!t || !r) && isWithinInterval(e, {start: t, end: r})
}
function isFirstOrLastSelectedDate(e, t, r) {
  return !!((t && isSameDay(e, t)) || (r && isSameDay(e, r)))
}
function isDateBlocked(e) {
  var t = e.date,
    r = e.minBookingDate,
    n = e.maxBookingDate,
    a = e.isDateBlockedFn,
    i = e.startDate,
    o = e.endDate,
    s = e.minBookingDays,
    u = void 0 === s ? 1 : s,
    d = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
    c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
  return !!(
    (d && isBefore(t, d)) ||
    (c && isAfter(t, c)) ||
    (i && !o && u > 1 && isWithinInterval(t, {start: i, end: addDays(i, u - 2)})) ||
    (a && a(t))
  )
}
function getDateMonthAndYear(e) {
  var t = startOfMonth(e)
  return {year: getYear(t), month: getMonth(t), date: t}
}
function getCurrentYearMonthAndDate() {
  return getDateMonthAndYear(startOfToday())
}
function getInitialMonths(e, t) {
  var r = t ? getDateMonthAndYear(t) : getCurrentYearMonthAndDate(),
    n = r.date,
    a = [r]
  return (
    e > 1 &&
      (a = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = addMonths(e[e.length - 1].date, 1)), e.concat([getDateMonthAndYear(n)])
      }, a)),
    a
  )
}
function getNextActiveMonth(e, t, r) {
  var n = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (n = 0 === e.length ? addMonths(n, r) : addMonths(n, r >= 0 ? 1 : -1)),
      r > 0 ? e.concat([getDateMonthAndYear(n)]) : [getDateMonthAndYear(n)].concat(e)
    )
  }, [])
}
function getInputValue(e, t, r) {
  return e && 'string' == typeof t ? format(e, t) : e && 'function' == typeof t ? t(e) : r
}
function canSelectRange(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    a = e.minBookingDays,
    i = e.exactMinBookingDays,
    o = e.minBookingDate,
    s = e.maxBookingDate,
    u = !o || !isBefore(t, addDays(o, -1)),
    d = !s || !isAfter(addDays(t, a - 1), s)
  return (
    !(!t || 1 !== a || r || n(t)) ||
    ((t && a > 1 && !r && !i) || (t && a > 0 && i && u && d) || (t && a > 0 && i && !o && !s)
      ? eachDayOfInterval({start: t, end: addDays(t, a - 1)}).reduce(function(e, t) {
          return e ? !n(t) : e
        }, !0)
      : !(!t || !r || i) &&
        !isBefore(r, addDays(t, a - 1)) &&
          eachDayOfInterval({start: t, end: r}).reduce(function(e, t) {
            return e ? !n(t) : e
          }, !0))
  )
}
function isDateHovered(e) {
  var t = e.date,
    r = e.startDate,
    n = e.endDate,
    a = e.isDateBlocked,
    i = e.hoveredDate,
    o = e.minBookingDays,
    s = e.exactMinBookingDays
  return i && o > 1 && s && isWithinInterval(t, {start: i, end: addDays(i, o - 1)})
    ? eachDayOfInterval({start: i, end: addDays(i, o - 1)}).reduce(function(e, t) {
        return e ? !a(t) : e
      }, !0)
    : r &&
      !n &&
      i &&
      isWithinInterval(t, {start: r, end: addDays(r, o - 1)}) &&
      isSameDay(r, i) &&
      o > 1
    ? eachDayOfInterval({start: r, end: addDays(r, o - 1)}).reduce(function(e, t) {
        return e ? !a(t) : e
      }, !0)
    : !(!r || n || !i || isBefore(i, r) || !isWithinInterval(t, {start: r, end: i})) &&
      eachDayOfInterval({start: r, end: i}).reduce(function(e, t) {
        return e ? !a(t) : e
      }, !0)
}
var START_DATE = 'startDate',
  END_DATE = 'endDate'
function useDatepicker(e) {
  var t = e.startDate,
    r = e.endDate,
    n = e.focusedInput,
    a = e.minBookingDate,
    i = e.maxBookingDate,
    o = e.onDatesChange,
    s = e.exactMinBookingDays,
    u = void 0 !== s && s,
    d = e.minBookingDays,
    c = void 0 === d ? 1 : d,
    l = e.numberOfMonths,
    f = void 0 === l ? 2 : l,
    g = e.firstDayOfWeek,
    h = void 0 === g ? 1 : g,
    m = e.isDateBlocked,
    w =
      void 0 === m
        ? function() {
            return !1
          }
        : m,
    y = react.useState(function() {
      return getInitialMonths(f, t)
    }),
    D = y[0],
    p = y[1],
    T = react.useState(null),
    b = T[0],
    v = T[1],
    k = react.useState(t),
    C = k[0],
    M = k[1],
    x = react.useCallback(
      function(e) {
        M(e), (!C || (C && !isSameDay(e, C))) && p(getInitialMonths(f, e))
      },
      [M, p, f, C],
    ),
    E = react.useCallback(
      function(e) {
        return isDateSelected(e, t, r)
      },
      [t, r],
    ),
    S = react.useCallback(
      function(e) {
        return isFirstOrLastSelectedDate(e, t, r)
      },
      [t, r],
    ),
    P = react.useCallback(
      function(e) {
        return isDateBlocked({
          date: e,
          minBookingDate: a,
          maxBookingDate: i,
          startDate: t,
          endDate: r,
          minBookingDays: c,
          isDateBlockedFn: w,
        })
      },
      [a, i, t, r, c, w],
    ),
    O = react.useCallback(
      function(e) {
        return !!C && isSameDay(e, C)
      },
      [C],
    ),
    N = react.useCallback(
      function(e) {
        return isDateHovered({
          date: e,
          hoveredDate: b,
          startDate: t,
          endDate: r,
          minBookingDays: c,
          exactMinBookingDays: u,
          isDateBlocked: w,
        })
      },
      [b, t, r, c, u, w],
    )
  function I(e) {
    if (
      ('ArrowRight' === e.key ||
        'ArrowLeft' === e.key ||
        'ArrowDown' === e.key ||
        'ArrowUp' === e.key) &&
      !C
    ) {
      var t = D[0]
      x(t.date), p(getInitialMonths(f, t.date))
    }
  }
  return (
    react.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', I),
        function() {
          window.removeEventListener('keydown', I)
        }
      )
    }),
    {
      firstDayOfWeek: h,
      activeMonths: D,
      isDateSelected: E,
      isDateHovered: N,
      isFirstOrLastSelectedDate: S,
      isDateBlocked: P,
      numberOfMonths: f,
      isDateFocused: O,
      focusedDate: C,
      hoveredDate: b,
      onResetDates: function() {
        o({startDate: null, endDate: null, focusedInput: START_DATE})
      },
      onDateHover: function(e) {
        if (e) {
          if (e) {
            var n = !P(e) || (t && isSameDay(e, t)),
              o = !a || !isBefore(e, addDays(a, -1)),
              s = !i || !isAfter(e, i),
              d = addDays(e, c - 1),
              l = !a || !isBefore(d, a),
              f = !i || !isAfter(d, i),
              g = u && c > 1 && o && s && l && f,
              h = t && !r && !u && o && s,
              m = !(c > 1 && t) || isWithinInterval(e, {start: t, end: addDays(t, c - 2)}),
              w = t && isSameDay(e, t) && m
            n && (g || h || w) ? v(e) : null !== b && v(null)
          }
        } else v(null)
      },
      onDateSelect: function(e) {
        ;(n === END_DATE || n === START_DATE) &&
        c > 0 &&
        u &&
        canSelectRange({
          minBookingDays: c,
          exactMinBookingDays: u,
          minBookingDate: a,
          maxBookingDate: i,
          isDateBlocked: w,
          startDate: e,
          endDate: null,
        })
          ? o({startDate: e, endDate: addDays(e, c - 1), focusedInput: null})
          : ((n === END_DATE && t && isBefore(e, t)) || (n === START_DATE && r && isAfter(e, r))) &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: w, startDate: e, endDate: null})
          ? o({endDate: null, startDate: e, focusedInput: END_DATE})
          : n === START_DATE &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: w, endDate: r, startDate: e})
          ? o({endDate: r, startDate: e, focusedInput: END_DATE})
          : n === START_DATE &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: w, endDate: null, startDate: e})
          ? o({endDate: null, startDate: e, focusedInput: END_DATE})
          : n === END_DATE &&
            t &&
            !isBefore(e, t) &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: w, startDate: t, endDate: e}) &&
            o({startDate: t, endDate: e, focusedInput: null}),
          n === END_DATE || (C && (!C || isSameDay(e, C))) || p(getInitialMonths(f, e))
      },
      onDateFocus: x,
      goToPreviousMonths: function() {
        p(getNextActiveMonth(D, f, -1)), M(null)
      },
      goToNextMonths: function() {
        p(getNextActiveMonth(D, f, 1)), M(null)
      },
      goToPreviousYear: function(e) {
        void 0 === e && (e = 1), p(getNextActiveMonth(D, f, -(12 * e - f + 1))), M(null)
      },
      goToNextYear: function(e) {
        void 0 === e && (e = 1), p(getNextActiveMonth(D, f, 12 * e - f + 1)), M(null)
      },
    }
  )
}
function useDay(e) {
  var t = e.date,
    r = e.focusedDate,
    n = e.isDateSelected,
    a = e.isDateFocused,
    i = e.isFirstOrLastSelectedDate,
    o = e.isDateHovered,
    s = e.isDateBlocked,
    u = e.onDateSelect,
    d = e.onDateFocus,
    c = e.onDateHover,
    l = e.dayRef,
    f = e.unavailableDates,
    g = react.useCallback(
      function() {
        return u(t)
      },
      [t, u],
    ),
    h = react.useCallback(
      function() {
        return c(t)
      },
      [t, c],
    )
  react.useEffect(
    function() {
      l && l.current && a(t) && l.current.focus()
    },
    [l, t, a],
  )
  var m =
    (s(t) && !o(t)) ||
    (function(e, t) {
      return (
        void 0 === e && (e = []),
        e.some(function(e) {
          return isSameDay(t, e)
        })
      )
    })(f, t)
  return {
    tabIndex: null === r || a(t) ? 0 : -1,
    isSelected: n(t),
    isSelectedStartOrEnd: i(t),
    isWithinHoverRange: o(t),
    disabledDate: m,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? d(addDays(t, 1))
        : 'ArrowLeft' === e.key
        ? d(addDays(t, -1))
        : 'ArrowUp' === e.key
        ? d(addDays(t, -7))
        : 'ArrowDown' === e.key && d(addDays(t, 7))
    },
    onClick: m ? function() {} : g,
    onMouseEnter: h,
  }
}
;(exports.END_DATE = END_DATE),
  (exports.START_DATE = START_DATE),
  (exports.dayLabelFormat = dayLabelFormatFn),
  (exports.getCurrentYearMonthAndDate = getCurrentYearMonthAndDate),
  (exports.getDateMonthAndYear = getDateMonthAndYear),
  (exports.getDays = getDays),
  (exports.getInitialMonths = getInitialMonths),
  (exports.getInputValue = getInputValue),
  (exports.getWeekdayLabels = getWeekdayLabels),
  (exports.isDateBlocked = isDateBlocked),
  (exports.isDateSelected = isDateSelected),
  (exports.isFirstOrLastSelectedDate = isFirstOrLastSelectedDate),
  (exports.monthLabelFormat = monthLabelFormatFn),
  (exports.parseDate = parse),
  (exports.useDatepicker = useDatepicker),
  (exports.useDay = useDay),
  (exports.useMonth = useMonth),
  (exports.weekdayLabelFormat = weekdayLabelFormatFn)
