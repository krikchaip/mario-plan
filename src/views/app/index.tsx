import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Dashboard from 'views/dashboard'
import Project from 'views/project'
import Signin from 'views/signin'
import Signup from 'views/signup'

import Menu from './menu'
import Navbar from './navbar'

const App = () => {
  return (
    <>
      <Navbar>
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <Menu />
      </Navbar>
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
