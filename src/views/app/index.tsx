import React, { SFC } from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import Navbar from './Navbar'

const App: SFC = () => {
  return (
    <Navbar>
      <Link to="/" className="brand-logo">
        MarioPlan
      </Link>
      <Menu.SignedIn />
    </Navbar>
  )
}

export default App
