import { AnyAction } from 'redux'

export type State = typeof initialState

const initialState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
}

export default (state: State = initialState, action: AnyAction) => {
  return state
}
