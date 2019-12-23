interface NavButtonProps {
  type: 'next' | 'prev'
  onClick(): void
  vertical: boolean
  rtl: boolean
  ariaLabel: string
}
declare function NavButton({type, onClick, vertical, rtl, ariaLabel}: NavButtonProps): JSX.Element
export default NavButton
