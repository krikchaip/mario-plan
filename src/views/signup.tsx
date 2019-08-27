import React from 'react'

import useFormState, { serialize } from 'lib/hooks/useFormState'

export const Signup = () => {
  const formState = useFormState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(serialize(formState))
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
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
