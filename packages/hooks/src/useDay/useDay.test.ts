import {renderHook, act} from 'react-hooks-testing-library'
import useDay from '.'

const date = new Date(2019, 2, 1, 0, 0, 0)
const dayRef = {
  current: {
    focus: jest.fn(),
  },
}

test('should execute onClick callback', () => {
  const onDaySelect = jest.fn()
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect,
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  act(() => {
    result.current.onClick()
  })

  expect(onDaySelect).toBeCalled()
})

test('should not execute onClick callback, because day is disabled', () => {
  const onDaySelect = jest.fn()
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect,
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: () => true,
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  act(() => {
    result.current.onClick()
  })

  expect(result.current.disabledDate).toBe(true)
  expect(onDaySelect).not.toBeCalled()
})

test('should be active', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: null,
      isDateSelected: () => true,
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.isActive).toBe(true)
})

test('should be active first or last day', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: () => true,
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.isStartOrEnd).toBe(true)
})

test('should be within range', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: () => true,
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.isWithinHoverRange).toBe(true)
})

test('tabIndex should be 0', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: null,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.tabIndex).toBe(0)
})

test('should be unfocused', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: date,
      isDateSelected: jest.fn(),
      isDateFocused: jest.fn(),
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.tabIndex).toBe(-1)
})

test('should be focused', () => {
  const {result} = renderHook(() =>
    useDay({
      date,
      // @ts-ignore
      dayRef,
      onDaySelect: jest.fn(),
      focusedDate: date,
      isDateSelected: jest.fn(),
      isDateFocused: () => true,
      isFirstOrLastSelectedDate: jest.fn(),
      isDateHovered: jest.fn(),
      isDateBlocked: jest.fn(),
      onDayFocus: jest.fn(),
      onDayHover: jest.fn(),
    }),
  )

  expect(result.current.tabIndex).toBe(0)
})
