import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getFirestore, collection, getDocs, limit, query, orderBy, doc, getDoc, startAfter } from 'firebase/firestore'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(config)

const postLenghtQuery = 10

// Anonimous auth

// Initialize Cloud Firestore and get a reference to the service
const auth = getAuth(app)
const db = getFirestore(app)

signInAnonymously(auth)

export const firstQuote = async () => {
  const posts = []
  const q = query(collection(db, 'posts'), limit(postLenghtQuery + 1), orderBy('date_creation', 'desc'))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach(doc => {
    posts.push({ ...doc.data(), id: doc.id })
  })

  return [posts.slice(0, postLenghtQuery), querySnapshot.docs[postLenghtQuery]]
}

export const getLastPosts = async (posts, lastSeen) => {
  const q = query(collection(db, 'posts'), limit(postLenghtQuery), orderBy('date_creation', 'desc'), startAfter(lastSeen))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    posts.push({ ...doc.data(), id: doc.id })
  })

  // check if is in last page
  const isInLastPage = querySnapshot.docs.length < postLenghtQuery
  return [posts, querySnapshot.docs[querySnapshot.docs.length - 1], isInLastPage]
}

export const fetchPostByID = async id => {
  const docRef = doc(db, 'posts', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap
  } else {
    return null
  }
}

export const getCategories = async () => {
  const categoriesList = []
  try {
    const querySnapshot = await getDocs(collection(db, 'categories'))
    querySnapshot.forEach(doc => {
      categoriesList.push({ ...doc.data(), id: doc.id })
    })
    return categoriesList
  } catch (error) {
    throw new Error('Fallo en obtener las categorías: ', error)
  }
}
