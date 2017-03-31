import React, { Component } from 'react'

export default class ToggableInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: this.props.text ? false : true,
      value: this.props.text || ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleRemoveTopic = this.handleRemoveTopic.bind(this)
  }

  handleSave() {
    if (this.state.value) {
      this.props.changeText(this.props.keyStore, this.props.fieldType, this.state.value, this.props.keyTopic)
      this.setState({editMode: false})
    } else {
      this.props.changeText(this.props.keyStore, this.props.fieldType, this.state.value, this.props.keyTopic)
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleClick() {
    this.setState({editMode: true})
  }

  handleKeyDown(e) {
    if (e.keyCode === 13)
      this.handleSave()
  }

  handleRemoveTopic(keyState, keyStore, topicKey) {
    this.props.removeTopic(keyState, keyStore, topicKey)
  }

  render() {
    return (
      <div>
        {
          this.state.editMode
            ? <input
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.handleSave}
                onKeyDown={this.handleKeyDown}
                autoFocus
              />
            : <span
                className={this.props.elemClass}
                onClick={this.handleClick}
              >
                { this.state.value }
              </span>
        }
        {
          this.props.fieldType !== 'title'
            ? <button
               onClick={() => this.handleRemoveTopic(this.props.keyState, this.props.keyStore, this.props.keyTopic)}
              >
                X
              </button>
            : null
        }
      </div>
      
    )
  } 
}