import { call, put, fork, take } from 'redux-saga/effects'

import { signin, signout } from './actions'
import { emailSignin, userSignout } from './model'

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
    const { error } = yield call(signinSaga, yield take('@auth/signin:attempt'))

    if (error) continue

    yield take('@auth/signout:attempt')
    yield call(signoutSaga)
  }
}

export default function*() {
  yield fork(loginSaga)
}
