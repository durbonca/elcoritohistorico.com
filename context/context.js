import { useState, useEffect, createContext } from 'react'
import { getLastPosts, fetchPostByID, getCategories, firstQuote } from '../utils/firebase'

const Context = createContext()

const ContextProvider = props => {
  const [posts, setPosts] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastSeen, setLastSeen] = useState(null)
  const [isInLastPage, setIsInLastPage] = useState(false)

  const fetchFirstTime = async () => {
    setLoading(true)
    const categories = await getCategories()
    const [getPosts, getLastSeen] = await firstQuote()
    setCategoryList(categories)
    setPosts(getPosts)
    setLastSeen(getLastSeen)
    setLoading(false)
  }

  const fetchMore = async () => {
    const [getPosts, getLastSeen, isInLastPage] = await getLastPosts(posts, lastSeen)
    setIsInLastPage(isInLastPage)
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
    <Context.Provider value={{ posts, categoryList, loading, isInLastPage, fetchMore, getPostByID }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
