import { Action } from './actions'

export type State = typeof initialState

const initialState = {
  error: null as Error | null,
  user: null as firebase.User | null
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case '@auth/signin:success':
      return { ...state, user: action.payload, error: null }
    case '@auth/signin:error':
      return { ...state, user: null, error: action.payload }
    default:
      return state
  }
}
