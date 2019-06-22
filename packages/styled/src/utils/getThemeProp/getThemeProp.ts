function getThemeProp(themeProp: string, defaultValue: any, theme?: Record<string, any>) {
  if (
    theme &&
    typeof theme === 'object' &&
    theme.reactDatepicker &&
    typeof theme.reactDatepicker === 'object' &&
    theme.reactDatepicker[themeProp]
  ) {
    return theme.reactDatepicker[themeProp]
  }

  return defaultValue
}

export default getThemeProp
