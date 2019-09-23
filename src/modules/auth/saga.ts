import { call, put, fork, take, select } from 'redux-saga/effects'

import { signin, signout, init } from './actions'
import { emailSignin, userSignout, getCurrentUser, cache } from './model'
import { getUser } from './selectors'

function* initSaga() {
  // pre-loaded cache
  let isLoggedIn: boolean = yield call(() => cache.isLoggedIn)
  yield put(init.isLoggedIn(isLoggedIn))

  const user: firebase.User | null = yield call(getCurrentUser)
  isLoggedIn = yield call(() => (cache.isLoggedIn = !!user))

  yield put(init.user(user))
  yield put(init.isLoggedIn(isLoggedIn))
}

function* signinSaga(action: ReturnType<typeof signin.attempt>) {
  try {
    const { user }: firebase.auth.UserCredential = yield call(
      emailSignin,
      action.payload
    )

    // logged-in state caching
    const isLoggedIn = yield call(() => (cache.isLoggedIn = !!user))

    return yield put(signin.success(user, isLoggedIn))
  } catch {
    return yield put(signin.error(new Error('@auth/signin:error')))
  }
}

// try logging out until success
function* signoutSaga() {
  while (true) {
    try {
      yield call(userSignout)
    } catch {
      continue
    }

    // logged-out state caching
    yield call(() => (cache.isLoggedIn = false))

    yield put(signout.success())
    break
  }
}

function* loginSaga() {
  while (true) {
    const user = yield select(getUser)
    if (!user) {
      const attempt = yield take('@auth/signin:attempt')
      const { error } = yield call(signinSaga, attempt)

      // re-login when an error occured
      if (error) continue
    }

    yield take('@auth/signout:attempt')
    yield call(signoutSaga)
  }
}

export default function*() {
  yield call(initSaga)
  yield fork(loginSaga)
}
