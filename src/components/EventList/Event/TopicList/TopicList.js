import React from 'react'

import './TopicList.css'

import ToggableInput from '../../../ToggableInput/ToggableInput'

const classPath = 'app__event-list'

const classNames = {
  LIST: `${classPath}__event-topic-list`,
  LIST_ITEM: `${classPath}__event-topic-list__item`,
  TOPIC: `${classPath}__event-topic`,
  GAGE: `${classPath}__event-topic-list__gage`
}

export const TopicList = props =>
  <div>
    <h4>List of topics:</h4>
    <ul className={classNames.LIST}>
      {
        props.list.length
          ? props.list.map((topic, i) =>
              <li className={classNames.LIST_ITEM} key={i}>
                <ToggableInput
                  text={topic}
                  elemClass={classNames.TOPIC}
                  fieldType="topic"
                  removeTopic={props.removeTopic}
                  keyTopic={i}
                  keyState={props.keyState}
                  keyStore={props.keyStore}
                  changeText={props.changeText}
                />
              </li>
            )
          : <p className={classNames.GAGE}>Here is no topics yet</p>
      }
      <button onClick={() => props.addTopic(props.keyState, props.keyStore)}>+</button>
    </ul>
  </div>
  


