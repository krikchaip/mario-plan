import { Action } from './actions'

export type State = typeof initialState

const initialState = {
  isLoggedIn: false,
  error: null as Error | null,
  user: null as firebase.User | null
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case '@auth/init:isLoggedIn':
      return { ...state, isLoggedIn: action.payload }
    case '@auth/init:user':
      return { ...state, user: action.payload }
    case '@auth/signin:success':
      return {
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        error: null
      }
    case '@auth/signin:error':
      return { isLoggedIn: false, user: null, error: action.payload }
    case '@auth/signout:success':
      return initialState
    default:
      return state
  }
}
