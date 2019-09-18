import pipe from 'ramda/src/pipe'

import { State } from './reducer'

const getState = (state: AppState) => state.auth

export const getError = pipe(
  getState,
  (state: State) => state.error
)
