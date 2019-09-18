import { takeLatest, call, put } from 'redux-saga/effects'

import { signin } from './actions'
import { emailSignin } from './model'

function* signinSaga(action: ReturnType<typeof signin.attempt>) {
  try {
    const { user }: firebase.auth.UserCredential = yield call(
      emailSignin,
      action.payload
    )
    yield put(signin.success(user!))
  } catch {
    yield put(signin.error(new Error('@auth/signin:error')))
  }
}

export default function*() {
  yield takeLatest('@auth/signin:attempt', signinSaga)
}
