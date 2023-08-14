import { UserProPic } from './pro-pic.js'
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
import { Stamp } from '/src/cardcomponents/stamp.js'

export var Profile = (props) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
          boxShadow: '0px 2px 33px #674168',
          left: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            color: 'var(--orange)',
            fontFamily: 'primary',
            textAlign: 'center',
            fontWeight: 400,
            fontStyle: 'normal',
            border: '0px solid rgb(255, 174, 52, 1)',
            fontSize: '22px',
            textShadow:
              '0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)',
            height: 'max-content',
            textTransform: 'uppercase',
          }}
        >
          Things I waant to do
        </div>
        <div style={{ width: '130%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontFamily: 'primary',
              textAlign: 'center',
              fontWeight: 400,
              fontStyle: 'normal',
              border: '0px solid rgb(255, 174, 52, 1)',
              fontSize: '72px',
              lineHeight: '125%',
              textShadow:
                '0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            BBeffore I Go
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          ...props.style,
          height: 'max-content',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexBasis: 0,
            justifyContent: 'space-between',
            padding: '40px',
          }}
        >
          <UserProPic
            style={{
              borderRadius: '50%',
              border: '6px solid var(--purple)',
              overflow: 'hidden',
              background: 'var(--orange)',
              position: 'relative',
              flexBasis: 160,
              height: 160,
            }}
            color='var(--purple)'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                color: 'var(--purple)',
                fontFamily: 'primary',
                fontSize: '38px',
              }}
            >
              McKayyyla Lannkau
            </div>
            <div style={{ height: 'max-content' }}>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}
                >
                  Primary Location:
                </div>
                <div>New York City, USA</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Alive Since:</div>
                <div style={{ opacity: 1 }}>1999</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Life Level:</div>
                <div style={{ opacity: 1 }}>Supreme</div>
              </div>
            </div>
          </div>
        </div>
        <DecorativeLines />
        <Checkerboard
          style={{
            height: 335,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 40,
            padding: 40,
          }}
          color1='var(--yellow)'
          color2='var(--orange)'
        >
          <Cryophile style={{ borderRadius: '50%' }} />
          <BirbWatcher
            style={{
              width: 121,
              padding: '10px 0px 10px 10px',
            }}
          />
          <RiskTaker
            style={{
              transform: 'rotate(42deg)',
              borderRadius: '5px',
            }}
          />
          <Mixologist
            style={{ transform: 'rotate(5deg)' }}
          />
          <Tropicologist
            style={{ borderRadius: '30px 30px 0 0' }}
          />
          <AquaMan style={{ borderRadius: '50%' }} />
          <Wonderer
            style={{
              transform: 'rotate(-15deg)',
              borderRadius: '0 0 30% 30% ',
            }}
          />
        </Checkerboard>
      </div>
    </div>
  )
}
