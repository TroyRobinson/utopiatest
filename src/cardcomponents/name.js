import * as React from 'react'
export var Name = (props) => {
  return (
    <div
      style={{
        color: 'var(--purple)',
        fontFamily: 'primary',
        fontSize: '38px',
        lineHeight: '1.2em',
        ...props.style,
      }}
    >
      {props.text}
    </div>
  )
}
