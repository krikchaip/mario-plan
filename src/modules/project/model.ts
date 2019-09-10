import firebase from 'services/firebase'

export interface Project {
  id: string
  title: string
  content: string
}

export interface Author {
  firstname: string
  lastname: string
}

export async function addProject(project: Project, user: Author) {
  const { id, ...fields } = project
  await firebase
    .firestore()
    .collection('projects')
    .add({
      ...fields,
      authorFirstName: user.firstname,
      authorLastName: user.lastname,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}
