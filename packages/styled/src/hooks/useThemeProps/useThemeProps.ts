import {ThemeContext} from 'styled-components'
import {useContext, useMemo} from 'react'

export default function useThemeProps(themeProps: string[] = []) {
  const context = useContext(ThemeContext)
  const theme = useMemo(() => {
    if (
      context &&
      typeof context === 'object' &&
      context.reactDatepicker &&
      typeof context.reactDatepicker === 'object'
    ) {
      return themeProps.reduce(
        (prevObj: Record<string, any>, val: string) => ({
          ...prevObj,
          [val]: context.reactDatepicker[val],
        }),
        {},
      )
    }

    return {}
  }, [context])

  return theme
}
