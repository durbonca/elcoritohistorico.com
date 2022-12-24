import { useState, useEffect, createContext } from 'react'
import { getLastPosts, fetchPostByID, getCategories } from '../utils/firebase'

const Context = createContext()

const ContextProvider = props => {
  const [posts, setPosts] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastSeen, setLastSeen] = useState(null)

  const fetchFirstTime = async () => {
    setLoading(true)
    const categories = await getCategories()
    const [getPosts, getLastSeen] = await getLastPosts()
    setCategoryList(categories)
    setPosts(getPosts)
    setLastSeen(getLastSeen)
    setLoading(false)
  }

  const fetchMore = async () => {
    const [getPosts, getLastSeen] = await getLastPosts(posts, lastSeen)
    setPosts(getPosts)
    setLastSeen(getLastSeen)
  }

  const getPostByID = async id => {
    let getPost = posts.find(post => post.id === id)
    if (getPost) {
      return getPost
    } else if (!getPost) {
      getPost = await fetchPostByID(id)
      return getPost.data()
    } else {
      return null
    }
  }

  useEffect(() => {
    fetchFirstTime()
  }, [])

  return (
    <Context.Provider value={{ posts, categoryList, loading, fetchMore, getPostByID }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
