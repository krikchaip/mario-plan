import reducer from 'modules/root-reducer'

declare global {
  type AppState = ReturnType<typeof reducer>
}
