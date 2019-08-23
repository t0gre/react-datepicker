# Migrating to 2.0.0

In version v2.0.0 we updated date-fns to 2.0.0. Therefore we need to make some breaking changes.

- **Date formatting** [All formats](https://date-fns.org/v2.0.0/docs/format),
  [Popular mistakes](https://date-fns.org/v2.0.0/docs/Unicode-Tokens)

  ```js
    // Before v2.0.0.
    const dayLabelFormatFn = (date) => format(date, 'DD')
    const weekdayLabelFormatFn = (date) => format(date, 'dd')
    const monthLabelFormatFn = (date) => format(date, 'MMMM YYYY')

    useMonth({
      ...,
      dayLabelFormat = dayLabelFormatFn,
      weekdayLabelFormat = weekdayLabelFormatFn,
      monthLabelFormat = monthLabelFormatFn,
    })

    // v2.0.0.
    const dayLabelFormatFn = (date) => format(date, 'dd')
    const weekdayLabelFormatFn = (date) => format(date, 'eeeeee')
    const monthLabelFormatFn = (date) => format(date, 'MMMM yyyy')

    useMonth({
      ...,
      dayLabelFormat = dayLabelFormatFn,
      weekdayLabelFormat = weekdayLabelFormatFn,
      monthLabelFormat = monthLabelFormatFn,
    })
  ```

- **Hooks: parseDate function:** The function takes an additional parameter, namely a date.
  [Docs](https://date-fns.org/v2.0.0/docs/parse)

  ```js
  // Before v2.0.0
  parseDate('02/11/2014', 'MM/dd/yyyy')

  // v2.0.0
  parseDate('02/11/2014', 'MM/dd/yyyy', new Date())
  ```
