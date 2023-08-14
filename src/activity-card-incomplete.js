import * as React from 'react'
import '../public/globals.css'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 767,
        backgroundColor: props.color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        ...props.style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 63,
          overflow: 'visible',
          zIndex: 10,
          backgroundColor: props.color,
        }}
      >
        <DecorativeLines />
      </div>
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{
          filter: 'blur(1rem)',
          transform: 'scale(1.1)',
        }}
      />
      <div
        style={{
          backgroundColor: props.color,
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          padding: 20,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: 180,
          zIndex: 10,
        }}
      >
        <Rating
          style={{
            opacity: 0,
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <Name
            text={props.activity.name}
            style={{ marginRight: 20 }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 15,
              opacity: 0,
            }}
          >
            {props.activity.categories.map((category) => (
              <div
                style={{
                  backgroundColor: 'var(--purple)',
                  color: props.color,
                  padding: '2px 6px',
                  borderRadius: 3,
                  fontFamily: 'var(--secondary)',
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
