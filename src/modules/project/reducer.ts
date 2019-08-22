import { Action } from './actions'
import { Project } from './model'

export type State = typeof initialState

const initialState = {
  projects: [] as Project[]
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case '@project/create':
      return { ...state, projects: state.projects.concat(action.payload) }
    default:
      return state
  }
}
