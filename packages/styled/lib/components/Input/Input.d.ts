import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {PaddingProperty} from 'csstype'
interface InputProps {
  placeholder: string
  value: string
  id: string
  ariaLabel: string
  onClick(): void
  showCalendarIcon: boolean
  vertical: boolean
  isActive: boolean
  rtl: boolean
  disableAccessibility?: boolean
  padding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  onChange?(date: Date): void
  dateFormat: string
}
declare function Input({
  placeholder,
  id,
  vertical,
  isActive,
  ariaLabel,
  onClick,
  value,
  showCalendarIcon,
  padding,
  rtl,
  disableAccessibility,
  dateFormat,
  onChange,
}: InputProps): JSX.Element
export default Input
