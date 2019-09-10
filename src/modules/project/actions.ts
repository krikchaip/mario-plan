import cuid from 'cuid'

import { Project } from './model'

export type Action = CreateAction | SaveActionError

export type CreateAction = ReturnType<typeof create>
export const create = (project: Pick<Project, 'title' | 'content'>) => ({
  type: '@project/create' as const,
  payload: {
    id: cuid(),
    title: project.title,
    content: project.content
  }
})

export type SaveActionError = ReturnType<typeof saveError>
export const saveError = (error: Error) => ({
  type: '@project/save:error' as const,
  error: true as const,
  payload: error
})
