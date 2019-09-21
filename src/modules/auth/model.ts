import firebase from 'services/firebase'

export interface Credentials {
  email: string
  password: string
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

export async function emailSignin(user: Credentials) {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
}

export async function userSignout() {
  return firebase.auth().signOut()
}
