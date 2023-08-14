export var Title = (props) => {
  return (
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
        ...props.style,
      }}
    >
      <div
        style={{
          width: '100%',
          color: 'rgb(255, 174, 52, 1)',
          fontFamily: 'primary',
          textAlign: 'center',
          fontWeight: 400,
          fontStyle: 'normal',
          border: '0px solid rgb(255, 174, 52, 1)',
          fontSize: '22px',
          textShadow:
            '0px 1px 1px #64646425, 0px 2px 1px rgba(0, 0, 0, 0.35)',
          height: 'max-content',
        }}
      >
        {props.alteration} Things I Want To Do
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
              '0px 1px 1px #64646425, 0px 8px 1px rgba(0, 0, 0, 0.35)',
          }}
        >
          BBeffore I Go
        </div>
      </div>
    </div>
  )
}
