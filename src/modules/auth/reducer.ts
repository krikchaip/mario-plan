import { AnyAction } from 'redux'

export type State = typeof initialState

const initialState = {}

export default (state: State = initialState, action: AnyAction) => {
  return state
}
