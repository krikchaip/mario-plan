import * as actions from './actions'
import * as model from './model'
import * as selectors from './selectors'
import reducer from './reducer'
import saga from './saga'

export { default as AuthLink } from './components/AuthLink'
export { default as AuthRoute } from './components/AuthRoute'

export { default as useErrorFlush } from './hooks/useErrorFlush'

// TODO: module testing
export default {
  actions,
  model,
  selectors,
  reducer,
  saga
}
