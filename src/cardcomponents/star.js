import * as React from 'react'
export var Star = (props) => {
  return (
    <div style={{ ...props.style }} className='star'>
      <svg
        width='128'
        height='119'
        viewBox='0 0 128 119'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_230_1821)'>
          <path
            d='M64 21L77.3495 51.9355L112 54.613L85.6 76.4097L93.6656 109L64 91.5355L34.3344 109L42.4 76.4097L16 54.613L50.6505 51.9355L64 21Z'
            fill={props.color}
          />
          <path
            d='M65.3772 20.4057L64 17.2141L62.6228 20.4057L49.632 50.5098L15.8844 53.1175L12.1794 53.4038L15.045 55.7697L40.7172 76.9655L32.8783 108.64L32.0213 112.102L35.0954 110.293L64 93.2762L92.9046 110.293L95.9787 112.102L95.1217 108.64L87.2828 76.9655L112.955 55.7697L115.821 53.4038L112.116 53.1175L78.368 50.5098L65.3772 20.4057Z'
            stroke='var(--purple)'
            stroke-width='3'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_230_1821'
            x='0.358765'
            y='0.428223'
            width='127.282'
            height='117.776'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='-5' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_230_1821'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_230_1821'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
