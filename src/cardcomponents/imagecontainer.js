import * as React from 'react'

export var ImageContainer = (props) => {
  return (
    <div
      className='imageContainer'
      style={{
        width: 878,
        height: 580,
        background: 'pink',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '0',
        ...props.style,
      }}
    >
      <img
        src={props.imageUrl}
        width='100%'
        alt='awesome activity'
      />
    </div>
  )
}
