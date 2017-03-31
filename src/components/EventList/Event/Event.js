import React from 'react'

import './Event.css'

import ToggableInput from '../../ToggableInput/ToggableInput'
import { TopicList } from './TopicList/TopicList'

const classPath = 'app__event-list'

const classNames = {
  MAIN: `${classPath}__event`,
  TITLE: `${classPath}__event-title`,
  IMAGE: `${classPath}__event-image`,
  ACTIONS: `${classPath}__event-actions`,
}

export const Event = props => {
  return <div className={classNames.MAIN}>
    <div className={classNames.ACTIONS}>
      <button onClick={() => props.cb.discardEvent(props.keyState, props.event.id)}>
        Discard
      </button>
    </div>
    <div>
      <ToggableInput
        text={props.event.title}
        elemClass={classNames.TITLE}
        keyStore={props.event.id}
        fieldType="title"
        changeText={props.cb.changeText}
      />
    </div>
    <div>
      <img className={classNames.IMAGE} src={props.event.image} alt="img" />
    </div>
    <div>
      <TopicList
        list={props.event.listOfTopics}
        keyState={props.keyState}
        keyStore={props.event.id}
        addTopic={props.cb.addTopic}
        removeTopic={props.cb.removeTopic}
        changeText={props.cb.changeText}
      />
    </div>
  </div>
}
  
  