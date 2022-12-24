import { initializeApp } from 'firebase/app'
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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export const getLastPosts = async (posts = [], lastSeen = null) => {
  let q = query(collection(db, 'posts'), limit(10), orderBy('date_creation', 'desc'))

  if (lastSeen) {
    q = query(collection(db, 'posts'), limit(10), orderBy('date_creation', 'desc'), startAfter(lastSeen))
  }

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    posts.push({ ...doc.data(), id: doc.id })
  })

  return [posts, querySnapshot.docs[querySnapshot.docs.length - 1]]
}

export const fetchPostByID = async id => {
  console.log('id', id)
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
