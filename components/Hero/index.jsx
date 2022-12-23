import { useContext } from 'react'
import { Context } from '../../context/context'
import { getPostDate, breakText, wysiwygText } from '../../utils/functions'

export const Hero = () => {
  const { posts, loading } = useContext(Context)
  if (loading || !posts.length) {
    return <div>...</div>
  }

  const { title, body, date_creation: dateCreation } = posts[0]

  return (
    <div className='bg-black px-8 text-white text-xl leading-7'>
      <div className='py-14 my-0 mx-auto text-start md:py-20 lg:py-28 md:w-full lg:w-4/5'>
        <div className='flex items-stretch gap-20 content-between lg:gap-10 md:flex-col'>
          <div className='flex-1 break-words text-start'>
            <p className='text-sm py-1'>
              ÚLTIMO EPISODIO // {' '}
              {dateCreation && getPostDate(dateCreation)}
            </p>
            <h2 className='mt-7 mb-5 text-xl tracking-tight leading-6 md:text-2xl lg:text-4xl'>
              <a>
                {title}
              </a>
            </h2>
            <p>
              {body && breakText(wysiwygText(body), 50)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
