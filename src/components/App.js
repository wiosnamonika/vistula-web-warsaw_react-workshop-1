import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import * as store from '../store/store'

import { EventList } from './EventList/EventList'

const classNames = {
  ADD_BUTTON: 'app__add-event-button'
}

const EventModel = (id) => ({
  id,
  title: '',
  image: logo,
  date: '',
  listOfTopics: ['']
})

class App extends Component {
  componentDidMount() {
    this.setState({listOfEvents: store.fetchAll()})
  }

  constructor() {
    super()

    this.state = {
      listOfEvents: []
    }

    this.discardEvent = this.discardEvent.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.addTopic = this.addTopic.bind(this)
    this.removeTopic = this.removeTopic.bind(this)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vistula Web Warsaw</h2>
          <button className={classNames.ADD_BUTTON} onClick={this.addEvent}>Add event</button>
        </div>
        <div className="App-body">
          <EventList
            list={this.state.listOfEvents}
            cb={{
              discardEvent: this.discardEvent,
              addTopic: this.addTopic,
              removeTopic: this.removeTopic,
              changeText: store.changeText
            }}
          />
        </div>
      </div>
    )
  }

  addEvent() {
    this.setState({listOfEvents: this.state.listOfEvents.concat([EventModel(store.getNextId())])})
    store.addEvent(store.getNextId(), EventModel(store.getNextId()))
  }

  addTopic(keyState, keyStore) {
    store.addTopic(keyStore)
    this.state.listOfEvents[keyState].listOfTopics.push('')
    this.setState({})
  }

  removeTopic(keyState, keyStore, index) {
    store.removeTopic(keyStore, index)
    this.state.listOfEvents[keyState].listOfTopics.splice(index, 1)
    this.setState({})
  }

  discardEvent(keyState, keyStore) {
    store.deleteEvent(keyStore)
    this.setState({listOfEvents: this.state.listOfEvents.filter((_, i) => i !== keyState)})
  }
}

export default App;
