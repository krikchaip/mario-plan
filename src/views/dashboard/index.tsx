import React, { FC } from 'react'

import Notifications from './notifications'
import Projects from './projects'

const Dashboard: FC = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <Projects />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
