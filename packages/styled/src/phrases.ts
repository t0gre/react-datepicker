export interface DatepickerPhrases {
  datepickerStartDatePlaceholder: string
  datepickerStartDateLabel: string
  datepickerEndDateLabel: string
  datepickerEndDatePlaceholder: string
  resetDates: string
  close: string
}

export interface DateRangeInputPhrases extends DatepickerPhrases {
  startDateAriaLabel: string
  endDateAriaLabel: string
  startDatePlaceholder: string
  endDatePlaceholder: string
}

export interface DateRangeInputPhrases extends DatepickerPhrases {
  startDateAriaLabel: string
  endDateAriaLabel: string
  startDatePlaceholder: string
  endDatePlaceholder: string
}

export interface DateSingleInputPhrases extends DatepickerPhrases {
  dateAriaLabel: string
  datePlaceholder: string
}

export const datepickerPhrases = {
  datepickerStartDatePlaceholder: 'Select',
  datepickerStartDateLabel: 'Start date:',
  datepickerEndDatePlaceholder: 'Select',
  datepickerEndDateLabel: 'End date:',
  resetDates: 'Reset dates',
  close: 'Close',
}

export const dateRangeInputPhrases = {
  ...datepickerPhrases,
  startDateAriaLabel: 'Start date',
  endDateAriaLabel: 'End date',
  startDatePlaceholder: 'Start date',
  endDatePlaceholder: 'End date',
}

export const dateSingleInputPhrases = {
  ...datepickerPhrases,
  dateAriaLabel: 'Select date',
  datePlaceholder: 'Select date',
}
