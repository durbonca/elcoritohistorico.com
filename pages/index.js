import { useContext } from 'react'
import { Context } from '../context/context'
import { Hero, Loading, ArchivesPosts, LoadMore } from '../components'

export default function Home () {
  const { posts, loading } = useContext(Context)

  if (loading) {
    return (
      <div className='text-center text-4xl'>Armando un Corito Sano...
        <div className='flex justify-center p-4'>
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Hero />
      <div className='pb-14 my-0 mx-auto max-w-screen-xl w-full'>
        <ArchivesPosts posts={posts} />
        <LoadMore />
      </div>
    </div>
  )
}
