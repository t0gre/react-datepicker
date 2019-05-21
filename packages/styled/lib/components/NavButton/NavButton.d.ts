interface NavButtonProps {
  type: 'next' | 'prev'
  onClick(): void
  vertical: boolean
}
declare function NavButton({type, onClick, vertical}: NavButtonProps): JSX.Element
export default NavButton
