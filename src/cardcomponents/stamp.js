import * as React from 'react'
import { CurvedText } from './curved-text.js'

export var Stamp = (props) => {
  return (
    <div
      style={{
        margin: '0 20px',
        zIndex: 30,
        display: 'grid',
        ...props.style,
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: props.color,
          boxShadow: '0px 4px 11px 5px rgba(0, 0, 0, 0.25)',
          borderRadius: 163,
          overflow: 'hidden',
          width: 120,
          height: 120,
          zIndex: 40,
          margin: 40,
          gridColumn: 1,
          gridRow: 1,
        }}
      >
        <svg
          width='87'
          height='110'
          viewBox='0 0 130 150'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M26.9783 67.8418C20.9351 61.7786 11.1211 61.7624 5.05798 67.8055C-1.00515 73.8486 -1.02137 83.6627 5.02174 89.7258L26.9783 67.8418ZM54.0901 117L43.1118 127.942L54.9246 139.794L65.8391 127.11L54.0901 117ZM152.749 26.1099C158.333 19.6212 157.599 9.83457 151.11 4.251C144.621 -1.33257 134.835 -0.598739 129.251 5.89005L152.749 26.1099ZM5.02174 89.7258L43.1118 127.942L65.0683 106.058L26.9783 67.8418L5.02174 89.7258ZM65.8391 127.11L152.749 26.1099L129.251 5.89005L42.3411 106.89L65.8391 127.11Z'
            fill='var(--purple)'
          />
        </svg>
      </div>
      <div
        style={{
          width: 200,
          height: 200,
          zIndex: 20,
          color: props.color,
          background: 'var(--purple)',
          opacity: 0.9,
          outline: '4px solid var(--yellow)',
          outlineColor: props.color,
          borderRadius: 100,
          gridColumn: 1,
          gridRow: 1,
        }}
        className='title-sticker'
      >
        <div
          style={{ position: 'relative', left: 96, top: 6 }}
        >
          <CurvedText
            text={props.name}
            arc={130}
            radius={90}
          />
        </div>
      </div>
    </div>
  )
}
