import cuid from 'cuid'

import { Project } from './model'

export type Action = CreateAction

export type CreateAction = ReturnType<typeof create>
export const create = (project: Omit<Project, 'id'>) => ({
  type: '@project/create' as const,
  payload: {
    id: cuid(),
    title: project.title,
    content: project.content
  }
})
