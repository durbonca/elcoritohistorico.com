
import { useEffect, useState } from 'react'
import { db } from '../utils/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { Hero, NavBar, EntryPreview } from '../components'
import { getPosts } from '../api/posts'

export const getAllPosts = async () => {
  const postsList = []
  const q = query(collection(db, 'posts'), orderBy('date_creation', 'desc'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    postsList.push({ ...doc.data(), id: doc.id })
  })
  return postsList
}

export default function Home () {
  const [, setPosts] = useState([])

  const fetchPosts = async () => {
    const posts = await getAllPosts()
    setPosts(posts)
  }

  useEffect(() => {
    getPosts()
    fetchPosts()
  }, [])

  return (
    <div>
      <Hero />
      <div className='px-5'>
        <div>Últimos Episodios</div>
        <ul>
          <EntryPreview />
        </ul>
      </div>
    </div>
  )
}
