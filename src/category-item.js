/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from 'react'

export var CategoryItem = (props) => {
  const [selected, setSelected] = useState()

  return (
    <div
      onClick={() => setSelected(!selected)}
      css={{ '&:hover': { opacity: 0.7 } }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45px',
        fontFamily: 'var(--safety)',
        fontFamily: 'var(--secondary)',
        fontSize: '16px',
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center',
        boxShadow: '0px 6px 1px rgba(0, 0, 0, 0.25)',
        border: '4px solid var(--purple)',
        backgroundColor: selected
          ? 'var(--off-white)'
          : 'var(--purple)',
        color: selected
          ? 'var(--purple)'
          : 'var(--off-white)',
        ...props.style,
      }}
    >
      {props.name}
    </div>
  )
}

export var ClearCategoriesButton = (props) => {
  return (
    <div
      css={{ '&:hover': { opacity: 0.7 } }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'helvetica',
        textTransform: 'uppercase',
        textAlign: 'center',
        boxShadow: '0px 6px 1px rgba(0, 0, 0, 0.25)',
        border: '4px solid var(--purple)',
        backgroundColor: 'var(--off-white)',
        color: 'var(--purple)',
        fontSize: '4em',
        fontWeight: '200',
        overflow: 'hidden',
        width: '45px',
        height: '45px',
        ...props.style,
      }}
    >
      <svg
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M22.4531 26.3826L-4.28696 53.1226L-7.5 50.7401L19.6553 23.5848L-4.54693 -0.617489L-1.33389 -3L22.4531 20.787L46.2401 -3L49.4532 -0.617489L25.2509 23.5848L52.4062 50.7401L49.1932 53.1226L22.4531 26.3826Z'
          fill='var(--purple)'
        />
      </svg>
    </div>
  )
}
