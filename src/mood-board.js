import {
  DecorativeLines,
  Checkerboard,
} from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Wonderer, Cryophile } from '/src/stickers.js'
import { Mixologist } from '/src/stickers.js'

export var MoodBoard = () => {
  const handleClick = () => {
    console.log('Cheers!')
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        color: 'var(--purple)',
        fontFamily: 'primary-basic',
        position: 'relative',
      }}
    >
      <img
        data-aspect-ratio-locked
        src='./assets/sos.jpg'
        style={{
          width: 576,
          height: 432,
          contain: 'layout',
          display: 'block',
          position: 'absolute',
          left: 96,
          top: 768,
        }}
      />
      <Mixologist
        style={{
          width: 100,
          height: 100,
          contain: 'layout',
          borderRadius: 0,
          position: 'absolute',
          left: 1224,
          top: 918,
        }}
      />
      <span
        onClick={handleClick}
        style={{
          position: 'absolute',
          wordBreak: 'break-word',
          fontSize: '44px',
          height: 114,
          color: 'rgb(16, 72, 145, 1)',
          left: 87,
          top: 80,
          width: 696,
        }}
      >
        Drink a Martini On Mount Everest
      </span>
      <Checkerboard
        style={{
          position: 'absolute',
          height: 335,
          width: 532,
          left: 850,
          top: 144,
        }}
        color1='var(--yellow)'
        color2='var(--orange)'
      />
      <Cryophile
        style={{
          position: 'absolute',
          left: 1356,
          top: 763,
          width: 100,
          height: 100,
          borderRadius: '50px',
          zIndex: 100,
        }}
      />
      <Wonderer
        style={{
          position: 'absolute',
          left: 1417,
          top: 938.5,
          width: 100,
          height: 100,
          transform: 'rotate(-14deg)',
          zIndex: 100,
          contain: 'layout',
        }}
      />
      <Description
        description='It was so cold, and we were so tired and defeated. There was nothing I could have wanted more.'
        style={{
          position: 'absolute',
          left: 259,
          top: 354.5,
          padding: '15px 20px 15px 20px',
          borderRadius: '0px 0px 20px 0px',
        }}
      />
      <ImageContainer
        imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
        style={{
          position: 'absolute',
          left: 421,
          top: 257,
        }}
      />
      <Stamp
        name='04 19 2011'
        style={{
          position: 'absolute',
          left: 163.5,
          top: 499,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 1456,
          top: 268,
          padding: '25px 20px',
          borderRadius: 20,
          zIndex: 100,
        }}
        color='var(--orange)'
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          width: 798,
          height: 'max-content',
          left: 383,
          top: 1276,
        }}
      >
        <DecorativeLines
          style={{
            width: 798,
            zIndex: 100,
            contain: 'layout',
            height: 64,
          }}
        />
        <div
          style={{
            backgroundColor: '#ffaf47',
            width: '100%',
            height: 252,
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
            padding: 36,
            contain: 'layout',
          }}
        >
          <span
            style={{
              wordBreak: 'break-word',
              fontSize: '24px',
              fontFamily: 'var(--secondary)',
              lineHeight: '140%',
              contain: 'layout',
              width: 298,
              height: 176,
              display: 'block',
              color: '#9a2584',
              zIndex: 100,
            }}
          >
            Not just any martini, and espresso martini!
            Because it's a long way back down...
          </span>
          <img
            data-aspect-ratio-locked
            src='./assets/sos.jpg'
            style={{
              width: 240,
              height: 180,
              contain: 'layout',
            }}
          />
          <Mixologist
            style={{
              width: 100,
              height: 100,
              contain: 'layout',
              borderRadius: 0,
            }}
          />
        </div>
      </div>
    </div>
  )
}
