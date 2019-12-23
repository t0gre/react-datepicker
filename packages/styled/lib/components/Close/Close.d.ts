interface CloseProps {
  onClick(): void
  rtl: boolean
  closeText: string
}
declare function Close({onClick, rtl, closeText}: CloseProps): JSX.Element
export default Close
