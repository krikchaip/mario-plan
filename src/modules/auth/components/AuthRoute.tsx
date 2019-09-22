import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { getUser } from '../selectors'

type Props = ReturnType<typeof mapStateToProps> & RouteProps & OwnProps
type OwnProps = {
  redirect?: string
  noAuth?: boolean
}

const mapStateToProps = (state: AppState) => ({
  user: getUser(state)
})

// TODO: module testing
export const AuthRoute = (props: Props) => {
  const { user, redirect = '/', noAuth, ...routeProps } = props

  if (noAuth) {
    return user ? <Redirect to={redirect} /> : <Route {...routeProps} />
  }

  return user ? <Route {...routeProps} /> : <Redirect to={redirect} />
}

export default connect(mapStateToProps)(AuthRoute)
