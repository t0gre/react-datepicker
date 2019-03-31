import {renderHook, cleanup} from 'react-hooks-testing-library'
import {useMonth, getDays, getWeekDays} from '.'

afterEach(cleanup)

describe('getWeekDays', () => {
  test('should return week days start with sunday', () => {
    expect(getWeekDays({weekStartsOn: 0})).toEqual(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'])
  })
  test('should return week days start with monday', () => {
    expect(getWeekDays()).toEqual(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'])
  })
  test('should return week days start with saturday', () => {
    expect(getWeekDays({weekStartsOn: 6})).toEqual(['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'])
  })
})

describe('getDays', () => {
  test('should return days for april 2019', () => {
    const {result} = renderHook(() => getDays({year: 2019, month: 3}))
    expect(result.current.length).toBe(30)
    expect(typeof result.current[0]).toBe('object')
    // @ts-ignore
    expect(result.current[0].day).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].day).toBe('30')
  })

  test('should return days for april 2019 start with sunday', () => {
    const {result} = renderHook(() => getDays({year: 2019, month: 3, weekStartsOn: 0}))
    expect(result.current.length).toBe(31)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[1]).toBe('object')
    // @ts-ignore
    expect(result.current[1].day).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].day).toBe('30')
  })

  test('should return days for march 2019', () => {
    const {result} = renderHook(() => getDays({year: 2019, month: 2}))
    expect(result.current.length).toBe(35)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[3]).toBe('number')
    expect(typeof result.current[4]).toBe('object')
    // @ts-ignore
    expect(result.current[4].day).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].day).toBe('31')
  })

  test('should return days for march 2019 start with sunday', () => {
    const {result} = renderHook(() => getDays({year: 2019, month: 2, weekStartsOn: 0}))
    expect(result.current.length).toBe(36)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[4]).toBe('number')
    expect(typeof result.current[5]).toBe('object')
    // @ts-ignore
    expect(result.current[5].day).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].day).toBe('31')
  })

  test('should return days for march 2019 start with saturday', () => {
    const {result} = renderHook(() => getDays({year: 2019, month: 2, weekStartsOn: 6}))
    expect(result.current.length).toBe(37)
    expect(typeof result.current[0]).toBe('number')
    expect(typeof result.current[5]).toBe('number')
    expect(typeof result.current[6]).toBe('object')
    // @ts-ignore
    expect(result.current[6].day).toBe('01')
    // @ts-ignore
    expect(result.current[result.current.length - 1].day).toBe('31')
  })
})

describe('useMonth', () => {
  test('should return days for april 2019', () => {
    const {result} = renderHook(() => useMonth({year: 2019, month: 3}))

    // Days
    expect(result.current.days.length).toBe(30)
    expect(typeof result.current.days[0]).toBe('object')
    // @ts-ignore
    expect(result.current.days[0].day).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].day).toBe('30')

    // Week days
    expect(result.current.weekDays.length).toBe(7)
    expect(result.current.weekDays[0]).toBe('Mo')
    expect(result.current.weekDays[6]).toBe('Su')

    // Month Label
    expect(result.current.monthLabel).toBe('April 2019')
  })

  test('should return days for april 2019 start with sunday', () => {
    const {result} = renderHook(() => useMonth({year: 2019, month: 3, weekStartsOn: 0}))

    // Days
    expect(result.current.days.length).toBe(31)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[1]).toBe('object')
    // @ts-ignore
    expect(result.current.days[1].day).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].day).toBe('30')

    // Week days
    expect(result.current.weekDays.length).toBe(7)
    expect(result.current.weekDays[0]).toBe('Su')
    expect(result.current.weekDays[6]).toBe('Sa')
  })

  test('should return days for march 2019', () => {
    const {result} = renderHook(() => useMonth({year: 2019, month: 2}))

    // Days
    expect(result.current.days.length).toBe(35)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[3]).toBe('number')
    expect(typeof result.current.days[4]).toBe('object')
    // @ts-ignore
    expect(result.current.days[4].day).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].day).toBe('31')

    // Week days
    expect(result.current.weekDays.length).toBe(7)
    expect(result.current.weekDays[0]).toBe('Mo')
    expect(result.current.weekDays[6]).toBe('Su')

    // Month Label
    expect(result.current.monthLabel).toBe('March 2019')
  })

  test('should return days for march 2019 start with sunday', () => {
    const {result} = renderHook(() => useMonth({year: 2019, month: 2, weekStartsOn: 0}))

    // Days
    expect(result.current.days.length).toBe(36)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[4]).toBe('number')
    expect(typeof result.current.days[5]).toBe('object')
    // @ts-ignore
    expect(result.current.days[5].day).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].day).toBe('31')

    // Week days
    expect(result.current.weekDays.length).toBe(7)
    expect(result.current.weekDays[0]).toBe('Su')
    expect(result.current.weekDays[6]).toBe('Sa')
  })

  test('should return days for march 2019 start with saturday', () => {
    const {result} = renderHook(() => useMonth({year: 2019, month: 2, weekStartsOn: 6}))

    // Days
    expect(result.current.days.length).toBe(37)
    expect(typeof result.current.days[0]).toBe('number')
    expect(typeof result.current.days[5]).toBe('number')
    expect(typeof result.current.days[6]).toBe('object')
    // @ts-ignore
    expect(result.current.days[6].day).toBe('01')
    // @ts-ignore
    expect(result.current.days[result.current.days.length - 1].day).toBe('31')

    // Week days
    expect(result.current.weekDays.length).toBe(7)
    expect(result.current.weekDays[0]).toBe('Sa')
    expect(result.current.weekDays[6]).toBe('Fr')
  })
})
