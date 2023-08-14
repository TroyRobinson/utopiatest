/** @jsx jsx */
import { jsx } from '@emotion/react'

const theme = {
  colors: {
    primary: 'var(--purple)',
    secondary: 'var(--light-purple)',
  },
}

export var Button = ({ selected, ...props }) => {
  return (
    <button
      {...props}
      css={{
        border: 'none',
        borderRadius: 30,
        boxShadow: '0px 2px 4px rgb(0, 0, 0, 0.12)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': { opacity: 0.7 },
      }}
      style={{
        height: '45px',
        width: '45px',
        color: 'white',
        backgroundColor: selected
          ? theme.colors.primary
          : theme.colors.secondary,
        ...props.style,
      }}
    >
      {props.icon}
    </button>
  )
}
