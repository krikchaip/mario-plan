import { takeLatest, call, put } from 'redux-saga/effects'

import { CreateAction, save, init } from './actions'
import { fetchProjects, addProject, Project } from './model'

const user = { firstname: 'test-firstname', lastname: 'test-lastname' }

function* initSaga() {
  try {
    const projects: Project[] = yield call(fetchProjects, user)
    yield put(init(projects))
  } catch {
    console.error('@project/init:error')
  }
}

function* saveSaga(action: CreateAction) {
  try {
    const project: Project = yield call(addProject, action.payload, user)
    yield put(save.success(project))
  } catch {
    yield put(save.error(new Error('@project/save:error')))
  }
}

export default function*() {
  yield call(initSaga)
  yield takeLatest<CreateAction>('@project/create', saveSaga)
}
