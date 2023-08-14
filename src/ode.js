import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Tropicologist,
  RiskTaker,
} from './stickers.js'
import { Checkerboard } from './cardcomponents/decorations.js'

export var Ode = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Checkerboard
        style={{
          position: 'absolute',
          left: 540,
          top: -174,
          width: 452,
          height: 816,
          transform: 'rotate(-24deg)',
          opacity: 0.3,
        }}
        color1='var(--purple)'
        color2='black'
      />
      <div
        style={{
          width: 834,
          height: 642,
          backgroundColor: 'var(--purple)',
          zIndex: 20,
        }}
      >
        <AquaMan
          style={{
            position: 'absolute',
            left: 757.5,
            top: 360,
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Wonderer
          style={{
            position: 'absolute',
            left: 739,
            top: 513,
            width: 100,
            height: 100,
            borderRadius: 14,
            transform: 'rotate(12deg)',
          }}
        />
        <BirbWatcher
          style={{
            position: 'absolute',
            left: 646.5,
            top: 151,
            width: 134,
            height: 100,
            paddingTop: '11px',
            paddingBottom: '9px',
            paddingLeft: '12px',
            transform: 'rotate(-13deg)',
          }}
        />
        <RiskTaker
          style={{
            position: 'absolute',
            left: 736,
            top: 219,
            width: 90,
            height: 92,
            borderRadius: 15,
            paddingRight: '0px',
            transform: 'rotate(36deg)',
          }}
        />
        <Tropicologist
          style={{
            position: 'absolute',
            left: 694,
            top: -12,
            width: 100,
            height: 100,
            transform: 'rotate(19deg)',
          }}
        />
        <span
          style={{
            color: 'var(--yellow)',
            position: 'absolute',
            fontFamily: 'var(--secondary)',
            left: 47,
            top: 165.5,
            width: 742,
            height: 'min-content',
          }}
        >
          Before my time on earth is through
          <br />I want to see the world and all it has to
          offer
          <br />I want to climb mountains and become a bird
          watcher
          <br />
          <br />I want to try every type of food
          <br />
          And visit every single museum, no matter how crude
          <br />I want to learn a new language and speak it
          fluently
          <br />I want to dance and sing and be full of
          energy
          <br />
          <br />I want to go skydiving and bungee jumping
          too
          <br />I want to go scuba diving and see what's
          underneath the blue
          <br />I want to go on safari and see animals in
          their natural habitat
          <br />I want to do all these things, it's on my
          list, I'll do it, that's that
          <br />
          <br />
          The world is full of endless possibilities
          <br />
          So many things to do and see, look at the stars,
          feel the breeze
          <br />I want to find the end of every single
          rainbow
          <br />
          And I want to do all these things and more, before
          I go.
        </span>
        <div
          style={{
            color: 'var(--purple)',
            fontFamily: 'var(--secondary)',
            fontSize: '1.5em',
            padding: '20px',
            position: 'absolute',
            width: 617,
            height: 'min-content',
            borderRadius: '0 10px 0 0',
            borderTopRightRadius: '50px',
            left: 0,
            top: 52,
            backgroundImage:
              'linear-gradient(0deg, #FFA500 70%, #FFD689 92%, #FFFFFF9E 100%)',
          }}
        >
          I have a list of things I want to do...
        </div>
      </div>
    </div>
  )
}
