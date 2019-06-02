import React from 'react'
import {render} from '@testing-library/react'
import DatepickerContext, {datepickerContextDefaultValue} from './context/datepickerContext'

function renderWithProviders(ui: any, options?: any, contextValues?: Record<string, unknown>) {
  return render(
    <DatepickerContext.Provider value={{...datepickerContextDefaultValue, ...contextValues}}>
      {ui}
    </DatepickerContext.Provider>,
    options,
  )
}

export * from '@testing-library/react'
export {renderWithProviders as render}
