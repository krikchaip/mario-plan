import React from 'react'

const Projects = () => {
  return (
    <div className="project-list section">
      {Array(3)
        .fill(undefined)
        .map((_, idx) => (
          <div key={idx} className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title ">Project title</span>
              <p>Posted by The Net Ninja</p>
              <p className="grey-text">3rd September, 2am</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Projects
