import React from 'react'
import { connect } from 'react-redux'
import { NavLink, NavLinkProps } from 'react-router-dom'

import omit from 'ramda/src/omit'

import { getUser } from '../selectors'

type Props = ReturnType<typeof mapStateToProps> & NavLinkProps & OwnProps
type OwnProps = {
  noAuth?: boolean
}

const mapStateToProps = (state: AppState) => ({
  user: getUser(state)
})

// TODO: module testing
export const AuthLink = (props: Props) => {
  const { user, noAuth, ...navLinkProps } = props
  const otherProps = omit(['dispatch'], navLinkProps)

  if (noAuth) {
    return user ? null : <NavLink {...otherProps} />
  }

  return user ? <NavLink {...otherProps} /> : null
}

export default connect(mapStateToProps)(AuthLink)
