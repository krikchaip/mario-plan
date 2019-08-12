import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Dashboard from 'views/dashboard'

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
        <Route path="/" component={Dashboard} />
      </Switch>
    </>
  )
}

export default App
