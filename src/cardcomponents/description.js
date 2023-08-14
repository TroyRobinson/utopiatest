import * as React from 'react'
export var Description = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: 396,
        height: 'min-content',
        zIndex: '10',
        background: 'var(--yellow)',
        fontFamily: 'var(--secondary)',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '144%',
        color: 'var(--purple)',
        ...props.style,
      }}
    >
      {props.description}
    </div>
  )
}
