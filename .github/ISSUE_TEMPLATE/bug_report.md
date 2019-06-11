---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

**@datepicker-react/hooks or @datepicker-react/styled version**
e.g. @datepicker-react/hooks@1.0.0

**Describe the bug**
A clear and concise description of what the bug is.

**Source code (including props configuration)**
Steps to reproduce the behavior:
```
<DateRangeInput
  onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
  onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
  startDate={state.startDate} // Date or null
  endDate={state.endDate} // Date or null
  focusedInput={state.focusedInput} // START_DATE, END_DATE or null
/>
```
If you have custom methods that you are passing into a `@datepicker-react` component / hooks, please include the source for those as well.

**Screenshots/Gifs**
If applicable, add screenshots or gifs to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Is the issue reproducible in Storybook?**
Please link to the relevant storybook example

**Additional context**
Add any other context about the problem here.
