import * as React from 'react'
import PropTypes from 'prop-types'

export var CurvedText = ({ text, arc, radius }) => {
  const string = `${text}`
  const characters = string.split('')
  const degree = arc / characters.length

  return (
    <div>
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            position: 'absolute',
            fontFamily: 'var(--secondary)',
            fontSize: '20px',
            fontWeight: '600',
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

CurvedText.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
}
