import build from 'redux-object'
import Person from './Person'

class ActionRecord {
  constructor(data) {
    this.data = data
  }

  bindObject(name) {
    const objectMap = {
      people: Person
    } 
    return objectMap[name]
  }

  find(name, id) {
    const bindObject = this.bindObject(name)
    const record = new bindObject(build(this.data, name, id))
    return record.toJS()
  }
}

export const createActionRecord = (data) => new ActionRecord(data)
