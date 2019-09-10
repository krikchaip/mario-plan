import { fork } from 'redux-saga/effects'

import project from 'modules/project'

export default function*() {
  yield fork(project.saga)
}
