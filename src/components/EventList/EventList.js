import React from 'react'

import './EventList.css'

import { Event } from './Event/Event'

const classPath = 'app'

const classNames = {
  MAIN: `${classPath}__event-list`
}

export const EventList = props =>
  <div className={classNames.MAIN}>
    {
      props.list.map((event, i) =>
        <Event key={i} event={event} cb={props.cb} keyState={i} />
      )
    }
  </div>