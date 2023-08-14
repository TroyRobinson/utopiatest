import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from './stickers.js'
import {
  DecorativeLines,
  Checkerboard,
} from './cardcomponents/decorations.js'

export var Comp = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--purple)',
        paddingTop: '30px',
        paddingLeft: '30px',
      }}
    >
      <div
        style={{
          width: 351,
          height: 260,
          background: 'var(--yellow)',
          border: '4px solid var(--yellow)',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <AquaMan
          style={{
            position: 'absolute',
            left: 179,
            top: 131.5,
            zIndex: 8,
            borderRadius: 50,
          }}
        />
        <Mixologist
          style={{
            position: 'absolute',
            top: 47,
            left: 229,
            transform: 'rotate(-10deg)',
            zIndex: 10,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: 10,
              backgroundColor: 'var(--yellow)',
              color: 'var(--purple)',
              fontFamily: 'var(--primary)',
              fontSize: '1.1em',
              lineHeight: '1.7em',
              width: '100%',
              height: '34.27927927928%',
            }}
          >
            Sittt BBack andd RREELLAX
          </div>
          <div
            style={{
              height: '50%',
              width: '100%',
              background: 'white',
              backgroundImage:
                'url(https://cdn.utopia.app/editor/sample-assets/flamingo.jpg)',
              backgroundSize: '32%',
              filter: 'contrast(180%)',
              mixBlendMode: 'luminosity',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              height: '20%',
              width: '100%',
              background: 'var(--orange)',
            }}
          >
            <Checkerboard
              style={{ height: '100%' }}
              color1='var(--yellow)'
              color2='var(--orange)'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
