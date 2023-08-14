import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Profile } from '/src/profile.js'
import { Intro } from '/src/intro.js'
import { DiscoverActivities } from '/src/discoveractivities.js'
import { MoodBoard } from '/src/mood-board.js'
import { ActivityCard } from '/src/activity-card.js'
import { ActivityCardComplete } from '/src/activity-card-complete.js'
import { ActivityCardIncomplete } from '/src/activity-card-incomplete.js'

import { ActivityCardSmall } from '/src/activity-card-small.js'
import {
  ActivityCardSmallComplete,
  ActivityCardSmallComplete2,
} from '/src/activity-card-small-complete.js'
import {
  ActivityCardSmallIncomplete,
  ActivityCardSmallIncomplete2,
} from '/src/activity-card-small-incomplete.js'

import { activities } from '../public/data.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: -1370,
        top: -717,
        width: 834,
        height: 2292,
      }}
      data-label='Discover Activities'
    >
      <DiscoverActivities />
    </Scene>
    <Scene
      style={{
        width: 834,
        position: 'absolute',
        left: -448,
        top: -717,
        height: 'max-content',
        overflow: 'hidden',
      }}
      data-label='My List'
    >
      <App style={{ width: 834, height: 2676 }} />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 864,
        position: 'absolute',
        left: -2304,
        top: -716.75,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile age='23' city='Brooklyn' achievements='7' />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -2304,
        top: 363,
        width: 834,
        height: 642,
      }}
      data-label='Ode To This App'
    >
      <Intro />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -4024,
        top: -717,
        width: 1600,
        height: 1656,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 606.5,
        top: -399.5,
        width: 834,
      }}
      data-label='Activity Card'
    >
      <ActivityCard activity={activities[2]} />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 606.5,
        top: 975,
        width: 834,
      }}
      data-label='Small Activity Card'
    >
      <ActivityCardSmall activity={activities[2]} />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 2429.5,
        top: -402,
        width: 834,
      }}
      data-label='Complete'
    >
      <ActivityCardComplete
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 2429.5,
        top: 554,
        width: 834,
      }}
      data-label='Complete'
    >
      <ActivityCardSmallComplete
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 2430,
        top: 975,
        width: 834,
      }}
      data-label='Complete 2'
    >
      <ActivityCardSmallComplete2
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 1561.5,
        top: -401,
        width: 834,
      }}
      data-label='Incomplete'
    >
      <ActivityCardIncomplete
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 1561.5,
        top: 555,
        width: 834,
      }}
      data-label='Incomplete'
    >
      <ActivityCardSmallIncomplete
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: 1561.5,
        top: 975,
        width: 834,
      }}
      data-label='Incomplete 2'
    >
      <ActivityCardSmallIncomplete2
        activity={activities[1]}
        color='var(--yellow)'
      />
    </Scene>
  </Storyboard>
)
