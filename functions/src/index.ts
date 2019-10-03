import * as firebase from 'firebase-admin'
import * as functions from 'firebase-functions'

firebase.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const api = functions.https.onRequest((request, response) => {
  response.send('Hello World!')
})
