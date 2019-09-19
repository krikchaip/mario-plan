import { Credentials } from './model'

export type Action = SigninAction | SignoutAction

export type SigninAction =
  | ReturnType<typeof signin.attempt>
  | ReturnType<typeof signin.success>
  | ReturnType<typeof signin.error>
export const signin = {
  attempt: (creds: Credentials) => ({
    type: '@auth/signin:attempt' as const,
    payload: creds
  }),
  success: (user: firebase.User) => ({
    type: '@auth/signin:success' as const,
    payload: user
  }),
  error: (err: Error) => ({
    type: '@auth/signin:error' as const,
    payload: err,
    error: true as const
  })
}

export type SignoutAction =
  | ReturnType<typeof signout.attempt>
  | ReturnType<typeof signout.success>
export const signout = {
  attempt: () => ({
    type: '@auth/signout:attempt' as const
  }),
  success: () => ({
    type: '@auth/signout:success' as const
  })
}
