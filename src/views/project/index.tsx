import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import Details from './details'
import Create from './create'

export const Project = (props: RouteComponentProps) => {
  const { match } = props
  return (
    <Switch>
      <Route path={`${match.path}/create`} component={Create} />
      <Route path={`${match.path}/:id`} component={Details} />
    </Switch>
  )
}

export default Project
