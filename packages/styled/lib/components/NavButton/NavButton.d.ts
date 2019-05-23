interface NavButtonProps {
  type: 'next' | 'prev'
  onClick(): void
  vertical: boolean
  rtl: boolean
}
declare function NavButton({type, onClick, vertical, rtl}: NavButtonProps): JSX.Element
export default NavButton
