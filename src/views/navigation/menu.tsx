import React from 'react'
import { connect } from 'react-redux'

import auth, { AuthLink } from 'modules/auth'

type Props = typeof mapDispatchToProps

const mapDispatchToProps = {
  signout: auth.actions.signout.attempt
}

export const Menu = (props: Props) => {
  const { signout } = props
  return (
    <ul className="right">
      <li>
        <AuthLink noAuth to="/signup">
          Signup
        </AuthLink>
      </li>
      <li>
        <AuthLink noAuth to="/signin">
          Signin
        </AuthLink>
      </li>
      <li>
        <AuthLink to="/project/create">New Project</AuthLink>
      </li>
      <li>
        <AuthLink to="/" onClick={signout}>
          Log Out
        </AuthLink>
      </li>
      <li>
        <AuthLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </AuthLink>
      </li>
    </ul>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Menu)
