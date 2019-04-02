import React from 'react'

interface Props {
  direction?: 'up' | 'down' | 'left' | 'right'
  height: string
  width: string
  iconColor?: string
}

function calculateAngle(direction: Props['direction']) {
  switch (direction) {
    case 'up':
      return 0
    case 'down':
      return 180
    case 'left':
      return -90
    case 'right':
    default:
      return 90
  }
}

function ArrowIcon({height, width, iconColor, direction = 'right'}: Props) {
  const angle = calculateAngle(direction)
  return (
    <svg
      width={width}
      height={height}
      color={iconColor}
      transform={`rotate(${angle} 0 0)`}
      viewBox="0 0 9 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M4.46.001a.538.538 0 0 0-.358.174L.156 4.48a.538.538 0 1 0 .796.724l3.01-3.285v13.689a.563.563 0 0 0 .538.55.563.563 0 0 0 .538-.55V1.918l3.01 3.286a.538.538 0 1 0 .796-.724L4.898.175a.538.538 0 0 0-.437-.174z"
      />
    </svg>
  )
}

export default ArrowIcon
