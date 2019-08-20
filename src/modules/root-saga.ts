import { fork } from 'redux-saga/effects'

export default function*() {
  yield fork(() => console.log('hello world!'))
}
