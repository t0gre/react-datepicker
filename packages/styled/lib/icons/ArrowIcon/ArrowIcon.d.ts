/// <reference types="./src/@types" />
interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}
declare function ArrowIcon({height, width, color, direction, className}: Props): JSX.Element
export default ArrowIcon
