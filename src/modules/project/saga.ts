import { takeLatest, call, put } from 'redux-saga/effects'

import { CreateAction, saveError } from './actions'
import { addProject } from './model'

function* save(action: CreateAction) {
  const user = { firstname: 'test-firstname', lastname: 'test-lastname' }
  try {
    yield call(addProject, action.payload, user)
  } catch {
    yield put(saveError(new Error('save')))
  }
}

export default function*() {
  yield takeLatest<CreateAction>('@project/create', save)
}
