import pipe from 'ramda/src/pipe'

import { State } from './reducer'

const getProject = (state: AppState) => state.project

export const getProjects = pipe(
  getProject,
  (project: State) => project.projects
)
