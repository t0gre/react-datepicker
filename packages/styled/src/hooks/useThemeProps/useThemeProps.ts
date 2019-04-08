import {ThemeContext} from 'styled-components'
import {useContext, useMemo} from 'react'

export default function useThemeProps(themeProps: Record<string, any> = {}) {
  const context = useContext(ThemeContext)
  const theme = useMemo(() => {
    if (
      context &&
      typeof context === 'object' &&
      context.reactDatepicker &&
      typeof context.reactDatepicker === 'object'
    ) {
      return Object.keys(themeProps).reduce(
        (prevObj: Record<string, any>, val: string) => ({
          ...prevObj,
          [val]: context.reactDatepicker[val] || themeProps[val],
        }),
        {},
      )
    }

    return themeProps
  }, [context, themeProps])

  return theme
}
