import { fork } from 'redux-saga/effects'

import auth from 'modules/auth'
import project from 'modules/project'

export default function*() {
  yield fork(auth.saga)
  yield fork(project.saga)
}
