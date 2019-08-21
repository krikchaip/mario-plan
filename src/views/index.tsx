import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from 'views/dashboard'
import Navigation from 'views/navigation'
import Project from 'views/project'
import Signin from 'views/signin'
import Signup from 'views/signup'

export const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/project" component={Project} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </>
  )
}

export default App
