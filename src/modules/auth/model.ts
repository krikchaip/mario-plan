import firebase from 'services/firebase'

export interface Credentials {
  email: string
  password: string
}

export async function emailSignin(user: Credentials) {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
}

export async function userSignout() {
  return firebase.auth().signOut()
}
