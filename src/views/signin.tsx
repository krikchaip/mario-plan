import React from 'react'
import { connect } from 'react-redux'

import useFormState, { serialize } from 'lib/hooks/useFormState'

import auth from 'modules/auth'

type Props = typeof mapDispatchToProps

const mapDispatchToProps = {
  signin: auth.actions.signin.attempt
}

export const Signin = (props: Props) => {
  const { signin } = props
  const formState = useFormState({ email: '', password: '' })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signin(serialize(formState))
  }

  /** element target id update pattern */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    formState[e.target.id as keyof (typeof formState)].set(e.target.value)
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Signin)
