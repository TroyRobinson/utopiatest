import * as React from 'react'
import '../public/globals.css'
import { Name } from './cardcomponents/name.js'

export var ActivityCardSmallIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        overflow: 'hidden',
        backgroundImage: `url(${props.activity.imageUrl})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 267,
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
        }}
      />
      <Name
        text={props.activity.name}
        style={{
          position: 'relative',
          top: -200,
          zIndex: 100,
          color: props.color,
          textAlign: 'center',
          padding: '0 70px',
        }}
      />
    </div>
  )
}

export var ActivityCardSmallIncomplete2 = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        overflow: 'hidden',
        backgroundImage: `url(${props.activity.imageUrl})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
        borderTop: `3px solid ${props.color}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 40px 20px 20px',
          backgroundColor: props.color,
          gap: 10,
          position: 'absolute',
          borderBottomRightRadius: 20,

          zIndex: 100,
        }}
      >
        <div
          style={{
            color: 'var(--purple)',
            fontFamily: 'primary',
            fontSize: '28px',
            textAlign: 'left',
            lineHeight: '1.2em',
          }}
        >
          {props.activity.name}
        </div>

        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            fontSize: 12,
            fontFamily: 'var(--secondary)',
          }}
        >
          {props.activity.categories.map((category) => (
            <div
              style={{
                backgroundColor: 'var(--purple)',
                color: props.color,
                padding: '2px 6px',
                borderRadius: 3,
                height: 'min-content',
              }}
            >
              {category}
            </div>
          ))}
        </div> */}
      </div>

      <div
        style={{
          width: '100%',
          height: 267,
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
        }}
      />
    </div>
  )
}
