import { call, put, fork, take, select } from 'redux-saga/effects'

import { signin, signout, init } from './actions'
import { emailSignin, userSignout, getCurrentUser } from './model'
import { getUser } from './selectors'

function* initSaga() {
  const user: firebase.User | null = yield call(getCurrentUser)
  yield put(init(user))
}

function* signinSaga(action: ReturnType<typeof signin.attempt>) {
  try {
    const { user }: firebase.auth.UserCredential = yield call(
      emailSignin,
      action.payload
    )
    return yield put(signin.success(user!))
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
