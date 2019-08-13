import React, { useReducer } from 'react'

const FormState = { title: '', content: '' }

type FormState = typeof FormState
type FormAction = {
  type: '@set/title' | '@set/content'
  payload: string
}

const formReducer: React.Reducer<FormState, FormAction> = (state, action) => {
  switch (action.type) {
    case '@set/title':
      return { ...state, title: action.payload }
    case '@set/content':
      return { ...state, content: action.payload }
    default:
      return state
  }
}

const Create = () => {
  const [state, dispatch] = useReducer(formReducer, FormState)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(state)
  }

  /** element target id update pattern */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    dispatch({
      type: `@set/${e.target.id}` as FormAction['type'],
      payload: e.target.value
    })
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

export default Create
