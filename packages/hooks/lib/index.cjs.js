'use strict'
Object.defineProperty(exports, '__esModule', {value: !0})
var react = require('react'),
  MILLISECONDS_IN_MINUTE = 6e4,
  getTimezoneOffsetInMilliseconds = function(e) {
    var t = new Date(e.getTime()),
      r = t.getTimezoneOffset()
    t.setSeconds(0, 0)
    var a = t.getTime() % MILLISECONDS_IN_MINUTE
    return r * MILLISECONDS_IN_MINUTE + a
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
  var r = (t || {}).additionalDigits
  r = null == r ? DEFAULT_ADDITIONAL_DIGITS : Number(r)
  var a = splitDateString(e),
    n = parseYear(a.date, r),
    o = n.year,
    s = parseDate(n.restDateString, o)
  if (s) {
    var i,
      u = s.getTime(),
      d = 0
    if ((a.time && (d = parseTime(a.time)), a.timezone))
      i = parseTimezone(a.timezone) * MILLISECONDS_IN_MINUTE$1
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
    r = {},
    a = e.split(parseTokenDateTimeDelimeter)
  if (
    (parseTokenPlainTime.test(a[0]) ? ((r.date = null), (t = a[0])) : ((r.date = a[0]), (t = a[1])),
    t)
  ) {
    var n = parseTokenTimezone.exec(t)
    n ? ((r.time = t.replace(n[1], '')), (r.timezone = n[1])) : (r.time = t)
  }
  return r
}
function parseYear(e, t) {
  var r,
    a = parseTokensYYY[t],
    n = parseTokensYYYYY[t]
  if ((r = parseTokenYYYY.exec(e) || n.exec(e))) {
    var o = r[1]
    return {year: parseInt(o, 10), restDateString: e.slice(o.length)}
  }
  if ((r = parseTokenYY.exec(e) || a.exec(e))) {
    var s = r[1]
    return {year: 100 * parseInt(s, 10), restDateString: e.slice(s.length)}
  }
  return {year: null}
}
function parseDate(e, t) {
  if (null === t) return null
  var r, a, n
  if (0 === e.length) return (a = new Date(0)).setUTCFullYear(t), a
  if ((r = parseTokenMM.exec(e)))
    return (a = new Date(0)), (n = parseInt(r[1], 10) - 1), a.setUTCFullYear(t, n), a
  if ((r = parseTokenDDD.exec(e))) {
    a = new Date(0)
    var o = parseInt(r[1], 10)
    return a.setUTCFullYear(t, 0, o), a
  }
  if ((r = parseTokenMMDD.exec(e))) {
    ;(a = new Date(0)), (n = parseInt(r[1], 10) - 1)
    var s = parseInt(r[2], 10)
    return a.setUTCFullYear(t, n, s), a
  }
  return (r = parseTokenWww.exec(e))
    ? dayOfISOYear(t, parseInt(r[1], 10) - 1)
    : (r = parseTokenWwwD.exec(e))
    ? dayOfISOYear(t, parseInt(r[1], 10) - 1, parseInt(r[2], 10) - 1)
    : null
}
function parseTime(e) {
  var t, r, a
  if ((t = parseTokenHH.exec(e)))
    return ((r = parseFloat(t[1].replace(',', '.'))) % 24) * MILLISECONDS_IN_HOUR
  if ((t = parseTokenHHMM.exec(e)))
    return (
      (r = parseInt(t[1], 10)),
      (a = parseFloat(t[2].replace(',', '.'))),
      (r % 24) * MILLISECONDS_IN_HOUR + a * MILLISECONDS_IN_MINUTE$1
    )
  if ((t = parseTokenHHMMSS.exec(e))) {
    ;(r = parseInt(t[1], 10)), (a = parseInt(t[2], 10))
    var n = parseFloat(t[3].replace(',', '.'))
    return (r % 24) * MILLISECONDS_IN_HOUR + a * MILLISECONDS_IN_MINUTE$1 + 1e3 * n
  }
  return null
}
function parseTimezone(e) {
  var t, r
  return (t = parseTokenTimezoneZ.exec(e))
    ? 0
    : (t = parseTokenTimezoneHH.exec(e))
    ? ((r = 60 * parseInt(t[2], 10)), '+' === t[1] ? -r : r)
    : (t = parseTokenTimezoneHHMM.exec(e))
    ? ((r = 60 * parseInt(t[2], 10) + parseInt(t[3], 10)), '+' === t[1] ? -r : r)
    : 0
}
function dayOfISOYear(e, t, r) {
  ;(t = t || 0), (r = r || 0)
  var a = new Date(0)
  a.setUTCFullYear(e, 0, 4)
  var n = 7 * t + r + 1 - (a.getUTCDay() || 7)
  return a.setUTCDate(a.getUTCDate() + n), a
}
var parse_1 = parse
function startOfYear(e) {
  var t = parse_1(e),
    r = new Date(0)
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r
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
  var r = start_of_day(e),
    a = start_of_day(t),
    n = r.getTime() - r.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2,
    o = a.getTime() - a.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2
  return Math.round((n - o) / MILLISECONDS_IN_DAY)
}
var difference_in_calendar_days = differenceInCalendarDays
function getDayOfYear(e) {
  var t = parse_1(e)
  return difference_in_calendar_days(t, start_of_year(t)) + 1
}
var get_day_of_year = getDayOfYear
function startOfWeek(e, t) {
  var r = (t && Number(t.weekStartsOn)) || 0,
    a = parse_1(e),
    n = a.getDay(),
    o = (n < r ? 7 : 0) + n - r
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
}
var start_of_week = startOfWeek
function startOfISOWeek(e) {
  return start_of_week(e, {weekStartsOn: 1})
}
var start_of_iso_week = startOfISOWeek
function getISOYear(e) {
  var t = parse_1(e),
    r = t.getFullYear(),
    a = new Date(0)
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0)
  var n = start_of_iso_week(a),
    o = new Date(0)
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0)
  var s = start_of_iso_week(o)
  return t.getTime() >= n.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1
}
var get_iso_year = getISOYear
function startOfISOYear(e) {
  var t = get_iso_year(e),
    r = new Date(0)
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), start_of_iso_week(r)
}
var start_of_iso_year = startOfISOYear,
  MILLISECONDS_IN_WEEK = 6048e5
function getISOWeek(e) {
  var t = parse_1(e),
    r = start_of_iso_week(t).getTime() - start_of_iso_year(t).getTime()
  return Math.round(r / MILLISECONDS_IN_WEEK) + 1
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
    localize: function(t, r, a) {
      var n
      return (
        (a = a || {}),
        (n =
          'string' == typeof e[t] ? e[t] : 1 === r ? e[t].one : e[t].other.replace('{{count}}', r)),
        a.addSuffix ? (a.comparison > 0 ? 'in ' + n : n + ' ago') : n
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
  for (var r in e) e.hasOwnProperty(r) && t.push(r)
  var a = commonFormatterKeys
    .concat(t)
    .sort()
    .reverse()
  return new RegExp('(\\[[^\\[]*\\])|(\\\\)?(' + a.join('|') + '|.)', 'g')
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
    r = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    a = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
        return r[e.getDay()]
      },
      ddd: function(e) {
        return a[e.getDay()]
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
      u[e + 'o'] = function(t, r) {
        return ordinal(r[e](t))
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
function format(e, t, r) {
  var a = t ? String(t) : 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    n = (r || {}).locale,
    o = en.format.formatters,
    s = en.format.formattingTokensRegExp
  n &&
    n.format &&
    n.format.formatters &&
    ((o = n.format.formatters),
    n.format.formattingTokensRegExp && (s = n.format.formattingTokensRegExp))
  var i = parse_1(e)
  return is_valid(i) ? buildFormatFn(a, o, s)(i) : 'Invalid Date'
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
function buildFormatFn(e, t, r) {
  var a,
    n,
    o = e.match(r),
    s = o.length
  for (a = 0; a < s; a++)
    (n = t[o[a]] || formatters[o[a]]), (o[a] = n || removeFormattingTokens(o[a]))
  return function(e) {
    for (var t = '', r = 0; r < s; r++)
      o[r] instanceof Function ? (t += o[r](e, formatters)) : (t += o[r])
    return t
  }
}
function removeFormattingTokens(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, '') : e.replace(/\\/g, '')
}
function formatTimezone(e, t) {
  t = t || ''
  var r = e > 0 ? '-' : '+',
    a = Math.abs(e),
    n = a % 60
  return r + addLeadingZeros(Math.floor(a / 60), 2) + t + addLeadingZeros(n, 2)
}
function addLeadingZeros(e, t) {
  for (var r = Math.abs(e).toString(); r.length < t; ) r = '0' + r
  return r
}
var format_1 = format
function addDays(e, t) {
  var r = parse_1(e),
    a = Number(t)
  return r.setDate(r.getDate() + a), r
}
var add_days = addDays
function eachDay(e, t, r) {
  var a = parse_1(e),
    n = void 0 !== r ? r : 1,
    o = parse_1(t).getTime()
  if (a.getTime() > o) throw new Error('The first date cannot be after the second date')
  var s = [],
    i = a
  for (i.setHours(0, 0, 0, 0); i.getTime() <= o; ) s.push(parse_1(i)), i.setDate(i.getDate() + n)
  return s
}
var each_day = eachDay
function endOfMonth(e) {
  var t = parse_1(e),
    r = t.getMonth()
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
}
var end_of_month = endOfMonth
function endOfWeek(e, t) {
  var r = (t && Number(t.weekStartsOn)) || 0,
    a = parse_1(e),
    n = a.getDay(),
    o = 6 + (n < r ? -7 : 0) - (n - r)
  return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
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
    r = t.weekStartsOn,
    a = void 0 === r ? 1 : r,
    n = t.weekDayFormat,
    o =
      void 0 === n
        ? function(e) {
            return format_1(e, 'dd')
          }
        : n,
    s = new Date()
  return each_day(add_days(start_of_week(s), a), add_days(end_of_week(s), a)).reduce(function(
    e,
    t,
  ) {
    return e.push(o(t)), e
  },
  [])
}
function getDays(e) {
  var t = e.year,
    r = e.month,
    a = e.weekStartsOn,
    n = void 0 === a ? 1 : a,
    o = e.dayFormat,
    s =
      void 0 === o
        ? function(e) {
            return format_1(e, 'DD')
          }
        : o,
    i = new Date(t, r),
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
    r = e.month,
    a = e.weekStartsOn,
    n = void 0 === a ? 1 : a,
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
        return getDays({year: t, month: r, weekStartsOn: n, dayFormat: s})
      },
      [t, r, n, s],
    ),
    weekDays: react.useMemo(
      function() {
        return getWeekDays({weekStartsOn: n, weekDayFormat: u})
      },
      [n, u],
    ),
    monthLabel: c(new Date(t, r)),
  }
}
function isBefore(e, t) {
  var r = parse_1(e),
    a = parse_1(t)
  return r.getTime() < a.getTime()
}
var is_before = isBefore
function isAfter(e, t) {
  var r = parse_1(e),
    a = parse_1(t)
  return r.getTime() > a.getTime()
}
var is_after = isAfter
function isWithinRange(e, t, r) {
  var a = parse_1(e).getTime(),
    n = parse_1(t).getTime(),
    o = parse_1(r).getTime()
  if (n > o) throw new Error('The start of the range cannot be after the end of the range')
  return a >= n && a <= o
}
var is_within_range = isWithinRange
function isSameDay(e, t) {
  var r = start_of_day(e),
    a = start_of_day(t)
  return r.getTime() === a.getTime()
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
    r = t.getFullYear(),
    a = t.getMonth(),
    n = new Date(0)
  return n.setFullYear(r, a + 1, 0), n.setHours(0, 0, 0, 0), n.getDate()
}
var get_days_in_month = getDaysInMonth
function addMonths(e, t) {
  var r = parse_1(e),
    a = Number(t),
    n = r.getMonth() + a,
    o = new Date(0)
  o.setFullYear(r.getFullYear(), n, 1), o.setHours(0, 0, 0, 0)
  var s = get_days_in_month(o)
  return r.setMonth(n, Math.min(s, r.getDate())), r
}
var add_months = addMonths
function isDateSelected(e, t, r) {
  return !(!t || !r) && is_within_range(e, t, r)
}
function isFirstOrLastSelectedDate(e, t, r) {
  return !!((t && is_same_day(e, t)) || (r && is_same_day(e, r)))
}
function isDateBlocked(e) {
  var t = e.date,
    r = e.minBookingDate,
    a = e.maxBookingDate,
    n = e.isDayBlockedFn,
    o = e.startDate,
    s = e.endDate,
    i = e.minBookingDays,
    u = void 0 === i ? 1 : i,
    d = r ? new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0) : r,
    c = a ? new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0) : a
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
  var r = t ? getDateMonthAndYear(t) : getCurrentYearMonthAndDate(),
    a = r.date,
    n = [r]
  return (
    e > 1 &&
      (n = Array.from(Array(e - 1).keys()).reduce(function(e) {
        return (a = add_months(e[e.length - 1].date, 1)), e.concat([getDateMonthAndYear(a)])
      }, n)),
    n
  )
}
function getNextActiveMonth(e, t, r) {
  var a = e[r > 0 ? e.length - 1 : 0].date
  return Array.from(Array(t).keys()).reduce(function(e) {
    return (
      (a = add_months(a, r)),
      r > 0 ? e.concat([getDateMonthAndYear(a)]) : [getDateMonthAndYear(a)].concat(e)
    )
  }, [])
}
function getInputValue(e, t, r) {
  return e && 'string' == typeof t ? format_1(e, t) : e && 'function' == typeof t ? t(e) : r
}
function canSelectRange(e) {
  var t = e.startDate,
    r = e.endDate,
    a = e.isDateBlocked,
    n = e.minBookingDays
  if (t && 1 === n && !r && !a(t)) return !0
  if (t && n > 1 && !r)
    return each_day(t, add_days(t, n - 1)).reduce(function(e, t) {
      return e ? !a(t) : e
    }, !0)
  if (t && r) {
    var o = add_days(t, n - 1)
    return (
      !is_before(r, o) &&
      each_day(t, r).reduce(function(e, t) {
        return e ? !a(t) : e
      }, !0)
    )
  }
  return !1
}
function isDateHovered(e) {
  var t = e.date,
    r = e.startDate,
    a = e.endDate,
    n = e.isDateBlocked,
    o = e.hoveredDate,
    s = e.minBookingDays,
    i = e.exactMinBookingDays
  return o && s > 1 && i && is_within_range(t, o, add_days(o, s - 1))
    ? each_day(o, add_days(o, s - 1)).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    : r && !a && o && is_within_range(t, r, add_days(r, s - 1)) && is_same_day(r, o) && s > 1
    ? each_day(r, add_days(r, s - 1)).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
    : !(!r || a || !o || is_before(o, r) || !is_within_range(t, r, o)) &&
      each_day(r, o).reduce(function(e, t) {
        return e ? !n(t) : e
      }, !0)
}
var START_DATE = 'startDate',
  END_DATE = 'endDate'
function useDatepicker(e) {
  var t = e.startDate,
    r = e.endDate,
    a = e.focusedInput,
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
    I = react.useCallback(
      function(e) {
        return isDateBlocked({
          date: e,
          minBookingDate: n,
          maxBookingDate: o,
          startDate: t,
          endDate: r,
          minBookingDays: c,
          isDayBlockedFn: m,
        })
      },
      [n, o, t, r, c, m],
    ),
    Y = react.useCallback(
      function(e) {
        return isDateHovered({
          date: e,
          hoveredDate: p,
          startDate: t,
          endDate: r,
          minBookingDays: c,
          exactMinBookingDays: u,
          isDateBlocked: m,
        })
      },
      [p, t, r, c, u, m],
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
          r ||
          (n && o && !is_within_range(e, n, o)) ||
          (!is_same_day(e, t) && c > 1 && t && is_within_range(e, t, add_days(t, c - 2)))))
        ? v(null)
        : v(e)
    },
    onDaySelect: function(e) {
      ;(a === END_DATE || a === START_DATE) &&
      c > 0 &&
      u &&
      canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: e, endDate: null})
        ? s({startDate: e, endDate: add_days(e, c - 1), focusedInput: null})
        : ((a === END_DATE && t && is_before(e, t)) || (a === START_DATE && r && is_after(e, r))) &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, startDate: e, endDate: null})
        ? s({endDate: null, startDate: e, focusedInput: END_DATE})
        : a === START_DATE &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: r, startDate: e})
        ? s({endDate: r, startDate: e, focusedInput: END_DATE})
        : a === START_DATE &&
          canSelectRange({minBookingDays: c, isDateBlocked: m, endDate: null, startDate: e})
        ? s({endDate: null, startDate: e, focusedInput: END_DATE})
        : a === END_DATE &&
          t &&
          !is_before(e, t) &&
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
