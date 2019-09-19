import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import auth from 'modules/auth'

type Props = typeof mapDispatchToProps

const mapDispatchToProps = {
  signout: auth.actions.signout.attempt
}

export const Menu = (props: Props) => {
  const { signout } = props
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Signin</NavLink>
      </li>
      <li>
        <NavLink to="/project/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={signout}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Menu)
