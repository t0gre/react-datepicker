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
  padding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
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
}: InputProps): JSX.Element
export default Input
