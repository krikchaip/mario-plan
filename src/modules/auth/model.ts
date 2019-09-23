import firebase from 'services/firebase'

export interface Credentials {
  email: string
  password: string
}

export const cache = {
  get isLoggedIn() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    return isLoggedIn ? JSON.parse(isLoggedIn) : false
  },
  set isLoggedIn(value: boolean) {
    localStorage.setItem('isLoggedIn', String(value))
  }
}

export async function getCurrentUser() {
  // `firebase.auth().currentUser` somehow out-of-sync
  // when being called in this function. So instead we use AuthStateObserver.
  return new Promise(
    (
      res: (user: firebase.User | null) => void,
      rej: (error: firebase.auth.Error) => void
    ) => {
      firebase.auth().onAuthStateChanged(res, rej)
    }
  )
}

export async function emailSignin(creds: Credentials) {
  return firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
}

export async function userSignout() {
  return firebase.auth().signOut()
}
