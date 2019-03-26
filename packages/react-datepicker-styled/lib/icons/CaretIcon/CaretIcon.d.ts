/// <reference types="./src/@types" />
interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}
declare function CaretIcon({height, width, color, direction, className}: Props): JSX.Element
export default CaretIcon
