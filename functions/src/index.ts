import * as firebase from 'firebase-admin'
import * as functions from 'firebase-functions'

firebase.initializeApp()

export const onProjectCreate = functions.firestore
  .document('projects/{id}')
  .onCreate(async snapshot => {
    const project = snapshot.data()

    if (!project) return

    await firebase
      .firestore()
      .collection('notifications')
      .add({
        detail: 'Added a new project',
        time: project.createdAt,
        who: {
          id: project.authorId,
          name: `${project.authorFirstName} ${project.authorLastName}`
        }
      })

    console.log(`"${project.title}" was created by ${project.authorId}`)
  })
