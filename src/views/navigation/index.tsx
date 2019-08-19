import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navbar'
import Menu from './menu'

export const Navigation = () => {
  return (
    <Navbar>
      <Link to="/" className="brand-logo">
        MarioPlan
      </Link>
      <Menu />
    </Navbar>
  )
}

export default Navigation
