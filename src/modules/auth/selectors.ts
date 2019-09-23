import pipe from 'ramda/src/pipe'

import { State } from './reducer'

const getState = (state: AppState) => state.auth

export const getIsLoggedIn = pipe(
  getState,
  (state: State) => state.isLoggedIn
)

export const getError = pipe(
  getState,
  (state: State) => state.error
)

export const getUser = pipe(
  getState,
  (state: State) => state.user
)
