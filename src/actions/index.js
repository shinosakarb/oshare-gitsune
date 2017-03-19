import { createActions } from 'redux-actions'
import normalize from 'json-api-normalizer'
const { success, failure } = createActions('SUCCESS', 'FAILURE')

class ActionDispatch {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  request(path) {
    fetch(path)
      .then(response => response.json()
      .then((json) => response.ok ? json : Promise.reject(json))
    ).then(
      response => this.dispatch(success(normalize(response, {endpoint: path}))),
      error => this.dispatch(failure(Object.assign(error, {error: true})))
    )
  }
}

export const createActionDispatch = (dispatch) => new ActionDispatch(dispatch)
