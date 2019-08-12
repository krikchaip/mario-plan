import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import Details from './details'

const Project = (props: RouteComponentProps) => {
  const { match } = props
  return (
    <Switch>
      <Route path={`${match.path}/:id`} component={Details} />
    </Switch>
  )
}

export default Project
