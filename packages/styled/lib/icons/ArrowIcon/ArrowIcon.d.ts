interface Props {
  direction?: 'up' | 'down' | 'left' | 'right'
  height: string
  width: string
  iconColor?: string
  className?: string
}
declare function ArrowIcon({height, width, iconColor, direction, className}: Props): JSX.Element
export default ArrowIcon
