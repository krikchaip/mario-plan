import React from 'react'
import { connect } from 'react-redux'

import project from 'modules/project'

type Props = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppState) => ({
  projects: project.selectors.getProjects(state)
})

export const Projects = (props: Props) => {
  const { projects } = props
  return (
    <div className="project-list section">
      {projects.map(p => (
        <div key={p.id} className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{p.title}</span>
            <p>{p.content}</p>
            <p className="grey-text">3rd September, 2am</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps)(Projects)
