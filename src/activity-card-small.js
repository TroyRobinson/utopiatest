/** @jsx jsx */
import { jsx } from '@emotion/react'
import '../public/globals.css'
import { useState, useCallback } from 'react'
import { ActivityCardSmallComplete2 } from '/src/activity-card-small-complete.js'
import { ActivityCardSmallIncomplete2 } from '/src/activity-card-small-incomplete.js'

export var ActivityCardSmall = (props) => {
  const [completed, setCompleted] = useState(false)
  const toggleComplete = useCallback(
    () => setCompleted((completed) => !completed),
    [],
  )

  const color =
    props.activity.id % 2
      ? 'var(--yellow)'
      : 'var(--orange)'

  return (
    <div
      data-label='Activity Card'
      onClick={toggleComplete}
      style={{ overflow: 'hidden' }}
      css={{ '&:hover': { cursor: 'pointer' } }}
    >
      {!completed ? (
        <ActivityCardSmallComplete2
          activity={props.activity}
          color={color}
        />
      ) : (
        <ActivityCardSmallIncomplete2
          activity={props.activity}
          color={color}
        />
      )}
    </div>
  )
}
