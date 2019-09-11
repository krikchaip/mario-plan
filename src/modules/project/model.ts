import firebase from 'services/firebase'

export interface Project {
  id: string
  title: string
  content: string
  authorFirstName: string
  authorLastName: string
  createdAt: Date
}

export interface Author {
  firstname: string
  lastname: string
}

export async function fetchProjects(author: Author) {
  const snapshot = await firebase
    .firestore()
    .collection('projects')
    .orderBy('createdAt', 'desc')
    .where('authorFirstName', '==', author.firstname)
    .where('authorLastName', '==', author.lastname)
    .get()
  const projects = snapshot.docs.map(doc => {
    const project = doc.data()
    return {
      ...project,
      id: doc.id,
      createdAt: project.createdAt.toDate()
    }
  })

  return projects as Project[]
}

export async function addProject(
  project: Partial<Project>,
  user: Author
): Promise<Project> {
  const doc = {
    title: project.title || 'Untitled',
    content: project.content || '',
    authorFirstName: user.firstname,
    authorLastName: user.lastname,
    createdAt: firebase.firestore.Timestamp.now()
  }
  const docRef = await firebase
    .firestore()
    .collection('projects')
    .add(doc)

  return {
    ...doc,
    id: docRef.id,
    createdAt: doc.createdAt.toDate()
  }
}
