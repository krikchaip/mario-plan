import head from 'ramda/src/head'
import pipe from 'ramda/src/pipe'

const getState = (state: AppState) => state.auth

export const getIsLoggedIn = pipe(
  getState,
  state => state.isLoggedIn
)

export const getError = pipe(
  getState,
  state => state.error
)

export const getUser = pipe(
  getState,
  state => state.user
)

export const getUserInitials = pipe(
  getUser,
  user => {
    if (!user || !user.displayName) return ''

    // return the first char combined from each name
    const names = user.displayName.split(' ')
    switch (names.length) {
      case 1:
        return head(names[0])
      case 2:
        return names.map(head).join('')
      default:
        return names
          .slice(0, 2)
          .map(head)
          .join('')
    }
  }
)
