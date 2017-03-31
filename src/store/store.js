export const addEvent = (key, payload) => {
  localStorage.setItem(String(key), JSON.stringify(payload))
}

export const fetchAll = () =>
  Object.keys(localStorage)
    .map(item => JSON.parse(localStorage.getItem(item)))


export const deleteEvent = (key) => {
  localStorage.removeItem(key)
}

export const getNextId = () =>
  +Object.keys(localStorage)
    .sort((a, b) => a - b)
    .pop() + 1 || 0

export const changeText = (keyStore, type, text, keyTopic) => {
  const event = JSON.parse(localStorage.getItem(keyStore))

  if (type === 'title') {
    event.title = text ? text : ''
    localStorage.setItem(String(keyStore), JSON.stringify(event))
  } else {
    event.listOfTopics[keyTopic] = text ? text : ''
    localStorage.setItem(String(keyStore), JSON.stringify(event))
  }
}

export const addTopic = (key) => {
  const event = JSON.parse(localStorage.getItem(key))
  const lot = event.listOfTopics
  lot.push('')

  localStorage.setItem(String(key), JSON.stringify(event))
}

export const removeTopic = (eventKey, topicKey) => {
  const event = JSON.parse(localStorage.getItem(eventKey))
  const lot = event.listOfTopics
  lot.splice(topicKey, 1)
  
  localStorage.setItem(String(eventKey), JSON.stringify(event))
}