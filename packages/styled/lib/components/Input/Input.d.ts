interface InputProps {
  placeholder: string
  value: string
  id: string
  ariaLabel: string
  onClick(): void
  showCalendarIcon: boolean
}
declare function Input({
  placeholder,
  id,
  ariaLabel,
  onClick,
  value,
  showCalendarIcon,
}: InputProps): JSX.Element
export default Input
