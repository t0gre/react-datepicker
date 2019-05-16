'use strict'
Object.defineProperty(exports, '__esModule', {value: !0})
var react = require('react'),
  MILLISECONDS_IN_MINUTE = 6e4,
  getTimezoneOffsetInMilliseconds = function(e) {
    var t = new Date(e.getTime()),
      a = t.getTimezoneOffset()
    t.setSeconds(0, 0)
    var r = t.getTime() % MILLISECONDS_IN_MINUTE
    return a * MILLISECONDS_IN_MINUTE + r
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
  var r = splitDateString(e),
    n = parseYear(r.date, a),
    o = n.year,
    s = parseDate(n.restDateString, o)
  if (s) {
    var i,
      u = s.getTime(),
      d = 0
    if ((r.time && (d = parseTime(r.time)), r.timezone))
      i = parseTimezone(r.timezone) * MILLISECONDS_IN_MINUTE$1
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
    r = e.split(parseTokenDateTimeDelimeter)
  if (
    (parseTokenPlainTime.test(r[0]) ? ((a.date = null), (t = r[0])) : ((a.date = r[0]), (t = r[1])),
    t)
  ) {
    var n = parseTokenTimezone.exec(t)
    n ? ((a.time = t.replace(n[1], '')), (a.timezone = n[1])) : (a.time = t)
  }
  return a
}
function parseYear(e, t) {
  var a,
    r = parseTokensYYY[t],
    n = parseTokensYYYYY[t]
  if ((a = parseTokenYYYY.exec(e) || n.exec(e))) {
    var o = a[1]
    return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
  }
  if ((a = parseTokenYY.exec(e) || r.exec(e))) {
    var s = a[1]
    return {year: 100 * parseInt(s, 10), restDateString: e.slice(s.length)}
  }
  return {year: null}
}
function parseDate(e, t) {
  if (null === t) return null
  var a, r, n
  if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r
  if ((a = parseTokenMM.exec(e)))
    return (r = new Date(0)), (n = parseInt(a[1], 10) - 1), r.setUTCFullYear(t, n), r
  if ((a = parseTokenDDD.exec(e))) {
    r = new Date(0)
    var o = parseInt(a[1], 10)
    return r.setUTCFullYear(t, 0, o), r
  }
  if ((a = parseTokenMMDD.exec(e))) {
    ;(r = new Date(0)), (n = parseInt(a[1], 10) - 1)
    var s = parseInt(a[2], 10)
    return r.setUTCFullYear(t, n, s), r
  }
  return (a = parseTokenWww.exec(e))
    ? dayOfISOYear(t, parseInt(a[1], 10) - 1)
    : (a = parseTokenWwwD.exec(e))
    ? dayOfISOYear(t, parseInt(a[1], 10) - 1, parseInt(a[2], 10) - 1)
    : null
}
function parseTime(e) {
  var t, a, r
  if ((t = parseTokenHH.exec(e)))
    return ((a = parseFloat(t[1].replace(',', '.'))) % 24) * MILLISECONDS_IN_HOUR
  if ((t = parseTokenHHMM.exec(e)))
    return (
      (a = parseInt(t[1], 10)),
      (r = parseFloat(t[2].replace(',', '.'))),
      (a % 24) * MILLISECONDS_IN_HOUR + r * MILLISECONDS_IN_MINUTE$1
    )
  if ((t = parseTokenHHMMSS.exec(e))) {
    ;(a = parseInt(t[1], 10)), (r = parseInt(t[2], 10))
    var n = parseFloat(t[3].replace(',', '.'))
    return (a % 24) * MILLISECONDS_IN_HOUR + r * MILLISECONDS_IN_MINUTE$1 + 1e3 * n
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
  var r = new Date(0)
  r.setUTCFullYear(e, 0, 4)
  var n = 7 * t + a + 1 - (r.getUTCDay() || 7)
  return r.setUTCDate(r.getUTCDate() + n), r
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
    r = start_of_day(t),
    n = a.getTime() - a.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2,
    o = r.getTime() - r.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2
  return Math.round((n - o) / MILLISECONDS_IN_DAY)
}
var difference_in_calendar_days = differenceInCalendarDays
function getDayOfYear(e) {
  var t = parse_1(e)
  return difference_in_calendar_days(t, start_of_year(t)) + 1
}
var get_day_of_year = getDayOfYear
function startOfWeek(e, t) {
  var a = (t && Number(t.weekStartsOn)) || 0,
    r = parse_1(e),
    n = r.getDay(),
    o = (n < a ? 7 : 0) + n - a
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
}
var start_of_week = startOfWeek
function startOfISOWeek(e) {
  return start_of_week(e, {weekStartsOn: 1})
}
var start_of_iso_week = startOfISOWeek
function getISOYear(e) {
  var t = parse_1(e),
    a = t.getFullYear(),
    r = new Date(0)
  r.setFullYear(a + 1, 0, 4), r.setHours(0, 0, 0, 0)
  var n = start_of_iso_week(r),
    o = new Date(0)
  o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0)
  var s = start_of_iso_week(o)
  return t.getTime() >= n.getTime() ? a + 1 : t.getTime() >= s.getTime() ? a : a - 1
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
    localize: function(t, a, r) {
      var n
      return (
        (r = r || {}),
        (n =
          'string' == typeof e[t] ? e[t] : 1 === a ? e[t].one : e[t].other.replace('{{count}}', a)),
        r.addSuffix ? (r.comparison > 0 ? 'in ' + n : n + ' ago') : n
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
  var r = commonFormatterKeys
    .concat(t)
    .sort()
    .reverse()
  return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + r.join('|') + '|.)', 'g')
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
    r = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    n = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
        return r[e.getDay()]
      },
      dddd: function(e) {
        return n[e.getDay()]
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
  var r = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    n = (a || {}).locale,
    o = en.format.formatters,
    s = en.format.formattingTokensRegExp
  n &&
    n.format &&
    n.format.formatters &&
    ((o = n.format.formatters),
    n.format.formattingTokensRegExp && (s = n.format.formattingTokensRegExp))
  var i = parse_1(e)
  return is_valid(i) ? buildFormatFn(r, o, s)(i) : 'Invalid Date'
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
  var r,
    n,
    o = e.match(a),
    s = o.length
  for (r = 0; r < s; r++)
    (n = t[o[r]] || formatters[o[r]]), (o[r] = n || removeFormattingTokens(o[r]))
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
    r = Math.abs(e),
    n = r % 60
  return a + addLeadingZeros(Math.floor(r / 60), 2) + t + addLeadingZeros(n, 2)
}
function addLeadingZeros(e, t) {
  for (var a = Math.abs(e).toString(); a.length < t; ) a = '0' + a
  return a
}
var format_1 = format
function addDays(e, t) {
  var a = parse_1(e),
    r = Number(t)
  return a.setDate(a.getDate() + r), a
}
var add_days = addDays
function eachDay(e, t, a) {
  var r = parse_1(e),
    n = void 0 !== a ? a : 1,
    o = parse_1(t).getTime()
  if (r.getTime() > o) throw new Error('The first date cannot be after the second date')
  var s = [],
    i = r
  for (i.setHours(0, 0, 0, 0); i.getTime() <= o; ) s.push(parse_1(i)), i.setDate(i.getDate() + n)
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
    r = parse_1(e),
    n = r.getDay(),
    o = 6 + (n < a ? -7 : 0) - (n - a)
  return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
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
    r = void 0 === a ? 1 : a,
    n = t.weekDayFormat,
    o =
      void 0 === n
        ? function(e) {
            return format_1(e, 'dd')
          }
        : n,
    s = new Date()
  return each_day(add_days(start_of_week(s), r), add_days(end_of_week(s), r)).reduce(function(
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
    r = e.weekStartsOn,
    n = void 0 === r ? 1 : r,
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
    f = Array.from(Array(d >= n ? d - n : n).keys()).fill(0),
    D = each_day(u, c).map(function(e) {
      return {date: e, day: s(e)}
    })
  return f.concat(D)
}
function useMonth(e) {
  var t = e.year,
    a = e.month,
    r = e.weekStartsOn,
    n = void 0 === r ? 1 : r,
    o = e.dayFormat,
    s =
      void 0 === o
        ? function(e) {
            return format_1(e, 'DD')
          }
        : o,
    i = e.weekDayFormat,
    u =
      void 0 === i
        ? function(e) {
            return format_1(e, 'dd')
          }
        : i,
    d = e.monthLabelFormat,
    c =
      void 0 === d
        ? function(e) {
            return format_1(e, 'MMMM YYYY')
          }
        : d
  return {
    days: react.useMemo(
      function() {
        return getDays({year: t, month: a, weekStartsOn: n, dayFormat: s})
      },
      [t, a, n, s],
    ),
    weekDays: react.useMemo(
      function() {
        return getWeekDays({weekStartsOn: n, weekDayFormat: u})
      },
      [n, u],
    ),
    monthLabel: c(new Date(t, a)),
  }
}
function isBefore(e, t) {
  var a = parse_1(e),
    r = parse_1(t)
  return a.getTime() < r.getTime()
}
var is_before = isBefore
function isAfter(e, t) {
  var a = parse_1(e),
    r = parse_1(t)
  return a.getTime() > r.getTime()
}
var is_after = isAfter
function isWithinRange(e, t, a) {
  var r = parse_1(e).getTime(),
    n = parse_1(t).getTime(),
    o = parse_1(a).getTime()
  if (n > o) throw new Error('The start of the range cannot be after the end of the range')
  return r >= n && r <= o
}
var is_within_range = isWithinRange
function isSameDay(e, t) {
  var a = start_of_day(e),
    r = start_of_day(t)
  return a.getTime() === r.getTime()
}
var is_same_day = isSameDay
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
    r = t.getMonth(),
    n = new Date(0)
  return n.setFullYear(a, r + 1, 0), n.setHours(0, 0, 0, 0), n.getDate()
}
var get_days_in_month = getDaysInMonth
function addMonths(e, t) {
  var a = parse_1(e),
    r = Number(t),
    n = a.getMonth() + r,
    o = new Date(0)
  o.setFullYear(a.getFullYear(), n, 1), o.setHours(0, 0, 0, 0)
  var s = get_days_in_month(o)
  return a.setMonth(n, Math.min(s, a.getDate())), a
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
    r = e.maxBookingDate,
    n = e.isDayBlockedFn,
    o = e.startDate,
    s = e.endDate,
    i = e.minBookingDays,
    u = void 0 === i ? 1 : i,
    d = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a,
    c = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r
  return !!(
    (d && is_before(t, d)) ||
    (c && is_after(t, c)) ||
    (o && !s && u > 1 && is_within_range(t, o, add_days(o, u - 2))) ||
    (n && n(t))
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
    r = a.date,
    n = [a]
  return (
    e > 1 &&
      (n = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (r = add_months(e[e.length - 1].date, 1)), e.concat([getDateMonthAndYear(r)])
      }, n)),
    n
  )
}
function getNextActiveMonth(e, t, a) {
  var r = e[a > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (r = add_months(r, a)),
      a > 0 ? e.concat([getDateMonthAndYear(r)]) : [getDateMonthAndYear(r)].concat(e)
    )
  }, [])
}
function getInputValue(e, t, a) {
  return e && 'string' == typeof t ? format_1(e, t) : e && 'function' == typeof t ? t(e) : a
}
function canSelectRange(e) {
  var t = e.startDate,
    a = e.endDate,
    r = e.isDateBlocked,
    n = e.minBookingDays,
    o = e.exactMinBookingDays,
    s = e.minBookingDate,
    i = e.maxBookingDate
  if (t && 1 === n && !a && !r(t)) return !0
  if (
    (t && n > 1 && !a && !o) ||
    (t && n > 0 && o && s && i && !is_before(t, s) && !is_after(add_days(t, n - 1), i)) ||
    (t && n > 0 && o && !s && !i)
  )
    return each_day(t, add_days(t, n - 1)).reduce(function(e, t) {
      return e ? !r(t) : e
    }, !0)
  if (t && a && !o) {
    var u = add_days(t, n - 1)
    return (
      !is_before(a, u) &&
      each_day(t, a).reduce(function(e, t) {
        return e ? !r(t) : e
      }, !0)
    )
  }
  return !1
}
function isDateHovered(e) {
  var t = e.date,
    a = e.startDate,
    r = e.endDate,
    n = e.isDateBlocked,
    o = e.hoveredDate,
    s = e.minBookingDays,
    i = e.exactMinBookingDays
  return o && s > 1 && i && is_within_range(t, o, add_days(o, s - 1))
    ? each_day(o, add_days(o, s - 1)).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    : a && !r && o && is_within_range(t, a, add_days(a, s - 1)) && is_same_day(a, o) && s > 1
    ? each_day(a, add_days(a, s - 1)).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    : !(!a || r || !o || is_before(o, a) || !is_within_range(t, a, o)) &&
      each_day(a, o).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
}
var START_DATE = 'startDate',
  END_DATE = 'endDate'
function useDatepicker(e) {
  var t = e.startDate,
    a = e.endDate,
    r = e.focusedInput,
    n = e.minBookingDate,
    o = e.maxBookingDate,
    s = e.onDateChange,
    i = e.exactMinBookingDays,
    u = void 0 !== i && i,
    d = e.minBookingDays,
    c = void 0 === d ? 1 : d,
    f = e.numberOfMonths,
    D = void 0 === f ? 2 : f,
    _ = e.firstDayOfWeek,
    g = void 0 === _ ? 1 : _,
    l = e.isDayBlocked,
    m =
      void 0 === l
        ? function() {
            return !1
          }
        : l,
    y = react.useState(function() {
      return getInitialMonths(D, t)
    }),
    T = y[0],
    h = y[1],
    M = react.useState(null),
    p = M[0],
    v = M[1],
    k = react.useCallback(
      function(e) {
        return isDateSelected(e, t, a)
      },
      [t, a],
    ),
    S = react.useCallback(
      function(e) {
        return isFirstOrLastSelectedDate(e, t, a)
      },
      [t, a],
    ),
    I = react.useCallback(
      function(e) {
        return isDateBlocked({
          date: e,
          minBookingDate: n,
          maxBookingDate: o,
          startDate: t,
          endDate: a,
          minBookingDays: c,
          isDayBlockedFn: m,
        })
      },
      [n, o, t, a, c, m],
    ),
    Y = react.useCallback(
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
  return {
    firstDayOfWeek: g,
    activeMonths: T,
    isDateSelected: k,
    isDateHovered: Y,
    isFirstOrLastSelectedDate: S,
    isDateBlocked: I,
    numberOfMonths: D,
    onResetDates: function() {
      s({startDate: null, endDate: null, focusedInput: START_DATE})
    },
    onDayHover: function(e) {
      ;(u &&
        (c <= 1 ||
          (n && o && (!is_within_range(e, n, o) || !is_within_range(add_days(e, c - 1), n, o))))) ||
      (!u &&
        (!t ||
          a ||
          (n && o && !is_within_range(e, n, o)) ||
          (!is_same_day(e, t) && c > 1 && t && is_within_range(e, t, add_days(t, c - 2)))))
        ? v(null)
        : v(e)
    },
    onDaySelect: function(e) {
      ;(r === END_DATE || r === START_DATE) &&
      c > 0 &&
      u &&
      canSelectRange({
        minBookingDays: c,
        exactMinBookingDays: u,
        minBookingDate: n,
        maxBookingDate: o,
        isDateBlocked: m,
        startDate: e,
        endDate: null,
      })
        ? s({startDate: e, endDate: add_days(e, c - 1), focusedInput: null})
        : ((r === END_DATE && t && is_before(e, t)) || (r === START_DATE && a && is_after(e, a))) &&
          !u &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: END_DATE})
        : r === START_DATE &&
          !u &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: a, startDate: e})
        ? s({endDate: a, startDate: e, focusedInput: END_DATE})
        : r === START_DATE &&
          !u &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: END_DATE})
        : r === END_DATE &&
          t &&
          !is_before(e, t) &&
          !u &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: t, endDate: e}) &&
          s({startDate: t, endDate: e, focusedInput: null})
    },
    goToPreviousMonths: function() {
      h(getNextActiveMonth(T, D, -1))
    },
    goToNextMonths: function() {
      h(getNextActiveMonth(T, D, 1))
    },
  }
}
;(exports.END_DATE = END_DATE),
  (exports.START_DATE = START_DATE),
  (exports.getCurrentYearMonthAndDate = getCurrentYearMonthAndDate),
  (exports.getDateMonthAndYear = getDateMonthAndYear),
  (exports.getDays = getDays),
  (exports.getInitialMonths = getInitialMonths),
  (exports.getInputValue = getInputValue),
  (exports.getWeekDays = getWeekDays),
  (exports.isDateBlocked = isDateBlocked),
  (exports.isDateSelected = isDateSelected),
  (exports.isFirstOrLastSelectedDate = isFirstOrLastSelectedDate),
  (exports.useDatepicker = useDatepicker),
  (exports.useMonth = useMonth)
