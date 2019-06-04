'use strict'
Object.defineProperty(exports, '__esModule', {value: !0})
var react = require('react'),
  MILLISECONDS_IN_MINUTE = 6e4,
  getTimezoneOffsetInMilliseconds = function(e) {
    var t = new Date(e.getTime()),
      a = t.getTimezoneOffset()
    t.setSeconds(0, 0)
    var n = t.getTime() % MILLISECONDS_IN_MINUTE
    return a * MILLISECONDS_IN_MINUTE + n
  }
function isDate(e) {
  return e instanceof Date
}
var is_date = isDate,
  MILLISECONDS_IN_HOUR = 36e5,
  MILLISECONDS_IN_MINUTE$1 = 6e4,
  DEFAULT_ADDITIONAL_DIGITS = 2,
  parseTokenDateTimeDelimeter = /[T ]/,
  parseTokenPlainTime = /:/,
  parseTokenYY = /^(\d{2})$/,
  parseTokensYYY = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  parseTokenYYYY = /^(\d{4})/,
  parseTokensYYYYY = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  parseTokenMM = /^-(\d{2})$/,
  parseTokenDDD = /^-?(\d{3})$/,
  parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/,
  parseTokenWww = /^-?W(\d{2})$/,
  parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/,
  parseTokenHH = /^(\d{2}([.,]\d*)?)$/,
  parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  parseTokenTimezone = /([Z+-].*)$/,
  parseTokenTimezoneZ = /^(Z)$/,
  parseTokenTimezoneHH = /^([+-])(\d{2})$/,
  parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
function parse(e, t) {
  if (is_date(e)) return new Date(e.getTime())
  if ('string' != typeof e) return new Date(e)
  var a = (t || {}).additionalDigits
  a = null == a ? DEFAULT_ADDITIONAL_DIGITS : Number(a)
  var n = splitDateString(e),
    r = parseYear(n.date, a),
    o = r.year,
    s = parseDate(r.restDateString, o)
  if (s) {
    var i,
      u = s.getTime(),
      d = 0
    if ((n.time && (d = parseTime(n.time)), n.timezone))
      i = parseTimezone(n.timezone) * MILLISECONDS_IN_MINUTE$1
    else {
      var c = u + d,
        f = new Date(c)
      i = getTimezoneOffsetInMilliseconds(f)
      var D = new Date(c)
      D.setDate(f.getDate() + 1)
      var _ = getTimezoneOffsetInMilliseconds(D) - getTimezoneOffsetInMilliseconds(f)
      _ > 0 && (i += _)
    }
    return new Date(u + d + i)
  }
  return new Date(e)
}
function splitDateString(e) {
  var t,
    a = {},
    n = e.split(parseTokenDateTimeDelimeter)
  if (
    (parseTokenPlainTime.test(n[0]) ? ((a.date = null), (t = n[0])) : ((a.date = n[0]), (t = n[1])),
    t)
  ) {
    var r = parseTokenTimezone.exec(t)
    r ? ((a.time = t.replace(r[1], '')), (a.timezone = r[1])) : (a.time = t)
  }
  return a
}
function parseYear(e, t) {
  var a,
    n = parseTokensYYY[t],
    r = parseTokensYYYYY[t]
  if ((a = parseTokenYYYY.exec(e) || r.exec(e))) {
    var o = a[1]
    return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
  }
  if ((a = parseTokenYY.exec(e) || n.exec(e))) {
    var s = a[1]
    return {year: 100 * parseInt(s, 10), restDateString: e.slice(s.length)}
  }
  return {year: null}
}
function parseDate(e, t) {
  if (null === t) return null
  var a, n, r
  if (0 === e.length) return (n = new Date(0)).setUTCFullYear(t), n
  if ((a = parseTokenMM.exec(e)))
    return (n = new Date(0)), (r = parseInt(a[1], 10) - 1), n.setUTCFullYear(t, r), n
  if ((a = parseTokenDDD.exec(e))) {
    n = new Date(0)
    var o = parseInt(a[1], 10)
    return n.setUTCFullYear(t, 0, o), n
  }
  if ((a = parseTokenMMDD.exec(e))) {
    ;(n = new Date(0)), (r = parseInt(a[1], 10) - 1)
    var s = parseInt(a[2], 10)
    return n.setUTCFullYear(t, r, s), n
  }
  return (a = parseTokenWww.exec(e))
    ? dayOfISOYear(t, parseInt(a[1], 10) - 1)
    : (a = parseTokenWwwD.exec(e))
    ? dayOfISOYear(t, parseInt(a[1], 10) - 1, parseInt(a[2], 10) - 1)
    : null
}
function parseTime(e) {
  var t, a, n
  if ((t = parseTokenHH.exec(e)))
    return ((a = parseFloat(t[1].replace(',', '.'))) % 24) * MILLISECONDS_IN_HOUR
  if ((t = parseTokenHHMM.exec(e)))
    return (
      (a = parseInt(t[1], 10)),
      (n = parseFloat(t[2].replace(',', '.'))),
      (a % 24) * MILLISECONDS_IN_HOUR + n * MILLISECONDS_IN_MINUTE$1
    )
  if ((t = parseTokenHHMMSS.exec(e))) {
    ;(a = parseInt(t[1], 10)), (n = parseInt(t[2], 10))
    var r = parseFloat(t[3].replace(',', '.'))
    return (a % 24) * MILLISECONDS_IN_HOUR + n * MILLISECONDS_IN_MINUTE$1 + 1e3 * r
  }
  return null
}
function parseTimezone(e) {
  var t, a
  return (t = parseTokenTimezoneZ.exec(e))
    ? 0
    : (t = parseTokenTimezoneHH.exec(e))
    ? ((a = 60 * parseInt(t[2], 10)), '+' === t[1] ? -a : a)
    : (t = parseTokenTimezoneHHMM.exec(e))
    ? ((a = 60 * parseInt(t[2], 10) + parseInt(t[3], 10)), '+' === t[1] ? -a : a)
    : 0
}
function dayOfISOYear(e, t, a) {
  ;(t = t || 0), (a = a || 0)
  var n = new Date(0)
  n.setUTCFullYear(e, 0, 4)
  var r = 7 * t + a + 1 - (n.getUTCDay() || 7)
  return n.setUTCDate(n.getUTCDate() + r), n
}
var parse_1 = parse
function startOfYear(e) {
  var t = parse_1(e),
    a = new Date(0)
  return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a
}
var start_of_year = startOfYear
function startOfDay(e) {
  var t = parse_1(e)
  return t.setHours(0, 0, 0, 0), t
}
var start_of_day = startOfDay,
  MILLISECONDS_IN_MINUTE$2 = 6e4,
  MILLISECONDS_IN_DAY = 864e5
function differenceInCalendarDays(e, t) {
  var a = start_of_day(e),
    n = start_of_day(t),
    r = a.getTime() - a.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2,
    o = n.getTime() - n.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2
  return Math.round((r - o) / MILLISECONDS_IN_DAY)
}
var difference_in_calendar_days = differenceInCalendarDays
function getDayOfYear(e) {
  var t = parse_1(e)
  return difference_in_calendar_days(t, start_of_year(t)) + 1
}
var get_day_of_year = getDayOfYear
function startOfWeek(e, t) {
  var a = (t && Number(t.weekStartsOn)) || 0,
    n = parse_1(e),
    r = n.getDay(),
    o = (r < a ? 7 : 0) + r - a
  return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
}
var start_of_week = startOfWeek
function startOfISOWeek(e) {
  return start_of_week(e, {weekStartsOn: 1})
}
var start_of_iso_week = startOfISOWeek
function getISOYear(e) {
  var t = parse_1(e),
    a = t.getFullYear(),
    n = new Date(0)
  n.setFullYear(a + 1, 0, 4), n.setHours(0, 0, 0, 0)
  var r = start_of_iso_week(n),
    o = new Date(0)
  o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0)
  var s = start_of_iso_week(o)
  return t.getTime() >= r.getTime() ? a + 1 : t.getTime() >= s.getTime() ? a : a - 1
}
var get_iso_year = getISOYear
function startOfISOYear(e) {
  var t = get_iso_year(e),
    a = new Date(0)
  return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), start_of_iso_week(a)
}
var start_of_iso_year = startOfISOYear,
  MILLISECONDS_IN_WEEK = 6048e5
function getISOWeek(e) {
  var t = parse_1(e),
    a = start_of_iso_week(t).getTime() - start_of_iso_year(t).getTime()
  return Math.round(a / MILLISECONDS_IN_WEEK) + 1
}
var get_iso_week = getISOWeek
function isValid(e) {
  if (is_date(e)) return !isNaN(e)
  throw new TypeError(toString.call(e) + ' is not an instance of Date')
}
var is_valid = isValid
function buildDistanceInWordsLocale() {
  var e = {
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
  return {
    localize: function(t, a, n) {
      var r
      return (
        (n = n || {}),
        (r =
          'string' == typeof e[t] ? e[t] : 1 === a ? e[t].one : e[t].other.replace('{{count}}', a)),
        n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
      )
    },
  }
}
var build_distance_in_words_locale = buildDistanceInWordsLocale,
  commonFormatterKeys = [
    'M',
    'MM',
    'Q',
    'D',
    'DD',
    'DDD',
    'DDDD',
    'd',
    'E',
    'W',
    'WW',
    'YY',
    'YYYY',
    'GG',
    'GGGG',
    'H',
    'HH',
    'h',
    'hh',
    'm',
    'mm',
    's',
    'ss',
    'S',
    'SS',
    'SSS',
    'Z',
    'ZZ',
    'X',
    'x',
  ]
function buildFormattingTokensRegExp(e) {
  var t = []
  for (var a in e) e.hasOwnProperty(a) && t.push(a)
  var n = commonFormatterKeys
    .concat(t)
    .sort()
    .reverse()
  return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + n.join('|') + '|.)', 'g')
}
var build_formatting_tokens_reg_exp = buildFormattingTokensRegExp
function buildFormatLocale() {
  var e = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    t = [
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
    a = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    n = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    r = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    o = ['AM', 'PM'],
    s = ['am', 'pm'],
    i = ['a.m.', 'p.m.'],
    u = {
      MMM: function(t) {
        return e[t.getMonth()]
      },
      MMMM: function(e) {
        return t[e.getMonth()]
      },
      dd: function(e) {
        return a[e.getDay()]
      },
      ddd: function(e) {
        return n[e.getDay()]
      },
      dddd: function(e) {
        return r[e.getDay()]
      },
      A: function(e) {
        return e.getHours() / 12 >= 1 ? o[1] : o[0]
      },
      a: function(e) {
        return e.getHours() / 12 >= 1 ? s[1] : s[0]
      },
      aa: function(e) {
        return e.getHours() / 12 >= 1 ? i[1] : i[0]
      },
    }
  return (
    ['M', 'D', 'DDD', 'd', 'Q', 'W'].forEach(function(e) {
      u[e + 'o'] = function(t, a) {
        return ordinal(a[e](t))
      }
    }),
    {formatters: u, formattingTokensRegExp: build_formatting_tokens_reg_exp(u)}
  )
}
function ordinal(e) {
  var t = e % 100
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + 'st'
      case 2:
        return e + 'nd'
      case 3:
        return e + 'rd'
    }
  return e + 'th'
}
var build_format_locale = buildFormatLocale,
  en = {distanceInWords: build_distance_in_words_locale(), format: build_format_locale()}
function format(e, t, a) {
  var n = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    r = (a || {}).locale,
    o = en.format.formatters,
    s = en.format.formattingTokensRegExp
  r &&
    r.format &&
    r.format.formatters &&
    ((o = r.format.formatters),
    r.format.formattingTokensRegExp && (s = r.format.formattingTokensRegExp))
  var i = parse_1(e)
  return is_valid(i) ? buildFormatFn(n, o, s)(i) : 'Invalid Date'
}
var formatters = {
  M: function(e) {
    return e.getMonth() + 1
  },
  MM: function(e) {
    return addLeadingZeros(e.getMonth() + 1, 2)
  },
  Q: function(e) {
    return Math.ceil((e.getMonth() + 1) / 3)
  },
  D: function(e) {
    return e.getDate()
  },
  DD: function(e) {
    return addLeadingZeros(e.getDate(), 2)
  },
  DDD: function(e) {
    return get_day_of_year(e)
  },
  DDDD: function(e) {
    return addLeadingZeros(get_day_of_year(e), 3)
  },
  d: function(e) {
    return e.getDay()
  },
  E: function(e) {
    return e.getDay() || 7
  },
  W: function(e) {
    return get_iso_week(e)
  },
  WW: function(e) {
    return addLeadingZeros(get_iso_week(e), 2)
  },
  YY: function(e) {
    return addLeadingZeros(e.getFullYear(), 4).substr(2)
  },
  YYYY: function(e) {
    return addLeadingZeros(e.getFullYear(), 4)
  },
  GG: function(e) {
    return String(get_iso_year(e)).substr(2)
  },
  GGGG: function(e) {
    return get_iso_year(e)
  },
  H: function(e) {
    return e.getHours()
  },
  HH: function(e) {
    return addLeadingZeros(e.getHours(), 2)
  },
  h: function(e) {
    var t = e.getHours()
    return 0 === t ? 12 : t > 12 ? t % 12 : t
  },
  hh: function(e) {
    return addLeadingZeros(formatters.h(e), 2)
  },
  m: function(e) {
    return e.getMinutes()
  },
  mm: function(e) {
    return addLeadingZeros(e.getMinutes(), 2)
  },
  s: function(e) {
    return e.getSeconds()
  },
  ss: function(e) {
    return addLeadingZeros(e.getSeconds(), 2)
  },
  S: function(e) {
    return Math.floor(e.getMilliseconds() / 100)
  },
  SS: function(e) {
    return addLeadingZeros(Math.floor(e.getMilliseconds() / 10), 2)
  },
  SSS: function(e) {
    return addLeadingZeros(e.getMilliseconds(), 3)
  },
  Z: function(e) {
    return formatTimezone(e.getTimezoneOffset(), ':')
  },
  ZZ: function(e) {
    return formatTimezone(e.getTimezoneOffset())
  },
  X: function(e) {
    return Math.floor(e.getTime() / 1e3)
  },
  x: function(e) {
    return e.getTime()
  },
}
function buildFormatFn(e, t, a) {
  var n,
    r,
    o = e.match(a),
    s = o.length
  for (n = 0; n < s; n++)
    (r = t[o[n]] || formatters[o[n]]), (o[n] = r || removeFormattingTokens(o[n]))
  return function(e) {
    for (var t = '', a = 0; a < s; a++)
      o[a] instanceof Function ? (t += o[a](e, formatters)) : (t += o[a])
    return t
  }
}
function removeFormattingTokens(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, '') : e.replace(/\\/g, '')
}
function formatTimezone(e, t) {
  t = t || ''
  var a = e > 0 ? '-' : '+',
    n = Math.abs(e),
    r = n % 60
  return a + addLeadingZeros(Math.floor(n / 60), 2) + t + addLeadingZeros(r, 2)
}
function addLeadingZeros(e, t) {
  for (var a = Math.abs(e).toString(); a.length < t; ) a = '0' + a
  return a
}
var format_1 = format
function addDays(e, t) {
  var a = parse_1(e),
    n = Number(t)
  return a.setDate(a.getDate() + n), a
}
var add_days = addDays
function eachDay(e, t, a) {
  var n = parse_1(e),
    r = void 0 !== a ? a : 1,
    o = parse_1(t).getTime()
  if (n.getTime() > o) throw new Error('The first date cannot be after the second date')
  var s = [],
    i = n
  for (i.setHours(0, 0, 0, 0); i.getTime() <= o; ) s.push(parse_1(i)), i.setDate(i.getDate() + r)
  return s
}
var each_day = eachDay
function endOfMonth(e) {
  var t = parse_1(e),
    a = t.getMonth()
  return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t
}
var end_of_month = endOfMonth
function endOfWeek(e, t) {
  var a = (t && Number(t.weekStartsOn)) || 0,
    n = parse_1(e),
    r = n.getDay(),
    o = 6 + (r < a ? -7 : 0) - (r - a)
  return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
}
var end_of_week = endOfWeek
function getDay(e) {
  return parse_1(e).getDay()
}
var get_day = getDay
function startOfMonth(e) {
  var t = parse_1(e)
  return t.setDate(1), t.setHours(0, 0, 0, 0), t
}
var start_of_month = startOfMonth
function getWeekDays(e) {
  var t = void 0 === e ? {} : e,
    a = t.weekStartsOn,
    n = void 0 === a ? 1 : a,
    r = t.weekDayFormat,
    o =
      void 0 === r
        ? function(e) {
            return format_1(e, 'dd')
          }
        : r,
    s = new Date()
  return each_day(add_days(start_of_week(s), n), add_days(end_of_week(s), n)).reduce(function(
    e,
    t,
  ) {
    return e.push(o(t)), e
  },
  [])
}
function getDays(e) {
  var t = e.year,
    a = e.month,
    n = e.weekStartsOn,
    r = void 0 === n ? 1 : n,
    o = e.dayFormat,
    s =
      void 0 === o
        ? function(e) {
            return format_1(e, 'DD')
          }
        : o,
    i = new Date(t, a),
    u = start_of_month(i),
    d = get_day(u),
    c = end_of_month(i),
    f = Array.from(Array(d >= r ? d - r : r).keys()).fill(0),
    D = each_day(u, c).map(function(e) {
      return {date: e, day: s(e)}
    })
  return f.concat(D)
}
var dayFormatFn = function(e) {
    return format_1(e, 'DD')
  },
  weekDayFormatFn = function(e) {
    return format_1(e, 'dd')
  },
  monthLabelFormatFn = function(e) {
    return format_1(e, 'MMMM YYYY')
  }
function useMonth(e) {
  var t = e.year,
    a = e.month,
    n = e.weekStartsOn,
    r = void 0 === n ? 1 : n,
    o = e.dayFormat,
    s = void 0 === o ? dayFormatFn : o,
    i = e.weekDayFormat,
    u = void 0 === i ? weekDayFormatFn : i,
    d = e.monthLabelFormat,
    c = void 0 === d ? monthLabelFormatFn : d
  return {
    days: react.useMemo(
      function() {
        return getDays({year: t, month: a, weekStartsOn: r, dayFormat: s})
      },
      [t, a, r, s],
    ),
    weekDays: react.useMemo(
      function() {
        return getWeekDays({weekStartsOn: r, weekDayFormat: u})
      },
      [r, u],
    ),
    monthLabel: c(new Date(t, a)),
  }
}
function isBefore(e, t) {
  var a = parse_1(e),
    n = parse_1(t)
  return a.getTime() < n.getTime()
}
var is_before = isBefore
function isAfter(e, t) {
  var a = parse_1(e),
    n = parse_1(t)
  return a.getTime() > n.getTime()
}
var is_after = isAfter
function isWithinRange(e, t, a) {
  var n = parse_1(e).getTime(),
    r = parse_1(t).getTime(),
    o = parse_1(a).getTime()
  if (r > o) throw new Error('The start of the range cannot be after the end of the range')
  return n >= r && n <= o
}
var is_within_range = isWithinRange
function isSameDay(e, t) {
  var a = start_of_day(e),
    n = start_of_day(t)
  return a.getTime() === n.getTime()
}
var is_same_day = isSameDay
function isSameMonth(e, t) {
  var a = parse_1(e),
    n = parse_1(t)
  return a.getFullYear() === n.getFullYear() && a.getMonth() === n.getMonth()
}
var is_same_month = isSameMonth
function getYear(e) {
  return parse_1(e).getFullYear()
}
var get_year = getYear
function getMonth(e) {
  return parse_1(e).getMonth()
}
var get_month = getMonth
function startOfToday() {
  return start_of_day(new Date())
}
var start_of_today = startOfToday
function getDaysInMonth(e) {
  var t = parse_1(e),
    a = t.getFullYear(),
    n = t.getMonth(),
    r = new Date(0)
  return r.setFullYear(a, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
}
var get_days_in_month = getDaysInMonth
function addMonths(e, t) {
  var a = parse_1(e),
    n = Number(t),
    r = a.getMonth() + n,
    o = new Date(0)
  o.setFullYear(a.getFullYear(), r, 1), o.setHours(0, 0, 0, 0)
  var s = get_days_in_month(o)
  return a.setMonth(r, Math.min(s, a.getDate())), a
}
var add_months = addMonths
function isDateSelected(e, t, a) {
  return !(!t || !a) && is_within_range(e, t, a)
}
function isFirstOrLastSelectedDate(e, t, a) {
  return !!((t && is_same_day(e, t)) || (a && is_same_day(e, a)))
}
function isDateBlocked(e) {
  var t = e.date,
    a = e.minBookingDate,
    n = e.maxBookingDate,
    r = e.isDateBlockedFn,
    o = e.startDate,
    s = e.endDate,
    i = e.minBookingDays,
    u = void 0 === i ? 1 : i,
    d = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a,
    c = n ? new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0) : n
  return !!(
    (d && is_before(t, d)) ||
    (c && is_after(t, c)) ||
    (o && !s && u > 1 && is_within_range(t, o, add_days(o, u - 2))) ||
    (r && r(t))
  )
}
function getDateMonthAndYear(e) {
  var t = start_of_month(e)
  return {year: get_year(t), month: get_month(t), date: t}
}
function getCurrentYearMonthAndDate() {
  return getDateMonthAndYear(start_of_today())
}
function getInitialMonths(e, t) {
  var a = t ? getDateMonthAndYear(t) : getCurrentYearMonthAndDate(),
    n = a.date,
    r = [a]
  return (
    e > 1 &&
      (r = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (n = add_months(e[e.length - 1].date, 1)), e.concat([getDateMonthAndYear(n)])
      }, r)),
    r
  )
}
function getNextActiveMonth(e, t, a) {
  var n = e[a > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (n = add_months(n, a)),
      a > 0 ? e.concat([getDateMonthAndYear(n)]) : [getDateMonthAndYear(n)].concat(e)
    )
  }, [])
}
function getInputValue(e, t, a) {
  return e && 'string' == typeof t ? format_1(e, t) : e && 'function' == typeof t ? t(e) : a
}
function canSelectRange(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.isDateBlocked,
    r = e.minBookingDays,
    o = e.exactMinBookingDays,
    s = e.minBookingDate,
    i = e.maxBookingDate,
    u = !s || !is_before(t, add_days(s, -1)),
    d = !i || !is_after(add_days(t, r - 1), i)
  if (t && 1 === r && !a && !n(t)) return !0
  if ((t && r > 1 && !a && !o) || (t && r > 0 && o && u && d) || (t && r > 0 && o && !s && !i))
    return each_day(t, add_days(t, r - 1)).reduce(function(e, t) {
      return e ? !n(t) : e
    }, !0)
  if (t && a && !o) {
    var c = add_days(t, r - 1)
    return (
      !is_before(a, c) &&
      each_day(t, a).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    )
  }
  return !1
}
function isDateHovered(e) {
  var t = e.date,
    a = e.startDate,
    n = e.endDate,
    r = e.isDateBlocked,
    o = e.hoveredDate,
    s = e.minBookingDays,
    i = e.exactMinBookingDays
  return o && s > 1 && i && is_within_range(t, o, add_days(o, s - 1))
    ? each_day(o, add_days(o, s - 1)).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    : a && !n && o && is_within_range(t, a, add_days(a, s - 1)) && is_same_day(a, o) && s > 1
    ? each_day(a, add_days(a, s - 1)).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    : !(!a || n || !o || is_before(o, a) || !is_within_range(t, a, o)) &&
      each_day(a, o).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
}
var START_DATE = 'startDate',
  END_DATE = 'endDate'
function useDatepicker(e) {
  var t = e.startDate,
    a = e.endDate,
    n = e.focusedInput,
    r = e.minBookingDate,
    o = e.maxBookingDate,
    s = e.onDatesChange,
    i = e.exactMinBookingDays,
    u = void 0 !== i && i,
    d = e.minBookingDays,
    c = void 0 === d ? 1 : d,
    f = e.numberOfMonths,
    D = void 0 === f ? 2 : f,
    _ = e.firstDayOfWeek,
    l = void 0 === _ ? 1 : _,
    g = e.isDateBlocked,
    m =
      void 0 === g
        ? function() {
            return !1
          }
        : g,
    y = react.useState(function() {
      return getInitialMonths(D, t)
    }),
    h = y[0],
    T = y[1],
    M = react.useState(null),
    p = M[0],
    k = M[1],
    v = react.useState(t),
    S = v[0],
    I = v[1],
    Y = react.useCallback(
      function(e) {
        I(e), (!S || (S && !is_same_month(e, S))) && T(getInitialMonths(D, e))
      },
      [I, T, D, S],
    ),
    w = react.useCallback(
      function(e) {
        return isDateSelected(e, t, a)
      },
      [t, a],
    ),
    O = react.useCallback(
      function(e) {
        return isFirstOrLastSelectedDate(e, t, a)
      },
      [t, a],
    ),
    F = react.useCallback(
      function(e) {
        return isDateBlocked({
          date: e,
          minBookingDate: r,
          maxBookingDate: o,
          startDate: t,
          endDate: a,
          minBookingDays: c,
          isDateBlockedFn: m,
        })
      },
      [r, o, t, a, c, m],
    ),
    E = react.useCallback(
      function(e) {
        return !!S && is_same_day(e, S)
      },
      [S],
    ),
    L = react.useCallback(
      function(e) {
        return isDateHovered({
          date: e,
          hoveredDate: p,
          startDate: t,
          endDate: a,
          minBookingDays: c,
          exactMinBookingDays: u,
          isDateBlocked: m,
        })
      },
      [p, t, a, c, u, m],
    )
  function A(e) {
    ;('ArrowRight' !== e.key &&
      'ArrowLeft' !== e.key &&
      'ArrowDown' !== e.key &&
      'ArrowUp' !== e.key) ||
      S ||
      (Y(new Date()), T(getInitialMonths(D, new Date())))
  }
  return (
    react.useEffect(function() {
      return (
        'undefined' != typeof window && window.addEventListener('keydown', A),
        function() {
          window.removeEventListener('keydown', A)
        }
      )
    }),
    {
      firstDayOfWeek: l,
      activeMonths: h,
      isDateSelected: w,
      isDateHovered: L,
      isFirstOrLastSelectedDate: O,
      isDateBlocked: F,
      numberOfMonths: D,
      isDateFocused: E,
      focusedDate: S,
      onResetDates: function() {
        s({startDate: null, endDate: null, focusedInput: START_DATE})
      },
      onDayHover: function(e) {
        var n = !F(e) || (t && is_same_day(e, t)),
          s = !r || !is_before(e, add_days(r, -1)),
          i = !o || !is_after(e, o),
          d = add_days(e, c - 1),
          f = !r || !is_before(d, r),
          D = !o || !is_after(d, o),
          _ = u && c > 1 && s && i && f && D,
          l = t && !a && !u && s && i,
          g = !(c > 1 && t) || is_within_range(e, t, add_days(t, c - 2)),
          m = t && is_same_day(e, t) && g
        n && (_ || l || m) ? k(e) : null !== p && k(null)
      },
      onDaySelect: function(e) {
        ;(n === END_DATE || n === START_DATE) &&
        c > 0 &&
        u &&
        canSelectRange({
          minBookingDays: c,
          exactMinBookingDays: u,
          minBookingDate: r,
          maxBookingDate: o,
          isDateBlocked: m,
          startDate: e,
          endDate: null,
        })
          ? s({startDate: e, endDate: add_days(e, c - 1), focusedInput: null})
          : ((n === END_DATE && t && is_before(e, t)) ||
              (n === START_DATE && a && is_after(e, a))) &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: e, endDate: null})
          ? s({endDate: null, startDate: e, focusedInput: END_DATE})
          : n === START_DATE &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: a, startDate: e})
          ? s({endDate: a, startDate: e, focusedInput: END_DATE})
          : n === START_DATE &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: null, startDate: e})
          ? s({endDate: null, startDate: e, focusedInput: END_DATE})
          : n === END_DATE &&
            t &&
            !is_before(e, t) &&
            !u &&
            canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: t, endDate: e}) &&
            s({startDate: t, endDate: e, focusedInput: null}),
          (!S || (S && !is_same_month(e, S))) && T(getInitialMonths(D, e))
      },
      onDayFocus: Y,
      goToPreviousMonths: function() {
        T(getNextActiveMonth(h, D, -1)), I(null)
      },
      goToNextMonths: function() {
        T(getNextActiveMonth(h, D, 1)), I(null)
      },
    }
  )
}
function useDay(e) {
  var t = e.date,
    a = e.focusedDate,
    n = e.isDateSelected,
    r = e.isDateFocused,
    o = e.isFirstOrLastSelectedDate,
    s = e.isDateHovered,
    i = e.isDateBlocked,
    u = e.onDaySelect,
    d = e.onDayFocus,
    c = e.onDayHover,
    f = e.dayRef,
    D = react.useCallback(
      function() {
        return u(t)
      },
      [t, u],
    ),
    _ = react.useCallback(
      function() {
        return c(t)
      },
      [t, c],
    )
  react.useEffect(
    function() {
      f && f.current && r(t) && f.current.focus()
    },
    [f, t, r],
  )
  var l = i(t) && !s(t)
  return {
    role: 'button',
    tabIndex: null === a || r(t) ? 0 : -1,
    isActive: n(t),
    isStartOrEnd: o(t),
    isWithinHoverRange: s(t),
    disabledDate: l,
    onKeyDown: function(e) {
      'ArrowRight' === e.key
        ? d(add_days(t, 1))
        : 'ArrowLeft' === e.key
        ? d(add_days(t, -1))
        : 'ArrowUp' === e.key
        ? d(add_days(t, -7))
        : 'ArrowDown' === e.key && d(add_days(t, 7))
    },
    onClick: l ? function() {} : D,
    onMouseEnter: _,
  }
}
;(exports.END_DATE = END_DATE),
  (exports.START_DATE = START_DATE),
  (exports.dayFormat = dayFormatFn),
  (exports.getCurrentYearMonthAndDate = getCurrentYearMonthAndDate),
  (exports.getDateMonthAndYear = getDateMonthAndYear),
  (exports.getDays = getDays),
  (exports.getInitialMonths = getInitialMonths),
  (exports.getInputValue = getInputValue),
  (exports.getWeekDays = getWeekDays),
  (exports.isDateBlocked = isDateBlocked),
  (exports.isDateSelected = isDateSelected),
  (exports.isFirstOrLastSelectedDate = isFirstOrLastSelectedDate),
  (exports.monthLabelFormat = monthLabelFormatFn),
  (exports.useDatepicker = useDatepicker),
  (exports.useDay = useDay),
  (exports.useMonth = useMonth),
  (exports.weekDayFormat = weekDayFormatFn)
