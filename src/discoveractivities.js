// import * as React from 'react'
import '../public/globals.css'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'
import { Checkerboard } from './cardcomponents/decorations.js'
import {
  AquaMan,
  Wonderer,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from './stickers.js'
import { Title } from '/src/title.js'

export var DiscoverActivities = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
        background: 'var(--orange)',
        color: 'var(--purple)',
        fontFamily: 'var(--secondary)',
      }}
    >
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 0px 25px',
          gap: 5,
          boxShadow: '0px 2px 33px var(--purple)',
        }}
      >
        <Title alteration='Discover' />
        <div
          className='category-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '10px 0px 0px 19px',
            gap: 32,
            width: '100%',
            height: '69.5px',
            overflowX: 'scroll',
          }}
        >
          <ClearCategoriesButton
            style={{
              borderRadizus: '50px',
              padding: '0px 18px',
              borderRadius: 22,
            }}
          />
          <CategoryItem
            selected={false}
            name='rare'
            style={{
              padding: '13px 27px',
              borderRadius: 50,
            }}
          />
          <CategoryItem
            selected={false}
            name='nearby'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='aeronautic'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='odd'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='trending'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
          <CategoryItem
            selected={false}
            name='risky'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            height: '100%',
            width: 351,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0px 2px 33px var(--purple)',
            position: 'relative',
          }}
        >
          <AquaMan
            style={{
              position: 'absolute',
              left: 176,
              top: 131,
              zIndex: 8,
              borderRadius: 50,
            }}
          />
          <Mixologist
            style={{
              position: 'absolute',
              top: 42.5,
              left: 225.5,
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
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <div
            style={{
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '130%',
              zIndex: 100,
            }}
          >
            Best Summer ever
          </div>
          <div style={{ fontSize: '1em', marginTop: 20 }}>
            I stayed in a beautiful villa on a tropical
            island. The villa had its own private pool,
            which was the perfect spot to relax and soak up
            the sun!
            <br />
            The water was crystal clear and inviting, and we
            would take dips to cool off. I'm immensely
            grateful for this life experience I got to share
            with great people.
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: 222,
            height: '100%',
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <Mixologist
            style={{
              position: 'absolute',
              transform: 'rotate(12deg)',
              zIndex: 10,
              left: 127,
              top: 194,
            }}
          />
          <div
            style={{
              height: '23.41563786008%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Gain a Fre$hh PPerspective
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              height: 273,
            }}
          >
            <div
              style={{
                width: '70%',
                height: '275px',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/martini.jpg)',
                backgroundSize: '100%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <Cryophile
              style={{
                position: 'absolute',
                left: 95,
                top: 116.5,
                borderRadius: 50,
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: '26.61630695444%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '130%',
              zIndex: 100,
            }}
          >
            on my bucket list.
          </div>
          <span style={{ width: 200, height: 195 }}>
            I've always wanted to witness the Northern
            Lights with my own eyes. It's on my list because
            it represents a dream that I've had for as long
            as I can remember!
          </span>
        </div>
        <div
          style={{
            width: 274,
            height: '100%',
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <Wonderer
            style={{
              position: 'absolute',
              top: 52,
              left: 196.5,
              zIndex: 10,
              transform: 'rotate(-12deg)',
            }}
          />
          <Cryophile
            style={{
              position: 'absolute',
              top: 147,
              left: -10,
              zIndex: 8,
              transform: 'rotate(192deg)',
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
                height: '104.54658385093%',
                width: '100%',
                background: 'white',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/northernlights.jpg)',
                backgroundSize: '42%',
                //filter: 'grayscale(100%)',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: '18%',
                width: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <div
              style={{
                padding: 10,
                backgroundColor: 'var(--yellow)',
                color: 'var(--purple)',
                fontFamily: 'var(--primary)',
                fontSize: '1.1em',
                lineHeight: '1.4em',
                width: '100%',
                height: '17.20930232558%',
              }}
            >
              FFeast Youur Eyes!
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0px 40px 0px 40px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '60%' }}>
          <div
            style={{
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '130%',
              zIndex: 100,
            }}
          >
            gotta risk it, to get the biscuit!
          </div>
          <div style={{ fontSize: '12px', marginTop: 20 }}>
            I have always been drawn to the thrill of
            adventure and pushing my limits. I know that
            some activities are risky and that there is an
            element of danger involved, but that's what
            makes it so appealing to me. <br />
            <br />I want to experience that feeling of pure
            exhilaration and I want to be able to say that I
            faced my fear and did something truly daring. I
            am aware of the risks, but I am willing to take
            them to experience something truly unique and
            unforgettable.
            <br />
          </div>
        </div>
        <div
          style={{
            width: '33.83693045564%',
            height: 297,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 2px 33px var(--purple)',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '76.23602976544%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <RiskTaker
              style={{
                position: 'absolute',
                top: 33,
                left: 139,
                zIndex: 10,
                transform: 'rotate(47deg)',
              }}
            />
            <div
              style={{
                width: '188px',
                height: '100%',
                backgroundImage:
                  'url(https://wisconsinskydivingcenter.com/wp-content/uploads/2020/12/emmycoop-smiling-with-joy-during-freefall-at-Wisconsin-Skydiving-Center-near-Milwaukee.jpg)',
                backgroundSize: '130px',
                backgroundPosition: '40% 30%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                width: '66px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
          </div>
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Jummp Out of a HHHHelicopter
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 40px',
        }}
      >
        <div
          style={{
            width: 332,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            contain: 'layout',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <RiskTaker
            style={{
              position: 'absolute',
              transform: 'rotate(35deg)',
              zIndex: 10,
              left: 17,
              top: 59.5,
            }}
          />
          <Tropicologist
            style={{
              position: 'absolute',
              transform: 'rotate(10deg)',
              left: 238.01428222656,
              zIndex: 10,
              top: 157.5,
              width: 100,
            }}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <div
              style={{
                width: '130.15325670498%',
                height: '240px',
                backgroundImage: 'url(assets/sos.jpg)',
                backgroundSize: '180%',
                filter: 'contrast(140%)',
                backgroundPosition: '70% 40%',
                mixBlendMode: 'luminosity',
                opacity: 1,
              }}
            />
          </div>
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            GGett losstt AAlonnggg the Wayyy
          </div>
        </div>
        <div
          style={{
            width: 386,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <RiskTaker
            style={{
              position: 'absolute',
              top: 203,
              left: 21,
              zIndex: 10,
              transform: 'rotate(47deg)',
            }}
          />
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Crashh A LLamborghini into a LLammp PPostt
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <div
              style={{
                width: '80%',
                height: '240px',
                backgroundImage: 'url(./assets/lambo.jpg)',
                backgroundSize: '220px',
                backgroundPosition: '0% 30%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: 223,
            height: '100%',
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <AquaMan
            style={{
              position: 'absolute',
              top: 203,
              left: 21,
              zIndex: 10,
            }}
          />
          <div
            style={{
              height: '23.5393258427%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Sailinggg Season is NNNNoW.
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <div
              style={{
                width: '70%',
                height: '100%',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/boat.jpg)',
                backgroundSize: '240px',
                backgroundPosition: '15% 30%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: 310,
            height: '100%',
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0px 2px 33px var(--purple)',
          }}
        >
          <Wonderer
            style={{
              position: 'absolute',
              top: 52,
              left: 197,
              zIndex: 10,
              transform: 'rotate(-12deg)',
              height: 118,
            }}
          />
          <Cryophile
            style={{
              position: 'absolute',
              top: 147,
              left: -10,
              zIndex: 8,
              transform: 'rotate(192deg)',
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
                height: '104.54658385093%',
                width: '100%',
                background: 'white',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/northernlights.jpg)',
                backgroundSize: '42%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: '18%',
                width: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--purple)'
                color2='var(--yellow)'
              />
            </div>
            <div
              style={{
                padding: 10,
                backgroundColor: 'var(--yellow)',
                color: 'var(--purple)',
                fontFamily: 'var(--primary)',
                fontSize: '1.1em',
                lineHeight: '1.4em',
                width: '100%',
                height: '20%',
              }}
            >
              FFeastt Youur Eyes!
            </div>
          </div>
        </div>
        <div style={{ width: '22.29976019185%' }}>
          <div
            style={{
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '130%',
              zIndex: 100,
            }}
          >
            Chase Your dreams.
          </div>
          <div style={{ fontSize: '12px', marginTop: 20 }}>
            It's an experience that is truly once in a
            lifetime and I want to be able to see it before
            I go. It'll be a truly magical moment and I'm
            excited to finally cross it off my list.
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
