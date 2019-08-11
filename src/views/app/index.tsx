import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import Navbar from './Navbar'

const App: FC = () => {
  return (
    <Navbar>
      <Link to="/" className="brand-logo">
        MarioPlan
      </Link>
      <Menu />
    </Navbar>
  )
}

export default App
