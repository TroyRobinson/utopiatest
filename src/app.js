// import * as React from 'react'
import '../public/globals.css'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'
import { Title } from '/src/title.js'
import { ActivityCard } from '/src/activity-card.js'
import { ActivityCardSmall } from '/src/activity-card-small.js'
import { activities } from '../public/data.js'
import { useState, useCallback } from 'react'
import { Button } from './button.js'

import {
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/solid'

export var App = () => {
  const [smallCardView, setSmallCardView] = useState(false)
  const toggleCardSize = useCallback(
    () =>
      setSmallCardView((smallCardView) => !smallCardView),
    [],
  )
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        <Title />
        <div
          className='category-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px 0px 0px 20px',
            width: '100%',
            height: 70,
            overflowX: 'scroll',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            gap: 20,
          }}
        >
          <Button
            onClick={toggleCardSize}
            icon={
              <ViewListIcon
                style={{
                  width: 25,
                  color: 'var(--off-white)',
                }}
              />
            }
            selected={!smallCardView}
            unClickedState
          />
          <Button
            onClick={toggleCardSize}
            icon={
              <ViewGridIcon
                style={{
                  width: 25,
                  color: 'var(--off-white)',
                }}
              />
            }
            selected={smallCardView}
          />
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
      {
        // @utopia/conditional=true
        smallCardView ? (
          <div
            style={{
              width: '100%',
              background: 'var(--orange)',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {activities.map((activity) => (
              <ActivityCardSmall activity={activity} />
            ))}
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              background: 'var(--orange)',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {activities.map((activity) => (
              <ActivityCard activity={activity} />
            ))}
          </div>
        )
      }
      <div
        style={{
          height: '80px',
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          boxShadow: '0px -2px 33px #674168',
        }}
      />
    </div>
  )
}
