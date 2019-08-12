import React, { useReducer } from 'react'

const FormState = { email: '', password: '', firstname: '', lastname: '' }

type FormState = typeof FormState
type FormAction = {
  type: '@set/email' | '@set/password' | '@set/firstname' | '@set/lastname'
  payload: string
}

const formReducer: React.Reducer<FormState, FormAction> = (state, action) => {
  switch (action.type) {
    case '@set/email':
      return { ...state, email: action.payload }
    case '@set/password':
      return { ...state, password: action.payload }
    case '@set/firstname':
      return { ...state, firstname: action.payload }
    case '@set/lastname':
      return { ...state, lastname: action.payload }
    default:
      return state
  }
}

const Signup = () => {
  const [state, dispatch] = useReducer(formReducer, FormState)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e =>
              dispatch({ type: '@set/email', payload: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e =>
              dispatch({ type: '@set/password', payload: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            onChange={e =>
              dispatch({ type: '@set/firstname', payload: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            onChange={e =>
              dispatch({ type: '@set/lastname', payload: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
