import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import auth from 'modules/auth'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const mapStateToProps = (state: AppState) => ({
  user: auth.selectors.getUser(state)
})

const mapDispatchToProps = {
  signout: auth.actions.signout.attempt
}

export const Menu = (props: Props) => {
  const { signout, user } = props

  if (user) {
    return (
      <ul className="right">
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

  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Signin</NavLink>
      </li>
    </ul>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
