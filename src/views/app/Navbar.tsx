import React, { FC } from 'react'

const Navbar: FC = ({ children }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">{children}</div>
    </nav>
  )
}

export default Navbar
