import {renderHook, cleanup} from 'react-hooks-testing-library'
import useMonth from './useMonth'

afterEach(cleanup)

test('should return days for april 2019', () => {
  const {result} = renderHook(() => useMonth({year: 2019, month: 3}))
  expect(result.current.length).toBe(30)
  expect(typeof result.current[0]).toBe('object')
  // @ts-ignore
  expect(result.current[0].day).toBe('01')
  // @ts-ignore
  expect(result.current[result.current.length - 1].day).toBe('30')
})

test('should return days for april 2019 start with sunday', () => {
  const {result} = renderHook(() => useMonth({year: 2019, month: 3, weekStartsOn: 0}))
  expect(result.current.length).toBe(31)
  expect(typeof result.current[0]).toBe('number')
  expect(typeof result.current[1]).toBe('object')
  // @ts-ignore
  expect(result.current[1].day).toBe('01')
  // @ts-ignore
  expect(result.current[result.current.length - 1].day).toBe('30')
})

test('should return days for march 2019', () => {
  const {result} = renderHook(() => useMonth({year: 2019, month: 2}))
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
  const {result} = renderHook(() => useMonth({year: 2019, month: 2, weekStartsOn: 0}))
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
  const {result} = renderHook(() => useMonth({year: 2019, month: 2, weekStartsOn: 6}))
  expect(result.current.length).toBe(37)
  expect(typeof result.current[0]).toBe('number')
  expect(typeof result.current[5]).toBe('number')
  expect(typeof result.current[6]).toBe('object')
  // @ts-ignore
  expect(result.current[6].day).toBe('01')
  // @ts-ignore
  expect(result.current[result.current.length - 1].day).toBe('31')
})
