import React, { ReactNode, SFC } from 'react'

type NavbarProps = {
  children?: ReactNode
}

const Navbar: SFC<NavbarProps> = ({ children }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">{children}</div>
    </nav>
  )
}

export default Navbar
