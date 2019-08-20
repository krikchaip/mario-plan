import { AnyAction } from 'redux'

type State = typeof initialState
const initialState = {}

export default (state: State = initialState, action: AnyAction) => {
  return state
}
