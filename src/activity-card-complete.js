import * as React from 'react'
import '../public/globals.css'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Description } from './cardcomponents/description.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var ActivityCardComplete = (props) => {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Stamp
            name={props.activity.date}
            style={{ top: -160, left: 40, marginTop: -20 }}
            color={props.color}
          />
          <Description
            description={props.activity.description}
            style={{
              padding: '5px 20px 14px 20px',
              borderRadius: '0px 0px 0px 20px',
              backgroundColor: props.color,
            }}
          />
        </div>
      </div>
      <ImageContainer
        imageUrl={props.activity.imageUrl}
        style={{ transform: 'scale(1.1)' }}
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
          rating={props.activity.rating}
          style={{
            padding: '25px 20px',
            borderRadius: 20,
          }}
          color={props.color}
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
