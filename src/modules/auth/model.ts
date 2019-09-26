import firebase from 'services/firebase'

export interface Credentials {
  email: string
  password: string
}

export interface SignupForm extends Credentials {
  firstname: string
  lastname: string
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

export async function userSignup(form: SignupForm) {
  const { email, password, ...userData } = form

  // automatically signed-in user when success
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

  await firebase
    .firestore()
    .collection('users')
    .doc(user!.uid)
    .set(userData)

  return user
}

export async function userSignin(creds: Credentials) {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password)

  return user
}

export async function userSignout() {
  return firebase.auth().signOut()
}
