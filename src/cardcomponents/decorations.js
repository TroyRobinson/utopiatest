import * as React from 'react'
export var DecorativeLines = (props) => {
  const runCallback = (cb) => {
    return cb()
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        paddingBottom: 10,
        position: 'relative',
        zIndex: 20,
        ...props.style,
      }}
    >
      {runCallback(() => {
        const lines = []
        for (var i = 0; i < 6; i++) {
          lines.push(
            <div
              style={{
                width: '100%',
                height: '3px',
                background: 'var(--purple)',
              }}
              key={i}
            />,
          )
        }
        return lines
      })}
    </div>
  )
}

export var Checkerboard = (props) => {
  return (
    <div
      style={{
        background: props.color1
          ? props.color1
          : 'var(--white)',
        backgroundImage:
          props.color1 && props.color2
            ? `repeating-linear-gradient(45deg, ${props.color2} 25%, transparent 25%, transparent 75%, ${props.color2} 75%, ${props.color2}), repeating-linear-gradient(45deg, ${props.color2} 25%, ${props.color1} 25%, ${props.color1} 75%, ${props.color2} 75%, ${props.color2})`
            : 'repeating-linear-gradient(45deg, var(--orange) 25%, transparent 25%, transparent 75%, var(--orange) 75%, var(--orange)), repeating-linear-gradient(45deg, var(--orange) 25%, var(--white) 25%, var(--white) 75%, var(--orange) 75%, var(--orange))',
        backgroundPosition: '0 0, 10px 10px',
        backgroundSize: '20px 20px',
        width: '100%',
        height: 60,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}
